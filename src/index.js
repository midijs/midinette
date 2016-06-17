import MidiNotes from './midiNotes';
import * as StatusCodes from './statusCodes';
import * as ControlChange from './controlChange';

const MASK_EVENT = 0xf00000;
const MASK_CHANNEL = 0x0f0000;
const MASK_DATA_1 = 0x00ff00;
const MASK_DATA_2 = 0x0000ff;

class Midinette {
	static isMIDIStatus(code) {
		if (typeof code !== 'number') {
			return false;
		}

		return (
			code >= StatusCodes.NOTE_OFF_CH1 &&
			code <= StatusCodes.PITCH_WHEEL_CH16
		);
	}

	static isMIDIMessage(code) {
		return (
			typeof code === 'number' &&
			Number.isInteger(code) &&
			code >= 0x000000 &&
			code <= 0xffffff
		);
	}

	static isMIDIByteArray(byteArray) {
		return (
			Array.isArray(byteArray) &&
			byteArray.length === 3 &&
			Number.isInteger(byteArray[0]) &&
			Number.isInteger(byteArray[1]) &&
			Number.isInteger(byteArray[2]) &&
			byteArray[0] >= 0x00 && byteArray[0] <= 0xff &&
			byteArray[1] >= 0x00 && byteArray[1] <= 0xff &&
			byteArray[2] >= 0x00 && byteArray[2] <= 0xff
		);
	}

	static intToByteArray(int) {
		if (Midinette.isMIDIByteArray(int)) {
			return int;
		}
		return [int >> 16, (int >> 8) & 0x00ff,	int & 0x0000ff];
	}

	static getMIDIStatus(code) {
		if (Midinette.isMIDIStatus(code)) {
			return code;
		}
		else if (Midinette.isMIDIByteArray(code)) {
			return code[0];
		}
		else if (Midinette.isMIDIMessage(code)) {
			return getMIDIEvent(Midinette.intToByteArray(code));
		}

		return 0;
	}

	static isNoteOn(code) {
		return (
			Midinette.isMIDIStatus(code) &&
			code >= StatusCodes.NOTE_ON_CH1 &&
			code <= StatusCodes.NOTE_ON_CH16
		);
	}

	static isNoteOff(code) {
		return (
			Midinette.isMIDIStatus(code) &&
			code >= StatusCodes.NOTE_OFF_CH1 &&
			code <= StatusCodes.NOTE_OFF_CH16
		);
	}

	static isControlChange(code) {
		return (
			Midinette.isMIDIStatus(code) &&
			code >= StatusCodes.CONTROL_CHANGE_CH1 &&
			code <= StatusCodes.CONTROL_CHANGE_CH16
		);
	}

	static isPitchWheel(code) {
		return (
			Midinette.isMIDIStatus(code) &&
			code >= StatusCodes.PITCH_WHEEL_CH1 &&
			code <= StatusCodes.PITCH_WHEEL_CH16
		);
	};

	static isPolyphonicAftertouch(data) {
		return (
			Midinette.isMIDIStatus(code) &&
			code >= StatusCodes.POLYPHONIC_AFTERTOUCH_CH1 &&
			code <= StatusCodes.POLYPHONIC_AFTERTOUCH_CH16
		);
	}

	static isProgramChange(data) {
		return (
			Midinette.isMIDIStatus(code) &&
			code >= StatusCodes.PROGRAM_CHANGE_CH1 &&
			code <= StatusCodes.PROGRAM_CHANGE_CH16
		);
	}

	static isChannelAftertouch(data) {
		return (
			Midinette.isMIDIStatus(code) &&
			code >= StatusCodes.CHANNEL_AFTERTOUCH_CH1 &&
			code <= StatusCodes.CHANNEL_AFTERTOUCH_CH16
		);
	}

	static constructMIDIMessage(event, channel, data1, data2) {
		channel = (channel < 1) ? 1 : channel;
		channel = (channel > 16) ? 16 : channel;
		return [(event & 0xf0) + (channel - 1), data1, data2];
	}

	static noteStringToMIDICode(note) {
		if (
			typeof note === 'string' &&
			typeof Midinette[note] === 'number'
		) {
			return Midinette[note];
		}
		else if (typeof note === 'number') {
			return note;
		}
		return 0;
	}

	static getChannelFromStatus(status) {
		return (status % 0x10) + 1;
	}

	static eventMask(status, channel, data1, data2) {
		let mask = 0x000000;
		mask |= status ? MASK_EVENT : 0x000000;
		mask |= channel ? MASK_CHANNEL : 0x000000;
		mask |= data1 ? MASK_DATA_1 : 0x000000;
		mask |= data2 ? MASK_DATA_2 : 0x000000;
		return mask;
	}
}

Object.assign(Midinette, {
	Notes         : MidiNotes,
	StatusCodes   : StatusCodes,
	ControlChange : ControlChange
});

export default Midinette;
