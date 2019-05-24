$(document).ready(() => {

    // Traversing Through Siblings


    $(".icon").siblings().addClass('highlight');

    $(".icon").next().addClass('highlight');

    $(".icon").nextAll().addClass('highlight');

    $(".icon").nextUntil().addClass('highlight');

    $(".icon").prev().addClass('highlight');

    $(".icon").prevAll().addClass('highlight');

    $(".icon").prevUntil().addClass('highlight');

}) // end doc ready