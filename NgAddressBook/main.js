
var ngAddressBook = angular.module('ngAddressBook', ['ngRoute']);

ngAddressBook.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/', {
                templateUrl: 'views/list.html',
                controller: 'ngAddressListController'
            }).
            when('/add', {
                templateUrl: 'views/add.html',
                controller: 'ngAddressListController'
            }).
            when('/details/:id', {
                templateUrl: 'views/details.html',
                controller: 'ngAddressDetailsController'
            });
    }]);
// add a controller to it


ngAddressBook.controller('ngAddressListController', function ($scope,$http) {

    $http.get('api.php').success(function(data) {
        $scope.contacts = data;
    });
    $scope.contacts1 = [
        {id:1,first_name:'Jane', last_name:'Doe','Phone':'123-456789','Email':'jane@example.com'},
        {id:2,first_name:'Jhon', last_name:'Doe','Phone':'123-456789','Email':'jhon@example.com'}
    ];
    $scope.getTotalContacts = function () {
        return $scope.contacts.length;
    };
});


    ngAddressBook.controller('ngAddressDetailsController', ['$scope', '$routeParams',
    function($scope, $routeParams)
    {
        $scope.id = $routeParams;
        //alert($routeParams);
    }]);



