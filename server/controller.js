const db = require('../database');
const express = require('express');
const helper = require('./helper');

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

            var finalUrl = flickrBaseUrl + method + text + key;

            helper.sendGetRequest(finalUrl, function(body) {
                helper.parseXMLtoJSON(body, function(result) {
                        res.send(result);
                });
            })
        },
        pickRandomNumber : (req, res) => {
            console.log("length: ", req.body.length);
            var randomNumber = Math.floor(Math.random() * req.body.length) ;
            console.log(randomNumber);
            res.send(JSON.stringify(randomNumber));
        }
    }
}