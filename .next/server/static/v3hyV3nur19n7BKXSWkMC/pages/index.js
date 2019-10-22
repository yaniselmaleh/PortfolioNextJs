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

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("RNiq");


/***/ }),

/***/ "6Nov":
/***/ (function(module, exports) {



/***/ }),

/***/ "AM7/":
/***/ (function(module, exports) {

module.exports = require("react-reveal/Pulse");

/***/ }),

/***/ "B1Xa":
/***/ (function(module, exports) {



/***/ }),

/***/ "IrP5":
/***/ (function(module, exports) {

module.exports = require("react-reveal/Fade");

/***/ }),

/***/ "PY3e":
/***/ (function(module, exports) {

module.exports = require("react-app-polyfill/ie9");

/***/ }),

/***/ "RNiq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _sass_components_reset_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("B1Xa");
/* harmony import */ var _sass_components_reset_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_sass_components_reset_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _sass_components_font_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("dE9K");
/* harmony import */ var _sass_components_font_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_sass_components_font_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _sass_components_home_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("T91m");
/* harmony import */ var _sass_components_home_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_sass_components_home_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _sass_components_grid_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("TfqW");
/* harmony import */ var _sass_components_grid_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_sass_components_grid_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _sass_components_propos_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("jYDM");
/* harmony import */ var _sass_components_propos_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_sass_components_propos_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _sass_components_mouse_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("6Nov");
/* harmony import */ var _sass_components_mouse_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_sass_components_mouse_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _sass_components_portfolio_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("T5pp");
/* harmony import */ var _sass_components_portfolio_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_sass_components_portfolio_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_reveal_Pulse__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("AM7/");
/* harmony import */ var react_reveal_Pulse__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Pulse__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("IrP5");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_reveal_Jump__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("XUav");
/* harmony import */ var react_reveal_Jump__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Jump__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_count_to__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("Ys+F");
/* harmony import */ var react_count_to__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_count_to__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_app_polyfill_ie9__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("PY3e");
/* harmony import */ var react_app_polyfill_ie9__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_app_polyfill_ie9__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_app_polyfill_ie11__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("jdA4");
/* harmony import */ var react_app_polyfill_ie11__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_app_polyfill_ie11__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react_app_polyfill_stable__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("xoQe");
/* harmony import */ var react_app_polyfill_stable__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_app_polyfill_stable__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_stable__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("og1N");
/* harmony import */ var core_js_stable__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_stable__WEBPACK_IMPORTED_MODULE_15__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
















