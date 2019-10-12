<?php
namespace App\PostTypes;

use App\Helpers as Helpers;

abstract class AbstractPostTypes {

	private $text_domain = 'wharrf';

	public function __construct(){

		if( !post_type_exists( $this->post_type_key ) ){
			$Helpers = new Helpers;
			$this->text_domain = $Helpers->getTextDomain();

			$this->taxonomies = [];

			$this->initialise_post_type();
			$this->add_actions();
		}

	}

	abstract protected function initialise_post_type();
	

	protected function initialise_post_type_args( $key, $plural_name, $singular_name, $args = [] ){
		$post_type = new \stdClass;
		$post_type->singular_name = $singular_name;
		$post_type->plural_name = $plural_name;
		$post_type->key = $key;

		// Merge with Standard Arguments
		$default_args = [
			'label'                 => __( $post_type->singular_name, $this->text_domain ),
			'description'           => __( 'Description of '.$post_type->singular_name, $this->text_domain ),
			'supports'              => ['title', 'editor', 'thumbnail', 'comments', 'trackbacks', 'revisions', 'custom-fields', 'page-attributes', 'post-formats'],
			'taxonomies'            => [],
			'hierarchical'          => false,
			'public'                => true,
			'show_ui'               => true,
			'show_in_menu'          => true,
			'menu_position'         => 5,
			'show_in_admin_bar'     => false,
			'show_in_nav_menus'     => true,
			'can_export'            => true,
			'has_archive'           => true,
			'exclude_from_search'   => false,
			'publicly_queryable'    => true,
			'capability_type'       => 'page',
			'show_in_rest'          => true,
			'rest_base'             => $key,
		];
		$post_type->args = array_merge( $default_args, $args );

		//	Adds Labels
		$post_type->args['labels'] = [
			'name'                  => _x( $post_type->plural_name, 'Post Type General Name', $this->text_domain ),
			'singular_name'         => _x( $post_type->singular_name, 'Post Type Singular Name', $this->text_domain ),
			'menu_name'             => __( $post_type->plural_name, $this->text_domain ),
			'name_admin_bar'        => __( $post_type->plural_name, $this->text_domain ),
			'archives'              => __( $post_type->singular_name.' Archives', $this->text_domain ),
			'attributes'            => __( $post_type->singular_name.' Attributes', $this->text_domain ),
			'parent_item_colon'     => __( 'Parent '.$post_type->singular_name.':', $this->text_domain ),
			'all_items'             => __( 'All '.$post_type->plural_name, $this->text_domain ),
			'add_new_item'          => __( 'Add New '.$post_type->singular_name, $this->text_domain ),
			'add_new'               => __( 'Add New', $this->text_domain ),
			'new_item'              => __( 'New '.$post_type->singular_name, $this->text_domain ),
			'edit_item'             => __( 'Edit '.$post_type->singular_name, $this->text_domain ),
			'update_item'           => __( 'Update '.$post_type->singular_name, $this->text_domain ),
			'view_item'             => __( 'View '.$post_type->singular_name, $this->text_domain ),
			'view_items'            => __( 'View '.$post_type->plural_name, $this->text_domain ),
			'search_items'          => __( 'Search '.$post_type->singular_name, $this->text_domain ),
			'not_found'             => __( 'Not found', $this->text_domain ),
			'not_found_in_trash'    => __( 'Not found in Trash', $this->text_domain ),
			'featured_image'        => __( 'Featured Image', $this->text_domain ),
			'set_featured_image'    => __( 'Set featured image', $this->text_domain ),
			'remove_featured_image' => __( 'Remove featured image', $this->text_domain ),
			'use_featured_image'    => __( 'Use as featured image', $this->text_domain ),
			'insert_into_item'      => __( 'Insert into '.$post_type->singular_name, $this->text_domain ),
			'uploaded_to_this_item' => __( 'Uploaded to this '.$post_type->singular_name, $this->text_domain ),
			'items_list'            => __( $post_type->plural_name.' list', $this->text_domain ),
			'items_list_navigation' => __( $post_type->plural_name.' list navigation', $this->text_domain ),
			'filter_items_list'     => __( 'Filter '.$post_type->plural_name.' list', $this->text_domain ),
		];

		return $post_type;
	}
	protected function initialise_taxonomies_args( $args = [] ){
		$taxonomies_args = [];
		foreach( $args as $arg ){
			$taxonomies_args[] = $this->initialise_taxonomy_args( $arg->key, $arg->plural_name, $arg->singular_name );
		}
		return $taxonomies_args;
	}

