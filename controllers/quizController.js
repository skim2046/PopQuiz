angular
  .module("popApp")
  .controller("quizController", function ($scope, $state, $stateParams, quizService) {

    $scope.questions = [];
    $scope.currentQuestionIndex = 0;

    $scope.numberOfCorrect = 0;
    $scope.currentTopic = quizService.getCurrentTopic();

    quizService.getQuestion(function (r) {
      $scope.questions = r;
      for (var i = $scope.questions.length - 1; i >= 0; i--) {
        if ($scope.questions[i].Topic != $scope.currentTopic) {
          $scope.questions.splice(i, 1);
        }
      }
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
    }
  })