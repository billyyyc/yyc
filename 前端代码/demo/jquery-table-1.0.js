;(function($){

	$.fn.table=function(options){
		var defaults = {
			//各种参数,属性
			evenRowClass:'evenRow',
			oddRowClass:'oddRow',
			currentRowClass:'currentRow'
		}
		var options = $.extend(defaults,options);//合并设置
		
		this.each(function() {
			// 实现功能的代码
			var _this = $(this);
			_this.find('tr:even').addClass(options.evenRowClass);
			_this.find('tr:odd').addClass(options.oddRowClass);
			_this.find('tr').mouseover(function(){
				$(this).addClass(options.currentRowClass)
			})
			_this.find('tr').mouseout(function(){
				$(this).removeClass(options.currentRowClass)
			})
		})
	}

})(jQuery);