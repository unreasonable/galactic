var addEvents = function()
{
	$('.floating-rocket').everyTime(10, function () {
			$(".floating-rocket").animate({
				marginTop: "+=10",
				marginLeft: "+=5"
			}, 1000, 'linear').animate({
				marginTop: "-=10",
				marginLeft: "-=5"
			}, 1000, 'linear');
	});

	$('ul.button-items li').hover(function(){
        $('.tooltip').show();
        $('.tooltip p').text($(this).find('img').attr('alt'));
		$('.tooltip p').vAlign();
        $(this).find('img').css({
            'margin-top':'-129px'
        });
    }, function() {
        $(this).find('img').css({
            'margin-top':'0px'
        });
        $('.tooltip').hide();
    });

    $('ul.social li').hover(function(){
        $(this).find('img').css({
            'margin-top':'-23px'
        });
    }, function() {
        $(this).find('img').css({
            'margin-top':'0px'
        });
    });

    $('ul.button-items li').mousemove(function(event) {
        $('.tooltip').css({
            'left':event.pageX-79
        });
    });
}

	

	
