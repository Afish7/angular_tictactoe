function boardCtrl ($scope) {
	$scope.boxes = ["","","","","","","","",""]
	$scope.xTurn = 'x';
	$scope.turnCounter = 1;
	$scope.takeTurn = function (i) {
		if ($scope.boxes[i] == "") {
			$scope.boxes[i] = $scope.xTurn;
			if ($scope.boxes[i] == "x") {
				$scope.xTurn = "o"
			} else {
				$scope.xTurn = "x"
			};
		}; 
		if ($scope.turnCounter >= 5) {
		 	$scope.checkWin();
		};
		$scope.turnCounter++;
	};
	$scope.checkWin = function () {
		$scope.winAry = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]]
		for (var i = 0; i < 8; i++) {
			if ($scope.boxes[$scope.winAry[i][0]] == $scope.boxes[$scope.winAry[i][1]] && $scope.boxes[$scope.winAry[i][0]] == $scope.boxes[$scope.winAry[i][2]] && $scope.boxes[$scope.winAry[i][0]] !== "") {
					$scope.winner = alert("winner!");
					break;
			}
		}
	};



	$scope.reset = function(){
 		console.log("I am resetting");
  			$scope.boxes=['','','','','','','','',''];
 
 	 	};

};




















