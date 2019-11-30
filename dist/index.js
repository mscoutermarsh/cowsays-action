module.exports =
/******/ (function(modules, runtime) { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	__webpack_require__.ab = __dirname + "/";
/******/
/******/ 	// the startup function
/******/ 	function startup() {
/******/ 		// Load entry module and return exports
/******/ 		return __webpack_require__(104);
/******/ 	};
/******/
/******/ 	// run startup
/******/ 	return startup();
/******/ })
/************************************************************************/
/******/ ({

/***/ 75:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

var path = __webpack_require__(622);
var fs = __webpack_require__(747);
var replacer = __webpack_require__(732);

var textCache = {};
var cowsPath = __webpack_require__.ab + "cows";

function cowNamesFromFiles (files) {
	return files.map(function (cow) {
		return path.basename(cow, ".cow");
	});
}

exports.get = function (cow) {
	var text = textCache[cow];

	if (!text) {
		var filePath;

		if (cow.match(/\\/) || cow.match(/\//)) {
			filePath = cow;
		} else {
			filePath = __webpack_require__.ab + "cows/" + cow + '.cow';
		}
		text = fs.readFileSync(filePath, "utf-8");
		textCache[cow] = text;
	}

	return function (options) {
		return replacer(text, options);
	};
}

exports.list = function (callback) {
	return new Promise(function (resolve, reject) {
		fs.readdir(__webpack_require__.ab + "cows", function (err, files) {
			if (err) {
				reject(err);
				callback(err);
			} else {
				resolve(files);
				callback(null, cowNamesFromFiles(files));
			}
		});
	});
}

exports.listSync = function () {
	return cowNamesFromFiles(fs.readdirSync(__webpack_require__.ab + "cows"))
}


/***/ }),

/***/ 87:
/***/ (function(module) {

module.exports = require("os");

/***/ }),

/***/ 90:
/***/ (function(module, __unusedexports, __webpack_require__) {

"use strict";

const stripAnsi = __webpack_require__(335);
const isFullwidthCodePoint = __webpack_require__(351);

module.exports = str => {
	if (typeof str !== 'string' || str.length === 0) {
		return 0;
	}

	str = stripAnsi(str);

	let width = 0;

	for (let i = 0; i < str.length; i++) {
		const code = str.codePointAt(i);

		// Ignore control characters
		if (code <= 0x1F || (code >= 0x7F && code <= 0x9F)) {
			continue;
		}

		// Ignore combining characters
		if (code >= 0x300 && code <= 0x36F) {
			continue;
		}

		// Surrogates
		if (code > 0xFFFF) {
			i++;
		}

		width += isFullwidthCodePoint(code) ? 2 : 1;
	}

	return width;
};


/***/ }),

/***/ 104:
/***/ (function(__unusedmodule, __unusedexports, __webpack_require__) {

const core = __webpack_require__(470);
const cowsay = __webpack_require__(966);

async function run() {
  const text = core.getInput('text');

  console.log(cowsay.say({ text : text }));
}

run()


/***/ }),

/***/ 335:
/***/ (function(module, __unusedexports, __webpack_require__) {

"use strict";

const ansiRegex = __webpack_require__(825);

module.exports = input => typeof input === 'string' ? input.replace(ansiRegex(), '') : input;


/***/ }),

/***/ 351:
/***/ (function(module) {

"use strict";

/* eslint-disable yoda */
module.exports = x => {
	if (Number.isNaN(x)) {
		return false;
	}

	// code points are derived from:
	// http://www.unix.org/Public/UNIDATA/EastAsianWidth.txt
	if (
		x >= 0x1100 && (
			x <= 0x115f ||  // Hangul Jamo
			x === 0x2329 || // LEFT-POINTING ANGLE BRACKET
			x === 0x232a || // RIGHT-POINTING ANGLE BRACKET
			// CJK Radicals Supplement .. Enclosed CJK Letters and Months
			(0x2e80 <= x && x <= 0x3247 && x !== 0x303f) ||
			// Enclosed CJK Letters and Months .. CJK Unified Ideographs Extension A
			(0x3250 <= x && x <= 0x4dbf) ||
			// CJK Unified Ideographs .. Yi Radicals
			(0x4e00 <= x && x <= 0xa4c6) ||
			// Hangul Jamo Extended-A
			(0xa960 <= x && x <= 0xa97c) ||
			// Hangul Syllables
			(0xac00 <= x && x <= 0xd7a3) ||
			// CJK Compatibility Ideographs
			(0xf900 <= x && x <= 0xfaff) ||
			// Vertical Forms
			(0xfe10 <= x && x <= 0xfe19) ||
			// CJK Compatibility Forms .. Small Form Variants
			(0xfe30 <= x && x <= 0xfe6b) ||
			// Halfwidth and Fullwidth Forms
			(0xff01 <= x && x <= 0xff60) ||
			(0xffe0 <= x && x <= 0xffe6) ||
			// Kana Supplement
			(0x1b000 <= x && x <= 0x1b001) ||
			// Enclosed Ideographic Supplement
			(0x1f200 <= x && x <= 0x1f251) ||
			// CJK Unified Ideographs Extension B .. Tertiary Ideographic Plane
			(0x20000 <= x && x <= 0x3fffd)
		)
	) {
		return true;
	}

	return false;
};


/***/ }),

/***/ 431:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const os = __webpack_require__(87);
/**
 * Commands
 *
 * Command Format:
 *   ##[name key=value;key=value]message
 *
 * Examples:
 *   ##[warning]This is the user warning message
 *   ##[set-secret name=mypassword]definitelyNotAPassword!
 */
function issueCommand(command, properties, message) {
    const cmd = new Command(command, properties, message);
    process.stdout.write(cmd.toString() + os.EOL);
}
exports.issueCommand = issueCommand;
function issue(name, message = '') {
    issueCommand(name, {}, message);
}
exports.issue = issue;
const CMD_STRING = '::';
class Command {
    constructor(command, properties, message) {
        if (!command) {
            command = 'missing.command';
        }
        this.command = command;
        this.properties = properties;
        this.message = message;
    }
    toString() {
        let cmdStr = CMD_STRING + this.command;
        if (this.properties && Object.keys(this.properties).length > 0) {
            cmdStr += ' ';
            for (const key in this.properties) {
                if (this.properties.hasOwnProperty(key)) {
                    const val = this.properties[key];
                    if (val) {
                        // safely append the val - avoid blowing up when attempting to
                        // call .replace() if message is not a string for some reason
                        cmdStr += `${key}=${escape(`${val || ''}`)},`;
                    }
                }
            }
        }
        cmdStr += CMD_STRING;
        // safely append the message - avoid blowing up when attempting to
        // call .replace() if message is not a string for some reason
        const message = `${this.message || ''}`;
        cmdStr += escapeData(message);
        return cmdStr;
    }
}
function escapeData(s) {
    return s.replace(/\r/g, '%0D').replace(/\n/g, '%0A');
}
function escape(s) {
    return s
        .replace(/\r/g, '%0D')
        .replace(/\n/g, '%0A')
        .replace(/]/g, '%5D')
        .replace(/;/g, '%3B');
}
//# sourceMappingURL=command.js.map

