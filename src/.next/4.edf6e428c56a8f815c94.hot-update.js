webpackHotUpdate(4,{

/***/ "./components/NivoResponsiveBar.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("../node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nivo_bar__ = __webpack_require__("../node_modules/@nivo/bar/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nivo_generators__ = __webpack_require__("../node_modules/@nivo/generators/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nivo_generators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__nivo_generators__);
var _jsxFileName = "/Users/lucywu/play-with-charts/src/components/NivoResponsiveBar.js";

(function () {
  var enterModule = __webpack_require__("../node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();




var colors = ['#fae04d', '#ff744c', '#789792', '#b1646a', '#efa9a1', '#8470c7', '#97a66f'];

var Bar = function Bar() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__nivo_bar__["a" /* ResponsiveBar */], {
    margin: {
      top: 1.5,
      right: 10,
      bottom: 1.5,
      left: 1.5
    },
    padding: 0.2,
    data: Object(__WEBPACK_IMPORTED_MODULE_2__nivo_generators__["generateCountriesData"])(['rock', 'jazz', 'hip-hop', 'reggae', 'folk'], {
      size: 9
    }),
    indexBy: "country",
    enableGridX: false,
    enableGridY: false,
    keys: ['rock', 'jazz', 'hip-hop', 'reggae', 'folk'],
    colors: colors,
    axisBottom: null,
    axisLeft: null,
    borderWidth: 3,
    borderColor: "#000",
    enableLabel: true,
    labelSkipHeight: 24,
    isInteractive: false,
    animate: false,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "Title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    }
  }, "BAR"));
};

var _default = Bar;
/* unused harmony default export */ var _unused_webpack_default_export = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("../node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("../node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(colors, "colors", "/Users/lucywu/play-with-charts/src/components/NivoResponsiveBar.js");
  reactHotLoader.register(Bar, "Bar", "/Users/lucywu/play-with-charts/src/components/NivoResponsiveBar.js");
  reactHotLoader.register(_default, "default", "/Users/lucywu/play-with-charts/src/components/NivoResponsiveBar.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=4.edf6e428c56a8f815c94.hot-update.js.map