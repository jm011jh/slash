$(window).ready(function(){
    setTimeout(()=>{
        $(".s1__body").addClass('init-view')
    },300)
    var left = $(".belt_left .belt_js")
    var right = $(".belt_right .belt_js")

    var beltTime = 20
    gsap.fromTo(left,beltTime,
        {x:"0%"},{x:"-100%",ease:Power0.easeNone}
    ).repeat(-1);
    gsap.fromTo(right,beltTime,
        {x:"-100%"},{x:"0%",ease:Power0.easeNone}
    ).repeat(-1);
})