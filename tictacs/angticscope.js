function boardCtrl ($scope){
	$scope.boxes = ["","","","","","","","",""];
	$scope.xTurn = 'x'; 
	$scope.takeTurn = function (i){
		if ($scope.boxes[i] == "") {
			$scope.boxes[i] = $scope.xTurn;
			if ($scope.boxes[i] == "x"){
				$scope.xTurn = "o"
			} else {
				$scope.xTurn = "x"
			};
		}
	}
}