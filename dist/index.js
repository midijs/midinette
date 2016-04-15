'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _functions = require('./functions');

var Functions = _interopRequireWildcard(_functions);

var _midiNotes = require('./midiNotes');

var _midiNotes2 = _interopRequireDefault(_midiNotes);

var _statusCodes = require('./statusCodes');

var _statusCodes2 = _interopRequireDefault(_statusCodes);

var _controlChange = require('./controlChange');

var _controlChange2 = _interopRequireDefault(_controlChange);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var Midinette = {
	Notes: _midiNotes2.default,
	StatusCodes: _statusCodes2.default,
	ControlChange: _controlChange2.default
};

_extends(Midinette, Functions);

exports.default = Midinette;
module.exports = exports['default'];