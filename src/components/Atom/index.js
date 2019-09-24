import { BOX_SIZE, OFFSET_FACTOR, HALF_ANIMATION, ANIMATION_LENGTH } from "./Constants";
import Easing from "../../utils/Easing";

class Atom {
  constructor(x, y, importance) {
    this.x = x;
    this.y = y;
    this.importance = importance;
    this.initialFrame = frameCount;
  }

  draw() {
    const z = this.getZOffset(frameCount - this.initialFrame) * OFFSET_FACTOR * this.importance;
    this.render(this.x, this.y, z);
  }

  render(x, y, z) {
    push();
    translate(x, y, z);
    box(BOX_SIZE);
    pop();
  }

  getZOffset(frame) {
    if (frame % ANIMATION_LENGTH >= HALF_ANIMATION) {
      return - (Easing.easeInOutQuad(this.getEasingTime(frame)) - .5);
    }
    return Easing.easeInOutQuad(this.getEasingTime(frame)) - .5;
  }

  getEasingTime(frame) {
    return (frame % (HALF_ANIMATION)) / (HALF_ANIMATION);
  }
};

export default Atom;
