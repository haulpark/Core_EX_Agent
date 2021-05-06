//api_openKey.js

$('.api_issued').click(function(e){
  e.preventDefault();

  $('#issuedBox').show();
});

$('.close').click(function(e){
  e.preventDefault();

  $('#issuedBox').hide();
});