module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Competences.js":
/*!***********************************!*\
  !*** ./components/Competences.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Test; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-reveal/Fade */ "react-reveal/Fade");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _sass_components_competences_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sass/components/_competences.scss */ "./sass/components/_competences.scss");
/* harmony import */ var _sass_components_competences_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_sass_components_competences_scss__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/yaniselmaleh/Desktop/Portfolio/Developpement/PortfolioNextJs/components/Competences.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function Test() {
  return __jsx("section", {
    id: "competences",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_1___default.a, {
    left: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, "- EXPERTISE -"), __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, "Comp\xE9tences")), __jsx("section", {
    className: "flex",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_1___default.a, {
    left: true,
    cascade: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx("article", {
    className: "col-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx("img", {
    src: "/react.svg",
    alt: "react",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }))), __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_1___default.a, {
    left: true,
    cascade: true,
    delay: 250,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, __jsx("article", {
    className: "col-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, __jsx("img", {
    src: "/symfony.svg",
    alt: "symfony",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }))), __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_1___default.a, {
    left: true,
    cascade: true,
    delay: 500,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, __jsx("article", {
    className: "col-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, __jsx("img", {
    src: "/next-js.svg",
    alt: "next-js",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }))), __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_1___default.a, {
    left: true,
    cascade: true,
    delay: 750,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, __jsx("article", {
    className: "col-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, __jsx("img", {
    src: "/firebase.svg",
    alt: "firebase",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }))), __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_1___default.a, {
    left: true,
    cascade: true,
    delay: 1000,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, __jsx("article", {
    className: "col-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, __jsx("img", {
    src: "/wordpress.svg",
    alt: "wordpress",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }))), __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_1___default.a, {
    left: true,
    cascade: true,
    delay: 1250,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, __jsx("article", {
    className: "col-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, __jsx("img", {
    src: "/prestashop.svg",
    alt: "prestashop",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  })))), __jsx("a", {
    href: "YanisElmaleh-CV.pdf",
    download: true,
    title: "linkedin yanis elmaleh",
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, "T\xE9l\xE9charger mon CV !")));
}

/***/ }),

/***/ "./components/Entreprises.js":
/*!***********************************!*\
  !*** ./components/Entreprises.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Entreprises; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-reveal/Fade */ "react-reveal/Fade");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _sass_components_entreprises_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sass/components/_entreprises.scss */ "./sass/components/_entreprises.scss");
/* harmony import */ var _sass_components_entreprises_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_sass_components_entreprises_scss__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/yaniselmaleh/Desktop/Portfolio/Developpement/PortfolioNextJs/components/Entreprises.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function Entreprises() {
  return __jsx("section", {
    id: "entreprises",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_1___default.a, {
    left: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, "- ENTREPRISES -"), __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, "Ils m\u2019ont fait ", __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, "confiance"), ".")), __jsx("section", {
    className: "flex",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_1___default.a, {
    left: true,
    cascade: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx("article", {
    className: "col-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx("img", {
    src: "Ministere-des-armees.png",
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }))), __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_1___default.a, {
    left: true,
    cascade: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, __jsx("article", {
    className: "col-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, __jsx("img", {
    src: "/meltdown.png",
    alt: "react",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }))), __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_1___default.a, {
    left: true,
    cascade: true,
    delay: 250,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, __jsx("article", {
    className: "col-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, __jsx("img", {
    src: "/warren-walter.svg",
    alt: "symfony",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }))), __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_1___default.a, {
    left: true,
    cascade: true,
    delay: 500,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, __jsx("article", {
    className: "col-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, __jsx("img", {
    src: "/AFM-TELETHON.png",
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }))), __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_1___default.a, {
    left: true,
    cascade: true,
    delay: 750,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, __jsx("article", {
    className: "col-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, __jsx("img", {
    src: "c17.png",
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }))), __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_1___default.a, {
    left: true,
    cascade: true,
    delay: 1000,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, __jsx("article", {
    className: "col-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, __jsx("img", {
    src: "cap-lab.png",
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }))))));
}

/***/ }),

