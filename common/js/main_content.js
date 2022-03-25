//#region sect4 s4c2 list======================================
const $s4c2Wrapper = $('#s4c2Wrapper')
const $s4c2WrapperMobile = $('#s4c2WrapperMobile')
var s4c2WrapperTop = $s4c2Wrapper.offset().top;
const s4c2Contents = [
    {
        year: "©2021",
        img: "/common/image/slide_dku.png",
        title: "DanKuk University Gather Town",
        description: "GATHER TOWN",
    },
    {
        year: "©2020",
        img: "/common/image/slide_summer.png",
        title: "The 7th Summer Condescendence",
        description: "VIRTUAL SHOWROOM",
    },
    {
        year: "©2021",
        img: "/common/image/slide_labstartup.png",
        title: "LAB START UP",
        description: "GATHER TOWN",
    },
    {
        year: "©2020",
        img: "/common/image/slide_yakwang.png",
        title: "Luminous ACC",
        description: "MATTERPORT (Virtual Showroom)",
    },
    {
        year: "©2020",
        img: "/common/image/slide_dubai.png",
        title: "Dubai Expo 2022",
        description: "KRPANO (Virtual Showroom)",
    },
    {
        year: "©2020",
        img: "/common/image/slide_freestyle.png",
        title: "SAMSUNG The Freestyle",
        description: "ZEPETO",
    },
    {
        year: "©2020",
        img: "/common/image/slide_samsung.png",
        title: "SAMSUNG BESPOKE",
        description: "MATTERPORT (Virtual Showroom)",
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
            `<li class="s4__c2_listitem mouse-change">
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
            `<li class="s4__c2_listitem_mobile mouse-change swiper-slide">
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