$("#add").on("click", function(){
	$('#addition').val();
	$("ul").append($('<li>' + '<input type="checkbox" name="checkbox" class="checkbox"/>' + $('#addition').val() +  '<button class="dButton">Remove</button>' + '</li>'));
	$("#addition").val("");
});

$("ul").delegate(".dButton", "click", function(e){	
	$(this).parent().toggleClass("done")
})

$('ul').delegate("li", "click", function(e){
	$(this).toggleClass("complete")
})
	

