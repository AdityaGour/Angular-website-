angular.module("demodynamic")
.controller("contactCtrl",aboutCtrl)

function contactCtrl(productlist,$rootScope){
    console.log("contact")
    $rootScope.addlen =productlist.length;
}