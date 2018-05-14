module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/BarAndPieChart.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_highcharts__ = __webpack_require__("highcharts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_highcharts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_highcharts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_jsx_highcharts__ = __webpack_require__("react-jsx-highcharts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_jsx_highcharts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_jsx_highcharts__);
var _jsxFileName = "/Users/lucywu/play-with-charts/src/components/BarAndPieChart.js";

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
        layout: "vertical",
        align: "right",
        verticalAlign: "middle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_jsx_highcharts__["XAxis"], {
        id: "x",
        categories: ['Apples', 'Oranges', 'Pears', 'Bananas', 'Plums'],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_jsx_highcharts__["YAxis"], {
        id: "number",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_jsx_highcharts__["ColumnSeries"], {
        id: "jane",
        name: "Jane",
        data: [3, 2, 1, 3, 4],
        color: "blue",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_jsx_highcharts__["ColumnSeries"], {
        id: "john",
        name: "John",
        data: [2, 3, 5, 7, 6],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_jsx_highcharts__["ColumnSeries"], {
        id: "joe",
        name: "Joe",
        data: [4, 3, 3, 9, 0],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_jsx_highcharts__["SplineSeries"], {
        id: "average",
        name: "Average",
        data: [3, 2.67, 3, 6.33, 3.33],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
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
          lineNumber: 36
        }
      }))));
    }
  }]);

  return BarAndPieChart;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_2_react_jsx_highcharts__["withHighcharts"])(BarAndPieChart, __WEBPACK_IMPORTED_MODULE_1_highcharts___default.a));

/***/ }),

/***/ "./components/Chart.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_vis__ = __webpack_require__("react-vis");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_vis___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_vis__);
var _jsxFileName = "/Users/lucywu/play-with-charts/src/components/Chart.js";



var Chart = function Chart(props) {
  var dataArr = props.data.map(function (d) {
    return {
      x: d.year + '/' + d.quarter,
      y: parseFloat(d.count / 1000)
    };
  }); //XYPlot is a wrapper for the rest of elements. 
  //Axes are there to show X and Y axis. 
  //VerticalGridLines to create a grid and LineSeries is a type of chart itself.

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_vis__["XYPlot"], {
    xType: "ordinal",
    width: 1000,
    height: 500,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_vis__["VerticalGridLines"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_vis__["HorizontalGridLines"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_vis__["XAxis"], {
    title: "Period of time(year and quarter)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_vis__["YAxis"], {
    title: "Number of pull requests (thousands)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_vis__["LineSeries"], {
    data: dataArr,
    style: {
      stroke: 'violet',
      strokeWidth: 3
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }));
};

/* unused harmony default export */ var _unused_webpack_default_export = (Chart);

/***/ }),

/***/ "./components/Layout.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Navbar__ = __webpack_require__("./components/Navbar.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_head__ = __webpack_require__("next/head");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_head__);
var _jsxFileName = "/Users/lucywu/play-with-charts/src/components/Layout.js";




var Layout = function Layout(props) {
  console.log("here is props for layout component", props);
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_head___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, "Hi Lucy"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
    rel: "stylesheet",
    href: "https://bootswatch.com/4/cerulean/bootstrap.min.css",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
    rel: "stylesheet",
    href: "https://unpkg.com/react-vis/dist/style.css",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Navbar__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, props.children));
};

/* harmony default export */ __webpack_exports__["a"] = (Layout);

/***/ }),

/***/ "./components/Navbar.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_link__);
var _jsxFileName = "/Users/lucywu/play-with-charts/src/components/Navbar.js";



var Navbar = function Navbar() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("nav", {
    className: "navbar navbar-expand navbar-dark bg-dark mb-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    className: "navbar-brand",
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, "Hi Lucy"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "collapse navbar-collapse",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", {
    className: "navbar-nav ml-auto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
    className: "nav-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    className: "nav-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, "Home"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
    className: "nav-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
    href: "/about",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    className: "nav-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, "About")))))));
};

/* harmony default export */ __webpack_exports__["a"] = (Navbar);

/***/ }),