/***/ "./components/Hackathon.js":
/*!*********************************!*\
  !*** ./components/Hackathon.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Hackathon; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-reveal/Fade */ "react-reveal/Fade");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _sass_components_entreprises_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sass/components/_entreprises.scss */ "./sass/components/_entreprises.scss");
/* harmony import */ var _sass_components_entreprises_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_sass_components_entreprises_scss__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/yaniselmaleh/Desktop/Portfolio/Developpement/PortfolioNextJs/components/Hackathon.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function Hackathon() {
  return __jsx("section", {
    id: "hackathon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_1___default.a, {
    left: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, "CHALLENGES"), __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, "Hackathon")), __jsx("section", {
    className: "flex",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_1___default.a, {
    left: true,
    cascade: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx("article", {
    className: "col-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx("img", {
    src: "/accor.svg",
    alt: "accor",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }))), __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_1___default.a, {
    left: true,
    cascade: true,
    delay: 250,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, __jsx("article", {
    className: "col-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, __jsx("img", {
    src: "/warner.svg",
    alt: "warner",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }))), __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_1___default.a, {
    left: true,
    cascade: true,
    delay: 500,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, __jsx("article", {
    className: "col-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, __jsx("img", {
    src: "/resoneo.svg",
    alt: "resoneo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }))), __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_1___default.a, {
    left: true,
    cascade: true,
    delay: 750,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, __jsx("article", {
    className: "col-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, __jsx("img", {
    src: "/grt-gaz.svg",
    alt: "grt-gaz",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }))))));
}

/***/ }),

/***/ "./components/MenuBurger.js":
/*!**********************************!*\
  !*** ./components/MenuBurger.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sass_components_reset_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sass/components/_reset.scss */ "./sass/components/_reset.scss");
/* harmony import */ var _sass_components_reset_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sass_components_reset_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _sass_components_menu_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sass/components/_menu.scss */ "./sass/components/_menu.scss");
/* harmony import */ var _sass_components_menu_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_sass_components_menu_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_burger_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-burger-menu */ "react-burger-menu");
/* harmony import */ var react_burger_menu__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_burger_menu__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/yaniselmaleh/Desktop/Portfolio/Developpement/PortfolioNextJs/components/MenuBurger.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;





class MenuBurger extends react__WEBPACK_IMPORTED_MODULE_3__["Component"] {
  howSettings(event) {
    event.preventDefault();
  }

