$(".change").on("click", function() {
	if($(this).hasClass("icon-xiugai")) {
		var val = $(this).parents("p").find("i").html();
		$(this).parents("p").find("i").html('<input type="text" class="kk" value=' + val + '>');
		$(this).removeClass("icon-xiugai").addClass("icon-duihaocheckmark17")
	}else if($(this).hasClass("icon-duihaocheckmark17")){
		var val = $(this).parents("p").find(".kk").val();
		$(this).parents("p").find("i").html( val );
		$(this).removeClass("icon-duihaocheckmark17").addClass("icon-xiugai")
		//alert(val)
	    $(this).parents("p").find(".tj").val(val);
	}

	
})