/***/ "./components/NivoResponsiveBar.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__nivo_bar__ = __webpack_require__("@nivo/bar");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__nivo_bar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__nivo_bar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
var _jsxFileName = "/Users/lucywu/play-with-charts/src/components/NivoResponsiveBar.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var NivoResponsiveBar =
/*#__PURE__*/
function (_Component) {
  _inherits(NivoResponsiveBar, _Component);

  function NivoResponsiveBar(props) {
    var _this;

    _classCallCheck(this, NivoResponsiveBar);

    _this = _possibleConstructorReturn(this, (NivoResponsiveBar.__proto__ || Object.getPrototypeOf(NivoResponsiveBar)).call(this, props));
    _this.state = {
      data: [{
        "country": "AD",
        "hot dog": 128,
        "hot dogColor": "hsl(84, 70%, 50%)",
        "burger": 62,
        "burgerColor": "hsl(52, 70%, 50%)",
        "sandwich": 10,
        "sandwichColor": "hsl(161, 70%, 50%)",
        "kebab": 192,
        "kebabColor": "hsl(69, 70%, 50%)",
        "fries": 22,
        "friesColor": "hsl(32, 70%, 50%)",
        "donut": 19,
        "donutColor": "hsl(224, 70%, 50%)"
      }, {
        "country": "AE",
        "hot dog": 165,
        "hot dogColor": "hsl(346, 70%, 50%)",
        "burger": 133,
        "burgerColor": "hsl(45, 70%, 50%)",
        "sandwich": 187,
        "sandwichColor": "hsl(347, 70%, 50%)",
        "kebab": 134,
        "kebabColor": "hsl(87, 70%, 50%)",
        "fries": 77,
        "friesColor": "hsl(133, 70%, 50%)",
        "donut": 143,
        "donutColor": "hsl(56, 70%, 50%)"
      }, {
        "country": "AF",
        "hot dog": 73,
        "hot dogColor": "hsl(90, 70%, 50%)",
        "burger": 173,
        "burgerColor": "hsl(111, 70%, 50%)",
        "sandwich": 141,
        "sandwichColor": "hsl(351, 70%, 50%)",
        "kebab": 14,
        "kebabColor": "hsl(302, 70%, 50%)",
        "fries": 21,
        "friesColor": "hsl(34, 70%, 50%)",
        "donut": 162,
        "donutColor": "hsl(62, 70%, 50%)"
      }, {
        "country": "AG",
        "hot dog": 97,
        "hot dogColor": "hsl(19, 70%, 50%)",
        "burger": 106,
        "burgerColor": "hsl(40, 70%, 50%)",
        "sandwich": 69,
        "sandwichColor": "hsl(301, 70%, 50%)",
        "kebab": 120,
        "kebabColor": "hsl(106, 70%, 50%)",
        "fries": 166,
        "friesColor": "hsl(187, 70%, 50%)",
        "donut": 170,
        "donutColor": "hsl(198, 70%, 50%)"
      }, {
        "country": "AI",
        "hot dog": 0,
        "hot dogColor": "hsl(68, 70%, 50%)",
        "burger": 141,
        "burgerColor": "hsl(130, 70%, 50%)",
        "sandwich": 82,
        "sandwichColor": "hsl(231, 70%, 50%)",
        "kebab": 143,
        "kebabColor": "hsl(153, 70%, 50%)",
        "fries": 93,
        "friesColor": "hsl(205, 70%, 50%)",
        "donut": 96,
        "donutColor": "hsl(129, 70%, 50%)"
      }, {
        "country": "AL",
        "hot dog": 33,
        "hot dogColor": "hsl(108, 70%, 50%)",
        "burger": 78,
        "burgerColor": "hsl(359, 70%, 50%)",
        "sandwich": 56,
        "sandwichColor": "hsl(310, 70%, 50%)",
        "kebab": 20,
        "kebabColor": "hsl(216, 70%, 50%)",
        "fries": 25,
        "friesColor": "hsl(89, 70%, 50%)",
        "donut": 146,
        "donutColor": "hsl(149, 70%, 50%)"
      }, {
        "country": "AM",
        "hot dog": 45,
        "hot dogColor": "hsl(218, 70%, 50%)",
        "burger": 174,
        "burgerColor": "hsl(186, 70%, 50%)",
        "sandwich": 199,
        "sandwichColor": "hsl(283, 70%, 50%)",
        "kebab": 42,
        "kebabColor": "hsl(188, 70%, 50%)",
        "fries": 58,
        "friesColor": "hsl(251, 70%, 50%)",
        "donut": 193,
        "donutColor": "hsl(117, 70%, 50%)"
      }]
    };
    return _this;
  }

  _createClass(NivoResponsiveBar, [{
    key: "render",
    value: function render() {
      console.log("this.state.data: ", this.state.data);
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        }
      }, "haha", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0__nivo_bar__["ResponsiveBar"], {
        data: this.state.data,
        keys: ["hot dog", "burger", "sandwich", "kebab", "fries", "donut"],
        indexBy: "country",
        margin: {
          "top": 50,
          "right": 130,
          "bottom": 50,
          "left": 60
        },
        padding: 0.3,
        colors: "nivo",
        colorBy: "id",
        defs: [{
          "id": "dots",
          "type": "patternDots",
          "background": "inherit",
          "color": "#38bcb2",
          "size": 4,
          "padding": 1,
          "stagger": true
        }, {
          "id": "lines",
          "type": "patternLines",
          "background": "inherit",
          "color": "#eed312",
          "rotation": -45,
          "lineWidth": 6,
          "spacing": 10
        }],
        fill: [{
          "match": {
            "id": "fries"
          },
          "id": "dots"
        }, {
          "match": {
            "id": "sandwich"
          },
          "id": "lines"
        }],
        borderColor: "inherit:darker(1.6)",
        axisBottom: {
          "orient": "bottom",
          "tickSize": 5,
          "tickPadding": 5,
          "tickRotation": 0,
          "legend": "country",
          "legendPosition": "center",
          "legendOffset": 36
        },
        axisLeft: {
          "orient": "left",
          "tickSize": 5,
          "tickPadding": 5,
          "tickRotation": 0,
          "legend": "food",
          "legendPosition": "center",
          "legendOffset": -40
        },
        labelSkipWidth: 12,
        labelSkipHeight: 12,
        labelTextColor: "inherit:darker(1.6)",
        animate: true,
        motionStiffness: 90,
        motionDamping: 15,
        legends: [{
          "dataFrom": "keys",
          "anchor": "bottom-right",
          "direction": "column",
          "translateX": 120,
          "itemWidth": 100,
          "itemHeight": 20,
          "itemsSpacing": 2,
          "symbolSize": 20
        }],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        }
      }));
    }
  }]);

  return NivoResponsiveBar;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

