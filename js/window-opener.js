/**
 * window-opener.js in Jimmy Branding, a WordPress plugins
 * @package Jimmy Branding
 * @author Kenta Ishii
 * License: GPLv2 or later
 */

// Height Changer
(function( $ ) {
	var is_open = false;
	var ht = $('#jimmy-branding-content').css('height');
	var op_color = $('#jimmy-branding-content').data('color');
	var ht_min = $('#jimmy-branding-content').data('min');
	var ht_max = $('#jimmy-branding-content').data('max');
	if ( $('#jimmy-branding-content').data('minpercents') ) {
		var ht_min_percents = $('#jimmy-branding-content').data('minpercents');
		ht_min_percents = ht_min_percents / 100;
	}
	if ( $('#jimmy-branding-content').data('maxpercents') ) {
		var ht_max_percents = $('#jimmy-branding-content').data('maxpercents');
		ht_max_percents = ht_max_percents / 100;
	}
	if ( $('#jimmy-branding-content').data('widthpercents') ) {
		var wd_percents = $('#jimmy-branding-content').data('widthpercents');
		wd_percents = wd_percents / 100;
	}
	sizeChange();

	function sizeChange() {
		if ( $('#jimmy-branding-content').data('minpercents') ) {
			ht_min = $( window ).width() * ht_min_percents * wd_percents;
			ht_min = parseInt( ht_min ) + 'px';
			if ( ! is_open ) {
				$('#jimmy-branding-content').css('height', ht_min );
				ht = ht_min;
			}
		}
		if ( $('#jimmy-branding-content').data('maxpercents') ) {
			ht_max = $( window ).width() * ht_max_percents * wd_percents;
			ht_max = parseInt( ht_max ) + 'px';
			if ( is_open ) {
				$('#jimmy-branding-content').css('height', ht_max );
				ht = ht_max;
			}
		}
	}

	$( window ).bind('resize.wpevent_jimmy_branding', function( e ) {
		sizeChange();
		return true;
	});

	$('#jimmy-branding-opener').bind('click.wpevent_jimmy_branding', function( e ) {
		ht = $('#jimmy-branding-content').css('height');
		//console.log( ht );
		if ( ! is_open ) {
			$('#jimmy-branding-content').css('height', ht_max );
			$('#jimmy-branding-opener').css({
						'border-top': 'none',
						'border-bottom': '0.9em solid ' + op_color
						});
			is_open = true;
		} else if ( is_open ) {
			$('#jimmy-branding-content').css('height', ht_min );
			$('#jimmy-branding-opener').css({
						'border-top': '0.9em solid ' + op_color,
						'border-bottom': 'none'
						});
			is_open = false;
		}
	});
})( jQuery );
