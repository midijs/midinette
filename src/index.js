import * as Functions from './functions';
import MidiNotes from './midiNotes';
import StatusCodes from './statusCodes';
import ControlChange from './controlChange';

var Midinette = Object.assign(
	{}, ControlChange, MidiNotes, StatusCodes, Functions
);

global.Midinette = Midinette;

export default Midinette;
