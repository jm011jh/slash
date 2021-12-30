$(document).ready(function(){
    var scrollDelay = true;
    var height = $(document).scrollTop();
    const nav = $('#nav')
    const body = $('body')

    $(window).scroll(function(){
        if(scrollDelay){
            scrollDelay=false;
            height = $(document).scrollTop();

            if(200<height){
                nav.addClass('on')
            }else{
                nav.removeClass('on')
                nav.removeClass('show')
            }

            setTimeout(()=>{
                scrollDelay=true;
            },10)
        }
    })
    nav.on({
        mouseleave:function(){
            if(nav.hasClass('on')){
                nav.removeClass('show')
            }
        },
    })
    $('.nav_head').on({
        mouseenter:function(){
            if(nav.hasClass('on')){
                nav.addClass('show')
            }
        },
        click:function(){
            if(nav.hasClass('on') && nav.hasClass('show')){
                nav.removeClass('show')
            }
        }
    })
    $('.nav_ul li').on({
        mouseenter:function(){
                $(this).addClass('mouseenter')
                $(this).removeClass('mouseleave')
            },
            mouseleave:function(){
                $(this).removeClass('mouseenter')
                $(this).addClass('mouseleave')
                setTimeout(()=>{
                    $(this).removeClass('mouseleave')
                },310)
            }
        })
})