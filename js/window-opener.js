/**
 * window-opener.js in Jimmy Branding, a WordPress plugins
 * @package Jimmy Branding
 * @author Kenta Ishii
 * License: GPLv2 or later
 */

var JIMMY_BRANDING = JIMMY_BRANDING || {};

JIMMY_BRANDING.windowOpener = function( id_content, id_opener ) {
	id_content = '#' + id_content;
	id_opener = '#' + id_opener;
	// Height Changer
	(function( $ ) {
		var grand_parent = $( id_content ).parent().parent();
		var is_open = false;
		var ht = $( id_content ).css('height');
		var op_color = $( id_content ).data('color');
		var ht_min = $( id_content ).data('min');
		var ht_max = $( id_content ).data('max');
		if ( $( id_content ).data('minpercents') ) {
			var ht_min_percents = $( id_content ).data('minpercents');
			ht_min_percents = ht_min_percents / 100;
		}
		if ( $( id_content ).data('maxpercents') ) {
			var ht_max_percents = $( id_content ).data('maxpercents');
			ht_max_percents = ht_max_percents / 100;
		}
		if ( $( id_content ).data('widthpercents') ) {
			var wd_percents = $( id_content ).data('widthpercents');
			wd_percents = wd_percents / 100;
		}
		sizeChange();

		/*
		 * Node.innerWidth of jQuery includes padding, equivalent to Node.clientWidth of JavaScript
		 */
		function sizeChange() {
			if ( $( id_content ).data('minpercents') ) {
				ht_min = grand_parent.innerWidth() * ht_min_percents * wd_percents;
				ht_min = parseInt( ht_min ) + 'px';
				if ( ! is_open ) {
					$( id_content ).css('height', ht_min );
					ht = ht_min;
				}
			}
			if ( $( id_content ).data('maxpercents') ) {
				ht_max = grand_parent.innerWidth() * ht_max_percents * wd_percents;
				ht_max = parseInt( ht_max ) + 'px';
				if ( is_open ) {
					$( id_content ).css('height', ht_max );
					ht = ht_max;
				}
			}
		}

		$( window ).bind('resize.wpevent_jimmy_branding', function( e ) {
			sizeChange();
			return true;
		});

		$( id_opener ).bind('click.wpevent_jimmy_branding', function( e ) {
			ht = $( id_content ).css('height');
			//console.log( ht );
			if ( ! is_open ) {
				$( id_content ).css('height', ht_max );
				$( id_opener ).css({
							'border-top': 'none',
							'border-bottom': '0.9em solid ' + op_color
							});
				is_open = true;
			} else if ( is_open ) {
				$( id_content ).css('height', ht_min );
				$( id_opener ).css({
							'border-top': '0.9em solid ' + op_color,
							'border-bottom': 'none'
							});
				is_open = false;
			}
		});
	})( jQuery );
};