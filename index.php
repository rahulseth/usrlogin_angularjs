<!DOCTYPE html>
<html>
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.2.5/angular.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.2.5/angular-route.min.js"></script>
    <script src="controller.js"></script>
	<body ng-app="myApp">

<p><a href="#/">Main</a></p>

<a href="#dashboard">Dashboard</a>
<a href="#addnew">add new</a>


<div ng-view></div>
</body>
</html>
