const request = require('request');
const parseXML = require('xml2js').parseString;

module.exports = {

    sendGetRequest : function(finalUrl, callback) {
        request(finalUrl, (error, response, body) => {
            console.log("body",(body));
            if (error) {
              return;
             }
             callback(body);
          });
    },

    parseXMLtoJSON : function(input, callback) {
        parseXML(input, function(err, result) {
            // console.log("result:", result);
            callback(result);
        })
    }



}