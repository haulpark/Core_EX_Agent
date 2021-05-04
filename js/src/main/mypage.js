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
  
});