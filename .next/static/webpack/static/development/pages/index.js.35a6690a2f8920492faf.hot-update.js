webpackHotUpdate("static/development/pages/index.js",{

/***/ "./node_modules/react-count-to/dist/react-count-to.js":
/*!************************************************************!*\
  !*** ./node_modules/react-count-to/dist/react-count-to.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {
  from: _propTypes2.default.number,
  to: _propTypes2.default.number.isRequired,
  speed: _propTypes2.default.number.isRequired,
  delay: _propTypes2.default.number,
  onComplete: _propTypes2.default.func,
  digits: _propTypes2.default.number,
  className: _propTypes2.default.string,
  tagName: _propTypes2.default.string,
  children: _propTypes2.default.func,
  easing: _propTypes2.default.func
};

var defaultProps = {
  from: 0,
  delay: 100,
  digits: 0,
  tagName: 'span',
  easing: function easing(t) {
    return t;
  }
};

var CountTo = function (_PureComponent) {
  _inherits(CountTo, _PureComponent);

  function CountTo(props) {
    _classCallCheck(this, CountTo);

    var _this = _possibleConstructorReturn(this, (CountTo.__proto__ || Object.getPrototypeOf(CountTo)).call(this, props));

    var from = props.from;


    _this.state = {
      counter: from
    };

    _this.start = _this.start.bind(_this);
    _this.clear = _this.clear.bind(_this);
    _this.next = _this.next.bind(_this);
    _this.updateCounter = _this.updateCounter.bind(_this);
    return _this;
  }

  _createClass(CountTo, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.start();
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var _props = this.props,
          from = _props.from,
          to = _props.to;


      if (nextProps.to !== to || nextProps.from !== from) {
        this.start(nextProps);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.clear();
    }
  }, {
    key: 'start',
    value: function start() {
      var _this2 = this;

      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;

      this.clear();
      var from = props.from;

      this.setState({
        counter: from
      }, function () {
        var _props2 = _this2.props,
            speed = _props2.speed,
            delay = _props2.delay;

        var now = Date.now();
        _this2.endDate = now + speed;
        _this2.scheduleNextUpdate(now, delay);
        _this2.raf = requestAnimationFrame(_this2.next);
      });
    }
  }, {
    key: 'next',
    value: function next() {
      var now = Date.now();
      var _props3 = this.props,
          speed = _props3.speed,
          onComplete = _props3.onComplete,
          delay = _props3.delay;


      if (now >= this.nextUpdate) {
        var progress = Math.max(0, Math.min(1, 1 - (this.endDate - now) / speed));
        this.updateCounter(progress);
        this.scheduleNextUpdate(now, delay);
      }

      if (now < this.endDate) {
        this.raf = requestAnimationFrame(this.next);
      } else if (onComplete) {
        onComplete();
      }
    }
  }, {
    key: 'scheduleNextUpdate',
    value: function scheduleNextUpdate(now, delay) {
      this.nextUpdate = Math.min(now + delay, this.endDate);
    }
  }, {
    key: 'updateCounter',
    value: function updateCounter(progress) {
      var _props4 = this.props,
          from = _props4.from,
          to = _props4.to,
          easing = _props4.easing;

      var delta = to - from;
      var counter = from + delta * easing(progress);
      this.setState({
        counter: counter
      });
    }
  }, {
    key: 'clear',
    value: function clear() {
      cancelAnimationFrame(this.raf);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props5 = this.props,
          className = _props5.className,
          digits = _props5.digits,
          Tag = _props5.tagName,
          fn = _props5.children;
      var counter = this.state.counter;

      var value = counter.toFixed(digits);

      if (fn) {
        return fn(value);
      }

      return _react2.default.createElement(
        Tag,
        { className: className },
        value
      );
    }
  }]);

  return CountTo;
}(_react.PureComponent);

CountTo.propTypes = propTypes;
CountTo.defaultProps = defaultProps;

exports.default = CountTo;

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
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
/* harmony import */ var react_reveal_Pulse__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-reveal/Pulse */ "./node_modules/react-reveal/Pulse.js");
/* harmony import */ var react_reveal_Pulse__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Pulse__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-reveal/Fade */ "./node_modules/react-reveal/Fade.js");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_reveal_Jump__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-reveal/Jump */ "./node_modules/react-reveal/Jump.js");
/* harmony import */ var react_reveal_Jump__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Jump__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_count_to__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-count-to */ "./node_modules/react-count-to/dist/react-count-to.js");
/* harmony import */ var react_count_to__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_count_to__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_app_polyfill_ie9__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-app-polyfill/ie9 */ "./node_modules/react-app-polyfill/ie9.js");
/* harmony import */ var react_app_polyfill_ie9__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_app_polyfill_ie9__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_app_polyfill_ie11__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-app-polyfill/ie11 */ "./node_modules/react-app-polyfill/ie11.js");
/* harmony import */ var react_app_polyfill_ie11__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_app_polyfill_ie11__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react_app_polyfill_stable__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-app-polyfill/stable */ "./node_modules/react-app-polyfill/stable.js");
/* harmony import */ var react_app_polyfill_stable__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_app_polyfill_stable__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_stable__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/stable */ "./node_modules/core-js/stable/index.js");
/* harmony import */ var core_js_stable__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_stable__WEBPACK_IMPORTED_MODULE_15__);
var _jsxFileName = "/Users/yaniselmaleh/Desktop/Portfolio/Developpement/PortfolioNextJs/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
















