import { setup, draw } from './components/Sketch.js';
import './vendor/p5.min.js';
import './assets/css/style.css';
import { windowResize, mousePressed, mouseReleased } from './events/index.js';
import Tone from 'tone';

window.setup = setup;
window.draw = draw;
window.windowResized = windowResize;
window.mousePressed = mousePressed
window.mouseReleased = mouseReleased
