webpackJsonp([1],{

/***/ "+LFA":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "+g7E":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__("NYxO");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase__ = __webpack_require__("Sazm");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'adminUser',
  computed: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["c" /* mapState */])(['userAuth', 'userCred'])),
  methods: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["b" /* mapMutations */])(['fbLogin', 'gitLogin', 'logout']))
});

/***/ }),

/***/ "/y1X":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const firebaseConfig = {
    apiKey: "AIzaSyCYZITY896y1KRSv85i9di_kceXJdigU8I",
    authDomain: "longcode-897ac.firebaseapp.com",
    databaseURL: "https://longcode-897ac.firebaseio.com",
    projectId: "longcode-897ac",
    storageBucket: "longcode-897ac.appspot.com",
    messagingSenderId: "500573545226"
};
/* harmony export (immutable) */ __webpack_exports__["a"] = firebaseConfig;


/***/ }),

/***/ "1U71":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._v("MyTask Page")])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "255g":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.userAuth && _vm.userData && _vm.scoreBest.length > 0)?_c('div',{staticClass:"row"},[_c('div',{staticClass:"scoreboard col-lg-9 col-md-11 col-sm-11 col-xs-11 mx-auto"},[_c('div',{staticClass:"scoreboard-best text-left"},[_vm._m(0),_vm._v(" "),_c('hr'),_vm._v(" "),_c('div',{staticClass:"row text-center"},[_c('transition',{attrs:{"name":"leader-box1-load"}},[_c('div',{staticClass:"col-md-4"},[_c('div',{staticClass:"card scoreboard-box-first"},[_c('div',{staticClass:"card-header"},[_c('strong',[_vm._v("1st PLACE "),_c('span',{staticStyle:{"color":"#EAC67A"}},[_c('i',{staticClass:"fa fa-trophy",attrs:{"aria-hidden":"true"}})])])]),_vm._v(" "),_c('div',{staticClass:"card-block"},[_c('div',{staticStyle:{"padding":"10px"}},[_c('img',{staticStyle:{"width":"30%","border-radius":"50%","border":"5px solid #18121E"},attrs:{"src":_vm.scoreBest[0].image}})]),_vm._v(" "),_c('div',[_c('strong',[_vm._v("TOTAL POINT :")]),_vm._v(" "),_c('strong',{staticStyle:{"color":"#EAC67A"}},[_vm._v(_vm._s(_vm.scoreBest[0].point))])]),_vm._v(" "),_c('hr',{staticStyle:{"border-color":"#f2f2f2"}}),_vm._v(" "),_c('div',{staticStyle:{"padding-bottom":"10px"}},[_c('strong',{staticStyle:{"color":"#DFDCE3","font-size":"15px"}},[_vm._v(_vm._s(_vm.scoreBest[0].name))])])])])])]),_vm._v(" "),_c('div',{staticClass:"col-md-4"},[_c('div',{staticClass:"card scoreboard-box-second"},[_vm._m(1),_vm._v(" "),_c('div',{staticClass:"card-block"},[_c('div',{staticStyle:{"padding":"10px"}},[_c('img',{staticStyle:{"width":"30%","border-radius":"50%","border":"5px solid #18121E"},attrs:{"src":_vm.scoreBest[1].image}})]),_vm._v(" "),_c('div',[_c('strong',[_vm._v("TOTAL POINT :")]),_vm._v(" "),_c('strong',{staticStyle:{"color":"#EAC67A"}},[_vm._v(_vm._s(_vm.scoreBest[1].point))])]),_vm._v(" "),_c('hr',{staticStyle:{"border-color":"#f2f2f2"}}),_vm._v(" "),_c('div',{staticStyle:{"padding-bottom":"10px"}},[_c('strong',{staticStyle:{"color":"#DFDCE3","font-size":"15px"}},[_vm._v(_vm._s(_vm.scoreBest[1].name))])])])])]),_vm._v(" "),_c('div',{staticClass:"col-md-4"},[_c('div',{staticClass:"card scoreboard-box-third"},[_vm._m(2),_vm._v(" "),_c('div',{staticClass:"card-block"},[_c('div',{staticStyle:{"padding":"10px"}},[_c('img',{staticStyle:{"width":"30%","border-radius":"50%","border":"5px solid #18121E"},attrs:{"src":_vm.scoreBest[2].image}})]),_vm._v(" "),_c('div',[_c('strong',[_vm._v("TOTAL POINT :")]),_vm._v(" "),_c('strong',{staticStyle:{"color":"#EAC67A"}},[_vm._v(_vm._s(_vm.scoreBest[2].point))])]),_vm._v(" "),_c('hr',{staticStyle:{"border-color":"#f2f2f2"}}),_vm._v(" "),_c('div',{staticStyle:{"padding-bottom":"10px"}},[_c('strong',{staticStyle:{"color":"#DFDCE3","font-size":"15px"}},[_vm._v(_vm._s(_vm.scoreBest[2].name))])])])])])],1)]),_vm._v(" "),_c('hr'),_vm._v(" "),_c('div',{staticClass:"scoreboard-table text-left"},[_vm._m(3),_c('br'),_c('br'),_vm._v(" "),_c('table',{staticClass:"table"},[_vm._m(4),_vm._v(" "),_c('tbody',_vm._l((_vm.scoreBest),function(score,key){return _c('tr',[_c('td',{attrs:{"width":"10%"}},[_vm._v(_vm._s(key+1))]),_vm._v(" "),_c('td',{attrs:{"width":"80%"}},[_c('img',{staticStyle:{"width":"40px","border-radius":"50%","padding-right":"5px"},attrs:{"src":score.image}}),_vm._v(" "+_vm._s(score.name))]),_vm._v(" "),_c('td',{staticClass:"text-center",attrs:{"width":"10%"}},[_vm._v(_vm._s(score.point))])])}))])]),_vm._v(" "),_c('hr'),_c('br')])]):_vm._e()}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',[_c('strong',{staticStyle:{"color":"#233237"}},[_vm._v("TOP 3 USER")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"card-header"},[_c('strong',[_vm._v("2st PLACE")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"card-header"},[_c('strong',[_vm._v("3st PLACE")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',[_c('strong',{staticStyle:{"color":"#233237"}},[_vm._v("LEADER BOARD")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('thead',[_c('tr',[_c('th',{attrs:{"width":"10%"}},[_vm._v("#")]),_vm._v(" "),_c('th',{attrs:{"width":"80%"}},[_vm._v("User")]),_vm._v(" "),_c('th',{attrs:{"width":"10%"}},[_vm._v("Point")])])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "5XKD":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "IHZ5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__("NYxO");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'body',
  computed: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["c" /* mapState */])(['userAuth', 'userData'])),
  methods: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["b" /* mapMutations */])(['auth']))
});

