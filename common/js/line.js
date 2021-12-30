$(document).ready(function(){
    setInterval(()=>{
        $('.line-moving').addClass('animate')
        setTimeout(()=>{
            $('.line-moving').removeClass('animate')
        },4000)
    },4100)
})