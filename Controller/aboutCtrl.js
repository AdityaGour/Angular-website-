angular.module("demodynamic")
.controller("aboutCtrl",aboutCtrl)

function aboutCtrl(data, $routeParams,$rootScope,productlist){
    console.log("about")
    $rootScope.addlen =productlist.length;
    about =this;
    about.productslist =data;
    about.pdlist =data[0].products
    console.log(about.pdlist)
    // about.products = data[parseInt($routeParams.category)].name
    console.log(about.products)
    console.log(about.productslist)
       console.log("category"+ $routeParams.category +" "+  $routeParams.Product)
    // about.addproduct = prodctlist;
    // console.log(about.addproduct)
}