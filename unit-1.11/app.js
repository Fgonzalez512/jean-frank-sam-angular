var app = angular.module('app', []);

app.controller("myController", ['$scope', ($scope) => {

    $scope.view = {};
    $scope.view.newPost = false;
    $scope.view.comments = false;
    $scope.view.addComment = false;
    $scope.view.idCount = 2;
    $scope.view.comment = null;

    $scope.view.sort = '-count';

    $scope.view.posts = [{
        id: 0,
        title: 'First Post',
        content: 'Bacon ipsum dolor amet biltong sausage pancetta meatball alcatra, cow shankle boudin. Pork loin shankle spare ribs pig cupim alcatra ham. Kielbasa cow tri-tip leberkas ground round porchetta. Rump pig tongue, ribeye pork drumstick salami short loin meatball bacon spare ribs picanha shoulder.',
        imageLink: 'https://source.unsplash.com/random',
        date: new Date(),
        author: 'Bruce Wayne',
        comments: ['Hi!', 'Get out of here!'],
        count: 0,
    }, {
        id: 1,
        title: 'Second Post',
        content: 'Bacon ipsum dolor amet biltong sausage pancetta meatball alcatra, cow shankle boudin. Pork loin shankle spare ribs pig cupim alcatra ham. Kielbasa cow tri-tip leberkas ground round porchetta. Rump pig tongue, ribeye pork drumstick salami short loin meatball bacon spare ribs picanha shoulder.',
        imageLink: 'http://pipsum.com/250x250.jpg',
        date: new Date(),
        author: 'Clark Kent',
        comments: ['You suck.'],
        count: 0,
    }, {
        id: 2,
        title: 'Third Post',
        content: 'Bacon ipsum dolor amet biltong sausage pancetta meatball alcatra, cow shankle boudin. Pork loin shankle spare ribs pig cupim alcatra ham. Kielbasa cow tri-tip leberkas ground round porchetta. Rump pig tongue, ribeye pork drumstick salami short loin meatball bacon spare ribs picanha shoulder.',
        imageLink: 'https://placeimg.com/250/250/any',
        date: new Date(),
        author: 'Diana Prince',
        comments: ['Awesome!', 'Damn!', 'How do I buy this?'],
        count: 0,
    }];

    $scope.vote = (id, action) => {
        if (action === "up") {
            $scope.view.posts[id].count++;
        }

        if (action === "down") {
            $scope.view.posts[id].count--;
        }
    };

    $scope.newcomment = (isValid, id) => {
        if (isValid) {

            $scope.view.posts[id].comments.push($scope.view.comment);
            $scope.view.comment = '';
        }
    };



}]);
