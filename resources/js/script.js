let checkboxStates

var json;

async function pickJSON() {
    const response = await fetch('./sites.json');
    const responsejson = await response.json();
    geojsonLayer.addData(responsejson);
    json = responsejson;
    // console.log(jsontest);
}


var fiveStars = new L.Icon({
    iconSize: [25, 41], // size of the icon
    iconAnchor: [5, 5], // point of the icon which will correspond to marker's location
    popupAnchor: [0, -5], // point from which the popup should open relative to the iconAnchor
    iconUrl: 'resources/markers/marker-icon-5x.png'
});
var fourStars = new L.Icon({
    iconSize: [25, 41], // size of the icon
    iconAnchor: [5, 5], // point of the icon which will correspond to marker's location
    popupAnchor: [0, -5], // point from which the popup should open relative to the iconAnchor
    iconUrl: 'resources/markers/marker-icon-4x.png'
});
var threeStars = new L.Icon({
    iconSize: [25, 41], // size of the icon
    iconAnchor: [5, 5], // point of the icon which will correspond to marker's location
    popupAnchor: [0, -5], // point from which the popup should open relative to the iconAnchor
    iconUrl: 'resources/markers/marker-icon-3x.png'
});


const map = L.map('map', {
        minZoom: 3,
        maxZoom: 18
    }).setView([40.4165, -3.70256], 10) //madrid centro con un zoom inicial de 10

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://artulance.com">Kebadas MAP</a>'
}).addTo(map);

const geojsonLayer = L.geoJSON(null, {
    filter: (feature) => {

        const iscalidadChecked = checkboxStates.calidad.includes(feature.properties.calidad);
        // const isEventTypeChecked = checkboxStates.eventTypes.includes(feature.properties.eventType)
        // return iscalidadChecked && isEventTypeChecked //only true if both are true
        return iscalidadChecked;
    },
    pointToLayer: function(point, latlng) {
        let icono = point.properties.icon;
        //  console.log(this[icono]); //Accedo al objeto vía valor de la propiedad
        return L.marker(latlng, {
            icon: this[icono]
        })
    },
    coordsToLatLng: function(coords) {
        // latitude , longitude, altitude
        //return new L.LatLng(coords[1], coords[0], coords[2]); //Normal behavior
        return new L.LatLng(coords[0], coords[1], coords[2]);
    },
    onEachFeature: function(feature, layer) {
        layer.on('click', showFlag);
    }
}).addTo(map);
/*
,
    pointToLayer: function(point, latlng) {
    return L.marker(latlng, { icon: mediumIcon })
  }
*/

function updateCheckboxStates() {
    checkboxStates = {
        calidad: [],
        eventTypes: []
    }

    for (let input of document.querySelectorAll('input')) {
        //cambio la clase por un atributo
        let attribute = input.getAttribute('filtro');
        if (input.checked) {
            switch (attribute) {
                case 'event-type':
                    checkboxStates.eventTypes.push(input.value);
                    break
                case 'calidad':
                    checkboxStates.calidad.push(input.value);
                    break
            }
        }
    }
}


for (let input of document.querySelectorAll('input')) {
    //Listen to 'change' event of all inputs
    input.onchange = (e) => {
        geojsonLayer.clearLayers();
        updateCheckboxStates();
        geojsonLayer.addData(json);
    }
}


/****** INIT ******/
updateCheckboxStates();
pickJSON();

//Array de opciones
var optionsMenu = {
    edge: 'right'
};
var optionsInfo = {
    edge: 'left'
}; //default

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav-menu');
    var elems2 = document.querySelectorAll('.sidenav-info');
    var instances = M.Sidenav.init(elems, optionsMenu);
    var instancesinfo = M.Sidenav.init(elems2, optionsInfo);

});
var defaultImage = "resources/images/donerkebab.png";

function showFlag(e) {
    openMenu();
    let direccion = document.getElementById('direccion');
    let descripcion = document.getElementById('descripcion');
    let name = document.getElementById('name');
    let image = document.getElementById('image-site');
    let imageInfo;
    var layer = e.target;
    var info = layer.feature.properties;
    let gurl = "https://maps.google.com/?q=" + layer.feature.geometry.coordinates;
    // console.log(gurl)
    if (info.image === undefined || info.image === null) {
        imageInfo = defaultImage;
    } else {
        imageInfo = info.image
    }
    direccion.setAttribute('href', gurl);
    direccion.textContent = info.Calle;
    descripcion.textContent = info.descripcion;
    name.textContent = info.Name;
    image.src = imageInfo;

}

function openMenu() {
    let eleme = document.getElementById('popInformation');
    let instance2 = M.Sidenav.getInstance(eleme);
    // console.log(instancesinfo);
    instance2.open();
}

// tell the embed parent frame the height of the content
if (window.parent && window.parent.parent) {
    window.parent.parent.postMessage(["resultsFrame", {
        height: document.body.getBoundingClientRect().height,
        slug: "rk9v0uyo"
    }], "*")
}

// always overwrite window.name, in case users try to set it manually
window.name = "result"