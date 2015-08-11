angular.module('ui.bootstrap.demo', ['ui.bootstrap']);
angular.module('ui.bootstrap.demo').controller('AccordionDemoCtrl', function ($scope) {
  $scope.oneAtATime = true;

 $scope.text = "Click For Password";

  $scope.status = {
    isFirstOpen: true,
    isFirstDisabled: false
  };
});
