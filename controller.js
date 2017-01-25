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
	 var request = $http({
                method: "post",
                url: "login.php",
                data: {
                    email: $scope.email,
                    password: $scope.password
                },
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
            });
            /* Successful HTTP post request or not */
            request.success(function (data) {
                if(data == "1"){
                	$scope.responseMessage = "Successfully Logged In";
                }
                else {
                	$scope.responseMessage = "Username or Password is incorrect";
                }
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