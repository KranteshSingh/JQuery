$(document).ready(() => {

// Custom methods and Parameters

// It will highlight the first element after class .row
$(".row").first().addClass('highlight');


// It will highlight the last element of the class .row
$(".row").last().addClass('highlight');


// it will highlight the element in the list accordingly.
$(".icon").eq(2).addClass('highlight')
    

}) // end doc ready