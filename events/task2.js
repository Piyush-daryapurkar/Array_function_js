let btn=0
function create(){
    btn++
    
    if(btn==1 || btn ==2)
    {
        let btn=document.createElement('input')
        // let btn_text=document.createTextNode('click here')
        // btn.append(btn_text)
        let con=document.getElementById('container')
        con.append(btn)
    
    }
    

    else
    {
        alert("input box created")
    }
   
}