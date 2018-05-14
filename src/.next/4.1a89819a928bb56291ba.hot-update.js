webpackHotUpdate(4,{

/***/ "../node_modules/victory/es/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_victory_core__ = __webpack_require__("../node_modules/victory-core/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_victory_chart__ = __webpack_require__("../node_modules/victory-chart/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_victory_pie__ = __webpack_require__("../node_modules/victory-pie/es/index.js");
/* unused harmony reexport Area */
/* unused harmony reexport Axis */
/* unused harmony reexport Bar */
/* unused harmony reexport Border */
/* unused harmony reexport Box */
/* unused harmony reexport Candle */
/* unused harmony reexport ClipPath */
/* unused harmony reexport Curve */
/* unused harmony reexport ErrorBar */
/* unused harmony reexport Grid */
/* unused harmony reexport Point */
/* unused harmony reexport Slice */
/* unused harmony reexport Voronoi */
/* unused harmony reexport Flyout */
/* unused harmony reexport Whisker */
/* unused harmony reexport Circle */
/* unused harmony reexport Rect */
/* unused harmony reexport Line */
/* unused harmony reexport Path */
/* unused harmony reexport TSpan */
/* unused harmony reexport Text */
/* unused harmony reexport VictoryAnimation */
/* unused harmony reexport VictoryArea */
/* unused harmony reexport VictoryAxis */
/* unused harmony reexport VictoryPolarAxis */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1_victory_chart__["a"]; });
/* unused harmony reexport VictoryBoxPlot */
/* unused harmony reexport VictoryCandlestick */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1_victory_chart__["b"]; });
/* unused harmony reexport VictoryErrorBar */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1_victory_chart__["c"]; });
/* unused harmony reexport VictoryLine */
/* unused harmony reexport VictoryLabel */
/* unused harmony reexport VictoryLegend */
/* unused harmony reexport VictoryPie */
/* unused harmony reexport VictoryScatter */
/* unused harmony reexport VictoryStack */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_0_victory_core__["E"]; });
/* unused harmony reexport VictoryTransition */
/* unused harmony reexport VictorySharedEvents */
/* unused harmony reexport VictoryTooltip */
/* unused harmony reexport VictoryVoronoi */
/* unused harmony reexport VictoryPortal */
/* unused harmony reexport Portal */
/* unused harmony reexport VictoryContainer */
/* unused harmony reexport VictoryClipContainer */
/* unused harmony reexport VictoryZoomContainer */
/* unused harmony reexport ZoomHelpers */
/* unused harmony reexport zoomContainerMixin */
/* unused harmony reexport VictorySelectionContainer */
/* unused harmony reexport SelectionHelpers */
/* unused harmony reexport selectionContainerMixin */
/* unused harmony reexport VictoryBrushContainer */
/* unused harmony reexport BrushHelpers */
/* unused harmony reexport brushContainerMixin */
/* unused harmony reexport VictoryCursorContainer */
/* unused harmony reexport CursorHelpers */
/* unused harmony reexport cursorContainerMixin */
/* unused harmony reexport VictoryVoronoiContainer */
/* unused harmony reexport VoronoiHelpers */
/* unused harmony reexport voronoiContainerMixin */
/* unused harmony reexport combineContainerMixins */
/* unused harmony reexport createContainer */
/* unused harmony reexport VictoryBrushLine */
/* unused harmony reexport addEvents */
/* unused harmony reexport Collection */
/* unused harmony reexport Data */
/* unused harmony reexport DefaultTransitions */
/* unused harmony reexport Domain */
/* unused harmony reexport Events */
/* unused harmony reexport Helpers */
/* unused harmony reexport Log */
/* unused harmony reexport PropTypes */
/* unused harmony reexport Scale */
/* unused harmony reexport Style */
/* unused harmony reexport TextSize */
/* unused harmony reexport Transitions */
/* unused harmony reexport Selection */
/* unused harmony reexport LabelHelpers */








/***/ }),

/***/ "./components/VictoryHorizontalBarChart.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("../node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_victory__ = __webpack_require__("../node_modules/victory/es/index.js");
var _jsxFileName = "/Users/lucywu/play-with-charts/src/components/VictoryHorizontalBarChart.js";

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




var VictoryHorizontalBarChart =
/*#__PURE__*/
function (_Component) {
  _inherits(VictoryHorizontalBarChart, _Component);

  function VictoryHorizontalBarChart() {
    _classCallCheck(this, VictoryHorizontalBarChart);

    return _possibleConstructorReturn(this, (VictoryHorizontalBarChart.__proto__ || Object.getPrototypeOf(VictoryHorizontalBarChart)).apply(this, arguments));
  }

  _createClass(VictoryHorizontalBarChart, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_victory__["b" /* VictoryChart */], {
        theme: __WEBPACK_IMPORTED_MODULE_1_victory__["d" /* VictoryTheme */].material,
        domain: {
          y: [0.5, 5.5]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_victory__["c" /* VictoryGroup */], {
        horizontal: true,
        offset: 10,
        style: {
          data: {
            width: 6
          }
        },
        colorScale: ["brown", "tomato", "gold"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_victory__["a" /* VictoryBar */], {
        data: [{
          x: 1,
          y: 1
        }, {
          x: 2,
          y: 2
        }, {
          x: 3,
          y: 3
        }, {
          x: 4,
          y: 2
        }, {
          x: 5,
          y: 1
        }],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_victory__["a" /* VictoryBar */], {
        data: [{
          x: 1,
          y: 2
        }, {
          x: 2,
          y: 3
        }, {
          x: 3,
          y: 4
        }, {
          x: 4,
          y: 5
        }, {
          x: 5,
          y: 5
        }],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_victory__["a" /* VictoryBar */], {
        data: [{
          x: 1,
          y: 1
        }, {
          x: 2,
          y: 2
        }, {
          x: 3,
          y: 3
        }, {
          x: 4,
          y: 4
        }, {
          x: 5,
          y: 4
        }],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
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

  return VictoryHorizontalBarChart;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

var _default = VictoryHorizontalBarChart;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("../node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("../node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(VictoryHorizontalBarChart, "VictoryHorizontalBarChart", "/Users/lucywu/play-with-charts/src/components/VictoryHorizontalBarChart.js");
  reactHotLoader.register(_default, "default", "/Users/lucywu/play-with-charts/src/components/VictoryHorizontalBarChart.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=4.1a89819a928bb56291ba.hot-update.js.map