//显示弹框
$(".add").on("click",function(){
	$(".mark").show();
	$("#add-logistics").show();
})
//关闭叉
$(".close").on("click",function(){
	$(".mark").hide();
	$("#add-logistics").hide();
	$(".gs").val("");
	$(".code").val("");
})
//取消
$("#add-logistics .qx").on("click",function(){
	$(".mark").hide();
	$("#add-logistics").hide();
	$(".gs").val("");
	$(".code").val("");
})

