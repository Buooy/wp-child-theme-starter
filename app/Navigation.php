<?php
namespace App;

class Navigation{

	public function __construct(){
		$Helpers = new Helpers;
		$this->text_domain = $Helpers->getTextDomain();
		$this->add_actions();
	}

	private function add_actions(){
		add_action( 'init', [$this, 'register_menus'] );
	}

	public function register_menus(){
		register_nav_menus([
			  'header-menu' => __( 'Header Menu', $this->text_domain ),
			  'footer-menu' => __( 'Footer Menu', $this->text_domain ),
		]);
	}

}