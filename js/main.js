(function($){})(window.jQuery);

$(document).ready(function() {
    var winW = $(window).width();
    var winH = $(window).height();
    var $slidesOne = $('#slides-one');
    var $slidesOneNav = $('#slides-one-nav');
    

    
    $('#cover').height(winH - 100);
    $('#back-cover, #back').height(winH);
    
    $('#page').css({
        'top': winH - 100
    });
    
    var next;
    
    $slidesOneNav.find('.next').click(function() {
        
        if ( next === undefined ) {
            next = $('.slides li').next();
        } else {
             next = next.next();   
        }
        
        $slidesOne.scrollTo(next, 800);
    });
    
    var prev;
    $slidesOneNav.find('.prev').click(function() {
        if (prev === undefined) {
                if (next === undefined) {
                    prev = $('.slides li').prev();
                } else {
                    prev = next.prev();
                }
        
            } else {
                prev = prev.prev();
                
            }
         $slidesOne.scrollTo(prev, 800, function() {
             next = prev;
         });
    });

    

    
    $('.slides li').click(function() {
        $('.slides-wrap').scrollTo(($(this) - (winW / 2)), 600);
    })
    
    


});


$(window).scroll(function() {
    var $st = $(window).scrollTop();
        var winH = $(window).height();
    var $back = $('#back');
    
    if ($st > (winH + 1000)) {
        $back.addClass('visible');
    }
    
    if ($st < (winH + 1000)) {
        $back.removeClass('visible');
    }
});

$(window).load(function() {
    var winW = $(window).width();
    var winH = $(window).height();
    var $slidesOne = $('#slides-one');
    var $slidesOneNav = $('#slides-one-nav');
    
    $('#back img').attr('src', 'images/final.jpg');
    
    var slidesOneLength = $slidesOne.find('.slides li').size();
    var slidesOneImgWidth = $slidesOne.find('.slides li').width();
    var slidesOneWidth = (slidesOneLength * slidesOneImgWidth) + 100;
    $slidesOne.find('.slides').css({
        'width' : slidesOneWidth
    });
});