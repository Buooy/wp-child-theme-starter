<?php
/**
 * All Includes/Requires to Be Added Here
 */
require_once 'vendor/autoload.php';

use Config\Config;

//	Registers the theme assets here
new App\Core;
new App\Assets;
new App\Navigation;
new App\Sidebars;

//	Registers the Custom Post Types here
new App\PostTypes\Sermons;

//	Integrations
if( Config::get('integrations.enable_acf') ){
	new App\Integrations\AdvancedCustomFields\FieldGroups;
	new App\Integrations\AdvancedCustomFields\RestAPI;
}