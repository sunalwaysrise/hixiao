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
})

var t = n = count = 0;
$(function(){
    count = $("#play_list a").size();   
    $("#play_list a:not(:first-child)").hide();   
    $("#play_text li:first-child").css({"background":"#fff",'color':'#000'});   
    $("#play_info").click(function(){window.open($("#play_list a:first-child").attr('href'), "_blank")});   
    $("#play_text li").click(function() {
        var i = $(this).text() - 1;
        n = i;
        if (i >= count) return;   
        $("#play_info").html($("#play_list a").eq(i).find("img").attr('alt'));   
        $("#play_info").unbind().click(function(){window.open($("#play_list a").eq(i).attr('href'), "_blank")})   
        $("#play_list a").filter(":visible").fadeOut(500).parent().children().eq(i).fadeIn(1000);
        $(this).css({"background":"#fff",'color':'#000'}).siblings().css({"background":"#000",'color':'#fff'});   
    });
    t = setInterval("showAuto()", 6000);   
    $("#play").hover(function(){clearInterval(t)}, function(){t = setInterval("showAuto()", 6000);});   
})
function showAuto(){
    n = n >= (count - 1) ? 0 : n + 1;   
    $("#play_text li").eq(n).trigger('click');   
}
