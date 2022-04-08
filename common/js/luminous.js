$(window).ready(function(){
    const s2c1b4belt = $(".s2__c1_b4_belt p")
    const s7belt = $(".s7__box_belt p")
    const smallBlock = $(".smallBlock")
    const s6span1 = $("#sect6 .span1")
    const s6span2 = $("#sect6 .span2")
    const s6span3 = $("#sect6 .span3")

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
    const smallBlockPlay = gsap.to(smallBlock,2.2,{
        x:"0%",
        left:"100%"
    })
    const s6span1Play = gsap.to(s6span1,2.2,{
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
    
    setInterval(()=>{
        s6span1Play.restart();
        s6span2Play.restart();
        s6span3Play.restart();
        smallBlockPlay.restart();
    },4000)
})