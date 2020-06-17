//a polysynth composed of 6 Voices of Synth
let synth = new Tone.PolySynth(6, Tone.Synth, {
  oscillator: {
    type: "square"
  }
}).toMaster();
//set the attributes using the set interface
synth.set("detune", -1200);
//play a chord

let pattern = new Tone.Pattern(function (time, note) {
  synth.triggerAttackRelease(note, "4n");
}, ["C4", "D4", "E4", "A3"], "upDown");
//https://tonejs.github.io/docs/r12/CtrlPattern

pattern.loop = true;
pattern.interval = "8n";
// pattern.loopEnd = "32n";

// function setup() {
Tone.Transport.start();
pattern.start(0);
// }