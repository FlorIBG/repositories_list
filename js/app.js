var app = angular.module('app',[]);

app.controller('Reposcontroller', ['$scope','$http', function($scope,$http) {

        $scope.username = "FlorIBG";

        $http({
            method: "GET",
            url: "https://api.github.com/users/" + $scope.username 
        }).then(function (data) {
             $scope.userData = data.data;
             console.log( $scope.userData.data);
        });

        $http({
            method: "GET",
            url: "https://api.github.com/users/" + $scope.username + "/repos"

        }).then(function (data) {
            $scope.repoData = data.data;
            
        });
    
}]);