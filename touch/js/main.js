$(function(){

	//alert($('#NavTitle .novel').html());

	/*小说 作者的单击*/
	$('.novel').bind('click',function(){
		//alert('22');
		$(this).addClass('black selectedButton').removeClass('gray button2').siblings().addClass('gray button2').removeClass('black selectedButton');
		$('#novelResult').show().siblings('#authorResult').hide();
	});
	$('.author').bind('click',function(){
		$(this).addClass('black selectedButton').removeClass('gray button2').siblings().addClass('gray button2').removeClass('black selectedButton');
		$('#authorResult').show().siblings('#novelResult').hide();
	});	


	/*热门作品展开*/
	$('.authorList .book').bind('click',function(){
		
		var d = $(this).children("span[name='down']");
		var u = $(this).children("span[name='up']");
		if(u.is(":hidden")){ //隐藏
			$(this).addClass('blackBackground');
			$(this).children("span[name='up']").show();
			$(this).children("span[name='down']").hide();
		}else{
			$(this).removeClass('blackBackground');
			$(this).children("span[name='up']").hide();
			$(this).children("span[name='down']").show();

		}
		$(this).parent().next('.listResult').toggle();
	});



});