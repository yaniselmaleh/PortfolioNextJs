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
/* harmony import */ var _sass_components_propos_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../sass/components/_propos.scss */ "./sass/components/_propos.scss");
/* harmony import */ var _sass_components_propos_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_sass_components_propos_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _sass_components_mouse_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../sass/components/_mouse.scss */ "./sass/components/_mouse.scss");
/* harmony import */ var _sass_components_mouse_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_sass_components_mouse_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _sass_components_portfolio_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../sass/components/_portfolio.scss */ "./sass/components/_portfolio.scss");
/* harmony import */ var _sass_components_portfolio_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_sass_components_portfolio_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_reveal_Pulse__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-reveal/Pulse */ "react-reveal/Pulse");
/* harmony import */ var react_reveal_Pulse__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Pulse__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-reveal/Fade */ "react-reveal/Fade");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_reveal_Jump__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-reveal/Jump */ "react-reveal/Jump");
/* harmony import */ var react_reveal_Jump__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Jump__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_count_to__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-count-to */ "react-count-to");
/* harmony import */ var react_count_to__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_count_to__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_app_polyfill_ie9__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-app-polyfill/ie9 */ "react-app-polyfill/ie9");
/* harmony import */ var react_app_polyfill_ie9__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_app_polyfill_ie9__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_app_polyfill_ie11__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-app-polyfill/ie11 */ "react-app-polyfill/ie11");
/* harmony import */ var react_app_polyfill_ie11__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_app_polyfill_ie11__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react_app_polyfill_stable__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-app-polyfill/stable */ "react-app-polyfill/stable");
/* harmony import */ var react_app_polyfill_stable__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_app_polyfill_stable__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_stable__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/stable */ "core-js/stable");
/* harmony import */ var core_js_stable__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_stable__WEBPACK_IMPORTED_MODULE_15__);
var _jsxFileName = "/Users/yaniselmaleh/Desktop/Portfolio/Developpement/PortfolioNextJs/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
















