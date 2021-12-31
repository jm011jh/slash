$(document).ready(function(){
    const body = $('body');
    const s1 = $('#sect1');
    const s2 = $('#sect2');
    const s3 = $('#sect3');
    var s1t = s1.offset().top;
    var s2t = s2.offset().top;
    var s3t = s3.offset().top;
    var scrollDelay = true;
    var height = $(document).scrollTop();
    var winW = $(window).width();
    var winH = $(window).height();

    const s1c2belt = $('.sect1__container2_belt');
    const s1c2beltWrap = $('.sect1__container2_wrap');
    var s1c2beltWrapW = s1c2beltWrap.width();
    var s1c2beltL = s1c2belt.length;
    var s1c2beltW = s1c2belt.width();

    const s1c3belt = $('.sect1__container3_belt');
    const s1c3beltWrap = $('.sect1__container3_wrap');
    var s1c3beltWrapW = s1c3beltWrap.width();
    var s1c3beltL = s1c3belt.length;
    var s1c3beltW = s1c3belt.width();

    $(window).scroll(function(){
        if(scrollDelay){
            scrollDelay=false;
            scrollPadding=500;//스크롤여분값
            height = $(document).scrollTop();

            if(200<height && height<(s3t - scrollPadding)){
                body.removeClass('white');
                body.addClass('black');
            }else if((s3t - scrollPadding)<=height){
                body.removeClass('black');
                body.addClass('white');
            };

            setTimeout(()=>{
                scrollDelay=true;
            },10);
        };
    });
    $(window).resize(function(){
        sizeRefresh()

        s1c2beltW = s1c2belt.width();
        s1c3beltW = s1c3belt.width();
        s1c2Cloning();
        s1c3Cloning();
    });
    function sizeRefresh(){
        s1t = s1.scrollTop();
        s2t = s2.scrollTop();
        s3t = s3.scrollTop();
        winW = $(window).width();
        winH = $(window).height();
    }
    function s1c2Cloning(){
        if(s1c2beltWrapW - s1c2beltW <= winW){
            s1c2belt.eq(0).clone().appendTo(s1c2beltWrap);
            s1c2belt.eq(0).clone().appendTo(s1c2beltWrap);
            s1c2beltWrap.width(s1c2beltWrapW + s1c2beltW);
        }
        s1c2beltL = $('.sect1__container2_belt').length;
        s1c2beltWrapW = (s1c2beltW + 2) * (s1c2beltL + 1);
    }
    function s1c3Cloning(){
        if(s1c3beltWrapW - s1c3beltW <= winW){
            s1c3belt.eq(0).clone().appendTo(s1c3beltWrap);
            s1c3belt.eq(0).clone().appendTo(s1c3beltWrap);
            s1c3beltWrap.width(s1c3beltWrapW + s1c3beltW);
        }
        s1c3beltL = $('.sect1__container3_belt').length;
        s1c3beltWrapW = (s1c3beltW + 2) * (s1c3beltL + 1);
    }

    s1c2beltMoveSpeed = 8000;
    s1c3beltMoveSpeed = 40000;
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
    setInterval(s1c2beltMove,s1c2beltMoveSpeed,s1c2beltMoveSpeed);
    setInterval(s1c3beltMove,s1c3beltMoveSpeed,s1c3beltMoveSpeed);

    do{s1c2Cloning()}
    while(s1c2beltWrapW - s1c2beltW <= winW)
    do{s1c3Cloning()}
    while(s1c3beltWrapW - s1c3beltW <= winW)
    // sect1Container2beltMove();
})