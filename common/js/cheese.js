$(window).ready(function(){
    setTimeout(() => {
        $(".s1__container").addClass('init')
    }, 200);
    
    const s2 = $("#sect2")
    const s6row2 = $(".s6__body_row2")
    const s2span1 = $(".s2__span1")
    const s2span2 = $(".s2__span2")
    const s2span3 = $(".s2__span3")
    const s6cheese1 = $(".s6__body_cheese1")
    const s6cheese2 = $(".s6__body_cheese2")

    gsap.set(s2span1,{x:"100%"})
    gsap.set(s2span2,{x:"-100%"})
    gsap.set(s2span3,{x:"-100%"})
    gsap.set(s6cheese1,{y:"50%"})
    gsap.set(s6cheese2,{y:"50%"})
    gsap.to(s2span1,{
        x:"0%",
        scrollTrigger:{
            trigger:s2,
            start:"top bottom",
            end:"top top",
            scrub:1,
        }
    })
    gsap.to(s2span2,{
        x:"0%",
        scrollTrigger:{
            trigger:s2,
            start:"top bottom",
            end:"top top",
            scrub:1,
        }
    })
    gsap.to(s2span3,{
        x:"0%",
        scrollTrigger:{
            trigger:s2,
            start:"top bottom",
            end:"top top",
            scrub:1,
        }
    })

    gsap.to(s6cheese1,{
        y:"0%",
        scrollTrigger:{
            trigger:s6row2,
            start:"top bottom",
            end:"top top",
            scrub:1,
        }
    })
})