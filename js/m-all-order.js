$(function() {
		function GetQueryString(name) {
			var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
			var r = window.location.search.substr(1).match(reg);
			if(r != null) return unescape(r[2]);
			return null;
		}
		var id = GetQueryString("id")
		$.ajax({
			type: "get",
			data: {
				"id": id
			},
			url: "192.168.199.78/web/Admin/Order/OrderShowList",
			success: function(data) {
				var data = JSON.parse(data);
				if(data != null || data != "") {
					var l = data.length;
					for(var i = 0; i < l; i++) {
						var state1 = '';
						var state2 = '';
						if(data[i][1].orderstatus == 0) {
							state1 = "待付款";
							state2 = "待付款";
						} else if(data[i][1].orderstatus == 1) {
							state1 = "已付款";
							state2 = '<span class="fh" show_id=' + data[i][1].show_id + '>发货</span>';
						} else if(data[i][1].orderstatus == 2) {
							state1 = "已发货";
							state2 = '<span class="wc" show_id=' + data[i][1].show_id + '>完成</span>';
						} else if(data[i][1].orderstatus == 3) {
							state1 = "交易成功";
							state2 = '已完成';
						}
						var part1 = '<tr class="order-info">' +
							'<td colspan="8" style="padding-top: 10px;">' +
							'<input type="checkbox" name="" id="all" value="" show_id=' + data[i][1].show_id + '/><span style="margin-left: 10px;">订单编号&nbsp;:&nbsp;</span><i>' + data[i][1].order_number + '</i>' +
							'<i style="margin-left: 30px;">' + data[i][1].order_addtime + '</i>' +
							'<strong>' + state1 + '</strong>' +
							'<b><i class="iconfont icon-dianhua"></i><span>' + data[i][1].consigneephone + '</span></b>' +
							'</td>' +
							'</tr>' +
							'<tr class="order">' +
							'<td class="li1" style="text-align: left;">'
						var l2 = data[i][0].length;
						var part2 = "";
						for(var j = 0; j < l2; j++) {
							part2 += '<img src=' + data[i][0][j] + ' alt="" />';
						}
						var part3 = '</td>' +
							'<td class="li2"><span>共' + data[i][1].quantity + '件</span></td>' +
							'<td class="li3"><span>' + data[i][1].nickname + '</span></td>' +
							'<td class="li4"><span>-￥' + data[i][1].coupon + '</span></td>' +
							'<td class="li5"><span>￥' + data[i][1].freight + '</span></td>' +
							'<td class="li6"><span>￥' + data[i][1].actualpayment + '</span></td>' +
							'<td class="li7">' + state2 + '</td>' +
							'<td class="li8">' +
							'<i class="iconfont icon-xiangqing xiangqing" style="color: #2681f7;"></i>' +
							'<i class="iconfont icon-p-delet cancel" style="color: #909090;" show_id=' + data[i][1].show_id + '></i>' +
							'</td>' +
							'</tr>'
						var htmll = part1 + part2 + part3;
						$(html).appendTo("#itemContainer")
					}
				} else {
					$("#list").hide();
				}
			}
		});
	})
	//删除
$(".cancel").on("click", function() {
	var show_id = $(this).attr("show_id");
	var obj = this;
	$(".mark").show();
	$("#cancel").show();
	$("#cancel .qd").attr("show_id", show_id);
	$("#cancel .qd").on("click", function() {
		$(obj).parents(".order").prev().remove();
		$(obj).parents(".order").remove();
		$(".mark").hide();
		$("#cancel").hide();
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

	$("#cancel .cancel").on("click", function() {
		$("#cancel .qd").removeAttr("show_id");
		$(".mark").hide();
		$("#cancel").hide();

	})

})
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
	//发货
$(".order").delegate(".fh", "click", function() {
	var obj = this;
	var show_id = $(this).attr("show_id");
	$(".mark").show();
	$("#deliver").show();
	$("#deliver .qd").attr("show_id", show_id);
	$("#deliver .qd").on("click", function() {
		$(obj).html("完成")
		$(obj).removeClass("fh").addClass("wc");
		$(".mark").hide();
		$("#deliver").hide();
		var show_id = $(this).attr("show_id");
		$.ajax({
			type: "get",
			url: "192.168.199.78/web/Admin/Order/SaveOrderStatus",
			data: {
				"show_id": show_id
			},
			success: function(data) {
				if(data == 1) {
					$(obj).html("完成")
					$(obj).removeClass("fh").addClass("wc");
					$(".mark").hide();
					$("#deliver").hide();
				} else {
					alert("系统繁忙");
				}
			}
		});
	})
	$("#deliver .qx").on("click", function() {
		$("#deliver .qd").removeAttr("show_id");
		$(".mark").hide();
		$("#deliver").hide();

	})
})

//完成
$(".order").delegate(".wc", "click", function() {
		$(this).html("已完成");
		$(this).removeClass("wc");
		var show_id = $(this).attr("show_id");
		$.ajax({
			type: "get",
			url: "192.168.199.78/web/Admin/Order/SaveOrderStatus",
			data: {
				"show_id": show_id
			},
			ssuccess: function(data) {
				if(data == 1) {
					$(this).html("已完成");
					$(this).removeClass("wc");
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
	//打印
	//$("#print").on("click", function() {
	//	var arr = $(".arr");
	//	var l = arr.length;
	//	var list = [];
	//	for(var i = 0; i < l; i++) {
	//		if(arr.eq(i)[0].checked) {
	//			list.push(arr.eq(i).attr("show_id"))
	//		}
	//	}
	//
	//	$.ajax({
	//		type: "get",
	//		url: "192.168.199.78/web/Admin/Order/DelOrder",
	//		data: {
	//			"show_id": list
	//		},
	//		success: function(data) {
	//			if(data == 1) {
	//				$(obj).parents(".order").prev().remove();
	//				$(obj).parents(".order").remove();
	//				$(".mark").hide();
	//				$("#cancel").hide();
	//			} else if(data == 0) {
	//				alert("系统繁忙")
	//			}
	//		}
	//	});
	//
	//})