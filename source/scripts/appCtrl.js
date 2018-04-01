'use strict';

angular.module("app").controller("appCtrl", ['$scope', 'popupDialog', 'getResponseApi', '$q', '$interval',
  function($scope, popupDialog, getResponseApi, $q, $interval, $stateProvider) {

    $scope.dataStorage1 = [];
    $scope.dataStorage2 = [];
    $scope.commonDataStorage = [];
    
    $scope.tag1 = 'nature';
    $scope.tag2 = 'mountains';

    $scope.getData = function(isRight = false) {
      if (isRight) {
        return getResponseApi.request($scope.tag2).then(function(response) {
          $scope.dataStorage2 = response.data.data;
        });
      } else {
        return getResponseApi.request($scope.tag1).then(function(response) {
          $scope.dataStorage1 = response.data.data;
        });
      }
    }

    $scope.init = function(action) {
      if (action === 'init') {
        $q.all([$scope.getData(), $scope.getData(true)]).then(function() {
          getCommonData();
        })
      } else if (action === 'left') {
        $scope.getData().then(function() {
          getCommonData();
        });
      } else {
        $scope.getData(true).then(function() {
          getCommonData();
        });
      }
    };

    $scope.showDialog = popupDialog.showDialog;
    
    $scope.init('init');
    
    // $interval(function () {
    //   $scope.init('init');
    // }, 10000);

    function getCommonData() {
      let commonArray = [],
        val1, val2;

      for(val1 of $scope.dataStorage1) {
        for (val2 of $scope.dataStorage2) {
          if (val1.caption.id === val2.caption.id) {
            commonArray.unshift(val1);
            $scope.commonDataStorage = (commonArray.filter(item => {
              let temp = [];

              if (temp.indexOf(item.caption.id) === -1) {
                temp.push(item.caption.id);
                return true;
              }

              return false;
            }));
          }
        }
      }
    }

  }]);