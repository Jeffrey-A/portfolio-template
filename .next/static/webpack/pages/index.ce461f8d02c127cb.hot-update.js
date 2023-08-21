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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ About; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/data */ \"./data/index.js\");\n\n\n\n\n\nfunction About(props) {\n    const { skills , skillsLabel , imageSrc , sectionHeading  } = _data__WEBPACK_IMPORTED_MODULE_3__.aboutData;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: \"about\",\n        className: \"section\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Heading, {\n                mb: 4,\n                children: sectionHeading\n            }, void 0, false, {\n                fileName: \"/Users/jalmanzar/Desktop/projects/portfolio-template/components/About.jsx\",\n                lineNumber: 12,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"d-lg-flex align-items-center p-3 my-4 skills-section\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"me-3 mb-3 mb-lg-0 primary-skill-label\",\n                        children: skillsLabel\n                    }, void 0, false, {\n                        fileName: \"/Users/jalmanzar/Desktop/projects/portfolio-template/components/About.jsx\",\n                        lineNumber: 14,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Stack, {\n                        align: \"flex-start\",\n                        justify: \"flex-start\",\n                        direction: [\n                            \"column\",\n                            \"row\"\n                        ],\n                        spacing: \"24px\",\n                        children: lodash__WEBPACK_IMPORTED_MODULE_1___default().map(skills, (skillItem, index)=>{\n                            const { category , sections  } = skillItem;\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Tooltip, {\n                                hasArrow: true,\n                                label: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Skills, {\n                                    skillSections: sections\n                                }, void 0, false, void 0, void 0),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"me-2\",\n                                            children: category\n                                        }, void 0, false, {\n                                            fileName: \"/Users/jalmanzar/Desktop/projects/portfolio-template/components/About.jsx\",\n                                            lineNumber: 21,\n                                            columnNumber: 37\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                            className: \"fa-solid fa-circle-info\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/jalmanzar/Desktop/projects/portfolio-template/components/About.jsx\",\n                                            lineNumber: 22,\n                                            columnNumber: 37\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/jalmanzar/Desktop/projects/portfolio-template/components/About.jsx\",\n                                    lineNumber: 20,\n                                    columnNumber: 33\n                                }, this)\n                            }, \"skills-\".concat(index), false, {\n                                fileName: \"/Users/jalmanzar/Desktop/projects/portfolio-template/components/About.jsx\",\n                                lineNumber: 19,\n                                columnNumber: 29\n                            }, this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/Users/jalmanzar/Desktop/projects/portfolio-template/components/About.jsx\",\n                        lineNumber: 15,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jalmanzar/Desktop/projects/portfolio-template/components/About.jsx\",\n                lineNumber: 13,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"d-lg-flex justify-content-between\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"about-photo-container mb-3 mb-0\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: imageSrc,\n                            alt: \"About image\"\n                        }, void 0, false, {\n                            fileName: \"/Users/jalmanzar/Desktop/projects/portfolio-template/components/About.jsx\",\n                            lineNumber: 31,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/jalmanzar/Desktop/projects/portfolio-template/components/About.jsx\",\n                        lineNumber: 30,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AboutText, {}, void 0, false, {\n                        fileName: \"/Users/jalmanzar/Desktop/projects/portfolio-template/components/About.jsx\",\n                        lineNumber: 33,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jalmanzar/Desktop/projects/portfolio-template/components/About.jsx\",\n                lineNumber: 29,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/jalmanzar/Desktop/projects/portfolio-template/components/About.jsx\",\n        lineNumber: 11,\n        columnNumber: 9\n    }, this);\n}\n_c = About;\nfunction AboutText(props) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"about-text\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Text, {\n                fontSize: \"lg\",\n                mb: 3,\n                children: [\n                    \"I’ve been in the web development industry for more than three years. You can see a few of the projects that I've contributed while working at RubensteinTech, \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        target: \"_blank\",\n                        href: \"https://www.rubensteintech.com/work/index.html\",\n                        children: \"here\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jalmanzar/Desktop/projects/portfolio-template/components/About.jsx\",\n                        lineNumber: 45,\n                        columnNumber: 62\n                    }, this),\n                    \".\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jalmanzar/Desktop/projects/portfolio-template/components/About.jsx\",\n                lineNumber: 42,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Text, {\n                mb: 3,\n                children: \"Throughout my web development journey, I've technically led 3 projects so far at RubensteinTech. Helping less experienced developers resolve technical problems when they are stuck in a given task, performing code reviews to maintain code quality and spot bugs before they are introduced. And most importantly, putting in the necessary work to make sure that we deliver the project on time.\"\n            }, void 0, false, {\n                fileName: \"/Users/jalmanzar/Desktop/projects/portfolio-template/components/About.jsx\",\n                lineNumber: 48,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Text, {\n                mb: 3,\n                children: \"While I have full stack JavaScript development\\xa0experience, my forte is frontend development. I have experience resolving web accessibility, browser compatibility, and front-end performing issues. In addition, I'm good in responsive web design and have developed a strong eye for design throughout my experience\\xa0and education. Furthermore,\\xa0 I also have experience\\xa0in end-to-end testing using Cypress.io and unit testing using Jest.\"\n            }, void 0, false, {\n                fileName: \"/Users/jalmanzar/Desktop/projects/portfolio-template/components/About.jsx\",\n                lineNumber: 51,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Text, {\n                mb: 3,\n                children: [\n                    \"To learn more about me, feel free to contact me, \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        target: \"_blank\",\n                        href: \"mailto:\".concat(_data__WEBPACK_IMPORTED_MODULE_3__.email),\n                        children: \"here\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jalmanzar/Desktop/projects/portfolio-template/components/About.jsx\",\n                        lineNumber: 55,\n                        columnNumber: 66\n                    }, this),\n                    \".\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jalmanzar/Desktop/projects/portfolio-template/components/About.jsx\",\n                lineNumber: 54,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-4 social-media-container--light\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        className: \"d-inline-block me-3\",\n                        target: \"_blank\",\n                        href: _data__WEBPACK_IMPORTED_MODULE_3__.githubLink,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                className: \"fa-brands fa-github me-2\"\n                            }, void 0, false, {\n                                fileName: \"/Users/jalmanzar/Desktop/projects/portfolio-template/components/About.jsx\",\n                                lineNumber: 59,\n                                columnNumber: 90\n                            }, this),\n                            \"GitHub\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/jalmanzar/Desktop/projects/portfolio-template/components/About.jsx\",\n                        lineNumber: 59,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        className: \"d-inline-block\",\n                        target: \"_blank\",\n                        href: _data__WEBPACK_IMPORTED_MODULE_3__.linkedinLink,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                className: \"fa-brands fa-linkedin me-2\"\n                            }, void 0, false, {\n                                fileName: \"/Users/jalmanzar/Desktop/projects/portfolio-template/components/About.jsx\",\n                                lineNumber: 61,\n                                columnNumber: 87\n                            }, this),\n                            \"LinkedIn\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/jalmanzar/Desktop/projects/portfolio-template/components/About.jsx\",\n                        lineNumber: 61,\n                        columnNumber: 21\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jalmanzar/Desktop/projects/portfolio-template/components/About.jsx\",\n                lineNumber: 58,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/jalmanzar/Desktop/projects/portfolio-template/components/About.jsx\",\n        lineNumber: 41,\n        columnNumber: 9\n    }, this);\n}\n_c1 = AboutText;\nfunction Skills(param) {\n    let { skillSections  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"p-3\",\n        children: lodash__WEBPACK_IMPORTED_MODULE_1___default().map(skillSections, (skillSection, index)=>{\n            const { label , skills  } = skillSection;\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: index > 0 ? \"mt-3\" : null,\n                        children: label\n                    }, void 0, false, {\n                        fileName: \"/Users/jalmanzar/Desktop/projects/portfolio-template/components/About.jsx\",\n                        lineNumber: 76,\n                        columnNumber: 25\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"skills-grid\",\n                        children: lodash__WEBPACK_IMPORTED_MODULE_1___default().map(skills, (skill)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"btn btn-secondary btn-sm skill\",\n                                children: skill\n                            }, void 0, false, {\n                                fileName: \"/Users/jalmanzar/Desktop/projects/portfolio-template/components/About.jsx\",\n                                lineNumber: 78,\n                                columnNumber: 53\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"/Users/jalmanzar/Desktop/projects/portfolio-template/components/About.jsx\",\n                        lineNumber: 77,\n                        columnNumber: 25\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jalmanzar/Desktop/projects/portfolio-template/components/About.jsx\",\n                lineNumber: 75,\n                columnNumber: 21\n            }, this);\n        })\n    }, void 0, false, {\n        fileName: \"/Users/jalmanzar/Desktop/projects/portfolio-template/components/About.jsx\",\n        lineNumber: 71,\n        columnNumber: 9\n    }, this);\n}\n_c2 = Skills;\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"About\");\n$RefreshReg$(_c1, \"AboutText\");\n$RefreshReg$(_c2, \"Skills\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O2tDQUFHSTs7Ozs7O2tDQUMxQyw4REFBQ2Y7d0JBQUlFLFdBQVU7a0NBQ1ZsQixpREFBSyxDQUFDWSxRQUFRbUMsQ0FBQUEsc0JBQVMsOERBQUNaO2dDQUFLakIsV0FBVTswQ0FBa0M2Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7UUFJMUY7Ozs7OztBQUdaO01BaEJTZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0Fib3V0LmpzeD9jMzRmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgSGVhZGluZywgVGV4dCwgVG9vbHRpcCwgU3RhY2sgfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0JztcblxuaW1wb3J0IHsgYWJvdXREYXRhLCBlbWFpbCwgbGlua2VkaW5MaW5rLCBnaXRodWJMaW5rIH0gZnJvbSAnQC9kYXRhJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWJvdXQocHJvcHMpIHtcbiAgICBjb25zdCB7IHNraWxscywgc2tpbGxzTGFiZWwsIGltYWdlU3JjLCBzZWN0aW9uSGVhZGluZyB9ID0gYWJvdXREYXRhO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBpZD1cImFib3V0XCIgY2xhc3NOYW1lPVwic2VjdGlvblwiPlxuICAgICAgICAgICAgPEhlYWRpbmcgbWI9ezR9PntzZWN0aW9uSGVhZGluZ308L0hlYWRpbmc+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtbGctZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIgcC0zIG15LTQgc2tpbGxzLXNlY3Rpb25cIj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtZS0zIG1iLTMgbWItbGctMCBwcmltYXJ5LXNraWxsLWxhYmVsXCI+e3NraWxsc0xhYmVsfTwvcD5cbiAgICAgICAgICAgICAgICA8U3RhY2sgYWxpZ249XCJmbGV4LXN0YXJ0XCIganVzdGlmeT1cImZsZXgtc3RhcnRcIiBkaXJlY3Rpb249e1snY29sdW1uJywgJ3JvdyddfSBzcGFjaW5nPScyNHB4Jz5cbiAgICAgICAgICAgICAgICAgICAge18ubWFwKHNraWxscywgKHNraWxsSXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgY2F0ZWdvcnksIHNlY3Rpb25zIH0gPSBza2lsbEl0ZW07XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUb29sdGlwIGtleT17YHNraWxscy0ke2luZGV4fWB9IGhhc0Fycm93IGxhYmVsPXs8U2tpbGxzIHNraWxsU2VjdGlvbnM9e3NlY3Rpb25zfSAvPn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtZS0yXCI+e2NhdGVnb3J5fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhLXNvbGlkIGZhLWNpcmNsZS1pbmZvXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1sZy1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYm91dC1waG90by1jb250YWluZXIgbWItMyBtYi0wXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpbWFnZVNyY30gYWx0PVwiQWJvdXQgaW1hZ2VcIiAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxBYm91dFRleHQgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmZ1bmN0aW9uIEFib3V0VGV4dChwcm9wcykge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJvdXQtdGV4dFwiPlxuICAgICAgICAgICAgPFRleHQgZm9udFNpemU9J2xnJyBtYj17M30+XG4gICAgICAgICAgICAgICAgSeKAmXZlIGJlZW4gaW4gdGhlIHdlYiBkZXZlbG9wbWVudCBpbmR1c3RyeVxuICAgICAgICAgICAgICAgIGZvciBtb3JlIHRoYW4gdGhyZWUgeWVhcnMuIFlvdSBjYW4gc2VlIGEgZmV3IG9mIHRoZSBwcm9qZWN0cyB0aGF0IEkndmVcbiAgICAgICAgICAgICAgICBjb250cmlidXRlZCB3aGlsZSB3b3JraW5nIGF0IFJ1YmVuc3RlaW5UZWNoLCA8YSB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly93d3cucnViZW5zdGVpbnRlY2guY29tL3dvcmsvaW5kZXguaHRtbFwiPmhlcmU8L2E+LlxuICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgPFRleHQgbWI9ezN9PlxuICAgICAgICAgICAgICAgIFRocm91Z2hvdXQgbXkgd2ViIGRldmVsb3BtZW50IGpvdXJuZXksIEkndmUgdGVjaG5pY2FsbHkgbGVkIDMgcHJvamVjdHMgc28gZmFyIGF0IFJ1YmVuc3RlaW5UZWNoLiBIZWxwaW5nIGxlc3MgZXhwZXJpZW5jZWQgZGV2ZWxvcGVycyByZXNvbHZlIHRlY2huaWNhbCBwcm9ibGVtcyB3aGVuIHRoZXkgYXJlIHN0dWNrIGluIGEgZ2l2ZW4gdGFzaywgcGVyZm9ybWluZyBjb2RlIHJldmlld3MgdG8gbWFpbnRhaW4gY29kZSBxdWFsaXR5IGFuZCBzcG90IGJ1Z3MgYmVmb3JlIHRoZXkgYXJlIGludHJvZHVjZWQuIEFuZCBtb3N0IGltcG9ydGFudGx5LCBwdXR0aW5nIGluIHRoZSBuZWNlc3Nhcnkgd29yayB0byBtYWtlIHN1cmUgdGhhdCB3ZSBkZWxpdmVyIHRoZSBwcm9qZWN0IG9uIHRpbWUuXG4gICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICA8VGV4dCBtYj17M30+XG4gICAgICAgICAgICAgICAgV2hpbGUgSSBoYXZlIGZ1bGwgc3RhY2sgSmF2YVNjcmlwdCBkZXZlbG9wbWVudMKgZXhwZXJpZW5jZSwgbXkgZm9ydGUgaXMgZnJvbnRlbmQgZGV2ZWxvcG1lbnQuIEkgaGF2ZSBleHBlcmllbmNlIHJlc29sdmluZyB3ZWIgYWNjZXNzaWJpbGl0eSwgYnJvd3NlciBjb21wYXRpYmlsaXR5LCBhbmQgZnJvbnQtZW5kIHBlcmZvcm1pbmcgaXNzdWVzLiBJbiBhZGRpdGlvbiwgSSdtIGdvb2QgaW4gcmVzcG9uc2l2ZSB3ZWIgZGVzaWduIGFuZCBoYXZlIGRldmVsb3BlZCBhIHN0cm9uZyBleWUgZm9yIGRlc2lnbiB0aHJvdWdob3V0IG15IGV4cGVyaWVuY2XCoGFuZCBlZHVjYXRpb24uIEZ1cnRoZXJtb3JlLMKgIEkgYWxzbyBoYXZlIGV4cGVyaWVuY2XCoGluIGVuZC10by1lbmQgdGVzdGluZyB1c2luZyBDeXByZXNzLmlvIGFuZCB1bml0IHRlc3RpbmcgdXNpbmcgSmVzdC5cbiAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgIDxUZXh0IG1iPXszfT5cbiAgICAgICAgICAgICAgICBUbyBsZWFybiBtb3JlIGFib3V0IG1lLCBmZWVsIGZyZWUgdG8gY29udGFjdCBtZSwgPGEgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj17YG1haWx0bzoke2VtYWlsfWB9PmhlcmU8L2E+LlxuICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC00IHNvY2lhbC1tZWRpYS1jb250YWluZXItLWxpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImQtaW5saW5lLWJsb2NrIG1lLTNcIiB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPXtnaXRodWJMaW5rfT48aVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmEtYnJhbmRzIGZhLWdpdGh1YiBtZS0yXCI+PC9pPkdpdEh1YjwvYT5cbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZC1pbmxpbmUtYmxvY2tcIiB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPXtsaW5rZWRpbkxpbmt9PjxpXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmYS1icmFuZHMgZmEtbGlua2VkaW4gbWUtMlwiPjwvaT5MaW5rZWRJbjwvYT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5cbmZ1bmN0aW9uIFNraWxscyh7IHNraWxsU2VjdGlvbnMgfSkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwLTMnPlxuICAgICAgICAgICAge18ubWFwKHNraWxsU2VjdGlvbnMsIChza2lsbFNlY3Rpb24sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgeyBsYWJlbCwgc2tpbGxzIH0gPSBza2lsbFNlY3Rpb247XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtpbmRleCA+IDAgPyAnbXQtMycgOiBudWxsfT57bGFiZWx9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NraWxscy1ncmlkJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Xy5tYXAoc2tpbGxzLCBza2lsbCA9PiA8c3BhbiBjbGFzc05hbWU9J2J0biBidG4tc2Vjb25kYXJ5IGJ0bi1zbSBza2lsbCc+e3NraWxsfTwvc3Bhbj4pfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSl9XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn0iXSwibmFtZXMiOlsiXyIsIlJlYWN0IiwiSGVhZGluZyIsIlRleHQiLCJUb29sdGlwIiwiU3RhY2siLCJhYm91dERhdGEiLCJlbWFpbCIsImxpbmtlZGluTGluayIsImdpdGh1YkxpbmsiLCJBYm91dCIsInByb3BzIiwic2tpbGxzIiwic2tpbGxzTGFiZWwiLCJpbWFnZVNyYyIsInNlY3Rpb25IZWFkaW5nIiwiZGl2IiwiaWQiLCJjbGFzc05hbWUiLCJtYiIsInAiLCJhbGlnbiIsImp1c3RpZnkiLCJkaXJlY3Rpb24iLCJzcGFjaW5nIiwibWFwIiwic2tpbGxJdGVtIiwiaW5kZXgiLCJjYXRlZ29yeSIsInNlY3Rpb25zIiwiaGFzQXJyb3ciLCJsYWJlbCIsIlNraWxscyIsInNraWxsU2VjdGlvbnMiLCJidXR0b24iLCJzcGFuIiwiaSIsImltZyIsInNyYyIsImFsdCIsIkFib3V0VGV4dCIsImZvbnRTaXplIiwiYSIsInRhcmdldCIsImhyZWYiLCJza2lsbFNlY3Rpb24iLCJGcmFnbWVudCIsInNraWxsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/About.jsx\n"));

/***/ })

});