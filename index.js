let positions = [
    [100, 0, false, false, 30, false],
    [0, 0, false, false, 30, false],
    [0, 0, false, false, 30, true],
    [0, 0, false, false, 30, false],
    [0, 0, false, false, 30, false]
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
        movingPlatypus.style.transform = "rotate(" + positions[index][4] + "deg)"; 

        if(positions[index][5]){
            movingPlatypus.style.transform += " scaleX(-1)";
        }

        movingPlatypus.style.transform += " translateX(-50%) translateY(-50%)";

        if(!positions[index][2]){
            movingPlatypus.style.left = positions[index][0] + "px";
        } else {
            movingPlatypus.style.right = positions[index][0] + "px";
        } 

        if(!positions[index][3]){
            movingPlatypus.style.top = positions[index][1] + "px";
        } else {
            movingPlatypus.style.bottom = positions[index][1] + "px";
        } 
    }, totalTimeout);
}


/* 
AUDIO
*/

let audio = new Audio("./assets/doo_bee_doo_bee_doo_bah.mp3");
//audio.play();
audio.volume = 0.8;