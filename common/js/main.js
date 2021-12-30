$(document).ready(function(){
    var scrollDelay = true;
    var height = $(document).scrollTop();
    const body = $('body')

    $(window).scroll(function(){
        if(scrollDelay){
            scrollDelay=false;
            height = $(document).scrollTop();

            if(200<height && height<800){
                body.removeClass('white')
                body.addClass('black')
            }else if(800<=height){
                body.removeClass('black')
                body.addClass('white')
            }

            setTimeout(()=>{
                scrollDelay=true;
            },10)
        }
    })
})