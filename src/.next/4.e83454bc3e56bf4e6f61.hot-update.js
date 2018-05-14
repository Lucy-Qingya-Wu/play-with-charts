webpackHotUpdate(4,{

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
//# sourceMappingURL=4.e83454bc3e56bf4e6f61.hot-update.js.map