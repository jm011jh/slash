$(window).ready(function(){
    var swiper = new Swiper(".s8-swiper", {
        grabCursor: true,
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
        }
    },18)
})