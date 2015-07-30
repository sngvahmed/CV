var phonecatApp = angular.module('cvApp', ['ngRoute','cvController']);

phonecatApp.config(['$routeProvider', function($routeProvider) {
$routeProvider.when('/articles', { templateUrl: 'views/main.html', controller: 'MainArticle' }).
when('/articles/:articleID', {
    templateUrl: 'partials/article-detail.html',
    controller: 'MainArticle'
}).otherwise({
    redirectTo: '/articles'
});
}]);