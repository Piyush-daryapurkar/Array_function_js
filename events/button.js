let btn=0
function create(){
    btn++
    if(btn==1)
    {
        let btn=document.createElement('button')
        let btn_text=document.createTextNode('click here')
        btn.append(btn_text)
        let con=document.getElementById('container')
        con.append(btn)
    
    }
    else
    {
        alert("button created")
    }
   
}