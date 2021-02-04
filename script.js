var mymap = L.map('mapid').setView([51.505, -0.09], 13);

L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}{r}.{ext}', {
	attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	subdomains: 'abcd',
	minZoom: 0,
	maxZoom: 20,
	ext: 'png'
}).addTo(mymap);

var marker1 = L.marker([51.525, -0.09]).addTo(mymap);

var marker2 = L.marker([51.508, -0.09]).addTo(mymap);

var circle = L.circle([51.508, -0.11], {
    color: 'green',
    fillColor: '#f03',
    fillOpacity: 0.75,
    radius: 700
}).addTo(mymap);

var polygon = L.polygon([
    [51.509, -0.08],
    [51.503, -0.06],
    [51.51, -0.047],
]).addTo(mymap);

marker1.bindPopup("<b>Hello world!</b><br>I am a marker 1.").openPopup();
marker2.bindPopup("<b>Hello world!</b><br>I am a marker 2.").openPopup();
circle.bindPopup("I am an AWESOME circle.");
polygon.bindPopup("I am a polygon.");

var popup = L.popup()
    .setLatLng([51.5, -0.09])
    .setContent("I am a standalone popup.")
    .openOn(mymap);

var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(mymap);
}

mymap.on('click', onMapClick);
