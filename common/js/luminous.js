$(window).ready(function(){

    const s1 = $("#sect1")
    const s11 = $("#sect11")
    const s1footer = $(".s1__footer")
    const s11container = $(".s11__container")
    const s2c1b4belt = $(".s2__c1_b4_belt p")
    const s7belt = $(".s7__box_belt p")
    const smallBlock = $(".smallBlock")
    const s6span1 = $("#sect6 .span1")
    const s6span2 = $("#sect6 .span2")
    const s6span3 = $("#sect6 .span3")
    const s6span4 = $("#sect6 .span4")
    const s6span5 = $("#sect6 .span5")

    const trig$s1 = gsap.timeline({
        scrollTrigger:{
            trigger:s1,
            start:"top top",
            end:"bottom top",
            scrub:true,
        }
    })
    trig$s1.to(s1footer,{
        y:"-25%",
    })
    const trig$s11 = gsap.timeline({
        scrollTrigger:{
            trigger:s11,
            start:"30% bottom",
            end:"bottom bottom",
            scrub:1,
        }
    })
    trig$s11.to(s11container,{
        y:"0%",
    })
    gsap.fromTo(s2c1b4belt,7,
        {x:"-100%"},{x:"0%",ease:Power0.easeNone}
    ).repeat(-1);
    gsap.fromTo(s7belt,7,
        {x:"0%"},{x:"-100%",ease:Power0.easeNone}
    ).repeat(-1);

    gsap.set(smallBlock,{x:"-100%",left:"0"})
    gsap.set(s6span1,{x:"-100%",left:"0%"})
    gsap.set(s6span2,{y:"-100%",top:"0%"})
    gsap.set(s6span3,{y:"100%",bottom:"0%"})
    gsap.set(s6span4,{x:"-100%",left:"0%"})
    gsap.set(s6span5,{x:"-100%",left:"0%"})
    const smallBlockPlay = gsap.to(smallBlock,2.2,{
        x:"0%",
        left:"100%"
    })
    const s6span1Play = gsap.to(s6span1,1.8,{
        x:"0%",
        left:"100%"
    })
    const s6span2Play = gsap.to(s6span2,1.5,{
        y:"100%",
        top:"100%",
    })
    const s6span3Play = gsap.to(s6span3,1.5,{
        y:"-100%",
        bottom:"100%"
    })
    const s6span4Play = gsap.to(s6span4,2.0,{
        x:"0%",
        left:"100%"
    })
    const s6span5Play = gsap.to(s6span5,1.4,{
        x:"0%",
        left:"100%"
    })
    
    setInterval(()=>{
        s6span1Play.restart();
        s6span2Play.restart();
        s6span3Play.restart();
        s6span4Play.restart();
        s6span5Play.restart();
        smallBlockPlay.restart();
    },4000)
})