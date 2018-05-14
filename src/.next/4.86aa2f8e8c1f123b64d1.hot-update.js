webpackHotUpdate(4,{

/***/ "./components/BarAndPieChart.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("../node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_highcharts__ = __webpack_require__("../node_modules/highcharts/highcharts.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_highcharts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_highcharts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_jsx_highcharts__ = __webpack_require__("../node_modules/react-jsx-highcharts/dist/react-jsx-highcharts.min.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_jsx_highcharts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_jsx_highcharts__);
var _jsxFileName = "/home/sam/play-with-charts/src/components/BarAndPieChart.js";

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





var BarAndPieChart =
/*#__PURE__*/
function (_Component) {
  _inherits(BarAndPieChart, _Component);

  function BarAndPieChart() {
    _classCallCheck(this, BarAndPieChart);

    return _possibleConstructorReturn(this, (BarAndPieChart.__proto__ || Object.getPrototypeOf(BarAndPieChart)).apply(this, arguments));
  }

  _createClass(BarAndPieChart, [{
    key: "render",
    value: function render() {
      var pieData = [{
        name: 'Jane',
        y: 13
      }, {
        name: 'John',
        y: 23
      }, {
        name: 'Joe',
        y: 19
      }];
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "app",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_jsx_highcharts__["HighchartsChart"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_jsx_highcharts__["Title"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }, "Combination chart"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_jsx_highcharts__["Legend"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_jsx_highcharts__["XAxis"], {
        id: "x",
        categories: ['Apples', 'Oranges', 'Pears', 'Bananas', 'Plums'],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_jsx_highcharts__["YAxis"], {
        id: "number",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_jsx_highcharts__["ColumnSeries"], {
        id: "jane",
        name: "Jane",
        data: [3, 2, 1, 3, 4],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_jsx_highcharts__["ColumnSeries"], {
        id: "john",
        name: "John",
        data: [2, 3, 5, 7, 6],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_jsx_highcharts__["ColumnSeries"], {
        id: "joe",
        name: "Joe",
        data: [4, 3, 3, 9, 0],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_jsx_highcharts__["SplineSeries"], {
        id: "average",
        name: "Average",
        data: [3, 2.67, 3, 6.33, 3.33],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_jsx_highcharts__["PieSeries"], {
        id: "total-consumption",
        name: "Total consumption",
        data: pieData,
        center: [100, 70],
        size: 100,
        showInLegend: false,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }))));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return BarAndPieChart;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

var _default = Object(__WEBPACK_IMPORTED_MODULE_2_react_jsx_highcharts__["withHighcharts"])(BarAndPieChart, __WEBPACK_IMPORTED_MODULE_1_highcharts___default.a);

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("../node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("../node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(BarAndPieChart, "BarAndPieChart", "/home/sam/play-with-charts/src/components/BarAndPieChart.js");
  reactHotLoader.register(_default, "default", "/home/sam/play-with-charts/src/components/BarAndPieChart.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=4.86aa2f8e8c1f123b64d1.hot-update.js.map