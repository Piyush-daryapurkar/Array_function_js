// //multiple data ko store kr skte hai in sigle aaray(aray of obj)
// //syntax
// //let ar_ob = [{},{},{},{}]
// let ar_ob =[
//     {
//         name : "piyush",
//         age : 24,
//         addresh : "bhopal",
//     },
//     {
//         name : "ankur",
//         age : 24,
//         addresh : "ayodya bypass",
//     },
//     {
//         name : "hemant",
//         age : 24,
//         addresh : "aanad nagar",
//     }
// ]
// ob={
//     name : "chanchal",
//     age : 24,
//     addresh : "aanad nagar",
// }
// ob1={
//     name : "chanchal",
//     age : 78,
//     addresh : "aanad nagar",
// }
//  //ar_ob.push(ob,ob1);
// // ar_ob.pop(ob);
// let a=ar_ob.slice(1,3)
// //ar_ob.splice(1,2);//delete
// //ar_ob.splice(1,2,ob);//add
// //ar_ob.shift(ob);
// //ar_ob.unshift(ob)
// console.log(ar_ob)












//using map

let ar_ob =[
    {
        name : "piyush",
        age : 24,
        addresh : "bhopal",
    },
    {
        name : "ankur",
        age : 44,
        addresh : "ayodya bypass",
    },
    {
        name : "hemant",
        age : 24,
        addresh : "aanad nagar",
    }
];

// let nm=ar_ob.map((e)=>{return e.name})
// console.log(nm);

let ag=ar_ob.filter((e)=>{return e.age>34})
console.log(ag);