  render() {
    return __jsx(react_burger_menu__WEBPACK_IMPORTED_MODULE_2__["elastic"], {
      right: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, __jsx("a", {
      className: "menu-item",
      href: "/",
      title: "lorem",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, "Home"), __jsx("a", {
      className: "menu-item",
      href: "/about",
      title: "lorem",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, "About"), __jsx("a", {
      className: "menu-item",
      href: "/contact",
      title: "lorem",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, "Contact"));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (MenuBurger);

/***/ }),

/***/ "./components/Portfolio.js":
/*!*********************************!*\
  !*** ./components/Portfolio.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_stack_grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-stack-grid */ "react-stack-grid");
/* harmony import */ var react_stack_grid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_stack_grid__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _sass_components_portfolio_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sass/components/_portfolio.scss */ "./sass/components/_portfolio.scss");
/* harmony import */ var _sass_components_portfolio_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_sass_components_portfolio_scss__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/yaniselmaleh/Desktop/Portfolio/Developpement/PortfolioNextJs/components/Portfolio.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




class Portfolio extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx("section", {
      id: "portfolio",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }, __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, "UX/UI - DEV - PWA"), __jsx("h2", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, "Derniers projets"), __jsx("div", {
      id: "contain",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, __jsx(react_stack_grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
      columnWidth: 250,
      gutterWidth: 15,
      gutterHeight: 15,
      itemComponent: "section",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, __jsx("article", {
      key: "key1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, __jsx("a", {
      href: "https://linkedin.com/in/yaniselmaleh",
      title: "Yunt",
      target: "_blank",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, __jsx("img", {
      src: "https://via.placeholder.com/500x1000.png?text=Yunt",
      alt: "Yunt",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }))), __jsx("article", {
      key: "key2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, __jsx("a", {
      href: "https://linkedin.com/in/yaniselmaleh",
      title: "WaveRadio",
      target: "_blank",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, __jsx("img", {
      src: "https://via.placeholder.com/500x500.png?text=WaveRadio",
      alt: "WaveRadio",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }))), __jsx("article", {
      key: "key3",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, __jsx("a", {
      href: "https://linkedin.com/in/yaniselmaleh",
      title: "Baskerville",
      target: "_blank",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }, __jsx("img", {
      src: "https://via.placeholder.com/500x1000.png?text=Baskerville",
      alt: "Baskerville",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }))), __jsx("article", {
      key: "key4",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, __jsx("a", {
      href: "https://linkedin.com/in/yaniselmaleh",
      title: "Warner France",
      target: "_blank",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, __jsx("img", {
      src: "https://via.placeholder.com/500x500.png?text=Warner+France",
      alt: "Warner France",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }))), __jsx("article", {
      key: "key5",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, __jsx("a", {
      href: "https://linkedin.com/in/yaniselmaleh",
      title: "Marvel",
      target: "_blank",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, __jsx("img", {
      src: "https://via.placeholder.com/500x1000.png?text=Marvel",
      alt: "Marvel",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }))), __jsx("article", {
      key: "key6",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }, __jsx("a", {
      href: "https://linkedin.com/in/yaniselmaleh",
      title: "G\xE9ode",
      target: "_blank",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }, __jsx("img", {
      src: "https://via.placeholder.com/500x800.png?text=Geode",
      alt: "G\xE9ode",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }))), __jsx("article", {
      key: "key7",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }, __jsx("a", {
      href: "https://linkedin.com/in/yaniselmaleh",
      title: "Jetetienaucourant",
      target: "_blank",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    }, __jsx("img", {
      src: "https://via.placeholder.com/500x800.png?text=Jetetienaucourant",
      alt: "Jetetienaucourant",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    }))), __jsx("article", {
      key: "key8",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: this
    }, __jsx("a", {
      href: "https://linkedin.com/in/yaniselmaleh",
      title: "Accor hotel",
      target: "_blank",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: this
    }, __jsx("img", {
      src: "https://via.placeholder.com/500x800.png?text=AccorHotel",
      alt: "Accor Hotel",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    }))), __jsx("article", {
      key: "key9",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: this
    }, __jsx("a", {
      href: "https://linkedin.com/in/yaniselmaleh",
      title: "Bzity",
      target: "_blank",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      },
      __self: this
    }, __jsx("img", {
      src: "https://via.placeholder.com/500x800.png?text=Bzity",
      alt: "Bzity",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71
      },
      __self: this
    }))), __jsx("article", {
      key: "key10",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      __self: this
    }, __jsx("a", {
      href: "https://linkedin.com/in/yaniselmaleh",
      title: "Alternatiba",
      target: "_blank",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: this
    }, __jsx("img", {
      src: "https://via.placeholder.com/500x800.png?text=Alternatiba",
      alt: "Alternatiba",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: this
    }))), __jsx("article", {
      key: "key11",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81
      },
      __self: this
    }, __jsx("a", {
      href: "https://linkedin.com/in/yaniselmaleh",
      title: "Anglais",
      target: "_blank",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82
      },
      __self: this
    }, __jsx("img", {
      src: "https://via.placeholder.com/500x800.png?text=Anglais",
      alt: "Anglais",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83
      },
      __self: this
    }))), __jsx("article", {
      key: "key12",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87
      },
      __self: this
    }, __jsx("a", {
      href: "https://linkedin.com/in/yaniselmaleh",
      title: "Cap-Lab",
      target: "_blank",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88
      },
      __self: this
    }, __jsx("img", {
      src: "https://via.placeholder.com/500x800.png?text=Cap-Lab",
      alt: "Cap-Lab",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89
      },
      __self: this
    }))), __jsx("article", {
      key: "key13",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93
      },
      __self: this
    }, __jsx("a", {
      href: "https://linkedin.com/in/yaniselmaleh",
      title: "Harrasment Analytic",
      target: "_blank",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94
      },
      __self: this
    }, __jsx("img", {
      src: "https://via.placeholder.com/500x500.png?text=Harrasment+Analytic",
      alt: "Harrasment Analytic",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95
      },
      __self: this
    }))), __jsx("article", {
      key: "key14",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99
      },
      __self: this
    }, __jsx("a", {
      href: "https://linkedin.com/in/yaniselmaleh",
      title: "Elveo",
      target: "_blank",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100
      },
      __self: this
    }, __jsx("img", {
      src: "https://via.placeholder.com/500x500.png?text=Elveo",
      alt: "Elveo",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101
      },
      __self: this
    }))), __jsx("article", {
      key: "key15",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105
      },
      __self: this
    }, __jsx("a", {
      href: "https://linkedin.com/in/yaniselmaleh",
      title: "Elveo",
      target: "_blank",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106
      },
      __self: this
    }, __jsx("img", {
      src: "https://via.placeholder.com/500x500.png?text=Elveo",
      alt: "Elveo",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107
      },
      __self: this
    }))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Portfolio);

