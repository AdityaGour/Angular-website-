angular.module("demodynamic")
    .controller("cartCtrl",cartCtrl)

function cartCtrl(productlist,data,$rootScope){
        cart= this;
        cart.data= data;
        cart.add=productlist;
        $rootScope.addlen =productlist.length;

        console.log(cart.add)
         
      cart.grandtotal = function(productlist){
        cart.total =0;
        for(var i =0;i<cart.add.length;i++){
            console.log(i)
            console.log(cart.add[i].qty)
            console.log(cart.add[i].price)
            console.log(cart.add[i].qty * cart.add[i].price) 

           cart.total = cart.total + (cart.add[i].qty * cart.add[i].price)
            // console.log("Total:"+ cart.total)
      
        }
        return cart.total
    }
      
        console.log(  cart.add[0].name)
       
        console.log("cart.total:" +cart.total)

        cart.remove =function(index){
            console.log(index)
            cart.add.splice(index,1)
            console.log()
            cart.grandtotal()

        }


        cart.quantity =function(qtyname,productlist){
              console.log(qtyname)
              var quant = document.getElementById("qty1").value;
              console.log(quant)
            //   cart.add.push({qty:"quant"})

        }

}