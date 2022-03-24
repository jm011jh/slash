$(document).ready(function(){
    var scrollDelay = true;
    var height = $(document).scrollTop();
    const navPC = $('.nav_container')
    const navMobile = $('.nav_container_mobile')
    const body = $('body')

    $(window).scroll(function(){
        if(scrollDelay){
            scrollDelay=false;
            height = $(document).scrollTop();

            if(200<height){
                navPC.addClass('on')
            }else{
                navPC.removeClass('on')
                navPC.removeClass('show')
            }

            setTimeout(()=>{
                scrollDelay=true;
            },10)
        }
    })
    navPC.on({
        mouseleave:function(){
            if(navPC.hasClass('on')){
                navPC.removeClass('show')
            }
        },
    })
    $('.nav_container .nav_head').on({
        mouseenter:function(){
            if(navPC.hasClass('on')){
                navPC.addClass('show')
            }
        },
        click:function(){
            if(navPC.hasClass('on') && navPC.hasClass('show')){
                navPC.removeClass('show')
            }
        }
    })
    var navSwitchMobile = false;
    $('.nav_container_mobile .nav_head').on({
        click:function(){
            if(navSwitchMobile==false){
                console.log('false')
                navMobile.addClass('show')
            }else{
                navMobile.removeClass('show')
            }
            navSwitchMobile = !navSwitchMobile;
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