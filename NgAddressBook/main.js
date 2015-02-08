
angular.module('ngAddressBook', [])
// add a controller to it
    .controller('ngAddressListController', ['$scope', function ($scope)
    {
        $scope.contacts = [
            {first_name:'Jane', last_name:'Doe','Phone':'123-456789','Email':'jane@example.com'},
            {first_name:'Jhon', last_name:'Doe','Phone':'123-456789','Email':'jhon@example.com'}
        ];
        $scope.getTotalContacts = function () {
            return $scope.contacts.length;
        };
    }]);