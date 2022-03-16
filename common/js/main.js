$(document).ready(function(){
    $('.s1__c1').addClass('on-view')
//#region declare============================================================
    var winW = $(window).width();
    var winH = $(window).height();
    var windowScrollTop = $(document).scrollTop();
    var windowScrollBot = windowScrollTop + winH;
    const s1 = $('#sect1');
    const s2 = $('#sect2');
    const s3 = $('#sect3');
    const s4 = $('#sect4');
    const s5 = $('#sect5');
    const s6 = $('#sect6');
    const s7 = $('#sect7');
    const footer = $('#footer');
    const colorStyle = $('#colorStyle')
    var s1t = s1.offset().top;
    var s2t = s2.offset().top;
    var s3t = s3.offset().top;
    var s4t = s4.offset().top;
    var s5t = s5.offset().top;
    var s6t = s6.offset().top;
    var s7t = s7.offset().top;
    var footert = footer.offset().top;

    var sect4top = Math.floor(s4t);
    var sect5top = Math.floor(s5t);
    var sect4Height = sect5top - sect4top;

    const s3c1f1 = document.getElementById('s3c1f1')
    const s3c1f2 = document.getElementById('s3c1f2')
    const s3c1f3 = document.getElementById('s3c1f3')

    const s1c2belt = $('.s1__c2_belt');
    const s1c2beltWrap = $('.s1__c2_wrap');
    var s1c2beltWrapW = s1c2beltWrap.width();
    var s1c2beltL = s1c2belt.length;
    var s1c2beltW = s1c2belt.width();

    const s1c3belt = $('.s1__c3_belt');
    const s1c3beltWrap = $('.s1__c3_wrap');
    var s1c3beltWrapW = s1c3beltWrap.width();
    var s1c3beltL = s1c3belt.length;
    var s1c3beltW = s1c3belt.width();
    var scrollDelay = true;
    var scrollPadding = 300;//스크롤여분값
//#endregion declare=========================================================
//#region sect4 s4c2 list======================================
const $s4c2Wrapper = $('#s4c2Wrapper')
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
//#endregion sect4 s4c2 list====================================

function s3c1Keep(dataNum){//for sect3 img function
    TweenLite.to(s3c1f1,0.2,{
        css:{top:"75%",left:"2%"}
    })
    TweenLite.to(s3c1f2,0.2,{
        css:{top:"50%",left:"98%",x:"-100%",y:"-50%"}
    })
    TweenLite.to(s3c1f3,0.2,{
        css:{top:"25%",left:"2%",x:"0%"}
    })
    $('.s3__c1').removeClass('opac0')
    $('.s3__c1').addClass('opac1')
    $('.s3__c1_fig').attr({"data-number":dataNum})
}
function mainFunction(){
            //#region body scroll check==================================================
            //#region scroll-detect check================================================
        $('.s6__c1_col').each(function(){
            var thisTop = $(this).offset().top;
            var parentBox = $(this).find('.s6__c1_padding')
            var stretchBox = $(this).find('.s6__c1_imgBox')
            var stretchW = stretchBox.width()
            if(thisTop<windowScrollBot - scrollPadding && windowScrollTop < thisTop){
                parentBox.css({"width":stretchW})
            }else{
                parentBox.css({"width":"0px"})
            }
        })
        //#endregion scroll-detect check=============================================
            windowScrollTop = $(document).scrollTop();
            windowScrollBot = windowScrollTop + winH;
            if(200 < windowScrollTop && windowScrollTop < (s2t - scrollPadding)){
                colorStyle.removeClass("white")
                colorStyle.addClass("black")
            }else if((s2t - scrollPadding) <= windowScrollTop && windowScrollTop < (s3t - scrollPadding)){
                colorStyle.removeClass("white")
                colorStyle.addClass("black")
            }else if((s3t - scrollPadding) <= windowScrollTop && windowScrollTop < (s4t - scrollPadding)){//3
                //#region declare===============================================
                var sect3top = Math.floor(s3t)
                var sect4top = Math.floor(s4t)
                var sect3Height = sect4top - sect3top;
                var sect3partHeight = sect3Height/6
                var sect3for1 = sect3top + sect3partHeight*1
                var sect3for2 = sect3top + sect3partHeight*2
                var sect3for3 = sect3top + sect3partHeight*3
                var sect3for4 = sect3top + sect3partHeight*4
                // var sect3for5 = sect3top + sect3partHeight*5
                // var sect3for6 = sect3top + sect3partHeight*6
                //#endregion declare===============================================
                if(sect3top < windowScrollTop && windowScrollTop <= sect3for1){
                    TweenLite.to(s3c1f1,0.1,{css:{top:"50%",left:"50%",x:"-50%",y:"-50%"}})
                    TweenLite.to(s3c1f2,0.1,{css:{top:"50%",left:"50%",x:"-50%",y:"-50%"}})
                    TweenLite.to(s3c1f3,0.1,{css:{top:"50%",left:"50%",x:"-50%",y:"-50%"}})
                    $('.s3__c1').removeClass('opac1')
                    $('.s3__c1').addClass('opac0')
                    $('.s3__c1_fig').attr({"data-number":"1"})
                }else if(sect3for1 < windowScrollTop && windowScrollTop <= sect3for2){
                    var persent = (((windowScrollTop - sect3for1)*100 /sect3partHeight));
                    TweenLite.to(s3c1f1,0.5,{
                        css:{
                            left: Math.floor(50- persent/2.0615)+"%",
                            top: 1 + Math.floor(50 + persent/4)+"%",
                            x:(-50 + persent/2)+"%",
                            y:"-50%",
                        }
                    });
                    TweenLite.to(s3c1f2,0.5,{
                        css:{
                            left:(50 + (Math.floor(persent/2.0615)))+"%",
                            x:Math.floor(-50 - persent/2)+"%",
                            y:"-50%",
                        }
                    });
                    TweenLite.to(s3c1f3,0.5,{
                        css:{
                            left:Math.floor(50-(persent/2.0615))+"%",
                            top: 1 + ((50 - persent/4))+"%",
                            x:(-51 + persent/2)+"%",
                        }
                    });
                    $('.s3__c1_fig').attr({"data-number":"1"})
                    $('.s3__c1').addClass('opac1')
                    $('.s3__c1').removeClass('opac0')
                }else if(sect3for2 < windowScrollTop && windowScrollTop <= sect3for3){
                    s3c1Keep(1);
                }else if(sect3for3 < windowScrollTop && windowScrollTop <= sect3for4){
                    s3c1Keep(2);
                }else if(sect3for4 < windowScrollTop){
                    s3c1Keep(3);
                }
                colorStyle.removeClass("black")
                colorStyle.addClass("white")
                $s4c2Wrapper.css({"transform":"translate(0%,0%)"})
            }else if((s4t - scrollPadding) <= windowScrollTop && windowScrollTop < (s5t - scrollPadding)){//4
                colorStyle.removeClass("white")
                colorStyle.addClass("black")
            }else if((s5t - scrollPadding) <= windowScrollTop && windowScrollTop < (s6t - scrollPadding)){//5
                $s4c2Wrapper.css({"transform":"translate(-100%,0%)"})
                colorStyle.removeClass("white")
                colorStyle.addClass("black")
            }else if((s6t - scrollPadding) <= windowScrollTop && windowScrollTop < (s7t - scrollPadding)){//6
                colorStyle.removeClass("black")
                colorStyle.addClass("white")
            }else if((s7t - scrollPadding) <= windowScrollTop && windowScrollTop < (footert - scrollPadding)){//7
                colorStyle.removeClass("white")
                colorStyle.addClass("black")
            }else if((footert - scrollPadding) <= windowScrollTop){//footer
                colorStyle.removeClass("white")
                colorStyle.addClass("black")
            }

            if(s4t < (windowScrollTop - scrollPadding) && windowScrollBot < (s5t - scrollPadding)){
                sect4top = Math.floor(s4t);
                sect5top = Math.floor(s5t);
                sect4Height = sect5top - sect4top;
                let persent = ((Math.floor(windowScrollTop - s4t - scrollPadding)/Math.floor(sect4Height - winH - scrollPadding * 2))*100).toFixed(2)
                // console.log(persent)
                $s4c2Wrapper
                TweenLite.to($s4c2Wrapper,0.2,{
                    css:{x:0 - persent + "%"}
                })
            }else if((windowScrollTop - scrollPadding)<=s4t){
                TweenLite.to($s4c2Wrapper,0,{
                    css:{x:"0%"}
                })
            }else if((s5t - scrollPadding)<=windowScrollBot){
                TweenLite.to($s4c2Wrapper,0,{
                    css:{x:"-100%"}
                })

            }
            //#endregion body scroll check===============================================
            //#region circle scroll check================================================
}
    $(window).scroll(function(){
        if(scrollDelay){
            scrollDelay = false;
            setTimeout(()=>{
                scrollDelay=true;
                },10);
            mainFunction();
        };
    });
//#region resize==================================================
    $(window).resize(function(){
        sizeRefresh();
        s1c2Cloning();
        s1c3Cloning();
    });
    function sizeRefresh(){
        s1t = s1.offset().top;
        s2t = s2.offset().top;
        s3t = s3.offset().top;
        s4t = s4.offset().top;
        s5t = s5.offset().top;
        s6t = s6.offset().top;
        s7t = s7.offset().top;
        footert = footer.offset().top;
        winW = $(window).width();
        winH = $(window).height();
        windowScrollTop = $(document).scrollTop();
        sect4top = Math.floor(s4t);
        sect5top = Math.floor(s5t);
        sect4Height = sect5top - sect4top;
        s4c2WrapperTop = $s4c2Wrapper.offset().top;
        mainFunction();
        
    }
//#endregion resize===============================================
//#region sect5=================================================
$('.s5__c1_listWrap').mouseenter(function(){
    $(this).find('a').addClass('hover')
})
$('.s5__c1_listWrap').mouseleave(function(){
    $(this).find('a').removeClass('hover')
})
//#endregion sect5==============================================
})
