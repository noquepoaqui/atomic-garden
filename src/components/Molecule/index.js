import { getRandomInteger } from "../../utils/Random";
import { BOX_SIZE, ATOM_ANIMATION_LENGTH } from "../Atom/Constants";
import Atom from "../Atom";
import { MOLECULE_HEIGHT, MOLECULE_WIDTH } from "./Constants";
import { NOTES } from '../Sound/Constants';
import { MoleculeSound } from '../Sound';


class Molecule {
  constructor(x, y) {
    this.atoms = [];
    this.x = x;
    this.y = y;
    this.sound = new MoleculeSound(NOTES[getRandomInteger(NOTES.length)] * Math.pow(2, 3), 1 / ATOM_ANIMATION_LENGTH);
    this.initAtoms();
    this.initialFrame = frameCount;
  }

  initAtoms() {
    for (let horizontalIndex = 0; horizontalIndex < MOLECULE_WIDTH; horizontalIndex++) {
      for (let verticalIndex = 0; verticalIndex < MOLECULE_HEIGHT; verticalIndex++) {
        const importance = this.getAtomImportance(horizontalIndex, verticalIndex, MOLECULE_WIDTH, MOLECULE_HEIGHT);
        if (getRandomInteger(2) === 1) {
          const x = this.x + ((horizontalIndex - MOLECULE_WIDTH / 2) * BOX_SIZE);
          const y = this.y + ((verticalIndex - MOLECULE_HEIGHT / 2) * BOX_SIZE);
          this.atoms.push(new Atom(x, y, importance));
          this.sound.addPartials();
        }
      }
    }
  }

  draw() {
    push();
    this.atoms.forEach(atom => {
      push();
      rotateX((frameCount - this.initialFrame) * PI * 0.003);
      atom.draw();
      pop();
    });
    pop();
  }

  getAtomImportance(horizontalIndex, verticalIndex, moleculeWidth, moleculeHeight) {
    const horizontalImportance = horizontalIndex <= (moleculeWidth / 2)
      ? horizontalIndex % (moleculeWidth / 2)
      : (moleculeWidth - horizontalIndex - 1) % (moleculeWidth / 2);
    const verticalImportance = verticalIndex <= (moleculeHeight / 2)
      ? verticalIndex % (moleculeHeight / 2)
      : (moleculeHeight - verticalIndex - 1) % (moleculeHeight / 2);
    return (Math.min(horizontalImportance, verticalImportance) / moleculeWidth);
  }  
}

export default Molecule;
