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
    const s7bgScaleMob = $("#s7bgScaleMob")
    const s2c3f1 = $("#s2c3f1")
    const s2c3f2 = $("#s2c3f2")
    const s2c3f3 = $("#s2c3f3")
    const s2c3f4 = $("#s2c3f4")
    const s2c4belt = $(".s2__c4_belt p")
    setTimeout(()=>{$('#sect1').addClass('on-view')},100)
    gsap.set(s2c3f1,{y:"0%"})
    gsap.set(s2c3f2,{y:"0%"})
    gsap.set(s2c3f3,{y:"0%"})
    gsap.set(s2c3f4,{y:"0%"})
    gsap.to(s2c3f1,{
        y:"-20%",
        scrollTrigger:{
            trigger:"#sect2",
            start:"top top",
            end:"bottom bottom",
            scrub:1,
            duration:{min:0.2,max:0.3},
            ease: "power1.inOut"
        }
    })
    gsap.to(s2c3f2,{
        y:"-20%",
        scrollTrigger:{
            trigger:"#sect2",
            start:"top top",
            end:"bottom bottom",
            scrub:1,
            duration:{min:0.2,max:0.3},
            ease: "power1.inOut"
        }
    })
    gsap.to(s2c3f3,{
        y:"-55%",
        scrollTrigger:{
            trigger:"#sect2",
            start:"top top",
            end:"bottom bottom",
            scrub:1,
            duration:{min:0.2,max:0.4},
            ease: "power1.inOut"
        }
    })
    gsap.to(s2c3f4,{
        y:"-60%",
        scrollTrigger:{
            trigger:"#sect2",
            start:"top top",
            end:"bottom bottom",
            scrub:1,
            duration:{min:0.2,max:0.3},
            ease: "power1.inOut"
        }
    })
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
    if(windowScrollTop<=s6t + winH){
        $('.s6__text').removeClass('init')
        TweenLite.to(s6List,1,{
            css:{x:0+"%"}
        });
    }else if(s6t + winH < windowScrollTop && windowScrollTop < s6t + s6h){
        console.log(s6t + "....." + windowScrollTop)
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
        TweenLite.to(s7bgScale,0.5,{
            css:{scale:1}
        })
        TweenLite.to(s7bgScaleMob,0.5,{
            css:{scale:1}
        })
    }else if(s7t <= windowScrollTop && windowScrollTop < s7t + s7h - winH){
        
        var start = windowScrollBot - s7t - winH;
        var end = $("#sect7").innerHeight() - winH;
        var pers = Math.floor(start / end * 32);
        var persMob = Math.floor(start / end * 175);
        
        if(10<=pers){
            TweenLite.to(s7bgScale,0.3,{
                css:{scale:(1/pers)*10}
            })
        }
        if(100<=persMob){
            TweenLite.to(s7bgScaleMob,0.3,{
                css:{scale:(1/persMob * 100)}
            })
        }else if(persMob<100){
            TweenLite.to(s7bgScaleMob,0.3,{
                css:{scale:1}
            })
        }
    }else if(s7t + s7h - winH <= windowScrollTop){
        TweenLite.to(s7bgScale,0.2,{
            css:{scale:1/3.2}
        })
        TweenLite.to(s7bgScaleMob,0.2,{
            css:{scale:1/1.75}
        })
    }
    //#region s7 bg scale
    if(0< windowScrollBot && windowScrollBot < s4t - 1000){//color style
        $("#colorStyle").removeClass("white")
        $("#colorStyle").addClass("black")
    }else if(s4t - 1000 <= windowScrollBot && windowScrollBot < s7t){
        $("#colorStyle").removeClass("black")
        $("#colorStyle").addClass("white")
    }else if(s7t <= windowScrollBot){
        $("#colorStyle").removeClass("white")
        $("#colorStyle").addClass("black")
    }
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