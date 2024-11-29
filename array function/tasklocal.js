
function fun(){
    let ob = {
        name :  document.getElementById('name').value,
        age : document.getElementById('age').value
   }

    localStorage.setItem("data",JSON.stringify(ob));

}

let sdata =JSON.parse(localStorage.getItem('data'))
console.log(sdata);

document.getElementById('uname').innerHTML=sdata.name
document.getElementById('uage').innerHTML=sdata.age


function clr(){
    localStorage.clear()
    location.reload()//page reload krega
}