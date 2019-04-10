'use strict';
(function(){ 


// Google Maps \\


// Initialize and add the map

window.initMap = function(){
  // The location 

  var location = [

  {
  	lat: 35.680,
  	lng: 139.770
  },
  {
  	lat: 48.856,
  	lng: 2.351
  },
  {
  	lat: 50.850,
  	lng: 4.360
  },
  {
  	lat: 47.560,
  	lng: 7.590
  },
  {
  	lat: 13.790,
  	lng: 100.510
  }
  ];
  
  // The map, centered at location

 var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 3, center: location[0]});

// Loop placing markers on map

  for(var i = 0; i < location.length; i++){
	var marker = new google.maps.Marker({position: location[i], map: map});
	console.log(marker);
	}

	

/*
  var infos = document.querySelectorAll('#infos');
console.log(infos);

  marker.addListener('click', function(){

			for(var i = 0; i < infos.length; i++){
		infos[i].innerHTML = 'You clicked marker toko';
	}
});	

 */



/*
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 8, center: paris});

  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 8, center: brussels});

  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 8, center: basel});

  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 8, center: bangkok});

  // The marker, positioned at location
  var markerTokyo = new google.maps.Marker({position: tokyo, map: map});
  var markerParis = new google.maps.Marker({position: paris, map: map});
  var markerBrussels = new google.maps.Marker({position: brussels, map: map});
  var markerBasel = new google.maps.Marker({position: basel, map: map});
  var markerBangkok = new google.maps.Marker({position: bangkok, map: map});
*/


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