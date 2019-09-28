import Tone from 'tone';

export const envelope = new Tone.Envelope({
    attack : 0.1, 
    decay : 0.2,
    sustain : 0.5, 
    release : 0.8}).toMaster();

export const envelopeSettings = () => {
    envelope.attack = 0.1;  
    envelope.decay = 0.2;
    envelope.sustain = 0.5;
    envelope.release = 0.8;
}
/*
export const envelopeTriggerAttackRelease = (sustain) => {
    envelope.triggerAttackRelease(sustain);
}*/
