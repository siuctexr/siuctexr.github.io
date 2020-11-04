// var mymap = L.map('mapid').setView([51.505, -0.09], 13);

// L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYmlqYXlyYWoiLCJhIjoiY2toM3JqZzdsMDU3azJ3cWp5aWowcHdscyJ9.RBY-S6jwXVRajG5yu8D35Q', {
//     attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     id: 'mapbox/streets-v11',
//     tileSize: 512,
//     zoomOffset: -1,
//     accessToken: 'your.mapbox.access.token'
// }).addTo(mymap);

var imgHeight = 2030;
var imgWidth = 3300;

var map = L.map('mapid', {
    crs: L.CRS.Simple,
    minZoom: -1,
    maxZoom: 3
}).fitWorld();

var bounds = [
    [0, 0],
    [imgHeight, imgWidth]
];
var image = L.imageOverlay('tot.jpg', bounds).addTo(map);

map.fitBounds(bounds);


var yx = L.latLng;

var xy = function (x, y) {
    if (L.Util.isArray(x)) { // When doing xy([x, y]);
        return yx(imgHeight - x[1], x[0]);
    }
    return yx(imgHeight - y, x); // When doing xy(x, y);
};


var allPixelPoints = [{
        xy: [2676, 1131],
        title: "Checkpoint 1",
        link: "",
        completed: true,
        current: false,
        progress: 100
    },
    {
        xy: [2553, 1116],
        title: "Checkpoint 2",
        link: "",
        completed: true,
        current: false,
        progress: 90
    },
    {
        xy: [2355, 1060],
        title: "Checkpoint 3",
        link: "",
        completed: false,
        current: true,
        progress: 0
    },
    {
        xy: [2172, 1050],
        title: "Checkpoint 4",
        link: "",
        completed: false,
        current: false,
        progress: 0
    },
    {
        xy: [1860, 960],
        title: "Checkpoint 5",
        link: "",
        completed: false,
        current: false,
        progress: 0
    },
    {
        xy: [1752, 930],
        title: "Checkpoint 6",
        link: "",
        completed: false,
        current: false,
        progress: 0
    },
    {
        xy: [1665, 867],
        title: "Checkpoint 7",
        link: "",
        completed: false,
        current: false,
        progress: 0
    },
    {
        xy: [1605, 885],
        title: "Checkpoint 8",
        link: "",
        completed: false,
        current: false,
        progress: 0
    },
    {
        xy: [1512, 855],
        title: "Checkpoint 9",
        link: "",
        completed: false,
        current: false,
        progress: 0
    },
    {
        xy: [1476, 846],
        title: "Checkpoint 10",
        link: "",
        completed: false,
        current: false,
        progress: 0
    },
    {
        xy: [1401, 828],
        title: "Checkpoint 11",
        link: "",
        completed: false,
        current: false,
        progress: 0
    },
    {
        xy: [1359, 804],
        title: "Checkpoint 12",
        link: "",
        completed: false,
        current: false,
        progress: 0
    },
    {
        xy: [1197, 783],
        title: "Checkpoint 13",
        link: "",
        completed: false,
        current: false,
        progress: 0
    },
    {
        xy: [870, 783],
        title: "Checkpoint 14",
        link: "",
        completed: false,
        current: false,
        progress: 0
    },
    {
        xy: [792, 723],
        title: "Checkpoint 15",
        link: "",
        completed: false,
        current: false,
        progress: 0
    },
    {
        xy: [660, 852],
        title: "Checkpoint 16",
        link: "",
        completed: false,
        current: false,
        progress: 0
    },
    {
        xy: [630, 858],
        title: "Checkpoint 17",
        link: "",
        completed: false,
        current: false,
        progress: 0
    },
    {
        xy: [672, 786],
        title: "Checkpoint 18",
        link: "",
        completed: false,
        current: false,
        progress: 0
    },
    {
        xy: [459, 786],
        title: "Checkpoint 19",
        link: "",
        completed: false,
        current: false,
        progress: 0
    },
    {
        xy: [480, 942],
        title: "Checkpoint 20",
        link: "",
        completed: false,
        current: false,
        progress: 0
    },
]




const purpleColor = '#583470';
const greenColor = '#1e7145';
const redColor = '#b91d47';
const blueColor = '#2b5797';
const darkOrange = '#da532c';

function getIcon(customColor, elem) {

    if (elem) {
        if (elem.completed == false) {
            customColor = purpleColor;
        } else {
            customColor = redColor;
        }

        if (elem.current) {
            customColor = greenColor;
        }
    }

    const commonIconStyle = `
        width: 2.5rem;
        height:2.5rem;
        display: block;
        left: -1.5rem;
        top: -1.5rem;
        position: relative;
        border-radius: 2.5rem 2.5rem 0;
        transform: rotate(45deg);
        border: 1px solid #FFFFFF`;

    const markerHtmlStyles = `
    background-color: ${customColor};
    ${commonIconStyle}`;

    const icon = L.divIcon({
        className: "my-custom-pin",
        iconAnchor: [-3, 30],
        labelAnchor: [-6, 0],
        popupAnchor: [0, -36],
        html: `<span style="${markerHtmlStyles}" />`
    });

    return icon;
}

function popupHtml(elem) {

    const completeText = elem.completed ? 'Completed' : 'Incomplete';
    const completeIcon = elem.completed ? "fa-check-circle" : 'fa-times-circle';
    var popupTemplate = `<p>${elem.title}</p>
    <a href="${elem.link}">More..</a>
    <p>${completeText} <i class="fa ${completeIcon}"></i></p>`;
    return popupTemplate;

}






allPixelPoints.forEach(elem => {
    L.marker(xy(elem.xy), {
        icon: getIcon(redColor, elem)
    }).addTo(map).bindPopup(popupHtml(elem));

});

// map.setView(xy(2673, 1143), 0);