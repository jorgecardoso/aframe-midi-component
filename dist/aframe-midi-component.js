(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* global AFRAME */\nif (typeof AFRAME === 'undefined') {\n  throw new Error('Component attempted to register before AFRAME was available.');\n}\n\nAFRAME.registerSystem(\"midi\", {\n  schema: {\n    deviceName: {\n      type: \"string\",\n      default: \"\"\n    }\n  },\n  init: function () {\n    this.midiOutput = null;\n    this._initialized = false;\n    navigator.requestMIDIAccess({\n      software: true\n    }).then(function (access) {\n      // Get lists of available MIDI controllers\n      this._inputs = access.inputs;\n      console.log(\"Found midi inputs:\");\n\n      this._inputs.forEach(function (output) {\n        console.log(input);\n      });\n\n      this._outputs = access.outputs;\n      console.log(\"Found midi outputs:\");\n\n      this._outputs.forEach(function (output) {\n        console.log(output);\n      });\n\n      this._initialized = true;\n      this.update({});\n    }.bind(this));\n  },\n  update: function (oldData) {\n    if (!this._initialized) return;\n\n    if (this.data.deviceName !== oldData.deviceName) {\n      let found = false;\n\n      this._outputs.forEach(function (output) {\n        if (output.name === this.data.deviceName) {\n          this.midiOutput = output;\n          found = true;\n          console.log(\"Using midi output: \", this.midiOutput);\n        }\n      }.bind(this));\n\n      if (!found) {\n        console.log(\"Could not find device: \", this.data.deviceName);\n      }\n    }\n  }\n});\nAFRAME.registerComponent(\"midi\", {\n  multiple: true,\n  schema: {\n    type: {\n      type: \"string\",\n      default: \"message\",\n      oneOf: [\"message\", \"noteOn\", \"programChange\"]\n    },\n    message: {\n      type: \"array\",\n      default: [144, 60, 127]\n    },\n    note: {\n      type: \"number\",\n      default: 60\n    },\n    delay: {\n      type: \"number\",\n      default: 100\n    },\n    on: {\n      type: \"string\",\n      default: \"click\"\n    }\n  },\n  init: function () {},\n  update: function (oldData) {\n    if (this.data.on !== oldData.on) {\n      console.log(\"Removing old listener on '\", oldData.on, \"' event\");\n      this.el.removeEventListener(oldData.on, this._onEvent.bind(this));\n      console.log(\"Adding listener on '\", this.data.on, \"' event\");\n      this.el.addEventListener(this.data.on, this._onEvent.bind(this));\n    }\n  },\n  _onEvent: function (evt) {\n    //console.log(\"Event: \", evt);\n    switch (this.data.type) {\n      case \"message\":\n        this.system.midiOutput.send(this.data.message); // sends the message.\n\n        break;\n\n      default:\n        console.log(\"Unknwn type: \", this.data.type);\n    }\n  }\n});\n\n//# sourceURL=webpack:///./index.js?");

/***/ })

/******/ });
});