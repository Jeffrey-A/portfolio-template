"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/About.jsx":
/*!******************************!*\
  !*** ./components/About.jsx ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ About; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/data */ \"./data/index.js\");\n\n\n\n\n\nfunction About(props) {\n    const { skills , skillsLabel , imageSrc  } = _data__WEBPACK_IMPORTED_MODULE_3__.aboutData;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: \"about\",\n        className: \"section\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Heading, {\n                mb: 4,\n                children: \"About\"\n            }, void 0, false, {\n                fileName: \"/Users/jalmanzar/Desktop/projects/portfolio-template/components/About.jsx\",\n                lineNumber: 12,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"d-lg-flex align-items-center p-3 my-4 skills-section\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"me-3 mb-3 mb-lg-0 primary-skill-label\",\n                        children: skillsLabel\n                    }, void 0, false, {\n                        fileName: \"/Users/jalmanzar/Desktop/projects/portfolio-template/components/About.jsx\",\n                        lineNumber: 14,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Stack, {\n                        align: \"flex-start\",\n                        justify: \"flex-start\",\n                        direction: [\n                            \"column\",\n                            \"row\"\n                        ],\n                        spacing: \"24px\",\n                        children: lodash__WEBPACK_IMPORTED_MODULE_1___default().map(skills, (skillItem)=>{\n                            const { category , sections  } = skillItem;\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Tooltip, {\n                                hasArrow: true,\n                                label: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Skills, {\n                                    skillSections: sections\n                                }, void 0, false, void 0, void 0),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"me-2\",\n                                            children: category\n                                        }, void 0, false, {\n                                            fileName: \"/Users/jalmanzar/Desktop/projects/portfolio-template/components/About.jsx\",\n                                            lineNumber: 21,\n                                            columnNumber: 37\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                            className: \"fa-solid fa-circle-info\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/jalmanzar/Desktop/projects/portfolio-template/components/About.jsx\",\n                                            lineNumber: 22,\n                                            columnNumber: 37\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/jalmanzar/Desktop/projects/portfolio-template/components/About.jsx\",\n                                    lineNumber: 20,\n                                    columnNumber: 33\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/jalmanzar/Desktop/projects/portfolio-template/components/About.jsx\",\n                                lineNumber: 19,\n                                columnNumber: 29\n                            }, this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/Users/jalmanzar/Desktop/projects/portfolio-template/components/About.jsx\",\n                        lineNumber: 15,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jalmanzar/Desktop/projects/portfolio-template/components/About.jsx\",\n                lineNumber: 13,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"d-lg-flex justify-content-between\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"about-photo-container mb-3 mb-0\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: imageSrc,\n                            alt: \"About image\"\n                        }, void 0, false, {\n                            fileName: \"/Users/jalmanzar/Desktop/projects/portfolio-template/components/About.jsx\",\n                            lineNumber: 31,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/jalmanzar/Desktop/projects/portfolio-template/components/About.jsx\",\n                        lineNumber: 30,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AboutText, {}, void 0, false, {\n                        fileName: \"/Users/jalmanzar/Desktop/projects/portfolio-template/components/About.jsx\",\n                        lineNumber: 33,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jalmanzar/Desktop/projects/portfolio-template/components/About.jsx\",\n                lineNumber: 29,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/jalmanzar/Desktop/projects/portfolio-template/components/About.jsx\",\n        lineNumber: 11,\n        columnNumber: 9\n    }, this);\n}\n_c = About;\nfunction AboutText(props) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"about-text\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Text, {\n                fontSize: \"lg\",\n                mb: 3,\n                children: [\n                    \"I’ve been in the web development industry for more than three years. You can see a few of the projects that I've contributed while working at RubensteinTech, \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        target: \"_blank\",\n                        href: \"https://www.rubensteintech.com/work/index.html\",\n                        children: \"here\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jalmanzar/Desktop/projects/portfolio-template/components/About.jsx\",\n                        lineNumber: 45,\n                        columnNumber: 62\n                    }, this),\n                    \".\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jalmanzar/Desktop/projects/portfolio-template/components/About.jsx\",\n                lineNumber: 42,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Text, {\n                mb: 3,\n                children: \"Throughout my web development journey, I've technically led 3 projects so far at RubensteinTech. Helping less experienced developers resolve technical problems when they are stuck in a given task, performing code reviews to maintain code quality and spot bugs before they are introduced. And most importantly, putting in the necessary work to make sure that we deliver the project on time.\"\n            }, void 0, false, {\n                fileName: \"/Users/jalmanzar/Desktop/projects/portfolio-template/components/About.jsx\",\n                lineNumber: 48,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Text, {\n                mb: 3,\n                children: \"While I have full stack JavaScript development\\xa0experience, my forte is frontend development. I have experience resolving web accessibility, browser compatibility, and front-end performing issues. In addition, I'm good in responsive web design and have developed a strong eye for design throughout my experience\\xa0and education. Furthermore,\\xa0 I also have experience\\xa0in end-to-end testing using Cypress.io and unit testing using Jest.\"\n            }, void 0, false, {\n                fileName: \"/Users/jalmanzar/Desktop/projects/portfolio-template/components/About.jsx\",\n                lineNumber: 51,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Text, {\n                mb: 3,\n                children: [\n                    \"To learn more about me, feel free to contact me, \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        target: \"_blank\",\n                        href: \"mailto:almanzarortizjeffrey@gmail.com\",\n                        children: \"here\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jalmanzar/Desktop/projects/portfolio-template/components/About.jsx\",\n                        lineNumber: 55,\n                        columnNumber: 66\n                    }, this),\n                    \".\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jalmanzar/Desktop/projects/portfolio-template/components/About.jsx\",\n                lineNumber: 54,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/jalmanzar/Desktop/projects/portfolio-template/components/About.jsx\",\n        lineNumber: 41,\n        columnNumber: 9\n    }, this);\n}\n_c1 = AboutText;\nfunction Skills(param) {\n    let { skillSections  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"p-3\",\n        children: lodash__WEBPACK_IMPORTED_MODULE_1___default().map(skillSections, (skillSection, index)=>{\n            const { label , skills  } = skillSection;\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: index > 0 ? \"mt-3\" : null,\n                        children: label\n                    }, void 0, false, {\n                        fileName: \"/Users/jalmanzar/Desktop/projects/portfolio-template/components/About.jsx\",\n                        lineNumber: 70,\n                        columnNumber: 25\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"skills-grid\",\n                        children: lodash__WEBPACK_IMPORTED_MODULE_1___default().map(skills, (skill)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"btn btn-secondary btn-sm skill\",\n                                children: skill\n                            }, void 0, false, {\n                                fileName: \"/Users/jalmanzar/Desktop/projects/portfolio-template/components/About.jsx\",\n                                lineNumber: 72,\n                                columnNumber: 53\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"/Users/jalmanzar/Desktop/projects/portfolio-template/components/About.jsx\",\n                        lineNumber: 71,\n                        columnNumber: 25\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jalmanzar/Desktop/projects/portfolio-template/components/About.jsx\",\n                lineNumber: 69,\n                columnNumber: 21\n            }, this);\n        })\n    }, void 0, false, {\n        fileName: \"/Users/jalmanzar/Desktop/projects/portfolio-template/components/About.jsx\",\n        lineNumber: 65,\n        columnNumber: 9\n    }, this);\n}\n_c2 = Skills;\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"About\");\n$RefreshReg$(_c1, \"AboutText\");\n$RefreshReg$(_c2, \"Skills\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0Fib3V0LmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQXVCO0FBQ0c7QUFDdUM7QUFFOUI7QUFFcEIsU0FBU08sTUFBTUMsS0FBSyxFQUFFO0lBQ2pDLE1BQU0sRUFBRUMsT0FBTSxFQUFFQyxZQUFXLEVBQUVDLFNBQVEsRUFBRSxHQUFHTCw0Q0FBU0E7SUFFbkQscUJBQ0ksOERBQUNNO1FBQUlDLElBQUc7UUFBUUMsV0FBVTs7MEJBQ3RCLDhEQUFDWixxREFBT0E7Z0JBQUNhLElBQUk7MEJBQUc7Ozs7OzswQkFDaEIsOERBQUNIO2dCQUFJRSxXQUFVOztrQ0FDWCw4REFBQ0U7d0JBQUVGLFdBQVU7a0NBQXlDSjs7Ozs7O2tDQUN0RCw4REFBQ0wsbURBQUtBO3dCQUFDWSxPQUFNO3dCQUFhQyxTQUFRO3dCQUFhQyxXQUFXOzRCQUFDOzRCQUFVO3lCQUFNO3dCQUFFQyxTQUFRO2tDQUNoRnBCLGlEQUFLLENBQUNTLFFBQVFhLENBQUFBLFlBQWE7NEJBQ3hCLE1BQU0sRUFBRUMsU0FBUSxFQUFFQyxTQUFRLEVBQUUsR0FBR0Y7NEJBQy9CLHFCQUNJLDhEQUFDbEIscURBQU9BO2dDQUFDcUIsUUFBUTtnQ0FBQ0MscUJBQU8sOERBQUNDO29DQUFPQyxlQUFlSjs7MENBQzVDLDRFQUFDSzs7c0RBQ0csOERBQUNDOzRDQUFLaEIsV0FBVTtzREFBUVM7Ozs7OztzREFDeEIsOERBQUNROzRDQUFFakIsV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7d0JBSTdCOzs7Ozs7Ozs7Ozs7MEJBR1IsOERBQUNGO2dCQUFJRSxXQUFVOztrQ0FDWCw4REFBQ0Y7d0JBQUlFLFdBQVU7a0NBQ1gsNEVBQUNrQjs0QkFBSUMsS0FBS3RCOzRCQUFVdUIsS0FBSTs7Ozs7Ozs7Ozs7a0NBRTVCLDhEQUFDQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJakIsQ0FBQztLQTlCdUI1QjtBQWdDeEIsU0FBUzRCLFVBQVUzQixLQUFLLEVBQUU7SUFDdEIscUJBQ0ksOERBQUNJO1FBQUlFLFdBQVU7OzBCQUNYLDhEQUFDWCxrREFBSUE7Z0JBQUNpQyxVQUFTO2dCQUFLckIsSUFBSTs7b0JBQUc7a0NBR3NCLDhEQUFDc0I7d0JBQUVDLFFBQU87d0JBQ25EQyxNQUFLO2tDQUFpRDs7Ozs7O29CQUFROzs7Ozs7OzBCQUV0RSw4REFBQ3BDLGtEQUFJQTtnQkFBQ1ksSUFBSTswQkFBRzs7Ozs7OzBCQUdiLDhEQUFDWixrREFBSUE7Z0JBQUNZLElBQUk7MEJBQUc7Ozs7OzswQkFHYiw4REFBQ1osa0RBQUlBO2dCQUFDWSxJQUFJOztvQkFBRztrQ0FDd0MsOERBQUNzQjt3QkFBRUMsUUFBTzt3QkFDdkRDLE1BQUs7a0NBQXdDOzs7Ozs7b0JBQVE7Ozs7Ozs7Ozs7Ozs7QUFJekU7TUFyQlNKO0FBd0JULFNBQVNSLE9BQU8sS0FBaUIsRUFBRTtRQUFuQixFQUFFQyxjQUFhLEVBQUUsR0FBakI7SUFDWixxQkFDSSw4REFBQ2hCO1FBQUlFLFdBQVU7a0JBQ1ZkLGlEQUFLLENBQUM0QixlQUFlLENBQUNZLGNBQWNDLFFBQVU7WUFDM0MsTUFBTSxFQUFFZixNQUFLLEVBQUVqQixPQUFNLEVBQUUsR0FBRytCO1lBQzFCLHFCQUNJLDhEQUFDdkMsdURBQWM7O2tDQUNYLDhEQUFDZTt3QkFBRUYsV0FBVzJCLFFBQVEsSUFBSSxTQUFTLElBQUk7a0NBQUdmOzs7Ozs7a0NBQzFDLDhEQUFDZDt3QkFBSUUsV0FBVTtrQ0FDVmQsaURBQUssQ0FBQ1MsUUFBUWtDLENBQUFBLHNCQUFTLDhEQUFDYjtnQ0FBS2hCLFdBQVU7MENBQWtDNkI7Ozs7Ozs7Ozs7Ozs7Ozs7O1FBSTFGOzs7Ozs7QUFHWjtNQWhCU2hCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQWJvdXQuanN4P2MzNGYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBIZWFkaW5nLCBUZXh0LCBUb29sdGlwLCBTdGFjayB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnO1xuXG5pbXBvcnQgeyBhYm91dERhdGEgfSBmcm9tICdAL2RhdGEnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBYm91dChwcm9wcykge1xuICAgIGNvbnN0IHsgc2tpbGxzLCBza2lsbHNMYWJlbCwgaW1hZ2VTcmMgfSA9IGFib3V0RGF0YTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgaWQ9XCJhYm91dFwiIGNsYXNzTmFtZT1cInNlY3Rpb25cIj5cbiAgICAgICAgICAgIDxIZWFkaW5nIG1iPXs0fT5BYm91dDwvSGVhZGluZz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1sZy1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBwLTMgbXktNCBza2lsbHMtc2VjdGlvblwiPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1lLTMgbWItMyBtYi1sZy0wIHByaW1hcnktc2tpbGwtbGFiZWxcIj57c2tpbGxzTGFiZWx9PC9wPlxuICAgICAgICAgICAgICAgIDxTdGFjayBhbGlnbj1cImZsZXgtc3RhcnRcIiBqdXN0aWZ5PVwiZmxleC1zdGFydFwiIGRpcmVjdGlvbj17Wydjb2x1bW4nLCAncm93J119IHNwYWNpbmc9JzI0cHgnPlxuICAgICAgICAgICAgICAgICAgICB7Xy5tYXAoc2tpbGxzLCBza2lsbEl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgeyBjYXRlZ29yeSwgc2VjdGlvbnMgfSA9IHNraWxsSXRlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRvb2x0aXAgaGFzQXJyb3cgbGFiZWw9ezxTa2lsbHMgc2tpbGxTZWN0aW9ucz17c2VjdGlvbnN9IC8+fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1lLTJcIj57Y2F0ZWdvcnl9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEtc29saWQgZmEtY2lyY2xlLWluZm9cIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWxnLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW5cIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFib3V0LXBob3RvLWNvbnRhaW5lciBtYi0zIG1iLTBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2ltYWdlU3JjfSBhbHQ9XCJBYm91dCBpbWFnZVwiIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPEFib3V0VGV4dCAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZnVuY3Rpb24gQWJvdXRUZXh0KHByb3BzKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYm91dC10ZXh0XCI+XG4gICAgICAgICAgICA8VGV4dCBmb250U2l6ZT0nbGcnIG1iPXszfT5cbiAgICAgICAgICAgICAgICBJ4oCZdmUgYmVlbiBpbiB0aGUgd2ViIGRldmVsb3BtZW50IGluZHVzdHJ5XG4gICAgICAgICAgICAgICAgZm9yIG1vcmUgdGhhbiB0aHJlZSB5ZWFycy4gWW91IGNhbiBzZWUgYSBmZXcgb2YgdGhlIHByb2plY3RzIHRoYXQgSSd2ZVxuICAgICAgICAgICAgICAgIGNvbnRyaWJ1dGVkIHdoaWxlIHdvcmtpbmcgYXQgUnViZW5zdGVpblRlY2gsIDxhIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL3d3dy5ydWJlbnN0ZWludGVjaC5jb20vd29yay9pbmRleC5odG1sXCI+aGVyZTwvYT4uXG4gICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICA8VGV4dCBtYj17M30+XG4gICAgICAgICAgICAgICAgVGhyb3VnaG91dCBteSB3ZWIgZGV2ZWxvcG1lbnQgam91cm5leSwgSSd2ZSB0ZWNobmljYWxseSBsZWQgMyBwcm9qZWN0cyBzbyBmYXIgYXQgUnViZW5zdGVpblRlY2guIEhlbHBpbmcgbGVzcyBleHBlcmllbmNlZCBkZXZlbG9wZXJzIHJlc29sdmUgdGVjaG5pY2FsIHByb2JsZW1zIHdoZW4gdGhleSBhcmUgc3R1Y2sgaW4gYSBnaXZlbiB0YXNrLCBwZXJmb3JtaW5nIGNvZGUgcmV2aWV3cyB0byBtYWludGFpbiBjb2RlIHF1YWxpdHkgYW5kIHNwb3QgYnVncyBiZWZvcmUgdGhleSBhcmUgaW50cm9kdWNlZC4gQW5kIG1vc3QgaW1wb3J0YW50bHksIHB1dHRpbmcgaW4gdGhlIG5lY2Vzc2FyeSB3b3JrIHRvIG1ha2Ugc3VyZSB0aGF0IHdlIGRlbGl2ZXIgdGhlIHByb2plY3Qgb24gdGltZS5cbiAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgIDxUZXh0IG1iPXszfT5cbiAgICAgICAgICAgICAgICBXaGlsZSBJIGhhdmUgZnVsbCBzdGFjayBKYXZhU2NyaXB0IGRldmVsb3BtZW50wqBleHBlcmllbmNlLCBteSBmb3J0ZSBpcyBmcm9udGVuZCBkZXZlbG9wbWVudC4gSSBoYXZlIGV4cGVyaWVuY2UgcmVzb2x2aW5nIHdlYiBhY2Nlc3NpYmlsaXR5LCBicm93c2VyIGNvbXBhdGliaWxpdHksIGFuZCBmcm9udC1lbmQgcGVyZm9ybWluZyBpc3N1ZXMuIEluIGFkZGl0aW9uLCBJJ20gZ29vZCBpbiByZXNwb25zaXZlIHdlYiBkZXNpZ24gYW5kIGhhdmUgZGV2ZWxvcGVkIGEgc3Ryb25nIGV5ZSBmb3IgZGVzaWduIHRocm91Z2hvdXQgbXkgZXhwZXJpZW5jZcKgYW5kIGVkdWNhdGlvbi4gRnVydGhlcm1vcmUswqAgSSBhbHNvIGhhdmUgZXhwZXJpZW5jZcKgaW4gZW5kLXRvLWVuZCB0ZXN0aW5nIHVzaW5nIEN5cHJlc3MuaW8gYW5kIHVuaXQgdGVzdGluZyB1c2luZyBKZXN0LlxuICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgPFRleHQgbWI9ezN9PlxuICAgICAgICAgICAgICAgIFRvIGxlYXJuIG1vcmUgYWJvdXQgbWUsIGZlZWwgZnJlZSB0byBjb250YWN0IG1lLCA8YSB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgICAgICBocmVmPVwibWFpbHRvOmFsbWFuemFyb3J0aXpqZWZmcmV5QGdtYWlsLmNvbVwiPmhlcmU8L2E+LlxuICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cblxuZnVuY3Rpb24gU2tpbGxzKHsgc2tpbGxTZWN0aW9ucyB9KSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3AtMyc+XG4gICAgICAgICAgICB7Xy5tYXAoc2tpbGxTZWN0aW9ucywgKHNraWxsU2VjdGlvbiwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB7IGxhYmVsLCBza2lsbHMgfSA9IHNraWxsU2VjdGlvbjtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e2luZGV4ID4gMCA/ICdtdC0zJyA6IG51bGx9PntsYWJlbH08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2tpbGxzLWdyaWQnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtfLm1hcChza2lsbHMsIHNraWxsID0+IDxzcGFuIGNsYXNzTmFtZT0nYnRuIGJ0bi1zZWNvbmRhcnkgYnRuLXNtIHNraWxsJz57c2tpbGx9PC9zcGFuPil9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9KX1cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufSJdLCJuYW1lcyI6WyJfIiwiUmVhY3QiLCJIZWFkaW5nIiwiVGV4dCIsIlRvb2x0aXAiLCJTdGFjayIsImFib3V0RGF0YSIsIkFib3V0IiwicHJvcHMiLCJza2lsbHMiLCJza2lsbHNMYWJlbCIsImltYWdlU3JjIiwiZGl2IiwiaWQiLCJjbGFzc05hbWUiLCJtYiIsInAiLCJhbGlnbiIsImp1c3RpZnkiLCJkaXJlY3Rpb24iLCJzcGFjaW5nIiwibWFwIiwic2tpbGxJdGVtIiwiY2F0ZWdvcnkiLCJzZWN0aW9ucyIsImhhc0Fycm93IiwibGFiZWwiLCJTa2lsbHMiLCJza2lsbFNlY3Rpb25zIiwiYnV0dG9uIiwic3BhbiIsImkiLCJpbWciLCJzcmMiLCJhbHQiLCJBYm91dFRleHQiLCJmb250U2l6ZSIsImEiLCJ0YXJnZXQiLCJocmVmIiwic2tpbGxTZWN0aW9uIiwiaW5kZXgiLCJGcmFnbWVudCIsInNraWxsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/About.jsx\n"));

/***/ })

});