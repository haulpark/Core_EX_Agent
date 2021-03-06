//t_find_id.js

$(function(){

  //--tab Box 구현--------------------------------

  $('ul.tab li').click(function(){
    var activeTab = $(this).attr('data-tab');
    $('ul.tab li').removeClass('current');
    $('.tab_content').removeClass('current');
    $(this).addClass('current');
    $('#'+activeTab).addClass('current');
  })

  //--아이디 찾기----------------------------------
  $(document).ready(function () {

    init();

    $('#memberId').on("keyup", function () {
        memberIdValidEventHandler();
    });

    $('#memberId').on("paste", function () {
        setTimeout(function () {
            memberIdValidEventHandler();
        }, 10);
    });

    $('#email').on("keyup", function () {
        emailValidEventHandler();
    });

    $('#email').on("paste", function () {
        setTimeout(function () {
            emailValidEventHandler();
        }, 10);
    });

function init() {
    $("#phoneRadioBtn").prop('checked', true);
    changeFndTarget($("#phoneRadioBtn").data('type'));
    $("#memberId").val('');
    $("#memberName").val('');
    $("#phoneNumber").val('');
    $("#certNumber").val('');
    $("#email").val('');
}

function setInputMemberId(searchFindType, searchMemberIdKey) {
    if(searchFindType == 'certify') {
        $("label[for='selfCertifyRadioBtn']").trigger("click");
    }

    var searchedMemberId = localStorage.getItem(searchMemberIdKey);
    if (searchedMemberId == null) {
        return false;
    }

    $("#memberId").val(searchedMemberId);
    $('#memberId').trigger("keyup");
    localStorage.removeItem(searchMemberIdKey);
}

function memberIdValidEventHandler() {
    if ($("#memberId").val().length < 1) {
        $("#searchValidMemberId").show();
        $("#searchValidMemberId").text('아이디를 입력해 주세요');
        $("#searchPasswordBtn").prop("disabled", true);
    } else if ($("#memberId").val().length > 20) {
        // html maxlength 주고 있지만 특정 디바이스 미동작하여 추가함
        var memberIdOfMaxLength = $("#memberId").val().substring(0, 20);
        $("#memberId").val(memberIdOfMaxLength);
    } else if (!memberIdValidation()) {
        $("#searchValidMemberId").show();
        $("#searchValidMemberId").text('아이디는 영소문자, 숫자, 언더라인(_)만 가능합니다');
        $("#searchPasswordBtn").prop("disabled", true);
    } else {
        $("#searchValidMemberId").text('');
        $("#searchValidMemberId").hide();
        if ($('#selfCertifyRadioBtn').prop('checked')) {
            $("#searchPasswordBtn").prop("disabled", false);
        } else if ($('#emailRadioBtn').prop('checked')) {
            if (emailValidation()) {
                $("#searchPasswordBtn").prop("disabled", false);
            }
        }
    }
}

function showInValidMsg(target, msg) {
    $("#" + target).text(msg).show();
}

function emailValidEventHandler() {
    if (emailValidation()) {
        $("#searchValidEmail").hide();


        if ($("#memberId").val().length < 1) {
            $("#searchPasswordBtn").prop("disabled", true);
            return false;
        }

        if (!memberIdValidation()) {
            $("#searchPasswordBtn").prop("disabled", true);
        }
    } else {
        $("#searchValidEmail").show();
        if ($("#email").val().length < 1) {
            $("#searchValidEmail").text('이메일을 입력해 주세요');
            $("#searchPasswordBtn").prop("disabled", true);
            return;
        }
        $("#searchValidEmail").text('이메일주소를 다시 확인해주세요');
        $("#searchPasswordBtn").prop("disabled", true);
    }
}

var changeFndTarget = function(t){
    switch(t){
        case 'email':
            $("#memberName").hide();
            $(".tel-area").hide();
            $("#selfCertMessage").hide();
            $(".tel-cert-area").hide();
            $('#memberId, #memberName, #phoneNumber, #certNumber').val('');
            $("#memberId").show();
            $("#email").show();
            $("#searchPasswordBtn").prop("disabled", true);
            break;
        case 'phone':
            $("#memberId").show();
            $('#email').val('');
            $("#email").hide();
            $("#selfCertMessage").hide();
            $(".tel-area").show();
            $("#memberName").show();
            $("#searchPasswordBtn").prop("disabled", true);
            $("#sendCertPhoneBtn").show();
            $("#reSendCertPhoneBtn").hide();
            break;
        case 'selfCert':
            $('#memberId, #memberName, #phoneNumber, #certNumber, #email').val('');
            $("#memberId").show();
            $(".tel-area").hide();
            $(".tel-cert-area").hide();
            $("#memberName").hide();
            $('#email').val('');
            $("#email").hide();
            $("#selfCertMessage").show();
            $("#searchPasswordBtn").prop("disabled", true);
            break;
    }
    $("#memberId").val('');
    $("#searchValidMemberId").hide();
    $("#searchValidEmail").hide();
    $("#searchValidPhone").hide();
    $(".n-validation").text('');
}

function isValidMemberName() {
    var memberName = $("#memberName").val();
    if (!memberName) {
        return false;
    }
    return true;
}

function memberIdValidation() {

    if (!$("#memberId").val()) {
        return false;
    }

    if (!checkIdValue($("#memberId").val())) {
        return false;
    }

    return true;

}

//아이디형식체크
function checkIdValue(id) {
    if (!getTypeCheck(id, "abcdefghijklmnopqrstuvwxyz1234567890_")) {
        return false;
    }

    return true;
}

/*타입비교 (비교문자 , 비교형식 ; ex: getTypeCheck(string , "1234567890") ) */
function getTypeCheck(s, spc) {
    var tempAllowIdValidation = true;
    return tempAllowIdValidation;

    var i;
    for (i = 0; i < s.length; i++) {
        if (spc.indexOf(s.substring(i, i + 1)) < 0) {
            return false;
        }
    }
    return true;
}

function phoneValidation() {
    var phoneNumber = $('#phoneNumber').val();
    if (phoneNumber === '') {
        return false;
    }
    var regNumber = /^(01[016789])(\d{3,4})(\d{4})/;
    if(!regNumber.test(phoneNumber)){
        $("#phoneNumber").val(phoneNumber.replace(/[^0-9]/g,""));
        return false;
    }

    if (!(phoneNumber.length >= 10 && phoneNumber.length <= 11)) {
        return false;
    }
    return true;
}

function emailValidation() {
    var email = $('#email').val();
    if (email === '') {
        return false;
    }
    var emailRegExp = new RegExp('^[_a-zA-Z0-9-\\.]+@[\\.a-zA-Z0-9-]+\\.[a-zA-Z]+$');
    if(!emailRegExp.test(email)){
        return false;
    }
    if (memberIdValidation() && $("#memberId").val().length > 0) {
        $("#searchPasswordBtn").prop("disabled", false);
    }
    return true;
}

)};