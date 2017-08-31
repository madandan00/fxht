//全选
$("#all").on("click",function(){
	$(".condition").attr("checked","checked")
})
//
$(".choose").on("click",function(){
	$(".option").toggle(500);
})
//全选
$("#all").on("change",function(){
	if($(this)[0].checked){
		$(".condition").attr("checked","checked");
	}else{
		$(".condition").removeAttr("checked");
	}
})
$(".condition").on("change",function(){
	var flag=true;
	var arr=$(".condition");
	var l=arr.length;
	//alert(l)
	for(var i=0;i<l;i++){
		if(!arr.eq(i)[0].checked){
			flag=false;
		}
	}
	if(flag){
		$("#all").attr("checked","checked");
	}else{
		$("#all").removeAttr("checked");
	}
})