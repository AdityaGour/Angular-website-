angular.module("demodynamic")
.factory("data",data)

function data(){
    return [
        {name:"Shoes",
           products:[
               {name:"Nike Air", price:5000,company:"Nike",img:"css/images/products/shoes/c1.jpg", rating:4},
               {name:"Reebok flex", price:8000,company:"Reebok" ,img:"css/images/products/shoes/c4.jpg", rating:3},
               {name:"Adidas Jumper", price:3500,company:"Adidas" ,img:"css/images/products/shoes/c2.jpg", rating:4},
               {name:"Puma", price:9000,company:"Puma" ,img:"css/images/products/shoes/c3.jpg", rating:5},
              
            ]

        },
        {name:"Books",
           products:[
               {name:"R.L Meena", price:500,company:"RBD Publications" ,img:"css/images/products/shoes/c1.jpg", rating:4},
               {name:"Accounting", price:830,company:"College Book Hourse(CBH)",img:"css/images/products/shoes/c4.jpg", rating:3},
               {name:"Adidas Jumper", price:3500,company:"Adidas" ,img:"css/images/products/shoes/c2.jpg", rating:4},
               {name:"Puma", price:9000,company:"Puma" ,img:"css/images/products/shoes/c3.jpg", rating:5},
              
            ]

        },
        {name:"Phone",
           products:[
               {name:"MI 4", price:9000,company:"MI Company" ,img:"css/images/products/phones/samsung.png", rating:4},
               {name:"Iphone 5s", price:80000,company:"Apple" ,img:"css/images/products/phones/Apple-iPhone.jpg", rating:5},
               {name:"Samsung j7", price:7500,company:"Samsung" ,img:"css/images/products/phones/samsung.png", rating:4},
               {name:"Moto G+", price:9000,company:"Lenovo" ,img:"css/images/products/phones/Apple-iPhone.jpg", rating:5},
               {name:"Lenovo k5", price:8500,company:"Lenovo" ,img:"css/images/products/phones/samsung.png", rating:3},
               {name:"Redmi Y1", price:12000,company:"MI company" ,img:"css/images/products/phones/Apple-iPhone.jpg", rating:5},
               {name:"Honor X7", price:15000,company:"Honor" ,img:"css/images/products/phones/samsung.png", rating:4},
               {name:"Gionee A1", price:8500,company:"Gionee" ,img:"css/images/products/phones/Apple-iPhone.jpg", rating:5},
              
            ]

        },
        {name:"Kitchen",
           products:[
               {name:"Nike ", price:5000,company:"Nike" ,img:"css/images/products/shoes/c1.jpg", rating:4},
               {name:"Reebok flex", price:8000,company:"Reebok" ,img:"css/images/products/shoes/c4.jpg", rating:3},
               {name:"Adidas Jumper", price:3500,company:"Adidas" ,img:"css/images/products/shoes/c2.jpg", rating:4},
               {name:"Puma", price:9000,company:"Puma" ,img:"css/images/products/shoes/c3.jpg", rating:5},
               {name:"Nike ", price:5000,company:"Nike" ,img:"css/images/products/shoes/c1.jpg", rating:4},
               {name:"Reebok flex", price:8000,company:"Reebok" ,img:"css/images/products/shoes/c4.jpg", rating:3},
               {name:"Adidas Jumper", price:3500,company:"Adidas" ,img:"css/images/products/shoes/c2.jpg", rating:4},
               {name:"Puma", price:9000,company:"Puma" ,img:"css/images/products/shoes/c3.jpg", rating:5},
              
            ]

        },

    ]

}