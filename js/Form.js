angular.module('ui.bootstrap.demo').controller("formController" ,['$scope', function($scope) {
      $scope.example = {
        value1: Number,
        value2: Number
      };
    $scope.password = '';
    $scope.gerneratedPassword = '';
    $scope.sum = 5;
    
    $scope.generatePassword = function() {
        var temp = $scope.password.split('');
        var temp1 = [];
        for( i = 0; i<temp.length; i++){
            temp1.push(temp[i].charCodeAt(0));
        };
        var temp2 = [];
        for(k = 0; k<temp1.length; k++){
            temp2.push(Math.pow(temp1[k],$scope.example.value1) % $scope.example.value2);
        };

        var temp3 = [];
        
        for( l = 0; l< temp2.length; l++) {
            if (l%2){
                temp3.push((temp2[l]%10) + 48);
            } else {
                temp3.push((temp2[l]%26) + 97);
            };
        };
        var temp4 = [];
        for(l = 0; l< temp3.length;l++){
            temp4.push(String.fromCharCode(temp3[l]));  
        };
        $scope.password = temp4.join("");
        $scope.generatedPassword = $scope.password;
    };
    }]);
                                                                 