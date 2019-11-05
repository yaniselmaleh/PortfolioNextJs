webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/MenuBurger.js":
/*!**********************************!*\
  !*** ./components/MenuBurger.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _sass_components_reset_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../sass/components/_reset.scss */ "./sass/components/_reset.scss");
/* harmony import */ var _sass_components_reset_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_sass_components_reset_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _sass_components_menu_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../sass/components/_menu.scss */ "./sass/components/_menu.scss");
/* harmony import */ var _sass_components_menu_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_sass_components_menu_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-scroll */ "./node_modules/react-scroll/modules/index.js");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_burger_menu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-burger-menu */ "./node_modules/react-burger-menu/lib/BurgerMenu.js");
/* harmony import */ var react_burger_menu__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_burger_menu__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);







var _jsxFileName = "/Users/yaniselmaleh/Desktop/Portfolio/Developpement/PortfolioNextJs/components/MenuBurger.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement;






var MenuBurger =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(MenuBurger, _Component);

  function MenuBurger() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, MenuBurger);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(MenuBurger)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "scrollToTop", function () {
      react_scroll__WEBPACK_IMPORTED_MODULE_9__["animateScroll"].scrollToTop();
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(MenuBurger, [{
    key: "howSettings",
    value: function howSettings(event) {
      event.preventDefault();
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx(react_burger_menu__WEBPACK_IMPORTED_MODULE_10__["elastic"], {
        right: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, __jsx(react_scroll__WEBPACK_IMPORTED_MODULE_9__["Link"], {
        className: "menu-item",
        activeClass: "active",
        to: "home",
        spy: true,
        smooth: true,
        offset: -70,
        duration: 1500,
        title: "toto",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, "Accueil"), __jsx(react_scroll__WEBPACK_IMPORTED_MODULE_9__["Link"], {
        className: "menu-item",
        activeClass: "active",
        to: "competences",
        spy: true,
        smooth: true,
        offset: -70,
        duration: 1500,
        title: "toto",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, "Comp\xE9tences"), __jsx(react_scroll__WEBPACK_IMPORTED_MODULE_9__["Link"], {
        className: "menu-item",
        activeClass: "active",
        to: "competences",
        spy: true,
        smooth: true,
        offset: -70,
        duration: 1500,
        title: "toto",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, "Freelance"), __jsx(react_scroll__WEBPACK_IMPORTED_MODULE_9__["Link"], {
        className: "menu-item",
        activeClass: "active",
        to: "portfolio",
        spy: true,
        smooth: true,
        offset: -70,
        duration: 1500,
        title: "toto",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, "Projet"), __jsx(react_scroll__WEBPACK_IMPORTED_MODULE_9__["Link"], {
        className: "menu-item",
        activeClass: "active",
        to: "contact",
        spy: true,
        smooth: true,
        offset: -70,
        duration: 1500,
        title: "toto",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, "Linkedin"), __jsx(react_scroll__WEBPACK_IMPORTED_MODULE_9__["Link"], {
        className: "menu-item",
        activeClass: "active",
        to: "contact",
        spy: true,
        smooth: true,
        offset: -70,
        duration: 1500,
        title: "toto",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, "Github"));
    }
  }]);

  return MenuBurger;
}(react__WEBPACK_IMPORTED_MODULE_11__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (MenuBurger);

/***/ })

})
//# sourceMappingURL=index.js.955f34a288c4bfeb5489.hot-update.js.map