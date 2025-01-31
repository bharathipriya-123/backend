//1
// let laptop={
//     nmae:"hp",
//     price:25000,
//     quantitu:1,
//     color:"white"
//}
// console.log(laptop);

//2 another way to cretae object
// let laptop2=new Object();
// laptop2.name="lenova"
// laptop2.color="black"
// laptop2.price=25000
// console.log(laptop2);

//getting the value using dot notation
// console.log(laptop2.name)
// laptop2.color="gray"
// console.log(laptop2.color)

//adding new property
// laptop.ram=8
// console.log(laptop)

//square bracket notation
// console.log(laptop['price'])
//changing the value
// laptop['price']=35000
// console.log(laptop.price)

//storing the value in the variable 
// let key='price'
// laptop[key]=45000
// console.log(laptop)

//nested object
// let laptop={
//     nmae:"hp",
//     price:25000,
//     quantitu:1,
//     color:"white",
//     dimension:{
//         length:7,
//         breadth:3.5,
//         height:5

//     }
// }
// console.log(laptop)

//onject and array
// let laptop={
//     nmae:"hp",
//     price:25000,
//     quantitu:1,
//     color:"white",
//     dimension:{
//         length:7,
//         breadth:3.5,
//         height:5

//     },
//     arrays:['devices','a']
// }
// console.log(laptop)
//accessing array element
// // console.log(laptop.arrays[0])
// // console.log(laptop.dimension.length)

// let laptop={
//     nmae:"hp",
//     price:25000,
//     quantitu:1,
//     color:"white",
//    buy:function()
//    {
//     console.log("welcome")
//    },
//    addeds:function(){
//    console.log("hi")
//    }
// }
// laptop.buy();
// laptop.addeds();
// console.log(laptop)

//object methods
let laptop={
        name:"hp",
        price:25000,
        quantitu:1,
        color:"white",
}

console.log(Object.keys(laptop));
console.log(Object.keys(laptop).length);
console.log(Object.values(laptop));
console.log(laptop.name);
console.log(laptop['price']);
laptop.name="lenova"
console.log(laptop.name)
laptop['name']="dell"
console.log(laptop.name)
laptop.height=5
laptop['ram']=8
console.log(laptop)
//delete
delete laptop.ram
console.log(laptop)
delete laptop['height']
console.log(laptop)


Object.freeze(laptop)
console.log(laptop)
