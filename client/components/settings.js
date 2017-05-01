angular.module('randomizer')
.controller('settingsController', function(req) {

    var self = this;

    this.updateHistoryList = data => {
        this.allHistory = data;
    };

    this.onHistoryClicked = () => {
        req.sendGetRequest((data) => {
            self.updateHistoryList(data);
        })
        this.showResult = false;
        this.showChoice = false;
        this.showHistory = true;
    }
})
.directive('settings', function() {
    return {
        scope: {

            getHistoryData: '=',
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