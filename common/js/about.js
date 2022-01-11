const scroller = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
})
$(window).ready(function(){
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
})