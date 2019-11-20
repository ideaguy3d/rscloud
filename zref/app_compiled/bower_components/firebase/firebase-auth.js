"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*! @license Firebase v3.6.10
    Build: 3.6.10-rc.1
    Terms: https://firebase.google.com/terms/ */
(function () {
  var h,
      aa = aa || {},
      l = this,
      ba = function ba() {},
      m = function m(a) {
    var b = _typeof(a);

    if ("object" == b) {
      if (a) {
        if (a instanceof Array) return "array";
        if (a instanceof Object) return b;
        var c = Object.prototype.toString.call(a);
        if ("[object Window]" == c) return "object";
        if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return "array";
        if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) return "function";
      } else return "null";
    } else if ("function" == b && "undefined" == typeof a.call) return "object";
    return b;
  },
      ca = function ca(a) {
    return null === a;
  },
      da = function da(a) {
    return "array" == m(a);
  },
      ea = function ea(a) {
    var b = m(a);
    return "array" == b || "object" == b && "number" == typeof a.length;
  },
      p = function p(a) {
    return "string" == typeof a;
  },
      fa = function fa(a) {
    return "number" == typeof a;
  },
      q = function q(a) {
    return "function" == m(a);
  },
      ga = function ga(a) {
    var b = _typeof(a);

    return "object" == b && null != a || "function" == b;
  },
      ha = function ha(a, b, c) {
    return a.call.apply(a.bind, arguments);
  },
      ia = function ia(a, b, c) {
    if (!a) throw Error();

    if (2 < arguments.length) {
      var d = Array.prototype.slice.call(arguments, 2);
      return function () {
        var c = Array.prototype.slice.call(arguments);
        Array.prototype.unshift.apply(c, d);
        return a.apply(b, c);
      };
    }

    return function () {
      return a.apply(b, arguments);
    };
  },
      _r = function r(a, b, c) {
    _r = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? ha : ia;
    return _r.apply(null, arguments);
  },
      ja = function ja(a, b) {
    var c = Array.prototype.slice.call(arguments, 1);
    return function () {
      var b = c.slice();
      b.push.apply(b, arguments);
      return a.apply(this, b);
    };
  },
      ka = Date.now || function () {
    return +new Date();
  },
      t = function t(a, b) {
    function c() {}

    c.prototype = b.prototype;
    a.jd = b.prototype;
    a.prototype = new c();
    a.prototype.constructor = a;

    a.Bf = function (a, c, f) {
      for (var d = Array(arguments.length - 2), e = 2; e < arguments.length; e++) {
        d[e - 2] = arguments[e];
      }

      return b.prototype[c].apply(a, d);
    };
  };

  var u = function u(a) {
    if (Error.captureStackTrace) Error.captureStackTrace(this, u);else {
      var b = Error().stack;
      b && (this.stack = b);
    }
    a && (this.message = String(a));
  };

  t(u, Error);
  u.prototype.name = "CustomError";

  var la = function la(a, b) {
    for (var c = a.split("%s"), d = "", e = Array.prototype.slice.call(arguments, 1); e.length && 1 < c.length;) {
      d += c.shift() + e.shift();
    }

    return d + c.join("%s");
  },
      ma = String.prototype.trim ? function (a) {
    return a.trim();
  } : function (a) {
    return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "");
  },
      na = /&/g,
      oa = /</g,
      pa = />/g,
      qa = /"/g,
      ra = /'/g,
      sa = /\x00/g,
      ta = /[\x00&<>"']/,
      v = function v(a, b) {
    return -1 != a.indexOf(b);
  },
      ua = function ua(a, b) {
    return a < b ? -1 : a > b ? 1 : 0;
  };

  var va = function va(a, b) {
    b.unshift(a);
    u.call(this, la.apply(null, b));
    b.shift();
  };

  t(va, u);
  va.prototype.name = "AssertionError";

  var wa = function wa(a, b, c, d) {
    var e = "Assertion failed";
    if (c) var e = e + (": " + c),
        f = d;else a && (e += ": " + a, f = b);
    throw new va("" + e, f || []);
  },
      w = function w(a, b, c) {
    a || wa("", null, b, Array.prototype.slice.call(arguments, 2));
  },
      xa = function xa(a, b) {
    throw new va("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1));
  },
      ya = function ya(a, b, c) {
    fa(a) || wa("Expected number but got %s: %s.", [m(a), a], b, Array.prototype.slice.call(arguments, 2));
    return a;
  },
      za = function za(a, b, c) {
    p(a) || wa("Expected string but got %s: %s.", [m(a), a], b, Array.prototype.slice.call(arguments, 2));
  },
      Aa = function Aa(a, b, c) {
    q(a) || wa("Expected function but got %s: %s.", [m(a), a], b, Array.prototype.slice.call(arguments, 2));
  };

  var Ba = Array.prototype.indexOf ? function (a, b, c) {
    w(null != a.length);
    return Array.prototype.indexOf.call(a, b, c);
  } : function (a, b, c) {
    c = null == c ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
    if (p(a)) return p(b) && 1 == b.length ? a.indexOf(b, c) : -1;

    for (; c < a.length; c++) {
      if (c in a && a[c] === b) return c;
    }

    return -1;
  },
      Ca = Array.prototype.forEach ? function (a, b, c) {
    w(null != a.length);
    Array.prototype.forEach.call(a, b, c);
  } : function (a, b, c) {
    for (var d = a.length, e = p(a) ? a.split("") : a, f = 0; f < d; f++) {
      f in e && b.call(c, e[f], f, a);
    }
  },
      Da = function Da(a, b) {
    for (var c = p(a) ? a.split("") : a, d = a.length - 1; 0 <= d; --d) {
      d in c && b.call(void 0, c[d], d, a);
    }
  },
      Ea = Array.prototype.map ? function (a, b, c) {
    w(null != a.length);
    return Array.prototype.map.call(a, b, c);
  } : function (a, b, c) {
    for (var d = a.length, e = Array(d), f = p(a) ? a.split("") : a, g = 0; g < d; g++) {
      g in f && (e[g] = b.call(c, f[g], g, a));
    }

    return e;
  },
      Fa = Array.prototype.some ? function (a, b, c) {
    w(null != a.length);
    return Array.prototype.some.call(a, b, c);
  } : function (a, b, c) {
    for (var d = a.length, e = p(a) ? a.split("") : a, f = 0; f < d; f++) {
      if (f in e && b.call(c, e[f], f, a)) return !0;
    }

    return !1;
  },
      Ha = function Ha(a) {
    var b;

    a: {
      b = Ga;

      for (var c = a.length, d = p(a) ? a.split("") : a, e = 0; e < c; e++) {
        if (e in d && b.call(void 0, d[e], e, a)) {
          b = e;
          break a;
        }
      }

      b = -1;
    }

    return 0 > b ? null : p(a) ? a.charAt(b) : a[b];
  },
      Ia = function Ia(a, b) {
    return 0 <= Ba(a, b);
  },
      Ka = function Ka(a, b) {
    b = Ba(a, b);
    var c;
    (c = 0 <= b) && Ja(a, b);
    return c;
  },
      Ja = function Ja(a, b) {
    w(null != a.length);
    return 1 == Array.prototype.splice.call(a, b, 1).length;
  },
      La = function La(a, b) {
    var c = 0;
    Da(a, function (d, e) {
      b.call(void 0, d, e, a) && Ja(a, e) && c++;
    });
  },
      Ma = function Ma(a) {
    return Array.prototype.concat.apply(Array.prototype, arguments);
  },
      Na = function Na(a) {
    var b = a.length;

    if (0 < b) {
      for (var c = Array(b), d = 0; d < b; d++) {
        c[d] = a[d];
      }

      return c;
    }

    return [];
  };

  var Oa = function Oa(a, b) {
    for (var c in a) {
      b.call(void 0, a[c], c, a);
    }
  },
      Pa = function Pa(a) {
    var b = [],
        c = 0,
        d;

    for (d in a) {
      b[c++] = a[d];
    }

    return b;
  },
      Qa = function Qa(a) {
    var b = [],
        c = 0,
        d;

    for (d in a) {
      b[c++] = d;
    }

    return b;
  },
      Ra = function Ra(a) {
    for (var b in a) {
      return !1;
    }

    return !0;
  },
      Sa = function Sa(a, b) {
    for (var c in a) {
      if (!(c in b) || a[c] !== b[c]) return !1;
    }

    for (c in b) {
      if (!(c in a)) return !1;
    }

    return !0;
  },
      Ta = function Ta(a) {
    var b = {},
        c;

    for (c in a) {
      b[c] = a[c];
    }

    return b;
  },
      Ua = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "),
      Va = function Va(a, b) {
    for (var c, d, e = 1; e < arguments.length; e++) {
      d = arguments[e];

      for (c in d) {
        a[c] = d[c];
      }

      for (var f = 0; f < Ua.length; f++) {
        c = Ua[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c]);
      }
    }
  };

  var Xa;

  a: {
    var Ya = l.navigator;

    if (Ya) {
      var Za = Ya.userAgent;

      if (Za) {
        Xa = Za;
        break a;
      }
    }

    Xa = "";
  }

  var x = function x(a) {
    return v(Xa, a);
  };

  var $a = function $a(a) {
    $a[" "](a);
    return a;
  };

  $a[" "] = ba;

  var bb = function bb(a, b) {
    var c = ab;
    return Object.prototype.hasOwnProperty.call(c, a) ? c[a] : c[a] = b(a);
  };

  var cb = x("Opera"),
      y = x("Trident") || x("MSIE"),
      db = x("Edge"),
      eb = db || y,
      fb = x("Gecko") && !(v(Xa.toLowerCase(), "webkit") && !x("Edge")) && !(x("Trident") || x("MSIE")) && !x("Edge"),
      gb = v(Xa.toLowerCase(), "webkit") && !x("Edge"),
      hb = function hb() {
    var a = l.document;
    return a ? a.documentMode : void 0;
  },
      ib;

  a: {
    var jb = "",
        kb = function () {
      var a = Xa;
      if (fb) return /rv\:([^\);]+)(\)|;)/.exec(a);
      if (db) return /Edge\/([\d\.]+)/.exec(a);
      if (y) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
      if (gb) return /WebKit\/(\S+)/.exec(a);
      if (cb) return /(?:Version)[ \/]?(\S+)/.exec(a);
    }();

    kb && (jb = kb ? kb[1] : "");

    if (y) {
      var lb = hb();

      if (null != lb && lb > parseFloat(jb)) {
        ib = String(lb);
        break a;
      }
    }

    ib = jb;
  }

  var mb = ib,
      ab = {},
      z = function z(a) {
    return bb(a, function () {
      for (var b = 0, c = ma(String(mb)).split("."), d = ma(String(a)).split("."), e = Math.max(c.length, d.length), f = 0; 0 == b && f < e; f++) {
        var g = c[f] || "",
            k = d[f] || "";

        do {
          g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
          k = /(\d*)(\D*)(.*)/.exec(k) || ["", "", "", ""];
          if (0 == g[0].length && 0 == k[0].length) break;
          b = ua(0 == g[1].length ? 0 : parseInt(g[1], 10), 0 == k[1].length ? 0 : parseInt(k[1], 10)) || ua(0 == g[2].length, 0 == k[2].length) || ua(g[2], k[2]);
          g = g[3];
          k = k[3];
        } while (0 == b);
      }

      return 0 <= b;
    });
  },
      nb;

  var ob = l.document;
  nb = ob && y ? hb() || ("CSS1Compat" == ob.compatMode ? parseInt(mb, 10) : 5) : void 0;

  var pb = function pb(a) {
    return Ea(a, function (a) {
      a = a.toString(16);
      return 1 < a.length ? a : "0" + a;
    }).join("");
  };

  var qb = null,
      rb = null,
      tb = function tb(a) {
    var b = "";
    sb(a, function (a) {
      b += String.fromCharCode(a);
    });
    return b;
  },
      sb = function sb(a, b) {
    function c(b) {
      for (; d < a.length;) {
        var c = a.charAt(d++),
            e = rb[c];
        if (null != e) return e;
        if (!/^[\s\xa0]*$/.test(c)) throw Error("Unknown base64 encoding at char: " + c);
      }

      return b;
    }

    ub();

    for (var d = 0;;) {
      var e = c(-1),
          f = c(0),
          g = c(64),
          k = c(64);
      if (64 === k && -1 === e) break;
      b(e << 2 | f >> 4);
      64 != g && (b(f << 4 & 240 | g >> 2), 64 != k && b(g << 6 & 192 | k));
    }
  },
      ub = function ub() {
    if (!qb) {
      qb = {};
      rb = {};

      for (var a = 0; 65 > a; a++) {
        qb[a] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(a), rb[qb[a]] = a, 62 <= a && (rb["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(a)] = a);
      }
    }
  };

  var vb = function vb() {
    this.ya = -1;
  };

  var yb = function yb(a, b) {
    this.ya = 64;
    this.Rb = l.Uint8Array ? new Uint8Array(this.ya) : Array(this.ya);
    this.uc = this.Ya = 0;
    this.h = [];
    this.Te = a;
    this.Dd = b;
    this.uf = l.Int32Array ? new Int32Array(64) : Array(64);
    void 0 !== wb || (wb = l.Int32Array ? new Int32Array(xb) : xb);
    this.reset();
  },
      wb;

  t(yb, vb);

  for (var zb = [], Ab = 0; 63 > Ab; Ab++) {
    zb[Ab] = 0;
  }

  var Bb = Ma(128, zb);

  yb.prototype.reset = function () {
    this.uc = this.Ya = 0;
    this.h = l.Int32Array ? new Int32Array(this.Dd) : Na(this.Dd);
  };

  var Cb = function Cb(a) {
    var b = a.Rb;
    w(b.length == a.ya);

    for (var c = a.uf, d = 0, e = 0; e < b.length;) {
      c[d++] = b[e] << 24 | b[e + 1] << 16 | b[e + 2] << 8 | b[e + 3], e = 4 * d;
    }

    for (b = 16; 64 > b; b++) {
      var e = c[b - 15] | 0,
          d = c[b - 2] | 0,
          f = (c[b - 16] | 0) + ((e >>> 7 | e << 25) ^ (e >>> 18 | e << 14) ^ e >>> 3) | 0,
          g = (c[b - 7] | 0) + ((d >>> 17 | d << 15) ^ (d >>> 19 | d << 13) ^ d >>> 10) | 0;
      c[b] = f + g | 0;
    }

    for (var d = a.h[0] | 0, e = a.h[1] | 0, k = a.h[2] | 0, n = a.h[3] | 0, A = a.h[4] | 0, Wa = a.h[5] | 0, Gb = a.h[6] | 0, f = a.h[7] | 0, b = 0; 64 > b; b++) {
      var dh = ((d >>> 2 | d << 30) ^ (d >>> 13 | d << 19) ^ (d >>> 22 | d << 10)) + (d & e ^ d & k ^ e & k) | 0,
          g = A & Wa ^ ~A & Gb,
          f = f + ((A >>> 6 | A << 26) ^ (A >>> 11 | A << 21) ^ (A >>> 25 | A << 7)) | 0,
          g = g + (wb[b] | 0) | 0,
          g = f + (g + (c[b] | 0) | 0) | 0,
          f = Gb,
          Gb = Wa,
          Wa = A,
          A = n + g | 0,
          n = k,
          k = e,
          e = d,
          d = g + dh | 0;
    }

    a.h[0] = a.h[0] + d | 0;
    a.h[1] = a.h[1] + e | 0;
    a.h[2] = a.h[2] + k | 0;
    a.h[3] = a.h[3] + n | 0;
    a.h[4] = a.h[4] + A | 0;
    a.h[5] = a.h[5] + Wa | 0;
    a.h[6] = a.h[6] + Gb | 0;
    a.h[7] = a.h[7] + f | 0;
  };

  yb.prototype.update = function (a, b) {
    void 0 === b && (b = a.length);
    var c = 0,
        d = this.Ya;
    if (p(a)) for (; c < b;) {
      this.Rb[d++] = a.charCodeAt(c++), d == this.ya && (Cb(this), d = 0);
    } else if (ea(a)) for (; c < b;) {
      var e = a[c++];
      if (!("number" == typeof e && 0 <= e && 255 >= e && e == (e | 0))) throw Error("message must be a byte array");
      this.Rb[d++] = e;
      d == this.ya && (Cb(this), d = 0);
    } else throw Error("message must be string or array");
    this.Ya = d;
    this.uc += b;
  };

  yb.prototype.digest = function () {
    var a = [],
        b = 8 * this.uc;
    56 > this.Ya ? this.update(Bb, 56 - this.Ya) : this.update(Bb, this.ya - (this.Ya - 56));

    for (var c = 63; 56 <= c; c--) {
      this.Rb[c] = b & 255, b /= 256;
    }

    Cb(this);

    for (c = b = 0; c < this.Te; c++) {
      for (var d = 24; 0 <= d; d -= 8) {
        a[b++] = this.h[c] >> d & 255;
      }
    }

    return a;
  };

  var xb = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298];

  var Eb = function Eb() {
    yb.call(this, 8, Db);
  };

  t(Eb, yb);
  var Db = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225];
  var Fb = !y || 9 <= Number(nb),
      Hb = y && !z("9");
  !gb || z("528");
  fb && z("1.9b") || y && z("8") || cb && z("9.5") || gb && z("528");
  fb && !z("8") || y && z("9");

  var Ib = function Ib() {
    this.Aa = this.Aa;
    this.hc = this.hc;
  };

  Ib.prototype.Aa = !1;

  Ib.prototype.isDisposed = function () {
    return this.Aa;
  };

  Ib.prototype.Ta = function () {
    if (this.hc) for (; this.hc.length;) {
      this.hc.shift()();
    }
  };

  var Jb = function Jb(a, b) {
    this.type = a;
    this.currentTarget = this.target = b;
    this.defaultPrevented = this.bb = !1;
    this.Od = !0;
  };

  Jb.prototype.preventDefault = function () {
    this.defaultPrevented = !0;
    this.Od = !1;
  };

  var Kb = function Kb(a, b) {
    Jb.call(this, a ? a.type : "");
    this.relatedTarget = this.currentTarget = this.target = null;
    this.button = this.screenY = this.screenX = this.clientY = this.clientX = this.offsetY = this.offsetX = 0;
    this.key = "";
    this.charCode = this.keyCode = 0;
    this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
    this.Ua = this.state = null;
    a && this.init(a, b);
  };

  t(Kb, Jb);

  Kb.prototype.init = function (a, b) {
    var c = this.type = a.type,
        d = a.changedTouches ? a.changedTouches[0] : null;
    this.target = a.target || a.srcElement;
    this.currentTarget = b;

    if (b = a.relatedTarget) {
      if (fb) {
        var e;

        a: {
          try {
            $a(b.nodeName);
            e = !0;
            break a;
          } catch (f) {}

          e = !1;
        }

        e || (b = null);
      }
    } else "mouseover" == c ? b = a.fromElement : "mouseout" == c && (b = a.toElement);

    this.relatedTarget = b;
    null === d ? (this.offsetX = gb || void 0 !== a.offsetX ? a.offsetX : a.layerX, this.offsetY = gb || void 0 !== a.offsetY ? a.offsetY : a.layerY, this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX, this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY, this.screenX = a.screenX || 0, this.screenY = a.screenY || 0) : (this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX, this.clientY = void 0 !== d.clientY ? d.clientY : d.pageY, this.screenX = d.screenX || 0, this.screenY = d.screenY || 0);
    this.button = a.button;
    this.keyCode = a.keyCode || 0;
    this.key = a.key || "";
    this.charCode = a.charCode || ("keypress" == c ? a.keyCode : 0);
    this.ctrlKey = a.ctrlKey;
    this.altKey = a.altKey;
    this.shiftKey = a.shiftKey;
    this.metaKey = a.metaKey;
    this.state = a.state;
    this.Ua = a;
    a.defaultPrevented && this.preventDefault();
  };

  Kb.prototype.preventDefault = function () {
    Kb.jd.preventDefault.call(this);
    var a = this.Ua;
    if (a.preventDefault) a.preventDefault();else if (a.returnValue = !1, Hb) try {
      if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) a.keyCode = -1;
    } catch (b) {}
  };

  Kb.prototype.xe = function () {
    return this.Ua;
  };

  var Lb = "closure_listenable_" + (1E6 * Math.random() | 0),
      Mb = 0;

  var Nb = function Nb(a, b, c, d, e) {
    this.listener = a;
    this.lc = null;
    this.src = b;
    this.type = c;
    this.capture = !!d;
    this.Zb = e;
    this.key = ++Mb;
    this.hb = this.Qb = !1;
  },
      Ob = function Ob(a) {
    a.hb = !0;
    a.listener = null;
    a.lc = null;
    a.src = null;
    a.Zb = null;
  };

  var Pb = function Pb(a) {
    this.src = a;
    this.D = {};
    this.Mb = 0;
  };

  Pb.prototype.add = function (a, b, c, d, e) {
    var f = a.toString();
    a = this.D[f];
    a || (a = this.D[f] = [], this.Mb++);
    var g = Qb(a, b, d, e);
    -1 < g ? (b = a[g], c || (b.Qb = !1)) : (b = new Nb(b, this.src, f, !!d, e), b.Qb = c, a.push(b));
    return b;
  };

  Pb.prototype.remove = function (a, b, c, d) {
    a = a.toString();
    if (!(a in this.D)) return !1;
    var e = this.D[a];
    b = Qb(e, b, c, d);
    return -1 < b ? (Ob(e[b]), Ja(e, b), 0 == e.length && (delete this.D[a], this.Mb--), !0) : !1;
  };

  var Rb = function Rb(a, b) {
    var c = b.type;
    c in a.D && Ka(a.D[c], b) && (Ob(b), 0 == a.D[c].length && (delete a.D[c], a.Mb--));
  };

  Pb.prototype.Jc = function (a, b, c, d) {
    a = this.D[a.toString()];
    var e = -1;
    a && (e = Qb(a, b, c, d));
    return -1 < e ? a[e] : null;
  };

  var Qb = function Qb(a, b, c, d) {
    for (var e = 0; e < a.length; ++e) {
      var f = a[e];
      if (!f.hb && f.listener == b && f.capture == !!c && f.Zb == d) return e;
    }

    return -1;
  };

  var Sb = "closure_lm_" + (1E6 * Math.random() | 0),
      Tb = {},
      Ub = 0,
      Vb = function Vb(a, b, c, d, e) {
    if (da(b)) for (var f = 0; f < b.length; f++) {
      Vb(a, b[f], c, d, e);
    } else c = Wb(c), a && a[Lb] ? a.listen(b, c, d, e) : Xb(a, b, c, !1, d, e);
  },
      Xb = function Xb(a, b, c, d, e, f) {
    if (!b) throw Error("Invalid event type");
    var g = !!e,
        k = Yb(a);
    k || (a[Sb] = k = new Pb(a));
    c = k.add(b, c, d, e, f);

    if (!c.lc) {
      d = Zb();
      c.lc = d;
      d.src = a;
      d.listener = c;
      if (a.addEventListener) a.addEventListener(b.toString(), d, g);else if (a.attachEvent) a.attachEvent($b(b.toString()), d);else throw Error("addEventListener and attachEvent are unavailable.");
      Ub++;
    }
  },
      Zb = function Zb() {
    var a = ac,
        b = Fb ? function (c) {
      return a.call(b.src, b.listener, c);
    } : function (c) {
      c = a.call(b.src, b.listener, c);
      if (!c) return c;
    };
    return b;
  },
      bc = function bc(a, b, c, d, e) {
    if (da(b)) for (var f = 0; f < b.length; f++) {
      bc(a, b[f], c, d, e);
    } else c = Wb(c), a && a[Lb] ? cc(a, b, c, d, e) : Xb(a, b, c, !0, d, e);
  },
      dc = function dc(a, b, c, d, e) {
    if (da(b)) for (var f = 0; f < b.length; f++) {
      dc(a, b[f], c, d, e);
    } else c = Wb(c), a && a[Lb] ? a.aa.remove(String(b), c, d, e) : a && (a = Yb(a)) && (b = a.Jc(b, c, !!d, e)) && ec(b);
  },
      ec = function ec(a) {
    if (!fa(a) && a && !a.hb) {
      var b = a.src;
      if (b && b[Lb]) Rb(b.aa, a);else {
        var c = a.type,
            d = a.lc;
        b.removeEventListener ? b.removeEventListener(c, d, a.capture) : b.detachEvent && b.detachEvent($b(c), d);
        Ub--;
        (c = Yb(b)) ? (Rb(c, a), 0 == c.Mb && (c.src = null, b[Sb] = null)) : Ob(a);
      }
    }
  },
      $b = function $b(a) {
    return a in Tb ? Tb[a] : Tb[a] = "on" + a;
  },
      gc = function gc(a, b, c, d) {
    var e = !0;
    if (a = Yb(a)) if (b = a.D[b.toString()]) for (b = b.concat(), a = 0; a < b.length; a++) {
      var f = b[a];
      f && f.capture == c && !f.hb && (f = fc(f, d), e = e && !1 !== f);
    }
    return e;
  },
      fc = function fc(a, b) {
    var c = a.listener,
        d = a.Zb || a.src;
    a.Qb && ec(a);
    return c.call(d, b);
  },
      ac = function ac(a, b) {
    if (a.hb) return !0;

    if (!Fb) {
      if (!b) a: {
        b = ["window", "event"];

        for (var c = l, d; d = b.shift();) {
          if (null != c[d]) c = c[d];else {
            b = null;
            break a;
          }
        }

        b = c;
      }
      d = b;
      b = new Kb(d, this);
      c = !0;

      if (!(0 > d.keyCode || void 0 != d.returnValue)) {
        a: {
          var e = !1;
          if (0 == d.keyCode) try {
            d.keyCode = -1;
            break a;
          } catch (g) {
            e = !0;
          }
          if (e || void 0 == d.returnValue) d.returnValue = !0;
        }

        d = [];

        for (e = b.currentTarget; e; e = e.parentNode) {
          d.push(e);
        }

        a = a.type;

        for (e = d.length - 1; !b.bb && 0 <= e; e--) {
          b.currentTarget = d[e];
          var f = gc(d[e], a, !0, b),
              c = c && f;
        }

        for (e = 0; !b.bb && e < d.length; e++) {
          b.currentTarget = d[e], f = gc(d[e], a, !1, b), c = c && f;
        }
      }

      return c;
    }

    return fc(a, new Kb(b, this));
  },
      Yb = function Yb(a) {
    a = a[Sb];
    return a instanceof Pb ? a : null;
  },
      hc = "__closure_events_fn_" + (1E9 * Math.random() >>> 0),
      Wb = function Wb(a) {
    w(a, "Listener can not be null.");
    if (q(a)) return a;
    w(a.handleEvent, "An object listener must have handleEvent method.");
    a[hc] || (a[hc] = function (b) {
      return a.handleEvent(b);
    });
    return a[hc];
  };

  var ic = /^[+a-zA-Z0-9_.!#$%&'*\/=?^`{|}~-]+@([a-zA-Z0-9-]+\.)+[a-zA-Z0-9]{2,63}$/;

  var kc = function kc() {
    this.rc = "";
    this.ee = jc;
  };

  kc.prototype.cc = !0;

  kc.prototype.Xb = function () {
    return this.rc;
  };

  kc.prototype.toString = function () {
    return "Const{" + this.rc + "}";
  };

  var lc = function lc(a) {
    if (a instanceof kc && a.constructor === kc && a.ee === jc) return a.rc;
    xa("expected object of type Const, got '" + a + "'");
    return "type_error:Const";
  },
      jc = {},
      mc = function mc(a) {
    var b = new kc();
    b.rc = a;
    return b;
  };

  mc("");

  var oc = function oc() {
    this.kc = "";
    this.fe = nc;
  };

  oc.prototype.cc = !0;

  oc.prototype.Xb = function () {
    return this.kc;
  };

  oc.prototype.toString = function () {
    return "TrustedResourceUrl{" + this.kc + "}";
  };

  var nc = {};

  var qc = function qc() {
    this.ma = "";
    this.de = pc;
  };

  qc.prototype.cc = !0;

  qc.prototype.Xb = function () {
    return this.ma;
  };

  qc.prototype.toString = function () {
    return "SafeUrl{" + this.ma + "}";
  };

  var rc = function rc(a) {
    if (a instanceof qc && a.constructor === qc && a.de === pc) return a.ma;
    xa("expected object of type SafeUrl, got '" + a + "' of type " + m(a));
    return "type_error:SafeUrl";
  },
      sc = /^(?:(?:https?|mailto|ftp):|[^&:/?#]*(?:[/?#]|$))/i,
      uc = function uc(a) {
    if (a instanceof qc) return a;
    a = a.cc ? a.Xb() : String(a);
    sc.test(a) || (a = "about:invalid#zClosurez");
    return tc(a);
  },
      pc = {},
      tc = function tc(a) {
    var b = new qc();
    b.ma = a;
    return b;
  };

  tc("about:blank");

  var xc = function xc(a) {
    var b = [];
    vc(new wc(), a, b);
    return b.join("");
  },
      wc = function wc() {
    this.nc = void 0;
  },
      vc = function vc(a, b, c) {
    if (null == b) c.push("null");else {
      if ("object" == _typeof(b)) {
        if (da(b)) {
          var d = b;
          b = d.length;
          c.push("[");

          for (var e = "", f = 0; f < b; f++) {
            c.push(e), e = d[f], vc(a, a.nc ? a.nc.call(d, String(f), e) : e, c), e = ",";
          }

          c.push("]");
          return;
        }

        if (b instanceof String || b instanceof Number || b instanceof Boolean) b = b.valueOf();else {
          c.push("{");
          f = "";

          for (d in b) {
            Object.prototype.hasOwnProperty.call(b, d) && (e = b[d], "function" != typeof e && (c.push(f), yc(d, c), c.push(":"), vc(a, a.nc ? a.nc.call(b, d, e) : e, c), f = ","));
          }

          c.push("}");
          return;
        }
      }

      switch (_typeof(b)) {
        case "string":
          yc(b, c);
          break;

        case "number":
          c.push(isFinite(b) && !isNaN(b) ? String(b) : "null");
          break;

        case "boolean":
          c.push(String(b));
          break;

        case "function":
          c.push("null");
          break;

        default:
          throw Error("Unknown type: " + _typeof(b));
      }
    }
  },
      zc = {
    '"': '\\"',
    "\\": "\\\\",
    "/": "\\/",
    "\b": "\\b",
    "\f": "\\f",
    "\n": "\\n",
    "\r": "\\r",
    "\t": "\\t",
    "\x0B": "\\u000b"
  },
      Ac = /\uffff/.test("\uFFFF") ? /[\\\"\x00-\x1f\x7f-\uffff]/g : /[\\\"\x00-\x1f\x7f-\xff]/g,
      yc = function yc(a, b) {
    b.push('"', a.replace(Ac, function (a) {
      var b = zc[a];
      b || (b = "\\u" + (a.charCodeAt(0) | 65536).toString(16).substr(1), zc[a] = b);
      return b;
    }), '"');
  };

  var Bc = function Bc() {};

  Bc.prototype.md = null;

  var Cc = function Cc(a) {
    return a.md || (a.md = a.Oc());
  };

  var Dc,
      Ec = function Ec() {};

  t(Ec, Bc);

  Ec.prototype.Sb = function () {
    var a = Fc(this);
    return a ? new ActiveXObject(a) : new XMLHttpRequest();
  };

  Ec.prototype.Oc = function () {
    var a = {};
    Fc(this) && (a[0] = !0, a[1] = !0);
    return a;
  };

  var Fc = function Fc(a) {
    if (!a.Cd && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
      for (var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0; c < b.length; c++) {
        var d = b[c];

        try {
          return new ActiveXObject(d), a.Cd = d;
        } catch (e) {}
      }

      throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");
    }

    return a.Cd;
  };

  Dc = new Ec();

  var Gc = function Gc() {};

  t(Gc, Bc);

  Gc.prototype.Sb = function () {
    var a = new XMLHttpRequest();
    if ("withCredentials" in a) return a;
    if ("undefined" != typeof XDomainRequest) return new Hc();
    throw Error("Unsupported browser");
  };

  Gc.prototype.Oc = function () {
    return {};
  };

  var Hc = function Hc() {
    this.pa = new XDomainRequest();
    this.readyState = 0;
    this.onreadystatechange = null;
    this.responseText = "";
    this.status = -1;
    this.statusText = this.responseXML = null;
    this.pa.onload = _r(this.ye, this);
    this.pa.onerror = _r(this.zd, this);
    this.pa.onprogress = _r(this.ze, this);
    this.pa.ontimeout = _r(this.Ae, this);
  };

  h = Hc.prototype;

  h.open = function (a, b, c) {
    if (null != c && !c) throw Error("Only async requests are supported.");
    this.pa.open(a, b);
  };

  h.send = function (a) {
    if (a) {
      if ("string" == typeof a) this.pa.send(a);else throw Error("Only string data is supported");
    } else this.pa.send();
  };

  h.abort = function () {
    this.pa.abort();
  };

  h.setRequestHeader = function () {};

  h.ye = function () {
    this.status = 200;
    this.responseText = this.pa.responseText;
    Ic(this, 4);
  };

  h.zd = function () {
    this.status = 500;
    this.responseText = "";
    Ic(this, 4);
  };

  h.Ae = function () {
    this.zd();
  };

  h.ze = function () {
    this.status = 200;
    Ic(this, 1);
  };

  var Ic = function Ic(a, b) {
    a.readyState = b;
    if (a.onreadystatechange) a.onreadystatechange();
  };

  var Kc = function Kc() {
    this.ma = "";
    this.ce = Jc;
  };

  Kc.prototype.cc = !0;

  Kc.prototype.Xb = function () {
    return this.ma;
  };

  Kc.prototype.toString = function () {
    return "SafeHtml{" + this.ma + "}";
  };

  var Lc = function Lc(a) {
    if (a instanceof Kc && a.constructor === Kc && a.ce === Jc) return a.ma;
    xa("expected object of type SafeHtml, got '" + a + "' of type " + m(a));
    return "type_error:SafeHtml";
  },
      Jc = {};

  Kc.prototype.He = function (a) {
    this.ma = a;
    return this;
  };

  !fb && !y || y && 9 <= Number(nb) || fb && z("1.9.1");
  y && z("9");

  var Nc = function Nc(a, b) {
    Oa(b, function (b, d) {
      "style" == d ? a.style.cssText = b : "class" == d ? a.className = b : "for" == d ? a.htmlFor = b : Mc.hasOwnProperty(d) ? a.setAttribute(Mc[d], b) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, b) : a[d] = b;
    });
  },
      Mc = {
    cellpadding: "cellPadding",
    cellspacing: "cellSpacing",
    colspan: "colSpan",
    frameborder: "frameBorder",
    height: "height",
    maxlength: "maxLength",
    nonce: "nonce",
    role: "role",
    rowspan: "rowSpan",
    type: "type",
    usemap: "useMap",
    valign: "vAlign",
    width: "width"
  };

  var Oc = function Oc(a, b, c) {
    this.Le = c;
    this.le = a;
    this.af = b;
    this.gc = 0;
    this.$b = null;
  };

  Oc.prototype.get = function () {
    var a;
    0 < this.gc ? (this.gc--, a = this.$b, this.$b = a.next, a.next = null) : a = this.le();
    return a;
  };

  Oc.prototype.put = function (a) {
    this.af(a);
    this.gc < this.Le && (this.gc++, a.next = this.$b, this.$b = a);
  };

  var Pc = function Pc(a) {
    l.setTimeout(function () {
      throw a;
    }, 0);
  },
      Qc,
      Rc = function Rc() {
    var a = l.MessageChannel;
    "undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener && !x("Presto") && (a = function a() {
      var a = document.createElement("IFRAME");
      a.style.display = "none";
      a.src = "";
      document.documentElement.appendChild(a);
      var b = a.contentWindow,
          a = b.document;
      a.open();
      a.write("");
      a.close();

      var c = "callImmediate" + Math.random(),
          d = "file:" == b.location.protocol ? "*" : b.location.protocol + "//" + b.location.host,
          a = _r(function (a) {
        if (("*" == d || a.origin == d) && a.data == c) this.port1.onmessage();
      }, this);

      b.addEventListener("message", a, !1);
      this.port1 = {};
      this.port2 = {
        postMessage: function postMessage() {
          b.postMessage(c, d);
        }
      };
    });

    if ("undefined" !== typeof a && !x("Trident") && !x("MSIE")) {
      var b = new a(),
          c = {},
          d = c;

      b.port1.onmessage = function () {
        if (void 0 !== c.next) {
          c = c.next;
          var a = c.pd;
          c.pd = null;
          a();
        }
      };

      return function (a) {
        d.next = {
          pd: a
        };
        d = d.next;
        b.port2.postMessage(0);
      };
    }

    return "undefined" !== typeof document && "onreadystatechange" in document.createElement("SCRIPT") ? function (a) {
      var b = document.createElement("SCRIPT");

      b.onreadystatechange = function () {
        b.onreadystatechange = null;
        b.parentNode.removeChild(b);
        b = null;
        a();
        a = null;
      };

      document.documentElement.appendChild(b);
    } : function (a) {
      l.setTimeout(a, 0);
    };
  };

  var Sc = function Sc() {
    this.xc = this.Na = null;
  },
      Uc = new Oc(function () {
    return new Tc();
  }, function (a) {
    a.reset();
  }, 100);

  Sc.prototype.add = function (a, b) {
    var c = Uc.get();
    c.set(a, b);
    this.xc ? this.xc.next = c : (w(!this.Na), this.Na = c);
    this.xc = c;
  };

  Sc.prototype.remove = function () {
    var a = null;
    this.Na && (a = this.Na, this.Na = this.Na.next, this.Na || (this.xc = null), a.next = null);
    return a;
  };

  var Tc = function Tc() {
    this.next = this.scope = this.Ic = null;
  };

  Tc.prototype.set = function (a, b) {
    this.Ic = a;
    this.scope = b;
    this.next = null;
  };

  Tc.prototype.reset = function () {
    this.next = this.scope = this.Ic = null;
  };

  var Zc = function Zc(a, b) {
    Vc || Wc();
    Xc || (Vc(), Xc = !0);
    Yc.add(a, b);
  },
      Vc,
      Wc = function Wc() {
    if (-1 != String(l.Promise).indexOf("[native code]")) {
      var a = l.Promise.resolve(void 0);

      Vc = function Vc() {
        a.then($c);
      };
    } else Vc = function Vc() {
      var a = $c;
      !q(l.setImmediate) || l.Window && l.Window.prototype && !x("Edge") && l.Window.prototype.setImmediate == l.setImmediate ? (Qc || (Qc = Rc()), Qc(a)) : l.setImmediate(a);
    };
  },
      Xc = !1,
      Yc = new Sc(),
      $c = function $c() {
    for (var a; a = Yc.remove();) {
      try {
        a.Ic.call(a.scope);
      } catch (b) {
        Pc(b);
      }

      Uc.put(a);
    }

    Xc = !1;
  };

  var ad = function ad(a) {
    a.prototype.then = a.prototype.then;
    a.prototype.$goog_Thenable = !0;
  },
      bd = function bd(a) {
    if (!a) return !1;

    try {
      return !!a.$goog_Thenable;
    } catch (b) {
      return !1;
    }
  };

  var B = function B(a, b) {
    this.M = 0;
    this.na = void 0;
    this.Ra = this.ja = this.s = null;
    this.Yb = this.Hc = !1;
    if (a != ba) try {
      var c = this;
      a.call(b, function (a) {
        cd(c, 2, a);
      }, function (a) {
        if (!(a instanceof dd)) try {
          if (a instanceof Error) throw a;
          throw Error("Promise rejected.");
        } catch (e) {}
        cd(c, 3, a);
      });
    } catch (d) {
      cd(this, 3, d);
    }
  },
      ed = function ed() {
    this.next = this.context = this.$a = this.Fa = this.child = null;
    this.ob = !1;
  };

  ed.prototype.reset = function () {
    this.context = this.$a = this.Fa = this.child = null;
    this.ob = !1;
  };

  var fd = new Oc(function () {
    return new ed();
  }, function (a) {
    a.reset();
  }, 100),
      gd = function gd(a, b, c) {
    var d = fd.get();
    d.Fa = a;
    d.$a = b;
    d.context = c;
    return d;
  },
      C = function C(a) {
    if (a instanceof B) return a;
    var b = new B(ba);
    cd(b, 2, a);
    return b;
  },
      D = function D(a) {
    return new B(function (b, c) {
      c(a);
    });
  },
      id = function id(a, b, c) {
    hd(a, b, c, null) || Zc(ja(b, a));
  },
      jd = function jd(a) {
    return new B(function (b) {
      var c = a.length,
          d = [];
      if (c) for (var e = function e(a, _e, f) {
        c--;
        d[a] = _e ? {
          ve: !0,
          value: f
        } : {
          ve: !1,
          reason: f
        };
        0 == c && b(d);
      }, f = 0, g; f < a.length; f++) {
        g = a[f], id(g, ja(e, f, !0), ja(e, f, !1));
      } else b(d);
    });
  };

  B.prototype.then = function (a, b, c) {
    null != a && Aa(a, "opt_onFulfilled should be a function.");
    null != b && Aa(b, "opt_onRejected should be a function. Did you pass opt_context as the second argument instead of the third?");
    return kd(this, q(a) ? a : null, q(b) ? b : null, c);
  };

  ad(B);

  var md = function md(a, b) {
    b = gd(b, b, void 0);
    b.ob = !0;
    ld(a, b);
    return a;
  };

  B.prototype.c = function (a, b) {
    return kd(this, null, a, b);
  };

  B.prototype.cancel = function (a) {
    0 == this.M && Zc(function () {
      var b = new dd(a);
      nd(this, b);
    }, this);
  };

  var nd = function nd(a, b) {
    if (0 == a.M) if (a.s) {
      var c = a.s;

      if (c.ja) {
        for (var d = 0, e = null, f = null, g = c.ja; g && (g.ob || (d++, g.child == a && (e = g), !(e && 1 < d))); g = g.next) {
          e || (f = g);
        }

        e && (0 == c.M && 1 == d ? nd(c, b) : (f ? (d = f, w(c.ja), w(null != d), d.next == c.Ra && (c.Ra = d), d.next = d.next.next) : od(c), pd(c, e, 3, b)));
      }

      a.s = null;
    } else cd(a, 3, b);
  },
      ld = function ld(a, b) {
    a.ja || 2 != a.M && 3 != a.M || qd(a);
    w(null != b.Fa);
    a.Ra ? a.Ra.next = b : a.ja = b;
    a.Ra = b;
  },
      kd = function kd(a, b, c, d) {
    var e = gd(null, null, null);
    e.child = new B(function (a, g) {
      e.Fa = b ? function (c) {
        try {
          var e = b.call(d, c);
          a(e);
        } catch (A) {
          g(A);
        }
      } : a;
      e.$a = c ? function (b) {
        try {
          var e = c.call(d, b);
          void 0 === e && b instanceof dd ? g(b) : a(e);
        } catch (A) {
          g(A);
        }
      } : g;
    });
    e.child.s = a;
    ld(a, e);
    return e.child;
  };

  B.prototype.mf = function (a) {
    w(1 == this.M);
    this.M = 0;
    cd(this, 2, a);
  };

  B.prototype.nf = function (a) {
    w(1 == this.M);
    this.M = 0;
    cd(this, 3, a);
  };

  var cd = function cd(a, b, c) {
    0 == a.M && (a === c && (b = 3, c = new TypeError("Promise cannot resolve to itself")), a.M = 1, hd(c, a.mf, a.nf, a) || (a.na = c, a.M = b, a.s = null, qd(a), 3 != b || c instanceof dd || rd(a, c)));
  },
      hd = function hd(a, b, c, d) {
    if (a instanceof B) return null != b && Aa(b, "opt_onFulfilled should be a function."), null != c && Aa(c, "opt_onRejected should be a function. Did you pass opt_context as the second argument instead of the third?"), ld(a, gd(b || ba, c || null, d)), !0;
    if (bd(a)) return a.then(b, c, d), !0;
    if (ga(a)) try {
      var e = a.then;
      if (q(e)) return sd(a, e, b, c, d), !0;
    } catch (f) {
      return c.call(d, f), !0;
    }
    return !1;
  },
      sd = function sd(a, b, c, d, e) {
    var f = !1,
        g = function g(a) {
      f || (f = !0, c.call(e, a));
    },
        k = function k(a) {
      f || (f = !0, d.call(e, a));
    };

    try {
      b.call(a, g, k);
    } catch (n) {
      k(n);
    }
  },
      qd = function qd(a) {
    a.Hc || (a.Hc = !0, Zc(a.qe, a));
  },
      od = function od(a) {
    var b = null;
    a.ja && (b = a.ja, a.ja = b.next, b.next = null);
    a.ja || (a.Ra = null);
    null != b && w(null != b.Fa);
    return b;
  };

  B.prototype.qe = function () {
    for (var a; a = od(this);) {
      pd(this, a, this.M, this.na);
    }

    this.Hc = !1;
  };

  var pd = function pd(a, b, c, d) {
    if (3 == c && b.$a && !b.ob) for (; a && a.Yb; a = a.s) {
      a.Yb = !1;
    }
    if (b.child) b.child.s = null, td(b, c, d);else try {
      b.ob ? b.Fa.call(b.context) : td(b, c, d);
    } catch (e) {
      ud.call(null, e);
    }
    fd.put(b);
  },
      td = function td(a, b, c) {
    2 == b ? a.Fa.call(a.context, c) : a.$a && a.$a.call(a.context, c);
  },
      rd = function rd(a, b) {
    a.Yb = !0;
    Zc(function () {
      a.Yb && ud.call(null, b);
    });
  },
      ud = Pc,
      dd = function dd(a) {
    u.call(this, a);
  };

  t(dd, u);
  dd.prototype.name = "cancel";
  /*
  Portions of this code are from MochiKit, received by
  The Closure Authors under the MIT license. All other code is Copyright
  2005-2009 The Closure Authors. All Rights Reserved.
  */

  var vd = function vd(a, b) {
    this.oc = [];
    this.Id = a;
    this.sd = b || null;
    this.rb = this.Wa = !1;
    this.na = void 0;
    this.fd = this.ld = this.Cc = !1;
    this.vc = 0;
    this.s = null;
    this.Dc = 0;
  };

  vd.prototype.cancel = function (a) {
    if (this.Wa) this.na instanceof vd && this.na.cancel();else {
      if (this.s) {
        var b = this.s;
        delete this.s;
        a ? b.cancel(a) : (b.Dc--, 0 >= b.Dc && b.cancel());
      }

      this.Id ? this.Id.call(this.sd, this) : this.fd = !0;
      this.Wa || wd(this, new xd());
    }
  };

  vd.prototype.qd = function (a, b) {
    this.Cc = !1;
    yd(this, a, b);
  };

  var yd = function yd(a, b, c) {
    a.Wa = !0;
    a.na = c;
    a.rb = !b;
    zd(a);
  },
      Bd = function Bd(a) {
    if (a.Wa) {
      if (!a.fd) throw new Ad();
      a.fd = !1;
    }
  };

  vd.prototype.callback = function (a) {
    Bd(this);
    Cd(a);
    yd(this, !0, a);
  };

  var wd = function wd(a, b) {
    Bd(a);
    Cd(b);
    yd(a, !1, b);
  },
      Cd = function Cd(a) {
    w(!(a instanceof vd), "An execution sequence may not be initiated with a blocking Deferred.");
  },
      Gd = function Gd(a) {
    var b = Dd("https://apis.google.com/js/client.js?onload=" + Ed);
    Fd(b, null, a, void 0);
  },
      Fd = function Fd(a, b, c, d) {
    w(!a.ld, "Blocking Deferreds can not be re-used");
    a.oc.push([b, c, d]);
    a.Wa && zd(a);
  };

  vd.prototype.then = function (a, b, c) {
    var d,
        e,
        f = new B(function (a, b) {
      d = a;
      e = b;
    });
    Fd(this, d, function (a) {
      a instanceof xd ? f.cancel() : e(a);
    });
    return f.then(a, b, c);
  };

  ad(vd);

  var Hd = function Hd(a) {
    return Fa(a.oc, function (a) {
      return q(a[1]);
    });
  },
      zd = function zd(a) {
    if (a.vc && a.Wa && Hd(a)) {
      var b = a.vc,
          c = Id[b];
      c && (l.clearTimeout(c.sb), delete Id[b]);
      a.vc = 0;
    }

    a.s && (a.s.Dc--, delete a.s);

    for (var b = a.na, d = c = !1; a.oc.length && !a.Cc;) {
      var e = a.oc.shift(),
          f = e[0],
          g = e[1],
          e = e[2];
      if (f = a.rb ? g : f) try {
        var k = f.call(e || a.sd, b);
        void 0 !== k && (a.rb = a.rb && (k == b || k instanceof Error), a.na = b = k);
        if (bd(b) || "function" === typeof l.Promise && b instanceof l.Promise) d = !0, a.Cc = !0;
      } catch (n) {
        b = n, a.rb = !0, Hd(a) || (c = !0);
      }
    }

    a.na = b;
    d && (k = _r(a.qd, a, !0), d = _r(a.qd, a, !1), b instanceof vd ? (Fd(b, k, d), b.ld = !0) : b.then(k, d));
    c && (b = new Jd(b), Id[b.sb] = b, a.vc = b.sb);
  },
      Ad = function Ad() {
    u.call(this);
  };

  t(Ad, u);
  Ad.prototype.message = "Deferred has already fired";
  Ad.prototype.name = "AlreadyCalledError";

  var xd = function xd() {
    u.call(this);
  };

  t(xd, u);
  xd.prototype.message = "Deferred was canceled";
  xd.prototype.name = "CanceledError";

  var Jd = function Jd(a) {
    this.sb = l.setTimeout(_r(this.lf, this), 0);
    this.O = a;
  };

  Jd.prototype.lf = function () {
    w(Id[this.sb], "Cannot throw an error that is not scheduled.");
    delete Id[this.sb];
    throw this.O;
  };

  var Id = {};

  var Dd = function Dd(a) {
    var b = new oc();
    b.kc = a;
    return Kd(b);
  },
      Kd = function Kd(a) {
    var b = {},
        c = b.document || document,
        d;
    a instanceof oc && a.constructor === oc && a.fe === nc ? d = a.kc : (xa("expected object of type TrustedResourceUrl, got '" + a + "' of type " + m(a)), d = "type_error:TrustedResourceUrl");
    var e = document.createElement("SCRIPT");
    a = {
      Pd: e,
      Lb: void 0
    };
    var f = new vd(Ld, a),
        g = null,
        k = null != b.timeout ? b.timeout : 5E3;
    0 < k && (g = window.setTimeout(function () {
      Md(e, !0);
      wd(f, new Nd(1, "Timeout reached for loading script " + d));
    }, k), a.Lb = g);

    e.onload = e.onreadystatechange = function () {
      e.readyState && "loaded" != e.readyState && "complete" != e.readyState || (Md(e, b.Cf || !1, g), f.callback(null));
    };

    e.onerror = function () {
      Md(e, !0, g);
      wd(f, new Nd(0, "Error while loading script " + d));
    };

    a = b.attributes || {};
    Va(a, {
      type: "text/javascript",
      charset: "UTF-8",
      src: d
    });
    Nc(e, a);
    Od(c).appendChild(e);
    return f;
  },
      Od = function Od(a) {
    var b;
    return (b = (a || document).getElementsByTagName("HEAD")) && 0 != b.length ? b[0] : a.documentElement;
  },
      Ld = function Ld() {
    if (this && this.Pd) {
      var a = this.Pd;
      a && "SCRIPT" == a.tagName && Md(a, !0, this.Lb);
    }
  },
      Md = function Md(a, b, c) {
    null != c && l.clearTimeout(c);
    a.onload = ba;
    a.onerror = ba;
    a.onreadystatechange = ba;
    b && window.setTimeout(function () {
      a && a.parentNode && a.parentNode.removeChild(a);
    }, 0);
  },
      Nd = function Nd(a, b) {
    var c = "Jsloader error (code #" + a + ")";
    b && (c += ": " + b);
    u.call(this, c);
    this.code = a;
  };

  t(Nd, u);

  var Pd = function Pd() {
    Ib.call(this);
    this.aa = new Pb(this);
    this.he = this;
    this.Uc = null;
  };

  t(Pd, Ib);
  Pd.prototype[Lb] = !0;
  h = Pd.prototype;

  h.addEventListener = function (a, b, c, d) {
    Vb(this, a, b, c, d);
  };

  h.removeEventListener = function (a, b, c, d) {
    dc(this, a, b, c, d);
  };

  h.dispatchEvent = function (a) {
    Qd(this);
    var b,
        c = this.Uc;

    if (c) {
      b = [];

      for (var d = 1; c; c = c.Uc) {
        b.push(c), w(1E3 > ++d, "infinite loop");
      }
    }

    c = this.he;
    d = a.type || a;
    if (p(a)) a = new Jb(a, c);else if (a instanceof Jb) a.target = a.target || c;else {
      var e = a;
      a = new Jb(d, c);
      Va(a, e);
    }
    var e = !0,
        f;
    if (b) for (var g = b.length - 1; !a.bb && 0 <= g; g--) {
      f = a.currentTarget = b[g], e = Rd(f, d, !0, a) && e;
    }
    a.bb || (f = a.currentTarget = c, e = Rd(f, d, !0, a) && e, a.bb || (e = Rd(f, d, !1, a) && e));
    if (b) for (g = 0; !a.bb && g < b.length; g++) {
      f = a.currentTarget = b[g], e = Rd(f, d, !1, a) && e;
    }
    return e;
  };

  h.Ta = function () {
    Pd.jd.Ta.call(this);

    if (this.aa) {
      var a = this.aa,
          b = 0,
          c;

      for (c in a.D) {
        for (var d = a.D[c], e = 0; e < d.length; e++) {
          ++b, Ob(d[e]);
        }

        delete a.D[c];
        a.Mb--;
      }
    }

    this.Uc = null;
  };

  h.listen = function (a, b, c, d) {
    Qd(this);
    return this.aa.add(String(a), b, !1, c, d);
  };

  var cc = function cc(a, b, c, d, e) {
    a.aa.add(String(b), c, !0, d, e);
  },
      Rd = function Rd(a, b, c, d) {
    b = a.aa.D[String(b)];
    if (!b) return !0;
    b = b.concat();

    for (var e = !0, f = 0; f < b.length; ++f) {
      var g = b[f];

      if (g && !g.hb && g.capture == c) {
        var k = g.listener,
            n = g.Zb || g.src;
        g.Qb && Rb(a.aa, g);
        e = !1 !== k.call(n, d) && e;
      }
    }

    return e && 0 != d.Od;
  };

  Pd.prototype.Jc = function (a, b, c, d) {
    return this.aa.Jc(String(a), b, c, d);
  };

  var Qd = function Qd(a) {
    w(a.aa, "Event target is not initialized. Did you call the superclass (goog.events.EventTarget) constructor?");
  };

  var Sd = "StopIteration" in l ? l.StopIteration : {
    message: "StopIteration",
    stack: ""
  },
      Td = function Td() {};

  Td.prototype.next = function () {
    throw Sd;
  };

  Td.prototype.ge = function () {
    return this;
  };

  var Ud = function Ud(a, b) {
    this.ba = {};
    this.w = [];
    this.nb = this.o = 0;
    var c = arguments.length;

    if (1 < c) {
      if (c % 2) throw Error("Uneven number of arguments");

      for (var d = 0; d < c; d += 2) {
        this.set(arguments[d], arguments[d + 1]);
      }
    } else a && this.addAll(a);
  };

  Ud.prototype.X = function () {
    Vd(this);

    for (var a = [], b = 0; b < this.w.length; b++) {
      a.push(this.ba[this.w[b]]);
    }

    return a;
  };

  Ud.prototype.ka = function () {
    Vd(this);
    return this.w.concat();
  };

  Ud.prototype.pb = function (a) {
    return Wd(this.ba, a);
  };

  Ud.prototype.remove = function (a) {
    return Wd(this.ba, a) ? (delete this.ba[a], this.o--, this.nb++, this.w.length > 2 * this.o && Vd(this), !0) : !1;
  };

  var Vd = function Vd(a) {
    if (a.o != a.w.length) {
      for (var b = 0, c = 0; b < a.w.length;) {
        var d = a.w[b];
        Wd(a.ba, d) && (a.w[c++] = d);
        b++;
      }

      a.w.length = c;
    }

    if (a.o != a.w.length) {
      for (var e = {}, c = b = 0; b < a.w.length;) {
        d = a.w[b], Wd(e, d) || (a.w[c++] = d, e[d] = 1), b++;
      }

      a.w.length = c;
    }
  };

  h = Ud.prototype;

  h.get = function (a, b) {
    return Wd(this.ba, a) ? this.ba[a] : b;
  };

  h.set = function (a, b) {
    Wd(this.ba, a) || (this.o++, this.w.push(a), this.nb++);
    this.ba[a] = b;
  };

  h.addAll = function (a) {
    var b;
    a instanceof Ud ? (b = a.ka(), a = a.X()) : (b = Qa(a), a = Pa(a));

    for (var c = 0; c < b.length; c++) {
      this.set(b[c], a[c]);
    }
  };

  h.forEach = function (a, b) {
    for (var c = this.ka(), d = 0; d < c.length; d++) {
      var e = c[d],
          f = this.get(e);
      a.call(b, f, e, this);
    }
  };

  h.clone = function () {
    return new Ud(this);
  };

  h.ge = function (a) {
    Vd(this);
    var b = 0,
        c = this.nb,
        d = this,
        e = new Td();

    e.next = function () {
      if (c != d.nb) throw Error("The map has changed since the iterator was created");
      if (b >= d.w.length) throw Sd;
      var e = d.w[b++];
      return a ? e : d.ba[e];
    };

    return e;
  };

  var Wd = function Wd(a, b) {
    return Object.prototype.hasOwnProperty.call(a, b);
  };

  var Xd = function Xd(a) {
    if (a.X && "function" == typeof a.X) return a.X();
    if (p(a)) return a.split("");

    if (ea(a)) {
      for (var b = [], c = a.length, d = 0; d < c; d++) {
        b.push(a[d]);
      }

      return b;
    }

    return Pa(a);
  },
      Yd = function Yd(a) {
    if (a.ka && "function" == typeof a.ka) return a.ka();

    if (!a.X || "function" != typeof a.X) {
      if (ea(a) || p(a)) {
        var b = [];
        a = a.length;

        for (var c = 0; c < a; c++) {
          b.push(c);
        }

        return b;
      }

      return Qa(a);
    }
  },
      Zd = function Zd(a, b) {
    if (a.forEach && "function" == typeof a.forEach) a.forEach(b, void 0);else if (ea(a) || p(a)) Ca(a, b, void 0);else for (var c = Yd(a), d = Xd(a), e = d.length, f = 0; f < e; f++) {
      b.call(void 0, d[f], c && c[f], a);
    }
  };

  var $d = function $d(a, b, c, d, e) {
    this.reset(a, b, c, d, e);
  };

  $d.prototype.ud = null;
  var ae = 0;

  $d.prototype.reset = function (a, b, c, d, e) {
    "number" == typeof e || ae++;
    d || ka();
    this.wb = a;
    this.Qe = b;
    delete this.ud;
  };

  $d.prototype.Sd = function (a) {
    this.wb = a;
  };

  var be = function be(a) {
    this.Re = a;
    this.Ad = this.Ec = this.wb = this.s = null;
  },
      ce = function ce(a, b) {
    this.name = a;
    this.value = b;
  };

  ce.prototype.toString = function () {
    return this.name;
  };

  var de = new ce("SEVERE", 1E3),
      ee = new ce("CONFIG", 700),
      fe = new ce("FINE", 500);

  be.prototype.getParent = function () {
    return this.s;
  };

  be.prototype.Sd = function (a) {
    this.wb = a;
  };

  var ge = function ge(a) {
    if (a.wb) return a.wb;
    if (a.s) return ge(a.s);
    xa("Root logger has no level set.");
    return null;
  };

  be.prototype.log = function (a, b, c) {
    if (a.value >= ge(this).value) for (q(b) && (b = b()), a = new $d(a, String(b), this.Re), c && (a.ud = c), c = "log:" + a.Qe, l.console && (l.console.timeStamp ? l.console.timeStamp(c) : l.console.markTimeline && l.console.markTimeline(c)), l.msWriteProfilerMark && l.msWriteProfilerMark(c), c = this; c;) {
      var d = c,
          e = a;
      if (d.Ad) for (var f = 0; b = d.Ad[f]; f++) {
        b(e);
      }
      c = c.getParent();
    }
  };

  var he = {},
      ie = null,
      je = function je(a) {
    ie || (ie = new be(""), he[""] = ie, ie.Sd(ee));
    var b;

    if (!(b = he[a])) {
      b = new be(a);
      var c = a.lastIndexOf("."),
          d = a.substr(c + 1),
          c = je(a.substr(0, c));
      c.Ec || (c.Ec = {});
      c.Ec[d] = b;
      b.s = c;
      he[a] = b;
    }

    return b;
  };

  var E = function E(a, b) {
    a && a.log(fe, b, void 0);
  };

  var ke = function ke(a, b, c) {
    if (q(a)) c && (a = _r(a, c));else if (a && "function" == typeof a.handleEvent) a = _r(a.handleEvent, a);else throw Error("Invalid listener argument");
    return 2147483647 < Number(b) ? -1 : l.setTimeout(a, b || 0);
  },
      le = function le(a) {
    var b = null;
    return new B(function (c, d) {
      b = ke(function () {
        c(void 0);
      }, a);
      -1 == b && d(Error("Failed to schedule timer."));
    }).c(function (a) {
      l.clearTimeout(b);
      throw a;
    });
  };

  var me = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/,
      ne = function ne(a, b) {
    if (a) {
      a = a.split("&");

      for (var c = 0; c < a.length; c++) {
        var d = a[c].indexOf("="),
            e,
            f = null;
        0 <= d ? (e = a[c].substring(0, d), f = a[c].substring(d + 1)) : e = a[c];
        b(e, f ? decodeURIComponent(f.replace(/\+/g, " ")) : "");
      }
    }
  };

  var F = function F(a) {
    Pd.call(this);
    this.headers = new Ud();
    this.zc = a || null;
    this.qa = !1;
    this.yc = this.b = null;
    this.vb = this.Gd = this.fc = "";
    this.Ca = this.Mc = this.dc = this.Gc = !1;
    this.kb = 0;
    this.tc = null;
    this.Nd = "";
    this.wc = this.Ye = this.be = !1;
  };

  t(F, Pd);
  var oe = F.prototype,
      pe = je("goog.net.XhrIo");
  oe.T = pe;
  var qe = /^https?$/i,
      re = ["POST", "PUT"];

  F.prototype.send = function (a, b, c, d) {
    if (this.b) throw Error("[goog.net.XhrIo] Object is active with another request=" + this.fc + "; newUri=" + a);
    b = b ? b.toUpperCase() : "GET";
    this.fc = a;
    this.vb = "";
    this.Gd = b;
    this.Gc = !1;
    this.qa = !0;
    this.b = this.zc ? this.zc.Sb() : Dc.Sb();
    this.yc = this.zc ? Cc(this.zc) : Cc(Dc);
    this.b.onreadystatechange = _r(this.Kd, this);
    this.Ye && "onprogress" in this.b && (this.b.onprogress = _r(function (a) {
      this.Jd(a, !0);
    }, this), this.b.upload && (this.b.upload.onprogress = _r(this.Jd, this)));

    try {
      E(this.T, se(this, "Opening Xhr")), this.Mc = !0, this.b.open(b, String(a), !0), this.Mc = !1;
    } catch (f) {
      E(this.T, se(this, "Error opening Xhr: " + f.message));
      this.O(5, f);
      return;
    }

    a = c || "";
    var e = this.headers.clone();
    d && Zd(d, function (a, b) {
      e.set(b, a);
    });
    d = Ha(e.ka());
    c = l.FormData && a instanceof l.FormData;
    !Ia(re, b) || d || c || e.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
    e.forEach(function (a, b) {
      this.b.setRequestHeader(b, a);
    }, this);
    this.Nd && (this.b.responseType = this.Nd);
    "withCredentials" in this.b && this.b.withCredentials !== this.be && (this.b.withCredentials = this.be);

    try {
      te(this), 0 < this.kb && (this.wc = ue(this.b), E(this.T, se(this, "Will abort after " + this.kb + "ms if incomplete, xhr2 " + this.wc)), this.wc ? (this.b.timeout = this.kb, this.b.ontimeout = _r(this.Lb, this)) : this.tc = ke(this.Lb, this.kb, this)), E(this.T, se(this, "Sending request")), this.dc = !0, this.b.send(a), this.dc = !1;
    } catch (f) {
      E(this.T, se(this, "Send error: " + f.message)), this.O(5, f);
    }
  };

  var ue = function ue(a) {
    return y && z(9) && fa(a.timeout) && void 0 !== a.ontimeout;
  },
      Ga = function Ga(a) {
    return "content-type" == a.toLowerCase();
  };

  F.prototype.Lb = function () {
    "undefined" != typeof aa && this.b && (this.vb = "Timed out after " + this.kb + "ms, aborting", E(this.T, se(this, this.vb)), this.dispatchEvent("timeout"), this.abort(8));
  };

  F.prototype.O = function (a, b) {
    this.qa = !1;
    this.b && (this.Ca = !0, this.b.abort(), this.Ca = !1);
    this.vb = b;
    ve(this);
    we(this);
  };

  var ve = function ve(a) {
    a.Gc || (a.Gc = !0, a.dispatchEvent("complete"), a.dispatchEvent("error"));
  };

  F.prototype.abort = function () {
    this.b && this.qa && (E(this.T, se(this, "Aborting")), this.qa = !1, this.Ca = !0, this.b.abort(), this.Ca = !1, this.dispatchEvent("complete"), this.dispatchEvent("abort"), we(this));
  };

  F.prototype.Ta = function () {
    this.b && (this.qa && (this.qa = !1, this.Ca = !0, this.b.abort(), this.Ca = !1), we(this, !0));
    F.jd.Ta.call(this);
  };

  F.prototype.Kd = function () {
    this.isDisposed() || (this.Mc || this.dc || this.Ca ? xe(this) : this.Ve());
  };

  F.prototype.Ve = function () {
    xe(this);
  };

  var xe = function xe(a) {
    if (a.qa && "undefined" != typeof aa) if (a.yc[1] && 4 == ye(a) && 2 == ze(a)) E(a.T, se(a, "Local request error detected and ignored"));else if (a.dc && 4 == ye(a)) ke(a.Kd, 0, a);else if (a.dispatchEvent("readystatechange"), 4 == ye(a)) {
      E(a.T, se(a, "Request complete"));
      a.qa = !1;

      try {
        var b = ze(a),
            c;

        a: switch (b) {
          case 200:
          case 201:
          case 202:
          case 204:
          case 206:
          case 304:
          case 1223:
            c = !0;
            break a;

          default:
            c = !1;
        }

        var d;

        if (!(d = c)) {
          var e;

          if (e = 0 === b) {
            var f = String(a.fc).match(me)[1] || null;
            if (!f && l.self && l.self.location) var g = l.self.location.protocol,
                f = g.substr(0, g.length - 1);
            e = !qe.test(f ? f.toLowerCase() : "");
          }

          d = e;
        }

        if (d) a.dispatchEvent("complete"), a.dispatchEvent("success");else {
          var k;

          try {
            k = 2 < ye(a) ? a.b.statusText : "";
          } catch (n) {
            E(a.T, "Can not get status: " + n.message), k = "";
          }

          a.vb = k + " [" + ze(a) + "]";
          ve(a);
        }
      } finally {
        we(a);
      }
    }
  };

  F.prototype.Jd = function (a, b) {
    w("progress" === a.type, "goog.net.EventType.PROGRESS is of the same type as raw XHR progress.");
    this.dispatchEvent(Ae(a, "progress"));
    this.dispatchEvent(Ae(a, b ? "downloadprogress" : "uploadprogress"));
  };

  var Ae = function Ae(a, b) {
    return {
      type: b,
      lengthComputable: a.lengthComputable,
      loaded: a.loaded,
      total: a.total
    };
  },
      we = function we(a, b) {
    if (a.b) {
      te(a);
      var c = a.b,
          d = a.yc[0] ? ba : null;
      a.b = null;
      a.yc = null;
      b || a.dispatchEvent("ready");

      try {
        c.onreadystatechange = d;
      } catch (e) {
        (a = a.T) && a.log(de, "Problem encountered resetting onreadystatechange: " + e.message, void 0);
      }
    }
  },
      te = function te(a) {
    a.b && a.wc && (a.b.ontimeout = null);
    fa(a.tc) && (l.clearTimeout(a.tc), a.tc = null);
  },
      ye = function ye(a) {
    return a.b ? a.b.readyState : 0;
  },
      ze = function ze(a) {
    try {
      return 2 < ye(a) ? a.b.status : -1;
    } catch (b) {
      return -1;
    }
  },
      Be = function Be(a) {
    try {
      return a.b ? a.b.responseText : "";
    } catch (b) {
      return E(a.T, "Can not get responseText: " + b.message), "";
    }
  },
      se = function se(a, b) {
    return b + " [" + a.Gd + " " + a.fc + " " + ze(a) + "]";
  };

  var Ce = function Ce(a, b) {
    this.$ = this.La = this.da = "";
    this.ab = null;
    this.Ba = this.sa = "";
    this.R = this.Ke = !1;
    var c;
    a instanceof Ce ? (this.R = void 0 !== b ? b : a.R, De(this, a.da), c = a.La, G(this), this.La = c, Ee(this, a.$), Fe(this, a.ab), Ge(this, a.sa), He(this, a.V.clone()), a = a.Ba, G(this), this.Ba = a) : a && (c = String(a).match(me)) ? (this.R = !!b, De(this, c[1] || "", !0), a = c[2] || "", G(this), this.La = Ie(a), Ee(this, c[3] || "", !0), Fe(this, c[4]), Ge(this, c[5] || "", !0), He(this, c[6] || "", !0), a = c[7] || "", G(this), this.Ba = Ie(a)) : (this.R = !!b, this.V = new H(null, 0, this.R));
  };

  Ce.prototype.toString = function () {
    var a = [],
        b = this.da;
    b && a.push(Je(b, Ke, !0), ":");
    var c = this.$;
    if (c || "file" == b) a.push("//"), (b = this.La) && a.push(Je(b, Ke, !0), "@"), a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")), c = this.ab, null != c && a.push(":", String(c));
    if (c = this.sa) this.$ && "/" != c.charAt(0) && a.push("/"), a.push(Je(c, "/" == c.charAt(0) ? Le : Me, !0));
    (c = this.V.toString()) && a.push("?", c);
    (c = this.Ba) && a.push("#", Je(c, Ne));
    return a.join("");
  };

  Ce.prototype.resolve = function (a) {
    var b = this.clone(),
        c = !!a.da;
    c ? De(b, a.da) : c = !!a.La;

    if (c) {
      var d = a.La;
      G(b);
      b.La = d;
    } else c = !!a.$;

    c ? Ee(b, a.$) : c = null != a.ab;
    d = a.sa;
    if (c) Fe(b, a.ab);else if (c = !!a.sa) {
      if ("/" != d.charAt(0)) if (this.$ && !this.sa) d = "/" + d;else {
        var e = b.sa.lastIndexOf("/");
        -1 != e && (d = b.sa.substr(0, e + 1) + d);
      }
      e = d;
      if (".." == e || "." == e) d = "";else if (v(e, "./") || v(e, "/.")) {
        for (var d = 0 == e.lastIndexOf("/", 0), e = e.split("/"), f = [], g = 0; g < e.length;) {
          var k = e[g++];
          "." == k ? d && g == e.length && f.push("") : ".." == k ? ((1 < f.length || 1 == f.length && "" != f[0]) && f.pop(), d && g == e.length && f.push("")) : (f.push(k), d = !0);
        }

        d = f.join("/");
      } else d = e;
    }
    c ? Ge(b, d) : c = "" !== a.V.toString();
    c ? He(b, a.V.clone()) : c = !!a.Ba;
    c && (a = a.Ba, G(b), b.Ba = a);
    return b;
  };

  Ce.prototype.clone = function () {
    return new Ce(this);
  };

  var De = function De(a, b, c) {
    G(a);
    a.da = c ? Ie(b, !0) : b;
    a.da && (a.da = a.da.replace(/:$/, ""));
  },
      Ee = function Ee(a, b, c) {
    G(a);
    a.$ = c ? Ie(b, !0) : b;
  },
      Fe = function Fe(a, b) {
    G(a);

    if (b) {
      b = Number(b);
      if (isNaN(b) || 0 > b) throw Error("Bad port number " + b);
      a.ab = b;
    } else a.ab = null;
  },
      Ge = function Ge(a, b, c) {
    G(a);
    a.sa = c ? Ie(b, !0) : b;
  },
      He = function He(a, b, c) {
    G(a);
    b instanceof H ? (a.V = b, a.V.ed(a.R)) : (c || (b = Je(b, Oe)), a.V = new H(b, 0, a.R));
  },
      I = function I(a, b, c) {
    G(a);
    a.V.set(b, c);
  },
      Pe = function Pe(a, b) {
    return a.V.get(b);
  },
      Qe = function Qe(a, b) {
    G(a);
    a.V.remove(b);
  },
      G = function G(a) {
    if (a.Ke) throw Error("Tried to modify a read-only Uri");
  };

  Ce.prototype.ed = function (a) {
    this.R = a;
    this.V && this.V.ed(a);
    return this;
  };

  var Re = function Re(a) {
    return a instanceof Ce ? a.clone() : new Ce(a, void 0);
  },
      Se = function Se(a, b) {
    var c = new Ce(null, void 0);
    De(c, "https");
    a && Ee(c, a);
    b && Ge(c, b);
    return c;
  },
      Ie = function Ie(a, b) {
    return a ? b ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a) : "";
  },
      Je = function Je(a, b, c) {
    return p(a) ? (a = encodeURI(a).replace(b, Te), c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), a) : null;
  },
      Te = function Te(a) {
    a = a.charCodeAt(0);
    return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16);
  },
      Ke = /[#\/\?@]/g,
      Me = /[\#\?:]/g,
      Le = /[\#\?]/g,
      Oe = /[\#\?@]/g,
      Ne = /#/g,
      H = function H(a, b, c) {
    this.o = this.l = null;
    this.N = a || null;
    this.R = !!c;
  },
      Ue = function Ue(a) {
    a.l || (a.l = new Ud(), a.o = 0, a.N && ne(a.N, function (b, c) {
      a.add(decodeURIComponent(b.replace(/\+/g, " ")), c);
    }));
  },
      We = function We(a) {
    var b = Yd(a);
    if ("undefined" == typeof b) throw Error("Keys are undefined");
    var c = new H(null, 0, void 0);
    a = Xd(a);

    for (var d = 0; d < b.length; d++) {
      var e = b[d],
          f = a[d];
      da(f) ? Ve(c, e, f) : c.add(e, f);
    }

    return c;
  };

  h = H.prototype;

  h.add = function (a, b) {
    Ue(this);
    this.N = null;
    a = this.P(a);
    var c = this.l.get(a);
    c || this.l.set(a, c = []);
    c.push(b);
    this.o = ya(this.o) + 1;
    return this;
  };

  h.remove = function (a) {
    Ue(this);
    a = this.P(a);
    return this.l.pb(a) ? (this.N = null, this.o = ya(this.o) - this.l.get(a).length, this.l.remove(a)) : !1;
  };

  h.pb = function (a) {
    Ue(this);
    a = this.P(a);
    return this.l.pb(a);
  };

  h.ka = function () {
    Ue(this);

    for (var a = this.l.X(), b = this.l.ka(), c = [], d = 0; d < b.length; d++) {
      for (var e = a[d], f = 0; f < e.length; f++) {
        c.push(b[d]);
      }
    }

    return c;
  };

  h.X = function (a) {
    Ue(this);
    var b = [];
    if (p(a)) this.pb(a) && (b = Ma(b, this.l.get(this.P(a))));else {
      a = this.l.X();

      for (var c = 0; c < a.length; c++) {
        b = Ma(b, a[c]);
      }
    }
    return b;
  };

  h.set = function (a, b) {
    Ue(this);
    this.N = null;
    a = this.P(a);
    this.pb(a) && (this.o = ya(this.o) - this.l.get(a).length);
    this.l.set(a, [b]);
    this.o = ya(this.o) + 1;
    return this;
  };

  h.get = function (a, b) {
    a = a ? this.X(a) : [];
    return 0 < a.length ? String(a[0]) : b;
  };

  var Ve = function Ve(a, b, c) {
    a.remove(b);
    0 < c.length && (a.N = null, a.l.set(a.P(b), Na(c)), a.o = ya(a.o) + c.length);
  };

  H.prototype.toString = function () {
    if (this.N) return this.N;
    if (!this.l) return "";

    for (var a = [], b = this.l.ka(), c = 0; c < b.length; c++) {
      for (var d = b[c], e = encodeURIComponent(String(d)), d = this.X(d), f = 0; f < d.length; f++) {
        var g = e;
        "" !== d[f] && (g += "=" + encodeURIComponent(String(d[f])));
        a.push(g);
      }
    }

    return this.N = a.join("&");
  };

  H.prototype.clone = function () {
    var a = new H();
    a.N = this.N;
    this.l && (a.l = this.l.clone(), a.o = this.o);
    return a;
  };

  H.prototype.P = function (a) {
    a = String(a);
    this.R && (a = a.toLowerCase());
    return a;
  };

  H.prototype.ed = function (a) {
    a && !this.R && (Ue(this), this.N = null, this.l.forEach(function (a, c) {
      var b = c.toLowerCase();
      c != b && (this.remove(c), Ve(this, b, a));
    }, this));
    this.R = a;
  };

  var Xe = function Xe() {
    var a = J();
    return y && !!nb && 11 == nb || /Edge\/\d+/.test(a);
  },
      Ye = function Ye() {
    return l.window && l.window.location.href || "";
  },
      Ze = function Ze(a, b) {
    b = b || l.window;
    var c = "about:blank";
    a && (c = rc(uc(a)));
    b.location.href = c;
  },
      $e = function $e(a, b) {
    var c = [],
        d;

    for (d in a) {
      d in b ? _typeof(a[d]) != _typeof(b[d]) ? c.push(d) : da(a[d]) ? Sa(a[d], b[d]) || c.push(d) : "object" == _typeof(a[d]) && null != a[d] && null != b[d] ? 0 < $e(a[d], b[d]).length && c.push(d) : a[d] !== b[d] && c.push(d) : c.push(d);
    }

    for (d in b) {
      d in a || c.push(d);
    }

    return c;
  },
      bf = function bf() {
    var a;
    a = J();
    a = "Chrome" != af(a) ? null : (a = a.match(/\sChrome\/(\d+)/i)) && 2 == a.length ? parseInt(a[1], 10) : null;
    return a && 30 > a ? !1 : !y || !nb || 9 < nb;
  },
      cf = function cf(a) {
    a = (a || J()).toLowerCase();
    return a.match(/android/) || a.match(/webos/) || a.match(/iphone|ipad|ipod/) || a.match(/blackberry/) || a.match(/windows phone/) || a.match(/iemobile/) ? !0 : !1;
  },
      df = function df(a) {
    a = a || l.window;

    try {
      a.close();
    } catch (b) {}
  },
      ef = function ef(a, b, c) {
    var d = Math.floor(1E9 * Math.random()).toString();
    b = b || 500;
    c = c || 600;
    var e = (window.screen.availHeight - c) / 2,
        f = (window.screen.availWidth - b) / 2;
    b = {
      width: b,
      height: c,
      top: 0 < e ? e : 0,
      left: 0 < f ? f : 0,
      location: !0,
      resizable: !0,
      statusbar: !0,
      toolbar: !1
    };
    c = J().toLowerCase();
    d && (b.target = d, v(c, "crios/") && (b.target = "_blank"));
    "Firefox" == af(J()) && (a = a || "http://localhost", b.scrollbars = !0);
    var g;
    c = a || "about:blank";
    (d = b) || (d = {});
    a = window;
    b = c instanceof qc ? c : uc("undefined" != typeof c.href ? c.href : String(c));
    c = d.target || c.target;
    e = [];

    for (g in d) {
      switch (g) {
        case "width":
        case "height":
        case "top":
        case "left":
          e.push(g + "=" + d[g]);
          break;

        case "target":
        case "noreferrer":
          break;

        default:
          e.push(g + "=" + (d[g] ? 1 : 0));
      }
    }

    g = e.join(",");
    (x("iPhone") && !x("iPod") && !x("iPad") || x("iPad") || x("iPod")) && a.navigator && a.navigator.standalone && c && "_self" != c ? (g = a.document.createElement("A"), "undefined" != typeof HTMLAnchorElement && "undefined" != typeof Location && "undefined" != typeof Element && (e = g && (g instanceof HTMLAnchorElement || !(g instanceof Location || g instanceof Element)), f = ga(g) ? g.constructor.displayName || g.constructor.name || Object.prototype.toString.call(g) : void 0 === g ? "undefined" : null === g ? "null" : _typeof(g), w(e, "Argument is not a HTMLAnchorElement (or a non-Element mock); got: %s", f)), b = b instanceof qc ? b : uc(b), g.href = rc(b), g.setAttribute("target", c), d.noreferrer && g.setAttribute("rel", "noreferrer"), d = document.createEvent("MouseEvent"), d.initMouseEvent("click", !0, !0, a, 1), g.dispatchEvent(d), g = {}) : d.noreferrer ? (g = a.open("", c, g), d = rc(b), g && (eb && v(d, ";") && (d = "'" + d.replace(/'/g, "%27") + "'"), g.opener = null, a = mc("b/12014412, meta tag with sanitized URL"), ta.test(d) && (-1 != d.indexOf("&") && (d = d.replace(na, "&amp;")), -1 != d.indexOf("<") && (d = d.replace(oa, "&lt;")), -1 != d.indexOf(">") && (d = d.replace(pa, "&gt;")), -1 != d.indexOf('"') && (d = d.replace(qa, "&quot;")), -1 != d.indexOf("'") && (d = d.replace(ra, "&#39;")), -1 != d.indexOf("\x00") && (d = d.replace(sa, "&#0;"))), d = '<META HTTP-EQUIV="refresh" content="0; url=' + d + '">', za(lc(a), "must provide justification"), w(!/^[\s\xa0]*$/.test(lc(a)), "must provide non-empty justification"), g.document.write(Lc(new Kc().He(d))), g.document.close())) : g = a.open(rc(b), c, g);
    if (g) try {
      g.focus();
    } catch (k) {}
    return g;
  },
      ff = function ff(a) {
    return new B(function (b) {
      var c = function c() {
        le(2E3).then(function () {
          if (!a || a.closed) b();else return c();
        });
      };

      return c();
    });
  },
      gf = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,
      hf = function hf() {
    var a = null;
    return new B(function (b) {
      "complete" == l.document.readyState ? b() : (a = function a() {
        b();
      }, bc(window, "load", a));
    }).c(function (b) {
      dc(window, "load", a);
      throw b;
    });
  },
      kf = function kf() {
    return jf(void 0) ? hf().then(function () {
      return new B(function (a, b) {
        var c = l.document,
            d = setTimeout(function () {
          b(Error("Cordova framework is not ready."));
        }, 1E3);
        c.addEventListener("deviceready", function () {
          clearTimeout(d);
          a();
        }, !1);
      });
    }) : D(Error("Cordova must run in an Android or iOS file scheme."));
  },
      jf = function jf(a) {
    a = a || J();
    return !("file:" !== lf() || !a.toLowerCase().match(/iphone|ipad|ipod|android/));
  },
      mf = function mf() {
    var a = l.window;

    try {
      return !(!a || a == a.top);
    } catch (b) {
      return !1;
    }
  },
      K = function K() {
    return firebase.INTERNAL.hasOwnProperty("reactNative") ? "ReactNative" : firebase.INTERNAL.hasOwnProperty("node") ? "Node" : "Browser";
  },
      nf = function nf() {
    var a = K();
    return "ReactNative" === a || "Node" === a;
  },
      af = function af(a) {
    var b = a.toLowerCase();
    if (v(b, "opera/") || v(b, "opr/") || v(b, "opios/")) return "Opera";
    if (v(b, "iemobile")) return "IEMobile";
    if (v(b, "msie") || v(b, "trident/")) return "IE";
    if (v(b, "edge/")) return "Edge";
    if (v(b, "firefox/")) return "Firefox";
    if (v(b, "silk/")) return "Silk";
    if (v(b, "blackberry")) return "Blackberry";
    if (v(b, "webos")) return "Webos";
    if (!v(b, "safari/") || v(b, "chrome/") || v(b, "crios/") || v(b, "android")) {
      if (!v(b, "chrome/") && !v(b, "crios/") || v(b, "edge/")) {
        if (v(b, "android")) return "Android";
        if ((a = a.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/)) && 2 == a.length) return a[1];
      } else return "Chrome";
    } else return "Safari";
    return "Other";
  },
      of = function of(a) {
    var b = K();
    return ("Browser" === b ? af(J()) : b) + "/JsCore/" + a;
  },
      J = function J() {
    return l.navigator && l.navigator.userAgent || "";
  },
      L = function L(a, b) {
    a = a.split(".");
    b = b || l;

    for (var c = 0; c < a.length && "object" == _typeof(b) && null != b; c++) {
      b = b[a[c]];
    }

    c != a.length && (b = void 0);
    return b;
  },
      rf = function rf() {
    var a;
    if (a = (pf() || "chrome-extension:" === lf() || jf() && !1) && !nf()) a: {
      try {
        var b = l.localStorage,
            c = qf();

        if (b) {
          b.setItem(c, "1");
          b.removeItem(c);
          a = Xe() ? !!l.indexedDB : !0;
          break a;
        }
      } catch (d) {}

      a = !1;
    }
    return a;
  },
      pf = function pf() {
    return "http:" === lf() || "https:" === lf();
  },
      lf = function lf() {
    return l.location && l.location.protocol || null;
  },
      sf = function sf(a) {
    a = a || J();
    return cf(a) || "Firefox" == af(a) ? !1 : !0;
  },
      tf = function tf(a) {
    return "undefined" === typeof a ? null : xc(a);
  },
      uf = function uf(a) {
    var b = {},
        c;

    for (c in a) {
      a.hasOwnProperty(c) && null !== a[c] && void 0 !== a[c] && (b[c] = a[c]);
    }

    return b;
  },
      vf = function vf(a) {
    if (null !== a) return JSON.parse(a);
  },
      qf = function qf(a) {
    return a ? a : "" + Math.floor(1E9 * Math.random()).toString();
  },
      wf = function wf(a) {
    a = a || J();
    return "Safari" == af(a) || a.toLowerCase().match(/iphone|ipad|ipod/) ? !1 : !0;
  },
      xf = function xf() {
    var a = l.___jsl;
    if (a && a.H) for (var b in a.H) {
      if (a.H[b].r = a.H[b].r || [], a.H[b].L = a.H[b].L || [], a.H[b].r = a.H[b].L.concat(), a.CP) for (var c = 0; c < a.CP.length; c++) {
        a.CP[c] = null;
      }
    }
  },
      yf = function yf() {
    return l.navigator && "boolean" === typeof l.navigator.onLine ? l.navigator.onLine : !0;
  },
      zf = function zf(a, b, c, d) {
    if (a > b) throw Error("Short delay should be less than long delay!");
    this.hf = a;
    this.Pe = b;
    a = c || J();
    d = d || K();
    this.Je = cf(a) || "ReactNative" === d;
  };

  zf.prototype.get = function () {
    return this.Je ? this.Pe : this.hf;
  };

  var Af;

  try {
    var Bf = {};
    Object.defineProperty(Bf, "abcd", {
      configurable: !0,
      enumerable: !0,
      value: 1
    });
    Object.defineProperty(Bf, "abcd", {
      configurable: !0,
      enumerable: !0,
      value: 2
    });
    Af = 2 == Bf.abcd;
  } catch (a) {
    Af = !1;
  }

  var M = function M(a, b, c) {
    Af ? Object.defineProperty(a, b, {
      configurable: !0,
      enumerable: !0,
      value: c
    }) : a[b] = c;
  },
      Cf = function Cf(a, b) {
    if (b) for (var c in b) {
      b.hasOwnProperty(c) && M(a, c, b[c]);
    }
  },
      Df = function Df(a) {
    var b = {},
        c;

    for (c in a) {
      a.hasOwnProperty(c) && (b[c] = a[c]);
    }

    return b;
  },
      Ef = function Ef(a, b) {
    if (!b || !b.length) return !0;
    if (!a) return !1;

    for (var c = 0; c < b.length; c++) {
      var d = a[b[c]];
      if (void 0 === d || null === d || "" === d) return !1;
    }

    return !0;
  },
      Ff = function Ff(a) {
    var b = a;

    if ("object" == _typeof(a) && null != a) {
      var b = "length" in a ? [] : {},
          c;

      for (c in a) {
        M(b, c, Ff(a[c]));
      }
    }

    return b;
  };

  var Gf = "oauth_consumer_key oauth_nonce oauth_signature oauth_signature_method oauth_timestamp oauth_token oauth_version".split(" "),
      Hf = ["client_id", "response_type", "scope", "redirect_uri", "state"],
      If = {
    xf: {
      Ab: 500,
      zb: 600,
      providerId: "facebook.com",
      bd: Hf
    },
    yf: {
      Ab: 500,
      zb: 620,
      providerId: "github.com",
      bd: Hf
    },
    zf: {
      Ab: 515,
      zb: 680,
      providerId: "google.com",
      bd: Hf
    },
    Af: {
      Ab: 485,
      zb: 705,
      providerId: "twitter.com",
      bd: Gf
    }
  },
      Jf = function Jf(a) {
    for (var b in If) {
      if (If[b].providerId == a) return If[b];
    }

    return null;
  };

  var N = function N(a, b) {
    this.code = "auth/" + a;
    this.message = b || Kf[a] || "";
  };

  t(N, Error);

  N.prototype.C = function () {
    return {
      code: this.code,
      message: this.message
    };
  };

  N.prototype.toJSON = function () {
    return this.C();
  };

  var Lf = function Lf(a) {
    var b = a && a.code;
    return b ? new N(b.substring(5), a.message) : null;
  },
      Kf = {
    "argument-error": "",
    "app-not-authorized": "This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.",
    "app-not-installed": "The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.",
    "cordova-not-ready": "Cordova framework is not ready.",
    "cors-unsupported": "This browser is not supported.",
    "credential-already-in-use": "This credential is already associated with a different user account.",
    "custom-token-mismatch": "The custom token corresponds to a different audience.",
    "requires-recent-login": "This operation is sensitive and requires recent authentication. Log in again before retrying this request.",
    "dynamic-link-not-activated": "Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.",
    "email-already-in-use": "The email address is already in use by another account.",
    "expired-action-code": "The action code has expired. ",
    "cancelled-popup-request": "This operation has been cancelled due to another conflicting popup being opened.",
    "internal-error": "An internal error has occurred.",
    "invalid-user-token": "The user's credential is no longer valid. The user must sign in again.",
    "invalid-auth-event": "An internal error has occurred.",
    "invalid-cordova-configuration": "The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.",
    "invalid-custom-token": "The custom token format is incorrect. Please check the documentation.",
    "invalid-email": "The email address is badly formatted.",
    "invalid-api-key": "Your API key is invalid, please check you have copied it correctly.",
    "invalid-credential": "The supplied auth credential is malformed or has expired.",
    "invalid-message-payload": "The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.",
    "invalid-oauth-provider": "EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.",
    "unauthorized-domain": "This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",
    "invalid-action-code": "The action code is invalid. This can happen if the code is malformed, expired, or has already been used.",
    "wrong-password": "The password is invalid or the user does not have a password.",
    "invalid-recipient-email": "The email corresponding to this action failed to send as the provided recipient email address is invalid.",
    "invalid-sender": "The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.",
    "missing-iframe-start": "An internal error has occurred.",
    "auth-domain-config-required": "Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.",
    "app-deleted": "This instance of FirebaseApp has been deleted.",
    "account-exists-with-different-credential": "An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",
    "network-request-failed": "A network error (such as timeout, interrupted connection or unreachable host) has occurred.",
    "no-auth-event": "An internal error has occurred.",
    "no-such-provider": "User was not linked to an account with the given provider.",
    "operation-not-allowed": "The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.",
    "operation-not-supported-in-this-environment": 'This operation is not supported in the environment this application is running on. "location.protocol" must be http or https and web storage must be enabled.',
    "popup-blocked": "Unable to establish a connection with the popup. It may have been blocked by the browser.",
    "popup-closed-by-user": "The popup has been closed by the user before finalizing the operation.",
    "provider-already-linked": "User can only be linked to one identity for the given provider.",
    "redirect-cancelled-by-user": "The redirect operation has been cancelled by the user before finalizing.",
    "redirect-operation-pending": "A redirect sign-in operation is already pending.",
    timeout: "The operation has timed out.",
    "user-token-expired": "The user's credential is no longer valid. The user must sign in again.",
    "too-many-requests": "We have blocked all requests from this device due to unusual activity. Try again later.",
    "user-cancelled": "User did not grant your application the permissions it requested.",
    "user-not-found": "There is no user record corresponding to this identifier. The user may have been deleted.",
    "user-disabled": "The user account has been disabled by an administrator.",
    "user-mismatch": "The supplied credentials do not correspond to the previously signed in user.",
    "user-signed-out": "",
    "weak-password": "The password must be 6 characters long or more.",
    "web-storage-unsupported": "This browser is not supported or 3rd party cookies and data may be disabled."
  };

  var O = function O(a, b, c, d, e) {
    this.ga = a;
    this.F = b || null;
    this.mb = c || null;
    this.dd = d || null;
    this.O = e || null;

    if (this.mb || this.O) {
      if (this.mb && this.O) throw new N("invalid-auth-event");
      if (this.mb && !this.dd) throw new N("invalid-auth-event");
    } else throw new N("invalid-auth-event");
  };

  O.prototype.Wb = function () {
    return this.dd;
  };

  O.prototype.getError = function () {
    return this.O;
  };

  O.prototype.C = function () {
    return {
      type: this.ga,
      eventId: this.F,
      urlResponse: this.mb,
      sessionId: this.dd,
      error: this.O && this.O.C()
    };
  };

  var Mf = function Mf(a) {
    a = a || {};
    return a.type ? new O(a.type, a.eventId, a.urlResponse, a.sessionId, a.error && Lf(a.error)) : null;
  };

  var Nf = function Nf(a) {
    var b = "unauthorized-domain",
        c = void 0,
        d = Re(a);
    a = d.$;
    d = d.da;
    "http" != d && "https" != d ? b = "operation-not-supported-in-this-environment" : c = la("This domain (%s) is not authorized to run this operation. Add it to the OAuth redirect domains list in the Firebase console -> Auth section -> Sign in method tab.", a);
    N.call(this, b, c);
  };

  t(Nf, N);

  var Of = function Of(a) {
    this.Oe = a.sub;
    ka();
    this.Tb = a.email || null;
  };

  var Pf = function Pf(a, b) {
    if (b.idToken || b.accessToken) b.idToken && M(this, "idToken", b.idToken), b.accessToken && M(this, "accessToken", b.accessToken);else if (b.oauthToken && b.oauthTokenSecret) M(this, "accessToken", b.oauthToken), M(this, "secret", b.oauthTokenSecret);else throw new N("internal-error", "failed to construct a credential");
    M(this, "provider", a);
  };

  Pf.prototype.Vb = function (a) {
    return Qf(a, Rf(this));
  };

  Pf.prototype.Hd = function (a, b) {
    var c = Rf(this);
    c.idToken = b;
    return Sf(a, c);
  };

  var Rf = function Rf(a) {
    var b = {};
    a.idToken && (b.id_token = a.idToken);
    a.accessToken && (b.access_token = a.accessToken);
    a.secret && (b.oauth_token_secret = a.secret);
    b.providerId = a.provider;
    return {
      postBody: We(b).toString(),
      requestUri: "http://localhost"
    };
  };

  Pf.prototype.C = function () {
    var a = {
      provider: this.provider
    };
    this.idToken && (a.oauthIdToken = this.idToken);
    this.accessToken && (a.oauthAccessToken = this.accessToken);
    this.secret && (a.oauthTokenSecret = this.secret);
    return a;
  };

  var Tf = function Tf(a, b) {
    this.$e = b || [];
    Cf(this, {
      providerId: a,
      isOAuthProvider: !0
    });
    this.rd = {};
  };

  Tf.prototype.setCustomParameters = function (a) {
    this.rd = Ta(a);
    return this;
  };

  var P = function P(a) {
    Tf.call(this, a, Hf);
    this.cd = [];
  };

  t(P, Tf);

  P.prototype.addScope = function (a) {
    Ia(this.cd, a) || this.cd.push(a);
    return this;
  };

  P.prototype.yd = function () {
    return Na(this.cd);
  };

  P.prototype.credential = function (a, b) {
    if (!a && !b) throw new N("argument-error", "credential failed: must provide the ID token and/or the access token.");
    return new Pf(this.providerId, {
      idToken: a || null,
      accessToken: b || null
    });
  };

  var Uf = function Uf() {
    P.call(this, "facebook.com");
  };

  t(Uf, P);
  M(Uf, "PROVIDER_ID", "facebook.com");

  var Vf = function Vf(a) {
    if (!a) throw new N("argument-error", "credential failed: expected 1 argument (the OAuth access token).");
    return new Uf().credential(null, a);
  },
      Wf = function Wf() {
    P.call(this, "github.com");
  };

  t(Wf, P);
  M(Wf, "PROVIDER_ID", "github.com");

  var Xf = function Xf(a) {
    if (!a) throw new N("argument-error", "credential failed: expected 1 argument (the OAuth access token).");
    return new Wf().credential(null, a);
  },
      Yf = function Yf() {
    P.call(this, "google.com");
    this.addScope("profile");
  };

  t(Yf, P);
  M(Yf, "PROVIDER_ID", "google.com");

  var Zf = function Zf(a, b) {
    return new Yf().credential(a, b);
  },
      $f = function $f() {
    Tf.call(this, "twitter.com", Gf);
  };

  t($f, Tf);
  M($f, "PROVIDER_ID", "twitter.com");

  var ag = function ag(a, b) {
    if (!a || !b) throw new N("argument-error", "credential failed: expected 2 arguments (the OAuth access token and secret).");
    return new Pf("twitter.com", {
      oauthToken: a,
      oauthTokenSecret: b
    });
  },
      bg = function bg(a, b) {
    this.Tb = a;
    this.Vc = b;
    M(this, "provider", "password");
  };

  bg.prototype.Vb = function (a) {
    return Q(a, cg, {
      email: this.Tb,
      password: this.Vc
    });
  };

  bg.prototype.Hd = function (a, b) {
    return Q(a, dg, {
      idToken: b,
      email: this.Tb,
      password: this.Vc
    });
  };

  bg.prototype.C = function () {
    return {
      email: this.Tb,
      password: this.Vc
    };
  };

  var eg = function eg() {
    Cf(this, {
      providerId: "password",
      isOAuthProvider: !1
    });
  };

  Cf(eg, {
    PROVIDER_ID: "password"
  });

  var fg = function fg(a) {
    var b = a && a.providerId;
    if (!b || "password" === b) return null;
    var c = a && a.oauthAccessToken,
        d = a && a.oauthTokenSecret;
    a = a && a.oauthIdToken;

    try {
      switch (b) {
        case "google.com":
          return Zf(a, c);

        case "facebook.com":
          return Vf(c);

        case "github.com":
          return Xf(c);

        case "twitter.com":
          return ag(c, d);

        default:
          return new P(b).credential(a, c);
      }
    } catch (e) {
      return null;
    }
  },
      gg = function gg(a) {
    if (!a.isOAuthProvider) throw new N("invalid-oauth-provider");
  };

  var hg = function hg(a, b, c, d) {
    N.call(this, a, d);
    M(this, "email", b);
    M(this, "credential", c);
  };

  t(hg, N);

  hg.prototype.C = function () {
    var a = {
      code: this.code,
      message: this.message,
      email: this.email
    },
        b = this.credential && this.credential.C();
    b && (Va(a, b), a.providerId = b.provider, delete a.provider);
    return a;
  };

  hg.prototype.toJSON = function () {
    return this.C();
  };

  var ig = function ig(a) {
    if (a.code) {
      var b = a.code || "";
      0 == b.indexOf("auth/") && (b = b.substring(5));
      return a.email ? new hg(b, a.email, fg(a), a.message) : new N(b, a.message || void 0);
    }

    return null;
  };

  var jg = function jg(a) {
    this.wf = a;
  };

  t(jg, Bc);

  jg.prototype.Sb = function () {
    return new this.wf();
  };

  jg.prototype.Oc = function () {
    return {};
  };

  var R = function R(a, b, c) {
    var d;
    d = "Node" == K();
    d = l.XMLHttpRequest || d && firebase.INTERNAL.node && firebase.INTERNAL.node.XMLHttpRequest;
    if (!d) throw new N("internal-error", "The XMLHttpRequest compatibility library was not found.");
    this.j = a;
    a = b || {};
    this.df = a.secureTokenEndpoint || "https://securetoken.googleapis.com/v1/token";
    this.ef = a.secureTokenTimeout || kg;
    this.Qd = Ta(a.secureTokenHeaders || lg);
    this.te = a.firebaseEndpoint || "https://www.googleapis.com/identitytoolkit/v3/relyingparty/";
    this.ue = a.firebaseTimeout || mg;
    this.wd = Ta(a.firebaseHeaders || ng);
    c && (this.wd["X-Client-Version"] = c, this.Qd["X-Client-Version"] = c);
    this.ke = new Gc();
    this.vf = new jg(d);
  },
      og,
      kg = new zf(3E4, 6E4),
      lg = {
    "Content-Type": "application/x-www-form-urlencoded"
  },
      mg = new zf(3E4, 6E4),
      ng = {
    "Content-Type": "application/json"
  },
      qg = function qg(a, b, c, d, e, f, g) {
    yf() ? (bf() ? a = _r(a.gf, a) : (og || (og = new B(function (a, b) {
      pg(a, b);
    })), a = _r(a.ff, a)), a(b, c, d, e, f, g)) : c && c(null);
  };

  R.prototype.gf = function (a, b, c, d, e, f) {
    var g = "Node" == K(),
        k = nf() ? g ? new F(this.vf) : new F() : new F(this.ke),
        n;
    f && (k.kb = Math.max(0, f), n = setTimeout(function () {
      k.dispatchEvent("timeout");
    }, f));
    k.listen("complete", function () {
      n && clearTimeout(n);
      var a = null;

      try {
        a = JSON.parse(Be(this)) || null;
      } catch (Wa) {
        a = null;
      }

      b && b(a);
    });
    cc(k, "ready", function () {
      n && clearTimeout(n);
      this.Aa || (this.Aa = !0, this.Ta());
    });
    cc(k, "timeout", function () {
      n && clearTimeout(n);
      this.Aa || (this.Aa = !0, this.Ta());
      b && b(null);
    });
    k.send(a, c, d, e);
  };

  var Ed = "__fcb" + Math.floor(1E6 * Math.random()).toString(),
      pg = function pg(a, b) {
    ((window.gapi || {}).client || {}).request ? a() : (l[Ed] = function () {
      ((window.gapi || {}).client || {}).request ? a() : b(Error("CORS_UNSUPPORTED"));
    }, Gd(function () {
      b(Error("CORS_UNSUPPORTED"));
    }));
  };

  R.prototype.ff = function (a, b, c, d, e) {
    var f = this;
    og.then(function () {
      window.gapi.client.setApiKey(f.j);
      var g = window.gapi.auth.getToken();
      window.gapi.auth.setToken(null);
      window.gapi.client.request({
        path: a,
        method: c,
        body: d,
        headers: e,
        authType: "none",
        callback: function callback(a) {
          window.gapi.auth.setToken(g);
          b && b(a);
        }
      });
    }).c(function (a) {
      b && b({
        error: {
          message: a && a.message || "CORS_UNSUPPORTED"
        }
      });
    });
  };

  var sg = function sg(a, b) {
    return new B(function (c, d) {
      "refresh_token" == b.grant_type && b.refresh_token || "authorization_code" == b.grant_type && b.code ? qg(a, a.df + "?key=" + encodeURIComponent(a.j), function (a) {
        a ? a.error ? d(rg(a)) : a.access_token && a.refresh_token ? c(a) : d(new N("internal-error")) : d(new N("network-request-failed"));
      }, "POST", We(b).toString(), a.Qd, a.ef.get()) : d(new N("internal-error"));
    });
  },
      tg = function tg(a, b, c, d, e) {
    var f = Re(a.te + b);
    I(f, "key", a.j);
    e && I(f, "cb", ka().toString());
    var g = "GET" == c;
    if (g) for (var k in d) {
      d.hasOwnProperty(k) && I(f, k, d[k]);
    }
    return new B(function (b, e) {
      qg(a, f.toString(), function (a) {
        a ? a.error ? e(rg(a)) : b(a) : e(new N("network-request-failed"));
      }, c, g ? void 0 : xc(uf(d)), a.wd, a.ue.get());
    });
  },
      ug = function ug(a) {
    if (!ic.test(a.email)) throw new N("invalid-email");
  },
      vg = function vg(a) {
    "email" in a && ug(a);
  },
      xg = function xg(a, b) {
    return Q(a, wg, {
      identifier: b,
      continueUri: pf() ? Ye() : "http://localhost"
    }).then(function (a) {
      return a.allProviders || [];
    });
  },
      zg = function zg(a) {
    return Q(a, yg, {}).then(function (a) {
      return a.authorizedDomains || [];
    });
  },
      Ag = function Ag(a) {
    if (!a.idToken) throw new N("internal-error");
  };

  R.prototype.signInAnonymously = function () {
    return Q(this, Bg, {});
  };

  R.prototype.updateEmail = function (a, b) {
    return Q(this, Cg, {
      idToken: a,
      email: b
    });
  };

  R.prototype.updatePassword = function (a, b) {
    return Q(this, dg, {
      idToken: a,
      password: b
    });
  };

  var Dg = {
    displayName: "DISPLAY_NAME",
    photoUrl: "PHOTO_URL"
  };

  R.prototype.updateProfile = function (a, b) {
    var c = {
      idToken: a
    },
        d = [];
    Oa(Dg, function (a, f) {
      var e = b[f];
      null === e ? d.push(a) : f in b && (c[f] = e);
    });
    d.length && (c.deleteAttribute = d);
    return Q(this, Cg, c);
  };

  R.prototype.sendPasswordResetEmail = function (a) {
    return Q(this, Eg, {
      requestType: "PASSWORD_RESET",
      email: a
    });
  };

  R.prototype.sendEmailVerification = function (a) {
    return Q(this, Fg, {
      requestType: "VERIFY_EMAIL",
      idToken: a
    });
  };

  var Hg = function Hg(a, b, c) {
    return Q(a, Gg, {
      idToken: b,
      deleteProvider: c
    });
  },
      Ig = function Ig(a) {
    if (!a.requestUri || !a.sessionId && !a.postBody) throw new N("internal-error");
  },
      Jg = function Jg(a) {
    var b = null;
    a.needConfirmation ? (a.code = "account-exists-with-different-credential", b = ig(a)) : "FEDERATED_USER_ID_ALREADY_LINKED" == a.errorMessage ? (a.code = "credential-already-in-use", b = ig(a)) : "EMAIL_EXISTS" == a.errorMessage && (a.code = "email-already-in-use", b = ig(a));
    if (b) throw b;
    if (!a.idToken) throw new N("internal-error");
  },
      Qf = function Qf(a, b) {
    b.returnIdpCredential = !0;
    return Q(a, Kg, b);
  },
      Sf = function Sf(a, b) {
    b.returnIdpCredential = !0;
    return Q(a, Lg, b);
  },
      Mg = function Mg(a) {
    if (!a.oobCode) throw new N("invalid-action-code");
  };

  R.prototype.confirmPasswordReset = function (a, b) {
    return Q(this, Ng, {
      oobCode: a,
      newPassword: b
    });
  };

  R.prototype.checkActionCode = function (a) {
    return Q(this, Og, {
      oobCode: a
    });
  };

  R.prototype.applyActionCode = function (a) {
    return Q(this, Pg, {
      oobCode: a
    });
  };

  var Pg = {
    endpoint: "setAccountInfo",
    K: Mg,
    jb: "email"
  },
      Og = {
    endpoint: "resetPassword",
    K: Mg,
    va: function va(a) {
      if (!a.email || !a.requestType) throw new N("internal-error");
    }
  },
      Qg = {
    endpoint: "signupNewUser",
    K: function K(a) {
      ug(a);
      if (!a.password) throw new N("weak-password");
    },
    va: Ag,
    wa: !0
  },
      wg = {
    endpoint: "createAuthUri"
  },
      Rg = {
    endpoint: "deleteAccount",
    ib: ["idToken"]
  },
      Gg = {
    endpoint: "setAccountInfo",
    ib: ["idToken", "deleteProvider"],
    K: function K(a) {
      if (!da(a.deleteProvider)) throw new N("internal-error");
    }
  },
      Sg = {
    endpoint: "getAccountInfo"
  },
      Fg = {
    endpoint: "getOobConfirmationCode",
    ib: ["idToken", "requestType"],
    K: function K(a) {
      if ("VERIFY_EMAIL" != a.requestType) throw new N("internal-error");
    },
    jb: "email"
  },
      Eg = {
    endpoint: "getOobConfirmationCode",
    ib: ["requestType"],
    K: function K(a) {
      if ("PASSWORD_RESET" != a.requestType) throw new N("internal-error");
      ug(a);
    },
    jb: "email"
  },
      yg = {
    je: !0,
    endpoint: "getProjectConfig",
    De: "GET"
  },
      Ng = {
    endpoint: "resetPassword",
    K: Mg,
    jb: "email"
  },
      Cg = {
    endpoint: "setAccountInfo",
    ib: ["idToken"],
    K: vg,
    wa: !0
  },
      dg = {
    endpoint: "setAccountInfo",
    ib: ["idToken"],
    K: function K(a) {
      vg(a);
      if (!a.password) throw new N("weak-password");
    },
    va: Ag,
    wa: !0
  },
      Bg = {
    endpoint: "signupNewUser",
    va: Ag,
    wa: !0
  },
      Kg = {
    endpoint: "verifyAssertion",
    K: Ig,
    va: Jg,
    wa: !0
  },
      Lg = {
    endpoint: "verifyAssertion",
    K: function K(a) {
      Ig(a);
      if (!a.idToken) throw new N("internal-error");
    },
    va: Jg,
    wa: !0
  },
      Tg = {
    endpoint: "verifyCustomToken",
    K: function K(a) {
      if (!a.token) throw new N("invalid-custom-token");
    },
    va: Ag,
    wa: !0
  },
      cg = {
    endpoint: "verifyPassword",
    K: function K(a) {
      ug(a);
      if (!a.password) throw new N("wrong-password");
    },
    va: Ag,
    wa: !0
  },
      Q = function Q(a, b, c) {
    if (!Ef(c, b.ib)) return D(new N("internal-error"));
    var d = b.De || "POST",
        e;
    return C(c).then(b.K).then(function () {
      b.wa && (c.returnSecureToken = !0);
      return tg(a, b.endpoint, d, c, b.je || !1);
    }).then(function (a) {
      return e = a;
    }).then(b.va).then(function () {
      if (!b.jb) return e;
      if (!(b.jb in e)) throw new N("internal-error");
      return e[b.jb];
    });
  },
      rg = function rg(a) {
    var b, c;
    c = (a.error && a.error.errors && a.error.errors[0] || {}).reason || "";
    var d = {
      keyInvalid: "invalid-api-key",
      ipRefererBlocked: "app-not-authorized"
    };
    if (c = d[c] ? new N(d[c]) : null) return c;
    c = a.error && a.error.message || "";
    d = {
      INVALID_CUSTOM_TOKEN: "invalid-custom-token",
      CREDENTIAL_MISMATCH: "custom-token-mismatch",
      MISSING_CUSTOM_TOKEN: "internal-error",
      INVALID_IDENTIFIER: "invalid-email",
      MISSING_CONTINUE_URI: "internal-error",
      INVALID_EMAIL: "invalid-email",
      INVALID_PASSWORD: "wrong-password",
      USER_DISABLED: "user-disabled",
      MISSING_PASSWORD: "internal-error",
      EMAIL_EXISTS: "email-already-in-use",
      PASSWORD_LOGIN_DISABLED: "operation-not-allowed",
      INVALID_IDP_RESPONSE: "invalid-credential",
      FEDERATED_USER_ID_ALREADY_LINKED: "credential-already-in-use",
      INVALID_MESSAGE_PAYLOAD: "invalid-message-payload",
      INVALID_RECIPIENT_EMAIL: "invalid-recipient-email",
      INVALID_SENDER: "invalid-sender",
      EMAIL_NOT_FOUND: "user-not-found",
      EXPIRED_OOB_CODE: "expired-action-code",
      INVALID_OOB_CODE: "invalid-action-code",
      MISSING_OOB_CODE: "internal-error",
      CREDENTIAL_TOO_OLD_LOGIN_AGAIN: "requires-recent-login",
      INVALID_ID_TOKEN: "invalid-user-token",
      TOKEN_EXPIRED: "user-token-expired",
      USER_NOT_FOUND: "user-token-expired",
      CORS_UNSUPPORTED: "cors-unsupported",
      DYNAMIC_LINK_NOT_ACTIVATED: "dynamic-link-not-activated",
      TOO_MANY_ATTEMPTS_TRY_LATER: "too-many-requests",
      WEAK_PASSWORD: "weak-password",
      OPERATION_NOT_ALLOWED: "operation-not-allowed",
      USER_CANCELLED: "user-cancelled"
    };
    b = (b = c.match(/^[^\s]+\s*:\s*(.*)$/)) && 1 < b.length ? b[1] : void 0;

    for (var e in d) {
      if (0 === c.indexOf(e)) return new N(d[e], b);
    }

    !b && a && (b = tf(a));
    return new N("internal-error", b);
  };

  var Ug = function Ug(a) {
    this.U = a;
  };

  Ug.prototype.value = function () {
    return this.U;
  };

  Ug.prototype.Td = function (a) {
    this.U.style = a;
    return this;
  };

  var Vg = function Vg(a) {
    this.U = a || {};
  };

  Vg.prototype.value = function () {
    return this.U;
  };

  Vg.prototype.Td = function (a) {
    this.U.style = a;
    return this;
  };

  var Xg = function Xg(a) {
    this.tf = a;
    this.bc = null;
    this.Tc = Wg(this);
  },
      Yg = function Yg(a) {
    var b = new Vg();
    b.U.where = document.body;
    b.U.url = a.tf;
    b.U.messageHandlersFilter = L("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER");
    b.U.attributes = b.U.attributes || {};
    new Ug(b.U.attributes).Td({
      position: "absolute",
      top: "-100px",
      width: "1px",
      height: "1px"
    });
    b.U.dontclear = !0;
    return b;
  },
      Wg = function Wg(a) {
    return Zg().then(function () {
      return new B(function (b, c) {
        L("gapi.iframes.getContext")().open(Yg(a).value(), function (d) {
          a.bc = d;
          a.bc.restyle({
            setHideOnLeave: !1
          });

          var e = setTimeout(function () {
            c(Error("Network Error"));
          }, $g.get()),
              f = function f() {
            clearTimeout(e);
            b();
          };

          d.ping(f).then(f, function () {
            c(Error("Network Error"));
          });
        });
      });
    });
  };

  Xg.prototype.sendMessage = function (a) {
    var b = this;
    return this.Tc.then(function () {
      return new B(function (c) {
        b.bc.send(a.type, a, c, L("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER"));
      });
    });
  };

  var ah = function ah(a, b) {
    a.Tc.then(function () {
      a.bc.register("authEvent", b, L("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER"));
    });
  },
      bh = new zf(3E4, 6E4),
      $g = new zf(5E3, 15E3),
      Zg = function Zg() {
    return new B(function (a, b) {
      if (yf()) {
        var c = function c() {
          xf();
          L("gapi.load")("gapi.iframes", {
            callback: a,
            ontimeout: function ontimeout() {
              xf();
              b(Error("Network Error"));
            },
            timeout: bh.get()
          });
        };

        if (L("gapi.iframes.Iframe")) a();else if (L("gapi.load")) c();else {
          var d = "__iframefcb" + Math.floor(1E6 * Math.random()).toString();

          l[d] = function () {
            L("gapi.load") ? c() : b(Error("Network Error"));
          };

          C(Dd("https://apis.google.com/js/api.js?onload=" + d)).c(function () {
            b(Error("Network Error"));
          });
        }
      } else b(Error("Network Error"));
    });
  };

  var ch = function ch(a, b, c) {
    this.v = a;
    this.j = b;
    this.B = c;
    this.Ma = null;
    this.Nb = Se(this.v, "/__/auth/iframe");
    I(this.Nb, "apiKey", this.j);
    I(this.Nb, "appName", this.B);
  };

  ch.prototype.setVersion = function (a) {
    this.Ma = a;
    return this;
  };

  ch.prototype.toString = function () {
    this.Ma ? I(this.Nb, "v", this.Ma) : Qe(this.Nb, "v");
    return this.Nb.toString();
  };

  var eh = function eh(a, b, c, d, e) {
    this.v = a;
    this.j = b;
    this.B = c;
    this.ie = d;
    this.Ma = this.F = this.$c = null;
    this.Db = e;
  };

  eh.prototype.setVersion = function (a) {
    this.Ma = a;
    return this;
  };

  eh.prototype.toString = function () {
    var a = Se(this.v, "/__/auth/handler");
    I(a, "apiKey", this.j);
    I(a, "appName", this.B);
    I(a, "authType", this.ie);

    if (this.Db.isOAuthProvider) {
      I(a, "providerId", this.Db.providerId);
      var b = this.Db,
          c = uf(b.rd),
          d;

      for (d in c) {
        c[d] = c[d].toString();
      }

      b = b.$e;
      c = Ta(c);

      for (d = 0; d < b.length; d++) {
        var e = b[d];
        e in c && delete c[e];
      }

      Ra(c) || I(a, "customParameters", tf(c));
    }

    "function" === typeof this.Db.yd && (b = this.Db.yd(), b.length && I(a, "scopes", b.join(",")));
    this.$c ? I(a, "redirectUrl", this.$c) : Qe(a, "redirectUrl");
    this.F ? I(a, "eventId", this.F) : Qe(a, "eventId");
    this.Ma ? I(a, "v", this.Ma) : Qe(a, "v");
    if (this.Ob) for (var f in this.Ob) {
      this.Ob.hasOwnProperty(f) && !Pe(a, f) && I(a, f, this.Ob[f]);
    }
    return a.toString();
  };

  var fh = function fh(a, b, c, d) {
    this.v = a;
    this.j = b;
    this.B = c;
    this.we = (this.za = d || null) ? of(this.za) : null;
    d = this.za;
    this.Ee = new ch(a, b, c).setVersion(d).toString();
    this.ia = [];
    this.g = new R(b, null, this.we);
    this.ec = this.ra = null;
  },
      gh = function gh(a) {
    var b = Ye();
    return zg(a).then(function (a) {
      a: {
        for (var c = Re(b), e = c.da, c = c.$, f = 0; f < a.length; f++) {
          var g;
          var k = a[f];
          g = c;
          var n = e;
          0 == k.indexOf("chrome-extension://") ? g = Re(k).$ == g && "chrome-extension" == n : "http" != n && "https" != n ? g = !1 : gf.test(k) ? g = g == k : (k = k.split(".").join("\\."), g = new RegExp("^(.+\\." + k + "|" + k + ")$", "i").test(g));

          if (g) {
            a = !0;
            break a;
          }
        }

        a = !1;
      }

      if (!a) throw new Nf(Ye());
    });
  };

  h = fh.prototype;

  h.ub = function () {
    if (this.ec) return this.ec;
    var a = this;
    return this.ec = hf().then(function () {
      a.ac = new Xg(a.Ee);
      hh(a);
    });
  };

  h.Ib = function (a, b, c) {
    var d = new N("popup-closed-by-user"),
        e = new N("web-storage-unsupported"),
        f = this,
        g = !1;
    return this.Da().then(function () {
      ih(f).then(function (c) {
        c || (a && df(a), b(e), g = !0);
      });
    }).c(function () {}).then(function () {
      if (!g) return ff(a);
    }).then(function () {
      if (!g) return le(c).then(function () {
        b(d);
      });
    });
  };

  h.Ud = function () {
    var a = J();
    return !sf(a) && !wf(a);
  };

  h.Bd = function () {
    return !1;
  };

  h.Bb = function (a, b, c, d, e, f, g) {
    if (!a) return D(new N("popup-blocked"));
    if (g && !sf()) return this.Da().c(function (b) {
      df(a);
      e(b);
    }), d(), C();
    this.ra || (this.ra = gh(this.g));
    var k = this;
    return this.ra.then(function () {
      var b = k.Da().c(function (b) {
        df(a);
        e(b);
        throw b;
      });
      d();
      return b;
    }).then(function () {
      gg(c);

      if (!g) {
        var d = jh(k.v, k.j, k.B, b, c, null, f, k.za);
        Ze(d, a);
      }
    }).c(function (a) {
      "auth/network-request-failed" == a.code && (k.ra = null);
      throw a;
    });
  };

  h.Cb = function (a, b, c) {
    this.ra || (this.ra = gh(this.g));
    var d = this;
    return this.ra.then(function () {
      gg(b);
      var e = jh(d.v, d.j, d.B, a, b, Ye(), c, d.za);
      Ze(e);
    });
  };

  h.Da = function () {
    var a = this;
    return this.ub().then(function () {
      return a.ac.Tc;
    }).c(function () {
      a.ra = null;
      throw new N("network-request-failed");
    });
  };

  h.Xd = function () {
    return !0;
  };

  var jh = function jh(a, b, c, d, e, f, g, k, n) {
    a = new eh(a, b, c, d, e);
    a.$c = f;
    a.F = g;
    f = a.setVersion(k);
    f.Ob = Ta(n || null);
    return f.toString();
  },
      hh = function hh(a) {
    if (!a.ac) throw Error("IfcHandler must be initialized!");
    ah(a.ac, function (b) {
      var c = {};

      if (b && b.authEvent) {
        var d = !1;
        b = Mf(b.authEvent);

        for (c = 0; c < a.ia.length; c++) {
          d = a.ia[c](b) || d;
        }

        c = {};
        c.status = d ? "ACK" : "ERROR";
        return C(c);
      }

      c.status = "ERROR";
      return C(c);
    });
  },
      ih = function ih(a) {
    var b = {
      type: "webStorageSupport"
    };
    return a.ub().then(function () {
      return a.ac.sendMessage(b);
    }).then(function (a) {
      if (a && a.length && "undefined" !== typeof a[0].webStorageSupport) return a[0].webStorageSupport;
      throw Error();
    });
  };

  fh.prototype.Oa = function (a) {
    this.ia.push(a);
  };

  fh.prototype.Gb = function (a) {
    La(this.ia, function (b) {
      return b == a;
    });
  };

  var kh = function kh(a) {
    this.A = a || firebase.INTERNAL.reactNative && firebase.INTERNAL.reactNative.AsyncStorage;
    if (!this.A) throw new N("internal-error", "The React Native compatibility library was not found.");
  };

  h = kh.prototype;

  h.get = function (a) {
    return C(this.A.getItem(a)).then(function (a) {
      return a && vf(a);
    });
  };

  h.set = function (a, b) {
    return C(this.A.setItem(a, tf(b)));
  };

  h.remove = function (a) {
    return C(this.A.removeItem(a));
  };

  h.Pa = function () {};

  h.Ja = function () {};

  var lh = function lh() {
    this.A = {};
  };

  h = lh.prototype;

  h.get = function (a) {
    return C(this.A[a]);
  };

  h.set = function (a, b) {
    this.A[a] = b;
    return C();
  };

  h.remove = function (a) {
    delete this.A[a];
    return C();
  };

  h.Pa = function () {};

  h.Ja = function () {};

  var nh = function nh() {
    if (!mh()) {
      if ("Node" == K()) throw new N("internal-error", "The LocalStorage compatibility library was not found.");
      throw new N("web-storage-unsupported");
    }

    this.A = l.localStorage || firebase.INTERNAL.node.localStorage;
  },
      mh = function mh() {
    var a = "Node" == K(),
        a = l.localStorage || a && firebase.INTERNAL.node && firebase.INTERNAL.node.localStorage;
    if (!a) return !1;

    try {
      return a.setItem("__sak", "1"), a.removeItem("__sak"), !0;
    } catch (b) {
      return !1;
    }
  };

  h = nh.prototype;

  h.get = function (a) {
    var b = this;
    return C().then(function () {
      var c = b.A.getItem(a);
      return vf(c);
    });
  };

  h.set = function (a, b) {
    var c = this;
    return C().then(function () {
      var d = tf(b);
      null === d ? c.remove(a) : c.A.setItem(a, d);
    });
  };

  h.remove = function (a) {
    var b = this;
    return C().then(function () {
      b.A.removeItem(a);
    });
  };

  h.Pa = function (a) {
    l.window && Vb(l.window, "storage", a);
  };

  h.Ja = function (a) {
    l.window && dc(l.window, "storage", a);
  };

  var oh = function oh() {
    this.A = {};
  };

  h = oh.prototype;

  h.get = function () {
    return C(null);
  };

  h.set = function () {
    return C();
  };

  h.remove = function () {
    return C();
  };

  h.Pa = function () {};

  h.Ja = function () {};

  var qh = function qh() {
    if (!ph()) {
      if ("Node" == K()) throw new N("internal-error", "The SessionStorage compatibility library was not found.");
      throw new N("web-storage-unsupported");
    }

    this.A = l.sessionStorage || firebase.INTERNAL.node.sessionStorage;
  },
      ph = function ph() {
    var a = "Node" == K(),
        a = l.sessionStorage || a && firebase.INTERNAL.node && firebase.INTERNAL.node.sessionStorage;
    if (!a) return !1;

    try {
      return a.setItem("__sak", "1"), a.removeItem("__sak"), !0;
    } catch (b) {
      return !1;
    }
  };

  h = qh.prototype;

  h.get = function (a) {
    var b = this;
    return C().then(function () {
      var c = b.A.getItem(a);
      return vf(c);
    });
  };

  h.set = function (a, b) {
    var c = this;
    return C().then(function () {
      var d = tf(b);
      null === d ? c.remove(a) : c.A.setItem(a, d);
    });
  };

  h.remove = function (a) {
    var b = this;
    return C().then(function () {
      b.A.removeItem(a);
    });
  };

  h.Pa = function () {};

  h.Ja = function () {};

  var rh = function rh(a, b, c, d, e, f) {
    if (!window.indexedDB) throw new N("web-storage-unsupported");
    this.me = a;
    this.Sc = b;
    this.Fc = c;
    this.ae = d;
    this.nb = e;
    this.Y = {};
    this.Jb = [];
    this.xb = 0;
    this.Fe = f || l.indexedDB;
  },
      sh,
      th = function th(a) {
    return new B(function (b, c) {
      var d = a.Fe.open(a.me, a.nb);

      d.onerror = function (a) {
        c(Error(a.target.errorCode));
      };

      d.onupgradeneeded = function (b) {
        b = b.target.result;

        try {
          b.createObjectStore(a.Sc, {
            keyPath: a.Fc
          });
        } catch (f) {
          c(f);
        }
      };

      d.onsuccess = function (a) {
        b(a.target.result);
      };
    });
  },
      uh = function uh(a) {
    a.Ed || (a.Ed = th(a));
    return a.Ed;
  },
      vh = function vh(a, b) {
    return b.objectStore(a.Sc);
  },
      wh = function wh(a, b, c) {
    return b.transaction([a.Sc], c ? "readwrite" : "readonly");
  },
      xh = function xh(a) {
    return new B(function (b, c) {
      a.onsuccess = function (a) {
        a && a.target ? b(a.target.result) : b();
      };

      a.onerror = function (a) {
        c(Error(a.target.errorCode));
      };
    });
  };

  h = rh.prototype;

  h.set = function (a, b) {
    var c = !1,
        d,
        e = this;
    return md(uh(this).then(function (b) {
      d = b;
      b = vh(e, wh(e, d, !0));
      return xh(b.get(a));
    }).then(function (f) {
      var g = vh(e, wh(e, d, !0));
      if (f) return f.value = b, xh(g.put(f));
      e.xb++;
      c = !0;
      f = {};
      f[e.Fc] = a;
      f[e.ae] = b;
      return xh(g.add(f));
    }).then(function () {
      e.Y[a] = b;
    }), function () {
      c && e.xb--;
    });
  };

  h.get = function (a) {
    var b = this;
    return uh(this).then(function (c) {
      return xh(vh(b, wh(b, c, !1)).get(a));
    }).then(function (a) {
      return a && a.value;
    });
  };

  h.remove = function (a) {
    var b = !1,
        c = this;
    return md(uh(this).then(function (d) {
      b = !0;
      c.xb++;
      return xh(vh(c, wh(c, d, !0))["delete"](a));
    }).then(function () {
      delete c.Y[a];
    }), function () {
      b && c.xb--;
    });
  };

  h.kf = function () {
    var a = this;
    return uh(this).then(function (b) {
      var c = vh(a, wh(a, b, !1));
      return c.getAll ? xh(c.getAll()) : new B(function (a, b) {
        var d = [],
            e = c.openCursor();

        e.onsuccess = function (b) {
          (b = b.target.result) ? (d.push(b.value), b["continue"]()) : a(d);
        };

        e.onerror = function (a) {
          b(Error(a.target.errorCode));
        };
      });
    }).then(function (b) {
      var c = {},
          d = [];

      if (0 == a.xb) {
        for (d = 0; d < b.length; d++) {
          c[b[d][a.Fc]] = b[d][a.ae];
        }

        d = $e(a.Y, c);
        a.Y = c;
      }

      return d;
    });
  };

  h.Pa = function (a) {
    0 == this.Jb.length && this.gd();
    this.Jb.push(a);
  };

  h.Ja = function (a) {
    La(this.Jb, function (b) {
      return b == a;
    });
    0 == this.Jb.length && this.qc();
  };

  h.gd = function () {
    var a = this;
    this.qc();

    var b = function b() {
      a.Wc = le(800).then(_r(a.kf, a)).then(function (b) {
        0 < b.length && Ca(a.Jb, function (a) {
          a(b);
        });
      }).then(b).c(function (a) {
        "STOP_EVENT" != a.message && b();
      });
      return a.Wc;
    };

    b();
  };

  h.qc = function () {
    this.Wc && this.Wc.cancel("STOP_EVENT");
  };

  var Bh = function Bh() {
    this.td = {
      Browser: yh,
      Node: zh,
      ReactNative: Ah
    }[K()];
  },
      Ch,
      yh = {
    I: nh,
    kd: qh
  },
      zh = {
    I: nh,
    kd: qh
  },
      Ah = {
    I: kh,
    kd: oh
  };

  var Dh = function Dh(a) {
    var b = {},
        c = a.email,
        d = a.newEmail;
    a = a.requestType;
    if (!c || !a) throw Error("Invalid provider user info!");
    b.fromEmail = d || null;
    b.email = c;
    M(this, "operation", a);
    M(this, "data", Ff(b));
  };

  var Eh = "First Second Third Fourth Fifth Sixth Seventh Eighth Ninth".split(" "),
      S = function S(a, b) {
    return {
      name: a || "",
      fa: "a valid string",
      optional: !!b,
      ha: p
    };
  },
      Fh = function Fh(a) {
    return {
      name: a || "",
      fa: "a valid object",
      optional: !1,
      ha: ga
    };
  },
      Gh = function Gh(a, b) {
    return {
      name: a || "",
      fa: "a function",
      optional: !!b,
      ha: q
    };
  },
      Hh = function Hh() {
    return {
      name: "",
      fa: "null",
      optional: !1,
      ha: ca
    };
  },
      Ih = function Ih() {
    return {
      name: "credential",
      fa: "a valid credential",
      optional: !1,
      ha: function ha(a) {
        return !(!a || !a.Vb);
      }
    };
  },
      Jh = function Jh() {
    return {
      name: "authProvider",
      fa: "a valid Auth provider",
      optional: !1,
      ha: function ha(a) {
        return !!(a && a.providerId && a.hasOwnProperty && a.hasOwnProperty("isOAuthProvider"));
      }
    };
  },
      Kh = function Kh(a, b, c, d) {
    return {
      name: c || "",
      fa: a.fa + " or " + b.fa,
      optional: !!d,
      ha: function ha(c) {
        return a.ha(c) || b.ha(c);
      }
    };
  };

  var T = function T(a, b) {
    for (var c in b) {
      var d = b[c].name;
      a[d] = Lh(d, a[c], b[c].a);
    }
  },
      U = function U(a, b, c, d) {
    a[b] = Lh(b, c, d);
  },
      Lh = function Lh(a, b, c) {
    if (!c) return b;
    var d = Mh(a);

    a = function a() {
      var a = Array.prototype.slice.call(arguments),
          e;

      a: {
        e = Array.prototype.slice.call(a);
        var k;
        k = 0;

        for (var n = !1, A = 0; A < c.length; A++) {
          if (c[A].optional) n = !0;else {
            if (n) throw new N("internal-error", "Argument validator encountered a required argument after an optional argument.");
            k++;
          }
        }

        n = c.length;
        if (e.length < k || n < e.length) e = "Expected " + (k == n ? 1 == k ? "1 argument" : k + " arguments" : k + "-" + n + " arguments") + " but got " + e.length + ".";else {
          for (k = 0; k < e.length; k++) {
            if (n = c[k].optional && void 0 === e[k], !c[k].ha(e[k]) && !n) {
              e = c[k];
              if (0 > k || k >= Eh.length) throw new N("internal-error", "Argument validator received an unsupported number of arguments.");
              e = Eh[k] + " argument " + (e.name ? '"' + e.name + '" ' : "") + "must be " + e.fa + ".";
              break a;
            }
          }

          e = null;
        }
      }

      if (e) throw new N("argument-error", d + " failed: " + e);
      return b.apply(this, a);
    };

    for (var e in b) {
      a[e] = b[e];
    }

    for (e in b.prototype) {
      a.prototype[e] = b.prototype[e];
    }

    return a;
  },
      Mh = function Mh(a) {
    a = a.split(".");
    return a[a.length - 1];
  };

  var Nh = function Nh(a, b, c, d) {
    this.Se = a;
    this.Rd = b;
    this.bf = c;
    this.Hb = d;
    this.S = {};
    Ch || (Ch = new Bh());
    a = Ch;

    try {
      var e;
      Xe() ? (sh || (sh = new rh("firebaseLocalStorageDb", "firebaseLocalStorage", "fbase_key", "value", 1)), e = sh) : e = new a.td.I();
      this.Ha = e;
    } catch (f) {
      this.Ha = new lh(), this.Hb = !0;
    }

    try {
      this.sc = new a.td.kd();
    } catch (f) {
      this.sc = new lh();
    }

    this.hd = _r(this.Vd, this);
    this.Y = {};
  },
      Oh,
      Ph = function Ph() {
    Oh || (Oh = new Nh("firebase", ":", !wf(J()) && mf() ? !0 : !1, sf()));
    return Oh;
  };

  h = Nh.prototype;

  h.P = function (a, b) {
    return this.Se + this.Rd + a.name + (b ? this.Rd + b : "");
  };

  h.get = function (a, b) {
    return (a.I ? this.Ha : this.sc).get(this.P(a, b));
  };

  h.remove = function (a, b) {
    b = this.P(a, b);
    a.I && !this.Hb && (this.Y[b] = null);
    return (a.I ? this.Ha : this.sc).remove(b);
  };

  h.set = function (a, b, c) {
    var d = this.P(a, c),
        e = this,
        f = a.I ? this.Ha : this.sc;
    return f.set(d, b).then(function () {
      return f.get(d);
    }).then(function (b) {
      a.I && !this.Hb && (e.Y[d] = b);
    });
  };

  h.addListener = function (a, b, c) {
    a = this.P(a, b);
    this.Hb || (this.Y[a] = l.localStorage.getItem(a));
    Ra(this.S) && this.gd();
    this.S[a] || (this.S[a] = []);
    this.S[a].push(c);
  };

  h.removeListener = function (a, b, c) {
    a = this.P(a, b);
    this.S[a] && (La(this.S[a], function (a) {
      return a == c;
    }), 0 == this.S[a].length && delete this.S[a]);
    Ra(this.S) && this.qc();
  };

  h.gd = function () {
    this.Ha.Pa(this.hd);
    this.Hb || Xe() || Qh(this);
  };

  var Qh = function Qh(a) {
    Rh(a);
    a.Rc = setInterval(function () {
      for (var b in a.S) {
        var c = l.localStorage.getItem(b),
            d = a.Y[b];
        c != d && (a.Y[b] = c, c = new Kb({
          type: "storage",
          key: b,
          target: window,
          oldValue: d,
          newValue: c,
          Xe: !0
        }), a.Vd(c));
      }
    }, 1E3);
  },
      Rh = function Rh(a) {
    a.Rc && (clearInterval(a.Rc), a.Rc = null);
  };

  Nh.prototype.qc = function () {
    this.Ha.Ja(this.hd);
    Rh(this);
  };

  Nh.prototype.Vd = function (a) {
    if (a && a.xe) {
      var b = a.Ua.key;
      "undefined" !== typeof a.Ua.Xe ? this.Ha.Ja(this.hd) : Rh(this);

      if (this.bf) {
        var c = l.localStorage.getItem(b);
        a = a.Ua.newValue;
        a != c && (a ? l.localStorage.setItem(b, a) : a || l.localStorage.removeItem(b));
      }

      this.Y[b] = l.localStorage.getItem(b);
      this.nd(b);
    } else Ca(a, _r(this.nd, this));
  };

  Nh.prototype.nd = function (a) {
    this.S[a] && Ca(this.S[a], function (a) {
      a();
    });
  };

  var Sh = function Sh(a, b) {
    this.u = a;
    this.i = b || Ph();
  },
      Th = {
    name: "authEvent",
    I: !0
  },
      Uh = function Uh(a) {
    return a.i.get(Th, a.u).then(function (a) {
      return Mf(a);
    });
  };

  Sh.prototype.Oa = function (a) {
    this.i.addListener(Th, this.u, a);
  };

  Sh.prototype.Gb = function (a) {
    this.i.removeListener(Th, this.u, a);
  };

  var Vh = function Vh(a) {
    this.i = a || Ph();
  },
      Wh = {
    name: "sessionId",
    I: !1
  };

  Vh.prototype.Wb = function (a) {
    return this.i.get(Wh, a);
  };

  var Xh = function Xh(a, b, c, d, e, f) {
    this.v = a;
    this.j = b;
    this.B = c;
    this.za = d || null;
    this.Wd = b + ":" + c;
    this.cf = new Vh();
    this.xd = new Sh(this.Wd);
    this.Nc = null;
    this.ia = [];
    this.Ie = e || 500;
    this.Ze = f || 2E3;
    this.tb = this.ic = null;
  },
      Yh = function Yh(a) {
    return new N("invalid-cordova-configuration", a);
  };

  Xh.prototype.Da = function () {
    return this.Pc ? this.Pc : this.Pc = kf().then(function () {
      if ("function" !== typeof L("universalLinks.subscribe", l)) throw Yh("cordova-universal-links-plugin is not installed");
      if ("undefined" === typeof L("BuildInfo.packageName", l)) throw Yh("cordova-plugin-buildinfo is not installed");
      if ("function" !== typeof L("cordova.plugins.browsertab.openUrl", l)) throw Yh("cordova-plugin-browsertab is not installed");
      if ("function" !== typeof L("cordova.InAppBrowser.open", l)) throw Yh("cordova-plugin-inappbrowser is not installed");
    }, function () {
      throw new N("cordova-not-ready");
    });
  };

  var Zh = function Zh() {
    for (var a = 20, b = []; 0 < a;) {
      b.push("1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(Math.floor(62 * Math.random()))), a--;
    }

    return b.join("");
  },
      $h = function $h(a) {
    var b = new Eb();
    b.update(a);
    return pb(b.digest());
  };

  h = Xh.prototype;

  h.Ib = function (a, b) {
    b(new N("operation-not-supported-in-this-environment"));
    return C();
  };

  h.Bb = function () {
    return D(new N("operation-not-supported-in-this-environment"));
  };

  h.Xd = function () {
    return !1;
  };

  h.Ud = function () {
    return !0;
  };

  h.Bd = function () {
    return !0;
  };

  h.Cb = function (a, b, c) {
    if (this.ic) return D(new N("redirect-operation-pending"));
    var d = this,
        e = l.document,
        f = null,
        g = null,
        k = null,
        n = null;
    return this.ic = md(C().then(function () {
      gg(b);
      return ai(d);
    }).then(function () {
      return bi(d, a, b, c);
    }).then(function () {
      return new B(function (a, b) {
        g = function g() {
          var b = L("cordova.plugins.browsertab.close", l);
          a();
          "function" === typeof b && b();
          d.tb && "function" === typeof d.tb.close && (d.tb.close(), d.tb = null);
          return !1;
        };

        d.Oa(g);

        k = function k() {
          f || (f = le(d.Ze).then(function () {
            b(new N("redirect-cancelled-by-user"));
          }));
        };

        n = function n() {
          var a = l.document;
          (a && "undefined" !== typeof a.visibilityState ? "visible" == a.visibilityState : 1) && k();
        };

        e.addEventListener("resume", k, !1);
        J().toLowerCase().match(/android/) || e.addEventListener("visibilitychange", n, !1);
      }).c(function (a) {
        return ci(d).then(function () {
          throw a;
        });
      });
    }), function () {
      k && e.removeEventListener("resume", k, !1);
      n && e.removeEventListener("visibilitychange", n, !1);
      f && f.cancel();
      g && d.Gb(g);
      d.ic = null;
    });
  };

  var bi = function bi(a, b, c, d) {
    var e = Zh(),
        f = new O(b, d, null, e, new N("no-auth-event")),
        g = L("BuildInfo.packageName", l);
    if ("string" !== typeof g) throw new N("invalid-cordova-configuration");
    var k = L("BuildInfo.displayName", l),
        n = {};
    if (J().toLowerCase().match(/iphone|ipad|ipod/)) n.ibi = g;else if (J().toLowerCase().match(/android/)) n.apn = g;else return D(new N("operation-not-supported-in-this-environment"));
    k && (n.appDisplayName = k);
    e = $h(e);
    n.sessionId = e;
    var A = jh(a.v, a.j, a.B, b, c, null, d, a.za, n);
    return a.Da().then(function () {
      var b = a.Wd;
      return a.cf.i.set(Th, f.C(), b);
    }).then(function () {
      var b = L("cordova.plugins.browsertab.isAvailable", l);
      if ("function" !== typeof b) throw new N("invalid-cordova-configuration");
      var c = null;
      b(function (b) {
        if (b) {
          c = L("cordova.plugins.browsertab.openUrl", l);
          if ("function" !== typeof c) throw new N("invalid-cordova-configuration");
          c(A);
        } else {
          c = L("cordova.InAppBrowser.open", l);
          if ("function" !== typeof c) throw new N("invalid-cordova-configuration");
          b = c;
          var d;
          d = J();
          d = !(!d.match(/(iPad|iPhone|iPod).*OS 7_\d/i) && !d.match(/(iPad|iPhone|iPod).*OS 8_\d/i));
          a.tb = b(A, d ? "_blank" : "_system", "location=yes");
        }
      });
    });
  },
      di = function di(a, b) {
    for (var c = 0; c < a.ia.length; c++) {
      try {
        a.ia[c](b);
      } catch (d) {}
    }
  },
      ai = function ai(a) {
    a.Nc || (a.Nc = a.Da().then(function () {
      return new B(function (b) {
        var c = function c(d) {
          b(d);
          a.Gb(c);
          return !1;
        };

        a.Oa(c);
        ei(a);
      });
    }));
    return a.Nc;
  },
      ci = function ci(a) {
    var b = null;
    return Uh(a.xd).then(function (c) {
      b = c;
      c = a.xd;
      return c.i.remove(Th, c.u);
    }).then(function () {
      return b;
    });
  },
      ei = function ei(a) {
    var b = L("universalLinks.subscribe", l);
    if ("function" !== typeof b) throw new N("invalid-cordova-configuration");

    var c = new O("unknown", null, null, null, new N("no-auth-event")),
        d = !1,
        e = le(a.Ie).then(function () {
      return ci(a).then(function () {
        d || di(a, c);
      });
    }),
        f = function f(b) {
      d = !0;
      e && e.cancel();
      ci(a).then(function (d) {
        var e = c;

        if (d && b && b.url) {
          var e = null,
              f;
          f = b.url;
          var g = Re(f),
              k = Pe(g, "link"),
              n = Pe(Re(k), "link"),
              g = Pe(g, "deep_link_id");
          f = Pe(Re(g), "link") || g || n || k || f;
          -1 != f.indexOf("/__/auth/callback") && (e = Re(f), e = vf(Pe(e, "error") || null), e = (e = "object" === _typeof(e) ? Lf(e) : null) ? new O(d.ga, d.F, null, null, e) : new O(d.ga, d.F, f, d.Wb()));
          e = e || c;
        }

        di(a, e);
      });
    },
        g = l.handleOpenURL;

    l.handleOpenURL = function (a) {
      0 == a.indexOf(L("BuildInfo.packageName", l) + "://") && f({
        url: a
      });
      if ("function" === typeof g) try {
        g(a);
      } catch (n) {
        console.error(n);
      }
    };

    b(null, f);
  };

  Xh.prototype.Oa = function (a) {
    this.ia.push(a);
    ai(this).c(function () {});
  };

  Xh.prototype.Gb = function (a) {
    La(this.ia, function (b) {
      return b == a;
    });
  };

  var fi = function fi(a) {
    this.u = a;
    this.i = Ph();
  },
      gi = {
    name: "pendingRedirect",
    I: !1
  },
      hi = function hi(a) {
    return a.i.set(gi, "pending", a.u);
  },
      ii = function ii(a) {
    return a.i.remove(gi, a.u);
  },
      ji = function ji(a) {
    return a.i.get(gi, a.u).then(function (a) {
      return "pending" == a;
    });
  };

  var V = function V(a, b, c) {
    this.v = a;
    this.j = b;
    this.B = c;
    this.Kb = [];
    this.Za = !1;
    this.Bc = _r(this.Lc, this);
    this.cb = new ki(this);
    this.Ld = new li(this);
    this.yb = new fi(this.j + ":" + this.B);
    this.lb = {};
    this.lb.unknown = this.cb;
    this.lb.signInViaRedirect = this.cb;
    this.lb.linkViaRedirect = this.cb;
    this.lb.signInViaPopup = this.Ld;
    this.lb.linkViaPopup = this.Ld;
    this.G = mi(this.v, this.j, this.B);
  },
      mi = function mi(a, b, c) {
    var d = firebase.SDK_VERSION || null;
    return jf() ? new Xh(a, b, c, d) : new fh(a, b, c, d);
  };

  V.prototype.reset = function () {
    this.Za = !1;
    this.G.Gb(this.Bc);
    this.G = mi(this.v, this.j, this.B);
  };

  V.prototype.ub = function () {
    var a = this;
    this.Za || (this.Za = !0, this.G.Oa(this.Bc));
    var b = this.G;
    return this.G.Da().c(function (c) {
      a.G == b && a.reset();
      throw c;
    });
  };

  var pi = function pi(a) {
    a.G.Ud() && a.ub().c(function (b) {
      var c = new O("unknown", null, null, null, new N("operation-not-supported-in-this-environment"));
      ni(b) && a.Lc(c);
    });
    a.G.Bd() || oi(a.cb);
  };

  V.prototype.subscribe = function (a) {
    Ia(this.Kb, a) || this.Kb.push(a);

    if (!this.Za) {
      var b = this;
      ji(this.yb).then(function (a) {
        a ? ii(b.yb).then(function () {
          b.ub().c(function (a) {
            var c = new O("unknown", null, null, null, new N("operation-not-supported-in-this-environment"));
            ni(a) && b.Lc(c);
          });
        }) : pi(b);
      }).c(function () {
        pi(b);
      });
    }
  };

  V.prototype.unsubscribe = function (a) {
    La(this.Kb, function (b) {
      return b == a;
    });
  };

  V.prototype.Lc = function (a) {
    if (!a) throw new N("invalid-auth-event");

    for (var b = !1, c = 0; c < this.Kb.length; c++) {
      var d = this.Kb[c];

      if (d.od(a.ga, a.F)) {
        (b = this.lb[a.ga]) && b.Md(a, d);
        b = !0;
        break;
      }
    }

    oi(this.cb);
    return b;
  };

  var qi = new zf(2E3, 1E4),
      ri = new zf(3E4, 6E4);

  V.prototype.getRedirectResult = function () {
    return this.cb.getRedirectResult();
  };

  V.prototype.Bb = function (a, b, c, d, e) {
    var f = this;
    return this.G.Bb(a, b, c, function () {
      f.Za || (f.Za = !0, f.G.Oa(f.Bc));
    }, function () {
      f.reset();
    }, d, e);
  };

  var ni = function ni(a) {
    return a && "auth/cordova-not-ready" == a.code ? !0 : !1;
  };

  V.prototype.Cb = function (a, b, c) {
    var d = this,
        e;
    return hi(this.yb).then(function () {
      return d.G.Cb(a, b, c).c(function (a) {
        if (ni(a)) throw new N("operation-not-supported-in-this-environment");
        e = a;
        return ii(d.yb).then(function () {
          throw e;
        });
      }).then(function () {
        return d.G.Xd() ? new B(function () {}) : ii(d.yb).then(function () {
          return d.getRedirectResult();
        }).then(function () {}).c(function () {});
      });
    });
  };

  V.prototype.Ib = function (a, b, c, d) {
    return this.G.Ib(c, function (c) {
      a.Ka(b, null, c, d);
    }, qi.get());
  };

  var si = {},
      ti = function ti(a, b, c) {
    var d = b + ":" + c;
    si[d] || (si[d] = new V(a, b, c));
    return si[d];
  },
      ki = function ki(a) {
    this.i = a;
    this.gb = null;
    this.Fb = [];
    this.Eb = [];
    this.eb = null;
    this.Zc = !1;
  };

  ki.prototype.reset = function () {
    this.gb = null;
    this.eb && (this.eb.cancel(), this.eb = null);
  };

  ki.prototype.Md = function (a, b) {
    if (!a) return D(new N("invalid-auth-event"));
    this.reset();
    this.Zc = !0;
    var c = a.ga,
        d = a.F,
        e = a.getError() && "auth/web-storage-unsupported" == a.getError().code,
        f = a.getError() && "auth/operation-not-supported-in-this-environment" == a.getError().code;
    "unknown" != c || e || f ? a = a.O ? this.Xc(a, b) : b.qb(c, d) ? this.Yc(a, b) : D(new N("invalid-auth-event")) : (ui(this, !1, null, null), a = C());
    return a;
  };

  var oi = function oi(a) {
    a.Zc || (a.Zc = !0, ui(a, !1, null, null));
  };

  ki.prototype.Xc = function (a) {
    ui(this, !0, null, a.getError());
    return C();
  };

  ki.prototype.Yc = function (a, b) {
    var c = this,
        d = a.ga;
    b = b.qb(d, a.F);
    var e = a.mb;
    a = a.Wb();
    var f = "signInViaRedirect" == d || "linkViaRedirect" == d;
    return b(e, a).then(function (a) {
      ui(c, f, a, null);
    }).c(function (a) {
      ui(c, f, null, a);
    });
  };

  var vi = function vi(a, b) {
    a.gb = function () {
      return D(b);
    };

    if (a.Eb.length) for (var c = 0; c < a.Eb.length; c++) {
      a.Eb[c](b);
    }
  },
      wi = function wi(a, b) {
    a.gb = function () {
      return C(b);
    };

    if (a.Fb.length) for (var c = 0; c < a.Fb.length; c++) {
      a.Fb[c](b);
    }
  },
      ui = function ui(a, b, c, d) {
    b ? d ? vi(a, d) : wi(a, c) : wi(a, {
      user: null
    });
    a.Fb = [];
    a.Eb = [];
  };

  ki.prototype.getRedirectResult = function () {
    var a = this;
    return new B(function (b, c) {
      a.gb ? a.gb().then(b, c) : (a.Fb.push(b), a.Eb.push(c), xi(a));
    });
  };

  var xi = function xi(a) {
    var b = new N("timeout");
    a.eb && a.eb.cancel();
    a.eb = le(ri.get()).then(function () {
      a.gb || ui(a, !0, null, b);
    });
  },
      li = function li(a) {
    this.i = a;
  };

  li.prototype.Md = function (a, b) {
    if (!a) return D(new N("invalid-auth-event"));
    var c = a.ga,
        d = a.F;
    return a.O ? this.Xc(a, b) : b.qb(c, d) ? this.Yc(a, b) : D(new N("invalid-auth-event"));
  };

  li.prototype.Xc = function (a, b) {
    b.Ka(a.ga, null, a.getError(), a.F);
    return C();
  };

  li.prototype.Yc = function (a, b) {
    var c = a.F,
        d = a.ga,
        e = b.qb(d, c),
        f = a.mb;
    a = a.Wb();
    return e(f, a).then(function (a) {
      b.Ka(d, a, null, c);
    }).c(function (a) {
      b.Ka(d, null, a, c);
    });
  };

  var yi = function yi(a) {
    this.g = a;
    this.xa = this.W = null;
    this.Va = 0;
  };

  yi.prototype.C = function () {
    return {
      apiKey: this.g.j,
      refreshToken: this.W,
      accessToken: this.xa,
      expirationTime: this.Va
    };
  };

  var Ai = function Ai(a, b) {
    var c = b.idToken,
        d = b.refreshToken;
    b = zi(b.expiresIn);
    a.xa = c;
    a.Va = b;
    a.W = d;
  },
      zi = function zi(a) {
    return ka() + 1E3 * parseInt(a, 10);
  },
      Bi = function Bi(a, b) {
    return sg(a.g, b).then(function (b) {
      a.xa = b.access_token;
      a.Va = zi(b.expires_in);
      a.W = b.refresh_token;
      return {
        accessToken: a.xa,
        expirationTime: a.Va,
        refreshToken: a.W
      };
    }).c(function (b) {
      "auth/user-token-expired" == b.code && (a.W = null);
      throw b;
    });
  },
      Ci = function Ci(a) {
    return !(!a.xa || a.W);
  };

  yi.prototype.getToken = function (a) {
    a = !!a;
    return Ci(this) ? D(new N("user-token-expired")) : a || !this.xa || ka() > this.Va - 3E4 ? this.W ? Bi(this, {
      grant_type: "refresh_token",
      refresh_token: this.W
    }) : C(null) : C({
      accessToken: this.xa,
      expirationTime: this.Va,
      refreshToken: this.W
    });
  };

  var Di = function Di(a, b, c, d, e) {
    Cf(this, {
      uid: a,
      displayName: d || null,
      photoURL: e || null,
      email: c || null,
      providerId: b
    });
  },
      Ei = function Ei(a, b) {
    Jb.call(this, a);

    for (var c in b) {
      this[c] = b[c];
    }
  };

  t(Ei, Jb);

  var W = function W(a, b, c) {
    this.Z = [];
    this.j = a.apiKey;
    this.B = a.appName;
    this.v = a.authDomain || null;
    a = firebase.SDK_VERSION ? of(firebase.SDK_VERSION) : null;
    this.g = new R(this.j, null, a);
    this.ea = new yi(this.g);
    Fi(this, b.idToken);
    Ai(this.ea, b);
    M(this, "refreshToken", this.ea.W);
    Gi(this, c || {});
    Pd.call(this);
    this.jc = !1;
    this.v && rf() && (this.m = ti(this.v, this.j, this.B));
    this.pc = [];
    this.Ac = C();
  };

  t(W, Pd);

  W.prototype.ta = function (a, b) {
    var c = Array.prototype.slice.call(arguments, 1),
        d = this;
    return this.Ac = this.Ac.then(function () {
      return a.apply(d, c);
    }, function () {
      return a.apply(d, c);
    });
  };

  var Fi = function Fi(a, b) {
    a.Fd = b;
    M(a, "_lat", b);
  },
      Hi = function Hi(a, b) {
    La(a.pc, function (a) {
      return a == b;
    });
  },
      Ii = function Ii(a) {
    for (var b = [], c = 0; c < a.pc.length; c++) {
      b.push(a.pc[c](a));
    }

    return jd(b).then(function () {
      return a;
    });
  },
      Ji = function Ji(a) {
    a.m && !a.jc && (a.jc = !0, a.m.subscribe(a));
  },
      Gi = function Gi(a, b) {
    Cf(a, {
      uid: b.uid,
      displayName: b.displayName || null,
      photoURL: b.photoURL || null,
      email: b.email || null,
      emailVerified: b.emailVerified || !1,
      isAnonymous: b.isAnonymous || !1,
      providerData: []
    });
  };

  M(W.prototype, "providerId", "firebase");

  var Ki = function Ki() {},
      Li = function Li(a) {
    return C().then(function () {
      if (a.oe) throw new N("app-deleted");
    });
  },
      Mi = function Mi(a) {
    return Ea(a.providerData, function (a) {
      return a.providerId;
    });
  },
      Oi = function Oi(a, b) {
    b && (Ni(a, b.providerId), a.providerData.push(b));
  },
      Ni = function Ni(a, b) {
    La(a.providerData, function (a) {
      return a.providerId == b;
    });
  },
      Pi = function Pi(a, b, c) {
    ("uid" != b || c) && a.hasOwnProperty(b) && M(a, b, c);
  };

  W.prototype.copy = function (a) {
    var b = this;
    b != a && (Cf(this, {
      uid: a.uid,
      displayName: a.displayName,
      photoURL: a.photoURL,
      email: a.email,
      emailVerified: a.emailVerified,
      isAnonymous: a.isAnonymous,
      providerData: []
    }), Ca(a.providerData, function (a) {
      Oi(b, a);
    }), this.ea = a.ea, M(this, "refreshToken", this.ea.W));
  };

  W.prototype.reload = function () {
    var a = this;
    return Li(this).then(function () {
      return Qi(a).then(function () {
        return Ii(a);
      }).then(Ki);
    });
  };

  var Qi = function Qi(a) {
    return a.getToken().then(function (b) {
      var c = a.isAnonymous;
      return Ri(a, b).then(function () {
        c || Pi(a, "isAnonymous", !1);
        return b;
      }).c(function (b) {
        "auth/user-token-expired" == b.code && (a.dispatchEvent(new Ei("userDeleted")), Si(a));
        throw b;
      });
    });
  };

  W.prototype.getToken = function (a) {
    var b = this,
        c = Ci(this.ea);
    return Li(this).then(function () {
      return b.ea.getToken(a);
    }).then(function (a) {
      if (!a) throw new N("internal-error");
      a.accessToken != b.Fd && (Fi(b, a.accessToken), b.Ea());
      Pi(b, "refreshToken", a.refreshToken);
      return a.accessToken;
    }).c(function (a) {
      if ("auth/user-token-expired" == a.code && !c) return Ii(b).then(function () {
        Pi(b, "refreshToken", null);
        throw a;
      });
      throw a;
    });
  };

  var Ti = function Ti(a, b) {
    b.idToken && a.Fd != b.idToken && (Ai(a.ea, b), a.Ea(), Fi(a, b.idToken), Pi(a, "refreshToken", a.ea.W));
  };

  W.prototype.Ea = function () {
    this.dispatchEvent(new Ei("tokenChanged"));
  };

  var Ri = function Ri(a, b) {
    return Q(a.g, Sg, {
      idToken: b
    }).then(_r(a.We, a));
  };

  W.prototype.We = function (a) {
    a = a.users;
    if (!a || !a.length) throw new N("internal-error");
    a = a[0];
    Gi(this, {
      uid: a.localId,
      displayName: a.displayName,
      photoURL: a.photoUrl,
      email: a.email,
      emailVerified: !!a.emailVerified
    });

    for (var b = Ui(a), c = 0; c < b.length; c++) {
      Oi(this, b[c]);
    }

    Pi(this, "isAnonymous", !(this.email && a.passwordHash) && !(this.providerData && this.providerData.length));
  };

  var Ui = function Ui(a) {
    return (a = a.providerUserInfo) && a.length ? Ea(a, function (a) {
      return new Di(a.rawId, a.providerId, a.email, a.displayName, a.photoUrl);
    }) : [];
  };

  W.prototype.reauthenticate = function (a) {
    var b = this;
    return this.f(a.Vb(this.g).then(function (a) {
      var c;

      a: {
        var e = a.idToken.split(".");

        if (3 == e.length) {
          for (var e = e[1], f = (4 - e.length % 4) % 4, g = 0; g < f; g++) {
            e += ".";
          }

          try {
            var k = JSON.parse(tb(e));

            if (k.sub && k.iss && k.aud && k.exp) {
              c = new Of(k);
              break a;
            }
          } catch (n) {}
        }

        c = null;
      }

      if (!c || b.uid != c.Oe) throw new N("user-mismatch");
      Ti(b, a);
      return b.reload();
    }));
  };

  var Vi = function Vi(a, b) {
    return Qi(a).then(function () {
      if (Ia(Mi(a), b)) return Ii(a).then(function () {
        throw new N("provider-already-linked");
      });
    });
  };

  h = W.prototype;

  h.Me = function (a) {
    var b = this;
    return this.f(Vi(this, a.provider).then(function () {
      return b.getToken();
    }).then(function (c) {
      return a.Hd(b.g, c);
    }).then(_r(this.vd, this)));
  };

  h.link = function (a) {
    return this.ta(this.Me, a);
  };

  h.vd = function (a) {
    Ti(this, a);
    var b = this;
    return this.reload().then(function () {
      return b;
    });
  };

  h.qf = function (a) {
    var b = this;
    return this.f(this.getToken().then(function (c) {
      return b.g.updateEmail(c, a);
    }).then(function (a) {
      Ti(b, a);
      return b.reload();
    }));
  };

  h.updateEmail = function (a) {
    return this.ta(this.qf, a);
  };

  h.rf = function (a) {
    var b = this;
    return this.f(this.getToken().then(function (c) {
      return b.g.updatePassword(c, a);
    }).then(function (a) {
      Ti(b, a);
      return b.reload();
    }));
  };

  h.updatePassword = function (a) {
    return this.ta(this.rf, a);
  };

  h.sf = function (a) {
    if (void 0 === a.displayName && void 0 === a.photoURL) return Li(this);
    var b = this;
    return this.f(this.getToken().then(function (c) {
      return b.g.updateProfile(c, {
        displayName: a.displayName,
        photoUrl: a.photoURL
      });
    }).then(function (a) {
      Ti(b, a);
      Pi(b, "displayName", a.displayName || null);
      Pi(b, "photoURL", a.photoUrl || null);
      return Ii(b);
    }).then(Ki));
  };

  h.updateProfile = function (a) {
    return this.ta(this.sf, a);
  };

  h.pf = function (a) {
    var b = this;
    return this.f(Qi(this).then(function (c) {
      return Ia(Mi(b), a) ? Hg(b.g, c, [a]).then(function (a) {
        var c = {};
        Ca(a.providerUserInfo || [], function (a) {
          c[a.providerId] = !0;
        });
        Ca(Mi(b), function (a) {
          c[a] || Ni(b, a);
        });
        return Ii(b);
      }) : Ii(b).then(function () {
        throw new N("no-such-provider");
      });
    }));
  };

  h.unlink = function (a) {
    return this.ta(this.pf, a);
  };

  h.ne = function () {
    var a = this;
    return this.f(this.getToken().then(function (b) {
      return Q(a.g, Rg, {
        idToken: b
      });
    }).then(function () {
      a.dispatchEvent(new Ei("userDeleted"));
    })).then(function () {
      Si(a);
    });
  };

  h["delete"] = function () {
    return this.ta(this.ne);
  };

  h.od = function (a, b) {
    return "linkViaPopup" == a && (this.la || null) == b && this.ca || "linkViaRedirect" == a && (this.mc || null) == b ? !0 : !1;
  };

  h.Ka = function (a, b, c, d) {
    "linkViaPopup" == a && d == (this.la || null) && (c && this.Ga ? this.Ga(c) : b && !c && this.ca && this.ca(b), this.J && (this.J.cancel(), this.J = null), delete this.ca, delete this.Ga);
  };

  h.qb = function (a, b) {
    return "linkViaPopup" == a && b == (this.la || null) || "linkViaRedirect" == a && (this.mc || null) == b ? _r(this.re, this) : null;
  };

  h.Ub = function () {
    return qf(this.uid + ":::");
  };

  var Xi = function Xi(a, b) {
    if (!rf()) return D(new N("operation-not-supported-in-this-environment"));
    var c = Jf(b.providerId),
        d = a.Ub(),
        e = null;
    (!sf() || mf()) && a.v && b.isOAuthProvider && (e = jh(a.v, a.j, a.B, "linkViaPopup", b, null, d, firebase.SDK_VERSION || null));
    var f = ef(e, c && c.Ab, c && c.zb),
        c = Vi(a, b.providerId).then(function () {
      return Ii(a);
    }).then(function () {
      Wi(a);
      return a.getToken();
    }).then(function () {
      return a.m.Bb(f, "linkViaPopup", b, d, !!e);
    }).then(function () {
      return new B(function (b, c) {
        a.Ka("linkViaPopup", null, new N("cancelled-popup-request"), a.la || null);
        a.ca = b;
        a.Ga = c;
        a.la = d;
        a.J = a.m.Ib(a, "linkViaPopup", f, d);
      });
    }).then(function (a) {
      f && df(f);
      return a;
    }).c(function (a) {
      f && df(f);
      throw a;
    });
    return a.f(c);
  };

  W.prototype.linkWithPopup = function (a) {
    var b = Xi(this, a);
    return this.ta(function () {
      return b;
    });
  };

  W.prototype.Ne = function (a) {
    if (!rf()) return D(new N("operation-not-supported-in-this-environment"));
    var b = this,
        c = null,
        d = this.Ub(),
        e = Vi(this, a.providerId).then(function () {
      Wi(b);
      return b.getToken();
    }).then(function () {
      b.mc = d;
      return Ii(b);
    }).then(function (a) {
      b.Ia && (a = b.Ia, a = a.i.set(Yi, b.C(), a.u));
      return a;
    }).then(function () {
      return b.m.Cb("linkViaRedirect", a, d);
    }).c(function (a) {
      c = a;
      if (b.Ia) return Zi(b.Ia);
      throw c;
    }).then(function () {
      if (c) throw c;
    });
    return this.f(e);
  };

  W.prototype.linkWithRedirect = function (a) {
    return this.ta(this.Ne, a);
  };

  var Wi = function Wi(a) {
    if (!a.m || !a.jc) {
      if (a.m && !a.jc) throw new N("internal-error");
      throw new N("auth-domain-config-required");
    }
  };

  W.prototype.re = function (a, b) {
    var c = this;
    this.J && (this.J.cancel(), this.J = null);
    var d = null,
        e = this.getToken().then(function (d) {
      return Sf(c.g, {
        requestUri: a,
        sessionId: b,
        idToken: d
      });
    }).then(function (a) {
      d = fg(a);
      return c.vd(a);
    }).then(function (a) {
      return {
        user: a,
        credential: d
      };
    });
    return this.f(e);
  };

  W.prototype.sendEmailVerification = function () {
    var a = this;
    return this.f(this.getToken().then(function (b) {
      return a.g.sendEmailVerification(b);
    }).then(function (b) {
      if (a.email != b) return a.reload();
    }).then(function () {}));
  };

  var Si = function Si(a) {
    for (var b = 0; b < a.Z.length; b++) {
      a.Z[b].cancel("app-deleted");
    }

    a.Z = [];
    a.oe = !0;
    M(a, "refreshToken", null);
    a.m && a.m.unsubscribe(a);
  };

  W.prototype.f = function (a) {
    var b = this;
    this.Z.push(a);
    md(a, function () {
      Ka(b.Z, a);
    });
    return a;
  };

  W.prototype.toJSON = function () {
    return this.C();
  };

  W.prototype.C = function () {
    var a = {
      uid: this.uid,
      displayName: this.displayName,
      photoURL: this.photoURL,
      email: this.email,
      emailVerified: this.emailVerified,
      isAnonymous: this.isAnonymous,
      providerData: [],
      apiKey: this.j,
      appName: this.B,
      authDomain: this.v,
      stsTokenManager: this.ea.C(),
      redirectEventId: this.mc || null
    };
    Ca(this.providerData, function (b) {
      a.providerData.push(Df(b));
    });
    return a;
  };

  var $i = function $i(a) {
    if (!a.apiKey) return null;
    var b = {
      apiKey: a.apiKey,
      authDomain: a.authDomain,
      appName: a.appName
    },
        c = {};
    if (a.stsTokenManager && a.stsTokenManager.accessToken && a.stsTokenManager.expirationTime) c.idToken = a.stsTokenManager.accessToken, c.refreshToken = a.stsTokenManager.refreshToken || null, c.expiresIn = (a.stsTokenManager.expirationTime - ka()) / 1E3;else return null;
    var d = new W(b, c, a);
    a.providerData && Ca(a.providerData, function (a) {
      if (a) {
        var b = {};
        Cf(b, a);
        Oi(d, b);
      }
    });
    a.redirectEventId && (d.mc = a.redirectEventId);
    return d;
  },
      aj = function aj(a, b, c) {
    var d = new W(a, b);
    c && (d.Ia = c);
    return d.reload().then(function () {
      return d;
    });
  };

  var bj = function bj(a) {
    this.u = a;
    this.i = Ph();
  },
      Yi = {
    name: "redirectUser",
    I: !1
  },
      Zi = function Zi(a) {
    return a.i.remove(Yi, a.u);
  },
      cj = function cj(a, b) {
    return a.i.get(Yi, a.u).then(function (a) {
      a && b && (a.authDomain = b);
      return $i(a || {});
    });
  };

  var dj = function dj(a) {
    this.u = a;
    this.i = Ph();
  },
      ej = {
    name: "authUser",
    I: !0
  },
      fj = function fj(a, b) {
    return a.i.set(ej, b.C(), a.u);
  },
      gj = function gj(a) {
    return a.i.remove(ej, a.u);
  },
      hj = function hj(a, b) {
    return a.i.get(ej, a.u).then(function (a) {
      a && b && (a.authDomain = b);
      return $i(a || {});
    });
  };

  var Y = function Y(a) {
    this.Sa = !1;
    M(this, "app", a);
    if (X(this).options && X(this).options.apiKey) a = firebase.SDK_VERSION ? of(firebase.SDK_VERSION) : null, this.g = new R(X(this).options && X(this).options.apiKey, null, a);else throw new N("invalid-api-key");
    this.Z = [];
    this.Qa = [];
    this.Ue = firebase.INTERNAL.createSubscribe(_r(this.Ge, this));
    ij(this, null);
    this.oa = new dj(X(this).options.apiKey + ":" + X(this).name);
    this.fb = new bj(X(this).options.apiKey + ":" + X(this).name);
    this.Pb = this.f(jj(this));
    this.ua = this.f(kj(this));
    this.Qc = !1;
    this.Kc = _r(this.jf, this);
    this.Zd = _r(this.Xa, this);
    this.$d = _r(this.Ce, this);
    this.Yd = _r(this.Be, this);
    lj(this);
    this.INTERNAL = {};
    this.INTERNAL["delete"] = _r(this["delete"], this);
  };

  Y.prototype.toJSON = function () {
    return {
      apiKey: X(this).options.apiKey,
      authDomain: X(this).options.authDomain,
      appName: X(this).name,
      currentUser: Z(this) && Z(this).C()
    };
  };

  var mj = function mj(a) {
    return a.pe || D(new N("auth-domain-config-required"));
  },
      lj = function lj(a) {
    var b = X(a).options.authDomain,
        c = X(a).options.apiKey;
    b && rf() && (a.pe = a.Pb.then(function () {
      if (!a.Sa) return a.m = ti(b, c, X(a).name), a.m.subscribe(a), Z(a) && Ji(Z(a)), a.ad && (Ji(a.ad), a.ad = null), a.m;
    }));
  };

  h = Y.prototype;

  h.od = function (a, b) {
    switch (a) {
      case "unknown":
      case "signInViaRedirect":
        return !0;

      case "signInViaPopup":
        return this.la == b && !!this.ca;

      default:
        return !1;
    }
  };

  h.Ka = function (a, b, c, d) {
    "signInViaPopup" == a && this.la == d && (c && this.Ga ? this.Ga(c) : b && !c && this.ca && this.ca(b), this.J && (this.J.cancel(), this.J = null), delete this.ca, delete this.Ga);
  };

  h.qb = function (a, b) {
    return "signInViaRedirect" == a || "signInViaPopup" == a && this.la == b && this.ca ? _r(this.se, this) : null;
  };

  h.se = function (a, b) {
    var c = this;
    a = {
      requestUri: a,
      sessionId: b
    };
    this.J && (this.J.cancel(), this.J = null);
    var d = null,
        e = Qf(c.g, a).then(function (a) {
      d = fg(a);
      return a;
    });
    a = c.Pb.then(function () {
      return e;
    }).then(function (a) {
      return nj(c, a);
    }).then(function () {
      return {
        user: Z(c),
        credential: d
      };
    });
    return this.f(a);
  };

  h.Ub = function () {
    return qf();
  };

  h.signInWithPopup = function (a) {
    if (!rf()) return D(new N("operation-not-supported-in-this-environment"));
    var b = this,
        c = Jf(a.providerId),
        d = this.Ub(),
        e = null;
    (!sf() || mf()) && X(this).options.authDomain && a.isOAuthProvider && (e = jh(X(this).options.authDomain, X(this).options.apiKey, X(this).name, "signInViaPopup", a, null, d, firebase.SDK_VERSION || null));
    var f = ef(e, c && c.Ab, c && c.zb),
        c = mj(this).then(function (b) {
      return b.Bb(f, "signInViaPopup", a, d, !!e);
    }).then(function () {
      return new B(function (a, c) {
        b.Ka("signInViaPopup", null, new N("cancelled-popup-request"), b.la);
        b.ca = a;
        b.Ga = c;
        b.la = d;
        b.J = b.m.Ib(b, "signInViaPopup", f, d);
      });
    }).then(function (a) {
      f && df(f);
      return a;
    }).c(function (a) {
      f && df(f);
      throw a;
    });
    return this.f(c);
  };

  h.signInWithRedirect = function (a) {
    if (!rf()) return D(new N("operation-not-supported-in-this-environment"));
    var b = this,
        c = mj(this).then(function () {
      return b.m.Cb("signInViaRedirect", a);
    });
    return this.f(c);
  };

  h.getRedirectResult = function () {
    if (!rf()) return D(new N("operation-not-supported-in-this-environment"));
    var a = this,
        b = mj(this).then(function () {
      return a.m.getRedirectResult();
    });
    return this.f(b);
  };

  var nj = function nj(a, b) {
    var c = {};
    c.apiKey = X(a).options.apiKey;
    c.authDomain = X(a).options.authDomain;
    c.appName = X(a).name;
    return a.Pb.then(function () {
      return aj(c, b, a.fb);
    }).then(function (b) {
      if (Z(a) && b.uid == Z(a).uid) return Z(a).copy(b), a.Xa(b);
      ij(a, b);
      Ji(b);
      return a.Xa(b);
    }).then(function () {
      a.Ea();
    });
  },
      ij = function ij(a, b) {
    Z(a) && (Hi(Z(a), a.Zd), dc(Z(a), "tokenChanged", a.$d), dc(Z(a), "userDeleted", a.Yd));
    b && (b.pc.push(a.Zd), Vb(b, "tokenChanged", a.$d), Vb(b, "userDeleted", a.Yd));
    M(a, "currentUser", b);
  };

  Y.prototype.signOut = function () {
    var a = this,
        b = this.ua.then(function () {
      if (!Z(a)) return C();
      ij(a, null);
      return gj(a.oa).then(function () {
        a.Ea();
      });
    });
    return this.f(b);
  };

  var oj = function oj(a) {
    var b = cj(a.fb, X(a).options.authDomain).then(function (b) {
      if (a.ad = b) b.Ia = a.fb;
      return Zi(a.fb);
    });
    return a.f(b);
  },
      jj = function jj(a) {
    var b = X(a).options.authDomain,
        c = oj(a).then(function () {
      return hj(a.oa, b);
    }).then(function (b) {
      return b ? (b.Ia = a.fb, b.reload().then(function () {
        return fj(a.oa, b).then(function () {
          return b;
        });
      }).c(function (c) {
        return "auth/network-request-failed" == c.code ? b : gj(a.oa);
      })) : null;
    }).then(function (b) {
      ij(a, b || null);
    });
    return a.f(c);
  },
      kj = function kj(a) {
    return a.Pb.then(function () {
      return a.getRedirectResult();
    }).c(function () {}).then(function () {
      if (!a.Sa) return a.Kc();
    }).c(function () {}).then(function () {
      if (!a.Sa) {
        a.Qc = !0;
        var b = a.oa;
        b.i.addListener(ej, b.u, a.Kc);
      }
    });
  };

  Y.prototype.jf = function () {
    var a = this;
    return hj(this.oa, X(this).options.authDomain).then(function (b) {
      if (!a.Sa) {
        var c;

        if (c = Z(a) && b) {
          c = Z(a).uid;
          var d = b.uid;
          c = void 0 === c || null === c || "" === c || void 0 === d || null === d || "" === d ? !1 : c == d;
        }

        if (c) return Z(a).copy(b), Z(a).getToken();
        if (Z(a) || b) ij(a, b), b && (Ji(b), b.Ia = a.fb), a.m && a.m.subscribe(a), a.Ea();
      }
    });
  };

  Y.prototype.Xa = function (a) {
    return fj(this.oa, a);
  };

  Y.prototype.Ce = function () {
    this.Ea();
    this.Xa(Z(this));
  };

  Y.prototype.Be = function () {
    this.signOut();
  };

  var pj = function pj(a, b) {
    return a.f(b.then(function (b) {
      return nj(a, b);
    }).then(function () {
      return Z(a);
    }));
  };

  h = Y.prototype;

  h.Ge = function (a) {
    var b = this;
    this.addAuthTokenListener(function () {
      a.next(Z(b));
    });
  };

  h.onAuthStateChanged = function (a, b, c) {
    var d = this;
    this.Qc && firebase.Promise.resolve().then(function () {
      q(a) ? a(Z(d)) : q(a.next) && a.next(Z(d));
    });
    return this.Ue(a, b, c);
  };

  h.getToken = function (a) {
    var b = this,
        c = this.ua.then(function () {
      return Z(b) ? Z(b).getToken(a).then(function (a) {
        return {
          accessToken: a
        };
      }) : null;
    });
    return this.f(c);
  };

  h.signInWithCustomToken = function (a) {
    var b = this;
    return this.ua.then(function () {
      return pj(b, Q(b.g, Tg, {
        token: a
      }));
    }).then(function (a) {
      Pi(a, "isAnonymous", !1);
      return b.Xa(a);
    }).then(function () {
      return Z(b);
    });
  };

  h.signInWithEmailAndPassword = function (a, b) {
    var c = this;
    return this.ua.then(function () {
      return pj(c, Q(c.g, cg, {
        email: a,
        password: b
      }));
    });
  };

  h.createUserWithEmailAndPassword = function (a, b) {
    var c = this;
    return this.ua.then(function () {
      return pj(c, Q(c.g, Qg, {
        email: a,
        password: b
      }));
    });
  };

  h.signInWithCredential = function (a) {
    var b = this;
    return this.ua.then(function () {
      return pj(b, a.Vb(b.g));
    });
  };

  h.signInAnonymously = function () {
    var a = Z(this),
        b = this;
    return a && a.isAnonymous ? C(a) : this.ua.then(function () {
      return pj(b, b.g.signInAnonymously());
    }).then(function (a) {
      Pi(a, "isAnonymous", !0);
      return b.Xa(a);
    }).then(function () {
      return Z(b);
    });
  };

  var X = function X(a) {
    return a.app;
  },
      Z = function Z(a) {
    return a.currentUser;
  };

  h = Y.prototype;

  h.Ea = function () {
    if (this.Qc) for (var a = 0; a < this.Qa.length; a++) {
      if (this.Qa[a]) this.Qa[a](Z(this) && Z(this)._lat || null);
    }
  };

  h.addAuthTokenListener = function (a) {
    var b = this;
    this.Qa.push(a);
    this.f(this.ua.then(function () {
      b.Sa || Ia(b.Qa, a) && a(Z(b) && Z(b)._lat || null);
    }));
  };

  h.removeAuthTokenListener = function (a) {
    La(this.Qa, function (b) {
      return b == a;
    });
  };

  h["delete"] = function () {
    this.Sa = !0;

    for (var a = 0; a < this.Z.length; a++) {
      this.Z[a].cancel("app-deleted");
    }

    this.Z = [];
    this.oa && (a = this.oa, a.i.removeListener(ej, a.u, this.Kc));
    this.m && this.m.unsubscribe(this);
    return firebase.Promise.resolve();
  };

  h.f = function (a) {
    var b = this;
    this.Z.push(a);
    md(a, function () {
      Ka(b.Z, a);
    });
    return a;
  };

  h.fetchProvidersForEmail = function (a) {
    return this.f(xg(this.g, a));
  };

  h.verifyPasswordResetCode = function (a) {
    return this.checkActionCode(a).then(function (a) {
      return a.data.email;
    });
  };

  h.confirmPasswordReset = function (a, b) {
    return this.f(this.g.confirmPasswordReset(a, b).then(function () {}));
  };

  h.checkActionCode = function (a) {
    return this.f(this.g.checkActionCode(a).then(function (a) {
      return new Dh(a);
    }));
  };

  h.applyActionCode = function (a) {
    return this.f(this.g.applyActionCode(a).then(function () {}));
  };

  h.sendPasswordResetEmail = function (a) {
    return this.f(this.g.sendPasswordResetEmail(a).then(function () {}));
  };

  T(Y.prototype, {
    applyActionCode: {
      name: "applyActionCode",
      a: [S("code")]
    },
    checkActionCode: {
      name: "checkActionCode",
      a: [S("code")]
    },
    confirmPasswordReset: {
      name: "confirmPasswordReset",
      a: [S("code"), S("newPassword")]
    },
    createUserWithEmailAndPassword: {
      name: "createUserWithEmailAndPassword",
      a: [S("email"), S("password")]
    },
    fetchProvidersForEmail: {
      name: "fetchProvidersForEmail",
      a: [S("email")]
    },
    getRedirectResult: {
      name: "getRedirectResult",
      a: []
    },
    onAuthStateChanged: {
      name: "onAuthStateChanged",
      a: [Kh(Fh(), Gh(), "nextOrObserver"), Gh("opt_error", !0), Gh("opt_completed", !0)]
    },
    sendPasswordResetEmail: {
      name: "sendPasswordResetEmail",
      a: [S("email")]
    },
    signInAnonymously: {
      name: "signInAnonymously",
      a: []
    },
    signInWithCredential: {
      name: "signInWithCredential",
      a: [Ih()]
    },
    signInWithCustomToken: {
      name: "signInWithCustomToken",
      a: [S("token")]
    },
    signInWithEmailAndPassword: {
      name: "signInWithEmailAndPassword",
      a: [S("email"), S("password")]
    },
    signInWithPopup: {
      name: "signInWithPopup",
      a: [Jh()]
    },
    signInWithRedirect: {
      name: "signInWithRedirect",
      a: [Jh()]
    },
    signOut: {
      name: "signOut",
      a: []
    },
    toJSON: {
      name: "toJSON",
      a: [S(null, !0)]
    },
    verifyPasswordResetCode: {
      name: "verifyPasswordResetCode",
      a: [S("code")]
    }
  });
  T(W.prototype, {
    "delete": {
      name: "delete",
      a: []
    },
    getToken: {
      name: "getToken",
      a: [{
        name: "opt_forceRefresh",
        fa: "a boolean",
        optional: !0,
        ha: function ha(a) {
          return "boolean" == typeof a;
        }
      }]
    },
    link: {
      name: "link",
      a: [Ih()]
    },
    linkWithPopup: {
      name: "linkWithPopup",
      a: [Jh()]
    },
    linkWithRedirect: {
      name: "linkWithRedirect",
      a: [Jh()]
    },
    reauthenticate: {
      name: "reauthenticate",
      a: [Ih()]
    },
    reload: {
      name: "reload",
      a: []
    },
    sendEmailVerification: {
      name: "sendEmailVerification",
      a: []
    },
    toJSON: {
      name: "toJSON",
      a: [S(null, !0)]
    },
    unlink: {
      name: "unlink",
      a: [S("provider")]
    },
    updateEmail: {
      name: "updateEmail",
      a: [S("email")]
    },
    updatePassword: {
      name: "updatePassword",
      a: [S("password")]
    },
    updateProfile: {
      name: "updateProfile",
      a: [Fh("profile")]
    }
  });
  T(B.prototype, {
    c: {
      name: "catch"
    },
    then: {
      name: "then"
    }
  });
  U(eg, "credential", function (a, b) {
    return new bg(a, b);
  }, [S("email"), S("password")]);
  T(Uf.prototype, {
    addScope: {
      name: "addScope",
      a: [S("scope")]
    },
    setCustomParameters: {
      name: "setCustomParameters",
      a: [Fh("customOAuthParameters")]
    }
  });
  U(Uf, "credential", Vf, [Kh(S(), Fh(), "token")]);
  T(Wf.prototype, {
    addScope: {
      name: "addScope",
      a: [S("scope")]
    },
    setCustomParameters: {
      name: "setCustomParameters",
      a: [Fh("customOAuthParameters")]
    }
  });
  U(Wf, "credential", Xf, [Kh(S(), Fh(), "token")]);
  T(Yf.prototype, {
    addScope: {
      name: "addScope",
      a: [S("scope")]
    },
    setCustomParameters: {
      name: "setCustomParameters",
      a: [Fh("customOAuthParameters")]
    }
  });
  U(Yf, "credential", Zf, [Kh(S(), Hh(), "idToken", !0), Kh(S(), Hh(), "accessToken", !0)]);
  T($f.prototype, {
    setCustomParameters: {
      name: "setCustomParameters",
      a: [Fh("customOAuthParameters")]
    }
  });
  U($f, "credential", ag, [Kh(S(), Fh(), "token"), S("secret", !0)]);
  T(N.prototype, {
    toJSON: {
      name: "toJSON",
      a: [S(null, !0)]
    }
  });
  T(hg.prototype, {
    toJSON: {
      name: "toJSON",
      a: [S(null, !0)]
    }
  });
  T(Nf.prototype, {
    toJSON: {
      name: "toJSON",
      a: [S(null, !0)]
    }
  });

  (function () {
    if ("undefined" !== typeof firebase && firebase.INTERNAL && firebase.INTERNAL.registerService) {
      var a = {
        Auth: Y,
        Error: N
      };
      U(a, "EmailAuthProvider", eg, []);
      U(a, "FacebookAuthProvider", Uf, []);
      U(a, "GithubAuthProvider", Wf, []);
      U(a, "GoogleAuthProvider", Yf, []);
      U(a, "TwitterAuthProvider", $f, []);
      firebase.INTERNAL.registerService("auth", function (a, c) {
        a = new Y(a);
        c({
          INTERNAL: {
            getToken: _r(a.getToken, a),
            addAuthTokenListener: _r(a.addAuthTokenListener, a),
            removeAuthTokenListener: _r(a.removeAuthTokenListener, a)
          }
        });
        return a;
      }, a, function (a, c) {
        if ("create" === a) try {
          c.auth();
        } catch (d) {}
      });
      firebase.INTERNAL.extendNamespace({
        User: W
      });
    } else throw Error("Cannot find the firebase namespace; be sure to include firebase-app.js before this library.");
  })();
}).call(void 0);