/***/ }),

/***/ "./components/Work.js":
/*!****************************!*\
  !*** ./components/Work.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Work; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-reveal/Fade */ "react-reveal/Fade");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _sass_components_work_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sass/components/_work.scss */ "./sass/components/_work.scss");
/* harmony import */ var _sass_components_work_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_sass_components_work_scss__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/yaniselmaleh/Desktop/Portfolio/Developpement/PortfolioNextJs/components/Work.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function Work() {
  return __jsx("section", {
    id: "work",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_1___default.a, {
    left: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, "- TRAVAILLON ENSEMBLES -"), __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, "Votre projet en ", __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, "4 \xE9tapes"), ".")), __jsx("section", {
    className: "flex",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx("section", {
    className: "col-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx("article", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx("img", {
    src: "https://via.placeholder.com/2000",
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  })), __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "Probl\xE9matique")), __jsx("section", {
    className: "col-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, __jsx("article", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, __jsx("img", {
    src: "https://via.placeholder.com/2000",
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  })), __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, "Solutions")), __jsx("section", {
    className: "col-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, __jsx("article", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, __jsx("img", {
    src: "https://via.placeholder.com/2000",
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  })), __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, "Conception")), __jsx("section", {
    className: "col-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, __jsx("article", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, __jsx("img", {
    src: "https://via.placeholder.com/2000",
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  })), __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, "D\xE9veloppement")))));
}

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _sass_components_reset_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sass/components/_reset.scss */ "./sass/components/_reset.scss");
/* harmony import */ var _sass_components_reset_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_sass_components_reset_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _sass_components_font_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sass/components/_font.scss */ "./sass/components/_font.scss");
/* harmony import */ var _sass_components_font_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_sass_components_font_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _sass_components_home_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sass/components/_home.scss */ "./sass/components/_home.scss");
/* harmony import */ var _sass_components_home_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_sass_components_home_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _sass_components_grid_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../sass/components/_grid.scss */ "./sass/components/_grid.scss");
/* harmony import */ var _sass_components_grid_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_sass_components_grid_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _sass_components_mouse_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../sass/components/_mouse.scss */ "./sass/components/_mouse.scss");
/* harmony import */ var _sass_components_mouse_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_sass_components_mouse_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _sass_components_portfolio_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../sass/components/_portfolio.scss */ "./sass/components/_portfolio.scss");
/* harmony import */ var _sass_components_portfolio_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_sass_components_portfolio_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_MenuBurger__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/MenuBurger */ "./components/MenuBurger.js");
/* harmony import */ var _components_Competences__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Competences */ "./components/Competences.js");
/* harmony import */ var _components_Work__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Work */ "./components/Work.js");
/* harmony import */ var _components_Entreprises__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Entreprises */ "./components/Entreprises.js");
/* harmony import */ var _components_Hackathon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Hackathon */ "./components/Hackathon.js");
/* harmony import */ var _components_Portfolio__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/Portfolio */ "./components/Portfolio.js");
/* harmony import */ var react_reveal_Pulse__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-reveal/Pulse */ "react-reveal/Pulse");
/* harmony import */ var react_reveal_Pulse__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Pulse__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react_reveal_Jump__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-reveal/Jump */ "react-reveal/Jump");
/* harmony import */ var react_reveal_Jump__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Jump__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react_app_polyfill_ie9__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-app-polyfill/ie9 */ "react-app-polyfill/ie9");
/* harmony import */ var react_app_polyfill_ie9__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_app_polyfill_ie9__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var react_app_polyfill_ie11__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-app-polyfill/ie11 */ "react-app-polyfill/ie11");
/* harmony import */ var react_app_polyfill_ie11__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react_app_polyfill_ie11__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var react_app_polyfill_stable__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react-app-polyfill/stable */ "react-app-polyfill/stable");
/* harmony import */ var react_app_polyfill_stable__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(react_app_polyfill_stable__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_stable__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/stable */ "core-js/stable");
/* harmony import */ var core_js_stable__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_stable__WEBPACK_IMPORTED_MODULE_18__);
var _jsxFileName = "/Users/yaniselmaleh/Desktop/Portfolio/Developpement/PortfolioNextJs/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



















