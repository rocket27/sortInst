'use strict';

angular.module('requestToApi', [])
  .constant('clientID', '7147120302.fc512b0.c9adc6b52982443cb5576db82840ef94')
  .factory('getResponseApi', function(clientID, $http) {
    return {
      request: function (tag) {
        let convertedTag;

        tag.charAt(0) === '#' ? convertedTag = tag.slice(1) 
          : convertedTag = tag;

        return $http({
          method: 'GET',
          url: 'https://api.instagram.com/v1/tags/' + convertedTag + '/media/recent',
          params: {access_token: clientID}
        })
      }
    }
  });
