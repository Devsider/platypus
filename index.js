let positions = [
    [0, 0, 30],
    [0, 0, 30],
    [0, 0, 30],
    [0, 0, 30],
    [0, 0, 30],
];

let timings = [
    0, 
    2000,
    2000,
    2000,
    2000,
];

let movingPlatypus = document.getElementById("moving-platypus");
let movingPlatypusImg = document.getElementById("moving-platypus-img");

movingPlatypus.style.transform = "rotate(" + positions[0][2] + "deg)";

let totalTimeout = 0;
for (let index = 0; index < timings.length; index++) {
    const element = timings[index];
    console.log(`Timeout ${element}: ${totalTimeout}`);
    
    totalTimeout = totalTimeout + element;
    setTimeout(() => {
        movingPlatypus.style.transform = "rotate(" + positions[index][2] + "deg)"; 
        movingPlatypus.style.top = "calc(100vh * " + positions[index][1] + ")";
        movingPlatypus.style.left = "calc(100vw * " + positions[index][0] + ")";
    }, totalTimeout);
}

/* 
AUDIO
*/

let audio = new Audio("./assets/doo_bee_doo_bee_doo_bah.mp3");
audio.play();
audio.volume = 0.8;