$(function() {
	$(window).scroll(function() {
    if ($(this).scrollTop() > 465) {
    	$('.flex-video').trigger('play');
        $( ".header .navbar-default" ).css('background-color','#E43C49');
    }else{
    	$('.flex-video').trigger('stop');
        $( ".header .navbar-default" ).css('background-color','transparent');
    }
});
});