/***/ }),

/***/ 470:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const command_1 = __webpack_require__(431);
const os = __webpack_require__(87);
const path = __webpack_require__(622);
/**
 * The code to exit an action
 */
var ExitCode;
(function (ExitCode) {
    /**
     * A code indicating that the action was successful
     */
    ExitCode[ExitCode["Success"] = 0] = "Success";
    /**
     * A code indicating that the action was a failure
     */
    ExitCode[ExitCode["Failure"] = 1] = "Failure";
})(ExitCode = exports.ExitCode || (exports.ExitCode = {}));
//-----------------------------------------------------------------------
// Variables
//-----------------------------------------------------------------------
/**
 * Sets env variable for this action and future actions in the job
 * @param name the name of the variable to set
 * @param val the value of the variable
 */
function exportVariable(name, val) {
    process.env[name] = val;
    command_1.issueCommand('set-env', { name }, val);
}
exports.exportVariable = exportVariable;
/**
 * Registers a secret which will get masked from logs
 * @param secret value of the secret
 */
function setSecret(secret) {
    command_1.issueCommand('add-mask', {}, secret);
}
exports.setSecret = setSecret;
/**
 * Prepends inputPath to the PATH (for this action and future actions)
 * @param inputPath
 */
function addPath(inputPath) {
    command_1.issueCommand('add-path', {}, inputPath);
    process.env['PATH'] = `${inputPath}${path.delimiter}${process.env['PATH']}`;
}
exports.addPath = addPath;
/**
 * Gets the value of an input.  The value is also trimmed.
 *
 * @param     name     name of the input to get
 * @param     options  optional. See InputOptions.
 * @returns   string
 */
function getInput(name, options) {
    const val = process.env[`INPUT_${name.replace(/ /g, '_').toUpperCase()}`] || '';
    if (options && options.required && !val) {
        throw new Error(`Input required and not supplied: ${name}`);
    }
    return val.trim();
}
exports.getInput = getInput;
/**
 * Sets the value of an output.
 *
 * @param     name     name of the output to set
 * @param     value    value to store
 */
