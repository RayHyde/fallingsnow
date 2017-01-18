/* ----------------------------------------------------------------------

* File name:		jquery.fallingsnow.js
* Version:			1.0
* Description:	generates falling snowflakes
* Website: 			generic jQuery plugin
* Version:			27-11-2015
* Author:				Ray Hyde - www.rayhyde.nl

---------------------------------------------------------------------- */

(function ($) {
	$.fn.fallingSnow = function (options) {

		// This is where the default options are set.
		var settings = $.extend({
			// do we want to be able to stop the snow falling?
			stopOnClick : true,
			
			// on this we click to stop the snow animation
			stopElement: $('#snow'),

			// tweak the general speed of the falling snow. 
			// 0.1 is faster, e.g. 5 is slower. Decimals are allowed
			// but do not use 0 (zero)
			speedAdjust: 2,

			// tweak the general size of the snowflakes. 
			// 0.1 is smaller, e.g. 2 is larger. Decimals are allowed
			thicknessAdjust: 1,
			
			// set the deviation from the initial point of falling 
			// this makes the snowflake start at a random new point
			// but also causes some drift when falling
			drift: 100,

			// set different opacities. If true then three different
			// opacities are created for the snowflakes: 1, 0.8 and 0.7
			opacity: true,
			
		}, options);

		// then some initial vars
		var $snow = $(this),
				ww = $(window).width(),
				wh = $(window).height(),
				targetQtyFlakes = parseInt(ww / 14),
				thickness, left, top, speed, opacity;
		
		// first we make the random number of flakes dependent
		// on the width of the screen
		targetQtyFlakes = (Math.round(targetQtyFlakes / 10) * 10) / 2;
		var	numFlakes = Math.floor(Math.random() * (targetQtyFlakes - 9)) + (targetQtyFlakes + 11);
		
		// then we generate a random number of snowflakes 
		// each with a random position, width and height,
		// and three types of opacity
		for (var i = 0; i < numFlakes; i++) {
			thickness = (Math.floor(Math.random() * 11)) * settings.thicknessAdjust;
			left = Math.floor(Math.random() * 101);
			top = Math.floor(Math.random() * 101);
			if (settings.opacity == true) {
				opacity = Math.floor(Math.random() * 3);
			} else {
				opacity = 0;
			}
			
			// here we make the falling speed dependent on
			// the size of the snowflake - the smallest being
			// the slowest, thus creating a nice parallax effect
			if ( thickness < 5) {
				speed = (Math.floor(Math.random() * 3001) + 2100);
			} else if ( thickness > 5 && thickness < 9) {
				speed = (Math.floor(Math.random() * 2099) + 1700);
			} else if ( thickness > 8) {				
				speed = (Math.floor(Math.random() * 1699) + 1000);
			}
			
			speed = speed * settings.speedAdjust;
			
			$snow.append('<b class="op' + opacity + '" style="width: ' + thickness + 'px; height: ' + thickness + 'px;left: ' + left + '%; top: ' + top + '%;" data-speed="' + speed + '"></b>');
		}
		// the we animate each individual snowflake
		$snow.find('b').each(function () {

			var flake = $(this);

			// set a random position
			var top = parseInt(flake.css('top'));
			var thisLeft = parseInt(flake.css('left'));

			var topPercent = top / wh;
			// set a random speed
			var thisSpeed = parseInt(flake.attr('data-speed'));
			//		var speed1  = topPercent * thisSpeed;
			// create a percentual partial speed for when the snowflake
			// is initally already some way down
			var speed2 = thisSpeed - ((top / wh) * thisSpeed);

			// set the minimum and maximum deviation for 
			// when the loop starts again so the snowflake will not
			// be in the same position next time round.
			// This is also use for animating the "drift"
			// when falling down
			var min = settings.drift * -1;
			var max = settings.drift;

			// this is the animation loop for each snowflake
			function loopAnim() {
				flake.animate({
						top: 0,
						left: thisLeft + Math.floor(Math.random() * (max - min + 1)) + min
					}, 0)
					.animate({
						top: '100%',
						left: thisLeft + Math.floor(Math.random() * (max - min + 1)) + min
					}, thisSpeed, 'linear', function () {
						loopAnim();
					});
			}

			// first we animate them to the bottom of the screen 
			// with the partial animation time,
			// then we loop the animations from top to bottom
			flake.animate({
				top: wh
			}, speed2, 'linear', function () {
				loopAnim();
			});
		});

		// stop the snow falling when clicking on it
		settings.stopElement.click(function () {
			if (settings.stopOnClick == true ) {
				$snow.find('b').stop(true);
			}
		});
		
	}
	
}(jQuery));