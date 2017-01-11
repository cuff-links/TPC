'use strict';
describe("JsonControllerTests", function() {
    beforeEach(angular.mock.module('tpc_flask'));
    var JsonServiceMock, scope, controller,q, deferred;

    beforeEach(function() {
        JsonServiceMock  = {
            getBugs: function() {
                deferred = q.defer();
                deferred.resolve([{
                    id: '1',
                    summary: 'Assigned Bug',
                    status: "Closed",
                    resolution: "Fixed",
                    product: "Angular Mocked Service",
                    component: "Bugzilla Service Mock",
                    blocks: [],
                    depends_on: [],
                    assignedTo: 'jdorlus@mozilla.com'
                }]);
                return deferred.promise
            }
        };
        spyOn(JsonServiceMock,'getBugs').and.callThrough();
    });


    describe('JsonController Using Mock Serivice', function(){
        beforeEach(inject(function ($rootScope, $controller, $q, $httpBackend) {
            scope = $rootScope.$new();
            q = $q;
            $httpBackend.expectGET("static/partials/home.html").respond("<div>mock template</div>");
            controller = $controller('BugzillaController', {
                $scope: scope,
                JsonService: JsonServiceMock
            });
        }));

        it('The Bugs List Should Not be defined yet', function() {
            expect(scope.bugs).not.toBeDefined()
        });
        it('Applying the scope causes it to be defined', function () {
            scope.$apply();
            expect(scope.bugs).toBeDefined();
        });
        it('Ensure that the method was invoked', function () {
            scope.$apply();
            expect(JsonServiceMock.getBugs).toHaveBeenCalled();
        });
        it('Check the length of array returned from mock service', function () {
            scope.$apply();
            expect(scope.bugs.length).toBe(1);
        });
        it('Verify Bug Returned is from Mocked Service getBugs', function() {
            scope.$apply();
            expect(scope.bugs[0].assignedTo).toBe('jdorlus@mozilla.com');
        });
    });
});

