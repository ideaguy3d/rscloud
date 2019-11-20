"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*! @license Firebase v3.6.10
    Build: 3.6.10-rc.1
    Terms: https://firebase.google.com/terms/ */
(function () {
  for (var k, aa = "function" == typeof Object.defineProperties ? Object.defineProperty : function (a, b, c) {
    if (c.get || c.set) throw new TypeError("ES3 does not support getters and setters.");
    a != Array.prototype && a != Object.prototype && (a[b] = c.value);
  }, l = "undefined" != typeof window && window === this ? this : "undefined" != typeof global && null != global ? global : this, m = ["Number", "MIN_SAFE_INTEGER"], ba = 0; ba < m.length - 1; ba++) {
    var ca = m[ba];
    ca in l || (l[ca] = {});
    l = l[ca];
  }

  var da = m[m.length - 1];
  -9007199254740991 != l[da] && aa(l, da, {
    configurable: !0,
    writable: !0,
    value: -9007199254740991
  });

  var n = this,
      q = function q(a) {
    return void 0 !== a;
  },
      ea = function ea(a) {
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
  };

  var r = function r(a, b) {
    return -1 !== a.indexOf(b);
  };

  var fa = function fa(a, b, c) {
    function d() {
      z || (z = !0, b.apply(null, arguments));
    }

    function e(b) {
      p = setTimeout(function () {
        p = null;
        a(f, 2 === C);
      }, b);
    }

    function f(a, b) {
      if (!z) if (a) d.apply(null, arguments);else if (2 === C || B) d.apply(null, arguments);else {
        64 > h && (h *= 2);
        var c;
        1 === C ? (C = 2, c = 0) : c = 1E3 * (h + Math.random());
        e(c);
      }
    }

    function g(a) {
      Ma || (Ma = !0, z || (null !== p ? (a || (C = 2), clearTimeout(p), e(0)) : a || (C = 1)));
    }

    var h = 1,
        p = null,
        B = !1,
        C = 0,
        z = !1,
        Ma = !1;
    e(0);
    setTimeout(function () {
      B = !0;
      g(!0);
    }, c);
    return g;
  };

  var t = "https://firebasestorage.googleapis.com";

  var u = function u(a, b) {
    this.code = "storage/" + a;
    this.message = "Firebase Storage: " + b;
    this.serverResponse = null;
    this.name = "FirebaseError";
  };

  (function () {
    var a = Error;

    function b() {}

    b.prototype = a.prototype;
    u.b = a.prototype;
    u.prototype = new b();

    u.a = function (b, d, e) {
      for (var c = Array(arguments.length - 2), g = 2; g < arguments.length; g++) {
        c[g - 2] = arguments[g];
      }

      return a.prototype[d].apply(b, c);
    };
  })();

  var ga = function ga() {
    return new u("unknown", "An unknown error occurred, please check the error payload for server response.");
  },
      ha = function ha() {
    return new u("canceled", "User canceled the upload/download.");
  },
      ia = function ia() {
    return new u("cannot-slice-blob", "Cannot slice blob for upload. Please retry the upload.");
  },
      ja = function ja(a, b, c) {
    return new u("invalid-argument", "Invalid argument in `" + b + "` at index " + a + ": " + c);
  },
      ka = function ka() {
    return new u("app-deleted", "The Firebase app was deleted.");
  },
      v = function v(a, b) {
    return new u("invalid-format", "String does not match format '" + a + "': " + b);
  },
      la = function la(a) {
    throw new u("internal-error", "Internal error: " + a);
  };

  var ma = function ma(a, b) {
    for (var c in a) {
      Object.prototype.hasOwnProperty.call(a, c) && b(c, a[c]);
    }
  },
      na = function na(a) {
    var b = {};
    ma(a, function (a, d) {
      b[a] = d;
    });
    return b;
  };

  var oa = function oa(a, b) {
    b = b.split("/").filter(function (a) {
      return 0 < a.length;
    }).join("/");
    return 0 === a.length ? b : a + "/" + b;
  },
      pa = function pa(a) {
    var b = a.lastIndexOf("/", a.length - 2);
    return -1 === b ? a : a.slice(b + 1);
  };

  var qa = function qa(a) {
    if ("undefined" !== typeof firebase) return new firebase.Promise(a);
    throw Error("Error in Firebase Storage - be sure to load firebase-app.js first.");
  };

  var w = function w(a, b, c, d) {
    this.h = a;
    this.b = {};
    this.method = b;
    this.headers = {};
    this.body = null;
    this.j = c;
    this.l = this.a = null;
    this.c = [200];
    this.g = [];
    this.timeout = d;
    this.f = !0;
  };

  var ra = {
    STATE_CHANGED: "state_changed"
  },
      x = {
    RUNNING: "running",
    PAUSED: "paused",
    SUCCESS: "success",
    CANCELED: "canceled",
    ERROR: "error"
  },
      sa = function sa(a) {
    switch (a) {
      case "running":
      case "pausing":
      case "canceling":
        return "running";

      case "paused":
        return "paused";

      case "success":
        return "success";

      case "canceled":
        return "canceled";

      case "error":
        return "error";

      default:
        return "error";
    }
  };

  var y = function y(a) {
    return q(a) && null !== a;
  },
      ta = function ta(a) {
    return "string" === typeof a || a instanceof String;
  },
      ua = function ua() {
    return "undefined" !== typeof Blob;
  };

  var wa = function wa(a, b) {
    var c = va;
    return Object.prototype.hasOwnProperty.call(c, a) ? c[a] : c[a] = b(a);
  };

  var xa = String.prototype.trim ? function (a) {
    return a.trim();
  } : function (a) {
    return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "");
  },
      ya = function ya(a, b) {
    return a < b ? -1 : a > b ? 1 : 0;
  };

  var A = function A(a) {
    return function () {
      var b = [];
      Array.prototype.push.apply(b, arguments);
      firebase.Promise.resolve(!0).then(function () {
        a.apply(null, b);
      });
    };
  };

  var D = function D(a, b) {
    this.bucket = a;
    this.path = b;
  },
      za = function za(a) {
    var b = encodeURIComponent;
    return "/b/" + b(a.bucket) + "/o/" + b(a.path);
  },
      Aa = function Aa(a) {
    for (var b = null, c = [{
      K: /^gs:\/\/([A-Za-z0-9.\-]+)(\/(.*))?$/i,
      G: {
        bucket: 1,
        path: 3
      },
      J: function J(a) {
        "/" === a.path.charAt(a.path.length - 1) && (a.path = a.path.slice(0, -1));
      }
    }, {
      K: /^https?:\/\/firebasestorage\.googleapis\.com\/v[A-Za-z0-9_]+\/b\/([A-Za-z0-9.\-]+)\/o(\/([^?#]*).*)?$/i,
      G: {
        bucket: 1,
        path: 3
      },
      J: function J(a) {
        a.path = decodeURIComponent(a.path);
      }
    }], d = 0; d < c.length; d++) {
      var e = c[d],
          f = e.K.exec(a);

      if (f) {
        b = f[e.G.bucket];
        (f = f[e.G.path]) || (f = "");
        b = new D(b, f);
        e.J(b);
        break;
      }
    }

    if (null == b) throw new u("invalid-url", "Invalid URL '" + a + "'.");
    return b;
  };

  var Ba = function Ba(a, b, c) {
    "function" == ea(a) || y(b) || y(c) ? (this.b = a, this.error = b || null, this.a = c || null) : (this.b = a.next || null, this.error = a.error || null, this.a = a.complete || null);
  };

  var E = {
    RAW: "raw",
    BASE64: "base64",
    BASE64URL: "base64url",
    DATA_URL: "data_url"
  },
      Ca = function Ca(a) {
    switch (a) {
      case "raw":
      case "base64":
      case "base64url":
      case "data_url":
        break;

      default:
        throw "Expected one of the event types: [raw, base64, base64url, data_url].";
    }
  },
      Da = function Da(a, b) {
    this.data = a;
    this.a = b || null;
  },
      Ha = function Ha(a, b) {
    switch (a) {
      case "raw":
        return new Da(Ea(b));

      case "base64":
      case "base64url":
        return new Da(Fa(a, b));

      case "data_url":
        a = new Ga(b);
        var c;
        if (a.a) c = Fa("base64", a.c);else {
          try {
            c = decodeURIComponent(a.c);
          } catch (d) {
            throw v("data_url", "Malformed data URL.");
          }

          c = Ea(c);
        }
        return new Da(c, new Ga(b).b);
    }

    throw ga();
  },
      Ea = function Ea(a) {
    for (var b = [], c = 0; c < a.length; c++) {
      var d = a.charCodeAt(c);
      if (127 >= d) b.push(d);else if (2047 >= d) b.push(192 | d >> 6, 128 | d & 63);else if (55296 == (d & 64512)) {
        if (c < a.length - 1 && 56320 == (a.charCodeAt(c + 1) & 64512)) {
          var e = a.charCodeAt(++c),
              d = 65536 | (d & 1023) << 10 | e & 1023;
          b.push(240 | d >> 18, 128 | d >> 12 & 63, 128 | d >> 6 & 63, 128 | d & 63);
        } else b.push(239, 191, 189);
      } else 56320 == (d & 64512) ? b.push(239, 191, 189) : b.push(224 | d >> 12, 128 | d >> 6 & 63, 128 | d & 63);
    }

    return new Uint8Array(b);
  },
      Fa = function Fa(a, b) {
    switch (a) {
      case "base64":
        var c = -1 !== b.indexOf("-"),
            d = -1 !== b.indexOf("_");
        if (c || d) throw v(a, "Invalid character '" + (c ? "-" : "_") + "' found: is it base64url encoded?");
        break;

      case "base64url":
        c = -1 !== b.indexOf("+");
        d = -1 !== b.indexOf("/");
        if (c || d) throw v(a, "Invalid character '" + (c ? "+" : "/") + "' found: is it base64 encoded?");
        b = b.replace(/-/g, "+").replace(/_/g, "/");
    }

    var e;

    try {
      e = atob(b);
    } catch (f) {
      throw v(a, "Invalid character found");
    }

    a = new Uint8Array(e.length);

    for (b = 0; b < e.length; b++) {
      a[b] = e.charCodeAt(b);
    }

    return a;
  },
      Ga = function Ga(a) {
    var b = a.match(/^data:([^,]+)?,/);
    if (null === b) throw v("data_url", "Must be formatted 'data:[<mediatype>][;base64],<data>");
    b = b[1] || null;
    this.a = !1;
    this.b = null;

    if (null != b) {
      var c = b.length - 7;
      this.b = (this.a = 0 <= c && b.indexOf(";base64", c) == c) ? b.substring(0, b.length - 7) : b;
    }

    this.c = a.substring(a.indexOf(",") + 1);
  };

  var Ia = function Ia(a) {
    var b = encodeURIComponent,
        c = "?";
    ma(a, function (a, e) {
      a = b(a) + "=" + b(e);
      c = c + a + "&";
    });
    return c = c.slice(0, -1);
  };

  var Ja = function Ja() {
    var a = this;
    this.a = new XMLHttpRequest();
    this.c = 0;
    this.f = qa(function (b) {
      a.a.addEventListener("abort", function () {
        a.c = 2;
        b(a);
      });
      a.a.addEventListener("error", function () {
        a.c = 1;
        b(a);
      });
      a.a.addEventListener("load", function () {
        b(a);
      });
    });
    this.b = !1;
  },
      Ka = function Ka(a, b, c, d, e) {
    if (a.b) throw la("cannot .send() more than once");
    a.b = !0;
    a.a.open(c, b, !0);
    y(e) && ma(e, function (b, c) {
      a.a.setRequestHeader(b, c.toString());
    });
    y(d) ? a.a.send(d) : a.a.send();
    return a.f;
  },
      La = function La(a) {
    if (!a.b) throw la("cannot .getErrorCode() before sending");
    return a.c;
  },
      F = function F(a) {
    if (!a.b) throw la("cannot .getStatus() before sending");

    try {
      return a.a.status;
    } catch (b) {
      return -1;
    }
  },
      Na = function Na(a) {
    if (!a.b) throw la("cannot .getResponseText() before sending");
    return a.a.responseText;
  };

  Ja.prototype.abort = function () {
    this.a.abort();
  };

  var G = function G(a, b, c, d, e, f) {
    this.b = a;
    this.h = b;
    this.f = c;
    this.a = d;
    this.g = e;
    this.c = f;
  };

  k = G.prototype;

  k.V = function () {
    return this.b;
  };

  k.qa = function () {
    return this.h;
  };

  k.na = function () {
    return this.f;
  };

  k.ia = function () {
    return this.a;
  };

  k.W = function () {
    if (y(this.a)) {
      var a = this.a.downloadURLs;
      return y(a) && y(a[0]) ? a[0] : null;
    }

    return null;
  };

  k.pa = function () {
    return this.g;
  };

  k.la = function () {
    return this.c;
  };

  var H;

  a: {
    var Oa = n.navigator;

    if (Oa) {
      var Pa = Oa.userAgent;

      if (Pa) {
        H = Pa;
        break a;
      }
    }

    H = "";
  }

  ;

  var Ra = function Ra(a, b, c, d, e, f, g, h, p, B, C) {
    this.C = a;
    this.A = b;
    this.v = c;
    this.o = d;
    this.B = e.slice();
    this.m = f.slice();
    this.j = this.l = this.c = this.b = null;
    this.f = this.g = !1;
    this.s = g;
    this.h = h;
    this.D = C;
    this.w = p;
    var z = this;
    this.u = qa(function (a, b) {
      z.l = a;
      z.j = b;
      Qa(z);
    });
  },
      Sa = function Sa(a, b, c) {
    this.b = a;
    this.c = b;
    this.a = !!c;
  },
      Qa = function Qa(a) {
    function b(a, b) {
      b ? a(!1, new Sa(!1, null, !0)) : (b = new Ja(), b.a.withCredentials = d.D, d.b = b, Ka(b, d.C, d.A, d.o, d.v).then(function (b) {
        d.b = null;
        var c = 0 === La(b),
            e = F(b);
        if (!(c = !c)) var c = r([408, 429], e),
            f = r(d.m, e),
            c = 500 <= e && 600 > e || c || f;
        c ? (b = 2 === La(b), a(!1, new Sa(!1, null, b))) : a(!0, new Sa(r(d.B, e), b));
      }));
    }

    function c(a, b) {
      var c = d.l;
      a = d.j;
      var e = b.c;
      if (b.b) try {
        var f = d.s(e, Na(e));
        q(f) ? c(f) : c();
      } catch (B) {
        a(B);
      } else null !== e ? (b = ga(), f = Na(e), b.serverResponse = f, d.h ? a(d.h(e, b)) : a(b)) : (b = b.a ? d.f ? ka() : ha() : new u("retry-limit-exceeded", "Max retry time for operation exceeded, please try again."), a(b));
    }

    var d = a;
    a.g ? c(0, new Sa(!1, null, !0)) : a.c = fa(b, c, a.w);
  };

  Ra.prototype.a = function () {
    return this.u;
  };

  Ra.prototype.cancel = function (a) {
    this.g = !0;
    this.f = a || !1;
    null !== this.c && (0, this.c)(!1);
    null !== this.b && this.b.abort();
  };

  var Ta = function Ta(a, b, c) {
    var d = Ia(a.b),
        d = a.h + d,
        e = a.headers ? na(a.headers) : {};
    null !== b && 0 < b.length && (e.Authorization = "Firebase " + b);
    e["X-Firebase-Storage-Version"] = "webjs/" + ("undefined" !== typeof firebase ? firebase.SDK_VERSION : "AppManager");
    return new Ra(d, a.method, e, a.body, a.c, a.g, a.j, a.a, a.timeout, 0, c);
  };

  var Ua = function Ua() {};

  var Va = function Va(a) {
    this.b = firebase.Promise.reject(a);
  };

  Va.prototype.a = function () {
    return this.b;
  };

  Va.prototype.cancel = function () {};

  var Wa = function Wa() {
    this.a = {};
    this.b = Number.MIN_SAFE_INTEGER;
  },
      Xa = function Xa(a, b) {
    function c() {
      delete e.a[d];
    }

    var d = a.b;
    a.b++;
    a.a[d] = b;
    var e = a;
    b.a().then(c, c);
  },
      Ya = function Ya(a) {
    ma(a.a, function (a, c) {
      c && c.cancel(!0);
    });
    a.a = {};
  };

  var Za = function Za(a, b, c, d, e) {
    this.a = a;
    this.g = null;

    if (null !== this.a && (a = this.a.options, y(a))) {
      a = a.storageBucket || null;
      if (null == a) a = null;else {
        var f = null;

        try {
          f = Aa(a);
        } catch (g) {}

        if (null !== f) {
          if ("" !== f.path) throw new u("invalid-default-bucket", "Invalid default bucket '" + a + "'.");
          a = f.bucket;
        }
      }
      this.g = a;
    }

    this.o = b;
    this.m = c;
    this.j = e;
    this.l = d;
    this.c = 12E4;
    this.b = 6E4;
    this.h = new Wa();
    this.f = !1;
  },
      $a = function $a(a) {
    return null !== a.a && y(a.a.INTERNAL) && y(a.a.INTERNAL.getToken) ? a.a.INTERNAL.getToken().then(function (a) {
      return y(a) ? a.accessToken : null;
    }, function () {
      return null;
    }) : firebase.Promise.resolve(null);
  };

  Za.prototype.bucket = function () {
    if (this.f) throw ka();
    return this.g;
  };

  var I = function I(a, b, c) {
    if (a.f) return new Va(ka());
    b = a.m(b, c, null === a.a, a.j);
    Xa(a.h, b);
    return b;
  };

  var ab = -1 != H.indexOf("Opera"),
      bb = -1 != H.indexOf("Trident") || -1 != H.indexOf("MSIE"),
      cb = -1 != H.indexOf("Edge"),
      db = -1 != H.indexOf("Gecko") && !(-1 != H.toLowerCase().indexOf("webkit") && -1 == H.indexOf("Edge")) && !(-1 != H.indexOf("Trident") || -1 != H.indexOf("MSIE")) && -1 == H.indexOf("Edge"),
      eb = -1 != H.toLowerCase().indexOf("webkit") && -1 == H.indexOf("Edge"),
      fb;

  a: {
    var gb = "",
        hb = function () {
      var a = H;
      if (db) return /rv\:([^\);]+)(\)|;)/.exec(a);
      if (cb) return /Edge\/([\d\.]+)/.exec(a);
      if (bb) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
      if (eb) return /WebKit\/(\S+)/.exec(a);
      if (ab) return /(?:Version)[ \/]?(\S+)/.exec(a);
    }();

    hb && (gb = hb ? hb[1] : "");

    if (bb) {
      var ib,
          jb = n.document;
      ib = jb ? jb.documentMode : void 0;

      if (null != ib && ib > parseFloat(gb)) {
        fb = String(ib);
        break a;
      }
    }

    fb = gb;
  }

  var kb = fb,
      va = {},
      lb = function lb(a) {
    return wa(a, function () {
      for (var b = 0, c = xa(String(kb)).split("."), d = xa(String(a)).split("."), e = Math.max(c.length, d.length), f = 0; 0 == b && f < e; f++) {
        var g = c[f] || "",
            h = d[f] || "";

        do {
          g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
          h = /(\d*)(\D*)(.*)/.exec(h) || ["", "", "", ""];
          if (0 == g[0].length && 0 == h[0].length) break;
          b = ya(0 == g[1].length ? 0 : parseInt(g[1], 10), 0 == h[1].length ? 0 : parseInt(h[1], 10)) || ya(0 == g[2].length, 0 == h[2].length) || ya(g[2], h[2]);
          g = g[3];
          h = h[3];
        } while (0 == b);
      }

      return 0 <= b;
    });
  };

  var mb = function mb(a) {
    var b = n.BlobBuilder || n.WebKitBlobBuilder;

    if (q(b)) {
      for (var b = new b(), c = 0; c < arguments.length; c++) {
        b.append(arguments[c]);
      }

      return b.getBlob();
    }

    b = Array.prototype.slice.call(arguments);
    c = n.BlobBuilder || n.WebKitBlobBuilder;

    if (q(c)) {
      for (var c = new c(), d = 0; d < b.length; d++) {
        c.append(b[d], void 0);
      }

      b = c.getBlob(void 0);
    } else if (q(n.Blob)) b = new Blob(b, {});else throw Error("This browser doesn't seem to support creating Blobs");

    return b;
  },
      nb = function nb(a, b, c) {
    q(c) || (c = a.size);
    return a.webkitSlice ? a.webkitSlice(b, c) : a.mozSlice ? a.mozSlice(b, c) : a.slice ? db && !lb("13.0") || eb && !lb("537.1") ? (0 > b && (b += a.size), 0 > b && (b = 0), 0 > c && (c += a.size), c < b && (c = b), a.slice(b, c - b)) : a.slice(b, c) : null;
  };

  var ob = function ob(a, b) {
    return b;
  },
      J = function J(a, b, c, d) {
    this.c = a;
    this.b = b || a;
    this.writable = !!c;
    this.a = d || ob;
  },
      pb = null,
      qb = function qb() {
    if (pb) return pb;
    var a = [];
    a.push(new J("bucket"));
    a.push(new J("generation"));
    a.push(new J("metageneration"));
    a.push(new J("name", "fullPath", !0));
    var b = new J("name");

    b.a = function (a, b) {
      return !ta(b) || 2 > b.length ? b : pa(b);
    };

    a.push(b);
    b = new J("size");

    b.a = function (a, b) {
      return y(b) ? +b : b;
    };

    a.push(b);
    a.push(new J("timeCreated"));
    a.push(new J("updated"));
    a.push(new J("md5Hash", null, !0));
    a.push(new J("cacheControl", null, !0));
    a.push(new J("contentDisposition", null, !0));
    a.push(new J("contentEncoding", null, !0));
    a.push(new J("contentLanguage", null, !0));
    a.push(new J("contentType", null, !0));
    a.push(new J("metadata", "customMetadata", !0));
    a.push(new J("downloadTokens", "downloadURLs", !1, function (a, b) {
      if (!(ta(b) && 0 < b.length)) return [];
      var c = encodeURIComponent;
      return b.split(",").map(function (b) {
        var d = a.fullPath,
            d = "https://firebasestorage.googleapis.com/v0" + ("/b/" + c(a.bucket) + "/o/" + c(d));
        b = Ia({
          alt: "media",
          token: b
        });
        return d + b;
      });
    }));
    return pb = a;
  },
      rb = function rb(a, b) {
    Object.defineProperty(a, "ref", {
      get: function get() {
        return b.o(b, new D(a.bucket, a.fullPath));
      }
    });
  },
      sb = function sb(a, b) {
    for (var c = {}, d = b.length, e = 0; e < d; e++) {
      var f = b[e];
      f.writable && (c[f.c] = a[f.b]);
    }

    return JSON.stringify(c);
  },
      tb = function tb(a) {
    if (!a || "object" !== _typeof(a)) throw "Expected Metadata object.";

    for (var b in a) {
      var c = a[b];

      if ("customMetadata" === b) {
        if ("object" !== _typeof(c)) throw "Expected object for 'customMetadata' mapping.";
      } else if (null != c && "object" === _typeof(c)) throw "Mapping for '" + b + "' cannot be an object.";
    }
  };

  var K = function K(a, b, c) {
    for (var d = b.length, e = b.length, f = 0; f < b.length; f++) {
      if (b[f].b) {
        d = f;
        break;
      }
    }

    if (!(d <= c.length && c.length <= e)) throw d === e ? (b = d, d = 1 === d ? "argument" : "arguments") : (b = "between " + d + " and " + e, d = "arguments"), new u("invalid-argument-count", "Invalid argument count in `" + a + "`: Expected " + b + " " + d + ", received " + c.length + ".");

    for (f = 0; f < c.length; f++) {
      try {
        b[f].a(c[f]);
      } catch (g) {
        if (g instanceof Error) throw ja(f, a, g.message);
        throw ja(f, a, g);
      }
    }
  },
      L = function L(a, b) {
    var c = this;

    this.a = function (b) {
      c.b && !q(b) || a(b);
    };

    this.b = !!b;
  },
      ub = function ub(a, b) {
    return function (c) {
      a(c);
      b(c);
    };
  },
      M = function M(a, b) {
    function c(a) {
      if (!("string" === typeof a || a instanceof String)) throw "Expected string.";
    }

    var d;
    a ? d = ub(c, a) : d = c;
    return new L(d, b);
  },
      vb = function vb() {
    return new L(function (a) {
      if (!(a instanceof Uint8Array || a instanceof ArrayBuffer || ua() && a instanceof Blob)) throw "Expected Blob or File.";
    });
  },
      wb = function wb() {
    return new L(function (a) {
      if (!(("number" === typeof a || a instanceof Number) && 0 <= a)) throw "Expected a number 0 or greater.";
    });
  },
      xb = function xb(a, b) {
    return new L(function (b) {
      if (!(null === b || y(b) && b instanceof Object)) throw "Expected an Object.";
      y(a) && a(b);
    }, b);
  },
      N = function N() {
    return new L(function (a) {
      if (null !== a && "function" != ea(a)) throw "Expected a Function.";
    }, !0);
  };

  var O = function O(a, b) {
    ua() && a instanceof Blob ? (this.i = a, b = a.size, a = a.type) : (a instanceof ArrayBuffer ? (b ? this.i = new Uint8Array(a) : (this.i = new Uint8Array(a.byteLength), this.i.set(new Uint8Array(a))), b = this.i.length) : (b ? this.i = a : (this.i = new Uint8Array(a.length), this.i.set(a)), b = a.length), a = "");
    this.a = b;
    this.b = a;
  };

  O.prototype.type = function () {
    return this.b;
  };

  O.prototype.slice = function (a, b) {
    if (ua() && this.i instanceof Blob) return a = nb(this.i, a, b), null === a ? null : new O(a);
    a = new Uint8Array(this.i.buffer, a, b - a);
    return new O(a, !0);
  };

  var yb = function yb(a) {
    var b = [];
    Array.prototype.push.apply(b, arguments);
    if (ua()) return b = b.map(function (a) {
      return a instanceof O ? a.i : a;
    }), new O(mb.apply(null, b));
    var b = b.map(function (a) {
      return ta(a) ? Ha("raw", a).data.buffer : a.i.buffer;
    }),
        c = 0;
    b.forEach(function (a) {
      c += a.byteLength;
    });
    var d = new Uint8Array(c),
        e = 0;
    b.forEach(function (a) {
      a = new Uint8Array(a);

      for (var b = 0; b < a.length; b++) {
        d[e++] = a[b];
      }
    });
    return new O(d, !0);
  };

  var P = function P(a) {
    if (!a) throw ga();
  },
      zb = function zb(a, b) {
    return function (c, d) {
      var e;

      a: {
        try {
          e = JSON.parse(d);
        } catch (h) {
          e = null;
          break a;
        }

        c = _typeof(e);
        e = "object" == c && null != e || "function" == c ? e : null;
      }

      if (null === e) e = null;else {
        c = {
          type: "file"
        };
        d = b.length;

        for (var f = 0; f < d; f++) {
          var g = b[f];
          c[g.b] = g.a(c, e[g.c]);
        }

        rb(c, a);
        e = c;
      }
      P(null !== e);
      return e;
    };
  },
      Q = function Q(a) {
    return function (b, c) {
      b = 401 === F(b) ? new u("unauthenticated", "User is not authenticated, please authenticate using Firebase Authentication and try again.") : 402 === F(b) ? new u("quota-exceeded", "Quota for bucket '" + a.bucket + "' exceeded, please view quota on https://firebase.google.com/pricing/.") : 403 === F(b) ? new u("unauthorized", "User does not have permission to access '" + a.path + "'.") : c;
      b.serverResponse = c.serverResponse;
      return b;
    };
  },
      Ab = function Ab(a) {
    var b = Q(a);
    return function (c, d) {
      var e = b(c, d);
      404 === F(c) && (e = new u("object-not-found", "Object '" + a.path + "' does not exist."));
      e.serverResponse = d.serverResponse;
      return e;
    };
  },
      Bb = function Bb(a, b, c) {
    var d = za(b);
    a = new w(t + "/v0" + d, "GET", zb(a, c), a.c);
    a.a = Ab(b);
    return a;
  },
      Cb = function Cb(a, b) {
    var c = za(b);
    a = new w(t + "/v0" + c, "DELETE", function () {}, a.c);
    a.c = [200, 204];
    a.a = Ab(b);
    return a;
  },
      Db = function Db(a, b, c) {
    c = c ? na(c) : {};
    c.fullPath = a.path;
    c.size = b.a;
    c.contentType || (a = b && b.type() || "application/octet-stream", c.contentType = a);
    return c;
  },
      Eb = function Eb(a, b, c, d, e) {
    var f = "/b/" + encodeURIComponent(b.bucket) + "/o",
        g = {
      "X-Goog-Upload-Protocol": "multipart"
    },
        h;
    h = "";

    for (var p = 0; 2 > p; p++) {
      h += Math.random().toString().slice(2);
    }

    g["Content-Type"] = "multipart/related; boundary=" + h;
    e = Db(b, d, e);
    p = sb(e, c);
    d = yb("--" + h + "\r\nContent-Type: application/json; charset=utf-8\r\n\r\n" + p + "\r\n--" + h + "\r\nContent-Type: " + e.contentType + "\r\n\r\n", d, "\r\n--" + h + "--");
    if (null === d) throw ia();
    a = new w(t + "/v0" + f, "POST", zb(a, c), a.b);
    a.b = {
      name: e.fullPath
    };
    a.headers = g;
    a.body = d.i;
    a.a = Q(b);
    return a;
  },
      Fb = function Fb(a, b, c, d) {
    this.a = a;
    this.total = b;
    this.b = !!c;
    this.c = d || null;
  },
      Gb = function Gb(a, b) {
    var c;

    try {
      c = a.a.getResponseHeader("X-Goog-Upload-Status");
    } catch (d) {
      P(!1);
    }

    P(r(b || ["active"], c));
    return c;
  },
      Hb = function Hb(a, b, c, d, e) {
    var f = "/b/" + encodeURIComponent(b.bucket) + "/o",
        g = Db(b, d, e);
    e = {
      name: g.fullPath
    };
    f = t + "/v0" + f;
    d = {
      "X-Goog-Upload-Protocol": "resumable",
      "X-Goog-Upload-Command": "start",
      "X-Goog-Upload-Header-Content-Length": d.a,
      "X-Goog-Upload-Header-Content-Type": g.contentType,
      "Content-Type": "application/json; charset=utf-8"
    };
    c = sb(g, c);
    a = new w(f, "POST", function (a) {
      Gb(a);
      var b;

      try {
        b = a.a.getResponseHeader("X-Goog-Upload-URL");
      } catch (B) {
        P(!1);
      }

      P(ta(b));
      return b;
    }, a.b);
    a.b = e;
    a.headers = d;
    a.body = c;
    a.a = Q(b);
    return a;
  },
      Ib = function Ib(a, b, c, d) {
    a = new w(c, "POST", function (a) {
      var b = Gb(a, ["active", "final"]),
          c;

      try {
        c = a.a.getResponseHeader("X-Goog-Upload-Size-Received");
      } catch (h) {
        P(!1);
      }

      a = c;
      isFinite(a) && (a = String(a));
      a = "string" == typeof a ? /^\s*-?0x/i.test(a) ? parseInt(a, 16) : parseInt(a, 10) : NaN;
      P(!isNaN(a));
      return new Fb(a, d.a, "final" === b);
    }, a.b);
    a.headers = {
      "X-Goog-Upload-Command": "query"
    };
    a.a = Q(b);
    a.f = !1;
    return a;
  },
      Jb = function Jb(a, b, c, d, e, f, g) {
    var h = new Fb(0, 0);
    g ? (h.a = g.a, h.total = g.total) : (h.a = 0, h.total = d.a);
    if (d.a !== h.total) throw new u("server-file-wrong-size", "Server recorded incorrect upload file size, please retry the upload.");
    var p = g = h.total - h.a;
    0 < e && (p = Math.min(p, e));
    var B = h.a;
    e = {
      "X-Goog-Upload-Command": p === g ? "upload, finalize" : "upload",
      "X-Goog-Upload-Offset": h.a
    };
    g = d.slice(B, B + p);
    if (null === g) throw ia();
    c = new w(c, "POST", function (a, c) {
      var e = Gb(a, ["active", "final"]),
          g = h.a + p,
          C = d.a,
          z;
      "final" === e ? z = zb(b, f)(a, c) : z = null;
      return new Fb(g, C, "final" === e, z);
    }, b.b);
    c.headers = e;
    c.body = g.i;
    c.l = null;
    c.a = Q(a);
    c.f = !1;
    return c;
  };

  var T = function T(a, b, c, d, e, f) {
    this.L = a;
    this.c = b;
    this.l = c;
    this.f = e;
    this.h = f || null;
    this.s = d;
    this.m = 0;
    this.D = this.u = !1;
    this.B = [];
    this.S = 262144 < this.f.a;
    this.b = "running";
    this.a = this.v = this.g = null;
    this.j = 1;
    var g = this;

    this.F = function (a) {
      g.a = null;
      g.j = 1;
      "storage/canceled" === a.code ? (g.u = !0, R(g)) : (g.g = a, S(g, "error"));
    };

    this.P = function (a) {
      g.a = null;
      "storage/canceled" === a.code ? R(g) : (g.g = a, S(g, "error"));
    };

    this.A = this.o = null;
    this.C = qa(function (a, b) {
      g.o = a;
      g.A = b;
      Kb(g);
    });
    this.C.then(null, function () {});
  },
      Kb = function Kb(a) {
    "running" === a.b && null === a.a && (a.S ? null === a.v ? Lb(a) : a.u ? Mb(a) : a.D ? Nb(a) : Ob(a) : Pb(a));
  },
      U = function U(a, b) {
    $a(a.c).then(function (c) {
      switch (a.b) {
        case "running":
          b(c);
          break;

        case "canceling":
          S(a, "canceled");
          break;

        case "pausing":
          S(a, "paused");
      }
    });
  },
      Lb = function Lb(a) {
    U(a, function (b) {
      var c = Hb(a.c, a.l, a.s, a.f, a.h);
      a.a = I(a.c, c, b);
      a.a.a().then(function (b) {
        a.a = null;
        a.v = b;
        a.u = !1;
        R(a);
      }, this.F);
    });
  },
      Mb = function Mb(a) {
    var b = a.v;
    U(a, function (c) {
      var d = Ib(a.c, a.l, b, a.f);
      a.a = I(a.c, d, c);
      a.a.a().then(function (b) {
        a.a = null;
        Qb(a, b.a);
        a.u = !1;
        b.b && (a.D = !0);
        R(a);
      }, a.F);
    });
  },
      Ob = function Ob(a) {
    var b = 262144 * a.j,
        c = new Fb(a.m, a.f.a),
        d = a.v;
    U(a, function (e) {
      var f;

      try {
        f = Jb(a.l, a.c, d, a.f, b, a.s, c);
      } catch (g) {
        a.g = g;
        S(a, "error");
        return;
      }

      a.a = I(a.c, f, e);
      a.a.a().then(function (b) {
        33554432 > 262144 * a.j && (a.j *= 2);
        a.a = null;
        Qb(a, b.a);
        b.b ? (a.h = b.c, S(a, "success")) : R(a);
      }, a.F);
    });
  },
      Nb = function Nb(a) {
    U(a, function (b) {
      var c = Bb(a.c, a.l, a.s);
      a.a = I(a.c, c, b);
      a.a.a().then(function (b) {
        a.a = null;
        a.h = b;
        S(a, "success");
      }, a.P);
    });
  },
      Pb = function Pb(a) {
    U(a, function (b) {
      var c = Eb(a.c, a.l, a.s, a.f, a.h);
      a.a = I(a.c, c, b);
      a.a.a().then(function (b) {
        a.a = null;
        a.h = b;
        Qb(a, a.f.a);
        S(a, "success");
      }, a.F);
    });
  },
      Qb = function Qb(a, b) {
    var c = a.m;
    a.m = b;
    a.m > c && V(a);
  },
      S = function S(a, b) {
    if (a.b !== b) switch (b) {
      case "canceling":
        a.b = b;
        null !== a.a && a.a.cancel();
        break;

      case "pausing":
        a.b = b;
        null !== a.a && a.a.cancel();
        break;

      case "running":
        var c = "paused" === a.b;
        a.b = b;
        c && (V(a), Kb(a));
        break;

      case "paused":
        a.b = b;
        V(a);
        break;

      case "canceled":
        a.g = ha();
        a.b = b;
        V(a);
        break;

      case "error":
        a.b = b;
        V(a);
        break;

      case "success":
        a.b = b, V(a);
    }
  },
      R = function R(a) {
    switch (a.b) {
      case "pausing":
        S(a, "paused");
        break;

      case "canceling":
        S(a, "canceled");
        break;

      case "running":
        Kb(a);
    }
  };

  T.prototype.w = function () {
    return new G(this.m, this.f.a, sa(this.b), this.h, this, this.L);
  };

  T.prototype.M = function (a, b, c, d) {
    function e(a) {
      try {
        g(a);
        return;
      } catch (z) {}

      try {
        if (h(a), !(q(a.next) || q(a.error) || q(a.complete))) throw "";
      } catch (z) {
        throw "Expected a function or an Object with one of `next`, `error`, `complete` properties.";
      }
    }

    function f(a) {
      return function (b, c, d) {
        null !== a && K("on", a, arguments);
        var e = new Ba(b, c, d);
        Rb(p, e);
        return function () {
          var a = p.B,
              b = a.indexOf(e);
          -1 !== b && a.splice(b, 1);
        };
      };
    }

    var g = N().a,
        h = xb(null, !0).a;
    K("on", [M(function () {
      if ("state_changed" !== a) throw "Expected one of the event types: [state_changed].";
    }), xb(e, !0), N(), N()], arguments);
    var p = this,
        B = [xb(function (a) {
      if (null === a) throw "Expected a function or an Object with one of `next`, `error`, `complete` properties.";
      e(a);
    }), N(), N()];
    return q(b) || q(c) || q(d) ? f(null)(b, c, d) : f(B);
  };

  T.prototype.then = function (a, b) {
    return this.C.then(a, b);
  };

  T.prototype["catch"] = function (a) {
    return this.then(null, a);
  };

  var Rb = function Rb(a, b) {
    a.B.push(b);
    Sb(a, b);
  },
      V = function V(a) {
    Tb(a);
    Array.prototype.slice.call(a.B).forEach(function (b) {
      Sb(a, b);
    });
  },
      Tb = function Tb(a) {
    if (null !== a.o) {
      var b = !0;

      switch (sa(a.b)) {
        case "success":
          A(a.o.bind(null, a.w()))();
          break;

        case "canceled":
        case "error":
          A(a.A.bind(null, a.g))();
          break;

        default:
          b = !1;
      }

      b && (a.o = null, a.A = null);
    }
  },
      Sb = function Sb(a, b) {
    switch (sa(a.b)) {
      case "running":
      case "paused":
        null !== b.b && A(b.b.bind(b, a.w()))();
        break;

      case "success":
        null !== b.a && A(b.a.bind(b))();
        break;

      case "canceled":
      case "error":
        null !== b.error && A(b.error.bind(b, a.g))();
        break;

      default:
        null !== b.error && A(b.error.bind(b, a.g))();
    }
  };

  T.prototype.O = function () {
    K("resume", [], arguments);
    var a = "paused" === this.b || "pausing" === this.b;
    a && S(this, "running");
    return a;
  };

  T.prototype.N = function () {
    K("pause", [], arguments);
    var a = "running" === this.b;
    a && S(this, "pausing");
    return a;
  };

  T.prototype.cancel = function () {
    K("cancel", [], arguments);
    var a = "running" === this.b || "pausing" === this.b;
    a && S(this, "canceling");
    return a;
  };

  var W = function W(a, b) {
    this.a = a;
    if (b) this.location = b instanceof D ? b : Aa(b);else if (a = a.bucket(), null !== a) this.location = new D(a, "");else throw new u("no-default-bucket", "No default bucket found. Did you set the 'storageBucket' property when initializing the app?");
  };

  W.prototype.toString = function () {
    K("toString", [], arguments);
    return "gs://" + this.location.bucket + "/" + this.location.path;
  };

  var Ub = function Ub(a, b) {
    return new W(a, b);
  };

  k = W.prototype;

  k.H = function (a) {
    K("child", [M()], arguments);
    var b = oa(this.location.path, a);
    return Ub(this.a, new D(this.location.bucket, b));
  };

  k.ka = function () {
    var a;
    a = this.location.path;
    if (0 == a.length) a = null;else {
      var b = a.lastIndexOf("/");
      a = -1 === b ? "" : a.slice(0, b);
    }
    return null === a ? null : Ub(this.a, new D(this.location.bucket, a));
  };

  k.ma = function () {
    return Ub(this.a, new D(this.location.bucket, ""));
  };

  k.U = function () {
    return this.location.bucket;
  };

  k.fa = function () {
    return this.location.path;
  };

  k.ja = function () {
    return pa(this.location.path);
  };

  k.oa = function () {
    return this.a.l;
  };

  k.Z = function (a, b) {
    K("put", [vb(), new L(tb, !0)], arguments);
    X(this, "put");
    return new T(this, this.a, this.location, qb(), new O(a), b);
  };

  k.$ = function (a, b, c) {
    K("putString", [M(), M(Ca, !0), new L(tb, !0)], arguments);
    X(this, "putString");
    var d = Ha(y(b) ? b : "raw", a),
        e = c ? na(c) : {};
    !y(e.contentType) && y(d.a) && (e.contentType = d.a);
    return new T(this, this.a, this.location, qb(), new O(d.data, !0), e);
  };

  k.X = function () {
    K("delete", [], arguments);
    X(this, "delete");
    var a = this;
    return $a(this.a).then(function (b) {
      var c = Cb(a.a, a.location);
      return I(a.a, c, b).a();
    });
  };

  k.I = function () {
    K("getMetadata", [], arguments);
    X(this, "getMetadata");
    var a = this;
    return $a(this.a).then(function (b) {
      var c = Bb(a.a, a.location, qb());
      return I(a.a, c, b).a();
    });
  };

  k.aa = function (a) {
    K("updateMetadata", [new L(tb, void 0)], arguments);
    X(this, "updateMetadata");
    var b = this;
    return $a(this.a).then(function (c) {
      var d = b.a,
          e = b.location,
          f = a,
          g = qb(),
          h = za(e),
          h = t + "/v0" + h,
          f = sb(f, g),
          d = new w(h, "PATCH", zb(d, g), d.c);
      d.headers = {
        "Content-Type": "application/json; charset=utf-8"
      };
      d.body = f;
      d.a = Ab(e);
      return I(b.a, d, c).a();
    });
  };

  k.Y = function () {
    K("getDownloadURL", [], arguments);
    X(this, "getDownloadURL");
    return this.I().then(function (a) {
      a = a.downloadURLs[0];
      if (y(a)) return a;
      throw new u("no-download-url", "The given file does not have any download URLs.");
    });
  };

  var X = function X(a, b) {
    if ("" === a.location.path) throw new u("invalid-root-operation", "The operation '" + b + "' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').");
  };

  var Y = function Y(a, b) {
    this.a = new Za(a, function (a, b) {
      return new W(a, b);
    }, Ta, this, y(b) ? b : new Ua());
    this.b = a;
    this.c = new Vb(this);
  };

  k = Y.prototype;

  k.ba = function (a) {
    K("ref", [M(function (a) {
      if (/^[A-Za-z]+:\/\//.test(a)) throw "Expected child path but got a URL, use refFromURL instead.";
    }, !0)], arguments);
    var b = new W(this.a);
    return q(a) ? b.H(a) : b;
  };

  k.ca = function (a) {
    K("refFromURL", [M(function (a) {
      if (!/^[A-Za-z]+:\/\//.test(a)) throw "Expected full URL but got a child path, use ref instead.";

      try {
        Aa(a);
      } catch (c) {
        throw "Expected valid full URL but got an invalid one.";
      }
    }, !1)], arguments);
    return new W(this.a, a);
  };

  k.ha = function () {
    return this.a.b;
  };

  k.ea = function (a) {
    K("setMaxUploadRetryTime", [wb()], arguments);
    this.a.b = a;
  };

  k.ga = function () {
    return this.a.c;
  };

  k.da = function (a) {
    K("setMaxOperationRetryTime", [wb()], arguments);
    this.a.c = a;
  };

  k.T = function () {
    return this.b;
  };

  k.R = function () {
    return this.c;
  };

  var Vb = function Vb(a) {
    this.a = a;
  };

  Vb.prototype.b = function () {
    var a = this.a.a;
    a.f = !0;
    a.a = null;
    Ya(a.h);
  };

  var Z = function Z(a, b, c) {
    Object.defineProperty(a, b, {
      get: c
    });
  };

  W.prototype.toString = W.prototype.toString;
  W.prototype.child = W.prototype.H;
  W.prototype.put = W.prototype.Z;
  W.prototype.putString = W.prototype.$;
  W.prototype["delete"] = W.prototype.X;
  W.prototype.getMetadata = W.prototype.I;
  W.prototype.updateMetadata = W.prototype.aa;
  W.prototype.getDownloadURL = W.prototype.Y;
  Z(W.prototype, "parent", W.prototype.ka);
  Z(W.prototype, "root", W.prototype.ma);
  Z(W.prototype, "bucket", W.prototype.U);
  Z(W.prototype, "fullPath", W.prototype.fa);
  Z(W.prototype, "name", W.prototype.ja);
  Z(W.prototype, "storage", W.prototype.oa);
  Y.prototype.ref = Y.prototype.ba;
  Y.prototype.refFromURL = Y.prototype.ca;
  Z(Y.prototype, "maxOperationRetryTime", Y.prototype.ga);
  Y.prototype.setMaxOperationRetryTime = Y.prototype.da;
  Z(Y.prototype, "maxUploadRetryTime", Y.prototype.ha);
  Y.prototype.setMaxUploadRetryTime = Y.prototype.ea;
  Z(Y.prototype, "app", Y.prototype.T);
  Z(Y.prototype, "INTERNAL", Y.prototype.R);
  Vb.prototype["delete"] = Vb.prototype.b;

  Y.prototype.capi_ = function (a) {
    t = a;
  };

  T.prototype.on = T.prototype.M;
  T.prototype.resume = T.prototype.O;
  T.prototype.pause = T.prototype.N;
  T.prototype.cancel = T.prototype.cancel;
  T.prototype.then = T.prototype.then;
  T.prototype["catch"] = T.prototype["catch"];
  Z(T.prototype, "snapshot", T.prototype.w);
  Z(G.prototype, "bytesTransferred", G.prototype.V);
  Z(G.prototype, "totalBytes", G.prototype.qa);
  Z(G.prototype, "state", G.prototype.na);
  Z(G.prototype, "metadata", G.prototype.ia);
  Z(G.prototype, "downloadURL", G.prototype.W);
  Z(G.prototype, "task", G.prototype.pa);
  Z(G.prototype, "ref", G.prototype.la);
  ra.STATE_CHANGED = "state_changed";
  x.RUNNING = "running";
  x.PAUSED = "paused";
  x.SUCCESS = "success";
  x.CANCELED = "canceled";
  x.ERROR = "error";
  E.RAW = "raw";
  E.BASE64 = "base64";
  E.BASE64URL = "base64url";
  E.DATA_URL = "data_url";

  (function () {
    function a(a) {
      return new Y(a);
    }

    var b = {
      TaskState: x,
      TaskEvent: ra,
      StringFormat: E,
      Storage: Y,
      Reference: W
    };
    if ("undefined" !== typeof firebase) firebase.INTERNAL.registerService("storage", a, b);else throw Error("Cannot install Firebase Storage - be sure to load firebase-app.js first.");
  })();
}).call(void 0);