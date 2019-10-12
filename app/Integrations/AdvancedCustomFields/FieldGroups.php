<?php
namespace App\Integrations\AdvancedCustomFields;

/**
 * Please include any ACF Field Groups Here
 * 
 * To generate the PHP, 
 * 	1. 	Go to {YOUR_WEBSITE_URL}/wp-admin/edit.php?post_type=acf-field-group&page=acf-tools
 * 	2. 	Select your field groups
 * 	3. 	Click generate PHP
 *  4.	Add function below here
 */
class FieldGroups {

	public function __construct(){
		if( function_exists('acf_add_local_field_group') ){
			$this->add_field_groups();
		}
	}

	public function add_field_groups(){
		//$this->add_field_group_sermon();
	}

	public function add_field_group_sermon(){
		/*
		acf_add_local_field_group([
			'key' => 'group_5da16b9b6032a',
			'title' => 'Sermons',
			'fields' => array(
				array(
					'key' => 'field_5da16b9f25434',
					'label' => 'Video URL',
					'name' => 'video_url',
					'type' => 'url',
					'instructions' => 'Please include the youtube video url here',
					'required' => 0,
					'conditional_logic' => 0,
					'wrapper' => array(
						'width' => '',
						'class' => '',
						'id' => '',
					),
					'default_value' => '',
					'placeholder' => '',
				),
				array(
					'key' => 'field_5da16bbb25435',
					'label' => 'Audio URL',
					'name' => 'audio_url',
					'type' => 'url',
					'instructions' => 'Please include the soundcloud URL here',
					'required' => 0,
					'conditional_logic' => 0,
					'wrapper' => array(
						'width' => '',
						'class' => '',
						'id' => '',
					),
					'default_value' => '',
					'placeholder' => '',
				),
			),
			'location' => array(
				array(
					array(
						'param' => 'post_type',
						'operator' => '==',
						'value' => 'sermons',
					),
				),
			),
			'menu_order' => 0,
			'position' => 'acf_after_title',
			'style' => 'default',
			'label_placement' => 'left',
			'instruction_placement' => 'field',
			'hide_on_screen' => '',
			'active' => true,
			'description' => '',
		]);
		*/
	}

}