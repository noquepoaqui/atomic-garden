import Tone from 'tone';
import { envelope, envelopeSettings } from './envelope';
import { getRandom } from '../../utils/Random';

export class AtomSound {
  constructor(attack, decay, sustain, release) {
    this.attack = attack;
    this.decay = decay;
    this.sustain = sustain; 
    this.release = release; 
    this.noise = new Tone.Noise('white').start().toMaster(); 
  }
  updateAtomSound () {
      envelopeTriggerAttackRelease(this.sustain);
  }
}

export class MoleculeSound {
  constructor(frequency, soundLength) {
    this.frequency = frequency;
    this.soundLength = soundLength;
    this.filter = new Tone.Filter(100, "highpass").toMaster();
    this.LFO = new Tone.LFO(this.soundLength, 400, 4000).connect(this.filter.frequency).start();
    this.amOsc = new Tone.Oscillator(frequency, "sine").connect(this.filter).start(); 
  }

  addPartials () {
      this.amOsc.partials.push(getRandom());
  }   
}