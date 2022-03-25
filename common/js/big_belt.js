$(document).ready(function(){
    const smallBelt = $(this).find(".small_belt_trigger")

    gsap.fromTo(smallBelt,60,
        {x:"0%"},{x:"-100%",ease:Power0.easeNone}
    ).repeat(-1);
})