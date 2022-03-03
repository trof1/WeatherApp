let scroll = document.querySelector(".scroll__button");

   /*  Header */

let home = document.querySelector("#home");
let features = document.querySelector("#features");
let reviews = document.querySelector("#reviews");
let download = document.querySelector("#download");

    /* Footer */

let home__footer = document.querySelector("#home__footer");
let features__footer = document.querySelector("#features__footer");
let reviews__footer = document.querySelector("#reviews__footer");
let download__footer = document.querySelector("#download__footer");

scroll.addEventListener("click", (event) => 
    scrollTo({
        top: 1000,
        behavior: 'smooth',
    }));

    /* Header */

home.addEventListener("click", (event) => 
    scrollTo({
        top: 0,
        behavior: 'smooth',
    }));

features.addEventListener("click", (event) => 
    scrollTo({
        top: 1000,
        behavior: 'smooth',
    }));

reviews.addEventListener("click", (event) => 
    scrollTo({
        top: 5300,
        behavior: 'smooth',
    }));

download.addEventListener("click", (event) => 
    scrollTo({
        top: 6250,
        behavior: 'smooth',
    }));

    /* Footer */

home__footer.addEventListener("click", (event) => 
    scrollTo({
        top: 0,
        behavior: 'smooth',
    }));

features__footer.addEventListener("click", (event) => 
    scrollTo({
        top: 1000,
        behavior: 'smooth',
    }));

reviews__footer.addEventListener("click", (event) => 
    scrollTo({
        top: 5300,
        behavior: 'smooth',
    }));

download__footer.addEventListener("click", (event) => 
    scrollTo({
        top: 6250,
        behavior: 'smooth',
    }));
