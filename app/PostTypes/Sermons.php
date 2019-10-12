<?php
namespace App\PostTypes;

use App\Helpers;
use App\PostTypes\AbstractPostTypes;

Class Sermons extends AbstractPostTypes{

	protected function initialise_post_type(){

		//	Initialise the post type arguments
		$this->post_type = $this->initialise_post_type_args( 
			'sermons', 
			'Sermons', 
			'Sermon', 
			[
				'menu_icon' => 'dashicons-welcome-learn-more',
				'supports' => ['title', 'thumbnail', 'revisions'],
			]
		);

		//	Initialises the taxonomies 
		//	Taxonomy : Sermon Series
		$sermon_series = (object)[
			'key' => 'sermon_series', 
			'plural_name' => 'Series', 
			'singular_name' => 'Series',
		];
		//	Taxonomy : Speakers
		$sermon_speakers = (object)[
			'key' => 'sermon_speakers', 
			'plural_name' => 'Speakers', 
			'singular_name' => 'Speaker',
		];
		$this->taxonomies = $this->initialise_taxonomies_args(
			[
				$sermon_series,
				$sermon_speakers,
			]
		);

	}

}