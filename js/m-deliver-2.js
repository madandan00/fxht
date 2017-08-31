//一键删除
$("#delete").on("click", function() {
	$(".mark").show();
	$("#cancel").show();
	$("#cancel .qd").attr("show_id", list);
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
			url: "http://192.168.199.140/web/Admin/Order/DelOrder",
			data: {
				"show_id": list
			},
			success: function(data) {
				if(data == 1) {
					window.location.reload();
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
	//单个删除
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
				url: "http://192.168.199.140/web/Admin/Order/DelOrder",
				data: {
					"show_id": show_id
				},
				success: function(data) {
					if(data == 1) {

						$(obj).parents(".order").prev().remove();
						$(obj).parents(".order").remove();
						$(".mark").hide();
						$("#cancel").hide();
					} else if(data == 0) {
						alert("系统繁忙")
					}
				}
			});
		})

	})
	//发货
$("#itemContainer").delegate(".fh", "click", function() {
	var obj = this;
	var show_id = $(this).attr("show_id");
	$(".mark").show();
	$("#deliver").show();
	$("#deliver .qd").attr("show_id", show_id);
	$("#deliver .qd").on("click", function() {
		var show_id = $(this).attr("show_id");
		var gs = $(".gs").val();
		var dh = $(".dh").val();
		$.ajax({
			type: "post",
			url: "http://192.168.199.140/web/Admin/Order/SaveOrderStatus",
			data: {
				"show_id": show_id,
				'courierservices': gs,
				'couriernumber': dh
			},
			success: function(data) {
				console.log(data)
				if(data == 1) {
					$(obj).parents(".order").prev().remove();
					$(obj).parents(".order").remove();
					$(".mark").hide();
					$("#deliver").hide();
				} else {
					alert("系统繁忙")
				}
			}
		});
	})
})
$("#deliver .qx").on("click", function() {
	$("#deliver .qd").removeAttr("show_id");
	$(".mark").hide();
	$("#deliver").hide();
})

//全选
$("#all").on("change", function() {
	if($(this)[0].checked) {
		$(".arr").attr("checked", "checked");
	} else {
		$(".arr").removeAttr("checked");
	}
})
$("#itemContainer").delegate(".arr", "change", function() {
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
$(".close").on("click", function() {
	$(".mark").hide();
	$(this).parents(".tip").hide();
})