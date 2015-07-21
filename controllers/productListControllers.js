angular.module("sportsStore")
.constant("productListActiveClass", "btn-primary")
.constant("productListPageCount", 3)
.controller("productListCtrl", function($scope, $filter, productListActiveClass, productListPageCount){
   var selectedCategory = null;
   $scope.selectedPage = 1;
   $scope.pageSize = productListPageCount;
   // Behavior 'selectCategory'
   $scope.selectCategory = function(newCategory){
       selectedCategory = newCategory;
       $scope.selectedPage = 1;
   } 
   // Returns TRUE if the product belongs to the category (also TRUE when no category was selected)
   $scope.categoryFilterFn = function(product){
       return selectedCategory == null || product.category == selectedCategory;
   }
   // 
   $scope.getCategoryCSSClass = function(category){
       return category == selectedCategory ? productListActiveClass : "";
   }
   //
   $scope.selectPage = function(newPage){
       $scope.selectedPage = newPage;
   }
   //
   $scope.getPageCSSClass = function(page){
       return page == $scope.selectedPage ? productListActiveClass : "";
   }
});