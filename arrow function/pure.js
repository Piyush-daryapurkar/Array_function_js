let btn=document.querySelector('.btn')
btn.addEventListener("click",function(){alert("clicked")})

let b=document.querySelector('.on')
b.addEventListener("click",function(){alert("onclick")})

let c=document.querySelector('.enter')
c.addEventListener("mouseenter",function(){alert("onmouseenter")})

let d=document.querySelector('.leave')
d.addEventListener("mouseleave",function(){alert("onmouseleave")})

let e=document.querySelector('.double')
e.addEventListener("dblclick",function(){alert("ondblclick")})