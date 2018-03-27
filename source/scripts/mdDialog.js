'use strict';

angular.module('mdDialog', [])
  .factory('popupDialog', function($mdDialog) {
    return {
      showDialog: function ($event, $index, objectStorage) {        
        let parentEl = angular.element(document.body);

        $mdDialog.show({
          parent: parentEl,
          targetEvent: $event,
          templateUrl: 'views/popup.html',
          locals: {
            item: objectStorage[$index]
          },
          controller: dialogCtrl,
          clickOutsideToClose: true
        });

        function dialogCtrl($scope, $mdDialog, item) {
          $scope.item = item;
          $scope.closeDialog = function() {
            $mdDialog.hide();
          }
        }
      }
    }
  });
