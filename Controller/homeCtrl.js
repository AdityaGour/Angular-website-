angular.module("demodynamic")
.controller("homeCtrl",homeCtrl)

function homeCtrl(data,$routeParams,productlist,$rootScope){
    console.log("home")
    home =this;
    home.productslist =data;
    home.products = data[parseInt($routeParams.category)]
    console.log(home.products)
    console.log(home.productslist)

    home.add = productlist;
    $rootScope.addlen =productlist.length;
    console.log(home.add)
    console.log( "rootscope"+$rootScope.addlen)


    /* */

    
}