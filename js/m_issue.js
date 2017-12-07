//主图上传
$("body").delegate(".picture", "change", function() {
	var path = $(this).val();
	if(path != "") {

		var type = path.substring(path.lastIndexOf(".") + 1, path.length).toLowerCase();
		if(type == "jpg" || type == "bmp" || type == "gif" || type == "png" || type == "jpeg") {
			$(this).parents('.pic').find("img").attr("src", window.URL.createObjectURL($(this)[0].files[0])).show();
			$(this).parents(".pic").find(".pic-mark").show();
			$(this).removeClass("picture").addClass("picture1");

		} else {
			//$(this).attr("value","");
			var html = '<input type="file" class="picture1 m_pic" />';
			$(this).parents(".big-pic-box").find(".pic-mark").hide();
			$(this).parents(".big-pic-box").find(".pic").append(html);
			$(this).parents(".big-pic-box").find("img").attr("src", " ").css("display", "none");
			$(this).parents(".big-pic-box").find(".picture").remove();

			alert("请上传正确的图片格式");
			return false;
		}
	}
})
$("body").delegate(".picture1", "change", function() {
		var path = $(this).val();
		if(path != "") {
			var type = path.substring(path.lastIndexOf(".") + 1, path.length).toLowerCase();
			if(type == "jpg" || type == "bmp" || type == "gif" || type == "png" || type == "jpeg") {
				$(this).parents('.pic').find("img").attr("src", window.URL.createObjectURL($(this)[0].files[0])).show();
				$(this).parents(".pic").find(".pic-mark").show();
				$(this).removeClass("picture1").addClass("picture");
			} else {
				//$(this).attr("value","");
				var html = '<input type="file" class="picture m_pic" />';
				$(this).parents(".big-pic-box").find(".pic-mark").hide();
				$(this).parents(".big-pic-box").find(".pic").append(html);
				$(this).parents(".big-pic-box").find("img").attr("src", " ").css("display", "none");
				$(this).parents(".big-pic-box").find(".picture1").remove();

				alert("请上传正确的图片格式");
				return false;
			}
		}
	})
	//文本域
$("body").delegate("textarea", "keyup", function() {
		var val = $(this).val();

		if(val.length == 0) {
			$(this).parent("div").find(".tishi").show();
		} else {
			$(this).parent("div").find(".tishi").hide();
		}
	})
	//材料删除
$(".ingredient").delegate(".op i", "click", function() {
		$(this).parents("tr").remove();
	})
	//增加材料
$(".ingredient-box .add-in").on("click", function() {
		var html = "<tr>" +
			"<td><input type='text' /></td>" +
			"<td><input type='text' /></td>" +
			"<td class='op'><i class='iconfont icon-guanbi'></i></td>" +
			"</tr>";
		$(this).parents(".ingredient-box").find(".ingredient").append(html)
	})
	//增加步骤
$(".m-menu-step .add-in").on("click", function() {
	var i = $(this).parents(".m-menu-step").find(".m-step").length
	if(i == 0) {
		var step = 1;
	} else {
		var step = parseInt($(".m-step").eq(i - 1).find(".step-tit span").html()) + 1;
	}

	var html = '<div class="big-pic-box"><div class="m-step">' +
		'<i class="iconfont icon-guanbi cancel"></i>' +
		'<p class="step-tit">第<span>' + step + '</span>步</p>' +
		'<div class="step-box clearfix">' +
		'<div class="step-left">' +
		'<div class="pic">' +
		'<div class="pic-mark"></div>' +
		'<input type="file" class="picture m_pic" />' +
		'<img src="" />' +
		'<p><i class="iconfont icon-jiahao"></i>上传步骤图</p>' +
		'</div>' +
		'</div>' +
		'<div class="step-right">' +
		'<textarea name="" rows="" cols=""></textarea>' +
		'<p class="tishi"><i class="iconfont icon-tianxie"></i>步骤描述：</p>' +
		'</div>' +
		'</div>' +
		'</div></div>'
	$(".m-step-box").append(html);
})
$(".m-step-box").delegate(".cancel", "click", function() {
	//$(this).parents(".m-step").remove();
	$(this).parents(".m-step").find(".pic").find("input").remove();
	var html = '<input type="file" class="picture m_pic" />';
	$(this).parents(".m-step").find(".pic").find("img").attr("src", " ").css("display", "none");

	$(this).parents(".m-step").find(".pic").append(html);
	$(this).parents(".m-step").find(".pic").find(".pic-mark").hide();
	$(this).parents(".m-step").find("textarea").val("");
	$(this).parents(".m-step").find(".step-right").find(".tishi").show();
})
$(".big-pic-box .cancel").on("click", function() {
	$(this).parents(".big-pic-box").find("input").remove();
	var html = '<input type="file" class="picture m_pic" />';
	$(this).parents(".big-pic-box").find(".pic-mark").hide();
	$(this).parents(".big-pic-box").find(".pic").append(html);
	$(this).parents(".big-pic-box").find("img").attr("src", " ").css("display", "none");
})