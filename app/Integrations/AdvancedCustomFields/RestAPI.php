<?php
namespace App\Integrations\AdvancedCustomFields;

class RestAPI {

	public function __construct(){
		if( function_exists('acf_add_local_field_group') ){
			$this->add_actions();
		}
	}

	public function add_actions(){
		add_action( 'rest_api_init', [$this,'create_ACF_meta_in_REST'] );
	}

	public function create_ACF_meta_in_REST() {
		$postypes_to_exclude = ['acf-field-group','acf-field'];
		//$extra_postypes_to_include = ["page"];
		$post_types = array_diff(get_post_types(["_builtin" => false], 'names'),$postypes_to_exclude);
	
		array_push($post_types, $extra_postypes_to_include);
	
		foreach ($post_types as $post_type) {
			register_rest_field( $post_type, 'data', [
				'get_callback'    => [$this,'expose_ACF_fields'],
				'schema'          => null,
		   ]
		 );
		}
	
	}

	public function expose_ACF_fields( $object ) {
		$ID = $object['id'];
		return get_fields($ID);
	}

}