function setOutput(name, value) {
    command_1.issueCommand('set-output', { name }, value);
}
exports.setOutput = setOutput;
//-----------------------------------------------------------------------
// Results
//-----------------------------------------------------------------------
/**
 * Sets the action status to failed.
 * When the action exits it will be with an exit code of 1
 * @param message add error issue message
 */
function setFailed(message) {
    process.exitCode = ExitCode.Failure;
    error(message);
}
exports.setFailed = setFailed;
//-----------------------------------------------------------------------
// Logging Commands
//-----------------------------------------------------------------------
/**
 * Writes debug message to user log
 * @param message debug message
 */
function debug(message) {
    command_1.issueCommand('debug', {}, message);
}
exports.debug = debug;
/**
 * Adds an error issue
 * @param message error issue message
 */
function error(message) {
    command_1.issue('error', message);
}
exports.error = error;
/**
 * Adds an warning issue
 * @param message warning issue message
 */
function warning(message) {
    command_1.issue('warning', message);
}
exports.warning = warning;
/**
 * Writes info to log with console.log.
 * @param message info message
 */
function info(message) {
    process.stdout.write(message + os.EOL);
}
exports.info = info;
/**
 * Begin an output group.
 *
 * Output until the next `groupEnd` will be foldable in this group
 *
 * @param name The name of the output group
 */
function startGroup(name) {
    command_1.issue('group', name);
}
exports.startGroup = startGroup;
/**
 * End an output group.
 */
function endGroup() {
    command_1.issue('endgroup');
}
exports.endGroup = endGroup;
/**
 * Wrap an asynchronous function call in a group.
 *
 * Returns the same type as the function itself.
 *
 * @param name The name of the group
 * @param fn The function to wrap in the group
 */
function group(name, fn) {
    return __awaiter(this, void 0, void 0, function* () {
        startGroup(name);
        let result;
        try {
            result = yield fn();
        }
        finally {
            endGroup();
        }
        return result;
    });
}
exports.group = group;
//-----------------------------------------------------------------------
// Wrapper action state
//-----------------------------------------------------------------------
/**
 * Saves state for current action, the state can only be retrieved by this action's post job execution.
 *
 * @param     name     name of the state to store
 * @param     value    value to store
 */
function saveState(name, value) {
    command_1.issueCommand('save-state', { name }, value);
}
exports.saveState = saveState;
/**
 * Gets the value of an state set by this action's main execution.
 *
 * @param     name     name of the state to get
 * @returns   string
 */
function getState(name) {
    return process.env[`STATE_${name}`] || '';
}
exports.getState = getState;
//# sourceMappingURL=core.js.map

/***/ }),

/***/ 587:
/***/ (function(module) {

var modes = {
	"b" : {
		eyes : "==",
		tongue : "  "
	},
	"d" : {
		eyes : "xx",
		tongue : "U "
	},
	"g" : {
		eyes : "$$",
		tongue : "  "
	},
	"p" : {
		eyes : "@@",
		tongue : "  "
	},
	"s" : {
		eyes : "**",
		tongue : "U "
	},
	"t" : {
		eyes : "--",
		tongue : "  "
	},
	"w" : {
		eyes : "OO",
		tongue : "  "
	},
	"y" : {
		eyes : "..",
		tongue : "  "
	}
};

module.exports = function (options) {
	for (var mode in modes) {
		if (options[mode] === true) {
			return modes[mode];
		}
	}

	return {
		eyes : options.e || "oo",
		tongue : options.T || "  "
	};
};


/***/ }),

/***/ 622:
/***/ (function(module) {

module.exports = require("path");

/***/ }),

/***/ 732:
/***/ (function(module) {

module.exports = function (cow, variables) {
	var eyes = escapeRe(variables.eyes);
	var eyeL = eyes.charAt(0);
	var eyeR = eyes.charAt(1);
	var tongue = escapeRe(variables.tongue);

	if (cow.indexOf("$the_cow") !== -1) {
		cow = extractTheCow(cow);
	}

	return cow
		.replace(/\$thoughts/g, variables.thoughts)
		.replace(/\$eyes/g, eyes)
		.replace(/\$tongue/g, tongue)
		.replace(/\$\{eyes\}/g, eyes)
		.replace(/\$eye/, eyeL)
		.replace(/\$eye/, eyeR)
		.replace(/\$\{tongue\}/g, tongue)
	;
};

/*
 * "$" dollar signs must be doubled before being used in a regex replace
 * This can occur in eyes or tongue.
 * For example:
 *
 * cowsay -g Moo!
 *
 * cowsay -e "\$\$" Moo!
 */
function escapeRe (s) {
	if (s && s.replace) {
		return s.replace(/\$/g, "$$$$");
	}
	return s;
}

function extractTheCow (cow) {
	cow = cow.replace(/\r\n?|[\n\u2028\u2029]/g, "\n").replace(/^\uFEFF/, '');
	var match = /\$the_cow\s*=\s*<<"*EOC"*;*\n([\s\S]+)\nEOC\n/.exec(cow);

	if (!match) {
		console.error("Cannot parse cow file\n", cow);
		return cow;
	} else {
		return match[1].replace(/\\{2}/g, "\\").replace(/\\@/g, "@").replace(/\\\$/g, "$");
	}
}

/***/ }),

