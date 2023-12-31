$(document).ready(function () {
    $(".slick_banner").slick({
        infinite: !0,
        arrows: !1,
        dots: !0,
        autoplay: !1,
        autoplaySpeed: 5e3,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: !0,
        speed: 800,
        touchThreshold: 100,
        responsive: [{ breakpoint: 768, settings: { autoplay: !1, arrows: !1, adaptiveHeight: !1 } }],
    });


    $(".services_slick").slick({
        infinite: !1,
        arrows: !0,
        dots: !1,
        prevArrow: "#services_slick_left",
        nextArrow: "#services_slick_right",
        autoplay: !1,
        speed: 600,
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [
            { breakpoint: 1560, settings: { slidesToShow: 5 } },
            { breakpoint: 1400, settings: { slidesToShow: 4 } },
            { breakpoint: 1200, settings: { slidesToShow: 3 } },
            { breakpoint: 991, settings: { slidesToShow: 2 } },
            { breakpoint: 768, settings: { slidesToShow: 1 } },
        ],
    });

    $(".portfolio_slick").slick({
        infinite: !1,
        arrows: !0,
        dots: !1,
        prevArrow: "#portfolio_slick_left",
        nextArrow: "#portfolio_slick_right",
        autoplay: !1,
        speed: 800,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            { breakpoint: 1400, settings: { slidesToShow: 3 } },
            { breakpoint: 1300, settings: { slidesToShow: 2 } },
            { breakpoint: 991, settings: { infinite: !0, centerMode: !0, centerPadding: "10%", slidesToShow: 2 } },
            { breakpoint: 767, settings: { infinite: !0, centerMode: !0, centerPadding: "20%", slidesToShow: 1 } },
            { breakpoint: 520, settings: { infinite: !0, centerMode: !0, centerPadding: "10%", slidesToShow: 1 } },
        ],
    });
    $(".clients_slick").slick({
        infinite: !0,
        arrows: !1,
        dots: !1,
        autoplay: !0,
        autoplaySpeed: 3e3,
        speed: 1200,
        slidesToShow: 5,
        slidesToScroll: 1,
        swipeToSlide: !0,
        responsive: [
            { breakpoint: 1300, settings: { slidesToShow: 4 } },
            { breakpoint: 991, settings: { slidesToShow: 3 } },
            { breakpoint: 767, settings: { slidesToShow: 2 } },
        ],
    });
    $(".customersSay_slick").slick({
        infinite: !0,
        arrows: !0,
        dots: !1,
        prevArrow: ".customersSay_left",
        nextArrow: ".customersSay_right",
        autoplay: !0,
        autoplaySpeed: 4e3,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: !0,
        speed: 1200,
        cssEase: "cubic-bezier(0.7, 0, 0.3, 1)",
    });
    $(".servicesOffe_slick").slick({
        infinite: !1,
        arrows: !1,
        dots: !1,
        autoplay: !1,
        speed: 800,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            { breakpoint: 1560, settings: { slidesToShow: 4 } },
            { breakpoint: 1200, settings: { slidesToShow: 3 } },
            { breakpoint: 991, settings: { slidesToShow: 2 } },
            { breakpoint: 768, settings: { slidesToShow: 1 } },
        ],
    });
    $(".sucStory_slick").slick({ infinite: !0, arrows: !1, dots: !0, autoplay: !0, autoplaySpeed: 5e3, slidesToShow: 1, slidesToScroll: 1, fade: !0, speed: 1200, touchThreshold: 100 });
    $(".portfolio2_slick").slick({
        infinite: !1,
        arrows: !1,
        dots: !1,
        autoplay: !1,
        speed: 800,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            { breakpoint: 1560, settings: { slidesToShow: 3 } },
            { breakpoint: 1200, settings: { slidesToShow: 2 } },
            { breakpoint: 991, settings: { slidesToShow: 2 } },
            { breakpoint: 768, settings: { slidesToShow: 1 } },
        ],
    });
    $(".empFeedbackPro_slick").slick({
        infinite: !0,
        arrows: !1,
        dots: !1,
        autoplay: !1,
        speed: 800,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: !0,
        centerPadding: "15%",
        responsive: [
            { breakpoint: 1560, settings: { centerPadding: "10%" } },
            { breakpoint: 1200, settings: { slidesToShow: 2 } },
            { breakpoint: 991, settings: { slidesToShow: 2, centerPadding: "6%" } },
            { breakpoint: 768, settings: { slidesToShow: 1 } },
            { breakpoint: 520, settings: { slidesToShow: 1, centerPadding: "8%" } },
            { breakpoint: 380, settings: { slidesToShow: 1, centerPadding: "5%" } },
        ],
    });
    $(".feedback_slick").slick({ infinite: !0, arrows: !1, dots: !0, autoplay: !0, slidesToShow: 1, slidesToScroll: 1, fade: !0, speed: 1200, daptiveHeight: !1 });
    $(".clientsLogo_slick").slick({ infinite: !0, arrows: !1, dots: !0, autoplay: !0, autoplaySpeed: 4e3, slidesToShow: 1, slidesToScroll: 1, speed: 1200, daptiveHeight: !1 });
    $(".jobRoles_slick").slick({
        infinite: !1,
        arrows: !0,
        dots: !1,
        prevArrow: "#jobRoles_slick_left",
        nextArrow: "#jobRoles_slick_right",
        autoplay: !1,
        speed: 800,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            { breakpoint: 1560, settings: { slidesToShow: 4 } },
            { breakpoint: 1400, settings: { slidesToShow: 4 } },
            { breakpoint: 1200, settings: { slidesToShow: 3 } },
            { breakpoint: 991, settings: { slidesToShow: 2 } },
            { breakpoint: 768, settings: { slidesToShow: 1, focusOnSelect: !0 } },
        ],
    });
    $(".whatsIncluded_Slick").slick({
        infinite: !0,
        arrows: !1,
        dots: !0,
        autoplay: !1,
        speed: 800,
        slidesToShow: 5,
        slidesToScroll: 5,
        responsive: [
            { breakpoint: 1560, settings: { slidesToShow: 4, slidesToScroll: 4 } },
            { breakpoint: 1200, settings: { slidesToShow: 3, slidesToScroll: 3 } },
            { breakpoint: 991, settings: { slidesToShow: 2, slidesToScroll: 2 } },
            { breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 2 } },
            { breakpoint: 539, settings: { slidesToShow: 1, slidesToScroll: 1 } },
        ],
    });
    $(".similarProf_slick").slick({
        infinite: !1,
        arrows: !0,
        dots: !1,
        prevArrow: "#similarProf_slick_left",
        nextArrow: "#similarProf_slick_right",
        autoplay: !1,
        speed: 800,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            { breakpoint: 1560, settings: { slidesToShow: 4 } },
            { breakpoint: 1200, settings: { slidesToShow: 3 } },
            { breakpoint: 991, settings: { slidesToShow: 2 } },
            { breakpoint: 768, settings: { slidesToShow: 2 } },
            { breakpoint: 539, settings: { slidesToShow: 1 } },
        ],
    });
    $(".cultureSlider_slick").slick({
        infinite: !0,
        arrows: !1,
        dots: !1,
        autoplay: !0,
        autoplaySpeed: 4e3,
        speed: 800,
        slidesToShow: 5,
        slidesToScroll: 1,
        centerMode: !0,
        centerPadding: "3%",
        focusOnSelect: !0,
        responsive: [
            { breakpoint: 1560, settings: { slidesToShow: 5 } },
            { breakpoint: 1200, settings: { slidesToShow: 3, centerPadding: "10%" } },
            { breakpoint: 991, settings: { slidesToShow: 3, centerPadding: "5%" } },
            { breakpoint: 768, settings: { slidesToShow: 1, centerPadding: "30%" } },
            { breakpoint: 539, settings: { slidesToShow: 1, centerPadding: "20%" } },
        ],
    });
    $(".years_slick").slick({
        infinite: !1,
        arrows: !0,
        dots: !1,
        prevArrow: "#years_slick_left",
        nextArrow: "#years_slick_right",
        autoplay: !1,
        autoplaySpeed: 4e3,
        speed: 800,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            { breakpoint: 1560, settings: { slidesToShow: 5 } },
            { breakpoint: 991, settings: { slidesToShow: 4 } },
            { breakpoint: 768, settings: { slidesToShow: 3 } },
            { breakpoint: 539, settings: { slidesToShow: 2 } },
        ],
    });
    $(".v2_feedback_slick").slick({
        infinite: !0,
        arrows: !0,
        prevArrow: "#v2_feedback_slider_left",
        nextArrow: "#v2_feedback_slider_right",
        dots: !1,
        autoplay: !0,
        speed: 800,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            { breakpoint: 991, settings: { slidesToShow: 2 } },
            { breakpoint: 768, settings: { slidesToShow: 1 } },
            { breakpoint: 380, settings: { slidesToShow: 1 } },
        ],
    });
    $(".v2_portfolio2_slick").slick({
        infinite: !1,
        arrows: !0,
        prevArrow: "#v2_portfolio2_slick_left",
        nextArrow: "#v2_portfolio2_slick_right",
        dots: !1,
        autoplay: !1,
        speed: 800,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            { breakpoint: 1200, settings: { slidesToShow: 2 } },
            { breakpoint: 991, settings: { slidesToShow: 2 } },
            { breakpoint: 767, settings: { slidesToShow: 2 } },
            { breakpoint: 530, settings: { slidesToShow: 1 } },
        ],
    });
});
$(document).on("click", ".tabs_list .tab_link", function () {
    var e = $(this),
        s = $(this).attr("id");
    e.hasClass("active") ||
        (e.closest(".tabs_wrapper").find(".tabs_list .tab_link, .tabs_container .tab_content").removeClass("active"), $('.tabs_container .tab_content[data-tab="' + s + '"], .tabs_list .tab_link[id="' + s + '"]').addClass("active"));
}),
    $(document).ready(function () {
        $("#technologyTab").easyResponsiveTabs({
            type: "default",
            width: "auto",
            fit: !0,
            removeHashfrmUrl: !0,
            closed: "accordion",
            activate: function (e) {
                var s = $(this),
                    o = $("#tabInfo");
                $("span", o).text(s.text()), o.show();
            },
        }),
            $(".easyTabs_wrap").easyResponsiveTabs({
                type: "default",
                width: "auto",
                fit: !0,
                removeHashfrmUrl: !0,
                closed: "accordion",
                activate: function (e) {
                    var s = $(this),
                        o = $("#tabInfo");
                    $("span", o).text(s.text()), o.show();
                },
            });
    }),
    $(document).ready(function () {
        $("#FAQaccordian")[0] && $("#FAQaccordian").accordion();
    }),
    $(".video_popup").magnificPopup({
        type: "iframe",
        mainClass: "mfp-fade",
        removalDelay: 160,
        preloader: !1,
        fixedContentPos: !1,
        gallery: { enabled: !1 },
        callbacks: {
            open: function () {
                $("body").css("overflow", "hidden");
            },
            close: function () {
                $("body").css("overflow", "");
            },
        },
    });
