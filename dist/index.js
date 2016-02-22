'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

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

var Midinette = Object.assign({}, _controlChange2.default, _midiNotes2.default, _statusCodes2.default, Functions);

global.Midinette = Midinette;
exports.default = Midinette;
module.exports = exports['default'];