var stopp;
function counter(){
    let h1=document.getElementById('count')
    let n=1
    stopp=setInterval(()=>{h1.innerHTML=n++},200)
}
function c_stop(){
    clearInterval(stopp)
}
