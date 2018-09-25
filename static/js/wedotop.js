$(function(){
	//pc自动跳移动端
	try {
		var urlhash = window.location.hash;
		if (!urlhash.match("fromapp")){
			if ((navigator.userAgent.match(/(iPhone|iPod|Android|ios|iPad)/i))){
				window.location="http://www.wedotop.com/Mobile/Index/index.html"; //这里的网址请改为你手机站的网址
			}
		}
	}
	catch(err){
		
	}
	
	//头尾加载
	$("#header").load("header.html");
	$("#footer").load("footer.html");	
	
	//一二级菜单
	$("body").on("click",".nav .meau a.fLevel",function(){
		//$(".nav .meau a.fLevel").removeClass("active");
		//$(this).addClass("active");
	});	
	$("body").on("mouseenter",".nav .meau>li",function(){
		$(this).find(".submenu").stop().slideDown();
	});	
	$("body").on("mouseleave",".nav .meau>li",function(){
		$(this).find(".submenu").stop().slideUp();
	});	
	
	//首页---微冠成产品
	$("body").on("mouseenter","#index .product .list>li",function(){
		$(this).addClass("active").siblings().removeClass("active");
	});		
	

})	