const Index = () => __jsx("section", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 25
  },
  __self: undefined
}, __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 27
  },
  __self: undefined
}, __jsx(_components_MenuBurger__WEBPACK_IMPORTED_MODULE_7__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 28
  },
  __self: undefined
})), __jsx("section", {
  id: "home",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 31
  },
  __self: undefined
}, __jsx("div", {
  className: "flex-center",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 32
  },
  __self: undefined
}, __jsx(react_reveal_Pulse__WEBPACK_IMPORTED_MODULE_13___default.a, {
  duration: 2000,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 33
  },
  __self: undefined
}, __jsx("h1", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 34
  },
  __self: undefined
}, "Yanis Elmaleh D\xE9veloppeur ", __jsx("span", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 34
  },
  __self: undefined
}, "Freelance"), ".")), __jsx("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 37
  },
  __self: undefined
}, "Disponible"), __jsx(react_reveal_Jump__WEBPACK_IMPORTED_MODULE_14___default.a, {
  duration: 1000,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 39
  },
  __self: undefined
}, __jsx("div", {
  className: "mouse",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 40
  },
  __self: undefined
})), __jsx("div", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 44
  },
  __self: undefined
}, __jsx("a", {
  href: "https://linkedin.com/in/yaniselmaleh",
  title: "linkedin yanis elmaleh",
  target: "_blank",
  className: "flex-rs1",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 45
  },
  __self: undefined
}, __jsx("img", {
  src: "/linkedin.svg",
  alt: "linkedin yanis elmaleh",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 46
  },
  __self: undefined
})), __jsx("a", {
  href: "https://github.com/yaniselmaleh",
  title: "github yanis elmaleh",
  target: "_blank",
  className: "flex-rs2",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 49
  },
  __self: undefined
}, __jsx("img", {
  src: "/github.svg",
  alt: "github yanis elmaleh",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 50
  },
  __self: undefined
}))), __jsx("div", {
  className: "flex under",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 54
  },
  __self: undefined
}, __jsx("div", {
  className: "gutter",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 55
  },
  __self: undefined
}), __jsx("div", {
  className: "gutter",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 56
  },
  __self: undefined
}), __jsx("div", {
  className: "gutter",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 57
  },
  __self: undefined
}), __jsx("div", {
  className: "gutter",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 58
  },
  __self: undefined
}), __jsx("div", {
  className: "gutter",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 59
  },
  __self: undefined
}), __jsx("div", {
  className: "gutter",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 60
  },
  __self: undefined
}), __jsx("div", {
  className: "gutter",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 61
  },
  __self: undefined
}), __jsx("div", {
  className: "gutter",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 62
  },
  __self: undefined
})))), __jsx(_components_Competences__WEBPACK_IMPORTED_MODULE_8__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 67
  },
  __self: undefined
}), __jsx(_components_Work__WEBPACK_IMPORTED_MODULE_9__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 68
  },
  __self: undefined
}), __jsx(_components_Entreprises__WEBPACK_IMPORTED_MODULE_10__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 69
  },
  __self: undefined
}), __jsx(_components_Portfolio__WEBPACK_IMPORTED_MODULE_12__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 70
  },
  __self: undefined
}), __jsx(_components_Hackathon__WEBPACK_IMPORTED_MODULE_11__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 71
  },
  __self: undefined
}));

