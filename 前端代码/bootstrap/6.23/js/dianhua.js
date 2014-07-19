(function() {
	$.browser = {};
	$.browser.mozilla = /mozilla/.test(navigator.userAgent.toLowerCase()) && !/webkit    /.test(navigator.userAgent.toLowerCase());
	$.browser.webkit = /webkit/.test(navigator.userAgent.toLowerCase());
	$.browser.opera = /opera/.test(navigator.userAgent.toLowerCase());
	$.browser.msie = /msie/.test(navigator.userAgent.toLowerCase());

	// based on easing equations from Robert Penner (http://www.robertpenner.com/easing)

	var baseEasings = {};

	$.each( [ "Quad", "Cubic", "Quart", "Quint", "Expo" ], function( i, name ) {
		baseEasings[ name ] = function( p ) {
			return Math.pow( p, i + 2 );
		};
	});

	$.extend( baseEasings, {
		Sine: function ( p ) {
			return 1 - Math.cos( p * Math.PI / 2 );
		},
		Circ: function ( p ) {
			return 1 - Math.sqrt( 1 - p * p );
		},
		Elastic: function( p ) {
			return p === 0 || p === 1 ? p :
				-Math.pow( 2, 8 * (p - 1) ) * Math.sin( ( (p - 1) * 80 - 7.5 ) * Math.PI / 15 );
		},
		Back: function( p ) {
			return p * p * ( 3 * p - 2 );
		},
		Bounce: function ( p ) {
			var pow2,
				bounce = 4;

			while ( p < ( ( pow2 = Math.pow( 2, --bounce ) ) - 1 ) / 11 ) {}
			return 1 / Math.pow( 4, 3 - bounce ) - 7.5625 * Math.pow( ( pow2 * 3 - 2 ) / 22 - p, 2 );
		}
	});

	$.each( baseEasings, function( name, easeIn ) {
		$.easing[ "easeIn" + name ] = easeIn;
		$.easing[ "easeOut" + name ] = function( p ) {
			return 1 - easeIn( 1 - p );
		};
		$.easing[ "easeInOut" + name ] = function( p ) {
			return p < 0.5 ?
				easeIn( p * 2 ) / 2 :
				1 - easeIn( p * -2 + 2 ) / 2;
		};
	});


	var windowHeight = $(window).height();
	// smooth mouse wheel scroll
	$(function () {

	    var top = 0,
	        step = 55,
	        body = $.browser.webkit ? $('body') : $('html');

	     //Firefox
		$(window).bind('DOMMouseScroll', function(e)
		{
			//console.log(e.originalEvent.detail);
			return scrollPage(e.originalEvent.detail);

		});

		//IE, Opera, Safari
		$(window).bind('mousewheel', function(e){
			//console.log(e.originalEvent.wheelDelta);
			return scrollPage(e.originalEvent.wheelDelta);
		});

		function scrollPage(delta)
		{
			// touch panel (对safari，暂无法判断准确)
			if (delta % 120 != 0)
			{
				$(window).unbind('mousewheel');
				return true;
			};

	        if (delta < 0) {

	            top = (top+windowHeight) >= $(document).height() ? top : top-=step*delta/120;

	            body.stop().animate({scrollTop: top}, 400);
	        } else {

	            top = top <= 0 ? 0 : top-=step*delta/120;

	            body.stop().animate({scrollTop: top}, 400);
	        }

	        return false;
		}
	});

	var mHeaderHeight = 900,
		mNavHeight = 102,
		/* 做背景透明动画的高度 */
		mAnimateHeight = 600,
		mLogoMaxOffset = -38,
		mBtnDownloadMaxOffset = -540;

	var mDomHeader = $("#header"),
		mDomHeadrMaskWrapper = $("#headerMaskWrapper"),
		mDomHeaderMask = $("#headerMask"),
		mDomLogo = $("#logo"),
		mDomHello = $("#hello,#QRCode"),
		mDomBtnDownLoad = $("#btnDownload"),
		mDomContent = $("#content");

	var mIsNavMini = false;

	function handleScroll()
	{
		var scrollTop = $(this).scrollTop();
		if(scrollTop < 0)
		{
			return;
		}
		if (scrollTop > mHeaderHeight - mNavHeight)
		{
			mDomHeader.css("height", mNavHeight);
			mDomHeaderMask.css("height", scrollTop - (mHeaderHeight - mNavHeight));
			mDomLogo.css("marginTop", mLogoMaxOffset);
			mDomBtnDownLoad.css("marginTop", mBtnDownloadMaxOffset);
			mDomHello.css("opacity", 0);

			if (!mIsNavMini && scrollTop > mHeaderHeight - mNavHeight + 30)
			{
				mIsNavMini = true;
				mDomLogo.css("transform", "scale(0.8)");
				mDomBtnDownLoad.css("transform", "scale(0.8)");
			}
			if (scrollTop > mHeaderHeight)
			{
				mDomHeadrMaskWrapper.css("boxShadow", "rgba(0,0,0,0.18) 0 3px 10px");
			}
		}
		else
		{
			var currState = scrollTop / (mHeaderHeight - mNavHeight);
			mDomHeader.css("height", "");
			mDomHeadrMaskWrapper.css("boxShadow", "");
			mDomHeaderMask.css("height", 0);
			mDomLogo.css("marginTop", currState * mLogoMaxOffset);
			mDomBtnDownLoad.css("marginTop", currState * mBtnDownloadMaxOffset);
			mDomHello.css("opacity", 1 - currState * 2);

			if (mIsNavMini)
			{
				mIsNavMini = false;
				mDomLogo.css("transform", "scale(1)");
				mDomBtnDownLoad.css("transform", "scale(1)");
			}
		}
		
		if (scrollTop < mAnimateHeight)
		{
			mDomContent.css("backgroundColor", "rgba(255,255,255," + Math.min(0.88, scrollTop/mAnimateHeight) + ")");
		}
		else
		{
			mDomContent.css("backgroundColor", "rgba(255,255,255,0.88)");
		}
	}

	var mContentAnimations = [
		/* 第一篇内容介绍的动画 */
		{
			offset : 900,
			init : function()
			{
				$("#login-img").css({left:"-=10%", opacity:0});
				$("#text1 >h2,#text1 >p").css({left:"+=10%", opacity:0});
				
			},
			show : function()
			{
				$("#login-img").animate({left:"+=10%", opacity:1}, 1000, "easeOutCubic");
				$("#text1 > h2,#text1 > p").animate({left:"-=10%", opacity:1}, 1000, "easeOutCubic");
				
			}
		},
		/* 第二篇内容介绍的动画 */
		{
			offset : 1400,
			init : function()
			{
				$("#chark-img").css({left:"-=30%", opacity:0});
				$("#text2 > h2").css({top:"-=10", opacity:0});
				$("#text2 > p").css({top:"+=10", opacity:0});
				
			},
			show : function()
			{
				$("#chark-img").animate({left:"+=10%", opacity:1}, 1000, "easeOutCubic");
				setTimeout(function()
				{
					$("#text2 > h2").animate({top:"+=10", opacity:1}, 300);
					$("#text2 > p").animate({top:"-=10", opacity:1}, 300);
				}, 700);
			}
		},
		/* 第三篇内容介绍的动画 */
		{
			offset : 1700,
			init : function()
			{
				$("#quanzi-img").css({left:"-=10%", opacity:0});
				$("#text3 >h2,#text3 >p").css({left:"+=10%", opacity:0});
				
			},
			show : function()
			{
				$("#quanzi-img").animate({left:"+=10%", opacity:1}, 1000, "easeOutCubic");
				$("#text3 > h2,#text3 > p").animate({left:"-=10%", opacity:1}, 1000, "easeOutCubic");
				
			}
		},
		/* 第四篇内容介绍的动画 */
		{
			offset : 2500,
			init : function()
			{
				$("#content4 > h3, #content4 > p").css({opacity:0});
				$("#content_img4_1")
					.css("transform", "scale(0.4)")
					.css("opacity", 0);
				$("#content_img4_2").css("opacity", 0);
				$("#content_img4_3").css("width", 0);
			},
			show : function()
			{
				$("#content4 > h3, #content4 > p").animate({opacity:1}, 800);
				$("#content_img4_1")
					.css("transform", "scale(1)")
					.css("opacity", 1);
				setTimeout(function()
				{
					$("#content_img4_2").css({opacity:1});

					var rotateDegree = 12;
					var times = 6;
					setTimeout(function()
					{
						$("#content_img4_3").animate({width:368}, 400, "linear");
					}, (times + 1) * 100);
					while (times > 0)
					{
						rotatePhoneIcon(rotateDegree);
						rotateDegree = rotateDegree * -1;
						times--;
					}
					rotatePhoneIcon(0);
				}, 300);

				var delay = 100;
				function rotatePhoneIcon(degree)
				{
					setTimeout(function()
					{
						$("#content_img4_2").css("transform", "rotate(" + degree + "deg)");
					}, delay);
					delay += 100;
				}
			}
		}
	];
	
	function initPage()
	{
		$("#headerWrapper").css("position","fixed");
		$("#headerToplayout").css({position:"fixed", marginTop:0});
		$("#content").css("top", "900px");
		$(window).bind("scroll", handleScroll);

		var offset;
		for (var i = mContentAnimations.length - 1; i >= 0; i--) {
			mContentAnimations[i].init();
			offset = mContentAnimations[i].offset;
			if (offset > 0)
			{
				$(window).bind("scroll", {"offset" : offset, "func" : mContentAnimations[i].show}, function(event)
				{
					var data = event.data;
					if ($(this).scrollTop() > data.offset - windowHeight)
					{
						data.func();
						$(this).unbind(event);
					}
				});
			}
			else
			{
				mContentAnimations[i].show();
			}
		};

		if ($(window).scrollTop() != 0)
		{
			$(window).scrollTop(0);
		}
		else
		{
			$(window).scroll();
		}
	}
	
	function unInitPage()
	{
		$("#content").css("top", "");
		$(window).unbind("scroll");
		$("#header, #logo, #btnDownload, #content, #content h3, #content p, #content em").attr("style", "");
		$(window).scrollTop(0);
	}

	var mHasInitPage = false,
		mIsMobile = "ontouchend" in document ? true : false;
$(window).bind("resize", function (e) {
		var screenWidth = $(this).width();
        windowHeight = $(this).height();
        if ($(window).width() <= 800)
        {
        	if (mHasInitPage)
        	{
        		mHasInitPage = false;
        		
        	};
        	$('body').css("transform", "");
        }
        else
        {
        	if (!mHasInitPage && !mIsMobile)
        	{
        		mHasInitPage = true;
        		initPage();
        		$('body').css("transform", "");
        	}
        }
    });
	$(window).resize();
})();