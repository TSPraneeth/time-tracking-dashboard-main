$(".clickable").click(function() {
    console.log("hello");
       $(".dropdown").toggle(); 
});

$(".second").click(function() {
    $(".daily").css("display","none");
    $(".weekly").css("display","block");
});

$.getJSON("data.json", function (data) {
    console.log(data);
});