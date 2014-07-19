$.yyc={
	centerDiv:function(obj) {
			obj.css({
				'left':($(window).width()-obj.width())/2,
				'top':($(window).height()-obj.height())/2,
			})
	}
	return obj;
}

