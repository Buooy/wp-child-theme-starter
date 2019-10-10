<?php
namespace App;

/**
 * Static Theme Helpers
 */
class Helpers
{
	private $info = null;

	public function __construct(){
		$this->info = json_decode(file_get_contents(dirname(__DIR__)."/composer.json"));
	}

    //	Get the version
	public function getVersion(){
		return $info->version;
	}
	
	//	Get the text-domain which uses name for now
	public function getTextDomain(){
		return $info->name;
	}

	//	Get the theme name which uses name for now
	public function getThemeName(){
		return $info->name;
	}
}