//#region sect4 s4c2 list======================================
const $s4c2Wrapper = $('#s4c2Wrapper')
const $s4c2WrapperMobile = $('#s4c2WrapperMobile')
var s4c2WrapperTop = $s4c2Wrapper.offset().top;
const s4c2Contents = [
    {
        year: "©2021",
        img: "/common/image/slide_dku.jpg",
        title: "DanKuk University Gather Town",
        description: "GATHER TOWN",
        link:"",
    },
    {
        year: "©2020",
        img: "/common/image/slide_summer.jpg",
        title: "The 7th Summer Condescendence",
        description: "VIRTUAL SHOWROOM",
        link:"summer",
    },
    {
        year: "©2021",
        img: "/common/image/slide_labstartup.jpg",
        title: "LAB START UP",
        description: "GATHER TOWN",
        link:"labstartup",
    },
    {
        year: "©2020",
        img: "/common/image/slide_luminous.jpg",
        title: "Luminous ACC",
        description: "MATTERPORT (Virtual Showroom)",
        link:"luminous",
    },
    {
        year: "©2020",
        img: "/common/image/slide_dubai.jpg",
        title: "Dubai Expo 2022",
        description: "KRPANO (Virtual Showroom)",
        link:"dubai2020",
    },
    {
        year: "©2020",
        img: "/common/image/slide_freestyle.jpg",
        title: "SAMSUNG The Freestyle",
        description: "ZEPETO",
    },
    {
        year: "©2020",
        img: "/common/image/slide_samsung.jpg",
        title: "SAMSUNG BESPOKE",
        description: "MATTERPORT (Virtual Showroom)",
        link:"samsungbespoke",
    },
    // {
    //     year: "©2020",
    //     img: "/common/image/slide_linkplus.jpg",
    //     title: "slide-08 title",
    //     description: "(slide-08 description)",
    //     link:"#",
    // },
    {
        year: "©2020",
        img: "/common/image/slide_mireuk.jpg",
        title: "slide-09 title",
        description: "ZEPETO",
        link:"#",
    },
    {
        year: "©2020",
        img: "/common/image/slide_beijing.jpg",
        title: "slide-10 title",
        description: "ZEPETO",
        link:"#",
    },
    {
        year: "©2020",
        img: "/common/image/slide_cheese.jpg",
        title: "slide-11 title",
        description: "KRPANO (Virtual Showroom)",
        link:"#",
    },
]
for (i = 0; i <= s4c2Contents.length - 1; i++) {
    var $s4SwiperList =
        $(
            `<li class="s4__c2_listitem mouse-change">
            <a href="/project/${s4c2Contents[i].link}.html">
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
            <a href="/project/${s4c2Contents[i].link}.html">
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