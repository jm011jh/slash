$(document).ready(function () {
    var lastScrollTop = 0;
    var delta = 1;
    var scrollDirection = true;
    var rotate = 0;

    var checkScrollSpeed = (function () {
        var lastPos, newPos, timer, delta,
            delay = 500;

        function clear() {
            lastPos = null;
            delta = 0;
        }
        clear();
        return function () {
            newPos = window.scrollY;
            if (lastPos != null) {
                delta = newPos - lastPos;
            }
            lastPos = newPos;
            clearTimeout(timer);
            timer = setTimeout(clear, delay);
            return (Math.abs(delta)/45 + 0.7);
        }
    })();
    const circle = $('#circleSvg');
    $(window).scroll(function () {
        var scrollTop = $(this).scrollTop();
        if (Math.abs(lastScrollTop - scrollTop) <= delta) return;
        if ((scrollTop > lastScrollTop) && (lastScrollTop > 0)) {
            scrollDirection = true;
        } else {
            scrollDirection = false;
        }
        lastScrollTop = scrollTop;
    })
    function rotating() {
        var intervalTime = Math.abs(checkScrollSpeed())
        if (scrollDirection) {
            rotate = rotate + intervalTime;
            circle.css({ "transform": `translate(-50%,-50%) rotate(${rotate}deg)` })
        } else {
            rotate = rotate - intervalTime;
            circle.css({ "transform": `translate(-50%,-50%) rotate(${rotate}deg)` })
        }
        if(Math.floor(Math.abs(rotate)) == 360){
            rotate = 0;
        }
        // console.log(Math.floor(Math.abs(rotate)))
    }
    setInterval(rotating, 20)
})