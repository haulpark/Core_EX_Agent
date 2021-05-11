// mypage.js

// 사이드 탭
$(document).ready(function(){
	// ============= 정산요청 탭 ===============
	$('ul.tabs li').click(function(){

		$('ul.tabs li').removeClass('current');

		$(this).addClass('current');
	});
	
	// ========== 기본등록정보 - 수정 ============
	$('.resetBtn').click(function(){

		$('.myinfoBox').hide();
		$('.profile_modify_box').show();

	});

	$('.profile_modify_no').click(function(){

		$('.myinfoBox').show();
		$('.profile_modify_box').hide();

	});

	$('.profile_modify_yes').click(function(){

		$('.myinfoBox').show();
		$('.profile_modify_box').hide();

	});
	

});