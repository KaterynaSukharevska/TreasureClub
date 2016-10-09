/**
 * Animated header, sidebar etc.
 */
$(function () {
    /**
     * Get current scroll hight
     */
    function getCurrentScroll() {
        return window.pageYOffset || document.documentElement.scrollTop;
    }

    /**
     * Get current window width
     */
    function getCurrentWidth() {
        return $(window).width();
    }

    /**
     * Window resize for mobile size
     */
    $(window).scroll(function () {
        var scroll = getCurrentScroll(),
            $nav = $('.navbar'),
            $sbar = $('.sidebar'),
            inwth = window.innerWidth;

            if ($('.wrapper').hasClass('main-page')) {
                if (inwth >= 768) {
                    if (scroll >= $('.header').height() - $nav.height()) {
                        $nav.css({ position: "fixed", top: 0 });
                    } else {
                        $nav.css({ position: "absolute", bottom: 0, top: "initial" });
                    }
                } else {
                    $(".navigation").css({ position: "fixed" });
                }
            } else {
                if (scroll >= 1) {
                    $nav.css({ position: "fixed", top:0 });
                    //$sbar.css({ position: "fixed", top:100 });
                } else {
                    $nav.css({ position: "absolute", bottom: 0, top: "initial" });
                    //$sbar.css({ position: "relative", top:0 });
                }
            }
    });

    function stickyFoot(){
        $('body').css('margin-bottom',$('footer').innerHeight());
    }

    function bodySize(){
        if( $('body').innerHeight() <= $(window).height()){
            $('body').height($(window).height() - $('footer').innerHeight());
        }
        $('.wrapper:not(.main-page)').children('header').css('margin-bottom', $('nav.navbar').innerHeight());
    }

    /**
     * Window resize for mobile size
     */
    $(window).resize(function() {
        stickyFoot();
        bodySize();
        var width = getCurrentWidth();
        if (width <= 768) {
            $(".navigation").css({ position: "fixed", top: 0, bottom: "initial" });
        } else {
            $(".navigation").css({ position: "absolute", bottom: 0, top: "initial" });
        }
    });

    stickyFoot();
    bodySize();
    /**
     * Init lightbox
     */
    $(document).delegate('*[data-toggle="lightbox"]:not([data-gallery="navigateTo"])', 'click', function (event) {
        event.preventDefault();
        return $(this).ekkoLightbox({
            onShown: function () {
                if (window.console) {
                    return console.log('Checking our the events huh?');
                }
            },
            onNavigate: function (direction, itemIndex) {
                if (window.console) {
                    return console.log('Navigating ' + direction + '. Current item: ' + itemIndex);
                }
            }
        });
    });

    //order count
    $('.ord-minus').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.ord-plus').click(function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });

    /**
     * Splash page enter. Test variant
     */
    $(".accept-btn").click(function(){
        window.location.href = 'index.html';
    });

    /**
     * Post votes
     */
    $(".ranking > a").click(function(e){
        e.preventDefault();
        var $i = $(this).children('i');

        if ($i.hasClass("fa-star-o")) {
            $i.removeClass("fa-star-o");
            $i.addClass("fa-star");
        } else {
            $i.removeClass("fa-star");
            $i.addClass("fa-star-o");
        }
    });




});



