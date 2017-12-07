//删除
$("#itemContainer").delegate(".cancel", "click", function() {
	var show_id = $(this).attr("show_id");
	var obj = this;
	$(".mark").show();
	$("#cancel").show();
	$("#cancel .qd").attr("show_id", show_id);
	$("#cancel .qd").on("click", function() {
		var id = $(this).attr("show_id");
		var show_id = [];
		show_id.push(id);
		$.ajax({
			type: "get",
			url: url3,
			data: {
				"show_id": show_id
			},
			success: function(data) {
				if(data == 1) {
					$(obj).parents(".order").prev().remove();
					$(obj).parents(".order").remove();
					$(".mark").hide();
					$("#cancel").hide();
					alert('成功')
					location.reload()
				} else if(data == 0) {
					alert("系统繁忙")
				}
			}
		});
	})

})

$("#delete").on("click", function() {
	$(".mark").show();
	$("#cancel").show();
	$("#cancel .qd").on("click", function() {
		var arr = $(".arr");
		var l = arr.length;
		var list = [];
		for(var i = 0; i < l; i++) {
			if(arr.eq(i)[0].checked) {
				list.push(arr.eq(i).attr("show_id"))
			}
		}
		$.ajax({
			type: "get",
			url: url4,
			data: {
				"show_id": list
			},
			success: function(data) {
				if(data == 1) {
					// $(obj).parents(".order").prev().remove();
					// $(obj).parents(".order").remove();
					window.location.reload();
					$(".mark").hide();
					$("#cancel").hide();
					alert('成功')
					location.reload()
				} else if(data == 0) {
					alert("系统繁忙")
				}
			}
		});
	})

})
$("#cancel .qx").on("click", function() {
		$("#cancel .qd").removeAttr("show_id");
		$(".mark").hide();
		$("#cancel").hide();
	})
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