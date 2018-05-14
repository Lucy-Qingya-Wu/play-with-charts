webpackHotUpdate(4,{

/***/ "../node_modules/highcharts/highcharts.js":
false,

/***/ "../node_modules/react-jsx-highcharts/dist/react-jsx-highcharts.min.js":
false,

/***/ "./components/BarAndPieChart.js":
/***/ (function(module, __webpack_exports__) {

"use strict";
throw new Error("Module build failed: SyntaxError: /home/sam/play-with-charts/src/components/BarAndPieChart.js: Invalid number (37:115)\n\n  35 |                 <ColumnSeries id=\"joe\" name=\"Joe\" data={[4, 3, 3, 9, 0]} />\n  36 |                 <SplineSeries id=\"average\" name=\"Average\" data={[3, 2.67, 3, 6.33, 3.33]} />\n> 37 |                 <PieSeries id=\"total-consumption\" name=\"Total consumption\" data={pieData} center={[100, 70]} size={00} showInLegend={false} />\n     |                                                                                                                    ^\n  38 |               </YAxis>\n  39 |             </HighchartsChart>\n  40 |     \n    at _class.raise (/home/sam/play-with-charts/node_modules/babylon/lib/index.js:778:15)\n    at _class.readNumber (/home/sam/play-with-charts/node_modules/babylon/lib/index.js:1645:12)\n    at _class.getTokenFromCode (/home/sam/play-with-charts/node_modules/babylon/lib/index.js:1395:14)\n    at _class.readToken (/home/sam/play-with-charts/node_modules/babylon/lib/index.js:984:12)\n    at _class.readToken (/home/sam/play-with-charts/node_modules/babylon/lib/index.js:8118:46)\n    at _class.readToken (/home/sam/play-with-charts/node_modules/babylon/lib/index.js:8118:46)\n    at _class.readToken (/home/sam/play-with-charts/node_modules/babylon/lib/index.js:8118:46)\n    at _class.nextToken (/home/sam/play-with-charts/node_modules/babylon/lib/index.js:976:12)\n    at _class.next (/home/sam/play-with-charts/node_modules/babylon/lib/index.js:912:10)\n    at _class.jsxParseExpressionContainer (/home/sam/play-with-charts/node_modules/babylon/lib/index.js:7945:12)\n    at _class.jsxParseAttributeValue (/home/sam/play-with-charts/node_modules/babylon/lib/index.js:7912:23)\n    at _class.jsxParseAttribute (/home/sam/play-with-charts/node_modules/babylon/lib/index.js:7968:46)\n    at _class.jsxParseOpeningElementAt (/home/sam/play-with-charts/node_modules/babylon/lib/index.js:7984:35)\n    at _class.jsxParseElementAt (/home/sam/play-with-charts/node_modules/babylon/lib/index.js:8008:33)\n    at _class.jsxParseElementAt (/home/sam/play-with-charts/node_modules/babylon/lib/index.js:8024:34)\n    at _class.jsxParseElementAt (/home/sam/play-with-charts/node_modules/babylon/lib/index.js:8024:34)");

/***/ }),

/***/ "./pages/about.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Layout__ = __webpack_require__("./components/Layout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Chart__ = __webpack_require__("./components/Chart.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__("../node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_nvd3__ = __webpack_require__("../node_modules/react-nvd3/dist/react-nvd3.min.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_nvd3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_nvd3__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_BarAndPieChart__ = __webpack_require__("./components/BarAndPieChart.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_BarAndPieChart___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__components_BarAndPieChart__);
var _jsxFileName = "/home/sam/play-with-charts/src/pages/about.js";

(function () {
  var enterModule = __webpack_require__("../node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var API_URL = "https://nataliia-radina.github.io/react-vis-example/";

var About =
/*#__PURE__*/
function (_Component) {
  _inherits(About, _Component);

  function About(props) {
    var _this;

    _classCallCheck(this, About);

    _this = _possibleConstructorReturn(this, (About.__proto__ || Object.getPrototypeOf(About)).call(this, props));
    _this.state = {
      results: [],
      datum: [{
        key: "Cumulative Return",
        values: [{
          "label": "A",
          "value": -29.765957771107
        }, {
          "label": "B",
          "value": 0
        }, {
          "label": "C",
          "value": 32.807804682612
        }, {
          "label": "D",
          "value": 196.45946739256
        }, {
          "label": "E",
          "value": 0.19434030906893
        }, {
          "label": "F",
          "value": -98.079782601442
        }, {
          "label": "G",
          "value": -13.925743130903
        }, {
          "label": "H",
          "value": -5.1387322875705
        }]
      }]
    };
    return _this;
  }

  _createClass(About, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      fetch(API_URL).then(function (res) {
        if (res.ok) {
          return res.json();
        } else {
          console.log("something went wrong");
          throw new Error('something went wrong');
        }
      }).then(function (res) {
        // one example: {"name":"JavaScript","year":"2012","quarter":"2","count":"16411"},
        console.log("here is results aa", res);

        _this2.setState({
          results: res.results.filter(function (r) {
            return r.name === 'JavaScript';
          })
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _state = this.state,
          results = _state.results,
          datum = _state.datum;
      console.log("here is results bb", results);
      return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0__components_Layout__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      }, "Welcome to about page"), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_Chart__["a" /* default */], {
        data: results,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_BarAndPieChart__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        }
      }));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return About;
}(__WEBPACK_IMPORTED_MODULE_2_react__["Component"]);

var _default = About;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("../node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("../node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(API_URL, "API_URL", "/home/sam/play-with-charts/src/pages/about.js");
  reactHotLoader.register(About, "About", "/home/sam/play-with-charts/src/pages/about.js");
  reactHotLoader.register(_default, "default", "/home/sam/play-with-charts/src/pages/about.js");
  leaveModule(module);
})();

;
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/about")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=4.7fd7cc01875f4c81b7b8.hot-update.js.map