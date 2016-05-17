angular.module('app', [])
    .controller('HomeController', function($scope) {
        var socket = io.connect();

        $scope.sendGreet = function() {
            console.log($scope.greet);
            socket.emit('greet', { message: $scope.greet });
        }
        
        $scope.replies = [];

        socket.on('reply', function(data) {
            $scope.$apply(function() {
                $scope.replies.push(data);
            });
        });
    });