"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/Header.jsx":
/*!*******************************!*\
  !*** ./components/Header.jsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nfunction Header(props) {\n    _s();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        window.addEventListener(\"scroll\", addNavBackgroundClass);\n        const navbar = document.getElementsByClassName(\"navbar\")[0];\n        const sticky = 80;\n        if (window.pageYOffset >= sticky) {\n            navbar.classList.add(\"custom-nav-bg\");\n        }\n        function addNavBackgroundClass() {\n            if (window.pageYOffset >= sticky) {\n                navbar.classList.add(\"custom-nav-bg\");\n            } else {\n                navbar.classList.remove(\"custom-nav-bg\");\n            }\n        }\n        return ()=>{\n            window.removeEventListener(\"scroll\", addNavBackgroundClass);\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        className: \"navbar navbar-expand-lg fixed-top navbar-light\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container d-flex justify-content-between\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    className: \"logo\",\n                    href: \"/\",\n                    children: \"{JA}\"\n                }, void 0, false, {\n                    fileName: \"/Users/jalmanzar/Desktop/projects/portfolio-template/components/Header.jsx\",\n                    lineNumber: 32,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"navbar-toggler\",\n                    type: \"button\",\n                    \"data-bs-toggle\": \"collapse\",\n                    \"data-bs-target\": \"#navbarSupportedContent\",\n                    \"aria-controls\": \"navbarSupportedContent\",\n                    \"aria-expanded\": \"false\",\n                    \"aria-label\": \"Toggle navigation\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                        className: \"fa-solid fa-bars menu-icon\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jalmanzar/Desktop/projects/portfolio-template/components/Header.jsx\",\n                        lineNumber: 36,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/jalmanzar/Desktop/projects/portfolio-template/components/Header.jsx\",\n                    lineNumber: 33,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"collapse navbar-collapse\",\n                    id: \"navbarSupportedContent\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        className: \"navbar-nav mt-4 mt-lg-0 me-auto mb-2 mb-lg-0 d-lg-flex justify-content-end w-100\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: \"nav-item \",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    className: \"nav-link\",\n                                    href: \"/#about\",\n                                    children: \"About\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/jalmanzar/Desktop/projects/portfolio-template/components/Header.jsx\",\n                                    lineNumber: 41,\n                                    columnNumber: 29\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/jalmanzar/Desktop/projects/portfolio-template/components/Header.jsx\",\n                                lineNumber: 40,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: \"nav-item\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    className: \"nav-link\",\n                                    href: \"/#projects\",\n                                    children: \"Projects\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/jalmanzar/Desktop/projects/portfolio-template/components/Header.jsx\",\n                                    lineNumber: 44,\n                                    columnNumber: 29\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/jalmanzar/Desktop/projects/portfolio-template/components/Header.jsx\",\n                                lineNumber: 43,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: \"nav-item\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    className: \"nav-link\",\n                                    href: \"/articles\",\n                                    children: \"Articles\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/jalmanzar/Desktop/projects/portfolio-template/components/Header.jsx\",\n                                    lineNumber: 47,\n                                    columnNumber: 29\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/jalmanzar/Desktop/projects/portfolio-template/components/Header.jsx\",\n                                lineNumber: 46,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: \"nav-item\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    className: \"nav-link\",\n                                    href: \"/#contact\",\n                                    children: \"Contact\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/jalmanzar/Desktop/projects/portfolio-template/components/Header.jsx\",\n                                    lineNumber: 50,\n                                    columnNumber: 29\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/jalmanzar/Desktop/projects/portfolio-template/components/Header.jsx\",\n                                lineNumber: 49,\n                                columnNumber: 25\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/jalmanzar/Desktop/projects/portfolio-template/components/Header.jsx\",\n                        lineNumber: 39,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/jalmanzar/Desktop/projects/portfolio-template/components/Header.jsx\",\n                    lineNumber: 38,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/jalmanzar/Desktop/projects/portfolio-template/components/Header.jsx\",\n            lineNumber: 31,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/jalmanzar/Desktop/projects/portfolio-template/components/Header.jsx\",\n        lineNumber: 30,\n        columnNumber: 9\n    }, this);\n}\n_s(Header, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0hlYWRlci5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQWtDO0FBQ0w7QUFFN0IsU0FBU0UsT0FBT0MsS0FBSyxFQUFFOztJQUNuQkgsZ0RBQVNBLENBQUMsSUFBTTtRQUNaSSxPQUFPQyxnQkFBZ0IsQ0FBQyxVQUFVQztRQUVsQyxNQUFNQyxTQUFTQyxTQUFTQyxzQkFBc0IsQ0FBQyxTQUFTLENBQUMsRUFBRTtRQUMzRCxNQUFNQyxTQUFTO1FBRWYsSUFBSU4sT0FBT08sV0FBVyxJQUFJRCxRQUFRO1lBQzlCSCxPQUFPSyxTQUFTLENBQUNDLEdBQUcsQ0FBQztRQUN6QixDQUFDO1FBRUQsU0FBU1Asd0JBQXdCO1lBQzdCLElBQUlGLE9BQU9PLFdBQVcsSUFBSUQsUUFBUTtnQkFDOUJILE9BQU9LLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDO1lBQ3pCLE9BQU87Z0JBQ0hOLE9BQU9LLFNBQVMsQ0FBQ0UsTUFBTSxDQUFDO1lBQzVCLENBQUM7UUFDTDtRQUdBLE9BQU8sSUFBTTtZQUNUVixPQUFPVyxtQkFBbUIsQ0FBQyxVQUFVVDtRQUN6QztJQUNKLEdBQUcsRUFBRTtJQUVMLHFCQUNJLDhEQUFDVTtRQUFJQyxXQUFVO2tCQUNYLDRFQUFDQztZQUFJRCxXQUFVOzs4QkFDWCw4REFBQ2hCLGtEQUFJQTtvQkFBQ2dCLFdBQVU7b0JBQU9FLE1BQUs7OEJBQUk7Ozs7Ozs4QkFDaEMsOERBQUNDO29CQUFPSCxXQUFVO29CQUFpQkksTUFBSztvQkFBU0Msa0JBQWU7b0JBQzVEQyxrQkFBZTtvQkFBMEJDLGlCQUFjO29CQUN2REMsaUJBQWM7b0JBQVFDLGNBQVc7OEJBQ2pDLDRFQUFDQzt3QkFBRVYsV0FBVTs7Ozs7Ozs7Ozs7OEJBRWpCLDhEQUFDQztvQkFBSUQsV0FBVTtvQkFBMkJXLElBQUc7OEJBQ3pDLDRFQUFDQzt3QkFBR1osV0FBVTs7MENBQ1YsOERBQUNhO2dDQUFHYixXQUFVOzBDQUNWLDRFQUFDaEIsa0RBQUlBO29DQUFDZ0IsV0FBVTtvQ0FBV0UsTUFBSzs4Q0FBVTs7Ozs7Ozs7Ozs7MENBRTlDLDhEQUFDVztnQ0FBR2IsV0FBVTswQ0FDViw0RUFBQ2hCLGtEQUFJQTtvQ0FBQ2dCLFdBQVU7b0NBQVdFLE1BQUs7OENBQWE7Ozs7Ozs7Ozs7OzBDQUVqRCw4REFBQ1c7Z0NBQUdiLFdBQVU7MENBQ1YsNEVBQUNoQixrREFBSUE7b0NBQUNnQixXQUFVO29DQUFXRSxNQUFLOzhDQUFZOzs7Ozs7Ozs7OzswQ0FFaEQsOERBQUNXO2dDQUFHYixXQUFVOzBDQUNWLDRFQUFDaEIsa0RBQUlBO29DQUFDZ0IsV0FBVTtvQ0FBV0UsTUFBSzs4Q0FBWTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT3hFO0dBckRTakI7S0FBQUE7QUF1RFQsK0RBQWVBLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZWFkZXIuanN4PzU2N2QiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcblxuZnVuY3Rpb24gSGVhZGVyKHByb3BzKSB7XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGFkZE5hdkJhY2tncm91bmRDbGFzcyk7XG5cbiAgICAgICAgY29uc3QgbmF2YmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIm5hdmJhclwiKVswXTtcbiAgICAgICAgY29uc3Qgc3RpY2t5ID0gODA7XG5cbiAgICAgICAgaWYgKHdpbmRvdy5wYWdlWU9mZnNldCA+PSBzdGlja3kpIHtcbiAgICAgICAgICAgIG5hdmJhci5jbGFzc0xpc3QuYWRkKFwiY3VzdG9tLW5hdi1iZ1wiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGFkZE5hdkJhY2tncm91bmRDbGFzcygpIHtcbiAgICAgICAgICAgIGlmICh3aW5kb3cucGFnZVlPZmZzZXQgPj0gc3RpY2t5KSB7XG4gICAgICAgICAgICAgICAgbmF2YmFyLmNsYXNzTGlzdC5hZGQoXCJjdXN0b20tbmF2LWJnXCIpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBuYXZiYXIuY2xhc3NMaXN0LnJlbW92ZShcImN1c3RvbS1uYXYtYmdcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuXG4gICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgYWRkTmF2QmFja2dyb3VuZENsYXNzKTtcbiAgICAgICAgfVxuICAgIH0sIFtdKVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJuYXZiYXIgbmF2YmFyLWV4cGFuZC1sZyBmaXhlZC10b3AgbmF2YmFyLWxpZ2h0XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW5cIj5cbiAgICAgICAgICAgICAgICA8TGluayBjbGFzc05hbWU9XCJsb2dvXCIgaHJlZj1cIi9cIj4mIzEyMztKQSYjMTI1OzwvTGluaz5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIm5hdmJhci10b2dnbGVyXCIgdHlwZT1cImJ1dHRvblwiIGRhdGEtYnMtdG9nZ2xlPVwiY29sbGFwc2VcIlxuICAgICAgICAgICAgICAgICAgICBkYXRhLWJzLXRhcmdldD1cIiNuYXZiYXJTdXBwb3J0ZWRDb250ZW50XCIgYXJpYS1jb250cm9scz1cIm5hdmJhclN1cHBvcnRlZENvbnRlbnRcIlxuICAgICAgICAgICAgICAgICAgICBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIiBhcmlhLWxhYmVsPVwiVG9nZ2xlIG5hdmlnYXRpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEtc29saWQgZmEtYmFycyBtZW51LWljb25cIj48L2k+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xsYXBzZSBuYXZiYXItY29sbGFwc2VcIiBpZD1cIm5hdmJhclN1cHBvcnRlZENvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdmJhci1uYXYgbXQtNCBtdC1sZy0wIG1lLWF1dG8gbWItMiBtYi1sZy0wIGQtbGctZmxleCBqdXN0aWZ5LWNvbnRlbnQtZW5kIHctMTAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW0gXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgY2xhc3NOYW1lPVwibmF2LWxpbmtcIiBocmVmPVwiLyNhYm91dFwiPkFib3V0PC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZT1cIm5hdi1saW5rXCIgaHJlZj1cIi8jcHJvamVjdHNcIj5Qcm9qZWN0czwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBjbGFzc05hbWU9XCJuYXYtbGlua1wiIGhyZWY9XCIvYXJ0aWNsZXNcIj5BcnRpY2xlczwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBjbGFzc05hbWU9XCJuYXYtbGlua1wiIGhyZWY9XCIvI2NvbnRhY3RcIj5Db250YWN0PC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L25hdj5cbiAgICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7Il0sIm5hbWVzIjpbInVzZUVmZmVjdCIsIkxpbmsiLCJIZWFkZXIiLCJwcm9wcyIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJhZGROYXZCYWNrZ3JvdW5kQ2xhc3MiLCJuYXZiYXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJzdGlja3kiLCJwYWdlWU9mZnNldCIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJuYXYiLCJjbGFzc05hbWUiLCJkaXYiLCJocmVmIiwiYnV0dG9uIiwidHlwZSIsImRhdGEtYnMtdG9nZ2xlIiwiZGF0YS1icy10YXJnZXQiLCJhcmlhLWNvbnRyb2xzIiwiYXJpYS1leHBhbmRlZCIsImFyaWEtbGFiZWwiLCJpIiwiaWQiLCJ1bCIsImxpIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Header.jsx\n"));

/***/ })

});