angular.module("demodynamic")
.factory("productlist",productlist)

function productlist(){
    console.log("productliste Service")
    return[
        {name:"micromax a76",price:8000,qty:1},
    ]
    
}