/***/ }),

/***/ "JtNn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"app"}},[_c('transition',{attrs:{"name":"loading-transition"}},[_c('div',[_c('router-view',{attrs:{"name":"header"}}),_vm._v(" "),_c('router-view',{attrs:{"name":"body"}})],1)]),_vm._v(" "),_c('transition',{attrs:{"name":"loading-transition"}},[(_vm.userAuth && !_vm.userData)?_c('div',{staticClass:"page-loading"},[_c('div',{staticClass:"page-loading-fade"}),_vm._v(" "),_c('div',{staticClass:"page-loading-icon"},[_c('img',{attrs:{"src":__webpack_require__("T3rp")}})]),_vm._v(" "),_c('div',{staticClass:"page-loading-spiner"},[_c('i',{staticClass:"fa fa-circle-o-notch fa-spin fa-3x fa-fw"}),_c('br')]),_vm._v(" "),_c('div',{staticClass:"page-loading-label"},[_vm._v("\n        Loading...\n      ")])]):_vm._e()])],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "M1Ra":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__("NYxO");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase__ = __webpack_require__("Sazm");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'index',
  computed: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["c" /* mapState */])(['userAuth', 'userCred'])),
  methods: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["b" /* mapMutations */])(['fbLogin', 'gitLogin', 'logout']), {
    signin() {
      swal({
        title: "Log In to Continue",
        html: '<input id="swal-input1" class="swal2-input">' + '<input id="swal-input2" class="swal2-input">'
      });
    }
  })
});

/***/ }),

/***/ "M93x":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__ = __webpack_require__("xJD8");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_35722eaf_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_App_vue__ = __webpack_require__("JtNn");
function injectStyle (ssrContext) {
  __webpack_require__("rNjT")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_35722eaf_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_App_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "NHnr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__("7+uW");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App__ = __webpack_require__("M93x");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__router__ = __webpack_require__("YaEn");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__vuex_store__ = __webpack_require__("YtJ0");
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.





__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].config.productionTip = false;

/* eslint-disable no-new */
new __WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */]({
  store: __WEBPACK_IMPORTED_MODULE_3__vuex_store__["a" /* default */],
  el: '#app',
  router: __WEBPACK_IMPORTED_MODULE_2__router__["a" /* default */],
  template: '<App/>',
  components: { App: __WEBPACK_IMPORTED_MODULE_1__App__["a" /* default */] }
});

/***/ }),

/***/ "PLFC":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Index_vue__ = __webpack_require__("M1Ra");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_216566d6_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Index_vue__ = __webpack_require__("tdHE");
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_216566d6_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Index_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "Qzi5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'mytask'
});

/***/ }),

/***/ "RGFY":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__("NYxO");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'admin',
  computed: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["c" /* mapState */])(['userAuth', 'userData'])),
  methods: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["b" /* mapMutations */])(['auth']))
});

/***/ }),

