
$(window).ready(function () {

  /*
  ===project class
  */
  const projectClassBtn = document.querySelectorAll("#projectClassList li")
  const allList = document.querySelectorAll('.project2--listItem')
  const metaverseList = document.querySelectorAll('[data-project-type="metaverse"]')
  const webList = document.querySelectorAll('[data-project-type="web"]')
  const virtualshowroomList = document.querySelectorAll('[data-project-type="virtualshowroom"]')
  projectClassBtn.forEach((target, index) => {

    target.addEventListener("click", (e) => {
      for(var i = 0; i<projectClassBtn.length; i++){
        projectClassBtn[i].classList.remove("clicked")
      }
      target.classList.add("clicked")
    })
    target.addEventListener("mouseenter", (e) => {
      target.classList.add("hovered")
    })
    target.addEventListener("mouseleave", (e) => {
      target.classList.remove("hovered")
    })

  })

  $("#projectClassList li").each(function(){
    var thisClass = $(this).attr("data-project-class")
    console.log(thisClass)
    var length = $(`.${thisClass}Project`).length;
    $(this).find("span").text(length)
  })

  /*
  === project list
  */
  const project2ListContainer = document.getElementById("project2ListContainer");
  const project2ListWrap = document.getElementById("project2ListWrap");
  const projectList = document.getElementById("project2List");
  const projectListItem = document.querySelectorAll(".project2--listItem");
  var projectListH = projectList.offsetHeight;
  var project2ListWrapH = project2ListWrap.offsetHeight;
  const projectIdx = document.getElementById("projectIdx")
  const projectIdxFake = document.getElementById("projectIdxFake")
  const projectTotalIdx = document.getElementById("projectTotalIdx")
  const projectTotalIdxFake = document.getElementById("projectTotalIdxFake")
  var projectIdxNumber = 1;
  var timerId = null;
  function projectIdxFix() {
    projectIdx.innerText = projectIdxNumber;
    console.log("fixed")
  }
  setInterval(projectIdxFix, 500);
  projectListItem.forEach((target, index) => {
    target.addEventListener("mouseenter", (e) => {
      target.classList.add("hovered")
      projectIdxNumber = index + 1;
    })
    target.addEventListener("mouseleave", (e) => {
      target.classList.remove("hovered")
    })
  })
  gsap.to(projectList, {
    y: (project2ListWrapH - projectListH) + "px",
    ease: "none",
    scrollTrigger: {
      trigger: document.body,
      start: "0% top",
      end: "99% bottom",
      scrub: 1,
      invalidateOnRefresh: true
    }
  })


  /*
  === project thumbnail
  */
  var project2ListWrapTop = project2ListWrap.getBoundingClientRect().top;
  var project2ListWrapLeft = project2ListWrap.getBoundingClientRect().left;
  var project2ListContainerW = project2ListContainer.clientWidth;
  var project2ListContainerH = project2ListContainer.clientHeight;

  const projectThumbMoving = $("#projectThumbMoving")
  var ThumbMovingW = projectThumbMoving.outerWidth();
  var ThumbMovingH = projectThumbMoving.outerHeight();
  function projectThumbMovingFn(e) {
    var x = (e.clientX - project2ListContainerW / 2) / 2 - ThumbMovingW / 2;
    var y = (e.clientY - project2ListContainerH / 3) / 2 - ThumbMovingH / 2;
    TweenLite.to(projectThumbMoving, 1, {
      css: {
        transform: `matrix(1,0,0,1,${x},${y})`,
      },
      delay: 0.05,
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
  $("#project2ListWrap").mouseleave(function () {
    projectThumbMoving.removeClass("enter")
  })

})