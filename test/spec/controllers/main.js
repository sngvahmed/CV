'use strict';

describe('Controller: MainCtrl', function () {

    // load the controller's module
    beforeEach(module('cvApp'));
    beforeEach(inject(function(_$httpBackend_ , _$rootScope , $controller){
        $httpBackend = _$httpBackend_;
        $httpBackend.expectGET('Article/article.json').respond([{name:'article1'} , {name:'article2'}]);
    }));

    var MainCtrl,
        scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        MainCtrl = $controller('MainArticle', {
            $scope: scope
        });
    }));

    it('should attach a list of awesomeThings to the scope', function () {
        expect(scope.articles).toBeUndefined();
        $httpBackend.flush();
        expect(scope.articles).toEqual({name:'article1'} , {name:'article2'});
    });
});
