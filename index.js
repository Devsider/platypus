let positions = [
    [0, 0, false, false, 45, false, 1],
    [0, -120, false, true, -45, false, 1],
    [0, 10, true, true, -45, true, 1],
    [50, 0, true, false, 45, true, 1],
    [-250, 200, true, false, -45, true, 1],
    [260, 0, false, false, 45, true, 1],
    [0, 200, false, false, 150, true, 1],
    [0, -100, false, true, -120, true, 1],
    [0, -100, true, true, -45, true, 1],
    [-100, 200, true, false, -45, true, 2],
    [-100, 200, true, false, -45, true, 1],
    [0, 0, false, false, 45, false, 1],
    [50, 0, false, false, 45, false, 1],
    [70, 0, false, false, 45, false, 1]
];

let timings = [
    0, 
    1000,
    1000,
    1500,
    1500,
    1500,
    1500,
    1500,
    1500,
    1500,
    400,
    500,
    150,
    150
];

let movingPlatypusImg = document.getElementById("moving-platypus-img");
movingPlatypusImg.classList.remove("defaultLoc");

let totalTimeout = 0;
for (let index = 0; index < timings.length; index++) {
    const element = timings[index];
    console.log(`Timeout ${element}: ${totalTimeout}`);
    
    totalTimeout = totalTimeout + element;
    setTimeout(() => {
        console.log(`Moving Platypus: ${positions[index]}`);

        movingPlatypusImg.style.transform = " translateX(-50%) translateY(-50%)";
        if(positions[index][5]){
            movingPlatypusImg.style.transform += " scaleX(-1)";
        }
        movingPlatypusImg.style.transform += "rotate(" + positions[index][4] + "deg)"; 
        movingPlatypusImg.style.transform += " scale(" + positions[index][5] + ")";

        if(!positions[index][2]){
            movingPlatypusImg.style.left = positions[index][0] + "px";
            movingPlatypusImg.style.right = null;
        } else {
            movingPlatypusImg.style.left = null;
            movingPlatypusImg.style.right = positions[index][0] + "px";
        }

        if(!positions[index][3]){
            movingPlatypusImg.style.top = positions[index][1] + "px";
            movingPlatypusImg.style.bottom = null;
        } else {
            movingPlatypusImg.style.top = null;
            movingPlatypusImg.style.bottom = positions[index][1] + "px";
        }
    }, totalTimeout);
}


/* 
AUDIO
*/

let audio = new Audio("./assets/doo_bee_doo_bee_doo_bah.mp3");
//audio.muted = true;
audio.volume = 0.3;
audio.play();

audio.onplay = function(){
    console.log("Audio on play");
}