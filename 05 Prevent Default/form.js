$(document).ready(() => {

    //trigger a particular event
    $("#email-input").trigger("focus")
    // handling the focus of input fields
    // we have used normal function because of 'this' keyword

    $("input").focus(function(){
        $(this).addClass("colored-border")
    })

    $("input").focusout(function() {
        $(this).removeClass("colored-border")
    })


    // forms on submission generally reloads the page
    // preventDefault method will stop the default behaviour.
    $("form").submit((evente)=>{
        evente.preventDefault()
        alert("user logged in successfully")
    })








}) // end doc ready