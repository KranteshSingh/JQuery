$(document).ready(() => {

	// Finding Element by using ELEMENT NAME
	// Finding element by using element name and displaying all html code content of it.
	
	let myTags = $('body').html()
	alert(myTags)

	// Incase you want to showcase textual part then use .text()
	let myText = $('body').text()
	alert(myText) 
// _____________________________________________________________________________________________

	// Finding Element by using CLASS NAME

	let result = $('.heading').html()
	alert(result)
// ______________________________________________________________________________________________
 
	// Finding Element by using ID

	let result2 = $('#someRandomId').text()
	alert(result2)
// ______________________________________________________________________________________________

	// Finding ID inside a CLASS NAME by using both CLASS NAME & ID NAME

	let result3 = $('.paragraph #newElement').text()
	alert(result3)

	// Finding Class inside a ID NAME by using both ID NAME & CLASS NAME (Reverse)

	let result4 = $('#newElement .blue').text()
	alert(result4)
// ________________________________________________________________________________________________


})