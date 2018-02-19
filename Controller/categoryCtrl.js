angular.module("demodynamic")
.controller("categoryCtrl",categoryCtrl)

function categoryCtrl($routeParams,data,productlist,$rootScope){
     category= this;
     category.data = data;
     category.add=productlist;
     $rootScope.addlen =productlist.length;


         console.log("nameofCategory"+$routeParams.category)
         category.brandname =$routeParams.category;

         for(var i=0;i< category.data.length;i++){
            if($routeParams.category==category.data[i].name){
              console.log( "indexnumber"+" "+i)
             category.listdata = data[i].products
             console.log(category.listdata)

            }
        }
        category.productAdd = function(a,b,productlist){
            // console.log("name"+ " "+a +" "+b)
            // category.add.push({name:a,price:b,qty:1})
            console.log(category.add.push({name:a,price:b,qty:1}))
            console.log(category.add)
        }
     
     console.log( "checking category"+$routeParams.category)
     console.log(category.data)
     console.log( category.listdata)
    //  for(var i=0;i< category.listdata.name;i++){
    //      console.log("hello"+category.listdata.name[i])
    //  }
    console.log("category")

}