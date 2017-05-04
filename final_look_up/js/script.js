$(document).ready(function() {

  console.log("ready");

// var random = Math.floor(Math.random() * $('img').length);
// $('img').hide().eq(random).show();

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

// function myFunction() {
//     document.getElementById("myDropdown").classList.toggle("show");
// }


// // Close the dropdown if the user clicks outside of it
// window.onclick = function(event) {
//   if (!event.target.matches('.dropbtn')) {

//     var dropdowns = document.getElementsByClassName("dropdown-content");
//     var i;
//     for (i = 0; i < dropdowns.length; i++) {
//       var openDropdown = dropdowns[i];
//       if (openDropdown.classList.contains('show')) {
//         openDropdown.classList.remove('show');
//       }
//     }
//   }

// myFunction();

// var li = document.getElementsByTagName("li");

// for(var i = 0;i<li.length;i++){
//     li[i].addEventListener("click", myScript);
// }

// function myScript(e){
//     alert(e.target.attributes.id.value);       
// }

});