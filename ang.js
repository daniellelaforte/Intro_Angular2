var app = angular.module("hithere", []);
app.controller("MainController", function MainController($scope){
	$scope.message = "This should be in the console";
	$scope.bug = "This should be in the html";
	$scope.printthis = function() {
		console.log($scope.message);
		$scope.message_visible = true;
	}
});
