(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["second-page"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Roles.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Roles.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      roles: [],
      roleID: 0,
      roleName: "",
      roleSlug: "",
      nameState: null,
      slugState: null
    };
  },
  mounted: function mounted() {
    var _this = this;

    axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('http://127.0.0.1:8000/api/auth/role').then(function (response) {
      return _this.roles = response.data;
    });
  },
  methods: {
    reload: function reload() {
      this.$forceUpdate();
    },
    handleOk: function handleOk(bvModalEvent) {
      // Prevent modal from closing
      bvModalEvent.preventDefault(); // Trigger submit handler

      this.createClick();
    },
    checkFormValidity: function checkFormValidity() {
      var valid = this.$refs.form.checkValidity();
      this.nameState = valid;
      this.slugState = valid;
      return valid;
    },
    resetModal: function resetModal() {
      this.roleName = '';
      this.slugName = '';
      this.nameState = null;
      this.slugState = null;
    },
    editClick: function editClick(role) {
      this.$refs['modal-edit'].show();
      this.roleID = role.id;
      this.roleName = role.name;
      this.roleSlug = role.slug;
    },
    createClick: function createClick() {
      var _this2 = this;

      // Exit when the form isn't valid
      if (!this.checkFormValidity()) {
        return;
      }

      axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('http://127.0.0.1:8000/api/auth/role', {
        name: this.roleName,
        slug: this.roleSlug
      }).then(function (response) {
        // Hide the modal manually
        _this2.$nextTick(function () {
          _this2.$bvModal.hide('modal-create');
        });

        alert(response.data.message);
      });
    },
    updateClick: function updateClick() {
      var _this3 = this;

      // Exit when the form isn't valid
      if (!this.checkFormValidity()) {
        return;
      }

      axios__WEBPACK_IMPORTED_MODULE_1___default.a.put('http://127.0.0.1:8000/api/auth/role' + this.roleID, {
        name: this.roleName,
        slug: this.roleSlug
      }).then(function (response) {
        // Hide the modal manually
        _this3.$nextTick(function () {
          _this3.$bvModal.hide('modal-edit');
        });

        alert(response.data.message);
      });
    },
    deleteClick: function deleteClick(id) {
      var _this4 = this;

      if (!confirm("Are you sure?")) {
        return;
      }

      axios__WEBPACK_IMPORTED_MODULE_1___default.a["delete"]('http://127.0.0.1:8000/api/auth/role' + id).then(function (response) {
        _this4.refreshData();

        alert(response.data);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/SecondPage.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/SecondPage.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    BCard: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCard"],
    BCardText: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCardText"]
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Roles.vue?vue&type=template&id=f026f8fa&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Roles.vue?vue&type=template&id=f026f8fa& ***!
  \*******************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "b-button",
        {
          directives: [
            {
              name: "b-modal",
              rawName: "v-b-modal.modal-create",
              modifiers: { "modal-create": true },
            },
          ],
          staticClass: "btn btn-primary m-2 fload-end",
        },
        [_vm._v("\n Add Department\n")]
      ),
      _vm._v(" "),
      _c(
        "table",
        { staticClass: "table" },
        [
          _vm._m(0),
          _vm._v(" "),
          _vm._l(_vm.roles, function (role) {
            return _c("tbody", [
              _c("tr", [
                _c("th", { attrs: { scope: "row" } }, [
                  _vm._v(_vm._s(role.id)),
                ]),
                _vm._v(" "),
                _c("td", [_vm._v(_vm._s(role.name))]),
                _vm._v(" "),
                _c("td", [_vm._v(_vm._s(role.slug))]),
                _vm._v(" "),
                _c("td", [_vm._v(_vm._s(role.created_at))]),
                _vm._v(" "),
                _c(
                  "td",
                  [
                    _c(
                      "b-button",
                      {
                        staticClass: "btn btn-success mr-1",
                        attrs: { type: "button", id: "edit-button" },
                        on: {
                          click: function ($event) {
                            return _vm.editClick(role)
                          },
                        },
                      },
                      [
                        _c(
                          "svg",
                          {
                            staticClass: "bi bi-pencil-square",
                            attrs: {
                              xmlns: "http://www.w3.org/2000/svg",
                              width: "16",
                              height: "16",
                              fill: "currentColor",
                              viewBox: "0 0 16 16",
                            },
                          },
                          [
                            _c("path", {
                              attrs: {
                                d: "M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z",
                              },
                            }),
                            _vm._v(" "),
                            _c("path", {
                              attrs: {
                                "fill-rule": "evenodd",
                                d: "M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z",
                              },
                            }),
                          ]
                        ),
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "btn btn-danger mr-1",
                        attrs: { type: "button" },
                      },
                      [
                        _c(
                          "svg",
                          {
                            staticClass: "bi bi-trash-fill",
                            attrs: {
                              xmlns: "http://www.w3.org/2000/svg",
                              width: "16",
                              height: "16",
                              fill: "currentColor",
                              viewBox: "0 0 16 16",
                            },
                          },
                          [
                            _c("path", {
                              attrs: {
                                d: "M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z",
                              },
                            }),
                          ]
                        ),
                      ]
                    ),
                  ],
                  1
                ),
              ]),
            ])
          }),
        ],
        2
      ),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          ref: "create-modal",
          attrs: { id: "modal-create", title: "Create Role" },
          on: { ok: _vm.handleOk, hidden: _vm.resetModal },
        },
        [
          _c(
            "form",
            {
              ref: "form",
              on: {
                submit: function ($event) {
                  $event.stopPropagation()
                  $event.preventDefault()
                  return _vm.createClick($event)
                },
              },
            },
            [
              _c("div", { staticClass: "input-group mb-3" }, [
                _c("span", { staticClass: "input-group-text" }, [
                  _vm._v("Name"),
                ]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.roleName,
                      expression: "roleName",
                    },
                  ],
                  staticClass: "form-control",
                  attrs: { type: "text", state: _vm.nameState, required: "" },
                  domProps: { value: _vm.roleName },
                  on: {
                    input: function ($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.roleName = $event.target.value
                    },
                  },
                }),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "input-group mb-3" }, [
                _c("span", { staticClass: "input-group-text" }, [
                  _vm._v("Slug"),
                ]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.roleSlug,
                      expression: "roleSlug",
                    },
                  ],
                  staticClass: "form-control",
                  attrs: { type: "text", state: _vm.slugState, required: "" },
                  domProps: { value: _vm.roleSlug },
                  on: {
                    input: function ($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.roleSlug = $event.target.value
                    },
                  },
                }),
              ]),
            ]
          ),
        ]
      ),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          ref: "modal-edit",
          attrs: { id: "modal-edit", title: "Edit Role" },
          on: { ok: _vm.handleOk, hidden: _vm.resetModal },
        },
        [
          _c(
            "form",
            {
              ref: "form",
              on: {
                submit: function ($event) {
                  $event.stopPropagation()
                  $event.preventDefault()
                  return _vm.editClick($event)
                },
              },
            },
            [
              _c("div", { staticClass: "input-group mb-3" }, [
                _c("span", { staticClass: "input-group-text" }, [
                  _vm._v("Name"),
                ]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.roleName,
                      expression: "roleName",
                    },
                  ],
                  staticClass: "form-control",
                  attrs: { type: "text", state: _vm.nameState, required: "" },
                  domProps: { value: _vm.roleName },
                  on: {
                    input: function ($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.roleName = $event.target.value
                    },
                  },
                }),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "input-group mb-3" }, [
                _c("span", { staticClass: "input-group-text" }, [
                  _vm._v("Slug"),
                ]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.roleSlug,
                      expression: "roleSlug",
                    },
                  ],
                  staticClass: "form-control",
                  attrs: { type: "text", state: _vm.slugState, required: "" },
                  domProps: { value: _vm.roleSlug },
                  on: {
                    input: function ($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.roleSlug = $event.target.value
                    },
                  },
                }),
              ]),
            ]
          ),
        ]
      ),
    ],
    1
  )
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", { attrs: { scope: "col" } }, [_vm._v("#")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Name")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Slug")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Date")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Action")]),
      ]),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/SecondPage.vue?vue&type=template&id=0f0e7e4d&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/SecondPage.vue?vue&type=template&id=0f0e7e4d& ***!
  \************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "b-card",
    { attrs: { title: "Create Awesome 🙌" } },
    [
      _c("b-card-text", [_vm._v("This is your second page.")]),
      _vm._v(" "),
      _c("b-card-text", [
        _vm._v(
          "Chocolate sesame snaps pie carrot cake pastry pie lollipop muffin. Carrot cake dragée chupa chups jujubes. Macaroon liquorice cookie wafer tart marzipan bonbon. Gingerbread jelly-o dragée chocolate."
        ),
      ]),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/Roles.vue":
/*!******************************************!*\
  !*** ./resources/js/src/views/Roles.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Roles_vue_vue_type_template_id_f026f8fa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Roles.vue?vue&type=template&id=f026f8fa& */ "./resources/js/src/views/Roles.vue?vue&type=template&id=f026f8fa&");
