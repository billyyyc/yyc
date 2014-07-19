$(window).ready(function(){
	$(".yidiantao-img").addClass("bounceInup");
	setTimeout(function(){$(".yidiantao-word").addClass("fadeInRight")},600);
	setTimeout(function(){$(".click").addClass("pulse")},1000);
	setTimeout(function(){$(".pulse").addClass("fadeOutUp")},2000);
	setTimeout(function(){$(".btn_ios").addClass("bounceInup");},3000);
	setTimeout(function(){$(".btn_android").addClass("bounceInup");},4000);

})
$(window).scroll(function() {
	var a = $(window).scrollTop();
	if($("#list1").length>0){
		a >= $("#service-img").offset().top - $("#service-img").height()/2 
		&& ($(".service-img").addClass("rorateIn"));
		a >= $("#service-img").offset().top - $("#service-img").height()/2  
		&& ($(".text1").addClass("moveInLeft"));
		}
	if($("#list2").length>0){
		a >= $("#login-img").offset().top - $("#login-img").height() 
		&& ($(".login-img").addClass("bounceInup")) 
		&& ($(".text2").addClass("moveInRight"));
		}
	if($("#list3").length>0){
		a >= $("#list3").offset().top - $("#list3").height() 
		&& ($(".text3").addClass("moveInRight"));
		a >= $("#list3").offset().top - $("#list3").height() 
		&& ($(".guanjia-img").addClass("moveInLeft"));
		}
	if($("#list4").length>0){
		(a+170) >= $("#list4").offset().top - $("#list4").height() 
		&& ($(".text4").addClass("moveInRight"));
		(a+170) >= $("#list4").offset().top  - $("#list4").height() 
		&& ($(".deal-img").addClass("moveInLeft"));
		}
	// 功能介绍页
	if($("#list21").length>0){
		a >= $("#card-img").offset().top - $("#card-img").height()/2 
		&& ($(".card-img").addClass("bounceInup"));
		a >= $("#card-img").offset().top - $("#card-img").height()/2  
		&& ($(".text21").addClass("moveInLeft"));
		}
	if($("#list22").length>0){
		a >= $("#quanzi-img").offset().top - $("#quanzi-img").height()/2 
		&& ($(".quanzi-img").addClass("scaleBig")) 
		&& ($(".text22").addClass("moveInRight"));
		}
	if($("#list23").length>0){
		a >= $("#list23").offset().top - $("#list23").height()/2 
		&& ($(".text23").addClass("moveInRight"));
		a >= $("#list23").offset().top - $("#list23").height()/2 
		&& ($(".qudaod-img").addClass("scaleBig"));
		}
	if($("#list24").length>0){
		(a+170) >= $("#list24").offset().top - $("#list24").height() 
		&& ($(".text24").addClass("moveInRight"));
		(a+170) >= $("#list24").offset().top  - $("#list24").height() 
		&& ($(".fukuan-img").addClass("fadeIn"));
		}
	return true;
})
