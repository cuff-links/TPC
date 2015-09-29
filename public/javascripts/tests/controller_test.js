'use strict';
describe("BugzillaControllerTests", function() {
    beforeEach(angular.mock.module('TPC'));
    var BugzillaServiceMock, scope, controller,q, deferred;

    beforeEach(function() {
        BugzillaServiceMock  = {
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
            },
            getCreatedBugs: function() {
                deferred = q.defer();
                deferred.resolve([
                    {
                        id: '2',
                        summary: 'Created Bug',
                        status: "Closed",
                        resolution: "Fixed",
                        product: "Angular Mocked Service",
                        component: "Bugzilla Service Mock",
                        blocks: [],
                        depends_on: [],
                        createdBy: 'jdorlus@mozilla.com'
                    },
                    {
                        id: '3',
                        summary: 'Created Bug',
                        status: "Closed",
                        resolution: "Fixed",
                        product: "Angular Mocked Service",
                        component: "Bugzilla Service Mock",
                        blocks: [],
                        depends_on: [],
                        createdBy: 'john.doe@mozilla.com'
                    }]);
                return deferred.promise
            }
        };
        spyOn(BugzillaServiceMock,'getAssignedBugs').and.callThrough();
        spyOn(BugzillaServiceMock,'getCreatedBugs').and.callThrough();
    });


    describe('AssignedBugs Controller Using Mock Serivice', function(){
        beforeEach(inject(function ($rootScope, $controller, $q) {
            scope = $rootScope.$new();
            q = $q;
            controller = $controller('AssignedBugsController', {
                $scope: scope,
                BugzillaService: BugzillaServiceMock
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
            expect(BugzillaServiceMock.getAssignedBugs).toHaveBeenCalled();
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

    describe('CreatedBugs Controller Using Mock Serivice', function(){
        beforeEach(inject(function ($rootScope, $controller, $q) {
            scope = $rootScope.$new();
            q = $q;
            controller = $controller('CreatedBugsController', {
                $scope: scope,
                BugzillaService: BugzillaServiceMock
            });
        }));

        it('The Bugs List Should Not be defined yet', function() {
            expect(scope.createdBugs).not.toBeDefined()
        });
        it('Applying the scope causes it to be defined', function () {
            scope.$apply();
            expect(scope.createdBugs).toBeDefined();
        });
        it('Ensure that the method was invoked', function () {
            scope.$apply();
            expect(BugzillaServiceMock.getCreatedBugs).toHaveBeenCalled();
        });
        it('Check the length of array returned from mock service', function () {
            scope.$apply();
            expect(scope.createdBugs.length).toBe(2);
        });
        it('Verify Bug Returned is from Mocked Service getCreatedBugs', function() {
            scope.$apply();
            expect(scope.createdBugs[1].id).toBe('3');
        });
    });
});
