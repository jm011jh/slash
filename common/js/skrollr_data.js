function setAttr(el, attrs) {
    for (var key in attrs) {
        el.setAttribute(key, attrs[key]);
    }
}

//#region sect3==================================================
const sect3 = document.getElementById('sect3')
const s3c1f1 = document.getElementById('s3c1f1')
const s3c1f2 = document.getElementById('s3c1f2')
const s3c1f3 = document.getElementById('s3c1f3')
const s3c1f1img1 = document.getElementById('s3c1f1img1')
const s3c1f1img2 = document.getElementById('s3c1f1img2')
const s3c1f1img3 = document.getElementById('s3c1f1img3')
const s3c1f2img1 = document.getElementById('s3c1f2img1')
const s3c1f2img2 = document.getElementById('s3c1f2img2')
const s3c1f2img3 = document.getElementById('s3c1f2img3')
const s3c1f3img1 = document.getElementById('s3c1f3img1')
const s3c1f3img2 = document.getElementById('s3c1f3img2')
const s3c1f3img3 = document.getElementById('s3c1f3img3')
setAttr(s3c1f1, {
    "data-3500": "left:50%;top:50%;transform:translate(-50%,-50%);opacity:1;",
    "data-4500": "left:2%;top:75%;transform:translate(0%,-50%);opacity:1;",
})
setAttr(s3c1f2, {
    "data-3500": "left:50%;transform:translate(-50%,-50%);opacity:1;",
    "data-4500": "left:98%;transform:translate(-100%,-50%);opacity:1;",
})
setAttr(s3c1f3, {
    "data-3500": "left:50%;top:50%;transform:translate(-50%,-50%);opacity:1;",
    "data-4500": "left:2%;top:25%;transform:translate(0%,-50%);opacity:1;",
})
setAttr(s3c1f1img1, {
    "data-2700": "opacity:0",
    "data-3000": "opacity:1",
    "data-4800": "opacity:1",
    "data-5000": "opacity:0",
})
setAttr(s3c1f2img1, {
    "data-2700": "opacity:0",
    "data-3000": "opacity:1",
    "data-4800": "opacity:1",
    "data-5000": "opacity:0",
})
setAttr(s3c1f3img1, {
    "data-2700": "opacity:0",
    "data-3000": "opacity:1",
    "data-4800": "opacity:1",
    "data-5000": "opacity:0",
})
setAttr(s3c1f1img2, {
    "data-4950": "opacity:0",
    "data-5000": "opacity:1",
    "data-5800": "opacity:1",
    "data-6000": "opacity:0",
})
setAttr(s3c1f2img2, {
    "data-4950": "opacity:0",
    "data-5000": "opacity:1",
    "data-5800": "opacity:1",
    "data-6000": "opacity:0",
})
setAttr(s3c1f3img2, {
    "data-4950": "opacity:0",
    "data-5000": "opacity:1",
    "data-5800": "opacity:1",
    "data-6000": "opacity:0",
})
setAttr(s3c1f1img3, {
    "data-5950": "opacity:0",
    "data-6000": "opacity:1",
    "data-6500": "opacity:1",
    "data-7000": "opacity:0",
})
setAttr(s3c1f2img3, {
    "data-5950": "opacity:0",
    "data-6000": "opacity:1",
    "data-6500": "opacity:1",
    "data-7000": "opacity:0",
})
setAttr(s3c1f3img3, {
    "data-5950": "opacity:0",
    "data-6000": "opacity:1",
    "data-6500": "opacity:1",
    "data-7000": "opacity:0",
})
//#endregion sect3===============================================
//#region sect4==================================================
const s4SwiperContents = [
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
const $s4c2Wrapper = $('#s4c2Wrapper')
for (i = 0; i <= s4SwiperContents.length - 1; i++) {
    var $s4SwiperList =
        $(
            `<li class="s4__c2_listitem mouse-change-link">
            <a href="#">
                <p class="s4__c2_p1">${s4SwiperContents[i].year}</p>
                <div class="s4__c2_imgBox">
                <img id="s4Img${i + 1}" src="${s4SwiperContents[i].img}" alt=""></img>
                </div>
                <p class="s4__c2_p2">${s4SwiperContents[i].title}</p>
                <p class="s4__c2_p3">${s4SwiperContents[i].description}</p>
            </a>
            </li>`
        )
    $s4c2Wrapper.append($s4SwiperList)
}
const sect4 = document.getElementById('sect4')
const s4c2Wrapper = document.getElementById('s4c2Wrapper')
const s4Img1 = document.getElementById('s4Img1')
const s4Img2 = document.getElementById('s4Img2')
const s4Img3 = document.getElementById('s4Img3')
const s4Img4 = document.getElementById('s4Img4')
const s4Img5 = document.getElementById('s4Img5')
const s4Img6 = document.getElementById('s4Img6')
const s4Img7 = document.getElementById('s4Img7')
const s4Img8 = document.getElementById('s4Img8')
const s4Img9 = document.getElementById('s4Img9')
const s4Img10 = document.getElementById('s4Img10')
// setAttr(s4c2Wrapper,{
//     "data-6200": "@data-moving:0;",
//     "data-7499": "@data-moving:0;",
//     "data-7500": "@data-moving:1;",
//     "data-8499": "@data-moving:1;",
//     "data-8500": "@data-moving:2;",
//     "data-9499": "@data-moving:2;",
//     "data-9500": "@data-moving:3;",
//     "data-10499": "@data-moving:3;",
//     "data-10500": "@data-moving:4;",
//     "data-11449": "@data-moving:4;",
//     "data-11500": "@data-moving:5;",
//     "data-12449": "@data-moving:5;",
//     "data-12500": "@data-moving:6;",
//     "data-13449": "@data-moving:6;",
//     "data-13500": "@data-moving:7;",
// })
setAttr(s4c2Wrapper,{
    "data-8800": "transform:translate(0%,-50%)",
    "data-13500": "transform:translate(-100%,-50%)",
})
setAttr(s4Img1, {
    "data-6200": "transform:translate(-20%,0%);",
    "data-7500": "transform:translate(-25%,0%);",
})
setAttr(s4Img2, {
    "data-6200": "transform:translate(-20%,0%);",
    "data-7500": "transform:translate(-30%,0%);",
})
setAttr(s4Img3, {
    "data-6200": "transform:translate(-20%,0%);",
    "data-7500": "transform:translate(-28%,0%);",
})
setAttr(s4Img4, {
    "data-6200": "transform:translate(-20%,0%);",
    "data-7500": "transform:translate(-23%,0%);",
})
setAttr(s4Img5, {
    "data-6200": "transform:translate(-20%,0%);",
    "data-7500": "transform:translate(-33%,0%);",
})
//#endregion sect4===============================================