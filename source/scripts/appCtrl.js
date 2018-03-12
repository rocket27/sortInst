angular.module("app").controller("appCtrl", ['$scope', '$http', '$interval',
  function($scope, $http, $interval, $stateProvider) {
    const CLIENT_ID = '7147120302.fc512b0.c9adc6b52982443cb5576db82840ef94';

    $scope.dataStorage1 = [];
    $scope.dataStorage2 = [];
    $scope.commonDataStorage = [];

    $scope.tag1 = "nature";
    $scope.tag2 = "mountains";

    $scope.getData = function() {
      getResponseApi();
    };

    $scope.appStart = function() {
      getResponseApi();
    };

    $scope.appStart();
    
    $interval(function () {
      getResponseApi();
    }, 10000);


    function getResponseApi() {
      return $http({
        method: 'GET',
        url: 'https://api.instagram.com/v1/tags/' + $scope.tag1 + '/media/recent',
        params: {access_token: CLIENT_ID}
      }).then(function(response) {
        return $scope.dataStorage1 = response.data.data;
      }).then(function() {
        return $http({
          method: 'GET',
          url: 'https://api.instagram.com/v1/tags/' + $scope.tag2 + '/media/recent',
          params: {access_token: CLIENT_ID}
        }).then(function(response) {
          return $scope.dataStorage2 = response.data.data;
        })
      }).then(function() {
        getCommonData();
      })
    }

    function getCommonData() {
      let commonArray = [], i, j;

      for(i in $scope.dataStorage1) {
        for (j in $scope.dataStorage2) {
          if ($scope.dataStorage1[i].caption.id === $scope.dataStorage2[j].caption.id) {
            commonArray.unshift($scope.dataStorage1[i]);
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