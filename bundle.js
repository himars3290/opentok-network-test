/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
module.exports = __webpack_require__(333);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

__webpack_require__(3);

__webpack_require__(329);

__webpack_require__(330);

if (global._babelPolyfill) {
  throw new Error("only one instance of babel-polyfill is allowed");
}
global._babelPolyfill = true;

var DEFINE_PROPERTY = "defineProperty";
function define(O, key, value) {
  O[key] || Object[DEFINE_PROPERTY](O, key, {
    writable: true,
    configurable: true,
    value: value
  });
}

define(String.prototype, "padLeft", "".padStart);
define(String.prototype, "padRight", "".padEnd);

"pop,reverse,shift,keys,values,entries,indexOf,every,some,forEach,map,filter,find,findIndex,includes,join,slice,concat,push,splice,unshift,sort,lastIndexOf,reduce,reduceRight,copyWithin,fill".split(",").forEach(function (key) {
  [][key] && define(Array, key, Function.call.bind([][key]));
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(2)))

/***/ }),
/* 2 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(4);
__webpack_require__(54);
__webpack_require__(55);
__webpack_require__(56);
__webpack_require__(57);
__webpack_require__(59);
__webpack_require__(61);
__webpack_require__(62);
__webpack_require__(63);
__webpack_require__(64);
__webpack_require__(65);
__webpack_require__(66);
__webpack_require__(67);
__webpack_require__(68);
__webpack_require__(69);
__webpack_require__(71);
__webpack_require__(73);
__webpack_require__(75);
__webpack_require__(77);
__webpack_require__(80);
__webpack_require__(81);
__webpack_require__(82);
__webpack_require__(86);
__webpack_require__(88);
__webpack_require__(90);
__webpack_require__(93);
__webpack_require__(94);
__webpack_require__(95);
__webpack_require__(96);
__webpack_require__(98);
__webpack_require__(99);
__webpack_require__(100);
__webpack_require__(101);
__webpack_require__(102);
__webpack_require__(103);
__webpack_require__(104);
__webpack_require__(106);
__webpack_require__(107);
__webpack_require__(108);
__webpack_require__(110);
__webpack_require__(111);
__webpack_require__(112);
__webpack_require__(114);
__webpack_require__(116);
__webpack_require__(117);
__webpack_require__(118);
__webpack_require__(119);
__webpack_require__(120);
__webpack_require__(121);
__webpack_require__(122);
__webpack_require__(123);
__webpack_require__(124);
__webpack_require__(125);
__webpack_require__(126);
__webpack_require__(127);
__webpack_require__(128);
__webpack_require__(133);
__webpack_require__(134);
__webpack_require__(138);
__webpack_require__(139);
__webpack_require__(140);
__webpack_require__(141);
__webpack_require__(143);
__webpack_require__(144);
__webpack_require__(145);
__webpack_require__(146);
__webpack_require__(147);
__webpack_require__(148);
__webpack_require__(149);
__webpack_require__(150);
__webpack_require__(151);
__webpack_require__(152);
__webpack_require__(153);
__webpack_require__(154);
__webpack_require__(155);
__webpack_require__(156);
__webpack_require__(157);
__webpack_require__(159);
__webpack_require__(160);
__webpack_require__(162);
__webpack_require__(163);
__webpack_require__(169);
__webpack_require__(170);
__webpack_require__(172);
__webpack_require__(173);
__webpack_require__(174);
__webpack_require__(178);
__webpack_require__(179);
__webpack_require__(180);
__webpack_require__(181);
__webpack_require__(182);
__webpack_require__(184);
__webpack_require__(185);
__webpack_require__(186);
__webpack_require__(187);
__webpack_require__(190);
__webpack_require__(192);
__webpack_require__(193);
__webpack_require__(194);
__webpack_require__(196);
__webpack_require__(198);
__webpack_require__(200);
__webpack_require__(202);
__webpack_require__(203);
__webpack_require__(204);
__webpack_require__(208);
__webpack_require__(209);
__webpack_require__(210);
__webpack_require__(212);
__webpack_require__(222);
__webpack_require__(226);
__webpack_require__(227);
__webpack_require__(229);
__webpack_require__(230);
__webpack_require__(234);
__webpack_require__(235);
__webpack_require__(237);
__webpack_require__(238);
__webpack_require__(239);
__webpack_require__(240);
__webpack_require__(241);
__webpack_require__(242);
__webpack_require__(243);
__webpack_require__(244);
__webpack_require__(245);
__webpack_require__(246);
__webpack_require__(247);
__webpack_require__(248);
__webpack_require__(249);
__webpack_require__(250);
__webpack_require__(251);
__webpack_require__(252);
__webpack_require__(253);
__webpack_require__(254);
__webpack_require__(255);
__webpack_require__(257);
__webpack_require__(258);
__webpack_require__(259);
__webpack_require__(260);
__webpack_require__(261);
__webpack_require__(263);
__webpack_require__(264);
__webpack_require__(265);
__webpack_require__(267);
__webpack_require__(268);
__webpack_require__(269);
__webpack_require__(270);
__webpack_require__(271);
__webpack_require__(272);
__webpack_require__(273);
__webpack_require__(274);
__webpack_require__(276);
__webpack_require__(277);
__webpack_require__(279);
__webpack_require__(280);
__webpack_require__(281);
__webpack_require__(282);
__webpack_require__(285);
__webpack_require__(286);
__webpack_require__(288);
__webpack_require__(289);
__webpack_require__(290);
__webpack_require__(291);
__webpack_require__(293);
__webpack_require__(294);
__webpack_require__(295);
__webpack_require__(296);
__webpack_require__(297);
__webpack_require__(298);
__webpack_require__(299);
__webpack_require__(300);
__webpack_require__(301);
__webpack_require__(302);
__webpack_require__(304);
__webpack_require__(305);
__webpack_require__(306);
__webpack_require__(307);
__webpack_require__(308);
__webpack_require__(309);
__webpack_require__(310);
__webpack_require__(311);
__webpack_require__(312);
__webpack_require__(313);
__webpack_require__(314);
__webpack_require__(316);
__webpack_require__(317);
__webpack_require__(318);
__webpack_require__(319);
__webpack_require__(320);
__webpack_require__(321);
__webpack_require__(322);
__webpack_require__(323);
__webpack_require__(324);
__webpack_require__(325);
__webpack_require__(326);
__webpack_require__(327);
__webpack_require__(328);
module.exports = __webpack_require__(10);


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(5);
var has = __webpack_require__(6);
var DESCRIPTORS = __webpack_require__(7);
var $export = __webpack_require__(9);
var redefine = __webpack_require__(19);
var META = __webpack_require__(26).KEY;
var $fails = __webpack_require__(8);
var shared = __webpack_require__(22);
var setToStringTag = __webpack_require__(27);
var uid = __webpack_require__(20);
var wks = __webpack_require__(28);
var wksExt = __webpack_require__(29);
var wksDefine = __webpack_require__(30);
var enumKeys = __webpack_require__(31);
var isArray = __webpack_require__(46);
var anObject = __webpack_require__(13);
var isObject = __webpack_require__(14);
var toObject = __webpack_require__(47);
var toIObject = __webpack_require__(34);
var toPrimitive = __webpack_require__(17);
var createDesc = __webpack_require__(18);
var _create = __webpack_require__(48);
var gOPNExt = __webpack_require__(51);
var $GOPD = __webpack_require__(53);
var $GOPS = __webpack_require__(44);
var $DP = __webpack_require__(12);
var $keys = __webpack_require__(32);
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function' && !!$GOPS.f;
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(52).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(45).f = $propertyIsEnumerable;
  $GOPS.f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(23)) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
var FAILS_ON_PRIMITIVES = $fails(function () { $GOPS.f(1); });

$export($export.S + $export.F * FAILS_ON_PRIMITIVES, 'Object', {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return $GOPS.f(toObject(it));
  }
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(11)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),
/* 5 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 6 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(8)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(5);
var core = __webpack_require__(10);
var hide = __webpack_require__(11);
var redefine = __webpack_require__(19);
var ctx = __webpack_require__(24);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 10 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.11' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(12);
var createDesc = __webpack_require__(18);
module.exports = __webpack_require__(7) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(13);
var IE8_DOM_DEFINE = __webpack_require__(15);
var toPrimitive = __webpack_require__(17);
var dP = Object.defineProperty;

exports.f = __webpack_require__(7) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(14);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(7) && !__webpack_require__(8)(function () {
  return Object.defineProperty(__webpack_require__(16)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(14);
var document = __webpack_require__(5).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(14);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(5);
var hide = __webpack_require__(11);
var has = __webpack_require__(6);
var SRC = __webpack_require__(20)('src');
var $toString = __webpack_require__(21);
var TO_STRING = 'toString';
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__(10).inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),
/* 20 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(22)('native-function-to-string', Function.toString);


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(10);
var global = __webpack_require__(5);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(23) ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(25);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(20)('meta');
var isObject = __webpack_require__(14);
var has = __webpack_require__(6);
var setDesc = __webpack_require__(12).f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(8)(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(12).f;
var has = __webpack_require__(6);
var TAG = __webpack_require__(28)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(22)('wks');
var uid = __webpack_require__(20);
var Symbol = __webpack_require__(5).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(28);


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(5);
var core = __webpack_require__(10);
var LIBRARY = __webpack_require__(23);
var wksExt = __webpack_require__(29);
var defineProperty = __webpack_require__(12).f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(32);
var gOPS = __webpack_require__(44);
var pIE = __webpack_require__(45);
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(33);
var enumBugKeys = __webpack_require__(43);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(6);
var toIObject = __webpack_require__(34);
var arrayIndexOf = __webpack_require__(38)(false);
var IE_PROTO = __webpack_require__(42)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(35);
var defined = __webpack_require__(37);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(36);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 36 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 37 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(34);
var toLength = __webpack_require__(39);
var toAbsoluteIndex = __webpack_require__(41);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(40);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 40 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(40);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(22)('keys');
var uid = __webpack_require__(20);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 43 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 44 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 45 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(36);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(37);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(13);
var dPs = __webpack_require__(49);
var enumBugKeys = __webpack_require__(43);
var IE_PROTO = __webpack_require__(42)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(16)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(50).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(12);
var anObject = __webpack_require__(13);
var getKeys = __webpack_require__(32);

module.exports = __webpack_require__(7) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(5).document;
module.exports = document && document.documentElement;


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(34);
var gOPN = __webpack_require__(52).f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(33);
var hiddenKeys = __webpack_require__(43).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(45);
var createDesc = __webpack_require__(18);
var toIObject = __webpack_require__(34);
var toPrimitive = __webpack_require__(17);
var has = __webpack_require__(6);
var IE8_DOM_DEFINE = __webpack_require__(15);
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(7) ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(9);
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', { create: __webpack_require__(48) });


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(9);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(7), 'Object', { defineProperty: __webpack_require__(12).f });


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(9);
// 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)
$export($export.S + $export.F * !__webpack_require__(7), 'Object', { defineProperties: __webpack_require__(49) });


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
var toIObject = __webpack_require__(34);
var $getOwnPropertyDescriptor = __webpack_require__(53).f;

__webpack_require__(58)('getOwnPropertyDescriptor', function () {
  return function getOwnPropertyDescriptor(it, key) {
    return $getOwnPropertyDescriptor(toIObject(it), key);
  };
});


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(9);
var core = __webpack_require__(10);
var fails = __webpack_require__(8);
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 Object.getPrototypeOf(O)
var toObject = __webpack_require__(47);
var $getPrototypeOf = __webpack_require__(60);

__webpack_require__(58)('getPrototypeOf', function () {
  return function getPrototypeOf(it) {
    return $getPrototypeOf(toObject(it));
  };
});


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(6);
var toObject = __webpack_require__(47);
var IE_PROTO = __webpack_require__(42)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(47);
var $keys = __webpack_require__(32);

__webpack_require__(58)('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 Object.getOwnPropertyNames(O)
__webpack_require__(58)('getOwnPropertyNames', function () {
  return __webpack_require__(51).f;
});


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.5 Object.freeze(O)
var isObject = __webpack_require__(14);
var meta = __webpack_require__(26).onFreeze;

__webpack_require__(58)('freeze', function ($freeze) {
  return function freeze(it) {
    return $freeze && isObject(it) ? $freeze(meta(it)) : it;
  };
});


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.17 Object.seal(O)
var isObject = __webpack_require__(14);
var meta = __webpack_require__(26).onFreeze;

__webpack_require__(58)('seal', function ($seal) {
  return function seal(it) {
    return $seal && isObject(it) ? $seal(meta(it)) : it;
  };
});


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.15 Object.preventExtensions(O)
var isObject = __webpack_require__(14);
var meta = __webpack_require__(26).onFreeze;

__webpack_require__(58)('preventExtensions', function ($preventExtensions) {
  return function preventExtensions(it) {
    return $preventExtensions && isObject(it) ? $preventExtensions(meta(it)) : it;
  };
});


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.12 Object.isFrozen(O)
var isObject = __webpack_require__(14);

__webpack_require__(58)('isFrozen', function ($isFrozen) {
  return function isFrozen(it) {
    return isObject(it) ? $isFrozen ? $isFrozen(it) : false : true;
  };
});


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.13 Object.isSealed(O)
var isObject = __webpack_require__(14);

__webpack_require__(58)('isSealed', function ($isSealed) {
  return function isSealed(it) {
    return isObject(it) ? $isSealed ? $isSealed(it) : false : true;
  };
});


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.11 Object.isExtensible(O)
var isObject = __webpack_require__(14);

__webpack_require__(58)('isExtensible', function ($isExtensible) {
  return function isExtensible(it) {
    return isObject(it) ? $isExtensible ? $isExtensible(it) : true : false;
  };
});


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(9);

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(70) });


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var DESCRIPTORS = __webpack_require__(7);
var getKeys = __webpack_require__(32);
var gOPS = __webpack_require__(44);
var pIE = __webpack_require__(45);
var toObject = __webpack_require__(47);
var IObject = __webpack_require__(35);
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(8)(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS || isEnum.call(S, key)) T[key] = S[key];
    }
  } return T;
} : $assign;


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.10 Object.is(value1, value2)
var $export = __webpack_require__(9);
$export($export.S, 'Object', { is: __webpack_require__(72) });


/***/ }),
/* 72 */
/***/ (function(module, exports) {

// 7.2.9 SameValue(x, y)
module.exports = Object.is || function is(x, y) {
  // eslint-disable-next-line no-self-compare
  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
};


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__(9);
$export($export.S, 'Object', { setPrototypeOf: __webpack_require__(74).set });


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(14);
var anObject = __webpack_require__(13);
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__(24)(Function.call, __webpack_require__(53).f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.3.6 Object.prototype.toString()
var classof = __webpack_require__(76);
var test = {};
test[__webpack_require__(28)('toStringTag')] = 'z';
if (test + '' != '[object z]') {
  __webpack_require__(19)(Object.prototype, 'toString', function toString() {
    return '[object ' + classof(this) + ']';
  }, true);
}


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(36);
var TAG = __webpack_require__(28)('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

// 19.2.3.2 / 15.3.4.5 Function.prototype.bind(thisArg, args...)
var $export = __webpack_require__(9);

$export($export.P, 'Function', { bind: __webpack_require__(78) });


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var aFunction = __webpack_require__(25);
var isObject = __webpack_require__(14);
var invoke = __webpack_require__(79);
var arraySlice = [].slice;
var factories = {};

var construct = function (F, len, args) {
  if (!(len in factories)) {
    for (var n = [], i = 0; i < len; i++) n[i] = 'a[' + i + ']';
    // eslint-disable-next-line no-new-func
    factories[len] = Function('F,a', 'return new F(' + n.join(',') + ')');
  } return factories[len](F, args);
};

module.exports = Function.bind || function bind(that /* , ...args */) {
  var fn = aFunction(this);
  var partArgs = arraySlice.call(arguments, 1);
  var bound = function (/* args... */) {
    var args = partArgs.concat(arraySlice.call(arguments));
    return this instanceof bound ? construct(fn, args.length, args) : invoke(fn, args, that);
  };
  if (isObject(fn.prototype)) bound.prototype = fn.prototype;
  return bound;
};


/***/ }),
/* 79 */
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(12).f;
var FProto = Function.prototype;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// 19.2.4.2 name
NAME in FProto || __webpack_require__(7) && dP(FProto, NAME, {
  configurable: true,
  get: function () {
    try {
      return ('' + this).match(nameRE)[1];
    } catch (e) {
      return '';
    }
  }
});


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var isObject = __webpack_require__(14);
var getPrototypeOf = __webpack_require__(60);
var HAS_INSTANCE = __webpack_require__(28)('hasInstance');
var FunctionProto = Function.prototype;
// 19.2.3.6 Function.prototype[@@hasInstance](V)
if (!(HAS_INSTANCE in FunctionProto)) __webpack_require__(12).f(FunctionProto, HAS_INSTANCE, { value: function (O) {
  if (typeof this != 'function' || !isObject(O)) return false;
  if (!isObject(this.prototype)) return O instanceof this;
  // for environment w/o native `@@hasInstance` logic enough `instanceof`, but add this:
  while (O = getPrototypeOf(O)) if (this.prototype === O) return true;
  return false;
} });


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(9);
var $parseInt = __webpack_require__(83);
// 18.2.5 parseInt(string, radix)
$export($export.G + $export.F * (parseInt != $parseInt), { parseInt: $parseInt });


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

var $parseInt = __webpack_require__(5).parseInt;
var $trim = __webpack_require__(84).trim;
var ws = __webpack_require__(85);
var hex = /^[-+]?0[xX]/;

module.exports = $parseInt(ws + '08') !== 8 || $parseInt(ws + '0x16') !== 22 ? function parseInt(str, radix) {
  var string = $trim(String(str), 3);
  return $parseInt(string, (radix >>> 0) || (hex.test(string) ? 16 : 10));
} : $parseInt;


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(9);
var defined = __webpack_require__(37);
var fails = __webpack_require__(8);
var spaces = __webpack_require__(85);
var space = '[' + spaces + ']';
var non = '\u200b\u0085';
var ltrim = RegExp('^' + space + space + '*');
var rtrim = RegExp(space + space + '*$');

var exporter = function (KEY, exec, ALIAS) {
  var exp = {};
  var FORCE = fails(function () {
    return !!spaces[KEY]() || non[KEY]() != non;
  });
  var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];
  if (ALIAS) exp[ALIAS] = fn;
  $export($export.P + $export.F * FORCE, 'String', exp);
};

// 1 -> String#trimLeft
// 2 -> String#trimRight
// 3 -> String#trim
var trim = exporter.trim = function (string, TYPE) {
  string = String(defined(string));
  if (TYPE & 1) string = string.replace(ltrim, '');
  if (TYPE & 2) string = string.replace(rtrim, '');
  return string;
};

module.exports = exporter;


/***/ }),
/* 85 */
/***/ (function(module, exports) {

module.exports = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
  '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(9);
var $parseFloat = __webpack_require__(87);
// 18.2.4 parseFloat(string)
$export($export.G + $export.F * (parseFloat != $parseFloat), { parseFloat: $parseFloat });


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

var $parseFloat = __webpack_require__(5).parseFloat;
var $trim = __webpack_require__(84).trim;

module.exports = 1 / $parseFloat(__webpack_require__(85) + '-0') !== -Infinity ? function parseFloat(str) {
  var string = $trim(String(str), 3);
  var result = $parseFloat(string);
  return result === 0 && string.charAt(0) == '-' ? -0 : result;
} : $parseFloat;


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(5);
var has = __webpack_require__(6);
var cof = __webpack_require__(36);
var inheritIfRequired = __webpack_require__(89);
var toPrimitive = __webpack_require__(17);
var fails = __webpack_require__(8);
var gOPN = __webpack_require__(52).f;
var gOPD = __webpack_require__(53).f;
var dP = __webpack_require__(12).f;
var $trim = __webpack_require__(84).trim;
var NUMBER = 'Number';
var $Number = global[NUMBER];
var Base = $Number;
var proto = $Number.prototype;
// Opera ~12 has broken Object#toString
var BROKEN_COF = cof(__webpack_require__(48)(proto)) == NUMBER;
var TRIM = 'trim' in String.prototype;

// 7.1.3 ToNumber(argument)
var toNumber = function (argument) {
  var it = toPrimitive(argument, false);
  if (typeof it == 'string' && it.length > 2) {
    it = TRIM ? it.trim() : $trim(it, 3);
    var first = it.charCodeAt(0);
    var third, radix, maxCode;
    if (first === 43 || first === 45) {
      third = it.charCodeAt(2);
      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
    } else if (first === 48) {
      switch (it.charCodeAt(1)) {
        case 66: case 98: radix = 2; maxCode = 49; break; // fast equal /^0b[01]+$/i
        case 79: case 111: radix = 8; maxCode = 55; break; // fast equal /^0o[0-7]+$/i
        default: return +it;
      }
      for (var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++) {
        code = digits.charCodeAt(i);
        // parseInt parses a string to a first unavailable symbol
        // but ToNumber should return NaN if a string contains unavailable symbols
        if (code < 48 || code > maxCode) return NaN;
      } return parseInt(digits, radix);
    }
  } return +it;
};

if (!$Number(' 0o1') || !$Number('0b1') || $Number('+0x1')) {
  $Number = function Number(value) {
    var it = arguments.length < 1 ? 0 : value;
    var that = this;
    return that instanceof $Number
      // check on 1..constructor(foo) case
      && (BROKEN_COF ? fails(function () { proto.valueOf.call(that); }) : cof(that) != NUMBER)
        ? inheritIfRequired(new Base(toNumber(it)), that, $Number) : toNumber(it);
  };
  for (var keys = __webpack_require__(7) ? gOPN(Base) : (
    // ES3:
    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
    // ES6 (in case, if modules with ES6 Number statics required before):
    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
  ).split(','), j = 0, key; keys.length > j; j++) {
    if (has(Base, key = keys[j]) && !has($Number, key)) {
      dP($Number, key, gOPD(Base, key));
    }
  }
  $Number.prototype = proto;
  proto.constructor = $Number;
  __webpack_require__(19)(global, NUMBER, $Number);
}


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(14);
var setPrototypeOf = __webpack_require__(74).set;
module.exports = function (that, target, C) {
  var S = target.constructor;
  var P;
  if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf) {
    setPrototypeOf(that, P);
  } return that;
};


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(9);
var toInteger = __webpack_require__(40);
var aNumberValue = __webpack_require__(91);
var repeat = __webpack_require__(92);
var $toFixed = 1.0.toFixed;
var floor = Math.floor;
var data = [0, 0, 0, 0, 0, 0];
var ERROR = 'Number.toFixed: incorrect invocation!';
var ZERO = '0';

var multiply = function (n, c) {
  var i = -1;
  var c2 = c;
  while (++i < 6) {
    c2 += n * data[i];
    data[i] = c2 % 1e7;
    c2 = floor(c2 / 1e7);
  }
};
var divide = function (n) {
  var i = 6;
  var c = 0;
  while (--i >= 0) {
    c += data[i];
    data[i] = floor(c / n);
    c = (c % n) * 1e7;
  }
};
var numToString = function () {
  var i = 6;
  var s = '';
  while (--i >= 0) {
    if (s !== '' || i === 0 || data[i] !== 0) {
      var t = String(data[i]);
      s = s === '' ? t : s + repeat.call(ZERO, 7 - t.length) + t;
    }
  } return s;
};
var pow = function (x, n, acc) {
  return n === 0 ? acc : n % 2 === 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc);
};
var log = function (x) {
  var n = 0;
  var x2 = x;
  while (x2 >= 4096) {
    n += 12;
    x2 /= 4096;
  }
  while (x2 >= 2) {
    n += 1;
    x2 /= 2;
  } return n;
};

$export($export.P + $export.F * (!!$toFixed && (
  0.00008.toFixed(3) !== '0.000' ||
  0.9.toFixed(0) !== '1' ||
  1.255.toFixed(2) !== '1.25' ||
  1000000000000000128.0.toFixed(0) !== '1000000000000000128'
) || !__webpack_require__(8)(function () {
  // V8 ~ Android 4.3-
  $toFixed.call({});
})), 'Number', {
  toFixed: function toFixed(fractionDigits) {
    var x = aNumberValue(this, ERROR);
    var f = toInteger(fractionDigits);
    var s = '';
    var m = ZERO;
    var e, z, j, k;
    if (f < 0 || f > 20) throw RangeError(ERROR);
    // eslint-disable-next-line no-self-compare
    if (x != x) return 'NaN';
    if (x <= -1e21 || x >= 1e21) return String(x);
    if (x < 0) {
      s = '-';
      x = -x;
    }
    if (x > 1e-21) {
      e = log(x * pow(2, 69, 1)) - 69;
      z = e < 0 ? x * pow(2, -e, 1) : x / pow(2, e, 1);
      z *= 0x10000000000000;
      e = 52 - e;
      if (e > 0) {
        multiply(0, z);
        j = f;
        while (j >= 7) {
          multiply(1e7, 0);
          j -= 7;
        }
        multiply(pow(10, j, 1), 0);
        j = e - 1;
        while (j >= 23) {
          divide(1 << 23);
          j -= 23;
        }
        divide(1 << j);
        multiply(1, 1);
        divide(2);
        m = numToString();
      } else {
        multiply(0, z);
        multiply(1 << -e, 0);
        m = numToString() + repeat.call(ZERO, f);
      }
    }
    if (f > 0) {
      k = m.length;
      m = s + (k <= f ? '0.' + repeat.call(ZERO, f - k) + m : m.slice(0, k - f) + '.' + m.slice(k - f));
    } else {
      m = s + m;
    } return m;
  }
});


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

var cof = __webpack_require__(36);
module.exports = function (it, msg) {
  if (typeof it != 'number' && cof(it) != 'Number') throw TypeError(msg);
  return +it;
};


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toInteger = __webpack_require__(40);
var defined = __webpack_require__(37);

module.exports = function repeat(count) {
  var str = String(defined(this));
  var res = '';
  var n = toInteger(count);
  if (n < 0 || n == Infinity) throw RangeError("Count can't be negative");
  for (;n > 0; (n >>>= 1) && (str += str)) if (n & 1) res += str;
  return res;
};


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(9);
var $fails = __webpack_require__(8);
var aNumberValue = __webpack_require__(91);
var $toPrecision = 1.0.toPrecision;

$export($export.P + $export.F * ($fails(function () {
  // IE7-
  return $toPrecision.call(1, undefined) !== '1';
}) || !$fails(function () {
  // V8 ~ Android 4.3-
  $toPrecision.call({});
})), 'Number', {
  toPrecision: function toPrecision(precision) {
    var that = aNumberValue(this, 'Number#toPrecision: incorrect invocation!');
    return precision === undefined ? $toPrecision.call(that) : $toPrecision.call(that, precision);
  }
});


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.1 Number.EPSILON
var $export = __webpack_require__(9);

$export($export.S, 'Number', { EPSILON: Math.pow(2, -52) });


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.2 Number.isFinite(number)
var $export = __webpack_require__(9);
var _isFinite = __webpack_require__(5).isFinite;

$export($export.S, 'Number', {
  isFinite: function isFinite(it) {
    return typeof it == 'number' && _isFinite(it);
  }
});


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.3 Number.isInteger(number)
var $export = __webpack_require__(9);

$export($export.S, 'Number', { isInteger: __webpack_require__(97) });


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.3 Number.isInteger(number)
var isObject = __webpack_require__(14);
var floor = Math.floor;
module.exports = function isInteger(it) {
  return !isObject(it) && isFinite(it) && floor(it) === it;
};


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.4 Number.isNaN(number)
var $export = __webpack_require__(9);

$export($export.S, 'Number', {
  isNaN: function isNaN(number) {
    // eslint-disable-next-line no-self-compare
    return number != number;
  }
});


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.5 Number.isSafeInteger(number)
var $export = __webpack_require__(9);
var isInteger = __webpack_require__(97);
var abs = Math.abs;

$export($export.S, 'Number', {
  isSafeInteger: function isSafeInteger(number) {
    return isInteger(number) && abs(number) <= 0x1fffffffffffff;
  }
});


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.6 Number.MAX_SAFE_INTEGER
var $export = __webpack_require__(9);

$export($export.S, 'Number', { MAX_SAFE_INTEGER: 0x1fffffffffffff });


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.10 Number.MIN_SAFE_INTEGER
var $export = __webpack_require__(9);

$export($export.S, 'Number', { MIN_SAFE_INTEGER: -0x1fffffffffffff });


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(9);
var $parseFloat = __webpack_require__(87);
// 20.1.2.12 Number.parseFloat(string)
$export($export.S + $export.F * (Number.parseFloat != $parseFloat), 'Number', { parseFloat: $parseFloat });


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(9);
var $parseInt = __webpack_require__(83);
// 20.1.2.13 Number.parseInt(string, radix)
$export($export.S + $export.F * (Number.parseInt != $parseInt), 'Number', { parseInt: $parseInt });


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.3 Math.acosh(x)
var $export = __webpack_require__(9);
var log1p = __webpack_require__(105);
var sqrt = Math.sqrt;
var $acosh = Math.acosh;

$export($export.S + $export.F * !($acosh
  // V8 bug: https://code.google.com/p/v8/issues/detail?id=3509
  && Math.floor($acosh(Number.MAX_VALUE)) == 710
  // Tor Browser bug: Math.acosh(Infinity) -> NaN
  && $acosh(Infinity) == Infinity
), 'Math', {
  acosh: function acosh(x) {
    return (x = +x) < 1 ? NaN : x > 94906265.62425156
      ? Math.log(x) + Math.LN2
      : log1p(x - 1 + sqrt(x - 1) * sqrt(x + 1));
  }
});


/***/ }),
/* 105 */
/***/ (function(module, exports) {

// 20.2.2.20 Math.log1p(x)
module.exports = Math.log1p || function log1p(x) {
  return (x = +x) > -1e-8 && x < 1e-8 ? x - x * x / 2 : Math.log(1 + x);
};


/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.5 Math.asinh(x)
var $export = __webpack_require__(9);
var $asinh = Math.asinh;

function asinh(x) {
  return !isFinite(x = +x) || x == 0 ? x : x < 0 ? -asinh(-x) : Math.log(x + Math.sqrt(x * x + 1));
}

// Tor Browser bug: Math.asinh(0) -> -0
$export($export.S + $export.F * !($asinh && 1 / $asinh(0) > 0), 'Math', { asinh: asinh });


/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.7 Math.atanh(x)
var $export = __webpack_require__(9);
var $atanh = Math.atanh;

// Tor Browser bug: Math.atanh(-0) -> 0
$export($export.S + $export.F * !($atanh && 1 / $atanh(-0) < 0), 'Math', {
  atanh: function atanh(x) {
    return (x = +x) == 0 ? x : Math.log((1 + x) / (1 - x)) / 2;
  }
});


/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.9 Math.cbrt(x)
var $export = __webpack_require__(9);
var sign = __webpack_require__(109);

$export($export.S, 'Math', {
  cbrt: function cbrt(x) {
    return sign(x = +x) * Math.pow(Math.abs(x), 1 / 3);
  }
});


/***/ }),
/* 109 */
/***/ (function(module, exports) {

// 20.2.2.28 Math.sign(x)
module.exports = Math.sign || function sign(x) {
  // eslint-disable-next-line no-self-compare
  return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;
};


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.11 Math.clz32(x)
var $export = __webpack_require__(9);

$export($export.S, 'Math', {
  clz32: function clz32(x) {
    return (x >>>= 0) ? 31 - Math.floor(Math.log(x + 0.5) * Math.LOG2E) : 32;
  }
});


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.12 Math.cosh(x)
var $export = __webpack_require__(9);
var exp = Math.exp;

$export($export.S, 'Math', {
  cosh: function cosh(x) {
    return (exp(x = +x) + exp(-x)) / 2;
  }
});


/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.14 Math.expm1(x)
var $export = __webpack_require__(9);
var $expm1 = __webpack_require__(113);

$export($export.S + $export.F * ($expm1 != Math.expm1), 'Math', { expm1: $expm1 });


/***/ }),
/* 113 */
/***/ (function(module, exports) {

// 20.2.2.14 Math.expm1(x)
var $expm1 = Math.expm1;
module.exports = (!$expm1
  // Old FF bug
  || $expm1(10) > 22025.465794806719 || $expm1(10) < 22025.4657948067165168
  // Tor Browser bug
  || $expm1(-2e-17) != -2e-17
) ? function expm1(x) {
  return (x = +x) == 0 ? x : x > -1e-6 && x < 1e-6 ? x + x * x / 2 : Math.exp(x) - 1;
} : $expm1;


/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.16 Math.fround(x)
var $export = __webpack_require__(9);

$export($export.S, 'Math', { fround: __webpack_require__(115) });


/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.16 Math.fround(x)
var sign = __webpack_require__(109);
var pow = Math.pow;
var EPSILON = pow(2, -52);
var EPSILON32 = pow(2, -23);
var MAX32 = pow(2, 127) * (2 - EPSILON32);
var MIN32 = pow(2, -126);

var roundTiesToEven = function (n) {
  return n + 1 / EPSILON - 1 / EPSILON;
};

module.exports = Math.fround || function fround(x) {
  var $abs = Math.abs(x);
  var $sign = sign(x);
  var a, result;
  if ($abs < MIN32) return $sign * roundTiesToEven($abs / MIN32 / EPSILON32) * MIN32 * EPSILON32;
  a = (1 + EPSILON32 / EPSILON) * $abs;
  result = a - (a - $abs);
  // eslint-disable-next-line no-self-compare
  if (result > MAX32 || result != result) return $sign * Infinity;
  return $sign * result;
};


/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.17 Math.hypot([value1[, value2[, … ]]])
var $export = __webpack_require__(9);
var abs = Math.abs;

$export($export.S, 'Math', {
  hypot: function hypot(value1, value2) { // eslint-disable-line no-unused-vars
    var sum = 0;
    var i = 0;
    var aLen = arguments.length;
    var larg = 0;
    var arg, div;
    while (i < aLen) {
      arg = abs(arguments[i++]);
      if (larg < arg) {
        div = larg / arg;
        sum = sum * div * div + 1;
        larg = arg;
      } else if (arg > 0) {
        div = arg / larg;
        sum += div * div;
      } else sum += arg;
    }
    return larg === Infinity ? Infinity : larg * Math.sqrt(sum);
  }
});


/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.18 Math.imul(x, y)
var $export = __webpack_require__(9);
var $imul = Math.imul;

// some WebKit versions fails with big numbers, some has wrong arity
$export($export.S + $export.F * __webpack_require__(8)(function () {
  return $imul(0xffffffff, 5) != -5 || $imul.length != 2;
}), 'Math', {
  imul: function imul(x, y) {
    var UINT16 = 0xffff;
    var xn = +x;
    var yn = +y;
    var xl = UINT16 & xn;
    var yl = UINT16 & yn;
    return 0 | xl * yl + ((UINT16 & xn >>> 16) * yl + xl * (UINT16 & yn >>> 16) << 16 >>> 0);
  }
});


/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.21 Math.log10(x)
var $export = __webpack_require__(9);

$export($export.S, 'Math', {
  log10: function log10(x) {
    return Math.log(x) * Math.LOG10E;
  }
});


/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.20 Math.log1p(x)
var $export = __webpack_require__(9);

$export($export.S, 'Math', { log1p: __webpack_require__(105) });


/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.22 Math.log2(x)
var $export = __webpack_require__(9);

$export($export.S, 'Math', {
  log2: function log2(x) {
    return Math.log(x) / Math.LN2;
  }
});


/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.28 Math.sign(x)
var $export = __webpack_require__(9);

$export($export.S, 'Math', { sign: __webpack_require__(109) });


/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.30 Math.sinh(x)
var $export = __webpack_require__(9);
var expm1 = __webpack_require__(113);
var exp = Math.exp;

// V8 near Chromium 38 has a problem with very small numbers
$export($export.S + $export.F * __webpack_require__(8)(function () {
  return !Math.sinh(-2e-17) != -2e-17;
}), 'Math', {
  sinh: function sinh(x) {
    return Math.abs(x = +x) < 1
      ? (expm1(x) - expm1(-x)) / 2
      : (exp(x - 1) - exp(-x - 1)) * (Math.E / 2);
  }
});


/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.33 Math.tanh(x)
var $export = __webpack_require__(9);
var expm1 = __webpack_require__(113);
var exp = Math.exp;

$export($export.S, 'Math', {
  tanh: function tanh(x) {
    var a = expm1(x = +x);
    var b = expm1(-x);
    return a == Infinity ? 1 : b == Infinity ? -1 : (a - b) / (exp(x) + exp(-x));
  }
});


/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.34 Math.trunc(x)
var $export = __webpack_require__(9);

$export($export.S, 'Math', {
  trunc: function trunc(it) {
    return (it > 0 ? Math.floor : Math.ceil)(it);
  }
});


/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(9);
var toAbsoluteIndex = __webpack_require__(41);
var fromCharCode = String.fromCharCode;
var $fromCodePoint = String.fromCodePoint;

// length should be 1, old FF problem
$export($export.S + $export.F * (!!$fromCodePoint && $fromCodePoint.length != 1), 'String', {
  // 21.1.2.2 String.fromCodePoint(...codePoints)
  fromCodePoint: function fromCodePoint(x) { // eslint-disable-line no-unused-vars
    var res = [];
    var aLen = arguments.length;
    var i = 0;
    var code;
    while (aLen > i) {
      code = +arguments[i++];
      if (toAbsoluteIndex(code, 0x10ffff) !== code) throw RangeError(code + ' is not a valid code point');
      res.push(code < 0x10000
        ? fromCharCode(code)
        : fromCharCode(((code -= 0x10000) >> 10) + 0xd800, code % 0x400 + 0xdc00)
      );
    } return res.join('');
  }
});


/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(9);
var toIObject = __webpack_require__(34);
var toLength = __webpack_require__(39);

$export($export.S, 'String', {
  // 21.1.2.4 String.raw(callSite, ...substitutions)
  raw: function raw(callSite) {
    var tpl = toIObject(callSite.raw);
    var len = toLength(tpl.length);
    var aLen = arguments.length;
    var res = [];
    var i = 0;
    while (len > i) {
      res.push(String(tpl[i++]));
      if (i < aLen) res.push(String(arguments[i]));
    } return res.join('');
  }
});


/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 21.1.3.25 String.prototype.trim()
__webpack_require__(84)('trim', function ($trim) {
  return function trim() {
    return $trim(this, 3);
  };
});


/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(129)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(130)(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(40);
var defined = __webpack_require__(37);
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(23);
var $export = __webpack_require__(9);
var redefine = __webpack_require__(19);
var hide = __webpack_require__(11);
var Iterators = __webpack_require__(131);
var $iterCreate = __webpack_require__(132);
var setToStringTag = __webpack_require__(27);
var getPrototypeOf = __webpack_require__(60);
var ITERATOR = __webpack_require__(28)('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),
/* 131 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(48);
var descriptor = __webpack_require__(18);
var setToStringTag = __webpack_require__(27);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(11)(IteratorPrototype, __webpack_require__(28)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(9);
var $at = __webpack_require__(129)(false);
$export($export.P, 'String', {
  // 21.1.3.3 String.prototype.codePointAt(pos)
  codePointAt: function codePointAt(pos) {
    return $at(this, pos);
  }
});


/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 21.1.3.6 String.prototype.endsWith(searchString [, endPosition])

var $export = __webpack_require__(9);
var toLength = __webpack_require__(39);
var context = __webpack_require__(135);
var ENDS_WITH = 'endsWith';
var $endsWith = ''[ENDS_WITH];

$export($export.P + $export.F * __webpack_require__(137)(ENDS_WITH), 'String', {
  endsWith: function endsWith(searchString /* , endPosition = @length */) {
    var that = context(this, searchString, ENDS_WITH);
    var endPosition = arguments.length > 1 ? arguments[1] : undefined;
    var len = toLength(that.length);
    var end = endPosition === undefined ? len : Math.min(toLength(endPosition), len);
    var search = String(searchString);
    return $endsWith
      ? $endsWith.call(that, search, end)
      : that.slice(end - search.length, end) === search;
  }
});


/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

// helper for String#{startsWith, endsWith, includes}
var isRegExp = __webpack_require__(136);
var defined = __webpack_require__(37);

module.exports = function (that, searchString, NAME) {
  if (isRegExp(searchString)) throw TypeError('String#' + NAME + " doesn't accept regex!");
  return String(defined(that));
};


/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.8 IsRegExp(argument)
var isObject = __webpack_require__(14);
var cof = __webpack_require__(36);
var MATCH = __webpack_require__(28)('match');
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
};


/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

var MATCH = __webpack_require__(28)('match');
module.exports = function (KEY) {
  var re = /./;
  try {
    '/./'[KEY](re);
  } catch (e) {
    try {
      re[MATCH] = false;
      return !'/./'[KEY](re);
    } catch (f) { /* empty */ }
  } return true;
};


/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 21.1.3.7 String.prototype.includes(searchString, position = 0)

var $export = __webpack_require__(9);
var context = __webpack_require__(135);
var INCLUDES = 'includes';

$export($export.P + $export.F * __webpack_require__(137)(INCLUDES), 'String', {
  includes: function includes(searchString /* , position = 0 */) {
    return !!~context(this, searchString, INCLUDES)
      .indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(9);

$export($export.P, 'String', {
  // 21.1.3.13 String.prototype.repeat(count)
  repeat: __webpack_require__(92)
});


/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 21.1.3.18 String.prototype.startsWith(searchString [, position ])

var $export = __webpack_require__(9);
var toLength = __webpack_require__(39);
var context = __webpack_require__(135);
var STARTS_WITH = 'startsWith';
var $startsWith = ''[STARTS_WITH];

$export($export.P + $export.F * __webpack_require__(137)(STARTS_WITH), 'String', {
  startsWith: function startsWith(searchString /* , position = 0 */) {
    var that = context(this, searchString, STARTS_WITH);
    var index = toLength(Math.min(arguments.length > 1 ? arguments[1] : undefined, that.length));
    var search = String(searchString);
    return $startsWith
      ? $startsWith.call(that, search, index)
      : that.slice(index, index + search.length) === search;
  }
});


/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.2 String.prototype.anchor(name)
__webpack_require__(142)('anchor', function (createHTML) {
  return function anchor(name) {
    return createHTML(this, 'a', 'name', name);
  };
});


/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(9);
var fails = __webpack_require__(8);
var defined = __webpack_require__(37);
var quot = /"/g;
// B.2.3.2.1 CreateHTML(string, tag, attribute, value)
var createHTML = function (string, tag, attribute, value) {
  var S = String(defined(string));
  var p1 = '<' + tag;
  if (attribute !== '') p1 += ' ' + attribute + '="' + String(value).replace(quot, '&quot;') + '"';
  return p1 + '>' + S + '</' + tag + '>';
};
module.exports = function (NAME, exec) {
  var O = {};
  O[NAME] = exec(createHTML);
  $export($export.P + $export.F * fails(function () {
    var test = ''[NAME]('"');
    return test !== test.toLowerCase() || test.split('"').length > 3;
  }), 'String', O);
};


/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.3 String.prototype.big()
__webpack_require__(142)('big', function (createHTML) {
  return function big() {
    return createHTML(this, 'big', '', '');
  };
});


/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.4 String.prototype.blink()
__webpack_require__(142)('blink', function (createHTML) {
  return function blink() {
    return createHTML(this, 'blink', '', '');
  };
});


/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.5 String.prototype.bold()
__webpack_require__(142)('bold', function (createHTML) {
  return function bold() {
    return createHTML(this, 'b', '', '');
  };
});


/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.6 String.prototype.fixed()
__webpack_require__(142)('fixed', function (createHTML) {
  return function fixed() {
    return createHTML(this, 'tt', '', '');
  };
});


/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.7 String.prototype.fontcolor(color)
__webpack_require__(142)('fontcolor', function (createHTML) {
  return function fontcolor(color) {
    return createHTML(this, 'font', 'color', color);
  };
});


/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.8 String.prototype.fontsize(size)
__webpack_require__(142)('fontsize', function (createHTML) {
  return function fontsize(size) {
    return createHTML(this, 'font', 'size', size);
  };
});


/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.9 String.prototype.italics()
__webpack_require__(142)('italics', function (createHTML) {
  return function italics() {
    return createHTML(this, 'i', '', '');
  };
});


/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.10 String.prototype.link(url)
__webpack_require__(142)('link', function (createHTML) {
  return function link(url) {
    return createHTML(this, 'a', 'href', url);
  };
});


/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.11 String.prototype.small()
__webpack_require__(142)('small', function (createHTML) {
  return function small() {
    return createHTML(this, 'small', '', '');
  };
});


/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.12 String.prototype.strike()
__webpack_require__(142)('strike', function (createHTML) {
  return function strike() {
    return createHTML(this, 'strike', '', '');
  };
});


/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.13 String.prototype.sub()
__webpack_require__(142)('sub', function (createHTML) {
  return function sub() {
    return createHTML(this, 'sub', '', '');
  };
});


/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.14 String.prototype.sup()
__webpack_require__(142)('sup', function (createHTML) {
  return function sup() {
    return createHTML(this, 'sup', '', '');
  };
});


/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

// 20.3.3.1 / 15.9.4.4 Date.now()
var $export = __webpack_require__(9);

$export($export.S, 'Date', { now: function () { return new Date().getTime(); } });


/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(9);
var toObject = __webpack_require__(47);
var toPrimitive = __webpack_require__(17);

$export($export.P + $export.F * __webpack_require__(8)(function () {
  return new Date(NaN).toJSON() !== null
    || Date.prototype.toJSON.call({ toISOString: function () { return 1; } }) !== 1;
}), 'Date', {
  // eslint-disable-next-line no-unused-vars
  toJSON: function toJSON(key) {
    var O = toObject(this);
    var pv = toPrimitive(O);
    return typeof pv == 'number' && !isFinite(pv) ? null : O.toISOString();
  }
});


/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()
var $export = __webpack_require__(9);
var toISOString = __webpack_require__(158);

// PhantomJS / old WebKit has a broken implementations
$export($export.P + $export.F * (Date.prototype.toISOString !== toISOString), 'Date', {
  toISOString: toISOString
});


/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()
var fails = __webpack_require__(8);
var getTime = Date.prototype.getTime;
var $toISOString = Date.prototype.toISOString;

var lz = function (num) {
  return num > 9 ? num : '0' + num;
};

// PhantomJS / old WebKit has a broken implementations
module.exports = (fails(function () {
  return $toISOString.call(new Date(-5e13 - 1)) != '0385-07-25T07:06:39.999Z';
}) || !fails(function () {
  $toISOString.call(new Date(NaN));
})) ? function toISOString() {
  if (!isFinite(getTime.call(this))) throw RangeError('Invalid time value');
  var d = this;
  var y = d.getUTCFullYear();
  var m = d.getUTCMilliseconds();
  var s = y < 0 ? '-' : y > 9999 ? '+' : '';
  return s + ('00000' + Math.abs(y)).slice(s ? -6 : -4) +
    '-' + lz(d.getUTCMonth() + 1) + '-' + lz(d.getUTCDate()) +
    'T' + lz(d.getUTCHours()) + ':' + lz(d.getUTCMinutes()) +
    ':' + lz(d.getUTCSeconds()) + '.' + (m > 99 ? m : '0' + lz(m)) + 'Z';
} : $toISOString;


/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

var DateProto = Date.prototype;
var INVALID_DATE = 'Invalid Date';
var TO_STRING = 'toString';
var $toString = DateProto[TO_STRING];
var getTime = DateProto.getTime;
if (new Date(NaN) + '' != INVALID_DATE) {
  __webpack_require__(19)(DateProto, TO_STRING, function toString() {
    var value = getTime.call(this);
    // eslint-disable-next-line no-self-compare
    return value === value ? $toString.call(this) : INVALID_DATE;
  });
}


/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

var TO_PRIMITIVE = __webpack_require__(28)('toPrimitive');
var proto = Date.prototype;

if (!(TO_PRIMITIVE in proto)) __webpack_require__(11)(proto, TO_PRIMITIVE, __webpack_require__(161));


/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var anObject = __webpack_require__(13);
var toPrimitive = __webpack_require__(17);
var NUMBER = 'number';

module.exports = function (hint) {
  if (hint !== 'string' && hint !== NUMBER && hint !== 'default') throw TypeError('Incorrect hint');
  return toPrimitive(anObject(this), hint != NUMBER);
};


/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
var $export = __webpack_require__(9);

$export($export.S, 'Array', { isArray: __webpack_require__(46) });


/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx = __webpack_require__(24);
var $export = __webpack_require__(9);
var toObject = __webpack_require__(47);
var call = __webpack_require__(164);
var isArrayIter = __webpack_require__(165);
var toLength = __webpack_require__(39);
var createProperty = __webpack_require__(166);
var getIterFn = __webpack_require__(167);

$export($export.S + $export.F * !__webpack_require__(168)(function (iter) { Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = getIterFn(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for (result = new C(length); length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});


/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(13);
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(131);
var ITERATOR = __webpack_require__(28)('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__(12);
var createDesc = __webpack_require__(18);

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(76);
var ITERATOR = __webpack_require__(28)('iterator');
var Iterators = __webpack_require__(131);
module.exports = __webpack_require__(10).getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(28)('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(9);
var createProperty = __webpack_require__(166);

// WebKit Array.of isn't generic
$export($export.S + $export.F * __webpack_require__(8)(function () {
  function F() { /* empty */ }
  return !(Array.of.call(F) instanceof F);
}), 'Array', {
  // 22.1.2.3 Array.of( ...items)
  of: function of(/* ...args */) {
    var index = 0;
    var aLen = arguments.length;
    var result = new (typeof this == 'function' ? this : Array)(aLen);
    while (aLen > index) createProperty(result, index, arguments[index++]);
    result.length = aLen;
    return result;
  }
});


/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 22.1.3.13 Array.prototype.join(separator)
var $export = __webpack_require__(9);
var toIObject = __webpack_require__(34);
var arrayJoin = [].join;

// fallback for not array-like strings
$export($export.P + $export.F * (__webpack_require__(35) != Object || !__webpack_require__(171)(arrayJoin)), 'Array', {
  join: function join(separator) {
    return arrayJoin.call(toIObject(this), separator === undefined ? ',' : separator);
  }
});


/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__(8);

module.exports = function (method, arg) {
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call
    arg ? method.call(null, function () { /* empty */ }, 1) : method.call(null);
  });
};


/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(9);
var html = __webpack_require__(50);
var cof = __webpack_require__(36);
var toAbsoluteIndex = __webpack_require__(41);
var toLength = __webpack_require__(39);
var arraySlice = [].slice;

// fallback for not array-like ES3 strings and DOM objects
$export($export.P + $export.F * __webpack_require__(8)(function () {
  if (html) arraySlice.call(html);
}), 'Array', {
  slice: function slice(begin, end) {
    var len = toLength(this.length);
    var klass = cof(this);
    end = end === undefined ? len : end;
    if (klass == 'Array') return arraySlice.call(this, begin, end);
    var start = toAbsoluteIndex(begin, len);
    var upTo = toAbsoluteIndex(end, len);
    var size = toLength(upTo - start);
    var cloned = new Array(size);
    var i = 0;
    for (; i < size; i++) cloned[i] = klass == 'String'
      ? this.charAt(start + i)
      : this[start + i];
    return cloned;
  }
});


/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(9);
var aFunction = __webpack_require__(25);
var toObject = __webpack_require__(47);
var fails = __webpack_require__(8);
var $sort = [].sort;
var test = [1, 2, 3];

$export($export.P + $export.F * (fails(function () {
  // IE8-
  test.sort(undefined);
}) || !fails(function () {
  // V8 bug
  test.sort(null);
  // Old WebKit
}) || !__webpack_require__(171)($sort)), 'Array', {
  // 22.1.3.25 Array.prototype.sort(comparefn)
  sort: function sort(comparefn) {
    return comparefn === undefined
      ? $sort.call(toObject(this))
      : $sort.call(toObject(this), aFunction(comparefn));
  }
});


/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(9);
var $forEach = __webpack_require__(175)(0);
var STRICT = __webpack_require__(171)([].forEach, true);

$export($export.P + $export.F * !STRICT, 'Array', {
  // 22.1.3.10 / 15.4.4.18 Array.prototype.forEach(callbackfn [, thisArg])
  forEach: function forEach(callbackfn /* , thisArg */) {
    return $forEach(this, callbackfn, arguments[1]);
  }
});


/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx = __webpack_require__(24);
var IObject = __webpack_require__(35);
var toObject = __webpack_require__(47);
var toLength = __webpack_require__(39);
var asc = __webpack_require__(176);
module.exports = function (TYPE, $create) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = $create || asc;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IObject(O);
    var f = ctx(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var val, res;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      val = self[index];
      res = f(val, index, O);
      if (TYPE) {
        if (IS_MAP) result[index] = res;   // map
        else if (res) switch (TYPE) {
          case 3: return true;             // some
          case 5: return val;              // find
          case 6: return index;            // findIndex
          case 2: result.push(val);        // filter
        } else if (IS_EVERY) return false; // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};


/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = __webpack_require__(177);

module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
};


/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(14);
var isArray = __webpack_require__(46);
var SPECIES = __webpack_require__(28)('species');

module.exports = function (original) {
  var C;
  if (isArray(original)) {
    C = original.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};


/***/ }),
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(9);
var $map = __webpack_require__(175)(1);

$export($export.P + $export.F * !__webpack_require__(171)([].map, true), 'Array', {
  // 22.1.3.15 / 15.4.4.19 Array.prototype.map(callbackfn [, thisArg])
  map: function map(callbackfn /* , thisArg */) {
    return $map(this, callbackfn, arguments[1]);
  }
});


/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(9);
var $filter = __webpack_require__(175)(2);

$export($export.P + $export.F * !__webpack_require__(171)([].filter, true), 'Array', {
  // 22.1.3.7 / 15.4.4.20 Array.prototype.filter(callbackfn [, thisArg])
  filter: function filter(callbackfn /* , thisArg */) {
    return $filter(this, callbackfn, arguments[1]);
  }
});


/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(9);
var $some = __webpack_require__(175)(3);

$export($export.P + $export.F * !__webpack_require__(171)([].some, true), 'Array', {
  // 22.1.3.23 / 15.4.4.17 Array.prototype.some(callbackfn [, thisArg])
  some: function some(callbackfn /* , thisArg */) {
    return $some(this, callbackfn, arguments[1]);
  }
});


/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(9);
var $every = __webpack_require__(175)(4);

$export($export.P + $export.F * !__webpack_require__(171)([].every, true), 'Array', {
  // 22.1.3.5 / 15.4.4.16 Array.prototype.every(callbackfn [, thisArg])
  every: function every(callbackfn /* , thisArg */) {
    return $every(this, callbackfn, arguments[1]);
  }
});


/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(9);
var $reduce = __webpack_require__(183);

$export($export.P + $export.F * !__webpack_require__(171)([].reduce, true), 'Array', {
  // 22.1.3.18 / 15.4.4.21 Array.prototype.reduce(callbackfn [, initialValue])
  reduce: function reduce(callbackfn /* , initialValue */) {
    return $reduce(this, callbackfn, arguments.length, arguments[1], false);
  }
});


/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

var aFunction = __webpack_require__(25);
var toObject = __webpack_require__(47);
var IObject = __webpack_require__(35);
var toLength = __webpack_require__(39);

module.exports = function (that, callbackfn, aLen, memo, isRight) {
  aFunction(callbackfn);
  var O = toObject(that);
  var self = IObject(O);
  var length = toLength(O.length);
  var index = isRight ? length - 1 : 0;
  var i = isRight ? -1 : 1;
  if (aLen < 2) for (;;) {
    if (index in self) {
      memo = self[index];
      index += i;
      break;
    }
    index += i;
    if (isRight ? index < 0 : length <= index) {
      throw TypeError('Reduce of empty array with no initial value');
    }
  }
  for (;isRight ? index >= 0 : length > index; index += i) if (index in self) {
    memo = callbackfn(memo, self[index], index, O);
  }
  return memo;
};


/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(9);
var $reduce = __webpack_require__(183);

$export($export.P + $export.F * !__webpack_require__(171)([].reduceRight, true), 'Array', {
  // 22.1.3.19 / 15.4.4.22 Array.prototype.reduceRight(callbackfn [, initialValue])
  reduceRight: function reduceRight(callbackfn /* , initialValue */) {
    return $reduce(this, callbackfn, arguments.length, arguments[1], true);
  }
});


/***/ }),
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(9);
var $indexOf = __webpack_require__(38)(false);
var $native = [].indexOf;
var NEGATIVE_ZERO = !!$native && 1 / [1].indexOf(1, -0) < 0;

$export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__(171)($native)), 'Array', {
  // 22.1.3.11 / 15.4.4.14 Array.prototype.indexOf(searchElement [, fromIndex])
  indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {
    return NEGATIVE_ZERO
      // convert -0 to +0
      ? $native.apply(this, arguments) || 0
      : $indexOf(this, searchElement, arguments[1]);
  }
});


/***/ }),
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(9);
var toIObject = __webpack_require__(34);
var toInteger = __webpack_require__(40);
var toLength = __webpack_require__(39);
var $native = [].lastIndexOf;
var NEGATIVE_ZERO = !!$native && 1 / [1].lastIndexOf(1, -0) < 0;

$export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__(171)($native)), 'Array', {
  // 22.1.3.14 / 15.4.4.15 Array.prototype.lastIndexOf(searchElement [, fromIndex])
  lastIndexOf: function lastIndexOf(searchElement /* , fromIndex = @[*-1] */) {
    // convert -0 to +0
    if (NEGATIVE_ZERO) return $native.apply(this, arguments) || 0;
    var O = toIObject(this);
    var length = toLength(O.length);
    var index = length - 1;
    if (arguments.length > 1) index = Math.min(index, toInteger(arguments[1]));
    if (index < 0) index = length + index;
    for (;index >= 0; index--) if (index in O) if (O[index] === searchElement) return index || 0;
    return -1;
  }
});


/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
var $export = __webpack_require__(9);

$export($export.P, 'Array', { copyWithin: __webpack_require__(188) });

__webpack_require__(189)('copyWithin');


/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)

var toObject = __webpack_require__(47);
var toAbsoluteIndex = __webpack_require__(41);
var toLength = __webpack_require__(39);

module.exports = [].copyWithin || function copyWithin(target /* = 0 */, start /* = 0, end = @length */) {
  var O = toObject(this);
  var len = toLength(O.length);
  var to = toAbsoluteIndex(target, len);
  var from = toAbsoluteIndex(start, len);
  var end = arguments.length > 2 ? arguments[2] : undefined;
  var count = Math.min((end === undefined ? len : toAbsoluteIndex(end, len)) - from, len - to);
  var inc = 1;
  if (from < to && to < from + count) {
    inc = -1;
    from += count - 1;
    to += count - 1;
  }
  while (count-- > 0) {
    if (from in O) O[to] = O[from];
    else delete O[to];
    to += inc;
    from += inc;
  } return O;
};


/***/ }),
/* 189 */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = __webpack_require__(28)('unscopables');
var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__(11)(ArrayProto, UNSCOPABLES, {});
module.exports = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};


/***/ }),
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
var $export = __webpack_require__(9);

$export($export.P, 'Array', { fill: __webpack_require__(191) });

__webpack_require__(189)('fill');


/***/ }),
/* 191 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)

var toObject = __webpack_require__(47);
var toAbsoluteIndex = __webpack_require__(41);
var toLength = __webpack_require__(39);
module.exports = function fill(value /* , start = 0, end = @length */) {
  var O = toObject(this);
  var length = toLength(O.length);
  var aLen = arguments.length;
  var index = toAbsoluteIndex(aLen > 1 ? arguments[1] : undefined, length);
  var end = aLen > 2 ? arguments[2] : undefined;
  var endPos = end === undefined ? length : toAbsoluteIndex(end, length);
  while (endPos > index) O[index++] = value;
  return O;
};


/***/ }),
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)
var $export = __webpack_require__(9);
var $find = __webpack_require__(175)(5);
var KEY = 'find';
var forced = true;
// Shouldn't skip holes
if (KEY in []) Array(1)[KEY](function () { forced = false; });
$export($export.P + $export.F * forced, 'Array', {
  find: function find(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});
__webpack_require__(189)(KEY);


/***/ }),
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 22.1.3.9 Array.prototype.findIndex(predicate, thisArg = undefined)
var $export = __webpack_require__(9);
var $find = __webpack_require__(175)(6);
var KEY = 'findIndex';
var forced = true;
// Shouldn't skip holes
if (KEY in []) Array(1)[KEY](function () { forced = false; });
$export($export.P + $export.F * forced, 'Array', {
  findIndex: function findIndex(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});
__webpack_require__(189)(KEY);


/***/ }),
/* 194 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(195)('Array');


/***/ }),
/* 195 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(5);
var dP = __webpack_require__(12);
var DESCRIPTORS = __webpack_require__(7);
var SPECIES = __webpack_require__(28)('species');

module.exports = function (KEY) {
  var C = global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),
/* 196 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(189);
var step = __webpack_require__(197);
var Iterators = __webpack_require__(131);
var toIObject = __webpack_require__(34);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(130)(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),
/* 197 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 198 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(5);
var inheritIfRequired = __webpack_require__(89);
var dP = __webpack_require__(12).f;
var gOPN = __webpack_require__(52).f;
var isRegExp = __webpack_require__(136);
var $flags = __webpack_require__(199);
var $RegExp = global.RegExp;
var Base = $RegExp;
var proto = $RegExp.prototype;
var re1 = /a/g;
var re2 = /a/g;
// "new" creates a new object, old webkit buggy here
var CORRECT_NEW = new $RegExp(re1) !== re1;

if (__webpack_require__(7) && (!CORRECT_NEW || __webpack_require__(8)(function () {
  re2[__webpack_require__(28)('match')] = false;
  // RegExp constructor can alter flags and IsRegExp works correct with @@match
  return $RegExp(re1) != re1 || $RegExp(re2) == re2 || $RegExp(re1, 'i') != '/a/i';
}))) {
  $RegExp = function RegExp(p, f) {
    var tiRE = this instanceof $RegExp;
    var piRE = isRegExp(p);
    var fiU = f === undefined;
    return !tiRE && piRE && p.constructor === $RegExp && fiU ? p
      : inheritIfRequired(CORRECT_NEW
        ? new Base(piRE && !fiU ? p.source : p, f)
        : Base((piRE = p instanceof $RegExp) ? p.source : p, piRE && fiU ? $flags.call(p) : f)
      , tiRE ? this : proto, $RegExp);
  };
  var proxy = function (key) {
    key in $RegExp || dP($RegExp, key, {
      configurable: true,
      get: function () { return Base[key]; },
      set: function (it) { Base[key] = it; }
    });
  };
  for (var keys = gOPN(Base), i = 0; keys.length > i;) proxy(keys[i++]);
  proto.constructor = $RegExp;
  $RegExp.prototype = proto;
  __webpack_require__(19)(global, 'RegExp', $RegExp);
}

__webpack_require__(195)('RegExp');


/***/ }),
/* 199 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 21.2.5.3 get RegExp.prototype.flags
var anObject = __webpack_require__(13);
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),
/* 200 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var regexpExec = __webpack_require__(201);
__webpack_require__(9)({
  target: 'RegExp',
  proto: true,
  forced: regexpExec !== /./.exec
}, {
  exec: regexpExec
});


/***/ }),
/* 201 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var regexpFlags = __webpack_require__(199);

var nativeExec = RegExp.prototype.exec;
// This always refers to the native implementation, because the
// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
// which loads this file before patching the method.
var nativeReplace = String.prototype.replace;

var patchedExec = nativeExec;

var LAST_INDEX = 'lastIndex';

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/,
      re2 = /b*/g;
  nativeExec.call(re1, 'a');
  nativeExec.call(re2, 'a');
  return re1[LAST_INDEX] !== 0 || re2[LAST_INDEX] !== 0;
})();

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED;

if (PATCH) {
  patchedExec = function exec(str) {
    var re = this;
    var lastIndex, reCopy, match, i;

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + re.source + '$(?!\\s)', regexpFlags.call(re));
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re[LAST_INDEX];

    match = nativeExec.call(re, str);

    if (UPDATES_LAST_INDEX_WRONG && match) {
      re[LAST_INDEX] = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      // eslint-disable-next-line no-loop-func
      nativeReplace.call(match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    return match;
  };
}

module.exports = patchedExec;


/***/ }),
/* 202 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

__webpack_require__(203);
var anObject = __webpack_require__(13);
var $flags = __webpack_require__(199);
var DESCRIPTORS = __webpack_require__(7);
var TO_STRING = 'toString';
var $toString = /./[TO_STRING];

var define = function (fn) {
  __webpack_require__(19)(RegExp.prototype, TO_STRING, fn, true);
};

// 21.2.5.14 RegExp.prototype.toString()
if (__webpack_require__(8)(function () { return $toString.call({ source: 'a', flags: 'b' }) != '/a/b'; })) {
  define(function toString() {
    var R = anObject(this);
    return '/'.concat(R.source, '/',
      'flags' in R ? R.flags : !DESCRIPTORS && R instanceof RegExp ? $flags.call(R) : undefined);
  });
// FF44- RegExp#toString has a wrong name
} else if ($toString.name != TO_STRING) {
  define(function toString() {
    return $toString.call(this);
  });
}


/***/ }),
/* 203 */
/***/ (function(module, exports, __webpack_require__) {

// 21.2.5.3 get RegExp.prototype.flags()
if (__webpack_require__(7) && /./g.flags != 'g') __webpack_require__(12).f(RegExp.prototype, 'flags', {
  configurable: true,
  get: __webpack_require__(199)
});


/***/ }),
/* 204 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var anObject = __webpack_require__(13);
var toLength = __webpack_require__(39);
var advanceStringIndex = __webpack_require__(205);
var regExpExec = __webpack_require__(206);

// @@match logic
__webpack_require__(207)('match', 1, function (defined, MATCH, $match, maybeCallNative) {
  return [
    // `String.prototype.match` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.match
    function match(regexp) {
      var O = defined(this);
      var fn = regexp == undefined ? undefined : regexp[MATCH];
      return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
    },
    // `RegExp.prototype[@@match]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@match
    function (regexp) {
      var res = maybeCallNative($match, regexp, this);
      if (res.done) return res.value;
      var rx = anObject(regexp);
      var S = String(this);
      if (!rx.global) return regExpExec(rx, S);
      var fullUnicode = rx.unicode;
      rx.lastIndex = 0;
      var A = [];
      var n = 0;
      var result;
      while ((result = regExpExec(rx, S)) !== null) {
        var matchStr = String(result[0]);
        A[n] = matchStr;
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
        n++;
      }
      return n === 0 ? null : A;
    }
  ];
});


/***/ }),
/* 205 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var at = __webpack_require__(129)(true);

 // `AdvanceStringIndex` abstract operation
// https://tc39.github.io/ecma262/#sec-advancestringindex
module.exports = function (S, index, unicode) {
  return index + (unicode ? at(S, index).length : 1);
};


/***/ }),
/* 206 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var classof = __webpack_require__(76);
var builtinExec = RegExp.prototype.exec;

 // `RegExpExec` abstract operation
// https://tc39.github.io/ecma262/#sec-regexpexec
module.exports = function (R, S) {
  var exec = R.exec;
  if (typeof exec === 'function') {
    var result = exec.call(R, S);
    if (typeof result !== 'object') {
      throw new TypeError('RegExp exec method returned something other than an Object or null');
    }
    return result;
  }
  if (classof(R) !== 'RegExp') {
    throw new TypeError('RegExp#exec called on incompatible receiver');
  }
  return builtinExec.call(R, S);
};


/***/ }),
/* 207 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

__webpack_require__(200);
var redefine = __webpack_require__(19);
var hide = __webpack_require__(11);
var fails = __webpack_require__(8);
var defined = __webpack_require__(37);
var wks = __webpack_require__(28);
var regexpExec = __webpack_require__(201);

var SPECIES = wks('species');

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  // #replace needs built-in support for named groups.
  // #match works fine because it just return the exec results, even if it has
  // a "grops" property.
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  return ''.replace(re, '$<a>') !== '7';
});

var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = (function () {
  // Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
  var re = /(?:)/;
  var originalExec = re.exec;
  re.exec = function () { return originalExec.apply(this, arguments); };
  var result = 'ab'.split(re);
  return result.length === 2 && result[0] === 'a' && result[1] === 'b';
})();

module.exports = function (KEY, length, exec) {
  var SYMBOL = wks(KEY);

  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL ? !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;
    re.exec = function () { execCalled = true; return null; };
    if (KEY === 'split') {
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES] = function () { return re; };
    }
    re[SYMBOL]('');
    return !execCalled;
  }) : undefined;

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    (KEY === 'replace' && !REPLACE_SUPPORTS_NAMED_GROUPS) ||
    (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
  ) {
    var nativeRegExpMethod = /./[SYMBOL];
    var fns = exec(
      defined,
      SYMBOL,
      ''[KEY],
      function maybeCallNative(nativeMethod, regexp, str, arg2, forceStringMethod) {
        if (regexp.exec === regexpExec) {
          if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
            // The native String method already delegates to @@method (this
            // polyfilled function), leasing to infinite recursion.
            // We avoid it by directly calling the native @@method method.
            return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
          }
          return { done: true, value: nativeMethod.call(str, regexp, arg2) };
        }
        return { done: false };
      }
    );
    var strfn = fns[0];
    var rxfn = fns[1];

    redefine(String.prototype, KEY, strfn);
    hide(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return rxfn.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return rxfn.call(string, this); }
    );
  }
};


/***/ }),
/* 208 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var anObject = __webpack_require__(13);
var toObject = __webpack_require__(47);
var toLength = __webpack_require__(39);
var toInteger = __webpack_require__(40);
var advanceStringIndex = __webpack_require__(205);
var regExpExec = __webpack_require__(206);
var max = Math.max;
var min = Math.min;
var floor = Math.floor;
var SUBSTITUTION_SYMBOLS = /\$([$&`']|\d\d?|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&`']|\d\d?)/g;

var maybeToString = function (it) {
  return it === undefined ? it : String(it);
};

// @@replace logic
__webpack_require__(207)('replace', 2, function (defined, REPLACE, $replace, maybeCallNative) {
  return [
    // `String.prototype.replace` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = defined(this);
      var fn = searchValue == undefined ? undefined : searchValue[REPLACE];
      return fn !== undefined
        ? fn.call(searchValue, O, replaceValue)
        : $replace.call(String(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace
    function (regexp, replaceValue) {
      var res = maybeCallNative($replace, regexp, this, replaceValue);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);
      var functionalReplace = typeof replaceValue === 'function';
      if (!functionalReplace) replaceValue = String(replaceValue);
      var global = rx.global;
      if (global) {
        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }
      var results = [];
      while (true) {
        var result = regExpExec(rx, S);
        if (result === null) break;
        results.push(result);
        if (!global) break;
        var matchStr = String(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
      }
      var accumulatedResult = '';
      var nextSourcePosition = 0;
      for (var i = 0; i < results.length; i++) {
        result = results[i];
        var matched = String(result[0]);
        var position = max(min(toInteger(result.index), S.length), 0);
        var captures = [];
        // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
        for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));
        var namedCaptures = result.groups;
        if (functionalReplace) {
          var replacerArgs = [matched].concat(captures, position, S);
          if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
          var replacement = String(replaceValue.apply(undefined, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }
        if (position >= nextSourcePosition) {
          accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }
      return accumulatedResult + S.slice(nextSourcePosition);
    }
  ];

    // https://tc39.github.io/ecma262/#sec-getsubstitution
  function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {
    var tailPos = position + matched.length;
    var m = captures.length;
    var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
    if (namedCaptures !== undefined) {
      namedCaptures = toObject(namedCaptures);
      symbols = SUBSTITUTION_SYMBOLS;
    }
    return $replace.call(replacement, symbols, function (match, ch) {
      var capture;
      switch (ch.charAt(0)) {
        case '$': return '$';
        case '&': return matched;
        case '`': return str.slice(0, position);
        case "'": return str.slice(tailPos);
        case '<':
          capture = namedCaptures[ch.slice(1, -1)];
          break;
        default: // \d\d?
          var n = +ch;
          if (n === 0) return match;
          if (n > m) {
            var f = floor(n / 10);
            if (f === 0) return match;
            if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
            return match;
          }
          capture = captures[n - 1];
      }
      return capture === undefined ? '' : capture;
    });
  }
});


/***/ }),
/* 209 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var anObject = __webpack_require__(13);
var sameValue = __webpack_require__(72);
var regExpExec = __webpack_require__(206);

// @@search logic
__webpack_require__(207)('search', 1, function (defined, SEARCH, $search, maybeCallNative) {
  return [
    // `String.prototype.search` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.search
    function search(regexp) {
      var O = defined(this);
      var fn = regexp == undefined ? undefined : regexp[SEARCH];
      return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
    },
    // `RegExp.prototype[@@search]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@search
    function (regexp) {
      var res = maybeCallNative($search, regexp, this);
      if (res.done) return res.value;
      var rx = anObject(regexp);
      var S = String(this);
      var previousLastIndex = rx.lastIndex;
      if (!sameValue(previousLastIndex, 0)) rx.lastIndex = 0;
      var result = regExpExec(rx, S);
      if (!sameValue(rx.lastIndex, previousLastIndex)) rx.lastIndex = previousLastIndex;
      return result === null ? -1 : result.index;
    }
  ];
});


/***/ }),
/* 210 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isRegExp = __webpack_require__(136);
var anObject = __webpack_require__(13);
var speciesConstructor = __webpack_require__(211);
var advanceStringIndex = __webpack_require__(205);
var toLength = __webpack_require__(39);
var callRegExpExec = __webpack_require__(206);
var regexpExec = __webpack_require__(201);
var fails = __webpack_require__(8);
var $min = Math.min;
var $push = [].push;
var $SPLIT = 'split';
var LENGTH = 'length';
var LAST_INDEX = 'lastIndex';
var MAX_UINT32 = 0xffffffff;

// babel-minify transpiles RegExp('x', 'y') -> /x/y and it causes SyntaxError
var SUPPORTS_Y = !fails(function () { RegExp(MAX_UINT32, 'y'); });

// @@split logic
__webpack_require__(207)('split', 2, function (defined, SPLIT, $split, maybeCallNative) {
  var internalSplit;
  if (
    'abbc'[$SPLIT](/(b)*/)[1] == 'c' ||
    'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 ||
    'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 ||
    '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 ||
    '.'[$SPLIT](/()()/)[LENGTH] > 1 ||
    ''[$SPLIT](/.?/)[LENGTH]
  ) {
    // based on es5-shim implementation, need to rework it
    internalSplit = function (separator, limit) {
      var string = String(this);
      if (separator === undefined && limit === 0) return [];
      // If `separator` is not a regex, use native split
      if (!isRegExp(separator)) return $split.call(string, separator, limit);
      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') +
                  (separator.multiline ? 'm' : '') +
                  (separator.unicode ? 'u' : '') +
                  (separator.sticky ? 'y' : '');
      var lastLastIndex = 0;
      var splitLimit = limit === undefined ? MAX_UINT32 : limit >>> 0;
      // Make `global` and avoid `lastIndex` issues by working with a copy
      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var match, lastIndex, lastLength;
      while (match = regexpExec.call(separatorCopy, string)) {
        lastIndex = separatorCopy[LAST_INDEX];
        if (lastIndex > lastLastIndex) {
          output.push(string.slice(lastLastIndex, match.index));
          if (match[LENGTH] > 1 && match.index < string[LENGTH]) $push.apply(output, match.slice(1));
          lastLength = match[0][LENGTH];
          lastLastIndex = lastIndex;
          if (output[LENGTH] >= splitLimit) break;
        }
        if (separatorCopy[LAST_INDEX] === match.index) separatorCopy[LAST_INDEX]++; // Avoid an infinite loop
      }
      if (lastLastIndex === string[LENGTH]) {
        if (lastLength || !separatorCopy.test('')) output.push('');
      } else output.push(string.slice(lastLastIndex));
      return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
    };
  // Chakra, V8
  } else if ('0'[$SPLIT](undefined, 0)[LENGTH]) {
    internalSplit = function (separator, limit) {
      return separator === undefined && limit === 0 ? [] : $split.call(this, separator, limit);
    };
  } else {
    internalSplit = $split;
  }

  return [
    // `String.prototype.split` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.split
    function split(separator, limit) {
      var O = defined(this);
      var splitter = separator == undefined ? undefined : separator[SPLIT];
      return splitter !== undefined
        ? splitter.call(separator, O, limit)
        : internalSplit.call(String(O), separator, limit);
    },
    // `RegExp.prototype[@@split]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@split
    //
    // NOTE: This cannot be properly polyfilled in engines that don't support
    // the 'y' flag.
    function (regexp, limit) {
      var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== $split);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);
      var C = speciesConstructor(rx, RegExp);

      var unicodeMatching = rx.unicode;
      var flags = (rx.ignoreCase ? 'i' : '') +
                  (rx.multiline ? 'm' : '') +
                  (rx.unicode ? 'u' : '') +
                  (SUPPORTS_Y ? 'y' : 'g');

      // ^(? + rx + ) is needed, in combination with some S slicing, to
      // simulate the 'y' flag.
      var splitter = new C(SUPPORTS_Y ? rx : '^(?:' + rx.source + ')', flags);
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : [];
      var p = 0;
      var q = 0;
      var A = [];
      while (q < S.length) {
        splitter.lastIndex = SUPPORTS_Y ? q : 0;
        var z = callRegExpExec(splitter, SUPPORTS_Y ? S : S.slice(q));
        var e;
        if (
          z === null ||
          (e = $min(toLength(splitter.lastIndex + (SUPPORTS_Y ? 0 : q)), S.length)) === p
        ) {
          q = advanceStringIndex(S, q, unicodeMatching);
        } else {
          A.push(S.slice(p, q));
          if (A.length === lim) return A;
          for (var i = 1; i <= z.length - 1; i++) {
            A.push(z[i]);
            if (A.length === lim) return A;
          }
          q = p = e;
        }
      }
      A.push(S.slice(p));
      return A;
    }
  ];
});


/***/ }),
/* 211 */
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__(13);
var aFunction = __webpack_require__(25);
var SPECIES = __webpack_require__(28)('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),
/* 212 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(23);
var global = __webpack_require__(5);
var ctx = __webpack_require__(24);
var classof = __webpack_require__(76);
var $export = __webpack_require__(9);
var isObject = __webpack_require__(14);
var aFunction = __webpack_require__(25);
var anInstance = __webpack_require__(213);
var forOf = __webpack_require__(214);
var speciesConstructor = __webpack_require__(211);
var task = __webpack_require__(215).set;
var microtask = __webpack_require__(216)();
var newPromiseCapabilityModule = __webpack_require__(217);
var perform = __webpack_require__(218);
var userAgent = __webpack_require__(219);
var promiseResolve = __webpack_require__(220);
var PROMISE = 'Promise';
var TypeError = global.TypeError;
var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8 || '';
var $Promise = global[PROMISE];
var isNode = classof(process) == 'process';
var empty = function () { /* empty */ };
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

var USE_NATIVE = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[__webpack_require__(28)('species')] = function (exec) {
      exec(empty, empty);
    };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function')
      && promise.then(empty) instanceof FakePromise
      // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
      // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
      // we can't detect it synchronously, so just check versions
      && v8.indexOf('6.6') !== 0
      && userAgent.indexOf('Chrome/66') === -1;
  } catch (e) { /* empty */ }
}();

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function (promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;
    var run = function (reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value); // may throw
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        if (domain && !exited) domain.exit();
        reject(e);
      }
    };
    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};
var onUnhandled = function (promise) {
  task.call(global, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;
    if (unhandled) {
      result = perform(function () {
        if (isNode) {
          process.emit('unhandledRejection', value, promise);
        } else if (handler = global.onunhandledrejection) {
          handler({ promise: promise, reason: value });
        } else if ((console = global.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};
var isUnhandled = function (promise) {
  return promise._h !== 1 && (promise._a || promise._c).length === 0;
};
var onHandleUnhandled = function (promise) {
  task.call(global, function () {
    var handler;
    if (isNode) {
      process.emit('rejectionHandled', promise);
    } else if (handler = global.onrejectionhandled) {
      handler({ promise: promise, reason: promise._v });
    }
  });
};
var $reject = function (value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function (value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = { _w: promise, _d: false }; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({ _w: promise, _d: false }, e); // wrap
  }
};

// constructor polyfill
if (!USE_NATIVE) {
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor) {
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = __webpack_require__(221)($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject = ctx($reject, promise, 1);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === $Promise || C === Wrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
__webpack_require__(27)($Promise, PROMISE);
__webpack_require__(195)(PROMISE);
Wrapper = __webpack_require__(10)[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(168)(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});


/***/ }),
/* 213 */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),
/* 214 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(24);
var call = __webpack_require__(164);
var isArrayIter = __webpack_require__(165);
var anObject = __webpack_require__(13);
var toLength = __webpack_require__(39);
var getIterFn = __webpack_require__(167);
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;


/***/ }),
/* 215 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(24);
var invoke = __webpack_require__(79);
var html = __webpack_require__(50);
var cel = __webpack_require__(16);
var global = __webpack_require__(5);
var process = global.process;
var setTask = global.setImmediate;
var clearTask = global.clearImmediate;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;
var run = function () {
  var id = +this;
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function (event) {
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (__webpack_require__(36)(process) == 'process') {
    defer = function (id) {
      process.nextTick(ctx(run, id, 1));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
    defer = function (id) {
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in cel('script')) {
    defer = function (id) {
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set: setTask,
  clear: clearTask
};


/***/ }),
/* 216 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(5);
var macrotask = __webpack_require__(215).set;
var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = __webpack_require__(36)(process) == 'process';

module.exports = function () {
  var head, last, notify;

  var flush = function () {
    var parent, fn;
    if (isNode && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (isNode) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
  } else if (Observer && !(global.navigator && global.navigator.standalone)) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    var promise = Promise.resolve(undefined);
    notify = function () {
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function (fn) {
    var task = { fn: fn, next: undefined };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    } last = task;
  };
};


/***/ }),
/* 217 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 25.4.1.5 NewPromiseCapability(C)
var aFunction = __webpack_require__(25);

function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
}

module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),
/* 218 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};


/***/ }),
/* 219 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(5);
var navigator = global.navigator;

module.exports = navigator && navigator.userAgent || '';


/***/ }),
/* 220 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(13);
var isObject = __webpack_require__(14);
var newPromiseCapability = __webpack_require__(217);

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),
/* 221 */
/***/ (function(module, exports, __webpack_require__) {

var redefine = __webpack_require__(19);
module.exports = function (target, src, safe) {
  for (var key in src) redefine(target, key, src[key], safe);
  return target;
};


/***/ }),
/* 222 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strong = __webpack_require__(223);
var validate = __webpack_require__(224);
var MAP = 'Map';

// 23.1 Map Objects
module.exports = __webpack_require__(225)(MAP, function (get) {
  return function Map() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.1.3.6 Map.prototype.get(key)
  get: function get(key) {
    var entry = strong.getEntry(validate(this, MAP), key);
    return entry && entry.v;
  },
  // 23.1.3.9 Map.prototype.set(key, value)
  set: function set(key, value) {
    return strong.def(validate(this, MAP), key === 0 ? 0 : key, value);
  }
}, strong, true);


/***/ }),
/* 223 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var dP = __webpack_require__(12).f;
var create = __webpack_require__(48);
var redefineAll = __webpack_require__(221);
var ctx = __webpack_require__(24);
var anInstance = __webpack_require__(213);
var forOf = __webpack_require__(214);
var $iterDefine = __webpack_require__(130);
var step = __webpack_require__(197);
var setSpecies = __webpack_require__(195);
var DESCRIPTORS = __webpack_require__(7);
var fastKey = __webpack_require__(26).fastKey;
var validate = __webpack_require__(224);
var SIZE = DESCRIPTORS ? '_s' : 'size';

var getEntry = function (that, key) {
  // fast case
  var index = fastKey(key);
  var entry;
  if (index !== 'F') return that._i[index];
  // frozen object case
  for (entry = that._f; entry; entry = entry.n) {
    if (entry.k == key) return entry;
  }
};

module.exports = {
  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, NAME, '_i');
      that._t = NAME;         // collection type
      that._i = create(null); // index
      that._f = undefined;    // first entry
      that._l = undefined;    // last entry
      that[SIZE] = 0;         // size
      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function clear() {
        for (var that = validate(this, NAME), data = that._i, entry = that._f; entry; entry = entry.n) {
          entry.r = true;
          if (entry.p) entry.p = entry.p.n = undefined;
          delete data[entry.i];
        }
        that._f = that._l = undefined;
        that[SIZE] = 0;
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      'delete': function (key) {
        var that = validate(this, NAME);
        var entry = getEntry(that, key);
        if (entry) {
          var next = entry.n;
          var prev = entry.p;
          delete that._i[entry.i];
          entry.r = true;
          if (prev) prev.n = next;
          if (next) next.p = prev;
          if (that._f == entry) that._f = next;
          if (that._l == entry) that._l = prev;
          that[SIZE]--;
        } return !!entry;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function forEach(callbackfn /* , that = undefined */) {
        validate(this, NAME);
        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
        var entry;
        while (entry = entry ? entry.n : this._f) {
          f(entry.v, entry.k, this);
          // revert to the last existing entry
          while (entry && entry.r) entry = entry.p;
        }
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function has(key) {
        return !!getEntry(validate(this, NAME), key);
      }
    });
    if (DESCRIPTORS) dP(C.prototype, 'size', {
      get: function () {
        return validate(this, NAME)[SIZE];
      }
    });
    return C;
  },
  def: function (that, key, value) {
    var entry = getEntry(that, key);
    var prev, index;
    // change existing entry
    if (entry) {
      entry.v = value;
    // create new entry
    } else {
      that._l = entry = {
        i: index = fastKey(key, true), // <- index
        k: key,                        // <- key
        v: value,                      // <- value
        p: prev = that._l,             // <- previous entry
        n: undefined,                  // <- next entry
        r: false                       // <- removed
      };
      if (!that._f) that._f = entry;
      if (prev) prev.n = entry;
      that[SIZE]++;
      // add to index
      if (index !== 'F') that._i[index] = entry;
    } return that;
  },
  getEntry: getEntry,
  setStrong: function (C, NAME, IS_MAP) {
    // add .keys, .values, .entries, [@@iterator]
    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
    $iterDefine(C, NAME, function (iterated, kind) {
      this._t = validate(iterated, NAME); // target
      this._k = kind;                     // kind
      this._l = undefined;                // previous
    }, function () {
      var that = this;
      var kind = that._k;
      var entry = that._l;
      // revert to the last existing entry
      while (entry && entry.r) entry = entry.p;
      // get next entry
      if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
        // or finish the iteration
        that._t = undefined;
        return step(1);
      }
      // return step by kind
      if (kind == 'keys') return step(0, entry.k);
      if (kind == 'values') return step(0, entry.v);
      return step(0, [entry.k, entry.v]);
    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

    // add [@@species], 23.1.2.2, 23.2.2.2
    setSpecies(NAME);
  }
};


/***/ }),
/* 224 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(14);
module.exports = function (it, TYPE) {
  if (!isObject(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');
  return it;
};


/***/ }),
/* 225 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(5);
var $export = __webpack_require__(9);
var redefine = __webpack_require__(19);
var redefineAll = __webpack_require__(221);
var meta = __webpack_require__(26);
var forOf = __webpack_require__(214);
var anInstance = __webpack_require__(213);
var isObject = __webpack_require__(14);
var fails = __webpack_require__(8);
var $iterDetect = __webpack_require__(168);
var setToStringTag = __webpack_require__(27);
var inheritIfRequired = __webpack_require__(89);

module.exports = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
  var Base = global[NAME];
  var C = Base;
  var ADDER = IS_MAP ? 'set' : 'add';
  var proto = C && C.prototype;
  var O = {};
  var fixMethod = function (KEY) {
    var fn = proto[KEY];
    redefine(proto, KEY,
      KEY == 'delete' ? function (a) {
        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'has' ? function has(a) {
        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'get' ? function get(a) {
        return IS_WEAK && !isObject(a) ? undefined : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'add' ? function add(a) { fn.call(this, a === 0 ? 0 : a); return this; }
        : function set(a, b) { fn.call(this, a === 0 ? 0 : a, b); return this; }
    );
  };
  if (typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function () {
    new C().entries().next();
  }))) {
    // create collection constructor
    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
    redefineAll(C.prototype, methods);
    meta.NEED = true;
  } else {
    var instance = new C();
    // early implementations not supports chaining
    var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance;
    // V8 ~  Chromium 40- weak-collections throws on primitives, but should return false
    var THROWS_ON_PRIMITIVES = fails(function () { instance.has(1); });
    // most early implementations doesn't supports iterables, most modern - not close it correctly
    var ACCEPT_ITERABLES = $iterDetect(function (iter) { new C(iter); }); // eslint-disable-line no-new
    // for early implementations -0 and +0 not the same
    var BUGGY_ZERO = !IS_WEAK && fails(function () {
      // V8 ~ Chromium 42- fails only with 5+ elements
      var $instance = new C();
      var index = 5;
      while (index--) $instance[ADDER](index, index);
      return !$instance.has(-0);
    });
    if (!ACCEPT_ITERABLES) {
      C = wrapper(function (target, iterable) {
        anInstance(target, C, NAME);
        var that = inheritIfRequired(new Base(), target, C);
        if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
        return that;
      });
      C.prototype = proto;
      proto.constructor = C;
    }
    if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
      fixMethod('delete');
      fixMethod('has');
      IS_MAP && fixMethod('get');
    }
    if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);
    // weak collections should not contains .clear method
    if (IS_WEAK && proto.clear) delete proto.clear;
  }

  setToStringTag(C, NAME);

  O[NAME] = C;
  $export($export.G + $export.W + $export.F * (C != Base), O);

  if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);

  return C;
};


/***/ }),
/* 226 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strong = __webpack_require__(223);
var validate = __webpack_require__(224);
var SET = 'Set';

// 23.2 Set Objects
module.exports = __webpack_require__(225)(SET, function (get) {
  return function Set() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.2.3.1 Set.prototype.add(value)
  add: function add(value) {
    return strong.def(validate(this, SET), value = value === 0 ? 0 : value, value);
  }
}, strong);


/***/ }),
/* 227 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(5);
var each = __webpack_require__(175)(0);
var redefine = __webpack_require__(19);
var meta = __webpack_require__(26);
var assign = __webpack_require__(70);
var weak = __webpack_require__(228);
var isObject = __webpack_require__(14);
var validate = __webpack_require__(224);
var NATIVE_WEAK_MAP = __webpack_require__(224);
var IS_IE11 = !global.ActiveXObject && 'ActiveXObject' in global;
var WEAK_MAP = 'WeakMap';
var getWeak = meta.getWeak;
var isExtensible = Object.isExtensible;
var uncaughtFrozenStore = weak.ufstore;
var InternalMap;

var wrapper = function (get) {
  return function WeakMap() {
    return get(this, arguments.length > 0 ? arguments[0] : undefined);
  };
};

var methods = {
  // 23.3.3.3 WeakMap.prototype.get(key)
  get: function get(key) {
    if (isObject(key)) {
      var data = getWeak(key);
      if (data === true) return uncaughtFrozenStore(validate(this, WEAK_MAP)).get(key);
      return data ? data[this._i] : undefined;
    }
  },
  // 23.3.3.5 WeakMap.prototype.set(key, value)
  set: function set(key, value) {
    return weak.def(validate(this, WEAK_MAP), key, value);
  }
};

// 23.3 WeakMap Objects
var $WeakMap = module.exports = __webpack_require__(225)(WEAK_MAP, wrapper, methods, weak, true, true);

// IE11 WeakMap frozen keys fix
if (NATIVE_WEAK_MAP && IS_IE11) {
  InternalMap = weak.getConstructor(wrapper, WEAK_MAP);
  assign(InternalMap.prototype, methods);
  meta.NEED = true;
  each(['delete', 'has', 'get', 'set'], function (key) {
    var proto = $WeakMap.prototype;
    var method = proto[key];
    redefine(proto, key, function (a, b) {
      // store frozen objects on internal weakmap shim
      if (isObject(a) && !isExtensible(a)) {
        if (!this._f) this._f = new InternalMap();
        var result = this._f[key](a, b);
        return key == 'set' ? this : result;
      // store all the rest on native weakmap
      } return method.call(this, a, b);
    });
  });
}


/***/ }),
/* 228 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var redefineAll = __webpack_require__(221);
var getWeak = __webpack_require__(26).getWeak;
var anObject = __webpack_require__(13);
var isObject = __webpack_require__(14);
var anInstance = __webpack_require__(213);
var forOf = __webpack_require__(214);
var createArrayMethod = __webpack_require__(175);
var $has = __webpack_require__(6);
var validate = __webpack_require__(224);
var arrayFind = createArrayMethod(5);
var arrayFindIndex = createArrayMethod(6);
var id = 0;

// fallback for uncaught frozen keys
var uncaughtFrozenStore = function (that) {
  return that._l || (that._l = new UncaughtFrozenStore());
};
var UncaughtFrozenStore = function () {
  this.a = [];
};
var findUncaughtFrozen = function (store, key) {
  return arrayFind(store.a, function (it) {
    return it[0] === key;
  });
};
UncaughtFrozenStore.prototype = {
  get: function (key) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) return entry[1];
  },
  has: function (key) {
    return !!findUncaughtFrozen(this, key);
  },
  set: function (key, value) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) entry[1] = value;
    else this.a.push([key, value]);
  },
  'delete': function (key) {
    var index = arrayFindIndex(this.a, function (it) {
      return it[0] === key;
    });
    if (~index) this.a.splice(index, 1);
    return !!~index;
  }
};

module.exports = {
  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, NAME, '_i');
      that._t = NAME;      // collection type
      that._i = id++;      // collection id
      that._l = undefined; // leak store for uncaught frozen objects
      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.3.3.2 WeakMap.prototype.delete(key)
      // 23.4.3.3 WeakSet.prototype.delete(value)
      'delete': function (key) {
        if (!isObject(key)) return false;
        var data = getWeak(key);
        if (data === true) return uncaughtFrozenStore(validate(this, NAME))['delete'](key);
        return data && $has(data, this._i) && delete data[this._i];
      },
      // 23.3.3.4 WeakMap.prototype.has(key)
      // 23.4.3.4 WeakSet.prototype.has(value)
      has: function has(key) {
        if (!isObject(key)) return false;
        var data = getWeak(key);
        if (data === true) return uncaughtFrozenStore(validate(this, NAME)).has(key);
        return data && $has(data, this._i);
      }
    });
    return C;
  },
  def: function (that, key, value) {
    var data = getWeak(anObject(key), true);
    if (data === true) uncaughtFrozenStore(that).set(key, value);
    else data[that._i] = value;
    return that;
  },
  ufstore: uncaughtFrozenStore
};


/***/ }),
/* 229 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var weak = __webpack_require__(228);
var validate = __webpack_require__(224);
var WEAK_SET = 'WeakSet';

// 23.4 WeakSet Objects
__webpack_require__(225)(WEAK_SET, function (get) {
  return function WeakSet() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.4.3.1 WeakSet.prototype.add(value)
  add: function add(value) {
    return weak.def(validate(this, WEAK_SET), value, true);
  }
}, weak, false, true);


/***/ }),
/* 230 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(9);
var $typed = __webpack_require__(231);
var buffer = __webpack_require__(232);
var anObject = __webpack_require__(13);
var toAbsoluteIndex = __webpack_require__(41);
var toLength = __webpack_require__(39);
var isObject = __webpack_require__(14);
var ArrayBuffer = __webpack_require__(5).ArrayBuffer;
var speciesConstructor = __webpack_require__(211);
var $ArrayBuffer = buffer.ArrayBuffer;
var $DataView = buffer.DataView;
var $isView = $typed.ABV && ArrayBuffer.isView;
var $slice = $ArrayBuffer.prototype.slice;
var VIEW = $typed.VIEW;
var ARRAY_BUFFER = 'ArrayBuffer';

$export($export.G + $export.W + $export.F * (ArrayBuffer !== $ArrayBuffer), { ArrayBuffer: $ArrayBuffer });

$export($export.S + $export.F * !$typed.CONSTR, ARRAY_BUFFER, {
  // 24.1.3.1 ArrayBuffer.isView(arg)
  isView: function isView(it) {
    return $isView && $isView(it) || isObject(it) && VIEW in it;
  }
});

$export($export.P + $export.U + $export.F * __webpack_require__(8)(function () {
  return !new $ArrayBuffer(2).slice(1, undefined).byteLength;
}), ARRAY_BUFFER, {
  // 24.1.4.3 ArrayBuffer.prototype.slice(start, end)
  slice: function slice(start, end) {
    if ($slice !== undefined && end === undefined) return $slice.call(anObject(this), start); // FF fix
    var len = anObject(this).byteLength;
    var first = toAbsoluteIndex(start, len);
    var fin = toAbsoluteIndex(end === undefined ? len : end, len);
    var result = new (speciesConstructor(this, $ArrayBuffer))(toLength(fin - first));
    var viewS = new $DataView(this);
    var viewT = new $DataView(result);
    var index = 0;
    while (first < fin) {
      viewT.setUint8(index++, viewS.getUint8(first++));
    } return result;
  }
});

__webpack_require__(195)(ARRAY_BUFFER);


/***/ }),
/* 231 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(5);
var hide = __webpack_require__(11);
var uid = __webpack_require__(20);
var TYPED = uid('typed_array');
var VIEW = uid('view');
var ABV = !!(global.ArrayBuffer && global.DataView);
var CONSTR = ABV;
var i = 0;
var l = 9;
var Typed;

var TypedArrayConstructors = (
  'Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array'
).split(',');

while (i < l) {
  if (Typed = global[TypedArrayConstructors[i++]]) {
    hide(Typed.prototype, TYPED, true);
    hide(Typed.prototype, VIEW, true);
  } else CONSTR = false;
}

module.exports = {
  ABV: ABV,
  CONSTR: CONSTR,
  TYPED: TYPED,
  VIEW: VIEW
};


/***/ }),
/* 232 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(5);
var DESCRIPTORS = __webpack_require__(7);
var LIBRARY = __webpack_require__(23);
var $typed = __webpack_require__(231);
var hide = __webpack_require__(11);
var redefineAll = __webpack_require__(221);
var fails = __webpack_require__(8);
var anInstance = __webpack_require__(213);
var toInteger = __webpack_require__(40);
var toLength = __webpack_require__(39);
var toIndex = __webpack_require__(233);
var gOPN = __webpack_require__(52).f;
var dP = __webpack_require__(12).f;
var arrayFill = __webpack_require__(191);
var setToStringTag = __webpack_require__(27);
var ARRAY_BUFFER = 'ArrayBuffer';
var DATA_VIEW = 'DataView';
var PROTOTYPE = 'prototype';
var WRONG_LENGTH = 'Wrong length!';
var WRONG_INDEX = 'Wrong index!';
var $ArrayBuffer = global[ARRAY_BUFFER];
var $DataView = global[DATA_VIEW];
var Math = global.Math;
var RangeError = global.RangeError;
// eslint-disable-next-line no-shadow-restricted-names
var Infinity = global.Infinity;
var BaseBuffer = $ArrayBuffer;
var abs = Math.abs;
var pow = Math.pow;
var floor = Math.floor;
var log = Math.log;
var LN2 = Math.LN2;
var BUFFER = 'buffer';
var BYTE_LENGTH = 'byteLength';
var BYTE_OFFSET = 'byteOffset';
var $BUFFER = DESCRIPTORS ? '_b' : BUFFER;
var $LENGTH = DESCRIPTORS ? '_l' : BYTE_LENGTH;
var $OFFSET = DESCRIPTORS ? '_o' : BYTE_OFFSET;

// IEEE754 conversions based on https://github.com/feross/ieee754
function packIEEE754(value, mLen, nBytes) {
  var buffer = new Array(nBytes);
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var rt = mLen === 23 ? pow(2, -24) - pow(2, -77) : 0;
  var i = 0;
  var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
  var e, m, c;
  value = abs(value);
  // eslint-disable-next-line no-self-compare
  if (value != value || value === Infinity) {
    // eslint-disable-next-line no-self-compare
    m = value != value ? 1 : 0;
    e = eMax;
  } else {
    e = floor(log(value) / LN2);
    if (value * (c = pow(2, -e)) < 1) {
      e--;
      c *= 2;
    }
    if (e + eBias >= 1) {
      value += rt / c;
    } else {
      value += rt * pow(2, 1 - eBias);
    }
    if (value * c >= 2) {
      e++;
      c /= 2;
    }
    if (e + eBias >= eMax) {
      m = 0;
      e = eMax;
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * pow(2, mLen);
      e = e + eBias;
    } else {
      m = value * pow(2, eBias - 1) * pow(2, mLen);
      e = 0;
    }
  }
  for (; mLen >= 8; buffer[i++] = m & 255, m /= 256, mLen -= 8);
  e = e << mLen | m;
  eLen += mLen;
  for (; eLen > 0; buffer[i++] = e & 255, e /= 256, eLen -= 8);
  buffer[--i] |= s * 128;
  return buffer;
}
function unpackIEEE754(buffer, mLen, nBytes) {
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var nBits = eLen - 7;
  var i = nBytes - 1;
  var s = buffer[i--];
  var e = s & 127;
  var m;
  s >>= 7;
  for (; nBits > 0; e = e * 256 + buffer[i], i--, nBits -= 8);
  m = e & (1 << -nBits) - 1;
  e >>= -nBits;
  nBits += mLen;
  for (; nBits > 0; m = m * 256 + buffer[i], i--, nBits -= 8);
  if (e === 0) {
    e = 1 - eBias;
  } else if (e === eMax) {
    return m ? NaN : s ? -Infinity : Infinity;
  } else {
    m = m + pow(2, mLen);
    e = e - eBias;
  } return (s ? -1 : 1) * m * pow(2, e - mLen);
}

function unpackI32(bytes) {
  return bytes[3] << 24 | bytes[2] << 16 | bytes[1] << 8 | bytes[0];
}
function packI8(it) {
  return [it & 0xff];
}
function packI16(it) {
  return [it & 0xff, it >> 8 & 0xff];
}
function packI32(it) {
  return [it & 0xff, it >> 8 & 0xff, it >> 16 & 0xff, it >> 24 & 0xff];
}
function packF64(it) {
  return packIEEE754(it, 52, 8);
}
function packF32(it) {
  return packIEEE754(it, 23, 4);
}

function addGetter(C, key, internal) {
  dP(C[PROTOTYPE], key, { get: function () { return this[internal]; } });
}

function get(view, bytes, index, isLittleEndian) {
  var numIndex = +index;
  var intIndex = toIndex(numIndex);
  if (intIndex + bytes > view[$LENGTH]) throw RangeError(WRONG_INDEX);
  var store = view[$BUFFER]._b;
  var start = intIndex + view[$OFFSET];
  var pack = store.slice(start, start + bytes);
  return isLittleEndian ? pack : pack.reverse();
}
function set(view, bytes, index, conversion, value, isLittleEndian) {
  var numIndex = +index;
  var intIndex = toIndex(numIndex);
  if (intIndex + bytes > view[$LENGTH]) throw RangeError(WRONG_INDEX);
  var store = view[$BUFFER]._b;
  var start = intIndex + view[$OFFSET];
  var pack = conversion(+value);
  for (var i = 0; i < bytes; i++) store[start + i] = pack[isLittleEndian ? i : bytes - i - 1];
}

if (!$typed.ABV) {
  $ArrayBuffer = function ArrayBuffer(length) {
    anInstance(this, $ArrayBuffer, ARRAY_BUFFER);
    var byteLength = toIndex(length);
    this._b = arrayFill.call(new Array(byteLength), 0);
    this[$LENGTH] = byteLength;
  };

  $DataView = function DataView(buffer, byteOffset, byteLength) {
    anInstance(this, $DataView, DATA_VIEW);
    anInstance(buffer, $ArrayBuffer, DATA_VIEW);
    var bufferLength = buffer[$LENGTH];
    var offset = toInteger(byteOffset);
    if (offset < 0 || offset > bufferLength) throw RangeError('Wrong offset!');
    byteLength = byteLength === undefined ? bufferLength - offset : toLength(byteLength);
    if (offset + byteLength > bufferLength) throw RangeError(WRONG_LENGTH);
    this[$BUFFER] = buffer;
    this[$OFFSET] = offset;
    this[$LENGTH] = byteLength;
  };

  if (DESCRIPTORS) {
    addGetter($ArrayBuffer, BYTE_LENGTH, '_l');
    addGetter($DataView, BUFFER, '_b');
    addGetter($DataView, BYTE_LENGTH, '_l');
    addGetter($DataView, BYTE_OFFSET, '_o');
  }

  redefineAll($DataView[PROTOTYPE], {
    getInt8: function getInt8(byteOffset) {
      return get(this, 1, byteOffset)[0] << 24 >> 24;
    },
    getUint8: function getUint8(byteOffset) {
      return get(this, 1, byteOffset)[0];
    },
    getInt16: function getInt16(byteOffset /* , littleEndian */) {
      var bytes = get(this, 2, byteOffset, arguments[1]);
      return (bytes[1] << 8 | bytes[0]) << 16 >> 16;
    },
    getUint16: function getUint16(byteOffset /* , littleEndian */) {
      var bytes = get(this, 2, byteOffset, arguments[1]);
      return bytes[1] << 8 | bytes[0];
    },
    getInt32: function getInt32(byteOffset /* , littleEndian */) {
      return unpackI32(get(this, 4, byteOffset, arguments[1]));
    },
    getUint32: function getUint32(byteOffset /* , littleEndian */) {
      return unpackI32(get(this, 4, byteOffset, arguments[1])) >>> 0;
    },
    getFloat32: function getFloat32(byteOffset /* , littleEndian */) {
      return unpackIEEE754(get(this, 4, byteOffset, arguments[1]), 23, 4);
    },
    getFloat64: function getFloat64(byteOffset /* , littleEndian */) {
      return unpackIEEE754(get(this, 8, byteOffset, arguments[1]), 52, 8);
    },
    setInt8: function setInt8(byteOffset, value) {
      set(this, 1, byteOffset, packI8, value);
    },
    setUint8: function setUint8(byteOffset, value) {
      set(this, 1, byteOffset, packI8, value);
    },
    setInt16: function setInt16(byteOffset, value /* , littleEndian */) {
      set(this, 2, byteOffset, packI16, value, arguments[2]);
    },
    setUint16: function setUint16(byteOffset, value /* , littleEndian */) {
      set(this, 2, byteOffset, packI16, value, arguments[2]);
    },
    setInt32: function setInt32(byteOffset, value /* , littleEndian */) {
      set(this, 4, byteOffset, packI32, value, arguments[2]);
    },
    setUint32: function setUint32(byteOffset, value /* , littleEndian */) {
      set(this, 4, byteOffset, packI32, value, arguments[2]);
    },
    setFloat32: function setFloat32(byteOffset, value /* , littleEndian */) {
      set(this, 4, byteOffset, packF32, value, arguments[2]);
    },
    setFloat64: function setFloat64(byteOffset, value /* , littleEndian */) {
      set(this, 8, byteOffset, packF64, value, arguments[2]);
    }
  });
} else {
  if (!fails(function () {
    $ArrayBuffer(1);
  }) || !fails(function () {
    new $ArrayBuffer(-1); // eslint-disable-line no-new
  }) || fails(function () {
    new $ArrayBuffer(); // eslint-disable-line no-new
    new $ArrayBuffer(1.5); // eslint-disable-line no-new
    new $ArrayBuffer(NaN); // eslint-disable-line no-new
    return $ArrayBuffer.name != ARRAY_BUFFER;
  })) {
    $ArrayBuffer = function ArrayBuffer(length) {
      anInstance(this, $ArrayBuffer);
      return new BaseBuffer(toIndex(length));
    };
    var ArrayBufferProto = $ArrayBuffer[PROTOTYPE] = BaseBuffer[PROTOTYPE];
    for (var keys = gOPN(BaseBuffer), j = 0, key; keys.length > j;) {
      if (!((key = keys[j++]) in $ArrayBuffer)) hide($ArrayBuffer, key, BaseBuffer[key]);
    }
    if (!LIBRARY) ArrayBufferProto.constructor = $ArrayBuffer;
  }
  // iOS Safari 7.x bug
  var view = new $DataView(new $ArrayBuffer(2));
  var $setInt8 = $DataView[PROTOTYPE].setInt8;
  view.setInt8(0, 2147483648);
  view.setInt8(1, 2147483649);
  if (view.getInt8(0) || !view.getInt8(1)) redefineAll($DataView[PROTOTYPE], {
    setInt8: function setInt8(byteOffset, value) {
      $setInt8.call(this, byteOffset, value << 24 >> 24);
    },
    setUint8: function setUint8(byteOffset, value) {
      $setInt8.call(this, byteOffset, value << 24 >> 24);
    }
  }, true);
}
setToStringTag($ArrayBuffer, ARRAY_BUFFER);
setToStringTag($DataView, DATA_VIEW);
hide($DataView[PROTOTYPE], $typed.VIEW, true);
exports[ARRAY_BUFFER] = $ArrayBuffer;
exports[DATA_VIEW] = $DataView;


/***/ }),
/* 233 */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/ecma262/#sec-toindex
var toInteger = __webpack_require__(40);
var toLength = __webpack_require__(39);
module.exports = function (it) {
  if (it === undefined) return 0;
  var number = toInteger(it);
  var length = toLength(number);
  if (number !== length) throw RangeError('Wrong length!');
  return length;
};


/***/ }),
/* 234 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(9);
$export($export.G + $export.W + $export.F * !__webpack_require__(231).ABV, {
  DataView: __webpack_require__(232).DataView
});


/***/ }),
/* 235 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(236)('Int8', 1, function (init) {
  return function Int8Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),
/* 236 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

if (__webpack_require__(7)) {
  var LIBRARY = __webpack_require__(23);
  var global = __webpack_require__(5);
  var fails = __webpack_require__(8);
  var $export = __webpack_require__(9);
  var $typed = __webpack_require__(231);
  var $buffer = __webpack_require__(232);
  var ctx = __webpack_require__(24);
  var anInstance = __webpack_require__(213);
  var propertyDesc = __webpack_require__(18);
  var hide = __webpack_require__(11);
  var redefineAll = __webpack_require__(221);
  var toInteger = __webpack_require__(40);
  var toLength = __webpack_require__(39);
  var toIndex = __webpack_require__(233);
  var toAbsoluteIndex = __webpack_require__(41);
  var toPrimitive = __webpack_require__(17);
  var has = __webpack_require__(6);
  var classof = __webpack_require__(76);
  var isObject = __webpack_require__(14);
  var toObject = __webpack_require__(47);
  var isArrayIter = __webpack_require__(165);
  var create = __webpack_require__(48);
  var getPrototypeOf = __webpack_require__(60);
  var gOPN = __webpack_require__(52).f;
  var getIterFn = __webpack_require__(167);
  var uid = __webpack_require__(20);
  var wks = __webpack_require__(28);
  var createArrayMethod = __webpack_require__(175);
  var createArrayIncludes = __webpack_require__(38);
  var speciesConstructor = __webpack_require__(211);
  var ArrayIterators = __webpack_require__(196);
  var Iterators = __webpack_require__(131);
  var $iterDetect = __webpack_require__(168);
  var setSpecies = __webpack_require__(195);
  var arrayFill = __webpack_require__(191);
  var arrayCopyWithin = __webpack_require__(188);
  var $DP = __webpack_require__(12);
  var $GOPD = __webpack_require__(53);
  var dP = $DP.f;
  var gOPD = $GOPD.f;
  var RangeError = global.RangeError;
  var TypeError = global.TypeError;
  var Uint8Array = global.Uint8Array;
  var ARRAY_BUFFER = 'ArrayBuffer';
  var SHARED_BUFFER = 'Shared' + ARRAY_BUFFER;
  var BYTES_PER_ELEMENT = 'BYTES_PER_ELEMENT';
  var PROTOTYPE = 'prototype';
  var ArrayProto = Array[PROTOTYPE];
  var $ArrayBuffer = $buffer.ArrayBuffer;
  var $DataView = $buffer.DataView;
  var arrayForEach = createArrayMethod(0);
  var arrayFilter = createArrayMethod(2);
  var arraySome = createArrayMethod(3);
  var arrayEvery = createArrayMethod(4);
  var arrayFind = createArrayMethod(5);
  var arrayFindIndex = createArrayMethod(6);
  var arrayIncludes = createArrayIncludes(true);
  var arrayIndexOf = createArrayIncludes(false);
  var arrayValues = ArrayIterators.values;
  var arrayKeys = ArrayIterators.keys;
  var arrayEntries = ArrayIterators.entries;
  var arrayLastIndexOf = ArrayProto.lastIndexOf;
  var arrayReduce = ArrayProto.reduce;
  var arrayReduceRight = ArrayProto.reduceRight;
  var arrayJoin = ArrayProto.join;
  var arraySort = ArrayProto.sort;
  var arraySlice = ArrayProto.slice;
  var arrayToString = ArrayProto.toString;
  var arrayToLocaleString = ArrayProto.toLocaleString;
  var ITERATOR = wks('iterator');
  var TAG = wks('toStringTag');
  var TYPED_CONSTRUCTOR = uid('typed_constructor');
  var DEF_CONSTRUCTOR = uid('def_constructor');
  var ALL_CONSTRUCTORS = $typed.CONSTR;
  var TYPED_ARRAY = $typed.TYPED;
  var VIEW = $typed.VIEW;
  var WRONG_LENGTH = 'Wrong length!';

  var $map = createArrayMethod(1, function (O, length) {
    return allocate(speciesConstructor(O, O[DEF_CONSTRUCTOR]), length);
  });

  var LITTLE_ENDIAN = fails(function () {
    // eslint-disable-next-line no-undef
    return new Uint8Array(new Uint16Array([1]).buffer)[0] === 1;
  });

  var FORCED_SET = !!Uint8Array && !!Uint8Array[PROTOTYPE].set && fails(function () {
    new Uint8Array(1).set({});
  });

  var toOffset = function (it, BYTES) {
    var offset = toInteger(it);
    if (offset < 0 || offset % BYTES) throw RangeError('Wrong offset!');
    return offset;
  };

  var validate = function (it) {
    if (isObject(it) && TYPED_ARRAY in it) return it;
    throw TypeError(it + ' is not a typed array!');
  };

  var allocate = function (C, length) {
    if (!(isObject(C) && TYPED_CONSTRUCTOR in C)) {
      throw TypeError('It is not a typed array constructor!');
    } return new C(length);
  };

  var speciesFromList = function (O, list) {
    return fromList(speciesConstructor(O, O[DEF_CONSTRUCTOR]), list);
  };

  var fromList = function (C, list) {
    var index = 0;
    var length = list.length;
    var result = allocate(C, length);
    while (length > index) result[index] = list[index++];
    return result;
  };

  var addGetter = function (it, key, internal) {
    dP(it, key, { get: function () { return this._d[internal]; } });
  };

  var $from = function from(source /* , mapfn, thisArg */) {
    var O = toObject(source);
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var iterFn = getIterFn(O);
    var i, length, values, result, step, iterator;
    if (iterFn != undefined && !isArrayIter(iterFn)) {
      for (iterator = iterFn.call(O), values = [], i = 0; !(step = iterator.next()).done; i++) {
        values.push(step.value);
      } O = values;
    }
    if (mapping && aLen > 2) mapfn = ctx(mapfn, arguments[2], 2);
    for (i = 0, length = toLength(O.length), result = allocate(this, length); length > i; i++) {
      result[i] = mapping ? mapfn(O[i], i) : O[i];
    }
    return result;
  };

  var $of = function of(/* ...items */) {
    var index = 0;
    var length = arguments.length;
    var result = allocate(this, length);
    while (length > index) result[index] = arguments[index++];
    return result;
  };

  // iOS Safari 6.x fails here
  var TO_LOCALE_BUG = !!Uint8Array && fails(function () { arrayToLocaleString.call(new Uint8Array(1)); });

  var $toLocaleString = function toLocaleString() {
    return arrayToLocaleString.apply(TO_LOCALE_BUG ? arraySlice.call(validate(this)) : validate(this), arguments);
  };

  var proto = {
    copyWithin: function copyWithin(target, start /* , end */) {
      return arrayCopyWithin.call(validate(this), target, start, arguments.length > 2 ? arguments[2] : undefined);
    },
    every: function every(callbackfn /* , thisArg */) {
      return arrayEvery(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    fill: function fill(value /* , start, end */) { // eslint-disable-line no-unused-vars
      return arrayFill.apply(validate(this), arguments);
    },
    filter: function filter(callbackfn /* , thisArg */) {
      return speciesFromList(this, arrayFilter(validate(this), callbackfn,
        arguments.length > 1 ? arguments[1] : undefined));
    },
    find: function find(predicate /* , thisArg */) {
      return arrayFind(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
    },
    findIndex: function findIndex(predicate /* , thisArg */) {
      return arrayFindIndex(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
    },
    forEach: function forEach(callbackfn /* , thisArg */) {
      arrayForEach(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    indexOf: function indexOf(searchElement /* , fromIndex */) {
      return arrayIndexOf(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
    },
    includes: function includes(searchElement /* , fromIndex */) {
      return arrayIncludes(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
    },
    join: function join(separator) { // eslint-disable-line no-unused-vars
      return arrayJoin.apply(validate(this), arguments);
    },
    lastIndexOf: function lastIndexOf(searchElement /* , fromIndex */) { // eslint-disable-line no-unused-vars
      return arrayLastIndexOf.apply(validate(this), arguments);
    },
    map: function map(mapfn /* , thisArg */) {
      return $map(validate(this), mapfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    reduce: function reduce(callbackfn /* , initialValue */) { // eslint-disable-line no-unused-vars
      return arrayReduce.apply(validate(this), arguments);
    },
    reduceRight: function reduceRight(callbackfn /* , initialValue */) { // eslint-disable-line no-unused-vars
      return arrayReduceRight.apply(validate(this), arguments);
    },
    reverse: function reverse() {
      var that = this;
      var length = validate(that).length;
      var middle = Math.floor(length / 2);
      var index = 0;
      var value;
      while (index < middle) {
        value = that[index];
        that[index++] = that[--length];
        that[length] = value;
      } return that;
    },
    some: function some(callbackfn /* , thisArg */) {
      return arraySome(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    sort: function sort(comparefn) {
      return arraySort.call(validate(this), comparefn);
    },
    subarray: function subarray(begin, end) {
      var O = validate(this);
      var length = O.length;
      var $begin = toAbsoluteIndex(begin, length);
      return new (speciesConstructor(O, O[DEF_CONSTRUCTOR]))(
        O.buffer,
        O.byteOffset + $begin * O.BYTES_PER_ELEMENT,
        toLength((end === undefined ? length : toAbsoluteIndex(end, length)) - $begin)
      );
    }
  };

  var $slice = function slice(start, end) {
    return speciesFromList(this, arraySlice.call(validate(this), start, end));
  };

  var $set = function set(arrayLike /* , offset */) {
    validate(this);
    var offset = toOffset(arguments[1], 1);
    var length = this.length;
    var src = toObject(arrayLike);
    var len = toLength(src.length);
    var index = 0;
    if (len + offset > length) throw RangeError(WRONG_LENGTH);
    while (index < len) this[offset + index] = src[index++];
  };

  var $iterators = {
    entries: function entries() {
      return arrayEntries.call(validate(this));
    },
    keys: function keys() {
      return arrayKeys.call(validate(this));
    },
    values: function values() {
      return arrayValues.call(validate(this));
    }
  };

  var isTAIndex = function (target, key) {
    return isObject(target)
      && target[TYPED_ARRAY]
      && typeof key != 'symbol'
      && key in target
      && String(+key) == String(key);
  };
  var $getDesc = function getOwnPropertyDescriptor(target, key) {
    return isTAIndex(target, key = toPrimitive(key, true))
      ? propertyDesc(2, target[key])
      : gOPD(target, key);
  };
  var $setDesc = function defineProperty(target, key, desc) {
    if (isTAIndex(target, key = toPrimitive(key, true))
      && isObject(desc)
      && has(desc, 'value')
      && !has(desc, 'get')
      && !has(desc, 'set')
      // TODO: add validation descriptor w/o calling accessors
      && !desc.configurable
      && (!has(desc, 'writable') || desc.writable)
      && (!has(desc, 'enumerable') || desc.enumerable)
    ) {
      target[key] = desc.value;
      return target;
    } return dP(target, key, desc);
  };

  if (!ALL_CONSTRUCTORS) {
    $GOPD.f = $getDesc;
    $DP.f = $setDesc;
  }

  $export($export.S + $export.F * !ALL_CONSTRUCTORS, 'Object', {
    getOwnPropertyDescriptor: $getDesc,
    defineProperty: $setDesc
  });

  if (fails(function () { arrayToString.call({}); })) {
    arrayToString = arrayToLocaleString = function toString() {
      return arrayJoin.call(this);
    };
  }

  var $TypedArrayPrototype$ = redefineAll({}, proto);
  redefineAll($TypedArrayPrototype$, $iterators);
  hide($TypedArrayPrototype$, ITERATOR, $iterators.values);
  redefineAll($TypedArrayPrototype$, {
    slice: $slice,
    set: $set,
    constructor: function () { /* noop */ },
    toString: arrayToString,
    toLocaleString: $toLocaleString
  });
  addGetter($TypedArrayPrototype$, 'buffer', 'b');
  addGetter($TypedArrayPrototype$, 'byteOffset', 'o');
  addGetter($TypedArrayPrototype$, 'byteLength', 'l');
  addGetter($TypedArrayPrototype$, 'length', 'e');
  dP($TypedArrayPrototype$, TAG, {
    get: function () { return this[TYPED_ARRAY]; }
  });

  // eslint-disable-next-line max-statements
  module.exports = function (KEY, BYTES, wrapper, CLAMPED) {
    CLAMPED = !!CLAMPED;
    var NAME = KEY + (CLAMPED ? 'Clamped' : '') + 'Array';
    var GETTER = 'get' + KEY;
    var SETTER = 'set' + KEY;
    var TypedArray = global[NAME];
    var Base = TypedArray || {};
    var TAC = TypedArray && getPrototypeOf(TypedArray);
    var FORCED = !TypedArray || !$typed.ABV;
    var O = {};
    var TypedArrayPrototype = TypedArray && TypedArray[PROTOTYPE];
    var getter = function (that, index) {
      var data = that._d;
      return data.v[GETTER](index * BYTES + data.o, LITTLE_ENDIAN);
    };
    var setter = function (that, index, value) {
      var data = that._d;
      if (CLAMPED) value = (value = Math.round(value)) < 0 ? 0 : value > 0xff ? 0xff : value & 0xff;
      data.v[SETTER](index * BYTES + data.o, value, LITTLE_ENDIAN);
    };
    var addElement = function (that, index) {
      dP(that, index, {
        get: function () {
          return getter(this, index);
        },
        set: function (value) {
          return setter(this, index, value);
        },
        enumerable: true
      });
    };
    if (FORCED) {
      TypedArray = wrapper(function (that, data, $offset, $length) {
        anInstance(that, TypedArray, NAME, '_d');
        var index = 0;
        var offset = 0;
        var buffer, byteLength, length, klass;
        if (!isObject(data)) {
          length = toIndex(data);
          byteLength = length * BYTES;
          buffer = new $ArrayBuffer(byteLength);
        } else if (data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER) {
          buffer = data;
          offset = toOffset($offset, BYTES);
          var $len = data.byteLength;
          if ($length === undefined) {
            if ($len % BYTES) throw RangeError(WRONG_LENGTH);
            byteLength = $len - offset;
            if (byteLength < 0) throw RangeError(WRONG_LENGTH);
          } else {
            byteLength = toLength($length) * BYTES;
            if (byteLength + offset > $len) throw RangeError(WRONG_LENGTH);
          }
          length = byteLength / BYTES;
        } else if (TYPED_ARRAY in data) {
          return fromList(TypedArray, data);
        } else {
          return $from.call(TypedArray, data);
        }
        hide(that, '_d', {
          b: buffer,
          o: offset,
          l: byteLength,
          e: length,
          v: new $DataView(buffer)
        });
        while (index < length) addElement(that, index++);
      });
      TypedArrayPrototype = TypedArray[PROTOTYPE] = create($TypedArrayPrototype$);
      hide(TypedArrayPrototype, 'constructor', TypedArray);
    } else if (!fails(function () {
      TypedArray(1);
    }) || !fails(function () {
      new TypedArray(-1); // eslint-disable-line no-new
    }) || !$iterDetect(function (iter) {
      new TypedArray(); // eslint-disable-line no-new
      new TypedArray(null); // eslint-disable-line no-new
      new TypedArray(1.5); // eslint-disable-line no-new
      new TypedArray(iter); // eslint-disable-line no-new
    }, true)) {
      TypedArray = wrapper(function (that, data, $offset, $length) {
        anInstance(that, TypedArray, NAME);
        var klass;
        // `ws` module bug, temporarily remove validation length for Uint8Array
        // https://github.com/websockets/ws/pull/645
        if (!isObject(data)) return new Base(toIndex(data));
        if (data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER) {
          return $length !== undefined
            ? new Base(data, toOffset($offset, BYTES), $length)
            : $offset !== undefined
              ? new Base(data, toOffset($offset, BYTES))
              : new Base(data);
        }
        if (TYPED_ARRAY in data) return fromList(TypedArray, data);
        return $from.call(TypedArray, data);
      });
      arrayForEach(TAC !== Function.prototype ? gOPN(Base).concat(gOPN(TAC)) : gOPN(Base), function (key) {
        if (!(key in TypedArray)) hide(TypedArray, key, Base[key]);
      });
      TypedArray[PROTOTYPE] = TypedArrayPrototype;
      if (!LIBRARY) TypedArrayPrototype.constructor = TypedArray;
    }
    var $nativeIterator = TypedArrayPrototype[ITERATOR];
    var CORRECT_ITER_NAME = !!$nativeIterator
      && ($nativeIterator.name == 'values' || $nativeIterator.name == undefined);
    var $iterator = $iterators.values;
    hide(TypedArray, TYPED_CONSTRUCTOR, true);
    hide(TypedArrayPrototype, TYPED_ARRAY, NAME);
    hide(TypedArrayPrototype, VIEW, true);
    hide(TypedArrayPrototype, DEF_CONSTRUCTOR, TypedArray);

    if (CLAMPED ? new TypedArray(1)[TAG] != NAME : !(TAG in TypedArrayPrototype)) {
      dP(TypedArrayPrototype, TAG, {
        get: function () { return NAME; }
      });
    }

    O[NAME] = TypedArray;

    $export($export.G + $export.W + $export.F * (TypedArray != Base), O);

    $export($export.S, NAME, {
      BYTES_PER_ELEMENT: BYTES
    });

    $export($export.S + $export.F * fails(function () { Base.of.call(TypedArray, 1); }), NAME, {
      from: $from,
      of: $of
    });

    if (!(BYTES_PER_ELEMENT in TypedArrayPrototype)) hide(TypedArrayPrototype, BYTES_PER_ELEMENT, BYTES);

    $export($export.P, NAME, proto);

    setSpecies(NAME);

    $export($export.P + $export.F * FORCED_SET, NAME, { set: $set });

    $export($export.P + $export.F * !CORRECT_ITER_NAME, NAME, $iterators);

    if (!LIBRARY && TypedArrayPrototype.toString != arrayToString) TypedArrayPrototype.toString = arrayToString;

    $export($export.P + $export.F * fails(function () {
      new TypedArray(1).slice();
    }), NAME, { slice: $slice });

    $export($export.P + $export.F * (fails(function () {
      return [1, 2].toLocaleString() != new TypedArray([1, 2]).toLocaleString();
    }) || !fails(function () {
      TypedArrayPrototype.toLocaleString.call([1, 2]);
    })), NAME, { toLocaleString: $toLocaleString });

    Iterators[NAME] = CORRECT_ITER_NAME ? $nativeIterator : $iterator;
    if (!LIBRARY && !CORRECT_ITER_NAME) hide(TypedArrayPrototype, ITERATOR, $iterator);
  };
} else module.exports = function () { /* empty */ };


/***/ }),
/* 237 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(236)('Uint8', 1, function (init) {
  return function Uint8Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),
/* 238 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(236)('Uint8', 1, function (init) {
  return function Uint8ClampedArray(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
}, true);


/***/ }),
/* 239 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(236)('Int16', 2, function (init) {
  return function Int16Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),
/* 240 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(236)('Uint16', 2, function (init) {
  return function Uint16Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),
/* 241 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(236)('Int32', 4, function (init) {
  return function Int32Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),
/* 242 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(236)('Uint32', 4, function (init) {
  return function Uint32Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),
/* 243 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(236)('Float32', 4, function (init) {
  return function Float32Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),
/* 244 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(236)('Float64', 8, function (init) {
  return function Float64Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),
/* 245 */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.1 Reflect.apply(target, thisArgument, argumentsList)
var $export = __webpack_require__(9);
var aFunction = __webpack_require__(25);
var anObject = __webpack_require__(13);
var rApply = (__webpack_require__(5).Reflect || {}).apply;
var fApply = Function.apply;
// MS Edge argumentsList argument is optional
$export($export.S + $export.F * !__webpack_require__(8)(function () {
  rApply(function () { /* empty */ });
}), 'Reflect', {
  apply: function apply(target, thisArgument, argumentsList) {
    var T = aFunction(target);
    var L = anObject(argumentsList);
    return rApply ? rApply(T, thisArgument, L) : fApply.call(T, thisArgument, L);
  }
});


/***/ }),
/* 246 */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.2 Reflect.construct(target, argumentsList [, newTarget])
var $export = __webpack_require__(9);
var create = __webpack_require__(48);
var aFunction = __webpack_require__(25);
var anObject = __webpack_require__(13);
var isObject = __webpack_require__(14);
var fails = __webpack_require__(8);
var bind = __webpack_require__(78);
var rConstruct = (__webpack_require__(5).Reflect || {}).construct;

// MS Edge supports only 2 arguments and argumentsList argument is optional
// FF Nightly sets third argument as `new.target`, but does not create `this` from it
var NEW_TARGET_BUG = fails(function () {
  function F() { /* empty */ }
  return !(rConstruct(function () { /* empty */ }, [], F) instanceof F);
});
var ARGS_BUG = !fails(function () {
  rConstruct(function () { /* empty */ });
});

$export($export.S + $export.F * (NEW_TARGET_BUG || ARGS_BUG), 'Reflect', {
  construct: function construct(Target, args /* , newTarget */) {
    aFunction(Target);
    anObject(args);
    var newTarget = arguments.length < 3 ? Target : aFunction(arguments[2]);
    if (ARGS_BUG && !NEW_TARGET_BUG) return rConstruct(Target, args, newTarget);
    if (Target == newTarget) {
      // w/o altered newTarget, optimization for 0-4 arguments
      switch (args.length) {
        case 0: return new Target();
        case 1: return new Target(args[0]);
        case 2: return new Target(args[0], args[1]);
        case 3: return new Target(args[0], args[1], args[2]);
        case 4: return new Target(args[0], args[1], args[2], args[3]);
      }
      // w/o altered newTarget, lot of arguments case
      var $args = [null];
      $args.push.apply($args, args);
      return new (bind.apply(Target, $args))();
    }
    // with altered newTarget, not support built-in constructors
    var proto = newTarget.prototype;
    var instance = create(isObject(proto) ? proto : Object.prototype);
    var result = Function.apply.call(Target, instance, args);
    return isObject(result) ? result : instance;
  }
});


/***/ }),
/* 247 */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.3 Reflect.defineProperty(target, propertyKey, attributes)
var dP = __webpack_require__(12);
var $export = __webpack_require__(9);
var anObject = __webpack_require__(13);
var toPrimitive = __webpack_require__(17);

// MS Edge has broken Reflect.defineProperty - throwing instead of returning false
$export($export.S + $export.F * __webpack_require__(8)(function () {
  // eslint-disable-next-line no-undef
  Reflect.defineProperty(dP.f({}, 1, { value: 1 }), 1, { value: 2 });
}), 'Reflect', {
  defineProperty: function defineProperty(target, propertyKey, attributes) {
    anObject(target);
    propertyKey = toPrimitive(propertyKey, true);
    anObject(attributes);
    try {
      dP.f(target, propertyKey, attributes);
      return true;
    } catch (e) {
      return false;
    }
  }
});


/***/ }),
/* 248 */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.4 Reflect.deleteProperty(target, propertyKey)
var $export = __webpack_require__(9);
var gOPD = __webpack_require__(53).f;
var anObject = __webpack_require__(13);

$export($export.S, 'Reflect', {
  deleteProperty: function deleteProperty(target, propertyKey) {
    var desc = gOPD(anObject(target), propertyKey);
    return desc && !desc.configurable ? false : delete target[propertyKey];
  }
});


/***/ }),
/* 249 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 26.1.5 Reflect.enumerate(target)
var $export = __webpack_require__(9);
var anObject = __webpack_require__(13);
var Enumerate = function (iterated) {
  this._t = anObject(iterated); // target
  this._i = 0;                  // next index
  var keys = this._k = [];      // keys
  var key;
  for (key in iterated) keys.push(key);
};
__webpack_require__(132)(Enumerate, 'Object', function () {
  var that = this;
  var keys = that._k;
  var key;
  do {
    if (that._i >= keys.length) return { value: undefined, done: true };
  } while (!((key = keys[that._i++]) in that._t));
  return { value: key, done: false };
});

$export($export.S, 'Reflect', {
  enumerate: function enumerate(target) {
    return new Enumerate(target);
  }
});


/***/ }),
/* 250 */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.6 Reflect.get(target, propertyKey [, receiver])
var gOPD = __webpack_require__(53);
var getPrototypeOf = __webpack_require__(60);
var has = __webpack_require__(6);
var $export = __webpack_require__(9);
var isObject = __webpack_require__(14);
var anObject = __webpack_require__(13);

function get(target, propertyKey /* , receiver */) {
  var receiver = arguments.length < 3 ? target : arguments[2];
  var desc, proto;
  if (anObject(target) === receiver) return target[propertyKey];
  if (desc = gOPD.f(target, propertyKey)) return has(desc, 'value')
    ? desc.value
    : desc.get !== undefined
      ? desc.get.call(receiver)
      : undefined;
  if (isObject(proto = getPrototypeOf(target))) return get(proto, propertyKey, receiver);
}

$export($export.S, 'Reflect', { get: get });


/***/ }),
/* 251 */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.7 Reflect.getOwnPropertyDescriptor(target, propertyKey)
var gOPD = __webpack_require__(53);
var $export = __webpack_require__(9);
var anObject = __webpack_require__(13);

$export($export.S, 'Reflect', {
  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propertyKey) {
    return gOPD.f(anObject(target), propertyKey);
  }
});


/***/ }),
/* 252 */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.8 Reflect.getPrototypeOf(target)
var $export = __webpack_require__(9);
var getProto = __webpack_require__(60);
var anObject = __webpack_require__(13);

$export($export.S, 'Reflect', {
  getPrototypeOf: function getPrototypeOf(target) {
    return getProto(anObject(target));
  }
});


/***/ }),
/* 253 */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.9 Reflect.has(target, propertyKey)
var $export = __webpack_require__(9);

$export($export.S, 'Reflect', {
  has: function has(target, propertyKey) {
    return propertyKey in target;
  }
});


/***/ }),
/* 254 */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.10 Reflect.isExtensible(target)
var $export = __webpack_require__(9);
var anObject = __webpack_require__(13);
var $isExtensible = Object.isExtensible;

$export($export.S, 'Reflect', {
  isExtensible: function isExtensible(target) {
    anObject(target);
    return $isExtensible ? $isExtensible(target) : true;
  }
});


/***/ }),
/* 255 */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.11 Reflect.ownKeys(target)
var $export = __webpack_require__(9);

$export($export.S, 'Reflect', { ownKeys: __webpack_require__(256) });


/***/ }),
/* 256 */
/***/ (function(module, exports, __webpack_require__) {

// all object keys, includes non-enumerable and symbols
var gOPN = __webpack_require__(52);
var gOPS = __webpack_require__(44);
var anObject = __webpack_require__(13);
var Reflect = __webpack_require__(5).Reflect;
module.exports = Reflect && Reflect.ownKeys || function ownKeys(it) {
  var keys = gOPN.f(anObject(it));
  var getSymbols = gOPS.f;
  return getSymbols ? keys.concat(getSymbols(it)) : keys;
};


/***/ }),
/* 257 */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.12 Reflect.preventExtensions(target)
var $export = __webpack_require__(9);
var anObject = __webpack_require__(13);
var $preventExtensions = Object.preventExtensions;

$export($export.S, 'Reflect', {
  preventExtensions: function preventExtensions(target) {
    anObject(target);
    try {
      if ($preventExtensions) $preventExtensions(target);
      return true;
    } catch (e) {
      return false;
    }
  }
});


/***/ }),
/* 258 */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.13 Reflect.set(target, propertyKey, V [, receiver])
var dP = __webpack_require__(12);
var gOPD = __webpack_require__(53);
var getPrototypeOf = __webpack_require__(60);
var has = __webpack_require__(6);
var $export = __webpack_require__(9);
var createDesc = __webpack_require__(18);
var anObject = __webpack_require__(13);
var isObject = __webpack_require__(14);

function set(target, propertyKey, V /* , receiver */) {
  var receiver = arguments.length < 4 ? target : arguments[3];
  var ownDesc = gOPD.f(anObject(target), propertyKey);
  var existingDescriptor, proto;
  if (!ownDesc) {
    if (isObject(proto = getPrototypeOf(target))) {
      return set(proto, propertyKey, V, receiver);
    }
    ownDesc = createDesc(0);
  }
  if (has(ownDesc, 'value')) {
    if (ownDesc.writable === false || !isObject(receiver)) return false;
    if (existingDescriptor = gOPD.f(receiver, propertyKey)) {
      if (existingDescriptor.get || existingDescriptor.set || existingDescriptor.writable === false) return false;
      existingDescriptor.value = V;
      dP.f(receiver, propertyKey, existingDescriptor);
    } else dP.f(receiver, propertyKey, createDesc(0, V));
    return true;
  }
  return ownDesc.set === undefined ? false : (ownDesc.set.call(receiver, V), true);
}

$export($export.S, 'Reflect', { set: set });


/***/ }),
/* 259 */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.14 Reflect.setPrototypeOf(target, proto)
var $export = __webpack_require__(9);
var setProto = __webpack_require__(74);

if (setProto) $export($export.S, 'Reflect', {
  setPrototypeOf: function setPrototypeOf(target, proto) {
    setProto.check(target, proto);
    try {
      setProto.set(target, proto);
      return true;
    } catch (e) {
      return false;
    }
  }
});


/***/ }),
/* 260 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/Array.prototype.includes
var $export = __webpack_require__(9);
var $includes = __webpack_require__(38)(true);

$export($export.P, 'Array', {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

__webpack_require__(189)('includes');


/***/ }),
/* 261 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://tc39.github.io/proposal-flatMap/#sec-Array.prototype.flatMap
var $export = __webpack_require__(9);
var flattenIntoArray = __webpack_require__(262);
var toObject = __webpack_require__(47);
var toLength = __webpack_require__(39);
var aFunction = __webpack_require__(25);
var arraySpeciesCreate = __webpack_require__(176);

$export($export.P, 'Array', {
  flatMap: function flatMap(callbackfn /* , thisArg */) {
    var O = toObject(this);
    var sourceLen, A;
    aFunction(callbackfn);
    sourceLen = toLength(O.length);
    A = arraySpeciesCreate(O, 0);
    flattenIntoArray(A, O, O, sourceLen, 0, 1, callbackfn, arguments[1]);
    return A;
  }
});

__webpack_require__(189)('flatMap');


/***/ }),
/* 262 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://tc39.github.io/proposal-flatMap/#sec-FlattenIntoArray
var isArray = __webpack_require__(46);
var isObject = __webpack_require__(14);
var toLength = __webpack_require__(39);
var ctx = __webpack_require__(24);
var IS_CONCAT_SPREADABLE = __webpack_require__(28)('isConcatSpreadable');

function flattenIntoArray(target, original, source, sourceLen, start, depth, mapper, thisArg) {
  var targetIndex = start;
  var sourceIndex = 0;
  var mapFn = mapper ? ctx(mapper, thisArg, 3) : false;
  var element, spreadable;

  while (sourceIndex < sourceLen) {
    if (sourceIndex in source) {
      element = mapFn ? mapFn(source[sourceIndex], sourceIndex, original) : source[sourceIndex];

      spreadable = false;
      if (isObject(element)) {
        spreadable = element[IS_CONCAT_SPREADABLE];
        spreadable = spreadable !== undefined ? !!spreadable : isArray(element);
      }

      if (spreadable && depth > 0) {
        targetIndex = flattenIntoArray(target, original, element, toLength(element.length), targetIndex, depth - 1) - 1;
      } else {
        if (targetIndex >= 0x1fffffffffffff) throw TypeError();
        target[targetIndex] = element;
      }

      targetIndex++;
    }
    sourceIndex++;
  }
  return targetIndex;
}

module.exports = flattenIntoArray;


/***/ }),
/* 263 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://tc39.github.io/proposal-flatMap/#sec-Array.prototype.flatten
var $export = __webpack_require__(9);
var flattenIntoArray = __webpack_require__(262);
var toObject = __webpack_require__(47);
var toLength = __webpack_require__(39);
var toInteger = __webpack_require__(40);
var arraySpeciesCreate = __webpack_require__(176);

$export($export.P, 'Array', {
  flatten: function flatten(/* depthArg = 1 */) {
    var depthArg = arguments[0];
    var O = toObject(this);
    var sourceLen = toLength(O.length);
    var A = arraySpeciesCreate(O, 0);
    flattenIntoArray(A, O, O, sourceLen, 0, depthArg === undefined ? 1 : toInteger(depthArg));
    return A;
  }
});

__webpack_require__(189)('flatten');


/***/ }),
/* 264 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/mathiasbynens/String.prototype.at
var $export = __webpack_require__(9);
var $at = __webpack_require__(129)(true);

$export($export.P, 'String', {
  at: function at(pos) {
    return $at(this, pos);
  }
});


/***/ }),
/* 265 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/proposal-string-pad-start-end
var $export = __webpack_require__(9);
var $pad = __webpack_require__(266);
var userAgent = __webpack_require__(219);

// https://github.com/zloirock/core-js/issues/280
var WEBKIT_BUG = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(userAgent);

$export($export.P + $export.F * WEBKIT_BUG, 'String', {
  padStart: function padStart(maxLength /* , fillString = ' ' */) {
    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, true);
  }
});


/***/ }),
/* 266 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-string-pad-start-end
var toLength = __webpack_require__(39);
var repeat = __webpack_require__(92);
var defined = __webpack_require__(37);

module.exports = function (that, maxLength, fillString, left) {
  var S = String(defined(that));
  var stringLength = S.length;
  var fillStr = fillString === undefined ? ' ' : String(fillString);
  var intMaxLength = toLength(maxLength);
  if (intMaxLength <= stringLength || fillStr == '') return S;
  var fillLen = intMaxLength - stringLength;
  var stringFiller = repeat.call(fillStr, Math.ceil(fillLen / fillStr.length));
  if (stringFiller.length > fillLen) stringFiller = stringFiller.slice(0, fillLen);
  return left ? stringFiller + S : S + stringFiller;
};


/***/ }),
/* 267 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/proposal-string-pad-start-end
var $export = __webpack_require__(9);
var $pad = __webpack_require__(266);
var userAgent = __webpack_require__(219);

// https://github.com/zloirock/core-js/issues/280
var WEBKIT_BUG = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(userAgent);

$export($export.P + $export.F * WEBKIT_BUG, 'String', {
  padEnd: function padEnd(maxLength /* , fillString = ' ' */) {
    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, false);
  }
});


/***/ }),
/* 268 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
__webpack_require__(84)('trimLeft', function ($trim) {
  return function trimLeft() {
    return $trim(this, 1);
  };
}, 'trimStart');


/***/ }),
/* 269 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
__webpack_require__(84)('trimRight', function ($trim) {
  return function trimRight() {
    return $trim(this, 2);
  };
}, 'trimEnd');


/***/ }),
/* 270 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://tc39.github.io/String.prototype.matchAll/
var $export = __webpack_require__(9);
var defined = __webpack_require__(37);
var toLength = __webpack_require__(39);
var isRegExp = __webpack_require__(136);
var getFlags = __webpack_require__(199);
var RegExpProto = RegExp.prototype;

var $RegExpStringIterator = function (regexp, string) {
  this._r = regexp;
  this._s = string;
};

__webpack_require__(132)($RegExpStringIterator, 'RegExp String', function next() {
  var match = this._r.exec(this._s);
  return { value: match, done: match === null };
});

$export($export.P, 'String', {
  matchAll: function matchAll(regexp) {
    defined(this);
    if (!isRegExp(regexp)) throw TypeError(regexp + ' is not a regexp!');
    var S = String(this);
    var flags = 'flags' in RegExpProto ? String(regexp.flags) : getFlags.call(regexp);
    var rx = new RegExp(regexp.source, ~flags.indexOf('g') ? flags : 'g' + flags);
    rx.lastIndex = toLength(regexp.lastIndex);
    return new $RegExpStringIterator(rx, S);
  }
});


/***/ }),
/* 271 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(30)('asyncIterator');


/***/ }),
/* 272 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(30)('observable');


/***/ }),
/* 273 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-object-getownpropertydescriptors
var $export = __webpack_require__(9);
var ownKeys = __webpack_require__(256);
var toIObject = __webpack_require__(34);
var gOPD = __webpack_require__(53);
var createProperty = __webpack_require__(166);

$export($export.S, 'Object', {
  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
    var O = toIObject(object);
    var getDesc = gOPD.f;
    var keys = ownKeys(O);
    var result = {};
    var i = 0;
    var key, desc;
    while (keys.length > i) {
      desc = getDesc(O, key = keys[i++]);
      if (desc !== undefined) createProperty(result, key, desc);
    }
    return result;
  }
});


/***/ }),
/* 274 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-object-values-entries
var $export = __webpack_require__(9);
var $values = __webpack_require__(275)(false);

$export($export.S, 'Object', {
  values: function values(it) {
    return $values(it);
  }
});


/***/ }),
/* 275 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(7);
var getKeys = __webpack_require__(32);
var toIObject = __webpack_require__(34);
var isEnum = __webpack_require__(45).f;
module.exports = function (isEntries) {
  return function (it) {
    var O = toIObject(it);
    var keys = getKeys(O);
    var length = keys.length;
    var i = 0;
    var result = [];
    var key;
    while (length > i) {
      key = keys[i++];
      if (!DESCRIPTORS || isEnum.call(O, key)) {
        result.push(isEntries ? [key, O[key]] : O[key]);
      }
    }
    return result;
  };
};


/***/ }),
/* 276 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-object-values-entries
var $export = __webpack_require__(9);
var $entries = __webpack_require__(275)(true);

$export($export.S, 'Object', {
  entries: function entries(it) {
    return $entries(it);
  }
});


/***/ }),
/* 277 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(9);
var toObject = __webpack_require__(47);
var aFunction = __webpack_require__(25);
var $defineProperty = __webpack_require__(12);

// B.2.2.2 Object.prototype.__defineGetter__(P, getter)
__webpack_require__(7) && $export($export.P + __webpack_require__(278), 'Object', {
  __defineGetter__: function __defineGetter__(P, getter) {
    $defineProperty.f(toObject(this), P, { get: aFunction(getter), enumerable: true, configurable: true });
  }
});


/***/ }),
/* 278 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Forced replacement prototype accessors methods
module.exports = __webpack_require__(23) || !__webpack_require__(8)(function () {
  var K = Math.random();
  // In FF throws only define methods
  // eslint-disable-next-line no-undef, no-useless-call
  __defineSetter__.call(null, K, function () { /* empty */ });
  delete __webpack_require__(5)[K];
});


/***/ }),
/* 279 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(9);
var toObject = __webpack_require__(47);
var aFunction = __webpack_require__(25);
var $defineProperty = __webpack_require__(12);

// B.2.2.3 Object.prototype.__defineSetter__(P, setter)
__webpack_require__(7) && $export($export.P + __webpack_require__(278), 'Object', {
  __defineSetter__: function __defineSetter__(P, setter) {
    $defineProperty.f(toObject(this), P, { set: aFunction(setter), enumerable: true, configurable: true });
  }
});


/***/ }),
/* 280 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(9);
var toObject = __webpack_require__(47);
var toPrimitive = __webpack_require__(17);
var getPrototypeOf = __webpack_require__(60);
var getOwnPropertyDescriptor = __webpack_require__(53).f;

// B.2.2.4 Object.prototype.__lookupGetter__(P)
__webpack_require__(7) && $export($export.P + __webpack_require__(278), 'Object', {
  __lookupGetter__: function __lookupGetter__(P) {
    var O = toObject(this);
    var K = toPrimitive(P, true);
    var D;
    do {
      if (D = getOwnPropertyDescriptor(O, K)) return D.get;
    } while (O = getPrototypeOf(O));
  }
});


/***/ }),
/* 281 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(9);
var toObject = __webpack_require__(47);
var toPrimitive = __webpack_require__(17);
var getPrototypeOf = __webpack_require__(60);
var getOwnPropertyDescriptor = __webpack_require__(53).f;

// B.2.2.5 Object.prototype.__lookupSetter__(P)
__webpack_require__(7) && $export($export.P + __webpack_require__(278), 'Object', {
  __lookupSetter__: function __lookupSetter__(P) {
    var O = toObject(this);
    var K = toPrimitive(P, true);
    var D;
    do {
      if (D = getOwnPropertyDescriptor(O, K)) return D.set;
    } while (O = getPrototypeOf(O));
  }
});


/***/ }),
/* 282 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var $export = __webpack_require__(9);

$export($export.P + $export.R, 'Map', { toJSON: __webpack_require__(283)('Map') });


/***/ }),
/* 283 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var classof = __webpack_require__(76);
var from = __webpack_require__(284);
module.exports = function (NAME) {
  return function toJSON() {
    if (classof(this) != NAME) throw TypeError(NAME + "#toJSON isn't generic");
    return from(this);
  };
};


/***/ }),
/* 284 */
/***/ (function(module, exports, __webpack_require__) {

var forOf = __webpack_require__(214);

module.exports = function (iter, ITERATOR) {
  var result = [];
  forOf(iter, false, result.push, result, ITERATOR);
  return result;
};


/***/ }),
/* 285 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var $export = __webpack_require__(9);

$export($export.P + $export.R, 'Set', { toJSON: __webpack_require__(283)('Set') });


/***/ }),
/* 286 */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-map.of
__webpack_require__(287)('Map');


/***/ }),
/* 287 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://tc39.github.io/proposal-setmap-offrom/
var $export = __webpack_require__(9);

module.exports = function (COLLECTION) {
  $export($export.S, COLLECTION, { of: function of() {
    var length = arguments.length;
    var A = new Array(length);
    while (length--) A[length] = arguments[length];
    return new this(A);
  } });
};


/***/ }),
/* 288 */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-set.of
__webpack_require__(287)('Set');


/***/ }),
/* 289 */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-weakmap.of
__webpack_require__(287)('WeakMap');


/***/ }),
/* 290 */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-weakset.of
__webpack_require__(287)('WeakSet');


/***/ }),
/* 291 */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-map.from
__webpack_require__(292)('Map');


/***/ }),
/* 292 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://tc39.github.io/proposal-setmap-offrom/
var $export = __webpack_require__(9);
var aFunction = __webpack_require__(25);
var ctx = __webpack_require__(24);
var forOf = __webpack_require__(214);

module.exports = function (COLLECTION) {
  $export($export.S, COLLECTION, { from: function from(source /* , mapFn, thisArg */) {
    var mapFn = arguments[1];
    var mapping, A, n, cb;
    aFunction(this);
    mapping = mapFn !== undefined;
    if (mapping) aFunction(mapFn);
    if (source == undefined) return new this();
    A = [];
    if (mapping) {
      n = 0;
      cb = ctx(mapFn, arguments[2], 2);
      forOf(source, false, function (nextItem) {
        A.push(cb(nextItem, n++));
      });
    } else {
      forOf(source, false, A.push, A);
    }
    return new this(A);
  } });
};


/***/ }),
/* 293 */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-set.from
__webpack_require__(292)('Set');


/***/ }),
/* 294 */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-weakmap.from
__webpack_require__(292)('WeakMap');


/***/ }),
/* 295 */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-weakset.from
__webpack_require__(292)('WeakSet');


/***/ }),
/* 296 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-global
var $export = __webpack_require__(9);

$export($export.G, { global: __webpack_require__(5) });


/***/ }),
/* 297 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-global
var $export = __webpack_require__(9);

$export($export.S, 'System', { global: __webpack_require__(5) });


/***/ }),
/* 298 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/ljharb/proposal-is-error
var $export = __webpack_require__(9);
var cof = __webpack_require__(36);

$export($export.S, 'Error', {
  isError: function isError(it) {
    return cof(it) === 'Error';
  }
});


/***/ }),
/* 299 */
/***/ (function(module, exports, __webpack_require__) {

// https://rwaldron.github.io/proposal-math-extensions/
var $export = __webpack_require__(9);

$export($export.S, 'Math', {
  clamp: function clamp(x, lower, upper) {
    return Math.min(upper, Math.max(lower, x));
  }
});


/***/ }),
/* 300 */
/***/ (function(module, exports, __webpack_require__) {

// https://rwaldron.github.io/proposal-math-extensions/
var $export = __webpack_require__(9);

$export($export.S, 'Math', { DEG_PER_RAD: Math.PI / 180 });


/***/ }),
/* 301 */
/***/ (function(module, exports, __webpack_require__) {

// https://rwaldron.github.io/proposal-math-extensions/
var $export = __webpack_require__(9);
var RAD_PER_DEG = 180 / Math.PI;

$export($export.S, 'Math', {
  degrees: function degrees(radians) {
    return radians * RAD_PER_DEG;
  }
});


/***/ }),
/* 302 */
/***/ (function(module, exports, __webpack_require__) {

// https://rwaldron.github.io/proposal-math-extensions/
var $export = __webpack_require__(9);
var scale = __webpack_require__(303);
var fround = __webpack_require__(115);

$export($export.S, 'Math', {
  fscale: function fscale(x, inLow, inHigh, outLow, outHigh) {
    return fround(scale(x, inLow, inHigh, outLow, outHigh));
  }
});


/***/ }),
/* 303 */
/***/ (function(module, exports) {

// https://rwaldron.github.io/proposal-math-extensions/
module.exports = Math.scale || function scale(x, inLow, inHigh, outLow, outHigh) {
  if (
    arguments.length === 0
      // eslint-disable-next-line no-self-compare
      || x != x
      // eslint-disable-next-line no-self-compare
      || inLow != inLow
      // eslint-disable-next-line no-self-compare
      || inHigh != inHigh
      // eslint-disable-next-line no-self-compare
      || outLow != outLow
      // eslint-disable-next-line no-self-compare
      || outHigh != outHigh
  ) return NaN;
  if (x === Infinity || x === -Infinity) return x;
  return (x - inLow) * (outHigh - outLow) / (inHigh - inLow) + outLow;
};


/***/ }),
/* 304 */
/***/ (function(module, exports, __webpack_require__) {

// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
var $export = __webpack_require__(9);

$export($export.S, 'Math', {
  iaddh: function iaddh(x0, x1, y0, y1) {
    var $x0 = x0 >>> 0;
    var $x1 = x1 >>> 0;
    var $y0 = y0 >>> 0;
    return $x1 + (y1 >>> 0) + (($x0 & $y0 | ($x0 | $y0) & ~($x0 + $y0 >>> 0)) >>> 31) | 0;
  }
});


/***/ }),
/* 305 */
/***/ (function(module, exports, __webpack_require__) {

// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
var $export = __webpack_require__(9);

$export($export.S, 'Math', {
  isubh: function isubh(x0, x1, y0, y1) {
    var $x0 = x0 >>> 0;
    var $x1 = x1 >>> 0;
    var $y0 = y0 >>> 0;
    return $x1 - (y1 >>> 0) - ((~$x0 & $y0 | ~($x0 ^ $y0) & $x0 - $y0 >>> 0) >>> 31) | 0;
  }
});


/***/ }),
/* 306 */
/***/ (function(module, exports, __webpack_require__) {

// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
var $export = __webpack_require__(9);

$export($export.S, 'Math', {
  imulh: function imulh(u, v) {
    var UINT16 = 0xffff;
    var $u = +u;
    var $v = +v;
    var u0 = $u & UINT16;
    var v0 = $v & UINT16;
    var u1 = $u >> 16;
    var v1 = $v >> 16;
    var t = (u1 * v0 >>> 0) + (u0 * v0 >>> 16);
    return u1 * v1 + (t >> 16) + ((u0 * v1 >>> 0) + (t & UINT16) >> 16);
  }
});


/***/ }),
/* 307 */
/***/ (function(module, exports, __webpack_require__) {

// https://rwaldron.github.io/proposal-math-extensions/
var $export = __webpack_require__(9);

$export($export.S, 'Math', { RAD_PER_DEG: 180 / Math.PI });


/***/ }),
/* 308 */
/***/ (function(module, exports, __webpack_require__) {

// https://rwaldron.github.io/proposal-math-extensions/
var $export = __webpack_require__(9);
var DEG_PER_RAD = Math.PI / 180;

$export($export.S, 'Math', {
  radians: function radians(degrees) {
    return degrees * DEG_PER_RAD;
  }
});


/***/ }),
/* 309 */
/***/ (function(module, exports, __webpack_require__) {

// https://rwaldron.github.io/proposal-math-extensions/
var $export = __webpack_require__(9);

$export($export.S, 'Math', { scale: __webpack_require__(303) });


/***/ }),
/* 310 */
/***/ (function(module, exports, __webpack_require__) {

// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
var $export = __webpack_require__(9);

$export($export.S, 'Math', {
  umulh: function umulh(u, v) {
    var UINT16 = 0xffff;
    var $u = +u;
    var $v = +v;
    var u0 = $u & UINT16;
    var v0 = $v & UINT16;
    var u1 = $u >>> 16;
    var v1 = $v >>> 16;
    var t = (u1 * v0 >>> 0) + (u0 * v0 >>> 16);
    return u1 * v1 + (t >>> 16) + ((u0 * v1 >>> 0) + (t & UINT16) >>> 16);
  }
});


/***/ }),
/* 311 */
/***/ (function(module, exports, __webpack_require__) {

// http://jfbastien.github.io/papers/Math.signbit.html
var $export = __webpack_require__(9);

$export($export.S, 'Math', { signbit: function signbit(x) {
  // eslint-disable-next-line no-self-compare
  return (x = +x) != x ? x : x == 0 ? 1 / x == Infinity : x > 0;
} });


/***/ }),
/* 312 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://github.com/tc39/proposal-promise-finally

var $export = __webpack_require__(9);
var core = __webpack_require__(10);
var global = __webpack_require__(5);
var speciesConstructor = __webpack_require__(211);
var promiseResolve = __webpack_require__(220);

$export($export.P + $export.R, 'Promise', { 'finally': function (onFinally) {
  var C = speciesConstructor(this, core.Promise || global.Promise);
  var isFunction = typeof onFinally == 'function';
  return this.then(
    isFunction ? function (x) {
      return promiseResolve(C, onFinally()).then(function () { return x; });
    } : onFinally,
    isFunction ? function (e) {
      return promiseResolve(C, onFinally()).then(function () { throw e; });
    } : onFinally
  );
} });


/***/ }),
/* 313 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/proposal-promise-try
var $export = __webpack_require__(9);
var newPromiseCapability = __webpack_require__(217);
var perform = __webpack_require__(218);

$export($export.S, 'Promise', { 'try': function (callbackfn) {
  var promiseCapability = newPromiseCapability.f(this);
  var result = perform(callbackfn);
  (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
  return promiseCapability.promise;
} });


/***/ }),
/* 314 */
/***/ (function(module, exports, __webpack_require__) {

var metadata = __webpack_require__(315);
var anObject = __webpack_require__(13);
var toMetaKey = metadata.key;
var ordinaryDefineOwnMetadata = metadata.set;

metadata.exp({ defineMetadata: function defineMetadata(metadataKey, metadataValue, target, targetKey) {
  ordinaryDefineOwnMetadata(metadataKey, metadataValue, anObject(target), toMetaKey(targetKey));
} });


/***/ }),
/* 315 */
/***/ (function(module, exports, __webpack_require__) {

var Map = __webpack_require__(222);
var $export = __webpack_require__(9);
var shared = __webpack_require__(22)('metadata');
var store = shared.store || (shared.store = new (__webpack_require__(227))());

var getOrCreateMetadataMap = function (target, targetKey, create) {
  var targetMetadata = store.get(target);
  if (!targetMetadata) {
    if (!create) return undefined;
    store.set(target, targetMetadata = new Map());
  }
  var keyMetadata = targetMetadata.get(targetKey);
  if (!keyMetadata) {
    if (!create) return undefined;
    targetMetadata.set(targetKey, keyMetadata = new Map());
  } return keyMetadata;
};
var ordinaryHasOwnMetadata = function (MetadataKey, O, P) {
  var metadataMap = getOrCreateMetadataMap(O, P, false);
  return metadataMap === undefined ? false : metadataMap.has(MetadataKey);
};
var ordinaryGetOwnMetadata = function (MetadataKey, O, P) {
  var metadataMap = getOrCreateMetadataMap(O, P, false);
  return metadataMap === undefined ? undefined : metadataMap.get(MetadataKey);
};
var ordinaryDefineOwnMetadata = function (MetadataKey, MetadataValue, O, P) {
  getOrCreateMetadataMap(O, P, true).set(MetadataKey, MetadataValue);
};
var ordinaryOwnMetadataKeys = function (target, targetKey) {
  var metadataMap = getOrCreateMetadataMap(target, targetKey, false);
  var keys = [];
  if (metadataMap) metadataMap.forEach(function (_, key) { keys.push(key); });
  return keys;
};
var toMetaKey = function (it) {
  return it === undefined || typeof it == 'symbol' ? it : String(it);
};
var exp = function (O) {
  $export($export.S, 'Reflect', O);
};

module.exports = {
  store: store,
  map: getOrCreateMetadataMap,
  has: ordinaryHasOwnMetadata,
  get: ordinaryGetOwnMetadata,
  set: ordinaryDefineOwnMetadata,
  keys: ordinaryOwnMetadataKeys,
  key: toMetaKey,
  exp: exp
};


/***/ }),
/* 316 */
/***/ (function(module, exports, __webpack_require__) {

var metadata = __webpack_require__(315);
var anObject = __webpack_require__(13);
var toMetaKey = metadata.key;
var getOrCreateMetadataMap = metadata.map;
var store = metadata.store;

metadata.exp({ deleteMetadata: function deleteMetadata(metadataKey, target /* , targetKey */) {
  var targetKey = arguments.length < 3 ? undefined : toMetaKey(arguments[2]);
  var metadataMap = getOrCreateMetadataMap(anObject(target), targetKey, false);
  if (metadataMap === undefined || !metadataMap['delete'](metadataKey)) return false;
  if (metadataMap.size) return true;
  var targetMetadata = store.get(target);
  targetMetadata['delete'](targetKey);
  return !!targetMetadata.size || store['delete'](target);
} });


/***/ }),
/* 317 */
/***/ (function(module, exports, __webpack_require__) {

var metadata = __webpack_require__(315);
var anObject = __webpack_require__(13);
var getPrototypeOf = __webpack_require__(60);
var ordinaryHasOwnMetadata = metadata.has;
var ordinaryGetOwnMetadata = metadata.get;
var toMetaKey = metadata.key;

var ordinaryGetMetadata = function (MetadataKey, O, P) {
  var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);
  if (hasOwn) return ordinaryGetOwnMetadata(MetadataKey, O, P);
  var parent = getPrototypeOf(O);
  return parent !== null ? ordinaryGetMetadata(MetadataKey, parent, P) : undefined;
};

metadata.exp({ getMetadata: function getMetadata(metadataKey, target /* , targetKey */) {
  return ordinaryGetMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
} });


/***/ }),
/* 318 */
/***/ (function(module, exports, __webpack_require__) {

var Set = __webpack_require__(226);
var from = __webpack_require__(284);
var metadata = __webpack_require__(315);
var anObject = __webpack_require__(13);
var getPrototypeOf = __webpack_require__(60);
var ordinaryOwnMetadataKeys = metadata.keys;
var toMetaKey = metadata.key;

var ordinaryMetadataKeys = function (O, P) {
  var oKeys = ordinaryOwnMetadataKeys(O, P);
  var parent = getPrototypeOf(O);
  if (parent === null) return oKeys;
  var pKeys = ordinaryMetadataKeys(parent, P);
  return pKeys.length ? oKeys.length ? from(new Set(oKeys.concat(pKeys))) : pKeys : oKeys;
};

metadata.exp({ getMetadataKeys: function getMetadataKeys(target /* , targetKey */) {
  return ordinaryMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));
} });


/***/ }),
/* 319 */
/***/ (function(module, exports, __webpack_require__) {

var metadata = __webpack_require__(315);
var anObject = __webpack_require__(13);
var ordinaryGetOwnMetadata = metadata.get;
var toMetaKey = metadata.key;

metadata.exp({ getOwnMetadata: function getOwnMetadata(metadataKey, target /* , targetKey */) {
  return ordinaryGetOwnMetadata(metadataKey, anObject(target)
    , arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
} });


/***/ }),
/* 320 */
/***/ (function(module, exports, __webpack_require__) {

var metadata = __webpack_require__(315);
var anObject = __webpack_require__(13);
var ordinaryOwnMetadataKeys = metadata.keys;
var toMetaKey = metadata.key;

metadata.exp({ getOwnMetadataKeys: function getOwnMetadataKeys(target /* , targetKey */) {
  return ordinaryOwnMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));
} });


/***/ }),
/* 321 */
/***/ (function(module, exports, __webpack_require__) {

var metadata = __webpack_require__(315);
var anObject = __webpack_require__(13);
var getPrototypeOf = __webpack_require__(60);
var ordinaryHasOwnMetadata = metadata.has;
var toMetaKey = metadata.key;

var ordinaryHasMetadata = function (MetadataKey, O, P) {
  var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);
  if (hasOwn) return true;
  var parent = getPrototypeOf(O);
  return parent !== null ? ordinaryHasMetadata(MetadataKey, parent, P) : false;
};

metadata.exp({ hasMetadata: function hasMetadata(metadataKey, target /* , targetKey */) {
  return ordinaryHasMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
} });


/***/ }),
/* 322 */
/***/ (function(module, exports, __webpack_require__) {

var metadata = __webpack_require__(315);
var anObject = __webpack_require__(13);
var ordinaryHasOwnMetadata = metadata.has;
var toMetaKey = metadata.key;

metadata.exp({ hasOwnMetadata: function hasOwnMetadata(metadataKey, target /* , targetKey */) {
  return ordinaryHasOwnMetadata(metadataKey, anObject(target)
    , arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
} });


/***/ }),
/* 323 */
/***/ (function(module, exports, __webpack_require__) {

var $metadata = __webpack_require__(315);
var anObject = __webpack_require__(13);
var aFunction = __webpack_require__(25);
var toMetaKey = $metadata.key;
var ordinaryDefineOwnMetadata = $metadata.set;

$metadata.exp({ metadata: function metadata(metadataKey, metadataValue) {
  return function decorator(target, targetKey) {
    ordinaryDefineOwnMetadata(
      metadataKey, metadataValue,
      (targetKey !== undefined ? anObject : aFunction)(target),
      toMetaKey(targetKey)
    );
  };
} });


/***/ }),
/* 324 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/rwaldron/tc39-notes/blob/master/es6/2014-09/sept-25.md#510-globalasap-for-enqueuing-a-microtask
var $export = __webpack_require__(9);
var microtask = __webpack_require__(216)();
var process = __webpack_require__(5).process;
var isNode = __webpack_require__(36)(process) == 'process';

$export($export.G, {
  asap: function asap(fn) {
    var domain = isNode && process.domain;
    microtask(domain ? domain.bind(fn) : fn);
  }
});


/***/ }),
/* 325 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/zenparsing/es-observable
var $export = __webpack_require__(9);
var global = __webpack_require__(5);
var core = __webpack_require__(10);
var microtask = __webpack_require__(216)();
var OBSERVABLE = __webpack_require__(28)('observable');
var aFunction = __webpack_require__(25);
var anObject = __webpack_require__(13);
var anInstance = __webpack_require__(213);
var redefineAll = __webpack_require__(221);
var hide = __webpack_require__(11);
var forOf = __webpack_require__(214);
var RETURN = forOf.RETURN;

var getMethod = function (fn) {
  return fn == null ? undefined : aFunction(fn);
};

var cleanupSubscription = function (subscription) {
  var cleanup = subscription._c;
  if (cleanup) {
    subscription._c = undefined;
    cleanup();
  }
};

var subscriptionClosed = function (subscription) {
  return subscription._o === undefined;
};

var closeSubscription = function (subscription) {
  if (!subscriptionClosed(subscription)) {
    subscription._o = undefined;
    cleanupSubscription(subscription);
  }
};

var Subscription = function (observer, subscriber) {
  anObject(observer);
  this._c = undefined;
  this._o = observer;
  observer = new SubscriptionObserver(this);
  try {
    var cleanup = subscriber(observer);
    var subscription = cleanup;
    if (cleanup != null) {
      if (typeof cleanup.unsubscribe === 'function') cleanup = function () { subscription.unsubscribe(); };
      else aFunction(cleanup);
      this._c = cleanup;
    }
  } catch (e) {
    observer.error(e);
    return;
  } if (subscriptionClosed(this)) cleanupSubscription(this);
};

Subscription.prototype = redefineAll({}, {
  unsubscribe: function unsubscribe() { closeSubscription(this); }
});

var SubscriptionObserver = function (subscription) {
  this._s = subscription;
};

SubscriptionObserver.prototype = redefineAll({}, {
  next: function next(value) {
    var subscription = this._s;
    if (!subscriptionClosed(subscription)) {
      var observer = subscription._o;
      try {
        var m = getMethod(observer.next);
        if (m) return m.call(observer, value);
      } catch (e) {
        try {
          closeSubscription(subscription);
        } finally {
          throw e;
        }
      }
    }
  },
  error: function error(value) {
    var subscription = this._s;
    if (subscriptionClosed(subscription)) throw value;
    var observer = subscription._o;
    subscription._o = undefined;
    try {
      var m = getMethod(observer.error);
      if (!m) throw value;
      value = m.call(observer, value);
    } catch (e) {
      try {
        cleanupSubscription(subscription);
      } finally {
        throw e;
      }
    } cleanupSubscription(subscription);
    return value;
  },
  complete: function complete(value) {
    var subscription = this._s;
    if (!subscriptionClosed(subscription)) {
      var observer = subscription._o;
      subscription._o = undefined;
      try {
        var m = getMethod(observer.complete);
        value = m ? m.call(observer, value) : undefined;
      } catch (e) {
        try {
          cleanupSubscription(subscription);
        } finally {
          throw e;
        }
      } cleanupSubscription(subscription);
      return value;
    }
  }
});

var $Observable = function Observable(subscriber) {
  anInstance(this, $Observable, 'Observable', '_f')._f = aFunction(subscriber);
};

redefineAll($Observable.prototype, {
  subscribe: function subscribe(observer) {
    return new Subscription(observer, this._f);
  },
  forEach: function forEach(fn) {
    var that = this;
    return new (core.Promise || global.Promise)(function (resolve, reject) {
      aFunction(fn);
      var subscription = that.subscribe({
        next: function (value) {
          try {
            return fn(value);
          } catch (e) {
            reject(e);
            subscription.unsubscribe();
          }
        },
        error: reject,
        complete: resolve
      });
    });
  }
});

redefineAll($Observable, {
  from: function from(x) {
    var C = typeof this === 'function' ? this : $Observable;
    var method = getMethod(anObject(x)[OBSERVABLE]);
    if (method) {
      var observable = anObject(method.call(x));
      return observable.constructor === C ? observable : new C(function (observer) {
        return observable.subscribe(observer);
      });
    }
    return new C(function (observer) {
      var done = false;
      microtask(function () {
        if (!done) {
          try {
            if (forOf(x, false, function (it) {
              observer.next(it);
              if (done) return RETURN;
            }) === RETURN) return;
          } catch (e) {
            if (done) throw e;
            observer.error(e);
            return;
          } observer.complete();
        }
      });
      return function () { done = true; };
    });
  },
  of: function of() {
    for (var i = 0, l = arguments.length, items = new Array(l); i < l;) items[i] = arguments[i++];
    return new (typeof this === 'function' ? this : $Observable)(function (observer) {
      var done = false;
      microtask(function () {
        if (!done) {
          for (var j = 0; j < items.length; ++j) {
            observer.next(items[j]);
            if (done) return;
          } observer.complete();
        }
      });
      return function () { done = true; };
    });
  }
});

hide($Observable.prototype, OBSERVABLE, function () { return this; });

$export($export.G, { Observable: $Observable });

__webpack_require__(195)('Observable');


/***/ }),
/* 326 */
/***/ (function(module, exports, __webpack_require__) {

// ie9- setTimeout & setInterval additional parameters fix
var global = __webpack_require__(5);
var $export = __webpack_require__(9);
var userAgent = __webpack_require__(219);
var slice = [].slice;
var MSIE = /MSIE .\./.test(userAgent); // <- dirty ie9- check
var wrap = function (set) {
  return function (fn, time /* , ...args */) {
    var boundArgs = arguments.length > 2;
    var args = boundArgs ? slice.call(arguments, 2) : false;
    return set(boundArgs ? function () {
      // eslint-disable-next-line no-new-func
      (typeof fn == 'function' ? fn : Function(fn)).apply(this, args);
    } : fn, time);
  };
};
$export($export.G + $export.B + $export.F * MSIE, {
  setTimeout: wrap(global.setTimeout),
  setInterval: wrap(global.setInterval)
});


/***/ }),
/* 327 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(9);
var $task = __webpack_require__(215);
$export($export.G + $export.B, {
  setImmediate: $task.set,
  clearImmediate: $task.clear
});


/***/ }),
/* 328 */
/***/ (function(module, exports, __webpack_require__) {

var $iterators = __webpack_require__(196);
var getKeys = __webpack_require__(32);
var redefine = __webpack_require__(19);
var global = __webpack_require__(5);
var hide = __webpack_require__(11);
var Iterators = __webpack_require__(131);
var wks = __webpack_require__(28);
var ITERATOR = wks('iterator');
var TO_STRING_TAG = wks('toStringTag');
var ArrayValues = Iterators.Array;

var DOMIterables = {
  CSSRuleList: true, // TODO: Not spec compliant, should be false.
  CSSStyleDeclaration: false,
  CSSValueList: false,
  ClientRectList: false,
  DOMRectList: false,
  DOMStringList: false,
  DOMTokenList: true,
  DataTransferItemList: false,
  FileList: false,
  HTMLAllCollection: false,
  HTMLCollection: false,
  HTMLFormElement: false,
  HTMLSelectElement: false,
  MediaList: true, // TODO: Not spec compliant, should be false.
  MimeTypeArray: false,
  NamedNodeMap: false,
  NodeList: true,
  PaintRequestList: false,
  Plugin: false,
  PluginArray: false,
  SVGLengthList: false,
  SVGNumberList: false,
  SVGPathSegList: false,
  SVGPointList: false,
  SVGStringList: false,
  SVGTransformList: false,
  SourceBufferList: false,
  StyleSheetList: true, // TODO: Not spec compliant, should be false.
  TextTrackCueList: false,
  TextTrackList: false,
  TouchList: false
};

for (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {
  var NAME = collections[i];
  var explicit = DOMIterables[NAME];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  var key;
  if (proto) {
    if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
    if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
    Iterators[NAME] = ArrayValues;
    if (explicit) for (key in $iterators) if (!proto[key]) redefine(proto, key, $iterators[key], true);
  }
}


/***/ }),
/* 329 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * Copyright (c) 2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
 * additional grant of patent rights can be found in the PATENTS file in
 * the same directory.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration. If the Promise is rejected, however, the
          // result for this iteration will be rejected with the same
          // reason. Note that rejections of yielded Promises are not
          // thrown back into the generator function, as is the case
          // when an awaited Promise is rejected. This difference in
          // behavior between yield and await is important, because it
          // allows the consumer to decide what to do with the yielded
          // rejection (swallow it and continue, manually .throw it back
          // into the generator, abandon iteration, whatever). With
          // await, by contrast, there is no opportunity to examine the
          // rejection reason outside the generator function, so the
          // only option is to throw it from the await expression, and
          // let the generator function handle the exception.
          result.value = unwrapped;
          resolve(result);
        }, reject);
      }
    }

    if (typeof global.process === "object" && global.process.domain) {
      invoke = global.process.domain.bind(invoke);
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // Among the various tricks for obtaining a reference to the global
  // object, this seems to be the most reliable technique that does not
  // use indirect eval (which violates Content Security Policy).
  typeof global === "object" ? global :
  typeof window === "object" ? window :
  typeof self === "object" ? self : this
);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(2)))

/***/ }),
/* 330 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(331);
module.exports = __webpack_require__(10).RegExp.escape;


/***/ }),
/* 331 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/benjamingr/RexExp.escape
var $export = __webpack_require__(9);
var $re = __webpack_require__(332)(/[\\^$*+?.()|[\]{}]/g, '\\$&');

$export($export.S, 'RegExp', { escape: function escape(it) { return $re(it); } });


/***/ }),
/* 332 */
/***/ (function(module, exports) {

module.exports = function (regExp, replace) {
  var replacer = replace === Object(replace) ? function (part) {
    return replace[part];
  } : replace;
  return function (it) {
    return String(it).replace(regExp, replacer);
  };
};


/***/ }),
/* 333 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _opentokNetworkTestJs = __webpack_require__(334);

var _opentokNetworkTestJs2 = _interopRequireDefault(_opentokNetworkTestJs);

var _chart = __webpack_require__(336);

var _chart2 = _interopRequireDefault(_chart);

var _connectivityUi = __webpack_require__(338);

var ConnectivityUI = _interopRequireWildcard(_connectivityUi);

var _opentokHardwareSetup = __webpack_require__(339);

var HardwareSetup = _interopRequireWildcard(_opentokHardwareSetup);

var _recorder = __webpack_require__(340);

var Recorder = _interopRequireWildcard(_recorder);

var _config = __webpack_require__(341);

var _config2 = _interopRequireDefault(_config);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sessionInfo = _config2.default;
var otNetworkTest = void 0;
var audioOnly = void 0;

var precallDiv = document.getElementById('precall');
precallDiv.querySelector('#precall button').addEventListener('click', function () {
  $(".results-container").removeClass('d-none').addClass('d-flex');
  $(".start-test-container").addClass('d-none').removeClass('d-flex');
  startTest();
});

function startTest() {
  audioOnly = precallDiv.querySelector('#precall input#audio').checked;
  var timeout = 5 * 1000;
  var options = {
    audioOnly: audioOnly,
    timeout: timeout
  };
  otNetworkTest = new _opentokNetworkTestJs2.default(OT, sessionInfo, options);
  otNetworkTest.testConnectivity().then(function (results) {
    return ConnectivityUI.displayTestConnectivityResults(results);
  }).then(testQuality);
}

function testQuality() {
  (0, _chart2.default)('audio');
  (0, _chart2.default)('video');
  ConnectivityUI.init(audioOnly);
  document.getElementById('stop_test').addEventListener('click', function stopTestListener() {
    ConnectivityUI.hideStopButton();
    otNetworkTest.stop();
  });
  otNetworkTest.testQuality(function updateCallback(stats) {
    ConnectivityUI.checkToDisplayStopButton();
    ConnectivityUI.graphIntermediateStats('audio', stats);
    ConnectivityUI.graphIntermediateStats('video', stats);
  }).then(function (results) {
    ConnectivityUI.displayResults();

    ConnectivityUI.displayTestQualityResults(null, results);
    var element = document.querySelector('#hardware-setup');

    var component = HardwareSetup.createOpentokHardwareSetupComponent(element, {
      insertMode: 'append'
    }, function (error) {
      if (error) {
        console.error('Error: ', error);
        document.querySelector('#hardware-setup').innerHTML = '<strong>Error getting ' + 'devices</strong>: ' + error.message;
        return;
      }
      document.getElementById("action").addEventListener("click", function () {
        Recorder.handleAction();
        document.getElementById("action").innerHTML("Recording...");
      });
    });
  }).catch(function (error) {
    ConnectivityUI.displayResults();

    ConnectivityUI.displayTestQualityResults(error);
  });
}

/***/ }),
/* 334 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

!function (e, t) {
  "object" == ( false ? undefined : _typeof(exports)) && "object" == ( false ? undefined : _typeof(module)) ? module.exports = t() :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
}(window, function () {
  return function (e) {
    var t = {};function r(n) {
      if (t[n]) return t[n].exports;var o = t[n] = { i: n, l: !1, exports: {} };return e[n].call(o.exports, o, o.exports, r), o.l = !0, o.exports;
    }return r.m = e, r.c = t, r.d = function (e, t, n) {
      r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }, r.r = function (e) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });
    }, r.t = function (e, t) {
      if (1 & t && (e = r(e)), 8 & t) return e;if (4 & t && "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && e && e.__esModule) return e;var n = Object.create(null);if (r.r(n), Object.defineProperty(n, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e) for (var o in e) {
        r.d(n, o, function (t) {
          return e[t];
        }.bind(null, o));
      }return n;
    }, r.n = function (e) {
      var t = e && e.__esModule ? function () {
        return e.default;
      } : function () {
        return e;
      };return r.d(t, "a", t), t;
    }, r.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }, r.p = "", r(r.s = 20);
  }([function (e, t, r) {
    "use strict";
    var n = r(7),
        o = Object.prototype.toString;function i(e) {
      return "[object Array]" === o.call(e);
    }function s(e) {
      return void 0 === e;
    }function a(e) {
      return null !== e && "object" == (typeof e === "undefined" ? "undefined" : _typeof(e));
    }function u(e) {
      return "[object Function]" === o.call(e);
    }function c(e, t) {
      if (null != e) if ("object" != (typeof e === "undefined" ? "undefined" : _typeof(e)) && (e = [e]), i(e)) for (var r = 0, n = e.length; r < n; r++) {
        t.call(null, e[r], r, e);
      } else for (var o in e) {
        Object.prototype.hasOwnProperty.call(e, o) && t.call(null, e[o], o, e);
      }
    }e.exports = { isArray: i, isArrayBuffer: function isArrayBuffer(e) {
        return "[object ArrayBuffer]" === o.call(e);
      }, isBuffer: function isBuffer(e) {
        return null !== e && !s(e) && null !== e.constructor && !s(e.constructor) && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e);
      }, isFormData: function isFormData(e) {
        return "undefined" != typeof FormData && e instanceof FormData;
      }, isArrayBufferView: function isArrayBufferView(e) {
        return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && e.buffer instanceof ArrayBuffer;
      }, isString: function isString(e) {
        return "string" == typeof e;
      }, isNumber: function isNumber(e) {
        return "number" == typeof e;
      }, isObject: a, isUndefined: s, isDate: function isDate(e) {
        return "[object Date]" === o.call(e);
      }, isFile: function isFile(e) {
        return "[object File]" === o.call(e);
      }, isBlob: function isBlob(e) {
        return "[object Blob]" === o.call(e);
      }, isFunction: u, isStream: function isStream(e) {
        return a(e) && u(e.pipe);
      }, isURLSearchParams: function isURLSearchParams(e) {
        return "undefined" != typeof URLSearchParams && e instanceof URLSearchParams;
      }, isStandardBrowserEnv: function isStandardBrowserEnv() {
        return ("undefined" == typeof navigator || "ReactNative" !== navigator.product && "NativeScript" !== navigator.product && "NS" !== navigator.product) && "undefined" != typeof window && "undefined" != typeof document;
      }, forEach: c, merge: function e() {
        var t = {};function r(r, n) {
          "object" == _typeof(t[n]) && "object" == (typeof r === "undefined" ? "undefined" : _typeof(r)) ? t[n] = e(t[n], r) : t[n] = r;
        }for (var n = 0, o = arguments.length; n < o; n++) {
          c(arguments[n], r);
        }return t;
      }, deepMerge: function e() {
        var t = {};function r(r, n) {
          "object" == _typeof(t[n]) && "object" == (typeof r === "undefined" ? "undefined" : _typeof(r)) ? t[n] = e(t[n], r) : t[n] = "object" == (typeof r === "undefined" ? "undefined" : _typeof(r)) ? e({}, r) : r;
        }for (var n = 0, o = arguments.length; n < o; n++) {
          c(arguments[n], r);
        }return t;
      }, extend: function extend(e, t, r) {
        return c(t, function (t, o) {
          e[o] = r && "function" == typeof t ? n(t, r) : t;
        }), e;
      }, trim: function trim(e) {
        return e.replace(/^\s*/, "").replace(/\s*$/, "");
      } };
  }, function (e, t, r) {
    "use strict";
    var n = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
      return typeof e === "undefined" ? "undefined" : _typeof(e);
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e === "undefined" ? "undefined" : _typeof(e);
    };function o(e, t, r) {
      return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
    }Object.defineProperty(t, "__esModule", { value: !0 }), t.assoc = function (e, t, r) {
      return Object.assign({}, r, o({}, e, t));
    }, t.assocPath = function (e, r, i) {
      var s = e.split("."),
          a = s[0];if (!s.length) return i;if (1 === s.length) return t.assoc(a, r, i);var u = t.get(a, i),
          c = u && "object" === (void 0 === u ? "undefined" : n(u)) ? u : Object.assign({}, i, o({}, a, {})),
          f = t.assoc(a, t.assocPath(s.slice(1).join("."), r, t.get(a, c)), i);return Object.assign({}, i, f);
    }, t.get = function (e, r) {
      if (!r) return r;var n,
          o = e.split("."),
          i = (n = o, Array.isArray(n) ? n : Array.from(n)),
          s = i[0],
          a = i.slice(1),
          u = r[s];return null == u ? u : a.length ? t.get(a.join("."), u) : u;
    }, t.getOr = function (e, r, n) {
      return t.get(r, n) || e;
    }, t.pick = function (e, t) {
      var r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          n = function n(e, _n) {
        return void 0 !== t[_n] || r ? Object.assign({}, e, o({}, _n, t[_n])) : e;
      };return e.reduce(n, {});
    }, t.pickAll = function (e, r) {
      return t.pick(e, r, !0);
    }, t.last = function (e) {
      return e[e.length - 1];
    }, t.nth = function (e, t) {
      return e < 0 ? t[t.length + e] : t[e];
    }, t.head = function (e) {
      return t.nth(0, e);
    };
  }, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var n = r(1);!function (e) {
      e.NETWORK_TEST_ERROR = "NetworkTestError", e.MISSING_OPENTOK_INSTANCE = "MissingOpenTokInstanceError", e.INCOMPLETE_SESSON_CREDENTIALS = "IncompleteSessionCredentialsError", e.MISSING_SESSON_CREDENTIALS = "MissingSessionCredentialsError", e.INVALID_ON_UPDATE_CALLBACK = "InvalidOnUpdateCallback", e.CONNECTIVITY_ERROR = "ConnectivityError", e.API_CONNECTIVITY_ERROR = "APIConnectivityError", e.CONNECT_TO_SESSION_ERROR = "ConnectToSessionError", e.CONNECT_TO_SESSION_TOKEN_ERROR = "ConnectToSessionTokenError", e.CONNECT_TO_SESSION_ID_ERROR = "ConnectToSessionSessionIdError", e.CONNECT_TO_SESSION_NETWORK_ERROR = "ConnectToSessionNetworkError", e.MEDIA_DEVICE_ERROR = "MediaDeviceError", e.FAILED_TO_OBTAIN_MEDIA_DEVICES = "FailedToObtainMediaDevices", e.NO_VIDEO_CAPTURE_DEVICES = "NoVideoCaptureDevicesError", e.NO_AUDIO_CAPTURE_DEVICES = "NoAudioCaptureDevicesError", e.PUBLISH_TO_SESSION_ERROR = "PublishToSessionError", e.INIT_PUBLISHER_ERROR = "InitPublisherError", e.FAILED_MESSAGING_SERVER_TEST = "FailedMessagingServerTestError", e.FAILED_TO_CREATE_LOCAL_PUBLISHER = "FailedToCreateLocalPublisher", e.PUBLISH_TO_SESSION_NOT_CONNECTED = "PublishToSessionNotConnectedError", e.PUBLISH_TO_SESSION_PERMISSION_OR_TIMEOUT_ERROR = "PublishToSessionPermissionOrTimeoutError", e.PUBLISH_TO_SESSION_NETWORK_ERROR = "PublishToSessionNetworkError", e.SUBSCRIBE_TO_SESSION_ERROR = "SubscribeToSessionError", e.LOGGING_SERVER_CONNECTION_ERROR = "LoggingServerConnectionError", e.QUALITY_TEST_ERROR = "QualityTestError", e.UNSUPPORTED_BROWSER = "UnsupportedBrowser", e.SUBSCRIBER_GET_STATS_ERROR = "SubscriberGetStatsError", e.MISSING_SUBSCRIBER_ERROR = "MissingSubscriberError";
    }(t.ErrorNames || (t.ErrorNames = {})), function (e) {
      e.JS_EXCEPTION = "JS_EXCEPTION", e.OT_AUTHENTICATION_ERROR = "OT_AUTHENTICATION_ERROR", e.OT_INVALID_HTTP_STATUS = "OT_INVALID_HTTP_STATUS", e.OT_CONNECT_FAILED = "OT_CONNECT_FAILED", e.OT_INVALID_SESSION_ID = "OT_INVALID_SESSION_ID", e.CONNECT_FAILED = "CONNECT_FAILED", e.CONNECT_REJECTED = "CONNECT_REJECTED", e.CONNECTION_TIMEOUT = "CONNECTION_TIMEOUT", e.NOT_CONNECTED = "NOT_CONNECTED", e.INVALID_PARAMETER = "INVALID_PARAMETER", e.P2P_CONNECTION_FAILED = "P2P_CONNECTION_FAILED", e.API_RESPONSE_FAILURE = "API_RESPONSE_FAILURE", e.TERMS_OF_SERVICE_FAILURE = "TERMS_OF_SERVICE_FAILURE", e.CONNECTION_LIMIT_EXCEEDED = "CONNECTION_LIMIT_EXCEEDED", e.UNABLE_TO_PUBLISH = "UNABLE_TO_PUBLISH", e.UNABLE_TO_SUBSCRIBE = "UNABLE_TO_SUBSCRIBE", e.UNSUPPORTED_VIDEO_CODEC = "UNSUPPORTED_VIDEO_CODEC", e.UNABLE_TO_FORCE_DISCONNECT = "UNABLE_TO_FORCE_DISCONNECT", e.UNABLE_TO_FORCE_UNPUBLISH = "UNABLE_TO_FORCE_UNPUBLISH", e.PUBLISHER_ICE_WORKFLOW_FAILED = "PUBLISHER_ICE_WORKFLOW_FAILED", e.SUBSCRIBER_ICE_WORKFLOW_FAILED = "SUBSCRIBER_ICE_WORKFLOW_FAILED", e.STREAM_LIMIT_EXCEEDED = "STREAM_LIMIT_EXCEEDED", e.UNEXPECTED_SERVER_RESPONSE = "UNEXPECTED_SERVER_RESPONSE", e.REPORT_ISSUE_ERROR = "REPORT_ISSUE_ERROR", e.ANVIL_BADLY_FORMED_RESPONSE = "ANVIL_BADLY_FORMED_RESPONSE", e.ANVIL_INVALID_HTTP_STATUS = "ANVIL_INVALID_HTTP_STATUS", e.ANVIL_XDOMAIN_OR_PARSING_ERROR = "ANVIL_XDOMAIN_OR_PARSING_ERROR", e.ANVIL_UNKNOWN_HTTP_ERROR = "ANVIL_UNKNOWN_HTTP_ERROR", e.ANVIL_UNEXPECTED_ERROR_CODE = "ANVIL_UNEXPECTED_ERROR_CODE", e.ANVIL_EMPTY_RESPONSE_BODY = "ANVIL_EMPTY_RESPONSE_BODY", e.ANVIL_CONNECT_FAILED = "ANVIL_CONNECT_FAILED";
    }(t.OTErrorType || (t.OTErrorType = {})), t.errorHasName = function () {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          t = arguments[1];return n.get("name", e) === t;
    };
  }, function (e, t, r) {
    "use strict";
    var n = r(16);function o() {}var i = null,
        s = {};function a(e) {
      if ("object" != _typeof(this)) throw new TypeError("Promises must be constructed via new");if ("function" != typeof e) throw new TypeError("Promise constructor's argument is not a function");this._h = 0, this._i = 0, this._j = null, this._k = null, e !== o && p(e, this);
    }function u(e, t) {
      for (; 3 === e._i;) {
        e = e._j;
      }if (a._l && a._l(e), 0 === e._i) return 0 === e._h ? (e._h = 1, void (e._k = t)) : 1 === e._h ? (e._h = 2, void (e._k = [e._k, t])) : void e._k.push(t);!function (e, t) {
        n(function () {
          var r = 1 === e._i ? t.onFulfilled : t.onRejected;if (null !== r) {
            var n = function (e, t) {
              try {
                return e(t);
              } catch (e) {
                return i = e, s;
              }
            }(r, e._j);n === s ? f(t.promise, i) : c(t.promise, n);
          } else 1 === e._i ? c(t.promise, e._j) : f(t.promise, e._j);
        });
      }(e, t);
    }function c(e, t) {
      if (t === e) return f(e, new TypeError("A promise cannot be resolved with itself."));if (t && ("object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) || "function" == typeof t)) {
        var r = function (e) {
          try {
            return e.then;
          } catch (e) {
            return i = e, s;
          }
        }(t);if (r === s) return f(e, i);if (r === e.then && t instanceof a) return e._i = 3, e._j = t, void l(e);if ("function" == typeof r) return void p(r.bind(t), e);
      }e._i = 1, e._j = t, l(e);
    }function f(e, t) {
      e._i = 2, e._j = t, a._m && a._m(e, t), l(e);
    }function l(e) {
      if (1 === e._h && (u(e, e._k), e._k = null), 2 === e._h) {
        for (var t = 0; t < e._k.length; t++) {
          u(e, e._k[t]);
        }e._k = null;
      }
    }function d(e, t, r) {
      this.onFulfilled = "function" == typeof e ? e : null, this.onRejected = "function" == typeof t ? t : null, this.promise = r;
    }function p(e, t) {
      var r = !1,
          n = function (e, t, r) {
        try {
          e(t, r);
        } catch (e) {
          return i = e, s;
        }
      }(e, function (e) {
        r || (r = !0, c(t, e));
      }, function (e) {
        r || (r = !0, f(t, e));
      });r || n !== s || (r = !0, f(t, i));
    }e.exports = a, a._l = null, a._m = null, a._n = o, a.prototype.then = function (e, t) {
      if (this.constructor !== a) return function (e, t, r) {
        return new e.constructor(function (n, i) {
          var s = new a(o);s.then(n, i), u(e, new d(t, r, s));
        });
      }(this, e, t);var r = new a(o);return u(this, new d(e, t, r)), r;
    };
  }, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });t.default = { getStatsInterval: 1e3, getStatsVideoAndAudioTestDuration: 3e4, getStatsAudioOnlyDuration: 1e4, subscribeOptions: { testNetwork: !0, audioVolume: 0 }, minimumVideoAndAudioTestSampleSize: 5, steadyStateSampleWindow: 5e3, steadyStateAllowedDelta: .05, qualityThresholds: { video: [{ bps: 1e6, plr: .005, recommendedSetting: "1280x720 @ 30FPS" }, { bps: 6e5, plr: .005, recommendedSetting: "640x480 @ 30FPS" }, { bps: 3e5, plr: .005, recommendedSetting: "320x240 @ 30FPS" }, { bps: 35e4, plr: .03, recommendedSetting: "1280x720 @ 30FPS" }, { bps: 25e4, plr: .03, recommendedSetting: "640x480 @ 30FPS" }, { bps: 15e4, plr: .03, recommendedSetting: "320x240 @ 30FPS" }], audio: [{ bps: 25e3, plr: .05 }] }, strings: { bandwidthLow: "Bandwidth too low.", noCam: "No camera was found.", noMic: "No microphone was found." } };
  }, function (e, t, r) {
    "use strict";
    function n(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }function o(e, t) {
      if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !t || "object" != (typeof t === "undefined" ? "undefined" : _typeof(t)) && "function" != typeof t ? e : t;
    }function i(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (typeof t === "undefined" ? "undefined" : _typeof(t)));e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
    }Object.defineProperty(t, "__esModule", { value: !0 });var s = r(2),
        a = function (e) {
      function t(e, r) {
        n(this, t);var i = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));return i.name = r || s.ErrorNames.NETWORK_TEST_ERROR, i.stack = new Error(e).stack, i;
      }return i(t, Error), t;
    }();t.NetworkTestError = a;var u = function (e) {
      function t() {
        n(this, t);var e = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, "An instance of OT, the OpenTok.js client SDK, is required."));return e.name = s.ErrorNames.MISSING_OPENTOK_INSTANCE, e;
      }return i(t, e), t;
    }(a);t.MissingOpenTokInstanceError = u;var c = function (e) {
      function t() {
        return n(this, t), o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, "NetworkConnectivity requires an apiKey, sessionId, and token.", s.ErrorNames.INCOMPLETE_SESSON_CREDENTIALS));
      }return i(t, e), t;
    }(a);t.IncompleteSessionCredentialsError = c;var f = function (e) {
      function t() {
        return n(this, t), o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, "NetworkConnectivity requires OpenTok session credentials.", s.ErrorNames.MISSING_SESSON_CREDENTIALS));
      }return i(t, e), t;
    }(a);t.MissingSessionCredentialsError = f;var l = function (e) {
      function t() {
        return n(this, t), o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, "The onUpdate callback must be a function that accepts a single parameter.", s.ErrorNames.INVALID_ON_UPDATE_CALLBACK));
      }return i(t, e), t;
    }(a);t.InvalidOnUpdateCallback = l;
  }, function (e, t, r) {
    e.exports = r(23);
  }, function (e, t, r) {
    "use strict";
    e.exports = function (e, t) {
      return function () {
        for (var r = new Array(arguments.length), n = 0; n < r.length; n++) {
          r[n] = arguments[n];
        }return e.apply(t, r);
      };
    };
  }, function (e, t, r) {
    "use strict";
    var n = r(0);function o(e) {
      return encodeURIComponent(e).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
    }e.exports = function (e, t, r) {
      if (!t) return e;var i;if (r) i = r(t);else if (n.isURLSearchParams(t)) i = t.toString();else {
        var s = [];n.forEach(t, function (e, t) {
          null != e && (n.isArray(e) ? t += "[]" : e = [e], n.forEach(e, function (e) {
            n.isDate(e) ? e = e.toISOString() : n.isObject(e) && (e = JSON.stringify(e)), s.push(o(t) + "=" + o(e));
          }));
        }), i = s.join("&");
      }if (i) {
        var a = e.indexOf("#");-1 !== a && (e = e.slice(0, a)), e += (-1 === e.indexOf("?") ? "?" : "&") + i;
      }return e;
    };
  }, function (e, t, r) {
    "use strict";
    e.exports = function (e) {
      return !(!e || !e.__CANCEL__);
    };
  }, function (e, t, r) {
    "use strict";
    (function (t) {
      var n = r(0),
          o = r(29),
          i = { "Content-Type": "application/x-www-form-urlencoded" };function s(e, t) {
        !n.isUndefined(e) && n.isUndefined(e["Content-Type"]) && (e["Content-Type"] = t);
      }var a,
          u = { adapter: ("undefined" != typeof XMLHttpRequest ? a = r(11) : void 0 !== t && "[object process]" === Object.prototype.toString.call(t) && (a = r(11)), a), transformRequest: [function (e, t) {
          return o(t, "Accept"), o(t, "Content-Type"), n.isFormData(e) || n.isArrayBuffer(e) || n.isBuffer(e) || n.isStream(e) || n.isFile(e) || n.isBlob(e) ? e : n.isArrayBufferView(e) ? e.buffer : n.isURLSearchParams(e) ? (s(t, "application/x-www-form-urlencoded;charset=utf-8"), e.toString()) : n.isObject(e) ? (s(t, "application/json;charset=utf-8"), JSON.stringify(e)) : e;
        }], transformResponse: [function (e) {
          if ("string" == typeof e) try {
            e = JSON.parse(e);
          } catch (e) {}return e;
        }], timeout: 0, xsrfCookieName: "XSRF-TOKEN", xsrfHeaderName: "X-XSRF-TOKEN", maxContentLength: -1, validateStatus: function validateStatus(e) {
          return e >= 200 && e < 300;
        } };u.headers = { common: { Accept: "application/json, text/plain, */*" } }, n.forEach(["delete", "get", "head"], function (e) {
        u.headers[e] = {};
      }), n.forEach(["post", "put", "patch"], function (e) {
        u.headers[e] = n.merge(i);
      }), e.exports = u;
    }).call(this, r(28));
  }, function (e, t, r) {
    "use strict";
    var n = r(0),
        o = r(30),
        i = r(8),
        s = r(32),
        a = r(35),
        u = r(36),
        c = r(12);e.exports = function (e) {
      return new Promise(function (t, f) {
        var l = e.data,
            d = e.headers;n.isFormData(l) && delete d["Content-Type"];var p = new XMLHttpRequest();if (e.auth) {
          var h = e.auth.username || "",
              E = e.auth.password || "";d.Authorization = "Basic " + btoa(h + ":" + E);
        }var _ = s(e.baseURL, e.url);if (p.open(e.method.toUpperCase(), i(_, e.params, e.paramsSerializer), !0), p.timeout = e.timeout, p.onreadystatechange = function () {
          if (p && 4 === p.readyState && (0 !== p.status || p.responseURL && 0 === p.responseURL.indexOf("file:"))) {
            var r = "getAllResponseHeaders" in p ? a(p.getAllResponseHeaders()) : null,
                n = { data: e.responseType && "text" !== e.responseType ? p.response : p.responseText, status: p.status, statusText: p.statusText, headers: r, config: e, request: p };o(t, f, n), p = null;
          }
        }, p.onabort = function () {
          p && (f(c("Request aborted", e, "ECONNABORTED", p)), p = null);
        }, p.onerror = function () {
          f(c("Network Error", e, null, p)), p = null;
        }, p.ontimeout = function () {
          var t = "timeout of " + e.timeout + "ms exceeded";e.timeoutErrorMessage && (t = e.timeoutErrorMessage), f(c(t, e, "ECONNABORTED", p)), p = null;
        }, n.isStandardBrowserEnv()) {
          var O = r(37),
              v = (e.withCredentials || u(_)) && e.xsrfCookieName ? O.read(e.xsrfCookieName) : void 0;v && (d[e.xsrfHeaderName] = v);
        }if ("setRequestHeader" in p && n.forEach(d, function (e, t) {
          void 0 === l && "content-type" === t.toLowerCase() ? delete d[t] : p.setRequestHeader(t, e);
        }), n.isUndefined(e.withCredentials) || (p.withCredentials = !!e.withCredentials), e.responseType) try {
          p.responseType = e.responseType;
        } catch (t) {
          if ("json" !== e.responseType) throw t;
        }"function" == typeof e.onDownloadProgress && p.addEventListener("progress", e.onDownloadProgress), "function" == typeof e.onUploadProgress && p.upload && p.upload.addEventListener("progress", e.onUploadProgress), e.cancelToken && e.cancelToken.promise.then(function (e) {
          p && (p.abort(), f(e), p = null);
        }), void 0 === l && (l = null), p.send(l);
      });
    };
  }, function (e, t, r) {
    "use strict";
    var n = r(31);e.exports = function (e, t, r, o, i) {
      var s = new Error(e);return n(s, t, r, o, i);
    };
  }, function (e, t, r) {
    "use strict";
    var n = r(0);e.exports = function (e, t) {
      t = t || {};var r = {},
          o = ["url", "method", "params", "data"],
          i = ["headers", "auth", "proxy"],
          s = ["baseURL", "url", "transformRequest", "transformResponse", "paramsSerializer", "timeout", "withCredentials", "adapter", "responseType", "xsrfCookieName", "xsrfHeaderName", "onUploadProgress", "onDownloadProgress", "maxContentLength", "validateStatus", "maxRedirects", "httpAgent", "httpsAgent", "cancelToken", "socketPath"];n.forEach(o, function (e) {
        void 0 !== t[e] && (r[e] = t[e]);
      }), n.forEach(i, function (o) {
        n.isObject(t[o]) ? r[o] = n.deepMerge(e[o], t[o]) : void 0 !== t[o] ? r[o] = t[o] : n.isObject(e[o]) ? r[o] = n.deepMerge(e[o]) : void 0 !== e[o] && (r[o] = e[o]);
      }), n.forEach(s, function (n) {
        void 0 !== t[n] ? r[n] = t[n] : void 0 !== e[n] && (r[n] = e[n]);
      });var a = o.concat(i).concat(s),
          u = Object.keys(t).filter(function (e) {
        return -1 === a.indexOf(e);
      });return n.forEach(u, function (n) {
        void 0 !== t[n] ? r[n] = t[n] : void 0 !== e[n] && (r[n] = e[n]);
      }), r;
    };
  }, function (e, t, r) {
    "use strict";
    function n(e) {
      this.message = e;
    }n.prototype.toString = function () {
      return "Cancel" + (this.message ? ": " + this.message : "");
    }, n.prototype.__CANCEL__ = !0, e.exports = n;
  }, function (e, t, r) {
    "use strict";
    e.exports = r(40);
  }, function (e, t, r) {
    "use strict";
    (function (t) {
      function r(e) {
        o.length || (n(), !0), o[o.length] = e;
      }e.exports = r;var n,
          o = [],
          i = 0;function s() {
        for (; i < o.length;) {
          var e = i;if (i += 1, o[e].call(), i > 1024) {
            for (var t = 0, r = o.length - i; t < r; t++) {
              o[t] = o[t + i];
            }o.length -= i, i = 0;
          }
        }o.length = 0, i = 0, !1;
      }var a,
          u,
          c,
          f = void 0 !== t ? t : self,
          l = f.MutationObserver || f.WebKitMutationObserver;function d(e) {
        return function () {
          var t = setTimeout(n, 0),
              r = setInterval(n, 50);function n() {
            clearTimeout(t), clearInterval(r), e();
          }
        };
      }"function" == typeof l ? (a = 1, u = new l(s), c = document.createTextNode(""), u.observe(c, { characterData: !0 }), n = function n() {
        a = -a, c.data = a;
      }) : n = d(s), r.requestFlush = n, r.makeRequestCallFromTimer = d;
    }).call(this, r(41));
  }, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var n = r(4),
        o = r(1);t.default = function (e) {
      var t = o.getOr(0, "timestamp", o.last(e)) - n.default.steadyStateSampleWindow;return e.filter(function (e) {
        return e.timestamp >= t;
      });
    };
  }, function (e, t, r) {
    "use strict";
    function n(e, t) {
      for (var r = [], n = 1; n < t.length; n += 1) {
        var o = t[n],
            i = t[n - 1];if (o[e] && i[e]) {
          var s = 8 * (o[e].bytesReceived ? o[e].bytesReceived - i[e].bytesReceived : 0) / ((o.timestamp - i.timestamp) / 1e3),
              a = o[e].packetsReceived,
              u = o[e].packetsLost / a,
              c = "video" === e ? { frameRate: o[e].frameRate } : {};r.push(Object.assign({ averageBitrate: s, packetLossRatio: u }, c));
        }
      }return r;
    }Object.defineProperty(t, "__esModule", { value: !0 }), t.default = function (e) {
      if (e.length < 2) throw new Error("Cannot calculate bitrate with less than two data points.");return { audio: n("audio", e), video: n("video", e) };
    };
  }, function (e, t, r) {
    "use strict";
    var n = function () {
      function e(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
        }
      }return function (t, r, n) {
        return r && e(t.prototype, r), n && e(t, n), t;
      };
    }();Object.defineProperty(t, "__esModule", { value: !0 });var o = function () {
      function e(t) {
        var r = this;!function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }(this, e), this.stats = { audio: {}, video: {} }, this.bandwidth = { audio: 0, video: 0 }, this.hasAudioTrack = function () {
          return r.statsLog[0] && !!r.statsLog[0].audio;
        }, this.hasVideoTrack = function () {
          return r.statsLog[0] && !!r.statsLog[0].video;
        }, this.statsLog = [], this.audioScoresLog = [], this.videoScoresLog = [], this.audioOnlyFallback = !!t;
      }return n(e, [{ key: "audioScore", value: function value() {
          return this.audioScoresLog.reduce(function (e, t) {
            return e + t;
          }, 0) / this.audioScoresLog.length;
        } }, { key: "videoScore", value: function value() {
          return this.videoScoresLog.reduce(function (e, t) {
            return e + t;
          }, 0) / this.videoScoresLog.length;
        } }, { key: "clearInterval", value: function value() {
          this.intervalId && window.clearInterval(this.intervalId), this.intervalId = void 0;
        } }, { key: "pruneAudioScores", value: function value() {
          for (var t = this.audioScoresLog; t.length > e.maxLogLength;) {
            t.shift();
          }this.audioScoresLog = t;
        } }, { key: "pruneVideoScores", value: function value() {
          for (var t = this.videoScoresLog; t.length > e.maxLogLength;) {
            t.shift();
          }this.videoScoresLog = t;
        } }, { key: "pruneScores", value: function value() {
          this.pruneAudioScores(), this.pruneVideoScores();
        } }, { key: "audioQualityScore", value: function value() {
          return this.hasAudioTrack() ? this.audioScore() : 1;
        } }, { key: "videoQualityScore", value: function value() {
          return this.hasVideoTrack() ? this.videoScore() : 1;
        } }]), e;
    }();o.maxLogLength = 1e3, o.scoreInterval = 1e3, t.default = o;
  }, function (e, t, r) {
    "use strict";
    var n = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
      return typeof e === "undefined" ? "undefined" : _typeof(e);
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e === "undefined" ? "undefined" : _typeof(e);
    },
        o = function () {
      function e(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
        }
      }return function (t, r, n) {
        return r && e(t.prototype, r), n && e(t, n), t;
      };
    }();Object.defineProperty(t, "__esModule", { value: !0 });var i = r(21).version,
        s = r(22),
        a = r(50),
        u = r(5),
        c = r(57),
        f = function () {
      function e(t, r, n) {
        !function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }(this, e), this.validateOT(t), this.validateCredentials(r), this.otLogging = this.startLoggingEngine(r.apiKey, r.sessionId), this.OT = t, this.credentials = r, this.options = n;
      }return o(e, [{ key: "validateOT", value: function value(e) {
          if (!e || "object" !== (void 0 === e ? "undefined" : n(e)) || !e.initSession) throw new u.MissingOpenTokInstanceError();
        } }, { key: "validateCredentials", value: function value(e) {
          if (!e) throw new u.MissingSessionCredentialsError();if (!e.apiKey || !e.sessionId || !e.token) throw new u.IncompleteSessionCredentialsError();
        } }, { key: "startLoggingEngine", value: function value(e, t) {
          return new c({ sessionId: t, partnerId: e, source: window.location.href, clientVersion: "js-network-test-" + i, name: "opentok-network-test", componentId: "opentok-network-test" });
        } }, { key: "testConnectivity", value: function value() {
          return this.otLogging.logEvent({ action: "testConnectivity", variation: "Attempt" }), s.testConnectivity(this.OT, this.credentials, this.otLogging, this.options);
        } }, { key: "testQuality", value: function value(e) {
          if (this.otLogging.logEvent({ action: "testQuality", variation: "Attempt" }), e && ("function" != typeof e || 1 !== e.length)) throw this.otLogging.logEvent({ action: "testQuality", variation: "Failure" }), new u.InvalidOnUpdateCallback();return a.testQuality(this.OT, this.credentials, this.otLogging, this.options, e);
        } }, { key: "stop", value: function value() {
          a.stopQualityTest();
        } }]), e;
    }();t.default = f;var l = r(2);t.ErrorNames = l.ErrorNames;
  }, function (e) {
    e.exports = JSON.parse('{"name":"opentok-network-test-js","version":"2.1.0","description":"Precall network test for applications using the OpenTok platform.","main":"dist/NetworkTest/index.js","types":"dist/NetworkTest/index.d.ts","scripts":{"build":"rm -rf dist && webpack --config webpack.config.js","test-setup":"node test/setup/setup.js","test-teardown":"rm test/credentials.json","karma":"karma start","test":"npm run test-setup && npm run karma && npm run test-teardown"},"repository":{"type":"git","url":"git+https://github.com/opentok/opentok-network-test-js.git"},"keywords":["tokbox","opentok","network test","connectivity","webrtc"],"author":{"name":"TokBox","email":"contact@tokbox.com"},"license":"MIT","bugs":{"url":"https://github.com/opentok/network-connectivity-js/issues"},"homepage":"https://github.com/opentok/network-connectivity-js#readme","dependencies":{"axios":"^0.19.0","opentok-solutions-logging":"^1.0.15","promise":"^8.0.1"},"devDependencies":{"@opentok/client":"^2.16.1","@types/expect.js":"^0.3.29","@types/jasmine":"^2.8.8","@types/jasmine-matchers":"^0.2.30","@types/mocha":"^5.2.2","@types/node":"^10.3.2","@types/opentok":"^2.3.4","@types/promise":"^7.1.30","@types/webrtc":"0.0.22","babel-core":"^6.26.3","babel-loader":"^7.1.4","babel-preset-env":"^1.7.0","dotenv":"^4.0.0","fs-extra":"^4.0.3","jasmine":"^2.99.0","jasmine-core":"^2.99.1","karma":"^4.4.1","karma-chrome-launcher":"^2.2.0","karma-cli":"^1.0.1","karma-firefox-launcher":"^1.1.0","karma-jasmine":"^1.1.2","karma-mocha-reporter":"^2.2.5","karma-safari-launcher":"^1.0.0","karma-safaritechpreview-launcher":"0.0.6","karma-sauce-launcher":"^1.2.0","karma-sourcemap-loader":"^0.3.7","karma-webpack":"^2.0.13","opentok":"^2.9.1","terser-webpack-plugin":"^2.3.3","ts-loader":"^4.4.1","tslint":"^5.10.0","tslint-config-airbnb":"^5.9.2","typescript":"2.9.2","webpack":"^4.12.0","webpack-cli":"^3.0.4","webpack-node-externals":"^1.7.2"}}');
  }, function (e, t, r) {
    "use strict";
    function n(e) {
      if (Array.isArray(e)) {
        for (var t = 0, r = Array(e.length); t < e.length; t++) {
          r[t] = e[t];
        }return r;
      }return Array.from(e);
    }function o(e, t, r) {
      return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
    }Object.defineProperty(t, "__esModule", { value: !0 });var i = r(6),
        s = r(15),
        a = r(48),
        u = r(2),
        c = r(49),
        f = r(1);function l(e) {
      return new s(function (t, r) {
        e.on("sessionDisconnected", function () {
          e.off(), t();
        }), e.disconnect();
      });
    }function d(e, t) {
      return new s(function (r, n) {
        (function (e) {
          return new s(function (t, r) {
            e.getDevices(function (e) {
              var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];if (e) r(new a.FailedToObtainMediaDevices());else {
                var i = n.reduce(function (e, t) {
                  var r = "audioInput" === t.kind ? "audio" : "video";return Object.assign({}, e, o({}, r, Object.assign({}, e[r], o({}, t.deviceId, t))));
                }, { audio: {}, video: {} });Object.keys(i.audio).length || Object.keys(i.video).length ? t(i) : r(new a.FailedToObtainMediaDevices());
              }
            });
          });
        })(e).then(function (o) {
          var i = document.createElement("div");i.style.position = "fixed", i.style.bottom = "-1px", i.style.width = "1px", i.style.height = "1px", i.style.opacity = "0.01", document.body.appendChild(i);var s = { width: "100%", height: "100%", insertMode: "append", showControls: !1 };t && t.audioOnly && (s.videoSource = null), Object.keys(o.audio).length || (s.audioSource = null), Object.keys(o.video).length || (s.videoSource = null);var u = e.initPublisher(i, s, function (e) {
            e ? n(new a.FailedToCreateLocalPublisher()) : r({ publisher: u });
          });u.on("streamCreated", function () {
            i.style.visibility = "hidden";
          });
        }).catch(n);
      });
    }function p(e) {
      var t = e.session,
          r = e.publisher;return new s(function (e, n) {
        var o = function o(e) {
          l(t).then(function () {
            n(e);
          });
        };if (r.stream) var i = document.createElement("div"),
            s = t.subscribe(r.stream, i, { testNetwork: !0, audioVolume: 0 }, function (n) {
          n ? o(new a.SubscribeToSessionError()) : e(Object.assign({ session: t }, { publisher: r }, { subscriber: s }));
        });else o(new a.SubscribeToSessionError());
      });
    }function h(e, t) {
      return new s(function (r, n) {
        var o = f.getOr("", "properties.loggingURL", e) + "/logging/ClientEvent",
            s = function s() {
          return n(new a.LoggingServerConnectionError());
        };i.default.post(o).then(function (e) {
          return 200 === e.status ? r(t) : s();
        }).catch(s);
      });
    }t.testConnectivity = function (e, t, r, o) {
      return new s(function (i, f) {
        (function (e, t) {
          var r = t.apiKey,
              n = t.sessionId,
              o = t.token;return new s(function (t, i) {
            var s = e.initSession(r, n);s.connect(o, function (e) {
              u.errorHasName(e, u.OTErrorType.OT_AUTHENTICATION_ERROR) ? i(new a.ConnectToSessionTokenError()) : u.errorHasName(e, u.OTErrorType.OT_INVALID_SESSION_ID) ? i(new a.ConnectToSessionSessionIdError()) : u.errorHasName(e, u.OTErrorType.OT_CONNECT_FAILED) ? i(new a.ConnectToSessionNetworkError()) : u.errorHasName(e, u.OTErrorType.OT_INVALID_HTTP_STATUS) ? i(new a.APIConnectivityError()) : e ? i(new a.ConnectToSessionError()) : t(s);
            });
          });
        })(e, t).then(function (t) {
          return function (e, t, r) {
            return new s(function (n, o) {
              var i = function i(e) {
                l(t).then(function () {
                  o(e);
                });
              };d(e, r).then(function (e) {
                var r = e.publisher;t.publish(r, function (e) {
                  e ? u.errorHasName(e, u.OTErrorType.NOT_CONNECTED) ? i(new a.PublishToSessionNotConnectedError()) : u.errorHasName(e, u.OTErrorType.UNABLE_TO_PUBLISH) ? i(new a.PublishToSessionPermissionOrTimeoutError()) : e && i(new a.PublishToSessionError()) : n(Object.assign({ session: t }, { publisher: r }));
                });
              }).catch(function (e) {
                i(e);
              });
            });
          }(e, t, o);
        }).then(p).then(function (t) {
          return h(e, t);
        }).then(function (e) {
          var t = { success: !0, failedTests: [] };return r.logEvent({ action: "testConnectivity", variation: "Success" }), l(e.session).then(function () {
            return i(t);
          });
        }).catch(function (t) {
          var o = function o() {
            var e = c.mapErrors.apply(c, arguments),
                t = e.find(function (e) {
              return "messaging" === e.type;
            }),
                o = [].concat(n(e), n(t ? c.mapErrors(new a.FailedMessagingServerTestError()) : [])),
                s = { failedTests: o, success: !1 };r.logEvent({ action: "testConnectivity", variation: "Success" }), i(s);
          };"LoggingServerConnectionError" === t.name ? o(t) : h(e).then(function () {
            return o(t);
          }).catch(function (e) {
            return o(t, e);
          });
        });
      });
    };
  }, function (e, t, r) {
    "use strict";
    var n = r(0),
        o = r(7),
        i = r(24),
        s = r(13);function a(e) {
      var t = new i(e),
          r = o(i.prototype.request, t);return n.extend(r, i.prototype, t), n.extend(r, t), r;
    }var u = a(r(10));u.Axios = i, u.create = function (e) {
      return a(s(u.defaults, e));
    }, u.Cancel = r(14), u.CancelToken = r(38), u.isCancel = r(9), u.all = function (e) {
      return Promise.all(e);
    }, u.spread = r(39), e.exports = u, e.exports.default = u;
  }, function (e, t, r) {
    "use strict";
    var n = r(0),
        o = r(8),
        i = r(25),
        s = r(26),
        a = r(13);function u(e) {
      this.defaults = e, this.interceptors = { request: new i(), response: new i() };
    }u.prototype.request = function (e) {
      "string" == typeof e ? (e = arguments[1] || {}).url = arguments[0] : e = e || {}, (e = a(this.defaults, e)).method ? e.method = e.method.toLowerCase() : this.defaults.method ? e.method = this.defaults.method.toLowerCase() : e.method = "get";var t = [s, void 0],
          r = Promise.resolve(e);for (this.interceptors.request.forEach(function (e) {
        t.unshift(e.fulfilled, e.rejected);
      }), this.interceptors.response.forEach(function (e) {
        t.push(e.fulfilled, e.rejected);
      }); t.length;) {
        r = r.then(t.shift(), t.shift());
      }return r;
    }, u.prototype.getUri = function (e) {
      return e = a(this.defaults, e), o(e.url, e.params, e.paramsSerializer).replace(/^\?/, "");
    }, n.forEach(["delete", "get", "head", "options"], function (e) {
      u.prototype[e] = function (t, r) {
        return this.request(n.merge(r || {}, { method: e, url: t }));
      };
    }), n.forEach(["post", "put", "patch"], function (e) {
      u.prototype[e] = function (t, r, o) {
        return this.request(n.merge(o || {}, { method: e, url: t, data: r }));
      };
    }), e.exports = u;
  }, function (e, t, r) {
    "use strict";
    var n = r(0);function o() {
      this.handlers = [];
    }o.prototype.use = function (e, t) {
      return this.handlers.push({ fulfilled: e, rejected: t }), this.handlers.length - 1;
    }, o.prototype.eject = function (e) {
      this.handlers[e] && (this.handlers[e] = null);
    }, o.prototype.forEach = function (e) {
      n.forEach(this.handlers, function (t) {
        null !== t && e(t);
      });
    }, e.exports = o;
  }, function (e, t, r) {
    "use strict";
    var n = r(0),
        o = r(27),
        i = r(9),
        s = r(10);function a(e) {
      e.cancelToken && e.cancelToken.throwIfRequested();
    }e.exports = function (e) {
      return a(e), e.headers = e.headers || {}, e.data = o(e.data, e.headers, e.transformRequest), e.headers = n.merge(e.headers.common || {}, e.headers[e.method] || {}, e.headers), n.forEach(["delete", "get", "head", "post", "put", "patch", "common"], function (t) {
        delete e.headers[t];
      }), (e.adapter || s.adapter)(e).then(function (t) {
        return a(e), t.data = o(t.data, t.headers, e.transformResponse), t;
      }, function (t) {
        return i(t) || (a(e), t && t.response && (t.response.data = o(t.response.data, t.response.headers, e.transformResponse))), Promise.reject(t);
      });
    };
  }, function (e, t, r) {
    "use strict";
    var n = r(0);e.exports = function (e, t, r) {
      return n.forEach(r, function (r) {
        e = r(e, t);
      }), e;
    };
  }, function (e, t) {
    var r,
        n,
        o = e.exports = {};function i() {
      throw new Error("setTimeout has not been defined");
    }function s() {
      throw new Error("clearTimeout has not been defined");
    }function a(e) {
      if (r === setTimeout) return setTimeout(e, 0);if ((r === i || !r) && setTimeout) return r = setTimeout, setTimeout(e, 0);try {
        return r(e, 0);
      } catch (t) {
        try {
          return r.call(null, e, 0);
        } catch (t) {
          return r.call(this, e, 0);
        }
      }
    }!function () {
      try {
        r = "function" == typeof setTimeout ? setTimeout : i;
      } catch (e) {
        r = i;
      }try {
        n = "function" == typeof clearTimeout ? clearTimeout : s;
      } catch (e) {
        n = s;
      }
    }();var u,
        c = [],
        f = !1,
        l = -1;function d() {
      f && u && (f = !1, u.length ? c = u.concat(c) : l = -1, c.length && p());
    }function p() {
      if (!f) {
        var e = a(d);f = !0;for (var t = c.length; t;) {
          for (u = c, c = []; ++l < t;) {
            u && u[l].run();
          }l = -1, t = c.length;
        }u = null, f = !1, function (e) {
          if (n === clearTimeout) return clearTimeout(e);if ((n === s || !n) && clearTimeout) return n = clearTimeout, clearTimeout(e);try {
            n(e);
          } catch (t) {
            try {
              return n.call(null, e);
            } catch (t) {
              return n.call(this, e);
            }
          }
        }(e);
      }
    }function h(e, t) {
      this.fun = e, this.array = t;
    }function E() {}o.nextTick = function (e) {
      var t = new Array(arguments.length - 1);if (arguments.length > 1) for (var r = 1; r < arguments.length; r++) {
        t[r - 1] = arguments[r];
      }c.push(new h(e, t)), 1 !== c.length || f || a(p);
    }, h.prototype.run = function () {
      this.fun.apply(null, this.array);
    }, o.title = "browser", o.browser = !0, o.env = {}, o.argv = [], o.version = "", o.versions = {}, o.on = E, o.addListener = E, o.once = E, o.off = E, o.removeListener = E, o.removeAllListeners = E, o.emit = E, o.prependListener = E, o.prependOnceListener = E, o.listeners = function (e) {
      return [];
    }, o.binding = function (e) {
      throw new Error("process.binding is not supported");
    }, o.cwd = function () {
      return "/";
    }, o.chdir = function (e) {
      throw new Error("process.chdir is not supported");
    }, o.umask = function () {
      return 0;
    };
  }, function (e, t, r) {
    "use strict";
    var n = r(0);e.exports = function (e, t) {
      n.forEach(e, function (r, n) {
        n !== t && n.toUpperCase() === t.toUpperCase() && (e[t] = r, delete e[n]);
      });
    };
  }, function (e, t, r) {
    "use strict";
    var n = r(12);e.exports = function (e, t, r) {
      var o = r.config.validateStatus;!o || o(r.status) ? e(r) : t(n("Request failed with status code " + r.status, r.config, null, r.request, r));
    };
  }, function (e, t, r) {
    "use strict";
    e.exports = function (e, t, r, n, o) {
      return e.config = t, r && (e.code = r), e.request = n, e.response = o, e.isAxiosError = !0, e.toJSON = function () {
        return { message: this.message, name: this.name, description: this.description, number: this.number, fileName: this.fileName, lineNumber: this.lineNumber, columnNumber: this.columnNumber, stack: this.stack, config: this.config, code: this.code };
      }, e;
    };
  }, function (e, t, r) {
    "use strict";
    var n = r(33),
        o = r(34);e.exports = function (e, t) {
      return e && !n(t) ? o(e, t) : t;
    };
  }, function (e, t, r) {
    "use strict";
    e.exports = function (e) {
      return (/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)
      );
    };
  }, function (e, t, r) {
    "use strict";
    e.exports = function (e, t) {
      return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
    };
  }, function (e, t, r) {
    "use strict";
    var n = r(0),
        o = ["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"];e.exports = function (e) {
      var t,
          r,
          i,
          s = {};return e ? (n.forEach(e.split("\n"), function (e) {
        if (i = e.indexOf(":"), t = n.trim(e.substr(0, i)).toLowerCase(), r = n.trim(e.substr(i + 1)), t) {
          if (s[t] && o.indexOf(t) >= 0) return;s[t] = "set-cookie" === t ? (s[t] ? s[t] : []).concat([r]) : s[t] ? s[t] + ", " + r : r;
        }
      }), s) : s;
    };
  }, function (e, t, r) {
    "use strict";
    var n = r(0);e.exports = n.isStandardBrowserEnv() ? function () {
      var e,
          t = /(msie|trident)/i.test(navigator.userAgent),
          r = document.createElement("a");function o(e) {
        var n = e;return t && (r.setAttribute("href", n), n = r.href), r.setAttribute("href", n), { href: r.href, protocol: r.protocol ? r.protocol.replace(/:$/, "") : "", host: r.host, search: r.search ? r.search.replace(/^\?/, "") : "", hash: r.hash ? r.hash.replace(/^#/, "") : "", hostname: r.hostname, port: r.port, pathname: "/" === r.pathname.charAt(0) ? r.pathname : "/" + r.pathname };
      }return e = o(window.location.href), function (t) {
        var r = n.isString(t) ? o(t) : t;return r.protocol === e.protocol && r.host === e.host;
      };
    }() : function () {
      return !0;
    };
  }, function (e, t, r) {
    "use strict";
    var n = r(0);e.exports = n.isStandardBrowserEnv() ? { write: function write(e, t, r, o, i, s) {
        var a = [];a.push(e + "=" + encodeURIComponent(t)), n.isNumber(r) && a.push("expires=" + new Date(r).toGMTString()), n.isString(o) && a.push("path=" + o), n.isString(i) && a.push("domain=" + i), !0 === s && a.push("secure"), document.cookie = a.join("; ");
      }, read: function read(e) {
        var t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));return t ? decodeURIComponent(t[3]) : null;
      }, remove: function remove(e) {
        this.write(e, "", Date.now() - 864e5);
      } } : { write: function write() {}, read: function read() {
        return null;
      }, remove: function remove() {} };
  }, function (e, t, r) {
    "use strict";
    var n = r(14);function o(e) {
      if ("function" != typeof e) throw new TypeError("executor must be a function.");var t;this.promise = new Promise(function (e) {
        t = e;
      });var r = this;e(function (e) {
        r.reason || (r.reason = new n(e), t(r.reason));
      });
    }o.prototype.throwIfRequested = function () {
      if (this.reason) throw this.reason;
    }, o.source = function () {
      var e;return { token: new o(function (t) {
          e = t;
        }), cancel: e };
    }, e.exports = o;
  }, function (e, t, r) {
    "use strict";
    e.exports = function (e) {
      return function (t) {
        return e.apply(null, t);
      };
    };
  }, function (e, t, r) {
    "use strict";
    e.exports = r(3), r(42), r(43), r(44), r(45), r(47);
  }, function (e, t) {
    var r;r = function () {
      return this;
    }();try {
      r = r || new Function("return this")();
    } catch (e) {
      "object" == (typeof window === "undefined" ? "undefined" : _typeof(window)) && (r = window);
    }e.exports = r;
  }, function (e, t, r) {
    "use strict";
    var n = r(3);e.exports = n, n.prototype.done = function (e, t) {
      var r = arguments.length ? this.then.apply(this, arguments) : this;r.then(null, function (e) {
        setTimeout(function () {
          throw e;
        }, 0);
      });
    };
  }, function (e, t, r) {
    "use strict";
    var n = r(3);e.exports = n, n.prototype.finally = function (e) {
      return this.then(function (t) {
        return n.resolve(e()).then(function () {
          return t;
        });
      }, function (t) {
        return n.resolve(e()).then(function () {
          throw t;
        });
      });
    };
  }, function (e, t, r) {
    "use strict";
    var n = r(3);e.exports = n;var o = f(!0),
        i = f(!1),
        s = f(null),
        a = f(void 0),
        u = f(0),
        c = f("");function f(e) {
      var t = new n(n._n);return t._i = 1, t._j = e, t;
    }n.resolve = function (e) {
      if (e instanceof n) return e;if (null === e) return s;if (void 0 === e) return a;if (!0 === e) return o;if (!1 === e) return i;if (0 === e) return u;if ("" === e) return c;if ("object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) || "function" == typeof e) try {
        var t = e.then;if ("function" == typeof t) return new n(t.bind(e));
      } catch (e) {
        return new n(function (t, r) {
          r(e);
        });
      }return f(e);
    }, n.all = function (e) {
      var t = Array.prototype.slice.call(e);return new n(function (e, r) {
        if (0 === t.length) return e([]);var o = t.length;function i(s, a) {
          if (a && ("object" == (typeof a === "undefined" ? "undefined" : _typeof(a)) || "function" == typeof a)) {
            if (a instanceof n && a.then === n.prototype.then) {
              for (; 3 === a._i;) {
                a = a._j;
              }return 1 === a._i ? i(s, a._j) : (2 === a._i && r(a._j), void a.then(function (e) {
                i(s, e);
              }, r));
            }var u = a.then;if ("function" == typeof u) return void new n(u.bind(a)).then(function (e) {
              i(s, e);
            }, r);
          }t[s] = a, 0 == --o && e(t);
        }for (var s = 0; s < t.length; s++) {
          i(s, t[s]);
        }
      });
    }, n.reject = function (e) {
      return new n(function (t, r) {
        r(e);
      });
    }, n.race = function (e) {
      return new n(function (t, r) {
        e.forEach(function (e) {
          n.resolve(e).then(t, r);
        });
      });
    }, n.prototype.catch = function (e) {
      return this.then(null, e);
    };
  }, function (e, t, r) {
    "use strict";
    var n = r(3),
        o = r(46);e.exports = n, n.denodeify = function (e, t) {
      return "number" == typeof t && t !== 1 / 0 ? function (e, t) {
        for (var r = [], o = 0; o < t; o++) {
          r.push("a" + o);
        }var s = ["return function (" + r.join(",") + ") {", "var self = this;", "return new Promise(function (rs, rj) {", "var res = fn.call(", ["self"].concat(r).concat([i]).join(","), ");", "if (res &&", '(typeof res === "object" || typeof res === "function") &&', 'typeof res.then === "function"', ") {rs(res);}", "});", "};"].join("");return Function(["Promise", "fn"], s)(n, e);
      }(e, t) : function (e) {
        for (var t = Math.max(e.length - 1, 3), r = [], o = 0; o < t; o++) {
          r.push("a" + o);
        }var s = ["return function (" + r.join(",") + ") {", "var self = this;", "var args;", "var argLength = arguments.length;", "if (arguments.length > " + t + ") {", "args = new Array(arguments.length + 1);", "for (var i = 0; i < arguments.length; i++) {", "args[i] = arguments[i];", "}", "}", "return new Promise(function (rs, rj) {", "var cb = " + i + ";", "var res;", "switch (argLength) {", r.concat(["extra"]).map(function (e, t) {
          return "case " + t + ":res = fn.call(" + ["self"].concat(r.slice(0, t)).concat("cb").join(",") + ");break;";
        }).join(""), "default:", "args[argLength] = cb;", "res = fn.apply(self, args);", "}", "if (res &&", '(typeof res === "object" || typeof res === "function") &&', 'typeof res.then === "function"', ") {rs(res);}", "});", "};"].join("");return Function(["Promise", "fn"], s)(n, e);
      }(e);
    };var i = "function (err, res) {if (err) { rj(err); } else { rs(res); }}";n.nodeify = function (e) {
      return function () {
        var t = Array.prototype.slice.call(arguments),
            r = "function" == typeof t[t.length - 1] ? t.pop() : null,
            i = this;try {
          return e.apply(this, arguments).nodeify(r, i);
        } catch (e) {
          if (null == r) return new n(function (t, r) {
            r(e);
          });o(function () {
            r.call(i, e);
          });
        }
      };
    }, n.prototype.nodeify = function (e, t) {
      if ("function" != typeof e) return this;this.then(function (r) {
        o(function () {
          e.call(t, null, r);
        });
      }, function (r) {
        o(function () {
          e.call(t, r);
        });
      });
    };
  }, function (e, t, r) {
    "use strict";
    var n = r(16),
        o = [],
        i = [],
        s = n.makeRequestCallFromTimer(function () {
      if (i.length) throw i.shift();
    });function a(e) {
      var t;(t = o.length ? o.pop() : new u()).task = e, n(t);
    }function u() {
      this.task = null;
    }e.exports = a, u.prototype.call = function () {
      try {
        this.task.call();
      } catch (e) {
        a.onerror ? a.onerror(e) : (i.push(e), s());
      } finally {
        this.task = null, o[o.length] = this;
      }
    };
  }, function (e, t, r) {
    "use strict";
    var n = r(3);e.exports = n, n.enableSynchronous = function () {
      n.prototype.isPending = function () {
        return 0 == this.getState();
      }, n.prototype.isFulfilled = function () {
        return 1 == this.getState();
      }, n.prototype.isRejected = function () {
        return 2 == this.getState();
      }, n.prototype.getValue = function () {
        if (3 === this._i) return this._j.getValue();if (!this.isFulfilled()) throw new Error("Cannot get a value of an unfulfilled promise.");return this._j;
      }, n.prototype.getReason = function () {
        if (3 === this._i) return this._j.getReason();if (!this.isRejected()) throw new Error("Cannot get a rejection reason of a non-rejected promise.");return this._j;
      }, n.prototype.getState = function () {
        return 3 === this._i ? this._j.getState() : -1 === this._i || -2 === this._i ? 0 : this._i;
      };
    }, n.disableSynchronous = function () {
      n.prototype.isPending = void 0, n.prototype.isFulfilled = void 0, n.prototype.isRejected = void 0, n.prototype.getValue = void 0, n.prototype.getReason = void 0, n.prototype.getState = void 0;
    };
  }, function (e, t, r) {
    "use strict";
    function n(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }function o(e, t) {
      if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !t || "object" != (typeof t === "undefined" ? "undefined" : _typeof(t)) && "function" != typeof t ? e : t;
    }function i(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (typeof t === "undefined" ? "undefined" : _typeof(t)));e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
    }Object.defineProperty(t, "__esModule", { value: !0 });var s = r(5),
        a = r(2),
        u = function (e) {
      function t(e, r) {
        return n(this, t), o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, r || a.ErrorNames.CONNECTIVITY_ERROR));
      }return i(t, e), t;
    }(s.NetworkTestError);t.ConnectivityError = u;var c = function (e) {
      function t() {
        n(this, t);return o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, "Failed to connect to OpenTOK API Server", a.ErrorNames.API_CONNECTIVITY_ERROR));
      }return i(t, e), t;
    }(u);t.APIConnectivityError = c;var f = function (e) {
      function t(e, r) {
        n(this, t);return o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e || "Failed to connect to the session due to a network error.", r || a.ErrorNames.CONNECT_TO_SESSION_ERROR));
      }return i(t, e), t;
    }(u);t.ConnectToSessionError = f;var l = function (e) {
      function t() {
        return n(this, t), o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, "Failed to connect to the session due to an invalid token.", a.ErrorNames.CONNECT_TO_SESSION_TOKEN_ERROR));
      }return i(t, e), t;
    }(f);t.ConnectToSessionTokenError = l;var d = function (e) {
      function t() {
        return n(this, t), o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, "Failed to connect to the session due to an invalid session ID.", a.ErrorNames.CONNECT_TO_SESSION_ID_ERROR));
      }return i(t, e), t;
    }(f);t.ConnectToSessionSessionIdError = d;var p = function (e) {
      function t() {
        return n(this, t), o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, "Failed to connect to the session due to a network error.", a.ErrorNames.CONNECT_TO_SESSION_NETWORK_ERROR));
      }return i(t, e), t;
    }(f);t.ConnectToSessionNetworkError = p;var h = function (e) {
      function t(e, r) {
        n(this, t);return o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e || "OpenTok failed to find media devices for this browser.", r || a.ErrorNames.MEDIA_DEVICE_ERROR));
      }return i(t, e), t;
    }(u);t.MediaDeviceError = h;var E = function (e) {
      function t() {
        return n(this, t), o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, "Failed to obtain media devices.", a.ErrorNames.FAILED_TO_OBTAIN_MEDIA_DEVICES));
      }return i(t, e), t;
    }(h);t.FailedToObtainMediaDevices = E;var _ = function (e) {
      function t() {
        return n(this, t), o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, "This browser has no video capture devices", a.ErrorNames.NO_VIDEO_CAPTURE_DEVICES));
      }return i(t, e), t;
    }(h);t.NoVideoCaptureDevicesError = _;var O = function (e) {
      function t() {
        return n(this, t), o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, "This browser has no audio capture devices.", a.ErrorNames.NO_AUDIO_CAPTURE_DEVICES));
      }return i(t, e), t;
    }(h);t.NoAudioCaptureDevicesError = O;var v = function (e) {
      function t(e, r) {
        n(this, t);return o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e || "Encountered an unknown error while attempting to publish to a session.", r || a.ErrorNames.PUBLISH_TO_SESSION_ERROR));
      }return i(t, e), t;
    }(u);t.PublishToSessionError = v;var m = function (e) {
      function t() {
        n(this, t);return o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, "Failed to connect to media server due to messaging server connection failure", a.ErrorNames.FAILED_MESSAGING_SERVER_TEST));
      }return i(t, e), t;
    }(v);t.FailedMessagingServerTestError = m;var S = function (e) {
      function t() {
        return n(this, t), o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, "Failed to create a local publisher object.", a.ErrorNames.FAILED_TO_CREATE_LOCAL_PUBLISHER));
      }return i(t, e), t;
    }(v);t.FailedToCreateLocalPublisher = S;var T = function (e) {
      function t() {
        return n(this, t), o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, "Precall failed to publish to the session because it was not connected.", a.ErrorNames.PUBLISH_TO_SESSION_NOT_CONNECTED));
      }return i(t, e), t;
    }(v);t.PublishToSessionNotConnectedError = T;var g = function (e) {
      function t() {
        return n(this, t), o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, "Precall failed to publish to the session due a permissions error or timeout.", a.ErrorNames.PUBLISH_TO_SESSION_PERMISSION_OR_TIMEOUT_ERROR));
      }return i(t, e), t;
    }(v);t.PublishToSessionPermissionOrTimeoutError = g;var y = function (e) {
      function t() {
        return n(this, t), o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, "Precall failed to publish to the session due a network error.", a.ErrorNames.PUBLISH_TO_SESSION_NETWORK_ERROR));
      }return i(t, e), t;
    }(v);t.PublishToSessionNetworkError = y;var b = function (e) {
      function t(e) {
        n(this, t);return o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e || "Encountered an unknown error while attempting to subscribe to a session.", a.ErrorNames.SUBSCRIBE_TO_SESSION_ERROR));
      }return i(t, e), t;
    }(u);t.SubscribeToSessionError = b;var N = function (e) {
      function t() {
        return n(this, t), o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, "Failed to connect to the OpenTok logging server.", a.ErrorNames.LOGGING_SERVER_CONNECTION_ERROR));
      }return i(t, e), t;
    }(u);t.LoggingServerConnectionError = N;
  }, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var n,
        o = r(2);!function (e) {
      e.Api = "api", e.Messaging = "messaging", e.OpentokJs = "OpenTok.js", e.Media = "media", e.Logging = "logging", e.ConnectivityError = "OpenTok.js";
    }(n = t.FailureType || (t.FailureType = {}));var i = function i(e) {
      return { error: e, type: function () {
          switch (e.name) {case o.ErrorNames.API_CONNECTIVITY_ERROR:case o.ErrorNames.CONNECT_TO_SESSION_NETWORK_ERROR:
              return n.Api;case o.ErrorNames.CONNECT_TO_SESSION_ERROR:case o.ErrorNames.CONNECT_TO_SESSION_TOKEN_ERROR:case o.ErrorNames.CONNECT_TO_SESSION_ID_ERROR:
              return n.Messaging;case o.ErrorNames.MEDIA_DEVICE_ERROR:case o.ErrorNames.FAILED_TO_OBTAIN_MEDIA_DEVICES:case o.ErrorNames.NO_VIDEO_CAPTURE_DEVICES:case o.ErrorNames.NO_AUDIO_CAPTURE_DEVICES:case o.ErrorNames.FAILED_TO_CREATE_LOCAL_PUBLISHER:case o.ErrorNames.PUBLISH_TO_SESSION_NOT_CONNECTED:case o.ErrorNames.PUBLISH_TO_SESSION_PERMISSION_OR_TIMEOUT_ERROR:case o.ErrorNames.PUBLISH_TO_SESSION_NETWORK_ERROR:
              return n.OpentokJs;case o.ErrorNames.PUBLISH_TO_SESSION_ERROR:case o.ErrorNames.SUBSCRIBE_TO_SESSION_ERROR:case o.ErrorNames.FAILED_MESSAGING_SERVER_TEST:
              return n.Media;case o.ErrorNames.LOGGING_SERVER_CONNECTION_ERROR:
              return n.Logging;default:
              return n.OpentokJs;}
        }() };
    };t.mapErrors = function () {
      for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) {
        t[r] = arguments[r];
      }return t.map(i);
    };
  }, function (e, t, r) {
    "use strict";
    function n(e, t, r) {
      return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
    }Object.defineProperty(t, "__esModule", { value: !0 });var o = r(15),
        i = r(1),
        s = r(51),
        a = r(2),
        u = r(52),
        c = r(19),
        f = r(4),
        l = r(56),
        d = !1,
        p = void 0,
        h = void 0,
        E = void 0,
        _ = !1,
        O = !1;function v(e) {
      return function (t) {
        return new o(function (r, i) {
          var u = document.createElement("div");u.style.position = "fixed", u.style.bottom = "-1px", u.style.width = "1px", u.style.height = "1px", u.style.opacity = "0", document.body.appendChild(u), function (e) {
            return new o(function (t, r) {
              e.getDevices(function (e) {
                var o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];if (e) r(new s.FailedToObtainMediaDevices());else {
                  var i = o.reduce(function (e, t) {
                    var r = "audioInput" === t.kind ? "audio" : "video";return Object.assign({}, e, n({}, r, Object.assign({}, e[r], n({}, t.deviceId, t))));
                  }, { audio: {}, video: {} });Object.keys(i.audio).length ? t(i) : r(new s.NoAudioCaptureDevicesError());
                }
              });
            });
          }(e).then(function (n) {
            Object.keys(n.video).length || (d = !0);var o = { resolution: "1280x720", width: "100%", height: "100%", insertMode: "append", showControls: !1 };d && (o.videoSource = null);var c = e.initPublisher(u, o, function (e) {
              e ? i(new s.InitPublisherError(e.message)) : t.publish(c, function (e) {
                if (e) return a.errorHasName(e, a.OTErrorType.NOT_CONNECTED) ? i(new s.PublishToSessionNotConnectedError()) : a.errorHasName(e, a.OTErrorType.UNABLE_TO_PUBLISH) ? i(new s.PublishToSessionPermissionOrTimeoutError()) : i(new s.PublishToSessionError());
              });
            });c.on("streamCreated", function (e) {
              var n = t.subscribe(e.stream, u, { testNetwork: !0, insertMode: "append" }, function (e) {
                return e ? i(new s.SubscribeToSessionError(e.message)) : r(n);
              });
            });
          }).catch(i);
        });
      };
    }function m(e, t, r) {
      return new o(function (n, i) {
        (function (e, t) {
          return new o(function (r, n) {
            e.connection ? r(e) : e.connect(t, function (t) {
              t && (a.errorHasName(t, a.OTErrorType.OT_AUTHENTICATION_ERROR) ? n(new s.ConnectToSessionTokenError()) : a.errorHasName(t, a.OTErrorType.OT_INVALID_SESSION_ID) ? n(new s.ConnectToSessionSessionIdError()) : a.errorHasName(t, a.OTErrorType.OT_CONNECT_FAILED) ? n(new s.ConnectToSessionNetworkError()) : n(new s.ConnectToSessionError())), r(e);
            });
          });
        })(t, r.token).then(v(e)).then(n).catch(i);
      });
    }function S(e, t, r, n, a) {
      var l = void 0;return new o(function (o, v) {
        m(e, t, r).then(function (m) {
          if (m) try {
            var T = Object.assign({ state: new c.default(a) }, { subscriber: m }, { credentials: r }),
                g = function g() {
              var s,
                  a = function (e) {
                var t = ["bitrate", "packetLossRatio", "supported", "reason", "mos"];return e.state.stats.audio.mos = e.state.audioQualityScore(), e.state.stats.video.mos = e.state.videoQualityScore(), { audio: i.pick(t, e.state.stats.audio), video: i.pick(t.concat(["frameRate", "recommendedResolution", "recommendedFrameRate"]), e.state.stats.video) };
              }(T);d || (s = a).audio.bitrate && s.audio.bitrate > f.default.qualityThresholds.audio[0].bps && (s.audio.packetLossRatio && s.audio.packetLossRatio < f.default.qualityThresholds.audio[0].plr || 0 === s.audio.packetLossRatio) ? (t.on("sessionDisconnected", function () {
                o(a), t.off();
              }), t.disconnect()) : (d = !0, S(e, t, r, n, !0).then(function (e) {
                o(e);
              }));
            };h = function h() {
              g();
            };u.default(T.state, m, function (e, t) {
              var r;t && n && n((r = t, Object.assign({}, r, { phase: d ? "audio-only" : "audio-video" })));
            }, function (e) {
              clearTimeout(l), g();
            }), l = window.setTimeout(g, p), window.clearTimeout(E), E = window.setTimeout(function () {
              _ = !0, O && h && h();
            }, 5e3);
          } catch (e) {
            v(new s.SubscriberGetStatsError());
          } else v(new s.MissingSubscriberError());
        }).catch(v);
      });
    }t.testQuality = function (e, t, r, n, i) {
      return _ = !1, O = !1, new o(function (a, u) {
        d = !(!n || !n.audioOnly), p = d ? f.default.getStatsAudioOnlyDuration : f.default.getStatsVideoAndAudioTestDuration, n && n.timeout && (p = Math.min(p, n.timeout, 3e4));var c = function c(e) {
          h = void 0, r.logEvent({ action: "testQuality", variation: "Success" }), a(e);
        },
            E = function E(e) {
          h = void 0, r.logEvent({ action: "testQuality", variation: "Failure" }), u(e);
        };new o(function (e, t) {
          var r = l.default(),
              n = r.supported,
              o = r.browser;return n ? e() : t(new s.UnsupportedBrowserError(o));
        }).then(function () {
          var r = e.initSession(t.apiKey, t.sessionId);S(e, r, t, i).then(c).catch(E);
        }).catch(E);
      });
    }, t.stopQualityTest = function () {
      O = !0, _ && h && h();
    };
  }, function (e, t, r) {
    "use strict";
    function n(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }function o(e, t) {
      if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !t || "object" != (typeof t === "undefined" ? "undefined" : _typeof(t)) && "function" != typeof t ? e : t;
    }function i(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (typeof t === "undefined" ? "undefined" : _typeof(t)));e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
    }Object.defineProperty(t, "__esModule", { value: !0 });var s = r(5),
        a = r(2),
        u = function (e) {
      function t(e, r) {
        return n(this, t), o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, r || a.ErrorNames.QUALITY_TEST_ERROR));
      }return i(t, e), t;
    }(s.NetworkTestError);t.QualityTestError = u;var c = function (e) {
      function t(e) {
        n(this, t);var r = "Your current browser (" + e + ") does not support the audio-video quality test. Please run the test in a supported browser.";return o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, r, a.ErrorNames.UNSUPPORTED_BROWSER));
      }return i(t, e), t;
    }(u);t.UnsupportedBrowserError = c;var f = function (e) {
      function t(e, r) {
        n(this, t);return o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e || "Failed to connect to the session due to a network error.", r || a.ErrorNames.CONNECT_TO_SESSION_ERROR));
      }return i(t, e), t;
    }(u);t.ConnectToSessionError = f;var l = function (e) {
      function t() {
        return n(this, t), o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, "Failed to connect to the session due to an invalid token.", a.ErrorNames.CONNECT_TO_SESSION_TOKEN_ERROR));
      }return i(t, e), t;
    }(f);t.ConnectToSessionTokenError = l;var d = function (e) {
      function t() {
        return n(this, t), o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, "Failed to connect to the session due to an invalid session ID.", a.ErrorNames.CONNECT_TO_SESSION_ID_ERROR));
      }return i(t, e), t;
    }(f);t.ConnectToSessionSessionIdError = d;var p = function (e) {
      function t() {
        return n(this, t), o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, "Failed to connect to the session due to a network error.", a.ErrorNames.CONNECT_TO_SESSION_NETWORK_ERROR));
      }return i(t, e), t;
    }(f);t.ConnectToSessionNetworkError = p;var h = function (e) {
      function t(e, r) {
        n(this, t);return o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e || "OpenTok failed to find media devices for this browser.", r || a.ErrorNames.MEDIA_DEVICE_ERROR));
      }return i(t, e), t;
    }(u);t.MediaDeviceError = h;var E = function (e) {
      function t() {
        return n(this, t), o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, "Failed to obtain media devices.", a.ErrorNames.FAILED_TO_OBTAIN_MEDIA_DEVICES));
      }return i(t, e), t;
    }(u);t.FailedToObtainMediaDevices = E;var _ = function (e) {
      function t() {
        return n(this, t), o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, "This browser has no video capture devices", a.ErrorNames.NO_VIDEO_CAPTURE_DEVICES));
      }return i(t, e), t;
    }(u);t.NoVideoCaptureDevicesError = _;var O = function (e) {
      function t() {
        return n(this, t), o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, "This browser has no audio capture devices.", a.ErrorNames.NO_AUDIO_CAPTURE_DEVICES));
      }return i(t, e), t;
    }(u);t.NoAudioCaptureDevicesError = O;var v = function (e) {
      function t(e, r) {
        n(this, t);return o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e || "Encountered an unknown error while attempting to publish to a session.", r || a.ErrorNames.PUBLISH_TO_SESSION_ERROR));
      }return i(t, e), t;
    }(u);t.PublishToSessionError = v;var m = function (e) {
      function t(e) {
        return n(this, t), o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e || "Failed to initialize publisher.", a.ErrorNames.INIT_PUBLISHER_ERROR));
      }return i(t, e), t;
    }(v);t.InitPublisherError = m;var S = function (e) {
      function t() {
        return n(this, t), o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, "Precall failed to publish to the session because it was not connected.", a.ErrorNames.PUBLISH_TO_SESSION_NOT_CONNECTED));
      }return i(t, e), t;
    }(v);t.PublishToSessionNotConnectedError = S;var T = function (e) {
      function t() {
        return n(this, t), o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, "Precall failed to publish to the session due a permissions error or timeout.", a.ErrorNames.PUBLISH_TO_SESSION_PERMISSION_OR_TIMEOUT_ERROR));
      }return i(t, e), t;
    }(v);t.PublishToSessionPermissionOrTimeoutError = T;var g = function (e) {
      function t(e, r) {
        n(this, t);return o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e || "Encountered an unknown error while attempting to publish to a session.", r || a.ErrorNames.SUBSCRIBE_TO_SESSION_ERROR));
      }return i(t, e), t;
    }(u);t.SubscribeToSessionError = g;var y = function (e) {
      function t() {
        return n(this, t), o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, "Failed to get network stats for a subscriber.", a.ErrorNames.SUBSCRIBER_GET_STATS_ERROR));
      }return i(t, e), t;
    }(g);t.SubscriberGetStatsError = y;var b = function (e) {
      function t() {
        return n(this, t), o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, "Call checkSubscribeToSession before calling checkSubscriberQuality.", a.ErrorNames.MISSING_SUBSCRIBER_ERROR));
      }return i(t, e), t;
    }(g);t.MissingSubscriberError = b;
  }, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var n = r(53),
        o = r(54),
        i = r(19),
        s = r(1),
        a = function a(e) {
      return s.getOr(0, "packetsLost", e);
    },
        u = function u(e) {
      return a(e) + function (e) {
        return s.getOr(0, "packetsReceived", e);
      }(e);
    },
        c = function c(e, t, r) {
      return u(t[e]) - u(r[e]);
    };function f(e, t) {
      var r = s.last(t),
          n = s.nth(-2, t);if (!r || !n || !e.stream) return 1;var o = c("video", r, n),
          i = (a(r.video), a(n.video), r.timestamp, n.timestamp, function (e, t, r) {
        var n = t.timestamp - r.timestamp;return t[e] && t[e].bytesReceived ? 8 * (t[e].bytesReceived - r[e].bytesReceived) / (n / 1e3) : 0;
      }("video", r, n)),
          u = function (e) {
        var t = 2.069924867 * Math.pow(Math.log10(e), .6250223771);return Math.pow(10, t);
      }(e.stream.videoDimensions.width * e.stream.videoDimensions.height);if (i < 3e4) return 1;var f = Math.min(i, u),
          l = Math.log(f / 3e4) / Math.log(u / 3e4) * 4 + 1;return l = Math.min(l, 4.5);
    }function l(e, t) {
      var r = s.last(t),
          n = s.nth(-2, t);if (!r || !n || !e.stream) return 0;var o = c("audio", r, n);return 0 === o ? 0 : function (e, t) {
        var r, n;return (r = 94.2 - (.024 * (n = e + 20) + .11) * (n - 177.3) * (n - 177.3 < 0 ? 0 : 1) - 19.8 * Math.log(1 + 29.7 * t)) < 0 ? 1 : r > 100 ? 4.5 : 1 + .035 * r + 71e-7 * r * (r - 60) * (100 - r);
      }(0, (a(r.audio) - a(n.audio)) / o);
    }t.default = function (e, t, r, a) {
      return e.intervalId = window.setInterval(function () {
        t.getStats(function (i, u) {
          if (!u) return null;if (u.audio.bytesReceived < 0 || s.getOr(1, "video.bytesReceived", u) < 0) return e.clearInterval(), a(e);if (u && e.statsLog.push(u), r && "function" == typeof r && r(i, u), e.statsLog.length < 2) return null;e.stats = o.default(e);var c = f(t, e.statsLog);e.videoScoresLog.push(c);var d = l(t, e.statsLog);return e.audioScoresLog.push(d), e.pruneScores(), n.default(e.statsLog) ? (e.clearInterval(), a(e)) : null;
        });
      }, i.default.scoreInterval), t.on("destroyed", e.clearInterval.bind(e)), e;
    };
  }, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var n = r(17),
        o = r(18),
        i = r(4);t.default = function (e) {
      var t = n.default(e),
          r = i.default.steadyStateAllowedDelta,
          s = !0;if (t.length < i.default.minimumVideoAndAudioTestSampleSize) return !1;var a = o.default(t);return ["video", "audio"].forEach(function (e) {
        for (var t = 1; t < a[e].length; t += 1) {
          var n = a[e][t].averageBitrate,
              o = a[e][t - 1].averageBitrate;n - o > o * r && (s = !1);
        }
      }), s;
    };
  }, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var n = r(17),
        o = r(18),
        i = r(55),
        s = r(4),
        a = r(1);function u(e, t) {
      var r = 0,
          n = 0,
          o = 0;t.forEach(function (t) {
        r += t.averageBitrate, n += t.packetLossRatio, "video" === e && (o += Number(a.getOr(0, "frameRate", t)));
      });var s = { bitrate: r / t.length, packetLossRatio: n / t.length },
          u = i.default(s, e),
          c = u.supported,
          f = u.reason,
          l = u.recommendedResolution,
          d = u.recommendedFrameRate,
          p = "video" === e ? { recommendedResolution: l, recommendedFrameRate: d, frameRate: o / t.length } : {};return Object.assign({}, s, { supported: c, reason: f }, p);
    }t.default = function (e) {
      var t = n.default(e.statsLog),
          r = o.default(t);return { audio: e.hasAudioTrack() ? u("audio", r.audio) : { supported: !1, reason: s.default.strings.noMic }, video: e.audioOnlyFallback ? { supported: !1, reason: s.default.strings.bandwidthLow } : e.hasVideoTrack() ? u("video", r.video) : { supported: !1, reason: s.default.strings.noCam } };
    };
  }, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var n = r(4),
        o = r(1);t.default = function (e, t) {
      for (var r = n.default.qualityThresholds, i = e.bitrate, s = e.packetLossRatio, a = r[t], u = !1, c = 30, f = "", l = void 0, d = 0; d < a.length; d += 1) {
        var p = a[d];if (i >= p.bps && s <= p.plr) {
          u = !0, "video" === t && (l = o.get("recommendedSetting", p), c = Number(l.substring(l.indexOf("@") + 1).replace("FPS", "")), f = l.substring(0, l.indexOf("@") - 1));break;
        }
      }var h = { supported: u, recommendedFrameRate: c, recommendedResolution: f };return u ? u && "video" === t && (h.recommendedFrameRate = c, h.recommendedResolution = f) : h.reason = n.default.strings.bandwidthLow, h;
    };
  }, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var n = r(1);t.default = function () {
      var e = function () {
        var e = window && window.navigator;return "undefined" != typeof window && window.navigator ? n.get("mozGetUserMedia", e) ? "Firefox" : n.get("webkitGetUserMedia", e) ? window.hasOwnProperty("webkitRTCPeerConnection") ? e.userAgent.match(/Edg/) ? "Edge" : e.userAgent.match(/Opera|OPR\//) ? "Opera" : "Chrome" : e.userAgent.match(/Version\/(\d+).(\d+)/) ? "Safari" : "WebKit browser without WebRTC support" : e.mediaDevices && e.userAgent.match(/edge\/(\d+).(\d+)$/) ? "non-Chromium Edge" : e.userAgent.indexOf("MSIE ") > 0 || e.userAgent.match(/Trident.*rv\:11\./) ? "Internet Explorer" : e.mediaDevices && e.userAgent.match(/AppleWebKit\/(\d+)\./) ? "Safari" : "unsupported browser" : "not a browser";
      }();return { browser: e, supported: ["Chrome", "Firefox", "Internet Explorer", "Safari", "Edge"].indexOf(e) > -1 };
    };
  }, function (e, t, r) {
    var n, o, i;var s = function () {
      function e(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
        }
      }return function (t, r, n) {
        return r && e(t.prototype, r), n && e(t, n), t;
      };
    }(),
        a = Object.assign || function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t];for (var n in r) {
          Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
      }return e;
    };"function" == typeof Symbol && Symbol.iterator;o = [r(6)], void 0 === (i = "function" == typeof (n = function n(e) {
      var t = !1,
          r = function r(e) {
        return function (e) {
          if (t) return null;for (var r = e + "=", n = document.cookie.split(";"), o = void 0, i = 0; i < n.length; i++) {
            for (o = n[i]; " " === o.charAt(0);) {
              o = o.substring(1, o.length);
            }if (0 === o.indexOf(r)) return o.substring(r.length, o.length);
          }return null;
        }(e) || function (e, r, n) {
          if (t) return r;var o = "",
              i = void 0;n && ((i = new Date()).setTime(i.getTime() + 24 * n * 60 * 60 * 1e3), o = ["; expires=", i.toGMTString()].join(""));var s = [e, "=", r, o, "; path=/"].join("");return document.cookie = s, r;
        }(e, function () {
          for (var e = [], t = "0123456789abcdef", r = 0; r < 36; r++) {
            e.push(t.substr(Math.floor(16 * Math.random()), 1));
          }return e[14] = "4", e[19] = t.substr(3 & e[19] | 8, 1), e[8] = e[13] = e[18] = e[23] = "-", e.join("");
        }(), 7);
      },
          n = function n(r) {
        var n = function (e) {
          if (!e.clientVersion) throw console.log("Error. The clientVersion field cannot be null in the log entry"), new Error("The clientVersion field cannot be null in the log entry");if (!e.source) throw console.log("Error. The source field cannot be null in the log entry"), new Error("The source field cannot be null in the log entry");if (!e.componentId) throw console.log("Error. The componentId field cannot be null in the log entry"), new Error("The componentId field cannot be null in the log entry");if (!e.name) throw console.log("Error. The name field cannot be null in the log entry"), new Error("The guid field cannot be null in the log entry");var t = e.logVersion || "2",
              r = e.clientSystemTime || new Date().getTime();return a({}, e, { logVersion: t, clientSystemTime: r });
        }(r),
            o = "https://hlg.tokbox.com/prod/logging/ClientEvent";if (t) e.post(o, n);else {
          var i = new XMLHttpRequest();i.open("POST", o, !0), i.setRequestHeader("Content-type", "application/json"), i.send(JSON.stringify(n));
        }
      };return function () {
        function e(n, o) {
          (function (e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
          })(this, e), this.analyticsData = n, t = o && o.server, this.analyticsData.guid = r(n.name);
        }return s(e, [{ key: "addSessionInfo", value: function value(e) {
            if (!e.sessionId) throw console.log("Error. The sessionId field cannot be null in the log entry"), new Error("The sessionId field cannot be null in the log entry");if (this.analyticsData.sessionId = e.sessionId, !e.connectionId) throw console.log("Error. The connectionId field cannot be null in the log entry"), new Error("The connectionId field cannot be null in the log entry");if (this.analyticsData.connectionId = e.connectionId, 0 === e.partnerId) throw console.log("Error. The partnerId field cannot be null in the log entry"), new Error("The partnerId field cannot be null in the log entry");this.analyticsData.partnerId = e.partnerId;
          } }, { key: "logEvent", value: function value(e) {
            this.analyticsData = a({}, this.analyticsData, e, { clientSystemTime: new Date().getTime() }), n(this.analyticsData);
          } }]), e;
      }();
    }) ? n.apply(t, o) : n) || (e.exports = i);
  }]);
});
//# sourceMappingURL=index.js.map
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(335)(module)))

/***/ }),
/* 335 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 336 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createChart;

var _highcharts = __webpack_require__(337);

var _highcharts2 = _interopRequireDefault(_highcharts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createChart(mediaType) {
  var plotBands = {
    audio: [{
      'from': 30000,
      'to': 35000,
      'color': 'rgba(68, 170, 213, 0.1)',
      'label': {
        'text': 'Adequate',
        'style': {
          'color': '#606060',
          'fontSize': '8px'
        }
      }
    }, {
      'from': 35000,
      'to': 40000,
      'color': 'rgba(0, 0, 0, 0)',
      'label': {
        'text': 'Excellent',
        'style': {
          'color': '#606060',
          'fontSize': '8px'
        }
      }
    }],
    video: [{
      'from': 200000,
      'to': 350000,
      'color': 'rgba(68, 170, 213, 0.1)',
      'label': {
        'text': 'Adequate',
        'style': {
          'color': '#606060',
          'fontSize': '8px'
        }
      }
    }, {
      'from': 350000,
      'to': 600000,
      'color': 'rgba(0, 0, 0, 0)',
      'label': {
        'text': 'Good',
        'style': {
          'color': '#606060',
          'fontSize': '8px'
        }
      }
    }, {
      'from': 600000,
      'to': 2000000,
      'color': 'rgba(68, 170, 213, 0.1)',
      'label': {
        'text': 'Excellent',
        'style': {
          'color': '#606060',
          'fontSize': '8px'
        }
      }
    }]
  };

  return new _highcharts2.default.Chart({
    chart: {
      type: 'spline',
      renderTo: mediaType + 'Graph'
    },
    title: {
      text: mediaType + ' bitrate stability',
      style: {
        fontSize: '14px'
      }
    },
    subtitle: {
      text: '',
      style: {
        fontSize: '12px'
      }
    },
    xAxis: {
      title: {
        text: 'Time elapsed (sec)',
        style: {
          fontSize: '8px'
        }
      },
      labels: {
        style: {
          fontSize: '8px'
        }
      }
    },
    yAxis: {
      title: {
        text: 'Bitrate (KBps)',
        style: {
          fontSize: '8px'
        }
      },
      min: 0,
      minorGridLineWidth: 0,
      gridLineWidth: 0,
      alternateGridColor: null,
      plotBands: plotBands[mediaType],
      labels: {
        style: {
          fontSize: '8px'
        }
      }
    },
    tooltip: {
      headerFormat: '<b>{series.name}</b><br>',
      pointFormat: '{point.y:.2f} kBps'
    },
    plotOptions: {
      spline: {
        lineWidth: 2,
        states: {
          hover: {
            lineWidth: 3
          }
        },
        marker: {
          enabled: false
        },
        pointInterval: 1, // one hour
        color: '#0099CC'
      }
    },
    series: [{
      name: 'bitrate',
      data: [0],
      animation: false
    }],
    legend: false
  });
}

/***/ }),
/* 337 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*
 Highcharts JS v6.2.0 (2018-10-17)

 (c) 2009-2016 Torstein Honsi

 License: www.highcharts.com/license
*/
(function(S,K){ true&&module.exports?module.exports=S.document?K(S):K: true?!(__WEBPACK_AMD_DEFINE_RESULT__ = (function(){return K(S)}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):undefined})("undefined"!==typeof window?window:this,function(S){var K=function(){var a="undefined"===typeof S?window:S,C=a.document,F=a.navigator&&a.navigator.userAgent||"",I=C&&C.createElementNS&&!!C.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect,n=/(edge|msie|trident)/i.test(F)&&!a.opera,f=-1!==F.indexOf("Firefox"),
e=-1!==F.indexOf("Chrome"),u=f&&4>parseInt(F.split("Firefox/")[1],10);return a.Highcharts?a.Highcharts.error(16,!0):{product:"Highcharts",version:"6.2.0",deg2rad:2*Math.PI/360,doc:C,hasBidiBug:u,hasTouch:C&&void 0!==C.documentElement.ontouchstart,isMS:n,isWebKit:-1!==F.indexOf("AppleWebKit"),isFirefox:f,isChrome:e,isSafari:!e&&-1!==F.indexOf("Safari"),isTouchDevice:/(Mobile|Android|Windows Phone)/.test(F),SVG_NS:"http://www.w3.org/2000/svg",chartCount:0,seriesTypes:{},symbolSizes:{},svg:I,win:a,marginNames:["plotTop",
"marginRight","marginBottom","plotLeft"],noop:function(){},charts:[]}}();(function(a){a.timers=[];var C=a.charts,F=a.doc,I=a.win;a.error=function(n,f){n=a.isNumber(n)?"Highcharts error #"+n+": www.highcharts.com/errors/"+n:n;if(f)throw Error(n);I.console&&console.log(n)};a.Fx=function(a,f,e){this.options=f;this.elem=a;this.prop=e};a.Fx.prototype={dSetter:function(){var a=this.paths[0],f=this.paths[1],e=[],u=this.now,x=a.length,t;if(1===u)e=this.toD;else if(x===f.length&&1>u)for(;x--;)t=parseFloat(a[x]),
e[x]=isNaN(t)?f[x]:u*parseFloat(f[x]-t)+t;else e=f;this.elem.attr("d",e,null,!0)},update:function(){var a=this.elem,f=this.prop,e=this.now,u=this.options.step;if(this[f+"Setter"])this[f+"Setter"]();else a.attr?a.element&&a.attr(f,e,null,!0):a.style[f]=e+this.unit;u&&u.call(a,e,this)},run:function(n,f,e){var u=this,x=u.options,t=function(a){return t.stopped?!1:u.step(a)},w=I.requestAnimationFrame||function(a){setTimeout(a,13)},y=function(){for(var c=0;c<a.timers.length;c++)a.timers[c]()||a.timers.splice(c--,
1);a.timers.length&&w(y)};n!==f||this.elem["forceAnimate:"+this.prop]?(this.startTime=+new Date,this.start=n,this.end=f,this.unit=e,this.now=this.start,this.pos=0,t.elem=this.elem,t.prop=this.prop,t()&&1===a.timers.push(t)&&w(y)):(delete x.curAnim[this.prop],x.complete&&0===a.keys(x.curAnim).length&&x.complete.call(this.elem))},step:function(n){var f=+new Date,e,u=this.options,x=this.elem,t=u.complete,w=u.duration,y=u.curAnim;x.attr&&!x.element?n=!1:n||f>=w+this.startTime?(this.now=this.end,this.pos=
1,this.update(),e=y[this.prop]=!0,a.objectEach(y,function(a){!0!==a&&(e=!1)}),e&&t&&t.call(x),n=!1):(this.pos=u.easing((f-this.startTime)/w),this.now=this.start+(this.end-this.start)*this.pos,this.update(),n=!0);return n},initPath:function(n,f,e){function u(a){var b,k;for(d=a.length;d--;)b="M"===a[d]||"L"===a[d],k=/[a-zA-Z]/.test(a[d+3]),b&&k&&a.splice(d+1,0,a[d+1],a[d+2],a[d+1],a[d+2])}function x(a,h){for(;a.length<k;){a[0]=h[k-a.length];var c=a.slice(0,p);[].splice.apply(a,[0,0].concat(c));b&&(c=
a.slice(a.length-p),[].splice.apply(a,[a.length,0].concat(c)),d--)}a[0]="M"}function t(a,d){for(var c=(k-a.length)/p;0<c&&c--;)q=a.slice().splice(a.length/v-p,p*v),q[0]=d[k-p-c*p],h&&(q[p-6]=q[p-2],q[p-5]=q[p-1]),[].splice.apply(a,[a.length/v,0].concat(q)),b&&c--}f=f||"";var w,y=n.startX,c=n.endX,h=-1<f.indexOf("C"),p=h?7:3,k,q,d;f=f.split(" ");e=e.slice();var b=n.isArea,v=b?2:1,J;h&&(u(f),u(e));if(y&&c){for(d=0;d<y.length;d++)if(y[d]===c[0]){w=d;break}else if(y[0]===c[c.length-y.length+d]){w=d;J=
!0;break}void 0===w&&(f=[])}f.length&&a.isNumber(w)&&(k=e.length+w*v*p,J?(x(f,e),t(e,f)):(x(e,f),t(f,e)));return[f,e]},fillSetter:function(){a.Fx.prototype.strokeSetter.apply(this,arguments)},strokeSetter:function(){this.elem.attr(this.prop,a.color(this.start).tweenTo(a.color(this.end),this.pos),null,!0)}};a.merge=function(){var n,f=arguments,e,u={},x=function(e,n){"object"!==typeof e&&(e={});a.objectEach(n,function(y,c){!a.isObject(y,!0)||a.isClass(y)||a.isDOMElement(y)?e[c]=n[c]:e[c]=x(e[c]||{},
y)});return e};!0===f[0]&&(u=f[1],f=Array.prototype.slice.call(f,2));e=f.length;for(n=0;n<e;n++)u=x(u,f[n]);return u};a.pInt=function(a,f){return parseInt(a,f||10)};a.isString=function(a){return"string"===typeof a};a.isArray=function(a){a=Object.prototype.toString.call(a);return"[object Array]"===a||"[object Array Iterator]"===a};a.isObject=function(n,f){return!!n&&"object"===typeof n&&(!f||!a.isArray(n))};a.isDOMElement=function(n){return a.isObject(n)&&"number"===typeof n.nodeType};a.isClass=function(n){var f=
n&&n.constructor;return!(!a.isObject(n,!0)||a.isDOMElement(n)||!f||!f.name||"Object"===f.name)};a.isNumber=function(a){return"number"===typeof a&&!isNaN(a)&&Infinity>a&&-Infinity<a};a.erase=function(a,f){for(var e=a.length;e--;)if(a[e]===f){a.splice(e,1);break}};a.defined=function(a){return void 0!==a&&null!==a};a.attr=function(n,f,e){var u;a.isString(f)?a.defined(e)?n.setAttribute(f,e):n&&n.getAttribute&&((u=n.getAttribute(f))||"class"!==f||(u=n.getAttribute(f+"Name"))):a.defined(f)&&a.isObject(f)&&
a.objectEach(f,function(a,e){n.setAttribute(e,a)});return u};a.splat=function(n){return a.isArray(n)?n:[n]};a.syncTimeout=function(a,f,e){if(f)return setTimeout(a,f,e);a.call(0,e)};a.clearTimeout=function(n){a.defined(n)&&clearTimeout(n)};a.extend=function(a,f){var e;a||(a={});for(e in f)a[e]=f[e];return a};a.pick=function(){var a=arguments,f,e,u=a.length;for(f=0;f<u;f++)if(e=a[f],void 0!==e&&null!==e)return e};a.css=function(n,f){a.isMS&&!a.svg&&f&&void 0!==f.opacity&&(f.filter="alpha(opacity\x3d"+
100*f.opacity+")");a.extend(n.style,f)};a.createElement=function(n,f,e,u,x){n=F.createElement(n);var t=a.css;f&&a.extend(n,f);x&&t(n,{padding:0,border:"none",margin:0});e&&t(n,e);u&&u.appendChild(n);return n};a.extendClass=function(n,f){var e=function(){};e.prototype=new n;a.extend(e.prototype,f);return e};a.pad=function(a,f,e){return Array((f||2)+1-String(a).replace("-","").length).join(e||0)+a};a.relativeLength=function(a,f,e){return/%$/.test(a)?f*parseFloat(a)/100+(e||0):parseFloat(a)};a.wrap=
function(a,f,e){var n=a[f];a[f]=function(){var a=Array.prototype.slice.call(arguments),t=arguments,w=this;w.proceed=function(){n.apply(w,arguments.length?arguments:t)};a.unshift(n);a=e.apply(this,a);w.proceed=null;return a}};a.datePropsToTimestamps=function(n){a.objectEach(n,function(f,e){a.isObject(f)&&"function"===typeof f.getTime?n[e]=f.getTime():(a.isObject(f)||a.isArray(f))&&a.datePropsToTimestamps(f)})};a.formatSingle=function(n,f,e){var u=/\.([0-9])/,x=a.defaultOptions.lang;/f$/.test(n)?(e=
(e=n.match(u))?e[1]:-1,null!==f&&(f=a.numberFormat(f,e,x.decimalPoint,-1<n.indexOf(",")?x.thousandsSep:""))):f=(e||a.time).dateFormat(n,f);return f};a.format=function(n,f,e){for(var u="{",x=!1,t,w,y,c,h=[],p;n;){u=n.indexOf(u);if(-1===u)break;t=n.slice(0,u);if(x){t=t.split(":");w=t.shift().split(".");c=w.length;p=f;for(y=0;y<c;y++)p&&(p=p[w[y]]);t.length&&(p=a.formatSingle(t.join(":"),p,e));h.push(p)}else h.push(t);n=n.slice(u+1);u=(x=!x)?"}":"{"}h.push(n);return h.join("")};a.getMagnitude=function(a){return Math.pow(10,
Math.floor(Math.log(a)/Math.LN10))};a.normalizeTickInterval=function(n,f,e,u,x){var t,w=n;e=a.pick(e,1);t=n/e;f||(f=x?[1,1.2,1.5,2,2.5,3,4,5,6,8,10]:[1,2,2.5,5,10],!1===u&&(1===e?f=a.grep(f,function(a){return 0===a%1}):.1>=e&&(f=[1/e])));for(u=0;u<f.length&&!(w=f[u],x&&w*e>=n||!x&&t<=(f[u]+(f[u+1]||f[u]))/2);u++);return w=a.correctFloat(w*e,-Math.round(Math.log(.001)/Math.LN10))};a.stableSort=function(a,f){var e=a.length,n,x;for(x=0;x<e;x++)a[x].safeI=x;a.sort(function(a,e){n=f(a,e);return 0===n?
a.safeI-e.safeI:n});for(x=0;x<e;x++)delete a[x].safeI};a.arrayMin=function(a){for(var f=a.length,e=a[0];f--;)a[f]<e&&(e=a[f]);return e};a.arrayMax=function(a){for(var f=a.length,e=a[0];f--;)a[f]>e&&(e=a[f]);return e};a.destroyObjectProperties=function(n,f){a.objectEach(n,function(a,u){a&&a!==f&&a.destroy&&a.destroy();delete n[u]})};a.discardElement=function(n){var f=a.garbageBin;f||(f=a.createElement("div"));n&&f.appendChild(n);f.innerHTML=""};a.correctFloat=function(a,f){return parseFloat(a.toPrecision(f||
14))};a.setAnimation=function(n,f){f.renderer.globalAnimation=a.pick(n,f.options.chart.animation,!0)};a.animObject=function(n){return a.isObject(n)?a.merge(n):{duration:n?500:0}};a.timeUnits={millisecond:1,second:1E3,minute:6E4,hour:36E5,day:864E5,week:6048E5,month:24192E5,year:314496E5};a.numberFormat=function(n,f,e,u){n=+n||0;f=+f;var x=a.defaultOptions.lang,t=(n.toString().split(".")[1]||"").split("e")[0].length,w,y,c=n.toString().split("e");-1===f?f=Math.min(t,20):a.isNumber(f)?f&&c[1]&&0>c[1]&&
(w=f+ +c[1],0<=w?(c[0]=(+c[0]).toExponential(w).split("e")[0],f=w):(c[0]=c[0].split(".")[0]||0,n=20>f?(c[0]*Math.pow(10,c[1])).toFixed(f):0,c[1]=0)):f=2;y=(Math.abs(c[1]?c[0]:n)+Math.pow(10,-Math.max(f,t)-1)).toFixed(f);t=String(a.pInt(y));w=3<t.length?t.length%3:0;e=a.pick(e,x.decimalPoint);u=a.pick(u,x.thousandsSep);n=(0>n?"-":"")+(w?t.substr(0,w)+u:"");n+=t.substr(w).replace(/(\d{3})(?=\d)/g,"$1"+u);f&&(n+=e+y.slice(-f));c[1]&&0!==+n&&(n+="e"+c[1]);return n};Math.easeInOutSine=function(a){return-.5*
(Math.cos(Math.PI*a)-1)};a.getStyle=function(n,f,e){if("width"===f)return Math.max(0,Math.min(n.offsetWidth,n.scrollWidth)-a.getStyle(n,"padding-left")-a.getStyle(n,"padding-right"));if("height"===f)return Math.max(0,Math.min(n.offsetHeight,n.scrollHeight)-a.getStyle(n,"padding-top")-a.getStyle(n,"padding-bottom"));I.getComputedStyle||a.error(27,!0);if(n=I.getComputedStyle(n,void 0))n=n.getPropertyValue(f),a.pick(e,"opacity"!==f)&&(n=a.pInt(n));return n};a.inArray=function(n,f,e){return(a.indexOfPolyfill||
Array.prototype.indexOf).call(f,n,e)};a.grep=function(n,f){return(a.filterPolyfill||Array.prototype.filter).call(n,f)};a.find=Array.prototype.find?function(a,f){return a.find(f)}:function(a,f){var e,u=a.length;for(e=0;e<u;e++)if(f(a[e],e))return a[e]};a.some=function(n,f,e){return(a.somePolyfill||Array.prototype.some).call(n,f,e)};a.map=function(a,f){for(var e=[],u=0,x=a.length;u<x;u++)e[u]=f.call(a[u],a[u],u,a);return e};a.keys=function(n){return(a.keysPolyfill||Object.keys).call(void 0,n)};a.reduce=
function(n,f,e){return(a.reducePolyfill||Array.prototype.reduce).apply(n,2<arguments.length?[f,e]:[f])};a.offset=function(a){var f=F.documentElement;a=a.parentElement||a.parentNode?a.getBoundingClientRect():{top:0,left:0};return{top:a.top+(I.pageYOffset||f.scrollTop)-(f.clientTop||0),left:a.left+(I.pageXOffset||f.scrollLeft)-(f.clientLeft||0)}};a.stop=function(n,f){for(var e=a.timers.length;e--;)a.timers[e].elem!==n||f&&f!==a.timers[e].prop||(a.timers[e].stopped=!0)};a.each=function(n,f,e){return(a.forEachPolyfill||
Array.prototype.forEach).call(n,f,e)};a.objectEach=function(a,f,e){for(var u in a)a.hasOwnProperty(u)&&f.call(e||a[u],a[u],u,a)};a.addEvent=function(n,f,e,u){var x,t=n.addEventListener||a.addEventListenerPolyfill;x="function"===typeof n&&n.prototype?n.prototype.protoEvents=n.prototype.protoEvents||{}:n.hcEvents=n.hcEvents||{};a.Point&&n instanceof a.Point&&n.series&&n.series.chart&&(n.series.chart.runTrackerClick=!0);t&&t.call(n,f,e,!1);x[f]||(x[f]=[]);x[f].push(e);u&&a.isNumber(u.order)&&(e.order=
u.order,x[f].sort(function(a,e){return a.order-e.order}));return function(){a.removeEvent(n,f,e)}};a.removeEvent=function(n,f,e){function u(e,c){var h=n.removeEventListener||a.removeEventListenerPolyfill;h&&h.call(n,e,c,!1)}function x(e){var c,h;n.nodeName&&(f?(c={},c[f]=!0):c=e,a.objectEach(c,function(a,k){if(e[k])for(h=e[k].length;h--;)u(k,e[k][h])}))}var t,w;a.each(["protoEvents","hcEvents"],function(y){var c=n[y];c&&(f?(t=c[f]||[],e?(w=a.inArray(e,t),-1<w&&(t.splice(w,1),c[f]=t),u(f,e)):(x(c),
c[f]=[])):(x(c),n[y]={}))})};a.fireEvent=function(n,f,e,u){var x,t,w,y,c;e=e||{};F.createEvent&&(n.dispatchEvent||n.fireEvent)?(x=F.createEvent("Events"),x.initEvent(f,!0,!0),a.extend(x,e),n.dispatchEvent?n.dispatchEvent(x):n.fireEvent(f,x)):a.each(["protoEvents","hcEvents"],function(h){if(n[h])for(t=n[h][f]||[],w=t.length,e.target||a.extend(e,{preventDefault:function(){e.defaultPrevented=!0},target:n,type:f}),y=0;y<w;y++)(c=t[y])&&!1===c.call(n,e)&&e.preventDefault()});u&&!e.defaultPrevented&&u.call(n,
e)};a.animate=function(n,f,e){var u,x="",t,w,y;a.isObject(e)||(y=arguments,e={duration:y[2],easing:y[3],complete:y[4]});a.isNumber(e.duration)||(e.duration=400);e.easing="function"===typeof e.easing?e.easing:Math[e.easing]||Math.easeInOutSine;e.curAnim=a.merge(f);a.objectEach(f,function(c,h){a.stop(n,h);w=new a.Fx(n,e,h);t=null;"d"===h?(w.paths=w.initPath(n,n.d,f.d),w.toD=f.d,u=0,t=1):n.attr?u=n.attr(h):(u=parseFloat(a.getStyle(n,h))||0,"opacity"!==h&&(x="px"));t||(t=c);t&&t.match&&t.match("px")&&
(t=t.replace(/px/g,""));w.run(u,t,x)})};a.seriesType=function(n,f,e,u,x){var t=a.getOptions(),w=a.seriesTypes;t.plotOptions[n]=a.merge(t.plotOptions[f],e);w[n]=a.extendClass(w[f]||function(){},u);w[n].prototype.type=n;x&&(w[n].prototype.pointClass=a.extendClass(a.Point,x));return w[n]};a.uniqueKey=function(){var a=Math.random().toString(36).substring(2,9),f=0;return function(){return"highcharts-"+a+"-"+f++}}();I.jQuery&&(I.jQuery.fn.highcharts=function(){var n=[].slice.call(arguments);if(this[0])return n[0]?
(new (a[a.isString(n[0])?n.shift():"Chart"])(this[0],n[0],n[1]),this):C[a.attr(this[0],"data-highcharts-chart")]})})(K);(function(a){var C=a.each,F=a.isNumber,I=a.map,n=a.merge,f=a.pInt;a.Color=function(e){if(!(this instanceof a.Color))return new a.Color(e);this.init(e)};a.Color.prototype={parsers:[{regex:/rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]?(?:\.[0-9]+)?)\s*\)/,parse:function(a){return[f(a[1]),f(a[2]),f(a[3]),parseFloat(a[4],10)]}},{regex:/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/,
parse:function(a){return[f(a[1]),f(a[2]),f(a[3]),1]}}],names:{white:"#ffffff",black:"#000000"},init:function(e){var f,x,t,w;if((this.input=e=this.names[e&&e.toLowerCase?e.toLowerCase():""]||e)&&e.stops)this.stops=I(e.stops,function(e){return new a.Color(e[1])});else if(e&&e.charAt&&"#"===e.charAt()&&(f=e.length,e=parseInt(e.substr(1),16),7===f?x=[(e&16711680)>>16,(e&65280)>>8,e&255,1]:4===f&&(x=[(e&3840)>>4|(e&3840)>>8,(e&240)>>4|e&240,(e&15)<<4|e&15,1])),!x)for(t=this.parsers.length;t--&&!x;)w=this.parsers[t],
(f=w.regex.exec(e))&&(x=w.parse(f));this.rgba=x||[]},get:function(a){var e=this.input,f=this.rgba,t;this.stops?(t=n(e),t.stops=[].concat(t.stops),C(this.stops,function(e,y){t.stops[y]=[t.stops[y][0],e.get(a)]})):t=f&&F(f[0])?"rgb"===a||!a&&1===f[3]?"rgb("+f[0]+","+f[1]+","+f[2]+")":"a"===a?f[3]:"rgba("+f.join(",")+")":e;return t},brighten:function(a){var e,x=this.rgba;if(this.stops)C(this.stops,function(e){e.brighten(a)});else if(F(a)&&0!==a)for(e=0;3>e;e++)x[e]+=f(255*a),0>x[e]&&(x[e]=0),255<x[e]&&
(x[e]=255);return this},setOpacity:function(a){this.rgba[3]=a;return this},tweenTo:function(a,f){var e=this.rgba,t=a.rgba;t.length&&e&&e.length?(a=1!==t[3]||1!==e[3],f=(a?"rgba(":"rgb(")+Math.round(t[0]+(e[0]-t[0])*(1-f))+","+Math.round(t[1]+(e[1]-t[1])*(1-f))+","+Math.round(t[2]+(e[2]-t[2])*(1-f))+(a?","+(t[3]+(e[3]-t[3])*(1-f)):"")+")"):f=a.input||"none";return f}};a.color=function(e){return new a.Color(e)}})(K);(function(a){var C,F,I=a.addEvent,n=a.animate,f=a.attr,e=a.charts,u=a.color,x=a.css,
t=a.createElement,w=a.defined,y=a.deg2rad,c=a.destroyObjectProperties,h=a.doc,p=a.each,k=a.extend,q=a.erase,d=a.grep,b=a.hasTouch,v=a.inArray,J=a.isArray,l=a.isFirefox,L=a.isMS,B=a.isObject,D=a.isString,m=a.isWebKit,G=a.merge,A=a.noop,N=a.objectEach,E=a.pick,g=a.pInt,r=a.removeEvent,M=a.stop,O=a.svg,H=a.SVG_NS,R=a.symbolSizes,Q=a.win;C=a.SVGElement=function(){return this};k(C.prototype,{opacity:1,SVG_NS:H,textProps:"direction fontSize fontWeight fontFamily fontStyle color lineHeight width textAlign textDecoration textOverflow textOutline cursor".split(" "),
init:function(a,g){this.element="span"===g?t(g):h.createElementNS(this.SVG_NS,g);this.renderer=a},animate:function(z,g,r){g=a.animObject(E(g,this.renderer.globalAnimation,!0));0!==g.duration?(r&&(g.complete=r),n(this,z,g)):(this.attr(z,null,r),g.step&&g.step.call(this));return this},complexColor:function(z,g,r){var b=this.renderer,k,m,d,H,c,h,q,A,v,P,l,O=[],M;a.fireEvent(this.renderer,"complexColor",{args:arguments},function(){z.radialGradient?m="radialGradient":z.linearGradient&&(m="linearGradient");
m&&(d=z[m],c=b.gradients,q=z.stops,P=r.radialReference,J(d)&&(z[m]=d={x1:d[0],y1:d[1],x2:d[2],y2:d[3],gradientUnits:"userSpaceOnUse"}),"radialGradient"===m&&P&&!w(d.gradientUnits)&&(H=d,d=G(d,b.getRadialAttr(P,H),{gradientUnits:"userSpaceOnUse"})),N(d,function(a,z){"id"!==z&&O.push(z,a)}),N(q,function(a){O.push(a)}),O=O.join(","),c[O]?l=c[O].attr("id"):(d.id=l=a.uniqueKey(),c[O]=h=b.createElement(m).attr(d).add(b.defs),h.radAttr=H,h.stops=[],p(q,function(z){0===z[1].indexOf("rgba")?(k=a.color(z[1]),
A=k.get("rgb"),v=k.get("a")):(A=z[1],v=1);z=b.createElement("stop").attr({offset:z[0],"stop-color":A,"stop-opacity":v}).add(h);h.stops.push(z)})),M="url("+b.url+"#"+l+")",r.setAttribute(g,M),r.gradient=O,z.toString=function(){return M})})},applyTextOutline:function(z){var g=this.element,r,b,d,m,k;-1!==z.indexOf("contrast")&&(z=z.replace(/contrast/g,this.renderer.getContrast(g.style.fill)));z=z.split(" ");b=z[z.length-1];if((d=z[0])&&"none"!==d&&a.svg){this.fakeTS=!0;z=[].slice.call(g.getElementsByTagName("tspan"));
this.ySetter=this.xSetter;d=d.replace(/(^[\d\.]+)(.*?)$/g,function(a,z,g){return 2*z+g});for(k=z.length;k--;)r=z[k],"highcharts-text-outline"===r.getAttribute("class")&&q(z,g.removeChild(r));m=g.firstChild;p(z,function(a,z){0===z&&(a.setAttribute("x",g.getAttribute("x")),z=g.getAttribute("y"),a.setAttribute("y",z||0),null===z&&g.setAttribute("y",0));a=a.cloneNode(1);f(a,{"class":"highcharts-text-outline",fill:b,stroke:b,"stroke-width":d,"stroke-linejoin":"round"});g.insertBefore(a,m)})}},attr:function(a,
g,r,b){var z,d=this.element,m,k=this,c,H;"string"===typeof a&&void 0!==g&&(z=a,a={},a[z]=g);"string"===typeof a?k=(this[a+"Getter"]||this._defaultGetter).call(this,a,d):(N(a,function(z,g){c=!1;b||M(this,g);this.symbolName&&/^(x|y|width|height|r|start|end|innerR|anchorX|anchorY)$/.test(g)&&(m||(this.symbolAttr(a),m=!0),c=!0);!this.rotation||"x"!==g&&"y"!==g||(this.doTransform=!0);c||(H=this[g+"Setter"]||this._defaultSetter,H.call(this,z,g,d),this.shadows&&/^(width|height|visibility|x|y|d|transform|cx|cy|r)$/.test(g)&&
this.updateShadows(g,z,H))},this),this.afterSetters());r&&r.call(this);return k},afterSetters:function(){this.doTransform&&(this.updateTransform(),this.doTransform=!1)},updateShadows:function(a,g,r){for(var z=this.shadows,d=z.length;d--;)r.call(z[d],"height"===a?Math.max(g-(z[d].cutHeight||0),0):"d"===a?this.d:g,a,z[d])},addClass:function(a,g){var z=this.attr("class")||"";-1===z.indexOf(a)&&(g||(a=(z+(z?" ":"")+a).replace("  "," ")),this.attr("class",a));return this},hasClass:function(a){return-1!==
v(a,(this.attr("class")||"").split(" "))},removeClass:function(a){return this.attr("class",(this.attr("class")||"").replace(a,""))},symbolAttr:function(a){var z=this;p("x y r start end width height innerR anchorX anchorY".split(" "),function(g){z[g]=E(a[g],z[g])});z.attr({d:z.renderer.symbols[z.symbolName](z.x,z.y,z.width,z.height,z)})},clip:function(a){return this.attr("clip-path",a?"url("+this.renderer.url+"#"+a.id+")":"none")},crisp:function(a,g){var z;g=g||a.strokeWidth||0;z=Math.round(g)%2/2;
a.x=Math.floor(a.x||this.x||0)+z;a.y=Math.floor(a.y||this.y||0)+z;a.width=Math.floor((a.width||this.width||0)-2*z);a.height=Math.floor((a.height||this.height||0)-2*z);w(a.strokeWidth)&&(a.strokeWidth=g);return a},css:function(a){var z=this.styles,r={},d=this.element,b,m="",c,H=!z,h=["textOutline","textOverflow","width"];a&&a.color&&(a.fill=a.color);z&&N(a,function(a,g){a!==z[g]&&(r[g]=a,H=!0)});H&&(z&&(a=k(z,r)),a&&(null===a.width||"auto"===a.width?delete this.textWidth:"text"===d.nodeName.toLowerCase()&&
a.width&&(b=this.textWidth=g(a.width))),this.styles=a,b&&!O&&this.renderer.forExport&&delete a.width,d.namespaceURI===this.SVG_NS?(c=function(a,z){return"-"+z.toLowerCase()},N(a,function(a,z){-1===v(z,h)&&(m+=z.replace(/([A-Z])/g,c)+":"+a+";")}),m&&f(d,"style",m)):x(d,a),this.added&&("text"===this.element.nodeName&&this.renderer.buildText(this),a&&a.textOutline&&this.applyTextOutline(a.textOutline)));return this},strokeWidth:function(){return this["stroke-width"]||0},on:function(a,g){var z=this,r=
z.element;b&&"click"===a?(r.ontouchstart=function(a){z.touchEventFired=Date.now();a.preventDefault();g.call(r,a)},r.onclick=function(a){(-1===Q.navigator.userAgent.indexOf("Android")||1100<Date.now()-(z.touchEventFired||0))&&g.call(r,a)}):r["on"+a]=g;return this},setRadialReference:function(a){var z=this.renderer.gradients[this.element.gradient];this.element.radialReference=a;z&&z.radAttr&&z.animate(this.renderer.getRadialAttr(a,z.radAttr));return this},translate:function(a,g){return this.attr({translateX:a,
translateY:g})},invert:function(a){this.inverted=a;this.updateTransform();return this},updateTransform:function(){var a=this.translateX||0,g=this.translateY||0,r=this.scaleX,d=this.scaleY,b=this.inverted,m=this.rotation,k=this.matrix,c=this.element;b&&(a+=this.width,g+=this.height);a=["translate("+a+","+g+")"];w(k)&&a.push("matrix("+k.join(",")+")");b?a.push("rotate(90) scale(-1,1)"):m&&a.push("rotate("+m+" "+E(this.rotationOriginX,c.getAttribute("x"),0)+" "+E(this.rotationOriginY,c.getAttribute("y")||
0)+")");(w(r)||w(d))&&a.push("scale("+E(r,1)+" "+E(d,1)+")");a.length&&c.setAttribute("transform",a.join(" "))},toFront:function(){var a=this.element;a.parentNode.appendChild(a);return this},align:function(a,g,r){var z,d,b,m,k={};d=this.renderer;b=d.alignedObjects;var c,H;if(a){if(this.alignOptions=a,this.alignByTranslate=g,!r||D(r))this.alignTo=z=r||"renderer",q(b,this),b.push(this),r=null}else a=this.alignOptions,g=this.alignByTranslate,z=this.alignTo;r=E(r,d[z],d);z=a.align;d=a.verticalAlign;b=
(r.x||0)+(a.x||0);m=(r.y||0)+(a.y||0);"right"===z?c=1:"center"===z&&(c=2);c&&(b+=(r.width-(a.width||0))/c);k[g?"translateX":"x"]=Math.round(b);"bottom"===d?H=1:"middle"===d&&(H=2);H&&(m+=(r.height-(a.height||0))/H);k[g?"translateY":"y"]=Math.round(m);this[this.placed?"animate":"attr"](k);this.placed=!0;this.alignAttr=k;return this},getBBox:function(a,g){var z,r=this.renderer,d,b=this.element,m=this.styles,c,H=this.textStr,h,q=r.cache,A=r.cacheKeys,v=b.namespaceURI===this.SVG_NS,l;g=E(g,this.rotation);
d=g*y;c=m&&m.fontSize;w(H)&&(l=H.toString(),-1===l.indexOf("\x3c")&&(l=l.replace(/[0-9]/g,"0")),l+=["",g||0,c,this.textWidth,m&&m.textOverflow].join());l&&!a&&(z=q[l]);if(!z){if(v||r.forExport){try{(h=this.fakeTS&&function(a){p(b.querySelectorAll(".highcharts-text-outline"),function(g){g.style.display=a})})&&h("none"),z=b.getBBox?k({},b.getBBox()):{width:b.offsetWidth,height:b.offsetHeight},h&&h("")}catch(X){}if(!z||0>z.width)z={width:0,height:0}}else z=this.htmlGetBBox();r.isSVG&&(a=z.width,r=z.height,
v&&(z.height=r={"11px,17":14,"13px,20":16}[m&&m.fontSize+","+Math.round(r)]||r),g&&(z.width=Math.abs(r*Math.sin(d))+Math.abs(a*Math.cos(d)),z.height=Math.abs(r*Math.cos(d))+Math.abs(a*Math.sin(d))));if(l&&0<z.height){for(;250<A.length;)delete q[A.shift()];q[l]||A.push(l);q[l]=z}}return z},show:function(a){return this.attr({visibility:a?"inherit":"visible"})},hide:function(){return this.attr({visibility:"hidden"})},fadeOut:function(a){var g=this;g.animate({opacity:0},{duration:a||150,complete:function(){g.attr({y:-9999})}})},
add:function(a){var g=this.renderer,z=this.element,r;a&&(this.parentGroup=a);this.parentInverted=a&&a.inverted;void 0!==this.textStr&&g.buildText(this);this.added=!0;if(!a||a.handleZ||this.zIndex)r=this.zIndexSetter();r||(a?a.element:g.box).appendChild(z);if(this.onAdd)this.onAdd();return this},safeRemoveChild:function(a){var g=a.parentNode;g&&g.removeChild(a)},destroy:function(){var a=this,g=a.element||{},r=a.renderer.isSVG&&"SPAN"===g.nodeName&&a.parentGroup,d=g.ownerSVGElement,b=a.clipPath;g.onclick=
g.onmouseout=g.onmouseover=g.onmousemove=g.point=null;M(a);b&&d&&(p(d.querySelectorAll("[clip-path],[CLIP-PATH]"),function(a){var g=a.getAttribute("clip-path"),z=b.element.id;(-1<g.indexOf("(#"+z+")")||-1<g.indexOf('("#'+z+'")'))&&a.removeAttribute("clip-path")}),a.clipPath=b.destroy());if(a.stops){for(d=0;d<a.stops.length;d++)a.stops[d]=a.stops[d].destroy();a.stops=null}a.safeRemoveChild(g);for(a.destroyShadows();r&&r.div&&0===r.div.childNodes.length;)g=r.parentGroup,a.safeRemoveChild(r.div),delete r.div,
r=g;a.alignTo&&q(a.renderer.alignedObjects,a);N(a,function(g,z){delete a[z]});return null},shadow:function(a,g,r){var z=[],d,b,m=this.element,k,c,H,h;if(!a)this.destroyShadows();else if(!this.shadows){c=E(a.width,3);H=(a.opacity||.15)/c;h=this.parentInverted?"(-1,-1)":"("+E(a.offsetX,1)+", "+E(a.offsetY,1)+")";for(d=1;d<=c;d++)b=m.cloneNode(0),k=2*c+1-2*d,f(b,{stroke:a.color||"#000000","stroke-opacity":H*d,"stroke-width":k,transform:"translate"+h,fill:"none"}),b.setAttribute("class",(b.getAttribute("class")||
"")+" highcharts-shadow"),r&&(f(b,"height",Math.max(f(b,"height")-k,0)),b.cutHeight=k),g?g.element.appendChild(b):m.parentNode&&m.parentNode.insertBefore(b,m),z.push(b);this.shadows=z}return this},destroyShadows:function(){p(this.shadows||[],function(a){this.safeRemoveChild(a)},this);this.shadows=void 0},xGetter:function(a){"circle"===this.element.nodeName&&("x"===a?a="cx":"y"===a&&(a="cy"));return this._defaultGetter(a)},_defaultGetter:function(a){a=E(this[a+"Value"],this[a],this.element?this.element.getAttribute(a):
null,0);/^[\-0-9\.]+$/.test(a)&&(a=parseFloat(a));return a},dSetter:function(a,g,r){a&&a.join&&(a=a.join(" "));/(NaN| {2}|^$)/.test(a)&&(a="M 0 0");this[g]!==a&&(r.setAttribute(g,a),this[g]=a)},dashstyleSetter:function(a){var r,z=this["stroke-width"];"inherit"===z&&(z=1);if(a=a&&a.toLowerCase()){a=a.replace("shortdashdotdot","3,1,1,1,1,1,").replace("shortdashdot","3,1,1,1").replace("shortdot","1,1,").replace("shortdash","3,1,").replace("longdash","8,3,").replace(/dot/g,"1,3,").replace("dash","4,3,").replace(/,$/,
"").split(",");for(r=a.length;r--;)a[r]=g(a[r])*z;a=a.join(",").replace(/NaN/g,"none");this.element.setAttribute("stroke-dasharray",a)}},alignSetter:function(a){this.alignValue=a;this.element.setAttribute("text-anchor",{left:"start",center:"middle",right:"end"}[a])},opacitySetter:function(a,g,r){this[g]=a;r.setAttribute(g,a)},titleSetter:function(a){var g=this.element.getElementsByTagName("title")[0];g||(g=h.createElementNS(this.SVG_NS,"title"),this.element.appendChild(g));g.firstChild&&g.removeChild(g.firstChild);
g.appendChild(h.createTextNode(String(E(a),"").replace(/<[^>]*>/g,"").replace(/&lt;/g,"\x3c").replace(/&gt;/g,"\x3e")))},textSetter:function(a){a!==this.textStr&&(delete this.bBox,this.textStr=a,this.added&&this.renderer.buildText(this))},fillSetter:function(a,g,r){"string"===typeof a?r.setAttribute(g,a):a&&this.complexColor(a,g,r)},visibilitySetter:function(a,g,r){"inherit"===a?r.removeAttribute(g):this[g]!==a&&r.setAttribute(g,a);this[g]=a},zIndexSetter:function(a,r){var z=this.renderer,d=this.parentGroup,
b=(d||z).element||z.box,m,k=this.element,c,H,z=b===z.box;m=this.added;var h;w(a)?(k.setAttribute("data-z-index",a),a=+a,this[r]===a&&(m=!1)):w(this[r])&&k.removeAttribute("data-z-index");this[r]=a;if(m){(a=this.zIndex)&&d&&(d.handleZ=!0);r=b.childNodes;for(h=r.length-1;0<=h&&!c;h--)if(d=r[h],m=d.getAttribute("data-z-index"),H=!w(m),d!==k)if(0>a&&H&&!z&&!h)b.insertBefore(k,r[h]),c=!0;else if(g(m)<=a||H&&(!w(a)||0<=a))b.insertBefore(k,r[h+1]||null),c=!0;c||(b.insertBefore(k,r[z?3:0]||null),c=!0)}return c},
_defaultSetter:function(a,g,r){r.setAttribute(g,a)}});C.prototype.yGetter=C.prototype.xGetter;C.prototype.translateXSetter=C.prototype.translateYSetter=C.prototype.rotationSetter=C.prototype.verticalAlignSetter=C.prototype.rotationOriginXSetter=C.prototype.rotationOriginYSetter=C.prototype.scaleXSetter=C.prototype.scaleYSetter=C.prototype.matrixSetter=function(a,g){this[g]=a;this.doTransform=!0};C.prototype["stroke-widthSetter"]=C.prototype.strokeSetter=function(a,g,r){this[g]=a;this.stroke&&this["stroke-width"]?
(C.prototype.fillSetter.call(this,this.stroke,"stroke",r),r.setAttribute("stroke-width",this["stroke-width"]),this.hasStroke=!0):"stroke-width"===g&&0===a&&this.hasStroke&&(r.removeAttribute("stroke"),this.hasStroke=!1)};F=a.SVGRenderer=function(){this.init.apply(this,arguments)};k(F.prototype,{Element:C,SVG_NS:H,init:function(a,g,r,d,b,k){var z;d=this.createElement("svg").attr({version:"1.1","class":"highcharts-root"}).css(this.getStyle(d));z=d.element;a.appendChild(z);f(a,"dir","ltr");-1===a.innerHTML.indexOf("xmlns")&&
f(z,"xmlns",this.SVG_NS);this.isSVG=!0;this.box=z;this.boxWrapper=d;this.alignedObjects=[];this.url=(l||m)&&h.getElementsByTagName("base").length?Q.location.href.split("#")[0].replace(/<[^>]*>/g,"").replace(/([\('\)])/g,"\\$1").replace(/ /g,"%20"):"";this.createElement("desc").add().element.appendChild(h.createTextNode("Created with Highcharts 6.2.0"));this.defs=this.createElement("defs").add();this.allowHTML=k;this.forExport=b;this.gradients={};this.cache={};this.cacheKeys=[];this.imgCount=0;this.setSize(g,
r,!1);var c;l&&a.getBoundingClientRect&&(g=function(){x(a,{left:0,top:0});c=a.getBoundingClientRect();x(a,{left:Math.ceil(c.left)-c.left+"px",top:Math.ceil(c.top)-c.top+"px"})},g(),this.unSubPixelFix=I(Q,"resize",g))},getStyle:function(a){return this.style=k({fontFamily:'"Lucida Grande", "Lucida Sans Unicode", Arial, Helvetica, sans-serif',fontSize:"12px"},a)},setStyle:function(a){this.boxWrapper.css(this.getStyle(a))},isHidden:function(){return!this.boxWrapper.getBBox().width},destroy:function(){var a=
this.defs;this.box=null;this.boxWrapper=this.boxWrapper.destroy();c(this.gradients||{});this.gradients=null;a&&(this.defs=a.destroy());this.unSubPixelFix&&this.unSubPixelFix();return this.alignedObjects=null},createElement:function(a){var g=new this.Element;g.init(this,a);return g},draw:A,getRadialAttr:function(a,g){return{cx:a[0]-a[2]/2+g.cx*a[2],cy:a[1]-a[2]/2+g.cy*a[2],r:g.r*a[2]}},truncate:function(a,g,r,d,b,m,k){var z=this,c=a.rotation,H,q=d?1:0,A=(r||d).length,v=A,p=[],l=function(a){g.firstChild&&
g.removeChild(g.firstChild);a&&g.appendChild(h.createTextNode(a))},O=function(m,c){c=c||m;if(void 0===p[c])if(g.getSubStringLength)try{p[c]=b+g.getSubStringLength(0,d?c+1:c)}catch(Y){}else z.getSpanWidth&&(l(k(r||d,m)),p[c]=b+z.getSpanWidth(a,g));return p[c]},G,M;a.rotation=0;G=O(g.textContent.length);if(M=b+G>m){for(;q<=A;)v=Math.ceil((q+A)/2),d&&(H=k(d,v)),G=O(v,H&&H.length-1),q===A?q=A+1:G>m?A=v-1:q=v;0===A?l(""):r&&A===r.length-1||l(H||k(r||d,v))}d&&d.splice(0,v);a.actualWidth=G;a.rotation=c;
return M},escapes:{"\x26":"\x26amp;","\x3c":"\x26lt;","\x3e":"\x26gt;","'":"\x26#39;",'"':"\x26quot;"},buildText:function(a){var r=a.element,b=this,m=b.forExport,c=E(a.textStr,"").toString(),z=-1!==c.indexOf("\x3c"),k=r.childNodes,q,A=f(r,"x"),l=a.styles,G=a.textWidth,M=l&&l.lineHeight,e=l&&l.textOutline,B=l&&"ellipsis"===l.textOverflow,R=l&&"nowrap"===l.whiteSpace,y=l&&l.fontSize,t,D,J=k.length,l=G&&!a.added&&this.box,w=function(a){var d;d=/(px|em)$/.test(a&&a.style.fontSize)?a.style.fontSize:y||
b.style.fontSize||12;return M?g(M):b.fontMetrics(d,a.getAttribute("style")?a:r).h},Q=function(a,g){N(b.escapes,function(r,d){g&&-1!==v(r,g)||(a=a.toString().replace(new RegExp(r,"g"),d))});return a},u=function(a,g){var r;r=a.indexOf("\x3c");a=a.substring(r,a.indexOf("\x3e")-r);r=a.indexOf(g+"\x3d");if(-1!==r&&(r=r+g.length+1,g=a.charAt(r),'"'===g||"'"===g))return a=a.substring(r+1),a.substring(0,a.indexOf(g))};t=[c,B,R,M,e,y,G].join();if(t!==a.textCache){for(a.textCache=t;J--;)r.removeChild(k[J]);
z||e||B||G||-1!==c.indexOf(" ")?(l&&l.appendChild(r),c=z?c.replace(/<(b|strong)>/g,'\x3cspan style\x3d"font-weight:bold"\x3e').replace(/<(i|em)>/g,'\x3cspan style\x3d"font-style:italic"\x3e').replace(/<a/g,"\x3cspan").replace(/<\/(b|strong|i|em|a)>/g,"\x3c/span\x3e").split(/<br.*?>/g):[c],c=d(c,function(a){return""!==a}),p(c,function(g,d){var c,z=0,k=0;g=g.replace(/^\s+|\s+$/g,"").replace(/<span/g,"|||\x3cspan").replace(/<\/span>/g,"\x3c/span\x3e|||");c=g.split("|||");p(c,function(g){if(""!==g||1===
c.length){var v={},l=h.createElementNS(b.SVG_NS,"tspan"),p,M;(p=u(g,"class"))&&f(l,"class",p);if(p=u(g,"style"))p=p.replace(/(;| |^)color([ :])/,"$1fill$2"),f(l,"style",p);(M=u(g,"href"))&&!m&&(f(l,"onclick",'location.href\x3d"'+M+'"'),f(l,"class","highcharts-anchor"),x(l,{cursor:"pointer"}));g=Q(g.replace(/<[a-zA-Z\/](.|\n)*?>/g,"")||" ");if(" "!==g){l.appendChild(h.createTextNode(g));z?v.dx=0:d&&null!==A&&(v.x=A);f(l,v);r.appendChild(l);!z&&D&&(!O&&m&&x(l,{display:"block"}),f(l,"dy",w(l)));if(G){var e=
g.replace(/([^\^])-/g,"$1- ").split(" "),v=!R&&(1<c.length||d||1<e.length);M=0;var t=w(l);if(B)q=b.truncate(a,l,g,void 0,0,Math.max(0,G-parseInt(y||12,10)),function(a,g){return a.substring(0,g)+"\u2026"});else if(v)for(;e.length;)e.length&&!R&&0<M&&(l=h.createElementNS(H,"tspan"),f(l,{dy:t,x:A}),p&&f(l,"style",p),l.appendChild(h.createTextNode(e.join(" ").replace(/- /g,"-"))),r.appendChild(l)),b.truncate(a,l,null,e,0===M?k:0,G,function(a,g){return e.slice(0,g).join(" ").replace(/- /g,"-")}),k=a.actualWidth,
M++}z++}}});D=D||r.childNodes.length}),B&&q&&a.attr("title",Q(a.textStr,["\x26lt;","\x26gt;"])),l&&l.removeChild(r),e&&a.applyTextOutline&&a.applyTextOutline(e)):r.appendChild(h.createTextNode(Q(c)))}},getContrast:function(a){a=u(a).rgba;a[0]*=1;a[1]*=1.2;a[2]*=.5;return 459<a[0]+a[1]+a[2]?"#000000":"#FFFFFF"},button:function(a,g,r,d,b,c,m,H,h){var z=this.label(a,g,r,h,null,null,null,null,"button"),q=0;z.attr(G({padding:8,r:2},b));var A,v,l,p;b=G({fill:"#f7f7f7",stroke:"#cccccc","stroke-width":1,
style:{color:"#333333",cursor:"pointer",fontWeight:"normal"}},b);A=b.style;delete b.style;c=G(b,{fill:"#e6e6e6"},c);v=c.style;delete c.style;m=G(b,{fill:"#e6ebf5",style:{color:"#000000",fontWeight:"bold"}},m);l=m.style;delete m.style;H=G(b,{style:{color:"#cccccc"}},H);p=H.style;delete H.style;I(z.element,L?"mouseover":"mouseenter",function(){3!==q&&z.setState(1)});I(z.element,L?"mouseout":"mouseleave",function(){3!==q&&z.setState(q)});z.setState=function(a){1!==a&&(z.state=q=a);z.removeClass(/highcharts-button-(normal|hover|pressed|disabled)/).addClass("highcharts-button-"+
["normal","hover","pressed","disabled"][a||0]);z.attr([b,c,m,H][a||0]).css([A,v,l,p][a||0])};z.attr(b).css(k({cursor:"default"},A));return z.on("click",function(a){3!==q&&d.call(z,a)})},crispLine:function(a,g){a[1]===a[4]&&(a[1]=a[4]=Math.round(a[1])-g%2/2);a[2]===a[5]&&(a[2]=a[5]=Math.round(a[2])+g%2/2);return a},path:function(a){var g={fill:"none"};J(a)?g.d=a:B(a)&&k(g,a);return this.createElement("path").attr(g)},circle:function(a,g,r){a=B(a)?a:{x:a,y:g,r:r};g=this.createElement("circle");g.xSetter=
g.ySetter=function(a,g,r){r.setAttribute("c"+g,a)};return g.attr(a)},arc:function(a,g,r,d,b,c){B(a)?(d=a,g=d.y,r=d.r,a=d.x):d={innerR:d,start:b,end:c};a=this.symbol("arc",a,g,r,r,d);a.r=r;return a},rect:function(a,g,r,d,b,c){b=B(a)?a.r:b;var m=this.createElement("rect");a=B(a)?a:void 0===a?{}:{x:a,y:g,width:Math.max(r,0),height:Math.max(d,0)};void 0!==c&&(a.strokeWidth=c,a=m.crisp(a));a.fill="none";b&&(a.r=b);m.rSetter=function(a,g,r){f(r,{rx:a,ry:a})};return m.attr(a)},setSize:function(a,g,r){var d=
this.alignedObjects,b=d.length;this.width=a;this.height=g;for(this.boxWrapper.animate({width:a,height:g},{step:function(){this.attr({viewBox:"0 0 "+this.attr("width")+" "+this.attr("height")})},duration:E(r,!0)?void 0:0});b--;)d[b].align()},g:function(a){var g=this.createElement("g");return a?g.attr({"class":"highcharts-"+a}):g},image:function(a,g,r,d,b,c){var m={preserveAspectRatio:"none"},H,h=function(a,g){a.setAttributeNS?a.setAttributeNS("http://www.w3.org/1999/xlink","href",g):a.setAttribute("hc-svg-href",
g)},q=function(g){h(H.element,a);c.call(H,g)};1<arguments.length&&k(m,{x:g,y:r,width:d,height:b});H=this.createElement("image").attr(m);c?(h(H.element,"data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw\x3d\x3d"),m=new Q.Image,I(m,"load",q),m.src=a,m.complete&&q({})):h(H.element,a);return H},symbol:function(a,g,r,d,b,c){var m=this,H,q=/^url\((.*?)\)$/,A=q.test(a),v=!A&&(this.symbols[a]?a:"circle"),z=v&&this.symbols[v],l=w(g)&&z&&z.call(this.symbols,Math.round(g),Math.round(r),
d,b,c),G,M;z?(H=this.path(l),H.attr("fill","none"),k(H,{symbolName:v,x:g,y:r,width:d,height:b}),c&&k(H,c)):A&&(G=a.match(q)[1],H=this.image(G),H.imgwidth=E(R[G]&&R[G].width,c&&c.width),H.imgheight=E(R[G]&&R[G].height,c&&c.height),M=function(){H.attr({width:H.width,height:H.height})},p(["width","height"],function(a){H[a+"Setter"]=function(a,g){var r={},d=this["img"+g],b="width"===g?"translateX":"translateY";this[g]=a;w(d)&&(this.element&&this.element.setAttribute(g,d),this.alignByTranslate||(r[b]=
((this[g]||0)-d)/2,this.attr(r)))}}),w(g)&&H.attr({x:g,y:r}),H.isImg=!0,w(H.imgwidth)&&w(H.imgheight)?M():(H.attr({width:0,height:0}),t("img",{onload:function(){var a=e[m.chartIndex];0===this.width&&(x(this,{position:"absolute",top:"-999em"}),h.body.appendChild(this));R[G]={width:this.width,height:this.height};H.imgwidth=this.width;H.imgheight=this.height;H.element&&M();this.parentNode&&this.parentNode.removeChild(this);m.imgCount--;if(!m.imgCount&&a&&a.onload)a.onload()},src:G}),this.imgCount++));
return H},symbols:{circle:function(a,g,r,d){return this.arc(a+r/2,g+d/2,r/2,d/2,{start:0,end:2*Math.PI,open:!1})},square:function(a,g,r,d){return["M",a,g,"L",a+r,g,a+r,g+d,a,g+d,"Z"]},triangle:function(a,g,r,d){return["M",a+r/2,g,"L",a+r,g+d,a,g+d,"Z"]},"triangle-down":function(a,g,r,d){return["M",a,g,"L",a+r,g,a+r/2,g+d,"Z"]},diamond:function(a,g,r,d){return["M",a+r/2,g,"L",a+r,g+d/2,a+r/2,g+d,a,g+d/2,"Z"]},arc:function(a,g,r,d,b){var c=b.start,m=b.r||r,H=b.r||d||r,k=b.end-.001;r=b.innerR;d=E(b.open,
.001>Math.abs(b.end-b.start-2*Math.PI));var h=Math.cos(c),q=Math.sin(c),A=Math.cos(k),k=Math.sin(k);b=.001>b.end-c-Math.PI?0:1;m=["M",a+m*h,g+H*q,"A",m,H,0,b,1,a+m*A,g+H*k];w(r)&&m.push(d?"M":"L",a+r*A,g+r*k,"A",r,r,0,b,0,a+r*h,g+r*q);m.push(d?"":"Z");return m},callout:function(a,g,r,d,b){var c=Math.min(b&&b.r||0,r,d),m=c+6,H=b&&b.anchorX;b=b&&b.anchorY;var k;k=["M",a+c,g,"L",a+r-c,g,"C",a+r,g,a+r,g,a+r,g+c,"L",a+r,g+d-c,"C",a+r,g+d,a+r,g+d,a+r-c,g+d,"L",a+c,g+d,"C",a,g+d,a,g+d,a,g+d-c,"L",a,g+c,
"C",a,g,a,g,a+c,g];H&&H>r?b>g+m&&b<g+d-m?k.splice(13,3,"L",a+r,b-6,a+r+6,b,a+r,b+6,a+r,g+d-c):k.splice(13,3,"L",a+r,d/2,H,b,a+r,d/2,a+r,g+d-c):H&&0>H?b>g+m&&b<g+d-m?k.splice(33,3,"L",a,b+6,a-6,b,a,b-6,a,g+c):k.splice(33,3,"L",a,d/2,H,b,a,d/2,a,g+c):b&&b>d&&H>a+m&&H<a+r-m?k.splice(23,3,"L",H+6,g+d,H,g+d+6,H-6,g+d,a+c,g+d):b&&0>b&&H>a+m&&H<a+r-m&&k.splice(3,3,"L",H-6,g,H,g-6,H+6,g,r-c,g);return k}},clipRect:function(g,r,d,b){var c=a.uniqueKey(),m=this.createElement("clipPath").attr({id:c}).add(this.defs);
g=this.rect(g,r,d,b,0).add(m);g.id=c;g.clipPath=m;g.count=0;return g},text:function(a,g,r,d){var b={};if(d&&(this.allowHTML||!this.forExport))return this.html(a,g,r);b.x=Math.round(g||0);r&&(b.y=Math.round(r));w(a)&&(b.text=a);a=this.createElement("text").attr(b);d||(a.xSetter=function(a,g,r){var d=r.getElementsByTagName("tspan"),b,c=r.getAttribute(g),m;for(m=0;m<d.length;m++)b=d[m],b.getAttribute(g)===c&&b.setAttribute(g,a);r.setAttribute(g,a)});return a},fontMetrics:function(a,r){a=a||r&&r.style&&
r.style.fontSize||this.style&&this.style.fontSize;a=/px/.test(a)?g(a):/em/.test(a)?parseFloat(a)*(r?this.fontMetrics(null,r.parentNode).f:16):12;r=24>a?a+3:Math.round(1.2*a);return{h:r,b:Math.round(.8*r),f:a}},rotCorr:function(a,g,r){var d=a;g&&r&&(d=Math.max(d*Math.cos(g*y),4));return{x:-a/3*Math.sin(g*y),y:d}},label:function(g,d,b,c,m,H,h,q,A){var v=this,l=v.g("button"!==A&&"label"),M=l.text=v.text("",0,0,h).attr({zIndex:1}),O,z,e=0,B=3,R=0,f,y,t,D,J,E={},N,x,Q=/^url\((.*?)\)$/.test(c),u=Q,L,n,
P,T;A&&l.addClass("highcharts-"+A);u=Q;L=function(){return(N||0)%2/2};n=function(){var a=M.element.style,g={};z=(void 0===f||void 0===y||J)&&w(M.textStr)&&M.getBBox();l.width=(f||z.width||0)+2*B+R;l.height=(y||z.height||0)+2*B;x=B+v.fontMetrics(a&&a.fontSize,M).b;u&&(O||(l.box=O=v.symbols[c]||Q?v.symbol(c):v.rect(),O.addClass(("button"===A?"":"highcharts-label-box")+(A?" highcharts-"+A+"-box":"")),O.add(l),a=L(),g.x=a,g.y=(q?-x:0)+a),g.width=Math.round(l.width),g.height=Math.round(l.height),O.attr(k(g,
E)),E={})};P=function(){var a=R+B,g;g=q?0:x;w(f)&&z&&("center"===J||"right"===J)&&(a+={center:.5,right:1}[J]*(f-z.width));if(a!==M.x||g!==M.y)M.attr("x",a),M.hasBoxWidthChanged&&(z=M.getBBox(!0),n()),void 0!==g&&M.attr("y",g);M.x=a;M.y=g};T=function(a,g){O?O.attr(a,g):E[a]=g};l.onAdd=function(){M.add(l);l.attr({text:g||0===g?g:"",x:d,y:b});O&&w(m)&&l.attr({anchorX:m,anchorY:H})};l.widthSetter=function(g){f=a.isNumber(g)?g:null};l.heightSetter=function(a){y=a};l["text-alignSetter"]=function(a){J=a};
l.paddingSetter=function(a){w(a)&&a!==B&&(B=l.padding=a,P())};l.paddingLeftSetter=function(a){w(a)&&a!==R&&(R=a,P())};l.alignSetter=function(a){a={left:0,center:.5,right:1}[a];a!==e&&(e=a,z&&l.attr({x:t}))};l.textSetter=function(a){void 0!==a&&M.textSetter(a);n();P()};l["stroke-widthSetter"]=function(a,g){a&&(u=!0);N=this["stroke-width"]=a;T(g,a)};l.strokeSetter=l.fillSetter=l.rSetter=function(a,g){"r"!==g&&("fill"===g&&a&&(u=!0),l[g]=a);T(g,a)};l.anchorXSetter=function(a,g){m=l.anchorX=a;T(g,Math.round(a)-
L()-t)};l.anchorYSetter=function(a,g){H=l.anchorY=a;T(g,a-D)};l.xSetter=function(a){l.x=a;e&&(a-=e*((f||z.width)+2*B),l["forceAnimate:x"]=!0);t=Math.round(a);l.attr("translateX",t)};l.ySetter=function(a){D=l.y=Math.round(a);l.attr("translateY",D)};var V=l.css;return k(l,{css:function(a){if(a){var g={};a=G(a);p(l.textProps,function(r){void 0!==a[r]&&(g[r]=a[r],delete a[r])});M.css(g);"width"in g&&n()}return V.call(l,a)},getBBox:function(){return{width:z.width+2*B,height:z.height+2*B,x:z.x-B,y:z.y-
B}},shadow:function(a){a&&(n(),O&&O.shadow(a));return l},destroy:function(){r(l.element,"mouseenter");r(l.element,"mouseleave");M&&(M=M.destroy());O&&(O=O.destroy());C.prototype.destroy.call(l);l=v=n=P=T=null}})}});a.Renderer=F})(K);(function(a){var C=a.attr,F=a.createElement,I=a.css,n=a.defined,f=a.each,e=a.extend,u=a.isFirefox,x=a.isMS,t=a.isWebKit,w=a.pick,y=a.pInt,c=a.SVGRenderer,h=a.win,p=a.wrap;e(a.SVGElement.prototype,{htmlCss:function(a){var c="SPAN"===this.element.tagName&&a&&"width"in a,
d=w(c&&a.width,void 0);c&&(delete a.width,this.textWidth=d,this.htmlUpdateTransform());a&&"ellipsis"===a.textOverflow&&(a.whiteSpace="nowrap",a.overflow="hidden");this.styles=e(this.styles,a);I(this.element,a);return this},htmlGetBBox:function(){var a=this.element;return{x:a.offsetLeft,y:a.offsetTop,width:a.offsetWidth,height:a.offsetHeight}},htmlUpdateTransform:function(){if(this.added){var a=this.renderer,c=this.element,d=this.translateX||0,b=this.translateY||0,h=this.x||0,p=this.y||0,l=this.textAlign||
"left",e={left:0,center:.5,right:1}[l],B=this.styles,t=B&&B.whiteSpace;I(c,{marginLeft:d,marginTop:b});this.shadows&&f(this.shadows,function(a){I(a,{marginLeft:d+1,marginTop:b+1})});this.inverted&&f(c.childNodes,function(d){a.invertChild(d,c)});if("SPAN"===c.tagName){var B=this.rotation,m=this.textWidth&&y(this.textWidth),G=[B,l,c.innerHTML,this.textWidth,this.textAlign].join(),A;(A=m!==this.oldTextWidth)&&!(A=m>this.oldTextWidth)&&((A=this.textPxLength)||(I(c,{width:"",whiteSpace:t||"nowrap"}),A=
c.offsetWidth),A=A>m);A&&/[ \-]/.test(c.textContent||c.innerText)?(I(c,{width:m+"px",display:"block",whiteSpace:t||"normal"}),this.oldTextWidth=m,this.hasBoxWidthChanged=!0):this.hasBoxWidthChanged=!1;G!==this.cTT&&(t=a.fontMetrics(c.style.fontSize).b,!n(B)||B===(this.oldRotation||0)&&l===this.oldAlign||this.setSpanRotation(B,e,t),this.getSpanCorrection(!n(B)&&this.textPxLength||c.offsetWidth,t,e,B,l));I(c,{left:h+(this.xCorr||0)+"px",top:p+(this.yCorr||0)+"px"});this.cTT=G;this.oldRotation=B;this.oldAlign=
l}}else this.alignOnAdd=!0},setSpanRotation:function(a,c,d){var b={},k=this.renderer.getTransformKey();b[k]=b.transform="rotate("+a+"deg)";b[k+(u?"Origin":"-origin")]=b.transformOrigin=100*c+"% "+d+"px";I(this.element,b)},getSpanCorrection:function(a,c,d){this.xCorr=-a*d;this.yCorr=-c}});e(c.prototype,{getTransformKey:function(){return x&&!/Edge/.test(h.navigator.userAgent)?"-ms-transform":t?"-webkit-transform":u?"MozTransform":h.opera?"-o-transform":""},html:function(a,c,d){var b=this.createElement("span"),
k=b.element,h=b.renderer,l=h.isSVG,q=function(a,d){f(["opacity","visibility"],function(b){p(a,b+"Setter",function(a,b,c,m){a.call(this,b,c,m);d[c]=b})});a.addedSetters=!0};b.textSetter=function(a){a!==k.innerHTML&&delete this.bBox;this.textStr=a;k.innerHTML=w(a,"");b.doTransform=!0};l&&q(b,b.element.style);b.xSetter=b.ySetter=b.alignSetter=b.rotationSetter=function(a,d){"align"===d&&(d="textAlign");b[d]=a;b.doTransform=!0};b.afterSetters=function(){this.doTransform&&(this.htmlUpdateTransform(),this.doTransform=
!1)};b.attr({text:a,x:Math.round(c),y:Math.round(d)}).css({fontFamily:this.style.fontFamily,fontSize:this.style.fontSize,position:"absolute"});k.style.whiteSpace="nowrap";b.css=b.htmlCss;l&&(b.add=function(a){var d,c=h.box.parentNode,l=[];if(this.parentGroup=a){if(d=a.div,!d){for(;a;)l.push(a),a=a.parentGroup;f(l.reverse(),function(a){function m(g,d){a[d]=g;"translateX"===d?k.left=g+"px":k.top=g+"px";a.doTransform=!0}var k,g=C(a.element,"class");g&&(g={className:g});d=a.div=a.div||F("div",g,{position:"absolute",
left:(a.translateX||0)+"px",top:(a.translateY||0)+"px",display:a.display,opacity:a.opacity,pointerEvents:a.styles&&a.styles.pointerEvents},d||c);k=d.style;e(a,{classSetter:function(a){return function(g){this.element.setAttribute("class",g);a.className=g}}(d),on:function(){l[0].div&&b.on.apply({element:l[0].div},arguments);return a},translateXSetter:m,translateYSetter:m});a.addedSetters||q(a,k)})}}else d=c;d.appendChild(k);b.added=!0;b.alignOnAdd&&b.htmlUpdateTransform();return b});return b}})})(K);
(function(a){var C=a.defined,F=a.each,I=a.extend,n=a.merge,f=a.pick,e=a.timeUnits,u=a.win;a.Time=function(a){this.update(a,!1)};a.Time.prototype={defaultOptions:{},update:function(a){var e=f(a&&a.useUTC,!0),w=this;this.options=a=n(!0,this.options||{},a);this.Date=a.Date||u.Date;this.timezoneOffset=(this.useUTC=e)&&a.timezoneOffset;this.getTimezoneOffset=this.timezoneOffsetFunction();(this.variableTimezone=!(e&&!a.getTimezoneOffset&&!a.timezone))||this.timezoneOffset?(this.get=function(a,c){var h=
c.getTime(),p=h-w.getTimezoneOffset(c);c.setTime(p);a=c["getUTC"+a]();c.setTime(h);return a},this.set=function(a,c,h){var p;if("Milliseconds"===a||"Seconds"===a||"Minutes"===a&&0===c.getTimezoneOffset()%60)c["set"+a](h);else p=w.getTimezoneOffset(c),p=c.getTime()-p,c.setTime(p),c["setUTC"+a](h),a=w.getTimezoneOffset(c),p=c.getTime()+a,c.setTime(p)}):e?(this.get=function(a,c){return c["getUTC"+a]()},this.set=function(a,c,h){return c["setUTC"+a](h)}):(this.get=function(a,c){return c["get"+a]()},this.set=
function(a,c,h){return c["set"+a](h)})},makeTime:function(e,t,w,y,c,h){var p,k,q;this.useUTC?(p=this.Date.UTC.apply(0,arguments),k=this.getTimezoneOffset(p),p+=k,q=this.getTimezoneOffset(p),k!==q?p+=q-k:k-36E5!==this.getTimezoneOffset(p-36E5)||a.isSafari||(p-=36E5)):p=(new this.Date(e,t,f(w,1),f(y,0),f(c,0),f(h,0))).getTime();return p},timezoneOffsetFunction:function(){var e=this,f=this.options,w=u.moment;if(!this.useUTC)return function(a){return 6E4*(new Date(a)).getTimezoneOffset()};if(f.timezone){if(w)return function(a){return 6E4*
-w.tz(a,f.timezone).utcOffset()};a.error(25)}return this.useUTC&&f.getTimezoneOffset?function(a){return 6E4*f.getTimezoneOffset(a)}:function(){return 6E4*(e.timezoneOffset||0)}},dateFormat:function(e,f,w){if(!a.defined(f)||isNaN(f))return a.defaultOptions.lang.invalidDate||"";e=a.pick(e,"%Y-%m-%d %H:%M:%S");var t=this,c=new this.Date(f),h=this.get("Hours",c),p=this.get("Day",c),k=this.get("Date",c),q=this.get("Month",c),d=this.get("FullYear",c),b=a.defaultOptions.lang,v=b.weekdays,J=b.shortWeekdays,
l=a.pad,c=a.extend({a:J?J[p]:v[p].substr(0,3),A:v[p],d:l(k),e:l(k,2," "),w:p,b:b.shortMonths[q],B:b.months[q],m:l(q+1),o:q+1,y:d.toString().substr(2,2),Y:d,H:l(h),k:h,I:l(h%12||12),l:h%12||12,M:l(t.get("Minutes",c)),p:12>h?"AM":"PM",P:12>h?"am":"pm",S:l(c.getSeconds()),L:l(Math.floor(f%1E3),3)},a.dateFormats);a.objectEach(c,function(a,d){for(;-1!==e.indexOf("%"+d);)e=e.replace("%"+d,"function"===typeof a?a.call(t,f):a)});return w?e.substr(0,1).toUpperCase()+e.substr(1):e},resolveDTLFormat:function(e){return a.isObject(e,
!0)?e:(e=a.splat(e),{main:e[0],from:e[1],to:e[2]})},getTimeTicks:function(a,t,w,y){var c=this,h=[],p,k={},q;p=new c.Date(t);var d=a.unitRange,b=a.count||1,v;y=f(y,1);if(C(t)){c.set("Milliseconds",p,d>=e.second?0:b*Math.floor(c.get("Milliseconds",p)/b));d>=e.second&&c.set("Seconds",p,d>=e.minute?0:b*Math.floor(c.get("Seconds",p)/b));d>=e.minute&&c.set("Minutes",p,d>=e.hour?0:b*Math.floor(c.get("Minutes",p)/b));d>=e.hour&&c.set("Hours",p,d>=e.day?0:b*Math.floor(c.get("Hours",p)/b));d>=e.day&&c.set("Date",
p,d>=e.month?1:b*Math.floor(c.get("Date",p)/b));d>=e.month&&(c.set("Month",p,d>=e.year?0:b*Math.floor(c.get("Month",p)/b)),q=c.get("FullYear",p));d>=e.year&&c.set("FullYear",p,q-q%b);d===e.week&&(q=c.get("Day",p),c.set("Date",p,c.get("Date",p)-q+y+(q<y?-7:0)));q=c.get("FullYear",p);y=c.get("Month",p);var J=c.get("Date",p),l=c.get("Hours",p);t=p.getTime();c.variableTimezone&&(v=w-t>4*e.month||c.getTimezoneOffset(t)!==c.getTimezoneOffset(w));t=p.getTime();for(p=1;t<w;)h.push(t),t=d===e.year?c.makeTime(q+
p*b,0):d===e.month?c.makeTime(q,y+p*b):!v||d!==e.day&&d!==e.week?v&&d===e.hour&&1<b?c.makeTime(q,y,J,l+p*b):t+d*b:c.makeTime(q,y,J+p*b*(d===e.day?1:7)),p++;h.push(t);d<=e.hour&&1E4>h.length&&F(h,function(a){0===a%18E5&&"000000000"===c.dateFormat("%H%M%S%L",a)&&(k[a]="day")})}h.info=I(a,{higherRanks:k,totalRange:d*b});return h}}})(K);(function(a){var C=a.color,F=a.merge;a.defaultOptions={colors:"#7cb5ec #434348 #90ed7d #f7a35c #8085e9 #f15c80 #e4d354 #2b908f #f45b5b #91e8e1".split(" "),symbols:["circle",
"diamond","square","triangle","triangle-down"],lang:{loading:"Loading...",months:"January February March April May June July August September October November December".split(" "),shortMonths:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),weekdays:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),decimalPoint:".",numericSymbols:"kMGTPE".split(""),resetZoom:"Reset zoom",resetZoomTitle:"Reset zoom level 1:1",thousandsSep:" "},global:{},time:a.Time.prototype.defaultOptions,
chart:{borderRadius:0,defaultSeriesType:"line",ignoreHiddenSeries:!0,spacing:[10,10,15,10],resetZoomButton:{theme:{zIndex:6},position:{align:"right",x:-10,y:10}},width:null,height:null,borderColor:"#335cad",backgroundColor:"#ffffff",plotBorderColor:"#cccccc"},title:{text:"Chart title",align:"center",margin:15,widthAdjust:-44},subtitle:{text:"",align:"center",widthAdjust:-44},plotOptions:{},labels:{style:{position:"absolute",color:"#333333"}},legend:{enabled:!0,align:"center",alignColumns:!0,layout:"horizontal",
labelFormatter:function(){return this.name},borderColor:"#999999",borderRadius:0,navigation:{activeColor:"#003399",inactiveColor:"#cccccc"},itemStyle:{color:"#333333",fontSize:"12px",fontWeight:"bold",textOverflow:"ellipsis"},itemHoverStyle:{color:"#000000"},itemHiddenStyle:{color:"#cccccc"},shadow:!1,itemCheckboxStyle:{position:"absolute",width:"13px",height:"13px"},squareSymbol:!0,symbolPadding:5,verticalAlign:"bottom",x:0,y:0,title:{style:{fontWeight:"bold"}}},loading:{labelStyle:{fontWeight:"bold",
position:"relative",top:"45%"},style:{position:"absolute",backgroundColor:"#ffffff",opacity:.5,textAlign:"center"}},tooltip:{enabled:!0,animation:a.svg,borderRadius:3,dateTimeLabelFormats:{millisecond:"%A, %b %e, %H:%M:%S.%L",second:"%A, %b %e, %H:%M:%S",minute:"%A, %b %e, %H:%M",hour:"%A, %b %e, %H:%M",day:"%A, %b %e, %Y",week:"Week from %A, %b %e, %Y",month:"%B %Y",year:"%Y"},footerFormat:"",padding:8,snap:a.isTouchDevice?25:10,backgroundColor:C("#f7f7f7").setOpacity(.85).get(),borderWidth:1,headerFormat:'\x3cspan style\x3d"font-size: 10px"\x3e{point.key}\x3c/span\x3e\x3cbr/\x3e',
pointFormat:'\x3cspan style\x3d"color:{point.color}"\x3e\u25cf\x3c/span\x3e {series.name}: \x3cb\x3e{point.y}\x3c/b\x3e\x3cbr/\x3e',shadow:!0,style:{color:"#333333",cursor:"default",fontSize:"12px",pointerEvents:"none",whiteSpace:"nowrap"}},credits:{enabled:!0,href:"https://www.highcharts.com",position:{align:"right",x:-10,verticalAlign:"bottom",y:-5},style:{cursor:"pointer",color:"#999999",fontSize:"9px"},text:"Highcharts.com"}};a.setOptions=function(C){a.defaultOptions=F(!0,a.defaultOptions,C);
a.time.update(F(a.defaultOptions.global,a.defaultOptions.time),!1);return a.defaultOptions};a.getOptions=function(){return a.defaultOptions};a.defaultPlotOptions=a.defaultOptions.plotOptions;a.time=new a.Time(F(a.defaultOptions.global,a.defaultOptions.time));a.dateFormat=function(C,n,f){return a.time.dateFormat(C,n,f)}})(K);(function(a){var C=a.correctFloat,F=a.defined,I=a.destroyObjectProperties,n=a.fireEvent,f=a.isNumber,e=a.merge,u=a.pick,x=a.deg2rad;a.Tick=function(a,e,f,c,h){this.axis=a;this.pos=
e;this.type=f||"";this.isNewLabel=this.isNew=!0;this.parameters=h||{};this.tickmarkOffset=this.parameters.tickmarkOffset;this.options=this.parameters.options;f||c||this.addLabel()};a.Tick.prototype={addLabel:function(){var f=this,w=f.axis,y=w.options,c=w.chart,h=w.categories,p=w.names,k=f.pos,q=u(f.options&&f.options.labels,y.labels),d=w.tickPositions,b=k===d[0],v=k===d[d.length-1],h=this.parameters.category||(h?u(h[k],p[k],k):k),J=f.label,d=d.info,l,n,B,D;w.isDatetimeAxis&&d&&(n=c.time.resolveDTLFormat(y.dateTimeLabelFormats[!y.grid&&
d.higherRanks[k]||d.unitName]),l=n.main);f.isFirst=b;f.isLast=v;f.formatCtx={axis:w,chart:c,isFirst:b,isLast:v,dateTimeLabelFormat:l,tickPositionInfo:d,value:w.isLog?C(w.lin2log(h)):h,pos:k};y=w.labelFormatter.call(f.formatCtx,this.formatCtx);if(D=n&&n.list)f.shortenLabel=function(){for(B=0;B<D.length;B++)if(J.attr({text:w.labelFormatter.call(a.extend(f.formatCtx,{dateTimeLabelFormat:D[B]}))}),J.getBBox().width<w.getSlotWidth(f)-2*u(q.padding,5))return;J.attr({text:""})};if(F(J))J&&J.textStr!==y&&
(!J.textWidth||q.style&&q.style.width||J.styles.width||J.css({width:null}),J.attr({text:y}));else{if(f.label=J=F(y)&&q.enabled?c.renderer.text(y,0,0,q.useHTML).css(e(q.style)).add(w.labelGroup):null)J.textPxLength=J.getBBox().width;f.rotation=0}},getLabelSize:function(){return this.label?this.label.getBBox()[this.axis.horiz?"height":"width"]:0},handleOverflow:function(a){var e=this.axis,f=e.options.labels,c=a.x,h=e.chart.chartWidth,p=e.chart.spacing,k=u(e.labelLeft,Math.min(e.pos,p[3])),p=u(e.labelRight,
Math.max(e.isRadial?0:e.pos+e.len,h-p[1])),q=this.label,d=this.rotation,b={left:0,center:.5,right:1}[e.labelAlign||q.attr("align")],v=q.getBBox().width,J=e.getSlotWidth(this),l=J,t=1,B,D={};if(d||"justify"!==u(f.overflow,"justify"))0>d&&c-b*v<k?B=Math.round(c/Math.cos(d*x)-k):0<d&&c+b*v>p&&(B=Math.round((h-c)/Math.cos(d*x)));else if(h=c+(1-b)*v,c-b*v<k?l=a.x+l*(1-b)-k:h>p&&(l=p-a.x+l*b,t=-1),l=Math.min(J,l),l<J&&"center"===e.labelAlign&&(a.x+=t*(J-l-b*(J-Math.min(v,l)))),v>l||e.autoRotation&&(q.styles||
{}).width)B=l;B&&(this.shortenLabel?this.shortenLabel():(D.width=B,(f.style||{}).textOverflow||(D.textOverflow="ellipsis"),q.css(D)))},getPosition:function(e,f,y,c){var h=this.axis,p=h.chart,k=c&&p.oldChartHeight||p.chartHeight;e={x:e?a.correctFloat(h.translate(f+y,null,null,c)+h.transB):h.left+h.offset+(h.opposite?(c&&p.oldChartWidth||p.chartWidth)-h.right-h.left:0),y:e?k-h.bottom+h.offset-(h.opposite?h.height:0):a.correctFloat(k-h.translate(f+y,null,null,c)-h.transB)};n(this,"afterGetPosition",
{pos:e});return e},getLabelPosition:function(a,e,f,c,h,p,k,q){var d=this.axis,b=d.transA,v=d.reversed,J=d.staggerLines,l=d.tickRotCorr||{x:0,y:0},t=h.y,B=c||d.reserveSpaceDefault?0:-d.labelOffset*("center"===d.labelAlign?.5:1),D={};F(t)||(t=0===d.side?f.rotation?-8:-f.getBBox().height:2===d.side?l.y+8:Math.cos(f.rotation*x)*(l.y-f.getBBox(!1,0).height/2));a=a+h.x+B+l.x-(p&&c?p*b*(v?-1:1):0);e=e+t-(p&&!c?p*b*(v?1:-1):0);J&&(f=k/(q||1)%J,d.opposite&&(f=J-f-1),e+=d.labelOffset/J*f);D.x=a;D.y=Math.round(e);
n(this,"afterGetLabelPosition",{pos:D});return D},getMarkPath:function(a,e,f,c,h,p){return p.crispLine(["M",a,e,"L",a+(h?0:-f),e+(h?f:0)],c)},renderGridLine:function(a,e,f){var c=this.axis,h=c.options,p=this.gridLine,k={},q=this.pos,d=this.type,b=u(this.tickmarkOffset,c.tickmarkOffset),v=c.chart.renderer,J=d?d+"Grid":"grid",l=h[J+"LineWidth"],t=h[J+"LineColor"],h=h[J+"LineDashStyle"];p||(k.stroke=t,k["stroke-width"]=l,h&&(k.dashstyle=h),d||(k.zIndex=1),a&&(e=0),this.gridLine=p=v.path().attr(k).addClass("highcharts-"+
(d?d+"-":"")+"grid-line").add(c.gridGroup));if(p&&(f=c.getPlotLinePath(q+b,p.strokeWidth()*f,a,"pass")))p[a||this.isNew?"attr":"animate"]({d:f,opacity:e})},renderMark:function(a,e,f){var c=this.axis,h=c.options,p=c.chart.renderer,k=this.type,q=k?k+"Tick":"tick",d=c.tickSize(q),b=this.mark,v=!b,J=a.x;a=a.y;var l=u(h[q+"Width"],!k&&c.isXAxis?1:0),h=h[q+"Color"];d&&(c.opposite&&(d[0]=-d[0]),v&&(this.mark=b=p.path().addClass("highcharts-"+(k?k+"-":"")+"tick").add(c.axisGroup),b.attr({stroke:h,"stroke-width":l})),
b[v?"attr":"animate"]({d:this.getMarkPath(J,a,d[0],b.strokeWidth()*f,c.horiz,p),opacity:e}))},renderLabel:function(a,e,y,c){var h=this.axis,p=h.horiz,k=h.options,q=this.label,d=k.labels,b=d.step,h=u(this.tickmarkOffset,h.tickmarkOffset),v=!0,J=a.x;a=a.y;q&&f(J)&&(q.xy=a=this.getLabelPosition(J,a,q,p,d,h,c,b),this.isFirst&&!this.isLast&&!u(k.showFirstLabel,1)||this.isLast&&!this.isFirst&&!u(k.showLastLabel,1)?v=!1:!p||d.step||d.rotation||e||0===y||this.handleOverflow(a),b&&c%b&&(v=!1),v&&f(a.y)?(a.opacity=
y,q[this.isNewLabel?"attr":"animate"](a),this.isNewLabel=!1):(q.attr("y",-9999),this.isNewLabel=!0))},render:function(e,f,y){var c=this.axis,h=c.horiz,p=this.pos,k=u(this.tickmarkOffset,c.tickmarkOffset),p=this.getPosition(h,p,k,f),k=p.x,q=p.y,c=h&&k===c.pos+c.len||!h&&q===c.pos?-1:1;y=u(y,1);this.isActive=!0;this.renderGridLine(f,y,c);this.renderMark(p,y,c);this.renderLabel(p,f,y,e);this.isNew=!1;a.fireEvent(this,"afterRender")},destroy:function(){I(this,this.axis)}}})(K);var W=function(a){var C=
a.addEvent,F=a.animObject,I=a.arrayMax,n=a.arrayMin,f=a.color,e=a.correctFloat,u=a.defaultOptions,x=a.defined,t=a.deg2rad,w=a.destroyObjectProperties,y=a.each,c=a.extend,h=a.fireEvent,p=a.format,k=a.getMagnitude,q=a.grep,d=a.inArray,b=a.isArray,v=a.isNumber,J=a.isString,l=a.merge,L=a.normalizeTickInterval,B=a.objectEach,D=a.pick,m=a.removeEvent,G=a.splat,A=a.syncTimeout,N=a.Tick,E=function(){this.init.apply(this,arguments)};a.extend(E.prototype,{defaultOptions:{dateTimeLabelFormats:{millisecond:{main:"%H:%M:%S.%L",
range:!1},second:{main:"%H:%M:%S",range:!1},minute:{main:"%H:%M",range:!1},hour:{main:"%H:%M",range:!1},day:{main:"%e. %b"},week:{main:"%e. %b"},month:{main:"%b '%y"},year:{main:"%Y"}},endOnTick:!1,labels:{enabled:!0,indentation:10,x:0,style:{color:"#666666",cursor:"default",fontSize:"11px"}},maxPadding:.01,minorTickLength:2,minorTickPosition:"outside",minPadding:.01,startOfWeek:1,startOnTick:!1,tickLength:10,tickPixelInterval:100,tickmarkPlacement:"between",tickPosition:"outside",title:{align:"middle",
style:{color:"#666666"}},type:"linear",minorGridLineColor:"#f2f2f2",minorGridLineWidth:1,minorTickColor:"#999999",lineColor:"#ccd6eb",lineWidth:1,gridLineColor:"#e6e6e6",tickColor:"#ccd6eb"},defaultYAxisOptions:{endOnTick:!0,maxPadding:.05,minPadding:.05,tickPixelInterval:72,showLastLabel:!0,labels:{x:-8},startOnTick:!0,title:{rotation:270,text:"Values"},stackLabels:{allowOverlap:!1,enabled:!1,formatter:function(){return a.numberFormat(this.total,-1)},style:{color:"#000000",fontSize:"11px",fontWeight:"bold",
textOutline:"1px contrast"}},gridLineWidth:1,lineWidth:0},defaultLeftAxisOptions:{labels:{x:-15},title:{rotation:270}},defaultRightAxisOptions:{labels:{x:15},title:{rotation:90}},defaultBottomAxisOptions:{labels:{autoRotation:[-45],x:0},title:{rotation:0}},defaultTopAxisOptions:{labels:{autoRotation:[-45],x:0},title:{rotation:0}},init:function(a,r){var g=r.isX,b=this;b.chart=a;b.horiz=a.inverted&&!b.isZAxis?!g:g;b.isXAxis=g;b.coll=b.coll||(g?"xAxis":"yAxis");h(this,"init",{userOptions:r});b.opposite=
r.opposite;b.side=r.side||(b.horiz?b.opposite?0:2:b.opposite?1:3);b.setOptions(r);var c=this.options,m=c.type;b.labelFormatter=c.labels.formatter||b.defaultLabelFormatter;b.userOptions=r;b.minPixelPadding=0;b.reversed=c.reversed;b.visible=!1!==c.visible;b.zoomEnabled=!1!==c.zoomEnabled;b.hasNames="category"===m||!0===c.categories;b.categories=c.categories||b.hasNames;b.names||(b.names=[],b.names.keys={});b.plotLinesAndBandsGroups={};b.isLog="logarithmic"===m;b.isDatetimeAxis="datetime"===m;b.positiveValuesOnly=
b.isLog&&!b.allowNegativeLog;b.isLinked=x(c.linkedTo);b.ticks={};b.labelEdge=[];b.minorTicks={};b.plotLinesAndBands=[];b.alternateBands={};b.len=0;b.minRange=b.userMinRange=c.minRange||c.maxZoom;b.range=c.range;b.offset=c.offset||0;b.stacks={};b.oldStacks={};b.stacksTouched=0;b.max=null;b.min=null;b.crosshair=D(c.crosshair,G(a.options.tooltip.crosshairs)[g?0:1],!1);r=b.options.events;-1===d(b,a.axes)&&(g?a.axes.splice(a.xAxis.length,0,b):a.axes.push(b),a[b.coll].push(b));b.series=b.series||[];a.inverted&&
!b.isZAxis&&g&&void 0===b.reversed&&(b.reversed=!0);B(r,function(a,g){C(b,g,a)});b.lin2log=c.linearToLogConverter||b.lin2log;b.isLog&&(b.val2lin=b.log2lin,b.lin2val=b.lin2log);h(this,"afterInit")},setOptions:function(a){this.options=l(this.defaultOptions,"yAxis"===this.coll&&this.defaultYAxisOptions,[this.defaultTopAxisOptions,this.defaultRightAxisOptions,this.defaultBottomAxisOptions,this.defaultLeftAxisOptions][this.side],l(u[this.coll],a));h(this,"afterSetOptions",{userOptions:a})},defaultLabelFormatter:function(){var g=
this.axis,r=this.value,b=g.chart.time,d=g.categories,c=this.dateTimeLabelFormat,m=u.lang,k=m.numericSymbols,m=m.numericSymbolMagnitude||1E3,h=k&&k.length,l,q=g.options.labels.format,g=g.isLog?Math.abs(r):g.tickInterval;if(q)l=p(q,this,b);else if(d)l=r;else if(c)l=b.dateFormat(c,r);else if(h&&1E3<=g)for(;h--&&void 0===l;)b=Math.pow(m,h+1),g>=b&&0===10*r%b&&null!==k[h]&&0!==r&&(l=a.numberFormat(r/b,-1)+k[h]);void 0===l&&(l=1E4<=Math.abs(r)?a.numberFormat(r,-1):a.numberFormat(r,-1,void 0,""));return l},
getSeriesExtremes:function(){var a=this,r=a.chart;h(this,"getSeriesExtremes",null,function(){a.hasVisibleSeries=!1;a.dataMin=a.dataMax=a.threshold=null;a.softThreshold=!a.isXAxis;a.buildStacks&&a.buildStacks();y(a.series,function(g){if(g.visible||!r.options.chart.ignoreHiddenSeries){var b=g.options,d=b.threshold,c;a.hasVisibleSeries=!0;a.positiveValuesOnly&&0>=d&&(d=null);if(a.isXAxis)b=g.xData,b.length&&(g=n(b),c=I(b),v(g)||g instanceof Date||(b=q(b,v),g=n(b),c=I(b)),b.length&&(a.dataMin=Math.min(D(a.dataMin,
b[0],g),g),a.dataMax=Math.max(D(a.dataMax,b[0],c),c)));else if(g.getExtremes(),c=g.dataMax,g=g.dataMin,x(g)&&x(c)&&(a.dataMin=Math.min(D(a.dataMin,g),g),a.dataMax=Math.max(D(a.dataMax,c),c)),x(d)&&(a.threshold=d),!b.softThreshold||a.positiveValuesOnly)a.softThreshold=!1}})});h(this,"afterGetSeriesExtremes")},translate:function(a,r,b,d,c,m){var g=this.linkedParent||this,k=1,H=0,l=d?g.oldTransA:g.transA;d=d?g.oldMin:g.min;var h=g.minPixelPadding;c=(g.isOrdinal||g.isBroken||g.isLog&&c)&&g.lin2val;l||
(l=g.transA);b&&(k*=-1,H=g.len);g.reversed&&(k*=-1,H-=k*(g.sector||g.len));r?(a=(a*k+H-h)/l+d,c&&(a=g.lin2val(a))):(c&&(a=g.val2lin(a)),a=v(d)?k*(a-d)*l+H+k*h+(v(m)?l*m:0):void 0);return a},toPixels:function(a,r){return this.translate(a,!1,!this.horiz,null,!0)+(r?0:this.pos)},toValue:function(a,r){return this.translate(a-(r?0:this.pos),!0,!this.horiz,null,!0)},getPlotLinePath:function(a,r,b,d,c){var g=this.chart,m=this.left,k=this.top,H,l,h=b&&g.oldChartHeight||g.chartHeight,q=b&&g.oldChartWidth||
g.chartWidth,A;H=this.transB;var e=function(a,g,r){if("pass"!==d&&a<g||a>r)d?a=Math.min(Math.max(g,a),r):A=!0;return a};c=D(c,this.translate(a,null,null,b));c=Math.min(Math.max(-1E5,c),1E5);a=b=Math.round(c+H);H=l=Math.round(h-c-H);v(c)?this.horiz?(H=k,l=h-this.bottom,a=b=e(a,m,m+this.width)):(a=m,b=q-this.right,H=l=e(H,k,k+this.height)):(A=!0,d=!1);return A&&!d?null:g.renderer.crispLine(["M",a,H,"L",b,l],r||1)},getLinearTickPositions:function(a,r,b){var g,d=e(Math.floor(r/a)*a);b=e(Math.ceil(b/a)*
a);var c=[],m;e(d+a)===d&&(m=20);if(this.single)return[r];for(r=d;r<=b;){c.push(r);r=e(r+a,m);if(r===g)break;g=r}return c},getMinorTickInterval:function(){var a=this.options;return!0===a.minorTicks?D(a.minorTickInterval,"auto"):!1===a.minorTicks?null:a.minorTickInterval},getMinorTickPositions:function(){var a=this,r=a.options,b=a.tickPositions,d=a.minorTickInterval,c=[],m=a.pointRangePadding||0,k=a.min-m,m=a.max+m,l=m-k;if(l&&l/d<a.len/3)if(a.isLog)y(this.paddedTicks,function(g,r,b){r&&c.push.apply(c,
a.getLogTickPositions(d,b[r-1],b[r],!0))});else if(a.isDatetimeAxis&&"auto"===this.getMinorTickInterval())c=c.concat(a.getTimeTicks(a.normalizeTimeTickInterval(d),k,m,r.startOfWeek));else for(r=k+(b[0]-k)%d;r<=m&&r!==c[0];r+=d)c.push(r);0!==c.length&&a.trimTicks(c);return c},adjustForMinRange:function(){var a=this.options,r=this.min,b=this.max,d,c,m,k,l,h,q,v;this.isXAxis&&void 0===this.minRange&&!this.isLog&&(x(a.min)||x(a.max)?this.minRange=null:(y(this.series,function(a){h=a.xData;for(k=q=a.xIncrement?
1:h.length-1;0<k;k--)if(l=h[k]-h[k-1],void 0===m||l<m)m=l}),this.minRange=Math.min(5*m,this.dataMax-this.dataMin)));b-r<this.minRange&&(c=this.dataMax-this.dataMin>=this.minRange,v=this.minRange,d=(v-b+r)/2,d=[r-d,D(a.min,r-d)],c&&(d[2]=this.isLog?this.log2lin(this.dataMin):this.dataMin),r=I(d),b=[r+v,D(a.max,r+v)],c&&(b[2]=this.isLog?this.log2lin(this.dataMax):this.dataMax),b=n(b),b-r<v&&(d[0]=b-v,d[1]=D(a.min,b-v),r=I(d)));this.min=r;this.max=b},getClosest:function(){var a;this.categories?a=1:y(this.series,
function(g){var r=g.closestPointRange,b=g.visible||!g.chart.options.chart.ignoreHiddenSeries;!g.noSharedTooltip&&x(r)&&b&&(a=x(a)?Math.min(a,r):r)});return a},nameToX:function(a){var g=b(this.categories),c=g?this.categories:this.names,m=a.options.x,k;a.series.requireSorting=!1;x(m)||(m=!1===this.options.uniqueNames?a.series.autoIncrement():g?d(a.name,c):D(c.keys[a.name],-1));-1===m?g||(k=c.length):k=m;void 0!==k&&(this.names[k]=a.name,this.names.keys[a.name]=k);return k},updateNames:function(){var g=
this,r=this.names;0<r.length&&(y(a.keys(r.keys),function(a){delete r.keys[a]}),r.length=0,this.minRange=this.userMinRange,y(this.series||[],function(a){a.xIncrement=null;if(!a.points||a.isDirtyData)a.processData(),a.generatePoints();y(a.points,function(r,b){var d;r.options&&(d=g.nameToX(r),void 0!==d&&d!==r.x&&(r.x=d,a.xData[b]=d))})}))},setAxisTranslation:function(a){var g=this,b=g.max-g.min,d=g.axisPointRange||0,c,m=0,k=0,l=g.linkedParent,q=!!g.categories,v=g.transA,A=g.isXAxis;if(A||q||d)c=g.getClosest(),
l?(m=l.minPointOffset,k=l.pointRangePadding):y(g.series,function(a){var b=q?1:A?D(a.options.pointRange,c,0):g.axisPointRange||0;a=a.options.pointPlacement;d=Math.max(d,b);g.single||(m=Math.max(m,J(a)?0:b/2),k=Math.max(k,"on"===a?0:b))}),l=g.ordinalSlope&&c?g.ordinalSlope/c:1,g.minPointOffset=m*=l,g.pointRangePadding=k*=l,g.pointRange=Math.min(d,b),A&&(g.closestPointRange=c);a&&(g.oldTransA=v);g.translationSlope=g.transA=v=g.staticScale||g.len/(b+k||1);g.transB=g.horiz?g.left:g.bottom;g.minPixelPadding=
v*m;h(this,"afterSetAxisTranslation")},minFromRange:function(){return this.max-this.range},setTickInterval:function(g){var b=this,d=b.chart,c=b.options,m=b.isLog,l=b.isDatetimeAxis,q=b.isXAxis,A=b.isLinked,p=c.maxPadding,f=c.minPadding,G=c.tickInterval,B=c.tickPixelInterval,J=b.categories,E=v(b.threshold)?b.threshold:null,N=b.softThreshold,w,t,u,n;l||J||A||this.getTickAmount();u=D(b.userMin,c.min);n=D(b.userMax,c.max);A?(b.linkedParent=d[b.coll][c.linkedTo],d=b.linkedParent.getExtremes(),b.min=D(d.min,
d.dataMin),b.max=D(d.max,d.dataMax),c.type!==b.linkedParent.options.type&&a.error(11,1)):(!N&&x(E)&&(b.dataMin>=E?(w=E,f=0):b.dataMax<=E&&(t=E,p=0)),b.min=D(u,w,b.dataMin),b.max=D(n,t,b.dataMax));m&&(b.positiveValuesOnly&&!g&&0>=Math.min(b.min,D(b.dataMin,b.min))&&a.error(10,1),b.min=e(b.log2lin(b.min),15),b.max=e(b.log2lin(b.max),15));b.range&&x(b.max)&&(b.userMin=b.min=u=Math.max(b.dataMin,b.minFromRange()),b.userMax=n=b.max,b.range=null);h(b,"foundExtremes");b.beforePadding&&b.beforePadding();
b.adjustForMinRange();!(J||b.axisPointRange||b.usePercentage||A)&&x(b.min)&&x(b.max)&&(d=b.max-b.min)&&(!x(u)&&f&&(b.min-=d*f),!x(n)&&p&&(b.max+=d*p));v(c.softMin)&&!v(b.userMin)&&(b.min=Math.min(b.min,c.softMin));v(c.softMax)&&!v(b.userMax)&&(b.max=Math.max(b.max,c.softMax));v(c.floor)&&(b.min=Math.max(b.min,c.floor));v(c.ceiling)&&(b.max=Math.min(b.max,c.ceiling));N&&x(b.dataMin)&&(E=E||0,!x(u)&&b.min<E&&b.dataMin>=E?b.min=E:!x(n)&&b.max>E&&b.dataMax<=E&&(b.max=E));b.tickInterval=b.min===b.max||
void 0===b.min||void 0===b.max?1:A&&!G&&B===b.linkedParent.options.tickPixelInterval?G=b.linkedParent.tickInterval:D(G,this.tickAmount?(b.max-b.min)/Math.max(this.tickAmount-1,1):void 0,J?1:(b.max-b.min)*B/Math.max(b.len,B));q&&!g&&y(b.series,function(a){a.processData(b.min!==b.oldMin||b.max!==b.oldMax)});b.setAxisTranslation(!0);b.beforeSetTickPositions&&b.beforeSetTickPositions();b.postProcessTickInterval&&(b.tickInterval=b.postProcessTickInterval(b.tickInterval));b.pointRange&&!G&&(b.tickInterval=
Math.max(b.pointRange,b.tickInterval));g=D(c.minTickInterval,b.isDatetimeAxis&&b.closestPointRange);!G&&b.tickInterval<g&&(b.tickInterval=g);l||m||G||(b.tickInterval=L(b.tickInterval,null,k(b.tickInterval),D(c.allowDecimals,!(.5<b.tickInterval&&5>b.tickInterval&&1E3<b.max&&9999>b.max)),!!this.tickAmount));this.tickAmount||(b.tickInterval=b.unsquish());this.setTickPositions()},setTickPositions:function(){var g=this.options,b,d=g.tickPositions;b=this.getMinorTickInterval();var c=g.tickPositioner,m=
g.startOnTick,k=g.endOnTick;this.tickmarkOffset=this.categories&&"between"===g.tickmarkPlacement&&1===this.tickInterval?.5:0;this.minorTickInterval="auto"===b&&this.tickInterval?this.tickInterval/5:b;this.single=this.min===this.max&&x(this.min)&&!this.tickAmount&&(parseInt(this.min,10)===this.min||!1!==g.allowDecimals);this.tickPositions=b=d&&d.slice();!b&&(!this.ordinalPositions&&(this.max-this.min)/this.tickInterval>Math.max(2*this.len,200)?(b=[this.min,this.max],a.error(19)):b=this.isDatetimeAxis?
this.getTimeTicks(this.normalizeTimeTickInterval(this.tickInterval,g.units),this.min,this.max,g.startOfWeek,this.ordinalPositions,this.closestPointRange,!0):this.isLog?this.getLogTickPositions(this.tickInterval,this.min,this.max):this.getLinearTickPositions(this.tickInterval,this.min,this.max),b.length>this.len&&(b=[b[0],b.pop()],b[0]===b[1]&&(b.length=1)),this.tickPositions=b,c&&(c=c.apply(this,[this.min,this.max])))&&(this.tickPositions=b=c);this.paddedTicks=b.slice(0);this.trimTicks(b,m,k);this.isLinked||
(this.single&&2>b.length&&(this.min-=.5,this.max+=.5),d||c||this.adjustTickAmount());h(this,"afterSetTickPositions")},trimTicks:function(a,b,d){var g=a[0],c=a[a.length-1],m=this.minPointOffset||0;if(!this.isLinked){if(b&&-Infinity!==g)this.min=g;else for(;this.min-m>a[0];)a.shift();if(d)this.max=c;else for(;this.max+m<a[a.length-1];)a.pop();0===a.length&&x(g)&&!this.options.tickPositions&&a.push((c+g)/2)}},alignToOthers:function(){var a={},b,d=this.options;!1===this.chart.options.chart.alignTicks||
!1===d.alignTicks||!1===d.startOnTick||!1===d.endOnTick||this.isLog||y(this.chart[this.coll],function(g){var d=g.options,d=[g.horiz?d.left:d.top,d.width,d.height,d.pane].join();g.series.length&&(a[d]?b=!0:a[d]=1)});return b},getTickAmount:function(){var a=this.options,b=a.tickAmount,d=a.tickPixelInterval;!x(a.tickInterval)&&this.len<d&&!this.isRadial&&!this.isLog&&a.startOnTick&&a.endOnTick&&(b=2);!b&&this.alignToOthers()&&(b=Math.ceil(this.len/d)+1);4>b&&(this.finalTickAmt=b,b=5);this.tickAmount=
b},adjustTickAmount:function(){var a=this.tickInterval,b=this.tickPositions,d=this.tickAmount,c=this.finalTickAmt,m=b&&b.length,k=D(this.threshold,this.softThreshold?0:null);if(this.hasData()){if(m<d){for(;b.length<d;)b.length%2||this.min===k?b.push(e(b[b.length-1]+a)):b.unshift(e(b[0]-a));this.transA*=(m-1)/(d-1);this.min=b[0];this.max=b[b.length-1]}else m>d&&(this.tickInterval*=2,this.setTickPositions());if(x(c)){for(a=d=b.length;a--;)(3===c&&1===a%2||2>=c&&0<a&&a<d-1)&&b.splice(a,1);this.finalTickAmt=
void 0}}},setScale:function(){var a,b;this.oldMin=this.min;this.oldMax=this.max;this.oldAxisLength=this.len;this.setAxisSize();b=this.len!==this.oldAxisLength;y(this.series,function(b){if(b.isDirtyData||b.isDirty||b.xAxis.isDirty)a=!0});b||a||this.isLinked||this.forceRedraw||this.userMin!==this.oldUserMin||this.userMax!==this.oldUserMax||this.alignToOthers()?(this.resetStacks&&this.resetStacks(),this.forceRedraw=!1,this.getSeriesExtremes(),this.setTickInterval(),this.oldUserMin=this.userMin,this.oldUserMax=
this.userMax,this.isDirty||(this.isDirty=b||this.min!==this.oldMin||this.max!==this.oldMax)):this.cleanStacks&&this.cleanStacks();h(this,"afterSetScale")},setExtremes:function(a,b,d,m,k){var g=this,r=g.chart;d=D(d,!0);y(g.series,function(a){delete a.kdTree});k=c(k,{min:a,max:b});h(g,"setExtremes",k,function(){g.userMin=a;g.userMax=b;g.eventArgs=k;d&&r.redraw(m)})},zoom:function(a,b){var g=this.dataMin,d=this.dataMax,c=this.options,m=Math.min(g,D(c.min,g)),c=Math.max(d,D(c.max,d));if(a!==this.min||
b!==this.max)this.allowZoomOutside||(x(g)&&(a<m&&(a=m),a>c&&(a=c)),x(d)&&(b<m&&(b=m),b>c&&(b=c))),this.displayBtn=void 0!==a||void 0!==b,this.setExtremes(a,b,!1,void 0,{trigger:"zoom"});return!0},setAxisSize:function(){var b=this.chart,d=this.options,c=d.offsets||[0,0,0,0],m=this.horiz,k=this.width=Math.round(a.relativeLength(D(d.width,b.plotWidth-c[3]+c[1]),b.plotWidth)),l=this.height=Math.round(a.relativeLength(D(d.height,b.plotHeight-c[0]+c[2]),b.plotHeight)),h=this.top=Math.round(a.relativeLength(D(d.top,
b.plotTop+c[0]),b.plotHeight,b.plotTop)),d=this.left=Math.round(a.relativeLength(D(d.left,b.plotLeft+c[3]),b.plotWidth,b.plotLeft));this.bottom=b.chartHeight-l-h;this.right=b.chartWidth-k-d;this.len=Math.max(m?k:l,0);this.pos=m?d:h},getExtremes:function(){var a=this.isLog;return{min:a?e(this.lin2log(this.min)):this.min,max:a?e(this.lin2log(this.max)):this.max,dataMin:this.dataMin,dataMax:this.dataMax,userMin:this.userMin,userMax:this.userMax}},getThreshold:function(a){var b=this.isLog,g=b?this.lin2log(this.min):
this.min,b=b?this.lin2log(this.max):this.max;null===a||-Infinity===a?a=g:Infinity===a?a=b:g>a?a=g:b<a&&(a=b);return this.translate(a,0,1,0,1)},autoLabelAlign:function(a){a=(D(a,0)-90*this.side+720)%360;return 15<a&&165>a?"right":195<a&&345>a?"left":"center"},tickSize:function(a){var b=this.options,g=b[a+"Length"],d=D(b[a+"Width"],"tick"===a&&this.isXAxis?1:0);if(d&&g)return"inside"===b[a+"Position"]&&(g=-g),[g,d]},labelMetrics:function(){var a=this.tickPositions&&this.tickPositions[0]||0;return this.chart.renderer.fontMetrics(this.options.labels.style&&
this.options.labels.style.fontSize,this.ticks[a]&&this.ticks[a].label)},unsquish:function(){var a=this.options.labels,b=this.horiz,d=this.tickInterval,c=d,m=this.len/(((this.categories?1:0)+this.max-this.min)/d),k,l=a.rotation,h=this.labelMetrics(),q,v=Number.MAX_VALUE,A,p=function(a){a/=m||1;a=1<a?Math.ceil(a):1;return e(a*d)};b?(A=!a.staggerLines&&!a.step&&(x(l)?[l]:m<D(a.autoRotationLimit,80)&&a.autoRotation))&&y(A,function(a){var b;if(a===l||a&&-90<=a&&90>=a)q=p(Math.abs(h.h/Math.sin(t*a))),b=
q+Math.abs(a/360),b<v&&(v=b,k=a,c=q)}):a.step||(c=p(h.h));this.autoRotation=A;this.labelRotation=D(k,l);return c},getSlotWidth:function(a){var b=this.chart,g=this.horiz,d=this.options.labels,c=Math.max(this.tickPositions.length-(this.categories?0:1),1),m=b.margin[3];return a&&a.slotWidth||g&&2>(d.step||0)&&!d.rotation&&(this.staggerLines||1)*this.len/c||!g&&(d.style&&parseInt(d.style.width,10)||m&&m-b.spacing[3]||.33*b.chartWidth)},renderUnsquish:function(){var a=this.chart,b=a.renderer,d=this.tickPositions,
c=this.ticks,m=this.options.labels,k=m&&m.style||{},l=this.horiz,h=this.getSlotWidth(),q=Math.max(1,Math.round(h-2*(m.padding||5))),v={},A=this.labelMetrics(),e=m.style&&m.style.textOverflow,p,f,G=0,B;J(m.rotation)||(v.rotation=m.rotation||0);y(d,function(a){(a=c[a])&&a.label&&a.label.textPxLength>G&&(G=a.label.textPxLength)});this.maxLabelLength=G;if(this.autoRotation)G>q&&G>A.h?v.rotation=this.labelRotation:this.labelRotation=0;else if(h&&(p=q,!e))for(f="clip",q=d.length;!l&&q--;)if(B=d[q],B=c[B].label)B.styles&&
"ellipsis"===B.styles.textOverflow?B.css({textOverflow:"clip"}):B.textPxLength>h&&B.css({width:h+"px"}),B.getBBox().height>this.len/d.length-(A.h-A.f)&&(B.specificTextOverflow="ellipsis");v.rotation&&(p=G>.5*a.chartHeight?.33*a.chartHeight:G,e||(f="ellipsis"));if(this.labelAlign=m.align||this.autoLabelAlign(this.labelRotation))v.align=this.labelAlign;y(d,function(a){var b=(a=c[a])&&a.label,g=k.width,d={};b&&(b.attr(v),a.shortenLabel?a.shortenLabel():p&&!g&&"nowrap"!==k.whiteSpace&&(p<b.textPxLength||
"SPAN"===b.element.tagName)?(d.width=p,e||(d.textOverflow=b.specificTextOverflow||f),b.css(d)):b.styles&&b.styles.width&&!d.width&&!g&&b.css({width:null}),delete b.specificTextOverflow,a.rotation=v.rotation)},this);this.tickRotCorr=b.rotCorr(A.b,this.labelRotation||0,0!==this.side)},hasData:function(){return this.hasVisibleSeries||x(this.min)&&x(this.max)&&this.tickPositions&&0<this.tickPositions.length},addTitle:function(a){var b=this.chart.renderer,g=this.horiz,d=this.opposite,c=this.options.title,
m;this.axisTitle||((m=c.textAlign)||(m=(g?{low:"left",middle:"center",high:"right"}:{low:d?"right":"left",middle:"center",high:d?"left":"right"})[c.align]),this.axisTitle=b.text(c.text,0,0,c.useHTML).attr({zIndex:7,rotation:c.rotation||0,align:m}).addClass("highcharts-axis-title").css(l(c.style)).add(this.axisGroup),this.axisTitle.isNew=!0);c.style.width||this.isRadial||this.axisTitle.css({width:this.len});this.axisTitle[a?"show":"hide"](!0)},generateTick:function(a){var b=this.ticks;b[a]?b[a].addLabel():
b[a]=new N(this,a)},getOffset:function(){var a=this,b=a.chart,d=b.renderer,c=a.options,m=a.tickPositions,k=a.ticks,l=a.horiz,q=a.side,v=b.inverted&&!a.isZAxis?[1,0,3,2][q]:q,A,e,p=0,G,f=0,J=c.title,E=c.labels,N=0,w=b.axisOffset,b=b.clipOffset,t=[-1,1,1,-1][q],u=c.className,n=a.axisParent;A=a.hasData();a.showAxis=e=A||D(c.showEmpty,!0);a.staggerLines=a.horiz&&E.staggerLines;a.axisGroup||(a.gridGroup=d.g("grid").attr({zIndex:c.gridZIndex||1}).addClass("highcharts-"+this.coll.toLowerCase()+"-grid "+
(u||"")).add(n),a.axisGroup=d.g("axis").attr({zIndex:c.zIndex||2}).addClass("highcharts-"+this.coll.toLowerCase()+" "+(u||"")).add(n),a.labelGroup=d.g("axis-labels").attr({zIndex:E.zIndex||7}).addClass("highcharts-"+a.coll.toLowerCase()+"-labels "+(u||"")).add(n));A||a.isLinked?(y(m,function(b,g){a.generateTick(b,g)}),a.renderUnsquish(),a.reserveSpaceDefault=0===q||2===q||{1:"left",3:"right"}[q]===a.labelAlign,D(E.reserveSpace,"center"===a.labelAlign?!0:null,a.reserveSpaceDefault)&&y(m,function(a){N=
Math.max(k[a].getLabelSize(),N)}),a.staggerLines&&(N*=a.staggerLines),a.labelOffset=N*(a.opposite?-1:1)):B(k,function(a,b){a.destroy();delete k[b]});J&&J.text&&!1!==J.enabled&&(a.addTitle(e),e&&!1!==J.reserveSpace&&(a.titleOffset=p=a.axisTitle.getBBox()[l?"height":"width"],G=J.offset,f=x(G)?0:D(J.margin,l?5:10)));a.renderLine();a.offset=t*D(c.offset,w[q]);a.tickRotCorr=a.tickRotCorr||{x:0,y:0};d=0===q?-a.labelMetrics().h:2===q?a.tickRotCorr.y:0;f=Math.abs(N)+f;N&&(f=f-d+t*(l?D(E.y,a.tickRotCorr.y+
8*t):E.x));a.axisTitleMargin=D(G,f);a.getMaxLabelDimensions&&(a.maxLabelDimensions=a.getMaxLabelDimensions(k,m));l=this.tickSize("tick");w[q]=Math.max(w[q],a.axisTitleMargin+p+t*a.offset,f,A&&m.length&&l?l[0]+t*a.offset:0);c=c.offset?0:2*Math.floor(a.axisLine.strokeWidth()/2);b[v]=Math.max(b[v],c);h(this,"afterGetOffset")},getLinePath:function(a){var b=this.chart,g=this.opposite,d=this.offset,c=this.horiz,m=this.left+(g?this.width:0)+d,d=b.chartHeight-this.bottom-(g?this.height:0)+d;g&&(a*=-1);return b.renderer.crispLine(["M",
c?this.left:m,c?d:this.top,"L",c?b.chartWidth-this.right:m,c?d:b.chartHeight-this.bottom],a)},renderLine:function(){this.axisLine||(this.axisLine=this.chart.renderer.path().addClass("highcharts-axis-line").add(this.axisGroup),this.axisLine.attr({stroke:this.options.lineColor,"stroke-width":this.options.lineWidth,zIndex:7}))},getTitlePosition:function(){var a=this.horiz,b=this.left,d=this.top,c=this.len,m=this.options.title,k=a?b:d,l=this.opposite,h=this.offset,q=m.x||0,v=m.y||0,A=this.axisTitle,e=
this.chart.renderer.fontMetrics(m.style&&m.style.fontSize,A),A=Math.max(A.getBBox(null,0).height-e.h-1,0),c={low:k+(a?0:c),middle:k+c/2,high:k+(a?c:0)}[m.align],b=(a?d+this.height:b)+(a?1:-1)*(l?-1:1)*this.axisTitleMargin+[-A,A,e.f,-A][this.side];return{x:a?c+q:b+(l?this.width:0)+h+q,y:a?b+v-(l?this.height:0)+h:c+v}},renderMinorTick:function(a){var b=this.chart.hasRendered&&v(this.oldMin),d=this.minorTicks;d[a]||(d[a]=new N(this,a,"minor"));b&&d[a].isNew&&d[a].render(null,!0);d[a].render(null,!1,
1)},renderTick:function(a,b){var d=this.isLinked,g=this.ticks,c=this.chart.hasRendered&&v(this.oldMin);if(!d||a>=this.min&&a<=this.max)g[a]||(g[a]=new N(this,a)),c&&g[a].isNew&&g[a].render(b,!0,-1),g[a].render(b)},render:function(){var b=this,d=b.chart,c=b.options,m=b.isLog,k=b.isLinked,l=b.tickPositions,q=b.axisTitle,e=b.ticks,p=b.minorTicks,f=b.alternateBands,G=c.stackLabels,J=c.alternateGridColor,E=b.tickmarkOffset,D=b.axisLine,t=b.showAxis,w=F(d.renderer.globalAnimation),u,n;b.labelEdge.length=
0;b.overlap=!1;y([e,p,f],function(a){B(a,function(a){a.isActive=!1})});if(b.hasData()||k)b.minorTickInterval&&!b.categories&&y(b.getMinorTickPositions(),function(a){b.renderMinorTick(a)}),l.length&&(y(l,function(a,d){b.renderTick(a,d)}),E&&(0===b.min||b.single)&&(e[-1]||(e[-1]=new N(b,-1,null,!0)),e[-1].render(-1))),J&&y(l,function(c,g){n=void 0!==l[g+1]?l[g+1]+E:b.max-E;0===g%2&&c<b.max&&n<=b.max+(d.polar?-E:E)&&(f[c]||(f[c]=new a.PlotLineOrBand(b)),u=c+E,f[c].options={from:m?b.lin2log(u):u,to:m?
b.lin2log(n):n,color:J},f[c].render(),f[c].isActive=!0)}),b._addedPlotLB||(y((c.plotLines||[]).concat(c.plotBands||[]),function(a){b.addPlotBandOrLine(a)}),b._addedPlotLB=!0);y([e,p,f],function(a){var b,c=[],g=w.duration;B(a,function(a,b){a.isActive||(a.render(b,!1,0),a.isActive=!1,c.push(b))});A(function(){for(b=c.length;b--;)a[c[b]]&&!a[c[b]].isActive&&(a[c[b]].destroy(),delete a[c[b]])},a!==f&&d.hasRendered&&g?g:0)});D&&(D[D.isPlaced?"animate":"attr"]({d:this.getLinePath(D.strokeWidth())}),D.isPlaced=
!0,D[t?"show":"hide"](!0));q&&t&&(c=b.getTitlePosition(),v(c.y)?(q[q.isNew?"attr":"animate"](c),q.isNew=!1):(q.attr("y",-9999),q.isNew=!0));G&&G.enabled&&b.renderStackTotals();b.isDirty=!1;h(this,"afterRender")},redraw:function(){this.visible&&(this.render(),y(this.plotLinesAndBands,function(a){a.render()}));y(this.series,function(a){a.isDirty=!0})},keepProps:"extKey hcEvents names series userMax userMin".split(" "),destroy:function(a){var b=this,c=b.stacks,g=b.plotLinesAndBands,k;h(this,"destroy",
{keepEvents:a});a||m(b);B(c,function(a,b){w(a);c[b]=null});y([b.ticks,b.minorTicks,b.alternateBands],function(a){w(a)});if(g)for(a=g.length;a--;)g[a].destroy();y("stackTotalGroup axisLine axisTitle axisGroup gridGroup labelGroup cross scrollbar".split(" "),function(a){b[a]&&(b[a]=b[a].destroy())});for(k in b.plotLinesAndBandsGroups)b.plotLinesAndBandsGroups[k]=b.plotLinesAndBandsGroups[k].destroy();B(b,function(a,c){-1===d(c,b.keepProps)&&delete b[c]})},drawCrosshair:function(a,b){var d,c=this.crosshair,
g=D(c.snap,!0),m,k=this.cross;h(this,"drawCrosshair",{e:a,point:b});a||(a=this.cross&&this.cross.e);if(this.crosshair&&!1!==(x(b)||!g)){g?x(b)&&(m=D(b.crosshairPos,this.isXAxis?b.plotX:this.len-b.plotY)):m=a&&(this.horiz?a.chartX-this.pos:this.len-a.chartY+this.pos);x(m)&&(d=this.getPlotLinePath(b&&(this.isXAxis?b.x:D(b.stackY,b.y)),null,null,null,m)||null);if(!x(d)){this.hideCrosshair();return}g=this.categories&&!this.isRadial;k||(this.cross=k=this.chart.renderer.path().addClass("highcharts-crosshair highcharts-crosshair-"+
(g?"category ":"thin ")+c.className).attr({zIndex:D(c.zIndex,2)}).add(),k.attr({stroke:c.color||(g?f("#ccd6eb").setOpacity(.25).get():"#cccccc"),"stroke-width":D(c.width,1)}).css({"pointer-events":"none"}),c.dashStyle&&k.attr({dashstyle:c.dashStyle}));k.show().attr({d:d});g&&!c.width&&k.attr({"stroke-width":this.transA});this.cross.e=a}else this.hideCrosshair();h(this,"afterDrawCrosshair",{e:a,point:b})},hideCrosshair:function(){this.cross&&this.cross.hide()}});return a.Axis=E}(K);(function(a){var C=
a.Axis,F=a.getMagnitude,I=a.normalizeTickInterval,n=a.timeUnits;C.prototype.getTimeTicks=function(){return this.chart.time.getTimeTicks.apply(this.chart.time,arguments)};C.prototype.normalizeTimeTickInterval=function(a,e){var f=e||[["millisecond",[1,2,5,10,20,25,50,100,200,500]],["second",[1,2,5,10,15,30]],["minute",[1,2,5,10,15,30]],["hour",[1,2,3,4,6,8,12]],["day",[1,2]],["week",[1,2]],["month",[1,2,3,4,6]],["year",null]];e=f[f.length-1];var x=n[e[0]],t=e[1],w;for(w=0;w<f.length&&!(e=f[w],x=n[e[0]],
t=e[1],f[w+1]&&a<=(x*t[t.length-1]+n[f[w+1][0]])/2);w++);x===n.year&&a<5*x&&(t=[1,2,5]);a=I(a/x,t,"year"===e[0]?Math.max(F(a/x),1):1);return{unitRange:x,count:a,unitName:e[0]}}})(K);(function(a){var C=a.Axis,F=a.getMagnitude,I=a.map,n=a.normalizeTickInterval,f=a.pick;C.prototype.getLogTickPositions=function(a,u,x,t){var e=this.options,y=this.len,c=[];t||(this._minorAutoInterval=null);if(.5<=a)a=Math.round(a),c=this.getLinearTickPositions(a,u,x);else if(.08<=a)for(var y=Math.floor(u),h,p,k,q,d,e=.3<
a?[1,2,4]:.15<a?[1,2,4,6,8]:[1,2,3,4,5,6,7,8,9];y<x+1&&!d;y++)for(p=e.length,h=0;h<p&&!d;h++)k=this.log2lin(this.lin2log(y)*e[h]),k>u&&(!t||q<=x)&&void 0!==q&&c.push(q),q>x&&(d=!0),q=k;else u=this.lin2log(u),x=this.lin2log(x),a=t?this.getMinorTickInterval():e.tickInterval,a=f("auto"===a?null:a,this._minorAutoInterval,e.tickPixelInterval/(t?5:1)*(x-u)/((t?y/this.tickPositions.length:y)||1)),a=n(a,null,F(a)),c=I(this.getLinearTickPositions(a,u,x),this.log2lin),t||(this._minorAutoInterval=a/5);t||(this.tickInterval=
a);return c};C.prototype.log2lin=function(a){return Math.log(a)/Math.LN10};C.prototype.lin2log=function(a){return Math.pow(10,a)}})(K);(function(a,C){var F=a.arrayMax,I=a.arrayMin,n=a.defined,f=a.destroyObjectProperties,e=a.each,u=a.erase,x=a.merge,t=a.pick;a.PlotLineOrBand=function(a,e){this.axis=a;e&&(this.options=e,this.id=e.id)};a.PlotLineOrBand.prototype={render:function(){a.fireEvent(this,"render");var e=this,f=e.axis,c=f.horiz,h=e.options,p=h.label,k=e.label,q=h.to,d=h.from,b=h.value,v=n(d)&&
n(q),J=n(b),l=e.svgElem,u=!l,B=[],D=h.color,m=t(h.zIndex,0),G=h.events,B={"class":"highcharts-plot-"+(v?"band ":"line ")+(h.className||"")},A={},N=f.chart.renderer,E=v?"bands":"lines";f.isLog&&(d=f.log2lin(d),q=f.log2lin(q),b=f.log2lin(b));J?(B.stroke=D,B["stroke-width"]=h.width,h.dashStyle&&(B.dashstyle=h.dashStyle)):v&&(D&&(B.fill=D),h.borderWidth&&(B.stroke=h.borderColor,B["stroke-width"]=h.borderWidth));A.zIndex=m;E+="-"+m;(D=f.plotLinesAndBandsGroups[E])||(f.plotLinesAndBandsGroups[E]=D=N.g("plot-"+
E).attr(A).add());u&&(e.svgElem=l=N.path().attr(B).add(D));if(J)B=f.getPlotLinePath(b,l.strokeWidth());else if(v)B=f.getPlotBandPath(d,q,h);else return;u&&B&&B.length?(l.attr({d:B}),G&&a.objectEach(G,function(a,b){l.on(b,function(a){G[b].apply(e,[a])})})):l&&(B?(l.show(),l.animate({d:B})):(l.hide(),k&&(e.label=k=k.destroy())));p&&n(p.text)&&B&&B.length&&0<f.width&&0<f.height&&!B.isFlat?(p=x({align:c&&v&&"center",x:c?!v&&4:10,verticalAlign:!c&&v&&"middle",y:c?v?16:10:v?6:-4,rotation:c&&!v&&90},p),
this.renderLabel(p,B,v,m)):k&&k.hide();return e},renderLabel:function(a,e,c,h){var p=this.label,k=this.axis.chart.renderer;p||(p={align:a.textAlign||a.align,rotation:a.rotation,"class":"highcharts-plot-"+(c?"band":"line")+"-label "+(a.className||"")},p.zIndex=h,this.label=p=k.text(a.text,0,0,a.useHTML).attr(p).add(),p.css(a.style));h=e.xBounds||[e[1],e[4],c?e[6]:e[1]];e=e.yBounds||[e[2],e[5],c?e[7]:e[2]];c=I(h);k=I(e);p.align(a,!1,{x:c,y:k,width:F(h)-c,height:F(e)-k});p.show()},destroy:function(){u(this.axis.plotLinesAndBands,
this);delete this.axis;f(this)}};a.extend(C.prototype,{getPlotBandPath:function(a,e){var c=this.getPlotLinePath(e,null,null,!0),h=this.getPlotLinePath(a,null,null,!0),p=[],k=this.horiz,q=1,d;a=a<this.min&&e<this.min||a>this.max&&e>this.max;if(h&&c)for(a&&(d=h.toString()===c.toString(),q=0),a=0;a<h.length;a+=6)k&&c[a+1]===h[a+1]?(c[a+1]+=q,c[a+4]+=q):k||c[a+2]!==h[a+2]||(c[a+2]+=q,c[a+5]+=q),p.push("M",h[a+1],h[a+2],"L",h[a+4],h[a+5],c[a+4],c[a+5],c[a+1],c[a+2],"z"),p.isFlat=d;return p},addPlotBand:function(a){return this.addPlotBandOrLine(a,
"plotBands")},addPlotLine:function(a){return this.addPlotBandOrLine(a,"plotLines")},addPlotBandOrLine:function(e,f){var c=(new a.PlotLineOrBand(this,e)).render(),h=this.userOptions;c&&(f&&(h[f]=h[f]||[],h[f].push(e)),this.plotLinesAndBands.push(c));return c},removePlotBandOrLine:function(a){for(var f=this.plotLinesAndBands,c=this.options,h=this.userOptions,p=f.length;p--;)f[p].id===a&&f[p].destroy();e([c.plotLines||[],h.plotLines||[],c.plotBands||[],h.plotBands||[]],function(c){for(p=c.length;p--;)c[p].id===
a&&u(c,c[p])})},removePlotBand:function(a){this.removePlotBandOrLine(a)},removePlotLine:function(a){this.removePlotBandOrLine(a)}})})(K,W);(function(a){var C=a.doc,F=a.each,I=a.extend,n=a.format,f=a.isNumber,e=a.map,u=a.merge,x=a.pick,t=a.splat,w=a.syncTimeout,y=a.timeUnits;a.Tooltip=function(){this.init.apply(this,arguments)};a.Tooltip.prototype={init:function(a,h){this.chart=a;this.options=h;this.crosshairs=[];this.now={x:0,y:0};this.isHidden=!0;this.split=h.split&&!a.inverted;this.shared=h.shared||
this.split;this.outside=h.outside&&!this.split},cleanSplit:function(a){F(this.chart.series,function(c){var h=c&&c.tt;h&&(!h.isActive||a?c.tt=h.destroy():h.isActive=!1)})},getLabel:function(){var c=this.chart.renderer,h=this.options,e;this.label||(this.outside&&(this.container=e=a.doc.createElement("div"),e.className="highcharts-tooltip-container",a.css(e,{position:"absolute",top:"1px",pointerEvents:h.style&&h.style.pointerEvents}),a.doc.body.appendChild(e),this.renderer=c=new a.Renderer(e,0,0)),this.split?
this.label=c.g("tooltip"):(this.label=c.label("",0,0,h.shape||"callout",null,null,h.useHTML,null,"tooltip").attr({padding:h.padding,r:h.borderRadius}),this.label.attr({fill:h.backgroundColor,"stroke-width":h.borderWidth}).css(h.style).shadow(h.shadow)),this.outside&&(this.label.attr({x:this.distance,y:this.distance}),this.label.xSetter=function(a){e.style.left=a+"px"},this.label.ySetter=function(a){e.style.top=a+"px"}),this.label.attr({zIndex:8}).add());return this.label},update:function(a){this.destroy();
u(!0,this.chart.options.tooltip.userOptions,a);this.init(this.chart,u(!0,this.options,a))},destroy:function(){this.label&&(this.label=this.label.destroy());this.split&&this.tt&&(this.cleanSplit(this.chart,!0),this.tt=this.tt.destroy());this.renderer&&(this.renderer=this.renderer.destroy(),a.discardElement(this.container));a.clearTimeout(this.hideTimer);a.clearTimeout(this.tooltipTimeout)},move:function(c,h,e,k){var q=this,d=q.now,b=!1!==q.options.animation&&!q.isHidden&&(1<Math.abs(c-d.x)||1<Math.abs(h-
d.y)),v=q.followPointer||1<q.len;I(d,{x:b?(2*d.x+c)/3:c,y:b?(d.y+h)/2:h,anchorX:v?void 0:b?(2*d.anchorX+e)/3:e,anchorY:v?void 0:b?(d.anchorY+k)/2:k});q.getLabel().attr(d);b&&(a.clearTimeout(this.tooltipTimeout),this.tooltipTimeout=setTimeout(function(){q&&q.move(c,h,e,k)},32))},hide:function(c){var h=this;a.clearTimeout(this.hideTimer);c=x(c,this.options.hideDelay,500);this.isHidden||(this.hideTimer=w(function(){h.getLabel()[c?"fadeOut":"hide"]();h.isHidden=!0},c))},getAnchor:function(a,h){var c=
this.chart,k=c.pointer,q=c.inverted,d=c.plotTop,b=c.plotLeft,v=0,f=0,l,n;a=t(a);this.followPointer&&h?(void 0===h.chartX&&(h=k.normalize(h)),a=[h.chartX-c.plotLeft,h.chartY-d]):a[0].tooltipPos?a=a[0].tooltipPos:(F(a,function(a){l=a.series.yAxis;n=a.series.xAxis;v+=a.plotX+(!q&&n?n.left-b:0);f+=(a.plotLow?(a.plotLow+a.plotHigh)/2:a.plotY)+(!q&&l?l.top-d:0)}),v/=a.length,f/=a.length,a=[q?c.plotWidth-f:v,this.shared&&!q&&1<a.length&&h?h.chartY-d:q?c.plotHeight-v:f]);return e(a,Math.round)},getPosition:function(a,
h,e){var c=this.chart,q=this.distance,d={},b=c.inverted&&e.h||0,v,f=this.outside,l=f?C.documentElement.clientWidth-2*q:c.chartWidth,p=f?Math.max(C.body.scrollHeight,C.documentElement.scrollHeight,C.body.offsetHeight,C.documentElement.offsetHeight,C.documentElement.clientHeight):c.chartHeight,B=c.pointer.chartPosition,D=["y",p,h,(f?B.top-q:0)+e.plotY+c.plotTop,f?0:c.plotTop,f?p:c.plotTop+c.plotHeight],m=["x",l,a,(f?B.left-q:0)+e.plotX+c.plotLeft,f?0:c.plotLeft,f?l:c.plotLeft+c.plotWidth],G=!this.followPointer&&
x(e.ttBelow,!c.inverted===!!e.negative),A=function(a,c,g,m,k,l){var h=g<m-q,v=m+q+g<c,A=m-q-g;m+=q;if(G&&v)d[a]=m;else if(!G&&h)d[a]=A;else if(h)d[a]=Math.min(l-g,0>A-b?A:A-b);else if(v)d[a]=Math.max(k,m+b+g>c?m:m+b);else return!1},N=function(a,b,c,g){var m;g<q||g>b-q?m=!1:d[a]=g<c/2?1:g>b-c/2?b-c-2:g-c/2;return m},E=function(a){var b=D;D=m;m=b;v=a},g=function(){!1!==A.apply(0,D)?!1!==N.apply(0,m)||v||(E(!0),g()):v?d.x=d.y=0:(E(!0),g())};(c.inverted||1<this.len)&&E();g();return d},defaultFormatter:function(a){var c=
this.points||t(this),e;e=[a.tooltipFooterHeaderFormatter(c[0])];e=e.concat(a.bodyFormatter(c));e.push(a.tooltipFooterHeaderFormatter(c[0],!0));return e},refresh:function(c,h){var e,k=this.options,q,d=c,b,v={},f=[];e=k.formatter||this.defaultFormatter;var v=this.shared,l;k.enabled&&(a.clearTimeout(this.hideTimer),this.followPointer=t(d)[0].series.tooltipOptions.followPointer,b=this.getAnchor(d,h),h=b[0],q=b[1],!v||d.series&&d.series.noSharedTooltip?v=d.getLabelConfig():(F(d,function(a){a.setState("hover");
f.push(a.getLabelConfig())}),v={x:d[0].category,y:d[0].y},v.points=f,d=d[0]),this.len=f.length,v=e.call(v,this),l=d.series,this.distance=x(l.tooltipOptions.distance,16),!1===v?this.hide():(e=this.getLabel(),this.isHidden&&e.attr({opacity:1}).show(),this.split?this.renderSplit(v,t(c)):(k.style.width||e.css({width:this.chart.spacingBox.width}),e.attr({text:v&&v.join?v.join(""):v}),e.removeClass(/highcharts-color-[\d]+/g).addClass("highcharts-color-"+x(d.colorIndex,l.colorIndex)),e.attr({stroke:k.borderColor||
d.color||l.color||"#666666"}),this.updatePosition({plotX:h,plotY:q,negative:d.negative,ttBelow:d.ttBelow,h:b[2]||0})),this.isHidden=!1))},renderSplit:function(c,h){var e=this,k=[],q=this.chart,d=q.renderer,b=!0,v=this.options,f=0,l,t=this.getLabel(),B=q.plotTop;a.isString(c)&&(c=[!1,c]);F(c.slice(0,h.length+1),function(a,c){if(!1!==a){c=h[c-1]||{isHeader:!0,plotX:h[0].plotX};var m=c.series||e,A=m.tt,p=c.series||{},E="highcharts-color-"+x(c.colorIndex,p.colorIndex,"none");A||(m.tt=A=d.label(null,null,
null,"callout",null,null,v.useHTML).addClass("highcharts-tooltip-box "+E+(c.isHeader?" highcharts-tooltip-header":"")).attr({padding:v.padding,r:v.borderRadius,fill:v.backgroundColor,stroke:v.borderColor||c.color||p.color||"#333333","stroke-width":v.borderWidth}).add(t));A.isActive=!0;A.attr({text:a});A.css(v.style).shadow(v.shadow);a=A.getBBox();p=a.width+A.strokeWidth();c.isHeader?(f=a.height,q.xAxis[0].opposite&&(l=!0,B-=f),p=Math.max(0,Math.min(c.plotX+q.plotLeft-p/2,q.chartWidth+(q.scrollablePixels?
q.scrollablePixels-q.marginRight:0)-p))):p=c.plotX+q.plotLeft-x(v.distance,16)-p;0>p&&(b=!1);a=(c.series&&c.series.yAxis&&c.series.yAxis.pos)+(c.plotY||0);a-=B;c.isHeader&&(a=l?-f:q.plotHeight+f);k.push({target:a,rank:c.isHeader?1:0,size:m.tt.getBBox().height+1,point:c,x:p,tt:A})}});this.cleanSplit();a.distribute(k,q.plotHeight+f);F(k,function(a){var c=a.point,d=c.series;a.tt.attr({visibility:void 0===a.pos?"hidden":"inherit",x:b||c.isHeader?a.x:c.plotX+q.plotLeft+x(v.distance,16),y:a.pos+B,anchorX:c.isHeader?
c.plotX+q.plotLeft:c.plotX+d.xAxis.pos,anchorY:c.isHeader?q.plotTop+q.plotHeight/2:c.plotY+d.yAxis.pos})})},updatePosition:function(a){var c=this.chart,e=this.getLabel(),k=(this.options.positioner||this.getPosition).call(this,e.width,e.height,a),q=a.plotX+c.plotLeft;a=a.plotY+c.plotTop;var d;this.outside&&(d=(this.options.borderWidth||0)+2*this.distance,this.renderer.setSize(e.width+d,e.height+d,!1),q+=c.pointer.chartPosition.left-k.x,a+=c.pointer.chartPosition.top-k.y);this.move(Math.round(k.x),
Math.round(k.y||0),q,a)},getDateFormat:function(a,h,e,k){var c=this.chart.time,d=c.dateFormat("%m-%d %H:%M:%S.%L",h),b,v,f={millisecond:15,second:12,minute:9,hour:6,day:3},l="millisecond";for(v in y){if(a===y.week&&+c.dateFormat("%w",h)===e&&"00:00:00.000"===d.substr(6)){v="week";break}if(y[v]>a){v=l;break}if(f[v]&&d.substr(f[v])!=="01-01 00:00:00.000".substr(f[v]))break;"week"!==v&&(l=v)}v&&(b=c.resolveDTLFormat(k[v]).main);return b},getXDateFormat:function(a,h,e){h=h.dateTimeLabelFormats;var c=
e&&e.closestPointRange;return(c?this.getDateFormat(c,a.x,e.options.startOfWeek,h):h.day)||h.year},tooltipFooterHeaderFormatter:function(a,h){h=h?"footer":"header";var c=a.series,k=c.tooltipOptions,e=k.xDateFormat,d=c.xAxis,b=d&&"datetime"===d.options.type&&f(a.key),v=k[h+"Format"];b&&!e&&(e=this.getXDateFormat(a,k,d));b&&e&&F(a.point&&a.point.tooltipDateKeys||["key"],function(a){v=v.replace("{point."+a+"}","{point."+a+":"+e+"}")});return n(v,{point:a,series:c},this.chart.time)},bodyFormatter:function(a){return e(a,
function(a){var c=a.series.tooltipOptions;return(c[(a.point.formatPrefix||"point")+"Formatter"]||a.point.tooltipFormatter).call(a.point,c[(a.point.formatPrefix||"point")+"Format"])})}}})(K);(function(a){var C=a.addEvent,F=a.attr,I=a.charts,n=a.color,f=a.css,e=a.defined,u=a.each,x=a.extend,t=a.find,w=a.fireEvent,y=a.isNumber,c=a.isObject,h=a.offset,p=a.pick,k=a.splat,q=a.Tooltip;a.Pointer=function(a,b){this.init(a,b)};a.Pointer.prototype={init:function(a,b){this.options=b;this.chart=a;this.runChartClick=
b.chart.events&&!!b.chart.events.click;this.pinchDown=[];this.lastValidTouch={};q&&(a.tooltip=new q(a,b.tooltip),this.followTouchMove=p(b.tooltip.followTouchMove,!0));this.setDOMEvents()},zoomOption:function(a){var b=this.chart,c=b.options.chart,d=c.zoomType||"",b=b.inverted;/touch/.test(a.type)&&(d=p(c.pinchType,d));this.zoomX=a=/x/.test(d);this.zoomY=d=/y/.test(d);this.zoomHor=a&&!b||d&&b;this.zoomVert=d&&!b||a&&b;this.hasZoom=a||d},normalize:function(a,b){var c;c=a.touches?a.touches.length?a.touches.item(0):
a.changedTouches[0]:a;b||(this.chartPosition=b=h(this.chart.container));return x(a,{chartX:Math.round(c.pageX-b.left),chartY:Math.round(c.pageY-b.top)})},getCoordinates:function(a){var b={xAxis:[],yAxis:[]};u(this.chart.axes,function(c){b[c.isXAxis?"xAxis":"yAxis"].push({axis:c,value:c.toValue(a[c.horiz?"chartX":"chartY"])})});return b},findNearestKDPoint:function(a,b,k){var d;u(a,function(a){var l=!(a.noSharedTooltip&&b)&&0>a.options.findNearestPointBy.indexOf("y");a=a.searchPoint(k,l);if((l=c(a,
!0))&&!(l=!c(d,!0)))var l=d.distX-a.distX,e=d.dist-a.dist,h=(a.series.group&&a.series.group.zIndex)-(d.series.group&&d.series.group.zIndex),l=0<(0!==l&&b?l:0!==e?e:0!==h?h:d.series.index>a.series.index?-1:1);l&&(d=a)});return d},getPointFromEvent:function(a){a=a.target;for(var b;a&&!b;)b=a.point,a=a.parentNode;return b},getChartCoordinatesFromPoint:function(a,b){var c=a.series,d=c.xAxis,c=c.yAxis,k=p(a.clientX,a.plotX),e=a.shapeArgs;if(d&&c)return b?{chartX:d.len+d.pos-k,chartY:c.len+c.pos-a.plotY}:
{chartX:k+d.pos,chartY:a.plotY+c.pos};if(e&&e.x&&e.y)return{chartX:e.x,chartY:e.y}},getHoverData:function(d,b,k,e,l,h,q){var v,m=[],f=q&&q.isBoosting;e=!(!e||!d);q=b&&!b.stickyTracking?[b]:a.grep(k,function(a){return a.visible&&!(!l&&a.directTouch)&&p(a.options.enableMouseTracking,!0)&&a.stickyTracking});b=(v=e?d:this.findNearestKDPoint(q,l,h))&&v.series;v&&(l&&!b.noSharedTooltip?(q=a.grep(k,function(a){return a.visible&&!(!l&&a.directTouch)&&p(a.options.enableMouseTracking,!0)&&!a.noSharedTooltip}),
u(q,function(a){var b=t(a.points,function(a){return a.x===v.x&&!a.isNull});c(b)&&(f&&(b=a.getPoint(b)),m.push(b))})):m.push(v));return{hoverPoint:v,hoverSeries:b,hoverPoints:m}},runPointActions:function(c,b){var d=this.chart,k=d.tooltip&&d.tooltip.options.enabled?d.tooltip:void 0,l=k?k.shared:!1,e=b||d.hoverPoint,h=e&&e.series||d.hoverSeries,h=this.getHoverData(e,h,d.series,"touchmove"!==c.type&&(!!b||h&&h.directTouch&&this.isDirectTouch),l,c,{isBoosting:d.isBoosting}),q,e=h.hoverPoint;q=h.hoverPoints;
b=(h=h.hoverSeries)&&h.tooltipOptions.followPointer;l=l&&h&&!h.noSharedTooltip;if(e&&(e!==d.hoverPoint||k&&k.isHidden)){u(d.hoverPoints||[],function(b){-1===a.inArray(b,q)&&b.setState()});u(q||[],function(a){a.setState("hover")});if(d.hoverSeries!==h)h.onMouseOver();d.hoverPoint&&d.hoverPoint.firePointEvent("mouseOut");if(!e.series)return;e.firePointEvent("mouseOver");d.hoverPoints=q;d.hoverPoint=e;k&&k.refresh(l?q:e,c)}else b&&k&&!k.isHidden&&(e=k.getAnchor([{}],c),k.updatePosition({plotX:e[0],plotY:e[1]}));
this.unDocMouseMove||(this.unDocMouseMove=C(d.container.ownerDocument,"mousemove",function(b){var c=I[a.hoverChartIndex];if(c)c.pointer.onDocumentMouseMove(b)}));u(d.axes,function(b){var d=p(b.crosshair.snap,!0),m=d?a.find(q,function(a){return a.series[b.coll]===b}):void 0;m||!d?b.drawCrosshair(c,m):b.hideCrosshair()})},reset:function(a,b){var c=this.chart,d=c.hoverSeries,l=c.hoverPoint,e=c.hoverPoints,h=c.tooltip,q=h&&h.shared?e:l;a&&q&&u(k(q),function(b){b.series.isCartesian&&void 0===b.plotX&&
(a=!1)});if(a)h&&q&&(h.refresh(q),h.shared&&e?u(e,function(a){a.setState(a.state,!0);a.series.isCartesian&&(a.series.xAxis.crosshair&&a.series.xAxis.drawCrosshair(null,a),a.series.yAxis.crosshair&&a.series.yAxis.drawCrosshair(null,a))}):l&&(l.setState(l.state,!0),u(c.axes,function(a){a.crosshair&&a.drawCrosshair(null,l)})));else{if(l)l.onMouseOut();e&&u(e,function(a){a.setState()});if(d)d.onMouseOut();h&&h.hide(b);this.unDocMouseMove&&(this.unDocMouseMove=this.unDocMouseMove());u(c.axes,function(a){a.hideCrosshair()});
this.hoverX=c.hoverPoints=c.hoverPoint=null}},scaleGroups:function(a,b){var c=this.chart,d;u(c.series,function(k){d=a||k.getPlotBox();k.xAxis&&k.xAxis.zoomEnabled&&k.group&&(k.group.attr(d),k.markerGroup&&(k.markerGroup.attr(d),k.markerGroup.clip(b?c.clipRect:null)),k.dataLabelsGroup&&k.dataLabelsGroup.attr(d))});c.clipRect.attr(b||c.clipBox)},dragStart:function(a){var b=this.chart;b.mouseIsDown=a.type;b.cancelClick=!1;b.mouseDownX=this.mouseDownX=a.chartX;b.mouseDownY=this.mouseDownY=a.chartY},drag:function(a){var b=
this.chart,c=b.options.chart,d=a.chartX,k=a.chartY,e=this.zoomHor,h=this.zoomVert,q=b.plotLeft,m=b.plotTop,f=b.plotWidth,A=b.plotHeight,p,E=this.selectionMarker,g=this.mouseDownX,r=this.mouseDownY,t=c.panKey&&a[c.panKey+"Key"];E&&E.touch||(d<q?d=q:d>q+f&&(d=q+f),k<m?k=m:k>m+A&&(k=m+A),this.hasDragged=Math.sqrt(Math.pow(g-d,2)+Math.pow(r-k,2)),10<this.hasDragged&&(p=b.isInsidePlot(g-q,r-m),b.hasCartesianSeries&&(this.zoomX||this.zoomY)&&p&&!t&&!E&&(this.selectionMarker=E=b.renderer.rect(q,m,e?1:f,
h?1:A,0).attr({fill:c.selectionMarkerFill||n("#335cad").setOpacity(.25).get(),"class":"highcharts-selection-marker",zIndex:7}).add()),E&&e&&(d-=g,E.attr({width:Math.abs(d),x:(0<d?0:d)+g})),E&&h&&(d=k-r,E.attr({height:Math.abs(d),y:(0<d?0:d)+r})),p&&!E&&c.panning&&b.pan(a,c.panning)))},drop:function(a){var b=this,c=this.chart,d=this.hasPinched;if(this.selectionMarker){var k={originalEvent:a,xAxis:[],yAxis:[]},h=this.selectionMarker,q=h.attr?h.attr("x"):h.x,p=h.attr?h.attr("y"):h.y,m=h.attr?h.attr("width"):
h.width,G=h.attr?h.attr("height"):h.height,A;if(this.hasDragged||d)u(c.axes,function(c){if(c.zoomEnabled&&e(c.min)&&(d||b[{xAxis:"zoomX",yAxis:"zoomY"}[c.coll]])){var h=c.horiz,g="touchend"===a.type?c.minPixelPadding:0,l=c.toValue((h?q:p)+g),h=c.toValue((h?q+m:p+G)-g);k[c.coll].push({axis:c,min:Math.min(l,h),max:Math.max(l,h)});A=!0}}),A&&w(c,"selection",k,function(a){c.zoom(x(a,d?{animation:!1}:null))});y(c.index)&&(this.selectionMarker=this.selectionMarker.destroy());d&&this.scaleGroups()}c&&y(c.index)&&
(f(c.container,{cursor:c._cursor}),c.cancelClick=10<this.hasDragged,c.mouseIsDown=this.hasDragged=this.hasPinched=!1,this.pinchDown=[])},onContainerMouseDown:function(a){a=this.normalize(a);2!==a.button&&(this.zoomOption(a),a.preventDefault&&a.preventDefault(),this.dragStart(a))},onDocumentMouseUp:function(c){I[a.hoverChartIndex]&&I[a.hoverChartIndex].pointer.drop(c)},onDocumentMouseMove:function(a){var b=this.chart,c=this.chartPosition;a=this.normalize(a,c);!c||this.inClass(a.target,"highcharts-tracker")||
b.isInsidePlot(a.chartX-b.plotLeft,a.chartY-b.plotTop)||this.reset()},onContainerMouseLeave:function(c){var b=I[a.hoverChartIndex];b&&(c.relatedTarget||c.toElement)&&(b.pointer.reset(),b.pointer.chartPosition=null)},onContainerMouseMove:function(c){var b=this.chart;e(a.hoverChartIndex)&&I[a.hoverChartIndex]&&I[a.hoverChartIndex].mouseIsDown||(a.hoverChartIndex=b.index);c=this.normalize(c);c.returnValue=!1;"mousedown"===b.mouseIsDown&&this.drag(c);!this.inClass(c.target,"highcharts-tracker")&&!b.isInsidePlot(c.chartX-
b.plotLeft,c.chartY-b.plotTop)||b.openMenu||this.runPointActions(c)},inClass:function(a,b){for(var c;a;){if(c=F(a,"class")){if(-1!==c.indexOf(b))return!0;if(-1!==c.indexOf("highcharts-container"))return!1}a=a.parentNode}},onTrackerMouseOut:function(a){var b=this.chart.hoverSeries;a=a.relatedTarget||a.toElement;this.isDirectTouch=!1;if(!(!b||!a||b.stickyTracking||this.inClass(a,"highcharts-tooltip")||this.inClass(a,"highcharts-series-"+b.index)&&this.inClass(a,"highcharts-tracker")))b.onMouseOut()},
onContainerClick:function(a){var b=this.chart,c=b.hoverPoint,d=b.plotLeft,k=b.plotTop;a=this.normalize(a);b.cancelClick||(c&&this.inClass(a.target,"highcharts-tracker")?(w(c.series,"click",x(a,{point:c})),b.hoverPoint&&c.firePointEvent("click",a)):(x(a,this.getCoordinates(a)),b.isInsidePlot(a.chartX-d,a.chartY-k)&&w(b,"click",a)))},setDOMEvents:function(){var c=this,b=c.chart.container,k=b.ownerDocument;b.onmousedown=function(a){c.onContainerMouseDown(a)};b.onmousemove=function(a){c.onContainerMouseMove(a)};
b.onclick=function(a){c.onContainerClick(a)};this.unbindContainerMouseLeave=C(b,"mouseleave",c.onContainerMouseLeave);a.unbindDocumentMouseUp||(a.unbindDocumentMouseUp=C(k,"mouseup",c.onDocumentMouseUp));a.hasTouch&&(b.ontouchstart=function(a){c.onContainerTouchStart(a)},b.ontouchmove=function(a){c.onContainerTouchMove(a)},a.unbindDocumentTouchEnd||(a.unbindDocumentTouchEnd=C(k,"touchend",c.onDocumentTouchEnd)))},destroy:function(){var c=this;c.unDocMouseMove&&c.unDocMouseMove();this.unbindContainerMouseLeave();
a.chartCount||(a.unbindDocumentMouseUp&&(a.unbindDocumentMouseUp=a.unbindDocumentMouseUp()),a.unbindDocumentTouchEnd&&(a.unbindDocumentTouchEnd=a.unbindDocumentTouchEnd()));clearInterval(c.tooltipTimeout);a.objectEach(c,function(a,d){c[d]=null})}}})(K);(function(a){var C=a.charts,F=a.each,I=a.extend,n=a.map,f=a.noop,e=a.pick;I(a.Pointer.prototype,{pinchTranslate:function(a,e,f,n,y,c){this.zoomHor&&this.pinchTranslateDirection(!0,a,e,f,n,y,c);this.zoomVert&&this.pinchTranslateDirection(!1,a,e,f,n,
y,c)},pinchTranslateDirection:function(a,e,f,n,y,c,h,p){var k=this.chart,q=a?"x":"y",d=a?"X":"Y",b="chart"+d,v=a?"width":"height",t=k["plot"+(a?"Left":"Top")],l,u,B=p||1,D=k.inverted,m=k.bounds[a?"h":"v"],G=1===e.length,A=e[0][b],N=f[0][b],E=!G&&e[1][b],g=!G&&f[1][b],r;f=function(){!G&&20<Math.abs(A-E)&&(B=p||Math.abs(N-g)/Math.abs(A-E));u=(t-N)/B+A;l=k["plot"+(a?"Width":"Height")]/B};f();e=u;e<m.min?(e=m.min,r=!0):e+l>m.max&&(e=m.max-l,r=!0);r?(N-=.8*(N-h[q][0]),G||(g-=.8*(g-h[q][1])),f()):h[q]=
[N,g];D||(c[q]=u-t,c[v]=l);c=D?1/B:B;y[v]=l;y[q]=e;n[D?a?"scaleY":"scaleX":"scale"+d]=B;n["translate"+d]=c*t+(N-c*A)},pinch:function(a){var u=this,t=u.chart,w=u.pinchDown,y=a.touches,c=y.length,h=u.lastValidTouch,p=u.hasZoom,k=u.selectionMarker,q={},d=1===c&&(u.inClass(a.target,"highcharts-tracker")&&t.runTrackerClick||u.runChartClick),b={};1<c&&(u.initiated=!0);p&&u.initiated&&!d&&a.preventDefault();n(y,function(a){return u.normalize(a)});"touchstart"===a.type?(F(y,function(a,b){w[b]={chartX:a.chartX,
chartY:a.chartY}}),h.x=[w[0].chartX,w[1]&&w[1].chartX],h.y=[w[0].chartY,w[1]&&w[1].chartY],F(t.axes,function(a){if(a.zoomEnabled){var b=t.bounds[a.horiz?"h":"v"],c=a.minPixelPadding,d=a.toPixels(e(a.options.min,a.dataMin)),k=a.toPixels(e(a.options.max,a.dataMax)),h=Math.max(d,k);b.min=Math.min(a.pos,Math.min(d,k)-c);b.max=Math.max(a.pos+a.len,h+c)}}),u.res=!0):u.followTouchMove&&1===c?this.runPointActions(u.normalize(a)):w.length&&(k||(u.selectionMarker=k=I({destroy:f,touch:!0},t.plotBox)),u.pinchTranslate(w,
y,q,k,b,h),u.hasPinched=p,u.scaleGroups(q,b),u.res&&(u.res=!1,this.reset(!1,0)))},touch:function(f,n){var t=this.chart,u,y;if(t.index!==a.hoverChartIndex)this.onContainerMouseLeave({relatedTarget:!0});a.hoverChartIndex=t.index;1===f.touches.length?(f=this.normalize(f),(y=t.isInsidePlot(f.chartX-t.plotLeft,f.chartY-t.plotTop))&&!t.openMenu?(n&&this.runPointActions(f),"touchmove"===f.type&&(n=this.pinchDown,u=n[0]?4<=Math.sqrt(Math.pow(n[0].chartX-f.chartX,2)+Math.pow(n[0].chartY-f.chartY,2)):!1),e(u,
!0)&&this.pinch(f)):n&&this.reset()):2===f.touches.length&&this.pinch(f)},onContainerTouchStart:function(a){this.zoomOption(a);this.touch(a,!0)},onContainerTouchMove:function(a){this.touch(a)},onDocumentTouchEnd:function(e){C[a.hoverChartIndex]&&C[a.hoverChartIndex].pointer.drop(e)}})})(K);(function(a){var C=a.addEvent,F=a.charts,I=a.css,n=a.doc,f=a.extend,e=a.noop,u=a.Pointer,x=a.removeEvent,t=a.win,w=a.wrap;if(!a.hasTouch&&(t.PointerEvent||t.MSPointerEvent)){var y={},c=!!t.PointerEvent,h=function(){var c=
[];c.item=function(a){return this[a]};a.objectEach(y,function(a){c.push({pageX:a.pageX,pageY:a.pageY,target:a.target})});return c},p=function(c,q,d,b){"touch"!==c.pointerType&&c.pointerType!==c.MSPOINTER_TYPE_TOUCH||!F[a.hoverChartIndex]||(b(c),b=F[a.hoverChartIndex].pointer,b[q]({type:d,target:c.currentTarget,preventDefault:e,touches:h()}))};f(u.prototype,{onContainerPointerDown:function(a){p(a,"onContainerTouchStart","touchstart",function(a){y[a.pointerId]={pageX:a.pageX,pageY:a.pageY,target:a.currentTarget}})},
onContainerPointerMove:function(a){p(a,"onContainerTouchMove","touchmove",function(a){y[a.pointerId]={pageX:a.pageX,pageY:a.pageY};y[a.pointerId].target||(y[a.pointerId].target=a.currentTarget)})},onDocumentPointerUp:function(a){p(a,"onDocumentTouchEnd","touchend",function(a){delete y[a.pointerId]})},batchMSEvents:function(a){a(this.chart.container,c?"pointerdown":"MSPointerDown",this.onContainerPointerDown);a(this.chart.container,c?"pointermove":"MSPointerMove",this.onContainerPointerMove);a(n,c?
"pointerup":"MSPointerUp",this.onDocumentPointerUp)}});w(u.prototype,"init",function(a,c,d){a.call(this,c,d);this.hasZoom&&I(c.container,{"-ms-touch-action":"none","touch-action":"none"})});w(u.prototype,"setDOMEvents",function(a){a.apply(this);(this.hasZoom||this.followTouchMove)&&this.batchMSEvents(C)});w(u.prototype,"destroy",function(a){this.batchMSEvents(x);a.call(this)})}})(K);(function(a){var C=a.addEvent,F=a.css,I=a.discardElement,n=a.defined,f=a.each,e=a.fireEvent,u=a.isFirefox,x=a.marginNames,
t=a.merge,w=a.pick,y=a.setAnimation,c=a.stableSort,h=a.win,p=a.wrap;a.Legend=function(a,c){this.init(a,c)};a.Legend.prototype={init:function(a,c){this.chart=a;this.setOptions(c);c.enabled&&(this.render(),C(this.chart,"endResize",function(){this.legend.positionCheckboxes()}),this.proximate?this.unchartrender=C(this.chart,"render",function(){this.legend.proximatePositions();this.legend.positionItems()}):this.unchartrender&&this.unchartrender())},setOptions:function(a){var c=w(a.padding,8);this.options=
a;this.itemStyle=a.itemStyle;this.itemHiddenStyle=t(this.itemStyle,a.itemHiddenStyle);this.itemMarginTop=a.itemMarginTop||0;this.padding=c;this.initialItemY=c-5;this.symbolWidth=w(a.symbolWidth,16);this.pages=[];this.proximate="proximate"===a.layout&&!this.chart.inverted},update:function(a,c){var d=this.chart;this.setOptions(t(!0,this.options,a));this.destroy();d.isDirtyLegend=d.isDirtyBox=!0;w(c,!0)&&d.redraw();e(this,"afterUpdate")},colorizeItem:function(a,c){a.legendGroup[c?"removeClass":"addClass"]("highcharts-legend-item-hidden");
var d=this.options,b=a.legendItem,k=a.legendLine,h=a.legendSymbol,l=this.itemHiddenStyle.color,d=c?d.itemStyle.color:l,q=c?a.color||l:l,f=a.options&&a.options.marker,p={fill:q};b&&b.css({fill:d,color:d});k&&k.attr({stroke:q});h&&(f&&h.isMarker&&(p=a.pointAttribs(),c||(p.stroke=p.fill=l)),h.attr(p));e(this,"afterColorizeItem",{item:a,visible:c})},positionItems:function(){f(this.allItems,this.positionItem,this);this.chart.isResizing||this.positionCheckboxes()},positionItem:function(a){var c=this.options,
d=c.symbolPadding,c=!c.rtl,b=a._legendItemPos,e=b[0],b=b[1],h=a.checkbox;if((a=a.legendGroup)&&a.element)a[n(a.translateY)?"animate":"attr"]({translateX:c?e:this.legendWidth-e-2*d-4,translateY:b});h&&(h.x=e,h.y=b)},destroyItem:function(a){var c=a.checkbox;f(["legendItem","legendLine","legendSymbol","legendGroup"],function(c){a[c]&&(a[c]=a[c].destroy())});c&&I(a.checkbox)},destroy:function(){function a(a){this[a]&&(this[a]=this[a].destroy())}f(this.getAllItems(),function(c){f(["legendItem","legendGroup"],
a,c)});f("clipRect up down pager nav box title group".split(" "),a,this);this.display=null},positionCheckboxes:function(){var a=this.group&&this.group.alignAttr,c,d=this.clipHeight||this.legendHeight,b=this.titleHeight;a&&(c=a.translateY,f(this.allItems,function(e){var h=e.checkbox,k;h&&(k=c+b+h.y+(this.scrollOffset||0)+3,F(h,{left:a.translateX+e.checkboxOffset+h.x-20+"px",top:k+"px",display:this.proximate||k>c-6&&k<c+d-6?"":"none"}))},this))},renderTitle:function(){var a=this.options,c=this.padding,
d=a.title,b=0;d.text&&(this.title||(this.title=this.chart.renderer.label(d.text,c-3,c-4,null,null,null,a.useHTML,null,"legend-title").attr({zIndex:1}).css(d.style).add(this.group)),a=this.title.getBBox(),b=a.height,this.offsetWidth=a.width,this.contentGroup.attr({translateY:b}));this.titleHeight=b},setText:function(c){var h=this.options;c.legendItem.attr({text:h.labelFormat?a.format(h.labelFormat,c,this.chart.time):h.labelFormatter.call(c)})},renderItem:function(a){var c=this.chart,d=c.renderer,b=
this.options,h=this.symbolWidth,e=b.symbolPadding,l=this.itemStyle,k=this.itemHiddenStyle,f="horizontal"===b.layout?w(b.itemDistance,20):0,p=!b.rtl,m=a.legendItem,G=!a.series,A=!G&&a.series.drawLegendSymbol?a.series:a,n=A.options,n=this.createCheckboxForItem&&n&&n.showCheckbox,f=h+e+f+(n?20:0),E=b.useHTML,g=a.options.className;m||(a.legendGroup=d.g("legend-item").addClass("highcharts-"+A.type+"-series highcharts-color-"+a.colorIndex+(g?" "+g:"")+(G?" highcharts-series-"+a.index:"")).attr({zIndex:1}).add(this.scrollGroup),
a.legendItem=m=d.text("",p?h+e:-e,this.baseline||0,E).css(t(a.visible?l:k)).attr({align:p?"left":"right",zIndex:2}).add(a.legendGroup),this.baseline||(h=l.fontSize,this.fontMetrics=d.fontMetrics(h,m),this.baseline=this.fontMetrics.f+3+this.itemMarginTop,m.attr("y",this.baseline)),this.symbolHeight=b.symbolHeight||this.fontMetrics.f,A.drawLegendSymbol(this,a),this.setItemEvents&&this.setItemEvents(a,m,E),n&&this.createCheckboxForItem(a));this.colorizeItem(a,a.visible);l.width||m.css({width:(b.itemWidth||
b.width||c.spacingBox.width)-f});this.setText(a);c=m.getBBox();a.itemWidth=a.checkboxOffset=b.itemWidth||a.legendItemWidth||c.width+f;this.maxItemWidth=Math.max(this.maxItemWidth,a.itemWidth);this.totalItemWidth+=a.itemWidth;this.itemHeight=a.itemHeight=Math.round(a.legendItemHeight||c.height||this.symbolHeight)},layoutItem:function(a){var c=this.options,d=this.padding,b="horizontal"===c.layout,h=a.itemHeight,e=c.itemMarginBottom||0,l=this.itemMarginTop,k=b?w(c.itemDistance,20):0,f=c.width,p=f||this.chart.spacingBox.width-
2*d-c.x,c=c.alignColumns&&this.totalItemWidth>p?this.maxItemWidth:a.itemWidth;b&&this.itemX-d+c>p&&(this.itemX=d,this.itemY+=l+this.lastLineHeight+e,this.lastLineHeight=0);this.lastItemY=l+this.itemY+e;this.lastLineHeight=Math.max(h,this.lastLineHeight);a._legendItemPos=[this.itemX,this.itemY];b?this.itemX+=c:(this.itemY+=l+h+e,this.lastLineHeight=h);this.offsetWidth=f||Math.max((b?this.itemX-d-(a.checkbox?0:k):c)+d,this.offsetWidth)},getAllItems:function(){var a=[];f(this.chart.series,function(c){var d=
c&&c.options;c&&w(d.showInLegend,n(d.linkedTo)?!1:void 0,!0)&&(a=a.concat(c.legendItems||("point"===d.legendType?c.data:c)))});e(this,"afterGetAllItems",{allItems:a});return a},getAlignment:function(){var a=this.options;return this.proximate?a.align.charAt(0)+"tv":a.floating?"":a.align.charAt(0)+a.verticalAlign.charAt(0)+a.layout.charAt(0)},adjustMargins:function(a,c){var d=this.chart,b=this.options,h=this.getAlignment();h&&f([/(lth|ct|rth)/,/(rtv|rm|rbv)/,/(rbh|cb|lbh)/,/(lbv|lm|ltv)/],function(e,
l){e.test(h)&&!n(a[l])&&(d[x[l]]=Math.max(d[x[l]],d.legend[(l+1)%2?"legendHeight":"legendWidth"]+[1,-1,-1,1][l]*b[l%2?"x":"y"]+w(b.margin,12)+c[l]+(0===l&&void 0!==d.options.title.margin?d.titleOffset+d.options.title.margin:0)))})},proximatePositions:function(){var c=this.chart,h=[],d="left"===this.options.align;f(this.allItems,function(b){var e,k;e=d;b.xAxis&&b.points&&(b.xAxis.options.reversed&&(e=!e),e=a.find(e?b.points:b.points.slice(0).reverse(),function(b){return a.isNumber(b.plotY)}),k=b.legendGroup.getBBox().height,
h.push({target:b.visible?(e?e.plotY:b.xAxis.height)-.3*k:c.plotHeight,size:k,item:b}))},this);a.distribute(h,c.plotHeight);f(h,function(a){a.item._legendItemPos[1]=c.plotTop-c.spacing[0]+a.pos})},render:function(){var a=this.chart,h=a.renderer,d=this.group,b,e,p,l=this.box,n=this.options,B=this.padding;this.itemX=B;this.itemY=this.initialItemY;this.lastItemY=this.offsetWidth=0;d||(this.group=d=h.g("legend").attr({zIndex:7}).add(),this.contentGroup=h.g().attr({zIndex:1}).add(d),this.scrollGroup=h.g().add(this.contentGroup));
this.renderTitle();b=this.getAllItems();c(b,function(a,b){return(a.options&&a.options.legendIndex||0)-(b.options&&b.options.legendIndex||0)});n.reversed&&b.reverse();this.allItems=b;this.display=e=!!b.length;this.itemHeight=this.totalItemWidth=this.maxItemWidth=this.lastLineHeight=0;f(b,this.renderItem,this);f(b,this.layoutItem,this);b=(n.width||this.offsetWidth)+B;p=this.lastItemY+this.lastLineHeight+this.titleHeight;p=this.handleOverflow(p);p+=B;l||(this.box=l=h.rect().addClass("highcharts-legend-box").attr({r:n.borderRadius}).add(d),
l.isNew=!0);l.attr({stroke:n.borderColor,"stroke-width":n.borderWidth||0,fill:n.backgroundColor||"none"}).shadow(n.shadow);0<b&&0<p&&(l[l.isNew?"attr":"animate"](l.crisp.call({},{x:0,y:0,width:b,height:p},l.strokeWidth())),l.isNew=!1);l[e?"show":"hide"]();this.legendWidth=b;this.legendHeight=p;e&&(h=a.spacingBox,/(lth|ct|rth)/.test(this.getAlignment())&&(h=t(h,{y:h.y+a.titleOffset+a.options.title.margin})),d.align(t(n,{width:b,height:p,verticalAlign:this.proximate?"top":n.verticalAlign}),!0,h));this.proximate||
this.positionItems()},handleOverflow:function(a){var c=this,d=this.chart,b=d.renderer,h=this.options,e=h.y,l=this.padding,d=d.spacingBox.height+("top"===h.verticalAlign?-e:e)-l,e=h.maxHeight,k,p=this.clipRect,n=h.navigation,m=w(n.animation,!0),G=n.arrowSize||12,A=this.nav,t=this.pages,E,g=this.allItems,r=function(a){"number"===typeof a?p.attr({height:a}):p&&(c.clipRect=p.destroy(),c.contentGroup.clip());c.contentGroup.div&&(c.contentGroup.div.style.clip=a?"rect("+l+"px,9999px,"+(l+a)+"px,0)":"auto")};
"horizontal"!==h.layout||"middle"===h.verticalAlign||h.floating||(d/=2);e&&(d=Math.min(d,e));t.length=0;a>d&&!1!==n.enabled?(this.clipHeight=k=Math.max(d-20-this.titleHeight-l,0),this.currentPage=w(this.currentPage,1),this.fullHeight=a,f(g,function(a,b){var c=a._legendItemPos[1],d=Math.round(a.legendItem.getBBox().height),m=t.length;if(!m||c-t[m-1]>k&&(E||c)!==t[m-1])t.push(E||c),m++;a.pageIx=m-1;E&&(g[b-1].pageIx=m-1);b===g.length-1&&c+d-t[m-1]>k&&(t.push(c),a.pageIx=m);c!==E&&(E=c)}),p||(p=c.clipRect=
b.clipRect(0,l,9999,0),c.contentGroup.clip(p)),r(k),A||(this.nav=A=b.g().attr({zIndex:1}).add(this.group),this.up=b.symbol("triangle",0,0,G,G).on("click",function(){c.scroll(-1,m)}).add(A),this.pager=b.text("",15,10).addClass("highcharts-legend-navigation").css(n.style).add(A),this.down=b.symbol("triangle-down",0,0,G,G).on("click",function(){c.scroll(1,m)}).add(A)),c.scroll(0),a=d):A&&(r(),this.nav=A.destroy(),this.scrollGroup.attr({translateY:1}),this.clipHeight=0);return a},scroll:function(a,c){var d=
this.pages,b=d.length;a=this.currentPage+a;var h=this.clipHeight,e=this.options.navigation,l=this.pager,f=this.padding;a>b&&(a=b);0<a&&(void 0!==c&&y(c,this.chart),this.nav.attr({translateX:f,translateY:h+this.padding+7+this.titleHeight,visibility:"visible"}),this.up.attr({"class":1===a?"highcharts-legend-nav-inactive":"highcharts-legend-nav-active"}),l.attr({text:a+"/"+b}),this.down.attr({x:18+this.pager.getBBox().width,"class":a===b?"highcharts-legend-nav-inactive":"highcharts-legend-nav-active"}),
this.up.attr({fill:1===a?e.inactiveColor:e.activeColor}).css({cursor:1===a?"default":"pointer"}),this.down.attr({fill:a===b?e.inactiveColor:e.activeColor}).css({cursor:a===b?"default":"pointer"}),this.scrollOffset=-d[a-1]+this.initialItemY,this.scrollGroup.animate({translateY:this.scrollOffset}),this.currentPage=a,this.positionCheckboxes())}};a.LegendSymbolMixin={drawRectangle:function(a,c){var d=a.symbolHeight,b=a.options.squareSymbol;c.legendSymbol=this.chart.renderer.rect(b?(a.symbolWidth-d)/2:
0,a.baseline-d+1,b?d:a.symbolWidth,d,w(a.options.symbolRadius,d/2)).addClass("highcharts-point").attr({zIndex:3}).add(c.legendGroup)},drawLineMarker:function(a){var c=this.options,d=c.marker,b=a.symbolWidth,h=a.symbolHeight,e=h/2,l=this.chart.renderer,f=this.legendGroup;a=a.baseline-Math.round(.3*a.fontMetrics.b);var k;k={"stroke-width":c.lineWidth||0};c.dashStyle&&(k.dashstyle=c.dashStyle);this.legendLine=l.path(["M",0,a,"L",b,a]).addClass("highcharts-graph").attr(k).add(f);d&&!1!==d.enabled&&b&&
(c=Math.min(w(d.radius,e),e),0===this.symbol.indexOf("url")&&(d=t(d,{width:h,height:h}),c=0),this.legendSymbol=d=l.symbol(this.symbol,b/2-c,a-c,2*c,2*c,d).addClass("highcharts-point").add(f),d.isMarker=!0)}};(/Trident\/7\.0/.test(h.navigator.userAgent)||u)&&p(a.Legend.prototype,"positionItem",function(a,c){var d=this,b=function(){c._legendItemPos&&a.call(d,c)};b();setTimeout(b)})})(K);(function(a){var C=a.addEvent,F=a.animate,I=a.animObject,n=a.attr,f=a.doc,e=a.Axis,u=a.createElement,x=a.defaultOptions,
t=a.discardElement,w=a.charts,y=a.css,c=a.defined,h=a.each,p=a.extend,k=a.find,q=a.fireEvent,d=a.grep,b=a.isNumber,v=a.isObject,J=a.isString,l=a.Legend,L=a.marginNames,B=a.merge,D=a.objectEach,m=a.Pointer,G=a.pick,A=a.pInt,N=a.removeEvent,E=a.seriesTypes,g=a.splat,r=a.syncTimeout,M=a.win,O=a.Chart=function(){this.getArgs.apply(this,arguments)};a.chart=function(a,b,c){return new O(a,b,c)};p(O.prototype,{callbacks:[],getArgs:function(){var a=[].slice.call(arguments);if(J(a[0])||a[0].nodeName)this.renderTo=
a.shift();this.init(a[0],a[1])},init:function(b,c){var d,g,m=b.series,h=b.plotOptions||{};q(this,"init",{args:arguments},function(){b.series=null;d=B(x,b);for(g in d.plotOptions)d.plotOptions[g].tooltip=h[g]&&B(h[g].tooltip)||void 0;d.tooltip.userOptions=b.chart&&b.chart.forExport&&b.tooltip.userOptions||b.tooltip;d.series=b.series=m;this.userOptions=b;var e=d.chart,l=e.events;this.margin=[];this.spacing=[];this.bounds={h:{},v:{}};this.labelCollectors=[];this.callback=c;this.isResizing=0;this.options=
d;this.axes=[];this.series=[];this.time=b.time&&a.keys(b.time).length?new a.Time(b.time):a.time;this.hasCartesianSeries=e.showAxes;var f=this;f.index=w.length;w.push(f);a.chartCount++;l&&D(l,function(a,b){C(f,b,a)});f.xAxis=[];f.yAxis=[];f.pointCount=f.colorCounter=f.symbolCounter=0;q(f,"afterInit");f.firstRender()})},initSeries:function(b){var c=this.options.chart;(c=E[b.type||c.type||c.defaultSeriesType])||a.error(17,!0);c=new c;c.init(this,b);return c},orderSeries:function(a){var b=this.series;
for(a=a||0;a<b.length;a++)b[a]&&(b[a].index=a,b[a].name=b[a].getName())},isInsidePlot:function(a,b,c){var d=c?b:a;a=c?a:b;return 0<=d&&d<=this.plotWidth&&0<=a&&a<=this.plotHeight},redraw:function(b){q(this,"beforeRedraw");var c=this.axes,d=this.series,g=this.pointer,m=this.legend,e=this.userOptions.legend,l=this.isDirtyLegend,f,A,k=this.hasCartesianSeries,r=this.isDirtyBox,G,v=this.renderer,H=v.isHidden(),E=[];this.setResponsive&&this.setResponsive(!1);a.setAnimation(b,this);H&&this.temporaryDisplay();
this.layOutTitles();for(b=d.length;b--;)if(G=d[b],G.options.stacking&&(f=!0,G.isDirty)){A=!0;break}if(A)for(b=d.length;b--;)G=d[b],G.options.stacking&&(G.isDirty=!0);h(d,function(a){a.isDirty&&("point"===a.options.legendType?(a.updateTotals&&a.updateTotals(),l=!0):e&&(e.labelFormatter||e.labelFormat)&&(l=!0));a.isDirtyData&&q(a,"updatedData")});l&&m&&m.options.enabled&&(m.render(),this.isDirtyLegend=!1);f&&this.getStacks();k&&h(c,function(a){a.updateNames();a.updateYNames&&a.updateYNames();a.setScale()});
this.getMargins();k&&(h(c,function(a){a.isDirty&&(r=!0)}),h(c,function(a){var b=a.min+","+a.max;a.extKey!==b&&(a.extKey=b,E.push(function(){q(a,"afterSetExtremes",p(a.eventArgs,a.getExtremes()));delete a.eventArgs}));(r||f)&&a.redraw()}));r&&this.drawChartBox();q(this,"predraw");h(d,function(a){(r||a.isDirty)&&a.visible&&a.redraw();a.isDirtyData=!1});g&&g.reset(!0);v.draw();q(this,"redraw");q(this,"render");H&&this.temporaryDisplay(!0);h(E,function(a){a.call()})},get:function(a){function b(b){return b.id===
a||b.options&&b.options.id===a}var c,d=this.series,g;c=k(this.axes,b)||k(this.series,b);for(g=0;!c&&g<d.length;g++)c=k(d[g].points||[],b);return c},getAxes:function(){var a=this,b=this.options,c=b.xAxis=g(b.xAxis||{}),b=b.yAxis=g(b.yAxis||{});q(this,"getAxes");h(c,function(a,b){a.index=b;a.isX=!0});h(b,function(a,b){a.index=b});c=c.concat(b);h(c,function(b){new e(a,b)});q(this,"afterGetAxes")},getSelectedPoints:function(){var a=[];h(this.series,function(b){a=a.concat(d(b.data||[],function(a){return a.selected}))});
return a},getSelectedSeries:function(){return d(this.series,function(a){return a.selected})},setTitle:function(a,b,c){var d=this,g=d.options,m;m=g.title=B({style:{color:"#333333",fontSize:g.isStock?"16px":"18px"}},g.title,a);g=g.subtitle=B({style:{color:"#666666"}},g.subtitle,b);h([["title",a,m],["subtitle",b,g]],function(a,b){var c=a[0],g=d[c],m=a[1];a=a[2];g&&m&&(d[c]=g=g.destroy());a&&!g&&(d[c]=d.renderer.text(a.text,0,0,a.useHTML).attr({align:a.align,"class":"highcharts-"+c,zIndex:a.zIndex||4}).add(),
d[c].update=function(a){d.setTitle(!b&&a,b&&a)},d[c].css(a.style))});d.layOutTitles(c)},layOutTitles:function(a){var b=0,c,d=this.renderer,g=this.spacingBox;h(["title","subtitle"],function(a){var c=this[a],m=this.options[a];a="title"===a?-3:m.verticalAlign?0:b+2;var h;c&&(h=m.style.fontSize,h=d.fontMetrics(h,c).b,c.css({width:(m.width||g.width+m.widthAdjust)+"px"}).align(p({y:a+h},m),!1,"spacingBox"),m.floating||m.verticalAlign||(b=Math.ceil(b+c.getBBox(m.useHTML).height)))},this);c=this.titleOffset!==
b;this.titleOffset=b;!this.isDirtyBox&&c&&(this.isDirtyBox=this.isDirtyLegend=c,this.hasRendered&&G(a,!0)&&this.isDirtyBox&&this.redraw())},getChartSize:function(){var b=this.options.chart,d=b.width,b=b.height,g=this.renderTo;c(d)||(this.containerWidth=a.getStyle(g,"width"));c(b)||(this.containerHeight=a.getStyle(g,"height"));this.chartWidth=Math.max(0,d||this.containerWidth||600);this.chartHeight=Math.max(0,a.relativeLength(b,this.chartWidth)||(1<this.containerHeight?this.containerHeight:400))},
temporaryDisplay:function(b){var c=this.renderTo;if(b)for(;c&&c.style;)c.hcOrigStyle&&(a.css(c,c.hcOrigStyle),delete c.hcOrigStyle),c.hcOrigDetached&&(f.body.removeChild(c),c.hcOrigDetached=!1),c=c.parentNode;else for(;c&&c.style;){f.body.contains(c)||c.parentNode||(c.hcOrigDetached=!0,f.body.appendChild(c));if("none"===a.getStyle(c,"display",!1)||c.hcOricDetached)c.hcOrigStyle={display:c.style.display,height:c.style.height,overflow:c.style.overflow},b={display:"block",overflow:"hidden"},c!==this.renderTo&&
(b.height=0),a.css(c,b),c.offsetWidth||c.style.setProperty("display","block","important");c=c.parentNode;if(c===f.body)break}},setClassName:function(a){this.container.className="highcharts-container "+(a||"")},getContainer:function(){var c,d=this.options,g=d.chart,m,h;c=this.renderTo;var e=a.uniqueKey(),l;c||(this.renderTo=c=g.renderTo);J(c)&&(this.renderTo=c=f.getElementById(c));c||a.error(13,!0);m=A(n(c,"data-highcharts-chart"));b(m)&&w[m]&&w[m].hasRendered&&w[m].destroy();n(c,"data-highcharts-chart",
this.index);c.innerHTML="";g.skipClone||c.offsetWidth||this.temporaryDisplay();this.getChartSize();m=this.chartWidth;h=this.chartHeight;l=p({position:"relative",overflow:"hidden",width:m+"px",height:h+"px",textAlign:"left",lineHeight:"normal",zIndex:0,"-webkit-tap-highlight-color":"rgba(0,0,0,0)"},g.style);this.container=c=u("div",{id:e},l,c);this._cursor=c.style.cursor;this.renderer=new (a[g.renderer]||a.Renderer)(c,m,h,null,g.forExport,d.exporting&&d.exporting.allowHTML);this.setClassName(g.className);
this.renderer.setStyle(g.style);this.renderer.chartIndex=this.index;q(this,"afterGetContainer")},getMargins:function(a){var b=this.spacing,d=this.margin,g=this.titleOffset;this.resetMargins();g&&!c(d[0])&&(this.plotTop=Math.max(this.plotTop,g+this.options.title.margin+b[0]));this.legend&&this.legend.display&&this.legend.adjustMargins(d,b);q(this,"getMargins");a||this.getAxisMargins()},getAxisMargins:function(){var a=this,b=a.axisOffset=[0,0,0,0],d=a.margin;a.hasCartesianSeries&&h(a.axes,function(a){a.visible&&
a.getOffset()});h(L,function(g,m){c(d[m])||(a[g]+=b[m])});a.setChartSize()},reflow:function(b){var d=this,g=d.options.chart,m=d.renderTo,h=c(g.width)&&c(g.height),e=g.width||a.getStyle(m,"width"),g=g.height||a.getStyle(m,"height"),m=b?b.target:M;if(!h&&!d.isPrinting&&e&&g&&(m===M||m===f)){if(e!==d.containerWidth||g!==d.containerHeight)a.clearTimeout(d.reflowTimeout),d.reflowTimeout=r(function(){d.container&&d.setSize(void 0,void 0,!1)},b?100:0);d.containerWidth=e;d.containerHeight=g}},setReflow:function(a){var b=
this;!1===a||this.unbindReflow?!1===a&&this.unbindReflow&&(this.unbindReflow=this.unbindReflow()):(this.unbindReflow=C(M,"resize",function(a){b.reflow(a)}),C(this,"destroy",this.unbindReflow))},setSize:function(b,c,d){var g=this,m=g.renderer;g.isResizing+=1;a.setAnimation(d,g);g.oldChartHeight=g.chartHeight;g.oldChartWidth=g.chartWidth;void 0!==b&&(g.options.chart.width=b);void 0!==c&&(g.options.chart.height=c);g.getChartSize();b=m.globalAnimation;(b?F:y)(g.container,{width:g.chartWidth+"px",height:g.chartHeight+
"px"},b);g.setChartSize(!0);m.setSize(g.chartWidth,g.chartHeight,d);h(g.axes,function(a){a.isDirty=!0;a.setScale()});g.isDirtyLegend=!0;g.isDirtyBox=!0;g.layOutTitles();g.getMargins();g.redraw(d);g.oldChartHeight=null;q(g,"resize");r(function(){g&&q(g,"endResize",null,function(){--g.isResizing})},I(b).duration)},setChartSize:function(a){var b=this.inverted,c=this.renderer,g=this.chartWidth,d=this.chartHeight,m=this.options.chart,e=this.spacing,l=this.clipOffset,f,A,k,r;this.plotLeft=f=Math.round(this.plotLeft);
this.plotTop=A=Math.round(this.plotTop);this.plotWidth=k=Math.max(0,Math.round(g-f-this.marginRight));this.plotHeight=r=Math.max(0,Math.round(d-A-this.marginBottom));this.plotSizeX=b?r:k;this.plotSizeY=b?k:r;this.plotBorderWidth=m.plotBorderWidth||0;this.spacingBox=c.spacingBox={x:e[3],y:e[0],width:g-e[3]-e[1],height:d-e[0]-e[2]};this.plotBox=c.plotBox={x:f,y:A,width:k,height:r};g=2*Math.floor(this.plotBorderWidth/2);b=Math.ceil(Math.max(g,l[3])/2);c=Math.ceil(Math.max(g,l[0])/2);this.clipBox={x:b,
y:c,width:Math.floor(this.plotSizeX-Math.max(g,l[1])/2-b),height:Math.max(0,Math.floor(this.plotSizeY-Math.max(g,l[2])/2-c))};a||h(this.axes,function(a){a.setAxisSize();a.setAxisTranslation()});q(this,"afterSetChartSize",{skipAxes:a})},resetMargins:function(){var a=this,b=a.options.chart;h(["margin","spacing"],function(c){var g=b[c],d=v(g)?g:[g,g,g,g];h(["Top","Right","Bottom","Left"],function(g,m){a[c][m]=G(b[c+g],d[m])})});h(L,function(b,c){a[b]=G(a.margin[c],a.spacing[c])});a.axisOffset=[0,0,0,
0];a.clipOffset=[0,0,0,0]},drawChartBox:function(){var a=this.options.chart,b=this.renderer,c=this.chartWidth,g=this.chartHeight,d=this.chartBackground,m=this.plotBackground,h=this.plotBorder,e,l=this.plotBGImage,f=a.backgroundColor,A=a.plotBackgroundColor,k=a.plotBackgroundImage,r,p=this.plotLeft,G=this.plotTop,v=this.plotWidth,E=this.plotHeight,n=this.plotBox,B=this.clipRect,t=this.clipBox,u="animate";d||(this.chartBackground=d=b.rect().addClass("highcharts-background").add(),u="attr");e=a.borderWidth||
0;r=e+(a.shadow?8:0);f={fill:f||"none"};if(e||d["stroke-width"])f.stroke=a.borderColor,f["stroke-width"]=e;d.attr(f).shadow(a.shadow);d[u]({x:r/2,y:r/2,width:c-r-e%2,height:g-r-e%2,r:a.borderRadius});u="animate";m||(u="attr",this.plotBackground=m=b.rect().addClass("highcharts-plot-background").add());m[u](n);m.attr({fill:A||"none"}).shadow(a.plotShadow);k&&(l?l.animate(n):this.plotBGImage=b.image(k,p,G,v,E).add());B?B.animate({width:t.width,height:t.height}):this.clipRect=b.clipRect(t);u="animate";
h||(u="attr",this.plotBorder=h=b.rect().addClass("highcharts-plot-border").attr({zIndex:1}).add());h.attr({stroke:a.plotBorderColor,"stroke-width":a.plotBorderWidth||0,fill:"none"});h[u](h.crisp({x:p,y:G,width:v,height:E},-h.strokeWidth()));this.isDirtyBox=!1;q(this,"afterDrawChartBox")},propFromSeries:function(){var a=this,b=a.options.chart,c,g=a.options.series,d,m;h(["inverted","angular","polar"],function(h){c=E[b.type||b.defaultSeriesType];m=b[h]||c&&c.prototype[h];for(d=g&&g.length;!m&&d--;)(c=
E[g[d].type])&&c.prototype[h]&&(m=!0);a[h]=m})},linkSeries:function(){var a=this,b=a.series;h(b,function(a){a.linkedSeries.length=0});h(b,function(b){var c=b.options.linkedTo;J(c)&&(c=":previous"===c?a.series[b.index-1]:a.get(c))&&c.linkedParent!==b&&(c.linkedSeries.push(b),b.linkedParent=c,b.visible=G(b.options.visible,c.options.visible,b.visible))});q(this,"afterLinkSeries")},renderSeries:function(){h(this.series,function(a){a.translate();a.render()})},renderLabels:function(){var a=this,b=a.options.labels;
b.items&&h(b.items,function(c){var g=p(b.style,c.style),d=A(g.left)+a.plotLeft,m=A(g.top)+a.plotTop+12;delete g.left;delete g.top;a.renderer.text(c.html,d,m).attr({zIndex:2}).css(g).add()})},render:function(){var a=this.axes,b=this.renderer,c=this.options,g,d,m;this.setTitle();this.legend=new l(this,c.legend);this.getStacks&&this.getStacks();this.getMargins(!0);this.setChartSize();c=this.plotWidth;g=this.plotHeight=Math.max(this.plotHeight-21,0);h(a,function(a){a.setScale()});this.getAxisMargins();
d=1.1<c/this.plotWidth;m=1.05<g/this.plotHeight;if(d||m)h(a,function(a){(a.horiz&&d||!a.horiz&&m)&&a.setTickInterval(!0)}),this.getMargins();this.drawChartBox();this.hasCartesianSeries&&h(a,function(a){a.visible&&a.render()});this.seriesGroup||(this.seriesGroup=b.g("series-group").attr({zIndex:3}).add());this.renderSeries();this.renderLabels();this.addCredits();this.setResponsive&&this.setResponsive();this.hasRendered=!0},addCredits:function(a){var b=this;a=B(!0,this.options.credits,a);a.enabled&&
!this.credits&&(this.credits=this.renderer.text(a.text+(this.mapCredits||""),0,0).addClass("highcharts-credits").on("click",function(){a.href&&(M.location.href=a.href)}).attr({align:a.position.align,zIndex:8}).css(a.style).add().align(a.position),this.credits.update=function(a){b.credits=b.credits.destroy();b.addCredits(a)})},destroy:function(){var b=this,c=b.axes,g=b.series,d=b.container,m,e=d&&d.parentNode;q(b,"destroy");b.renderer.forExport?a.erase(w,b):w[b.index]=void 0;a.chartCount--;b.renderTo.removeAttribute("data-highcharts-chart");
N(b);for(m=c.length;m--;)c[m]=c[m].destroy();this.scroller&&this.scroller.destroy&&this.scroller.destroy();for(m=g.length;m--;)g[m]=g[m].destroy();h("title subtitle chartBackground plotBackground plotBGImage plotBorder seriesGroup clipRect credits pointer rangeSelector legend resetZoomButton tooltip renderer".split(" "),function(a){var c=b[a];c&&c.destroy&&(b[a]=c.destroy())});d&&(d.innerHTML="",N(d),e&&t(d));D(b,function(a,c){delete b[c]})},firstRender:function(){var a=this,b=a.options;if(!a.isReadyToRender||
a.isReadyToRender()){a.getContainer();a.resetMargins();a.setChartSize();a.propFromSeries();a.getAxes();h(b.series||[],function(b){a.initSeries(b)});a.linkSeries();q(a,"beforeRender");m&&(a.pointer=new m(a,b));a.render();if(!a.renderer.imgCount&&a.onload)a.onload();a.temporaryDisplay(!0)}},onload:function(){h([this.callback].concat(this.callbacks),function(a){a&&void 0!==this.index&&a.apply(this,[this])},this);q(this,"load");q(this,"render");c(this.index)&&this.setReflow(this.options.chart.reflow);
this.onload=null}})})(K);(function(a){var C=a.addEvent,F=a.Chart,I=a.each;C(F,"afterSetChartSize",function(n){var f=this.options.chart.scrollablePlotArea;(f=f&&f.minWidth)&&!this.renderer.forExport&&(this.scrollablePixels=f=Math.max(0,f-this.chartWidth))&&(this.plotWidth+=f,this.clipBox.width+=f,n.skipAxes||I(this.axes,function(e){1===e.side?e.getPlotLinePath=function(){var f=this.right,n;this.right=f-e.chart.scrollablePixels;n=a.Axis.prototype.getPlotLinePath.apply(this,arguments);this.right=f;return n}:
(e.setAxisSize(),e.setAxisTranslation())}))});C(F,"render",function(){this.scrollablePixels?(this.setUpScrolling&&this.setUpScrolling(),this.applyFixed()):this.fixedDiv&&this.applyFixed()});F.prototype.setUpScrolling=function(){this.scrollingContainer=a.createElement("div",{className:"highcharts-scrolling"},{overflowX:"auto",WebkitOverflowScrolling:"touch"},this.renderTo);this.innerContainer=a.createElement("div",{className:"highcharts-inner-container"},null,this.scrollingContainer);this.innerContainer.appendChild(this.container);
this.setUpScrolling=null};F.prototype.applyFixed=function(){var n=this.container,f,e,u=!this.fixedDiv;u&&(this.fixedDiv=a.createElement("div",{className:"highcharts-fixed"},{position:"absolute",overflow:"hidden",pointerEvents:"none",zIndex:2},null,!0),this.renderTo.insertBefore(this.fixedDiv,this.renderTo.firstChild),this.fixedRenderer=f=new a.Renderer(this.fixedDiv,0,0),this.scrollableMask=f.path().attr({fill:a.color(this.options.chart.backgroundColor||"#fff").setOpacity(.85).get(),zIndex:-1}).addClass("highcharts-scrollable-mask").add(),
a.each([this.inverted?".highcharts-xaxis":".highcharts-yaxis",this.inverted?".highcharts-xaxis-labels":".highcharts-yaxis-labels",".highcharts-contextbutton",".highcharts-credits",".highcharts-legend",".highcharts-subtitle",".highcharts-title",".highcharts-legend-checkbox"],function(e){a.each(n.querySelectorAll(e),function(a){(a.namespaceURI===f.SVG_NS?f.box:f.box.parentNode).appendChild(a);a.style.pointerEvents="auto"})}));this.fixedRenderer.setSize(this.chartWidth,this.chartHeight);e=this.chartWidth+
this.scrollablePixels;a.stop(this.container);this.container.style.width=e+"px";this.renderer.boxWrapper.attr({width:e,height:this.chartHeight,viewBox:[0,0,e,this.chartHeight].join(" ")});this.chartBackground.attr({width:e});u&&(e=this.options.chart.scrollablePlotArea,e.scrollPositionX&&(this.scrollingContainer.scrollLeft=this.scrollablePixels*e.scrollPositionX));u=this.axisOffset;e=this.plotTop-u[0]-1;var u=this.plotTop+this.plotHeight+u[2],x=this.plotLeft+this.plotWidth-this.scrollablePixels;this.scrollableMask.attr({d:this.scrollablePixels?
["M",0,e,"L",this.plotLeft-1,e,"L",this.plotLeft-1,u,"L",0,u,"Z","M",x,e,"L",this.chartWidth,e,"L",this.chartWidth,u,"L",x,u,"Z"]:["M",0,0]})}})(K);(function(a){var C,F=a.each,I=a.extend,n=a.erase,f=a.fireEvent,e=a.format,u=a.isArray,x=a.isNumber,t=a.pick,w=a.uniqueKey,y=a.defined,c=a.removeEvent;a.Point=C=function(){};a.Point.prototype={init:function(a,c,e){this.series=a;this.color=a.color;this.applyOptions(c,e);this.id=y(this.id)?this.id:w();a.options.colorByPoint?(c=a.options.colors||a.chart.options.colors,
this.color=this.color||c[a.colorCounter],c=c.length,e=a.colorCounter,a.colorCounter++,a.colorCounter===c&&(a.colorCounter=0)):e=a.colorIndex;this.colorIndex=t(this.colorIndex,e);a.chart.pointCount++;f(this,"afterInit");return this},applyOptions:function(a,c){var e=this.series,h=e.options.pointValKey||e.pointValKey;a=C.prototype.optionsToObject.call(this,a);I(this,a);this.options=this.options?I(this.options,a):a;a.group&&delete this.group;a.dataLabels&&delete this.dataLabels;h&&(this.y=this[h]);this.isNull=
t(this.isValid&&!this.isValid(),null===this.x||!x(this.y,!0));this.selected&&(this.state="select");"name"in this&&void 0===c&&e.xAxis&&e.xAxis.hasNames&&(this.x=e.xAxis.nameToX(this));void 0===this.x&&e&&(this.x=void 0===c?e.autoIncrement(this):c);return this},setNestedProperty:function(c,e,f){f=f.split(".");a.reduce(f,function(c,d,b,h){c[d]=h.length-1===b?e:a.isObject(c[d],!0)?c[d]:{};return c[d]},c);return c},optionsToObject:function(c){var e={},h=this.series,f=h.options.keys,d=f||h.pointArrayMap||
["y"],b=d.length,v=0,n=0;if(x(c)||null===c)e[d[0]]=c;else if(u(c))for(!f&&c.length>b&&(h=typeof c[0],"string"===h?e.name=c[0]:"number"===h&&(e.x=c[0]),v++);n<b;)f&&void 0===c[v]||(0<d[n].indexOf(".")?a.Point.prototype.setNestedProperty(e,c[v],d[n]):e[d[n]]=c[v]),v++,n++;else"object"===typeof c&&(e=c,c.dataLabels&&(h._hasPointLabels=!0),c.marker&&(h._hasPointMarkers=!0));return e},getClassName:function(){return"highcharts-point"+(this.selected?" highcharts-point-select":"")+(this.negative?" highcharts-negative":
"")+(this.isNull?" highcharts-null-point":"")+(void 0!==this.colorIndex?" highcharts-color-"+this.colorIndex:"")+(this.options.className?" "+this.options.className:"")+(this.zone&&this.zone.className?" "+this.zone.className.replace("highcharts-negative",""):"")},getZone:function(){var a=this.series,c=a.zones,a=a.zoneAxis||"y",e=0,f;for(f=c[e];this[a]>=f.value;)f=c[++e];this.nonZonedColor||(this.nonZonedColor=this.color);this.color=f&&f.color&&!this.options.color?f.color:this.nonZonedColor;return f},
destroy:function(){var a=this.series.chart,e=a.hoverPoints,f;a.pointCount--;e&&(this.setState(),n(e,this),e.length||(a.hoverPoints=null));if(this===a.hoverPoint)this.onMouseOut();if(this.graphic||this.dataLabel||this.dataLabels)c(this),this.destroyElements();this.legendItem&&a.legend.destroyItem(this);for(f in this)this[f]=null},destroyElements:function(){for(var a=["graphic","dataLabel","dataLabelUpper","connector","shadowGroup"],c,e=6;e--;)c=a[e],this[c]&&(this[c]=this[c].destroy());this.dataLabels&&
(F(this.dataLabels,function(a){a.element&&a.destroy()}),delete this.dataLabels);this.connectors&&(F(this.connectors,function(a){a.element&&a.destroy()}),delete this.connectors)},getLabelConfig:function(){return{x:this.category,y:this.y,color:this.color,colorIndex:this.colorIndex,key:this.name||this.category,series:this.series,point:this,percentage:this.percentage,total:this.total||this.stackTotal}},tooltipFormatter:function(a){var c=this.series,h=c.tooltipOptions,f=t(h.valueDecimals,""),d=h.valuePrefix||
"",b=h.valueSuffix||"";F(c.pointArrayMap||["y"],function(c){c="{point."+c;if(d||b)a=a.replace(RegExp(c+"}","g"),d+c+"}"+b);a=a.replace(RegExp(c+"}","g"),c+":,."+f+"f}")});return e(a,{point:this,series:this.series},c.chart.time)},firePointEvent:function(a,c,e){var h=this,d=this.series.options;(d.point.events[a]||h.options&&h.options.events&&h.options.events[a])&&this.importEvents();"click"===a&&d.allowPointSelect&&(e=function(a){h.select&&h.select(null,a.ctrlKey||a.metaKey||a.shiftKey)});f(this,a,
c,e)},visible:!0}})(K);(function(a){var C=a.addEvent,F=a.animObject,I=a.arrayMax,n=a.arrayMin,f=a.correctFloat,e=a.defaultOptions,u=a.defaultPlotOptions,x=a.defined,t=a.each,w=a.erase,y=a.extend,c=a.fireEvent,h=a.grep,p=a.isArray,k=a.isNumber,q=a.isString,d=a.merge,b=a.objectEach,v=a.pick,J=a.removeEvent,l=a.splat,L=a.SVGElement,B=a.syncTimeout,D=a.win;a.Series=a.seriesType("line",null,{lineWidth:2,allowPointSelect:!1,showCheckbox:!1,animation:{duration:1E3},events:{},marker:{lineWidth:0,lineColor:"#ffffff",
enabledThreshold:2,radius:4,states:{normal:{animation:!0},hover:{animation:{duration:50},enabled:!0,radiusPlus:2,lineWidthPlus:1},select:{fillColor:"#cccccc",lineColor:"#000000",lineWidth:2}}},point:{events:{}},dataLabels:{align:"center",formatter:function(){return null===this.y?"":a.numberFormat(this.y,-1)},style:{fontSize:"11px",fontWeight:"bold",color:"contrast",textOutline:"1px contrast"},verticalAlign:"bottom",x:0,y:0,padding:5},cropThreshold:300,pointRange:0,softThreshold:!0,states:{normal:{animation:!0},
hover:{animation:{duration:50},lineWidthPlus:1,marker:{},halo:{size:10,opacity:.25}},select:{}},stickyTracking:!0,turboThreshold:1E3,findNearestPointBy:"x"},{isCartesian:!0,pointClass:a.Point,sorted:!0,requireSorting:!0,directTouch:!1,axisTypes:["xAxis","yAxis"],colorCounter:0,parallelArrays:["x","y"],coll:"series",init:function(a,d){var m=this,e,h=a.series,g;m.chart=a;m.options=d=m.setOptions(d);m.linkedSeries=[];m.bindAxes();y(m,{name:d.name,state:"",visible:!1!==d.visible,selected:!0===d.selected});
e=d.events;b(e,function(a,b){C(m,b,a)});if(e&&e.click||d.point&&d.point.events&&d.point.events.click||d.allowPointSelect)a.runTrackerClick=!0;m.getColor();m.getSymbol();t(m.parallelArrays,function(a){m[a+"Data"]=[]});m.setData(d.data,!1);m.isCartesian&&(a.hasCartesianSeries=!0);h.length&&(g=h[h.length-1]);m._i=v(g&&g._i,-1)+1;a.orderSeries(this.insert(h));c(this,"afterInit")},insert:function(a){var b=this.options.index,c;if(k(b)){for(c=a.length;c--;)if(b>=v(a[c].options.index,a[c]._i)){a.splice(c+
1,0,this);break}-1===c&&a.unshift(this);c+=1}else a.push(this);return v(c,a.length-1)},bindAxes:function(){var b=this,c=b.options,d=b.chart,e;t(b.axisTypes||[],function(m){t(d[m],function(a){e=a.options;if(c[m]===e.index||void 0!==c[m]&&c[m]===e.id||void 0===c[m]&&0===e.index)b.insert(a.series),b[m]=a,a.isDirty=!0});b[m]||b.optionalAxis===m||a.error(18,!0)})},updateParallelArrays:function(a,b){var c=a.series,d=arguments,m=k(b)?function(g){var d="y"===g&&c.toYData?c.toYData(a):a[g];c[g+"Data"][b]=
d}:function(a){Array.prototype[b].apply(c[a+"Data"],Array.prototype.slice.call(d,2))};t(c.parallelArrays,m)},autoIncrement:function(){var a=this.options,b=this.xIncrement,c,d=a.pointIntervalUnit,e=this.chart.time,b=v(b,a.pointStart,0);this.pointInterval=c=v(this.pointInterval,a.pointInterval,1);d&&(a=new e.Date(b),"day"===d?e.set("Date",a,e.get("Date",a)+c):"month"===d?e.set("Month",a,e.get("Month",a)+c):"year"===d&&e.set("FullYear",a,e.get("FullYear",a)+c),c=a.getTime()-b);this.xIncrement=b+c;return b},
setOptions:function(a){var b=this.chart,m=b.options,h=m.plotOptions,f=(b.userOptions||{}).plotOptions||{},g=h[this.type];this.userOptions=a;b=d(g,h.series,a);this.tooltipOptions=d(e.tooltip,e.plotOptions.series&&e.plotOptions.series.tooltip,e.plotOptions[this.type].tooltip,m.tooltip.userOptions,h.series&&h.series.tooltip,h[this.type].tooltip,a.tooltip);this.stickyTracking=v(a.stickyTracking,f[this.type]&&f[this.type].stickyTracking,f.series&&f.series.stickyTracking,this.tooltipOptions.shared&&!this.noSharedTooltip?
!0:b.stickyTracking);null===g.marker&&delete b.marker;this.zoneAxis=b.zoneAxis;a=this.zones=(b.zones||[]).slice();!b.negativeColor&&!b.negativeFillColor||b.zones||a.push({value:b[this.zoneAxis+"Threshold"]||b.threshold||0,className:"highcharts-negative",color:b.negativeColor,fillColor:b.negativeFillColor});a.length&&x(a[a.length-1].value)&&a.push({color:this.color,fillColor:this.fillColor});c(this,"afterSetOptions",{options:b});return b},getName:function(){return this.name||"Series "+(this.index+
1)},getCyclic:function(a,b,c){var d,e=this.chart,g=this.userOptions,m=a+"Index",h=a+"Counter",f=c?c.length:v(e.options.chart[a+"Count"],e[a+"Count"]);b||(d=v(g[m],g["_"+m]),x(d)||(e.series.length||(e[h]=0),g["_"+m]=d=e[h]%f,e[h]+=1),c&&(b=c[d]));void 0!==d&&(this[m]=d);this[a]=b},getColor:function(){this.options.colorByPoint?this.options.color=null:this.getCyclic("color",this.options.color||u[this.type].color,this.chart.options.colors)},getSymbol:function(){this.getCyclic("symbol",this.options.marker.symbol,
this.chart.options.symbols)},drawLegendSymbol:a.LegendSymbolMixin.drawLineMarker,updateData:function(b){var c=this.options,d=this.points,e=[],m,g,h,f=this.requireSorting;t(b,function(b){var g;g=a.defined(b)&&this.pointClass.prototype.optionsToObject.call({series:this},b).x;k(g)&&(g=a.inArray(g,this.xData,h),-1===g||d[g].touched?e.push(b):b!==c.data[g]?(d[g].update(b,!1,null,!1),d[g].touched=!0,f&&(h=g+1)):d[g]&&(d[g].touched=!0),m=!0)},this);if(m)for(b=d.length;b--;)g=d[b],g.touched||g.remove(!1),
g.touched=!1;else if(b.length===d.length)t(b,function(a,b){d[b].update&&a!==c.data[b]&&d[b].update(a,!1,null,!1)});else return!1;t(e,function(a){this.addPoint(a,!1)},this);return!0},setData:function(b,c,d,e){var m=this,g=m.points,h=g&&g.length||0,f,l=m.options,A=m.chart,G=null,n=m.xAxis,B=l.turboThreshold,u=this.xData,D=this.yData,y=(f=m.pointArrayMap)&&f.length,N;b=b||[];f=b.length;c=v(c,!0);!1!==e&&f&&h&&!m.cropped&&!m.hasGroupedData&&m.visible&&!m.isSeriesBoosting&&(N=this.updateData(b));if(!N){m.xIncrement=
null;m.colorCounter=0;t(this.parallelArrays,function(a){m[a+"Data"].length=0});if(B&&f>B){for(d=0;null===G&&d<f;)G=b[d],d++;if(k(G))for(d=0;d<f;d++)u[d]=this.autoIncrement(),D[d]=b[d];else if(p(G))if(y)for(d=0;d<f;d++)G=b[d],u[d]=G[0],D[d]=G.slice(1,y+1);else for(d=0;d<f;d++)G=b[d],u[d]=G[0],D[d]=G[1];else a.error(12)}else for(d=0;d<f;d++)void 0!==b[d]&&(G={series:m},m.pointClass.prototype.applyOptions.apply(G,[b[d]]),m.updateParallelArrays(G,d));D&&q(D[0])&&a.error(14,!0);m.data=[];m.options.data=
m.userOptions.data=b;for(d=h;d--;)g[d]&&g[d].destroy&&g[d].destroy();n&&(n.minRange=n.userMinRange);m.isDirty=A.isDirtyBox=!0;m.isDirtyData=!!g;d=!1}"point"===l.legendType&&(this.processData(),this.generatePoints());c&&A.redraw(d)},processData:function(b){var c=this.xData,d=this.yData,e=c.length,m;m=0;var g,h,f=this.xAxis,l,k=this.options;l=k.cropThreshold;var p=this.getExtremesFromAll||k.getExtremesFromAll,q=this.isCartesian,k=f&&f.val2lin,v=f&&f.isLog,n=this.requireSorting,B,t;if(q&&!this.isDirty&&
!f.isDirty&&!this.yAxis.isDirty&&!b)return!1;f&&(b=f.getExtremes(),B=b.min,t=b.max);q&&this.sorted&&!p&&(!l||e>l||this.forceCrop)&&(c[e-1]<B||c[0]>t?(c=[],d=[]):this.yData&&(c[0]<B||c[e-1]>t)&&(m=this.cropData(this.xData,this.yData,B,t),c=m.xData,d=m.yData,m=m.start,g=!0));for(l=c.length||1;--l;)e=v?k(c[l])-k(c[l-1]):c[l]-c[l-1],0<e&&(void 0===h||e<h)?h=e:0>e&&n&&(a.error(15),n=!1);this.cropped=g;this.cropStart=m;this.processedXData=c;this.processedYData=d;this.closestPointRange=h},cropData:function(a,
b,c,d,e){var g=a.length,m=0,h=g,f;e=v(e,this.cropShoulder,1);for(f=0;f<g;f++)if(a[f]>=c){m=Math.max(0,f-e);break}for(c=f;c<g;c++)if(a[c]>d){h=c+e;break}return{xData:a.slice(m,h),yData:b.slice(m,h),start:m,end:h}},generatePoints:function(){var a=this.options,b=a.data,c=this.data,d,e=this.processedXData,g=this.processedYData,h=this.pointClass,f=e.length,k=this.cropStart||0,p,q=this.hasGroupedData,a=a.keys,v,n=[],B;c||q||(c=[],c.length=b.length,c=this.data=c);a&&q&&(this.options.keys=!1);for(B=0;B<f;B++)p=
k+B,q?(v=(new h).init(this,[e[B]].concat(l(g[B]))),v.dataGroup=this.groupMap[B],v.dataGroup.options&&(v.options=v.dataGroup.options,y(v,v.dataGroup.options))):(v=c[p])||void 0===b[p]||(c[p]=v=(new h).init(this,b[p],e[B])),v&&(v.index=p,n[B]=v);this.options.keys=a;if(c&&(f!==(d=c.length)||q))for(B=0;B<d;B++)B!==k||q||(B+=f),c[B]&&(c[B].destroyElements(),c[B].plotX=void 0);this.data=c;this.points=n},getExtremes:function(a){var b=this.yAxis,c=this.processedXData,d,e=[],g=0;d=this.xAxis.getExtremes();
var m=d.min,h=d.max,f,l,q=this.requireSorting?1:0,v,B;a=a||this.stackedYData||this.processedYData||[];d=a.length;for(B=0;B<d;B++)if(l=c[B],v=a[B],f=(k(v,!0)||p(v))&&(!b.positiveValuesOnly||v.length||0<v),l=this.getExtremesFromAll||this.options.getExtremesFromAll||this.cropped||(c[B+q]||l)>=m&&(c[B-q]||l)<=h,f&&l)if(f=v.length)for(;f--;)"number"===typeof v[f]&&(e[g++]=v[f]);else e[g++]=v;this.dataMin=n(e);this.dataMax=I(e)},translate:function(){this.processedXData||this.processData();this.generatePoints();
var a=this.options,b=a.stacking,d=this.xAxis,e=d.categories,h=this.yAxis,g=this.points,l=g.length,p=!!this.modifyValue,q=a.pointPlacement,B="between"===q||k(q),n=a.threshold,t=a.startFromThreshold?n:0,u,D,y,w,J=Number.MAX_VALUE;"between"===q&&(q=.5);k(q)&&(q*=v(a.pointRange||d.pointRange));for(a=0;a<l;a++){var L=g[a],C=L.x,F=L.y;D=L.low;var I=b&&h.stacks[(this.negStacks&&F<(t?0:n)?"-":"")+this.stackKey],K;h.positiveValuesOnly&&null!==F&&0>=F&&(L.isNull=!0);L.plotX=u=f(Math.min(Math.max(-1E5,d.translate(C,
0,0,0,1,q,"flags"===this.type)),1E5));b&&this.visible&&!L.isNull&&I&&I[C]&&(w=this.getStackIndicator(w,C,this.index),K=I[C],F=K.points[w.key],D=F[0],F=F[1],D===t&&w.key===I[C].base&&(D=v(k(n)&&n,h.min)),h.positiveValuesOnly&&0>=D&&(D=null),L.total=L.stackTotal=K.total,L.percentage=K.total&&L.y/K.total*100,L.stackY=F,K.setOffset(this.pointXOffset||0,this.barW||0));L.yBottom=x(D)?Math.min(Math.max(-1E5,h.translate(D,0,1,0,1)),1E5):null;p&&(F=this.modifyValue(F,L));L.plotY=D="number"===typeof F&&Infinity!==
F?Math.min(Math.max(-1E5,h.translate(F,0,1,0,1)),1E5):void 0;L.isInside=void 0!==D&&0<=D&&D<=h.len&&0<=u&&u<=d.len;L.clientX=B?f(d.translate(C,0,0,0,1,q)):u;L.negative=L.y<(n||0);L.category=e&&void 0!==e[L.x]?e[L.x]:L.x;L.isNull||(void 0!==y&&(J=Math.min(J,Math.abs(u-y))),y=u);L.zone=this.zones.length&&L.getZone()}this.closestPointRangePx=J;c(this,"afterTranslate")},getValidPoints:function(a,b){var c=this.chart;return h(a||this.points||[],function(a){return b&&!c.isInsidePlot(a.plotX,a.plotY,c.inverted)?
!1:!a.isNull})},setClip:function(a){var b=this.chart,c=this.options,d=b.renderer,e=b.inverted,g=this.clipBox,m=g||b.clipBox,h=this.sharedClipKey||["_sharedClip",a&&a.duration,a&&a.easing,m.height,c.xAxis,c.yAxis].join(),f=b[h],l=b[h+"m"];f||(a&&(m.width=0,e&&(m.x=b.plotSizeX),b[h+"m"]=l=d.clipRect(e?b.plotSizeX+99:-99,e?-b.plotLeft:-b.plotTop,99,e?b.chartWidth:b.chartHeight)),b[h]=f=d.clipRect(m),f.count={length:0});a&&!f.count[this.index]&&(f.count[this.index]=!0,f.count.length+=1);!1!==c.clip&&
(this.group.clip(a||g?f:b.clipRect),this.markerGroup.clip(l),this.sharedClipKey=h);a||(f.count[this.index]&&(delete f.count[this.index],--f.count.length),0===f.count.length&&h&&b[h]&&(g||(b[h]=b[h].destroy()),b[h+"m"]&&(b[h+"m"]=b[h+"m"].destroy())))},animate:function(a){var b=this.chart,c=F(this.options.animation),d;a?this.setClip(c):(d=this.sharedClipKey,(a=b[d])&&a.animate({width:b.plotSizeX,x:0},c),b[d+"m"]&&b[d+"m"].animate({width:b.plotSizeX+99,x:0},c),this.animate=null)},afterAnimate:function(){this.setClip();
c(this,"afterAnimate");this.finishedAnimating=!0},drawPoints:function(){var a=this.points,b=this.chart,c,d,e,g,h=this.options.marker,f,l,k,p=this[this.specialGroup]||this.markerGroup,q,n=v(h.enabled,this.xAxis.isRadial?!0:null,this.closestPointRangePx>=h.enabledThreshold*h.radius);if(!1!==h.enabled||this._hasPointMarkers)for(c=0;c<a.length;c++)d=a[c],g=d.graphic,f=d.marker||{},l=!!d.marker,e=n&&void 0===f.enabled||f.enabled,k=d.isInside,e&&!d.isNull?(e=v(f.symbol,this.symbol),q=this.markerAttribs(d,
d.selected&&"select"),g?g[k?"show":"hide"](!0).animate(q):k&&(0<q.width||d.hasImage)&&(d.graphic=g=b.renderer.symbol(e,q.x,q.y,q.width,q.height,l?f:h).add(p)),g&&g.attr(this.pointAttribs(d,d.selected&&"select")),g&&g.addClass(d.getClassName(),!0)):g&&(d.graphic=g.destroy())},markerAttribs:function(a,b){var c=this.options.marker,d=a.marker||{},e=d.symbol||c.symbol,g=v(d.radius,c.radius);b&&(c=c.states[b],b=d.states&&d.states[b],g=v(b&&b.radius,c&&c.radius,g+(c&&c.radiusPlus||0)));a.hasImage=e&&0===
e.indexOf("url");a.hasImage&&(g=0);a={x:Math.floor(a.plotX)-g,y:a.plotY-g};g&&(a.width=a.height=2*g);return a},pointAttribs:function(a,b){var c=this.options.marker,d=a&&a.options,e=d&&d.marker||{},g=this.color,h=d&&d.color,m=a&&a.color,d=v(e.lineWidth,c.lineWidth);a=a&&a.zone&&a.zone.color;g=h||a||m||g;a=e.fillColor||c.fillColor||g;g=e.lineColor||c.lineColor||g;b&&(c=c.states[b],b=e.states&&e.states[b]||{},d=v(b.lineWidth,c.lineWidth,d+v(b.lineWidthPlus,c.lineWidthPlus,0)),a=b.fillColor||c.fillColor||
a,g=b.lineColor||c.lineColor||g);return{stroke:g,"stroke-width":d,fill:a}},destroy:function(){var d=this,e=d.chart,h=/AppleWebKit\/533/.test(D.navigator.userAgent),f,l,g=d.data||[],k,p;c(d,"destroy");J(d);t(d.axisTypes||[],function(a){(p=d[a])&&p.series&&(w(p.series,d),p.isDirty=p.forceRedraw=!0)});d.legendItem&&d.chart.legend.destroyItem(d);for(l=g.length;l--;)(k=g[l])&&k.destroy&&k.destroy();d.points=null;a.clearTimeout(d.animationTimeout);b(d,function(a,b){a instanceof L&&!a.survive&&(f=h&&"group"===
b?"hide":"destroy",a[f]())});e.hoverSeries===d&&(e.hoverSeries=null);w(e.series,d);e.orderSeries();b(d,function(a,b){delete d[b]})},getGraphPath:function(a,b,c){var d=this,e=d.options,g=e.step,h,m=[],f=[],l;a=a||d.points;(h=a.reversed)&&a.reverse();(g={right:1,center:2}[g]||g&&3)&&h&&(g=4-g);!e.connectNulls||b||c||(a=this.getValidPoints(a));t(a,function(h,k){var r=h.plotX,p=h.plotY,q=a[k-1];(h.leftCliff||q&&q.rightCliff)&&!c&&(l=!0);h.isNull&&!x(b)&&0<k?l=!e.connectNulls:h.isNull&&!b?l=!0:(0===k||
l?k=["M",h.plotX,h.plotY]:d.getPointSpline?k=d.getPointSpline(a,h,k):g?(k=1===g?["L",q.plotX,p]:2===g?["L",(q.plotX+r)/2,q.plotY,"L",(q.plotX+r)/2,p]:["L",r,q.plotY],k.push("L",r,p)):k=["L",r,p],f.push(h.x),g&&(f.push(h.x),2===g&&f.push(h.x)),m.push.apply(m,k),l=!1)});m.xMap=f;return d.graphPath=m},drawGraph:function(){var a=this,b=this.options,c=(this.gappedPath||this.getGraphPath).call(this),d=[["graph","highcharts-graph",b.lineColor||this.color,b.dashStyle]],d=a.getZonesGraphs(d);t(d,function(d,
g){var e=d[0],h=a[e];h?(h.endX=a.preventGraphAnimation?null:c.xMap,h.animate({d:c})):c.length&&(a[e]=a.chart.renderer.path(c).addClass(d[1]).attr({zIndex:1}).add(a.group),h={stroke:d[2],"stroke-width":b.lineWidth,fill:a.fillGraph&&a.color||"none"},d[3]?h.dashstyle=d[3]:"square"!==b.linecap&&(h["stroke-linecap"]=h["stroke-linejoin"]="round"),h=a[e].attr(h).shadow(2>g&&b.shadow));h&&(h.startX=c.xMap,h.isArea=c.isArea)})},getZonesGraphs:function(a){t(this.zones,function(b,c){a.push(["zone-graph-"+c,
"highcharts-graph highcharts-zone-graph-"+c+" "+(b.className||""),b.color||this.color,b.dashStyle||this.options.dashStyle])},this);return a},applyZones:function(){var a=this,b=this.chart,c=b.renderer,d=this.zones,e,g,h=this.clips||[],f,l=this.graph,k=this.area,p=Math.max(b.chartWidth,b.chartHeight),q=this[(this.zoneAxis||"y")+"Axis"],n,B,u=b.inverted,D,y,w,x,J=!1;d.length&&(l||k)&&q&&void 0!==q.min&&(B=q.reversed,D=q.horiz,l&&!this.showLine&&l.hide(),k&&k.hide(),n=q.getExtremes(),t(d,function(d,m){e=
B?D?b.plotWidth:0:D?0:q.toPixels(n.min);e=Math.min(Math.max(v(g,e),0),p);g=Math.min(Math.max(Math.round(q.toPixels(v(d.value,n.max),!0)),0),p);J&&(e=g=q.toPixels(n.max));y=Math.abs(e-g);w=Math.min(e,g);x=Math.max(e,g);q.isXAxis?(f={x:u?x:w,y:0,width:y,height:p},D||(f.x=b.plotHeight-f.x)):(f={x:0,y:u?x:w,width:p,height:y},D&&(f.y=b.plotWidth-f.y));u&&c.isVML&&(f=q.isXAxis?{x:0,y:B?w:x,height:f.width,width:b.chartWidth}:{x:f.y-b.plotLeft-b.spacingBox.x,y:0,width:f.height,height:b.chartHeight});h[m]?
h[m].animate(f):(h[m]=c.clipRect(f),l&&a["zone-graph-"+m].clip(h[m]),k&&a["zone-area-"+m].clip(h[m]));J=d.value>n.max;a.resetZones&&0===g&&(g=void 0)}),this.clips=h)},invertGroups:function(a){function b(){t(["group","markerGroup"],function(b){c[b]&&(d.renderer.isVML&&c[b].attr({width:c.yAxis.len,height:c.xAxis.len}),c[b].width=c.yAxis.len,c[b].height=c.xAxis.len,c[b].invert(a))})}var c=this,d=c.chart,e;c.xAxis&&(e=C(d,"resize",b),C(c,"destroy",e),b(a),c.invertGroups=b)},plotGroup:function(a,b,c,d,
e){var g=this[a],h=!g;h&&(this[a]=g=this.chart.renderer.g().attr({zIndex:d||.1}).add(e));g.addClass("highcharts-"+b+" highcharts-series-"+this.index+" highcharts-"+this.type+"-series "+(x(this.colorIndex)?"highcharts-color-"+this.colorIndex+" ":"")+(this.options.className||"")+(g.hasClass("highcharts-tracker")?" highcharts-tracker":""),!0);g.attr({visibility:c})[h?"attr":"animate"](this.getPlotBox());return g},getPlotBox:function(){var a=this.chart,b=this.xAxis,c=this.yAxis;a.inverted&&(b=c,c=this.xAxis);
return{translateX:b?b.left:a.plotLeft,translateY:c?c.top:a.plotTop,scaleX:1,scaleY:1}},render:function(){var a=this,b=a.chart,d,e=a.options,h=!!a.animate&&b.renderer.isSVG&&F(e.animation).duration,g=a.visible?"inherit":"hidden",f=e.zIndex,l=a.hasRendered,k=b.seriesGroup,p=b.inverted;d=a.plotGroup("group","series",g,f,k);a.markerGroup=a.plotGroup("markerGroup","markers",g,f,k);h&&a.animate(!0);d.inverted=a.isCartesian?p:!1;a.drawGraph&&(a.drawGraph(),a.applyZones());a.drawDataLabels&&a.drawDataLabels();
a.visible&&a.drawPoints();a.drawTracker&&!1!==a.options.enableMouseTracking&&a.drawTracker();a.invertGroups(p);!1===e.clip||a.sharedClipKey||l||d.clip(b.clipRect);h&&a.animate();l||(a.animationTimeout=B(function(){a.afterAnimate()},h));a.isDirty=!1;a.hasRendered=!0;c(a,"afterRender")},redraw:function(){var a=this.chart,b=this.isDirty||this.isDirtyData,c=this.group,d=this.xAxis,e=this.yAxis;c&&(a.inverted&&c.attr({width:a.plotWidth,height:a.plotHeight}),c.animate({translateX:v(d&&d.left,a.plotLeft),
translateY:v(e&&e.top,a.plotTop)}));this.translate();this.render();b&&delete this.kdTree},kdAxisArray:["clientX","plotY"],searchPoint:function(a,b){var c=this.xAxis,d=this.yAxis,e=this.chart.inverted;return this.searchKDTree({clientX:e?c.len-a.chartY+c.pos:a.chartX-c.pos,plotY:e?d.len-a.chartX+d.pos:a.chartY-d.pos},b)},buildKDTree:function(){function a(c,d,g){var e,h;if(h=c&&c.length)return e=b.kdAxisArray[d%g],c.sort(function(a,b){return a[e]-b[e]}),h=Math.floor(h/2),{point:c[h],left:a(c.slice(0,
h),d+1,g),right:a(c.slice(h+1),d+1,g)}}this.buildingKdTree=!0;var b=this,c=-1<b.options.findNearestPointBy.indexOf("y")?2:1;delete b.kdTree;B(function(){b.kdTree=a(b.getValidPoints(null,!b.directTouch),c,c);b.buildingKdTree=!1},b.options.kdNow?0:1)},searchKDTree:function(a,b){function c(a,b,f,l){var m=b.point,k=d.kdAxisArray[f%l],p,q,r=m;q=x(a[e])&&x(m[e])?Math.pow(a[e]-m[e],2):null;p=x(a[g])&&x(m[g])?Math.pow(a[g]-m[g],2):null;p=(q||0)+(p||0);m.dist=x(p)?Math.sqrt(p):Number.MAX_VALUE;m.distX=x(q)?
Math.sqrt(q):Number.MAX_VALUE;k=a[k]-m[k];p=0>k?"left":"right";q=0>k?"right":"left";b[p]&&(p=c(a,b[p],f+1,l),r=p[h]<r[h]?p:m);b[q]&&Math.sqrt(k*k)<r[h]&&(a=c(a,b[q],f+1,l),r=a[h]<r[h]?a:r);return r}var d=this,e=this.kdAxisArray[0],g=this.kdAxisArray[1],h=b?"distX":"dist";b=-1<d.options.findNearestPointBy.indexOf("y")?2:1;this.kdTree||this.buildingKdTree||this.buildKDTree();if(this.kdTree)return c(a,this.kdTree,b,b)}})})(K);(function(a){var C=a.Axis,F=a.Chart,I=a.correctFloat,n=a.defined,f=a.destroyObjectProperties,
e=a.each,u=a.format,x=a.objectEach,t=a.pick,w=a.Series;a.StackItem=function(a,c,e,f,k){var h=a.chart.inverted;this.axis=a;this.isNegative=e;this.options=c;this.x=f;this.total=null;this.points={};this.stack=k;this.rightCliff=this.leftCliff=0;this.alignOptions={align:c.align||(h?e?"left":"right":"center"),verticalAlign:c.verticalAlign||(h?"middle":e?"bottom":"top"),y:t(c.y,h?4:e?14:-6),x:t(c.x,h?e?-6:6:0)};this.textAlign=c.textAlign||(h?e?"right":"left":"center")};a.StackItem.prototype={destroy:function(){f(this,
this.axis)},render:function(a){var c=this.axis.chart,e=this.options,f=e.format,f=f?u(f,this,c.time):e.formatter.call(this);this.label?this.label.attr({text:f,visibility:"hidden"}):this.label=c.renderer.text(f,null,null,e.useHTML).css(e.style).attr({align:this.textAlign,rotation:e.rotation,visibility:"hidden"}).add(a);this.label.labelrank=c.plotHeight},setOffset:function(a,c){var e=this.axis,f=e.chart,k=e.translate(e.usePercentage?100:this.total,0,0,0,1),q=e.translate(0),q=n(k)&&Math.abs(k-q);a=f.xAxis[0].translate(this.x)+
a;e=n(k)&&this.getStackBox(f,this,a,k,c,q,e);(c=this.label)&&e&&(c.align(this.alignOptions,null,e),e=c.alignAttr,c[!1===this.options.crop||f.isInsidePlot(e.x,e.y)?"show":"hide"](!0))},getStackBox:function(a,c,e,f,k,q,d){var b=c.axis.reversed,h=a.inverted;a=d.height+d.pos-(h?a.plotLeft:a.plotTop);c=c.isNegative&&!b||!c.isNegative&&b;return{x:h?c?f:f-q:e,y:h?a-e-k:c?a-f-q:a-f,width:h?q:k,height:h?k:q}}};F.prototype.getStacks=function(){var a=this;e(a.yAxis,function(a){a.stacks&&a.hasVisibleSeries&&
(a.oldStacks=a.stacks)});e(a.series,function(c){!c.options.stacking||!0!==c.visible&&!1!==a.options.chart.ignoreHiddenSeries||(c.stackKey=c.type+t(c.options.stack,""))})};C.prototype.buildStacks=function(){var a=this.series,c=t(this.options.reversedStacks,!0),e=a.length,f;if(!this.isXAxis){this.usePercentage=!1;for(f=e;f--;)a[c?f:e-f-1].setStackedPoints();for(f=0;f<e;f++)a[f].modifyStacks()}};C.prototype.renderStackTotals=function(){var a=this.chart,c=a.renderer,e=this.stacks,f=this.stackTotalGroup;
f||(this.stackTotalGroup=f=c.g("stack-labels").attr({visibility:"visible",zIndex:6}).add());f.translate(a.plotLeft,a.plotTop);x(e,function(a){x(a,function(a){a.render(f)})})};C.prototype.resetStacks=function(){var a=this,c=a.stacks;a.isXAxis||x(c,function(c){x(c,function(e,h){e.touched<a.stacksTouched?(e.destroy(),delete c[h]):(e.total=null,e.cumulative=null)})})};C.prototype.cleanStacks=function(){var a;this.isXAxis||(this.oldStacks&&(a=this.stacks=this.oldStacks),x(a,function(a){x(a,function(a){a.cumulative=
a.total})}))};w.prototype.setStackedPoints=function(){if(this.options.stacking&&(!0===this.visible||!1===this.chart.options.chart.ignoreHiddenSeries)){var e=this.processedXData,c=this.processedYData,h=[],f=c.length,k=this.options,q=k.threshold,d=t(k.startFromThreshold&&q,0),b=k.stack,k=k.stacking,v=this.stackKey,u="-"+v,l=this.negStacks,w=this.yAxis,B=w.stacks,D=w.oldStacks,m,G,A,x,E,g,r;w.stacksTouched+=1;for(E=0;E<f;E++)g=e[E],r=c[E],m=this.getStackIndicator(m,g,this.index),x=m.key,A=(G=l&&r<(d?
0:q))?u:v,B[A]||(B[A]={}),B[A][g]||(D[A]&&D[A][g]?(B[A][g]=D[A][g],B[A][g].total=null):B[A][g]=new a.StackItem(w,w.options.stackLabels,G,g,b)),A=B[A][g],null!==r?(A.points[x]=A.points[this.index]=[t(A.cumulative,d)],n(A.cumulative)||(A.base=x),A.touched=w.stacksTouched,0<m.index&&!1===this.singleStacks&&(A.points[x][0]=A.points[this.index+","+g+",0"][0])):A.points[x]=A.points[this.index]=null,"percent"===k?(G=G?v:u,l&&B[G]&&B[G][g]?(G=B[G][g],A.total=G.total=Math.max(G.total,A.total)+Math.abs(r)||
0):A.total=I(A.total+(Math.abs(r)||0))):A.total=I(A.total+(r||0)),A.cumulative=t(A.cumulative,d)+(r||0),null!==r&&(A.points[x].push(A.cumulative),h[E]=A.cumulative);"percent"===k&&(w.usePercentage=!0);this.stackedYData=h;w.oldStacks={}}};w.prototype.modifyStacks=function(){var a=this,c=a.stackKey,h=a.yAxis.stacks,f=a.processedXData,k,q=a.options.stacking;a[q+"Stacker"]&&e([c,"-"+c],function(c){for(var b=f.length,d,e;b--;)if(d=f[b],k=a.getStackIndicator(k,d,a.index,c),e=(d=h[c]&&h[c][d])&&d.points[k.key])a[q+
"Stacker"](e,d,b)})};w.prototype.percentStacker=function(a,c,e){c=c.total?100/c.total:0;a[0]=I(a[0]*c);a[1]=I(a[1]*c);this.stackedYData[e]=a[1]};w.prototype.getStackIndicator=function(a,c,e,f){!n(a)||a.x!==c||f&&a.key!==f?a={x:c,index:0,key:f}:a.index++;a.key=[e,c,a.index].join();return a}})(K);(function(a){var C=a.addEvent,F=a.animate,I=a.Axis,n=a.createElement,f=a.css,e=a.defined,u=a.each,x=a.erase,t=a.extend,w=a.fireEvent,y=a.inArray,c=a.isNumber,h=a.isObject,p=a.isArray,k=a.merge,q=a.objectEach,
d=a.pick,b=a.Point,v=a.Series,J=a.seriesTypes,l=a.setAnimation,L=a.splat;t(a.Chart.prototype,{addSeries:function(a,b,c){var e,h=this;a&&(b=d(b,!0),w(h,"addSeries",{options:a},function(){e=h.initSeries(a);h.isDirtyLegend=!0;h.linkSeries();w(h,"afterAddSeries");b&&h.redraw(c)}));return e},addAxis:function(a,b,c,e){var h=b?"xAxis":"yAxis",f=this.options;a=k(a,{index:this[h].length,isX:b});b=new I(this,a);f[h]=L(f[h]||{});f[h].push(a);d(c,!0)&&this.redraw(e);return b},showLoading:function(a){var b=this,
c=b.options,d=b.loadingDiv,e=c.loading,h=function(){d&&f(d,{left:b.plotLeft+"px",top:b.plotTop+"px",width:b.plotWidth+"px",height:b.plotHeight+"px"})};d||(b.loadingDiv=d=n("div",{className:"highcharts-loading highcharts-loading-hidden"},null,b.container),b.loadingSpan=n("span",{className:"highcharts-loading-inner"},null,d),C(b,"redraw",h));d.className="highcharts-loading";b.loadingSpan.innerHTML=a||c.lang.loading;f(d,t(e.style,{zIndex:10}));f(b.loadingSpan,e.labelStyle);b.loadingShown||(f(d,{opacity:0,
display:""}),F(d,{opacity:e.style.opacity||.5},{duration:e.showDuration||0}));b.loadingShown=!0;h()},hideLoading:function(){var a=this.options,b=this.loadingDiv;b&&(b.className="highcharts-loading highcharts-loading-hidden",F(b,{opacity:0},{duration:a.loading.hideDuration||100,complete:function(){f(b,{display:"none"})}}));this.loadingShown=!1},propsRequireDirtyBox:"backgroundColor borderColor borderWidth margin marginTop marginRight marginBottom marginLeft spacing spacingTop spacingRight spacingBottom spacingLeft borderRadius plotBackgroundColor plotBackgroundImage plotBorderColor plotBorderWidth plotShadow shadow".split(" "),
propsRequireUpdateSeries:"chart.inverted chart.polar chart.ignoreHiddenSeries chart.type colors plotOptions time tooltip".split(" "),update:function(a,b,h,f){var l=this,m={credits:"addCredits",title:"setTitle",subtitle:"setSubtitle"},p=a.chart,g,r,v=[];w(l,"update",{options:a});if(p){k(!0,l.options.chart,p);"className"in p&&l.setClassName(p.className);"reflow"in p&&l.setReflow(p.reflow);if("inverted"in p||"polar"in p||"type"in p)l.propFromSeries(),g=!0;"alignTicks"in p&&(g=!0);q(p,function(a,b){-1!==
y("chart."+b,l.propsRequireUpdateSeries)&&(r=!0);-1!==y(b,l.propsRequireDirtyBox)&&(l.isDirtyBox=!0)});"style"in p&&l.renderer.setStyle(p.style)}a.colors&&(this.options.colors=a.colors);a.plotOptions&&k(!0,this.options.plotOptions,a.plotOptions);q(a,function(a,b){if(l[b]&&"function"===typeof l[b].update)l[b].update(a,!1);else if("function"===typeof l[m[b]])l[m[b]](a);"chart"!==b&&-1!==y(b,l.propsRequireUpdateSeries)&&(r=!0)});u("xAxis yAxis zAxis series colorAxis pane".split(" "),function(b){var c;
a[b]&&("series"===b&&(c=[],u(l[b],function(a,b){a.options.isInternal||c.push(b)})),u(L(a[b]),function(a,d){(d=e(a.id)&&l.get(a.id)||l[b][c?c[d]:d])&&d.coll===b&&(d.update(a,!1),h&&(d.touched=!0));if(!d&&h)if("series"===b)l.addSeries(a,!1).touched=!0;else if("xAxis"===b||"yAxis"===b)l.addAxis(a,"xAxis"===b,!1).touched=!0}),h&&u(l[b],function(a){a.touched||a.options.isInternal?delete a.touched:v.push(a)}))});u(v,function(a){a.remove&&a.remove(!1)});g&&u(l.axes,function(a){a.update({},!1)});r&&u(l.series,
function(a){a.update({},!1)});a.loading&&k(!0,l.options.loading,a.loading);g=p&&p.width;p=p&&p.height;c(g)&&g!==l.chartWidth||c(p)&&p!==l.chartHeight?l.setSize(g,p,f):d(b,!0)&&l.redraw(f);w(l,"afterUpdate",{options:a})},setSubtitle:function(a){this.setTitle(void 0,a)}});t(b.prototype,{update:function(a,b,c,e){function f(){l.applyOptions(a);null===l.y&&g&&(l.graphic=g.destroy());h(a,!0)&&(g&&g.element&&a&&a.marker&&void 0!==a.marker.symbol&&(l.graphic=g.destroy()),a&&a.dataLabels&&l.dataLabel&&(l.dataLabel=
l.dataLabel.destroy()),l.connector&&(l.connector=l.connector.destroy()));k=l.index;m.updateParallelArrays(l,k);p.data[k]=h(p.data[k],!0)||h(a,!0)?l.options:d(a,p.data[k]);m.isDirty=m.isDirtyData=!0;!m.fixedBox&&m.hasCartesianSeries&&(q.isDirtyBox=!0);"point"===p.legendType&&(q.isDirtyLegend=!0);b&&q.redraw(c)}var l=this,m=l.series,g=l.graphic,k,q=m.chart,p=m.options;b=d(b,!0);!1===e?f():l.firePointEvent("update",{options:a},f)},remove:function(a,b){this.series.removePoint(y(this,this.series.data),
a,b)}});t(v.prototype,{addPoint:function(a,b,c,e){var h=this.options,f=this.data,l=this.chart,g=this.xAxis,g=g&&g.hasNames&&g.names,m=h.data,k,p,q=this.xData,v,n;b=d(b,!0);k={series:this};this.pointClass.prototype.applyOptions.apply(k,[a]);n=k.x;v=q.length;if(this.requireSorting&&n<q[v-1])for(p=!0;v&&q[v-1]>n;)v--;this.updateParallelArrays(k,"splice",v,0,0);this.updateParallelArrays(k,v);g&&k.name&&(g[n]=k.name);m.splice(v,0,a);p&&(this.data.splice(v,0,null),this.processData());"point"===h.legendType&&
this.generatePoints();c&&(f[0]&&f[0].remove?f[0].remove(!1):(f.shift(),this.updateParallelArrays(k,"shift"),m.shift()));this.isDirtyData=this.isDirty=!0;b&&l.redraw(e)},removePoint:function(a,b,c){var e=this,h=e.data,f=h[a],m=e.points,g=e.chart,k=function(){m&&m.length===h.length&&m.splice(a,1);h.splice(a,1);e.options.data.splice(a,1);e.updateParallelArrays(f||{series:e},"splice",a,1);f&&f.destroy();e.isDirty=!0;e.isDirtyData=!0;b&&g.redraw()};l(c,g);b=d(b,!0);f?f.firePointEvent("remove",null,k):
k()},remove:function(a,b,c){function e(){h.destroy();h.remove=null;f.isDirtyLegend=f.isDirtyBox=!0;f.linkSeries();d(a,!0)&&f.redraw(b)}var h=this,f=h.chart;!1!==c?w(h,"remove",null,e):e()},update:function(b,c){var e=this,h=e.chart,f=e.userOptions,l=e.oldType||e.type,q=b.type||f.type||h.options.chart.type,g=J[l].prototype,p,v=["group","markerGroup","dataLabelsGroup"],n=["navigatorSeries","baseSeries"],B=e.finishedAnimating&&{animation:!1},D=["data","name","turboThreshold"],x=a.keys(b),L=0<x.length;
u(x,function(a){-1===y(a,D)&&(L=!1)});if(L)b.data&&this.setData(b.data,!1),b.name&&this.setName(b.name,!1);else{n=v.concat(n);u(n,function(a){n[a]=e[a];delete e[a]});b=k(f,B,{index:e.index,pointStart:d(f.pointStart,e.xData[0])},{data:e.options.data},b);e.remove(!1,null,!1);for(p in g)e[p]=void 0;J[q||l]?t(e,J[q||l].prototype):a.error(17,!0);u(n,function(a){e[a]=n[a]});e.init(h,b);b.zIndex!==f.zIndex&&u(v,function(a){e[a]&&e[a].attr({zIndex:b.zIndex})});e.oldType=l;h.linkSeries()}w(this,"afterUpdate");
d(c,!0)&&h.redraw(L?void 0:!1)},setName:function(a){this.name=this.options.name=this.userOptions.name=a;this.chart.isDirtyLegend=!0}});t(I.prototype,{update:function(a,b){var c=this.chart,e=a&&a.events||{};a=k(this.userOptions,a);c.options[this.coll].indexOf&&(c.options[this.coll][c.options[this.coll].indexOf(this.userOptions)]=a);q(c.options[this.coll].events,function(a,b){"undefined"===typeof e[b]&&(e[b]=void 0)});this.destroy(!0);this.init(c,t(a,{events:e}));c.isDirtyBox=!0;d(b,!0)&&c.redraw()},
remove:function(a){for(var b=this.chart,c=this.coll,e=this.series,h=e.length;h--;)e[h]&&e[h].remove(!1);x(b.axes,this);x(b[c],this);p(b.options[c])?b.options[c].splice(this.options.index,1):delete b.options[c];u(b[c],function(a,b){a.options.index=a.userOptions.index=b});this.destroy();b.isDirtyBox=!0;d(a,!0)&&b.redraw()},setTitle:function(a,b){this.update({title:a},b)},setCategories:function(a,b){this.update({categories:a},b)}})})(K);(function(a){var C=a.color,F=a.each,I=a.map,n=a.pick,f=a.Series,
e=a.seriesType;e("area","line",{softThreshold:!1,threshold:0},{singleStacks:!1,getStackPoints:function(e){var f=[],t=[],u=this.xAxis,y=this.yAxis,c=y.stacks[this.stackKey],h={},p=this.index,k=y.series,q=k.length,d,b=n(y.options.reversedStacks,!0)?1:-1,v;e=e||this.points;if(this.options.stacking){for(v=0;v<e.length;v++)e[v].leftNull=e[v].rightNull=null,h[e[v].x]=e[v];a.objectEach(c,function(a,b){null!==a.total&&t.push(b)});t.sort(function(a,b){return a-b});d=I(k,function(){return this.visible});F(t,
function(a,e){var l=0,k,n;if(h[a]&&!h[a].isNull)f.push(h[a]),F([-1,1],function(f){var l=1===f?"rightNull":"leftNull",m=0,u=c[t[e+f]];if(u)for(v=p;0<=v&&v<q;)k=u.points[v],k||(v===p?h[a][l]=!0:d[v]&&(n=c[a].points[v])&&(m-=n[1]-n[0])),v+=b;h[a][1===f?"rightCliff":"leftCliff"]=m});else{for(v=p;0<=v&&v<q;){if(k=c[a].points[v]){l=k[1];break}v+=b}l=y.translate(l,0,1,0,1);f.push({isNull:!0,plotX:u.translate(a,0,0,0,1),x:a,plotY:l,yBottom:l})}})}return f},getGraphPath:function(a){var e=f.prototype.getGraphPath,
t=this.options,u=t.stacking,y=this.yAxis,c,h,p=[],k=[],q=this.index,d,b=y.stacks[this.stackKey],v=t.threshold,J=y.getThreshold(t.threshold),l,t=t.connectNulls||"percent"===u,L=function(c,e,h){var f=a[c];c=u&&b[f.x].points[q];var l=f[h+"Null"]||0;h=f[h+"Cliff"]||0;var m,n,f=!0;h||l?(m=(l?c[0]:c[1])+h,n=c[0]+h,f=!!l):!u&&a[e]&&a[e].isNull&&(m=n=v);void 0!==m&&(k.push({plotX:d,plotY:null===m?J:y.getThreshold(m),isNull:f,isCliff:!0}),p.push({plotX:d,plotY:null===n?J:y.getThreshold(n),doCurve:!1}))};a=
a||this.points;u&&(a=this.getStackPoints(a));for(c=0;c<a.length;c++)if(h=a[c].isNull,d=n(a[c].rectPlotX,a[c].plotX),l=n(a[c].yBottom,J),!h||t)t||L(c,c-1,"left"),h&&!u&&t||(k.push(a[c]),p.push({x:c,plotX:d,plotY:l})),t||L(c,c+1,"right");c=e.call(this,k,!0,!0);p.reversed=!0;h=e.call(this,p,!0,!0);h.length&&(h[0]="L");h=c.concat(h);e=e.call(this,k,!1,t);h.xMap=c.xMap;this.areaPath=h;return e},drawGraph:function(){this.areaPath=[];f.prototype.drawGraph.apply(this);var a=this,e=this.areaPath,t=this.options,
w=[["area","highcharts-area",this.color,t.fillColor]];F(this.zones,function(e,c){w.push(["zone-area-"+c,"highcharts-area highcharts-zone-area-"+c+" "+e.className,e.color||a.color,e.fillColor||t.fillColor])});F(w,function(f){var c=f[0],h=a[c];h?(h.endX=a.preventGraphAnimation?null:e.xMap,h.animate({d:e})):(h=a[c]=a.chart.renderer.path(e).addClass(f[1]).attr({fill:n(f[3],C(f[2]).setOpacity(n(t.fillOpacity,.75)).get()),zIndex:0}).add(a.group),h.isArea=!0);h.startX=e.xMap;h.shiftUnit=t.step?2:1})},drawLegendSymbol:a.LegendSymbolMixin.drawRectangle})})(K);
(function(a){var C=a.pick;a=a.seriesType;a("spline","line",{},{getPointSpline:function(a,I,n){var f=I.plotX,e=I.plotY,u=a[n-1];n=a[n+1];var x,t,w,y;if(u&&!u.isNull&&!1!==u.doCurve&&!I.isCliff&&n&&!n.isNull&&!1!==n.doCurve&&!I.isCliff){a=u.plotY;w=n.plotX;n=n.plotY;var c=0;x=(1.5*f+u.plotX)/2.5;t=(1.5*e+a)/2.5;w=(1.5*f+w)/2.5;y=(1.5*e+n)/2.5;w!==x&&(c=(y-t)*(w-f)/(w-x)+e-y);t+=c;y+=c;t>a&&t>e?(t=Math.max(a,e),y=2*e-t):t<a&&t<e&&(t=Math.min(a,e),y=2*e-t);y>n&&y>e?(y=Math.max(n,e),t=2*e-y):y<n&&y<e&&
(y=Math.min(n,e),t=2*e-y);I.rightContX=w;I.rightContY=y}I=["C",C(u.rightContX,u.plotX),C(u.rightContY,u.plotY),C(x,f),C(t,e),f,e];u.rightContX=u.rightContY=null;return I}})})(K);(function(a){var C=a.seriesTypes.area.prototype,F=a.seriesType;F("areaspline","spline",a.defaultPlotOptions.area,{getStackPoints:C.getStackPoints,getGraphPath:C.getGraphPath,drawGraph:C.drawGraph,drawLegendSymbol:a.LegendSymbolMixin.drawRectangle})})(K);(function(a){var C=a.animObject,F=a.color,I=a.each,n=a.extend,f=a.defined,
e=a.isNumber,u=a.merge,x=a.pick,t=a.Series,w=a.seriesType,y=a.svg;w("column","line",{borderRadius:0,crisp:!0,groupPadding:.2,marker:null,pointPadding:.1,minPointLength:0,cropThreshold:50,pointRange:null,states:{hover:{halo:!1,brightness:.1},select:{color:"#cccccc",borderColor:"#000000"}},dataLabels:{align:null,verticalAlign:null,y:null},softThreshold:!1,startFromThreshold:!0,stickyTracking:!1,tooltip:{distance:6},threshold:0,borderColor:"#ffffff"},{cropShoulder:0,directTouch:!0,trackerGroups:["group",
"dataLabelsGroup"],negStacks:!0,init:function(){t.prototype.init.apply(this,arguments);var a=this,e=a.chart;e.hasRendered&&I(e.series,function(c){c.type===a.type&&(c.isDirty=!0)})},getColumnMetrics:function(){var a=this,e=a.options,f=a.xAxis,k=a.yAxis,q=f.options.reversedStacks,q=f.reversed&&!q||!f.reversed&&q,d,b={},v=0;!1===e.grouping?v=1:I(a.chart.series,function(c){var e=c.options,f=c.yAxis,h;c.type!==a.type||!c.visible&&a.chart.options.chart.ignoreHiddenSeries||k.len!==f.len||k.pos!==f.pos||
(e.stacking?(d=c.stackKey,void 0===b[d]&&(b[d]=v++),h=b[d]):!1!==e.grouping&&(h=v++),c.columnIndex=h)});var n=Math.min(Math.abs(f.transA)*(f.ordinalSlope||e.pointRange||f.closestPointRange||f.tickInterval||1),f.len),l=n*e.groupPadding,t=(n-2*l)/(v||1),e=Math.min(e.maxPointWidth||f.len,x(e.pointWidth,t*(1-2*e.pointPadding)));a.columnMetrics={width:e,offset:(t-e)/2+(l+((a.columnIndex||0)+(q?1:0))*t-n/2)*(q?-1:1)};return a.columnMetrics},crispCol:function(a,e,f,k){var c=this.chart,d=this.borderWidth,
b=-(d%2?.5:0),d=d%2?.5:1;c.inverted&&c.renderer.isVML&&(d+=1);this.options.crisp&&(f=Math.round(a+f)+b,a=Math.round(a)+b,f-=a);k=Math.round(e+k)+d;b=.5>=Math.abs(e)&&.5<k;e=Math.round(e)+d;k-=e;b&&k&&(--e,k+=1);return{x:a,y:e,width:f,height:k}},translate:function(){var a=this,e=a.chart,p=a.options,k=a.dense=2>a.closestPointRange*a.xAxis.transA,k=a.borderWidth=x(p.borderWidth,k?0:1),q=a.yAxis,d=p.threshold,b=a.translatedThreshold=q.getThreshold(d),v=x(p.minPointLength,5),n=a.getColumnMetrics(),l=n.width,
u=a.barW=Math.max(l,1+2*k),B=a.pointXOffset=n.offset;e.inverted&&(b-=.5);p.pointPadding&&(u=Math.ceil(u));t.prototype.translate.apply(a);I(a.points,function(c){var h=x(c.yBottom,b),k=999+Math.abs(h),p=l,k=Math.min(Math.max(-k,c.plotY),q.len+k),n=c.plotX+B,t=u,g=Math.min(k,h),r,w=Math.max(k,h)-g;v&&Math.abs(w)<v&&(w=v,r=!q.reversed&&!c.negative||q.reversed&&c.negative,c.y===d&&a.dataMax<=d&&q.min<d&&(r=!r),g=Math.abs(g-b)>v?h-v:b-(r?v:0));f(c.options.pointWidth)&&(p=t=Math.ceil(c.options.pointWidth),
n-=Math.round((p-l)/2));c.barX=n;c.pointWidth=p;c.tooltipPos=e.inverted?[q.len+q.pos-e.plotLeft-k,a.xAxis.len-n-t/2,w]:[n+t/2,k+q.pos-e.plotTop,w];c.shapeType="rect";c.shapeArgs=a.crispCol.apply(a,c.isNull?[n,b,t,0]:[n,g,t,w])})},getSymbol:a.noop,drawLegendSymbol:a.LegendSymbolMixin.drawRectangle,drawGraph:function(){this.group[this.dense?"addClass":"removeClass"]("highcharts-dense-data")},pointAttribs:function(a,e){var c=this.options,f,h=this.pointAttrToOptions||{};f=h.stroke||"borderColor";var d=
h["stroke-width"]||"borderWidth",b=a&&a.color||this.color,n=a&&a[f]||c[f]||this.color||b,t=a&&a[d]||c[d]||this[d]||0,h=c.dashStyle;a&&this.zones.length&&(b=a.getZone(),b=a.options.color||b&&b.color||this.color);e&&(a=u(c.states[e],a.options.states&&a.options.states[e]||{}),e=a.brightness,b=a.color||void 0!==e&&F(b).brighten(a.brightness).get()||b,n=a[f]||n,t=a[d]||t,h=a.dashStyle||h);f={fill:b,stroke:n,"stroke-width":t};h&&(f.dashstyle=h);return f},drawPoints:function(){var a=this,f=this.chart,p=
a.options,k=f.renderer,q=p.animationLimit||250,d;I(a.points,function(b){var c=b.graphic,h=c&&f.pointCount<q?"animate":"attr";if(e(b.plotY)&&null!==b.y){d=b.shapeArgs;if(c)c[h](u(d));else b.graphic=c=k[b.shapeType](d).add(b.group||a.group);p.borderRadius&&c.attr({r:p.borderRadius});c[h](a.pointAttribs(b,b.selected&&"select")).shadow(p.shadow,null,p.stacking&&!p.borderRadius);c.addClass(b.getClassName(),!0)}else c&&(b.graphic=c.destroy())})},animate:function(a){var c=this,e=this.yAxis,f=c.options,q=
this.chart.inverted,d={},b=q?"translateX":"translateY",v;y&&(a?(d.scaleY=.001,a=Math.min(e.pos+e.len,Math.max(e.pos,e.toPixels(f.threshold))),q?d.translateX=a-e.len:d.translateY=a,c.group.attr(d)):(v=c.group.attr(b),c.group.animate({scaleY:1},n(C(c.options.animation),{step:function(a,f){d[b]=v+f.pos*(e.pos-v);c.group.attr(d)}})),c.animate=null))},remove:function(){var a=this,e=a.chart;e.hasRendered&&I(e.series,function(c){c.type===a.type&&(c.isDirty=!0)});t.prototype.remove.apply(a,arguments)}})})(K);
(function(a){a=a.seriesType;a("bar","column",null,{inverted:!0})})(K);(function(a){var C=a.Series;a=a.seriesType;a("scatter","line",{lineWidth:0,findNearestPointBy:"xy",marker:{enabled:!0},tooltip:{headerFormat:'\x3cspan style\x3d"color:{point.color}"\x3e\u25cf\x3c/span\x3e \x3cspan style\x3d"font-size: 0.85em"\x3e {series.name}\x3c/span\x3e\x3cbr/\x3e',pointFormat:"x: \x3cb\x3e{point.x}\x3c/b\x3e\x3cbr/\x3ey: \x3cb\x3e{point.y}\x3c/b\x3e\x3cbr/\x3e"}},{sorted:!1,requireSorting:!1,noSharedTooltip:!0,
trackerGroups:["group","markerGroup","dataLabelsGroup"],takeOrdinalPosition:!1,drawGraph:function(){this.options.lineWidth&&C.prototype.drawGraph.call(this)}})})(K);(function(a){var C=a.deg2rad,F=a.isNumber,I=a.pick,n=a.relativeLength;a.CenteredSeriesMixin={getCenter:function(){var a=this.options,e=this.chart,u=2*(a.slicedOffset||0),x=e.plotWidth-2*u,e=e.plotHeight-2*u,t=a.center,t=[I(t[0],"50%"),I(t[1],"50%"),a.size||"100%",a.innerSize||0],w=Math.min(x,e),y,c;for(y=0;4>y;++y)c=t[y],a=2>y||2===y&&
/%$/.test(c),t[y]=n(c,[x,e,w,t[2]][y])+(a?u:0);t[3]>t[2]&&(t[3]=t[2]);return t},getStartAndEndRadians:function(a,e){a=F(a)?a:0;e=F(e)&&e>a&&360>e-a?e:a+360;return{start:C*(a+-90),end:C*(e+-90)}}}})(K);(function(a){var C=a.addEvent,F=a.CenteredSeriesMixin,I=a.defined,n=a.each,f=a.extend,e=F.getStartAndEndRadians,u=a.inArray,x=a.noop,t=a.pick,w=a.Point,y=a.Series,c=a.seriesType,h=a.setAnimation;c("pie","line",{center:[null,null],clip:!1,colorByPoint:!0,dataLabels:{allowOverlap:!0,distance:30,enabled:!0,
formatter:function(){return this.point.isNull?void 0:this.point.name},x:0},ignoreHiddenPoint:!0,legendType:"point",marker:null,size:null,showInLegend:!1,slicedOffset:10,stickyTracking:!1,tooltip:{followPointer:!0},borderColor:"#ffffff",borderWidth:1,states:{hover:{brightness:.1}}},{isCartesian:!1,requireSorting:!1,directTouch:!0,noSharedTooltip:!0,trackerGroups:["group","dataLabelsGroup"],axisTypes:[],pointAttribs:a.seriesTypes.column.prototype.pointAttribs,animate:function(a){var c=this,e=c.points,
d=c.startAngleRad;a||(n(e,function(a){var b=a.graphic,e=a.shapeArgs;b&&(b.attr({r:a.startR||c.center[3]/2,start:d,end:d}),b.animate({r:e.r,start:e.start,end:e.end},c.options.animation))}),c.animate=null)},updateTotals:function(){var a,c=0,e=this.points,d=e.length,b,f=this.options.ignoreHiddenPoint;for(a=0;a<d;a++)b=e[a],c+=f&&!b.visible?0:b.isNull?0:b.y;this.total=c;for(a=0;a<d;a++)b=e[a],b.percentage=0<c&&(b.visible||!f)?b.y/c*100:0,b.total=c},generatePoints:function(){y.prototype.generatePoints.call(this);
this.updateTotals()},translate:function(a){this.generatePoints();var c=0,f=this.options,d=f.slicedOffset,b=d+(f.borderWidth||0),h,n,l,p=e(f.startAngle,f.endAngle),u=this.startAngleRad=p.start,p=(this.endAngleRad=p.end)-u,w=this.points,m,x=f.dataLabels.distance,f=f.ignoreHiddenPoint,A,y=w.length,E;a||(this.center=a=this.getCenter());this.getX=function(b,c,d){l=Math.asin(Math.min((b-a[1])/(a[2]/2+d.labelDistance),1));return a[0]+(c?-1:1)*Math.cos(l)*(a[2]/2+d.labelDistance)};for(A=0;A<y;A++){E=w[A];
E.labelDistance=t(E.options.dataLabels&&E.options.dataLabels.distance,x);this.maxLabelDistance=Math.max(this.maxLabelDistance||0,E.labelDistance);h=u+c*p;if(!f||E.visible)c+=E.percentage/100;n=u+c*p;E.shapeType="arc";E.shapeArgs={x:a[0],y:a[1],r:a[2]/2,innerR:a[3]/2,start:Math.round(1E3*h)/1E3,end:Math.round(1E3*n)/1E3};l=(n+h)/2;l>1.5*Math.PI?l-=2*Math.PI:l<-Math.PI/2&&(l+=2*Math.PI);E.slicedTranslation={translateX:Math.round(Math.cos(l)*d),translateY:Math.round(Math.sin(l)*d)};n=Math.cos(l)*a[2]/
2;m=Math.sin(l)*a[2]/2;E.tooltipPos=[a[0]+.7*n,a[1]+.7*m];E.half=l<-Math.PI/2||l>Math.PI/2?1:0;E.angle=l;h=Math.min(b,E.labelDistance/5);E.labelPos=[a[0]+n+Math.cos(l)*E.labelDistance,a[1]+m+Math.sin(l)*E.labelDistance,a[0]+n+Math.cos(l)*h,a[1]+m+Math.sin(l)*h,a[0]+n,a[1]+m,0>E.labelDistance?"center":E.half?"right":"left",l]}},drawGraph:null,drawPoints:function(){var a=this,c=a.chart.renderer,e,d,b,h,t=a.options.shadow;t&&!a.shadowGroup&&(a.shadowGroup=c.g("shadow").add(a.group));n(a.points,function(l){d=
l.graphic;if(l.isNull)d&&(l.graphic=d.destroy());else{h=l.shapeArgs;e=l.getTranslate();var k=l.shadowGroup;t&&!k&&(k=l.shadowGroup=c.g("shadow").add(a.shadowGroup));k&&k.attr(e);b=a.pointAttribs(l,l.selected&&"select");d?d.setRadialReference(a.center).attr(b).animate(f(h,e)):(l.graphic=d=c[l.shapeType](h).setRadialReference(a.center).attr(e).add(a.group),d.attr(b).attr({"stroke-linejoin":"round"}).shadow(t,k));d.attr({visibility:l.visible?"inherit":"hidden"});d.addClass(l.getClassName())}})},searchPoint:x,
sortByAngle:function(a,c){a.sort(function(a,d){return void 0!==a.angle&&(d.angle-a.angle)*c})},drawLegendSymbol:a.LegendSymbolMixin.drawRectangle,getCenter:F.getCenter,getSymbol:x},{init:function(){w.prototype.init.apply(this,arguments);var a=this,c;a.name=t(a.name,"Slice");c=function(c){a.slice("select"===c.type)};C(a,"select",c);C(a,"unselect",c);return a},isValid:function(){return a.isNumber(this.y,!0)&&0<=this.y},setVisible:function(a,c){var e=this,d=e.series,b=d.chart,f=d.options.ignoreHiddenPoint;
c=t(c,f);a!==e.visible&&(e.visible=e.options.visible=a=void 0===a?!e.visible:a,d.options.data[u(e,d.data)]=e.options,n(["graphic","dataLabel","connector","shadowGroup"],function(b){if(e[b])e[b][a?"show":"hide"](!0)}),e.legendItem&&b.legend.colorizeItem(e,a),a||"hover"!==e.state||e.setState(""),f&&(d.isDirty=!0),c&&b.redraw())},slice:function(a,c,e){var d=this.series;h(e,d.chart);t(c,!0);this.sliced=this.options.sliced=I(a)?a:!this.sliced;d.options.data[u(this,d.data)]=this.options;this.graphic.animate(this.getTranslate());
this.shadowGroup&&this.shadowGroup.animate(this.getTranslate())},getTranslate:function(){return this.sliced?this.slicedTranslation:{translateX:0,translateY:0}},haloPath:function(a){var c=this.shapeArgs;return this.sliced||!this.visible?[]:this.series.chart.renderer.symbols.arc(c.x,c.y,c.r+a,c.r+a,{innerR:this.shapeArgs.r-1,start:c.start,end:c.end})}})})(K);(function(a){var C=a.addEvent,F=a.arrayMax,I=a.defined,n=a.each,f=a.extend,e=a.format,u=a.map,x=a.merge,t=a.noop,w=a.pick,y=a.relativeLength,c=
a.Series,h=a.seriesTypes,p=a.some,k=a.stableSort,q=a.isArray,d=a.splat;a.distribute=function(b,c,d){function e(a,b){return a.target-b.target}var f,h=!0,q=b,m=[],v;v=0;var t=q.reducedLen||c;for(f=b.length;f--;)v+=b[f].size;if(v>t){k(b,function(a,b){return(b.rank||0)-(a.rank||0)});for(v=f=0;v<=t;)v+=b[f].size,f++;m=b.splice(f-1,b.length)}k(b,e);for(b=u(b,function(a){return{size:a.size,targets:[a.target],align:w(a.align,.5)}});h;){for(f=b.length;f--;)h=b[f],v=(Math.min.apply(0,h.targets)+Math.max.apply(0,
h.targets))/2,h.pos=Math.min(Math.max(0,v-h.size*h.align),c-h.size);f=b.length;for(h=!1;f--;)0<f&&b[f-1].pos+b[f-1].size>b[f].pos&&(b[f-1].size+=b[f].size,b[f-1].targets=b[f-1].targets.concat(b[f].targets),b[f-1].align=.5,b[f-1].pos+b[f-1].size>c&&(b[f-1].pos=c-b[f-1].size),b.splice(f,1),h=!0)}q.push.apply(q,m);f=0;p(b,function(b){var e=0;if(p(b.targets,function(){q[f].pos=b.pos+e;if(Math.abs(q[f].pos-q[f].target)>d)return n(q.slice(0,f+1),function(a){delete a.pos}),q.reducedLen=(q.reducedLen||c)-
.1*c,q.reducedLen>.1*c&&a.distribute(q,c,d),!0;e+=q[f].size;f++}))return!0});k(q,e)};c.prototype.drawDataLabels=function(){function b(a,b){var c=b.filter;return c?(b=c.operator,a=a[c.property],c=c.value,"\x3e"===b&&a>c||"\x3c"===b&&a<c||"\x3e\x3d"===b&&a>=c||"\x3c\x3d"===b&&a<=c||"\x3d\x3d"===b&&a==c||"\x3d\x3d\x3d"===b&&a===c?!0:!1):!0}function c(a,b){var c=[],d;if(q(a)&&!q(b))c=u(a,function(a){return x(a,b)});else if(q(b)&&!q(a))c=u(b,function(b){return x(a,b)});else if(q(a)||q(b))for(d=Math.max(a.length,
b.length);d--;)c[d]=x(a[d],b[d]);else c=x(a,b);return c}var f=this,h=f.chart,k=f.options,p=k.dataLabels,t=f.points,m,y=f.hasRendered||0,A,F=w(p.defer,!!k.animation),E=h.renderer,p=c(c(h.options.plotOptions&&h.options.plotOptions.series&&h.options.plotOptions.series.dataLabels,h.options.plotOptions&&h.options.plotOptions[f.type]&&h.options.plotOptions[f.type].dataLabels),p);if(q(p)||p.enabled||f._hasPointLabels)A=f.plotGroup("dataLabelsGroup","data-labels",F&&!y?"hidden":"visible",p.zIndex||6),F&&
(A.attr({opacity:+y}),y||C(f,"afterAnimate",function(){f.visible&&A.show(!0);A[k.animation?"animate":"attr"]({opacity:1},{duration:200})})),n(t,function(g){m=d(c(p,g.dlOptions||g.options&&g.options.dataLabels));n(m,function(c,d){var l=c.enabled&&!g.isNull&&b(g,c),m,n,q,r,p=g.dataLabels?g.dataLabels[d]:g.dataLabel,v=g.connectors?g.connectors[d]:g.connector,t=!p;l&&(m=g.getLabelConfig(),n=c[g.formatPrefix+"Format"]||c.format,m=I(n)?e(n,m,h.time):(c[g.formatPrefix+"Formatter"]||c.formatter).call(m,c),
n=c.style,q=c.rotation,n.color=w(c.color,n.color,f.color,"#000000"),"contrast"===n.color&&(g.contrastColor=E.getContrast(g.color||f.color),n.color=c.inside||0>w(c.distance,g.labelDistance)||k.stacking?g.contrastColor:"#000000"),k.cursor&&(n.cursor=k.cursor),r={fill:c.backgroundColor,stroke:c.borderColor,"stroke-width":c.borderWidth,r:c.borderRadius||0,rotation:q,padding:c.padding,zIndex:1},a.objectEach(r,function(a,b){void 0===a&&delete r[b]}));!p||l&&I(m)?l&&I(m)&&(p?r.text=m:(g.dataLabels=g.dataLabels||
[],p=g.dataLabels[d]=q?E.text(m,0,-9999).addClass("highcharts-data-label"):E.label(m,0,-9999,c.shape,null,null,c.useHTML,null,"data-label"),d||(g.dataLabel=p),p.addClass(" highcharts-data-label-color-"+g.colorIndex+" "+(c.className||"")+(c.useHTML?" highcharts-tracker":""))),p.options=c,p.attr(r),p.css(n).shadow(c.shadow),p.added||p.add(A),f.alignDataLabel(g,p,c,null,t)):(g.dataLabel=g.dataLabel.destroy(),g.dataLabels&&(1===g.dataLabels.length?delete g.dataLabels:delete g.dataLabels[d]),d||delete g.dataLabel,
v&&(g.connector=g.connector.destroy(),g.connectors&&(1===g.connectors.length?delete g.connectors:delete g.connectors[d])))})});a.fireEvent(this,"afterDrawDataLabels")};c.prototype.alignDataLabel=function(a,c,d,e,h){var b=this.chart,l=b.inverted,m=w(a.dlBox&&a.dlBox.centerX,a.plotX,-9999),k=w(a.plotY,-9999),n=c.getBBox(),q,p=d.rotation,g=d.align,r=this.visible&&(a.series.forceDL||b.isInsidePlot(m,Math.round(k),l)||e&&b.isInsidePlot(m,l?e.x+1:e.y+e.height-1,l)),v="justify"===w(d.overflow,"justify");
if(r&&(q=d.style.fontSize,q=b.renderer.fontMetrics(q,c).b,e=f({x:l?this.yAxis.len-k:m,y:Math.round(l?this.xAxis.len-m:k),width:0,height:0},e),f(d,{width:n.width,height:n.height}),p?(v=!1,m=b.renderer.rotCorr(q,p),m={x:e.x+d.x+e.width/2+m.x,y:e.y+d.y+{top:0,middle:.5,bottom:1}[d.verticalAlign]*e.height},c[h?"attr":"animate"](m).attr({align:g}),k=(p+720)%360,k=180<k&&360>k,"left"===g?m.y-=k?n.height:0:"center"===g?(m.x-=n.width/2,m.y-=n.height/2):"right"===g&&(m.x-=n.width,m.y-=k?0:n.height),c.placed=
!0,c.alignAttr=m):(c.align(d,null,e),m=c.alignAttr),v&&0<=e.height?a.isLabelJustified=this.justifyDataLabel(c,d,m,n,e,h):w(d.crop,!0)&&(r=b.isInsidePlot(m.x,m.y)&&b.isInsidePlot(m.x+n.width,m.y+n.height)),d.shape&&!p))c[h?"attr":"animate"]({anchorX:l?b.plotWidth-a.plotY:a.plotX,anchorY:l?b.plotHeight-a.plotX:a.plotY});r||(c.attr({y:-9999}),c.placed=!1)};c.prototype.justifyDataLabel=function(a,c,d,e,f,h){var b=this.chart,l=c.align,k=c.verticalAlign,n,q,p=a.box?0:a.padding||0;n=d.x+p;0>n&&("right"===
l?c.align="left":c.x=-n,q=!0);n=d.x+e.width-p;n>b.plotWidth&&("left"===l?c.align="right":c.x=b.plotWidth-n,q=!0);n=d.y+p;0>n&&("bottom"===k?c.verticalAlign="top":c.y=-n,q=!0);n=d.y+e.height-p;n>b.plotHeight&&("top"===k?c.verticalAlign="bottom":c.y=b.plotHeight-n,q=!0);q&&(a.placed=!h,a.align(c,null,f));return q};h.pie&&(h.pie.prototype.drawDataLabels=function(){var b=this,d=b.data,e,f=b.chart,h=b.options.dataLabels,k=w(h.connectorPadding,10),q=w(h.connectorWidth,1),m=f.plotWidth,p=f.plotHeight,t=
Math.round(f.chartWidth/3),u,x=b.center,g=x[2]/2,r=x[1],y,C,H,K,Q=[[],[]],z,P,T,S,U=[0,0,0,0];b.visible&&(h.enabled||b._hasPointLabels)&&(n(d,function(a){a.dataLabel&&a.visible&&a.dataLabel.shortened&&(a.dataLabel.attr({width:"auto"}).css({width:"auto",textOverflow:"clip"}),a.dataLabel.shortened=!1)}),c.prototype.drawDataLabels.apply(b),n(d,function(a){a.dataLabel&&(a.visible?(Q[a.half].push(a),a.dataLabel._pos=null,!I(h.style.width)&&!I(a.options.dataLabels&&a.options.dataLabels.style&&a.options.dataLabels.style.width)&&
a.dataLabel.getBBox().width>t&&(a.dataLabel.css({width:.7*t}),a.dataLabel.shortened=!0)):(a.dataLabel=a.dataLabel.destroy(),a.dataLabels&&1===a.dataLabels.length&&delete a.dataLabels))}),n(Q,function(c,d){var l,q,t=c.length,v=[],u;if(t)for(b.sortByAngle(c,d-.5),0<b.maxLabelDistance&&(l=Math.max(0,r-g-b.maxLabelDistance),q=Math.min(r+g+b.maxLabelDistance,f.plotHeight),n(c,function(a){0<a.labelDistance&&a.dataLabel&&(a.top=Math.max(0,r-g-a.labelDistance),a.bottom=Math.min(r+g+a.labelDistance,f.plotHeight),
u=a.dataLabel.getBBox().height||21,a.distributeBox={target:a.labelPos[1]-a.top+u/2,size:u,rank:a.y},v.push(a.distributeBox))}),l=q+u-l,a.distribute(v,l,l/5)),S=0;S<t;S++)e=c[S],H=e.labelPos,y=e.dataLabel,T=!1===e.visible?"hidden":"inherit",P=l=H[1],v&&I(e.distributeBox)&&(void 0===e.distributeBox.pos?T="hidden":(K=e.distributeBox.size,P=e.top+e.distributeBox.pos)),delete e.positionIndex,z=h.justify?x[0]+(d?-1:1)*(g+e.labelDistance):b.getX(P<e.top+2||P>e.bottom-2?l:P,d,e),y._attr={visibility:T,align:H[6]},
y._pos={x:z+h.x+({left:k,right:-k}[H[6]]||0),y:P+h.y-10},H.x=z,H.y=P,w(h.crop,!0)&&(C=y.getBBox().width,l=null,z-C<k&&1===d?(l=Math.round(C-z+k),U[3]=Math.max(l,U[3])):z+C>m-k&&0===d&&(l=Math.round(z+C-m+k),U[1]=Math.max(l,U[1])),0>P-K/2?U[0]=Math.max(Math.round(-P+K/2),U[0]):P+K/2>p&&(U[2]=Math.max(Math.round(P+K/2-p),U[2])),y.sideOverflow=l)}),0===F(U)||this.verifyDataLabelOverflow(U))&&(this.placeDataLabels(),q&&n(this.points,function(a){var c;u=a.connector;if((y=a.dataLabel)&&y._pos&&a.visible&&
0<a.labelDistance){T=y._attr.visibility;if(c=!u)a.connector=u=f.renderer.path().addClass("highcharts-data-label-connector  highcharts-color-"+a.colorIndex+(a.className?" "+a.className:"")).add(b.dataLabelsGroup),u.attr({"stroke-width":q,stroke:h.connectorColor||a.color||"#666666"});u[c?"attr":"animate"]({d:b.connectorPath(a.labelPos)});u.attr("visibility",T)}else u&&(a.connector=u.destroy())}))},h.pie.prototype.connectorPath=function(a){var b=a.x,c=a.y;return w(this.options.dataLabels.softConnector,
!0)?["M",b+("left"===a[6]?5:-5),c,"C",b,c,2*a[2]-a[4],2*a[3]-a[5],a[2],a[3],"L",a[4],a[5]]:["M",b+("left"===a[6]?5:-5),c,"L",a[2],a[3],"L",a[4],a[5]]},h.pie.prototype.placeDataLabels=function(){n(this.points,function(a){var b=a.dataLabel;b&&a.visible&&((a=b._pos)?(b.sideOverflow&&(b._attr.width=b.getBBox().width-b.sideOverflow,b.css({width:b._attr.width+"px",textOverflow:(this.options.dataLabels.style||{}).textOverflow||"ellipsis"}),b.shortened=!0),b.attr(b._attr),b[b.moved?"animate":"attr"](a),b.moved=
!0):b&&b.attr({y:-9999}))},this)},h.pie.prototype.alignDataLabel=t,h.pie.prototype.verifyDataLabelOverflow=function(a){var b=this.center,c=this.options,d=c.center,e=c.minSize||80,f,h=null!==c.size;h||(null!==d[0]?f=Math.max(b[2]-Math.max(a[1],a[3]),e):(f=Math.max(b[2]-a[1]-a[3],e),b[0]+=(a[3]-a[1])/2),null!==d[1]?f=Math.max(Math.min(f,b[2]-Math.max(a[0],a[2])),e):(f=Math.max(Math.min(f,b[2]-a[0]-a[2]),e),b[1]+=(a[0]-a[2])/2),f<b[2]?(b[2]=f,b[3]=Math.min(y(c.innerSize||0,f),f),this.translate(b),this.drawDataLabels&&
this.drawDataLabels()):h=!0);return h});h.column&&(h.column.prototype.alignDataLabel=function(a,d,e,f,h){var b=this.chart.inverted,l=a.series,m=a.dlBox||a.shapeArgs,k=w(a.below,a.plotY>w(this.translatedThreshold,l.yAxis.len)),n=w(e.inside,!!this.options.stacking);m&&(f=x(m),0>f.y&&(f.height+=f.y,f.y=0),m=f.y+f.height-l.yAxis.len,0<m&&(f.height-=m),b&&(f={x:l.yAxis.len-f.y-f.height,y:l.xAxis.len-f.x-f.width,width:f.height,height:f.width}),n||(b?(f.x+=k?0:f.width,f.width=0):(f.y+=k?f.height:0,f.height=
0)));e.align=w(e.align,!b||n?"center":k?"right":"left");e.verticalAlign=w(e.verticalAlign,b||n?"middle":k?"top":"bottom");c.prototype.alignDataLabel.call(this,a,d,e,f,h);a.isLabelJustified&&a.contrastColor&&d.css({color:a.contrastColor})})})(K);(function(a){var C=a.Chart,F=a.each,I=a.isArray,n=a.objectEach,f=a.pick;a=a.addEvent;a(C,"render",function(){var a=[];F(this.labelCollectors||[],function(e){a=a.concat(e())});F(this.yAxis||[],function(e){e.options.stackLabels&&!e.options.stackLabels.allowOverlap&&
n(e.stacks,function(e){n(e,function(e){a.push(e.label)})})});F(this.series||[],function(e){var n=e.options.dataLabels;e.visible&&(!1!==n.enabled||e._hasPointLabels)&&F(e.points,function(e){if(e.visible){var n=I(e.dataLabels)?e.dataLabels:e.dataLabel?[e.dataLabel]:[];F(n,function(n){var c=n.options;n.labelrank=f(c.labelrank,e.labelrank,e.shapeArgs&&e.shapeArgs.height);c.allowOverlap||a.push(n)})}})});this.hideOverlappingLabels(a)});C.prototype.hideOverlappingLabels=function(a){var e=a.length,f=this.renderer,
n,w,y,c,h,p,k=function(a,c,b,e,f,h,k,n){return!(f>a+b||f+k<a||h>c+e||h+n<c)};y=function(a){var c,b,e,h=a.box?0:a.padding||0;e=0;if(a&&(!a.alignAttr||a.placed))return c=a.alignAttr||{x:a.attr("x"),y:a.attr("y")},b=a.parentGroup,a.width||(e=a.getBBox(),a.width=e.width,a.height=e.height,e=f.fontMetrics(null,a.element).h),{x:c.x+(b.translateX||0)+h,y:c.y+(b.translateY||0)+h-e,width:a.width-2*h,height:a.height-2*h}};for(w=0;w<e;w++)if(n=a[w])n.oldOpacity=n.opacity,n.newOpacity=1,n.absoluteBox=y(n);a.sort(function(a,
c){return(c.labelrank||0)-(a.labelrank||0)});for(w=0;w<e;w++)for(p=(y=a[w])&&y.absoluteBox,n=w+1;n<e;++n)if(h=(c=a[n])&&c.absoluteBox,p&&h&&y!==c&&0!==y.newOpacity&&0!==c.newOpacity&&(h=k(p.x,p.y,p.width,p.height,h.x,h.y,h.width,h.height)))(y.labelrank<c.labelrank?y:c).newOpacity=0;F(a,function(a){var c,b;a&&(b=a.newOpacity,a.oldOpacity!==b&&(a.alignAttr&&a.placed?(b?a.show(!0):c=function(){a.hide()},a.alignAttr.opacity=b,a[a.isOld?"animate":"attr"](a.alignAttr,null,c)):a.attr({opacity:b})),a.isOld=
!0)})}})(K);(function(a){var C=a.addEvent,F=a.Chart,I=a.createElement,n=a.css,f=a.defaultOptions,e=a.defaultPlotOptions,u=a.each,x=a.extend,t=a.fireEvent,w=a.hasTouch,y=a.inArray,c=a.isObject,h=a.Legend,p=a.merge,k=a.pick,q=a.Point,d=a.Series,b=a.seriesTypes,v=a.svg,J;J=a.TrackerMixin={drawTrackerPoint:function(){var a=this,b=a.chart.pointer,c=function(a){var c=b.getPointFromEvent(a);void 0!==c&&(b.isDirectTouch=!0,c.onMouseOver(a))};u(a.points,function(a){a.graphic&&(a.graphic.element.point=a);a.dataLabel&&
(a.dataLabel.div?a.dataLabel.div.point=a:a.dataLabel.element.point=a)});a._hasTracking||(u(a.trackerGroups,function(d){if(a[d]){a[d].addClass("highcharts-tracker").on("mouseover",c).on("mouseout",function(a){b.onTrackerMouseOut(a)});if(w)a[d].on("touchstart",c);a.options.cursor&&a[d].css(n).css({cursor:a.options.cursor})}}),a._hasTracking=!0);t(this,"afterDrawTracker")},drawTrackerGraph:function(){var a=this,b=a.options,c=b.trackByArea,d=[].concat(c?a.areaPath:a.graphPath),e=d.length,f=a.chart,h=
f.pointer,k=f.renderer,n=f.options.tooltip.snap,g=a.tracker,q,p=function(){if(f.hoverSeries!==a)a.onMouseOver()},x="rgba(192,192,192,"+(v?.0001:.002)+")";if(e&&!c)for(q=e+1;q--;)"M"===d[q]&&d.splice(q+1,0,d[q+1]-n,d[q+2],"L"),(q&&"M"===d[q]||q===e)&&d.splice(q,0,"L",d[q-2]+n,d[q-1]);g?g.attr({d:d}):a.graph&&(a.tracker=k.path(d).attr({"stroke-linejoin":"round",stroke:x,fill:c?x:"none","stroke-width":a.graph.strokeWidth()+(c?0:2*n),visibility:a.visible?"visible":"hidden",zIndex:2}).addClass(c?"highcharts-tracker-area":
"highcharts-tracker-line").add(a.group),u([a.tracker,a.markerGroup],function(a){a.addClass("highcharts-tracker").on("mouseover",p).on("mouseout",function(a){h.onTrackerMouseOut(a)});b.cursor&&a.css({cursor:b.cursor});if(w)a.on("touchstart",p)}));t(this,"afterDrawTracker")}};b.column&&(b.column.prototype.drawTracker=J.drawTrackerPoint);b.pie&&(b.pie.prototype.drawTracker=J.drawTrackerPoint);b.scatter&&(b.scatter.prototype.drawTracker=J.drawTrackerPoint);f.legend.itemStyle.cursor="pointer";x(h.prototype,
{setItemEvents:function(a,b,c){var d=this,e=d.chart.renderer.boxWrapper,f="highcharts-legend-"+(a instanceof q?"point":"series")+"-active";(c?b:a.legendGroup).on("mouseover",function(){a.setState("hover");e.addClass(f);b.css(d.options.itemHoverStyle)}).on("mouseout",function(){b.css(p(a.visible?d.itemStyle:d.itemHiddenStyle));e.removeClass(f);a.setState()}).on("click",function(b){var c=function(){a.setVisible&&a.setVisible()};e.removeClass(f);b={browserEvent:b};a.firePointEvent?a.firePointEvent("legendItemClick",
b,c):t(a,"legendItemClick",b,c)})},createCheckboxForItem:function(a){a.checkbox=I("input",{type:"checkbox",className:"highcharts-legend-checkbox",checked:a.selected,defaultChecked:a.selected},this.options.itemCheckboxStyle,this.chart.container);C(a.checkbox,"click",function(b){t(a.series||a,"checkboxClick",{checked:b.target.checked,item:a},function(){a.select()})})}});x(F.prototype,{showResetZoom:function(){function a(){b.zoomOut()}var b=this,c=f.lang,d=b.options.chart.resetZoomButton,e=d.theme,h=
e.states,k="chart"===d.relativeTo?null:"plotBox";t(this,"beforeShowResetZoom",null,function(){b.resetZoomButton=b.renderer.button(c.resetZoom,null,null,a,e,h&&h.hover).attr({align:d.position.align,title:c.resetZoomTitle}).addClass("highcharts-reset-zoom").add().align(d.position,!1,k)})},zoomOut:function(){t(this,"selection",{resetSelection:!0},this.zoom)},zoom:function(a){var b,d=this.pointer,e=!1,f;!a||a.resetSelection?(u(this.axes,function(a){b=a.zoom()}),d.initiated=!1):u(a.xAxis.concat(a.yAxis),
function(a){var c=a.axis;d[c.isXAxis?"zoomX":"zoomY"]&&(b=c.zoom(a.min,a.max),c.displayBtn&&(e=!0))});f=this.resetZoomButton;e&&!f?this.showResetZoom():!e&&c(f)&&(this.resetZoomButton=f.destroy());b&&this.redraw(k(this.options.chart.animation,a&&a.animation,100>this.pointCount))},pan:function(a,b){var c=this,d=c.hoverPoints,e;d&&u(d,function(a){a.setState()});u("xy"===b?[1,0]:[1],function(b){b=c[b?"xAxis":"yAxis"][0];var d=b.horiz,f=a[d?"chartX":"chartY"],d=d?"mouseDownX":"mouseDownY",h=c[d],g=(b.pointRange||
0)/2,l=b.reversed&&!c.inverted||!b.reversed&&c.inverted?-1:1,m=b.getExtremes(),k=b.toValue(h-f,!0)+g*l,l=b.toValue(h+b.len-f,!0)-g*l,n=l<k,h=n?l:k,k=n?k:l,l=Math.min(m.dataMin,g?m.min:b.toValue(b.toPixels(m.min)-b.minPixelPadding)),g=Math.max(m.dataMax,g?m.max:b.toValue(b.toPixels(m.max)+b.minPixelPadding)),n=l-h;0<n&&(k+=n,h=l);n=k-g;0<n&&(k=g,h-=n);b.series.length&&h!==m.min&&k!==m.max&&(b.setExtremes(h,k,!1,!1,{trigger:"pan"}),e=!0);c[d]=f});e&&c.redraw(!1);n(c.container,{cursor:"move"})}});x(q.prototype,
{select:function(a,b){var c=this,d=c.series,e=d.chart;a=k(a,!c.selected);c.firePointEvent(a?"select":"unselect",{accumulate:b},function(){c.selected=c.options.selected=a;d.options.data[y(c,d.data)]=c.options;c.setState(a&&"select");b||u(e.getSelectedPoints(),function(a){a.selected&&a!==c&&(a.selected=a.options.selected=!1,d.options.data[y(a,d.data)]=a.options,a.setState(""),a.firePointEvent("unselect"))})})},onMouseOver:function(a){var b=this.series.chart,c=b.pointer;a=a?c.normalize(a):c.getChartCoordinatesFromPoint(this,
b.inverted);c.runPointActions(a,this)},onMouseOut:function(){var a=this.series.chart;this.firePointEvent("mouseOut");u(a.hoverPoints||[],function(a){a.setState()});a.hoverPoints=a.hoverPoint=null},importEvents:function(){if(!this.hasImportedEvents){var b=this,c=p(b.series.options.point,b.options).events;b.events=c;a.objectEach(c,function(a,c){C(b,c,a)});this.hasImportedEvents=!0}},setState:function(a,b){var c=Math.floor(this.plotX),d=this.plotY,f=this.series,h=f.options.states[a||"normal"]||{},l=
e[f.type].marker&&f.options.marker,n=l&&!1===l.enabled,q=l&&l.states&&l.states[a||"normal"]||{},g=!1===q.enabled,p=f.stateMarkerGraphic,v=this.marker||{},u=f.chart,w=f.halo,y,C=l&&f.markerAttribs;a=a||"";if(!(a===this.state&&!b||this.selected&&"select"!==a||!1===h.enabled||a&&(g||n&&!1===q.enabled)||a&&v.states&&v.states[a]&&!1===v.states[a].enabled)){C&&(y=f.markerAttribs(this,a));if(this.graphic)this.state&&this.graphic.removeClass("highcharts-point-"+this.state),a&&this.graphic.addClass("highcharts-point-"+
a),this.graphic.animate(f.pointAttribs(this,a),k(u.options.chart.animation,h.animation)),y&&this.graphic.animate(y,k(u.options.chart.animation,q.animation,l.animation)),p&&p.hide();else{if(a&&q){l=v.symbol||f.symbol;p&&p.currentSymbol!==l&&(p=p.destroy());if(p)p[b?"animate":"attr"]({x:y.x,y:y.y});else l&&(f.stateMarkerGraphic=p=u.renderer.symbol(l,y.x,y.y,y.width,y.height).add(f.markerGroup),p.currentSymbol=l);p&&p.attr(f.pointAttribs(this,a))}p&&(p[a&&u.isInsidePlot(c,d,u.inverted)?"show":"hide"](),
p.element.point=this)}(c=h.halo)&&c.size?(w||(f.halo=w=u.renderer.path().add((this.graphic||p).parentGroup)),w.show()[b?"animate":"attr"]({d:this.haloPath(c.size)}),w.attr({"class":"highcharts-halo highcharts-color-"+k(this.colorIndex,f.colorIndex)+(this.className?" "+this.className:""),zIndex:-1}),w.point=this,w.attr(x({fill:this.color||f.color,"fill-opacity":c.opacity},c.attributes))):w&&w.point&&w.point.haloPath&&w.animate({d:w.point.haloPath(0)},null,w.hide);this.state=a;t(this,"afterSetState")}},
haloPath:function(a){return this.series.chart.renderer.symbols.circle(Math.floor(this.plotX)-a,this.plotY-a,2*a,2*a)}});x(d.prototype,{onMouseOver:function(){var a=this.chart,b=a.hoverSeries;if(b&&b!==this)b.onMouseOut();this.options.events.mouseOver&&t(this,"mouseOver");this.setState("hover");a.hoverSeries=this},onMouseOut:function(){var a=this.options,b=this.chart,c=b.tooltip,d=b.hoverPoint;b.hoverSeries=null;if(d)d.onMouseOut();this&&a.events.mouseOut&&t(this,"mouseOut");!c||this.stickyTracking||
c.shared&&!this.noSharedTooltip||c.hide();this.setState()},setState:function(a){var b=this,c=b.options,d=b.graph,e=c.states,f=c.lineWidth,c=0;a=a||"";if(b.state!==a&&(u([b.group,b.markerGroup,b.dataLabelsGroup],function(c){c&&(b.state&&c.removeClass("highcharts-series-"+b.state),a&&c.addClass("highcharts-series-"+a))}),b.state=a,!e[a]||!1!==e[a].enabled)&&(a&&(f=e[a].lineWidth||f+(e[a].lineWidthPlus||0)),d&&!d.dashstyle))for(f={"stroke-width":f},d.animate(f,k(e[a||"normal"]&&e[a||"normal"].animation,
b.chart.options.chart.animation));b["zone-graph-"+c];)b["zone-graph-"+c].attr(f),c+=1},setVisible:function(a,b){var c=this,d=c.chart,e=c.legendItem,f,h=d.options.chart.ignoreHiddenSeries,k=c.visible;f=(c.visible=a=c.options.visible=c.userOptions.visible=void 0===a?!k:a)?"show":"hide";u(["group","dataLabelsGroup","markerGroup","tracker","tt"],function(a){if(c[a])c[a][f]()});if(d.hoverSeries===c||(d.hoverPoint&&d.hoverPoint.series)===c)c.onMouseOut();e&&d.legend.colorizeItem(c,a);c.isDirty=!0;c.options.stacking&&
u(d.series,function(a){a.options.stacking&&a.visible&&(a.isDirty=!0)});u(c.linkedSeries,function(b){b.setVisible(a,!1)});h&&(d.isDirtyBox=!0);t(c,f);!1!==b&&d.redraw()},show:function(){this.setVisible(!0)},hide:function(){this.setVisible(!1)},select:function(a){this.selected=a=void 0===a?!this.selected:a;this.checkbox&&(this.checkbox.checked=a);t(this,a?"select":"unselect")},drawTracker:J.drawTrackerGraph})})(K);(function(a){var C=a.Chart,F=a.each,I=a.inArray,n=a.isArray,f=a.isObject,e=a.pick,u=a.splat;
C.prototype.setResponsive=function(e){var f=this.options.responsive,n=[],u=this.currentResponsive;f&&f.rules&&F(f.rules,function(c){void 0===c._id&&(c._id=a.uniqueKey());this.matchResponsiveRule(c,n,e)},this);var c=a.merge.apply(0,a.map(n,function(c){return a.find(f.rules,function(a){return a._id===c}).chartOptions})),n=n.toString()||void 0;n!==(u&&u.ruleIds)&&(u&&this.update(u.undoOptions,e),n?(this.currentResponsive={ruleIds:n,mergedOptions:c,undoOptions:this.currentOptions(c)},this.update(c,e)):
this.currentResponsive=void 0)};C.prototype.matchResponsiveRule=function(a,f){var n=a.condition;(n.callback||function(){return this.chartWidth<=e(n.maxWidth,Number.MAX_VALUE)&&this.chartHeight<=e(n.maxHeight,Number.MAX_VALUE)&&this.chartWidth>=e(n.minWidth,0)&&this.chartHeight>=e(n.minHeight,0)}).call(this)&&f.push(a._id)};C.prototype.currentOptions=function(e){function t(e,c,h,p){var k;a.objectEach(e,function(a,d){if(!p&&-1<I(d,["series","xAxis","yAxis"]))for(a=u(a),h[d]=[],k=0;k<a.length;k++)c[d][k]&&
(h[d][k]={},t(a[k],c[d][k],h[d][k],p+1));else f(a)?(h[d]=n(a)?[]:{},t(a,c[d]||{},h[d],p+1)):h[d]=c[d]||null})}var w={};t(e,this.options,w,0);return w}})(K);return K});
//# sourceMappingURL=highcharts.js.map


/***/ }),
/* 338 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.init = init;
exports.checkToDisplayStopButton = checkToDisplayStopButton;
exports.hideStopButton = hideStopButton;
exports.displayTestConnectivityResults = displayTestConnectivityResults;
exports.displayResults = displayResults;
exports.displayTestQualityResults = displayTestQualityResults;
exports.graphIntermediateStats = graphIntermediateStats;

var _chart = __webpack_require__(336);

var _chart2 = _interopRequireDefault(_chart);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var charts = {}; // Utility functions to display test results in the sample app UI

var audioOnlyTest;
var resultCount = {
  audio: 0,
  video: 0
};
var prevBitsReceived = {
  audio: 0,
  video: 0
};
var stopBtnTimeout;
var stopTestBtn = document.getElementById('stop_test');
var failureTypes = [];
var messages = {
  "api": {
    "sectionTitle": {
      "success": "OpenTok API server - Connected",
      "error": "OpenTok API server - Error"
    },
    "results": {
      "success": "Successfully connected to the OpenTok API server.",
      "error": "Could not connect to API server"
    }
  },
  "messaging": {
    "sectionTitle": {
      "success": "OpenTok Messaging WebSocket - Connected",
      "error": "OpenTok Messaging WebSocket - Error"
    },
    "results": {
      "success": "Successfully connected to the OpenTok Messaging WebSocket.",
      "error": "Could not connect to Messaging WebSocket"
    }
  },
  "media": {
    "sectionTitle": {
      "success": "OpenTok Media Server - Connected",
      "error": "OpenTok Media Server - Error"
    },
    "results": {
      "success": "Successfully connected to the OpenTok Media Server.",
      "error": "Could not connect to Media Server"
    }
  }

};

function init(audioOnly) {
  audioOnlyTest = audioOnly;
  document.getElementById('quality_status_container').style.display = 'block';
  if (audioOnlyTest) {
    document.getElementById('video').style.display = 'none';
  }
}

function checkToDisplayStopButton() {
  if (!stopBtnTimeout) {
    stopBtnTimeout = window.setTimeout(function () {
      stopTestBtn.style.display = 'block';
    }, 4000);
  }
}

function hideStopButton() {
  stopTestBtn.style.display = 'none';
}

function displayTestConnectivityResults(results) {
  var statusContainer = document.getElementById('connectivity_status_container');
  var statusMessageEl = statusContainer.querySelector('p');
  var statusIconEl = statusContainer.querySelector('img');
  statusMessageEl.style.display = 'block';

  var statusText = void 0;
  if (results.success) {
    statusText = 'Passed';
    statusIconEl.src = 'assets/icon_pass.svg';
  } else {
    statusText = 'Failed tests: ' + convertFailedTestsToString(results.failedTests);
    statusIconEl.src = 'assets/icon_error.svg';
  }
  statusMessageEl.textContent = statusText;
}

function setData(section, flag) {
  var statusContainer = document.getElementById('connectivity_tests');
  var serverStatus = statusContainer.querySelector("#" + section + '_server_status');
  var statusIconEl = statusContainer.querySelector("#" + section + '_img');
  var sectionName = statusContainer.querySelector('#' + section + '_section_name');
  var apiResults = statusContainer.querySelector('#' + section + '_results');

  sectionName.textContent = messages[section]['sectionTitle'][flag ? 'success' : 'error'];
  statusIconEl.src = flag ? 'https://tokbox.com/developer/tools/precall/images/server-on.png' : 'https://tokbox.com/developer/tools/precall/images/server-off.png';
  apiResults.textContent = messages[section]['results'][flag ? 'success' : 'error'];
  if (flag) {
    serverStatus.classList.remove('connectivity_test_fail');
    serverStatus.classList.add('connectivity_test_success');
  } else {
    serverStatus.classList.remove('connectivity_test_success');
    serverStatus.classList.add('connectivity_test_fail');
  }
}

function displayResults() {
  var statusContainer = document.getElementById('connectivity_tests');

  if (failureTypes.indexOf('OpenTok.js') > -1) {
    setData('api', false);
    setData('messaging', false);
    setData('media', false);
  } else {
    setData('api', failureTypes.indexOf('api') <= -1);
    setData('messaging', failureTypes.indexOf('messaging') <= -1);
    setData('media', failureTypes.indexOf('media') <= -1);
    // setData('log', failureTypes.indexOf('logging') <= -1);
  }
  statusContainer.style.display = 'block';
}

function convertFailedTestsToString(failedTests) {
  console.log("failed test", failedTests);

  for (var i = 0; i < failedTests.length; i++) {
    failureTypes.push(failedTests[i].type);
  }
  var mappedFailures = [];
  if (failureTypes.indexOf('api') > -1) {
    mappedFailures.push('OpenTok API server');
  }
  if (failureTypes.indexOf('messaging') > -1) {
    mappedFailures.push('OpenTok messaging WebSocket');
  }
  if (failureTypes.indexOf('media') > -1) {
    mappedFailures.push('OpenTok Media Router');
  }
  if (failureTypes.indexOf('logging') > -1) {
    mappedFailures.push('OpenTok logging server');
  }

  return mappedFailures.join(', ');
}

function rateMosScore(mos) {
  if (mos >= 3.8) {
    return 'Excellent';
  }
  if (mos >= 3.1) {
    return 'Good';
  }
  if (mos >= 2.4) {
    return 'Fair';
  }
  if (mos >= 1.7) {
    return 'Poor';
  }
  return 'Bad';
}

function displayTestQualityResults(error, results) {
  console.log("quality results");
  hideStopButton();
  var statusContainerEl = document.getElementById('quality_status_container');
  var statusEl = statusContainerEl.querySelector('p');
  var statusIconEl = statusContainerEl.querySelector('img');
  statusContainerEl.querySelector('#audio .results').style.display = 'block';
  statusContainerEl.querySelector('#video .results').style.display = 'block';

  if (error) {
    statusEl.textContent = error.message;
    statusIconEl.src = 'assets/icon_error.svg';
    return;
  }

  statusEl.textContent = 'Test complete.';
  var resultsEl = statusContainerEl.querySelector('#audio .results');
  resultsEl.style.display = 'block';
  resultsEl.querySelector('#audio-supported').textContent = results.audio.supported ? 'Yes' : 'No';
  var audioMos = results.audio.mos;
  resultsEl.querySelector('#audio-mos').textContent = audioMos.toFixed(2) + ' (' + rateMosScore(audioMos) + ')';
  resultsEl.querySelector('#audio-bitrate').textContent = results.audio.bitrate ? (results.audio.bitrate / 1000).toFixed(2) + ' kbps' : '--';
  resultsEl.querySelector('#audio-plr').textContent = results.audio.supported ? (results.audio.packetLossRatio / 100).toFixed(2) + '%' : '--';
  resultsEl = statusContainerEl.querySelector('#video .results');
  resultsEl.querySelector('#video-supported').textContent = results.video.supported ? 'Yes' : 'No';
  var videoMos = results.video.mos;
  resultsEl.querySelector('#video-mos').textContent = videoMos.toFixed(2) + ' (' + rateMosScore(videoMos) + ')';
  resultsEl.querySelector('#video-bitrate').textContent = results.video.bitrate ? (results.video.bitrate / 1000).toFixed(2) + ' kbps' : '--';
  resultsEl.querySelector('#video-plr').textContent = results.video.supported ? (results.video.packetLossRatio / 100).toFixed(2) + '%' : '--';
  resultsEl.querySelector('#video-recommendedResolution').textContent = results.video.recommendedResolution || '--';
  resultsEl.querySelector('#video-recommendedFrameRate').textContent = results.video.recommendedFrameRate ? results.video.recommendedFrameRate + ' fps' : '--';
  if (results.audio.supported) {
    if (results.video.supported || audioOnlyTest) {
      statusIconEl.src = 'assets/icon_pass.svg';
    } else {
      statusIconEl.src = 'assets/icon_warning.svg';
      var reasonEl = resultsEl.querySelector('#video-unsupported-reason');
      reasonEl.style.display = 'block';
      reasonEl.querySelector('span').textContent = results.video.reason;
    }
  } else if (!results.video.supported) {
    statusIconEl.src = 'assets/icon_error.svg';
  }
}

function graphIntermediateStats(mediaType, stats) {
  var mediaStats = stats[mediaType];
  if (!charts[mediaType]) {
    charts[mediaType] = (0, _chart2.default)(mediaType);
  }
  var bitsReceived = mediaStats && mediaStats.bytesReceived ? mediaStats.bytesReceived * 8 : 0;
  resultCount[mediaType]++;
  charts[mediaType].series[0].addPoint({
    x: resultCount[mediaType],
    y: bitsReceived - prevBitsReceived[mediaType]
  }, true, false);
  var chartTitle = stats.phase === 'audio-only' && mediaType === 'video' ? 'Testing audio-only stream' : 'Bitrate over ' + resultCount[mediaType] + 'sec';
  charts[mediaType].setTitle(null, { text: chartTitle });
  prevBitsReceived[mediaType] = bitsReceived;
}

/***/ }),
/* 339 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.createOpentokHardwareSetupComponent = createOpentokHardwareSetupComponent;
var gumNamesToMessages = {
  PermissionDeniedError: 'End-user denied permission to hardware devices',
  PermissionDismissedError: 'End-user dismissed permission to hardware devices',
  NotSupportedError: 'A constraint specified is not supported by the browser.',
  ConstraintNotSatisfiedError: 'It\'s not possible to satisfy one or more constraints ' + 'passed into the getUserMedia function',
  OverconstrainedError: 'Due to changes in the environment, one or more mandatory ' + 'constraints can no longer be satisfied.',
  NoDevicesFoundError: 'No voice or video input devices are available on this machine.',
  HardwareUnavailableError: 'The selected voice or video devices are unavailable. Verify ' + 'that the chosen devices are not in use by another application.'
};

var isArray = _typeof(Array.isArray) && Array.isArray || function (arry) {
  return Object.prototype.toString.call(arry) === '[object Array]';
};

var each = Array.prototype.forEach || function (iter, ctx) {
  for (var idx = 0, count = this.length || 0; idx < count; ++idx) {
    if (idx in this) {
      iter.call(ctx, this[idx], idx);
    }
  }
};

var addClass = function addClass(el, className) {
  if (el.classList) {
    el.classList.add(className);
  } else {
    el.className += ' ' + className;
  }
};

var removeClass = function removeClass(el, className) {
  if (el.classList) {
    el.classList.remove(className);
  } else {
    el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
  }
};

var setPref = function setPref(key, value) {
  try {
    localStorage.setItem(key, value);
  } catch (err) {}
};

var getPref = function getPref(key) {
  try {
    return localStorage.getItem(key);
  } catch (err) {}
  return undefined;
};

var createElement = function createElement(nodeName, attributes, children, doc) {
  var element = (doc || document).createElement(nodeName);

  if (attributes) {
    for (var name in attributes) {
      if (_typeof(attributes[name]) === 'object') {
        if (!element[name]) element[name] = {};

        var subAttrs = attributes[name];
        for (var n in subAttrs) {
          element[name][n] = subAttrs[n];
        }
      } else if (name === 'className') {
        element.className = attributes[name];
      } else {
        element.setAttribute(name, attributes[name]);
      }
    }
  }

  var setChildren = function setChildren(child) {
    if (typeof child === 'string') {
      element.innerHTML = element.innerHTML + child;
    } else {
      element.appendChild(child);
    }
  };

  if (isArray(children)) {
    each.call(children, setChildren);
  } else if (children) {
    setChildren(children);
  }

  return element;
};

var createDevicePickerController = function createDevicePickerController(opts, changeHandler) {
  var _devicePicker = {},
      destroyExistingPublisher,
      publisher,
      devicesById;

  function onChange() {
    destroyExistingPublisher();

    var settings;

    _devicePicker.pickedDevice = devicesById[opts.selectTag.value];

    if (!_devicePicker.pickedDevice) {
      return;
    }

    settings = {
      insertMode: 'append',
      name: _devicePicker.pickedDevice.label,
      audioSource: null,
      videoSource: null,
      width: 220,
      height: 170,
      fitMode: 'cover',
      style: {
        audioLevelDisplayMode: 'off'
      },
      showControls: false
    };

    settings[opts.mode] = _devicePicker.pickedDevice.deviceId;

    var widgetTag = opts.previewTag,
        audioDisplayTag,
        audioDisplayParent;

    if (opts.mode === 'audioSource') {
      opts.previewTag.innerHTML = '';

      audioDisplayTag = createElement('div', {
        className: 'opentok-hardware-setup-activity-fg',
        style: 'width: 0px;'
      });

      audioDisplayParent = createElement('div', {
        className: 'opentok-hardware-setup-activity-bg'
      }, audioDisplayTag);

      widgetTag = createElement('div', { style: 'display: none;' });

      opts.previewTag.appendChild(widgetTag);
      opts.previewTag.appendChild(audioDisplayParent);
    }

    var pub = OT.initPublisher(widgetTag, settings);

    pub.on({
      accessAllowed: function accessAllowed() {
        if (typeof changeHandler === 'function') {
          changeHandler(_devicePicker);
        }
      }
    });

    var movingAvg = null;

    if (opts.mode === 'audioSource') {

      pub.on('audioLevelUpdated', function (event) {
        if (movingAvg === null || movingAvg <= event.audioLevel) {
          movingAvg = event.audioLevel;
        } else {
          movingAvg = 0.7 * movingAvg + 0.3 * event.audioLevel;
        }

        // 1.5 scaling to map the -30 - 0 dBm range to [0,1]
        var logLevel = Math.log(movingAvg) / Math.LN10 / 1.5 + 1;
        logLevel = Math.min(Math.max(logLevel, 0), 1);

        var tagCount = audioDisplayTag.parentNode.offsetWidth / 10;
        audioDisplayTag.style.width = Math.ceil(tagCount * logLevel) * 10 + 'px';
        // audioDisplayTag.innerHTML = (logLevel * 100).toFixed(0);
      });
    }

    publisher = pub;
  }

  _devicePicker.cleanup = destroyExistingPublisher = function destroyExistingPublisher() {
    if (publisher) {
      publisher.destroy();
      publisher = void 0;
    }
  };

  var disableSelector = function disableSelector(opt, str) {
    opt.innerHTML = '';
    opt.appendChild(createElement('option', {}, str));
    opt.setAttribute('disabled', '');
  };

  var deviceLabel = function deviceLabel(device) {
    if (device.label) {
      return device.label;
    }
    return (opts.mode !== 'audioSource' && 'Camera' || 'Mic') + ' (' + device.deviceId.substring(0, 8) + ')';
  };

  var addDevice = function addDevice(device) {
    devicesById[device.deviceId] = device;
    return createElement('option', { value: device.deviceId }, deviceLabel(device));
  };

  _devicePicker.setDeviceList = function (devices) {
    opts.selectTag.innerHTML = '';
    devicesById = {};
    if (devices.length > 0) {
      devices.map(addDevice).map(function (tag) {
        opts.selectTag.appendChild(tag);
      });
      opts.selectTag.removeAttribute('disabled');
    } else {
      disableSelector(opts.selectTag, 'No devices');
    }
    if (opts.defaultDevice) {
      opts.selectTag.value = opts.defaultDevice;
    }
    onChange();
  };

  _devicePicker.setLoading = function () {
    disableSelector(opts.selectTag, 'Loading...');
  };

  if (opts.selectTag.addEventListener) {
    opts.selectTag.addEventListener('change', onChange, false);
  } else if (opts.selectTag.attachEvent) {
    opts.selectTag.attachEvent('onchange', onChange);
  } else {
    opts.selectTag.onchange = onChange();
  }

  return _devicePicker;
};

var getWindowLocationProtocol = function getWindowLocationProtocol() {
  return window.location.protocol;
};

var shouldGetDevices = function shouldGetDevices(callback) {
  OT.getDevices(function (error, devices) {
    if (error) {
      callback(error);
      return;
    }
    callback(undefined, {
      audio: devices.some(function (device) {
        return device.kind === 'audioInput';
      }),
      video: devices.some(function (device) {
        return device.kind === 'videoInput';
      })
    });
  });
};

var getUserMedia;
if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
  getUserMedia = function getUserMedia(constraints, onStream, onError) {
    navigator.mediaDevices.getUserMedia(constraints).then(onStream, onError);
  };
} else if (navigator.getUserMedia) {
  getUserMedia = navigator.getUserMedia.bind(navigator);
} else if (navigator.mozGetUserMedia) {
  getUserMedia = navigator.mozGetUserMedia.bind(navigator);
} else if (navigator.webkitGetUserMedia) {
  getUserMedia = navigator.webkitGetUserMedia.bind(navigator);
} else if (window.OTPlugin && window.OTPlugin.getUserMedia) {
  getUserMedia = window.OTPlugin.getUserMedia.bind(window.OTPlugin);
}

var authenticateForDeviceLabels = function authenticateForDeviceLabels(callback) {
  shouldGetDevices(function (error, constraints) {
    if (error) {
      callback(error);
    } else {
      if (constraints.video === false && constraints.audio === false) {
        callback(new Error('There are no audio or video devices available'));
      } else {
        if (getWindowLocationProtocol() === 'http:') {
          callback();
        } else {
          if (!getUserMedia) {
            return callback(new Error('getUserMedia not supported in this browser'));
          }
          getUserMedia(constraints, function (stream) {
            if (window.MediaStreamTrack && window.MediaStreamTrack.prototype.stop) {
              var tracks = stream.getTracks();
              tracks.forEach(function (track) {
                track.stop();
              });
            } else if (stream.stop) {
              // older spec
              stream.stop();
            }
            callback();
          }, function (error) {
            var err = new Error(gumNamesToMessages[error.name]);
            err.name = error.name;
            callback(err);
          });
        }
      }
    }
  });
};

function createOpentokHardwareSetupComponent(targetElement, options, callback) {

  if (typeof targetElement === 'string') {
    targetElement = document.getElementById(targetElement);
  }

  var _hardwareSetup = {},
      _options,
      state = 'getDevices',
      camera,
      microphone,
      camSelector,
      camPreview,
      micSelector,
      micPreview,
      container;

  if (typeof options === 'function') {
    callback = options;
    options = {};
  }

  if (callback == null) {
    throw new Error('A completion handler is required when calling ' + 'createOpentokHardwareSetupComponent');
  }

  _options = {
    insertMode: options.insertMode || 'replace',
    defaultAudioDevice: options.defaultAudioDevice || getPref('com.opentok.hardwaresetup.audio'),
    defaultVideoDevice: options.defaultVideoDevice || getPref('com.opentok.hardwaresetup.video')
  };

  _hardwareSetup.audioSource = function () {
    return microphone && microphone.pickedDevice;
  };

  _hardwareSetup.videoSource = function () {
    return camera && camera.pickedDevice;
  };

  _hardwareSetup.destroy = function () {
    if (state === 'destroyed') {
      return;
    }
    if (camera) {
      camera.cleanup();
    }
    if (microphone) {
      microphone.cleanup();
    }
    if (state === 'chooseDevices') {
      targetElement.parentNode.removeChild(targetElement);
    }
    state = 'destroyed';
  };

  if (!targetElement) {
    callback(new Error('No element provided to place component'));
    return;
  }

  camSelector = createElement('select', {}, '');
  camPreview = createElement('div', { className: 'opentok-hardware-setup-preview' }, '');
  micSelector = createElement('select', {}, '');
  micPreview = createElement('div', { className: 'opentok-hardware-setup-preview' }, '');

  container = createElement('div', {
    className: 'opentok-hardware-setup opentok-hardware-setup-loading'
  });

  var insertMode = _options.insertMode;
  if (insertMode !== 'replace') {
    if (insertMode === 'append') {
      targetElement.appendChild(container);
      targetElement = container;
    } else if (insertMode === 'before') {
      targetElement.parentNode.insertBefore(container, targetElement);
      targetElement = container;
    } else if (insertMode === 'after') {
      targetElement.parentNode.insertBefore(container, targetElement.nextSibling);
      targetElement = container;
    }
  } else {
    targetElement.innerHTML = '';
    addClass(targetElement, 'opentok-hardware-setup');
    if (!targetElement.getAttribute('id')) {
      targetElement.setAttribute('id', container.getAttribute('id'));
    }
    for (var key in container.style) {
      if (!container.style.hasOwnProperty(key)) {
        continue;
      }
      targetElement.style[key] = container.style[key];
    }
    while (container.childNodes.length > 0) {
      targetElement.appendChild(container.firstChild);
    }
  }

  addClass(targetElement, 'opentok-hardware-setup-loading');

  authenticateForDeviceLabels(function (err) {
    if (err) {
      callback(err);
    } else {

      camera = createDevicePickerController({
        selectTag: camSelector,
        previewTag: camPreview,
        mode: 'videoSource',
        defaultDevice: _options.defaultVideoDevice
      }, function (controller) {
        setPref('com.opentok.hardwaresetup.video', controller.pickedDevice.deviceId);
      });

      microphone = createDevicePickerController({
        selectTag: micSelector,
        previewTag: micPreview,
        mode: 'audioSource',
        defaultDevice: _options.defaultAudioDevice
      }, function (controller) {
        setPref('com.opentok.hardwaresetup.audio', controller.pickedDevice.deviceId);
      });

      camera.setLoading();
      microphone.setLoading();

      OT.getDevices(function (error, devices) {
        if (error) {
          callback(error);
          return;
        }

        if (state === 'destroyed') {
          return; // They destroyed us before we got the devices, bail.
        }

        removeClass(container, 'opentok-hardware-setup-loading');

        container.appendChild(createElement('div', { className: 'opentok-hardware-setup-camera' }, [createElement('div', { className: 'opentok-hardware-setup-label' }, 'Camera:'), createElement('div', { className: 'opentok-hardware-setup-selector' }, camSelector), camPreview]));

        container.appendChild(createElement('div', { className: 'opentok-hardware-setup-mic' }, [createElement('div', { className: 'opentok-hardware-setup-label' }, 'Mic:'), createElement('div', { className: 'opentok-hardware-setup-selector' }, micSelector), micPreview]));

        camera.setDeviceList(devices.filter(function (device) {
          return device.kind === 'videoInput';
        }));

        microphone.setDeviceList(devices.filter(function (device) {
          return device.kind === 'audioInput';
        }));

        state = 'chooseDevices';

        callback(undefined, _hardwareSetup);
      });
    }
  });

  return _hardwareSetup;
}

/***/ }),
/* 340 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var recordAudio = function recordAudio() {
  return new Promise(function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(resolve) {
      var stream, mediaRecorder, audioChunks, start, stop;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return navigator.mediaDevices.getUserMedia({ audio: true });

            case 2:
              stream = _context.sent;
              mediaRecorder = new MediaRecorder(stream);
              audioChunks = [];


              mediaRecorder.addEventListener("dataavailable", function (event) {
                audioChunks.push(event.data);
              });

              start = function start() {
                return mediaRecorder.start();
              };

              stop = function stop() {
                return new Promise(function (resolve) {
                  mediaRecorder.addEventListener("stop", function () {
                    var audioBlob = new Blob(audioChunks);
                    var audioUrl = URL.createObjectURL(audioBlob);
                    console.log(audioUrl);
                    var audio = new Audio(audioUrl);
                    var play = function play() {
                      return audio.play();
                    };
                    resolve({ audioBlob: audioBlob, audioUrl: audioUrl, play: play });
                  });

                  mediaRecorder.stop();
                });
              };

              resolve({ start: start, stop: stop });

            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, undefined);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }());
};

var sleep = function sleep(time) {
  return new Promise(function (resolve) {
    return setTimeout(resolve, time);
  });
};

var handleAction = exports.handleAction = function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    var recorder, actionButton, audio;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return recordAudio();

          case 2:
            recorder = _context2.sent;
            actionButton = document.getElementById('action');

            actionButton.disabled = true;
            recorder.start();
            _context2.next = 8;
            return sleep(10000);

          case 8:
            _context2.next = 10;
            return recorder.stop();

          case 10:
            audio = _context2.sent;

            audio.play();
            _context2.next = 14;
            return sleep(10000);

          case 14:
            actionButton.disabled = false;

          case 15:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, undefined);
  }));

  return function handleAction() {
    return _ref2.apply(this, arguments);
  };
}();

/***/ }),
/* 341 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  apiKey: '46116222', // Add your own OpenTok API key here. See the README in this directory.
  sessionId: '2_MX40NjExNjIyMn5-MTU4MjU1MDM1NDIzNX41ditBZTNhNmRySFBtRVhiNjJ5L0JQQU5-fg', // Add your own session ID here
  token: 'T1==cGFydG5lcl9pZD00NjExNjIyMiZzaWc9M2E0ZTViMTVkNjU5ZWE4YmIyYjNiODIwNmUxZWNiMWQ3MGIzZDI4ZTpzZXNzaW9uX2lkPTJfTVg0ME5qRXhOakl5TW41LU1UVTRNalUxTURNMU5ESXpOWDQxZGl0QlpUTmhObVJ5U0ZCdFJWaGlOako1TDBKUVFVNS1mZyZjcmVhdGVfdGltZT0xNTgyNTUwMzg3Jm5vbmNlPTAuODgzNDMzNDQxNjIxODcwOCZyb2xlPXB1Ymxpc2hlciZleHBpcmVfdGltZT0xNTg1MTM4Nzg1JmNvbm5lY3Rpb25fZGF0YT10ZXN0aW5nJmluaXRpYWxfbGF5b3V0X2NsYXNzX2xpc3Q9' // Add your own token here
};

/***/ })
/******/ ]);