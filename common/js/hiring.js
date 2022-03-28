
$(document).ready(function () {

    AfterLoading();

    function AfterLoading () {
        setTimeout( () => {  $(".hiring__title").addClass("on"); }, 200);
        setTimeout( () => { $(".box_01").addClass("on"); },400 );
    }

    // Select 01
    $('input[name="hiringPosition"]').on("click", function (e) {
        NextContentBox(e, "#content_box-02");

        $("input[name='position']").val(e.target.value)
    });


    


    // 유효성검사
    var getMail = RegExp(/^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/);
    var getCheck= RegExp(/^[a-zA-Z0-9]{4,12}$/);
    var getName = /^[가-힣]{2,4}$/;
    var getTel = /^(01[016789]{1}|02|0[3-9]{1}[0-9]{1})-?[0-9]{3,4}-?[0-9]{4}$/;
    let getUrl = /(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;

    $("#contactName").keyup(function (){
        if(!getName.test($(this).val())){
            $(this).parent(".in-box__box-wrap").removeClass("confirm").addClass("error");
            $("#contactName").focus();
        }else{
            $(this).parent(".in-box__box-wrap").removeClass("error").addClass("confirm");
        }
    });

    $('#contactEmail').keyup(function () {
        if(!getMail.test($(this).val())){
            $(this).parent(".in-box__box-wrap").addClass("error");
            $("#contactEmail").focus();
        }else{
            $(this).parent(".in-box__box-wrap").removeClass("error").addClass("confirm");
        }
    });

    $('#contactTel').keyup(function () {
        if(!getTel.test($(this).val())){
            $(this).parent(".in-box__box-wrap").addClass("error");
            $("#contactTel").focus();
        }else{
            $(this).parent(".in-box__box-wrap").removeClass("error").addClass("confirm");
        }
    });


    // 첨부파일
    $("#contactResume").on('change',function(){
        let fileName = $("#contactResume").val();
        if(!fileName){
            $(this).parent(".in-box__box-wrap").addClass("error");
            $("#contactResumeLabel").text("이력서를 첨부해 주세요");
        }else{
            $(this).parent(".in-box__box-wrap").removeClass("error").addClass("confirm");

            let fileNameNew = fileName.split('/').pop().split('\\').pop(); // 파일명만 추출
            $("#contactResumeLabel").text(fileNameNew);

        }
    });


    // 개인정보처리취급방침
    $(".policy-check__page").on("click", function (e) {
        e.preventDefault();
        console.log("클릭함");
        $("body").css("overflow-y", "hidden");
        $(".agree_popup_wrap").addClass("on")
    })

    $(".agree_popup_close").on("click", function (e) {
        $(".agree_popup_wrap").removeClass("on")
        $("body").css("overflow-y", "scroll");
        
    })



    function NextContentBox (e, NextBox) {
        if($(e.target).val()){
            if(!$(NextBox).hasClass("on")){
                $(NextBox).addClass("on");

                setTimeout( () => {
                    let scrollPosition02 = $(NextBox).offset().top;
                    $("html, body").animate({
                        scrollTop : scrollPosition02
                    }, 500);
                }, 200);
            }
        }
    }


});