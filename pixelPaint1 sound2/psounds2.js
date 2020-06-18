// must have same tone version on server npm... as scriptTag
// The filter and effect nodes which we will modulate
let phaser, feed, ping, filter, synth0, synth1, synth2, synth3, pattern0, pattern1, pattern2, pattern3;


//Effects first
phaser = new Tone.Phaser({
  "frequency": 15,
  "octaves": 5,
  "baseFrequency": 100
});

feed = new Tone.FeedbackDelay(0.4, 0.85);

ping = new Tone.PingPongDelay("4n", 0.2);

filter = new Tone.Filter();
filter.type = 'lowpass';
// Effects end

synth0 = new Tone.Synth({
  "oscillator": {
    // We prefix 'fat' so we can spread the oscillator over multiple frequencies
    "type": "sine",
    "count": 3,
    "spread": 30
  },
  "envelope": {
    "attack": 0.001,
    "decay": 0.1,
    "sustain": 0.5,
    "release": 0.1,
    "attackCurve": "exponential"
  }
}).connect(filter).toMaster();
pattern0 = new Tone.Pattern(function (time, note) {
  synth0.triggerAttackRelease(note, "2n");
}, ["E1", "C1", "A1"], "randomWalk")

synth1 = new Tone.PolySynth(6, Tone.Synth, {
  oscillator: {
    type: "square"
  }
}).connect(feed).toMaster();
pattern1 = new Tone.Pattern(function (time, note) {
  synth1.triggerAttackRelease(note, "2n");
}, ["E3", "C1"], "randomWalk");

synth2 = new Tone.FMSynth().connect(ping).toMaster();
pattern2 = new Tone.Pattern(function (time, note) {
  synth2.triggerAttackRelease(note, "16n");
}, ["C2", "D2", "E2", "A2", "G2"], "upDown");


synth3 = new Tone.MembraneSynth({
  pitchDecay: 0.05,
  octaves: 10,
  oscillator: {
    type: "sine"
  },
  envelope: {
    attack: 0.001,
    decay: 0.4,
    sustain: 0.01,
    release: 1.4,
    attackCurve: "exponential"
  }
}).connect(phaser).toMaster();

pattern3 = new Tone.Pattern(function (time, note) {
  synth3.triggerAttackRelease(note, "2n");
}, ["E3", "C1"], "randomWalk");



pattern0.loop = true;
pattern2.interval = "16n";
// pattern.loopEnd = "32n";


// function setup() {
Tone.Transport.start();
pattern0.start(0);
pattern2.start(16);
pattern3.start(19);
// }