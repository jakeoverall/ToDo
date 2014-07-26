var app = angular.module('todo');

app.controller('mainCtrl', function ($scope, parseService) {

    var getData = function () {
        parseService.getData().then(function (data) {
            $scope.todos = data.data.results;
        });
    };


    $scope.addTask = function () {
        if ($scope.newTask) {
            var obj = {};
            obj.name = $scope.newTask;
            obj.date = new Date();
            parseService.addData(obj).then(function(status) {
                console.log(status);
                $scope.newTask = '';
                getData();
            });
        }
    };

    $scope.removeTask = function (index) {
        var id = $scope.todos[index].objectId;
        parseService.removeTask(id)
            .then(function() {
                getData();
            });
    };

    getData();
});