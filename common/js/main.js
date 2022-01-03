$(document).ready(function(){
    var windowScrollTop = $(document).scrollTop();
    var winW = $(window).width();
    var winH = $(window).height();

    const body = $('body');
    const s1 = $('#sect1');
    const s2 = $('#sect2');
    const s3 = $('#sect3');
    const s4 = $('#sect4');
    const s5 = $('#sect5');
    const s6 = $('#sect6');
    const s7 = $('#sect7');
    var s1t = s1.offset().top;
    var s2t = s2.offset().top;
    var s3t = s3.offset().top;
    var s4t = s4.offset().top;
    var s5t = s5.offset().top;
    var s6t = s6.offset().top;
    var s7t = s7.offset().top;

    const s1c2belt = $('.s1__c2_belt');
    const s1c2beltWrap = $('.s1__c2_wrap');
    var s1c2beltWrapW = s1c2beltWrap.width();
    var s1c2beltL = s1c2belt.length;
    var s1c2beltW = s1c2belt.width();

    const s1c3belt = $('.s1__c3_belt');
    const s1c3beltWrap = $('.s1__c3_wrap');
    var s1c3beltWrapW = s1c3beltWrap.width();
    var s1c3beltL = s1c3belt.length;
    var s1c3beltW = s1c3belt.width();

    var scrollDelay = true;
    var swiper = new Swiper(".s4__swiper", {
        slidesPerView: 3.065,
        spaceBetween: 20,
    });
    function s4SwiperImgSizing(){
        var w = $('.s4__swiper_imgBox').width()
        $('.s4__swiper_imgBox').height(w)
    }
    setTimeout(()=>{
        s4SwiperImgSizing()
    })
    $(window).scroll(function(){
        if(scrollDelay){
            scrollDelay=false;
            scrollPadding=500;//스크롤여분값
            windowScrollTop = $(document).scrollTop();

            if(200 < windowScrollTop && windowScrollTop < (s3t - scrollPadding)){
                body.removeClass('white');
                body.addClass('black');
            }else if((s3t - scrollPadding) <= windowScrollTop && windowScrollTop < (s4t - scrollPadding)){
                body.removeClass('black');
                body.addClass('white');
            }else if((s4t - scrollPadding)<=windowScrollTop){
                body.removeClass('white');
                body.addClass('black');
            }

            setTimeout(()=>{
                scrollDelay=true;
            },10);
        };
    });
    $(window).resize(function(){
        sizeRefresh()
        s4SwiperImgSizing();
        s1c2Cloning();
        s1c3Cloning();
    });
    function sizeRefresh(){
        s1t = s1.offset().top;
        s2t = s2.offset().top;
        s3t = s3.offset().top;
        s4t = s4.offset().top;
        s5t = s5.offset().top;
        s6t = s6.offset().top;
        s7t = s7.offset().top;
        s1c2beltW = s1c2belt.width();
        s1c3beltW = s1c3belt.width();
        winW = $(window).width();
        winH = $(window).height();
    }
    function s1c2Cloning(){
        if(s1c2beltWrapW - s1c2beltW <= winW){
            s1c2belt.eq(0).clone().appendTo(s1c2beltWrap);
            s1c2belt.eq(0).clone().appendTo(s1c2beltWrap);
            s1c2beltWrap.width(s1c2beltWrapW + s1c2beltW);
        }
        s1c2beltL = $('.s1__c2_belt').length;
        s1c2beltWrapW = (s1c2beltW + 2) * (s1c2beltL + 1);
    }
    function s1c3Cloning(){
        if(s1c3beltWrapW - s1c3beltW <= winW){
            s1c3belt.eq(0).clone().appendTo(s1c3beltWrap);
            s1c3belt.eq(0).clone().appendTo(s1c3beltWrap);
            s1c3beltWrap.width(s1c3beltWrapW + s1c3beltW);
        }
        s1c3beltL = $('.s1__c3_belt').length;
        s1c3beltWrapW = (s1c3beltW + 2) * (s1c3beltL + 1);
    }

    s1c2beltMoveSpeed = 8000;
    s1c3beltMoveSpeed = 45000;
    function beltMoveLeft(el,beltW,speed){
            $(el).animate({
                left:`${(0 - beltW)}px`
            },speed,'linear',function(){
                $(el).css({"left":"0px"})
            })
        
    }
    function beltMoveRight(el,beltW,speed){
        $(el).css({"left":`${0 - beltW}px`})
        $(el).animate({
            left:"0px"
        },speed,'linear',function(){
            $(el).css({"left":`${0 - beltW}px`})
        })
    }
    function s1c2beltMove(){
        beltMoveLeft(s1c2beltWrap,s1c2beltW,s1c2beltMoveSpeed)
    }
    function s1c3beltMove(){
        beltMoveRight(s1c3beltWrap,s1c3beltW,s1c3beltMoveSpeed)
    }
    s1c2beltMove()
    s1c3beltMove()
    setInterval(s1c2beltMove,s1c2beltMoveSpeed);
    setInterval(s1c3beltMove,s1c3beltMoveSpeed);

    do{s1c2Cloning()}
    while(s1c2beltWrapW - s1c2beltW <= winW)
    do{s1c3Cloning()}
    while(s1c3beltWrapW - s1c3beltW <= winW)

    const animationTime = 200;
    $('.s6__c1_col').on({
        mouseenter:function(){
            var parentBox = $(this).find('.s6__c1_padding')
            var stretchBox = $(this).find('.s6__c1_imgBox')
            var stretchW = stretchBox.width()
            parentBox.stop().animate({
                "width":stretchW
            },animationTime,"linear")
            $(this).stop().animate({
                "marginLeft":""+stretchW/2+"px"
            },animationTime,"linear")
            console.log(stretchW)
        },
        mouseleave:function(){
            var parentBox = $(this).find('.s6__c1_padding')
            var stretchBox = $(this).find('.s6__c1_imgBox')
            var stretchW = stretchBox.width()

            parentBox.stop().animate({
                "width":"0"
            },animationTime,"linear")
            $(this).stop().animate({
                "marginLeft":"-"+stretchW/2+"px"
            },animationTime,"linear")
        },
    })
})
