$(document).ready(function(){
    var windowScrollTop = $(document).scrollTop();
    var winW = $(window).width();
    var winH = $(window).height();

    const ftC1belt = $('.footer__c1_belt');
    const ftC1beltWrap = $('.footer__c1_wrap');
    var ftC1beltWrapW = ftC1beltWrap.width();
    var ftC1beltL = ftC1belt.length;
    var ftC1beltW = ftC1belt.width();

    $(window).resize(function(){
        sizeRefresh()
        ftC1Cloning();
    });
    function sizeRefresh(){
        ftC1beltW = ftC1belt.width();
        winW = $(window).width();
        winH = $(window).height();
    }
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
})
