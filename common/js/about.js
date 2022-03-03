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
    var s7t = $("#sect7").offset().top;
    var s7h = $("#sect7").innerHeight();
    var footerT = $("#footer").offset().top;
    var scrollPadding = 300;//스크롤여분값
    const s6List = $(".s6__list")
    const s7bgScale = $("#s7bgScale")
    $('#sect1').addClass('on-view')
// #region sect2 belt==================================================
    const s2c4belt = $('.s2__c4_belt');
    const s2c4beltWrap = $('.s2__c4_wrap');
    var s2c4beltWrapW = s2c4beltWrap.width();
    var s2c4beltL = s2c4belt.length;
    var s2c4beltW = s2c4belt.width();

    function s2c4Cloning(){
        if(s2c4beltWrapW - s2c4beltW <= winW){
            s2c4belt.eq(0).clone().appendTo(s2c4beltWrap);
            s2c4belt.eq(0).clone().appendTo(s2c4beltWrap);
            s2c4beltWrap.width(s2c4beltWrapW + s2c4beltW);
        }
        s2c4beltL = $('.s2__c4_belt').length;
        s2c4beltWrapW = (s2c4beltW + 2) * (s2c4beltL + 1);
    }
    var s2c4beltMoveSpeed = 45000;
    function s2c4beltMove(){
        beltMoveRight(s2c4beltWrap,s2c4beltW,s2c4beltMoveSpeed)
    }
    function beltMoveRight(el,beltW,speed){
        $(el).css({"left":`${0 - beltW}px`})
        $(el).animate({
            left:"0px"
        },speed,'linear',function(){
            $(el).css({"left":`${0 - beltW}px`})
        })
    }
    s2c4beltMove()
    setInterval(s2c4beltMove,s2c4beltMoveSpeed);
    do{s2c4Cloning()}
    while(s2c4beltWrapW - s2c4beltW <= winW)
// #endregion sect2 belt==================================================
// #region sect4 text-change==================================================
function scroll(){
    //#region s3 text change
    if(s3t < windowScrollBot && windowScrollBot < s4t){
            var start = windowScrollTop - s3t + winH;
            var end = $("#sect3").innerHeight();
            var pers = Math.floor(start / end * 1000);
    
            if(100 < pers && pers < 300){
                $(".s3__text_list li").removeClass('on-view')
                $(".s3__text_list li").eq(0).addClass('on-view')
            }
            else if(300 <= pers && pers < 500){
                $(".s3__text_list li").removeClass('on-view')
                $(".s3__text_list li").eq(1).addClass('on-view')
            }
            else if(500 <= pers && pers < 700){
                $(".s3__text_list li").removeClass('on-view')
                $(".s3__text_list li").eq(2).addClass('on-view')
            }
            else if(700 <= pers && pers < 900){
                $(".s3__text_list li").removeClass('on-view')
                $(".s3__text_list li").eq(3).addClass('on-view')
            }
            else{
                $(".s3__text_list li").removeClass('on-view')
            }
    
            if(100< pers && pers <950){
                $(".s3__bg").addClass('on-view')
                $(".s3__logo").addClass('on-view')
            }else{
                $(".s3__bg").removeClass('on-view')
                $(".s3__logo").removeClass('on-view')
            }
    }
    //#endregion s3 text change
    //#region s6 list horizontal-scroll
    if(windowScrollTop<=s6t){
        $('.s6__text').removeClass('init')
        TweenLite.to(s6List,0.9,{
            css:{x:0+"%"}
        });
    }else if(s6t < windowScrollTop && windowScrollTop < s6t + s6h - winH){
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
    if(windowScrollTop < s7t){
        console.log('under')
        TweenLite.to(s7bgScale,0.5,{
            css:{scale:1}
        })
    }else if(s7t <= windowScrollTop && windowScrollTop < s7t + s7h - winH){
        console.log('on')
        var start = windowScrollBot - s7t - winH;
        var end = $("#sect7").innerHeight() - winH;
        var pers = Math.floor(start / end * 32);
        if(10<=pers){
            TweenLite.to(s7bgScale,0.3,{
                css:{scale:(1/pers)*10}
            })
        }
    }else if(s7t + s7h - winH <= windowScrollTop){
        console.log('over')
        TweenLite.to(s7bgScale,0.5,{
            css:{scale:1/3.2}
        })
    }
    //#region s7 bg scale
    if(0< windowScrollBot && windowScrollBot < s4t){//color style
        $("#colorStyle").removeClass("white")
        $("#colorStyle").addClass("black")
    }else if(s4t <= windowScrollBot && windowScrollBot < s7t){
        $("#colorStyle").removeClass("black")
        $("#colorStyle").addClass("white")
    }else if(s7t <= windowScrollBot){
        $("#colorStyle").removeClass("white")
        $("#colorStyle").addClass("black")
    }
    if(s6t < windowScrollTop && windowScrollTop < s7t){
        $('.s6__text').addClass('init')
    }else{
        $('.s6__text').removeClass('init')
    }
    $('.s4__c1_col').each(function(){
        var thisTop = $(this).offset().top;
        var parentBox = $(this).find('.s4__c1_padding')
        var stretchBox = $(this).find('.s4__c1_imgBox')
        var stretchW = stretchBox.width()
        if(thisTop<windowScrollBot - 100 && windowScrollTop < thisTop){
            parentBox.css({"width":stretchW})
        }else{
            parentBox.css({"width":"0px"})
        }
    })
}
// #endregion sect4 text-change==================================================
$(window).scroll(function(){
    windowScrollTop = $(document).scrollTop();
    windowScrollBot = windowScrollTop + winH;
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
    footerT = $("#footer").offset().top;
    s7h = $("#sect7").innerHeight();
})
setTimeout(()=>{
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
},100)
})