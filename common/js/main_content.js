//#region sect4 s4c2 list======================================
const $s4c2Wrapper = $('#s4c2Wrapper')
const $s4c2WrapperMobile = $('#s4c2WrapperMobile')
var s4c2WrapperTop = $s4c2Wrapper.offset().top;
const s4c2Contents = [
    {
        year: "©2021",
        img: "/common/image/slide_dubai.png",
        title: "SMART KOREA, MOVING THE WORLD TO YOU",
        description: "VIRTUAL SHOWROOM",
    },
    {
        year: "©2020",
        img: "/common/image/slide_samsung.png",
        title: "BESPOKE SAMSUNG",
        description: "VIRTUAL SHOWROOM",
    },
    {
        year: "©2021",
        img: "/common/image/slide_zepeto.png",
        title: "ZEPETO",
        description: "ex.UI/UX design, branding, content, concept",
    },
    {
        year: "©2020",
        img: "/common/image/slide_luminous.png",
        title: "Luminous acc",
        description: "(Virtual Showroom)",
    },
    {
        year: "©2020",
        img: "/common/image/slide_04.png",
        title: "slide-05 title",
        description: "(slide-05 description)",
    },
    {
        year: "©2020",
        img: "/common/image/slide_04.png",
        title: "slide-06 title",
        description: "(slide-06 description)",
    },
    {
        year: "©2020",
        img: "/common/image/slide_04.png",
        title: "slide-07 title",
        description: "(slide-07 description)",
    },
    {
        year: "©2020",
        img: "/common/image/slide_04.png",
        title: "slide-08 title",
        description: "(slide-08 description)",
    },
    {
        year: "©2020",
        img: "/common/image/slide_04.png",
        title: "slide-09 title",
        description: "(slide-09 description)",
    },
    {
        year: "©2020",
        img: "/common/image/slide_04.png",
        title: "slide-10 title",
        description: "(slide-10 description)",
    },
]
for (i = 0; i <= s4c2Contents.length - 1; i++) {
    var $s4SwiperList =
        $(
            `<li class="s4__c2_listitem mouse-change-link">
            <a href="#">
                <p class="s4__c2_p1">${s4c2Contents[i].year}</p>
                <div class="s4__c2_imgBox">
                <img id="s4Img${i + 1}" src="${s4c2Contents[i].img}" alt=""></img>
                </div>
                <p class="s4__c2_p2">${s4c2Contents[i].title}</p>
                <p class="s4__c2_p3">${s4c2Contents[i].description}</p>
            </a>
            </li>`
        )
    $s4c2Wrapper.append($s4SwiperList)
}
for (i = 0; i <= s4c2Contents.length - 1; i++) {
    var $s4SwiperList =
        $(
            `<li class="s4__c2_listitem_mobile mouse-change-link swiper-slide">
            <a href="#">
                <p class="s4__c2_p1">${s4c2Contents[i].year}</p>
                <div class="s4__c2_imgBox">
                <img id="s4Img${i + 1}" src="${s4c2Contents[i].img}" alt=""></img>
                </div>
                <p class="s4__c2_p2">${s4c2Contents[i].title}</p>
                <p class="s4__c2_p3">${s4c2Contents[i].description}</p>
            </a>
            </li>`
        )
    $s4c2WrapperMobile.append($s4SwiperList)
}
//#endregion sect4 s4c2 list====================================