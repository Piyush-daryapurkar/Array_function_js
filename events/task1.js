let num=0
function add(){
    num++
    document.getElementById('num').innerHTML=num

}
function sub(){
    if(num!=0)
    {
        num--
        document.getElementById('num').innerHTML=num
    }
 
} 