/***/ "T1b9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_AdminUser_vue__ = __webpack_require__("+g7E");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2a6da9c4_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_AdminUser_vue__ = __webpack_require__("vcQf");
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_AdminUser_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2a6da9c4_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_AdminUser_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "T3rp":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDE0IDc5LjE1Njc5NywgMjAxNC8wOC8yMC0wOTo1MzowMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDowMTJmMDVkYi0wN2U2LWNkNGEtYWQyZS0wZDZhZDg0NDMwMzciIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RkM4QjRFNDFDN0E1MTFFN0E0RTY4NTUwRURGNDcyQzgiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RkM4QjRFNDBDN0E1MTFFN0E0RTY4NTUwRURGNDcyQzgiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NmQ4YTY5NDAtMTkxNS1iYTQ1LWJjM2QtOGQ0ODA1NzRkNjM2IiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6NmViNDYwYzYtYzc5Ny0xMWU3LThiZjct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"

/***/ }),

/***/ "T6AU":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__("NYxO");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'header',
  mounted() {
    $('.nav-link').on('click', function () {
      $('.navbar-collapse').collapse('hide');
    });
  },
  created() {
    // console.log(this.userAuth)
  },
  computed: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["c" /* mapState */])(['userAuth', 'userData'])),
  methods: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["b" /* mapMutations */])(['logout', 'fbLogin']))
});

/***/ }),

/***/ "TlOy":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANIAAADSCAIAAACw+wkVAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDE0IDc5LjE1Njc5NywgMjAxNC8wOC8yMC0wOTo1MzowMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RkM1QzgwMDhDN0EwMTFFNzk5NDZGMEEyNDVCMzk1QjkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RkM1QzgwMDdDN0EwMTFFNzk5NDZGMEEyNDVCMzk1QjkiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MjlBRDVGNDRCOUFGMTFFM0IwQUI5RjAxNzgxMTcwMDIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QTkyRTVFMUVCOUIyMTFFM0IwQUI5RjAxNzgxMTcwMDIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6j/6vtAAAfBElEQVR42uxdeV8U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"

/***/ }),

/***/ "YIvS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__("NYxO");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase__ = __webpack_require__("Sazm");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'adminTask',
  data() {
    return {
      tasks: null,
      taskName: null,
      taskDetail: null,
      taskInput: null,
      taskOutput: null
    };
  },
  computed: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["c" /* mapState */])(['userAuth', 'userCred'])),
  created() {
    this.taskLoad();
  },
  methods: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["b" /* mapMutations */])(['fbLogin', 'gitLogin', 'logout']), {
    taskLoad() {
      const this_ = this;
      var allTask = [];
      // this_.tasks = null
      __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.database().ref('tasks/').once('value', function (snapshot) {
        snapshot.forEach(currentTask => {
          const taskPush = currentTask.val();
          allTask.push(taskPush);
        });
        this_.tasks = allTask;
      });
    },
    taskRemove(id) {
      const this_ = this;
      var allTask = [];
      // this.tasks = null
      swal({
        title: 'Remove Task',
        text: 'คุณต้องการลบ Task นี้หรือไม่?',
        icon: 'warning',
        buttons: true,
        dangerMode: true
      }).then(willDelete => {
        if (willDelete) {
          __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.database().ref('/tasks').orderByChild('createdAt').equalTo(id).once('value').then(function (snapshot) {
            snapshot.forEach(function (childSnapshot) {
              __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.database().ref('/tasks').child(childSnapshot.key).remove().then(function () {
                swal("Remove Task", "คุณได้ลบ Task", "success");
                this_.taskLoad();
              });
            });
          });
        }
      });
    },
    taskAdd() {
      // Input split and filter
      this.taskInput = this.taskInput.split(',');
      var taskInputFilter = [];
      for (var i in this.taskInput) {
        taskInputFilter.push(this.taskInput[i].replace(/^\s+|\s+$/g, ""));
      }
      this.taskInput = taskInputFilter;

      var addTaskData = {
        'name': this.taskName,
        'detail': this.taskDetail,
        'input': this.taskInput,
        'output': this.taskOutput,
        'send:': 0,
        'pass': 0,
        'createdAt': __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.database.ServerValue.TIMESTAMP,
        'status': 'enable'
      };
      __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.database().ref('/tasks').push(addTaskData);
      swal("Added", "เพิ่ม Task เข้าสู่ระบบ", "success");
      this.taskLoad();
      this.taskName = null, this.taskDetail = null, this.taskInput = null, this.taskOutput = null;
      $('#admin-task-add').collapse('hide');
    }
  })
});

/***/ }),

