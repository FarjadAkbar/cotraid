(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["second-page"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Roles.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Roles.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var D_xampp_htdocs_coding_vueFIver_starter_kit_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_find_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.find-index.js */ "./node_modules/core-js/modules/es.array.find-index.js");
/* harmony import */ var core_js_modules_es_array_find_index_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_index_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.splice.js */ "./node_modules/core-js/modules/es.array.splice.js");
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_3__);




//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: {
    Roles: Roles
  },
  data: function data() {
    return {
      headers: [{
        text: 'Id',
        value: 'id'
      }, {
        text: 'Name',
        value: 'Name'
      }, {
        text: 'Email',
        value: 'details',
        sortable: false,
        width: "100"
      }, {
        text: 'Created At',
        value: 'url',
        name: 'url',
        width: "180"
      }, {
        text: 'Action',
        value: 'actions',
        sortable: false
      }],
      items: [],
      dialog: false,
      editedItem: {}
    };
  },
  mounted: function mounted() {
    this.loadItems();
  },
  methods: {
    showEditDialog: function showEditDialog(item) {
      this.editedItem = item || {};
      this.dialog = !this.dialog;
    },
    loadItems: function loadItems() {
      var _this = this;

      this.items = [];
      axios.get("http://127.0.0.1:8000/api/auth/role", {
        headers: {
          Authorization: "XSRF-TOKEN= " + apiToken
        }
      }).then(function (response) {
        _this.items = response.data.records.map(function (item) {
          return Object(D_xampp_htdocs_coding_vueFIver_starter_kit_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
            id: item.id
          }, item.fields);
        });
      })["catch"](function (error) {
        console.log(error);
      });
    },
    saveItem: function saveItem(item) {
      var _this2 = this;

      /* this is used for both creating and updating API records
       the default method is POST for creating a new item */
      var method = "post";
      var url = "http://127.0.0.1:8000/api/auth/role";
      var id = item.id; // airtable API needs the data to be placed in fields object

      var data = {
        fields: item
      };

      if (id) {
        // if the item has an id, we're updating an existing item
        method = "patch";
        url = "http://127.0.0.1:8000/api/auth/role/".concat(id); // must remove id from the data for airtable patch to work

        delete data.fields.id;
      } // save the record


      axios[method](url, data, {
        headers: {
          Cookie: "XSRF-TOKEN=" + apiToken,
          "Content-Type": "application/json"
        }
      }).then(function (response) {
        if (response.data && response.data.id) {
          console.log(response.data); // add new item to state

          _this2.editedItem.id = response.data.id;

          if (!id) {
            // add the new item to items state
            _this2.items.push(_this2.editedItem);
          }

          _this2.editedItem = {};
        }

        _this2.dialog = !_this2.dialog;
      });
    },
    deleteItem: function deleteItem(item) {
      var _this3 = this;

      //console.log('deleteItem', item)
      var id = item.id;
      var idx = this.items.findIndex(function (item) {
        return item.id === id;
      });

      if (confirm('Are you sure you want to delete this?')) {
        /* not really deleting in API for demo */
        axios["delete"]("http://127.0.0.1:8000/api/auth/role/".concat(id), {
          headers: {
            Cookie: "XSRF-TOKEN=" + apiToken,
            "Content-Type": "application/json"
          }
        }).then(function (response) {
          _this3.items.splice(idx, 1);
        }); // this.items.splice(idx, 1)
      }
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

/***/ "./node_modules/core-js/modules/es.array.find-index.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.find-index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $findIndex = __webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").findIndex;
var addToUnscopables = __webpack_require__(/*! ../internals/add-to-unscopables */ "./node_modules/core-js/internals/add-to-unscopables.js");
var arrayMethodUsesToLength = __webpack_require__(/*! ../internals/array-method-uses-to-length */ "./node_modules/core-js/internals/array-method-uses-to-length.js");

var FIND_INDEX = 'findIndex';
var SKIPS_HOLES = true;

var USES_TO_LENGTH = arrayMethodUsesToLength(FIND_INDEX);

// Shouldn't skip holes
if (FIND_INDEX in []) Array(1)[FIND_INDEX](function () { SKIPS_HOLES = false; });

