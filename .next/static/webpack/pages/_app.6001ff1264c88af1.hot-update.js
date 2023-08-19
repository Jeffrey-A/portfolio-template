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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"aboutData\": function() { return /* binding */ aboutData; },\n/* harmony export */   \"email\": function() { return /* binding */ email; },\n/* harmony export */   \"githubLink\": function() { return /* binding */ githubLink; },\n/* harmony export */   \"heroData\": function() { return /* binding */ heroData; },\n/* harmony export */   \"linkedinLink\": function() { return /* binding */ linkedinLink; },\n/* harmony export */   \"navLinks\": function() { return /* binding */ navLinks; }\n/* harmony export */ });\nconst githubLink = \"https://github.com/Jeffrey-A\";\nconst linkedinLink = \"https://www.linkedin.com/in/jeffrey-almanzar/\";\nconst email = \"almanzarortizjeffrey@gmail.com\";\nconst navLinks = [\n    {\n        text: \"About\",\n        url: \"/#about\"\n    },\n    {\n        text: \"Projects\",\n        url: \"/#projects\"\n    },\n    {\n        text: \"Articles\",\n        url: \"/#articles\"\n    },\n    {\n        text: \"Contact\",\n        url: \"/#contact\"\n    }\n];\nconst heroData = {\n    introText: \"Hi, my name is\",\n    name: \"Jeffrey Almanzar.\",\n    headline: \"I'm a software engineer that loves bringing design to life. While working at RubensteinTech, I've contributed to more than 8 live projects using React, Node and other technologies.\",\n    contactLink: {\n        text: \"Contact me\",\n        url: \"mailto:almanzarortizjeffrey@gmail.com\"\n    },\n    resumeLink: {\n        text: \"Resume\",\n        url: \"JeffreyA_Resume.pdf\"\n    }\n};\n// update about text in components/About.jsx\nconst aboutData = {\n    sectionHeading: \"About\",\n    imageSrc: \"images/about-image.jpeg\",\n    skillsLabel: \"Primary Skills:\",\n    skills: [\n        {\n            category: \"Frontend Development\",\n            sections: [\n                {\n                    label: \"Proficient in:\",\n                    skills: [\n                        \"HTML\",\n                        \"CSS\",\n                        \"JavaScript\",\n                        \"Sass\",\n                        \"Bootstrap 5\",\n                        \"React JS\"\n                    ]\n                },\n                {\n                    label: \"Prior experience:\",\n                    skills: [\n                        \"TypeScript\",\n                        \"Redux\",\n                        \"Storybook\",\n                        \"jQuery\"\n                    ]\n                }\n            ]\n        },\n        {\n            category: \"Backend Development\",\n            sections: [\n                {\n                    label: \"Proficient in:\",\n                    skills: [\n                        \"Node JS\"\n                    ]\n                },\n                {\n                    label: \"Prior experience:\",\n                    skills: [\n                        \"Next JS\",\n                        \"Express JS\",\n                        \"PostgreSQL\",\n                        \"MySQL\",\n                        \"Firebase\",\n                        \"Python\",\n                        \"Java\"\n                    ]\n                }\n            ]\n        },\n        {\n            category: \"Testing Tools\",\n            sections: [\n                {\n                    label: \"Prior experience:\",\n                    skills: [\n                        \"Cypress.io\",\n                        \"Jest.io\",\n                        \"Enzyme\"\n                    ]\n                }\n            ]\n        },\n        {\n            category: \"Design Tools\",\n            sections: [\n                {\n                    label: \"Familiar with:\",\n                    skills: [\n                        \"Adobe XD\",\n                        \"Figma\"\n                    ]\n                }\n            ]\n        }\n    ]\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9kYXRhL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFPLE1BQU1BLGFBQWEsK0JBQStCO0FBQ2xELE1BQU1DLGVBQWUsZ0RBQWdEO0FBQ3JFLE1BQU1DLFFBQVEsaUNBQWlDO0FBRS9DLE1BQU1DLFdBQVc7SUFDcEI7UUFDSUMsTUFBTTtRQUNOQyxLQUFLO0lBQ1Q7SUFDQTtRQUNJRCxNQUFNO1FBQ05DLEtBQUs7SUFDVDtJQUNBO1FBQ0lELE1BQU07UUFDTkMsS0FBSztJQUNUO0lBQ0E7UUFDSUQsTUFBTTtRQUNOQyxLQUFLO0lBQ1Q7Q0FDSCxDQUFDO0FBRUssTUFBTUMsV0FBVztJQUNwQkMsV0FBVztJQUNYQyxNQUFNO0lBQ05DLFVBQVc7SUFDWEMsYUFBYTtRQUNUTixNQUFNO1FBQ05DLEtBQUs7SUFDVDtJQUNBTSxZQUFZO1FBQ1JQLE1BQU07UUFDTkMsS0FBSztJQUNUO0FBQ0osRUFBQztBQUdELDRDQUE0QztBQUNyQyxNQUFNTyxZQUFZO0lBQ3JCQyxnQkFBZ0I7SUFDaEJDLFVBQVU7SUFDVkMsYUFBYTtJQUNiQyxRQUFRO1FBQ0o7WUFDSUMsVUFBVTtZQUNWQyxVQUFVO2dCQUNOO29CQUNJQyxPQUFPO29CQUNQSCxRQUFRO3dCQUNKO3dCQUNBO3dCQUNBO3dCQUNBO3dCQUNBO3dCQUNBO3FCQUNIO2dCQUNMO2dCQUNBO29CQUNJRyxPQUFPO29CQUNQSCxRQUFRO3dCQUNKO3dCQUNBO3dCQUNBO3dCQUNBO3FCQUNIO2dCQUNMO2FBQ0g7UUFDTDtRQUNBO1lBQ0lDLFVBQVU7WUFDVkMsVUFBVTtnQkFDTjtvQkFDSUMsT0FBTztvQkFDUEgsUUFBUTt3QkFDSjtxQkFDSDtnQkFDTDtnQkFDQTtvQkFDSUcsT0FBTztvQkFDUEgsUUFBUTt3QkFDSjt3QkFDQTt3QkFDQTt3QkFDQTt3QkFDQTt3QkFDQTt3QkFDQTtxQkFDSDtnQkFDTDthQUNIO1FBQ0w7UUFDQTtZQUNJQyxVQUFVO1lBQ1ZDLFVBQVU7Z0JBQ047b0JBQ0lDLE9BQU87b0JBQ1BILFFBQVE7d0JBQ0o7d0JBQ0E7d0JBQ0E7cUJBQ0g7Z0JBQ0w7YUFDSDtRQUNMO1FBQ0E7WUFDSUMsVUFBVTtZQUNWQyxVQUFVO2dCQUNOO29CQUNJQyxPQUFPO29CQUNQSCxRQUFRO3dCQUNKO3dCQUNBO3FCQUNIO2dCQUNMO2FBQ0g7UUFDTDtLQUNIO0FBQ0wsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9kYXRhL2luZGV4LmpzPzEwMWYiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGdpdGh1YkxpbmsgPSAnaHR0cHM6Ly9naXRodWIuY29tL0plZmZyZXktQSc7XG5leHBvcnQgY29uc3QgbGlua2VkaW5MaW5rID0gJ2h0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9qZWZmcmV5LWFsbWFuemFyLyc7XG5leHBvcnQgY29uc3QgZW1haWwgPSAnYWxtYW56YXJvcnRpemplZmZyZXlAZ21haWwuY29tJztcblxuZXhwb3J0IGNvbnN0IG5hdkxpbmtzID0gW1xuICAgIHtcbiAgICAgICAgdGV4dDogJ0Fib3V0JyxcbiAgICAgICAgdXJsOiAnLyNhYm91dCdcbiAgICB9LFxuICAgIHtcbiAgICAgICAgdGV4dDogJ1Byb2plY3RzJyxcbiAgICAgICAgdXJsOiAnLyNwcm9qZWN0cydcbiAgICB9LFxuICAgIHtcbiAgICAgICAgdGV4dDogJ0FydGljbGVzJyxcbiAgICAgICAgdXJsOiAnLyNhcnRpY2xlcydcbiAgICB9LFxuICAgIHtcbiAgICAgICAgdGV4dDogJ0NvbnRhY3QnLFxuICAgICAgICB1cmw6ICcvI2NvbnRhY3QnXG4gICAgfSxcbl07XG5cbmV4cG9ydCBjb25zdCBoZXJvRGF0YSA9IHtcbiAgICBpbnRyb1RleHQ6ICdIaSwgbXkgbmFtZSBpcycsXG4gICAgbmFtZTogJ0plZmZyZXkgQWxtYW56YXIuJyxcbiAgICBoZWFkbGluZTogYEknbSBhIHNvZnR3YXJlIGVuZ2luZWVyIHRoYXQgbG92ZXMgYnJpbmdpbmcgZGVzaWduIHRvIGxpZmUuIFdoaWxlIHdvcmtpbmcgYXQgUnViZW5zdGVpblRlY2gsIEkndmUgY29udHJpYnV0ZWQgdG8gbW9yZSB0aGFuIDggbGl2ZSBwcm9qZWN0cyB1c2luZyBSZWFjdCwgTm9kZSBhbmQgb3RoZXIgdGVjaG5vbG9naWVzLmAsXG4gICAgY29udGFjdExpbms6IHtcbiAgICAgICAgdGV4dDogJ0NvbnRhY3QgbWUnLFxuICAgICAgICB1cmw6ICdtYWlsdG86YWxtYW56YXJvcnRpemplZmZyZXlAZ21haWwuY29tJ1xuICAgIH0sXG4gICAgcmVzdW1lTGluazoge1xuICAgICAgICB0ZXh0OiAnUmVzdW1lJyxcbiAgICAgICAgdXJsOiAnSmVmZnJleUFfUmVzdW1lLnBkZidcbiAgICB9LFxufVxuXG5cbi8vIHVwZGF0ZSBhYm91dCB0ZXh0IGluIGNvbXBvbmVudHMvQWJvdXQuanN4XG5leHBvcnQgY29uc3QgYWJvdXREYXRhID0ge1xuICAgIHNlY3Rpb25IZWFkaW5nOiAnQWJvdXQnLFxuICAgIGltYWdlU3JjOiAnaW1hZ2VzL2Fib3V0LWltYWdlLmpwZWcnLFxuICAgIHNraWxsc0xhYmVsOiAnUHJpbWFyeSBTa2lsbHM6JyxcbiAgICBza2lsbHM6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgY2F0ZWdvcnk6ICdGcm9udGVuZCBEZXZlbG9wbWVudCcsXG4gICAgICAgICAgICBzZWN0aW9uczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdQcm9maWNpZW50IGluOicsXG4gICAgICAgICAgICAgICAgICAgIHNraWxsczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgJ0hUTUwnLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ0NTUycsXG4gICAgICAgICAgICAgICAgICAgICAgICAnSmF2YVNjcmlwdCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAnU2FzcycsXG4gICAgICAgICAgICAgICAgICAgICAgICAnQm9vdHN0cmFwIDUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ1JlYWN0IEpTJ1xuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnUHJpb3IgZXhwZXJpZW5jZTonLFxuICAgICAgICAgICAgICAgICAgICBza2lsbHM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICdUeXBlU2NyaXB0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdSZWR1eCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAnU3Rvcnlib29rJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdqUXVlcnknLFxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgY2F0ZWdvcnk6ICdCYWNrZW5kIERldmVsb3BtZW50JyxcbiAgICAgICAgICAgIHNlY3Rpb25zOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ1Byb2ZpY2llbnQgaW46JyxcbiAgICAgICAgICAgICAgICAgICAgc2tpbGxzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAnTm9kZSBKUycsXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdQcmlvciBleHBlcmllbmNlOicsXG4gICAgICAgICAgICAgICAgICAgIHNraWxsczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgJ05leHQgSlMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ0V4cHJlc3MgSlMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ1Bvc3RncmVTUUwnLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ015U1FMJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdGaXJlYmFzZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAnUHl0aG9uJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdKYXZhJyxcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnVGVzdGluZyBUb29scycsXG4gICAgICAgICAgICBzZWN0aW9uczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdQcmlvciBleHBlcmllbmNlOicsXG4gICAgICAgICAgICAgICAgICAgIHNraWxsczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgJ0N5cHJlc3MuaW8nLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ0plc3QuaW8nLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ0VuenltZScsXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBjYXRlZ29yeTogJ0Rlc2lnbiBUb29scycsXG4gICAgICAgICAgICBzZWN0aW9uczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdGYW1pbGlhciB3aXRoOicsXG4gICAgICAgICAgICAgICAgICAgIHNraWxsczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgJ0Fkb2JlIFhEJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdGaWdtYScsXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXVxuICAgICAgICB9LFxuICAgIF1cbn1cbiJdLCJuYW1lcyI6WyJnaXRodWJMaW5rIiwibGlua2VkaW5MaW5rIiwiZW1haWwiLCJuYXZMaW5rcyIsInRleHQiLCJ1cmwiLCJoZXJvRGF0YSIsImludHJvVGV4dCIsIm5hbWUiLCJoZWFkbGluZSIsImNvbnRhY3RMaW5rIiwicmVzdW1lTGluayIsImFib3V0RGF0YSIsInNlY3Rpb25IZWFkaW5nIiwiaW1hZ2VTcmMiLCJza2lsbHNMYWJlbCIsInNraWxscyIsImNhdGVnb3J5Iiwic2VjdGlvbnMiLCJsYWJlbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./data/index.js\n"));

/***/ })

});