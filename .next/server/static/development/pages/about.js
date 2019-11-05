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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

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
    }, "- UX/UI - DEV - PWA -"), __jsx("h2", {
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

/***/ "./pages/about.js":
/*!************************!*\
  !*** ./pages/about.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return About; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Portfolio__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Portfolio */ "./components/Portfolio.js");
var _jsxFileName = "/Users/yaniselmaleh/Desktop/Portfolio/Developpement/PortfolioNextJs/pages/about.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// import Header from '../components/Header';

function About() {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, __jsx(_components_Portfolio__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }));
} // pages/about.js
// ---
// import Layout from '../components/MyLayout';
// export default function About() {
//   return (
//     <Layout>
//       <p>This is the about page</p>
//     </Layout>
//   );
// }
// ---
// pages/about.js
// import withLayout from '../components/MyLayout';
// const Page = () => <p>This is the about page</p>;
// export default withLayout(Page);

/***/ }),

/***/ "./sass/components/_portfolio.scss":
/*!*****************************************!*\
  !*** ./sass/components/_portfolio.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 5:
/*!******************************!*\
  !*** multi ./pages/about.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/yaniselmaleh/Desktop/Portfolio/Developpement/PortfolioNextJs/pages/about.js */"./pages/about.js");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

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
//# sourceMappingURL=about.js.map