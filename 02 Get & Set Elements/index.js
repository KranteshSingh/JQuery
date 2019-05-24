$(document).ready(() => {

	// Getting the source of the image.
	// Using .attr we can get any type of attribute inside html element.

	let myImageSource = $(".my-image").attr("src")
	alert(myImageSource)

	let newParagraph = `This is a new paragraph with certain number of lines and i am being written by Krantesh Singh`
	$("#newerElement").text(newParagraph)

	// .html can change the html of the element or part which we have mentioned class.

	// __________________________________________________________________________________________

	// Changing the attribute of HTML elements.
	$(".my-image").attr("src", "instagram.com")

	

	// ____________________________________________________________________________________________

	// Adding some extra text or component using .append
	$(".paragraph").append("Some extra text inserted using .append")

	// Adding some extra text ot component using .prepend
	$(".paragraph").prepend("Some extra text inserted using .prepend")

	// ____________________________________________________________________________________________

	$(".paragraph").after("Some extra text inserted using .after")

	$(".paragraph").before("Some extra text inserted using .before")

	// _____________________________________________________________________________________________
	
	$("#someRandomId").remove()

	// if you want to retain the element but delete its content then use .empty

	$("#someRandomId2").empty()

	// ______________________________________________________________________________________________  

}) // end document ready function