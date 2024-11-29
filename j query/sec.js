$(document).ready(function(){
    $('h1').html("inside the ready function")

    $('h1').css("background-color","yellow")

    $('.para').css({"background-color":"red","color":"white"})

    $('#btn').click(function(){
        $('h1').css({"background-color":"blue","color":"white"})
    })

    $('#btn1').click(function(){
        $('.para').slideUp(3000)

    })
    $('#btn2').click(function(){
        $('.para').slideDown(3000)

    })
    $('#btn3').click(()=>{
        $('.para').slideToggle(3000)
    })
    $('#btn4').click(()=>{
        $('h1').fadeOut()
    })
    $('#btn5').click(()=>{
        $('h1').fadeIn()
    })
    $('#btn6').click(()=>{
        $('h1').fadeToggle()
    })

}
    // $('h1').html("code with piyush.............!!!!!!!!!!"),
    // $('.para').html("this is code"),
    // $('#span').html("spanish")
)   