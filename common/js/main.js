$(document).ready(function(){
$('.s1__c1').addClass('on-view')
var swiper = new Swiper(".s4_swiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    // spaceBetween: 8,
    mousewheel:true,
});
// for a horizontal version, see https://codepen.io/GreenSock/pen/rNmQPpa?editors=0010
//#region declare============================================================
    var winW = $(window).width();
    var winH = $(window).height();
    var windowScrollTop = $(document).scrollTop();
    var windowScrollBot = windowScrollTop + winH;
    const s1 = $('#sect1');
    const s2 = $('#sect2');
    const s3 = $('#sect3');
    const s4 = $('#sect4');
    const s5 = $('#sect5');
    const s6 = $('#sect6');
    const s7 = $('#sect7');
    const footer = $('#footer');
    const colorStyle = $('#colorStyle')
    var s1t = s1.offset().top;
    var s2t = s2.offset().top;
    var s3t = s3.offset().top;
    var s4t = s4.offset().top;
    var s5t = s5.offset().top;
    var s6t = s6.offset().top;
    var s7t = s7.offset().top;
    var footert = footer.offset().top;

    var sect4top = Math.floor(s4t);
    var sect5top = Math.floor(s5t);

    var scrollDelay = true;
    var scrollPadding = 300;//스크롤여분값
//#endregion declare=========================================================
//#region sect1 belt=========================================================

//#endregion sect1 belt======================================================

function s3c1Keep(dataNum){//for sect3 img function
    $('.s3__c1_fig').attr({"data-number":dataNum})
    $('.s3__c2_fig').removeClass('on-view')
    $('.s3__c2_fig').eq(dataNum-1).addClass('on-view')
}
function mainFunction(){
            //#region body scroll check==================================================
            windowScrollTop = $(document).scrollTop();
            windowScrollBot = windowScrollTop + winH;
            if(200 < windowScrollTop && windowScrollTop < (s2t - scrollPadding)){
                colorStyle.removeClass("white")
                colorStyle.addClass("black")
            }else if((s2t - scrollPadding) <= windowScrollTop && windowScrollTop < (s3t - scrollPadding)){
                colorStyle.removeClass("white")
                colorStyle.addClass("black")
            }else if((s3t - scrollPadding) <= windowScrollTop && windowScrollTop < (s4t - scrollPadding)){//3
                //#region declare===============================================
                var sect3top = Math.floor(s3t)
                var sect4top = Math.floor(s4t)
                var sect3Height = sect4top - sect3top;
                var sect3partHeight = sect3Height/5
                var sect3for1 = sect3top + sect3partHeight*1
                var sect3for2 = sect3top + sect3partHeight*2
                var sect3for3 = sect3top + sect3partHeight*3
                var sect3for4 = sect3top + sect3partHeight*4
                // var sect3for5 = sect3top + sect3partHeight*5
                // var sect3for6 = sect3top + sect3partHeight*6
                //#endregion declare===============================================
                if(sect3top < windowScrollTop && windowScrollTop <= sect3for1){
                    $('.s3__c1_fig').attr({"data-number":"1"})
                    s3c1Keep(4);
                }else if(sect3for1 < windowScrollTop && windowScrollTop <= sect3for2){
                    $('.s3__c1_fig').attr({"data-number":"1"})
                    s3c1Keep(1);
                }else if(sect3for2 < windowScrollTop && windowScrollTop <= sect3for3){
                    s3c1Keep(2);
                }else if(sect3for3 < windowScrollTop && windowScrollTop <= sect3for4){
                    s3c1Keep(3);
                }else if(sect3for4 < windowScrollTop){
                }
                colorStyle.removeClass("black")
                colorStyle.addClass("white")
            }else if((s4t - scrollPadding) <= windowScrollTop && windowScrollTop < (s5t - scrollPadding)){//4
                colorStyle.removeClass("white")
                colorStyle.addClass("black")
                colorStyle.removeClass("mobile-white")
                colorStyle.removeClass("mobile-black")
            }else if((s5t - scrollPadding) <= windowScrollTop && windowScrollTop < (s6t - scrollPadding)){//5
                colorStyle.removeClass("white")
                colorStyle.addClass("black")
                colorStyle.removeClass("mobile-white")
                colorStyle.removeClass("mobile-black")
            }else if((s6t - scrollPadding) <= windowScrollTop && windowScrollTop < (s7t - scrollPadding)){//6
                colorStyle.removeClass("black")
                colorStyle.addClass("white")
                colorStyle.removeClass("mobile-white")
                colorStyle.addClass("mobile-black")
            }else if((s7t - scrollPadding) <= windowScrollTop && windowScrollTop < (footert - scrollPadding)){//7
                colorStyle.removeClass("white")
                colorStyle.addClass("black")
                colorStyle.removeClass("mobile-white")
                colorStyle.removeClass("mobile-black")
            }else if((footert - scrollPadding) <= windowScrollTop){//footer
                colorStyle.removeClass("white")
                colorStyle.addClass("black")
            }
}

const s3c1 = document.getElementById('s3c1')
const s3c1f1 = document.getElementById('s3c1f1')
const s3c1f2 = document.getElementById('s3c1f2')
const s3c1f3 = document.getElementById('s3c1f3')
const s3c2f1 = document.getElementById('s3c2f1')
const s3c2f2 = document.getElementById('s3c2f2')
const s3c2f3 = document.getElementById('s3c2f3')
gsap.set(s3c1,{opacity:"0"})
gsap.set(s3c1f1,{left:"50%",top:"50%",x:"-50%",y:"-50%",})
gsap.set(s3c1f2,{left:"50%",top:"50%",x:"-50%",y:"-50%",})
gsap.set(s3c1f3,{left:"50%",top:"50%",x:"-50%",y:"-50%",})
gsap.to(s3c1,0.1,{
    opacity:"1",
    scrollTrigger:{
        trigger:s3,
        start:"1% top",
        end:"5% top",
        scrub:1
    }
})
gsap.to(s3c1f1,0.3,{
    left:"6.25%",
    top:"75%",
    x:"0%",
    y: "-50%",
    scrollTrigger:{
        trigger:s3,
        start:"10% top",
        end:"40% top",
        scrub:1
    }
    }
);
gsap.to(s3c1f2,0.3,{
    left:"98%",
    x:"-100%",
    scrollTrigger:{
        trigger:s3,
        start:"10% top",
        end:"40% top",
        scrub:1
    }
});
gsap.to(s3c1f3,0.3,{
    left:"10%",
    top:"25%",
    x:"0%",
    y: "-50%",
    scrollTrigger:{
        trigger:s3,
        start:"10% top",
        end:"40% top",
        scrub:1
    }
});
gsap.set($s4c2Wrapper,{x:"0%"})
gsap.to($s4c2Wrapper,{
    x:"-=76.2%",
    ease: Power2.easeOut,
    duration:0.5,
    scrollTrigger:{
        trigger:s4,
        start:"5% top",
        end:"bottom bottom",
        scrub:1,
    },
})
$(window).scroll(function(){
    if(scrollDelay){
        scrollDelay = false;
        setTimeout(()=>{
            scrollDelay=true;
            },10);
        mainFunction();
    };
});
//#region resize==================================================
    $(window).resize(function(){
        sizeRefresh();
    });
    function sizeRefresh(){
        s1t = s1.offset().top;
        s2t = s2.offset().top;
        s3t = s3.offset().top;
        s4t = s4.offset().top;
        s5t = s5.offset().top;
        s6t = s6.offset().top;
        s7t = s7.offset().top;

        s4h = s4.height();
        footert = footer.offset().top;
        winW = $(window).width();
        winH = $(window).height();
        windowScrollTop = $(document).scrollTop();
        sect4top = Math.floor(s4t);
        sect5top = Math.floor(s5t);
        sect4Height = sect5top - sect4top;
        mainFunction();
        
    }
//#endregion resize===============================================
//#region sect5=================================================
$('.s5__c1_listWrap').mouseenter(function(){
    $(this).find('a').addClass('hover')
})
$('.s5__c1_listWrap').mouseleave(function(){
    $(this).find('a').removeClass('hover')
})
//#endregion sect5==============================================
})
