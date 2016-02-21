"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = {
	NOTE_OFF: 0x80,
	NOTE_ON: 0x90,
	POLYPHONIC_AFTERTOUCH: 0xa0,
	CONTROL_CHANGE: 0xb0,
	PROGRAM_CHANGE: 0xc0,
	CHANNEL_AFTERTOUCH: 0xd0,
	PITCH_WHEEL: 0xe0,

	/*
  * Note Off event.
  * This message is sent when a note is released (ended).
  */
	NOTE_OFF_CH1: 0x80,
	NOTE_OFF_CH2: 0x81,
	NOTE_OFF_CH3: 0x82,
	NOTE_OFF_CH4: 0x83,
	NOTE_OFF_CH5: 0x84,
	NOTE_OFF_CH6: 0x85,
	NOTE_OFF_CH7: 0x86,
	NOTE_OFF_CH8: 0x87,
	NOTE_OFF_CH9: 0x88,
	NOTE_OFF_CH10: 0x89,
	NOTE_OFF_CH11: 0x8a,
	NOTE_OFF_CH12: 0x8b,
	NOTE_OFF_CH13: 0x8c,
	NOTE_OFF_CH14: 0x8d,
	NOTE_OFF_CH15: 0x8e,
	NOTE_OFF_CH16: 0x8f,

	/*
  * Note On event.
  * This message is sent when a note is depressed (start).
  */
	NOTE_ON_CH1: 0x90,
	NOTE_ON_CH2: 0x91,
	NOTE_ON_CH3: 0x92,
	NOTE_ON_CH4: 0x93,
	NOTE_ON_CH5: 0x94,
	NOTE_ON_CH6: 0x95,
	NOTE_ON_CH7: 0x96,
	NOTE_ON_CH8: 0x97,
	NOTE_ON_CH9: 0x98,
	NOTE_ON_CH10: 0x99,
	NOTE_ON_CH11: 0x9a,
	NOTE_ON_CH12: 0x9b,
	NOTE_ON_CH13: 0x9c,
	NOTE_ON_CH14: 0x9d,
	NOTE_ON_CH15: 0x9e,
	NOTE_ON_CH16: 0x9f,

	/*
  * Polyphonic Key Pressure (Aftertouch).
  * This message is most often sent by pressing down on the key after it
  * "bottoms out".
  */
	POLYPHONIC_AFTERTOUCH_CH1: 0xa0,
	POLYPHONIC_AFTERTOUCH_CH2: 0xa1,
	POLYPHONIC_AFTERTOUCH_CH3: 0xa2,
	POLYPHONIC_AFTERTOUCH_CH4: 0xa3,
	POLYPHONIC_AFTERTOUCH_CH5: 0xa4,
	POLYPHONIC_AFTERTOUCH_CH6: 0xa5,
	POLYPHONIC_AFTERTOUCH_CH7: 0xa6,
	POLYPHONIC_AFTERTOUCH_CH8: 0xa7,
	POLYPHONIC_AFTERTOUCH_CH9: 0xa8,
	POLYPHONIC_AFTERTOUCH_CH10: 0xa9,
	POLYPHONIC_AFTERTOUCH_CH11: 0xaa,
	POLYPHONIC_AFTERTOUCH_CH12: 0xab,
	POLYPHONIC_AFTERTOUCH_CH13: 0xac,
	POLYPHONIC_AFTERTOUCH_CH14: 0xad,
	POLYPHONIC_AFTERTOUCH_CH15: 0xae,
	POLYPHONIC_AFTERTOUCH_CH16: 0xaf,

	/*
  * Control Change.
  * This message is sent when a controller value changes. Controllers include
  * devices such as pedals and levers. Controller numbers 120-127 are
  * reserved as "Channel Mode Messages".
  */
	CONTROL_CHANGE_CH1: 0xb0,
	CONTROL_CHANGE_CH2: 0xb1,
	CONTROL_CHANGE_CH3: 0xb2,
	CONTROL_CHANGE_CH4: 0xb3,
	CONTROL_CHANGE_CH5: 0xb4,
	CONTROL_CHANGE_CH6: 0xb5,
	CONTROL_CHANGE_CH7: 0xb6,
	CONTROL_CHANGE_CH8: 0xb7,
	CONTROL_CHANGE_CH9: 0xb8,
	CONTROL_CHANGE_CH10: 0xb9,
	CONTROL_CHANGE_CH11: 0xba,
	CONTROL_CHANGE_CH12: 0xbb,
	CONTROL_CHANGE_CH13: 0xbc,
	CONTROL_CHANGE_CH14: 0xbd,
	CONTROL_CHANGE_CH15: 0xbe,
	CONTROL_CHANGE_CH16: 0xbf,

	/*
  * Program Change.
  * This message sent when the patch number changes.
  */
	PROGRAM_CHANGE_CH1: 0xc0,
	PROGRAM_CHANGE_CH2: 0xc1,
	PROGRAM_CHANGE_CH3: 0xc2,
	PROGRAM_CHANGE_CH4: 0xc3,
	PROGRAM_CHANGE_CH5: 0xc4,
	PROGRAM_CHANGE_CH6: 0xc5,
	PROGRAM_CHANGE_CH7: 0xc6,
	PROGRAM_CHANGE_CH8: 0xc7,
	PROGRAM_CHANGE_CH9: 0xc8,
	PROGRAM_CHANGE_CH10: 0xc9,
	PROGRAM_CHANGE_CH11: 0xca,
	PROGRAM_CHANGE_CH12: 0xcb,
	PROGRAM_CHANGE_CH13: 0xcc,
	PROGRAM_CHANGE_CH14: 0xcd,
	PROGRAM_CHANGE_CH15: 0xce,
	PROGRAM_CHANGE_CH16: 0xcf,

	/*
  * Channel Pressure (After-touch).
  * This message is most often sent by pressing down on the key after it
  * "bottoms out". This message is different from polyphonic after-touch. Use
  * this message to send the single greatest pressure value (of all the
  * current depressed keys).
  */
	CHANNEL_AFTERTOUCH_CH1: 0xd0,
	CHANNEL_AFTERTOUCH_CH2: 0xd1,
	CHANNEL_AFTERTOUCH_CH3: 0xd2,
	CHANNEL_AFTERTOUCH_CH4: 0xd3,
	CHANNEL_AFTERTOUCH_CH5: 0xd4,
	CHANNEL_AFTERTOUCH_CH6: 0xd5,
	CHANNEL_AFTERTOUCH_CH7: 0xd6,
	CHANNEL_AFTERTOUCH_CH8: 0xd7,
	CHANNEL_AFTERTOUCH_CH9: 0xd8,
	CHANNEL_AFTERTOUCH_CH10: 0xd9,
	CHANNEL_AFTERTOUCH_CH11: 0xda,
	CHANNEL_AFTERTOUCH_CH12: 0xdb,
	CHANNEL_AFTERTOUCH_CH13: 0xdc,
	CHANNEL_AFTERTOUCH_CH14: 0xdd,
	CHANNEL_AFTERTOUCH_CH15: 0xde,
	CHANNEL_AFTERTOUCH_CH16: 0xdf,

	/*
  * Pitch Bend Change.
  * This message is sent to indicate a change in the pitch bender (wheel or
  * lever, typically). The pitch bender is measured by a fourteen bit value.
  * Center (no pitch change) is 2000H.
  */
	PITCH_WHEEL_CH1: 0xe0,
	PITCH_WHEEL_CH2: 0xe1,
	PITCH_WHEEL_CH3: 0xe2,
	PITCH_WHEEL_CH4: 0xe3,
	PITCH_WHEEL_CH5: 0xe4,
	PITCH_WHEEL_CH6: 0xe5,
	PITCH_WHEEL_CH7: 0xe6,
	PITCH_WHEEL_CH8: 0xe7,
	PITCH_WHEEL_CH9: 0xe8,
	PITCH_WHEEL_CH10: 0xe9,
	PITCH_WHEEL_CH11: 0xea,
	PITCH_WHEEL_CH12: 0xeb,
	PITCH_WHEEL_CH13: 0xec,
	PITCH_WHEEL_CH14: 0xed,
	PITCH_WHEEL_CH15: 0xee,
	PITCH_WHEEL_CH16: 0xef
};