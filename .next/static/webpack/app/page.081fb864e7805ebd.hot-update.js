"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/components/home/BrandsSection.tsx":
/*!***********************************************!*\
  !*** ./src/components/home/BrandsSection.tsx ***!
  \***********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/client/app-dir/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst generateSlug = (name)=>{\n    return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');\n};\nconst brands = [\n    {\n        name: 'ABB',\n        logo: '/images/brands/ABB-brand1.png'\n    },\n    {\n        name: 'Baumer',\n        logo: '/images/brands/Baumer-brand.png'\n    },\n    {\n        name: 'Haulotte',\n        logo: '/images/brands/LOGO_HAULOTTE_.png'\n    },\n    {\n        name: 'Omron',\n        logo: '/images/brands/Omron-Logo-brands.png'\n    },\n    {\n        name: 'Pepperl+Fuchs',\n        logo: '/images/brands/Pepperl+Fuchs-logo-brands.jpg'\n    },\n    {\n        name: 'Siemens',\n        logo: '/images/brands/Siemens-logo-brands.jpg'\n    },\n    {\n        name: 'Schneider Electric',\n        logo: '/images/brands/schneider-logo-brands.jpg'\n    },\n    {\n        name: 'Semikron',\n        logo: '/images/brands/semikron.jpg'\n    }\n];\nconst BrandsSection = ()=>{\n    _s();\n    const scrollRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)({\n        \"BrandsSection.useEffect\": ()=>{\n            const handleScroll = {\n                \"BrandsSection.useEffect.handleScroll\": ()=>{\n                    const element = scrollRef.current;\n                    if (!element) return;\n                    const rect = element.getBoundingClientRect();\n                    const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;\n                    if (isVisible) {\n                        element.classList.add('animate-fade-in');\n                    }\n                }\n            }[\"BrandsSection.useEffect.handleScroll\"];\n            window.addEventListener('scroll', handleScroll);\n            handleScroll();\n            return ({\n                \"BrandsSection.useEffect\": ()=>window.removeEventListener('scroll', handleScroll)\n            })[\"BrandsSection.useEffect\"];\n        }\n    }[\"BrandsSection.useEffect\"], []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"py-16 bg-gray-50\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container mx-auto px-4\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"text-center mb-12\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: \"text-3xl md:text-4xl font-bold text-primary mb-4\",\n                            children: \"Nos Partenaires\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\OMEN\\\\Downloads\\\\tisautomation-main\\\\src\\\\components\\\\home\\\\BrandsSection.tsx\",\n                            lineNumber: 48,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-gray-600 max-w-2xl mx-auto\",\n                            children: \"Nous collaborons avec les plus grandes marques de l'industrie pour vous offrir des solutions d'excellence\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\OMEN\\\\Downloads\\\\tisautomation-main\\\\src\\\\components\\\\home\\\\BrandsSection.tsx\",\n                            lineNumber: 51,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\OMEN\\\\Downloads\\\\tisautomation-main\\\\src\\\\components\\\\home\\\\BrandsSection.tsx\",\n                    lineNumber: 47,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    ref: scrollRef,\n                    className: \"grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 opacity-0 translate-y-8 transition-all duration-1000\",\n                    children: brands.map((brand)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: \"/brands/\".concat(generateSlug(brand.name)),\n                            className: \"group relative bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"relative w-full h-32 overflow-hidden\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                        src: brand.logo,\n                                        alt: \"\".concat(brand.name, \" logo\"),\n                                        fill: true,\n                                        className: \"object-contain grayscale transition-all duration-300 group-hover:grayscale-0 group-hover:scale-105\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\OMEN\\\\Downloads\\\\tisautomation-main\\\\src\\\\components\\\\home\\\\BrandsSection.tsx\",\n                                        lineNumber: 67,\n                                        columnNumber: 17\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\OMEN\\\\Downloads\\\\tisautomation-main\\\\src\\\\components\\\\home\\\\BrandsSection.tsx\",\n                                    lineNumber: 66,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-all duration-300 rounded-xl\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\OMEN\\\\Downloads\\\\tisautomation-main\\\\src\\\\components\\\\home\\\\BrandsSection.tsx\",\n                                    lineNumber: 74,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, brand.name, true, {\n                            fileName: \"C:\\\\Users\\\\OMEN\\\\Downloads\\\\tisautomation-main\\\\src\\\\components\\\\home\\\\BrandsSection.tsx\",\n                            lineNumber: 61,\n                            columnNumber: 13\n                        }, undefined))\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\OMEN\\\\Downloads\\\\tisautomation-main\\\\src\\\\components\\\\home\\\\BrandsSection.tsx\",\n                    lineNumber: 56,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\OMEN\\\\Downloads\\\\tisautomation-main\\\\src\\\\components\\\\home\\\\BrandsSection.tsx\",\n            lineNumber: 46,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\OMEN\\\\Downloads\\\\tisautomation-main\\\\src\\\\components\\\\home\\\\BrandsSection.tsx\",\n        lineNumber: 45,\n        columnNumber: 5\n    }, undefined);\n};\n_s(BrandsSection, \"P14GFulhWAl/Oec4Pk4QeBwKyr0=\");\n_c = BrandsSection;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BrandsSection);\nvar _c;\n$RefreshReg$(_c, \"BrandsSection\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2hvbWUvQnJhbmRzU2VjdGlvbi50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBRStCO0FBQ0Y7QUFDYTtBQUUxQyxNQUFNSSxlQUFlLENBQUNDO0lBQ3BCLE9BQU9BLEtBQUtDLFdBQVcsR0FBR0MsT0FBTyxDQUFDLGVBQWUsS0FBS0EsT0FBTyxDQUFDLFlBQVk7QUFDNUU7QUFFQSxNQUFNQyxTQUFTO0lBQ2I7UUFBRUgsTUFBTTtRQUFPSSxNQUFNO0lBQWdDO0lBQ3JEO1FBQUVKLE1BQU07UUFBVUksTUFBTTtJQUFrQztJQUMxRDtRQUFFSixNQUFNO1FBQVlJLE1BQU07SUFBb0M7SUFDOUQ7UUFBRUosTUFBTTtRQUFTSSxNQUFNO0lBQXVDO0lBQzlEO1FBQUVKLE1BQU07UUFBaUJJLE1BQU07SUFBK0M7SUFDOUU7UUFBRUosTUFBTTtRQUFXSSxNQUFNO0lBQXlDO0lBQ2xFO1FBQUVKLE1BQU07UUFBc0JJLE1BQU07SUFBMkM7SUFDL0U7UUFBRUosTUFBTTtRQUFZSSxNQUFNO0lBQThCO0NBQ3pEO0FBRUQsTUFBTUMsZ0JBQWdCOztJQUNwQixNQUFNQyxZQUFZUiw2Q0FBTUEsQ0FBaUI7SUFFekNELGdEQUFTQTttQ0FBQztZQUNSLE1BQU1VO3dEQUFlO29CQUNuQixNQUFNQyxVQUFVRixVQUFVRyxPQUFPO29CQUNqQyxJQUFJLENBQUNELFNBQVM7b0JBRWQsTUFBTUUsT0FBT0YsUUFBUUcscUJBQXFCO29CQUMxQyxNQUFNQyxZQUFZRixLQUFLRyxHQUFHLEdBQUdDLE9BQU9DLFdBQVcsSUFBSUwsS0FBS00sTUFBTSxJQUFJO29CQUVsRSxJQUFJSixXQUFXO3dCQUNiSixRQUFRUyxTQUFTLENBQUNDLEdBQUcsQ0FBQztvQkFDeEI7Z0JBQ0Y7O1lBRUFKLE9BQU9LLGdCQUFnQixDQUFDLFVBQVVaO1lBQ2xDQTtZQUVBOzJDQUFPLElBQU1PLE9BQU9NLG1CQUFtQixDQUFDLFVBQVViOztRQUNwRDtrQ0FBRyxFQUFFO0lBRUwscUJBQ0UsOERBQUNjO1FBQVFDLFdBQVU7a0JBQ2pCLDRFQUFDQztZQUFJRCxXQUFVOzs4QkFDYiw4REFBQ0M7b0JBQUlELFdBQVU7O3NDQUNiLDhEQUFDRTs0QkFBR0YsV0FBVTtzQ0FBbUQ7Ozs7OztzQ0FHakUsOERBQUNHOzRCQUFFSCxXQUFVO3NDQUFrQzs7Ozs7Ozs7Ozs7OzhCQUtqRCw4REFBQ0M7b0JBQ0NHLEtBQUtwQjtvQkFDTGdCLFdBQVU7OEJBRVRuQixPQUFPd0IsR0FBRyxDQUFDLENBQUNDLHNCQUNYLDhEQUFDaEMsa0RBQUlBOzRCQUVIaUMsTUFBTSxXQUFvQyxPQUF6QjlCLGFBQWE2QixNQUFNNUIsSUFBSTs0QkFDeENzQixXQUFVOzs4Q0FFViw4REFBQ0M7b0NBQUlELFdBQVU7OENBQ2IsNEVBQUMzQixrREFBS0E7d0NBQ0ptQyxLQUFLRixNQUFNeEIsSUFBSTt3Q0FDZjJCLEtBQUssR0FBYyxPQUFYSCxNQUFNNUIsSUFBSSxFQUFDO3dDQUNuQmdDLElBQUk7d0NBQ0pWLFdBQVU7Ozs7Ozs7Ozs7OzhDQUdkLDhEQUFDQztvQ0FBSUQsV0FBVTs7Ozs7OzsyQkFaVk0sTUFBTTVCLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1CN0I7R0EzRE1LO0tBQUFBO0FBNkROLGlFQUFlQSxhQUFhQSxFQUFDIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXE9NRU5cXERvd25sb2Fkc1xcdGlzYXV0b21hdGlvbi1tYWluXFxzcmNcXGNvbXBvbmVudHNcXGhvbWVcXEJyYW5kc1NlY3Rpb24udHN4Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcblxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBnZW5lcmF0ZVNsdWcgPSAobmFtZTogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgcmV0dXJuIG5hbWUudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC9bXmEtejAtOV0rL2csICctJykucmVwbGFjZSgvKF4tfC0kKS9nLCAnJyk7XG59O1xuXG5jb25zdCBicmFuZHMgPSBbXG4gIHsgbmFtZTogJ0FCQicsIGxvZ286ICcvaW1hZ2VzL2JyYW5kcy9BQkItYnJhbmQxLnBuZycgfSxcbiAgeyBuYW1lOiAnQmF1bWVyJywgbG9nbzogJy9pbWFnZXMvYnJhbmRzL0JhdW1lci1icmFuZC5wbmcnIH0sXG4gIHsgbmFtZTogJ0hhdWxvdHRlJywgbG9nbzogJy9pbWFnZXMvYnJhbmRzL0xPR09fSEFVTE9UVEVfLnBuZycgfSxcbiAgeyBuYW1lOiAnT21yb24nLCBsb2dvOiAnL2ltYWdlcy9icmFuZHMvT21yb24tTG9nby1icmFuZHMucG5nJyB9LFxuICB7IG5hbWU6ICdQZXBwZXJsK0Z1Y2hzJywgbG9nbzogJy9pbWFnZXMvYnJhbmRzL1BlcHBlcmwrRnVjaHMtbG9nby1icmFuZHMuanBnJyB9LFxuICB7IG5hbWU6ICdTaWVtZW5zJywgbG9nbzogJy9pbWFnZXMvYnJhbmRzL1NpZW1lbnMtbG9nby1icmFuZHMuanBnJyB9LFxuICB7IG5hbWU6ICdTY2huZWlkZXIgRWxlY3RyaWMnLCBsb2dvOiAnL2ltYWdlcy9icmFuZHMvc2NobmVpZGVyLWxvZ28tYnJhbmRzLmpwZycgfSxcbiAgeyBuYW1lOiAnU2VtaWtyb24nLCBsb2dvOiAnL2ltYWdlcy9icmFuZHMvc2VtaWtyb24uanBnJyB9XG5dO1xuXG5jb25zdCBCcmFuZHNTZWN0aW9uID0gKCkgPT4ge1xuICBjb25zdCBzY3JvbGxSZWYgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgaGFuZGxlU2Nyb2xsID0gKCkgPT4ge1xuICAgICAgY29uc3QgZWxlbWVudCA9IHNjcm9sbFJlZi5jdXJyZW50O1xuICAgICAgaWYgKCFlbGVtZW50KSByZXR1cm47XG5cbiAgICAgIGNvbnN0IHJlY3QgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgY29uc3QgaXNWaXNpYmxlID0gcmVjdC50b3AgPCB3aW5kb3cuaW5uZXJIZWlnaHQgJiYgcmVjdC5ib3R0b20gPj0gMDtcblxuICAgICAgaWYgKGlzVmlzaWJsZSkge1xuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2FuaW1hdGUtZmFkZS1pbicpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaGFuZGxlU2Nyb2xsKTtcbiAgICBoYW5kbGVTY3JvbGwoKTtcblxuICAgIHJldHVybiAoKSA9PiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaGFuZGxlU2Nyb2xsKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicHktMTYgYmctZ3JheS01MFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBweC00XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbWItMTJcIj5cbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0zeGwgbWQ6dGV4dC00eGwgZm9udC1ib2xkIHRleHQtcHJpbWFyeSBtYi00XCI+XG4gICAgICAgICAgICBOb3MgUGFydGVuYWlyZXNcbiAgICAgICAgICA8L2gyPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheS02MDAgbWF4LXctMnhsIG14LWF1dG9cIj5cbiAgICAgICAgICAgIE5vdXMgY29sbGFib3JvbnMgYXZlYyBsZXMgcGx1cyBncmFuZGVzIG1hcnF1ZXMgZGUgbCdpbmR1c3RyaWUgcG91ciB2b3VzIG9mZnJpciBkZXMgc29sdXRpb25zIGQnZXhjZWxsZW5jZVxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBcbiAgICAgICAgICByZWY9e3Njcm9sbFJlZn1cbiAgICAgICAgICBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0yIG1kOmdyaWQtY29scy0zIGxnOmdyaWQtY29scy00IGdhcC04IG9wYWNpdHktMCB0cmFuc2xhdGUteS04IHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTEwMDBcIlxuICAgICAgICA+XG4gICAgICAgICAge2JyYW5kcy5tYXAoKGJyYW5kKSA9PiAoXG4gICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICBrZXk9e2JyYW5kLm5hbWV9XG4gICAgICAgICAgICAgIGhyZWY9e2AvYnJhbmRzLyR7Z2VuZXJhdGVTbHVnKGJyYW5kLm5hbWUpfWB9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImdyb3VwIHJlbGF0aXZlIGJnLXdoaXRlIHAtNiByb3VuZGVkLXhsIHNoYWRvdy1zbSBob3ZlcjpzaGFkb3ctbGcgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSB3LWZ1bGwgaC0zMiBvdmVyZmxvdy1oaWRkZW5cIj5cbiAgICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICAgIHNyYz17YnJhbmQubG9nb31cbiAgICAgICAgICAgICAgICAgIGFsdD17YCR7YnJhbmQubmFtZX0gbG9nb2B9XG4gICAgICAgICAgICAgICAgICBmaWxsXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJvYmplY3QtY29udGFpbiBncmF5c2NhbGUgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwIGdyb3VwLWhvdmVyOmdyYXlzY2FsZS0wIGdyb3VwLWhvdmVyOnNjYWxlLTEwNVwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgaW5zZXQtMCBiZy13aGl0ZS8wIGdyb3VwLWhvdmVyOmJnLXdoaXRlLzUgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwIHJvdW5kZWQteGxcIiAvPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJyYW5kc1NlY3Rpb247XG4iXSwibmFtZXMiOlsiSW1hZ2UiLCJMaW5rIiwidXNlRWZmZWN0IiwidXNlUmVmIiwiZ2VuZXJhdGVTbHVnIiwibmFtZSIsInRvTG93ZXJDYXNlIiwicmVwbGFjZSIsImJyYW5kcyIsImxvZ28iLCJCcmFuZHNTZWN0aW9uIiwic2Nyb2xsUmVmIiwiaGFuZGxlU2Nyb2xsIiwiZWxlbWVudCIsImN1cnJlbnQiLCJyZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiaXNWaXNpYmxlIiwidG9wIiwid2luZG93IiwiaW5uZXJIZWlnaHQiLCJib3R0b20iLCJjbGFzc0xpc3QiLCJhZGQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJkaXYiLCJoMiIsInAiLCJyZWYiLCJtYXAiLCJicmFuZCIsImhyZWYiLCJzcmMiLCJhbHQiLCJmaWxsIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/home/BrandsSection.tsx\n"));

/***/ })

});