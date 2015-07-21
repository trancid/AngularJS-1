// No second argument in 'module' as it should use the created module
angular.module("sportsStore")
.constant("dataUrl", "https://www.i-net.be/angularjs/products.php")
.controller("sportsStoreCtrl", function($scope, $http, dataUrl){
    $scope.data = {};// empty object
    $http.get(dataUrl)
        .success(function(data){
            $scope.data.products = data;
        })
        .error(function(error){
            $scope.data.error = error;
        })
});