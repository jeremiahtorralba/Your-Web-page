# Your-Web-page
HTML, CSS, and JavaScript Web Page template. [Rotating Images]() [Google Maps API]()

### Re-usable Web page layouts.

![image](https://user-images.githubusercontent.com/28037427/217620280-e2839925-692e-4943-a940-092da921c28b.png)

### Rotating Images Copyright (c) 2010 TrendMedia Technologies, Inc., Brian McNitt. All rights reserved.
#### index.html, lines 59-67
```
<div id="rotating-item-wrapper"> 
  <img src="images/ship.jpg" class="rotating-item"/>
  <img src="images/northern-cardinal_800.jpg" class="rotating-item"/>
  <img src="images/nat-weerawong.jpg" class="rotating-item"/>
  <div class="content">
    <h2>Welcome</h2>
    <p>A web page (or webpage) is a hypertext document on the World Wide Web.</p>
  </div>
</div>
```

#### script.js lines 18-52
```
// Rotating Images
// 
// Copyright (c) 2010 TrendMedia Technologies, Inc., Brian McNitt. 
// All rights reserved.
//
// Released under the GPL license
// http://www.opensource.org/licenses/gpl-license.php
//
// **********************************************************************
// This program is distributed in the hope that it will be useful, but
// WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. 
// **********************************************************************
$(window).load(function() {	//start after HTML, images have loaded
    var InfiniteRotator = {
    init: function() {
    var initialFadeIn = 500; //initial fade-in time (in milliseconds)
    var itemInterval = 8000; //interval between items (in milliseconds)
    var fadeTime = 2000; //cross-fade time (in milliseconds)
    var numberOfItems = $('.rotating-item').length; //count number of items
    var currentItem = 0; //set current item
    $('.rotating-item').eq(currentItem).fadeIn(initialFadeIn); //show first item
    var infiniteLoop = setInterval(function(){ //loop through the items
    $('.rotating-item').eq(currentItem).fadeOut(fadeTime);
    if(currentItem == numberOfItems -1) {
        currentItem = 0;
    } else {
	currentItem++;
    }
    $('.rotating-item').eq(currentItem).fadeIn(fadeTime);
    }, itemInterval);	
    }	
    };
        InfiniteRotator.init();
});
```

### Google Maps API development
#### index.html, lines 123-127
```
<!--https://maps.googleapis.com/maps/api/js?key='HERE'&callback=initMap-->
<script async defer 
  src="https://maps.googleapis.com/maps/api/js?key=&callback=initMap" 
  type="text/javascript">      
</script>
```

#### script.js lines 54-64
```
function initMap() { // Initialize google maps 
    var uluru = {lat: 43.6532, lng: 79.3832};
    var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 10,
    center: uluru
    });
    var marker = new google.maps.Marker({
    position: uluru,
    map: map
    });
}
```
