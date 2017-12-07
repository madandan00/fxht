//全选
//$("#all").on("click", function() {
//		$(this).parents(".option").find(".condition").attr("checked", "checked");
//		
//	})
//
$(".choose").on("click", function() {
		$(this).parents("#mj").find(".option").hide();
		$(this).parents("#mj").find(".sel").show();
	})
	//全选
$(".all").on("change", function() {
	//alert(1)
	if($(this)[0].checked) {
		$(this).parents(".option").find(".condition").attr("checked", "checked");
		$(this).parents(".option").find("input").attr("name", "tj");
	} else {
		$(this).parents(".option").find(".condition").removeAttr("checked");
		$(this).parents(".option").find("input").removeAttr("name")
	}
	//	if($(this).parents(".option").hasClass("Choice1")) {
	//		if($(this)[0].checked) {
	//			$(this).parents(".option").find(".condition").attr("checked", "checked");
	//			$(this).parents(".option").find("input").attr("name", "tj");
	//		} else {
	//			$(this).parents(".option").find(".condition").removeAttr("checked");
	//			$(this).parents(".option").find("input").removeAttr("name")
	//		}
	//	}else if($(this).parents(".option").hasClass("Choice2")){
	//		if($(this)[0].checked) {
	//			$(this).parents(".option").find(".condition").attr("checked", "checked");
	//			$(this).parents(".option").find("input").attr("name", "tj");
	//		} else {
	//			$(this).parents(".option").find(".condition").removeAttr("checked");
	//			$(this).parents(".option").find("input").removeAttr("name")
	//		}
	//	}

})
$("#Choice1 .condition").on("change", function() {
	if($(this)[0].checked) {
		$(this).parents(".item").find("input").attr("name", "tj")
	} else {
		$(this).parents(".item").find("input").removeAttr("name")
	}
	var flag = true;
	var arr = $("#Choice1 .condition");
	var l = arr.length;
	//alert(l)
	for(var i = 0; i < l; i++) {
		if(!arr.eq(i)[0].checked) {
			flag = false;
		}
	}
	if(flag) {
		$(this).parents("#Choice1").find(".all").attr("checked", "checked");
	} else {
		$(this).parents("#Choice1").find(".all").removeAttr("checked");
	}

})
$("#Choice2 .condition").on("change", function() {
		if($(this)[0].checked) {
			$(this).parents(".item").find("input").attr("name", "tj")
		} else {
			$(this).parents(".item").find("input").removeAttr("name")
		}
		var flag = true;
		var arr = $("#Choice2 .condition");
		var l = arr.length;
		//alert(l)
		for(var i = 0; i < l; i++) {
			if(!arr.eq(i)[0].checked) {
				flag = false;
			}
		}
		if(flag) {
			$(this).parents("#Choice2").find(".all").attr("checked", "checked");
		} else {
			$(this).parents("#Choice2").find(".all").removeAttr("checked");
		}

	})
	//
$(".m-choice").on("click", function() {
	//alert($(this)[0].checked)
	if($(this)[0].checked) {
		if($(this).hasClass("op1")) {
			$("#mj .option").removeClass("sel");
			$("#mj #Choice1").addClass("sel");
			$("#mj").find(".option").hide();
			$("#mj").find(".sel").show();
		} else if($(this).hasClass("op2")) {
			$("#mj .option").removeClass("sel");
			$("#mj #Choice2").addClass("sel");
			$("#mj").find(".option").hide();
			$("#mj").find(".sel").show();
		}
	}

})