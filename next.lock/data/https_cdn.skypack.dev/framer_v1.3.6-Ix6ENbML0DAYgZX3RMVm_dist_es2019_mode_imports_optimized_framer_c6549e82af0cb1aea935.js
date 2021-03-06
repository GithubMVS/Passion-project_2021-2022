import dh from "/-/react@v17.0.1-yH0aYV1FOvoIPeKBbHxg/dist=es2019,mode=imports/optimized/react.js";
const {createContext} = dh;
const {useContext} = dh;
const {useEffect} = dh;
const {forwardRef} = dh;
const {Component} = dh;
const {useCallback} = dh;
const {useRef} = dh;
const {Children} = dh;
const {isValidElement} = dh;
const {createElement} = dh;
const {Fragment} = dh;
const {cloneElement} = dh;
const {useMemo} = dh;
const {useState} = dh;
const {useLayoutEffect} = dh;
const {PureComponent} = dh;
const {memo} = dh;
const {Suspense} = dh;
const {lazy} = dh;
const {createRef} = dh;
;
function defaultSetTimout() {
  throw new Error("setTimeout has not been defined");
}
function defaultClearTimeout() {
  throw new Error("clearTimeout has not been defined");
}
var cachedSetTimeout = defaultSetTimout;
var cachedClearTimeout = defaultClearTimeout;
var globalContext;
if (typeof window !== "undefined") {
  globalContext = window;
} else if (typeof self !== "undefined") {
  globalContext = self;
} else {
  globalContext = {};
}
if (typeof globalContext.setTimeout === "function") {
  cachedSetTimeout = setTimeout;
}
if (typeof globalContext.clearTimeout === "function") {
  cachedClearTimeout = clearTimeout;
}
function runTimeout(fun) {
  if (cachedSetTimeout === setTimeout) {
    return setTimeout(fun, 0);
  }
  if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
    cachedSetTimeout = setTimeout;
    return setTimeout(fun, 0);
  }
  try {
    return cachedSetTimeout(fun, 0);
  } catch (e) {
    try {
      return cachedSetTimeout.call(null, fun, 0);
    } catch (e3) {
      return cachedSetTimeout.call(this, fun, 0);
    }
  }
}
function runClearTimeout(marker) {
  if (cachedClearTimeout === clearTimeout) {
    return clearTimeout(marker);
  }
  if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
    cachedClearTimeout = clearTimeout;
    return clearTimeout(marker);
  }
  try {
    return cachedClearTimeout(marker);
  } catch (e) {
    try {
      return cachedClearTimeout.call(null, marker);
    } catch (e3) {
      return cachedClearTimeout.call(this, marker);
    }
  }
}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;
function cleanUpNextTick() {
  if (!draining || !currentQueue) {
    return;
  }
  draining = false;
  if (currentQueue.length) {
    queue = currentQueue.concat(queue);
  } else {
    queueIndex = -1;
  }
  if (queue.length) {
    drainQueue();
  }
}
function drainQueue() {
  if (draining) {
    return;
  }
  var timeout = runTimeout(cleanUpNextTick);
  draining = true;
  var len = queue.length;
  while (len) {
    currentQueue = queue;
    queue = [];
    while (++queueIndex < len) {
      if (currentQueue) {
        currentQueue[queueIndex].run();
      }
    }
    queueIndex = -1;
    len = queue.length;
  }
  currentQueue = null;
  draining = false;
  runClearTimeout(timeout);
}
function nextTick(fun) {
  var args = new Array(arguments.length - 1);
  if (arguments.length > 1) {
    for (var i = 1; i < arguments.length; i++) {
      args[i - 1] = arguments[i];
    }
  }
  queue.push(new Item(fun, args));
  if (queue.length === 1 && !draining) {
    runTimeout(drainQueue);
  }
}
function Item(fun, array) {
  this.fun = fun;
  this.array = array;
}
Item.prototype.run = function() {
  this.fun.apply(null, this.array);
};
var title = "browser";
var platform = "browser";
var browser = true;
var argv = [];
var version = "";
var versions = {};
var release = {};
var config = {};
function noop() {
}
var on = noop;
var addListener = noop;
var once = noop;
var off = noop;
var removeListener = noop;
var removeAllListeners = noop;
var emit = noop;
function binding(name) {
  throw new Error("process.binding is not supported");
}
function cwd() {
  return "/";
}
function chdir(dir) {
  throw new Error("process.chdir is not supported");
}
function umask() {
  return 0;
}
var performance$1 = globalContext.performance || {};
var performanceNow = performance$1.now || performance$1.mozNow || performance$1.msNow || performance$1.oNow || performance$1.webkitNow || function() {
  return new Date().getTime();
};
function hrtime(previousTimestamp) {
  var clocktime = performanceNow.call(performance$1) * 1e-3;
  var seconds = Math.floor(clocktime);
  var nanoseconds = Math.floor(clocktime % 1 * 1e9);
  if (previousTimestamp) {
    seconds = seconds - previousTimestamp[0];
    nanoseconds = nanoseconds - previousTimestamp[1];
    if (nanoseconds < 0) {
      seconds--;
      nanoseconds += 1e9;
    }
  }
  return [seconds, nanoseconds];
}
var startTime = new Date();
function uptime() {
  var currentTime = new Date();
  var dif = currentTime - startTime;
  return dif / 1e3;
}
var process = {
  nextTick,
  title,
  browser,
  env: {NODE_ENV: "production"},
  argv,
  version,
  versions,
  on,
  addListener,
  once,
  off,
  removeListener,
  removeAllListeners,
  emit,
  binding,
  cwd,
  chdir,
  umask,
  hrtime,
  platform,
  release,
  config,
  uptime
};
var Px = Object.create;
var ra = Object.defineProperty;
var Tx = Object.getOwnPropertyDescriptor;
var wx = Object.getOwnPropertyNames;
var Rx = Object.getPrototypeOf, Ex = Object.prototype.hasOwnProperty;
var Fx = (e) => ra(e, "__esModule", {value: true});
var qr = (e, t) => () => (t || e((t = {exports: {}}).exports, t), t.exports), Mx = (e, t) => {
  for (var r in t)
    ra(e, r, {get: t[r], enumerable: true});
}, Ix = (e, t, r) => {
  if (t && typeof t == "object" || typeof t == "function")
    for (let n of wx(t))
      !Ex.call(e, n) && n !== "default" && ra(e, n, {get: () => t[n], enumerable: !(r = Tx(t, n)) || r.enumerable});
  return e;
}, jo = (e) => Ix(Fx(ra(e != null ? Px(Rx(e)) : {}, "default", e && e.__esModule && "default" in e ? {get: () => e.default, enumerable: true} : {value: e, enumerable: true})), e);
var df = (e, t, r) => {
  if (!t.has(e))
    throw TypeError("Cannot " + r);
};
var An = (e, t, r) => (df(e, t, "read from private field"), r ? r.call(e) : t.get(e)), zl = (e, t, r) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, r);
}, hf = (e, t, r, n) => (df(e, t, "write to private field"), n ? n.call(e, r) : t.set(e, r), r);
var Vf = qr((aA, ia) => {
  var gf, vf, yf, bf, xf, Sf, Cf, Pf, Tf, na, Wl, wf, Rf, Ef, Dn, Ff, Mf, If, Af, Df, Lf, Of, kf, oa;
  (function(e) {
    var t = typeof window == "object" ? window : typeof self == "object" ? self : typeof this == "object" ? this : {};
    typeof define == "function" && define.amd ? define("tslib", ["exports"], function(n) {
      e(r(t, r(n)));
    }) : typeof ia == "object" && typeof ia.exports == "object" ? e(r(t, r(ia.exports))) : e(r(t));
    function r(n, o) {
      return n !== t && (typeof Object.create == "function" ? Object.defineProperty(n, "__esModule", {value: true}) : n.__esModule = true), function(i, a) {
        return n[i] = o ? o(i, a) : a;
      };
    }
  })(function(e) {
    var t = Object.setPrototypeOf || {__proto__: []} instanceof Array && function(n, o) {
      n.__proto__ = o;
    } || function(n, o) {
      for (var i in o)
        Object.prototype.hasOwnProperty.call(o, i) && (n[i] = o[i]);
    };
    gf = function(n, o) {
      if (typeof o != "function" && o !== null)
        throw new TypeError("Class extends value " + String(o) + " is not a constructor or null");
      t(n, o);
      function i() {
        this.constructor = n;
      }
      n.prototype = o === null ? Object.create(o) : (i.prototype = o.prototype, new i());
    }, vf = Object.assign || function(n) {
      for (var o, i = 1, a = arguments.length; i < a; i++) {
        o = arguments[i];
        for (var s in o)
          Object.prototype.hasOwnProperty.call(o, s) && (n[s] = o[s]);
      }
      return n;
    }, yf = function(n, o) {
      var i = {};
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && o.indexOf(a) < 0 && (i[a] = n[a]);
      if (n != null && typeof Object.getOwnPropertySymbols == "function")
        for (var s = 0, a = Object.getOwnPropertySymbols(n); s < a.length; s++)
          o.indexOf(a[s]) < 0 && Object.prototype.propertyIsEnumerable.call(n, a[s]) && (i[a[s]] = n[a[s]]);
      return i;
    }, bf = function(n, o, i, a) {
      var s = arguments.length, l = s < 3 ? o : a === null ? a = Object.getOwnPropertyDescriptor(o, i) : a, u;
      if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
        l = Reflect.decorate(n, o, i, a);
      else
        for (var c = n.length - 1; c >= 0; c--)
          (u = n[c]) && (l = (s < 3 ? u(l) : s > 3 ? u(o, i, l) : u(o, i)) || l);
      return s > 3 && l && Object.defineProperty(o, i, l), l;
    }, xf = function(n, o) {
      return function(i, a) {
        o(i, a, n);
      };
    }, Sf = function(n, o) {
      if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
        return Reflect.metadata(n, o);
    }, Cf = function(n, o, i, a) {
      function s(l) {
        return l instanceof i ? l : new i(function(u) {
          u(l);
        });
      }
      return new (i || (i = Promise))(function(l, u) {
        function c(d) {
          try {
            p(a.next(d));
          } catch (m) {
            u(m);
          }
        }
        function f(d) {
          try {
            p(a.throw(d));
          } catch (m) {
            u(m);
          }
        }
        function p(d) {
          d.done ? l(d.value) : s(d.value).then(c, f);
        }
        p((a = a.apply(n, o || [])).next());
      });
    }, Pf = function(n, o) {
      var i = {label: 0, sent: function() {
        if (l[0] & 1)
          throw l[1];
        return l[1];
      }, trys: [], ops: []}, a, s, l, u;
      return u = {next: c(0), throw: c(1), return: c(2)}, typeof Symbol == "function" && (u[Symbol.iterator] = function() {
        return this;
      }), u;
      function c(p) {
        return function(d) {
          return f([p, d]);
        };
      }
      function f(p) {
        if (a)
          throw new TypeError("Generator is already executing.");
        for (; i; )
          try {
            if (a = 1, s && (l = p[0] & 2 ? s.return : p[0] ? s.throw || ((l = s.return) && l.call(s), 0) : s.next) && !(l = l.call(s, p[1])).done)
              return l;
            switch (s = 0, l && (p = [p[0] & 2, l.value]), p[0]) {
              case 0:
              case 1:
                l = p;
                break;
              case 4:
                return i.label++, {value: p[1], done: false};
              case 5:
                i.label++, s = p[1], p = [0];
                continue;
              case 7:
                p = i.ops.pop(), i.trys.pop();
                continue;
              default:
                if (l = i.trys, !(l = l.length > 0 && l[l.length - 1]) && (p[0] === 6 || p[0] === 2)) {
                  i = 0;
                  continue;
                }
                if (p[0] === 3 && (!l || p[1] > l[0] && p[1] < l[3])) {
                  i.label = p[1];
                  break;
                }
                if (p[0] === 6 && i.label < l[1]) {
                  i.label = l[1], l = p;
                  break;
                }
                if (l && i.label < l[2]) {
                  i.label = l[2], i.ops.push(p);
                  break;
                }
                l[2] && i.ops.pop(), i.trys.pop();
                continue;
            }
            p = o.call(n, i);
          } catch (d) {
            p = [6, d], s = 0;
          } finally {
            a = l = 0;
          }
        if (p[0] & 5)
          throw p[1];
        return {value: p[0] ? p[1] : void 0, done: true};
      }
    }, Tf = function(n, o) {
      for (var i in n)
        i !== "default" && !Object.prototype.hasOwnProperty.call(o, i) && oa(o, n, i);
    }, oa = Object.create ? function(n, o, i, a) {
      a === void 0 && (a = i), Object.defineProperty(n, a, {enumerable: true, get: function() {
        return o[i];
      }});
    } : function(n, o, i, a) {
      a === void 0 && (a = i), n[a] = o[i];
    }, na = function(n) {
      var o = typeof Symbol == "function" && Symbol.iterator, i = o && n[o], a = 0;
      if (i)
        return i.call(n);
      if (n && typeof n.length == "number")
        return {next: function() {
          return n && a >= n.length && (n = void 0), {value: n && n[a++], done: !n};
        }};
      throw new TypeError(o ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }, Wl = function(n, o) {
      var i = typeof Symbol == "function" && n[Symbol.iterator];
      if (!i)
        return n;
      var a = i.call(n), s, l = [], u;
      try {
        for (; (o === void 0 || o-- > 0) && !(s = a.next()).done; )
          l.push(s.value);
      } catch (c) {
        u = {error: c};
      } finally {
        try {
          s && !s.done && (i = a.return) && i.call(a);
        } finally {
          if (u)
            throw u.error;
        }
      }
      return l;
    }, wf = function() {
      for (var n = [], o = 0; o < arguments.length; o++)
        n = n.concat(Wl(arguments[o]));
      return n;
    }, Rf = function() {
      for (var n = 0, o = 0, i = arguments.length; o < i; o++)
        n += arguments[o].length;
      for (var a = Array(n), s = 0, o = 0; o < i; o++)
        for (var l = arguments[o], u = 0, c = l.length; u < c; u++, s++)
          a[s] = l[u];
      return a;
    }, Ef = function(n, o) {
      for (var i = 0, a = o.length, s = n.length; i < a; i++, s++)
        n[s] = o[i];
      return n;
    }, Dn = function(n) {
      return this instanceof Dn ? (this.v = n, this) : new Dn(n);
    }, Ff = function(n, o, i) {
      if (!Symbol.asyncIterator)
        throw new TypeError("Symbol.asyncIterator is not defined.");
      var a = i.apply(n, o || []), s, l = [];
      return s = {}, u("next"), u("throw"), u("return"), s[Symbol.asyncIterator] = function() {
        return this;
      }, s;
      function u(h) {
        a[h] && (s[h] = function(v) {
          return new Promise(function(y, C) {
            l.push([h, v, y, C]) > 1 || c(h, v);
          });
        });
      }
      function c(h, v) {
        try {
          f(a[h](v));
        } catch (y) {
          m(l[0][3], y);
        }
      }
      function f(h) {
        h.value instanceof Dn ? Promise.resolve(h.value.v).then(p, d) : m(l[0][2], h);
      }
      function p(h) {
        c("next", h);
      }
      function d(h) {
        c("throw", h);
      }
      function m(h, v) {
        h(v), l.shift(), l.length && c(l[0][0], l[0][1]);
      }
    }, Mf = function(n) {
      var o, i;
      return o = {}, a("next"), a("throw", function(s) {
        throw s;
      }), a("return"), o[Symbol.iterator] = function() {
        return this;
      }, o;
      function a(s, l) {
        o[s] = n[s] ? function(u) {
          return (i = !i) ? {value: Dn(n[s](u)), done: s === "return"} : l ? l(u) : u;
        } : l;
      }
    }, If = function(n) {
      if (!Symbol.asyncIterator)
        throw new TypeError("Symbol.asyncIterator is not defined.");
      var o = n[Symbol.asyncIterator], i;
      return o ? o.call(n) : (n = typeof na == "function" ? na(n) : n[Symbol.iterator](), i = {}, a("next"), a("throw"), a("return"), i[Symbol.asyncIterator] = function() {
        return this;
      }, i);
      function a(l) {
        i[l] = n[l] && function(u) {
          return new Promise(function(c, f) {
            u = n[l](u), s(c, f, u.done, u.value);
          });
        };
      }
      function s(l, u, c, f) {
        Promise.resolve(f).then(function(p) {
          l({value: p, done: c});
        }, u);
      }
    }, Af = function(n, o) {
      return Object.defineProperty ? Object.defineProperty(n, "raw", {value: o}) : n.raw = o, n;
    };
    var r = Object.create ? function(n, o) {
      Object.defineProperty(n, "default", {enumerable: true, value: o});
    } : function(n, o) {
      n.default = o;
    };
    Df = function(n) {
      if (n && n.__esModule)
        return n;
      var o = {};
      if (n != null)
        for (var i in n)
          i !== "default" && Object.prototype.hasOwnProperty.call(n, i) && oa(o, n, i);
      return r(o, n), o;
    }, Lf = function(n) {
      return n && n.__esModule ? n : {default: n};
    }, Of = function(n, o, i, a) {
      if (i === "a" && !a)
        throw new TypeError("Private accessor was defined without a getter");
      if (typeof o == "function" ? n !== o || !a : !o.has(n))
        throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return i === "m" ? a : i === "a" ? a.call(n) : a ? a.value : o.get(n);
    }, kf = function(n, o, i, a, s) {
      if (a === "m")
        throw new TypeError("Private method is not writable");
      if (a === "a" && !s)
        throw new TypeError("Private accessor was defined without a setter");
      if (typeof o == "function" ? n !== o || !s : !o.has(n))
        throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return a === "a" ? s.call(n, i) : s ? s.value = i : o.set(n, i), i;
    }, e("__extends", gf), e("__assign", vf), e("__rest", yf), e("__decorate", bf), e("__param", xf), e("__metadata", Sf), e("__awaiter", Cf), e("__generator", Pf), e("__exportStar", Tf), e("__createBinding", oa), e("__values", na), e("__read", Wl), e("__spread", wf), e("__spreadArrays", Rf), e("__spreadArray", Ef), e("__await", Dn), e("__asyncGenerator", Ff), e("__asyncDelegator", Mf), e("__asyncValues", If), e("__makeTemplateObject", Af), e("__importStar", Df), e("__importDefault", Lf), e("__classPrivateFieldGet", Of), e("__classPrivateFieldSet", kf);
  });
});
var im = qr((Zl) => {
  Object.defineProperty(Zl, "__esModule", {value: true});
  function SS(e) {
    var t = {};
    return function(r) {
      return t[r] === void 0 && (t[r] = e(r)), t[r];
    };
  }
  Zl.default = SS;
});
var Ql = qr((Jl) => {
  Object.defineProperty(Jl, "__esModule", {value: true});
  function CS(e) {
    return e && typeof e == "object" && "default" in e ? e.default : e;
  }
  var PS = CS(im()), TS = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, wS = PS(function(e) {
    return TS.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  });
  Jl.default = wS;
});
var xg = qr((R$, bg) => {
  var F = F || {};
  F.Geometry = function() {
  };
  F.Geometry.intersectLineLine = function(e, t) {
    var r = (e.intercept - t.intercept) / (t.slope - e.slope), n = e.slope * r + e.intercept;
    return {x: r, y: n};
  };
  F.Geometry.distanceFromOrigin = function(e) {
    return Math.sqrt(Math.pow(e.x, 2) + Math.pow(e.y, 2));
  };
  F.Geometry.distanceLineFromOrigin = function(e) {
    return Math.abs(e.intercept) / Math.sqrt(Math.pow(e.slope, 2) + 1);
  };
  F.Geometry.perpendicularThroughPoint = function(e, t) {
    var r = -1 / e.slope, n = t.y - r * t.x;
    return {slope: r, intercept: n};
  };
  F.Geometry.angleFromOrigin = function(e) {
    return Math.atan2(e.y, e.x);
  };
  F.Geometry.normalizeAngle = function(e) {
    var t = 2 * Math.PI;
    return (e % t + t) % t;
  };
  F.Geometry.lengthOfRayUntilIntersect = function(e, t) {
    return t.intercept / (Math.sin(e) - t.slope * Math.cos(e));
  };
  F.Hsluv = function() {
  };
  F.Hsluv.getBounds = function(e) {
    for (var t = [], r = Math.pow(e + 16, 3) / 1560896, n = r > F.Hsluv.epsilon ? r : e / F.Hsluv.kappa, o = 0; o < 3; )
      for (var i = o++, a = F.Hsluv.m[i][0], s = F.Hsluv.m[i][1], l = F.Hsluv.m[i][2], u = 0; u < 2; ) {
        var c = u++, f = (284517 * a - 94839 * l) * n, p = (838422 * l + 769860 * s + 731718 * a) * e * n - 769860 * c * e, d = (632260 * l - 126452 * s) * n + 126452 * c;
        t.push({slope: f / d, intercept: p / d});
      }
    return t;
  };
  F.Hsluv.maxSafeChromaForL = function(e) {
    for (var t = F.Hsluv.getBounds(e), r = Infinity, n = 0; n < t.length; ) {
      var o = t[n];
      ++n;
      var i = F.Geometry.distanceLineFromOrigin(o);
      r = Math.min(r, i);
    }
    return r;
  };
  F.Hsluv.maxChromaForLH = function(e, t) {
    for (var r = t / 360 * Math.PI * 2, n = F.Hsluv.getBounds(e), o = Infinity, i = 0; i < n.length; ) {
      var a = n[i];
      ++i;
      var s = F.Geometry.lengthOfRayUntilIntersect(r, a);
      s >= 0 && (o = Math.min(o, s));
    }
    return o;
  };
  F.Hsluv.dotProduct = function(e, t) {
    for (var r = 0, n = 0, o = e.length; n < o; ) {
      var i = n++;
      r += e[i] * t[i];
    }
    return r;
  };
  F.Hsluv.fromLinear = function(e) {
    return e <= 31308e-7 ? 12.92 * e : 1.055 * Math.pow(e, 0.4166666666666667) - 0.055;
  };
  F.Hsluv.toLinear = function(e) {
    return e > 0.04045 ? Math.pow((e + 0.055) / 1.055, 2.4) : e / 12.92;
  };
  F.Hsluv.xyzToRgb = function(e) {
    return [F.Hsluv.fromLinear(F.Hsluv.dotProduct(F.Hsluv.m[0], e)), F.Hsluv.fromLinear(F.Hsluv.dotProduct(F.Hsluv.m[1], e)), F.Hsluv.fromLinear(F.Hsluv.dotProduct(F.Hsluv.m[2], e))];
  };
  F.Hsluv.rgbToXyz = function(e) {
    var t = [F.Hsluv.toLinear(e[0]), F.Hsluv.toLinear(e[1]), F.Hsluv.toLinear(e[2])];
    return [F.Hsluv.dotProduct(F.Hsluv.minv[0], t), F.Hsluv.dotProduct(F.Hsluv.minv[1], t), F.Hsluv.dotProduct(F.Hsluv.minv[2], t)];
  };
  F.Hsluv.yToL = function(e) {
    return e <= F.Hsluv.epsilon ? e / F.Hsluv.refY * F.Hsluv.kappa : 116 * Math.pow(e / F.Hsluv.refY, 0.3333333333333333) - 16;
  };
  F.Hsluv.lToY = function(e) {
    return e <= 8 ? F.Hsluv.refY * e / F.Hsluv.kappa : F.Hsluv.refY * Math.pow((e + 16) / 116, 3);
  };
  F.Hsluv.xyzToLuv = function(e) {
    var t = e[0], r = e[1], n = e[2], o = t + 15 * r + 3 * n, i = 4 * t, a = 9 * r;
    o != 0 ? (i /= o, a /= o) : (i = NaN, a = NaN);
    var s = F.Hsluv.yToL(r);
    if (s == 0)
      return [0, 0, 0];
    var l = 13 * s * (i - F.Hsluv.refU), u = 13 * s * (a - F.Hsluv.refV);
    return [s, l, u];
  };
  F.Hsluv.luvToXyz = function(e) {
    var t = e[0], r = e[1], n = e[2];
    if (t == 0)
      return [0, 0, 0];
    var o = r / (13 * t) + F.Hsluv.refU, i = n / (13 * t) + F.Hsluv.refV, a = F.Hsluv.lToY(t), s = 0 - 9 * a * o / ((o - 4) * i - o * i), l = (9 * a - 15 * i * a - i * s) / (3 * i);
    return [s, a, l];
  };
  F.Hsluv.luvToLch = function(e) {
    var t = e[0], r = e[1], n = e[2], o = Math.sqrt(r * r + n * n), i;
    if (o < 1e-8)
      i = 0;
    else {
      var a = Math.atan2(n, r);
      i = a * 180 / Math.PI, i < 0 && (i = 360 + i);
    }
    return [t, o, i];
  };
  F.Hsluv.lchToLuv = function(e) {
    var t = e[0], r = e[1], n = e[2], o = n / 360 * 2 * Math.PI, i = Math.cos(o) * r, a = Math.sin(o) * r;
    return [t, i, a];
  };
  F.Hsluv.hsluvToLch = function(e) {
    var t = e[0], r = e[1], n = e[2];
    if (n > 99.9999999)
      return [100, 0, t];
    if (n < 1e-8)
      return [0, 0, t];
    var o = F.Hsluv.maxChromaForLH(n, t), i = o / 100 * r;
    return [n, i, t];
  };
  F.Hsluv.lchToHsluv = function(e) {
    var t = e[0], r = e[1], n = e[2];
    if (t > 99.9999999)
      return [n, 0, 100];
    if (t < 1e-8)
      return [n, 0, 0];
    var o = F.Hsluv.maxChromaForLH(t, n), i = r / o * 100;
    return [n, i, t];
  };
  F.Hsluv.hpluvToLch = function(e) {
    var t = e[0], r = e[1], n = e[2];
    if (n > 99.9999999)
      return [100, 0, t];
    if (n < 1e-8)
      return [0, 0, t];
    var o = F.Hsluv.maxSafeChromaForL(n), i = o / 100 * r;
    return [n, i, t];
  };
  F.Hsluv.lchToHpluv = function(e) {
    var t = e[0], r = e[1], n = e[2];
    if (t > 99.9999999)
      return [n, 0, 100];
    if (t < 1e-8)
      return [n, 0, 0];
    var o = F.Hsluv.maxSafeChromaForL(t), i = r / o * 100;
    return [n, i, t];
  };
  F.Hsluv.rgbToHex = function(e) {
    for (var t = "#", r = 0; r < 3; ) {
      var n = r++, o = e[n], i = Math.round(o * 255), a = i % 16, s = (i - a) / 16 | 0;
      t += F.Hsluv.hexChars.charAt(s) + F.Hsluv.hexChars.charAt(a);
    }
    return t;
  };
  F.Hsluv.hexToRgb = function(e) {
    e = e.toLowerCase();
    for (var t = [], r = 0; r < 3; ) {
      var n = r++, o = F.Hsluv.hexChars.indexOf(e.charAt(n * 2 + 1)), i = F.Hsluv.hexChars.indexOf(e.charAt(n * 2 + 2)), a = o * 16 + i;
      t.push(a / 255);
    }
    return t;
  };
  F.Hsluv.lchToRgb = function(e) {
    return F.Hsluv.xyzToRgb(F.Hsluv.luvToXyz(F.Hsluv.lchToLuv(e)));
  };
  F.Hsluv.rgbToLch = function(e) {
    return F.Hsluv.luvToLch(F.Hsluv.xyzToLuv(F.Hsluv.rgbToXyz(e)));
  };
  F.Hsluv.hsluvToRgb = function(e) {
    return F.Hsluv.lchToRgb(F.Hsluv.hsluvToLch(e));
  };
  F.Hsluv.rgbToHsluv = function(e) {
    return F.Hsluv.lchToHsluv(F.Hsluv.rgbToLch(e));
  };
  F.Hsluv.hpluvToRgb = function(e) {
    return F.Hsluv.lchToRgb(F.Hsluv.hpluvToLch(e));
  };
  F.Hsluv.rgbToHpluv = function(e) {
    return F.Hsluv.lchToHpluv(F.Hsluv.rgbToLch(e));
  };
  F.Hsluv.hsluvToHex = function(e) {
    return F.Hsluv.rgbToHex(F.Hsluv.hsluvToRgb(e));
  };
  F.Hsluv.hpluvToHex = function(e) {
    return F.Hsluv.rgbToHex(F.Hsluv.hpluvToRgb(e));
  };
  F.Hsluv.hexToHsluv = function(e) {
    return F.Hsluv.rgbToHsluv(F.Hsluv.hexToRgb(e));
  };
  F.Hsluv.hexToHpluv = function(e) {
    return F.Hsluv.rgbToHpluv(F.Hsluv.hexToRgb(e));
  };
  F.Hsluv.m = [[3.240969941904521, -1.537383177570093, -0.498610760293], [-0.96924363628087, 1.87596750150772, 0.041555057407175], [0.055630079696993, -0.20397695888897, 1.056971514242878]];
  F.Hsluv.minv = [[0.41239079926595, 0.35758433938387, 0.18048078840183], [0.21263900587151, 0.71516867876775, 0.072192315360733], [0.019330818715591, 0.11919477979462, 0.95053215224966]];
  F.Hsluv.refY = 1;
  F.Hsluv.refU = 0.19783000664283;
  F.Hsluv.refV = 0.46831999493879;
  F.Hsluv.kappa = 903.2962962;
  F.Hsluv.epsilon = 0.0088564516;
  F.Hsluv.hexChars = "0123456789abcdef";
  var RT = {hsluvToRgb: F.Hsluv.hsluvToRgb, rgbToHsluv: F.Hsluv.rgbToHsluv, hpluvToRgb: F.Hsluv.hpluvToRgb, rgbToHpluv: F.Hsluv.rgbToHpluv, hsluvToHex: F.Hsluv.hsluvToHex, hexToHsluv: F.Hsluv.hexToHsluv, hpluvToHex: F.Hsluv.hpluvToHex, hexToHpluv: F.Hsluv.hexToHpluv, lchToHpluv: F.Hsluv.lchToHpluv, hpluvToLch: F.Hsluv.hpluvToLch, lchToHsluv: F.Hsluv.lchToHsluv, hsluvToLch: F.Hsluv.hsluvToLch, lchToLuv: F.Hsluv.lchToLuv, luvToLch: F.Hsluv.luvToLch, xyzToLuv: F.Hsluv.xyzToLuv, luvToXyz: F.Hsluv.luvToXyz, xyzToRgb: F.Hsluv.xyzToRgb, rgbToXyz: F.Hsluv.rgbToXyz, lchToRgb: F.Hsluv.lchToRgb, rgbToLch: F.Hsluv.rgbToLch};
  bg.exports = RT;
});
var Nv = qr((V3, $c) => {
  var Nw = Object.prototype.hasOwnProperty, ht = "~";
  function Fi() {
  }
  Object.create && (Fi.prototype = Object.create(null), new Fi().__proto__ || (ht = false));
  function Bw(e, t, r) {
    this.fn = e, this.context = t, this.once = r || false;
  }
  function jv(e, t, r, n, o) {
    if (typeof r != "function")
      throw new TypeError("The listener must be a function");
    var i = new Bw(r, n || e, o), a = ht ? ht + t : t;
    return e._events[a] ? e._events[a].fn ? e._events[a] = [e._events[a], i] : e._events[a].push(i) : (e._events[a] = i, e._eventsCount++), e;
  }
  function il(e, t) {
    --e._eventsCount == 0 ? e._events = new Fi() : delete e._events[t];
  }
  function ut() {
    this._events = new Fi(), this._eventsCount = 0;
  }
  ut.prototype.eventNames = function() {
    var t = [], r, n;
    if (this._eventsCount === 0)
      return t;
    for (n in r = this._events)
      Nw.call(r, n) && t.push(ht ? n.slice(1) : n);
    return Object.getOwnPropertySymbols ? t.concat(Object.getOwnPropertySymbols(r)) : t;
  };
  ut.prototype.listeners = function(t) {
    var r = ht ? ht + t : t, n = this._events[r];
    if (!n)
      return [];
    if (n.fn)
      return [n.fn];
    for (var o = 0, i = n.length, a = new Array(i); o < i; o++)
      a[o] = n[o].fn;
    return a;
  };
  ut.prototype.listenerCount = function(t) {
    var r = ht ? ht + t : t, n = this._events[r];
    return n ? n.fn ? 1 : n.length : 0;
  };
  ut.prototype.emit = function(t, r, n, o, i, a) {
    var s = ht ? ht + t : t;
    if (!this._events[s])
      return false;
    var l = this._events[s], u = arguments.length, c, f;
    if (l.fn) {
      switch (l.once && this.removeListener(t, l.fn, void 0, true), u) {
        case 1:
          return l.fn.call(l.context), true;
        case 2:
          return l.fn.call(l.context, r), true;
        case 3:
          return l.fn.call(l.context, r, n), true;
        case 4:
          return l.fn.call(l.context, r, n, o), true;
        case 5:
          return l.fn.call(l.context, r, n, o, i), true;
        case 6:
          return l.fn.call(l.context, r, n, o, i, a), true;
      }
      for (f = 1, c = new Array(u - 1); f < u; f++)
        c[f - 1] = arguments[f];
      l.fn.apply(l.context, c);
    } else {
      var p = l.length, d;
      for (f = 0; f < p; f++)
        switch (l[f].once && this.removeListener(t, l[f].fn, void 0, true), u) {
          case 1:
            l[f].fn.call(l[f].context);
            break;
          case 2:
            l[f].fn.call(l[f].context, r);
            break;
          case 3:
            l[f].fn.call(l[f].context, r, n);
            break;
          case 4:
            l[f].fn.call(l[f].context, r, n, o);
            break;
          default:
            if (!c)
              for (d = 1, c = new Array(u - 1); d < u; d++)
                c[d - 1] = arguments[d];
            l[f].fn.apply(l[f].context, c);
        }
    }
    return true;
  };
  ut.prototype.on = function(t, r, n) {
    return jv(this, t, r, n, false);
  };
  ut.prototype.once = function(t, r, n) {
    return jv(this, t, r, n, true);
  };
  ut.prototype.removeListener = function(t, r, n, o) {
    var i = ht ? ht + t : t;
    if (!this._events[i])
      return this;
    if (!r)
      return il(this, i), this;
    var a = this._events[i];
    if (a.fn)
      a.fn === r && (!o || a.once) && (!n || a.context === n) && il(this, i);
    else {
      for (var s = 0, l = [], u = a.length; s < u; s++)
        (a[s].fn !== r || o && !a[s].once || n && a[s].context !== n) && l.push(a[s]);
      l.length ? this._events[i] = l.length === 1 ? l[0] : l : il(this, i);
    }
    return this;
  };
  ut.prototype.removeAllListeners = function(t) {
    var r;
    return t ? (r = ht ? ht + t : t, this._events[r] && il(this, r)) : (this._events = new Fi(), this._eventsCount = 0), this;
  };
  ut.prototype.off = ut.prototype.removeListener;
  ut.prototype.addListener = ut.prototype.on;
  ut.prefixed = ht;
  ut.EventEmitter = ut;
  typeof $c != "undefined" && ($c.exports = ut);
});
var Oi = qr((HK, Yv) => {
  var Zw = {childContextTypes: true, contextTypes: true, defaultProps: true, displayName: true, getDefaultProps: true, getDerivedStateFromProps: true, mixins: true, propTypes: true, type: true}, Jw = {name: true, length: true, prototype: true, caller: true, callee: true, arguments: true, arity: true}, Qw = Object.defineProperty, eR = Object.getOwnPropertyNames, Gv = Object.getOwnPropertySymbols, tR = Object.getOwnPropertyDescriptor, Zc = Object.getPrototypeOf, $v = Zc && Zc(Object);
  function Xv(e, t, r) {
    if (typeof t != "string") {
      if ($v) {
        var n = Zc(t);
        n && n !== $v && Xv(e, n, r);
      }
      var o = eR(t);
      Gv && (o = o.concat(Gv(t)));
      for (var i = 0; i < o.length; ++i) {
        var a = o[i];
        if (!Zw[a] && !Jw[a] && (!r || !r[a])) {
          var s = tR(t, a);
          try {
            Qw(e, a, s);
          } catch (l) {
          }
        }
      }
      return e;
    }
    return e;
  }
  Yv.exports = Xv;
});
var Ub = qr((Iee, Np) => {
  (function() {
    function e(h, v) {
      document.addEventListener ? h.addEventListener("scroll", v, false) : h.attachEvent("scroll", v);
    }
    function t(h) {
      document.body ? h() : document.addEventListener ? document.addEventListener("DOMContentLoaded", function v() {
        document.removeEventListener("DOMContentLoaded", v), h();
      }) : document.attachEvent("onreadystatechange", function v() {
        (document.readyState == "interactive" || document.readyState == "complete") && (document.detachEvent("onreadystatechange", v), h());
      });
    }
    function r(h) {
      this.a = document.createElement("div"), this.a.setAttribute("aria-hidden", "true"), this.a.appendChild(document.createTextNode(h)), this.b = document.createElement("span"), this.c = document.createElement("span"), this.h = document.createElement("span"), this.f = document.createElement("span"), this.g = -1, this.b.style.cssText = "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;", this.c.style.cssText = "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;", this.f.style.cssText = "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;", this.h.style.cssText = "display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;", this.b.appendChild(this.h), this.c.appendChild(this.f), this.a.appendChild(this.b), this.a.appendChild(this.c);
    }
    function n(h, v) {
      h.a.style.cssText = "max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;white-space:nowrap;font-synthesis:none;font:" + v + ";";
    }
    function o(h) {
      var v = h.a.offsetWidth, y = v + 100;
      return h.f.style.width = y + "px", h.c.scrollLeft = y, h.b.scrollLeft = h.b.scrollWidth + 100, h.g !== v ? (h.g = v, true) : false;
    }
    function i(h, v) {
      function y() {
        var P = C;
        o(P) && P.a.parentNode && v(P.g);
      }
      var C = h;
      e(h.b, y), e(h.c, y), o(h);
    }
    function a(h, v) {
      var y = v || {};
      this.family = h, this.style = y.style || "normal", this.weight = y.weight || "normal", this.stretch = y.stretch || "normal";
    }
    var s = null, l = null, u = null, c = null;
    function f() {
      if (l === null)
        if (p() && /Apple/.test(window.navigator.vendor)) {
          var h = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))/.exec(window.navigator.userAgent);
          l = !!h && 603 > parseInt(h[1], 10);
        } else
          l = false;
      return l;
    }
    function p() {
      return c === null && (c = !!document.fonts), c;
    }
    function d() {
      if (u === null) {
        var h = document.createElement("div");
        try {
          h.style.font = "condensed 100px sans-serif";
        } catch (v) {
        }
        u = h.style.font !== "";
      }
      return u;
    }
    function m(h, v) {
      return [h.style, h.weight, d() ? h.stretch : "", "100px", v].join(" ");
    }
    a.prototype.load = function(h, v) {
      var y = this, C = h || "BESbswy", P = 0, b = v || 3e3, R = new Date().getTime();
      return new Promise(function(E, I) {
        if (p() && !f()) {
          var M = new Promise(function(L, U) {
            function $() {
              new Date().getTime() - R >= b ? U(Error("" + b + "ms timeout exceeded")) : document.fonts.load(m(y, '"' + y.family + '"'), C).then(function(G) {
                1 <= G.length ? L() : setTimeout($, 25);
              }, U);
            }
            $();
          }), A = new Promise(function(L, U) {
            P = setTimeout(function() {
              U(Error("" + b + "ms timeout exceeded"));
            }, b);
          });
          Promise.race([A, M]).then(function() {
            clearTimeout(P), E(y);
          }, I);
        } else
          t(function() {
            function L() {
              var g;
              (g = te != -1 && Z != -1 || te != -1 && B != -1 || Z != -1 && B != -1) && ((g = te != Z && te != B && Z != B) || (s === null && (g = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent), s = !!g && (536 > parseInt(g[1], 10) || parseInt(g[1], 10) === 536 && 11 >= parseInt(g[2], 10))), g = s && (te == K && Z == K && B == K || te == V && Z == V && B == V || te == S && Z == S && B == S)), g = !g), g && (x.parentNode && x.parentNode.removeChild(x), clearTimeout(P), E(y));
            }
            function U() {
              if (new Date().getTime() - R >= b)
                x.parentNode && x.parentNode.removeChild(x), I(Error("" + b + "ms timeout exceeded"));
              else {
                var g = document.hidden;
                (g === true || g === void 0) && (te = $.a.offsetWidth, Z = G.a.offsetWidth, B = W.a.offsetWidth, L()), P = setTimeout(U, 50);
              }
            }
            var $ = new r(C), G = new r(C), W = new r(C), te = -1, Z = -1, B = -1, K = -1, V = -1, S = -1, x = document.createElement("div");
            x.dir = "ltr", n($, m(y, "sans-serif")), n(G, m(y, "serif")), n(W, m(y, "monospace")), x.appendChild($.a), x.appendChild(G.a), x.appendChild(W.a), document.body.appendChild(x), K = $.a.offsetWidth, V = G.a.offsetWidth, S = W.a.offsetWidth, U(), i($, function(g) {
              te = g, L();
            }), n($, m(y, '"' + y.family + '",sans-serif')), i(G, function(g) {
              Z = g, L();
            }), n(G, m(y, '"' + y.family + '",serif')), i(W, function(g) {
              B = g, L();
            }), n(W, m(y, '"' + y.family + '",monospace'));
          });
      });
    }, typeof Np == "object" ? Np.exports = a : (window.FontFaceObserver = a, window.FontFaceObserver.prototype.load = a.prototype.load);
  })();
});
var _f = jo(Vf()), {__extends: Ln, __assign: T, __rest: de, __decorate: sA, __param: lA, __metadata: uA, __awaiter: cA, __generator: pA, __exportStar: fA, __createBinding: mA, __values: dA, __read: re, __spread: hA, __spreadArrays: gA, __spreadArray: je, __await: vA, __asyncGenerator: yA, __asyncDelegator: bA, __asyncValues: xA, __makeTemplateObject: SA, __importStar: CA, __importDefault: PA, __classPrivateFieldGet: TA, __classPrivateFieldSet: wA} = _f.default;
var lr = function(e) {
  return {isEnabled: function(t) {
    return e.some(function(r) {
      return !!t[r];
    });
  }};
}, aa = {measureLayout: lr(["layout", "layoutId", "drag", "_layoutResetTransform"]), animation: lr(["animate", "exit", "variants", "whileHover", "whileTap", "whileFocus", "whileDrag"]), exit: lr(["exit"]), drag: lr(["drag", "dragControls"]), focus: lr(["whileFocus"]), hover: lr(["whileHover", "onHoverStart", "onHoverEnd"]), tap: lr(["whileTap", "onTap", "onTapStart", "onTapCancel"]), pan: lr(["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"]), layoutAnimation: lr(["layout", "layoutId"])};
function No(e) {
  for (var t in e) {
    var r = e[t];
    r !== null && (aa[t].Component = r);
  }
}
var Ir = function() {
}, ye = function() {
};
Ir = function(e, t) {
  !e && typeof console != "undefined" && console.warn(t);
}, ye = function(e, t) {
  if (!e)
    throw new Error(t);
};
var On = createContext({strict: false});
var jf = Object.keys(aa), Lx = jf.length;
function Nf(e, t, r) {
  var n = [], o = useContext(On);
  if (!t)
    return null;
  r && o.strict && ye(false, "You have rendered a `motion` component within a `LazyMotion` component. This will break tree shaking. Import and render a `m` component instead.");
  for (var i = 0; i < Lx; i++) {
    var a = jf[i], s = aa[a], l = s.isEnabled, u = s.Component;
    l(e) && u && n.push(createElement(u, T({key: a}, e, {visualElement: t})));
  }
  return n;
}
var it = createContext({transformPagePoint: function(e) {
  return e;
}, isStatic: false});
var ur = createContext({});
function sa() {
  return useContext(ur).visualElement;
}
var vt = createContext(null);
function Le(e) {
  var t = useRef(null);
  return t.current === null && (t.current = e()), t.current;
}
function Bo() {
  var e = useContext(vt);
  if (e === null)
    return [true, null];
  var t = e.isPresent, r = e.onExitComplete, n = e.register, o = Ux();
  useEffect(function() {
    return n(o);
  }, []);
  var i = function() {
    return r == null ? void 0 : r(o);
  };
  return !t && r ? [false, i] : [true];
}
function Hx() {
  return Ul(useContext(vt));
}
function Ul(e) {
  return e === null ? true : e.isPresent;
}
var zx = 0, Wx = function() {
  return zx++;
}, Ux = function() {
  return Le(Wx);
};
var Yt = createContext(null);
var Ar = typeof window != "undefined";
var Zr = Ar ? useLayoutEffect : useEffect;
function qx(e) {
  var t = e.layoutId, r = useContext(Yt);
  return r && t !== void 0 ? r + "-" + t : t;
}
function Hf(e, t, r, n) {
  var o = useContext(it), i = useContext(On), a = sa(), s = useContext(vt), l = qx(r), u = useRef(void 0);
  n || (n = i.renderer), !u.current && n && (u.current = n(e, {visualState: t, parent: a, props: T(T({}, r), {layoutId: l}), presenceId: s == null ? void 0 : s.id, blockInitialAnimation: (s == null ? void 0 : s.initial) === false}));
  var c = u.current;
  return Zr(function() {
    !c || (c.setProps(T(T(T({}, o), r), {layoutId: l})), c.isPresent = Ul(s), c.isPresenceRoot = !a || a.presenceId !== (s == null ? void 0 : s.id), c.syncRender());
  }), useEffect(function() {
    var f;
    !c || (f = c.animationState) === null || f === void 0 || f.animateChanges();
  }), Zr(function() {
    return function() {
      return c == null ? void 0 : c.notifyUnmount();
    };
  }, []), c;
}
function Ho(e) {
  return typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current");
}
function zf(e, t, r) {
  return useCallback(function(n) {
    var o;
    n && ((o = e.mount) === null || o === void 0 || o.call(e, n)), t && (n ? t.mount(n) : t.unmount()), r && (typeof r == "function" ? r(n) : Ho(r) && (r.current = n));
  }, [t]);
}
function Gl(e) {
  return Array.isArray(e);
}
function yt(e) {
  return typeof e == "string" || Gl(e);
}
function Jx(e) {
  var t = {};
  return e.forEachValue(function(r, n) {
    return t[n] = r.get();
  }), t;
}
function Qx(e) {
  var t = {};
  return e.forEachValue(function(r, n) {
    return t[n] = r.getVelocity();
  }), t;
}
function $l(e, t, r, n, o) {
  var i;
  return n === void 0 && (n = {}), o === void 0 && (o = {}), typeof t == "string" && (t = (i = e.variants) === null || i === void 0 ? void 0 : i[t]), typeof t == "function" ? t(r != null ? r : e.custom, n, o) : t;
}
function Jr(e, t, r) {
  var n = e.getProps();
  return $l(n, t, r != null ? r : n.custom, Jx(e), Qx(e));
}
function Qr(e) {
  var t;
  return typeof ((t = e.animate) === null || t === void 0 ? void 0 : t.start) == "function" || yt(e.initial) || yt(e.animate) || yt(e.whileHover) || yt(e.whileDrag) || yt(e.whileTap) || yt(e.whileFocus) || yt(e.exit);
}
function ua(e) {
  return Boolean(Qr(e) || e.variants);
}
function Wf(e, t) {
  if (Qr(e)) {
    var r = e.initial, n = e.animate;
    return {initial: r === false || yt(r) ? r : void 0, animate: yt(n) ? n : void 0};
  }
  return e.inherit !== false ? t : {};
}
function Uf(e, t) {
  var r = Wf(e, useContext(ur)), n = r.initial, o = r.animate;
  return useMemo(function() {
    return {initial: n, animate: o};
  }, t ? [Gf(n), Gf(o)] : []);
}
function Gf(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
function zo(e) {
  var t = e.preloadedFeatures, r = e.createVisualElement, n = e.useRender, o = e.useVisualState, i = e.Component;
  t && No(t);
  function a(s, l) {
    var u = useContext(it).isStatic, c = null, f = Uf(s, u), p = o(s, u);
    return !u && Ar && (f.visualElement = Hf(i, p, s, r), c = Nf(s, f.visualElement, t)), createElement(Fragment, null, createElement(ur.Provider, {value: f}, n(i, s, zf(p, f.visualElement, l), p, u)), c);
  }
  return forwardRef(a);
}
function ca(e) {
  function t(n, o) {
    return o === void 0 && (o = {}), zo(e(n, o));
  }
  var r = new Map();
  return new Proxy(t, {get: function(n, o) {
    return r.has(o) || r.set(o, t(o)), r.get(o);
  }});
}
var Xf = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "svg", "switch", "symbol", "text", "tspan", "use", "view"];
function kn(e) {
  return typeof e != "string" || e.includes("-") ? false : !!(Xf.indexOf(e) > -1 || /[A-Z]/.test(e));
}
var en = {};
function Wo(e) {
  for (var t in e)
    en[t] = e[t];
}
var pa = ["", "X", "Y", "Z"], iS = ["translate", "scale", "rotate", "skew"], Vn = ["transformPerspective", "x", "y", "z"];
iS.forEach(function(e) {
  return pa.forEach(function(t) {
    return Vn.push(e + t);
  });
});
function Yf(e, t) {
  return Vn.indexOf(e) - Vn.indexOf(t);
}
var aS = new Set(Vn);
function Dr(e) {
  return aS.has(e);
}
var sS = new Set(["originX", "originY", "originZ"]);
function fa(e) {
  return sS.has(e);
}
function ma(e, t) {
  var r = t.layout, n = t.layoutId;
  return Dr(e) || fa(e) || (r || n !== void 0) && (!!en[e] || e === "opacity");
}
var Ge = function(e) {
  return e !== null && typeof e == "object" && e.getVelocity;
};
var lS = {x: "translateX", y: "translateY", z: "translateZ", transformPerspective: "perspective"};
function Kf(e, t, r, n) {
  var o = e.transform, i = e.transformKeys, a = t.enableHardwareAcceleration, s = a === void 0 ? true : a, l = t.allowTransformNone, u = l === void 0 ? true : l, c = "";
  i.sort(Yf);
  for (var f = false, p = i.length, d = 0; d < p; d++) {
    var m = i[d];
    c += (lS[m] || m) + "(" + o[m] + ") ", m === "z" && (f = true);
  }
  return !f && s ? c += "translateZ(0)" : c = c.trim(), n ? c = n(o, r ? "" : c) : u && r && (c = "none"), c;
}
function qf(e) {
  var t = e.originX, r = t === void 0 ? "50%" : t, n = e.originY, o = n === void 0 ? "50%" : n, i = e.originZ, a = i === void 0 ? 0 : i;
  return r + " " + o + " " + a;
}
function da(e) {
  return e.startsWith("--");
}
var Zf = function(e, t) {
  return t && typeof e == "number" ? t.transform(e) : e;
};
var ha = function(e, t) {
  return function(r) {
    return Math.max(Math.min(r, t), e);
  };
}, Lr = function(e) {
  return e % 1 ? Number(e.toFixed(5)) : e;
}, Or = /(-)?([\d]*\.?[\d])+/g, ga = /(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))/gi, Jf = /^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))$/i;
function cr(e) {
  return typeof e == "string";
}
var Ct = {test: function(e) {
  return typeof e == "number";
}, parse: parseFloat, transform: function(e) {
  return e;
}}, pr = T(T({}, Ct), {transform: ha(0, 1)}), _n = T(T({}, Ct), {default: 1});
var Uo = function(e) {
  return {test: function(t) {
    return cr(t) && t.endsWith(e) && t.split(" ").length === 1;
  }, parse: parseFloat, transform: function(t) {
    return "" + t + e;
  }};
}, jt = Uo("deg"), fr = Uo("%"), J = Uo("px"), Xl = Uo("vh"), Yl = Uo("vw"), va = T(T({}, fr), {parse: function(e) {
  return fr.parse(e) / 100;
}, transform: function(e) {
  return fr.transform(e * 100);
}});
var jn = function(e, t) {
  return function(r) {
    return Boolean(cr(r) && Jf.test(r) && r.startsWith(e) || t && Object.prototype.hasOwnProperty.call(r, t));
  };
}, ya = function(e, t, r) {
  return function(n) {
    var o;
    if (!cr(n))
      return n;
    var i = n.match(Or), a = i[0], s = i[1], l = i[2], u = i[3];
    return o = {}, o[e] = parseFloat(a), o[t] = parseFloat(s), o[r] = parseFloat(l), o.alpha = u !== void 0 ? parseFloat(u) : 1, o;
  };
};
var mr = {test: jn("hsl", "hue"), parse: ya("hue", "saturation", "lightness"), transform: function(e) {
  var t = e.hue, r = e.saturation, n = e.lightness, o = e.alpha, i = o === void 0 ? 1 : o;
  return "hsla(" + Math.round(t) + ", " + fr.transform(Lr(r)) + ", " + fr.transform(Lr(n)) + ", " + Lr(pr.transform(i)) + ")";
}};
var uS = ha(0, 255), ba = T(T({}, Ct), {transform: function(e) {
  return Math.round(uS(e));
}}), Kt = {test: jn("rgb", "red"), parse: ya("red", "green", "blue"), transform: function(e) {
  var t = e.red, r = e.green, n = e.blue, o = e.alpha, i = o === void 0 ? 1 : o;
  return "rgba(" + ba.transform(t) + ", " + ba.transform(r) + ", " + ba.transform(n) + ", " + Lr(pr.transform(i)) + ")";
}};
function cS(e) {
  var t = "", r = "", n = "", o = "";
  return e.length > 5 ? (t = e.substr(1, 2), r = e.substr(3, 2), n = e.substr(5, 2), o = e.substr(7, 2)) : (t = e.substr(1, 1), r = e.substr(2, 1), n = e.substr(3, 1), o = e.substr(4, 1), t += t, r += r, n += n, o += o), {red: parseInt(t, 16), green: parseInt(r, 16), blue: parseInt(n, 16), alpha: o ? parseInt(o, 16) / 255 : 1};
}
var Nn = {test: jn("#"), parse: cS, transform: Kt.transform};
var Ne = {test: function(e) {
  return Kt.test(e) || Nn.test(e) || mr.test(e);
}, parse: function(e) {
  return Kt.test(e) ? Kt.parse(e) : mr.test(e) ? mr.parse(e) : Nn.parse(e);
}, transform: function(e) {
  return cr(e) ? e : e.hasOwnProperty("red") ? Kt.transform(e) : mr.transform(e);
}};
var Qf = "${c}", em = "${n}";
function pS(e) {
  var t, r, n, o;
  return isNaN(e) && cr(e) && ((r = (t = e.match(Or)) === null || t === void 0 ? void 0 : t.length) !== null && r !== void 0 ? r : 0) + ((o = (n = e.match(ga)) === null || n === void 0 ? void 0 : n.length) !== null && o !== void 0 ? o : 0) > 0;
}
function tm(e) {
  var t = [], r = 0, n = e.match(ga);
  n && (r = n.length, e = e.replace(ga, Qf), t.push.apply(t, n.map(Ne.parse)));
  var o = e.match(Or);
  return o && (e = e.replace(Or, em), t.push.apply(t, o.map(Ct.parse))), {values: t, numColors: r, tokenised: e};
}
function rm(e) {
  return tm(e).values;
}
function nm(e) {
  var t = tm(e), r = t.values, n = t.numColors, o = t.tokenised, i = r.length;
  return function(a) {
    for (var s = o, l = 0; l < i; l++)
      s = s.replace(l < n ? Qf : em, l < n ? Ne.transform(a[l]) : Lr(a[l]));
    return s;
  };
}
var fS = function(e) {
  return typeof e == "number" ? 0 : e;
};
function mS(e) {
  var t = rm(e), r = nm(e);
  return r(t.map(fS));
}
var Ye = {test: pS, parse: rm, createTransformer: nm, getAnimatableNone: mS};
var dS = new Set(["brightness", "contrast", "saturate", "opacity"]);
function hS(e) {
  var t = e.slice(0, -1).split("("), r = t[0], n = t[1];
  if (r === "drop-shadow")
    return e;
  var o = (n.match(Or) || [])[0];
  if (!o)
    return e;
  var i = n.replace(o, ""), a = dS.has(r) ? 1 : 0;
  return o !== n && (a *= 100), r + "(" + a + i + ")";
}
var gS = /([a-z-]*)\(.*?\)/g, Bn = T(T({}, Ye), {getAnimatableNone: function(e) {
  var t = e.match(gS);
  return t ? t.map(hS).join(" ") : e;
}});
var Kl = T(T({}, Ct), {transform: Math.round});
var xa = {borderWidth: J, borderTopWidth: J, borderRightWidth: J, borderBottomWidth: J, borderLeftWidth: J, borderRadius: J, radius: J, borderTopLeftRadius: J, borderTopRightRadius: J, borderBottomRightRadius: J, borderBottomLeftRadius: J, width: J, maxWidth: J, height: J, maxHeight: J, size: J, top: J, right: J, bottom: J, left: J, padding: J, paddingTop: J, paddingRight: J, paddingBottom: J, paddingLeft: J, margin: J, marginTop: J, marginRight: J, marginBottom: J, marginLeft: J, rotate: jt, rotateX: jt, rotateY: jt, rotateZ: jt, scale: _n, scaleX: _n, scaleY: _n, scaleZ: _n, skew: jt, skewX: jt, skewY: jt, distance: J, translateX: J, translateY: J, translateZ: J, x: J, y: J, z: J, perspective: J, transformPerspective: J, opacity: T(T({}, pr), {default: 1}), originX: va, originY: va, originZ: J, zIndex: Kl, fillOpacity: pr, strokeOpacity: pr, numOctaves: Kl};
function Hn(e, t, r, n, o, i, a, s) {
  var l, u = e.style, c = e.vars, f = e.transform, p = e.transformKeys, d = e.transformOrigin;
  p.length = 0;
  var m = false, h = false, v = true;
  for (var y in t) {
    var C = t[y];
    if (da(y)) {
      c[y] = C;
      continue;
    }
    var P = xa[y], b = Zf(C, P);
    if (Dr(y)) {
      if (m = true, f[y] = b, p.push(y), !v)
        continue;
      C !== ((l = P.default) !== null && l !== void 0 ? l : 0) && (v = false);
    } else if (fa(y))
      d[y] = b, h = true;
    else if (n && r && n.isHydrated && en[y]) {
      var R = en[y].process(C, n, r), E = en[y].applyTo;
      if (E)
        for (var I = E.length, M = 0; M < I; M++)
          u[E[M]] = R;
      else
        u[y] = R;
    } else
      u[y] = b;
  }
  n && r && a && s ? (u.transform = a(n.deltaFinal, n.treeScale, m ? f : void 0), i && (u.transform = i(f, u.transform)), u.transformOrigin = s(n)) : (m && (u.transform = Kf(e, o, v, i)), h && (u.transformOrigin = qf(d)));
}
var zn = function() {
  return {style: {}, transform: {}, transformKeys: [], transformOrigin: {}, vars: {}};
};
function ql(e, t, r) {
  for (var n in t)
    !Ge(t[n]) && !ma(n, r) && (e[n] = t[n]);
}
function yS(e, t, r) {
  var n = e.transformTemplate;
  return useMemo(function() {
    var o = zn();
    Hn(o, t, void 0, void 0, {enableHardwareAcceleration: !r}, n);
    var i = o.vars, a = o.style;
    return T(T({}, i), a);
  }, [t]);
}
function bS(e, t, r) {
  var n = e.style || {}, o = {};
  return ql(o, n, e), Object.assign(o, yS(e, t, r)), e.transformValues && (o = e.transformValues(o)), o;
}
function om(e, t, r) {
  var n = {}, o = bS(e, t, r);
  return Boolean(e.drag) && (n.draggable = false, o.userSelect = o.WebkitUserSelect = o.WebkitTouchCallout = "none", o.touchAction = e.drag === true ? "none" : "pan-" + (e.drag === "x" ? "y" : "x")), n.style = o, n;
}
var xS = new Set(["initial", "animate", "exit", "style", "variants", "transition", "transformTemplate", "transformValues", "custom", "inherit", "layout", "layoutId", "_layoutResetTransform", "onLayoutAnimationComplete", "onViewportBoxUpdate", "onLayoutMeasure", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "drag", "dragControls", "dragListener", "dragConstraints", "dragDirectionLock", "_dragX", "_dragY", "dragElastic", "dragMomentum", "dragPropagation", "dragTransition", "whileDrag", "onPan", "onPanStart", "onPanEnd", "onPanSessionStart", "onTap", "onTapStart", "onTapCancel", "onHoverStart", "onHoverEnd", "whileFocus", "whileTap", "whileHover"]);
function kr(e) {
  return xS.has(e);
}
var am = function(e) {
  return !kr(e);
};
try {
  sm = Ql().default, am = function(e) {
    return e.startsWith("on") ? !kr(e) : sm(e);
  };
} catch (e) {
}
var sm;
function lm(e, t, r) {
  var n = {};
  for (var o in e)
    (am(o) || r === true && kr(o) || !t && !kr(o)) && (n[o] = e[o]);
  return n;
}
function um(e, t, r) {
  return typeof e == "string" ? e : J.transform(t + r * e);
}
function cm(e, t, r) {
  var n = um(t, e.x, e.width), o = um(r, e.y, e.height);
  return n + " " + o;
}
var eu = function(e, t) {
  return J.transform(e * t);
}, RS = {offset: "stroke-dashoffset", array: "stroke-dasharray"}, ES = {offset: "strokeDashoffset", array: "strokeDasharray"};
function pm(e, t, r, n, o, i) {
  n === void 0 && (n = 1), o === void 0 && (o = 0), i === void 0 && (i = true);
  var a = i ? RS : ES;
  e[a.offset] = eu(-o, t);
  var s = eu(r, t), l = eu(n, t);
  e[a.array] = s + " " + l;
}
function Wn(e, t, r, n, o, i, a, s) {
  var l = t.attrX, u = t.attrY, c = t.originX, f = t.originY, p = t.pathLength, d = t.pathSpacing, m = d === void 0 ? 1 : d, h = t.pathOffset, v = h === void 0 ? 0 : h, y = de(t, ["attrX", "attrY", "originX", "originY", "pathLength", "pathSpacing", "pathOffset"]);
  Hn(e, y, r, n, o, i, a, s), e.attrs = e.style, e.style = {};
  var C = e.attrs, P = e.style, b = e.dimensions, R = e.totalPathLength;
  C.transform && (b && (P.transform = C.transform), delete C.transform), b && (c !== void 0 || f !== void 0 || P.transform) && (P.transformOrigin = cm(b, c !== void 0 ? c : 0.5, f !== void 0 ? f : 0.5)), l !== void 0 && (C.x = l), u !== void 0 && (C.y = u), R !== void 0 && p !== void 0 && pm(C, R, p, m, v, false);
}
var Sa = function() {
  return T(T({}, zn()), {attrs: {}});
};
function fm(e, t) {
  var r = useMemo(function() {
    var o = Sa();
    return Wn(o, t, void 0, void 0, {enableHardwareAcceleration: false}, e.transformTemplate), T(T({}, o.attrs), {style: T({}, o.style)});
  }, [t]);
  if (e.style) {
    var n = {};
    ql(n, e.style, e), r.style = T(T({}, n), r.style);
  }
  return r;
}
function mm(e) {
  e === void 0 && (e = false);
  var t = function(r, n, o, i, a) {
    var s = i.latestValues, l = kn(r) ? fm : om, u = l(n, s, a), c = lm(n, typeof r == "string", e), f = T(T(T({}, c), u), {ref: o});
    return createElement(r, f);
  };
  return t;
}
var IS = /([a-z])([A-Z])/g, AS = "$1-$2", Ca = function(e) {
  return e.replace(IS, AS).toLowerCase();
};
function Pa(e, t) {
  var r = t.style, n = t.vars;
  Object.assign(e.style, r);
  for (var o in n)
    e.style.setProperty(o, n[o]);
}
var Ta = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox"]);
function wa(e, t) {
  Pa(e, t);
  for (var r in t.attrs)
    e.setAttribute(Ta.has(r) ? r : Ca(r), t.attrs[r]);
}
function Un(e) {
  var t = e.style, r = {};
  for (var n in t)
    (Ge(t[n]) || ma(n, e)) && (r[n] = t[n]);
  return r;
}
function Ra(e) {
  var t = Un(e);
  for (var r in e)
    if (Ge(e[r])) {
      var n = r === "x" || r === "y" ? "attr" + r.toUpperCase() : r;
      t[n] = e[r];
    }
  return t;
}
function Gn(e) {
  return typeof e == "object" && typeof e.start == "function";
}
var dr = function(e) {
  return Array.isArray(e);
};
var dm = function(e) {
  return Boolean(e && typeof e == "object" && e.mix && e.toValue);
}, hm = function(e) {
  return dr(e) ? e[e.length - 1] || 0 : e;
};
function Qe(e) {
  var t = Ge(e) ? e.get() : e;
  return dm(t) ? t.toValue() : t;
}
function vm(e, t, r, n) {
  var o = e.scrapeMotionValuesFromProps, i = e.createRenderState, a = e.onMount, s = {latestValues: DS(t, r, n, o), renderState: i()};
  return a && (s.mount = function(l) {
    return a(t, l, s);
  }), s;
}
var $n = function(e) {
  return function(t, r) {
    var n = useContext(ur), o = useContext(vt);
    return r ? vm(e, t, n, o) : Le(function() {
      return vm(e, t, n, o);
    });
  };
};
function DS(e, t, r, n) {
  var o = {}, i = (r == null ? void 0 : r.initial) === false, a = n(e);
  for (var s in a)
    o[s] = Qe(a[s]);
  var l = e.initial, u = e.animate, c = Qr(e), f = ua(e);
  t && f && !c && e.inherit !== false && (l != null || (l = t.initial), u != null || (u = t.animate));
  var p = i || l === false ? u : l;
  if (p && typeof p != "boolean" && !Gn(p)) {
    var d = Array.isArray(p) ? p : [p];
    d.forEach(function(m) {
      var h = $l(e, m);
      if (!!h) {
        var v = h.transitionEnd;
        h.transition;
        var y = de(h, ["transitionEnd", "transition"]);
        for (var C in y)
          o[C] = y[C];
        for (var C in v)
          o[C] = v[C];
      }
    });
  }
  return o;
}
var ym = {useVisualState: $n({scrapeMotionValuesFromProps: Ra, createRenderState: Sa, onMount: function(e, t, r) {
  var n = r.renderState, o = r.latestValues;
  try {
    n.dimensions = typeof t.getBBox == "function" ? t.getBBox() : t.getBoundingClientRect();
  } catch (i) {
    n.dimensions = {x: 0, y: 0, width: 0, height: 0};
  }
  LS(t) && (n.totalPathLength = t.getTotalLength()), Wn(n, o, void 0, void 0, {enableHardwareAcceleration: false}, e.transformTemplate), wa(t, n);
}})};
function LS(e) {
  return e.tagName === "path";
}
var bm = {useVisualState: $n({scrapeMotionValuesFromProps: Un, createRenderState: zn})};
function Go(e, t, r, n) {
  var o = t.forwardMotionProps, i = o === void 0 ? false : o, a = kn(e) ? ym : bm;
  return T(T({}, a), {preloadedFeatures: r, useRender: mm(i), createVisualElement: n, Component: e});
}
var Te;
(function(e) {
  e.Animate = "animate", e.Hover = "whileHover", e.Tap = "whileTap", e.Drag = "whileDrag", e.Focus = "whileFocus", e.Exit = "exit";
})(Te || (Te = {}));
function Nt(e, t, r, n) {
  return e.addEventListener(t, r, n), function() {
    return e.removeEventListener(t, r, n);
  };
}
function Vr(e, t, r, n) {
  useEffect(function() {
    var o = e.current;
    if (r && o)
      return Nt(o, t, r, n);
  }, [e, t, r, n]);
}
function xm(e) {
  var t = e.whileFocus, r = e.visualElement, n = function() {
    var i;
    (i = r.animationState) === null || i === void 0 || i.setActive(Te.Focus, true);
  }, o = function() {
    var i;
    (i = r.animationState) === null || i === void 0 || i.setActive(Te.Focus, false);
  };
  Vr(r, "focus", t ? n : void 0), Vr(r, "blur", t ? o : void 0);
}
function Ea(e) {
  return typeof PointerEvent != "undefined" && e instanceof PointerEvent ? e.pointerType === "mouse" : e instanceof MouseEvent;
}
function Fa(e) {
  var t = !!e.touches;
  return t;
}
function kS(e) {
  return function(t) {
    var r = t instanceof MouseEvent, n = !r || r && t.button === 0;
    n && e(t);
  };
}
var VS = {pageX: 0, pageY: 0};
function _S(e, t) {
  t === void 0 && (t = "page");
  var r = e.touches[0] || e.changedTouches[0], n = r || VS;
  return {x: n[t + "X"], y: n[t + "Y"]};
}
function jS(e, t) {
  return t === void 0 && (t = "page"), {x: e[t + "X"], y: e[t + "Y"]};
}
function Ma(e, t) {
  return t === void 0 && (t = "page"), {point: Fa(e) ? _S(e, t) : jS(e, t)};
}
function Ia(e) {
  return Ma(e, "client");
}
var tu = function(e, t) {
  t === void 0 && (t = false);
  var r = function(n) {
    return e(n, Ma(n));
  };
  return t ? kS(r) : r;
};
var Sm = function() {
  return Ar && window.onpointerdown === null;
}, Cm = function() {
  return Ar && window.ontouchstart === null;
}, Pm = function() {
  return Ar && window.onmousedown === null;
};
var NS = {pointerdown: "mousedown", pointermove: "mousemove", pointerup: "mouseup", pointercancel: "mousecancel", pointerover: "mouseover", pointerout: "mouseout", pointerenter: "mouseenter", pointerleave: "mouseleave"}, BS = {pointerdown: "touchstart", pointermove: "touchmove", pointerup: "touchend", pointercancel: "touchcancel"};
function Tm(e) {
  return Sm() ? e : Cm() ? BS[e] : Pm() ? NS[e] : e;
}
function hr(e, t, r, n) {
  return Nt(e, Tm(t), tu(r, t === "pointerdown"), n);
}
function tn(e, t, r, n) {
  return Vr(e, Tm(t), r && tu(r, t === "pointerdown"), n);
}
function wm(e) {
  var t = null;
  return function() {
    var r = function() {
      t = null;
    };
    return t === null ? (t = e, r) : false;
  };
}
var Rm = wm("dragHorizontal"), Em = wm("dragVertical");
function ru(e) {
  var t = false;
  if (e === "y")
    t = Em();
  else if (e === "x")
    t = Rm();
  else {
    var r = Rm(), n = Em();
    r && n ? t = function() {
      r(), n();
    } : (r && r(), n && n());
  }
  return t;
}
function Aa() {
  var e = ru(true);
  return e ? (e(), false) : true;
}
function Fm(e, t, r) {
  return function(n, o) {
    var i;
    !Ea(n) || !e.isHoverEventsEnabled || Aa() || (r == null || r(n, o), (i = e.animationState) === null || i === void 0 || i.setActive(Te.Hover, t));
  };
}
function Mm(e) {
  var t = e.onHoverStart, r = e.onHoverEnd, n = e.whileHover, o = e.visualElement;
  tn(o, "pointerenter", t || n ? Fm(o, true, t) : void 0), tn(o, "pointerleave", r || n ? Fm(o, false, r) : void 0);
}
var nu = function(e, t) {
  return t ? e === t ? true : nu(e, t.parentElement) : false;
};
function Xn(e) {
  return useEffect(function() {
    return function() {
      return e();
    };
  }, []);
}
var _r = function(e, t, r) {
  return Math.min(Math.max(r, e), t);
};
var ou = 1e-3, zS = 0.01, Im = 10, WS = 0.05, US = 1;
function Am(e) {
  var t = e.duration, r = t === void 0 ? 800 : t, n = e.bounce, o = n === void 0 ? 0.25 : n, i = e.velocity, a = i === void 0 ? 0 : i, s = e.mass, l = s === void 0 ? 1 : s, u, c;
  Ir(r <= Im * 1e3, "Spring duration must be 10 seconds or less");
  var f = 1 - o;
  f = _r(WS, US, f), r = _r(zS, Im, r / 1e3), f < 1 ? (u = function(h) {
    var v = h * f, y = v * r, C = v - a, P = Da(h, f), b = Math.exp(-y);
    return ou - C / P * b;
  }, c = function(h) {
    var v = h * f, y = v * r, C = y * a + a, P = Math.pow(f, 2) * Math.pow(h, 2) * r, b = Math.exp(-y), R = Da(Math.pow(h, 2), f), E = -u(h) + ou > 0 ? -1 : 1;
    return E * ((C - P) * b) / R;
  }) : (u = function(h) {
    var v = Math.exp(-h * r), y = (h - a) * r + 1;
    return -ou + v * y;
  }, c = function(h) {
    var v = Math.exp(-h * r), y = (a - h) * (r * r);
    return v * y;
  });
  var p = 5 / r, d = $S(u, c, p);
  if (r = r * 1e3, isNaN(d))
    return {stiffness: 100, damping: 10, duration: r};
  var m = Math.pow(d, 2) * l;
  return {stiffness: m, damping: f * 2 * Math.sqrt(l * m), duration: r};
}
var GS = 12;
function $S(e, t, r) {
  for (var n = r, o = 1; o < GS; o++)
    n = n - e(n) / t(n);
  return n;
}
function Da(e, t) {
  return e * Math.sqrt(1 - t * t);
}
var XS = ["duration", "bounce"], YS = ["stiffness", "damping", "mass"];
function Dm(e, t) {
  return t.some(function(r) {
    return e[r] !== void 0;
  });
}
function KS(e) {
  var t = T({velocity: 0, stiffness: 100, damping: 10, mass: 1, isResolvedFromDuration: false}, e);
  if (!Dm(e, YS) && Dm(e, XS)) {
    var r = Am(e);
    t = T(T(T({}, t), r), {velocity: 0, mass: 1}), t.isResolvedFromDuration = true;
  }
  return t;
}
function La(e) {
  var t = e.from, r = t === void 0 ? 0 : t, n = e.to, o = n === void 0 ? 1 : n, i = e.restSpeed, a = i === void 0 ? 2 : i, s = e.restDelta, l = de(e, ["from", "to", "restSpeed", "restDelta"]), u = {done: false, value: r}, c = KS(l), f = c.stiffness, p = c.damping, d = c.mass, m = c.velocity, h = c.duration, v = c.isResolvedFromDuration, y = Lm, C = Lm;
  function P() {
    var b = m ? -(m / 1e3) : 0, R = o - r, E = p / (2 * Math.sqrt(f * d)), I = Math.sqrt(f / d) / 1e3;
    if (s != null || (s = Math.abs(o - r) <= 1 ? 0.01 : 0.4), E < 1) {
      var M = Da(I, E);
      y = function(L) {
        var U = Math.exp(-E * I * L);
        return o - U * ((b + E * I * R) / M * Math.sin(M * L) + R * Math.cos(M * L));
      }, C = function(L) {
        var U = Math.exp(-E * I * L);
        return E * I * U * (Math.sin(M * L) * (b + E * I * R) / M + R * Math.cos(M * L)) - U * (Math.cos(M * L) * (b + E * I * R) - M * R * Math.sin(M * L));
      };
    } else if (E === 1)
      y = function(L) {
        return o - Math.exp(-I * L) * (R + (b + I * R) * L);
      };
    else {
      var A = I * Math.sqrt(E * E - 1);
      y = function(L) {
        var U = Math.exp(-E * I * L), $ = Math.min(A * L, 300);
        return o - U * ((b + E * I * R) * Math.sinh($) + A * R * Math.cosh($)) / A;
      };
    }
  }
  return P(), {next: function(b) {
    var R = y(b);
    if (v)
      u.done = b >= h;
    else {
      var E = C(b) * 1e3, I = Math.abs(E) <= a, M = Math.abs(o - R) <= s;
      u.done = I && M;
    }
    return u.value = u.done ? o : R, u;
  }, flipTarget: function() {
    var b;
    m = -m, b = [o, r], r = b[0], o = b[1], P();
  }};
}
La.needsInterpolation = function(e, t) {
  return typeof e == "string" || typeof t == "string";
};
var Lm = function(e) {
  return 0;
};
var Bt = function(e, t, r) {
  var n = t - e;
  return n === 0 ? 1 : (r - e) / n;
};
var Se = function(e, t, r) {
  return -r * e + r * t + e;
};
var qS = function(e, t, r) {
  var n = e * e, o = t * t;
  return Math.sqrt(Math.max(0, r * (o - n) + n));
}, ZS = [Nn, Kt, mr], Om = function(e) {
  return ZS.find(function(t) {
    return t.test(e);
  });
}, km = function(e) {
  return "'" + e + "' is not an animatable color. Use the equivalent color code instead.";
}, rn = function(e, t) {
  var r = Om(e), n = Om(t);
  ye(!!r, km(e)), ye(!!n, km(t)), ye(r.transform === n.transform, "Both colors must be hex/RGBA, OR both must be HSLA.");
  var o = r.parse(e), i = n.parse(t), a = T({}, o), s = r === mr ? Se : qS;
  return function(l) {
    for (var u in a)
      u !== "alpha" && (a[u] = s(o[u], i[u], l));
    return a.alpha = Se(o.alpha, i.alpha, l), r.transform(a);
  };
};
var $o = function(e) {
  return typeof e == "number";
};
var JS = function(e, t) {
  return function(r) {
    return t(e(r));
  };
}, Ht = function() {
  for (var e = [], t = 0; t < arguments.length; t++)
    e[t] = arguments[t];
  return e.reduce(JS);
};
function Vm(e, t) {
  return $o(e) ? function(r) {
    return Se(e, t, r);
  } : Ne.test(e) ? rn(e, t) : au(e, t);
}
var iu = function(e, t) {
  var r = je([], e), n = r.length, o = e.map(function(i, a) {
    return Vm(i, t[a]);
  });
  return function(i) {
    for (var a = 0; a < n; a++)
      r[a] = o[a](i);
    return r;
  };
}, _m = function(e, t) {
  var r = T(T({}, e), t), n = {};
  for (var o in r)
    e[o] !== void 0 && t[o] !== void 0 && (n[o] = Vm(e[o], t[o]));
  return function(i) {
    for (var a in n)
      r[a] = n[a](i);
    return r;
  };
};
function jm(e) {
  for (var t = Ye.parse(e), r = t.length, n = 0, o = 0, i = 0, a = 0; a < r; a++)
    n || typeof t[a] == "number" ? n++ : t[a].hue !== void 0 ? i++ : o++;
  return {parsed: t, numNumbers: n, numRGB: o, numHSL: i};
}
var au = function(e, t) {
  var r = Ye.createTransformer(t), n = jm(e), o = jm(t);
  return ye(n.numHSL === o.numHSL && n.numRGB === o.numRGB && n.numNumbers >= o.numNumbers, "Complex values '" + e + "' and '" + t + "' too different to mix. Ensure all colors are of the same type."), Ht(iu(n.parsed, o.parsed), r);
};
var QS = function(e, t) {
  return function(r) {
    return Se(e, t, r);
  };
};
function eC(e) {
  if (typeof e == "number")
    return QS;
  if (typeof e == "string")
    return Ne.test(e) ? rn : au;
  if (Array.isArray(e))
    return iu;
  if (typeof e == "object")
    return _m;
}
function tC(e, t, r) {
  for (var n = [], o = r || eC(e[0]), i = e.length - 1, a = 0; a < i; a++) {
    var s = o(e[a], e[a + 1]);
    if (t) {
      var l = Array.isArray(t) ? t[a] : t;
      s = Ht(l, s);
    }
    n.push(s);
  }
  return n;
}
function rC(e, t) {
  var r = e[0], n = e[1], o = t[0];
  return function(i) {
    return o(Bt(r, n, i));
  };
}
function nC(e, t) {
  var r = e.length, n = r - 1;
  return function(o) {
    var i = 0, a = false;
    if (o <= e[0] ? a = true : o >= e[n] && (i = n - 1, a = true), !a) {
      for (var s = 1; s < r && !(e[s] > o || s === n); s++)
        ;
      i = s - 1;
    }
    var l = Bt(e[i], e[i + 1], o);
    return t[i](l);
  };
}
function nn(e, t, r) {
  var n = r === void 0 ? {} : r, o = n.clamp, i = o === void 0 ? true : o, a = n.ease, s = n.mixer, l = e.length;
  ye(l === t.length, "Both input and output ranges must be the same length"), ye(!a || !Array.isArray(a) || a.length === l - 1, "Array of easing functions must be of length `input.length - 1`, as it applies to the transitions **between** the defined values."), e[0] > e[l - 1] && (e = [].concat(e), t = [].concat(t), e.reverse(), t.reverse());
  var u = tC(t, a, s), c = l === 2 ? rC(e, u) : nC(e, u);
  return i ? function(f) {
    return c(_r(e[0], e[l - 1], f));
  } : c;
}
var Xo = function(e) {
  return function(t) {
    return 1 - e(1 - t);
  };
}, Oa = function(e) {
  return function(t) {
    return t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2;
  };
}, Nm = function(e) {
  return function(t) {
    return Math.pow(t, e);
  };
}, su = function(e) {
  return function(t) {
    return t * t * ((e + 1) * t - e);
  };
}, Bm = function(e) {
  var t = su(e);
  return function(r) {
    return (r *= 2) < 1 ? 0.5 * t(r) : 0.5 * (2 - Math.pow(2, -10 * (r - 1)));
  };
};
var Hm = 1.525, oC = 4 / 11, iC = 8 / 11, aC = 9 / 10, on$1 = function(e) {
  return e;
}, Yo = Nm(2), lu = Xo(Yo), Ko = Oa(Yo), ka = function(e) {
  return 1 - Math.sin(Math.acos(e));
}, Yn = Xo(ka), uu = Oa(Yn), qo = su(Hm), cu = Xo(qo), pu = Oa(qo), fu = Bm(Hm), sC = 4356 / 361, lC = 35442 / 1805, uC = 16061 / 1805, Kn = function(e) {
  if (e === 1 || e === 0)
    return e;
  var t = e * e;
  return e < oC ? 7.5625 * t : e < iC ? 9.075 * t - 9.9 * e + 3.4 : e < aC ? sC * t - lC * e + uC : 10.8 * e * e - 20.52 * e + 10.72;
}, mu = Xo(Kn), du = function(e) {
  return e < 0.5 ? 0.5 * (1 - Kn(1 - e * 2)) : 0.5 * Kn(e * 2 - 1) + 0.5;
};
function cC(e, t) {
  return e.map(function() {
    return t || Ko;
  }).splice(0, e.length - 1);
}
function pC(e) {
  var t = e.length;
  return e.map(function(r, n) {
    return n !== 0 ? n / (t - 1) : 0;
  });
}
function fC(e, t) {
  return e.map(function(r) {
    return r * t;
  });
}
function Zo(e) {
  var t = e.from, r = t === void 0 ? 0 : t, n = e.to, o = n === void 0 ? 1 : n, i = e.ease, a = e.offset, s = e.duration, l = s === void 0 ? 300 : s, u = {done: false, value: r}, c = Array.isArray(o) ? o : [r, o], f = fC(a && a.length === c.length ? a : pC(c), l);
  function p() {
    return nn(f, c, {ease: Array.isArray(i) ? i : cC(c, i)});
  }
  var d = p();
  return {next: function(m) {
    return u.value = d(m), u.done = m >= l, u;
  }, flipTarget: function() {
    c.reverse(), d = p();
  }};
}
function zm(e) {
  var t = e.velocity, r = t === void 0 ? 0 : t, n = e.from, o = n === void 0 ? 0 : n, i = e.power, a = i === void 0 ? 0.8 : i, s = e.timeConstant, l = s === void 0 ? 350 : s, u = e.restDelta, c = u === void 0 ? 0.5 : u, f = e.modifyTarget, p = {done: false, value: o}, d = a * r, m = o + d, h = f === void 0 ? m : f(m);
  return h !== m && (d = h - o), {next: function(v) {
    var y = -d * Math.exp(-v / l);
    return p.done = !(y > c || y < -c), p.value = p.done ? h : h + y, p;
  }, flipTarget: function() {
  }};
}
var Wm = {keyframes: Zo, spring: La, decay: zm};
function Um(e) {
  if (Array.isArray(e.to))
    return Zo;
  if (Wm[e.type])
    return Wm[e.type];
  var t = new Set(Object.keys(e));
  return t.has("ease") || t.has("duration") && !t.has("dampingRatio") ? Zo : t.has("dampingRatio") || t.has("stiffness") || t.has("mass") || t.has("damping") || t.has("restSpeed") || t.has("restDelta") ? La : Zo;
}
var hu = 1 / 60 * 1e3, mC = typeof performance != "undefined" ? function() {
  return performance.now();
} : function() {
  return Date.now();
}, gu = typeof window != "undefined" ? function(e) {
  return window.requestAnimationFrame(e);
} : function(e) {
  return setTimeout(function() {
    return e(mC());
  }, hu);
};
function Gm(e) {
  var t = [], r = [], n = 0, o = false, i = new WeakSet(), a = {schedule: function(s, l, u) {
    l === void 0 && (l = false), u === void 0 && (u = false);
    var c = u && o, f = c ? t : r;
    return l && i.add(s), f.indexOf(s) === -1 && (f.push(s), c && o && (n = t.length)), s;
  }, cancel: function(s) {
    var l = r.indexOf(s);
    l !== -1 && r.splice(l, 1), i.delete(s);
  }, process: function(s) {
    var l;
    if (o = true, l = [r, t], t = l[0], r = l[1], r.length = 0, n = t.length, n)
      for (var u = 0; u < n; u++) {
        var c = t[u];
        c(s), i.has(c) && (a.schedule(c), e());
      }
    o = false;
  }};
  return a;
}
var dC = 40, vu = true, Jo = false, yu = false, qn = {delta: 0, timestamp: 0}, Qo = ["read", "update", "preRender", "render", "postRender"], Va = Qo.reduce(function(e, t) {
  return e[t] = Gm(function() {
    return Jo = true;
  }), e;
}, {}), hC = Qo.reduce(function(e, t) {
  var r = Va[t];
  return e[t] = function(n, o, i) {
    return o === void 0 && (o = false), i === void 0 && (i = false), Jo || vC(), r.schedule(n, o, i);
  }, e;
}, {}), jr = Qo.reduce(function(e, t) {
  return e[t] = Va[t].cancel, e;
}, {}), bu = Qo.reduce(function(e, t) {
  return e[t] = function() {
    return Va[t].process(qn);
  }, e;
}, {}), gC = function(e) {
  return Va[e].process(qn);
}, $m = function(e) {
  Jo = false, qn.delta = vu ? hu : Math.max(Math.min(e - qn.timestamp, dC), 1), qn.timestamp = e, yu = true, Qo.forEach(gC), yu = false, Jo && (vu = false, gu($m));
}, vC = function() {
  Jo = true, vu = true, yu || gu($m);
}, zt = function() {
  return qn;
}, Me = hC;
function xu(e, t, r) {
  return r === void 0 && (r = 0), e - t - r;
}
function Xm(e, t, r, n) {
  return r === void 0 && (r = 0), n === void 0 && (n = true), n ? xu(t + -e, t, r) : t - (e - t) + r;
}
function Ym(e, t, r, n) {
  return n ? e >= t + r : e <= -r;
}
var yC = function(e) {
  var t = function(r) {
    var n = r.delta;
    return e(n);
  };
  return {start: function() {
    return Me.update(t, true);
  }, stop: function() {
    return jr.update(t);
  }};
};
function an(e) {
  var t, r, n = e.from, o = e.autoplay, i = o === void 0 ? true : o, a = e.driver, s = a === void 0 ? yC : a, l = e.elapsed, u = l === void 0 ? 0 : l, c = e.repeat, f = c === void 0 ? 0 : c, p = e.repeatType, d = p === void 0 ? "loop" : p, m = e.repeatDelay, h = m === void 0 ? 0 : m, v = e.onPlay, y = e.onStop, C = e.onComplete, P = e.onRepeat, b = e.onUpdate, R = de(e, ["from", "autoplay", "driver", "elapsed", "repeat", "repeatType", "repeatDelay", "onPlay", "onStop", "onComplete", "onRepeat", "onUpdate"]), E = R.to, I, M = 0, A = R.duration, L, U = false, $ = true, G, W = Um(R);
  ((r = (t = W).needsInterpolation) === null || r === void 0 ? void 0 : r.call(t, n, E)) && (G = nn([0, 100], [n, E], {clamp: false}), n = 0, E = 100);
  var te = W(T(T({}, R), {from: n, to: E}));
  function Z() {
    M++, d === "reverse" ? ($ = M % 2 == 0, u = Xm(u, A, h, $)) : (u = xu(u, A, h), d === "mirror" && te.flipTarget()), U = false, P && P();
  }
  function B() {
    I.stop(), C && C();
  }
  function K(S) {
    if ($ || (S = -S), u += S, !U) {
      var x = te.next(Math.max(0, u));
      L = x.value, G && (L = G(L)), U = $ ? x.done : u <= 0;
    }
    b == null || b(L), U && (M === 0 && (A != null || (A = u)), M < f ? Ym(u, A, h, $) && Z() : B());
  }
  function V() {
    v == null || v(), I = s(K), I.start();
  }
  return i && V(), {stop: function() {
    y == null || y(), I.stop();
  }};
}
function ei(e, t) {
  return t ? e * (1e3 / t) : 0;
}
function Nr(e) {
  var t = e.from, r = t === void 0 ? 0 : t, n = e.velocity, o = n === void 0 ? 0 : n, i = e.min, a = e.max, s = e.power, l = s === void 0 ? 0.8 : s, u = e.timeConstant, c = u === void 0 ? 750 : u, f = e.bounceStiffness, p = f === void 0 ? 500 : f, d = e.bounceDamping, m = d === void 0 ? 10 : d, h = e.restDelta, v = h === void 0 ? 1 : h, y = e.modifyTarget, C = e.driver, P = e.onUpdate, b = e.onComplete, R = e.onStop, E;
  function I(B) {
    return i !== void 0 && B < i || a !== void 0 && B > a;
  }
  function M(B) {
    return i === void 0 ? a : a === void 0 || Math.abs(i - B) < Math.abs(a - B) ? i : a;
  }
  function A(B) {
    E == null || E.stop(), E = an(T(T({}, B), {driver: C, onUpdate: function(K) {
      var V;
      P == null || P(K), (V = B.onUpdate) === null || V === void 0 || V.call(B, K);
    }, onComplete: b, onStop: R}));
  }
  function L(B) {
    A(T({type: "spring", stiffness: p, damping: m, restDelta: v}, B));
  }
  if (I(r))
    L({from: r, velocity: o, to: M(r)});
  else {
    var U = l * o + r;
    typeof y != "undefined" && (U = y(U));
    var $ = M(U), G = $ === i ? -1 : 1, W, te, Z = function(B) {
      W = te, te = B, o = ei(B - W, zt().delta), (G === 1 && B > $ || G === -1 && B < $) && L({from: B, to: $, velocity: o});
    };
    A({type: "decay", from: r, velocity: o, timeConstant: c, power: l, restDelta: v, modifyTarget: y, onUpdate: I(U) ? Z : void 0});
  }
  return {stop: function() {
    return E == null ? void 0 : E.stop();
  }};
}
var ti = function(e) {
  return e.hasOwnProperty("x") && e.hasOwnProperty("y");
};
var Su = function(e) {
  return ti(e) && e.hasOwnProperty("z");
};
var _a = function(e, t) {
  return Math.abs(e - t);
};
function ri(e, t) {
  if ($o(e) && $o(t))
    return _a(e, t);
  if (ti(e) && ti(t)) {
    var r = _a(e.x, t.x), n = _a(e.y, t.y), o = Su(e) && Su(t) ? _a(e.z, t.z) : 0;
    return Math.sqrt(Math.pow(r, 2) + Math.pow(n, 2) + Math.pow(o, 2));
  }
}
var Cu = function(e, t, r) {
  var n = t - e;
  return ((r - e) % n + n) % n + e;
};
var Km = function(e, t) {
  return 1 - 3 * t + 3 * e;
}, qm = function(e, t) {
  return 3 * t - 6 * e;
}, Zm = function(e) {
  return 3 * e;
}, ja = function(e, t, r) {
  return ((Km(t, r) * e + qm(t, r)) * e + Zm(t)) * e;
}, Jm = function(e, t, r) {
  return 3 * Km(t, r) * e * e + 2 * qm(t, r) * e + Zm(t);
}, bC = 1e-7, xC = 10;
function SC(e, t, r, n, o) {
  var i, a, s = 0;
  do
    a = t + (r - t) / 2, i = ja(a, n, o) - e, i > 0 ? r = a : t = a;
  while (Math.abs(i) > bC && ++s < xC);
  return a;
}
var CC = 8, PC = 1e-3;
function TC(e, t, r, n) {
  for (var o = 0; o < CC; ++o) {
    var i = Jm(t, r, n);
    if (i === 0)
      return t;
    var a = ja(t, r, n) - e;
    t -= a / i;
  }
  return t;
}
var Na = 11, Ba = 1 / (Na - 1);
function Pu(e, t, r, n) {
  if (e === t && r === n)
    return on$1;
  for (var o = new Float32Array(Na), i = 0; i < Na; ++i)
    o[i] = ja(i * Ba, e, r);
  function a(s) {
    for (var l = 0, u = 1, c = Na - 1; u !== c && o[u] <= s; ++u)
      l += Ba;
    --u;
    var f = (s - o[u]) / (o[u + 1] - o[u]), p = l + f * Ba, d = Jm(p, e, r);
    return d >= PC ? TC(s, p, e, r) : d === 0 ? p : SC(s, l, l + Ba, e, r);
  }
  return function(s) {
    return s === 0 || s === 1 ? s : ja(a(s), t, n);
  };
}
function ed(e) {
  var t = e.onTap, r = e.onTapStart, n = e.onTapCancel, o = e.whileTap, i = e.visualElement, a = t || r || n || o, s = useRef(false), l = useRef(null);
  function u() {
    var m;
    (m = l.current) === null || m === void 0 || m.call(l), l.current = null;
  }
  function c() {
    var m;
    return u(), s.current = false, (m = i.animationState) === null || m === void 0 || m.setActive(Te.Tap, false), !Aa();
  }
  function f(m, h) {
    !c() || (nu(i.getInstance(), m.target) ? t == null || t(m, h) : n == null || n(m, h));
  }
  function p(m, h) {
    !c() || n == null || n(m, h);
  }
  function d(m, h) {
    var v;
    u(), !s.current && (s.current = true, l.current = Ht(hr(window, "pointerup", f), hr(window, "pointercancel", p)), r == null || r(m, h), (v = i.animationState) === null || v === void 0 || v.setActive(Te.Tap, true));
  }
  tn(i, "pointerdown", a ? d : void 0), Xn(u);
}
var qt = function(e) {
  return function(t) {
    return e(t), null;
  };
};
var Ha = {tap: qt(ed), focus: qt(xm), hover: qt(Mm)};
function Tu(e, t) {
  if (!Array.isArray(t))
    return false;
  var r = t.length;
  if (r !== e.length)
    return false;
  for (var n = 0; n < r; n++)
    if (t[n] !== e[n])
      return false;
  return true;
}
var Zn = function(e) {
  return e * 1e3;
};
var td = {linear: on$1, easeIn: Yo, easeInOut: Ko, easeOut: lu, circIn: ka, circInOut: uu, circOut: Yn, backIn: qo, backInOut: pu, backOut: cu, anticipate: fu, bounceIn: mu, bounceInOut: du, bounceOut: Kn}, wu = function(e) {
  if (Array.isArray(e)) {
    ye(e.length === 4, "Cubic bezier arrays must contain four numerical values.");
    var t = re(e, 4), r = t[0], n = t[1], o = t[2], i = t[3];
    return Pu(r, n, o, i);
  } else if (typeof e == "string")
    return ye(td[e] !== void 0, "Invalid easing type '" + e + "'"), td[e];
  return e;
}, rd = function(e) {
  return Array.isArray(e) && typeof e[0] != "number";
};
var Ru = function(e, t) {
  return e === "zIndex" ? false : !!(typeof t == "number" || Array.isArray(t) || typeof t == "string" && Ye.test(t) && !t.startsWith("url("));
};
var sn = function() {
  return {type: "spring", stiffness: 500, damping: 25, restDelta: 0.5, restSpeed: 10};
}, za = function(e) {
  return {type: "spring", stiffness: 550, damping: e === 0 ? 2 * Math.sqrt(550) : 30, restDelta: 0.01, restSpeed: 10};
}, Eu = function() {
  return {type: "keyframes", ease: "linear", duration: 0.3};
}, wC = function(e) {
  return {type: "keyframes", duration: 0.8, values: e};
}, nd = {x: sn, y: sn, z: sn, rotate: sn, rotateX: sn, rotateY: sn, rotateZ: sn, scaleX: za, scaleY: za, scale: za, opacity: Eu, backgroundColor: Eu, color: Eu, default: za}, od = function(e, t) {
  var r;
  return dr(t) ? r = wC : r = nd[e] || nd.default, T({to: t}, r(t));
};
var RC = T(T({}, xa), {color: Ne, backgroundColor: Ne, outlineColor: Ne, fill: Ne, stroke: Ne, borderColor: Ne, borderTopColor: Ne, borderRightColor: Ne, borderBottomColor: Ne, borderLeftColor: Ne, filter: Bn, WebkitFilter: Bn}), ln = function(e) {
  return RC[e];
};
function ni(e, t) {
  var r, n = ln(e);
  return n !== Bn && (n = Ye), (r = n.getAnimatableNone) === null || r === void 0 ? void 0 : r.call(n, t);
}
function EC(e) {
  e.when, e.delay, e.delayChildren, e.staggerChildren, e.staggerDirection, e.repeat, e.repeatType, e.repeatDelay, e.from;
  var t = de(e, ["when", "delay", "delayChildren", "staggerChildren", "staggerDirection", "repeat", "repeatType", "repeatDelay", "from"]);
  return !!Object.keys(t).length;
}
var id = false;
function FC(e) {
  var t = e.ease, r = e.times, n = e.yoyo, o = e.flip, i = e.loop, a = de(e, ["ease", "times", "yoyo", "flip", "loop"]), s = T({}, a);
  return r && (s.offset = r), a.duration && (s.duration = Zn(a.duration)), a.repeatDelay && (s.repeatDelay = Zn(a.repeatDelay)), t && (s.ease = rd(t) ? t.map(wu) : wu(t)), a.type === "tween" && (s.type = "keyframes"), (n || i || o) && (Ir(!id, "yoyo, loop and flip have been removed from the API. Replace with repeat and repeatType options."), id = true, n ? s.repeatType = "reverse" : i ? s.repeatType = "loop" : o && (s.repeatType = "mirror"), s.repeat = i || n || o || a.repeat), a.type !== "spring" && (s.type = "keyframes"), s;
}
function MC(e, t) {
  var r, n = Jn(e, t) || {};
  return (r = n.delay) !== null && r !== void 0 ? r : 0;
}
function IC(e) {
  return Array.isArray(e.to) && e.to[0] === null && (e.to = je([], re(e.to)), e.to[0] = e.from), e;
}
function AC(e, t, r) {
  var n;
  return Array.isArray(t.to) && ((n = e.duration) !== null && n !== void 0 || (e.duration = 0.8)), IC(t), EC(e) || (e = T(T({}, e), od(r, t.to))), T(T({}, t), FC(e));
}
function DC(e, t, r, n, o) {
  var i, a = Jn(n, e), s = (i = a.from) !== null && i !== void 0 ? i : t.get(), l = Ru(e, r);
  s === "none" && l && typeof r == "string" ? s = ni(e, r) : ad(s) && typeof r == "string" ? s = sd(r) : !Array.isArray(r) && ad(r) && typeof s == "string" && (r = sd(s));
  var u = Ru(e, s);
  Ir(u === l, "You are trying to animate " + e + ' from "' + s + '" to "' + r + '". ' + s + " is not an animatable value - to enable this animation set " + s + " to a value animatable to " + r + " via the `style` property.");
  function c() {
    var p = {from: s, to: r, velocity: t.getVelocity(), onComplete: o, onUpdate: function(d) {
      return t.set(d);
    }};
    return a.type === "inertia" || a.type === "decay" ? Nr(T(T({}, p), a)) : an(T(T({}, AC(a, p, e)), {onUpdate: function(d) {
      var m;
      p.onUpdate(d), (m = a.onUpdate) === null || m === void 0 || m.call(a, d);
    }, onComplete: function() {
      var d;
      p.onComplete(), (d = a.onComplete) === null || d === void 0 || d.call(a);
    }}));
  }
  function f() {
    var p;
    return t.set(r), o(), (p = a == null ? void 0 : a.onComplete) === null || p === void 0 || p.call(a), {stop: function() {
    }};
  }
  return !u || !l || a.type === false ? f : c;
}
function ad(e) {
  return e === 0 || typeof e == "string" && parseFloat(e) === 0 && e.indexOf(" ") === -1;
}
function sd(e) {
  return typeof e == "number" ? 0 : ni("", e);
}
function Jn(e, t) {
  return e[t] || e.default || e;
}
function gr(e, t, r, n) {
  return n === void 0 && (n = {}), t.start(function(o) {
    var i, a, s = DC(e, t, r, n, o), l = MC(n, e), u = function() {
      return a = s();
    };
    return l ? i = setTimeout(u, Zn(l)) : u(), function() {
      clearTimeout(i), a == null || a.stop();
    };
  });
}
var ld = function(e) {
  return /^\-?\d*\.?\d+$/.test(e);
};
function Wa(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function Ua(e, t) {
  var r = e.indexOf(t);
  r > -1 && e.splice(r, 1);
}
var Qn = function() {
  function e() {
    this.subscriptions = [];
  }
  return e.prototype.add = function(t) {
    var r = this;
    return Wa(this.subscriptions, t), function() {
      return Ua(r.subscriptions, t);
    };
  }, e.prototype.notify = function(t, r, n) {
    var o = this.subscriptions.length;
    if (!!o)
      if (o === 1)
        this.subscriptions[0](t, r, n);
      else
        for (var i = 0; i < o; i++) {
          var a = this.subscriptions[i];
          a && a(t, r, n);
        }
  }, e.prototype.getSize = function() {
    return this.subscriptions.length;
  }, e.prototype.clear = function() {
    this.subscriptions.length = 0;
  }, e;
}();
var LC = function(e) {
  return !isNaN(parseFloat(e));
}, un = function() {
  function e(t) {
    var r = this;
    this.timeDelta = 0, this.lastUpdated = 0, this.updateSubscribers = new Qn(), this.velocityUpdateSubscribers = new Qn(), this.renderSubscribers = new Qn(), this.canTrackVelocity = false, this.updateAndNotify = function(n, o) {
      o === void 0 && (o = true), r.prev = r.current, r.current = n;
      var i = zt(), a = i.delta, s = i.timestamp;
      r.lastUpdated !== s && (r.timeDelta = a, r.lastUpdated = s, Me.postRender(r.scheduleVelocityCheck)), r.prev !== r.current && r.updateSubscribers.notify(r.current), r.velocityUpdateSubscribers.getSize() && r.velocityUpdateSubscribers.notify(r.getVelocity()), o && r.renderSubscribers.notify(r.current);
    }, this.scheduleVelocityCheck = function() {
      return Me.postRender(r.velocityCheck);
    }, this.velocityCheck = function(n) {
      var o = n.timestamp;
      o !== r.lastUpdated && (r.prev = r.current, r.velocityUpdateSubscribers.notify(r.getVelocity()));
    }, this.hasAnimated = false, this.prev = this.current = t, this.canTrackVelocity = LC(this.current);
  }
  return e.prototype.onChange = function(t) {
    return this.updateSubscribers.add(t);
  }, e.prototype.clearListeners = function() {
    this.updateSubscribers.clear();
  }, e.prototype.onRenderRequest = function(t) {
    return t(this.get()), this.renderSubscribers.add(t);
  }, e.prototype.attach = function(t) {
    this.passiveEffect = t;
  }, e.prototype.set = function(t, r) {
    r === void 0 && (r = true), !r || !this.passiveEffect ? this.updateAndNotify(t, r) : this.passiveEffect(t, this.updateAndNotify);
  }, e.prototype.get = function() {
    return this.current;
  }, e.prototype.getPrevious = function() {
    return this.prev;
  }, e.prototype.getVelocity = function() {
    return this.canTrackVelocity ? ei(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta) : 0;
  }, e.prototype.start = function(t) {
    var r = this;
    return this.stop(), new Promise(function(n) {
      r.hasAnimated = true, r.stopAnimation = t(n);
    }).then(function() {
      return r.clearAnimation();
    });
  }, e.prototype.stop = function() {
    this.stopAnimation && this.stopAnimation(), this.clearAnimation();
  }, e.prototype.isAnimating = function() {
    return !!this.stopAnimation;
  }, e.prototype.clearAnimation = function() {
    this.stopAnimation = null;
  }, e.prototype.destroy = function() {
    this.updateSubscribers.clear(), this.renderSubscribers.clear(), this.stop();
  }, e;
}();
function Ie(e) {
  return new un(e);
}
var Ga = function(e) {
  return function(t) {
    return t.test(e);
  };
};
var ud = {test: function(e) {
  return e === "auto";
}, parse: function(e) {
  return e;
}};
var Fu = [Ct, J, fr, jt, Yl, Xl, ud], oi = function(e) {
  return Fu.find(Ga(e));
};
var OC = je(je([], re(Fu)), [Ne, Ye]), cd = function(e) {
  return OC.find(Ga(e));
};
function kC(e, t, r) {
  e.hasValue(t) ? e.getValue(t).set(r) : e.addValue(t, Ie(r));
}
function $a(e, t) {
  var r = Jr(e, t), n = r ? e.makeTargetAnimatable(r, false) : {}, o = n.transitionEnd, i = o === void 0 ? {} : o;
  n.transition;
  var a = de(n, ["transitionEnd", "transition"]);
  a = T(T({}, a), i);
  for (var s in a) {
    var l = hm(a[s]);
    kC(e, s, l);
  }
}
function Mu(e, t) {
  var r = je([], re(t)).reverse();
  r.forEach(function(n) {
    var o, i = e.getVariant(n);
    i && $a(e, i), (o = e.variantChildren) === null || o === void 0 || o.forEach(function(a) {
      Mu(a, t);
    });
  });
}
function pd(e, t) {
  if (Array.isArray(t))
    return Mu(e, t);
  if (typeof t == "string")
    return Mu(e, [t]);
  $a(e, t);
}
function Xa(e, t, r) {
  var n, o, i, a, s = Object.keys(t).filter(function(d) {
    return !e.hasValue(d);
  }), l = s.length;
  if (!!l)
    for (var u = 0; u < l; u++) {
      var c = s[u], f = t[c], p = null;
      Array.isArray(f) && (p = f[0]), p === null && (p = (o = (n = r[c]) !== null && n !== void 0 ? n : e.readValue(c)) !== null && o !== void 0 ? o : t[c]), p != null && (typeof p == "string" && (ld(p) || p.startsWith("0")) ? p = parseFloat(p) : !cd(p) && Ye.test(f) && (p = ni(c, f)), e.addValue(c, Ie(p)), (i = (a = r)[c]) !== null && i !== void 0 || (a[c] = p), e.setBaseTarget(c, p));
    }
}
function VC(e, t) {
  if (!!t) {
    var r = t[e] || t.default || t;
    return r.from;
  }
}
function Ya(e, t, r) {
  var n, o, i = {};
  for (var a in e)
    i[a] = (n = VC(a, t)) !== null && n !== void 0 ? n : (o = r.getValue(a)) === null || o === void 0 ? void 0 : o.get();
  return i;
}
function cn(e, t, r) {
  r === void 0 && (r = {}), e.notifyAnimationStart();
  var n;
  if (Array.isArray(t)) {
    var o = t.map(function(a) {
      return Iu(e, a, r);
    });
    n = Promise.all(o);
  } else if (typeof t == "string")
    n = Iu(e, t, r);
  else {
    var i = typeof t == "function" ? Jr(e, t, r.custom) : t;
    n = fd(e, i, r);
  }
  return n.then(function() {
    return e.notifyAnimationComplete(t);
  });
}
function Iu(e, t, r) {
  var n;
  r === void 0 && (r = {});
  var o = Jr(e, t, r.custom), i = (o || {}).transition, a = i === void 0 ? e.getDefaultTransition() || {} : i;
  r.transitionOverride && (a = r.transitionOverride);
  var s = o ? function() {
    return fd(e, o, r);
  } : function() {
    return Promise.resolve();
  }, l = ((n = e.variantChildren) === null || n === void 0 ? void 0 : n.size) ? function(d) {
    d === void 0 && (d = 0);
    var m = a.delayChildren, h = m === void 0 ? 0 : m, v = a.staggerChildren, y = a.staggerDirection;
    return _C(e, t, h + d, v, y, r);
  } : function() {
    return Promise.resolve();
  }, u = a.when;
  if (u) {
    var c = re(u === "beforeChildren" ? [s, l] : [l, s], 2), f = c[0], p = c[1];
    return f().then(p);
  } else
    return Promise.all([s(), l(r.delay)]);
}
function fd(e, t, r) {
  var n, o = r === void 0 ? {} : r, i = o.delay, a = i === void 0 ? 0 : i, s = o.transitionOverride, l = o.type, u = e.makeTargetAnimatable(t), c = u.transition, f = c === void 0 ? e.getDefaultTransition() : c, p = u.transitionEnd, d = de(u, ["transition", "transitionEnd"]);
  s && (f = s);
  var m = [], h = l && ((n = e.animationState) === null || n === void 0 ? void 0 : n.getState()[l]);
  for (var v in d) {
    var y = e.getValue(v), C = d[v];
    if (!(!y || C === void 0 || h && NC(h, v))) {
      var P = gr(v, y, C, T({delay: a}, f));
      m.push(P);
    }
  }
  return Promise.all(m).then(function() {
    p && $a(e, p);
  });
}
function _C(e, t, r, n, o, i) {
  r === void 0 && (r = 0), n === void 0 && (n = 0), o === void 0 && (o = 1);
  var a = [], s = (e.variantChildren.size - 1) * n, l = o === 1 ? function(u) {
    return u === void 0 && (u = 0), u * n;
  } : function(u) {
    return u === void 0 && (u = 0), s - u * n;
  };
  return Array.from(e.variantChildren).sort(jC).forEach(function(u, c) {
    a.push(Iu(u, t, T(T({}, i), {delay: r + l(c)})).then(function() {
      return u.notifyAnimationComplete(t);
    }));
  }), Promise.all(a);
}
function md(e) {
  e.forEachValue(function(t) {
    return t.stop();
  });
}
function jC(e, t) {
  return e.sortNodePosition(t);
}
function NC(e, t) {
  var r = e.protectedKeys, n = e.needsAnimating, o = r.hasOwnProperty(t) && n[t] !== true;
  return n[t] = false, o;
}
var Ka = [Te.Animate, Te.Hover, Te.Tap, Te.Drag, Te.Focus, Te.Exit], BC = je([], re(Ka)).reverse(), HC = Ka.length;
function zC(e) {
  return function(t) {
    return Promise.all(t.map(function(r) {
      var n = r.animation, o = r.options;
      return cn(e, n, o);
    }));
  };
}
function dd(e) {
  var t = zC(e), r = UC(), n = {}, o = true, i = function(c, f) {
    var p = Jr(e, f);
    if (p) {
      p.transition;
      var d = p.transitionEnd, m = de(p, ["transition", "transitionEnd"]);
      c = T(T(T({}, c), m), d);
    }
    return c;
  };
  function a(c) {
    return n[c] !== void 0;
  }
  function s(c) {
    t = c(e);
  }
  function l(c, f) {
    for (var p, d = e.getProps(), m = e.getVariantContext(true) || {}, h = [], v = new Set(), y = {}, C = Infinity, P = function(I) {
      var M = BC[I], A = r[M], L = (p = d[M]) !== null && p !== void 0 ? p : m[M], U = yt(L), $ = M === f ? A.isActive : null;
      $ === false && (C = I);
      var G = L === m[M] && L !== d[M] && U;
      if (G && o && e.manuallyAnimateOnMount && (G = false), A.protectedKeys = T({}, y), !A.isActive && $ === null || !L && !A.prevProp || Gn(L) || typeof L == "boolean")
        return "continue";
      var W = WC(A.prevProp, L) || M === f && A.isActive && !G && U || I > C && U, te = Array.isArray(L) ? L : [L], Z = te.reduce(i, {});
      $ === false && (Z = {});
      var B = A.prevResolvedValues, K = B === void 0 ? {} : B, V = T(T({}, K), Z), S = function(j) {
        W = true, v.delete(j), A.needsAnimating[j] = true;
      };
      for (var x in V) {
        var g = Z[x], w = K[x];
        y.hasOwnProperty(x) || (g !== w ? dr(g) && dr(w) ? Tu(g, w) ? A.protectedKeys[x] = true : S(x) : g !== void 0 ? S(x) : v.add(x) : g !== void 0 && v.has(x) ? S(x) : A.protectedKeys[x] = true);
      }
      A.prevProp = L, A.prevResolvedValues = Z, A.isActive && (y = T(T({}, y), Z)), o && e.blockInitialAnimation && (W = false), W && !G && h.push.apply(h, je([], re(te.map(function(j) {
        return {animation: j, options: T({type: M}, c)};
      }))));
    }, b = 0; b < HC; b++)
      P(b);
    if (n = T({}, y), v.size) {
      var R = {};
      v.forEach(function(I) {
        var M = e.getBaseTarget(I);
        M !== void 0 && (R[I] = M);
      }), h.push({animation: R});
    }
    var E = Boolean(h.length);
    return o && d.initial === false && !e.manuallyAnimateOnMount && (E = false), o = false, E ? t(h) : Promise.resolve();
  }
  function u(c, f, p) {
    var d;
    return r[c].isActive === f ? Promise.resolve() : ((d = e.variantChildren) === null || d === void 0 || d.forEach(function(m) {
      var h;
      return (h = m.animationState) === null || h === void 0 ? void 0 : h.setActive(c, f);
    }), r[c].isActive = f, l(p, c));
  }
  return {isAnimated: a, animateChanges: l, setActive: u, setAnimateFunction: s, getState: function() {
    return r;
  }};
}
function WC(e, t) {
  return typeof t == "string" ? t !== e : Gl(t) ? !Tu(t, e) : false;
}
function eo(e) {
  return e === void 0 && (e = false), {isActive: e, protectedKeys: {}, needsAnimating: {}, prevResolvedValues: {}};
}
function UC() {
  var e;
  return e = {}, e[Te.Animate] = eo(true), e[Te.Hover] = eo(), e[Te.Tap] = eo(), e[Te.Drag] = eo(), e[Te.Focus] = eo(), e[Te.Exit] = eo(), e;
}
var qa = {animation: qt(function(e) {
  var t = e.visualElement, r = e.animate;
  t.animationState || (t.animationState = dd(t)), Gn(r) && useEffect(function() {
    return r.subscribe(t);
  }, [r]);
}), exit: qt(function(e) {
  var t = e.custom, r = e.visualElement, n = re(Bo(), 2), o = n[0], i = n[1], a = useContext(vt);
  useEffect(function() {
    var s, l, u = (s = r.animationState) === null || s === void 0 ? void 0 : s.setActive(Te.Exit, !o, {custom: (l = a == null ? void 0 : a.custom) !== null && l !== void 0 ? l : t});
    !o && (u == null || u.then(i));
  }, [o]);
})};
var Za = function() {
  function e(t, r, n) {
    var o = this, i = n === void 0 ? {} : n, a = i.transformPagePoint;
    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.updatePoint = function() {
      if (!!(o.lastMoveEvent && o.lastMoveEventInfo)) {
        var p = Du(o.lastMoveEventInfo, o.history), d = o.startEvent !== null, m = ri(p.offset, {x: 0, y: 0}) >= 3;
        if (!(!d && !m)) {
          var h = p.point, v = zt().timestamp;
          o.history.push(T(T({}, h), {timestamp: v}));
          var y = o.handlers, C = y.onStart, P = y.onMove;
          d || (C && C(o.lastMoveEvent, p), o.startEvent = o.lastMoveEvent), P && P(o.lastMoveEvent, p);
        }
      }
    }, this.handlePointerMove = function(p, d) {
      if (o.lastMoveEvent = p, o.lastMoveEventInfo = Au(d, o.transformPagePoint), Ea(p) && p.buttons === 0) {
        o.handlePointerUp(p, d);
        return;
      }
      Me.update(o.updatePoint, true);
    }, this.handlePointerUp = function(p, d) {
      o.end();
      var m = o.handlers.onEnd;
      if (!(!m || !o.startEvent)) {
        var h = Du(Au(d, o.transformPagePoint), o.history);
        m && m(p, h);
      }
    }, !(Fa(t) && t.touches.length > 1)) {
      this.handlers = r, this.transformPagePoint = a;
      var s = Ma(t), l = Au(s, this.transformPagePoint), u = l.point, c = zt().timestamp;
      this.history = [T(T({}, u), {timestamp: c})];
      var f = r.onSessionStart;
      f && f(t, Du(l, this.history)), this.removeListeners = Ht(hr(window, "pointermove", this.handlePointerMove), hr(window, "pointerup", this.handlePointerUp), hr(window, "pointercancel", this.handlePointerUp));
    }
  }
  return e.prototype.updateHandlers = function(t) {
    this.handlers = t;
  }, e.prototype.end = function() {
    this.removeListeners && this.removeListeners(), jr.update(this.updatePoint);
  }, e;
}();
function Au(e, t) {
  return t ? {point: t(e.point)} : e;
}
function gd(e, t) {
  return {x: e.x - t.x, y: e.y - t.y};
}
function Du(e, t) {
  var r = e.point;
  return {point: r, delta: gd(r, vd(t)), offset: gd(r, $C(t)), velocity: XC(t, 0.1)};
}
function $C(e) {
  return e[0];
}
function vd(e) {
  return e[e.length - 1];
}
function XC(e, t) {
  if (e.length < 2)
    return {x: 0, y: 0};
  for (var r = e.length - 1, n = null, o = vd(e); r >= 0 && (n = e[r], !(o.timestamp - n.timestamp > Zn(t))); )
    r--;
  if (!n)
    return {x: 0, y: 0};
  var i = (o.timestamp - n.timestamp) / 1e3;
  if (i === 0)
    return {x: 0, y: 0};
  var a = {x: (o.x - n.x) / i, y: (o.y - n.y) / i};
  return a.x === Infinity && (a.x = 0), a.y === Infinity && (a.y = 0), a;
}
function yd(e) {
  return e;
}
function Ja(e) {
  var t = e.top, r = e.left, n = e.right, o = e.bottom;
  return {x: {min: r, max: n}, y: {min: t, max: o}};
}
function bd(e) {
  var t = e.x, r = e.y;
  return {top: r.min, bottom: r.max, left: t.min, right: t.max};
}
function xd(e, t) {
  var r = e.top, n = e.left, o = e.bottom, i = e.right;
  t === void 0 && (t = yd);
  var a = t({x: n, y: r}), s = t({x: i, y: o});
  return {top: a.y, left: a.x, bottom: s.y, right: s.x};
}
function bt() {
  return {x: {min: 0, max: 1}, y: {min: 0, max: 1}};
}
function Sd(e) {
  return {x: T({}, e.x), y: T({}, e.y)};
}
var Cd = {translate: 0, scale: 1, origin: 0, originPoint: 0};
function Lu() {
  return {x: T({}, Cd), y: T({}, Cd)};
}
function Ke(e) {
  return [e("x"), e("y")];
}
function Ou(e, t, r) {
  var n = t.min, o = t.max;
  return n !== void 0 && e < n ? e = r ? Se(n, e, r.min) : Math.max(e, n) : o !== void 0 && e > o && (e = r ? Se(o, e, r.max) : Math.min(e, o)), e;
}
function Pd(e, t, r, n, o) {
  var i = e - t * r;
  return n ? Ou(i, n, o) : i;
}
function Td(e, t, r) {
  return {min: t !== void 0 ? e.min + t : void 0, max: r !== void 0 ? e.max + r - (e.max - e.min) : void 0};
}
function wd(e, t) {
  var r = t.top, n = t.left, o = t.bottom, i = t.right;
  return {x: Td(e.x, n, i), y: Td(e.y, r, o)};
}
function Rd(e, t) {
  var r, n = t.min - e.min, o = t.max - e.max;
  return t.max - t.min < e.max - e.min && (r = re([o, n], 2), n = r[0], o = r[1]), {min: e.min + n, max: e.min + o};
}
function Ed(e, t) {
  return {x: Rd(e.x, t.x), y: Rd(e.y, t.y)};
}
function Fd(e, t, r) {
  var n = e.max - e.min, o = Se(t.min, t.max - n, r);
  return {min: o, max: o + n};
}
function Md(e, t) {
  var r = {};
  return t.min !== void 0 && (r.min = t.min - e.min), t.max !== void 0 && (r.max = t.max - e.min), r;
}
var ku = 0.35;
function Id(e) {
  return e === false ? e = 0 : e === true && (e = ku), {x: Ad(e, "left", "right"), y: Ad(e, "top", "bottom")};
}
function Ad(e, t, r) {
  return {min: Dd(e, t), max: Dd(e, r)};
}
function Dd(e, t) {
  var r;
  return typeof e == "number" ? e : (r = e[t]) !== null && r !== void 0 ? r : 0;
}
function Qa(e, t) {
  var r = e.getBoundingClientRect();
  return Ja(xd(r, t));
}
var YC = function(e) {
  return _r(0, 1, e);
};
function Ld(e, t, r) {
  return t === void 0 && (t = 0), r === void 0 && (r = 0.01), ri(e, t) < r;
}
function ii(e) {
  return e.max - e.min;
}
function Od(e, t) {
  var r = 0.5, n = ii(e), o = ii(t);
  return o > n ? r = Bt(t.min, t.max - n, e.min) : n > o && (r = Bt(e.min, e.max - o, t.min)), YC(r);
}
function kd(e, t, r, n) {
  n === void 0 && (n = 0.5), e.origin = n, e.originPoint = Se(t.min, t.max, e.origin), e.scale = ii(r) / ii(t), Ld(e.scale, 1, 1e-4) && (e.scale = 1), e.translate = Se(r.min, r.max, e.origin) - e.originPoint, Ld(e.translate) && (e.translate = 0);
}
function es(e, t, r, n) {
  kd(e.x, t.x, r.x, Vd(n.originX)), kd(e.y, t.y, r.y, Vd(n.originY));
}
function Vd(e) {
  return typeof e == "number" ? e : 0.5;
}
function _d(e, t, r) {
  e.min = r.min + t.min, e.max = e.min + ii(t);
}
function jd(e, t) {
  _d(e.target.x, e.relativeTarget.x, t.target.x), _d(e.target.y, e.relativeTarget.y, t.target.y);
}
var to = function(e, t) {
  return e.depth - t.depth;
};
function Nd(e, t) {
  ts(e, function() {
    var r = KC(e);
    rs(r), Bd(e);
  }), !t && e.rebaseProjectionTarget(true, e.measureViewportBox(false));
}
function KC(e) {
  var t = [], r = function(n) {
    (n.projection.isEnabled || n.shouldResetTransform()) && t.push(n), n.children.forEach(r);
  };
  return e.children.forEach(r), t.sort(to);
}
function ts(e, t) {
  var r = e.parent, n = e.projection.isEnabled, o = n || e.shouldResetTransform();
  o && e.resetTransform(), r ? ts(r, t) : t(), o && e.restoreTransform();
}
function Bd(e) {
  if (!e.shouldResetTransform()) {
    var t = e.getLayoutState();
    e.notifyBeforeLayoutMeasure(t.layout), t.isHydrated = true, t.layout = e.measureViewportBox(), t.layoutCorrected = Sd(t.layout), e.notifyLayoutMeasure(t.layout, e.prevViewportBox || t.layout), Me.update(function() {
      return e.rebaseProjectionTarget();
    });
  }
}
function Br(e) {
  e.shouldResetTransform() || (e.prevViewportBox = e.measureViewportBox(false), e.rebaseProjectionTarget(false, e.prevViewportBox));
}
function rs(e) {
  e.forEach(function(t) {
    return t.resetTransform();
  }), e.forEach(Bd);
}
function Hd(e, t, r, n) {
  e.min = Se(t.min, r.min, n), e.max = Se(t.max, r.max, n);
}
function zd(e, t) {
  return {min: t.min - e.min, max: t.max - e.min};
}
function Zt(e, t) {
  return {x: zd(e.x, t.x), y: zd(e.y, t.y)};
}
function Wd(e, t) {
  var r = e.getLayoutId(), n = t.getLayoutId();
  return r !== n || n === void 0 && e !== t;
}
function ns(e) {
  var t = e.getProps(), r = t.drag, n = t._dragX;
  return r && !n;
}
function Ud(e, t) {
  e.min = t.min, e.max = t.max;
}
function Gd(e, t) {
  Ud(e.x, t.x), Ud(e.y, t.y);
}
function os(e, t, r) {
  var n = e - r, o = t * n;
  return r + o;
}
function $d(e, t, r, n, o) {
  return o !== void 0 && (e = os(e, o, n)), os(e, r, n) + t;
}
function Vu(e, t, r, n, o) {
  t === void 0 && (t = 0), r === void 0 && (r = 1), e.min = $d(e.min, t, r, n, o), e.max = $d(e.max, t, r, n, o);
}
function qC(e, t) {
  var r = t.x, n = t.y;
  Vu(e.x, r.translate, r.scale, r.originPoint), Vu(e.y, n.translate, n.scale, n.originPoint);
}
function Xd(e, t, r, n) {
  var o = re(n, 3), i = o[0], a = o[1], s = o[2];
  e.min = t.min, e.max = t.max;
  var l = r[s] !== void 0 ? r[s] : 0.5, u = Se(t.min, t.max, l);
  Vu(e, r[i], r[a], u, r.scale);
}
var Yd = ["x", "scaleX", "originX"], Kd = ["y", "scaleY", "originY"];
function is(e, t, r) {
  Xd(e.x, t.x, r, Yd), Xd(e.y, t.y, r, Kd);
}
function qd(e, t, r, n, o) {
  return e -= t, e = os(e, 1 / r, n), o !== void 0 && (e = os(e, 1 / o, n)), e;
}
function ZC(e, t, r, n, o) {
  t === void 0 && (t = 0), r === void 0 && (r = 1), n === void 0 && (n = 0.5);
  var i = Se(e.min, e.max, n) - t;
  e.min = qd(e.min, t, r, i, o), e.max = qd(e.max, t, r, i, o);
}
function Zd(e, t, r) {
  var n = re(r, 3), o = n[0], i = n[1], a = n[2];
  ZC(e, t[o], t[i], t[a], t.scale);
}
function as(e, t) {
  Zd(e.x, t, Yd), Zd(e.y, t, Kd);
}
function Jd(e, t, r) {
  var n = r.length;
  if (!!n) {
    t.x = t.y = 1;
    for (var o, i, a = 0; a < n; a++)
      o = r[a], i = o.getLayoutState().delta, t.x *= i.x.scale, t.y *= i.y.scale, qC(e, i), ns(o) && is(e, e, o.getLatestValues());
  }
}
function Qd(e, t) {
  t === void 0 && (t = true);
  var r = e.getProjectionParent();
  if (!r)
    return false;
  var n;
  return t ? (n = Zt(r.projection.target, e.projection.target), as(n, r.getLatestValues())) : n = Zt(r.getLayoutState().layout, e.getLayoutState().layout), Ke(function(o) {
    return e.setProjectionTargetAxis(o, n[o].min, n[o].max, true);
  }), true;
}
var _u = new WeakMap(), eh, th = function() {
  function e(t) {
    var r = t.visualElement;
    this.isDragging = false, this.currentDirection = null, this.constraints = false, this.elastic = bt(), this.props = {}, this.hasMutatedConstraints = false, this.cursorProgress = {x: 0.5, y: 0.5}, this.originPoint = {}, this.openGlobalLock = null, this.panSession = null, this.visualElement = r, this.visualElement.enableLayoutProjection(), _u.set(r, this);
  }
  return e.prototype.start = function(t, r) {
    var n = this, o = r === void 0 ? {} : r, i = o.snapToCursor, a = i === void 0 ? false : i, s = o.cursorProgress, l = function(d) {
      n.stopMotion(), n.updateLayoutMeasurements(), a && n.snapToCursor(t), n.isLayoutDrag() && n.visualElement.lockProjectionTarget();
      var m = Ia(d).point;
      Ke(function(h) {
        var v = n.visualElement.projection.target[h], y = v.min, C = v.max;
        n.cursorProgress[h] = s ? s[h] : Bt(y, C, m[h]);
        var P = n.getAxisMotionValue(h);
        P && (n.originPoint[h] = P.get());
      });
    }, u = function(d, m) {
      var h, v, y, C = n.props, P = C.drag, b = C.dragPropagation;
      P && !b && (n.openGlobalLock && n.openGlobalLock(), n.openGlobalLock = ru(P), !n.openGlobalLock) || (n.resolveDragConstraints(), n.isDragging = true, n.currentDirection = null, (v = (h = n.props).onDragStart) === null || v === void 0 || v.call(h, d, m), (y = n.visualElement.animationState) === null || y === void 0 || y.setActive(Te.Drag, true));
    }, c = function(d, m) {
      var h, v, y, C, P = n.props, b = P.dragPropagation, R = P.dragDirectionLock;
      if (!(!b && !n.openGlobalLock)) {
        var E = m.offset;
        if (R && n.currentDirection === null) {
          n.currentDirection = JC(E), n.currentDirection !== null && ((v = (h = n.props).onDirectionLock) === null || v === void 0 || v.call(h, n.currentDirection));
          return;
        }
        n.updateAxis("x", d, E), n.updateAxis("y", d, E), (C = (y = n.props).onDrag) === null || C === void 0 || C.call(y, d, m), eh = d;
      }
    }, f = function(d, m) {
      return n.stop(d, m);
    }, p = this.props.transformPagePoint;
    this.panSession = new Za(t, {onSessionStart: l, onStart: u, onMove: c, onEnd: f}, {transformPagePoint: p});
  }, e.prototype.updateLayoutMeasurements = function() {
    Nd(this.visualElement, Boolean(this.getAxisMotionValue("x") && !this.isExternalDrag()));
  }, e.prototype.resolveDragConstraints = function() {
    var t = this, r = this.props, n = r.dragConstraints, o = r.dragElastic;
    this.visualElement.updateLayoutProjection();
    var i = this.visualElement.getLayoutState().layoutCorrected;
    n ? this.constraints = Ho(n) ? this.resolveRefConstraints(i, n) : wd(i, n) : this.constraints = false, this.elastic = Id(o), this.constraints && !this.hasMutatedConstraints && Ke(function(a) {
      t.getAxisMotionValue(a) && (t.constraints[a] = Md(i[a], t.constraints[a]));
    });
  }, e.prototype.resolveRefConstraints = function(t, r) {
    var n = this.props, o = n.onMeasureDragConstraints, i = n.transformPagePoint, a = r.current;
    ye(a !== null, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop."), this.constraintsBox = Qa(a, i);
    var s = Ed(t, this.constraintsBox);
    if (o) {
      var l = o(bd(s));
      this.hasMutatedConstraints = !!l, l && (s = Ja(l));
    }
    return s;
  }, e.prototype.cancelDrag = function() {
    var t;
    this.isDragging = false, this.panSession && this.panSession.end(), this.panSession = null, !this.props.dragPropagation && this.openGlobalLock && (this.openGlobalLock(), this.openGlobalLock = null), (t = this.visualElement.animationState) === null || t === void 0 || t.setActive(Te.Drag, false);
  }, e.prototype.stop = function(t, r) {
    var n, o, i;
    this.visualElement.unlockProjectionTarget(), (n = this.panSession) === null || n === void 0 || n.end(), this.panSession = null;
    var a = this.isDragging;
    if (this.cancelDrag(), !!a) {
      var s = r.velocity;
      this.animateDragEnd(s), (i = (o = this.props).onDragEnd) === null || i === void 0 || i.call(o, t, r);
    }
  }, e.prototype.snapToCursor = function(t) {
    var r = this;
    Ke(function(n) {
      var o = r.props.drag;
      if (!!ss(n, o, r.currentDirection)) {
        var i = r.getAxisMotionValue(n);
        if (i) {
          var a = Ia(t).point, s = r.visualElement.getLayoutState().layout, l = s[n].max - s[n].min, u = s[n].min + l / 2, c = a[n] - u;
          r.originPoint[n] = a[n], i.set(c);
        } else
          r.cursorProgress[n] = 0.5, r.updateVisualElementAxis(n, t);
      }
    });
  }, e.prototype.updateAxis = function(t, r, n) {
    var o = this.props.drag;
    if (!!ss(t, o, this.currentDirection))
      return this.getAxisMotionValue(t) ? this.updateAxisMotionValue(t, n) : this.updateVisualElementAxis(t, r);
  }, e.prototype.updateAxisMotionValue = function(t, r) {
    var n = this.getAxisMotionValue(t);
    if (!(!r || !n)) {
      var o = this.originPoint[t] + r[t], i = this.constraints ? Ou(o, this.constraints[t], this.elastic[t]) : o;
      n.set(i);
    }
  }, e.prototype.updateVisualElementAxis = function(t, r) {
    var n, o = this.visualElement.getLayoutState().layout[t], i = o.max - o.min, a = this.cursorProgress[t], s = Ia(r).point, l = Pd(s[t], i, a, (n = this.constraints) === null || n === void 0 ? void 0 : n[t], this.elastic[t]);
    this.visualElement.setProjectionTargetAxis(t, l, l + i);
  }, e.prototype.setProps = function(t) {
    var r = t.drag, n = r === void 0 ? false : r, o = t.dragDirectionLock, i = o === void 0 ? false : o, a = t.dragPropagation, s = a === void 0 ? false : a, l = t.dragConstraints, u = l === void 0 ? false : l, c = t.dragElastic, f = c === void 0 ? ku : c, p = t.dragMomentum, d = p === void 0 ? true : p, m = de(t, ["drag", "dragDirectionLock", "dragPropagation", "dragConstraints", "dragElastic", "dragMomentum"]);
    this.props = T({drag: n, dragDirectionLock: i, dragPropagation: s, dragConstraints: u, dragElastic: f, dragMomentum: d}, m);
  }, e.prototype.getAxisMotionValue = function(t) {
    var r = this.props, n = r.layout, o = r.layoutId, i = "_drag" + t.toUpperCase();
    if (this.props[i])
      return this.props[i];
    if (!n && o === void 0)
      return this.visualElement.getValue(t, 0);
  }, e.prototype.isLayoutDrag = function() {
    return !this.getAxisMotionValue("x");
  }, e.prototype.isExternalDrag = function() {
    var t = this.props, r = t._dragX, n = t._dragY;
    return r || n;
  }, e.prototype.animateDragEnd = function(t) {
    var r = this, n = this.props, o = n.drag, i = n.dragMomentum, a = n.dragElastic, s = n.dragTransition, l = Qd(this.visualElement, this.isLayoutDrag() && !this.isExternalDrag()), u = this.constraints || {};
    if (l && Object.keys(u).length && this.isLayoutDrag()) {
      var c = this.visualElement.getProjectionParent();
      if (c) {
        var f = Zt(c.projection.targetFinal, u);
        Ke(function(d) {
          var m = f[d], h = m.min, v = m.max;
          u[d] = {min: isNaN(h) ? void 0 : h, max: isNaN(v) ? void 0 : v};
        });
      }
    }
    var p = Ke(function(d) {
      var m;
      if (!!ss(d, o, r.currentDirection)) {
        var h = (m = u == null ? void 0 : u[d]) !== null && m !== void 0 ? m : {}, v = a ? 200 : 1e6, y = a ? 40 : 1e7, C = T(T({type: "inertia", velocity: i ? t[d] : 0, bounceStiffness: v, bounceDamping: y, timeConstant: 750, restDelta: 1, restSpeed: 10}, s), h);
        return r.getAxisMotionValue(d) ? r.startAxisValueAnimation(d, C) : r.visualElement.startLayoutAnimation(d, C, l);
      }
    });
    return Promise.all(p).then(function() {
      var d, m;
      (m = (d = r.props).onDragTransitionEnd) === null || m === void 0 || m.call(d);
    });
  }, e.prototype.stopMotion = function() {
    var t = this;
    Ke(function(r) {
      var n = t.getAxisMotionValue(r);
      n ? n.stop() : t.visualElement.stopLayoutAnimation();
    });
  }, e.prototype.startAxisValueAnimation = function(t, r) {
    var n = this.getAxisMotionValue(t);
    if (!!n) {
      var o = n.get();
      return n.set(o), n.set(o), gr(t, n, 0, r);
    }
  }, e.prototype.scalePoint = function() {
    var t = this, r = this.props, n = r.drag, o = r.dragConstraints;
    if (!(!Ho(o) || !this.constraintsBox)) {
      this.stopMotion();
      var i = {x: 0, y: 0};
      Ke(function(a) {
        i[a] = Od(t.visualElement.projection.target[a], t.constraintsBox[a]);
      }), this.updateLayoutMeasurements(), this.resolveDragConstraints(), Ke(function(a) {
        if (!!ss(a, n, null)) {
          var s = Fd(t.visualElement.projection.target[a], t.constraintsBox[a], i[a]), l = s.min, u = s.max;
          t.visualElement.setProjectionTargetAxis(a, l, u);
        }
      });
    }
  }, e.prototype.mount = function(t) {
    var r = this, n = t.getInstance(), o = hr(n, "pointerdown", function(l) {
      var u = r.props, c = u.drag, f = u.dragListener, p = f === void 0 ? true : f;
      c && p && r.start(l);
    }), i = Nt(window, "resize", function() {
      r.scalePoint();
    }), a = t.onLayoutUpdate(function() {
      r.isDragging && r.resolveDragConstraints();
    }), s = t.prevDragCursor;
    return s && this.start(eh, {cursorProgress: s}), function() {
      o == null || o(), i == null || i(), a == null || a(), r.cancelDrag();
    };
  }, e;
}();
function ss(e, t, r) {
  return (t === true || t === e) && (r === null || r === e);
}
function JC(e, t) {
  t === void 0 && (t = 10);
  var r = null;
  return Math.abs(e.y) > t ? r = "y" : Math.abs(e.x) > t && (r = "x"), r;
}
function nh(e) {
  var t = e.dragControls, r = e.visualElement, n = useContext(it).transformPagePoint, o = Le(function() {
    return new th({visualElement: r});
  });
  o.setProps(T(T({}, e), {transformPagePoint: n})), useEffect(function() {
    return t && t.subscribe(o);
  }, [o]), useEffect(function() {
    return o.mount(r);
  }, []);
}
function oh(e) {
  var t = e.onPan, r = e.onPanStart, n = e.onPanEnd, o = e.onPanSessionStart, i = e.visualElement, a = t || r || n || o, s = useRef(null), l = useContext(it).transformPagePoint, u = {onSessionStart: o, onStart: r, onMove: t, onEnd: function(f, p) {
    s.current = null, n && n(f, p);
  }};
  useEffect(function() {
    s.current !== null && s.current.updateHandlers(u);
  });
  function c(f) {
    s.current = new Za(f, u, {transformPagePoint: l});
  }
  tn(i, "pointerdown", a && c), Xn(function() {
    return s.current && s.current.end();
  });
}
var ls = {pan: qt(oh), drag: qt(nh)};
var $e;
(function(e) {
  e[e.Entering = 0] = "Entering", e[e.Present = 1] = "Present", e[e.Exiting = 2] = "Exiting";
})($e || ($e = {}));
var ai;
(function(e) {
  e[e.Hide = 0] = "Hide", e[e.Show = 1] = "Show";
})(ai || (ai = {}));
function ju(e) {
  return typeof e == "string" && e.startsWith("var(--");
}
var Nu = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
function n0(e) {
  var t = Nu.exec(e);
  if (!t)
    return [,];
  var r = re(t, 3), n = r[1], o = r[2];
  return [n, o];
}
var o0 = 4;
function Bu(e, t, r) {
  r === void 0 && (r = 1), ye(r <= o0, 'Max CSS variable fallback depth detected in property "' + e + '". This may indicate a circular fallback dependency.');
  var n = re(n0(e), 2), o = n[0], i = n[1];
  if (!!o) {
    var a = window.getComputedStyle(t).getPropertyValue(o);
    return a ? a.trim() : ju(i) ? Bu(i, t, r + 1) : i;
  }
}
function ih(e, t, r) {
  var n, o = de(t, []), i = e.getInstance();
  if (!(i instanceof HTMLElement))
    return {target: o, transitionEnd: r};
  r && (r = T({}, r)), e.forEachValue(function(u) {
    var c = u.get();
    if (!!ju(c)) {
      var f = Bu(c, i);
      f && u.set(f);
    }
  });
  for (var a in o) {
    var s = o[a];
    if (!!ju(s)) {
      var l = Bu(s, i);
      !l || (o[a] = l, r && ((n = r[a]) !== null && n !== void 0 || (r[a] = s)));
    }
  }
  return {target: o, transitionEnd: r};
}
function ah(e, t) {
  return e / (t.max - t.min) * 100;
}
function i0(e, t, r) {
  var n = r.target;
  if (typeof e == "string")
    if (J.test(e))
      e = parseFloat(e);
    else
      return e;
  var o = ah(e, n.x), i = ah(e, n.y);
  return o + "% " + i + "%";
}
var sh = "_$css";
function a0(e, t) {
  var r = t.delta, n = t.treeScale, o = e, i = e.includes("var("), a = [];
  i && (e = e.replace(Nu, function(h) {
    return a.push(h), sh;
  }));
  var s = Ye.parse(e);
  if (s.length > 5)
    return o;
  var l = Ye.createTransformer(e), u = typeof s[0] != "number" ? 1 : 0, c = r.x.scale * n.x, f = r.y.scale * n.y;
  s[0 + u] /= c, s[1 + u] /= f;
  var p = Se(c, f, 0.5);
  typeof s[2 + u] == "number" && (s[2 + u] /= p), typeof s[3 + u] == "number" && (s[3 + u] /= p);
  var d = l(s);
  if (i) {
    var m = 0;
    d = d.replace(sh, function() {
      var h = a[m];
      return m++, h;
    });
  }
  return d;
}
var si = {process: i0}, lh = {borderRadius: T(T({}, si), {applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]}), borderTopLeftRadius: si, borderTopRightRadius: si, borderBottomLeftRadius: si, borderBottomRightRadius: si, boxShadow: {process: a0}};
var uh = 1e3, s0 = function(e) {
  Ln(t, e);
  function t() {
    var r = e !== null && e.apply(this, arguments) || this;
    return r.frameTarget = bt(), r.currentAnimationTarget = bt(), r.isAnimating = {x: false, y: false}, r.stopAxisAnimation = {x: void 0, y: void 0}, r.isAnimatingTree = false, r.animate = function(n, o, i) {
      i === void 0 && (i = {});
      var a = i.originBox, s = i.targetBox, l = i.visibilityAction, u = i.shouldStackAnimate, c = i.onComplete, f = i.prevParent, p = de(i, ["originBox", "targetBox", "visibilityAction", "shouldStackAnimate", "onComplete", "prevParent"]), d = r.props, m = d.visualElement, h = d.layout;
      if (u === false)
        return r.isAnimatingTree = false, r.safeToRemove();
      if (!(r.isAnimatingTree && u !== true)) {
        u && (r.isAnimatingTree = true), o = a || o, n = s || n;
        var v = false, y = m.getProjectionParent();
        if (y) {
          var C = y.prevViewportBox, P = y.getLayoutState().layout;
          f && (s && (P = f.getLayoutState().layout), a && !Wd(f, y) && f.prevViewportBox && (C = f.prevViewportBox)), C && c0(f, a, s) && (v = true, o = Zt(C, o), n = Zt(P, n));
        }
        var b = l0(o, n), R = Ke(function(E) {
          var I, M;
          if (h === "position") {
            var A = n[E].max - n[E].min;
            o[E].max = o[E].min + A;
          }
          if (!m.projection.isTargetLocked)
            if (l !== void 0)
              m.setVisibility(l === ai.Show);
            else
              return b ? r.animateAxis(E, n[E], o[E], T(T({}, p), {isRelative: v})) : ((M = (I = r.stopAxisAnimation)[E]) === null || M === void 0 || M.call(I), m.setProjectionTargetAxis(E, n[E].min, n[E].max, v));
        });
        return m.syncRender(), Promise.all(R).then(function() {
          r.isAnimatingTree = false, c && c(), m.notifyLayoutAnimationComplete();
        });
      }
    }, r;
  }
  return t.prototype.componentDidMount = function() {
    var r = this, n = this.props.visualElement;
    n.animateMotionValue = gr, n.enableLayoutProjection(), this.unsubLayoutReady = n.onLayoutUpdate(this.animate), n.layoutSafeToRemove = function() {
      return r.safeToRemove();
    }, Wo(lh);
  }, t.prototype.componentWillUnmount = function() {
    var r = this;
    this.unsubLayoutReady(), Ke(function(n) {
      var o, i;
      return (i = (o = r.stopAxisAnimation)[n]) === null || i === void 0 ? void 0 : i.call(o);
    });
  }, t.prototype.animateAxis = function(r, n, o, i) {
    var a = this, s, l, u = i === void 0 ? {} : i, c = u.transition, f = u.isRelative;
    if (!(this.isAnimating[r] && li(n, this.currentAnimationTarget[r]))) {
      (l = (s = this.stopAxisAnimation)[r]) === null || l === void 0 || l.call(s), this.isAnimating[r] = true;
      var p = this.props.visualElement, d = this.frameTarget[r], m = p.getProjectionAnimationProgress()[r];
      m.clearListeners(), m.set(0), m.set(0);
      var h = function() {
        var P = m.get() / uh;
        Hd(d, o, n, P), p.setProjectionTargetAxis(r, d.min, d.max, f);
      };
      h();
      var v = m.onChange(h);
      this.stopAxisAnimation[r] = function() {
        a.isAnimating[r] = false, m.stop(), v();
      }, this.currentAnimationTarget[r] = n;
      var y = c || p.getDefaultTransition() || u0, C = gr(r === "x" ? "layoutX" : "layoutY", m, uh, y && Jn(y, "layout")).then(this.stopAxisAnimation[r]);
      return C;
    }
  }, t.prototype.safeToRemove = function() {
    var r, n;
    (n = (r = this.props).safeToRemove) === null || n === void 0 || n.call(r);
  }, t.prototype.render = function() {
    return null;
  }, t;
}(Component);
function ch(e) {
  var t = re(Bo(), 2), r = t[1];
  return createElement(s0, T({}, e, {safeToRemove: r}));
}
function l0(e, t) {
  return !fh(e) && !fh(t) && (!li(e.x, t.x) || !li(e.y, t.y));
}
var ph = {min: 0, max: 0};
function fh(e) {
  return li(e.x, ph) && li(e.y, ph);
}
function li(e, t) {
  return e.min === t.min && e.max === t.max;
}
var u0 = {duration: 0.45, ease: [0.4, 0, 0.1, 1]};
function c0(e, t, r) {
  return e || !e && !(t || r);
}
var m0 = {layoutReady: function(e) {
  return e.notifyLayoutReady();
}};
function Jt() {
  var e = new Set();
  return {add: function(t) {
    return e.add(t);
  }, flush: function(t) {
    var r = t === void 0 ? m0 : t, n = r.layoutReady, o = r.parent, i = Array.from(e).sort(to);
    o ? ts(o, function() {
      rs(i);
    }) : rs(i), i.forEach(n), i.forEach(function(a) {
      a.isPresent && (a.presence = $e.Present);
    }), bu.preRender(), bu.render(), Me.postRender(function() {
      return i.forEach(d0);
    }), e.clear();
  }};
}
function d0(e) {
  e.prevViewportBox = e.projection.target;
}
var Wt = createContext(Jt()), ui = createContext(Jt());
function vr(e) {
  return !!e.forceUpdate;
}
var h0 = function(e) {
  Ln(t, e);
  function t() {
    return e !== null && e.apply(this, arguments) || this;
  }
  return t.prototype.componentDidMount = function() {
    var r = this.props, n = r.syncLayout, o = r.framerSyncLayout, i = r.visualElement;
    vr(n) && n.register(i), vr(o) && o.register(i), i.onUnmount(function() {
      vr(n) && n.remove(i), vr(o) && o.remove(i);
    });
  }, t.prototype.getSnapshotBeforeUpdate = function() {
    var r = this.props, n = r.syncLayout, o = r.visualElement;
    return vr(n) ? n.syncUpdate() : (Br(o), n.add(o)), null;
  }, t.prototype.componentDidUpdate = function() {
    var r = this.props.syncLayout;
    vr(r) || r.flush();
  }, t.prototype.render = function() {
    return null;
  }, t;
}(dh.Component);
function gh(e) {
  var t = useContext(Wt), r = useContext(ui);
  return dh.createElement(h0, T({}, e, {syncLayout: t, framerSyncLayout: r}));
}
var us = {measureLayout: gh, layoutAnimation: ch};
var vh = function() {
  return {isEnabled: false, isTargetLocked: false, target: bt(), targetFinal: bt()};
};
function Hu() {
  return {isHydrated: false, layout: bt(), layoutCorrected: bt(), treeScale: {x: 1, y: 1}, delta: Lu(), deltaFinal: Lu(), deltaTransform: ""};
}
var zu = Hu();
function pn(e, t, r) {
  var n = e.x, o = e.y, i = n.translate / t.x, a = o.translate / t.y, s = "translate3d(" + i + "px, " + a + "px, 0) ";
  if (r) {
    var l = r.rotate, u = r.rotateX, c = r.rotateY;
    l && (s += "rotate(" + l + ") "), u && (s += "rotateX(" + u + ") "), c && (s += "rotateY(" + c + ") ");
  }
  return s += "scale(" + n.scale + ", " + o.scale + ")", !r && s === g0 ? "" : s;
}
function cs(e) {
  var t = e.deltaFinal;
  return t.x.origin * 100 + "% " + t.y.origin * 100 + "% 0";
}
var g0 = pn(zu.delta, zu.treeScale, {x: 1, y: 1});
var ps = ["LayoutMeasure", "BeforeLayoutMeasure", "LayoutUpdate", "ViewportBoxUpdate", "Update", "Render", "AnimationComplete", "LayoutAnimationComplete", "AnimationStart", "SetAxisTarget", "Unmount"];
function yh() {
  var e = ps.map(function() {
    return new Qn();
  }), t = {}, r = {clearAllListeners: function() {
    return e.forEach(function(n) {
      return n.clear();
    });
  }, updatePropListeners: function(n) {
    return ps.forEach(function(o) {
      var i;
      (i = t[o]) === null || i === void 0 || i.call(t);
      var a = "on" + o, s = n[a];
      s && (t[o] = r[a](s));
    });
  }};
  return e.forEach(function(n, o) {
    r["on" + ps[o]] = function(i) {
      return n.add(i);
    }, r["notify" + ps[o]] = function() {
      for (var i = [], a = 0; a < arguments.length; a++)
        i[a] = arguments[a];
      return n.notify.apply(n, je([], re(i)));
    };
  }), r;
}
function bh(e, t, r) {
  var n;
  for (var o in t) {
    var i = t[o], a = r[o];
    if (Ge(i))
      e.addValue(o, i);
    else if (Ge(a))
      e.addValue(o, Ie(i));
    else if (a !== i)
      if (e.hasValue(o)) {
        var s = e.getValue(o);
        !s.hasAnimated && s.set(i);
      } else
        e.addValue(o, Ie((n = e.getStaticValue(o)) !== null && n !== void 0 ? n : i));
  }
  for (var o in r)
    t[o] === void 0 && e.removeValue(o);
  return t;
}
function xh(e, t, r, n) {
  var o = e.delta, i = e.layout, a = e.layoutCorrected, s = e.treeScale, l = t.target;
  Gd(a, i), Jd(a, s, r), es(o, a, l, n);
}
var Wu = function() {
  function e() {
    this.children = [], this.isDirty = false;
  }
  return e.prototype.add = function(t) {
    Wa(this.children, t), this.isDirty = true;
  }, e.prototype.remove = function(t) {
    Ua(this.children, t), this.isDirty = true;
  }, e.prototype.forEach = function(t) {
    this.isDirty && this.children.sort(to), this.isDirty = false, this.children.forEach(t);
  }, e;
}();
function Sh(e) {
  var t = e.getProjectionParent();
  if (!t) {
    e.rebaseProjectionTarget();
    return;
  }
  var r = Zt(t.getLayoutState().layout, e.getLayoutState().layout);
  Ke(function(n) {
    e.setProjectionTargetAxis(n, r[n].min, r[n].max, true);
  });
}
var fn = function(e) {
  var t = e.treeType, r = t === void 0 ? "" : t, n = e.build, o = e.getBaseTarget, i = e.makeTargetAnimatable, a = e.measureViewportBox, s = e.render, l = e.readValueFromInstance, u = e.resetTransform, c = e.restoreTransform, f = e.removeValueFromRenderState, p = e.sortNodePosition, d = e.scrapeMotionValuesFromProps;
  return function(m, h) {
    var v = m.parent, y = m.props, C = m.presenceId, P = m.blockInitialAnimation, b = m.visualState;
    h === void 0 && (h = {});
    var R = b.latestValues, E = b.renderState, I, M = yh(), A = vh(), L, U = A, $ = R, G, W = Hu(), te, Z = false, B = new Map(), K = new Map(), V = {}, S, x = T({}, R), g;
    function w() {
      !I || (Y.isProjectionReady() && (is(U.targetFinal, U.target, $), es(W.deltaFinal, W.layoutCorrected, U.targetFinal, R)), j(), s(I, E));
    }
    function j() {
      var D = R;
      if (te && te.isActive()) {
        var _ = te.getCrossfadeState(Y);
        _ && (D = _);
      }
      n(Y, E, D, U, W, h, y);
    }
    function X() {
      M.notifyUpdate(R);
    }
    function oe() {
      var D = W.delta, _ = W.treeScale, ie = _.x, we = _.x, ve = W.deltaTransform;
      xh(W, U, Y.path, R), Z && Y.notifyViewportBoxUpdate(U.target, D), Z = false;
      var ot = pn(D, _);
      (ot !== ve || ie !== _.x || we !== _.y) && Y.scheduleRender(), W.deltaTransform = ot;
    }
    function ne() {
      Y.layoutTree.forEach(y0);
    }
    function ee(D, _) {
      var ie = _.onChange(function(ve) {
        R[D] = ve, y.onUpdate && Me.update(X, false, true);
      }), we = _.onRenderRequest(Y.scheduleRender);
      K.set(D, function() {
        ie(), we();
      });
    }
    var xe = d(y);
    for (var Fe in xe) {
      var ge = xe[Fe];
      R[Fe] !== void 0 && Ge(ge) && ge.set(R[Fe], false);
    }
    var We = Qr(y), Ue = ua(y), Y = T(T({treeType: r, current: null, depth: v ? v.depth + 1 : 0, parent: v, children: new Set(), path: v ? je(je([], re(v.path)), [v]) : [], layoutTree: v ? v.layoutTree : new Wu(), presenceId: C, projection: A, variantChildren: Ue ? new Set() : void 0, isVisible: void 0, manuallyAnimateOnMount: Boolean(v == null ? void 0 : v.isMounted()), blockInitialAnimation: P, isHoverEventsEnabled: true, isMounted: function() {
      return Boolean(I);
    }, mount: function(D) {
      I = Y.current = D, Y.pointTo(Y), Ue && v && !We && (g = v == null ? void 0 : v.addVariantChild(Y)), v == null || v.children.add(Y);
    }, unmount: function() {
      jr.update(X), jr.render(w), jr.preRender(Y.updateLayoutProjection), K.forEach(function(D) {
        return D();
      }), Y.stopLayoutAnimation(), Y.layoutTree.remove(Y), g == null || g(), v == null || v.children.delete(Y), G == null || G(), M.clearAllListeners();
    }, addVariantChild: function(D) {
      var _, ie = Y.getClosestVariantNode();
      if (ie)
        return (_ = ie.variantChildren) === null || _ === void 0 || _.add(D), function() {
          return ie.variantChildren.delete(D);
        };
    }, sortNodePosition: function(D) {
      return !p || r !== D.treeType ? 0 : p(Y.getInstance(), D.getInstance());
    }, getClosestVariantNode: function() {
      return Ue ? Y : v == null ? void 0 : v.getClosestVariantNode();
    }, scheduleUpdateLayoutProjection: v ? v.scheduleUpdateLayoutProjection : function() {
      return Me.preRender(Y.updateTreeLayoutProjection, false, true);
    }, getLayoutId: function() {
      return y.layoutId;
    }, getInstance: function() {
      return I;
    }, getStaticValue: function(D) {
      return R[D];
    }, setStaticValue: function(D, _) {
      return R[D] = _;
    }, getLatestValues: function() {
      return R;
    }, setVisibility: function(D) {
      Y.isVisible !== D && (Y.isVisible = D, Y.scheduleRender());
    }, makeTargetAnimatable: function(D, _) {
      return _ === void 0 && (_ = true), i(Y, D, y, _);
    }, suspendHoverEvents: function() {
      Y.isHoverEventsEnabled = false, Me.postRender(function() {
        return setTimeout(function() {
          return Y.isHoverEventsEnabled = true;
        }, 10);
      });
    }, addValue: function(D, _) {
      Y.hasValue(D) && Y.removeValue(D), B.set(D, _), R[D] = _.get(), ee(D, _);
    }, removeValue: function(D) {
      var _;
      B.delete(D), (_ = K.get(D)) === null || _ === void 0 || _(), K.delete(D), delete R[D], f(D, E);
    }, hasValue: function(D) {
      return B.has(D);
    }, getValue: function(D, _) {
      var ie = B.get(D);
      return ie === void 0 && _ !== void 0 && (ie = Ie(_), Y.addValue(D, ie)), ie;
    }, forEachValue: function(D) {
      return B.forEach(D);
    }, readValue: function(D) {
      var _;
      return (_ = R[D]) !== null && _ !== void 0 ? _ : l(I, D, h);
    }, setBaseTarget: function(D, _) {
      x[D] = _;
    }, getBaseTarget: function(D) {
      if (o) {
        var _ = o(y, D);
        if (_ !== void 0 && !Ge(_))
          return _;
      }
      return x[D];
    }}, M), {build: function() {
      return j(), E;
    }, scheduleRender: function() {
      Me.render(w, false, true);
    }, syncRender: w, setProps: function(D) {
      y = D, M.updatePropListeners(D), V = bh(Y, d(y), V);
    }, getProps: function() {
      return y;
    }, getVariant: function(D) {
      var _;
      return (_ = y.variants) === null || _ === void 0 ? void 0 : _[D];
    }, getDefaultTransition: function() {
      return y.transition;
    }, getVariantContext: function(D) {
      if (D === void 0 && (D = false), D)
        return v == null ? void 0 : v.getVariantContext();
      if (!We) {
        var _ = (v == null ? void 0 : v.getVariantContext()) || {};
        return y.initial !== void 0 && (_.initial = y.initial), _;
      }
      for (var ie = {}, we = 0; we < b0; we++) {
        var ve = Ch[we], ot = y[ve];
        (yt(ot) || ot === false) && (ie[ve] = ot);
      }
      return ie;
    }, enableLayoutProjection: function() {
      A.isEnabled = true, Y.layoutTree.add(Y);
    }, lockProjectionTarget: function() {
      A.isTargetLocked = true;
    }, unlockProjectionTarget: function() {
      Y.stopLayoutAnimation(), A.isTargetLocked = false;
    }, getLayoutState: function() {
      return W;
    }, setCrossfader: function(D) {
      te = D;
    }, isProjectionReady: function() {
      return A.isEnabled && W.isHydrated;
    }, startLayoutAnimation: function(D, _, ie) {
      ie === void 0 && (ie = false);
      var we = Y.getProjectionAnimationProgress()[D], ve = ie ? A.relativeTarget[D] : A.target[D], ot = ve.min, Xt = ve.max, ar = Xt - ot;
      return we.clearListeners(), we.set(ot), we.set(ot), we.onChange(function(sr) {
        Y.setProjectionTargetAxis(D, sr, sr + ar, ie);
      }), Y.animateMotionValue(D, we, 0, _);
    }, stopLayoutAnimation: function() {
      Ke(function(D) {
        return Y.getProjectionAnimationProgress()[D].stop();
      });
    }, measureViewportBox: function(D) {
      D === void 0 && (D = true);
      var _ = a(I, h);
      return D || as(_, R), _;
    }, getProjectionAnimationProgress: function() {
      return S || (S = {x: Ie(0), y: Ie(0)}), S;
    }, setProjectionTargetAxis: function(D, _, ie, we) {
      we === void 0 && (we = false);
      var ve;
      we ? (A.relativeTarget || (A.relativeTarget = bt()), ve = A.relativeTarget[D]) : (A.relativeTarget = void 0, ve = A.target[D]), ve.min = _, ve.max = ie, Z = true, M.notifySetAxisTarget();
    }, rebaseProjectionTarget: function(D, _) {
      _ === void 0 && (_ = W.layout);
      var ie = Y.getProjectionAnimationProgress(), we = ie.x, ve = ie.y, ot = !A.relativeTarget && !A.isTargetLocked && !we.isAnimating() && !ve.isAnimating();
      (D || ot) && Ke(function(Xt) {
        var ar = _[Xt], sr = ar.min, pt = ar.max;
        Y.setProjectionTargetAxis(Xt, sr, pt);
      });
    }, notifyLayoutReady: function(D) {
      Sh(Y), Y.notifyLayoutUpdate(W.layout, Y.prevViewportBox || W.layout, D);
    }, resetTransform: function() {
      return u(Y, I, y);
    }, restoreTransform: function() {
      return c(I, E);
    }, updateLayoutProjection: oe, updateTreeLayoutProjection: function() {
      Y.layoutTree.forEach(v0), Me.preRender(ne, false, true);
    }, getProjectionParent: function() {
      if (L === void 0) {
        for (var D = false, _ = Y.path.length - 1; _ >= 0; _--) {
          var ie = Y.path[_];
          if (ie.projection.isEnabled) {
            D = ie;
            break;
          }
        }
        L = D;
      }
      return L;
    }, resolveRelativeTargetBox: function() {
      var D = Y.getProjectionParent();
      if (!(!A.relativeTarget || !D) && (jd(A, D.projection), ns(D))) {
        var _ = A.target;
        is(_, _, D.getLatestValues());
      }
    }, shouldResetTransform: function() {
      return Boolean(y._layoutResetTransform);
    }, pointTo: function(D) {
      U = D.projection, $ = D.getLatestValues(), G == null || G(), G = Ht(D.onSetAxisTarget(Y.scheduleUpdateLayoutProjection), D.onLayoutAnimationComplete(function() {
        var _;
        Y.isPresent ? Y.presence = $e.Present : (_ = Y.layoutSafeToRemove) === null || _ === void 0 || _.call(Y);
      }));
    }, isPresent: true, presence: $e.Entering});
    return Y;
  };
};
function v0(e) {
  e.resolveRelativeTargetBox();
}
function y0(e) {
  e.updateLayoutProjection();
}
var Ch = je(["initial"], re(Ka)), b0 = Ch.length;
var x0 = new Set(["width", "height", "top", "left", "right", "bottom", "x", "y"]), Ph = function(e) {
  return x0.has(e);
}, S0 = function(e) {
  return Object.keys(e).some(Ph);
}, Th = function(e, t) {
  e.set(t, false), e.set(t);
}, fs = function(e) {
  return e === Ct || e === J;
}, wh;
(function(e) {
  e.width = "width", e.height = "height", e.left = "left", e.right = "right", e.top = "top", e.bottom = "bottom";
})(wh || (wh = {}));
var Rh = function(e, t) {
  return parseFloat(e.split(", ")[t]);
}, Eh = function(e, t) {
  return function(r, n) {
    var o = n.transform;
    if (o === "none" || !o)
      return 0;
    var i = o.match(/^matrix3d\((.+)\)$/);
    if (i)
      return Rh(i[1], t);
    var a = o.match(/^matrix\((.+)\)$/);
    return a ? Rh(a[1], e) : 0;
  };
}, C0 = new Set(["x", "y", "z"]), P0 = Vn.filter(function(e) {
  return !C0.has(e);
});
function T0(e) {
  var t = [];
  return P0.forEach(function(r) {
    var n = e.getValue(r);
    n !== void 0 && (t.push([r, n.get()]), n.set(r.startsWith("scale") ? 1 : 0));
  }), t.length && e.syncRender(), t;
}
var Fh = {width: function(e) {
  var t = e.x;
  return t.max - t.min;
}, height: function(e) {
  var t = e.y;
  return t.max - t.min;
}, top: function(e, t) {
  var r = t.top;
  return parseFloat(r);
}, left: function(e, t) {
  var r = t.left;
  return parseFloat(r);
}, bottom: function(e, t) {
  var r = e.y, n = t.top;
  return parseFloat(n) + (r.max - r.min);
}, right: function(e, t) {
  var r = e.x, n = t.left;
  return parseFloat(n) + (r.max - r.min);
}, x: Eh(4, 13), y: Eh(5, 14)}, w0 = function(e, t, r) {
  var n = t.measureViewportBox(), o = t.getInstance(), i = getComputedStyle(o), a = i.display, s = i.top, l = i.left, u = i.bottom, c = i.right, f = i.transform, p = {top: s, left: l, bottom: u, right: c, transform: f};
  a === "none" && t.setStaticValue("display", e.display || "block"), t.syncRender();
  var d = t.measureViewportBox();
  return r.forEach(function(m) {
    var h = t.getValue(m);
    Th(h, Fh[m](n, p)), e[m] = Fh[m](d, i);
  }), e;
}, R0 = function(e, t, r, n) {
  r === void 0 && (r = {}), n === void 0 && (n = {}), t = T({}, t), n = T({}, n);
  var o = Object.keys(t).filter(Ph), i = [], a = false, s = [];
  if (o.forEach(function(u) {
    var c = e.getValue(u);
    if (!!e.hasValue(u)) {
      var f = r[u], p = t[u], d = oi(f), m;
      if (dr(p))
        for (var h = p.length, v = p[0] === null ? 1 : 0; v < h; v++)
          m ? ye(oi(p[v]) === m, "All keyframes must be of the same type") : (m = oi(p[v]), ye(m === d || fs(d) && fs(m), "Keyframes must be of the same dimension as the current value"));
      else
        m = oi(p);
      if (d !== m)
        if (fs(d) && fs(m)) {
          var y = c.get();
          typeof y == "string" && c.set(parseFloat(y)), typeof p == "string" ? t[u] = parseFloat(p) : Array.isArray(p) && m === J && (t[u] = p.map(parseFloat));
        } else
          (d == null ? void 0 : d.transform) && (m == null ? void 0 : m.transform) && (f === 0 || p === 0) ? f === 0 ? c.set(m.transform(f)) : t[u] = d.transform(p) : (a || (i = T0(e), a = true), s.push(u), n[u] = n[u] !== void 0 ? n[u] : t[u], Th(c, p));
    }
  }), s.length) {
    var l = w0(t, e, s);
    return i.length && i.forEach(function(u) {
      var c = re(u, 2), f = c[0], p = c[1];
      e.getValue(f).set(p);
    }), e.syncRender(), {target: l, transitionEnd: n};
  } else
    return {target: t, transitionEnd: n};
};
function Mh(e, t, r, n) {
  return S0(t) ? R0(e, t, r, n) : {target: t, transitionEnd: n};
}
var Ih = function(e, t, r, n) {
  var o = ih(e, t, n);
  return t = o.target, n = o.transitionEnd, Mh(e, t, r, n);
};
function E0(e) {
  return window.getComputedStyle(e);
}
var Uu = {treeType: "dom", readValueFromInstance: function(e, t) {
  var r;
  if (Dr(t)) {
    var n = ln(t);
    return (r = n == null ? void 0 : n.default) !== null && r !== void 0 ? r : 0;
  } else {
    var o = E0(e);
    return (da(t) ? o.getPropertyValue(t) : o[t]) || 0;
  }
}, sortNodePosition: function(e, t) {
  return e.compareDocumentPosition(t) & 2 ? 1 : -1;
}, getBaseTarget: function(e, t) {
  var r, n, o = ln(t);
  return (n = (r = e.style) === null || r === void 0 ? void 0 : r[t]) !== null && n !== void 0 ? n : o == null ? void 0 : o.default;
}, measureViewportBox: function(e, t) {
  var r = t.transformPagePoint;
  return Qa(e, r);
}, resetTransform: function(e, t, r) {
  e.suspendHoverEvents();
  var n = r.transformTemplate;
  t.style.transform = n ? n({}, "") : "none", e.scheduleRender();
}, restoreTransform: function(e, t) {
  e.style.transform = t.style.transform;
}, removeValueFromRenderState: function(e, t) {
  var r = t.vars, n = t.style;
  delete r[e], delete n[e];
}, makeTargetAnimatable: function(e, t, r, n) {
  var o = r.transformValues;
  n === void 0 && (n = true);
  var i = t.transition, a = t.transitionEnd, s = de(t, ["transition", "transitionEnd"]), l = Ya(s, i || {}, e);
  if (o && (a && (a = o(a)), s && (s = o(s)), l && (l = o(l))), n) {
    Xa(e, s, l);
    var u = Ih(e, s, l, a);
    a = u.transitionEnd, s = u.target;
  }
  return T({transition: i, transitionEnd: a}, s);
}, scrapeMotionValuesFromProps: Un, build: function(e, t, r, n, o, i, a) {
  e.isVisible !== void 0 && (t.style.visibility = e.isVisible ? "visible" : "hidden");
  var s = n.isEnabled && o.isHydrated;
  Hn(t, r, n, o, i, a.transformTemplate, s ? pn : void 0, s ? cs : void 0);
}, render: Pa}, Ah = fn(Uu);
var Dh = fn(T(T({}, Uu), {getBaseTarget: function(e, t) {
  return e[t];
}, readValueFromInstance: function(e, t) {
  var r;
  return Dr(t) ? ((r = ln(t)) === null || r === void 0 ? void 0 : r.default) || 0 : (t = Ta.has(t) ? t : Ca(t), e.getAttribute(t));
}, scrapeMotionValuesFromProps: Ra, build: function(e, t, r, n, o, i, a) {
  var s = n.isEnabled && o.isHydrated;
  Wn(t, r, n, o, i, a.transformTemplate, s ? pn : void 0, s ? cs : void 0);
}, render: wa}));
var ci = function(e, t) {
  return kn(e) ? Dh(t, {enableHardwareAcceleration: false}) : Ah(t, {enableHardwareAcceleration: true});
};
var Lh = T(T(T(T({}, qa), Ha), ls), us), _e = ca(function(e, t) {
  return Go(e, t, Lh, ci);
});
function F0(e) {
  return zo(Go(e, {forwardMotionProps: false}, Lh, ci));
}
var M0 = ca(Go);
function Oh() {
  var e = useRef(false), t = re(useState(0), 2), r = t[0], n = t[1];
  return Xn(function() {
    return e.current = true;
  }), useCallback(function() {
    !e.current && n(r + 1);
  }, [r]);
}
var Vh = 0;
function L0() {
  var e = Vh;
  return Vh++, e;
}
var ms = function(e) {
  var t = e.children, r = e.initial, n = e.isPresent, o = e.onExitComplete, i = e.custom, a = e.presenceAffectsLayout, s = Le(O0), l = Le(L0), u = useMemo(function() {
    return {id: l, initial: r, isPresent: n, custom: i, onExitComplete: function(c) {
      s.set(c, true);
      var f = true;
      s.forEach(function(p) {
        p || (f = false);
      }), f && (o == null || o());
    }, register: function(c) {
      return s.set(c, false), function() {
        return s.delete(c);
      };
    }};
  }, a ? void 0 : [n]);
  return useMemo(function() {
    s.forEach(function(c, f) {
      return s.set(f, false);
    });
  }, [n]), useEffect(function() {
    !n && !s.size && (o == null || o());
  }, [n]), createElement(vt.Provider, {value: u}, t);
};
function O0() {
  return new Map();
}
function ro(e) {
  return e.key || "";
}
function H0(e, t) {
  var r = new Set();
  e.forEach(function(n) {
    var o = ro(n);
    r && (r.has(o) && console.warn('Children of AnimatePresence require unique keys. "' + o + '" is a duplicate.'), r.add(o)), t.set(o, n);
  });
}
function z0(e) {
  var t = [];
  return Children.forEach(e, function(r) {
    isValidElement(r) && t.push(r);
  }), t;
}
var hs = function(e) {
  var t = e.children, r = e.custom, n = e.initial, o = n === void 0 ? true : n, i = e.onExitComplete, a = e.exitBeforeEnter, s = e.presenceAffectsLayout, l = s === void 0 ? true : s, u = Oh(), c = useContext(Wt);
  vr(c) && (u = c.forceUpdate);
  var f = useRef(true), p = z0(t), d = useRef(p), m = useRef(new Map()).current, h = useRef(new Set()).current;
  if (H0(p, m), f.current)
    return f.current = false, createElement(Fragment, null, p.map(function(E) {
      return createElement(ms, {key: ro(E), isPresent: true, initial: o ? void 0 : false, presenceAffectsLayout: l}, E);
    }));
  for (var v = je([], re(p)), y = d.current.map(ro), C = p.map(ro), P = y.length, b = 0; b < P; b++) {
    var R = y[b];
    C.indexOf(R) === -1 ? h.add(R) : h.delete(R);
  }
  return a && h.size && (v = []), h.forEach(function(E) {
    if (C.indexOf(E) === -1) {
      var I = m.get(E);
      if (!!I) {
        var M = y.indexOf(E), A = function() {
          m.delete(E), h.delete(E);
          var L = d.current.findIndex(function(U) {
            return U.key === E;
          });
          d.current.splice(L, 1), h.size || (d.current = p, u(), i && i());
        };
        v.splice(M, 0, createElement(ms, {key: ro(I), isPresent: false, onExitComplete: A, custom: r, presenceAffectsLayout: l}, I));
      }
    }
  }), v = v.map(function(E) {
    var I = E.key;
    return h.has(I) ? E : createElement(ms, {key: ro(E), isPresent: true, presenceAffectsLayout: l}, E);
  }), d.current = v, a && v.length > 1 && console.warn("You're attempting to animate multiple children within AnimatePresence, but its exitBeforeEnter prop is set to true. This will lead to odd visual behaviour."), createElement(Fragment, null, h.size ? v : v.map(function(E) {
    return cloneElement(E);
  }));
};
function Qt(e, t, r) {
  r === void 0 && (r = {});
  var n = Ge(e) ? e : Ie(e);
  return gr("", n, t, r), {stop: function() {
    return n.stop();
  }};
}
function no() {
  var e = Ie(1), t = {lead: void 0, follow: void 0, crossfadeOpacity: false, preserveFollowOpacity: false}, r = T({}, t), n = {}, o = {}, i = false, a = null, s = 0;
  function l(c, f) {
    var p = t.lead, d = t.follow;
    i = true, a = null;
    var m = false, h = function() {
      m = true, p && p.scheduleRender(), d && d.scheduleRender();
    }, v = function() {
      i = false, a = zt().timestamp;
    };
    return f = f && Jn(f, "crossfade"), Qt(e, c, T(T({}, f), {onUpdate: h, onComplete: function() {
      m ? v() : (e.set(c), Me.read(v)), h();
    }}));
  }
  function u() {
    var c, f, p = zt().timestamp, d = t.lead, m = t.follow;
    if (!(p === s || !d)) {
      s = p;
      var h = d.getLatestValues();
      Object.assign(n, h);
      var v = m ? m.getLatestValues() : t.prevValues;
      Object.assign(o, v);
      var y = e.get(), C = (c = h.opacity) !== null && c !== void 0 ? c : 1, P = (f = v == null ? void 0 : v.opacity) !== null && f !== void 0 ? f : 1;
      t.crossfadeOpacity && m ? (n.opacity = Se(m.isVisible !== false ? 0 : P, C, W0(y)), o.opacity = t.preserveFollowOpacity ? P : Se(P, 0, U0(y))) : m || (n.opacity = Se(P, C, y)), $0(n, o, h, v || {}, Boolean(m), y);
    }
  }
  return {isActive: function() {
    return n && (i || zt().timestamp === a);
  }, fromLead: function(c) {
    return l(0, c);
  }, toLead: function(c) {
    var f = 0;
    return !t.prevValues && !t.follow ? f = 1 : r.lead === t.follow && r.follow === t.lead && (f = 1 - e.get()), e.set(f), l(1, c);
  }, reset: function() {
    return e.set(1);
  }, stop: function() {
    return e.stop();
  }, getCrossfadeState: function(c) {
    if (u(), c === t.lead)
      return n;
    if (c === t.follow)
      return o;
  }, setOptions: function(c) {
    r = t, t = c, n = {}, o = {};
  }, getLatestValues: function() {
    return n;
  }};
}
var W0 = jh(0, 0.5, Yn), U0 = jh(0.5, 0.95, on$1);
function jh(e, t, r) {
  return function(n) {
    return n < e ? 0 : n > t ? 1 : r(Bt(e, t, n));
  };
}
var Nh = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"], G0 = Nh.length;
function $0(e, t, r, n, o, i) {
  for (var a = 0; a < G0; a++) {
    var s = "border" + Nh[a] + "Radius", l = Bh(n, s), u = Bh(r, s);
    if (!(l === void 0 && u === void 0) && (l || (l = 0), u || (u = 0), typeof l == "number" && typeof u == "number")) {
      var c = Math.max(Se(l, u, i), 0);
      e[s] = t[s] = c;
    }
  }
  if (n.rotate || r.rotate) {
    var f = Se(n.rotate || 0, r.rotate || 0, i);
    e.rotate = t.rotate = f;
  }
  !o && r.backgroundColor && n.backgroundColor && (e.backgroundColor = t.backgroundColor = rn(n.backgroundColor, r.backgroundColor)(i));
}
function Bh(e, t) {
  var r;
  return (r = e[t]) !== null && r !== void 0 ? r : e.borderRadius;
}
function Hh() {
  var e = new Set(), t = {leadIsExiting: false}, r = T({}, t), n, o, i, a = no(), s = false;
  function l() {
    return t.follow ? t.follow.prevViewportBox : o;
  }
  function u() {
    var c;
    return (c = t.follow) === null || c === void 0 ? void 0 : c.getLayoutState().layout;
  }
  return {add: function(c) {
    c.setCrossfader(a), e.add(c), i && (c.prevDragCursor = i), t.lead || (t.lead = c);
  }, remove: function(c) {
    e.delete(c);
  }, getLead: function() {
    return t.lead;
  }, updateSnapshot: function() {
    if (!!t.lead) {
      n = a.isActive() ? a.getLatestValues() : t.lead.getLatestValues(), o = t.lead.prevViewportBox;
      var c = _u.get(t.lead);
      c && c.isDragging && (i = c.cursorProgress);
    }
  }, clearSnapshot: function() {
    i = o = void 0;
  }, updateLeadAndFollow: function() {
    var c;
    r = T({}, t);
    for (var f, p, d = Array.from(e), m = d.length; m--; m >= 0) {
      var h = d[m];
      if (f && (p != null || (p = h)), f != null || (f = h), f && p)
        break;
    }
    t.lead = f, t.follow = p, t.leadIsExiting = ((c = t.lead) === null || c === void 0 ? void 0 : c.presence) === $e.Exiting, a.setOptions({lead: f, follow: p, prevValues: n, crossfadeOpacity: (p == null ? void 0 : p.isPresenceRoot) || (f == null ? void 0 : f.isPresenceRoot)}), t.lead !== r.follow && (r.lead !== t.lead || r.leadIsExiting !== t.leadIsExiting) && (s = true);
  }, animate: function(c, f) {
    var p;
    if (f === void 0 && (f = false), c === t.lead) {
      f ? c.pointTo(t.lead) : c.setVisibility(true);
      var d = {}, m = (p = t.follow) === null || p === void 0 ? void 0 : p.getProjectionParent();
      if (m && (d.prevParent = m), c.presence === $e.Entering ? d.originBox = l() : c.presence === $e.Exiting && (d.targetBox = u()), s) {
        s = false;
        var h = c.getDefaultTransition();
        c.presence === $e.Entering ? a.toLead(h) : a.fromLead(h);
      }
      c.notifyLayoutReady(d);
    } else
      f ? t.lead && c.pointTo(t.lead) : c.setVisibility(false);
  }};
}
function zh(e) {
  for (var t = false, r = {}, n = 0; n < pa.length; n++) {
    var o = pa[n], i = "rotate" + o;
    !e.hasValue(i) || e.getStaticValue(i) === 0 || (t = true, r[i] = e.getStaticValue(i), e.setStaticValue(i, 0));
  }
  if (!!t) {
    e.syncRender();
    for (var i in r)
      e.setStaticValue(i, r[i]);
    e.scheduleRender();
  }
}
var Gu = function(e) {
  Ln(t, e);
  function t() {
    var r = e !== null && e.apply(this, arguments) || this;
    return r.children = new Set(), r.stacks = new Map(), r.hasMounted = false, r.updateScheduled = false, r.renderScheduled = false, r.syncContext = T(T({}, Jt()), {syncUpdate: function(n) {
      return r.scheduleUpdate(n);
    }, forceUpdate: function() {
      r.syncContext = T({}, r.syncContext), r.scheduleUpdate(true);
    }, register: function(n) {
      return r.addChild(n);
    }, remove: function(n) {
      return r.removeChild(n);
    }}), r;
  }
  return t.prototype.componentDidMount = function() {
    this.hasMounted = true;
  }, t.prototype.componentDidUpdate = function() {
    this.startLayoutAnimation();
  }, t.prototype.shouldComponentUpdate = function() {
    return this.renderScheduled = true, true;
  }, t.prototype.startLayoutAnimation = function() {
    var r = this;
    this.renderScheduled = this.updateScheduled = false;
    var n = this.props.type;
    this.children.forEach(function(i) {
      i.isPresent ? i.presence !== $e.Entering && (i.presence = i.presence === $e.Exiting ? $e.Entering : $e.Present) : i.presence = $e.Exiting;
    }), this.updateStacks();
    var o = {layoutReady: function(i) {
      if (i.getLayoutId() !== void 0) {
        var a = r.getStack(i);
        a.animate(i, n === "crossfade");
      } else
        i.notifyLayoutReady();
    }, parent: this.context.visualElement};
    this.children.forEach(function(i) {
      return r.syncContext.add(i);
    }), this.syncContext.flush(o), this.stacks.forEach(function(i) {
      return i.clearSnapshot();
    });
  }, t.prototype.updateStacks = function() {
    this.stacks.forEach(function(r) {
      return r.updateLeadAndFollow();
    });
  }, t.prototype.scheduleUpdate = function(r) {
    r === void 0 && (r = false), !!(r || !this.updateScheduled) && (this.updateScheduled = true, this.children.forEach(function(n) {
      zh(n), n.shouldResetTransform() && n.resetTransform();
    }), this.children.forEach(Br), this.stacks.forEach(function(n) {
      return n.updateSnapshot();
    }), (r || !this.renderScheduled) && (this.renderScheduled = true, this.forceUpdate()));
  }, t.prototype.addChild = function(r) {
    this.children.add(r), this.addToStack(r), r.presence = this.hasMounted ? $e.Entering : $e.Present;
  }, t.prototype.removeChild = function(r) {
    this.scheduleUpdate(), this.children.delete(r), this.removeFromStack(r);
  }, t.prototype.addToStack = function(r) {
    var n = this.getStack(r);
    n == null || n.add(r);
  }, t.prototype.removeFromStack = function(r) {
    var n = this.getStack(r);
    n == null || n.remove(r);
  }, t.prototype.getStack = function(r) {
    var n = r.getLayoutId();
    if (n !== void 0)
      return !this.stacks.has(n) && this.stacks.set(n, Hh()), this.stacks.get(n);
  }, t.prototype.render = function() {
    return createElement(Wt.Provider, {value: this.syncContext}, this.props.children);
  }, t.contextType = ur, t;
}(Component);
function Z0(e) {
  var t = e.children, r = de(e, ["children"]);
  r = T(T({}, useContext(it)), r), r.isStatic = Le(function() {
    return r.isStatic;
  });
  var n = typeof r.transition == "object" ? r.transition.toString() : "", o = useMemo(function() {
    return r;
  }, [n, r.transformPagePoint]);
  return createElement(it.Provider, {value: o}, t);
}
function rP(e) {
  var t = e.children, r = e.features, n = e.strict, o = n === void 0 ? false : n, i = re(useState(!$u(r)), 2), a = i[1], s = useRef(void 0);
  if (!$u(r)) {
    var l = r.renderer, u = de(r, ["renderer"]);
    s.current = l, No(u);
  }
  return useEffect(function() {
    $u(r) && r().then(function(c) {
      var f = c.renderer, p = de(c, ["renderer"]);
      No(p), s.current = f, a(true);
    });
  }, []), createElement(On.Provider, {value: {renderer: s.current, strict: o}}, t);
}
function $u(e) {
  return typeof e == "function";
}
var Xu = T(T({renderer: ci}, qa), Ha);
var oP = T(T(T({}, Xu), ls), us);
function et(e) {
  var t = Le(function() {
    return Ie(e);
  }), r = useContext(it).isStatic;
  if (r) {
    var n = re(useState(e), 2), o = n[1];
    useEffect(function() {
      return t.onChange(o);
    }, []);
  }
  return t;
}
function gs(e, t) {
  useEffect(function() {
    if (Ge(e))
      return e.onChange(t);
  }, [t]);
}
function Uh(e, t) {
  useEffect(function() {
    var r = e.map(function(n) {
      return n.onChange(t);
    });
    return function() {
      return r.forEach(function(n) {
        return n();
      });
    };
  });
}
function vs(e, t) {
  var r = et(t()), n = function() {
    return r.set(t());
  };
  return n(), Uh(e, function() {
    return Me.update(n, false, true);
  }), r;
}
function lP(e) {
  for (var t = [], r = 1; r < arguments.length; r++)
    t[r - 1] = arguments[r];
  var n = e.length;
  function o() {
    for (var i = "", a = 0; a < n; a++) {
      i += e[a];
      var s = t[a];
      s && (i += t[a].get());
    }
    return i;
  }
  return vs(t, o);
}
var uP = function(e) {
  return typeof e == "object" && e.mix;
}, cP = function(e) {
  return uP(e) ? e.mix : void 0;
};
function Yu() {
  for (var e = [], t = 0; t < arguments.length; t++)
    e[t] = arguments[t];
  var r = !Array.isArray(e[0]), n = r ? 0 : -1, o = e[0 + n], i = e[1 + n], a = e[2 + n], s = e[3 + n], l = nn(i, a, T({mixer: cP(a[0])}, s));
  return r ? l(o) : l;
}
function ys(e, t, r, n) {
  var o = typeof t == "function" ? t : Yu(t, r, n);
  return Array.isArray(e) ? Gh(e, o) : Gh([e], function(i) {
    var a = re(i, 1), s = a[0];
    return o(s);
  });
}
function Gh(e, t) {
  var r = Le(function() {
    return [];
  });
  return vs(e, function() {
    r.length = 0;
    for (var n = e.length, o = 0; o < n; o++)
      r[o] = e[o].get();
    return t(r);
  });
}
function dP(e, t) {
  t === void 0 && (t = {});
  var r = useContext(it).isStatic, n = useRef(null), o = et(Ge(e) ? e.get() : e);
  return useMemo(function() {
    return o.attach(function(i, a) {
      return r ? a(i) : (n.current && n.current.stop(), n.current = an(T(T({from: o.get(), to: i, velocity: o.getVelocity()}, t), {onUpdate: a})), o.get());
    });
  }, Object.values(t)), gs(e, function(i) {
    return o.set(parseFloat(i));
  }), o;
}
function gP(e) {
  var t = et(e.getVelocity());
  return useEffect(function() {
    return e.velocityUpdateSubscribers.add(function(r) {
      t.set(r);
    });
  }, [e]), t;
}
function bs() {
  return {scrollX: Ie(0), scrollY: Ie(0), scrollXProgress: Ie(0), scrollYProgress: Ie(0)};
}
function $h(e, t, r) {
  r.set(!e || !t ? 0 : e / t);
}
function xs(e, t) {
  var r = function() {
    var n = t(), o = n.xOffset, i = n.yOffset, a = n.xMaxOffset, s = n.yMaxOffset;
    e.scrollX.set(o), e.scrollY.set(i), $h(o, a, e.scrollXProgress), $h(i, s, e.scrollYProgress);
  };
  return r(), r;
}
var vP = function(e) {
  return function() {
    return {xOffset: e.scrollLeft, yOffset: e.scrollTop, xMaxOffset: e.scrollWidth - e.offsetWidth, yMaxOffset: e.scrollHeight - e.offsetHeight};
  };
};
function yP(e) {
  var t = Le(bs);
  return Zr(function() {
    var r = e.current;
    if (ye(!!r, "ref provided to useScroll must be passed into a HTML element."), !!r) {
      var n = xs(t, vP(r)), o = Nt(r, "scroll", n, {passive: true}), i = Nt(r, "resize", n);
      return function() {
        o && o(), i && i();
      };
    }
  }, []), t;
}
var Ss;
function bP() {
  return {xOffset: window.pageXOffset, yOffset: window.pageYOffset, xMaxOffset: document.body.clientWidth - window.innerWidth, yMaxOffset: document.body.clientHeight - window.innerHeight};
}
var Xh = false;
function xP() {
  if (Xh = true, typeof window != "undefined") {
    var e = xs(Ss, bP);
    Nt(window, "scroll", e, {passive: true}), Nt(window, "resize", e);
  }
}
function SP() {
  return Ss || (Ss = bs()), Zr(function() {
    !Xh && xP();
  }, []), Ss;
}
var oo;
function PP() {
  if (oo = Ie(null), typeof window != "undefined")
    if (window.matchMedia) {
      var e = window.matchMedia("(prefers-reduced-motion)"), t = function() {
        return oo.set(e.matches);
      };
      e.addListener(t), t();
    } else
      oo.set(false);
}
function TP() {
  !oo && PP();
  var e = re(useState(oo.get()), 2), t = e[0], r = e[1];
  return gs(oo, r), t;
}
function Ku() {
  var e = false, t = [], r = new Set(), n = {subscribe: function(o) {
    return r.add(o), function() {
      return void r.delete(o);
    };
  }, start: function(o, i) {
    if (e) {
      var a = [];
      return r.forEach(function(s) {
        a.push(cn(s, o, {transitionOverride: i}));
      }), Promise.all(a);
    } else
      return new Promise(function(s) {
        t.push({animation: [o, i], resolve: s});
      });
  }, set: function(o) {
    return ye(e, "controls.set() should only be called after a component has mounted. Consider calling within a useEffect hook."), r.forEach(function(i) {
      pd(i, o);
    });
  }, stop: function() {
    r.forEach(function(o) {
      md(o);
    });
  }, mount: function() {
    return e = true, t.forEach(function(o) {
      var i = o.animation, a = o.resolve;
      n.start.apply(n, je([], re(i))).then(a);
    }), function() {
      e = false, n.stop();
    };
  }};
  return n;
}
function qu() {
  var e = Le(Ku);
  return useEffect(e.mount, []), e;
}
function FP() {
  for (var e = [], t = 0; t < arguments.length; t++)
    e[t] = arguments[t];
  var r = useRef(0), n = re(useState(e[r.current]), 2), o = n[0], i = n[1];
  return [o, function(a) {
    r.current = typeof a != "number" ? Cu(0, e.length, r.current + 1) : a, i(e[r.current]);
  }];
}
var Yh = function() {
  function e() {
    this.componentControls = new Set();
  }
  return e.prototype.subscribe = function(t) {
    var r = this;
    return this.componentControls.add(t), function() {
      return r.componentControls.delete(t);
    };
  }, e.prototype.start = function(t, r) {
    this.componentControls.forEach(function(n) {
      n.start(t.nativeEvent || t, r);
    });
  }, e.prototype.updateConstraints = function() {
    this.componentControls.forEach(function(t) {
      t.updateLayoutMeasurements(), t.resolveDragConstraints();
    });
  }, e;
}(), MP = function() {
  return new Yh();
};
function Zu() {
  return Le(MP);
}
var Ju = function() {
  return {};
}, AP = fn({build: function() {
}, measureViewportBox: bt, resetTransform: function() {
}, restoreTransform: function() {
}, removeValueFromRenderState: function() {
}, render: function() {
}, scrapeMotionValuesFromProps: Ju, readValueFromInstance: function(e, t, r) {
  return r.initialState[t] || 0;
}, makeTargetAnimatable: function(e, t) {
  var r = t.transition, n = t.transitionEnd, o = de(t, ["transition", "transitionEnd"]), i = Ya(o, r || {}, e);
  return Xa(e, o, i), T({transition: r, transitionEnd: n}, o);
}}), DP = $n({scrapeMotionValuesFromProps: Ju, createRenderState: Ju});
function qh(e) {
  var t = re(useState(e), 2), r = t[0], n = t[1], o = DP({}, false), i = Le(function() {
    return AP({props: {}, visualState: o}, {initialState: e});
  });
  useEffect(function() {
    return i.mount({}), i.unmount();
  }, []), useEffect(function() {
    i.setProps({onUpdate: function(s) {
      return n(T({}, s));
    }});
  });
  var a = Le(function() {
    return function(s) {
      return cn(i, s);
    };
  });
  return [r, a];
}
var LP = 1e5, Zh = function(e) {
  return e > 1e-3 ? 1 / e : LP;
}, Jh = false;
function Qh(e) {
  var t = et(1), r = et(1), n = sa();
  ye(!!(e || n), "If no scale values are provided, useInvertedScale must be used within a child of another motion component."), Ir(Jh, "useInvertedScale is deprecated and will be removed in 3.0. Use the layout prop instead."), Jh = true, e ? (t = e.scaleX || t, r = e.scaleY || r) : n && (t = n.getValue("scaleX", 1), r = n.getValue("scaleY", 1));
  var o = ys(t, Zh), i = ys(r, Zh);
  return {scaleX: o, scaleY: i};
}
un.prototype.addChild = function({transformer: e = (t) => t}) {
  let t = new un(e(this.get()));
  return this.onChange((r) => t.set(e(r))), t;
};
var ce;
(function(m) {
  m.Boolean = "boolean", m.Number = "number", m.String = "string", m.FusedNumber = "fusednumber", m.Enum = "enum", m.SegmentedEnum = "segmentedenum", m.Color = "color", m.Image = "image", m.File = "file", m.ComponentInstance = "componentinstance", m.Array = "array", m.EventHandler = "eventhandler", m.Transition = "transition", m.Object = "object";
})(ce || (ce = {}));
function mn(e, t) {
  Object.assign(e, {propertyControls: t});
}
function OP(e) {
  return e.propertyControls;
}
var Av = jo(Ql());
var kP = {addEventListener: () => {
}, removeEventListener: () => {
}, dispatchEvent: () => false, onpointerdown: false, onpointermove: false, onpointerup: false, ontouchstart: false, ontouchmove: false, ontouchend: false, onmousedown: false, onmousemove: false, onmouseup: false, devicePixelRatio: 1, scrollX: 0, scrollY: 0, location: {href: ""}, setTimeout: () => 0, clearTimeout: () => {
}, setInterval: () => 0, clearInterval: () => {
}, webkitConvertPointFromPageToNode: (e, t) => t}, N = typeof window == "undefined" ? kP : window;
function VP(e, t, r = true) {
  let {borderWidth: n, borderStyle: o, borderColor: i} = e;
  if (!n)
    return;
  let a, s, l, u;
  if (typeof n == "number" ? a = s = l = u = n : (a = n.top || 0, s = n.bottom || 0, l = n.left || 0, u = n.right || 0), !(a === 0 && s === 0 && l === 0 && u === 0)) {
    if (r && a === s && a === l && a === u) {
      t.border = `${a}px ${o} ${i}`;
      return;
    }
    t.borderStyle = e.borderStyle, t.borderColor = e.borderColor, t.borderTopWidth = `${a}px`, t.borderBottomWidth = `${s}px`, t.borderLeftWidth = `${l}px`, t.borderRightWidth = `${u}px`;
  }
}
function Cs(e) {
  let t = e.layoutId ? `${e.layoutId}-border` : void 0;
  if (!e.borderWidth)
    return null;
  let r = {position: "absolute", left: 0, right: 0, top: 0, bottom: 0, borderRadius: "inherit", pointerEvents: "none"};
  return e.border ? (r.border = e.border, createElement(_e.div, {style: r})) : (VP(e, r, false), createElement(_e.div, {"data-frame-border": true, style: r, layoutId: t}));
}
var _P = "src", rt;
(function(t) {
  t.isImageObject = function(r) {
    return !r || typeof r == "string" ? false : _P in r;
  };
})(rt || (rt = {}));
var fi = class {
  constructor() {
    this.observers = new Set();
    this.transactions = {};
  }
  add(t) {
    this.observers.add(t);
    let r = false;
    return () => {
      r || (r = true, this.remove(t));
    };
  }
  remove(t) {
    this.observers.delete(t);
  }
  notify(t, r) {
    if (r) {
      let n = this.transactions[r] || t;
      n.value = t.value, this.transactions[r] = n;
    } else
      this.callObservers(t);
  }
  finishTransaction(t) {
    let r = this.transactions[t];
    return delete this.transactions[t], this.callObservers(r, t);
  }
  callObservers(t, r) {
    let n = [];
    return new Set(this.observers).forEach((o) => {
      typeof o == "function" ? o(t, r) : (o.update(t, r), n.push(o.finish));
    }), n;
  }
};
function Ps(e, ...t) {
  if (e)
    return;
  let r = Error("Assertion Error" + (t.length > 0 ? ": " + t.join(" ") : ""));
  if (r.stack)
    try {
      let n = r.stack.split(`
`);
      n[1].includes("assert") ? (n.splice(1, 1), r.stack = n.join(`
`)) : n[0].includes("assert") && (n.splice(0, 1), r.stack = n.join(`
`));
    } catch {
    }
  throw r;
}
var tg = new Set();
function Ut(e, ...t) {
  tg.has(e) || (tg.add(e), console.warn(e, ...t));
}
function dn(e, t, r) {
  let n = r ? `, use ${r} instead` : "", o = `Deprecation warning: ${e} will be removed in version ${t}${n}.`;
  Ut(o);
}
var rg;
function ng({error: e, tags: t, extras: r, caller: n}) {
  Ps(rg, "Set up an error callback with setErrorReporter, or configure Sentry with initializeEnvironment");
  let o = jP(e, n);
  return rg(), o;
}
function jP(e, t) {
  return e instanceof Error ? e : new og(e, t);
}
var og = class extends Error {
  constructor(t, r) {
    let n = t ? JSON.stringify(t) : "No error message provided";
    super(n);
    if (this.message = n, r && Error.captureStackTrace)
      Error.captureStackTrace(this, r);
    else
      try {
        throw new Error();
      } catch (o) {
        this.stack = o.stack;
      }
  }
};
var Ts;
function ws() {
  return Ts || (Ts = NP(), Ts);
}
function NP() {
  var n, o, i;
  let e = window.location, t = (n = window == null ? void 0 : window.bootstrap) == null ? void 0 : n.services;
  if (t)
    return t;
  let r;
  try {
    if (r = window.top.location.origin, t = (i = (o = window.top) == null ? void 0 : o.bootstrap) == null ? void 0 : i.services, t)
      return t;
  } catch (a) {
  }
  if (r && r !== e.origin)
    throw Error(`Unexpectedly embedded by ${r} (expected ${e.origin})`);
  if (e.origin.endsWith("framer.com") || e.origin.endsWith("framer.dev"))
    throw Error("ServiceMap data was not provided in document");
  try {
    let a = new URLSearchParams(e.search).get("services") || new URLSearchParams(e.hash.substring(1)).get("services");
    a && (t = JSON.parse(a));
  } catch (a) {
  }
  if (t && typeof t == "object" && t.api)
    return t;
  throw Error("ServiceMap requested but not available");
}
function mi(e, t = 0, r = new Set()) {
  var o, i;
  if (e === null)
    return e;
  let n = typeof e;
  if (n === "function")
    return `[Function: ${(o = e.name) != null ? o : "unknown"}]`;
  if (n !== "object")
    return e;
  if (e instanceof Error)
    return `[${e.toString()}]`;
  if (r.has(e))
    return "[Circular]";
  if (t > 2)
    return "...";
  r.add(e);
  try {
    if (typeof e.toJSON == "function")
      return mi(e.toJSON(), t + 1, r);
    if (Array.isArray(e))
      return e.map((a) => mi(a, t + 1, r));
    if (Object.getPrototypeOf(e) !== Object.prototype)
      return `[Object: ${e.__class || ((i = e.constructor) == null ? void 0 : i.name)}]`;
    {
      let a = {};
      for (let [s, l] of Object.entries(e))
        a[s] = mi(l, t + 1, r);
      return a;
    }
  } catch (a) {
    return `[Throws: ${a.message}]`;
  } finally {
    r.delete(e);
  }
}
var Oe;
(function(a) {
  a[a.Trace = 0] = "Trace", a[a.Debug = 1] = "Debug", a[a.Info = 2] = "Info", a[a.Warn = 3] = "Warn", a[a.Error = 4] = "Error", a[a.NotLogging = 5] = "NotLogging";
})(Oe || (Oe = {}));
var BP = ["trace", "debug", "info", "warn", "error"], HP = [":trace", ":debug", ":info", ":warn", ":error"];
function ig(e, t) {
  for (let r of e.split(/[ ,]/)) {
    let n = r.trim();
    if (n.length === 0)
      continue;
    let o = 1, i = false;
    n.startsWith("-") && (n = n.slice(1), o = 3, i = true);
    for (let s = 0; s <= 4; s++) {
      let l = HP[s];
      if (n.endsWith(l)) {
        o = s, i && (o += 1), n = n.slice(0, n.length - l.length), n.length === 0 && (n = "*");
        break;
      }
    }
    let a = new RegExp("^" + n.replace(/[*]/g, ".*") + "$");
    for (let s of t)
      s.id.match(a) && (s.level = o);
  }
}
var Rs = class {
  constructor(t, r, n) {
    this.logger = t;
    this.level = r;
    this.parts = n;
    this.time = Date.now();
  }
  toMessage() {
    if (this.stringPrefix)
      return this.parts;
    let t = [new Date(this.time).toISOString().substr(-14, 14), BP[this.level] + ": [" + this.logger.id + "]"], r = 0;
    for (; r < this.parts.length; r++) {
      let n = this.parts[r];
      if (typeof n == "string") {
        t.push(n);
        continue;
      }
      break;
    }
    return this.stringPrefix = t.join(" "), this.parts.splice(0, r, this.stringPrefix), this.parts;
  }
  toString() {
    return this.toMessage().map((t) => {
      var o, i;
      let r = typeof t;
      if (r === "string")
        return t;
      if (r === "function")
        return `[Function: ${(o = t.name) != null ? o : "unknown"}]`;
      if (t instanceof Error)
        return (i = t.stack) != null ? i : t.toString();
      let n = JSON.stringify(mi(t));
      return (n == null ? void 0 : n.length) > 253 ? n.slice(0, 250) + "..." : n;
    }).join(" ");
  }
}, yr = "app:info", ag = typeof process != "undefined" && !!process.kill, zP = ag && !!process.env.CI;
zP ? yr = "-:warn" : ag && (yr = "");
try {
  typeof window != "undefined" && window.localStorage && (yr = window.localStorage.logLevel || yr);
} catch {
}
try {
  typeof process != "undefined" && (yr = process.env.DEBUG || yr);
} catch {
}
try {
  typeof window != "undefined" && Object.assign(window, {setLogLevel: lg});
} catch {
}
try {
  typeof window != "undefined" && window.postMessage && window.top === window && window.addEventListener("message", (e) => {
    if (!e.data || typeof e.data != "object")
      return;
    let {loggerId: t, level: r, parts: n, printed: o} = e.data;
    if (typeof t != "string" || !Array.isArray(n) || n.length < 1 || typeof r != "number")
      return;
    n[0] = n[0].replace("[", "*[");
    let i = di(t), a = new Rs(i, r, n);
    a.stringPrefix = n[0], br.push(a), !o && (i.level > r || console == null || console.log(...a.toMessage()));
  });
} catch {
}
var Es;
try {
  typeof window != "undefined" && window.postMessage && window.top !== window && (Es = (e) => {
    try {
      let t = e.toMessage().map((a) => mi(a)), r = e.logger, n = e.level, o = r.level <= e.level, i = {loggerId: r.id, level: n, parts: t, printed: o};
      window.top.postMessage(i, ws().app);
    } catch {
    }
  });
} catch {
}
var Qu = {}, br = [];
function io(e, t, r) {
  var i;
  let n = new Rs(e, t, r);
  br.push(n), Es == null || Es(n);
  let o = Date.now() - 1e3 * 60 * 60;
  for (; br.length > 1e3 || ((i = br[0]) == null ? void 0 : i.time) < o; )
    br.shift();
  return n;
}
function sg() {
  return br;
}
function di(e) {
  let t = Qu[e];
  if (t)
    return t;
  let r = new ec(e);
  return Qu[e] = r, ig(yr, [r]), r;
}
function lg(e, t = true) {
  try {
    typeof window != "undefined" && window.localStorage && (window.localStorage.logLevel = e);
  } catch {
  }
  let r = yr;
  yr = e;
  let n = Object.values(Qu);
  for (let o of n)
    o.level = 3;
  if (ig(e, n), t && br.length > 0) {
    console == null || console.log("--- LOG REPLAY ---");
    for (let o of br)
      o.logger.level > o.level || (o.level >= 3 ? console == null || console.warn(...o.toMessage()) : console == null || console.log(...o.toMessage()));
    console == null || console.log("--- END OF LOG REPLAY ---");
  }
  return r;
}
var ec = class {
  constructor(t) {
    this.id = t;
    this.level = 3;
    this.didLog = {};
    this.trace = (...t2) => {
      if (this.level > 0)
        return;
      let r = new Rs(this, 0, t2);
      console == null || console.log(...r.toMessage());
    };
    this.debug = (...t2) => {
      let r = io(this, 1, t2);
      this.level > 1 || console == null || console.log(...r.toMessage());
    };
    this.info = (...t2) => {
      let r = io(this, 2, t2);
      this.level > 2 || console == null || console.info(...r.toMessage());
    };
    this.warn = (...t2) => {
      let r = io(this, 3, t2);
      this.level > 3 || console == null || console.warn(...r.toMessage());
    };
    this.warnOncePerMinute = (t2, ...r) => {
      if (this.didLog[t2] > Date.now())
        return;
      this.didLog[t2] = Date.now() + 1e3 * 60, r.unshift(t2);
      let n = io(this, 3, r);
      this.level > 3 || console == null || console.warn(...n.toMessage());
    };
    this.error = (...t2) => {
      let r = io(this, 4, t2);
      this.level > 4 || console == null || console.error(...r.toMessage());
    };
    this.errorOncePerMinute = (t2, ...r) => {
      if (this.didLog[t2] > Date.now())
        return;
      this.didLog[t2] = Date.now() + 1e3 * 60, r.unshift(t2);
      let n = io(this, 4, r);
      this.level > 4 || console == null || console.error(...n.toMessage());
    };
    this.reportError = (t2, r) => {
      let n = sg().slice(-100).map((i) => i.toString().slice(0, 1e3)).join(`
`), o = ng({caller: this.reportError, error: t2, tags: {handler: "logger", where: this.id}, extras: {...r, logs: n}});
      r ? this.error(o, r) : this.error(o);
    };
    this.reportErrorOncePerMinute = (t2, r) => {
      !WP(t2) || this.didLog[t2.message] > Date.now() || (this.didLog[t2.message] = Date.now() + 1e3 * 60, this.reportError(t2, r));
    };
  }
  extend(t) {
    let r = this.id + ":" + t;
    return di(r);
  }
  getBufferedMessages() {
    return br.filter((t) => t.logger === this);
  }
  setLevel(t) {
    let r = this.level;
    return this.level = t, r;
  }
  isLoggingTraceMessages() {
    return this.level >= 0;
  }
};
function WP(e) {
  return Object.prototype.hasOwnProperty.call(e, "message");
}
var tc;
(function(n) {
  n.Canvas = "canvasComponent", n.Code = "codeFile", n.Screen = "screen";
})(tc || (tc = {}));
var e2 = di("task-queue");
function q(e) {
  return dn("Animatable()", "2.0.0", "the new animation API (https://www.framer.com/api/animation/)"), ae(e) ? e : new pg(e);
}
(function(o) {
  function e(i) {
    let a = Math.random(), s = new Set();
    i((c, f) => {
      c.set(f, a), s.add(c);
    }, a);
    let u = [];
    s.forEach((c) => {
      u.push(...c.finishTransaction(a));
    }), u.forEach((c) => {
      c(a);
    });
  }
  o.transaction = e;
  function t(i, a = 0) {
    return o.get(i, a);
  }
  o.getNumber = t;
  function r(i, a) {
    return i == null ? a : ae(i) ? i.get() : i;
  }
  o.get = r;
  function n(i) {
    if (!i)
      return i;
    let a = {};
    for (let s in i) {
      let l = i[s];
      ae(l) ? a[s] = l.get() : a[s] = l;
    }
    return a;
  }
  o.objectToValues = n;
})(q || (q = {}));
var ug = "onUpdate", cg = "finishTransaction";
function ae(e) {
  return e !== null && typeof e == "object" && ug in e && e[ug] instanceof Function && cg in e && e[cg] instanceof Function;
}
function GP(e, t) {
  return {interpolate(r, n) {
    let o = r.get(), i = n.get(), a = q(o);
    return (s) => {
      let l = t.interpolate(o, i)(s);
      return a.set(l), a;
    };
  }, difference(r, n) {
    let o = r.get();
    return t.difference(o, n.get());
  }};
}
var pg = class {
  constructor(t) {
    this.value = t;
    this.observers = new fi();
  }
  static interpolationFor(t, r) {
    if (ae(t))
      return GP(t, r);
  }
  get() {
    return this.value;
  }
  set(t, r) {
    let n = this.value;
    ae(t) && (t = t.get()), this.value = t;
    let o = {value: t, oldValue: n};
    this.observers.notify(o, r);
  }
  finishTransaction(t) {
    return this.observers.finishTransaction(t);
  }
  onUpdate(t) {
    return this.observers.add(t);
  }
};
function hi(e) {
  return e instanceof Function;
}
function hn(e) {
  return typeof e == "string";
}
function fg(e) {
  return typeof e == "number";
}
function Fs(e) {
  return e instanceof Array;
}
function Ms(e) {
  return typeof e == "object";
}
function $P(e, t) {
  let {_forwardedOverrideId: r, _forwardedOverrides: n, id: o} = t, i = r != null ? r : o, a = n && i ? n[i] : void 0;
  return a && typeof a == "string" && (e = {...e, src: a}), e;
}
function gi(e) {
  let {background: t, image: r} = e;
  if (r !== void 0 && t && !rt.isImageObject(t))
    return;
  let n = null;
  if (hn(r) ? n = {src: r} : n = q.get(t, null), !!rt.isImageObject(n))
    return $P(n, e);
}
function ao(e, t) {
  let r = Math.round(Math.abs(t)), n = Math.pow(10, r);
  return Math.round(e * n) / n;
}
function Pt(e, t) {
  let r = e.toFixed(t);
  return t === 0 ? r : r.replace(/\.?0+$/, "");
}
function Is(e, t) {
  return t === 0 ? Math.round(e) : (t -= t | 0, t < 0 && (t = 1 - t), Math.round(e - t) + t);
}
function Re(e, t) {
  return {x: e, y: t};
}
(function(p) {
  p.add = (...d) => d.reduce((m, h) => ({x: m.x + h.x, y: m.y + h.y}), {x: 0, y: 0}), p.subtract = (d, m) => ({x: d.x - m.x, y: d.y - m.y}), p.multiply = (d, m) => ({x: d.x * m, y: d.y * m}), p.divide = (d, m) => ({x: d.x / m, y: d.y / m}), p.absolute = (d) => ({x: Math.abs(d.x), y: Math.abs(d.y)}), p.reverse = (d) => ({x: d.x * -1, y: d.y * -1}), p.pixelAligned = (d, m = {x: 0, y: 0}) => ({x: Is(d.x, m.x), y: Is(d.y, m.y)}), p.distance = (d, m) => {
    let h = Math.abs(d.x - m.x), v = Math.abs(d.y - m.y);
    return Math.sqrt(h * h + v * v);
  }, p.angle = (d, m) => Math.atan2(m.y - d.y, m.x - d.x) * 180 / Math.PI - 90, p.isEqual = (d, m) => d.x === m.x && d.y === m.y, p.rotationNormalizer = () => {
    let d;
    return (m) => {
      typeof d != "number" && (d = m);
      let h = d - m, v = Math.abs(h) + 180, y = Math.floor(v / 360);
      return h < 180 && (m -= y * 360), h > 180 && (m += y * 360), d = m, m;
    };
  };
  function f(d, m) {
    return {x: (d.x + m.x) / 2, y: (d.y + m.y) / 2};
  }
  p.center = f;
})(Re || (Re = {}));
var ke;
(function(x) {
  function e(g, w) {
    return g === w ? true : !g || !w ? false : g.x === w.x && g.y === w.y && g.width === w.width && g.height === w.height;
  }
  x.equals = e, x.atOrigin = (g) => ({...g, x: 0, y: 0}), x.fromTwoPoints = (g, w) => ({x: Math.min(g.x, w.x), y: Math.min(g.y, w.y), width: Math.abs(g.x - w.x), height: Math.abs(g.y - w.y)}), x.fromRect = (g) => ({x: g.left, y: g.top, width: g.right - g.left, height: g.bottom - g.top}), x.multiply = (g, w) => ({x: g.x * w, y: g.y * w, width: g.width * w, height: g.height * w}), x.divide = (g, w) => x.multiply(g, 1 / w), x.offset = (g, w) => {
    let j = typeof w.x == "number" ? w.x : 0, X = typeof w.y == "number" ? w.y : 0;
    return {...g, x: g.x + j, y: g.y + X};
  };
  function s(g, w) {
    if (w === 0)
      return g;
    let j = 2 * w;
    return {x: g.x - w, y: g.y - w, width: g.width + j, height: g.height + j};
  }
  x.inflate = s, x.pixelAligned = (g) => {
    let w = Math.round(g.x), j = Math.round(g.y), X = Math.round(g.x + g.width), oe = Math.round(g.y + g.height), ne = Math.max(X - w, 0), ee = Math.max(oe - j, 0);
    return {x: w, y: j, width: ne, height: ee};
  }, x.halfPixelAligned = (g) => {
    let w = Math.round(g.x * 2) / 2, j = Math.round(g.y * 2) / 2, X = Math.round((g.x + g.width) * 2) / 2, oe = Math.round((g.y + g.height) * 2) / 2, ne = Math.max(X - w, 1), ee = Math.max(oe - j, 1);
    return {x: w, y: j, width: ne, height: ee};
  }, x.round = (g, w = 0) => {
    let j = ao(g.x, w), X = ao(g.y, w), oe = ao(g.width, w), ne = ao(g.height, w);
    return {x: j, y: X, width: oe, height: ne};
  }, x.roundToOutside = (g) => {
    let w = Math.floor(g.x), j = Math.floor(g.y), X = Math.ceil(g.x + g.width), oe = Math.ceil(g.y + g.height), ne = Math.max(X - w, 0), ee = Math.max(oe - j, 0);
    return {x: w, y: j, width: ne, height: ee};
  }, x.minX = (g) => g.x, x.maxX = (g) => g.x + g.width, x.minY = (g) => g.y, x.maxY = (g) => g.y + g.height, x.positions = (g) => ({minX: g.x, midX: g.x + g.width / 2, maxX: x.maxX(g), minY: g.y, midY: g.y + g.height / 2, maxY: x.maxY(g)}), x.center = (g) => ({x: g.x + g.width / 2, y: g.y + g.height / 2}), x.fromPoints = (g) => {
    let w = g.map((xe) => xe.x), j = g.map((xe) => xe.y), X = Math.min(...w), oe = Math.min(...j), ne = Math.max(...w) - X, ee = Math.max(...j) - oe;
    return {x: X, y: oe, width: ne, height: ee};
  }, x.merge = (...g) => {
    let w = {x: Math.min(...g.map(x.minX)), y: Math.min(...g.map(x.minY))}, j = {x: Math.max(...g.map(x.maxX)), y: Math.max(...g.map(x.maxY))};
    return x.fromTwoPoints(w, j);
  }, x.intersection = (g, w) => {
    let j = Math.max(g.x, w.x), X = Math.min(g.x + g.width, w.x + w.width), oe = Math.max(g.y, w.y), ne = Math.min(g.y + g.height, w.y + w.height);
    return {x: j, y: oe, width: X - j, height: ne - oe};
  }, x.points = (g) => [{x: x.minX(g), y: x.minY(g)}, {x: x.minX(g), y: x.maxY(g)}, {x: x.maxX(g), y: x.minY(g)}, {x: x.maxX(g), y: x.maxY(g)}], x.transform = (g, w) => {
    let {x: j, y: X} = w.transformPoint({x: g.x, y: g.y}), {x: oe, y: ne} = w.transformPoint({x: g.x + g.width, y: g.y}), {x: ee, y: xe} = w.transformPoint({x: g.x + g.width, y: g.y + g.height}), {x: Fe, y: ge} = w.transformPoint({x: g.x, y: g.y + g.height}), We = Math.min(j, oe, ee, Fe), Ue = Math.max(j, oe, ee, Fe) - We, Y = Math.min(X, ne, xe, ge), D = Math.max(X, ne, xe, ge) - Y;
    return {x: We, y: Y, width: Ue, height: D};
  }, x.containsPoint = (g, w) => !(w.x < x.minX(g) || w.x > x.maxX(g) || w.y < x.minY(g) || w.y > x.maxY(g) || isNaN(g.x) || isNaN(g.y)), x.containsRect = (g, w) => {
    for (let j of x.points(w))
      if (!x.containsPoint(g, j))
        return false;
    return true;
  }, x.toCSS = (g) => ({display: "block", transform: `translate(${g.x}px, ${g.y}px)`, width: `${g.width}px`, height: `${g.height}px`}), x.inset = (g, w) => ({x: g.x + w, y: g.y + w, width: Math.max(0, g.width - 2 * w), height: Math.max(0, g.height - 2 * w)}), x.intersects = (g, w) => !(w.x >= x.maxX(g) || x.maxX(w) <= g.x || w.y >= x.maxY(g) || x.maxY(w) <= g.y), x.overlapHorizontally = (g, w) => {
    let j = x.maxX(g), X = x.maxX(w);
    return j > w.x && X > g.x;
  }, x.overlapVertically = (g, w) => {
    let j = x.maxY(g), X = x.maxY(w);
    return j > w.y && X > g.y;
  }, x.doesNotIntersect = (g, w) => w.find((j) => x.intersects(j, g)) === void 0, x.isEqual = (g, w) => {
    if (g && w) {
      let {x: j, y: X, width: oe, height: ne} = g;
      return w.x === j && w.y === X && w.width === oe && w.height === ne;
    } else
      return g === w;
  }, x.cornerPoints = (g) => {
    let w = g.x, j = g.x + g.width, X = g.y, oe = g.y + g.height;
    return [{x: w, y: X}, {x: j, y: X}, {x: j, y: oe}, {x: w, y: oe}];
  }, x.midPoints = (g) => {
    let w = g.x, j = g.x + g.width / 2, X = g.x + g.width, oe = g.y, ne = g.y + g.height / 2, ee = g.y + g.height;
    return [{x: j, y: oe}, {x: X, y: ne}, {x: j, y: ee}, {x: w, y: ne}];
  }, x.pointDistance = (g, w) => {
    let j = 0, X = 0;
    return w.x < g.x ? j = g.x - w.x : w.x > x.maxX(g) && (j = w.x - x.maxX(g)), w.y < g.y ? X = g.y - w.y : w.y > x.maxY(g) && (X = w.y - x.maxY(g)), Re.distance({x: j, y: X}, {x: 0, y: 0});
  };
  let V = {x: 0, y: 0, width: 0, height: 0};
  x.fromAny = (g, w = V) => ({x: g.x || w.x, y: g.y || w.y, width: g.width || w.width, height: g.height || w.height});
})(ke || (ke = {}));
function k(e) {
  return typeof e == "number" && isFinite(e);
}
function XP(e) {
  return k(e) ? e : void 0;
}
function YP(e) {
  return !e || !Object.keys(e).length && e.constructor === Object;
}
function It(e) {
  return typeof e != "string" && typeof e != "number";
}
function At(e) {
  return e !== null && typeof e != "undefined" && typeof e != "boolean" && !YP(e);
}
var mg = {left: null, right: null, top: null, bottom: null, centerX: "50%", centerY: "50%", aspectRatio: null, parentSize: null, width: 100, height: 100}, H;
(function(o) {
  o[o.FixedNumber = 0] = "FixedNumber", o[o.Percentage = 1] = "Percentage", o[o.Auto = 2] = "Auto", o[o.FractionOfFreeSpace = 3] = "FractionOfFreeSpace";
})(H || (H = {}));
function dg(e) {
  return !(!At(e) || !It(e));
}
var so;
(function(t) {
  t.quickfix = (r) => ((r.widthType === 2 || r.heightType === 2) && (r.aspectRatio = null), k(r.aspectRatio) && ((r.left && r.right || r.top && r.bottom) && (r.widthType = 0, r.heightType = 0), r.left && r.right && r.top && r.bottom && (r.bottom = false), r.widthType !== 0 && r.heightType !== 0 && (r.heightType = 0)), r.left && r.right && ((r.fixedSize || r.widthType === 2) && (r.right = false), r.widthType = 0), r.top && r.bottom && ((r.fixedSize || r.heightType === 2) && (r.bottom = false), r.heightType = 0), r);
})(so || (so = {}));
function lo(e) {
  if (typeof e == "string") {
    let t = e.trim();
    if (t === "auto")
      return 2;
    if (t.endsWith("fr"))
      return 3;
    if (t.endsWith("%"))
      return 1;
  }
  return 0;
}
var mt;
(function(o) {
  o.fromProperties = (i) => {
    let {left: a, right: s, top: l, bottom: u, width: c, height: f, centerX: p, centerY: d, aspectRatio: m, autoSize: h} = i, v = so.quickfix({left: k(a) || ae(a), right: k(s) || ae(s), top: k(l) || ae(l), bottom: k(u) || ae(u), widthType: lo(c), heightType: lo(f), aspectRatio: m || null, fixedSize: h === true}), y = null, C = null, P = 0, b = 0;
    if (v.widthType !== 0 && typeof c == "string") {
      let I = parseFloat(c);
      c.endsWith("fr") ? (P = 3, y = I) : c === "auto" ? P = 2 : (P = 1, y = I / 100);
    } else
      c !== void 0 && typeof c != "string" && (y = q.getNumber(c));
    if (v.heightType !== 0 && typeof f == "string") {
      let I = parseFloat(f);
      f.endsWith("fr") ? (b = 3, C = I) : f === "auto" ? b = 2 : (b = 1, C = parseFloat(f) / 100);
    } else
      f !== void 0 && typeof f != "string" && (C = q.getNumber(f));
    let R = 0.5, E = 0.5;
    return p && (R = parseFloat(p) / 100), d && (E = parseFloat(d) / 100), {left: v.left ? q.getNumber(a) : null, right: v.right ? q.getNumber(s) : null, top: v.top ? q.getNumber(l) : null, bottom: v.bottom ? q.getNumber(u) : null, widthType: P, heightType: b, width: y, height: C, aspectRatio: v.aspectRatio || null, centerAnchorX: R, centerAnchorY: E};
  }, o.toMinSize = (i, a, s = null) => {
    let l = null, u = null, c = a ? a.width : null, f = a ? a.height : null, p = uo(i.left, i.right);
    if (c && k(p))
      l = c - p;
    else if (s && i.widthType === 2)
      l = s.width;
    else if (k(i.width))
      switch (i.widthType) {
        case 0:
          l = i.width;
          break;
        case 3:
          l = 0;
          break;
        case 1:
          c && (l = c * i.width);
          break;
      }
    let d = uo(i.top, i.bottom);
    if (f && k(d))
      u = f - d;
    else if (s && i.heightType === 2)
      u = s.height;
    else if (k(i.height))
      switch (i.heightType) {
        case 0:
          u = i.height;
          break;
        case 3:
          u = 0;
          break;
        case 1:
          f && (u = f * i.height);
          break;
      }
    return rc(l, u, i);
  }, o.toSize = (i, a, s, l) => {
    let u = null, c = null, f = a ? q.getNumber(a.width) : null, p = a ? q.getNumber(a.height) : null, d = uo(i.left, i.right);
    if (f && k(d))
      u = f - d;
    else if (s && i.widthType === 2)
      u = s.width;
    else if (k(i.width))
      switch (i.widthType) {
        case 0:
          u = i.width;
          break;
        case 3:
          u = l ? l.freeSpaceInParent.width / l.freeSpaceUnitDivisor.width * i.width : 0;
          break;
        case 1:
          f && (u = f * i.width);
          break;
      }
    let m = uo(i.top, i.bottom);
    if (p && k(m))
      c = p - m;
    else if (s && i.heightType === 2)
      c = s.height;
    else if (k(i.height))
      switch (i.heightType) {
        case 0:
          c = i.height;
          break;
        case 3:
          c = l ? l.freeSpaceInParent.height / l.freeSpaceUnitDivisor.height * i.height : 0;
          break;
        case 1:
          p && (c = p * i.height);
          break;
      }
    return rc(u, c, i);
  }, o.toRect = (i, a, s = null, l = false, u = null) => {
    let c = i.left || 0, f = i.top || 0, p = null, d = null, m = a ? q.getNumber(a.width) : null, h = a ? q.getNumber(a.height) : null, v = uo(i.left, i.right);
    if (m && k(v))
      p = m - v;
    else if (s && i.widthType === 2)
      p = s.width;
    else if (k(i.width))
      switch (i.widthType) {
        case 0:
          p = i.width;
          break;
        case 3:
          p = u ? u.freeSpaceInParent.width / u.freeSpaceUnitDivisor.width * i.width : null;
          break;
        case 1:
          m && (p = m * i.width);
          break;
      }
    let y = uo(i.top, i.bottom);
    if (h && k(y))
      d = h - y;
    else if (s && i.heightType === 2)
      d = s.height;
    else if (k(i.height))
      switch (i.heightType) {
        case 0:
          d = i.height;
          break;
        case 3:
          d = u ? u.freeSpaceInParent.height / u.freeSpaceUnitDivisor.height * i.height : null;
          break;
        case 1:
          h && (d = h * i.height);
          break;
      }
    let C = rc(p, d, i);
    p = C.width, d = C.height, i.left !== null ? c = i.left : m && i.right !== null ? c = m - i.right - p : m && (c = i.centerAnchorX * m - p / 2), i.top !== null ? f = i.top : h && i.bottom !== null ? f = h - i.bottom - d : h && (f = i.centerAnchorY * h - d / 2);
    let P = {x: c, y: f, width: p, height: d};
    return l ? ke.pixelAligned(P) : P;
  };
})(mt || (mt = {}));
var KP = 200, qP = 200;
function rc(e, t, r) {
  let n = k(e) ? e : KP, o = k(t) ? t : qP;
  return k(r.aspectRatio) && r.aspectRatio > 0 && (k(r.left) && k(r.right) ? o = n / r.aspectRatio : k(r.top) && k(r.bottom) ? n = o * r.aspectRatio : r.widthType !== 0 ? o = n / r.aspectRatio : n = o * r.aspectRatio), {width: n, height: o};
}
function uo(e, t) {
  return !k(e) || !k(t) ? null : e + t;
}
function ZP(e, t) {
  let r = {};
  return e.constraints ? r.constraints = {...e.constraints, ...t} : Object.assign(r, t), r;
}
function nc(e) {
  return typeof e == "string";
}
function JP(e) {
  let {left: t, right: r, top: n, bottom: o, center: i} = e;
  return !!([r, o].some(nc) || nc(t) && (!i || i === "y") || nc(n) && (!i || i === "x"));
}
function er(e) {
  let {_constraints: t} = e;
  return !t || JP(e) ? false : t.enabled;
}
function QP(e) {
  let {size: t} = e, {width: r, height: n} = e;
  return k(t) && (r === void 0 && (r = t), n === void 0 && (n = t)), k(r) && k(n) ? {width: r, height: n} : null;
}
function eT(e) {
  let t = QP(e);
  if (t === null)
    return null;
  let {left: r, top: n} = e;
  return k(r) && k(n) ? {x: r, y: n, ...t} : null;
}
function gn(e, t, r = true) {
  if (!er(e) || t === Ae.Disabled || t === Ae.DisabledForCurrentLevel)
    return eT(e);
  let n = tT(e);
  return mt.toRect(n, yi(t), null, r);
}
function tT(e) {
  let {left: t, right: r, top: n, bottom: o, center: i, _constraints: a, size: s} = e, {width: l, height: u} = e;
  l === void 0 && (l = s), u === void 0 && (u = s);
  let {aspectRatio: c, autoSize: f} = a, p = so.quickfix({left: k(t), right: k(r), top: k(n), bottom: k(o), widthType: lo(l), heightType: lo(u), aspectRatio: c || null, fixedSize: f === true}), d = null, m = null, h = H.FixedNumber, v = H.FixedNumber;
  if (p.widthType !== H.FixedNumber && typeof l == "string") {
    let P = parseFloat(l);
    l.endsWith("fr") ? (h = H.FractionOfFreeSpace, d = P) : l === "auto" ? h = H.Auto : (h = H.Percentage, d = P / 100);
  } else
    l !== void 0 && typeof l != "string" && (d = l);
  if (p.heightType !== H.FixedNumber && typeof u == "string") {
    let P = parseFloat(u);
    u.endsWith("fr") ? (v = H.FractionOfFreeSpace, m = P) : u === "auto" ? v = H.Auto : (v = H.Percentage, m = parseFloat(u) / 100);
  } else
    u !== void 0 && typeof u != "string" && (m = u);
  let y = 0.5, C = 0.5;
  return (i === true || i === "x") && (p.left = false, typeof t == "string" && (y = parseFloat(t) / 100)), (i === true || i === "y") && (p.top = false, typeof n == "string" && (C = parseFloat(n) / 100)), {left: p.left ? t : null, right: p.right ? r : null, top: p.top ? n : null, bottom: p.bottom ? o : null, widthType: h, heightType: v, width: d, height: m, aspectRatio: p.aspectRatio || null, centerAnchorX: y, centerAnchorY: C};
}
var Ae;
(function(n) {
  n[n.Unknown = 0] = "Unknown", n[n.Disabled = 1] = "Disabled", n[n.DisabledForCurrentLevel = 2] = "DisabledForCurrentLevel";
})(Ae || (Ae = {}));
var vi = createContext({size: 0});
function yi(e) {
  return e === 0 || e === 1 || e === 2 ? null : e;
}
function Hr() {
  return useContext(vi).size;
}
function rT(e) {
  return typeof e == "object";
}
var As = (e) => {
  let t = Hr(), {parentSize: r, children: n} = e, o = rT(r) ? [r.width, r.height] : [r, -1], i = useMemo(() => ({size: r}), o);
  return t === 1 ? n ? createElement(Fragment, null, n) : null : createElement(vi.Provider, {value: i}, n);
}, hg = vi.Consumer;
function Ds(e, t) {
  return createElement(As, {parentSize: t}, e);
}
function gg(e) {
  let t = Hr();
  return gn(e, t);
}
var vg = new Set(), bi;
function Ls(e) {
  vg.has(e) || typeof document == "undefined" || (vg.add(e), bi || (bi = document.createElement("style"), bi.type = "text/css", document.head && document.head.appendChild(bi)), bi.appendChild(document.createTextNode(e)));
}
var O;
(function(o) {
  o.canvas = "CANVAS", o.export = "EXPORT", o.thumbnail = "THUMBNAIL", o.preview = "PREVIEW";
})(O || (O = {}));
var he = {imageBaseURL: "", target: O.preview, zoom: 1};
function sT(e, t) {
  let r = Object.assign({}, he);
  Object.assign(he, e);
  let n = t();
  return Object.assign(he, r), n;
}
function lT(e) {
  Object.assign(he, e);
}
function uT(e, t, r) {
  let n = false;
  return he.imageBaseURL !== t && (he.imageBaseURL = t, n = true), he.target !== e && (he.target = e, n = true), he.zoom !== r && (he.zoom = r), {willChangeElements: n};
}
(function(r) {
  function e() {
    return he.target;
  }
  r.current = e;
  function t() {
    let n = he.target;
    return n === r.canvas || n === r.export;
  }
  r.hasRestrictions = t;
})(O || (O = {}));
var cT = `

[data-framer-component-type] {
    position: absolute;
}
`, pT = `
[data-framer-component-type="Text"] {
    cursor: inherit;
}

[data-framer-component-text-autosized] * {
    white-space: pre;
}
`, fT = `
:not([data-framer-generated]) > [data-framer-stack-content-wrapper] > *,
:not([data-framer-generated]) > [data-framer-stack-content-wrapper] > [data-framer-component-type],
:not([data-framer-generated]) > [data-framer-stack-content-wrapper] > [data-framer-stack-gap] > *,
:not([data-framer-generated]) > [data-framer-stack-content-wrapper] > [data-framer-stack-gap] > [data-framer-component-type] {
    position: relative;
}

[data-framer-stack-gap] > * {
    margin-top: calc(var(--stack-gap-y) / 2);
    margin-bottom: calc(var(--stack-gap-y) / 2);
    margin-right: calc(var(--stack-gap-x) / 2);
    margin-left: calc(var(--stack-gap-x) / 2);
}

/* This should take the language direction into account */
[data-framer-stack-direction-reverse="false"]
[data-framer-stack-gap]
> *:first-child,
[data-framer-stack-direction-reverse="true"]
[data-framer-stack-gap]
> *:last-child {
    margin-top: 0;
    margin-left: 0;
}

/* This should take the language direction into account */
[data-framer-stack-direction-reverse="false"]
[data-framer-stack-gap]
> *:last-child,
[data-framer-stack-direction-reverse="true"]
[data-framer-stack-gap]
> *:first-child {
    margin-right: 0;
    margin-bottom: 0;
}
`, mT = `
NavigationContainer
[data-framer-component-type="NavigationContainer"] > *,
[data-framer-component-type="NavigationContainer"] > [data-framer-component-type] {
    position: relative;
}
`, dT = `
[data-framer-component-type="Scroll"]::-webkit-scrollbar {
    display: none;
}
[data-framer-component-type="ScrollContentWrapper"] > * {
    position: relative;
}
`, hT = `
[data-framer-component-type="NativeScroll"] {
    -webkit-overflow-scrolling: touch;
}

[data-framer-component-type="NativeScroll"] > * {
    position: relative;
}

[data-framer-component-type="NativeScroll"].direction-both {
    overflow-x: scroll;
    overflow-y: scroll;
}

[data-framer-component-type="NativeScroll"].direction-vertical {
    overflow-x: hidden;
    overflow-y: scroll;
}

[data-framer-component-type="NativeScroll"].direction-horizontal {
    overflow-x: scroll;
    overflow-y: hidden;
}

[data-framer-component-type="NativeScroll"].direction-vertical > * {
    width: 100% !important;
}

[data-framer-component-type="NativeScroll"].direction-horizontal > * {
    height: 100% !important;
}

[data-framer-component-type="NativeScroll"].scrollbar-hidden::-webkit-scrollbar {
    display: none;
}
`, gT = `
[data-framer-component-type="PageContentWrapper"] > *,
[data-framer-component-type="PageContentWrapper"] > [data-framer-component-type] {
    position: relative;
}
`, vT = `
[data-is-present="false"], [data-is-present="false"] * {
    pointer-events: none !important;
}
`, yT = `
[data-framer-cursor="pointer"] {
    cursor: pointer;
}
[data-framer-cursor="grab"] {
    cursor: grab;
}
[data-framer-cursor="grab"]:active {
    cursor: grabbing;
}
`, bT = (e) => e ? ' [data-framer-component-type="Frame"] * { pointer-events: auto; } ' : "", xT = (e) => e ? `
        body :not(input):not(textarea):not([contenteditable="true"]) {
            user-select: none;
            -webkit-user-select: none;
        }

        [data-framer-component-type="Text"], [data-framer-component-type="Text"] * {
        pointer-events: none !important;
        user-select: none;
        -webkit-user-select: none;
    }` : "", yg = (e) => `
${cT}
${pT}
${fT}
${mT}
${dT}
${hT}
${gT}
${vT}
${yT}
${bT(e)}
${xT(e)}
`, ST = yg(false), CT = yg(true), at = () => {
  let e = O.current() === O.preview ? CT : ST;
  Ls(e);
};
function Os(e, t) {
  if (!t && (t = e.children, !t))
    return {props: e, children: t};
  let r = e._forwardedOverrides, n = e._overrideForwardingDescription;
  if (n) {
    r = void 0;
    for (let o in n) {
      let i = n[o];
      e[i] !== void 0 && (r || (r = {}, e = {...e}), r[o] = e[i], delete e[i]);
    }
  }
  return r ? (t = Children.map(t, (o) => isValidElement(o) ? cloneElement(o, {_forwardedOverrides: r}) : o), {props: e, children: t}) : {props: e, children: t};
}
function xr(e, t, r, n = false) {
  let [o, i] = t, [a, s] = r, l = a + (e - o) / (i - o) * (s - a);
  if (n === true)
    if (a < s) {
      if (l < a)
        return a;
      if (l > s)
        return s;
    } else {
      if (l > a)
        return a;
      if (l < s)
        return s;
    }
  return l;
}
function zr(e) {
  return !isNaN(e) && isFinite(e);
}
function Sr(e) {
  let t = ks(e);
  return t !== void 0 ? e.includes("%") ? t / 100 : t : 0;
}
function ks(e) {
  let t = e.match(/\d?\.?\d+/);
  return t ? Number(t[0]) : void 0;
}
var Vs = jo(xg());
var Ce;
(function(i) {
  i.RGB = "rgb", i.HSL = "hsl", i.HSV = "hsv", i.HEX = "hex", i.NAME = "name";
})(Ce || (Ce = {}));
var nt;
(function(i) {
  i.RGB = "rgb", i.RGBA = "rgba", i.HSL = "hsl", i.HSLA = "hsla", i.HUSL = "husl";
})(nt || (nt = {}));
var co = {aliceblue: "f0f8ff", antiquewhite: "faebd7", aqua: "0ff", aquamarine: "7fffd4", azure: "f0ffff", beige: "f5f5dc", bisque: "ffe4c4", black: "000", blanchedalmond: "ffebcd", blue: "00f", blueviolet: "8a2be2", brown: "a52a2a", burlywood: "deb887", burntsienna: "ea7e5d", cadetblue: "5f9ea0", chartreuse: "7fff00", chocolate: "d2691e", coral: "ff7f50", cornflowerblue: "6495ed", cornsilk: "fff8dc", crimson: "dc143c", cyan: "0ff", darkblue: "00008b", darkcyan: "008b8b", darkgoldenrod: "b8860b", darkgray: "a9a9a9", darkgreen: "006400", darkgrey: "a9a9a9", darkkhaki: "bdb76b", darkmagenta: "8b008b", darkolivegreen: "556b2f", darkorange: "ff8c00", darkorchid: "9932cc", darkred: "8b0000", darksalmon: "e9967a", darkseagreen: "8fbc8f", darkslateblue: "483d8b", darkslategray: "2f4f4f", darkslategrey: "2f4f4f", darkturquoise: "00ced1", darkviolet: "9400d3", deeppink: "ff1493", deepskyblue: "00bfff", dimgray: "696969", dimgrey: "696969", dodgerblue: "1e90ff", firebrick: "b22222", floralwhite: "fffaf0", forestgreen: "228b22", fuchsia: "f0f", gainsboro: "dcdcdc", ghostwhite: "f8f8ff", gold: "ffd700", goldenrod: "daa520", gray: "808080", green: "008000", greenyellow: "adff2f", grey: "808080", honeydew: "f0fff0", hotpink: "ff69b4", indianred: "cd5c5c", indigo: "4b0082", ivory: "fffff0", khaki: "f0e68c", lavender: "e6e6fa", lavenderblush: "fff0f5", lawngreen: "7cfc00", lemonchiffon: "fffacd", lightblue: "add8e6", lightcoral: "f08080", lightcyan: "e0ffff", lightgoldenrodyellow: "fafad2", lightgray: "d3d3d3", lightgreen: "90ee90", lightgrey: "d3d3d3", lightpink: "ffb6c1", lightsalmon: "ffa07a", lightseagreen: "20b2aa", lightskyblue: "87cefa", lightslategray: "789", lightslategrey: "789", lightsteelblue: "b0c4de", lightyellow: "ffffe0", lime: "0f0", limegreen: "32cd32", linen: "faf0e6", magenta: "f0f", maroon: "800000", mediumaquamarine: "66cdaa", mediumblue: "0000cd", mediumorchid: "ba55d3", mediumpurple: "9370db", mediumseagreen: "3cb371", mediumslateblue: "7b68ee", mediumspringgreen: "00fa9a", mediumturquoise: "48d1cc", mediumvioletred: "c71585", midnightblue: "191970", mintcream: "f5fffa", mistyrose: "ffe4e1", moccasin: "ffe4b5", navajowhite: "ffdead", navy: "000080", oldlace: "fdf5e6", olive: "808000", olivedrab: "6b8e23", orange: "ffa500", orangered: "ff4500", orchid: "da70d6", palegoldenrod: "eee8aa", palegreen: "98fb98", paleturquoise: "afeeee", palevioletred: "db7093", papayawhip: "ffefd5", peachpuff: "ffdab9", peru: "cd853f", pink: "ffc0cb", plum: "dda0dd", powderblue: "b0e0e6", purple: "800080", rebeccapurple: "663399", red: "f00", rosybrown: "bc8f8f", royalblue: "4169e1", saddlebrown: "8b4513", salmon: "fa8072", sandybrown: "f4a460", seagreen: "2e8b57", seashell: "fff5ee", sienna: "a0522d", silver: "c0c0c0", skyblue: "87ceeb", slateblue: "6a5acd", slategray: "708090", slategrey: "708090", snow: "fffafa", springgreen: "00ff7f", steelblue: "4682b4", tan: "d2b48c", teal: "008080", thistle: "d8bfd8", tomato: "ff6347", turquoise: "40e0d0", violet: "ee82ee", wheat: "f5deb3", white: "fff", whitesmoke: "f5f5f5", yellow: "ff0", yellowgreen: "9acd32"};
function Sg(e, t, r) {
  let [n, o, i] = (0, Vs.rgbToHsluv)([e / 255, t / 255, r / 255]);
  return {h: n, s: o, l: i};
}
function Cg(e, t, r, n = 1) {
  let o = (0, Vs.hsluvToRgb)([e, t, r]);
  return {r: o[0] * 255, g: o[1] * 255, b: o[2] * 255, a: n};
}
function ic(e, t, r, n) {
  let o = Math.round(e), i = Math.round(t * 100), a = Math.round(r * 100);
  return n === void 0 || n === 1 ? "hsv(" + o + ", " + i + "%, " + a + "%)" : "hsva(" + o + ", " + i + "%, " + a + "%, " + n + ")";
}
function Pg(e, t, r) {
  return {r: zr(e) ? dt(e, 255) * 255 : 0, g: zr(t) ? dt(t, 255) * 255 : 0, b: zr(r) ? dt(r, 255) * 255 : 0};
}
function ac(e, t, r, n) {
  let o = [uc(Math.round(e).toString(16)), uc(Math.round(t).toString(16)), uc(Math.round(r).toString(16))];
  return n && o[0].charAt(0) === o[0].charAt(1) && o[1].charAt(0) === o[1].charAt(1) && o[2].charAt(0) === o[2].charAt(1) ? o[0].charAt(0) + o[1].charAt(0) + o[2].charAt(0) : o.join("");
}
function _s(e, t, r) {
  let n, o, i = dt(e, 255), a = dt(t, 255), s = dt(r, 255), l = Math.max(i, a, s), u = Math.min(i, a, s), c = o = n = (l + u) / 2;
  if (l === u)
    c = o = 0;
  else {
    let f = l - u;
    switch (o = n > 0.5 ? f / (2 - l - u) : f / (l + u), l) {
      case i:
        c = (a - s) / f + (a < s ? 6 : 0);
        break;
      case a:
        c = (s - i) / f + 2;
        break;
      case s:
        c = (i - a) / f + 4;
        break;
    }
    c /= 6;
  }
  return {h: c * 360, s: o, l: n};
}
function sc(e, t, r) {
  return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? e + (t - e) * 6 * r : r < 1 / 2 ? t : r < 2 / 3 ? e + (t - e) * (2 / 3 - r) * 6 : e;
}
function Tg(e, t, r) {
  let n, o, i;
  if (e = dt(e, 360), t = dt(t * 100, 100), r = dt(r * 100, 100), t === 0)
    n = o = i = r;
  else {
    let a = r < 0.5 ? r * (1 + t) : r + t - r * t, s = 2 * r - a;
    n = sc(s, a, e + 1 / 3), o = sc(s, a, e), i = sc(s, a, e - 1 / 3);
  }
  return {r: n * 255, g: o * 255, b: i * 255};
}
function lc(e, t, r) {
  e = dt(e, 255), t = dt(t, 255), r = dt(r, 255);
  let n = Math.max(e, t, r), o = Math.min(e, t, r), i = n - o, a, s = n === 0 ? 0 : i / n, l = n;
  if (n === o)
    a = 0;
  else {
    switch (n) {
      case e:
        a = (t - r) / i + (t < r ? 6 : 0);
        break;
      case t:
        a = (r - e) / i + 2;
        break;
      case r:
        a = (e - t) / i + 4;
        break;
    }
    a /= 6;
  }
  return {h: a, s, v: l};
}
function wg(e, t, r) {
  e = dt(e, 360) * 6, t = dt(t * 100, 100), r = dt(r * 100, 100);
  let n = Math.floor(e), o = e - n, i = r * (1 - t), a = r * (1 - o * t), s = r * (1 - (1 - o) * t), l = n % 6, u = [r, a, i, i, s, r][l], c = [s, r, r, a, i, i][l], f = [i, i, s, r, r, a][l];
  return {r: u * 255, g: c * 255, b: f * 255};
}
function dt(e, t) {
  let r, n;
  if (typeof t == "string" ? r = parseFloat(t) : r = t, typeof e == "string") {
    ET(e) && (e = "100%");
    let o = FT(e);
    n = Math.min(r, Math.max(0, parseFloat(e))), o && (n = Math.floor(n * r) / 100);
  } else
    n = e;
  return Math.abs(n - r) < 1e-6 ? 1 : n % r / r;
}
function ET(e) {
  return typeof e == "string" && e.includes(".") && parseFloat(e) === 1;
}
function FT(e) {
  return typeof e == "string" && e.includes("%");
}
function uc(e) {
  return e.length === 1 ? "0" + e : "" + e;
}
var tr = function() {
  let e = "[-\\+]?\\d+%?", r = "(?:[-\\+]?\\d*\\.\\d+%?)|(?:" + e + ")", n = "[\\s|\\(]+(" + r + ")[,|\\s]+(" + r + ")[,|\\s]+(" + r + ")\\s*\\)?", o = "[\\s|\\(]+(" + r + ")[,|\\s]+(" + r + ")[,|\\s]+(" + r + ")[,|\\s]+(" + r + ")\\s*\\)?";
  return {rgb: new RegExp("rgb" + n), rgba: new RegExp("rgba" + o), hsl: new RegExp("hsl" + n), hsla: new RegExp("hsla" + o), hsv: new RegExp("hsv" + n), hsva: new RegExp("hsva" + o), hex3: /^([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/, hex6: /^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/, hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/, hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/};
}();
function xi(e) {
  if (e.includes("gradient(") || e.includes("var("))
    return false;
  let t = /^[\s,#]+/, r = /\s+$/, n = e.replace(t, "").replace(r, "").toLowerCase(), o = false;
  if (co[n] && (n = co[n], o = true), n === "transparent")
    return {r: 0, g: 0, b: 0, a: 0, format: Ce.NAME};
  let i;
  return (i = tr.rgb.exec(n)) ? {r: parseInt(i[1]), g: parseInt(i[2]), b: parseInt(i[3]), a: 1, format: Ce.RGB} : (i = tr.rgba.exec(n)) ? {r: parseInt(i[1]), g: parseInt(i[2]), b: parseInt(i[3]), a: parseFloat(i[4]), format: Ce.RGB} : (i = tr.hsl.exec(n)) ? {h: parseInt(i[1]), s: Sr(i[2]), l: Sr(i[3]), a: 1, format: Ce.HSL} : (i = tr.hsla.exec(n)) ? {h: parseInt(i[1]), s: Sr(i[2]), l: Sr(i[3]), a: parseFloat(i[4]), format: Ce.HSL} : (i = tr.hsv.exec(n)) ? {h: parseInt(i[1]), s: Sr(i[2]), v: Sr(i[3]), a: 1, format: Ce.HSV} : (i = tr.hsva.exec(n)) ? {h: parseInt(i[1]), s: Sr(i[2]), v: Sr(i[3]), a: parseFloat(i[4]), format: Ce.HSV} : (i = tr.hex8.exec(n)) ? {r: Tt(i[1]), g: Tt(i[2]), b: Tt(i[3]), a: Rg(i[4]), format: o ? Ce.NAME : Ce.HEX} : (i = tr.hex6.exec(n)) ? {r: Tt(i[1]), g: Tt(i[2]), b: Tt(i[3]), a: 1, format: o ? Ce.NAME : Ce.HEX} : (i = tr.hex4.exec(n)) ? {r: Tt(`${i[1]}${i[1]}`), g: Tt(`${i[2]}${i[2]}`), b: Tt(`${i[3]}${i[3]}`), a: Rg(i[4] + "" + i[4]), format: o ? Ce.NAME : Ce.HEX} : (i = tr.hex3.exec(n)) ? {r: Tt(`${i[1]}${i[1]}`), g: Tt(`${i[2]}${i[2]}`), b: Tt(`${i[3]}${i[3]}`), a: 1, format: o ? Ce.NAME : Ce.HEX} : false;
}
function Tt(e) {
  return parseInt(e, 16);
}
function Rg(e) {
  return Tt(e) / 255;
}
var Eg = new Map();
function z(e, t, r, n) {
  if (typeof e == "string") {
    let i = Eg.get(e);
    return i || (i = Fg(e), i === void 0 ? {...z("black"), isValid: false} : (Eg.set(e, i), i));
  }
  let o = Fg(e, t, r, n);
  return o !== void 0 ? o : {...z("black"), isValid: false};
}
function Fg(e, t, r, n) {
  if (e === "")
    return;
  let o = MT(e, t, r, n);
  if (o) {
    let i = {r: o.r, g: o.g, b: o.b, a: o.a, h: o.h, s: o.s, l: o.l, initialValue: typeof e == "string" && o.format !== Ce.HSV ? e : void 0, roundA: Math.round(100 * o.a) / 100, format: o.format, mix: z.mix, toValue: () => z.toRgbString(i)};
    return i;
  } else
    return;
}
(function(V) {
  function e(S, x) {
    return S.format === Ce.HSL ? `<${S.constructor.name} h:${S.h} s:${S.s} l:${S.l} a:${S.a}>` : S.format === Ce.HEX || S.format === Ce.NAME ? `<${S.constructor.name} "${x}">` : `<${S.constructor.name} r:${S.r} g:${S.g} b:${S.b} a:${S.a}>`;
  }
  V.inspect = e;
  function t(S) {
    return typeof S == "string" ? V.isColorString(S) : V.isColorObject(S);
  }
  V.isColor = t;
  function r(S) {
    return typeof S == "string" ? xi(S) !== false : false;
  }
  V.isColorString = r;
  function n(S) {
    return S && typeof S != "string" && typeof S.r == "number" && typeof S.g == "number" && typeof S.b == "number" && typeof S.h == "number" && typeof S.s == "number" && typeof S.l == "number" && typeof S.a == "number" && typeof S.roundA == "number" && typeof S.format == "string";
  }
  V.isColorObject = n;
  function o(S) {
    return V.toRgbString(S);
  }
  V.toString = o;
  function i(S, x = false) {
    return ac(S.r, S.g, S.b, x);
  }
  V.toHex = i;
  function a(S, x = false) {
    return `#${V.toHex(S, x)}`;
  }
  V.toHexString = a;
  function s(S) {
    return S.a === 1 ? "rgb(" + Math.round(S.r) + ", " + Math.round(S.g) + ", " + Math.round(S.b) + ")" : "rgba(" + Math.round(S.r) + ", " + Math.round(S.g) + ", " + Math.round(S.b) + ", " + S.roundA + ")";
  }
  V.toRgbString = s;
  function l(S) {
    return {...Sg(S.r, S.g, S.b), a: S.roundA};
  }
  V.toHusl = l;
  function u(S) {
    let x = V.toHsl(S), g = Math.round(x.h), w = Math.round(x.s * 100), j = Math.round(x.l * 100);
    return S.a === 1 ? "hsl(" + g + ", " + w + "%, " + j + "%)" : "hsla(" + g + ", " + w + "%, " + j + "%, " + S.roundA + ")";
  }
  V.toHslString = u;
  function c(S) {
    let x = lc(S.r, S.g, S.b);
    return {h: x.h * 360, s: x.s, v: x.v, a: S.a};
  }
  V.toHsv = c;
  function f(S) {
    let x = lc(S.r, S.g, S.b), g = Math.round(x.h * 360), w = Math.round(x.s * 100), j = Math.round(x.v * 100);
    return S.a === 1 ? "hsv(" + g + ", " + w + "%, " + j + "%)" : "hsva(" + g + ", " + w + "%, " + j + "%, " + S.roundA + ")";
  }
  V.toHsvString = f;
  function p(S) {
    if (S.a === 0)
      return "transparent";
    if (S.a < 1)
      return false;
    let x = ac(S.r, S.g, S.b, true);
    for (let g of Object.keys(co))
      if (co[g] === x)
        return g;
    return false;
  }
  V.toName = p;
  function d(S) {
    return {h: Math.round(S.h), s: S.s, l: S.l, a: S.a};
  }
  V.toHsl = d;
  function m(S) {
    return {r: Math.round(S.r), g: Math.round(S.g), b: Math.round(S.b), a: S.a};
  }
  V.toRgb = m;
  function h(S, x = 10) {
    let g = V.toRgb(S);
    return g.r = Math.max(0, Math.min(255, g.r - Math.round(255 * -(x / 100)))), g.g = Math.max(0, Math.min(255, g.g - Math.round(255 * -(x / 100)))), g.b = Math.max(0, Math.min(255, g.b - Math.round(255 * -(x / 100)))), V(g);
  }
  V.brighten = h;
  function v(S, x = 10) {
    let g = V.toHsl(S);
    return g.l += x / 100, g.l = Math.min(1, Math.max(0, g.l)), V(g);
  }
  V.lighten = v;
  function y(S, x = 10) {
    let g = V.toHsl(S);
    return g.l -= x / 100, g.l = Math.min(1, Math.max(0, g.l)), V(g);
  }
  V.darken = y;
  function C(S, x = 10) {
    let g = V.toHsl(S);
    return g.s += x / 100, g.s = Math.min(1, Math.max(0, g.s)), V(g);
  }
  V.saturate = C;
  function P(S, x = 10) {
    let g = V.toHsl(S);
    return g.s -= x / 100, g.s = Math.min(1, Math.max(0, g.s)), V(g);
  }
  V.desaturate = P;
  function b(S) {
    return V.desaturate(S, 100);
  }
  V.grayscale = b;
  function R(S, x) {
    let g = V.toHsl(S);
    return g.h += x, g.h = g.h > 360 ? g.h - 360 : g.h, V(g);
  }
  V.hueRotate = R;
  function E(S, x = 1) {
    return V({r: S.r, g: S.g, b: S.b, a: x});
  }
  V.alpha = E;
  function I(S) {
    return V.alpha(S, 0);
  }
  V.transparent = I;
  function M(S, x = 1) {
    return V({r: S.r, g: S.g, b: S.b, a: S.a * x});
  }
  V.multiplyAlpha = M;
  function A(S, x, g = nt.RGB) {
    if (!V.isColorObject(S) || !V.isColorObject(x))
      throw new TypeError("Both arguments for Color.interpolate must be Color objects");
    return (w) => V.mixAsColor(S, x, w, false, g);
  }
  V.interpolate = A;
  function L(S, x, {model: g = nt.RGB} = {}) {
    let w = typeof S == "string" ? V(S) : S, j = V.interpolate(w, x, g);
    return (X) => V.toRgbString(j(X));
  }
  V.mix = L;
  function U(S, x, g = 0.5, w = false, j = nt.RGB) {
    let X = null;
    if (cc.isRGB(j))
      X = V({r: xr(g, [0, 1], [S.r, x.r], w), g: xr(g, [0, 1], [S.g, x.g], w), b: xr(g, [0, 1], [S.b, x.b], w), a: xr(g, [0, 1], [S.a, x.a], w)});
    else {
      let oe, ne;
      cc.isHSL(j) ? (oe = V.toHsl(S), ne = V.toHsl(x)) : (oe = V.toHusl(S), ne = V.toHusl(x)), oe.s === 0 ? oe.h = ne.h : ne.s === 0 && (ne.h = oe.h);
      let ee = oe.h, xe = ne.h, Fe = xe - ee;
      Fe > 180 ? Fe = xe - 360 - ee : Fe < -180 && (Fe = xe + 360 - ee);
      let ge = {h: xr(g, [0, 1], [ee, ee + Fe], w), s: xr(g, [0, 1], [oe.s, ne.s], w), l: xr(g, [0, 1], [oe.l, ne.l], w), a: xr(g, [0, 1], [S.a, x.a], w)};
      cc.isHSL(j) ? X = V(ge) : X = V(Cg(ge.h, ge.s, ge.l, ge.a));
    }
    return X;
  }
  V.mixAsColor = U;
  function $(S = 1) {
    function x() {
      return Math.floor(Math.random() * 255);
    }
    return V("rgba(" + x() + ", " + x() + ", " + x() + ", " + S + ")");
  }
  V.random = $;
  function G(S = 0.5, x = 1) {
    return S = Math.floor(S * 255), V("rgba(" + S + ", " + S + ", " + S + ", " + x + ")");
  }
  V.grey = G, V.gray = V.grey;
  function te(S, x, g) {
    return _s(S, x, g);
  }
  V.rgbToHsl = te, V.isValidColorProperty = function(S, x) {
    return !!((S.toLowerCase().slice(-5) === "color" || S === "fill" || S === "stroke") && typeof x == "string" && V.isColorString(x));
  };
  function B(S, x) {
    let g = (S.r + x.r) / 2, w = S.r - x.r, j = S.g - x.g, X = S.b - x.b, oe = Math.pow(w, 2), ne = Math.pow(j, 2), ee = Math.pow(X, 2);
    return Math.sqrt(2 * oe + 4 * ne + 3 * ee + g * (oe - ee) / 256);
  }
  V.difference = B;
  function K(S, x, g = 0.1) {
    return !(Math.abs(S.r - x.r) >= g || Math.abs(S.g - x.g) >= g || Math.abs(S.b - x.b) >= g || Math.abs(S.a - x.a) * 256 >= g);
  }
  V.equal = K;
})(z || (z = {}));
var cc = {isRGB(e) {
  return e === nt.RGB || e === nt.RGBA;
}, isHSL(e) {
  return e === nt.HSL || e === nt.HSLA;
}};
function MT(e, t, r, n = 1) {
  let o;
  return typeof e == "number" && !Number.isNaN(e) && typeof t == "number" && !Number.isNaN(t) && typeof r == "number" && !Number.isNaN(r) ? o = pc({r: e, g: t, b: r, a: n}) : typeof e == "string" ? o = IT(e) : typeof e == "object" && (e.hasOwnProperty("r") && e.hasOwnProperty("g") && e.hasOwnProperty("b") ? o = pc(e) : o = Mg(e)), o;
}
function IT(e) {
  let t = xi(e);
  if (t)
    return t.format === Ce.HSL ? Mg(t) : t.format === Ce.HSV ? AT(t) : pc(t);
}
function AT(e) {
  let t = wg(e.h, e.s, e.v);
  return {..._s(t.r, t.g, t.b), ...t, format: Ce.RGB, a: e.a !== void 0 ? Ig(e.a) : 1};
}
function pc(e) {
  let t = Pg(e.r, e.g, e.b);
  return {..._s(t.r, t.g, t.b), ...t, format: Ce.RGB, a: e.a !== void 0 ? Ig(e.a) : 1};
}
function Mg(e) {
  let t, r, n, o = {r: 0, g: 0, b: 0}, i = {h: 0, s: 0, l: 0};
  return t = zr(e.h) ? e.h : 0, t = (t + 360) % 360, r = zr(e.s) ? e.s : 1, typeof e.s == "string" && (r = ks(e.s)), n = zr(e.l) ? e.l : 0.5, typeof e.l == "string" && (n = ks(e.l)), o = Tg(t, r, n), i = {h: t, s: r, l: n}, {...o, ...i, a: e.a === void 0 ? 1 : e.a, format: Ce.HSL};
}
function Ig(e) {
  return e = parseFloat(e), e < 0 && (e = 0), (isNaN(e) || e > 1) && (e = 1), e;
}
var st;
(function(P) {
  function e(b, R) {
    return z.toHslString(z.hueRotate(z(b), R));
  }
  P.hueRotate = e;
  function t(b, R) {
    return z.toRgbString(z.alpha(z(b), R));
  }
  P.setAlpha = t;
  function r(b) {
    let R = xi(b);
    return R ? R.a : 1;
  }
  P.getAlpha = r;
  function n(b, R) {
    return z.toRgbString(z.multiplyAlpha(z(b), R));
  }
  P.multiplyAlpha = n;
  function o(b) {
    return z.toHexString(z(b)).toUpperCase();
  }
  P.toHex = o;
  function i(b) {
    return z.toRgb(z(b));
  }
  P.toRgb = i;
  function a(b) {
    return z.toRgbString(z(b));
  }
  P.toRgbString = a;
  function s(b) {
    return z.toHsv(z(b));
  }
  P.toHSV = s;
  function l(b) {
    return z.toHsl(z(b));
  }
  P.toHSL = l;
  function u(b) {
    return z.toHslString(z(b));
  }
  P.toHslString = u;
  function c(b) {
    return z.toHsvString(z(b));
  }
  P.toHsvString = c;
  function f(b) {
    return z.toHslString(z(ic(b.h, b.s, b.v, b.a)));
  }
  P.hsvToHSLString = f;
  function p(b) {
    return ic(b.h, b.s, b.v);
  }
  P.hsvToString = p;
  function d(b) {
    return z.toRgbString(z(b));
  }
  P.rgbaToString = d;
  function m(b) {
    return z.toRgbString(z(b));
  }
  P.hslToString = m;
  function h(b) {
    return z.toRgbString(z({h: b, s: 1, l: 0.5, a: 1}));
  }
  P.toColorPickerSquare = h;
  function v(b) {
    return z(b).isValid !== false;
  }
  P.isValid = v;
  function y(b, R) {
    return typeof b == "string" && (b = z(b)), typeof R == "string" && (R = z(R)), z.equal(b, R);
  }
  P.equals = y;
  function C(b) {
    let R = z(b);
    return R.a !== 1 ? z.toRgbString(R) : z.toHexString(R);
  }
  P.toHexOrRgbaString = C;
})(st || (st = {}));
var DT = (e) => Boolean(e && typeof e == "object" && e.mix && e.toValue), LT = (e) => e === "background" || e.endsWith("color") || e.endsWith("Color"), Ag = (e, t) => t && typeof t == "object" ? (ye(DT(t), "Motion styles must be numbers, strings, or an instance with a `toValue` and `mix` methods."), t.toValue()) : LT(e) && typeof t == "string" && z.isColor(t) ? z(t).toValue() : t, OT = (e, t) => {
  if (Array.isArray(t)) {
    let r = t.length, n = [];
    for (let o = 0; o < r; o++)
      n.push(Ag(e, t[o]));
    return n;
  } else
    return Ag(e, t);
}, kT = {size: {set: (e, t, r) => {
  e.height === void 0 && (t.height = r), e.width === void 0 && (t.width = r);
}, type: J}, radius: {set: (e, t, r) => {
  t.borderRadius = r;
}, type: J}, shadow: {set: (e, t, r) => {
  t.boxShadow = r;
}, type: Ye}}, Dg = (e) => {
  let t = {};
  for (let r in e) {
    let n = OT(r, e[r]), o = kT[r];
    if (o) {
      let a = o.type && typeof e[r] == "number" ? o.type.transform(e[r]) : e[r];
      o.set(e, t, a);
    } else
      t[r] = n;
  }
  return t;
};
var Lg = Array.isArray, Og = Object.keys, VT = Object.prototype.hasOwnProperty;
function fc(e, t, r) {
  if (e === t)
    return true;
  if (e && t && typeof e == "object" && typeof t == "object") {
    let n = Lg(e), o = Lg(t), i, a, s;
    if (n && o) {
      if (a = e.length, a !== t.length)
        return false;
      for (i = a; i-- != 0; )
        if (!r && e[i] !== t[i] || r && !fc(e[i], t[i], true))
          return false;
      return true;
    }
    if (n !== o)
      return false;
    let l = e instanceof Date, u = t instanceof Date;
    if (l !== u)
      return false;
    if (l && u)
      return e.getTime() === t.getTime();
    let c = e instanceof RegExp, f = t instanceof RegExp;
    if (c !== f)
      return false;
    if (c && f)
      return e.toString() === t.toString();
    if (typeof e.equals == "function" && typeof t.equals == "function")
      return e.equals(t);
    let p = Og(e);
    if (a = p.length, a !== Og(t).length)
      return false;
    for (i = a; i-- != 0; )
      if (!VT.call(t, p[i]))
        return false;
    for (i = a; i-- != 0; )
      if (s = p[i], !(s === "_owner" && e.$$typeof) && (!r && e[s] !== t[s] || r && !fc(e[s], t[s], true)))
        return false;
    return true;
  }
  return e !== e && t !== t;
}
function Si(e, t, r = true) {
  try {
    return fc(e, t, r);
  } catch (n) {
    if (n.message && n.message.match(/stack|recursion/i) || n.number === -2146828260)
      return console.warn("Warning: isEqual does not handle circular references.", n.name, n.message), false;
    throw n;
  }
}
function js(e, t, r, n = true) {
  if (!e)
    return;
  let o = r || e.style[t], i = () => {
    e.style[t] = o;
  };
  e.style[t] = null, n ? Promise.resolve().then(i) : setTimeout(i, 0);
}
function kg() {
  if (typeof N != "undefined" && N.ReactDOM)
    return N.ReactDOM;
}
function Vg(e) {
  let t = kg();
  return t ? t.findDOMNode(e) : null;
}
var mo = {};
Mx(mo, {deviceFont: () => Ws, deviceOS: () => Ec, devicePixelRatio: () => Hg, deviceType: () => Ci, environment: () => Ug, isAndroid: () => gc, isBrowser: () => mc, isChrome: () => po, isDataUrl: () => Pc, isDesktop: () => jg, isEdge: () => Bs, isFileUrl: () => Cc, isFirefox: () => hc, isFramerX: () => Ns, isIOS: () => vc, isJP2Supported: () => zg, isLocalAssetUrl: () => Bg, isLocalServerUrl: () => Rc, isLocalUrl: () => zs, isMacOS: () => yc, isMobile: () => Ng, isPhone: () => xc, isRelativeUrl: () => wc, isSafari: () => fo, isTablet: () => Sc, isTest: () => Tc, isTouch: () => Hs, isWebKit: () => dc, isWebPSupported: () => Wg, isWindows: () => bc, webkitVersion: () => _g});
var mc = () => typeof document == "object", dc = () => navigator.userAgent.includes("AppleWebKit/") && !po() && !Bs(), _g = () => {
  let e = -1, r = /AppleWebKit\/([\d.]+)/.exec(navigator.userAgent);
  return r && (e = parseFloat(r[1])), e;
}, po = () => /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor) && !Bs(), fo = () => /Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor), hc = () => /Firefox\/\d+\.\d+$/.test(navigator.userAgent), Ns = () => /FramerX/.test(navigator.userAgent), Bs = () => /Edg\//.test(navigator.userAgent), gc = () => /(android)/i.test(navigator.userAgent), vc = () => /(iPhone|iPod|iPad)/i.test(navigator.platform), yc = () => /Mac/.test(navigator.platform), bc = () => /Win/.test(navigator.platform), Hs = () => N.ontouchstart === null && N.ontouchmove === null && N.ontouchend === null, jg = () => Ci() === "desktop", xc = () => Ci() === "phone", Sc = () => Ci() === "tablet", Ng = () => xc() || Sc(), Cc = (e) => e.startsWith("file://"), Pc = (e) => e.startsWith("data:"), Tc = () => false, wc = (e) => !/^([a-zA-Z]{1,8}:\/\/).*$/.test(e), Rc = (e) => /[a-zA-Z]{1,8}:\/\/127\.0\.0\.1/.test(e) || /[a-zA-Z]{1,8}:\/\/localhost/.test(e), zs = (e) => !!(Cc(e) || Rc(e)), Bg = (e, t) => (t === null && (t = N.location.href), Pc(e) ? false : !!(zs(e) || wc(e) && zs(t))), Hg = () => N.devicePixelRatio, zg = function() {
  return hc() ? false : dc();
}, Wg = () => po(), Ci = () => /(tablet)|(iPad)|(Nexus 9)/i.test(navigator.userAgent) ? "tablet" : /(mobi)/i.test(navigator.userAgent) ? "phone" : "desktop", Ec = () => {
  if (yc())
    return "macos";
  if (vc())
    return "ios";
  if (gc())
    return "android";
  if (bc())
    return "windows";
}, Ws = (e) => {
  e || (e = Ec());
  let t = {apple: "-apple-system, BlinkMacSystemFont, SF Pro Text, SF UI Text, Helvetica Neue", google: "Roboto, Helvetica Neue", microsoft: "Segoe UI, Helvetica Neue"};
  return e === "macos" || e === "ios" ? t.apple : e === "android" ? t.google : e === "windows" ? t.microsoft : t.apple;
}, Ug = {isWebKit: dc, webkitVersion: _g, isChrome: po, isSafari: fo, isFirefox: hc, isFramerX: Ns, isEdge: Bs, isAndroid: gc, isIOS: vc, isMacOS: yc, isWindows: bc, isTouch: Hs, isDesktop: jg, isPhone: xc, isTablet: Sc, isMobile: Ng, isFileUrl: Cc, isDataUrl: Pc, isRelativeUrl: wc, isLocalServerUrl: Rc, isLocalUrl: zs, isLocalAssetUrl: Bg, devicePixelRatio: Hg, isJP2Supported: zg, isWebPSupported: Wg, deviceType: Ci, deviceOS: Ec, deviceFont: Ws};
var Gg = "0.000001px", Fc = ` translateZ(${Gg})`, $g = Ns() || fo() || Tc();
function Xg(e) {
  e.willChange = "transform";
  let t = O.current() === O.canvas;
  $g && t && (e.translateZ = Gg);
}
function Pi(e) {
  e.willChange = "transform", _T(e, true);
}
function _T(e, t) {
  let r = O.current() === O.canvas;
  if (!$g || !r)
    return;
  let n = e.transform || "";
  t ? n.includes(Fc) || (e.transform = n + Fc) : e.transform = n.replace(Fc, "");
}
var Pe = class extends Component {
  static applyWillChange(t, r, n) {
    t.willChangeTransform && (n ? Xg(r) : Pi(r));
  }
  shouldComponentUpdate(t, r) {
    return t._needsMeasure || this.state !== r || !Si(this.props, t);
  }
  componentDidUpdate(t) {
    let r = Vg(this);
    this.props.clip && this.props.radius === 0 && t.radius !== 0 && js(r, "overflow", "hidden", false);
  }
};
Pe.defaultProps = {};
function me(e, t, r, n) {
  if (n === void 0 && (n = t), e[t] !== void 0) {
    r[n] = e[t];
    return;
  }
}
var Yg = (e) => {
  let t = 0, r, n;
  if (e.length === 0)
    return t;
  for (r = 0; r < e.length; r++)
    n = e.charCodeAt(r), t = (t << 5) - t + n, t |= 0;
  return t;
};
function BT(e, t) {
  if (e.size < t)
    return;
  let n = Math.round(Math.random());
  for (let o of e.keys())
    (++n & 1) != 1 && e.delete(o);
}
function Mc(e, t, r, n) {
  let o = t.get(r);
  if (o)
    return o;
  BT(t, e);
  let i = n(r);
  return t.set(r, i), i;
}
var HT = /var\(.+\)/, zT = new Map();
function WT(e, t) {
  let r = [e, t];
  return HT.test(e) ? e : Mc(1e3, zT, r, () => st.multiplyAlpha(e, t));
}
function Wr(e, t = 1) {
  let r;
  return "stops" in e ? r = e.stops : r = [{value: e.start, position: 0}, {value: e.end, position: 1}], t === 1 ? r : r.map((n) => ({...n, value: WT(n.value, t)}));
}
function Us(e, t) {
  let r = 0;
  return Wr(e, t).forEach((n) => {
    r ^= Yg(n.value) ^ n.position;
  }), r;
}
var UT = ["start", "end"];
function Gs(e) {
  return e && UT.every((t) => t in e);
}
var GT = ["stops"];
function $s(e) {
  return e && GT.every((t) => t in e);
}
var $T = ["angle", "alpha"], qe;
(function(n) {
  function e(o) {
    return o && $T.every((i) => i in o) && (Gs(o) || $s(o));
  }
  n.isLinearGradient = e;
  function t(o) {
    return o.angle ^ Us(o, o.alpha);
  }
  n.hash = t;
  function r(o, i) {
    let a = Wr(o, o.alpha), s = i !== void 0 ? i : o.angle, l = a.map((u) => `${u.value} ${u.position * 100}%`);
    return `linear-gradient(${s}deg, ${l.join(", ")})`;
  }
  n.toCSS = r;
})(qe || (qe = {}));
var XT = ["widthFactor", "heightFactor", "centerAnchorX", "centerAnchorY", "alpha"], Ze;
(function(n) {
  function e(o) {
    return o && XT.every((i) => i in o) && (Gs(o) || $s(o));
  }
  n.isRadialGradient = e;
  function t(o) {
    return o.centerAnchorX ^ o.centerAnchorY ^ o.widthFactor ^ o.heightFactor ^ Us(o, o.alpha);
  }
  n.hash = t;
  function r(o) {
    let {alpha: i, widthFactor: a, heightFactor: s, centerAnchorX: l, centerAnchorY: u} = o, f = Wr(o, i).map((p) => `${p.value} ${p.position * 100}%`);
    return `radial-gradient(${a * 100}% ${s * 100}% at ${l * 100}% ${u * 100}%, ${f.join(", ")})`;
  }
  n.toCSS = r;
})(Ze || (Ze = {}));
var De = (e) => e instanceof un;
function Xs({background: e, backgroundColor: t}, r) {
  t ? typeof t == "string" || De(t) ? r.backgroundColor = t : z.isColorObject(e) && (r.backgroundColor = e.initialValue || z.toRgbString(e)) : e && (e = q.get(e, null), typeof e == "string" || De(e) ? r.background = e : qe.isLinearGradient(e) ? r.background = qe.toCSS(e) : Ze.isRadialGradient(e) ? r.background = Ze.toCSS(e) : z.isColorObject(e) && (r.backgroundColor = e.initialValue || z.toRgbString(e)));
}
function Kg(e) {
  return e ? e.left !== void 0 && e.right !== void 0 : false;
}
function qg(e) {
  return e ? e.top !== void 0 && e.bottom !== void 0 : false;
}
function Zg(e) {
  if (!e)
    return {};
  let t = {};
  return e.preserve3d === true ? t.transformStyle = "preserve-3d" : e.preserve3d === false && (t.transformStyle = "flat"), e.backfaceVisible === true ? t.backfaceVisibility = "visible" : e.backfaceVisible === false && (t.backfaceVisibility = "hidden"), t.backfaceVisibility && (t.WebkitBackfaceVisibility = t.backfaceVisibility), e.perspective !== void 0 && (t.perspective = t.WebkitPerspective = e.perspective), e.__fromCanvasComponent || (e.center === true ? (t.left = "50%", t.top = "50%") : e.center === "x" ? t.left = "50%" : e.center === "y" && (t.top = "50%")), me(e, "size", t), me(e, "width", t), me(e, "height", t), me(e, "minWidth", t), me(e, "minHeight", t), me(e, "top", t), me(e, "right", t), me(e, "bottom", t), me(e, "left", t), me(e, "position", t), me(e, "overflow", t), me(e, "opacity", t), (!e._border || !e._border.borderWidth) && me(e, "border", t), me(e, "borderRadius", t), me(e, "radius", t, "borderRadius"), me(e, "color", t), me(e, "shadow", t, "boxShadow"), me(e, "x", t), me(e, "y", t), me(e, "z", t), me(e, "rotate", t), me(e, "rotateX", t), me(e, "rotateY", t), me(e, "rotateZ", t), me(e, "scale", t), me(e, "scaleX", t), me(e, "scaleY", t), me(e, "skew", t), me(e, "skewX", t), me(e, "skewY", t), me(e, "originX", t), me(e, "originY", t), me(e, "originZ", t), Xs(e, t), t;
}
var Cr = createContext({getLayoutId: (e) => null, persistLayoutIdCache: () => {
}, top: false, enabled: true});
function ev({children: e}) {
  if (useContext(Cr).top)
    return createElement(Fragment, null, e);
  let r = useRef({byId: {}, byName: {}, byLastId: {}, byPossibleId: {}, byLastName: {}, byLayoutId: {}, count: {byId: {}, byName: {}}}), n = useRef({byId: {}, byName: {}, byLastId: {}, byPossibleId: {}, byLastName: {}, byLayoutId: {}}), o = useRef(new Set()).current, i = useCallback(({id: l, name: u, duplicatedFrom: c}) => {
    if (!l)
      return null;
    let f = u ? "byName" : "byId", p = r.current[f][l];
    if (p)
      return p;
    let d = u || l;
    if (!c && !o.has(d) && (!r.current.byLayoutId[d] || r.current.byLayoutId[d] === d))
      return r.current.count[f][d] === void 0 && (r.current.count[f][d] = 0, r.current.byLayoutId[d] = d, n.current[f][l] = d), o.add(d), d;
    let m;
    if (c == null ? void 0 : c.length)
      for (let E = c.length - 1; E >= 0; E--) {
        let I = c[E], M = r.current[f][I], A = r.current.byLastId[I];
        if (A && !m) {
          let $ = r.current.byLayoutId[A], G = !$ || $ === u;
          A && !o.has(A) && (u ? G : true) && (m = [A, I]);
        }
        let L = r.current.byLayoutId[M], U = !L || L === u;
        if (M && !o.has(M) && (u ? U : true))
          return n.current[f][l] = M, n.current.byLastId[I] = M, o.add(M), M;
      }
    let h = r.current.byLastId[l];
    if (h && !o.has(h))
      return o.add(h), n.current.byId[l] = h, h;
    if (m) {
      let [E, I] = m;
      return n.current[f][l] = E, n.current.byLastId[I] = E, o.add(E), E;
    }
    let v = r.current.byPossibleId[l];
    if (v && !o.has(v))
      return o.add(v), n.current.byId[l] = v, v;
    let y = c == null ? void 0 : c[0], C = u || y || l, P = r.current.count[f][C] + 1 || 0, {layoutId: b, value: R} = KT(C, P, o);
    if (r.current.count[f][C] = R, n.current[f][l] = b, (c == null ? void 0 : c.length) && !u && (n.current.byLastId[c[c.length - 1]] = b, c.length > 1))
      for (let E = 0; E < c.length - 1; E++) {
        let I = c[E];
        n.current.byPossibleId[I] || (n.current.byPossibleId[I] = b);
      }
    return n.current.byLayoutId[b] = d, o.add(b), b;
  }, []), a = useCallback(() => {
    r.current = {byId: {...r.current.byId, ...n.current.byId}, byLastId: {...r.current.byLastId, ...n.current.byLastId}, byPossibleId: {...r.current.byPossibleId, ...n.current.byPossibleId}, byName: {...r.current.byName, ...n.current.byName}, byLastName: {...r.current.byLastName, ...n.current.byLastName}, byLayoutId: {...r.current.byLayoutId, ...n.current.byLayoutId}, count: {...r.current.count, byName: {}}}, n.current = {byId: {}, byName: {}, byLastId: {}, byPossibleId: {}, byLastName: {}, byLayoutId: {}}, o.clear();
  }, []), s = useRef({getLayoutId: i, persistLayoutIdCache: a, top: true, enabled: true}).current;
  return createElement(Cr.Provider, {value: s}, e);
}
function KT(e, t, r) {
  let n = t, o = n ? `${e}-${n}` : e;
  for (; r.has(o); )
    n++, o = `${e}-${n}`;
  return {layoutId: o, value: n};
}
function Ti({enabled: e = true, ...t}) {
  let r = useContext(Cr), n = useMemo(() => ({...r, enabled: e}), [e]);
  return createElement(Cr.Provider, {...t, value: n});
}
function lt(e, {specificLayoutId: t, postfix: r} = {}) {
  let {name: n, layoutIdKey: o, duplicatedFrom: i, __fromCodeComponentNode: a = false} = e, {getLayoutId: s, enabled: l} = useContext(Cr);
  return useMemo(() => {
    if (!l)
      return e.layoutId;
    let u = t || e.layoutId;
    if (!u && (!o || a))
      return;
    let c = u || s({id: o, name: n, duplicatedFrom: i});
    if (!!c)
      return r ? `${c}-${r}` : c;
  }, [l]);
}
function Ur(e) {
  return (t, r) => e === true ? `translate(-50%, -50%) ${r}` : e === "x" ? `translateX(-50%) ${r}` : e === "y" ? `translateY(-50%) ${r}` : r || "none";
}
var tv = (e) => () => {
  Ut(e);
}, rv = {useImageSource(e) {
  return e.src;
}, useImageElement(e, t, r) {
  let n = new Image();
  return n.src = Be.useImageSource(e, t, r), n;
}}, nv = false, ew = {get(e, t, r) {
  return Reflect.has(e, t) ? Reflect.get(e, t, r) : tv(nv ? `${String(t)} is not available in this version of Framer.` : `${String(t)} is only available inside of Framer. https://www.framer.com/`);
}}, Be = new Proxy(rv, ew);
function tw(e) {
  Object.assign(rv, e), nv = true;
}
function vn(e) {
  return e.replace(/^id_/, "").replace(/\\/g, "");
}
var wt = createContext(false);
function Ks() {
  let [e, t] = useState(0);
  return useCallback(() => t((r) => r + 1), []);
}
var Dt = [];
var ov = function() {
  return Dt.some(function(e) {
    return e.activeTargets.length > 0;
  });
};
var iv = function() {
  return Dt.some(function(e) {
    return e.skippedTargets.length > 0;
  });
};
var av = "ResizeObserver loop completed with undelivered notifications.", sv = function() {
  var e;
  typeof ErrorEvent == "function" ? e = new ErrorEvent("error", {message: av}) : (e = document.createEvent("Event"), e.initEvent("error", false, false), e.message = av), window.dispatchEvent(e);
};
var yn;
(function(e) {
  e.BORDER_BOX = "border-box", e.CONTENT_BOX = "content-box", e.DEVICE_PIXEL_CONTENT_BOX = "device-pixel-content-box";
})(yn || (yn = {}));
var Gt = function(e) {
  return Object.freeze(e);
};
var Ac = function() {
  function e(t, r) {
    this.inlineSize = t, this.blockSize = r, Gt(this);
  }
  return e;
}();
var Dc = function() {
  function e(t, r, n, o) {
    return this.x = t, this.y = r, this.width = n, this.height = o, this.top = this.y, this.left = this.x, this.bottom = this.top + this.height, this.right = this.left + this.width, Gt(this);
  }
  return e.prototype.toJSON = function() {
    var t = this, r = t.x, n = t.y, o = t.top, i = t.right, a = t.bottom, s = t.left, l = t.width, u = t.height;
    return {x: r, y: n, top: o, right: i, bottom: a, left: s, width: l, height: u};
  }, e.fromRect = function(t) {
    return new e(t.x, t.y, t.width, t.height);
  }, e;
}();
var wi = function(e) {
  return e instanceof SVGElement && "getBBox" in e;
}, qs = function(e) {
  if (wi(e)) {
    var t = e.getBBox(), r = t.width, n = t.height;
    return !r && !n;
  }
  var o = e, i = o.offsetWidth, a = o.offsetHeight;
  return !(i || a || e.getClientRects().length);
}, Lc = function(e) {
  var t, r;
  if (e instanceof Element)
    return true;
  var n = (r = (t = e) === null || t === void 0 ? void 0 : t.ownerDocument) === null || r === void 0 ? void 0 : r.defaultView;
  return !!(n && e instanceof n.Element);
}, lv = function(e) {
  switch (e.tagName) {
    case "INPUT":
      if (e.type !== "image")
        break;
    case "VIDEO":
    case "AUDIO":
    case "EMBED":
    case "OBJECT":
    case "CANVAS":
    case "IFRAME":
    case "IMG":
      return true;
  }
  return false;
};
var bn = typeof window != "undefined" ? window : {};
var Zs = new WeakMap(), uv = /auto|scroll/, iw = /^tb|vertical/, aw = /msie|trident/i.test(bn.navigator && bn.navigator.userAgent), rr = function(e) {
  return parseFloat(e || "0");
}, ho = function(e, t, r) {
  return e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = false), new Ac((r ? t : e) || 0, (r ? e : t) || 0);
}, cv = Gt({devicePixelContentBoxSize: ho(), borderBoxSize: ho(), contentBoxSize: ho(), contentRect: new Dc(0, 0, 0, 0)}), Oc = function(e, t) {
  if (t === void 0 && (t = false), Zs.has(e) && !t)
    return Zs.get(e);
  if (qs(e))
    return Zs.set(e, cv), cv;
  var r = getComputedStyle(e), n = wi(e) && e.ownerSVGElement && e.getBBox(), o = !aw && r.boxSizing === "border-box", i = iw.test(r.writingMode || ""), a = !n && uv.test(r.overflowY || ""), s = !n && uv.test(r.overflowX || ""), l = n ? 0 : rr(r.paddingTop), u = n ? 0 : rr(r.paddingRight), c = n ? 0 : rr(r.paddingBottom), f = n ? 0 : rr(r.paddingLeft), p = n ? 0 : rr(r.borderTopWidth), d = n ? 0 : rr(r.borderRightWidth), m = n ? 0 : rr(r.borderBottomWidth), h = n ? 0 : rr(r.borderLeftWidth), v = f + u, y = l + c, C = h + d, P = p + m, b = s ? e.offsetHeight - P - e.clientHeight : 0, R = a ? e.offsetWidth - C - e.clientWidth : 0, E = o ? v + C : 0, I = o ? y + P : 0, M = n ? n.width : rr(r.width) - E - R, A = n ? n.height : rr(r.height) - I - b, L = M + v + R + C, U = A + y + b + P, $ = Gt({devicePixelContentBoxSize: ho(Math.round(M * devicePixelRatio), Math.round(A * devicePixelRatio), i), borderBoxSize: ho(L, U, i), contentBoxSize: ho(M, A, i), contentRect: new Dc(f, l, M, A)});
  return Zs.set(e, $), $;
}, Js = function(e, t, r) {
  var n = Oc(e, r), o = n.borderBoxSize, i = n.contentBoxSize, a = n.devicePixelContentBoxSize;
  switch (t) {
    case yn.DEVICE_PIXEL_CONTENT_BOX:
      return a;
    case yn.BORDER_BOX:
      return o;
    default:
      return i;
  }
};
var kc = function() {
  function e(t) {
    var r = Oc(t);
    this.target = t, this.contentRect = r.contentRect, this.borderBoxSize = Gt([r.borderBoxSize]), this.contentBoxSize = Gt([r.contentBoxSize]), this.devicePixelContentBoxSize = Gt([r.devicePixelContentBoxSize]);
  }
  return e;
}();
var Qs = function(e) {
  if (qs(e))
    return Infinity;
  for (var t = 0, r = e.parentNode; r; )
    t += 1, r = r.parentNode;
  return t;
};
var pv = function() {
  var e = Infinity, t = [];
  Dt.forEach(function(a) {
    if (a.activeTargets.length !== 0) {
      var s = [];
      a.activeTargets.forEach(function(u) {
        var c = new kc(u.target), f = Qs(u.target);
        s.push(c), u.lastReportedSize = Js(u.target, u.observedBox), f < e && (e = f);
      }), t.push(function() {
        a.callback.call(a.observer, s, a.observer);
      }), a.activeTargets.splice(0, a.activeTargets.length);
    }
  });
  for (var r = 0, n = t; r < n.length; r++) {
    var o = n[r];
    o();
  }
  return e;
};
var Vc = function(e) {
  Dt.forEach(function(r) {
    r.activeTargets.splice(0, r.activeTargets.length), r.skippedTargets.splice(0, r.skippedTargets.length), r.observationTargets.forEach(function(o) {
      o.isActive() && (Qs(o.target) > e ? r.activeTargets.push(o) : r.skippedTargets.push(o));
    });
  });
};
var fv = function() {
  var e = 0;
  for (Vc(e); ov(); )
    e = pv(), Vc(e);
  return iv() && sv(), e > 0;
};
var _c, mv = [], sw = function() {
  return mv.splice(0).forEach(function(e) {
    return e();
  });
}, dv = function(e) {
  if (!_c) {
    var t = 0, r = document.createTextNode(""), n = {characterData: true};
    new MutationObserver(function() {
      return sw();
    }).observe(r, n), _c = function() {
      r.textContent = "" + (t ? t-- : t++);
    };
  }
  mv.push(e), _c();
};
var hv = function(e) {
  dv(function() {
    requestAnimationFrame(e);
  });
};
var el = 0, lw = function() {
  return !!el;
}, uw = 250, cw = {attributes: true, characterData: true, childList: true, subtree: true}, gv = ["resize", "load", "transitionend", "animationend", "animationstart", "animationiteration", "keyup", "keydown", "mouseup", "mousedown", "mouseover", "mouseout", "blur", "focus"], vv = function(e) {
  return e === void 0 && (e = 0), Date.now() + e;
}, jc = false, pw = function() {
  function e() {
    var t = this;
    this.stopped = true, this.listener = function() {
      return t.schedule();
    };
  }
  return e.prototype.run = function(t) {
    var r = this;
    if (t === void 0 && (t = uw), !jc) {
      jc = true;
      var n = vv(t);
      hv(function() {
        var o = false;
        try {
          o = fv();
        } finally {
          if (jc = false, t = n - vv(), !lw())
            return;
          o ? r.run(1e3) : t > 0 ? r.run(t) : r.start();
        }
      });
    }
  }, e.prototype.schedule = function() {
    this.stop(), this.run();
  }, e.prototype.observe = function() {
    var t = this, r = function() {
      return t.observer && t.observer.observe(document.body, cw);
    };
    document.body ? r() : bn.addEventListener("DOMContentLoaded", r);
  }, e.prototype.start = function() {
    var t = this;
    this.stopped && (this.stopped = false, this.observer = new MutationObserver(this.listener), this.observe(), gv.forEach(function(r) {
      return bn.addEventListener(r, t.listener, true);
    }));
  }, e.prototype.stop = function() {
    var t = this;
    this.stopped || (this.observer && this.observer.disconnect(), gv.forEach(function(r) {
      return bn.removeEventListener(r, t.listener, true);
    }), this.stopped = true);
  }, e;
}(), tl = new pw(), Nc = function(e) {
  !el && e > 0 && tl.start(), el += e, !el && tl.stop();
};
var fw = function(e) {
  return !wi(e) && !lv(e) && getComputedStyle(e).display === "inline";
}, yv = function() {
  function e(t, r) {
    this.target = t, this.observedBox = r || yn.CONTENT_BOX, this.lastReportedSize = {inlineSize: 0, blockSize: 0};
  }
  return e.prototype.isActive = function() {
    var t = Js(this.target, this.observedBox, true);
    return fw(this.target) && (this.lastReportedSize = t), this.lastReportedSize.inlineSize !== t.inlineSize || this.lastReportedSize.blockSize !== t.blockSize;
  }, e;
}();
var bv = function() {
  function e(t, r) {
    this.activeTargets = [], this.skippedTargets = [], this.observationTargets = [], this.observer = t, this.callback = r;
  }
  return e;
}();
var rl = new WeakMap(), xv = function(e, t) {
  for (var r = 0; r < e.length; r += 1)
    if (e[r].target === t)
      return r;
  return -1;
}, Ri = function() {
  function e() {
  }
  return e.connect = function(t, r) {
    var n = new bv(t, r);
    rl.set(t, n);
  }, e.observe = function(t, r, n) {
    var o = rl.get(t), i = o.observationTargets.length === 0;
    xv(o.observationTargets, r) < 0 && (i && Dt.push(o), o.observationTargets.push(new yv(r, n && n.box)), Nc(1), tl.schedule());
  }, e.unobserve = function(t, r) {
    var n = rl.get(t), o = xv(n.observationTargets, r), i = n.observationTargets.length === 1;
    o >= 0 && (i && Dt.splice(Dt.indexOf(n), 1), n.observationTargets.splice(o, 1), Nc(-1));
  }, e.disconnect = function(t) {
    var r = this, n = rl.get(t);
    n.observationTargets.slice().forEach(function(o) {
      return r.unobserve(t, o.target);
    }), n.activeTargets.splice(0, n.activeTargets.length);
  }, e;
}();
var Bc = function() {
  function e(t) {
    if (arguments.length === 0)
      throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");
    if (typeof t != "function")
      throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");
    Ri.connect(this, t);
  }
  return e.prototype.observe = function(t, r) {
    if (arguments.length === 0)
      throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");
    if (!Lc(t))
      throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");
    Ri.observe(this, t, r);
  }, e.prototype.unobserve = function(t) {
    if (arguments.length === 0)
      throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");
    if (!Lc(t))
      throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");
    Ri.unobserve(this, t);
  }, e.prototype.disconnect = function() {
    Ri.disconnect(this);
  }, e.toString = function() {
    return "function ResizeObserver () { [polyfill code] }";
  }, e;
}();
var Sv = 200, go, vo, Cv = class {
  constructor() {
    zl(this, go, void 0);
    zl(this, vo, new WeakMap());
    var r;
    let t = (r = window.ResizeObserver) != null ? r : Bc;
    hf(this, go, new t(this.updateResizedElements.bind(this)));
  }
  updateResizedElements(t) {
    for (let r of t) {
      let n = An(this, vo).get(r.target);
      n && n(r.contentRect);
    }
  }
  observeElementWithCallback(t, r) {
    An(this, go).observe(t), An(this, vo).set(t, r);
  }
  unobserve(t) {
    An(this, go).unobserve(t), An(this, vo).delete(t);
  }
};
go = new WeakMap(), vo = new WeakMap();
var Pv = new Cv();
function mw(e) {
  let t = Ks(), r = useRef(null);
  function n(o) {
    o.width === 0 && o.height === 0 || (!r.current || o.height !== r.current.height || o.width !== r.current.width) && (r.current = {width: o.width, height: o.height}, t());
  }
  return useLayoutEffect(() => {
    if (!e.current)
      return;
    let {offsetWidth: o, offsetHeight: i} = e.current;
    return n({width: o, height: i}), Pv.observeElementWithCallback(e.current, n), () => {
      !e.current || Pv.unobserve(e.current);
    };
  }, []), r.current;
}
var Hc = "data-framer-size-compatibility-wrapper", dw = (e) => (t) => {
  var l, u, c, f;
  let r = useRef(null), n = mw(r), o = {[Hc]: true}, i = Boolean(n), a = (l = t.width) != null ? l : Sv, s = (u = t.height) != null ? u : Sv;
  return createElement("div", {style: {width: "100%", height: "100%", pointerEvents: "none"}, ref: r, ...o}, i && createElement(e, {...t, width: (c = n == null ? void 0 : n.width) != null ? c : a, height: (f = n == null ? void 0 : n.height) != null ? f : s}));
};
function zc(e) {
  return [...e.firstElementChild && e.firstElementChild.hasAttribute(Hc) ? e.firstElementChild.children : e.children].filter(Rv).map(Ev);
}
function Rv(e) {
  return e instanceof HTMLBaseElement || e instanceof HTMLHeadElement || e instanceof HTMLLinkElement || e instanceof HTMLMetaElement || e instanceof HTMLScriptElement || e instanceof HTMLStyleElement || e instanceof HTMLTitleElement ? false : e instanceof HTMLElement || e instanceof SVGElement;
}
function Ev(e) {
  if (!(e instanceof HTMLElement) || e.children.length === 0 || e.style.display !== "contents")
    return e;
  let t = [...e.children].find(Rv);
  return t ? Ev(t) : e;
}
function xn(e, t, r = () => [], n = {}) {
  let {id: o, visible: i, _needsMeasure: a} = e, {skipHook: s = false} = n, l = Boolean(useContext(wt)), u = O.current() === O.canvas;
  useLayoutEffect(() => {
    !u || l || s || !(t.current && o && i && a) || Be.queueMeasureRequest(vn(o), t.current, r(t.current));
  });
}
function Fv(e) {
  let t = e.closest("[data-framer-component-container]");
  !t || Be.queueMeasureRequest(vn(t.id), t, zc(t));
}
var yw = po();
function yo(e) {
  let t = {};
  return !yw || O.current() !== O.canvas || ((e === true || e === "x") && (t["data-framer-layout-hint-center-x"] = true), (e === true || e === "y") && (t["data-framer-layout-hint-center-y"] = true)), t;
}
function Mv(e, t, r = 1) {
  var u, c, f, p;
  let {width: n, height: o} = t, i = (c = (u = e.pixelWidth) != null ? u : e.intrinsicWidth) != null ? c : 0, a = (p = (f = e.pixelHeight) != null ? f : e.intrinsicHeight) != null ? p : 0;
  if (n < 1 || o < 1 || i < 1 || a < 1)
    return;
  n *= r, o *= r;
  let s = n / o, l = i / a;
  switch (e.fit) {
    case "fill":
      return l > s ? a / o : i / n;
    case "fit":
    case "stretch":
      return Math.max(i / n, a / o);
  }
}
function Wc(e, t) {
  return t && Math.max(1, e) > t ? "pixelated" : "auto";
}
var bw = {position: "absolute", pointerEvents: "none", userSelect: "none", borderRadius: "inherit", top: 0, right: 0, bottom: 0, left: 0};
function xw(e) {
  switch (e) {
    case "fit":
      return "contain";
    case "stretch":
      return "fill";
    default:
      return "cover";
  }
}
function Sw(e, t) {
  if (!t)
    return "auto";
  let r = O.current() === O.canvas ? N.devicePixelRatio : 1, n = Mv(e, t, r);
  return O.current() === O.canvas ? Wc(1, n) : Wc(he.zoom, n);
}
function Cw(e, t) {
  return {pointerEvents: "none", userSelect: "none", display: "block", width: "100%", height: "100%", borderRadius: "inherit", objectPosition: "center", objectFit: xw(e.fit), imageRendering: Sw(e, t)};
}
function nl({image: e, containerSize: t, nodeId: r, layoutId: n}) {
  let o = useRef(null), i = !mc() || O.current() === O.export;
  n && (n = n + "-background");
  let a = Be.useImageSource(e, t, r), s = Cw(e, t);
  if (!i) {
    let l = Be.useImageElement(e, t, r);
    useLayoutEffect(() => {
      let u = o.current;
      if (u !== null)
        return u.appendChild(l), () => {
          u.removeChild(l);
        };
    }, [l]), Object.assign(l.style, s);
  }
  return createElement(_e.div, {ref: o, style: bw, layoutId: n}, i ? createElement("img", {src: a, style: s}) : null);
}
function Rw(e) {
  for (let t in e)
    if (t === "drag" || t.startsWith("while") || typeof e[t] == "function" && t.startsWith("on") && !t.includes("Animation"))
      return true;
  return false;
}
var Ov = ["onAuxClick", "onClick", "onDoubleClick", "onMouse", "onMouseDown", "onMouseUp", "onTapDown", "onTap", "onTapUp", "onPointer", "onPointerDown", "onPointerUp", "onTouch", "onTouchDown", "onTouchUp"], Ew = new Set([...Ov, ...Ov.map((e) => `${e}Capture`)]);
function Fw(e) {
  if (e.drag)
    return "grab";
  for (let t in e)
    if (Ew.has(t))
      return "pointer";
}
function ol(e) {
  let {left: t, top: r, bottom: n, right: o, width: i, height: a, minWidth: s, minHeight: l, center: u, _constraints: c, size: f, widthType: p, heightType: d} = e;
  return {top: Qe(r), left: Qe(t), bottom: Qe(n), right: Qe(o), width: Qe(i), height: Qe(a), minWidth: Qe(s), minHeight: Qe(l), size: Qe(f), center: u, _constraints: c, widthType: p, heightType: d};
}
var kv = {x: 0, y: 0, width: 200, height: 200};
function Mw(e) {
  at();
  let t = Boolean(useContext(wt)), {style: r, _initialStyle: n, __fromCanvasComponent: o, size: i} = e, a = ol(e), s = gg(a), l = {display: "block", flexShrink: 0, userSelect: "none"};
  e.__fromCanvasComponent || (l.backgroundColor = e.background === void 0 ? "rgba(0, 170, 255, 0.3)" : void 0), Rw(e) || (l.pointerEvents = "none");
  let c = Children.count(e.children) > 0 && Children.toArray(e.children).every((m) => typeof m == "string" || typeof m == "number") && {display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center"}, f = Zg(e);
  i === void 0 && !o && (Kg(f) || (l.width = kv.width), qg(f) || (l.height = kv.height)), a.minWidth !== void 0 && (l.minWidth = a.minWidth), a.minHeight !== void 0 && (l.minHeight = a.minHeight);
  let p = {};
  er(a) && s && !Vv(e) && (p = {left: s.x, top: s.y, width: s.width, height: s.height, right: void 0, bottom: void 0}), Object.assign(l, c, n, f, p, r), Pe.applyWillChange(e, l, true);
  let d = l;
  return l.transform || (d = {x: 0, y: 0, ...l}), e.positionSticky && (!(O.current() === O.canvas) || t) && (d.position = "sticky", d.willChange = "transform", d.zIndex = 1, d.top = e.positionStickyTop, d.right = e.positionStickyRight, d.bottom = e.positionStickyBottom, d.left = e.positionStickyLeft), [d, s];
}
var Iw = new Set(["width", "height", "opacity", "overflow", "radius", "background", "color", "x", "y", "z", "rotate", "rotateX", "rotateY", "rotateZ", "scale", "scaleX", "scaleY", "skew", "skewX", "skewY", "originX", "originY", "originZ"]);
function Aw(e) {
  let t = {};
  for (let r in e)
    (kr(r) || (0, Av.default)(r)) && !Iw.has(r) ? t[r] = e[r] : (r === "positionTransition" || r === "layoutTransition") && (t.layout = true, typeof e[r] != "boolean" && !e.transition && (t.transition = e[r]));
  return t;
}
function Dw(e) {
  return "data-framer-name" in e;
}
var be = forwardRef(function(t, r) {
  N.perf && N.perf.nodeRender();
  let {visible: n = true} = t;
  return n ? createElement(Lw, {...t, ref: r}) : null;
}), Lw = forwardRef(function(t, r) {
  let {_border: n, name: o, center: i, border: a} = t, {props: s, children: l} = Os(t), u = Aw(s), c = lt(t), f = Fw(t), p = useRef(null), d = r != null ? r : p, m = {"data-framer-component-type": "Frame", "data-framer-cursor": f, "data-framer-highlight": f === "pointer" ? true : void 0, "data-layoutid": c};
  !Dw(t) && o && (m["data-framer-name"] = o);
  let [h, v] = Mw(s), y = ol(s), C = Vv(y);
  i && !(v && !C && er(y)) ? (u.transformTemplate = Ur(i), Object.assign(m, yo(i))) : u.transformTemplate = Ur(false), xn(t, d);
  let P = gi(t), b = Boolean(useContext(wt)), R = Ow(s, y, v, b), E = Ds(createElement(Fragment, null, P ? createElement(nl, {image: P, containerSize: v != null ? v : void 0, nodeId: t.id && vn(t.id), layoutId: c}) : null, l, createElement(Cs, {...n, border: a, layoutId: c})), R);
  return createElement(_e.div, {...m, ...u, layoutId: c, style: h, ref: d, transformValues: Dg}, E);
});
function Ow(e, t, r, n) {
  if (n)
    return r ? {width: r.width, height: r.height} : Ae.Disabled;
  let {_usesDOMRect: o} = e, {widthType: i = H.FixedNumber, heightType: a = H.FixedNumber, width: s, height: l} = t;
  return r && !o ? r : i === H.FixedNumber && a === H.FixedNumber && typeof s == "number" && typeof l == "number" ? {width: s, height: l} : o ? Ae.DisabledForCurrentLevel : Ae.Unknown;
}
function Vv({width: e, height: t}) {
  return e === "auto" || e === "min-content" || t === "auto" || t === "min-content";
}
function Uc(e, t = null) {
  let r;
  if (t instanceof HTMLElement && (r = t), !r && e.target instanceof HTMLElement && (r = e.target), !r)
    return {x: e.pageX, y: e.pageY};
  if (N.webkitConvertPointFromPageToNode) {
    let l = new WebKitPoint(e.pageX, e.pageY);
    return l = N.webkitConvertPointFromPageToNode(r, l), {x: l.x, y: l.y};
  }
  let n = r.getBoundingClientRect(), o = parseFloat(r.style.width), i = parseFloat(r.style.height), a = {x: o ? o / n.width : 1, y: i ? i / n.height : 1};
  return {x: a.x * (e.pageX - n.left - r.clientLeft + r.scrollLeft), y: a.y * (e.pageY - n.top - r.clientTop + r.scrollTop)};
}
var _w = (e) => {
  setTimeout(e, 1 / 60);
}, jw = N.requestAnimationFrame || _w, Gc = (e) => jw(e);
var Bv = jo(Nv()), Xc = class {
  constructor() {
    this._emitter = new Bv.EventEmitter();
  }
  eventNames() {
    return this._emitter.eventNames();
  }
  eventListeners() {
    let t = {};
    for (let r of this._emitter.eventNames())
      t[r] = this._emitter.listeners(r);
    return t;
  }
  on(t, r) {
    this.addEventListener(t, r, false, false, this);
  }
  off(t, r) {
    this.removeEventListeners(t, r);
  }
  once(t, r) {
    this.addEventListener(t, r, true, false, this);
  }
  unique(t, r) {
    this.addEventListener(t, r, false, true, this);
  }
  addEventListener(t, r, n, o, i) {
    if (o) {
      for (let a of this._emitter.eventNames())
        if (r === this._emitter.listeners(a))
          return;
    }
    n === true ? this._emitter.once(t, r, i) : this._emitter.addListener(t, r, i);
  }
  removeEventListeners(t, r) {
    t ? this._emitter.removeListener(t, r) : this.removeAllEventListeners();
  }
  removeAllEventListeners() {
    this._emitter.removeAllListeners();
  }
  countEventListeners(t, r) {
    if (t)
      return this._emitter.listeners(t).length;
    {
      let n = 0;
      for (let o of this._emitter.eventNames())
        n += this._emitter.listeners(o).length;
      return n;
    }
  }
  emit(t, ...r) {
    this._emitter.emit(t, ...r);
  }
};
var Mi = 1 / 60, al = class extends Xc {
  constructor(t = false) {
    super();
    this._started = false;
    this._frame = 0;
    this._frameTasks = [];
    this.tick = () => {
      !this._started || (Gc(this.tick), this.emit("update", this._frame, Mi), this.emit("render", this._frame, Mi), this._processFrameTasks(), this._frame++);
    };
    t && this.start();
  }
  addFrameTask(t) {
    this._frameTasks.push(t);
  }
  _processFrameTasks() {
    let t = this._frameTasks, r = t.length;
    if (r !== 0) {
      for (let n = 0; n < r; n++)
        t[n]();
      t.length = 0;
    }
  }
  static set TimeStep(t) {
    Mi = t;
  }
  static get TimeStep() {
    return Mi;
  }
  start() {
    return this._started ? this : (this._frame = 0, this._started = true, Gc(this.tick), this);
  }
  stop() {
    return this._started = false, this;
  }
  get frame() {
    return this._frame;
  }
  get time() {
    return this._frame * Mi;
  }
}, Rt = new al();
var Pr = (e, t, r) => {
  let n = Math.min(t, r), o = Math.max(t, r);
  return e < n && (e = n), e > o && (e = o), e;
};
var ct = class {
  constructor(t, r) {
    this.originalEvent = t;
    this.session = r;
    this.time = Date.now();
    this.loopTime = Rt.time;
    let n = r && r.startEvent && r.startEvent.target || t.target, o = ct.eventLikeFromOriginalEvent(t);
    this.point = Uc(o, n);
    let i = r && r.originElement ? r.originElement : document.body;
    this.devicePoint = Uc(o, i), this.target = t.target || null;
    let a = r && r.lastEvent;
    t instanceof WheelEvent ? this.delta = {x: t.deltaX, y: t.deltaY} : a && this.devicePoint && a.devicePoint ? this.delta = Re.subtract(this.devicePoint, a.devicePoint) : this.delta = {x: 0, y: 0};
  }
  static eventLikeFromOriginalEvent(t) {
    if ("touches" in t) {
      let r = t.touches;
      if ((!r || !r.length) && t.changedTouches && t.changedTouches.length && (r = t.changedTouches), !r || !r.length)
        return {pageX: 0, pageY: 0, target: null};
      let n = r[0], o = n.clientX || n.screenX || n.pageX, i = n.clientY || n.screenY || n.pageY;
      return {pageX: o, pageY: i, target: t.target};
    }
    return t;
  }
  velocity(t) {
    return this.session ? this.session.velocity(t) : {x: 0, y: 0};
  }
  get offset() {
    return this.session ? this.session.offset(this) : {x: 0, y: 0};
  }
  get isLeftMouseClick() {
    if (!mo.isTouch())
      return "button" in this.originalEvent && "buttons" in this.originalEvent && "ctrlKey" in this.originalEvent ? (this.originalEvent.button === 0 || this.originalEvent.buttons === 1) && !this.originalEvent.ctrlKey : false;
  }
};
var Ii = class {
  constructor(t) {
    this.accelerationForState = t;
  }
  integrateState(t, r) {
    let n = this.evaluateState(t), o = this.evaluateStateWithDerivative(t, r * 0.5, n), i = this.evaluateStateWithDerivative(t, r * 0.5, o), a = this.evaluateStateWithDerivative(t, r, i), s = 1 / 6 * (n.dx + 2 * (o.dx + i.dx) + a.dx), l = 1 / 6 * (n.dv + 2 * (o.dv + i.dv) + a.dv);
    return t.x = t.x + s * r, t.v = t.v + l * r, t;
  }
  evaluateState(t) {
    let r = this.accelerationForState(t);
    return {dx: t.v, dv: r};
  }
  evaluateStateWithDerivative(t, r, n) {
    let o = {x: t.x + n.dx * r, v: t.v + n.dv * r};
    return {dx: o.v, dv: this.accelerationForState(o)};
  }
};
var sl = class {
  constructor(t) {
    this.options = {velocity: 0, friction: 2, tolerance: 1 / 10}, Object.assign(this.options, t), this.state = {x: 0, v: this.options.velocity}, this.integrator = new Ii((r) => -(this.options.friction * r.v));
  }
  setFrom(t) {
    this.state.x = t;
  }
  setTo(t) {
  }
  setVelocity(t) {
    this.state.v = t;
  }
  getState() {
    return this.state;
  }
  isReady() {
    return true;
  }
  next(t) {
    return this.state = this.integrator.integrateState(this.state, t), this.state.x;
  }
  isFinished() {
    return Math.abs(this.state.v) < this.options.tolerance;
  }
};
var ll = 1e-3, zw = 0.01, Ww = 10, Uw = Number.MIN_VALUE, Gw = 1;
function $w(e, t, r, n = 12) {
  let o = r;
  for (let i = 1, a = n, s = 1 <= a; s ? i < a : i > a; s ? i++ : i--)
    o = o - e(o) / t(o);
  return o;
}
function Hv(e, t) {
  return e * Math.sqrt(1 - Math.pow(t, 2));
}
var ul;
(function(n) {
  function e(o, i, a = 1) {
    return i / (2 * Math.sqrt(a * o));
  }
  n.computeDampingRatio = e;
  function t(o, i, a = 0, s = 1) {
    let l, u = e(o, i), c = Math.sqrt(o / s);
    if (u < 1) {
      let f = Math.sqrt(1 - Math.pow(u, 2)), p = a / (f * c), d = u / f, m = -((p - d) / ll);
      if (m <= 0)
        return null;
      l = Math.log(m) / (u * c);
    } else
      return null;
    return l;
  }
  n.computeDuration = t;
  function r(o, i, a = 0, s = 1) {
    let l, u;
    o = Math.max(Math.min(o, Gw), Uw), i = Math.max(Math.min(i, Ww), zw), o < 1 ? (u = function(d) {
      let m = d * o, h = m * i, v = m - a, y = Hv(d, o), C = Math.exp(-h);
      return ll - v / y * C;
    }, l = function(d) {
      let h = d * o * i, v = h * a + a, y = Math.pow(o, 2) * Math.pow(d, 2) * i, C = Math.exp(-h), P = Hv(Math.pow(d, 2), o);
      return (-u(d) + ll > 0 ? -1 : 1) * ((v - y) * C) / P;
    }) : (u = function(d) {
      let m = Math.exp(-d * i), h = (d - a) * i + 1;
      return -ll + m * h;
    }, l = function(d) {
      let m = Math.exp(-d * i), h = (a - d) * Math.pow(i, 2);
      return m * h;
    });
    let c = {tension: 100, friction: 10, velocity: a}, f = 5 / i, p = $w(u, l, f);
    return isNaN(p) || (c.tension = Math.pow(p, 2) * s, c.friction = o * 2 * Math.sqrt(s * c.tension)), c;
  }
  n.computeDerivedCurveOptions = r;
})(ul || (ul = {}));
var Xw = {tension: 500, friction: 10, tolerance: 1 / 1e4, velocity: 0}, Yw = {dampingRatio: 1, duration: 1, velocity: 0, mass: 1};
function Kw(e) {
  return e ? typeof e.dampingRatio == "number" || typeof e.duration == "number" || typeof e.mass == "number" : false;
}
var Sn = class {
  constructor(t, r) {
    this.interpolation = r;
    let n;
    if (Kw(t)) {
      let o = {...Yw, ...t};
      n = ul.computeDerivedCurveOptions(o.dampingRatio, o.duration, o.velocity, o.mass);
    } else
      n = t;
    this.options = {...Xw, ...n}, this.state = {x: 0, v: this.options.velocity}, this.integrator = new Ii((o) => -this.options.tension * o.x - this.options.friction * o.v);
  }
  isReady() {
    return this.interpolator !== void 0 && this.difference !== void 0;
  }
  next(t) {
    return this.state = this.integrator.integrateState(this.state, t), this.interpolator(this.progress());
  }
  isFinished() {
    let t = Math.abs(this.state.x) < this.options.tolerance, r = Math.abs(this.state.v) < this.options.tolerance;
    return t && r;
  }
  setFrom(t) {
    this.current = t, this.updateInterpolator();
  }
  setVelocity(t) {
    this.state.v = t;
  }
  progress() {
    return 1 - this.state.x / this.difference;
  }
  setTo(t) {
    this.destination = t, this.difference = this.interpolation.difference(this.destination, this.current), this.state.x = this.difference, this.updateInterpolator();
  }
  getState() {
    return this.state;
  }
  updateInterpolator() {
    this.current === void 0 || this.destination === void 0 || (this.interpolator = this.interpolation.interpolate(this.current, this.destination));
  }
};
function zv(e) {
  return typeof e == "function" && e.interpolationFor && typeof e.interpolationFor == "function";
}
var Et;
(function(t) {
  function e(r, n) {
    return r === void 0 && (r = n), n === void 0 && (n = r), [r, n];
  }
  t.handleUndefined = e;
})(Et || (Et = {}));
var Ai = {interpolate(e, t) {
  [e, t] = Et.handleUndefined(e, t);
  let r = +e, n = t - r;
  return (o) => r + n * o;
}, difference(e, t) {
  return t - e;
}};
var Yc = (e) => ({interpolate(t, r) {
  [t, r] = Et.handleUndefined(t, r);
  let n = Object.assign({}, t), o = {}, i = new Set();
  for (let a in t)
    o[a] = e.interpolate(t[a], r[a]), i.add(a);
  for (let a in r)
    i.has(a) || (o[a] = e.interpolate(t[a], r[a]), i.add(a));
  return (a) => {
    for (let s in o)
      n[s] = o[s](a);
    return n;
  };
}, difference(t, r) {
  let n = 0;
  for (let o in t) {
    let i = e.difference(t[o], r[o]);
    n += Math.pow(i, 2);
  }
  return Math.sqrt(n);
}});
var Di = {interpolate(e, t) {
  return [e, t] = Et.handleUndefined(e, t), (r) => r < 0.5 ? e : t;
}, difference(e, t) {
  return e === t ? 0 : 1;
}};
var Kc = (e = nt.HUSL) => ({interpolate(t, r) {
  return [t, r] = Et.handleUndefined(t, r), z.interpolate(z(t), z(r), e);
}, difference(t, r) {
  return z.difference(z(t), z(r));
}});
var Wv = {colorModel: nt.HUSL}, Gr = class {
  constructor(t = Wv) {
    this.interpolate = (t2, r) => ([t2, r] = Et.handleUndefined(t2, r), this.interPolationForValue(t2).interpolate(t2, r));
    this.difference = (t2, r) => this.interPolationForValue(t2).difference(t2, r);
    this.options = {...Wv, ...t};
  }
  interPolationForValue(t) {
    let r = typeof t;
    if (r === "number")
      return Ai;
    if (r === "boolean" || r === "function")
      return Di;
    if (z.isColor(t))
      return Kc(this.options.colorModel);
    if (r === "object") {
      if (t === null)
        return Di;
      let n = t.constructor;
      if (n && zv(n)) {
        let o = n.interpolationFor(t, this);
        if (o && o !== this && o.constructor !== Gr)
          return o;
      }
      return Yc(this);
    }
    return console.warn(`No interpolation defined for ${t}`), Di;
  }
}, Uv = new Gr();
var qw = {velocity: 0, min: 0, max: 0, momentum: {friction: 2, tolerance: 10}, bounce: {tension: 500, friction: 10, tolerance: 1}}, cl = class {
  constructor(t) {
    this.options = Object.assign({...qw}, t), this.frictionAnimator = new sl({friction: this.options.momentum.friction, tolerance: this.options.momentum.tolerance, velocity: this.options.velocity}), this.springAnimator = new Sn({tension: this.options.bounce.tension, friction: this.options.bounce.friction, tolerance: this.options.bounce.tolerance, velocity: this.options.velocity}, Ai), this.useSpring = false;
  }
  isReady() {
    return true;
  }
  next(t) {
    return this.current = this.currentAnimator.next(t), this.useSpring || this.tryTransitionToSpring(), this.current;
  }
  get currentAnimator() {
    return this.useSpring ? this.springAnimator : this.frictionAnimator;
  }
  isFinished() {
    return this.currentAnimator.isFinished();
  }
  get state() {
    return this.currentAnimator.getState();
  }
  setFrom(t) {
    this.setState({x: t, v: this.state.v});
  }
  setState(t) {
    if (this.frictionAnimator.setFrom(t.x), this.frictionAnimator.setVelocity(t.v), this.isValidState())
      return this.tryTransitionToSpring();
    {
      let r = 0;
      return this.state.x <= this.options.min && (r = this.options.min), this.state.x >= this.options.max && (r = this.options.max), this.transitionToSpring(r);
    }
  }
  setTo(t) {
    this.frictionAnimator.setTo(t), this.springAnimator.setTo(t);
  }
  setLimits(t, r) {
    this.options.min = t, this.options.max = r;
  }
  tryTransitionToSpring() {
    let t = this.state.x < this.options.min && this.state.v <= 0, r = this.state.x > this.options.max && this.state.v >= 0;
    if (t || r) {
      let n;
      t ? n = this.options.min : n = this.options.max, this.transitionToSpring(n);
    } else
      this.useSpring = false;
  }
  transitionToSpring(t) {
    this.springAnimator.setFrom(this.state.x), this.springAnimator.setVelocity(this.state.v), this.springAnimator.setTo(t), this.useSpring = true;
  }
  isValidState() {
    let t = this.state.x < this.options.min && this.state.v > 0, r = this.state.x > this.options.max && this.state.v < 0;
    if (t || r) {
      let n;
      t ? n = this.options.min : n = this.options.max;
      let o = this.frictionAnimator.options.friction;
      return 1 - o * (n - this.state.x) / this.state.v > 0;
    }
    return true;
  }
};
var qc = class {
  constructor(t, r, n) {
    this.animator = t;
    this.updateCallback = r;
    this.finishedCallback = n;
    this.update = (t2, r2) => {
      if (this.animator.isFinished())
        this.finish();
      else {
        let n2 = this.animator.next(r2);
        this.updateCallback(n2);
      }
    };
    this.animator.isReady() || console.warn("AnimationDriver initialized with animator that isn't ready");
  }
  finish() {
    this.finishedCallback && this.finishedCallback(this.animator.isFinished());
  }
  isFinished() {
    return this.animator.isFinished();
  }
};
var Li = class extends qc {
  play() {
    if (he.target !== O.preview) {
      this.finishedCallback && this.finishedCallback(false);
      return;
    }
    Rt.on("update", this.update);
  }
  cancel() {
    Rt.off("update", this.update);
  }
  finish() {
    Rt.off("update", this.update), super.finish();
  }
};
var Jc = createContext({dragging: false}), rR = Oi();
function Kv(e) {
  let n = class extends Component {
    constructor(i, a) {
      super(i, a);
      this.state = {isDragging: false};
      this.x = q(0);
      this.y = q(0);
      this.onChangePosition = (i2, a2) => {
        i2.value !== i2.oldValue && this.props.onMove && this.props.onMove(this.point, this);
      };
      this.isMoving = false;
      this.isAnimating = false;
      this.directionLockAxis = null;
      this._constraints = null;
      this.panStart = (i2) => {
        !this.props.enabled || (this.isMoving = this.isAnimating, this.stopAnimation(), this.resetdirectionLock(), this.layerStartPoint = this.point, this.correctedLayerStartPoint = this.point, this._constraints && this.props.bounce && (this.correctedLayerStartPoint = this.constrainPosition(this.correctedLayerStartPoint, this._constraints, 1 / this.props.overdragScale)), this.previousPoint = this.correctedLayerStartPoint, this.state.isDragging || this.setState({isDragging: true}), this.props.onDragSessionStart && this.props.onDragSessionStart(i2, this));
      };
      this.pan = (i2) => {
        let {enabled: a2, speedX: s2, speedY: l2, directionLock: u2, overdragScale: c, vertical: f, horizontal: p, pixelAlign: d, onDragStart: m, onDragWillMove: h, onDragDidMove: v, onDragSessionMove: y} = this.props;
        if (!a2)
          return;
        let C = {...this.previousPoint};
        if (C.x += i2.delta.x * s2, C.y += i2.delta.y * l2, this.previousPoint = {...C}, this._constraints && (C = this.constrainPosition(C, this._constraints, c)), u2)
          if (this.directionLockAxis === null) {
            let b = i2.offset;
            b.x = b.x * s2, b.y = b.y * l2, this.updatedirectionLock(b);
            return;
          } else
            this.directionLockAxis === "y" && (C.x = this.layerStartPoint.x), this.directionLockAxis === "x" && (C.y = this.layerStartPoint.y);
        if (this.state.isDragging || (this.setState({isDragging: true}), this.isMoving = true, m && m(i2, this)), h && h(i2, this), d && (C.x = Math.round(C.x), C.y = Math.round(C.y)), !p && !f)
          return;
        let P = null;
        p && !f ? P = "x" : f && !p && (P = "y"), this.setPoint(C, P), v && v(i2, this), y && y(i2, this);
      };
      this.panEnd = (i2) => {
        if (!this.props.enabled)
          return;
        this.startAnimation(i2);
        let {onDragSessionEnd: a2, onDragEnd: s2} = this.props;
        this.state.isDragging && s2 && s2(i2, this), a2 && a2(i2, this), this.state.isDragging && this.setState({isDragging: false}), this.isMoving = this.isAnimating;
      };
      this.mouseWheelStart = (i2) => {
        this.correctedLayerStartPoint = this.point, this.previousPoint = this.correctedLayerStartPoint, this.stopAnimation();
      };
      this.mouseWheel = (i2) => {
        let {enabled: a2, speedX: s2, speedY: l2, vertical: u2, horizontal: c, pixelAlign: f, onDragWillMove: p, onDragDidMove: d, mouseWheel: m} = this.props;
        if (!m || !a2)
          return;
        let h = {...this.point};
        if (h.x -= i2.delta.x * s2, h.y -= i2.delta.y * l2, this._constraints && (h = this.constrainPosition(h, this._constraints, 0, false)), p && p(i2, this), f && (h.x = Math.round(h.x), h.y = Math.round(h.y)), !c && !u2)
          return;
        let v = null;
        c && !u2 ? v = "x" : u2 && !c && (v = "y"), this.setPoint(h, v), d && d(i2, this);
      };
      this.mouseWheelEnd = (i2) => {
      };
      this.onAnimationStep = (i2, a2) => {
        if (i2 === "x" && this.props.horizontal === false || i2 === "y" && this.props.vertical === false)
          return;
        let s2 = 0;
        if (this.constraints)
          if (this.props.bounce)
            s2 = a2 - this.getValue(i2);
          else {
            let {minX: u2, minY: c, maxX: f, maxY: p} = this.calculateConstraints(this._constraints);
            i2 === "x" && (s2 = Pr(a2, u2, f) - this.getValue(i2)), i2 === "y" && (s2 = Pr(a2, c, p) - this.getValue(i2));
          }
        else
          s2 = a2 - this.getValue(i2);
        let l2 = this.point;
        i2 === "x" && (l2[i2] = l2[i2] + s2), i2 === "y" && (l2[i2] = l2[i2] + s2), this.setPoint(l2, i2);
      };
      this.onAnimationStop = (i2) => {
        if (!(i2 === "x" && this.props.horizontal === false) && !(i2 === "y" && this.props.vertical === false) && !!this.animation) {
          if (this.props.pixelAlign) {
            let a2 = this.point;
            a2.x = Math.round(a2.x), a2.y = Math.round(a2.y), this.setPoint(a2, i2);
          }
          if (this.animation.x.isFinished() && this.animation.y.isFinished())
            return this.stopAnimation();
        }
      };
      this.stopAnimation = () => {
        this.isAnimating = false, this.isMoving = false, !!this.animation && (this.animation.x.cancel(), this.animation.y.cancel(), this.props.onDragAnimationEnd && this.props.onDragAnimationEnd(this.animation, this), this.animation = null);
      };
      let s = this.props.left, l = this.props.top;
      s ? ae(s) ? this.x = s : this.x = q(s) : this.x = q(0), l ? ae(l) ? this.y = l : this.y = q(l) : this.y = q(0), this.x.onUpdate(this.onChangePosition), this.y.onUpdate(this.onChangePosition);
      let u = this.props.constraints;
      u && (this.constraints = u);
    }
    UNSAFE_componentWillReceiveProps(i) {
      this.props.left !== i.left && k(i.left) && this.x.set(i.left), this.props.top !== i.top && k(i.top) && this.y.set(i.top);
      let a = i.constraints;
      a && (this.constraints = a);
    }
    get point() {
      return {x: this.x.get(), y: this.y.get()};
    }
    setPoint(i, a = null) {
      switch (a) {
        case "x":
          this.x.set(i.x);
          break;
        case "y":
          this.y.set(i.y);
          break;
        case null:
          this.x.set(i.x), this.y.set(i.y);
          break;
      }
    }
    getValue(i) {
      switch (i) {
        case "x":
          return this.x.get();
        case "y":
          return this.y.get();
      }
    }
    get width() {
      let i = this.props.width;
      return i ? ae(i) ? i.get() : typeof i == "string" ? parseFloat(i) : i : 100;
    }
    get height() {
      let i = this.props.height;
      return i ? ae(i) ? i.get() : typeof i == "string" ? parseFloat(i) : i : 100;
    }
    get constraints() {
      return this._constraints;
    }
    set constraints(i) {
      i !== null && typeof i == "object" ? this._constraints = {x: i.x || 0, y: i.y || 0, width: i.width || 0, height: i.height || 0} : this._constraints = null, this._constraints && this.updateAnimationConstraints(this._constraints);
    }
    get constraintsOffset() {
      if (!this.constraints)
        return {x: 0, y: 0};
      let {minX: i, minY: a, maxX: s, maxY: l} = this.calculateConstraints(this._constraints), u = this.point, c = {x: Pr(u.x, i, s), y: Pr(u.y, a, l)};
      return {x: u.x - c.x, y: u.y - c.y};
    }
    get isBeyondConstraints() {
      let i = this.constraintsOffset;
      return i.x !== 0 || i.y !== 0;
    }
    clampAndScale(i, a, s, l, u) {
      return u ? (i < a && (i = a + (i - a) * l), i > s && (i = s + (i - s) * l), i) : Pr(i, a, s);
    }
    calculateConstraints(i) {
      if (!i)
        return {minX: Infinity, maxX: Infinity, minY: Infinity, maxY: Infinity};
      i.width < this.width && (i.width = this.width), i.height < this.height && (i.height = this.height);
      let a = {minX: ke.minX(i), maxX: ke.maxX(i), minY: ke.minY(i), maxY: ke.maxY(i)};
      return a.maxX -= this.width, a.maxY -= this.height, a;
    }
    constrainPosition(i, a, s, l = this.props.overdrag) {
      let {maxX: u, maxY: c, minX: f, minY: p} = this.calculateConstraints(this._constraints), d = {x: this.clampAndScale(i.x, f, u, s, l), y: this.clampAndScale(i.y, p, c, s, l)};
      return (this.props.speedX === 0 || this.props.horizontal === false) && (d.x = i.x), (this.props.speedY === 0 || this.props.vertical === false) && (d.y = i.y), d;
    }
    updatedirectionLock(i) {
      Math.abs(i.y) > this.props.directionLockThreshold.y ? this.directionLockAxis = "y" : Math.abs(i.x) > this.props.directionLockThreshold.x && (this.directionLockAxis = "x"), this.directionLockAxis !== null && this.props.onDragDirectionLockStart && this.props.onDragDirectionLockStart(this.directionLockAxis, this);
    }
    resetdirectionLock() {
      this.directionLockAxis = null;
    }
    setupAnimation() {
      this.animation || (this.animation = {x: this.setupAnimationForAxis("x"), y: this.setupAnimationForAxis("y")}, this.updateAnimationConstraints(this._constraints));
    }
    setupAnimationForAxis(i) {
      let s = new cl({momentum: this.props.momentumOptions, bounce: this.props.bounceOptions}), l = (c) => {
        this.onAnimationStep(i, c);
      }, u = () => {
        this.onAnimationStop(i);
      };
      return new Li(s, l, u);
    }
    updateAnimationConstraints(i) {
      if (!!this.animation)
        if (i) {
          let {minX: a, minY: s, maxX: l, maxY: u} = this.calculateConstraints(i);
          this.animation.x.animator.setLimits(a, l), this.animation.y.animator.setLimits(s, u);
        } else
          this.animation.x.animator.setLimits(-Infinity, Infinity), this.animation.y.animator.setLimits(-Infinity, Infinity);
    }
    startAnimation(i) {
      let {momentum: a, bounce: s, momentumVelocityMultiplier: l, speedX: u, speedY: c, overdrag: f, onDragAnimationStart: p} = this.props;
      if (!(a || s) || this.isBeyondConstraints === false && a === false || this.isBeyondConstraints === false && this.state.isDragging === false)
        return;
      let {minX: d, minY: m, maxX: h, maxY: v} = this.calculateConstraints(this._constraints), y = f === true || this.point.x > d && this.point.x < h, C = f === true || this.point.y > m && this.point.y < v;
      if (y === C && C === false)
        return;
      let P = i.velocity(0.1), b = P.x * l * u, R = P.y * l * c;
      this.directionLockAxis === "x" && (R = 0), this.directionLockAxis === "y" && (b = 0), this.setupAnimation(), this.isAnimating = true, this.isMoving = true, !!this.animation && (this.animation.x.animator.setState({x: this.point.x, v: b}), y && this.animation.x.play(), this.animation.y.animator.setState({x: this.point.y, v: R}), C && this.animation.y.play(), p && p(this.animation, this));
    }
    wrapHandler(i, a) {
      return a ? (s) => {
        i(s), a(s);
      } : i;
    }
    render() {
      let {onPanStart: i, onPan: a, onPanEnd: s, onMouseWheelStart: l, onMouseWheel: u, onMouseWheelEnd: c, ...f} = this.props, p = {...f};
      return Object.keys(n.draggingDefaultProps).forEach((d) => {
        delete p[d];
      }), p.onPanStart = this.wrapHandler(this.panStart, i), p.onPan = this.wrapHandler(this.pan, a), p.onPanEnd = this.wrapHandler(this.panEnd, s), p.onMouseWheelStart = this.wrapHandler(this.mouseWheelStart, l), p.onMouseWheel = this.wrapHandler(this.mouseWheel, u), p.onMouseWheelEnd = this.wrapHandler(this.mouseWheelEnd, c), p.left = this.x, p.top = this.y, createElement(Jc.Provider, {value: {dragging: this.state.isDragging}}, createElement(e, {...p}));
    }
  }, t = n;
  t.draggingDefaultProps = {momentum: true, momentumOptions: {friction: 2.1, tolerance: 1}, momentumVelocityMultiplier: 800, speedX: 1, speedY: 1, bounce: true, bounceOptions: {friction: 40, tension: 200, tolerance: 1}, directionLock: false, directionLockThreshold: {x: 10, y: 10}, overdrag: true, overdragScale: 0.5, pixelAlign: true, velocityTimeout: 100, velocityScale: 890, horizontal: true, vertical: true, enabled: true, constraints: {}, mouseWheel: false}, t.defaultProps = Object.assign({}, e.defaultProps, n.draggingDefaultProps);
  let r = t;
  return rR(r, e), r;
}
var iR = Oi(), Qc = {onMouseEnter: "mouseenter", onMouseLeave: "mouseleave"}, ep = Object.keys(Qc), aR = {panstart: ["onPanStart"], pan: ["onPan"], panend: ["onPanEnd"], tapstart: ["onTapStart", "onMouseDown"], tap: ["onTap", "onClick"], tapend: ["onTapEnd", "onMouseUp"], mousewheelstart: ["onMouseWheelStart"], mousewheel: ["onMouseWheel"], mousewheelend: ["onMouseWheelEnd"]}, sR = new Set(["tapstart", "tap", "tapend"]);
function Zv(e) {
  var r;
  let t = (r = class extends Component {
    constructor() {
      super(...arguments);
      this.shouldCancelTap = false;
      this.activeEventListeners = new Map();
      this.hasFramerEventListener = false;
      this.component = createRef();
    }
    get element() {
      return this.component.current && this.component.current.element;
    }
    componentDidMount() {
      this.addEventListeners();
    }
    componentDidUpdate(o) {
      this.addEventListeners(o);
    }
    componentWillUnmount() {
      this.removeEventListeners();
    }
    addEventListeners(o) {
      this.element && !this.hasFramerEventListener ? (this.element.addEventListener("FramerEvent", ({detail: i}) => {
        let a = i.type, s = i.event;
        this.handleEvent(a, s);
      }), ep.forEach((i) => this.addHoverEvent(i)), this.hasFramerEventListener = true) : this.element && o ? ep.forEach((i) => this.checkHoverEvent(i, o)) : this.element || (this.hasFramerEventListener = false);
    }
    removeEventListeners() {
      ep.forEach((o) => this.removeHoverEvent(o));
    }
    addHoverEvent(o) {
      let i = this.props[o];
      if (this.element && i) {
        let a = (l) => {
          let u = new ct(l);
          i(u);
        };
        this.activeEventListeners.set(o, a);
        let s = Qc[o];
        this.element.addEventListener(s, a);
      }
    }
    removeHoverEvent(o) {
      let i = this.activeEventListeners.get(o);
      if (this.element && i) {
        let a = Qc[o];
        this.element.removeEventListener(a, i), this.activeEventListeners.delete(o);
      }
    }
    checkHoverEvent(o, i) {
      i[o] !== this.props[o] && (this.removeHoverEvent(o), this.addHoverEvent(o));
    }
    handleEvent(o, i) {
      let a = aR[o];
      !a || a.forEach((s) => {
        let l = this.props[s], u = this.shouldCancelTap && sR.has(s);
        l && !u && l(i);
      });
    }
    render() {
      return createElement(Jc.Consumer, null, (o) => (this.shouldCancelTap = o.dragging, createElement(e, {...this.props, ref: this.component})));
    }
  }, r.defaultProps = Object.assign({}, e.defaultProps), r);
  return iR(t, e), t;
}
var Qv = (e, t) => Object.prototype.hasOwnProperty.call(e, t);
function He(e = {}, t = false, r = true) {
  let n = {};
  n[Tr] = {makeAnimatables: t, observeAnimatables: r, observers: new fi(), reset() {
    for (let i in o)
      Qv(o, i) && (o[i] = Qv(e, i) ? e[i] : void 0);
  }, transactions: new Set()};
  let o = new Proxy(n, cR);
  return Object.assign(o, e), o;
}
(function(r) {
  function e(n) {
    return n[Tr].reset();
  }
  r.resetObject = e;
  function t(n, o) {
    return n[Tr].observers.add(o);
  }
  r.addObserver = t;
})(He || (He = {}));
var ey = class {
  constructor() {
    this.set = (t, r, n, o) => {
      if (r === Tr)
        return false;
      let i = t[Tr], a, s;
      if (ae(n) ? (a = n, s = a.get()) : s = n, i.makeAnimatables && typeof n != "function" && typeof n != "object" && !a && (a = q(n)), i.observeAnimatables && a) {
        let c = i.transactions;
        a.onUpdate({update: (f, p) => {
          p && c.add(p), i.observers.notify({value: o}, p);
        }, finish: (f) => {
          c.delete(f) && i.observers.finishTransaction(f);
        }});
      }
      let l = false, u = true;
      if (t[r] !== void 0) {
        ae(t[r]) ? (u = t[r].get() !== s, t[r].set(s)) : (u = t[r] !== s, t[r] = s);
        let c = s !== null && typeof s == "object";
        (Array.isArray(s) || c) && (u = true), l = true;
      } else
        a && (n = a), l = Reflect.set(t, r, n);
      return u && i.observers.notify({value: o}), l;
    };
    this.get = (t, r, n) => {
      if (r === Tr)
        return t[r];
      let o = Reflect.get(t, r, n);
      return typeof o == "function" ? o.bind(n) : o;
    };
  }
  deleteProperty(t, r) {
    let n = Reflect.deleteProperty(t, r);
    return t[Tr].observers.notify({value: t}), n;
  }
  ownKeys(t) {
    let r = Reflect.ownKeys(t), n = r.indexOf(Tr);
    return n !== -1 && r.splice(n, 1), r;
  }
  getOwnPropertyDescriptor(t, r) {
    if (r !== Tr)
      return Reflect.getOwnPropertyDescriptor(t, r);
  }
}, cR = new ey(), Tr = Symbol("private");
var pR = "radius";
function fR(e) {
  return pR in e;
}
function ki(e) {
  let t = Number(e);
  return typeof e == "string" && isNaN(t) ? e : (ae(e) && (t = q.getNumber(e)), t ? `${t}px` : "0");
}
function Vi(e) {
  return e && e !== "0";
}
function ty(e, t) {
  if (!fR(e))
    return;
  let {radius: r} = e;
  if (typeof r == "string" || ae(r) || k(r)) {
    let n = ki(r);
    Vi(n) && (t.borderTopLeftRadius = t.borderTopRightRadius = t.borderBottomRightRadius = t.borderBottomLeftRadius = n);
  } else if (r) {
    let n = ki(r.topLeft), o = ki(r.topRight), i = ki(r.bottomRight), a = ki(r.bottomLeft);
    (Vi(n) || Vi(o) || Vi(i) || Vi(a)) && (t.borderTopLeftRadius = n, t.borderTopRightRadius = o, t.borderBottomRightRadius = i, t.borderBottomLeftRadius = a);
  }
}
function ry(e, t) {
  !e.blendingMode || e.blendingMode === "normal" || (t.mixBlendMode = e.blendingMode);
}
function ny(e, t) {
  e.overflow && (t.overflow = e.overflow);
}
var mR = "opacity";
function oy(e) {
  return mR in e;
}
function pl(e, t) {
  if (!oy(e))
    return;
  let r = q.getNumber(e.opacity);
  r !== 1 && (t.opacity = r);
}
var dR = ["color", "x", "y", "blur"], tp;
(function(t) {
  function e(r) {
    return r && dR.every((n) => n in r);
  }
  t.is = e;
})(tp || (tp = {}));
var hR = ["inset", "color", "x", "y", "blur", "spread"], bo;
(function(r) {
  function e(n) {
    return n && hR.every((o) => o in n);
  }
  r.is = e;
  function t(n) {
    return `${n.inset ? "inset " : ""}${n.x}px ${n.y}px ${n.blur}px ${n.spread}px ${n.color}`;
  }
  r.toCSS = t;
})(bo || (bo = {}));
var gR = /var\(([^),]+)/, _i = createContext(() => null), iy = class extends PureComponent {
  constructor() {
    super(...arguments);
    this.lookup = (t) => {
      let r = gR.exec(t), n = r ? r[1].trim() : "";
      return this.props.customProperties[n] || null;
    };
  }
  render() {
    let {children: t, customProperties: r} = this.props;
    return createElement(_i.Provider, {value: this.lookup}, createElement("div", {style: r}, t));
  }
};
function sy(e) {
  let t = [];
  if (e && e.length) {
    let r = e.map((n) => `drop-shadow(${n.x}px ${n.y}px ${n.blur}px ${n.color})`);
    t.push(...r);
  }
  return t;
}
function fl(e, t) {
  if (!e.shadows || e.shadows.length === 0)
    return;
  let r = e.shadows.map((n) => `${n.x}px ${n.y}px ${n.blur}px ${n.color}`).join(", ");
  !r || (t.textShadow = r);
}
function ly(e, t) {
  if (!e.shadows || e.shadows.length === 0)
    return;
  let r = e.shadows.map((n) => bo.toCSS(n)).join(", ");
  !r || (t.boxShadow = r);
}
function uy(e, t, r, n, o, i, a, s) {
  let l = [], u = null, c = null, f = false, p = [], d = [], m = e.length, h = "svg-shadow", v = O.current() === O.canvas ? {className: h} : {};
  for (let y = 0, C = m; y < C; y++) {
    let P = e[y];
    P.inset ? d.push(P) : p.push(P);
  }
  if (p.length > 0) {
    p.reverse();
    let y = r.add("_shadow_out"), C = ke.atOrigin(t), P = [C];
    for (let Z = 0, B = p.length; Z < B; Z++) {
      let K = p[Z], V = rp(K, C, true);
      V !== null && P.push(V);
    }
    let b = 0, R = [], E = [];
    for (let Z = 0, B = p.length; Z < B; Z++) {
      let K = p[Z], V = bR(r, K, Z);
      b = Math.max(b, K.blur), R.push(V.filterElements), E.push(V.mergeElement);
    }
    let I = i;
    k(I) || (I = 0);
    let M = s.strokeMiterlimit;
    k(M) || (M = 4);
    let A = ke.merge(...P);
    A = ke.inflate(A, (I * M / 2 + b) * 1.1);
    let L = t.width + (i ? i / 2 : 0.1), U = t.height + (i ? i / 2 : 0.1), $ = A.x / L * 100, G = A.y / U * 100, W = A.width / L * 100, te = A.height / U * 100;
    l.push(createElement("filter", {key: y.id, id: y.id, x: `${$.toFixed(1)}%`, y: `${G.toFixed(1)}%`, width: `${W.toFixed(1)}%`, height: `${te.toFixed(1)}%`, filterUnits: "objectBoundingBox", ...v}, R, p.length > 1 ? createElement("feMerge", null, E) : null)), u = createElement("g", {filter: y.urlLink, ...v}, createElement("use", {...s, fill: "black", fillOpacity: n <= 0 ? 0 : 1, stroke: "black", strokeOpacity: o <= 0 ? 0 : 1, strokeWidth: o > 0 ? i : 0, xlinkHref: r.link, clipPath: a.urlLink}));
  }
  if (d.length) {
    d.reverse();
    let y = r.add("_shadow_inside"), C = ke.atOrigin(t), P = [C];
    for (let W = 0, te = d.length; W < te; W++) {
      let Z = d[W], B = rp(Z, C, true);
      B !== null && P.push(B);
    }
    let b = ke.merge(...P), R = t.width + (i ? i / 2 : 0.1), E = t.height + (i ? i / 2 : 0.1), I = b.x / R * 100, M = b.y / E * 100, A = b.width / R * 100, L = b.height / E * 100, U = [], $ = [];
    for (let W = 0, te = d.length; W < te; W++) {
      let Z = d[W], B = SR(r, Z, W);
      U.push(B.filterElements), $.push(B.mergeElement);
    }
    l.push(createElement("filter", {key: y.id, id: y.id, x: `${I.toFixed(1)}%`, y: `${M.toFixed(1)}%`, width: `${A.toFixed(1)}%`, height: `${L.toFixed(1)}%`, filterUnits: "objectBoundingBox", ...v}, U, d.length > 1 ? createElement("feMerge", null, $) : null));
    let G;
    c = createElement("use", {fill: "black", fillOpacity: "1", filter: y.urlLink, xlinkHref: r.link, clipPath: G, ...v});
  }
  return {definition: l, outsetElement: u, insetElement: c, needsStrokeClip: f};
}
function bR(e, t, r) {
  let n = e.add("_outer_shadow" + r), o = n.add("offset").id, i = n.add("blur").id, a = n.add("matrix").id, s = createElement(xR, {key: n.id + "-filters", shadow: t, blurId: i, offsetId: o, matrixId: a}), l = createElement("feMergeNode", {key: n.id + "-merge", in: a});
  return {filterElements: s, mergeElement: l};
}
var xR = (e) => {
  let t = useContext(_i), {shadow: r, blurId: n, offsetId: o, matrixId: i} = e, a = r.color, s = t(a);
  s && (a = s);
  let l = st.toRgb(a), u = Pt(l.r / 255, 3), c = Pt(l.g / 255, 3), f = Pt(l.b / 255, 3), p = `0 0 0 0 ${u}   0 0 0 0 ${c}   0 0 0 0 ${f}  0 0 0 ${l.a} 0`;
  return createElement(Fragment, null, createElement("feOffset", {dx: r.x, dy: r.y, in: "SourceAlpha", result: o}), createElement("feGaussianBlur", {stdDeviation: r.blur / 2, in: o, result: n}), createElement("feColorMatrix", {colorInterpolationFilters: "sRGB", values: p, type: "matrix", in: n, result: i}));
};
function SR(e, t, r) {
  let n = e.add("_inside_shadow" + r), o = n.add("blur").id, i = n.add("offset").id, a = n.add("composite").id, s = n.add("matrix").id, l = createElement(CR, {key: n.id + "-filters", shadow: t, blurId: o, offsetId: i, compositeId: a, matrixId: s}), u = createElement("feMergeNode", {key: n.id + "-merge", in: s});
  return {filterElements: l, mergeElement: u};
}
var CR = (e) => {
  let t = useContext(_i), {shadow: r, blurId: n, offsetId: o, compositeId: i, matrixId: a} = e, s = r.color, l = t(s);
  l && (s = l);
  let u = st.toRgb(s), c = u.r / 255, f = u.g / 255, p = u.b / 255, d = `0 0 0 0 ${c}   0 0 0 0 ${f}   0 0 0 0 ${p}  0 0 0 ${u.a} 0`;
  return createElement(Fragment, null, createElement("feGaussianBlur", {stdDeviation: r.blur / 2, in: "SourceAlpha", result: n}), createElement("feOffset", {dx: r.x, dy: r.y, in: n, result: o}), createElement("feComposite", {in: o, in2: "SourceAlpha", operator: "arithmetic", k2: "-1", k3: "1", result: i}), createElement("feColorMatrix", {colorInterpolationFilters: "sRGB", values: d, type: "matrix", in: i, result: a}));
};
function rp(e, t, r) {
  let n = e.blur;
  if (bo.is(e) && r !== true) {
    if (e.inset)
      return null;
    n += e.spread;
  }
  let o, i, a, s;
  return r === true ? (o = -Math.abs(e.x) - n, i = Math.abs(e.x) + t.width + n, a = -Math.abs(e.y) - n, s = Math.abs(e.y) + t.height + n) : (o = e.x - n, i = e.x + t.width + n, a = e.y - n, s = e.y + t.height + n), i <= o || s <= a ? null : {x: o, y: a, width: i - o, height: s - a};
}
function PR(e, t) {
  let r = [];
  k(e.brightness) && r.push(`brightness(${e.brightness / 100})`), k(e.contrast) && r.push(`contrast(${e.contrast / 100})`), k(e.grayscale) && r.push(`grayscale(${e.grayscale / 100})`), k(e.hueRotate) && r.push(`hue-rotate(${e.hueRotate}deg)`), k(e.invert) && r.push(`invert(${e.invert / 100})`), k(e.saturate) && r.push(`saturate(${e.saturate / 100})`), k(e.sepia) && r.push(`sepia(${e.sepia / 100})`), k(e.blur) && r.push(`blur(${e.blur}px)`), e.dropShadows && r.push(...sy(e.dropShadows)), r.length !== 0 && (t.filter = t.WebkitFilter = r.join(" "));
}
function TR(e, t) {
  k(e.backgroundBlur) && (t.backdropFilter = t.WebkitBackdropFilter = `blur(${e.backgroundBlur}px)`);
}
function xo(e, t) {
  TR(e, t), PR(e, t);
}
function fy(e, t) {
  let {color: r} = e;
  typeof r == "string" ? t.color = r : z.isColorObject(r) && (t.color = r.initialValue || z.toRgbString(r));
}
function np(e, t, r = false) {
  Xs(e, t), ty(e, t), xo(e, t), ry(e, t), ny(e, t), pl(e, t), fy(e, t), r ? fl(e, t) : ly(e, t);
}
var {getNumber: Lt} = q, my = {z: 0, rotation: 0, rotationX: 0, rotationY: 0, rotationZ: 0, scale: 1, scaleX: 1, scaleY: 1, scaleZ: 1, skew: 0, skewX: 0, skewY: 0, originX: 0.5, originY: 0.5, originZ: 0};
function ml(e, t) {
  return typeof t == "string" && (t = parseFloat(t)), k(t) ? t : Lt(e);
}
function dy(e, t, r) {
  let n = r, o = typeof t.x == "number" ? `${t.x}px` : t.x, i = typeof t.y == "number" ? `${t.y}px` : t.y, a = Lt(e.z), s = Lt(e.scaleZ), l = Lt(e.originZ), u = ml(e.rotationZ, Qe(n.rotateZ)), c = ml(e.rotationX, Qe(n.rotateX)), f = ml(e.rotationY, Qe(n.rotateY)), p = Lt(e.scale), d = Lt(e.scaleX), m = Lt(e.scaleY), h = Lt(e.skew), v = Lt(e.skewX), y = Lt(e.skewY), C = ml(e.rotation, Qe(n.rotate));
  he.target === O.export || a !== 0 || s !== 1 || l !== 0 || u !== 0 || c !== 0 || f !== 0 ? r.transform = `
            ${`translate3d(${o}, ${i}, ${a}px)`}
            scale3d(${d * p}, ${m * p}, ${s})
            skew(${h}deg,${h}deg)
            skewX(${v}deg)
            skewY(${y}deg)
            translateZ(${l}px)
            rotateX(${c}deg)
            rotateY(${f}deg)
            rotateZ(${(C + u).toFixed(4)}deg)
            translateZ(${-l}px)` : r.transform = `
            ${`translate(${o}, ${i})`}
            scale(${d * p}, ${m * p})
            skew(${h}deg,${h}deg)
            skewX(${v}deg)
            skewY(${y}deg)
            rotate(${C.toFixed(4)}deg)`;
  let b = `${Lt(e.originX) * 100}% ${Lt(e.originY) * 100}%`;
  r.transformOrigin = b, r.WebkitTransformOrigin = b;
}
function hy(e) {
  switch (e) {
    case "fit":
      return "contain";
    case "stretch":
      return "100% 100%";
    default:
      return "cover";
  }
}
function wR(e, t) {
  let r = gi(e);
  r && (t.backgroundImage = `url("${r.src}")`, t.backgroundSize = hy(r.fit), t.backgroundRepeat = "no-repeat", t.backgroundPosition = "center");
}
function ji(e) {
  return k(e) ? `${e}px` : e;
}
function gy(e, t, r) {
  if (t[r] !== void 0) {
    let n = q.get(t[r], void 0);
    e[r] = ji(n);
  }
}
var Cn = class extends Pe {
  constructor() {
    super(...arguments);
    this.element = null;
    this.imageDidChange = false;
    this.state = {size: null};
    this.updateStyle = () => {
      !this.element || Object.assign(this.element.style, this.getStyle());
    };
    this.setElement = (t) => {
      this.element = t;
    };
    this.onPropsChange = (t) => {
      let r = Cn.rect(q.objectToValues(t.value));
      this.state.size && ae(this.state.size.width) && ae(t.value.width) && this.state.size.width.set(r.width), this.state.size && ae(this.state.size.height) && ae(t.value.height) && this.state.size.height.set(r.height), this.updateStyle();
    };
    this.onSizeChange = () => {
      this.updateStyle();
    };
  }
  static rect(t) {
    let r = mt.fromProperties(t);
    return mt.toRect(r, t.parentSize || null, null, true);
  }
  get rect() {
    return Cn.rect(this.props);
  }
  static getDerivedStateFromProps(t, r) {
    let n = Cn.updatedSize(t, r), {target: o} = he;
    return (t.background && rt.isImageObject(t.background) ? t.background.src : null) ? {size: n} : r.size && (o === O.preview || r.size.width === n.width && r.size.height === n.height) ? null : {size: n};
  }
  static updatedSize(t, r) {
    let n = Cn.rect(t), o = r.size, i = {width: n.width, height: n.height}, {target: a} = he;
    return o ? ae(o.width) && ae(o.height) ? (o.width.set(i.width), o.height.set(i.height)) : o = i : a === O.preview ? o = He(i, true) : o = i, o;
  }
  getStyle() {
    let t = this.rect, r = {display: "block", position: "absolute", width: `${t.width}px`, height: `${t.height}px`, pointerEvents: void 0, userSelect: "none"}, n = q.get(this.props.left, void 0), o = q.get(this.props.top, void 0);
    Object.assign(r, this.props._initialStyle);
    let i = this.context.size !== Ae.Disabled, a = q.get(this.props.perspective, void 0);
    r.perspective = a, r.WebkitPerspective = a;
    let s, l = q.get(this.props.backfaceVisible, void 0);
    l === true ? s = "visible" : l === false && (s = "hidden"), r.backfaceVisibility = s, r.WebkitBackfaceVisibility = s;
    let u = q.get(this.props.preserve3d, void 0);
    if (u === true ? r.transformStyle = "preserve-3d" : u === false && (r.transformStyle = "flat"), !i) {
      gy(r, this.props, "right"), gy(r, this.props, "bottom");
      let f = q.get(this.props.width, void 0), p = ji(f), d = q.get(this.props.height, void 0), m = ji(d);
      typeof n == "string" && n.endsWith("%") && this.props.right === null && (n = `calc(${n} - calc(${p}} / 2))`, r.width = p), typeof o == "string" && o.endsWith("%") && this.props.bottom === null && (o = `calc(${o} - calc(${m} / 2))`, r.height = m), o !== void 0 && r.bottom !== void 0 ? (r.height = void 0, o = ji(q.get(this.props.top, void 0))) : r.height = m, n !== void 0 && r.right !== void 0 ? (r.width = void 0, n = ji(q.get(this.props.left, void 0))) : r.width = p;
    }
    let c = {...t};
    return typeof n != "undefined" && (c.x = n), typeof o != "undefined" && (c.y = o), dy(this.props, c, r), np(this.props, r), wR(this.props, r), Pe.applyWillChange(this.props, r, false), this.props.style && Object.assign(r, this.props.style), r;
  }
  componentDidMount() {
    let {target: t} = he;
    t === O.preview && (this.propsObserver = He(this.props, true), this.propsObserverCancel = He.addObserver(this.propsObserver, this.onPropsChange), this.props.parentSize && ae(this.props.parentSize.width) && ae(this.props.parentSize.height) && (this.sizeObserver = He(this.props.parentSize, true), this.sizeObserverCancel = He.addObserver(this.sizeObserver, this.onSizeChange)));
  }
  componentDidUpdate() {
    let {target: t} = he;
    this.propsObserverCancel && this.propsObserverCancel(), this.sizeObserverCancel && this.sizeObserverCancel(), t === O.preview && (this.propsObserver = He(this.props, true), this.propsObserverCancel = He.addObserver(this.propsObserver, this.onPropsChange), this.props.parentSize && ae(this.props.parentSize.width) && ae(this.props.parentSize.height) && (this.sizeObserver = He(this.props.parentSize, true), this.sizeObserverCancel = He.addObserver(this.sizeObserver, this.onSizeChange)));
  }
  componentWillUnmount() {
    this.propsObserverCancel && this.propsObserverCancel(), this.propsObserverCancel = void 0, this.sizeObserverCancel && this.sizeObserverCancel(), this.sizeObserverCancel = void 0;
  }
  render() {
    N.perf && N.perf.nodeRender();
    let {visible: t, id: r, className: n} = this.props;
    if (!t)
      return null;
    let o = this.getStyle(), i = this.rect, a = {width: i.width, height: i.height};
    return createElement("div", {id: r, style: o, ref: this.setElement, className: n}, createElement(As, {parentSize: a}, this.layoutChildren()), createElement(Cs, {...this.props}));
  }
  layoutChildren() {
    let t = this.props._forwardedOverrides, r = this.props._overrideForwardingDescription;
    if (r) {
      let o = false;
      t = {};
      for (let i in r)
        o = true, t[i] = this.props[r[i]];
      o || (t = void 0);
    }
    let n = Children.map(this.props.children, (o) => dg(o) ? cloneElement(o, {parentSize: this.state.size, _forwardedOverrides: t}) : t && o ? cloneElement(o, {_forwardedOverrides: t}) : o);
    return n && n.length === 1 && typeof n[0] == "string" && (n = [createElement(RR, {key: "0"}, n)]), n;
  }
}, Ft = Cn;
Ft.supportsConstraints = true, Ft.defaultFrameSpecificProps = {...mg, ...my, opacity: 1, background: z("rgba(0, 170, 255, 0.3)"), visible: true, borderWidth: 0, borderColor: "#222", borderStyle: "solid"}, Ft.defaultProps = {...Pe.defaultProps, ...Cn.defaultFrameSpecificProps};
Ft.contextType = vi;
var RR = (e) => {
  let t = Object.assign({}, {height: "100%", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "Helvetica"}, e.style || {});
  return createElement("div", {style: t}, e.children);
};
var FR = ["_border", "_constraints", "animate", "initial", "variants", "transition", "inherit", "center", "initial", "transformTemplate", "transformValues", "animate", "variants", "transition", "onUpdate", "onAnimationComplete", "onPanSessionStart", "onTapCancel", "whileTap", "whileHover", "onHoverStart", "onHoverEnd", "drag", "dragDirectionLock", "dragPropagation", "dragConstraints", "dragElastic", "dragMomentum", "dragTransition", "onDragStart", "onDragEnd", "onDrag", "onDirectionLock", "onDragTransitionEnd", "x", "y", "rotate", "rotateX", "rotateY", "rotateZ", "position", "border", "borderRadius", "shadow", "size"], MR = ["autoSize", "aspectRatio", "borderWidth", "borderStyle", "borderColor", "centerX", "centerY"];
function op(e) {
  let t;
  for (let r in e)
    if (ae(e[r]))
      return true;
  for (t of FR)
    if (e.hasOwnProperty(t))
      return false;
  for (t of MR)
    if (e.hasOwnProperty(t))
      return true;
  return false;
}
var dl = Zv(Ft), hl = forwardRef(function(t, r) {
  let n = Hr();
  if (op(t)) {
    let o = t.parentSize || yi(n);
    return createElement(dl, {...t, parentSize: o});
  }
  return createElement(be, {...t, ref: r});
});
function wr({title: e = "", description: t = "Click and drag the connector to any frame on the canvas \u2192", children: r, size: n, hide: o, insideUserCodeComponent: i = false}) {
  let {target: a} = he, s = Children.count(r);
  return i && s === 0 ? createElement(be, {...n, "data-name": "placeholder"}) : a !== O.canvas || o || s !== 0 ? null : createElement(be, {key: "empty-state", className: "framerInternalUI-canvasPlaceholder", top: 0, left: 0, bottom: 0, right: 0, style: {position: "absolute"}}, createElement("div", {style: {display: "flex", alignItems: "center", lineHeight: "1.4", height: "100%", width: "100%"}}, createElement("div", {style: {display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", width: "100%", WebkitMaskImage: `linear-gradient(90deg, black, black calc(100% - 12px * ${AR}), transparent)`}}, createElement(DR, null, e), createElement(LR, null, t))));
}
var AR = "var(--framerInternalCanvas-canvasPlaceholderContentScaleFactor, 1)", DR = ({children: e}) => createElement("span", {style: {display: "flex", flexDirection: "column", textAlign: "center", flexGrow: 1, flexShrink: 0, fontWeight: 600, marginBottom: "5px"}}, e), LR = ({children: e}) => createElement("span", {style: {display: "flex", flexDirection: "column", textAlign: "center", flexGrow: 1, flexShrink: 0, fontWeight: 400, maxWidth: "200px"}}, e);
function Bi(e, t) {
  let r, n = (...i) => {
    N.clearTimeout(r), r = N.setTimeout(e, t, ...i);
  }, o = () => {
    N.clearTimeout(r);
  };
  return n.cancel = o, n;
}
function gl(e, {enabled: t, initial: r, prev: n, direction: o, constraints: i, offsetX: a, offsetY: s, onScrollStart: l, onScroll: u, onScrollEnd: c}) {
  let f = useRef(false), p = useCallback(() => {
    let m = _R(a, s), h = {point: m, velocity: {x: a.getVelocity(), y: s.getVelocity()}, offset: {x: m.x - r.x, y: m.y - r.y}, delta: {x: m.x - n.x, y: m.y - n.y}};
    return n.x = m.x, n.y = m.y, h;
  }, []), d;
  if (t) {
    let m = function(P) {
      return i.current === null ? P : Pr(P, i.current.left, i.current.right);
    }, h = function(P) {
      return i.current === null ? P : Pr(P, i.current.top, i.current.bottom);
    }, v = function(P) {
      a.stop(), a.set(m(a.get() - P));
    }, y = function(P) {
      s.stop(), s.set(h(s.get() - P));
    }, C = Bi(() => {
      c && c(p()), f.current = false;
    }, 200);
    d = (P) => {
      if (P.preventDefault(), !f.current) {
        let b = a.get(), R = s.get();
        r.x = b, r.y = R, n.x = b, n.y = R, l && l(p()), f.current = true;
      }
      switch (o) {
        case "horizontal":
          v(P.deltaX);
          break;
        case "vertical":
          y(P.deltaY);
          break;
        default:
          v(P.deltaX), y(P.deltaY);
      }
      u && u(p()), C();
    };
  }
  Vr(e, "wheel", d, {passive: false});
}
function _R(e, t) {
  return {x: e.get(), y: t.get()};
}
var NR = {horizontal: "x", vertical: "y", both: true};
function BR(e) {
  return e && NR[e];
}
var HR = ({dragDirection: e, children: t, fromCanvasComponent: r}) => useMemo(() => Children.map(t, (n) => {
  if (n === null || typeof n != "object" || typeof n.type == "string")
    return n;
  let o = {};
  switch (e) {
    case "vertical":
      o.width = "100%";
      break;
    case "horizontal":
      o.height = "100%";
      break;
    default:
      return n;
  }
  let i = r ? {style: Object.assign({}, n.props.style, o)} : o;
  return cloneElement(n, i);
}), [e, t]), by = (e) => typeof e == "number" ? e : e.get(), xy = forwardRef(function(t, r) {
  let {direction: n = "vertical", directionLock: o = false, dragEnabled: i = true, dragElastic: a, dragMomentum: s, dragTransition: l, wheelEnabled: u = true, contentOffsetX: c = 0, contentOffsetY: f = 0, contentWidth: p, contentHeight: d, onScrollStart: m, onScroll: h, onScrollEnd: v, onDragStart: y, onDrag: C, onDragEnd: P, onUpdate: b, onDirectionLock: R, style: E, children: I, scrollAnimate: M, resetOffset: A, overdragEnabled: L = true, layoutId: U, native: $, ...G} = t, W = lt(t, {specificLayoutId: U, postfix: "scroll"}), te = et(typeof c == "number" ? c : 0), Z = et(typeof f == "number" ? f : 0), B = De(c) ? c : te, K = De(f) ? f : Z, V = useRef(null), S = Zu(), x = Co(), g = useRef(true);
  at(), useEffect(() => {
    S.updateConstraints();
  });
  function w(se) {
    return se = zR(se), p !== void 0 && (se.left = -p), d !== void 0 && (se.top = -d), V.current = se;
  }
  let {initial: j, prev: X} = useRef({initial: {x: 0, y: 0}, prev: {x: 0, y: 0}}).current, oe = O.current() === O.preview, ne = useRef(null), ee = r || ne, xe = useRef(null), Fe = useRef(null);
  function ge(se) {
    let pe = se && g.current === false;
    return A && pe;
  }
  function We() {
    if (!xe.current || !ee.current)
      return;
    let se = ge(x);
    g.current = x;
    let pe = Fe.current;
    if (pe === null && c === void 0 && f === void 0)
      return;
    let Je = pe === null || !De(c) && c !== pe.offsetX || !De(f) && f !== pe.offsetY, Vt = xe.current.offsetWidth - ee.current.offsetWidth, ft = xe.current.offsetHeight - ee.current.offsetHeight, _t = Vt !== (pe == null ? void 0 : pe.maxXOffset) || ft !== (pe == null ? void 0 : pe.maxYOffset), Hl = (pe == null ? void 0 : pe.x) !== B.get() || (pe == null ? void 0 : pe.y) !== K.get();
    if (se || Je || _t && !Hl) {
      let ue = n !== "vertical" ? by(c) : 0, fe = n !== "horizontal" ? by(f) : 0, le = -Math.min(ue, Vt), Ve = -Math.min(fe, ft);
      B.set(le), K.set(Ve), Fe.current = {maxXOffset: Vt, maxYOffset: ft, offsetX: ue, offsetY: fe, x: le, y: Ve};
    }
  }
  useLayoutEffect(() => {
    O.current() === O.canvas && We();
  }), useLayoutEffect(() => {
    O.current() !== O.canvas && We();
  }, []), useEffect(() => {
    ge(x) && We(), x === false && (g.current = false);
  }, [x]);
  let Ue = () => ({x: B.get(), y: K.get()}), Y = useCallback(() => {
    let se = Ue();
    j.x = se.x, j.y = se.y, X.x = se.x, X.y = se.y;
  }, []), D = useCallback(() => {
    let se = Ue(), pe = {point: se, velocity: {x: B.getVelocity(), y: K.getVelocity()}, offset: {x: se.x - j.x, y: se.y - j.y}, delta: {x: se.x - X.x, y: se.y - X.y}};
    return X.x = se.x, X.y = se.y, pe;
  }, [B, K]), _ = useCallback(() => {
    b && b({x: B.get(), y: K.get()}), h && h(D());
  }, [h, b, D, B, K]), ie = useCallback(() => {
    Me.update(_, false, true);
  }, [_]), we = (se, pe) => {
    Y(), y && y(se, pe), m && m(pe);
  }, ve = () => v && v(D());
  gl(ee, {enabled: u, initial: j, prev: X, direction: n, offsetX: B, offsetY: K, onScrollStart: (se) => {
    S.updateConstraints(), m == null || m(se);
  }, onScroll: h, onScrollEnd: v, constraints: V});
  let Xt = et(0), ar = et(0);
  useLayoutEffect(() => {
    let se = (Je) => {
      let Vt = ee.current;
      if (!(Vt instanceof HTMLDivElement))
        return;
      Vt.scrollLeft = -Je;
      let ft = V.current;
      if (ft && L) {
        let _t = 0;
        Je > ft.right && (_t = Je), Je < ft.left && (_t = Je - ft.left), Xt.set(_t);
      }
      ie();
    }, pe = B.get();
    return pe !== 0 && se(pe), B.onChange(se);
  }, [B, Xt, ie, L]), useLayoutEffect(() => {
    let se = (Je) => {
      let Vt = ee.current;
      if (!(Vt instanceof HTMLDivElement))
        return;
      Vt.scrollTop = -Je;
      let ft = V.current;
      if (ft && L) {
        let _t = 0;
        Je > ft.bottom && (_t = Je), Je < ft.top && (_t = Je - ft.top), ar.set(_t);
      }
      ie();
    }, pe = K.get();
    return pe !== 0 && se(pe), K.onChange(se);
  }, [K, ar, ie, L]);
  let sr = useCallback(() => {
    let se = ee.current;
    if (!(se instanceof HTMLDivElement))
      return;
    let pe = Math.abs(B.get() + se.scrollLeft), Je = Math.abs(K.get() + se.scrollTop);
    pe > 1 && B.set(-se.scrollLeft), Je > 1 && K.set(-se.scrollTop);
  }, [B, K]), pt = Children.count(I) === 0, Vo = n !== "vertical" && !pt ? "auto" : "100%", _o = n !== "horizontal" && !pt ? "auto" : "100%", ta = G.__fromCanvasComponent ? {} : {width: G.__fromCodeComponentNode ? "100%" : G.width, height: G.__fromCodeComponentNode ? "100%" : G.height};
  return createElement(be, {"data-framer-component-type": "Scroll", background: "none", ...G, ...ta, style: {...E, willChange: oe ? "transform" : void 0, overflow: "hidden"}, onScroll: sr, preserve3d: G.preserve3d, ref: ee, layoutId: W, onBeforeLayoutMeasure: We}, createElement(be, {"data-framer-component-type": "ScrollContentWrapper", animate: M, drag: i && BR(n), dragDirectionLock: o, dragElastic: a, dragMomentum: s, dragTransition: l, dragConstraints: ee, dragControls: S, onDragStart: we, onDrag: C, onDragEnd: P, onDragTransitionEnd: ve, onDirectionLock: R, onMeasureDragConstraints: w, width: Vo, height: _o, _dragX: B, _dragY: K, position: "relative", x: L ? Xt : void 0, y: L ? ar : void 0, ref: xe, style: {display: pt ? "block" : "inline-block", willChange: oe ? "transform" : void 0, backgroundColor: "transparent", overflow: "visible", minWidth: "100%", minHeight: "100%"}, preserve3d: G.preserve3d}, createElement(wr, {children: I, size: {width: k(G.width) ? G.width : "100%", height: k(G.height) ? G.height : "100%"}, insideUserCodeComponent: !G.__fromCodeComponentNode, title: "Scroll", description: "Click and drag the connector to any frame on the canvas \u2192"}), HR({dragDirection: n, children: I, fromCanvasComponent: G.__fromCanvasComponent})));
});
function zR({top: e, left: t, right: r, bottom: n}) {
  let o = r - t;
  return {top: -(n - e), left: -o, right: 0, bottom: 0};
}
function Hi(...e) {
  return e.filter(Boolean).join(" ");
}
var tt;
(function(o) {
  o[o.None = 0] = "None", o[o.Running = 1] = "Running", o[o.Completed = 2] = "Completed", o[o.Cancelled = 3] = "Cancelled";
})(tt || (tt = {}));
function ap(...e) {
  let t = false, r = false;
  return e.forEach((n) => {
    t = t || n === 1, r = r || n === 3;
  }), t && !r;
}
function $R(...e) {
  return e.every((t) => t === 0 || t === 2);
}
var Py = 400;
function Ty({from: e, velocity: t, onUpdate: r, onComplete: n, onStop: o}) {
  let i = e, a = 0, s = 0, l = [], u = () => {
    ap(a, s) && r(i);
  }, c = () => {
    $R(a, s) && n();
  };
  return t.x && (a = 1, l.push(Nr({from: e.x, velocity: -t.x, timeConstant: Py, onUpdate: (f) => {
    i.x = f, Me.update(u, false, true);
  }, onComplete: () => {
    if (a !== 1)
      throw Error("animation x should be running when completing");
    a = 2, c();
  }}))), t.y && (s = 1, l.push(Nr({from: e.y, velocity: -t.y, timeConstant: Py, onUpdate: (f) => {
    i.y = f, Me.update(u, false, true);
  }, onComplete: () => {
    if (s !== 1)
      throw Error("animation y should be running when completing");
    s = 2, c();
  }}))), ap(a, s) || c(), {stop: () => {
    !ap(a, s) || (l.forEach((f) => f.stop()), a = a === 1 ? 3 : a, s = s === 1 ? 3 : s, o());
  }};
}
var Ry = 3, YR = Hs(), KR = fo();
function Ey(e) {
  return e instanceof HTMLElement ? e.style.touchAction : null;
}
function qR(e, t) {
  switch (t) {
    case "horizontal":
      return Ey(e) === "pan-x";
    case "vertical":
      return Ey(e) === "pan-y";
    default:
      return false;
  }
}
function ZR(e) {
  let t = e.tagName.toLowerCase();
  return t === "input" || t === "text" || t === "textarea";
}
function JR(e, t) {
  return !(!(e instanceof Element) || ZR(e) || e.hasAttribute("draggable") && !qR(e, t));
}
function Fy(e) {
  return {x: e.pageX, y: e.pageY};
}
function My(e, t, r) {
  (e == null ? void 0 : e.style) && (e.style[t] = r);
}
function QR(e, t) {
  var r;
  return (r = e == null ? void 0 : e.style) == null ? void 0 : r[t];
}
var Ee;
(function(a) {
  a[a.Idle = 0] = "Idle", a[a.TouchDown = 1] = "TouchDown", a[a.Drag = 2] = "Drag", a[a.DragLocked = 3] = "DragLocked", a[a.DragAnimation = 4] = "DragAnimation", a[a.Interrupted = 5] = "Interrupted";
})(Ee || (Ee = {}));
var sp = {};
Object.freeze(sp);
function Iy(e, t, r) {
  if (YR || O.current() !== O.preview)
    return sp;
  let n = dh.useRef(null);
  return useEffect(() => {
    if (!e.current)
      return;
    let o = e.current, i = 0, a = null, s = null, l = null, u = [];
    function c(m) {
      var y;
      switch (i) {
        case 0:
        case 4:
        case 3:
          return;
      }
      if (m.metaKey)
        return;
      let h = Fy(m);
      if (!s)
        return;
      let v = Re.subtract(h, s);
      if (i === 1 || i === 5) {
        let C = Math.abs(v.x), P = Math.abs(v.y);
        if ((C > Ry || P > Ry) && C !== P) {
          let b = C > P ? "horizontal" : "vertical";
          if (t === "horizontal" && b === "vertical" || t === "vertical" && b === "horizontal") {
            i = 3;
            return;
          }
          i = 2, a == null || a.forEach(([E]) => My(E, "pointerEvents", "none"));
        }
      }
      KR && m.preventDefault(), i === 2 && ((y = window.getSelection()) == null || y.empty(), u = Ay([...u, m]), l && (t !== "vertical" && (o.scrollLeft = l.x - v.x), t !== "horizontal" && (o.scrollTop = l.y - v.y)));
    }
    function f(m) {
      window.removeEventListener("mousemove", c, false), window.removeEventListener("mouseup", f), i === 2 && a && a.forEach(([v, y]) => My(v, "pointerEvents", y || "auto")), a = null;
      let h = tE({mouseMoveEvents: u, mouseUpEvent: m});
      if (s = null, i === 2) {
        let v = t !== "horizontal" && h.y !== 0, y = t !== "vertical" && h.x !== 0;
        if (!v && !y) {
          i = 0;
          return;
        }
        i = 4, n.current = Ty({from: {x: o.scrollLeft, y: o.scrollTop}, velocity: {x: y ? h.x : 0, y: v ? h.y : 0}, onUpdate: (C) => {
          y && (o.scrollLeft = C.x), v && (o.scrollTop = C.y);
        }, onStop: () => {
          i !== 5 && (i = 0), n.current = null;
        }, onComplete: () => {
          if (i !== 4)
            throw Error("On animation completion we should still be in the animation phase");
          i = 0, n.current = null;
        }});
      } else
        i = 0;
    }
    function p() {
      var m;
      (m = n.current) == null || m.stop();
    }
    function d(m) {
      var v;
      if (!r || m.metaKey)
        return;
      if (!JR(m.target, t)) {
        i === 4 && (i = 0, (v = n.current) == null || v.stop());
        return;
      }
      let h = i;
      if (i = h === 4 ? 5 : 1, s = Fy(m), a = document.elementsFromPoint(s.x, s.y).filter((y) => y instanceof HTMLElement || y instanceof SVGElement).map((y) => [y, QR(y, "pointerEvents")]), l = {x: o.scrollLeft, y: o.scrollTop}, u = [], n.current) {
        if (h !== 4)
          throw Error("When stopping a drag animation we need to be animating");
        n.current.stop();
      }
      window.addEventListener("mousemove", c), window.addEventListener("mouseup", f), o.addEventListener("mousewheel", p);
    }
    return o.addEventListener("mousedown", d), () => {
      var m;
      o.removeEventListener("mousedown", d), o.removeEventListener("mousewheel", p), window.removeEventListener("mousemove", c), window.removeEventListener("mouseup", f), i = 5, (m = n.current) == null || m.stop();
    };
  }, [e, t, r]), dh.useMemo(() => ({cancelEmulatedTouchScrollAnimation: () => {
    var o;
    (o = n.current) == null || o.stop();
  }}), []);
}
var eE = 4 / 60 * 1e3;
function Ay(e) {
  let r = new CustomEvent("getTime").timeStamp - eE;
  return e.filter((n) => n.timeStamp > r);
}
var Dy = {x: 0, y: 0};
function tE({mouseMoveEvents: e, mouseUpEvent: t}) {
  let n = Ay(e)[0];
  if (!n)
    return Dy;
  let o = t.clientX - n.clientX, i = t.clientY - n.clientY, a = t.timeStamp - n.timeStamp;
  return a === 0 ? Dy : {x: o / a * 1e3, y: i / a * 1e3};
}
var lp = createContext(true);
function Co() {
  return useContext(lp);
}
function up(e, t, r, n) {
  useLayoutEffect(() => {
    if (De(r)) {
      let o = () => {
        n == null || n();
        let i = e.current;
        i && (i[t] = Math.abs(r.get()));
      };
      return o(), r.onChange(o);
    } else if (k(r)) {
      let o = e.current;
      if (!o)
        return;
      n == null || n(), o[t] = Math.abs(r);
    }
  }, [r]);
}
var Ly = forwardRef(function(t, r) {
  let {direction: n = "vertical", scrollBarVisible: o = false, dragEnabled: i = true, contentOffsetX: a = 0, contentOffsetY: s = 0, contentWidth: l, contentHeight: u, children: c, resetOffset: f, onScroll: p, className: d, directionLock: m = false, wheelEnabled: h = true, scrollAnimate: v, dragTransition: y, dragMomentum: C, dragElastic: P, overdragEnabled: b = true, onScrollStart: R, onScrollEnd: E, onDragStart: I, onDrag: M, onDragEnd: A, onUpdate: L, onDirectionLock: U, layoutId: $, native: G, ...W} = t, te = lt(t, {specificLayoutId: $, postfix: "scroll"}), Z = useRef(null), B = r || Z, {cancelEmulatedTouchScrollAnimation: K} = Iy(B, n, i);
  at();
  let V = Co(), S = useRef(V), x = () => {
    if (!f)
      return;
    let w = S.current;
    if (S.current = V, !(V && !w))
      return;
    let X = B.current;
    !X || (n !== "vertical" && (K == null || K(), X.scrollLeft = Math.abs(De(a) ? a.get() : a)), n !== "horizontal" && (K == null || K(), X.scrollTop = Math.abs(De(s) ? s.get() : s)));
  };
  useLayoutEffect(x, [V]), up(B, "scrollLeft", a, K), up(B, "scrollTop", s, K);
  let g = W.__fromCanvasComponent ? {} : {width: W.__fromCodeComponentNode ? "100%" : W.width, height: W.__fromCodeComponentNode ? "100%" : W.height};
  return createElement(be, {ref: B, "data-framer-component-type": "NativeScroll", background: "none", ...W, ...g, onScroll: p, layoutId: te, onBeforeLayoutMeasure: x, className: Hi(d, `direction-${n}`, !o && "scrollbar-hidden")}, createElement(wr, {children: c, size: {width: k(W.width) ? W.width : "100%", height: k(W.height) ? W.height : "100%"}, insideUserCodeComponent: !W.__fromCodeComponentNode, title: "Scroll", description: "Click and drag the connector to any frame on the canvas \u2192"}), c);
});
var bl = forwardRef(function(t, r) {
  return t.native ? createElement(Ly, {ref: r, ...t}) : createElement(xy, {ref: r, ...t});
});
mn(bl, {native: {type: ce.Boolean, defaultValue: false}, direction: {type: ce.SegmentedEnum, title: "Direction", options: ["vertical", "horizontal", "both"], defaultValue: "vertical"}, contentOffsetX: {type: ce.Number, title: "Offset X", defaultValue: 0, min: 0, step: 10, displayStepper: true, hidden: ({direction: e}) => e === "vertical"}, contentOffsetY: {type: ce.Number, title: "Offset Y", defaultValue: 0, min: 0, step: 10, displayStepper: true, hidden: ({direction: e}) => e === "horizontal"}, directionLock: {type: ce.Boolean, title: "Lock", enabledTitle: "1 Axis", disabledTitle: "Off", defaultValue: true, hidden: ({native: e}) => e === true}, dragEnabled: {type: ce.Boolean, title: "Drag", enabledTitle: "On", disabledTitle: "Off", defaultValue: true}, overdragEnabled: {type: ce.Boolean, title: "Overdrag", enabledTitle: "On", disabledTitle: "Off", defaultValue: true, hidden: ({native: e}) => e === true}, wheelEnabled: {type: ce.Boolean, title: "Wheel", enabledTitle: "On", disabledTitle: "Off", defaultValue: true, hidden: ({native: e}) => e === true}, scrollBarVisible: {type: ce.Boolean, title: "Scroll Bar", enabledTitle: "Visible", disabledTitle: "Hidden", defaultValue: false, hidden: ({native: e}) => e === false}, resetOffset: {type: ce.Boolean, title: "Reset", enabledTitle: "True", disabledTitle: "False", defaultValue: false}});
bl.supportsConstraints = true;
var zi = Kv(dl);
function _y(e) {
  return "rect" in e && e.rect instanceof Function;
}
function cp(e, t = 0) {
  return e ? ae(e) ? e.get() : e : t;
}
var xl = class extends Component {
  wrapHandlers(t, r) {
    return r ? (n, o) => {
      t && t(n, o), r(n, this);
    } : t;
  }
  render() {
    return createElement(hg, null, ({size: t}) => {
      let r = yi(t), n = Object.assign({}, this.props, {parentSize: r});
      if (Object.keys(xl.scrollProps).map((R) => {
        delete n[R];
      }), !this.props.children)
        return createElement(Ft, {...n}, createElement(zi, {width: n.width, height: n.height}));
      let o = {top: 0, left: 0, bottom: 0, right: 0}, {width: i, height: a} = Ft.rect(n), s = Children.map(this.props.children, (R) => {
        if (R === null || typeof R != "object" || typeof R.type == "string")
          return R;
        let E = R.type;
        if (_y(E)) {
          let M = E.rect(R.props, r);
          M && (o.top = Math.min(ke.minY(M), o.top), o.left = Math.min(ke.minX(M), o.left), o.bottom = Math.max(ke.maxY(M), o.bottom), o.right = Math.max(ke.maxX(M), o.right));
        }
        let I = {};
        return this.props.direction === "vertical" ? I.width = i : this.props.direction === "horizontal" && (I.height = a), cloneElement(R, I);
      }), {onScrollStart: l, onScroll: u, onScrollEnd: c, onScrollSessionStart: f, onScrollSessionEnd: p} = this.props, d = cp(i), m = cp(a), h = Math.max(o.right, d), v = Math.max(o.bottom, m), y = Math.min(0, d - h), C = Math.min(0, m - v), P = {x: y, y: C, width: h + h - d, height: v + v - m}, b = {};
      return b.enabled = this.props.draggingEnabled, b.background = "none", b.width = h, b.height = v, b.constraints = P, b.onMove = this.props.onMove, b.onDragSessionStart = this.wrapHandlers(this.props.onDragSessionStart, f), b.onDragSessionMove = this.props.onDragSessionMove, b.onDragSessionEnd = this.wrapHandlers(this.props.onDragSessionEnd, p), b.onDragAnimationStart = this.props.onDragAnimationStart, b.onDragAnimationEnd = this.props.onDragAnimationEnd, b.onDragDidMove = this.wrapHandlers(this.props.onDragDidMove, u), b.onDragDirectionLockStart = this.props.onDragDirectionLockStart, b.onDragStart = this.wrapHandlers(this.props.onDragStart, l), b.onDragEnd = this.wrapHandlers(this.props.onDragEnd, c), b.onDragWillMove = this.props.onDragWillMove, b.horizontal = this.props.direction !== "vertical", b.vertical = this.props.direction !== "horizontal", b.directionLock = this.props.directionLock, b.mouseWheel = true, b.left = this.props.contentOffsetX, b.top = this.props.contentOffsetY, b.preserve3d = this.props.preserve3d, createElement(Ft, {...n}, createElement(zi, {...b}, s), createElement(wr, {children: this.props.children, size: {width: d, height: m}, title: "Connect to scrollable area"}));
    });
  }
}, Po = xl;
Po.supportsConstraints = true, Po.scrollProps = {draggingEnabled: true, direction: "vertical", directionLock: true, mouseWheel: true, contentOffsetX: null, contentOffsetY: null}, Po.defaultProps = Object.assign({}, Ft.defaultProps, xl.scrollProps, {overflow: "visible", background: "none", width: "100%", height: "100%"}), Po.propertyControls = {direction: {type: ce.SegmentedEnum, title: "Direction", options: ["vertical", "horizontal", "both"]}, directionLock: {type: ce.Boolean, title: "Lock", enabledTitle: "1 Axis", disabledTitle: "Off", hidden(t) {
  return t.direction !== "both";
}}};
var Q;
(function(s) {
  s[s.Possible = 2] = "Possible", s[s.Began = 4] = "Began", s[s.Changed = 8] = "Changed", s[s.Ended = 16] = "Ended", s[s.Failed = 32] = "Failed", s[s.Cancelled = 64] = "Cancelled", s[s.Recognized = 128] = "Recognized";
})(Q || (Q = {}));
function jy(e) {
  switch (e) {
    case 2:
      return "Possible";
    case 4:
      return "Began";
    case 8:
      return "Changed";
    case 16:
      return "Ended";
    case 32:
      return "Failed";
    case 64:
      return "Cancelled";
    case 128:
      return "Recognized";
    default:
      return "Unknown";
  }
}
function Ny(e, t) {
  return (e & t) != 0;
}
var Pn = class {
  constructor() {
    this._state = 2;
    this.preventers = [];
  }
  get state() {
    return this._state;
  }
  setState(t) {
    this._state = t;
  }
  get isPrevented() {
    let t = false;
    for (let r of this.preventers)
      if (r.state & (4 | 8 | 16)) {
        t = true;
        break;
      }
    return t;
  }
  canBePreventedBy(t) {
    this.preventers.push(t);
  }
  hasState(t) {
    return Ny(this.state, t);
  }
  stateSwitch(t) {
    let r;
    switch (this.state) {
      case 2:
        r = 4 | 128 | 32;
        break;
      case 4:
        r = 8 | 64 | 16;
        break;
      case 8:
        r = 8 | 64 | 16;
        break;
      case 128:
      case 16:
      case 64:
      case 32:
        r = 2;
        break;
      default:
        r = 0;
    }
    if (!Ny(t, r)) {
      console.warn(`Unallowed state change from ${jy(this.state)} to ${jy(t)}`);
      return;
    }
    this.setState(t);
  }
  cancel() {
    this.hasState(4 | 8) && this.setState(64), this.reset();
  }
  reset() {
    this.hasState(2) || this.stateSwitch(2);
  }
};
var pp = class extends Pn {
  constructor() {
    super(...arguments);
    this.eventType = "pan";
  }
  pointerSessionBegan(t, r) {
    this.recognize(t, r);
  }
  pointerSessionMoved(t, r) {
    this.recognize(t, r);
  }
  pointerSessionEnded(t, r) {
    this.panend(r);
  }
  recognize(t, r) {
    (Math.abs(r.delta.x) > 0 || Math.abs(r.delta.y) > 0) && (this.startEvent ? this.pan(r) : this.panstart(r));
  }
  reset() {
    this.startEvent = null, super.reset();
  }
  panstart(t) {
    !this.hasState(Q.Possible) || t.isLeftMouseClick !== void 0 && !t.isLeftMouseClick || (this.stateSwitch(Q.Began), this.startEvent = t, this.handler && this.startEvent.target && this.handler.gestureBegan(this.eventType, t, this.startEvent.target));
  }
  pan(t) {
    !this.hasState(Q.Began | Q.Changed) || !this.startEvent || (this.stateSwitch(Q.Changed), this.handler && this.startEvent.target && this.handler.gestureChanged(this.eventType, t, this.startEvent.target));
  }
  panend(t) {
    !this.hasState(Q.Began | Q.Changed) || !this.startEvent || (this.stateSwitch(Q.Ended), this.handler && this.startEvent.target && this.handler.gestureEnded(this.eventType, t, this.startEvent.target));
  }
};
var fp = class extends Pn {
  constructor() {
    super(...arguments);
    this.eventType = "tap";
  }
  pointerSessionBegan(t, r) {
    this.handler && (r.isLeftMouseClick === void 0 || r.isLeftMouseClick) && this.handler.gestureBegan(this.eventType, r, null);
  }
  pointerSessionMoved(t, r) {
  }
  pointerSessionEnded(t, r) {
    this.isPrevented ? this.stateSwitch(Q.Failed) : !t.startEvent || t.startEvent.target === r.target ? (this.stateSwitch(Q.Recognized), this.handler && this.handler.gestureChanged(this.eventType, r, null)) : this.stateSwitch(Q.Failed), this.handler && this.handler.gestureEnded(this.eventType, r, null);
  }
};
var mp = class extends Pn {
  constructor() {
    super(...arguments);
    this.eventType = "mousewheel";
    this.onMouseWheelEnd = Bi((t) => {
      this.handler && this.startEvent && (this.stateSwitch(Q.Ended), this.handler.gestureEnded(this.eventType, t, this.startEvent.target), this.startEvent = null, this.reset());
    }, 300);
  }
  pointerSessionBegan(t, r) {
  }
  pointerSessionMoved(t, r) {
  }
  pointerSessionEnded(t, r) {
  }
  mouseWheel(t, r) {
    if (!!this.handler) {
      if (this.hasState(Q.Possible)) {
        this.startEvent = r, this.stateSwitch(Q.Began), this.handler.gestureBegan(this.eventType, r, this.startEvent.target);
        return;
      }
      this.hasState(Q.Began | Q.Changed) && this.startEvent && (this.stateSwitch(Q.Changed), this.handler.gestureChanged(this.eventType, r, this.startEvent.target)), this.onMouseWheelEnd(r);
    }
  }
};
var Sl = class {
  constructor(t, r) {
    this.events = [];
    this.recognizers = [];
    this.mouseWheelRecognizer = new mp();
    this.dispatcher = t, r ? this.originElement = r : this.originElement = document.body;
    let n = new pp(), o = new fp();
    n.handler = this, o.handler = this, this.mouseWheelRecognizer.handler = this, this.recognizers = [o, n];
  }
  get isStarted() {
    return this.events.length !== 0;
  }
  get startEvent() {
    return this.isStarted ? this.events[0] : null;
  }
  get lastEvent() {
    return this.events.length > 0 ? this.events[this.events.length - 1] : null;
  }
  processEvent(t) {
    return this.events.push(t), t;
  }
  pointerDown(t) {
    this.isStarted || (this.processEvent(t), this.recognizers.map((r) => {
      r.cancel(), r.pointerSessionBegan(this, t);
    }));
  }
  pointerMove(t) {
    !this.isStarted || (this.processEvent(t), this.recognizers.map((r) => {
      r.pointerSessionMoved(this, t);
    }));
  }
  pointerUp(t) {
    !this.isStarted || (this.processEvent(t), this.recognizers.map((r) => {
      r.pointerSessionEnded(this, t);
    }), this.clearEvents(), this.recognizers.map((r) => {
      r.reset();
    }));
  }
  mouseWheel(t) {
    this.processEvent(t), this.mouseWheelRecognizer.mouseWheel(this, t), this.clearEvents();
  }
  clearEvents() {
    this.events = [];
  }
  dispatch(t, r, n = null) {
    let o = n || this.startEvent && this.startEvent.target || r.target;
    o && this.dispatcher(t, r, o);
  }
  gestureBegan(t, r, n) {
    this.dispatch(`${t}start`, r, n);
  }
  gestureChanged(t, r, n) {
    this.dispatch(t, r, n);
  }
  gestureEnded(t, r, n) {
    this.dispatch(`${t}end`, r, n);
  }
  velocity(t = al.TimeStep * 2) {
    if (!this.isStarted || this.events.length < 2)
      return {x: 0, y: 0};
    let r = this.events, n = r.length - 1, o = null;
    for (; n >= 0 && (o = r[n], !(Rt.time - o.loopTime > t)); )
      n--;
    if (!o)
      return {x: 0, y: 0};
    let i = r[r.length - 1], a = (Rt.time - o.loopTime) * 1e3;
    if (a === 0)
      return {x: 0, y: 0};
    let s = {x: (i.devicePoint.x - o.devicePoint.x) / a, y: (i.devicePoint.y - o.devicePoint.y) / a};
    return s.x === Infinity && (s.x = 0), s.y === Infinity && (s.y = 0), s;
  }
  offset(t) {
    return this.startEvent ? ((n, o) => ({x: n.x - o.x, y: n.y - o.y}))(t.devicePoint, this.startEvent.devicePoint) : {x: 0, y: 0};
  }
};
var dp = class extends Component {
  constructor() {
    super(...arguments);
    this.domTouchStart = (t) => {
      N.addEventListener("touchmove", this.domTouchMove), N.addEventListener("touchend", this.domTouchEnd);
      let r = new ct(t, this.props.session);
      this.props.session.pointerDown(r);
    };
    this.domTouchMove = (t) => {
      let r = new ct(t, this.props.session);
      this.props.session.pointerMove(r);
    };
    this.domTouchEnd = (t) => {
      N.removeEventListener("touchmove", this.domTouchMove), N.removeEventListener("touchend", this.domTouchEnd);
      let r = new ct(t, this.props.session);
      this.props.session.pointerUp(r);
    };
  }
  render() {
    return this.props.children;
  }
  componentDidMount() {
    N.addEventListener("touchstart", this.domTouchStart);
  }
  componentWillUnmount() {
    N.removeEventListener("touchstart", this.domTouchStart), N.removeEventListener("touchmove", this.domTouchMove), N.removeEventListener("touchend", this.domTouchEnd);
  }
};
var hp = class extends Component {
  constructor() {
    super(...arguments);
    this.domMouseDown = (t) => {
      N.addEventListener("mousemove", this.domMouseMove), N.addEventListener("mouseup", this.domMouseUp);
      let r = new ct(t, this.props.session);
      this.props.session.pointerDown(r);
    };
    this.domMouseMove = (t) => {
      if (!(t.buttons === void 0 ? t.which === 1 : t.buttons === 1)) {
        this.domMouseUp(t);
        return;
      }
      let n = new ct(t, this.props.session);
      this.props.session.pointerMove(n);
    };
    this.domMouseUp = (t) => {
      N.removeEventListener("mousemove", this.domMouseMove), N.removeEventListener("mouseup", this.domMouseUp);
      let r = new ct(t, this.props.session);
      this.props.session.pointerUp(r);
    };
    this.domMouseWheel = (t) => {
      let r = new ct(t, this.props.session);
      this.props.session.mouseWheel(r);
    };
  }
  render() {
    return this.props.children;
  }
  componentDidMount() {
    N.addEventListener("mousedown", this.domMouseDown), N.addEventListener("wheel", this.domMouseWheel);
  }
  componentWillUnmount() {
    N.removeEventListener("mousemove", this.domMouseMove), N.removeEventListener("mousedown", this.domMouseDown), N.removeEventListener("mouseup", this.domMouseUp), N.removeEventListener("wheel", this.domMouseWheel);
  }
};
var gp = mo.isTouch() ? dp : hp;
var ze;
(function(v) {
  v.Fade = {exit: {opacity: 0}, enter: {opacity: 0}}, v.PushLeft = {exit: {x: "-30%"}, enter: {x: "100%"}}, v.PushRight = {exit: {x: "30%"}, enter: {x: "-100%"}}, v.PushUp = {exit: {y: "-30%"}, enter: {y: "100%"}}, v.PushDown = {exit: {y: "30%"}, enter: {y: "-100%"}}, v.Instant = {animation: {type: false}, enter: {opacity: 0}}, v.Modal = {overCurrentContext: true, goBackOnTapOutside: true, position: {center: true}, enter: {opacity: 0, scale: 1.2}}, v.OverlayLeft = {overCurrentContext: true, goBackOnTapOutside: true, position: {right: 0, top: 0, bottom: 0}, enter: {x: "100%"}}, v.OverlayRight = {overCurrentContext: true, goBackOnTapOutside: true, position: {left: 0, top: 0, bottom: 0}, enter: {x: "-100%"}}, v.OverlayUp = {overCurrentContext: true, goBackOnTapOutside: true, position: {bottom: 0, left: 0, right: 0}, enter: {y: "100%"}}, v.OverlayDown = {overCurrentContext: true, goBackOnTapOutside: true, position: {top: 0, left: 0, right: 0}, enter: {y: "-100%"}}, v.FlipLeft = {backfaceVisible: false, exit: {rotateY: -180}, enter: {rotateY: 180}}, v.FlipRight = {backfaceVisible: false, exit: {rotateY: 180}, enter: {rotateY: -180}}, v.FlipUp = {backfaceVisible: false, exit: {rotateX: 180}, enter: {rotateX: -180}}, v.FlipDown = {backfaceVisible: false, exit: {rotateX: -180}, enter: {rotateX: 180}}, v.MagicMotion = {withMagicMotion: true};
})(ze || (ze = {}));
function By(e) {
  switch (e && e.appearsFrom ? e.appearsFrom : "right") {
    case "right":
      return ze.PushLeft;
    case "left":
      return ze.PushRight;
    case "bottom":
      return ze.PushUp;
    case "top":
      return ze.PushDown;
  }
}
function Hy(e) {
  switch (e && e.appearsFrom ? e.appearsFrom : "bottom") {
    case "right":
      return ze.OverlayLeft;
    case "left":
      return ze.OverlayRight;
    case "bottom":
      return ze.OverlayUp;
    case "top":
      return ze.OverlayDown;
  }
}
function zy(e) {
  switch (e && e.appearsFrom ? e.appearsFrom : "bottom") {
    case "right":
      return ze.FlipLeft;
    case "left":
      return ze.FlipRight;
    case "bottom":
      return ze.FlipUp;
    case "top":
      return ze.FlipDown;
  }
}
function Wy(e) {
  let {shouldStackAnimate: t, transition: r, current: n, prevViewportBox: o, onComplete: i, prevParent: a} = e, s = {shouldStackAnimate: t, transition: r, current: n, onComplete: i, prevParent: a || void 0};
  return t && (s.originBox = o), s;
}
var Cl = createContext({promoteTree: () => false, markTreeAsSafeToRemove: () => {
}});
var dE = {register: () => {
}, remove: () => {
}, add: () => {
}, flush: () => {
}, syncUpdate: () => {
}}, vp = "____treeroot", Pl = class extends Component {
  constructor() {
    super(...arguments);
    this.scheduled = false;
    this.resetScheduled = false;
    this.layoutIdConfig = new Map();
    this.treeContext = {promoteTree: (...t) => this.promoteTree(...t), markTreeAsSafeToRemove: (t) => this.markTreeAsSafeToRemove(t)};
    this.syncContext = {...dE, forceUpdate: () => {
      this.syncContext = {...this.syncContext}, this.forceUpdate();
    }};
    this.batch = Jt();
    this.stackCrossfaders = new Map([[vp, no()]]);
  }
  promoteTree(t, r, n, o) {
    var s, l, u;
    if (t === this.lead)
      return false;
    let i = this.follow;
    if (this.follow = this.lead, this.lead = t, o && (this.resetScheduled = true), !r)
      return this.startCrossfade(new Map([[vp, {}]]), {type: false}), false;
    this.layoutIdConfig.clear();
    let a = {};
    for (let [c, f] of this.lead.children) {
      let p = (s = this.follow) == null ? void 0 : s.children.get(c);
      gE(c, f, p, a), p && Uy(p), Uy(f);
    }
    this.lead.childrenToResetTransform.forEach((c) => c.resetTransform());
    for (let [c, f] of this.lead.children) {
      let p = (l = this.follow) == null ? void 0 : l.children.get(c);
      p && Br(p), Br(f);
      let d = (p == null ? void 0 : p.prevViewportBox) ? hE(p == null ? void 0 : p.prevViewportBox) : void 0, m = {lead: f, current: a[c], transition: n, prevViewportBox: d, shouldStackAnimate: !!p, prevParent: p == null ? void 0 : p.getProjectionParent()};
      this.layoutIdConfig.set(c, m);
    }
    return i !== this.lead && i !== this.follow && ((u = i == null ? void 0 : i.rootChild) == null || u.setVisibility(false)), this.scheduled = true, true;
  }
  markTreeAsSafeToRemove(t) {
    this.safeToRemoveTree = t;
  }
  markTreeChildrenAsSafeToRemove(t) {
    var r;
    if (!!t)
      for (let [n, o] of t.children)
        (r = o.layoutSafeToRemove) == null || r.call(o);
  }
  componentDidUpdate() {
    this.scheduled && this.startLayoutAnimation(this.resetScheduled), this.safeToRemoveTree && this.markTreeChildrenAsSafeToRemove(this.safeToRemoveTree), this.safeToRemoveTree = void 0, this.scheduled = false, this.resetScheduled = false;
  }
  componentWillUnmount() {
    this.stopCrossfadeAnimation();
  }
  startLayoutAnimation(t) {
    let {lead: r, follow: n} = this, o = r == null ? void 0 : r.children, i = n == null ? void 0 : n.children, a = new Map(), s = {layoutReady: (l) => {
      let u = l.getLayoutId();
      if (u === void 0)
        return;
      let c = this.layoutIdConfig.get(u);
      if (!c)
        return l.notifyLayoutReady({shouldStackAnimate: false});
      let f = i == null ? void 0 : i.get(u), p = o == null ? void 0 : o.get(u);
      l.pointTo(p != null ? p : l), Boolean(o && p === l) && (f && p && a.set(u, c), l.notifyLayoutReady(Wy({...c, onComplete: () => {
        var m;
        (m = f == null ? void 0 : f.layoutSafeToRemove) == null || m.call(f);
      }})));
    }};
    if (r && o) {
      for (let [l, u] of o)
        this.batch.add(u);
      r.layoutMayBeMutated = false;
    }
    if (!t && n && i) {
      for (let [l, u] of i)
        this.batch.add(u);
      n.layoutMayBeMutated = true;
    }
    this.batch.flush(s), this.startCrossfade(a);
  }
  startCrossfade(t, r) {
    var f, p, d, m, h;
    if (!((f = this.lead) == null ? void 0 : f.rootChild))
      return;
    let n = (p = this.follow) == null ? void 0 : p.isExiting, o = r, i = (d = this.lead) == null ? void 0 : d.rootChild, a = (m = this.follow) == null ? void 0 : m.rootChild;
    i == null || i.setVisibility(true), a == null || a.setVisibility(true);
    let s = (v, y) => {
      var R, E;
      let C = (R = this.follow) == null ? void 0 : R.children.get(y), P = (E = this.lead) == null ? void 0 : E.children.get(y);
      if (P === i || C === a) {
        P === i && (o = v.transition);
        return;
      }
      this.stackCrossfaders.has(y) || this.stackCrossfaders.set(y, no());
      let b = this.stackCrossfaders.get(y);
      b.setOptions({lead: P, follow: C}), P == null || P.setCrossfader(b), C == null || C.setCrossfader(b), b.toLead(v == null ? void 0 : v.transition);
    };
    if (t.forEach(s), !i || !a)
      return;
    let l = this.stackCrossfaders.get(vp);
    l.setOptions({lead: i, follow: a, preserveFollowOpacity: !n, crossfadeOpacity: true}), i.setCrossfader(l), a.setCrossfader(l);
    let u = i.getLayoutId(), c = u && ((h = this.layoutIdConfig.get(u)) == null ? void 0 : h.transition) || o;
    l.toLead(c);
  }
  stopCrossfadeAnimation() {
    this.stackCrossfaders.forEach((t) => t.stop());
  }
  render() {
    return createElement(Cl.Provider, {value: this.treeContext}, createElement(Wt.Provider, {value: this.syncContext}, this.props.children));
  }
};
function hE(e) {
  if (!!e)
    return {x: {...e.x}, y: {...e.y}};
}
function gE(e, t, r, n) {
  let o = r == null ? void 0 : r.getValue("rotate"), i = t.getValue("rotate");
  n[e] = {rotate: (i == null ? void 0 : i.isAnimating()) ? i.get() : (o == null ? void 0 : o.get()) || 0};
}
var vE = ["", "X", "Y", "Z"];
function Uy(e) {
  let t = false, r = {};
  if (vE.forEach((n) => {
    let o = "rotate" + n;
    !e.hasValue(o) || (t = true, r[o] = e.getStaticValue(o), e.setStaticValue(o, 0));
  }), !!t) {
    e.syncRender();
    for (let n in r)
      e.setStaticValue(n, r[n]);
    e.scheduleRender();
  }
}
var $y = class extends Component {
  constructor() {
    super(...arguments);
    this.children = new Map();
    this.childrenToResetTransform = new Set();
    this.layoutMayBeMutated = false;
    this.syncContext = {add: () => {
    }, flush: () => {
    }, syncUpdate: (t) => {
    }, forceUpdate: () => {
      this.syncContext = {...this.syncContext}, this.forceUpdate();
    }, register: (t) => this.addChild(t), remove: (t) => this.removeChild(t)};
  }
  addChild(t) {
    let r = t.getLayoutId();
    r ? (this.children.set(r, t), this.setRootChild(t)) : t.shouldResetTransform() && this.childrenToResetTransform.add(t);
  }
  setRootChild(t) {
    if (!this.rootChild)
      return this.rootChild = t;
    this.rootChild = this.rootChild.depth < t.depth ? this.rootChild : t;
  }
  removeChild(t) {
    let r = t.getLayoutId();
    r ? this.children.delete(r) : this.childrenToResetTransform.delete(t);
  }
  componentDidMount() {
    let {isLead: t, animatesLayout: r, transition: n} = this.props;
    t !== void 0 && t && this.props.treeContext.promoteTree(this, !!r, n);
  }
  shouldComponentUpdate({isLead: t, isExiting: r, animatesLayout: n, transition: o}) {
    if (this.isExiting = r, this.props.isLead === void 0)
      return true;
    let i = !this.props.isLead && t, a = this.props.isExiting && !r, s = i || a;
    return this.layoutMayBeMutated && s && !n ? this.props.treeContext.promoteTree(this, true, {type: false}, true) : s ? this.props.treeContext.promoteTree(this, !!n, o) : (r && !n && this.props.treeContext.markTreeAsSafeToRemove(this), false);
  }
  render() {
    return createElement(ui.Provider, {value: this.syncContext}, this.props.children);
  }
}, yp = (e) => {
  let t = useContext(Cl);
  return createElement($y, {...e, treeContext: t});
};
function Ot(e) {
  let t = useRef(null);
  return t.current === null && (t.current = e()), t.current;
}
function CE() {
  return new Map();
}
function Yy() {
  return Ot(CE);
}
var Zy = createContext({register: () => {
}, deregister: () => {
}}), Jy = ({isCurrent: e, isOverlayed: t, children: r}) => {
  let n = Yy(), o = useCallback((s) => {
    if (n.has(s)) {
      console.warn("NavigationTargetWrapper: already registered");
      return;
    }
    n.set(s, void 0);
  }, [n]), i = useCallback((s) => {
    let l = n.get(s);
    l == null || l(), n.delete(s);
  }, [n]), a = useRef({register: o, deregister: i}).current;
  return useEffect(() => (n.forEach((s, l) => {
    let u = l(e, t);
    n.set(l, hi(u) ? u : void 0);
  }), () => {
    n.forEach((s, l) => {
      !s || (s(), n.set(l, void 0));
    });
  }), [e, t, n]), createElement(Zy.Provider, {value: a}, r);
};
function nr(e, t = []) {
  let {register: r, deregister: n} = useContext(Zy);
  useEffect(() => {
    if (!!e)
      return r(e), () => n(e);
  }, [r, n, ...t]);
}
var Tl = memo(function({isLayeredContainer: t, isCurrent: r, isPrevious: n, isOverlayed: o = false, visible: i, transitionProps: a, children: s, backdropColor: l, onTapBackdrop: u, backfaceVisible: c, exitBackfaceVisible: f, animation: p, exitAnimation: d, instant: m, initialProps: h, exitProps: v, position: y = {top: 0, right: 0, bottom: 0, left: 0}, withMagicMotion: C, index: P, areMagicMotionLayersPresent: b, id: R}) {
  let E = qu(), I = useContext(vt), {persistLayoutIdCache: M} = useContext(Cr), A = useRef({wasCurrent: void 0, wasPrevious: false, wasBeingRemoved: false, wasReset: true, origins: eb({}, h, a)}), L = I !== null && !I.isPresent;
  r && A.current.wasCurrent === void 0 && M(), useEffect(() => {
    if (t || !E)
      return;
    if (L) {
      A.current = {...A.current, wasBeingRemoved: L};
      return;
    }
    let {wasPrevious: S, wasCurrent: x} = A.current, g = r && !x || !L && A.current.wasBeingRemoved && r, w = n && !S, j = eb(A.current.origins, h, a), X = A.current.wasReset;
    g || w ? (E.stop(), E.start({zIndex: P, ...j, ...a}), X = false) : X === false && (E.stop(), E.set({zIndex: P, ...Xr, opacity: 0}), X = true), A.current = {wasCurrent: !!r, wasPrevious: !!n, wasBeingRemoved: false, wasReset: X, origins: j};
  }, [r, n, L]);
  let U = m ? {type: false} : {...p, velocity: 0}, $ = m ? {type: false} : d || p, G = {...y};
  (G.left === void 0 || G.right === void 0) && (G.width = "auto"), (G.top === void 0 || G.bottom === void 0) && (G.height = "auto");
  let te = (tb(a) || tb(h)) && (t || r || n) ? 1200 : void 0, Z = {...Xr, ...A.current.origins}, B = t ? {initial: {...Z, ...h}, animate: {...Z, ...a, transition: U}, exit: {...Z, ...v, transition: E}} : {animate: E, exit: {...Z, ...v, transition: $}}, K = !(L || b === false), V = !!r && K;
  return createElement(be, {width: "100%", height: "100%", style: {position: "absolute", transformStyle: "flat", backgroundColor: "transparent", overflow: "hidden", zIndex: t || L || r && C ? P : void 0, pointerEvents: "none", visibility: i ? "visible" : "hidden", perspective: te}}, t && createElement(be, {width: "100%", height: "100%", transition: p, initial: {opacity: m && i ? 1 : 0}, animate: {opacity: 1}, exit: {opacity: 0}, backgroundColor: l || "transparent", onTap: L ? void 0 : u}), createElement(be, {...G, ...B, transition: {default: U, originX: {type: false}, originY: {type: false}, originZ: {type: false}}, backgroundColor: "transparent", backfaceVisible: L ? f : c, "data-framer-component-type": "NavigationContainer", "data-framer-is-current-navigation-target": !!r, style: {pointerEvents: "initial", opacity: t || r && C ? 1 : 0}, "data-is-present": K ? void 0 : false}, createElement(lp.Provider, {value: V}, createElement(Jy, {isCurrent: V, isOverlayed: o}, createElement(yp, {isLead: r, animatesLayout: !!C, transition: U, isExiting: !K, id: R}, s)))));
}, ME);
function ME(e, t) {
  return !(t.isCurrent === void 0 || e.isCurrent !== t.isCurrent || e.isPrevious !== t.isPrevious || t.isCurrent && e.isOverlayed !== t.isOverlayed);
}
function eb(e, t, r) {
  let n = {...e};
  return t && (k(t.originX) && (n.originX = t.originX), k(t.originY) && (n.originY = t.originY), k(t.originZ) && (n.originZ = t.originZ)), r && (k(r.originX) && (n.originX = r.originX), k(r.originY) && (n.originY = r.originY), k(r.originZ) && (n.originZ = r.originZ)), n;
}
function tb(e) {
  var o, i, a;
  if (!e || !("rotateX" in e || "rotateY" in e || "z" in e))
    return false;
  let r = e.rotateX !== 0 || e.rotateY !== 0 || e.z !== 0, n = ((o = e == null ? void 0 : e.transition) == null ? void 0 : o.rotateX.from) !== 0 || ((i = e == null ? void 0 : e.transition) == null ? void 0 : i.rotateY.from) !== 0 || ((a = e == null ? void 0 : e.transition) == null ? void 0 : a.z.from) !== 0;
  return r || n;
}
var Xr = {x: 0, y: 0, z: 0, rotate: 0, rotateX: 0, rotateY: 0, rotateZ: 0, scale: 1, scaleX: 1, scaleY: 1, scaleZ: 1, skew: 0, skewX: 0, skewY: 0, originX: 0.5, originY: 0.5, originZ: 0, opacity: 1};
var rb = class {
  constructor() {
    this.warning = () => {
      Ut("The Navigator API is only available inside of Framer: https://www.framer.com/");
    };
    this.goBack = () => this.warning();
    this.instant = () => this.warning();
    this.fade = () => this.warning();
    this.push = () => this.warning();
    this.modal = () => this.warning();
    this.overlay = () => this.warning();
    this.flip = () => this.warning();
    this.customTransition = () => this.warning();
    this.magicMotion = () => this.warning();
  }
}, nb = new rb();
var ob = () => ({current: -1, previous: -1, currentOverlay: -1, previousOverlay: -1, visualIndex: 0, overlayItemId: 0, historyItemId: 0, history: [], overlayStack: [], containers: {}, containerIndex: {}, containerVisualIndex: {}, containerIsRemoved: {}, transitionForContainer: {}, previousTransition: null});
function ib(e, t) {
  switch (t.type) {
    case "addOverlay":
      return DE(e, t.transition, t.component);
    case "removeOverlay":
      return LE(e);
    case "add":
      return OE(e, t.key, t.transition, t.component);
    case "remove":
      return kE(e);
    case "update":
      return AE(e, t.key, t.component);
    default:
      return;
  }
}
function AE(e, t, r) {
  return {...e, containers: {...e.containers, [t]: r}};
}
function DE(e, t, r) {
  let n = e.overlayStack[e.currentOverlay];
  if (n && n.component === r)
    return;
  let o = e.overlayItemId + 1, i = [...e.overlayStack, {key: `stack-${o}`, component: r, transition: t}];
  return {...e, overlayStack: i, overlayItemId: o, currentOverlay: Math.max(0, Math.min(e.currentOverlay + 1, i.length - 1)), previousOverlay: e.currentOverlay};
}
function LE(e) {
  return {...e, overlayStack: [], currentOverlay: -1, previousOverlay: e.currentOverlay};
}
function OE(e, t, r, n) {
  e.containers[t] || (e.containers[t] = n), e.history = e.history.slice(0, e.current + 1), e.visualIndex = Math.max(e.history.length, 0);
  let o = e.history[e.history.length - 1], i = o && o.key === t;
  if (e.overlayStack = [], i && e.currentOverlay > -1)
    return {...e, currentOverlay: -1, previousOverlay: e.currentOverlay};
  if (i)
    return;
  let a = (o == null ? void 0 : o.key) && r.withMagicMotion ? NE(t, e.containerVisualIndex[t], e.containerIsRemoved[t], e.history) : true;
  e.history.push({key: t, transition: r, visualIndex: a ? Math.max(e.visualIndex, 0) : e.containerVisualIndex[t]});
  let s = e.current + 1, l = e.current;
  for (let p in e.containerIndex)
    e.containerIndex[p] === s && (e.containerIndex[p] = jE(p, e.history));
  e.containerIndex[t] = s;
  let {containerVisualIndex: u, containerIsRemoved: c} = VE(e, t, o == null ? void 0 : o.key, a), f = ab(s, l, e.history, e.containerIndex, e.transitionForContainer);
  return {...e, current: s, previous: l, containerVisualIndex: u, containerIsRemoved: c, transitionForContainer: f, previousTransition: null, currentOverlay: -1, historyItemId: e.historyItemId + 1, previousOverlay: e.currentOverlay};
}
function kE(e) {
  let t = [...e.history.slice(0, e.current + 1)];
  if (t.length === 1)
    return;
  let r = t.pop();
  if (!r)
    return;
  let n = t[t.length - 1];
  e.containerIndex[n.key] = t.length - 1, t.every((p) => p.key !== r.key) && delete e.containers[r.key];
  let i = e.current - 1, a = e.current, {containerIsRemoved: s, containerVisualIndex: l, previousTransition: u, visualIndex: c} = _E(e, n, r), f = ab(i, a, e.history, e.containerIndex, e.transitionForContainer);
  return {...e, current: i, previous: a, containerIsRemoved: s, containerVisualIndex: l, previousTransition: u, visualIndex: c, transitionForContainer: f};
}
function VE(e, t, r, n) {
  let o = {containerVisualIndex: {...e.containerVisualIndex}, containerIsRemoved: {...e.containerIsRemoved}};
  if (n)
    o.containerVisualIndex[t] = e.history.length - 1, o.containerIsRemoved[t] = false;
  else {
    let i = e.containerVisualIndex[t];
    for (let a in e.containerVisualIndex)
      e.containerVisualIndex[a] > i && (o.containerIsRemoved[a] = true);
  }
  return o;
}
function _E(e, t, r) {
  let {history: n} = globalThis, o = [t.key, r.key], i = n[n.length - 2], a = e.previousTransition === null ? null : {...e.previousTransition}, s = {containerIsRemoved: {...e.containerIsRemoved}, containerVisualIndex: {...e.containerVisualIndex}, previousTransition: a, visualIndex: e.visualIndex};
  i && o.push(i.key);
  let l = e.containerVisualIndex[t.key] <= e.containerVisualIndex[r.key] || t.visualIndex !== void 0 && t.visualIndex < n.length - 1, u = t.visualIndex;
  return l ? (s.containerIsRemoved[r.key] = true, s.containerVisualIndex[t.key] = u !== void 0 ? u : n.length - 1) : (s.visualIndex = e.visualIndex + 1, s.containerVisualIndex[t.key] = e.visualIndex + 1), r.transition.withMagicMotion && (s.previousTransition = r.transition || null), e.containerIsRemoved[t.key] = false, s;
}
function jE(e, t) {
  for (let r = t.length; r > t.length; r--)
    if (t[r].key === e)
      return r;
  return -1;
}
function ab(e, t, r, n, o) {
  let i = {...o};
  return Object.keys(n).forEach((a) => {
    let s = BE(n[a], {current: e, previous: t, history: r});
    s && (i[a] = s);
  }), i;
}
function NE(e, t, r, n) {
  return r ? true : t === 0 ? false : n.slice(t, n.length).findIndex((a) => a.key === e) > -1 ? true : !(n.slice(0, t - 1).findIndex((a) => a.key === e) > -1);
}
function BE(e, t) {
  let {current: r, previous: n, history: o} = t;
  if (!(e !== r && e !== n)) {
    if (e === r && r > n) {
      let i = o[e];
      return wl("enter", i.transition.enter, i.transition.animation);
    }
    if (e === n && r > n) {
      let i = o[e + 1];
      return wl("exit", i.transition.exit, i.transition.animation);
    }
    if (e === r && r < n) {
      let i = o[e + 1];
      return wl("enter", i.transition.exit, i.transition.animation);
    }
    if (e === n && r < n) {
      let i = o[e];
      return wl("exit", i.transition.enter, i.transition.animation);
    }
  }
}
var HE = Object.keys(Xr);
function wl(e, t, r) {
  let n = {}, o = {};
  return HE.forEach((i) => {
    n[i] = Xr[i], o[i] = {...r, from: Xr[i]};
  }), t && Object.keys(t).forEach((i) => {
    if (t[i] === void 0)
      return;
    let a = t[i], s = typeof t[i] == "string" ? `${Xr[i]}%` : Xr[i];
    n[i] = e === "enter" ? s : a, o[i] = {...r, from: e === "enter" ? a : s, velocity: 0};
  }), {...n, transition: {...o}};
}
var Ro = createContext(nb), zE = Ro.Consumer, sb = createContext(void 0), WE = sb.Provider, Wi = class extends Component {
  constructor() {
    super(...arguments);
    this.lastEventTimeStamp = null;
    this.state = ob();
    this.navigationAction = (t) => {
      var n;
      if (!this.props.enabled && this.state.history.length > 0)
        return;
      let r = ib(this.state, t);
      if (r) {
        this.setState(r);
        let o = r.history[r.current];
        (n = this.context) == null || n.call(this, o.key);
      }
    };
    this.goBack = () => {
      var t;
      if (!this.isSameEventTransition())
        return this.lastEventTimeStamp = ((t = globalThis.event) == null ? void 0 : t.timeStamp) || null, this.state.currentOverlay !== -1 ? this.navigationAction({type: "removeOverlay"}) : this.navigationAction({type: "remove"});
    };
  }
  componentDidMount() {
    this.state.history.length === 0 && this.transition(this.props.children, ze.Instant), at();
  }
  UNSAFE_componentWillReceiveProps(t) {
    var o;
    let r = t.children;
    if (!At(r) || !It(r))
      return;
    let n = (o = r.key) == null ? void 0 : o.toString();
    !n || (this.state.history.length === 0 ? this.transition(r, ze.Instant) : this.navigationAction({type: "update", key: n, component: r}));
  }
  getStackState(t) {
    let {current: r, previous: n, currentOverlay: o, previousOverlay: i} = this.state;
    return t.overCurrentContext ? {current: o, previous: i, history: this.state.overlayStack} : {current: r, previous: n, history: this.state.history};
  }
  isSameEventTransition() {
    return globalThis.event ? this.lastEventTimeStamp === globalThis.event.timeStamp : false;
  }
  transition(t, r, n) {
    var s, l;
    if (this.isSameEventTransition() || (this.lastEventTimeStamp = ((s = globalThis.event) == null ? void 0 : s.timeStamp) || null, !t || !At(t) || !It(t)))
      return;
    let o = {...r, ...n};
    if (!!o.overCurrentContext)
      return this.navigationAction({type: "addOverlay", transition: o, component: t});
    let a = ((l = t == null ? void 0 : t.key) == null ? void 0 : l.toString()) || `stack-${this.state.historyItemId + 1}`;
    this.navigationAction({type: "add", key: a, transition: o, component: t});
  }
  instant(t) {
    this.transition(t, ze.Instant);
  }
  fade(t, r) {
    this.transition(t, ze.Fade, r);
  }
  push(t, r) {
    this.transition(t, By(r), r);
  }
  modal(t, r) {
    this.transition(t, ze.Modal, r);
  }
  overlay(t, r) {
    this.transition(t, Hy(r), r);
  }
  flip(t, r) {
    this.transition(t, zy(r), r);
  }
  magicMotion(t, r) {
    this.transition(t, ze.MagicMotion, r);
  }
  customTransition(t, r) {
    this.transition(t, r);
  }
  render() {
    let t = this.getStackState({overCurrentContext: false}), r = this.getStackState({overCurrentContext: true}), n = UE(r), o = r.current > -1;
    return createElement(be, {top: 0, left: 0, width: "100%", height: "100%", position: "relative", style: {overflow: "hidden", backgroundColor: "unset", ...this.props.style}}, createElement(Ro.Provider, {value: this}, createElement(Tl, {isLayeredContainer: true, position: void 0, initialProps: {}, instant: false, transitionProps: GE(n), animation: $E(n), backfaceVisible: XE(n), visible: true, backdropColor: void 0, onTapBackdrop: void 0, index: 0}, createElement(ev, null, createElement(Pl, null, createElement(hs, {presenceAffectsLayout: false}, Object.keys(this.state.containers).map((i) => {
      var v, y, C, P, b;
      let a = this.state.containers[i], s = this.state.containerIndex[i], l = this.state.containerVisualIndex[i], u = this.state.containerIsRemoved[i], c = this.state.history[s], f = this.state.transitionForContainer[i], p = s === this.state.current, d = s === this.state.previous, m = p ? false : u, h = ((v = c == null ? void 0 : c.transition) == null ? void 0 : v.withMagicMotion) || p && !!this.state.previousTransition;
      return createElement(Tl, {key: i, id: i, index: l, isCurrent: p, isPrevious: d, isOverlayed: o, visible: p || d, position: (y = c == null ? void 0 : c.transition) == null ? void 0 : y.position, instant: cb(s, t), transitionProps: f, animation: ub(s, t), backfaceVisible: ZE(s, t), exitAnimation: (C = c == null ? void 0 : c.transition) == null ? void 0 : C.animation, exitBackfaceVisible: (P = c == null ? void 0 : c.transition) == null ? void 0 : P.backfaceVisible, exitProps: (b = c == null ? void 0 : c.transition) == null ? void 0 : b.enter, withMagicMotion: h, areMagicMotionLayersPresent: m ? false : void 0}, createElement(Suspense, {fallback: "Loading..."}, pb({component: a, transition: c == null ? void 0 : c.transition})));
    }))))), createElement(hs, null, this.state.overlayStack.map((i, a) => createElement(Tl, {isLayeredContainer: true, key: i.key, isCurrent: a === this.state.currentOverlay, position: i.transition.position, initialProps: qE(a, r), transitionProps: JE(a, r), instant: cb(a, r, true), animation: ub(a, r), exitProps: i.transition.enter, visible: QE(a, r), backdropColor: YE(i.transition), backfaceVisible: KE(a, r), onTapBackdrop: eF(i.transition, this.goBack), index: this.state.current + 1 + a}, pb({component: i.component, transition: i.transition}))))));
  }
};
Wi.defaultProps = {enabled: true}, Wi.contextType = sb;
var lb = {stiffness: 500, damping: 50, restDelta: 1, type: "spring"};
function UE(e) {
  let t, r;
  return e.current !== -1 ? t = e.history[e.current] : r = e.history[e.previous], {currentOverlayItem: t, previousOverlayItem: r};
}
function GE({currentOverlayItem: e}) {
  return e && e.transition.exit;
}
function $E({currentOverlayItem: e, previousOverlayItem: t}) {
  return e && e.transition.animation ? e.transition.animation : t && t.transition.animation ? t.transition.animation : lb;
}
function XE({currentOverlayItem: e, previousOverlayItem: t}) {
  return e ? e.transition.backfaceVisible : t && t.transition.backfaceVisible;
}
function YE(e) {
  if (e.backdropColor)
    return e.backdropColor;
  if (e.overCurrentContext)
    return "rgba(4,4,15,.4)";
}
function KE(e, t) {
  let {current: r, history: n} = t;
  if (e === r) {
    let o = n[e];
    return o && o.transition ? o.transition.backfaceVisible : true;
  } else if (e < r) {
    let o = n[e + 1];
    return o && o.transition ? o.transition.backfaceVisible : true;
  } else {
    let o = n[e];
    return o && o.transition ? o.transition.backfaceVisible : true;
  }
}
function qE(e, t) {
  let r = t.history[e];
  if (r)
    return r.transition.enter;
}
function ZE(e, t) {
  var i, a, s, l;
  let {current: r, previous: n, history: o} = t;
  return e === n && r > n || e === r && r < n ? (a = (i = o[e + 1]) == null ? void 0 : i.transition) == null ? void 0 : a.backfaceVisible : (l = (s = o[e]) == null ? void 0 : s.transition) == null ? void 0 : l.backfaceVisible;
}
function JE(e, t) {
  let {current: r, history: n} = t;
  if (e !== r)
    if (e < r) {
      let o = n[e + 1];
      if (o && o.transition)
        return o.transition.exit;
    } else {
      let o = n[e];
      if (o && o.transition)
        return o.transition.enter;
    }
}
function ub(e, t) {
  let {current: r, previous: n, history: o} = t, i = n > r ? n : r;
  if (e < i) {
    let a = o[e + 1];
    if (a && a.transition.animation)
      return a.transition.animation;
  } else if (e !== i) {
    let a = o[e];
    if (a && a.transition.animation)
      return a.transition.animation;
  } else {
    let a = o[e];
    if (a.transition.animation)
      return a.transition.animation;
  }
  return lb;
}
function cb(e, t, r) {
  let {current: n, previous: o, history: i} = t;
  return !!(r && i.length > 1 || e !== o && e !== n || n === o);
}
function QE(e, t) {
  let {current: r, previous: n} = t;
  return e > r && e > n ? false : e === r;
}
function pb(e) {
  return Children.map(e.component, (t) => {
    var s;
    if (!At(t) || !It(t) || !t.props)
      return t;
    let r = {style: t.props.style}, n = (s = e == null ? void 0 : e.transition) == null ? void 0 : s.position, o = !n || n.left !== void 0 && n.right !== void 0, i = !n || n.top !== void 0 && n.bottom !== void 0, a = "style" in t.props;
    if (o) {
      let l = "width" in t.props;
      l && (r.width = "100%"), a && !l && (r.style.width = "100%");
    }
    if (i) {
      let l = "height" in t.props;
      l && (r.height = "100%"), a && !l && (r.style.height = "100%");
    }
    return cloneElement(t, r);
  });
}
function eF(e, t) {
  if (e.goBackOnTapOutside !== false)
    return t;
}
function bp(e) {
  let {paddingPerSide: t, paddingTop: r, paddingBottom: n, paddingLeft: o, paddingRight: i} = e;
  return t !== false && (r !== void 0 || n !== void 0 || o !== void 0 || i !== void 0);
}
function Eo(e) {
  let {padding: t = 0, paddingTop: r, paddingBottom: n, paddingLeft: o, paddingRight: i} = e;
  return bp(e) ? {top: r !== void 0 ? r : t, bottom: n !== void 0 ? n : t, left: o !== void 0 ? o : t, right: i !== void 0 ? i : t} : {top: t, bottom: t, left: t, right: t};
}
function Ui({top: e, left: t, bottom: r, right: n}) {
  return `${e}px ${n}px ${r}px ${t}px`;
}
var Fo = memo(forwardRef(function(t, r) {
  var W, te;
  let {direction: n = "vertical", distribution: o = "start", alignment: i = "center", gap: a = 10, children: s, style: l, className: u, willChangeTransform: c, __fromCodeComponentNode: f, parentSize: p, __contentWrapperStyle: d, ...m} = t;
  at();
  let h = Sp(n), v = lF(h), y = Io(o), C = bp(m) || m.padding ? Ui(Eo(m)) : void 0, P = {...l};
  Pe.applyWillChange({willChangeTransform: c}, P, true), f && !er(ol(m)) && (m.width = "100%", m.height = "100%", m._constraints = {enabled: true});
  let b = lt(t), {children: R, props: E} = Os(m, s), I = (W = m.widthType) != null ? W : m.width === "auto" ? H.Auto : H.FixedNumber, M = (te = m.heightType) != null ? te : m.height === "auto" ? H.Auto : H.FixedNumber, A = iF(R, n, I, M), L = aF(A, a, h, y), U = Ds(L, p != null ? p : Ae.Disabled), $ = {"data-framer-component-type": "Stack"};
  m.__fromCanvasComponent && ($["data-framer-generated"] = true);
  let G = {display: "flex", flexDirection: h, justifyContent: y, alignItems: Io(i), padding: C, ...d};
  return G.width === void 0 && (G.width = I === H.Auto ? "min-content" : "100%"), G.height === void 0 && (G.height = M === H.Auto ? "min-content" : "100%"), createElement(be, {background: "none", ...E, layoutId: b, ref: r, ...$, style: P, className: u}, createElement(_e.div, {"data-framer-stack-content-wrapper": true, "data-framer-stack-direction-reverse": v, style: G}, U));
}));
Fo.displayName = "Stack";
function Rl(e) {
  return typeof e == "string" && e.endsWith("fr");
}
function Mo(e) {
  let t = parseFloat(e);
  return k(t) ? t : 0;
}
function iF(e, t, r, n) {
  return Children.map(e, (o) => {
    if (!At(o) || !It(o))
      return;
    let i = t === "vertical", a = {}, s = false, {style: l, size: u} = o.props, {width: c, height: f} = o.props;
    u !== void 0 && (c === void 0 && (c = u), f === void 0 && (f = u));
    let p = c, d = f;
    if (Rl(c) && (s = true, s = true, i ? r === H.Auto ? (a.alignSelf = "stretch", p = "auto") : p = `${Mo(c) * 100}%` : (p = 1, a.flexGrow = Mo(c), a.flexBasis = 0), a.width = p), Rl(f) && (s = true, i ? (d = 1, a.flexGrow = Mo(f), a.flexBasis = 0) : n === H.Auto ? (a.alignSelf = "stretch", d = "auto") : d = `${Mo(f) * 100}%`, a.height = d), !s)
      return o;
    let m = {...l, ...a};
    return cloneElement(o, {width: p, height: d, style: m});
  });
}
function xp(e, t) {
  return !(!e || t && ["space-between", "space-around", "space-evenly", "stretch"].includes(t));
}
function aF(e, t, r, n) {
  if (!xp(t, n))
    return e;
  let o = sF(r), i = {display: "contents", ["--stack-gap-x"]: `${o ? 0 : t}px`, ["--stack-gap-y"]: `${o ? t : 0}px`};
  return createElement("div", {"data-framer-stack-gap": true, style: i}, e);
}
function Sp(e) {
  switch (e) {
    case "vertical":
      return "column";
    case "horizontal":
      return "row";
    default:
      return e;
  }
}
function sF(e) {
  return e === "column" || e === "column-reverse";
}
function lF(e) {
  switch (e) {
    case "column-reverse":
    case "row-reverse":
      return true;
    default:
      return false;
  }
}
function Io(e) {
  switch (e) {
    case "start":
      return "flex-start";
    case "end":
      return "flex-end";
    default:
      return e;
  }
}
mn(Fo, {direction: {type: ce.SegmentedEnum, options: ["horizontal", "vertical"], title: "Direction", defaultValue: "vertical"}, distribution: {type: ce.Enum, options: ["start", "center", "end", "space-between", "space-around", "space-evenly"], optionTitles: ["Start", "Center", "End", "Space Between", "Space Around", "Space Evenly"], title: "Distribute", defaultValue: "space-around"}, alignment: {type: ce.SegmentedEnum, options: ["start", "center", "end"], title: "Align", defaultValue: "center"}, gap: {type: ce.Number, min: 0, title: "Gap", hidden: (e) => e.distribution !== void 0 && ["space-between", "space-around", "space-evenly"].includes(e.distribution), defaultValue: 10}, padding: {type: ce.FusedNumber, toggleKey: "paddingPerSide", toggleTitles: ["Padding", "Padding per side"], valueKeys: ["paddingTop", "paddingRight", "paddingBottom", "paddingLeft"], valueLabels: ["t", "r", "b", "l"], min: 0, title: "Padding", defaultValue: 0}});
var Pp = "PageContentWrapper";
function mb({children: e, effect: t, dragEnabled: r, direction: n, contentHeight: o, contentWidth: i, alignment: a, gap: s, isLastPage: l, contentOffsetRef: u, constraintsRef: c, directionLock: f, onDragStart: p, onDrag: d, onDragEnd: m, layoutId: h}) {
  let v = n === "horizontal", y = v ? "x" : "y", C = v && !l && s, P = !v && !l && s, b = i !== "stretch" && v, R = o !== "stretch" && !v, E = b ? "auto" : "100%", I = R ? "auto" : "100%", M = C && E === "100%" ? `calc(100% + ${s}px)` : E, A = P && I === "100%" ? `calc(100% + ${s}px)` : I;
  return createElement(be, {position: "relative", "data-framer-component-type": "PageContainer", width: M, height: A, layoutId: h ? `${h}-container` : void 0, backgroundColor: "transparent", drag: r ? y : false, dragDirectionLock: f, _dragX: u.current.x, _dragY: u.current.y, dragConstraints: c.current, onDrag: d, onDragStart: p, onDragEnd: m, preserve3d: true, style: {paddingRight: C ? s : 0, paddingBottom: P ? s : 0}}, createElement(be, {position: "relative", "data-framer-component-type": Pp, width: E, height: I, preserve3d: false, backgroundColor: "transparent", _layoutResetTransform: true, key: t ? Object.keys(t).join("") : "", style: {...t, display: "flex", flexDirection: v ? "row" : "column", alignItems: a && Io(a)}}, e));
}
var Ao = forwardRef(function(t, r) {
  let {direction: n = "horizontal", contentWidth: o = "stretch", contentHeight: i = "stretch", alignment: a = "start", currentPage: s = 0, animateCurrentPageUpdate: l = true, gap: u = 10, padding: c = 0, momentum: f = false, dragEnabled: p = true, defaultEffect: d = "none", background: m = "transparent", overflow: h = "hidden", __fromCodeComponentNode: v, effect: y, children: C, contentOffsetX: P, contentOffsetY: b, onChangePage: R, onScrollStart: E, onScroll: I, onDragStart: M, onDrag: A, onDragEnd: L, directionLock: U, onScrollEnd: $, onDirectionLock: G, onUpdate: W, wheelEnabled: te = false, layoutId: Z, ...B} = t, K = lt(t, {specificLayoutId: Z, postfix: "page"}), V = {...B, background: m}, S = useRef(false), x = O.hasRestrictions() && t.__fromCodeComponentNode && k(V.width) && k(V.height);
  !x && v && !V.__fromCanvasComponent && (V.width = "100%", V.height = "100%", V._constraints = {enabled: true});
  let {initial: g, prev: w} = useRef({initial: {x: 0, y: 0}, prev: {x: 0, y: 0}}).current, j = n === "horizontal", X = u;
  X < 0 && (Ut(`The 'gap' property of Page component can not be negative, but is ${u}.`), X = 0), at();
  let oe = Children.count(C), ne = useRef(0), ee = useRef({top: 0, left: 0, right: 0, bottom: 0}), xe = useRef(null), Fe = r || xe, ge = useRef(null), We = useRef([]), Ue = useRef([]), Y = et(De(P) ? 0 : P != null ? P : 0), D = et(De(b) ? 0 : b != null ? b : 0), _ = useRef({x: De(P) ? P : Y, y: De(b) ? b : D}), ie = useRef(0), we = useRef(0), ve = useRef(t);
  ve.current = t;
  let ot = useRef(t.direction), Xt = bF(ie, _, j), [ar, sr] = useState(0), pt = useRef({width: 200, height: 200});
  x && k(V.width) && k(V.height) && (pt.current.width = V.width, pt.current.height = V.height);
  let Vo = useCallback(() => {
    x || sr((ue) => ue + 1);
  }, [x]);
  useEffect(() => {
    if (O.current() === O.preview)
      return globalThis.addEventListener("resize", Vo), () => {
        globalThis.removeEventListener("resize", Vo);
      };
  }, [Vo]);
  let _o = () => {
    We.current.forEach((ue, fe) => {
      let le = bb(fe, ve, Ue, _, ne);
      if (!(!ue || !le))
        for (let Ve in le)
          De(ue[Ve]) && ue[Ve].set(le[Ve]);
    });
  }, ta = (ue) => {
    let fe = vF(Fe, ue, n, X);
    fe && (Ue.current = fe);
    let le = yF(pt.current, Ue.current, n, ve.current);
    le !== ne.current && (ne.current = le, ee.current.top = -le, ee.current.left = -le, O.current() === O.canvas && sr((Ve) => Ve + 1));
  }, se = () => {
    let ue = Fe.current;
    if (!ue)
      return null;
    let {offsetWidth: fe, offsetHeight: le} = ue, Ve = pt.current;
    return fe !== Ve.width || le !== Ve.height ? (pt.current = {width: fe, height: le}, pt.current) : null;
  }, pe = (ue, fe = false) => {
    let le = xF(ue, oe);
    le !== we.current && (we.current = le, xb(le, ie, R));
    let Fr = yb(le, oe, Ue, j, ne), Mr = l && O.current() !== O.canvas && !fe;
    Xt(le, Fr, {animated: Mr});
  };
  useLayoutEffect(() => {
    var le;
    if (S.current)
      return;
    ie.current = s;
    let ue = _.current;
    ue.x.onChange(_o), ue.y.onChange(_o), _o(), S.current = true;
    let fe = (le = se()) != null ? le : pt.current;
    ta(fe), pe(ie.current, true);
  }, []), useEffect(() => {
    s !== ie.current && pe(s);
  }, [s]);
  let Je = () => {
    let ue = se();
    ta(ue != null ? ue : pt.current), pe(ie.current), (ue || n !== ot.current) && (n === "horizontal" ? _.current.y.set(0) : _.current.x.set(0), ot.current = n);
  };
  useLayoutEffect(() => {
    O.current() === O.canvas && Je();
  });
  let Vt = (ue, fe) => {
    E && E(fe), M && M(ue, fe), w.x = g.x = fe.point.x, w.y = g.y = fe.point.y;
  }, ft = (ue, fe) => {
    I && I(fe), A && A(ue, fe), w.x = fe.point.x, w.y = fe.point.y;
  }, _t = () => {
    if (t.onDragTransitionEnd && t.onDragTransitionEnd(), $) {
      let {x: ue, y: fe} = _.current, le = {x: ue.get(), y: fe.get()};
      $({point: le, velocity: {x: ue.getVelocity(), y: fe.getVelocity()}, offset: {x: le.x - g.x, y: le.y - g.y}, delta: {x: le.x - w.x, y: le.y - w.y}});
    }
  }, Hl = async (ue, fe) => {
    let le = j ? _.current.x : _.current.y;
    le.stop();
    let Ve = le.get(), Fr = j ? "x" : "y", Mr = fe.velocity[Fr], In = vb(Ue.current, Ve, Ve, j, f);
    Mr && Nr({from: Ve, velocity: Mr, modifyTarget: (mf) => (In = vb(Ue.current, Ve, mf, j, f), mf)}).stop(), xb(In, ie, R);
    let Sx = yb(In, oe, Ue, j, ne);
    L && L(ue, fe);
    let Cx = _.current[Fr];
    Qt(Cx, Sx, {type: "spring", from: Ve, velocity: Mr, stiffness: 500, damping: 50, onComplete: _t});
  };
  We.current = [];
  let ff = Children.map(C, (ue, fe) => {
    var Mr;
    if (!At(ue) || !It(ue))
      return ue;
    let le = {right: void 0, bottom: void 0, top: void 0, left: void 0, _constraints: {enabled: false}};
    V.__fromCanvasComponent ? (le.style = (Mr = ue.props.style) != null ? Mr : {}, o === "stretch" && (le.style.width = "100%"), i === "stretch" && (le.style.height = "100%")) : (o === "stretch" && (le.width = "100%"), i === "stretch" && (le.height = "100%"));
    let Ve, Fr = bb(fe, ve, Ue, _, ne);
    if (Fr) {
      Ve = {};
      for (let In in Fr)
        Ve[In] = Ie(Fr[In]);
    }
    return We.current.push(Ve), createElement(mb, {key: fe, effect: Ve, dragEnabled: p, direction: n, contentHeight: i, contentWidth: o, alignment: a, gap: X, isLastPage: fe === oe - 1, contentOffsetRef: _, constraintsRef: ee, directionLock: U, onDragStart: Vt, onDrag: ft, onDragEnd: Hl, layoutId: K ? `${K}-${fe}` : void 0}, cloneElement(ue, le));
  });
  return gl(ge, {enabled: te, initial: g, prev: w, direction: n, constraints: ee, offsetX: _.current.x, offsetY: _.current.y, onScrollStart: E, onScroll: I, onScrollEnd: $}), createElement(be, {preserve3d: false, perspective: SF(t) ? 1200 : void 0, overflow: h, ...V, layoutId: K, ref: Fe, onLayoutMeasure: Je}, createElement(be, {"data-framer-component-type": "Page", ref: ge, background: null, x: _.current.x, y: _.current.y, width: "100%", height: "100%", preserve3d: true, layout: true, layoutId: K !== void 0 ? K + "-page" : void 0, style: {padding: Ui(Eo(t)), display: "flex", flexDirection: j ? "row" : "column"}}, createElement(wr, {title: "Page", description: "Click and drag the connector to any frame on the canvas \u2192", children: C, size: pt.current, insideUserCodeComponent: !v}), ff));
});
function mF(e) {
  let {normalizedOffset: t, direction: r} = e, n = r === "horizontal";
  return {originX: t < 0 ? 1 : 0, originY: t < 0 ? 1 : 0, rotateY: n ? Math.min(Math.max(-90, t * 90), 90) : 0, rotateX: n ? 0 : Math.min(Math.max(-90, t * -90), 90), backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden"};
}
function dF(e) {
  let {normalizedOffset: t, direction: r, size: n} = e, o = r === "horizontal";
  return {rotateY: o ? Math.min(45, Math.max(-45, t * -45)) : 0, rotateX: o ? 0 : Math.min(45, Math.max(-45, t * 45)), originX: o ? t < 0 ? 0 : 1 : 0.5, originY: o ? 0.5 : t < 0 ? 0 : 1, x: o ? `${t * -25}%` : 0, y: o ? 0 : `${t * -25}%`, z: -Math.abs(t), scale: 1 - Math.abs(t / 10)};
}
function hb(e, t) {
  return e * t - e * 8;
}
function hF(e) {
  let {normalizedOffset: t, direction: r, size: n} = e, o = r === "horizontal", i = Math.abs(t);
  return {x: t < 0 && o ? hb(i, n.width) : 0, y: t < 0 && !o ? hb(i, n.height) : 0, scale: t < 0 ? 1 - i / 50 : 1};
}
function gF(e) {
  let {normalizedOffset: t, direction: r, size: n} = e, o = r === "horizontal", i = (o ? n.width : n.height) * 18 / (2 * Math.PI), a = o ? 0 : t * -20, s = o ? t * 20 : 0, l = o ? 0 : t * -n.height, u = o ? t * -n.width : 0;
  return {opacity: 1 - Math.abs(t) / 4, transform: `translate(${u}px, ${l}px) translateZ(-${i}px) rotateX(${a}deg) rotateY(${s}deg) translateZ(${i}px)`};
}
function gb(e) {
  switch (e) {
    case "cube":
      return mF;
    case "coverflow":
      return dF;
    case "pile":
      return hF;
    case "wheel":
      return gF;
    default:
      return null;
  }
}
function vb(e, t, r, n, o) {
  let i = function(s) {
    let l = n ? s.x : s.y;
    return Math.abs(l + t);
  }, a = function(s) {
    let l = n ? s.x : s.y;
    return Math.abs(l + r);
  };
  if (o) {
    let s = [...e].sort((l, u) => a(l) - a(u));
    return e.indexOf(s[0]);
  } else {
    let s = [...e].sort((f, p) => i(f) - i(p));
    if (s.length === 1)
      return e.indexOf(s[0]);
    let l = s[0], u = s[1], c = [l, u].sort((f, p) => a(f) - a(p));
    return e.indexOf(c[0]);
  }
}
function vF(e, t, r, n) {
  var c;
  let o = e.current;
  if (!o)
    return;
  let i = [];
  (c = o.firstChild) == null || c.childNodes.forEach((f) => {
    let p = f.firstChild;
    if (!(p instanceof HTMLElement))
      return;
    p.getAttribute("data-framer-component-type") === Pp && i.push(p);
  });
  let a = [];
  i.forEach((f) => {
    if (f instanceof HTMLElement && f.firstChild instanceof HTMLElement) {
      let p = f.firstChild.offsetWidth, d = f.firstChild.offsetHeight;
      a.push({width: p, height: d});
    } else
      a.push(null);
  });
  let s = 0, l = 0, u = r === "horizontal";
  return a.map((f) => {
    let p = f || t, d = s, m = l;
    return u ? s += p.width + n : l += p.height + n, {...p, x: d, y: m};
  });
}
function yF(e, t, r, n) {
  let o = t[t.length - 1];
  if (!o)
    return 0;
  let i = Eo(n), a = r === "horizontal", s = a ? i.left : i.top, l = a ? i.right : i.bottom, u = a ? o.width : o.height, f = (a ? e.width : e.height) - s - l - u, p = a ? o.x : o.y;
  return f <= 0 ? Math.max(p, 0) : Math.max(p - f, 0);
}
function yb(e, t, r, n, o) {
  let i = Math.max(0, Math.min(t - 1, e)), a = r.current[i];
  return a ? n ? -Math.min(a.x, o.current) : -Math.min(a.y, o.current) : 0;
}
function bF(e, t, r) {
  return (n, o, i) => {
    e.current = n;
    let a = r ? t.current.x : t.current.y;
    if (!i || !i.animated) {
      a.set(o);
      return;
    }
    let s = r ? "x" : "y";
    Qt(t.current[s], o, {type: "spring", from: a.get(), velocity: a.getVelocity(), stiffness: 500, damping: 50});
  };
}
function xF(e, t) {
  return e >= 0 ? Math.min(e, t - 1) : (e % t + t) % t;
}
function bb(e, t, r, n, o) {
  let {direction: i = "horizontal", defaultEffect: a, effect: s, gap: l = 0} = t.current, u = i === "horizontal", c = r.current[e] || {x: u ? e * 200 + l : 0, y: u ? 0 : e * 200 + l, width: 200, height: 200}, f = s || gb(a);
  if (!f)
    return null;
  let p, d, m = n.current, h = o.current;
  u ? (p = Math.min(c.x, h) + (m ? m.x.get() : 0), d = p / (c.width + l)) : (p = Math.min(c.y, h) + (m ? m.y.get() : 0), d = p / (c.height + l));
  let v = {width: c.width, height: c.height};
  return f({offset: p, normalizedOffset: d, size: v, index: e, direction: i, gap: l, pageCount: r.current.length});
}
function SF(e) {
  return !!e.effect || !!gb(e.defaultEffect);
}
function xb(e, t, r) {
  t.current !== e && (r && r(e, t.current), t.current = e);
}
var Rr;
(function(r) {
  r.Auto = "auto", r.Stretch = "stretch";
})(Rr || (Rr = {}));
var Tp = [Rr.Auto, Rr.Stretch], Tb = Tp.map((e) => {
  switch (e) {
    case Rr.Auto:
      return "Auto";
    case Rr.Stretch:
      return "Stretch";
  }
}), wb = ["none", "cube", "coverflow", "wheel", "pile"], RF = wb.map((e) => {
  switch (e) {
    case "none":
      return "None";
    case "cube":
      return "Cube";
    case "coverflow":
      return "Cover Flow";
    case "wheel":
      return "Wheel";
    case "pile":
      return "Pile";
  }
}), Rb = ["start", "center", "end"], EF = Rb.map((e) => {
  switch (e) {
    case "start":
      return "Start";
    case "center":
      return "Center";
    case "end":
      return "End";
  }
});
mn(Ao, {direction: {type: ce.Enum, options: ["horizontal", "vertical"], title: "Direction", defaultValue: "horizontal", displaySegmentedControl: true, optionIcons: ["direction-horizontal", "direction-vertical"]}, directionLock: {type: ce.Boolean, title: "Lock", enabledTitle: "1 Axis", disabledTitle: "Off", defaultValue: true}, contentWidth: {type: ce.Enum, options: Tp, optionTitles: Tb, title: "Width", defaultValue: Rr.Stretch, displaySegmentedControl: true}, contentHeight: {type: ce.Enum, options: Tp, optionTitles: Tb, title: "Height", defaultValue: Rr.Stretch, displaySegmentedControl: true}, alignment: {type: ce.Enum, options: Rb, optionTitles: EF, title: "Align", hidden(e) {
  let {direction: t, contentWidth: r, contentHeight: n} = e;
  return (t === "horizontal" ? n : r) === Rr.Stretch;
}, defaultValue: "start", displaySegmentedControl: true, optionIcons: {direction: {horizontal: ["align-top", "align-middle", "align-bottom"], vertical: ["align-left", "align-center", "align-right"]}}}, gap: {type: ce.Number, min: 0, title: "Gap", defaultValue: 0}, padding: {type: ce.FusedNumber, toggleKey: "paddingPerSide", toggleTitles: ["Padding", "Padding per side"], valueKeys: ["paddingTop", "paddingRight", "paddingBottom", "paddingLeft"], valueLabels: ["T", "R", "B", "L"], min: 0, title: "Padding", defaultValue: 0}, currentPage: {type: ce.Number, min: 0, title: "Current", displayStepper: true, defaultValue: 0}, momentum: {type: ce.Boolean, enabledTitle: "On", disabledTitle: "Off", title: "Momentum", defaultValue: false}, dragEnabled: {type: ce.Boolean, title: "Drag", enabledTitle: "On", disabledTitle: "Off", defaultValue: true}, wheelEnabled: {type: ce.Boolean, title: "Wheel", enabledTitle: "On", disabledTitle: "Off", defaultValue: false}, defaultEffect: {type: ce.Enum, options: wb, optionTitles: RF, title: "Effect", defaultValue: "none"}, children: {type: ce.Array, title: "Content", control: {type: ce.ComponentInstance, title: "Page"}}});
Ao.supportsConstraints = true;
var wp;
(function(t) {
  t.Previous = "@Previous";
})(wp || (wp = {}));
var $t;
(function(s) {
  s.push = "push", s.instant = "instant", s.fade = "fade", s.modal = "modal", s.overlay = "overlay", s.flip = "flip", s.magicMotion = "magicMotion";
})($t || ($t = {}));
var FF = Oi();
function MF(e, t, r, n, o) {
  let i = class extends Component {
    render() {
      return createElement(Ro.Consumer, null, (a) => {
        let s = () => {
          if (t === "goBack") {
            a.goBack();
            return;
          }
          if (!n)
            return;
          let c = n(), f = IF(r);
          switch (t) {
            case $t.instant:
              a.instant(c);
              break;
            case $t.fade:
              a.fade(c);
              break;
            case $t.modal:
              a.modal(c, o);
              break;
            case $t.push:
              a.push(c, {appearsFrom: f});
              break;
            case $t.overlay:
              a.overlay(c, {...o, appearsFrom: f});
              break;
            case $t.flip:
              a.flip(c, {appearsFrom: f});
              break;
            case $t.magicMotion:
              a.magicMotion(c, {});
              break;
          }
        }, {onTap: l, ...u} = this.props;
        return l ? u.onTap = (...c) => {
          l.apply(this, c), s.apply(this, c);
        } : u.onTap = s, createElement(e, {...u});
      });
    }
  };
  return FF(i, e), i;
}
function IF(e) {
  switch (e) {
    case "left":
      return "right";
    case "right":
      return "left";
    case "up":
      return "bottom";
    case "down":
      return "top";
  }
}
var DF = {delta: 1 / 60, maxValues: 1e4}, Rp = class {
  constructor(t) {
    this.currentTime = 0;
    this.options = {...DF, ...t}, this.animator = t.animator;
  }
  preCalculate() {
    if (!this.animator.isReady())
      return;
    let {delta: t} = this.options;
    for (this.values = []; !this.animator.isFinished() && this.values.length < this.options.maxValues; ) {
      let r = this.animator.next(this.options.delta);
      typeof r == "object" && r && (r = {...r}), this.values.push(r);
    }
    this.totalTime = this.values.length * t;
  }
  indexForTime(t) {
    return Math.max(0, Math.min(this.values.length - 1, Math.round(this.values.length * (t / this.totalTime)) - 1));
  }
  setFrom(t) {
    this.animator.setFrom(t), this.preCalculate();
  }
  setTo(t) {
    this.animator.setTo(t), this.preCalculate();
  }
  isReady() {
    return this.values !== void 0 && this.values.length > 0 && this.totalTime > 0;
  }
  next(t) {
    this.currentTime += t;
    let r = this.indexForTime(this.currentTime);
    return this.values[r];
  }
  isFinished() {
    return this.totalTime === 0 || this.currentTime >= this.totalTime;
  }
  get endValue() {
    this.preCalculate();
    let t = this.indexForTime(this.totalTime);
    return this.values.length > 0 ? this.values[t] : this.animator.next(0);
  }
};
var gt;
(function(i) {
  i.Linear = "linear", i.Ease = "ease", i.EaseIn = "ease-in", i.EaseOut = "ease-out", i.EaseInOut = "ease-in-out";
})(gt || (gt = {}));
var LF = {curve: gt.Ease, duration: 1};
function OF(e) {
  switch (e) {
    case gt.Linear:
      return [0, 0, 1, 1];
    case gt.Ease:
      return [0.25, 0.1, 0.25, 1];
    case gt.EaseIn:
      return [0.42, 0, 1, 1];
    case gt.EaseOut:
      return [0, 0, 0.58, 1];
    case gt.EaseInOut:
      return [0.42, 0, 0.58, 1];
  }
}
var Tn = class {
  constructor(t, r) {
    this.interpolation = r;
    this.progress = 0;
    this.next = (t2) => {
      let {duration: r2} = this.options;
      this.progress += t2 / r2;
      let n2 = this.unitBezier.solve(this.progress, this.solveEpsilon(r2));
      return this.current = this.interpolator(n2), this.current;
    };
    this.options = {...LF, ...t};
    let n;
    typeof this.options.curve == "string" ? n = OF(this.options.curve) : n = this.options.curve;
    let [o, i, a, s] = n;
    this.unitBezier = new Fb(Re(o, i), Re(a, s));
  }
  setFrom(t) {
    this.current = t, this.updateInterpolator();
  }
  setTo(t) {
    this.destination = t, this.updateInterpolator();
  }
  isReady() {
    return this.interpolator !== void 0;
  }
  updateInterpolator() {
    this.current === void 0 || this.destination === void 0 || (this.interpolator = this.interpolation.interpolate(this.current, this.destination));
  }
  isFinished() {
    return this.progress >= 1;
  }
  solveEpsilon(t) {
    return 1 / (200 * t);
  }
}, Fb = class {
  constructor(t, r) {
    this.c = Re.multiply(t, 3), this.b = Re.subtract(Re.multiply(Re.subtract(r, t), 3), this.c), this.a = Re.subtract(Re.subtract(Re(1, 1), this.c), this.b);
  }
  solve(t, r) {
    return this.sampleY(this.solveForT(t, r));
  }
  sampleX(t) {
    return ((this.a.x * t + this.b.x) * t + this.c.x) * t;
  }
  sampleY(t) {
    return ((this.a.y * t + this.b.y) * t + this.c.y) * t;
  }
  sampleDerivativeX(t) {
    return (3 * this.a.x * t + 2 * this.b.x) * t + this.c.x;
  }
  solveForT(t, r) {
    let n, o, i, a, s, l;
    for (i = t, l = 0; l < 8; ++l) {
      if (a = this.sampleX(i) - t, Math.abs(a) < r)
        return i;
      if (s = this.sampleDerivativeX(i), Math.abs(s) < r)
        break;
      i = i - a / s;
    }
    if (n = 0, o = 1, i = t, i < n)
      return n;
    if (i > o)
      return o;
    for (; n < o; ) {
      if (a = this.sampleX(i), Math.abs(a - t) < r)
        return i;
      t > a ? n = i : o = i, i = (o - n) * 0.5 + n;
    }
    return i;
  }
};
var kF = {precalculate: false, colorModel: nt.HUSL}, wn = class {
  constructor(t, r, n, o, i, a = Li) {
    this.playStateSource = "idle";
    this.readyPromise = Promise.resolve();
    this.resetFinishedPromise();
    let s = {...kF}, l = {};
    i && (Object.assign(s, i), Object.assign(l, i));
    let u;
    s.customInterpolation ? u = s.customInterpolation : u = new Gr(i);
    let c;
    o ? c = new o(l, u) : c = new Tn({}, u), s.precalculate && (c = new Rp({animator: c})), c.setFrom(r), c.setTo(n);
    let f = (d) => {
      wn.driverCallbackHandler(t, d);
    }, p = (d) => {
      d && (wn.driverCallbackHandler(t, n), this.playStateSource === "running" && (this.playStateValue = "finished"));
    };
    this.driver = new a(c, f, p);
  }
  static driverCallbackHandler(t, r) {
    if (ae(t) || De(t))
      t.set(r);
    else {
      let n = t;
      q.transaction((o) => {
        for (let i in n) {
          let a = n[i];
          ae(a) ? o(a, r[i]) : n[i] = r[i];
        }
      });
    }
  }
  get playStateValue() {
    return this.playStateSource;
  }
  set playStateValue(t) {
    if (t !== this.playStateSource) {
      let r = t;
      switch (this.playStateSource = t, t) {
        case "idle":
          r === "running" && this.oncancel && this.oncancel(), this.readyResolve && this.readyResolve(), this.resetReadyPromise();
          break;
        case "finished":
          if (r === "idle") {
            console.warn("Bad state transition");
            break;
          }
          this.onfinish && this.onfinish(), this.finishedResolve && this.finishedResolve();
          break;
        case "running":
          this.resetReadyPromise();
          break;
      }
      r === "finished" && this.resetFinishedPromise(), t === "finished" && (this.playStateValue = "idle");
    }
  }
  get playState() {
    return this.playStateValue;
  }
  resetReadyPromise() {
    this.readyResolve = null, this.readyPromise = new Promise((t, r) => {
      this.readyResolve = t;
    });
  }
  get ready() {
    return this.readyPromise;
  }
  resetFinishedPromise() {
    this.finishedResolve = null, this.finishedReject = null, this.finishedPromise = new Promise((t, r) => {
      this.finishedResolve = t, this.finishedReject = r;
    }), this.finishedPromise.catch((t) => {
    });
  }
  get finished() {
    return this.finishedPromise;
  }
  play() {
    this.playStateValue = "running", this.driver.play();
  }
  cancel() {
    if (this.playStateValue === "running") {
      if (this.driver.cancel(), this.playState !== "idle") {
        let t = "AbortError";
        this.finishedReject && this.finishedReject(t);
      }
      this.playStateValue = "idle";
    }
  }
  finish() {
    this.playStateSource === "running" && (this.playStateValue = "finished", this.driver.finish());
  }
  isFinished() {
    return this.playStateValue === "finished";
  }
};
function VF(e, t, r, n) {
  dn("animate()", "2.0.0", "the new animation API (https://www.framer.com/api/animation/)");
  let o = e, i;
  ae(e) || De(e) ? i = e.get() : i = q.objectToValues(e);
  let a = new wn(o, i, t, r, n);
  return a.play(), a;
}
function Fl(e, t, r, n) {
  return ae(e) ? VF(e, t, r, n) : Qt(e, t, r);
}
(function(s) {
  function e(l, u, c) {
    return s(l, u, Sn, c);
  }
  s.spring = e;
  function t(l, u, c) {
    return s(l, u, Tn, c);
  }
  s.bezier = t;
  function r(l, u, c) {
    return s.bezier(l, u, {...c, curve: gt.Linear});
  }
  s.linear = r;
  function n(l, u, c) {
    return s.bezier(l, u, {...c, curve: gt.Ease});
  }
  s.ease = n;
  function o(l, u, c) {
    return s.bezier(l, u, {...c, curve: gt.EaseIn});
  }
  s.easeIn = o;
  function i(l, u, c) {
    return s.bezier(l, u, {...c, curve: gt.EaseOut});
  }
  s.easeOut = i;
  function a(l, u, c) {
    return s.bezier(l, u, {...c, curve: gt.EaseInOut});
  }
  s.easeInOut = a;
})(Fl || (Fl = {}));
function Mb(e = N.location.href) {
  if (!e)
    throw new Error(`getConfigFromURL() called without url argument (location.href = "${N.location.href}")`);
  let t = new URL(e).searchParams, r = t.get("imageBaseURL") || "", n = t.get("projectURL") || "", o = t.get("console") === "1", i = t.get("device") === "0";
  return {imageBaseURL: r, projectURL: n, showConsole: o, disableDevice: i};
}
function _F(e = N.location.href) {
  if (!e)
    throw new Error(`getConfigFromURL() called without url argument (location.href = "${N.location.href}")`);
  let t = decodeURIComponent(new URL(e).hash.slice(1)), [r, n, o] = t.split("#&#");
  return {documentURL: r, imageBaseURL: n, projectURL: o};
}
function jF(e, t) {
  try {
    return typeof t == "undefined" ? new URL(e) : new URL(e, t);
  } catch (r) {
    return null;
  }
}
var NF = (e) => [].concat.apply([], e);
function Ib(e) {
  let t = "";
  for (let r of e)
    !r || (t.length > 0 && !t.endsWith("/") && (t += "/"), Array.isArray(r) ? t += Ib(r) : t += encodeURIComponent(r).replace(/%2F/g, "/"));
  return t;
}
function BF(...e) {
  let t = NF(e).filter(Boolean);
  if (t.length === 1 && jF(t[0]))
    return t[0];
  let r = Ib(e);
  return Be.assetResolver(r, {isFramerResourceURL: true, isExport: O.current() === O.export}) || "";
}
var Ep = new Map(), Yr = class {
  constructor(t) {
    this.id = t;
    this._link = null;
    this._urllink = null;
  }
  add(t) {
    return Yr.forKey(this.id + t);
  }
  toString() {
    return this.id;
  }
  get link() {
    let t = this._link;
    return t || (this._link = "#" + this.id);
  }
  get urlLink() {
    let t = this._urllink;
    return t || (this._urllink = "url(#" + this.id + ")");
  }
  static forKey(t) {
    let r = Ep.get(t);
    return r || (r = new Yr("a" + (1e3 + Ep.size) + "z"), Ep.set(t, r), r);
  }
};
function Do(e, t) {
  return {id: `id${t}g${qe.hash(e)}`, angle: e.angle - 90, stops: Wr(e).map((r) => ({color: r.value, alpha: st.getAlpha(r.value) * e.alpha, position: r.position}))};
}
function Lo(e, t) {
  return {id: `id${t}g${Ze.hash(e)}`, widthFactor: e.widthFactor, heightFactor: e.heightFactor, centerAnchorX: e.centerAnchorX, centerAnchorY: e.centerAnchorY, stops: Wr(e).map((r) => ({color: r.value, alpha: st.getAlpha(r.value) * e.alpha, position: r.position}))};
}
var Fp = (e) => {
  let t = ke.fromRect(e.getBoundingClientRect());
  return t.x = t.x + N.scrollX, t.y = t.y + N.scrollY, t;
}, Ab = (e) => ke.merge(...e.map(Fp)), HF = (e, t) => {
  let r = Db(e, t);
  return {x: r.x, y: r.y, width: e.width, height: e.height};
}, zF = (e, t) => {
  let r = Lb(e, t);
  return {x: r.x, y: r.y, width: e.width, height: e.height};
}, Mp = (e) => {
  let t = e.getBoundingClientRect();
  return {x: t.left + N.scrollX, y: t.top + N.scrollY, width: t.width, height: t.height};
}, WF = (e) => ({x: e.pageX, y: e.pageY}), UF = (e) => ({x: e.clientX, y: e.clientY}), Db = (e, t) => {
  let r = Mp(t);
  return {x: e.x + r.x, y: e.y + r.y};
}, Lb = (e, t) => {
  let r = Mp(t);
  return {x: e.x - r.x, y: e.y - r.y};
}, GF = (e, t = {}) => {
  let r = new KeyboardEvent("keydown", {bubbles: true, keyCode: e, ...t}), n = document.activeElement;
  n && n.dispatchEvent(r);
}, $F = {frameFromElement: Fp, frameFromElements: Ab, convertToPageFrame: HF, convertFromPageFrame: zF, getPageFrame: Mp, fromEventForPage: WF, fromEventForClient: UF, convertToPagePoint: Db, convertFromPagePoint: Lb};
var XF = "calculatedPaths";
function YF(e) {
  return XF in e;
}
function KF(e, t) {
  if (qe.isLinearGradient(t.fill))
    return Do(t.fill, e);
  if (Ze.isRadialGradient(t.fill))
    return Lo(t.fill, e);
}
function qF(e, t) {
  let r = 0, n, o = (...i) => {
    r = Date.now(), n = void 0, e(...i);
  };
  return (...i) => {
    let a = Date.now(), s = t - (a - r);
    s <= 0 || s > t ? (n && (N.clearTimeout(n), n = void 0), r = a, e(...i)) : n || (n = N.setTimeout(o, s, ...i));
  };
}
var ZF = "framer/asset-reference,";
function Ob(e) {
  return e.startsWith(`data:${ZF}`);
}
function Ip(e, t) {
  var n;
  if (/^\w+:/.test(e) && !Ob(e))
    return e;
  typeof t != "number" ? t = void 0 : t <= 512 ? t = 512 : t <= 1024 ? t = 1024 : t <= 2048 ? t = 2048 : t = 4096;
  let r = O.current() === O.export;
  return (n = Be.assetResolver(e, {size: t, isExport: r})) != null ? n : "";
}
function Gi(e, t, r) {
  if (e = q.get(e, "#09F"), !rt.isImageObject(e) || !e.pixelWidth || !e.pixelHeight)
    return;
  let n = e.pixelWidth, o = e.pixelHeight, i, {fit: a} = e;
  if (a === "fill" || a === "fit" || !a) {
    let l = 1, u = 1, c = 0, f = 0, p = n / o, d = t.height * p, m = t.width / p, h = d / t.width, v = m / t.height;
    (a === "fill" || !a ? v > h : v < h) ? (u = v, f = (1 - v) / 2) : (l = h, c = (1 - h) / 2), i = `translate(${c}, ${f}) scale(${l}, ${u})`;
  }
  return {id: `id${r}g-fillImage`, path: e.src, transform: i};
}
function JF(e) {
  return e.type === "master";
}
function QF(e) {
  return e.type === "override";
}
function Ap(e) {
  return e.type !== "master";
}
var eM = "|local|";
function tM(e, t) {
  let r = e.prototype.toJSON;
  return e.prototype.toJSON = function() {
    let n = r ? r.apply(this) : this;
    return Object.assign({}, n, {__type__: t});
  }, e;
}
function rM(e, t) {
  return e && e.__type__ && e.__type__ === t;
}
var ir = class {
  constructor(t) {
    this.__class = "PathSegment";
    this.x = 0;
    this.y = 0;
    this.handleMirroring = "straight";
    this.handleOutX = 0;
    this.handleOutY = 0;
    this.handleInX = 0;
    this.handleInY = 0;
    this.radius = 0;
    t && Object.assign(this, t);
  }
  merge(t) {
    return Object.assign(Object.create(Object.getPrototypeOf(this)), this, t);
  }
};
ir.displayName = "WithClassDiscriminatorMixin(PathSegment)";
ir.prototype.__class = "PathSegment";
(function(a) {
  a.point = (s) => ({x: s.x, y: s.y}), a.handleOut = (s) => ({x: s.handleOutX, y: s.handleOutY}), a.handleIn = (s) => ({x: s.handleInX, y: s.handleInY}), a.calculatedHandleOut = (s) => {
    switch (s.handleMirroring) {
      case "symmetric":
      case "disconnected":
      case "asymmetric":
        return Re.add(a.point(s), a.handleOut(s));
      default:
        return {x: s.x, y: s.y};
    }
  }, a.calculatedHandleIn = (s) => {
    switch (s.handleMirroring) {
      case "symmetric":
        return Re.subtract(a.point(s), a.handleOut(s));
      case "disconnected":
      case "asymmetric":
        return Re.add(a.point(s), a.handleIn(s));
      default:
        return a.point(s);
    }
  }, a.curveDefault = (s, l) => {
    if (s.length > 2) {
      let u, c;
      l === 0 ? u = s[s.length - 1] : u = s[l - 1], l === s.length - 1 ? c = s[0] : c = s[l + 1];
      let f = Re.subtract(a.point(c), a.point(u));
      return {x: f.x / 4, y: f.y / 4};
    }
    return {x: 10, y: 10};
  };
})(ir || (ir = {}));
var nM = "pathSegments";
function oM(e) {
  return nM in e;
}
var iM = {pathSegments: [], pathClosed: false};
function Dp(e, t = {x: 0, y: 0}, r = O.canvas) {
  let n = [], o = [];
  return Array.isArray(e) ? o = e : o = [e], o.forEach((i, a) => {
    let {pathClosed: s, pathSegments: l} = i, u = l.length;
    if (u === 0)
      return "";
    for (let c = 0; c < u; c++) {
      let f = l[c], p, d, m = c === 0, h = c === u - 1;
      if (h ? s && (p = l[0]) : p = l[c + 1], m ? s && (d = l[u - 1]) : d = l[c - 1], c === 0 ? n.push("M") : d && Ml(d, f) && n.push("L"), n.push(f.x + t.x, f.y + t.y), p && !Ml(f, p)) {
        let v = ir.calculatedHandleOut(f), y = ir.calculatedHandleIn(p);
        n.push("C", v.x + t.x, v.y + t.y, y.x + t.x, y.y + t.y);
      }
      h && p && (Ml(f, p) ? n.push("Z") : n.push(p.x + t.x, p.y + t.y, "Z"));
    }
  }), (r === O.export || r === O.preview) && (n = n.map((i) => k(i) ? Pt(i, 3) : i)), n.join(" ");
}
function Ml(e, t) {
  let r = e.handleMirroring === "straight" || e.handleOutX === 0 && e.handleOutY === 0, n = t.handleMirroring === "straight" || t.handleInX === 0 && t.handleInY === 0;
  return r && n;
}
function Il(e, t) {
  return {width: e, height: t};
}
(function(a) {
  a.equals = (s, l) => s === l ? true : !s || !l ? false : s.width === l.width && s.height === l.height, a.update = (s, l, u = false) => {
    let {width: c, height: f} = s, p = c / f;
    return c = l.width !== void 0 ? l.width : c, f = l.height !== void 0 ? l.height : f, u && (l.width === void 0 && l.height !== void 0 && (c = l.height * p), l.width !== void 0 && l.height === void 0 && p !== 0 && (f = l.width / p)), {width: c, height: f};
  };
  function r(s, l) {
    return {width: Math.max(0, s.width - l.width), height: Math.max(0, s.height - l.height)};
  }
  a.subtract = r, a.zero = a(0, 0), a.isZero = function(s) {
    return s === a.zero || s.width === 0 && s.height === 0;
  }, a.defaultIfZero = function(s, l, u) {
    return a.isZero(u) ? a(s, l) : u;
  };
})(Il || (Il = {}));
function Al(e, t) {
  return {a: e, b: t};
}
(function(o) {
  function e(i, a) {
    let s = i.a.x, l = i.a.y, u = i.b.x, c = i.b.y, f = a.a.x, p = a.a.y, d = a.b.x, m = a.b.y, h = (s - u) * (p - m) - (l - c) * (f - d);
    if (h === 0)
      return null;
    let v = ((f - d) * (s * c - l * u) - (s - u) * (f * m - p * d)) / h, y = ((p - m) * (s * c - l * u) - (l - c) * (f * m - p * d)) / h;
    return {x: v, y};
  }
  o.intersection = e, o.isOrthogonal = (i) => i.a.x === i.b.x || i.a.y === i.b.y, o.perpendicular = (i, a) => {
    let s = i.a.x - i.b.x, l = i.a.y - i.b.y, u = Re(a.x - l, a.y + s);
    return o(u, a);
  };
  function n(i, a) {
    let s = o.perpendicular(i, a);
    return e(i, s);
  }
  o.projectPoint = n;
})(Al || (Al = {}));
var sM = forwardRef(function(t, r) {
  let {background: n, children: o, ...i} = t, a = {...i.style};
  return n && delete a.background, createElement(_e.div, {...i, style: a, ref: r}, n && n.src ? createElement(nl, {image: n}) : null, o);
});
var $i = class extends Component {
  render() {
    let {id: t, path: r, transform: n} = this.props, o = Ip(r);
    return createElement("pattern", {id: t, width: "100%", height: "100%", patternContentUnits: "objectBoundingBox"}, createElement("image", {key: o, width: 1, height: 1, xlinkHref: o, preserveAspectRatio: "none", transform: n}));
  }
};
function Lp(e) {
  let t = Hr(), r = lt(e), n = useRef(null);
  return xn(e, n), createElement(Xi, {...e, innerRef: n, parentSize: t, layoutId: r});
}
function _b(e, t) {
  var c, f;
  let r = e.current;
  if (!r)
    return;
  let {withExternalLayout: n, parentSize: o} = t;
  if (!n && er(t) && o !== Ae.Disabled && o !== Ae.DisabledForCurrentLevel)
    return;
  let a = r.firstElementChild;
  if (!a || !(a instanceof SVGSVGElement))
    return;
  let {intrinsicWidth: s, intrinsicHeight: l, _constraints: u} = t;
  ((c = a.viewBox.baseVal) == null ? void 0 : c.width) === 0 && ((f = a.viewBox.baseVal) == null ? void 0 : f.height) === 0 && k(s) && k(l) && a.setAttribute("viewBox", `0 0 ${s} ${l}`), u && u.aspectRatio ? a.setAttribute("preserveAspectRatio", "") : a.setAttribute("preserveAspectRatio", "none"), a.setAttribute("width", "100%"), a.setAttribute("height", "100%");
}
var Op = class extends Pe {
  constructor() {
    super(...arguments);
    this.container = createRef();
    this.svgElement = createRef();
  }
  static frame(t) {
    return gn(t, t.parentSize || Ae.Unknown);
  }
  getPrefixedSVG(t, r) {
    if (this.previouslyPrefixedSVG && t === this.previouslyPrefixedSVG.svg && r === this.previouslyPrefixedSVG.id)
      return this.previouslyPrefixedSVGResult;
    let n = uM(t, r);
    return this.previouslyPrefixedSVGResult = n, this.previouslyPrefixedSVG = {svg: t, id: r}, n;
  }
  get frame() {
    return gn(this.props, this.props.parentSize || Ae.Unknown);
  }
  componentDidMount() {
    _b(this.container, this.props);
  }
  componentDidUpdate(t) {
    super.componentDidUpdate(t);
    let {fill: r} = this.props;
    rt.isImageObject(r) && rt.isImageObject(t.fill) && r.src !== t.fill.src && js(this.svgElement.current, "fill", null, false), _b(this.container, this.props);
  }
  collectLayout(t, r) {
    if (this.props.withExternalLayout) {
      r.width = r.height = "inherit";
      return;
    }
    let n = this.frame, {rotation: o, intrinsicWidth: i, intrinsicHeight: a, width: s, height: l} = this.props, u = q.getNumber(o);
    if (t.opacity = k(this.props.opacity) ? this.props.opacity : 1, O.hasRestrictions() && n) {
      Object.assign(t, {transform: `translate(${n.x}px, ${n.y}px) rotate(${u.toFixed(4)}deg)`, width: `${n.width}px`, height: `${n.height}px`}), er(this.props) && (t.position = "absolute");
      let c = n.width / (i || 1), f = n.height / (a || 1);
      r.transformOrigin = "top left";
      let {zoom: p, target: d} = he;
      if (d === O.export) {
        let m = p > 1 ? p : 1;
        r.transform = `scale(${c * m}, ${f * m})`, r.zoom = 1 / m;
      } else
        r.transform = `scale(${c}, ${f})`;
      i && a && (r.width = i, r.height = a);
    } else {
      let {left: c, right: f, top: p, bottom: d} = this.props;
      Object.assign(t, {left: c, right: f, top: p, bottom: d, width: s, height: l, rotate: u}), Object.assign(r, {left: 0, top: 0, bottom: 0, right: 0, position: "absolute"});
    }
  }
  render() {
    var I;
    N.perf && N.perf.nodeRender();
    let {id: t, visible: r, style: n, fill: o, svg: i, intrinsicHeight: a, intrinsicWidth: s, layoutId: l, className: u, variants: c, transition: f, withExternalLayout: p, innerRef: d} = this.props;
    if (!p && (!r || !t))
      return null;
    let m = (I = t != null ? t : l) != null ? I : "svg";
    at();
    let h = this.frame, v = h || {width: s || 100, height: a || 100}, y = {...n, imageRendering: "pixelated"}, C = {};
    this.collectLayout(y, C), pl(this.props, y), xo(this.props, y), Pe.applyWillChange(this.props, y, false);
    let P = null;
    if (typeof o == "string" || z.isColorObject(o)) {
      let M = z.isColorObject(o) ? o.initialValue || z.toRgbString(o) : o;
      y.fill = M, y.color = M;
    } else if (qe.isLinearGradient(o)) {
      let M = o, A = `${encodeURI(t || "")}g${qe.hash(M)}`;
      y.fill = `url(#${A})`;
      let L = Do(M, m);
      P = createElement("svg", {ref: this.svgElement, xmlns: "http://www.w3.org/2000/svg", width: "100%", height: "100%", style: {position: "absolute"}}, createElement("linearGradient", {id: A, gradientTransform: `rotate(${L.angle}, 0.5, 0.5)`}, L.stops.map((U, $) => createElement("stop", {key: $, offset: U.position, stopColor: U.color, stopOpacity: U.alpha}))));
    } else if (Ze.isRadialGradient(o)) {
      let M = o, A = `${encodeURI(t || "")}g${Ze.hash(M)}`;
      y.fill = `url(#${A})`;
      let L = Lo(M, m);
      P = createElement("svg", {ref: this.svgElement, xmlns: "http://www.w3.org/2000/svg", width: "100%", height: "100%", style: {position: "absolute"}}, createElement("radialGradient", {id: A, cy: M.centerAnchorY, cx: M.centerAnchorX, r: M.widthFactor}, L.stops.map((U, $) => createElement("stop", {key: $, offset: U.position, stopColor: U.color, stopOpacity: U.alpha}))));
    } else if (rt.isImageObject(o)) {
      let M = Gi(o, v, m);
      M && (y.fill = `url(#${M.id})`, P = createElement("svg", {ref: this.svgElement, xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", width: "100%", height: "100%", style: {position: "absolute"}}, createElement("defs", null, createElement($i, {...M}))));
    }
    let b = {"data-framer-component-type": "SVG"}, R = !h;
    R && Object.assign(b, yo(this.props.center));
    let E = createElement(Fragment, null, P, createElement("div", {key: rt.isImageObject(o) ? o.src : "", className: "svgContainer", style: C, ref: this.container, dangerouslySetInnerHTML: {__html: this.getPrefixedSVG(i, m)}}));
    return createElement(_e.div, {...b, layoutId: l, transformTemplate: R ? Ur(this.props.center) : void 0, id: t, ref: d, style: y, className: u, variants: c, transition: f}, E);
  }
}, Xi = Op;
Xi.supportsConstraints = true, Xi.defaultSVGProps = {left: void 0, right: void 0, top: void 0, bottom: void 0, style: void 0, _constraints: {enabled: true, aspectRatio: null}, parentSize: Ae.Unknown, rotation: 0, visible: true, svg: "", shadows: []}, Xi.defaultProps = {...Pe.defaultProps, ...Op.defaultSVGProps};
function uM(e, t) {
  let r = new DOMParser();
  try {
    let o = r.parseFromString(e, "image/svg+xml").getElementsByTagName("svg")[0];
    if (!o)
      return e;
    let i = cM(t);
    return jb(o, i), o.outerHTML;
  } catch (n) {
    throw Error(`Failed to parse SVG: ${n}`);
  }
}
function cM(e) {
  return e.replace(/[^a-z0-9\-_:.]|^[^a-z]+/gi, "");
}
function jb(e, t) {
  pM(e, t), Array.from(e.children).forEach((n) => {
    jb(n, t);
  });
}
function pM(e, t) {
  e.getAttributeNames().forEach((n) => {
    let o = e.getAttribute(n);
    if (!o)
      return;
    if (n === "id" && e.setAttribute(n, `${t}_${o}`), n === "href" || n === "xlink:href") {
      let [a, s] = o.split("#");
      if (a)
        return;
      e.setAttribute(n, `#${t}_${s}`);
      return;
    }
    let i = "url(#";
    if (o.includes(i)) {
      let a = o.replace(i, `${i}${t}_`);
      e.setAttribute(n, a);
    }
  });
}
function dM(e) {
  return Object.fromEntries(e.map((t) => [t[0], Object.fromEntries(t[1].map((r) => [r[0], {selector: r[1], weight: r[2]}]))]));
}
var hM = {Arial: {Regular: {selector: "Arial", weight: void 0}, Black: {selector: "Arial-Black", weight: void 0}, Narrow: {selector: "Arial Narrow", weight: void 0}, "Rounded Bold": {selector: "Arial Rounded MT Bold", weight: void 0}}, Avenir: {Book: {selector: "Avenir", weight: void 0}, Light: {selector: "Avenir-Light", weight: void 0}, Medium: {selector: "Avenir-Medium", weight: void 0}, Heavy: {selector: "Avenir-Heavy", weight: void 0}, Black: {selector: "Avenir-Black", weight: void 0}}, "Avenir Next": {Regular: {selector: "Avenir Next", weight: void 0}, "Ultra Light": {selector: "AvenirNext-UltraLight", weight: void 0}, Medium: {selector: "AvenirNext-Medium", weight: void 0}, "Demi Bold": {selector: "AvenirNext-DemiBold", weight: void 0}, Heavy: {selector: "AvenirNext-Heavy", weight: void 0}}, "Avenir Next Condensed": {Regular: {selector: "Avenir Next Condensed", weight: void 0}, "Ultra Light": {selector: "AvenirNextCondensed-UltraLight", weight: void 0}, Medium: {selector: "AvenirNextCondensed-Medium", weight: void 0}, "Demi Bold": {selector: "AvenirNextCondensed-DemiBold", weight: void 0}, Heavy: {selector: "AvenirNextCondensed-Heavy", weight: void 0}}, Baskerville: {Regular: {selector: "Baskerville", weight: void 0}, "Semi Bold": {selector: "Baskerville-SemiBold", weight: void 0}}, "Bodoni 72": {Book: {selector: "Bodoni 72", weight: void 0}, Oldstyle: {selector: "Bodoni 72 Oldstyle", weight: void 0}, Smallcaps: {selector: "Bodoni 72 Smallcaps", weight: void 0}}, Courier: {Regular: {selector: "Courier", weight: void 0}}, "Courier New": {Regular: {selector: "Courier New", weight: void 0}}, Futura: {Medium: {selector: "Futura", weight: void 0}, Condensed: {selector: "Futura-CondensedMedium", weight: void 0}, "Condensed ExtraBold": {selector: "Futura-CondensedExtraBold", weight: void 0}}, Georgia: {Regular: {selector: "Georgia", weight: void 0}}, "Gill Sans": {Regular: {selector: "Gill Sans", weight: void 0}, Light: {selector: "GillSans-Light", weight: void 0}, SemiBold: {selector: "GillSans-SemiBold", weight: void 0}, UltraBold: {selector: "GillSans-UltraBold", weight: void 0}}, Helvetica: {Regular: {selector: "Helvetica", weight: void 0}, Light: {selector: "Helvetica-Light", weight: void 0}, Bold: {selector: "Helvetica-Bold", weight: void 0}, Oblique: {selector: "Helvetica-Oblique", weight: void 0}, "Light Oblique": {selector: "Helvetica-LightOblique", weight: void 0}, "Bold Oblique": {selector: "Helvetica-BoldOblique", weight: void 0}}, "Helvetica Neue": {Regular: {selector: "Helvetica Neue", weight: void 0}, UltraLight: {selector: "HelveticaNeue-UltraLight", weight: void 0}, Thin: {selector: "HelveticaNeue-Thin", weight: void 0}, Light: {selector: "HelveticaNeue-Light", weight: void 0}, Medium: {selector: "HelveticaNeue-Medium", weight: void 0}, Bold: {selector: "HelveticaNeue-Bold", weight: void 0}, Italic: {selector: "HelveticaNeue-Italic", weight: void 0}, "UltraLight Italic": {selector: "HelveticaNeue-UltraLightItalic", weight: void 0}, "Thin Italic": {selector: "HelveticaNeue-ThinItalic", weight: void 0}, "Light Italic": {selector: "HelveticaNeue-LightItalic", weight: void 0}, "Medium Italic": {selector: "HelveticaNeue-MediumItalic", weight: void 0}, "Bold Italic": {selector: "HelveticaNeue-BoldItalic", weight: void 0}, "Condensed Bold": {selector: "HelveticaNeue-CondensedBold", weight: void 0}, "Condensed Black": {selector: "HelveticaNeue-CondensedBlack", weight: void 0}}, "Hoefler Text": {Regular: {selector: "Hoefler Text", weight: void 0}}, Impact: {Regular: {selector: "Impact", weight: void 0}}, "Lucida Grande": {Regular: {selector: "Lucida Grande", weight: void 0}}, Menlo: {Regular: {selector: "Menlo", weight: void 0}}, Monaco: {Regular: {selector: "Monaco", weight: void 0}}, Optima: {Regular: {selector: "Optima", weight: void 0}, ExtraBlack: {selector: "Optima-ExtraBlack", weight: void 0}}, Palatino: {Regular: {selector: "Palatino", weight: void 0}}, "SF Pro Display": {Regular: {selector: "__SF-UI-Display-Regular__", weight: 400}, Ultralight: {selector: "__SF-UI-Display-Ultralight__", weight: 100}, Thin: {selector: "__SF-UI-Display-Thin__", weight: 200}, Light: {selector: "__SF-UI-Display-Light__", weight: 300}, Medium: {selector: "__SF-UI-Display-Medium__", weight: 500}, Semibold: {selector: "__SF-UI-Display-Semibold__", weight: 600}, Bold: {selector: "__SF-UI-Display-Bold__", weight: 700}, Heavy: {selector: "__SF-UI-Display-Heavy__", weight: 800}, Black: {selector: "__SF-UI-Display-Black__", weight: 900}, Italic: {selector: "__SF-UI-Display-Italic__", weight: 400}, "Ultralight Italic": {selector: "__SF-UI-Display-Ultralight-Italic__", weight: 100}, "Thin Italic": {selector: "__SF-UI-Display-Thin-Italic__", weight: 200}, "Light Italic": {selector: "__SF-UI-Display-Light-Italic__", weight: 300}, "Medium Italic": {selector: "__SF-UI-Display-Medium-Italic__", weight: 500}, "Semibold Italic": {selector: "__SF-UI-Display-Semibold-Italic__", weight: 600}, "Bold Italic": {selector: "__SF-UI-Display-Bold-Italic__", weight: 700}, "Heavy Italic": {selector: "__SF-UI-Display-Heavy-Italic__", weight: 800}, "Black Italic": {selector: "__SF-UI-Display-Black-Italic__", weight: 900}}, "SF Pro Display Condensed": {Regular: {selector: "__SF-UI-Display-Condensed-Regular__", weight: 400}, Ultralight: {selector: "__SF-UI-Display-Condensed-Ultralight__", weight: 100}, Thin: {selector: "__SF-UI-Display-Condensed-Thin__", weight: 200}, Light: {selector: "__SF-UI-Display-Condensed-Light__", weight: 300}, Medium: {selector: "__SF-UI-Display-Condensed-Medium__", weight: 500}, Semibold: {selector: "__SF-UI-Display-Condensed-Semibold__", weight: 600}, Bold: {selector: "__SF-UI-Display-Condensed-Bold__", weight: 700}, Heavy: {selector: "__SF-UI-Display-Condensed-Heavy__", weight: 800}, Black: {selector: "__SF-UI-Display-Condensed-Black__", weight: 900}}, "SF Pro Text": {Regular: {selector: "__SF-UI-Text-Regular__", weight: 400}, Light: {selector: "__SF-UI-Text-Light__", weight: 200}, Medium: {selector: "__SF-UI-Text-Medium__", weight: 500}, Semibold: {selector: "__SF-UI-Text-Semibold__", weight: 600}, Bold: {selector: "__SF-UI-Text-Bold__", weight: 700}, Heavy: {selector: "__SF-UI-Text-Heavy__", weight: 800}, Italic: {selector: "__SF-UI-Text-Italic__", weight: 400}, "Light Italic": {selector: "__SF-UI-Text-Light-Italic__", weight: 200}, "Medium Italic": {selector: "__SF-UI-Text-Medium-Italic__", weight: 500}, "Semibold Italic": {selector: "__SF-UI-Text-Semibold-Italic__", weight: 600}, "Bold Italic": {selector: "__SF-UI-Text-Bold-Italic__", weight: 700}, "Heavy Italic": {selector: "__SF-UI-Text-Heavy-Italic__", weight: 800}}, "SF Pro Text Condensed": {Regular: {selector: "__SF-UI-Text-Condensed-Regular__", weight: 400}, Light: {selector: "__SF-UI-Text-Condensed-Light__", weight: 200}, Medium: {selector: "__SF-UI-Text-Condensed-Medium__", weight: 500}, Semibold: {selector: "__SF-UI-Text-Condensed-Semibold__", weight: 600}, Bold: {selector: "__SF-UI-Text-Condensed-Bold__", weight: 700}, Heavy: {selector: "__SF-UI-Text-Condensed-Heavy__", weight: 800}}, Tahoma: {Regular: {selector: "Tahoma", weight: void 0}}, Times: {Regular: {selector: "Times", weight: void 0}}, "Times New Roman": {Regular: {selector: "Times New Roman", weight: void 0}}, Trebuchet: {Regular: {selector: "Trebuchet MS", weight: void 0}}, Verdana: {Regular: {selector: "Verdana", weight: void 0}}}, Bb = {"__SF-Compact-Display-Regular__": "SFCompactDisplay-Regular|.SFCompactDisplay-Regular", "__SF-Compact-Display-Ultralight__": "SFCompactDisplay-Ultralight|.SFCompactDisplay-Ultralight", "__SF-Compact-Display-Thin__": "SFCompactDisplay-Thin|.SFCompactDisplay-Thin", "__SF-Compact-Display-Light__": "SFCompactDisplay-Light|.SFCompactDisplay-Light", "__SF-Compact-Display-Medium__": "SFCompactDisplay-Medium|.SFCompactDisplay-Medium", "__SF-Compact-Display-Semibold__": "SFCompactDisplay-Semibold|.SFCompactDisplay-Semibold", "__SF-Compact-Display-Heavy__": "SFCompactDisplay-Heavy|.SFCompactDisplay-Heavy", "__SF-Compact-Display-Black__": "SFCompactDisplay-Black|.SFCompactDisplay-Black", "__SF-Compact-Display-Bold__": "SFCompactDisplay-Bold|.SFCompactDisplay-Bold", "__SF-UI-Text-Regular__": ".SFNSText|SFProText-Regular|SFUIText-Regular|.SFUIText", "__SF-UI-Text-Light__": ".SFNSText-Light|SFProText-Light|SFUIText-Light|.SFUIText-Light", "__SF-UI-Text-Medium__": ".SFNSText-Medium|SFProText-Medium|SFUIText-Medium|.SFUIText-Medium", "__SF-UI-Text-Semibold__": ".SFNSText-Semibold|SFProText-Semibold|SFUIText-Semibold|.SFUIText-Semibold", "__SF-UI-Text-Bold__": ".SFNSText-Bold|SFProText-Bold|SFUIText-Bold|.SFUIText-Bold", "__SF-UI-Text-Heavy__": ".SFNSText-Heavy|SFProText-Heavy|.SFUIText-Heavy", "__SF-UI-Text-Italic__": ".SFNSText-Italic|SFProText-Italic|SFUIText-Italic|.SFUIText-Italic", "__SF-UI-Text-Light-Italic__": ".SFNSText-LightItalic|SFProText-LightItalic|SFUIText-LightItalic|.SFUIText-LightItalic", "__SF-UI-Text-Medium-Italic__": ".SFNSText-MediumItalic|SFProText-MediumItalic|SFUIText-MediumItalic|.SFUIText-MediumItalic", "__SF-UI-Text-Semibold-Italic__": ".SFNSText-SemiboldItalic|SFProText-SemiboldItalic|SFUIText-SemiboldItalic|.SFUIText-SemiboldItalic", "__SF-UI-Text-Bold-Italic__": ".SFNSText-BoldItalic|SFProText-BoldItalic|SFUIText-BoldItalic|.SFUIText-BoldItalic", "__SF-UI-Text-Heavy-Italic__": ".SFNSText-HeavyItalic|SFProText-HeavyItalic|.SFUIText-HeavyItalic", "__SF-Compact-Text-Regular__": "SFCompactText-Regular|.SFCompactText-Regular", "__SF-Compact-Text-Light__": "SFCompactText-Light|.SFCompactText-Light", "__SF-Compact-Text-Medium__": "SFCompactText-Medium|.SFCompactText-Medium", "__SF-Compact-Text-Semibold__": "SFCompactText-Semibold|.SFCompactText-Semibold", "__SF-Compact-Text-Bold__": "SFCompactText-Bold|.SFCompactText-Bold", "__SF-Compact-Text-Heavy__": "SFCompactText-Heavy|.SFCompactText-Heavy", "__SF-Compact-Text-Italic__": "SFCompactText-Italic|.SFCompactText-Italic", "__SF-Compact-Text-Light-Italic__": "SFCompactText-LightItalic|.SFCompactText-LightItalic", "__SF-Compact-Text-Medium-Italic__": "SFCompactText-MediumItalic|.SFCompactText-MediumItalic", "__SF-Compact-Text-Semibold-Italic__": "SFCompactText-SemiboldItalic|.SFCompactText-SemiboldItalic", "__SF-Compact-Text-Bold-Italic__": "SFCompactText-BoldItalic|.SFCompactText-BoldItalic", "__SF-Compact-Text-Heavy-Italic__": "SFCompactText-HeavyItalic|.SFCompactText-HeavyItalic", "__SF-UI-Display-Condensed-Regular__": ".SFNSDisplayCondensed-Regular|SFUIDisplayCondensed-Regular|.SFUIDisplayCondensed-Regular", "__SF-UI-Display-Condensed-Ultralight__": ".SFNSDisplayCondensed-Ultralight|SFUIDisplayCondensed-Ultralight|.SFUIDisplayCondensed-Ultralight", "__SF-UI-Display-Condensed-Thin__": ".SFNSDisplayCondensed-Thin|SFUIDisplayCondensed-Thin|.SFUIDisplayCondensed-Thin", "__SF-UI-Display-Condensed-Light__": ".SFNSDisplayCondensed-Light|SFUIDisplayCondensed-Light|.SFUIDisplayCondensed-Light", "__SF-UI-Display-Condensed-Medium__": ".SFNSDisplayCondensed-Medium|SFUIDisplayCondensed-Medium|.SFUIDisplayCondensed-Medium", "__SF-UI-Display-Condensed-Semibold__": ".SFNSDisplayCondensed-Semibold|SFUIDisplayCondensed-Semibold|.SFUIDisplayCondensed-Semibold", "__SF-UI-Display-Condensed-Bold__": ".SFNSDisplayCondensed-Bold|SFUIDisplayCondensed-Bold|.SFUIDisplayCondensed-Bold", "__SF-UI-Display-Condensed-Heavy__": ".SFNSDisplayCondensed-Heavy|SFUIDisplayCondensed-Heavy|.SFUIDisplayCondensed-Heavy", "__SF-UI-Display-Condensed-Black__": ".SFNSDisplayCondensed-Black|.SFUIDisplayCondensed-Black", "__SF-UI-Display-Regular__": ".SFNSDisplay|SFProDisplay-Regular|SFUIDisplay-Regular|.SFUIDisplay", "__SF-UI-Display-Ultralight__": ".SFNSDisplay-Ultralight|SFProDisplay-Ultralight|SFUIDisplay-Ultralight|.SFUIDisplay-Ultralight", "__SF-UI-Display-Thin__": ".SFNSDisplay-Thin|SFProDisplay-Thin|SFUIDisplay-Thin|.SFUIDisplay-Thin", "__SF-UI-Display-Light__": ".SFNSDisplay-Light|SFProDisplay-Light|SFUIDisplay-Light|.SFUIDisplay-Light", "__SF-UI-Display-Medium__": ".SFNSDisplay-Medium|SFProDisplay-Medium|SFUIDisplay-Medium|.SFUIDisplay-Medium", "__SF-UI-Display-Semibold__": ".SFNSDisplay-Semibold|SFProDisplay-Semibold|SFUIDisplay-Semibold|.SFUIDisplay-Semibold", "__SF-UI-Display-Bold__": ".SFNSDisplay-Bold|SFProDisplay-Bold|SFUIDisplay-Bold|.SFUIDisplay-Bold", "__SF-UI-Display-Heavy__": ".SFNSDisplay-Heavy|SFProDisplay-Heavy|SFUIDisplay-Heavy|.SFUIDisplay-Heavy", "__SF-UI-Display-Black__": ".SFNSDisplay-Black|SFProDisplay-Black|.SFUIDisplay-Black", "__SF-UI-Display-Italic__": ".SFNSDisplay-Italic|SFProDisplay-Italic|SFUIDisplay-Italic", "__SF-UI-Display-Ultralight-Italic__": ".SFNSDisplay-UltralightItalic|SFProDisplay-UltralightItalic|SFUIDisplay-UltralightItalic|.SFUIDisplay-UltralightItalic", "__SF-UI-Display-Thin-Italic__": ".SFNSDisplay-ThinItalic|SFProDisplay-ThinItalic|SFUIDisplay-ThinItalic|.SFUIDisplay-ThinItalic", "__SF-UI-Display-Light-Italic__": ".SFNSDisplay-LightItalic|SFProDisplay-LightItalic|SFUIDisplay-LightItalic|.SFUIDisplay-LightItalic", "__SF-UI-Display-Medium-Italic__": ".SFNSDisplay-MediumItalic|SFProDisplay-MediumItalic|SFUIDisplay-MediumItalic|.SFUIDisplay-MediumItalic", "__SF-UI-Display-Semibold-Italic__": ".SFNSDisplay-SemiboldItalic|SFProDisplay-SemiboldItalic|SFUIDisplay-SemiboldItalic|.SFUIDisplay-SemiboldItalic", "__SF-UI-Display-Bold-Italic__": ".SFNSDisplay-BoldItalic|SFProDisplay-BoldItalic|SFUIDisplay-BoldItalic|.SFUIDisplay-BoldItalic", "__SF-UI-Display-Heavy-Italic__": ".SFNSDisplay-HeavyItalic|SFProDisplay-HeavyItalic|SFUIDisplay-HeavyItalic|.SFUIDisplay-HeavyItalic", "__SF-UI-Display-Black-Italic__": ".SFNSDisplay-BlackItalic|SFProDisplay-BlackItalic|.SFUIDisplay-BlackItalic", "__SF-UI-Text-Condensed-Regular__": ".SFNSTextCondensed-Regular|SFUITextCondensed-Regular|.SFUITextCondensed-Regular", "__SF-UI-Text-Condensed-Light__": ".SFNSTextCondensed-Light|SFUITextCondensed-Light|.SFUITextCondensed-Light", "__SF-UI-Text-Condensed-Medium__": ".SFNSTextCondensed-Medium|SFUITextCondensed-Medium|.SFUITextCondensed-Medium", "__SF-UI-Text-Condensed-Semibold__": ".SFNSTextCondensed-Semibold|SFUITextCondensed-Semibold|.SFUITextCondensed-Semibold", "__SF-UI-Text-Condensed-Bold__": ".SFNSTextCondensed-Bold|SFUITextCondensed-Bold|.SFUITextCondensed-Bold", "__SF-UI-Text-Condensed-Heavy__": ".SFNSTextCondensed-Heavy|.SFUITextCondensed-Heavy", "__SF-Compact-Rounded-Regular__": "SFCompactRounded-Regular|.SFCompactRounded-Regular", "__SF-Compact-Rounded-Ultralight__": "SFCompactRounded-Ultralight|.SFCompactRounded-Ultralight", "__SF-Compact-Rounded-Thin__": "SFCompactRounded-Thin|.SFCompactRounded-Thin", "__SF-Compact-Rounded-Light__": "SFCompactRounded-Light|.SFCompactRounded-Light", "__SF-Compact-Rounded-Medium__": "SFCompactRounded-Medium|.SFCompactRounded-Medium", "__SF-Compact-Rounded-Semibold__": "SFCompactRounded-Semibold|.SFCompactRounded-Semibold", "__SF-Compact-Rounded-Bold__": "SFCompactRounded-Bold|.SFCompactRounded-Bold", "__SF-Compact-Rounded-Heavy__": "SFCompactRounded-Heavy|.SFCompactRounded-Heavy", "__SF-Compact-Rounded-Black__": "SFCompactRounded-Black|.SFCompactRounded-Black"}, kp = typeof N != "undefined" && N.SystemTypefaceDescriptors !== void 0 ? dM(N.SystemTypefaceDescriptors) : hM, Hb = typeof N != "undefined" && typeof N.SystemTypefaceDefaultSelector == "string" ? N.SystemTypefaceDefaultSelector : "Inter";
var kt;
(function(n) {
  n.Google = "google", n.Local = "local", n.Custom = "custom";
})(kt || (kt = {}));
var Dl = "GF;", Vp = class {
  constructor() {
    this.name = kt.Google;
    this.typefaces = [];
    this.byFamily = new Map();
  }
  getTypefaceByFamily(t) {
    var r;
    return (r = this.byFamily.get(t)) != null ? r : null;
  }
  parseSelector(t) {
    if (!t.startsWith(Dl))
      return null;
    let r = t.split("-");
    if (r.length !== 2)
      return null;
    let n = r[0].replace(Dl, ""), o = r[1];
    return {family: n, variant: o, source: this.name};
  }
  createTypeface(t) {
    let r = {family: t, fonts: [], source: this.name};
    return this.addTypeface(r), r;
  }
  addTypeface(t) {
    this.typefaces.push(t), this.byFamily.set(t.family, t);
  }
  importFonts(t) {
    let r = [];
    return t.forEach((n) => {
      let o = n.variants.map((i) => ({source: this.name, variant: i, family: n.family, file: n.files[i].replace("http://", "https://")}));
      r = r.concat(o);
    }), r;
  }
};
var zb = "System Default", _p = class {
  constructor() {
    this.name = kt.Local;
    this.typefaces = [];
    this.byFamily = new Map();
    this.typefaceAliasBySelector = new Map();
    this.typefaceAliases = new Map();
    this.interTypefaceSelectors = new Set();
  }
  getTypefaceByFamily(t) {
    var r;
    return (r = this.byFamily.get(t)) != null ? r : null;
  }
  createTypeface(t) {
    let r = {family: t, fonts: [], source: this.name};
    return this.addTypeface(r), r;
  }
  addTypeface(t) {
    this.typefaces.push(t), this.byFamily.set(t.family, t);
  }
  importFonts() {
    let t = [];
    for (let i of Object.keys(kp)) {
      let a = kp[i];
      if (!a)
        continue;
      let s = this.createTypeface(i);
      for (let l of Object.keys(a)) {
        let u = a[l];
        if (!u)
          continue;
        let {selector: c, weight: f} = u, p = {variant: l, selector: c, weight: f, typeface: s, status: "loaded"};
        s.fonts.push(p);
      }
      t.push(...s.fonts);
    }
    for (let [i, a] of Object.entries(Bb))
      this.addTypefaceAlias(i, a);
    let {typeface: r, aliases: n} = this.getSystemTypeface();
    this.addTypeface(r);
    for (let [i, a] of n)
      this.addTypefaceAlias(i, a);
    t.push(...r.fonts);
    let o = this.importInterTypeface();
    return t.push(...o.fonts), t;
  }
  importInterTypeface() {
    let t = [["Regular", "Inter", void 0], ["Thin", "Inter-Thin", 100], ["Extra Light", "Inter-ExtraLight", 200], ["Light", "Inter-Light", 300], ["Medium", "Inter-Medium", 500], ["Semibold", "Inter-SemiBold", 600], ["Bold", "Inter-Bold", 700], ["Extra Bold", "Inter-ExtraBold", 800], ["Black", "Inter-Black", 900], ["Thin Italic", "Inter-ThinItalic", 100], ["Extra Light Italic", "Inter-ExtraLightItalic", 300], ["Light Italic", "Inter-LightItalic", 300], ["Italic", "Inter-Italic", void 0], ["Medium Italic", "Inter-MediumItalic", 500], ["Semibold Italic", "Inter-SemiBoldItalic", 600], ["Bold Italic", "Inter-BoldItalic", 700], ["Extra Bold Italic", "Inter-ExtraBoldItalic", 800], ["Black Italic", "Inter-BlackItalic", 900]], r = this.createTypeface("Inter");
    for (let n of t) {
      let [o, i, a] = n, s = {variant: o, selector: i, weight: a, typeface: r, style: /italic/i.test(i) ? "italic" : void 0};
      r.fonts.push(s);
    }
    return r.fonts.forEach((n) => this.interTypefaceSelectors.add(n.selector)), r;
  }
  addTypefaceAlias(t, r) {
    this.typefaceAliases.set(t, r), this.typefaceAliasBySelector.set(r, t);
  }
  getSystemTypeface() {
    let t = this.workaroundChrome81and82("system-ui|-apple-system|BlinkMacSystemFont|Segoe UI|Roboto|Oxygen|Ubuntu|Cantarell|Fira Sans|Droid Sans|Helvetica Neue|sans-serif"), r = {family: zb, fonts: [], source: this.name}, n = new Map(), o = [400, 100, 200, 300, 500, 600, 700, 800, 900], i = ["normal", "italic"];
    for (let a of i)
      for (let s of o) {
        let l = gM(s, a), u = `__SystemDefault-${s}-${a}__`, c = {variant: l, selector: u, style: a === "normal" ? void 0 : a, weight: s === 400 ? void 0 : s, typeface: r, status: "loaded"};
        r.fonts.push(c), n.set(u, t);
      }
    return {typeface: r, aliases: n};
  }
  getTypefaceAliasBySelector(t) {
    return this.typefaceAliasBySelector.get(t) || null;
  }
  getTypefaceSelectorByAlias(t) {
    return this.typefaceAliases.get(t) || null;
  }
  isTypefaceAlias(t) {
    return !!(t && t.match(/^__.*__$/));
  }
  workaroundChrome81and82(t) {
    let r = navigator.userAgent;
    return !r.includes("Mac OS X 10_15") || !r.includes("Chrome/81") && !r.includes("Chrome/82") ? t : `Inter|${t}`;
  }
}, Wb = {"100": "Thin", "200": "Extra Light", "300": "Light", "400": "Normal", "500": "Medium", "600": "Semi Bold", "700": "Bold", "800": "Extra Bold", "900": "Black"};
function gM(e, t) {
  let r = t === "normal" ? "Regular" : "Italic";
  return e === 400 ? r : t !== "normal" ? `${Wb[e]} ${r}` : `${Wb[e]}`;
}
function Ll(e) {
  if (e === "regular")
    return {style: "normal", weight: 400};
  let t = /([0-9]*)([a-z]*)/.exec(e);
  if (!t)
    return null;
  let r = parseInt(t[1] || "400"), n = t[2] || "normal";
  return {weight: r, style: n};
}
var Rn = "CUSTOM;";
function vM(e, t) {
  if (!t)
    return e.substring(0, e.lastIndexOf("."));
  let r = t.font.preferredFamily === "" ? t.font.fontFamily : t.font.preferredFamily, n = t.font.preferredSubFamily === "" ? t.font.fontSubFamily : t.font.preferredSubFamily;
  return `${r} ${n}`;
}
var jp = class {
  constructor() {
    this.name = kt.Custom;
    this.typefaces = [];
    this.byFamily = new Map();
    this.assetsByFamily = new Map();
  }
  importFonts(t) {
    this.typefaces.length = 0, this.byFamily.clear(), this.assetsByFamily.clear();
    let r = [];
    return t.forEach((n) => {
      var s;
      if (!this.isValidCustomFontAsset(n))
        return;
      let o = vM(n.name, n.properties), i = this.createTypeface(o), a = {typeface: i, selector: `${Rn}${o}`, variant: this.inferVariantName(o), postscriptName: (s = n.properties) == null ? void 0 : s.font.postscriptName, file: n.url};
      i.fonts.push(a), i.owner = n.ownerType === "team" ? "team" : "project", this.assetsByFamily.set(o, n), r.push(...i.fonts);
    }), r;
  }
  isValidCustomFontAsset(t) {
    var r, n;
    return t.mimeType.startsWith("font/") && t.properties && "font" in t.properties && ((r = t.properties) == null ? void 0 : r.kind) === "font" && "fontFamily" in ((n = t.properties) == null ? void 0 : n.font);
  }
  inferVariantName(t) {
    let r = ["thin", "ultra light", "extra light", "light", "normal", "medium", "semi bold", "bold", "extra bold", "black"], n = [...r.map((s) => `${s} italic`), ...r], o = t.toLowerCase(), i = [...o.split(" "), ...o.split("-"), ...o.split("_")], a = n.find((s) => i.includes(s) || i.includes(s.replace(/\s+/g, "")));
    return a ? a.replace(/(^\w|\s\w)/g, (s) => s.toUpperCase()) : "Regular";
  }
  createTypeface(t) {
    let r = this.byFamily.get(t);
    if (r)
      return r;
    let n = {source: this.name, family: t, fonts: []};
    return this.addTypeface(n), n;
  }
  addTypeface(t) {
    this.typefaces.push(t), this.byFamily.set(t.family, t);
  }
  parseSelector(t) {
    if (!t.startsWith(Rn))
      return null;
    let r = t.split(Rn);
    return {source: "custom", family: r[1]};
  }
  getFontBySelector(t, r = true) {
    let n = this.parseSelector(t);
    return !n || !r && !this.byFamily.get(n.family) ? null : this.getTypefaceByFamily(n.family).fonts[0];
  }
  getTypefaceByFamily(t) {
    let r = this.byFamily.get(t);
    if (r)
      return r;
    let n = {source: "custom", family: t, fonts: []};
    return n.fonts.push({selector: `${Rn}${t}`, variant: this.inferVariantName(t), typeface: n}), n;
  }
};
var Gb = jo(Ub()), $b = 5e3, yM = 3, Bp = class extends Error {
  constructor(t) {
    super(t);
    this.name = "FontLoadingError";
  }
}, Hp = new Map(), zp = new Map(), Wp = (e, t) => Xb(e, t);
async function Xb(e, t, r = 0) {
  let {family: n, url: o} = e, i = e.weight || 500, a = e.style || "normal", s = `${n}-${a}-${i}-${o}`;
  if (!Hp.has(s) || r > 0) {
    let l = new FontFace(n, `url(${o})`, {weight: i == null ? void 0 : i.toString(), style: a}), u = l.load().then(() => (t.fonts.add(l), Up(n, a, i))).catch((c) => {
      if (c.name !== "NetworkError")
        throw c;
      if (r < yM)
        return Xb(e, t, r + 1);
      throw new Bp(`Font loading failed after ${r} retries due to network error`);
    });
    Hp.set(s, u);
  }
  await Hp.get(s);
}
async function Up(e, t, r) {
  let n = `${e}-${t}-${r}`;
  if (!zp.has(n)) {
    let i = new Gb.default(e, {style: t, weight: r}).load(null, $b);
    zp.set(n, i);
  }
  try {
    await zp.get(n);
  } catch (o) {
    throw new Bp(`Failed to check if font is ready (${$b}ms timeout exceeded)`);
  }
}
var En;
(function(r) {
  r[r.AlreadyLoaded = 0] = "AlreadyLoaded", r[r.Loaded = 1] = "Loaded";
})(En || (En = {}));
var Yb = class {
  constructor() {
    this.bySelector = new Map();
    this.loadedSelectors = new Set();
    this.createGoogleFont = (t) => {
      let {source: r, family: n, variant: o, file: i} = t, a = this.getTypeface(t);
      a || (a = this[r].createTypeface(n));
      let s = Ll(o) || {}, {weight: l, style: u} = s, c = `GF;${n}-${o}`, f = {typeface: a, variant: o, selector: c, weight: l, style: u, file: i};
      return a.fonts.push(f), f;
    };
    this.local = new _p(), this.google = new Vp(), this.custom = new jp(), this.bySelector = new Map(), this.importLocalFonts(), this.defaultFont = this.getFontBySelector(Hb), this.defaultFont && this.loadFont(this.defaultFont);
  }
  addFont(t) {
    this.bySelector.set(t.selector, t);
  }
  getAvailableFonts() {
    return Array.from(this.bySelector.values());
  }
  importLocalFonts() {
    this.local.importFonts().forEach((t) => {
      this.addFont(t), this.local.interTypefaceSelectors.has(t.selector) || this.loadFont(t);
    });
  }
  async importGoogleFonts() {
    if (!this.getGoogleFontsListPromise) {
      this.getGoogleFontsListPromise = Be.fetchGoogleFontsList();
      let t = await this.getGoogleFontsListPromise;
      this.google.importFonts(t).forEach((r) => {
        let n = this.createGoogleFont(r);
        this.addFont(n);
      });
    }
    return this.getGoogleFontsListPromise;
  }
  importCustomFonts(t) {
    this.bySelector.forEach((r, n) => {
      n.startsWith(Rn) && this.bySelector.delete(n);
    }), this.custom.importFonts(t).forEach((r) => this.addFont(r));
  }
  getTypeface(t) {
    return this[t.source].getTypefaceByFamily(t.family);
  }
  getFontBySelector(t, r = true) {
    return t.startsWith(Rn) ? this.custom.getFontBySelector(t, r) : this.bySelector.get(t) || null;
  }
  getDraftPropertiesBySelector(t) {
    let r = this.getFontBySelector(t);
    if (r)
      return {style: r.style, weight: r.weight, variant: r.variant, family: r.typeface.family, source: r.typeface.source};
    let n = this.google.parseSelector(t);
    if (n) {
      let o = Ll(n.variant);
      if (o)
        return {style: o.style, weight: o.weight, variant: n.variant, family: n.family, source: kt.Google};
    }
    return null;
  }
  isSelectorLoaded(t) {
    return this.loadedSelectors.has(t);
  }
  async loadTypeface(t) {
    await Promise.all(t.fonts.map((r) => this.loadFont(r)));
  }
  async loadFont(t) {
    return this.isSelectorLoaded(t.selector) ? 0 : t.typeface.source === kt.Local ? (this.local.interTypefaceSelectors.has(t.selector) && await Up(t.typeface.family, t.style, t.weight), this.loadedSelectors.add(t.selector), 1) : t.file ? (await Wp({family: t.typeface.family, url: t.file, weight: t.weight, style: t.style}, document), this.loadedSelectors.add(t.selector), 1) : Promise.reject(`Unable to load font: ${t.selector}`);
  }
  async loadWebFontsFromSelectors(t) {
    t.some((n) => n.startsWith(Dl)) && await this.importGoogleFonts();
    let r = t.map((n) => this.bySelector.get(n)).filter((n) => !!n);
    return Promise.allSettled(r.map((n) => this.loadFont(n)));
  }
}, Gp = new Yb();
Promise.allSettled = Promise.allSettled || ((e) => Promise.all(e.map((t) => t.then((r) => ({status: "fulfilled", value: r})).catch((r) => ({status: "rejected", reason: r})))));
function Yi(e, t) {
  return e.length === t.length && e.every((r, n) => r === t[n]);
}
function $p(e) {
  var l;
  let t = Hr(), r = lt(e), n = useRef(null);
  xn(e, n);
  let {fonts: o, __fromCanvasComponent: i} = e, a = useRef([]), s = !Yi((l = a.current) != null ? l : [], o != null ? o : []);
  return a.current = o, useEffect(() => {
    !s || !o || Gp.loadWebFontsFromSelectors(o).then((u) => {
      !i || !n.current || O.current() !== O.canvas || !u.some((f) => f.status === "fulfilled" && f.value === En.Loaded) || Fv(n.current);
    });
  }, [o]), createElement(Ki, {...e, innerRef: n, layoutId: r, parentSize: t});
}
var Yp = class extends Pe {
  constructor() {
    super(...arguments);
    this.renderMain = (t) => {
      N.perf && N.perf.nodeRender();
      let {font: r, visible: n, alignment: o, willChangeTransform: i, opacity: a, id: s, layoutId: l, className: u, transition: c, variants: f, name: p, innerRef: d, __fromCanvasComponent: m, widthType: h, heightType: v, _usesDOMRect: y, autoSize: C, style: P} = this.props, b = this.frame;
      if (!n)
        return null;
      at();
      let R = this.props.isEditable && this.props.environment() === O.canvas, E = CM(this.props.verticalAlignment), I = {outline: "none", display: "flex", flexDirection: "column", justifyContent: E, opacity: R ? 0 : a, flexShrink: 0}, M = {"data-framer-component-type": "Text", "data-framer-name": p};
      C && (M["data-framer-component-text-autosized"] = "true"), this.collectLayout(I, t), xo(this.props, I), fl(this.props, I), (I.opacity === 1 || I.opacity === void 0) && delete I.opacity, i && Pi(I);
      let A = this.props.rawHTML, L = this.getOverrideText() || this.props.text;
      hn(L) && (A ? A = SM(A, L) : A = `<p style="font: ${r}">${L}</p>`), this.props.style && Object.assign(I, this.props.style);
      let U = y && (h === H.Auto || v === H.Auto), $ = !b || !O.hasRestrictions() || m || U;
      if ($ && Object.assign(M, yo(this.props.center)), A)
        return I.textAlign = o, I.lineHeight = "1px", I.fontSize = "0px", createElement(_e.div, {layoutId: l, id: s, ...M, style: {...I, ...P}, transformTemplate: $ ? Ur(this.props.center) : void 0, dangerouslySetInnerHTML: {__html: A}, "data-center": this.props.center, className: u, transition: c, variants: f, ref: d});
    };
  }
  get frame() {
    return gn(this.props, this.props.parentSize || Ae.Unknown, false);
  }
  getOverrideText() {
    let {_forwardedOverrideId: t, _forwardedOverrides: r, id: n} = this.props, o = t != null ? t : n;
    if (o && r) {
      let i = r[o];
      if (hn(i))
        return i;
    }
  }
  render() {
    return createElement(wt.Consumer, null, this.renderMain);
  }
  collectLayout(t, r) {
    if (this.props.withExternalLayout)
      return;
    let n = this.frame, {rotation: o, autoSize: i, positionSticky: a, positionStickyTop: s, positionStickyRight: l, positionStickyBottom: u, positionStickyLeft: c, width: f, height: p, _usesDOMRect: d} = this.props, m = q.getNumber(o);
    if (n && !(d && (f === "auto" || p === "auto")) && O.hasRestrictions())
      Object.assign(t, {transform: `translate(${n.x}px, ${n.y}px) rotate(${m.toFixed(4)}deg)`, width: i ? "auto" : `${n.width}px`, minWidth: `${n.width}px`, height: `${n.height}px`});
    else {
      let {left: v, right: y, top: C, bottom: P} = this.props, b, R;
      i ? (b = "auto", R = "auto") : ((!k(v) || !k(y)) && (b = f), (!k(C) || !k(P)) && (R = p)), Object.assign(t, {left: v, right: y, top: C, bottom: P, width: b, height: R, rotate: m});
    }
    a && (!(O.current() === O.canvas) || r) && (t.position = "sticky", t.willChange = "transform", t.zIndex = 1, t.top = s, t.right = l, t.bottom = u, t.left = c);
  }
}, Ki = Yp;
Ki.supportsConstraints = true, Ki.defaultTextProps = {opacity: void 0, left: void 0, right: void 0, top: void 0, bottom: void 0, _constraints: {enabled: true, aspectRatio: null}, rotation: 0, visible: true, alignment: void 0, verticalAlignment: "top", shadows: [], font: "16px " + Ws()}, Ki.defaultProps = {...Pe.defaultProps, ...Yp.defaultTextProps, isEditable: false, environment: O.current, withExternalLayout: false};
var xM = /(<span [^>]+>).*<\/span>/s;
function SM(e, t) {
  return e.replace(xM, (r, n) => n + t + "</span>");
}
function CM(e) {
  switch (e) {
    case "top":
      return "flex-start";
    case "center":
      return "center";
    case "bottom":
      return "flex-end";
  }
}
function qi(e) {
  if (e === void 0)
    return;
  let {x: t, y: r, rotation: n, width: o, height: i} = e, a;
  if ((t !== 0 || r !== 0) && (a = `translate(${Pt(t, 3)} ${Pt(r, 3)})`), n !== 0) {
    let s = Pt(n, 4), l = Pt(o / 2, 3), u = Pt(i / 2, 3), c = `rotate(${s} ${l} ${u})`;
    a = a ? `${a} ${c}` : c;
  }
  return a;
}
var Zi = class extends Component {
  render() {
    let {children: t, frame: r} = this.props, {width: n, height: o} = r, i = Math.floor(r.x), a = Math.floor(r.y), s = {position: "absolute", width: Math.ceil(n), height: Math.ceil(o), overflow: "visible", display: "block", transform: `translate(${i}px, ${a}px)`};
    return Pe.applyWillChange(this.props, s, false), createElement("svg", {width: "100%", height: "100%", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", style: s}, t);
  }
};
var Kp = class extends Component {
  render() {
    let {id: t, angle: r, stops: n} = this.props;
    return createElement("linearGradient", {id: t, gradientTransform: `rotate(${r}, 0.5, 0.5)`}, n.map((o, i) => createElement("stop", {key: i, offset: o.position, stopColor: o.color, stopOpacity: o.alpha})));
  }
}, qp = class extends Component {
  render() {
    let {centerAnchorX: t, centerAnchorY: r, id: n, widthFactor: o, heightFactor: i, stops: a} = this.props;
    return createElement("radialGradient", {id: n, cy: r, cx: t, r: o, gradientTransform: `translate(${t}, ${r}) scale(1 ${i / o}) translate(-${t}, -${r})`}, a.map((s, l) => createElement("stop", {key: l, offset: s.position, stopColor: s.color, stopOpacity: s.alpha})));
  }
};
function wM(e, t) {
  let {x: r, y: n} = e, {width: o, height: i, rotation: a} = e;
  return t === "resetXYKeepFraction" ? (r = r - Math.floor(r), n = n - Math.floor(n)) : t === "resetXY" && (r = 0, n = 0), {x: r, y: n, width: o, height: i, rotation: a};
}
function RM(e, t) {
  if (t !== void 0) {
    if (t)
      return "asIs";
  } else if (!e)
    return "asIs";
  return e ? "resetXYKeepFraction" : "resetXY";
}
function kl(e, t, r, n) {
  let o = RM(r, n), i = {...e, rotation: t};
  return wM(i, o);
}
var Vl = {stroke: "none", strokeWidth: 1, strokeLinecap: "butt", strokeLinejoin: "miter", strokeMiterlimit: 4, strokeDasharray: "0", strokeDashoffset: 0, strokeOpacity: 1, fill: "black", fillRule: "nonzero", fillOpacity: 1};
var Zp = class extends Pe {
  render() {
    var ie, we;
    N.perf && N.perf.nodeRender();
    let {opacity: t, calculatedPath: r, d: n, insideStroke: o, shapeId: i, strokeEnabled: a, strokeClipId: s, strokeWidth: l, idAttribute: u, rect: c, shadows: f, strokeAlpha: p, name: d, includeTransform: m, isRootVectorNode: h, rotation: v, id: y, lineCap: C, lineJoin: P, strokeColor: b, strokeMiterLimit: R, strokeDashArray: E, strokeDashOffset: I, fill: M, variants: A, transition: L} = this.props;
    if (!y || !i || !s)
      return null;
    let U = (we = (ie = this.props.rotate) != null ? ie : v) != null ? we : 0, {target: $} = he, G = kl(c, U, h, m), W, te = 0, Z, B, K;
    if (typeof M == "string" || z.isColorObject(M)) {
      let ve = z.isColorObject(M) ? M.initialValue || z.toRgbString(M) : M;
      ve !== "transparent" && (W = ve, te = st.getAlpha(W));
    } else
      qe.isLinearGradient(M) ? (B = Do(M, y), W = `url(#${B.id})`, te = 1) : Ze.isRadialGradient(M) ? (K = Lo(M, y), W = `url(#${K.id})`, te = 1) : rt.isImageObject(M) && (Z = Gi(M, G, y), Z && (W = `url(#${Z.id})`, te = 1));
    W === Vl.fill && (W = void 0), W === void 0 && (W = "transparent"), !(W !== void 0 && W !== "transparent" && te !== 0) && !a && (te = 1);
    let S, x = null, g = null, w = null, j, X, oe = $ === O.export;
    G.rotation === 0 && oe ? j = G : (j = {x: 0, y: 0}, X = qi(G));
    let ne = {d: n != null ? n : Dp(r, j, $), transform: X}, ee = {};
    a && l !== 0 && (ee.strokeWidth = l, ee.stroke = b, ee.strokeLinecap = C, ee.strokeLinejoin = P, P === "miter" && (ee.strokeMiterlimit = R), ee.strokeDasharray = E, I !== 0 && (ee.strokeDashoffset = I));
    for (let ve in Vl)
      ee[ve] === Vl[ve] && (ee[ve] = void 0);
    let xe = Yr.forKey(i), Fe = Yr.forKey(s), ge = uy(f, c, xe, te, p, l, Fe, ee), We = $ === O.preview && d || void 0;
    ge.insetElement !== null || ge.outsetElement !== null || o ? (ne.id = xe.id, g = createElement(_e.path, {...{...ne}, variants: A, transition: L}), o && (x = createElement("clipPath", {id: Fe.id}, createElement("use", {xlinkHref: xe.link}))), ge.insetElement !== null && a && l && l > 0 ? (S = createElement("use", {xlinkHref: xe.link, fill: W, strokeOpacity: "0", name: We}), w = createElement("use", {xlinkHref: xe.link, clipPath: Fe.urlLink, fill: "transparent", ...ee, strokeWidth: l})) : S = createElement("use", {xlinkHref: xe.link, fill: W, clipPath: Fe.urlLink, ...ee, strokeWidth: l, name: We})) : (ne.id = u, S = createElement(_e.path, {...{...ne, fill: W, ...ee}, name: We, variants: A, transition: L}));
    let Ue = Z ? createElement($i, {...Z}) : void 0, Y;
    B ? Y = createElement(Kp, {...B}) : K && (Y = createElement(qp, {...K}));
    let D = null;
    (g || x || ge.definition && ge.definition.length || Y || Ue) && (D = createElement("defs", null, g, x, ge.definition, Y, Ue));
    let _ = t != null ? t : A ? 1 : void 0;
    return D === null && ge.outsetElement === null && ge.insetElement === null && w === null ? (S = createElement(_e.path, {...{...ne, fill: W, ...ee}, opacity: _, variants: A, transition: L, name: We}), this.renderElement(S)) : this.renderElement(createElement(_e.g, {opacity: _, variants: A, transition: L}, D, ge.outsetElement, S, ge.insetElement, w));
  }
  renderElement(t) {
    var l, u;
    let {isRootVectorNode: r, width: n, height: o, rect: i, willChangeTransform: a} = this.props, s = (u = (l = this.props.frame) != null ? l : i) != null ? u : {x: 0, y: 0, width: 100, height: 100};
    return r ? createElement(Zi, {...{frame: s, width: n, height: o, willChangeTransform: a}}, t) : t;
  }
}, Oo = Zp;
Oo.defaultVectorProps = {isRootVectorNode: false, name: null, includeTransform: void 0, defaultFillColor: void 0, defaultStrokeColor: void 0, defaultStrokeWidth: void 0, defaultStrokeAlignment: "center", width: 100, height: 100, rotation: 0, rotate: void 0, frame: void 0, opacity: void 0, calculatedPath: [], d: void 0, shapeId: void 0, insideStroke: false, strokeEnabled: true, strokeClipId: void 0, strokeWidth: void 0, idAttribute: void 0, transition: void 0, shadows: [], strokeAlpha: 1, rect: {x: 0, y: 0, width: 0, height: 0}, lineCap: "butt", strokeColor: "#0AF", lineJoin: "miter", strokeMiterLimit: 4, strokeDashArray: "0", strokeDashOffset: 0, fill: "rgba(0,170,255,0.5)"}, Oo.defaultProps = {...Pe.defaultProps, ...Zp.defaultVectorProps};
var Jp = class extends Pe {
  render() {
    N.perf && N.perf.nodeRender();
    let {id: t, name: r, opacity: n, visible: o, targetName: i, defaultName: a, children: s, includeTransform: l, x: u, y: c, width: f, height: p, rotation: d, isRootVectorNode: m} = this.props;
    if (!o)
      return null;
    let {target: h} = he, y = kl({x: u, y: c, width: f, height: p}, d, m, l), C = h === O.preview, P;
    return C && (i ? P = i : r ? P = r : P = a), this.renderElement(createElement("g", {transform: qi(y), ...{id: t, name: P, opacity: n}}, s));
  }
  renderElement(t) {
    let {isRootVectorNode: r, width: n, height: o, frame: i, willChangeTransform: a} = this.props;
    return r ? createElement(Zi, {...{frame: i, width: n, height: o, willChangeTransform: a}}, t) : t;
  }
}, ko = Jp;
ko.defaultVectorGroupProps = {name: void 0, opacity: void 0, visible: true, x: 0, y: 0, rotation: 0, width: 100, height: 100, targetName: void 0, defaultName: "", isRootVectorNode: false, includeTransform: void 0, frame: {x: 0, y: 0, width: 100, height: 100}}, ko.defaultProps = {...Pe.defaultProps, ...Jp.defaultVectorGroupProps};
var Qp = class extends Pe {
  constructor() {
    super(...arguments);
    this.state = {};
  }
  componentDidCatch(t, r) {
    let n = r.componentStack.split(`
`).filter((i) => i.length !== 0), o = 0;
    for (let i of n) {
      if (i.startsWith(`    in ${this.constructor.name}`))
        break;
      o++;
    }
    n = n.slice(0, o), this.setState({lastError: {children: this.props.children, name: t.name, message: t.message, componentStack: n}});
  }
  renderErrorPlaceholder(t, r) {
    let {RenderPlaceholder: n} = Be;
    return createElement(be, {...this.props, background: null}, createElement(n, {error: {error: r, file: t}}));
  }
  render() {
    var s, l;
    N.perf && N.perf.nodeRender();
    let {children: t} = this.props, {componentIdentifier: r, innerRef: n} = this.props, {lastError: o} = this.state;
    if (!t || Array.isArray(t) && t.filter((u) => u).length === 0) {
      let u = Be.componentLoader.errorForIdentifier(r);
      if (u)
        return this.renderErrorPlaceholder(u.file, u.error);
    }
    if (o && o.children === t) {
      let u = Be.componentLoader.componentForIdentifier(r), c = u ? u.file : "???";
      return this.renderErrorPlaceholder(c, o.message);
    }
    (l = (s = N).__checkComponentBudget__) == null || l.call(s);
    let a = this.props;
    if (O.current() !== O.canvas) {
      let {left: u, right: c, top: f, bottom: p, center: d, centerX: m, centerY: h, aspectRatio: v, parentSize: y, width: C, height: P, rotation: b, opacity: R, visible: E, _constraints: I, _initialStyle: M, name: A, positionSticky: L, positionStickyTop: U, positionStickyRight: $, positionStickyBottom: G, positionStickyLeft: W, componentIdentifier: te, children: Z, style: B, duplicatedFrom: K, widthType: V, heightType: S, ...x} = a;
      t = Children.map(Z, (g) => {
        var w;
        return !At(g) || !It(g) ? g : EM(te) ? cloneElement(g, x) : createElement(Yt.Provider, {value: (w = this.props.__layoutId) != null ? w : null}, createElement(Gu, null, createElement(Ti, {enabled: false}, cloneElement(g, x))));
      }), a = {style: B, _constraints: I, _initialStyle: M, left: u, right: c, top: f, bottom: p, center: d, centerX: m, centerY: h, aspectRatio: v, parentSize: y, width: C, height: P, rotation: b, visible: E, name: A, duplicatedFrom: K, id: a.id, layoutId: this.props.__layoutId, widthType: V, heightType: S, positionSticky: L, positionStickyTop: U, positionStickyRight: $, positionStickyBottom: G, positionStickyLeft: W};
    }
    return createElement(wt.Provider, {value: true}, createElement(be, {"data-framer-component-container": true, background: null, overflow: "visible", ref: n, ...a}, t));
  }
}, Kr = Qp;
Kr.supportsConstraints = true, Kr.defaultComponentContainerProps = {style: {}, visible: true, componentIdentifier: ""}, Kr.defaultProps = {...Pe.defaultProps, ...Qp.defaultComponentContainerProps}, Kr.contextType = wt;
function EM(e) {
  return e ? e === "framer/Page" || e === "framer/Scroll" : false;
}
function _l(e, t, r, n, o = false) {
  let i = n && n(e);
  if (i)
    return i;
  let a;
  return MM(e) ? a = IM(r, e, t, n, o) : e.children && (a = e.children.map((s) => _l(s, t, r, n, o))), t(e, a);
}
function MM(e) {
  return !!e.codeComponentIdentifier;
}
function IM(e, t, r, n, o = false) {
  let i = t.getComponentChildren ? t.getComponentChildren(e) : [], a = t.getComponentSlotChildren ? t.getComponentSlotChildren(e) : {}, s, l = t.getCodeComponentProps ? t.getCodeComponentProps(e, {skipCache: o}) : void 0;
  if (t.cache.codeComponentPresentation)
    s = t.cache.codeComponentPresentation, Yi(s.children, i) || (s.cache.reactElement = null, s.children = i), Si(s.props, l) || (s.cache.reactElement = null, s.cache.props = null, s.props = l);
  else {
    let {id: c, codeComponentIdentifier: f, codeComponentPackageVersion: p} = t;
    t.cache.codeComponentPresentation = s = new Qb(c + f, f, p, l, i);
  }
  s.props.placeholders = t.cache.placeholders;
  let u = Object.keys(a);
  if (u.length) {
    s.props = {...s.props}, s.props.__slotKeys = u;
    for (let c of u) {
      let f = a[c].map((p) => _l(p, r, e, n, o));
      s.props[c] = f;
    }
  }
  return [r(s, s.children.map((c) => _l(c, r, e, n, o)))];
}
var Qb = class {
  constructor(t, r, n, o, i, a) {
    this.id = t;
    this.componentIdentifier = r;
    this.packageVersion = n;
    this.props = o;
    this.children = i;
    this.codeOverrideIdentifier = a;
    this.cache = {};
  }
  getProps() {
    return {...this.props, id: this.id, key: this.id};
  }
  rect(t) {
    return {x: 0, y: 0, width: 0, height: 0};
  }
};
function ef() {
  return useContext(Ro);
}
function DM(e) {
  let t;
  if (typeof e.webkitTextFillColor == "string" && (t = e.webkitTextFillColor), typeof e.WebkitTextFillColor == "string" && (t = e.WebkitTextFillColor), typeof e.color == "string" && (t = e.color), t)
    return st.toRgbString(t);
}
function Er(e = {}) {
  let t = He(e, false, false);
  return Er.addData(t), t;
}
(function(o) {
  o._stores = [];
  function t(i) {
    o._stores.push(i);
  }
  o.addData = t;
  function r() {
    o._stores.forEach((i) => He.resetObject(i));
  }
  o.reset = r;
  function n(i, a) {
    return He.addObserver(i, a);
  }
  o.addObserver = n;
})(Er || (Er = {}));
var ex = {update: 0}, Ji = createContext(ex);
function LM() {
  useContext(Ji);
}
var tx = class extends Component {
  constructor() {
    super(...arguments);
    this.observers = [];
    this.state = ex;
    this.taskAdded = false;
    this.frameTask = () => {
      this.setState({update: this.state.update + 1}), this.taskAdded = false;
    };
    this.observer = () => {
      this.taskAdded || (this.taskAdded = true, Rt.addFrameTask(this.frameTask));
    };
  }
  componentWillUnmount() {
    this.observers.map((t) => t()), Er.reset();
  }
  render() {
    let {children: t} = this.props;
    return this.observers.map((r) => r()), this.observers = [], Er._stores.forEach((r) => {
      let n = Er.addObserver(r, this.observer);
      this.observers.push(n);
    }), createElement(Ji.Provider, {value: {...this.state}}, t);
  }
};
function rx(e) {
  return typeof e == "string" || De(e) ? e : qe.isLinearGradient(e) ? qe.toCSS(e) : Ze.isRadialGradient(e) ? Ze.toCSS(e) : z.isColorObject(e) ? z.toRgbString(e) : e;
}
function tf(e) {
  if (e.background || e.color) {
    let t = Object.assign({}, e);
    return e.background && (t.background = rx(e.background)), e.color && (t.color = rx(e.color)), t;
  }
  return e;
}
var NM = Oi();
function rf(e, t) {
  let r = typeof t == "function" ? (o) => t(tf(o)) : () => tf(t), n = function(o) {
    useContext(Ji);
    let i = r(o), {style: a, ...s} = o;
    return createElement(e, {...s, ...i, _initialStyle: a});
  };
  return NM(n, e), n.displayName = `WithOverride(${e.displayName || e.name})`, n;
}
var Mn = class {
  constructor() {
    this.canvas = {children: []};
    this.listeners = [];
    this.ids = [];
  }
  static shared(t) {
    if (t) {
      let r = new Mn();
      return r.setCanvas(t), r;
    }
    return Mn.__shared || (Mn.__shared = new Mn()), Mn.__shared;
  }
  updateNode(t) {
    let r = t.props.id, n = this.canvas.children;
    n || (this.canvas.children = n = []);
    let o = false;
    for (let i = 0; i < n.length; i++)
      if (n[i].props.id === r) {
        o = true, n[i] = t;
        break;
      }
    o || n.push(t), this.setCanvas(this.canvas);
  }
  setCanvas(t) {
    !t.children || (this.canvas = t, this.listeners.forEach((r, n) => {
      let o = this.ids[n], i = of(t, o);
      r.setState({data: i});
    }));
  }
  registerListener(t, r) {
    return this.listeners.push(t), this.ids.push(r), of(this.canvas, r);
  }
  removeListener(t) {
    let r = this.listeners.indexOf(t);
    r !== -1 && (this.listeners.splice(r, 1), this.ids.splice(r, 1));
  }
}, nf = Mn;
nf.__shared = null;
var HM = {Frame: hl, Vector: Oo, Stack: Fo, VectorGroup: ko, SVG: Lp, Text: $p, DeprecatedComponentContainer: Kr}, nx = class extends Component {
  _typeForName(t) {
    let r = HM[t];
    if (r)
      return r;
    let n = Be.componentLoader.componentForIdentifier(t);
    return n && Ap(n) ? n.class : hl;
  }
  _renderData(t, r, n) {
    N.__checkBudget__();
    let {componentClass: o, name: i} = t, {props: a, children: s} = t;
    a = {...a, _constraints: {enabled: false}};
    let l = this._typeForName(o);
    if (!l)
      return null;
    if (n) {
      let {style: c, ...f} = a;
      a = {...f, ...n, _initialStyle: c};
    }
    if (!a.size && a._sizeOfMasterOnCanvas && (a.width || (a.width = a._sizeOfMasterOnCanvas.width), a.height || (a.height = a._sizeOfMasterOnCanvas.height)), i && r.hasOwnProperty(i))
      if (o === "Text")
        r[i] && (a = {...a, text: r[i]});
      else {
        let c = a.background, f = {src: r[i], fit: c.fit};
        a = {...a, background: f};
      }
    let u = s && s.map((c) => this._renderData(c, r, void 0));
    return s = s ? u : [], createElement(l, a, s);
  }
  render() {
    if (N.__checkBudget__(), !this.state.data)
      throw new Error("Unable to connect to canvas data store.");
    return this._renderData(this.state.data, this.props, this.props);
  }
};
function ox(e, t) {
  let {name: r, props: n} = t;
  return n && n.id === e || r === e;
}
function of(e, t) {
  if (!e)
    return null;
  if (ox(t, e))
    return e;
  let {children: r} = e;
  if (!r || !Fs(r))
    return null;
  for (let n of r)
    if (ox(t, n))
      return n;
  for (let n of r) {
    let o = of(n, t);
    if (o)
      return o;
  }
  return null;
}
function zM(e, t, r, n = 200, o = 200) {
  var i;
  return i = class extends nx {
    static rect(a) {
      let s = mt.fromProperties(a);
      return mt.toRect(s, a.parentSize || null, null);
    }
    static minSize(a, s) {
      let l = mt.fromProperties(a);
      return mt.toMinSize(l, s || null);
    }
    static size(a, s, l) {
      let u = mt.fromProperties(a);
      return mt.toSize(u, s || null, null, l);
    }
    constructor(a, s) {
      super(a, s);
      let l = e.registerListener(this, t);
      this.state = {data: l};
    }
    render() {
      let a = (s) => {
        let l = vn(t);
        if (!this.state.data && s) {
          N.__checkBudget__();
          let u = s(l);
          if (u && isValidElement(u) && typeof u.type != "string")
            return createElement(rf(u.type, this.props), u.props);
        }
        return super.render();
      };
      return createElement(ix.Consumer, null, a);
    }
    componentWillUnmount() {
      e.removeListener(this);
    }
  }, i.displayName = `DesignComponent(${t})`, i.propertyControls = r, i.supportsConstraints = true, i.defaultProps = {_sizeOfMasterOnCanvas: {width: n, height: o}}, i;
}
var ix = createContext(null), WM = ix.Provider;
var sf = (e) => forwardRef((t, r) => {
  let n = lt(t);
  return createElement(e, {layoutId: n, ...t, layoutIdKey: void 0, duplicatedFrom: void 0, ref: r});
});
function KM(e, t, r) {
  let n = {};
  for (let o in r)
    n[o] = (i) => t(r[o](e(), i));
  return n;
}
function ax(e, t) {
  let r = e, n = 0, o = new Set(), i = (u) => u(n), a = () => r, s = (u) => {
    n++, r = u, o.forEach(i);
  }, l = t ? KM(a, s, t) : s;
  return {get: a, set: s, getVersion: () => n, getActions: () => l, subscribe: (u) => (o.add(u), () => o.delete(u))};
}
var eI = Symbol("default"), lx = createContext(eI);
function tI(e, t) {
  let r = new Map();
  return (o, i) => {
    let a = useContext(lx);
    o = o || a;
    let s = useMemo(() => (r.has(o) || r.set(o, ax(i || e, t)), r.get(o)), [o]), [, l] = useState(s.getVersion()), u = useMemo(() => s.get(), [s]);
    return useEffect(() => {
      let c = s.subscribe(l);
      return u !== s.get() && l(s.getVersion()), c;
    }, [s, u]), [s.get(), s.getActions()];
  };
}
function rI(e, t, r) {
  Be.addActionControls(e, t, r);
}
function jl(e = {}, t = false) {
  return dn("PropertyStore", "1.0.0", "Data() or ObservableObject()"), He(e, t);
}
(function(t) {
  function e(r, n) {
    return He.addObserver(r, n);
  }
  t.addObserver = e;
})(jl || (jl = {}));
function nI(e) {
  return fetch(e, {mode: "cors"}).then((t) => t.json());
}
function ux(e) {
  let t;
  if ((e.constructor !== null ? e.constructor.name : void 0) !== null && (e.constructor !== null ? e.constructor.name : void 0) !== "Object")
    return e.constructor.name;
  let r = function(n) {
    if (!n)
      return null;
    let i = /\[object (\w+)\]/.exec(n);
    return i ? i[1] : null;
  };
  return e.toString && (t = r(e.toString()), t) ? t : (e.constructor !== null ? e.constructor.toString : void 0) && (t = r(e.constructor !== null ? e.constructor.toString() : void 0), t) ? t.replace("Constructor", "") : "Object";
}
function Nl(e, t, r) {
  if (t === void 0 && (t = 5), r === void 0 && (r = 0), e === null)
    return "null";
  if (e === void 0)
    return "undefined";
  if (hi(e.toInspect))
    return e.toInspect();
  if (hn(e))
    return `"${e}"`;
  if (fg(e))
    return `${e}`;
  if (hi(e)) {
    let n = e.toString().slice("function ".length).replace(/\n/g, "").replace(/\s+/g, " "), o = 50;
    return n.length > o && r > 0 && (n = `${n.slice(0, +o + 1).trim()}\u2026 }`), `<Function ${n}>`;
  }
  if (Fs(e))
    return r > t ? "[...]" : `[${e.map((n) => Nl(n, t, (r || 0) + 1)).join(", ")}]`;
  if (Ms(e)) {
    let n, o = ux(e);
    return /HTML\w+?Element/.test(o) ? `<${o}>` : (r > t ? n = "{...}" : n = `{${Object.keys(e).map((a) => `${a}:${Nl(e[a], t, (r || 0) + 1)}`).join(", ")}}`, o === "Object" ? n : `<${o} ${n}>`);
  }
  return `${e}`;
}
function oI(...e) {
  let t = e.map((r) => Nl(r)).join(", ");
  console.log(t);
}
function iI(e, t) {
  Object.assign(e, {fonts: t});
}
function aI(e) {
  return e.fonts || [];
}
var sI = "1.3.6";
var Qi = (e) => ({process: (t, {delta: r, treeScale: n}) => {
  if (typeof t == "string" && (t = parseFloat(t)), t === 0)
    return "0px";
  let o = Math.round(t / r[e].scale / n[e]);
  return o = Math.max(o, 1), o + "px";
}});
Wo({borderTopWidth: Qi("y"), borderLeftWidth: Qi("x"), borderRightWidth: Qi("x"), borderBottomWidth: Qi("y")});
function lI({children: e}) {
  return createElement(Fragment, null, e);
}
function pI(e, t, r, n = {}) {
  return Ut('"startAnimation" is unsupported. Use "animate" instead: https://www.framer.com/api/motion/utilities/#animate'), new Promise((o) => {
    Qt(t, r, {...n, onComplete: () => o()});
  });
}
function lf(e, t, r) {
  return useCallback((n) => {
    var o, i, a;
    return r ? e ? t ? Object.assign({}, (o = r[e]) == null ? void 0 : o[n], (i = r[t]) == null ? void 0 : i[n]) : ((a = r[e]) == null ? void 0 : a[n]) || {} : {} : {};
  }, [e, t, r]);
}
function mI(e, t) {
  return `${e}-${t}`;
}
function dI(e, t) {
  let n = e.indexOf(t) + 1;
  return n >= e.length && (n = 0), e[n];
}
var Bl;
(function(t) {
  t.Variant = "v";
})(Bl || (Bl = {}));
function cx(e, t, r) {
  let {hover: n, pressed: o} = e || {};
  if (o && r)
    return "pressed";
  if (n && t)
    return "hover";
}
function hI(e, t) {
  let r = t[e];
  return r || `framer-${Bl.Variant}-${e}`;
}
var px = Symbol("cycle");
function gI({variant: e, defaultVariant: t, transitions: r, enabledGestures: n, cycleOrder: o = [], variantProps: i = {}, variantClassNames: a = {}}) {
  let s = Ks(), l = useRef({isHovered: false, isPressed: false, baseVariant: e != null ? e : t, gestureVariant: void 0, defaultVariant: t, enabledGestures: n, cycleOrder: o, transitions: r}), u = useCallback((R = l.current.defaultVariant) => {
    let {baseVariant: E, gestureVariant: I, isPressed: M, isHovered: A, defaultVariant: L, enabledGestures: U} = l.current, $ = cx(U == null ? void 0 : U[R], A, M), G = $ ? mI(R, $) : void 0;
    (R !== E || G !== I) && (l.current.baseVariant = R || L, l.current.gestureVariant = G, s());
  }, [s]), c = useCallback(({isHovered: R, isPressed: E}) => {
    R !== void 0 && (l.current.isHovered = R), E !== void 0 && (l.current.isPressed = E), u(l.current.baseVariant);
  }, [u]), f = useCallback((R) => {
    let {defaultVariant: E, cycleOrder: I, baseVariant: M} = l.current, A = R === px ? dI(I || [], M || E) : R;
    u(A || E);
  }, [u]);
  useLayoutEffect(() => {
    e !== l.current.baseVariant && f(e);
  }, [e, f]);
  let {baseVariant: p} = l.current, d = useMemo(() => {
    let {transitions: R} = l.current;
    if (!!R) {
      if (p) {
        let E = R[p];
        if (E)
          return E;
      }
      return R.default;
    }
  }, [p]), m = [], {gestureVariant: h, defaultVariant: v, enabledGestures: y, isHovered: C, isPressed: P} = l.current;
  p && p !== v && m.push(p), h && m.push(h);
  let b = lf(p, h, i);
  return {variants: m, baseVariant: p, gestureVariant: h, transition: d, setVariant: f, setGestureState: c, addVariantProps: b, classNames: Hi(hI(p, a), cx(y == null ? void 0 : y[p], C, P))};
}
var xI = (e, t) => forwardRef((r, n) => (useLayoutEffect(() => {
  (Array.isArray(t) ? t : t.split(`
`)).forEach((i) => i && Ls(i));
}, []), createElement(e, {...r, ref: n})));
function TI({children: e, layoutId: t, ...r}) {
  let n = Ot(Jt), o = Ot(() => t ? `${t}-container` : void 0);
  return createElement(_e.div, {layoutId: o, ...r}, createElement(wt.Provider, {value: true}, createElement(Wt.Provider, {value: n}, createElement(Ti, {enabled: false}, createElement(Yt.Provider, {value: t != null ? t : null}, Children.map(e, (i) => isValidElement(i) ? cloneElement(i, {layoutId: t}) : i))))));
}
var wI = sf(TI);
var MI = (...e) => e.forEach((t) => t && t());
function cf() {
  return O.current() === O.canvas;
}
function fx(e, t) {
  if (e[t])
    return e[t];
  if (!(t in e))
    return e.default;
}
function mx(e, t) {
  if (cf())
    return;
  let n = useRef(true);
  nr((o) => {
    if (!n.current && o) {
      let i = fx(t, e);
      i && i();
    }
    n.current = o;
  }, [t]), useEffect(() => {
    if (n.current) {
      let o = fx(t, e);
      o && o();
    }
  }, [e, t]);
}
function II(e) {
  mx("default", {default: e});
}
function pf(e, t) {
  e.forEach((r) => clearTimeout(r)), e.clear(), t.forEach((r) => r && r("Callback cancelled by variant change")), t.clear();
}
function dx() {
  return new Set();
}
function hx(e) {
  let t = Ot(dx), r = Ot(dx);
  return nr(() => () => pf(r, t)), useEffect(() => () => pf(r, t), [t, r]), useEffect(() => {
    pf(r, t);
  }, [e, t, r]), useRef({activeVariantCallback: (n) => (...o) => new Promise((i, a) => (t.add(a), n(...o).then(i))).catch(() => {
  }), delay: async (n, o) => {
    await new Promise((i) => r.add(globalThis.setTimeout(() => i(true), o))), n();
  }}).current;
}
function LI() {
  let e = hx(void 0);
  return useRef({activeTargetCallback: e.activeVariantCallback, delay: e.delay}).current;
}
function OI(e) {
  let t = lazy(e), r, n, o = forwardRef(function(a, s) {
    return createElement(n != null ? n : t, Object.assign(s ? {ref: s} : {}, a));
  });
  return o.preload = () => (r || (r = e().then((i) => {
    n = i.default;
  })), r), o;
}
function kI({preload: e} = {}) {
  let t = ef();
  return useEffect(() => {
    !t || e == null || e.forEach((r) => "preload" in r && r.preload());
  }, []), t ? async (r, n = {}) => {
    if (r === "previous")
      return t.goBack(), false;
    let {appearsFrom: o, backdropColor: i, animation: a} = n;
    if (!!r) {
      switch (n.transition) {
        case "instant":
          t.instant(r);
          break;
        case "fade":
          t.fade(r, {animation: a});
          break;
        case "push":
          t.push(r, {appearsFrom: o, animation: a});
          break;
        case "modal":
          t.modal(r, {backdropColor: i, animation: a});
          break;
        case "overlay":
          t.overlay(r, {appearsFrom: o, backdropColor: i, animation: a});
          break;
        case "flip":
          t.flip(r, {appearsFrom: o, animation: a});
          break;
        case "magicMotion":
          t.magicMotion(r, {animation: a});
          break;
      }
      return false;
    }
  } : () => {
  };
}
var HI = ({id: e, children: t}) => {
  let r = useContext(Yt);
  if (!e)
    return createElement(Fragment, null, t);
  let n = r && r !== e ? `${r}-${e}` : e;
  return createElement(Yt.Provider, {value: n}, t);
};
var WI = {altKey: false, ctrlKey: false, metaKey: false, shiftKey: false};
function UI(e) {
  let t = e.split("+"), r = t.pop();
  if (!r)
    return;
  let n = {};
  for (let o of t)
    n[`${o}Key`] = true;
  return {...WI, ...n, key: r};
}
function GI(e, t) {
  let r = useRef(true), n = Ot(() => UI(e));
  nr((i, a) => (r.current = i && !a, () => r.current = false));
  let o = useCallback((i) => {
    !n || !r.current || !Object.keys(n).every((a) => n[a] === i[a]) || (i.preventDefault(), t());
  }, [n, t]);
  useEffect(() => (document.addEventListener("keydown", o), () => document.removeEventListener("keydown", o)), [o]);
}
function KI(e) {
  return Ms(e) && e.mapping !== void 0;
}
function qI() {
  let e = new Set(), t = false, r = null, n = null, o = () => {
    let c = xx();
    if (!c)
      return;
    let {gamepad: f, key: p} = c, {mapping: d, id: m} = f;
    p && n !== p && e.forEach((h) => h({key: p, mapping: d, id: m})), n = p, r = window.requestAnimationFrame(o);
  }, i = () => {
    t || r || (o(), t = true);
  }, a = () => {
    !r || (window.cancelAnimationFrame(r), r = null);
  }, s = () => {
    !t || (a(), t = false);
  }, l = () => {
    if (r)
      return;
    if (!xx()) {
      window.addEventListener("gamepadconnected", i);
      return;
    }
    window.addEventListener("gamepaddisconnected", s), t = true, o();
  }, u = () => {
    !r || (window.removeEventListener("gamepadconnected", i), window.removeEventListener("gamepaddisconnected", s), a());
  };
  return {register(c) {
    e.size === 0 && l(), e.add(c);
  }, unregister(c) {
    e.delete(c), e.size === 0 && u();
  }};
}
var bx = createContext(qI());
function xx() {
  let e = null, t = navigator.getGamepads();
  for (let r of t) {
    if (!r)
      continue;
    e || (e = r);
    let n = ZI(r);
    if (n !== null)
      return {gamepad: r, key: n};
    let o = JI(r);
    if (o !== null)
      return {gamepad: r, key: o};
  }
  return e ? {gamepad: e, key: null} : null;
}
function ZI(e) {
  for (let [t, r] of e.axes.entries()) {
    if (t > 3)
      return null;
    if (r <= -0.5)
      return `Axis ${t}-`;
    if (r > 0.5)
      return `Axis ${t}+`;
  }
  return null;
}
function JI(e) {
  for (let [t, r] of e.buttons.entries())
    if (QI(r))
      return `Button ${t}`;
  return null;
}
function QI(e) {
  return e.pressed === true || e.value > 0;
}
function eA(e, t, r = {mapping: "standard"}) {
  let n = useContext(bx), o = Ot(() => r.mapping), i = useCallback((a) => {
    e === a.key && o === a.mapping && t();
  }, [e, o, t]);
  nr((a, s) => (a && !s ? n.register(i) : n.unregister(i), () => n.unregister(i)), []), useEffect(() => () => n.unregister(i), [i, n]);
}
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
export {q as Animatable, hs as AnimatePresence, Gu as AnimateSharedLayout, Uv as AnyInterpolation, Ti as AutomaticLayoutIds, rt as BackgroundImage, Tn as BezierAnimator, bo as BoxShadow, nf as CanvasStore, z as Color, Ce as ColorFormat, nt as ColorMixModelType, wt as ComponentContainerContext, so as ConstraintMask, mt as ConstraintValues, wI as Container, ce as ControlType, st as ConvertColor, iy as CustomProperties, _i as CustomPropertiesContext, px as CycleVariantState, $F as DOM, Er as Data, lx as DataContext, tx as DataObserver, Ji as DataObserverContext, Kr as DeprecatedComponentContainer, dl as DeprecatedFrameWithEvents, H as DimensionType, Yh as DragControls, zi as Draggable, wr as EmptyState, Wu as FlatTree, hl as Frame, be as FrameWithMotion, wn as FramerAnimation, ct as FramerEvent, gp as FramerEventListener, Sl as FramerEventSession, ui as FramerTreeLayoutContext, bx as GamepadContext, sM as Image, Yr as InternalID, Pe as Layer, HI as LayoutGroup, Yt as LayoutGroupContext, Cr as LayoutIdContext, rP as LazyMotion, Al as Line, qe as LinearGradient, Rt as MainLoop, Z0 as MotionConfig, it as MotionConfigContext, lI as MotionSetup, un as MotionValue, wp as NavigateTo, Wi as Navigation, WE as NavigationCallbackProvider, zE as NavigationConsumer, $t as NavigationTransitionType, He as ObservableObject, Ao as Page, Ae as ParentSizeState, ir as PathSegment, Re as Point, vt as PresenceContext, jl as PropertyStore, As as ProvideParentSize, Ze as RadialGradient, ke as Rect, WM as RenderNodeProvider, O as RenderTarget, Lp as SVG, bl as Scroll, tp as Shadow, Wt as SharedLayoutContext, Il as Size, Sn as SpringAnimator, Fo as Stack, $p as Text, kt as TypefaceSourceNames, Gr as ValueInterpolation, Bl as VariantSelector, Oo as Vector, ko as VectorGroup, ai as VisibilityAction, MF as WithNavigator, rf as WithOverride, DM as _getCSSTextColorFromStyle, tw as _injectRuntime, rI as addActionControls, iI as addFonts, mn as addPropertyControls, Wo as addScaleCorrection, Fl as animate, cn as animateVisualElement, Ku as animationControls, tM as annotateTypeOnStringify, gi as backgroundImageFromProps, gn as calculateRect, MI as callEach, np as collectVisualStyleFromProps, er as constraintsEnabled, _l as convertPresentationTree, Jt as createBatcher, no as createCrossfader, tI as createData, zM as createDesignComponent, F0 as createDomMotionComponent, zo as createMotionComponent, hy as cssBackgroundSize, Hi as cx, Bi as debounce, GF as dispatchKeyDownEvent, Xu as domAnimation, oP as domMax, Ug as environment, sT as executeInRenderEnvironment, XP as finiteNumber, Gp as fontStore, Pi as forceLayerBackingWithCSSProperties, Mo as fraction, Fp as frameFromElement, Ab as frameFromElements, Mb as getConfigFromPreviewURL, Mb as getConfigFromURL, _F as getConfigFromVekterURL, aI as getFonts, zc as getMeasurableCodeComponentChildren, ZP as getMergedConstraintsProps, OP as getPropertyControls, KF as gradientForShape, Gi as imagePatternPropsForFill, Ip as imageUrlForAsset, ae as isAnimatable, JF as isDesignDefinition, Si as isEqual, k as isFiniteNumber, Rl as isFractionDimension, KI as isFramerGamepadKeydownData, xp as isGapEnabled, De as isMotionValue, rM as isOfAnnotatedType, QF as isOverride, Ap as isReactDefinition, Yi as isShallowEqualArray, Ml as isStraightCurve, kr as isValidMotionProp, OI as lazy, Wp as loadFont, nI as loadJSON, eM as localPackageFallbackIdentifier, rp as localShadowFrame, M0 as m, Ui as makePaddingString, Mc as memoize, _e as motion, Ie as motionValue, Eo as paddingFromProps, Ll as parseVariant, iM as pathDefaults, oI as print, Qe as resolveMotionValue, Is as roundWithOffset, ao as roundedNumber, Pt as roundedNumberString, BF as serverURL, lT as setGlobalRenderEnvironment, Br as snapshotViewportBox, pI as startAnimation, zb as systemTypefaceName, qF as throttle, Sp as toFlexDirection, Io as toJustifyOrAlignment, Dp as toSVGPath, Yu as transform, qi as transformString, Ur as transformTemplate, LI as useActiveTargetCallback, hx as useActiveVariantCallback, lf as useAddVariantProps, qh as useAnimatedState, qu as useAnimation, FP as useCycle, qh as useDeprecatedAnimatedState, Qh as useDeprecatedInvertedScale, Vr as useDomEvent, Zu as useDragControls, yP as useElementScroll, eA as useGamepad, GI as useHotkey, Qh as useInvertedScale, Co as useIsInCurrentNavigationTarget, cf as useIsOnFramerCanvas, Hx as useIsPresent, xn as useMeasureLayout, lP as useMotionTemplate, et as useMotionValue, kI as useNavigate, ef as useNavigation, LM as useObserveData, II as useOnAppear, nr as useOnCurrentTargetChange, mx as useOnVariantChange, Bo as usePresence, TP as useReducedMotion, uT as useRenderEnvironment, dP as useSpring, ys as useTransform, gI as useVariantState, gP as useVelocity, SP as useViewportScroll, lo as valueToDimensionType, sI as version, fn as visualElement, xI as withCSS, sf as withGeneratedLayoutId, dw as withMeasuredSize, oy as withOpacity, oM as withPath, YF as withShape};
export default null;
