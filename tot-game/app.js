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
    minZoom: -2,
    maxZoom: 3, 
    zoom: -1
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

var camps = {
    "1": [
        {
            "siteType": "CAMPGROUND",
            "name": "Cannon Camp, November  7, 1837"
        },
        {
            "siteType": "MILL",
            "name": "Cowan Mill Seat"
        },
        {
            "siteType": "TAVERN",
            "name": "Blair Tavern"
        },
        {
            "siteType": "EURO-AM_CEM",
            "name": "Foote Cemetery"
        }
    ],
    "2": [
        {
            "siteType": "CHEROKEE BURIAL",
            "name": "Cannon Party, 11/8/1837, Child burial"
        },
        {
            "siteType": "CAMPGROUND",
            "name": "Butrick December 15, 1838 camp"
        },
        {
            "siteType": "EURO-AM_CEM",
            "name": "Gregory Cemetery"
        },
        {
            "siteType": "EURO-AM_CEM",
            "name": "Compton Cemetery"
        },
        {
            "siteType": "EURO-AM_CEM",
            "name": "Prospect Cemetery"
        }
    ],
    "3": [
        {
            "siteType": "CHEROKEE BURIAL",
            "name": "Old Brownfield Cherokee  Cemetery"
        },
        {
            "siteType": "EURO-AM_CEM",
            "name": "Fields Cemetery"
        },
        {
            "siteType": "EURO-AM_CEM",
            "name": "Old Brownfield Cemetery"
        },
        {
            "siteType": "CAMPGROUND",
            "name": "Butrick Camp, Dec 19, 1838"
        }
    ],
    "4": [
        {
            "siteType": "CHEROKEE BURIAL",
            "name": "Dixon Springs Cherokee, Cemetery"
        },
        {
            "siteType": "CAMPGROUND",
            "name": "Butrick Camp, Dec 21, 1838"
        },
        {
            "siteType": "SPRING",
            "name": "Dixon Springs 2-5"
        },
        {
            "siteType": "EURO-AM_CEM",
            "name": "Hazel/Dixon Springs Cemetery"
        },
        {
            "siteType": "EURO-AM_CEM",
            "name": "Henley Cemetery"
        }
    ],
    "5": [
        {
            "siteType": "CAMPGROUND",
            "name": "Bay Creek Site Campground"
        }
    ],
    "6": [
        {
            "siteType": "TAVERN",
            "name": "Mccorkle Tavern"
        },
        {
            "siteType": "CAMPGROUND",
            "name": "Mccorkle Creek, Campground"
        },
        {
            "siteType": "EURO-AM_CEM",
            "name": "Mccorkle Cemetery"
        },
        {
            "siteType": "MILL",
            "name": "Mccorkle Mill ?"
        },
        {
            "siteType": "RESIDENCE",
            "name": "McCorkle Residence"
        }
    ],
    "7": [
        {
            "siteType": "CAMPGROUND",
            "name": "Cache Creek Campground (Provisional)*"
        }
    ],
    "8": [
        {
            "siteType": "CAMPGROUND",
            "name": "Dutchman Creek Campground"
        },
        {
            "siteType": "MILL",
            "name": "Dutchman Creek Mill (Brazel's Mill)"
        },
        {
            "siteType": "CHEROKEE BURIAL",
            "name": "Dutchman Creek Campground"
        },
        {
            "siteType": "RESIDENCE",
            "name": "John W. Gore Residence (Provisional)"
        },
        {
            "siteType": "SPRING",
            "name": "Carlton Spring"
        }
    ],
    "9": [
        {
            "siteType": "RESIDENCE",
            "name": "William Elkins Residence"
        },
        {
            "siteType": "TOWN",
            "name": "Town Of West Vienna"
        },
        {
            "siteType": "CAMPGROUND",
            "name": "West Vienna Campground (P)*"
        }
    ],
    "10": [
        {
            "siteType": "CAMPGROUND",
            "name": "Bridges Campground"
        },
        {
            "siteType": "RESIDENCE",
            "name": "Bridges Site"
        },
        {
            "siteType": "TAVERN",
            "name": "Bridges Tavern"
        },
        {
            "siteType": "SPRING",
            "name": "Bridges Covered Spring"
        },
        {
            "siteType": "SPRING",
            "name": "Bridges Site Spring"
        },
        {
            "siteType": "RESIDENCE",
            "name": "John W. Gore Residence"
        }
    ],
    "11": [
        {
            "siteType": "CAMPGROUND",
            "name": "Buckrun Creek Campground"
        },
        {
            "siteType": "CHEROKEE BURIAL",
            "name": "Beggs Cherokee "
        }
    ],
    "12": [
        {
            "siteType": "CHEROKEE BURIAL",
            "name": "Taylor Camp"
        },
        {
            "siteType": "CAMPGROUND",
            "name": "Taylor Camp"
        },
        {
            "siteType": "LIQUOR",
            "name": "Gore & Garner Liquor"
        }
    ],
    "13": [
        {
            "siteType": "CAMPGROUND",
            "name": "Mt. Pleasant"
        },
        {
            "siteType": "CHEROKEE BURIAL",
            "name": "Old Mt. Pleasant Cemetery (Cox/Stokes/Standard)"
        },
        {
            "siteType": "TOWN",
            "name": "Town Of Mt. Pleasant"
        }
    ],
    "14": [
        {
            "siteType": "CHEROKEE BURIAL",
            "name": "Campground Church"
        },
        {
            "siteType": "RESIDENCE",
            "name": "Hileman G. Homestead"
        },
        {
            "siteType": "CAMPGROUND",
            "name": "Campground Church"
        },
        {
            "siteType": "LIQUOR",
            "name": "Stokes Liquor Stand"
        },
        {
            "siteType": "MILL",
            "name": "G. Hileman Grist Mill"
        },
        {
            "siteType": "SPRING",
            "name": "Campground Church Spring 1-3"
        },
        {
            "siteType": "EURO-AM_CEM",
            "name": "Campground Church Cemetery"
        }
    ],
    "15": [
        {
            "siteType": "RESIDENCE",
            "name": "Jonesboro Residences 1-19"
        },
        {
            "siteType": "TAVERN",
            "name": "Davie Tavern"
        },
        {
            "siteType": "CAMPGROUND",
            "name": "Lincoln-douglas Debate Site"
        },
        {
            "siteType": "RESIDENCE",
            "name": "Craver Residence (P)"
        },
        {
            "siteType": "TAVERN",
            "name": "Meness Tavern"
        },
        {
            "siteType": "LIQUOR",
            "name": "Jonesboro Retail Liquor (and merchandise) 1-40"
        },
        {
            "siteType": "OTHER",
            "name": "T. & E. Sams Retail"
        },
        {
            "siteType": "TAVERN",
            "name": "Jonesboro Taverns 1-15"
        },
        {
            "siteType": "SPRING",
            "name": "Jonesboro Spring"
        },
        {
            "siteType": "GROCERY",
            "name": "Jonesboro Groceries 1-8"
        },
        {
            "siteType": "TAVERN",
            "name": "Williams Tavern"
        },
        {
            "siteType": "TAVERN",
            "name": "Tripp Tavern"
        },
        {
            "siteType": "TOWN",
            "name": "Town Of Jonesboro"
        },
        {
            "siteType": "TAVERN",
            "name": "Hacker J. Tavern"
        },
        {
            "siteType": "EURO-AM_CEM",
            "name": "Jonesboro Cemetery"
        }
    ],
    "16": [
        {
            "siteType": "CHEROKEE BURIAL",
            "name": "Willard\u2019s Mill"
        },
        {
            "siteType": "CAMPGROUND",
            "name": "Willard\u2019s Mill"
        },
        {
            "siteType": "MILL",
            "name": "Willard Mill"
        },
        {
            "siteType": "EURO-AM_CEM",
            "name": "Kimmel (Old Dunkard)"
        }
    ],
    "17": [
        {
            "siteType": "CHEROKEE BURIAL",
            "name": "Morgan Mill/Dutch Creek Campground"
        },
        {
            "siteType": "RESIDENCE",
            "name": "Morgan Farm"
        },
        {
            "siteType": "BRIDGE",
            "name": "Morgan Bridge"
        },
        {
            "siteType": "MILL",
            "name": "Morgan Mill"
        },
        {
            "siteType": "CAMPGROUND",
            "name": "Morgan Mill/Dutch Creek"
        },
        {
            "siteType": "EURO-AM_CEM",
            "name": "Morgan Cemetery"
        },
        {
            "siteType": "TAVERN",
            "name": "Arendell Tavern"
        },
        {
            "siteType": "OTHER",
            "name": "Morgan Smithy"
        }
    ],
    "18": [
        {
            "siteType": "SPRING",
            "name": "Site 11U615"
        },
        {
            "siteType": "EURO-AM_CEM",
            "name": "11U308 (Cotner, Gammer, Massy-Cox Cemetery)"
        },
        {
            "siteType": "CAMPGROUND",
            "name": "11U621"
        }
    ],
    "19": [
        {
            "siteType": "CAMPGROUND",
            "name": "Clear Creek"
        }
    ],
    "20": [
        {
            "siteType": "CAMPGROUND",
            "name": "Willard\u2019s Landing"
        },
        {
            "siteType": "FERRY",
            "name": "Green's Lower Ferry & Green's Upper Ferry"
        },
        {
            "siteType": "FERRY",
            "name": "Willard's Landing"
        },
        {
            "siteType": "LIQUOR",
            "name": "Willard E. Liquor, Willard & McGhehy Liquor (P)"
        }
    ],
    "21": [
        {
            "siteType": "CHEROKEE BURIAL",
            "name": "Hamburg Landing"
        },
        {
            "siteType": "CAMPGROUND",
            "name": "Hamburg Landing"
        },
        {
            "siteType": "FERRY",
            "name": "Hamburg Landing/Littleton's Old Ferry"
        }
    ]
}

