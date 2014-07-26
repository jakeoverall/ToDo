var app = angular.module('todo');

app.factory('httpRequestInterceptor', function () {
    return {
        request: function (config) {
            config.headers = { 'X-Parse-Application-Id': '2LVi75uNxQ5Xac9JlSQ1XEuUPE6zRFsWHlUQUm3C', 'X-Parse-REST-API-Key': 'UsqbsNPYnm4ZpBvyQ4ICWz486lUTSbV3FcPE1TaY' };
            return config;
        }
    };
});