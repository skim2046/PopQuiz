angular
  .module("popApp")
  .controller("userquizController", function ($scope, $state, $stateParams, userquizService) {

    $scope.questions = [];
    $scope.currentQuestionIndex = 0;
    $scope.AnswerOneSelected = false;
    $scope.AnswerTwoSelected = false;
    $scope.AnswerThreeSelected = false;
    $scope.AnswerFourSelected = false;
    $scope.numberOfCorrect = 0;
    $scope.currentProfile = {};
    $scope.currentLinkedProfile = userquizService.getCurrentLinkedProfile();

    userquizService.getQuestion(function (r) {
      $scope.questions = r;
      $scope.questions[$scope.currentQuestionIndex].isActive = true;
    });

    $scope.nextQuestion = function () {
      $scope.questions[$scope.currentQuestionIndex].isActive = false;
      $scope.currentQuestionIndex++;
      if ($scope.currentQuestionIndex < $scope.questions.length) {
        $scope.questions[$scope.currentQuestionIndex].isActive = true;
      }
    };

    $scope.submitResults = function () {
      for (var i = 0; i < $scope.questions.length; i++) {
        if ($scope.questions[i].SelectedAnswer == $scope.questions[i].AnswerCorrect) {
          $scope.numberOfCorrect++
        }
      }

      $scope.questions[$scope.currentQuestionIndex].isActive = false;
      $scope.currentQuestionIndex++;

      if ($scope.currentQuestionIndex < $scope.questions.length) {
        $scope.questions[$scope.currentQuestionIndex].isActive = true;
      }
    };
    
    $scope.getFullProfile = function (id) {
      $state.go('fullprofile', { id: $scope.currentLinkedProfile });
    }
  })