angular
  .module("popApp")
  .service("quizService", function ($http) {
    var _questions = [];
    var _currentTopic = '';

    this.getQuestion = function (callback) {
      $http.get("./data/questions.json")
        .success(function (response) {
          callback(response)
        })
        .error(function () {
        })
    };

    this.getCurrentTopic = function () {
      return _currentTopic;
    };

    this.setCurrentTopic = function (topic) {
      _currentTopic = topic;
    };
  })