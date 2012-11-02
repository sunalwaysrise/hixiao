/**
 * @author Lwb
 */
$(function (){
	$(".mCenterAside").css({"height":$(".mCenterContenet").height()})
	$(".zodiac").focus(function(){$(".zodiacList").show().css({"z-index":999});})
	$(".zodiacList li").click(function(){
		$(".zodiac").val($(this).text());
		$(".zodiacList").hide().css({"z-index":0});
	})
	$(".bloodType").focus(function(){$(".bloodTypeList").show().css({"z-index":999});})
	$(".bloodTypeList li").click(function(){
		$(".bloodType").val($(this).text());
		$(".bloodTypeList").hide().css({"z-index":0});
	})
})


