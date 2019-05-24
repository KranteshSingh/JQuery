$(document).ready(() => {

    // below piece of code will hightlight the parent of class #performSomeAction
    $("#performSomeAction").parent().addClass('highlight')

    // below piece of code will add highlight class to all of parents of the #performSomeAction button.

    // $("#performSomeAction").parent().addClass('highlight')

    // $("#performSomeAction").parentUntil("button").addClass('highlight')

    $(".paragraph").children().addClass('highlight')

    // this will find all the children of class paragraph
    $(".paragraph").find("*").addClass('highlight')

}) // end doc ready