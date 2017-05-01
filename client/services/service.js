angular.module('randomizer')
.service('req', function() {

    this.sendPostRequest = (payload, suffixUrl, callback) => {
        var url = '/click/' + suffixUrl;
        axios.post(url, payload)
        .then(response => {
            callback(response);
            console.log("post request sent!");
        })
        .catch( err => {
            console.log(err);
        })
    };

    this.sendGetRequest = callback => {
        $.ajax({
            url: '/click/getHistory',
            method: 'GET',
            contentType: 'application/json',
            success : function (data) {
                callback(data);
                console.log("get request for history sent!");
            },
            error : function (err) {
                console.error("error occured at get request")
            }
        })
    };

    this.formulatePictureUrl = (jsonObj, callback) => {
        var index = Math.floor((Math.random() * jsonObj.data.rsp.photos['0'].photo.length));
        var farmId = 'farm' + jsonObj.data.rsp.photos['0'].photo[index]['$'].farm;
        var serverId = jsonObj.data.rsp.photos['0'].photo[index]['$'].server;
        var photoId =  jsonObj.data.rsp.photos['0'].photo[index]['$'].id;
        var secret = '_' + jsonObj.data.rsp.photos['0'].photo[index]['$'].secret;
        var size = '_s.jpg';

        var finalUrl = 'http://' + farmId + '.staticflickr.com/' + serverId + '/' + photoId + secret +size;
        callback(finalUrl);
    };
});