/* unused harmony default export */ var _unused_webpack_default_export = (NivoResponsiveBar);

/***/ }),

/***/ "./components/ReactChartJS2Doughnut.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_chartjs_2__ = __webpack_require__("react-chartjs-2");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_chartjs_2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react_chartjs_2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
var _jsxFileName = "/Users/lucywu/play-with-charts/src/components/ReactChartJS2Doughnut.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var ReactChartJS2Doughnut =
/*#__PURE__*/
function (_Component) {
  _inherits(ReactChartJS2Doughnut, _Component);

  function ReactChartJS2Doughnut(props) {
    var _this;

    _classCallCheck(this, ReactChartJS2Doughnut);

    _this = _possibleConstructorReturn(this, (ReactChartJS2Doughnut.__proto__ || Object.getPrototypeOf(ReactChartJS2Doughnut)).call(this, props));
    _this.state = {
      labels: ['Red', 'Green', 'Yellow'],
      datasets: [{
        data: [getRandomInt(50, 200), getRandomInt(100, 150), getRandomInt(150, 250)],
        backgroundColor: ['#FFC0CB', '#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#FFC0CB', '#36A2EB', '#FFCE56']
      }]
    };
    return _this;
  }

  _createClass(ReactChartJS2Doughnut, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react_chartjs_2__["Doughnut"], {
        data: this.state,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      });
    }
  }]);

  return ReactChartJS2Doughnut;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (ReactChartJS2Doughnut);

