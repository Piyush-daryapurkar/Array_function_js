let head=document.querySelector('h1')
head.innerHTML="indore"

let para=document.querySelector('.para')
para.style.backgroundColor = "red"


let head1=document.querySelector('#head')
head1.style.color="blue"

let list=document.querySelectorAll('li')

for(let i=0;i<10;i++)
{
    if(i%2==0)
        {
            list[i].style.color="red"
        
        }

}