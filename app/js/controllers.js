'use strict';

/* Controllers */

var phonecatApp = angular.module('phonecatApp', []);

phonecatApp.controller('PhoneListCtrl', function($scope, $http) {
  $http.get('data/cas.json').success(function(data) {
    $scope.certs = data;
  });

  $scope.orderProp = 'notBefore';
});
