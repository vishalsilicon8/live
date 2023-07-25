$(document).ready(function () {
    $('.menuLogo_slick').slick({
        infinite: true,
        dots: true,
        arrows: false,
        autoplay: true,
        slidesToShow: 2,
        slidesToScroll: 1,
    });

    var menuItem = $('.has_sub_menu');
    menuItem.mouseenter(function () {
        // $(this).find('.sub_menu').slideDown('slow');
        $(this).attr("data-menuHover", 'true');
    });
    menuItem.mouseleave(function () {
        // $(this).find('.sub_menu').slideUp('slow');
        $(this).attr("data-menuHover", 'false');
    });



    $('#team_contact').click(function () {
        $('.team_details_wrap .contact_box').fadeToggle();
        $(this).toggleClass('open');
    });

    function getHeight() {
        var header = $('.header').outerHeight();
        $('.header .header_bottom .menu_list .menu_item').css('--header-height', 'calc(100dvh - 20px - ' + header + 'px)');
    };
    getHeight();
    $(this).on('scroll', function () {
        getHeight();
    })

    // navbar_fixed
    function headerHeight() {
        var headerHeight = $(".header").outerHeight()
        $("body").css('--header_bottom', headerHeight + 'px')
    };
    $(document).ready(function () {
        headerHeight();
    });
    $(window).scroll(function () {
        headerHeight();
    });
    $(window).resize(function () {
        headerHeight();
    });

    // toggle_navbar
    $("#toggle_navbar").click(function () {
        $(this).toggleClass("open");
        $("body").toggleClass("overflow_hidden");
        $(".header .header_nav .sm_screen").fadeToggle(400);
        $(".sm_screen .menu_list .has_sub_menu .sub_menu_1, .sm_screen .menu_list .has_sub_menu .sub_menu_1 .has_sub_menu .sub_menu_2").slideUp()
        $(".sm_screen .menu_list .has_sub_menu, .sm_screen .menu_list .has_sub_menu .sub_menu_1 .has_sub_menu").removeClass("--open_1 --open_2")
    });

    // sm_screen-Navbar
    $(".sm_screen .menu_list .has_sub_menu > .arrow_icon").click(function () {
        $(this).parent().find(".sub_menu_1").slideToggle().parent().siblings().find(".sub_menu_1").slideUp();
        $(this).parent().toggleClass("--open_1").siblings().removeClass("--open_1");
    });
    $(".sm_screen .menu_list .has_sub_menu .sub_menu_1 .has_sub_menu > .arrow_icon").click(function () {
        $(this).parent().find(".sub_menu_2").slideToggle().parent().siblings().find(".sub_menu_2").slideUp();
        $(this).parent().toggleClass("--open_2").siblings().removeClass("--open_2");
    });

});


// sliders
const sliders = document.querySelectorAll('.range_section .range_wrap');

const settings = {
    fill: '#f26925',
    background: '#e4e2e2'
}

Array.prototype.forEach.call(sliders, (slider) => {
    slider.querySelector('input').addEventListener('input', (event) => {
        // slider.querySelector('span').innerHTML = event.target.value;
        applyFill(event.target);

        $('.team_details_wrap .contact_box').fadeOut();
        $('#team_contact').removeClass('open');

    });
    applyFill(slider.querySelector('input'));

});


function applyFill(slider) {
    const percentage = 100 * (slider.value - slider.min) / (slider.max - slider.min);
    const bg = `linear-gradient(90deg, ${settings.fill} ${percentage}%, ${settings.background} ${percentage + 0.1}%)`;
    slider.style.background = bg;
}

function rangslider(value) {
    var r = document.getElementById('rd1').value;
    document.getElementById('rd1').setAttribute('title', value);

    var GD = $('.team_content .item_wrap.GD .number');
    var WD = $('.team_content .item_wrap.WD .number');
    var JD = $('.team_content .item_wrap.JD .number');
    var SD = $('.team_content .item_wrap.SD .number');
    var TL = $('.team_content .item_wrap.TL .number');
    var QA = $('.team_content .item_wrap.QA .number');
    var BA = $('.team_content .item_wrap.BA .number');
    var PM = $('.team_content .item_wrap.PM .number');


    if (r >= 7) {
        GD.text('01');
        GD.parent().addClass('active');
    }
    else {
        GD.text('0');
        GD.parent().removeClass('active');
    }


    if (r >= 3) {
        WD.text('01');
        WD.parent().addClass('active');
    }
    else {
        WD.text('0');
        WD.parent().removeClass('active');
    }


    if (r >= 1) {
        JD.text('01');
        JD.parent().addClass('active');
        if (r >= 9) {
            JD.text('02');
            JD.parent().addClass('active');
        }
    }
    else {
        JD.text('0');
        JD.parent().removeClass('active');
    }


    if (r >= 2) {
        SD.text('01');
        SD.parent().addClass('active');
        if (r >= 10) {
            SD.text('02');
            SD.parent().addClass('active');
        }
    }
    else {
        SD.text('0');
        SD.parent().removeClass('active');
    }


    if (r >= 4) {
        TL.text('01');
        TL.parent().addClass('active');
        if (r >= 6) {
            TL.text('0');
            TL.parent().removeClass('active');
        }
        if (r >= 8) {
            TL.text('01');
            TL.parent().addClass('active');
        }
    }
    else {
        TL.text('0');
        TL.parent().removeClass('active');
    }


    if (r >= 6) {
        QA.text('01');
        QA.parent().addClass('active');
    }
    else {
        QA.text('0');
        QA.parent().removeClass('active');
    }


    if (r >= 5) {
        BA.text('01');
        BA.parent().addClass('active');
    }
    else {
        BA.text('0');
        BA.parent().removeClass('active');
    }


    if (r >= 6) {
        PM.text('01');
        PM.parent().addClass('active');
    }
    else {
        PM.text('0');
        PM.parent().removeClass('active');
    }

    // if (r >= 10) {
    //     $('.team_details_wrap .contact_box').fadeIn();
    // }
    // else {
    //     $('.team_details_wrap .contact_box').fadeOut();
    // }
}




