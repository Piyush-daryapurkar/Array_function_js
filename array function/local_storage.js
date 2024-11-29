// set item function h local storage me value set krega key value pair me string from me
// localStorage.setItem("name","piyush")
// localStorage.setItem("contact","1234")

// let an = localStorage.getItem("name")//for get data from storage
// console.log(an);

// localStorage.removeItem("contact")////for delate any  any key
// localStorage.clear()//for clear all the data from local storage


localStorage.setItem("name","dani denials")
localStorage.setItem("contact","6262")
localStorage.setItem("age","28-32-28")   




let an = localStorage.getItem("name")
let ar = localStorage.getItem("contact")
let aw = localStorage.getItem("age")


document.getElementById("name").innerHTML=an
document.getElementById("contact").innerHTML=ar
document.getElementById("age").innerHTML=aw



//store object 

// let ob = {
//     name :"chai",
//     price : "12"

// }
// localStorage.setItem("ob",JSON.stringify(ob))
// let o = JSON.parse(localStorage.getItem("ob"))
// console.log(o);





//store array

// let arr = ['piyush','12']
// localStorage.setItem("array",arr)
// let arn = localStorage.getItem("array")
// console.log(typeof arn);

