'use strict';

var cvControllers = angular.module ('cvController' , []);

cvControllers.controller('MainArticle' , ['$scope' , '$http',
    function($scope , $http){
        $http.get('Article/article.json').success(
            function(data){
                $scope.articles = data;
            });
    $scope.orderProp = 'age';
}]);

cvControllers.controller('articlesDetailCtrl' , ['$scope' , '$routeParams' , '$http' ,
    function($scope , $routeParams , $http){
        $http.get('Article/' + $routeParams.articleId + '.json').success(function(data){
            $scope.article = data;
        });
}]);

cvControllers.controller('loginController', ['$scope', function($scope) {
    $scope.formInfo = {};
    $scope.saveData = function() {
        $scope.emailRequired = '';
        $scope.passwordRequired = '';

        if (!$scope.formInfo.Email) {
            $scope.emailRequired = 'Email Required';
        }else {
            $scope.emailRequired = $scope.formInfo.Email;
        }

        if (!$scope.formInfo.Password) {
            $scope.passwordRequired = 'Password Required';
        }else {
            $scope.passwordRequired = $scope.formInfo.Password;
        }
    };
}]);

cvControllers.controller('AboutCtrl', ['$scope', function($scope) {
    $scope.about = {};
    $scope.saveData = function() {
        $scope.Subject = '';
        $scope.Name = '';
        $scope.Email = '';

        if (!$scope.about.Subject) {
            $scope.Subject = 'subject Required';
        }else {
            $scope.Subject = $scope.about.Subject;
        }

        if (!$scope.about.Name) {
            $scope.Name = 'Name Required';
        }else {
            $scope.Name = $scope.about.Name;
        }

        if (!$scope.about.Email) {
            $scope.Email = 'Password Required';
        }else {
            $scope.Email = $scope.about.Email;
        }
    };
}]);



