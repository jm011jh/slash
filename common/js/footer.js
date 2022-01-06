$(document).ready(function(){
    var windowScrollTop = $(document).scrollTop();
    var winW = $(window).width();
    var winH = $(window).height();

    const ftC1belt = $('.footer__c1_belt');
    const ftC1beltWrap = $('.footer__c1_wrap');
    var ftC1beltWrapW = ftC1beltWrap.width();
    var ftC1beltL = ftC1belt.length;
    var ftC1beltW = ftC1belt.width();
//#region resize function=====================================
$(window).resize(function(){
    sizeRefresh()
    ftC1Cloning();
});
function sizeRefresh(){
    ftC1beltW = ftC1belt.width();
    winW = $(window).width();
    winH = $(window).height();
    stickyTop = footerSticky.getBoundingClientRect().top;
    stickyLeft = footerSticky.getBoundingClientRect().left;
    stickyW = $footerSticky.outerWidth();
    stickyH = $footerSticky.outerHeight();
    circleW = $footerStickyCircle.outerWidth();
    circleH = $footerStickyCircle.outerHeight();
}
//#endregion resize function==================================
//#region sticky circle function==============================
    const footerSticky = document.getElementById('footerSticky');
    const $footerSticky = $('#footerSticky');
    const $footerStickyCircle = $('#footerStickyCircle');
    const $footerStickyBlend = $('#footerStickyBlend')
    var stickyTop = footerSticky.getBoundingClientRect().top;
    var stickyLeft = footerSticky.getBoundingClientRect().left;
    var stickyW = $footerSticky.outerWidth();
    var stickyH = $footerSticky.outerHeight();
    var circleW = $footerStickyCircle.outerWidth();
    var circleH = $footerStickyCircle.outerHeight();

    $('.footer__c2_sticky').mousemove(function(e){
        stickyTop = footerSticky.getBoundingClientRect().top;
        stickyLeft = footerSticky.getBoundingClientRect().left;
        var stickyRange = 2;//숫자가 커질 수록 도형 이동 거리가 줄어듭니다.
        var x = e.clientX - stickyLeft - stickyW/2;
        var y = e.clientY - stickyTop - stickyH/2;
        TweenLite.to($footerStickyCircle,1,{
            css:{
                transform:`matrix(1,0,0,1,${x/2},${y/2})`,
            }
        })
    })
    $('.footer__c2_sticky').mouseleave(function(){
        setTimeout(()=>{
            $footerStickyBlend.removeClass('blended')
            TweenLite.to($footerStickyCircle,0.5,{
                css:{
                    transform:`matrix(1,0,0,1,0,0)`,
                }
            })
        },100)
    })
    $('.footer__c2_sticky').mouseenter(function(){
        $footerStickyBlend.addClass('blended')
    })
//#endregion sticky circle function==============================
//#region belt move function=====================================
    function ftC1Cloning(){
        if(ftC1beltWrapW - ftC1beltW <= winW){
            ftC1belt.eq(0).clone().appendTo(ftC1beltWrap);
            ftC1belt.eq(0).clone().appendTo(ftC1beltWrap);
            ftC1beltWrap.width(ftC1beltWrapW + ftC1beltW);
        }
        ftC1beltL = $('.footer__c1_belt').length;
        ftC1beltWrapW = (ftC1beltW + 2) * (ftC1beltL + 1);
    }

    ftC1beltMoveSpeed = 8000;
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
    function ftC1beltMove(){
        beltMoveLeft(ftC1beltWrap,ftC1beltW,ftC1beltMoveSpeed)
    }
    ftC1beltMove()
    setInterval(ftC1beltMove,ftC1beltMoveSpeed);

    do{ftC1Cloning()}
    while(ftC1beltWrapW - ftC1beltW <= winW)
//#endregion belt move function==================================
})
