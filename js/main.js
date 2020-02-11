$(document).ready(function() {	
	// Remove overlay on window load event
    $(window).load(function(){
        $('.doc-loader').fadeOut('slow');
    });
	
	   //Attach custom UI events
    addEvents();   

    //Start Counting
    startCounter();
	
	//Hack to make jQuery animation better and
	$(window).focus(function(){jQuery.fx.off = false;}); 
	$(window).blur(function(){jQuery.fx.off = true;});
});

//------------------------------------------------------------------------
//Helper Methods -->
//------------------------------------------------------------------------

var StringFormat = function() {
    var s = arguments[0];
    for (var i = 0; i < arguments.length - 1; i++) {
        var regExpression = new RegExp("\\{" + i + "\\}", "gm");
        s = s.replace(regExpression, arguments[i + 1]);
    }
    return s;
}
