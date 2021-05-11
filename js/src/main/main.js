// main.js

(function($){

$('.mob_menu').click(function(e){
  e.preventDefault();

  $('.mob_menuBar').css({"background":"rgba(0, 0, 0, 0.8)"});
  $('.mob_menuBar').toggle("slide");
});

$('.close_btn').click(function(e){
  e.preventDefault();

  $('.mob_menuBar').toggle("slide");
})

$('.dd_mypage').click(function(e){
  e.preventDefault();

  $('.dl_mypage').find('dd').slideToggle();

  $('.menu_img').css({"transform":"rotate(180deg)"});

})





})(jQuery);