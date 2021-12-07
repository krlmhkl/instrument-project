let n1, n2, n3, n4, n5;

function setup() {
    createCanvas(windowWidth, windowHeight)

    n1 = createAudio('sounds/CD Track 23.wav');
    n2 = createAudio('sounds/CD Track 27.wav');
    n3 = createAudio('sounds/CD Track 81.wav');
    n4 = createAudio('sounds/CD Track 85.wav');
    n5 = createAudio('sounds/CD Track 89.wav');
}


function draw() {
    let span1 = createSpan('noot 1');
    span1.position(0, 0);
    span1.size(windowWidth / 5, windowHeight)
    rectMode(CORNER);
    fill('#d15350');
    rect(0, 0, windowWidth / 5, windowHeight)
    let span2 = createSpan('noot 2');
    span2.position(windowWidth / 5, 0);
    span2.size(windowWidth / 5, windowHeight)
    rectMode(CORNER);
    fill('#d1d350');
    rect(windowWidth / 5, 0, windowWidth / 5, windowHeight)
    let span3 = createSpan('noot 3');
    span3.position((windowWidth / 5) * 2, 0);
    span3.size(windowWidth / 5, windowHeight)
    rectMode(CORNER);
    fill('#d15d50');
    rect((windowWidth / 5) * 2, 0, windowWidth / 5, windowHeight)
    let span4 = createSpan('noot 4');
    span4.position((windowWidth / 5) * 3, 0);
    span4.size(windowWidth / 5, windowHeight)
    rectMode(CORNER);
    fill('#115350');
    rect((windowWidth / 5) * 3, 0, windowWidth / 5, windowHeight)
    let span5 = createSpan('noot 5');
    span5.position((windowWidth / 5) * 4, 0);
    span5.size(windowWidth / 5, windowHeight)
    rectMode(CORNER);
    fill('#ff5350');
    rect((windowWidth / 5) * 4, 0, windowWidth / 5, windowHeight)
}

//hover for volume change
function mouseMoved(){
    let volumeIndicator = (10 / windowHeight) * mouseY
    let volumeValue = Math.round(volumeIndicator * 10) / 100
    if (mouseY >= 0 && mouseY <= windowHeight) {
        n1.volume(volumeValue);
        n2.volume(volumeValue);
        n3.volume(volumeValue);
        n4.volume(volumeValue);
        n5.volume(volumeValue);
    }
}

function mouseClicked() {
    //here we test if the mouse is over the
    //canvas element when it's clicked
    if (mouseX >= 0 && mouseX <= (width / 5) && mouseY >= 0 && mouseY <= height) {
      //Here we call the play() function on
      //the p5.MediaElement we created above.
      //This will start the audio sample.
      n1.play();
    }

    if (mouseX >= (width / 5) && mouseX <= ((width / 5) * 2) && mouseY >= 0 && mouseY <= height) {
    n2.play();
    }

    if (mouseX >= ((width / 5) * 2) && mouseX <= ((width / 5) * 3) && mouseY >= 0 && mouseY <= height) {
    n3.play();
    }

    if (mouseX >= ((width / 5) * 3) && mouseX <= ((width / 5) * 4) && mouseY >= 0 && mouseY <= height) {
    n4.play();
    }

    if (mouseX >= ((width / 5) * 4) && mouseX <= width && mouseY >= 0 && mouseY <= height) {
    n5.play();
    }
}
function keyTyped() {
    if (key === 'a') {
      n1.play();
    } else if (key === 's') {
      n2.play();
    } else if (key === 'd') {
        n3.play();
    } else if (key === 'f') {
        n4.play()
    } else if (key === 'g') {
        n5.play()
    }
}
