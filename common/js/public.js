

$(document).ready(function(){
    $.get(`common/inc/header.html`, (data) => { $("#header").prepend(data);})
    $.get(`common/inc/nav.html`, (data) => { $("#nav").prepend(data);})
    $.get(`common/inc/circle.html`, (data) => { $("#downCircle").prepend(data);})
    $.get(`common/inc/footer.html`, (data) => { $("#footer").prepend(data)})
    $.get(`common/inc/cursor.html`, (data) => { $("#cursor").prepend(data)})
    for(let i = 0; i<= $(".line").length - 1; i++){
        $.get(`common/inc/line.html`, (data)=>{ $(".line").eq(i).prepend(data);})
    }
    for(let i = 0; i<= $(".blink").length - 1; i++){
        $.get(`common/inc/ico_blink.html`, (data) => { $(".blink").eq(i).prepend(data);})
    }
    for(let i = 0; i<= $(".btn__read_more").length - 1; i++){
        $.get(`common/inc/read_more.html`, (data) => { $(".btn__read_more").eq(i).prepend(data);})
    }
})