// `Array.prototype.findIndex` method
// https://tc39.github.io/ecma262/#sec-array.prototype.findindex
$({ target: 'Array', proto: true, forced: SKIPS_HOLES || !USES_TO_LENGTH }, {
  findIndex: function findIndex(callbackfn /* , that = undefined */) {
    return $findIndex(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables(FIND_INDEX);


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.map.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.map.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $map = __webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").map;
var arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ "./node_modules/core-js/internals/array-method-has-species-support.js");
var arrayMethodUsesToLength = __webpack_require__(/*! ../internals/array-method-uses-to-length */ "./node_modules/core-js/internals/array-method-uses-to-length.js");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('map');
// FF49- issue
var USES_TO_LENGTH = arrayMethodUsesToLength('map');

// `Array.prototype.map` method
// https://tc39.github.io/ecma262/#sec-array.prototype.map
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {
  map: function map(callbackfn /* , thisArg */) {
    return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.splice.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.splice.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ "./node_modules/core-js/internals/to-absolute-index.js");
var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/core-js/internals/to-integer.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var arraySpeciesCreate = __webpack_require__(/*! ../internals/array-species-create */ "./node_modules/core-js/internals/array-species-create.js");
var createProperty = __webpack_require__(/*! ../internals/create-property */ "./node_modules/core-js/internals/create-property.js");
var arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ "./node_modules/core-js/internals/array-method-has-species-support.js");
var arrayMethodUsesToLength = __webpack_require__(/*! ../internals/array-method-uses-to-length */ "./node_modules/core-js/internals/array-method-uses-to-length.js");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('splice');
var USES_TO_LENGTH = arrayMethodUsesToLength('splice', { ACCESSORS: true, 0: 0, 1: 2 });

var max = Math.max;
var min = Math.min;
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
var MAXIMUM_ALLOWED_LENGTH_EXCEEDED = 'Maximum allowed length exceeded';

// `Array.prototype.splice` method
// https://tc39.github.io/ecma262/#sec-array.prototype.splice
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {
  splice: function splice(start, deleteCount /* , ...items */) {
    var O = toObject(this);
    var len = toLength(O.length);
    var actualStart = toAbsoluteIndex(start, len);
    var argumentsLength = arguments.length;
    var insertCount, actualDeleteCount, A, k, from, to;
    if (argumentsLength === 0) {
      insertCount = actualDeleteCount = 0;
    } else if (argumentsLength === 1) {
      insertCount = 0;
      actualDeleteCount = len - actualStart;
    } else {
      insertCount = argumentsLength - 2;
      actualDeleteCount = min(max(toInteger(deleteCount), 0), len - actualStart);
    }
    if (len + insertCount - actualDeleteCount > MAX_SAFE_INTEGER) {
      throw TypeError(MAXIMUM_ALLOWED_LENGTH_EXCEEDED);
    }
    A = arraySpeciesCreate(O, actualDeleteCount);
    for (k = 0; k < actualDeleteCount; k++) {
      from = actualStart + k;
      if (from in O) createProperty(A, k, O[from]);
    }
    A.length = actualDeleteCount;
    if (insertCount < actualDeleteCount) {
      for (k = actualStart; k < len - actualDeleteCount; k++) {
        from = k + actualDeleteCount;
        to = k + insertCount;
        if (from in O) O[to] = O[from];
        else delete O[to];
      }
      for (k = len; k > len - actualDeleteCount + insertCount; k--) delete O[k - 1];
    } else if (insertCount > actualDeleteCount) {
      for (k = len - actualDeleteCount; k > actualStart; k--) {
        from = k + actualDeleteCount - 1;
        to = k + insertCount - 1;
        if (from in O) O[to] = O[from];
        else delete O[to];
      }
    }
    for (k = 0; k < insertCount; k++) {
      O[k + actualStart] = arguments[k + 2];
    }
    O.length = len - actualDeleteCount + insertCount;
    return A;
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
    "v-app",
    [
      _c(
        "v-content",
        { staticClass: "container align-center px-1" },
        [
          _c("h2", { staticClass: "font-weight-light mb-2" }, [
            _vm._v("\n            Vuetify CRUD Example\n        "),
          ]),
          _vm._v(" "),
          _c(
            "v-card",
            [
              _c("v-data-table", {
                staticClass: "elevation-0",
                attrs: {
                  headers: _vm.headers,
                  items: _vm.items,
                  "mobile-breakpoint": "800",
                },
                scopedSlots: _vm._u([
                  {
                    key: "item.actions",
                    fn: function (ref) {
                      var item = ref.item
                      return [
                        _c(
                          "div",
                          { staticClass: "text-truncate" },
                          [
                            _c(
                              "v-icon",
                              {
                                staticClass: "mr-2",
                                attrs: { small: "", color: "primary" },
                                on: {
                                  click: function ($event) {
                                    return _vm.showEditDialog(item)
                                  },
                                },
                              },
                              [
                                _vm._v(
                                  "\n                            mdi-pencil\n                        "
                                ),
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "v-icon",
                              {
                                attrs: { small: "", color: "pink" },
                                on: {
                                  click: function ($event) {
                                    return _vm.deleteItem(item)
                                  },
                                },
                              },
                              [
                                _vm._v(
                                  "\n                            mdi-delete\n                        "
                                ),
                              ]
                            ),
                          ],
                          1
                        ),
                      ]
                    },
                  },
                  {
                    key: "item.details",
                    fn: function (ref) {
                      var item = ref.item
                      return [
                        _c(
                          "div",
                          {
                            staticClass: "text-truncate",
                            staticStyle: { width: "180px" },
                          },
                          [
                            _vm._v(
                              "\n                        " +
                                _vm._s(item.Details) +
                                "\n                    "
                            ),
                          ]
                        ),
                      ]
                    },
                  },
                  {
                    key: "item.url",
                    fn: function (ref) {
                      var item = ref.item
                      return [
                        _c(
                          "div",
                          {
                            staticClass: "text-truncate",
                            staticStyle: { width: "180px" },
                          },
                          [
                            _c(
                              "a",
                              { attrs: { href: item.URL, target: "_new" } },
                              [_vm._v(_vm._s(item.URL))]
                            ),
                          ]
                        ),
                      ]
                    },
                  },
                ]),
              }),
              _vm._v(" "),
              _c(
                "v-dialog",
                {
                  attrs: { "max-width": "500px" },
                  scopedSlots: _vm._u([
                    {
                      key: "activator",
                      fn: function (ref) {
                        var on = ref.on
                        return [
                          _c(
                            "div",
                            { staticClass: "d-flex" },
                            [
                              _c(
                                "v-btn",
                                _vm._g(
                                  {
                                    staticClass: "ml-auto ma-3",
                                    attrs: { color: "primary", dark: "" },
                                  },
                                  on
                                ),
                                [
                                  _vm._v(
                                    "\n                            New\n                            "
                                  ),
                                  _c("v-icon", { attrs: { small: "" } }, [
                                    _vm._v("mdi-plus-circle-outline"),
                                  ]),
                                ],
                                1
                              ),
                            ],
                            1
                          ),
                        ]
                      },
                    },
                  ]),
                  model: {
                    value: _vm.dialog,
                    callback: function ($$v) {
                      _vm.dialog = $$v
                    },
                    expression: "dialog",
                  },
                },
                [
                  _vm._v(" "),
                  _c(
                    "v-card",
                    [
                      _c("v-card-title", [
                        _vm.editedItem.id
                          ? _c("span", [
                              _vm._v("Edit " + _vm._s(_vm.editedItem.id)),
                            ])
                          : _c("span", [_vm._v("Create")]),
                      ]),
                      _vm._v(" "),
                      _c(
                        "v-card-text",
                        [
                          _c(
                            "v-row",
                            [
                              _c(
                                "v-col",
                                { attrs: { cols: "12", sm: "4" } },
                                [
                                  _c("v-text-field", {
                                    attrs: { label: "Name" },
                                    model: {
                                      value: _vm.editedItem.Name,
                                      callback: function ($$v) {
                                        _vm.$set(_vm.editedItem, "Name", $$v)
                                      },
                                      expression: "editedItem.Name",
                                    },
                                  }),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { cols: "12", sm: "8" } },
                                [
                                  _c("v-text-field", {
                                    attrs: { label: "Details" },
                                    model: {
                                      value: _vm.editedItem.Details,
                                      callback: function ($$v) {
                                        _vm.$set(_vm.editedItem, "Details", $$v)
                                      },
                                      expression: "editedItem.Details",
                                    },
                                  }),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { cols: "12", sm: "12" } },
                                [
                                  _c("v-text-field", {
                                    attrs: { label: "URL" },
                                    model: {
                                      value: _vm.editedItem.URL,
                                      callback: function ($$v) {
                                        _vm.$set(_vm.editedItem, "URL", $$v)
                                      },
                                      expression: "editedItem.URL",
                                    },
                                  }),
                                ],
                                1
                              ),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-card-actions",
                        [
                          _c("v-spacer"),
                          _vm._v(" "),
                          _c(
                            "v-btn",
                            {
                              attrs: { color: "blue darken-1", text: "" },
                              on: {
                                click: function ($event) {
                                  return _vm.showEditDialog()
                                },
                              },
                            },
                            [_vm._v("Cancel")]
                          ),
                          _vm._v(" "),
                          _c(
                            "v-btn",
                            {
                              attrs: { color: "blue darken-1", text: "" },
                              on: {
                                click: function ($event) {
                                  return _vm.saveItem(_vm.editedItem)
                                },
                              },
                            },
                            [_vm._v("Save")]
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
            ],
            1
          ),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
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
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Roles_vue_vue_type_template_id_f026f8fa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Roles.vue?vue&type=template&id=f026f8fa& */ "./resources/js/src/views/Roles.vue?vue&type=template&id=f026f8fa&");
/* harmony import */ var _Roles_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Roles.vue?vue&type=script&lang=js& */ "./resources/js/src/views/Roles.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Roles_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Roles_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





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
/*! no static exports found */
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