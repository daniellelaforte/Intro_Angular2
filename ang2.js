angular.module("bear", []);

angular.module("bear").controller("polarbearcontroller", ["$scope", function($scope){
	$scope.message = "Are polar bears real.";
	$scope.linke = true;
	$scope.addExcl = function() {
		$scope.message += "!";
	}
	$scope.Sure = function(event) {
		if (!confirm("Are you sure you want to learn about polar bears?")) {
			event.preventDefault();
			$scope.linke = false;
		}
    }
}]
);
