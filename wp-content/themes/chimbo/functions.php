<?php 

$chimbo_includes = array(
	'enqueue_files',
	'options_page'
   );
   
   
	   foreach ( $chimbo_includes as $file ) {
		   require_once get_stylesheet_directory() . '/inc/' . $file . '.php';
	   }
   





