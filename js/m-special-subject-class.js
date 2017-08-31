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

$("#delete").on("click", function() {
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
	//新建分类描述低于200字
$(".txt").bind("keyup change", function() {
	var val = $(this).val();
	if($(this).val().length > 200) {
		window.confirm("请输入小于200字的内容");
		$(this).val(val.substring(0, 200));
	} 
})
//
$(".add").on("click",function(){
	$(".mark").show();
	$("#new-subject").show();
})
