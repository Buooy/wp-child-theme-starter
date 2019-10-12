<?php
namespace Config;

/**
 * This class defines all the configuration data
 */
class Config {

	public static function get( $filename_and_key ){

		//	$filename_and_key : FILENAME.KEY
		$filename_and_key = explode('.', $filename_and_key);

		//	Check that the filename and key is valid
		if( sizeof($filename_and_key) !== 2 ){
			return null;
		}

		//	Check that the filename exists
		if( !file_exists(__DIR__.'/'.$filename_and_key[0].'.php') ){
			return null;
		}

		//	Loads the array in the file
		$config = include(__DIR__.'/'.$filename_and_key[0].'.php');
		
		// Checks that the config is an array
		if( !is_array($config) ){
			return null;
		}

		return $config[ $filename_and_key[1] ];

	}

}