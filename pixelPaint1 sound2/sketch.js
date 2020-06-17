let synth

function setup() {
	synth = new Tone.Synth();


	synth.toMaster();

	synth.triggerAttackRelease('C3', '4n');
}