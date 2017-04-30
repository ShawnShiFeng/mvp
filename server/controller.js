const repo = require('../database');
const express = require('express');
const helper = require('./helper');
const Result = require('../database/index')

const flickrBaseUrl = 'https://api.flickr.com/services/rest/?';
const flickerKey = '7ac9dfad1ef03dc18d21e941be34ddaf';

module.exports = {
    get : {
    },
    post : {
         displayOption : (req, res) => {

            var method = 'method=flickr.photos.search';
            var text = '&text=' + req.body.text;
            var key = '&api_key=' + flickerKey;
            var safeSearch = '&safe_search=1';

            var finalUrl = flickrBaseUrl + method + text + safeSearch + key;

            helper.sendGetRequest(finalUrl, function(body) {
                helper.parseXMLtoJSON(body, function(result) {
                        res.send(result);
                });
            })
        },

        pickRandomNumber : (req, res) => {
            console.log("show: ", req.body);
            var randomNumber = Math.floor(Math.random() * req.body.length) ;
            var queryObj = {
                resultNumber: randomNumber,
                result: req.body[randomNumber],
                choices: req.body
            }
            var newResultRepo = new Result(queryObj);
            newResultRepo.save();
            res.send(JSON.stringify(randomNumber));
        }}}