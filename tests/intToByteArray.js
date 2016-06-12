var assert = require('chai').assert,
  	Midinette = require('../dist/index');

describe('intToByteArray', function() {
	it ('0xffffff', function() {
		assert.deepEqual(
			Midinette.intToByteArray(0xffffff),
			[0xff, 0xff, 0xff]
		);
	});
	it ('0xffff00', function() {
		assert.deepEqual(
			Midinette.intToByteArray(0xffff00),
			[0xff, 0xff, 0x00]
		);
	});
	it ('0x00ffff', function() {
		assert.deepEqual(
			Midinette.intToByteArray(0x00ffff),
			[0x00, 0xff, 0xff]
		);
	});
});
