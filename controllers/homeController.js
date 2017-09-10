angular
  .module("popApp")
  .controller("homeController", function ($scope, $state, $stateParams, homeService, quizService) {

    $scope.state = $state;

    $scope.$on('$stateChangeSuccess', function () {
      window.scrollTo(0, 0);
    });

    var hero = $("#heroImage")
    var i = 1;

    setInterval(function () {
      if (i >= 12) {
        hero.removeClass("slideImage" + (i - 1))
        i = 0
        hero.addClass("slideImage" + i)
      }
      else {
        hero.removeClass("slideImage" + (i - 1))
        hero.addClass("slideImage" + i)
        i++
      }
    }, 7000);

    $scope.selectQuiz = function (topic) {
      quizService.setCurrentTopic(topic);
      $state.go('quiz');
    };

    $scope.profiles = [];
    homeService.getProfile(function (r) {
      $scope.profiles = r;
      for (var i = 0; i < $scope.profiles.length; i++) {
        if ($scope.profiles[i].Id == $stateParams.id) {
          $scope.currentProfile = $scope.profiles[i];
        }
      }
      for (var i = 0; i < $scope.profiles.length; i++) {
        $scope.profiles[i].orderNumber = 0.5 - Math.random();
      }
    });

    $scope.linkProfile = function (profile) {
      $state.go("profile", { 'id': profile.Id })
    };
  });