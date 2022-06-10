
$(window).ready(function () {

  /*
  ===project class
  */
  const colorStyle = document.getElementById("colorStyle")
  const projectClassBtn = document.querySelectorAll("#projectClassList li")
  const projectListItem = document.querySelectorAll(".project2--listItem")
  const project2ListContainer = document.getElementById("project2ListContainer");
  const project2ListWrap = document.getElementById("project2ListWrap");
  const projectList = document.getElementById("project2List");
  const projectIdx = document.getElementById("projectIdx")
  const projectTotalIdx = document.getElementById("projectTotalIdx")
  const projectThumbList = document.getElementById("projectThumbList")
  const projectThumbItem = projectThumbList.querySelectorAll("li")
  var projectIdxNumber = 1;

  gsap.to(projectList, {
    y: "-100%", top: "100%",
    scrollTrigger: {
      trigger: colorStyle,
      start: "top top",
      end: "bottom bottom",
      scrub: 1,
      invalidateOnRefresh: true,
      ease: "none",
    }
  })

  projectClassBtn.forEach((target, index) => {//all,web,virtualshowroom,metaverse buttons

    let thisClass = target.getAttribute("data-project-class")
    let thisList = document.querySelectorAll(`.${thisClass}Project`)
    let thisLength = thisList.length;
    let thisSpan = target.querySelector("span")
    thisSpan.innerText = thisLength;

    target.addEventListener("click", (e) => {

      $(window).scrollTop(0);
      ScrollTrigger.refresh(true);
      gsap.set(projectList, { y: "0%", top: "0%", })

      projectIdxNumber = 1;
      projectTotalIdx.innerText = thisLength;
      projectIdx.innerText = 1;

      for (var i = 0; i < projectClassBtn.length; i++) {
        projectClassBtn[i].classList.remove("clicked")
      }
      target.classList.add("clicked")

      projectListItem.forEach(function (target, index) {//class delete
        target.classList.remove("appear","show")
      })
      thisList.forEach(function (target, index) {
        target.classList.add("show")//class change
        setTimeout(() => {
          target.classList.add("appear")
        }, 200)

        let number = target.querySelector(".project2--list-num p");//index number change
        let indexNumber = index + 1
        if (indexNumber <= 9) {
          indexNumber = String(indexNumber)
          number.innerText = "0" + indexNumber;
        } else {
          number.innerText = index + 1;
        }
      })


    })

    target.addEventListener("mouseenter", (e) => {
      target.classList.add("hovered")
    })

    target.addEventListener("mouseleave", (e) => {
      target.classList.remove("hovered")
    })

  })
  /*
  === project list
  */
  projectTotalIdx.innerText = projectThumbItem.length//change the project length number with init
  
  function projectIdxFix() {projectIdx.innerText = projectIdxNumber;}//change the project index number every 0.5sec
  setInterval(projectIdxFix, 500);

  projectListItem.forEach((target, index) => {

    target.addEventListener("mouseenter", (e) => {

      for(i = 0; i<projectListItem.length; i++){
        projectListItem[i].classList.remove("on-mobile")
      }
      target.classList.add("hovered")

      var indexNumber = Number(target.querySelector(".project2--list-num p").innerText)//chage the project list number
      projectIdxNumber = indexNumber;

      var thisColor = target.getAttribute("data-color")//chage the background-color
      colorStyle.style.background = `#${thisColor}`

      var thisImage = target.getAttribute("data-image");//chage the thumb-nail image

      projectThumbItem.forEach(function (target, index) {
        var thisImageName = target.getAttribute("data-image-name")
        target.classList.remove("show")
        if (thisImageName == thisImage) {
          target.classList.add("show")
        }
      })

    })

    target.addEventListener("mouseleave", (e) => {
      target.classList.remove("hovered")
      for(i = 0; i<projectListItem.length; i++){
        projectListItem[i].classList.add("on-mobile")
      }
    })

  })

  /*
  === project thumbnail
  */
 const projectThumbMoving = $("#projectThumbMoving")
  // var project2ListWrapTop = project2ListWrap.getBoundingClientRect().top;
  // var project2ListWrapLeft = project2ListWrap.getBoundingClientRect().left;
  var project2ListContainerW = project2ListContainer.clientWidth;
  var project2ListContainerH = project2ListContainer.clientHeight;

  var ThumbMovingW = projectThumbMoving.outerWidth();
  var ThumbMovingH = projectThumbMoving.outerHeight();

  $(window).resize(function () {
    ThumbMovingW = projectThumbMoving.outerWidth();
    ThumbMovingH = projectThumbMoving.outerHeight();
    project2ListWrapTop = project2ListWrap.getBoundingClientRect().top;
    project2ListWrapLeft = project2ListWrap.getBoundingClientRect().left;
    project2ListContainerW = project2ListContainer.clientWidth;
    project2ListContainerH = project2ListContainer.clientHeight;
  })
  function projectThumbMovingFn(e) {
    var x = (e.clientX - project2ListContainerW / 2) / 2 - ThumbMovingW / 2;
    // var y = (e.clientY - project2ListContainerH / 5) / 4 - ThumbMovingH / 2;
    var y = (e.clientY - project2ListContainerH / 2) / 2 - ThumbMovingH / 2;
    TweenLite.to(projectThumbMoving, 1, {
      css: {
        transform: `matrix(1,0,0,1,${x},${y})`,
      },
      scrub: -1,
      delay: 0.01,
      ease: Power1.none,
    })
  }
  $("#project2ListWrap").mousemove(function (e) {
    project2ListWrapTop = project2ListWrap.getBoundingClientRect().top;
    project2ListWrapLeft = project2ListWrap.getBoundingClientRect().left;
    projectThumbMovingFn(e);
  })
  $("#project2ListWrap").mouseenter(function () {
    projectThumbMoving.addClass("enter")
  })
  $("#project2ListWrap").mousemove(function () {
    projectThumbMoving.addClass("enter")
  })
  $("#project2ListWrap").mouseleave(function () {
    projectThumbMoving.removeClass("enter")
    colorStyle.style.background = `#000000`
  })

})

function Mobile() {return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);}
console.log(Mobile())
if(Mobile()){
  $(".project2--index-num").addClass("on-mobile")
}
setTimeout(()=>{
    $(".project2--listItem").addClass("on-mobile")
})