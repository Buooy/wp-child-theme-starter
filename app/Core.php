<?php
namespace App;

use Config\Config;

/**
 * This class manages and edits the core wordpress functionalities
 */
class Core {

	public function __construct(){
		$this->add_filters();
	}

	private function add_filters(){
		//	Comment or Uncomment the following filters
		add_filter('use_block_editor_for_post', [$this, 'toggle_block_editor'], 100); // WP > 5 beta
		add_filter('gutenberg_can_edit_post_type', [$this, 'toggle_block_editor']); // WP < 5 beta

		//	WP REST API Enhancements
		add_filter('rest_url_prefix', [$this, 'edit_api_slug']);
		add_action('rest_api_init', [$this, 'add_thumbnail_to_api']);

	}

	public function toggle_block_editor(){
		return Config::get('core.enable_block_editor');
	}

	public function edit_api_slug( $slug ){
		return Config::get('core.rest_url_prefix');
	}

	public function add_thumbnail_to_api() {

		//	Get all post types
		register_rest_field( 
			get_post_types(), // Where to add the field (Here, blog posts. Could be an array)
			'featured_media',
			[
				'get_callback'    => [$this, 'get_image_src'],
				'update_callback' => null,
				'schema'          => null,
			]
		);
	}
		
	public function get_image_src( $object, $field_name, $request ) {
		$feat_img_array = wp_get_attachment_image_src(
			$object['featured_media'], // Image attachment ID
			'full',  // Size.  Ex. "thumbnail", "large", "full", etc..
			true // Whether the image should be treated as an icon.
		);
		return [
			'id' => $object['featured_media'],
			'url' => $feat_img_array[0],
			'width' => $feat_img_array[1],
			'height' => $feat_img_array[2],
			'is_intermediate' => $feat_img_array[3],
		];
	}
	
}