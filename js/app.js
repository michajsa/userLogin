var app = angular.module('myApp', [])

app.controller('myCtrl', function($scope){
  $scope.name = {
    first: "mike",
    last: "sanchez"
  }
})

app.controller('costCntrl', function($scope){
  $scope.price = 58
})

app.controller('usersCtrl', function($scope){
  $scope.users = [
    {
      username: 'mike',
      password: 'password'
    },
    {
      username: 'matt',
      password: 'password2'
    },
    {
      username: 'dave',
      password: 'password3'
    },
  ]
})
