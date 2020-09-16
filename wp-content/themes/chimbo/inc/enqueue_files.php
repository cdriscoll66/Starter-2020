<?php

/* enqueue scripts and style from parent and child theme */        
function chimboChild_styles() {
	wp_enqueue_style( 'google_font', 'https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Libre+Franklin:ital,wght@0,100;0,800;1,800&display=swap');
	wp_enqueue_style( 'parent', get_template_directory_uri() . '/style.css' );
	wp_enqueue_style( 'child', get_stylesheet_directory_uri() . '/dist/styles/main.css' );

}
add_action( 'wp_enqueue_scripts', 'chimboChild_styles');

/**
 * Register and Enqueue Scripts.
 */
function chimbo_register_scripts() {

	$theme_version = wp_get_theme()->get( 'Version' );

	wp_enqueue_script( 'chimbo-js', get_stylesheet_directory_uri() . '/dist/scripts/main.js', array(), $theme_version, false );
	wp_script_add_data( 'chimbo-js', 'async', true );

}

add_action( 'wp_enqueue_scripts', 'chimbo_register_scripts' );