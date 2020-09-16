<?php 

/* enqueue scripts and style from parent theme */        
function twentyChild_styles() {
	wp_enqueue_style( 'parent', get_template_directory_uri() . '/style.css' );
}
add_action( 'wp_enqueue_scripts', 'twentyChild_styles');