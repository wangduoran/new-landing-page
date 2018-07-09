nie.define("index", function() {
    var e = {
        init: function() {
            var e = this;
            e.bindFun(),
            e.videoplay(),
            e.yingxiaoFn()
        },
        bindFun: function() {
            new Swiper(".jsbox",{
                slidesPerView: 3,
                nextButton: ".jsnext",
                prevButton: ".jsprev",
                observer: !0,
                observeParents: !0
            }),
            new Swiper(".tscontainer",{
                nextButton: ".tsnext",
                prevButton: ".tsprev",
                observer: !0,
                observeParents: !0,
                pagination: ".swiper-pagination"
            });
            if ($(".banner .swiper-slide").length > 1) {
                new Swiper(".banner",{
                    loop: !0,
                    autoplay: 3e3,
                    pagination: ".swiper-pagination"
                })
            }
            $(".page3 li").click(function() {
                var e = $(this).data("id");
                e && ($(".zzc").addClass("on"),
                $(".huodong-tc").show(),
                $("#huodong-box .list").eq(e).addClass("on").siblings().removeClass("on"))
            }),
            $(".huodong-tc .close").click(function() {
                $(".huodong-tc").hide(),
                $(".zzc").removeClass("on")
            }),
            $(".jsbox .swiper-slide").click(function() {
                var e = $(this).data("id");
                e && ($(".zzc").addClass("on"),
                $(".js-tc").show(),
                $("#js-box .list").eq(e).addClass("on").siblings().removeClass("on"))
            }),
            $(".js-tc .close").click(function() {
                $(".js-tc").hide(),
                $(".zzc").removeClass("on")
            }),
            $(".map span").click(function() {
                var e = $(this).index();
                $(".zzc").addClass("on"),
                $(".cj-tc").show(),
                $("#cj-box img").eq(e).addClass("on").siblings().removeClass("on")
            }),
            $(".cj-tc .close").click(function() {
                $(".cj-tc").hide(),
                $(".zzc").removeClass("on")
            }),
            $(".qbopen").click(function() {
                $(".qb-tc").addClass("show"),
                $(".zzc").addClass("on"),
                $(".qbopen").hide()
            }),
            $(".qb-tc .close").click(function() {
                $(".qb-tc").removeClass("show"),
                $(".zzc").removeClass("on"),
                $(".qbopen").show()
            })
        },
        videoplay: function() {
            var e;
            $(".video-play").click(function() {
                var n = $(this).data("src")
                  , o = nie.require("nie.util.videoV2");
                e = o({
                    fat: "#video-box",
                    movieUrl: n,
                    HDmovieUrl: n,
                    SHDmovieUrl: n,
                    vtype: "",
                    autoPlay: !0
                }),
                $(".video-tc").show(),
                e.play(),
                $(".zzc").addClass("on")
            }),
            $(".video-tc .close").click(function() {
                $(".video-tc").hide(),
                $(".zzc").removeClass("on"),
                e.destroy()
            })
        },
        yingxiaoFn: function() {
            function e(e) {
                return Math.floor(Math.random() * e) + 1
            }
            $("body").append("<iframe src='" + $("#js_yingxiao").html() + "&cache=" + e(9999999) + "&pre=" + escape(document.referrer) + "' width='0' height='0' style='display: none'></iframe>")
        }
    };
    e.init()
});