$(".img_popup").magnificPopup({ type: "image", mainClass: "mfp-fade", removalDelay: 160, preloader: !1, fixedContentPos: !1, gallery: { enabled: !0 } }),
    $(function () {
        $(".btn_accOpen").click(function (e) {
            var s = $(this).closest(".col_accordion").find(".accordion-content");
            $(this).closest(".accordion").find(".accordion-content").not(s).slideUp(),
                $(this).hasClass("active") ? $(this).removeClass("active") : ($(this).closest(".accordion").find(".btn_accOpen.active").removeClass("active"), $(this).addClass("active")),
                s.stop(!1, !0).slideToggle(),
                e.preventDefault();
        });
    });
$(document).ready(function () {
    $("#jobs-accordian")[0] && $("#jobs-accordian").accordion();
});
$(function () {
    var n = $(".timeline ul li"),
        l = ($(".timeline ul").height(), $(".default-line")),
        r = $(".draw-line");
    r.length &&
        $(window).on("scroll", function () {
            r.height();
            var e = l.height(),
                s = $(window).scrollTop(),
                o = $(window).height() / 2,
                i = $(".timeline ul").offset().top;
            i - o <= s && ((line = s - i + o), line <= e && r.css({ height: line + 20 + "px" }));
            var t = r.offset().top + r.outerHeight(!0);
            n.each(function (e) {
                var s = $(this).offset();
                t > s.top ? $(this).addClass("in-view") : $(this).removeClass("in-view");
            });
        });
});
$(window).scroll(function () {
    var e = $(".header, .body_wrap");
    100 <= $(window).scrollTop() ? e.addClass("fixed") : e.removeClass("fixed");
});
$(window).on("load", function () {
    $(".loader").fadeOut(400);
});
jQuery(window).scroll(function () {
    500 <= jQuery(this).scrollTop()
        ? (jQuery("#return-to-top").fadeIn(600),
            jQuery("#return-to-top").click(function () {
                jQuery(window).scrollTop(0);
            }))
        : jQuery("#return-to-top").fadeOut(600);
}),
    $("form").on("change", ".file-upload-field", function () {
        $(this)
            .parent(".file-upload-wrapper")
            .attr(
                "data-text",
                $(this)
                    .val()
                    .replace(/.*(\/|\\)/, "")
            );
    }),
    $(".cnt_tabs_wrapper .tab").click(function () {
        var e = "." + $(this).data("tabs");
        $(this).addClass("active").siblings().removeClass("active"), $(".form_wrap .form_container").find(e).show().siblings().fadeOut();
    }),
    $(document).ready(function () {
        $(".filters-button-group .button, .grid")[0] &&
            ($(".filters-button-group .button").click(function () {
                $(".filters-button-group .button").removeClass("active"), $(this).addClass("active");
                var e = $(this).attr("data-filter");
                $grid.isotope({ filter: e });
            }),
                ($grid = $(".grid").isotope({ percentPosition: !1 })));
    }),
    $(document).ready(function () {
        $("#add_new").click(function () {
            return $("#hourlyCalc_table .form_row:last").clone(!0).insertAfter("#hourlyCalc_table .form_row:last").addClass("newForm_row").removeClass("title_show"), $("#hourlyCalc_table .form_row:last").find("input").val(""), !1;
        }),
            $(".remove_row").click(function () {
                return $("#hourlyCalc_table .newForm_row:last").remove(), !1;
            });
    }),
    $(document).ready(function () {
        $(".tab_link__none").off("click"),
            $(window).width() < 991 &&
            ($(".tab_link__others .drop_tab").click(function (e) {
                $(".tab_link__others .drop_wrap").addClass("open"), $("body").css({ "overflow-y": "hidden", "pointer-events": "none" });
            }),
                $(".drop_wrap .close_icon, .drop_wrap ul .tab_link").click(function () {
                    $(".tab_link__others .drop_wrap").removeClass("open"), $("body").css({ "overflow-y": "auto", "pointer-events": "all" });
                }));
    }),
    $(document).ready(function () {
        AOS.init({ offset: 100, delay: 0, duration: 1400, easing: "ease", once: !0, mirror: !1, anchorPlacement: "top-bottom" }), document.querySelectorAll("img").forEach((e) => e.addEventListener("load", () => AOS.refresh()));
    });
    // jQuery(document).ready(function () {
    //     $('.enumenu_ul').responsiveMenu({
    //         'menuIcon_text': 'menu',
    //         onMenuopen: function () { }
    //     })

    // })