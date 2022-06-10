$(function () {
    setTimeout(()=>{
        $("#project2ListContainer").addClass("moved")
        $("#colorStyle").addClass("moved")
    },300)

    $("project--button-wrap a").click(function () {
        var url = $(this).attr("href");
        $("#colorStyle").animate({
            "opacity": "0",
        },100, function () {
            setTimeout(()=>{
                document.location.href = url;
            },300)
        });
        return false;
    });
});