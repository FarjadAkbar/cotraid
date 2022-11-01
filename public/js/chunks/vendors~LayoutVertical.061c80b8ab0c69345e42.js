(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors~LayoutVertical"],{

/***/ "./node_modules/@casl/ability/dist/es5m/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/@casl/ability/dist/es5m/index.js ***!
  \*******************************************************/
/*! exports provided: Ability, AbilityBuilder, ForbiddenError, PureAbility, buildMongoQueryMatcher, createAliasResolver, defineAbility, detectSubjectType, fieldPatternMatcher, getDefaultErrorMessage, mongoQueryMatcher, subject, wrapArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ability", function() { return q; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbilityBuilder", function() { return B; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForbiddenError", function() { return G; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PureAbility", function() { return E; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildMongoQueryMatcher", function() { return x; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createAliasResolver", function() { return O; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defineAbility", function() { return D; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "detectSubjectType", function() { return g; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fieldPatternMatcher", function() { return F; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDefaultErrorMessage", function() { return P; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mongoQueryMatcher", function() { return M; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subject", function() { return w; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrapArray", function() { return p; });
/* harmony import */ var sift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sift */ "./node_modules/sift/es5m/index.js");
function d(){return(d=Object.assign||function(t){for(var i=1;i<arguments.length;i++){var n=arguments[i];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function y(t,i){t.prototype=Object.create(i.prototype),t.prototype.constructor=t,t.__proto__=i}function p(t){return Array.isArray(t)?t:[t]}var b="__caslSubjectType__";function w(t,i){if(i)if(i.hasOwnProperty(b)){if(t!==i[b])throw new Error("Trying to cast object to subject type "+t+" but previously it was casted to "+i[b])}else Object.defineProperty(i,b,{value:t});return i}function g(t){if(!t)return"all";if("string"==typeof t)return t;if(t.hasOwnProperty(b))return t[b];var i="function"==typeof t?t:t.constructor;return i.modelName||i.name}var j=function(t){return t};function O(t){return true&&function(t){if(t.manage)throw new Error('Cannot add alias for "manage" action because it is reserved');Object.keys(t).forEach((function(i){if(i===t[i]||Array.isArray(t[i])&&(-1!==t[i].indexOf(i)||-1!==t[i].indexOf("manage")))throw new Error("Attempt to alias action to itself: "+i+" -> "+t[i])}))}(t),function(i){return function(t,i){for(var n=p(i),r=0;r<n.length;){var e=n[r++];t.hasOwnProperty(e)&&(n=n.concat(t[e]))}return n}(t,i)}}var $=function(){function t(t,i){this.t=void 0,this.i=void 0,this.action=i.resolveAction(t.actions||t.action),this.subject=t.subject,this.inverted=!!t.inverted,this.conditions=t.conditions,this.reason=t.reason,this.fields=t.fields&&0!==t.fields.length?p(t.fields):void 0,"actions"in t&&console.warn("Rule `actions` field is deprecated. Use `action` field instead"),this.conditions&&i.conditionsMatcher&&(this.t=i.conditionsMatcher(this.conditions)),this.fields&&i.fieldMatcher&&(this.i=i.fieldMatcher(this.fields))}var i=t.prototype;return i.matchesConditions=function(t){return!this.t||(t&&"string"!=typeof t&&"function"!=typeof t?this.t(t):!this.inverted)},i.matchesField=function(t){return!this.i||(t?this.i(t):!this.inverted)},t}(),m=function(){function t(t){this.o=void 0,this.s=!1,this.u=!1,this.o=t,this.h=this.h.bind(this)}var i=t.prototype;return i.h=function(t){var i=t.fields,n=t.inverted;this.o=this.o&&!!n,this.u||!Array.isArray(i)||i.length||(this.u=!0),!this.s&&i&&i.length&&(this.s=!0)},i.l=function(t){if(this.o&&console.warn("Make sure your ability has direct rules, not only inverted ones. Otherwise `ability.can` will always return `false`."),this.u&&console.warn("[error in next major version]: There are rules with `fields` property being an empty array. This results in the same as not passing fields at all. Make sure to remove empty array or pass fields."),this.s&&!t.fieldMatcher)throw new Error('Field level restrictions are ignored because "fieldMatcher" option is not specified. Did you unintentionally used PureAbility instead of Ability?')},t}(),E=function(t){function i(){return t.apply(this,arguments)||this}y(i,t);var n=i.prototype;return n.can=function(){var t=this.relevantRuleFor.apply(this,arguments);return!!t&&!t.inverted},n.relevantRuleFor=function(){for(var t=this.rulesFor.apply(this,arguments),i=arguments.length<=1?void 0:arguments[1],n=0;n<t.length;n++)if(t[n].matchesConditions(i))return t[n];return null},n.cannot=function(){return!this.can.apply(this,arguments)},i}(function(){function t(t,i){var n=this;void 0===t&&(t=[]),void 0===i&&(i={}),this.s=!1,this.v=Object.create(null),this.p=Object.create(null),this.g=Object.create(null),this.j=[],this.O={conditionsMatcher:i.conditionsMatcher,fieldMatcher:i.fieldMatcher,resolveAction:i.resolveAction||j},Object.defineProperty(this,"detectSubjectType",{value:i.detectSubjectType||i.subjectName||g}),Object.defineProperty(this,"rules",{get:function(){return n.j}}),this.update(t)}var i=t.prototype;return i.update=function(t){var i={rules:t,ability:this,target:this};this.$("update",i),this.v=Object.create(null);var n=new m(t.length>0),r=this.m(t,n.h);return n.l(this.O),this.g=r,this.j=t,this.s=n.s,this.$("updated",i),this},i.m=function(t,i){void 0===i&&(i=j);for(var n=Object.create(null),r=0;r<t.length;r++){i(t[r],r);for(var e=new $(t[r],this.O),o=t.length-r-1,s=p(e.action),u=p(e.subject),a=0;a<u.length;a++){var h=this.detectSubjectType(u[a]);n[h]=n[h]||Object.create(null);for(var c=0;c<s.length;c++){var f=s[c];n[h][f]=n[h][f]||Object.create(null),n[h][f][o]=e}}}return n},i.possibleRulesFor=function(){for(var t=arguments.length,i=new Array(t),n=0;n<t;n++)i[n]=arguments[n];var r=i[0],e=i[1],o=this.detectSubjectType(e),s=this.v,u=o+"_"+r;return s[u]||(s[u]=this.A(r,o)),s[u]},i.A=function(t,i){var n=this;return("all"===i?[i]:[i,"all"]).reduce((function(i,r){var e=n.g[r];return e?Object.assign(i,e[t],e.manage):i}),[]).filter(Boolean)},i.rulesFor=function(){for(var t=arguments.length,i=new Array(t),n=0;n<t;n++)i[n]=arguments[n];var r=i[0],e=i[1],o=i[2],s=this.possibleRulesFor(r,e);if(o&&"string"!=typeof o)throw new Error("The 3rd, `field` parameter is expected to be a string. See https://stalniy.github.io/casl/en/api/casl-ability#can-of-pure-ability for details");return this.s?s.filter((function(t){return t.matchesField(o)})):s},i.on=function(t,i){var n=this.p,r=!0;return n[t]||(n[t]=[]),n[t].push(i),function(){if(r){var e=n[t].indexOf(i);n[t].splice(e,1),r=!1}}},i.$=function(t,i){var n=this.p[t];n&&n.slice(0).forEach((function(t){return t(i)}))},t}()),A={$eq:sift__WEBPACK_IMPORTED_MODULE_0__["$eq"],$ne:sift__WEBPACK_IMPORTED_MODULE_0__["$ne"],$lt:sift__WEBPACK_IMPORTED_MODULE_0__["$lt"],$lte:sift__WEBPACK_IMPORTED_MODULE_0__["$lte"],$gt:sift__WEBPACK_IMPORTED_MODULE_0__["$gt"],$gte:sift__WEBPACK_IMPORTED_MODULE_0__["$gte"],$in:sift__WEBPACK_IMPORTED_MODULE_0__["$in"],$nin:sift__WEBPACK_IMPORTED_MODULE_0__["$nin"],$all:sift__WEBPACK_IMPORTED_MODULE_0__["$all"],$size:sift__WEBPACK_IMPORTED_MODULE_0__["$size"],$regex:sift__WEBPACK_IMPORTED_MODULE_0__["$regex"],$elemMatch:sift__WEBPACK_IMPORTED_MODULE_0__["$elemMatch"],$exists:sift__WEBPACK_IMPORTED_MODULE_0__["$exists"]};function x(i){var n={operations:d({},A,i)};return function(i){return Object(sift__WEBPACK_IMPORTED_MODULE_0__["createQueryTester"])(i,n)}}var M=x({}),T=/[-/\\^$+?.()|[\]{}]/g,_=/\.?\*+\.?/g,R=/\*+/,S=/\./g;function k(t,i,n){var r="*"===n[0]||"."===t[0]&&"."===t[t.length-1]?"+":"*",e=-1===t.indexOf("**")?"[^.]":".",o=t.replace(S,"\\$&").replace(R,e+r);return i+t.length===n.length?"(?:"+o+")?":o}function C(t,i,n){return"."!==t||"*"!==n[i-1]&&"*"!==n[i+1]?"\\"+t:t}var F=function(t){var i;return function(n){return void 0===i&&(i=t.every((function(t){return-1===t.indexOf("*")}))?null:function(t){var i=t.map((function(t){return t.replace(T,C).replace(_,k)})),n=i.length>1?"(?:"+i.join("|")+")":i[0];return new RegExp("^"+n+"$")}(t)),null===i?-1!==t.indexOf(n):i.test(n)}},q=function(t){function i(i,n){return t.call(this,i,d({conditionsMatcher:M,fieldMatcher:F},n))||this}return y(i,t),i}(E),z=function(){function t(t){this.rule=t}return t.prototype.because=function(t){return this.rule.reason=t,this},t}(),B=function(){function t(t){void 0===t&&(t=E),this.rules=[],this.M=t;this.can=this.can.bind(this),this.cannot=this.cannot.bind(this),this.build=this.build.bind(this)}var i=t.prototype;return i.can=function(t,i,n,r){var e={action:t};return i&&(e.subject=i,Array.isArray(n)||"string"==typeof n?e.fields=n:void 0!==n&&(e.conditions=n),void 0!==r&&(e.conditions=r)),this.rules.push(e),new z(e)},i.cannot=function(t,i,n,r){var e=this.can(t,i,n,r);return e.rule.inverted=!0,e},i.build=function(t){return new this.M(this.rules,t)},t}();function D(t,i){var n,r;if("function"==typeof t)r=t,n={};else{if("function"!=typeof i)throw new Error("`defineAbility` expects to receive either options and dsl function or only dsl function");n=t,r=i}var e=new B(q),o=r(e.can,e.cannot);return o&&"function"==typeof o.then?o.then((function(){return e.build(n)})):e.build(n)}var P=function(t){return'Cannot execute "'+t.action+'" on "'+t.subjectType+'"'},U=function(t){this.message=t};U.prototype=Object.create(Error.prototype);var G=function(t){function i(i){var n;return(n=t.call(this,"")||this).ability=void 0,n.field=void 0,n.ability=i,"function"==typeof Error.captureStackTrace&&(n.name="ForbiddenError",Error.captureStackTrace(function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(n),n.constructor)),n}y(i,t),i.setDefaultMessage=function(t){this.T="string"==typeof t?function(){return t}:t},i.from=function(t){return new this(t)};var n=i.prototype;return n.setMessage=function(t){return this.message=t,this},n.throwUnlessCan=function(){var t,i=(t=this.ability).relevantRuleFor.apply(t,arguments);if(!i||i.inverted){this.action=arguments.length<=0?void 0:arguments[0],this.subject=arguments.length<=1?void 0:arguments[1],this.subjectType=this.ability.detectSubjectType(arguments.length<=1?void 0:arguments[1]),this.field=arguments.length<=2?void 0:arguments[2];var n=i?i.reason:"";throw this.message=this.message||n||this.constructor.T(this),this}},i}(U);G.T=P;
//# sourceMappingURL=index.js.map


/***/ }),

/***/ "./node_modules/core-js/modules/es.json.stringify.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.json.stringify.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

var $stringify = getBuiltIn('JSON', 'stringify');
var re = /[\uD800-\uDFFF]/g;
var low = /^[\uD800-\uDBFF]$/;
var hi = /^[\uDC00-\uDFFF]$/;

var fix = function (match, offset, string) {
  var prev = string.charAt(offset - 1);
  var next = string.charAt(offset + 1);
  if ((low.test(match) && !hi.test(next)) || (hi.test(match) && !low.test(prev))) {
    return '\\u' + match.charCodeAt(0).toString(16);
  } return match;
};

var FORCED = fails(function () {
  return $stringify('\uDF06\uD834') !== '"\\udf06\\ud834"'
    || $stringify('\uDEAD') !== '"\\udead"';
});

if ($stringify) {
  // https://github.com/tc39/proposal-well-formed-stringify
  $({ target: 'JSON', stat: true, forced: FORCED }, {
    // eslint-disable-next-line no-unused-vars
    stringify: function stringify(it, replacer, space) {
      var result = $stringify.apply(null, arguments);
      return typeof result == 'string' ? result.replace(re, fix) : result;
    }
  });
}


/***/ }),

