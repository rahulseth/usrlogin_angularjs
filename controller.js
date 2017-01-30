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

app.controller('logingController', function($scope, $http, $location) {
	$scope.usr_email = "ravi@teza.com";
	$scope.usr_pwd = "abc";
	$scope.submit = function() {
	    $http.post("login.php", {
			'email': $scope.usr_email,
			'pwd': $scope.usr_pwd
		}).then(function(response) {
			 console.log('status'  + ' - ' + response);
			//$scope.msg = JSON.stringify(response);
			$scope.login = response.data[1].user_exist;
			if (response.data[1].user_exist) {
				$location.path('/dashboard');
			}
		}, function errorCallback(response) {
			alert(JSON.stringify(response));
		}); 
	}
});

app.controller('addUserController', function($scope, $http) {
	$scope.usr_name = "ravi";
	$scope.usr_email = "ravi@teza.com";
	$scope.usr_phone = "123456789";
	$scope.usr_pwd = "abc";
	$scope.insert_data = function() {
		//alert(window.location.href + "insertuser.php");
		/* var request = $http({
        method: "post",
        url: "insertuser.php",
        data: {
            'name': $scope.usr_name, 
			'email': $scope.usr_email,
			'phone': $scope.usr_phone,
			'pwd': $scope.usr_pwd

        },
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    }); */

		
		
		
		$http.post("insertuser.php", {
			'name': $scope.usr_name, 
			'email': $scope.usr_email,
			'phone': $scope.usr_phone,
			'pwd': $scope.usr_pwd
		}).success(function(data) {
			 console.log('status'  + ' - ' + data);
			$scope.msg = "User inserted";
		});
	}
});