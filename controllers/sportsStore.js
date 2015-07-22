// No second argument in 'module' as it should use the created module
angular.module("sportsStore")
.constant("dataUrl", "https://angularjs1-trancid.c9.io/_php/products.php")
.controller("sportsStoreCtrl", function($scope, $http, dataUrl){// Notice injection of the service 'http'
    $scope.data = {};// empty object
    $http.get(dataUrl)
        .success(function(data){// Notice that the conversion from JSON to Javascript objects happens automatically!
            $scope.data.products = data;// 'data' is an array of JS objects
        })
        .error(function(error){
            $scope.data.error = error;
        })
});