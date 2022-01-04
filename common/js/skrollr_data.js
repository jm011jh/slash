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
    const s4SwiperContents = [
        {
            year:"©2021",
            img:"/common/image/slide_dubai.png",
            title:"SMART KOREA, MOVING THE WORLD TO YOU",
            description:"VIRTUAL SHOWROOM",
        },
        {
            year:"©2020",
            img:"/common/image/slide_samsung.png",
            title:"BESPOKE SAMSUNG",
            description:"VIRTUAL SHOWROOM",
        },
        {
            year:"©2021",
            img:"/common/image/slide_zepeto.png",
            title:"ZEPETO",
            description:"ex.UI/UX design, branding, content, concept",
        },
        {
            year:"©2020",
            img:"/common/image/slide_luminous.png",
            title:"Luminous acc",
            description:"(Virtual Showroom)",
        },
    ]
    const $s4SwiperWrapper = $('#s4SwiperWrapper')
    for(i = 0;i<=s4SwiperContents.length - 1;i++){
        var $s4SwiperList =
        $(
            `<li class="swiper-slide">
                <p class="s4__swiper_p1">${s4SwiperContents[i].year}</p>
                <div class="s4__swiper_imgBox">
                    <img id="s4Img${i+1}" src="${s4SwiperContents[i].img}" alt="none">
                </div>
                <p class="s4__swiper_p2">${s4SwiperContents[i].title}</p>
                <p class="s4__swiper_p3">${s4SwiperContents[i].description}</p>
            </li>`
        )
        $s4SwiperWrapper.append($s4SwiperList)
    }
    const s4Img1 = document.getElementById('s4Img1')
    const s4Img2 = document.getElementById('s4Img2')
    const s4Img3 = document.getElementById('s4Img3')
    const s4Img4 = document.getElementById('s4Img4')
    const s4ImgBox1 = document.getElementById('s4ImgBox1')
    const s4ImgBox2 = document.getElementById('s4ImgBox2')
    const s4ImgBox3 = document.getElementById('s4ImgBox3')
    const s4ImgBox4 = document.getElementById('s4ImgBox4')


    function setAttr(el, attrs) {
        for (var key in attrs) {
            el.setAttribute(key, attrs[key]);
        }
    }
    setAttr(s3c1f1, {
        "data-2000": "left:50%;top:50%;transform:translate(-50%,-50%);opacity:1;",
        "data-3000": "left:2%;top:75%;transform:translate(0%,-50%);opacity:1;",
    })
    setAttr(s3c1f2, {
        "data-2000": "left:50%;transform:translate(-50%,-50%);opacity:1;",
        "data-3000": "left:98%;transform:translate(-100%,-50%);opacity:1;",
    })
    setAttr(s3c1f3, {
        "data-2000": "left:50%;top:50%;transform:translate(-50%,-50%);opacity:1;",
        "data-3000": "left:2%;top:25%;transform:translate(0%,-50%);opacity:1;",
    })
    setAttr(s3c1f1img1,{
        "data-1700": "opacity:0",
        "data-2000": "opacity:1",
        "data-3800": "opacity:1",
        "data-4000": "opacity:0",
    })
    setAttr(s3c1f2img1,{
        "data-1700": "opacity:0",
        "data-2000": "opacity:1",
        "data-3800": "opacity:1",
        "data-4000": "opacity:0",
    })
    setAttr(s3c1f3img1,{
        "data-1700": "opacity:0",
        "data-2000": "opacity:1",
        "data-3800": "opacity:1",
        "data-4000": "opacity:0",
    })
    setAttr(s3c1f1img2,{
        "data-3950": "opacity:0",
        "data-4000": "opacity:1",
        "data-4800": "opacity:1",
        "data-5000": "opacity:0",
    })
    setAttr(s3c1f2img2,{
        "data-3950": "opacity:0",
        "data-4000": "opacity:1",
        "data-4800": "opacity:1",
        "data-5000": "opacity:0",
    })
    setAttr(s3c1f3img2,{
        "data-3950": "opacity:0",
        "data-4000": "opacity:1",
        "data-4800": "opacity:1",
        "data-5000": "opacity:0",
    })
    setAttr(s3c1f1img3,{
        "data-4950": "opacity:0",
        "data-5000": "opacity:1",
        "data-5500": "opacity:1",
        "data-6000": "opacity:0",
    })
    setAttr(s3c1f2img3,{
        "data-4950": "opacity:0",
        "data-5000": "opacity:1",
        "data-5500": "opacity:1",
        "data-6000": "opacity:0",
    })
    setAttr(s3c1f3img3,{
        "data-4950": "opacity:0",
        "data-5000": "opacity:1",
        "data-5500": "opacity:1",
        "data-6000": "opacity:0",
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
