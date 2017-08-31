//单条评论回复
$("#itemContainer").delegate(".pinglun", "click", function() {
	var show_id = $(this).attr("show_id");
	var obj = this;
	$(".mark").show();
	$("#reply").show();
	$("#reply .qd").attr("show_id", show_id);
	$("#reply .qd").on("click", function() {
		var id = $(this).attr("show_id");
		var show_id = [];
		show_id.push(id);
		$(".mark").hide();
					$("#reply").hide();
					$(".inputTxt textarea").val("");
					alert("系统繁忙")
		$.ajax({
			type: "get",
			url: "http://192.168.199.140/web/Admin/Order/DelOrder",
			data: {
				"show_id": show_id
			},
			success: function(data) {
				if(data == 1) {
					$(obj).parents(".order").remove();
					$(".mark").hide();
					$("#reply").hide();
				} else if(data == 0) {
					$(".mark").hide();
					$("#reply").hide();
					$(".inputTxt textarea").val("");
					alert("系统繁忙")
				}
			}
		});
	})

})
//一键回复
$("#huifu").on("click", function() {
	$(".mark").show();
	$("#reply").show();
	$("#reply .qd").on("click", function() {
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
					$(".mark").hide();
					$("#reply").hide();
				} else if(data == 0) {
					alert("系统繁忙")
				}
			}
		});
	})

})
$("#reply .qx").on("click", function() {
		$("#reply .qd").removeAttr("show_id");
		$(".mark").hide();
		$("#reply").hide();
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
	$(this).parents("#reply").hide();
})
//单条评论删除
