webpackHotUpdate(4,{

/***/ "../node_modules/victory-pie/es/components/victory-pie.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("../node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("../node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_victory_core__ = __webpack_require__("../node_modules/victory-core/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__helper_methods__ = __webpack_require__("../node_modules/victory-pie/es/components/helper-methods.js");
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*eslint no-magic-numbers: ["error", { "ignore": [-1, 0, 1, 2] }]*/





var fallbackProps = {
  endAngle: 360,
  height: 400,
  innerRadius: 0,
  cornerRadius: 0,
  padAngle: 0,
  padding: 30,
  width: 400,
  startAngle: 0,
  colorScale: ["#ffffff", "#f0f0f0", "#d9d9d9", "#bdbdbd", "#969696", "#737373", "#525252", "#252525", "#000000"]
};

var animationWhitelist = ["data", "endAngle", "height", "innerRadius", "cornerRadius", "padAngle", "padding", "colorScale", "startAngle", "style", "width"];

var VictoryPie = function (_React$Component) {
  _inherits(VictoryPie, _React$Component);

  function VictoryPie() {
    _classCallCheck(this, VictoryPie);

    return _possibleConstructorReturn(this, (VictoryPie.__proto__ || Object.getPrototypeOf(VictoryPie)).apply(this, arguments));
  }

  _createClass(VictoryPie, [{
    key: "shouldAnimate",


    // Overridden in victory-native
    value: function shouldAnimate() {
      return Boolean(this.props.animate);
    }
  }, {
    key: "render",
    value: function render() {
      var role = this.constructor.role;

      var props = __WEBPACK_IMPORTED_MODULE_2_victory_core__["o" /* Helpers */].modifyProps(this.props, fallbackProps, role);
      if (this.shouldAnimate()) {
        return this.animateComponent(props, animationWhitelist);
      }

      var children = this.renderData(props);
      return props.standalone ? this.renderContainer(props.containerComponent, children) : children;
    }
  }]);

  return VictoryPie;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

VictoryPie.displayName = "VictoryPie";
VictoryPie.role = "pie";
VictoryPie.defaultTransitions = {
  onExit: {
    duration: 500,
    before: function () {
      return { _y: 0, label: " " };
    }
  },
  onEnter: {
    duration: 500,
    before: function () {
      return { _y: 0, label: " " };
    },
    after: function (datum) {
      return { y_: datum._y, label: datum.label };
    }
  }
};
VictoryPie.propTypes = {
  animate: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object]),
  colorScale: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string), __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOf(["grayscale", "qualitative", "heatmap", "warm", "cool", "red", "green", "blue"])]),
  containerComponent: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.element,
  cornerRadius: __WEBPACK_IMPORTED_MODULE_2_victory_core__["t" /* PropTypes */].nonNegative,
  data: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.array,
  dataComponent: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.element,
  endAngle: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number,
  eventKey: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func, __WEBPACK_IMPORTED_MODULE_2_victory_core__["t" /* PropTypes */].allOfType([__WEBPACK_IMPORTED_MODULE_2_victory_core__["t" /* PropTypes */].integer, __WEBPACK_IMPORTED_MODULE_2_victory_core__["t" /* PropTypes */].nonNegative]), __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]),
  events: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({
    target: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOf(["data", "labels", "parent"]),
    eventKey: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func, __WEBPACK_IMPORTED_MODULE_2_victory_core__["t" /* PropTypes */].allOfType([__WEBPACK_IMPORTED_MODULE_2_victory_core__["t" /* PropTypes */].integer, __WEBPACK_IMPORTED_MODULE_2_victory_core__["t" /* PropTypes */].nonNegative]), __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]),
    eventHandlers: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object
  })),
  externalEventMutations: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({
    callback: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.function,
    childName: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.array]),
    eventKey: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.array, __WEBPACK_IMPORTED_MODULE_2_victory_core__["t" /* PropTypes */].allOfType([__WEBPACK_IMPORTED_MODULE_2_victory_core__["t" /* PropTypes */].integer, __WEBPACK_IMPORTED_MODULE_2_victory_core__["t" /* PropTypes */].nonNegative]), __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]),
    mutation: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.function,
    target: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.array])
  })),
  groupComponent: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.element,
  height: __WEBPACK_IMPORTED_MODULE_2_victory_core__["t" /* PropTypes */].nonNegative,
  innerRadius: __WEBPACK_IMPORTED_MODULE_2_victory_core__["t" /* PropTypes */].nonNegative,
  labelComponent: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.element,
  labelRadius: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_2_victory_core__["t" /* PropTypes */].nonNegative, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func]),
  labels: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.array]),
  name: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  padAngle: __WEBPACK_IMPORTED_MODULE_2_victory_core__["t" /* PropTypes */].nonNegative,
  padding: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({
    top: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number, bottom: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number,
    left: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number, right: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number
  })]),
  sharedEvents: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({
    events: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.array,
    getEventState: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func
  }),
  sortKey: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func, __WEBPACK_IMPORTED_MODULE_2_victory_core__["t" /* PropTypes */].allOfType([__WEBPACK_IMPORTED_MODULE_2_victory_core__["t" /* PropTypes */].integer, __WEBPACK_IMPORTED_MODULE_2_victory_core__["t" /* PropTypes */].nonNegative]), __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string)]),
  sortOrder: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOf(["ascending", "descending"]),
  standalone: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  startAngle: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number,
  style: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({
    parent: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object, data: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object, labels: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object
  }),
  theme: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,
  width: __WEBPACK_IMPORTED_MODULE_2_victory_core__["t" /* PropTypes */].nonNegative,
  x: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func, __WEBPACK_IMPORTED_MODULE_2_victory_core__["t" /* PropTypes */].allOfType([__WEBPACK_IMPORTED_MODULE_2_victory_core__["t" /* PropTypes */].integer, __WEBPACK_IMPORTED_MODULE_2_victory_core__["t" /* PropTypes */].nonNegative]), __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string)]),
  y: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func, __WEBPACK_IMPORTED_MODULE_2_victory_core__["t" /* PropTypes */].allOfType([__WEBPACK_IMPORTED_MODULE_2_victory_core__["t" /* PropTypes */].integer, __WEBPACK_IMPORTED_MODULE_2_victory_core__["t" /* PropTypes */].nonNegative]), __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string)])
};
VictoryPie.defaultProps = {
  data: [{ x: "A", y: 1 }, { x: "B", y: 2 }, { x: "C", y: 3 }, { x: "D", y: 1 }, { x: "E", y: 2 }],
  standalone: true,
  dataComponent: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_victory_core__["w" /* Slice */], null),
  labelComponent: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_victory_core__["C" /* VictoryLabel */], null),
  containerComponent: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_victory_core__["B" /* VictoryContainer */], null),
  groupComponent: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("g", null),
  sortOrder: "ascending",
  theme: __WEBPACK_IMPORTED_MODULE_2_victory_core__["E" /* VictoryTheme */].grayscale
};

