function add(){
    let num1=parseInt(document.getElementById("number1").value);
    let num2=parseInt(document.getElementById("number2").value);
    num3=num1+num2

    document.getElementById("answer").innerHTML=num3
    return false
}