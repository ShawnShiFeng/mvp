angular.module('randomizer')
.controller('controlBarController', function(req, $scope) {

    var self = this;

    this.pickOneOption = () => {
        req.sendPostRequest(this.photos,'randomize', function(data) {
            console.log("data: ", data);
        self.onRandomizeButtonClicked(data.data);
        });
    }

    this.onRandomizeButtonClicked = pickedNum => {
        console.log("pickedNum: ", pickedNum);
        this.finalResultData = self.photos.splice(pickedNum, 1);
        console.log("finalResultData: ", this.finalResultData);
        self.photos = [];
        $scope.$apply(function(){
            self.showHistory = false;
            self.showChoice = false;
            self.showResult = true;
        })
    }

    this.startOver = () => {
        this.showHistory = false;
        this.showResult = false;
        this.showChoice = true;
        this.photos = [];
    }
})
.directive('controlBar', function() {
    return {
        scope : {
            finalResultData: '=',
            showResult: '=',
            showChoice: '=',
            showHistory: '=',
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