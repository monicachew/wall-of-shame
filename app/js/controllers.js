'use strict';

/* Controllers */

var phonecatApp = angular.module('phonecatApp', []);

var issuerCount = {};
phonecatApp.controller('PhoneListCtrl', function($scope, $http) {
  $http.get('data/cas.json').success(function(data) {
    $scope.certs = data;
    var log = "";
    var issuers = [];
    var x;
    for (var i in data) {
      var cert = data[i];
      if (!issuerCount[cert.issuer]) {
        issuerCount[cert.issuer] = 0;
      }
      issuerCount[cert.issuer] = issuerCount[cert.issuer] + 1;
    }
    for (var j in issuerCount) {
      var foo = {};
      foo.name = j;
      foo.count = issuerCount[j];
      issuers.push(foo);
    }
    $scope.topIssuers = issuers;
    $scope.log = JSON.stringify(issuerCount);
  });

  $scope.orderProp = 'notBefore';
});
