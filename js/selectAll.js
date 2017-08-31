	//全选
$("#all").on("change", function() {
	if($(this)[0].checked) {
		$(".arr").attr("checked", "checked");
	} else {
		$(".arr").removeAttr("checked");
	}
})
$(".arr").on("change", function() {
		var flag = true;
		var arr = $(".arr");
		var l = arr.length;
		//alert(l)
		for(var i = 0; i < l; i++) {
			if(!arr.eq(i)[0].checked) {
				flag = false;
			}
		}
		if(flag) {
			$("#all").attr("checked", "checked");
		} else {
			$("#all").removeAttr("checked");
		}
	})