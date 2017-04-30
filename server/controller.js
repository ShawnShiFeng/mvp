const db = require('../database');
const express = require('express');
const helper = require('./helper');

const flickrBaseUrl = 'https://api.flickr.com/services/rest/?';
const flickerKey = '7ac9dfad1ef03dc18d21e941be34ddaf';

module.exports = {

    get : {

    },


    post : {
         findPic : function(req, res) {
            var method = 'method=flickr.photos.search';
            var text = '&text=' + req.body.text;
            var key = '&api_key=' + flickerKey;
            // var tags = '&tags=' +req.body.text;

            var finalUrl = flickrBaseUrl + method + text + key;

            helper.sendGetRequest(finalUrl, function(body) {
                console.log(body);
                helper.parseXMLtoJSON(body, function(result) {
                        res.send(result);
                });
            })
        }
    }
}