/***/ 747:
/***/ (function(module) {

module.exports = require("fs");

/***/ }),

/***/ 825:
/***/ (function(module) {

"use strict";


module.exports = () => {
	const pattern = [
		'[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:[a-zA-Z\\d]*(?:;[a-zA-Z\\d]*)*)?\\u0007)',
		'(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PRZcf-ntqry=><~]))'
	].join('|');

	return new RegExp(pattern, 'g');
};


/***/ }),

/***/ 966:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

var baloon = __webpack_require__(993);
var cows = __webpack_require__(75);
var faces = __webpack_require__(587);

exports.say = function (options) {
	return doIt(options, true);
};

exports.think = function (options) {
	return doIt(options, false);
};

exports.list = cows.list;

function doIt (options, sayAloud) {
	var cowFile;

	if (options.r) {
		var cowsList = cows.listSync();
		cowFile = cowsList[Math.floor(Math.random() * cowsList.length)];
	} else {
		cowFile = options.f || "default";
	}

	var cow = cows.get(cowFile);
	var face = faces(options);
	face.thoughts = sayAloud ? "\\" : "o";

	var action = sayAloud ? "say" : "think";
	return baloon[action](options.text || options._.join(" "), options.n ? null : options.W) + "\n" + cow(face);
}


/***/ }),

/***/ 993:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

var stringWidth = __webpack_require__(90);

exports.say = function (text, wrap) {
	var delimiters = {
		first : ["/", "\\"],
		middle : ["|", "|"],
		last : ["\\", "/"],
		only : ["<", ">"]
	};

	return format(text, wrap, delimiters);
}

exports.think = function (text, wrap) {
	var delimiters = {
		first : ["(", ")"],
		middle : ["(", ")"],
		last : ["(", ")"],
		only : ["(", ")"]
	};

	return format(text, wrap, delimiters);
}

function format (text, wrap, delimiters) {
	var lines = split(text, wrap);
	var maxLength = max(lines);

	var balloon;
	if (lines.length === 1) {
		balloon = [
			" " + top(maxLength),
			delimiters.only[0] + " " + lines[0] + " " + delimiters.only[1],
			" " + bottom(maxLength)
		];
	} else {
		balloon = [" " + top(maxLength)];

		for (var i = 0, len = lines.length; i < len; i += 1) {
			var delimiter;

			if (i === 0) {
				delimiter = delimiters.first;
			} else if (i === len - 1) {
				delimiter = delimiters.last;
			} else {
				delimiter = delimiters.middle;
			}

			balloon.push(delimiter[0] + " " + pad(lines[i], maxLength) + " " + delimiter[1]);
		}

		balloon.push(" " + bottom(maxLength));
	}

	return balloon.join("\n");
}

function split (text, wrap) {
	text = text.replace(/\r\n?|[\n\u2028\u2029]/g, "\n").replace(/^\uFEFF/, '').replace(/\t/g, '        ');

	var lines = [];
	if (!wrap) {
		lines = text.split("\n");
	} else {
		var start = 0;
		while (start < text.length) {
			var nextNewLine = text.indexOf("\n", start);

			var wrapAt = Math.min(start + wrap, nextNewLine === -1 ? text.length : nextNewLine);

			lines.push(text.substring(start, wrapAt));
			start = wrapAt;

			// Ignore next new line
			if (text.charAt(start) === "\n") {
				start += 1;
			}
		}
	}

	return lines;
}

function max (lines) {
	var max = 0;
	for (var i = 0, len = lines.length; i < len; i += 1) {
		if (stringWidth(lines[i]) > max) {
			max = stringWidth(lines[i]);
		}
	}

	return max;
}

function pad (text, length) {
	return text + (new Array(length - stringWidth(text) + 1)).join(" ");
}

function top (length) {
	return new Array(length + 3).join("_");
}

function bottom (length) {
	return new Array(length + 3).join("-");
}


/***/ })

/******/ });