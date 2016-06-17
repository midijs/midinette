var assert = require('chai').assert,
  	Midinette = require('../dist/index'),
	StatusCodes = require('../dist/statusCodes');

describe('constructMIDIMessage', function() {
	it('channel 1', function() {
		assert.deepEqual(Midinette.constructMIDIMessage(
			StatusCodes.NOTE_ON_CH1,
			1,
			0xff,
			0xff
		), [StatusCodes.NOTE_ON_CH1, 0xff, 0xff]);
	});
	it('channel 2', function() {
		assert.deepEqual(Midinette.constructMIDIMessage(
			StatusCodes.NOTE_ON_CH1,
			2,
			0xff,
			0xff
		), [StatusCodes.NOTE_ON_CH2, 0xff, 0xff]);
	});
	it('channel 0', function() {
		assert.deepEqual(Midinette.constructMIDIMessage(
			StatusCodes.NOTE_ON_CH1,
			0,
			0xff,
			0xff
		), [StatusCodes.NOTE_ON_CH1, 0xff, 0xff]);
	});
	it('channel 17', function() {
		assert.deepEqual(Midinette.constructMIDIMessage(
			StatusCodes.NOTE_ON_CH1,
			17,
			0xff,
			0xff
		), [StatusCodes.NOTE_ON_CH16, 0xff, 0xff]);
	});
});