var Index = function Index() {
  return __jsx("section", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, __jsx("section", {
    id: "home",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, __jsx("div", {
    className: "flex-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, __jsx(react_reveal_Pulse__WEBPACK_IMPORTED_MODULE_8___default.a, {
    duration: 2000,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, "Yanis Elmaleh D\xE9veloppeur ", __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, "Freelance"), ".")), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, "Disponible"), __jsx(react_reveal_Jump__WEBPACK_IMPORTED_MODULE_10___default.a, {
    duration: 1000,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, __jsx("div", {
    "class": "mouse",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  })), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, __jsx("a", {
    href: "https://linkedin.com/in/yaniselmaleh",
    title: "linkedin yanis elmaleh",
    target: "_blank",
    className: "flex-rs1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, __jsx("img", {
    src: "/linkedin.svg",
    alt: "linkedin yanis elmaleh",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  })), __jsx("a", {
    href: "https://github.com/yaniselmaleh",
    title: "github yanis elmaleh",
    target: "_blank",
    className: "flex-rs2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, __jsx("img", {
    src: "/github.svg",
    alt: "github yanis elmaleh",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }))), __jsx("div", {
    className: "flex under",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, __jsx("div", {
    className: "gutter",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }), __jsx("div", {
    className: "gutter",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }), __jsx("div", {
    className: "gutter",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }), __jsx("div", {
    className: "gutter",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }), __jsx("div", {
    className: "gutter",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }), __jsx("div", {
    className: "gutter",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }), __jsx("div", {
    className: "gutter",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }), __jsx("div", {
    className: "gutter",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  })))), __jsx("section", {
    id: "propos",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, __jsx("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_9___default.a, {
    left: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, "Plus qu'un m\xE9tier, une ", __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, "passion"), ".")), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, "Je projette de continuer dans le domaine du nume\u0301rique et d\u2019approfondir mes connaissances techniques tout en restant connecte\u0301 avec l\u2019e\u0301volution et les tendances technologiques.", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }), "Si vous souhaitez en savoir plus, n\u2019h\xE9sitez pas \xE0 me joindre sur Linkedin."), __jsx(react_count_to__WEBPACK_IMPORTED_MODULE_11___default.a, {
    to: 1234,
    speed: 1234,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }), __jsx("div", {
    className: "flex under2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, __jsx("div", {
    className: "gutter2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }), __jsx("div", {
    className: "gutter2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }), __jsx("div", {
    className: "gutter2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }), __jsx("div", {
    className: "gutter2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }), __jsx("div", {
    className: "gutter2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }), __jsx("div", {
    className: "gutter2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }), __jsx("div", {
    className: "gutter2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }), __jsx("div", {
    className: "gutter2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  })), __jsx("section", {
    className: "flex",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_9___default.a, {
    left: true,
    cascade: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, __jsx("article", {
    className: "col-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, __jsx("img", {
    src: "/react.svg",
    alt: "react",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }))), __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_9___default.a, {
    left: true,
    cascade: true,
    delay: 250,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, __jsx("article", {
    className: "col-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, __jsx("img", {
    src: "/symfony.svg",
    alt: "symfony",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }))), __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_9___default.a, {
    left: true,
    cascade: true,
    delay: 500,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, __jsx("article", {
    className: "col-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, __jsx("img", {
    src: "/next-js.svg",
    alt: "next-js",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }))), __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_9___default.a, {
    left: true,
    cascade: true,
    delay: 750,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, __jsx("article", {
    className: "col-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, __jsx("img", {
    src: "/firebase.svg",
    alt: "firebase",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }))), __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_9___default.a, {
    left: true,
    cascade: true,
    delay: 1000,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }, __jsx("article", {
    className: "col-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }, __jsx("img", {
    src: "/wordpress.svg",
    alt: "wordpress",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }))), __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_9___default.a, {
    left: true,
    cascade: true,
    delay: 1250,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }, __jsx("article", {
    className: "col-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }, __jsx("img", {
    src: "/prestashop.svg",
    alt: "prestashop",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  })))))));
};

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

/***/ })

})
//# sourceMappingURL=index.js.35a6690a2f8920492faf.hot-update.js.map