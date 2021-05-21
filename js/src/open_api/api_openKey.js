//api_openKey.js

$('.api_issued').click(function(e){
  e.preventDefault();

  $('#issuedBox').show();
});

$('.close').click(function(e){
  e.preventDefault();

  $('#issuedBox').hide();
});

$('.acc_scan').click(function(e){
  e.preventDefault();

  $('.scan_alarm').text("Access Key가 복사되었습니다.");
  $('.scan_alarm').show();

  var obj = document.getElementById("ac_id");
  document.execCommand("copy");
});

$('.sec_scan').click(function(e){
  e.preventDefault();

  $('.scan_alarm').text("Secret Key가 복사되었습니다.");
  $('.scan_alarm').show();

  var obj = document.getElementById("se_id");
  document.execCommand("copy");
});