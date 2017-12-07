//点击通过出现弹窗
$(".tg").on("click",function(){
	$(".mark").show();
	$("#pass").show();
})
//点击叉关闭弹窗
$(".close").on("click",function(){
	$(this).parents(".tip").hide();
	$("#big-pic").hide();
	$(".mark").hide();
})
//点击不通过
$(".no-tg").on("click",function(){
	$(".mark").show();
	$("#n-pass").show();
})
//点击取消关闭通过 弹框
$("#pass .qx").on("click",function(){
	$(this).parents(".tip").hide();
	$(".mark").hide();
})
//点击取消关闭不通过弹框
$("#n-pass .qx").on("click",function(){
	$("#n-reason").val("");
	$(this).parents(".tip").hide();
	$(".mark").hide();
})
//图片轮播
$("#m-lunbo img").each(function(index,val){
	$("#m-lunbo img").eq(index).on("click",function(){
		$(".mark").show();
		$("#big-pic").show();
		var left=index*445;
		$(".experts-answer-box").css("left", -left + "px");
		
	})
})
