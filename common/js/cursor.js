const cursorContainer = $('#cursor');
const cursor = $('.cursor-pointer');
let mouse = {x:0,y:0};
function cursorMove(e){
    TweenLite.to(cursor,0.2,{
        css:{
            left:(e.clientX - $(cursor).outerHeight()/2)+"px",
            top:(e.clientY - $(cursor).outerWidth()/2)+"px"
        }
      });
}
window.addEventListener("mousemove",function(e){
    cursorMove(e)
})
$('.mouse-change').mouseenter(function(){
    cursorContainer.addClass('hover')
})
$('.mouse-change').mouseleave(function(){
    cursorContainer.removeClass('hover')
})
