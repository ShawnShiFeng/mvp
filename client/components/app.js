angular.module('randomizer')
.controller('appController', function(req, $scope) {

    const self = this;
    this.photos = [];

    const recognition = new webkitSpeechRecognition();
    // start recording
    this.startRecording = () =>{
        recognition.start();
        console.log("start recording");
        setTimeout(function() {
            recognition.stop();
            console.log("stop recording");
        }, 4000);
    }

    // on 'end' recording, send post request to server,
    // and retrieve a pic that is relate to the input
    recognition.onresult = (event)=> {
        self.text = event.results[0][0].transcript;
        console.log(self.text);
        req.sendPostRequest({text: self.text},'addItem', function(data) {
            req.formulatePictureUrl(data, function(url) {
                self.photos.push({photo : url, text : self.text});
                $scope.$apply(function(){
                    self.photos = self.photos;
                    self.text = self.text;
                });
            });
        })
    }
})

.directive('app', function() {
    return {
        scope : {
        },
        restrict: 'E',
        controllerAs : 'ctrl',
        bindToController : true,
        controller : 'appController',
        templateUrl : '../../client/templates/app.html'
    }
});