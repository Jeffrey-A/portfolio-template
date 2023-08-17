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

/***/ "./data/index.js":
/*!***********************!*\
  !*** ./data/index.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"aboutData\": function() { return /* binding */ aboutData; },\n/* harmony export */   \"heroData\": function() { return /* binding */ heroData; },\n/* harmony export */   \"navLinks\": function() { return /* binding */ navLinks; }\n/* harmony export */ });\nconst navLinks = [\n    {\n        text: \"About\",\n        url: \"/#about\"\n    },\n    {\n        text: \"Projects\",\n        url: \"/#projects\"\n    },\n    {\n        text: \"Articles\",\n        url: \"/#articles\"\n    },\n    {\n        text: \"Contact\",\n        url: \"/#contact\"\n    }\n];\nconst heroData = {\n    introText: \"Hi, my name is\",\n    name: \"Jeffrey Almanzar.\",\n    headline: \"I'm a software engineer that loves bringing design to life. While working at RubensteinTech, I've contributed to more than 8 live projects using React, Node and other technologies.\",\n    contactLink: {\n        text: \"Contact me\",\n        url: \"mailto:almanzarortizjeffrey@gmail.com\"\n    },\n    resumeLink: {\n        text: \"Resume\",\n        url: \"JeffreyA_Resume.pdf\"\n    }\n};\n// keep main content data in the about file\nconst aboutData = {\n    skills: [\n        {\n            category: \"Frontend Development\",\n            sections: [\n                {\n                    label: \"Proficient in:\",\n                    skills: [\n                        \"HTML\",\n                        \"CSS\",\n                        \"JavaScript\",\n                        \"Sass\",\n                        \"Bootstrap 5\",\n                        \"React JS\"\n                    ]\n                },\n                {\n                    label: \"Prior experience:\",\n                    skills: [\n                        \"TypeScript\",\n                        \"Redux\",\n                        \"Storybook\",\n                        \"jQuery\"\n                    ]\n                }\n            ]\n        },\n        {\n            category: \"Backend Development\",\n            sections: [\n                {\n                    label: \"Proficient in:\",\n                    skills: [\n                        \"Node JS\"\n                    ]\n                },\n                {\n                    label: \"Prior experience:\",\n                    skills: [\n                        \"Next JS\",\n                        \"Express JS\",\n                        \"PostgreSQL\",\n                        \"MySQL\",\n                        \"Firebase\",\n                        \"Python\",\n                        \"Java\"\n                    ]\n                }\n            ]\n        },\n        {\n            category: \"Testing Tools\",\n            sections: [\n                {\n                    label: \"Prior experience:\",\n                    skills: [\n                        \"Cypress.io\",\n                        \"Jest.io\",\n                        \"Enzyme\"\n                    ]\n                }\n            ]\n        }\n    ]\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9kYXRhL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFPLE1BQU1BLFdBQVc7SUFDcEI7UUFDSUMsTUFBTTtRQUNOQyxLQUFLO0lBQ1Q7SUFDQTtRQUNJRCxNQUFNO1FBQ05DLEtBQUs7SUFDVDtJQUNBO1FBQ0lELE1BQU07UUFDTkMsS0FBSztJQUNUO0lBQ0E7UUFDSUQsTUFBTTtRQUNOQyxLQUFLO0lBQ1Q7Q0FDSCxDQUFDO0FBRUssTUFBTUMsV0FBVztJQUNwQkMsV0FBVztJQUNYQyxNQUFNO0lBQ05DLFVBQVc7SUFDWEMsYUFBYTtRQUNUTixNQUFNO1FBQ05DLEtBQUs7SUFDVDtJQUNBTSxZQUFZO1FBQ1JQLE1BQU07UUFDTkMsS0FBSztJQUNUO0FBQ0osRUFBQztBQUdELDJDQUEyQztBQUNwQyxNQUFNTyxZQUFZO0lBQ3JCQyxRQUFRO1FBQ0o7WUFDSUMsVUFBVTtZQUNWQyxVQUFVO2dCQUNOO29CQUNJQyxPQUFPO29CQUNQSCxRQUFRO3dCQUNKO3dCQUNBO3dCQUNBO3dCQUNBO3dCQUNBO3dCQUNBO3FCQUNIO2dCQUNMO2dCQUNBO29CQUNJRyxPQUFPO29CQUNQSCxRQUFRO3dCQUNKO3dCQUNBO3dCQUNBO3dCQUNBO3FCQUNIO2dCQUNMO2FBQ0g7UUFDTDtRQUNBO1lBQ0lDLFVBQVU7WUFDVkMsVUFBVTtnQkFDTjtvQkFDSUMsT0FBTztvQkFDUEgsUUFBUTt3QkFDSjtxQkFDSDtnQkFDTDtnQkFDQTtvQkFDSUcsT0FBTztvQkFDUEgsUUFBUTt3QkFDSjt3QkFDQTt3QkFDQTt3QkFDQTt3QkFDQTt3QkFDQTt3QkFDQTtxQkFDSDtnQkFDTDthQUNIO1FBQ0w7UUFDQTtZQUNJQyxVQUFVO1lBQ1ZDLFVBQVU7Z0JBQ047b0JBQ0lDLE9BQU87b0JBQ1BILFFBQVE7d0JBQ0o7d0JBQ0E7d0JBQ0E7cUJBQ0g7Z0JBQ0w7YUFDSDtRQUNMO0tBQ0g7QUFDTCxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2RhdGEvaW5kZXguanM/MTAxZiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgbmF2TGlua3MgPSBbXG4gICAge1xuICAgICAgICB0ZXh0OiAnQWJvdXQnLFxuICAgICAgICB1cmw6ICcvI2Fib3V0J1xuICAgIH0sXG4gICAge1xuICAgICAgICB0ZXh0OiAnUHJvamVjdHMnLFxuICAgICAgICB1cmw6ICcvI3Byb2plY3RzJ1xuICAgIH0sXG4gICAge1xuICAgICAgICB0ZXh0OiAnQXJ0aWNsZXMnLFxuICAgICAgICB1cmw6ICcvI2FydGljbGVzJ1xuICAgIH0sXG4gICAge1xuICAgICAgICB0ZXh0OiAnQ29udGFjdCcsXG4gICAgICAgIHVybDogJy8jY29udGFjdCdcbiAgICB9LFxuXTtcblxuZXhwb3J0IGNvbnN0IGhlcm9EYXRhID0ge1xuICAgIGludHJvVGV4dDogJ0hpLCBteSBuYW1lIGlzJyxcbiAgICBuYW1lOiAnSmVmZnJleSBBbG1hbnphci4nLFxuICAgIGhlYWRsaW5lOiBgSSdtIGEgc29mdHdhcmUgZW5naW5lZXIgdGhhdCBsb3ZlcyBicmluZ2luZyBkZXNpZ24gdG8gbGlmZS4gV2hpbGUgd29ya2luZyBhdCBSdWJlbnN0ZWluVGVjaCwgSSd2ZSBjb250cmlidXRlZCB0byBtb3JlIHRoYW4gOCBsaXZlIHByb2plY3RzIHVzaW5nIFJlYWN0LCBOb2RlIGFuZCBvdGhlciB0ZWNobm9sb2dpZXMuYCxcbiAgICBjb250YWN0TGluazoge1xuICAgICAgICB0ZXh0OiAnQ29udGFjdCBtZScsXG4gICAgICAgIHVybDogJ21haWx0bzphbG1hbnphcm9ydGl6amVmZnJleUBnbWFpbC5jb20nXG4gICAgfSxcbiAgICByZXN1bWVMaW5rOiB7XG4gICAgICAgIHRleHQ6ICdSZXN1bWUnLFxuICAgICAgICB1cmw6ICdKZWZmcmV5QV9SZXN1bWUucGRmJ1xuICAgIH0sXG59XG5cblxuLy8ga2VlcCBtYWluIGNvbnRlbnQgZGF0YSBpbiB0aGUgYWJvdXQgZmlsZVxuZXhwb3J0IGNvbnN0IGFib3V0RGF0YSA9IHtcbiAgICBza2lsbHM6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgY2F0ZWdvcnk6ICdGcm9udGVuZCBEZXZlbG9wbWVudCcsXG4gICAgICAgICAgICBzZWN0aW9uczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdQcm9maWNpZW50IGluOicsXG4gICAgICAgICAgICAgICAgICAgIHNraWxsczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgJ0hUTUwnLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ0NTUycsXG4gICAgICAgICAgICAgICAgICAgICAgICAnSmF2YVNjcmlwdCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAnU2FzcycsXG4gICAgICAgICAgICAgICAgICAgICAgICAnQm9vdHN0cmFwIDUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ1JlYWN0IEpTJ1xuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnUHJpb3IgZXhwZXJpZW5jZTonLFxuICAgICAgICAgICAgICAgICAgICBza2lsbHM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICdUeXBlU2NyaXB0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdSZWR1eCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAnU3Rvcnlib29rJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdqUXVlcnknLFxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgY2F0ZWdvcnk6ICdCYWNrZW5kIERldmVsb3BtZW50JyxcbiAgICAgICAgICAgIHNlY3Rpb25zOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ1Byb2ZpY2llbnQgaW46JyxcbiAgICAgICAgICAgICAgICAgICAgc2tpbGxzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAnTm9kZSBKUycsXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdQcmlvciBleHBlcmllbmNlOicsXG4gICAgICAgICAgICAgICAgICAgIHNraWxsczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgJ05leHQgSlMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ0V4cHJlc3MgSlMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ1Bvc3RncmVTUUwnLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ015U1FMJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdGaXJlYmFzZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAnUHl0aG9uJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdKYXZhJyxcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnVGVzdGluZyBUb29scycsXG4gICAgICAgICAgICBzZWN0aW9uczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdQcmlvciBleHBlcmllbmNlOicsXG4gICAgICAgICAgICAgICAgICAgIHNraWxsczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgJ0N5cHJlc3MuaW8nLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ0plc3QuaW8nLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ0VuenltZScsXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXVxuICAgICAgICB9LFxuICAgIF1cbn1cbiJdLCJuYW1lcyI6WyJuYXZMaW5rcyIsInRleHQiLCJ1cmwiLCJoZXJvRGF0YSIsImludHJvVGV4dCIsIm5hbWUiLCJoZWFkbGluZSIsImNvbnRhY3RMaW5rIiwicmVzdW1lTGluayIsImFib3V0RGF0YSIsInNraWxscyIsImNhdGVnb3J5Iiwic2VjdGlvbnMiLCJsYWJlbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./data/index.js\n"));

/***/ })

});