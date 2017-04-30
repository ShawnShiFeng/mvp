angular.module('randomizer')
.controller('controlBarController', function() {

})
.directive('controlBar', function() {
    return {
        scope : {
            startRecording : '<'
        },
        restrict: 'E',
        controllerAs: 'ctrl',
        bindToController: true,
        controller: 'controlBarController',
        templateUrl: '../../client/templates/controlBar.html'
    }
});