
// var mode = $("body").attr("class");
//
// $(".toggler").click(function() {
//   if (mode == "dark") {
//    $("body").removeClass("dark");
//    $("body").addClass("light");
//    $(".toggler-circle").css("transform", "translateX(20px)");
//   }
//   if (mode == "light"){
//    $("body").removeClass("light");
//    $("body").addClass("dark");
//    $(".toggler-circle").css("transform", "translateX(0)");
//   }
// });


// $(document).ready(function(){
//   $("button").click(function(){
//       $("#dark").attr("id", "#light");
//   });
// });

$(".toggler").click(function() {
   $("body").toggleClass("light");
   $(".toggler-circle").toggleClass("circle");
});
