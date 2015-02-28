/**
 * Created by aldrinh on 2/28/15.
 */
var app = angular.module('github-api');

app.controller('GithubController', function($scope, githubService) {

    $scope.test = "IT WORKS";

    $scope.getUserData = function(){
        githubService.getUser($scope.searchText).then(function(res){
            $scope.user = res.data;
            console.log($scope.user);
        });
    }









});