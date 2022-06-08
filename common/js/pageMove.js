$(function () {
    // $("body div").fadeIn(500, function () {
    //     $(this).animate({
    //         "top": "150px"
    //     },1000);
    // });
    
    $("a").click(function () {
        var url = $(this).attr("href");
        console.log(url)
        $("#colorStyle").animate({
            "opacity": "0",
        },500, function () {
            document.location.href = url;
        });
        
        return false;
    });

    setTimeout(()=>{
        $("#project2ListContainer").addClass("moved")
        $("#colorStyle").addClass("moved")
    },300)
});