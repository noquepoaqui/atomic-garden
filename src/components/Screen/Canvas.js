import { FRAME_RATE } from "./Constants";

export const initCanvas = () => {
    createCanvas(windowWidth, windowHeight, WEBGL);
    frameRate(FRAME_RATE);
    rectMode(CENTER);
}

