var app = angular.module('app', []);

app.controller("myController", function($scope) {
    $scope.view = {};
    $scope.view.number = 5;

    $scope.pickRandomNumber = function() {
        $scope.view.number = Math.floor(Math.random() * 10) + 1;
    }
});

app.controller("myController2", function($scope) {
    $scope.reverse = function(string) {
        $scope.text = string.split("").reverse().join("");
    }
});

app.controller("myController3", function($scope) {

    $scope.players = [{
        player: "Player 1",
        score: 0,
        serving: true,
        servingCounter: 0,
        win: undefined
    }, {
        player: "Player 2",
        score: 0,
        serving: false,
        servingCounter: 0,
        win: undefined
    }]

    $scope.serveCounter = 0;

    $scope.addScore = function(player) {
        if (player.score <= 10 && player.win != false) {
            $scope.serveCounter++
                player.score++
                if (player.score === 11) {
                    player.win = true
                    if (player.player === "Player 1") {
                        $scope.players[1].win = false
                    } else {
                        $scope.players[0].win = false
                    }
                    return;
                }
            if ($scope.serveCounter === 2) {
                if (player.player === "Player 1" && player.serving === false) {
                    $scope.players[0].serving = true
                    $scope.players[1].serving = false
                } else {
                    $scope.players[0].serving = false
                    $scope.players[1].serving = true
                }
                $scope.serveCounter = 0;
            }
        }
    }

    $scope.resetGame = function() {
        $scope.players = [{
            player: "Player 1",
            score: 0,
            serving: true,
            servingCounter: 0,
            win: undefined
        }, {
            player: "Player 2",
            score: 0,
            serving: false,
            servingCounter: 0,
            win: undefined
        }]
    }
})
