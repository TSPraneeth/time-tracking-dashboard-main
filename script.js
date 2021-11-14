
$("a").click(function(e) {
    console.log(e.target.className);
    if(e.target.className == "daily_work_btn")
    {
        $(".dropdown_work").toggle();
        $(".daily_work").css("display","block");
        $(".weekly_work").css("display","none");
        $(".monthly_work").css("display","none");
    }
});

$(".weekly_all").click(function() {
    $(".daily").css("display","none");
    $(".weekly").css("display","block");
    $(".monthly").css("display","none");
});

$(".daily_all").click(function() {
    $(".daily").css("display","block");
    $(".weekly").css("display","none");
    $(".monthly").css("display","none");
});

$(".monthly_all").click(function() {
    $(".daily").css("display","none");
    $(".weekly").css("display","none");
    $(".monthly").css("display","block");
});

// if($('.fas').hover() == true) 
// {
//     $(".details").css("filter","brightness(1)");
// }

// else
// {
//     $(".details").css("filter","brightness(1.2)");
// }
