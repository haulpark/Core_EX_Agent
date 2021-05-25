// wallet.js

$('.sale_btn').click(function(e){
  e.preventDefault();

  $('.sale_popup').fadeIn();
  
});

$('.sale_popup_close').click(function(e){
  e.preventDefault();

  $('.sale_popup').fadeOut();
});

function selpercent(percent){
	if(percent != "직접입력"){
		document.getElementById("percent").value = percent;
		document.getElementById("percent").readOnly = true;
		document.getElementById("percent").focus();
	}else{
		document.getElementById("percent").readOnly = false;
		document.getElementById("percent").value = "";
                document.getElementById("percent").focus();
	}
}