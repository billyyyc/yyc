$(window).scroll(function() {
	var a = $(window).scrollTop();
	if($("#list1").length>0){
		a >= $("#login-img").offset().top - $("#login-img").height() 
		&& ($(".login-img").addClass("bounceInup"));
		a >= $("#login-img").offset().top - $("#login-img").height()  
		&& ($(".text1").addClass("moveInLeft"));
		}
	if($("#list2").length>0){
		a >= $("#list2").offset().top - $("#list2").height()/2  
		&& ($(".text2").addClass("moveInRight"));
		a >= $("#list2").offset().top - $("#list2").height()/2  
		&& ($(".chark-img").addClass("moveInLeft"));
		}
	if($("#list3").length>0){
		a >= $("#list3").offset().top - $("#list3").height()  
		&& ($(".text3").addClass("moveInLeft"));
		a >= $("#list3").offset().top - $("#list3").height()  
		&& ($(".quanzi-img").addClass("moveInRight"));
		}
	
	return true;
})
