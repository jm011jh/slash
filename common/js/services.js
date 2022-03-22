$(window).ready(function(){
    const $s2 = document.querySelector('#sect2')
    const s2Title = document.querySelector('#s2Title')
    const s1 = $("#sect1")
    const s2 = $("#sect2")
    const s3 = $("#sect3")
    const s4 = $("#sect4")
    const s5 = $("#sect5")
    const footer = $("#footer")
    const s2title = $('.s2__title')
    var winW = $(window).width();
    var winH = $(window).height();
    var windowScrollTop = $(document).scrollTop();
    var windowScrollBot = windowScrollTop + winH;

    var s1t = s1.offset().top;
    var s2t = s2.offset().top;
    var s3t = s3.offset().top;
    var s4t = s4.offset().top;
    var s5t = s5.offset().top;
    var s2h = s2.innerHeight()
    var s3h = s3.innerHeight()
    var s5h = s5.innerHeight()
    var footerT = footer.offset().top;
    setTimeout(() => {
        $(".s1__head").addClass('on-view')
    }, 200);
    $(window).resize(function(){
        winW = $(window).width();
        winH = $(window).height();
        windowScrollTop = $(document).scrollTop()
        windowScrollBot = windowScrollTop + winH;
        s1t = s1.offset().top;
        s2t = s2.offset().top;
        s3t = s3.offset().top;
        s4t = s4.offset().top;
        s5t = s5.offset().top;
        s2h = s2.innerHeight()
        s3h = s3.innerHeight()
        s5h = s5.innerHeight()
        footerT = footer.offset().top;
    })
    $(window).scroll(function(){
        winW = $(window).width();
        winH = $(window).height();
        windowScrollTop = $(document).scrollTop();
        windowScrollBot = windowScrollTop + winH;
        if(windowScrollTop < s5t + s5h*0.8){
            $("#colorStyle").removeClass("black")
            $("#colorStyle").addClass("white")
        }else if(s5t + s5h*0.8 <= windowScrollTop){
            $("#colorStyle").removeClass("white")
            $("#colorStyle").addClass("black")
        }
        var s2titleTop = s2title.offset().top;
        var s2titleH = s2title.innerHeight();
        var s2titleBot = s2titleTop + s2titleH;
        if(windowScrollTop<s2t){
            s2title.removeClass('fixed')
        }else if(s2t<=windowScrollTop && windowScrollTop < s3t - s2titleH){
            var start = windowScrollTop - s2t;
            var end = s2h - s2titleH;
            var fontPers = 0 - Math.floor(start / end * 180) + 240;
            // TweenLite.to(s2title,0.1,{
            //     css:{fontSize:fontPers+"px"}
            // });
            s2title.removeClass('end')
            s2title.addClass('fixed')
        }else if(s3t - s2titleH <= windowScrollTop){
            s2title.removeClass('fixed')
            s2title.addClass('end')
        }
            const ele = $s2.getBoundingClientRect();
            console.log(windowScrollTop)
            // if(ele.top>0){
            //     console.log("up")
            // }else if(ele.top<0){
            //     console.log("down")
            // }else if(ele.top==0){
            //     console.log("in")
            // }
    })
})