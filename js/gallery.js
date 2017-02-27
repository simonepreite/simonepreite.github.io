$(document).ready(function(){
  $("#gallery").unitegallery({
    gallery_theme: "tiles",
    tiles_type: "nested"
  });
  $("#gallery1").unitegallery({
					gallery_width:"100%",
					tile_border_color:"#7a7a7a",
					tile_outline_color:"#8B8B8B",
					tile_enable_shadow:true,
					tile_shadow_color:"#8B8B8B",
					tile_overlay_opacity:0.3,
					tile_show_link_icon:true,
					tile_image_effect_type:"sepia",
					tile_image_effect_reverse:true,
					tile_enable_textpanel:true,
					lightbox_textpanel_title_color:"e5e5e5",
					tiles_col_width:230,
					tiles_space_between_cols:20
	});
  $("#gallery2").unitegallery({
	tile_enable_shadow:false,
	tile_enable_border:true,
	tiles_space_between_cols:15,
	tiles_justified_space_between:15,
	tiles_col_width:235,
	tile_border_color: "#ffffff",
	tile_enable_outline:true,
});
});
