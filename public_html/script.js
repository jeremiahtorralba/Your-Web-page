// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

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