//分页插件
$(".holder").jPages({
	containerID: "itemContainer",
	//		first: '首页',
	last: '最后一页',
	previous: '上一页',
	next: '下一页',
	perPage: 6,
	startPage: 1,
	startRange: 2,
	midRange: 3,
	endRange: 2,
	animation: 'wobble',
	keyBrowse: true,
	callback: function(pages, items) {
			//		$("#page-panel").html("<span class='now'>" +pages.current+"</span><span style='margin:0 5px'>/</span>");
		$("#page-pane2").html("<span class='all-page'>"+"共"+pages.count +"页" +"</span>");
			//		$("#page-pane3").html( );
		//			$("#page-pane4").html("每页数量:" + items.count / pages.count);

	}
});
