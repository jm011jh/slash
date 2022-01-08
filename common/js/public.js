$(document).ready(function () {
    //#region get data from docs==================================================
    $.get(`common/inc/header.html`, (data) => { $("#header").prepend(data); })
    $.get(`common/inc/nav.html`, (data) => { $("#nav").prepend(data); })
    $.get(`common/inc/circle.html`, (data) => { $("#downCircle").prepend(data); })
    $.get(`common/inc/footer.html`, (data) => { $("#footer").prepend(data) })
    $.get(`common/inc/cursor.html`, (data) => { $("#cursor").prepend(data) })
    for (let i = 0; i <= $(".line").length - 1; i++) {
        $.get(`common/inc/line.html`, (data) => { $(".line").eq(i).prepend(data); })
    }
    for (let i = 0; i <= $(".blink").length - 1; i++) {
        $.get(`common/inc/ico_blink.html`, (data) => { $(".blink").eq(i).prepend(data); })
    }
    for (let i = 0; i <= $(".btn__read_more").length - 1; i++) {
        $.get(`common/inc/read_more.html`, (data) => { $(".btn__read_more").eq(i).prepend(data); })
    }
    //#endregion get data from docs===============================================
    //region text animation=======================================================
    const s3c2p1 = $('.s3__c2_p1')
    const s3c2p1Text = s3c2p1.text()
    const s3c2p1arr = s3c2p1Text.split(" ");
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