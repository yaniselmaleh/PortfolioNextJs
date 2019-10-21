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
var _jsxFileName = "/Users/yaniselmaleh/Desktop/Portfolio/Developpement/PortfolioNextJs/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const Index = () => __jsx("section", {
  id: "home",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}, __jsx("div", {
  className: "flex-center",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}, __jsx("h1", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}, "Yanis Elmaleh D\xE9veloppeur ", __jsx("span", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}, "Freelance"), "."), __jsx("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}, "Disponible"), __jsx("div", {
  className: "flex under",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
}, __jsx("div", {
  className: "gutter",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13
  },
  __self: undefined
}), __jsx("div", {
  className: "gutter",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14
  },
  __self: undefined
}), __jsx("div", {
  className: "gutter",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15
  },
  __self: undefined
}), __jsx("div", {
  className: "gutter",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16
  },
  __self: undefined
}), __jsx("div", {
  className: "gutter",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17
  },
  __self: undefined
}), __jsx("div", {
  className: "gutter",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18
  },
  __self: undefined
}), __jsx("div", {
  className: "gutter",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19
  },
  __self: undefined
}), __jsx("div", {
  className: "gutter",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20
  },
  __self: undefined
}), __jsx("div", {
  className: "gutter",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21
  },
  __self: undefined
}), __jsx("div", {
  className: "gutter",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22
  },
  __self: undefined
}))));

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

/***/ "./sass/components/_reset.scss":
/*!*************************************!*\
  !*** ./sass/components/_reset.scss ***!
  \*************************************/
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

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map