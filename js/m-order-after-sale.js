//关闭
$(".close").on("click",function(){
	$(".mark").hide();
	$("#reply").hide();
	$("#hf").val("");
})
//回复确定
$(".qd").on("click",function(){
	var id=$(this).attr("data-id");
	var content=$("#hf").val();
	
	$.ajax({
		type:"get",
		url:"",
		data:{"reviews_id":id,"callback":content},
		success:function(data){
			if(data==1){
				window.location.reload();
			}else if(data==0){
				alert("请重新提交")
			}
		}
	});
})
//回复取消
$(".cancel").on("click",function(){
	$(".mark").hide();
	$("#reply").hide();
	$("#hf").val("");
})
//回复
$(".return .hf").on("click",function(){
	$(".mark").show();
	$("#reply").show();
})
//返回
$(".return .fh").on("click",function(){
	window.history.back();
})
