// Module - AngularJS app
var myApp = angular.module("myApp", []);

// Executes after setup of the Angular app
// Notice that it is not a good idea to bind properties to the rootScope -> better create a $scope child in the controller
myApp.run(function($rootScope){// $rootScope is the parent of all $scope objects; stands for global context
   $rootScope.testProperty = 1; // This property 'testProperty' will be available on the view
});

// Initialize controller
myApp.controller("MyController", function($scope) {// Creates a $scope object, nested in the $rootScope object
    // Define a property 'clock' for the $scope object
    $scope.clock = {
        now: new Date()
    };
    
    var updateClock = function() {
        $scope.clock.now = new Date();
    };
    setInterval(function() {
        $scope.$apply(updateClock);
    }, 1000);
    updateClock();
});

// Another controller
myApp.controller("FirstController", function($scope){
    $scope.counter = 0;
    // Add behavior
    $scope.add = function(amount){
        $scope.counter += amount;
    };
    // Add behavior
    $scope.subtract = function(amount){
        $scope.counter -= amount;
    };
});

// Interpolate test
myApp.controller("InterpolateController", function($scope, $interpolate){// Inject interpolate service
    $scope.emailBody = 'Hello {{ to }},\n\nMy name is Ari too!';
    // Set up a watch
    $scope.$watch('emailBody', function(body){
       if(body){
           var template = $interpolate(body);
           $scope.previewText = template({to: $scope.to});
       } 
    });
});