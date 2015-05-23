$("#submit").click(function(e){
	e.preventDefault();
	var newColor = $("#colorChoice").val();
	$("tr:even").not($("thead tr")).css("backgroundColor", newColor);
})
