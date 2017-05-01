angular.module('randomizer')
.controller('historyViewController', function() {

    this.onCloseHistoryButtonClicked = () => {
        this.showHistory = false;
        this.showResult = false;
        this.showChoice = true;
    }
})
.directive('historyView', function() {
    return {
        scope : {
            allHistory: '<',
            showHistory: '=',
            showResult: '=',
            showChoice: '=',
            choiceViewStatebeforeHistoryView: '='
        },
        restrict: 'E',
        controllerAs: 'ctrl',
        bindToController: true,
        controller: 'historyViewController',
        templateUrl: '../../client/templates/histroyView.html'
    }
});