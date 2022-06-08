$(window).ready(function(){
    console.log('hi')
    $("#projectChange a").mouseenter(function(){
        $(this).addClass("hovered")
    })
    $("#projectChange a").mouseleave(function(){
        $(this).removeClass("hovered")
    })
})