var allPixelPoints = [{
        xy: [2676, 1131],
        title: "Checkpoint 1",
        link: "",
        completed: true,
        current: false,
        progress: 100,
        id : "1"

    },
    {
        xy: [2553, 1116],
        title: "Checkpoint 2",
        link: "",
        completed: true,
        current: false,
        progress: 90,
        id : "2"
    },
    {
        xy: [2355, 1060],
        title: "Checkpoint 3",
        link: "",
        completed: false,
        current: true,
        progress: 0,
        id : "3"
    },
    {
        xy: [2172, 1050],
        title: "Checkpoint 4",
        link: "",
        completed: false,
        current: false,
        progress: 0,
        id : "4"
    },
    {
        xy: [1860, 960],
        title: "Checkpoint 5",
        link: "",
        completed: false,
        current: false,
        progress: 0,
        id : "5"
    },
    {
        xy: [1752, 930],
        title: "Checkpoint 6",
        link: "",
        completed: false,
        current: false,
        progress: 0,
        id : "6"
    },
    {
        xy: [1665, 867],
        title: "Checkpoint 7",
        link: "",
        completed: false,
        current: false,
        progress: 0,
        id : "7"
    },
    {
        xy: [1605, 885],
        title: "Checkpoint 8",
        link: "",
        completed: false,
        current: false,
        progress: 0,
        id : "8"
    },
    {
        xy: [1512, 855],
        title: "Checkpoint 9",
        link: "",
        completed: false,
        current: false,
        progress: 0,
        id : "9"
    },
    {
        xy: [1476, 846],
        title: "Checkpoint 10",
        link: "",
        completed: false,
        current: false,
        progress: 0,
        id : "10"
    },
    {
        xy: [1401, 828],
        title: "Checkpoint 11",
        link: "",
        completed: false,
        current: false,
        progress: 0,
        id : "11"
    },
    {
        xy: [1359, 804],
        title: "Checkpoint 12",
        link: "",
        completed: false,
        current: false,
        progress: 0,
        id : "12"
    },
    {
        xy: [1197, 783],
        title: "Checkpoint 13",
        link: "",
        completed: false,
        current: false,
        progress: 0,
        id : "13"
    },
    {
        xy: [870, 783],
        title: "Checkpoint 14",
        link: "",
        completed: false,
        current: false,
        progress: 0,
        id : "14"
    },
    {
        xy: [792, 723],
        title: "Checkpoint 15",
        link: "",
        completed: false,
        current: false,
        progress: 0,
        id : "15"
    },
    {
        xy: [660, 852],
        title: "Checkpoint 16",
        link: "",
        completed: false,
        current: false,
        progress: 0,
        id : "16"
    },
    {
        xy: [630, 858],
        title: "Checkpoint 17",
        link: "",
        completed: false,
        current: false,
        progress: 0,
        id : "17"
    },
    {
        xy: [672, 786],
        title: "Checkpoint 18",
        link: "",
        completed: false,
        current: false,
        progress: 0,
        id : "18"
    },
    {
        xy: [459, 786],
        title: "Checkpoint 19",
        link: "",
        completed: false,
        current: false,
        progress: 0,
        id : "19"
    },
    {
        xy: [480, 942],
        title: "Checkpoint 20",
        link: "",
        completed: false,
        current: false,
        progress: 0,
        id : "20"
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

function getListItems(siteId){
    const sites = camps[siteId];
    let litems = '';
    sites.forEach((elem)=>{
        litems = litems + `<li>${elem['name']} | ${elem['siteType']}</li>`
    })

    return litems
}

function popupHtml(elem) {

    const completeText = elem.completed ? 'Completed' : 'Incomplete';
    const completeIcon = elem.completed ? "fa-check-circle" : 'fa-times-circle';
    const litems = getListItems(elem.id);

    var popupTemplate = `<p>${elem.title}</p>
    <ul>
        ${litems}
    <ul>`

    // <a href="${elem.link}">More..</a>
    
    // <p>${completeText} <i class="fa ${completeIcon}"></i></p>`;
    return popupTemplate;

}


allPixelPoints.forEach(elem => {
    L.marker(xy(elem.xy), {
        icon: getIcon(redColor, elem)
    }).addTo(map).bindPopup(popupHtml(elem));

});

// map.setView(xy(2673, 1143), 0);


function resizeByRes(event){
    // get the width of the screen after the resize event
    var width = document.documentElement.clientWidth;
    // tablets are between 768 and 922 pixels wide
    // phones are less than 768 pixels wide
    if (width < 768) {
        // set the zoom level to 10
        map.setZoom(-3);
    } else if(width < 900){
        map.setZoom(-2);
    }   
    else {
        // set the zoom level to 8
        map.setZoom(-1);
    }
}


function resizeOnLoad(event){

    var width = window.innerWidth;
    if (width < 768) {
        // set the zoom level to 10
        map.setZoom(-3);
    }  else {
        // set the zoom level to 8
        // map.setZoom(-1);
        map.setView(xy(1673, 1143), -1);
    }

}

// listen for screen resize events
window.addEventListener('resize', resizeByRes);

window.addEventListener('load', resizeOnLoad);