/***/ }),

/***/ "./components/ReactChartJS2HorizontalBar.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_chartjs_2__ = __webpack_require__("react-chartjs-2");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_chartjs_2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react_chartjs_2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
var _jsxFileName = "/Users/lucywu/play-with-charts/src/components/ReactChartJS2HorizontalBar.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [{
    label: 'My First bar chart',
    backgroundColor: 'rgba(255,99,132,0.2)',
    borderColor: 'rgba(255,99,132,1)',
    borderWidth: 1,
    hoverBackgroundColor: 'rgba(255,99,132,0.4)',
    hoverBorderColor: 'rgba(255,99,132,1)',
    data: [10, 59, 80, 81, 56, 55, 40]
  }]
};

var ReactChartJS2HorizontalBar =
/*#__PURE__*/
function (_Component) {
  _inherits(ReactChartJS2HorizontalBar, _Component);

  function ReactChartJS2HorizontalBar() {
    _classCallCheck(this, ReactChartJS2HorizontalBar);

    return _possibleConstructorReturn(this, (ReactChartJS2HorizontalBar.__proto__ || Object.getPrototypeOf(ReactChartJS2HorizontalBar)).apply(this, arguments));
  }

  _createClass(ReactChartJS2HorizontalBar, [{
    key: "render",
    // constructor(props){
    //     super(props)
    //     this.state = {
    //         labels: [
    //             'Red',
    //             'Green',
    //             'Yellow'
    //           ],
    //           datasets: [{
    //             data: [getRandomInt(50, 200), getRandomInt(100, 150), getRandomInt(150, 250)],
    //             backgroundColor: [
    //             '#FFC0CB',
    //             '#36A2EB',
    //             '#FFCE56'
    //             ],
    //             hoverBackgroundColor: [
    //             '#FFC0CB',
    //             '#36A2EB',
    //             '#FFCE56'
    //             ]
    //           }]    
    //     }
    // }
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react_chartjs_2__["HorizontalBar"], {
        data: data,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      });
    }
  }]);

  return ReactChartJS2HorizontalBar;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (ReactChartJS2HorizontalBar);

/***/ }),

/***/ "./components/RechartsCustomActiveShapePieChart.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_recharts__ = __webpack_require__("recharts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_recharts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_recharts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
var _jsxFileName = "/Users/lucywu/play-with-charts/src/components/RechartsCustomActiveShapePieChart.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var data01 = [{
  name: 'Group A',
  value: 400
}, {
  name: 'Group B',
  value: 300
}, {
  name: 'Group C',
  value: 3030
}, {
  name: 'Group D',
  value: 200
}];
var data02 = [{
  name: 'A1',
  value: 100
}, {
  name: 'A2',
  value: 300
}, {
  name: 'B1',
  value: 100
}, {
  name: 'B2',
  value: 80
}, {
  name: 'B3',
  value: 40
}, {
  name: 'B4',
  value: 30
}, {
  name: 'B5',
  value: 50
}, {
  name: 'C1',
  value: 100
}, {
  name: 'C2',
  value: 200
}, {
  name: 'D1',
  value: 150
}, {
  name: 'D2',
  value: 50
}];

var RechartsCustomActiveShapePieChart =
/*#__PURE__*/
function (_Component) {
  _inherits(RechartsCustomActiveShapePieChart, _Component);

  function RechartsCustomActiveShapePieChart() {
    _classCallCheck(this, RechartsCustomActiveShapePieChart);

    return _possibleConstructorReturn(this, (RechartsCustomActiveShapePieChart.__proto__ || Object.getPrototypeOf(RechartsCustomActiveShapePieChart)).apply(this, arguments));
  }

  _createClass(RechartsCustomActiveShapePieChart, [{
    key: "render",
    value: function render() {
      // cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent, value
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_recharts__["PieChart"], {
        width: 800,
        height: 400,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_recharts__["Pie"], {
        data: data01,
        cx: 200,
        cy: 200,
        outerRadius: 60,
        fill: "#8884d8",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_recharts__["Pie"], {
        data: data02,
        cx: 200,
        cy: 200,
        innerRadius: 70,
        outerRadius: 90,
        fill: "#82ca9d",
        label: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }));
    }
  }]);

  return RechartsCustomActiveShapePieChart;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (RechartsCustomActiveShapePieChart);

/***/ }),

