angular.module('vocab')
.directive('app', function() {

    return {
        scope : {

        },
        restrict: 'E',
        controllerAs : 'ctrl',
        bindToController : true,
        controller : function() {
            console.log("hi");
        },
        templateUrl : '../../client/templates/app.html'
    }


});