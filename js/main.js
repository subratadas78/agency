$( document ).ready(function() {
    
    
    $('.slider-active').owlCarousel({
        loop:true,
        nav:true,
        navText:['<i class="fas fa-angle-left"></i>','<i class="fas fa-angle-right"></i>'],
        autoplay:true,
        autoplayTimeout:5000,
        animateOut:'fadeOut',
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
    
    
    
        new WOW().init();
    
    
    
    
    $('.project-active').owlCarousel({
        loop:true,
        nav:true,
        navText:['<i class="fas fa-angle-left"></i>','<i class="fas fa-angle-right"></i>'],
        autoplay:true,
        autoplayTimeout:3000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:4
            }
        }
    })
    
    
    
    
    
    
    $('.client-active').owlCarousel({
        loop:true,
        autoplay:true,
        autoplayTimeout:3000,
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
    
    
    
    
    $('.brand-active').owlCarousel({
        loop:true,
        autoplay:true,
        autoplayTimeout:3000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:6
            }
        }
    })
    
    

        $('.video-popup').magnificPopup({
          type: 'iframe'
          // other options
        });
    
    
    
    
    
    
        $('.blog-slider-active').owlCarousel({
            loop:true,
            nav:true,
            navText:['<i class="fas fa-angle-left"></i>','<i class="fas fa-angle-right"></i>'],
            autoplay:true,
            autoplayTimeout:3000,
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
    
    
    
    
    
        $('.brand-slider-active').owlCarousel({
            loop:true,
            autoplay:true,
            margin:50,
            autoplayTimeout:3000,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                1000:{
                    items:6
                }
            }
        })   
    
    

    
    
    
});