/***/ "YaEn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__("7+uW");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__("/ocq");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Layout_Body__ = __webpack_require__("bV+u");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Layout_Header__ = __webpack_require__("gd1P");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Body_Index__ = __webpack_require__("PLFC");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_Body_Scoreboard__ = __webpack_require__("c309");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_Body_Mytask__ = __webpack_require__("r6YE");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_vuex__ = __webpack_require__("NYxO");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_firebase__ = __webpack_require__("Sazm");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_Backend_Admin__ = __webpack_require__("gb+z");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_Backend_AdminUser__ = __webpack_require__("T1b9");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_Backend_AdminTask__ = __webpack_require__("tfqW");
// System



// Layout



// Body







// Admin



__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]);
const router = new __WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]({
  mode: 'history',
  routes: [{
    path: '/',
    components: {
      header: __WEBPACK_IMPORTED_MODULE_3__components_Layout_Header__["a" /* default */],
      body: __WEBPACK_IMPORTED_MODULE_2__components_Layout_Body__["a" /* default */]
    },
    children: [{ path: '/', component: __WEBPACK_IMPORTED_MODULE_4__components_Body_Index__["a" /* default */], name: 'index' }, { path: '/scoreboard', component: __WEBPACK_IMPORTED_MODULE_5__components_Body_Scoreboard__["a" /* default */], name: 'scoreboard', meta: { requiresAuth: true } }, { path: '/mytask', component: __WEBPACK_IMPORTED_MODULE_6__components_Body_Mytask__["a" /* default */], name: 'mytask', meta: { requiresAuth: true } }, { path: '/admin', component: __WEBPACK_IMPORTED_MODULE_9__components_Backend_Admin__["a" /* default */], name: 'admin', meta: { requiresAuth: true, requiresAdmin: true }, children: [{ path: 'user', component: __WEBPACK_IMPORTED_MODULE_10__components_Backend_AdminUser__["a" /* default */], name: 'adminUser', meta: { requiresAdmin: true } }, { path: 'task', component: __WEBPACK_IMPORTED_MODULE_11__components_Backend_AdminTask__["a" /* default */], name: 'adminTask', meta: { requiresAdmin: true } }]
    }]
  }]
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    __WEBPACK_IMPORTED_MODULE_8_firebase___default.a.auth().onAuthStateChanged(function (user) {
      if (user) {
        next();
      } else {
        next({ path: '/' });
      }
    });
  } else if (to.matched.some(record => record.meta.requiresAdmin)) {
    __WEBPACK_IMPORTED_MODULE_8_firebase___default.a.auth().onAuthStateChanged(function (user) {
      if (user.permission > 2) {
        next();
      } else {
        next({ path: '/' });
      }
    });
  } else {
    next();
  }
});

// router.beforeEach((to, from, next) => {
//   mapMutations(['auth'])
//   next()
// })
/* harmony default export */ __webpack_exports__["a"] = (router);

/***/ }),

/***/ "YtJ0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__("7+uW");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__("NYxO");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__("Sazm");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config_firebase_config_js__ = __webpack_require__("/y1X");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_sweetalert__ = __webpack_require__("thjQ");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_sweetalert___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_sweetalert__);







__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* default */]);
__WEBPACK_IMPORTED_MODULE_2_firebase___default.a.initializeApp(__WEBPACK_IMPORTED_MODULE_3__config_firebase_config_js__["a" /* firebaseConfig */]);

// Tutorial
const state = {
    userAuth: null,
    userData: null
};
const mutations = {
    // Firebase auth state
    auth(state) {

        __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().onAuthStateChanged(function (user) {
            if (user) {
                state.userAuth = user;
                __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.database().ref('/users').orderByChild('email').equalTo(user.email).once('value').then(function (snapshot) {
                    if (!snapshot.val()) {
                        // Create user data in firebase
                        const userData = {
                            name: user.displayName,
                            email: user.email,
                            image: user.photoURL,
                            uid: user.uid,
                            point: 0,
                            permission: 1,
                            createdAt: __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.database.ServerValue.TIMESTAMP
                        };
                        __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.database().ref('/users').push(userData);
                        __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.database().ref('/users').orderByChild('email').equalTo(user.email).once('value').then(function (snapshot) {
                            for (var i in snapshot.val()) {
                                state.userData = snapshot.val()[i];
                            }
                        });
                    } else {
                        for (var i in snapshot.val()) {
                            state.userData = snapshot.val()[i];
                        }
                    }
                });
            }
        });
    },

    fbLogin(state) {
        __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().setPersistence(__WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth.Auth.Persistence.SESSION).then(function () {
            var provider = new __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth.FacebookAuthProvider();
            return __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().signInWithPopup(provider).then(function () {
                __WEBPACK_IMPORTED_MODULE_4_sweetalert___default()("Signed in", "คุณเข้าสู่ระบบด้วยบัญชี facebook", "success");
            });
        }).catch(function (error) {
            __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().fetchProvidersForEmail(error.email).then(providers => {
                if (providers == 'github.com') {
                    __WEBPACK_IMPORTED_MODULE_4_sweetalert___default()("Login failed.", "กรุณาเข้าสู่ระบบด้วยบัญชี github", "error");
                }
            });
        });
    },
    gitLogin(state) {
        if (!state.userAuth) {
            __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().setPersistence(__WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth.Auth.Persistence.SESSION).then(function () {
                var provider = new __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth.GithubAuthProvider();
                return __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().signInWithPopup(provider).then(function () {
                    __WEBPACK_IMPORTED_MODULE_4_sweetalert___default()("Signed in", "คุณเข้าสู่ระบบด้วยบัญชี github", "success");
                });
            }).catch(function (error) {
                __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().fetchProvidersForEmail(error.email).then(providers => {
                    if (providers == 'facebook.com') {
                        __WEBPACK_IMPORTED_MODULE_4_sweetalert___default()("Login failed", "กรุณาเข้าสู่ระบบด้วยบัญชี facebook", "error");
                    }
                });
            });
        }
    },
    logout(state) {
        if (state.userAuth) {
            __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().signOut().then(function () {
                __WEBPACK_IMPORTED_MODULE_4_sweetalert___default()("Logged out", "คุณได้ออกจากระบบแล้ว", "info");
            }).catch(function (error) {
                console.log(error);
            });
            state.userAuth = null;
            state.userData = null;
        }
    }
};

