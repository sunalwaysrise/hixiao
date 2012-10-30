/**
 * @author Lwb
 */
$(function (){
	$(".logOther").hover(function(){$(".logOthers").show()},function(){$(".logOthers").hide()})
	$(".selectArea").bind("click",show);
	$(".closeArea").bind("click",close);
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
    $(".bannerNav li a").html("")
})


