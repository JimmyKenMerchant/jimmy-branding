/**
 * attacher-webgl.js in Jimmy Branding, a WordPress plugins
 * @package Jimmy Branding
 * @author Kenta Ishii
 * License: GPLv2 or later
 */

/**
 * This file depends on senor-webgl.js,
 * Because of using a global variable, gl, in senor-webgl.js.
 * Make sure to load senor-webgl.js first, then load this file.
 */

var SENORUTL = SENORUTL || {};

/**
 * WebGL Canvas Attacher on Jimmy Branding, a WordPress Plugin
 * This needs 'new' declaration
 *
 * parameter.object is the reference (aliasing) type parameter
 */
SENORUTL.attachDisplayOfJimmyBranding = function( parameter ) {
	var self = this;
	if ( typeof parameter !== "object" || parameter === null ) {
		parameter = {};
	}

	if ( typeof parameter.canvas !== "object" || parameter.canvas === null ) {
		return;
	}
	if ( typeof parameter.display !== "object" || parameter.display === null ) {
		self.width = parameter.canvas.width;
		self.height = parameter.canvas.height;
		self.aspect = parameter.canvas.width / parameter.canvas.height;
		return;
	}
	if ( typeof parameter.context !== "object" || parameter.context === null ) {
		return;
	}

	var ht_max = 0;
	var ht_max_percents = 0;
	var wd = 0;
	var wd_percents = 0;
	attachDisplay();
	self.aspect = parameter.canvas.width / parameter.canvas.height;

	/**
	 * Apply branding display
	 */
	function attachDisplay() {
		wd = parseInt( parameter.display.style.width  );
		if ( parameter.display.hasAttribute( 'data-widthpercents' ) ) {
			wd_percents = parameter.display.getAttribute( 'data-widthpercents' );
			wd_percents = wd_percents / 100;
		}

		ht_max = parameter.display.getAttribute( 'data-max' );
		ht_max = parseInt( ht_max );
		if ( parameter.display.hasAttribute( 'data-maxpercents' ) ) {
			ht_max_percents = parameter.display.getAttribute( 'data-maxpercents' );
			ht_max_percents = ht_max_percents / 100;
		}

		renderSizeChange();

		// Considering multiple usages of this object
		window.addEventListener( 'resize', function() {
			if ( parameter.display.hasAttribute( 'data-widthpercents' ) ) {
				wd = window.innerWidth * wd_percents;
				wd = parseInt( wd );
			}
			parameter.canvas.width = wd;
			parameter.canvas.style.width = parameter.canvas.width + 'px';

			if ( parameter.display.hasAttribute( 'data-maxpercents' ) ) {
				ht_max = window.innerWidth * wd_percents * ht_max_percents;
				ht_max = parseInt( ht_max );
			}
			parameter.canvas.height = ht_max;
			parameter.canvas.style.height = parameter.canvas.height + 'px';

			if ( parameter.context.gl ) {
				parameter.context.gl.viewport( 0, 0, parameter.canvas.width, parameter.canvas.height );
			}

			self.width = parameter.canvas.width;
			self.height = parameter.canvas.height;

		}, false );

		return true;
	}


	/**
	 * Change rendering size
	 */
	function renderSizeChange() {

		if ( parameter.display.hasAttribute( 'data-widthpercents' ) ) {
			wd = window.innerWidth * wd_percents;
			wd = parseInt( wd );
		}
		parameter.canvas.width = wd;
		parameter.canvas.style.width = parameter.canvas.width + 'px';

		if ( parameter.display.hasAttribute( 'data-maxpercents' ) ) {
			ht_max = window.innerWidth * wd_percents * ht_max_percents;
			ht_max = parseInt( ht_max );
		}
		parameter.canvas.height = ht_max;
		parameter.canvas.style.height = parameter.canvas.height + 'px';

		if ( parameter.context.gl ) {
			parameter.context.gl.viewport( 0, 0, parameter.canvas.width, parameter.canvas.height );
		}

		self.width = parameter.canvas.width;
		self.height = parameter.canvas.height;

		return true;
	}

};
