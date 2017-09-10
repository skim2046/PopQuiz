angular
  .module("popApp")
  .service("fullprofileService", function ($http) {
    var _profiles = [];

    this.getProfile = function (callback) {
      $http.get("./data/profiles.json")
        .success(function (response) {
          callback(response)
        })
        .error(function () {
        })
    }
  })