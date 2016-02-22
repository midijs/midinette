var assert = require('assert'),
  	Midinette = require('../dist/index'),
	StatusCodes = require('../dist/statusCodes'),
	_ = require('underscore');

describe('functions', function() {
	describe('isMIDIStatus', function() {
		it('should return true', function() {
			_.each(StatusCodes, function(status) {
				assert.equal(Midinette.isMIDIStatus(status), true);
			});
		});
	});
});
