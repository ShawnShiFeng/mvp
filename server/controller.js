const db = require('../database');
const express = require('express');
const request = require('request');
const API_KEY = 'AIzaSyB-RDKd-yE7d_6rK0bbF74kyhnlkNtnG-8';
const GOOGLE_TRANSLATE_API_BASEURL ='https://translation.googleapis.com/language/translate/v2?'


module.exports = {

    get : {

    },


    post : {

        getTranslation : function (req, res) {
            // console.log(req.body);
            // using "request" to google translation API
            // and retrive the translation based on user
            //input
            var parsedInputText = req.body.q.split(' ').join('%20');

            var key = 'key=' + API_KEY;
            var q = '&q=' + parsedInputText;
            var source = '&source=' + req.body.source;
            var target = '&target=' + req.body.target;
            var format = '&format=' + req.body.format;

            var finalUrl = GOOGLE_TRANSLATE_API_BASEURL + key + q + source + target +format;
            console.log(finalUrl);

          request(finalUrl, (error, response, body) => {
            var data = JSON.parse(body)
            if (error) {
              return;
             }
             console.log(body);
          });
          res.send();
        }
    }
}