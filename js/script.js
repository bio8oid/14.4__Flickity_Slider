'use strict';
(function(){ 


// Google Maps \\


// Initialize and add the map
window.initMap = function(){

// The map, centered at location
var map = new google.maps.Map(document.getElementById('map'), {zoom: 3, center: carouselData[0].coords});

// Location marker
var marker = new google.maps.Marker({position: carouselData[0].coords, map: map});

// Loop placing markers on map

for(let i in carouselData){
	marker[i] = new google.maps.Marker({position: carouselData[i].coords, map: map});

	marker[i].addListener("click", function() {
        flkty.select(i);
      });
}
  

// Pan and zoom acording to carousel cell number

var flkty = new Flickity('.carousel');
flkty.on( 'change', function( index ) {

	map.setZoom(3);
	map.panTo(carouselData[index].coords);
	map.setZoom(7);
	});
};


// Mustache \\

	var templateList = document.getElementById('template-cell-list').innerHTML;

	Mustache.parse(templateList);

	var listItems = '';
	
	for(var i = 0; i < carouselData.length; i++){
		listItems = Mustache.render(templateList, carouselData[i]);
		var results = document.getElementById('results');
		results.insertAdjacentHTML('beforeend', listItems);
	}


// Freaky Carousel \\

var elem = document.querySelector('.carousel');
var flkty = new Flickity( elem, {
  cellAlign: 'left',
  pageDots: false,
  hash: true,
  //autoPlay: true
});

flkty.on( 'select', function( index ) {


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