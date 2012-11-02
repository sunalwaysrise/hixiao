/**
 * @author Lwb
 */
$(function (){
	$(".logOther").hover(function(){$(".logOthers").show()},function(){$(".logOthers").hide()})
	$(".selectArea").bind("click",show);
	$(".closeArea").bind("click",close);
    $(window).resize(setCenter);
	function show(){
		$(this).unbind("click");
		if($(".layoutBg").not("visible")){
			$(".layoutBg,.layFrame").show();
			setCenter();
		}
	}
	function close(){
		$(".layoutBg,.layFrame").hide();
		$(".selectArea").bind("click",show);
	}
	function setCenter(){
		 var cc=self.innerWidth ||document.body.clientWidth;
		 if($(".layFrame").not("visible")){
		 	$(".layFrame").css({"left":(cc-500)/2,"top":200})
		 }
	}
	$("#slides").slides({
        preload: true,play: 5000,pause: 2500,hoverPause: true,container: 'container', paginationClass: 'bannerNav',currentClass: 'bannerNavHover'
    });
    $("#slides2").slides({
        preload: true,play: 5000,pause: 2500,hoverPause: true,container: 'container2', paginationClass: 'bannerNav2',currentClass: 'bannerNavHover2'
    });
    $(".bannerNav li a,.bannerNav2 li a").html("")
    
    setPosition()
    $(window).resize(setPosition);
    $(window).bind("scroll",setPosition)
    function setPosition(){
    	var windowHeight = document.documentElement.clientHeight;
    	$(".quickContact").css({"top": windowHeight/2,})
    }
})

function preNext(config){
  $(function(){
	var ww=$("#fallsTopContent li").width();
    var len=$("#fallsTopContent li").length;
    $("#fallsTopContent").css({"width":ww*len})
    $(".pre").bind("click",ppp)
    $(".next").bind("click",nnn)
    function ppp(){
    	$(".pre").unbind("click");
    	//$(".next").unbind("click");
    	var curPosition=$("#fallsTopContent").css("left");
    	curPosition=parseInt(curPosition)
    	if(curPosition<0){
    		$("#fallsTopContent").animate({"left":curPosition+ww},function(){
    			$(".pre").bind("click",ppp);
    			$(".next").bind("click",nnn);
    		})
    	}
    }
    function nnn(){
    	//$(".pre").unbind("click");
    	$(".next").unbind("click");
    	var curPosition=$("#fallsTopContent").css("left");
    	if(curPosition=="auto"){curPosition=0}
    	curPosition=parseInt(curPosition)
    	if(curPosition>-ww*len+(ww*config)){
    		$("#fallsTopContent").animate({"left":curPosition-ww},function(){
    			//alert("s")
    			$(".pre").bind("click",ppp);
    			$(".next").bind("click",nnn);
    		})
    	}
    }
  })
}


