var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "login.html",
		controller : 'LogingController'
    })
    .when("/dashboard", {
        templateUrl : "dashboard.html"
    })
    .when("/addnew", {
        templateUrl : "adduser.html"
    })
    .otherwise({
    redirectTo: '/'
  });
});

app.controller('LogingController', function($scope, $location) {
	$scope.submit = function() {
		var usrname = $scope.usr_name;
		var pwd = $scope.usr_pwd;
		alert('jj');
		if (usrname == 'admin') {
			$location.path('/dashboard');
		}
	}
});