const Index = () => __jsx("section", null, __jsx("section", {
  id: "home"
}, __jsx("div", {
  className: "flex-center"
}, __jsx(react_reveal_Pulse__WEBPACK_IMPORTED_MODULE_8___default.a, {
  duration: 2000
}, __jsx("h1", null, "Yanis Elmaleh D\xE9veloppeur ", __jsx("span", null, "Freelance"), ".")), __jsx("p", null, "Disponible"), __jsx(react_reveal_Jump__WEBPACK_IMPORTED_MODULE_10___default.a, {
  duration: 1000
}, __jsx("div", {
  class: "mouse"
})), __jsx("div", null, __jsx("a", {
  href: "https://linkedin.com/in/yaniselmaleh",
  title: "linkedin yanis elmaleh",
  target: "_blank",
  className: "flex-rs1"
}, __jsx("img", {
  src: "/linkedin.svg",
  alt: "linkedin yanis elmaleh"
})), __jsx("a", {
  href: "https://github.com/yaniselmaleh",
  title: "github yanis elmaleh",
  target: "_blank",
  className: "flex-rs2"
}, __jsx("img", {
  src: "/github.svg",
  alt: "github yanis elmaleh"
}))), __jsx("div", {
  className: "flex under"
}, __jsx("div", {
  className: "gutter"
}), __jsx("div", {
  className: "gutter"
}), __jsx("div", {
  className: "gutter"
}), __jsx("div", {
  className: "gutter"
}), __jsx("div", {
  className: "gutter"
}), __jsx("div", {
  className: "gutter"
}), __jsx("div", {
  className: "gutter"
}), __jsx("div", {
  className: "gutter"
})))), __jsx("section", {
  id: "propos"
}, __jsx("div", {
  className: "container"
}, __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_9___default.a, {
  left: true
}, __jsx("h2", null, "Plus qu'un m\xE9tier, une ", __jsx("span", null, "passion"), ".")), __jsx("p", null, "Je projette de continuer dans le domaine du nume\u0301rique et d\u2019approfondir mes connaissances techniques tout en restant connecte\u0301 avec l\u2019e\u0301volution et les tendances technologiques.", __jsx("br", null), __jsx("br", null), "Si vous souhaitez en savoir plus, n\u2019h\xE9sitez pas \xE0 me joindre sur Linkedin.", __jsx(react_count_to__WEBPACK_IMPORTED_MODULE_11___default.a, {
  to: 12345,
  speed: 12345
})), __jsx("div", {
  className: "flex under2"
}, __jsx("div", {
  className: "gutter2"
}), __jsx("div", {
  className: "gutter2"
}), __jsx("div", {
  className: "gutter2"
}), __jsx("div", {
  className: "gutter2"
}), __jsx("div", {
  className: "gutter2"
}), __jsx("div", {
  className: "gutter2"
}), __jsx("div", {
  className: "gutter2"
}), __jsx("div", {
  className: "gutter2"
})), __jsx("section", {
  className: "flex"
}, __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_9___default.a, {
  left: true,
  cascade: true
}, __jsx("article", {
  className: "col-2"
}, __jsx("img", {
  src: "/react.svg",
  alt: "react"
}))), __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_9___default.a, {
  left: true,
  cascade: true,
  delay: 250
}, __jsx("article", {
  className: "col-2"
}, __jsx("img", {
  src: "/symfony.svg",
  alt: "symfony"
}))), __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_9___default.a, {
  left: true,
  cascade: true,
  delay: 500
}, __jsx("article", {
  className: "col-2"
}, __jsx("img", {
  src: "/next-js.svg",
  alt: "next-js"
}))), __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_9___default.a, {
  left: true,
  cascade: true,
  delay: 750
}, __jsx("article", {
  className: "col-2"
}, __jsx("img", {
  src: "/firebase.svg",
  alt: "firebase"
}))), __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_9___default.a, {
  left: true,
  cascade: true,
  delay: 1000
}, __jsx("article", {
  className: "col-2"
}, __jsx("img", {
  src: "/wordpress.svg",
  alt: "wordpress"
}))), __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_9___default.a, {
  left: true,
  cascade: true,
  delay: 1250
}, __jsx("article", {
  className: "col-2"
}, __jsx("img", {
  src: "/prestashop.svg",
  alt: "prestashop"
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

/***/ "T5pp":
/***/ (function(module, exports) {



/***/ }),

/***/ "T91m":
/***/ (function(module, exports) {



/***/ }),

/***/ "TfqW":
/***/ (function(module, exports) {



/***/ }),

/***/ "XUav":
/***/ (function(module, exports) {

module.exports = require("react-reveal/Jump");

/***/ }),

/***/ "Ys+F":
/***/ (function(module, exports) {

module.exports = require("react-count-to");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "dE9K":
/***/ (function(module, exports) {



/***/ }),

/***/ "jYDM":
/***/ (function(module, exports) {



/***/ }),

/***/ "jdA4":
/***/ (function(module, exports) {

module.exports = require("react-app-polyfill/ie11");

/***/ }),

/***/ "og1N":
/***/ (function(module, exports) {

module.exports = require("core-js/stable");

/***/ }),

/***/ "xoQe":
/***/ (function(module, exports) {

module.exports = require("react-app-polyfill/stable");

/***/ })

/******/ });