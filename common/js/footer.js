$(document).ready(function(){
//#region resize function=====================================
$(window).resize(function(){
    sizeRefresh()
    ftC1Cloning();
});
//#endregion resize function==================================
//#region sticky circle function==============================
    const footerSticky = document.getElementById('footerSticky');
    const $footerSticky = $('#footerSticky');
    const $footerStickyCircle = $('#footerStickyCircle');
    const $footerStickyBlend = $('#footerStickyBlend')
    var stickyTop = footerSticky.getBoundingClientRect().top;
    var stickyLeft = footerSticky.getBoundingClientRect().left;
    var stickyW = $footerSticky.outerWidth();
    var stickyH = $footerSticky.outerHeight();
    var circleW = $footerStickyCircle.outerWidth();
    var circleH = $footerStickyCircle.outerHeight();

    $('.footer__c2_sticky').mousemove(function(e){
        stickyTop = footerSticky.getBoundingClientRect().top;
        stickyLeft = footerSticky.getBoundingClientRect().left;
        var x = e.clientX - stickyLeft - stickyW/2;
        var y = e.clientY - stickyTop - stickyH/2;
        TweenLite.to($footerStickyCircle,1,{
            css:{
                transform:`matrix(1,0,0,1,${x/2},${y/2})`,
            }
        })
        console.log('move')
    })
    $('.footer__c2_sticky').mouseleave(function(){
        $footerStickyBlend.removeClass('blended')
            TweenLite.to($footerStickyCircle,1,{
                css:{
                    transform:`matrix(1,0,0,1,0,0)`,
                }
            })
        console.log('leave')
    })
    $('.footer__c2_sticky').mouseenter(function(){
        $footerStickyBlend.addClass('blended')
    })
//#endregion sticky circle function==============================
function sizeRefresh(){
    stickyTop = footerSticky.getBoundingClientRect().top;
    stickyLeft = footerSticky.getBoundingClientRect().left;
    stickyW = $footerSticky.outerWidth();
    stickyH = $footerSticky.outerHeight();
    circleW = $footerStickyCircle.outerWidth();
    circleH = $footerStickyCircle.outerHeight();
}
})
