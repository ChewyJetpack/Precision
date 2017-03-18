$(document).ready(function(){

	var toggle = $('.toggle');
	var mobnav = $('.main-nav');
	var mobnavlist = mobnav.find('ul');

	$.fn.reverseChildren = function() {
	  return this.each(function(){
	    var $this = $(this);
	    $this.children().each(function(){ $this.prepend(this) });
	  });
	};

	toggle.click(function (){
		$(this).toggleClass('active-toggle');
		mobnav.toggleClass('active-nav');
		//mobnavlist.reverseChildren();
	});
});
