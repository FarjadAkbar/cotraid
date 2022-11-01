(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["roles"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/components/toastification/ToastificationContent.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/@core/components/toastification/ToastificationContent.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    BAvatar: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BAvatar"]
  },
  props: {
    variant: {
      type: String,
      "default": 'primary'
    },
    icon: {
      type: String,
      "default": null
    },
    title: {
      type: String,
      "default": null
    },
    text: {
      type: String,
      "default": null
    },
    hideClose: {
      type: Boolean,
      "default": false
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/AssignPermission.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/AssignPermission.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_components_toastification_ToastificationContent_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/components/toastification/ToastificationContent.vue */ "./resources/js/src/@core/components/toastification/ToastificationContent.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  component: {
    ToastificationContent: _core_components_toastification_ToastificationContent_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Permissions.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Permissions.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var D_xampp_htdocs_coding_vueFIver_starter_kit_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var D_xampp_htdocs_coding_vueFIver_starter_kit_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _core_components_toastification_ToastificationContent_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/components/toastification/ToastificationContent.vue */ "./resources/js/src/@core/components/toastification/ToastificationContent.vue");



//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      permissions: [],
      permissionID: 0,
      permissionName: "",
      permissionSlug: "",
      nameState: null,
      slugState: null
    };
  },
  mounted: function mounted() {
    this.reload();
  },
  methods: {
    reload: function reload() {
      var _this = this;

      this.$http.get('/api/auth/permission').then(function (response) {
        return _this.permissions = response.data;
      });
      this.$forceUpdate();
    },
    checkFormValidity: function checkFormValidity() {
      var valid = this.$refs.form.checkValidity();
      this.nameState = valid;
      this.slugState = valid;
      return valid;
    },
    resetModal: function resetModal() {
      this.permissionName = '';
      this.permissionSlug = '';
      this.nameState = null;
      this.slugState = null;
    },
    editClick: function editClick(permission) {
      this.$refs['modal-edit'].show();
      this.permissionID = permission.id;
      this.permissionName = permission.name;
      this.permissionSlug = permission.slug;
    },
    createClick: function createClick(event) {
      var _this2 = this;

      return Object(D_xampp_htdocs_coding_vueFIver_starter_kit_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/Object(D_xampp_htdocs_coding_vueFIver_starter_kit_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().mark(function _callee() {
        return Object(D_xampp_htdocs_coding_vueFIver_starter_kit_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                event.preventDefault(); // Exit when the form isn't valid

                if (_this2.checkFormValidity()) {
                  _context.next = 3;
                  break;
                }

                return _context.abrupt("return");

              case 3:
                _context.next = 5;
                return _this2.$http.post('/api/auth/permission', {
                  name: _this2.permissionName,
                  slug: _this2.permissionSlug
                }).then(function (response) {
                  // Hide the modal manually
                  _this2.reload();

                  _this2.$nextTick(function () {
                    _this2.$bvModal.hide('modal-create');
                  });

                  _this2.$toast({
                    component: _core_components_toastification_ToastificationContent_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
                    props: {
                      title: response.data.msg,
                      icon: 'EditIcon',
                      variant: 'success'
                    }
                  });
                })["catch"](function (error) {
                  _this2.$toast({
                    component: _core_components_toastification_ToastificationContent_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
                    props: {
                      title: response.data.msg,
                      icon: 'EditIcon',
                      variant: 'danger'
                    }
                  });
                });

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    updateClick: function updateClick(event) {
      var _this3 = this;

      return Object(D_xampp_htdocs_coding_vueFIver_starter_kit_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/Object(D_xampp_htdocs_coding_vueFIver_starter_kit_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().mark(function _callee2() {
        return Object(D_xampp_htdocs_coding_vueFIver_starter_kit_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                event.preventDefault(); // Exit when the form isn't valid

                if (_this3.checkFormValidity()) {
                  _context2.next = 3;
                  break;
                }

                return _context2.abrupt("return");

              case 3:
                _context2.next = 5;
                return _this3.$http.put('/api/auth/permission/' + _this3.permissionID, {
                  name: _this3.permissionName,
                  slug: _this3.permissionSlug
                }).then(function (response) {
                  // Hide the modal manually
                  _this3.reload();

                  _this3.$nextTick(function () {
                    _this3.$bvModal.hide('modal-edit');
                  });

                  _this3.$toast({
                    component: _core_components_toastification_ToastificationContent_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
                    props: {
                      title: response.data.msg,
                      icon: 'EditIcon',
                      variant: 'success'
                    }
                  });
                })["catch"](function (error) {
                  _this3.$toast({
                    component: _core_components_toastification_ToastificationContent_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
                    props: {
                      title: response.data.msg,
                      icon: 'EditIcon',
                      variant: 'danger'
                    }
                  });
                });

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    deleteClick: function deleteClick(id) {
      var _this4 = this;

      return Object(D_xampp_htdocs_coding_vueFIver_starter_kit_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/Object(D_xampp_htdocs_coding_vueFIver_starter_kit_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().mark(function _callee3() {
        return Object(D_xampp_htdocs_coding_vueFIver_starter_kit_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (confirm("Are you sure?")) {
                  _context3.next = 2;
                  break;
                }

                return _context3.abrupt("return");

              case 2:
                _context3.next = 4;
                return _this4.$http["delete"]('/api/auth/permission/' + id).then(function (response) {
                  _this4.reload();

                  _this4.$toast({
                    component: _core_components_toastification_ToastificationContent_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
                    props: {
                      title: response.data.msg,
                      icon: 'EditIcon',
                      variant: 'success'
                    }
                  });
                })["catch"](function (error) {
                  console.log(error);

                  _this4.$toast({
                    component: _core_components_toastification_ToastificationContent_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
                    props: {
                      title: response.data.msg,
                      icon: 'EditIcon',
                      variant: 'danger'
                    }
                  });
                });

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Roles.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Roles.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var D_xampp_htdocs_coding_vueFIver_starter_kit_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var D_xampp_htdocs_coding_vueFIver_starter_kit_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _core_components_toastification_ToastificationContent_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/components/toastification/ToastificationContent.vue */ "./resources/js/src/@core/components/toastification/ToastificationContent.vue");



//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    this.reload();
  },
  methods: {
    reload: function reload() {
      var _this = this;

      this.$http.get('/api/auth/role').then(function (response) {
        return _this.roles = response.data;
      });
      this.$forceUpdate();
    },
    checkFormValidity: function checkFormValidity() {
      var valid = this.$refs.form.checkValidity();
      this.nameState = valid;
      this.slugState = valid;
      return valid;
    },
    resetModal: function resetModal() {
      this.roleName = '';
      this.roleSlug = '';
      this.nameState = null;
      this.slugState = null;
    },
    editClick: function editClick(role) {
      this.$refs['modal-edit'].show();
      this.roleID = role.id;
      this.roleName = role.name;
      this.roleSlug = role.slug;
    },
    createClick: function createClick(event) {
      var _this2 = this;

      return Object(D_xampp_htdocs_coding_vueFIver_starter_kit_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/Object(D_xampp_htdocs_coding_vueFIver_starter_kit_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().mark(function _callee() {
        return Object(D_xampp_htdocs_coding_vueFIver_starter_kit_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                event.preventDefault(); // Exit when the form isn't valid

                if (_this2.checkFormValidity()) {
                  _context.next = 3;
                  break;
                }

                return _context.abrupt("return");

              case 3:
                _context.next = 5;
                return _this2.$http.post('/api/auth/role', {
                  name: _this2.roleName,
                  slug: _this2.roleSlug
                }).then(function (response) {
                  // Hide the modal manually
                  _this2.reload();

                  _this2.$nextTick(function () {
                    _this2.$bvModal.hide('modal-create');
                  });

                  _this2.$toast({
                    component: _core_components_toastification_ToastificationContent_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
                    props: {
                      title: response.data.msg,
                      icon: 'EditIcon',
                      variant: 'success'
                    }
                  });
                })["catch"](function (error) {
                  _this2.$toast({
                    component: _core_components_toastification_ToastificationContent_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
                    props: {
                      title: response.data.msg,
                      icon: 'EditIcon',
                      variant: 'danger'
                    }
                  });
                });

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    updateClick: function updateClick(event) {
      var _this3 = this;

      return Object(D_xampp_htdocs_coding_vueFIver_starter_kit_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/Object(D_xampp_htdocs_coding_vueFIver_starter_kit_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().mark(function _callee2() {
        return Object(D_xampp_htdocs_coding_vueFIver_starter_kit_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                event.preventDefault(); // Exit when the form isn't valid

                if (_this3.checkFormValidity()) {
                  _context2.next = 3;
                  break;
                }

                return _context2.abrupt("return");

              case 3:
                _context2.next = 5;
                return _this3.$http.put('/api/auth/role/' + _this3.roleID, {
                  name: _this3.roleName,
                  slug: _this3.roleSlug
                }).then(function (response) {
                  // Hide the modal manually
                  _this3.reload();

                  _this3.$nextTick(function () {
                    _this3.$bvModal.hide('modal-edit');
                  });

                  _this3.$toast({
                    component: _core_components_toastification_ToastificationContent_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
                    props: {
                      title: response.data.msg,
                      icon: 'EditIcon',
                      variant: 'success'
                    }
                  });
                })["catch"](function (error) {
                  _this3.$toast({
                    component: _core_components_toastification_ToastificationContent_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
                    props: {
                      title: response.data.msg,
                      icon: 'EditIcon',
                      variant: 'danger'
                    }
                  });
                });

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    deleteClick: function deleteClick(id) {
      var _this4 = this;

      return Object(D_xampp_htdocs_coding_vueFIver_starter_kit_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/Object(D_xampp_htdocs_coding_vueFIver_starter_kit_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().mark(function _callee3() {
        return Object(D_xampp_htdocs_coding_vueFIver_starter_kit_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (confirm("Are you sure?")) {
                  _context3.next = 2;
                  break;
                }

                return _context3.abrupt("return");

              case 2:
                _context3.next = 4;
                return _this4.$http["delete"]('/api/auth/role/' + id).then(function (response) {
                  _this4.reload();

                  _this4.$toast({
                    component: _core_components_toastification_ToastificationContent_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
                    props: {
                      title: response.data.msg,
                      icon: 'EditIcon',
                      variant: 'success'
                    }
                  });
                })["catch"](function (error) {
                  console.log(error);

                  _this4.$toast({
                    component: _core_components_toastification_ToastificationContent_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
                    props: {
                      title: response.data.msg,
                      icon: 'EditIcon',
                      variant: 'danger'
                    }
                  });
                });

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/components/toastification/ToastificationContent.vue?vue&type=style&index=0&id=7834b2fa&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/@core/components/toastification/ToastificationContent.vue?vue&type=style&index=0&id=7834b2fa&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".toastification-close-icon[data-v-7834b2fa],\n.toastification-title[data-v-7834b2fa] {\n  line-height: 26px;\n}\n.toastification-title[data-v-7834b2fa] {\n  color: inherit;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/components/toastification/ToastificationContent.vue?vue&type=style&index=0&id=7834b2fa&lang=scss&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/@core/components/toastification/ToastificationContent.vue?vue&type=style&index=0&id=7834b2fa&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ToastificationContent.vue?vue&type=style&index=0&id=7834b2fa&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/components/toastification/ToastificationContent.vue?vue&type=style&index=0&id=7834b2fa&lang=scss&scoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/components/toastification/ToastificationContent.vue?vue&type=template&id=7834b2fa&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/@core/components/toastification/ToastificationContent.vue?vue&type=template&id=7834b2fa&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "toastification" }, [
    _c(
      "div",
      { staticClass: "d-flex align-items-start" },
      [
        _c(
          "b-avatar",
          {
            staticClass: "mr-75 flex-shrink-0",
            attrs: { variant: _vm.variant, size: "1.8rem" },
          },
          [_c("feather-icon", { attrs: { icon: _vm.icon, size: "15" } })],
          1
        ),
        _vm._v(" "),
        _c("div", { staticClass: "d-flex flex-grow-1" }, [
          _c("div", [
            _vm.title
              ? _c("h5", {
                  staticClass: "mb-0 font-weight-bolder toastification-title",
                  class: "text-" + _vm.variant,
                  domProps: { textContent: _vm._s(_vm.title) },
                })
              : _vm._e(),
            _vm._v(" "),
            _vm.text
              ? _c("small", {
                  staticClass: "d-inline-block text-body",
                  domProps: { textContent: _vm._s(_vm.text) },
                })
              : _vm._e(),
          ]),
          _vm._v(" "),
          _c(
            "span",
            {
              staticClass: "cursor-pointer toastification-close-icon ml-auto ",
              on: {
                click: function ($event) {
                  return _vm.$emit("close-toast")
                },
              },
            },
            [
              !_vm.hideClose
                ? _c("feather-icon", {
                    staticClass: "text-body",
                    attrs: { icon: "XIcon" },
                  })
                : _vm._e(),
            ],
            1
          ),
        ]),
      ],
      1
    ),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/AssignPermission.vue?vue&type=template&id=06f8f648&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/AssignPermission.vue?vue&type=template&id=06f8f648& ***!
  \******************************************************************************************************************************************************************************************************************/
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
  return _c("div", [
    _vm._v("\n  select\n  "),
    _c(
      "table",
      { staticClass: "table" },
      [
        _vm._m(0),
        _vm._v(" "),
        _vm._l(_vm.permissions, function (permission) {
          return _c("tbody", [
            _c("tr", [
              _c("th", { attrs: { scope: "row" } }, [
                _vm._v(_vm._s(permission.id)),
              ]),
              _vm._v(" "),
              _c("td", [_vm._v(_vm._s(permission.name))]),
              _vm._v(" "),
              _c("td", [_vm._v(_vm._s(permission.slug))]),
              _vm._v(" "),
              _c("td", [_vm._v(_vm._s(permission.created_at))]),
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
                          return _vm.editClick(permission)
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
                      on: {
                        click: function ($event) {
                          return _vm.deleteClick(permission.id)
                        },
                      },
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
  ])
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Permissions.vue?vue&type=template&id=55ecf34a&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Permissions.vue?vue&type=template&id=55ecf34a& ***!
  \*************************************************************************************************************************************************************************************************************/
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
        [_vm._v("\n    Add Permission\n  ")]
      ),
      _vm._v(" "),
      _c(
        "table",
        { staticClass: "table" },
        [
          _vm._m(0),
          _vm._v(" "),
          _vm._l(_vm.permissions, function (permission) {
            return _c("tbody", [
              _c("tr", [
                _c("th", { attrs: { scope: "row" } }, [
                  _vm._v(_vm._s(permission.id)),
                ]),
                _vm._v(" "),
                _c("td", [_vm._v(_vm._s(permission.name))]),
                _vm._v(" "),
                _c("td", [_vm._v(_vm._s(permission.slug))]),
                _vm._v(" "),
                _c("td", [_vm._v(_vm._s(permission.created_at))]),
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
                            return _vm.editClick(permission)
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
                        on: {
                          click: function ($event) {
                            return _vm.deleteClick(permission.id)
                          },
                        },
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
          attrs: { id: "modal-create", title: "Create Permission" },
          on: { ok: _vm.createClick, hidden: _vm.resetModal },
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
                      value: _vm.permissionName,
                      expression: "permissionName",
                    },
                  ],
                  staticClass: "form-control",
                  attrs: { type: "text", state: _vm.nameState, required: "" },
                  domProps: { value: _vm.permissionName },
                  on: {
                    input: function ($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.permissionName = $event.target.value
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
                      value: _vm.permissionSlug,
                      expression: "permissionSlug",
                    },
                  ],
                  staticClass: "form-control",
                  attrs: { type: "text", state: _vm.slugState, required: "" },
                  domProps: { value: _vm.permissionSlug },
                  on: {
                    input: function ($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.permissionSlug = $event.target.value
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
          attrs: { id: "modal-edit", title: "Edit Permission" },
          on: { ok: _vm.updateClick, hidden: _vm.resetModal },
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
                      value: _vm.permissionName,
                      expression: "permissionName",
                    },
                  ],
                  staticClass: "form-control",
                  attrs: { type: "text", state: _vm.nameState, required: "" },
                  domProps: { value: _vm.permissionName },
                  on: {
                    input: function ($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.permissionName = $event.target.value
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
                      value: _vm.permissionSlug,
                      expression: "permissionSlug",
                    },
                  ],
                  staticClass: "form-control",
                  attrs: { type: "text", state: _vm.slugState, required: "" },
                  domProps: { value: _vm.permissionSlug },
                  on: {
                    input: function ($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.permissionSlug = $event.target.value
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
        [_vm._v("\n    Add Role\n  ")]
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
                        on: {
                          click: function ($event) {
                            return _vm.deleteClick(role.id)
                          },
                        },
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
          on: { ok: _vm.createClick, hidden: _vm.resetModal },
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
          on: { ok: _vm.updateClick, hidden: _vm.resetModal },
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

/***/ "./resources/js/src/@core/components/toastification/ToastificationContent.vue":
/*!************************************************************************************!*\
  !*** ./resources/js/src/@core/components/toastification/ToastificationContent.vue ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ToastificationContent_vue_vue_type_template_id_7834b2fa_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ToastificationContent.vue?vue&type=template&id=7834b2fa&scoped=true& */ "./resources/js/src/@core/components/toastification/ToastificationContent.vue?vue&type=template&id=7834b2fa&scoped=true&");
/* harmony import */ var _ToastificationContent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ToastificationContent.vue?vue&type=script&lang=js& */ "./resources/js/src/@core/components/toastification/ToastificationContent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ToastificationContent_vue_vue_type_style_index_0_id_7834b2fa_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ToastificationContent.vue?vue&type=style&index=0&id=7834b2fa&lang=scss&scoped=true& */ "./resources/js/src/@core/components/toastification/ToastificationContent.vue?vue&type=style&index=0&id=7834b2fa&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ToastificationContent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ToastificationContent_vue_vue_type_template_id_7834b2fa_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ToastificationContent_vue_vue_type_template_id_7834b2fa_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "7834b2fa",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/@core/components/toastification/ToastificationContent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/@core/components/toastification/ToastificationContent.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/src/@core/components/toastification/ToastificationContent.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ToastificationContent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ToastificationContent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/components/toastification/ToastificationContent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ToastificationContent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/@core/components/toastification/ToastificationContent.vue?vue&type=style&index=0&id=7834b2fa&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************************!*\
  !*** ./resources/js/src/@core/components/toastification/ToastificationContent.vue?vue&type=style&index=0&id=7834b2fa&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ToastificationContent_vue_vue_type_style_index_0_id_7834b2fa_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ToastificationContent.vue?vue&type=style&index=0&id=7834b2fa&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/components/toastification/ToastificationContent.vue?vue&type=style&index=0&id=7834b2fa&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ToastificationContent_vue_vue_type_style_index_0_id_7834b2fa_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ToastificationContent_vue_vue_type_style_index_0_id_7834b2fa_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ToastificationContent_vue_vue_type_style_index_0_id_7834b2fa_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ToastificationContent_vue_vue_type_style_index_0_id_7834b2fa_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/@core/components/toastification/ToastificationContent.vue?vue&type=template&id=7834b2fa&scoped=true&":
/*!*******************************************************************************************************************************!*\
  !*** ./resources/js/src/@core/components/toastification/ToastificationContent.vue?vue&type=template&id=7834b2fa&scoped=true& ***!
  \*******************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ToastificationContent_vue_vue_type_template_id_7834b2fa_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ToastificationContent.vue?vue&type=template&id=7834b2fa&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/components/toastification/ToastificationContent.vue?vue&type=template&id=7834b2fa&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ToastificationContent_vue_vue_type_template_id_7834b2fa_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ToastificationContent_vue_vue_type_template_id_7834b2fa_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/AssignPermission.vue":
/*!*****************************************************!*\
  !*** ./resources/js/src/views/AssignPermission.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AssignPermission_vue_vue_type_template_id_06f8f648___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AssignPermission.vue?vue&type=template&id=06f8f648& */ "./resources/js/src/views/AssignPermission.vue?vue&type=template&id=06f8f648&");
/* harmony import */ var _AssignPermission_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AssignPermission.vue?vue&type=script&lang=js& */ "./resources/js/src/views/AssignPermission.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AssignPermission_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AssignPermission_vue_vue_type_template_id_06f8f648___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AssignPermission_vue_vue_type_template_id_06f8f648___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/AssignPermission.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/AssignPermission.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/src/views/AssignPermission.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AssignPermission_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./AssignPermission.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/AssignPermission.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AssignPermission_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/AssignPermission.vue?vue&type=template&id=06f8f648&":
/*!************************************************************************************!*\
  !*** ./resources/js/src/views/AssignPermission.vue?vue&type=template&id=06f8f648& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AssignPermission_vue_vue_type_template_id_06f8f648___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./AssignPermission.vue?vue&type=template&id=06f8f648& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/AssignPermission.vue?vue&type=template&id=06f8f648&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AssignPermission_vue_vue_type_template_id_06f8f648___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AssignPermission_vue_vue_type_template_id_06f8f648___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/Permissions.vue":
/*!************************************************!*\
  !*** ./resources/js/src/views/Permissions.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Permissions_vue_vue_type_template_id_55ecf34a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Permissions.vue?vue&type=template&id=55ecf34a& */ "./resources/js/src/views/Permissions.vue?vue&type=template&id=55ecf34a&");
/* harmony import */ var _Permissions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Permissions.vue?vue&type=script&lang=js& */ "./resources/js/src/views/Permissions.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Permissions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Permissions_vue_vue_type_template_id_55ecf34a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Permissions_vue_vue_type_template_id_55ecf34a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/Permissions.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/Permissions.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/src/views/Permissions.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Permissions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Permissions.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Permissions.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Permissions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/Permissions.vue?vue&type=template&id=55ecf34a&":
/*!*******************************************************************************!*\
  !*** ./resources/js/src/views/Permissions.vue?vue&type=template&id=55ecf34a& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Permissions_vue_vue_type_template_id_55ecf34a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Permissions.vue?vue&type=template&id=55ecf34a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Permissions.vue?vue&type=template&id=55ecf34a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Permissions_vue_vue_type_template_id_55ecf34a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Permissions_vue_vue_type_template_id_55ecf34a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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



/***/ })

}]);