const Index = () => __jsx("section", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20
  },
  __self: undefined
}, __jsx("section", {
  id: "home",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21
  },
  __self: undefined
}, __jsx("div", {
  className: "flex-center",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22
  },
  __self: undefined
}, __jsx(react_reveal_Pulse__WEBPACK_IMPORTED_MODULE_8___default.a, {
  duration: 2000,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23
  },
  __self: undefined
}, __jsx("h1", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24
  },
  __self: undefined
}, "Yanis Elmaleh D\xE9veloppeur ", __jsx("span", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24
  },
  __self: undefined
}, "Freelance"), ".")), __jsx("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 27
  },
  __self: undefined
}, "Disponible"), __jsx(react_reveal_Jump__WEBPACK_IMPORTED_MODULE_10___default.a, {
  duration: 1000,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 29
  },
  __self: undefined
}, __jsx("div", {
  class: "mouse",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 30
  },
  __self: undefined
})), __jsx("div", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 34
  },
  __self: undefined
}, __jsx("a", {
  href: "https://linkedin.com/in/yaniselmaleh",
  title: "linkedin yanis elmaleh",
  target: "_blank",
  className: "flex-rs1",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 35
  },
  __self: undefined
}, __jsx("img", {
  src: "/linkedin.svg",
  alt: "linkedin yanis elmaleh",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 36
  },
  __self: undefined
})), __jsx("a", {
  href: "https://github.com/yaniselmaleh",
  title: "github yanis elmaleh",
  target: "_blank",
  className: "flex-rs2",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 39
  },
  __self: undefined
}, __jsx("img", {
  src: "/github.svg",
  alt: "github yanis elmaleh",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 40
  },
  __self: undefined
}))), __jsx("div", {
  className: "flex under",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 44
  },
  __self: undefined
}, __jsx("div", {
  className: "gutter",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 45
  },
  __self: undefined
}), __jsx("div", {
  className: "gutter",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 46
  },
  __self: undefined
}), __jsx("div", {
  className: "gutter",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 47
  },
  __self: undefined
}), __jsx("div", {
  className: "gutter",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 48
  },
  __self: undefined
}), __jsx("div", {
  className: "gutter",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 49
  },
  __self: undefined
}), __jsx("div", {
  className: "gutter",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 50
  },
  __self: undefined
}), __jsx("div", {
  className: "gutter",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 51
  },
  __self: undefined
}), __jsx("div", {
  className: "gutter",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 52
  },
  __self: undefined
})))), __jsx("section", {
  id: "propos",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 57
  },
  __self: undefined
}, __jsx("div", {
  className: "container",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 58
  },
  __self: undefined
}, __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_9___default.a, {
  left: true,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 59
  },
  __self: undefined
}, __jsx("h2", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 60
  },
  __self: undefined
}, "Plus qu'un m\xE9tier, une ", __jsx("span", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 60
  },
  __self: undefined
}, "passion"), ".")), __jsx("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 63
  },
  __self: undefined
}, "Je projette de continuer dans le domaine du nume\u0301rique et d\u2019approfondir mes connaissances techniques tout en restant connecte\u0301 avec l\u2019e\u0301volution et les tendances technologiques.", __jsx("br", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 64
  },
  __self: undefined
}), __jsx("br", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 64
  },
  __self: undefined
}), "Si vous souhaitez en savoir plus, n\u2019h\xE9sitez pas \xE0 me joindre sur Linkedin.", __jsx(react_count_to__WEBPACK_IMPORTED_MODULE_11___default.a, {
  to: 12345,
  speed: 12345,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 66
  },
  __self: undefined
})), __jsx("div", {
  className: "flex under2",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 74
  },
  __self: undefined
}, __jsx("div", {
  className: "gutter2",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 75
  },
  __self: undefined
}), __jsx("div", {
  className: "gutter2",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 76
  },
  __self: undefined
}), __jsx("div", {
  className: "gutter2",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 77
  },
  __self: undefined
}), __jsx("div", {
  className: "gutter2",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 78
  },
  __self: undefined
}), __jsx("div", {
  className: "gutter2",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 79
  },
  __self: undefined
}), __jsx("div", {
  className: "gutter2",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 80
  },
  __self: undefined
}), __jsx("div", {
  className: "gutter2",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 81
  },
  __self: undefined
}), __jsx("div", {
  className: "gutter2",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 82
  },
  __self: undefined
})), __jsx("section", {
  className: "flex",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 85
  },
  __self: undefined
}, __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_9___default.a, {
  left: true,
  cascade: true,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 86
  },
  __self: undefined
}, __jsx("article", {
  className: "col-2",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 87
  },
  __self: undefined
}, __jsx("img", {
  src: "/react.svg",
  alt: "react",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 88
  },
  __self: undefined
}))), __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_9___default.a, {
  left: true,
  cascade: true,
  delay: 250,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 92
  },
  __self: undefined
}, __jsx("article", {
  className: "col-2",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 93
  },
  __self: undefined
}, __jsx("img", {
  src: "/symfony.svg",
  alt: "symfony",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 94
  },
  __self: undefined
}))), __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_9___default.a, {
  left: true,
  cascade: true,
  delay: 500,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 98
  },
  __self: undefined
}, __jsx("article", {
  className: "col-2",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 99
  },
  __self: undefined
}, __jsx("img", {
  src: "/next-js.svg",
  alt: "next-js",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 100
  },
  __self: undefined
}))), __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_9___default.a, {
  left: true,
  cascade: true,
  delay: 750,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 104
  },
  __self: undefined
}, __jsx("article", {
  className: "col-2",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 105
  },
  __self: undefined
}, __jsx("img", {
  src: "/firebase.svg",
  alt: "firebase",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 106
  },
  __self: undefined
}))), __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_9___default.a, {
  left: true,
  cascade: true,
  delay: 1000,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 110
  },
  __self: undefined
}, __jsx("article", {
  className: "col-2",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 111
  },
  __self: undefined
}, __jsx("img", {
  src: "/wordpress.svg",
  alt: "wordpress",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 112
  },
  __self: undefined
}))), __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_9___default.a, {
  left: true,
  cascade: true,
  delay: 1250,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 116
  },
  __self: undefined
}, __jsx("article", {
  className: "col-2",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 117
  },
  __self: undefined
}, __jsx("img", {
  src: "/prestashop.svg",
  alt: "prestashop",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 118
  },
  __self: undefined
})))))));

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

/***/ "./sass/components/_propos.scss":
/*!**************************************!*\
  !*** ./sass/components/_propos.scss ***!
  \**************************************/
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

/***/ "react-count-to":
/*!*********************************!*\
  !*** external "react-count-to" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-count-to");

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

/***/ })

/******/ });
//# sourceMappingURL=index.js.map