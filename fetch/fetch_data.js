async function fun(){
    let url="https://jsonplaceholder.typicode.com/comments"
    let strdata= await fetch(url)
    let res = await strdata.json() 
    let em=res.map((e)=>{return e.email}) 
    console.log(em);
}