VictoryPie.getBaseProps = function (props) {
  return Object(__WEBPACK_IMPORTED_MODULE_3__helper_methods__["a" /* getBaseProps */])(props, fallbackProps);
};

VictoryPie.getData = __WEBPACK_IMPORTED_MODULE_2_victory_core__["i" /* Data */].getData.bind(__WEBPACK_IMPORTED_MODULE_2_victory_core__["i" /* Data */]);
VictoryPie.expectedComponents = ["dataComponent", "labelComponent", "groupComponent", "containerComponent"];


/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_2_victory_core__["I" /* addEvents */])(VictoryPie));

/***/ }),

/***/ "../node_modules/victory-pie/es/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_victory_pie__ = __webpack_require__("../node_modules/victory-pie/es/components/victory-pie.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__components_victory_pie__["a"]; });



/***/ }),

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
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_0_victory_core__["C"]; });
/* unused harmony reexport VictoryLegend */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_2_victory_pie__["a"]; });
/* unused harmony reexport VictoryScatter */
/* unused harmony reexport VictoryStack */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_0_victory_core__["E"]; });
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
        theme: __WEBPACK_IMPORTED_MODULE_1_victory__["f" /* VictoryTheme */].material,
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
          y: 5
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

/***/ }),

/***/ "./components/VictoryPieChart.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("../node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_victory__ = __webpack_require__("../node_modules/victory/es/index.js");
var _jsxFileName = "/Users/lucywu/play-with-charts/src/components/VictoryPieChart.js";

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