/* harmony default export */ __webpack_exports__["default"] = (Index); // ---
// This is the Link API
// import Header from '../components/Header';
// export default function Index() {
//   return (
//     <div>
//       <Header />
//       <p>Hello Next.js</p>
//     </div>
//   );
// }
// ---
// import Layout from '../components/MyLayout';
// export default function Index() {
//   return (
//     <Layout>
//       <p>Hello Next.js</p>
//     </Layout>
//   );
// }
// import withLayout from '../components/MyLayout';
// const Page = () => <p>Hello Next.js</p>;
// export default withLayout(Page);
// import Layout from '../components/MyLayout';
// import Link from 'next/link';
// const PostLink = props => (
//   <li>
//     <Link href={`/post?title=${props.title}`}>
//       <a>{props.title}</a>
//     </Link>
//   </li>
// );
// export default function Blog() {
//   return (
//     <Layout>
//       <h1>My Blog</h1>
//       <ul>
//         <PostLink title="Hello Next.js" />
//         <PostLink title="Learn Next.js is awesome" />
//         <PostLink title="Deploy apps with Zeit" />
//       </ul>
//     </Layout>
//   );
// }

/***/ }),

/***/ "./sass/components/_competences.scss":
/*!*******************************************!*\
  !*** ./sass/components/_competences.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./sass/components/_entreprises.scss":
/*!*******************************************!*\
  !*** ./sass/components/_entreprises.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./sass/components/_font.scss":
/*!************************************!*\
  !*** ./sass/components/_font.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./sass/components/_grid.scss":
/*!************************************!*\
  !*** ./sass/components/_grid.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./sass/components/_home.scss":
/*!************************************!*\
  !*** ./sass/components/_home.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./sass/components/_menu.scss":
/*!************************************!*\
  !*** ./sass/components/_menu.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./sass/components/_mouse.scss":
/*!*************************************!*\
  !*** ./sass/components/_mouse.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./sass/components/_portfolio.scss":
/*!*****************************************!*\
  !*** ./sass/components/_portfolio.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./sass/components/_reset.scss":
/*!*************************************!*\
  !*** ./sass/components/_reset.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./sass/components/_work.scss":
/*!************************************!*\
  !*** ./sass/components/_work.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/yaniselmaleh/Desktop/Portfolio/Developpement/PortfolioNextJs/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "core-js/stable":
/*!*********************************!*\
  !*** external "core-js/stable" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/stable");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-app-polyfill/ie11":
/*!******************************************!*\
  !*** external "react-app-polyfill/ie11" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-app-polyfill/ie11");

/***/ }),

/***/ "react-app-polyfill/ie9":
/*!*****************************************!*\
  !*** external "react-app-polyfill/ie9" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-app-polyfill/ie9");

/***/ }),

/***/ "react-app-polyfill/stable":
/*!********************************************!*\
  !*** external "react-app-polyfill/stable" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-app-polyfill/stable");

/***/ }),

/***/ "react-burger-menu":
/*!************************************!*\
  !*** external "react-burger-menu" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-burger-menu");

/***/ }),

/***/ "react-reveal/Fade":
/*!************************************!*\
  !*** external "react-reveal/Fade" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-reveal/Fade");

/***/ }),

/***/ "react-reveal/Jump":
/*!************************************!*\
  !*** external "react-reveal/Jump" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-reveal/Jump");

/***/ }),

/***/ "react-reveal/Pulse":
/*!*************************************!*\
  !*** external "react-reveal/Pulse" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-reveal/Pulse");

/***/ }),

/***/ "react-stack-grid":
/*!***********************************!*\
  !*** external "react-stack-grid" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-stack-grid");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map