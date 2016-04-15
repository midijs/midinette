import * as Functions from './functions';
import MidiNotes from './midiNotes';
import StatusCodes from './statusCodes';
import ControlChange from './controlChange';

var Midinette = {
	Notes         : MidiNotes,
	StatusCodes   : StatusCodes,
	ControlChange : ControlChange
};

Object.assign(Midinette, Functions);

export default Midinette;
