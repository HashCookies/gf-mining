(function($){})(window.jQuery);

var winW = $(window).width();
var winH = $(window).height();

$(document).ready(function() {
    
    var $slidesOne = $('#slides-one');
    var $slidesOneNav = $('#slides-one-nav');
    

    
    $('#cover').height(winH);
    $('#back').height(winH);
    
    $('#page').css({
        'marginBottom': winH
    });
 


});


$(window).scroll(function() {

});

$(window).load(function() {

    $('#back img').attr('src', 'images/final.jpg');

});