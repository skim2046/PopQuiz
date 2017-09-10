angular
  .module("popApp")
  .service("userquizService", function ($http) {
    var _questions = [];
    var _currentLinkedProfile = '';

    this.getQuestion = function (callback) {
      $http.get("./data/userQuestionsPort.json")
        .success(function (response) {
          callback(response)
        })
        .error(function () {
        })
    };

    this.getCurrentLinkedProfile = function () {
      return _currentLinkedProfile;
    };

    this.setCurrentLinkedProfile = function (id) {
      _currentLinkedProfile = id;
    };
  })