var VictoryPieChart =
/*#__PURE__*/
function (_Component) {
  _inherits(VictoryPieChart, _Component);

  function VictoryPieChart() {
    _classCallCheck(this, VictoryPieChart);

    return _possibleConstructorReturn(this, (VictoryPieChart.__proto__ || Object.getPrototypeOf(VictoryPieChart)).apply(this, arguments));
  }

  _createClass(VictoryPieChart, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("svg", {
        viewBox: "0 0 400 400",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_victory__["e" /* VictoryPie */], {
        standalone: false,
        width: 400,
        height: 400,
        data: [{
          x: 1,
          y: 120
        }, {
          x: 2,
          y: 150
        }, {
          x: 3,
          y: 75
        }],
        innerRadius: 68,
        labelRadius: 100,
        style: {
          labels: {
            fontSize: 20,
            fill: "white"
          }
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_victory__["d" /* VictoryLabel */], {
        textAnchor: "middle",
        style: {
          fontSize: 20
        },
        x: 200,
        y: 200,
        text: "Pie!",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
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

  return VictoryPieChart;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

var _default = VictoryPieChart;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("../node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("../node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(VictoryPieChart, "VictoryPieChart", "/Users/lucywu/play-with-charts/src/components/VictoryPieChart.js");
  reactHotLoader.register(_default, "default", "/Users/lucywu/play-with-charts/src/components/VictoryPieChart.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("../node_modules/webpack/buildin/harmony-module.js")(module)))

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_NivoResponsiveBar__ = __webpack_require__("./components/NivoResponsiveBar.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_RechartsSimpleLineChart__ = __webpack_require__("./components/RechartsSimpleLineChart.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_RechartsSimpleBarChart__ = __webpack_require__("./components/RechartsSimpleBarChart.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_RechartsCustomActiveShapePieChart__ = __webpack_require__("./components/RechartsCustomActiveShapePieChart.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_ReactChartJS2Doughnut__ = __webpack_require__("./components/ReactChartJS2Doughnut.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_ReactChartJS2HorizontalBar__ = __webpack_require__("./components/ReactChartJS2HorizontalBar.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_VictoryHorizontalBarChart__ = __webpack_require__("./components/VictoryHorizontalBarChart.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_VictoryPieChart__ = __webpack_require__("./components/VictoryPieChart.js");
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
      return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0__components_Layout__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      }, "Welcome to about page"), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_BarAndPieChart__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        }
      }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        }
      }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        }
      }, "------------------- Recharts -------------------"), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__components_RechartsSimpleBarChart__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        }
      }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__components_RechartsCustomActiveShapePieChart__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        }
      }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        }
      }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        }
      }, "------------------- React ChartJS 2 -------------------"), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        style: {
          "width": "50%"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__components_ReactChartJS2Doughnut__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        }
      }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__components_ReactChartJS2HorizontalBar__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        }
      }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        }
      })), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        }
      }, "------------------- Victory -------------------"), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        style: {
          "width": "50%"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__components_VictoryHorizontalBarChart__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        }
      }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__components_VictoryPieChart__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        }
      }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        }
      })));
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
//# sourceMappingURL=4.479abd19a7109b15c8ac.hot-update.js.map