$(document).ready(() => {


    // handling the focus of input fields
    // we have used normal function because of 'this' keyword

    $("input").focus(function(){
        $(this).addClass("colored-border")
    })

    $("input").focusout(function() {
        $(this).removeClass("colored-border")
    })

    $("form").submit(()=>{
        alert("user logged in successfully")
    })








}) // end doc ready