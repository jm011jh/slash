$(document).ready(function () {
    var winW = $(window).width();
    var winH = $(window).height();
    var windowScrollTop = $(document).scrollTop();
    var windowScrollBot = windowScrollTop + winH;
    //#region get data from docs==================================================
    $.get(`/common/inc/header.html`, (data) => { $("#header").prepend(data); })
    $.get(`/common/inc/nav.html`, (data) => { $("#nav").prepend(data); })
    $.get(`/common/inc/circle.html`, (data) => { $("#downCircle").prepend(data); })
    $.get(`/common/inc/footer.html`, (data) => { $("#footer").prepend(data) })
    $.get(`/common/inc/cursor.html`, (data) => { $("#cursor").prepend(data) })
    for (let i = 0; i <= $(".line").length - 1; i++) {
        $.get(`/common/inc/line.html`, (data) => { $(".line").eq(i).prepend(data); })
    }
    for (let i = 0; i <= $(".blink").length - 1; i++) {
        $.get(`/common/inc/ico_blink.html`, (data) => { $(".blink").eq(i).prepend(data); })
    }
    for (let i = 0; i <= $(".btn__read_more").length - 1; i++) {
        $.get(`/common/inc/read_more.html`, (data) => { $(".btn__read_more").eq(i).prepend(data); })
    }
    for (let i = 0; i <= $(".ico_blink").length - 1; i++) {
        $.get(`/common/inc/ico_blink.html`, (data) => { $(".ico_blink").eq(i).prepend(data);})
    }
    //#endregion get data from docs===============================================
    function publicRefresh(){
        windowScrollTop = $(document).scrollTop();
        windowScrollBot = windowScrollTop + winH;
    }
    function publicFn(){
        $('.scroll-detect').each(function(index,item){
            var thisHeight = $(this).height();
            var thisTop = $(this).offset().top;
            var thisBot = thisTop - thisHeight;
            var topPadding = 100;
    
            if( thisTop < windowScrollBot - topPadding && windowScrollTop < thisTop ){
                $(this).addClass('on-view')
            }else{
                $(this).removeClass('on-view')
            }
        })
        $('.scroll-detect-instant').each(function(index,item){
            var thisTop = $(this).offset().top;
            var topPadding = 100;
    
            if(windowScrollTop < thisTop && thisTop < windowScrollBot - topPadding){
                setTimeout(()=>{
                    $(this).addClass('on-view')
                })
            }
        })
        $('.initiate-detect').each(function(){
            if(windowScrollTop<=200){//초기 스크롤 값이 200보다 위인 경우 on-view부여
                setTimeout(()=>{
                    $('.initiate-detect').addClass('on-view')
                },300)
            }
        })
    }
    $(window).resize(function(){
        publicRefresh();
        publicFn();
    })
    $(window).scroll(function(){
        publicRefresh();
        publicFn();
    })
    //region text animation=======================================================
    const s3c2p1 = $('.s3__c2_p1')
    const s3c2p1Text = s3c2p1.text()
    $('.split_space').each(function(){
        $(this).addClass('flip-text')
        var text = $(this).text();
        var arr = text.split(" ");
        $(this).empty();
        for(i=0;i<arr.length;i++){
            var span = $("<span>"+ arr[i] +"&nbsp;</span>")
            span.addClass('mouse-change')
            span.appendTo($(this))
        }
    })
    $('.split_text').each(function(){
        var text = $(this).text();
        var arr = text.split("");
        $(this).empty();
        for(i=0;i<arr.length;i++){
            var span = $("<span>"+ arr[i] +"</span>")
            // span.addClass('mouse-change')
            span.appendTo($(this))
        }
    })
    $('.flip-text').each(function(){
        var child = $(this).find('>*')
        var childL = child.length;
        $(this).addClass('perspective-text-parent')
        child.addClass('perspective-text-child')
        // for(i = 0; i <= childL; i++){
        //     child.eq(i).attr({"data-delay":i + 1})
        // }
    })
    $('.open-text').each(function(){
        var child1 = $(this).find('>*');
        var child1L = child1.length;
        $(this).addClass('open-text-parent');
        child1.addClass('open-text-child');
        // for(i = 0; i <= child1L; i++){
        //     child1.eq(i).attr({"data-delay":i + 1})
        // }
    })
    //endregion text animation====================================================
})