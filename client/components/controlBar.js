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
        $scope.$apply(function(){
            self.photos = self.photos.slice(pickedNum, pickedNum + 1);
            console.log(self.photos);
        })
    }
})
.directive('controlBar', function() {
    return {
        scope : {
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