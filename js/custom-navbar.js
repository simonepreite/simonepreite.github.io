$(document).ready(function(){
    if($("nav.navbar").hasClass("custom-navbar")){
        var config = {
            color: "#000",
            position: "right",
            change_height_on_scroll: true,
            height_transition_duration: "1s",
            transparent: true,
            nav_background: "#c0ff8c",
        }

        jQuery.fn.extend({
            navbar: function(custom=config){
                if(custom.color != undefined) config.color = custom.color;
                if(custom.position != undefined) config.position = custom.position;
                if(custom.height_transition_duration != undefined) config.height_transition_duration = custom.height_transition_duration;
                if(custom.transparent != undefined) config.transparent = custom.transparent;
                if(custom.nav_background != undefined) config.nav_background = custom.nav_background;
                if(custom.change_height_on_scroll != undefined) config.change_height_on_scroll = custom.change_height_on_scroll;

                var font_script = document.createElement("link");
                $(font_script).attr("href", "https://fonts.googleapis.com/css?family=Raleway:200");
                $(font_script).attr("rel", "stylesheet");
                $("head").append(font_script);
                $("ul.navbar-nav").css("font-family", "'Raleway', sans-serif");

                if(config.change_height_on_scroll){
                    $(window).scroll(function(){
                        var height = $("body").scrollTop();
                        if(height > 0){
                            $("nav.navbar").addClass("custom-expanded");
                            $(".custom-expanded").css("background", config.nav_background);
                            $(".navbar-right, .navbar-header").removeClass("custom-collapsed");
                        } else {
                            $("nav.navbar").removeClass("custom-expanded");
                            if(config.transparent) $("nav.navbar").css("background", "transparent");
                            $(".navbar-right, .navbar-header").addClass("custom-collapsed");
                        }
                    });

                    $(".custom-collapsed").css("transition", config.height_transition_duration + " padding ease-out");
                    $(".navbar-right, .navbar-header").css("transition", config.height_transition_duration + " padding ease-out");
                }

                $(".navbar-nav li a").css("color", config.color);
                $(".navbar-toggle .icon-bar").css("background", config.color);
                $(".navbar-nav li a:hover").css({
                    "color": config.color,
                    "border-bottom-color": config.color
                });

                if(config.position == "right")
                    $(".navbar-nav").addClass("navbar-right");

                if(!config.transparent){
                    $("nav.navbar").css("background", config.nav_background);
                }

                $(".navbar-toggle").click(function(){
                    if($("button.navbar-toggle").hasClass("animate-menu")) $("button.navbar-toggle").removeClass("animate-menu");
                    else $("button.navbar-toggle").addClass("animate-menu");
                    if($("body").scrollTop() == 0){
                        if($(".navbar-collapse").hasClass("in")){
                            if(config.transparent) $("nav.navbar").css("background", "");
                        } else {
                            $("nav.navbar").css("background", config.nav_background);
                        }
                    }
                });

                $("ul.dropdown-menu li a").css("color", "#000");
            }
        });
    }
});
