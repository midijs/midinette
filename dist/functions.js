'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.isMIDIStatus = isMIDIStatus;
exports.isMIDIMessage = isMIDIMessage;
exports.isMIDIByteArray = isMIDIByteArray;
exports.intToByteArray = intToByteArray;
exports.getMIDIStatus = getMIDIStatus;
exports.isNoteOn = isNoteOn;
exports.isNoteOff = isNoteOff;
exports.isControlChange = isControlChange;
exports.isPitchWheel = isPitchWheel;
exports.isPolyphonicAftertouch = isPolyphonicAftertouch;
exports.isProgramChange = isProgramChange;
exports.isChannelAftertouch = isChannelAftertouch;
exports.constructMIDIMessage = constructMIDIMessage;
exports.noteStringToMIDICode = noteStringToMIDICode;
exports.getChannelFromStatus = getChannelFromStatus;
function isMIDIStatus(code) {
	if (typeof code !== 'number') {
		return false;
	}

	return code >= Midinette.NOTE_OFF_CH1 && code <= Midinette.PITCH_WHEEL_CH16;
};

function isMIDIMessage(code) {
	return typeof code === 'number' && Number.isInteger(code) && code >= 0x000000 && code <= 0xffffff;
};

function isMIDIByteArray(byteArray) {
	return Array.isArray(byteArray) && byteArray.length === 3 && Number.isInteger(byteArray[0]) && Number.isInteger(byteArray[1]) && Number.isInteger(byteArray[2]) && byteArray[0] >= 0x00 && byteArray[0] <= 0xff && byteArray[1] >= 0x00 && byteArray[1] <= 0xff && byteArray[2] >= 0x00 && byteArray[2] <= 0xff;
};

function intToByteArray(int) {
	if (Midinette.isMIDIByteArray(int)) {
		return int;
	}
	return [int >> 16, int >> 8 & 0x00ff, int & 0x0000ff];
};

function getMIDIStatus(code) {
	if (Midinette.isMIDIStatus(code)) {
		return code;
	} else if (Midinette.isMIDIByteArray(code)) {
		return code[0];
	} else if (Midinette.isMIDIMessage(code)) {
		return Midinette.getMIDIEvent(Midinette.intToByteArray(code));
	}

	return 0;
};

function isNoteOn(code) {
	return Midinette.isMIDIStatus(code) && code >= Midinette.NOTE_ON_CH1 && code <= Midinette.NOTE_ON_CH16;
};

function isNoteOff(code) {
	return Midinette.isMIDIStatus(code) && code >= Midinette.NOTE_OFF_CH1 && code <= Midinette.NOTE_OFF_CH16;
};

function isControlChange(code) {
	return Midinette.isMIDIStatus(code) && code >= Midinette.CONTROL_CHANGE_CH1 && code <= Midinette.CONTROL_CHANGE_CH16;
};

function isPitchWheel(code) {
	return Midinette.isMIDIStatus(code) && code >= Midinette.PITCH_WHEEL_CH1 && code <= Midinette.PITCH_WHEEL_CH16;
};

function isPolyphonicAftertouch(data) {
	return Midinette.isMIDIStatus(code) && code >= Midinette.POLYPHONIC_AFTERTOUCH_CH1 && code <= Midinette.POLYPHONIC_AFTERTOUCH_CH16;
};

function isProgramChange(data) {
	return Midinette.isMIDIStatus(code) && code >= Midinette.PROGRAM_CHANGE_CH1 && code <= Midinette.PROGRAM_CHANGE_CH16;
};

function isChannelAftertouch(data) {
	return Midinette.isMIDIStatus(code) && code >= Midinette.CHANNEL_AFTERTOUCH_CH1 && code <= Midinette.CHANNEL_AFTERTOUCH_CH16;
};

function constructMIDIMessage(event, channel, data1, data2) {
	return [(event & 0xf0) + (channel - 1), data1, data2];
};

function noteStringToMIDICode(note) {
	if (typeof note === 'string' && typeof Midinette[note] === 'number') {
		return Midinette[note];
	} else if (typeof note === 'number') {
		return note;
	}
	return 0;
};

function getChannelFromStatus(status) {
	return status % 0x10 + 1;
};