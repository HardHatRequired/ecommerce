angular.module('practice2').config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', {
      url: "/",
      templateUrl: "/views/home.html",
      controller: 'mainCtrl'
    })
    .state('about', {
      url: "/about",
      templateUrl: "/views/about.html",
    })
    .state('account', {
      url: "/account",
      templateUrl: "/views/account.html",
    })
    .state('cart', {
      url: "/cart",
      templateUrl: "/views/cart.html",
    })
    .state('dribbling', {
      url: "/dribbling",
      templateUrl: "/views/dribbling.html",
    })
    .state('products', {
      url: "/products",
      templateUrl: "/views/products.html",
    })
    .state('shooting', {
      url: "/shooting",
      templateUrl: "/views/shooting.html",
    })
    .state('wall', {
      url: "/wall",
      templateUrl: "/views/wall.html",
    })

    $urlRouterProvider.otherwise("/")
})
