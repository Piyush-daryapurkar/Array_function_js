// selector = function
//librery and fream work =  we can use fream work we cant change in fream work 
//but we can change in librery
$(document).ready(
    $('.btn').click(
        function(){
            alert("clicked!!!")
        }
    ),
    $('.bt').dblclick(
        function(){
            alert("double click")
        }
    ),
    $('.b').mouseenter(
        function(){
            alert("on mouse enter")
        }
    ),
    $('.leave').mouseleave(
        function(){
            alert("3nd!!!")
        }
    ),


)