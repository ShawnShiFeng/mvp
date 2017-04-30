angular.module('randomizer')
.controller('historyViewController', function() {



})
.directive('historyView', function() {
    return {
        scope : {
            historyView: '<'
        },
        restrict: 'E',
        controllerAs: 'ctrl',
        bindToController: true,
        controller: 'histroyViewController',
        templateUrl: '../../client/templates/histroyView.html'
    }


});