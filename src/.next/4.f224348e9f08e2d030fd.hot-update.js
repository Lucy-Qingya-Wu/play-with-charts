webpackHotUpdate(4,{

/***/ "./pages/about.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("../node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Layout__ = __webpack_require__("./components/Layout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Chart__ = __webpack_require__("./components/Chart.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__("../node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_nvd3__ = __webpack_require__("../node_modules/react-nvd3/dist/react-nvd3.min.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_nvd3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_nvd3__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_BarAndPieChart__ = __webpack_require__("./components/BarAndPieChart.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_NivoResponsiveBar__ = __webpack_require__("./components/NivoResponsiveBar.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_RechartsSimpleLineChart__ = __webpack_require__("./components/RechartsSimpleLineChart.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_RechartsSimpleBarChart__ = __webpack_require__("./components/RechartsSimpleBarChart.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_RechartsCustomActiveShapePieChart__ = __webpack_require__("./components/RechartsCustomActiveShapePieChart.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_ReactChartJS2Doughnut__ = __webpack_require__("./components/ReactChartJS2Doughnut.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_ReactChartJS2HorizontalBar__ = __webpack_require__("./components/ReactChartJS2HorizontalBar.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_VictoryHorizontalBarChart__ = __webpack_require__("./components/VictoryHorizontalBarChart.js");
var _jsxFileName = "/Users/lucywu/play-with-charts/src/pages/about.js";


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
      return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_Layout__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        }
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        className: "jsx-2408023047"
      }, "Welcome to about page"), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_BarAndPieChart__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      }), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        className: "jsx-2408023047"
      }), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        className: "jsx-2408023047"
      }, "------------------- Recharts -------------------"), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__components_RechartsSimpleBarChart__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        }
      }), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__components_RechartsCustomActiveShapePieChart__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        }
      }), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        className: "jsx-2408023047"
      }), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        className: "jsx-2408023047"
      }, "------------------- React ChartJS 2 -------------------"), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__components_ReactChartJS2Doughnut__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        }
      }), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__components_ReactChartJS2HorizontalBar__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        }
      }), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        className: "jsx-2408023047"
      }), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        className: "jsx-2408023047"
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        className: "jsx-2408023047"
      }, "------------------- Victory -------------------"), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__components_VictoryHorizontalBarChart__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        }
      }), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        className: "jsx-2408023047"
      })), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "2408023047",
        css: "div.jsx-2408023047{width:10%, height:10%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wYWdlcy9hYm91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0RzRCLEFBS29CLHNCQUFDIiwiZmlsZSI6InNyYy9wYWdlcy9hYm91dC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbHVjeXd1L3BsYXktd2l0aC1jaGFydHMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0JztcbmltcG9ydCBDaGFydCBmcm9tICcuLi9jb21wb25lbnRzL0NoYXJ0JztcbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IE5WRDNDaGFydCBmcm9tICdyZWFjdC1udmQzJztcbmltcG9ydCBCYXJBbmRQaWVDaGFydCBmcm9tICcuLi9jb21wb25lbnRzL0JhckFuZFBpZUNoYXJ0JztcbmltcG9ydCBOaXZvUmVzcG9uc2l2ZUJhciBmcm9tICcuLi9jb21wb25lbnRzL05pdm9SZXNwb25zaXZlQmFyJztcbmltcG9ydCBSZWNoYXJ0c1NpbXBsZUxpbmVDaGFydCBmcm9tICcuLi9jb21wb25lbnRzL1JlY2hhcnRzU2ltcGxlTGluZUNoYXJ0JztcbmltcG9ydCBSZWNoYXJ0c1NpbXBsZUJhckNoYXJ0IGZyb20gJy4uL2NvbXBvbmVudHMvUmVjaGFydHNTaW1wbGVCYXJDaGFydCc7XG5pbXBvcnQgUmVjaGFydHNDdXN0b21BY3RpdmVTaGFwZVBpZUNoYXJ0IGZyb20gJy4uL2NvbXBvbmVudHMvUmVjaGFydHNDdXN0b21BY3RpdmVTaGFwZVBpZUNoYXJ0JztcbmltcG9ydCBSZWFjdENoYXJ0SlMyRG91Z2hudXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvUmVhY3RDaGFydEpTMkRvdWdobnV0XCI7XG5pbXBvcnQgUmVhY3RDaGFydEpTMkhvcml6b250YWxCYXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvUmVhY3RDaGFydEpTMkhvcml6b250YWxCYXJcIjtcbmltcG9ydCBWaWN0b3J5SG9yaXpvbnRhbEJhckNoYXJ0IGZyb20gJy4uL2NvbXBvbmVudHMvVmljdG9yeUhvcml6b250YWxCYXJDaGFydCdcbmNvbnN0IEFQSV9VUkwgPSBcImh0dHBzOi8vbmF0YWxpaWEtcmFkaW5hLmdpdGh1Yi5pby9yZWFjdC12aXMtZXhhbXBsZS9cIjtcblxuY2xhc3MgQWJvdXQgZXh0ZW5kcyBDb21wb25lbnR7XG5cblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICByZXN1bHRzOltdLFxuICAgICAgICAgICAgZGF0dW0gOiBbe1xuICAgICAgICAgICAgICAgIGtleTogXCJDdW11bGF0aXZlIFJldHVyblwiLFxuICAgICAgICAgICAgICAgIHZhbHVlczogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBcImxhYmVsXCIgOiBcIkFcIiAsXG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIiA6IC0yOS43NjU5NTc3NzExMDdcbiAgICAgICAgICAgICAgICAgIH0gLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBcImxhYmVsXCIgOiBcIkJcIiAsXG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIiA6IDBcbiAgICAgICAgICAgICAgICAgIH0gLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBcImxhYmVsXCIgOiBcIkNcIiAsXG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIiA6IDMyLjgwNzgwNDY4MjYxMlxuICAgICAgICAgICAgICAgICAgfSAsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwibGFiZWxcIiA6IFwiRFwiICxcbiAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiIDogMTk2LjQ1OTQ2NzM5MjU2XG4gICAgICAgICAgICAgICAgICB9ICxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgXCJsYWJlbFwiIDogXCJFXCIgLFxuICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCIgOiAwLjE5NDM0MDMwOTA2ODkzXG4gICAgICAgICAgICAgICAgICB9ICxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgXCJsYWJlbFwiIDogXCJGXCIgLFxuICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCIgOiAtOTguMDc5NzgyNjAxNDQyXG4gICAgICAgICAgICAgICAgICB9ICxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgXCJsYWJlbFwiIDogXCJHXCIgLFxuICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCIgOiAtMTMuOTI1NzQzMTMwOTAzXG4gICAgICAgICAgICAgICAgICB9ICxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgXCJsYWJlbFwiIDogXCJIXCIgLFxuICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCIgOiAtNS4xMzg3MzIyODc1NzA1XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdIFxuICAgICAgICB9XG5cbiAgICB9XG4gICAgY29tcG9uZW50RGlkTW91bnQoKXtcbiAgICAgICAgZmV0Y2goQVBJX1VSTClcbiAgICAgICAgLnRoZW4ocmVzPT57XG4gICAgICAgICAgICBpZiAocmVzLm9rKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInNvbWV0aGluZyB3ZW50IHdyb25nXCIpO1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignc29tZXRoaW5nIHdlbnQgd3JvbmcnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4ocmVzPT57XG4gICAgICAgICAgICAvLyBvbmUgZXhhbXBsZToge1wibmFtZVwiOlwiSmF2YVNjcmlwdFwiLFwieWVhclwiOlwiMjAxMlwiLFwicXVhcnRlclwiOlwiMlwiLFwiY291bnRcIjpcIjE2NDExXCJ9LFxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJoZXJlIGlzIHJlc3VsdHMgYWFcIiwgcmVzKTtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIHJlc3VsdHM6cmVzLnJlc3VsdHMuZmlsdGVyKHI9PnIubmFtZT09PSdKYXZhU2NyaXB0JylcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgfVxuICAgIHJlbmRlcigpe1xuICAgICAgICBjb25zdCB7cmVzdWx0cywgZGF0dW19ID0gdGhpcy5zdGF0ZTtcbiAgICAgICAgY29uc29sZS5sb2coXCJoZXJlIGlzIHJlc3VsdHMgYmJcIiwgcmVzdWx0cyk7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPExheW91dD5cbiAgICAgICAgICAgICAgICA8cD5XZWxjb21lIHRvIGFib3V0IHBhZ2U8L3A+XG4gICBcbiAgICAgICAgICAgICAgICA8QmFyQW5kUGllQ2hhcnQgLz5cbiAgICAgICAgICAgICAgICA8YnIvPlxuXG4gICAgICAgICAgICAgICAgPGgxPi0tLS0tLS0tLS0tLS0tLS0tLS0gUmVjaGFydHMgLS0tLS0tLS0tLS0tLS0tLS0tLTwvaDE+XG4gICAgICAgICAgICAgICAgPFJlY2hhcnRzU2ltcGxlQmFyQ2hhcnQgLz5cbiAgICAgICAgICAgICAgICA8UmVjaGFydHNDdXN0b21BY3RpdmVTaGFwZVBpZUNoYXJ0IC8+XG4gICAgICAgICAgICAgICAgPGJyIC8+XG5cbiAgICAgICAgICAgICAgICA8aDE+LS0tLS0tLS0tLS0tLS0tLS0tLSBSZWFjdCBDaGFydEpTIDIgLS0tLS0tLS0tLS0tLS0tLS0tLTwvaDE+XG4gICAgICAgICAgICAgICAgPFJlYWN0Q2hhcnRKUzJEb3VnaG51dCAvPlxuICAgICAgICAgICAgICAgIDxSZWFjdENoYXJ0SlMySG9yaXpvbnRhbEJhciAvPlxuICAgICAgICAgICAgICAgIDxici8+XG5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8aDE+LS0tLS0tLS0tLS0tLS0tLS0tLSBWaWN0b3J5IC0tLS0tLS0tLS0tLS0tLS0tLS08L2gxPlxuICAgICAgICAgICAgICAgICAgICA8VmljdG9yeUhvcml6b250YWxCYXJDaGFydCAvPlxuICAgICAgICAgICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgICAgICBkaXYgeyBcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOjEwJSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDoxMCVcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICAgIDwvTGF5b3V0PlxuXG4gICAgICAgIClcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFib3V0Il19 */\n/*@ sourceURL=src/pages/about.js */"
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
}(__WEBPACK_IMPORTED_MODULE_3_react__["Component"]);

var _default = About;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("../node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("../node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(API_URL, "API_URL", "/Users/lucywu/play-with-charts/src/pages/about.js");
  reactHotLoader.register(About, "About", "/Users/lucywu/play-with-charts/src/pages/about.js");
  reactHotLoader.register(_default, "default", "/Users/lucywu/play-with-charts/src/pages/about.js");
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
//# sourceMappingURL=4.f224348e9f08e2d030fd.hot-update.js.map