const store = new __WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* default */].Store({
    state,
    mutations
});

/* harmony default export */ __webpack_exports__["a"] = (store);

/***/ }),

/***/ "aaIl":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/brand.e459245.png";

/***/ }),

/***/ "ajLw":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[(_vm.userAuth && _vm.userData && _vm.userData.permission > 2)?_c('div',{staticClass:"row"},[_c('div',{staticClass:"admin col-lg-9 col-md-11 col-sm-11 col-xs-11 mx-auto"},[_c('div',{staticClass:"admin-panel text-left"},[_vm._m(0),_vm._v(" "),_c('hr'),_vm._v(" "),_c('div',{staticClass:"row text-center"},[_c('router-link',{staticClass:"col-md-6 mb-1",staticStyle:{"color":"#DFDCE3","text-decoration":"none"},attrs:{"to":{ name: 'adminUser'}}},[_c('div',{staticClass:"card admin-button",staticStyle:{"background":"#233237"}},[_c('div',{staticClass:"card-header"},[_c('strong',{staticStyle:{"text-decoration":"none"}},[_c('i',{staticClass:"fa fa-users",attrs:{"aria-hidden":"true"}}),_vm._v(" User Mangement")])])])]),_vm._v(" "),_c('router-link',{staticClass:"col-md-6 mt-1",staticStyle:{"color":"#233237","text-decoration":"none"},attrs:{"to":{ name: 'adminTask'}}},[_c('div',{staticClass:"card admin-button",staticStyle:{"background":"#EAC67A"}},[_c('div',{staticClass:"card-header"},[_c('strong',[_c('i',{staticClass:"fa fa-code",attrs:{"aria-hidden":"true"}}),_vm._v(" Task Mangement")])])])])],1)]),_vm._v(" "),_c('hr'),_vm._v(" "),_c('div',{staticClass:"admin-manage text-left"},[_c('div',{staticClass:"admin-manage-box"},[_c('router-view')],1)])])]):_vm._e()])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',[_c('strong',{staticStyle:{"color":"#233237"}},[_vm._v("ADMIN PANEL")])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "bV+u":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Body_vue__ = __webpack_require__("IHZ5");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_50f2c74a_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Body_vue__ = __webpack_require__("x9xX");
function injectStyle (ssrContext) {
  __webpack_require__("x2EI")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Body_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_50f2c74a_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Body_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "c309":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Scoreboard_vue__ = __webpack_require__("zjmh");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7a370a2c_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Scoreboard_vue__ = __webpack_require__("255g");
function injectStyle (ssrContext) {
  __webpack_require__("+LFA")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Scoreboard_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7a370a2c_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Scoreboard_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "fu9U":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('nav',{staticClass:"navbar navbar-expand-md fixed-top"},[_c('router-link',{staticClass:"navbar-brand",attrs:{"to":"/"}},[_c('img',{staticStyle:{"height":"40px"},attrs:{"src":__webpack_require__("aaIl")}})]),_vm._v(" "),_vm._m(0),_vm._v(" "),_c('div',{staticClass:"collapse navbar-collapse",attrs:{"id":"navbarSupportedContent"}},[_c('ul',{staticClass:"navbar-nav mr-auto"},[_c('li',{staticClass:"nav-item sm"},[(_vm.userData)?_c('div',{staticClass:"nav-profile",staticStyle:{"border-radius":"2px","margin-top":"5px","color":"#DFDCE3","font-size":"22px"}},[_c('strong',[_vm._v(_vm._s(_vm.userAuth.displayName))])]):_vm._e()]),_vm._v(" "),_c('li',{staticClass:"nav-item sm"},[(_vm.userData)?_c('div',{staticClass:"nav-point",staticStyle:{"border-radius":"2px","margin-top":"5px"}},[_c('span',[_c('img',{staticStyle:{"width":"25px","border-radius":"50%","padding-bottom":"4px"},attrs:{"src":__webpack_require__("twqq")}}),_vm._v(" "),_c('strong',[_vm._v(_vm._s(_vm.userData.point))])])]):_vm._e(),_vm._v(" "),_c('hr')]),_vm._v(" "),_c('li',{staticClass:"nav-item"},[_c('router-link',{staticClass:"nav-link",attrs:{"to":{ name: 'scoreboard'}}},[_c('strong',{class:{ 'disabled': !_vm.userAuth }},[_c('i',{staticClass:"fa fa-star",attrs:{"aria-hidden":"true"}}),_vm._v(" SCORE BOARD")])])],1),_vm._v(" "),_c('li',{staticClass:"nav-item"},[_c('router-link',{staticClass:"nav-link",attrs:{"to":{ name: 'mytask'}}},[_c('strong',{class:{ 'disabled': !_vm.userAuth }},[_c('i',{staticClass:"fa fa-code",attrs:{"aria-hidden":"true"}}),_vm._v(" MY TASK")])])],1),_vm._v(" "),_c('li',{staticClass:"nav-item sm"},[_c('router-link',{staticClass:"nav-link",attrs:{"to":{ name: 'index'}}},[_c('strong',{class:{ 'disabled': !_vm.userAuth }},[_vm._v(" OPTION")])])],1),_vm._v(" "),(_vm.userData && _vm.userData.permission > 2)?_c('li',{staticClass:"nav-item sm"},[_c('router-link',{staticClass:"nav-link",attrs:{"to":{ name: 'adminTask'}}},[_c('strong',[_vm._v(" ADMIN")])])],1):_vm._e(),_vm._v(" "),(_vm.userData)?_c('li',{staticClass:"nav-item sm"},[_c('hr'),_vm._v(" "),_c('a',{staticClass:"nav-link",staticStyle:{"cursor":"pointer"},on:{"click":_vm.logout}},[_c('strong',[_vm._v("SIGN OUT")])])]):_c('li',{staticClass:"nav-item sm"},[_c('hr'),_vm._v(" "),_c('a',{staticClass:"nav-link",staticStyle:{"cursor":"pointer"},on:{"click":_vm.fbLogin}},[_c('strong',[_vm._v("SIGN IN")])])])]),_vm._v(" "),(_vm.userData)?_c('ul',{staticClass:"form-inline my-2 my-lg-0"},[_c('li',{staticClass:"nav-item md"},[_c('a',{staticClass:"nav-link"},[_c('div',{staticClass:"nav-point"},[_c('img',{staticStyle:{"width":"38px","border-radius":"50%"},attrs:{"src":__webpack_require__("twqq")}}),_vm._v(" "),_c('span',[_vm._v(_vm._s(_vm.userData.point))])])])]),_vm._v(" "),_c('li',{staticClass:"nav-item dropdown md"},[_c('a',{staticClass:"nav-link",attrs:{"href":"#","id":"profile-dropdown","data-toggle":"dropdown","aria-haspopup":"false","aria-expanded":"false"}},[_c('div',{staticClass:"nav-profile"},[_c('img',{staticStyle:{"width":"38px","border-radius":"50%"},attrs:{"src":_vm.userAuth.photoURL}}),_vm._v(" "),_c('i',{staticClass:"fa fa-chevron-down",attrs:{"aria-hidden":"true"}})])]),_vm._v(" "),_c('div',{staticClass:"dropdown-menu dropdown-menu-right",attrs:{"aria-labelledby":"profile-dropdown"}},[_c('span',{staticClass:"dropdown-header"},[_c('strong',[_vm._v(" "+_vm._s(_vm.userAuth.displayName)+" ")])]),_vm._v(" "),_c('div',{staticClass:"dropdown-divider"}),_vm._v(" "),_c('span',{staticClass:"dropdown-item"},[_c('div',{staticClass:"nav-point"},[_c('span',[_c('img',{staticStyle:{"width":"25px","border-radius":"50%","padding-bottom":"4px"},attrs:{"src":__webpack_require__("twqq")}}),_vm._v(" "),_c('strong',[_vm._v(_vm._s(_vm.userData.point))])])])]),_vm._v(" "),_c('div',{staticClass:"dropdown-divider"}),_vm._v(" "),_c('a',{staticClass:"dropdown-item",attrs:{"href":"#"}},[_vm._v("OPTION")]),_vm._v(" "),(_vm.userData.permission > 2)?_c('router-link',{staticClass:"dropdown-item",attrs:{"to":{ name: 'adminTask'}}},[_vm._v("ADMIN")]):_vm._e(),_vm._v(" "),_c('div',{staticClass:"dropdown-divider"}),_vm._v(" "),_c('a',{staticClass:"dropdown-item",staticStyle:{"cursor":"pointer"},on:{"click":_vm.logout}},[_vm._v("SIGN OUT")])],1)])]):_c('ul',{staticClass:"form-inline my-2 my-lg-0 md"},[_vm._m(1),_vm._v(" "),_c('li',{staticClass:"nav-item dropdown"},[_vm._m(2),_vm._v(" "),_c('div',{staticClass:"dropdown-menu dropdown-menu-right",attrs:{"aria-labelledby":"profile-dropdown"}},[_c('a',{staticClass:"dropdown-item",staticStyle:{"cursor":"pointer"},on:{"click":_vm.fbLogin}},[_vm._v("SIGN IN")])])])])])],1)])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('button',{staticClass:"navbar-toggler",attrs:{"type":"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[_c('i',{staticClass:"fa fa-bars",attrs:{"aria-hidden":"true"}})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('li',{staticClass:"nav-item disabled"},[_c('a',{staticClass:"nav-link"},[_c('div',{staticClass:"nav-point"},[_c('img',{staticStyle:{"width":"38px","border-radius":"50%"},attrs:{"src":__webpack_require__("twqq")}}),_vm._v(" "),_c('span',[_vm._v("0")])])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('a',{staticClass:"nav-link",attrs:{"id":"profile-dropdown","data-toggle":"dropdown","aria-haspopup":"false","aria-expanded":"false"}},[_c('div',{staticClass:"nav-profile"},[_c('img',{staticStyle:{"width":"38px","border-radius":"50%"},attrs:{"src":__webpack_require__("TlOy")}}),_vm._v(" "),_c('i',{staticClass:"fa fa-chevron-down",attrs:{"aria-hidden":"true"}})])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "gb+z":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Admin_vue__ = __webpack_require__("RGFY");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1de7eea8_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Admin_vue__ = __webpack_require__("ajLw");
function injectStyle (ssrContext) {
  __webpack_require__("vPbZ")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Admin_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1de7eea8_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Admin_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "gd1P":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Header_vue__ = __webpack_require__("T6AU");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3ca6d6f0_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Header_vue__ = __webpack_require__("fu9U");
function injectStyle (ssrContext) {
  __webpack_require__("5XKD")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Header_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3ca6d6f0_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Header_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "r6YE":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Mytask_vue__ = __webpack_require__("Qzi5");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_59e60c16_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Mytask_vue__ = __webpack_require__("1U71");
function injectStyle (ssrContext) {
  __webpack_require__("u8Pa")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Mytask_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_59e60c16_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Mytask_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "rNjT":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "tdHE":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._v("\n  Index Page\n")])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "tfqW":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_AdminTask_vue__ = __webpack_require__("YIvS");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2a825124_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_AdminTask_vue__ = __webpack_require__("yLQV");
function injectStyle (ssrContext) {
  __webpack_require__("wBaD")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_AdminTask_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2a825124_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_AdminTask_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "twqq":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "u8Pa":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "vPbZ":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "vcQf":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._v("\n  [Admin] User Manager\n")])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "wBaD":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "x2EI":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "x9xX":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container-fluid"},[_c('router-view')],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "xJD8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__("NYxO");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'app',
  computed: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["c" /* mapState */])(['userAuth', 'userData'])),
  created() {
    // Auth autoload
    this.authLoad();
  },
  methods: {
    authLoad() {
      this.$store.commit('auth');
    }
  }
});

