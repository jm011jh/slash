
$(document).ready(function () {

    AfterLoading();

    function AfterLoading () {
        setTimeout( () => {  $(".hiring__title").addClass("on"); }, 200);
        setTimeout( () => { $(".box_01").addClass("on"); },400 );
    }

    $('input[name="hiringPosition"]').on("click", function (e) {
        let position = $(e.target).val();

        if(position){
            if(!$(".content__box.box02").hasClass("on")){
                $(".content__box.box02").addClass("on");
            }

            $("input[name='position']").val(position)
        }
    });



    var getMail = RegExp(/^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/);
    var getCheck= RegExp(/^[a-zA-Z0-9]{4,12}$/);
    var getName= RegExp(/^[가-힣]+$/);
    var fmt = RegExp(/^\d{6}[1234]\d{6}$/); //형식 설정
    var buf = new Array(13); //주민등록번호 배열

    // // 이름 확인
    // $('#hiringName').keyup(function () {
    //     console.log($(this).val())
    //     if(!getName.test($(this).val())){
    //         $(this).parent(".in-box__box-wrap").addClass("error");
    //         $("#hiringName").focus();
    //     }
    // });
    




});