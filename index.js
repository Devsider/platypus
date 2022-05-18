let positions = [
    [-0.1, 0, 30],
    [1.1, 0.1, 50],
    [-0.1, 0, 30],
    [-0.1, 0, 30],
    [-0.1, 0, 30],
];

let timings = [
    0, 
    1000,
    400,
    800,
    1200
];

let movingPlatypus = document.getElementById("moving-platypus");
let movingPlatypusImg = document.getElementById("moving-platypus-img");

movingPlatypus.style.transform = "rotate(" + positions[0][2] + "deg)";

let totalTimeout = 0;
for (let index = 0; index < timings.length; index++) {
    const element = timings[index];
    
    totalTimeout = totalTimeout + element;
    setTimeout(() => {
        movingPlatypus.style.transform = "rotate(" + positions[i][2] + "deg)"; 
    }, totalTimeOut);
}