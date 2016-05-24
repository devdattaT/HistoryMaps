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
	 
//Background Layer
		L.tileLayer('//otile{s}-s.mqcdn.com/tiles/1.0.0/sat/{z}/{x}/{y}.jpg', {
			attribution : 'Tiles Courtesy of <a href="http://www.mapquest.com/">MapQuest</a> &mdash; Portions Courtesy NASA/JPL-Caltech and U.S. Depart. of Agriculture, Farm Service Agency',
			subdomains : '1234'
		}).addTo(map);
		 
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

