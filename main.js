// js

var songs = ["music1.mp3", "music2.mp3"];

function preload() {
    loadSong(songs[1]);
    loadSong(songs[2]);
}

function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

}

function draw() {
    image(video, 0, 0, 600, 500);
}