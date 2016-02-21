export function isMIDIStatus(code) {
	if (typeof code !== 'number') {
		return false;
	}

	return (
		code >= Midinette.NOTE_OFF_CH1 &&
		code <= Midinette.PITCH_WHEEL_CH16
	);
};

export function isMIDIMessage(code) {
	return (
		typeof code === 'number' &&
		Number.isInteger(code) &&
		code >= 0x000000 &&
		code <= 0xffffff
	);
};

export function isMIDIByteArray(byteArray) {
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
};

export function intToByteArray(int) {
	if (Midinette.isMIDIByteArray(int)) {
		return int;
	}
	return [int >> 16, (int >> 8) & 0x00ff,	int & 0x0000ff];
};

export function getMIDIStatus(code) {
	if (Midinette.isMIDIStatus(code)) {
		return code;
	}
	else if (Midinette.isMIDIByteArray(code)) {
		return code[0];
	}
	else if (Midinette.isMIDIMessage(code)) {
		return Midinette.getMIDIEvent(Midinette.intToByteArray(code));
	}

	return 0;
};

export function isNoteOn(code) {
	return (
		Midinette.isMIDIStatus(code) &&
		code >= Midinette.NOTE_ON_CH1 &&
		code <= Midinette.NOTE_ON_CH16
	);
};

export function isNoteOff(code) {
	return (
		Midinette.isMIDIStatus(code) &&
		code >= Midinette.NOTE_OFF_CH1 &&
		code <= Midinette.NOTE_OFF_CH16
	);
};

export function isControlChange(code) {
	return (
		Midinette.isMIDIStatus(code) &&
		code >= Midinette.CONTROL_CHANGE_CH1 &&
		code <= Midinette.CONTROL_CHANGE_CH16
	);
};

export function isPitchWheel(code) {
	return (
		Midinette.isMIDIStatus(code) &&
		code >= Midinette.PITCH_WHEEL_CH1 &&
		code <= Midinette.PITCH_WHEEL_CH16
	);
};

export function isPolyphonicAftertouch(data) {
	return (
		Midinette.isMIDIStatus(code) &&
		code >= Midinette.POLYPHONIC_AFTERTOUCH_CH1 &&
		code <= Midinette.POLYPHONIC_AFTERTOUCH_CH16
	);
};

export function isProgramChange(data) {
	return (
		Midinette.isMIDIStatus(code) &&
		code >= Midinette.PROGRAM_CHANGE_CH1 &&
		code <= Midinette.PROGRAM_CHANGE_CH16
	);
};

export function isChannelAftertouch(data) {
	return (
		Midinette.isMIDIStatus(code) &&
		code >= Midinette.CHANNEL_AFTERTOUCH_CH1 &&
		code <= Midinette.CHANNEL_AFTERTOUCH_CH16
	);
};

export function constructMIDIMessage(event, channel, data1, data2) {
	return [(event & 0xf0) + (channel - 1), data1, data2];
};

export function noteStringToMIDICode(note) {
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
};

export function getChannelFromStatus(status) {
	return (status % 0x10) + 1;
};
