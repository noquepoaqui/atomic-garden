import Molecules from "../components/Molecules";

let counter = 0;
export const mousePressed = () => {
  counter++;
}

export const mouseReleased = () => {
  Molecules.addMolecule(mouseX - windowWidth / 2, mouseY - windowHeight / 2);
  counter = 0;
}

export const windowResize = () => resizeCanvas(windowWidth, windowHeight);
