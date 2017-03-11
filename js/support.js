/*function is_Mobile(){
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile |Opera Mini/i.test(navigator.userAgent) ) {
      return true;
    }
    return false;
}*/
function is_Mobile() {
 if( navigator.userAgent.match(/Android/i)
 || navigator.userAgent.match(/webOS/i)
 || navigator.userAgent.match(/iPhone/i)
 || navigator.userAgent.match(/iPad/i)
 || navigator.userAgent.match(/iPod/i)
 || navigator.userAgent.match(/BlackBerry/i)
 || navigator.userAgent.match(/Windows Phone/i)
 ){
   console.log(navigator.userAgent);
    return true;
  }
 else {
   console.log(navigator.userAgent);
    return false;
  }
}

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
    if(!is_Mobile()){
      window.open ('editorial.html','_self',false);
    }
  });
});
