
$("input").keydown(function(){
	$("#shortPW").css("visibility", "hidden");
	$("#noPW").css("visibility", "hidden");
	var pw = $("input").val();

		if(0<pw.length<6){
			$("#warning").css("visibility", "visible");
		}
		if(pw.length>=6){
			$("#warning").css("visibility", "hidden");
		}
})

$("#submit").on("click", function(e){
	e.preventDefault(); 
	var pw = $("input").val();
	if(pw.length===0){
		$("#noPW").css("visibility", "visible");
		$("input[type=password]").focus();
	}
	else if(pw.length<6){
		$("#warning").css("visibility", "hidden");
		$("#shortPW").css("visibility", "visible");
		$("input[type=password]").focus();
	}
	else if (pw.length>6){
		$("#successPW").fadeIn("2000ms");
		$("form").fadeOut("2000ms");
	}


})