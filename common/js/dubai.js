$(window).ready(function(){
    setTimeout(()=>{
        $(".s1__head").addClass('init-view')
    },300)

    const belt = $(".belt")
    gsap.fromTo(belt,60,
        {x:"-50%"},{x:"-150%",ease:Power0.easeNone}
    ).repeat(-1);

})