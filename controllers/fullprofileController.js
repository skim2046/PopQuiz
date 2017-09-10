angular 
  .module("popApp")
  .controller("fullprofileController", function($scope, $state, $stateParams, fullprofileService) {
    
    $scope.profiles = [];
    $scope.currentProfile = {};

    fullprofileService.getProfile(function (r) {
      $scope.profiles = r;
      for (var i = 0; i < $scope.profiles.length; i++) {
        if ($scope.profiles[i].Id == $stateParams.id) {
          $scope.currentProfile = $scope.profiles[i];
        }
      }
    })
  })