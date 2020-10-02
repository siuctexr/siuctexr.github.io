// import Swup from 'swup';

const options = {
    linkSelector: 'a[href^="' +
        window.location.origin +
        '"]:not([data-no-swup]), a[href^="/"]:not([data-no-swup]), a[href^="#"]:not([data-no-swup])'
};


const swup = new Swup(options);
swup.on('contentReplaced', function () {
    const video = document.getElementById("my-video");
    // if (video) {
    //     initVideoAnnotations();
    // }


});