$(document).ready(function(){
    $.get(`common/inc/header.html`, (data) => { $("#header").prepend(data);})
    $.get(`common/inc/nav.html`, (data) => { $("#nav").prepend(data);})
    $.get(`common/inc/circle.html`, (data) => { $("#downCircle").prepend(data);})
    for(let i = 0; i<= $(".line").length - 1; i++){
        $.get(`common/inc/line.html`, (data)=>{ $(".line").eq(i).prepend(data);})
    }
    for(let i = 0; i<= $(".blink").length -1; i++){
        $.get(`common/inc/ico_blink.html`, (data) => { $(".blink").eq(i).prepend(data);})
    }
})