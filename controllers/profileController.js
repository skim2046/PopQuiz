angular
  .module("popApp")
  .controller("profileController", function ($scope, $state, $stateParams, profileService, userquizService) {

    $scope.profiles = [];
    $scope.currentProfile = {};
    $scope.currentLinkedProfile = userquizService.getCurrentLinkedProfile();

    profileService.getProfile(function (r) {
      $scope.profiles = r;
      for (var i = 0; i < $scope.profiles.length; i++) {
        if ($scope.profiles[i].Id == $stateParams.id) {
          $scope.currentProfile = $scope.profiles[i];
        }
      }
    });

    profileService.getQuiz(function (r) {
      $scope.profiles = r;
      for (var i = 0; i < $scope.profiles.length; i++) {
        if ($scope.profiles[i].Id == $stateParams.id) {
          $scope.currentProfile = $scope.profiles[i];
        }
      }
    });

    $scope.selectUserQuiz = function (id) {
      userquizService.setCurrentLinkedProfile(id);
      $state.go('userquiz');
    }
  })