webpackHotUpdate("main",{

/***/ "./client/src/components/ProductImagesViewer.jsx":
/*!*******************************************************!*\
  !*** ./client/src/components/ProductImagesViewer.jsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar ProductImagesViewer = function ProductImagesViewer(_ref) {\n  var productData = _ref.productData;\n  var images = productData.images;\n  console.log('hi');\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"productImagesViewer\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"productImagesViewer--thumbnails\"\n  }, images && images.map(function (imageURL) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n      key: imageURL,\n      src: imageURL\n    });\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"productImagesViewer--mainImage\"\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductImagesViewer);\n\n//# sourceURL=webpack:///./client/src/components/ProductImagesViewer.jsx?");

/***/ })

})