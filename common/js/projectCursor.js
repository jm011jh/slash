$(window).ready(function(){
    $("#projectChange a").mouseenter(function(){
        $(this).addClass("hovered")
    })
    $("#projectChange a").mouseleave(function(){
        $(this).removeClass("hovered")
    })
})
