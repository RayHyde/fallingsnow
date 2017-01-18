* Plugin name:	jquery.fallingsnow.js
* Version:			1.0
* Description:	generates falling snowflakes
* Website: 			generic jQuery plugin
* Version:			3-12-2015
* Author:				Ray Hyde - www.rayhyde.nl


Yet another jQuery snow plugin...

When I started out writing this plugin I didn’t know there were already many out there. Not that that would have mattered as I simply like a challenging puzzle and a snowdrift is as good a subject as the next.

* A word of warning *
Of course I know that using a lot of Javascript animations is bad for your CPU, but that is not the point - I wanted the mathematical challenge. And yes, a CSS3 or a canvas solution is easier on your CPU, but a JS solution gives you much more flexibility. So: use this plugin wisely, e.g. minimize the size of your snowdrift: use it in smaller elements such as the example here instead of across the full page.

* The goodies *

Initial state - I wanted the flakes to be randomly all over the container when the page is loaded, then to start their individual animations from there. This gives a nicer effect than starting with an empty page and only then have the snow beginning to fall from the top. 

Flake speed - each flake gets its own random animation speed.

Drifting - The flakes have a deviation from their initial point of falling. This makes the snowflake start at a random new point but it also causes drift when falling. 

Parallax - the flakes come in randomly chosen sizes. The smaller the size, the slower the speed. This creates a nice 3D parallax effect.

Number of flakes - the number of snowflakes in your element is randomly chosen, but dependent on the size of your element. In short: the width of the container is divided by fourteen, then randomly given plus or minus 10 flakes.

Opacity - if set to true (default) then each flake randomly gets one of three different opacities: 1, 0.8 and 0.7.

* How to use this plugin *
1. Link the files you need
Include the jQuery script at the bottom of your page, e.g. through a CDN:
	<script src="//code.jquery.com/jquery-2.1.3.min.js"></script></pre>
Then include the minimized version of the script:
	<script src="[path to your script]/jquery.fallingsnow.min.js"></script>

Change [path to your script] to where it resides, eg "js".

Also make sure to include the CSS file in the <head> section of your page:

	<link rel="stylesheet" href="[path to your stylesheet]/jquery.fallingsnow.css">

Change [path to your stylesheet] to where it resides, eg "css".
2. Create your HTML markup
This is very simple: create an element and style the element containing it. Like

	<div id="snow-wrapper">
		<div id="snow"></div>
	</div>
	<style>
		#snow-wrapper {
			width: 500px;
			height: 500px;
			...
		}
	</style>

The #snow element automatically takes on the width and height of the container element.

3. Then call the plugin
Then initialize the plugin, telling it in which element it needs to run (default is "#snow"):

	<script>
		$( "#snow" ).fallingSnow();		
	</script>


You can change the defaults here too:

	<script>
		$( "#snow" ).fallingSnow({
			flakeSizeAdjust: 1.5,
			flakeSpeedAdjust: 1,
			drift: 400,
		});		
	</script>

See the options section for an overview of possible tweaks.

4. Putting it all together
This is your basic page to get the plugin up and running:

	<!DOCTYPE html>
	<html>
		<head>
			...
			<link rel="stylesheet" href="css/jquery.fallingsnow.css">
			<link rel="stylesheet" href="css/snow.css">
		</head>
		<body>
			...
			<div class="snow-wrap">
				<div id="snow"></div>
			</div>
			...
			<script src="//code.jquery.com/jquery-2.1.3.min.js"></script>
			<script src="js/jquery.fallingsnow.min.js"></script>
			<script>
				$( "#snow" ).fallingSnow();		
			</script>
		</body>

	</html>

see the included file "myfallingsnow.html".


* Options for your snowdrift *

Flake size
You can adjust the overall size of the snowflakes. 0.1 is smaller, e.g. 2 is larger. Default is 1. Decimals are allowed but do not use 0 (zero) as multiplying by zero sets all sizes to 0:

	flakeSizeAdjust: 1,

Flake speed
Tweak the general speed of the falling snow. 0.1 is faster, e.g. 5 is slower. Default is 2. Decimals are allowed but do not use 0 (zero) as multiplying by zero cancels all speeds:

	flakeSpeedAdjust: 2,

Stop the snow - you can stop the snow falling:

	stopOnClick : true,

You can also choose the element on which to click for freezing (pun not intended) the snowfall:

	stopElement: $(myElement),

Drift
Set the amount of deviation between top and bottom of the screen  when a flake falls. This is randomly generated plus or minus, based on this setting, causing a nice twirling drifting effect. Default is 100: 
	drift: 100,