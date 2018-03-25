'use strict';

angular.module("app").controller("appCtrl", ['$scope', 'getResponseApi', '$q', '$interval',
  function($scope, getResponseApi, $q, $interval, $stateProvider) {

    $scope.dataStorage1 = [];
    $scope.dataStorage2 = [];
    $scope.commonDataStorage = [];
    
    $scope.tag1 = "nature";
    $scope.tag2 = "mountains";

    $scope.getDataLeft = function() {
      return $q(function(resolve, reject) {
        getResponseApi.request($scope.tag1).then(function(response) {
          $scope.dataStorage1 = response.data.data;
          resolve();
        });
      })
    };

    $scope.getDataRight = function() {
      return $q(function(resolve, reject) {
        getResponseApi.request($scope.tag2).then(function(response) {
          $scope.dataStorage2 = response.data.data;
          resolve();
        })
      });
    };

    $scope.refreshDataLeft = function() {
      $q(function(resolve, reject) {
        $scope.getDataLeft().then(resolve);
      }).then(function() {
        getCommonData();
      });
    };

    $scope.refreshDataRight = function() {
      $q(function(resolve, reject) {
        $scope.getDataRight().then(resolve);
      }).then(function() {
        getCommonData();
      });
    };

    $scope.init = function() {
      $q.all([$scope.getDataLeft(), $scope.getDataRight()]).then(function() {
        getCommonData();
      })
    };
    
    $scope.init();
    
    $interval(function () {
      $scope.init();
    }, 10000);

    function getCommonData() {
      let commonArray = [],
        val1, val2;

      for(val1 of $scope.dataStorage1) {
        for (val2 of $scope.dataStorage2) {
          if (val1.caption.id === val2.caption.id) {
            commonArray.unshift(val1);
            $scope.commonDataStorage = (commonArray.filter((item) => itemCheck(item)));
          }
        }
      }
    }

    function itemCheck(item) {
      let temp = [];

      if (temp.indexOf(item.caption.id) === -1) {
        temp.unshift(item.caption.id);
        return true
      }

      return false;
    }

  }]);