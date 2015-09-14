//angular.module('ui.bootstrap.demo').controller("formController" ,['$scope', function($scope) {
//      $scope.example = {
//        value1: Number,
//        value2: Number
//      };
//    $scope.password = '';
//    $scope.gerneratedPassword = '';
//    $scope.sum = 5;
//    
//    $scope.generatePassword = function() {
//        var temp = $scope.password.split('');
//        var temp1 = [];
//        for( i = 0; i<temp.length; i++){
//            temp1.push(temp[i].charCodeAt(0));
//        };
//        var temp2 = [];
//        for(k = 0; k<temp1.length; k++){
//            temp2.push(Math.pow(temp1[k],$scope.example.value1) % $scope.example.value2);
//        };
//
//        var temp3 = [];
//        
//        for( l = 0; l< temp2.length; l++) {
//            if (l%2){
//                temp3.push((temp2[l]%10) + 48);
//            } else {
//                temp3.push((temp2[l]%26) + 97);
//            };
//        };
//        var temp4 = [];
//        for(l = 0; l< temp3.length;l++){
//            temp4.push(String.fromCharCode(temp3[l]));  
//        };
//        $scope.password = temp4.join("");
//        $scope.generatedPassword = $scope.password;
//    };
//    }]);
       
angular.module('ui.bootstrap.demo').controller("formController" ,['$scope', function($scope) {
      $scope.pins = {
        pin1: Number,
        pin2: Number
      };
    $scope.password = '';
    $scope.gerneratedPassword = '';

    
    $scope.generatePassword = function() {
        var tempPW = $scope.password.split('');
        for( i = 0; i<tempPW.length; i++){
            tempPW[i] = tempPW[i].charCodeAt(0);
        };
        console.log(tempPW);
        console.log($scope.pin1);
        console.log($scope.pin2);
        for(k = 0; k<tempPW.length; k++){
            tempPW[k] = Math.pow(tempPW[k],$scope.pins.pin1) % $scope.pins.pin2;
        }; 
        console.log(tempPW);
        for( l = 0; l< tempPW.length; l++) {
            if (l%2){
                tempPW[l] = (tempPW[l]%10) + 48;
            } else {
                tempPW[l] = (tempPW[l]%26) + 97;
            };
        };
        console.log(tempPW);
        for(i = 0; i< tempPW.length;i++){
            tempPW[i] = String.fromCharCode(tempPW[i]);  
        };
        console.log(tempPW);
        $scope.password = tempPW.join("");
        $scope.generatedPassword = $scope.password;
    };
    }]);
                                               