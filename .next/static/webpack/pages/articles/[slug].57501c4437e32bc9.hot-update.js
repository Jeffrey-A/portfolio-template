"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/articles/[slug]",{

/***/ "./pages/articles/[slug].js":
/*!**********************************!*\
  !*** ./pages/articles/[slug].js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ Post; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var markdown_it__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! markdown-it */ \"./node_modules/markdown-it/index.js\");\n/* harmony import */ var markdown_it__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(markdown_it__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n\n\n\n\nvar __N_SSG = true;\n// The page for each post\nfunction Post(param) {\n    let { frontmatter , content  } = param;\n    const { title , author , category , date , bannerImage , tags  } = frontmatter;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container py-5\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"pb-2\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        href: \"/articles\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                class: \"fa fa-arrow-left me-2\",\n                                \"aria-hidden\": \"true\"\n                            }, void 0, false, {\n                                fileName: \"/Users/jalmanzar/Desktop/projects/portfolio-template/pages/articles/[slug].js\",\n                                lineNumber: 22,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: \"Articles\"\n                            }, void 0, false, {\n                                fileName: \"/Users/jalmanzar/Desktop/projects/portfolio-template/pages/articles/[slug].js\",\n                                lineNumber: 23,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/jalmanzar/Desktop/projects/portfolio-template/pages/articles/[slug].js\",\n                        lineNumber: 21,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/jalmanzar/Desktop/projects/portfolio-template/pages/articles/[slug].js\",\n                    lineNumber: 20,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"article-header mb-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Heading, {\n                            as: \"h1\",\n                            size: \"lg\",\n                            children: title\n                        }, void 0, false, {\n                            fileName: \"/Users/jalmanzar/Desktop/projects/portfolio-template/pages/articles/[slug].js\",\n                            lineNumber: 28,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"d-flex pt-2\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"pe-3\",\n                                    children: date\n                                }, void 0, false, {\n                                    fileName: \"/Users/jalmanzar/Desktop/projects/portfolio-template/pages/articles/[slug].js\",\n                                    lineNumber: 30,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: category\n                                }, void 0, false, {\n                                    fileName: \"/Users/jalmanzar/Desktop/projects/portfolio-template/pages/articles/[slug].js\",\n                                    lineNumber: 31,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/jalmanzar/Desktop/projects/portfolio-template/pages/articles/[slug].js\",\n                            lineNumber: 29,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/jalmanzar/Desktop/projects/portfolio-template/pages/articles/[slug].js\",\n                    lineNumber: 27,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Divider, {\n                    style: {\n                        backgroundColor: \"transparent\"\n                    }\n                }, void 0, false, {\n                    fileName: \"/Users/jalmanzar/Desktop/projects/portfolio-template/pages/articles/[slug].js\",\n                    lineNumber: 34,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"pt-5\",\n                    dangerouslySetInnerHTML: {\n                        __html: markdown_it__WEBPACK_IMPORTED_MODULE_1___default()().render(content)\n                    }\n                }, void 0, false, {\n                    fileName: \"/Users/jalmanzar/Desktop/projects/portfolio-template/pages/articles/[slug].js\",\n                    lineNumber: 35,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/jalmanzar/Desktop/projects/portfolio-template/pages/articles/[slug].js\",\n            lineNumber: 19,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/jalmanzar/Desktop/projects/portfolio-template/pages/articles/[slug].js\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, this);\n}\n_c = Post;\nvar _c;\n$RefreshReg$(_c, \"Post\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcnRpY2xlcy9bc2x1Z10uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUU2QjtBQUVBO0FBS0g7O0FBRTFCLHlCQUF5QjtBQUNWLFNBQVNJLEtBQUssS0FBd0IsRUFBRTtRQUExQixFQUFFQyxZQUFXLEVBQUVDLFFBQU8sRUFBRSxHQUF4QjtJQUUzQixNQUFNLEVBQUVDLE1BQUssRUFBRUMsT0FBTSxFQUFFQyxTQUFRLEVBQUVDLEtBQUksRUFBRUMsWUFBVyxFQUFFQyxLQUFJLEVBQUUsR0FBR1A7SUFFN0QscUJBQ0UsOERBQUNRO2tCQUNDLDRFQUFDQztZQUFJQyxXQUFVOzs4QkFDYiw4REFBQ0Q7b0JBQUlDLFdBQVU7OEJBQ2IsNEVBQUNkLGtEQUFJQTt3QkFBQ2UsTUFBSzs7MENBQ1gsOERBQUNDO2dDQUFFQyxPQUFNO2dDQUF3QkMsZUFBWTs7Ozs7OzBDQUMzQyw4REFBQ0M7MENBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7OzhCQUlWLDhEQUFDTjtvQkFBSUMsV0FBVTs7c0NBQ2IsOERBQUNiLHFEQUFPQTs0QkFBQ21CLElBQUc7NEJBQUtDLE1BQUs7c0NBQU1mOzs7Ozs7c0NBQzVCLDhEQUFDTzs0QkFBSUMsV0FBVTs7OENBQ2IsOERBQUNRO29DQUFFUixXQUFVOzhDQUFRTDs7Ozs7OzhDQUNyQiw4REFBQ2E7OENBQUdkOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OEJBR1IsOERBQUNOLHFEQUFPQTtvQkFBQ3FCLE9BQU87d0JBQUNDLGlCQUFpQjtvQkFBYTs7Ozs7OzhCQUMvQyw4REFBQ1g7b0JBQUlDLFdBQVU7b0JBQU9XLHlCQUF5Qjt3QkFBRUMsUUFBUTNCLGtEQUFFQSxHQUFHNEIsTUFBTSxDQUFDdEI7b0JBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSXRGLENBQUM7S0ExQnVCRiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9hcnRpY2xlcy9bc2x1Z10uanM/OWY2YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZnMgZnJvbSBcImZzXCI7XG5pbXBvcnQgbWF0dGVyIGZyb20gXCJncmF5LW1hdHRlclwiO1xuaW1wb3J0IG1kIGZyb20gJ21hcmtkb3duLWl0JztcblxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuXG5pbXBvcnQge1xuICBIZWFkaW5nLFxuICBEaXZpZGVyLFxufSBmcm9tICdAY2hha3JhLXVpL3JlYWN0JztcblxuLy8gVGhlIHBhZ2UgZm9yIGVhY2ggcG9zdFxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUG9zdCh7IGZyb250bWF0dGVyLCBjb250ZW50IH0pIHtcblxuICBjb25zdCB7IHRpdGxlLCBhdXRob3IsIGNhdGVnb3J5LCBkYXRlLCBiYW5uZXJJbWFnZSwgdGFncyB9ID0gZnJvbnRtYXR0ZXJcblxuICByZXR1cm4gKFxuICAgIDxtYWluPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgcHktNVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBiLTJcIj5cbiAgICAgICAgICA8TGluayBocmVmPScvYXJ0aWNsZXMnPlxuICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtYXJyb3ctbGVmdCBtZS0yXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxuICAgICAgICAgICAgPHNwYW4+QXJ0aWNsZXM8L3NwYW4+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFydGljbGUtaGVhZGVyIG1iLTRcIj5cbiAgICAgICAgICA8SGVhZGluZyBhcz1cImgxXCIgc2l6ZT1cImxnXCI+e3RpdGxlfTwvSGVhZGluZz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBwdC0yXCI+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwZS0zXCI+e2RhdGV9PC9wPlxuICAgICAgICAgICAgPHA+e2NhdGVnb3J5fTwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxEaXZpZGVyIHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnfX0gLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC01XCIgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBtZCgpLnJlbmRlcihjb250ZW50KSB9fSAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9tYWluPlxuICApO1xufVxuXG4vLyBHZW5lcmF0aW5nIHRoZSBwYXRocyBmb3IgZWFjaCBwb3N0XG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XG4gIC8vIEdldCBsaXN0IG9mIGFsbCBmaWxlcyBmcm9tIG91ciBwb3N0cyBkaXJlY3RvcnlcbiAgY29uc3QgZmlsZXMgPSBmcy5yZWFkZGlyU3luYyhcImRhdGEvYXJ0aWNsZXNcIik7XG4gIC8vIEdlbmVyYXRlIGEgcGF0aCBmb3IgZWFjaCBvbmVcbiAgY29uc3QgcGF0aHMgPSBmaWxlcy5tYXAoKGZpbGVOYW1lKSA9PiAoe1xuICAgIHBhcmFtczoge1xuICAgICAgc2x1ZzogZmlsZU5hbWUucmVwbGFjZShcIi5tZFwiLCBcIlwiKSxcbiAgICB9LFxuICB9KSk7XG4gIC8vIHJldHVybiBsaXN0IG9mIHBhdGhzXG4gIHJldHVybiB7XG4gICAgcGF0aHMsXG4gICAgZmFsbGJhY2s6IGZhbHNlLFxuICB9O1xufVxuXG5cbi8vIEdlbmVyYXRlIHRoZSBzdGF0aWMgcHJvcHMgZm9yIHRoZSBwYWdlXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoeyBwYXJhbXM6IHsgc2x1ZyB9IH0pIHtcbiAgICBjb25zdCBmaWxlTmFtZSA9IGZzLnJlYWRGaWxlU3luYyhgZGF0YS9hcnRpY2xlcy8ke3NsdWd9Lm1kYCwgJ3V0Zi04Jyk7XG4gICAgY29uc3QgeyBkYXRhOiBmcm9udG1hdHRlciwgY29udGVudCB9ID0gbWF0dGVyKGZpbGVOYW1lKTtcbiAgICByZXR1cm4ge1xuICAgICAgcHJvcHM6IHtcbiAgICAgICAgZnJvbnRtYXR0ZXIsXG4gICAgICAgIGNvbnRlbnQsXG4gICAgICB9LFxuICAgIH07XG59Il0sIm5hbWVzIjpbIm1kIiwiTGluayIsIkhlYWRpbmciLCJEaXZpZGVyIiwiUG9zdCIsImZyb250bWF0dGVyIiwiY29udGVudCIsInRpdGxlIiwiYXV0aG9yIiwiY2F0ZWdvcnkiLCJkYXRlIiwiYmFubmVySW1hZ2UiLCJ0YWdzIiwibWFpbiIsImRpdiIsImNsYXNzTmFtZSIsImhyZWYiLCJpIiwiY2xhc3MiLCJhcmlhLWhpZGRlbiIsInNwYW4iLCJhcyIsInNpemUiLCJwIiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIl9faHRtbCIsInJlbmRlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/articles/[slug].js\n"));

/***/ })

});