var assert = require('chai').assert,
  	Midinette = require('../dist/index'),
	StatusCodes = require('../dist/statusCodes');

describe('isMIDIByteArray', function() {
	it('should return true', function() {
		assert.equal(Midinette.isMIDIByteArray([0x00, 0x00, 0x00]), true);
	});
	it('should return false', function() {
		assert.equal(Midinette.isMIDIByteArray([0xfff, 0xff, 0xff]), false);
	});
});
