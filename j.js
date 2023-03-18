function preload() {
canvas = createCanvas(120, 120);
canvas.center();
background("red");
canvas.mouseReleased(classifyCanvas);
synth = window.speechSynthesis;
}

function setup() {
    classifier = ml5.imageClassifier('DoodleNet');
}

function draw() {
strokeWeight(10);
stroke(0);
if(mouseIsPressed) {
    line(mouseX, mouseY, mouseX, mouseY);
}

}

function classifyCanvas() {
    classifier.classify(canvas, gotResult);
}

function gotResult(error, result) {
if(error) {
    console.log(error);
} else {
    console.log(result);
    document.getElementById("label").innerHTML = "Resultado  " + result[0].label;
    document.getElementById("confidence").innerHTML = "Confianza  " + result[0].confidence*100;
}
}