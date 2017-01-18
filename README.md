<h1>Yet another jQuery snow plugin...</h1>

<p>When I started out writing this plugin I didn’t know there were already many out there. Not that that would have mattered as I simply like a challenging puzzle and a snowdrift is as good a subject as the next.</p>

<p><strong>See it in action:</strong> <a href="http://rayhyde.github.io/fallingsnow/">http://rayhyde.github.io/fallingsnow/</a></p>

<h2>A word of warning</h2>
<p>Of course I know that using a lot of Javascript animations is bad for your CPU performance, but that is not the point - I wanted the mathematical challenge. And yes, a CSS3 or a canvas solution is easier on your CPU, but a JS solution gives you much more flexibility. So: use this plugin wisely, e.g. minimize the size of your snowdrift by using it within smaller elements, such as the examples here, instead of across the full page width & height.</p>

<h2>The goodies</h2>

<p><strong>Initial state </strong>- I wanted the flakes to be randomly all over the container when the page is loaded, then to start their individual animations from there. This gives a nicer effect than starting with an empty page and only then have the snow beginning to fall from the top. </p>

<p><strong>Flake speed </strong>- each flake gets its own random animation speed.</p>

<p><strong>Drifting</strong> - The flakes have a deviation from their initial point of falling. This makes the snowflake start at a random new point at the top, but it also causes it to drift when falling. </p>

<p><strong>Parallax </strong>- the flakes come in randomly chosen sizes, within bounds. The smaller the size, the slower the speed. This creates a nice 3D parallax effect.</p>

<p><strong>Number of flakes</strong> - the number of snowflakes in your element is randomly chosen, but dependent on the size of your element. In short: the width of the container is divided by fourteen, then randomly given plus or minus 10 flakes.</p>

<p><strong>Opacity</strong> - if set to true (default) then each flake randomly gets one of three different opacities: 1, 0.8 and 0.7.</p>

<h2>How to use this plugin</h2>
<h3>1. Link the files you need</h3>
<p>Include the jQuery script at the bottom of your page, e.g. through a CDN:</p>
<pre>	&lt;script src="//code.jquery.com/jquery-2.1.3.min.js"&gt;&lt;/script&gt;</pre>
<p>Then include the minimized version of the script:</p>
<pre>&lt;script src="[path to your script]/jquery.fallingsnow.min.js"&gt;&lt;/script&gt;</pre>

<p>Change [path to your script] to where it resides, eg "js".</p>

<p>Also make sure to include the CSS file in the &lt;head&gt; section of your page:</p>
<pre>
&lt;link rel="stylesheet" href="[path to your stylesheet]/jquery.fallingsnow.css"&gt;
</pre>
<p>Change [path to your stylesheet] to where it resides, eg "css".</p>
<h3>2. Create your HTML markup</h3>
<p>This is very simple: create an element and style the element containing it. Like</p>
<pre>
&lt;div id="snow-wrapper"&gt;
&lt;div id="snow"&gt;&lt;/div&gt;
&lt;/div&gt;
&lt;style&gt;
#snow-wrapper {
width: 500px;
height: 500px;
...
}
&lt;/style&gt;
</pre>
<p>The #snow element automatically takes on the width and height of the container element.</p>

<h3>3. Then call the plugin</h3>
<p>Then initialize the plugin, telling it in which element it needs to run (default is "#snow"):</p>
<pre>
&lt;script&gt;
$( "#snow" ).fallingSnow();		
&lt;/script&gt;
</pre>

<p>You can change the defaults here too:</p>
		<pre>
&lt;script&gt;
$( "#snow" ).fallingSnow({
flakeSizeAdjust: 1.5,
flakeSpeedAdjust: 1,
drift: 400,
});		
&lt;/script&gt;
</pre>

<p>See the options section for an overview of possible tweaks.</p>

<h3>4. Putting it all together</h3>
<p>This is your basic page to get the plugin up and running:</p>
<pre>
&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
...
&lt;link rel="stylesheet" href="css/jquery.fallingsnow.css"&gt;
&lt;link rel="stylesheet" href="css/myfallingsnow.css"&gt;
&lt;/head&gt;
&lt;body&gt;
...
&lt;div class="snow-wrap"&gt;
	&lt;div id="snow"&gt;&lt;/div&gt;
&lt;/div&gt;
...
&lt;script src="//code.jquery.com/jquery-2.1.3.min.js"&gt;&lt;/script&gt;
&lt;script src="js/jquery.fallingsnow.min.js"&gt;&lt;/script&gt;
&lt;script&gt;
	$( "#snow" ).fallingSnow();		
&lt;/script&gt;
&lt;/body&gt;

&lt;/html&gt;

</pre>

<p>see the included file "myfallingsnow.html".</p>
<h2>Options for your snowdrift</h2>

<h3>Flake size</h3>
<p>You can adjust the overall size of the snowflakes. 0.1 is smaller, e.g. 2 is larger. Default is 1. Decimals are allowed but do not use 0 (zero) as multiplying by zero sets all sizes to 0:</p>

<pre>	flakeSizeAdjust: 1,</pre>

<h3>Flake speed</h3>
<p>Tweak the general speed of the falling snow. 0.1 is faster, e.g. 5 is slower. Default is 2. Decimals are allowed but do not use 0 (zero) as multiplying by zero cancels all speeds:</p>

<pre>	flakeSpeedAdjust: 2,</pre>

<p>Stop the snow - you can stop the snow falling:</p>

<pre>	stopOnClick : true,</pre>

<p>You can also choose the element on which to click for freezing (pun not intended) the snowfall. Default is #snow:</p>

<pre>	stopElement: $('#snow),</pre>

<h3>Drift</h3>
<p>Set the amount of deviation between top and bottom of the screen  when a flake falls. This is randomly generated plus or minus, based on this setting, causing a nice twirling drifting effect. Default is 100: </p>
<pre>	drift: 100,</pre>

<h2>My Playground</h2>

<p>This project is part of my Playground - a collection of fun (and dare I say it: clever) stuff I made in the past, from jQuery games and plugins to CSS animation tricks.</p>

<p>Please drop in on my portfolio site <a href="http://www.rayhyde.nl">www.rayhyde.nl</a>!</p>