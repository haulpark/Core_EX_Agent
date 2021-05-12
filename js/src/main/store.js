//store.js

var windowW = window.innerWidth;

var storeM = $('.store_modal');
var storeExit = $('.store_exit');

/* ================================ store_modal ================================ */

$('.store_credit').click(function(e){
  e.preventDefault();

  $('.store_modal_content').hide();
  $('.store_modal_credit').show();
});

storeExit.click(function(e){
  e.preventDefault();

  $('.store_modal_credit').fadeOut();
  storeM.fadeOut();

  $('.store_modal_content').fadeIn();
});

$('.store_content_1').click(function(e){
  e.preventDefault();

  document.getElementById("store_modal_title").innerHTML = "수수료 인하권 (7%)";
  document.getElementById("store_modal_ex").innerHTML = "수수료 인하권 (7%)에 대한 설명글입니다.";
  storeM.fadeIn();

});

$('.store_content_2').click(function(e){
  e.preventDefault();

  document.getElementById("store_modal_title").innerHTML = "수수료 인하권 (5%)";
  document.getElementById("store_modal_ex").innerHTML = "수수료 인하권 (5%)에 대한 설명글입니다.";
  storeM.fadeIn();
});

$('.store_content_3').click(function(e){
  e.preventDefault();

  document.getElementById("store_modal_title").innerHTML = "수수료 인하권 (3%)";
  document.getElementById("store_modal_ex").innerHTML = "수수료 인하권 (3%)에 대한 설명글입니다.";
  storeM.fadeIn();
});