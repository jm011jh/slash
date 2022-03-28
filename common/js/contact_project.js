
$(document).ready(function () {

    AfterLoading();

    function AfterLoading () {
        setTimeout( () => {  $(".hiring__title").addClass("on"); }, 200);
        setTimeout( () => { $(".box_01").addClass("on"); },400 );
    }

    // Select 01
    $('input[name="Selectproject"]').on("click", function (e) {
        NextContentBox(e, "#content_box-02");
    });

    // Select 02
    $('input[name="SelectCase"]').on("click", function (e) {
        NextContentBox(e, "#content_box-03");
    });

    // Select 03
    $('input[name="SelectMoney"]').on("click", function (e) {
        NextContentBox(e, "#content_box-04");
    });

    // Select 04
    
    


    // 첨부파일
    $("#file-input").on('change',function(){
        let fileName = $("#file-input").val();
        let fileNameNew = fileName.split('/').pop().split('\\').pop(); // 파일명만 추출
        $("#file-label").text(fileNameNew);
    });



    var getMail = RegExp(/^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/);
    var getCheck= RegExp(/^[a-zA-Z0-9]{4,12}$/);
    var getName = /^[가-힣]{2,4}$/;
    var getTel = /^(01[016789]{1}|02|0[3-9]{1}[0-9]{1})-?[0-9]{3,4}-?[0-9]{4}$/;
    let getUrl = /(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;

    let contactName = false;
    $("#contactName").keyup(function (){
        if(!getName.test($(this).val())){
            $(this).parent(".in-box__box-wrap").removeClass("confirm").addClass("error");
            $("#contactName").focus();
        }else{
            $(this).parent(".in-box__box-wrap").removeClass("error").addClass("confirm");
            contactName = true;
        }
    });

    $("#contactCompany").keyup(function(){
        if(!$(this).val()){
            $(this).parent(".in-box__box-wrap").addClass("error");
            $("#contactCompany").focus();
        }else{
            $(this).parent(".in-box__box-wrap").removeClass("error").addClass("confirm");
        }
    })

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

    $(".in-box__box--required").on("input", function (e) {
        if($("#contactName").parent().hasClass("confirm")
            && $("#contactCompany").parent().hasClass("confirm")
            && $("#contactEmail").parent().hasClass("confirm")
            && $("#contactTel").parent().hasClass("confirm")){
            NextContentBox(e, "#content_box-06");
        }
    })

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