// function initMap() {
//   // The location of Uluru
//   var uluru = {lat: 4.984592, lng: 8.340144};
//   // The map, centered at Uluru
//   var map = new google.maps.Map(
//       document.getElementById('map'), {zoom: 16, center: uluru});
//   // The marker, positioned at Uluru
//   var marker = new google.maps.Marker({position: uluru, map: map});
// }


var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 16,
    center: new google.maps.LatLng(4.986746, 8.335322),
    mapTypeId: 'roadmap'
  });

  var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';
  var icons = {
    mast: {
      name: 'mast',
      icon: 'img/network2.png'
    },
    library: {
      name: 'Library',
      icon: iconBase + 'library_maps.png'
    },
    info: {
      name: 'Info',
      icon: iconBase + 'info-i_maps.png'
    }
  };

  var features = [
    {
      position: new google.maps.LatLng(4.935239, 8.505742),
      type: 'info'
    }, {
      position: new google.maps.LatLng(5.025359, 8.371349),
      type: 'info'
    }, {
      position: new google.maps.LatLng(4.993369, 8.347506),
      type: 'info'
    }, {
      position: new google.maps.LatLng(4.978582, 8.338164),
      type: 'info'
    }, {
      position: new google.maps.LatLng(4.980634, 8.334409),
      type: 'info'
    }, {
      position: new google.maps.LatLng(4.986746, 8.335322),
      type: 'info'
    }, {
      position: new google.maps.LatLng(5.025359, 8.371349),
      type: 'info'
    }, {
      position: new google.maps.LatLng(4.986746, 8.335322),
      type: 'info'
    }, {
      position: new google.maps.LatLng(5.025359, 8.371349),
      type: 'info'
    }, {
      position: new google.maps.LatLng(4.986746, 8.335322),
      type: 'info'
    }, {
      position: new google.maps.LatLng(4.985515, 8.335717),
      type: 'info'
    }, {
      position: new google.maps.LatLng(4.986746, 8.335322),
      type: 'mast'
    }, {
      position: new google.maps.LatLng(4.980634, 8.334409),
      type: 'mast'
    }, {
      position: new google.maps.LatLng(5.025359, 8.371349),
      type: 'mast'
    }, {
      position: new google.maps.LatLng(4.985528, 8.335579),
      type: 'mast'
    }, {
      position: new google.maps.LatLng(4.985515, 8.335717),
      type: 'mast'
    }, {
      position: new google.maps.LatLng(4.982424, 8.329470),
      type: 'mast'
    }, {
      position: new google.maps.LatLng(4.983183, 8.334277),
      type: 'mast'
    }, {
      position: new google.maps.LatLng(4.988867, 8.335649),
      type: 'library'
    }
  ];

  // Create markers.
  features.forEach(function(feature) {
    var marker = new google.maps.Marker({
      position: feature.position,
      icon: icons[feature.type].icon,
      map: map
    });
  });

  var legend = document.getElementById('legend');
  for (var key in icons) {
    var type = icons[key];
    var name = type.name;
    var icon = type.icon;
    var div = document.createElement('div');
    div.innerHTML = '<img src="' + icon + '"> ' + name;
    legend.appendChild(div);
  }

  map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(legend);
}
