$(document).ready(function () {

    AfterLoading();

    box01Checked ();

    function AfterLoading () {
        setTimeout(function() { 
            $(".hiring__title").addClass("on");
        }, 100);

        setTimeout( () => { $(".box_01").addClass("on"); },200 );
    }

    function box01Checked () {
        if($("input[name='hiringPosition']").checked){
            alert("ddd")
        }
    }


});