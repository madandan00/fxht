function checkPic(mark) {
	var picPath = document.getElementById(mark).value;
	console.log(picPath)
	var type = picPath.substring(picPath.lastIndexOf(".") + 1, picPath.length).toLowerCase();
	if(type == "xls" || type == "xlsx" || type == "xlsm" || type == "xltx" || type == "xltm" || type == "xlsb" || type == "xlam") {
		return true;

	} else {
		//alert($("#"+mark).val())
		$("#" + mark).val("");
		alert("请上传Excel表");
		//alert($("#"+mark).val())
		return false;
	}
}
$(".close").on("click", function() {
	$(this).parents(".tip").hide();
	$(".mark").hide();
})
$("#daoru .qd").on("click", function() {
	$(this).parents(".tip").hide();
	$(".mark").hide();
})
$("#daoru .qx").on("click", function() {
	$(this).parents(".tip").hide();
	$(".mark").hide();

})