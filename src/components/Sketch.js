import { initCanvas } from './Screen/Canvas';
import Molecules from './Molecules';

export const setup = () => {
  initCanvas();
}

export const draw = () => {
  background(255, 255, 255);
  Molecules.draw();
}
