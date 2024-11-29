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
function show(){
    let res = ar_ob.map((e)=>`
     <tr>
     <td>${e.name}</td>
     <td>${e.age}</td>
     <td>${e.addresh}</td>
     </tr>
    `).join("")

    document.getElementById('tbody').innerHTML=res
}