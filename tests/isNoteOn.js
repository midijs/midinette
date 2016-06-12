var assert = require('chai').assert,
  	Midinette = require('../dist/index'),
	StatusCodes = require('../dist/statusCodes');

var noteOns = [
	StatusCodes.NOTE_ON_CH1,
	StatusCodes.NOTE_ON_CH2,
	StatusCodes.NOTE_ON_CH3,
	StatusCodes.NOTE_ON_CH4,
	StatusCodes.NOTE_ON_CH5,
	StatusCodes.NOTE_ON_CH6,
	StatusCodes.NOTE_ON_CH7,
	StatusCodes.NOTE_ON_CH8,
	StatusCodes.NOTE_ON_CH9,
	StatusCodes.NOTE_ON_CH10,
	StatusCodes.NOTE_ON_CH11,
	StatusCodes.NOTE_ON_CH12,
	StatusCodes.NOTE_ON_CH13,
	StatusCodes.NOTE_ON_CH14,
	StatusCodes.NOTE_ON_CH15,
	StatusCodes.NOTE_ON_CH16
];

describe('isNoteOn', function() {
	it('should be true', function() {
		noteOns.forEach(function(statusCode) {
			assert.equal(Midinette.isNoteOn(statusCode), true);
		});
	});
});
