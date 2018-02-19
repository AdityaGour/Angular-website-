angular.module("demodynamic")
    .controller("productCtrl",productCtrl)

function productCtrl(data,$routeParams,productlist,$rootScope){
      console.log()
      product = this;
      console.log("Category"+$routeParams.category+" Product:"+$routeParams.product)
      product.data =data;
      $rootScope.addlen =productlist.length;

        var productName = parseInt($routeParams.product)
        console.log(productName)
        for(var i=0;i<product.data.length;i++){
            if($routeParams.category == product.data[i].name ){
              
                product.details = product.data[i].products[parseInt($routeParams.product)]
                console.log("products Details")
                console.log(product.details)
            }
        }
 }
      
    