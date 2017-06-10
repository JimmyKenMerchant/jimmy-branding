=== Jimmy Branding ===
Contributors: kenjmk7r9merchant
Plugin Name: Jimmy Branding
Plugin URI: http://electronics.jimmykenmerchant.com/jimmy-branding/
Tags: branding, brand, webgl, 3d
Author: Kenta Ishii
Author URI: http://electronics.jimmykenmerchant.com
Requires at least: 4.7
Tested up to: 4.8
Stable tag: 1.0
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html

== Description ==

Size-flexible Banner for Your Website Branding. Template Tag and Shortcode. 'SENOR' WebGL Library, "System of Whole Objective Oriented Structure". Change Height Size by Yellow Triangle on the Center Bottom (Color Changeable).

= Futures =
** Template Tag, jimmy_branding_output()
* Custom content (post) type, "jBranding".
* Status and Content Changer of Branding Banner, Opener (Triangle on the Center Bottom).

** Shortcode, [jimmy_branding]
* For use of "jBranding" content in your posts.
* Status and Content flexible just the same as the template tag.

** Original WebGL library, 'SENOR'
** 'SENOR' (actually, 'SENORWEBGL1', 'SENORWEBGL2' and 'SENORUTL') is an original WebGL library of Kenta Ishii licensed under GPLv2 or later. This Library aims to be "System of Whole Objective Oriented Structure" to make and transmit 3D images in/between your web sites and servers. This system is unique because whole processes depend on objective oriented structure. By doing so, engineers to participate in projects can be able to build systems of 3D images easier than inconsistent structures. 'SENOTRWEBGL1' is a wrapper of WebGL1.0 context. 'SENORWEBGL2' is a wrapper of WebGL2.0 context (now on reserved). 'SENORUTL' is utilities to make 3D images. 'SENOR' also aims to consider compatibility to code between 'SENORWEBGL1', WebGL1.0 context and 'SENORWEBGL2', WebGL2.0 context. Now so call "The Same Coding Rarely Except Extension". By wrapping whole context with each 'canvas' HTML tag, 'SENOR' aims usage of multiple contexts on the same page of your website. **

= Usage =
** Template Tag, jimmy_branding_output()
* Copy and paste below code and the template tag on your theme, e.g., index.php.
<?php
	if ( function_exists( 'jimmy_branding_output' ) ) {
		// If you want, configure ID of this template in the argument of this template tag as String
		jimmy_branding_output();
	}
?>
* Make your branding HTML code on 'jBrandings' menu.
* Select your content and on 'Select' sub menu.
* Custom banner and opener size on 'Select' sub menu.

** Shortcode, [jimmy_branding]
* On 'Select' sub menu, check 'SENOR WebGL Library' to 'Stand Alone' and 'Shortcode Usage' to 'Use'.
* On your post, use shortcode [jimmy_branding] with several arguments. 'name' must be needed.

** Arguments of the WordPress shortcode, [jimmy_branding] 
* 'id' - (default: 'jimmy-branding')
* 'name' - assign slug name of your content (default: '') must needed
* 'ratio' - 'false' is using pixels, 'parent' is using width parent element's width, 'window' is using window's width and height to make the resolution of the template (default: 'false')
* 'width_pixels' - (default: '300')
* 'width_percents' - (default: '100')
* 'height_min' - (default: '100')
* 'height_min_percents' - (default: '10')
* 'height_max' - (default: '200')
* 'height_max_percents' - (default: '20')
* 'opener_color' - (default: '#ff0')
* 'opener_width' - (default: '28')
* 'opener_choice' - Show Opener ('true') or not (default: 'true')

Usage Samples are on http://electronics.jimmykenmerchant.com/jimmy-branding/ please check out.

== Installation ==

Now on Beta Testing. If you want, download and test this plugin.

== Copyright ==

The Jimmy Branding, A WordPress Plugin, Copyright 2017 Kenta Ishii.
Jimmy Branding is distributed under the terms of the GNU GPL.

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 2 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU General Public License for more details.

Several codes of 'SENOR', a WebGL library are derived from Mozilla Developer Network (https://github.com/mdn/webgl-examples). The license is under Creative Commons Zero v1.0 Universal (https://github.com/mdn/webgl-examples/blob/gh-pages/LICENSE). This license is compatible with GPLv2 or later.

== Changelog ==

= 0.9.3 Beta =
* Confirmed Compatibility with WordPress Version 4.8
: June 9, 2017

= 0.9.2 Beta =
* Improved 'SENOR' WebGL Library
* Added WordPress Shortcode, 'jimmy_branding'
: June 7, 2017

= 0.9.1 Beta =
* Released: May 30, 2017
