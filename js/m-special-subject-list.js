//一键删除
$("#delete").on("click", function() {
		$(".mark").show();
		$("#cancel").show();

		var arr = $(".arr");
		var l = arr.length;
		var list = [];
		for(var i = 0; i < l; i++) {
			if(arr.eq(i)[0].checked) {
				list.push(arr.eq(i).attr("show_id"))
			}
		}
		$("#cancel .qd").attr("show_id", list);
		$("#cancel .qd").on("click", function() {
			var show_id = $(this).attr("show_id");
			$.ajax({
				type: "get",
				url: "192.168.199.78/web/Admin/Order/DelOrder",
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
		$("#cancel .qx").on("click", function() {
			$("#cancel .qd").removeAttr("show_id");
			$(".mark").hide();
			$("#cancel").hide();

		})
	})