	var map= L.map('map');
	 
//Background Layer
		L.tileLayer('//otile{s}-s.mqcdn.com/tiles/1.0.0/sat/{z}/{x}/{y}.jpg', {
			attribution : 'Tiles Courtesy of <a href="http://www.mapquest.com/">MapQuest</a> &mdash; Portions Courtesy NASA/JPL-Caltech and U.S. Depart. of Agriculture, Farm Service Agency',
			subdomains : '1234'
		}).addTo(map);
		 
	map.setView([25,80], 5);

	//Add TopoJSON
	var data=omnivore.topojson('BA.json',{
		/*	style : styleSelector,*/
			onEachFeature : onEachFeature
		});
	data.addTo(map);
	
	



	var popup;
	function onEachFeature(feature, layer) {
		layer.on('click', function (e) {
	 	 console.dir(e);
	 	 /*   selectedFeature = feature;
			if (feature.properties.v!=2){
	        //show popup
	        var popText=createPopUpText();
	        popup = L.popup().setLatLng(e.latlng)
	            .setContent(popText).openOn(map);
	            //set focus
	            document.getElementById('StateSelector').focus();
				}

				*/
		});
	}

