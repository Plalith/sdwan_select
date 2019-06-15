
/* Static Content of MAP */

function initMap() {
	
	var ahmedabad = {
		info: '<div class="map-text"><div class="form-group"><label>Site ID</label><input class="form-control" value="S92"></div><div class="form-group"><label>Configuration</label><div class="select"><select class="form-control"><option>Internet Access with Backup</option><option>Internet Access with Backup</option></select></div></div></div>',
		lat: 23.03386,
		long: 72.585022,
		type:"blue"
		
	};
	
	var surat = {
		info: '<div class="map-text"><div class="form-group"><label>Site ID</label><input class="form-control" value="S92"></div><div class="form-group"><label>Configuration</label><div class="select"><select class="form-control"><option>Internet Access with Backup</option><option>Internet Access with Backup</option></select></div></div></div>',
		lat: 21.170240,
		long: 72.831062,
		type:"blue"
		
	};
	
    var Mumbai = {
		info: '<div class="map-text"><div class="form-group"><label>Site ID</label><input class="form-control" value="S92"></div><div class="form-group"><label>Configuration</label><div class="select"><select class="form-control"><option>Internet Access with Backup</option><option>Internet Access with Backup</option></select></div></div></div>',
		lat: 19.0760,
		long: 72.8777,
		type:"blue"
	};
   
   	var pune = {
		info: '<div class="map-text"><div class="form-group"><label>Site ID</label><input class="form-control" value="S92"></div><div class="form-group"><label>Configuration</label><div class="select"><select class="form-control"><option>Internet Access with Backup</option><option>Internet Access with Backup</option></select></div></div></div>',
		lat: 18.5204,
		long: 73.8567,
		type:"blue"
	};
	
	var Mah = {
		info: '<div class="map-text"><div class="form-group"><label>Site ID</label><input class="form-control" value="S92"></div><div class="form-group"><label>Configuration</label><div class="select"><select class="form-control"><option>Internet Access with Backup</option><option>Internet Access with Backup</option></select></div></div></div>',
		lat: 19.663280,
		long: 75.300293,
		type:"blue"
	};

	var haydrabad = {
		info: '<div class="map-text"><div class="form-group"><label>Site ID</label><input class="form-control" value="S92"></div><div class="form-group"><label>Configuration</label><div class="select"><select class="form-control"><option>Internet Access with Backup</option><option>Internet Access with Backup</option></select></div></div></div>',
		lat: 17.387140,
		long: 78.491684,
		type:"blue"
	};
	
	var chhattisgarh = {
		info: '<div class="map-text"><div class="form-group"><label>Site ID</label><input class="form-control" value="S92"></div><div class="form-group"><label>Configuration</label><div class="select"><select class="form-control"><option>Internet Access with Backup</option><option>Internet Access with Backup</option></select></div></div></div>',
		lat: 21.295132,
		long: 81.828232,
		type:"blue"
	};
	
	var jharkhand = {
		info: '<div class="map-text"><div class="form-group"><label>Site ID</label><input class="form-control" value="S92"></div><div class="form-group"><label>Configuration</label><div class="select"><select class="form-control"><option>Internet Access with Backup</option><option>Internet Access with Backup</option></select></div></div></div>',
		lat: 23.6102,
		long: 85.2799,
		type:"blue"
	};
	
	var Odisha = {
		info: '<div class="map-text"><div class="form-group"><label>Site ID</label><input class="form-control" value="S92"></div><div class="form-group"><label>Configuration</label><div class="select"><select class="form-control"><option>Internet Access with Backup</option><option>Internet Access with Backup</option></select></div></div></div>',
		lat: 20.9517,
		long: 85.0985,
		type:"blue"
	};
	
	var Kolkata = {
		info: '<div class="map-text"><div class="form-group"><label>Site ID</label><input class="form-control" value="S92"></div><div class="form-group"><label>Configuration</label><div class="select"><select class="form-control"><option>Internet Access with Backup</option><option>Internet Access with Backup</option></select></div></div></div>',
		lat: 22.5726,
		long: 88.3639,
		type:"blue"
	};
	

	var blueimg = "images/img_blue_map.png";
	var locations = [
      [ahmedabad.info, ahmedabad.lat, ahmedabad.long,ahmedabad.type ],
      [surat.info, surat.lat, surat.long, surat.type],
      [Mumbai.info, Mumbai.lat, Mumbai.long,Mumbai.type ],
	  [pune.info, pune.lat, pune.long, pune.type ],
	  [Mah.info, Mah.lat, Mah.long, Mah.type ],
	  [haydrabad.info, haydrabad.lat, haydrabad.long, haydrabad.type ],
	  [chhattisgarh.info, chhattisgarh.lat, chhattisgarh.long, chhattisgarh.type ],
	  [jharkhand.info, jharkhand.lat, jharkhand.long, jharkhand.type ],
	  [Odisha.info, Odisha.lat, Odisha.long, Odisha.type ],
	  [Kolkata.info, Kolkata.lat, Kolkata.long, Kolkata.type ],
    ];

	var map = new google.maps.Map(document.getElementById("map"), {
		zoom: 5,
		center: new google.maps.LatLng(21.521223, 79.843303),
		mapTypeId: google.maps.MapTypeId.ROADMAP
	});

	$('.nav-tabs li a').on('shown.bs.tab', function(e){
        google.maps.event.trigger(map, 'resize');
    });
    
    var infowindow = new google.maps.InfoWindow()

	var marker, i;
	for (i = 0; i < locations.length; i++) {
		var numberMarkerImg = {
			url: setimg(locations[i][3]),
			labelOrigin: new google.maps.Point(20,17)
		};	
		debugger;
		marker = new google.maps.Marker({
			position: new google.maps.LatLng(locations[i][1], locations[i][2]),
			anchor: new google.maps.Point(0,0),
			label:{text:" "+(i+1) +" "},
			labelOrigin: new google.maps.Point(100,33),
			map: map,
			icon: numberMarkerImg
		});
		marker
		google.maps.event.addListener(marker, 'click', (function (marker, i) {
			return function () {
				infowindow.setContent(locations[i][0]);
				infowindow.open(map, marker);

			}
		})(marker, i));
	}
    
    
	
	function setimg(type){
		if(type == "green"){
		  return blackimg;
		}else if(type == "red"){
			return redimg;
		}else{
			return blueimg;
		}
		
	}
}