/***/ "./components/RechartsSimpleBarChart.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_recharts__ = __webpack_require__("recharts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_recharts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_recharts__);
var _jsxFileName = "/Users/lucywu/play-with-charts/src/components/RechartsSimpleBarChart.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var data = [{
  name: 'Page A',
  uv: 590,
  pv: 800,
  amt: 1400
}, {
  name: 'Page B',
  uv: 868,
  pv: 967,
  amt: 1506
}, {
  name: 'Page C',
  uv: 1397,
  pv: 1098,
  amt: 989
}, {
  name: 'Page D',
  uv: 1480,
  pv: 1200,
  amt: 1228
}, {
  name: 'Page E',
  uv: 1520,
  pv: 1108,
  amt: 1100
}, {
  name: 'Page F',
  uv: 1400,
  pv: 680,
  amt: 1700
}];

var RechartsSimpleBarChart =
/*#__PURE__*/
function (_Component) {
  _inherits(RechartsSimpleBarChart, _Component);

  function RechartsSimpleBarChart() {
    _classCallCheck(this, RechartsSimpleBarChart);

    return _possibleConstructorReturn(this, (RechartsSimpleBarChart.__proto__ || Object.getPrototypeOf(RechartsSimpleBarChart)).apply(this, arguments));
  }

  _createClass(RechartsSimpleBarChart, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_recharts__["ComposedChart"], {
        layout: "vertical",
        width: 600,
        height: 400,
        data: data,
        margin: {
          top: 20,
          right: 20,
          bottom: 20,
          left: 20
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_recharts__["CartesianGrid"], {
        stroke: "#f5f5f5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_recharts__["XAxis"], {
        type: "number",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_recharts__["YAxis"], {
        dataKey: "name",
        type: "category",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_recharts__["Tooltip"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_recharts__["Legend"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_recharts__["Bar"], {
        dataKey: "pv",
        barSize: 20,
        fill: "#413ea0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }));
    }
  }]);

  return RechartsSimpleBarChart;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (RechartsSimpleBarChart);

/***/ }),

/***/ "./components/RechartsSimpleLineChart.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_recharts__ = __webpack_require__("recharts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_recharts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_recharts__);
var _jsxFileName = "/Users/lucywu/play-with-charts/src/components/RechartsSimpleLineChart.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var data = [{
  name: 'Page A',
  uv: 4000,
  pv: 2400,
  amt: 2400
}, {
  name: 'Page B',
  uv: 3000,
  pv: 1398,
  amt: 2210
}, {
  name: 'Page C',
  uv: 2000,
  pv: 9800,
  amt: 2290
}, {
  name: 'Page D',
  uv: 2780,
  pv: 3908,
  amt: 2000
}, {
  name: 'Page E',
  uv: 1890,
  pv: 4800,
  amt: 2181
}, {
  name: 'Page F',
  uv: 2390,
  pv: 3800,
  amt: 2500
}, {
  name: 'Page G',
  uv: 3490,
  pv: 4300,
  amt: 2100
}];

