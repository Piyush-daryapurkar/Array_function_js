let head=document.getElementById("head")

    function add(){
        let num1=parseInt(document.getElementById("num1").value)
        let num2=parseInt(document.getElementById("num2").value)
        head.innerHTML=num1+num2
       
        
        return false
    }
    function mul(){
        let num1=parseInt(document.getElementById("num1").value)
        let num2=parseInt(document.getElementById("num2").value)
        head.innerHTML=num1*num2
       
        
        return false
    }
    function sub(){
        let num1=parseInt(document.getElementById("num1").value)
        let num2=parseInt(document.getElementById("num2").value)
        head.innerHTML=num1-num2
       
        
        return false
    }
    function div(){
        let num1=parseFloat(document.getElementById("num1").value)
        let num2=parseFloat(document.getElementById("num2").value)
        head.innerHTML=num1/num2
       
        
        return false
    }