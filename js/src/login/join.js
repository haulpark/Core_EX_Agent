// t_join_check.js

(function($){

	/*
	$('#selectEmail').change(function(){
		 $("#selectEmail option:selected").each(function () {
				if($(this).val()== '1'){ //직접입력일 경우
					$("#str_email02").val(''); //값 초기화
					$("#str_email02").attr("disabled",false); //활성화
				}else{ //직접입력이 아닐경우
					$("#str_email02").val($(this).text()); //선택값 입력
					$("#str_email02").attr("disabled",true); //비활성화
				}
			 }); 
			});
	*/

// 비밀번호 -----------------------------------------------

	var pwResult;
	var userPw = $('#userPw');

	userPw.on('blur', function(e){
		e.preventDefault();

		var rel = $(this).val();
		pwResult = rel;

		var ck  = /^([a-z0-9]|[*!@#$^=-_]){10, 20}$/i; // (){}[]+\/ 글자는 제한
		var relTest = ck.test( rel );
		var dl = $(this).parents('dl');
		var conDt = $(this).parents('dd').eq(0).next('.confirm_text');

		if( rel.length <= 10 || rel.length >= 20 ){
			dl.addClass('error').removeClass('success');
			conDt.text('비밀번호는 10~20글자, 영문/숫자/특수문자(*!@#$^=-_)를 혼합하여 입력해주세요.');
		}else{
			dl.addClass('success').removeClass('error');
			conDt.text('비밀번호 내용이 입력되었습니다.');
		}

	});

	var userPw2 = $('#userPw2');
	userPw2.on('blur', function(e){
		e.preventDefault();
		var rel = $(this).val();
		var dl = $(this).parents('dl');
		var conDt = $(this).parents('dd').eq(0).next('.confirm_text');

		if(rel !== pwResult){
			dl.addClass('error').removeClass('success');
			conDt.text('비밀번호가 동일하지 않습니다.');
		}else{
			dl.addClass('success').removeClass('error');
			conDt.text('비밀번호가 일치합니다.');
		}
	});

// 핀 번호 ----------------------------------------------- 안 됌


var pinResult;
var userPin = $('#userPin');

userPin.on('blur', function(e){
	e.preventDefault();

	var rel = $(this).val();
	pinResult = rel;

	var ck  = /^[0-9]{4}$/;
	var relTest = ck.test( rel );
	
	var dl = $(this).parents('dl');
	var conDt = $(this).parents('dd').eq(0).next('.confirm_text');

	if( rel !== ck ){
		dl.addClass('success').removeClass('error');
		conDt.text('핀 번호가 입력되었습니다.');
	}else{
		dl.addClass('error').removeClass('success');
		conDt.text('4자리 숫자를 입력해주세요.');
	}

});


var userPin2 = $('#userPin2');
userPin2.on('blur', function(e){

	e.preventDefault();
	var rel = $(this).val();
	var dl = $(this).parents('dl');
	var conDt = $(this).parents('dd').eq(0).next('.confirm_text');

	if(rel !== pwResult){
		dl.addClass('error').removeClass('success');
		conDt.text('핀 번호가 동일하지 않습니다.');
	}else{
		dl.addClass('success').removeClass('error');
		conDt.text('핀 번호가 일치합니다.');
	}
});

// 핀 번호 -----------------------------------------------
var userEm = $('#email');
userEm.on('blur', function(e){
	e.preventDefault();

	var rel = $(this).val();
	var ck  = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
	var relTest = ck.test( rel );
	var dl  =  $(this).parents('dl');
	var conT   = $(this).parents('dd').eq(0).next('.confirm_text');

	if(rel == ""){
		dl.addClass('error');
		dl.removeClass('success');
		conT.text('올바른 이메일 형식을 입력해주세요.');
	}else if( !relTest ){
		dl.addClass('error');
		dl.removeClass('success');
		conT.text('5~20자의 영문 소문자, 숫자와 특수기호(_),(-)만 사용 가능합니다.');
	}else{
		dl.addClass('success');
		dl.removeClass('error');
		conT.text('이메일 형식이 올바릅니다.');
	}
});

// 이메일 인증 -----------------------------------------------

var CN = $('#companyName');
	CN.on('blur', function(e){
		e.preventDefault();

		var rel = $(this).val();
		var ck  = /^([a-z0-9]|[-_]){5,20}$/i; 
		var relTest = ck.test( rel );
		var dl  =  $(this).parents('dl');
		var conT   = $(this).parents('dd').eq(0).next('.confirm_text');

		if(rel == ""){
			dl.addClass('error');
			dl.removeClass('success');
			conT.text('회사명을 입력해주세요.');
		}else if( !relTest ){
			dl.addClass('error');
			dl.removeClass('success');
			conT.text('영문/숫자만 입력 가능합니다.');
		}else{
			dl.addClass('success');
			dl.removeClass('error');
			conT.text('입력된 형식이 올바릅니다.');
		}
	});




// 회원가입 후 페이지 이동 -----------------------------------------------
	$('[type="submit"]').on('click', function(e){
		e.preventDefault();
	
		location = './login.html';

	});



})(jQuery);