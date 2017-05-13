var O_style = {
	weight : 0.6,
	color : "#000",
	opacity : 1,
	fillColor : "#bebada",
	fillOpacity : 0.9
};

var BI_style = {
	weight : 0.25,
	color : "#000",
	opacity : 1,
	fillColor : "#1f78b4",
	fillOpacity : 0.9
};

var PS_style = {
	weight : 0.25,
	color : "#000",
	opacity : 1,
	fillColor : "#b2df8a",
	fillOpacity : 0.9
};

function styleSelector(feature) {
	switch (feature.properties["Admin_Type"]) {
	case "Princely States":
		return PS_style;
	case "British India":
		return BI_style;
	case "Foreign":
		return O_style;
	}
}


	var map= L.map('map');
	 
//Background Layer, if key exists
if(api_key){
	var vivid = new L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-v9/tiles/256/{z}/{x}/{y}?access_token=' + api_key, {
		minZoom: 1,
		maxZoom: 19,
		attribution: " © <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>"
	});
	vivid.addTo(map);
}else{
	//no key exists
	console.error("No Key Exists");
}

		 
	map.setView([25,80], 5);

var geojson = topojson.feature(BA, BA.objects.data);
var sLayer = L.geoJson(geojson, {
		style : styleSelector,
		onEachFeature : onEachFeature
	}).addTo(map);
var popup;
function onEachFeature(feature, layer) {
	layer.on('click', function (e) {
		console.dir(e.target.feature.properties);

		//Popup Here
        var popText=createPopUpText(e.target.feature.properties);
        popup = L.popup().setLatLng(e.latlng)
            .setContent(popText).openOn(map);
           

	});
}


function createPopUpText(data){
var  innerHTML='<h3>India Ca. 1946</h3><p><br />Name: '+ data["Name"]+"<br /> Administrative Unit: "+data["Admin_1"]+"<br /> Type: "+data["Admin_Type"]+ "</p>";
return innerHTML;
}

