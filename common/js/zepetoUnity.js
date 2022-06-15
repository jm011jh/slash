$(window).ready(function(){
    var s1beltItemL = $(".s1__belt_left .s1__belt_item")
    var s1beltItemR = $(".s1__belt_right .s1__belt_item")
    var s1beltSpeed = 25;
    gsap.fromTo(s1beltItemL,
    {x:"-100%",},
    {
        x:"0%",
        duration:(100/s1beltSpeed),
        ease:"none",
        repeat:-1
    })
    gsap.fromTo(s1beltItemR,
    {x:"0%",},
    {
        x:"-100%",
        duration:(100/s1beltSpeed),
        ease:"none",
        repeat:-1
    })
})