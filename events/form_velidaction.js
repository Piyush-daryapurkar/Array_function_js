function getData(){
    let name = document.getElementById('name').value
    let address = document.getElementById('address').value
    let contact = document.getElementById('contact').value
    let email = document.getElementById('email').value
    let pass = document.getElementById('pass').value
    let cpass = document.getElementById('cpass').value

    if(name=="")
    {
        alert("Please enter your name")
        document.getElementById('name').focus()
        return false
    }
        

    else if(address=="")
    {
        alert("Please enter your address")
        document.getElementById('address').focus()
        return false

    }
        
    else if(contact=="")
    {
        alert("Please enter your contact")
        document.getElementById('contact').focus()
        return false
    }
    else if(contact.lenght>10 || contact.langht<10)
    {
        alert("Please enter 10 digit num")
        document.getElementById('contact').focus()
        return false
    }
    else if(isNaN(contact)){
        alert("plase enter number")
        document.getElementById('contact').focus()
        return false
    }
     else if(!(email.includes('@'))){
         alert("plase enter email")
         document.getElementById('email').focus()
        return false
     }
     else if(!(pass.match(/[!@#$%&*]/))){
        alert("plase enter special charector")
        document.getElementById('pass').focus()
       return false
    }
    
    else if(pass!=cpass){
        alert("password not match")
        document.getElementById('cpass').focus()
       return false
    }

}