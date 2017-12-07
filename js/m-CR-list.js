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
	//单个发货
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
					} else {
						alert("系统繁忙")
					}
				}
			});
		})
	})
	//一键发货
$("#Fgoods").on("click", function() {
	$(".mark").show();
	$("#Adeliver").show();
	$("#Adeliver .qd").on("click", function() {
		var arr = $(".Farr");
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
$("#Adeliver .qx").on("click", function() {
	$(".mark").hide();
	$("#Adeliver").hide();
})
$("#deliver .qx").on("click", function() {
		$("#deliver .qd").removeAttr("show_id");
		$(".mark").hide();
		$("#deliver").hide();
	})
	//完成
$("#itemContainer").delegate(".wc", "click", function() {
		var id = $(this).attr("show_id");
		var show_id = [];
		show_id.push(id);
		var obj = this;
		$.ajax({
			type: "post",
			url: "http://192.168.199.140/web/Admin/Order/SaveOrderStatu",
			data: {
				"show_id": show_id
			},
			success: function(data) {
				if(data == 1) {
					$(obj).parents(".order").prev().remove();
					$(obj).parents(".order").remove();
				} else {
					alert("系统繁忙")
				}
			}
		});

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
	//发货全选
$("#Fall").on("change", function() {
	if($(this)[0].checked) {
		$(".Farr").attr("checked", "checked");
	} else {
		$(".Farr").removeAttr("checked");
	}
})
$(".Farr").on("change", function() {
	var flag = true;
	var arr = $(".Farr");
	var l = arr.length;
	//alert(l)
	for(var i = 0; i < l; i++) {
		if(!arr.eq(i)[0].checked) {
			flag = false;
		}
	}
	if(flag) {
		$("#Fall").attr("checked", "checked");
	} else {
		$("#Fall").removeAttr("checked");
	}
})
$(function(){
	function GetQueryString(name) {
			var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
			var r = window.location.search.substr(1).match(reg);
			if(r != null) return unescape(r[2]);
			return null;
		}
		var id = GetQueryString("id");
		$(".nav li").removeClass("active");
		$(".nav li").eq(id).addClass("active")
})
