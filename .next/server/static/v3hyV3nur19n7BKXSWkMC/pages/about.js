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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Juyh");


/***/ }),

/***/ "B1Xa":
/***/ (function(module, exports) {



/***/ }),

/***/ "Juyh":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-stack-grid"
var external_react_stack_grid_ = __webpack_require__("nog1");
var external_react_stack_grid_default = /*#__PURE__*/__webpack_require__.n(external_react_stack_grid_);

// EXTERNAL MODULE: ./sass/components/_reset.scss
var _reset = __webpack_require__("B1Xa");

// CONCATENATED MODULE: ./components/Portfolio.js
var __jsx = external_react_default.a.createElement;




class Portfolio_Portfolio extends external_react_["Component"] {
  render() {
    return __jsx("section", null, __jsx(external_react_stack_grid_default.a, {
      columnWidth: 350,
      gutterWidth: 20,
      gutterHeight: 20,
      itemComponent: "section"
    }, __jsx("article", {
      key: "key1"
    }, __jsx("img", {
      src: "http://yaniselmaleh.fr/img/baskerville.png",
      alt: "yunt"
    })), __jsx("article", {
      key: "key2"
    }, __jsx("img", {
      src: "http://yaniselmaleh.fr/img/webradio.png",
      alt: "WaveRadio"
    })), __jsx("article", {
      key: "key3"
    }, __jsx("img", {
      src: "http://yaniselmaleh.fr/img/baskerville.png",
      alt: "Baskerville"
    })), __jsx("article", {
      key: "key4"
    }, __jsx("img", {
      src: "http://yaniselmaleh.fr/img/baskerville.png",
      alt: "Warner France"
    })), __jsx("article", {
      key: "key5"
    }, __jsx("img", {
      src: "http://yaniselmaleh.fr/img/baskerville.png",
      alt: "Warner France"
    })), __jsx("article", {
      key: "key6"
    }, __jsx("img", {
      src: "http://yaniselmaleh.fr/img/marvel.png",
      alt: "Marvel"
    })), __jsx("article", {
      key: "key7"
    }, __jsx("img", {
      src: "http://yaniselmaleh.fr/img/geode.png",
      alt: "G\xE9ode"
    })), __jsx("article", {
      key: "key8"
    }, __jsx("img", {
      src: "http://yaniselmaleh.fr/img/baskerville.png",
      alt: "Jetetienaucourant"
    })), __jsx("article", {
      key: "key9"
    }, __jsx("img", {
      src: "http://yaniselmaleh.fr/img/baskerville.png",
      alt: "Accor Hotel"
    })), __jsx("article", {
      key: "key10"
    }, __jsx("img", {
      src: "http://yaniselmaleh.fr/img/baskerville.png",
      alt: "Bzity"
    })), __jsx("article", {
      key: "key11"
    }, __jsx("img", {
      src: "http://yaniselmaleh.fr/img/baskerville.png",
      alt: "Maison Jaune"
    })), __jsx("article", {
      key: "key12"
    }, __jsx("img", {
      src: "http://yaniselmaleh.fr/img/baskerville.png",
      alt: "Maison Jaune"
    })), __jsx("article", {
      key: "key13"
    }, __jsx("img", {
      src: "http://yaniselmaleh.fr/img/alternatiba.png",
      alt: "Alternatiba"
    })), __jsx("article", {
      key: "key14"
    }, __jsx("img", {
      src: "http://yaniselmaleh.fr/img/baskerville.png",
      alt: "Anglais"
    })), __jsx("article", {
      key: "key15"
    }, __jsx("img", {
      src: "http://yaniselmaleh.fr/img/cap-lab.png",
      alt: "Cap-Lab"
    })), __jsx("article", {
      key: "key16"
    }, __jsx("img", {
      src: "",
      alt: "Harrasment Analytic"
    })), __jsx("article", {
      key: "key17"
    }, __jsx("img", {
      src: "",
      alt: "Elveo"
    }))));
  }

}

/* harmony default export */ var components_Portfolio = (Portfolio_Portfolio);
// CONCATENATED MODULE: ./pages/about.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return About; });

var about_jsx = external_react_default.a.createElement;
// import Header from '../components/Header';

function About() {
  return about_jsx("div", null, about_jsx(components_Portfolio, null));
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

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "nog1":
/***/ (function(module, exports) {

module.exports = require("react-stack-grid");

/***/ })

/******/ });