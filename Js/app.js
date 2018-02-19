angular.module("demodynamic",['ngRoute'])
 .config(config)

 function config($routeProvider){
     $routeProvider
     .when("/",{
        templateUrl:"partials/home.html",
        controller:"homeCtrl",
        controllerAs:"home"
     })
     .when("/about",{
        templateUrl:"partials/about.html",
        controller:"aboutCtrl",
        controllerAs:"about"
     })
     
     .when("/contact",{
        templateUrl:"partials/contact.html",
        controller:"contactCtrl",
        controllerAs:"contact"
     })
     .when("/cart",{
        templateUrl:"partials/cart.html",
        controller:"cartCtrl",
        controllerAs:"cart"
     })
     .when("/category/:category",{
        templateUrl:"partials/category.html",
        controller:"categoryCtrl",
        controllerAs:"category"
     })
     .when("/category/:category/product/:product",{
        templateUrl:"partials/product.html",
        controller:"productCtrl",
        controllerAs:"product"
     })
     console.log("config")
 }