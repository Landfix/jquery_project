$(document).ready(function() {

    $('.main_btna, .main_btn, a[href="#sheldure"]').click(function() {
        $('.overlay').fadeIn(1000);
        $('.modal').slideDown(1000);
    });

    $('.close').click(function() {
        $('.modal').slideUp(1000);
        $('.overlay').fadeOut(1000);
    });

});







// $(document).ready(function(){
//     $(".main_btna").on("click", ()=>{
//         $(".overlay").fadeToggle("slow");
//         $(".modal").animate(
//             {
//                 height:"toggle",
//                 opacity: "toggle"
//             }
//         );
//     });

//     $(".main_btn").on("click", ()=>{
//         $(".overlay").fadeToggle("slow");
//         $(".modal").animate(
//             {
//                 height:"toggle",
//                 opacity: "toggle"
//             }
//         );
//     });

//     $('a[href = "#sheldure"]').on("click", ()=>{
//         $(".overlay").fadeToggle("slow");
//         $(".modal").animate(
//             {
//                 height:"toggle",
//                 opacity: "toggle"
//             }
//         );
//     });

//     $("span").on("click", function(){
//         $(".modal").animate(
//             {
//                 height:"toggle",
//                 opacity: "toggle"
//             }
//         ),
//         $(".overlay").fadeToggle("slow");
//     });
    
// });