/***/ "./node_modules/sift/es5m/index.js":
/*!*****************************************!*\
  !*** ./node_modules/sift/es5m/index.js ***!
  \*****************************************/
/*! exports provided: default, $Size, $all, $and, $elemMatch, $eq, $exists, $gt, $gte, $in, $lt, $lte, $mod, $ne, $nin, $nor, $not, $options, $or, $regex, $size, $type, $where, EqualsOperation, createDefaultQueryOperation, createEqualsOperation, createOperationTester, createQueryOperation, createQueryTester */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$Size", function() { return $Size; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$all", function() { return $all; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$and", function() { return $and; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$elemMatch", function() { return $elemMatch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$eq", function() { return $eq; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$exists", function() { return $exists; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$gt", function() { return $gt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$gte", function() { return $gte; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$in", function() { return $in; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$lt", function() { return $lt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$lte", function() { return $lte; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$mod", function() { return $mod; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$ne", function() { return $ne; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$nin", function() { return $nin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$nor", function() { return $nor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$not", function() { return $not; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$options", function() { return $options; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$or", function() { return $or; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$regex", function() { return $regex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$size", function() { return $size; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$type", function() { return $type; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$where", function() { return $where; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EqualsOperation", function() { return EqualsOperation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createDefaultQueryOperation", function() { return createDefaultQueryOperation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createEqualsOperation", function() { return createEqualsOperation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createOperationTester", function() { return createOperationTester; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createQueryOperation", function() { return createQueryOperation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createQueryTester", function() { return createQueryTester; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var typeChecker = function (type) {
    var typeString = "[object " + type + "]";
    return function (value) {
        return getClassName(value) === typeString;
    };
};
var getClassName = function (value) { return Object.prototype.toString.call(value); };
var comparable = function (value) {
    if (value instanceof Date) {
        return value.getTime();
    }
    else if (isArray(value)) {
        return value.map(comparable);
    }
    else if (value && typeof value.toJSON === "function") {
        return value.toJSON();
    }
    return value;
};
var isArray = typeChecker("Array");
var isObject = typeChecker("Object");
var isFunction = typeChecker("Function");
var isVanillaObject = function (value) {
    return (value &&
        (value.constructor === Object ||
            value.constructor === Array ||
            value.constructor.toString() === "function Object() { [native code] }" ||
            value.constructor.toString() === "function Array() { [native code] }") &&
        !value.toJSON);
};
var equals = function (a, b) {
    if (a == null && a == b) {
        return true;
    }
    if (a === b) {
        return true;
    }
    if (Object.prototype.toString.call(a) !== Object.prototype.toString.call(b)) {
        return false;
    }
    if (isArray(a)) {
        if (a.length !== b.length) {
            return false;
        }
        for (var i = 0, length_1 = a.length; i < length_1; i++) {
            if (!equals(a[i], b[i]))
                return false;
        }
        return true;
    }
    else if (isObject(a)) {
        if (Object.keys(a).length !== Object.keys(b).length) {
            return false;
        }
        for (var key in a) {
            if (!equals(a[key], b[key]))
                return false;
        }
        return true;
    }
    return false;
};

/**
 * Walks through each value given the context - used for nested operations. E.g:
 * { "person.address": { $eq: "blarg" }}
 */
var walkKeyPathValues = function (item, keyPath, next, depth, key, owner) {
    var currentKey = keyPath[depth];
    // if array, then try matching. Might fall through for cases like:
    // { $eq: [1, 2, 3] }, [ 1, 2, 3 ].
    if (isArray(item) && isNaN(Number(currentKey))) {
        for (var i = 0, length_1 = item.length; i < length_1; i++) {
            // if FALSE is returned, then terminate walker. For operations, this simply
            // means that the search critera was met.
            if (!walkKeyPathValues(item[i], keyPath, next, depth, i, item)) {
                return false;
            }
        }
    }
    if (depth === keyPath.length || item == null) {
        return next(item, key, owner);
    }
    return walkKeyPathValues(item[currentKey], keyPath, next, depth + 1, currentKey, item);
};
var BaseOperation = /** @class */ (function () {
    function BaseOperation(params, owneryQuery, options) {
        this.params = params;
        this.owneryQuery = owneryQuery;
        this.options = options;
        this.init();
    }
    BaseOperation.prototype.init = function () { };
    BaseOperation.prototype.reset = function () {
        this.done = false;
        this.keep = false;
    };
    return BaseOperation;
}());
var NamedBaseOperation = /** @class */ (function (_super) {
    __extends(NamedBaseOperation, _super);
    function NamedBaseOperation(params, owneryQuery, options, name) {
        var _this = _super.call(this, params, owneryQuery, options) || this;
        _this.name = name;
        return _this;
    }
    return NamedBaseOperation;
}(BaseOperation));
var GroupOperation = /** @class */ (function (_super) {
    __extends(GroupOperation, _super);
    function GroupOperation(params, owneryQuery, options, children) {
        var _this = _super.call(this, params, owneryQuery, options) || this;
        _this.children = children;
        return _this;
    }
    /**
     */
    GroupOperation.prototype.reset = function () {
        this.keep = false;
        this.done = false;
        for (var i = 0, length_2 = this.children.length; i < length_2; i++) {
            this.children[i].reset();
        }
    };
    /**
     */
    GroupOperation.prototype.childrenNext = function (item, key, owner) {
        var done = true;
        var keep = true;
        for (var i = 0, length_3 = this.children.length; i < length_3; i++) {
            var childOperation = this.children[i];
            childOperation.next(item, key, owner);
            if (!childOperation.keep) {
                keep = false;
            }
            if (childOperation.done) {
                if (!childOperation.keep) {
                    break;
                }
            }
            else {
                done = false;
            }
        }
        this.done = done;
        this.keep = keep;
    };
    return GroupOperation;
}(BaseOperation));
var NamedGroupOperation = /** @class */ (function (_super) {
    __extends(NamedGroupOperation, _super);
    function NamedGroupOperation(params, owneryQuery, options, children, name) {
        var _this = _super.call(this, params, owneryQuery, options, children) || this;
        _this.name = name;
        return _this;
    }
    return NamedGroupOperation;
}(GroupOperation));
var QueryOperation = /** @class */ (function (_super) {
    __extends(QueryOperation, _super);
    function QueryOperation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     */
    QueryOperation.prototype.next = function (item, key, parent) {
        this.childrenNext(item, key, parent);
    };
    return QueryOperation;
}(GroupOperation));
var NestedOperation = /** @class */ (function (_super) {
    __extends(NestedOperation, _super);
    function NestedOperation(keyPath, params, owneryQuery, options, children) {
        var _this = _super.call(this, params, owneryQuery, options, children) || this;
        _this.keyPath = keyPath;
        /**
         */
        _this._nextNestedValue = function (value, key, owner) {
            _this.childrenNext(value, key, owner);
            return !_this.done;
        };
        return _this;
    }
    /**
     */
    NestedOperation.prototype.next = function (item, key, parent) {
        walkKeyPathValues(item, this.keyPath, this._nextNestedValue, 0, key, parent);
    };
    return NestedOperation;
}(GroupOperation));
var createTester = function (a, compare) {
    if (a instanceof Function) {
        return a;
    }
    if (a instanceof RegExp) {
        return function (b) {
            var result = typeof b === "string" && a.test(b);
            a.lastIndex = 0;
            return result;
        };
    }
    var comparableA = comparable(a);
    return function (b) { return compare(comparableA, comparable(b)); };
};
var EqualsOperation = /** @class */ (function (_super) {
    __extends(EqualsOperation, _super);
    function EqualsOperation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EqualsOperation.prototype.init = function () {
        this._test = createTester(this.params, this.options.compare);
    };
    EqualsOperation.prototype.next = function (item, key, parent) {
        if (!Array.isArray(parent) || parent.hasOwnProperty(key)) {
            if (this._test(item, key, parent)) {
                this.done = true;
                this.keep = true;
            }
        }
    };
    return EqualsOperation;
}(BaseOperation));
var createEqualsOperation = function (params, owneryQuery, options) { return new EqualsOperation(params, owneryQuery, options); };
var NopeOperation = /** @class */ (function (_super) {
    __extends(NopeOperation, _super);
    function NopeOperation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NopeOperation.prototype.next = function () {
        this.done = true;
        this.keep = false;
    };
    return NopeOperation;
}(BaseOperation));
var numericalOperationCreator = function (createNumericalOperation) { return function (params, owneryQuery, options, name) {
    if (params == null) {
        return new NopeOperation(params, owneryQuery, options);
    }
    return createNumericalOperation(params, owneryQuery, options, name);
}; };
var numericalOperation = function (createTester) {
    return numericalOperationCreator(function (params, owneryQuery, options) {
        var typeofParams = typeof comparable(params);
        var test = createTester(params);
        return new EqualsOperation(function (b) {
            return typeof comparable(b) === typeofParams && test(b);
        }, owneryQuery, options);
    });
};
var createNamedOperation = function (name, params, parentQuery, options) {
    var operationCreator = options.operations[name];
    if (!operationCreator) {
        throw new Error("Unsupported operation: " + name);
    }
    return operationCreator(params, parentQuery, options, name);
};
var containsOperation = function (query) {
    for (var key in query) {
        if (key.charAt(0) === "$")
            return true;
    }
    return false;
};
var createNestedOperation = function (keyPath, nestedQuery, owneryQuery, options) {
    if (containsOperation(nestedQuery)) {
        var _a = createQueryOperations(nestedQuery, options), selfOperations = _a[0], nestedOperations = _a[1];
        if (nestedOperations.length) {
            throw new Error("Property queries must contain only operations, or exact objects.");
        }
        return new NestedOperation(keyPath, nestedQuery, owneryQuery, options, selfOperations);
    }
    return new NestedOperation(keyPath, nestedQuery, owneryQuery, options, [
        new EqualsOperation(nestedQuery, owneryQuery, options)
    ]);
};
var createQueryOperation = function (query, owneryQuery, _a) {
    if (owneryQuery === void 0) { owneryQuery = null; }
    var _b = _a === void 0 ? {} : _a, compare = _b.compare, operations = _b.operations;
    var options = {
        compare: compare || equals,
        operations: Object.assign({}, operations || {})
    };
    var _c = createQueryOperations(query, options), selfOperations = _c[0], nestedOperations = _c[1];
    var ops = [];
    if (selfOperations.length) {
        ops.push(new NestedOperation([], query, owneryQuery, options, selfOperations));
    }
    ops.push.apply(ops, nestedOperations);
    if (ops.length === 1) {
        return ops[0];
    }
    return new QueryOperation(query, owneryQuery, options, ops);
};
var createQueryOperations = function (query, options) {
    var selfOperations = [];
    var nestedOperations = [];
    if (!isVanillaObject(query)) {
        selfOperations.push(new EqualsOperation(query, query, options));
        return [selfOperations, nestedOperations];
    }
    for (var key in query) {
        if (key.charAt(0) === "$") {
            var op = createNamedOperation(key, query[key], query, options);
            // probably just a flag for another operation (like $options)
            if (op != null) {
                selfOperations.push(op);
            }
        }
        else {
            nestedOperations.push(createNestedOperation(key.split("."), query[key], query, options));
        }
    }
    return [selfOperations, nestedOperations];
};
var createOperationTester = function (operation) { return function (item, key, owner) {
    operation.reset();
    operation.next(item, key, owner);
    return operation.keep;
}; };
var createQueryTester = function (query, options) {
    if (options === void 0) { options = {}; }
    return createOperationTester(createQueryOperation(query, null, options));
};

var $Ne = /** @class */ (function (_super) {
    __extends($Ne, _super);
    function $Ne() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    $Ne.prototype.init = function () {
        this._test = createTester(this.params, this.options.compare);
    };
    $Ne.prototype.reset = function () {
        _super.prototype.reset.call(this);
        this.keep = true;
    };
    $Ne.prototype.next = function (item) {
        if (this._test(item)) {
            this.done = true;
            this.keep = false;
        }
    };
    return $Ne;
}(NamedBaseOperation));
// https://docs.mongodb.com/manual/reference/operator/query/elemMatch/
var $ElemMatch = /** @class */ (function (_super) {
    __extends($ElemMatch, _super);
    function $ElemMatch() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    $ElemMatch.prototype.init = function () {
        this._queryOperation = createQueryOperation(this.params, this.owneryQuery, this.options);
    };
    $ElemMatch.prototype.reset = function () {
        _super.prototype.reset.call(this);
        this._queryOperation.reset();
    };
    $ElemMatch.prototype.next = function (item) {
        if (isArray(item)) {
            for (var i = 0, length_1 = item.length; i < length_1; i++) {
                // reset query operation since item being tested needs to pass _all_ query
                // operations for it to be a success
                this._queryOperation.reset();
                // check item
                this._queryOperation.next(item[i], i, item);
                this.keep = this.keep || this._queryOperation.keep;
            }
            this.done = true;
        }
        else {
            this.done = false;
            this.keep = false;
        }
    };
    return $ElemMatch;
}(NamedBaseOperation));
var $Not = /** @class */ (function (_super) {
    __extends($Not, _super);
    function $Not() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    $Not.prototype.init = function () {
        this._queryOperation = createQueryOperation(this.params, this.owneryQuery, this.options);
    };
    $Not.prototype.reset = function () {
        this._queryOperation.reset();
    };
    $Not.prototype.next = function (item, key, owner) {
        this._queryOperation.next(item, key, owner);
        this.done = this._queryOperation.done;
        this.keep = !this._queryOperation.keep;
    };
    return $Not;
}(NamedBaseOperation));
var $Size = /** @class */ (function (_super) {
    __extends($Size, _super);
    function $Size() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    $Size.prototype.init = function () { };
    $Size.prototype.next = function (item) {
        if (isArray(item) && item.length === this.params) {
            this.done = true;
            this.keep = true;
        }
        // if (parent && parent.length === this.params) {
        //   this.done = true;
        //   this.keep = true;
        // }
    };
    return $Size;
}(NamedBaseOperation));
var $Or = /** @class */ (function (_super) {
    __extends($Or, _super);
    function $Or() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    $Or.prototype.init = function () {
        var _this = this;
        this._ops = this.params.map(function (op) {
            return createQueryOperation(op, null, _this.options);
        });
    };
    $Or.prototype.reset = function () {
        this.done = false;
        this.keep = false;
        for (var i = 0, length_2 = this._ops.length; i < length_2; i++) {
            this._ops[i].reset();
        }
    };
    $Or.prototype.next = function (item, key, owner) {
        var done = false;
        var success = false;
        for (var i = 0, length_3 = this._ops.length; i < length_3; i++) {
            var op = this._ops[i];
            op.next(item, key, owner);
            if (op.keep) {
                done = true;
                success = op.keep;
                break;
            }
        }
        this.keep = success;
        this.done = done;
    };
    return $Or;
}(NamedBaseOperation));
var $Nor = /** @class */ (function (_super) {
    __extends($Nor, _super);
    function $Nor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    $Nor.prototype.next = function (item, key, owner) {
        _super.prototype.next.call(this, item, key, owner);
        this.keep = !this.keep;
    };
    return $Nor;
}($Or));
var $In = /** @class */ (function (_super) {
    __extends($In, _super);
    function $In() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    $In.prototype.init = function () {
        var _this = this;
        this._testers = this.params.map(function (value) {
            if (containsOperation(value)) {
                throw new Error("cannot nest $ under " + _this.constructor.name.toLowerCase());
            }
            return createTester(value, _this.options.compare);
        });
    };
    $In.prototype.next = function (item, key, owner) {
        var done = false;
        var success = false;
        for (var i = 0, length_4 = this._testers.length; i < length_4; i++) {
            var test = this._testers[i];
            if (test(item)) {
                done = true;
                success = true;
                break;
            }
        }
        this.keep = success;
        this.done = done;
    };
    return $In;
}(NamedBaseOperation));
var $Nin = /** @class */ (function (_super) {
    __extends($Nin, _super);
    function $Nin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    $Nin.prototype.next = function (item, key, owner) {
        _super.prototype.next.call(this, item, key, owner);
        this.keep = !this.keep;
    };
    return $Nin;
}($In));
var $Exists = /** @class */ (function (_super) {
    __extends($Exists, _super);
    function $Exists() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    $Exists.prototype.next = function (item, key, owner) {
        if (owner.hasOwnProperty(key) === this.params) {
            this.done = true;
            this.keep = true;
        }
    };
    return $Exists;
}(NamedBaseOperation));
var $And = /** @class */ (function (_super) {
    __extends($And, _super);
    function $And(params, owneryQuery, options, name) {
        return _super.call(this, params, owneryQuery, options, params.map(function (query) { return createQueryOperation(query, owneryQuery, options); }), name) || this;
    }
    $And.prototype.next = function (item, key, owner) {
        this.childrenNext(item, key, owner);
    };
    return $And;
}(NamedGroupOperation));
var $eq = function (params, owneryQuery, options) {
    return new EqualsOperation(params, owneryQuery, options);
};
var $ne = function (params, owneryQuery, options, name) { return new $Ne(params, owneryQuery, options, name); };
var $or = function (params, owneryQuery, options, name) { return new $Or(params, owneryQuery, options, name); };
var $nor = function (params, owneryQuery, options, name) { return new $Nor(params, owneryQuery, options, name); };
var $elemMatch = function (params, owneryQuery, options, name) { return new $ElemMatch(params, owneryQuery, options, name); };
var $nin = function (params, owneryQuery, options, name) { return new $Nin(params, owneryQuery, options, name); };
var $in = function (params, owneryQuery, options, name) { return new $In(params, owneryQuery, options, name); };
var $lt = numericalOperation(function (params) { return function (b) { return b < params; }; });
var $lte = numericalOperation(function (params) { return function (b) { return b <= params; }; });
var $gt = numericalOperation(function (params) { return function (b) { return b > params; }; });
var $gte = numericalOperation(function (params) { return function (b) { return b >= params; }; });
var $mod = function (_a, owneryQuery, options) {
    var mod = _a[0], equalsValue = _a[1];
    return new EqualsOperation(function (b) { return comparable(b) % mod === equalsValue; }, owneryQuery, options);
};
var $exists = function (params, owneryQuery, options, name) { return new $Exists(params, owneryQuery, options, name); };
var $regex = function (pattern, owneryQuery, options) {
    return new EqualsOperation(new RegExp(pattern, owneryQuery.$options), owneryQuery, options);
};
var $not = function (params, owneryQuery, options, name) { return new $Not(params, owneryQuery, options, name); };
var typeAliases = {
    number: function (v) { return typeof v === "number"; },
    string: function (v) { return typeof v === "string"; },
    bool: function (v) { return typeof v === "boolean"; },
    array: function (v) { return Array.isArray(v); },
    null: function (v) { return v === null; },
    timestamp: function (v) { return v instanceof Date; }
};
var $type = function (clazz, owneryQuery, options) {
    return new EqualsOperation(function (b) {
        if (typeof clazz === "string") {
            if (!typeAliases[clazz]) {
                throw new Error("Type alias does not exist");
            }
            return typeAliases[clazz](b);
        }
        return b != null ? b instanceof clazz || b.constructor === clazz : false;
    }, owneryQuery, options);
};
var $and = function (params, ownerQuery, options, name) { return new $And(params, ownerQuery, options, name); };
var $all = $and;
var $size = function (params, ownerQuery, options) { return new $Size(params, ownerQuery, options, "$size"); };
var $options = function () { return null; };
var $where = function (params, ownerQuery, options) {
    var test;
    if (isFunction(params)) {
        test = params;
    }
    else if (!process.env.CSP_ENABLED) {
        test = new Function("obj", "return " + params);
    }
    else {
        throw new Error("In CSP mode, sift does not support strings in \"$where\" condition");
    }
    return new EqualsOperation(function (b) { return test.bind(b)(b); }, ownerQuery, options);
};

var defaultOperations = /*#__PURE__*/Object.freeze({
    __proto__: null,
    $Size: $Size,
    $eq: $eq,
    $ne: $ne,
    $or: $or,
    $nor: $nor,
    $elemMatch: $elemMatch,
    $nin: $nin,
    $in: $in,
    $lt: $lt,
    $lte: $lte,
    $gt: $gt,
    $gte: $gte,
    $mod: $mod,
    $exists: $exists,
    $regex: $regex,
    $not: $not,
    $type: $type,
    $and: $and,
    $all: $all,
    $size: $size,
    $options: $options,
    $where: $where
});

var createDefaultQueryOperation = function (query, ownerQuery, _a) {
    var _b = _a === void 0 ? {} : _a, compare = _b.compare, operations = _b.operations;
    return createQueryOperation(query, ownerQuery, {
        compare: compare,
        operations: Object.assign({}, defaultOperations, operations || {})
    });
};
var createDefaultQueryTester = function (query, options) {
    if (options === void 0) { options = {}; }
    var op = createDefaultQueryOperation(query, null, options);
    return createOperationTester(op);
};

/* harmony default export */ __webpack_exports__["default"] = (createDefaultQueryTester);

//# sourceMappingURL=index.js.map

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ })

}]);