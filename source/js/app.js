angular.module("myApp", [])
  .controller("mainController", function($scope) {
    const CLIENT_ID = '7147120302.fc512b0.c9adc6b52982443cb5576db82840ef94';
    
    $scope.tag1 = "nature",
      $scope.tag2 = "town",
      $scope.resultList1 = $('.resultList_tag1'),
      $scope.resultList2 = $('.resultList_tag2'),
      $scope.resultList3 = $('.resultList_tagBoth');

    $scope.getData = function(tag, parent, execution) {
      let amount = 20;

      $.ajax({
        url: 'https://api.instagram.com/v1/tags/' + tag + '/media/recent',
        dataType: 'jsonp',
        type: 'GET',
        data: {access_token: CLIENT_ID, count: amount},
        success: function(result) {
          console.log(result);
          
          if (parent.has('li')) parent.empty();
          
          for (i in result.data) {
            parent.append('<li class="resultList__item"><figure class="resultList__frame"><a class = "resultList__link" href="' 
              + result.data[i].images.standard_resolution.url + '" target="_blank"><div class="resultList__imgWrap"><img class="resultList__image" src="' 
                + result.data[i].images.thumbnail.url + '"></div><figcaption class="resultList__description">' 
                  + result.data[i].caption.text + '</figcaption></a></figure></li>');
          }
          
          if (execution) {
            $scope.getDataBothTag($scope.tag1, $scope.tag2, $scope.resultList3);  
          }
        },
        error: function(result) {
          console.log(result);
        }
      });
    }

    $scope.getDataBothTag = function(tag1, tag2, parent) {
      let amount = 4;

      $.ajax({
        url: 'https://api.instagram.com/v1/tags/' + tag1 + '/media/recent',
        dataType: 'jsonp',
        type: 'GET',
        data: {access_token: CLIENT_ID, count: amount},
        success: function(result) {
          console.log(result);
          
          for (i in result.data) {
            for (j in result.data[i].tags) {
              if (result.data[i].tags[j] == tag2) {
                parent.prepend('<li class="resultList__item"><figure class="resultList__frame"><a class = "resultList__link" href="' 
                  + result.data[i].images.standard_resolution.url + '" target="_blank"><div class="resultList__imgWrap"><img class="resultList__image" src="' 
                    + result.data[i].images.thumbnail.url + '"></div><figcaption class="resultList__description">' 
                      + result.data[i].caption.text + '</figcaption></a></figure></li>');
              }
            }
          }
        },
        error: function(result) {
          console.log(result);
        }
      });
    }

    $(document).ready(function() {
      $scope.getData($scope.tag1, $scope.resultList1, false);
      $scope.getData($scope.tag2, $scope.resultList2, true);
    });
  });