<?php
namespace App;

class Sidebars{

	public function __construct(){
		$Helpers = new Helpers;
		$this->text_domain = $Helpers->getTextDomain();

		$this->add_actions();
	}

	private function add_actions(){
		add_action( 'init', [$this, 'register_sidebars'] );
	}

	public function register_sidebars(){

		//	Add or Remove Sidebars Here
		$sidebars = [
			[
				'name'          => 	__( 'Primary Sidebar', $this->text_domain ),
				'id'            => 	'primary-sidebar',
				'description'	=>	__( '', $this->text_domain ),
				'class'			=>	'',
				'before_widget' => 	'<aside id="%1$s" class="widget %2$s">',
				'after_widget'  => 	'</aside>',
				'before_title'  => 	'<h3 class="widget-title">',
				'after_title'   => 	'</h3>',
			],
		];

		foreach( $sidebars as $sidebar ){
			register_sidebar( $sidebar );
		}
	}

}