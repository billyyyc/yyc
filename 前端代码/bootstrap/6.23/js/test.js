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
	
	return true;
})