/***/ }),

/***/ "yLQV":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"admin-task"},[_vm._m(0),_vm._v(" "),_c('br'),_c('br'),_vm._v(" "),_c('div',{staticClass:"admin-task-add collapse",attrs:{"id":"admin-task-add"}},[_c('form',{on:{"submit":function($event){$event.preventDefault();_vm.taskAdd($event)}}},[_c('div',{staticClass:"form-group"},[_c('label',{attrs:{"for":"taskAddForm"}},[_vm._v("Title:")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.taskName),expression:"taskName"}],staticClass:"form-control",attrs:{"name":"taskName","type":"text","placeholder":"ex: ลองกรอกสิ.","required":""},domProps:{"value":(_vm.taskName)},on:{"input":function($event){if($event.target.composing){ return; }_vm.taskName=$event.target.value}}})]),_vm._v(" "),_c('div',{staticClass:"form-group"},[_c('label',[_vm._v("Detail:")]),_vm._v(" "),_c('textarea',{directives:[{name:"model",rawName:"v-model",value:(_vm.taskDetail),expression:"taskDetail"}],staticClass:"form-control",attrs:{"name":"taskDetail","rows":"3","placeholder":"ex: แสดงผลข้อมูลจากผลรวมที่ผู้ใช้กรอกไปสี่ครั้ง.","required":""},domProps:{"value":(_vm.taskDetail)},on:{"input":function($event){if($event.target.composing){ return; }_vm.taskDetail=$event.target.value}}})]),_vm._v(" "),_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-6"},[_c('div',{staticClass:"form-group"},[_c('label',[_vm._v("Input:")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.taskInput),expression:"taskInput"}],staticClass:"form-control",attrs:{"name":"taskInput","type":"text","placeholder":"ex: 1, 2, 3, 4 | ถ้ามี input หลายตัวให้คั่นด้วย ','","required":""},domProps:{"value":(_vm.taskInput)},on:{"input":function($event){if($event.target.composing){ return; }_vm.taskInput=$event.target.value}}})])]),_vm._v(" "),_c('div',{staticClass:"col-sm-6"},[_c('div',{staticClass:"form-group"},[_c('label',[_vm._v("Output:")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.taskOutput),expression:"taskOutput"}],staticClass:"form-control",attrs:{"name":"taskOutput","type":"text","placeholder":"ex: 11","required":""},domProps:{"value":(_vm.taskOutput)},on:{"input":function($event){if($event.target.composing){ return; }_vm.taskOutput=$event.target.value}}})])])]),_vm._v(" "),_c('button',{staticClass:"button",attrs:{"type":"submit"}},[_vm._v("Add task")]),_vm._v(" "),_c('br'),_c('br'),_c('hr')]),_vm._v(" "),_c('br'),_c('br')]),_vm._v(" "),_c('table',{staticClass:"table",staticStyle:{"clear":"both"}},[_vm._m(1),_vm._v(" "),_c('tbody',_vm._l((_vm.tasks),function(task,num){return _c('tr',[_c('td',{attrs:{"width":"10%"}},[_vm._v(_vm._s(num+1))]),_vm._v(" "),_c('td',{staticStyle:{"cursor":"pointer"},attrs:{"width":"75%","data-toggle":"collapse","data-target":'#' + task.createdAt,"aria-expanded":"false","aria-controls":"#admin-task-view"}},[_c('div',[_c('strong',[_vm._v(_vm._s(task.name))])]),_vm._v(" "),_c('div',{staticClass:"collapse",attrs:{"id":task.createdAt}},[_c('div',{staticClass:"fa-1x mt-1",staticStyle:{"color":"#595959"}},[_vm._v(_vm._s(task.detail))]),_vm._v(" "),_c('hr',{staticStyle:{"border":"0.5px solid #ccc","margin":"10px 0"}}),_vm._v(" "),_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-md-6"},[_c('div',{staticClass:"fa-1x mt-1"},[_vm._v("Input: "),_c('span',{staticStyle:{"color":"#595959"}},[_vm._v(_vm._s(task.input))])])]),_vm._v(" "),_c('div',{staticClass:"col-md-6"},[_c('div',{staticClass:"fa-1x mt-1"},[_vm._v("Output: "),_c('span',{staticStyle:{"color":"#595959"}},[_vm._v(_vm._s(task.output))])])])]),_vm._v(" "),_c('br')])]),_vm._v(" "),_c('td',{staticClass:"text-center",attrs:{"width":"15%"}},[_c('a',{staticStyle:{"color":"#D94B3F","cursor":"pointer"},on:{"click":function($event){_vm.taskRemove(task.createdAt)}}},[_c('i',{staticClass:"fa fa-2x fa-times",attrs:{"aria-hidden":"true"}})])])])}))]),_vm._v(" "),_c('br'),_vm._v(" "),_c('hr'),_vm._v(" "),_c('br')])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('strong',{staticStyle:{"color":"#D94B3F","cursor":"pointer"},attrs:{"data-toggle":"collapse","data-target":"#admin-task-add","aria-expanded":"false","aria-controls":"#admin-task-add"}},[_c('i',{staticClass:"fa fa-plus",attrs:{"aria-hidden":"true"}}),_vm._v(" Add task")])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('thead',[_c('tr',[_c('th',{attrs:{"width":"10%"}},[_vm._v("#")]),_vm._v(" "),_c('th',{attrs:{"width":"75%"}},[_vm._v("NAME")]),_vm._v(" "),_c('th',{staticClass:"text-center",attrs:{"width":"15%"}},[_vm._v("DELETE")])])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "zjmh":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__("NYxO");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase__ = __webpack_require__("Sazm");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'scoreboard',
    data() {
        return {
            scoreBest: []
        };
    },
    computed: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["c" /* mapState */])(['userAuth', 'userData'])),
    created() {
        this.scoreboardBest();
    },
    methods: {
        scoreboardBest() {
            const this_ = this;
            var allScore = [];
            __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.database().ref('users/').orderByChild('point').limitToLast(30).on('value', function (snapshot, error) {
                snapshot.forEach(resScore => {
                    const score = resScore.val();
                    allScore.push(score);
                });
                this_.scoreBest = allScore.reverse();
            });
        }
    }
});

/***/ })

},["NHnr"]);
//# sourceMappingURL=app.49c414b438c9c09164ed.js.map