/* harmony import */ var _Roles_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Roles.vue?vue&type=script&lang=js& */ "./resources/js/src/views/Roles.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Roles_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Roles_vue_vue_type_template_id_f026f8fa___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Roles_vue_vue_type_template_id_f026f8fa___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/Roles.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/Roles.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/js/src/views/Roles.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Roles_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Roles.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Roles.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Roles_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/Roles.vue?vue&type=template&id=f026f8fa&":
/*!*************************************************************************!*\
  !*** ./resources/js/src/views/Roles.vue?vue&type=template&id=f026f8fa& ***!
  \*************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Roles_vue_vue_type_template_id_f026f8fa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Roles.vue?vue&type=template&id=f026f8fa& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Roles.vue?vue&type=template&id=f026f8fa&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Roles_vue_vue_type_template_id_f026f8fa___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Roles_vue_vue_type_template_id_f026f8fa___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/SecondPage.vue":
/*!***********************************************!*\
  !*** ./resources/js/src/views/SecondPage.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SecondPage_vue_vue_type_template_id_0f0e7e4d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SecondPage.vue?vue&type=template&id=0f0e7e4d& */ "./resources/js/src/views/SecondPage.vue?vue&type=template&id=0f0e7e4d&");
/* harmony import */ var _SecondPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SecondPage.vue?vue&type=script&lang=js& */ "./resources/js/src/views/SecondPage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SecondPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SecondPage_vue_vue_type_template_id_0f0e7e4d___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SecondPage_vue_vue_type_template_id_0f0e7e4d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/SecondPage.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/SecondPage.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/src/views/SecondPage.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SecondPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./SecondPage.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/SecondPage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SecondPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/SecondPage.vue?vue&type=template&id=0f0e7e4d&":
/*!******************************************************************************!*\
  !*** ./resources/js/src/views/SecondPage.vue?vue&type=template&id=0f0e7e4d& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SecondPage_vue_vue_type_template_id_0f0e7e4d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./SecondPage.vue?vue&type=template&id=0f0e7e4d& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/SecondPage.vue?vue&type=template&id=0f0e7e4d&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SecondPage_vue_vue_type_template_id_0f0e7e4d___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SecondPage_vue_vue_type_template_id_0f0e7e4d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);