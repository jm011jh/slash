$(document).ready(function(){
/*--------------------
Vars
--------------------*/
const $menu = document.querySelector('.menu')
const $items = document.querySelectorAll('.menu--item')
const $bgs = document.querySelectorAll('.img--box')
const $pagination = document.querySelectorAll('.menu--pagination-list-box');
const $paginationBG = document.querySelectorAll('.menu--pagination-list');

let menuWidth = $menu.offsetWidth
let itemWidth = $items[0].offsetWidth
let wrapWidth = $items.length * itemWidth
let bgWidth = $bgs[0].offsetWidth
let paginationWidth = $paginationBG[0].offsetWidth
let paginationWrapWidth = $pagination.length * paginationWidth
console.log(paginationWidth)

let scrollSpeed = 0
let oldScrollY = 0
let scrollY = 0
let y = 0

/*--------------------
Lerp
--------------------*/
const lerp = (v0, v1, t) => {return v0 * ( 1 - t ) + v1 * t}


/*--------------------
Dispose
--------------------*/
const dispose = (scroll) => {
  var answer = (Math.floor(scroll)/wrapWidth)*100
  // console.log(answer)
  gsap.set($items, {
    x: (i) => {
      return i * itemWidth + scroll
    },
    modifiers: {
      x: (x, target) => {
        const s = gsap.utils.wrap(-itemWidth - 100, wrapWidth - itemWidth - 100, parseInt(x))
        return `${s}px`
      }
    }
  })
  gsap.set($pagination, {
    x: (i) => {
      return i * paginationWidth + scroll/wrapWidth * paginationWrapWidth
    },
    modifiers: {
      x: (x, target) => {
        const s = gsap.utils.wrap(-paginationWidth, paginationWrapWidth - paginationWidth, parseInt(x))
        return `${-s}px`
      }
    }
  })
  gsap.set($bgs, {
    x: (i) => {
      return i * bgWidth + scroll
    },
    modifiers: {
      x: (x, target) => {
        
        const s = gsap.utils.wrap(-itemWidth - 100, wrapWidth - itemWidth - 100, parseInt(x))
        return `${-s/80}%`
      }
    }
  })
} 
dispose(0)


/*--------------------
Wheel
--------------------*/
const handleMouseWheel = (e) => {
  scrollY -= e.deltaY * 0.9
}


/*--------------------
Touch
--------------------*/
let touchStart = 0
let touchX = 0
let isDragging = false
const handleTouchStart = (e) => {
  touchStart = e.clientX || e.touches[0].clientX
  isDragging = true
  $menu.classList.add('is-dragging')
}
const handleTouchMove = (e) => {
  if (!isDragging) return
  touchX = e.clientX || e.touches[0].clientX
  scrollY += (touchX - touchStart) * 2.5
  touchStart = touchX
}
const handleTouchEnd = () => {
  isDragging = false
  $menu.classList.remove('is-dragging')
}


/*--------------------
Listeners
--------------------*/
$menu.addEventListener('mousewheel', handleMouseWheel)

$menu.addEventListener('touchstart', handleTouchStart)
$menu.addEventListener('touchmove', handleTouchMove)
$menu.addEventListener('touchend', handleTouchEnd)

$menu.addEventListener('mousedown', handleTouchStart)
$menu.addEventListener('mousemove', handleTouchMove)
$menu.addEventListener('mouseleave', handleTouchEnd)
$menu.addEventListener('mouseup', handleTouchEnd)

$menu.addEventListener('selectstart', () => { return false })


/*--------------------
Resize
--------------------*/
window.addEventListener('resize', () => {
  menuWidth = $menu.offsetWidth
  itemWidth = $items[0].offsetWidth
  wrapWidth = $items.length * itemWidth
  bgWidth = $bgs[0].offsetWidth
})


/*--------------------
Render
--------------------*/
const render = () => {
  requestAnimationFrame(render)
  y = lerp(y, scrollY, 0.1)
  dispose(y)  
}
render()


/*--------------------
letter-divide
--------------------*/
$(".item--tit").each(function(index,item){

  var text = $(this).text();
  var arr = text.split("");
  var space = /\s/g;

  $(this).empty();
  for(i=0;i<arr.length;i++){
    if(arr[i].match(space)){
      var span = $("<br>")
      span.appendTo($(this))
    }else{
      var spanLv1 = $("<span></span>")
      var spanLv2 = $("<span>"+ arr[i] + "</span>")
      var spanLv2Clone = $("<span>"+ arr[i] + "</span>")
      spanLv1.addClass("tit-lv1")
      spanLv2.addClass("tit-lv2")
      spanLv2.addClass("tit-lv2-real")
      spanLv2Clone.addClass("tit-lv2")
      spanLv2Clone.addClass("tit-lv2-clone")
      
      spanLv2.appendTo(spanLv1)
      spanLv2Clone.appendTo(spanLv1)

      spanLv1.appendTo(this)
    }
  }

})
$(".item--year").each(function(index,item){
  var text = $(this).text();
  var pReal = $("<p>" + text + "</p>")
  var pFake = $("<p>" + text + "</p>")
  $(this).empty()
  pReal.addClass('p-real')
  pFake.addClass('p-fake')
  pReal.appendTo(this)
  pFake.appendTo(this)
})
$(".item--class").each(function(index,item){
  var text = $(this).text();
  var pReal = $("<p>" + text + "</p>")
  var pFake = $("<p>" + text + "</p>")
  $(this).empty()
  pReal.addClass('p-real')
  pFake.addClass('p-fake')
  pReal.appendTo(this)
  pFake.appendTo(this)
})
$(".item--num").each(function(index,item){
  var text = $(this).text();
  var pReal = $("<p>" + text + "</p>")
  var pFake = $("<p>" + text + "</p>")
  $(this).empty()
  pReal.addClass('p-real')
  pFake.addClass('p-fake')
  pReal.appendTo(this)
  pFake.appendTo(this)
})
/*--------------------
menu-item function
--------------------*/
$(".menu--item").mouseenter(function(){
  $(".menu--item").removeClass('is-hover')
  $(this).addClass('is-hover')
})
$(".menu--item").mouseleave(function(){
  $(this).removeClass('is-hover')
})

})