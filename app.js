var app = angular.module('popApp', ["ui.router"]);
app.config(function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/");

  $stateProvider.state("homeView", {
    url: "/",
    templateUrl: "./views/home.html",
    controller: "homeController"
  })

    .state("match", {
      url: "/match",
      templateUrl: "./views/match.html",
      controller: "homeController"
    })

    .state("gallery", {
      url: "/gallery",
      templateUrl: "./views/gallery.html",
      controller: "galleryController"
    })
    .state("profile", {
      url: "/profile/:id",
      templateUrl: "./views/profile.html",
      controller: "profileController"
    })
    .state("fullprofile", {
      url: "/fullprofile/:id",
      templateUrl: "./views/fullprofile.html",
      controller: "fullprofileController"
    })
    .state("quiz", {
      url: "/quiz",
      templateUrl: "./views/quiz.html",
      controller: "quizController",
      hideNavbar: true,
      hideFooter: true
    })
    .state("userquiz", {
      url: "/userquiz",
      templateUrl: "./views/userquiz.html",
      controller: "userquizController",
      hideNavbar: true,
      hideFooter: true
    })
});