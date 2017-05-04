$(document).ready(function() {

  console.log("ready");


  $(".about").click(function(){
          $(".text").toggle();
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

  function reposition(){
  var screenW = document.body.clientWidth;
  var screenH = document.body.clientHeight;
  var menuW = document.getElementById("menu").offsetWidth;
  var menuH = document.getElementById("menu").offsetHeight;
  document.getElementById("menu").style.left = (20) + 'px';
  document.getElementById("menu").style.top = ((screenH-menuH)-20) + 'px';
  document.getElementById("menu").style.width = (screenW-40) + 'px';
}
reposition();
window.addEventListener("resize", reposition);

});
