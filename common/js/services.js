$(window).ready(function(){

    const $s2 = document.querySelector('#sect2')
    const s1 = $("#sect1")
    const s2 = $("#sect2")
    const s3 = $("#sect3")
    const s4 = $("#sect4")
    const s5 = $("#sect5")
    const footer = $("#footer")
    const s2title = $('.s2__title')
    const s2title1 = $('.s2__title1')
    const s2title2 = $('.s2__title2')
    const s2title3 = $('.s2__title3')
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

    var s2titleTop1 = s2title1.offset().top;
    var s2titleTop2 = s2title2.offset().top;
    var s2titleTop3 = s2title3.offset().top;
    var s2titleH1 = s2title1.innerHeight();
    var s2titleH2 = s2title2.innerHeight();
    var s2titleH3 = s2title3.innerHeight();
    setTimeout(() => {$(".s1__head").addClass('on-view')}, 200);

    $(window).resize(function(){
        ScrollTrigger.refresh();
        trig$2.scrollTrigger.refresh();
        winW = $(window).width();
        winH = $(window).height();
        windowScrollTop = $(document).scrollTop();
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

        s2titleTop1 = s2title1.offset().top;
        s2titleTop2 = s2title2.offset().top;
        s2titleTop3 = s2title3.offset().top;
        s2titleH1 = s2title1.innerHeight();
        s2titleH2 = s2title2.innerHeight();
        s2titleH3 = s2title3.innerHeight();
    })
    $(window).scroll(function(){
        s2titleH1 = s2title1.innerHeight();
        s2titleH2 = s2title2.innerHeight();
        s2titleH3 = s2title3.innerHeight();
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


        if(windowScrollTop<s2t){
            s2title1.removeClass('fixed')
        }else if(s2t<=windowScrollTop && windowScrollTop < s3t - s2titleH1){
            s2title1.removeClass('end')
            s2title1.addClass('fixed')
        }else if(s3t - s2titleH1 <= windowScrollTop){
            s2title1.removeClass('fixed')
            s2title1.addClass('end')
        }

        if(windowScrollTop<s2t){
            s2title2.removeClass('fixed')
        }else if(s2t<=windowScrollTop && windowScrollTop < s3t - s2titleH2){
            s2title2.removeClass('end')
            s2title2.addClass('fixed')
        }else if(s3t - s2titleH2 <= windowScrollTop){
            s2title2.removeClass('fixed')
            s2title2.addClass('end')
        }

        if(windowScrollTop<s2t){
            s2title3.removeClass('fixed')
        }else if(s2t<=windowScrollTop && windowScrollTop < s3t - s2titleH3){
            s2title3.removeClass('end')
            s2title3.addClass('fixed')
        }else if(s3t - s2titleH3 <= windowScrollTop){
            s2title3.removeClass('fixed')
            s2title3.addClass('end')
        }

    })
    const trig$1 = gsap.timeline({
        scrollTrigger:{
            trigger:$s2,
            start:"top top",
            end:"bottom top",
            scrub:true,
        }
    })
    const trig$2 = gsap.timeline({
        scrollTrigger:{
            trigger:$s2,
            start:"top top",
            end:"bottom top",
            scrub:true,
        }
    })
    const trig$3 = gsap.timeline({
        scrollTrigger:{
            trigger:$s2,
            start:"top top",
            end:"bottom top",
            scrub:true,
        }
    })
    trig$1.to(s2title1,{
        fontSize:"40px",
        paddingTop:"240px",
    })
    trig$2.to(s2title2,{
        fontSize:"40px",
        paddingTop:"180px",
    })
    trig$3.to(s2title3,{
        fontSize:"20px",
        paddingTop:"120px",
    })

    const s4belt = $(".s4__belt_item")
    gsap.fromTo(s4belt,20,
        {x:"0%"},{x:"-100%",ease:Power0.easeNone}
    ).repeat(-1);
})