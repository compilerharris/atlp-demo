$( document ).ready(function() {
    // var didScroll;
    // var lastScrollTop = 0;
    // var delta = 5;
    // var headerHeight = $('.header').outerHeight();
    // var scrollTop = $('.slider-1').outerHeight() - $('.home-sub-nav').outerHeight() - headerHeight;
    // var subheaderHeight = $('.sub_header').outerHeight();
    // $(window).scroll(function(event) {
    //     didScroll = true;
    // });
    // setInterval(function() {
    //     if (didScroll) {
    //         hasScrolled();
    //         didScroll = false;
    //     } 
    // });
    // function hasScrolled() {
    //     var st = $(this).scrollTop();
    //     if (Math.abs(lastScrollTop - st) <= delta)
    //         return;
    //     if (st > lastScrollTop && st > headerHeight) {
    //         $('.header').removeClass('nav-down').addClass('header--hidden');
    //         $('.home-sub-nav').removeClass('nav-down').addClass('home-sub-nav--hidden');
    //         $('#burger').removeClass('burger').addClass('header--hidden');
    //     } else {
    //         if (st + $(window).height() < $(document).height()) {
    //             $('.header').removeClass('header--hidden').addClass('nav-down');
    //             $('.home-sub-nav').removeClass('home-sub-nav--hidden').addClass('nav-down');
    //             $('#burger').removeClass('header--hidden').addClass('burger');
    //         }
    //     } if (st <= scrollTop) {
    //         $(".home-sub-nav").removeClass("nav-down");
    //         console.log('tab');
    //     }
    //     lastScrollTop = st;
    // }

    // slider-1
    $('.home-banner-slider').owlCarousel({
        loop:false,
        margin:0,
        nav:true,
        dots:false,
        mouseDrag: false,
        touchDrag: false,
        items:1,
        responsive:{
            0:{
                nav:false,
                dots:true,
            },
            1000:{
                nav:true,
                dots:false,
            }
        }
    });

    // highlights
    $('.highlights-slider').owlCarousel({
        loop:false,
        margin:30,
        nav:true,
        items:3,
        dots:false,
        mouseDrag: false,
        responsive:{
            0:{
                items:1,
                margin:10,
            },
            600:{
                items:2,
                margin:20,
            },
            1024:{
                items:3,
                margin:30,
            }
        }
    })

    // single-image-slider
    $('.single-image-slider').owlCarousel({
        loop:false,
        margin:0,
        nav:true,
        items:1,
        dots:true,
        responsive:{
            0:{
                nav:false,
            },
            600:{
                nav:true,
            }
        }
    })

    // two-image-slider
    $('.two-image-slider').owlCarousel({
        // stagePadding: 50,
        loop:true,
        margin:0,
        nav:true,
        items:1,
        dots:true,
        responsive:{
            0:{
                margin:10,
                nav:false,
            },
            600:{
                margin:20,
                nav:true,
            },
            1000:{
                margin:30
            }
        }
    })

    // three-img-slider
    $('.three-img-slider').owlCarousel({
        stagePadding: 300,
        loop:false,
        margin:30,
        nav:true,
        items:1,
        dots:true,
        center: true,
        responsive:{
            0:{
                margin:10,
                stagePadding: 50,
                nav:false,
            },
            600:{
                margin:20,
                stagePadding: 100,
                nav:true,
            },
            1024:{
                margin:30,
                stagePadding: 200,
            },
            1500:{
                margin:40,
                stagePadding: 300,
            }
        }
    })
    $('.three-img-slider').trigger('to.owl.carousel', 2)

    // location
    $('.location-slider').owlCarousel({
        loop:false,
        margin:30,
        nav:true,
        items:1,
        dots:true,
        mouseDrag: false,
    })

    // floor-plan
    $('.plans-slider').owlCarousel({
        loop:false,
        margin:30,
        nav:true,
        items:1,
        dots:true,
        responsive:{
            0:{
                margin:10,
                nav:false,
            },
            600:{
                margin:20,
                nav:true,
            },
            1024:{
                margin:30,
            }
        }
    })






    // slider-4
    $('.home-slider').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        items:1,
        dots:false,
        // mouseDrag: true,
        // responsive:{
        //     0:{
        //         items:1
        //     },
        //     600:{
        //         items:3
        //     },
        //     1000:{
        //         items:5
        //     }
        // }
    })

     // slider-5
    $('.project-floor-slider').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        dots:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })

    // location Advantage
    $('.brand-slider').owlCarousel({
        loop:false,
        margin:30,
        nav:false,
        items:3,
        dots:true,
        mouseDrag: false,
        responsive:{
            0:{
                items:1,
                margin:10,
            },
            600:{
                items:2,
                margin:20,
            },
            1024:{
                items:3,
                margin:30,
            }
        }
    })

    $('.project-overview-slider').owlCarousel({
        loop: true,
        margin: 30,
        nav: false,
        items: 4,
        dots: false,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: false,
        responsive: {
            0: {
                items: 2,
                margin: 10
            },
            601: {
                items: 3,
                margin: 30
            },
            1000: {
                items: 4,
                margin: 30,
            },
            1500: {
                items: 4,
                margin: 50,
            }
        }
    })
    $('.category-slider').owlCarousel({
        loop: true,
        margin: 30,
        nav: false,
        items: 2,
        dots: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: false,
        responsive: {
            0: {
                items: 1,
                margin: 10
            },
            601: {
                items: 1,
                margin: 30
            },
            1000: {
                items: 2,
                margin: 30,
            },
            1500: {
                items: 2,
                margin: 50,
            }
        }
    })
    $('.testimonial-slider').owlCarousel({
        loop: true,
        margin: 30,
        nav: false,
        items: 2,
        dots: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: false,
        responsive: {
            0: {
                items: 1,
                margin: 10
            },
            601: {
                items: 3,
                margin: 30
            },
            1000: {
                items: 3,
                margin: 30,
            },
            1500: {
                items: 3,
                margin: 50,
            }
        }
    })

    // mob-dropdown
    $(window).load(function() {

        $('.mob-dropdown').each(function() {
            var tab_val = $(this).find('.tab.active').text();
            // console.log(tab_val)
            $(this).attr('data-before', tab_val);
        })
        setTimeout(function() {
            $('a[data-src="#down_broch"]').fancybox().trigger('click');
        }, 5000)
        if ($(window).width() < 1200){
            $('.location-section .mob-dropdown').each(function() {
                $(this).attr('data-before', 'Select');
            })
        }


        var scroll_div = $('.floor-plans-section .tabcontent .content-wrp').innerHeight();
        var scrolled_div = $('.floor-plans-section .tabcontent .content-wrp > div')[0].scrollHeight;
        if (scrolled_div <= scroll_div) {
            $('.floor-plans-section .tabcontent .content-wrp > div').css('overflow-y', 'auto')
        } else {
            $('.floor-plans-section .tabcontent .content-wrp > div').css('overflow-y', 'scroll')
        }
    })
    // $('.overview-section .wrp-1 .container > .button').click(function(e) {
    //     if ($('.overview-section .wrp-1 .container .heading-wrapper').hasClass('active')) {
    //         $('.overview-section .wrp-1 .container .heading-wrapper').removeClass('active');
    //         $(this).children('span').text('Read More')
    //     } else {
    //         $('.overview-section .wrp-1 .container .heading-wrapper').addClass('active');
    //         $(this).children('span').text('Read Less')
    //     }
    // })

    // vedio-btn
    $('.vedio-section .play-btn').click(function(){
        $('.vedio-section').addClass('active');
		$('.video-iframe')[0].contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*');
		// $('.slider-3-1.owl-carousel .owl-item .slider-3-play-button').addClass('active');
    })

	$('.pause-button').click(function(){
		$(this).siblings('.video-iframe')[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
        $('.vedio-section').removeClass('active');
	});

    // Home Great Vibe section
    // $('.tabcontent').hide()
    $('.tab-wrp .tab').click(function(e) {
        e.preventDefault();
        var target = $(this).attr('tab-data');

        $(this).closest('.tab-wrp').siblings('.tabcontent').hide();
        $('#' + target).fadeIn();

        $(this).siblings().removeClass('active');
        $(this).addClass('active');
    })

    // click on tab scroll to that section
    $(".navbar-menu .navbar-start a, #anchorage-nav").click(function(t) {
        t.preventDefault();
        var e = $(this).attr("data-tab");
        $("html, body").animate({
            scrollTop: $('#'+e).offset().top - $("header").innerHeight() - 2
        }, 500), $(this).addClass("active").siblings().removeClass("active");
    })

    //HamBurger
    // Check for click events on the navbar burger icon
    $(".navbar-burger").click(function() {
        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        $(".navbar-burger").toggleClass("is-active");
        $(".navbar-menu").toggleClass("is-active");
    });

    $(".navbar-item").click(function() {
        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        $(".navbar-burger").removeClass("is-active");
        $(".navbar-menu").removeClass("is-active");
    });
    
    // Header Enquire Now Button
    $(".enquire-button-fixed, .eq-btn-mobile, .dwnBro, .header .enquire-button, .brochure-btn").click(function() {
        $(".sec-eq").addClass("show");
        $(".sec-eq").removeClass("static");
    });
    $(".closeIcon").click(function() {
        $(".sec-eq").removeClass("show");
        $(".navbar-burger").removeClass("is-active");
        $(".navbar-menu").removeClass("is-active");
        $(".sec-eq").addClass("static");
    });

    // Expand div on click
    $(".add-image").click(function() {
        $(this).toggleClass("is-active");
        $(this).siblings('.heading-wrapper').toggleClass("is-active");
    });

    // Accordion
      $('.tab-accordion .accordion-section-title').click(function(e) {
        var currentAttrValue = $(this).attr('data-acc');
        
        console.log('click');
        
        if ($(e.target).is('.active')) {
            $(this).removeClass('active');
            $(this).siblings().slideUp(300).removeClass('open');
        } else {
            $(this).parent().siblings().children('.accordion-section-title').removeClass('active');
            $(this).parent().siblings().children('.accordion-section-content').slideUp(300).removeClass('open');
  
            $(this).addClass('active');
            $('#' + currentAttrValue).slideDown(300).addClass('open');
        }
      });

    // Google map
    $('.map-btn').click(function(e){
        e.preventDefault();
        if($('.s-map').hasClass('active')){
            $('.s-map').removeClass('active');
            $('.g-map').addClass('active');
            $(this).text('View on Street map')
        }else{
            $('.s-map').addClass('active');
            $('.g-map').removeClass('active');
            $(this).text('View on Google map')
        }
    });

    $('[data-fancybox="gallery"], [data-fancybox="outdoor_amenities"], [data-fancybox="indoor_amenities"], [data-fancybox="construction-update"]').fancybox({
        backFocus : false
    });

    // animation
    function anim_r_t_l_wrp(){
        $('.anim_r_t_l_wrp').each(function(){
            var window_scrollTop = $(window).scrollTop();
            var window_60 = 80 /  100 * $(window).height();
            var scroll_item = $(this);
            var item_scrollTop = $(scroll_item).offset().top - window_60;
    
            if (window_scrollTop > item_scrollTop) {
                $(this).addClass('anim_r_t_l');
            } else {
                // $(this).removeClass('img-l-r-anim');
            }
        })
    };
    
    function anim_l_t_r_wrp(){
        $('.anim_l_t_r_wrp').each(function(){
            var window_scrollTop = $(window).scrollTop();
            var window_60 = 80 /  100 * $(window).height();
            var scroll_item = $(this);
            var item_scrollTop = $(scroll_item).offset().top - window_60;
    
            if (window_scrollTop > item_scrollTop) {
                $(this).addClass('anim_l_t_r');
            } else {
                // $(this).removeClass('img-l-r-anim');
            }
        })
    };
    
    function anim_t_t_b_wrp(){
        $('.anim_t_t_b_wrp').each(function(){
            var window_scrollTop = $(window).scrollTop();
            var window_60 = 80 /  100 * $(window).height();
            var scroll_item = $(this);
            var item_scrollTop = $(scroll_item).offset().top - window_60;
    
            if (window_scrollTop > item_scrollTop) {
                $(this).addClass('anim_t_t_b');
            } else {
                // $(this).removeClass('img-l-r-anim');
            }
        })
    };
    
    function anim_b_t_t_wrp(){
        $('.anim_b_t_t_wrp').each(function(){
            var window_scrollTop = $(window).scrollTop();
            var window_60 = 80 /  100 * $(window).height();
            var scroll_item = $(this);
            var item_scrollTop = $(scroll_item).offset().top - window_60;
    
            if (window_scrollTop > item_scrollTop) {
                $(this).addClass('anim_b_t_t');
            } else {
                // $(this).removeClass('img-l-r-anim');
            }
        })
    };
    
    function anim_t_t_t_wrp(){
        $('.anim_t_t_t_wrp').each(function(){
            var window_scrollTop = $(window).scrollTop();
            var window_60 = 80 /  100 * $(window).height();
            var scroll_item = $(this);
            var item_scrollTop = $(scroll_item).offset().top - window_60;
    
            if (window_scrollTop > item_scrollTop) {
                $(this).addClass('anim_t_t_t');
            } else {
                // $(this).removeClass('img-l-r-anim');
            }
        })
    };
    
    $(window).scroll(function() { 

        if($(window).scrollTop() > 50){
            $('.header').addClass('active')
        }else{
            $('.header').removeClass('active')
        }
    
        anim_r_t_l_wrp();
        anim_l_t_r_wrp();
        anim_t_t_b_wrp();
        anim_b_t_t_wrp();
        anim_t_t_t_wrp();
    }).scroll();
});