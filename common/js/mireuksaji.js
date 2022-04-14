$(window).ready(function(){
    const s1 = $("#sect1")
    setTimeout(()=>{
        s1.addClass('init')
    },300)

    const s2Row4Box = $(".s2__row4_box")
    const s2Row4BoxItem1 = $(".s2__row4_box_textBox1_item")
    const s2Row4BoxItem2 = $(".s2__row4_box_textBox2")
    const s2Row4BoxItem3 = $(".s2__row4_box_circle")
    const s10 = $("#sect10")
    const s10box1= $(".s10__box1")
    const s10box2= $(".s10__box2")
    const trig$s10 = gsap.timeline({
        scrollTrigger:{
            trigger:s10,
            start:"top bottom",
            end:"bottom top",
            scrub:1,
        }
    })
    const trig$s1 = gsap.timeline({
        scrollTrigger:{
            trigger:s2Row4Box,
            start:"top bottom",
            end:"bottom top",
            scrub:-1,
        }
    })
    trig$s10.to(s10box1,{y:"-20%",})
    trig$s10.to(s10box2,{y:"-20%",})
    trig$s1.to(s2Row4BoxItem1,{
        y:"-100%",
        scrollTrigger:{
            trigger:s2Row4Box,
            start:"top bottom",
            end:"bottom top",
            scrub:-1,
        }
    })
    trig$s1.to(s2Row4BoxItem2,{
        y:"-50%",
        scrollTrigger:{
            trigger:s2Row4Box,
            start:"top bottom",
            end:"bottom top",
            scrub:-1,
        }
    })
    gsap.set(s2Row4BoxItem3,{
        y:"20%"
    })
    trig$s1.to(s2Row4BoxItem3,{
        y:"0%",
        scrollTrigger:{
            trigger:s2Row4Box,
            start:"top bottom",
            end:"bottom top",
            scrub:-1,
        }
    })

})