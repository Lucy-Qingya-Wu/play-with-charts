webpackHotUpdate(4,{

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
            fill: "pink"
          }
        },
        colorScale: ["tomato", "orange", "gold"],
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
        text: "Hello World!",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
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

/***/ })

})
//# sourceMappingURL=4.a0bce5463b7c3c5083ef.hot-update.js.map