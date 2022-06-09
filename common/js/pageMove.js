$(function () {
    // $("body div").fadeIn(500, function () {
    //     $(this).animate({
    //         "top": "150px"
    //     },1000);
    // });
    setTimeout(()=>{
        $("#project2ListContainer").addClass("moved")
        $("#colorStyle").addClass("moved")
    },300)

    $("a").click(function () {
        var url = $(this).attr("href");
        $("#colorStyle").animate({
            "opacity": "0",
        },100, function () {
            setTimeout(()=>{
                document.location.href = url;
            },300)
        });
        console.log("se")
        return false;
    });
});