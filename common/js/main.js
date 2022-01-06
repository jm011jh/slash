$(document).ready(function(){
    var winW = $(window).width();
    var winH = $(window).height();
    var windowScrollTop = $(document).scrollTop();
    var windowScrollBot = windowScrollTop + winH;

    const body = $('body');
    const s1 = $('#sect1');
    const s2 = $('#sect2');
    const s3 = $('#sect3');
    const s4 = $('#sect4');
    const s5 = $('#sect5');
    const s6 = $('#sect6');
    const s7 = $('#sect7');
    const footer = $('#footer');
    var s1t = s1.offset().top;
    var s2t = s2.offset().top;
    var s3t = s3.offset().top;
    var s4t = s4.offset().top;
    var s5t = s5.offset().top;
    var s6t = s6.offset().top;
    var s7t = s7.offset().top;
    var footert = footer.offset().top;

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
    $(window).scroll(function(){
        if(scrollDelay){
            scrollDelay=false;
            scrollPadding=300;//스크롤여분값
            windowScrollTop = $(document).scrollTop();
            windowScrollBot = windowScrollTop + winH;

            if(200 < windowScrollTop && windowScrollTop < (s3t - scrollPadding)){
                console.log('sect1')
                body.removeClass('white');
                body.addClass('black');
            }else if((s3t - scrollPadding) <= windowScrollTop && windowScrollTop < (s4t - scrollPadding)){
                console.log('sect3')
                body.removeClass('black');
                body.addClass('white');
            }else if((s4t - scrollPadding) <= windowScrollTop && windowScrollTop < (s5t - scrollPadding)){
                console.log('sect4')
                body.removeClass('white');
                body.addClass('black');
            }else if((s5t - scrollPadding) <= windowScrollTop && windowScrollTop < (s6t - scrollPadding)){
                console.log('sect5')
                body.removeClass('white');
                body.addClass('black');
            }else if((s6t - scrollPadding) <= windowScrollTop && windowScrollTop < (s7t - scrollPadding)){
                console.log('sect6')
                body.removeClass('black');
                body.addClass('white');
            }else if((s7t - scrollPadding) <= windowScrollTop && windowScrollTop < (footert - scrollPadding)){
                console.log('sect7')
                body.removeClass('white');
                body.addClass('black');
            }else if((footert - scrollPadding) <= windowScrollTop){
                console.log('footer')
                body.removeClass('white');
                body.addClass('black');
            }

            setTimeout(()=>{
                scrollDelay=true;
            },10);
        };

        $('.scroll-detect').each(function(index,item){
            var thisTop = $(this).offset().top;
            var topPadding = 100;

            if(windowScrollTop < thisTop && thisTop < windowScrollBot - topPadding){
                $(this).addClass('on_view')
            }else{
                $(this).removeClass('on_view')
            }
        })
        $('.scroll-detect-instant').each(function(index,item){
            var thisTop = $(this).offset().top;
            var topPadding = 100;

            if(windowScrollTop < thisTop && thisTop < windowScrollBot - topPadding){
                $(this).addClass('on_view')
            }
        })
        $('.s6__c1_col').each(function(){
            var thisTop = $(this).offset().top;
            var topPadding = 300;
            var parentBox = $(this).find('.s6__c1_padding')
            var stretchBox = $(this).find('.s6__c1_imgBox')
            var stretchW = stretchBox.width()
            if(thisTop<windowScrollBot - topPadding && windowScrollTop < thisTop){
                $(this).css({"marginLeft":""+stretchW/2+"px"})
                parentBox.css({"width":stretchW})
            }else{
                $(this).css({"marginLeft":"-"+stretchW/2+"px"})
                parentBox.css({"width":"0px"})
            }
        })
    });
//#region resize==================================================
    $(window).resize(function(){
        sizeRefresh()
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
        footert = footer.offset().top;
        s1c2beltW = s1c2belt.width();
        s1c3beltW = s1c3belt.width();
        winW = $(window).width();
        winH = $(window).height();
    }
//#endregion resize===============================================
//#region beltmove==================================================
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

    var s1c2beltMoveSpeed = 8000;
    var s1c3beltMoveSpeed = 45000;
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
//#endregion beltmove==================================================
//#region text split================================================
    const s3c2p1 = $('.s3__c2_p1')
    const s3c2p1Text = s3c2p1.text()
    const s3c2p1arr = s3c2p1Text.split(" ");

    $('.split_space').each(function(){
        var text = $(this).text();
        var arr = text.split(" ");
        $(this).empty();
        for(i=0;i<arr.length;i++){
            var span = $("<span>"+ arr[i] +"&nbsp;</span>")
            span.addClass('mouse-change')
            span.appendTo($(this))
        }
    })
    $('.split_text').each(function(){
        var text = $(this).text();
        var arr = text.split(" ");
        $(this).empty();
        for(i=0;i<arr.length;i++){
            var span = $("<span>" + arr[i] + " </span>");
            span.addClass('space')
            span.appendTo($(this));
            var spanText = span.text();
            var spanArr = spanText.split("");
            span.empty();
            for(j=0;j<spanArr.length;j++){
                var spanMini = $("<span>" + spanArr[j] + "</span>");
                spanMini.addClass('mini-span')
                spanMini.appendTo(span);
            }
        }
    })
//#endregion text split=============================================
//#region sect5=================================================
// $('.s5__c1_listWrap').mouseenter(function(){
//     $(this).find('a').addClass('hover')
// })
// $('.s5__c1_listWrap').mouseleave(function(){
//     $(this).find('a').removeClass('hover')
// })
//#endregion sect5==============================================
})
