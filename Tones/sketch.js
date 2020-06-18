// must have same tone version on server npm... as scriptTag

// let synth1, synth2;

// synth1 = new Tone.PolySynth({
//   "volume": -10,
//   "envelope": {
//     "attack": 0.01,
//     "decay": 0,
//     "sustain": 0.3,
//     "release": 0.1,
//   }
// }

let synth2 = new Tone.PolySynth(6, Tone.Synth, {
  oscillator: {
    type: "square"
  }
}).toMaster();

// synth.set({
//   "oscillator": {
//     "type": "sine"
//   }
// });

let pattern = new Tone.Pattern(function (time, note) {
  synth2.triggerAttackRelease(note, "16n");
}, ["C2", "D2", "E2", "A3"], "upDown");
//https://tonejs.github.io/docs/r12/CtrlPattern

pattern.loop = true;
pattern.interval = "8n";
// pattern.loopEnd = "32n";

function setup() {
  Tone.Transport.start();
  pattern.start(0);
}