$(document).ready(function(){
  var custom = {
        color: "#fff",
        change_height_on_scroll: true,
        transparent: false,
        nav_background: "black"
  }
  $(".custom-navbar").navbar(custom);
  $('ul.nav li.dropdown').hover(function() {
      $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
    }, function() {
      $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
  });
  $("#editorial").click(function(){
    window.open ('editorial.html','_self',false);
  });
});
