async function fet(){
    let sh = await fetch("http://localhost:3000/studant")
    let res = await sh.json()
    console.log(res);
    
}