var app = angular.module('todo');

app.service('parseService', function ($http) {

    this.getData = function () {
        return $http({
            'method': 'GET',
            'url': 'https://api.parse.com/1/classes/todoTasks'
        });
    };

    this.addData = function (data) {
        return $http({
            'method': 'POST',
            'url': 'https://api.parse.com/1/classes/todoTasks',
            'data': data
        });
    };

    this.removeTask = function (id) {
        return $http({
            method: 'DELETE',
            url: 'https://api.parse.com/1/classes/todoTasks/' + id
        });
    };
});