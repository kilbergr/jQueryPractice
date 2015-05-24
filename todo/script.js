$("#add").on("click", function(){
	$('#addition').val();
	$("ul").append($('<li>' + '<input type="checkbox" name="checkbox" class="checkbox"/>' + $('#addition').val() +  '<button class="dButton">Done</button>' + '</li>'));
	$("#addition").val("");
});

$('li').delegate(".checkbox", "click", function(e){
	$(this).parent().parent().toggleClass("complete")
})
	

$(".dButton").on("click", function(e){	
	$(this).parent().toggleClass("done")
})