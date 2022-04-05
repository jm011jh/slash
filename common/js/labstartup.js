$(window).ready(function(){
    var swiper = new Swiper(".s8-swiper", {
        grabCursor: true,
        slidesPerView:1.1,
    });

    setTimeout(() => {
        $("#sect1").addClass('init')
    }, 100);
    var s1score = 100000;
    var s1scoreRepeat = setInterval(()=>{
        s1score = s1score + 100000;
        $('#s1score').text(s1score)
        if(s1score>=10000000){
            clearInterval(s1scoreRepeat)
            $('.img-border').addClass('on')
            setTimeout(()=>{
                $('.img-border').removeClass('on')
            },300)
            setTimeout(()=>{
                $('.img-border').addClass('on')
            },400)
            setTimeout(()=>{
                $('.img-border').removeClass('on')
            },500)
            setTimeout(()=>{
                $('.img-border').addClass('on')
            },600)
            setTimeout(()=>{
                $('.img-border').removeClass('on')
            },700)
            setTimeout(()=>{
                $('.img-border').addClass('on')
            },800)
        }
    },18)
})