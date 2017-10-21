// $(document).ready(function(){
//   var stickey_nav_bar = $('#stickNav').offset().top;
//   var sticky_navtigation = function(){
//     var scroll_top = $(window).scrollTop();
//     if(scroll_top > stickey_nav_bar){
//       $('#stickNav').css({'position': 'fixed', 'top': '0,'})
//     }
//     else{
//       $('#stickNav').css({'position': 'relative',});
//     }
//   };
//
//   $(window).scroll(function(){
//     stickey_navigation();
//   })
// })

$(window).scroll(function(){
  if($(this).scrollTop()>1){
    $('.menu').addClass("sticky");
  }
  else
  {
    $('.menu').removeClass("sticky");
  }
})

$( ".hoverText" )
  // .filter( ":odd" )
  //   .hide()
  // .end()
  // .filter( ":even" )
    .hover(function() {
      $( this )
        .toggleClass( ".active" )
        .next()
          .stop( true, true )

    });



var carousel = ["img/techcrunch.png","img/jwli.png","img/national.png","img/llp.png","img/levelground.png"];
var indxFinder = 0;

//create event listener
$(".btn").eq(1).on("click",function(){
  if(indxFinder == 4){
    indxFinder = 0
  }else{indxFinder = indxFinder + 1}

$("#image-to-vote-on").attr("src",carousel[indxFinder]);
console.log(carousel)

});
$(".btn").eq(0).on("click",function(){
  if(indxFinder == 0){
    indxFinder = 4
  }else{indxFinder = indxFinder - 1}

$("#image-to-vote-on").attr("src",carousel[indxFinder]);
console.log(carousel)

});




// $(document).ready(function(){
//   $('.next').on('click', function(){
//     var currentImg = $('.active');
//     var nextImg = currentImg.next();
//
//     if(nextImg.length){
//       currentImg.removeClass('active').css('z-index', -10);
//       nextImg.addClass('active').css('z-index', 10);
//     }
//   });
//   $('.prev').on('click', function(){
//     var currentImg = $('.active');
//     var prevImg = currentImg.prev();
//
//     if(prevImg.length){
//       currentImg.removeClass('active').css('z-index', -10);
//       prevImg.addClass('active').css('z-index', 10);
//     }
//   });
// });


// //create memory for image carousel
// var carousel = ["html-5.png","HTML5_Styling_512.png","JavaScript-logo.png","jwli.png"];
//
// //create indexfinder
// var indxFinder = 0;]
//
// //create event listener for forward button
// document.getElementsByClassName('btn2').onclick(){
//   function(){
//     if(indxFinder == 3){
//       indxFinder = 0
//     }else{indxFinder = indxFinder + 1}
//
//   document.getElementById('#examples').attr("src",carousel[indxFinder]);
//   console.log(carousel)
//   }
//
// }

//create loop function for endcase by reverse

//create event listener for back button




// var carousel = ["html-5.png","HTML5_Styling_512.png","JavaScript-logo.png","jwli.png"];
// var indxFinder = 0;
//
// //create event listener
// $(".btn").eq(1).on("click",function(){
//   if(indxFinder == 3){
//     indxFinder = 0
//   }else{indxFinder = indxFinder + 1}
//
// $("#image-to-vote-on").attr("src",carousel[indxFinder]);
// console.log(carousel)
//
// });
// $(".btn").eq(0).on("click",function(){
//   if(indxFinder == 0){
//     indxFinder = 3
//   }else{indxFinder = indxFinder - 1}
//
// $("#image-to-vote-on").attr("src",carousel[indxFinder]);
// console.log(carousel)
