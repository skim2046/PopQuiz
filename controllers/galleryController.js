angular
  .module("popApp")
  .controller("galleryController", function ($scope, galleryService, $state, $stateParams) {

    $scope.profiles = [];
    $scope.currentProfile = {};

    galleryService.getProfile(function (r) {
      $scope.profiles = r;
     
      for (var i = 0; i < $scope.profiles.length; i++) {
        $scope.profiles[i].orderNumber = 0.5 - Math.random();
      }
    });
    
    $scope.linkProfile = function (profile) {
      $state.go("profile", { 'id': profile.Id })
    }
  })