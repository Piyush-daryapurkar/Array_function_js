async function fatch_data() {
    let stdata = await fetch("http://localhost:3000/studant")
    let res = await stdata.json()
    let data_store = res.map((e)=>`

    <tr>
        <td>${e.id}</td>
        <td>${e.name}</td>
        <td>${e.age}</td>
        <td><button onclick="mydelete('${e.id}')">delete</button></td>
        <td><button onclick="myedit('${e.id}')">edit</button></td>

    </tr>
    
    
    `).join("")
    document.getElementById('showdata').innerHTML=data_store
    
}
fatch_data()

function insdata(){
    let frmdata = {
        name:document.getElementById('name').value,
        age:document.getElementById('age').value
    }
    fetch("http://localhost:3000/studant",{
        method:"POST",
        headers :{
            'contant-type':'application/json'
        },
        body:JSON.stringify(frmdata)
    })
    .then(r=>alert('eror!!'))

}
// fatch_data()

// function mydelete(id){
//     console.log(id);
    
//     fetch(`http://localhost:3000/studant/${id}`,{
//         method: "DELETE"
//     })
//     .then(r=>alert('deleted'))
// }




// async function myedit(id){
//     let stdata=await fetch(`http://localhost:3000/studant/${id}`)
//     let data=await r.json()
//     let frm= `
//     <input type="text" value= '${data.id}'><br><br>
//     <input type="text" value ='${data.name}'><br><br>
//     <input type="text" value ='${data.age}'><br><br>
//     <input type="summit" value="update" onclick="finalupdate('${data.id}')">
//     `
//     document.getElementById('demoo').innerHTML=frm
// }
//   function finalupdate(){
//     let frm={
//         name:document.getElementById('nm1').value,
//         age:document.getElementById('ag1').value,
//     }
//     fetch(`http://localhost:3000/studant/${strid}`,{
//         method:'PUT',
//         headers:{
//             'content-type':'application/json'
//         },
//         body:JSON.stringify(frm)

//     })
//     .then(r=>alert("update!!!"))
//   }