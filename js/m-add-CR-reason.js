page(8)
//修改
$(".change").on("click", function() {
		if($(this).hasClass("icon-xiugai")) {
			var val = $(this).parents("tr").find(".li3 span").html();
			$(this).parents("tr").find(".li3 span").html('<input type="text" class="kk" value=' + val + '>');
			$(this).removeClass("icon-xiugai").addClass("icon-duihaocheckmark17")
		} else if($(this).hasClass("icon-duihaocheckmark17")) {
			var val = $(this).parents("tr").find(".kk").val();
			$(this).parents("tr").find(".li3 span").html(val);
			$(this).removeClass("icon-duihaocheckmark17").addClass("icon-xiugai");
			
			$.ajax({
				type:"get",
				url:"",
				data:{},
				success:function(){
					
				}
			});
		}
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
//删除
$("#delete").on("click", function() {
   	var obj=this;
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
		url: "192.168.199.78/web/Admin/Order/DelOrder",
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