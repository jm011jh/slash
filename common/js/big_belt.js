$(document).ready(function(){
    const tl = gsap.timeline({
        scrollTrigger:{
            trigger: ".big_belt_trigger",
            start:"top bottom",
            end:"bottom top",
            scrub: true,
            
        }
    })
    tl.to(".big_belt_trigger",{
        x:-100,
        duration:3
    })
})