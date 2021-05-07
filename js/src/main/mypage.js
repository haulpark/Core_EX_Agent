// mypage.js

// 사이드 탭
$(document).ready(function(){
	
	// ============== main tab ==============
	$('dl.tabs dd').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('dl.tabs dd').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	});
	
	// ============= 정산요청 탭 ===============
	$('ul.tabs li').click(function(){

		$('ul.tabs li').removeClass('current');

		$(this).addClass('current');
  });
  
});