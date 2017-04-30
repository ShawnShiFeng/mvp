angular.module('randomizer')
.controller('controlBarController', function(req, $scope) {

    var self = this;


    this.pickOneOption = () => {
        req.sendPostRequest(this.photos,'randomize', function(data) {
            console.log("data: ", data);
        // need to add all the info to the database before
        // proceeding to next step
        self.onRandomizeButtonClicked(data.data);
        });
    }

    this.onRandomizeButtonClicked = pickedNum => {
        console.log("pickedNum: ", pickedNum);
        this.finalResultData = self.photos.splice(pickedNum, 1);
        console.log("finalResultData: ", this.finalResultData);
        self.photos = [];
        $scope.$apply(function(){
            self.showResult = true;
        })
    }

    this.startOver = () => {
        this.showResult = false;
        this.photos = [];
    }



})
.directive('controlBar', function() {
    return {
        scope : {
            finalResultData: '=',
            showResult: '=',
            photos: '=',
            startRecording : '<'
        },
        restrict: 'E',
        controllerAs: 'ctrl',
        bindToController: true,
        controller: 'controlBarController',
        templateUrl: '../../client/templates/controlBar.html'
    }
});