//deal.js

$(document).ready(function(){
	
	// ============== main tab ==============
	$('ul.tabs li').click(function(){

		$('ul.tabs li').removeClass('current');

		$(this).addClass('current');
  });
  
});