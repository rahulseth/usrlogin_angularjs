var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "login.html",
		controller : 'logingController'
    })
    .when("/dashboard", {
        templateUrl : "dashboard.html"
    })
    .when("/addnew", {
        templateUrl : "adduser.html",
		controller : 'addUserController'
    })
    .otherwise({
    redirectTo: '/'
  });
});

app.controller('logingController', function($scope, $location) {
	$scope.usr_name = "rahul";
	$scope.submit = function() {
		alert('jjii');
		var usrname = $scope.usr_name;
		var pwd = $scope.usr_pwd;
		if (usrname == 'admin') {
			$location.path('/dashboard');
		}
	}
});

app.controller('addUserController', function($scope, $http) {
	$scope.insert_data = function() {
		$http.post("insertuser.php", {
			'name': $scope.usr_name, 
			'email': $scope.usr_email,
			'phone': $scope.usr_phone,
			'pwd': $scope.usr_pwd
		}).success(function($response) {
			$scope.msg = "User inserted";
		});
	}
});