import Molecule from "../Molecule";

const molecules = [];
const draw = () => {
  molecules.forEach(molecule => {
    molecule.draw();
  });
}

const addMolecule = (x, y) => {
  molecules.push(new Molecule(x, y));
  console.log(molecules);
};

const Molecules = {
  draw,
  addMolecule,
};

export default Molecules;
