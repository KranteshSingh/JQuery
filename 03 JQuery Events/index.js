$(document).ready(()=>{

// callback function will execute when some functionality will happen.

$("#performSomeAction").click(()=>{
alert("A link was clicked")
})

$("#performSomeAction").click(() => {
	$(".paragraph").addClass('big-font');
})

$("#newElement").dblclick(()=>{
	$(".paragraph").css("color","red");
})

$("#some-image").hover(()=>{
		$(".my-image").hide("5000")
	})



})