'use strict';
describe("JsonControllerTests", function() {
    beforeEach(angular.mock.module('tpc_flask'));
    var JsonServiceMock, scope, controller,q, deferred;

    beforeEach(function() {
        JsonServiceMock  = {
            getAssignedBugs: function() {
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
        spyOn(JsonServiceMock,'getAssignedBugs').and.callThrough();
    });


    describe('AssignedBugs Controller Using Mock Serivice', function(){
        beforeEach(inject(function ($rootScope, $controller, $q) {
            scope = $rootScope.$new();
            q = $q;
            controller = $controller('HomeController', {
                $scope: scope,
                JsonService: JsonServiceMock
            });
        }));

        it('The Bugs List Should Not be defined yet', function() {
            expect(scope.assignedBugs).not.toBeDefined()
        });
        it('Applying the scope causes it to be defined', function () {
            scope.$apply();
            expect(scope.assignedBugs).toBeDefined();
        });
        it('Ensure that the method was invoked', function () {
            scope.$apply();
            expect(JsonServiceMock.getAssignedBugs).toHaveBeenCalled();
        });
        it('Check the length of array returned from mock service', function () {
            scope.$apply();
            expect(scope.assignedBugs.length).toBe(1);
        });
        it('Verify Bug Returned is from Mocked Service getAssignedBugs', function() {
            scope.$apply();
            expect(scope.assignedBugs[0].assignedTo).toBe('jdorlus@mozilla.com');
        });
    });
});

