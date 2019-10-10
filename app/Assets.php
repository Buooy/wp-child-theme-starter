<?php
namespace App;

use App\Helpers as Helpers;

class Assets{

	private $theme_name = 'wharrf';
	private $version = '0.0.0';

	public function __construct(){
		$Helpers = new Helpers;
		$this->theme_name = $Helpers->getThemeName();
		$this->version = $Helpers->getVersion();
		$this->add_to_actions();
	}

	//	Add to Actions
	public function add_to_actions(){
		add_action( 'wp_enqueue_scripts', [$this,'enqueue_scripts'] );
		add_action( 'wp_enqueue_scripts', [$this,'enqueue_styles'] );
	}

	public function enqueue_scripts(){
		wp_enqueue_script( $this->theme_name.'-scripts', get_template_directory_uri() . '/build/js/bundle.js', array('jquery'), $this->version, true );
	}

	public function enqueue_styles(){

		//	Enqueue Parent Styles
		wp_enqueue_style( 'parent-styles', get_template_directory_uri() .'/style.css' );
		wp_enqueue_style( $this->theme_name.'-styles', get_stylesheet_directory_uri() . '/build/css/bundle.css', [], $this->version, true );

	}

}