/*
A game made for the course "foundation of programming" at JU.

Programmers: Jie Chen and Sofia Magnusson
*/



function setup() {
    background(255);
    createCanvas(1000, 800);
}









let state = "result";


// the 3 diffrent screens
function startScreen() {
    background(0, 255, 0);
    fill(255);
    textSize(21);
    text("This is the start screen", 150 , 100);
}


function gameScreen() {
    background(0, 0, 255);
    fill(255);
    textSize(21);
    text("This is the game screen", 150 , 100);
}


function resultScreen() {
    background(255, 0, 0);
    fill(255);
    textSize(21);
    text("This is the result screen", 150 , 100);
}


function draw () {

    //the diffrent screens
    if (state === "start") {
        startScreen();
    } else if (state === "game") {
        gameScreen();
    } else if(state === "result") {
        resultScreen();
    }
}

