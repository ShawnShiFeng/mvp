angular.module('randomizer')
.controller('settingsController', function(req) {
    this.onHistoryClicked = () => {
        // send a get request to the server and get
        // latest history back from the database
        req.sendGetRequest((data) => {

            console.log("data:" ,data);
        })
        this.choiceViewStatebeforeHistoryView = this.showChoice;
        this.showResult = false;
        this.showChoice = false;
        this.showHistory = true;
    }
})
.directive('settings', function() {
    return {
        scope: {
            showResult: '=',
            showChoice: '=',
            showHistory: '=',
            choiceViewStatebeforeHistoryView : '<'
        },
        restrict: 'E',
        controllerAs: 'ctrl',
        bindToController: true,
        controller: 'settingsController',
        templateUrl: '../../client/templates/settings.html'
    }
});