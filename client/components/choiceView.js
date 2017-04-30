angular.module('randomizer')
.controller('choiceViewController', function() {


})
.directive('choiceView', function() {
    return {
        scope: {
            photos: '<'
        },
        restrict: 'E',
        controllerAs: 'ctrl',
        bindToController: true,
        controller: 'choiceViewController',
        templateUrl: '../../client/templates/choiceView.html'
    }
});
