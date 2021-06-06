$(document).ready(function(){

    let $btns =$('.gallery-area .button-group button');
    $btns.click(function(e){
        $('.gallery-area .button-group button').removeClass('active')
        e.target.classList.add('active');

        let selector=$(e.target).attr('data-filter');
        $('.gallery-area .grid').isotope({
            filter : selector
        });
        return false;

    })

    $('.gallery-area .button-group #btn1').trigger('click');

    $('.gallery-area .grid .test-popup-link').magnificPopup({
        type: 'image',
        gallery:{enabled:true}

      });


    $('.site-main .about-area .owl-carousel').owlCarousel({
        loop:true,
        autoplay:true,
        dots:true,
        responsive:{
            0:{
                items:1
            },
            544:{
                items:3
            }

        }
    })

    // sticy navigation menu

    let nav_offset_top = $('.header_area').height() + 50;

    function navbarFixed() {
        if ($('.header_area').length) {
            $(window).scroll(function () {
                let scroll = $(window).scrollTop();
                if (scroll >= nav_offset_top) {
                    $('.header_area .main-menu').addClass('navbar_fixed');
                } else {
                    $('.header_area .main-menu').removeClass('navbar_fixed');
                }
            })
        }
    }

    navbarFixed();

    


});

function reset(){
    document.getElementById("myForm").reset();
}