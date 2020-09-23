let type = "WebGL"
if (!PIXI.utils.isWebGLSupported()) {
    type = "canvas"
}
PIXI.utils.sayHello(type)


let app = new PIXI.Application({
    width: 256,
    height: 256,
    antialias: true, // default: false
    transparent: true, // default: false
    resolution: 1 // default: 1
});

let renderer = app.renderer;
let stage = app.stage;
let loader = app.loader;

var texture = PIXI.Texture.from('../assets/videos/output.webm');
// create a new Sprite using the video texture (yes it's that easy)
var videoSprite = new PIXI.Sprite(texture);
videoSprite.width = window.innerWidth;
videoSprite.height = window.innerHeight;
stage.addChild(videoSprite);

var video = texture.baseTexture.source;
video.loop = true;
video.muted = true;

app.loader.add('../assets/images/frame1.jpg')
    .load(setup)


function setup() {
    console.log('Setup');
    let bgVideo = new PIXI.Sprite(
        app.loader.resources['../assets/images/frame1.jpg'].texture
    );
    // app.stage.addChild(bgVideo)
}


app.loader.onError.add((...args) => console.error(args));



function setupApp() {
    app.renderer.backgroundColor = 0x061639;
    app.renderer.autoDensity = true;
    app.renderer.resize(512, 512);
    //Lets make it fill the window
    app.renderer.view.style.position = "absolute";
    app.renderer.view.style.display = "block";
    app.renderer.autoDensity = true;
    app.renderer.resize(window.innerWidth, window.innerHeight);
    // If need to auto scale
    // var scale = scaleToWindow(app.renderer.view);
    // window.addEventListener("resize", function (event) {
    //     scaleToWindow(app.renderer.view);
    // });

}


function animate() {
    // render the stage
    renderer.render(stage);
    requestAnimationFrame(animate);
}


let text_cte_website = new PIXI.Text('cte.siu.edu', {
    fontFamily: 'Arial',
    fontSize: 48,
    fill: 0xffffff,
    align: 'center'
});
text_cte_website.x = window.innerWidth / 2 - text_cte_website.width / 2;
text_cte_website.y = window.innerHeight - text_cte_website.height - 10;


let title_text = new PIXI.Text('XRchaeology at Miller Grove', {
    fontFamily: 'Arial',
    fontSize: 48,
    fill: 0xffffff,
    align: 'center'
});
title_text.x = window.innerWidth / 2 - title_text.width / 2;
title_text.y = 20;


stage.addChild(text_cte_website);
stage.addChild(title_text);


buttonLocations = [
    [0, 0, 100, 100],

]

function drawButton(location, color, text) {
    const graphics = new PIXI.Graphics();
    graphics.beginFill()
}


function drawRectangles() {
    var graphics = new PIXI.Graphics();
    graphics.beginFill(0xFFFF00);
    // set the line style to have a width of 5 and set the color to red
    graphics.lineStyle(5, 0xFF0000);
    // draw a rectangle
    graphics.drawRect(0, 0, 300, 200);
    stage.addChild(graphics);
}


window.addEventListener("resize", function (event) {
    app.renderer.resize(window.innerWidth, window.innerHeight);
    videoSprite.width = renderer.width;
    videoSprite.height = renderer.height;
    text_cte_website.x = window.innerWidth / 2 - text_cte_website.width / 2;
    text_cte_website.y = window.innerHeight - text_cte_website.height - 10;
    title_text.x = window.innerWidth / 2 - title_text.width / 2;
    title_text.y = 20;
});


setupApp();
// drawRectangles();
//Add to document
document.getElementById('main-section').appendChild(app.view);



function change_content_section(screen, toMain = false) {
    const iframeSection = document.querySelector('#iframe-section');
    const mainSection = document.querySelector('#main-section');
    const innerButtonContainer = document.querySelector('.inner-button-container');

    // const iframe = document.querySelector('#iframe-main');
    // console.log(screen);

    // if (toMain == false) {
    //     let src = "https://siuctexr.github.io/MGC/";
    //     switch (screen) {
    //         case 1:
    //             src = "https://siuctexr.github.io/MGC/";
    //             break;
    //         case 2:
    //             src = "https://www.arcgis.com/apps/Styler/index.html?appid=0c0578eef78a4a52a5f2a4537989d96f";
    //             break;
    //         case 3:
    //             src = "https://poly.google.com/view/fss5ZAzr-5w";
    //             break;
    //         case 4:
    //             src = "https://skfb.ly/6GwsW";
    //             break;
    //         case 5:
    //             src = "";
    //             break;
    //     }
    //     iframe.src = src;
    // }



    // // iframeSection.style.setProperty('--animate-duration', '5s');
    innerButtonContainer.style.setProperty('--animate-duration', '2s');

    // mainSection.classList.add('animate__animated', 'animate__fadeOut');

    if (!toMain) {
        innerButtonContainer.classList.add('animate__animated', 'animate__fadeOutTopLeft');

        mainSection.classList.add('hidden');
        iframeSection.classList.remove('hidden');


    } else {
        innerButtonContainer.classList.remove('animate__animated', 'animate__fadeOutTopLeft');

        mainSection.classList.remove('hidden');
        iframeSection.classList.add('hidden');


        innerButtonContainer.classList.add('animate__animated', 'animate__fadeIn');

    }


    // iframeSection.classList.add('animate__animated', 'animate__fadeIn');
    // mainSection.addEventListener('animationEnd', () => {
    //     // mainSection.classList.add('hidden');
    // });
}