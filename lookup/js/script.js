$(document).ready(function() {

  console.log("ready");


  $(".nav").click(function(){
    $(this).find('.menu').toggle();
  });

// $(".nav").on('click',function(){
//     $(".menu").trigger("click");
// });

// $("body").on("click", function(){
//     $(".menu").toggle(); 
// });



// $('.nav').on('click', function() {
//   $parent_box = $(this).closest('.nav');
//   $parent_box.siblings().find('.menu').hide();
//   $parent_box.find('.menu').toggle();
// });

$('.menu').on({
       click: function () { $('.menu').hide(); }
    }, 'a');

});


  var allSlideshows = $('.fotorama');

  var fotoramaSwitch = function(thisLink) {

    var thisFilter = $(thisLink).attr('href').replace('#', '').replace('-', '.');

    var targetSlideshow = $('.fotorama.'+thisFilter);

    $(allSlideshows).hide();
    $(targetSlideshow).show();

    // console.log("targetSlideshow: ", targetSlideshow);
  };




  $(".nav .menu").find('a').click(function(e){
    e.preventDefault();

    // this is the a element we clicked on
    var thisLink = $(this);

    fotoramaSwitch(thisLink);

    return false;
  });



//   function reposition(){
//   var screenW = document.body.clientWidth;
//   var screenH = document.body.clientHeight;
//   var menuW = document.getElementById("menu").offsetWidth;
//   var menuH = document.getElementById("menu").offsetHeight;
//   document.getElementById("menu").style.left = (20) + 'px';
//   document.getElementById("menu").style.top = ((screenH-menuH)-20) + 'px';
//   document.getElementById("menu").style.width = (screenW-40) + 'px';
// }
// reposition();
// window.addEventListener("resize", reposition);

// });
