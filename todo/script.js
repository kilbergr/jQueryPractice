$("#add").on("click", function(){
	$('#addition').val();
	$("ul").append($('<li>', {
		text: $('#addition').val()
		}));	
	$("#addition").val("");
});

$("ul").delegate("li", "click", function(e){	
	$(this).toggleClass("complete todos")
})
