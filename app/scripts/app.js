'use strict';

/**
 * @ngdoc overview
 * @name cvApp
 * @description
 * # cvApp
 *
 * Main module of the application.
 */
angular
  .module('cvApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'cvController',

  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
           templateUrl: 'views/main.html',
           controller: 'MainArticle'
      }).when('/articles/:articleId', {
           templateUrl: 'partials/article-detail.html',
           controller: 'articlesDetailCtrl'
      }).when('/about', {
           templateUrl: 'views/about.html',
           controller: 'AboutCtrl'
      }).when('/login', {
            templateUrl: 'views/login.html',
            controller: 'loginController'
      }).otherwise({
        redirectTo: '/'
      });
  });