var RechartsSimpleLineChart =
/*#__PURE__*/
function (_Component) {
  _inherits(RechartsSimpleLineChart, _Component);

  function RechartsSimpleLineChart() {
    _classCallCheck(this, RechartsSimpleLineChart);

    return _possibleConstructorReturn(this, (RechartsSimpleLineChart.__proto__ || Object.getPrototypeOf(RechartsSimpleLineChart)).apply(this, arguments));
  }

  _createClass(RechartsSimpleLineChart, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_recharts__["LineChart"], {
        width: 600,
        height: 300,
        data: data,
        margin: {
          top: 5,
          right: 30,
          left: 20,
          bottom: 5
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_recharts__["XAxis"], {
        dataKey: "name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_recharts__["YAxis"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_recharts__["CartesianGrid"], {
        strokeDasharray: "3 3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_recharts__["Tooltip"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_recharts__["Legend"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_recharts__["Line"], {
        type: "monotone",
        dataKey: "pv",
        stroke: "#8884d8",
        activeDot: {
          r: 8
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_recharts__["Line"], {
        type: "monotone",
        dataKey: "uv",
        stroke: "#82ca9d",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }));
    }
  }]);

  return RechartsSimpleLineChart;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* unused harmony default export */ var _unused_webpack_default_export = (RechartsSimpleLineChart);

/***/ }),

/***/ "./components/VictoryHorizontalBarChart.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_victory__ = __webpack_require__("victory");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_victory___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_victory__);
var _jsxFileName = "/Users/lucywu/play-with-charts/src/components/VictoryHorizontalBarChart.js";

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
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_victory__["VictoryChart"], {
        theme: __WEBPACK_IMPORTED_MODULE_1_victory__["VictoryTheme"].material,
        domain: {
          y: [0.5, 5.5]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_victory__["VictoryGroup"], {
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
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_victory__["VictoryBar"], {
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
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_victory__["VictoryBar"], {
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
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_victory__["VictoryBar"], {
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
  }]);

  return VictoryHorizontalBarChart;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (VictoryHorizontalBarChart);

/***/ }),

/***/ "./components/VictoryPieChart.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_victory__ = __webpack_require__("victory");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_victory___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_victory__);
var _jsxFileName = "/Users/lucywu/play-with-charts/src/components/VictoryPieChart.js";

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
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_victory__["VictoryPie"], {
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
            fill: "black"
          }
        },
        colorScale: ["tomato", "orange", "blue"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_victory__["VictoryLabel"], {
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
  }]);

  return VictoryPieChart;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (VictoryPieChart);

/***/ }),

/***/ "./pages/about.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Layout__ = __webpack_require__("./components/Layout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Chart__ = __webpack_require__("./components/Chart.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_nvd3__ = __webpack_require__("react-nvd3");
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
      }, "Welcome to about page"), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        }
      }, "------------------- Recharts -------------------"), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        style: {
          "width": "50%"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__components_RechartsSimpleBarChart__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        }
      }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__components_RechartsCustomActiveShapePieChart__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        }
      }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        }
      })), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("h1", {
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
          "width": "40%"
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
      })), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        }
      }, "------------------- React JSX Highcharts -------------------"), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        style: {
          "width": "70%"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_BarAndPieChart__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        }
      }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        }
      })));
    }
  }]);

  return About;
}(__WEBPACK_IMPORTED_MODULE_2_react__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (About);

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/about.js");


/***/ }),

/***/ "@nivo/bar":
/***/ (function(module, exports) {

module.exports = require("@nivo/bar");

/***/ }),

/***/ "highcharts":
/***/ (function(module, exports) {

module.exports = require("highcharts");

/***/ }),

/***/ "next/head":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/link":
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-chartjs-2":
/***/ (function(module, exports) {

module.exports = require("react-chartjs-2");

/***/ }),

/***/ "react-jsx-highcharts":
/***/ (function(module, exports) {

module.exports = require("react-jsx-highcharts");

/***/ }),

/***/ "react-nvd3":
/***/ (function(module, exports) {

module.exports = require("react-nvd3");

/***/ }),

/***/ "react-vis":
/***/ (function(module, exports) {

module.exports = require("react-vis");

/***/ }),

/***/ "recharts":
/***/ (function(module, exports) {

module.exports = require("recharts");

/***/ }),

/***/ "victory":
/***/ (function(module, exports) {

module.exports = require("victory");

/***/ })

/******/ });
//# sourceMappingURL=about.js.map