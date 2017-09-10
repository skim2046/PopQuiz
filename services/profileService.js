
angular
  .module("popApp")
  .service("profileService", function ($http) {
    var _profiles = [];

    this.getProfile = function (callback) {
      $http.get("./data/profiles.json")
        .success(function (response) {
          callback(response)
        })
        .error(function () {
        })

      $http.get("./data/userquestions.json")
        .success(function (response) {
          callback(response)
        })
        .error(function () {
        })
    };

    this.getQuiz = function (callback) {
      $http.get("./data/userquestions.json")
        .success(function (response) {
          callback(response)
        })
        .error(function () {
        })
    };
  })