const cursorContainer = $('#cursor');
const cursor = $('.cursor-pointer');
var winW = $(window).width();
var winH = $(window).height();
$(window).resize(function(){
    winW =$(window).width()
    winH =$(window).height()
})
let mouse = {x:0,y:0};
function cursorMove(e){
    TweenLite.to(cursor,0.3,{
        css:{
            left:(e.clientX - $(cursor).outerHeight()/2)+"px",
            top:(e.clientY - $(cursor).outerWidth()/2)+"px"
        }
      });
}
window.addEventListener("mousemove",function(e){
    cursorMove(e)
    var gutter = 100;
    if(e.clientX<gutter||e.clientX>(winW - gutter)||e.clientY<gutter||e.clientY>(winH - gutter)){
        cursor.addClass('out')
    }else{
        cursor.removeClass('out')
    }
})
$('.mouse-change').mouseenter(function(){
    cursorContainer.addClass('hover')
})
$('.mouse-change').mouseleave(function(){
    cursorContainer.removeClass('hover')
})
$('.mouse-change-link').mouseenter(function(){
    setTimeout(()=>{
        cursorContainer.addClass('link_hover')
    },10)
})
$('.mouse-change-link').mouseleave(function(){
    cursorContainer.removeClass('link_hover')
})