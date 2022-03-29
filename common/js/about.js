$(window).ready(function(){
    var winW = $(window).width();
    var winH = $(window).height();
    var windowScrollTop = $(document).scrollTop();
    var windowScrollBot = windowScrollTop + winH;
    var s3t = $("#sect3").offset().top;
    var s4t = $("#sect4").offset().top;
    var s5t = $("#sect5").offset().top;
    var s6t = $("#sect6").offset().top;
    var s6ct = $(".s6__container").offset().top;
    var s6h = $("#sect6").innerHeight();
    const s7 = $("#sect7")
    var s7t = $("#sect7").offset().top;
    var s7h = $("#sect7").innerHeight();
    var footerT = $("#footer").offset().top;
    var scrollPadding = 300;//스크롤여분값
    const s6List = $(".s6__list_horizontal")
    const s7bgScale = $("#s7bgScale")
    var s7bgScaleH = $("#s7bgScale").height()
    const s7sticky = $("#s7sticky")
    const s2c4belt = $(".s2__c4_belt p")
    setTimeout(()=>{$('#sect1').addClass('on-view')},100)

    var swiper = new Swiper(".s6swiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        // spaceBetween: 8,
        mousewheel:true,
    });
// #region sect4 text-change==================================================
function scroll(){
    //#region s3 text change
    if(s3t < windowScrollBot && windowScrollBot < s4t){
            var start = windowScrollTop - s3t + winH;
            var end = $("#sect3").innerHeight();
            var pers = Math.floor(start / end * 1000);
    
            if(100 < pers && pers < 330){
                $(".s3__text_list li").removeClass('on-view')
                $(".s3__text_list li").eq(0).addClass('on-view')
            }
            else if(330 <= pers && pers < 660){
                $(".s3__text_list li").removeClass('on-view')
                $(".s3__text_list li").eq(1).addClass('on-view')
            }
            else if(660 <= pers && pers < 990){
                $(".s3__text_list li").removeClass('on-view')
                $(".s3__text_list li").eq(2).addClass('on-view')
            }
            else{
                $(".s3__text_list li").removeClass('on-view')
            }
    
            if(100< pers && pers <950){
                $(".s3__bg").addClass('on-view')
            }else{
                $(".s3__bg").removeClass('on-view')
            }
    }
    if(windowScrollTop<=s6t + winH){
        $('.s6__text').removeClass('init')
        TweenLite.to(s6List,1,{
            css:{x:0+"%"}
        });
    }else if(s6t + winH < windowScrollTop && windowScrollTop < s6t + s6h){
        var start = windowScrollBot - s6t - winH;
        var end = $("#sect6").innerHeight() - winH;
        var pers = Math.floor(start / end * 1100);
            $('.s6__text').addClass('init')
        TweenLite.to(s6List,0.7,{
            css:{x:0 - pers/10+"%"}
        });
        $(".s6__listitem").each(function(){
            var rotate = $(this).find('.listitem_bg');
            TweenLite.to(rotate,0.9,{
                css:{rotation :0 - pers}
            })
        })
    }else if(s6t + s6h - winH < windowScrollTop){
        TweenLite.to(s6List,1,{
            css:{x:"-110%"}
        });
    }
    //#endregion s6 list horizontal-scroll
    //#region s7 bg scale
    //#endregion s7 bg scale
    //#region s7 bg position
    var x = (winH)/2
    var y = s7t + s7h - (winH+s7bgScaleH)/2
    if(windowScrollTop<=s7t - x){
        s7sticky.removeClass('fixed')
    }else if(s7t - x < windowScrollTop && windowScrollTop < y){
        s7sticky.removeClass('end')
        s7sticky.addClass('fixed')
    }else if(y <= windowScrollTop){
        s7sticky.removeClass('fixed')
        s7sticky.addClass('end')
    }
    //#endregion s7 bg position
    //#region colorStyle
    if(0< windowScrollBot && windowScrollBot < s4t - 300){//color style
        $("#colorStyle").removeClass("white")
        $("#colorStyle").addClass("black")
    }else if(s4t - 300 <= windowScrollBot && windowScrollBot < s7t+winH-x*1.3){
        $("#colorStyle").removeClass("black")
        $("#colorStyle").addClass("white")
    }else if(s7t+winH-x*1.3 <= windowScrollBot){
        $("#colorStyle").removeClass("white")
        $("#colorStyle").addClass("black")
    }
    //#endregion colorStyle
}
ScrollTrigger.matchMedia({
    "(max-width:768px)":function(){
        let tl = gsap.timeline({
            scrollTrigger:{
                trigger:s7,
                start:"20% 50%",
                end:"80% 50%",
                scrub:-1,
            }
        });
        tl.to(s7bgScale,{
            width:"60vw"
        })
    },
    "(min-width:769px)":function(){
        let tl = gsap.timeline({
            scrollTrigger:{
                trigger:s7,
                start:"top 50%",
                end:"80% 50%",
                scrub:-1,
            }
        });
        tl.to(s7bgScale,{
            width:"25vw"
        })
    }
})
// #endregion sect4 text-change==================================================
$(window).scroll(function(){
    winH = $(window).height();
    windowScrollTop = $(document).scrollTop();
    windowScrollBot = windowScrollTop + winH;
    s7bgScaleH = $("#s7bgScale").height()
    scroll();
})
$(window).resize(function(){
    s2c4beltW = s2c4belt.width();
    winW = $(window).width();
    winH = $(window).height();
    windowScrollTop = $(document).scrollTop();
    windowScrollBot = windowScrollTop + winH;
    s3t = $("#sect3").offset().top;
    s4t = $("#sect4").offset().top;
    s5t = $("#sect5").offset().top;
    s6t = $("#sect6").offset().top;
    s6ct = $(".s6__container").offset().top;
    s6h = $("#sect6").innerHeight();
    s7t = $("#sect7").offset().top;
    s7h = $("#sect7").innerHeight();
    s7bgScaleH = $("#s7bgScale").height()
    footerT = $("#footer").offset().top;
})
setTimeout(()=>{
    ScrollTrigger.refresh();
    s2c4beltW = s2c4belt.width();
    winW = $(window).width();
    winH = $(window).height();
    windowScrollTop = $(document).scrollTop();
    windowScrollBot = windowScrollTop + winH;
    s3t = $("#sect3").offset().top;
    s4t = $("#sect4").offset().top;
    s5t = $("#sect5").offset().top;
    s6t = $("#sect6").offset().top;
    s6ct = $(".s6__container").offset().top;
    s6h = $("#sect6").innerHeight();
    s7t = $("#sect7").offset().top;
    footerT = $("#footer").offset().top;
    s7h = $("#sect7").innerHeight();
    s7bgScaleH = $("#s7bgScale").height()
},100)
})