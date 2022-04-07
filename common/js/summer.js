$(window).ready(function(){
    
    const s2 = $("#sect1")
    const s9 = $("#sect9")
    const s1wrap = $("#s1wrap")
    const s9p1 = $(".s9_p1")
    const s9p2 = $(".s9_p2")
    const s9p3 = $(".s9_p3")
    const s9p4 = $(".s9_p4")
    setTimeout(()=>{
        $(".s1__container").addClass('init')
        $(".s1__footer").addClass('init')
    },300)
    
    gsap.to(s1wrap,{
        opacity:"0",
        scrollTrigger:{
            trigger:s2,
            start:"bottom top",
            end:"bottom top",
            scrub:-1,
        }
    })
    gsap.set(s9p1,{x:"-20%"})
    gsap.set(s9p2,{x:"20%"})
    gsap.set(s9p3,{x:"-20%"})
    gsap.set(s9p4,{x:"20%"})
    gsap.to(s9p1,{
        x:"0",
        scrollTrigger:{
            trigger:s9,
            start:"top bottom",
            end:"top top",
            scrub:1,
        }
    })
    gsap.to(s9p2,{
        x:"0",
        scrollTrigger:{
            trigger:s9,
            start:"top bottom",
            end:"top top",
            scrub:1,
        }
    })
    gsap.to(s9p3,{
        x:"0",
        scrollTrigger:{
            trigger:s9,
            start:"top bottom",
            end:"top top",
            scrub:1,
        }
    })
    gsap.to(s9p4,{
        x:"0",
        scrollTrigger:{
            trigger:s9,
            start:"top bottom",
            end:"top top",
            scrub:1,
        }
    })
})