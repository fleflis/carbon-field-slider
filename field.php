<?php

use Carbon_Fields\Carbon_Fields;
use Carbon_Field_Slider\Slider_Field;

define( 'Carbon_Field_Slider\\DIR', __DIR__ );

Carbon_Fields::extend( Slider_Field::class, function( $container ) {
	return new Slider_Field(
		$container['arguments']['type'],
		$container['arguments']['name'],
		$container['arguments']['label']
	);
} );