	protected function initialise_taxonomy_args( $key = 'category', $plural_name = 'Categories', $singular_name = 'Category' ){
		$taxonomy_args = new \stdClass;
		$taxonomy_args->singular_name = $singular_name;
		$taxonomy_args->plural_name = $plural_name;
		$taxonomy_args->key = $key;

		return $taxonomy_args;
	}

	private function add_actions(){
		add_action( 'init', [$this,'register_post_type'], 0 );
		add_action( 'init', [$this,'register_taxonomies'], 0 );
	}

	public function register_post_type(){

		//	Registers Taxonomies
		foreach( $this->taxonomies as $taxonomy ){
			$args['taxonomies'][] = $taxonomy->key;
		}

		register_post_type( $this->post_type->key, $this->post_type->args );

	}

	public function register_taxonomies(){
			
		foreach( $this->taxonomies as $taxonomy ){

			$labels = [
				'name'                       => _x( $taxonomy->plural_name, 'Taxonomy General Name', $this->text_domain ),
				'singular_name'              => _x( $taxonomy->singular_name, 'Taxonomy Singular Name', $this->text_domain ),
				'menu_name'                  => __( $taxonomy->plural_name, $this->text_domain ),
				'all_items'                  => __( 'All '.$taxonomy->plural_name, $this->text_domain ),
				'parent_item'                => __( 'Parent '.$taxonomy->singular_name, $this->text_domain ),
				'parent_item_colon'          => __( 'Parent '.$taxonomy->singular_name.':', $this->text_domain ),
				'new_item_name'              => __( 'New '.$taxonomy->singular_name.' Name', $this->text_domain ),
				'add_new_item'               => __( 'Add New '.$taxonomy->singular_name, $this->text_domain ),
				'edit_item'                  => __( 'Edit '.$taxonomy->singular_name, $this->text_domain ),
				'update_item'                => __( 'Update '.$taxonomy->singular_name, $this->text_domain ),
				'view_item'                  => __( 'View '.$taxonomy->singular_name, $this->text_domain ),
				'separate_items_with_commas' => __( 'Separate '.$taxonomy->plural_name.' with commas', $this->text_domain ),
				'add_or_remove_items'        => __( 'Add or remove '.$taxonomy->plural_name, $this->text_domain ),
				'choose_from_most_used'      => __( 'Choose from the most used', $this->text_domain ),
				'popular_items'              => __( 'Popular '.$taxonomy->plural_name, $this->text_domain ),
				'search_items'               => __( 'Search '.$taxonomy->plural_name, $this->text_domain ),
				'not_found'                  => __( 'Not Found', $this->text_domain ),
				'no_terms'                   => __( 'No '.$taxonomy->plural_name, $this->text_domain ),
				'items_list'                 => __( $taxonomy->plural_name.' list', $this->text_domain ),
				'items_list_navigation'      => __( $taxonomy->plural_name.' list navigation', $this->text_domain ),
			];
			$args = [
				'labels'                     => $labels,
				'hierarchical'               => true,
				'public'                     => true,
				'show_ui'                    => true,
				'show_admin_column'          => true,
				'show_in_nav_menus'          => true,
				'show_tagcloud'              => false,
				'show_in_rest'               => true,
			];
			register_taxonomy( $taxonomy->key, [$this->post_type->key], $args );

		}
		
	}

}