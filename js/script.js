'use strict';
(function(){ 


// Google Maps \\


// Initialize and add the map
window.initMap = function(){
  // The location of Uluru
  var uluru = {lat: 35.680, lng: 139.770};
  // The map, centered at Uluru
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 8, center: uluru});
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({position: uluru, map: map});
};


// Mustache \\

	var templateList = document.getElementById('template-cell-list').innerHTML;

	Mustache.parse(templateList);

	var listItems = '';

	
	for(var i = 0; i < carouselData.length; i++){
		//console.log(carouselData);
		listItems += Mustache.render(templateList, carouselData[i]);
    	console.log(listItems);

	var fullCarousel = Mustache.render(templateList, {listItems}); 
	var results = document.getElementById('results');
	results.insertAdjacentHTML('beforeend', fullCarousel);
	}





// Freaky Carousel \\

var elem = document.querySelector('.carousel');
var flkty = new Flickity( elem, {
  cellAlign: 'left',
  pageDots: false,
  hash: true,
});


// Progress Bar \\


var progressBar = document.querySelector('.progress-bar')

flkty.on( 'scroll', function( progress ) {
  progress = Math.max( 0, Math.min( 1, progress ) );
  progressBar.style.width = progress * 100 + '%';
});


// Reset Button \\


var buttonGroup = document.querySelector('.button-group');

buttonGroup.addEventListener( 'click', function( event ) {
  // filter for button clicks
  if ( !matchesSelector( event.target, '.button' ) ) {
    return;
  }
  var selector = event.target.getAttribute('data-selector');
  flkty.selectCell( selector );
});






})(); 