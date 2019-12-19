/*!
 * 
 *  filerobot-image-editor v3.4.0
 *  https://github.com/scaleflex/filerobot-image-editor
 * 
 *  Copyright (c) 2019 scaleflex
 *  Released under the MIT license
 * 
 *  Date: 2019-11-11T16:58:03.490Z
 * 
 */
!function (e) {
    var t = {};

    function n(r) {
        if (t[r]) return t[r].exports;
        var i = t[r] = {i: r, l: !1, exports: {}};
        return e[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports
    }

    n.m = e, n.c = t, n.d = function (e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, {enumerable: !0, get: r})
    }, n.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
    }, n.t = function (e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var r = Object.create(null);
        if (n.r(r), Object.defineProperty(r, "default", {
            enumerable: !0,
            value: e
        }), 2 & t && "string" != typeof e) for (var i in e) n.d(r, i, function (t) {
            return e[t]
        }.bind(null, i));
        return r
    }, n.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "https://cdn.scaleflex.it/plugins/filerobot-image-editor/3/", n(n.s = 68)
}([function (e, t, n) {
    "use strict";
    e.exports = n(20)
}, function (e, t, n) {
    "use strict";
    (function (e) {
        n.d(t, "a", (function () {
            return Ve
        }));
        var r = n(6), i = n.n(r), o = n(11), a = n.n(o), l = n(0), s = n.n(l), c = n(12), u = n(7), f = n(8),
            p = (n(25), n(17)), d = n(18), h = function (e, t) {
                for (var n = [e[0]], r = 0, i = t.length; r < i; r += 1) n.push(t[r], e[r + 1]);
                return n
            }, m = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }, g = function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }, b = function () {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }

                return function (t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(), y = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }, v = function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }, _ = function (e, t) {
                var n = {};
                for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
                return n
            }, w = function (e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }, x = function (e) {
                return "object" === (void 0 === e ? "undefined" : m(e)) && e.constructor === Object
            }, C = Object.freeze([]), E = Object.freeze({});

        function k(e) {
            return "function" == typeof e
        }

        function O(e) {
            return e.displayName || e.name || "Component"
        }

        function T(e) {
            return e && "string" == typeof e.styledComponentId
        }

        var R = void 0 !== e && (e.env.REACT_APP_SC_ATTR || e.env.SC_ATTR) || "data-styled",
            S = "undefined" != typeof window && "HTMLElement" in window,
            A = "boolean" == typeof SC_DISABLE_SPEEDY && SC_DISABLE_SPEEDY || void 0 !== e && (e.env.REACT_APP_SC_DISABLE_SPEEDY || e.env.SC_DISABLE_SPEEDY) || !1;
        var j = function (e) {
                function t(n) {
                    g(this, t);
                    for (var r = arguments.length, i = Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++) i[o - 1] = arguments[o];
                    var a = w(this, e.call(this, "An error occurred. See https://github.com/styled-components/styled-components/blob/master/packages/styled-components/src/utils/errors.md#" + n + " for more information." + (i.length > 0 ? " Additional arguments: " + i.join(", ") : "")));
                    return w(a)
                }

                return v(t, e), t
            }(Error), P = /^[^\S\n]*?\/\* sc-component-id:\s*(\S+)\s+\*\//gm, D = function (e) {
                var t = "" + (e || ""), n = [];
                return t.replace(P, (function (e, t, r) {
                    return n.push({componentId: t, matchIndex: r}), e
                })), n.map((function (e, r) {
                    var i = e.componentId, o = e.matchIndex, a = n[r + 1];
                    return {componentId: i, cssFromDOM: a ? t.slice(o, a.matchIndex) : t.slice(o)}
                }))
            }, L = /^\s*\/\/.*$/gm,
            I = new i.a({global: !1, cascade: !0, keyframe: !1, prefix: !1, compress: !1, semicolon: !0}),
            M = new i.a({global: !1, cascade: !0, keyframe: !1, prefix: !0, compress: !1, semicolon: !1}), B = [],
            z = function (e) {
                if (-2 === e) {
                    var t = B;
                    return B = [], t
                }
            }, U = a()((function (e) {
                B.push(e)
            })), H = void 0, F = void 0, N = void 0, W = function (e, t, n) {
                return t > 0 && -1 !== n.slice(0, t).indexOf(F) && n.slice(t - F.length, t) !== F ? "." + H : e
            };
        M.use([function (e, t, n) {
            2 === e && n.length && n[0].lastIndexOf(F) > 0 && (n[0] = n[0].replace(N, W))
        }, U, z]), I.use([U, z]);
        var Y = function (e) {
            return I("", e)
        };

        function q(e, t, n) {
            var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "&", i = e.join("").replace(L, ""),
                o = t && n ? n + " " + t + " { " + i + " }" : i;
            return H = r, F = t, N = new RegExp("\\" + F + "\\b", "g"), M(n || !t ? "" : t, o)
        }

        var $ = function () {
            return n.nc
        }, V = function (e, t, n) {
            n && ((e[t] || (e[t] = Object.create(null)))[n] = !0)
        }, X = function (e, t) {
            e[t] = Object.create(null)
        }, K = function (e) {
            return function (t, n) {
                return void 0 !== e[t] && e[t][n]
            }
        }, Z = function (e) {
            var t = "";
            for (var n in e) t += Object.keys(e[n]).join(" ") + " ";
            return t.trim()
        }, Q = function (e) {
            if (e.sheet) return e.sheet;
            for (var t = e.ownerDocument.styleSheets.length, n = 0; n < t; n += 1) {
                var r = e.ownerDocument.styleSheets[n];
                if (r.ownerNode === e) return r
            }
            throw new j(10)
        }, G = function (e, t, n) {
            if (!t) return !1;
            var r = e.cssRules.length;
            try {
                e.insertRule(t, n <= r ? n : r)
            } catch (e) {
                return !1
            }
            return !0
        }, J = function (e) {
            return "\n/* sc-component-id: " + e + " */\n"
        }, ee = function (e, t) {
            for (var n = 0, r = 0; r <= t; r += 1) n += e[r];
            return n
        }, te = function (e, t) {
            return function (n) {
                var r = $();
                return "<style " + [r && 'nonce="' + r + '"', R + '="' + Z(t) + '"', 'data-styled-version="4.4.0"', n].filter(Boolean).join(" ") + ">" + e() + "</style>"
            }
        }, ne = function (e, t) {
            return function () {
                var n, r = ((n = {})[R] = Z(t), n["data-styled-version"] = "4.4.0", n), i = $();
                return i && (r.nonce = i), s.a.createElement("style", y({}, r, {dangerouslySetInnerHTML: {__html: e()}}))
            }
        }, re = function (e) {
            return function () {
                return Object.keys(e)
            }
        }, ie = function (e, t) {
            return e.createTextNode(J(t))
        }, oe = function e(t, n) {
            var r = void 0 === t ? Object.create(null) : t, i = void 0 === n ? Object.create(null) : n,
                o = function (e) {
                    var t = i[e];
                    return void 0 !== t ? t : i[e] = [""]
                }, a = function () {
                    var e = "";
                    for (var t in i) {
                        var n = i[t][0];
                        n && (e += J(t) + n)
                    }
                    return e
                };
            return {
                clone: function () {
                    var t = function (e) {
                        var t = Object.create(null);
                        for (var n in e) t[n] = y({}, e[n]);
                        return t
                    }(r), n = Object.create(null);
                    for (var o in i) n[o] = [i[o][0]];
                    return e(t, n)
                }, css: a, getIds: re(i), hasNameForId: K(r), insertMarker: o, insertRules: function (e, t, n) {
                    o(e)[0] += t.join(" "), V(r, e, n)
                }, removeRules: function (e) {
                    var t = i[e];
                    void 0 !== t && (t[0] = "", X(r, e))
                }, sealed: !1, styleTag: null, toElement: ne(a, r), toHTML: te(a, r)
            }
        }, ae = function (e, t, n, r, i) {
            if (S && !n) {
                var o = function (e, t, n) {
                    var r = document;
                    e ? r = e.ownerDocument : t && (r = t.ownerDocument);
                    var i = r.createElement("style");
                    i.setAttribute(R, ""), i.setAttribute("data-styled-version", "4.4.0");
                    var o = $();
                    if (o && i.setAttribute("nonce", o), i.appendChild(r.createTextNode("")), e && !t) e.appendChild(i); else {
                        if (!t || !e || !t.parentNode) throw new j(6);
                        t.parentNode.insertBefore(i, n ? t : t.nextSibling)
                    }
                    return i
                }(e, t, r);
                return A ? function (e, t) {
                    var n = Object.create(null), r = Object.create(null), i = void 0 !== t, o = !1, a = function (t) {
                        var i = r[t];
                        return void 0 !== i ? i : (r[t] = ie(e.ownerDocument, t), e.appendChild(r[t]), n[t] = Object.create(null), r[t])
                    }, l = function () {
                        var e = "";
                        for (var t in r) e += r[t].data;
                        return e
                    };
                    return {
                        clone: function () {
                            throw new j(5)
                        }, css: l, getIds: re(r), hasNameForId: K(n), insertMarker: a, insertRules: function (e, r, l) {
                            for (var s = a(e), c = [], u = r.length, f = 0; f < u; f += 1) {
                                var p = r[f], d = i;
                                if (d && -1 !== p.indexOf("@import")) c.push(p); else {
                                    d = !1;
                                    var h = f === u - 1 ? "" : " ";
                                    s.appendData("" + p + h)
                                }
                            }
                            V(n, e, l), i && c.length > 0 && (o = !0, t().insertRules(e + "-import", c))
                        }, removeRules: function (a) {
                            var l = r[a];
                            if (void 0 !== l) {
                                var s = ie(e.ownerDocument, a);
                                e.replaceChild(s, l), r[a] = s, X(n, a), i && o && t().removeRules(a + "-import")
                            }
                        }, sealed: !1, styleTag: e, toElement: ne(l, n), toHTML: te(l, n)
                    }
                }(o, i) : function (e, t) {
                    var n = Object.create(null), r = Object.create(null), i = [], o = void 0 !== t, a = !1,
                        l = function (e) {
                            var t = r[e];
                            return void 0 !== t ? t : (r[e] = i.length, i.push(0), X(n, e), r[e])
                        }, s = function () {
                            var t = Q(e).cssRules, n = "";
                            for (var o in r) {
                                n += J(o);
                                for (var a = r[o], l = ee(i, a), s = l - i[a]; s < l; s += 1) {
                                    var c = t[s];
                                    void 0 !== c && (n += c.cssText)
                                }
                            }
                            return n
                        };
                    return {
                        clone: function () {
                            throw new j(5)
                        }, css: s, getIds: re(r), hasNameForId: K(n), insertMarker: l, insertRules: function (r, s, c) {
                            for (var u = l(r), f = Q(e), p = ee(i, u), d = 0, h = [], m = s.length, g = 0; g < m; g += 1) {
                                var b = s[g], y = o;
                                y && -1 !== b.indexOf("@import") ? h.push(b) : G(f, b, p + d) && (y = !1, d += 1)
                            }
                            o && h.length > 0 && (a = !0, t().insertRules(r + "-import", h)), i[u] += d, V(n, r, c)
                        }, removeRules: function (l) {
                            var s = r[l];
                            if (void 0 !== s && !1 !== e.isConnected) {
                                var c = i[s];
                                !function (e, t, n) {
                                    for (var r = t - n, i = t; i > r; i -= 1) e.deleteRule(i)
                                }(Q(e), ee(i, s) - 1, c), i[s] = 0, X(n, l), o && a && t().removeRules(l + "-import")
                            }
                        }, sealed: !1, styleTag: e, toElement: ne(s, n), toHTML: te(s, n)
                    }
                }(o, i)
            }
            return oe()
        }, le = /\s+/, se = void 0;
        se = S ? A ? 40 : 1e3 : -1;
        var ce = 0, ue = void 0, fe = function () {
            function e() {
                var t = this,
                    n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : S ? document.head : null,
                    r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                g(this, e), this.getImportRuleTag = function () {
                    var e = t.importRuleTag;
                    if (void 0 !== e) return e;
                    var n = t.tags[0];
                    return t.importRuleTag = ae(t.target, n ? n.styleTag : null, t.forceServer, !0)
                }, ce += 1, this.id = ce, this.forceServer = r, this.target = r ? null : n, this.tagMap = {}, this.deferred = {}, this.rehydratedNames = {}, this.ignoreRehydratedNames = {}, this.tags = [], this.capacity = 1, this.clones = []
            }

            return e.prototype.rehydrate = function () {
                if (!S || this.forceServer) return this;
                var e = [], t = [], n = !1,
                    r = document.querySelectorAll("style[" + R + '][data-styled-version="4.4.0"]'), i = r.length;
                if (!i) return this;
                for (var o = 0; o < i; o += 1) {
                    var a = r[o];
                    n || (n = !!a.getAttribute("data-styled-streamed"));
                    for (var l, s = (a.getAttribute(R) || "").trim().split(le), c = s.length, u = 0; u < c; u += 1) l = s[u], this.rehydratedNames[l] = !0;
                    t.push.apply(t, D(a.textContent)), e.push(a)
                }
                var f = t.length;
                if (!f) return this;
                var p = this.makeTag(null);
                !function (e, t, n) {
                    for (var r = 0, i = n.length; r < i; r += 1) {
                        var o = n[r], a = o.componentId, l = o.cssFromDOM, s = Y(l);
                        e.insertRules(a, s)
                    }
                    for (var c = 0, u = t.length; c < u; c += 1) {
                        var f = t[c];
                        f.parentNode && f.parentNode.removeChild(f)
                    }
                }(p, e, t), this.capacity = Math.max(1, se - f), this.tags.push(p);
                for (var d = 0; d < f; d += 1) this.tagMap[t[d].componentId] = p;
                return this
            }, e.reset = function () {
                var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                ue = new e(void 0, t).rehydrate()
            }, e.prototype.clone = function () {
                var t = new e(this.target, this.forceServer);
                return this.clones.push(t), t.tags = this.tags.map((function (e) {
                    for (var n = e.getIds(), r = e.clone(), i = 0; i < n.length; i += 1) t.tagMap[n[i]] = r;
                    return r
                })), t.rehydratedNames = y({}, this.rehydratedNames), t.deferred = y({}, this.deferred), t
            }, e.prototype.sealAllTags = function () {
                this.capacity = 1, this.tags.forEach((function (e) {
                    e.sealed = !0
                }))
            }, e.prototype.makeTag = function (e) {
                var t = e ? e.styleTag : null;
                return ae(this.target, t, this.forceServer, !1, this.getImportRuleTag)
            }, e.prototype.getTagForId = function (e) {
                var t = this.tagMap[e];
                if (void 0 !== t && !t.sealed) return t;
                var n = this.tags[this.tags.length - 1];
                return this.capacity -= 1, 0 === this.capacity && (this.capacity = se, n = this.makeTag(n), this.tags.push(n)), this.tagMap[e] = n
            }, e.prototype.hasId = function (e) {
                return void 0 !== this.tagMap[e]
            }, e.prototype.hasNameForId = function (e, t) {
                if (void 0 === this.ignoreRehydratedNames[e] && this.rehydratedNames[t]) return !0;
                var n = this.tagMap[e];
                return void 0 !== n && n.hasNameForId(e, t)
            }, e.prototype.deferredInject = function (e, t) {
                if (void 0 === this.tagMap[e]) {
                    for (var n = this.clones, r = 0; r < n.length; r += 1) n[r].deferredInject(e, t);
                    this.getTagForId(e).insertMarker(e), this.deferred[e] = t
                }
            }, e.prototype.inject = function (e, t, n) {
                for (var r = this.clones, i = 0; i < r.length; i += 1) r[i].inject(e, t, n);
                var o = this.getTagForId(e);
                if (void 0 !== this.deferred[e]) {
                    var a = this.deferred[e].concat(t);
                    o.insertRules(e, a, n), this.deferred[e] = void 0
                } else o.insertRules(e, t, n)
            }, e.prototype.remove = function (e) {
                var t = this.tagMap[e];
                if (void 0 !== t) {
                    for (var n = this.clones, r = 0; r < n.length; r += 1) n[r].remove(e);
                    t.removeRules(e), this.ignoreRehydratedNames[e] = !0, this.deferred[e] = void 0
                }
            }, e.prototype.toHTML = function () {
                return this.tags.map((function (e) {
                    return e.toHTML()
                })).join("")
            }, e.prototype.toReactElements = function () {
                var e = this.id;
                return this.tags.map((function (t, n) {
                    var r = "sc-" + e + "-" + n;
                    return Object(l.cloneElement)(t.toElement(), {key: r})
                }))
            }, b(e, null, [{
                key: "master", get: function () {
                    return ue || (ue = (new e).rehydrate())
                }
            }, {
                key: "instance", get: function () {
                    return e.master
                }
            }]), e
        }(), pe = function () {
            function e(t, n) {
                var r = this;
                g(this, e), this.inject = function (e) {
                    e.hasNameForId(r.id, r.name) || e.inject(r.id, r.rules, r.name)
                }, this.toString = function () {
                    throw new j(12, String(r.name))
                }, this.name = t, this.rules = n, this.id = "sc-keyframes-" + t
            }

            return e.prototype.getName = function () {
                return this.name
            }, e
        }(), de = /([A-Z])/g, he = /^ms-/;

        function me(e) {
            return e.replace(de, "-$1").toLowerCase().replace(he, "-ms-")
        }

        var ge = function (e) {
            return null == e || !1 === e || "" === e
        }, be = function e(t, n) {
            var r = [];
            return Object.keys(t).forEach((function (n) {
                if (!ge(t[n])) {
                    if (x(t[n])) return r.push.apply(r, e(t[n], n)), r;
                    if (k(t[n])) return r.push(me(n) + ":", t[n], ";"), r;
                    r.push(me(n) + ": " + (i = n, null == (o = t[n]) || "boolean" == typeof o || "" === o ? "" : "number" != typeof o || 0 === o || i in c.a ? String(o).trim() : o + "px") + ";")
                }
                var i, o;
                return r
            })), n ? [n + " {"].concat(r, ["}"]) : r
        };

        function ye(e, t, n) {
            if (Array.isArray(e)) {
                for (var r, i = [], o = 0, a = e.length; o < a; o += 1) null !== (r = ye(e[o], t, n)) && (Array.isArray(r) ? i.push.apply(i, r) : i.push(r));
                return i
            }
            return ge(e) ? null : T(e) ? "." + e.styledComponentId : k(e) ? "function" != typeof (l = e) || l.prototype && l.prototype.isReactComponent || !t ? e : ye(e(t), t, n) : e instanceof pe ? n ? (e.inject(n), e.getName()) : e : x(e) ? be(e) : e.toString();
            var l
        }

        function ve(e) {
            for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
            return k(e) || x(e) ? ye(h(C, [e].concat(n))) : ye(h(e, n))
        }

        function _e(e) {
            for (var t, n = 0 | e.length, r = 0 | n, i = 0; n >= 4;) t = 1540483477 * (65535 & (t = 255 & e.charCodeAt(i) | (255 & e.charCodeAt(++i)) << 8 | (255 & e.charCodeAt(++i)) << 16 | (255 & e.charCodeAt(++i)) << 24)) + ((1540483477 * (t >>> 16) & 65535) << 16), r = 1540483477 * (65535 & r) + ((1540483477 * (r >>> 16) & 65535) << 16) ^ (t = 1540483477 * (65535 & (t ^= t >>> 24)) + ((1540483477 * (t >>> 16) & 65535) << 16)), n -= 4, ++i;
            switch (n) {
                case 3:
                    r ^= (255 & e.charCodeAt(i + 2)) << 16;
                case 2:
                    r ^= (255 & e.charCodeAt(i + 1)) << 8;
                case 1:
                    r = 1540483477 * (65535 & (r ^= 255 & e.charCodeAt(i))) + ((1540483477 * (r >>> 16) & 65535) << 16)
            }
            return ((r = 1540483477 * (65535 & (r ^= r >>> 13)) + ((1540483477 * (r >>> 16) & 65535) << 16)) ^ r >>> 15) >>> 0
        }

        var we = 52, xe = function (e) {
            return String.fromCharCode(e + (e > 25 ? 39 : 97))
        };

        function Ce(e) {
            var t = "", n = void 0;
            for (n = e; n > we; n = Math.floor(n / we)) t = xe(n % we) + t;
            return xe(n % we) + t
        }

        function Ee(e, t) {
            for (var n = 0; n < e.length; n += 1) {
                var r = e[n];
                if (Array.isArray(r) && !Ee(r, t)) return !1;
                if (k(r) && !T(r)) return !1
            }
            return !t.some((function (e) {
                return k(e) || function (e) {
                    for (var t in e) if (k(e[t])) return !0;
                    return !1
                }(e)
            }))
        }

        var ke, Oe = function (e) {
            return Ce(_e(e))
        }, Te = function () {
            function e(t, n, r) {
                g(this, e), this.rules = t, this.isStatic = Ee(t, n), this.componentId = r, fe.master.hasId(r) || fe.master.deferredInject(r, [])
            }

            return e.prototype.generateAndInjectStyles = function (e, t) {
                var n = this.isStatic, r = this.componentId, i = this.lastClassName;
                if (S && n && "string" == typeof i && t.hasNameForId(r, i)) return i;
                var o = ye(this.rules, e, t), a = Oe(this.componentId + o.join(""));
                return t.hasNameForId(r, a) || t.inject(this.componentId, q(o, "." + a, void 0, r), a), this.lastClassName = a, a
            }, e.generateName = function (e) {
                return Oe(e)
            }, e
        }(), Re = function (e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : E, r = !!n && e.theme === n.theme,
                i = e.theme && !r ? e.theme : t || n.theme;
            return i
        }, Se = /[[\].#*$><+~=|^:(),"'`-]+/g, Ae = /(^-|-$)/g;

        function je(e) {
            return e.replace(Se, "-").replace(Ae, "")
        }

        function Pe(e) {
            return "string" == typeof e && !0
        }

        var De = {
                childContextTypes: !0,
                contextTypes: !0,
                defaultProps: !0,
                displayName: !0,
                getDerivedStateFromProps: !0,
                propTypes: !0,
                type: !0
            }, Le = {name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0},
            Ie = ((ke = {})[u.ForwardRef] = {$$typeof: !0, render: !0}, ke), Me = Object.defineProperty,
            Be = Object.getOwnPropertyNames, ze = Object.getOwnPropertySymbols, Ue = void 0 === ze ? function () {
                return []
            } : ze, He = Object.getOwnPropertyDescriptor, Fe = Object.getPrototypeOf, Ne = Object.prototype,
            We = Array.prototype;

        function Ye(e, t, n) {
            if ("string" != typeof t) {
                var r = Fe(t);
                r && r !== Ne && Ye(e, r, n);
                for (var i = We.concat(Be(t), Ue(t)), o = Ie[e.$$typeof] || De, a = Ie[t.$$typeof] || De, l = i.length, s = void 0, c = void 0; l--;) if (c = i[l], !(Le[c] || n && n[c] || a && a[c] || o && o[c]) && (s = He(t, c))) try {
                    Me(e, c, s)
                } catch (e) {
                }
                return e
            }
            return e
        }

        var qe = Object(l.createContext)(), $e = qe.Consumer, Ve = function (e) {
            function t(n) {
                g(this, t);
                var r = w(this, e.call(this, n));
                return r.getContext = Object(f.a)(r.getContext.bind(r)), r.renderInner = r.renderInner.bind(r), r
            }

            return v(t, e), t.prototype.render = function () {
                return this.props.children ? s.a.createElement(qe.Consumer, null, this.renderInner) : null
            }, t.prototype.renderInner = function (e) {
                var t = this.getContext(this.props.theme, e);
                return s.a.createElement(qe.Provider, {value: t}, this.props.children)
            }, t.prototype.getTheme = function (e, t) {
                if (k(e)) return e(t);
                if (null === e || Array.isArray(e) || "object" !== (void 0 === e ? "undefined" : m(e))) throw new j(8);
                return y({}, t, e)
            }, t.prototype.getContext = function (e, t) {
                return this.getTheme(e, t)
            }, t
        }(l.Component), Xe = (function () {
            function e() {
                g(this, e), this.masterSheet = fe.master, this.instance = this.masterSheet.clone(), this.sealed = !1
            }

            e.prototype.seal = function () {
                if (!this.sealed) {
                    var e = this.masterSheet.clones.indexOf(this.instance);
                    this.masterSheet.clones.splice(e, 1), this.sealed = !0
                }
            }, e.prototype.collectStyles = function (e) {
                if (this.sealed) throw new j(2);
                return s.a.createElement(Ze, {sheet: this.instance}, e)
            }, e.prototype.getStyleTags = function () {
                return this.seal(), this.instance.toHTML()
            }, e.prototype.getStyleElement = function () {
                return this.seal(), this.instance.toReactElements()
            }, e.prototype.interleaveWithNodeStream = function (e) {
                throw new j(3)
            }
        }(), Object(l.createContext)()), Ke = Xe.Consumer, Ze = function (e) {
            function t(n) {
                g(this, t);
                var r = w(this, e.call(this, n));
                return r.getContext = Object(f.a)(r.getContext), r
            }

            return v(t, e), t.prototype.getContext = function (e, t) {
                if (e) return e;
                if (t) return new fe(t);
                throw new j(4)
            }, t.prototype.render = function () {
                var e = this.props, t = e.children, n = e.sheet, r = e.target;
                return s.a.createElement(Xe.Provider, {value: this.getContext(n, r)}, t)
            }, t
        }(l.Component), Qe = {};
        var Ge = function (e) {
            function t() {
                g(this, t);
                var n = w(this, e.call(this));
                return n.attrs = {}, n.renderOuter = n.renderOuter.bind(n), n.renderInner = n.renderInner.bind(n), n
            }

            return v(t, e), t.prototype.render = function () {
                return s.a.createElement(Ke, null, this.renderOuter)
            }, t.prototype.renderOuter = function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : fe.master;
                return this.styleSheet = e, this.props.forwardedComponent.componentStyle.isStatic ? this.renderInner() : s.a.createElement($e, null, this.renderInner)
            }, t.prototype.renderInner = function (e) {
                var t = this.props.forwardedComponent, n = t.componentStyle, r = t.defaultProps,
                    i = (t.displayName, t.foldedComponentIds), o = t.styledComponentId, a = t.target,
                    s = (t.usesTheme, void 0), c = void 0;
                n.isStatic ? s = this.generateAndInjectStyles(E, this.props) : (c = Re(this.props, e, r), s = this.generateAndInjectStyles(c || E, this.props));
                var u = this.props.as || this.attrs.as || a, f = Pe(u), d = {}, h = y({}, this.props, this.attrs),
                    m = void 0;
                for (m in h) "forwardedComponent" !== m && "as" !== m && ("forwardedRef" === m ? d.ref = h[m] : "forwardedAs" === m ? d.as = h[m] : f && !Object(p.a)(m) || (d[m] = h[m]));
                return this.props.style && this.attrs.style && (d.style = y({}, this.attrs.style, this.props.style)), d.className = Array.prototype.concat(i, o, s !== o ? s : null, this.props.className, this.attrs.className).filter(Boolean).join(" "), Object(l.createElement)(u, d)
            }, t.prototype.buildExecutionContext = function (e, t, n) {
                var r = this, i = y({}, t, {theme: e});
                return n.length ? (this.attrs = {}, n.forEach((function (e) {
                    var t, n = e, o = !1, a = void 0, l = void 0;
                    for (l in k(n) && (n = n(i), o = !0), n) a = n[l], o || !k(a) || (t = a) && t.prototype && t.prototype.isReactComponent || T(a) || (a = a(i)), r.attrs[l] = a, i[l] = a
                })), i) : i
            }, t.prototype.generateAndInjectStyles = function (e, t) {
                var n = t.forwardedComponent, r = n.attrs, i = n.componentStyle;
                n.warnTooManyClasses;
                return i.isStatic && !r.length ? i.generateAndInjectStyles(E, this.styleSheet) : i.generateAndInjectStyles(this.buildExecutionContext(e, t, r), this.styleSheet)
            }, t
        }(l.Component);

        function Je(e, t, n) {
            var r = T(e), i = !Pe(e), o = t.displayName, a = void 0 === o ? function (e) {
                    return Pe(e) ? "styled." + e : "Styled(" + O(e) + ")"
                }(e) : o, l = t.componentId, c = void 0 === l ? function (e, t, n) {
                    var r = "string" != typeof t ? "sc" : je(t), i = (Qe[r] || 0) + 1;
                    Qe[r] = i;
                    var o = r + "-" + e.generateName(r + i);
                    return n ? n + "-" + o : o
                }(Te, t.displayName, t.parentComponentId) : l, u = t.ParentComponent, f = void 0 === u ? Ge : u,
                p = t.attrs, h = void 0 === p ? C : p,
                m = t.displayName && t.componentId ? je(t.displayName) + "-" + t.componentId : t.componentId || c,
                g = r && e.attrs ? Array.prototype.concat(e.attrs, h).filter(Boolean) : h,
                b = new Te(r ? e.componentStyle.rules.concat(n) : n, g, m), v = void 0, w = function (e, t) {
                    return s.a.createElement(f, y({}, e, {forwardedComponent: v, forwardedRef: t}))
                };
            return w.displayName = a, (v = s.a.forwardRef(w)).displayName = a, v.attrs = g, v.componentStyle = b, v.foldedComponentIds = r ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId) : C, v.styledComponentId = m, v.target = r ? e.target : e, v.withComponent = function (e) {
                var r = t.componentId, i = _(t, ["componentId"]), o = r && r + "-" + (Pe(e) ? e : je(O(e)));
                return Je(e, y({}, i, {attrs: g, componentId: o, ParentComponent: f}), n)
            }, Object.defineProperty(v, "defaultProps", {
                get: function () {
                    return this._foldedDefaultProps
                }, set: function (t) {
                    this._foldedDefaultProps = r ? Object(d.a)(e.defaultProps, t) : t
                }
            }), v.toString = function () {
                return "." + v.styledComponentId
            }, i && Ye(v, e, {
                attrs: !0,
                componentStyle: !0,
                displayName: !0,
                foldedComponentIds: !0,
                styledComponentId: !0,
                target: !0,
                withComponent: !0
            }), v
        }

        var et = function (e) {
            return function e(t, n) {
                var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : E;
                if (!Object(u.isValidElementType)(n)) throw new j(1, String(n));
                var i = function () {
                    return t(n, r, ve.apply(void 0, arguments))
                };
                return i.withConfig = function (i) {
                    return e(t, n, y({}, r, i))
                }, i.attrs = function (i) {
                    return e(t, n, y({}, r, {attrs: Array.prototype.concat(r.attrs, i).filter(Boolean)}))
                }, i
            }(Je, e)
        };
        ["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"].forEach((function (e) {
            et[e] = et(e)
        }));
        !function () {
            function e(t, n) {
                g(this, e), this.rules = t, this.componentId = n, this.isStatic = Ee(t, C), fe.master.hasId(n) || fe.master.deferredInject(n, [])
            }

            e.prototype.createStyles = function (e, t) {
                var n = q(ye(this.rules, e, t), "");
                t.inject(this.componentId, n)
            }, e.prototype.removeStyles = function (e) {
                var t = this.componentId;
                e.hasId(t) && e.remove(t)
            }, e.prototype.renderStyles = function (e, t) {
                this.removeStyles(t), this.createStyles(e, t)
            }
        }();
        S && (window.scCGSHMRCache = {});
        t.b = et
    }).call(this, n(23))
}, function (e, t, n) {
    "use strict";

    function r(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function i(e) {
        return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    n.d(t, "b", (function () {
        return l
    })), n.d(t, "a", (function () {
        return o
    }));
    var o = function (e, t) {
        return null == t && (t = document), "object" === i(e) ? e : t.querySelector(e)
    }, a = function (e, t) {
        for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);

        function r() {
            this.constructor = e
        }

        return r.prototype = t.prototype, e.prototype = new r, e.__super__ = t.prototype, e
    }, l = function () {
        function e() {
            !function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, e)
        }

        var t, n, i;
        return t = e, i = [{
            key: "initClass", value: function () {
                var e;
                this.uniqid = (e = 0, {
                    get: function () {
                        return e++
                    }
                })
            }
        }, {
            key: "extend", value: function (e) {
                for (var t = e, n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) r[i - 1] = arguments[i];
                for (var o = 0, a = Array.from(r); o < a.length; o++) for (var l = a[o], s = 0, c = Object.keys(l || {}); s < c.length; s++) {
                    var u = c[s];
                    t[u] = l[u]
                }
                return t
            }
        }, {
            key: "clampRGB", value: function (e) {
                return e < 0 ? 0 : e > 255 ? 255 : e
            }
        }, {
            key: "copyAttributes", value: function (e, t, n) {
                return null == n && (n = {}), function () {
                    for (var r = [], i = 0, o = Array.from(e.attributes); i < o.length; i++) {
                        var a = o[i];
                        null != n.except && Array.from(n.except).includes(a.nodeName) || r.push(t.setAttribute(a.nodeName, a.nodeValue))
                    }
                    return r
                }()
            }
        }, {
            key: "dataArray", value: function (e) {
                return null == e && (e = 0), Caman.NodeJS || null != window.Uint8Array ? new Uint8Array(e) : new Array(e)
            }
        }], (n = null) && r(t.prototype, n), i && r(t, i), e
    }();
    l.initClass();
    "undefined" != typeof __REACT_HOT_LOADER__ && (__REACT_HOT_LOADER__.register(o, "$", "/Users/dmitry/scaleflex/plugins/filerobot-image-editor/projects/react/lib/caman/core/util.js"), __REACT_HOT_LOADER__.register(a, "__extends", "/Users/dmitry/scaleflex/plugins/filerobot-image-editor/projects/react/lib/caman/core/util.js"), __REACT_HOT_LOADER__.register(l, "Util", "/Users/dmitry/scaleflex/plugins/filerobot-image-editor/projects/react/lib/caman/core/util.js"))
}, function (e, t, n) {
    "use strict";

    function r() {
        var e, t, n, r;
        for (t = 0, n = (r = ["log", "info", "warn", "error"]).length; t < n; t++) this[e = r[t]] = function (e) {
            return function () {
                var t;
                if (t = 1 <= arguments.length ? [].slice.call(arguments, 0) : [], Caman.DEBUG) try {
                    return console[e].apply(console, t)
                } catch (n) {
                    return n, console[e](t)
                }
            }
        }(e);
        this.debug = this.log
    }

    n.d(t, "a", (function () {
        return i
    }));
    var i = new r;
    "undefined" != typeof __REACT_HOT_LOADER__ && (__REACT_HOT_LOADER__.register(r, "Logger", "/Users/dmitry/scaleflex/plugins/filerobot-image-editor/projects/react/lib/caman/core/logger.js"), __REACT_HOT_LOADER__.register(i, "Log", "/Users/dmitry/scaleflex/plugins/filerobot-image-editor/projects/react/lib/caman/core/logger.js"))
}, function (e, t, n) {
    "use strict";
    !function e() {
        if ("undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE) {
            0;
            try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)
            } catch (e) {
                console.error(e)
            }
        }
    }(), e.exports = n(19)
}, function (e, t, n) {
    "use strict";

    function r(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    var i = function () {
        function e() {
            !function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, e)
        }

        var t, n, i;
        return t = e, i = [{
            key: "initClass", value: function () {
                this.items = {}
            }
        }, {
            key: "has", value: function (e) {
                return null != this.items[e]
            }
        }, {
            key: "get", value: function (e) {
                return this.items[e]
            }
        }, {
            key: "put", value: function (e, t) {
                return this.items[e] = t
            }
        }, {
            key: "execute", value: function (e, t) {
                var n = this;
                return setTimeout((function () {
                    return t.call(n.get(e), n.get(e))
                }), 0), this.get(e)
            }
        }, {
            key: "flush", value: function (e) {
                return null == e && (e = !1), e ? delete this.items[e] : this.items = {}
            }
        }], (n = null) && r(t.prototype, n), i && r(t, i), e
    }();
    i.initClass();
    var o = i;
    t.a = o;
    "undefined" != typeof __REACT_HOT_LOADER__ && (__REACT_HOT_LOADER__.register(i, "Store", "/Users/dmitry/scaleflex/plugins/filerobot-image-editor/projects/react/lib/caman/core/store.js"), __REACT_HOT_LOADER__.register(o, "default", "/Users/dmitry/scaleflex/plugins/filerobot-image-editor/projects/react/lib/caman/core/store.js"))
}, function (e, t, n) {
    e.exports = function e(t) {
        "use strict";
        var n = /^\0+/g, r = /[\0\r\f]/g, i = /: */g, o = /zoo|gra/, a = /([,: ])(transform)/g,
            l = /,+\s*(?![^(]*[)])/g, s = / +\s*(?![^(]*[)])/g, c = / *[\0] */g, u = /,\r+?/g, f = /([\t\r\n ])*\f?&/g,
            p = /:global\(((?:[^\(\)\[\]]*|\[.*\]|\([^\(\)]*\))*)\)/g, d = /\W+/g, h = /@(k\w+)\s*(\S*)\s*/,
            m = /::(place)/g, g = /:(read-only)/g, b = /\s+(?=[{\];=:>])/g, y = /([[}=:>])\s+/g,
            v = /(\{[^{]+?);(?=\})/g, _ = /\s{2,}/g, w = /([^\(])(:+) */g, x = /[svh]\w+-[tblr]{2}/,
            C = /\(\s*(.*)\s*\)/g, E = /([\s\S]*?);/g, k = /-self|flex-/g, O = /[^]*?(:[rp][el]a[\w-]+)[^]*/,
            T = /stretch|:\s*\w+\-(?:conte|avail)/, R = /([^-])(image-set\()/, S = "-webkit-", A = "-moz-", j = "-ms-",
            P = 59, D = 125, L = 123, I = 40, M = 41, B = 91, z = 93, U = 10, H = 13, F = 9, N = 64, W = 32, Y = 38,
            q = 45, $ = 95, V = 42, X = 44, K = 58, Z = 39, Q = 34, G = 47, J = 62, ee = 43, te = 126, ne = 0, re = 12,
            ie = 11, oe = 107, ae = 109, le = 115, se = 112, ce = 111, ue = 105, fe = 99, pe = 100, de = 112, he = 1,
            me = 1, ge = 0, be = 1, ye = 1, ve = 1, _e = 0, we = 0, xe = 0, Ce = [], Ee = [], ke = 0, Oe = null,
            Te = -2, Re = -1, Se = 0, Ae = 1, je = 2, Pe = 3, De = 0, Le = 1, Ie = "", Me = "", Be = "";

        function ze(e, t, i, o, a) {
            for (var l, s, u = 0, f = 0, p = 0, d = 0, b = 0, y = 0, v = 0, _ = 0, x = 0, E = 0, k = 0, O = 0, T = 0, R = 0, $ = 0, _e = 0, Ee = 0, Oe = 0, Te = 0, Re = i.length, He = Re - 1, $e = "", Ve = "", Xe = "", Ke = "", Ze = "", Qe = ""; $ < Re;) {
                if (v = i.charCodeAt($), $ === He && f + d + p + u !== 0 && (0 !== f && (v = f === G ? U : G), d = p = u = 0, Re++, He++), f + d + p + u === 0) {
                    if ($ === He && (_e > 0 && (Ve = Ve.replace(r, "")), Ve.trim().length > 0)) {
                        switch (v) {
                            case W:
                            case F:
                            case P:
                            case H:
                            case U:
                                break;
                            default:
                                Ve += i.charAt($)
                        }
                        v = P
                    }
                    if (1 === Ee) switch (v) {
                        case L:
                        case D:
                        case P:
                        case Q:
                        case Z:
                        case I:
                        case M:
                        case X:
                            Ee = 0;
                        case F:
                        case H:
                        case U:
                        case W:
                            break;
                        default:
                            for (Ee = 0, Te = $, b = v, $--, v = P; Te < Re;) switch (i.charCodeAt(Te++)) {
                                case U:
                                case H:
                                case P:
                                    ++$, v = b, Te = Re;
                                    break;
                                case K:
                                    _e > 0 && (++$, v = b);
                                case L:
                                    Te = Re
                            }
                    }
                    switch (v) {
                        case L:
                            for (b = (Ve = Ve.trim()).charCodeAt(0), k = 1, Te = ++$; $ < Re;) {
                                switch (v = i.charCodeAt($)) {
                                    case L:
                                        k++;
                                        break;
                                    case D:
                                        k--;
                                        break;
                                    case G:
                                        switch (y = i.charCodeAt($ + 1)) {
                                            case V:
                                            case G:
                                                $ = qe(y, $, He, i)
                                        }
                                        break;
                                    case B:
                                        v++;
                                    case I:
                                        v++;
                                    case Q:
                                    case Z:
                                        for (; $++ < He && i.charCodeAt($) !== v;) ;
                                }
                                if (0 === k) break;
                                $++
                            }
                            switch (Xe = i.substring(Te, $), b === ne && (b = (Ve = Ve.replace(n, "").trim()).charCodeAt(0)), b) {
                                case N:
                                    switch (_e > 0 && (Ve = Ve.replace(r, "")), y = Ve.charCodeAt(1)) {
                                        case pe:
                                        case ae:
                                        case le:
                                        case q:
                                            l = t;
                                            break;
                                        default:
                                            l = Ce
                                    }
                                    if (Te = (Xe = ze(t, l, Xe, y, a + 1)).length, xe > 0 && 0 === Te && (Te = Ve.length), ke > 0 && (l = Ue(Ce, Ve, Oe), s = Ye(Pe, Xe, l, t, me, he, Te, y, a, o), Ve = l.join(""), void 0 !== s && 0 === (Te = (Xe = s.trim()).length) && (y = 0, Xe = "")), Te > 0) switch (y) {
                                        case le:
                                            Ve = Ve.replace(C, We);
                                        case pe:
                                        case ae:
                                        case q:
                                            Xe = Ve + "{" + Xe + "}";
                                            break;
                                        case oe:
                                            Xe = (Ve = Ve.replace(h, "$1 $2" + (Le > 0 ? Ie : ""))) + "{" + Xe + "}", Xe = 1 === ye || 2 === ye && Ne("@" + Xe, 3) ? "@" + S + Xe + "@" + Xe : "@" + Xe;
                                            break;
                                        default:
                                            Xe = Ve + Xe, o === de && (Ke += Xe, Xe = "")
                                    } else Xe = "";
                                    break;
                                default:
                                    Xe = ze(t, Ue(t, Ve, Oe), Xe, o, a + 1)
                            }
                            Ze += Xe, O = 0, Ee = 0, R = 0, _e = 0, Oe = 0, T = 0, Ve = "", Xe = "", v = i.charCodeAt(++$);
                            break;
                        case D:
                        case P:
                            if ((Te = (Ve = (_e > 0 ? Ve.replace(r, "") : Ve).trim()).length) > 1) switch (0 === R && ((b = Ve.charCodeAt(0)) === q || b > 96 && b < 123) && (Te = (Ve = Ve.replace(" ", ":")).length), ke > 0 && void 0 !== (s = Ye(Ae, Ve, t, e, me, he, Ke.length, o, a, o)) && 0 === (Te = (Ve = s.trim()).length) && (Ve = "\0\0"), b = Ve.charCodeAt(0), y = Ve.charCodeAt(1), b) {
                                case ne:
                                    break;
                                case N:
                                    if (y === ue || y === fe) {
                                        Qe += Ve + i.charAt($);
                                        break
                                    }
                                default:
                                    if (Ve.charCodeAt(Te - 1) === K) break;
                                    Ke += Fe(Ve, b, y, Ve.charCodeAt(2))
                            }
                            O = 0, Ee = 0, R = 0, _e = 0, Oe = 0, Ve = "", v = i.charCodeAt(++$)
                    }
                }
                switch (v) {
                    case H:
                    case U:
                        if (f + d + p + u + we === 0) switch (E) {
                            case M:
                            case Z:
                            case Q:
                            case N:
                            case te:
                            case J:
                            case V:
                            case ee:
                            case G:
                            case q:
                            case K:
                            case X:
                            case P:
                            case L:
                            case D:
                                break;
                            default:
                                R > 0 && (Ee = 1)
                        }
                        f === G ? f = 0 : be + O === 0 && o !== oe && Ve.length > 0 && (_e = 1, Ve += "\0"), ke * De > 0 && Ye(Se, Ve, t, e, me, he, Ke.length, o, a, o), he = 1, me++;
                        break;
                    case P:
                    case D:
                        if (f + d + p + u === 0) {
                            he++;
                            break
                        }
                    default:
                        switch (he++, $e = i.charAt($), v) {
                            case F:
                            case W:
                                if (d + u + f === 0) switch (_) {
                                    case X:
                                    case K:
                                    case F:
                                    case W:
                                        $e = "";
                                        break;
                                    default:
                                        v !== W && ($e = " ")
                                }
                                break;
                            case ne:
                                $e = "\\0";
                                break;
                            case re:
                                $e = "\\f";
                                break;
                            case ie:
                                $e = "\\v";
                                break;
                            case Y:
                                d + f + u === 0 && be > 0 && (Oe = 1, _e = 1, $e = "\f" + $e);
                                break;
                            case 108:
                                if (d + f + u + ge === 0 && R > 0) switch ($ - R) {
                                    case 2:
                                        _ === se && i.charCodeAt($ - 3) === K && (ge = _);
                                    case 8:
                                        x === ce && (ge = x)
                                }
                                break;
                            case K:
                                d + f + u === 0 && (R = $);
                                break;
                            case X:
                                f + p + d + u === 0 && (_e = 1, $e += "\r");
                                break;
                            case Q:
                            case Z:
                                0 === f && (d = d === v ? 0 : 0 === d ? v : d);
                                break;
                            case B:
                                d + f + p === 0 && u++;
                                break;
                            case z:
                                d + f + p === 0 && u--;
                                break;
                            case M:
                                d + f + u === 0 && p--;
                                break;
                            case I:
                                if (d + f + u === 0) {
                                    if (0 === O) switch (2 * _ + 3 * x) {
                                        case 533:
                                            break;
                                        default:
                                            k = 0, O = 1
                                    }
                                    p++
                                }
                                break;
                            case N:
                                f + p + d + u + R + T === 0 && (T = 1);
                                break;
                            case V:
                            case G:
                                if (d + u + p > 0) break;
                                switch (f) {
                                    case 0:
                                        switch (2 * v + 3 * i.charCodeAt($ + 1)) {
                                            case 235:
                                                f = G;
                                                break;
                                            case 220:
                                                Te = $, f = V
                                        }
                                        break;
                                    case V:
                                        v === G && _ === V && Te + 2 !== $ && (33 === i.charCodeAt(Te + 2) && (Ke += i.substring(Te, $ + 1)), $e = "", f = 0)
                                }
                        }
                        if (0 === f) {
                            if (be + d + u + T === 0 && o !== oe && v !== P) switch (v) {
                                case X:
                                case te:
                                case J:
                                case ee:
                                case M:
                                case I:
                                    if (0 === O) {
                                        switch (_) {
                                            case F:
                                            case W:
                                            case U:
                                            case H:
                                                $e += "\0";
                                                break;
                                            default:
                                                $e = "\0" + $e + (v === X ? "" : "\0")
                                        }
                                        _e = 1
                                    } else switch (v) {
                                        case I:
                                            R + 7 === $ && 108 === _ && (R = 0), O = ++k;
                                            break;
                                        case M:
                                            0 == (O = --k) && (_e = 1, $e += "\0")
                                    }
                                    break;
                                case F:
                                case W:
                                    switch (_) {
                                        case ne:
                                        case L:
                                        case D:
                                        case P:
                                        case X:
                                        case re:
                                        case F:
                                        case W:
                                        case U:
                                        case H:
                                            break;
                                        default:
                                            0 === O && (_e = 1, $e += "\0")
                                    }
                            }
                            Ve += $e, v !== W && v !== F && (E = v)
                        }
                }
                x = _, _ = v, $++
            }
            if (Te = Ke.length, xe > 0 && 0 === Te && 0 === Ze.length && 0 === t[0].length == 0 && (o !== ae || 1 === t.length && (be > 0 ? Me : Be) === t[0]) && (Te = t.join(",").length + 2), Te > 0) {
                if (l = 0 === be && o !== oe ? function (e) {
                    for (var t, n, i = 0, o = e.length, a = Array(o); i < o; ++i) {
                        for (var l = e[i].split(c), s = "", u = 0, f = 0, p = 0, d = 0, h = l.length; u < h; ++u) if (!(0 === (f = (n = l[u]).length) && h > 1)) {
                            if (p = s.charCodeAt(s.length - 1), d = n.charCodeAt(0), t = "", 0 !== u) switch (p) {
                                case V:
                                case te:
                                case J:
                                case ee:
                                case W:
                                case I:
                                    break;
                                default:
                                    t = " "
                            }
                            switch (d) {
                                case Y:
                                    n = t + Me;
                                case te:
                                case J:
                                case ee:
                                case W:
                                case M:
                                case I:
                                    break;
                                case B:
                                    n = t + n + Me;
                                    break;
                                case K:
                                    switch (2 * n.charCodeAt(1) + 3 * n.charCodeAt(2)) {
                                        case 530:
                                            if (ve > 0) {
                                                n = t + n.substring(8, f - 1);
                                                break
                                            }
                                        default:
                                            (u < 1 || l[u - 1].length < 1) && (n = t + Me + n)
                                    }
                                    break;
                                case X:
                                    t = "";
                                default:
                                    n = f > 1 && n.indexOf(":") > 0 ? t + n.replace(w, "$1" + Me + "$2") : t + n + Me
                            }
                            s += n
                        }
                        a[i] = s.replace(r, "").trim()
                    }
                    return a
                }(t) : t, ke > 0 && void 0 !== (s = Ye(je, Ke, l, e, me, he, Te, o, a, o)) && 0 === (Ke = s).length) return Qe + Ke + Ze;
                if (Ke = l.join(",") + "{" + Ke + "}", ye * ge != 0) {
                    switch (2 !== ye || Ne(Ke, 2) || (ge = 0), ge) {
                        case ce:
                            Ke = Ke.replace(g, ":" + A + "$1") + Ke;
                            break;
                        case se:
                            Ke = Ke.replace(m, "::" + S + "input-$1") + Ke.replace(m, "::" + A + "$1") + Ke.replace(m, ":" + j + "input-$1") + Ke
                    }
                    ge = 0
                }
            }
            return Qe + Ke + Ze
        }

        function Ue(e, t, n) {
            var r = t.trim().split(u), i = r, o = r.length, a = e.length;
            switch (a) {
                case 0:
                case 1:
                    for (var l = 0, s = 0 === a ? "" : e[0] + " "; l < o; ++l) i[l] = He(s, i[l], n, a).trim();
                    break;
                default:
                    l = 0;
                    var c = 0;
                    for (i = []; l < o; ++l) for (var f = 0; f < a; ++f) i[c++] = He(e[f] + " ", r[l], n, a).trim()
            }
            return i
        }

        function He(e, t, n, r) {
            var i = t, o = i.charCodeAt(0);
            switch (o < 33 && (o = (i = i.trim()).charCodeAt(0)), o) {
                case Y:
                    switch (be + r) {
                        case 0:
                        case 1:
                            if (0 === e.trim().length) break;
                        default:
                            return i.replace(f, "$1" + e.trim())
                    }
                    break;
                case K:
                    switch (i.charCodeAt(1)) {
                        case 103:
                            if (ve > 0 && be > 0) return i.replace(p, "$1").replace(f, "$1" + Be);
                            break;
                        default:
                            return e.trim() + i.replace(f, "$1" + e.trim())
                    }
                default:
                    if (n * be > 0 && i.indexOf("\f") > 0) return i.replace(f, (e.charCodeAt(0) === K ? "" : "$1") + e.trim())
            }
            return e + i
        }

        function Fe(e, t, n, r) {
            var c, u = 0, f = e + ";", p = 2 * t + 3 * n + 4 * r;
            if (944 === p) return function (e) {
                var t = e.length, n = e.indexOf(":", 9) + 1, r = e.substring(0, n).trim(),
                    i = e.substring(n, t - 1).trim();
                switch (e.charCodeAt(9) * Le) {
                    case 0:
                        break;
                    case q:
                        if (110 !== e.charCodeAt(10)) break;
                    default:
                        var o = i.split((i = "", l)), a = 0;
                        for (n = 0, t = o.length; a < t; n = 0, ++a) {
                            for (var c = o[a], u = c.split(s); c = u[n];) {
                                var f = c.charCodeAt(0);
                                if (1 === Le && (f > N && f < 90 || f > 96 && f < 123 || f === $ || f === q && c.charCodeAt(1) !== q)) switch (isNaN(parseFloat(c)) + (-1 !== c.indexOf("("))) {
                                    case 1:
                                        switch (c) {
                                            case"infinite":
                                            case"alternate":
                                            case"backwards":
                                            case"running":
                                            case"normal":
                                            case"forwards":
                                            case"both":
                                            case"none":
                                            case"linear":
                                            case"ease":
                                            case"ease-in":
                                            case"ease-out":
                                            case"ease-in-out":
                                            case"paused":
                                            case"reverse":
                                            case"alternate-reverse":
                                            case"inherit":
                                            case"initial":
                                            case"unset":
                                            case"step-start":
                                            case"step-end":
                                                break;
                                            default:
                                                c += Ie
                                        }
                                }
                                u[n++] = c
                            }
                            i += (0 === a ? "" : ",") + u.join(" ")
                        }
                }
                return i = r + i + ";", 1 === ye || 2 === ye && Ne(i, 1) ? S + i + i : i
            }(f);
            if (0 === ye || 2 === ye && !Ne(f, 1)) return f;
            switch (p) {
                case 1015:
                    return 97 === f.charCodeAt(10) ? S + f + f : f;
                case 951:
                    return 116 === f.charCodeAt(3) ? S + f + f : f;
                case 963:
                    return 110 === f.charCodeAt(5) ? S + f + f : f;
                case 1009:
                    if (100 !== f.charCodeAt(4)) break;
                case 969:
                case 942:
                    return S + f + f;
                case 978:
                    return S + f + A + f + f;
                case 1019:
                case 983:
                    return S + f + A + f + j + f + f;
                case 883:
                    return f.charCodeAt(8) === q ? S + f + f : f.indexOf("image-set(", 11) > 0 ? f.replace(R, "$1" + S + "$2") + f : f;
                case 932:
                    if (f.charCodeAt(4) === q) switch (f.charCodeAt(5)) {
                        case 103:
                            return S + "box-" + f.replace("-grow", "") + S + f + j + f.replace("grow", "positive") + f;
                        case 115:
                            return S + f + j + f.replace("shrink", "negative") + f;
                        case 98:
                            return S + f + j + f.replace("basis", "preferred-size") + f
                    }
                    return S + f + j + f + f;
                case 964:
                    return S + f + j + "flex-" + f + f;
                case 1023:
                    if (99 !== f.charCodeAt(8)) break;
                    return c = f.substring(f.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify"), S + "box-pack" + c + S + f + j + "flex-pack" + c + f;
                case 1005:
                    return o.test(f) ? f.replace(i, ":" + S) + f.replace(i, ":" + A) + f : f;
                case 1e3:
                    switch (u = (c = f.substring(13).trim()).indexOf("-") + 1, c.charCodeAt(0) + c.charCodeAt(u)) {
                        case 226:
                            c = f.replace(x, "tb");
                            break;
                        case 232:
                            c = f.replace(x, "tb-rl");
                            break;
                        case 220:
                            c = f.replace(x, "lr");
                            break;
                        default:
                            return f
                    }
                    return S + f + j + c + f;
                case 1017:
                    if (-1 === f.indexOf("sticky", 9)) return f;
                case 975:
                    switch (u = (f = e).length - 10, p = (c = (33 === f.charCodeAt(u) ? f.substring(0, u) : f).substring(e.indexOf(":", 7) + 1).trim()).charCodeAt(0) + (0 | c.charCodeAt(7))) {
                        case 203:
                            if (c.charCodeAt(8) < 111) break;
                        case 115:
                            f = f.replace(c, S + c) + ";" + f;
                            break;
                        case 207:
                        case 102:
                            f = f.replace(c, S + (p > 102 ? "inline-" : "") + "box") + ";" + f.replace(c, S + c) + ";" + f.replace(c, j + c + "box") + ";" + f
                    }
                    return f + ";";
                case 938:
                    if (f.charCodeAt(5) === q) switch (f.charCodeAt(6)) {
                        case 105:
                            return c = f.replace("-items", ""), S + f + S + "box-" + c + j + "flex-" + c + f;
                        case 115:
                            return S + f + j + "flex-item-" + f.replace(k, "") + f;
                        default:
                            return S + f + j + "flex-line-pack" + f.replace("align-content", "").replace(k, "") + f
                    }
                    break;
                case 973:
                case 989:
                    if (f.charCodeAt(3) !== q || 122 === f.charCodeAt(4)) break;
                case 931:
                case 953:
                    if (!0 === T.test(e)) return 115 === (c = e.substring(e.indexOf(":") + 1)).charCodeAt(0) ? Fe(e.replace("stretch", "fill-available"), t, n, r).replace(":fill-available", ":stretch") : f.replace(c, S + c) + f.replace(c, A + c.replace("fill-", "")) + f;
                    break;
                case 962:
                    if (f = S + f + (102 === f.charCodeAt(5) ? j + f : "") + f, n + r === 211 && 105 === f.charCodeAt(13) && f.indexOf("transform", 10) > 0) return f.substring(0, f.indexOf(";", 27) + 1).replace(a, "$1" + S + "$2") + f
            }
            return f
        }

        function Ne(e, t) {
            var n = e.indexOf(1 === t ? ":" : "{"), r = e.substring(0, 3 !== t ? n : 10),
                i = e.substring(n + 1, e.length - 1);
            return Oe(2 !== t ? r : r.replace(O, "$1"), i, t)
        }

        function We(e, t) {
            var n = Fe(t, t.charCodeAt(0), t.charCodeAt(1), t.charCodeAt(2));
            return n !== t + ";" ? n.replace(E, " or ($1)").substring(4) : "(" + t + ")"
        }

        function Ye(e, t, n, r, i, o, a, l, s, c) {
            for (var u, f = 0, p = t; f < ke; ++f) switch (u = Ee[f].call(Ve, e, p, n, r, i, o, a, l, s, c)) {
                case void 0:
                case!1:
                case!0:
                case null:
                    break;
                default:
                    p = u
            }
            if (p !== t) return p
        }

        function qe(e, t, n, r) {
            for (var i = t + 1; i < n; ++i) switch (r.charCodeAt(i)) {
                case G:
                    if (e === V && r.charCodeAt(i - 1) === V && t + 2 !== i) return i + 1;
                    break;
                case U:
                    if (e === G) return i + 1
            }
            return i
        }

        function $e(e) {
            for (var t in e) {
                var n = e[t];
                switch (t) {
                    case"keyframe":
                        Le = 0 | n;
                        break;
                    case"global":
                        ve = 0 | n;
                        break;
                    case"cascade":
                        be = 0 | n;
                        break;
                    case"compress":
                        _e = 0 | n;
                        break;
                    case"semicolon":
                        we = 0 | n;
                        break;
                    case"preserve":
                        xe = 0 | n;
                        break;
                    case"prefix":
                        Oe = null, n ? "function" != typeof n ? ye = 1 : (ye = 2, Oe = n) : ye = 0
                }
            }
            return $e
        }

        function Ve(t, n) {
            if (void 0 !== this && this.constructor === Ve) return e(t);
            var i = t, o = i.charCodeAt(0);
            o < 33 && (o = (i = i.trim()).charCodeAt(0)), Le > 0 && (Ie = i.replace(d, o === B ? "" : "-")), o = 1, 1 === be ? Be = i : Me = i;
            var a, l = [Be];
            ke > 0 && void 0 !== (a = Ye(Re, n, l, l, me, he, 0, 0, 0, 0)) && "string" == typeof a && (n = a);
            var s = ze(Ce, l, n, 0, 0);
            return ke > 0 && void 0 !== (a = Ye(Te, s, l, l, me, he, s.length, 0, 0, 0)) && "string" != typeof (s = a) && (o = 0), Ie = "", Be = "", Me = "", ge = 0, me = 1, he = 1, _e * o == 0 ? s : s.replace(r, "").replace(b, "").replace(y, "$1").replace(v, "$1").replace(_, " ")
        }

        return Ve.use = function e(t) {
            switch (t) {
                case void 0:
                case null:
                    ke = Ee.length = 0;
                    break;
                default:
                    if ("function" == typeof t) Ee[ke++] = t; else if ("object" == typeof t) for (var n = 0, r = t.length; n < r; ++n) e(t[n]); else De = 0 | !!t
            }
            return e
        }, Ve.set = $e, void 0 !== t && $e(t), Ve
    }(null)
}, function (e, t, n) {
    "use strict";
    e.exports = n(24)
}, function (e, t, n) {
    "use strict";

    function r(e, t) {
        if (e.length !== t.length) return !1;
        for (var n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1;
        return !0
    }

    t.a = function (e, t) {
        var n;
        void 0 === t && (t = r);
        var i, o = [], a = !1;
        return function () {
            for (var r = [], l = 0; l < arguments.length; l++) r[l] = arguments[l];
            return a && n === this && t(r, o) ? i : (i = e.apply(this, r), a = !0, n = this, o = r, i)
        }
    }
}, function (e, t, n) {
    var r = n(28), i = n(29);
    e.exports = function (e, t, n) {
        var o = t && n || 0;
        "string" == typeof e && (t = "binary" === e ? new Array(16) : null, e = null);
        var a = (e = e || {}).random || (e.rng || r)();
        if (a[6] = 15 & a[6] | 64, a[8] = 63 & a[8] | 128, t) for (var l = 0; l < 16; ++l) t[o + l] = a[l];
        return t || i(a)
    }
}, function (e, t, n) {
    "use strict";
    /*
    object-assign
    (c) Sindre Sorhus
    @license MIT
    */
    var r = Object.getOwnPropertySymbols, i = Object.prototype.hasOwnProperty,
        o = Object.prototype.propertyIsEnumerable;

    function a(e) {
        if (null == e) throw new TypeError("Object.assign cannot be called with null or undefined");
        return Object(e)
    }

    e.exports = function () {
        try {
            if (!Object.assign) return !1;
            var e = new String("abc");
            if (e[5] = "de", "5" === Object.getOwnPropertyNames(e)[0]) return !1;
            for (var t = {}, n = 0; n < 10; n++) t["_" + String.fromCharCode(n)] = n;
            if ("0123456789" !== Object.getOwnPropertyNames(t).map((function (e) {
                return t[e]
            })).join("")) return !1;
            var r = {};
            return "abcdefghijklmnopqrst".split("").forEach((function (e) {
                r[e] = e
            })), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, r)).join("")
        } catch (e) {
            return !1
        }
    }() ? Object.assign : function (e, t) {
        for (var n, l, s = a(e), c = 1; c < arguments.length; c++) {
            for (var u in n = Object(arguments[c])) i.call(n, u) && (s[u] = n[u]);
            if (r) {
                l = r(n);
                for (var f = 0; f < l.length; f++) o.call(n, l[f]) && (s[l[f]] = n[l[f]])
            }
        }
        return s
    }
}, function (e, t, n) {
    e.exports = function () {
        "use strict";
        return function (e) {
            function t(t) {
                if (t) try {
                    e(t + "}")
                } catch (e) {
                }
            }

            return function (n, r, i, o, a, l, s, c, u, f) {
                switch (n) {
                    case 1:
                        if (0 === u && 64 === r.charCodeAt(0)) return e(r + ";"), "";
                        break;
                    case 2:
                        if (0 === c) return r + "/*|*/";
                        break;
                    case 3:
                        switch (c) {
                            case 102:
                            case 112:
                                return e(i[0] + r), "";
                            default:
                                return r + (0 === f ? "/*|*/" : "")
                        }
                    case-2:
                        r.split("/*|*/}").forEach(t)
                }
            }
        }
    }()
}, function (e, t, n) {
    "use strict";
    t.a = {
        animationIterationCount: 1,
        borderImageOutset: 1,
        borderImageSlice: 1,
        borderImageWidth: 1,
        boxFlex: 1,
        boxFlexGroup: 1,
        boxOrdinalGroup: 1,
        columnCount: 1,
        columns: 1,
        flex: 1,
        flexGrow: 1,
        flexPositive: 1,
        flexShrink: 1,
        flexNegative: 1,
        flexOrder: 1,
        gridRow: 1,
        gridRowEnd: 1,
        gridRowSpan: 1,
        gridRowStart: 1,
        gridColumn: 1,
        gridColumnEnd: 1,
        gridColumnSpan: 1,
        gridColumnStart: 1,
        msGridRow: 1,
        msGridRowSpan: 1,
        msGridColumn: 1,
        msGridColumnSpan: 1,
        fontWeight: 1,
        lineHeight: 1,
        opacity: 1,
        order: 1,
        orphans: 1,
        tabSize: 1,
        widows: 1,
        zIndex: 1,
        zoom: 1,
        WebkitLineClamp: 1,
        fillOpacity: 1,
        floodOpacity: 1,
        stopOpacity: 1,
        strokeDasharray: 1,
        strokeDashoffset: 1,
        strokeMiterlimit: 1,
        strokeOpacity: 1,
        strokeWidth: 1
    }
}, function (e, t, n) {
    /*!
     * Cropper.js v1.5.4
     * https://fengyuanchen.github.io/cropperjs
     *
     * Copyright 2015-present Chen Fengyuan
     * Released under the MIT license
     *
     * Date: 2019-08-03T08:38:42.128Z
     */
    e.exports = function () {
        "use strict";

        function e(t) {
            return (e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(t)
        }

        function t(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }

        function n(e) {
            return function (e) {
                if (Array.isArray(e)) {
                    for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
                    return n
                }
            }(e) || function (e) {
                if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
            }(e) || function () {
                throw new TypeError("Invalid attempt to spread non-iterable instance")
            }()
        }

        var r = "undefined" != typeof window && void 0 !== window.document, i = r ? window : {},
            o = !!r && "ontouchstart" in i.document.documentElement, a = !!r && "PointerEvent" in i,
            l = "".concat("cropper", "-crop"), s = "".concat("cropper", "-disabled"),
            c = "".concat("cropper", "-hidden"), u = "".concat("cropper", "-hide"),
            f = "".concat("cropper", "-invisible"), p = "".concat("cropper", "-modal"),
            d = "".concat("cropper", "-move"), h = "".concat("cropper", "Action"), m = "".concat("cropper", "Preview"),
            g = o ? "touchstart" : "mousedown", b = o ? "touchmove" : "mousemove",
            y = o ? "touchend touchcancel" : "mouseup", v = a ? "pointerdown" : g, _ = a ? "pointermove" : b,
            w = a ? "pointerup pointercancel" : y, x = /^e|w|s|n|se|sw|ne|nw|all|crop|move|zoom$/, C = /^data:/,
            E = /^data:image\/jpeg;base64,/, k = /^img|canvas$/i, O = {
                viewMode: 0,
                dragMode: "crop",
                initialAspectRatio: NaN,
                aspectRatio: NaN,
                data: null,
                preview: "",
                responsive: !0,
                restore: !0,
                checkCrossOrigin: !0,
                checkOrientation: !0,
                modal: !0,
                guides: !0,
                center: !0,
                highlight: !0,
                background: !0,
                autoCrop: !0,
                autoCropArea: .8,
                movable: !0,
                rotatable: !0,
                scalable: !0,
                zoomable: !0,
                zoomOnTouch: !0,
                zoomOnWheel: !0,
                wheelZoomRatio: .1,
                cropBoxMovable: !0,
                cropBoxResizable: !0,
                toggleDragModeOnDblclick: !0,
                minCanvasWidth: 0,
                minCanvasHeight: 0,
                minCropBoxWidth: 0,
                minCropBoxHeight: 0,
                minContainerWidth: 200,
                minContainerHeight: 100,
                ready: null,
                cropstart: null,
                cropmove: null,
                cropend: null,
                crop: null,
                zoom: null
            }, T = Number.isNaN || i.isNaN;

        function R(e) {
            return "number" == typeof e && !T(e)
        }

        var S = function (e) {
            return e > 0 && e < 1 / 0
        };

        function A(e) {
            return void 0 === e
        }

        function j(t) {
            return "object" === e(t) && null !== t
        }

        var P = Object.prototype.hasOwnProperty;

        function D(e) {
            if (!j(e)) return !1;
            try {
                var t = e.constructor, n = t.prototype;
                return t && n && P.call(n, "isPrototypeOf")
            } catch (e) {
                return !1
            }
        }

        function L(e) {
            return "function" == typeof e
        }

        var I = Array.prototype.slice;

        function M(e) {
            return Array.from ? Array.from(e) : I.call(e)
        }

        function B(e, t) {
            return e && L(t) && (Array.isArray(e) || R(e.length) ? M(e).forEach((function (n, r) {
                t.call(e, n, r, e)
            })) : j(e) && Object.keys(e).forEach((function (n) {
                t.call(e, e[n], n, e)
            }))), e
        }

        var z = Object.assign || function (e) {
            for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
            return j(e) && n.length > 0 && n.forEach((function (t) {
                j(t) && Object.keys(t).forEach((function (n) {
                    e[n] = t[n]
                }))
            })), e
        }, U = /\.\d*(?:0|9){12}\d*$/;

        function H(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e11;
            return U.test(e) ? Math.round(e * t) / t : e
        }

        var F = /^width|height|left|top|marginLeft|marginTop$/;

        function N(e, t) {
            var n = e.style;
            B(t, (function (e, t) {
                F.test(t) && R(e) && (e = "".concat(e, "px")), n[t] = e
            }))
        }

        function W(e, t) {
            if (t) if (R(e.length)) B(e, (function (e) {
                W(e, t)
            })); else if (e.classList) e.classList.add(t); else {
                var n = e.className.trim();
                n ? n.indexOf(t) < 0 && (e.className = "".concat(n, " ").concat(t)) : e.className = t
            }
        }

        function Y(e, t) {
            t && (R(e.length) ? B(e, (function (e) {
                Y(e, t)
            })) : e.classList ? e.classList.remove(t) : e.className.indexOf(t) >= 0 && (e.className = e.className.replace(t, "")))
        }

        function q(e, t, n) {
            t && (R(e.length) ? B(e, (function (e) {
                q(e, t, n)
            })) : n ? W(e, t) : Y(e, t))
        }

        var $ = /([a-z\d])([A-Z])/g;

        function V(e) {
            return e.replace($, "$1-$2").toLowerCase()
        }

        function X(e, t) {
            return j(e[t]) ? e[t] : e.dataset ? e.dataset[t] : e.getAttribute("data-".concat(V(t)))
        }

        function K(e, t, n) {
            j(n) ? e[t] = n : e.dataset ? e.dataset[t] = n : e.setAttribute("data-".concat(V(t)), n)
        }

        var Z = /\s\s*/, Q = function () {
            var e = !1;
            if (r) {
                var t = !1, n = function () {
                }, o = Object.defineProperty({}, "once", {
                    get: function () {
                        return e = !0, t
                    }, set: function (e) {
                        t = e
                    }
                });
                i.addEventListener("test", n, o), i.removeEventListener("test", n, o)
            }
            return e
        }();

        function G(e, t, n) {
            var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, i = n;
            t.trim().split(Z).forEach((function (t) {
                if (!Q) {
                    var o = e.listeners;
                    o && o[t] && o[t][n] && (i = o[t][n], delete o[t][n], 0 === Object.keys(o[t]).length && delete o[t], 0 === Object.keys(o).length && delete e.listeners)
                }
                e.removeEventListener(t, i, r)
            }))
        }

        function J(e, t, n) {
            var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, i = n;
            t.trim().split(Z).forEach((function (t) {
                if (r.once && !Q) {
                    var o = e.listeners, a = void 0 === o ? {} : o;
                    i = function () {
                        delete a[t][n], e.removeEventListener(t, i, r);
                        for (var o = arguments.length, l = new Array(o), s = 0; s < o; s++) l[s] = arguments[s];
                        n.apply(e, l)
                    }, a[t] || (a[t] = {}), a[t][n] && e.removeEventListener(t, a[t][n], r), a[t][n] = i, e.listeners = a
                }
                e.addEventListener(t, i, r)
            }))
        }

        function ee(e, t, n) {
            var r;
            return L(Event) && L(CustomEvent) ? r = new CustomEvent(t, {
                detail: n,
                bubbles: !0,
                cancelable: !0
            }) : (r = document.createEvent("CustomEvent")).initCustomEvent(t, !0, !0, n), e.dispatchEvent(r)
        }

        function te(e) {
            var t = e.getBoundingClientRect();
            return {
                left: t.left + (window.pageXOffset - document.documentElement.clientLeft),
                top: t.top + (window.pageYOffset - document.documentElement.clientTop)
            }
        }

        var ne = i.location, re = /^(\w+:)\/\/([^:/?#]*):?(\d*)/i;

        function ie(e) {
            var t = e.match(re);
            return null !== t && (t[1] !== ne.protocol || t[2] !== ne.hostname || t[3] !== ne.port)
        }

        function oe(e) {
            var t = "timestamp=".concat((new Date).getTime());
            return e + (-1 === e.indexOf("?") ? "?" : "&") + t
        }

        function ae(e) {
            var t = e.rotate, n = e.scaleX, r = e.scaleY, i = e.translateX, o = e.translateY, a = [];
            R(i) && 0 !== i && a.push("translateX(".concat(i, "px)")), R(o) && 0 !== o && a.push("translateY(".concat(o, "px)")), R(t) && 0 !== t && a.push("rotate(".concat(t, "deg)")), R(n) && 1 !== n && a.push("scaleX(".concat(n, ")")), R(r) && 1 !== r && a.push("scaleY(".concat(r, ")"));
            var l = a.length ? a.join(" ") : "none";
            return {WebkitTransform: l, msTransform: l, transform: l}
        }

        function le(e, t) {
            var n = e.pageX, r = e.pageY, i = {endX: n, endY: r};
            return t ? i : z({startX: n, startY: r}, i)
        }

        function se(e) {
            var t = e.aspectRatio, n = e.height, r = e.width,
                i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "contain", o = S(r), a = S(n);
            if (o && a) {
                var l = n * t;
                "contain" === i && l > r || "cover" === i && l < r ? n = r / t : r = n * t
            } else o ? n = r / t : a && (r = n * t);
            return {width: r, height: n}
        }

        function ce(e, t, r, i) {
            var o = t.aspectRatio, a = t.naturalWidth, l = t.naturalHeight, s = t.rotate, c = void 0 === s ? 0 : s,
                u = t.scaleX, f = void 0 === u ? 1 : u, p = t.scaleY, d = void 0 === p ? 1 : p, h = r.aspectRatio,
                m = r.naturalWidth, g = r.naturalHeight, b = i.fillColor, y = void 0 === b ? "transparent" : b,
                v = i.imageSmoothingEnabled, _ = void 0 === v || v, w = i.imageSmoothingQuality,
                x = void 0 === w ? "low" : w, C = i.maxWidth, E = void 0 === C ? 1 / 0 : C, k = i.maxHeight,
                O = void 0 === k ? 1 / 0 : k, T = i.minWidth, R = void 0 === T ? 0 : T, S = i.minHeight,
                A = void 0 === S ? 0 : S, j = document.createElement("canvas"), P = j.getContext("2d"),
                D = se({aspectRatio: h, width: E, height: O}), L = se({aspectRatio: h, width: R, height: A}, "cover"),
                I = Math.min(D.width, Math.max(L.width, m)), M = Math.min(D.height, Math.max(L.height, g)),
                B = se({aspectRatio: o, width: E, height: O}), z = se({aspectRatio: o, width: R, height: A}, "cover"),
                U = Math.min(B.width, Math.max(z.width, a)), F = Math.min(B.height, Math.max(z.height, l)),
                N = [-U / 2, -F / 2, U, F];
            return j.width = H(I), j.height = H(M), P.fillStyle = y, P.fillRect(0, 0, I, M), P.save(), P.translate(I / 2, M / 2), P.rotate(c * Math.PI / 180), P.scale(f, d), P.imageSmoothingEnabled = _, P.imageSmoothingQuality = x, P.drawImage.apply(P, [e].concat(n(N.map((function (e) {
                return Math.floor(H(e))
            }))))), P.restore(), j
        }

        var ue = String.fromCharCode, fe = /^data:.*,/;

        function pe(e) {
            var t, n = new DataView(e);
            try {
                var r, i, o;
                if (255 === n.getUint8(0) && 216 === n.getUint8(1)) for (var a = n.byteLength, l = 2; l + 1 < a;) {
                    if (255 === n.getUint8(l) && 225 === n.getUint8(l + 1)) {
                        i = l;
                        break
                    }
                    l += 1
                }
                if (i) {
                    var s = i + 10;
                    if ("Exif" === function (e, t, n) {
                        var r = "";
                        n += t;
                        for (var i = t; i < n; i += 1) r += ue(e.getUint8(i));
                        return r
                    }(n, i + 4, 4)) {
                        var c = n.getUint16(s);
                        if (((r = 18761 === c) || 19789 === c) && 42 === n.getUint16(s + 2, r)) {
                            var u = n.getUint32(s + 4, r);
                            u >= 8 && (o = s + u)
                        }
                    }
                }
                if (o) {
                    var f, p, d = n.getUint16(o, r);
                    for (p = 0; p < d; p += 1) if (f = o + 12 * p + 2, 274 === n.getUint16(f, r)) {
                        f += 8, t = n.getUint16(f, r), n.setUint16(f, 1, r);
                        break
                    }
                }
            } catch (e) {
                t = 1
            }
            return t
        }

        var de = {
            render: function () {
                this.initContainer(), this.initCanvas(), this.initCropBox(), this.renderCanvas(), this.cropped && this.renderCropBox()
            }, initContainer: function () {
                var e = this.element, t = this.options, n = this.container, r = this.cropper;
                W(r, c), Y(e, c);
                var i = {
                    width: Math.max(n.offsetWidth, Number(t.minContainerWidth) || 200),
                    height: Math.max(n.offsetHeight, Number(t.minContainerHeight) || 100)
                };
                this.containerData = i, N(r, {width: i.width, height: i.height}), W(e, c), Y(r, c)
            }, initCanvas: function () {
                var e = this.containerData, t = this.imageData, n = this.options.viewMode,
                    r = Math.abs(t.rotate) % 180 == 90, i = r ? t.naturalHeight : t.naturalWidth,
                    o = r ? t.naturalWidth : t.naturalHeight, a = i / o, l = e.width, s = e.height;
                e.height * a > e.width ? 3 === n ? l = e.height * a : s = e.width / a : 3 === n ? s = e.width / a : l = e.height * a;
                var c = {aspectRatio: a, naturalWidth: i, naturalHeight: o, width: l, height: s};
                c.left = (e.width - l) / 2, c.top = (e.height - s) / 2, c.oldLeft = c.left, c.oldTop = c.top, this.canvasData = c, this.limited = 1 === n || 2 === n, this.limitCanvas(!0, !0), this.initialImageData = z({}, t), this.initialCanvasData = z({}, c)
            }, limitCanvas: function (e, t) {
                var n = this.options, r = this.containerData, i = this.canvasData, o = this.cropBoxData, a = n.viewMode,
                    l = i.aspectRatio, s = this.cropped && o;
                if (e) {
                    var c = Number(n.minCanvasWidth) || 0, u = Number(n.minCanvasHeight) || 0;
                    a > 1 ? (c = Math.max(c, r.width), u = Math.max(u, r.height), 3 === a && (u * l > c ? c = u * l : u = c / l)) : a > 0 && (c ? c = Math.max(c, s ? o.width : 0) : u ? u = Math.max(u, s ? o.height : 0) : s && (c = o.width, (u = o.height) * l > c ? c = u * l : u = c / l));
                    var f = se({aspectRatio: l, width: c, height: u});
                    c = f.width, u = f.height, i.minWidth = c, i.minHeight = u, i.maxWidth = 1 / 0, i.maxHeight = 1 / 0
                }
                if (t) if (a > (s ? 0 : 1)) {
                    var p = r.width - i.width, d = r.height - i.height;
                    i.minLeft = Math.min(0, p), i.minTop = Math.min(0, d), i.maxLeft = Math.max(0, p), i.maxTop = Math.max(0, d), s && this.limited && (i.minLeft = Math.min(o.left, o.left + (o.width - i.width)), i.minTop = Math.min(o.top, o.top + (o.height - i.height)), i.maxLeft = o.left, i.maxTop = o.top, 2 === a && (i.width >= r.width && (i.minLeft = Math.min(0, p), i.maxLeft = Math.max(0, p)), i.height >= r.height && (i.minTop = Math.min(0, d), i.maxTop = Math.max(0, d))))
                } else i.minLeft = -i.width, i.minTop = -i.height, i.maxLeft = r.width, i.maxTop = r.height
            }, renderCanvas: function (e, t) {
                var n = this.canvasData, r = this.imageData;
                if (t) {
                    var i = function (e) {
                            var t = e.width, n = e.height, r = e.degree;
                            if (90 == (r = Math.abs(r) % 180)) return {width: n, height: t};
                            var i = r % 90 * Math.PI / 180, o = Math.sin(i), a = Math.cos(i), l = t * a + n * o,
                                s = t * o + n * a;
                            return r > 90 ? {width: s, height: l} : {width: l, height: s}
                        }({
                            width: r.naturalWidth * Math.abs(r.scaleX || 1),
                            height: r.naturalHeight * Math.abs(r.scaleY || 1),
                            degree: r.rotate || 0
                        }), o = i.width, a = i.height, l = n.width * (o / n.naturalWidth),
                        s = n.height * (a / n.naturalHeight);
                    n.left -= (l - n.width) / 2, n.top -= (s - n.height) / 2, n.width = l, n.height = s, n.aspectRatio = o / a, n.naturalWidth = o, n.naturalHeight = a, this.limitCanvas(!0, !1)
                }
                (n.width > n.maxWidth || n.width < n.minWidth) && (n.left = n.oldLeft), (n.height > n.maxHeight || n.height < n.minHeight) && (n.top = n.oldTop), n.width = Math.min(Math.max(n.width, n.minWidth), n.maxWidth), n.height = Math.min(Math.max(n.height, n.minHeight), n.maxHeight), this.limitCanvas(!1, !0), n.left = Math.min(Math.max(n.left, n.minLeft), n.maxLeft), n.top = Math.min(Math.max(n.top, n.minTop), n.maxTop), n.oldLeft = n.left, n.oldTop = n.top, N(this.canvas, z({
                    width: n.width,
                    height: n.height
                }, ae({
                    translateX: n.left,
                    translateY: n.top
                }))), this.renderImage(e), this.cropped && this.limited && this.limitCropBox(!0, !0)
            }, renderImage: function (e) {
                var t = this.canvasData, n = this.imageData, r = n.naturalWidth * (t.width / t.naturalWidth),
                    i = n.naturalHeight * (t.height / t.naturalHeight);
                z(n, {
                    width: r,
                    height: i,
                    left: (t.width - r) / 2,
                    top: (t.height - i) / 2
                }), N(this.image, z({width: n.width, height: n.height}, ae(z({
                    translateX: n.left,
                    translateY: n.top
                }, n)))), e && this.output()
            }, initCropBox: function () {
                var e = this.options, t = this.canvasData, n = e.aspectRatio || e.initialAspectRatio,
                    r = Number(e.autoCropArea) || .8, i = {width: t.width, height: t.height};
                n && (t.height * n > t.width ? i.height = i.width / n : i.width = i.height * n), this.cropBoxData = i, this.limitCropBox(!0, !0), i.width = Math.min(Math.max(i.width, i.minWidth), i.maxWidth), i.height = Math.min(Math.max(i.height, i.minHeight), i.maxHeight), i.width = Math.max(i.minWidth, i.width * r), i.height = Math.max(i.minHeight, i.height * r), i.left = t.left + (t.width - i.width) / 2, i.top = t.top + (t.height - i.height) / 2, i.oldLeft = i.left, i.oldTop = i.top, this.initialCropBoxData = z({}, i)
            }, limitCropBox: function (e, t) {
                var n = this.options, r = this.containerData, i = this.canvasData, o = this.cropBoxData,
                    a = this.limited, l = n.aspectRatio;
                if (e) {
                    var s = Number(n.minCropBoxWidth) || 0, c = Number(n.minCropBoxHeight) || 0,
                        u = a ? Math.min(r.width, i.width, i.width + i.left, r.width - i.left) : r.width,
                        f = a ? Math.min(r.height, i.height, i.height + i.top, r.height - i.top) : r.height;
                    s = Math.min(s, r.width), c = Math.min(c, r.height), l && (s && c ? c * l > s ? c = s / l : s = c * l : s ? c = s / l : c && (s = c * l), f * l > u ? f = u / l : u = f * l), o.minWidth = Math.min(s, u), o.minHeight = Math.min(c, f), o.maxWidth = u, o.maxHeight = f
                }
                t && (a ? (o.minLeft = Math.max(0, i.left), o.minTop = Math.max(0, i.top), o.maxLeft = Math.min(r.width, i.left + i.width) - o.width, o.maxTop = Math.min(r.height, i.top + i.height) - o.height) : (o.minLeft = 0, o.minTop = 0, o.maxLeft = r.width - o.width, o.maxTop = r.height - o.height))
            }, renderCropBox: function () {
                var e = this.options, t = this.containerData, n = this.cropBoxData;
                (n.width > n.maxWidth || n.width < n.minWidth) && (n.left = n.oldLeft), (n.height > n.maxHeight || n.height < n.minHeight) && (n.top = n.oldTop), n.width = Math.min(Math.max(n.width, n.minWidth), n.maxWidth), n.height = Math.min(Math.max(n.height, n.minHeight), n.maxHeight), this.limitCropBox(!1, !0), n.left = Math.min(Math.max(n.left, n.minLeft), n.maxLeft), n.top = Math.min(Math.max(n.top, n.minTop), n.maxTop), n.oldLeft = n.left, n.oldTop = n.top, e.movable && e.cropBoxMovable && K(this.face, h, n.width >= t.width && n.height >= t.height ? "move" : "all"), N(this.cropBox, z({
                    width: n.width,
                    height: n.height
                }, ae({
                    translateX: n.left,
                    translateY: n.top
                }))), this.cropped && this.limited && this.limitCanvas(!0, !0), this.disabled || this.output()
            }, output: function () {
                this.preview(), ee(this.element, "crop", this.getData())
            }
        }, he = {
            initPreview: function () {
                var e = this.element, t = this.crossOrigin, n = this.options.preview,
                    r = t ? this.crossOriginUrl : this.url, i = e.alt || "The image to preview",
                    o = document.createElement("img");
                if (t && (o.crossOrigin = t), o.src = r, o.alt = i, this.viewBox.appendChild(o), this.viewBoxImage = o, n) {
                    var a = n;
                    "string" == typeof n ? a = e.ownerDocument.querySelectorAll(n) : n.querySelector && (a = [n]), this.previews = a, B(a, (function (e) {
                        var n = document.createElement("img");
                        K(e, m, {
                            width: e.offsetWidth,
                            height: e.offsetHeight,
                            html: e.innerHTML
                        }), t && (n.crossOrigin = t), n.src = r, n.alt = i, n.style.cssText = 'display:block;width:100%;height:auto;min-width:0!important;min-height:0!important;max-width:none!important;max-height:none!important;image-orientation:0deg!important;"', e.innerHTML = "", e.appendChild(n)
                    }))
                }
            }, resetPreview: function () {
                B(this.previews, (function (e) {
                    var t = X(e, m);
                    N(e, {width: t.width, height: t.height}), e.innerHTML = t.html, function (e, t) {
                        if (j(e[t])) try {
                            delete e[t]
                        } catch (n) {
                            e[t] = void 0
                        } else if (e.dataset) try {
                            delete e.dataset[t]
                        } catch (n) {
                            e.dataset[t] = void 0
                        } else e.removeAttribute("data-".concat(V(t)))
                    }(e, m)
                }))
            }, preview: function () {
                var e = this.imageData, t = this.canvasData, n = this.cropBoxData, r = n.width, i = n.height,
                    o = e.width, a = e.height, l = n.left - t.left - e.left, s = n.top - t.top - e.top;
                this.cropped && !this.disabled && (N(this.viewBoxImage, z({width: o, height: a}, ae(z({
                    translateX: -l,
                    translateY: -s
                }, e)))), B(this.previews, (function (t) {
                    var n = X(t, m), c = n.width, u = n.height, f = c, p = u, d = 1;
                    r && (p = i * (d = c / r)), i && p > u && (f = r * (d = u / i), p = u), N(t, {
                        width: f,
                        height: p
                    }), N(t.getElementsByTagName("img")[0], z({width: o * d, height: a * d}, ae(z({
                        translateX: -l * d,
                        translateY: -s * d
                    }, e))))
                })))
            }
        }, me = {
            bind: function () {
                var e = this.element, t = this.options, n = this.cropper;
                L(t.cropstart) && J(e, "cropstart", t.cropstart), L(t.cropmove) && J(e, "cropmove", t.cropmove), L(t.cropend) && J(e, "cropend", t.cropend), L(t.crop) && J(e, "crop", t.crop), L(t.zoom) && J(e, "zoom", t.zoom), J(n, v, this.onCropStart = this.cropStart.bind(this)), t.zoomable && t.zoomOnWheel && J(n, "wheel", this.onWheel = this.wheel.bind(this), {
                    passive: !1,
                    capture: !0
                }), t.toggleDragModeOnDblclick && J(n, "dblclick", this.onDblclick = this.dblclick.bind(this)), J(e.ownerDocument, _, this.onCropMove = this.cropMove.bind(this)), J(e.ownerDocument, w, this.onCropEnd = this.cropEnd.bind(this)), t.responsive && J(window, "resize", this.onResize = this.resize.bind(this))
            }, unbind: function () {
                var e = this.element, t = this.options, n = this.cropper;
                L(t.cropstart) && G(e, "cropstart", t.cropstart), L(t.cropmove) && G(e, "cropmove", t.cropmove), L(t.cropend) && G(e, "cropend", t.cropend), L(t.crop) && G(e, "crop", t.crop), L(t.zoom) && G(e, "zoom", t.zoom), G(n, v, this.onCropStart), t.zoomable && t.zoomOnWheel && G(n, "wheel", this.onWheel, {
                    passive: !1,
                    capture: !0
                }), t.toggleDragModeOnDblclick && G(n, "dblclick", this.onDblclick), G(e.ownerDocument, _, this.onCropMove), G(e.ownerDocument, w, this.onCropEnd), t.responsive && G(window, "resize", this.onResize)
            }
        }, ge = {
            resize: function () {
                var e = this.options, t = this.container, n = this.containerData,
                    r = Number(e.minContainerWidth) || 200, i = Number(e.minContainerHeight) || 100;
                if (!(this.disabled || n.width <= r || n.height <= i)) {
                    var o, a, l = t.offsetWidth / n.width;
                    1 === l && t.offsetHeight === n.height || (e.restore && (o = this.getCanvasData(), a = this.getCropBoxData()), this.render(), e.restore && (this.setCanvasData(B(o, (function (e, t) {
                        o[t] = e * l
                    }))), this.setCropBoxData(B(a, (function (e, t) {
                        a[t] = e * l
                    })))))
                }
            }, dblclick: function () {
                var e, t;
                this.disabled || "none" === this.options.dragMode || this.setDragMode((e = this.dragBox, t = l, (e.classList ? e.classList.contains(t) : e.className.indexOf(t) > -1) ? "move" : "crop"))
            }, wheel: function (e) {
                var t = this, n = Number(this.options.wheelZoomRatio) || .1, r = 1;
                this.disabled || (e.preventDefault(), this.wheeling || (this.wheeling = !0, setTimeout((function () {
                    t.wheeling = !1
                }), 50), e.deltaY ? r = e.deltaY > 0 ? 1 : -1 : e.wheelDelta ? r = -e.wheelDelta / 120 : e.detail && (r = e.detail > 0 ? 1 : -1), this.zoom(-r * n, e)))
            }, cropStart: function (e) {
                var t = e.buttons, n = e.button;
                if (!(this.disabled || R(t) && 1 !== t || R(n) && 0 !== n || e.ctrlKey)) {
                    var r, i = this.options, o = this.pointers;
                    e.changedTouches ? B(e.changedTouches, (function (e) {
                        o[e.identifier] = le(e)
                    })) : o[e.pointerId || 0] = le(e), r = Object.keys(o).length > 1 && i.zoomable && i.zoomOnTouch ? "zoom" : X(e.target, h), x.test(r) && !1 !== ee(this.element, "cropstart", {
                        originalEvent: e,
                        action: r
                    }) && (e.preventDefault(), this.action = r, this.cropping = !1, "crop" === r && (this.cropping = !0, W(this.dragBox, p)))
                }
            }, cropMove: function (e) {
                var t = this.action;
                if (!this.disabled && t) {
                    var n = this.pointers;
                    e.preventDefault(), !1 !== ee(this.element, "cropmove", {
                        originalEvent: e,
                        action: t
                    }) && (e.changedTouches ? B(e.changedTouches, (function (e) {
                        z(n[e.identifier] || {}, le(e, !0))
                    })) : z(n[e.pointerId || 0] || {}, le(e, !0)), this.change(e))
                }
            }, cropEnd: function (e) {
                if (!this.disabled) {
                    var t = this.action, n = this.pointers;
                    e.changedTouches ? B(e.changedTouches, (function (e) {
                        delete n[e.identifier]
                    })) : delete n[e.pointerId || 0], t && (e.preventDefault(), Object.keys(n).length || (this.action = ""), this.cropping && (this.cropping = !1, q(this.dragBox, p, this.cropped && this.options.modal)), ee(this.element, "cropend", {
                        originalEvent: e,
                        action: t
                    }))
                }
            }
        }, be = {
            change: function (e) {
                var t, n = this.options, r = this.canvasData, i = this.containerData, o = this.cropBoxData,
                    a = this.pointers, l = this.action, s = n.aspectRatio, u = o.left, f = o.top, p = o.width,
                    d = o.height, h = u + p, m = f + d, g = 0, b = 0, y = i.width, v = i.height, _ = !0;
                !s && e.shiftKey && (s = p && d ? p / d : 1), this.limited && (g = o.minLeft, b = o.minTop, y = g + Math.min(i.width, r.width, r.left + r.width), v = b + Math.min(i.height, r.height, r.top + r.height));
                var w = a[Object.keys(a)[0]], x = {x: w.endX - w.startX, y: w.endY - w.startY}, C = function (e) {
                    switch (e) {
                        case"e":
                            h + x.x > y && (x.x = y - h);
                            break;
                        case"w":
                            u + x.x < g && (x.x = g - u);
                            break;
                        case"n":
                            f + x.y < b && (x.y = b - f);
                            break;
                        case"s":
                            m + x.y > v && (x.y = v - m)
                    }
                };
                switch (l) {
                    case"all":
                        u += x.x, f += x.y;
                        break;
                    case"e":
                        if (x.x >= 0 && (h >= y || s && (f <= b || m >= v))) {
                            _ = !1;
                            break
                        }
                        C("e"), (p += x.x) < 0 && (l = "w", u -= p = -p), s && (d = p / s, f += (o.height - d) / 2);
                        break;
                    case"n":
                        if (x.y <= 0 && (f <= b || s && (u <= g || h >= y))) {
                            _ = !1;
                            break
                        }
                        C("n"), d -= x.y, f += x.y, d < 0 && (l = "s", f -= d = -d), s && (p = d * s, u += (o.width - p) / 2);
                        break;
                    case"w":
                        if (x.x <= 0 && (u <= g || s && (f <= b || m >= v))) {
                            _ = !1;
                            break
                        }
                        C("w"), p -= x.x, u += x.x, p < 0 && (l = "e", u -= p = -p), s && (d = p / s, f += (o.height - d) / 2);
                        break;
                    case"s":
                        if (x.y >= 0 && (m >= v || s && (u <= g || h >= y))) {
                            _ = !1;
                            break
                        }
                        C("s"), (d += x.y) < 0 && (l = "n", f -= d = -d), s && (p = d * s, u += (o.width - p) / 2);
                        break;
                    case"ne":
                        if (s) {
                            if (x.y <= 0 && (f <= b || h >= y)) {
                                _ = !1;
                                break
                            }
                            C("n"), d -= x.y, f += x.y, p = d * s
                        } else C("n"), C("e"), x.x >= 0 ? h < y ? p += x.x : x.y <= 0 && f <= b && (_ = !1) : p += x.x, x.y <= 0 ? f > b && (d -= x.y, f += x.y) : (d -= x.y, f += x.y);
                        p < 0 && d < 0 ? (l = "sw", f -= d = -d, u -= p = -p) : p < 0 ? (l = "nw", u -= p = -p) : d < 0 && (l = "se", f -= d = -d);
                        break;
                    case"nw":
                        if (s) {
                            if (x.y <= 0 && (f <= b || u <= g)) {
                                _ = !1;
                                break
                            }
                            C("n"), d -= x.y, f += x.y, p = d * s, u += o.width - p
                        } else C("n"), C("w"), x.x <= 0 ? u > g ? (p -= x.x, u += x.x) : x.y <= 0 && f <= b && (_ = !1) : (p -= x.x, u += x.x), x.y <= 0 ? f > b && (d -= x.y, f += x.y) : (d -= x.y, f += x.y);
                        p < 0 && d < 0 ? (l = "se", f -= d = -d, u -= p = -p) : p < 0 ? (l = "ne", u -= p = -p) : d < 0 && (l = "sw", f -= d = -d);
                        break;
                    case"sw":
                        if (s) {
                            if (x.x <= 0 && (u <= g || m >= v)) {
                                _ = !1;
                                break
                            }
                            C("w"), p -= x.x, u += x.x, d = p / s
                        } else C("s"), C("w"), x.x <= 0 ? u > g ? (p -= x.x, u += x.x) : x.y >= 0 && m >= v && (_ = !1) : (p -= x.x, u += x.x), x.y >= 0 ? m < v && (d += x.y) : d += x.y;
                        p < 0 && d < 0 ? (l = "ne", f -= d = -d, u -= p = -p) : p < 0 ? (l = "se", u -= p = -p) : d < 0 && (l = "nw", f -= d = -d);
                        break;
                    case"se":
                        if (s) {
                            if (x.x >= 0 && (h >= y || m >= v)) {
                                _ = !1;
                                break
                            }
                            C("e"), d = (p += x.x) / s
                        } else C("s"), C("e"), x.x >= 0 ? h < y ? p += x.x : x.y >= 0 && m >= v && (_ = !1) : p += x.x, x.y >= 0 ? m < v && (d += x.y) : d += x.y;
                        p < 0 && d < 0 ? (l = "nw", f -= d = -d, u -= p = -p) : p < 0 ? (l = "sw", u -= p = -p) : d < 0 && (l = "ne", f -= d = -d);
                        break;
                    case"move":
                        this.move(x.x, x.y), _ = !1;
                        break;
                    case"zoom":
                        this.zoom(function (e) {
                            var t = z({}, e), n = [];
                            return B(e, (function (e, r) {
                                delete t[r], B(t, (function (t) {
                                    var r = Math.abs(e.startX - t.startX), i = Math.abs(e.startY - t.startY),
                                        o = Math.abs(e.endX - t.endX), a = Math.abs(e.endY - t.endY),
                                        l = Math.sqrt(r * r + i * i), s = (Math.sqrt(o * o + a * a) - l) / l;
                                    n.push(s)
                                }))
                            })), n.sort((function (e, t) {
                                return Math.abs(e) < Math.abs(t)
                            })), n[0]
                        }(a), e), _ = !1;
                        break;
                    case"crop":
                        if (!x.x || !x.y) {
                            _ = !1;
                            break
                        }
                        t = te(this.cropper), u = w.startX - t.left, f = w.startY - t.top, p = o.minWidth, d = o.minHeight, x.x > 0 ? l = x.y > 0 ? "se" : "ne" : x.x < 0 && (u -= p, l = x.y > 0 ? "sw" : "nw"), x.y < 0 && (f -= d), this.cropped || (Y(this.cropBox, c), this.cropped = !0, this.limited && this.limitCropBox(!0, !0))
                }
                _ && (o.width = p, o.height = d, o.left = u, o.top = f, this.action = l, this.renderCropBox()), B(a, (function (e) {
                    e.startX = e.endX, e.startY = e.endY
                }))
            }
        }, ye = {
            crop: function () {
                return !this.ready || this.cropped || this.disabled || (this.cropped = !0, this.limitCropBox(!0, !0), this.options.modal && W(this.dragBox, p), Y(this.cropBox, c), this.setCropBoxData(this.initialCropBoxData)), this
            }, reset: function () {
                return this.ready && !this.disabled && (this.imageData = z({}, this.initialImageData), this.canvasData = z({}, this.initialCanvasData), this.cropBoxData = z({}, this.initialCropBoxData), this.renderCanvas(), this.cropped && this.renderCropBox()), this
            }, clear: function () {
                return this.cropped && !this.disabled && (z(this.cropBoxData, {
                    left: 0,
                    top: 0,
                    width: 0,
                    height: 0
                }), this.cropped = !1, this.renderCropBox(), this.limitCanvas(!0, !0), this.renderCanvas(), Y(this.dragBox, p), W(this.cropBox, c)), this
            }, replace: function (e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                return !this.disabled && e && (this.isImg && (this.element.src = e), t ? (this.url = e, this.image.src = e, this.ready && (this.viewBoxImage.src = e, B(this.previews, (function (t) {
                    t.getElementsByTagName("img")[0].src = e
                })))) : (this.isImg && (this.replaced = !0), this.options.data = null, this.uncreate(), this.load(e))), this
            }, enable: function () {
                return this.ready && this.disabled && (this.disabled = !1, Y(this.cropper, s)), this
            }, disable: function () {
                return this.ready && !this.disabled && (this.disabled = !0, W(this.cropper, s)), this
            }, destroy: function () {
                var e = this.element;
                return e.cropper ? (e.cropper = void 0, this.isImg && this.replaced && (e.src = this.originalUrl), this.uncreate(), this) : this
            }, move: function (e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e, n = this.canvasData,
                    r = n.left, i = n.top;
                return this.moveTo(A(e) ? e : r + Number(e), A(t) ? t : i + Number(t))
            }, moveTo: function (e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e, n = this.canvasData, r = !1;
                return e = Number(e), t = Number(t), this.ready && !this.disabled && this.options.movable && (R(e) && (n.left = e, r = !0), R(t) && (n.top = t, r = !0), r && this.renderCanvas(!0)), this
            }, zoom: function (e, t) {
                var n = this.canvasData;
                return e = (e = Number(e)) < 0 ? 1 / (1 - e) : 1 + e, this.zoomTo(n.width * e / n.naturalWidth, null, t)
            }, zoomTo: function (e, t, n) {
                var r = this.options, i = this.canvasData, o = i.width, a = i.height, l = i.naturalWidth,
                    s = i.naturalHeight;
                if ((e = Number(e)) >= 0 && this.ready && !this.disabled && r.zoomable) {
                    var c = l * e, u = s * e;
                    if (!1 === ee(this.element, "zoom", {ratio: e, oldRatio: o / l, originalEvent: n})) return this;
                    if (n) {
                        var f = this.pointers, p = te(this.cropper), d = f && Object.keys(f).length ? function (e) {
                            var t = 0, n = 0, r = 0;
                            return B(e, (function (e) {
                                var i = e.startX, o = e.startY;
                                t += i, n += o, r += 1
                            })), {pageX: t /= r, pageY: n /= r}
                        }(f) : {pageX: n.pageX, pageY: n.pageY};
                        i.left -= (c - o) * ((d.pageX - p.left - i.left) / o), i.top -= (u - a) * ((d.pageY - p.top - i.top) / a)
                    } else D(t) && R(t.x) && R(t.y) ? (i.left -= (c - o) * ((t.x - i.left) / o), i.top -= (u - a) * ((t.y - i.top) / a)) : (i.left -= (c - o) / 2, i.top -= (u - a) / 2);
                    i.width = c, i.height = u, this.renderCanvas(!0)
                }
                return this
            }, rotate: function (e) {
                return this.rotateTo((this.imageData.rotate || 0) + Number(e))
            }, rotateTo: function (e) {
                return R(e = Number(e)) && this.ready && !this.disabled && this.options.rotatable && (this.imageData.rotate = e % 360, this.renderCanvas(!0, !0)), this
            }, scaleX: function (e) {
                var t = this.imageData.scaleY;
                return this.scale(e, R(t) ? t : 1)
            }, scaleY: function (e) {
                var t = this.imageData.scaleX;
                return this.scale(R(t) ? t : 1, e)
            }, scale: function (e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e, n = this.imageData, r = !1;
                return e = Number(e), t = Number(t), this.ready && !this.disabled && this.options.scalable && (R(e) && (n.scaleX = e, r = !0), R(t) && (n.scaleY = t, r = !0), r && this.renderCanvas(!0, !0)), this
            }, getData: function () {
                var e, t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0], n = this.options,
                    r = this.imageData, i = this.canvasData, o = this.cropBoxData;
                if (this.ready && this.cropped) {
                    e = {x: o.left - i.left, y: o.top - i.top, width: o.width, height: o.height};
                    var a = r.width / r.naturalWidth;
                    if (B(e, (function (t, n) {
                        e[n] = t / a
                    })), t) {
                        var l = Math.round(e.y + e.height), s = Math.round(e.x + e.width);
                        e.x = Math.round(e.x), e.y = Math.round(e.y), e.width = s - e.x, e.height = l - e.y
                    }
                } else e = {x: 0, y: 0, width: 0, height: 0};
                return n.rotatable && (e.rotate = r.rotate || 0), n.scalable && (e.scaleX = r.scaleX || 1, e.scaleY = r.scaleY || 1), e
            }, setData: function (e) {
                var t = this.options, n = this.imageData, r = this.canvasData, i = {};
                if (this.ready && !this.disabled && D(e)) {
                    var o = !1;
                    t.rotatable && R(e.rotate) && e.rotate !== n.rotate && (n.rotate = e.rotate, o = !0), t.scalable && (R(e.scaleX) && e.scaleX !== n.scaleX && (n.scaleX = e.scaleX, o = !0), R(e.scaleY) && e.scaleY !== n.scaleY && (n.scaleY = e.scaleY, o = !0)), o && this.renderCanvas(!0, !0);
                    var a = n.width / n.naturalWidth;
                    R(e.x) && (i.left = e.x * a + r.left), R(e.y) && (i.top = e.y * a + r.top), R(e.width) && (i.width = e.width * a), R(e.height) && (i.height = e.height * a), this.setCropBoxData(i)
                }
                return this
            }, getContainerData: function () {
                return this.ready ? z({}, this.containerData) : {}
            }, getImageData: function () {
                return this.sized ? z({}, this.imageData) : {}
            }, getCanvasData: function () {
                var e = this.canvasData, t = {};
                return this.ready && B(["left", "top", "width", "height", "naturalWidth", "naturalHeight"], (function (n) {
                    t[n] = e[n]
                })), t
            }, setCanvasData: function (e) {
                var t = this.canvasData, n = t.aspectRatio;
                return this.ready && !this.disabled && D(e) && (R(e.left) && (t.left = e.left), R(e.top) && (t.top = e.top), R(e.width) ? (t.width = e.width, t.height = e.width / n) : R(e.height) && (t.height = e.height, t.width = e.height * n), this.renderCanvas(!0)), this
            }, getCropBoxData: function () {
                var e, t = this.cropBoxData;
                return this.ready && this.cropped && (e = {
                    left: t.left,
                    top: t.top,
                    width: t.width,
                    height: t.height
                }), e || {}
            }, setCropBoxData: function (e) {
                var t, n, r = this.cropBoxData, i = this.options.aspectRatio;
                return this.ready && this.cropped && !this.disabled && D(e) && (R(e.left) && (r.left = e.left), R(e.top) && (r.top = e.top), R(e.width) && e.width !== r.width && (t = !0, r.width = e.width), R(e.height) && e.height !== r.height && (n = !0, r.height = e.height), i && (t ? r.height = r.width / i : n && (r.width = r.height * i)), this.renderCropBox()), this
            }, getCroppedCanvas: function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                if (!this.ready || !window.HTMLCanvasElement) return null;
                var t = this.canvasData, r = ce(this.image, this.imageData, t, e);
                if (!this.cropped) return r;
                var i = this.getData(), o = i.x, a = i.y, l = i.width, s = i.height,
                    c = r.width / Math.floor(t.naturalWidth);
                1 !== c && (o *= c, a *= c, l *= c, s *= c);
                var u = l / s, f = se({aspectRatio: u, width: e.maxWidth || 1 / 0, height: e.maxHeight || 1 / 0}),
                    p = se({aspectRatio: u, width: e.minWidth || 0, height: e.minHeight || 0}, "cover"), d = se({
                        aspectRatio: u,
                        width: e.width || (1 !== c ? r.width : l),
                        height: e.height || (1 !== c ? r.height : s)
                    }), h = d.width, m = d.height;
                h = Math.min(f.width, Math.max(p.width, h)), m = Math.min(f.height, Math.max(p.height, m));
                var g = document.createElement("canvas"), b = g.getContext("2d");
                g.width = H(h), g.height = H(m), b.fillStyle = e.fillColor || "transparent", b.fillRect(0, 0, h, m);
                var y = e.imageSmoothingEnabled, v = void 0 === y || y, _ = e.imageSmoothingQuality;
                b.imageSmoothingEnabled = v, _ && (b.imageSmoothingQuality = _);
                var w, x, C, E, k, O, T = r.width, R = r.height, S = o, A = a;
                S <= -l || S > T ? (S = 0, w = 0, C = 0, k = 0) : S <= 0 ? (C = -S, S = 0, k = w = Math.min(T, l + S)) : S <= T && (C = 0, k = w = Math.min(l, T - S)), w <= 0 || A <= -s || A > R ? (A = 0, x = 0, E = 0, O = 0) : A <= 0 ? (E = -A, A = 0, O = x = Math.min(R, s + A)) : A <= R && (E = 0, O = x = Math.min(s, R - A));
                var j = [S, A, w, x];
                if (k > 0 && O > 0) {
                    var P = h / l;
                    j.push(C * P, E * P, k * P, O * P)
                }
                return b.drawImage.apply(b, [r].concat(n(j.map((function (e) {
                    return Math.floor(H(e))
                }))))), g
            }, setAspectRatio: function (e) {
                var t = this.options;
                return this.disabled || A(e) || (t.aspectRatio = Math.max(0, e) || NaN, this.ready && (this.initCropBox(), this.cropped && this.renderCropBox())), this
            }, setDragMode: function (e) {
                var t = this.options, n = this.dragBox, r = this.face;
                if (this.ready && !this.disabled) {
                    var i = "crop" === e, o = t.movable && "move" === e;
                    e = i || o ? e : "none", t.dragMode = e, K(n, h, e), q(n, l, i), q(n, d, o), t.cropBoxMovable || (K(r, h, e), q(r, l, i), q(r, d, o))
                }
                return this
            }
        }, ve = i.Cropper, _e = function () {
            function e(t) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                if (function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), !t || !k.test(t.tagName)) throw new Error("The first argument is required and must be an <img> or <canvas> element.");
                this.element = t, this.options = z({}, O, D(n) && n), this.cropped = !1, this.disabled = !1, this.pointers = {}, this.ready = !1, this.reloading = !1, this.replaced = !1, this.sized = !1, this.sizing = !1, this.init()
            }

            var n, r, o;
            return n = e, o = [{
                key: "noConflict", value: function () {
                    return window.Cropper = ve, e
                }
            }, {
                key: "setDefaults", value: function (e) {
                    z(O, D(e) && e)
                }
            }], (r = [{
                key: "init", value: function () {
                    var e, t = this.element, n = t.tagName.toLowerCase();
                    if (!t.cropper) {
                        if (t.cropper = this, "img" === n) {
                            if (this.isImg = !0, e = t.getAttribute("src") || "", this.originalUrl = e, !e) return;
                            e = t.src
                        } else "canvas" === n && window.HTMLCanvasElement && (e = t.toDataURL());
                        this.load(e)
                    }
                }
            }, {
                key: "load", value: function (e) {
                    var t = this;
                    if (e) {
                        this.url = e, this.imageData = {};
                        var n = this.element, r = this.options;
                        if (r.rotatable || r.scalable || (r.checkOrientation = !1), r.checkOrientation && window.ArrayBuffer) if (C.test(e)) E.test(e) ? this.read((i = e.replace(fe, ""), o = atob(i), a = new ArrayBuffer(o.length), B(l = new Uint8Array(a), (function (e, t) {
                            l[t] = o.charCodeAt(t)
                        })), a)) : this.clone(); else {
                            var i, o, a, l, s = new XMLHttpRequest, c = this.clone.bind(this);
                            this.reloading = !0, this.xhr = s, s.onabort = c, s.onerror = c, s.ontimeout = c, s.onprogress = function () {
                                "image/jpeg" !== s.getResponseHeader("content-type") && s.abort()
                            }, s.onload = function () {
                                t.read(s.response)
                            }, s.onloadend = function () {
                                t.reloading = !1, t.xhr = null
                            }, r.checkCrossOrigin && ie(e) && n.crossOrigin && (e = oe(e)), s.open("GET", e), s.responseType = "arraybuffer", s.withCredentials = "use-credentials" === n.crossOrigin, s.send()
                        } else this.clone()
                    }
                }
            }, {
                key: "read", value: function (e) {
                    var t = this.options, n = this.imageData, r = pe(e), i = 0, o = 1, a = 1;
                    if (r > 1) {
                        this.url = function (e, t) {
                            for (var n = [], r = new Uint8Array(e); r.length > 0;) n.push(ue.apply(null, M(r.subarray(0, 8192)))), r = r.subarray(8192);
                            return "data:".concat(t, ";base64,").concat(btoa(n.join("")))
                        }(e, "image/jpeg");
                        var l = function (e) {
                            var t = 0, n = 1, r = 1;
                            switch (e) {
                                case 2:
                                    n = -1;
                                    break;
                                case 3:
                                    t = -180;
                                    break;
                                case 4:
                                    r = -1;
                                    break;
                                case 5:
                                    t = 90, r = -1;
                                    break;
                                case 6:
                                    t = 90;
                                    break;
                                case 7:
                                    t = 90, n = -1;
                                    break;
                                case 8:
                                    t = -90
                            }
                            return {rotate: t, scaleX: n, scaleY: r}
                        }(r);
                        i = l.rotate, o = l.scaleX, a = l.scaleY
                    }
                    t.rotatable && (n.rotate = i), t.scalable && (n.scaleX = o, n.scaleY = a), this.clone()
                }
            }, {
                key: "clone", value: function () {
                    var e = this.element, t = this.url, n = e.crossOrigin, r = t;
                    this.options.checkCrossOrigin && ie(t) && (n || (n = "anonymous"), r = oe(t)), this.crossOrigin = n, this.crossOriginUrl = r;
                    var i = document.createElement("img");
                    n && (i.crossOrigin = n), i.src = r || t, i.alt = e.alt || "The image to crop", this.image = i, i.onload = this.start.bind(this), i.onerror = this.stop.bind(this), W(i, u), e.parentNode.insertBefore(i, e.nextSibling)
                }
            }, {
                key: "start", value: function () {
                    var e = this, t = this.image;
                    t.onload = null, t.onerror = null, this.sizing = !0;
                    var n = i.navigator && /(?:iPad|iPhone|iPod).*?AppleWebKit/i.test(i.navigator.userAgent),
                        r = function (t, n) {
                            z(e.imageData, {
                                naturalWidth: t,
                                naturalHeight: n,
                                aspectRatio: t / n
                            }), e.sizing = !1, e.sized = !0, e.build()
                        };
                    if (!t.naturalWidth || n) {
                        var o = document.createElement("img"), a = document.body || document.documentElement;
                        this.sizingImage = o, o.onload = function () {
                            r(o.width, o.height), n || a.removeChild(o)
                        }, o.src = t.src, n || (o.style.cssText = "left:0;max-height:none!important;max-width:none!important;min-height:0!important;min-width:0!important;opacity:0;position:absolute;top:0;z-index:-1;", a.appendChild(o))
                    } else r(t.naturalWidth, t.naturalHeight)
                }
            }, {
                key: "stop", value: function () {
                    var e = this.image;
                    e.onload = null, e.onerror = null, e.parentNode.removeChild(e), this.image = null
                }
            }, {
                key: "build", value: function () {
                    if (this.sized && !this.ready) {
                        var e = this.element, t = this.options, n = this.image, r = e.parentNode,
                            i = document.createElement("div");
                        i.innerHTML = '<div class="cropper-container" touch-action="none"><div class="cropper-wrap-box"><div class="cropper-canvas"></div></div><div class="cropper-drag-box"></div><div class="cropper-crop-box"><span class="cropper-view-box"></span><span class="cropper-dashed dashed-h"></span><span class="cropper-dashed dashed-v"></span><span class="cropper-center"></span><span class="cropper-face"></span><span class="cropper-line line-e" data-cropper-action="e"></span><span class="cropper-line line-n" data-cropper-action="n"></span><span class="cropper-line line-w" data-cropper-action="w"></span><span class="cropper-line line-s" data-cropper-action="s"></span><span class="cropper-point point-e" data-cropper-action="e"></span><span class="cropper-point point-n" data-cropper-action="n"></span><span class="cropper-point point-w" data-cropper-action="w"></span><span class="cropper-point point-s" data-cropper-action="s"></span><span class="cropper-point point-ne" data-cropper-action="ne"></span><span class="cropper-point point-nw" data-cropper-action="nw"></span><span class="cropper-point point-sw" data-cropper-action="sw"></span><span class="cropper-point point-se" data-cropper-action="se"></span></div></div>';
                        var o = i.querySelector(".".concat("cropper", "-container")),
                            a = o.querySelector(".".concat("cropper", "-canvas")),
                            l = o.querySelector(".".concat("cropper", "-drag-box")),
                            s = o.querySelector(".".concat("cropper", "-crop-box")),
                            p = s.querySelector(".".concat("cropper", "-face"));
                        this.container = r, this.cropper = o, this.canvas = a, this.dragBox = l, this.cropBox = s, this.viewBox = o.querySelector(".".concat("cropper", "-view-box")), this.face = p, a.appendChild(n), W(e, c), r.insertBefore(o, e.nextSibling), this.isImg || Y(n, u), this.initPreview(), this.bind(), t.initialAspectRatio = Math.max(0, t.initialAspectRatio) || NaN, t.aspectRatio = Math.max(0, t.aspectRatio) || NaN, t.viewMode = Math.max(0, Math.min(3, Math.round(t.viewMode))) || 0, W(s, c), t.guides || W(s.getElementsByClassName("".concat("cropper", "-dashed")), c), t.center || W(s.getElementsByClassName("".concat("cropper", "-center")), c), t.background && W(o, "".concat("cropper", "-bg")), t.highlight || W(p, f), t.cropBoxMovable && (W(p, d), K(p, h, "all")), t.cropBoxResizable || (W(s.getElementsByClassName("".concat("cropper", "-line")), c), W(s.getElementsByClassName("".concat("cropper", "-point")), c)), this.render(), this.ready = !0, this.setDragMode(t.dragMode), t.autoCrop && this.crop(), this.setData(t.data), L(t.ready) && J(e, "ready", t.ready, {once: !0}), ee(e, "ready")
                    }
                }
            }, {
                key: "unbuild", value: function () {
                    this.ready && (this.ready = !1, this.unbind(), this.resetPreview(), this.cropper.parentNode.removeChild(this.cropper), Y(this.element, c))
                }
            }, {
                key: "uncreate", value: function () {
                    this.ready ? (this.unbuild(), this.ready = !1, this.cropped = !1) : this.sizing ? (this.sizingImage.onload = null, this.sizing = !1, this.sized = !1) : this.reloading ? (this.xhr.onabort = null, this.xhr.abort()) : this.image && this.stop()
                }
            }]) && t(n.prototype, r), o && t(n, o), e
        }();
        return z(_e.prototype, de, he, me, ge, be, ye), _e
    }()
}, function (e, t, n) {
    "use strict";
    const r = n(30),
        i = new Set(["jpg", "png", "gif", "webp", "flif", "cr2", "tif", "bmp", "jxr", "psd", "ico", "bpg", "jp2", "jpm", "jpx", "heic", "cur", "dcm"]),
        o = e => {
            const t = r(e);
            return i.has(t && t.ext) ? t : null
        };
    e.exports = o, e.exports.default = o, Object.defineProperty(o, "minimumBytes", {value: r.minimumBytes})
}, function (e, t, n) {
    "use strict";

    function r(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    var i = ["extended", "included"], o = function () {
        function e() {
            !function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, e)
        }

        var t, n, o;
        return t = e, o = [{
            key: "extends", value: function (e) {
                for (var t in e) {
                    var n = e[t];
                    Array.from(i).includes(t) || (this[t] = n)
                }
                return null != e.extended && e.extended.apply(this), this
            }
        }, {
            key: "includes", value: function (e) {
                for (var t in e) {
                    var n = e[t];
                    Array.from(i).includes(t) || (this.prototype[t] = n)
                }
                return null != e.included && e.included.apply(this), this
            }
        }, {
            key: "delegate", value: function () {
                for (var e = this, t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                var i = n.pop();
                return Array.from(n).map((function (t) {
                    return e.prototype[t] = i.prototype[t]
                }))
            }
        }, {
            key: "aliasFunction", value: function (e, t) {
                var n = this;
                return this.prototype[e] = function () {
                    for (var e = arguments.length, r = new Array(e), i = 0; i < e; i++) r[i] = arguments[i];
                    return n.prototype[t].apply(n, r)
                }
            }
        }, {
            key: "aliasProperty", value: function (e, t) {
                return Object.defineProperty(this.prototype, e, {
                    get: function () {
                        return this[t]
                    }, set: function (e) {
                        return this[t] = e
                    }
                })
            }
        }, {
            key: "included", value: function (e) {
                return e.call(this, this.prototype)
            }
        }], (n = null) && r(t.prototype, n), o && r(t, o), e
    }(), a = o;
    t.a = a;
    "undefined" != typeof __REACT_HOT_LOADER__ && (__REACT_HOT_LOADER__.register(i, "moduleKeywords", "/Users/dmitry/scaleflex/plugins/filerobot-image-editor/projects/react/lib/caman/core/module.js"), __REACT_HOT_LOADER__.register(o, "Module", "/Users/dmitry/scaleflex/plugins/filerobot-image-editor/projects/react/lib/caman/core/module.js"), __REACT_HOT_LOADER__.register(a, "default", "/Users/dmitry/scaleflex/plugins/filerobot-image-editor/projects/react/lib/caman/core/module.js"))
}, function (e, t, n) {
    "use strict";
    var r = n(2), i = n(3);

    function o(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function a(e, t, n) {
        return t && o(e.prototype, t), n && o(e, n), e
    }

    var l = function () {
        function e(t) {
            !function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, e), this.processNext = this.processNext.bind(this), this.c = t, this.renderQueue = [], this.modPixelData = null
        }

        return a(e, null, [{
            key: "initClass", value: function () {
                this.Blocks = 4
            }
        }]), a(e, [{
            key: "add", value: function (e) {
                if (null != e) return this.renderQueue.push(e)
            }
        }, {
            key: "processNext", value: function () {
                if (0 === this.renderQueue.length) return Caman.Event.trigger(this, "renderFinished"), null != this.finishedFn && this.finishedFn.call(this.c), this;
                switch (this.currentJob = this.renderQueue.shift(), this.currentJob.type) {
                    case Caman.Filter.Type.LayerDequeue:
                        var e = this.c.canvasQueue.shift();
                        return this.c.executeLayer(e), this.processNext();
                    case Caman.Filter.Type.LayerFinished:
                        return this.c.applyCurrentLayer(), this.c.popContext(), this.processNext();
                    case Caman.Filter.Type.LoadOverlay:
                        return this.loadOverlay(this.currentJob.layer, this.currentJob.src);
                    case Caman.Filter.Type.LoadLayerMask:
                        return this.loadLayerMask(this.currentJob.layer, this.currentJob.src);
                    case Caman.Filter.Type.Plugin:
                        return this.executePlugin();
                    default:
                        return this.executeFilter()
                }
            }
        }, {
            key: "execute", value: function (e) {
                return this.finishedFn = e, this.modPixelData = r.b.dataArray(this.c.pixelData.length), this.processNext()
            }
        }, {
            key: "eachBlock", value: function (t) {
                var n = this;
                this.blocksDone = 0;
                var r = this.c.pixelData.length, i = 4 * Math.floor(r / 4 / e.Blocks), o = i + r / 4 % e.Blocks * 4;
                return function () {
                    for (var r = [], a = 0, l = e.Blocks, s = 0 <= l; s ? a < l : a > l; s ? a++ : a--) {
                        var c = a * i, u = c + (a === e.Blocks - 1 ? o : i);
                        if (Caman.NodeJS) {
                            var f = Fiber((function () {
                                return t.call(n, a, c, u)
                            })).run();
                            r.push(n.blockFinished(f))
                        } else r.push(setTimeout(function (e, r, i) {
                            return function () {
                                return t.call(n, e, r, i)
                            }
                        }(a, c, u), 0))
                    }
                    return r
                }()
            }
        }, {
            key: "executeFilter", value: function () {
                return Caman.Event.trigger(this.c, "processStart", this.currentJob), this.currentJob.type === Caman.Filter.Type.Single ? this.eachBlock(this.renderBlock) : this.eachBlock(this.renderKernel)
            }
        }, {
            key: "executePlugin", value: function () {
                return i.a.debug("Executing plugin ".concat(this.currentJob.plugin)), Caman.Plugin.execute(this.c, this.currentJob.plugin, this.currentJob.args), i.a.debug("Plugin ".concat(this.currentJob.plugin, " finished!")), this.processNext()
            }
        }, {
            key: "renderBlock", value: function (t, n, o) {
                i.a.debug("Block #".concat(t, " - Filter: ").concat(this.currentJob.name, ", Start: ").concat(n, ", End: ").concat(o)), Caman.Event.trigger(this.c, "blockStarted", {
                    blockNum: t,
                    totalBlocks: e.Blocks,
                    startPixel: n,
                    endPixel: o
                });
                var a = new Caman.Pixel;
                a.setContext(this.c);
                for (var l = n, s = o; l < s; l += 4) a.loc = l, a.r = this.c.pixelData[l], a.g = this.c.pixelData[l + 1], a.b = this.c.pixelData[l + 2], a.a = this.c.pixelData[l + 3], this.currentJob.processFn(a), this.c.pixelData[l] = r.b.clampRGB(a.r), this.c.pixelData[l + 1] = r.b.clampRGB(a.g), this.c.pixelData[l + 2] = r.b.clampRGB(a.b), this.c.pixelData[l + 3] = r.b.clampRGB(a.a);
                return this.blockFinished(t)
            }
        }, {
            key: "renderKernel", value: function (e, t, n) {
                this.currentJob.name;
                var o = this.currentJob.bias, a = this.currentJob.divisor, l = this.c.pixelData.length,
                    s = this.currentJob.adjust, c = Math.sqrt(s.length), u = [];
                i.a.debug("Rendering kernel - Filter: ".concat(this.currentJob.name)), t = Math.max(t, 4 * this.c.dimensions.width * ((c - 1) / 2)), n = Math.min(n, l - 4 * this.c.dimensions.width * ((c - 1) / 2));
                var f = (c - 1) / 2, p = new Caman.Pixel;
                p.setContext(this.c);
                for (var d = t, h = n; d < h; d += 4) {
                    p.loc = d;
                    for (var m = 0, g = -f, b = f, y = -f <= b; y ? g <= b : g >= b; y ? g++ : g--) for (var v = f, _ = -f, w = f <= _; w ? v <= _ : v >= _; w ? v++ : v--) {
                        var x = p.getPixelRelative(g, v);
                        u[3 * m] = x.r, u[3 * m + 1] = x.g, u[3 * m + 2] = x.b, m++
                    }
                    var C = this.processKernel(s, u, a, o);
                    this.modPixelData[d] = r.b.clampRGB(C.r), this.modPixelData[d + 1] = r.b.clampRGB(C.g), this.modPixelData[d + 2] = r.b.clampRGB(C.b), this.modPixelData[d + 3] = this.c.pixelData[d + 3]
                }
                return this.blockFinished(e)
            }
        }, {
            key: "blockFinished", value: function (t) {
                if (t >= 0 && i.a.debug("Block #".concat(t, " finished! Filter: ").concat(this.currentJob.name)), this.blocksDone++, Caman.Event.trigger(this.c, "blockFinished", {
                    blockNum: t,
                    blocksFinished: this.blocksDone,
                    totalBlocks: e.Blocks
                }), this.blocksDone === e.Blocks) {
                    if (this.currentJob.type === Caman.Filter.Type.Kernel) for (var n = 0, r = this.c.pixelData.length, o = 0 <= r; o ? n < r : n > r; o ? n++ : n--) this.c.pixelData[n] = this.modPixelData[n];
                    return t >= 0 && i.a.debug("Filter ".concat(this.currentJob.name, " finished!")), Caman.Event.trigger(this.c, "processComplete", this.currentJob), this.processNext()
                }
            }
        }, {
            key: "processKernel", value: function (e, t, n, r) {
                for (var i = {
                    r: 0,
                    g: 0,
                    b: 0
                }, o = 0, a = e.length, l = 0 <= a; l ? o < a : o > a; l ? o++ : o--) i.r += e[o] * t[3 * o], i.g += e[o] * t[3 * o + 1], i.b += e[o] * t[3 * o + 2];
                return i.r = i.r / n + r, i.g = i.g / n + r, i.b = i.b / n + r, i
            }
        }, {
            key: "loadOverlay", value: function (e, t) {
                var n = this, r = new Image;
                r.onload = function () {
                    return e.context.drawImage(r, 0, 0, n.c.dimensions.width, n.c.dimensions.height), e.imageData = e.context.getImageData(0, 0, n.c.dimensions.width, n.c.dimensions.height), e.pixelData = e.imageData.data, n.c.pixelData = e.pixelData, n.processNext()
                };
                var i = Caman.IO.remoteCheck(t);
                return r.src = null != i ? i : t
            }
        }, {
            key: "loadLayerMask", value: function (e, t) {
                var n = this, r = new Image;
                r.onload = function () {
                    var t = document.createElement("canvas");
                    t.width = n.c.dimensions.width, t.height = n.c.dimensions.height;
                    var i = t.getContext("2d");
                    i.drawImage(r, 0, 0, n.c.dimensions.width, n.c.dimensions.height);
                    var o = i.getImageData(0, 0, n.c.dimensions.width, n.c.dimensions.height);
                    return e.maskData = o.data, n.processNext()
                };
                var i = Caman.IO.remoteCheck(t);
                return r.src = null != i ? i : t
            }
        }]), e
    }();
    l.initClass();
    var s = l;
    t.a = s;
    "undefined" != typeof __REACT_HOT_LOADER__ && (__REACT_HOT_LOADER__.register(l, "Renderer", "/Users/dmitry/scaleflex/plugins/filerobot-image-editor/projects/react/lib/caman/core/renderer.js"), __REACT_HOT_LOADER__.register(s, "default", "/Users/dmitry/scaleflex/plugins/filerobot-image-editor/projects/react/lib/caman/core/renderer.js"))
}, function (e, t, n) {
    "use strict";
    var r = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|itemProp|itemScope|itemType|itemID|itemRef|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
        i = function (e) {
            var t = {};
            return function (n) {
                return void 0 === t[n] && (t[n] = e(n)), t[n]
            }
        }((function (e) {
            return r.test(e) || 111 === e.charCodeAt(0) && 110 === e.charCodeAt(1) && e.charCodeAt(2) < 91
        }));
    t.a = i
}, function (e, t, n) {
    "use strict";

    function r(e) {
        return Object.prototype.toString.call(e).slice(8, -1)
    }

    function i(e) {
        return "Object" === r(e) && (e.constructor === Object && Object.getPrototypeOf(e) === Object.prototype)
    }

    function o(e) {
        return "Array" === r(e)
    }

    function a(e) {
        return "Symbol" === r(e)
    }

    function l(e, t, n, r) {
        var i = r.propertyIsEnumerable(t) ? "enumerable" : "nonenumerable";
        "enumerable" === i && (e[t] = n), "nonenumerable" === i && Object.defineProperty(e, t, {
            value: n,
            enumerable: !1,
            writable: !0,
            configurable: !0
        })
    }

    t.a = function (e) {
        for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        var r = null, s = e;
        return i(e) && e.extensions && 1 === Object.keys(e).length && (s = {}, r = e.extensions), t.reduce((function (e, t) {
            return function e(t, n, r) {
                if (!i(n)) return r && o(r) && r.forEach((function (e) {
                    n = e(t, n)
                })), n;
                var s = {};
                if (i(t)) {
                    var c = Object.getOwnPropertyNames(t), u = Object.getOwnPropertySymbols(t);
                    s = c.concat(u).reduce((function (e, r) {
                        var i = t[r];
                        return (!a(r) && !Object.getOwnPropertyNames(n).includes(r) || a(r) && !Object.getOwnPropertySymbols(n).includes(r)) && l(e, r, i, t), e
                    }), {})
                }
                var f = Object.getOwnPropertyNames(n), p = Object.getOwnPropertySymbols(n);
                return f.concat(p).reduce((function (a, s) {
                    var c = n[s], u = i(t) ? t[s] : void 0;
                    return r && o(r) && r.forEach((function (e) {
                        c = e(u, c)
                    })), void 0 !== u && i(c) && (c = e(u, c, r)), l(a, s, c, n), a
                }), s)
            }(e, t, r)
        }), s)
    }
}, function (e, t, n) {
    "use strict";
    /** @license React v16.10.1
     * react-dom.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */var r = n(0), i = n(10), o = n(21);

    function a(e) {
        for (var t = e.message, n = "https://reactjs.org/docs/error-decoder.html?invariant=" + t, r = 1; r < arguments.length; r++) n += "&args[]=" + encodeURIComponent(arguments[r]);
        return e.message = "Minified React error #" + t + "; visit " + n + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ", e
    }

    if (!r) throw a(Error(227));
    var l = null, s = {};

    function c() {
        if (l) for (var e in s) {
            var t = s[e], n = l.indexOf(e);
            if (!(-1 < n)) throw a(Error(96), e);
            if (!f[n]) {
                if (!t.extractEvents) throw a(Error(97), e);
                for (var r in f[n] = t, n = t.eventTypes) {
                    var i = void 0, o = n[r], c = t, d = r;
                    if (p.hasOwnProperty(d)) throw a(Error(99), d);
                    p[d] = o;
                    var h = o.phasedRegistrationNames;
                    if (h) {
                        for (i in h) h.hasOwnProperty(i) && u(h[i], c, d);
                        i = !0
                    } else o.registrationName ? (u(o.registrationName, c, d), i = !0) : i = !1;
                    if (!i) throw a(Error(98), r, e)
                }
            }
        }
    }

    function u(e, t, n) {
        if (d[e]) throw a(Error(100), e);
        d[e] = t, h[e] = t.eventTypes[n].dependencies
    }

    var f = [], p = {}, d = {}, h = {};

    function m(e, t, n, r, i, o, a, l, s) {
        var c = Array.prototype.slice.call(arguments, 3);
        try {
            t.apply(n, c)
        } catch (e) {
            this.onError(e)
        }
    }

    var g = !1, b = null, y = !1, v = null, _ = {
        onError: function (e) {
            g = !0, b = e
        }
    };

    function w(e, t, n, r, i, o, a, l, s) {
        g = !1, b = null, m.apply(_, arguments)
    }

    var x = null, C = null, E = null;

    function k(e, t, n) {
        var r = e.type || "unknown-event";
        e.currentTarget = E(n), function (e, t, n, r, i, o, l, s, c) {
            if (w.apply(this, arguments), g) {
                if (!g) throw a(Error(198));
                var u = b;
                g = !1, b = null, y || (y = !0, v = u)
            }
        }(r, t, void 0, e), e.currentTarget = null
    }

    function O(e, t) {
        if (null == t) throw a(Error(30));
        return null == e ? t : Array.isArray(e) ? Array.isArray(t) ? (e.push.apply(e, t), e) : (e.push(t), e) : Array.isArray(t) ? [e].concat(t) : [e, t]
    }

    function T(e, t, n) {
        Array.isArray(e) ? e.forEach(t, n) : e && t.call(n, e)
    }

    var R = null;

    function S(e) {
        if (e) {
            var t = e._dispatchListeners, n = e._dispatchInstances;
            if (Array.isArray(t)) for (var r = 0; r < t.length && !e.isPropagationStopped(); r++) k(e, t[r], n[r]); else t && k(e, t, n);
            e._dispatchListeners = null, e._dispatchInstances = null, e.isPersistent() || e.constructor.release(e)
        }
    }

    function A(e) {
        if (null !== e && (R = O(R, e)), e = R, R = null, e) {
            if (T(e, S), R) throw a(Error(95));
            if (y) throw e = v, y = !1, v = null, e
        }
    }

    var j = {
        injectEventPluginOrder: function (e) {
            if (l) throw a(Error(101));
            l = Array.prototype.slice.call(e), c()
        }, injectEventPluginsByName: function (e) {
            var t, n = !1;
            for (t in e) if (e.hasOwnProperty(t)) {
                var r = e[t];
                if (!s.hasOwnProperty(t) || s[t] !== r) {
                    if (s[t]) throw a(Error(102), t);
                    s[t] = r, n = !0
                }
            }
            n && c()
        }
    };

    function P(e, t) {
        var n = e.stateNode;
        if (!n) return null;
        var r = x(n);
        if (!r) return null;
        n = r[t];
        e:switch (t) {
            case"onClick":
            case"onClickCapture":
            case"onDoubleClick":
            case"onDoubleClickCapture":
            case"onMouseDown":
            case"onMouseDownCapture":
            case"onMouseMove":
            case"onMouseMoveCapture":
            case"onMouseUp":
            case"onMouseUpCapture":
                (r = !r.disabled) || (r = !("button" === (e = e.type) || "input" === e || "select" === e || "textarea" === e)), e = !r;
                break e;
            default:
                e = !1
        }
        if (e) return null;
        if (n && "function" != typeof n) throw a(Error(231), t, typeof n);
        return n
    }

    var D = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    D.hasOwnProperty("ReactCurrentDispatcher") || (D.ReactCurrentDispatcher = {current: null}), D.hasOwnProperty("ReactCurrentBatchConfig") || (D.ReactCurrentBatchConfig = {suspense: null});
    var L = /^(.*)[\\\/]/, I = "function" == typeof Symbol && Symbol.for, M = I ? Symbol.for("react.element") : 60103,
        B = I ? Symbol.for("react.portal") : 60106, z = I ? Symbol.for("react.fragment") : 60107,
        U = I ? Symbol.for("react.strict_mode") : 60108, H = I ? Symbol.for("react.profiler") : 60114,
        F = I ? Symbol.for("react.provider") : 60109, N = I ? Symbol.for("react.context") : 60110,
        W = I ? Symbol.for("react.concurrent_mode") : 60111, Y = I ? Symbol.for("react.forward_ref") : 60112,
        q = I ? Symbol.for("react.suspense") : 60113, $ = I ? Symbol.for("react.suspense_list") : 60120,
        V = I ? Symbol.for("react.memo") : 60115, X = I ? Symbol.for("react.lazy") : 60116;
    I && Symbol.for("react.fundamental"), I && Symbol.for("react.responder"), I && Symbol.for("react.scope");
    var K = "function" == typeof Symbol && Symbol.iterator;

    function Z(e) {
        return null === e || "object" != typeof e ? null : "function" == typeof (e = K && e[K] || e["@@iterator"]) ? e : null
    }

    function Q(e) {
        if (null == e) return null;
        if ("function" == typeof e) return e.displayName || e.name || null;
        if ("string" == typeof e) return e;
        switch (e) {
            case z:
                return "Fragment";
            case B:
                return "Portal";
            case H:
                return "Profiler";
            case U:
                return "StrictMode";
            case q:
                return "Suspense";
            case $:
                return "SuspenseList"
        }
        if ("object" == typeof e) switch (e.$$typeof) {
            case N:
                return "Context.Consumer";
            case F:
                return "Context.Provider";
            case Y:
                var t = e.render;
                return t = t.displayName || t.name || "", e.displayName || ("" !== t ? "ForwardRef(" + t + ")" : "ForwardRef");
            case V:
                return Q(e.type);
            case X:
                if (e = 1 === e._status ? e._result : null) return Q(e)
        }
        return null
    }

    function G(e) {
        var t = "";
        do {
            e:switch (e.tag) {
                case 3:
                case 4:
                case 6:
                case 7:
                case 10:
                case 9:
                    var n = "";
                    break e;
                default:
                    var r = e._debugOwner, i = e._debugSource, o = Q(e.type);
                    n = null, r && (n = Q(r.type)), r = o, o = "", i ? o = " (at " + i.fileName.replace(L, "") + ":" + i.lineNumber + ")" : n && (o = " (created by " + n + ")"), n = "\n    in " + (r || "Unknown") + o
            }
            t += n, e = e.return
        } while (e);
        return t
    }

    var J = !("undefined" == typeof window || void 0 === window.document || void 0 === window.document.createElement),
        ee = null, te = null, ne = null;

    function re(e) {
        if (e = C(e)) {
            if ("function" != typeof ee) throw a(Error(280));
            var t = x(e.stateNode);
            ee(e.stateNode, e.type, t)
        }
    }

    function ie(e) {
        te ? ne ? ne.push(e) : ne = [e] : te = e
    }

    function oe() {
        if (te) {
            var e = te, t = ne;
            if (ne = te = null, re(e), t) for (e = 0; e < t.length; e++) re(t[e])
        }
    }

    function ae(e, t) {
        return e(t)
    }

    function le(e, t, n, r) {
        return e(t, n, r)
    }

    function se() {
    }

    var ce = ae, ue = !1, fe = !1;

    function pe() {
        null === te && null === ne || (se(), oe())
    }

    new Map, new Map, new Map;
    var de = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
        he = Object.prototype.hasOwnProperty, me = {}, ge = {};

    function be(e, t, n, r, i, o) {
        this.acceptsBooleans = 2 === t || 3 === t || 4 === t, this.attributeName = r, this.attributeNamespace = i, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = o
    }

    var ye = {};
    "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function (e) {
        ye[e] = new be(e, 0, !1, e, null, !1)
    })), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach((function (e) {
        var t = e[0];
        ye[t] = new be(t, 1, !1, e[1], null, !1)
    })), ["contentEditable", "draggable", "spellCheck", "value"].forEach((function (e) {
        ye[e] = new be(e, 2, !1, e.toLowerCase(), null, !1)
    })), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach((function (e) {
        ye[e] = new be(e, 2, !1, e, null, !1)
    })), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function (e) {
        ye[e] = new be(e, 3, !1, e.toLowerCase(), null, !1)
    })), ["checked", "multiple", "muted", "selected"].forEach((function (e) {
        ye[e] = new be(e, 3, !0, e, null, !1)
    })), ["capture", "download"].forEach((function (e) {
        ye[e] = new be(e, 4, !1, e, null, !1)
    })), ["cols", "rows", "size", "span"].forEach((function (e) {
        ye[e] = new be(e, 6, !1, e, null, !1)
    })), ["rowSpan", "start"].forEach((function (e) {
        ye[e] = new be(e, 5, !1, e.toLowerCase(), null, !1)
    }));
    var ve = /[\-:]([a-z])/g;

    function _e(e) {
        return e[1].toUpperCase()
    }

    function we(e) {
        switch (typeof e) {
            case"boolean":
            case"number":
            case"object":
            case"string":
            case"undefined":
                return e;
            default:
                return ""
        }
    }

    function xe(e, t, n, r) {
        var i = ye.hasOwnProperty(t) ? ye[t] : null;
        (null !== i ? 0 === i.type : !r && (2 < t.length && ("o" === t[0] || "O" === t[0]) && ("n" === t[1] || "N" === t[1]))) || (function (e, t, n, r) {
            if (null == t || function (e, t, n, r) {
                if (null !== n && 0 === n.type) return !1;
                switch (typeof t) {
                    case"function":
                    case"symbol":
                        return !0;
                    case"boolean":
                        return !r && (null !== n ? !n.acceptsBooleans : "data-" !== (e = e.toLowerCase().slice(0, 5)) && "aria-" !== e);
                    default:
                        return !1
                }
            }(e, t, n, r)) return !0;
            if (r) return !1;
            if (null !== n) switch (n.type) {
                case 3:
                    return !t;
                case 4:
                    return !1 === t;
                case 5:
                    return isNaN(t);
                case 6:
                    return isNaN(t) || 1 > t
            }
            return !1
        }(t, n, i, r) && (n = null), r || null === i ? function (e) {
            return !!he.call(ge, e) || !he.call(me, e) && (de.test(e) ? ge[e] = !0 : (me[e] = !0, !1))
        }(t) && (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : i.mustUseProperty ? e[i.propertyName] = null === n ? 3 !== i.type && "" : n : (t = i.attributeName, r = i.attributeNamespace, null === n ? e.removeAttribute(t) : (n = 3 === (i = i.type) || 4 === i && !0 === n ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
    }

    function Ce(e) {
        var t = e.type;
        return (e = e.nodeName) && "input" === e.toLowerCase() && ("checkbox" === t || "radio" === t)
    }

    function Ee(e) {
        e._valueTracker || (e._valueTracker = function (e) {
            var t = Ce(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
                r = "" + e[t];
            if (!e.hasOwnProperty(t) && void 0 !== n && "function" == typeof n.get && "function" == typeof n.set) {
                var i = n.get, o = n.set;
                return Object.defineProperty(e, t, {
                    configurable: !0, get: function () {
                        return i.call(this)
                    }, set: function (e) {
                        r = "" + e, o.call(this, e)
                    }
                }), Object.defineProperty(e, t, {enumerable: n.enumerable}), {
                    getValue: function () {
                        return r
                    }, setValue: function (e) {
                        r = "" + e
                    }, stopTracking: function () {
                        e._valueTracker = null, delete e[t]
                    }
                }
            }
        }(e))
    }

    function ke(e) {
        if (!e) return !1;
        var t = e._valueTracker;
        if (!t) return !0;
        var n = t.getValue(), r = "";
        return e && (r = Ce(e) ? e.checked ? "true" : "false" : e.value), (e = r) !== n && (t.setValue(e), !0)
    }

    function Oe(e, t) {
        var n = t.checked;
        return i({}, t, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: null != n ? n : e._wrapperState.initialChecked
        })
    }

    function Te(e, t) {
        var n = null == t.defaultValue ? "" : t.defaultValue, r = null != t.checked ? t.checked : t.defaultChecked;
        n = we(null != t.value ? t.value : n), e._wrapperState = {
            initialChecked: r,
            initialValue: n,
            controlled: "checkbox" === t.type || "radio" === t.type ? null != t.checked : null != t.value
        }
    }

    function Re(e, t) {
        null != (t = t.checked) && xe(e, "checked", t, !1)
    }

    function Se(e, t) {
        Re(e, t);
        var n = we(t.value), r = t.type;
        if (null != n) "number" === r ? (0 === n && "" === e.value || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n); else if ("submit" === r || "reset" === r) return void e.removeAttribute("value");
        t.hasOwnProperty("value") ? je(e, t.type, n) : t.hasOwnProperty("defaultValue") && je(e, t.type, we(t.defaultValue)), null == t.checked && null != t.defaultChecked && (e.defaultChecked = !!t.defaultChecked)
    }

    function Ae(e, t, n) {
        if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
            var r = t.type;
            if (!("submit" !== r && "reset" !== r || void 0 !== t.value && null !== t.value)) return;
            t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t
        }
        "" !== (n = e.name) && (e.name = ""), e.defaultChecked = !e.defaultChecked, e.defaultChecked = !!e._wrapperState.initialChecked, "" !== n && (e.name = n)
    }

    function je(e, t, n) {
        "number" === t && e.ownerDocument.activeElement === e || (null == n ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
    }

    function Pe(e, t) {
        return e = i({children: void 0}, t), (t = function (e) {
            var t = "";
            return r.Children.forEach(e, (function (e) {
                null != e && (t += e)
            })), t
        }(t.children)) && (e.children = t), e
    }

    function De(e, t, n, r) {
        if (e = e.options, t) {
            t = {};
            for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
            for (n = 0; n < e.length; n++) i = t.hasOwnProperty("$" + e[n].value), e[n].selected !== i && (e[n].selected = i), i && r && (e[n].defaultSelected = !0)
        } else {
            for (n = "" + we(n), t = null, i = 0; i < e.length; i++) {
                if (e[i].value === n) return e[i].selected = !0, void (r && (e[i].defaultSelected = !0));
                null !== t || e[i].disabled || (t = e[i])
            }
            null !== t && (t.selected = !0)
        }
    }

    function Le(e, t) {
        if (null != t.dangerouslySetInnerHTML) throw a(Error(91));
        return i({}, t, {value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue})
    }

    function Ie(e, t) {
        var n = t.value;
        if (null == n) {
            if (n = t.defaultValue, null != (t = t.children)) {
                if (null != n) throw a(Error(92));
                if (Array.isArray(t)) {
                    if (!(1 >= t.length)) throw a(Error(93));
                    t = t[0]
                }
                n = t
            }
            null == n && (n = "")
        }
        e._wrapperState = {initialValue: we(n)}
    }

    function Me(e, t) {
        var n = we(t.value), r = we(t.defaultValue);
        null != n && ((n = "" + n) !== e.value && (e.value = n), null == t.defaultValue && e.defaultValue !== n && (e.defaultValue = n)), null != r && (e.defaultValue = "" + r)
    }

    function Be(e) {
        var t = e.textContent;
        t === e._wrapperState.initialValue && "" !== t && null !== t && (e.value = t)
    }

    "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function (e) {
        var t = e.replace(ve, _e);
        ye[t] = new be(t, 1, !1, e, null, !1)
    })), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function (e) {
        var t = e.replace(ve, _e);
        ye[t] = new be(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1)
    })), ["xml:base", "xml:lang", "xml:space"].forEach((function (e) {
        var t = e.replace(ve, _e);
        ye[t] = new be(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1)
    })), ["tabIndex", "crossOrigin"].forEach((function (e) {
        ye[e] = new be(e, 1, !1, e.toLowerCase(), null, !1)
    })), ye.xlinkHref = new be("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0), ["src", "href", "action", "formAction"].forEach((function (e) {
        ye[e] = new be(e, 1, !1, e.toLowerCase(), null, !0)
    }));
    var ze = {
        html: "http://www.w3.org/1999/xhtml",
        mathml: "http://www.w3.org/1998/Math/MathML",
        svg: "http://www.w3.org/2000/svg"
    };

    function Ue(e) {
        switch (e) {
            case"svg":
                return "http://www.w3.org/2000/svg";
            case"math":
                return "http://www.w3.org/1998/Math/MathML";
            default:
                return "http://www.w3.org/1999/xhtml"
        }
    }

    function He(e, t) {
        return null == e || "http://www.w3.org/1999/xhtml" === e ? Ue(t) : "http://www.w3.org/2000/svg" === e && "foreignObject" === t ? "http://www.w3.org/1999/xhtml" : e
    }

    var Fe, Ne = function (e) {
        return "undefined" != typeof MSApp && MSApp.execUnsafeLocalFunction ? function (t, n, r, i) {
            MSApp.execUnsafeLocalFunction((function () {
                return e(t, n)
            }))
        } : e
    }((function (e, t) {
        if (e.namespaceURI !== ze.svg || "innerHTML" in e) e.innerHTML = t; else {
            for ((Fe = Fe || document.createElement("div")).innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Fe.firstChild; e.firstChild;) e.removeChild(e.firstChild);
            for (; t.firstChild;) e.appendChild(t.firstChild)
        }
    }));

    function We(e, t) {
        if (t) {
            var n = e.firstChild;
            if (n && n === e.lastChild && 3 === n.nodeType) return void (n.nodeValue = t)
        }
        e.textContent = t
    }

    function Ye(e, t) {
        var n = {};
        return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n
    }

    var qe = {
        animationend: Ye("Animation", "AnimationEnd"),
        animationiteration: Ye("Animation", "AnimationIteration"),
        animationstart: Ye("Animation", "AnimationStart"),
        transitionend: Ye("Transition", "TransitionEnd")
    }, $e = {}, Ve = {};

    function Xe(e) {
        if ($e[e]) return $e[e];
        if (!qe[e]) return e;
        var t, n = qe[e];
        for (t in n) if (n.hasOwnProperty(t) && t in Ve) return $e[e] = n[t];
        return e
    }

    J && (Ve = document.createElement("div").style, "AnimationEvent" in window || (delete qe.animationend.animation, delete qe.animationiteration.animation, delete qe.animationstart.animation), "TransitionEvent" in window || delete qe.transitionend.transition);
    var Ke = Xe("animationend"), Ze = Xe("animationiteration"), Qe = Xe("animationstart"), Ge = Xe("transitionend"),
        Je = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
        et = !1, tt = [], nt = null, rt = null, it = null, ot = new Map, at = new Map,
        lt = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput close cancel copy cut paste click change contextmenu reset submit".split(" "),
        st = "focus blur dragenter dragleave mouseover mouseout pointerover pointerout gotpointercapture lostpointercapture".split(" ");

    function ct(e, t, n, r) {
        return {blockedOn: e, topLevelType: t, eventSystemFlags: 32 | n, nativeEvent: r}
    }

    function ut(e, t) {
        switch (e) {
            case"focus":
            case"blur":
                nt = null;
                break;
            case"dragenter":
            case"dragleave":
                rt = null;
                break;
            case"mouseover":
            case"mouseout":
                it = null;
                break;
            case"pointerover":
            case"pointerout":
                ot.delete(t.pointerId);
                break;
            case"gotpointercapture":
            case"lostpointercapture":
                at.delete(t.pointerId)
        }
    }

    function ft(e, t, n, r, i) {
        return null === e || e.nativeEvent !== i ? ct(t, n, r, i) : (e.eventSystemFlags |= r, e)
    }

    function pt(e) {
        if (null !== e.blockedOn) return !1;
        var t = On(e.topLevelType, e.eventSystemFlags, e.nativeEvent);
        return null === t || (e.blockedOn = t, !1)
    }

    function dt(e, t, n) {
        pt(e) && n.delete(t)
    }

    function ht() {
        for (et = !1; 0 < tt.length;) {
            var e = tt[0];
            if (null !== e.blockedOn) break;
            var t = On(e.topLevelType, e.eventSystemFlags, e.nativeEvent);
            null !== t ? e.blockedOn = t : tt.shift()
        }
        null !== nt && pt(nt) && (nt = null), null !== rt && pt(rt) && (rt = null), null !== it && pt(it) && (it = null), ot.forEach(dt), at.forEach(dt)
    }

    function mt(e, t) {
        e.blockedOn === t && (e.blockedOn = null, et || (et = !0, o.unstable_scheduleCallback(o.unstable_NormalPriority, ht)))
    }

    function gt(e) {
        function t(t) {
            return mt(t, e)
        }

        if (0 < tt.length) {
            mt(tt[0], e);
            for (var n = 1; n < tt.length; n++) {
                var r = tt[n];
                r.blockedOn === e && (r.blockedOn = null)
            }
        }
        null !== nt && mt(nt, e), null !== rt && mt(rt, e), null !== it && mt(it, e), ot.forEach(t), at.forEach(t)
    }

    var bt = 0, yt = 2, vt = 1024;

    function _t(e) {
        var t = e, n = e;
        if (e.alternate) for (; t.return;) t = t.return; else {
            e = t;
            do {
                ((t = e).effectTag & (yt | vt)) !== bt && (n = t.return), e = t.return
            } while (e)
        }
        return 3 === t.tag ? n : null
    }

    function wt(e) {
        if (_t(e) !== e) throw a(Error(188))
    }

    function xt(e) {
        if (!(e = function (e) {
            var t = e.alternate;
            if (!t) {
                if (null === (t = _t(e))) throw a(Error(188));
                return t !== e ? null : e
            }
            for (var n = e, r = t; ;) {
                var i = n.return;
                if (null === i) break;
                var o = i.alternate;
                if (null === o) {
                    if (null !== (r = i.return)) {
                        n = r;
                        continue
                    }
                    break
                }
                if (i.child === o.child) {
                    for (o = i.child; o;) {
                        if (o === n) return wt(i), e;
                        if (o === r) return wt(i), t;
                        o = o.sibling
                    }
                    throw a(Error(188))
                }
                if (n.return !== r.return) n = i, r = o; else {
                    for (var l = !1, s = i.child; s;) {
                        if (s === n) {
                            l = !0, n = i, r = o;
                            break
                        }
                        if (s === r) {
                            l = !0, r = i, n = o;
                            break
                        }
                        s = s.sibling
                    }
                    if (!l) {
                        for (s = o.child; s;) {
                            if (s === n) {
                                l = !0, n = o, r = i;
                                break
                            }
                            if (s === r) {
                                l = !0, r = o, n = i;
                                break
                            }
                            s = s.sibling
                        }
                        if (!l) throw a(Error(189))
                    }
                }
                if (n.alternate !== r) throw a(Error(190))
            }
            if (3 !== n.tag) throw a(Error(188));
            return n.stateNode.current === n ? e : t
        }(e))) return null;
        for (var t = e; ;) {
            if (5 === t.tag || 6 === t.tag) return t;
            if (t.child) t.child.return = t, t = t.child; else {
                if (t === e) break;
                for (; !t.sibling;) {
                    if (!t.return || t.return === e) return null;
                    t = t.return
                }
                t.sibling.return = t.return, t = t.sibling
            }
        }
        return null
    }

    function Ct(e) {
        return (e = e.target || e.srcElement || window).correspondingUseElement && (e = e.correspondingUseElement), 3 === e.nodeType ? e.parentNode : e
    }

    function Et(e) {
        do {
            e = e.return
        } while (e && 5 !== e.tag);
        return e || null
    }

    function kt(e, t, n) {
        (t = P(e, n.dispatchConfig.phasedRegistrationNames[t])) && (n._dispatchListeners = O(n._dispatchListeners, t), n._dispatchInstances = O(n._dispatchInstances, e))
    }

    function Ot(e) {
        if (e && e.dispatchConfig.phasedRegistrationNames) {
            for (var t = e._targetInst, n = []; t;) n.push(t), t = Et(t);
            for (t = n.length; 0 < t--;) kt(n[t], "captured", e);
            for (t = 0; t < n.length; t++) kt(n[t], "bubbled", e)
        }
    }

    function Tt(e, t, n) {
        e && n && n.dispatchConfig.registrationName && (t = P(e, n.dispatchConfig.registrationName)) && (n._dispatchListeners = O(n._dispatchListeners, t), n._dispatchInstances = O(n._dispatchInstances, e))
    }

    function Rt(e) {
        e && e.dispatchConfig.registrationName && Tt(e._targetInst, null, e)
    }

    function St(e) {
        T(e, Ot)
    }

    function At() {
        return !0
    }

    function jt() {
        return !1
    }

    function Pt(e, t, n, r) {
        for (var i in this.dispatchConfig = e, this._targetInst = t, this.nativeEvent = n, e = this.constructor.Interface) e.hasOwnProperty(i) && ((t = e[i]) ? this[i] = t(n) : "target" === i ? this.target = r : this[i] = n[i]);
        return this.isDefaultPrevented = (null != n.defaultPrevented ? n.defaultPrevented : !1 === n.returnValue) ? At : jt, this.isPropagationStopped = jt, this
    }

    function Dt(e, t, n, r) {
        if (this.eventPool.length) {
            var i = this.eventPool.pop();
            return this.call(i, e, t, n, r), i
        }
        return new this(e, t, n, r)
    }

    function Lt(e) {
        if (!(e instanceof this)) throw a(Error(279));
        e.destructor(), 10 > this.eventPool.length && this.eventPool.push(e)
    }

    function It(e) {
        e.eventPool = [], e.getPooled = Dt, e.release = Lt
    }

    i(Pt.prototype, {
        preventDefault: function () {
            this.defaultPrevented = !0;
            var e = this.nativeEvent;
            e && (e.preventDefault ? e.preventDefault() : "unknown" != typeof e.returnValue && (e.returnValue = !1), this.isDefaultPrevented = At)
        }, stopPropagation: function () {
            var e = this.nativeEvent;
            e && (e.stopPropagation ? e.stopPropagation() : "unknown" != typeof e.cancelBubble && (e.cancelBubble = !0), this.isPropagationStopped = At)
        }, persist: function () {
            this.isPersistent = At
        }, isPersistent: jt, destructor: function () {
            var e, t = this.constructor.Interface;
            for (e in t) this[e] = null;
            this.nativeEvent = this._targetInst = this.dispatchConfig = null, this.isPropagationStopped = this.isDefaultPrevented = jt, this._dispatchInstances = this._dispatchListeners = null
        }
    }), Pt.Interface = {
        type: null, target: null, currentTarget: function () {
            return null
        }, eventPhase: null, bubbles: null, cancelable: null, timeStamp: function (e) {
            return e.timeStamp || Date.now()
        }, defaultPrevented: null, isTrusted: null
    }, Pt.extend = function (e) {
        function t() {
        }

        function n() {
            return r.apply(this, arguments)
        }

        var r = this;
        t.prototype = r.prototype;
        var o = new t;
        return i(o, n.prototype), n.prototype = o, n.prototype.constructor = n, n.Interface = i({}, r.Interface, e), n.extend = r.extend, It(n), n
    }, It(Pt);
    var Mt = Pt.extend({animationName: null, elapsedTime: null, pseudoElement: null}), Bt = Pt.extend({
        clipboardData: function (e) {
            return "clipboardData" in e ? e.clipboardData : window.clipboardData
        }
    }), zt = Pt.extend({view: null, detail: null}), Ut = zt.extend({relatedTarget: null});

    function Ht(e) {
        var t = e.keyCode;
        return "charCode" in e ? 0 === (e = e.charCode) && 13 === t && (e = 13) : e = t, 10 === e && (e = 13), 32 <= e || 13 === e ? e : 0
    }

    var Ft = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified"
    }, Nt = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta"
    }, Wt = {Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey"};

    function Yt(e) {
        var t = this.nativeEvent;
        return t.getModifierState ? t.getModifierState(e) : !!(e = Wt[e]) && !!t[e]
    }

    function qt() {
        return Yt
    }

    for (var $t = zt.extend({
        key: function (e) {
            if (e.key) {
                var t = Ft[e.key] || e.key;
                if ("Unidentified" !== t) return t
            }
            return "keypress" === e.type ? 13 === (e = Ht(e)) ? "Enter" : String.fromCharCode(e) : "keydown" === e.type || "keyup" === e.type ? Nt[e.keyCode] || "Unidentified" : ""
        },
        location: null,
        ctrlKey: null,
        shiftKey: null,
        altKey: null,
        metaKey: null,
        repeat: null,
        locale: null,
        getModifierState: qt,
        charCode: function (e) {
            return "keypress" === e.type ? Ht(e) : 0
        },
        keyCode: function (e) {
            return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0
        },
        which: function (e) {
            return "keypress" === e.type ? Ht(e) : "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0
        }
    }), Vt = 0, Xt = 0, Kt = !1, Zt = !1, Qt = zt.extend({
        screenX: null,
        screenY: null,
        clientX: null,
        clientY: null,
        pageX: null,
        pageY: null,
        ctrlKey: null,
        shiftKey: null,
        altKey: null,
        metaKey: null,
        getModifierState: qt,
        button: null,
        buttons: null,
        relatedTarget: function (e) {
            return e.relatedTarget || (e.fromElement === e.srcElement ? e.toElement : e.fromElement)
        },
        movementX: function (e) {
            if ("movementX" in e) return e.movementX;
            var t = Vt;
            return Vt = e.screenX, Kt ? "mousemove" === e.type ? e.screenX - t : 0 : (Kt = !0, 0)
        },
        movementY: function (e) {
            if ("movementY" in e) return e.movementY;
            var t = Xt;
            return Xt = e.screenY, Zt ? "mousemove" === e.type ? e.screenY - t : 0 : (Zt = !0, 0)
        }
    }), Gt = Qt.extend({
        pointerId: null,
        width: null,
        height: null,
        pressure: null,
        tangentialPressure: null,
        tiltX: null,
        tiltY: null,
        twist: null,
        pointerType: null,
        isPrimary: null
    }), Jt = Qt.extend({dataTransfer: null}), en = zt.extend({
        touches: null,
        targetTouches: null,
        changedTouches: null,
        altKey: null,
        metaKey: null,
        ctrlKey: null,
        shiftKey: null,
        getModifierState: qt
    }), tn = Pt.extend({
        propertyName: null,
        elapsedTime: null,
        pseudoElement: null
    }), nn = Qt.extend({
        deltaX: function (e) {
            return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
        }, deltaY: function (e) {
            return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
        }, deltaZ: null, deltaMode: null
    }), rn = [["blur", "blur", 0], ["cancel", "cancel", 0], ["click", "click", 0], ["close", "close", 0], ["contextmenu", "contextMenu", 0], ["copy", "copy", 0], ["cut", "cut", 0], ["auxclick", "auxClick", 0], ["dblclick", "doubleClick", 0], ["dragend", "dragEnd", 0], ["dragstart", "dragStart", 0], ["drop", "drop", 0], ["focus", "focus", 0], ["input", "input", 0], ["invalid", "invalid", 0], ["keydown", "keyDown", 0], ["keypress", "keyPress", 0], ["keyup", "keyUp", 0], ["mousedown", "mouseDown", 0], ["mouseup", "mouseUp", 0], ["paste", "paste", 0], ["pause", "pause", 0], ["play", "play", 0], ["pointercancel", "pointerCancel", 0], ["pointerdown", "pointerDown", 0], ["pointerup", "pointerUp", 0], ["ratechange", "rateChange", 0], ["reset", "reset", 0], ["seeked", "seeked", 0], ["submit", "submit", 0], ["touchcancel", "touchCancel", 0], ["touchend", "touchEnd", 0], ["touchstart", "touchStart", 0], ["volumechange", "volumeChange", 0], ["drag", "drag", 1], ["dragenter", "dragEnter", 1], ["dragexit", "dragExit", 1], ["dragleave", "dragLeave", 1], ["dragover", "dragOver", 1], ["mousemove", "mouseMove", 1], ["mouseout", "mouseOut", 1], ["mouseover", "mouseOver", 1], ["pointermove", "pointerMove", 1], ["pointerout", "pointerOut", 1], ["pointerover", "pointerOver", 1], ["scroll", "scroll", 1], ["toggle", "toggle", 1], ["touchmove", "touchMove", 1], ["wheel", "wheel", 1], ["abort", "abort", 2], [Ke, "animationEnd", 2], [Ze, "animationIteration", 2], [Qe, "animationStart", 2], ["canplay", "canPlay", 2], ["canplaythrough", "canPlayThrough", 2], ["durationchange", "durationChange", 2], ["emptied", "emptied", 2], ["encrypted", "encrypted", 2], ["ended", "ended", 2], ["error", "error", 2], ["gotpointercapture", "gotPointerCapture", 2], ["load", "load", 2], ["loadeddata", "loadedData", 2], ["loadedmetadata", "loadedMetadata", 2], ["loadstart", "loadStart", 2], ["lostpointercapture", "lostPointerCapture", 2], ["playing", "playing", 2], ["progress", "progress", 2], ["seeking", "seeking", 2], ["stalled", "stalled", 2], ["suspend", "suspend", 2], ["timeupdate", "timeUpdate", 2], [Ge, "transitionEnd", 2], ["waiting", "waiting", 2]], on = {}, an = {}, ln = 0; ln < rn.length; ln++) {
        var sn = rn[ln], cn = sn[0], un = sn[1], fn = sn[2], pn = "on" + (un[0].toUpperCase() + un.slice(1)), dn = {
            phasedRegistrationNames: {bubbled: pn, captured: pn + "Capture"},
            dependencies: [cn],
            eventPriority: fn
        };
        on[un] = dn, an[cn] = dn
    }
    var hn = {
        eventTypes: on, getEventPriority: function (e) {
            return void 0 !== (e = an[e]) ? e.eventPriority : 2
        }, extractEvents: function (e, t, n, r, i) {
            if (!(t = an[e])) return null;
            switch (e) {
                case"keypress":
                    if (0 === Ht(r)) return null;
                case"keydown":
                case"keyup":
                    e = $t;
                    break;
                case"blur":
                case"focus":
                    e = Ut;
                    break;
                case"click":
                    if (2 === r.button) return null;
                case"auxclick":
                case"dblclick":
                case"mousedown":
                case"mousemove":
                case"mouseup":
                case"mouseout":
                case"mouseover":
                case"contextmenu":
                    e = Qt;
                    break;
                case"drag":
                case"dragend":
                case"dragenter":
                case"dragexit":
                case"dragleave":
                case"dragover":
                case"dragstart":
                case"drop":
                    e = Jt;
                    break;
                case"touchcancel":
                case"touchend":
                case"touchmove":
                case"touchstart":
                    e = en;
                    break;
                case Ke:
                case Ze:
                case Qe:
                    e = Mt;
                    break;
                case Ge:
                    e = tn;
                    break;
                case"scroll":
                    e = zt;
                    break;
                case"wheel":
                    e = nn;
                    break;
                case"copy":
                case"cut":
                case"paste":
                    e = Bt;
                    break;
                case"gotpointercapture":
                case"lostpointercapture":
                case"pointercancel":
                case"pointerdown":
                case"pointermove":
                case"pointerout":
                case"pointerover":
                case"pointerup":
                    e = Gt;
                    break;
                default:
                    e = Pt
            }
            return St(n = e.getPooled(t, n, r, i)), n
        }
    }, mn = hn.getEventPriority, gn = 10, bn = [];

    function yn(e) {
        var t = e.targetInst, n = t;
        do {
            if (!n) {
                e.ancestors.push(n);
                break
            }
            var r = n;
            if (3 === r.tag) r = r.stateNode.containerInfo; else {
                for (; r.return;) r = r.return;
                r = 3 !== r.tag ? null : r.stateNode.containerInfo
            }
            if (!r) break;
            var i = n.tag;
            5 !== i && 6 !== i || e.ancestors.push(n), n = lr(r)
        } while (n);
        for (n = 0; n < e.ancestors.length; n++) {
            t = e.ancestors[n];
            var o = Ct(e.nativeEvent);
            r = e.topLevelType, i = e.eventSystemFlags;
            for (var a = e.nativeEvent, l = null, s = 0; s < f.length; s++) {
                var c = f[s];
                c && (c = c.extractEvents(r, i, t, a, o)) && (l = O(l, c))
            }
            A(l)
        }
    }

    var vn = !0;

    function _n(e, t) {
        wn(t, e, !1)
    }

    function wn(e, t, n) {
        switch (mn(t)) {
            case 0:
                var r = xn.bind(null, t, 1);
                break;
            case 1:
                r = Cn.bind(null, t, 1);
                break;
            default:
                r = kn.bind(null, t, 1)
        }
        n ? e.addEventListener(t, r, !0) : e.addEventListener(t, r, !1)
    }

    function xn(e, t, n) {
        ue || se();
        var r = kn, i = ue;
        ue = !0;
        try {
            le(r, e, t, n)
        } finally {
            (ue = i) || pe()
        }
    }

    function Cn(e, t, n) {
        kn(e, t, n)
    }

    function En(e, t, n, r) {
        if (bn.length) {
            var i = bn.pop();
            i.topLevelType = e, i.eventSystemFlags = t, i.nativeEvent = n, i.targetInst = r, e = i
        } else e = {topLevelType: e, eventSystemFlags: t, nativeEvent: n, targetInst: r, ancestors: []};
        try {
            if (t = yn, n = e, fe) t(n, void 0); else {
                fe = !0;
                try {
                    ce(t, n, void 0)
                } finally {
                    fe = !1, pe()
                }
            }
        } finally {
            e.topLevelType = null, e.nativeEvent = null, e.targetInst = null, e.ancestors.length = 0, bn.length < gn && bn.push(e)
        }
    }

    function kn(e, t, n) {
        if (vn) if (0 < tt.length && -1 < lt.indexOf(e)) e = ct(null, e, t, n), tt.push(e); else {
            var r = On(e, t, n);
            null === r ? ut(e, n) : -1 < lt.indexOf(e) ? (e = ct(r, e, t, n), tt.push(e)) : function (e, t, n, r) {
                switch (t) {
                    case"focus":
                        return nt = ft(nt, e, t, n, r), !0;
                    case"dragenter":
                        return rt = ft(rt, e, t, n, r), !0;
                    case"mouseover":
                        return it = ft(it, e, t, n, r), !0;
                    case"pointerover":
                        var i = r.pointerId;
                        return ot.set(i, ft(ot.get(i) || null, e, t, n, r)), !0;
                    case"gotpointercapture":
                        return i = r.pointerId, at.set(i, ft(at.get(i) || null, e, t, n, r)), !0
                }
                return !1
            }(r, e, t, n) || (ut(e, n), En(e, t, n, null))
        }
    }

    function On(e, t, n) {
        var r = Ct(n), i = lr(r);
        if (null !== i) if (null === (r = _t(i))) i = null; else {
            var o = r.tag;
            if (13 === o) {
                if (null !== (r = 13 !== r.tag || (null === (i = r.memoizedState) && (null !== (r = r.alternate) && (i = r.memoizedState)), null === i) ? null : i.dehydrated)) return r;
                i = null
            } else if (3 === o) {
                if (r.stateNode.hydrate) return 3 === r.tag ? r.stateNode.containerInfo : null;
                i = null
            } else r !== i && (i = null)
        }
        return En(e, t, n, i), null
    }

    function Tn(e) {
        if (!J) return !1;
        var t = (e = "on" + e) in document;
        return t || ((t = document.createElement("div")).setAttribute(e, "return;"), t = "function" == typeof t[e]), t
    }

    var Rn = new ("function" == typeof WeakMap ? WeakMap : Map);

    function Sn(e) {
        var t = Rn.get(e);
        return void 0 === t && (t = new Set, Rn.set(e, t)), t
    }

    function An(e, t, n) {
        if (!n.has(e)) {
            switch (e) {
                case"scroll":
                    wn(t, "scroll", !0);
                    break;
                case"focus":
                case"blur":
                    wn(t, "focus", !0), wn(t, "blur", !0), n.add("blur"), n.add("focus");
                    break;
                case"cancel":
                case"close":
                    Tn(e) && wn(t, e, !0);
                    break;
                case"invalid":
                case"submit":
                case"reset":
                    break;
                default:
                    -1 === Je.indexOf(e) && _n(e, t)
            }
            n.add(e)
        }
    }

    var jn = {
        animationIterationCount: !0,
        borderImageOutset: !0,
        borderImageSlice: !0,
        borderImageWidth: !0,
        boxFlex: !0,
        boxFlexGroup: !0,
        boxOrdinalGroup: !0,
        columnCount: !0,
        columns: !0,
        flex: !0,
        flexGrow: !0,
        flexPositive: !0,
        flexShrink: !0,
        flexNegative: !0,
        flexOrder: !0,
        gridArea: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowSpan: !0,
        gridRowStart: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnSpan: !0,
        gridColumnStart: !0,
        fontWeight: !0,
        lineClamp: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        tabSize: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
        fillOpacity: !0,
        floodOpacity: !0,
        stopOpacity: !0,
        strokeDasharray: !0,
        strokeDashoffset: !0,
        strokeMiterlimit: !0,
        strokeOpacity: !0,
        strokeWidth: !0
    }, Pn = ["Webkit", "ms", "Moz", "O"];

    function Dn(e, t, n) {
        return null == t || "boolean" == typeof t || "" === t ? "" : n || "number" != typeof t || 0 === t || jn.hasOwnProperty(e) && jn[e] ? ("" + t).trim() : t + "px"
    }

    function Ln(e, t) {
        for (var n in e = e.style, t) if (t.hasOwnProperty(n)) {
            var r = 0 === n.indexOf("--"), i = Dn(n, t[n], r);
            "float" === n && (n = "cssFloat"), r ? e.setProperty(n, i) : e[n] = i
        }
    }

    Object.keys(jn).forEach((function (e) {
        Pn.forEach((function (t) {
            t = t + e.charAt(0).toUpperCase() + e.substring(1), jn[t] = jn[e]
        }))
    }));
    var In = i({menuitem: !0}, {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0
    });

    function Mn(e, t) {
        if (t) {
            if (In[e] && (null != t.children || null != t.dangerouslySetInnerHTML)) throw a(Error(137), e, "");
            if (null != t.dangerouslySetInnerHTML) {
                if (null != t.children) throw a(Error(60));
                if (!("object" == typeof t.dangerouslySetInnerHTML && "__html" in t.dangerouslySetInnerHTML)) throw a(Error(61))
            }
            if (null != t.style && "object" != typeof t.style) throw a(Error(62), "")
        }
    }

    function Bn(e, t) {
        if (-1 === e.indexOf("-")) return "string" == typeof t.is;
        switch (e) {
            case"annotation-xml":
            case"color-profile":
            case"font-face":
            case"font-face-src":
            case"font-face-uri":
            case"font-face-format":
            case"font-face-name":
            case"missing-glyph":
                return !1;
            default:
                return !0
        }
    }

    function zn(e, t) {
        var n = Sn(e = 9 === e.nodeType || 11 === e.nodeType ? e : e.ownerDocument);
        t = h[t];
        for (var r = 0; r < t.length; r++) An(t[r], e, n)
    }

    function Un() {
    }

    function Hn(e) {
        if (void 0 === (e = e || ("undefined" != typeof document ? document : void 0))) return null;
        try {
            return e.activeElement || e.body
        } catch (t) {
            return e.body
        }
    }

    function Fn(e) {
        for (; e && e.firstChild;) e = e.firstChild;
        return e
    }

    function Nn(e, t) {
        var n, r = Fn(e);
        for (e = 0; r;) {
            if (3 === r.nodeType) {
                if (n = e + r.textContent.length, e <= t && n >= t) return {node: r, offset: t - e};
                e = n
            }
            e:{
                for (; r;) {
                    if (r.nextSibling) {
                        r = r.nextSibling;
                        break e
                    }
                    r = r.parentNode
                }
                r = void 0
            }
            r = Fn(r)
        }
    }

    function Wn() {
        for (var e = window, t = Hn(); t instanceof e.HTMLIFrameElement;) {
            try {
                var n = "string" == typeof t.contentWindow.location.href
            } catch (e) {
                n = !1
            }
            if (!n) break;
            t = Hn((e = t.contentWindow).document)
        }
        return t
    }

    function Yn(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return t && ("input" === t && ("text" === e.type || "search" === e.type || "tel" === e.type || "url" === e.type || "password" === e.type) || "textarea" === t || "true" === e.contentEditable)
    }

    var qn = "$", $n = "/$", Vn = "$?", Xn = "$!", Kn = null, Zn = null;

    function Qn(e, t) {
        switch (e) {
            case"button":
            case"input":
            case"select":
            case"textarea":
                return !!t.autoFocus
        }
        return !1
    }

    function Gn(e, t) {
        return "textarea" === e || "option" === e || "noscript" === e || "string" == typeof t.children || "number" == typeof t.children || "object" == typeof t.dangerouslySetInnerHTML && null !== t.dangerouslySetInnerHTML && null != t.dangerouslySetInnerHTML.__html
    }

    var Jn = "function" == typeof setTimeout ? setTimeout : void 0,
        er = "function" == typeof clearTimeout ? clearTimeout : void 0;

    function tr(e) {
        for (; null != e; e = e.nextSibling) {
            var t = e.nodeType;
            if (1 === t || 3 === t) break
        }
        return e
    }

    function nr(e) {
        e = e.previousSibling;
        for (var t = 0; e;) {
            if (8 === e.nodeType) {
                var n = e.data;
                if (n === qn || n === Xn || n === Vn) {
                    if (0 === t) return e;
                    t--
                } else n === $n && t++
            }
            e = e.previousSibling
        }
        return null
    }

    var rr = Math.random().toString(36).slice(2), ir = "__reactInternalInstance$" + rr,
        or = "__reactEventHandlers$" + rr, ar = "__reactContainere$" + rr;

    function lr(e) {
        var t = e[ir];
        if (t) return t;
        for (var n = e.parentNode; n;) {
            if (t = n[ar] || n[ir]) {
                if (n = t.alternate, null !== t.child || null !== n && null !== n.child) for (e = nr(e); null !== e;) {
                    if (n = e[ir]) return n;
                    e = nr(e)
                }
                return t
            }
            n = (e = n).parentNode
        }
        return null
    }

    function sr(e) {
        return !(e = e[ir] || e[ar]) || 5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag ? null : e
    }

    function cr(e) {
        if (5 === e.tag || 6 === e.tag) return e.stateNode;
        throw a(Error(33))
    }

    function ur(e) {
        return e[or] || null
    }

    var fr = null, pr = null, dr = null;

    function hr() {
        if (dr) return dr;
        var e, t, n = pr, r = n.length, i = "value" in fr ? fr.value : fr.textContent, o = i.length;
        for (e = 0; e < r && n[e] === i[e]; e++) ;
        var a = r - e;
        for (t = 1; t <= a && n[r - t] === i[o - t]; t++) ;
        return dr = i.slice(e, 1 < t ? 1 - t : void 0)
    }

    var mr = Pt.extend({data: null}), gr = Pt.extend({data: null}), br = [9, 13, 27, 32],
        yr = J && "CompositionEvent" in window, vr = null;
    J && "documentMode" in document && (vr = document.documentMode);
    var _r = J && "TextEvent" in window && !vr, wr = J && (!yr || vr && 8 < vr && 11 >= vr),
        xr = String.fromCharCode(32), Cr = {
            beforeInput: {
                phasedRegistrationNames: {bubbled: "onBeforeInput", captured: "onBeforeInputCapture"},
                dependencies: ["compositionend", "keypress", "textInput", "paste"]
            },
            compositionEnd: {
                phasedRegistrationNames: {bubbled: "onCompositionEnd", captured: "onCompositionEndCapture"},
                dependencies: "blur compositionend keydown keypress keyup mousedown".split(" ")
            },
            compositionStart: {
                phasedRegistrationNames: {
                    bubbled: "onCompositionStart",
                    captured: "onCompositionStartCapture"
                }, dependencies: "blur compositionstart keydown keypress keyup mousedown".split(" ")
            },
            compositionUpdate: {
                phasedRegistrationNames: {
                    bubbled: "onCompositionUpdate",
                    captured: "onCompositionUpdateCapture"
                }, dependencies: "blur compositionupdate keydown keypress keyup mousedown".split(" ")
            }
        }, Er = !1;

    function kr(e, t) {
        switch (e) {
            case"keyup":
                return -1 !== br.indexOf(t.keyCode);
            case"keydown":
                return 229 !== t.keyCode;
            case"keypress":
            case"mousedown":
            case"blur":
                return !0;
            default:
                return !1
        }
    }

    function Or(e) {
        return "object" == typeof (e = e.detail) && "data" in e ? e.data : null
    }

    var Tr = !1;
    var Rr = {
        eventTypes: Cr, extractEvents: function (e, t, n, r, i) {
            var o;
            if (yr) e:{
                switch (e) {
                    case"compositionstart":
                        var a = Cr.compositionStart;
                        break e;
                    case"compositionend":
                        a = Cr.compositionEnd;
                        break e;
                    case"compositionupdate":
                        a = Cr.compositionUpdate;
                        break e
                }
                a = void 0
            } else Tr ? kr(e, r) && (a = Cr.compositionEnd) : "keydown" === e && 229 === r.keyCode && (a = Cr.compositionStart);
            return a ? (wr && "ko" !== r.locale && (Tr || a !== Cr.compositionStart ? a === Cr.compositionEnd && Tr && (o = hr()) : (pr = "value" in (fr = i) ? fr.value : fr.textContent, Tr = !0)), t = mr.getPooled(a, n, r, i), o ? t.data = o : null !== (o = Or(r)) && (t.data = o), St(t), o = t) : o = null, (e = _r ? function (e, t) {
                switch (e) {
                    case"compositionend":
                        return Or(t);
                    case"keypress":
                        return 32 !== t.which ? null : (Er = !0, xr);
                    case"textInput":
                        return (e = t.data) === xr && Er ? null : e;
                    default:
                        return null
                }
            }(e, r) : function (e, t) {
                if (Tr) return "compositionend" === e || !yr && kr(e, t) ? (e = hr(), dr = pr = fr = null, Tr = !1, e) : null;
                switch (e) {
                    case"paste":
                        return null;
                    case"keypress":
                        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                            if (t.char && 1 < t.char.length) return t.char;
                            if (t.which) return String.fromCharCode(t.which)
                        }
                        return null;
                    case"compositionend":
                        return wr && "ko" !== t.locale ? null : t.data;
                    default:
                        return null
                }
            }(e, r)) ? ((n = gr.getPooled(Cr.beforeInput, n, r, i)).data = e, St(n)) : n = null, null === o ? n : null === n ? o : [o, n]
        }
    }, Sr = {
        color: !0,
        date: !0,
        datetime: !0,
        "datetime-local": !0,
        email: !0,
        month: !0,
        number: !0,
        password: !0,
        range: !0,
        search: !0,
        tel: !0,
        text: !0,
        time: !0,
        url: !0,
        week: !0
    };

    function Ar(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return "input" === t ? !!Sr[e.type] : "textarea" === t
    }

    var jr = {
        change: {
            phasedRegistrationNames: {bubbled: "onChange", captured: "onChangeCapture"},
            dependencies: "blur change click focus input keydown keyup selectionchange".split(" ")
        }
    };

    function Pr(e, t, n) {
        return (e = Pt.getPooled(jr.change, e, t, n)).type = "change", ie(n), St(e), e
    }

    var Dr = null, Lr = null;

    function Ir(e) {
        A(e)
    }

    function Mr(e) {
        if (ke(cr(e))) return e
    }

    function Br(e, t) {
        if ("change" === e) return t
    }

    var zr = !1;

    function Ur() {
        Dr && (Dr.detachEvent("onpropertychange", Hr), Lr = Dr = null)
    }

    function Hr(e) {
        if ("value" === e.propertyName && Mr(Lr)) if (e = Pr(Lr, e, Ct(e)), ue) A(e); else {
            ue = !0;
            try {
                ae(Ir, e)
            } finally {
                ue = !1, pe()
            }
        }
    }

    function Fr(e, t, n) {
        "focus" === e ? (Ur(), Lr = n, (Dr = t).attachEvent("onpropertychange", Hr)) : "blur" === e && Ur()
    }

    function Nr(e) {
        if ("selectionchange" === e || "keyup" === e || "keydown" === e) return Mr(Lr)
    }

    function Wr(e, t) {
        if ("click" === e) return Mr(t)
    }

    function Yr(e, t) {
        if ("input" === e || "change" === e) return Mr(t)
    }

    J && (zr = Tn("input") && (!document.documentMode || 9 < document.documentMode));
    var qr = {
        eventTypes: jr, _isInputEventSupported: zr, extractEvents: function (e, t, n, r, i) {
            var o = (t = n ? cr(n) : window).nodeName && t.nodeName.toLowerCase();
            if ("select" === o || "input" === o && "file" === t.type) var a = Br; else if (Ar(t)) if (zr) a = Yr; else {
                a = Nr;
                var l = Fr
            } else (o = t.nodeName) && "input" === o.toLowerCase() && ("checkbox" === t.type || "radio" === t.type) && (a = Wr);
            if (a && (a = a(e, n))) return Pr(a, r, i);
            l && l(e, t, n), "blur" === e && (e = t._wrapperState) && e.controlled && "number" === t.type && je(t, "number", t.value)
        }
    }, $r = {
        mouseEnter: {registrationName: "onMouseEnter", dependencies: ["mouseout", "mouseover"]},
        mouseLeave: {registrationName: "onMouseLeave", dependencies: ["mouseout", "mouseover"]},
        pointerEnter: {registrationName: "onPointerEnter", dependencies: ["pointerout", "pointerover"]},
        pointerLeave: {registrationName: "onPointerLeave", dependencies: ["pointerout", "pointerover"]}
    }, Vr = {
        eventTypes: $r, extractEvents: function (e, t, n, r, i) {
            var o = "mouseover" === e || "pointerover" === e, a = "mouseout" === e || "pointerout" === e;
            if (o && 0 == (32 & t) && (r.relatedTarget || r.fromElement) || !a && !o) return null;
            if (t = i.window === i ? i : (t = i.ownerDocument) ? t.defaultView || t.parentWindow : window, a ? (a = n, null !== (n = (n = r.relatedTarget || r.toElement) ? lr(n) : null) && (n !== (o = _t(n)) || 5 !== n.tag && 6 !== n.tag) && (n = null)) : a = null, a === n) return null;
            if ("mouseout" === e || "mouseover" === e) var l = Qt, s = $r.mouseLeave, c = $r.mouseEnter,
                u = "mouse"; else "pointerout" !== e && "pointerover" !== e || (l = Gt, s = $r.pointerLeave, c = $r.pointerEnter, u = "pointer");
            if (e = null == a ? t : cr(a), t = null == n ? t : cr(n), (s = l.getPooled(s, a, r, i)).type = u + "leave", s.target = e, s.relatedTarget = t, (r = l.getPooled(c, n, r, i)).type = u + "enter", r.target = t, r.relatedTarget = e, u = n, (i = a) && u) e:{
                for (c = u, e = 0, a = l = i; a; a = Et(a)) e++;
                for (a = 0, n = c; n; n = Et(n)) a++;
                for (; 0 < e - a;) l = Et(l), e--;
                for (; 0 < a - e;) c = Et(c), a--;
                for (; e--;) {
                    if (l === c || l === c.alternate) break e;
                    l = Et(l), c = Et(c)
                }
                l = null
            } else l = null;
            for (c = l, l = []; i && i !== c && (null === (e = i.alternate) || e !== c);) l.push(i), i = Et(i);
            for (i = []; u && u !== c && (null === (e = u.alternate) || e !== c);) i.push(u), u = Et(u);
            for (u = 0; u < l.length; u++) Tt(l[u], "bubbled", s);
            for (u = i.length; 0 < u--;) Tt(i[u], "captured", r);
            return [s, r]
        }
    };
    var Xr = "function" == typeof Object.is ? Object.is : function (e, t) {
        return e === t && (0 !== e || 1 / e == 1 / t) || e != e && t != t
    }, Kr = Object.prototype.hasOwnProperty;

    function Zr(e, t) {
        if (Xr(e, t)) return !0;
        if ("object" != typeof e || null === e || "object" != typeof t || null === t) return !1;
        var n = Object.keys(e), r = Object.keys(t);
        if (n.length !== r.length) return !1;
        for (r = 0; r < n.length; r++) if (!Kr.call(t, n[r]) || !Xr(e[n[r]], t[n[r]])) return !1;
        return !0
    }

    var Qr = J && "documentMode" in document && 11 >= document.documentMode, Gr = {
        select: {
            phasedRegistrationNames: {bubbled: "onSelect", captured: "onSelectCapture"},
            dependencies: "blur contextmenu dragend focus keydown keyup mousedown mouseup selectionchange".split(" ")
        }
    }, Jr = null, ei = null, ti = null, ni = !1;

    function ri(e, t) {
        var n = t.window === t ? t.document : 9 === t.nodeType ? t : t.ownerDocument;
        return ni || null == Jr || Jr !== Hn(n) ? null : ("selectionStart" in (n = Jr) && Yn(n) ? n = {
            start: n.selectionStart,
            end: n.selectionEnd
        } : n = {
            anchorNode: (n = (n.ownerDocument && n.ownerDocument.defaultView || window).getSelection()).anchorNode,
            anchorOffset: n.anchorOffset,
            focusNode: n.focusNode,
            focusOffset: n.focusOffset
        }, ti && Zr(ti, n) ? null : (ti = n, (e = Pt.getPooled(Gr.select, ei, e, t)).type = "select", e.target = Jr, St(e), e))
    }

    var ii = {
        eventTypes: Gr, extractEvents: function (e, t, n, r, i) {
            var o;
            if (!(o = !(t = i.window === i ? i.document : 9 === i.nodeType ? i : i.ownerDocument))) {
                e:{
                    t = Sn(t), o = h.onSelect;
                    for (var a = 0; a < o.length; a++) if (!t.has(o[a])) {
                        t = !1;
                        break e
                    }
                    t = !0
                }
                o = !t
            }
            if (o) return null;
            switch (t = n ? cr(n) : window, e) {
                case"focus":
                    (Ar(t) || "true" === t.contentEditable) && (Jr = t, ei = n, ti = null);
                    break;
                case"blur":
                    ti = ei = Jr = null;
                    break;
                case"mousedown":
                    ni = !0;
                    break;
                case"contextmenu":
                case"mouseup":
                case"dragend":
                    return ni = !1, ri(r, i);
                case"selectionchange":
                    if (Qr) break;
                case"keydown":
                case"keyup":
                    return ri(r, i)
            }
            return null
        }
    };
    j.injectEventPluginOrder("ResponderEventPlugin SimpleEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin".split(" ")), x = ur, C = sr, E = cr, j.injectEventPluginsByName({
        SimpleEventPlugin: hn,
        EnterLeaveEventPlugin: Vr,
        ChangeEventPlugin: qr,
        SelectEventPlugin: ii,
        BeforeInputEventPlugin: Rr
    }), new Set;
    var oi = [], ai = -1;

    function li(e) {
        0 > ai || (e.current = oi[ai], oi[ai] = null, ai--)
    }

    function si(e, t) {
        oi[++ai] = e.current, e.current = t
    }

    var ci = {}, ui = {current: ci}, fi = {current: !1}, pi = ci;

    function di(e, t) {
        var n = e.type.contextTypes;
        if (!n) return ci;
        var r = e.stateNode;
        if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
        var i, o = {};
        for (i in n) o[i] = t[i];
        return r && ((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = o), o
    }

    function hi(e) {
        return null != (e = e.childContextTypes)
    }

    function mi(e) {
        li(fi), li(ui)
    }

    function gi(e) {
        li(fi), li(ui)
    }

    function bi(e, t, n) {
        if (ui.current !== ci) throw a(Error(168));
        si(ui, t), si(fi, n)
    }

    function yi(e, t, n) {
        var r = e.stateNode;
        if (e = t.childContextTypes, "function" != typeof r.getChildContext) return n;
        for (var o in r = r.getChildContext()) if (!(o in e)) throw a(Error(108), Q(t) || "Unknown", o);
        return i({}, n, {}, r)
    }

    function vi(e) {
        var t = e.stateNode;
        return t = t && t.__reactInternalMemoizedMergedChildContext || ci, pi = ui.current, si(ui, t), si(fi, fi.current), !0
    }

    function _i(e, t, n) {
        var r = e.stateNode;
        if (!r) throw a(Error(169));
        n ? (t = yi(e, t, pi), r.__reactInternalMemoizedMergedChildContext = t, li(fi), li(ui), si(ui, t)) : li(fi), si(fi, n)
    }

    var wi = o.unstable_runWithPriority, xi = o.unstable_scheduleCallback, Ci = o.unstable_cancelCallback,
        Ei = o.unstable_shouldYield, ki = o.unstable_requestPaint, Oi = o.unstable_now,
        Ti = o.unstable_getCurrentPriorityLevel, Ri = o.unstable_ImmediatePriority,
        Si = o.unstable_UserBlockingPriority, Ai = o.unstable_NormalPriority, ji = o.unstable_LowPriority,
        Pi = o.unstable_IdlePriority, Di = {}, Li = void 0 !== ki ? ki : function () {
        }, Ii = null, Mi = null, Bi = !1, zi = Oi(), Ui = 1e4 > zi ? Oi : function () {
            return Oi() - zi
        };

    function Hi() {
        switch (Ti()) {
            case Ri:
                return 99;
            case Si:
                return 98;
            case Ai:
                return 97;
            case ji:
                return 96;
            case Pi:
                return 95;
            default:
                throw a(Error(332))
        }
    }

    function Fi(e) {
        switch (e) {
            case 99:
                return Ri;
            case 98:
                return Si;
            case 97:
                return Ai;
            case 96:
                return ji;
            case 95:
                return Pi;
            default:
                throw a(Error(332))
        }
    }

    function Ni(e, t) {
        return e = Fi(e), wi(e, t)
    }

    function Wi(e, t, n) {
        return e = Fi(e), xi(e, t, n)
    }

    function Yi(e) {
        return null === Ii ? (Ii = [e], Mi = xi(Ri, $i)) : Ii.push(e), Di
    }

    function qi() {
        if (null !== Mi) {
            var e = Mi;
            Mi = null, Ci(e)
        }
        $i()
    }

    function $i() {
        if (!Bi && null !== Ii) {
            Bi = !0;
            var e = 0;
            try {
                var t = Ii;
                Ni(99, (function () {
                    for (; e < t.length; e++) {
                        var n = t[e];
                        do {
                            n = n(!0)
                        } while (null !== n)
                    }
                })), Ii = null
            } catch (t) {
                throw null !== Ii && (Ii = Ii.slice(e + 1)), xi(Ri, qi), t
            } finally {
                Bi = !1
            }
        }
    }

    function Vi(e, t) {
        if (e && e.defaultProps) for (var n in t = i({}, t), e = e.defaultProps) void 0 === t[n] && (t[n] = e[n]);
        return t
    }

    var Xi = {current: null}, Ki = null, Zi = null, Qi = null;

    function Gi() {
        Qi = Zi = Ki = null
    }

    function Ji(e, t) {
        var n = e.type._context;
        si(Xi, n._currentValue), n._currentValue = t
    }

    function eo(e) {
        var t = Xi.current;
        li(Xi), e.type._context._currentValue = t
    }

    function to(e, t) {
        for (; null !== e;) {
            var n = e.alternate;
            if (e.childExpirationTime < t) e.childExpirationTime = t, null !== n && n.childExpirationTime < t && (n.childExpirationTime = t); else {
                if (!(null !== n && n.childExpirationTime < t)) break;
                n.childExpirationTime = t
            }
            e = e.return
        }
    }

    function no(e, t) {
        Ki = e, Qi = Zi = null, null !== (e = e.dependencies) && null !== e.firstContext && (e.expirationTime >= t && (Aa = !0), e.firstContext = null)
    }

    function ro(e, t) {
        if (Qi !== e && !1 !== t && 0 !== t) if ("number" == typeof t && 1073741823 !== t || (Qi = e, t = 1073741823), t = {
            context: e,
            observedBits: t,
            next: null
        }, null === Zi) {
            if (null === Ki) throw a(Error(308));
            Zi = t, Ki.dependencies = {expirationTime: 0, firstContext: t, responders: null}
        } else Zi = Zi.next = t;
        return e._currentValue
    }

    var io = !1;

    function oo(e) {
        return {
            baseState: e,
            firstUpdate: null,
            lastUpdate: null,
            firstCapturedUpdate: null,
            lastCapturedUpdate: null,
            firstEffect: null,
            lastEffect: null,
            firstCapturedEffect: null,
            lastCapturedEffect: null
        }
    }

    function ao(e) {
        return {
            baseState: e.baseState,
            firstUpdate: e.firstUpdate,
            lastUpdate: e.lastUpdate,
            firstCapturedUpdate: null,
            lastCapturedUpdate: null,
            firstEffect: null,
            lastEffect: null,
            firstCapturedEffect: null,
            lastCapturedEffect: null
        }
    }

    function lo(e, t) {
        return {
            expirationTime: e,
            suspenseConfig: t,
            tag: 0,
            payload: null,
            callback: null,
            next: null,
            nextEffect: null
        }
    }

    function so(e, t) {
        null === e.lastUpdate ? e.firstUpdate = e.lastUpdate = t : (e.lastUpdate.next = t, e.lastUpdate = t)
    }

    function co(e, t) {
        var n = e.alternate;
        if (null === n) {
            var r = e.updateQueue, i = null;
            null === r && (r = e.updateQueue = oo(e.memoizedState))
        } else r = e.updateQueue, i = n.updateQueue, null === r ? null === i ? (r = e.updateQueue = oo(e.memoizedState), i = n.updateQueue = oo(n.memoizedState)) : r = e.updateQueue = ao(i) : null === i && (i = n.updateQueue = ao(r));
        null === i || r === i ? so(r, t) : null === r.lastUpdate || null === i.lastUpdate ? (so(r, t), so(i, t)) : (so(r, t), i.lastUpdate = t)
    }

    function uo(e, t) {
        var n = e.updateQueue;
        null === (n = null === n ? e.updateQueue = oo(e.memoizedState) : fo(e, n)).lastCapturedUpdate ? n.firstCapturedUpdate = n.lastCapturedUpdate = t : (n.lastCapturedUpdate.next = t, n.lastCapturedUpdate = t)
    }

    function fo(e, t) {
        var n = e.alternate;
        return null !== n && t === n.updateQueue && (t = e.updateQueue = ao(t)), t
    }

    function po(e, t, n, r, o, a) {
        switch (n.tag) {
            case 1:
                return "function" == typeof (e = n.payload) ? e.call(a, r, o) : e;
            case 3:
                e.effectTag = -4097 & e.effectTag | 64;
            case 0:
                if (null == (o = "function" == typeof (e = n.payload) ? e.call(a, r, o) : e)) break;
                return i({}, r, o);
            case 2:
                io = !0
        }
        return r
    }

    function ho(e, t, n, r, i) {
        io = !1;
        for (var o = (t = fo(e, t)).baseState, a = null, l = 0, s = t.firstUpdate, c = o; null !== s;) {
            var u = s.expirationTime;
            u < i ? (null === a && (a = s, o = c), l < u && (l = u)) : (gs(u, s.suspenseConfig), c = po(e, 0, s, c, n, r), null !== s.callback && (e.effectTag |= 32, s.nextEffect = null, null === t.lastEffect ? t.firstEffect = t.lastEffect = s : (t.lastEffect.nextEffect = s, t.lastEffect = s))), s = s.next
        }
        for (u = null, s = t.firstCapturedUpdate; null !== s;) {
            var f = s.expirationTime;
            f < i ? (null === u && (u = s, null === a && (o = c)), l < f && (l = f)) : (c = po(e, 0, s, c, n, r), null !== s.callback && (e.effectTag |= 32, s.nextEffect = null, null === t.lastCapturedEffect ? t.firstCapturedEffect = t.lastCapturedEffect = s : (t.lastCapturedEffect.nextEffect = s, t.lastCapturedEffect = s))), s = s.next
        }
        null === a && (t.lastUpdate = null), null === u ? t.lastCapturedUpdate = null : e.effectTag |= 32, null === a && null === u && (o = c), t.baseState = o, t.firstUpdate = a, t.firstCapturedUpdate = u, bs(l), e.expirationTime = l, e.memoizedState = c
    }

    function mo(e, t, n) {
        null !== t.firstCapturedUpdate && (null !== t.lastUpdate && (t.lastUpdate.next = t.firstCapturedUpdate, t.lastUpdate = t.lastCapturedUpdate), t.firstCapturedUpdate = t.lastCapturedUpdate = null), go(t.firstEffect, n), t.firstEffect = t.lastEffect = null, go(t.firstCapturedEffect, n), t.firstCapturedEffect = t.lastCapturedEffect = null
    }

    function go(e, t) {
        for (; null !== e;) {
            var n = e.callback;
            if (null !== n) {
                e.callback = null;
                var r = t;
                if ("function" != typeof n) throw a(Error(191), n);
                n.call(r)
            }
            e = e.nextEffect
        }
    }

    var bo = D.ReactCurrentBatchConfig, yo = (new r.Component).refs;

    function vo(e, t, n, r) {
        n = null == (n = n(r, t = e.memoizedState)) ? t : i({}, t, n), e.memoizedState = n, null !== (r = e.updateQueue) && 0 === e.expirationTime && (r.baseState = n)
    }

    var _o = {
        isMounted: function (e) {
            return !!(e = e._reactInternalFiber) && _t(e) === e
        }, enqueueSetState: function (e, t, n) {
            e = e._reactInternalFiber;
            var r = Gl(), i = bo.suspense;
            (i = lo(r = Jl(r, e, i), i)).payload = t, null != n && (i.callback = n), co(e, i), ns(e, r)
        }, enqueueReplaceState: function (e, t, n) {
            e = e._reactInternalFiber;
            var r = Gl(), i = bo.suspense;
            (i = lo(r = Jl(r, e, i), i)).tag = 1, i.payload = t, null != n && (i.callback = n), co(e, i), ns(e, r)
        }, enqueueForceUpdate: function (e, t) {
            e = e._reactInternalFiber;
            var n = Gl(), r = bo.suspense;
            (r = lo(n = Jl(n, e, r), r)).tag = 2, null != t && (r.callback = t), co(e, r), ns(e, n)
        }
    };

    function wo(e, t, n, r, i, o, a) {
        return "function" == typeof (e = e.stateNode).shouldComponentUpdate ? e.shouldComponentUpdate(r, o, a) : !t.prototype || !t.prototype.isPureReactComponent || (!Zr(n, r) || !Zr(i, o))
    }

    function xo(e, t, n) {
        var r = !1, i = ci, o = t.contextType;
        return "object" == typeof o && null !== o ? o = ro(o) : (i = hi(t) ? pi : ui.current, o = (r = null != (r = t.contextTypes)) ? di(e, i) : ci), t = new t(n, o), e.memoizedState = null !== t.state && void 0 !== t.state ? t.state : null, t.updater = _o, e.stateNode = t, t._reactInternalFiber = e, r && ((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = i, e.__reactInternalMemoizedMaskedChildContext = o), t
    }

    function Co(e, t, n, r) {
        e = t.state, "function" == typeof t.componentWillReceiveProps && t.componentWillReceiveProps(n, r), "function" == typeof t.UNSAFE_componentWillReceiveProps && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && _o.enqueueReplaceState(t, t.state, null)
    }

    function Eo(e, t, n, r) {
        var i = e.stateNode;
        i.props = n, i.state = e.memoizedState, i.refs = yo;
        var o = t.contextType;
        "object" == typeof o && null !== o ? i.context = ro(o) : (o = hi(t) ? pi : ui.current, i.context = di(e, o)), null !== (o = e.updateQueue) && (ho(e, o, n, i, r), i.state = e.memoizedState), "function" == typeof (o = t.getDerivedStateFromProps) && (vo(e, t, o, n), i.state = e.memoizedState), "function" == typeof t.getDerivedStateFromProps || "function" == typeof i.getSnapshotBeforeUpdate || "function" != typeof i.UNSAFE_componentWillMount && "function" != typeof i.componentWillMount || (t = i.state, "function" == typeof i.componentWillMount && i.componentWillMount(), "function" == typeof i.UNSAFE_componentWillMount && i.UNSAFE_componentWillMount(), t !== i.state && _o.enqueueReplaceState(i, i.state, null), null !== (o = e.updateQueue) && (ho(e, o, n, i, r), i.state = e.memoizedState)), "function" == typeof i.componentDidMount && (e.effectTag |= 4)
    }

    var ko = Array.isArray;

    function Oo(e, t, n) {
        if (null !== (e = n.ref) && "function" != typeof e && "object" != typeof e) {
            if (n._owner) {
                if (n = n._owner) {
                    if (1 !== n.tag) throw a(Error(309));
                    var r = n.stateNode
                }
                if (!r) throw a(Error(147), e);
                var i = "" + e;
                return null !== t && null !== t.ref && "function" == typeof t.ref && t.ref._stringRef === i ? t.ref : ((t = function (e) {
                    var t = r.refs;
                    t === yo && (t = r.refs = {}), null === e ? delete t[i] : t[i] = e
                })._stringRef = i, t)
            }
            if ("string" != typeof e) throw a(Error(284));
            if (!n._owner) throw a(Error(290), e)
        }
        return e
    }

    function To(e, t) {
        if ("textarea" !== e.type) throw a(Error(31), "[object Object]" === Object.prototype.toString.call(t) ? "object with keys {" + Object.keys(t).join(", ") + "}" : t, "")
    }

    function Ro(e) {
        function t(t, n) {
            if (e) {
                var r = t.lastEffect;
                null !== r ? (r.nextEffect = n, t.lastEffect = n) : t.firstEffect = t.lastEffect = n, n.nextEffect = null, n.effectTag = 8
            }
        }

        function n(n, r) {
            if (!e) return null;
            for (; null !== r;) t(n, r), r = r.sibling;
            return null
        }

        function r(e, t) {
            for (e = new Map; null !== t;) null !== t.key ? e.set(t.key, t) : e.set(t.index, t), t = t.sibling;
            return e
        }

        function i(e, t, n) {
            return (e = Bs(e, t)).index = 0, e.sibling = null, e
        }

        function o(t, n, r) {
            return t.index = r, e ? null !== (r = t.alternate) ? (r = r.index) < n ? (t.effectTag = yt, n) : r : (t.effectTag = yt, n) : n
        }

        function l(t) {
            return e && null === t.alternate && (t.effectTag = yt), t
        }

        function s(e, t, n, r) {
            return null === t || 6 !== t.tag ? ((t = Hs(n, e.mode, r)).return = e, t) : ((t = i(t, n)).return = e, t)
        }

        function c(e, t, n, r) {
            return null !== t && t.elementType === n.type ? ((r = i(t, n.props)).ref = Oo(e, t, n), r.return = e, r) : ((r = zs(n.type, n.key, n.props, null, e.mode, r)).ref = Oo(e, t, n), r.return = e, r)
        }

        function u(e, t, n, r) {
            return null === t || 4 !== t.tag || t.stateNode.containerInfo !== n.containerInfo || t.stateNode.implementation !== n.implementation ? ((t = Fs(n, e.mode, r)).return = e, t) : ((t = i(t, n.children || [])).return = e, t)
        }

        function f(e, t, n, r, o) {
            return null === t || 7 !== t.tag ? ((t = Us(n, e.mode, r, o)).return = e, t) : ((t = i(t, n)).return = e, t)
        }

        function p(e, t, n) {
            if ("string" == typeof t || "number" == typeof t) return (t = Hs("" + t, e.mode, n)).return = e, t;
            if ("object" == typeof t && null !== t) {
                switch (t.$$typeof) {
                    case M:
                        return (n = zs(t.type, t.key, t.props, null, e.mode, n)).ref = Oo(e, null, t), n.return = e, n;
                    case B:
                        return (t = Fs(t, e.mode, n)).return = e, t
                }
                if (ko(t) || Z(t)) return (t = Us(t, e.mode, n, null)).return = e, t;
                To(e, t)
            }
            return null
        }

        function d(e, t, n, r) {
            var i = null !== t ? t.key : null;
            if ("string" == typeof n || "number" == typeof n) return null !== i ? null : s(e, t, "" + n, r);
            if ("object" == typeof n && null !== n) {
                switch (n.$$typeof) {
                    case M:
                        return n.key === i ? n.type === z ? f(e, t, n.props.children, r, i) : c(e, t, n, r) : null;
                    case B:
                        return n.key === i ? u(e, t, n, r) : null
                }
                if (ko(n) || Z(n)) return null !== i ? null : f(e, t, n, r, null);
                To(e, n)
            }
            return null
        }

        function h(e, t, n, r, i) {
            if ("string" == typeof r || "number" == typeof r) return s(t, e = e.get(n) || null, "" + r, i);
            if ("object" == typeof r && null !== r) {
                switch (r.$$typeof) {
                    case M:
                        return e = e.get(null === r.key ? n : r.key) || null, r.type === z ? f(t, e, r.props.children, i, r.key) : c(t, e, r, i);
                    case B:
                        return u(t, e = e.get(null === r.key ? n : r.key) || null, r, i)
                }
                if (ko(r) || Z(r)) return f(t, e = e.get(n) || null, r, i, null);
                To(t, r)
            }
            return null
        }

        function m(i, a, l, s) {
            for (var c = null, u = null, f = a, m = a = 0, g = null; null !== f && m < l.length; m++) {
                f.index > m ? (g = f, f = null) : g = f.sibling;
                var b = d(i, f, l[m], s);
                if (null === b) {
                    null === f && (f = g);
                    break
                }
                e && f && null === b.alternate && t(i, f), a = o(b, a, m), null === u ? c = b : u.sibling = b, u = b, f = g
            }
            if (m === l.length) return n(i, f), c;
            if (null === f) {
                for (; m < l.length; m++) null !== (f = p(i, l[m], s)) && (a = o(f, a, m), null === u ? c = f : u.sibling = f, u = f);
                return c
            }
            for (f = r(i, f); m < l.length; m++) null !== (g = h(f, i, m, l[m], s)) && (e && null !== g.alternate && f.delete(null === g.key ? m : g.key), a = o(g, a, m), null === u ? c = g : u.sibling = g, u = g);
            return e && f.forEach((function (e) {
                return t(i, e)
            })), c
        }

        function g(i, l, s, c) {
            var u = Z(s);
            if ("function" != typeof u) throw a(Error(150));
            if (null == (s = u.call(s))) throw a(Error(151));
            for (var f = u = null, m = l, g = l = 0, b = null, y = s.next(); null !== m && !y.done; g++, y = s.next()) {
                m.index > g ? (b = m, m = null) : b = m.sibling;
                var v = d(i, m, y.value, c);
                if (null === v) {
                    null === m && (m = b);
                    break
                }
                e && m && null === v.alternate && t(i, m), l = o(v, l, g), null === f ? u = v : f.sibling = v, f = v, m = b
            }
            if (y.done) return n(i, m), u;
            if (null === m) {
                for (; !y.done; g++, y = s.next()) null !== (y = p(i, y.value, c)) && (l = o(y, l, g), null === f ? u = y : f.sibling = y, f = y);
                return u
            }
            for (m = r(i, m); !y.done; g++, y = s.next()) null !== (y = h(m, i, g, y.value, c)) && (e && null !== y.alternate && m.delete(null === y.key ? g : y.key), l = o(y, l, g), null === f ? u = y : f.sibling = y, f = y);
            return e && m.forEach((function (e) {
                return t(i, e)
            })), u
        }

        return function (e, r, o, s) {
            var c = "object" == typeof o && null !== o && o.type === z && null === o.key;
            c && (o = o.props.children);
            var u = "object" == typeof o && null !== o;
            if (u) switch (o.$$typeof) {
                case M:
                    e:{
                        for (u = o.key, c = r; null !== c;) {
                            if (c.key === u) {
                                if (7 === c.tag ? o.type === z : c.elementType === o.type) {
                                    n(e, c.sibling), (r = i(c, o.type === z ? o.props.children : o.props)).ref = Oo(e, c, o), r.return = e, e = r;
                                    break e
                                }
                                n(e, c);
                                break
                            }
                            t(e, c), c = c.sibling
                        }
                        o.type === z ? ((r = Us(o.props.children, e.mode, s, o.key)).return = e, e = r) : ((s = zs(o.type, o.key, o.props, null, e.mode, s)).ref = Oo(e, r, o), s.return = e, e = s)
                    }
                    return l(e);
                case B:
                    e:{
                        for (c = o.key; null !== r;) {
                            if (r.key === c) {
                                if (4 === r.tag && r.stateNode.containerInfo === o.containerInfo && r.stateNode.implementation === o.implementation) {
                                    n(e, r.sibling), (r = i(r, o.children || [])).return = e, e = r;
                                    break e
                                }
                                n(e, r);
                                break
                            }
                            t(e, r), r = r.sibling
                        }
                        (r = Fs(o, e.mode, s)).return = e, e = r
                    }
                    return l(e)
            }
            if ("string" == typeof o || "number" == typeof o) return o = "" + o, null !== r && 6 === r.tag ? (n(e, r.sibling), (r = i(r, o)).return = e, e = r) : (n(e, r), (r = Hs(o, e.mode, s)).return = e, e = r), l(e);
            if (ko(o)) return m(e, r, o, s);
            if (Z(o)) return g(e, r, o, s);
            if (u && To(e, o), void 0 === o && !c) switch (e.tag) {
                case 1:
                case 0:
                    throw e = e.type, a(Error(152), e.displayName || e.name || "Component")
            }
            return n(e, r)
        }
    }

    var So = Ro(!0), Ao = Ro(!1), jo = {}, Po = {current: jo}, Do = {current: jo}, Lo = {current: jo};

    function Io(e) {
        if (e === jo) throw a(Error(174));
        return e
    }

    function Mo(e, t) {
        si(Lo, t), si(Do, e), si(Po, jo);
        var n = t.nodeType;
        switch (n) {
            case 9:
            case 11:
                t = (t = t.documentElement) ? t.namespaceURI : He(null, "");
                break;
            default:
                t = He(t = (n = 8 === n ? t.parentNode : t).namespaceURI || null, n = n.tagName)
        }
        li(Po), si(Po, t)
    }

    function Bo(e) {
        li(Po), li(Do), li(Lo)
    }

    function zo(e) {
        Io(Lo.current);
        var t = Io(Po.current), n = He(t, e.type);
        t !== n && (si(Do, e), si(Po, n))
    }

    function Uo(e) {
        Do.current === e && (li(Po), li(Do))
    }

    var Ho = {current: 0};

    function Fo(e) {
        for (var t = e; null !== t;) {
            if (13 === t.tag) {
                var n = t.memoizedState;
                if (null !== n && (null === (n = n.dehydrated) || n.data === Vn || n.data === Xn)) return t
            } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
                if ((64 & t.effectTag) !== bt) return t
            } else if (null !== t.child) {
                t.child.return = t, t = t.child;
                continue
            }
            if (t === e) break;
            for (; null === t.sibling;) {
                if (null === t.return || t.return === e) return null;
                t = t.return
            }
            t.sibling.return = t.return, t = t.sibling
        }
        return null
    }

    function No(e, t) {
        return {responder: e, props: t}
    }

    var Wo = D.ReactCurrentDispatcher, Yo = 0, qo = null, $o = null, Vo = null, Xo = null, Ko = null, Zo = null, Qo = 0,
        Go = null, Jo = 0, ea = !1, ta = null, na = 0;

    function ra() {
        throw a(Error(321))
    }

    function ia(e, t) {
        if (null === t) return !1;
        for (var n = 0; n < t.length && n < e.length; n++) if (!Xr(e[n], t[n])) return !1;
        return !0
    }

    function oa(e, t, n, r, i, o) {
        if (Yo = o, qo = t, Vo = null !== e ? e.memoizedState : null, Wo.current = null === Vo ? ya : va, t = n(r, i), ea) {
            do {
                ea = !1, na += 1, Vo = null !== e ? e.memoizedState : null, Zo = Xo, Go = Ko = $o = null, Wo.current = va, t = n(r, i)
            } while (ea);
            ta = null, na = 0
        }
        if (Wo.current = ba, (e = qo).memoizedState = Xo, e.expirationTime = Qo, e.updateQueue = Go, e.effectTag |= Jo, e = null !== $o && null !== $o.next, Yo = 0, Zo = Ko = Xo = Vo = $o = qo = null, Qo = 0, Go = null, Jo = 0, e) throw a(Error(300));
        return t
    }

    function aa() {
        Wo.current = ba, Yo = 0, Zo = Ko = Xo = Vo = $o = qo = null, Qo = 0, Go = null, Jo = 0, ea = !1, ta = null, na = 0
    }

    function la() {
        var e = {memoizedState: null, baseState: null, queue: null, baseUpdate: null, next: null};
        return null === Ko ? Xo = Ko = e : Ko = Ko.next = e, Ko
    }

    function sa() {
        if (null !== Zo) Zo = (Ko = Zo).next, Vo = null !== ($o = Vo) ? $o.next : null; else {
            if (null === Vo) throw a(Error(310));
            var e = {
                memoizedState: ($o = Vo).memoizedState,
                baseState: $o.baseState,
                queue: $o.queue,
                baseUpdate: $o.baseUpdate,
                next: null
            };
            Ko = null === Ko ? Xo = e : Ko.next = e, Vo = $o.next
        }
        return Ko
    }

    function ca(e, t) {
        return "function" == typeof t ? t(e) : t
    }

    function ua(e) {
        var t = sa(), n = t.queue;
        if (null === n) throw a(Error(311));
        if (n.lastRenderedReducer = e, 0 < na) {
            var r = n.dispatch;
            if (null !== ta) {
                var i = ta.get(n);
                if (void 0 !== i) {
                    ta.delete(n);
                    var o = t.memoizedState;
                    do {
                        o = e(o, i.action), i = i.next
                    } while (null !== i);
                    return Xr(o, t.memoizedState) || (Aa = !0), t.memoizedState = o, t.baseUpdate === n.last && (t.baseState = o), n.lastRenderedState = o, [o, r]
                }
            }
            return [t.memoizedState, r]
        }
        r = n.last;
        var l = t.baseUpdate;
        if (o = t.baseState, null !== l ? (null !== r && (r.next = null), r = l.next) : r = null !== r ? r.next : null, null !== r) {
            var s = i = null, c = r, u = !1;
            do {
                var f = c.expirationTime;
                f < Yo ? (u || (u = !0, s = l, i = o), f > Qo && bs(Qo = f)) : (gs(f, c.suspenseConfig), o = c.eagerReducer === e ? c.eagerState : e(o, c.action)), l = c, c = c.next
            } while (null !== c && c !== r);
            u || (s = l, i = o), Xr(o, t.memoizedState) || (Aa = !0), t.memoizedState = o, t.baseUpdate = s, t.baseState = i, n.lastRenderedState = o
        }
        return [t.memoizedState, n.dispatch]
    }

    function fa(e, t, n, r) {
        return e = {
            tag: e,
            create: t,
            destroy: n,
            deps: r,
            next: null
        }, null === Go ? (Go = {lastEffect: null}).lastEffect = e.next = e : null === (t = Go.lastEffect) ? Go.lastEffect = e.next = e : (n = t.next, t.next = e, e.next = n, Go.lastEffect = e), e
    }

    function pa(e, t, n, r) {
        var i = la();
        Jo |= e, i.memoizedState = fa(t, n, void 0, void 0 === r ? null : r)
    }

    function da(e, t, n, r) {
        var i = sa();
        r = void 0 === r ? null : r;
        var o = void 0;
        if (null !== $o) {
            var a = $o.memoizedState;
            if (o = a.destroy, null !== r && ia(r, a.deps)) return void fa(0, n, o, r)
        }
        Jo |= e, i.memoizedState = fa(t, n, o, r)
    }

    function ha(e, t) {
        return "function" == typeof t ? (e = e(), t(e), function () {
            t(null)
        }) : null != t ? (e = e(), t.current = e, function () {
            t.current = null
        }) : void 0
    }

    function ma() {
    }

    function ga(e, t, n) {
        if (!(25 > na)) throw a(Error(301));
        var r = e.alternate;
        if (e === qo || null !== r && r === qo) if (ea = !0, e = {
            expirationTime: Yo,
            suspenseConfig: null,
            action: n,
            eagerReducer: null,
            eagerState: null,
            next: null
        }, null === ta && (ta = new Map), void 0 === (n = ta.get(t))) ta.set(t, e); else {
            for (t = n; null !== t.next;) t = t.next;
            t.next = e
        } else {
            var i = Gl(), o = bo.suspense;
            o = {
                expirationTime: i = Jl(i, e, o),
                suspenseConfig: o,
                action: n,
                eagerReducer: null,
                eagerState: null,
                next: null
            };
            var l = t.last;
            if (null === l) o.next = o; else {
                var s = l.next;
                null !== s && (o.next = s), l.next = o
            }
            if (t.last = o, 0 === e.expirationTime && (null === r || 0 === r.expirationTime) && null !== (r = t.lastRenderedReducer)) try {
                var c = t.lastRenderedState, u = r(c, n);
                if (o.eagerReducer = r, o.eagerState = u, Xr(u, c)) return
            } catch (e) {
            }
            ns(e, i)
        }
    }

    var ba = {
        readContext: ro,
        useCallback: ra,
        useContext: ra,
        useEffect: ra,
        useImperativeHandle: ra,
        useLayoutEffect: ra,
        useMemo: ra,
        useReducer: ra,
        useRef: ra,
        useState: ra,
        useDebugValue: ra,
        useResponder: ra
    }, ya = {
        readContext: ro, useCallback: function (e, t) {
            return la().memoizedState = [e, void 0 === t ? null : t], e
        }, useContext: ro, useEffect: function (e, t) {
            return pa(516, 192, e, t)
        }, useImperativeHandle: function (e, t, n) {
            return n = null != n ? n.concat([e]) : null, pa(4, 36, ha.bind(null, t, e), n)
        }, useLayoutEffect: function (e, t) {
            return pa(4, 36, e, t)
        }, useMemo: function (e, t) {
            var n = la();
            return t = void 0 === t ? null : t, e = e(), n.memoizedState = [e, t], e
        }, useReducer: function (e, t, n) {
            var r = la();
            return t = void 0 !== n ? n(t) : t, r.memoizedState = r.baseState = t, e = (e = r.queue = {
                last: null,
                dispatch: null,
                lastRenderedReducer: e,
                lastRenderedState: t
            }).dispatch = ga.bind(null, qo, e), [r.memoizedState, e]
        }, useRef: function (e) {
            return e = {current: e}, la().memoizedState = e
        }, useState: function (e) {
            var t = la();
            return "function" == typeof e && (e = e()), t.memoizedState = t.baseState = e, e = (e = t.queue = {
                last: null,
                dispatch: null,
                lastRenderedReducer: ca,
                lastRenderedState: e
            }).dispatch = ga.bind(null, qo, e), [t.memoizedState, e]
        }, useDebugValue: ma, useResponder: No
    }, va = {
        readContext: ro, useCallback: function (e, t) {
            var n = sa();
            t = void 0 === t ? null : t;
            var r = n.memoizedState;
            return null !== r && null !== t && ia(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e)
        }, useContext: ro, useEffect: function (e, t) {
            return da(516, 192, e, t)
        }, useImperativeHandle: function (e, t, n) {
            return n = null != n ? n.concat([e]) : null, da(4, 36, ha.bind(null, t, e), n)
        }, useLayoutEffect: function (e, t) {
            return da(4, 36, e, t)
        }, useMemo: function (e, t) {
            var n = sa();
            t = void 0 === t ? null : t;
            var r = n.memoizedState;
            return null !== r && null !== t && ia(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e)
        }, useReducer: ua, useRef: function () {
            return sa().memoizedState
        }, useState: function (e) {
            return ua(ca)
        }, useDebugValue: ma, useResponder: No
    }, _a = null, wa = null, xa = !1;

    function Ca(e, t) {
        var n = Is(5, null, null, 0);
        n.elementType = "DELETED", n.type = "DELETED", n.stateNode = t, n.return = e, n.effectTag = 8, null !== e.lastEffect ? (e.lastEffect.nextEffect = n, e.lastEffect = n) : e.firstEffect = e.lastEffect = n
    }

    function Ea(e, t) {
        switch (e.tag) {
            case 5:
                var n = e.type;
                return null !== (t = 1 !== t.nodeType || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t) && (e.stateNode = t, !0);
            case 6:
                return null !== (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) && (e.stateNode = t, !0);
            case 13:
            default:
                return !1
        }
    }

    function ka(e) {
        if (xa) {
            var t = wa;
            if (t) {
                var n = t;
                if (!Ea(e, t)) {
                    if (!(t = tr(n.nextSibling)) || !Ea(e, t)) return e.effectTag = e.effectTag & ~vt | yt, xa = !1, void (_a = e);
                    Ca(_a, n)
                }
                _a = e, wa = tr(t.firstChild)
            } else e.effectTag = e.effectTag & ~vt | yt, xa = !1, _a = e
        }
    }

    function Oa(e) {
        for (e = e.return; null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;) e = e.return;
        _a = e
    }

    function Ta(e) {
        if (e !== _a) return !1;
        if (!xa) return Oa(e), xa = !0, !1;
        var t = e.type;
        if (5 !== e.tag || "head" !== t && "body" !== t && !Gn(t, e.memoizedProps)) for (t = wa; t;) Ca(e, t), t = tr(t.nextSibling);
        if (Oa(e), 13 === e.tag) if (null === (e = null !== (e = e.memoizedState) ? e.dehydrated : null)) e = wa; else e:{
            for (e = e.nextSibling, t = 0; e;) {
                if (8 === e.nodeType) {
                    var n = e.data;
                    if (n === $n) {
                        if (0 === t) {
                            e = tr(e.nextSibling);
                            break e
                        }
                        t--
                    } else n !== qn && n !== Xn && n !== Vn || t++
                }
                e = e.nextSibling
            }
            e = null
        } else e = _a ? tr(e.stateNode.nextSibling) : null;
        return wa = e, !0
    }

    function Ra() {
        wa = _a = null, xa = !1
    }

    var Sa = D.ReactCurrentOwner, Aa = !1;

    function ja(e, t, n, r) {
        t.child = null === e ? Ao(t, null, n, r) : So(t, e.child, n, r)
    }

    function Pa(e, t, n, r, i) {
        n = n.render;
        var o = t.ref;
        return no(t, i), r = oa(e, t, n, r, o, i), null === e || Aa ? (t.effectTag |= 1, ja(e, t, r, i), t.child) : (t.updateQueue = e.updateQueue, t.effectTag &= -517, e.expirationTime <= i && (e.expirationTime = 0), Xa(e, t, i))
    }

    function Da(e, t, n, r, i, o) {
        if (null === e) {
            var a = n.type;
            return "function" != typeof a || Ms(a) || void 0 !== a.defaultProps || null !== n.compare || void 0 !== n.defaultProps ? ((e = zs(n.type, null, r, null, t.mode, o)).ref = t.ref, e.return = t, t.child = e) : (t.tag = 15, t.type = a, La(e, t, a, r, i, o))
        }
        return a = e.child, i < o && (i = a.memoizedProps, (n = null !== (n = n.compare) ? n : Zr)(i, r) && e.ref === t.ref) ? Xa(e, t, o) : (t.effectTag |= 1, (e = Bs(a, r)).ref = t.ref, e.return = t, t.child = e)
    }

    function La(e, t, n, r, i, o) {
        return null !== e && Zr(e.memoizedProps, r) && e.ref === t.ref && (Aa = !1, i < o) ? Xa(e, t, o) : Ma(e, t, n, r, o)
    }

    function Ia(e, t) {
        var n = t.ref;
        (null === e && null !== n || null !== e && e.ref !== n) && (t.effectTag |= 128)
    }

    function Ma(e, t, n, r, i) {
        var o = hi(n) ? pi : ui.current;
        return o = di(t, o), no(t, i), n = oa(e, t, n, r, o, i), null === e || Aa ? (t.effectTag |= 1, ja(e, t, n, i), t.child) : (t.updateQueue = e.updateQueue, t.effectTag &= -517, e.expirationTime <= i && (e.expirationTime = 0), Xa(e, t, i))
    }

    function Ba(e, t, n, r, i) {
        if (hi(n)) {
            var o = !0;
            vi(t)
        } else o = !1;
        if (no(t, i), null === t.stateNode) null !== e && (e.alternate = null, t.alternate = null, t.effectTag |= yt), xo(t, n, r), Eo(t, n, r, i), r = !0; else if (null === e) {
            var a = t.stateNode, l = t.memoizedProps;
            a.props = l;
            var s = a.context, c = n.contextType;
            "object" == typeof c && null !== c ? c = ro(c) : c = di(t, c = hi(n) ? pi : ui.current);
            var u = n.getDerivedStateFromProps,
                f = "function" == typeof u || "function" == typeof a.getSnapshotBeforeUpdate;
            f || "function" != typeof a.UNSAFE_componentWillReceiveProps && "function" != typeof a.componentWillReceiveProps || (l !== r || s !== c) && Co(t, a, r, c), io = !1;
            var p = t.memoizedState;
            s = a.state = p;
            var d = t.updateQueue;
            null !== d && (ho(t, d, r, a, i), s = t.memoizedState), l !== r || p !== s || fi.current || io ? ("function" == typeof u && (vo(t, n, u, r), s = t.memoizedState), (l = io || wo(t, n, l, r, p, s, c)) ? (f || "function" != typeof a.UNSAFE_componentWillMount && "function" != typeof a.componentWillMount || ("function" == typeof a.componentWillMount && a.componentWillMount(), "function" == typeof a.UNSAFE_componentWillMount && a.UNSAFE_componentWillMount()), "function" == typeof a.componentDidMount && (t.effectTag |= 4)) : ("function" == typeof a.componentDidMount && (t.effectTag |= 4), t.memoizedProps = r, t.memoizedState = s), a.props = r, a.state = s, a.context = c, r = l) : ("function" == typeof a.componentDidMount && (t.effectTag |= 4), r = !1)
        } else a = t.stateNode, l = t.memoizedProps, a.props = t.type === t.elementType ? l : Vi(t.type, l), s = a.context, "object" == typeof (c = n.contextType) && null !== c ? c = ro(c) : c = di(t, c = hi(n) ? pi : ui.current), (f = "function" == typeof (u = n.getDerivedStateFromProps) || "function" == typeof a.getSnapshotBeforeUpdate) || "function" != typeof a.UNSAFE_componentWillReceiveProps && "function" != typeof a.componentWillReceiveProps || (l !== r || s !== c) && Co(t, a, r, c), io = !1, s = t.memoizedState, p = a.state = s, null !== (d = t.updateQueue) && (ho(t, d, r, a, i), p = t.memoizedState), l !== r || s !== p || fi.current || io ? ("function" == typeof u && (vo(t, n, u, r), p = t.memoizedState), (u = io || wo(t, n, l, r, s, p, c)) ? (f || "function" != typeof a.UNSAFE_componentWillUpdate && "function" != typeof a.componentWillUpdate || ("function" == typeof a.componentWillUpdate && a.componentWillUpdate(r, p, c), "function" == typeof a.UNSAFE_componentWillUpdate && a.UNSAFE_componentWillUpdate(r, p, c)), "function" == typeof a.componentDidUpdate && (t.effectTag |= 4), "function" == typeof a.getSnapshotBeforeUpdate && (t.effectTag |= 256)) : ("function" != typeof a.componentDidUpdate || l === e.memoizedProps && s === e.memoizedState || (t.effectTag |= 4), "function" != typeof a.getSnapshotBeforeUpdate || l === e.memoizedProps && s === e.memoizedState || (t.effectTag |= 256), t.memoizedProps = r, t.memoizedState = p), a.props = r, a.state = p, a.context = c, r = u) : ("function" != typeof a.componentDidUpdate || l === e.memoizedProps && s === e.memoizedState || (t.effectTag |= 4), "function" != typeof a.getSnapshotBeforeUpdate || l === e.memoizedProps && s === e.memoizedState || (t.effectTag |= 256), r = !1);
        return za(e, t, n, r, o, i)
    }

    function za(e, t, n, r, i, o) {
        Ia(e, t);
        var a = (64 & t.effectTag) !== bt;
        if (!r && !a) return i && _i(t, n, !1), Xa(e, t, o);
        r = t.stateNode, Sa.current = t;
        var l = a && "function" != typeof n.getDerivedStateFromError ? null : r.render();
        return t.effectTag |= 1, null !== e && a ? (t.child = So(t, e.child, null, o), t.child = So(t, null, l, o)) : ja(e, t, l, o), t.memoizedState = r.state, i && _i(t, n, !0), t.child
    }

    function Ua(e) {
        var t = e.stateNode;
        t.pendingContext ? bi(0, t.pendingContext, t.pendingContext !== t.context) : t.context && bi(0, t.context, !1), Mo(e, t.containerInfo)
    }

    var Ha, Fa, Na, Wa, Ya = {dehydrated: null, retryTime: 1};

    function qa(e, t, n) {
        var r, i = t.mode, o = t.pendingProps, a = Ho.current, l = !1;
        if ((r = (64 & t.effectTag) !== bt) || (r = 0 != (2 & a) && (null === e || null !== e.memoizedState)), r ? (l = !0, t.effectTag &= -65) : null !== e && null === e.memoizedState || void 0 === o.fallback || !0 === o.unstable_avoidThisFallback || (a |= 1), si(Ho, 1 & a), null === e) {
            if (l) {
                if (l = o.fallback, (o = Us(null, i, 0, null)).return = t, 0 == (2 & t.mode)) for (e = null !== t.memoizedState ? t.child.child : t.child, o.child = e; null !== e;) e.return = o, e = e.sibling;
                return (n = Us(l, i, n, null)).return = t, o.sibling = n, t.memoizedState = Ya, t.child = o, n
            }
            return i = o.children, t.memoizedState = null, t.child = Ao(t, null, i, n)
        }
        if (null !== e.memoizedState) {
            if (i = (e = e.child).sibling, l) {
                if (o = o.fallback, (n = Bs(e, e.pendingProps)).return = t, 0 == (2 & t.mode) && (l = null !== t.memoizedState ? t.child.child : t.child) !== e.child) for (n.child = l; null !== l;) l.return = n, l = l.sibling;
                return (i = Bs(i, o, i.expirationTime)).return = t, n.sibling = i, n.childExpirationTime = 0, t.memoizedState = Ya, t.child = n, i
            }
            return n = So(t, e.child, o.children, n), t.memoizedState = null, t.child = n
        }
        if (e = e.child, l) {
            if (l = o.fallback, (o = Us(null, i, 0, null)).return = t, o.child = e, null !== e && (e.return = o), 0 == (2 & t.mode)) for (e = null !== t.memoizedState ? t.child.child : t.child, o.child = e; null !== e;) e.return = o, e = e.sibling;
            return (n = Us(l, i, n, null)).return = t, o.sibling = n, n.effectTag |= yt, o.childExpirationTime = 0, t.memoizedState = Ya, t.child = o, n
        }
        return t.memoizedState = null, t.child = So(t, e, o.children, n)
    }

    function $a(e, t, n, r, i) {
        var o = e.memoizedState;
        null === o ? e.memoizedState = {
            isBackwards: t,
            rendering: null,
            last: r,
            tail: n,
            tailExpiration: 0,
            tailMode: i
        } : (o.isBackwards = t, o.rendering = null, o.last = r, o.tail = n, o.tailExpiration = 0, o.tailMode = i)
    }

    function Va(e, t, n) {
        var r = t.pendingProps, i = r.revealOrder, o = r.tail;
        if (ja(e, t, r.children, n), 0 != (2 & (r = Ho.current))) r = 1 & r | 2, t.effectTag |= 64; else {
            if (null !== e && (64 & e.effectTag) !== bt) e:for (e = t.child; null !== e;) {
                if (13 === e.tag) {
                    if (null !== e.memoizedState) {
                        e.expirationTime < n && (e.expirationTime = n);
                        var a = e.alternate;
                        null !== a && a.expirationTime < n && (a.expirationTime = n), to(e.return, n)
                    }
                } else if (null !== e.child) {
                    e.child.return = e, e = e.child;
                    continue
                }
                if (e === t) break e;
                for (; null === e.sibling;) {
                    if (null === e.return || e.return === t) break e;
                    e = e.return
                }
                e.sibling.return = e.return, e = e.sibling
            }
            r &= 1
        }
        if (si(Ho, r), 0 == (2 & t.mode)) t.memoizedState = null; else switch (i) {
            case"forwards":
                for (n = t.child, i = null; null !== n;) null !== (r = n.alternate) && null === Fo(r) && (i = n), n = n.sibling;
                null === (n = i) ? (i = t.child, t.child = null) : (i = n.sibling, n.sibling = null), $a(t, !1, i, n, o);
                break;
            case"backwards":
                for (n = null, i = t.child, t.child = null; null !== i;) {
                    if (null !== (r = i.alternate) && null === Fo(r)) {
                        t.child = i;
                        break
                    }
                    r = i.sibling, i.sibling = n, n = i, i = r
                }
                $a(t, !0, n, null, o);
                break;
            case"together":
                $a(t, !1, null, null, void 0);
                break;
            default:
                t.memoizedState = null
        }
        return t.child
    }

    function Xa(e, t, n) {
        null !== e && (t.dependencies = e.dependencies);
        var r = t.expirationTime;
        if (0 !== r && bs(r), t.childExpirationTime < n) return null;
        if (null !== e && t.child !== e.child) throw a(Error(153));
        if (null !== t.child) {
            for (n = Bs(e = t.child, e.pendingProps, e.expirationTime), t.child = n, n.return = t; null !== e.sibling;) e = e.sibling, (n = n.sibling = Bs(e, e.pendingProps, e.expirationTime)).return = t;
            n.sibling = null
        }
        return t.child
    }

    function Ka(e) {
        e.effectTag |= 4
    }

    function Za(e, t) {
        switch (e.tailMode) {
            case"hidden":
                t = e.tail;
                for (var n = null; null !== t;) null !== t.alternate && (n = t), t = t.sibling;
                null === n ? e.tail = null : n.sibling = null;
                break;
            case"collapsed":
                n = e.tail;
                for (var r = null; null !== n;) null !== n.alternate && (r = n), n = n.sibling;
                null === r ? t || null === e.tail ? e.tail = null : e.tail.sibling = null : r.sibling = null
        }
    }

    function Qa(e) {
        switch (e.tag) {
            case 1:
                hi(e.type) && mi();
                var t = e.effectTag;
                return 4096 & t ? (e.effectTag = -4097 & t | 64, e) : null;
            case 3:
                if (Bo(), gi(), (64 & (t = e.effectTag)) !== bt) throw a(Error(285));
                return e.effectTag = -4097 & t | 64, e;
            case 5:
                return Uo(e), null;
            case 13:
                return li(Ho), 4096 & (t = e.effectTag) ? (e.effectTag = -4097 & t | 64, e) : null;
            case 19:
                return li(Ho), null;
            case 4:
                return Bo(), null;
            case 10:
                return eo(e), null;
            default:
                return null
        }
    }

    function Ga(e, t) {
        return {value: e, source: t, stack: G(t)}
    }

    Ha = function (e, t) {
        for (var n = t.child; null !== n;) {
            if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode); else if (4 !== n.tag && null !== n.child) {
                n.child.return = n, n = n.child;
                continue
            }
            if (n === t) break;
            for (; null === n.sibling;) {
                if (null === n.return || n.return === t) return;
                n = n.return
            }
            n.sibling.return = n.return, n = n.sibling
        }
    }, Fa = function () {
    }, Na = function (e, t, n, r, o) {
        var a = e.memoizedProps;
        if (a !== r) {
            var l, s, c = t.stateNode;
            switch (Io(Po.current), e = null, n) {
                case"input":
                    a = Oe(c, a), r = Oe(c, r), e = [];
                    break;
                case"option":
                    a = Pe(c, a), r = Pe(c, r), e = [];
                    break;
                case"select":
                    a = i({}, a, {value: void 0}), r = i({}, r, {value: void 0}), e = [];
                    break;
                case"textarea":
                    a = Le(c, a), r = Le(c, r), e = [];
                    break;
                default:
                    "function" != typeof a.onClick && "function" == typeof r.onClick && (c.onclick = Un)
            }
            for (l in Mn(n, r), n = null, a) if (!r.hasOwnProperty(l) && a.hasOwnProperty(l) && null != a[l]) if ("style" === l) for (s in c = a[l]) c.hasOwnProperty(s) && (n || (n = {}), n[s] = ""); else "dangerouslySetInnerHTML" !== l && "children" !== l && "suppressContentEditableWarning" !== l && "suppressHydrationWarning" !== l && "autoFocus" !== l && (d.hasOwnProperty(l) ? e || (e = []) : (e = e || []).push(l, null));
            for (l in r) {
                var u = r[l];
                if (c = null != a ? a[l] : void 0, r.hasOwnProperty(l) && u !== c && (null != u || null != c)) if ("style" === l) if (c) {
                    for (s in c) !c.hasOwnProperty(s) || u && u.hasOwnProperty(s) || (n || (n = {}), n[s] = "");
                    for (s in u) u.hasOwnProperty(s) && c[s] !== u[s] && (n || (n = {}), n[s] = u[s])
                } else n || (e || (e = []), e.push(l, n)), n = u; else "dangerouslySetInnerHTML" === l ? (u = u ? u.__html : void 0, c = c ? c.__html : void 0, null != u && c !== u && (e = e || []).push(l, "" + u)) : "children" === l ? c === u || "string" != typeof u && "number" != typeof u || (e = e || []).push(l, "" + u) : "suppressContentEditableWarning" !== l && "suppressHydrationWarning" !== l && (d.hasOwnProperty(l) ? (null != u && zn(o, l), e || c === u || (e = [])) : (e = e || []).push(l, u))
            }
            n && (e = e || []).push("style", n), o = e, (t.updateQueue = o) && Ka(t)
        }
    }, Wa = function (e, t, n, r) {
        n !== r && Ka(t)
    };
    var Ja = "function" == typeof WeakSet ? WeakSet : Set;

    function el(e, t) {
        var n = t.source, r = t.stack;
        null === r && null !== n && (r = G(n)), null !== n && Q(n.type), t = t.value, null !== e && 1 === e.tag && Q(e.type);
        try {
            console.error(t)
        } catch (e) {
            setTimeout((function () {
                throw e
            }))
        }
    }

    function tl(e) {
        var t = e.ref;
        if (null !== t) if ("function" == typeof t) try {
            t(null)
        } catch (t) {
            Ss(e, t)
        } else t.current = null
    }

    function nl(e, t) {
        switch (t.tag) {
            case 0:
            case 11:
            case 15:
                rl(2, 0, t);
                break;
            case 1:
                if (256 & t.effectTag && null !== e) {
                    var n = e.memoizedProps, r = e.memoizedState;
                    t = (e = t.stateNode).getSnapshotBeforeUpdate(t.elementType === t.type ? n : Vi(t.type, n), r), e.__reactInternalSnapshotBeforeUpdate = t
                }
                break;
            case 3:
            case 5:
            case 6:
            case 4:
            case 17:
                break;
            default:
                throw a(Error(163))
        }
    }

    function rl(e, t, n) {
        if (null !== (n = null !== (n = n.updateQueue) ? n.lastEffect : null)) {
            var r = n = n.next;
            do {
                if (0 != (r.tag & e)) {
                    var i = r.destroy;
                    r.destroy = void 0, void 0 !== i && i()
                }
                0 != (r.tag & t) && (i = r.create, r.destroy = i()), r = r.next
            } while (r !== n)
        }
    }

    function il(e, t, n) {
        switch ("function" == typeof Ds && Ds(t), t.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
                if (null !== (e = t.updateQueue) && null !== (e = e.lastEffect)) {
                    var r = e.next;
                    Ni(97 < n ? 97 : n, (function () {
                        var e = r;
                        do {
                            var n = e.destroy;
                            if (void 0 !== n) {
                                var i = t;
                                try {
                                    n()
                                } catch (e) {
                                    Ss(i, e)
                                }
                            }
                            e = e.next
                        } while (e !== r)
                    }))
                }
                break;
            case 1:
                tl(t), "function" == typeof (n = t.stateNode).componentWillUnmount && function (e, t) {
                    try {
                        t.props = e.memoizedProps, t.state = e.memoizedState, t.componentWillUnmount()
                    } catch (t) {
                        Ss(e, t)
                    }
                }(t, n);
                break;
            case 5:
                tl(t);
                break;
            case 4:
                sl(e, t, n)
        }
    }

    function ol(e) {
        var t = e.alternate;
        e.return = null, e.child = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.alternate = null, e.firstEffect = null, e.lastEffect = null, e.pendingProps = null, e.memoizedProps = null, null !== t && ol(t)
    }

    function al(e) {
        return 5 === e.tag || 3 === e.tag || 4 === e.tag
    }

    function ll(e) {
        e:{
            for (var t = e.return; null !== t;) {
                if (al(t)) {
                    var n = t;
                    break e
                }
                t = t.return
            }
            throw a(Error(160))
        }
        switch (t = n.stateNode, n.tag) {
            case 5:
                var r = !1;
                break;
            case 3:
            case 4:
                t = t.containerInfo, r = !0;
                break;
            default:
                throw a(Error(161))
        }
        16 & n.effectTag && (We(t, ""), n.effectTag &= -17);
        e:t:for (n = e; ;) {
            for (; null === n.sibling;) {
                if (null === n.return || al(n.return)) {
                    n = null;
                    break e
                }
                n = n.return
            }
            for (n.sibling.return = n.return, n = n.sibling; 5 !== n.tag && 6 !== n.tag && 18 !== n.tag;) {
                if (n.effectTag & yt) continue t;
                if (null === n.child || 4 === n.tag) continue t;
                n.child.return = n, n = n.child
            }
            if (!(n.effectTag & yt)) {
                n = n.stateNode;
                break e
            }
        }
        for (var i = e; ;) {
            var o = 5 === i.tag || 6 === i.tag;
            if (o) {
                var l = o ? i.stateNode : i.stateNode.instance;
                if (n) if (r) {
                    var s = l;
                    l = n, 8 === (o = t).nodeType ? o.parentNode.insertBefore(s, l) : o.insertBefore(s, l)
                } else t.insertBefore(l, n); else r ? (8 === (s = t).nodeType ? (o = s.parentNode).insertBefore(l, s) : (o = s).appendChild(l), null != (s = s._reactRootContainer) || null !== o.onclick || (o.onclick = Un)) : t.appendChild(l)
            } else if (4 !== i.tag && null !== i.child) {
                i.child.return = i, i = i.child;
                continue
            }
            if (i === e) break;
            for (; null === i.sibling;) {
                if (null === i.return || i.return === e) return;
                i = i.return
            }
            i.sibling.return = i.return, i = i.sibling
        }
    }

    function sl(e, t, n) {
        for (var r, i, o = t, l = !1; ;) {
            if (!l) {
                l = o.return;
                e:for (; ;) {
                    if (null === l) throw a(Error(160));
                    switch (r = l.stateNode, l.tag) {
                        case 5:
                            i = !1;
                            break e;
                        case 3:
                        case 4:
                            r = r.containerInfo, i = !0;
                            break e
                    }
                    l = l.return
                }
                l = !0
            }
            if (5 === o.tag || 6 === o.tag) {
                e:for (var s = e, c = o, u = n, f = c; ;) if (il(s, f, u), null !== f.child && 4 !== f.tag) f.child.return = f, f = f.child; else {
                    if (f === c) break;
                    for (; null === f.sibling;) {
                        if (null === f.return || f.return === c) break e;
                        f = f.return
                    }
                    f.sibling.return = f.return, f = f.sibling
                }
                i ? (s = r, c = o.stateNode, 8 === s.nodeType ? s.parentNode.removeChild(c) : s.removeChild(c)) : r.removeChild(o.stateNode)
            } else if (4 === o.tag) {
                if (null !== o.child) {
                    r = o.stateNode.containerInfo, i = !0, o.child.return = o, o = o.child;
                    continue
                }
            } else if (il(e, o, n), null !== o.child) {
                o.child.return = o, o = o.child;
                continue
            }
            if (o === t) break;
            for (; null === o.sibling;) {
                if (null === o.return || o.return === t) return;
                4 === (o = o.return).tag && (l = !1)
            }
            o.sibling.return = o.return, o = o.sibling
        }
    }

    function cl(e, t) {
        switch (t.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
                rl(4, 8, t);
                break;
            case 1:
                break;
            case 5:
                var n = t.stateNode;
                if (null != n) {
                    var r = t.memoizedProps, i = null !== e ? e.memoizedProps : r;
                    e = t.type;
                    var o = t.updateQueue;
                    if (t.updateQueue = null, null !== o) {
                        for (n[or] = r, "input" === e && "radio" === r.type && null != r.name && Re(n, r), Bn(e, i), t = Bn(e, r), i = 0; i < o.length; i += 2) {
                            var l = o[i], s = o[i + 1];
                            "style" === l ? Ln(n, s) : "dangerouslySetInnerHTML" === l ? Ne(n, s) : "children" === l ? We(n, s) : xe(n, l, s, t)
                        }
                        switch (e) {
                            case"input":
                                Se(n, r);
                                break;
                            case"textarea":
                                Me(n, r);
                                break;
                            case"select":
                                t = n._wrapperState.wasMultiple, n._wrapperState.wasMultiple = !!r.multiple, null != (e = r.value) ? De(n, !!r.multiple, e, !1) : t !== !!r.multiple && (null != r.defaultValue ? De(n, !!r.multiple, r.defaultValue, !0) : De(n, !!r.multiple, r.multiple ? [] : "", !1))
                        }
                    }
                }
                break;
            case 6:
                if (null === t.stateNode) throw a(Error(162));
                t.stateNode.nodeValue = t.memoizedProps;
                break;
            case 3:
                (t = t.stateNode).hydrate && (t.hydrate = !1, gt(t.containerInfo));
                break;
            case 12:
                break;
            case 13:
                if (n = t, null === t.memoizedState ? r = !1 : (r = !0, n = t.child, Ul = Ui()), null !== n) e:for (e = n; ;) {
                    if (5 === e.tag) o = e.stateNode, r ? "function" == typeof (o = o.style).setProperty ? o.setProperty("display", "none", "important") : o.display = "none" : (o = e.stateNode, i = null != (i = e.memoizedProps.style) && i.hasOwnProperty("display") ? i.display : null, o.style.display = Dn("display", i)); else if (6 === e.tag) e.stateNode.nodeValue = r ? "" : e.memoizedProps; else {
                        if (13 === e.tag && null !== e.memoizedState && null === e.memoizedState.dehydrated) {
                            (o = e.child.sibling).return = e, e = o;
                            continue
                        }
                        if (null !== e.child) {
                            e.child.return = e, e = e.child;
                            continue
                        }
                    }
                    if (e === n) break e;
                    for (; null === e.sibling;) {
                        if (null === e.return || e.return === n) break e;
                        e = e.return
                    }
                    e.sibling.return = e.return, e = e.sibling
                }
                ul(t);
                break;
            case 19:
                ul(t);
                break;
            case 17:
            case 20:
            case 21:
                break;
            default:
                throw a(Error(163))
        }
    }

    function ul(e) {
        var t = e.updateQueue;
        if (null !== t) {
            e.updateQueue = null;
            var n = e.stateNode;
            null === n && (n = e.stateNode = new Ja), t.forEach((function (t) {
                var r = js.bind(null, e, t);
                n.has(t) || (n.add(t), t.then(r, r))
            }))
        }
    }

    var fl = "function" == typeof WeakMap ? WeakMap : Map;

    function pl(e, t, n) {
        (n = lo(n, null)).tag = 3, n.payload = {element: null};
        var r = t.value;
        return n.callback = function () {
            Nl || (Nl = !0, Wl = r), el(e, t)
        }, n
    }

    function dl(e, t, n) {
        (n = lo(n, null)).tag = 3;
        var r = e.type.getDerivedStateFromError;
        if ("function" == typeof r) {
            var i = t.value;
            n.payload = function () {
                return el(e, t), r(i)
            }
        }
        var o = e.stateNode;
        return null !== o && "function" == typeof o.componentDidCatch && (n.callback = function () {
            "function" != typeof r && (null === Yl ? Yl = new Set([this]) : Yl.add(this), el(e, t));
            var n = t.stack;
            this.componentDidCatch(t.value, {componentStack: null !== n ? n : ""})
        }), n
    }

    var hl = Math.ceil, ml = D.ReactCurrentDispatcher, gl = D.ReactCurrentOwner, bl = 0, yl = 8, vl = 16, _l = 32,
        wl = 0, xl = 1, Cl = 2, El = 3, kl = 4, Ol = 5, Tl = 6, Rl = bl, Sl = null, Al = null, jl = 0, Pl = wl,
        Dl = null, Ll = 1073741823, Il = 1073741823, Ml = null, Bl = 0, zl = !1, Ul = 0, Hl = 500, Fl = null, Nl = !1,
        Wl = null, Yl = null, ql = !1, $l = null, Vl = 90, Xl = null, Kl = 0, Zl = null, Ql = 0;

    function Gl() {
        return (Rl & (vl | _l)) !== bl ? 1073741821 - (Ui() / 10 | 0) : 0 !== Ql ? Ql : Ql = 1073741821 - (Ui() / 10 | 0)
    }

    function Jl(e, t, n) {
        if (0 == (2 & (t = t.mode))) return 1073741823;
        var r = Hi();
        if (0 == (4 & t)) return 99 === r ? 1073741823 : 1073741822;
        if ((Rl & vl) !== bl) return jl;
        if (null !== n) e = 1073741821 - 25 * (1 + ((1073741821 - e + (0 | n.timeoutMs || 5e3) / 10) / 25 | 0)); else switch (r) {
            case 99:
                e = 1073741823;
                break;
            case 98:
                e = 1073741821 - 10 * (1 + ((1073741821 - e + 15) / 10 | 0));
                break;
            case 97:
            case 96:
                e = 1073741821 - 25 * (1 + ((1073741821 - e + 500) / 25 | 0));
                break;
            case 95:
                e = 2;
                break;
            default:
                throw a(Error(326))
        }
        return null !== Sl && e === jl && --e, e
    }

    var es, ts = 0;

    function ns(e, t) {
        if (50 < Kl) throw Kl = 0, Zl = null, a(Error(185));
        if (null !== (e = rs(e, t))) {
            var n = Hi();
            1073741823 === t ? (Rl & yl) !== bl && (Rl & (vl | _l)) === bl ? ls(e) : (os(e), Rl === bl && qi()) : os(e), (4 & Rl) === bl || 98 !== n && 99 !== n || (null === Xl ? Xl = new Map([[e, t]]) : (void 0 === (n = Xl.get(e)) || n > t) && Xl.set(e, t))
        }
    }

    function rs(e, t) {
        e.expirationTime < t && (e.expirationTime = t);
        var n = e.alternate;
        null !== n && n.expirationTime < t && (n.expirationTime = t);
        var r = e.return, i = null;
        if (null === r && 3 === e.tag) i = e.stateNode; else for (; null !== r;) {
            if (n = r.alternate, r.childExpirationTime < t && (r.childExpirationTime = t), null !== n && n.childExpirationTime < t && (n.childExpirationTime = t), null === r.return && 3 === r.tag) {
                i = r.stateNode;
                break
            }
            r = r.return
        }
        return null !== i && (Sl === i && (bs(t), Pl === kl && Ys(i, jl)), qs(i, t)), i
    }

    function is(e) {
        var t = e.lastExpiredTime;
        return 0 !== t ? t : Ws(e, t = e.firstPendingTime) ? (t = e.lastPingedTime) > (e = e.nextKnownPendingLevel) ? t : e : t
    }

    function os(e) {
        if (0 !== e.lastExpiredTime) e.callbackExpirationTime = 1073741823, e.callbackPriority = 99, e.callbackNode = Yi(ls.bind(null, e)); else {
            var t = is(e), n = e.callbackNode;
            if (0 === t) null !== n && (e.callbackNode = null, e.callbackExpirationTime = 0, e.callbackPriority = 90); else {
                var r = Gl();
                if (1073741823 === t ? r = 99 : 1 === t || 2 === t ? r = 95 : r = 0 >= (r = 10 * (1073741821 - t) - 10 * (1073741821 - r)) ? 99 : 250 >= r ? 98 : 5250 >= r ? 97 : 95, null !== n) {
                    var i = e.callbackPriority;
                    if (e.callbackExpirationTime === t && i >= r) return;
                    n !== Di && Ci(n)
                }
                e.callbackExpirationTime = t, e.callbackPriority = r, t = 1073741823 === t ? Yi(ls.bind(null, e)) : Wi(r, as.bind(null, e), {timeout: 10 * (1073741821 - t) - Ui()}), e.callbackNode = t
            }
        }
    }

    function as(e, t) {
        if (Ql = 0, t) return $s(e, t = Gl()), os(e), null;
        var n = is(e);
        if (0 !== n) {
            if (t = e.callbackNode, (Rl & (vl | _l)) !== bl) throw a(Error(327));
            if (Os(), e === Sl && n === jl || ds(e, n), null !== Al) {
                var r = Rl;
                Rl |= vl;
                for (var i = ms(); ;) try {
                    vs();
                    break
                } catch (t) {
                    hs(e, t)
                }
                if (Gi(), Rl = r, ml.current = i, Pl === xl) throw t = Dl, ds(e, n), Ys(e, n), os(e), t;
                if (null === Al) switch (i = e.finishedWork = e.current.alternate, e.finishedExpirationTime = n, cs(e, n), r = Pl, Sl = null, r) {
                    case wl:
                    case xl:
                        throw a(Error(345));
                    case Cl:
                        if (2 !== n) {
                            $s(e, 2);
                            break
                        }
                        Cs(e);
                        break;
                    case El:
                        if (Ys(e, n), n === (r = e.lastSuspendedTime) && (e.nextKnownPendingLevel = xs(i)), 1073741823 === Ll && 10 < (i = Ul + Hl - Ui())) {
                            if (zl) {
                                var o = e.lastPingedTime;
                                if (0 === o || o >= n) {
                                    e.lastPingedTime = n, ds(e, n);
                                    break
                                }
                            }
                            if (0 !== (o = is(e)) && o !== n) break;
                            if (0 !== r && r !== n) {
                                e.lastPingedTime = r;
                                break
                            }
                            e.timeoutHandle = Jn(Cs.bind(null, e), i);
                            break
                        }
                        Cs(e);
                        break;
                    case kl:
                        if (Ys(e, n), n === (r = e.lastSuspendedTime) && (e.nextKnownPendingLevel = xs(i)), zl && (0 === (i = e.lastPingedTime) || i >= n)) {
                            e.lastPingedTime = n, ds(e, n);
                            break
                        }
                        if (0 !== (i = is(e)) && i !== n) break;
                        if (0 !== r && r !== n) {
                            e.lastPingedTime = r;
                            break
                        }
                        if (1073741823 !== Il ? r = 10 * (1073741821 - Il) - Ui() : 1073741823 === Ll ? r = 0 : (r = 10 * (1073741821 - Ll) - 5e3, 0 > (r = (i = Ui()) - r) && (r = 0), (n = 10 * (1073741821 - n) - i) < (r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * hl(r / 1960)) - r) && (r = n)), 10 < r) {
                            e.timeoutHandle = Jn(Cs.bind(null, e), r);
                            break
                        }
                        Cs(e);
                        break;
                    case Ol:
                        if (1073741823 !== Ll && null !== Ml) {
                            o = Ll;
                            var l = Ml;
                            if (0 >= (r = 0 | l.busyMinDurationMs) ? r = 0 : (i = 0 | l.busyDelayMs, r = (o = Ui() - (10 * (1073741821 - o) - (0 | l.timeoutMs || 5e3))) <= i ? 0 : i + r - o), 10 < r) {
                                Ys(e, n), e.timeoutHandle = Jn(Cs.bind(null, e), r);
                                break
                            }
                        }
                        Cs(e);
                        break;
                    case Tl:
                        Ys(e, n);
                        break;
                    default:
                        throw a(Error(329))
                }
                if (os(e), e.callbackNode === t) return as.bind(null, e)
            }
        }
        return null
    }

    function ls(e) {
        var t = e.lastExpiredTime;
        if (t = 0 !== t ? t : 1073741823, e.finishedExpirationTime === t) Cs(e); else {
            if ((Rl & (vl | _l)) !== bl) throw a(Error(327));
            if (Os(), e === Sl && t === jl || ds(e, t), null !== Al) {
                var n = Rl;
                Rl |= vl;
                for (var r = ms(); ;) try {
                    ys();
                    break
                } catch (t) {
                    hs(e, t)
                }
                if (Gi(), Rl = n, ml.current = r, Pl === xl) throw n = Dl, ds(e, t), Ys(e, t), os(e), n;
                if (null !== Al) throw a(Error(261));
                e.finishedWork = e.current.alternate, e.finishedExpirationTime = t, cs(e, t), Pl === Tl ? Ys(e, t) : (Sl = null, Cs(e)), os(e)
            }
        }
        return null
    }

    function ss() {
        (Rl & (1 | vl | _l)) === bl && (function () {
            if (null !== Xl) {
                var e = Xl;
                Xl = null, e.forEach((function (e, t) {
                    $s(t, e), os(t)
                })), qi()
            }
        }(), Os())
    }

    function cs(e, t) {
        var n = e.firstBatch;
        null !== n && n._defer && n._expirationTime >= t && (Wi(97, (function () {
            return n._onComplete(), null
        })), Pl = Tl)
    }

    function us(e, t) {
        var n = Rl;
        Rl |= 1;
        try {
            return e(t)
        } finally {
            (Rl = n) === bl && qi()
        }
    }

    function fs(e, t, n, r) {
        var i = Rl;
        Rl |= 4;
        try {
            return Ni(98, e.bind(null, t, n, r))
        } finally {
            (Rl = i) === bl && qi()
        }
    }

    function ps(e, t) {
        var n = Rl;
        Rl &= -2, Rl |= yl;
        try {
            return e(t)
        } finally {
            (Rl = n) === bl && qi()
        }
    }

    function ds(e, t) {
        e.finishedWork = null, e.finishedExpirationTime = 0;
        var n = e.timeoutHandle;
        if (-1 !== n && (e.timeoutHandle = -1, er(n)), null !== Al) for (n = Al.return; null !== n;) {
            var r = n;
            switch (r.tag) {
                case 1:
                    var i = r.type.childContextTypes;
                    null != i && mi();
                    break;
                case 3:
                    Bo(), gi();
                    break;
                case 5:
                    Uo(r);
                    break;
                case 4:
                    Bo();
                    break;
                case 13:
                case 19:
                    li(Ho);
                    break;
                case 10:
                    eo(r)
            }
            n = n.return
        }
        Sl = e, Al = Bs(e.current, null), jl = t, Pl = wl, Dl = null, Il = Ll = 1073741823, Ml = null, Bl = 0, zl = !1
    }

    function hs(e, t) {
        for (; ;) {
            try {
                if (Gi(), aa(), null === Al || null === Al.return) return Pl = xl, Dl = t, null;
                e:{
                    var n = e, r = Al.return, i = Al, o = t;
                    if (t = jl, i.effectTag |= 2048, i.firstEffect = i.lastEffect = null, null !== o && "object" == typeof o && "function" == typeof o.then) {
                        var a = o, l = 0 != (1 & Ho.current), s = r;
                        do {
                            var c;
                            if (c = 13 === s.tag) {
                                var u = s.memoizedState;
                                if (null !== u) c = null !== u.dehydrated; else {
                                    var f = s.memoizedProps;
                                    c = void 0 !== f.fallback && (!0 !== f.unstable_avoidThisFallback || !l)
                                }
                            }
                            if (c) {
                                var p = s.updateQueue;
                                if (null === p) {
                                    var d = new Set;
                                    d.add(a), s.updateQueue = d
                                } else p.add(a);
                                if (0 == (2 & s.mode)) {
                                    if (s.effectTag |= 64, i.effectTag &= -2981, 1 === i.tag) if (null === i.alternate) i.tag = 17; else {
                                        var h = lo(1073741823, null);
                                        h.tag = 2, co(i, h)
                                    }
                                    i.expirationTime = 1073741823;
                                    break e
                                }
                                o = void 0, i = t;
                                var m = n.pingCache;
                                if (null === m ? (m = n.pingCache = new fl, o = new Set, m.set(a, o)) : void 0 === (o = m.get(a)) && (o = new Set, m.set(a, o)), !o.has(i)) {
                                    o.add(i);
                                    var g = As.bind(null, n, a, i);
                                    a.then(g, g)
                                }
                                s.effectTag |= 4096, s.expirationTime = t;
                                break e
                            }
                            s = s.return
                        } while (null !== s);
                        o = Error((Q(i.type) || "A React component") + " suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display." + G(i))
                    }
                    Pl !== Ol && (Pl = Cl), o = Ga(o, i), s = r;
                    do {
                        switch (s.tag) {
                            case 3:
                                a = o, s.effectTag |= 4096, s.expirationTime = t, uo(s, pl(s, a, t));
                                break e;
                            case 1:
                                a = o;
                                var b = s.type, y = s.stateNode;
                                if ((64 & s.effectTag) === bt && ("function" == typeof b.getDerivedStateFromError || null !== y && "function" == typeof y.componentDidCatch && (null === Yl || !Yl.has(y)))) {
                                    s.effectTag |= 4096, s.expirationTime = t, uo(s, dl(s, a, t));
                                    break e
                                }
                        }
                        s = s.return
                    } while (null !== s)
                }
                Al = ws(Al)
            } catch (e) {
                t = e;
                continue
            }
            break
        }
    }

    function ms() {
        var e = ml.current;
        return ml.current = ba, null === e ? ba : e
    }

    function gs(e, t) {
        e < Ll && 2 < e && (Ll = e), null !== t && e < Il && 2 < e && (Il = e, Ml = t)
    }

    function bs(e) {
        e > Bl && (Bl = e)
    }

    function ys() {
        for (; null !== Al;) Al = _s(Al)
    }

    function vs() {
        for (; null !== Al && !Ei();) Al = _s(Al)
    }

    function _s(e) {
        var t = es(e.alternate, e, jl);
        return e.memoizedProps = e.pendingProps, null === t && (t = ws(e)), gl.current = null, t
    }

    function ws(e) {
        Al = e;
        do {
            var t = Al.alternate;
            if (e = Al.return, (2048 & Al.effectTag) === bt) {
                e:{
                    var n = t, r = jl, o = (t = Al).pendingProps;
                    switch (t.tag) {
                        case 2:
                        case 16:
                            break;
                        case 15:
                        case 0:
                            break;
                        case 1:
                            hi(t.type) && mi();
                            break;
                        case 3:
                            Bo(), gi(), (r = t.stateNode).pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (null === n || null === n.child) && Ta(t) && Ka(t), Fa(t);
                            break;
                        case 5:
                            Uo(t), r = Io(Lo.current);
                            var l = t.type;
                            if (null !== n && null != t.stateNode) Na(n, t, l, o, r), n.ref !== t.ref && (t.effectTag |= 128); else if (o) {
                                var s = Io(Po.current);
                                if (Ta(t)) {
                                    l = void 0, n = (o = t).stateNode;
                                    var c = o.type, u = o.memoizedProps;
                                    switch (n[ir] = o, n[or] = u, c) {
                                        case"iframe":
                                        case"object":
                                        case"embed":
                                            _n("load", n);
                                            break;
                                        case"video":
                                        case"audio":
                                            for (var f = 0; f < Je.length; f++) _n(Je[f], n);
                                            break;
                                        case"source":
                                            _n("error", n);
                                            break;
                                        case"img":
                                        case"image":
                                        case"link":
                                            _n("error", n), _n("load", n);
                                            break;
                                        case"form":
                                            _n("reset", n), _n("submit", n);
                                            break;
                                        case"details":
                                            _n("toggle", n);
                                            break;
                                        case"input":
                                            Te(n, u), _n("invalid", n), zn(r, "onChange");
                                            break;
                                        case"select":
                                            n._wrapperState = {wasMultiple: !!u.multiple}, _n("invalid", n), zn(r, "onChange");
                                            break;
                                        case"textarea":
                                            Ie(n, u), _n("invalid", n), zn(r, "onChange")
                                    }
                                    for (l in Mn(c, u), f = null, u) u.hasOwnProperty(l) && (s = u[l], "children" === l ? "string" == typeof s ? n.textContent !== s && (f = ["children", s]) : "number" == typeof s && n.textContent !== "" + s && (f = ["children", "" + s]) : d.hasOwnProperty(l) && null != s && zn(r, l));
                                    switch (c) {
                                        case"input":
                                            Ee(n), Ae(n, u, !0);
                                            break;
                                        case"textarea":
                                            Ee(n), Be(n);
                                            break;
                                        case"select":
                                        case"option":
                                            break;
                                        default:
                                            "function" == typeof u.onClick && (n.onclick = Un)
                                    }
                                    r = f, o.updateQueue = r, null !== r && Ka(t)
                                } else {
                                    u = l, n = o, c = t, f = 9 === r.nodeType ? r : r.ownerDocument, s === ze.html && (s = Ue(u)), s === ze.html ? "script" === u ? ((u = f.createElement("div")).innerHTML = "<script><\/script>", f = u.removeChild(u.firstChild)) : "string" == typeof n.is ? f = f.createElement(u, {is: n.is}) : (f = f.createElement(u), "select" === u && (u = f, n.multiple ? u.multiple = !0 : n.size && (u.size = n.size))) : f = f.createElementNS(s, u), (u = f)[ir] = c, u[or] = n, Ha(n = u, t, !1, !1), t.stateNode = n, s = r;
                                    var p = Bn(l, o);
                                    switch (l) {
                                        case"iframe":
                                        case"object":
                                        case"embed":
                                            _n("load", n), r = o;
                                            break;
                                        case"video":
                                        case"audio":
                                            for (r = 0; r < Je.length; r++) _n(Je[r], n);
                                            r = o;
                                            break;
                                        case"source":
                                            _n("error", n), r = o;
                                            break;
                                        case"img":
                                        case"image":
                                        case"link":
                                            _n("error", n), _n("load", n), r = o;
                                            break;
                                        case"form":
                                            _n("reset", n), _n("submit", n), r = o;
                                            break;
                                        case"details":
                                            _n("toggle", n), r = o;
                                            break;
                                        case"input":
                                            Te(n, o), r = Oe(n, o), _n("invalid", n), zn(s, "onChange");
                                            break;
                                        case"option":
                                            r = Pe(n, o);
                                            break;
                                        case"select":
                                            n._wrapperState = {wasMultiple: !!o.multiple}, r = i({}, o, {value: void 0}), _n("invalid", n), zn(s, "onChange");
                                            break;
                                        case"textarea":
                                            Ie(n, o), r = Le(n, o), _n("invalid", n), zn(s, "onChange");
                                            break;
                                        default:
                                            r = o
                                    }
                                    Mn(l, r), c = void 0, u = l, f = n;
                                    var h = r;
                                    for (c in h) if (h.hasOwnProperty(c)) {
                                        var m = h[c];
                                        "style" === c ? Ln(f, m) : "dangerouslySetInnerHTML" === c ? null != (m = m ? m.__html : void 0) && Ne(f, m) : "children" === c ? "string" == typeof m ? ("textarea" !== u || "" !== m) && We(f, m) : "number" == typeof m && We(f, "" + m) : "suppressContentEditableWarning" !== c && "suppressHydrationWarning" !== c && "autoFocus" !== c && (d.hasOwnProperty(c) ? null != m && zn(s, c) : null != m && xe(f, c, m, p))
                                    }
                                    switch (l) {
                                        case"input":
                                            Ee(n), Ae(n, o, !1);
                                            break;
                                        case"textarea":
                                            Ee(n), Be(n);
                                            break;
                                        case"option":
                                            null != o.value && n.setAttribute("value", "" + we(o.value));
                                            break;
                                        case"select":
                                            r = n, n = o, r.multiple = !!n.multiple, null != (c = n.value) ? De(r, !!n.multiple, c, !1) : null != n.defaultValue && De(r, !!n.multiple, n.defaultValue, !0);
                                            break;
                                        default:
                                            "function" == typeof r.onClick && (n.onclick = Un)
                                    }
                                    Qn(l, o) && Ka(t)
                                }
                                null !== t.ref && (t.effectTag |= 128)
                            } else if (null === t.stateNode) throw a(Error(166));
                            break;
                        case 6:
                            if (n && null != t.stateNode) Wa(n, t, n.memoizedProps, o); else {
                                if ("string" != typeof o && null === t.stateNode) throw a(Error(166));
                                l = Io(Lo.current), Io(Po.current), Ta(t) ? (r = t.stateNode, o = t.memoizedProps, r[ir] = t, r.nodeValue !== o && Ka(t)) : (r = t, (o = (9 === l.nodeType ? l : l.ownerDocument).createTextNode(o))[ir] = t, r.stateNode = o)
                            }
                            break;
                        case 11:
                            break;
                        case 13:
                            if (li(Ho), o = t.memoizedState, (64 & t.effectTag) !== bt) {
                                t.expirationTime = r;
                                break e
                            }
                            r = null !== o, o = !1, null === n ? Ta(t) : (o = null !== (l = n.memoizedState), r || null === l || null !== (l = n.child.sibling) && (null !== (c = t.firstEffect) ? (t.firstEffect = l, l.nextEffect = c) : (t.firstEffect = t.lastEffect = l, l.nextEffect = null), l.effectTag = 8)), r && !o && 0 != (2 & t.mode) && (null === n && !0 !== t.memoizedProps.unstable_avoidThisFallback || 0 != (1 & Ho.current) ? Pl === wl && (Pl = El) : (Pl !== wl && Pl !== El || (Pl = kl), 0 !== Bl && null !== Sl && (Ys(Sl, jl), qs(Sl, Bl)))), (r || o) && (t.effectTag |= 4);
                            break;
                        case 7:
                        case 8:
                        case 12:
                            break;
                        case 4:
                            Bo(), Fa(t);
                            break;
                        case 10:
                            eo(t);
                            break;
                        case 9:
                        case 14:
                            break;
                        case 17:
                            hi(t.type) && mi();
                            break;
                        case 19:
                            if (li(Ho), null === (o = t.memoizedState)) break;
                            if (l = (64 & t.effectTag) !== bt, null === (c = o.rendering)) {
                                if (l) Za(o, !1); else if (Pl !== wl || null !== n && (64 & n.effectTag) !== bt) for (n = t.child; null !== n;) {
                                    if (null !== (c = Fo(n))) {
                                        for (t.effectTag |= 64, Za(o, !1), null !== (o = c.updateQueue) && (t.updateQueue = o, t.effectTag |= 4), t.firstEffect = t.lastEffect = null, o = t.child; null !== o;) n = r, (l = o).effectTag &= yt, l.nextEffect = null, l.firstEffect = null, l.lastEffect = null, null === (c = l.alternate) ? (l.childExpirationTime = 0, l.expirationTime = n, l.child = null, l.memoizedProps = null, l.memoizedState = null, l.updateQueue = null, l.dependencies = null) : (l.childExpirationTime = c.childExpirationTime, l.expirationTime = c.expirationTime, l.child = c.child, l.memoizedProps = c.memoizedProps, l.memoizedState = c.memoizedState, l.updateQueue = c.updateQueue, n = c.dependencies, l.dependencies = null === n ? null : {
                                            expirationTime: n.expirationTime,
                                            firstContext: n.firstContext,
                                            responders: n.responders
                                        }), o = o.sibling;
                                        si(Ho, 1 & Ho.current | 2), t = t.child;
                                        break e
                                    }
                                    n = n.sibling
                                }
                            } else {
                                if (!l) if (null !== (n = Fo(c))) {
                                    if (t.effectTag |= 64, l = !0, Za(o, !0), null === o.tail && "hidden" === o.tailMode) {
                                        null !== (r = n.updateQueue) && (t.updateQueue = r, t.effectTag |= 4), null !== (t = t.lastEffect = o.lastEffect) && (t.nextEffect = null);
                                        break
                                    }
                                } else Ui() > o.tailExpiration && 1 < r && (t.effectTag |= 64, l = !0, Za(o, !1), t.expirationTime = t.childExpirationTime = r - 1);
                                o.isBackwards ? (c.sibling = t.child, t.child = c) : (null !== (r = o.last) ? r.sibling = c : t.child = c, o.last = c)
                            }
                            if (null !== o.tail) {
                                0 === o.tailExpiration && (o.tailExpiration = Ui() + 500), r = o.tail, o.rendering = r, o.tail = r.sibling, o.lastEffect = t.lastEffect, r.sibling = null, o = Ho.current, si(Ho, o = l ? 1 & o | 2 : 1 & o), t = r;
                                break e
                            }
                            break;
                        case 20:
                        case 21:
                            break;
                        default:
                            throw a(Error(156), t.tag)
                    }
                    t = null
                }
                if (r = Al, 1 === jl || 1 !== r.childExpirationTime) {
                    for (o = 0, l = r.child; null !== l;) (n = l.expirationTime) > o && (o = n), (c = l.childExpirationTime) > o && (o = c), l = l.sibling;
                    r.childExpirationTime = o
                }
                if (null !== t) return t;
                null !== e && (2048 & e.effectTag) === bt && (null === e.firstEffect && (e.firstEffect = Al.firstEffect), null !== Al.lastEffect && (null !== e.lastEffect && (e.lastEffect.nextEffect = Al.firstEffect), e.lastEffect = Al.lastEffect), 1 < Al.effectTag && (null !== e.lastEffect ? e.lastEffect.nextEffect = Al : e.firstEffect = Al, e.lastEffect = Al))
            } else {
                if (null !== (t = Qa(Al))) return t.effectTag &= 2047, t;
                null !== e && (e.firstEffect = e.lastEffect = null, e.effectTag |= 2048)
            }
            if (null !== (t = Al.sibling)) return t;
            Al = e
        } while (null !== Al);
        return Pl === wl && (Pl = Ol), null
    }

    function xs(e) {
        var t = e.expirationTime;
        return t > (e = e.childExpirationTime) ? t : e
    }

    function Cs(e) {
        var t = Hi();
        return Ni(99, Es.bind(null, e, t)), null
    }

    function Es(e, t) {
        if (Os(), (Rl & (vl | _l)) !== bl) throw a(Error(327));
        var n = e.finishedWork, r = e.finishedExpirationTime;
        if (null === n) return null;
        if (e.finishedWork = null, e.finishedExpirationTime = 0, n === e.current) throw a(Error(177));
        e.callbackNode = null, e.callbackExpirationTime = 0, e.callbackPriority = 90, e.nextKnownPendingLevel = 0;
        var i = xs(n);
        if (e.firstPendingTime = i, r <= e.lastSuspendedTime ? e.firstSuspendedTime = e.lastSuspendedTime = e.nextKnownPendingLevel = 0 : r <= e.firstSuspendedTime && (e.firstSuspendedTime = r - 1), r <= e.lastPingedTime && (e.lastPingedTime = 0), r <= e.lastExpiredTime && (e.lastExpiredTime = 0), e === Sl && (Al = Sl = null, jl = 0), 1 < n.effectTag ? null !== n.lastEffect ? (n.lastEffect.nextEffect = n, i = n.firstEffect) : i = n : i = n.firstEffect, null !== i) {
            var o = Rl;
            Rl |= _l, gl.current = null, Kn = vn;
            var l = Wn();
            if (Yn(l)) {
                if ("selectionStart" in l) var s = {start: l.selectionStart, end: l.selectionEnd}; else e:{
                    var c = (s = (s = l.ownerDocument) && s.defaultView || window).getSelection && s.getSelection();
                    if (c && 0 !== c.rangeCount) {
                        s = c.anchorNode;
                        var u = c.anchorOffset, f = c.focusNode;
                        c = c.focusOffset;
                        try {
                            s.nodeType, f.nodeType
                        } catch (e) {
                            s = null;
                            break e
                        }
                        var p = 0, d = -1, h = -1, m = 0, g = 0, b = l, y = null;
                        t:for (; ;) {
                            for (var v; b !== s || 0 !== u && 3 !== b.nodeType || (d = p + u), b !== f || 0 !== c && 3 !== b.nodeType || (h = p + c), 3 === b.nodeType && (p += b.nodeValue.length), null !== (v = b.firstChild);) y = b, b = v;
                            for (; ;) {
                                if (b === l) break t;
                                if (y === s && ++m === u && (d = p), y === f && ++g === c && (h = p), null !== (v = b.nextSibling)) break;
                                y = (b = y).parentNode
                            }
                            b = v
                        }
                        s = -1 === d || -1 === h ? null : {start: d, end: h}
                    } else s = null
                }
                s = s || {start: 0, end: 0}
            } else s = null;
            Zn = {focusedElem: l, selectionRange: s}, vn = !1, Fl = i;
            do {
                try {
                    ks()
                } catch (e) {
                    if (null === Fl) throw a(Error(330));
                    Ss(Fl, e), Fl = Fl.nextEffect
                }
            } while (null !== Fl);
            Fl = i;
            do {
                try {
                    for (l = e, s = t; null !== Fl;) {
                        var _ = Fl.effectTag;
                        if (16 & _ && We(Fl.stateNode, ""), 128 & _) {
                            var w = Fl.alternate;
                            if (null !== w) {
                                var x = w.ref;
                                null !== x && ("function" == typeof x ? x(null) : x.current = null)
                            }
                        }
                        switch (_ & (12 | yt | vt)) {
                            case yt:
                                ll(Fl), Fl.effectTag &= ~yt;
                                break;
                            case 6:
                                ll(Fl), Fl.effectTag &= ~yt, cl(Fl.alternate, Fl);
                                break;
                            case vt:
                                Fl.effectTag &= ~vt;
                                break;
                            case 1028:
                                Fl.effectTag &= ~vt, cl(Fl.alternate, Fl);
                                break;
                            case 4:
                                cl(Fl.alternate, Fl);
                                break;
                            case 8:
                                sl(l, u = Fl, s), ol(u)
                        }
                        Fl = Fl.nextEffect
                    }
                } catch (e) {
                    if (null === Fl) throw a(Error(330));
                    Ss(Fl, e), Fl = Fl.nextEffect
                }
            } while (null !== Fl);
            if (x = Zn, w = Wn(), _ = x.focusedElem, s = x.selectionRange, w !== _ && _ && _.ownerDocument && function e(t, n) {
                return !(!t || !n) && (t === n || (!t || 3 !== t.nodeType) && (n && 3 === n.nodeType ? e(t, n.parentNode) : "contains" in t ? t.contains(n) : !!t.compareDocumentPosition && !!(16 & t.compareDocumentPosition(n))))
            }(_.ownerDocument.documentElement, _)) {
                null !== s && Yn(_) && (w = s.start, void 0 === (x = s.end) && (x = w), "selectionStart" in _ ? (_.selectionStart = w, _.selectionEnd = Math.min(x, _.value.length)) : (x = (w = _.ownerDocument || document) && w.defaultView || window).getSelection && (x = x.getSelection(), u = _.textContent.length, l = Math.min(s.start, u), s = void 0 === s.end ? l : Math.min(s.end, u), !x.extend && l > s && (u = s, s = l, l = u), u = Nn(_, l), f = Nn(_, s), u && f && (1 !== x.rangeCount || x.anchorNode !== u.node || x.anchorOffset !== u.offset || x.focusNode !== f.node || x.focusOffset !== f.offset) && ((w = w.createRange()).setStart(u.node, u.offset), x.removeAllRanges(), l > s ? (x.addRange(w), x.extend(f.node, f.offset)) : (w.setEnd(f.node, f.offset), x.addRange(w))))), w = [];
                for (x = _; x = x.parentNode;) 1 === x.nodeType && w.push({
                    element: x,
                    left: x.scrollLeft,
                    top: x.scrollTop
                });
                for ("function" == typeof _.focus && _.focus(), _ = 0; _ < w.length; _++) (x = w[_]).element.scrollLeft = x.left, x.element.scrollTop = x.top
            }
            Zn = null, vn = !!Kn, Kn = null, e.current = n, Fl = i;
            do {
                try {
                    for (_ = r; null !== Fl;) {
                        var C = Fl.effectTag;
                        if (36 & C) {
                            var E = Fl.alternate;
                            switch (x = _, (w = Fl).tag) {
                                case 0:
                                case 11:
                                case 15:
                                    rl(16, 32, w);
                                    break;
                                case 1:
                                    var k = w.stateNode;
                                    if (4 & w.effectTag) if (null === E) k.componentDidMount(); else {
                                        var O = w.elementType === w.type ? E.memoizedProps : Vi(w.type, E.memoizedProps);
                                        k.componentDidUpdate(O, E.memoizedState, k.__reactInternalSnapshotBeforeUpdate)
                                    }
                                    var T = w.updateQueue;
                                    null !== T && mo(0, T, k);
                                    break;
                                case 3:
                                    var R = w.updateQueue;
                                    if (null !== R) {
                                        if (l = null, null !== w.child) switch (w.child.tag) {
                                            case 5:
                                                l = w.child.stateNode;
                                                break;
                                            case 1:
                                                l = w.child.stateNode
                                        }
                                        mo(0, R, l)
                                    }
                                    break;
                                case 5:
                                    var S = w.stateNode;
                                    null === E && 4 & w.effectTag && (x = S, Qn(w.type, w.memoizedProps) && x.focus());
                                    break;
                                case 6:
                                case 4:
                                case 12:
                                    break;
                                case 13:
                                    if (null === w.memoizedState) {
                                        var A = w.alternate;
                                        if (null !== A) {
                                            var j = A.memoizedState;
                                            if (null !== j) {
                                                var P = j.dehydrated;
                                                null !== P && gt(P)
                                            }
                                        }
                                    }
                                    break;
                                case 19:
                                case 17:
                                case 20:
                                case 21:
                                    break;
                                default:
                                    throw a(Error(163))
                            }
                        }
                        if (128 & C) {
                            var D = (w = Fl).ref;
                            if (null !== D) {
                                var L = w.stateNode;
                                switch (w.tag) {
                                    case 5:
                                        var I = L;
                                        break;
                                    default:
                                        I = L
                                }
                                "function" == typeof D ? D(I) : D.current = I
                            }
                        }
                        Fl = Fl.nextEffect
                    }
                } catch (e) {
                    if (null === Fl) throw a(Error(330));
                    Ss(Fl, e), Fl = Fl.nextEffect
                }
            } while (null !== Fl);
            Fl = null, Li(), Rl = o
        } else e.current = n;
        if (ql) ql = !1, $l = e, Vl = t; else for (Fl = i; null !== Fl;) t = Fl.nextEffect, Fl.nextEffect = null, Fl = t;
        if (0 === (t = e.firstPendingTime) && (Yl = null), 1073741823 === t ? e === Zl ? Kl++ : (Kl = 0, Zl = e) : Kl = 0, "function" == typeof Ps && Ps(n.stateNode, r), os(e), Nl) throw Nl = !1, e = Wl, Wl = null, e;
        return (Rl & yl) !== bl ? null : (qi(), null)
    }

    function ks() {
        for (; null !== Fl;) {
            var e = Fl.effectTag;
            (256 & e) !== bt && nl(Fl.alternate, Fl), (512 & e) === bt || ql || (ql = !0, Wi(97, (function () {
                return Os(), null
            }))), Fl = Fl.nextEffect
        }
    }

    function Os() {
        if (90 !== Vl) {
            var e = 97 < Vl ? 97 : Vl;
            return Vl = 90, Ni(e, Ts)
        }
    }

    function Ts() {
        if (null === $l) return !1;
        var e = $l;
        if ($l = null, (Rl & (vl | _l)) !== bl) throw a(Error(331));
        var t = Rl;
        for (Rl |= _l, e = e.current.firstEffect; null !== e;) {
            try {
                var n = e;
                if ((512 & n.effectTag) !== bt) switch (n.tag) {
                    case 0:
                    case 11:
                    case 15:
                        rl(128, 0, n), rl(0, 64, n)
                }
            } catch (t) {
                if (null === e) throw a(Error(330));
                Ss(e, t)
            }
            n = e.nextEffect, e.nextEffect = null, e = n
        }
        return Rl = t, qi(), !0
    }

    function Rs(e, t, n) {
        co(e, t = pl(e, t = Ga(n, t), 1073741823)), null !== (e = rs(e, 1073741823)) && os(e)
    }

    function Ss(e, t) {
        if (3 === e.tag) Rs(e, e, t); else for (var n = e.return; null !== n;) {
            if (3 === n.tag) {
                Rs(n, e, t);
                break
            }
            if (1 === n.tag) {
                var r = n.stateNode;
                if ("function" == typeof n.type.getDerivedStateFromError || "function" == typeof r.componentDidCatch && (null === Yl || !Yl.has(r))) {
                    co(n, e = dl(n, e = Ga(t, e), 1073741823)), null !== (n = rs(n, 1073741823)) && os(n);
                    break
                }
            }
            n = n.return
        }
    }

    function As(e, t, n) {
        var r = e.pingCache;
        null !== r && r.delete(t), Sl === e && jl === n ? Pl === kl || Pl === El && 1073741823 === Ll && Ui() - Ul < Hl ? ds(e, jl) : zl = !0 : Ws(e, n) && (0 !== (t = e.lastPingedTime) && t < n || (e.lastPingedTime = n, e.finishedExpirationTime === n && (e.finishedExpirationTime = 0, e.finishedWork = null), os(e)))
    }

    function js(e, t) {
        var n = e.stateNode;
        null !== n && n.delete(t), 1 === (t = 1) && (t = Jl(t = Gl(), e, null)), null !== (e = rs(e, t)) && os(e)
    }

    es = function (e, t, n) {
        var r = t.expirationTime;
        if (null !== e) {
            var i = t.pendingProps;
            if (e.memoizedProps !== i || fi.current) Aa = !0; else {
                if (r < n) {
                    switch (Aa = !1, t.tag) {
                        case 3:
                            Ua(t), Ra();
                            break;
                        case 5:
                            if (zo(t), 4 & t.mode && 1 !== n && i.hidden) return t.expirationTime = t.childExpirationTime = 1, null;
                            break;
                        case 1:
                            hi(t.type) && vi(t);
                            break;
                        case 4:
                            Mo(t, t.stateNode.containerInfo);
                            break;
                        case 10:
                            Ji(t, t.memoizedProps.value);
                            break;
                        case 13:
                            if (null !== t.memoizedState) return 0 !== (r = t.child.childExpirationTime) && r >= n ? qa(e, t, n) : (si(Ho, 1 & Ho.current), null !== (t = Xa(e, t, n)) ? t.sibling : null);
                            si(Ho, 1 & Ho.current);
                            break;
                        case 19:
                            if (r = t.childExpirationTime >= n, (64 & e.effectTag) !== bt) {
                                if (r) return Va(e, t, n);
                                t.effectTag |= 64
                            }
                            if (null !== (i = t.memoizedState) && (i.rendering = null, i.tail = null), si(Ho, Ho.current), !r) return null
                    }
                    return Xa(e, t, n)
                }
                Aa = !1
            }
        } else Aa = !1;
        switch (t.expirationTime = 0, t.tag) {
            case 2:
                if (r = t.type, null !== e && (e.alternate = null, t.alternate = null, t.effectTag |= yt), e = t.pendingProps, i = di(t, ui.current), no(t, n), i = oa(null, t, r, e, i, n), t.effectTag |= 1, "object" == typeof i && null !== i && "function" == typeof i.render && void 0 === i.$$typeof) {
                    if (t.tag = 1, aa(), hi(r)) {
                        var o = !0;
                        vi(t)
                    } else o = !1;
                    t.memoizedState = null !== i.state && void 0 !== i.state ? i.state : null;
                    var l = r.getDerivedStateFromProps;
                    "function" == typeof l && vo(t, r, l, e), i.updater = _o, t.stateNode = i, i._reactInternalFiber = t, Eo(t, r, e, n), t = za(null, t, r, !0, o, n)
                } else t.tag = 0, ja(null, t, i, n), t = t.child;
                return t;
            case 16:
                if (i = t.elementType, null !== e && (e.alternate = null, t.alternate = null, t.effectTag |= yt), e = t.pendingProps, function (e) {
                    if (-1 === e._status) {
                        e._status = 0;
                        var t = e._ctor;
                        t = t(), e._result = t, t.then((function (t) {
                            0 === e._status && (t = t.default, e._status = 1, e._result = t)
                        }), (function (t) {
                            0 === e._status && (e._status = 2, e._result = t)
                        }))
                    }
                }(i), 1 !== i._status) throw i._result;
                switch (i = i._result, t.type = i, o = t.tag = function (e) {
                    if ("function" == typeof e) return Ms(e) ? 1 : 0;
                    if (null != e) {
                        if ((e = e.$$typeof) === Y) return 11;
                        if (e === V) return 14
                    }
                    return 2
                }(i), e = Vi(i, e), o) {
                    case 0:
                        t = Ma(null, t, i, e, n);
                        break;
                    case 1:
                        t = Ba(null, t, i, e, n);
                        break;
                    case 11:
                        t = Pa(null, t, i, e, n);
                        break;
                    case 14:
                        t = Da(null, t, i, Vi(i.type, e), r, n);
                        break;
                    default:
                        throw a(Error(306), i, "")
                }
                return t;
            case 0:
                return r = t.type, i = t.pendingProps, Ma(e, t, r, i = t.elementType === r ? i : Vi(r, i), n);
            case 1:
                return r = t.type, i = t.pendingProps, Ba(e, t, r, i = t.elementType === r ? i : Vi(r, i), n);
            case 3:
                if (Ua(t), null === (r = t.updateQueue)) throw a(Error(282));
                if (i = null !== (i = t.memoizedState) ? i.element : null, ho(t, r, t.pendingProps, null, n), (r = t.memoizedState.element) === i) Ra(), t = Xa(e, t, n); else {
                    if ((i = t.stateNode.hydrate) && (wa = tr(t.stateNode.containerInfo.firstChild), _a = t, i = xa = !0), i) for (n = Ao(t, null, r, n), t.child = n; n;) n.effectTag = n.effectTag & ~yt | vt, n = n.sibling; else ja(e, t, r, n), Ra();
                    t = t.child
                }
                return t;
            case 5:
                return zo(t), null === e && ka(t), r = t.type, i = t.pendingProps, o = null !== e ? e.memoizedProps : null, l = i.children, Gn(r, i) ? l = null : null !== o && Gn(r, o) && (t.effectTag |= 16), Ia(e, t), 4 & t.mode && 1 !== n && i.hidden ? (t.expirationTime = t.childExpirationTime = 1, t = null) : (ja(e, t, l, n), t = t.child), t;
            case 6:
                return null === e && ka(t), null;
            case 13:
                return qa(e, t, n);
            case 4:
                return Mo(t, t.stateNode.containerInfo), r = t.pendingProps, null === e ? t.child = So(t, null, r, n) : ja(e, t, r, n), t.child;
            case 11:
                return r = t.type, i = t.pendingProps, Pa(e, t, r, i = t.elementType === r ? i : Vi(r, i), n);
            case 7:
                return ja(e, t, t.pendingProps, n), t.child;
            case 8:
            case 12:
                return ja(e, t, t.pendingProps.children, n), t.child;
            case 10:
                e:{
                    if (r = t.type._context, i = t.pendingProps, l = t.memoizedProps, Ji(t, o = i.value), null !== l) {
                        var s = l.value;
                        if (0 === (o = Xr(s, o) ? 0 : 0 | ("function" == typeof r._calculateChangedBits ? r._calculateChangedBits(s, o) : 1073741823))) {
                            if (l.children === i.children && !fi.current) {
                                t = Xa(e, t, n);
                                break e
                            }
                        } else for (null !== (s = t.child) && (s.return = t); null !== s;) {
                            var c = s.dependencies;
                            if (null !== c) {
                                l = s.child;
                                for (var u = c.firstContext; null !== u;) {
                                    if (u.context === r && 0 != (u.observedBits & o)) {
                                        1 === s.tag && ((u = lo(n, null)).tag = 2, co(s, u)), s.expirationTime < n && (s.expirationTime = n), null !== (u = s.alternate) && u.expirationTime < n && (u.expirationTime = n), to(s.return, n), c.expirationTime < n && (c.expirationTime = n);
                                        break
                                    }
                                    u = u.next
                                }
                            } else l = 10 === s.tag && s.type === t.type ? null : s.child;
                            if (null !== l) l.return = s; else for (l = s; null !== l;) {
                                if (l === t) {
                                    l = null;
                                    break
                                }
                                if (null !== (s = l.sibling)) {
                                    s.return = l.return, l = s;
                                    break
                                }
                                l = l.return
                            }
                            s = l
                        }
                    }
                    ja(e, t, i.children, n), t = t.child
                }
                return t;
            case 9:
                return i = t.type, r = (o = t.pendingProps).children, no(t, n), r = r(i = ro(i, o.unstable_observedBits)), t.effectTag |= 1, ja(e, t, r, n), t.child;
            case 14:
                return o = Vi(i = t.type, t.pendingProps), Da(e, t, i, o = Vi(i.type, o), r, n);
            case 15:
                return La(e, t, t.type, t.pendingProps, r, n);
            case 17:
                return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Vi(r, i), null !== e && (e.alternate = null, t.alternate = null, t.effectTag |= yt), t.tag = 1, hi(r) ? (e = !0, vi(t)) : e = !1, no(t, n), xo(t, r, i), Eo(t, r, i, n), za(null, t, r, !0, e, n);
            case 19:
                return Va(e, t, n)
        }
        throw a(Error(156), t.tag)
    };
    var Ps = null, Ds = null;

    function Ls(e, t, n, r) {
        this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.effectTag = bt, this.lastEffect = this.firstEffect = this.nextEffect = null, this.childExpirationTime = this.expirationTime = 0, this.alternate = null
    }

    function Is(e, t, n, r) {
        return new Ls(e, t, n, r)
    }

    function Ms(e) {
        return !(!(e = e.prototype) || !e.isReactComponent)
    }

    function Bs(e, t) {
        var n = e.alternate;
        return null === n ? ((n = Is(e.tag, t, e.key, e.mode)).elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.effectTag = bt, n.nextEffect = null, n.firstEffect = null, n.lastEffect = null), n.childExpirationTime = e.childExpirationTime, n.expirationTime = e.expirationTime, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = null === t ? null : {
            expirationTime: t.expirationTime,
            firstContext: t.firstContext,
            responders: t.responders
        }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n
    }

    function zs(e, t, n, r, i, o) {
        var l = 2;
        if (r = e, "function" == typeof e) Ms(e) && (l = 1); else if ("string" == typeof e) l = 5; else e:switch (e) {
            case z:
                return Us(n.children, i, o, t);
            case W:
                l = 8, i |= 7;
                break;
            case U:
                l = 8, i |= 1;
                break;
            case H:
                return (e = Is(12, n, t, 8 | i)).elementType = H, e.type = H, e.expirationTime = o, e;
            case q:
                return (e = Is(13, n, t, i)).type = q, e.elementType = q, e.expirationTime = o, e;
            case $:
                return (e = Is(19, n, t, i)).elementType = $, e.expirationTime = o, e;
            default:
                if ("object" == typeof e && null !== e) switch (e.$$typeof) {
                    case F:
                        l = 10;
                        break e;
                    case N:
                        l = 9;
                        break e;
                    case Y:
                        l = 11;
                        break e;
                    case V:
                        l = 14;
                        break e;
                    case X:
                        l = 16, r = null;
                        break e
                }
                throw a(Error(130), null == e ? e : typeof e, "")
        }
        return (t = Is(l, n, t, i)).elementType = e, t.type = r, t.expirationTime = o, t
    }

    function Us(e, t, n, r) {
        return (e = Is(7, e, r, t)).expirationTime = n, e
    }

    function Hs(e, t, n) {
        return (e = Is(6, e, null, t)).expirationTime = n, e
    }

    function Fs(e, t, n) {
        return (t = Is(4, null !== e.children ? e.children : [], e.key, t)).expirationTime = n, t.stateNode = {
            containerInfo: e.containerInfo,
            pendingChildren: null,
            implementation: e.implementation
        }, t
    }

    function Ns(e, t, n) {
        this.tag = t, this.current = null, this.containerInfo = e, this.pingCache = this.pendingChildren = null, this.finishedExpirationTime = 0, this.finishedWork = null, this.timeoutHandle = -1, this.pendingContext = this.context = null, this.hydrate = n, this.callbackNode = this.firstBatch = null, this.callbackPriority = 90, this.lastExpiredTime = this.lastPingedTime = this.nextKnownPendingLevel = this.lastSuspendedTime = this.firstSuspendedTime = this.firstPendingTime = 0
    }

    function Ws(e, t) {
        var n = e.firstSuspendedTime;
        return e = e.lastSuspendedTime, 0 !== n && n >= t && e <= t
    }

    function Ys(e, t) {
        var n = e.firstSuspendedTime, r = e.lastSuspendedTime;
        n < t && (e.firstSuspendedTime = t), (r > t || 0 === n) && (e.lastSuspendedTime = t), t <= e.lastPingedTime && (e.lastPingedTime = 0), t <= e.lastExpiredTime && (e.lastExpiredTime = 0)
    }

    function qs(e, t) {
        t > e.firstPendingTime && (e.firstPendingTime = t);
        var n = e.firstSuspendedTime;
        0 !== n && (t >= n ? e.firstSuspendedTime = e.lastSuspendedTime = e.nextKnownPendingLevel = 0 : t >= e.lastSuspendedTime && (e.lastSuspendedTime = t + 1), t > e.nextKnownPendingLevel && (e.nextKnownPendingLevel = t))
    }

    function $s(e, t) {
        var n = e.lastExpiredTime;
        (0 === n || n > t) && (e.lastExpiredTime = t)
    }

    function Vs(e, t, n, r, i, o) {
        var l = t.current;
        e:if (n) {
            t:{
                if (_t(n = n._reactInternalFiber) !== n || 1 !== n.tag) throw a(Error(170));
                var s = n;
                do {
                    switch (s.tag) {
                        case 3:
                            s = s.stateNode.context;
                            break t;
                        case 1:
                            if (hi(s.type)) {
                                s = s.stateNode.__reactInternalMemoizedMergedChildContext;
                                break t
                            }
                    }
                    s = s.return
                } while (null !== s);
                throw a(Error(171))
            }
            if (1 === n.tag) {
                var c = n.type;
                if (hi(c)) {
                    n = yi(n, c, s);
                    break e
                }
            }
            n = s
        } else n = ci;
        return null === t.context ? t.context = n : t.pendingContext = n, t = o, (i = lo(r, i)).payload = {element: e}, null !== (t = void 0 === t ? null : t) && (i.callback = t), co(l, i), ns(l, r), r
    }

    function Xs(e, t, n, r) {
        var i = t.current, o = Gl(), a = bo.suspense;
        return Vs(e, t, n, i = Jl(o, i, a), a, r)
    }

    function Ks(e) {
        if (!(e = e.current).child) return null;
        switch (e.child.tag) {
            case 5:
            default:
                return e.child.stateNode
        }
    }

    function Zs(e) {
        var t = 1073741821 - 25 * (1 + ((1073741821 - Gl() + 500) / 25 | 0));
        t <= ts && --t, this._expirationTime = ts = t, this._root = e, this._callbacks = this._next = null, this._hasChildren = this._didComplete = !1, this._children = null, this._defer = !0
    }

    function Qs() {
        this._callbacks = null, this._didCommit = !1, this._onCommit = this._onCommit.bind(this)
    }

    function Gs(e, t, n) {
        var r = new Ns(e, t, n = null != n && !0 === n.hydrate), i = Is(3, null, null, 2 === t ? 7 : 1 === t ? 3 : 0);
        return r.current = i, i.stateNode = r, e[ar] = r.current, n && 0 !== t && function (e) {
            var t = Sn(e);
            lt.forEach((function (n) {
                An(n, e, t)
            })), st.forEach((function (n) {
                An(n, e, t)
            }))
        }(9 === e.nodeType ? e : e.ownerDocument), r
    }

    function Js(e, t, n) {
        this._internalRoot = Gs(e, t, n)
    }

    function ec(e, t) {
        this._internalRoot = Gs(e, 2, t)
    }

    function tc(e) {
        return !(!e || 1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType && (8 !== e.nodeType || " react-mount-point-unstable " !== e.nodeValue))
    }

    function nc(e, t, n, r, i) {
        var o = n._reactRootContainer;
        if (o) {
            var a = o._internalRoot;
            if ("function" == typeof i) {
                var l = i;
                i = function () {
                    var e = Ks(a);
                    l.call(e)
                }
            }
            Xs(t, a, e, i)
        } else {
            if (o = n._reactRootContainer = function (e, t) {
                if (t || (t = !(!(t = e ? 9 === e.nodeType ? e.documentElement : e.firstChild : null) || 1 !== t.nodeType || !t.hasAttribute("data-reactroot"))), !t) for (var n; n = e.lastChild;) e.removeChild(n);
                return new Js(e, 0, t ? {hydrate: !0} : void 0)
            }(n, r), a = o._internalRoot, "function" == typeof i) {
                var s = i;
                i = function () {
                    var e = Ks(a);
                    s.call(e)
                }
            }
            ps((function () {
                Xs(t, a, e, i)
            }))
        }
        return Ks(a)
    }

    function rc(e, t) {
        var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
        if (!tc(t)) throw a(Error(200));
        return function (e, t, n) {
            var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
            return {$$typeof: B, key: null == r ? null : "" + r, children: e, containerInfo: t, implementation: n}
        }(e, t, null, n)
    }

    ee = function (e, t, n) {
        switch (t) {
            case"input":
                if (Se(e, n), t = n.name, "radio" === n.type && null != t) {
                    for (n = e; n.parentNode;) n = n.parentNode;
                    for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
                        var r = n[t];
                        if (r !== e && r.form === e.form) {
                            var i = ur(r);
                            if (!i) throw a(Error(90));
                            ke(r), Se(r, i)
                        }
                    }
                }
                break;
            case"textarea":
                Me(e, n);
                break;
            case"select":
                null != (t = n.value) && De(e, !!n.multiple, t, !1)
        }
    }, Zs.prototype.render = function (e) {
        if (!this._defer) throw a(Error(250));
        this._hasChildren = !0, this._children = e;
        var t = this._root._internalRoot, n = this._expirationTime, r = new Qs;
        return Vs(e, t, null, n, null, r._onCommit), r
    }, Zs.prototype.then = function (e) {
        if (this._didComplete) e(); else {
            var t = this._callbacks;
            null === t && (t = this._callbacks = []), t.push(e)
        }
    }, Zs.prototype.commit = function () {
        var e = this._root._internalRoot, t = e.firstBatch;
        if (!this._defer || null === t) throw a(Error(251));
        if (this._hasChildren) {
            var n = this._expirationTime;
            if (t !== this) {
                this._hasChildren && (n = this._expirationTime = t._expirationTime, this.render(this._children));
                for (var r = null, i = t; i !== this;) r = i, i = i._next;
                if (null === r) throw a(Error(251));
                r._next = i._next, this._next = t, e.firstBatch = this
            }
            if (this._defer = !1, t = n, (Rl & (vl | _l)) !== bl) throw a(Error(253));
            $s(e, t), os(e), qi(), t = this._next, this._next = null, null !== (t = e.firstBatch = t) && t._hasChildren && t.render(t._children)
        } else this._next = null, this._defer = !1
    }, Zs.prototype._onComplete = function () {
        if (!this._didComplete) {
            this._didComplete = !0;
            var e = this._callbacks;
            if (null !== e) for (var t = 0; t < e.length; t++) (0, e[t])()
        }
    }, Qs.prototype.then = function (e) {
        if (this._didCommit) e(); else {
            var t = this._callbacks;
            null === t && (t = this._callbacks = []), t.push(e)
        }
    }, Qs.prototype._onCommit = function () {
        if (!this._didCommit) {
            this._didCommit = !0;
            var e = this._callbacks;
            if (null !== e) for (var t = 0; t < e.length; t++) {
                var n = e[t];
                if ("function" != typeof n) throw a(Error(191), n);
                n()
            }
        }
    }, ec.prototype.render = Js.prototype.render = function (e, t) {
        var n = this._internalRoot, r = new Qs;
        return null !== (t = void 0 === t ? null : t) && r.then(t), Xs(e, n, null, r._onCommit), r
    }, ec.prototype.unmount = Js.prototype.unmount = function (e) {
        var t = this._internalRoot, n = new Qs;
        return null !== (e = void 0 === e ? null : e) && n.then(e), Xs(null, t, null, n._onCommit), n
    }, ec.prototype.createBatch = function () {
        var e = new Zs(this), t = e._expirationTime, n = this._internalRoot, r = n.firstBatch;
        if (null === r) n.firstBatch = e, e._next = null; else {
            for (n = null; null !== r && r._expirationTime >= t;) n = r, r = r._next;
            e._next = r, null !== n && (n._next = e)
        }
        return e
    }, ae = us, le = fs, se = ss, ce = function (e, t) {
        var n = Rl;
        Rl |= 2;
        try {
            return e(t)
        } finally {
            (Rl = n) === bl && qi()
        }
    };
    var ic, oc, ac = {
        createPortal: rc,
        findDOMNode: function (e) {
            if (null == e) e = null; else if (1 !== e.nodeType) {
                var t = e._reactInternalFiber;
                if (void 0 === t) {
                    if ("function" == typeof e.render) throw a(Error(188));
                    throw a(Error(268), Object.keys(e))
                }
                e = null === (e = xt(t)) ? null : e.stateNode
            }
            return e
        },
        hydrate: function (e, t, n) {
            if (!tc(t)) throw a(Error(200));
            return nc(null, e, t, !0, n)
        },
        render: function (e, t, n) {
            if (!tc(t)) throw a(Error(200));
            return nc(null, e, t, !1, n)
        },
        unstable_renderSubtreeIntoContainer: function (e, t, n, r) {
            if (!tc(n)) throw a(Error(200));
            if (null == e || void 0 === e._reactInternalFiber) throw a(Error(38));
            return nc(e, t, n, !1, r)
        },
        unmountComponentAtNode: function (e) {
            if (!tc(e)) throw a(Error(40));
            return !!e._reactRootContainer && (ps((function () {
                nc(null, null, e, !1, (function () {
                    e._reactRootContainer = null
                }))
            })), !0)
        },
        unstable_createPortal: function () {
            return rc.apply(void 0, arguments)
        },
        unstable_batchedUpdates: us,
        unstable_interactiveUpdates: function (e, t, n, r) {
            return ss(), fs(e, t, n, r)
        },
        unstable_discreteUpdates: fs,
        unstable_flushDiscreteUpdates: ss,
        flushSync: function (e, t) {
            if ((Rl & (vl | _l)) !== bl) throw a(Error(187));
            var n = Rl;
            Rl |= 1;
            try {
                return Ni(99, e.bind(null, t))
            } finally {
                Rl = n, qi()
            }
        },
        unstable_createRoot: function (e, t) {
            if (!tc(e)) throw a(Error(299), "unstable_createRoot");
            return new ec(e, t)
        },
        unstable_createSyncRoot: function (e, t) {
            if (!tc(e)) throw a(Error(299), "unstable_createRoot");
            return new Js(e, 1, t)
        },
        unstable_flushControlled: function (e) {
            var t = Rl;
            Rl |= 1;
            try {
                Ni(99, e)
            } finally {
                (Rl = t) === bl && qi()
            }
        },
        __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: {
            Events: [sr, cr, ur, j.injectEventPluginsByName, p, St, function (e) {
                T(e, Rt)
            }, ie, oe, kn, A, Os, {current: !1}]
        }
    };
    oc = (ic = {
        findFiberByHostInstance: lr,
        bundleType: 0,
        version: "16.10.1",
        rendererPackageName: "react-dom"
    }).findFiberByHostInstance, function (e) {
        if ("undefined" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) return !1;
        var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (t.isDisabled || !t.supportsFiber) return !0;
        try {
            var n = t.inject(e);
            Ps = function (e) {
                try {
                    t.onCommitFiberRoot(n, e, void 0, 64 == (64 & e.current.effectTag))
                } catch (e) {
                }
            }, Ds = function (e) {
                try {
                    t.onCommitFiberUnmount(n, e)
                } catch (e) {
                }
            }
        } catch (e) {
        }
    }(i({}, ic, {
        overrideHookState: null,
        overrideProps: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: D.ReactCurrentDispatcher,
        findHostInstanceByFiber: function (e) {
            return null === (e = xt(e)) ? null : e.stateNode
        },
        findFiberByHostInstance: function (e) {
            return oc ? oc(e) : null
        },
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null
    }));
    var lc = {default: ac}, sc = lc && ac || lc;
    e.exports = sc.default || sc
}, function (e, t, n) {
    "use strict";
    /** @license React v16.10.1
     * react.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */var r = n(10), i = "function" == typeof Symbol && Symbol.for, o = i ? Symbol.for("react.element") : 60103,
        a = i ? Symbol.for("react.portal") : 60106, l = i ? Symbol.for("react.fragment") : 60107,
        s = i ? Symbol.for("react.strict_mode") : 60108, c = i ? Symbol.for("react.profiler") : 60114,
        u = i ? Symbol.for("react.provider") : 60109, f = i ? Symbol.for("react.context") : 60110,
        p = i ? Symbol.for("react.forward_ref") : 60112, d = i ? Symbol.for("react.suspense") : 60113,
        h = i ? Symbol.for("react.suspense_list") : 60120, m = i ? Symbol.for("react.memo") : 60115,
        g = i ? Symbol.for("react.lazy") : 60116;
    i && Symbol.for("react.fundamental"), i && Symbol.for("react.responder"), i && Symbol.for("react.scope");
    var b = "function" == typeof Symbol && Symbol.iterator;

    function y(e) {
        for (var t = e.message, n = "https://reactjs.org/docs/error-decoder.html?invariant=" + t, r = 1; r < arguments.length; r++) n += "&args[]=" + encodeURIComponent(arguments[r]);
        return e.message = "Minified React error #" + t + "; visit " + n + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ", e
    }

    var v = {
        isMounted: function () {
            return !1
        }, enqueueForceUpdate: function () {
        }, enqueueReplaceState: function () {
        }, enqueueSetState: function () {
        }
    }, _ = {};

    function w(e, t, n) {
        this.props = e, this.context = t, this.refs = _, this.updater = n || v
    }

    function x() {
    }

    function C(e, t, n) {
        this.props = e, this.context = t, this.refs = _, this.updater = n || v
    }

    w.prototype.isReactComponent = {}, w.prototype.setState = function (e, t) {
        if ("object" != typeof e && "function" != typeof e && null != e) throw y(Error(85));
        this.updater.enqueueSetState(this, e, t, "setState")
    }, w.prototype.forceUpdate = function (e) {
        this.updater.enqueueForceUpdate(this, e, "forceUpdate")
    }, x.prototype = w.prototype;
    var E = C.prototype = new x;
    E.constructor = C, r(E, w.prototype), E.isPureReactComponent = !0;
    var k = {current: null}, O = {suspense: null}, T = {current: null}, R = Object.prototype.hasOwnProperty,
        S = {key: !0, ref: !0, __self: !0, __source: !0};

    function A(e, t, n) {
        var r, i = {}, a = null, l = null;
        if (null != t) for (r in void 0 !== t.ref && (l = t.ref), void 0 !== t.key && (a = "" + t.key), t) R.call(t, r) && !S.hasOwnProperty(r) && (i[r] = t[r]);
        var s = arguments.length - 2;
        if (1 === s) i.children = n; else if (1 < s) {
            for (var c = Array(s), u = 0; u < s; u++) c[u] = arguments[u + 2];
            i.children = c
        }
        if (e && e.defaultProps) for (r in s = e.defaultProps) void 0 === i[r] && (i[r] = s[r]);
        return {$$typeof: o, type: e, key: a, ref: l, props: i, _owner: T.current}
    }

    function j(e) {
        return "object" == typeof e && null !== e && e.$$typeof === o
    }

    var P = /\/+/g, D = [];

    function L(e, t, n, r) {
        if (D.length) {
            var i = D.pop();
            return i.result = e, i.keyPrefix = t, i.func = n, i.context = r, i.count = 0, i
        }
        return {result: e, keyPrefix: t, func: n, context: r, count: 0}
    }

    function I(e) {
        e.result = null, e.keyPrefix = null, e.func = null, e.context = null, e.count = 0, 10 > D.length && D.push(e)
    }

    function M(e, t, n) {
        return null == e ? 0 : function e(t, n, r, i) {
            var l = typeof t;
            "undefined" !== l && "boolean" !== l || (t = null);
            var s = !1;
            if (null === t) s = !0; else switch (l) {
                case"string":
                case"number":
                    s = !0;
                    break;
                case"object":
                    switch (t.$$typeof) {
                        case o:
                        case a:
                            s = !0
                    }
            }
            if (s) return r(i, t, "" === n ? "." + B(t, 0) : n), 1;
            if (s = 0, n = "" === n ? "." : n + ":", Array.isArray(t)) for (var c = 0; c < t.length; c++) {
                var u = n + B(l = t[c], c);
                s += e(l, u, r, i)
            } else if (null === t || "object" != typeof t ? u = null : u = "function" == typeof (u = b && t[b] || t["@@iterator"]) ? u : null, "function" == typeof u) for (t = u.call(t), c = 0; !(l = t.next()).done;) s += e(l = l.value, u = n + B(l, c++), r, i); else if ("object" === l) throw r = "" + t, y(Error(31), "[object Object]" === r ? "object with keys {" + Object.keys(t).join(", ") + "}" : r, "");
            return s
        }(e, "", t, n)
    }

    function B(e, t) {
        return "object" == typeof e && null !== e && null != e.key ? function (e) {
            var t = {"=": "=0", ":": "=2"};
            return "$" + ("" + e).replace(/[=:]/g, (function (e) {
                return t[e]
            }))
        }(e.key) : t.toString(36)
    }

    function z(e, t) {
        e.func.call(e.context, t, e.count++)
    }

    function U(e, t, n) {
        var r = e.result, i = e.keyPrefix;
        e = e.func.call(e.context, t, e.count++), Array.isArray(e) ? H(e, r, n, (function (e) {
            return e
        })) : null != e && (j(e) && (e = function (e, t) {
            return {$$typeof: o, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner}
        }(e, i + (!e.key || t && t.key === e.key ? "" : ("" + e.key).replace(P, "$&/") + "/") + n)), r.push(e))
    }

    function H(e, t, n, r, i) {
        var o = "";
        null != n && (o = ("" + n).replace(P, "$&/") + "/"), M(e, U, t = L(t, o, r, i)), I(t)
    }

    function F() {
        var e = k.current;
        if (null === e) throw y(Error(321));
        return e
    }

    var N = {
        Children: {
            map: function (e, t, n) {
                if (null == e) return e;
                var r = [];
                return H(e, r, null, t, n), r
            }, forEach: function (e, t, n) {
                if (null == e) return e;
                M(e, z, t = L(null, null, t, n)), I(t)
            }, count: function (e) {
                return M(e, (function () {
                    return null
                }), null)
            }, toArray: function (e) {
                var t = [];
                return H(e, t, null, (function (e) {
                    return e
                })), t
            }, only: function (e) {
                if (!j(e)) throw y(Error(143));
                return e
            }
        },
        createRef: function () {
            return {current: null}
        },
        Component: w,
        PureComponent: C,
        createContext: function (e, t) {
            return void 0 === t && (t = null), (e = {
                $$typeof: f,
                _calculateChangedBits: t,
                _currentValue: e,
                _currentValue2: e,
                _threadCount: 0,
                Provider: null,
                Consumer: null
            }).Provider = {$$typeof: u, _context: e}, e.Consumer = e
        },
        forwardRef: function (e) {
            return {$$typeof: p, render: e}
        },
        lazy: function (e) {
            return {$$typeof: g, _ctor: e, _status: -1, _result: null}
        },
        memo: function (e, t) {
            return {$$typeof: m, type: e, compare: void 0 === t ? null : t}
        },
        useCallback: function (e, t) {
            return F().useCallback(e, t)
        },
        useContext: function (e, t) {
            return F().useContext(e, t)
        },
        useEffect: function (e, t) {
            return F().useEffect(e, t)
        },
        useImperativeHandle: function (e, t, n) {
            return F().useImperativeHandle(e, t, n)
        },
        useDebugValue: function () {
        },
        useLayoutEffect: function (e, t) {
            return F().useLayoutEffect(e, t)
        },
        useMemo: function (e, t) {
            return F().useMemo(e, t)
        },
        useReducer: function (e, t, n) {
            return F().useReducer(e, t, n)
        },
        useRef: function (e) {
            return F().useRef(e)
        },
        useState: function (e) {
            return F().useState(e)
        },
        Fragment: l,
        Profiler: c,
        StrictMode: s,
        Suspense: d,
        unstable_SuspenseList: h,
        createElement: A,
        cloneElement: function (e, t, n) {
            if (null == e) throw y(Error(267), e);
            var i = r({}, e.props), a = e.key, l = e.ref, s = e._owner;
            if (null != t) {
                if (void 0 !== t.ref && (l = t.ref, s = T.current), void 0 !== t.key && (a = "" + t.key), e.type && e.type.defaultProps) var c = e.type.defaultProps;
                for (u in t) R.call(t, u) && !S.hasOwnProperty(u) && (i[u] = void 0 === t[u] && void 0 !== c ? c[u] : t[u])
            }
            var u = arguments.length - 2;
            if (1 === u) i.children = n; else if (1 < u) {
                c = Array(u);
                for (var f = 0; f < u; f++) c[f] = arguments[f + 2];
                i.children = c
            }
            return {$$typeof: o, type: e.type, key: a, ref: l, props: i, _owner: s}
        },
        createFactory: function (e) {
            var t = A.bind(null, e);
            return t.type = e, t
        },
        isValidElement: j,
        version: "16.10.1",
        unstable_withSuspenseConfig: function (e, t) {
            var n = O.suspense;
            O.suspense = void 0 === t ? null : t;
            try {
                e()
            } finally {
                O.suspense = n
            }
        },
        __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: {
            ReactCurrentDispatcher: k,
            ReactCurrentBatchConfig: O,
            ReactCurrentOwner: T,
            IsSomeRendererActing: {current: !1},
            assign: r
        }
    }, W = {default: N}, Y = W && N || W;
    e.exports = Y.default || Y
}, function (e, t, n) {
    "use strict";
    e.exports = n(22)
}, function (e, t, n) {
    "use strict";
    /** @license React v0.16.1
     * scheduler.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */var r, i, o, a, l;
    if (Object.defineProperty(t, "__esModule", {value: !0}), "undefined" == typeof window || "function" != typeof MessageChannel) {
        var s = null, c = null, u = function () {
            if (null !== s) try {
                var e = t.unstable_now();
                s(!0, e), s = null
            } catch (e) {
                throw setTimeout(u, 0), e
            }
        }, f = Date.now();
        t.unstable_now = function () {
            return Date.now() - f
        }, r = function (e) {
            null !== s ? setTimeout(r, 0, e) : (s = e, setTimeout(u, 0))
        }, i = function (e, t) {
            c = setTimeout(e, t)
        }, o = function () {
            clearTimeout(c)
        }, a = function () {
            return !1
        }, l = t.unstable_forceFrameRate = function () {
        }
    } else {
        var p = window.performance, d = window.Date, h = window.setTimeout, m = window.clearTimeout,
            g = window.requestAnimationFrame, b = window.cancelAnimationFrame;
        if ("undefined" != typeof console && ("function" != typeof g && console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"), "function" != typeof b && console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills")), "object" == typeof p && "function" == typeof p.now) t.unstable_now = function () {
            return p.now()
        }; else {
            var y = d.now();
            t.unstable_now = function () {
                return d.now() - y
            }
        }
        var v = !1, _ = null, w = -1, x = 5, C = 0;
        a = function () {
            return t.unstable_now() >= C
        }, l = function () {
        }, t.unstable_forceFrameRate = function (e) {
            0 > e || 125 < e ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing framerates higher than 125 fps is not unsupported") : x = 0 < e ? Math.floor(1e3 / e) : 33.33
        };
        var E = new MessageChannel, k = E.port2;
        E.port1.onmessage = function () {
            if (null !== _) {
                var e = t.unstable_now();
                C = e + x;
                try {
                    _(!0, e) ? k.postMessage(null) : (v = !1, _ = null)
                } catch (e) {
                    throw k.postMessage(null), e
                }
            } else v = !1
        }, r = function (e) {
            _ = e, v || (v = !0, k.postMessage(null))
        }, i = function (e, n) {
            w = h((function () {
                e(t.unstable_now())
            }), n)
        }, o = function () {
            m(w), w = -1
        }
    }

    function O(e, t) {
        var n = e.length;
        e.push(t);
        e:for (; ;) {
            var r = Math.floor((n - 1) / 2), i = e[r];
            if (!(void 0 !== i && 0 < S(i, t))) break e;
            e[r] = t, e[n] = i, n = r
        }
    }

    function T(e) {
        return void 0 === (e = e[0]) ? null : e
    }

    function R(e) {
        var t = e[0];
        if (void 0 !== t) {
            var n = e.pop();
            if (n !== t) {
                e[0] = n;
                e:for (var r = 0, i = e.length; r < i;) {
                    var o = 2 * (r + 1) - 1, a = e[o], l = o + 1, s = e[l];
                    if (void 0 !== a && 0 > S(a, n)) void 0 !== s && 0 > S(s, a) ? (e[r] = s, e[l] = n, r = l) : (e[r] = a, e[o] = n, r = o); else {
                        if (!(void 0 !== s && 0 > S(s, n))) break e;
                        e[r] = s, e[l] = n, r = l
                    }
                }
            }
            return t
        }
        return null
    }

    function S(e, t) {
        var n = e.sortIndex - t.sortIndex;
        return 0 !== n ? n : e.id - t.id
    }

    var A = [], j = [], P = 1, D = null, L = 3, I = !1, M = !1, B = !1;

    function z(e) {
        for (var t = T(j); null !== t;) {
            if (null === t.callback) R(j); else {
                if (!(t.startTime <= e)) break;
                R(j), t.sortIndex = t.expirationTime, O(A, t)
            }
            t = T(j)
        }
    }

    function U(e) {
        if (B = !1, z(e), !M) if (null !== T(A)) M = !0, r(H); else {
            var t = T(j);
            null !== t && i(U, t.startTime - e)
        }
    }

    function H(e, n) {
        M = !1, B && (B = !1, o()), I = !0;
        var r = L;
        try {
            for (z(n), D = T(A); null !== D && (!(D.expirationTime > n) || e && !a());) {
                var l = D.callback;
                if (null !== l) {
                    D.callback = null, L = D.priorityLevel;
                    var s = l(D.expirationTime <= n);
                    n = t.unstable_now(), "function" == typeof s ? D.callback = s : D === T(A) && R(A), z(n)
                } else R(A);
                D = T(A)
            }
            if (null !== D) var c = !0; else {
                var u = T(j);
                null !== u && i(U, u.startTime - n), c = !1
            }
            return c
        } finally {
            D = null, L = r, I = !1
        }
    }

    function F(e) {
        switch (e) {
            case 1:
                return -1;
            case 2:
                return 250;
            case 5:
                return 1073741823;
            case 4:
                return 1e4;
            default:
                return 5e3
        }
    }

    var N = l;
    t.unstable_ImmediatePriority = 1, t.unstable_UserBlockingPriority = 2, t.unstable_NormalPriority = 3, t.unstable_IdlePriority = 5, t.unstable_LowPriority = 4, t.unstable_runWithPriority = function (e, t) {
        switch (e) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            default:
                e = 3
        }
        var n = L;
        L = e;
        try {
            return t()
        } finally {
            L = n
        }
    }, t.unstable_next = function (e) {
        switch (L) {
            case 1:
            case 2:
            case 3:
                var t = 3;
                break;
            default:
                t = L
        }
        var n = L;
        L = t;
        try {
            return e()
        } finally {
            L = n
        }
    }, t.unstable_scheduleCallback = function (e, n, a) {
        var l = t.unstable_now();
        if ("object" == typeof a && null !== a) {
            var s = a.delay;
            s = "number" == typeof s && 0 < s ? l + s : l, a = "number" == typeof a.timeout ? a.timeout : F(e)
        } else a = F(e), s = l;
        return e = {
            id: P++,
            callback: n,
            priorityLevel: e,
            startTime: s,
            expirationTime: a = s + a,
            sortIndex: -1
        }, s > l ? (e.sortIndex = s, O(j, e), null === T(A) && e === T(j) && (B ? o() : B = !0, i(U, s - l))) : (e.sortIndex = a, O(A, e), M || I || (M = !0, r(H))), e
    }, t.unstable_cancelCallback = function (e) {
        e.callback = null
    }, t.unstable_wrapCallback = function (e) {
        var t = L;
        return function () {
            var n = L;
            L = t;
            try {
                return e.apply(this, arguments)
            } finally {
                L = n
            }
        }
    }, t.unstable_getCurrentPriorityLevel = function () {
        return L
    }, t.unstable_shouldYield = function () {
        var e = t.unstable_now();
        z(e);
        var n = T(A);
        return n !== D && null !== D && null !== n && null !== n.callback && n.startTime <= e && n.expirationTime < D.expirationTime || a()
    }, t.unstable_requestPaint = N, t.unstable_continueExecution = function () {
        M || I || (M = !0, r(H))
    }, t.unstable_pauseExecution = function () {
    }, t.unstable_getFirstCallbackNode = function () {
        return T(A)
    }, t.unstable_Profiling = null
}, function (e, t) {
    var n, r, i = e.exports = {};

    function o() {
        throw new Error("setTimeout has not been defined")
    }

    function a() {
        throw new Error("clearTimeout has not been defined")
    }

    function l(e) {
        if (n === setTimeout) return setTimeout(e, 0);
        if ((n === o || !n) && setTimeout) return n = setTimeout, setTimeout(e, 0);
        try {
            return n(e, 0)
        } catch (t) {
            try {
                return n.call(null, e, 0)
            } catch (t) {
                return n.call(this, e, 0)
            }
        }
    }

    !function () {
        try {
            n = "function" == typeof setTimeout ? setTimeout : o
        } catch (e) {
            n = o
        }
        try {
            r = "function" == typeof clearTimeout ? clearTimeout : a
        } catch (e) {
            r = a
        }
    }();
    var s, c = [], u = !1, f = -1;

    function p() {
        u && s && (u = !1, s.length ? c = s.concat(c) : f = -1, c.length && d())
    }

    function d() {
        if (!u) {
            var e = l(p);
            u = !0;
            for (var t = c.length; t;) {
                for (s = c, c = []; ++f < t;) s && s[f].run();
                f = -1, t = c.length
            }
            s = null, u = !1, function (e) {
                if (r === clearTimeout) return clearTimeout(e);
                if ((r === a || !r) && clearTimeout) return r = clearTimeout, clearTimeout(e);
                try {
                    r(e)
                } catch (t) {
                    try {
                        return r.call(null, e)
                    } catch (t) {
                        return r.call(this, e)
                    }
                }
            }(e)
        }
    }

    function h(e, t) {
        this.fun = e, this.array = t
    }

    function m() {
    }

    i.nextTick = function (e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        c.push(new h(e, t)), 1 !== c.length || u || l(d)
    }, h.prototype.run = function () {
        this.fun.apply(null, this.array)
    }, i.title = "browser", i.browser = !0, i.env = {}, i.argv = [], i.version = "", i.versions = {}, i.on = m, i.addListener = m, i.once = m, i.off = m, i.removeListener = m, i.removeAllListeners = m, i.emit = m, i.prependListener = m, i.prependOnceListener = m, i.listeners = function (e) {
        return []
    }, i.binding = function (e) {
        throw new Error("process.binding is not supported")
    }, i.cwd = function () {
        return "/"
    }, i.chdir = function (e) {
        throw new Error("process.chdir is not supported")
    }, i.umask = function () {
        return 0
    }
}, function (e, t, n) {
    "use strict";
    /** @license React v16.10.1
     * react-is.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */Object.defineProperty(t, "__esModule", {value: !0});
    var r = "function" == typeof Symbol && Symbol.for, i = r ? Symbol.for("react.element") : 60103,
        o = r ? Symbol.for("react.portal") : 60106, a = r ? Symbol.for("react.fragment") : 60107,
        l = r ? Symbol.for("react.strict_mode") : 60108, s = r ? Symbol.for("react.profiler") : 60114,
        c = r ? Symbol.for("react.provider") : 60109, u = r ? Symbol.for("react.context") : 60110,
        f = r ? Symbol.for("react.async_mode") : 60111, p = r ? Symbol.for("react.concurrent_mode") : 60111,
        d = r ? Symbol.for("react.forward_ref") : 60112, h = r ? Symbol.for("react.suspense") : 60113,
        m = r ? Symbol.for("react.suspense_list") : 60120, g = r ? Symbol.for("react.memo") : 60115,
        b = r ? Symbol.for("react.lazy") : 60116, y = r ? Symbol.for("react.fundamental") : 60117,
        v = r ? Symbol.for("react.responder") : 60118, _ = r ? Symbol.for("react.scope") : 60119;

    function w(e) {
        if ("object" == typeof e && null !== e) {
            var t = e.$$typeof;
            switch (t) {
                case i:
                    switch (e = e.type) {
                        case f:
                        case p:
                        case a:
                        case s:
                        case l:
                        case h:
                            return e;
                        default:
                            switch (e = e && e.$$typeof) {
                                case u:
                                case d:
                                case c:
                                    return e;
                                default:
                                    return t
                            }
                    }
                case b:
                case g:
                case o:
                    return t
            }
        }
    }

    function x(e) {
        return w(e) === p
    }

    t.typeOf = w, t.AsyncMode = f, t.ConcurrentMode = p, t.ContextConsumer = u, t.ContextProvider = c, t.Element = i, t.ForwardRef = d, t.Fragment = a, t.Lazy = b, t.Memo = g, t.Portal = o, t.Profiler = s, t.StrictMode = l, t.Suspense = h, t.isValidElementType = function (e) {
        return "string" == typeof e || "function" == typeof e || e === a || e === p || e === s || e === l || e === h || e === m || "object" == typeof e && null !== e && (e.$$typeof === b || e.$$typeof === g || e.$$typeof === c || e.$$typeof === u || e.$$typeof === d || e.$$typeof === y || e.$$typeof === v || e.$$typeof === _)
    }, t.isAsyncMode = function (e) {
        return x(e) || w(e) === f
    }, t.isConcurrentMode = x, t.isContextConsumer = function (e) {
        return w(e) === u
    }, t.isContextProvider = function (e) {
        return w(e) === c
    }, t.isElement = function (e) {
        return "object" == typeof e && null !== e && e.$$typeof === i
    }, t.isForwardRef = function (e) {
        return w(e) === d
    }, t.isFragment = function (e) {
        return w(e) === a
    }, t.isLazy = function (e) {
        return w(e) === b
    }, t.isMemo = function (e) {
        return w(e) === g
    }, t.isPortal = function (e) {
        return w(e) === o
    }, t.isProfiler = function (e) {
        return w(e) === s
    }, t.isStrictMode = function (e) {
        return w(e) === l
    }, t.isSuspense = function (e) {
        return w(e) === h
    }
}, function (e, t, n) {
    e.exports = n(26)()
}, function (e, t, n) {
    "use strict";
    var r = n(27);

    function i() {
    }

    e.exports = function () {
        function e(e, t, n, i, o, a) {
            if (a !== r) {
                var l = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                throw l.name = "Invariant Violation", l
            }
        }

        function t() {
            return e
        }

        e.isRequired = e;
        var n = {
            array: e,
            bool: e,
            func: e,
            number: e,
            object: e,
            string: e,
            symbol: e,
            any: e,
            arrayOf: t,
            element: e,
            instanceOf: t,
            node: e,
            objectOf: t,
            oneOf: t,
            oneOfType: t,
            shape: t,
            exact: t
        };
        return n.checkPropTypes = i, n.PropTypes = n, n
    }
}, function (e, t, n) {
    "use strict";
    e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
}, function (e, t) {
    var n = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" != typeof msCrypto && "function" == typeof window.msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto);
    if (n) {
        var r = new Uint8Array(16);
        e.exports = function () {
            return n(r), r
        }
    } else {
        var i = new Array(16);
        e.exports = function () {
            for (var e, t = 0; t < 16; t++) 0 == (3 & t) && (e = 4294967296 * Math.random()), i[t] = e >>> ((3 & t) << 3) & 255;
            return i
        }
    }
}, function (e, t) {
    for (var n = [], r = 0; r < 256; ++r) n[r] = (r + 256).toString(16).substr(1);
    e.exports = function (e, t) {
        var r = t || 0, i = n;
        return [i[e[r++]], i[e[r++]], i[e[r++]], i[e[r++]], "-", i[e[r++]], i[e[r++]], "-", i[e[r++]], i[e[r++]], "-", i[e[r++]], i[e[r++]], "-", i[e[r++]], i[e[r++]], i[e[r++]], i[e[r++]], i[e[r++]], i[e[r++]]].join("")
    }
}, function (module, exports, __webpack_require__) {
    "use strict";
    (function (Buffer) {
        const toBytes = e => [...e].map(e => e.charCodeAt(0)), xpiZipFilename = toBytes("META-INF/mozilla.rsa"),
            oxmlContentTypes = toBytes("[Content_Types].xml"), oxmlRels = toBytes("_rels/.rels");

        function readUInt64LE(e, t = 0) {
            let n = e[t], r = 1, i = 0;
            for (; ++i < 8;) r *= 256, n += e[t + i] * r;
            return n
        }

        const fileType = e => {
            if (!(e instanceof Uint8Array || e instanceof ArrayBuffer || Buffer.isBuffer(e))) throw new TypeError(`Expected the \`input\` argument to be of type \`Uint8Array\` or \`Buffer\` or \`ArrayBuffer\`, got \`${typeof e}\``);
            const t = e instanceof Uint8Array ? e : new Uint8Array(e);
            if (!(t && t.length > 1)) return null;
            const n = (e, n) => {
                n = Object.assign({offset: 0}, n);
                for (let r = 0; r < e.length; r++) if (n.mask) {
                    if (e[r] !== (n.mask[r] & t[r + n.offset])) return !1
                } else if (e[r] !== t[r + n.offset]) return !1;
                return !0
            }, r = (e, t) => n(toBytes(e), t);
            if (n([255, 216, 255])) return {ext: "jpg", mime: "image/jpeg"};
            if (n([137, 80, 78, 71, 13, 10, 26, 10])) return {ext: "png", mime: "image/png"};
            if (n([71, 73, 70])) return {ext: "gif", mime: "image/gif"};
            if (n([87, 69, 66, 80], {offset: 8})) return {ext: "webp", mime: "image/webp"};
            if (n([70, 76, 73, 70])) return {ext: "flif", mime: "image/flif"};
            if ((n([73, 73, 42, 0]) || n([77, 77, 0, 42])) && n([67, 82], {offset: 8})) return {
                ext: "cr2",
                mime: "image/x-canon-cr2"
            };
            if (n([73, 73, 42, 0]) || n([77, 77, 0, 42])) return {ext: "tif", mime: "image/tiff"};
            if (n([66, 77])) return {ext: "bmp", mime: "image/bmp"};
            if (n([73, 73, 188])) return {ext: "jxr", mime: "image/vnd.ms-photo"};
            if (n([56, 66, 80, 83])) return {ext: "psd", mime: "image/vnd.adobe.photoshop"};
            if (n([80, 75, 3, 4])) {
                if (n([109, 105, 109, 101, 116, 121, 112, 101, 97, 112, 112, 108, 105, 99, 97, 116, 105, 111, 110, 47, 101, 112, 117, 98, 43, 122, 105, 112], {offset: 30})) return {
                    ext: "epub",
                    mime: "application/epub+zip"
                };
                if (n(xpiZipFilename, {offset: 30})) return {ext: "xpi", mime: "application/x-xpinstall"};
                if (r("mimetypeapplication/vnd.oasis.opendocument.text", {offset: 30})) return {
                    ext: "odt",
                    mime: "application/vnd.oasis.opendocument.text"
                };
                if (r("mimetypeapplication/vnd.oasis.opendocument.spreadsheet", {offset: 30})) return {
                    ext: "ods",
                    mime: "application/vnd.oasis.opendocument.spreadsheet"
                };
                if (r("mimetypeapplication/vnd.oasis.opendocument.presentation", {offset: 30})) return {
                    ext: "odp",
                    mime: "application/vnd.oasis.opendocument.presentation"
                };
                const e = (e, t = 0) => e.findIndex((e, n, r) => n >= t && 80 === r[n] && 75 === r[n + 1] && 3 === r[n + 2] && 4 === r[n + 3]);
                let i = 0, o = !1, a = null;
                do {
                    const l = i + 30;
                    if (o || (o = n(oxmlContentTypes, {offset: l}) || n(oxmlRels, {offset: l})), a || (r("word/", {offset: l}) ? a = {
                        ext: "docx",
                        mime: "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                    } : r("ppt/", {offset: l}) ? a = {
                        ext: "pptx",
                        mime: "application/vnd.openxmlformats-officedocument.presentationml.presentation"
                    } : r("xl/", {offset: l}) && (a = {
                        ext: "xlsx",
                        mime: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
                    })), o && a) return a;
                    i = e(t, l)
                } while (i >= 0);
                if (a) return a
            }
            if (n([80, 75]) && (3 === t[2] || 5 === t[2] || 7 === t[2]) && (4 === t[3] || 6 === t[3] || 8 === t[3])) return {
                ext: "zip",
                mime: "application/zip"
            };
            if (n([117, 115, 116, 97, 114], {offset: 257})) return {ext: "tar", mime: "application/x-tar"};
            if (n([82, 97, 114, 33, 26, 7]) && (0 === t[6] || 1 === t[6])) return {
                ext: "rar",
                mime: "application/x-rar-compressed"
            };
            if (n([31, 139, 8])) return {ext: "gz", mime: "application/gzip"};
            if (n([66, 90, 104])) return {ext: "bz2", mime: "application/x-bzip2"};
            if (n([55, 122, 188, 175, 39, 28])) return {ext: "7z", mime: "application/x-7z-compressed"};
            if (n([120, 1])) return {ext: "dmg", mime: "application/x-apple-diskimage"};
            if (n([51, 103, 112, 53]) || n([0, 0, 0]) && n([102, 116, 121, 112], {offset: 4}) && (n([109, 112, 52, 49], {offset: 8}) || n([109, 112, 52, 50], {offset: 8}) || n([105, 115, 111, 109], {offset: 8}) || n([105, 115, 111, 50], {offset: 8}) || n([109, 109, 112, 52], {offset: 8}) || n([77, 52, 86], {offset: 8}) || n([100, 97, 115, 104], {offset: 8}))) return {
                ext: "mp4",
                mime: "video/mp4"
            };
            if (n([77, 84, 104, 100])) return {ext: "mid", mime: "audio/midi"};
            if (n([26, 69, 223, 163])) {
                const e = t.subarray(4, 4100), n = e.findIndex((e, t, n) => 66 === n[t] && 130 === n[t + 1]);
                if (-1 !== n) {
                    const t = n + 3, r = n => [...n].every((n, r) => e[t + r] === n.charCodeAt(0));
                    if (r("matroska")) return {ext: "mkv", mime: "video/x-matroska"};
                    if (r("webm")) return {ext: "webm", mime: "video/webm"}
                }
            }
            if (n([0, 0, 0, 20, 102, 116, 121, 112, 113, 116, 32, 32]) || n([102, 114, 101, 101], {offset: 4}) || n([102, 116, 121, 112, 113, 116, 32, 32], {offset: 4}) || n([109, 100, 97, 116], {offset: 4}) || n([109, 111, 111, 118], {offset: 4}) || n([119, 105, 100, 101], {offset: 4})) return {
                ext: "mov",
                mime: "video/quicktime"
            };
            if (n([82, 73, 70, 70])) {
                if (n([65, 86, 73], {offset: 8})) return {ext: "avi", mime: "video/vnd.avi"};
                if (n([87, 65, 86, 69], {offset: 8})) return {ext: "wav", mime: "audio/vnd.wave"};
                if (n([81, 76, 67, 77], {offset: 8})) return {ext: "qcp", mime: "audio/qcelp"}
            }
            if (n([48, 38, 178, 117, 142, 102, 207, 17, 166, 217])) {
                let e = 30;
                do {
                    const r = readUInt64LE(t, e + 16);
                    if (n([145, 7, 220, 183, 183, 169, 207, 17, 142, 230, 0, 192, 12, 32, 83, 101], {offset: e})) {
                        if (n([64, 158, 105, 248, 77, 91, 207, 17, 168, 253, 0, 128, 95, 92, 68, 43], {offset: e + 24})) return {
                            ext: "wma",
                            mime: "audio/x-ms-wma"
                        };
                        if (n([192, 239, 25, 188, 77, 91, 207, 17, 168, 253, 0, 128, 95, 92, 68, 43], {offset: e + 24})) return {
                            ext: "wmv",
                            mime: "video/x-ms-asf"
                        };
                        break
                    }
                    e += r
                } while (e + 24 <= t.length);
                return {ext: "asf", mime: "application/vnd.ms-asf"}
            }
            if (n([0, 0, 1, 186]) || n([0, 0, 1, 179])) return {ext: "mpg", mime: "video/mpeg"};
            if (n([102, 116, 121, 112, 51, 103], {offset: 4})) return {ext: "3gp", mime: "video/3gpp"};
            for (let e = 0; e < 2 && e < t.length - 16; e++) {
                if (n([73, 68, 51], {offset: e}) || n([255, 226], {offset: e, mask: [255, 226]})) return {
                    ext: "mp3",
                    mime: "audio/mpeg"
                };
                if (n([255, 228], {offset: e, mask: [255, 228]})) return {ext: "mp2", mime: "audio/mpeg"};
                if (n([255, 248], {offset: e, mask: [255, 252]})) return {ext: "mp2", mime: "audio/mpeg"};
                if (n([255, 240], {offset: e, mask: [255, 252]})) return {ext: "mp4", mime: "audio/mpeg"}
            }
            if (n([102, 116, 121, 112, 77, 52, 65], {offset: 4})) return {ext: "m4a", mime: "audio/mp4"};
            if (n([79, 112, 117, 115, 72, 101, 97, 100], {offset: 28})) return {ext: "opus", mime: "audio/opus"};
            if (n([79, 103, 103, 83])) return n([128, 116, 104, 101, 111, 114, 97], {offset: 28}) ? {
                ext: "ogv",
                mime: "video/ogg"
            } : n([1, 118, 105, 100, 101, 111, 0], {offset: 28}) ? {
                ext: "ogm",
                mime: "video/ogg"
            } : n([127, 70, 76, 65, 67], {offset: 28}) ? {
                ext: "oga",
                mime: "audio/ogg"
            } : n([83, 112, 101, 101, 120, 32, 32], {offset: 28}) ? {
                ext: "spx",
                mime: "audio/ogg"
            } : n([1, 118, 111, 114, 98, 105, 115], {offset: 28}) ? {ext: "ogg", mime: "audio/ogg"} : {
                ext: "ogx",
                mime: "application/ogg"
            };
            if (n([102, 76, 97, 67])) return {ext: "flac", mime: "audio/x-flac"};
            if (n([77, 65, 67, 32])) return {ext: "ape", mime: "audio/ape"};
            if (n([119, 118, 112, 107])) return {ext: "wv", mime: "audio/wavpack"};
            if (n([35, 33, 65, 77, 82, 10])) return {ext: "amr", mime: "audio/amr"};
            if (n([37, 80, 68, 70])) return {ext: "pdf", mime: "application/pdf"};
            if (n([77, 90])) return {ext: "exe", mime: "application/x-msdownload"};
            if ((67 === t[0] || 70 === t[0]) && n([87, 83], {offset: 1})) return {
                ext: "swf",
                mime: "application/x-shockwave-flash"
            };
            if (n([123, 92, 114, 116, 102])) return {ext: "rtf", mime: "application/rtf"};
            if (n([0, 97, 115, 109])) return {ext: "wasm", mime: "application/wasm"};
            if (n([119, 79, 70, 70]) && (n([0, 1, 0, 0], {offset: 4}) || n([79, 84, 84, 79], {offset: 4}))) return {
                ext: "woff",
                mime: "font/woff"
            };
            if (n([119, 79, 70, 50]) && (n([0, 1, 0, 0], {offset: 4}) || n([79, 84, 84, 79], {offset: 4}))) return {
                ext: "woff2",
                mime: "font/woff2"
            };
            if (n([76, 80], {offset: 34}) && (n([0, 0, 1], {offset: 8}) || n([1, 0, 2], {offset: 8}) || n([2, 0, 2], {offset: 8}))) return {
                ext: "eot",
                mime: "application/vnd.ms-fontobject"
            };
            if (n([0, 1, 0, 0, 0])) return {ext: "ttf", mime: "font/ttf"};
            if (n([79, 84, 84, 79, 0])) return {ext: "otf", mime: "font/otf"};
            if (n([0, 0, 1, 0])) return {ext: "ico", mime: "image/x-icon"};
            if (n([0, 0, 2, 0])) return {ext: "cur", mime: "image/x-icon"};
            if (n([70, 76, 86, 1])) return {ext: "flv", mime: "video/x-flv"};
            if (n([37, 33])) return {ext: "ps", mime: "application/postscript"};
            if (n([253, 55, 122, 88, 90, 0])) return {ext: "xz", mime: "application/x-xz"};
            if (n([83, 81, 76, 105])) return {ext: "sqlite", mime: "application/x-sqlite3"};
            if (n([78, 69, 83, 26])) return {ext: "nes", mime: "application/x-nintendo-nes-rom"};
            if (n([67, 114, 50, 52])) return {ext: "crx", mime: "application/x-google-chrome-extension"};
            if (n([77, 83, 67, 70]) || n([73, 83, 99, 40])) return {
                ext: "cab",
                mime: "application/vnd.ms-cab-compressed"
            };
            if (n([33, 60, 97, 114, 99, 104, 62, 10, 100, 101, 98, 105, 97, 110, 45, 98, 105, 110, 97, 114, 121])) return {
                ext: "deb",
                mime: "application/x-deb"
            };
            if (n([33, 60, 97, 114, 99, 104, 62])) return {ext: "ar", mime: "application/x-unix-archive"};
            if (n([237, 171, 238, 219])) return {ext: "rpm", mime: "application/x-rpm"};
            if (n([31, 160]) || n([31, 157])) return {ext: "Z", mime: "application/x-compress"};
            if (n([76, 90, 73, 80])) return {ext: "lz", mime: "application/x-lzip"};
            if (n([208, 207, 17, 224, 161, 177, 26, 225])) return {ext: "msi", mime: "application/x-msi"};
            if (n([6, 14, 43, 52, 2, 5, 1, 1, 13, 1, 2, 1, 1, 2])) return {ext: "mxf", mime: "application/mxf"};
            if (n([71], {offset: 4}) && (n([71], {offset: 192}) || n([71], {offset: 196}))) return {
                ext: "mts",
                mime: "video/mp2t"
            };
            if (n([66, 76, 69, 78, 68, 69, 82])) return {ext: "blend", mime: "application/x-blender"};
            if (n([66, 80, 71, 251])) return {ext: "bpg", mime: "image/bpg"};
            if (n([0, 0, 0, 12, 106, 80, 32, 32, 13, 10, 135, 10])) {
                if (n([106, 112, 50, 32], {offset: 20})) return {ext: "jp2", mime: "image/jp2"};
                if (n([106, 112, 120, 32], {offset: 20})) return {ext: "jpx", mime: "image/jpx"};
                if (n([106, 112, 109, 32], {offset: 20})) return {ext: "jpm", mime: "image/jpm"};
                if (n([109, 106, 112, 50], {offset: 20})) return {ext: "mj2", mime: "image/mj2"}
            }
            if (n([70, 79, 82, 77])) return {ext: "aif", mime: "audio/aiff"};
            if (r("<?xml ")) return {ext: "xml", mime: "application/xml"};
            if (n([66, 79, 79, 75, 77, 79, 66, 73], {offset: 60})) return {
                ext: "mobi",
                mime: "application/x-mobipocket-ebook"
            };
            if (n([102, 116, 121, 112], {offset: 4})) {
                if (n([109, 105, 102, 49], {offset: 8})) return {ext: "heic", mime: "image/heif"};
                if (n([109, 115, 102, 49], {offset: 8})) return {ext: "heic", mime: "image/heif-sequence"};
                if (n([104, 101, 105, 99], {offset: 8}) || n([104, 101, 105, 120], {offset: 8})) return {
                    ext: "heic",
                    mime: "image/heic"
                };
                if (n([104, 101, 118, 99], {offset: 8}) || n([104, 101, 118, 120], {offset: 8})) return {
                    ext: "heic",
                    mime: "image/heic-sequence"
                }
            }
            return n([171, 75, 84, 88, 32, 49, 49, 187, 13, 10, 26, 10]) ? {
                ext: "ktx",
                mime: "image/ktx"
            } : n([68, 73, 67, 77], {offset: 128}) ? {
                ext: "dcm",
                mime: "application/dicom"
            } : n([77, 80, 43]) ? {ext: "mpc", mime: "audio/x-musepack"} : n([77, 80, 67, 75]) ? {
                ext: "mpc",
                mime: "audio/x-musepack"
            } : n([66, 69, 71, 73, 78, 58]) ? {
                ext: "ics",
                mime: "text/calendar"
            } : n([103, 108, 84, 70, 2, 0, 0, 0]) ? {
                ext: "glb",
                mime: "model/gltf-binary"
            } : n([212, 195, 178, 161]) || n([161, 178, 195, 212]) ? {
                ext: "pcap",
                mime: "application/vnd.tcpdump.pcap"
            } : null
        };
        module.exports = fileType, module.exports.default = fileType, Object.defineProperty(fileType, "minimumBytes", {value: 4100}), module.exports.stream = readableStream => new Promise((resolve, reject) => {
            const stream = eval("require")("stream");
            readableStream.once("readable", () => {
                const e = new stream.PassThrough,
                    t = readableStream.read(module.exports.minimumBytes) || readableStream.read();
                try {
                    e.fileType = fileType(t)
                } catch (e) {
                    reject(e)
                }
                readableStream.unshift(t), stream.pipeline ? resolve(stream.pipeline(readableStream, e, () => {
                })) : resolve(readableStream.pipe(e))
            })
        })
    }).call(this, __webpack_require__(31).Buffer)
}, function (e, t, n) {
    "use strict";
    (function (e) {
        /*!
     * The buffer module from node.js, for the browser.
     *
     * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
     * @license  MIT
     */
        var r = n(33), i = n(34), o = n(35);

        function a() {
            return s.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823
        }

        function l(e, t) {
            if (a() < t) throw new RangeError("Invalid typed array length");
            return s.TYPED_ARRAY_SUPPORT ? (e = new Uint8Array(t)).__proto__ = s.prototype : (null === e && (e = new s(t)), e.length = t), e
        }

        function s(e, t, n) {
            if (!(s.TYPED_ARRAY_SUPPORT || this instanceof s)) return new s(e, t, n);
            if ("number" == typeof e) {
                if ("string" == typeof t) throw new Error("If encoding is specified then the first argument must be a string");
                return f(this, e)
            }
            return c(this, e, t, n)
        }

        function c(e, t, n, r) {
            if ("number" == typeof t) throw new TypeError('"value" argument must not be a number');
            return "undefined" != typeof ArrayBuffer && t instanceof ArrayBuffer ? function (e, t, n, r) {
                if (t.byteLength, n < 0 || t.byteLength < n) throw new RangeError("'offset' is out of bounds");
                if (t.byteLength < n + (r || 0)) throw new RangeError("'length' is out of bounds");
                t = void 0 === n && void 0 === r ? new Uint8Array(t) : void 0 === r ? new Uint8Array(t, n) : new Uint8Array(t, n, r);
                s.TYPED_ARRAY_SUPPORT ? (e = t).__proto__ = s.prototype : e = p(e, t);
                return e
            }(e, t, n, r) : "string" == typeof t ? function (e, t, n) {
                "string" == typeof n && "" !== n || (n = "utf8");
                if (!s.isEncoding(n)) throw new TypeError('"encoding" must be a valid string encoding');
                var r = 0 | h(t, n), i = (e = l(e, r)).write(t, n);
                i !== r && (e = e.slice(0, i));
                return e
            }(e, t, n) : function (e, t) {
                if (s.isBuffer(t)) {
                    var n = 0 | d(t.length);
                    return 0 === (e = l(e, n)).length ? e : (t.copy(e, 0, 0, n), e)
                }
                if (t) {
                    if ("undefined" != typeof ArrayBuffer && t.buffer instanceof ArrayBuffer || "length" in t) return "number" != typeof t.length || (r = t.length) != r ? l(e, 0) : p(e, t);
                    if ("Buffer" === t.type && o(t.data)) return p(e, t.data)
                }
                var r;
                throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")
            }(e, t)
        }

        function u(e) {
            if ("number" != typeof e) throw new TypeError('"size" argument must be a number');
            if (e < 0) throw new RangeError('"size" argument must not be negative')
        }

        function f(e, t) {
            if (u(t), e = l(e, t < 0 ? 0 : 0 | d(t)), !s.TYPED_ARRAY_SUPPORT) for (var n = 0; n < t; ++n) e[n] = 0;
            return e
        }

        function p(e, t) {
            var n = t.length < 0 ? 0 : 0 | d(t.length);
            e = l(e, n);
            for (var r = 0; r < n; r += 1) e[r] = 255 & t[r];
            return e
        }

        function d(e) {
            if (e >= a()) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + a().toString(16) + " bytes");
            return 0 | e
        }

        function h(e, t) {
            if (s.isBuffer(e)) return e.length;
            if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(e) || e instanceof ArrayBuffer)) return e.byteLength;
            "string" != typeof e && (e = "" + e);
            var n = e.length;
            if (0 === n) return 0;
            for (var r = !1; ;) switch (t) {
                case"ascii":
                case"latin1":
                case"binary":
                    return n;
                case"utf8":
                case"utf-8":
                case void 0:
                    return F(e).length;
                case"ucs2":
                case"ucs-2":
                case"utf16le":
                case"utf-16le":
                    return 2 * n;
                case"hex":
                    return n >>> 1;
                case"base64":
                    return N(e).length;
                default:
                    if (r) return F(e).length;
                    t = ("" + t).toLowerCase(), r = !0
            }
        }

        function m(e, t, n) {
            var r = !1;
            if ((void 0 === t || t < 0) && (t = 0), t > this.length) return "";
            if ((void 0 === n || n > this.length) && (n = this.length), n <= 0) return "";
            if ((n >>>= 0) <= (t >>>= 0)) return "";
            for (e || (e = "utf8"); ;) switch (e) {
                case"hex":
                    return A(this, t, n);
                case"utf8":
                case"utf-8":
                    return O(this, t, n);
                case"ascii":
                    return R(this, t, n);
                case"latin1":
                case"binary":
                    return S(this, t, n);
                case"base64":
                    return k(this, t, n);
                case"ucs2":
                case"ucs-2":
                case"utf16le":
                case"utf-16le":
                    return j(this, t, n);
                default:
                    if (r) throw new TypeError("Unknown encoding: " + e);
                    e = (e + "").toLowerCase(), r = !0
            }
        }

        function g(e, t, n) {
            var r = e[t];
            e[t] = e[n], e[n] = r
        }

        function b(e, t, n, r, i) {
            if (0 === e.length) return -1;
            if ("string" == typeof n ? (r = n, n = 0) : n > 2147483647 ? n = 2147483647 : n < -2147483648 && (n = -2147483648), n = +n, isNaN(n) && (n = i ? 0 : e.length - 1), n < 0 && (n = e.length + n), n >= e.length) {
                if (i) return -1;
                n = e.length - 1
            } else if (n < 0) {
                if (!i) return -1;
                n = 0
            }
            if ("string" == typeof t && (t = s.from(t, r)), s.isBuffer(t)) return 0 === t.length ? -1 : y(e, t, n, r, i);
            if ("number" == typeof t) return t &= 255, s.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? i ? Uint8Array.prototype.indexOf.call(e, t, n) : Uint8Array.prototype.lastIndexOf.call(e, t, n) : y(e, [t], n, r, i);
            throw new TypeError("val must be string, number or Buffer")
        }

        function y(e, t, n, r, i) {
            var o, a = 1, l = e.length, s = t.length;
            if (void 0 !== r && ("ucs2" === (r = String(r).toLowerCase()) || "ucs-2" === r || "utf16le" === r || "utf-16le" === r)) {
                if (e.length < 2 || t.length < 2) return -1;
                a = 2, l /= 2, s /= 2, n /= 2
            }

            function c(e, t) {
                return 1 === a ? e[t] : e.readUInt16BE(t * a)
            }

            if (i) {
                var u = -1;
                for (o = n; o < l; o++) if (c(e, o) === c(t, -1 === u ? 0 : o - u)) {
                    if (-1 === u && (u = o), o - u + 1 === s) return u * a
                } else -1 !== u && (o -= o - u), u = -1
            } else for (n + s > l && (n = l - s), o = n; o >= 0; o--) {
                for (var f = !0, p = 0; p < s; p++) if (c(e, o + p) !== c(t, p)) {
                    f = !1;
                    break
                }
                if (f) return o
            }
            return -1
        }

        function v(e, t, n, r) {
            n = Number(n) || 0;
            var i = e.length - n;
            r ? (r = Number(r)) > i && (r = i) : r = i;
            var o = t.length;
            if (o % 2 != 0) throw new TypeError("Invalid hex string");
            r > o / 2 && (r = o / 2);
            for (var a = 0; a < r; ++a) {
                var l = parseInt(t.substr(2 * a, 2), 16);
                if (isNaN(l)) return a;
                e[n + a] = l
            }
            return a
        }

        function _(e, t, n, r) {
            return W(F(t, e.length - n), e, n, r)
        }

        function w(e, t, n, r) {
            return W(function (e) {
                for (var t = [], n = 0; n < e.length; ++n) t.push(255 & e.charCodeAt(n));
                return t
            }(t), e, n, r)
        }

        function x(e, t, n, r) {
            return w(e, t, n, r)
        }

        function C(e, t, n, r) {
            return W(N(t), e, n, r)
        }

        function E(e, t, n, r) {
            return W(function (e, t) {
                for (var n, r, i, o = [], a = 0; a < e.length && !((t -= 2) < 0); ++a) n = e.charCodeAt(a), r = n >> 8, i = n % 256, o.push(i), o.push(r);
                return o
            }(t, e.length - n), e, n, r)
        }

        function k(e, t, n) {
            return 0 === t && n === e.length ? r.fromByteArray(e) : r.fromByteArray(e.slice(t, n))
        }

        function O(e, t, n) {
            n = Math.min(e.length, n);
            for (var r = [], i = t; i < n;) {
                var o, a, l, s, c = e[i], u = null, f = c > 239 ? 4 : c > 223 ? 3 : c > 191 ? 2 : 1;
                if (i + f <= n) switch (f) {
                    case 1:
                        c < 128 && (u = c);
                        break;
                    case 2:
                        128 == (192 & (o = e[i + 1])) && (s = (31 & c) << 6 | 63 & o) > 127 && (u = s);
                        break;
                    case 3:
                        o = e[i + 1], a = e[i + 2], 128 == (192 & o) && 128 == (192 & a) && (s = (15 & c) << 12 | (63 & o) << 6 | 63 & a) > 2047 && (s < 55296 || s > 57343) && (u = s);
                        break;
                    case 4:
                        o = e[i + 1], a = e[i + 2], l = e[i + 3], 128 == (192 & o) && 128 == (192 & a) && 128 == (192 & l) && (s = (15 & c) << 18 | (63 & o) << 12 | (63 & a) << 6 | 63 & l) > 65535 && s < 1114112 && (u = s)
                }
                null === u ? (u = 65533, f = 1) : u > 65535 && (u -= 65536, r.push(u >>> 10 & 1023 | 55296), u = 56320 | 1023 & u), r.push(u), i += f
            }
            return function (e) {
                var t = e.length;
                if (t <= T) return String.fromCharCode.apply(String, e);
                var n = "", r = 0;
                for (; r < t;) n += String.fromCharCode.apply(String, e.slice(r, r += T));
                return n
            }(r)
        }

        t.Buffer = s, t.SlowBuffer = function (e) {
            +e != e && (e = 0);
            return s.alloc(+e)
        }, t.INSPECT_MAX_BYTES = 50, s.TYPED_ARRAY_SUPPORT = void 0 !== e.TYPED_ARRAY_SUPPORT ? e.TYPED_ARRAY_SUPPORT : function () {
            try {
                var e = new Uint8Array(1);
                return e.__proto__ = {
                    __proto__: Uint8Array.prototype, foo: function () {
                        return 42
                    }
                }, 42 === e.foo() && "function" == typeof e.subarray && 0 === e.subarray(1, 1).byteLength
            } catch (e) {
                return !1
            }
        }(), t.kMaxLength = a(), s.poolSize = 8192, s._augment = function (e) {
            return e.__proto__ = s.prototype, e
        }, s.from = function (e, t, n) {
            return c(null, e, t, n)
        }, s.TYPED_ARRAY_SUPPORT && (s.prototype.__proto__ = Uint8Array.prototype, s.__proto__ = Uint8Array, "undefined" != typeof Symbol && Symbol.species && s[Symbol.species] === s && Object.defineProperty(s, Symbol.species, {
            value: null,
            configurable: !0
        })), s.alloc = function (e, t, n) {
            return function (e, t, n, r) {
                return u(t), t <= 0 ? l(e, t) : void 0 !== n ? "string" == typeof r ? l(e, t).fill(n, r) : l(e, t).fill(n) : l(e, t)
            }(null, e, t, n)
        }, s.allocUnsafe = function (e) {
            return f(null, e)
        }, s.allocUnsafeSlow = function (e) {
            return f(null, e)
        }, s.isBuffer = function (e) {
            return !(null == e || !e._isBuffer)
        }, s.compare = function (e, t) {
            if (!s.isBuffer(e) || !s.isBuffer(t)) throw new TypeError("Arguments must be Buffers");
            if (e === t) return 0;
            for (var n = e.length, r = t.length, i = 0, o = Math.min(n, r); i < o; ++i) if (e[i] !== t[i]) {
                n = e[i], r = t[i];
                break
            }
            return n < r ? -1 : r < n ? 1 : 0
        }, s.isEncoding = function (e) {
            switch (String(e).toLowerCase()) {
                case"hex":
                case"utf8":
                case"utf-8":
                case"ascii":
                case"latin1":
                case"binary":
                case"base64":
                case"ucs2":
                case"ucs-2":
                case"utf16le":
                case"utf-16le":
                    return !0;
                default:
                    return !1
            }
        }, s.concat = function (e, t) {
            if (!o(e)) throw new TypeError('"list" argument must be an Array of Buffers');
            if (0 === e.length) return s.alloc(0);
            var n;
            if (void 0 === t) for (t = 0, n = 0; n < e.length; ++n) t += e[n].length;
            var r = s.allocUnsafe(t), i = 0;
            for (n = 0; n < e.length; ++n) {
                var a = e[n];
                if (!s.isBuffer(a)) throw new TypeError('"list" argument must be an Array of Buffers');
                a.copy(r, i), i += a.length
            }
            return r
        }, s.byteLength = h, s.prototype._isBuffer = !0, s.prototype.swap16 = function () {
            var e = this.length;
            if (e % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
            for (var t = 0; t < e; t += 2) g(this, t, t + 1);
            return this
        }, s.prototype.swap32 = function () {
            var e = this.length;
            if (e % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
            for (var t = 0; t < e; t += 4) g(this, t, t + 3), g(this, t + 1, t + 2);
            return this
        }, s.prototype.swap64 = function () {
            var e = this.length;
            if (e % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
            for (var t = 0; t < e; t += 8) g(this, t, t + 7), g(this, t + 1, t + 6), g(this, t + 2, t + 5), g(this, t + 3, t + 4);
            return this
        }, s.prototype.toString = function () {
            var e = 0 | this.length;
            return 0 === e ? "" : 0 === arguments.length ? O(this, 0, e) : m.apply(this, arguments)
        }, s.prototype.equals = function (e) {
            if (!s.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
            return this === e || 0 === s.compare(this, e)
        }, s.prototype.inspect = function () {
            var e = "", n = t.INSPECT_MAX_BYTES;
            return this.length > 0 && (e = this.toString("hex", 0, n).match(/.{2}/g).join(" "), this.length > n && (e += " ... ")), "<Buffer " + e + ">"
        }, s.prototype.compare = function (e, t, n, r, i) {
            if (!s.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
            if (void 0 === t && (t = 0), void 0 === n && (n = e ? e.length : 0), void 0 === r && (r = 0), void 0 === i && (i = this.length), t < 0 || n > e.length || r < 0 || i > this.length) throw new RangeError("out of range index");
            if (r >= i && t >= n) return 0;
            if (r >= i) return -1;
            if (t >= n) return 1;
            if (this === e) return 0;
            for (var o = (i >>>= 0) - (r >>>= 0), a = (n >>>= 0) - (t >>>= 0), l = Math.min(o, a), c = this.slice(r, i), u = e.slice(t, n), f = 0; f < l; ++f) if (c[f] !== u[f]) {
                o = c[f], a = u[f];
                break
            }
            return o < a ? -1 : a < o ? 1 : 0
        }, s.prototype.includes = function (e, t, n) {
            return -1 !== this.indexOf(e, t, n)
        }, s.prototype.indexOf = function (e, t, n) {
            return b(this, e, t, n, !0)
        }, s.prototype.lastIndexOf = function (e, t, n) {
            return b(this, e, t, n, !1)
        }, s.prototype.write = function (e, t, n, r) {
            if (void 0 === t) r = "utf8", n = this.length, t = 0; else if (void 0 === n && "string" == typeof t) r = t, n = this.length, t = 0; else {
                if (!isFinite(t)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                t |= 0, isFinite(n) ? (n |= 0, void 0 === r && (r = "utf8")) : (r = n, n = void 0)
            }
            var i = this.length - t;
            if ((void 0 === n || n > i) && (n = i), e.length > 0 && (n < 0 || t < 0) || t > this.length) throw new RangeError("Attempt to write outside buffer bounds");
            r || (r = "utf8");
            for (var o = !1; ;) switch (r) {
                case"hex":
                    return v(this, e, t, n);
                case"utf8":
                case"utf-8":
                    return _(this, e, t, n);
                case"ascii":
                    return w(this, e, t, n);
                case"latin1":
                case"binary":
                    return x(this, e, t, n);
                case"base64":
                    return C(this, e, t, n);
                case"ucs2":
                case"ucs-2":
                case"utf16le":
                case"utf-16le":
                    return E(this, e, t, n);
                default:
                    if (o) throw new TypeError("Unknown encoding: " + r);
                    r = ("" + r).toLowerCase(), o = !0
            }
        }, s.prototype.toJSON = function () {
            return {type: "Buffer", data: Array.prototype.slice.call(this._arr || this, 0)}
        };
        var T = 4096;

        function R(e, t, n) {
            var r = "";
            n = Math.min(e.length, n);
            for (var i = t; i < n; ++i) r += String.fromCharCode(127 & e[i]);
            return r
        }

        function S(e, t, n) {
            var r = "";
            n = Math.min(e.length, n);
            for (var i = t; i < n; ++i) r += String.fromCharCode(e[i]);
            return r
        }

        function A(e, t, n) {
            var r = e.length;
            (!t || t < 0) && (t = 0), (!n || n < 0 || n > r) && (n = r);
            for (var i = "", o = t; o < n; ++o) i += H(e[o]);
            return i
        }

        function j(e, t, n) {
            for (var r = e.slice(t, n), i = "", o = 0; o < r.length; o += 2) i += String.fromCharCode(r[o] + 256 * r[o + 1]);
            return i
        }

        function P(e, t, n) {
            if (e % 1 != 0 || e < 0) throw new RangeError("offset is not uint");
            if (e + t > n) throw new RangeError("Trying to access beyond buffer length")
        }

        function D(e, t, n, r, i, o) {
            if (!s.isBuffer(e)) throw new TypeError('"buffer" argument must be a Buffer instance');
            if (t > i || t < o) throw new RangeError('"value" argument is out of bounds');
            if (n + r > e.length) throw new RangeError("Index out of range")
        }

        function L(e, t, n, r) {
            t < 0 && (t = 65535 + t + 1);
            for (var i = 0, o = Math.min(e.length - n, 2); i < o; ++i) e[n + i] = (t & 255 << 8 * (r ? i : 1 - i)) >>> 8 * (r ? i : 1 - i)
        }

        function I(e, t, n, r) {
            t < 0 && (t = 4294967295 + t + 1);
            for (var i = 0, o = Math.min(e.length - n, 4); i < o; ++i) e[n + i] = t >>> 8 * (r ? i : 3 - i) & 255
        }

        function M(e, t, n, r, i, o) {
            if (n + r > e.length) throw new RangeError("Index out of range");
            if (n < 0) throw new RangeError("Index out of range")
        }

        function B(e, t, n, r, o) {
            return o || M(e, 0, n, 4), i.write(e, t, n, r, 23, 4), n + 4
        }

        function z(e, t, n, r, o) {
            return o || M(e, 0, n, 8), i.write(e, t, n, r, 52, 8), n + 8
        }

        s.prototype.slice = function (e, t) {
            var n, r = this.length;
            if ((e = ~~e) < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r), (t = void 0 === t ? r : ~~t) < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r), t < e && (t = e), s.TYPED_ARRAY_SUPPORT) (n = this.subarray(e, t)).__proto__ = s.prototype; else {
                var i = t - e;
                n = new s(i, void 0);
                for (var o = 0; o < i; ++o) n[o] = this[o + e]
            }
            return n
        }, s.prototype.readUIntLE = function (e, t, n) {
            e |= 0, t |= 0, n || P(e, t, this.length);
            for (var r = this[e], i = 1, o = 0; ++o < t && (i *= 256);) r += this[e + o] * i;
            return r
        }, s.prototype.readUIntBE = function (e, t, n) {
            e |= 0, t |= 0, n || P(e, t, this.length);
            for (var r = this[e + --t], i = 1; t > 0 && (i *= 256);) r += this[e + --t] * i;
            return r
        }, s.prototype.readUInt8 = function (e, t) {
            return t || P(e, 1, this.length), this[e]
        }, s.prototype.readUInt16LE = function (e, t) {
            return t || P(e, 2, this.length), this[e] | this[e + 1] << 8
        }, s.prototype.readUInt16BE = function (e, t) {
            return t || P(e, 2, this.length), this[e] << 8 | this[e + 1]
        }, s.prototype.readUInt32LE = function (e, t) {
            return t || P(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + 16777216 * this[e + 3]
        }, s.prototype.readUInt32BE = function (e, t) {
            return t || P(e, 4, this.length), 16777216 * this[e] + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3])
        }, s.prototype.readIntLE = function (e, t, n) {
            e |= 0, t |= 0, n || P(e, t, this.length);
            for (var r = this[e], i = 1, o = 0; ++o < t && (i *= 256);) r += this[e + o] * i;
            return r >= (i *= 128) && (r -= Math.pow(2, 8 * t)), r
        }, s.prototype.readIntBE = function (e, t, n) {
            e |= 0, t |= 0, n || P(e, t, this.length);
            for (var r = t, i = 1, o = this[e + --r]; r > 0 && (i *= 256);) o += this[e + --r] * i;
            return o >= (i *= 128) && (o -= Math.pow(2, 8 * t)), o
        }, s.prototype.readInt8 = function (e, t) {
            return t || P(e, 1, this.length), 128 & this[e] ? -1 * (255 - this[e] + 1) : this[e]
        }, s.prototype.readInt16LE = function (e, t) {
            t || P(e, 2, this.length);
            var n = this[e] | this[e + 1] << 8;
            return 32768 & n ? 4294901760 | n : n
        }, s.prototype.readInt16BE = function (e, t) {
            t || P(e, 2, this.length);
            var n = this[e + 1] | this[e] << 8;
            return 32768 & n ? 4294901760 | n : n
        }, s.prototype.readInt32LE = function (e, t) {
            return t || P(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24
        }, s.prototype.readInt32BE = function (e, t) {
            return t || P(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]
        }, s.prototype.readFloatLE = function (e, t) {
            return t || P(e, 4, this.length), i.read(this, e, !0, 23, 4)
        }, s.prototype.readFloatBE = function (e, t) {
            return t || P(e, 4, this.length), i.read(this, e, !1, 23, 4)
        }, s.prototype.readDoubleLE = function (e, t) {
            return t || P(e, 8, this.length), i.read(this, e, !0, 52, 8)
        }, s.prototype.readDoubleBE = function (e, t) {
            return t || P(e, 8, this.length), i.read(this, e, !1, 52, 8)
        }, s.prototype.writeUIntLE = function (e, t, n, r) {
            (e = +e, t |= 0, n |= 0, r) || D(this, e, t, n, Math.pow(2, 8 * n) - 1, 0);
            var i = 1, o = 0;
            for (this[t] = 255 & e; ++o < n && (i *= 256);) this[t + o] = e / i & 255;
            return t + n
        }, s.prototype.writeUIntBE = function (e, t, n, r) {
            (e = +e, t |= 0, n |= 0, r) || D(this, e, t, n, Math.pow(2, 8 * n) - 1, 0);
            var i = n - 1, o = 1;
            for (this[t + i] = 255 & e; --i >= 0 && (o *= 256);) this[t + i] = e / o & 255;
            return t + n
        }, s.prototype.writeUInt8 = function (e, t, n) {
            return e = +e, t |= 0, n || D(this, e, t, 1, 255, 0), s.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), this[t] = 255 & e, t + 1
        }, s.prototype.writeUInt16LE = function (e, t, n) {
            return e = +e, t |= 0, n || D(this, e, t, 2, 65535, 0), s.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8) : L(this, e, t, !0), t + 2
        }, s.prototype.writeUInt16BE = function (e, t, n) {
            return e = +e, t |= 0, n || D(this, e, t, 2, 65535, 0), s.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8, this[t + 1] = 255 & e) : L(this, e, t, !1), t + 2
        }, s.prototype.writeUInt32LE = function (e, t, n) {
            return e = +e, t |= 0, n || D(this, e, t, 4, 4294967295, 0), s.TYPED_ARRAY_SUPPORT ? (this[t + 3] = e >>> 24, this[t + 2] = e >>> 16, this[t + 1] = e >>> 8, this[t] = 255 & e) : I(this, e, t, !0), t + 4
        }, s.prototype.writeUInt32BE = function (e, t, n) {
            return e = +e, t |= 0, n || D(this, e, t, 4, 4294967295, 0), s.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e) : I(this, e, t, !1), t + 4
        }, s.prototype.writeIntLE = function (e, t, n, r) {
            if (e = +e, t |= 0, !r) {
                var i = Math.pow(2, 8 * n - 1);
                D(this, e, t, n, i - 1, -i)
            }
            var o = 0, a = 1, l = 0;
            for (this[t] = 255 & e; ++o < n && (a *= 256);) e < 0 && 0 === l && 0 !== this[t + o - 1] && (l = 1), this[t + o] = (e / a >> 0) - l & 255;
            return t + n
        }, s.prototype.writeIntBE = function (e, t, n, r) {
            if (e = +e, t |= 0, !r) {
                var i = Math.pow(2, 8 * n - 1);
                D(this, e, t, n, i - 1, -i)
            }
            var o = n - 1, a = 1, l = 0;
            for (this[t + o] = 255 & e; --o >= 0 && (a *= 256);) e < 0 && 0 === l && 0 !== this[t + o + 1] && (l = 1), this[t + o] = (e / a >> 0) - l & 255;
            return t + n
        }, s.prototype.writeInt8 = function (e, t, n) {
            return e = +e, t |= 0, n || D(this, e, t, 1, 127, -128), s.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), e < 0 && (e = 255 + e + 1), this[t] = 255 & e, t + 1
        }, s.prototype.writeInt16LE = function (e, t, n) {
            return e = +e, t |= 0, n || D(this, e, t, 2, 32767, -32768), s.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8) : L(this, e, t, !0), t + 2
        }, s.prototype.writeInt16BE = function (e, t, n) {
            return e = +e, t |= 0, n || D(this, e, t, 2, 32767, -32768), s.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8, this[t + 1] = 255 & e) : L(this, e, t, !1), t + 2
        }, s.prototype.writeInt32LE = function (e, t, n) {
            return e = +e, t |= 0, n || D(this, e, t, 4, 2147483647, -2147483648), s.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8, this[t + 2] = e >>> 16, this[t + 3] = e >>> 24) : I(this, e, t, !0), t + 4
        }, s.prototype.writeInt32BE = function (e, t, n) {
            return e = +e, t |= 0, n || D(this, e, t, 4, 2147483647, -2147483648), e < 0 && (e = 4294967295 + e + 1), s.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e) : I(this, e, t, !1), t + 4
        }, s.prototype.writeFloatLE = function (e, t, n) {
            return B(this, e, t, !0, n)
        }, s.prototype.writeFloatBE = function (e, t, n) {
            return B(this, e, t, !1, n)
        }, s.prototype.writeDoubleLE = function (e, t, n) {
            return z(this, e, t, !0, n)
        }, s.prototype.writeDoubleBE = function (e, t, n) {
            return z(this, e, t, !1, n)
        }, s.prototype.copy = function (e, t, n, r) {
            if (n || (n = 0), r || 0 === r || (r = this.length), t >= e.length && (t = e.length), t || (t = 0), r > 0 && r < n && (r = n), r === n) return 0;
            if (0 === e.length || 0 === this.length) return 0;
            if (t < 0) throw new RangeError("targetStart out of bounds");
            if (n < 0 || n >= this.length) throw new RangeError("sourceStart out of bounds");
            if (r < 0) throw new RangeError("sourceEnd out of bounds");
            r > this.length && (r = this.length), e.length - t < r - n && (r = e.length - t + n);
            var i, o = r - n;
            if (this === e && n < t && t < r) for (i = o - 1; i >= 0; --i) e[i + t] = this[i + n]; else if (o < 1e3 || !s.TYPED_ARRAY_SUPPORT) for (i = 0; i < o; ++i) e[i + t] = this[i + n]; else Uint8Array.prototype.set.call(e, this.subarray(n, n + o), t);
            return o
        }, s.prototype.fill = function (e, t, n, r) {
            if ("string" == typeof e) {
                if ("string" == typeof t ? (r = t, t = 0, n = this.length) : "string" == typeof n && (r = n, n = this.length), 1 === e.length) {
                    var i = e.charCodeAt(0);
                    i < 256 && (e = i)
                }
                if (void 0 !== r && "string" != typeof r) throw new TypeError("encoding must be a string");
                if ("string" == typeof r && !s.isEncoding(r)) throw new TypeError("Unknown encoding: " + r)
            } else "number" == typeof e && (e &= 255);
            if (t < 0 || this.length < t || this.length < n) throw new RangeError("Out of range index");
            if (n <= t) return this;
            var o;
            if (t >>>= 0, n = void 0 === n ? this.length : n >>> 0, e || (e = 0), "number" == typeof e) for (o = t; o < n; ++o) this[o] = e; else {
                var a = s.isBuffer(e) ? e : F(new s(e, r).toString()), l = a.length;
                for (o = 0; o < n - t; ++o) this[o + t] = a[o % l]
            }
            return this
        };
        var U = /[^+\/0-9A-Za-z-_]/g;

        function H(e) {
            return e < 16 ? "0" + e.toString(16) : e.toString(16)
        }

        function F(e, t) {
            var n;
            t = t || 1 / 0;
            for (var r = e.length, i = null, o = [], a = 0; a < r; ++a) {
                if ((n = e.charCodeAt(a)) > 55295 && n < 57344) {
                    if (!i) {
                        if (n > 56319) {
                            (t -= 3) > -1 && o.push(239, 191, 189);
                            continue
                        }
                        if (a + 1 === r) {
                            (t -= 3) > -1 && o.push(239, 191, 189);
                            continue
                        }
                        i = n;
                        continue
                    }
                    if (n < 56320) {
                        (t -= 3) > -1 && o.push(239, 191, 189), i = n;
                        continue
                    }
                    n = 65536 + (i - 55296 << 10 | n - 56320)
                } else i && (t -= 3) > -1 && o.push(239, 191, 189);
                if (i = null, n < 128) {
                    if ((t -= 1) < 0) break;
                    o.push(n)
                } else if (n < 2048) {
                    if ((t -= 2) < 0) break;
                    o.push(n >> 6 | 192, 63 & n | 128)
                } else if (n < 65536) {
                    if ((t -= 3) < 0) break;
                    o.push(n >> 12 | 224, n >> 6 & 63 | 128, 63 & n | 128)
                } else {
                    if (!(n < 1114112)) throw new Error("Invalid code point");
                    if ((t -= 4) < 0) break;
                    o.push(n >> 18 | 240, n >> 12 & 63 | 128, n >> 6 & 63 | 128, 63 & n | 128)
                }
            }
            return o
        }

        function N(e) {
            return r.toByteArray(function (e) {
                if ((e = function (e) {
                    return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "")
                }(e).replace(U, "")).length < 2) return "";
                for (; e.length % 4 != 0;) e += "=";
                return e
            }(e))
        }

        function W(e, t, n, r) {
            for (var i = 0; i < r && !(i + n >= t.length || i >= e.length); ++i) t[i + n] = e[i];
            return i
        }
    }).call(this, n(32))
}, function (e, t) {
    var n;
    n = function () {
        return this
    }();
    try {
        n = n || new Function("return this")()
    } catch (e) {
        "object" == typeof window && (n = window)
    }
    e.exports = n
}, function (e, t, n) {
    "use strict";
    t.byteLength = function (e) {
        var t = c(e), n = t[0], r = t[1];
        return 3 * (n + r) / 4 - r
    }, t.toByteArray = function (e) {
        var t, n, r = c(e), a = r[0], l = r[1], s = new o(function (e, t, n) {
            return 3 * (t + n) / 4 - n
        }(0, a, l)), u = 0, f = l > 0 ? a - 4 : a;
        for (n = 0; n < f; n += 4) t = i[e.charCodeAt(n)] << 18 | i[e.charCodeAt(n + 1)] << 12 | i[e.charCodeAt(n + 2)] << 6 | i[e.charCodeAt(n + 3)], s[u++] = t >> 16 & 255, s[u++] = t >> 8 & 255, s[u++] = 255 & t;
        2 === l && (t = i[e.charCodeAt(n)] << 2 | i[e.charCodeAt(n + 1)] >> 4, s[u++] = 255 & t);
        1 === l && (t = i[e.charCodeAt(n)] << 10 | i[e.charCodeAt(n + 1)] << 4 | i[e.charCodeAt(n + 2)] >> 2, s[u++] = t >> 8 & 255, s[u++] = 255 & t);
        return s
    }, t.fromByteArray = function (e) {
        for (var t, n = e.length, i = n % 3, o = [], a = 0, l = n - i; a < l; a += 16383) o.push(u(e, a, a + 16383 > l ? l : a + 16383));
        1 === i ? (t = e[n - 1], o.push(r[t >> 2] + r[t << 4 & 63] + "==")) : 2 === i && (t = (e[n - 2] << 8) + e[n - 1], o.push(r[t >> 10] + r[t >> 4 & 63] + r[t << 2 & 63] + "="));
        return o.join("")
    };
    for (var r = [], i = [], o = "undefined" != typeof Uint8Array ? Uint8Array : Array, a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", l = 0, s = a.length; l < s; ++l) r[l] = a[l], i[a.charCodeAt(l)] = l;

    function c(e) {
        var t = e.length;
        if (t % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
        var n = e.indexOf("=");
        return -1 === n && (n = t), [n, n === t ? 0 : 4 - n % 4]
    }

    function u(e, t, n) {
        for (var i, o, a = [], l = t; l < n; l += 3) i = (e[l] << 16 & 16711680) + (e[l + 1] << 8 & 65280) + (255 & e[l + 2]), a.push(r[(o = i) >> 18 & 63] + r[o >> 12 & 63] + r[o >> 6 & 63] + r[63 & o]);
        return a.join("")
    }

    i["-".charCodeAt(0)] = 62, i["_".charCodeAt(0)] = 63
}, function (e, t) {
    t.read = function (e, t, n, r, i) {
        var o, a, l = 8 * i - r - 1, s = (1 << l) - 1, c = s >> 1, u = -7, f = n ? i - 1 : 0, p = n ? -1 : 1,
            d = e[t + f];
        for (f += p, o = d & (1 << -u) - 1, d >>= -u, u += l; u > 0; o = 256 * o + e[t + f], f += p, u -= 8) ;
        for (a = o & (1 << -u) - 1, o >>= -u, u += r; u > 0; a = 256 * a + e[t + f], f += p, u -= 8) ;
        if (0 === o) o = 1 - c; else {
            if (o === s) return a ? NaN : 1 / 0 * (d ? -1 : 1);
            a += Math.pow(2, r), o -= c
        }
        return (d ? -1 : 1) * a * Math.pow(2, o - r)
    }, t.write = function (e, t, n, r, i, o) {
        var a, l, s, c = 8 * o - i - 1, u = (1 << c) - 1, f = u >> 1,
            p = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0, d = r ? 0 : o - 1, h = r ? 1 : -1,
            m = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;
        for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (l = isNaN(t) ? 1 : 0, a = u) : (a = Math.floor(Math.log(t) / Math.LN2), t * (s = Math.pow(2, -a)) < 1 && (a--, s *= 2), (t += a + f >= 1 ? p / s : p * Math.pow(2, 1 - f)) * s >= 2 && (a++, s /= 2), a + f >= u ? (l = 0, a = u) : a + f >= 1 ? (l = (t * s - 1) * Math.pow(2, i), a += f) : (l = t * Math.pow(2, f - 1) * Math.pow(2, i), a = 0)); i >= 8; e[n + d] = 255 & l, d += h, l /= 256, i -= 8) ;
        for (a = a << i | l, c += i; c > 0; e[n + d] = 255 & a, d += h, a /= 256, c -= 8) ;
        e[n + d - h] |= 128 * m
    }
}, function (e, t) {
    var n = {}.toString;
    e.exports = Array.isArray || function (e) {
        return "[object Array]" == n.call(e)
    }
}, function (module, __webpack_exports__, __webpack_require__) {
    "use strict";
    var _module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15),
        _core_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2),
        _logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3),
        _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5),
        _renderer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16);

    function _typeof(e) {
        return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function _classCallCheck(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function _possibleConstructorReturn(e, t) {
        return !t || "object" !== _typeof(t) && "function" != typeof t ? _assertThisInitialized(e) : t
    }

    function _getPrototypeOf(e) {
        return (_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function _assertThisInitialized(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function _defineProperties(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function _createClass(e, t, n) {
        return t && _defineProperties(e.prototype, t), n && _defineProperties(e, n), e
    }

    function _inherits(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                writable: !0,
                configurable: !0
            }
        }), t && _setPrototypeOf(e, t)
    }

    function _setPrototypeOf(e, t) {
        return (_setPrototypeOf = Object.setPrototypeOf || function (e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    var Caman = function (_Module) {
        function Caman() {
            var _this;
            _classCallCheck(this, Caman);
            var thisFn = function () {
                return _assertThisInitialized(_this)
            }.toString(), thisName = thisFn.match(/return (?:_assertThisInitialized\()*(\w+)\)*;?/)[1];
            if (eval("".concat(thisName, " = this;")), 0 === arguments.length) throw"Invalid arguments";
            if (_assertThisInitialized(_this) instanceof Caman) {
                var id;
                _this.finishInit = _this.finishInit.bind(_assertThisInitialized(_this)), _this.imageLoaded = _this.imageLoaded.bind(_assertThisInitialized(_this));
                var args = Array.prototype.slice.call(arguments, 0);
                id = parseInt(Caman.getAttrId(args[0]), 10);
                var callback = "function" == typeof args[1] ? args[1] : "function" == typeof args[2] ? args[2] : function () {
                };
                return !isNaN(id) && _store__WEBPACK_IMPORTED_MODULE_3__.a.has(id) ? _possibleConstructorReturn(_this, _store__WEBPACK_IMPORTED_MODULE_3__.a.execute(id, callback)) : (_this.id = _core_util__WEBPACK_IMPORTED_MODULE_1__.b.uniqid.get(), _this.initializedPixelData = _this.originalPixelData = null, _this.cropCoordinates = {
                    x: 0,
                    y: 0
                }, _this.cropped = !1, _this.resized = !1, _this.pixelStack = [], _this.layerStack = [], _this.canvasQueue = [], _this.currentLayer = null, _this.scaled = !1, _this.renderer = new _renderer__WEBPACK_IMPORTED_MODULE_4__.a(_assertThisInitialized(_this)), _this.domIsLoaded((function () {
                    return _this.parseArguments(args), _this.setup()
                })), _possibleConstructorReturn(_this, _assertThisInitialized(_this)))
            }
            return _possibleConstructorReturn(_this, new Caman(arguments))
        }

        return _inherits(Caman, _Module), _createClass(Caman, null, [{
            key: "initClass", value: function () {
                this.version = {
                    release: "4.1.2",
                    date: "7/27/2013"
                }, this.DEBUG = !1, this.allowRevert = !0, this.crossOrigin = "anonymous", this.remoteProxy = "", this.proxyParam = "camanProxyUrl", this.autoload = !0, this.angle = 0, this.rotated = !1
            }
        }, {
            key: "toString", value: function () {
                return "Version ".concat(Caman.version.release, ", Released ").concat(Caman.version.date)
            }
        }, {
            key: "getAttrId", value: function (e) {
                return "string" == typeof e && (e = Object(_core_util__WEBPACK_IMPORTED_MODULE_1__.a)(e)), null == e || null == e.getAttribute ? null : e.getAttribute("data-caman-id")
            }
        }]), _createClass(Caman, [{
            key: "domIsLoaded", value: function (e) {
                var t = this;
                if ("complete" === document.readyState) return _logger__WEBPACK_IMPORTED_MODULE_2__.a.debug("DOM initialized"), setTimeout((function () {
                    return e.call(t)
                }), 0);
                return document.addEventListener("readystatechange", (function () {
                    if ("complete" === document.readyState) return _logger__WEBPACK_IMPORTED_MODULE_2__.a.debug("DOM initialized"), e.call(t)
                }), !1)
            }
        }, {
            key: "parseArguments", value: function (e) {
                var t = this;
                if (0 === e.length) throw"Invalid arguments given";
                if (this.initObj = null, this.initType = null, this.imageUrl = null, this.callback = function () {
                }, this.setInitObject(e[0]), 1 !== e.length) {
                    switch (_typeof(e[1])) {
                        case"string":
                            this.imageUrl = e[1];
                            break;
                        case"function":
                            this.callback = e[1]
                    }
                    if (2 !== e.length) return this.callback = e[2], 4 === e.length ? function () {
                        for (var n = [], r = 0, i = Object.keys(e[4] || {}); r < i.length; r++) {
                            var o = i[r], a = e[4][o];
                            n.push(t.options[o] = a)
                        }
                        return n
                    }() : void 0
                }
            }
        }, {
            key: "setInitObject", value: function (e) {
                if ("object" === _typeof(e) ? this.initObj = e : this.initObj = Object(_core_util__WEBPACK_IMPORTED_MODULE_1__.a)(e), null == this.initObj) throw"Could not find image or canvas for initialization.";
                return this.initType = this.initObj.nodeName.toLowerCase()
            }
        }, {
            key: "setup", value: function () {
                switch (this.initType) {
                    case"node":
                        return this.initNode();
                    case"img":
                        return this.initImage();
                    case"canvas":
                        return this.initCanvas()
                }
            }
        }, {
            key: "initImage", value: function () {
                return this.image = this.initObj, this.canvas = document.createElement("canvas"), this.context = this.canvas.getContext("2d"), _core_util__WEBPACK_IMPORTED_MODULE_1__.b.copyAttributes(this.image, this.canvas, {except: ["src"]}), null != this.image.parentNode && this.image.parentNode.replaceChild(this.canvas, this.image), this.imageAdjustments(), this.waitForImageLoaded()
            }
        }, {
            key: "initCanvas", value: function () {
                return this.canvas = this.initObj, this.context = this.canvas.getContext("2d"), null != this.imageUrl ? (this.image = document.createElement("img"), this.image.src = this.imageUrl, this.imageAdjustments(), this.waitForImageLoaded()) : this.finishInit()
            }
        }, {
            key: "imageAdjustments", value: function () {
                if (this.needsHiDPISwap() && (_logger__WEBPACK_IMPORTED_MODULE_2__.a.debug(this.image.src, "->", this.hiDPIReplacement()), this.swapped = !0, this.image.src = this.hiDPIReplacement()), Caman.IO.isRemote(this.image)) return this.image.src = Caman.IO.proxyUrl(this.image.src), _logger__WEBPACK_IMPORTED_MODULE_2__.a.debug("Remote image detected, using URL = ".concat(this.image.src))
            }
        }, {
            key: "waitForImageLoaded", value: function () {
                return this.isImageLoaded() ? this.imageLoaded() : this.image.onload = this.imageLoaded
            }
        }, {
            key: "isImageLoaded", value: function () {
                return !!this.image.complete && (null == this.image.naturalWidth || 0 !== this.image.naturalWidth)
            }
        }, {
            key: "imageWidth", value: function () {
                return this.image.width || this.image.naturalWidth
            }
        }, {
            key: "imageHeight", value: function () {
                return this.image.height || this.image.naturalHeight
            }
        }, {
            key: "imageLoaded", value: function () {
                return _logger__WEBPACK_IMPORTED_MODULE_2__.a.debug("Image loaded. Width = ".concat(this.imageWidth(), ", Height = ").concat(this.imageHeight())), this.swapped ? (this.canvas.width = this.imageWidth() / this.hiDPIRatio(), this.canvas.height = this.imageHeight() / this.hiDPIRatio()) : (this.canvas.width = this.imageWidth(), this.canvas.height = this.imageHeight()), this.finishInit()
            }
        }, {
            key: "finishInit", value: function () {
                if (null == this.context && (this.context = this.canvas.getContext("2d")), this.originalWidth = this.preScaledWidth = this.width = this.canvas.width, this.originalHeight = this.preScaledHeight = this.height = this.canvas.height, this.hiDPIAdjustments(), this.hasId() || this.assignId(), null != this.image && this.context.drawImage(this.image, 0, 0, this.imageWidth(), this.imageHeight(), 0, 0, this.preScaledWidth, this.preScaledHeight), this.imageData = this.context.getImageData(0, 0, this.canvas.width, this.canvas.height), this.pixelData = this.imageData.data, Caman.allowRevert) {
                    this.initializedPixelData = _core_util__WEBPACK_IMPORTED_MODULE_1__.b.dataArray(this.pixelData.length), this.originalPixelData = _core_util__WEBPACK_IMPORTED_MODULE_1__.b.dataArray(this.pixelData.length);
                    for (var e = 0; e < this.pixelData.length; e++) {
                        var t = this.pixelData[e];
                        this.initializedPixelData[e] = t, this.originalPixelData[e] = t
                    }
                }
                return this.dimensions = {
                    width: this.canvas.width,
                    height: this.canvas.height
                }, _store__WEBPACK_IMPORTED_MODULE_3__.a.put(this.id, this), this.callback.call(this, this), this.callback = function () {
                }
            }
        }, {
            key: "reloadCanvasData", value: function () {
                return this.imageData = this.context.getImageData(0, 0, this.canvas.width, this.canvas.height), this.pixelData = this.imageData.data
            }
        }, {
            key: "resetOriginalPixelData", value: function () {
                var e = this;
                if (!Caman.allowRevert) throw"Revert disabled";
                return this.originalPixelData = _core_util__WEBPACK_IMPORTED_MODULE_1__.b.dataArray(this.pixelData.length), Array.from(this.pixelData).map((function (t, n) {
                    return e.originalPixelData[n] = t
                }))
            }
        }, {
            key: "hasId", value: function () {
                return null != Caman.getAttrId(this.canvas)
            }
        }, {
            key: "assignId", value: function () {
                if (!this.canvas.getAttribute("data-caman-id")) return this.canvas.setAttribute("data-caman-id", this.id)
            }
        }, {
            key: "hiDPIDisabled", value: function () {
                return null !== this.canvas.getAttribute("data-caman-hidpi-disabled")
            }
        }, {
            key: "hiDPIAdjustments", value: function () {
                if (this.needsHiDPISwap()) {
                    var e = this.hiDPIRatio();
                    return 1 !== e ? (_logger__WEBPACK_IMPORTED_MODULE_2__.a.debug("HiDPI ratio = ".concat(e)), this.scaled = !0, this.preScaledWidth = this.canvas.width, this.preScaledHeight = this.canvas.height, this.canvas.width = this.preScaledWidth * e, this.canvas.height = this.preScaledHeight * e, this.canvas.style.width = "".concat(this.preScaledWidth, "px"), this.canvas.style.height = "".concat(this.preScaledHeight, "px"), this.context.scale(e, e), this.width = this.originalWidth = this.canvas.width, this.height = this.originalHeight = this.canvas.height) : void 0
                }
            }
        }, {
            key: "hiDPIRatio", value: function () {
                return (window.devicePixelRatio || 1) / (this.context.webkitBackingStorePixelRatio || this.context.mozBackingStorePixelRatio || this.context.msBackingStorePixelRatio || this.context.oBackingStorePixelRatio || this.context.backingStorePixelRatio || 1)
            }
        }, {
            key: "hiDPICapable", value: function () {
                return null != window.devicePixelRatio && 1 !== window.devicePixelRatio
            }
        }, {
            key: "needsHiDPISwap", value: function () {
                return !(this.hiDPIDisabled() || !this.hiDPICapable()) && null !== this.hiDPIReplacement()
            }
        }, {
            key: "hiDPIReplacement", value: function () {
                return null == this.image ? null : this.image.getAttribute("data-caman-hidpi")
            }
        }, {
            key: "replaceCanvas", value: function (e) {
                var t = this.canvas;
                return this.canvas = e, this.context = this.canvas.getContext("2d"), t.parentNode.replaceChild(this.canvas, t), this.width = this.canvas.width, this.height = this.canvas.height, this.reloadCanvasData(), this.dimensions = {
                    width: this.canvas.width,
                    height: this.canvas.height
                }
            }
        }, {
            key: "render", value: function (e) {
                var t = this;
                return null == e && (e = function () {
                }), Caman.Event.trigger(this, "renderStart"), this.renderer.execute((function () {
                    return t.context.putImageData(t.imageData, 0, 0), e.call(t)
                }))
            }
        }, {
            key: "revert", value: function (e) {
                if (null == e && (e = !0), !Caman.allowRevert) throw"Revert disabled";
                for (var t = this.originalVisiblePixels(), n = 0; n < t.length; n++) {
                    var r = t[n];
                    this.pixelData[n] = r
                }
                if (e) return this.context.putImageData(this.imageData, 0, 0)
            }
        }, {
            key: "reset", value: function () {
                var e = document.createElement("canvas");
                _core_util__WEBPACK_IMPORTED_MODULE_1__.b.copyAttributes(this.canvas, e), e.width = this.originalWidth, e.height = this.originalHeight;
                for (var t = e.getContext("2d"), n = t.getImageData(0, 0, e.width, e.height), r = n.data, i = 0; i < this.initializedPixelData.length; i++) {
                    var o = this.initializedPixelData[i];
                    r[i] = o
                }
                return t.putImageData(n, 0, 0), this.cropCoordinates = {
                    x: 0,
                    y: 0
                }, this.resized = !1, this.angle = 0, this.rotated = !1, this.replaceCanvas(e)
            }
        }, {
            key: "originalVisiblePixels", value: function () {
                var e, t, n, r;
                if (!Caman.allowRevert) throw"Revert disabled";
                var i = [], o = this.cropCoordinates.x, a = o + this.width, l = this.cropCoordinates.y,
                    s = l + this.height;
                if (this.resized) {
                    var c = document.createElement("canvas");
                    c.width = this.originalWidth, c.height = this.originalHeight;
                    var u = c.getContext("2d"), f = u.getImageData(0, 0, c.width, c.height);
                    for (t = f.data, e = 0; e < this.originalPixelData.length; e++) {
                        var p = this.originalPixelData[e];
                        t[e] = p
                    }
                    u.putImageData(f, 0, 0);
                    var d = document.createElement("canvas");
                    d.width = this.width, d.height = this.height, (u = d.getContext("2d")).drawImage(c, 0, 0, this.originalWidth, this.originalHeight, 0, 0, this.width, this.height), t = u.getImageData(0, 0, this.width, this.height).data, n = this.width
                } else if (this.rotated) {
                    var h = document.createElement("canvas");
                    h.width = this.originalWidth, h.height = this.originalHeight;
                    var m = h.getContext("2d"), g = m.getImageData(0, 0, h.width, h.height);
                    t = g.data;
                    var b, y, v, _, w = this.originalPixelData;
                    for (b = y = 0, v = w.length; y < v; b = ++y) _ = w[b], t[b] = _;
                    m.putImageData(g, 0, 0);
                    var x = document.createElement("canvas"), C = x.getContext("2d");
                    x.width = this.canvas.width, x.height = this.canvas.height;
                    var E = x.width / 2, k = x.height / 2;
                    C.save(), C.translate(E, k), C.rotate(this.angle * Math.PI / 180), C.drawImage(h, -h.width / 2, -h.height / 2, h.width, h.height), C.restore(), t = C.getImageData(0, 0, x.width, x.height).data, n = x.width
                } else t = this.originalPixelData, n = this.originalWidth;
                for (e = 0, r = t.length; e < r; e += 4) {
                    var O = Caman.Pixel.locationToCoordinates(e, n);
                    o <= O.x && O.x < a && l <= O.y && O.y < s && i.push(t[e], t[e + 1], t[e + 2], t[e + 3])
                }
                return i
            }
        }, {
            key: "process", value: function (e, t) {
                return this.renderer.add({type: Caman.Filter.Type.Single, name: e, processFn: t}), this
            }
        }, {
            key: "processKernel", value: function (e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                    r = arguments.length > 3 ? arguments[3] : void 0;
                if (null == r && (r = 0), null == n) {
                    n = 0;
                    for (var i = 0, o = t.length, a = 0 <= o; a ? i < o : i > o; a ? i++ : i--) n += t[i]
                }
                return this.renderer.add({
                    type: Caman.Filter.Type.Kernel,
                    name: e,
                    adjust: t,
                    divisor: n,
                    bias: r
                }), this
            }
        }, {
            key: "processPlugin", value: function (e, t) {
                return this.renderer.add({type: Caman.Filter.Type.Plugin, plugin: e, args: t}), this
            }
        }, {
            key: "newLayer", value: function (e) {
                var t = new Caman.Layer(this);
                return this.canvasQueue.push(t), this.renderer.add({type: Caman.Filter.Type.LayerDequeue}), e.call(t), this.renderer.add({type: Caman.Filter.Type.LayerFinished}), this
            }
        }, {
            key: "executeLayer", value: function (e) {
                return this.pushContext(e)
            }
        }, {
            key: "pushContext", value: function (e) {
                return this.layerStack.push(this.currentLayer), this.pixelStack.push(this.pixelData), this.currentLayer = e, this.pixelData = e.pixelData
            }
        }, {
            key: "popContext", value: function () {
                return this.pixelData = this.pixelStack.pop(), this.currentLayer = this.layerStack.pop()
            }
        }, {
            key: "applyCurrentLayer", value: function () {
                return this.currentLayer.applyToParent()
            }
        }, {
            key: "save", value: function () {
                return this.browserSave.apply(this, arguments)
            }
        }, {
            key: "browserSave", value: function (e) {
                null == e && (e = "png"), e = e.toLowerCase();
                var t = this.toBase64(e).replace("image/".concat(e), "image/octet-stream");
                return document.location.href = t
            }
        }, {
            key: "toImage", value: function (e) {
                var t = new Image;
                return t.src = this.toBase64(e), t.width = this.dimensions.width, t.height = this.dimensions.height, window.devicePixelRatio && (t.width /= window.devicePixelRatio, t.height /= window.devicePixelRatio), t
            }
        }, {
            key: "toBase64", value: function (e) {
                return null == e && (e = "png"), e = e.toLowerCase(), this.canvas.toDataURL("image/".concat(e))
            }
        }]), Caman
    }(_module__WEBPACK_IMPORTED_MODULE_0__.a);
    Caman.initClass(), window.Caman = Caman;
    var _default = Caman, _unused_webpack_default_export = _default,
        _temp = void ("undefined" != typeof __REACT_HOT_LOADER__ && (__REACT_HOT_LOADER__.register(Caman, "Caman", "/Users/dmitry/scaleflex/plugins/filerobot-image-editor/projects/react/lib/caman/core/index.js"), __REACT_HOT_LOADER__.register(_default, "default", "/Users/dmitry/scaleflex/plugins/filerobot-image-editor/projects/react/lib/caman/core/index.js")))
}, function (e, t) {
    function n(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    var r = function () {
        function e() {
            !function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, e)
        }

        var t, r, i;
        return t = e, i = [{
            key: "distance", value: function (e, t, n, r) {
                return Math.sqrt(Math.pow(n - e, 2) + Math.pow(r - t, 2))
            }
        }, {
            key: "randomRange", value: function (e, t, n) {
                null == n && (n = !1);
                var r = e + Math.random() * (t - e);
                return n ? r.toFixed(n) : Math.round(r)
            }
        }, {
            key: "luminance", value: function (e) {
                return .299 * e.r + .587 * e.g + .114 * e.b
            }
        }, {
            key: "bezier", value: function (e, t, n, r, i, o) {
                var a;
                if (null == i && (i = 0), null == o && (o = 255), e[0] instanceof Array ? (a = e, i = t, o = n) : a = [e, t, n, r], a.length < 2) throw"Invalid number of arguments to bezier";
                for (var l, s, c, u = {}, f = function (e, t, n) {
                    return e * (1 - n) + t * n
                }, p = 0; p < 1e3; p++) {
                    for (var d = p / 1e3, h = a; h.length > 1;) {
                        for (var m = [], g = 0, b = h.length - 2, y = 0 <= b; y ? g <= b : g >= b; y ? g++ : g--) m.push([f(h[g][0], h[g + 1][0], d), f(h[g][1], h[g + 1][1], d)]);
                        h = m
                    }
                    u[Math.round(h[0][0])] = Math.round((l = h[0][1], s = i, c = o, Math.min(Math.max(l, s), c)))
                }
                var v = a[a.length - 1][0];
                return u = Caman.Calculate.missingValues(u, v), null == u[v] && (u[v] = u[v - 1]), u
            }
        }, {
            key: "hermite", value: function (e, t, n) {
                if (e.length < 2) throw"Invalid number of arguments to hermite";
                for (var r, i, o, a, l = {}, s = function (e, t) {
                    return [e[0] * t[0], e[1] * t[1]]
                }, c = function (e, t) {
                    return [e[0] - t[0], e[1] - t[1]]
                }, u = function (e, t, n) {
                    return Math.min(Math.max(e, t), n)
                }, f = 0, p = e.length - 2, d = 0 <= p; d ? f <= p : f >= p; d ? f++ : f--) {
                    var h = e[f], m = e[f + 1], g = m[0] - h[0], b = 1 / g;
                    f === e.length - 2 && (b = 1 / (g - 1));
                    for (var y = f > 0 ? e[f - 1] : h, v = s(c(m, y), [.5, .5]), _ = s(c(y = f < e.length - 2 ? e[f + 2] : m, h), [.5, .5]), w = 0, x = g, C = 0 <= x; C ? w <= x : w >= x; C ? w++ : w--) {
                        var E = w * b, k = 2 * E * E * E - 3 * E * E + 1, O = E * E * E - 2 * E * E + E,
                            T = -2 * E * E * E + 3 * E * E, R = E * E * E - E * E,
                            S = (r = s(h, [k, k]), i = s(v, [O, O]), o = s(m, [T, T]), a = s(_, [R, R]), [r[0] + i[0] + o[0] + a[0], r[1] + i[1] + o[1] + a[1]]);
                        l[Math.round(S[0])] = Math.round(u(S[1], t, n))
                    }
                }
                var A = e[e.length - 1][0];
                return l = Caman.Calculate.missingValues(l, A)
            }
        }, {
            key: "missingValues", value: function (e, t) {
                var n, r, i, o, a, l, s;
                if (Object.keys(e).length < t + 1) {
                    for (o = {}, n = l = 0; 0 <= t ? l <= t : l >= t; n = 0 <= t ? ++l : --l) if (null != e[n]) o[n] = e[n]; else {
                        for (i = [n - 1, o[n - 1]], r = s = n; n <= t ? s <= t : s >= t; r = n <= t ? ++s : --s) if (null != e[r]) {
                            a = [r, e[r]];
                            break
                        }
                        a || (a = [0, 0]), o[n] = i[1] + (a[1] - i[1]) / (a[0] - i[0]) * (n - i[0])
                    }
                    return o
                }
                return e
            }
        }], (r = null) && n(t.prototype, r), i && n(t, i), e
    }();
    Caman.Calculate = r;
    "undefined" != typeof __REACT_HOT_LOADER__ && __REACT_HOT_LOADER__.register(r, "Calculate", "/Users/dmitry/scaleflex/plugins/filerobot-image-editor/projects/react/lib/caman/core/calculate.js")
}, function (e, t) {
    function n(e) {
        return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function r(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    var i = function () {
        function e() {
            !function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, e)
        }

        var t, i, o;
        return t = e, o = [{
            key: "hexToRGB", value: function (e) {
                return "#" === e.charAt(0) && (e = e.substr(1)), {
                    r: parseInt(e.substr(0, 2), 16),
                    g: parseInt(e.substr(2, 2), 16),
                    b: parseInt(e.substr(4, 2), 16)
                }
            }
        }, {
            key: "rgbToHSL", value: function (e, t, r) {
                var i, o;
                "object" === n(e) && (t = e.g, r = e.b, e = e.r), e /= 255, t /= 255, r /= 255;
                var a = Math.max(e, t, r), l = Math.min(e, t, r), s = (a + l) / 2;
                if (a === l) i = o = 0; else {
                    var c = a - l;
                    o = s > .5 ? c / (2 - a - l) : c / (a + l), i = function () {
                        switch (a) {
                            case e:
                                return (t - r) / c + (t < r ? 6 : 0);
                            case t:
                                return (r - e) / c + 2;
                            case r:
                                return (e - t) / c + 4
                        }
                    }(), i /= 6
                }
                return {h: i, s: o, l: s}
            }
        }, {
            key: "hslToRGB", value: function (e, t, r) {
                var i, o, a;
                if ("object" === n(e) && (t = e.s, r = e.l, e = e.h), 0 === t) a = o = i = r; else {
                    var l = r < .5 ? r * (1 + t) : r + t - r * t, s = 2 * r - l;
                    a = this.hueToRGB(s, l, e + 1 / 3), o = this.hueToRGB(s, l, e), i = this.hueToRGB(s, l, e - 1 / 3)
                }
                return {r: 255 * a, g: 255 * o, b: 255 * i}
            }
        }, {
            key: "hueToRGB", value: function (e, t, n) {
                return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + 6 * (t - e) * n : n < .5 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
            }
        }, {
            key: "rgbToHSV", value: function (e, t, n) {
                var r;
                e /= 255, t /= 255, n /= 255;
                var i = Math.max(e, t, n), o = Math.min(e, t, n), a = i, l = i - o, s = 0 === i ? 0 : l / i;
                return i === o ? r = 0 : (r = function () {
                    switch (i) {
                        case e:
                            return (t - n) / l + (t < n ? 6 : 0);
                        case t:
                            return (n - e) / l + 2;
                        case n:
                            return (e - t) / l + 4
                    }
                }(), r /= 6), {h: r, s: s, v: a}
            }
        }, {
            key: "hsvToRGB", value: function (e, t, n) {
                var r, i, o, a = Math.floor(6 * e), l = 6 * e - a, s = n * (1 - t), c = n * (1 - l * t),
                    u = n * (1 - (1 - l) * t);
                switch (a % 6) {
                    case 0:
                        o = n, i = u, r = s;
                        break;
                    case 1:
                        o = c, i = n, r = s;
                        break;
                    case 2:
                        o = s, i = n, r = u;
                        break;
                    case 3:
                        o = s, i = c, r = n;
                        break;
                    case 4:
                        o = u, i = s, r = n;
                        break;
                    case 5:
                        o = n, i = s, r = c
                }
                return {r: Math.floor(255 * o), g: Math.floor(255 * i), b: Math.floor(255 * r)}
            }
        }, {
            key: "rgbToXYZ", value: function (e, t, n) {
                return t /= 255, n /= 255, (e /= 255) > .04045 ? e = Math.pow((e + .055) / 1.055, 2.4) : e /= 12.92, t > .04045 ? t = Math.pow((t + .055) / 1.055, 2.4) : t /= 12.92, n > .04045 ? n = Math.pow((n + .055) / 1.055, 2.4) : n /= 12.92, {
                    x: 100 * (.4124 * e + .3576 * t + .1805 * n),
                    y: 100 * (.2126 * e + .7152 * t + .0722 * n),
                    z: 100 * (.0193 * e + .1192 * t + .9505 * n)
                }
            }
        }, {
            key: "xyzToRGB", value: function (e, t, n) {
                var r = 3.2406 * (e /= 100) + -1.5372 * (t /= 100) + -.4986 * (n /= 100),
                    i = -.9689 * e + 1.8758 * t + .0415 * n, o = .0557 * e + -.204 * t + 1.057 * n;
                return r > .0031308 ? r = 1.055 * Math.pow(r, .4166666667) - .055 : r *= 12.92, i > .0031308 ? i = 1.055 * Math.pow(i, .4166666667) - .055 : i *= 12.92, o > .0031308 ? o = 1.055 * Math.pow(o, .4166666667) - .055 : o *= 12.92, {
                    r: 255 * r,
                    g: 255 * i,
                    b: 255 * o
                }
            }
        }, {
            key: "xyzToLab", value: function (e, t, r) {
                return "object" === n(e) && (t = e.y, r = e.z, e = e.x), t /= 100, r /= 108.883, e = (e /= 95.047) > .008856451679 ? Math.pow(e, .3333333333) : 7.787037037 * e + .1379310345, {
                    l: 116 * (t = t > .008856451679 ? Math.pow(t, .3333333333) : 7.787037037 * t + .1379310345) - 16,
                    a: 500 * (e - t),
                    b: 200 * (t - (r = r > .008856451679 ? Math.pow(r, .3333333333) : 7.787037037 * r + .1379310345))
                }
            }
        }, {
            key: "labToXYZ", value: function (e, t, r) {
                "object" === n(e) && (t = e.a, r = e.b, e = e.l);
                var i = (e + 16) / 116, o = i + t / 500, a = i - r / 200;
                return o > .2068965517 ? o *= o * o : o = .1284185493 * (o - .1379310345), i > .2068965517 ? i *= i * i : i = .1284185493 * (i - .1379310345), a > .2068965517 ? a *= a * a : a = .1284185493 * (a - .1379310345), {
                    x: 95.047 * o,
                    y: 100 * i,
                    z: 108.883 * a
                }
            }
        }, {
            key: "rgbToLab", value: function (e, t, r) {
                "object" === n(e) && (t = e.g, r = e.b, e = e.r);
                var i = this.rgbToXYZ(e, t, r);
                return this.xyzToLab(i)
            }
        }, {
            key: "labToRGB", value: function (e, t, n) {
            }
        }], (i = null) && r(t.prototype, i), o && r(t, o), e
    }();
    Caman.Convert = i;
    "undefined" != typeof __REACT_HOT_LOADER__ && __REACT_HOT_LOADER__.register(i, "Convert", "/Users/dmitry/scaleflex/plugins/filerobot-image-editor/projects/react/lib/caman/core/convert.js")
}, function (e, t) {
    function n(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    var r = function () {
        function e() {
            !function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, e)
        }

        var t, r, i;
        return t = e, i = [{
            key: "initClass", value: function () {
                this.events = {}, this.types = ["processStart", "processComplete", "renderStart", "renderFinished", "blockStarted", "blockFinished"]
            }
        }, {
            key: "trigger", value: function (e, t) {
                var n = this, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                if (this.events[t] && this.events[t].length) return function () {
                    for (var i = [], o = 0, a = Array.from(n.events[t]); o < a.length; o++) {
                        var l = a[o];
                        null === l.target || e.id === l.target.id ? i.push(l.fn.call(e, r)) : i.push(void 0)
                    }
                    return i
                }()
            }
        }, {
            key: "listen", value: function (e, t, n) {
                if ("string" == typeof e) {
                    var r = e, i = t;
                    e = null, t = r, n = i
                }
                return !!Array.from(this.types).includes(t) && (this.events[t] || (this.events[t] = []), this.events[t].push({
                    target: e,
                    fn: n
                }), !0)
            }
        }], (r = null) && n(t.prototype, r), i && n(t, i), e
    }();
    r.initClass(), Caman.Event = r;
    "undefined" != typeof __REACT_HOT_LOADER__ && __REACT_HOT_LOADER__.register(r, "Event", "/Users/dmitry/scaleflex/plugins/filerobot-image-editor/projects/react/lib/caman/core/event.js")
}, function (e, t) {
    function n(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    var r = function () {
        function e() {
            !function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, e)
        }

        var t, r, i;
        return t = e, i = [{
            key: "initClass", value: function () {
                this.Type = {
                    Single: 1,
                    Kernel: 2,
                    LayerDequeue: 3,
                    LayerFinished: 4,
                    LoadOverlay: 5,
                    LoadLayerMask: 7,
                    Plugin: 6
                }
            }
        }, {
            key: "register", value: function (e, t) {
                return window.Caman.prototype[e] = t
            }
        }], (r = null) && n(t.prototype, r), i && n(t, i), e
    }();
    r.initClass(), Caman.Filter = r;
    "undefined" != typeof __REACT_HOT_LOADER__ && __REACT_HOT_LOADER__.register(r, "Filter", "/Users/dmitry/scaleflex/plugins/filerobot-image-editor/projects/react/lib/caman/core/filter.js")
}, function (e, t) {
    function n(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function r(e, t, r) {
        return t && n(e.prototype, t), r && n(e, r), e
    }

    var i = function () {
        function e(t, n, r, i) {
            var o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
            !function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, e), null == t && (t = 0), this.r = t, null == n && (n = 0), this.g = n, null == r && (r = 0), this.b = r, null == i && (i = 255), this.a = i, this.c = o, this.loc = 0
        }

        return r(e, null, [{
            key: "coordinatesToLocation", value: function (e, t, n) {
                return 4 * (t * n + e)
            }
        }, {
            key: "locationToCoordinates", value: function (e, t) {
                return {x: e % (4 * t) / 4, y: Math.floor(e / (4 * t))}
            }
        }]), r(e, [{
            key: "setContext", value: function (e) {
                return this.c = e
            }
        }, {
            key: "locationXY", value: function () {
                if (null == this.c) throw"Requires a CamanJS context";
                var e = this.c.dimensions.height - Math.floor(this.loc / (4 * this.c.dimensions.width));
                return {x: this.loc % (4 * this.c.dimensions.width) / 4, y: e}
            }
        }, {
            key: "pixelAtLocation", value: function (t) {
                if (null == this.c) throw"Requires a CamanJS context";
                return new e(this.c.pixelData[t], this.c.pixelData[t + 1], this.c.pixelData[t + 2], this.c.pixelData[t + 3], this.c)
            }
        }, {
            key: "getPixelRelative", value: function (t, n) {
                if (null == this.c) throw"Requires a CamanJS context";
                var r = this.loc + 4 * this.c.dimensions.width * (-1 * n) + 4 * t;
                return r > this.c.pixelData.length || r < 0 ? new e(0, 0, 0, 255, this.c) : this.pixelAtLocation(r)
            }
        }, {
            key: "putPixelRelative", value: function (e, t, n) {
                if (null == this.c) throw"Requires a CamanJS context";
                this.loc, this.c.dimensions.width;
                if (!(newLoc > this.c.pixelData.length || newLoc < 0)) return this.c.pixelData[newLoc] = n.r, this.c.pixelData[newLoc + 1] = n.g, this.c.pixelData[newLoc + 2] = n.b, this.c.pixelData[newLoc + 3] = n.a, !0
            }
        }, {
            key: "getPixel", value: function (e, t) {
                if (null == this.c) throw"Requires a CamanJS context";
                var n = this.coordinatesToLocation(e, t, this.width);
                return this.pixelAtLocation(n)
            }
        }, {
            key: "putPixel", value: function (e, t, n) {
                if (null == this.c) throw"Requires a CamanJS context";
                var r = this.coordinatesToLocation(e, t, this.width);
                return this.c.pixelData[r] = n.r, this.c.pixelData[r + 1] = n.g, this.c.pixelData[r + 2] = n.b, this.c.pixelData[r + 3] = n.a
            }
        }, {
            key: "toString", value: function () {
                return this.toKey()
            }
        }, {
            key: "toHex", value: function (e) {
                null == e && (e = !1);
                var t = "#" + this.r.toString(16) + this.g.toString(16) + this.b.toString(16);
                return e ? t + this.a.toString(16) : t
            }
        }]), e
    }();
    Caman.Pixel = i;
    "undefined" != typeof __REACT_HOT_LOADER__ && __REACT_HOT_LOADER__.register(i, "Pixel", "/Users/dmitry/scaleflex/plugins/filerobot-image-editor/projects/react/lib/caman/core/pixel.js")
}, function (e, t) {
    function n(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    var r = function () {
        function e() {
            !function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, e)
        }

        var t, r, i;
        return t = e, i = [{
            key: "initClass", value: function () {
                this.plugins = {}
            }
        }, {
            key: "register", value: function (e, t) {
                return this.plugins[e] = t
            }
        }, {
            key: "execute", value: function (e, t, n) {
                return this.plugins[t].apply(e, n)
            }
        }], (r = null) && n(t.prototype, r), i && n(t, i), e
    }();
    r.initClass(), Caman.Plugin = r;
    "undefined" != typeof __REACT_HOT_LOADER__ && __REACT_HOT_LOADER__.register(r, "Plugin", "/Users/dmitry/scaleflex/plugins/filerobot-image-editor/projects/react/lib/caman/core/plugin.js")
}, function (e, t) {
    function n(e) {
        return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    Caman.Filter.register("fillColor", (function () {
        var e;
        return e = 1 === arguments.length ? Caman.Convert.hexToRGB(arguments[0]) : {
            r: arguments[0],
            g: arguments[1],
            b: arguments[2]
        }, this.process("fillColor", (function (t) {
            return t.r = e.r, t.g = e.g, t.b = e.b, t.a = 255, t
        }))
    })), Caman.Filter.register("brightness", (function (e) {
        return e = Math.floor(e / 100 * 255), this.process("brightness", (function (t) {
            return t.r += e, t.g += e, t.b += e, t
        }))
    })), Caman.Filter.register("saturation", (function (e) {
        return e *= -.01, this.process("saturation", (function (t) {
            var n;
            return n = Math.max(t.r, t.g, t.b), t.r !== n && (t.r += (n - t.r) * e), t.g !== n && (t.g += (n - t.g) * e), t.b !== n && (t.b += (n - t.b) * e), t
        }))
    })), Caman.Filter.register("vibrance", (function (e) {
        return e *= -1, this.process("vibrance", (function (t) {
            var n, r, i;
            return i = Math.max(t.r, t.g, t.b), r = (t.r + t.g + t.b) / 3, n = 2 * Math.abs(i - r) / 255 * e / 100, t.r !== i && (t.r += (i - t.r) * n), t.g !== i && (t.g += (i - t.g) * n), t.b !== i && (t.b += (i - t.b) * n), t
        }))
    })), Caman.Filter.register("greyscale", (function (e) {
        return this.process("greyscale", (function (e) {
            var t;
            return t = Caman.Calculate.luminance(e), e.r = t, e.g = t, e.b = t, e
        }))
    })), Caman.Filter.register("contrast", (function (e) {
        return e = Math.pow((e + 100) / 100, 2), this.process("contrast", (function (t) {
            return t.r /= 255, t.r -= .5, t.r *= e, t.r += .5, t.r *= 255, t.g /= 255, t.g -= .5, t.g *= e, t.g += .5, t.g *= 255, t.b /= 255, t.b -= .5, t.b *= e, t.b += .5, t.b *= 255, t
        }))
    })), Caman.Filter.register("hue", (function (e) {
        return this.process("hue", (function (t) {
            var n, r, i, o, a, l;
            return i = 100 * (o = Caman.Convert.rgbToHSV(t.r, t.g, t.b)).h, i += Math.abs(e), i %= 100, i /= 100, o.h = i, a = (l = Caman.Convert.hsvToRGB(o.h, o.s, o.v)).r, r = l.g, n = l.b, t.r = a, t.g = r, t.b = n, t
        }))
    })), Caman.Filter.register("colorize", (function () {
        var e, t;
        return 2 === arguments.length ? (t = Caman.Convert.hexToRGB(arguments[0]), e = arguments[1]) : 4 === arguments.length && (t = {
            r: arguments[0],
            g: arguments[1],
            b: arguments[2]
        }, e = arguments[3]), this.process("colorize", (function (n) {
            return n.r -= (n.r - t.r) * (e / 100), n.g -= (n.g - t.g) * (e / 100), n.b -= (n.b - t.b) * (e / 100), n
        }))
    })), Caman.Filter.register("invert", (function () {
        return this.process("invert", (function (e) {
            return e.r = 255 - e.r, e.g = 255 - e.g, e.b = 255 - e.b, e
        }))
    })), Caman.Filter.register("sepia", (function (e) {
        return null == e && (e = 100), e /= 100, this.process("sepia", (function (t) {
            return t.r = Math.min(255, t.r * (1 - .607 * e) + t.g * (.769 * e) + t.b * (.189 * e)), t.g = Math.min(255, t.r * (.349 * e) + t.g * (1 - .314 * e) + t.b * (.168 * e)), t.b = Math.min(255, t.r * (.272 * e) + t.g * (.534 * e) + t.b * (1 - .869 * e)), t
        }))
    })), Caman.Filter.register("gamma", (function (e) {
        return this.process("gamma", (function (t) {
            return t.r = 255 * Math.pow(t.r / 255, e), t.g = 255 * Math.pow(t.g / 255, e), t.b = 255 * Math.pow(t.b / 255, e), t
        }))
    })), Caman.Filter.register("noise", (function (e) {
        return e = 2.55 * Math.abs(e), this.process("noise", (function (t) {
            var n;
            return n = Caman.Calculate.randomRange(-1 * e, e), t.r += n, t.g += n, t.b += n, t
        }))
    })), Caman.Filter.register("clip", (function (e) {
        return e = 2.55 * Math.abs(e), this.process("clip", (function (t) {
            return t.r > 255 - e ? t.r = 255 : t.r < e && (t.r = 0), t.g > 255 - e ? t.g = 255 : t.g < e && (t.g = 0), t.b > 255 - e ? t.b = 255 : t.b < e && (t.b = 0), t
        }))
    })), Caman.Filter.register("channels", (function (e) {
        var t;
        if ("object" !== n(e)) return this;
        for (t in e) ({}).hasOwnProperty.call(e, t) && (0 !== e[t] ? e[t] /= 100 : delete e[t]);
        return 0 === e.length ? this : this.process("channels", (function (t) {
            return null != e.red && (e.red > 0 ? t.r += (255 - t.r) * e.red : t.r -= t.r * Math.abs(e.red)), null != e.green && (e.green > 0 ? t.g += (255 - t.g) * e.green : t.g -= t.g * Math.abs(e.green)), null != e.blue && (e.blue > 0 ? t.b += (255 - t.b) * e.blue : t.b -= t.b * Math.abs(e.blue)), t
        }))
    })), Caman.Filter.register("curves", (function () {
        var e, t, n, r, i, o, a, l, s, c, u, f;
        if (n = arguments[0], "function" == typeof (a = (r = 2 <= arguments.length ? [].slice.call(arguments, 1) : [])[r.length - 1]) ? (e = a, r.pop()) : "string" == typeof a ? (e = Caman.Calculate[a], r.pop()) : e = Caman.Calculate.bezier, "string" == typeof n && (n = n.split("")), "v" === n[0] && (n = ["r", "g", "b"]), r.length < 2) throw"Invalid number of arguments to curves filter";
        if (t = e(r, 0, 255), (l = r[0])[0] > 0) for (o = s = 0, u = l[0]; 0 <= u ? s < u : s > u; o = 0 <= u ? ++s : --s) t[o] = l[1];
        if ((i = r[r.length - 1])[0] < 255) for (o = c = f = i[0]; f <= 255 ? c <= 255 : c >= 255; o = f <= 255 ? ++c : --c) t[o] = i[1];
        return this.process("curves", (function (e) {
            var r, i;
            for (o = r = 0, i = n.length; 0 <= i ? r < i : r > i; o = 0 <= i ? ++r : --r) e[n[o]] = t[e[n[o]]];
            return e
        }))
    })), Caman.Filter.register("exposure", (function (e) {
        var t, n, r;
        return t = [0, 255 * (r = Math.abs(e) / 100)], n = [255 - 255 * r, 255], e < 0 && (t = t.reverse(), n = n.reverse()), this.curves("rgb", [0, 0], t, n, [255, 255])
    }))
}, function (e, t) {
    Caman.Filter.register("boxBlur", (function () {
        return this.processKernel("Box Blur", [1, 1, 1, 1, 1, 1, 1, 1, 1])
    })), Caman.Filter.register("heavyRadialBlur", (function () {
        return this.processKernel("Heavy Radial Blur", [0, 0, 1, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 1, 0, 0])
    })), Caman.Filter.register("gaussianBlur", (function () {
        return this.processKernel("Gaussian Blur", [1, 4, 6, 4, 1, 4, 16, 24, 16, 4, 6, 24, 36, 24, 6, 4, 16, 24, 16, 4, 1, 4, 6, 4, 1])
    })), Caman.Filter.register("motionBlur", (function (e) {
        var t;
        return t = 0 === e || 180 === e ? [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0] : e > 0 && e < 90 || e > 180 && e < 270 ? [0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0] : 90 === e || 270 === e ? [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] : [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1], this.processKernel("Motion Blur", t)
    })), Caman.Filter.register("sharpen", (function (e) {
        return null == e && (e = 100), e /= 100, this.processKernel("Sharpen", [0, -e, 0, -e, 4 * e + 1, -e, 0, -e, 0])
    }))
}, function (e, t) {
    Caman.Filter.register("vignette", (function (e, t) {
        var n, r, i, o;
        return null == t && (t = 60), "string" == typeof e && "%" === e.substr(-1) && (e = this.dimensions.height > this.dimensions.width ? this.dimensions.width * (parseInt(e.substr(0, e.length - 1), 10) / 100) : this.dimensions.height * (parseInt(e.substr(0, e.length - 1), 10) / 100)), t /= 100, r = [this.dimensions.width / 2, this.dimensions.height / 2], o = Math.sqrt(Math.pow(r[0], 2) + Math.pow(r[1], 2)), i = o - e, n = Caman.Calculate.bezier([0, 1], [30, 30], [70, 60], [100, 80]), this.process("vignette", (function (o) {
            var a, l, s;
            return s = o.locationXY(), (a = Caman.Calculate.distance(s.x, s.y, r[0], r[1])) > i && (l = Math.max(1, n[Math.round((a - i) / e * 100)] / 10 * t), o.r = 255 * Math.pow(o.r / 255, l), o.g = 255 * Math.pow(o.g / 255, l), o.b = 255 * Math.pow(o.b / 255, l)), o
        }))
    }))
}, function (e, t) {
    Caman.Filter.register("posterize", (function (e) {
        var t, n;
        return t = 256 / e, n = 255 / (e - 1), this.process("posterize", (function (e) {
            return e.r = Math.floor(Math.floor(e.r / t) * n), e.g = Math.floor(Math.floor(e.g / t) * n), e.b = Math.floor(Math.floor(e.b / t) * n), e
        }))
    }))
}, function (e, t) {
    Caman.Filter.register("edgeEnhance", (function () {
        return this.processKernel("Edge Enhance", [0, 0, 0, -1, 1, 0, 0, 0, 0])
    })), Caman.Filter.register("edgeDetect", (function () {
        return this.processKernel("Edge Detect", [-1, -1, -1, -1, 8, -1, -1, -1, -1])
    })), Caman.Filter.register("emboss", (function () {
        return this.processKernel("Emboss", [-2, -1, 0, -1, 1, 1, 0, 1, 2])
    }))
}, function (e, t) {
    Caman.Filter.register("grungy", (function () {
        return this.gamma(1.5), this.clip(25), this.saturation(-60), this.contrast(5), this.noise(5), this.vignette("50%", 30)
    }))
}, function (e, t) {
    Caman.Filter.register("hazyDays", (function () {
        return this.gamma(1.2), this.newLayer((function () {
            return this.setBlendingMode("overlay"), this.opacity(60), this.copyParent(), this.filter.channels({red: 5}), this.filter.stackBlur(15)
        })), this.newLayer((function () {
            return this.setBlendingMode("addition"), this.opacity(40), this.fillColor("#6899ba")
        })), this.newLayer((function () {
            return this.setBlendingMode("multiply"), this.opacity(35), this.copyParent(), this.filter.brightness(40), this.filter.vibrance(40), this.filter.exposure(30), this.filter.contrast(15), this.filter.curves("r", [0, 40], [128, 128], [128, 128], [255, 215]), this.filter.curves("g", [0, 40], [128, 128], [128, 128], [255, 215]), this.filter.curves("b", [0, 40], [128, 128], [128, 128], [255, 215]), this.filter.stackBlur(5)
        })), this.curves("r", [20, 0], [128, 158], [128, 128], [235, 255]), this.curves("g", [20, 0], [128, 128], [128, 128], [235, 255]), this.curves("b", [20, 0], [128, 108], [128, 128], [235, 255]), this.vignette("45%", 20)
    }))
}, function (e, t) {
    Caman.Filter.register("lomo", (function (e) {
        return null == e && (e = !0), this.brightness(15), this.exposure(15), this.curves("rgb", [0, 0], [200, 0], [155, 255], [255, 255]), this.saturation(-20), this.gamma(1.8), e && this.vignette("50%", 60), this.brightness(5)
    }))
}, function (e, t) {
    Caman.Filter.register("sinCity", (function () {
        return this.contrast(100), this.brightness(15), this.exposure(10), this.posterize(80), this.clip(30), this.greyscale()
    }))
}, function (e, t) {
    Caman.Filter.register("crossProcess", (function () {
        return this.exposure(5), this.colorize("#e87b22", 4), this.sepia(20), this.channels({
            blue: 8,
            red: 3
        }), this.curves("b", [0, 0], [100, 150], [180, 180], [255, 255]), this.contrast(15), this.vibrance(75), this.gamma(1.6)
    }))
}, function (e, t) {
    Caman.Filter.register("glowingSun", (function (e) {
        if (null == e && (e = !0), this.brightness(10), this.newLayer((function () {
            return this.setBlendingMode("multiply"), this.opacity(80), this.copyParent(), this.filter.gamma(.8), this.filter.contrast(50), this.filter.exposure(10)
        })), this.newLayer((function () {
            return this.setBlendingMode("softLight"), this.opacity(80), this.fillColor("#f49600")
        })), this.exposure(20), this.gamma(.8), e) return this.vignette("45%", 20)
    }))
}, function (e, t) {
    Caman.Filter.register("jarques", (function () {
        return this.saturation(-35), this.curves("b", [20, 0], [90, 120], [186, 144], [255, 230]), this.curves("r", [0, 0], [144, 90], [138, 120], [255, 255]), this.curves("g", [10, 0], [115, 105], [148, 100], [255, 248]), this.curves("rgb", [0, 0], [120, 100], [128, 140], [255, 255]), this.sharpen(20)
    }))
}, function (e, t) {
    Caman.Filter.register("love", (function () {
        return this.brightness(5), this.exposure(8), this.contrast(4), this.colorize("#c42007", 30), this.vibrance(50), this.gamma(1.3)
    }))
}, function (e, t) {
    Caman.Filter.register("oldBoot", (function () {
        return this.saturation(-20), this.vibrance(-50), this.gamma(1.1), this.sepia(30), this.channels({
            red: -10,
            blue: 5
        }), this.curves("rgb", [0, 0], [80, 50], [128, 230], [255, 255]), this.vignette("60%", 30)
    }))
}, function (e, t) {
    Caman.Filter.register("orangePeel", (function () {
        return this.curves("rgb", [0, 0], [100, 50], [140, 200], [255, 255]), this.vibrance(-30), this.saturation(-30), this.colorize("#ff9000", 30), this.contrast(-5), this.gamma(1.4)
    }))
}, function (e, t) {
    Caman.Filter.register("pinhole", (function () {
        return this.greyscale(), this.sepia(10), this.exposure(10), this.contrast(15), this.vignette("60%", 35)
    }))
}, function (e, t) {
    Caman.Filter.register("sunrise", (function () {
        return this.exposure(3.5), this.saturation(-5), this.vibrance(50), this.sepia(60), this.colorize("#e87b22", 10), this.channels({
            red: 8,
            blue: 8
        }), this.contrast(5), this.gamma(1.2), this.vignette("55%", 25)
    }))
}, function (e, t) {
    Caman.Filter.register("vintage", (function (e) {
        if (null == e && (e = !0), this.greyscale(), this.contrast(5), this.noise(3), this.sepia(100), this.channels({
            red: 8,
            blue: 2,
            green: 4
        }), this.gamma(.87), e) return this.vignette("40%", 30)
    }))
}, function (e, t) {
    var n, r, i;
    r = [512, 512, 456, 512, 328, 456, 335, 512, 405, 328, 271, 456, 388, 335, 292, 512, 454, 405, 364, 328, 298, 271, 496, 456, 420, 388, 360, 335, 312, 292, 273, 512, 482, 454, 428, 405, 383, 364, 345, 328, 312, 298, 284, 271, 259, 496, 475, 456, 437, 420, 404, 388, 374, 360, 347, 335, 323, 312, 302, 292, 282, 273, 265, 512, 497, 482, 468, 454, 441, 428, 417, 405, 394, 383, 373, 364, 354, 345, 337, 328, 320, 312, 305, 298, 291, 284, 278, 271, 265, 259, 507, 496, 485, 475, 465, 456, 446, 437, 428, 420, 412, 404, 396, 388, 381, 374, 367, 360, 354, 347, 341, 335, 329, 323, 318, 312, 307, 302, 297, 292, 287, 282, 278, 273, 269, 265, 261, 512, 505, 497, 489, 482, 475, 468, 461, 454, 447, 441, 435, 428, 422, 417, 411, 405, 399, 394, 389, 383, 378, 373, 368, 364, 359, 354, 350, 345, 341, 337, 332, 328, 324, 320, 316, 312, 309, 305, 301, 298, 294, 291, 287, 284, 281, 278, 274, 271, 268, 265, 262, 259, 257, 507, 501, 496, 491, 485, 480, 475, 470, 465, 460, 456, 451, 446, 442, 437, 433, 428, 424, 420, 416, 412, 408, 404, 400, 396, 392, 388, 385, 381, 377, 374, 370, 367, 363, 360, 357, 354, 350, 347, 344, 341, 338, 335, 332, 329, 326, 323, 320, 318, 315, 312, 310, 307, 304, 302, 299, 297, 294, 292, 289, 287, 285, 282, 280, 278, 275, 273, 271, 269, 267, 265, 263, 261, 259], i = [9, 11, 12, 13, 13, 14, 14, 15, 15, 15, 15, 16, 16, 16, 16, 17, 17, 17, 17, 17, 17, 17, 18, 18, 18, 18, 18, 18, 18, 18, 18, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24], n = function () {
        return this.r = 0, this.g = 0, this.b = 0, this.a = 0, this.next = null
    }, Caman.Plugin.register("stackBlur", (function (e) {
        var t, o, a, l, s, c, u, f, p, d, h, m, g, b, y, v, _, w, x, C, E, k, O, T, R, S, A, j, P, D, L, I, M, B, z, U,
            H, F, N, W, Y, q, $, V;
        if (!(isNaN(e) || e < 1)) {
            for (e |= 0, y = this.pixelData, l = e + e + 1, (P = this.dimensions.width) << 2, D = P - 1, p = (f = this.dimensions.height) - 1, j = (C = e + 1) * (C + 1) / 2, O = A = new n, d = U = 1; 1 <= l ? U < l : U > l; d = 1 <= l ? ++U : --U) O = O.next = new n, d === C && (T = O);
            for (O.next = A, R = null, S = null, z = M = 0, h = r[e], k = i[e], I = H = 0; 0 <= f ? H < f : H > f; I = 0 <= f ? ++H : --H) {
                for (_ = s = t = x = u = a = 0, w = C * (v = y[M]), c = C * (b = y[M + 1]), o = C * (g = y[M + 2]), x += j * v, u += j * b, a += j * g, O = A, d = F = 0; 0 <= C ? F < C : F > C; d = 0 <= C ? ++F : --F) O.r = v, O.g = b, O.b = g, O = O.next;
                for (d = N = 1; 1 <= C ? N < C : N > C; d = 1 <= C ? ++N : --N) m = M + ((D < d ? D : d) << 2), x += (O.r = v = y[m]) * (E = C - d), u += (O.g = b = y[m + 1]) * E, a += (O.b = g = y[m + 2]) * E, _ += v, s += b, t += g, O = O.next;
                for (R = A, S = T, L = W = 0; 0 <= P ? W < P : W > P; L = 0 <= P ? ++W : --W) y[M] = x * h >> k, y[M + 1] = u * h >> k, y[M + 2] = a * h >> k, x -= w, u -= c, a -= o, w -= R.r, c -= R.g, o -= R.b, m = z + ((m = L + e + 1) < D ? m : D) << 2, x += _ += R.r = y[m], u += s += R.g = y[m + 1], a += t += R.b = y[m + 2], R = R.next, w += v = S.r, c += b = S.g, o += g = S.b, _ -= v, s -= b, t -= g, S = S.next, M += 4;
                z += P
            }
            for (L = Y = 0; 0 <= P ? Y < P : Y > P; L = 0 <= P ? ++Y : --Y) {
                for (s = t = _ = u = a = x = 0, w = C * (v = y[M = L << 2]), c = C * (b = y[M + 1]), o = C * (g = y[M + 2]), x += j * v, u += j * b, a += j * g, O = A, d = q = 0; 0 <= C ? q < C : q > C; d = 0 <= C ? ++q : --q) O.r = v, O.g = b, O.b = g, O = O.next;
                for (B = P, d = $ = 1; 1 <= e ? $ <= e : $ >= e; d = 1 <= e ? ++$ : --$) M = B + L << 2, x += (O.r = v = y[M]) * (E = C - d), u += (O.g = b = y[M + 1]) * E, a += (O.b = g = y[M + 2]) * E, _ += v, s += b, t += g, O = O.next, d < p && (B += P);
                for (M = L, R = A, S = T, I = V = 0; 0 <= f ? V < f : V > f; I = 0 <= f ? ++V : --V) y[m = M << 2] = x * h >> k, y[m + 1] = u * h >> k, y[m + 2] = a * h >> k, x -= w, u -= c, a -= o, w -= R.r, c -= R.g, o -= R.b, m = L + ((m = I + C) < p ? m : p) * P << 2, x += _ += R.r = y[m], u += s += R.g = y[m + 1], a += t += R.b = y[m + 2], R = R.next, w += v = S.r, c += b = S.g, o += g = S.b, _ -= v, s -= b, t -= g, S = S.next, M += P
            }
            return this
        }
    })), Caman.Filter.register("stackBlur", (function (e) {
        return this.processPlugin("stackBlur", [e])
    }));
    "undefined" != typeof __REACT_HOT_LOADER__ && (__REACT_HOT_LOADER__.register(n, "BlurStack", "/Users/dmitry/scaleflex/plugins/filerobot-image-editor/projects/react/lib/caman/plugins/stackBlur.js"), __REACT_HOT_LOADER__.register(r, "mul_table", "/Users/dmitry/scaleflex/plugins/filerobot-image-editor/projects/react/lib/caman/plugins/stackBlur.js"), __REACT_HOT_LOADER__.register(i, "shg_table", "/Users/dmitry/scaleflex/plugins/filerobot-image-editor/projects/react/lib/caman/plugins/stackBlur.js"))
}, function (e, t) {
    Caman.Plugin.register("flip", (function (e) {
        var t, n, r, i;
        return r = this.canvas.width, i = this.canvas.height, (t = document.createElement("canvas")).width = r, t.height = i, t.id = this.canvas.id, n = t.getContext("2d"), "x" === e ? (n.translate(r, 0), n.scale(-1, 1)) : "y" === e && (n.translate(0, i), n.scale(1, -1)), n.drawImage(this.canvas, 0, 0), this.replaceCanvas(t), this
    })), Caman.Filter.register("flip", (function () {
        return this.processPlugin("flip", arguments)
    }))
}, function (e, t, n) {
    var r = n(64);
    "string" == typeof r && (r = [[e.i, r, ""]]);
    var i = {hmr: !0, transform: void 0};
    n(66)(r, i);
    r.locals && (e.exports = r.locals)
}, function (e, t, n) {
    (e.exports = n(65)(void 0)).push([e.i, '@font-face {\n  font-family: \'filerobot-image-editor-font\';\n  src:  url(\'https://cdn.scaleflex.it/plugins/filerobot-image-editor/assets/fonts/filerobot-image-editor-font/v2/filerobot-image-editor-font.eot?ua0hzun3\');\n  src:  url(\'https://cdn.scaleflex.it/plugins/filerobot-image-editor/assets/fonts/filerobot-image-editor-font/v2/filerobot-image-editor-font.eot?ua0hzun3#iefix\') format(\'embedded-opentype\'),\n  url(\'https://cdn.scaleflex.it/plugins/filerobot-image-editor/assets/fonts/filerobot-image-editor-font/v2/filerobot-image-editor-font.ttf?ua0hzun3\') format(\'truetype\'),\n  url(\'https://cdn.scaleflex.it/plugins/filerobot-image-editor/assets/fonts/filerobot-image-editor-font/v2/filerobot-image-editor-font.woff?ua0hzun3\') format(\'woff\'),\n  url(\'https://cdn.scaleflex.it/plugins/filerobot-image-editor/assets/fonts/filerobot-image-editor-font/v2/filerobot-image-editor-font.svg?ua0hzun3#filerobot-image-editor-font\') format(\'svg\');\n  font-weight: normal;\n  font-style: normal;\n}\n\n[class^="sf-i-"], [class*=" sf-i-"] {\n  /* use !important to prevent issues with browser extensions that change fonts */\n  font-family: \'filerobot-image-editor-font\' !important;\n  speak: none;\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  text-transform: none;\n  line-height: 1;\n\n  /* Better Font Rendering =========== */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.sf-i-watermark:before {\n  content: "\\E918";\n}\n.sf-i-attention:before {\n  content: "\\E917";\n}\n.sf-i-reset:before {\n  content: "\\E912";\n}\n.sf-i-rotate-right:before {\n  content: "\\E913";\n}\n.sf-i-flip-vertically:before {\n  content: "\\E914";\n}\n.sf-i-rotate-left:before {\n  content: "\\E915";\n}\n.sf-i-flip-horizontally:before {\n  content: "\\E916";\n}\n.sf-i-arrows-back:before {\n  content: "\\E905";\n}\n.sf-i-arrows-forward:before {\n  content: "\\E906";\n}\n.sf-i-filter:before {\n  content: "\\E904";\n}\n.sf-i-minus:before {\n  content: "\\E910";\n}\n.sf-i-plus:before {\n  content: "\\E911";\n}\n.sf-i-effects:before {\n  content: "\\E900";\n}\n.sf-i-crop:before {\n  content: "\\E901";\n}\n.sf-i-rotation-left:before {\n  content: "\\E902";\n}\n.sf-i-mirror-vertical:before {\n  content: "\\E903";\n}\n.sf-i-resize:before {\n  content: "\\E907";\n}\n.sf-i-rotation-right:before {\n  content: "\\E908";\n}\n.sf-i-mirrot-horizontal:before {\n  content: "\\E909";\n}\n.sf-i-adjust:before {\n  content: "\\E90A";\n}\n.sf-i-orientation:before {\n  content: "\\E90B";\n}\n.sf-i-cross:before {\n  content: "\\E90C";\n}\n.sf-i-point-orientation:before {\n  content: "\\E90D";\n}\n.sf-i-link:before {\n  content: "\\E90E";\n}\n.sf-i-without-link:before {\n  content: "\\E90F";\n}', ""])
}, function (e, t) {
    e.exports = function (e) {
        var t = [];
        return t.toString = function () {
            return this.map((function (t) {
                var n = function (e, t) {
                    var n = e[1] || "", r = e[3];
                    if (!r) return n;
                    if (t && "function" == typeof btoa) {
                        var i = (a = r, "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(a)))) + " */"),
                            o = r.sources.map((function (e) {
                                return "/*# sourceURL=" + r.sourceRoot + e + " */"
                            }));
                        return [n].concat(o).concat([i]).join("\n")
                    }
                    var a;
                    return [n].join("\n")
                }(t, e);
                return t[2] ? "@media " + t[2] + "{" + n + "}" : n
            })).join("")
        }, t.i = function (e, n) {
            "string" == typeof e && (e = [[null, e, ""]]);
            for (var r = {}, i = 0; i < this.length; i++) {
                var o = this[i][0];
                "number" == typeof o && (r[o] = !0)
            }
            for (i = 0; i < e.length; i++) {
                var a = e[i];
                "number" == typeof a[0] && r[a[0]] || (n && !a[2] ? a[2] = n : n && (a[2] = "(" + a[2] + ") and (" + n + ")"), t.push(a))
            }
        }, t
    }
}, function (e, t, n) {
    var r, i, o = {}, a = (r = function () {
        return window && document && document.all && !window.atob
    }, function () {
        return void 0 === i && (i = r.apply(this, arguments)), i
    }), l = function (e) {
        var t = {};
        return function (n) {
            if (void 0 === t[n]) {
                var r = e.call(this, n);
                if (r instanceof window.HTMLIFrameElement) try {
                    r = r.contentDocument.head
                } catch (e) {
                    r = null
                }
                t[n] = r
            }
            return t[n]
        }
    }((function (e) {
        return document.querySelector(e)
    })), s = null, c = 0, u = [], f = n(67);

    function p(e, t) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n], i = o[r.id];
            if (i) {
                i.refs++;
                for (var a = 0; a < i.parts.length; a++) i.parts[a](r.parts[a]);
                for (; a < r.parts.length; a++) i.parts.push(y(r.parts[a], t))
            } else {
                var l = [];
                for (a = 0; a < r.parts.length; a++) l.push(y(r.parts[a], t));
                o[r.id] = {id: r.id, refs: 1, parts: l}
            }
        }
    }

    function d(e, t) {
        for (var n = [], r = {}, i = 0; i < e.length; i++) {
            var o = e[i], a = t.base ? o[0] + t.base : o[0], l = {css: o[1], media: o[2], sourceMap: o[3]};
            r[a] ? r[a].parts.push(l) : n.push(r[a] = {id: a, parts: [l]})
        }
        return n
    }

    function h(e, t) {
        var n = l(e.insertInto);
        if (!n) throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
        var r = u[u.length - 1];
        if ("top" === e.insertAt) r ? r.nextSibling ? n.insertBefore(t, r.nextSibling) : n.appendChild(t) : n.insertBefore(t, n.firstChild), u.push(t); else if ("bottom" === e.insertAt) n.appendChild(t); else {
            if ("object" != typeof e.insertAt || !e.insertAt.before) throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
            var i = l(e.insertInto + " " + e.insertAt.before);
            n.insertBefore(t, i)
        }
    }

    function m(e) {
        if (null === e.parentNode) return !1;
        e.parentNode.removeChild(e);
        var t = u.indexOf(e);
        t >= 0 && u.splice(t, 1)
    }

    function g(e) {
        var t = document.createElement("style");
        return e.attrs.type = "text/css", b(t, e.attrs), h(e, t), t
    }

    function b(e, t) {
        Object.keys(t).forEach((function (n) {
            e.setAttribute(n, t[n])
        }))
    }

    function y(e, t) {
        var n, r, i, o;
        if (t.transform && e.css) {
            if (!(o = t.transform(e.css))) return function () {
            };
            e.css = o
        }
        if (t.singleton) {
            var a = c++;
            n = s || (s = g(t)), r = w.bind(null, n, a, !1), i = w.bind(null, n, a, !0)
        } else e.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (n = function (e) {
            var t = document.createElement("link");
            return e.attrs.type = "text/css", e.attrs.rel = "stylesheet", b(t, e.attrs), h(e, t), t
        }(t), r = C.bind(null, n, t), i = function () {
            m(n), n.href && URL.revokeObjectURL(n.href)
        }) : (n = g(t), r = x.bind(null, n), i = function () {
            m(n)
        });
        return r(e), function (t) {
            if (t) {
                if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap) return;
                r(e = t)
            } else i()
        }
    }

    e.exports = function (e, t) {
        if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document) throw new Error("The style-loader cannot be used in a non-browser environment");
        (t = t || {}).attrs = "object" == typeof t.attrs ? t.attrs : {}, t.singleton || (t.singleton = a()), t.insertInto || (t.insertInto = "head"), t.insertAt || (t.insertAt = "bottom");
        var n = d(e, t);
        return p(n, t), function (e) {
            for (var r = [], i = 0; i < n.length; i++) {
                var a = n[i];
                (l = o[a.id]).refs--, r.push(l)
            }
            e && p(d(e, t), t);
            for (i = 0; i < r.length; i++) {
                var l;
                if (0 === (l = r[i]).refs) {
                    for (var s = 0; s < l.parts.length; s++) l.parts[s]();
                    delete o[l.id]
                }
            }
        }
    };
    var v, _ = (v = [], function (e, t) {
        return v[e] = t, v.filter(Boolean).join("\n")
    });

    function w(e, t, n, r) {
        var i = n ? "" : r.css;
        if (e.styleSheet) e.styleSheet.cssText = _(t, i); else {
            var o = document.createTextNode(i), a = e.childNodes;
            a[t] && e.removeChild(a[t]), a.length ? e.insertBefore(o, a[t]) : e.appendChild(o)
        }
    }

    function x(e, t) {
        var n = t.css, r = t.media;
        if (r && e.setAttribute("media", r), e.styleSheet) e.styleSheet.cssText = n; else {
            for (; e.firstChild;) e.removeChild(e.firstChild);
            e.appendChild(document.createTextNode(n))
        }
    }

    function C(e, t, n) {
        var r = n.css, i = n.sourceMap, o = void 0 === t.convertToAbsoluteUrls && i;
        (t.convertToAbsoluteUrls || o) && (r = f(r)), i && (r += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(i)))) + " */");
        var a = new Blob([r], {type: "text/css"}), l = e.href;
        e.href = URL.createObjectURL(a), l && URL.revokeObjectURL(l)
    }
}, function (e, t) {
    e.exports = function (e) {
        var t = "undefined" != typeof window && window.location;
        if (!t) throw new Error("fixUrls requires window.location");
        if (!e || "string" != typeof e) return e;
        var n = t.protocol + "//" + t.host, r = n + t.pathname.replace(/\/[^\/]*$/, "/");
        return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, (function (e, t) {
            var i, o = t.trim().replace(/^"(.*)"$/, (function (e, t) {
                return t
            })).replace(/^'(.*)'$/, (function (e, t) {
                return t
            }));
            return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(o) ? e : (i = 0 === o.indexOf("//") ? o : 0 === o.indexOf("/") ? n + o : r + o.replace(/^\.\//, ""), "url(" + JSON.stringify(i) + ")")
        }))
    }
}, function (e, t, n) {
    "use strict";
    n.r(t);
    var r = n(4), i = n(0), o = n.n(i), a = n(1);

    function l(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function s(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? l(n, !0).forEach((function (t) {
                c(e, t, n[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : l(n).forEach((function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }))
        }
        return e
    }

    function c(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    var u = {
        textFontSize: "14px",
        colors: {
            success: "#5cb85c",
            warning: "#f0ad4e",
            error: "#d9534f",
            muted: "#636c72",
            base: "light",
            light: {base: "#F9FAFB", dark: "#F4F6F8", darker: "#DFE4E8"},
            dark: {base: "#1e262c", light: "#454F5B", lighter: "#637381"},
            primary: {
                base: "#181830",
                light: "#263138",
                lighter: "#34444c",
                dark: "#101021",
                darker: "#090912",
                text: "#F9FAFB"
            },
            secondary: {
                base: "#00707c",
                light: "#007E8A",
                lighter: "#008D99",
                dark: "#00616D",
                darker: "#005662",
                text: "#F9FAFB"
            },
            text: {base: "#F9FAFB", dark: "#F4F6F8", mute: "#aaa", light: "#fff"},
            background: {base: "#f1f1f1"},
            border: {base: "#ccc"},
            link: {base: "#00707c", over: "#00616D"},
            brand: {success: "#5cb85c", warning: "#f0ad4e", error: "#d9534f", muted: "#636c72"}
        },
        modal: {
            borderRadius: "4px",
            fluid: {xs: "35%", sm: "45%", md: "60%", lg: "80%", xl: "90%"},
            fixed: {xs: "200px", sm: "300px", md: "450px", lg: "650px", xl: "800px"}
        },
        button: {tt: "none"}
    }, f = s({}, u, {
        radii: [0, "0.2rem", "0.25rem", ".3rem"],
        mainBackgroundColor: "#1e262c",
        mainBackgroundColorHover: "#263138",
        mainBackgroundColorActive: "#34444c",
        secondBackgroundColor: "#263138",
        textColor: "#e7f1f4",
        textColorHover: "#fff",
        textMuted: "#70777f",
        borderColor: "#70777f",
        borderDarkColor: "#161e23",
        fieldWidth: "120px",
        borderInputColor: "#3b4d54",
        borderInputColorHover: "#52686d",
        borderInputColorActive: "#52686d",
        inputBackgroundColor: "#34444c",
        inputBoxShadowColor: "#03a9bb",
        inputPlaceholderColor: "#888d94",
        mainThemeColor: "#00707c",
        mainThemeColorHover: "#00616D",
        mainThemeColorOpacity: "rgba(0, 112, 124, 0.5)",
        btnSaveColor: "#009345",
        btnSaveColorHover: "#00b549",
        btnThemeColor: "#34444c",
        btnPaddingSm: "2px 14px",
        btnFontSizeSm: "12px",
        btnBorderRadius: "2px",
        modalOverlayColor: "#484848",
        btnMainColor: function (e) {
            return "\n    color: #fff;\n    background-color: #00707c;\n    border-color: #00707c;\n    \n    :hover {\n      color: #fff;\n      background-color: #00616D;\n      border-color: #00616D;\n    }\n    \n    :focus {\n      -webkit-box-shadow: 0 0 0 2px rgba(0, 112, 124, 0.5);\n              box-shadow: 0 0 0 2px rgba(0, 112, 124, 0.5);\n    }\n    \n    :active {\n      color: #fff;\n      background-color: #00616D;\n      background-image: none;\n      border-color: #00616D;\n    }\n    \n    ".concat(e.disabled ? "\n      background-color: rgba(0, 112, 124, 0.5);\n      border-color: rgba(0, 112, 124, 0.5);\n    " : "", "\n    \n    ").concat(e.active ? "\n       color: #fff;\n      background-color: #00616D;\n      background-image: none;\n      border-color: #00616D;\n    " : "", "\n  ")
        },
        button: s({}, u.button, {
            sm: {p: "4px 10px", fz: "12px", lh: "1.5", br: "3px"},
            md: {p: "6px 12px", fz: "14px", lh: "1.5", br: "3px"},
            lg: {p: "8px 14px", fz: "16px", lh: "1.5", br: "5px"}
        }),
        modal: s({}, u.modal, {
            backgroundColor: "#1e262c",
            color: "#e7f1f4",
            colorMuted: "#70777f",
            colorMutedHover: "#e7f1f4"
        })
    });

    function p(e) {
        var t = e.exact, n = e.xl, r = e.lg, i = e.md, o = e.sm, a = e.xs, l = e.fluid,
            s = t ? "exact" : n ? "xl" : r ? "lg" : i ? "md" : o ? "sm" : a ? "xs" : "md";
        return "exact" === s ? t : f.modal[l ? "fluid" : "fixed"][s]
    }

    function d(e) {
        return e.dark ? "" : "\n    color: ".concat(w(e, "text"), ";\n    background-color: ").concat(w(e, "background"), ";\n    border: 1px solid ").concat(w(e, "border"), ";\n    \n    &::-webkit-input-placeholder {\n      color:  ").concat(w(e, "text", "muted"), ";\n    }\n    &::-moz-placeholder {\n      color:  ").concat(w(e, "text", "muted"), ";\n    }\n    &:-ms-input-placeholder {\n      color:  ").concat(w(e, "text", "muted"), ";\n    }\n    &::-ms-input-placeholder {\n      color:  ").concat(w(e, "text", "muted"), ";\n    }\n    &::placeholder {\n      color:  ").concat(w(e, "text", "muted"), ";\n    }\n    \n    &:focus {\n      color: ").concat(w(e, "text"), ";\n      background-color: ").concat(w(e, "background"), ";\n      border-color: ").concat(w(e, "link"), ";\n      outline: 0;\n    }\n    &:focus::-ms-value {\n      color: ").concat(w(e, "text"), ";\n      background-color: ").concat(w(e, "background"), ";\n      border-color: ").concat(w(e, "link"), ";\n      outline: 0;\n    }\n  ")
    }

    function h(e) {
        return "\n    font-family: 'filerobot-image-editor-font' !important;\n    color: ".concat(e.muted ? e.theme.colors.textMute : e.theme.colors.text, ";\n    speak: none;\n    font-style: normal;\n    font-weight: normal;\n    font-variant: normal;\n    text-transform: none;\n    line-height: 1;\n  \n    /* Better Font Rendering =========== */\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    \n    :hover {\n      color: ").concat(e.muted ? e.theme.colors.textMute : e.theme.colors.text, ";\n    }\n  ")
    }

    function m(e, t, n) {
        if ("number" != typeof e || e < -1 || e > 1 || "string" != typeof t || "r" != t[0] && "#" != t[0] || "string" != typeof n && void 0 !== n) return null;
        window.sbcRip || (window.sbcRip = function (e) {
            var t = e.length, n = new Object;
            if (t > 9) {
                if ((e = e.split(",")).length < 3 || e.length > 4) return null;
                n[0] = r(e[0].slice(4)), n[1] = r(e[1]), n[2] = r(e[2]), n[3] = e[3] ? parseFloat(e[3]) : -1
            } else {
                if (8 == t || 6 == t || t < 4) return null;
                t < 6 && (e = "#" + e[1] + e[1] + e[2] + e[2] + e[3] + e[3] + (t > 4 ? e[4] + "" + e[4] : "")), e = r(e.slice(1), 16), n[0] = e >> 16 & 255, n[1] = e >> 8 & 255, n[2] = 255 & e, n[3] = 9 == t || 5 == t ? i((e >> 24 & 255) / 255 * 1e4) / 1e4 : -1
            }
            return n
        });
        var r = parseInt, i = Math.round, o = t.length > 9,
            a = (o = "string" == typeof n ? n.length > 9 || "c" == n && !o : o, e < 0),
            l = (e = a ? -1 * e : e, n = n && "c" != n ? n : a ? "#000000" : "#FFFFFF", window.sbcRip(t)),
            s = window.sbcRip(n);
        return l && s ? o ? "rgb(" + i((s[0] - l[0]) * e + l[0]) + "," + i((s[1] - l[1]) * e + l[1]) + "," + i((s[2] - l[2]) * e + l[2]) + (l[3] < 0 && s[3] < 0 ? ")" : "," + (l[3] > -1 && s[3] > -1 ? i(1e4 * ((s[3] - l[3]) * e + l[3])) / 1e4 : s[3] < 0 ? l[3] : s[3]) + ")") : "#" + (4294967296 + 16777216 * (l[3] > -1 && s[3] > -1 ? i(255 * ((s[3] - l[3]) * e + l[3])) : s[3] > -1 ? i(255 * s[3]) : l[3] > -1 ? i(255 * l[3]) : 255) + 65536 * i((s[0] - l[0]) * e + l[0]) + 256 * i((s[1] - l[1]) * e + l[1]) + i((s[2] - l[2]) * e + l[2])).toString(16).slice(l[3] > -1 || s[3] > -1 ? 1 : 3) : null
    }

    function g(e) {
        return /^#?([a-f\d])([a-f\d])([a-f\d])$/i.test(e) || /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.test(e)
    }

    function b(e) {
        e = e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, (function (e, t, n, r) {
            return t + t + n + n + r + r
        }));
        var t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
        return t ? {r: parseInt(t[1], 16), g: parseInt(t[2], 16), b: parseInt(t[3], 16)} : null
    }

    var y = function (e) {
        if (!e) return null;
        var t = m(-.1, e) || "";
        return t.toLowerCase() === e.toLowerCase() ? m(.25, e) : t
    }, v = function (e, t) {
        if (!e) return null;
        var n = g(e) ? e : m(0, e, "c");
        if (!n) return null;
        var r = b(n);
        return r ? "rgba(".concat(r.r, ", ").concat(r.g, ", ").concat(r.b, ", ").concat(t, ")") : e
    }, _ = function (e, t, n) {
        var r = e.sm, i = e.lg, o = r ? "sm" : i ? "lg" : "md";
        return f[t] && f[t][o] && f[t][o][n]
    }, w = function (e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "base",
            r = arguments.length > 3 ? arguments[3] : void 0, i = arguments.length > 4 ? arguments[4] : void 0,
            o = r ? f.colors.base : null;
        return f.colors[t][o ? o + (i ? "er" : "") : n]
    };

    function x(e) {
        var t = "";
        switch (e) {
            case"watermark":
                t = "\\e918";
                break;
            case"reset":
                t = "\\e912";
                break;
            case"flip-v":
                t = "\\e916";
                break;
            case"flip-h":
                t = "\\e914";
                break;
            case"cross":
                t = "\\e90c";
                break;
            case"effects":
                t = "\\e900";
                break;
            case"filters":
                t = "\\e904";
                break;
            case"adjust":
                t = "\\e90a";
                break;
            case"crop":
                t = "\\e901";
                break;
            case"resize":
                t = "\\e907";
                break;
            case"rotate":
                t = "\\e90b";
                break;
            case"previous":
                t = "\\e905";
                break;
            case"next":
                t = "\\e906";
                break;
            case"ratio":
                t = "\\e90e";
                break;
            case"no-ratio":
                t = "\\e90f";
                break;
            case"left-rotate":
                t = "\\e902";
                break;
            case"right-rotate":
                t = "\\e908";
                break;
            default:
                return
        }
        return "\n    :before {\n      content: '".concat(t, "'\n    }\n  ")
    }

    "undefined" != typeof __REACT_HOT_LOADER__ && (__REACT_HOT_LOADER__.register(u, "commonTheme", "/Users/dmitry/scaleflex/plugins/filerobot-image-editor/projects/react/styledComponents/styleUtils.js"), __REACT_HOT_LOADER__.register(f, "variables", "/Users/dmitry/scaleflex/plugins/filerobot-image-editor/projects/react/styledComponents/styleUtils.js"), __REACT_HOT_LOADER__.register(p, "getModalWidth", "/Users/dmitry/scaleflex/plugins/filerobot-image-editor/projects/react/styledComponents/styleUtils.js"), __REACT_HOT_LOADER__.register(d, "getFieldColorStyles", "/Users/dmitry/scaleflex/plugins/filerobot-image-editor/projects/react/styledComponents/styleUtils.js"), __REACT_HOT_LOADER__.register(h, "getIconStyles", "/Users/dmitry/scaleflex/plugins/filerobot-image-editor/projects/react/styledComponents/styleUtils.js"), __REACT_HOT_LOADER__.register(m, "shadeBlendConvert", "/Users/dmitry/scaleflex/plugins/filerobot-image-editor/projects/react/styledComponents/styleUtils.js"), __REACT_HOT_LOADER__.register(g, "isHex", "/Users/dmitry/scaleflex/plugins/filerobot-image-editor/projects/react/styledComponents/styleUtils.js"), __REACT_HOT_LOADER__.register(b, "hexToRgb", "/Users/dmitry/scaleflex/plugins/filerobot-image-editor/projects/react/styledComponents/styleUtils.js"), __REACT_HOT_LOADER__.register(y, "getHoverColor", "/Users/dmitry/scaleflex/plugins/filerobot-image-editor/projects/react/styledComponents/styleUtils.js"), __REACT_HOT_LOADER__.register(v, "getWithOpacity", "/Users/dmitry/scaleflex/plugins/filerobot-image-editor/projects/react/styledComponents/styleUtils.js"), __REACT_HOT_LOADER__.register(_, "getElementStylesBySize", "/Users/dmitry/scaleflex/plugins/filerobot-image-editor/projects/react/styledComponents/styleUtils.js"), __REACT_HOT_LOADER__.register(w, "getColor", "/Users/dmitry/scaleflex/plugins/filerobot-image-editor/projects/react/styledComponents/styleUtils.js"), __REACT_HOT_LOADER__.register(x, "getIconByName", "/Users/dmitry/scaleflex/plugins/filerobot-image-editor/projects/react/styledComponents/styleUtils.js"));

    function C() {
        var e = j(["\n  text-transform: capitalize;\n  height: 20px;\n  line-height: 20px;\n"]);
        return C = function () {
            return e
        }, e
    }

    function E() {
        var e = j(["\n  background: url('", "') 50% 50% / cover no-repeat;\n  width: 55px;\n  height: 55px;\n  border-radius: 2px;\n  overflow: hidden;\n  display: inline-block;\n"]);
        return E = function () {
            return e
        }, e
    }

    function k() {
        var e = j(["\n  display: inline-block;\n  vertical-align: top;\n  padding: 10px;\n  text-align: center;\n  min-width: 90px;\n  height: 90px;\n  cursor: pointer;\n  color: ", ";\n  font-size: 12px;\n  background: ", ";\n  \n  :hover {\n    background: ", ";\n  }\n"]);
        return k = function () {
            return e
        }, e
    }

    function O() {
        var e = j(["\n  overflow-x: auto;\n  overflow-y: hidden;\n  white-space: nowrap;\n  \n  ::-webkit-scrollbar {\n    height: 10px !important;\n  }\n   \n  ::-webkit-scrollbar-thumb {\n    background: #3b4d54;\n    border-radius: 5px;\n  }\n"]);
        return O = function () {
            return e
        }, e
    }

    function T() {
        var e = j(["\n  height: 20px;\n  line-height: 20px;\n"]);
        return T = function () {
            return e
        }, e
    }

    function R() {
        var e = j(["\n  height: 40px;\n  font-size: 40px;\n  \n  ", "\n  ", "\n"]);
        return R = function () {
            return e
        }, e
    }

    function S() {
        var e = j(["\n  padding: 20px 10px;\n  cursor: pointer;\n  display: inline-block;\n  min-width: 80px;\n  min-height: 100px;\n  text-align: center;\n  font-size: 12px;\n  color: ", ";\n  text-transform: ", ";\n  background: ", ";\n  \n  :hover {\n    color: ", ";\n    background: ", ";\n  }\n"]);
        return S = function () {
            return e
        }, e
    }

    function A() {
        var e = j(["\n  height: 100px;\n  width: calc(100% - 200px);\n  border-left: 1px solid ", ";\n  border-right: 1px solid ", ";\n  overflow-x: auto;\n  overflow-y: hidden;\n  white-space: nowrap;\n  \n  ::-webkit-scrollbar {\n    height: 10px !important;\n  }\n   \n  ::-webkit-scrollbar-thumb {\n    background: #3b4d54;\n    border-radius: 5px;\n  }\n"]);
        return A = function () {
            return e
        }, e
    }

    function j(e, t) {
        return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {raw: {value: Object.freeze(t)}}))
    }

    var P = a.b.div(A(), (function (e) {
        return e.theme.colors.primaryBg
    }), (function (e) {
        return e.theme.colors.primaryBg
    })), D = a.b.div(S(), (function (e) {
        return e.theme.colors.text
    }), (function (e) {
        return e.tt || "capitalize"
    }), (function (e) {
        return e.active ? e.theme.colors.secondaryBg : "inherit"
    }), (function (e) {
        return e.theme.colors.textHover
    }), (function (e) {
        return e.theme.colors.secondaryBg
    })), L = a.b.div(R(), (function (e) {
        return h(e)
    }), (function (e) {
        return x(e.name)
    })), I = a.b.div(T()), M = a.b.div(O()), B = a.b.div(k(), (function (e) {
        return e.theme.colors.text
    }), (function (e) {
        return e.active ? e.theme.colors.secondaryBgHover : "transparent"
    }), (function (e) {
        return e.theme.colors.secondaryBgHover
    })), z = a.b.div(E(), (function (e) {
        return e.src
    })), U = a.b.div(C());
    "undefined" != typeof __REACT_HOT_LOADER__ && (__REACT_HOT_LOADER__.register(P, "Toolbar", "/Users/dmitry/scaleflex/plugins/filerobot-image-editor/projects/react/styledComponents/Toolbar.ui.js"), __REACT_HOT_LOADER__.register(D, "ToolWrapper", "/Users/dmitry/scaleflex/plugins/filerobot-image-editor/projects/react/styledComponents/Toolbar.ui.js"), __REACT_HOT_LOADER__.register(L, "ToolIcon", "/Users/dmitry/scaleflex/plugins/filerobot-image-editor/projects/react/styledComponents/Toolbar.ui.js"), __REACT_HOT_LOADER__.register(I, "ToolLabel", "/Users/dmitry/scaleflex/plugins/filerobot-image-editor/projects/react/styledComponents/Toolbar.ui.js"), __REACT_HOT_LOADER__.register(M, "EffectsWrapper", "/Users/dmitry/scaleflex/plugins/filerobot-image-editor/projects/react/styledComponents/Toolbar.ui.js"), __REACT_HOT_LOADER__.register(B, "EffectWrapper", "/Users/dmitry/scaleflex/plugins/filerobot-image-editor/projects/react/styledComponents/Toolbar.ui.js"), __REACT_HOT_LOADER__.register(z, "EffectIcon", "/Users/dmitry/scaleflex/plugins/filerobot-image-editor/projects/react/styledComponents/Toolbar.ui.js"), __REACT_HOT_LOADER__.register(U, "EffectLabel", "/Users/dmitry/scaleflex/plugins/filerobot-image-editor/projects/react/styledComponents/Toolbar.ui.js"));

    function H() {
        var e = N(["\n  position: relative;\n  background: ", ";\n  z-index: 1050;\n  width: 100%;\n  height: 100%;\n  min-height: 520px;\n  overflow-y: auto;\n  font-size: 12px;\n  \n  #scaleflex-image-edit-box-original {\n    visibility: hidden;\n    position: absolute;\n    left: -99999px;\n    display: none;\n  }\n    \n  .cropper-container {\n    direction: ltr;\n    font-size: 0;\n    line-height: 0;\n    position: relative;\n    -ms-touch-action: none;\n    touch-action: none;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n  }\n  \n  .cropper-container img {/*Avoid margin top issue (Occur only when margin-top <= -height)*/\n    display: block;\n    height: 100%;\n    image-orientation: 0deg;\n    max-height: none !important;\n    max-width: none !important;\n    min-height: 0 !important;\n    min-width: 0 !important;\n    width: 100%;\n  }\n  \n  .cropper-wrap-box,\n  .cropper-canvas,\n  .cropper-drag-box,\n  .cropper-crop-box,\n  .cropper-modal {\n    bottom: 0;\n    left: 0;\n    position: absolute;\n    right: 0;\n    top: 0;\n  }\n  \n  .cropper-wrap-box,\n  .cropper-canvas {\n    overflow: hidden;\n  }\n  \n  .cropper-drag-box {\n    background-color: #fff;\n    opacity: 0;\n  }\n  \n  .cropper-modal {\n    background-color: #000;\n    opacity: .5;\n  }\n  \n  .cropper-view-box {\n    display: block;\n    height: 100%;\n    outline-color: rgba(255, 255, 255, 0.75);\n    outline: 1px solid #fff;\n    overflow: hidden;\n    width: 100%;\n  }\n  \n  .cropper-dashed {\n    border: 0 dashed #eee;\n    display: block;\n    opacity: .5;\n    position: absolute;\n  }\n  \n  .cropper-dashed.dashed-h {\n    border-bottom-width: 1px;\n    border-top-width: 1px;\n    height: 33.33333%;\n    left: 0;\n    top: 33.33333%;\n    width: 100%;\n  }\n  \n  .cropper-dashed.dashed-v {\n    border-left-width: 1px;\n    border-right-width: 1px;\n    height: 100%;\n    left: 33.33333%;\n    top: 0;\n    width: 33.33333%;\n  }\n  \n  .cropper-center {\n    display: block;\n    height: 0;\n    left: 50%;\n    opacity: .75;\n    position: absolute;\n    top: 50%;\n    width: 0;\n  }\n  \n  .cropper-center:before,\n  .cropper-center:after {\n    background-color: #fff;\n    content: ' ';\n    display: block;\n    position: absolute;\n  }\n  \n  .cropper-center:before {\n    height: 1px;\n    left: -10px;\n    top: 0;\n    width: 20px;\n  }\n  \n  .cropper-center:after {\n    height: 20px;\n    left: 0;\n    top: -10px;\n    width: 1px;\n  }\n  \n  .cropper-face,\n  .cropper-line,\n  .cropper-point {\n    display: block;\n    height: 100%;\n    opacity: .1;\n    position: absolute;\n    width: 100%;\n  }\n  \n  .cropper-face {\n    background-color: #fff;\n    left: 0;\n    top: 0;\n  }\n  \n  .cropper-line {\n    background-color: #fff;\n  }\n  \n  .cropper-line.line-e {\n    cursor: ew-resize;\n    right: -3px;\n    top: 0;\n    width: 5px;\n  }\n  \n  .cropper-line.line-n {\n    cursor: ns-resize;\n    height: 5px;\n    left: 0;\n    top: -3px;\n  }\n  \n  .cropper-line.line-w {\n    cursor: ew-resize;\n    left: -3px;\n    top: 0;\n    width: 5px;\n  }\n  \n  .cropper-line.line-s {\n    bottom: -3px;\n    cursor: ns-resize;\n    height: 5px;\n    left: 0;\n  }\n  \n  .cropper-point {\n    background-color: #fff;\n    height: 20px;\n    opacity: .90;\n    width: 20px;\n    border-radius: 50%;\n    \n    &:before {\n      content: '';\n      display: table;\n      width: 8px;\n      height: 8px;\n      border-radius: 50%;\n      background: black;\n      opacity: 0.8;\n      z-index: 11;\n      position: absolute;\n      top: calc(50% - 4px);\n      left: calc(50% - 4px);\n    }\n  }\n  \n  .cropper-point.point-e {\n    cursor: ew-resize;\n    margin-top: -10px;\n    right: -10px;\n    top: 50%;\n  }\n  \n  .cropper-point.point-n {\n    cursor: ns-resize;\n    left: 50%;\n    margin-left: -10px;\n    top: -10px;\n  }\n  \n  .cropper-point.point-w {\n    cursor: ew-resize;\n    left: -10px;\n    margin-top: -10px;\n    top: 50%;\n  }\n  \n  .cropper-point.point-s {\n    bottom: -10px;\n    cursor: s-resize;\n    left: 50%;\n    margin-left: -10px;\n  }\n  \n  .cropper-point.point-ne {\n    cursor: nesw-resize;\n    right: -10px;\n    top: -10px;\n  }\n  \n  .cropper-point.point-nw {\n    cursor: nwse-resize;\n    left: -10px;\n    top: -10px;\n  }\n  \n  .cropper-point.point-sw {\n    bottom: -10px;\n    cursor: nesw-resize;\n    left: -10px;\n  }\n  \n  .cropper-point.point-se {\n    bottom: -10px;\n    cursor: nwse-resize;\n    height: 20px;\n    right: -10px;\n    width: 20px;\n  }\n  \n  .cropper-point.point-se:before {\n    content: '';\n    display: table;\n    width: 8px;\n    height: 8px;\n    border-radius: 50%;\n    background: black;\n    opacity: 0.8;\n    z-index: 11;\n    position: absolute;\n    top: calc(50% - 4px);\n    left: calc(50% - 4px);\n  }\n  \n  .cropper-invisible {\n    opacity: 0;\n  }\n  \n  .cropper-bg {\n    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAAA3NCSVQICAjb4U/gAAAABlBMVEXMzMz////TjRV2AAAACXBIWXMAAArrAAAK6wGCiw1aAAAAHHRFWHRTb2Z0d2FyZQBBZG9iZSBGaXJld29ya3MgQ1M26LyyjAAAABFJREFUCJlj+M/AgBVhF/0PAH6/D/HkDxOGAAAAAElFTkSuQmCC');\n  }\n  \n  .cropper-hide {\n    display: block;\n    height: 0;\n    position: absolute;\n    width: 0;\n  }\n  \n  .cropper-hidden {\n    display: none !important;\n  }\n  \n  .cropper-move {\n    cursor: move;\n  }\n  \n  .cropper-crop {\n    cursor: crosshair;\n  }\n  \n  .cropper-disabled .cropper-drag-box,\n  .cropper-disabled .cropper-face,\n  .cropper-disabled .cropper-line,\n  .cropper-disabled .cropper-point {\n    cursor: not-allowed;\n  }\n"]);
        return H = function () {
            return e
        }, e
    }

    function F() {
        var e = N(["\n  height: 100%;\n  overflow-y: auto;\n\n  *, *:after, *:before, *::after, *::before {\n    box-sizing: border-box;\n  }\n  *:after, *:before, *::after, *::before {\n    padding: 0;\n    margin: 0;\n    outline: 0;\n    box-sizing: border-box;\n  }\n\n  /* cyrillic-ext */\n  @font-face {\n    font-family: 'Roboto Mono';\n    font-style: normal;\n    font-weight: 400;\n    src: local('Roboto Mono'), local('RobotoMono-Regular'), url(https://fonts.gstatic.com/s/robotomono/v5/hMqPNLsu_dywMa4C_DEpY_ZraR2Tg8w2lzm7kLNL0-w.woff2) format('woff2');\n    unicode-range: U+0460-052F, U+20B4, U+2DE0-2DFF, U+A640-A69F;\n  }\n  /* cyrillic */\n  @font-face {\n    font-family: 'Roboto Mono';\n    font-style: normal;\n    font-weight: 400;\n    src: local('Roboto Mono'), local('RobotoMono-Regular'), url(https://fonts.gstatic.com/s/robotomono/v5/hMqPNLsu_dywMa4C_DEpY14sYYdJg5dU2qzJEVSuta0.woff2) format('woff2');\n    unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n  }\n  /* greek-ext */\n  @font-face {\n    font-family: 'Roboto Mono';\n    font-style: normal;\n    font-weight: 400;\n    src: local('Roboto Mono'), local('RobotoMono-Regular'), url(https://fonts.gstatic.com/s/robotomono/v5/hMqPNLsu_dywMa4C_DEpY1BW26QxpSj-_ZKm_xT4hWw.woff2) format('woff2');\n    unicode-range: U+1F00-1FFF;\n  }\n  /* greek */\n  @font-face {\n    font-family: 'Roboto Mono';\n    font-style: normal;\n    font-weight: 400;\n    src: local('Roboto Mono'), local('RobotoMono-Regular'), url(https://fonts.gstatic.com/s/robotomono/v5/hMqPNLsu_dywMa4C_DEpYwt_Rm691LTebKfY2ZkKSmI.woff2) format('woff2');\n    unicode-range: U+0370-03FF;\n  }\n  /* vietnamese */\n  @font-face {\n    font-family: 'Roboto Mono';\n    font-style: normal;\n    font-weight: 400;\n    src: local('Roboto Mono'), local('RobotoMono-Regular'), url(https://fonts.gstatic.com/s/robotomono/v5/hMqPNLsu_dywMa4C_DEpY9DiNsR5a-9Oe_Ivpu8XWlY.woff2) format('woff2');\n    unicode-range: U+0102-0103, U+1EA0-1EF9, U+20AB;\n  }\n  /* latin-ext */\n  @font-face {\n    font-family: 'Roboto Mono';\n    font-style: normal;\n    font-weight: 400;\n    src: local('Roboto Mono'), local('RobotoMono-Regular'), url(https://fonts.gstatic.com/s/robotomono/v5/hMqPNLsu_dywMa4C_DEpY6E8kM4xWR1_1bYURRojRGc.woff2) format('woff2');\n    unicode-range: U+0100-024F, U+1E00-1EFF, U+20A0-20AB, U+20AD-20CF, U+2C60-2C7F, U+A720-A7FF;\n  }\n  /* latin */\n  @font-face {\n    font-family: 'Roboto Mono';\n    font-style: normal;\n    font-weight: 400;\n    src: local('Roboto Mono'), local('RobotoMono-Regular'), url(https://fonts.gstatic.com/s/robotomono/v5/hMqPNLsu_dywMa4C_DEpY4gp9Q8gbYrhqGlRav_IXfk.woff2) format('woff2');\n    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215;\n  }\n"]);
        return F = function () {
            return e
        }, e
    }

    function N(e, t) {
        return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {raw: {value: Object.freeze(t)}}))
    }

    var W = a.b.div(F()), Y = a.b.div(H(), (function (e) {
        return e.theme.colors.primaryBg
    }));
    "undefined" != typeof __REACT_HOT_LOADER__ && (__REACT_HOT_LOADER__.register(W, "Container", "/Users/dmitry/scaleflex/plugins/filerobot-image-editor/projects/react/styledComponents/ImageEditor.ui.js"), __REACT_HOT_LOADER__.register(Y, "Wrapper", "/Users/dmitry/scaleflex/plugins/filerobot-image-editor/projects/react/styledComponents/ImageEditor.ui.js"));

    function q(e, t) {
        if (null == e) return {};
        var n, r, i = function (e, t) {
            if (null == e) return {};
            var n, r, i = {}, o = Object.keys(e);
            for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
            return i
        }(e, t);
        if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(e);
            for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
        }
        return i
    }

    function $() {
        var e = re(["\n  margin-left: 8px;\n  display: inline-block;\n  vertical-align: middle;\n  color: ", ";\n  margin-bottom: 3px;\n  cursor: pointer;\n"]);
        return $ = function () {
            return e
        }, e
    }

    function V() {
        var e = re(["\n  display: inline-block;\n  vertical-align: middle;\n  line-height: 34px;\n  margin-right: 10px;\n  float: right;\n"]);
        return V = function () {
            return e
        }, e
    }

    function X() {
        var e = re(["\n    display: block; \n    width: 10px;\n    height: 10px;\n    margin: 5.5px;\n    background: ", ";\n    position: absolute; top: 0; bottom: 0;\n    right:  ", ";\n    border: 1px solid ", "; \n    border-radius: 12px;\n    transition: all 0.3s ease-in 0s;\n"]);
        return X = function () {
            return e
        }, e
    }

    function K() {
        var e = re(["\n  display: block; \n  width: 200%; \n  margin-left: ", ';\n  transition: margin 0.3s ease-in 0s;\n  \n  &:before, &:after {\n    display: block; float: left; width: 50%; height: 19px; padding: 0; line-height: 19px;\n    font-size: 10px; color: white; font-family: Trebuchet, Arial, sans-serif; font-weight: bold;\n    box-sizing: border-box;\n  }\n  \n  &:before {\n    content: "ON";\n    padding-left: 10px !important;\n    background-color: #01717d; \n    color: #fff;\n  }\n  \n  &:after {\n    content: "OFF";\n    padding-right: 10px !important;\n    background-color: ', "; \n    color: #aaa;\n    text-align: right;\n  }\n"]);
        return K = function () {
            return e
        }, e
    }

    function Z() {
        var e = re(["\n  display: block; \n  overflow: hidden; \n  cursor: pointer;\n  border: 1px solid ", "; \n  border-radius: 4px;\n  margin: 0;\n"]);
        return Z = function () {
            return e
        }, e
    }

    function Q() {
        var e = re(["\n  display: none;\n  \n  :checked + .onoffswitch-label .onoffswitch-inner {\n    margin-left: 0;\n}\n"]);
        return Q = function () {
            return e
        }, e
    }

    function G() {
        var e = re(["\n  position: relative; \n  display: inline-block;\n  vertical-align: middle;\n  width: 60px;\n  margin-bottom: 2px;\n  -webkit-user-select: none; \n  -moz-user-select: none; \n  -ms-user-select: none;\n"]);
        return G = function () {
            return e
        }, e
    }

    function J() {
        var e = re(["\n  ", "\n  ", "\n  \n  ", "\n"]);
        return J = function () {
            return e
        }, e
    }

    function ee() {
        var e = re(["\n  ", "\n  ", "\n  \n  ", "\n"]);
        return ee = function () {
            return e
        }, e
    }

    function te() {
        var e = re(["\n  ", "\n  ", "\n  \n  ", "\n"]);
        return te = function () {
            return e
        }, e
    }

    function ne() {
        var e = re(["\n  background: ", ";\n  height: 34px;\n  position: relative;\n  z-index: 1;\n"]);
        return ne = function () {
            return e
        }, e
    }

    function re(e, t) {
        return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {raw: {value: Object.freeze(t)}}))
    }

    var ie = a.b.div(ne(), (function (e) {
        return e.theme.colors.secondaryBg
    })), oe = a.b.div(te(), (function (e) {
        return h(e)
    }), x("previous"), (function (e) {
        return ge(e)
    })), ae = a.b.div(ee(), (function (e) {
        return h(e)
    }), x("next"), (function (e) {
        return ge(e)
    })), le = a.b.div(J(), (function (e) {
        return h(e)
    }), x("reset"), (function (e) {
        return ge(e)
    })), se = a.b.div(G()), ce = a.b.input(Q()), ue = a.b.label(Z(), (function (e) {
        return e.theme.colors.border
    })), fe = a.b.span(K(), (function (e) {
        return e.checked ? "0" : "-100%"
    }), (function (e) {
        return e.theme.colors.primaryBg
    })), pe = a.b.span(X(), (function (e) {
        return e.theme.colors.secondaryBg
    }), (function (e) {
        return e.checked ? "0" : "37px"
    }), (function (e) {
        return e.theme.colors.secondaryBg
    })), de = Object(a.b)("div").attrs((function () {
        return {className: "cloudimage-url-generator-switch"}
    }))(V()), he = Object(a.b)("div")($(), (function (e) {
        return e.theme.colors.text
    })), me = function (e) {
        var t = e.id, n = e.handleChange, r = e.text, i = e.checked, a = e.style;
        q(e, ["id", "handleChange", "text", "checked", "style"]);
        return o.a.createElement(de, {style: a}, o.a.createElement(se, null, o.a.createElement(ce, {
            type: "checkbox",
            name: t,
            id: t,
            onChange: function () {
                n(!i)
            },
            checked: i
        }), o.a.createElement(ue, {htmlFor: t}, o.a.createElement(fe, {checked: i}), o.a.createElement(pe, {checked: i}))), r && o.a.createElement(he, {
            onClick: function () {
                n(!i)
            }
        }, r))
    };

    function ge(e) {
        return "\n    display: inline-block;\n    height: 34px;\n    width: 34px;\n    cursor: ".concat(e.muted ? "not-allowed" : "pointer", ";\n    text-align: center;\n    line-height: 34px;\n    border-right: 1px solid ").concat(e.theme.colors.border, ";\n    \n    :hover {\n      background: ").concat(e.muted ? "inherit" : e.theme.colors.secondaryBgHover, ";\n    }\n  ")
    }

    "undefined" != typeof __REACT_HOT_LOADER__ && (__REACT_HOT_LOADER__.register(ie, "Footer", "/Users/dmitry/scaleflex/plugins/filerobot-image-editor/projects/react/styledComponents/Footer.ui.js"), __REACT_HOT_LOADER__.register(oe, "PreviousBtn", "/Users/dmitry/scaleflex/plugins/filerobot-image-editor/projects/react/styledComponents/Footer.ui.js"), __REACT_HOT_LOADER__.register(ae, "NextBtn", "/Users/dmitry/scaleflex/plugins/filerobot-image-editor/projects/react/styledComponents/Footer.ui.js"), __REACT_HOT_LOADER__.register(le, "ResetBtn", "/Users/dmitry/scaleflex/plugins/filerobot-image-editor/projects/react/styledComponents/Footer.ui.js"), __REACT_HOT_LOADER__.register(se, "SwitcherWrapper", "/Users/dmitry/scaleflex/plugins/filerobot-image-editor/projects/react/styledComponents/Footer.ui.js"), __REACT_HOT_LOADER__.register(ce, "SwitcherInput", "/Users/dmitry/scaleflex/plugins/filerobot-image-editor/projects/react/styledComponents/Footer.ui.js"), __REACT_HOT_LOADER__.register(ue, "SwitcherLabel", "/Users/dmitry/scaleflex/plugins/filerobot-image-editor/projects/react/styledComponents/Footer.ui.js"), __REACT_HOT_LOADER__.register(fe, "SwitcherInner", "/Users/dmitry/scaleflex/plugins/filerobot-image-editor/projects/react/styledComponents/Footer.ui.js"), __REACT_HOT_LOADER__.register(pe, "SwitcherSwitch", "/Users/dmitry/scaleflex/plugins/filerobot-image-editor/projects/react/styledComponents/Footer.ui.js"), __REACT_HOT_LOADER__.register(de, "SwitcherBlock", "/Users/dmitry/scaleflex/plugins/filerobot-image-editor/projects/react/styledComponents/Footer.ui.js"), __REACT_HOT_LOADER__.register(he, "SwitcherText", "/Users/dmitry/scaleflex/plugins/filerobot-image-editor/projects/react/styledComponents/Footer.ui.js"), __REACT_HOT_LOADER__.register(me, "Switcher", "/Users/dmitry/scaleflex/plugins/filerobot-image-editor/projects/react/styledComponents/Footer.ui.js"), __REACT_HOT_LOADER__.register(ge, "getActionIconStyle", "/Users/dmitry/scaleflex/plugins/filerobot-image-editor/projects/react/styledComponents/Footer.ui.js"));

    function be() {
        var e = xe(["\n  display: ", ";\n  max-height: 100%;\n  max-width: 100%;\n  vertical-align: middle;\n"]);
        return be = function () {
            return e
        }, e
    }

    function ye() {
        var e = xe(["\n  width: ", "px;\n  height: ", "px;\n  display: inline-block;\n  max-height: 100%;\n  max-width: 100%;\n  vertical-align: middle;\n  position: absolute;\n  background-image: url('", "');\n  background-position: ", ";\n  background-repeat: no-repeat;\n  background-size: ", ";\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  margin: auto;\n  opacity:", ";\n"]);
        return ye = function () {
            return e
        }, e
    }

    function ve() {
        var e = xe(["\n  display: inline-block;\n  max-height: 100%;\n  max-width: 100%;\n  /*width: 100%;*/\n  height: 100%;\n  vertical-align: middle;\n  \n  ", "\n  \n  /* Limit image width to avoid overflow the container */\n  img {\n    max-width: 100% !important; /* This rule is very important, please do not ignore this! */\n  }\n  \n  #scaleflex-image-edit-box {\n    display: ", ";\n    max-height: 100%;\n    max-width: 100%;\n    vertical-align: middle;\n  }\n  \n   ", "\n"]);
        return ve = function () {
            return e
        }, e
    }

    function _e() {
        var e = xe(["\n  display: inline-block;\n  vertical-align: middle;\n  width: 100%;\n"]);
        return _e = function () {
            return e
        }, e
    }

    function we() {
        var e = xe(["\n  height: calc(100% - 170px);\n  text-align: center;\n  line-height: calc(100% - 170px);\n  padding: 20px;\n  position: relative;\n  \n  :before {\n    content: '';\n    display: inline-block;\n    height: 100%;\n    vertical-align: middle;\n  }\n"]);
        return we = function () {
            return e
        }, e
    }

    function xe(e, t) {
        return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {raw: {value: Object.freeze(t)}}))
    }

    var Ce = a.b.div(we()), Ee = Object(a.b)("div")(_e()), ke = a.b.div(ve(), (function (e) {
        return e.hideCanvas ? "\n  canvas {\n    position: relative;\n    left: -9999px;\n  }\n  " : "\n  :before {\n    content: '';\n    display: inline-block;\n    height: 100%;\n    vertical-align: middle;\n  }"
    }), (function (e) {
        return e.hide ? "none" : "inline-block"
    }), (function (e) {
        return e.isShowWatermark && "\ncanvas:after {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background: red;\n    opacity: 0.5;\n  }"
    })), Oe = Object(a.b)("div")(ye(), (function (e) {
        return e.width || 0
    }), (function (e) {
        return e.height || 0
    }), (function (e) {
        return e.url ? e.url : "none"
    }), (function (e) {
        return "".concat(e.wx, "px ").concat(e.wy, "px")
    }), (function (e) {
        return "".concat(e.ww, "px ").concat(e.wh, "px")
    }), (function (e) {
        return e.opacity || 0
    })), Te = a.b.canvas.attrs((function () {
        return {}
    }))(be(), (function (e) {
        return e.hide ? "none" : "inline-block"
    }));
    "undefined" != typeof __REACT_HOT_LOADER__ && (__REACT_HOT_LOADER__.register(Ce, "PreviewWrapper", "/Users/dmitry/scaleflex/plugins/filerobot-image-editor/projects/react/styledComponents/Preview.ui.js"), __REACT_HOT_LOADER__.register(Ee, "PreResizeBox", "/Users/dmitry/scaleflex/plugins/filerobot-image-editor/projects/react/styledComponents/Preview.ui.js"), __REACT_HOT_LOADER__.register(ke, "PreviewImgBox", "/Users/dmitry/scaleflex/plugins/filerobot-image-editor/projects/react/styledComponents/Preview.ui.js"), __REACT_HOT_LOADER__.register(Oe, "Watermark", "/Users/dmitry/scaleflex/plugins/filerobot-image-editor/projects/react/styledComponents/Preview.ui.js"), __REACT_HOT_LOADER__.register(Te, "Canvas", "/Users/dmitry/scaleflex/plugins/filerobot-image-editor/projects/react/styledComponents/Preview.ui.js"));

    function Re() {
        var e = function (e, t) {
            t || (t = e.slice(0));
            return Object.freeze(Object.defineProperties(e, {raw: {value: Object.freeze(t)}}))
        }(["\n  text-transform: ", ";\n  display: ", ";\n  padding: ", ";\n  font-size: ", ";\n  line-height:  ", ";\n  min-width: ", ";\n  font-weight: 400;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: middle;\n  touch-action: manipulation;\n  cursor: pointer;\n  user-select: none;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  border: 1px solid transparent;\n  -webkit-transition: all 0.2s ease-in-out;\n  -o-transition: all 0.2s ease-in-out;\n  transition: all 0.2s ease-in-out;\n  border-radius: ", ";\n  \n  :focus, :hover {\n    text-decoration: none;\n  }\n  \n  :focus {\n    outline: 0;\n    -webkit-box-shadow: 0 0 0 2px rgba(2, 117, 216, 0.25);\n            box-shadow: 0 0 0 2px rgba(2, 117, 216, 0.25);\n  }\n  \n  ", "\n  \n  ", "\n"]);
        return Re = function () {
            return e
        }, e
    }

    var Se = a.b.button(Re(), (function (e) {
        return e.tt || f.button && f.button.tt || "none"
    }), (function (e) {
        return e.hide ? "none" : "inline-block"
    }), (function (e) {
        return Ae(e, "button", "p")
    }), (function (e) {
        return Ae(e, "button", "fz")
    }), (function (e) {
        return Ae(e, "button", "lh")
    }), (function (e) {
        return e.fullSize ? "100%" : "auto"
    }), (function (e) {
        return Ae(e, "button", "br")
    }), (function (e) {
        return je(e)
    }), (function (e) {
        return Pe(e)
    }));

    function Ae(e, t, n) {
        var r = e.sm, i = e.lg, o = r ? "sm" : i ? "lg" : "md";
        return f[t] && f[t][o] && f[t][o][n]
    }

    function je(e) {
        return e.disabled ? "\n    cursor: not-allowed;\n    opacity: .65;\n  " : ""
    }

    function Pe(e) {
        return e.success ? "\n    color: #fff;\n    background-color: #28a745;\n    border-color: ##28a745;\n    \n    :hover {\n      color: #fff;\n      background-color: #218838;\n      border-color: #1e7e34;\n    }\n    \n    :focus {\n      -webkit-box-shadow: 0 0 0 2px rgba(92, 184, 92, 0.5);\n              box-shadow: 0 0 0 2px rgba(92, 184, 92, 0.5);\n    }\n    \n    :active {\n      color: #fff;\n      background-color: #1e7e34;\n      background-image: none;\n      border-color: #1c7430;\n    }\n    \n    ".concat(e.disabled ? "\n      background-color: #009345;\n      border-color: #009345;\n      \n      :hover {\n        background-color: #009345;\n        border-color: #009345;\n      }\n    " : "", "\n    \n    ").concat(e.active ? "\n      color: #fff;\n      background-color: #1e7e34;\n      background-image: none;\n      border-color: #1c7430;\n    " : "", "\n  ") : e.primary ? "\n    color: #fff;\n    background-color: #0275d8;\n    border-color: #0275d8;\n    \n    :hover {\n      color: #fff;\n      background-color: #025aa5;\n      border-color: #01549b;\n    }\n    \n    :focus {\n      -webkit-box-shadow: 0 0 0 2px rgba(2, 117, 216, 0.5);\n              box-shadow: 0 0 0 2px rgba(2, 117, 216, 0.5);\n    }\n    \n    :active {\n      color: #fff;\n      background-color: #025aa5;\n      background-image: none;\n      border-color: #01549b;\n    }\n    \n    ".concat(e.disabled ? "\n      background-color: #0275d8;\n      border-color: #0275d8;\n      \n      :hover {\n        background-color: #0275d8;\n        border-color: #0275d8;\n      }\n    " : "", "\n    \n    ").concat(e.active ? "\n      color: #fff;\n      background-color: #025aa5;\n      background-image: none;\n      border-color: #01549b;\n    " : "", "\n  ") : e.info ? "\n    color: #fff;\n    background-color: #5bc0de;\n    border-color: #5bc0de;\n    \n    :hover {\n      color: #fff;\n      background-color: #31b0d5;\n      border-color: #2aabd2;\n    }\n    \n    :focus {\n      -webkit-box-shadow: 0 0 0 2px rgba(91, 192, 222, 0.5);\n              box-shadow: 0 0 0 2px rgba(91, 192, 222, 0.5);\n    }\n    \n    :active {\n      color: #fff;\n      background-color: #31b0d5;\n      background-image: none;\n      border-color: #2aabd2;\n    }\n    \n    ".concat(e.disabled ? "\n      background-color: #5bc0de;\n      border-color: #5bc0de;\n      \n      :hover {\n        background-color: #5bc0de;\n        border-color: #5bc0de;\n      }\n    " : "", "\n    \n    ").concat(e.active ? "\n      color: #fff;\n      background-color: #31b0d5;\n      background-image: none;\n      border-color: #2aabd2;\n    " : "", "\n  ") : e.warning ? "\n    color: #fff;\n    background-color: #f0ad4e;\n    border-color: #f0ad4e;\n    \n    :hover {\n      color: #fff;\n      background-color: #ec971f;\n      border-color: #eb9316;\n    }\n    \n    :focus {\n      -webkit-box-shadow: 0 0 0 2px rgba(240, 173, 78, 0.5);\n              box-shadow: 0 0 0 2px rgba(240, 173, 78, 0.5);\n    }\n    \n    :active {\n      color: #fff;\n      background-color: #ec971f;\n      background-image: none;\n      border-color: #eb9316;\n    }\n    \n    ".concat(e.disabled ? "\n      background-color: #f0ad4e;\n      border-color: #f0ad4e;\n      \n      :hover {\n        background-color: #f0ad4e;\n        border-color: #f0ad4e;\n      }\n    " : "", "\n    \n    ").concat(e.active ? "\n      color: #fff;\n      background-color: #ec971f;\n      background-image: none;\n      border-color: #eb9316;\n    " : "", "\n  ") : e.danger ? "\n    color: #fff;\n    background-color: #d9534f;\n    border-color: #d9534f;\n    \n    :hover {\n      color: #fff;\n      background-color: #c9302c;\n      border-color: #c12e2a;\n    }\n    \n    :focus {\n      -webkit-box-shadow: 0 0 0 2px rgba(217, 83, 79, 0.5);\n              box-shadow: 0 0 0 2px rgba(217, 83, 79, 0.5);\n    }\n    \n    :active {\n      color: #fff;\n      background-color: #c9302c;\n      background-image: none;\n      border-color: #c12e2a;\n    }\n    \n    ".concat(e.disabled ? "\n      background-color: #d9534f;\n      border-color: #d9534f;\n      \n      :hover {\n        background-color: #d9534f;\n        border-color: #d9534f;\n      }\n    " : "", "\n    \n    ").concat(e.active ? "\n      color: #fff;\n      background-color: #c9302c;\n      background-image: none;\n      border-color: #c12e2a;\n    " : "", "\n  ") : e.link ? "\n    font-weight: normal;\n    color: ".concat(Le(e), "; \n    border-radius: 0;\n    background-color: transparent;\n    outline: none;\n    box-shadow: none;\n    \n    :hover {\n      border-color: transparent;\n      color: ").concat(Le(e, "over"), ";\n      background-color: transparent;\n      outline: none;\n      box-shadow: none;\n    }\n    \n    :focus {\n      border-color: transparent;\n      outline: none;\n      box-shadow: none;\n    }\n    \n    :active {\n      background-color: transparent;\n      outline: none;\n      box-shadow: none;\n    }\n    \n    ").concat(e.disabled ? "\n      color: ".concat(Le(e, "over"), ";\n      background-color: transparent;\n      \n      :hover {\n        color: ").concat(Le(e, "over"), ";\n        background-color: transparent;\n      }\n    ") : "", "\n    \n    ").concat(e.active ? "\n      background-color: transparent;\n      color: ".concat(Le(e, "over"), ";\n    ") : "", "\n    \n    :disabled:focus, :disabled:hover {\n      text-decoration: none;\n      outline: none;\n      box-shadow: none;\n    }\n  ") : e.themeColor ? "\n    color: ".concat(De(e, "secondary", "text"), ";\n    background-color: ").concat(De(e, "secondary"), ";\n    border-color: ").concat(De(e, "secondary", null, !0, !0), ";\n    \n    :hover {\n      color: ").concat(De(e, "secondary", "text"), ";\n      background-color: ").concat(De(e, "secondary", null, !0), ";\n      border-color: ").concat(De(e, "secondary", null, !0, !0), ";\n    }\n    \n    :focus {\n      -webkit-box-shadow: 0 0 0 2px ").concat(v(De(e, "secondary"), .5), ";\n              box-shadow: 0 0 0 2px ").concat(v(De(e, "secondary"), .5), ";\n    }\n    \n    :active {\n      color: ").concat(De(e, "secondary", "text"), ";\n      background-color: ").concat(De(e, "secondary", null, !0), ";\n      background-image: none;\n      border-color: ").concat(De(e, "secondary", null, !0, !0), ";\n    }\n    \n    ").concat(e.disabled ? "\n      background-color: ".concat(v(De(e, "secondary"), .5), ";\n      border-color: ").concat(v(De(e, "secondary"), .5), ";\n      \n      :hover {\n        background-color: ").concat(v(De(e, "secondary"), .5), ";\n        border-color: ").concat(v(De(e, "secondary"), .5), ";\n      }\n    ") : "", "\n    \n    ").concat(e.active ? "\n      color: ".concat(De(e, "secondary", "text"), ";\n      background-color: ").concat(De(e, "secondary", null, !0), ";\n      background-image: none;\n      border-color: ").concat(De(e, "secondary", null, !0, !0), ";\n    ") : "", "\n  ") : "\n    background: #fff;\n    color: #1e262c;\n    border-color: #B0B0B0;\n    \n    :hover {\n      color: #1e262c;\n      background-color: #E1E2E3;\n      border-color: #B0B0B0;\n    }\n    \n    :focus {\n      -webkit-box-shadow: 0 0 0 2px rgba(204, 204, 204, 0.5);\n              box-shadow: 0 0 0 2px rgba(204, 204, 204, 0.5);\n    }\n    \n    :active {\n      color: #1e262c;\n      background-color: #E1E2E3;\n      border-color: #B0B0B0;\n    }\n    \n    ".concat(e.disabled ? "\n      background-color: #fff;\n      border-color: #1e262c;\n      opacity: 0.6;\n      \n      :hover {\n        background-color: #fff;\n        border-color: #1e262c;\n        opacity: 0.6;\n      }\n    " : "", "\n    \n    ").concat(e.active ? "\n      color: #1e262c;\n      background-color: #E1E2E3;\n      border-color: #B0B0B0;\n    " : "", "\n  ")
    }

    function De(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "base",
            r = arguments.length > 3 ? arguments[3] : void 0, i = arguments.length > 4 ? arguments[4] : void 0,
            o = r ? f.colors.base : null;
        return f.colors[t][o ? o + (i ? "er" : "") : n]
    }

    function Le(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "base",
            n = e.light ? "light" : e.dark ? "dark" : null, r = "base" !== t, i = f.colors.base;
        return n ? f.colors[n][r ? i : "base"] : f.colors.link[t]
    }

    "undefined" != typeof __REACT_HOT_LOADER__ && (__REACT_HOT_LOADER__.register(Se, "Button", "/Users/dmitry/scaleflex/plugins/filerobot-image-editor/projects/react/styledComponents/Button.js"), __REACT_HOT_LOADER__.register(Ae, "getElementStylesBySize", "/Users/dmitry/scaleflex/plugins/filerobot-image-editor/projects/react/styledComponents/Button.js"), __REACT_HOT_LOADER__.register(je, "isDisabled", "/Users/dmitry/scaleflex/plugins/filerobot-image-editor/projects/react/styledComponents/Button.js"), __REACT_HOT_LOADER__.register(Pe, "getButtonStyles", "/Users/dmitry/scaleflex/plugins/filerobot-image-editor/projects/react/styledComponents/Button.js"), __REACT_HOT_LOADER__.register(De, "getColor", "/Users/dmitry/scaleflex/plugins/filerobot-image-editor/projects/react/styledComponents/Button.js"), __REACT_HOT_LOADER__.register(Le, "getLinkColor", "/Users/dmitry/scaleflex/plugins/filerobot-image-editor/projects/react/styledComponents/Button.js"));

    function Ie() {
        var e = We([""]);
        return Ie = function () {
            return e
        }, e
    }

    function Me() {
        var e = We(["\n  background: ", ";\n  border-color: ", ";\n  color: ", ";\n  text-transform: capitalize;\n  \n  :hover {\n    background: ", ";\n    border-color: ", ";\n    color: ", ";  \n  }\n"]);
        return Me = function () {
            return e
        }, e
    }

    function Be() {
        var e = We(["\n  display: flex;\n  align-items: center;\n  height: 100px;\n  background: ", "\n"]);
        return Be = function () {
            return e
        }, e
    }

    function ze() {
        var e = We(["\n  text-align: center;\n  width: 115px;\n  padding: 5px 10px;\n"]);
        return ze = function () {
            return e
        }, e
    }

    function Ue() {
        var e = We(["\n  text-align: center;\n  width: 100px;\n  padding: 5px 10px;\n"]);
        return Ue = function () {
            return e
        }, e
    }

    function He() {
        var e = We(["\n  text-align: center;\n  text-transform: capitalize;\n  color: ", "\n"]);
        return He = function () {
            return e
        }, e
    }

    function Fe() {
        var e = We(["\n  line-height: 35px;\n  border-bottom: 1px solid ", ";\n  background: ", ";\n"]);
        return Fe = function () {
            return e
        }, e
    }

    function Ne() {
        var e = We(["\n  background: ", ";\n"]);
        return Ne = function () {
            return e
        }, e
    }

    function We(e, t) {
        return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {raw: {value: Object.freeze(t)}}))
    }

    var Ye = a.b.div(Ne(), (function (e) {
        return e.theme.colors.secondaryBg
    })), qe = a.b.div(Fe(), (function (e) {
        return e.theme.colors.primaryBg
    }), (function (e) {
        return e.theme.colors.primaryBg
    })), $e = a.b.div(He(), (function (e) {
        return e.theme.colors.text
    })), Ve = a.b.div(Ue()), Xe = a.b.div(ze()), Ke = a.b.div(Be(), (function (e) {
        return e.theme.colors.secondaryBg
    })), Ze = Object(a.b)(Se)(Me(), (function (e) {
        return e.theme.colors.primaryBg
    }), (function (e) {
        return e.theme.colors.primaryBg
    }), (function (e) {
        return e.theme.colors.text
    }), (function (e) {
        return y(e.theme.colors.primaryBg)
    }), (function (e) {
        return e.theme.colors.primaryBg
    }), (function (e) {
        return e.theme.colors.text
    })), Qe = Object(a.b)(Ze)(Ie());
    "undefined" != typeof __REACT_HOT_LOADER__ && (__REACT_HOT_LOADER__.register(Ye, "HeaderWrapper", "/Users/dmitry/scaleflex/plugins/filerobot-image-editor/projects/react/styledComponents/Header.ui.js"), __REACT_HOT_LOADER__.register(qe, "HeaderTop", "/Users/dmitry/scaleflex/plugins/filerobot-image-editor/projects/react/styledComponents/Header.ui.js"), __REACT_HOT_LOADER__.register($e, "Title", "/Users/dmitry/scaleflex/plugins/filerobot-image-editor/projects/react/styledComponents/Header.ui.js"), __REACT_HOT_LOADER__.register(Ve, "LeftActions", "/Users/dmitry/scaleflex/plugins/filerobot-image-editor/projects/react/styledComponents/Header.ui.js"), __REACT_HOT_LOADER__.register(Xe, "RightActions", "/Users/dmitry/scaleflex/plugins/filerobot-image-editor/projects/react/styledComponents/Header.ui.js"), __REACT_HOT_LOADER__.register(Ke, "ToolbarWrapper", "/Users/dmitry/scaleflex/plugins/filerobot-image-editor/projects/react/styledComponents/Header.ui.js"), __REACT_HOT_LOADER__.register(Ze, "CancelBtn", "/Users/dmitry/scaleflex/plugins/filerobot-image-editor/projects/react/styledComponents/Header.ui.js"), __REACT_HOT_LOADER__.register(Qe, "DarkBtn", "/Users/dmitry/scaleflex/plugins/filerobot-image-editor/projects/react/styledComponents/Header.ui.js"));

    function Ge() {
        var e = pt(["\n  height: 20px;\n  line-height: 20px;\n"]);
        return Ge = function () {
            return e
        }, e
    }

    function Je() {
        var e = pt(["\n  display: inline-block;\n  vertical-align: middle;\n  height: 50px;\n"]);
        return Je = function () {
            return e
        }, e
    }

    function et() {
        var e = pt(["\n  height: 50px;\n  line-height: 50px;\n"]);
        return et = function () {
            return e
        }, e
    }

    function tt() {
        var e = pt(["\n  height: ", "px;\n  border: 1px solid ", ";\n  width: ", "px;\n  margin: 0 auto;\n  display: inline-block;\n  vertical-align: middle;\n"]);
        return tt = function () {
            return e
        }, e
    }

    function nt() {
        var e = pt(["\n  padding: 15px 0;\n  height: 90px;\n  line-height: 100px;\n"]);
        return nt = function () {
            return e
        }, e
    }

    function rt() {
        var e = pt(["\n  display: inline-block;\n  vertical-align: top;\n  text-align: center;\n  padding: 0 20px;\n  cursor: pointer;\n  background: ", "\n"]);
        return rt = function () {
            return e
        }, e
    }

    function it() {
        var e = pt(["\n  cursor: pointer;\n  position: relative;\n  font-weight: bold;\n  font-size: ", ";\n\n  ", "\n  ", "\n  \n  color: ", "\n"]);
        return it = function () {
            return e
        }, e
    }

    function ot() {
        var e = pt(["\n  padding: 0;\n  \n  > span {\n    color: ", " !important;\n   }\n"]);
        return ot = function () {
            return e
        }, e
    }

    function at() {
        var e = pt(["\n  display: inline-block;\n  padding: 0 5px;\n"]);
        return at = function () {
            return e
        }, e
    }

    function lt() {
        var e = pt(["\n  display: inline-block;\n  width: ", ";\n  height: 30px;\n  padding: 6px 12px;\n  font-size: 12px;\n  line-height: 30px;\n  color: ", ";\n  background: ", ";\n  border-radius: 3px;\n  box-shadow: rgba(0, 0, 0, 0.5) 0px 1px 1px inset, rgba(82, 104, 109, 0.4) 0px 1px 0px;\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  vertical-align: middle;\n  border: 0px solid transparent;\n  font-family: Roboto, sans-serif;\n  \n  :hover {\n    outline: none;\n  }\n  \n  :focus {\n    border: 1px solid ", ";\n    outline: none;\n    box-shadow: rgba(0, 112, 124, 0.5) 0px 1px 1px inset, rgba(0, 112, 124, 0.4) 0px 1px 0px;\n  }\n"]);
        return lt = function () {
            return e
        }, e
    }

    function st() {
        var e = pt(["\n  display: block;\n  margin-bottom: 5px;\n  line-height: 15px;\n"]);
        return st = function () {
            return e
        }, e
    }

    function ct() {
        var e = pt(["\n  display: inline-block;\n  width: 100px;\n  padding-top: 10px;\n  text-align: center;\n"]);
        return ct = function () {
            return e
        }, e
    }

    function ut() {
        var e = pt(["\n  display: block;\n  color: ", ";\n  height: 30px;\n  line-height: 30px;\n"]);
        return ut = function () {
            return e
        }, e
    }

    function ft() {
        var e = pt(["\n  color: ", ";\n  overflow-x: auto;\n  overflow-y: hidden;\n  white-space: nowrap;\n  \n  ::-webkit-scrollbar {\n    height: 10px !important;\n  }\n   \n  ::-webkit-scrollbar-thumb {\n    background: #3b4d54;\n    border-radius: 5px;\n  }\n"]);
        return ft = function () {
            return e
        }, e
    }

    function pt(e, t) {
        return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {raw: {value: Object.freeze(t)}}))
    }

    var dt = a.b.div(ft(), (function (e) {
        return e.theme.colors.text
    })), ht = a.b.div(ut(), (function (e) {
        return e.theme.colors.text
    })), mt = a.b.div(ct()), gt = a.b.label(st()), bt = a.b.input.attrs((function (e) {
        return {type: e.type ? e.type : "text"}
    }))(lt(), (function (e) {
        return e.fullSize ? "100%" : e.theme.fieldWidth
    }), (function (e) {
        return e.theme.colors.text
    }), (function (e) {
        return e.dark ? e.theme.colors.primaryBg : e.theme.colors.secondaryBgHover
    }), (function (e) {
        return e.theme.colors.secondaryBg
    })), yt = a.b.div(at()), vt = Object(a.b)(Se)(ot(), (function (e) {
        return e.active ? e.theme.colors.text : e.theme.colors.textMute
    })), _t = a.b.span(it(), (function (e) {
        return e.fz || "28px"
    }), (function (e) {
        return h(e)
    }), (function (e) {
        return x(e.active ? "ratio" : "no-ratio")
    }), (function (e) {
        return e.theme.textMuted
    })), wt = a.b.div(rt(), (function (e) {
        return e.active ? e.theme.colors.secondaryBgHover : "transparent"
    })), xt = a.b.div(nt()), Ct = a.b.div(tt(), (function (e) {
        return Rt(e.ratio)
    }), (function (e) {
        return e.theme.textColor
    }), (function (e) {
        return Tt(e.ratio)
    })), Et = Object(a.b)("div")(et()), kt = Object(a.b)("div")(Je()), Ot = a.b.div(Ge()), Tt = function (e) {
        var t = 50 * e;
        return t > 200 && (t = 200), t
    }, Rt = function (e) {
        var t = 50;
        return 50 * e > 200 && (t = 200 / e), t
    };
    "undefined" != typeof __REACT_HOT_LOADER__ && (__REACT_HOT_LOADER__.register(dt, "CropWrapper", "/Users/dmitry/scaleflex/plugins/filerobot-image-editor/projects/react/styledComponents/Crop.ui.js"), __REACT_HOT_LOADER__.register(ht, "CustomLabel", "/Users/dmitry/scaleflex/plugins/filerobot-image-editor/projects/react/styledComponents/Crop.ui.js"), __REACT_HOT_LOADER__.register(mt, "FieldSet", "/Users/dmitry/scaleflex/plugins/filerobot-image-editor/projects/react/styledComponents/Crop.ui.js"), __REACT_HOT_LOADER__.register(gt, "FieldLabel", "/Users/dmitry/scaleflex/plugins/filerobot-image-editor/projects/react/styledComponents/Crop.ui.js"), __REACT_HOT_LOADER__.register(bt, "FieldInput", "/Users/dmitry/scaleflex/plugins/filerobot-image-editor/projects/react/styledComponents/Crop.ui.js"), __REACT_HOT_LOADER__.register(yt, "BlockRatioWrapper", "/Users/dmitry/scaleflex/plugins/filerobot-image-editor/projects/react/styledComponents/Crop.ui.js"), __REACT_HOT_LOADER__.register(vt, "BlockRatioBtn", "/Users/dmitry/scaleflex/plugins/filerobot-image-editor/projects/react/styledComponents/Crop.ui.js"), __REACT_HOT_LOADER__.register(_t, "BlockRatioIcon", "/Users/dmitry/scaleflex/plugins/filerobot-image-editor/projects/react/styledComponents/Crop.ui.js"), __REACT_HOT_LOADER__.register(wt, "CropBox", "/Users/dmitry/scaleflex/plugins/filerobot-image-editor/projects/react/styledComponents/Crop.ui.js"), __REACT_HOT_LOADER__.register(xt, "CropBoxInner", "/Users/dmitry/scaleflex/plugins/filerobot-image-editor/projects/react/styledComponents/Crop.ui.js"), __REACT_HOT_LOADER__.register(Ct, "CropShape", "/Users/dmitry/scaleflex/plugins/filerobot-image-editor/projects/react/styledComponents/Crop.ui.js"), __REACT_HOT_LOADER__.register(Et, "CropShapeWrapper", "/Users/dmitry/scaleflex/plugins/filerobot-image-editor/projects/react/styledComponents/Crop.ui.js"), __REACT_HOT_LOADER__.register(kt, "ShapeAligner", "/Users/dmitry/scaleflex/plugins/filerobot-image-editor/projects/react/styledComponents/Crop.ui.js"), __REACT_HOT_LOADER__.register(Ot, "CropLabel", "/Users/dmitry/scaleflex/plugins/filerobot-image-editor/projects/react/styledComponents/Crop.ui.js"), __REACT_HOT_LOADER__.register(Tt, "getWidthOfShape", "/Users/dmitry/scaleflex/plugins/filerobot-image-editor/projects/react/styledComponents/Crop.ui.js"), __REACT_HOT_LOADER__.register(Rt, "getHeightOfShape", "/Users/dmitry/scaleflex/plugins/filerobot-image-editor/projects/react/styledComponents/Crop.ui.js"));

    function St() {
        var e = Mt(["\n  display: inline-block;\n  background: ", ";\n  padding: 15px;\n  margin: 5px;\n  border-radius: 4px;\n  cursor: pointer;\n  \n  :hover {\n    background: ", ";\n  }\n"]);
        return St = function () {
            return e
        }, e
    }

    function At() {
        var e = Mt(["\n  display: inline-block;\n"]);
        return At = function () {
            return e
        }, e
    }

    function jt() {
        var e = Mt(["\n  max-width: 600px;\n  margin: 15px auto;\n  background: ", ";\n  border-radius: 4px;\n  padding: 15px;\n  \n  h4 {\n    line-height: 1.4;\n    font-size: 16px;\n    color: ", ";\n  }\n"]);
        return jt = function () {
            return e
        }, e
    }

    function Pt() {
        var e = Mt(["\n  color: ", ";\n  font-size: 14px;\n  max-width: 600px;\n  line-height: 1.4;\n  margin: 0 auto;\n  background: ", ";\n  border-radius: 4px;\n  padding: 15px 15px 15px 55px;\n  position: relative;\n  font-weight: normal;\n  text-align: left;\n  \n  :before {\n    content: '\\e917';\n    font-family: filerobot-image-editor-font;\n    position: absolute;\n    font-size: 20px;\n    line-height: 20px;\n    left: 20px;\n    top: 50%;\n    margin-top: -10px;\n  }\n"], ["\n  color: ", ";\n  font-size: 14px;\n  max-width: 600px;\n  line-height: 1.4;\n  margin: 0 auto;\n  background: ", ";\n  border-radius: 4px;\n  padding: 15px 15px 15px 55px;\n  position: relative;\n  font-weight: normal;\n  text-align: left;\n  \n  :before {\n    content: '\\\\e917';\n    font-family: filerobot-image-editor-font;\n    position: absolute;\n    font-size: 20px;\n    line-height: 20px;\n    left: 20px;\n    top: 50%;\n    margin-top: -10px;\n  }\n"]);
        return Pt = function () {
            return e
        }, e
    }

    function Dt() {
        var e = Mt(["\n  button {\n    min-width: 240px;\n  }\n"]);
        return Dt = function () {
            return e
        }, e
    }

    function Lt() {
        var e = Mt(["\n  display: inline-block;\n  width: 300px;\n  padding: 20px;\n  height: 100px;\n"]);
        return Lt = function () {
            return e
        }, e
    }

    function It() {
        var e = Mt(["\n  color: ", ";\n  text-align: center;\n"]);
        return It = function () {
            return e
        }, e
    }

    function Mt(e, t) {
        return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {raw: {value: Object.freeze(t)}}))
    }

    var Bt = a.b.div(It(), (function (e) {
        return e.theme.colors.text
    })), zt = a.b.div(Lt()), Ut = Object(a.b)("div")(Dt()), Ht = Object(a.b)("p")(Pt(), (function (e) {
        return e.theme.colors.textWarn
    }), (function (e) {
        return e.theme.colors.secondaryBg
    })), Ft = Object(a.b)("div")(jt(), (function (e) {
        return e.theme.colors.secondaryBg
    }), (function (e) {
        return e.theme.colors.text
    })), Nt = Object(a.b)("div")(At()), Wt = Object(a.b)("div")(St(), (function (e) {
        return e.theme.colors.primaryBg
    }), (function (e) {
        return e.theme.colors.primaryBgHover
    }));
    "undefined" != typeof __REACT_HOT_LOADER__ && (__REACT_HOT_LOADER__.register(Bt, "ResizeWrapper", "/Users/dmitry/scaleflex/plugins/filerobot-image-editor/projects/react/styledComponents/Resize.ui.js"), __REACT_HOT_LOADER__.register(zt, "ResizeBox", "/Users/dmitry/scaleflex/plugins/filerobot-image-editor/projects/react/styledComponents/Resize.ui.js"), __REACT_HOT_LOADER__.register(Ut, "PreResizeActions", "/Users/dmitry/scaleflex/plugins/filerobot-image-editor/projects/react/styledComponents/Resize.ui.js"), __REACT_HOT_LOADER__.register(Ht, "PreResizeWarning", "/Users/dmitry/scaleflex/plugins/filerobot-image-editor/projects/react/styledComponents/Resize.ui.js"), __REACT_HOT_LOADER__.register(Ft, "PreResizeInner", "/Users/dmitry/scaleflex/plugins/filerobot-image-editor/projects/react/styledComponents/Resize.ui.js"), __REACT_HOT_LOADER__.register(Nt, "SuggestionsBox", "/Users/dmitry/scaleflex/plugins/filerobot-image-editor/projects/react/styledComponents/Resize.ui.js"), __REACT_HOT_LOADER__.register(Wt, "SuggestionOption", "/Users/dmitry/scaleflex/plugins/filerobot-image-editor/projects/react/styledComponents/Resize.ui.js"));

    function Yt() {
        var e = Kt(["\n  ", "\n  ", "\n  height: 16px;\n  font-size: 16px;\n  margin-top: -4px;\n  display: inline-block;\n  vertical-align: middle;\n  color: ", ";\n  margin-right: 5px;\n"]);
        return Yt = function () {
            return e
        }, e
    }

    function qt() {
        var e = Kt(["\n  margin-top: 10px;\n  \n  button {\n    text-transform: none;\n    font-size: 12px;\n    min-width: 142px;\n    margin-right: 5px;\n  }\n  \n  button:focus,  button:active {\n    outline: none !important;\n    box-shadow: none !important;\n  }\n"]);
        return qt = function () {
            return e
        }, e
    }

    function $t() {
        var e = Kt(["\n\n"]);
        return $t = function () {
            return e
        }, e
    }

    function Vt() {
        var e = Kt(["\n  display: inline-block;\n  //padding: 20px;\n"]);
        return Vt = function () {
            return e
        }, e
    }

    function Xt() {
        var e = Kt(["\n  color: ", ";\n  text-align: center;\n  \n  svg {\n    margin-top: -7px;\n    width: 750px;\n    \n    text {\n      font-size: 2px;\n    }\n  }\n  \n  .image-editor-range-wrapper {\n    width: 280px;\n    padding: 0;\n    margin: 12px auto 0;\n    \n    input#range {\n      background: none;\n      width: 280px;\n      \n      &::-webkit-slider-thumb {\n        -webkit-appearance: none;\n        width: 9px;\n        height: 18px;\n        border-radius: 50%;\n        background: ", ";\n      }\n      \n      &::-moz-range-thumb {\n        border: none;\n        width: 9px;\n        height: 18px;\n        border-radius: 50%;\n        background: ", ";\n        cursor: pointer;\n      }\n    }\n    \n    label {\n      display: none;\n    }\n    \n    :after {\n      display: none;\n    }\n  }\n"]);
        return Xt = function () {
            return e
        }, e
    }

    function Kt(e, t) {
        return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {raw: {value: Object.freeze(t)}}))
    }

    var Zt = a.b.div(Xt(), (function (e) {
        return e.theme.colors.text
    }), (function (e) {
        return e.theme.colors.text
    }), (function (e) {
        return e.theme.colors.text
    })), Qt = a.b.div(Vt()), Gt = a.b.div($t()), Jt = a.b.div(qt()), en = a.b.span(Yt(), (function (e) {
        return h(e)
    }), (function (e) {
        return x(e.name)
    }), (function (e) {
        return e.theme.colors.text
    }));
    "undefined" != typeof __REACT_HOT_LOADER__ && (__REACT_HOT_LOADER__.register(Zt, "OrientationWrapper", "/Users/dmitry/scaleflex/plugins/filerobot-image-editor/projects/react/styledComponents/Orientation.ui.js"), __REACT_HOT_LOADER__.register(Qt, "RotateWrapper", "/Users/dmitry/scaleflex/plugins/filerobot-image-editor/projects/react/styledComponents/Orientation.ui.js"), __REACT_HOT_LOADER__.register(Gt, "RotateLabel", "/Users/dmitry/scaleflex/plugins/filerobot-image-editor/projects/react/styledComponents/Orientation.ui.js"), __REACT_HOT_LOADER__.register(Jt, "RotateButton", "/Users/dmitry/scaleflex/plugins/filerobot-image-editor/projects/react/styledComponents/Orientation.ui.js"), __REACT_HOT_LOADER__.register(en, "RotateIcon", "/Users/dmitry/scaleflex/plugins/filerobot-image-editor/projects/react/styledComponents/Orientation.ui.js"));

    function tn() {
        var e = function (e, t) {
            t || (t = e.slice(0));
            return Object.freeze(Object.defineProperties(e, {raw: {value: Object.freeze(t)}}))
        }(["\n  color: ", ";\n  text-align: center;\n  display: flex;\n  justify-content: center;\n"]);
        return tn = function () {
            return e
        }, e
    }

    var nn = a.b.div(tn(), (function (e) {
        return e.theme.colors.text
    }));
    "undefined" != typeof __REACT_HOT_LOADER__ && __REACT_HOT_LOADER__.register(nn, "AdjustWrapper", "/Users/dmitry/scaleflex/plugins/filerobot-image-editor/projects/react/styledComponents/Adjust.ui.js");

    function rn() {
        var e = an(["\n  position: absolute;\n  z-index: 999;\n  top: 36px;\n  left: 0;\n  right: 0;\n  height: 104px;\n  cursor: not-allowed;\n"]);
        return rn = function () {
            return e
        }, e
    }

    function on() {
        var e = an(["\n  position: absolute;\n  z-index: 999;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  cursor: wait;\n"]);
        return on = function () {
            return e
        }, e
    }

    function an(e, t) {
        return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {raw: {value: Object.freeze(t)}}))
    }

    var ln = a.b.div(on()), sn = Object(a.b)("div")(rn());
    "undefined" != typeof __REACT_HOT_LOADER__ && (__REACT_HOT_LOADER__.register(ln, "NoClickOverlay", "/Users/dmitry/scaleflex/plugins/filerobot-image-editor/projects/react/styledComponents/Common.ui.js"), __REACT_HOT_LOADER__.register(sn, "NoClickToolbar", "/Users/dmitry/scaleflex/plugins/filerobot-image-editor/projects/react/styledComponents/Common.ui.js"));

    function cn() {
        var e = function (e, t) {
            t || (t = e.slice(0));
            return Object.freeze(Object.defineProperties(e, {raw: {value: Object.freeze(t)}}))
        }(["\n  cursor: pointer;\n  position: absolute;\n  font-weight: normal;\n  top: ", ";\n  right: ", ";\n  left: ", ";\n  bottom: ", ";\n  font-size: ", ";\n  z-index: 10;\n  font-family: 'filerobot-image-editor-font' !important;\n  color: ", ";\n  speak: none;\n  font-style: normal;\n  font-variant: normal;\n  text-transform: none;\n  line-height: 1;\n\n  /* Better Font Rendering =========== */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  \n  :hover {\n    color: ", ";\n  }\n  \n  :before {\n      content: '\\e90c'\n    }\n"], ["\n  cursor: pointer;\n  position: absolute;\n  font-weight: normal;\n  top: ", ";\n  right: ", ";\n  left: ", ";\n  bottom: ", ";\n  font-size: ", ";\n  z-index: 10;\n  font-family: 'filerobot-image-editor-font' !important;\n  color: ", ";\n  speak: none;\n  font-style: normal;\n  font-variant: normal;\n  text-transform: none;\n  line-height: 1;\n\n  /* Better Font Rendering =========== */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  \n  :hover {\n    color: ", ";\n  }\n  \n  :before {\n      content: '\\\\e90c'\n    }\n"]);
        return cn = function () {
            return e
        }, e
    }

    var un = a.b.span.attrs((function () {
        return {role: "button"}
    }))(cn(), (function (e) {
        return e.t || "10px"
    }), (function (e) {
        return e.r || "10px"
    }), (function (e) {
        return e.l || "auto"
    }), (function (e) {
        return e.b || "auto"
    }), (function (e) {
        return e.fz || "18px"
    }), (function (e) {
        return f.modal.colorMuted
    }), (function (e) {
        return f.modal.colorMutedHover
    }));
    "undefined" != typeof __REACT_HOT_LOADER__ && __REACT_HOT_LOADER__.register(un, "CloseBtn", "/Users/dmitry/scaleflex/plugins/filerobot-image-editor/projects/react/styledComponents/CloseBtn.js");

    function fn() {
        var e = dn(["\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    width: 200px;\n    height: 200px;\n    margin: auto;\n    padding: 40px;\n    border-radius: 50%;\n    background: ", ";\n    \n    .svg-spin-icon {\n      fill: ", ";\n    }\n    \n    p {\n      color: ", ";\n    }\n"]);
        return fn = function () {
            return e
        }, e
    }

    function pn() {
        var e = dn(["\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  position: ", ";\n  background: ", " !important;\n  opacity: ", " !important;\n  z-index: 1042;\n"]);
        return pn = function () {
            return e
        }, e
    }

    function dn(e, t) {
        return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {raw: {value: Object.freeze(t)}}))
    }

    var hn = a.b.div(pn(), (function (e) {
        return e.fullScreen ? "fixed" : "absolute"
    }), (function (e) {
        return e.overlay ? "rgba(10,10,10,0.26)" : "transparent"
    }), (function (e) {
        return e.overlay ? "0.25" : "0"
    })), mn = Object(a.b)("div")(fn(), (function (e) {
        return e.theme.colors.secondaryBgOpacity
    }), (function (e) {
        return e.theme.colors.text
    }), (function (e) {
        return e.theme.colors.text
    })), gn = function (e) {
        return e.show ? o.a.createElement(i.Fragment, null, o.a.createElement(hn, {
            fullScreen: e.fullScreen,
            overlay: e.overlay
        }), o.a.createElement(mn, null, o.a.createElement("svg", {
            id: "Layer_1",
            x: "0px",
            y: "0px",
            viewBox: "0 0 150 150",
            style: {enableBackground: "new 0 0 150 150"}
        }, o.a.createElement("path", {
            className: "svg-spin-icon",
            d: "M74.9,14.8c-12.2,0-24.3,0-36.5,0c-2.4,0-3.9-1-4.8-3.1c-1.3-3-1.2-6,0.6-8.9c0.8-1.3,2-2,3.5-2 c1.1,0,2.3,0,3.4,0c23.3,0,46.7,0,70-0.1c3.9,0,5.3,1.9,6,4.7c0.5,2.1,0.4,4.2-0.5,6.3c-0.9,2.2-2.5,3.1-4.8,3c-2.9,0-5.7,0-8.6,0 C93.9,14.8,84.4,14.8,74.9,14.8z"
        }), o.a.createElement("path", {
            className: "svg-spin-icon",
            d: "M75.1,118.1c12,0,24,0,35.9,0c4,0,5.9,1.7,6.3,5.7c0.1,1.4,0,2.9-0.3,4.2c-0.7,2.9-2.4,4.1-5.3,4.1 c-24.1,0-48.3,0-72.4,0c-3.7,0-5.4-1.2-6.3-5.3c-0.4-2-0.1-3.9,0.7-5.7c0.9-2,2.4-3.1,4.7-3C50.6,118.1,62.9,118.1,75.1,118.1z"
        }), o.a.createElement("path", {
            className: "svg-spin-icon",
            d: "M75.3,76.3c0.2,0.4,3.1,9.3,7.2,14.1c3.9,4.7,8.9,8.5,13,12.5c3.2,3.2,5.4,7,6.8,11.2c0.5,1.6,0.3,1.9-1.4,1.9 c-17.3,0-34.5,0-51.8,0c-1.7,0-1.9-0.2-1.3-1.8c1.8-5.5,5.2-10,9.4-13.9c3.5-3.3,7.7-6.1,10.6-9.9c3.5-4.7,6.8-13.3,7.1-14.1 C75.1,76.3,75.2,76.3,75.3,76.3z"
        }), o.a.createElement("path", {
            className: "svg-spin-icon",
            d: "M45.5,23.6c0,3.8-0.1,7.6,1.2,11.3c1,2.9,2.8,5.2,4.9,7.3c5,5.3,10.2,10.5,15.2,15.8c1.1,1.2,2,2.6,3.1,3.9 c2,2.5,2.2,7.6-0.2,10.5c-1.8,2.2-3.6,4.3-5.5,6.4C59.5,84,54.7,89.1,50,94.2c-3.1,3.4-4.4,7.5-4.5,12c0,2.8-0.1,5.6,0,8.4 c0,1-0.3,1.4-1.4,1.4c-1.7,0-2.3,0-3.7,0c-0.9,0-1.3-0.4-1.3-1.3c0-5-0.3-10,0.8-14.9c0.8-3.5,2.5-6.6,4.8-9.3 c3.6-4.2,7.5-8.2,11.3-12.3c1.7-1.8,3.3-3.7,4.9-5.5c0.9-1,1.9-2,2.7-3c1.8-2.3,1.6-4.3-0.4-6.4c-5.2-5.4-10.4-11-15.8-16.3 c-5.7-5.7-8.4-12.4-8.3-20.4c0-2.9,0-5.7,0-8.6c0-1.1,0.4-1.6,1.5-1.5c1.3,0,2.6,0,3.8,0c0.8,0,1.1,0.3,1.1,1.2 C45.5,19.8,45.5,21.7,45.5,23.6z"
        }), o.a.createElement("path", {
            className: "svg-spin-icon",
            d: "M109.9,35.9c-0.6,2.7-2.1,5.3-3.9,7.5c-3.5,4.2-7.5,8.1-11.2,12.1c-3,3.2-5.9,6.5-8.8,9.7 c-0.9,1-0.9,2.1-0.2,3.1c1.2,1.7,2.5,3.3,3.8,4.8c1.5,1.8,3,3.6,4.6,5.3c3.4,3.6,6.8,7.1,10.1,10.7c4.7,5.1,6.8,11.2,6.9,18.1 c0,2.4,0,5,0,7.5c0,1.3-0.3,1.5-1.6,1.5c-1.3,0-2.1,0-3.3,0c-1.1,0-1.5-0.4-1.5-1.5c0-3.4-0.2-6.7-0.3-10.1 c-0.1-4.1-1.9-7.5-4.5-10.5c-3.3-3.8-6.8-7.4-10.2-11.1c-3.3-3.5-6.9-6.6-9.3-10.8c-0.8-1.5-1.4-3.2-1.7-4.9c-0.4-2.1,0.7-4,1.9-5.5 c3.1-3.8,6.5-7.4,9.8-11.1c2.9-3.2,6-6.2,9-9.3c3.5-3.6,5.1-8,5.2-13c0-3.4,0.1-6.7,0.1-10.1c0-1.1,0.3-1.5,1.3-1.4 c1.2,0,2.4,0,3.6,0c1.2,0,1.6,0.5,1.6,1.6c-0.1,1.6,0,3.1,0,4.7C111.4,23,110.9,31.7,109.9,35.9z"
        }), o.a.createElement("path", {
            className: "svg-spin-icon",
            d: "M74.8,67.9c-0.2-1.3-1.1-5.7-1.5-7C71.4,54,59.7,44.3,54.3,39c-0.7-0.7-1.3-1.5-1.8-2.5 c7.1,3.4,14.4,6.1,22.6,6.1c8.2,0,15.5-2.6,22.4-6.2c0.1,0.1,0.2,0.2,0.3,0.3c-0.5,0.6-0.9,1.2-1.4,1.8c-4.5,4.5-18.7,15.5-20,22.4 c-0.2,0.8-1,6.2-1.2,7C75.1,67.9,75,67.9,74.8,67.9z"
        }), o.a.createElement("g", null)), o.a.createElement("p", {style: {textAlign: "center"}}, e.label))) : null
    };
    "undefined" != typeof __REACT_HOT_LOADER__ && (__REACT_HOT_LOADER__.register(hn, "SpinnerOverlay", "/Users/dmitry/scaleflex/plugins/filerobot-image-editor/projects/react/styledComponents/Spinner.js"), __REACT_HOT_LOADER__.register(mn, "IconWrapper", "/Users/dmitry/scaleflex/plugins/filerobot-image-editor/projects/react/styledComponents/Spinner.js"), __REACT_HOT_LOADER__.register(gn, "Spinner", "/Users/dmitry/scaleflex/plugins/filerobot-image-editor/projects/react/styledComponents/Spinner.js"));

    function bn() {
        var e = On(["\n  width: 200px;\n  height: 70px;\n  display: inline-block;\n  vertical-align: middle;\n  background: ", " url(", ") 50% 50% / contain no-repeat; \n  margin: 10px;\n  padding: 20px;\n  border-radius: 4px;\n  cursor: pointer;\n  \n  :hover {\n    background-color: ", ";\n  }\n"]);
        return bn = function () {
            return e
        }, e
    }

    function yn() {
        var e = On(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  line-height: 100px;\n  background: ", ";\n"]);
        return yn = function () {
            return e
        }, e
    }

    function vn() {
        var e = On(["\n  display: inline-block;\n  vertical-align: middle;\n  margin-left: 20px;\n  cursor: pointer;\n"]);
        return vn = function () {
            return e
        }, e
    }

    function _n() {
        var e = On(["\n  width: 30px;\n  height: 30px;\n  display: inline-block;\n  border: 1px solid ", ";\n  background: ", ";\n  cursor: pointer;\n  \n  :hover {\n    background: ", ";\n  }\n"]);
        return _n = function () {
            return e
        }, e
    }

    function wn() {
        var e = On(["\n  width: 100px;\n  padding: 5px;\n  display: inline-block;\n  font-size: 0;\n  \n  div:nth-child(1) {\n    border-radius: 4px 0 0 0;\n  }\n  \n  div:nth-child(3) {\n    border-radius: 0 4px 0 0;\n  }\n  \n  div:nth-child(7) {\n    border-radius: 0 0 0 4px;\n  }\n  \n  div:nth-child(9) {\n    border-radius: 0 0 4px 0;\n  }\n"]);
        return wn = function () {
            return e
        }, e
    }

    function xn() {
        var e = On(["\n  width: calc(100% - 100px);\n  display: inline-block;\n  vertical-align: top;\n"]);
        return xn = function () {
            return e
        }, e
    }

    function Cn() {
        var e = On(["\n  padding: 10px;\n\n  label {\n    min-width: 100px;\n    display: inline-block;\n    vertical-align: middle;\n  }\n  \n  .cloudimage-url-generator-switch {\n    margin-left: 100px;\n    margin-top: -6px;\n    \n    label {\n      min-width: auto;\n    }\n  }\n"]);
        return Cn = function () {
            return e
        }, e
    }

    function En() {
        var e = On(["\n  padding: 10px;\n  \n  label {\n    min-width: 100px;\n    display: inline-block;\n    vertical-align: middle;\n    margin: 0;\n  }\n  \n  input {\n    width: calc(100% - 100px);\n  }\n"]);
        return En = function () {
            return e
        }, e
    }

    function kn() {
        var e = On(["\n  position: relative;\n  color: ", ";\n  text-align: left;\n  white-space: normal;\n  \n  .image-editor-range {\n    display: inline-block;\n    padding: 5px;\n    vertical-align: middle;\n  \n    :after {\n      display: none;\n    }\n    \n    label {\n      display: none;\n    }\n  }\n"]);
        return kn = function () {
            return e
        }, e
    }

    function On(e, t) {
        return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {raw: {value: Object.freeze(t)}}))
    }

    var Tn = a.b.div(kn(), (function (e) {
            return e.theme.colors.text
        })), Rn = Object(a.b)("div")(En()), Sn = Object(a.b)("div")(Cn()), An = Object(a.b)("div")(xn()),
        jn = Object(a.b)("div")(wn()), Pn = Object(a.b)("div")(_n(), (function (e) {
            return e.theme.colors.secondaryBgHover
        }), (function (e) {
            return e.active ? e.theme.colors.accent : e.theme.colors.secondaryBg
        }), (function (e) {
            return e.theme.colors.primaryBg
        })), Dn = Object(a.b)("div")(vn()), Ln = Object(a.b)("div")(yn(), (function (e) {
            return e.theme.colors.secondaryBg
        })), In = Object(a.b)("div")(bn(), (function (e) {
            return e.theme.colors.primaryBgHover
        }), (function (e) {
            return e.src
        }), (function (e) {
            return e.theme.colors.secondaryBgHover
        }));
    "undefined" != typeof __REACT_HOT_LOADER__ && (__REACT_HOT_LOADER__.register(Tn, "WatermarkWrapper", "/Users/dmitry/scaleflex/plugins/filerobot-image-editor/projects/react/styledComponents/Watermark.ui.js"), __REACT_HOT_LOADER__.register(Rn, "WrapperForURL", "/Users/dmitry/scaleflex/plugins/filerobot-image-editor/projects/react/styledComponents/Watermark.ui.js"), __REACT_HOT_LOADER__.register(Sn, "WrapperForOpacity", "/Users/dmitry/scaleflex/plugins/filerobot-image-editor/projects/react/styledComponents/Watermark.ui.js"), __REACT_HOT_LOADER__.register(An, "WatermarkInputs", "/Users/dmitry/scaleflex/plugins/filerobot-image-editor/projects/react/styledComponents/Watermark.ui.js"), __REACT_HOT_LOADER__.register(jn, "WatermarkPositionWrapper", "/Users/dmitry/scaleflex/plugins/filerobot-image-editor/projects/react/styledComponents/Watermark.ui.js"), __REACT_HOT_LOADER__.register(Pn, "PositionSquare", "/Users/dmitry/scaleflex/plugins/filerobot-image-editor/projects/react/styledComponents/Watermark.ui.js"), __REACT_HOT_LOADER__.register(Dn, "SelectWatermarkLabel", "/Users/dmitry/scaleflex/plugins/filerobot-image-editor/projects/react/styledComponents/Watermark.ui.js"), __REACT_HOT_LOADER__.register(Ln, "Watermarks", "/Users/dmitry/scaleflex/plugins/filerobot-image-editor/projects/react/styledComponents/Watermark.ui.js"), __REACT_HOT_LOADER__.register(In, "WatermarkIcon", "/Users/dmitry/scaleflex/plugins/filerobot-image-editor/projects/react/styledComponents/Watermark.ui.js"));

    function Mn(e) {
        return (Mn = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function Bn(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function zn(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? Bn(n, !0).forEach((function (t) {
                Wn(e, t, n[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Bn(n).forEach((function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }))
        }
        return e
    }

    function Un(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function Hn(e) {
        return (Hn = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function Fn(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function Nn(e, t) {
        return (Nn = Object.setPrototypeOf || function (e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function Wn(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    var Yn = function (e) {
            function t() {
                var e, n, r, i;
                !function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t);
                for (var o = arguments.length, a = new Array(o), l = 0; l < o; l++) a[l] = arguments[l];
                return r = this, i = (e = Hn(t)).call.apply(e, [this].concat(a)), n = !i || "object" !== Mn(i) && "function" != typeof i ? Fn(r) : i, Wn(Fn(n), "onApplyWatermarkChange", (function () {
                    n.props.updateState({watermark: zn({}, n.props.watermark, {applyByDefault: !n.props.watermark.applyByDefault})})
                })), n
            }

            var n, r, i;
            return function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && Nn(e, t)
            }(t, e), n = t, (r = [{
                key: "render", value: function () {
                    var e = this.props, t = e.initialZoom, n = e.operations, r = e.operationsZoomed, i = e.currentOperation,
                        a = void 0 === i ? null : i, l = e.redoOperation, s = e.resetOperations, c = e.activeBody, u = e.t,
                        f = e.logoImage, p = e.watermark, d = 1 === t ? n : r, h = d.findIndex((function (e) {
                            return e === a
                        })), m = a && d[d.length - 1] === a, g = d.length < 1 || -1 === h,
                        b = (d.length < 2 || d.length > 1 && m) && (-1 !== h || 1 !== d.length);
                    return o.a.createElement(ie, null, o.a.createElement(le, {
                        muted: "preview" !== c, onClick: function () {
                            "preview" === c && s()
                        }, title: u["footer.reset"]
                    }), o.a.createElement(oe, {
                        onClick: function () {
                            !g && l(h - 1)
                        }, muted: g, title: u["footer.undo"]
                    }), o.a.createElement(ae, {
                        onClick: function () {
                            !b && l(h + 1)
                        }, muted: b, title: u["footer.redo"]
                    }), f && p && o.a.createElement(me, {
                        id: "switch-watermark-footer",
                        checked: p && p.applyByDefault,
                        handleChange: this.onApplyWatermarkChange,
                        text: u["common.apply_watermark"]
                    }))
                }
            }]) && Un(n.prototype, r), i && Un(n, i), t
        }(i.Component), qn = Yn,
        $n = ("undefined" != typeof __REACT_HOT_LOADER__ && __REACT_HOT_LOADER__.register(Yn, "default", "/Users/dmitry/scaleflex/plugins/filerobot-image-editor/projects/react/components/Footer/Footer.js"), function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
            return e.replace(/_/g, " ")
        });

    function Vn(e, t, n) {
        t = t || "", n = n || 512;
        for (var r = atob(e), i = [], o = 0; o < r.length; o += n) {
            for (var a = r.slice(o, o + n), l = new Array(a.length), s = 0; s < a.length; s++) l[s] = a.charCodeAt(s);
            var c = new Uint8Array(l);
            i.push(c)
        }
        return new Blob(i, {type: t})
    }

    function Xn(e) {
        switch (e) {
            case"colorize":
                return "https://cdn.scaleflex.it/plugins/filerobot-image-editor/assets/images/filters/colorize.jpg";
            case"contrast":
                return "https://cdn.scaleflex.it/plugins/filerobot-image-editor/assets/images/filters/contrast.png";
            case"cross_process":
                return "https://cdn.scaleflex.it/plugins/filerobot-image-editor/assets/images/filters/cross_process.png";
            case"glow_sun":
                return "https://cdn.scaleflex.it/plugins/filerobot-image-editor/assets/images/filters/glow_sun.png";
            case"hdr_effect":
                return "https://cdn.scaleflex.it/plugins/filerobot-image-editor/assets/images/filters/hdr_effect.png";
            case"jarques":
                return "https://cdn.scaleflex.it/plugins/filerobot-image-editor/assets/images/filters/jarques.png";
            case"love":
                return "https://cdn.scaleflex.it/plugins/filerobot-image-editor/assets/images/filters/love.png";
            case"old_boot":
                return "https://cdn.scaleflex.it/plugins/filerobot-image-editor/assets/images/filters/old_boot.png";
            case"orange_peel":
                return "https://cdn.scaleflex.it/plugins/filerobot-image-editor/assets/images/filters/orange_peel.png";
            case"pin_hole":
                return "https://cdn.scaleflex.it/plugins/filerobot-image-editor/assets/images/filters/pin_hole.png";
            case"pleasant":
                return "https://cdn.scaleflex.it/plugins/filerobot-image-editor/assets/images/filters/pleasant.png";
            case"sepia":
                return "https://cdn.scaleflex.it/plugins/filerobot-image-editor/assets/images/filters/sepia.png";
            case"sun_rise":
                return "https://cdn.scaleflex.it/plugins/filerobot-image-editor/assets/images/filters/sun_rise.png";
            case"vintage":
                return "https://cdn.scaleflex.it/plugins/filerobot-image-editor/assets/images/filters/vintage.png";
            case"clarity":
                return "https://cdn.scaleflex.it/plugins/filerobot-image-editor/assets/images/effects/clarity.png";
            case"edge_enhance":
                return "https://cdn.scaleflex.it/plugins/filerobot-image-editor/assets/images/effects/edge_enhance.png";
            case"emboss":
                return "https://cdn.scaleflex.it/plugins/filerobot-image-editor/assets/images/effects/emboss.png";
            case"grungy":
                return "https://cdn.scaleflex.it/plugins/filerobot-image-editor/assets/images/effects/grungy.png";
            case"hazy":
                return "https://cdn.scaleflex.it/plugins/filerobot-image-editor/assets/images/effects/hazy.png";
            case"lomo":
                return "https://cdn.scaleflex.it/plugins/filerobot-image-editor/assets/images/effects/lomo.png";
            case"noise":
                return "https://cdn.scaleflex.it/plugins/filerobot-image-editor/assets/images/effects/noise.png";
            case"old_paper":
                return "https://cdn.scaleflex.it/plugins/filerobot-image-editor/assets/images/effects/old_paper.png";
            case"posterize":
                return "https://cdn.scaleflex.it/plugins/filerobot-image-editor/assets/images/effects/posterize.png";
            case"radial_blur":
                return "https://cdn.scaleflex.it/plugins/filerobot-image-editor/assets/images/effects/radial_blur.png";
            case"sin_city":
                return "https://cdn.scaleflex.it/plugins/filerobot-image-editor/assets/images/effects/sin_city.png";
            case"tilt_shift":
                return "https://cdn.scaleflex.it/plugins/filerobot-image-editor/assets/images/effects/tilt_shift.png";
            default:
                return ""
        }
    }

    var Kn = function (e) {
            return e.replace(/\?/g, "%3F")
        },
        Zn = ("undefined" != typeof __REACT_HOT_LOADER__ && (__REACT_HOT_LOADER__.register($n, "getLabel", "/Users/dmitry/scaleflex/plugins/filerobot-image-editor/projects/react/utils.js"), __REACT_HOT_LOADER__.register(Vn, "b64toBlob", "/Users/dmitry/scaleflex/plugins/filerobot-image-editor/projects/react/utils.js"), __REACT_HOT_LOADER__.register(Xn, "getIcon", "/Users/dmitry/scaleflex/plugins/filerobot-image-editor/projects/react/utils.js"), __REACT_HOT_LOADER__.register(Kn, "encodePermalink", "/Users/dmitry/scaleflex/plugins/filerobot-image-editor/projects/react/utils.js")), ["adjust", "effects", "filters", "rotate", "crop", "resize", "watermark"]),
        Qn = ["edge_enhance", "emboss", "grungy", "hazy", "lomo", "radial_blur", "sin_city", "tilt_shift"],
        Gn = ["cross_process", "glow_sun", "jarques", "love", "old_boot", "orange_peel", "pin_hole", "sepia", "sun_rise", "vintage"],
        Jn = ["crop", "resize", "rotate"],
        er = [{name: "original", value: 0}, {name: "square", value: 1}, {name: "banner", value: 7.8}, {
            name: "5 : 4",
            value: 1.25
        }, {name: "4 : 3", value: 1.33333}, {name: "6 : 4", value: 1.5}, {name: "16 : 9", value: 1.7777}],
        tr = [{name: "big square", width: 600, height: 600, ratio: 1}, {
            name: "middle square",
            width: 400,
            height: 400,
            ratio: 1
        }, {name: "small square", width: 200, height: 200, ratio: 1}, {
            name: "small size",
            width: 1200,
            height: 960,
            ratio: 1.25
        }, {name: "better quality", width: 1920, height: 1536, ratio: 1.25}, {
            name: "small size",
            width: 1200,
            height: 900,
            ratio: 1.33333
        }, {name: "better quality", width: 1920, height: 1440, ratio: 1.33333}, {
            name: "small size",
            width: 1200,
            height: 800,
            ratio: 1.5
        }, {name: "better quality", width: 1920, height: 1280, ratio: 1.5}, {
            name: "small size",
            width: 1200,
            height: 675,
            ratio: 1.7777
        }, {name: "better quality", width: 1920, height: 1080, ratio: 1.7777}, {
            name: "small banner",
            width: 468,
            height: 60,
            ratio: 7.8
        }, {name: "big banner", width: 936, height: 120, ratio: 7.8}], nr = {
            hideCloudimageSwitcher: !0,
            processWithCloudimage: !1,
            uploadWithCloudimageLink: !1,
            elementId: null,
            isLowQualityPreview: !0,
            reduceBeforeEdit: {mode: "manual", widthLimit: 2e3, heightLimit: 2e3},
            cropBeforeEdit: null,
            cropPresets: er,
            resizePresets: tr
        },
        rr = ("undefined" != typeof __REACT_HOT_LOADER__ && (__REACT_HOT_LOADER__.register(Zn, "TOOLS", "/Users/dmitry/scaleflex/plugins/filerobot-image-editor/projects/react/config.js"), __REACT_HOT_LOADER__.register(Qn, "EFFECTS", "/Users/dmitry/scaleflex/plugins/filerobot-image-editor/projects/react/config.js"), __REACT_HOT_LOADER__.register(Gn, "FILTERS", "/Users/dmitry/scaleflex/plugins/filerobot-image-editor/projects/react/config.js"), __REACT_HOT_LOADER__.register(Jn, "CLOUDIMAGE_OPERATIONS", "/Users/dmitry/scaleflex/plugins/filerobot-image-editor/projects/react/config.js"), __REACT_HOT_LOADER__.register(er, "cropPresets", "/Users/dmitry/scaleflex/plugins/filerobot-image-editor/projects/react/config.js"), __REACT_HOT_LOADER__.register(tr, "resizePresets", "/Users/dmitry/scaleflex/plugins/filerobot-image-editor/projects/react/config.js"), __REACT_HOT_LOADER__.register(nr, "UPLOADER", "/Users/dmitry/scaleflex/plugins/filerobot-image-editor/projects/react/config.js")), n(13)),
        ir = n.n(rr), or = n(9), ar = n.n(or), lr = function (e) {
            switch (e) {
                case"colorize":
                    return "colorize";
                case"contrast":
                    return "contrast";
                case"cross_process":
                    return "crossProcess";
                case"glow_sun":
                    return "glowingSun";
                case"hdr_effect":
                    return "hdr";
                case"jarques":
                    return "jarques";
                case"love":
                    return "love";
                case"old_boot":
                    return "oldBoot";
                case"orange_peel":
                    return "orangePeel";
                case"pin_hole":
                    return "pinhole";
                case"pleasant":
                    return "pleasant";
                case"sepia":
                    return "sepia";
                case"sun_rise":
                    return "sunrise";
                case"vintage":
                    return "vintage";
                case"clarity":
                    return "";
                case"edge_enhance":
                    return "edgeEnhance";
                case"emboss":
                    return "emboss";
                case"grungy":
                    return "grungy";
                case"hazy":
                    return "hazyDays";
                case"lomo":
                    return "lomo";
                case"noise":
                    return "noise";
                case"old_paper":
                    return "oldPaper";
                case"posterize":
                    return "posterize";
                case"radial_blur":
                    return "radialBlur";
                case"sin_city":
                    return "sinCity";
                case"tilt_shift":
                    return "tiltShift";
                default:
                    return null
            }
        },
        sr = ("undefined" != typeof __REACT_HOT_LOADER__ && __REACT_HOT_LOADER__.register(lr, "getEffectHandlerName", "/Users/dmitry/scaleflex/plugins/filerobot-image-editor/projects/react/utils/effects.utils.js"), function (e, t, n) {
            var r, i, o, a, l, s, c, u, f, p, d = e.position, h = void 0 === d ? "center" : d, m = n.width / n.height;
            return o = (r = t.width) / 3, a = (i = t.height) / 3, l = r / 60, s = i / 60, "center" === h ? (u = i / 2 - (p = (f = c = o) / m) / 2, p > a && (u = p = a, c = r / 2 - (f = p * m) / 2)) : "left-bottom" === h ? (c = l, u = i - s - (p = (f = o - 2 * l) / m), p > a && (c = l, f = (p = a - 2 * s) * m, u = 2 * i / 3 + s)) : "left-top" === h ? (c = l, u = s, (p = (f = o - 2 * l) / m) > a && (f = (p = a - 2 * s) * m)) : "left-center" === h ? (c = l, u = i / 2 - (p = (f = o - 2 * l) / m) / 2, p > a && (u = a, f = (p = a) * m)) : "right-top" === h ? (c = 2 * o + l, u = s, (p = (f = o - 2 * l) / m) > a && (c = r - l - (f = (p = a - 2 * s) * m), u = s)) : "right-bottom" === h ? (c = 2 * o + l, u = i - s - (p = (f = o - 2 * l) / m), p > a && (c = r - l - (f = (p = a - 2 * s) * m), u = i - a + s)) : "center-top" === h ? (c = o, u = s, (p = (f = o) / m) > a && (c = r / 2 - (f = (p = a - 2 * s) * m) / 2)) : "right-center" === h ? (c = 2 * o + l, u = i / 2 - (p = (f = o - 2 * l) / m) / 2, p > a && (c = r - l - (f = (p = a) * m), u = a + s)) : "center-bottom" === h && (c = o, u = i - s - (p = (f = o) / m), p > a && (c = r / 2 - (f = (p = a - 2 * s) * m) / 2, u = i - a + s)), [c, u, f, p]
        }),
        cr = ("undefined" != typeof __REACT_HOT_LOADER__ && __REACT_HOT_LOADER__.register(sr, "getWatermarkPosition", "/Users/dmitry/scaleflex/plugins/filerobot-image-editor/projects/react/utils/watermark.utils.js"), function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "scaleflex-image-edit-box";
            return window.document.getElementById(e)
        });
    "undefined" != typeof __REACT_HOT_LOADER__ && __REACT_HOT_LOADER__.register(cr, "getCanvasNode", "/Users/dmitry/scaleflex/plugins/filerobot-image-editor/projects/react/utils/global.utils.js");

    function ur(e) {
        return (ur = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function fr(e) {
        return function (e) {
            if (Array.isArray(e)) {
                for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
                return n
            }
        }(e) || function (e) {
            if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
        }(e) || function () {
            throw new TypeError("Invalid attempt to spread non-iterable instance")
        }()
    }

    function pr(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function dr(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? pr(n, !0).forEach((function (t) {
                vr(e, t, n[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : pr(n).forEach((function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }))
        }
        return e
    }

    function hr(e, t) {
        return function (e) {
            if (Array.isArray(e)) return e
        }(e) || function (e, t) {
            if (!(Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e))) return;
            var n = [], r = !0, i = !1, o = void 0;
            try {
                for (var a, l = e[Symbol.iterator](); !(r = (a = l.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0) ;
            } catch (e) {
                i = !0, o = e
            } finally {
                try {
                    r || null == l.return || l.return()
                } finally {
                    if (i) throw o
                }
            }
            return n
        }(e, t) || function () {
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }()
    }

    function mr(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function gr(e) {
        return (gr = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function br(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function yr(e, t) {
        return (yr = Object.setPrototypeOf || function (e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function vr(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    var _r = {
        effect: null,
        filter: null,
        crop: null,
        resize: null,
        rotate: null,
        correctionDegree: 0,
        flipX: !1,
        flipY: !1,
        adjust: {brightness: 0, contrast: 0, saturation: 0, exposure: 0},
        canvasDimensions: {width: 300, height: 200, ratio: 1.5}
    }, wr = function (e) {
        function t() {
            var e, n, r;
            return function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, t), n = this, r = gr(t).call(this), e = !r || "object" !== ur(r) && "function" != typeof r ? br(n) : r, vr(br(e), "initializeCanvases", (function (t) {
                var n = br(e), r = e.props, i = r.config, o = (i = void 0 === i ? {} : i).isLowQualityPreview,
                    a = r.updateState, l = 1;
                if (o && t.height > 1050) {
                    var s = cr("scaleflex-image-edit-box-original"), c = s.getContext("2d");
                    s.width = t.width, s.height = t.height, c.drawImage(t, 0, 0, t.width, t.height), l = t.height / 800;
                    var u = t.width / l, f = t.height / l;
                    a({
                        initialZoom: l,
                        canvasOriginal: n.cloneCanvas(s)
                    }), new window.Caman(cr("scaleflex-image-edit-box"), (function () {
                        this.resize({width: u, height: f}), this.render((function () {
                            var e = n.replaceWithNewCanvas("scaleflex-image-edit-box");
                            n.CamanInstanceZoomed = new window.Caman(e, (function () {
                                n.CamanInstanceOriginal = new window.Caman(s, (function () {
                                })), a({isShowSpinner: !1, canvasZoomed: n.cloneCanvas(e)})
                            }))
                        }))
                    }))
                } else {
                    var p = cr("scaleflex-image-edit-box");
                    n.CamanInstance = new window.Caman(p, (function () {
                        a({isShowSpinner: !1, canvasOriginal: n.cloneCanvas(p)})
                    }))
                }
            })), vr(br(e), "watermarkImageToDataURL", (function (e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, r = n.opacity,
                    i = e.getContext("2d"), o = sr(n, e, t), a = hr(o, 4), l = a[0], s = a[1], c = a[2], u = a[3];
                i.globalAlpha = r, i.drawImage(t, l, s, c, u)
            })), vr(br(e), "cloneCanvas", (function (e) {
                var t = document.createElement("canvas"), n = t.getContext("2d");
                return t.width = e.width, t.height = e.height, t.id = e.id, n.drawImage(e, 0, 0), t
            })), vr(br(e), "replaceWithNewCanvas", (function (e) {
                var t = cr(e), n = document.createElement("canvas"), r = n.getContext("2d"), i = t.parentElement;
                return i.removeChild(t), n.width = t.width, n.height = t.height, n.id = e, r.drawImage(t, 0, 0), i.appendChild(n), n
            })), vr(br(e), "replaceCanvas", (function (e, t) {
                var n = cr(t), r = n.parentElement;
                return r.removeChild(n), r.appendChild(e), e
            })), vr(br(e), "saveImage", (function () {
                var t = e.props, n = t.onComplete, r = t.onClose, i = t.updateState, o = t.closeOnLoad, a = t.config,
                    l = t.processWithCloudimage, s = t.uploadCloudimageImage, c = t.imageMime, u = t.operations,
                    f = t.initialZoom, p = t.logoImage, d = t.watermark, h = t.operationsOriginal, m = a.filerobot,
                    g = void 0 === m ? {} : m, b = e.props.src.split("?")[0],
                    y = cr(1 !== f ? "scaleflex-image-edit-box-original" : "scaleflex-image-edit-box");
                d && p && d.applyByDefault && e.watermarkImageToDataURL(y, p, d);
                var v = "//".concat(g.container, ".api.airstore.io/v1/"),
                    _ = (g.uploadParams || {}).dir || "image-editor", w = br(e), x = e.state.imageName;
                if (l) {
                    var C = (1 !== f ? h : u).filter((function (e) {
                        var t = e.operation;
                        return Jn.includes(t)
                    })), E = e.generateCloudimageURL(C, b.replace(/https?:\/\/scaleflex.ultrafast.io\//, ""));
                    if (s) {
                        var k = new XMLHttpRequest;
                        k.addEventListener("load", e.onFileLoad), k.open("POST", [v, "upload?dir=".concat(_)].join("")), k.setRequestHeader("X-Airstore-Secret-Key", g.uploadKey), k.setRequestHeader("Content-Type", "application/json"), k.send(JSON.stringify({files_urls: [E]}))
                    } else i({isShowSpinner: !1, isHideCanvas: !1}), n(E, {url_permalink: E, url_public: E}), o && r()
                } else {
                    var O = Vn(y.toDataURL(c).split(";")[1].split(",")[1], c, null),
                        T = x.replace(/-version-.{6}/g, "").split("."), R = T.length, S = "";
                    S = R <= 1 ? "".concat(T.join("."), "-version-").concat((ar()() || "").slice(0, 6)) : [T.slice(0, R - 1).join("."), "-version-", (ar()() || "").slice(0, 6), ".", T[R - 1]].join("");
                    var A = new FormData, j = new XMLHttpRequest;
                    j.addEventListener("load", w.onFileLoad), A.append("files[]", O, S), j.open("POST", [v, "upload?dir=".concat(_)].join("")), j.setRequestHeader("X-Airstore-Secret-Key", g.uploadKey), j.send(A)
                }
            })), vr(br(e), "downloadImage", (function (t) {
                // var n = e.props, r = n.initialZoom, i = n.logoImage, o = n.watermark,
                //     a = cr(1 !== r ? "scaleflex-image-edit-box-original" : "scaleflex-image-edit-box");
                // o && i && o.applyByDefault && e.watermarkImageToDataURL(a, i, o);
                // var l, s = e.props.imageMime, c = e.state.imageName, u = document.createElement("a");
                // u.download = c, u.href = a.toDataURL(s, .8),
                // u.fireEvent && u.fireEvent("onclick"),
                t && t()
            })), vr(br(e), "onFileLoad", (function (t) {
                var n = e.props, r = n.onComplete, i = n.onClose, o = n.updateState, a = n.closeOnLoad,
                    l = t.srcElement, s = (void 0 === l ? {} : l).response, c = void 0 === s ? "{}" : s,
                    u = JSON.parse(c) || {};
                if ("success" === u.status) {
                    var f = u.file, p = void 0 === f ? {} : f;
                    if (!p.url_public) return;
                    o({isShowSpinner: !1, isHideCanvas: !1}), r(p.url_public, p), a && i()
                } else o({isShowSpinner: !1, isHideCanvas: !1}), alert(u), a && i()
            })), vr(br(e), "generateCloudimageURL", (function (t, n) {
                var r = e.props.config.cloudimage, i = (void 0 === r ? {} : r).token + ".cloudimg.io/v7/",
                    o = e.isOperationExist(t, "crop"), a = e.isOperationExist(t, "resize"),
                    l = e.isOperationExist(t, "rotate"), s = o || a || l, c = "", u = "", f = "";
                return o && (c = e.getCropArguments(o.props)), a && (u = (c ? "&" : "") + e.getResizeArguments(a.props)), l && (f = (c || u ? "&" : "") + e.getOrientationArguments(l.props)), "https://" + i + n + (s ? "?" : "") + c + u + f
            })), vr(br(e), "initFiltersOrEffects", (function () {
            })), vr(br(e), "applyFilterOrEffect", (function (t) {
                var n = e.props, r = n.updateState, i = n.initialZoom;
                e.props[t] && r({isHideCanvas: !0, isShowSpinner: !0}, (function () {
                    1 !== i ? (e.CamanInstanceOriginal.revert(!1), e.CamanInstanceOriginal[lr(e.props[t])](), e.CamanInstanceOriginal.render((function () {
                        r(vr({}, t, null), (function () {
                            e.makeCanvasSnapshot({operation: t})
                        }))
                    }))) : r(vr({}, t, null), (function () {
                        e.makeCanvasSnapshot({operation: t})
                    }))
                }))
            })), vr(br(e), "applyAdjust", (function () {
                var t = e.props, n = t.updateState, r = t.initialZoom, i = t.adjust, o = i.brightness, a = i.contrast,
                    l = i.saturation, s = i.exposure, c = {brightness: 0, contrast: 0, saturation: 0, exposure: 0};
                n({isHideCanvas: !0, isShowSpinner: !0}, (function () {
                    1 !== r ? (e.CamanInstanceOriginal.revert(!1), "0" !== o.toString() && e.CamanInstanceOriginal.brightness(parseInt(o || "0")), "0" !== a.toString() && e.CamanInstanceOriginal.contrast(parseInt(a || "0")), "0" !== l.toString() && e.CamanInstanceOriginal.saturation(parseInt(l || "0")), "0" !== s.toString() && e.CamanInstanceOriginal.exposure(parseInt(s || "0")), e.CamanInstanceOriginal.render((function () {
                        n({adjust: dr({}, c)}, (function () {
                            e.makeCanvasSnapshot({operation: "adjust"})
                        }))
                    }))) : n({adjust: dr({}, c)}, (function () {
                        e.makeCanvasSnapshot({operation: "adjust"})
                    }))
                }))
            })), vr(br(e), "initOrientation", (function () {
                var t = e.props, n = t.config, r = t.redoOperation, i = t.operations, o = t.operationsZoomed,
                    a = 1 !== t.initialZoom ? o : i;
                if (n.processWithCloudimage && a.length >= 1) {
                    var l = a.findIndex((function (e) {
                        return "rotate" === e.operation
                    }));
                    l > -1 && r(l - 1, (function () {
                    }), !1)
                }
            })), vr(br(e), "onRotate", (function () {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                    n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                    r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3], o = e.props, a = o.initialZoom,
                    l = o.rotate, s = o.updateState, c = l + t;
                s({
                    isHideCanvas: !0,
                    isShowSpinner: !0,
                    rotate: c,
                    correctionDegree: n,
                    flipX: r,
                    flipY: i
                }, (function () {
                    1 !== a ? (e.CamanInstanceZoomed.reset(), r && e.CamanInstanceZoomed.flip("x"), i && e.CamanInstanceZoomed.flip("y"), (c || n) && e.CamanInstanceZoomed.rotate((c || 0) + (n || 0)), e.CamanInstanceZoomed.render((function () {
                        s({isHideCanvas: !1, isShowSpinner: !1})
                    }))) : (e.CamanInstance.reset(), r && e.CamanInstance.flip("x"), i && e.CamanInstance.flip("y"), (c || n) && e.CamanInstance.rotate((c || 0) + (n || 0)), e.CamanInstance.render((function () {
                        s({isHideCanvas: !1, isShowSpinner: !1})
                    })))
                }))
            })), vr(br(e), "applyOrientation", (function () {
                var t = e.props, n = t.updateState, r = t.initialZoom, i = t.rotate, o = t.correctionDegree,
                    a = t.flipX, l = t.flipY;
                n({isHideCanvas: !0, isShowSpinner: !0}, (function () {
                    var t = (i || 0) + (o || 0);
                    1 !== r ? (e.CamanInstanceOriginal.reset(), a && e.CamanInstanceOriginal.flip("x"), l && e.CamanInstanceOriginal.flip("y"), (i || o) && e.CamanInstanceOriginal.rotate(t), e.CamanInstanceOriginal.render((function () {
                        n({rotate: 0, flipX: !1, flipY: !1, correctionDegree: 0}, (function () {
                            e.makeCanvasSnapshot({operation: "rotate", props: {rotate: t}})
                        }))
                    }))) : n({rotate: 0, flipX: !1, flipY: !1, correctionDegree: 0}, (function () {
                        e.makeCanvasSnapshot({operation: "rotate", props: {rotate: t}})
                    }))
                }))
            })), vr(br(e), "getOrientationArguments", (function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.rotate;
                switch (t) {
                    case 90:
                        return "r=270";
                    case-90:
                        return "r=90";
                    default:
                        return "r=".concat(t)
                }
            })), vr(br(e), "initCrop", (function () {
                var t = e.props, n = t.config, r = t.redoOperation, i = t.operations, o = t.operationsZoomed,
                    a = 1 !== t.initialZoom ? o : i;
                if (n.processWithCloudimage && a.length >= 1) {
                    var l = a.findIndex((function (e) {
                        return "crop" === e.operation
                    }));
                    l > -1 && r(l - 1, e.onInitCrop, !1)
                } else e.onInitCrop()
            })), vr(br(e), "onInitCrop", (function () {
                var t = e.props.updateState;
                t({isHideCanvas: !0, isShowSpinner: !0}, (function () {
                    var n = cr(), r = n.getBoundingClientRect(), i = n.width / r.width;
                    e.cropper = new ir.a(n, {
                        viewMode: 1,
                        modal: !1,
                        background: !1,
                        rotatable: !1,
                        scalable: !1,
                        zoomable: !1,
                        movable: !1,
                        crop: function (t) {
                            e.props.updateState({cropDetails: t.detail})
                        }
                    }), window.scaleflexPlugins = window.scaleflexPlugins || {}, window.scaleflexPlugins.zoom = i, window.scaleflexPlugins.cropperjs = e.cropper, t({
                        isHideCanvas: !1,
                        isShowSpinner: !1
                    })
                }))
            })), vr(br(e), "applyCrop", (function () {
                var t = e.props, n = t.initialZoom, r = t.updateState, i = t.cropDetails, o = i.width, a = i.height,
                    l = i.x, s = i.y;
                r({isShowSpinner: !0}, (function () {
                    var t, r, i = null;
                    (e.destroyCrop(), 1 !== n) ? (i = [o, a, l, s].map((function (e) {
                        return e * n
                    })), e.CamanInstanceZoomed.crop(o, a, l, s), (t = e.CamanInstanceOriginal).crop.apply(t, fr(i))) : (i = [o, a, l, s], (r = e.CamanInstance).crop.apply(r, fr(i)));
                    e.makeCanvasSnapshot({operation: "crop", props: {width: i[0], height: i[1], x: i[2], y: i[3]}})
                }))
            })), vr(br(e), "makeCanvasSnapshot", (function (t) {
                var n = e.props, r = n.updateState, i = n.initialZoom, o = n.operationsZoomed, a = n.currentOperation,
                    l = n.operationsOriginal, s = n.operations;
                if (1 !== i) {
                    var c = o.indexOf(a) + 1;
                    e.CamanInstanceOriginal.render((function () {
                        var n = e.replaceWithNewCanvas("scaleflex-image-edit-box-original"),
                            i = dr({}, t, {canvas: e.cloneCanvas(cr("scaleflex-image-edit-box-original"))});
                        e.CamanInstanceOriginal = new window.Caman(n, (function () {
                            r({
                                isHideCanvasOriginal: !1,
                                isShowSpinnerOriginal: !1,
                                operationsOriginal: [].concat(fr(l.slice(0, c)), [i])
                            })
                        }))
                    })), e.CamanInstanceZoomed.render((function () {
                        var n = e.replaceWithNewCanvas("scaleflex-image-edit-box"),
                            i = dr({}, t, {canvas: e.cloneCanvas(cr("scaleflex-image-edit-box"))});
                        e.CamanInstanceZoomed = new window.Caman(n, (function () {
                            r({
                                isHideCanvas: !1,
                                isShowSpinner: !1,
                                operationsZoomed: [].concat(fr(o.slice(0, c)), [i]),
                                currentOperation: i
                            })
                        }))
                    }))
                } else {
                    var u = s.indexOf(a) + 1;
                    e.CamanInstance.render((function () {
                        var n = e.replaceWithNewCanvas("scaleflex-image-edit-box"),
                            i = dr({}, t, {canvas: e.cloneCanvas(cr("scaleflex-image-edit-box"))});
                        e.CamanInstance = new window.Caman(n, (function () {
                            r({
                                isHideCanvas: !1,
                                isShowSpinner: !1,
                                operations: [].concat(fr(s.slice(0, u)), [i]),
                                currentOperation: i
                            })
                        }))
                    }))
                }
            })), vr(br(e), "destroyCrop", (function () {
                e.cropper.destroy()
            })), vr(br(e), "getCropArguments", (function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.width, n = e.height,
                    r = e.x, i = e.y;
                return "tl_px=".concat(r, ",").concat(i, "&br_px=").concat(r + t, ",").concat(i + n)
            })), vr(br(e), "initResize", (function () {
                var t = e.props, n = t.initialZoom, r = t.updateState,
                    i = cr(1 !== n ? "scaleflex-image-edit-box-original" : "scaleflex-image-edit-box");
                r({canvasDimensions: {width: i.width, height: i.height, ratio: i.width / i.height}}, (function () {
                }))
            })), vr(br(e), "applyResize", (function () {
                var t = e.props, n = t.initialZoom, r = t.canvasDimensions, i = t.updateState, o = t.handleSave,
                    a = t.operations, l = t.operationsOriginal;
                i({
                    isHideCanvas: !0,
                    isShowSpinner: !0,
                    operationsOriginal: [].concat(fr(l), [{operation: "resize", props: r}]),
                    operations: [].concat(fr(a), [{operation: "resize", props: r}])
                }, (function () {
                    // 1 !== n ? (e.CamanInstanceOriginal.resize(r), e.CamanInstanceOriginal.render((function () {
                    //     o()
                    // }))) : (e.CamanInstance.resize(r), e.CamanInstance.render((function () {
                    //     o()
                    // })))

                    1 !== n ? e.CamanInstanceOriginal.resize(r) : e.CamanInstance.resize(r);
                    e.makeCanvasSnapshot({operation: "crop", props: {width: i[0], height: i[1], x: i[2], y: i[3]}})
                }))
            })), vr(br(e), "getResizeArguments", (function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.width, n = e.height;
                return "w=".concat(t, "&h=").concat(n)
            })), vr(br(e), "initAdjust", (function () {
            })), vr(br(e), "onAdjust", (function (t, n) {
                var r, i = e.props, o = i.updateState, a = i.adjust;
                o({adjust: dr({}, a, (r = {}, vr(r, t, n), vr(r, "isHideCanvas", !0), vr(r, "isShowSpinner", !0), r))}, (function () {
                    e.applyCorrections((function () {
                        o({isHideCanvas: !1, isShowSpinner: !1})
                    }))
                }))
            })), vr(br(e), "pushOperation", (function (e, t, n) {
                var r = e.findIndex((function (e) {
                    return e === n
                })), i = e.length;
                i && r !== e[i] && e.splice(r + 1, i), e.push(t)
            })), vr(br(e), "applyOperations", (function (t, n) {
                var r = e.props, i = r.initialZoom, o = r.operations, a = r.operationsZoomed, l = r.operationsOriginal,
                    s = r.canvasZoomed, c = r.canvasOriginal, u = r.updateState;
                if (1 !== i) {
                    var f = -1 !== t ? a[t] : {canvas: e.cloneCanvas(s)},
                        p = e.replaceCanvas(f.canvas, "scaleflex-image-edit-box");
                    e.CamanInstanceZoomed = new window.Caman(p, (function () {
                        u(dr({}, _r, {currentOperation: f}), (function () {
                            n && n()
                        }))
                    }));
                    var d = -1 !== t ? l[t] : {canvas: e.cloneCanvas(c)},
                        h = e.replaceCanvas(d.canvas, "scaleflex-image-edit-box-original");
                    e.CamanInstanceOriginal = new window.Caman(h, (function () {
                    }))
                } else {
                    var m = -1 !== t ? o[t] : {canvas: e.cloneCanvas(c)},
                        g = e.replaceCanvas(m.canvas, "scaleflex-image-edit-box");
                    e.CamanInstance = new window.Caman(g, (function () {
                        u(dr({}, _r, {currentOperation: m}), (function () {
                            n && n()
                        }))
                    }))
                }
            })), vr(br(e), "isOperationExist", (function (e, t) {
                return e.find((function (e) {
                    return e.operation === t
                }))
            })), vr(br(e), "getOperationQuery", (function (e, t) {
                return e ? "crop_px" : t ? "width" : "cdn"
            })), vr(br(e), "destroyAll", (function () {
            })), vr(br(e), "resetAll", (function (t) {
                var n = e.props.activeTab;
                n ? e.cancelLastOperation(n, (function () {
                    e.applyOperations(-1, t)
                })) : e.applyOperations(-1, t)
            })), vr(br(e), "applyCorrections", (function () {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : function () {
                    }, n = e.props, r = n.initialZoom, i = n.effect, o = n.filter, a = n.adjust, l = a.brightness,
                    s = a.contrast, c = a.saturation, u = a.exposure;
                1 !== r ? (e.CamanInstanceZoomed.revert(!1), i && e.CamanInstanceZoomed[lr(i)](), o && e.CamanInstanceZoomed[lr(o)](), "0" !== l.toString() && e.CamanInstanceZoomed.brightness(parseInt(l || "0")), "0" !== s.toString() && e.CamanInstanceZoomed.contrast(parseInt(s || "0")), "0" !== c.toString() && e.CamanInstanceZoomed.saturation(parseInt(c || "0")), "0" !== u.toString() && e.CamanInstanceZoomed.exposure(parseInt(u || "0")), e.CamanInstanceZoomed.render(t)) : (e.CamanInstance.revert(!1), i && e.CamanInstance[lr(i)](), o && e.CamanInstance[lr(o)](), "0" !== l.toString() && e.CamanInstance.brightness(parseInt(l || "0")), "0" !== s.toString() && e.CamanInstance.contrast(parseInt(s || "0")), "0" !== c.toString() && e.CamanInstance.saturation(parseInt(c || "0")), "0" !== u.toString() && e.CamanInstance.exposure(parseInt(u || "0")), e.CamanInstance.render(t))
            })), vr(br(e), "cancelLastOperation", (function (t) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function () {
                }, r = e.props.initialZoom;
                "crop" === t && e.destroyCrop(), "watermark" === t && e.cancelWatermark(), 1 !== r ? (e.CamanInstanceZoomed.reset(), e.CamanInstanceOriginal.reset(), e.CamanInstanceOriginal.render(), e.CamanInstanceZoomed.render((function () {
                    n && n()
                }))) : (e.CamanInstance.reset(), e.CamanInstance.render((function () {
                    n && n()
                })))
            })), vr(br(e), "initWatermark", (function () {
                e.setState({tempWatermark: dr({}, e.props.watermark)}), e.props.watermark.applyByDefault || e.props.updateState({watermark: dr({}, e.props.watermark, {applyByDefault: !0})})
            })), vr(br(e), "applyWatermark", (function () {
                e.setState({tempWatermark: null})
            })), vr(br(e), "cancelWatermark", (function () {
                var t = null;
                e.props.tempWatermark && e.props.tempWatermark.url && ((t = new Image).setAttribute("crossOrigin", "Anonymous"), t.src = e.props.tempWatermark.url + "?" + (new Date).getTime()), e.props.updateState({
                    watermark: e.state.tempWatermark,
                    logoImage: t
                })
            })), vr(br(e), "applyChanges", (function (t) {
                switch (t) {
                    case"adjust":
                        e.applyAdjust();
                        break;
                    case"effects":
                        e.applyFilterOrEffect("effect");
                        break;
                    case"filters":
                        e.applyFilterOrEffect("filter");
                        break;
                    case"crop":
                        e.applyCrop();
                        break;
                    case"resize":
                        e.applyResize();
                        break;
                    case"rotate":
                        e.applyOrientation();
                        break;
                    case"watermark":
                        e.applyWatermark()
                }
            })), vr(br(e), "changeTab", (function (t) {
                switch (t) {
                    case"effects":
                    case"filters":
                        e.initFiltersOrEffects();
                        break;
                    case"adjust":
                        e.initAdjust();
                        break;
                    case"crop":
                        e.initCrop();
                        break;
                    case"resize":
                        e.initResize();
                        break;
                    case"rotate":
                        e.initOrientation();
                        break;
                    case"watermark":
                        e.initWatermark();
                        break;
                    default:
                        e.destroyAll()
                }
            })), vr(br(e), "destroyMode", (function (t) {
                switch (t) {
                    case"effects":
                    case"filters":
                    case"adjust":
                        break;
                    case"crop":
                        e.destroyCrop()
                }
            })), e.state = {canvas: null}, e.CamanInstance = null, e.CamanInstanceOriginal = null, e.CamanInstanceZoomed = null, e
        }

        var n, r, i;
        return function (e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && yr(e, t)
        }(t, e), n = t, (r = [{
            key: "shouldComponentUpdate", value: function () {
                return !1
            }
        }, {
            key: "componentWillReceiveProps", value: function (e) {
                e.activeTab !== this.props.activeTab && (this.props.activeTab && this.destroyMode(this.props.activeTab), this.changeTab(e.activeTab)), this.setState(dr({}, e))
            }
        }, {
            key: "componentDidMount", value: function () {
                var e = this, t = this, n = this.props, r = n.updateState, i = n.img, o = n.isPreResize,
                    a = n.preCanvasDimensions;
                r({
                    isShowSpinner: !0,
                    applyChanges: this.applyChanges,
                    applyOperations: this.applyOperations,
                    resetAll: this.resetAll,
                    onRotate: this.onRotate,
                    onAdjust: this.onAdjust,
                    downloadImage: this.downloadImage,
                    saveImage: this.saveImage,
                    applyCorrections: this.applyCorrections,
                    restoreAll: this.restoreAll,
                    cancelLastOperation: this.cancelLastOperation
                }, (function () {
                    var n = cr("scaleflex-image-edit-box"), l = n.getContext("2d");
                    n.width = i.width, n.height = i.height, l.drawImage(i, 0, 0, i.width, i.height);
                    var s = {height: i.height, width: i.width, ratio: i.width / i.height};
                    r({original: s, canvasDimensions: s}), o && a ? new window.Caman(n, (function () {
                        this.resize({width: a.width, height: a.height}), this.render((function () {
                            var e = t.replaceWithNewCanvas("scaleflex-image-edit-box"),
                                n = {height: e.height, width: e.width, ratio: e.width / e.height};
                            r({
                                original: n,
                                canvasDimensions: dr({}, n),
                                canvasOriginal: t.cloneCanvas(e)
                            }, (function () {
                                t.initializeCanvases(e)
                            }))
                        }))
                    })) : e.initializeCanvases(i)
                }))
            }
        }, {
            key: "render", value: function () {
                return o.a.createElement(o.a.Fragment, null, o.a.createElement(Te, {id: "scaleflex-image-edit-box-original"}), o.a.createElement(Te, {id: "scaleflex-image-edit-box"}))
            }
        }]) && mr(n.prototype, r), i && mr(n, i), t
    }(i.Component);
    "undefined" != typeof __REACT_HOT_LOADER__ && (__REACT_HOT_LOADER__.register(_r, "INITIAL_PARAMS", "/Users/dmitry/scaleflex/plugins/filerobot-image-editor/projects/react/components/Preview/ImageManipulator.js"), __REACT_HOT_LOADER__.register(wr, "ImageManipulator", "/Users/dmitry/scaleflex/plugins/filerobot-image-editor/projects/react/components/Preview/ImageManipulator.js"));

    function xr(e) {
        return (xr = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function Cr(e, t) {
        return function (e) {
            if (Array.isArray(e)) return e
        }(e) || function (e, t) {
            if (!(Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e))) return;
            var n = [], r = !0, i = !1, o = void 0;
            try {
                for (var a, l = e[Symbol.iterator](); !(r = (a = l.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0) ;
            } catch (e) {
                i = !0, o = e
            } finally {
                try {
                    r || null == l.return || l.return()
                } finally {
                    if (i) throw o
                }
            }
            return n
        }(e, t) || function () {
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }()
    }

    function Er(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function kr(e, t) {
        return !t || "object" !== xr(t) && "function" != typeof t ? function (e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }(e) : t
    }

    function Or(e) {
        return (Or = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function Tr(e, t) {
        return (Tr = Object.setPrototypeOf || function (e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    var Rr = function (e) {
        function t() {
            return function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, t), kr(this, Or(t).apply(this, arguments))
        }

        var n, r, i;
        return function (e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && Tr(e, t)
        }(t, e), n = t, (r = [{
            key: "render", value: function () {
                var e = this.props, t = e.activeTab, n = e.isHideCanvas, r = e.watermark, i = void 0 === r ? {} : r,
                    a = e.logoImage, l = i.opacity, s = i.url, c = i.applyByDefault,
                    u = window.document.getElementById("scaleflex-image-edit-box"),
                    f = u && u.getBoundingClientRect() || {},
                    p = Cr(u && a && sr(i, {width: f.width, height: f.height}, a) || [], 4), d = p[0], h = p[1],
                    m = p[2], g = p[3];
                return o.a.createElement(ke, {
                    id: "preview-img-box",
                    hideCanvas: "crop" === t || n,
                    isShowWatermark: c
                }, o.a.createElement(wr, this.props), c && o.a.createElement(Oe, {
                    opacity: l,
                    url: s,
                    width: f.width,
                    height: f.height,
                    wx: d,
                    wy: h,
                    ww: m,
                    wh: g
                }))
            }
        }]) && Er(n.prototype, r), i && Er(n, i), t
    }(i.Component), Sr = Rr;
    "undefined" != typeof __REACT_HOT_LOADER__ && __REACT_HOT_LOADER__.register(Rr, "default", "/Users/dmitry/scaleflex/plugins/filerobot-image-editor/projects/react/components/Preview/Preview.js");

    function Ar(e) {
        return (Ar = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function jr(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function Pr(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? jr(n, !0).forEach((function (t) {
                Br(e, t, n[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : jr(n).forEach((function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }))
        }
        return e
    }

    function Dr(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function Lr(e) {
        return (Lr = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function Ir(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function Mr(e, t) {
        return (Mr = Object.setPrototypeOf || function (e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function Br(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    var zr = function (e) {
        function t() {
            var e, n, r, i;
            !function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, t);
            for (var o = arguments.length, a = new Array(o), l = 0; l < o; l++) a[l] = arguments[l];
            return r = this, i = (e = Lr(t)).call.apply(e, [this].concat(a)), n = !i || "object" !== Ar(i) && "function" != typeof i ? Ir(r) : i, Br(Ir(n), "state", {isBlockRatio: !1}), Br(Ir(n), "changeWidth", (function (e) {
                var t = n.state.isBlockRatio, r = n.props.canvasDimensions, i = e.target.value, o = r.height;
                t || (o = i && i / r.ratio || 1), n.props.updateState({
                    canvasDimensions: Pr({}, r, {
                        width: i,
                        height: o
                    })
                })
            })), Br(Ir(n), "changeHeight", (function (e) {
                var t = n.state.isBlockRatio, r = n.props.canvasDimensions, i = e.target.value, o = r.width;
                t || (o = i && i * r.ratio || 1), n.props.updateState({
                    canvasDimensions: Pr({}, r, {
                        width: o,
                        height: i
                    })
                })
            })), Br(Ir(n), "toggleRatio", (function () {
                n.setState({isBlockRatio: !n.state.isBlockRatio})
            })), n
        }

        var n, r, i;
        return function (e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && Mr(e, t)
        }(t, e), n = t, (r = [{
            key: "componentDidMount", value: function () {
                var e = this.props, t = e.operations, n = e.processWithCloudimage, r = e.updateState,
                    i = e.forceApplyOperations, o = t.findIndex((function (e) {
                        return "resize" === e.stack[0].name
                    }));
                o > -1 && n && (t.splice(o, 1), r({operations: t}), i(t, "resize"))
            }
        }, {
            key: "render", value: function () {
                var e = this, t = this.state.isBlockRatio, n = this.props, r = n.canvasDimensions,
                    i = n.processWithCloudimage, a = n.onPreResize, l = n.t;
                return o.a.createElement(Ee, {id: "preview-img-box"}, o.a.createElement(Ht, null, l["warning.too_big_resolution"]), o.a.createElement(Ft, null, o.a.createElement("h4", null, l["pre_resize.title"]), o.a.createElement(Bt, null, o.a.createElement(zt, null, o.a.createElement(mt, null, o.a.createElement(gt, null, l["common.width"]), o.a.createElement(bt, {
                    fullSize: !0,
                    value: parseInt(r.width, 10) || "",
                    onChange: this.changeWidth
                })), o.a.createElement(yt, null, o.a.createElement(vt, {
                    active: !t,
                    style: i ? {cursor: "not-allowed"} : {},
                    link: !0,
                    onClick: function () {
                        !i && e.toggleRatio()
                    }
                }, o.a.createElement(_t, {
                    active: !t,
                    style: i ? {cursor: "not-allowed"} : {}
                }))), o.a.createElement(mt, null, o.a.createElement(gt, null, l["common.height"]), o.a.createElement(bt, {
                    fullSize: !0,
                    value: parseInt(r.height, 10) || "",
                    onChange: this.changeHeight
                })))), o.a.createElement(Ut, null, o.a.createElement("p", null, o.a.createElement(Se, {
                    themeColor: !0,
                    themeBtn: !0,
                    onClick: function () {
                        a("keep")
                    }
                }, l["pre_resize.keep_original_resolution"])), o.a.createElement("p", null, o.a.createElement(Se, {
                    themeColor: !0,
                    success: !0,
                    onClick: function () {
                        a("resize")
                    }
                }, l["pre_resize.resize_n_continue"])))))
            }
        }]) && Dr(n.prototype, r), i && Dr(n, i), t
    }(i.Component), Ur = zr;
    "undefined" != typeof __REACT_HOT_LOADER__ && __REACT_HOT_LOADER__.register(zr, "default", "/Users/dmitry/scaleflex/plugins/filerobot-image-editor/projects/react/components/PreResize/PreResize.js");

    function Hr(e) {
        return (Hr = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function Fr(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function Nr(e, t) {
        return !t || "object" !== Hr(t) && "function" != typeof t ? function (e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }(e) : t
    }

    function Wr(e) {
        return (Wr = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function Yr(e, t) {
        return (Yr = Object.setPrototypeOf || function (e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    var qr = function (e) {
        function t() {
            return function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, t), Nr(this, Wr(t).apply(this, arguments))
        }

        var n, r, i;
        return function (e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && Yr(e, t)
        }(t, e), n = t, (r = [{
            key: "render", value: function () {
                var e = this.props, t = e.name, n = e.activeTab, r = e.updateState, i = e.t,
                    a = "rotate" === t ? "orientation" : t;
                return o.a.createElement(D, {
                    active: n === t, onClick: function () {
                        return r({activeTab: t})
                    }
                }, o.a.createElement(L, {name: t}), o.a.createElement(I, null, i["toolbar.".concat(a)]))
            }
        }]) && Fr(n.prototype, r), i && Fr(n, i), t
    }(i.Component), $r = qr;
    "undefined" != typeof __REACT_HOT_LOADER__ && __REACT_HOT_LOADER__.register(qr, "default", "/Users/dmitry/scaleflex/plugins/filerobot-image-editor/projects/react/components/Toolbar/Tool.js");

    function Vr(e) {
        return (Vr = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function Xr(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function Kr(e, t) {
        return !t || "object" !== Vr(t) && "function" != typeof t ? function (e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }(e) : t
    }

    function Zr(e) {
        return (Zr = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function Qr(e, t) {
        return (Qr = Object.setPrototypeOf || function (e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    var Gr = function (e) {
        function t() {
            return function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, t), Kr(this, Zr(t).apply(this, arguments))
        }

        var n, r, i;
        return function (e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && Qr(e, t)
        }(t, e), n = t, (r = [{
            key: "render", value: function () {
                var e = this.props, t = e.active, n = e.name, r = e.onApplyEffects;
                return o.a.createElement(B, {
                    active: t === n,
                    onClick: r.bind(null, n)
                }, o.a.createElement(z, {src: Xn(n)}), o.a.createElement(U, null, $n(n)))
            }
        }]) && Xr(n.prototype, r), i && Xr(n, i), t
    }(i.Component), Jr = Gr;
    "undefined" != typeof __REACT_HOT_LOADER__ && __REACT_HOT_LOADER__.register(Gr, "default", "/Users/dmitry/scaleflex/plugins/filerobot-image-editor/projects/react/components/Toolbar/Effect.js");

    function ei(e) {
        return (ei = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function ti(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function ni(e, t) {
        return !t || "object" !== ei(t) && "function" != typeof t ? function (e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }(e) : t
    }

    function ri(e) {
        return (ri = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function ii(e, t) {
        return (ii = Object.setPrototypeOf || function (e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    var oi = function (e) {
        function t() {
            return function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, t), ni(this, ri(t).apply(this, arguments))
        }

        var n, r, i;
        return function (e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && ii(e, t)
        }(t, e), n = t, (r = [{
            key: "render", value: function () {
                var e = this.props, t = e.onApplyEffects, n = e.effect;
                return o.a.createElement(M, null, Qn.map((function (e) {
                    return o.a.createElement(Jr, {active: n, key: e, name: e, onApplyEffects: t})
                })))
            }
        }]) && ti(n.prototype, r), i && ti(n, i), t
    }(i.Component), ai = oi;
    "undefined" != typeof __REACT_HOT_LOADER__ && __REACT_HOT_LOADER__.register(oi, "default", "/Users/dmitry/scaleflex/plugins/filerobot-image-editor/projects/react/components/Toolbar/Effects.js");

    function li(e) {
        return (li = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function si(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function ci(e, t) {
        return !t || "object" !== li(t) && "function" != typeof t ? function (e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }(e) : t
    }

    function ui(e) {
        return (ui = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function fi(e, t) {
        return (fi = Object.setPrototypeOf || function (e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    var pi = function (e) {
        function t() {
            return function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, t), ci(this, ui(t).apply(this, arguments))
        }

        var n, r, i;
        return function (e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && fi(e, t)
        }(t, e), n = t, (r = [{
            key: "render", value: function () {
                var e = this.props, t = e.active, n = e.name, r = e.onApplyFilters;
                return o.a.createElement(B, {
                    active: t === n,
                    onClick: r.bind(null, n)
                }, o.a.createElement(z, {src: Xn(n)}), o.a.createElement(U, null, $n(n)))
            }
        }]) && si(n.prototype, r), i && si(n, i), t
    }(i.Component), di = pi;
    "undefined" != typeof __REACT_HOT_LOADER__ && __REACT_HOT_LOADER__.register(pi, "default", "/Users/dmitry/scaleflex/plugins/filerobot-image-editor/projects/react/components/Toolbar/Filter.js");

    function hi(e) {
        return (hi = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function mi(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function gi(e, t) {
        return !t || "object" !== hi(t) && "function" != typeof t ? function (e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }(e) : t
    }

    function bi(e) {
        return (bi = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function yi(e, t) {
        return (yi = Object.setPrototypeOf || function (e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    var vi = function (e) {
        function t() {
            return function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, t), gi(this, bi(t).apply(this, arguments))
        }

        var n, r, i;
        return function (e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && yi(e, t)
        }(t, e), n = t, (r = [{
            key: "render", value: function () {
                var e = this.props, t = e.onApplyFilters, n = e.filter;
                return o.a.createElement(M, null, Gn.map((function (e) {
                    return o.a.createElement(di, {active: n, key: e, name: e, onApplyFilters: t})
                })))
            }
        }]) && mi(n.prototype, r), i && mi(n, i), t
    }(i.Component), _i = vi;
    "undefined" != typeof __REACT_HOT_LOADER__ && __REACT_HOT_LOADER__.register(vi, "default", "/Users/dmitry/scaleflex/plugins/filerobot-image-editor/projects/react/components/Toolbar/Filters.js");

    function wi(e) {
        return (wi = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function xi(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function Ci(e) {
        return (Ci = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function Ei(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function ki(e, t) {
        return (ki = Object.setPrototypeOf || function (e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function Oi(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    var Ti = function (e) {
        function t() {
            var e, n, r, i;
            !function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, t);
            for (var o = arguments.length, a = new Array(o), l = 0; l < o; l++) a[l] = arguments[l];
            return r = this, i = (e = Ci(t)).call.apply(e, [this].concat(a)), n = !i || "object" !== wi(i) && "function" != typeof i ? Ei(r) : i, Oi(Ei(n), "state", {
                aspectRatio: NaN,
                activeRatio: "custom"
            }), Oi(Ei(n), "changeWidth", (function (e) {
                var t = n.props.initialZoom;
                window.scaleflexPlugins.cropperjs.setCropBoxData({width: +e.target.value / t / window.scaleflexPlugins.zoom})
            })), Oi(Ei(n), "changeHeight", (function (e) {
                var t = n.props.initialZoom;
                window.scaleflexPlugins.cropperjs.setCropBoxData({height: +e.target.value / t / window.scaleflexPlugins.zoom})
            })), Oi(Ei(n), "toggleRatio", (function (e) {
                e.preventDefault(), e.stopPropagation();
                var t = n.props.cropDetails, r = t.width, i = t.height, o = n.state.aspectRatio;
                o = o ? NaN : r / i, window.scaleflexPlugins.cropperjs.setAspectRatio(o), window.scaleflexPlugins.cropperjs.setCropBoxData({
                    width: r / window.scaleflexPlugins.zoom,
                    height: i / window.scaleflexPlugins.zoom
                }), n.setState({aspectRatio: o})
            })), Oi(Ei(n), "getCanvasNode", (function () {
                return document.getElementById("preview-img-box")
            })), Oi(Ei(n), "changeRatio", (function (e) {
                var t, r = n.state.aspectRatio, i = n.props.original, o = i.width, a = void 0 === o ? 1 : o,
                    l = i.height, s = void 0 === l ? 1 : l;
                "custom" !== e.name || r ? (t = "original" === e.name ? a / s : e.value, window.scaleflexPlugins.cropperjs.setAspectRatio(t), n.setState({
                    activeRatio: e.name,
                    aspectRatio: t
                })) : n.setState({activeRatio: e.name})
            })), n
        }

        var n, r, i;
        return function (e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && ki(e, t)
        }(t, e), n = t, (r = [{
            key: "componentDidMount", value: function () {
            }
        }, {
            key: "render", value: function () {
                var e = this, t = this.state, n = t.aspectRatio, r = t.activeRatio, i = this.props, a = i.cropDetails,
                    l = i.original, s = i.initialZoom, c = i.t, u = i.config.cropPresets, f = void 0 === u ? [] : u;
                return o.a.createElement(dt, null, o.a.createElement(wt, {active: "custom" === r}, o.a.createElement(mt, null, o.a.createElement(gt, null, c["common.width"]), o.a.createElement(bt, {
                    dark: "custom" === r,
                    fullSize: !0,
                    value: Math.round(a.width * s),
                    onChange: this.changeWidth
                })), o.a.createElement(yt, null, o.a.createElement(vt, {
                    active: n,
                    link: !0,
                    onClick: this.toggleRatio
                }, o.a.createElement(_t, {active: n}))), o.a.createElement(mt, null, o.a.createElement(gt, null, c["common.height"]), o.a.createElement(bt, {
                    dark: "custom" === r,
                    fullSize: !0,
                    value: Math.round(a.height * s),
                    onChange: this.changeHeight
                })), o.a.createElement(ht, null, c["common.custom"])), f.map((function (t) {
                    return o.a.createElement(wt, {
                        active: r === t.name,
                        onClick: e.changeRatio.bind(e, t),
                        key: t.name
                    }, o.a.createElement(xt, null, o.a.createElement(Et, null, o.a.createElement(kt, null), o.a.createElement(Ct, {ratio: t.value || l.width / l.height})), o.a.createElement(Ot, null, "original" === t.name || "square" === t.name ? c["common.".concat(t.name)] : t.name)))
                })))
            }
        }]) && xi(n.prototype, r), i && xi(n, i), t
    }(i.Component), Ri = Ti;
    "undefined" != typeof __REACT_HOT_LOADER__ && __REACT_HOT_LOADER__.register(Ti, "default", "/Users/dmitry/scaleflex/plugins/filerobot-image-editor/projects/react/components/Toolbar/Crop.js");

    function Si(e) {
        return (Si = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function Ai(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function ji(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? Ai(n, !0).forEach((function (t) {
                Mi(e, t, n[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ai(n).forEach((function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }))
        }
        return e
    }

    function Pi(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function Di(e) {
        return (Di = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function Li(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function Ii(e, t) {
        return (Ii = Object.setPrototypeOf || function (e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function Mi(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    var Bi = function (e) {
        function t() {
            var e, n, r, i;
            !function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, t);
            for (var o = arguments.length, a = new Array(o), l = 0; l < o; l++) a[l] = arguments[l];
            return r = this, i = (e = Di(t)).call.apply(e, [this].concat(a)), n = !i || "object" !== Si(i) && "function" != typeof i ? Li(r) : i, Mi(Li(n), "state", {isBlockRatio: !1}), Mi(Li(n), "changeWidth", (function (e) {
                var t = n.state.isBlockRatio, r = n.props.canvasDimensions, i = e.target.value, o = r.height;
                t || (o = i && i / r.ratio || 1), n.props.updateState({
                    canvasDimensions: ji({}, r, {
                        width: i,
                        height: o
                    })
                })
            })), Mi(Li(n), "changeHeight", (function (e) {
                var t = n.state.isBlockRatio, r = n.props.canvasDimensions, i = e.target.value, o = r.width;
                t || (o = i && i * r.ratio || 1), n.props.updateState({
                    canvasDimensions: ji({}, r, {
                        width: o,
                        height: i
                    })
                })
            })), Mi(Li(n), "applyPreset", (function (e) {
                var t = e.width, r = e.height;
                n.props.updateState({canvasDimensions: {ratio: t / r, width: t, height: r}})
            })), Mi(Li(n), "toggleRatio", (function () {
                n.setState({isBlockRatio: !n.state.isBlockRatio})
            })), n
        }

        var n, r, i;
        return function (e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && Ii(e, t)
        }(t, e), n = t, (r = [{
            key: "render", value: function () {
                var e = this, t = this.state.isBlockRatio, n = this.props, r = n.canvasDimensions,
                    i = n.processWithCloudimage, a = n.t, l = n.config.resizePresets, s = void 0 === l ? [] : l;
                return o.a.createElement(Bt, null, o.a.createElement(zt, null, o.a.createElement(mt, null, o.a.createElement(gt, null, a["common.width"]), o.a.createElement(bt, {
                    fullSize: !0,
                    value: parseInt(r.width, 10) || "",
                    onChange: this.changeWidth
                })), o.a.createElement(yt, null, o.a.createElement(vt, {
                    active: !t,
                    style: i ? {cursor: "not-allowed"} : {},
                    link: !0,
                    onClick: function () {
                        !i && e.toggleRatio()
                    }
                }, o.a.createElement(_t, {
                    active: !t,
                    style: i ? {cursor: "not-allowed"} : {}
                }))), o.a.createElement(mt, null, o.a.createElement(gt, null, a["common.height"]), o.a.createElement(bt, {
                    fullSize: !0,
                    value: parseInt(r.height, 10) || "",
                    onChange: this.changeHeight
                }))), o.a.createElement(Nt, null, s.filter((function (e) {
                    return Math.abs(r.width / r.height - e.ratio) < .05
                })).map((function (t) {
                    return o.a.createElement(Wt, {
                        key: t.name, onClick: function () {
                            e.applyPreset(t)
                        }
                    }, o.a.createElement("div", null, t.width, " x ", t.height), o.a.createElement("div", null, t.name))
                }))))
            }
        }]) && Pi(n.prototype, r), i && Pi(n, i), t
    }(i.Component), zi = Bi;
    "undefined" != typeof __REACT_HOT_LOADER__ && __REACT_HOT_LOADER__.register(Bi, "default", "/Users/dmitry/scaleflex/plugins/filerobot-image-editor/projects/react/components/Toolbar/Resize.js");

    function Ui(e, t, n, r) {
        var i, o = !1, a = 0;

        function l() {
            i && clearTimeout(i)
        }

        function s() {
            var s = this, c = Date.now() - a, u = arguments;

            function f() {
                a = Date.now(), n.apply(s, u)
            }

            o || (r && !i && f(), l(), void 0 === r && c > e ? f() : !0 !== t && (i = setTimeout(r ? function () {
                i = void 0
            } : f, void 0 === r ? e - c : e)))
        }

        return "boolean" != typeof t && (r = n, n = t, t = void 0), s.cancel = function () {
            l(), o = !0
        }, s
    }

    function Hi(e, t, n) {
        return void 0 === n ? Ui(e, t, !1) : Ui(e, n, !1 !== t)
    }

    function Fi() {
        var e = function (e, t) {
            t || (t = e.slice(0));
            return Object.freeze(Object.defineProperties(e, {raw: {value: Object.freeze(t)}}))
        }(["\n  position: relative;\n  width: 190px;\n  padding: 25px 5px 20px 5px;\n  \n  label {\n    display: inline-block;\n    width: 100%;\n    text-align: center;\n    padding-top: 20px;\n  }\n  \n  :after {\n    content: '';\n    display: inline-block;\n    position: absolute;\n    background: ", ";\n    height: 5px;\n    width: 2px;\n    top: 45px;\n    left: calc(50% - 1px);\n  }\n\n  /* CHROME */\n  #range {\n    -webkit-appearance: none;\n    display: block;\n    outline: none;\n    background: ", ";\n    height: 6px;\n    width: 180px;\n    border-radius: 5px;\n    margin-bottom: 5px;\n    \n    &::-webkit-slider-thumb {\n      -webkit-appearance: none;\n      width: 18px;\n      height: 18px;\n      border-radius: 50%;\n      background: ", ";\n    }\n  }\n  \n  /* FIREFOX */\n  #range::-moz-range-thumb {\n    border: none;\n    height: 14px;\n    width: 14px;\n    border-radius: 50%;\n    background: ", ";\n    cursor: pointer;\n  }\n  \n  #range::-moz-range-track {\n    width: 100%;\n    height: 3px;\n    cursor: pointer;\n    background: ", ";\n    border-radius: 5px;\n  }\n"]);
        return Fi = function () {
            return e
        }, e
    }

    function Ni(e) {
        return (Ni = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function Wi(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function Yi(e) {
        return (Yi = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function qi(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function $i(e, t) {
        return ($i = Object.setPrototypeOf || function (e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function Vi(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    var Xi = function (e) {
        function t(e) {
            var n, r, i;
            return function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, t), r = this, i = Yi(t).call(this, e), n = !i || "object" !== Ni(i) && "function" != typeof i ? qi(r) : i, Vi(qi(n), "updateWithDebounce", Hi(100, (function (e) {
                n.props.updateRange(e)
            }))), Vi(qi(n), "updateRange", (function (e) {
                var t = e.target.value;
                n.setState({range: t}, (function () {
                    n.updateWithDebounce(t)
                }))
            })), n.state = {range: e.range}, n
        }

        var n, r, i;
        return function (e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && $i(e, t)
        }(t, e), n = t, (r = [{
            key: "render", value: function () {
                var e = this.state.range, t = this.props, n = t.label, r = t.min, i = void 0 === r ? -100 : r,
                    a = t.max, l = void 0 === a ? 100 : a, s = t.step, c = void 0 === s ? 1 : s;
                return o.a.createElement(Qi, {className: "image-editor-range-wrapper"}, o.a.createElement("input", {
                    id: "range",
                    type: "range",
                    value: e,
                    min: i,
                    max: l,
                    step: c,
                    onChange: this.updateRange
                }), o.a.createElement("label", null, n))
            }
        }]) && Wi(n.prototype, r), i && Wi(n, i), t
    }(i.Component), Ki = Xi, Zi = Ki, Qi = Object(a.b)("div").attrs((function () {
        return {className: "image-editor-range"}
    }))(Fi(), (function (e) {
        return e.theme.colors.text
    }), (function (e) {
        return e.theme.colors.primaryBg
    }), (function (e) {
        return e.theme.colors.text
    }), (function (e) {
        return e.theme.colors.text
    }), (function (e) {
        return e.theme.colors.text
    }));
    "undefined" != typeof __REACT_HOT_LOADER__ && (__REACT_HOT_LOADER__.register(Xi, "Range", "/Users/dmitry/scaleflex/plugins/filerobot-image-editor/projects/react/components/Range.js"), __REACT_HOT_LOADER__.register(Qi, "Wrapper", "/Users/dmitry/scaleflex/plugins/filerobot-image-editor/projects/react/components/Range.js"), __REACT_HOT_LOADER__.register(Ki, "default", "/Users/dmitry/scaleflex/plugins/filerobot-image-editor/projects/react/components/Range.js"));

    function Gi(e) {
        return (Gi = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function Ji(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function eo(e) {
        return (eo = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function to(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function no(e, t) {
        return (no = Object.setPrototypeOf || function (e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function ro(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    var io = function (e) {
        function t() {
            var e, n, r, i;
            !function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, t);
            for (var o = arguments.length, a = new Array(o), l = 0; l < o; l++) a[l] = arguments[l];
            return r = this, i = (e = eo(t)).call.apply(e, [this].concat(a)), n = !i || "object" !== Gi(i) && "function" != typeof i ? to(r) : i, ro(to(n), "leftRotate", (function () {
                var e = n.props, t = e.onRotate, r = e.correctionDegree, i = e.flipX, o = e.flipY;
                t(-90, parseInt(r), i, o)
            })), ro(to(n), "rightRotate", (function () {
                var e = n.props, t = e.onRotate, r = e.correctionDegree, i = e.flipX, o = e.flipY;
                t(90, parseInt(r), i, o)
            })), ro(to(n), "updateCorrectionDegree", (function (e) {
                var t = n.props, r = t.flipX, i = t.flipY;
                n.setState({correctionDegree: e}), n.props.onRotate(0, parseFloat(e), r, i)
            })), ro(to(n), "onFlip", (function (e) {
                var t = n.props, r = t.flipX, i = t.flipY, o = t.correctionDegree, a = "x" === e ? !r : r,
                    l = "y" === e ? !i : i;
                n.props.onRotate(0, o, a, l)
            })), n
        }

        var n, r, i;
        return function (e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && no(e, t)
        }(t, e), n = t, (r = [{
            key: "render", value: function () {
                var e = this, t = this.props, n = t.correctionDegree, r = t.t, i = t.config,
                    a = (void 0 === i ? {} : i).processWithCloudimage;
                return o.a.createElement(Zt, null, o.a.createElement(Qt, null, o.a.createElement(Jt, null, o.a.createElement(Qe, {onClick: this.leftRotate}, o.a.createElement(en, {name: "left-rotate"}), " ", o.a.createElement("span", null, r["orientation.rotate_l"])), o.a.createElement(Qe, {onClick: this.rightRotate}, o.a.createElement(en, {name: "right-rotate"}), o.a.createElement("span", null, r["orientation.rotate_r"])), !a && o.a.createElement(o.a.Fragment, null, o.a.createElement(Qe, {
                    onClick: function () {
                        e.onFlip("x")
                    }
                }, o.a.createElement(en, {name: "flip-h"}), o.a.createElement("span", null, r["orientation.flip_h"])), o.a.createElement(Qe, {
                    onClick: function () {
                        e.onFlip("y")
                    }
                }, o.a.createElement(en, {name: "flip-v"}), o.a.createElement("span", null, r["orientation.flip_v"]))), !a && o.a.createElement("div", null, o.a.createElement(Zi, {
                    min: -30,
                    max: 30,
                    step: .5,
                    range: n,
                    updateRange: this.updateCorrectionDegree
                }), o.a.createElement("svg", {
                    viewBox: "-90 -5 180 10",
                    xmlns: "http://www.w3.org/2000/svg",
                    "aria-hidden": "true",
                    focusable: "false"
                }, o.a.createElement("circle", {
                    fill: "currentColor",
                    cx: "-37.15555555555556",
                    cy: "0",
                    r: "0.2",
                    opacity: "0.8"
                }), o.a.createElement("circle", {
                    fill: "currentColor",
                    cx: "-35.2",
                    cy: "0",
                    r: "0.2",
                    opacity: "0.6"
                }), o.a.createElement("circle", {
                    fill: "currentColor",
                    cx: "-33.24444444444445",
                    cy: "0",
                    r: "0.2",
                    opacity: "0.4"
                }), o.a.createElement("circle", {
                    fill: "currentColor",
                    cx: "-31.28888888888889",
                    cy: "0",
                    r: "0.2",
                    opacity: "0.2"
                }), o.a.createElement("circle", {
                    fill: "currentColor",
                    cx: "-29.333333333333336",
                    cy: "0",
                    r: "0.5"
                }), o.a.createElement("text", {
                    fill: "currentColor",
                    x: "-31.583333333333336",
                    y: "3.5"
                }, "-30Â°"), o.a.createElement("circle", {
                    fill: "currentColor",
                    cx: "-27.37777777777778",
                    cy: "0",
                    r: "0.2"
                }), o.a.createElement("circle", {
                    fill: "currentColor",
                    cx: "-25.422222222222224",
                    cy: "0",
                    r: "0.2"
                }), o.a.createElement("circle", {
                    fill: "currentColor",
                    cx: "-23.46666666666667",
                    cy: "0",
                    r: "0.2"
                }), o.a.createElement("circle", {
                    fill: "currentColor",
                    cx: "-21.51111111111112",
                    cy: "0",
                    r: "0.2"
                }), o.a.createElement("circle", {
                    fill: "currentColor",
                    cx: "-19.555555555555557",
                    cy: "0",
                    r: "0.5"
                }), o.a.createElement("text", {
                    fill: "currentColor",
                    x: "-21.805555555555557",
                    y: "3.5"
                }, "-20Â°"), o.a.createElement("circle", {
                    fill: "currentColor",
                    cx: "-17.60000000000001",
                    cy: "0",
                    r: "0.2"
                }), o.a.createElement("circle", {
                    fill: "currentColor",
                    cx: "-15.644444444444446",
                    cy: "0",
                    r: "0.2"
                }), o.a.createElement("circle", {
                    fill: "currentColor",
                    cx: "-13.688888888888897",
                    cy: "0",
                    r: "0.2"
                }), o.a.createElement("circle", {
                    fill: "currentColor",
                    cx: "-11.733333333333334",
                    cy: "0",
                    r: "0.2"
                }), o.a.createElement("circle", {
                    fill: "currentColor",
                    cx: "-9.777777777777786",
                    cy: "0",
                    r: "0.5"
                }), o.a.createElement("text", {
                    fill: "currentColor",
                    x: "-12.027777777777786",
                    y: "3.5"
                }, "-10Â°"), o.a.createElement("circle", {
                    fill: "currentColor",
                    cx: "-7.822222222222223",
                    cy: "0",
                    r: "0.2"
                }), o.a.createElement("circle", {
                    fill: "currentColor",
                    cx: "-5.866666666666674",
                    cy: "0",
                    r: "0.2"
                }), o.a.createElement("circle", {
                    fill: "currentColor",
                    cx: "-3.9111111111111114",
                    cy: "0",
                    r: "0.2"
                }), o.a.createElement("circle", {
                    fill: "currentColor",
                    cx: "-1.9555555555555628",
                    cy: "0",
                    r: "0.2"
                }), o.a.createElement("circle", {
                    fill: "currentColor",
                    cx: "0",
                    cy: "0",
                    r: "0.5"
                }), o.a.createElement("text", {
                    fill: "currentColor",
                    x: "-0.75",
                    y: "3.5"
                }, "0Â°"), o.a.createElement("circle", {
                    fill: "currentColor",
                    cx: "1.9555555555555486",
                    cy: "0",
                    r: "0.2"
                }), o.a.createElement("circle", {
                    fill: "currentColor",
                    cx: "3.9111111111111114",
                    cy: "0",
                    r: "0.2"
                }), o.a.createElement("circle", {
                    fill: "currentColor",
                    cx: "5.86666666666666",
                    cy: "0",
                    r: "0.2"
                }), o.a.createElement("circle", {
                    fill: "currentColor",
                    cx: "7.822222222222223",
                    cy: "0",
                    r: "0.2"
                }), o.a.createElement("circle", {
                    fill: "currentColor",
                    cx: "9.777777777777771",
                    cy: "0",
                    r: "0.5"
                }), o.a.createElement("text", {
                    fill: "currentColor",
                    x: "8.277777777777771",
                    y: "3.5"
                }, "10Â°"), o.a.createElement("circle", {
                    fill: "currentColor",
                    cx: "11.733333333333334",
                    cy: "0",
                    r: "0.2"
                }), o.a.createElement("circle", {
                    fill: "currentColor",
                    cx: "13.688888888888883",
                    cy: "0",
                    r: "0.2"
                }), o.a.createElement("circle", {
                    fill: "currentColor",
                    cx: "15.644444444444446",
                    cy: "0",
                    r: "0.2"
                }), o.a.createElement("circle", {
                    fill: "currentColor",
                    cx: "17.599999999999994",
                    cy: "0",
                    r: "0.2"
                }), o.a.createElement("circle", {
                    fill: "currentColor",
                    cx: "19.555555555555557",
                    cy: "0",
                    r: "0.5"
                }), o.a.createElement("text", {
                    fill: "currentColor",
                    x: "18.055555555555557",
                    y: "3.5"
                }, "20Â°"), o.a.createElement("circle", {
                    fill: "currentColor",
                    cx: "21.511111111111106",
                    cy: "0",
                    r: "0.2"
                }), o.a.createElement("circle", {
                    fill: "currentColor",
                    cx: "23.46666666666667",
                    cy: "0",
                    r: "0.2"
                }), o.a.createElement("circle", {
                    fill: "currentColor",
                    cx: "25.422222222222217",
                    cy: "0",
                    r: "0.2"
                }), o.a.createElement("circle", {
                    fill: "currentColor",
                    cx: "27.37777777777778",
                    cy: "0",
                    r: "0.2"
                }), o.a.createElement("circle", {
                    fill: "currentColor",
                    cx: "29.33333333333333",
                    cy: "0",
                    r: "0.5"
                }), o.a.createElement("text", {
                    fill: "currentColor",
                    x: "27.83333333333333",
                    y: "3.5"
                }, "30Â°"), o.a.createElement("circle", {
                    fill: "currentColor",
                    cx: "31.28888888888889",
                    cy: "0",
                    r: "0.2",
                    opacity: "0.8"
                }), o.a.createElement("circle", {
                    fill: "currentColor",
                    cx: "33.24444444444444",
                    cy: "0",
                    r: "0.2",
                    opacity: "0.6"
                }), o.a.createElement("circle", {
                    fill: "currentColor",
                    cx: "35.2",
                    cy: "0",
                    r: "0.2",
                    opacity: "0.4"
                }), o.a.createElement("circle", {
                    fill: "currentColor",
                    cx: "37.15555555555555",
                    cy: "0",
                    r: "0.2",
                    opacity: "0.2"
                }))))))
            }
        }]) && Ji(n.prototype, r), i && Ji(n, i), t
    }(i.Component), oo = io;
    "undefined" != typeof __REACT_HOT_LOADER__ && __REACT_HOT_LOADER__.register(io, "default", "/Users/dmitry/scaleflex/plugins/filerobot-image-editor/projects/react/components/Toolbar/Orientation.js");

    function ao(e) {
        return (ao = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function lo(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function so(e) {
        return (so = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function co(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function uo(e, t) {
        return (uo = Object.setPrototypeOf || function (e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function fo(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    var po = function (e) {
        function t() {
            var e, n, r;
            return function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, t), n = this, r = so(t).call(this), e = !r || "object" !== ao(r) && "function" != typeof r ? co(n) : r, fo(co(e), "updateBrightness", (function (t) {
                e.onAdjust("brightness", t)
            })), fo(co(e), "updateContrast", (function (t) {
                e.onAdjust("contrast", t)
            })), fo(co(e), "updateExposure", (function (t) {
                e.onAdjust("exposure", t)
            })), fo(co(e), "updateSaturation", (function (t) {
                e.onAdjust("saturation", t)
            })), fo(co(e), "onAdjust", (function (t, n) {
                e.setState(fo({}, t, n)), e.props.onAdjust(t, n)
            })), e.state = {brightness: 0, contrast: 0, exposure: 0, saturation: 0}, e
        }

        var n, r, i;
        return function (e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && uo(e, t)
        }(t, e), n = t, (r = [{
            key: "render", value: function () {
                var e = this.props.t, t = this.state, n = t.brightness, r = t.contrast, i = t.exposure,
                    a = t.saturation;
                return o.a.createElement(nn, null, o.a.createElement(Zi, {
                    label: e["adjust.brightness"],
                    range: n,
                    updateRange: this.updateBrightness
                }), o.a.createElement(Zi, {
                    label: e["adjust.contrast"],
                    range: r,
                    updateRange: this.updateContrast
                }), o.a.createElement(Zi, {
                    label: e["adjust.exposure"],
                    range: i,
                    updateRange: this.updateExposure
                }), o.a.createElement(Zi, {
                    label: e["adjust.saturation"],
                    range: a,
                    updateRange: this.updateSaturation
                }))
            }
        }]) && lo(n.prototype, r), i && lo(n, i), t
    }(i.Component), ho = po;
    "undefined" != typeof __REACT_HOT_LOADER__ && __REACT_HOT_LOADER__.register(po, "default", "/Users/dmitry/scaleflex/plugins/filerobot-image-editor/projects/react/components/Toolbar/Adjust.js");

    function mo(e) {
        return (mo = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function go(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function bo(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? go(n, !0).forEach((function (t) {
                xo(e, t, n[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : go(n).forEach((function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }))
        }
        return e
    }

    function yo(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function vo(e) {
        return (vo = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function _o(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function wo(e, t) {
        return (wo = Object.setPrototypeOf || function (e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function xo(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    var Co = ["left-top", "center-top", "right-top", "left-center", "center", "right-center", "left-bottom", "center-bottom", "right-bottom"],
        Eo = function (e) {
            function t(e) {
                var n, r, i;
                return function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t), r = this, i = vo(t).call(this, e), n = !i || "object" !== mo(i) && "function" != typeof i ? _o(r) : i, xo(_o(n), "updateOpacity", (function (e) {
                    n.setState({opacity: e}, (function () {
                        n.props.updateState({watermark: bo({}, n.props.watermark, {opacity: e})})
                    }))
                })), xo(_o(n), "changeURL", (function (e) {
                    var t = e.target.value;
                    n.setState({url: t}, (function () {
                        n.props.updateState({watermark: bo({}, n.props.watermark, {url: ""})}), n.initWatermarkImage(t)
                    }))
                })), xo(_o(n), "onPositionChange", (function (e) {
                    n.setState({position: e}, (function () {
                        n.props.updateState({watermark: bo({}, n.props.watermark, {position: e})})
                    }))
                })), xo(_o(n), "initWatermarkImage", Hi(500, (function (e) {
                    var t = null;
                    e && ((t = new Image).setAttribute("crossOrigin", "Anonymous"), t.onload = function () {
                        n.props.updateState({
                            logoImage: t,
                            isShowSpinner: !1,
                            watermark: bo({}, n.props.watermark, {url: e})
                        })
                    }, t.onerror = function () {
                        n.props.updateState({isShowSpinner: !1})
                    }, t.src = e + "?" + (new Date).getTime())
                }))), xo(_o(n), "onApplyWatermarkChange", (function () {
                    var e = !n.state.applyByDefault;
                    n.setState({applyByDefault: e}, (function () {
                        n.props.updateState({watermark: bo({}, n.props.watermark, {applyByDefault: e})})
                    }))
                })), xo(_o(n), "showWatermarkList", (function () {
                    n.setState({showWaterMarkList: !0})
                })), xo(_o(n), "hideWatermarkList", (function () {
                    n.setState({showWaterMarkList: !1})
                })), xo(_o(n), "onChangeWatermark", (function (e) {
                    n.changeURL({target: {value: e}}), n.hideWatermarkList()
                })), n.state = {
                    isBlockRatio: !1,
                    opacity: e.watermark.opacity || .7,
                    position: e.watermark.position || "center",
                    url: e.watermark.url || "",
                    urls: e.watermark.urls || [],
                    isWatermarkList: e.watermark.urls && e.watermark.urls.length > 1,
                    applyByDefault: e.watermark.applyByDefault || !1,
                    showWaterMarkList: !1
                }, n
            }

            var n, r, i;
            return function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && wo(e, t)
            }(t, e), n = t, (r = [{
                key: "componentWillReceiveProps", value: function (e) {
                    e.watermark.applyByDefault !== this.props.watermark.applyByDefault && (this.setState({applyByDefault: e.watermark.applyByDefault}), e.watermark.applyByDefault && this.initWatermarkImage(e.watermark.url))
                }
            }, {
                key: "render", value: function () {
                    var e = this, t = this.state, n = t.isWatermarkList, r = t.url, i = t.urls, a = t.opacity,
                        l = t.position, s = t.applyByDefault, c = t.showWaterMarkList, u = this.props.t;
                    return o.a.createElement(Tn, null, o.a.createElement(An, null, o.a.createElement(Rn, null, o.a.createElement("label", {htmlFor: "url"}, "Watermark URL"), o.a.createElement(bt, {
                        name: "url",
                        fullSize: !0,
                        style: {width: "calc(100% - 200px)"},
                        value: r,
                        onChange: this.changeURL
                    }), n && o.a.createElement(Dn, {onClick: this.showWatermarkList}, "Select")), o.a.createElement(Sn, null, o.a.createElement("label", {htmlFor: "opacity"}, "Opacity"), o.a.createElement(Zi, {
                        label: u["common.opacity"],
                        min: 0,
                        max: 1,
                        step: .05,
                        range: a,
                        updateRange: this.updateOpacity
                    }), o.a.createElement(me, {
                        id: "switch-watermark",
                        checked: s,
                        handleChange: this.onApplyWatermarkChange,
                        text: u["common.apply_watermark"],
                        style: {lineHeight: "inherit", float: "none"}
                    }))), o.a.createElement(jn, null, Co.map((function (t) {
                        return o.a.createElement(Pn, {
                            key: t, value: t, active: t === l, onClick: function () {
                                e.onPositionChange(t)
                            }
                        })
                    }))), n && c && o.a.createElement(Ln, null, i.map((function (t) {
                        return o.a.createElement(In, {
                            key: t, src: t, onClick: function () {
                                e.onChangeWatermark(t)
                            }
                        })
                    }))))
                }
            }]) && yo(n.prototype, r), i && yo(n, i), t
        }(i.Component), ko = Eo;
    "undefined" != typeof __REACT_HOT_LOADER__ && (__REACT_HOT_LOADER__.register(Co, "watermarkPositions", "/Users/dmitry/scaleflex/plugins/filerobot-image-editor/projects/react/components/Toolbar/Watermark.js"), __REACT_HOT_LOADER__.register(Eo, "default", "/Users/dmitry/scaleflex/plugins/filerobot-image-editor/projects/react/components/Toolbar/Watermark.js"));

    function Oo(e) {
        return (Oo = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function To() {
        return (To = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }).apply(this, arguments)
    }

    function Ro(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function So(e, t) {
        return !t || "object" !== Oo(t) && "function" != typeof t ? function (e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }(e) : t
    }

    function Ao(e) {
        return (Ao = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function jo(e, t) {
        return (jo = Object.setPrototypeOf || function (e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    var Po = function (e) {
        function t() {
            return function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, t), So(this, Ao(t).apply(this, arguments))
        }

        var n, r, i;
        return function (e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && jo(e, t)
        }(t, e), n = t, (r = [{
            key: "render", value: function () {
                var e = this, t = this.props, n = t.activeTab, r = t.processWithCloudimage, i = t.isShowSpinner,
                    a = t.activeBody, l = t.tools || Zn;
                return r && (l = Zn.filter((function (e) {
                    return Jn.indexOf(e) > -1
                }))), o.a.createElement(P, null, !n && l.map((function (t) {
                    return o.a.createElement($r, To({name: t, key: t}, e.props))
                })), "adjust" === n && o.a.createElement(ho, this.props), "effects" === n && o.a.createElement(ai, this.props), "filters" === n && o.a.createElement(_i, this.props), "rotate" === n && o.a.createElement(oo, this.props), "crop" === n && o.a.createElement(Ri, this.props), "resize" === n && o.a.createElement(zi, this.props), "watermark" === n && o.a.createElement(ko, this.props), i && o.a.createElement(ln, null), "preview" !== a && o.a.createElement(sn, null))
            }
        }]) && Ro(n.prototype, r), i && Ro(n, i), t
    }(i.Component), Do = Po;
    "undefined" != typeof __REACT_HOT_LOADER__ && __REACT_HOT_LOADER__.register(Po, "default", "/Users/dmitry/scaleflex/plugins/filerobot-image-editor/projects/react/components/Toolbar/Toolbar.js");

    function Lo(e) {
        return (Lo = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function Io(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function Mo(e, t) {
        return !t || "object" !== Lo(t) && "function" != typeof t ? function (e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }(e) : t
    }

    function Bo(e) {
        return (Bo = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function zo(e, t) {
        return (zo = Object.setPrototypeOf || function (e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    var Uo = function (e) {
            function t() {
                return function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t), Mo(this, Bo(t).apply(this, arguments))
            }

            var n, r, i;
            return function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && zo(e, t)
            }(t, e), n = t, (r = [{
                key: "render", value: function () {
                    var e = this.props, t = e.activeTab, n = e.onRevert, r = e.apply, i = e.onClose, a = e.showGoBackBtn,
                        l = e.processWithFilerobot, s = e.processWithCloudimage, c = e.handleSave, u = e.activeBody,
                        f = e.t, p = "rotate" === t ? "orientation" : t,
                        d = l || s ? f["toolbar.save"] : f["toolbar.download"];
                    return o.a.createElement(Ye, null, o.a.createElement(qe, null, o.a.createElement($e, null, f["toolbar.".concat(p)] || f["header.image_editor_title"]), o.a.createElement(un, {onClick: i})), o.a.createElement(Ke, null, o.a.createElement(Ve, null, o.a.createElement(Ze, {
                        hide: !t,
                        onClick: function () {
                            n()
                        },
                        sm: !0,
                        default: !0,
                        fullSize: !0
                    }, f["toolbar.cancel"]), a && o.a.createElement(Ze, {
                        hide: t,
                        onClick: i,
                        sm: !0,
                        default: !0,
                        fullSize: !0
                    }, f["toolbar.go_back"])), o.a.createElement(Do, this.props), "preview" === u && o.a.createElement(Xe, null, o.a.createElement(Se, {
                        themeColor: !0,
                        sm: !0,
                        success: !t,
                        themeBtn: t,
                        fullSize: !0,
                        onClick: function () {
                            t ? r() : c()
                        }
                    }, t  ? f["toolbar.apply"] : d))))
                }
            }]) && Io(n.prototype, r), i && Io(n, i), t
        }(i.Component), Ho = Uo,
        Fo = ("undefined" != typeof __REACT_HOT_LOADER__ && __REACT_HOT_LOADER__.register(Uo, "default", "/Users/dmitry/scaleflex/plugins/filerobot-image-editor/projects/react/components/Header/Header.js"), n(14)),
        No = n.n(Fo), Wo = (n(36), n(37), n(38), n(39), n(40), n(3));

    function Yo(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    var qo = function () {
        function e() {
            !function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, e)
        }

        var t, n, r;
        return t = e, r = [{
            key: "initClass", value: function () {
                this.domainRegex = /(?:(?:http|https):\/\/)((?:\w+)\.(?:(?:\w|\.)+))/
            }
        }, {
            key: "isRemote", value: function (e) {
                return null != e && !this.corsEnabled(e) && this.isURLRemote(e.src)
            }
        }, {
            key: "corsEnabled", value: function (e) {
                var t;
                return null != e.crossOrigin && (t = e.crossOrigin.toLowerCase(), ["anonymous", "use-credentials"].includes(t))
            }
        }, {
            key: "isURLRemote", value: function (e) {
                var t = e.match(this.domainRegex);
                return !!t && t[1] !== document.domain
            }
        }, {
            key: "remoteCheck", value: function (e) {
                if (this.isURLRemote(e)) return Caman.remoteProxy.length ? Caman.isURLRemote(Caman.remoteProxy) ? void Wo.a.info("Cannot use a remote proxy for loading images.") : this.proxyUrl(e) : void Wo.a.info("Attempting to load a remote image without a configured proxy. URL: ".concat(e))
            }
        }, {
            key: "proxyUrl", value: function (e) {
                return "".concat(Caman.remoteProxy, "?").concat(Caman.proxyParam, "=").concat(encodeURIComponent(e))
            }
        }, {
            key: "useProxy", value: function (e) {
                var t = {ruby: "rb", python: "py", perl: "pl", javascript: "js"};
                return null != t[e = e.toLowerCase()] && (e = t[e]), "proxies/caman_proxy.".concat(e)
            }
        }], (n = null) && Yo(t.prototype, n), r && Yo(t, r), e
    }();
    qo.initClass(), Caman.IO = qo;
    "undefined" != typeof __REACT_HOT_LOADER__ && __REACT_HOT_LOADER__.register(qo, "IO", "/Users/dmitry/scaleflex/plugins/filerobot-image-editor/projects/react/lib/caman/core/io.js");
    var $o = n(2);

    function Vo(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    var Xo = function () {
        function e() {
            !function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, e)
        }

        var t, n, r;
        return t = e, r = [{
            key: "initClass", value: function () {
                this.blenders = {}
            }
        }, {
            key: "register", value: function (e, t) {
                return this.blenders[e] = t
            }
        }, {
            key: "execute", value: function (e, t, n) {
                return this.blenders[e](t, n)
            }
        }], (n = null) && Vo(t.prototype, n), r && Vo(t, r), e
    }();
    Xo.initClass();
    var Ko = Xo, Zo = Ko;
    "undefined" != typeof __REACT_HOT_LOADER__ && (__REACT_HOT_LOADER__.register(Xo, "Blender", "/Users/dmitry/scaleflex/plugins/filerobot-image-editor/projects/react/lib/caman/core/blander.js"), __REACT_HOT_LOADER__.register(Ko, "default", "/Users/dmitry/scaleflex/plugins/filerobot-image-editor/projects/react/lib/caman/core/blander.js"));

    function Qo(e) {
        return (Qo = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function Go(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    var Jo = function () {
        function e(t) {
            !function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, e), this.c = t, this.filter = this.c, this.options = {
                blendingMode: "normal",
                opacity: 1
            }, this.layerID = $o.b.uniqid.get(), this.canvas = document.createElement("canvas"), this.canvas.width = this.c.dimensions.width, this.canvas.height = this.c.dimensions.height, this.context = this.canvas.getContext("2d"), this.context.createImageData(this.canvas.width, this.canvas.height), this.imageData = this.context.getImageData(0, 0, this.canvas.width, this.canvas.height), this.pixelData = this.imageData.data
        }

        var t, n, r;
        return t = e, (n = [{
            key: "newLayer", value: function (e) {
                return this.c.newLayer.call(this.c, e)
            }
        }, {
            key: "setBlendingMode", value: function (e) {
                return this.options.blendingMode = e, this
            }
        }, {
            key: "opacity", value: function (e) {
                return this.options.opacity = e / 100, this
            }
        }, {
            key: "copyParent", value: function () {
                for (var e = this.c.pixelData, t = 0, n = this.c.pixelData.length; t < n; t += 4) this.pixelData[t] = e[t], this.pixelData[t + 1] = e[t + 1], this.pixelData[t + 2] = e[t + 2], this.pixelData[t + 3] = e[t + 3];
                return this
            }
        }, {
            key: "fillColor", value: function () {
                return this.c.fillColor.apply(this.c, arguments)
            }
        }, {
            key: "overlayImage", value: function (e) {
                return "object" === Qo(e) ? e = e.src : "string" == typeof e && "#" === e[0] && (e = Object($o.a)(e).src), e ? (this.c.renderer.renderQueue.push({
                    type: Caman.Filter.Type.LoadOverlay,
                    src: e,
                    layer: this
                }), this) : this
            }
        }, {
            key: "layerMask", value: function (e) {
                return "object" === Qo(e) ? e = e.src : "string" == typeof e && "#" === e[0] && (e = Object($o.a)(e).src), e ? (this.c.renderer.renderQueue.push({
                    type: Caman.Filter.Type.LoadLayerMask,
                    src: e,
                    layer: this
                }), this) : this
            }
        }, {
            key: "applyToParent", value: function () {
                var e = this, t = this.c.pixelStack[this.c.pixelStack.length - 1], n = this.c.pixelData,
                    r = this.options.opacity;
                return function () {
                    for (var i = [], o = 0, a = n.length; o < a; o += 4) {
                        var l = {r: t[o], g: t[o + 1], b: t[o + 2], a: t[o + 3]},
                            s = {r: n[o], g: n[o + 1], b: n[o + 2], a: n[o + 3]};
                        e.maskData && (r = e.maskData[o] / 255);
                        var c = Zo.execute(e.options.blendingMode, s, l);
                        c.r = $o.b.clampRGB(c.r), c.g = $o.b.clampRGB(c.g), c.b = $o.b.clampRGB(c.b), null == c.a && (c.a = s.a), t[o] = l.r - (l.r - c.r) * (r * (c.a / 255)), t[o + 1] = l.g - (l.g - c.g) * (r * (c.a / 255)), i.push(t[o + 2] = l.b - (l.b - c.b) * (r * (c.a / 255)))
                    }
                    return i
                }()
            }
        }]) && Go(t.prototype, n), r && Go(t, r), e
    }();
    Caman.Layer = Jo;
    "undefined" != typeof __REACT_HOT_LOADER__ && __REACT_HOT_LOADER__.register(Jo, "Layer", "/Users/dmitry/scaleflex/plugins/filerobot-image-editor/projects/react/lib/caman/core/layer.js"), n(41), n(42);
    Zo.register("normal", (function (e, t) {
        return {r: e.r, g: e.g, b: e.b}
    })), Zo.register("multiply", (function (e, t) {
        return {r: e.r * t.r / 255, g: e.g * t.g / 255, b: e.b * t.b / 255}
    })), Zo.register("screen", (function (e, t) {
        return {
            r: 255 - (255 - e.r) * (255 - t.r) / 255,
            g: 255 - (255 - e.g) * (255 - t.g) / 255,
            b: 255 - (255 - e.b) * (255 - t.b) / 255
        }
    })), Zo.register("overlay", (function (e, t) {
        var n;
        return (n = {}).r = t.r > 128 ? 255 - 2 * (255 - e.r) * (255 - t.r) / 255 : t.r * e.r * 2 / 255, n.g = t.g > 128 ? 255 - 2 * (255 - e.g) * (255 - t.g) / 255 : t.g * e.g * 2 / 255, n.b = t.b > 128 ? 255 - 2 * (255 - e.b) * (255 - t.b) / 255 : t.b * e.b * 2 / 255, n
    })), Zo.register("difference", (function (e, t) {
        return {r: e.r - t.r, g: e.g - t.g, b: e.b - t.b}
    })), Zo.register("addition", (function (e, t) {
        return {r: t.r + e.r, g: t.g + e.g, b: t.b + e.b}
    })), Zo.register("exclusion", (function (e, t) {
        return {
            r: 128 - 2 * (t.r - 128) * (e.r - 128) / 255,
            g: 128 - 2 * (t.g - 128) * (e.g - 128) / 255,
            b: 128 - 2 * (t.b - 128) * (e.b - 128) / 255
        }
    })), Zo.register("softLight", (function (e, t) {
        var n;
        return (n = {}).r = t.r > 128 ? 255 - (255 - t.r) * (255 - (e.r - 128)) / 255 : t.r * (e.r + 128) / 255, n.g = t.g > 128 ? 255 - (255 - t.g) * (255 - (e.g - 128)) / 255 : t.g * (e.g + 128) / 255, n.b = t.b > 128 ? 255 - (255 - t.b) * (255 - (e.b - 128)) / 255 : t.b * (e.b + 128) / 255, n
    })), Zo.register("lighten", (function (e, t) {
        return {r: t.r > e.r ? t.r : e.r, g: t.g > e.g ? t.g : e.g, b: t.b > e.b ? t.b : e.b}
    })), Zo.register("darken", (function (e, t) {
        return {r: t.r > e.r ? e.r : t.r, g: t.g > e.g ? e.g : t.g, b: t.b > e.b ? e.b : t.b}
    }));
    n(43);
    Caman.Plugin.register("crop", (function (e, t, n, r) {
        var i;
        return null == n && (n = 0), null == r && (r = 0), i = document.createElement("canvas"), $o.b.copyAttributes(this.canvas, i), i.width = e, i.height = t, i.getContext("2d").drawImage(this.canvas, n, r, e, t, 0, 0, e, t), this.cropCoordinates = {
            x: n,
            y: r
        }, this.cropped = !0, this.replaceCanvas(i)
    })), Caman.Plugin.register("resize", (function (e) {
        var t;
        if (null == e && (e = null), null !== e && (null != e.width || null != e.height)) return null == e.width ? e.width = this.canvas.width * e.height / this.canvas.height : null == e.height && (e.height = this.canvas.height * e.width / this.canvas.width), t = document.createElement("canvas"), $o.b.copyAttributes(this.canvas, t), t.width = e.width, t.height = e.height, t.getContext("2d").drawImage(this.canvas, 0, 0, this.canvas.width, this.canvas.height, 0, 0, e.width, e.height), this.resized = !0, this.replaceCanvas(t);
        Wo.a.error("Invalid or missing dimensions given for resize")
    })), Caman.Filter.register("crop", (function () {
        return this.processPlugin("crop", Array.prototype.slice.call(arguments, 0))
    })), Caman.Filter.register("resize", (function () {
        return this.processPlugin("resize", Array.prototype.slice.call(arguments, 0))
    }));
    var ea, ta, na;
    n(44), n(45), n(46), n(47), n(48), n(49), n(50);
    ea = [512, 512, 456, 512, 328, 456, 335, 512, 405, 328, 271, 456, 388, 335, 292, 512, 454, 405, 364, 328, 298, 271, 496, 456, 420, 388, 360, 335, 312, 292, 273, 512, 482, 454, 428, 405, 383, 364, 345, 328, 312, 298, 284, 271, 259, 496, 475, 456, 437, 420, 404, 388, 374, 360, 347, 335, 323, 312, 302, 292, 282, 273, 265, 512, 497, 482, 468, 454, 441, 428, 417, 405, 394, 383, 373, 364, 354, 345, 337, 328, 320, 312, 305, 298, 291, 284, 278, 271, 265, 259, 507, 496, 485, 475, 465, 456, 446, 437, 428, 420, 412, 404, 396, 388, 381, 374, 367, 360, 354, 347, 341, 335, 329, 323, 318, 312, 307, 302, 297, 292, 287, 282, 278, 273, 269, 265, 261, 512, 505, 497, 489, 482, 475, 468, 461, 454, 447, 441, 435, 428, 422, 417, 411, 405, 399, 394, 389, 383, 378, 373, 368, 364, 359, 354, 350, 345, 341, 337, 332, 328, 324, 320, 316, 312, 309, 305, 301, 298, 294, 291, 287, 284, 281, 278, 274, 271, 268, 265, 262, 259, 257, 507, 501, 496, 491, 485, 480, 475, 470, 465, 460, 456, 451, 446, 442, 437, 433, 428, 424, 420, 416, 412, 408, 404, 400, 396, 392, 388, 385, 381, 377, 374, 370, 367, 363, 360, 357, 354, 350, 347, 344, 341, 338, 335, 332, 329, 326, 323, 320, 318, 315, 312, 310, 307, 304, 302, 299, 297, 294, 292, 289, 287, 285, 282, 280, 278, 275, 273, 271, 269, 267, 265, 263, 261, 259], ta = [9, 11, 12, 13, 13, 14, 14, 15, 15, 15, 15, 16, 16, 16, 16, 17, 17, 17, 17, 17, 17, 17, 18, 18, 18, 18, 18, 18, 18, 18, 18, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24], na = function () {
        return this.r = 0, this.g = 0, this.b = 0, this.a = 0, this.next = null
    }, Caman.Plugin.register("compoundBlur", (function (e, t, n, r) {
        var i, o, a, l = this.dimensions.width, s = this.dimensions.height, c = this.pixelData, u = e.data, f = l * s,
            p = [];
        for (i = 0, o = 0 <= (a = f << 2); o ? i < a : i > a; o ? i++ : i--) p[i] = c[i];
        var d = 0, h = r;
        for (r -= 1; h-- >= 0;) {
            var m, g, b, y, v, _, w, x, C, E, k, O, T, R, S, A, j, P, D, L, I, M, B, z = t + .5 | 0;
            if (0 !== z) {
                z > 256 && (z = 256);
                var U = z + z + 1, H = l - 1, F = s - 1, N = z + 1, W = N * (N + 1) / 2, Y = new na, q = void 0, $ = Y;
                for (i = 1, m = 1 <= (g = U); m ? i < g : i > g; m ? i++ : i--) $ = $.next = new na, i === N && (q = $);
                $.next = Y;
                var V = null, X = null, K = D = 0, Z = ea[z], Q = ta[z];
                for (P = 0, L = 0 <= (I = s); L ? P < I : P > I; L ? P++ : P--) {
                    var G, J, ee, te, ne, re;
                    for (T = _ = b = S = x = v = 0, R = N * (O = p[D]), w = N * (k = p[D + 1]), y = N * (E = p[D + 2]), S += W * O, x += W * k, v += W * E, $ = Y, i = 0, G = 0 <= (J = N); G ? i < J : i > J; G ? i++ : i--) $.r = O, $.g = k, $.b = E, $ = $.next;
                    for (i = 1, ee = 1 <= (te = N); ee ? i < te : i > te; ee ? i++ : i--) C = D + ((H < i ? H : i) << 2), S += ($.r = O = p[C]) * (A = N - i), x += ($.g = k = p[C + 1]) * A, v += ($.b = E = p[C + 2]) * A, T += O, _ += k, b += E, $ = $.next;
                    for (V = Y, X = q, j = 0, ne = 0 <= (re = l); ne ? j < re : j > re; ne ? j++ : j--) p[D] = S * Z >> Q, p[D + 1] = x * Z >> Q, p[D + 2] = v * Z >> Q, S -= R, x -= w, v -= y, R -= V.r, w -= V.g, y -= V.b, C = K + ((C = j + N) < H ? C : H) << 2, S += T += V.r = p[C], x += _ += V.g = p[C + 1], v += b += V.b = p[C + 2], V = V.next, R += O = X.r, w += k = X.g, y += E = X.b, T -= O, _ -= k, b -= E, X = X.next, D += 4;
                    K += l
                }
                for (j = 0, M = 0 <= (B = l); M ? j < B : j > B; M ? j++ : j--) {
                    var ie, oe, ae, le, se, ce;
                    for (_ = b = T = x = v = S = 0, R = N * (O = p[D = j << 2]), w = N * (k = p[D + 1]), y = N * (E = p[D + 2]), S += W * O, x += W * k, v += W * E, $ = Y, i = 0, ie = 0 <= (oe = N); ie ? i < oe : i > oe; ie ? i++ : i--) $.r = O, $.g = k, $.b = E, $ = $.next;
                    var ue = l;
                    for (i = 1, ae = 1 <= (le = N); ae ? i < le : i > le; ae ? i++ : i--) D = ue + j << 2, S += ($.r = O = p[D]) * (A = N - i), x += ($.g = k = p[D + 1]) * A, v += ($.b = E = p[D + 2]) * A, T += O, _ += k, b += E, $ = $.next, i < F && (ue += l);
                    for (D = j, V = Y, X = q, P = 0, se = 0 <= (ce = s); se ? P < ce : P > ce; se ? P++ : P--) p[C = D << 2] = S * Z >> Q, p[C + 1] = x * Z >> Q, p[C + 2] = v * Z >> Q, S -= R, x -= w, v -= y, R -= V.r, w -= V.g, y -= V.b, C = j + ((C = P + N) < F ? C : F) * l << 2, S += T += V.r = p[C], x += _ += V.g = p[C + 1], v += b += V.b = p[C + 2], V = V.next, R += O = X.r, w += k = X.g, y += E = X.b, T -= O, _ -= k, b -= E, X = X.next, D += l
                }
                for (t *= n, i = f; --i > -1;) {
                    var fe = i << 2, pe = (255 & u[fe + 2]) / 255 * r, de = 0 | pe;
                    if (de === d) {
                        var he = 256 * (pe - (0 | pe)), me = 256 - he;
                        c[fe] = c[fe] * me + p[fe] * he >> 8, c[fe + 1] = c[fe + 1] * me + p[fe + 1] * he >> 8, c[fe + 2] = c[fe + 2] * me + p[fe + 2] * he >> 8
                    } else de === d + 1 && (c[fe] = p[fe], c[fe + 1] = p[fe + 1], c[fe + 2] = p[fe + 2])
                }
                d++
            }
        }
        return this
    })), Caman.Filter.register("tiltShift", (function (e) {
        var t = {
            center: {x: this.dimensions.width / 2, y: this.dimensions.height / 2},
            angle: 45,
            focusWidth: 200,
            startRadius: 3,
            radiusFactor: 1.5,
            steps: 3
        };
        (e = $o.b.extend(t, e)).angle *= Math.PI / 180;
        var n = function (e, t, n, r, i, o, a) {
            var l = document.createElement("canvas");
            l.width = e, l.height = t;
            var s = n + Math.cos(i) * o * .5, c = r + Math.sin(i) * o * .5, u = n - Math.cos(i) * o * .5,
                f = r - Math.sin(i) * o * .5, p = l.getContext("2d"), d = p.createLinearGradient(s, c, u, f);
            return a ? (d.addColorStop(0, "white"), d.addColorStop(.5, "black"), d.addColorStop(1, "white")) : (d.addColorStop(0, "white"), d.addColorStop(1, "black")), p.fillStyle = d, p.fillRect(0, 0, e, t), p.getImageData(0, 0, e, t)
        }(this.dimensions.width, this.dimensions.height, e.center.x, e.center.y, e.angle, e.focusWidth, !0);
        return this.processPlugin("compoundBlur", [n, e.startRadius, e.radiusFactor, e.steps])
    })), Caman.Filter.register("radialBlur", (function (e) {
        var t = {
            size: 50,
            center: {x: this.dimensions.width / 2, y: this.dimensions.height / 2},
            startRadius: 3,
            radiusFactor: 1.5,
            steps: 3,
            radius: null
        };
        (e = $o.b.extend(t, e)).radius || (e.radius = this.dimensions.width < this.dimensions.height ? this.dimensions.height : this.dimensions.width);
        var n = e.radius / 2 - e.size, r = e.radius / 2, i = function (e, t, n, r, i, o) {
            var a = document.createElement("canvas");
            a.width = e, a.height = t;
            var l = a.getContext("2d"), s = l.createRadialGradient(n, r, i, n, r, o);
            return s.addColorStop(1, "white"), s.addColorStop(0, "black"), l.fillStyle = s, l.fillRect(0, 0, e, t), l.getImageData(0, 0, e, t)
        }(this.dimensions.width, this.dimensions.height, e.center.x, e.center.y, n, r);
        return this.processPlugin("compoundBlur", [i, e.startRadius, e.radiusFactor, e.steps])
    }));
    n(51), n(52), n(53), n(54), n(55), n(56), n(57), n(58), n(59), n(60);

    function ra(e) {
        return e * (Math.PI / 180)
    }

    Caman.Plugin.register("rotate", (function (e) {
        var t, n, r, i, o, a, l, s;
        if (0 === (t = e % 360)) return this.dimensions = {width: this.canvas.width, height: this.canvas.height};
        if (o = Math.PI / 180, n = document.createElement("canvas"), $o.b.copyAttributes(this.canvas, n), 90 === t || -270 === t || 270 === t || -90 === t) l = (a = this.canvas.height) / 2, s = (i = this.canvas.width) / 2; else if (180 === t) l = (a = this.canvas.width) / 2, s = (i = this.canvas.height) / 2; else {
            var c = Math.sin(ra(Math.abs(t))), u = Math.cos(ra(Math.abs(t)));
            l = (a = Math.abs(Math.abs(this.canvas.height * c) - Math.abs(this.canvas.width * u))) / 2, s = (i = Math.abs(Math.abs(this.canvas.height * u) - Math.abs(this.canvas.width * c))) / 2
        }
        return n.width = a, n.height = i, (r = n.getContext("2d")).save(), r.translate(l, s), r.rotate(t * o), r.drawImage(this.canvas, -this.canvas.width / 2, -this.canvas.height / 2, this.canvas.width, this.canvas.height), r.restore(), this.angle += e, this.rotated = !0, this.replaceCanvas(n)
    })), Caman.Filter.register("rotate", (function () {
        return this.processPlugin("rotate", Array.prototype.slice.call(arguments, 0))
    }));
    "undefined" != typeof __REACT_HOT_LOADER__ && __REACT_HOT_LOADER__.register(ra, "toDegrees", "/Users/dmitry/scaleflex/plugins/filerobot-image-editor/projects/react/lib/caman/plugins/rotate.js"), n(61), n(62);

    function ia(e) {
        return (ia = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function oa(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function aa(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? oa(n, !0).forEach((function (t) {
                fa(e, t, n[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : oa(n).forEach((function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }))
        }
        return e
    }

    function la(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function sa(e) {
        return (sa = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function ca(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function ua(e, t) {
        return (ua = Object.setPrototypeOf || function (e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function fa(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    var pa = {
        effect: null,
        filter: null,
        crop: null,
        resize: null,
        rotate: null,
        correctionDegree: 0,
        flipX: !1,
        flipY: !1,
        adjust: {brightness: 0, contrast: 0, saturation: 0, exposure: 0},
        canvasDimensions: {width: 300, height: 200, ratio: 1.5}
    }, da = function (e) {
        function t(e) {
            var n, r, i;
            !function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, t), r = this, i = sa(t).call(this), n = !i || "object" !== ia(i) && "function" != typeof i ? ca(r) : i, fa(ca(n), "loadImage", (function () {
                var e = n.props.src, t = n.state, r = t.reduceBeforeEdit, i = (r = void 0 === r ? {} : r).mode,
                    o = r.widthLimit, a = r.heightLimit, l = t.watermark, s = e.split("/"), c = s[s.length - 1],
                    u = new Image, f = null;
                l && l.url && ((f = new Image).setAttribute("crossOrigin", "Anonymous"), f.src = l.url + "?" + (new Date).getTime()), u.src = e + "?" + (new Date).getTime(), u.setAttribute("crossOrigin", "Anonymous"), u.onload = function () {
                    var e = {width: u.width, height: u.height, ratio: u.width / u.height}, t = {
                        activeBody: "preResize",
                        isShowSpinner: !1,
                        img: u,
                        logoImage: f,
                        imageName: c.indexOf("?") > -1 ? c.slice(0, c.indexOf("?")) : c
                    };
                    if ("manual" === i && (o < u.width || a < u.height)) n.setState(aa({canvasDimensions: e}, t)); else if ("auto" === i && (o < u.width || a < u.height)) if (u.width >= u.height) {
                        var r = u.width / u.height, l = {ratio: r, width: o, height: o / r};
                        n.setState(aa({
                            preCanvasDimensions: aa({}, l),
                            canvasDimensions: aa({}, l)
                        }, t, {activeBody: "preview", isPreResize: !0}))
                    } else {
                        var s = u.height / u.width, p = {ratio: s, width: a / s, height: a};
                        n.setState(aa({
                            preCanvasDimensions: aa({}, p),
                            canvasDimensions: aa({}, p)
                        }, t, {activeBody: "preview", isPreResize: !0}))
                    } else n.setState(aa({}, t, {activeBody: "preview", isPreResize: !1}))
                }
            })), fa(ca(n), "determineImageType", (function () {
                var e = new XMLHttpRequest;
                e.open("GET", n.props.src), e.responseType = "arraybuffer", e.onload = function (e) {
                    var t = e.target;
                    n.setState({imageMime: No()(new Uint8Array(t.response)).mime})
                }, e.send()
            })), fa(ca(n), "updateState", (function (e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function () {
                };
                n.setState(e, t)
            })), fa(ca(n), "onRevert", (function () {
                var e = n.state, t = e.cancelLastOperation, r = e.activeTab;
                n.setState({activeTab: null, isHideCanvas: !0, isShowSpinner: !0}), t(r, (function () {
                    n.setState(aa({isHideCanvas: !1, isShowSpinner: !1}, pa))
                }))
            })), fa(ca(n), "onAdjust", (function (e, t) {
                (0, n.state.onAdjust)(e, t)
            })), fa(ca(n), "onRotate", (function (e, t, r, i) {
                (0, n.state.onRotate)(e, t, r, i)
            })), fa(ca(n), "onFlip", (function (e) {
                (0, n.state.flip)(e)
            })), fa(ca(n), "onSave", (function () {
                var e = n.state.saveImage;
                n.setState({isShowSpinner: !0}), e()
            })), fa(ca(n), "onDownloadImage", (function () {
                var e = n.props.onBeforeComplete, t = n.state, r = t.downloadImage, i = t.initialZoom,
                    o = cr(1 !== i ? "scaleflex-image-edit-box-original" : "scaleflex-image-edit-box");
                !e || e({status: "before-complete", canvas: o}) ? r((function () {
                    n.props.onComplete({status: "success", canvas: o}), n.props.onClose()
                })) : (n.props.onComplete({status: "success", canvas: o}), n.props.onClose())
            })), fa(ca(n), "onApplyEffects", (function (e) {
                var t = n.state, r = t.applyCorrections, i = t.effect === e ? null : e;
                n.setState({isShowSpinner: !0, effect: i}, (function () {
                    r((function () {
                        n.setState({isShowSpinner: !1})
                    }))
                }))
            })), fa(ca(n), "onApplyFilters", (function (e) {
                var t = n.state, r = t.applyCorrections, i = t.filter === e ? null : e;
                n.setState({isShowSpinner: !0, filter: i}, (function () {
                    r((function () {
                        n.setState({isShowSpinner: !1})
                    }))
                }))
            })), fa(ca(n), "handleSave", (function () {
                var e = n.state, t = e.processWithFilerobot, r = e.processWithCloudimage;
                t || r ? n.onSave() : n.onDownloadImage()
            })), fa(ca(n), "apply", (function () {
                var e = n.state, t = e.activeTab;
                (0, e.applyChanges)(t), n.setState({activeTab: null})
            })), fa(ca(n), "redoOperation", (function (e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function () {
                }, r = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2], i = n.state.applyOperations;
                r ? n.setState({activeTab: null, isHideCanvas: !0, isShowSpinner: !0}) : n.setState({
                    isHideCanvas: !0,
                    isShowSpinner: !0
                }), i(e, (function () {
                    n.setState({isHideCanvas: !1, isShowSpinner: !1}, t)
                }))
            })), fa(ca(n), "resetOperations", (function () {
                var e = n.state.resetAll;
                n.setState({activeTab: null, isHideCanvas: !0, isShowSpinner: !0}), e((function () {
                    n.setState(aa({isHideCanvas: !1, isShowSpinner: !1}, pa))
                }))
            })), fa(ca(n), "onPreResize", (function (e) {
                switch (e) {
                    case"keep":
                        n.setState({canvasDimensions: {}, isPreResize: !1, activeBody: "preview"});
                        break;
                    case"resize":
                        var t = n.state.canvasDimensions;
                        n.setState({preCanvasDimensions: t, isPreResize: !0, activeBody: "preview"})
                }
            }));
            var o = e.config, a = o.processWithCloudimage, l = o.processWithFilerobot, s = o.uploadWithCloudimageLink,
                c = o.reduceBeforeEdit, u = o.cropBeforeEdit, f = o.watermark;
            return n.state = aa({
                isShowSpinner: !0,
                isHideCanvas: !1,
                activeTab: null,
                activeBody: null,
                currentOperation: null,
                original: {width: 300, height: 200},
                cropDetails: {width: 300, height: 200},
                canvasDimensions: {width: 300, height: 200, ratio: 1.5},
                processWithFilerobot: l,
                processWithCloudimage: a,
                uploadCloudimageImage: s,
                reduceBeforeEdit: c,
                cropBeforeEdit: u,
                operationsOriginal: [],
                operationsZoomed: [],
                operations: [],
                canvasZoomed: null,
                canvasOriginal: null,
                isPreResize: !1,
                initialZoom: 1
            }, pa, {watermark: f || {opacity: .7, position: "center", url: "", applyByDefault: !1}}), n
        }

        var n, r, i;
        return function (e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && ua(e, t)
        }(t, e), n = t, (r = [{
            key: "componentDidMount", value: function () {
                this.loadImage(), this.determineImageType()
            }
        }, {
            key: "render", value: function () {
                var e = this.state, t = e.isShowSpinner, n = e.activeTab, r = e.operations, i = e.operationsOriginal,
                    a = e.operationsZoomed, l = e.currentOperation, s = e.isHideCanvas, c = e.cropDetails,
                    u = e.original, f = e.canvasDimensions, p = e.processWithCloudimage, d = e.processWithFilerobot,
                    h = e.uploadCloudimageImage, m = e.imageMime, g = e.lastOperation, b = e.operationList,
                    y = e.initialZoom, v = e.canvasZoomed, _ = e.canvasOriginal, w = e.reduceBeforeEdit,
                    x = e.cropBeforeEdit, C = e.img, E = e.imageName, k = e.activeBody, O = e.isPreResize,
                    T = e.preCanvasDimensions, R = e.logoImage, S = e.effect, A = e.filter, j = e.crop, P = e.resize,
                    D = e.rotate, L = e.correctionDegree, I = e.flipX, M = e.flipY, B = e.adjust, z = e.watermark,
                    U = this.props, H = U.src, F = U.config, N = U.onClose, W = U.onComplete, q = U.closeOnLoad,
                    $ = void 0 === q || q, V = U.showGoBackBtn, X = void 0 !== V && V, K = U.t,
                    Z = void 0 === K ? {} : K, Q = U.theme, G = {
                        effect: S,
                        filter: A,
                        crop: j,
                        resize: P,
                        rotate: D,
                        flipX: I,
                        flipY: M,
                        adjust: B,
                        correctionDegree: L
                    }, J = aa({
                        t: Z,
                        theme: Q,
                        cropDetails: c,
                        original: u,
                        activeTab: n,
                        src: H,
                        onClose: N,
                        config: F,
                        canvasDimensions: f,
                        processWithCloudimage: p,
                        processWithFilerobot: d,
                        operations: r,
                        operationsOriginal: i,
                        operationsZoomed: a,
                        initialZoom: y,
                        isShowSpinner: t,
                        showGoBackBtn: X,
                        img: C,
                        logoImage: R,
                        imageName: E,
                        activeBody: k,
                        preCanvasDimensions: T,
                        tools: F.tools,
                        updateState: this.updateState,
                        onRevert: this.onRevert,
                        apply: this.apply,
                        onSave: this.onSave,
                        onFlip: this.onFlip,
                        onApplyEffects: this.onApplyEffects,
                        onApplyFilters: this.onApplyFilters,
                        onRotate: this.onRotate,
                        onAdjust: this.onAdjust,
                        onDownloadImage: this.onDownloadImage,
                        handleSave: this.handleSave
                    }, G, {watermark: z}), ee = aa({
                        t: Z,
                        theme: Q,
                        cropDetails: c,
                        original: u,
                        activeTab: n,
                        isShowSpinner: t,
                        operations: r,
                        operationsOriginal: i,
                        operationsZoomed: a,
                        initialZoom: y,
                        currentOperation: l,
                        isHideCanvas: s,
                        src: H,
                        imageMime: m,
                        onClose: N,
                        onComplete: W,
                        canvasDimensions: f,
                        closeOnLoad: $,
                        config: F,
                        processWithCloudimage: p,
                        uploadCloudimageImage: h,
                        lastOperation: g,
                        operationList: b,
                        canvasZoomed: v,
                        canvasOriginal: _,
                        reduceBeforeEdit: w,
                        cropBeforeEdit: x,
                        img: C,
                        logoImage: R,
                        imageName: E,
                        isPreResize: O,
                        preCanvasDimensions: T,
                        updateState: this.updateState,
                        handleSave: this.handleSave,
                        onPreResize: this.onPreResize,
                        redoOperation: this.redoOperation
                    }, G, {watermark: z}), te = {
                        logoImage: R,
                        t: Z,
                        theme: Q,
                        activeBody: k,
                        operations: r,
                        operationsOriginal: i,
                        operationsZoomed: a,
                        initialZoom: y,
                        currentOperation: l,
                        processWithCloudimage: p,
                        updateState: this.updateState,
                        redoOperation: this.redoOperation,
                        resetOperations: this.resetOperations,
                        config: F,
                        watermark: z
                    };
                return o.a.createElement(Y, null, o.a.createElement(Ho, J), o.a.createElement(Ce, null, "preview" === k && o.a.createElement(Sr, ee), "preResize" === k && o.a.createElement(Ur, ee), o.a.createElement(gn, {
                    overlay: !0,
                    show: t,
                    label: Z["spinner.label"]
                })), o.a.createElement(qn, te))
            }
        }]) && la(n.prototype, r), i && la(n, i), t
    }(i.Component), ha = da;
    "undefined" != typeof __REACT_HOT_LOADER__ && (__REACT_HOT_LOADER__.register(pa, "INITIAL_PARAMS", "/Users/dmitry/scaleflex/plugins/filerobot-image-editor/projects/react/ImageEditor.js"), __REACT_HOT_LOADER__.register(da, "default", "/Users/dmitry/scaleflex/plugins/filerobot-image-editor/projects/react/ImageEditor.js"));

    function ma() {
        var e = function (e, t) {
            t || (t = e.slice(0));
            return Object.freeze(Object.defineProperties(e, {raw: {value: Object.freeze(t)}}))
        }(["\n  cursor: pointer;\n  position: absolute;\n  font-weight: normal;\n  top: ", ";\n  right: ", ";\n  left: ", ";\n  bottom: ", ";\n  font-size: ", ";\n  z-index: 10;\n  font-family: 'filerobot-image-editor-font' !important;\n  color: ", ";\n  speak: none;\n  font-style: normal;\n  font-variant: normal;\n  text-transform: none;\n  line-height: 1;\n\n  /* Better Font Rendering =========== */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  \n  :hover {\n    color: ", ";\n  }\n  \n  :before {\n      content: '\\e90c'\n    }\n"], ["\n  cursor: pointer;\n  position: absolute;\n  font-weight: normal;\n  top: ", ";\n  right: ", ";\n  left: ", ";\n  bottom: ", ";\n  font-size: ", ";\n  z-index: 10;\n  font-family: 'filerobot-image-editor-font' !important;\n  color: ", ";\n  speak: none;\n  font-style: normal;\n  font-variant: normal;\n  text-transform: none;\n  line-height: 1;\n\n  /* Better Font Rendering =========== */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  \n  :hover {\n    color: ", ";\n  }\n  \n  :before {\n      content: '\\\\e90c'\n    }\n"]);
        return ma = function () {
            return e
        }, e
    }

    var ga = a.b.span.attrs((function () {
        return {role: "button"}
    }))(ma(), (function (e) {
        return e.t || "10px"
    }), (function (e) {
        return e.r || "10px"
    }), (function (e) {
        return e.l || "auto"
    }), (function (e) {
        return e.b || "auto"
    }), (function (e) {
        return e.fz || "18px"
    }), (function () {
        return f.modal.colorMuted
    }), (function (e) {
        return f.modal.colorMutedHover
    }));
    "undefined" != typeof __REACT_HOT_LOADER__ && __REACT_HOT_LOADER__.register(ga, "CloseBtn", "/Users/dmitry/scaleflex/plugins/filerobot-image-editor/projects/react/components/CloseBtn.js");

    function ba(e) {
        return (ba = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function ya() {
        return (ya = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }).apply(this, arguments)
    }

    function va(e, t) {
        if (null == e) return {};
        var n, r, i = function (e, t) {
            if (null == e) return {};
            var n, r, i = {}, o = Object.keys(e);
            for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
            return i
        }(e, t);
        if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(e);
            for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
        }
        return i
    }

    function _a(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function wa(e) {
        return (wa = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function xa(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function Ca(e, t) {
        return (Ca = Object.setPrototypeOf || function (e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function Ea() {
        var e = Ta(["\n  azimuth: center;\n  border-collapse: separate;\n  border-spacing: 0;\n  caption-side: top;\n  cursor: auto;\n  direction: ltr;\n  elevation: level;\n  empty-cells: show;\n  font-size: medium;\n  font-style: medium;\n  font-variant: medium;\n  font-weight: medium;\n  letter-spacing: normal;\n  line-height: medium;\n  list-style-image: none;\n  list-style-position: outside;\n  list-style-type: disc;\n  list-style: disc outside none;\n  orphans: 2;\n  pitch-range: 50;\n  pitch: medium;\n  quotes: '\"' '\"';\n  richness: 50;\n  speak-header: once;\n  speak-numeral: continuous;\n  speak-punctuation: none;\n  speak: normal;\n  speech-rate: medium;\n  stress: 50;\n  text-align: left;\n  text-indent: 0;\n  text-transform: none;\n  visibility: visible;\n  voice-family: none;\n  volume: medium;\n  white-space: normal;\n  widows: 2;\n  word-spacing: 0;\n  position: fixed;\n  padding: ", ";\n  top: 5%;\n  left: 15%;\n  right: 15%;\n  bottom: 5%;\n  color: ", ";\n  overflow: hidden;\n  z-index: ", ";\n  display: block;\n  animation: scaleflexFadeInAnimation 350ms ease-in-out both;\n  font-family: 'Roboto', 'Arial', sans-serif;\n  \n  ", ";\n  \n  @keyframes scaleflexFadeInAnimation {\n    from {opacity: 0;}\n    to {opacity: 1;}\n  }\n  \n  @media (max-width: 1000px) {\n    top: 20px;\n    left: 20px;\n    bottom: 20px;\n    right: 20px;\n  }\n"]);
        return Ea = function () {
            return e
        }, e
    }

    function ka() {
        var e = Ta(["\n  position: relative;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  -webkit-background-clip: padding-box;\n  background-clip: padding-box;\n  border: ", " solid ", ";\n  border-radius: ", ";\n  overflow: hidden;\n  outline: 0;\n  height: ", ";\n  background: ", ";\n  color: ", ";\n"]);
        return ka = function () {
            return e
        }, e
    }

    function Oa() {
        var e = Ta(["\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  position: fixed;\n  background: ", ";\n  opacity: .4;\n  z-index: 999999992;\n"]);
        return Oa = function () {
            return e
        }, e
    }

    function Ta(e, t) {
        return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {raw: {value: Object.freeze(t)}}))
    }

    var Ra = a.b.div(Oa(), (function (e) {
        return f.colors.background.base || "#000"
    })), Sa = a.b.div(ka(), (function (e) {
        return e.noBorder ? 0 : "1px"
    }), (function (e) {
        return e.noBorder ? "transparent" : f.colors.border.base || "#B0B0B0"
    }), (function (e) {
        return e.noBorder ? 0 : f.radii[3]
    }), (function (e) {
        return e.h || e.height || "auto"
    }), (function (e) {
        return f.colors.background.base || "#fff"
    }), (function (e) {
        return f.colors.text || "#3d3d3d"
    })), Aa = a.b.div(Ea(), (function (e) {
        return e.p || e.padding || "0"
    }), (function (e) {
        return f.colors.text || "#3d3d3d"
    }), (function (e) {
        return e.zIndex || "999999995"
    }), (function (e) {
        return e.isTooSmall ? "\n    top: 20% !important;\n    left: 15px !important;\n    right: 15px !important;\n    bottom: auto !important;\n    color: black !important;\n    text-align: center !important;\n    font-size: 18px;\n    \n    > div {\n      padding: 40px !important;\n    }\n    \n    * {\n      color: black !important;\n    }\n  " : ""
    }));

    function ja() {
        return "\n    top: 20% !important;\n    left: 15px !important;\n    right: 15px !important;\n    bottom: auto !important;\n    color: black !important;\n    text-align: center !important;\n    font-size: 18px;\n    \n    > div {\n      padding: 40px !important;\n    }\n    \n    * {\n      color: black !important;\n    }\n  "
    }

    var Pa = function (e) {
            function t() {
                var e, n, r, i, o, a, l;
                !function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t);
                for (var s = arguments.length, c = new Array(s), u = 0; u < s; u++) c[u] = arguments[u];
                return r = this, i = (e = wa(t)).call.apply(e, [this].concat(c)), n = !i || "object" !== ba(i) && "function" != typeof i ? xa(r) : i, o = xa(n), l = function (e) {
                    var t = n.props.onClose, r = void 0 === t ? function () {
                    } : t;
                    27 === e.keyCode && (e.stopPropagation(), r())
                }, (a = "handleOutsideMouseClick") in o ? Object.defineProperty(o, a, {
                    value: l,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : o[a] = l, n
            }

            var n, a, l;
            return function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && Ca(e, t)
            }(t, e), n = t, (a = [{
                key: "componentWillMount", value: function () {
                    var e = this.props.closeOnOutsideClick, t = void 0 === e || e;
                    this.root = document.createElement("div"), document.body.appendChild(this.root), t && document.addEventListener("keydown", this.handleOutsideMouseClick)
                }
            }, {
                key: "componentWillUnmount", value: function () {
                    var e = this.props.closeOnOutsideClick, t = void 0 === e || e;
                    document.body.removeChild(this.root), t && document.removeEventListener("keydown", this.handleOutsideMouseClick)
                }
            }, {
                key: "render", value: function () {
                    var e = this.props, t = e.onClose, n = void 0 === t ? function () {
                    } : t, a = e.isHideCloseBtn, l = va(e, ["onClose", "isHideCloseBtn"]);
                    return Object(r.createPortal)(o.a.createElement(i.Fragment, null, o.a.createElement(Ra, {onClick: n}), o.a.createElement(Aa, this.props, !a && o.a.createElement(ga, {onClick: n}), o.a.createElement(Sa, ya({h: "100%"}, l), this.props.children))), this.root)
                }
            }]) && _a(n.prototype, a), l && _a(n, l), t
        }(i.Component),
        Da = ("undefined" != typeof __REACT_HOT_LOADER__ && (__REACT_HOT_LOADER__.register(Ra, "ModalOverlay", "/Users/dmitry/scaleflex/plugins/filerobot-image-editor/projects/react/components/Modal.js"), __REACT_HOT_LOADER__.register(Sa, "ModalContent", "/Users/dmitry/scaleflex/plugins/filerobot-image-editor/projects/react/components/Modal.js"), __REACT_HOT_LOADER__.register(Aa, "ModalFullScreen", "/Users/dmitry/scaleflex/plugins/filerobot-image-editor/projects/react/components/Modal.js"), __REACT_HOT_LOADER__.register(ja, "getSmallModalStyle", "/Users/dmitry/scaleflex/plugins/filerobot-image-editor/projects/react/components/Modal.js"), __REACT_HOT_LOADER__.register(Pa, "Modal", "/Users/dmitry/scaleflex/plugins/filerobot-image-editor/projects/react/components/Modal.js")), n(63), {
            "header.image_editor_title": "Filerobot Image Editor",
            "toolbar.download": "Download",
            "toolbar.save": "Save",
            "toolbar.apply": "Apply",
            "toolbar.cancel": "Cancel",
            "toolbar.go_back": "Go Back",
            "toolbar.adjust": "Adjust",
            "toolbar.effects": "Effects",
            "toolbar.filters": "Filters",
            "toolbar.orientation": "Orientation",
            "toolbar.crop": "Crop",
            "toolbar.resize": "Resize",
            "toolbar.watermark": "Watermark",
            "adjust.brightness": "Brightness",
            "adjust.contrast": "Contrast",
            "adjust.exposure": "Exposure",
            "adjust.saturation": "Saturation",
            "orientation.rotate_l": "Rotate Left",
            "orientation.rotate_r": "Rotate Right",
            "orientation.flip_h": "Flip Horizontally",
            "orientation.flip_v": "Flip Vertically",
            "pre_resize.title": "Would you like to reduce resolution before editing the image?",
            "pre_resize.keep_original_resolution": "Keep original resolution",
            "pre_resize.resize_n_continue": "Resize & Continue",
            "footer.reset": "Reset",
            "footer.undo": "Undo",
            "footer.redo": "Redo",
            "spinner.label": "Processing...",
            "warning.too_big_resolution": "The resolution of the image is too big for the web. It can cause problems with Image Editor performance.",
            "common.width": "width",
            "common.height": "height",
            "common.custom": "custom",
            "common.original": "original",
            "common.square": "square",
            "common.opacity": "opacity",
            "common.apply_watermark": "Apply watermark"
        }), La = Da,
        Ia = ("undefined" != typeof __REACT_HOT_LOADER__ && __REACT_HOT_LOADER__.register(Da, "default", "/Users/dmitry/scaleflex/plugins/filerobot-image-editor/projects/react/assets/i18n/en.js"), {
            "header.image_editor_title": "Ã‰diteur d'Image Filerobot",
            "toolbar.download": "TÃ©lÃ©charger",
            "toolbar.save": "Sauvegarder",
            "toolbar.apply": "Appliquer",
            "toolbar.cancel": "Annuler",
            "toolbar.go_back": "Retour",
            "toolbar.adjust": "Ajuster",
            "toolbar.effects": "Effets",
            "toolbar.filters": "Filtres",
            "toolbar.orientation": "Orientation",
            "toolbar.crop": "Rogner",
            "toolbar.resize": "Redimensionner",
            "toolbar.watermark": "Watermark",
            "adjust.brightness": "LuminositÃ©",
            "adjust.contrast": "Contraste",
            "adjust.exposure": "Exposition",
            "adjust.saturation": "Saturation",
            "orientation.rotate_l": "Rotation Gauche",
            "orientation.rotate_r": "Rotation Droite",
            "orientation.flip_h": "Miroir Horizontal",
            "orientation.flip_v": "Miroir Vertical",
            "pre_resize.title": "Voulez-vous rÃ©duire la rÃ©solution de l'image avant d'Ã©diter l'image ?",
            "pre_resize.keep_original_resolution": "Conserver la rÃ©solution d'origine",
            "pre_resize.resize_n_continue": "Redimensionner et Continuer",
            "footer.reset": "RÃ©initialiser",
            "footer.undo": "Annuler",
            "footer.redo": "Refaire",
            "spinner.label": "Transformation...",
            "warning.too_big_resolution": "La rÃ©solution de l'image est trop grande pour le web et peut endommager les performances de l'Ã‰diteur d'Image Filerobot.",
            "common.width": "largeur",
            "common.height": "hauteur",
            "common.custom": "custom",
            "common.original": "original",
            "common.square": "carrÃ©",
            "common.opacity": "opacitÃ©",
            "common.apply_watermark": "Appliquer watermark"
        }), Ma = Ia,
        Ba = ("undefined" != typeof __REACT_HOT_LOADER__ && __REACT_HOT_LOADER__.register(Ia, "default", "/Users/dmitry/scaleflex/plugins/filerobot-image-editor/projects/react/assets/i18n/fr.js"), {
            colors: {
                primaryBg: "#1e262c",
                primaryBgHover: "#637381",
                secondaryBg: "#263138",
                secondaryBgHover: "#34444c",
                text: "#F9FAFB",
                textHover: "#fff",
                textMute: "#aaa",
                textWarn: "#f7931e",
                secondaryBgOpacity: "rgba(0, 0, 0, 0.75)",
                accent: "#00707c",
                border: "#161e23",
                borderLight: "#70777f"
            }, fonts: {}
        }), za = Ba,
        Ua = ("undefined" != typeof __REACT_HOT_LOADER__ && __REACT_HOT_LOADER__.register(Ba, "default", "/Users/dmitry/scaleflex/plugins/filerobot-image-editor/projects/react/assets/theme/dark.js"), {
            colors: {
                primaryBg: "#f2f2f2",
                primaryBgHover: "#fff",
                secondaryBg: "#fff",
                secondaryBgHover: "#f9fafb",
                secondaryBgOpacity: "rgba(255,255,255, 0.75)",
                text: "#34444c",
                textHover: "#1a2329",
                textMute: "#aaa",
                textWarn: "#f7931e",
                accent: "#00707c",
                border: "#aeaeae",
                borderLight: "#e1e1e1"
            }, fonts: {}
        }), Ha = Ua;
    "undefined" != typeof __REACT_HOT_LOADER__ && __REACT_HOT_LOADER__.register(Ua, "default", "/Users/dmitry/scaleflex/plugins/filerobot-image-editor/projects/react/assets/theme/light.js");

    function Fa(e) {
        return (Fa = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function Na(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function Wa(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? Na(n, !0).forEach((function (t) {
                Xa(e, t, n[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Na(n).forEach((function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }))
        }
        return e
    }

    function Ya(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function qa(e) {
        return (qa = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function $a(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function Va(e, t) {
        return (Va = Object.setPrototypeOf || function (e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function Xa(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    var Ka = function (e) {
        function t(e) {
            var n, r, i, o = e.show, a = void 0 !== o && o, l = e.src, s = void 0 === l ? "" : l, c = e.config,
                u = void 0 === c ? {} : c;
            return function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, t), r = this, i = qa(t).call(this), n = !i || "object" !== Fa(i) && "function" != typeof i ? $a(r) : i, Xa($a(n), "processConfig", (function (e) {
                return Wa({}, nr, {processWithFilerobot: !!e.filerobot, processWithCloudimage: !!e.cloudimage}, e)
            })), Xa($a(n), "open", (function (e) {
                n.setState({isVisible: !0, src: e})
            })), Xa($a(n), "close", (function () {
                var e = n.props.onClose;
                n.setState({isVisible: !1}, (function () {
                    e && e()
                }))
            })), u.translations = u.translations || {}, u.language = u.language || "en", u.theme = u.theme || {}, u.theme.colors = u.theme.colors || {}, u.theme.fonts = u.theme.fonts || {}, u.colorScheme = u.colorScheme || "dark", n.state = {
                isVisible: a,
                src: s,
                config: n.processConfig(u),
                t: Wa({}, "en" === u.language ? La : Ma, {}, u.translations[u.language]),
                colorScheme: u.colorScheme || "dark",
                theme: {
                    colors: Wa({}, ("light" === u.colorScheme ? Ha : za).colors, {}, u.theme.colors),
                    fonts: Wa({}, ("light" === u.colorScheme ? Ha : za).fonts, {}, u.theme.fonts)
                }
            }, n
        }

        var n, r, i;
        return function (e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && Va(e, t)
        }(t, e), n = t, (r = [{
            key: "componentDidUpdate", value: function (e) {
                this.props.show !== e.show && (this.props.show ? this.open(this.props.src) : this.close())
            }
        }, {
            key: "render", value: function () {
                var e = this.state, t = e.isVisible, n = e.src, r = e.config, i = e.t, l = e.theme, s = this.props,
                    c = s.onComplete, u = void 0 === c ? function () {
                    } : c, f = s.onBeforeComplete, p = s.showGoBackBtn, d = s.closeOnLoad, h = s.showInModal,
                    m = void 0 === h || h;
                if (!n || !t) return null;
                var g = o.a.createElement(W, null, o.a.createElement(ha, {
                    src: n,
                    config: r,
                    onComplete: u,
                    onBeforeComplete: f,
                    onClose: this.close,
                    showGoBackBtn: p,
                    closeOnLoad: d,
                    t: i
                }));
                return o.a.createElement(a.a, {theme: Wa({}, l)}, m ? o.a.createElement(Pa, {
                    noBorder: !0,
                    fullScreen: "lg",
                    isHideCloseBtn: !0,
                    style: {borderRadius: 5},
                    onClose: this.close
                }, g) : g)
            }
        }]) && Ya(n.prototype, r), i && Ya(n, i), t
    }(i.Component), Za = Ka, Qa = Za;
    "undefined" != typeof __REACT_HOT_LOADER__ && (__REACT_HOT_LOADER__.register(Ka, "ImageEditorWrapper", "/Users/dmitry/scaleflex/plugins/filerobot-image-editor/projects/react/ImageEditorWrapper.js"), __REACT_HOT_LOADER__.register(Za, "default", "/Users/dmitry/scaleflex/plugins/filerobot-image-editor/projects/react/ImageEditorWrapper.js"));

    function Ga(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    var Ja = function () {
        function e() {
            var t = this, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                i = arguments.length > 1 ? arguments[1] : void 0,
                a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            !function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, e);
            var l = n.elementId || "filerobot-image-editor", s = document.getElementById(l), c = function (e) {
                console.log(e)
            };
            i && "function" == typeof i ? c = i : i = i || {}, s || ((s = document.createElement("div")).id = l, document.body.appendChild(s));
            var u;
            this.component = (u = Qa, Object(r.render)(o.a.createElement(u, {
                show: a,
                config: n,
                onComplete: c,
                onBeforeComplete: i.onBeforeComplete
            }), s)), this.open = this.component.open, this.close = this.component.close, this.unmount = function () {
                return t.__unmount__REACT_HOT_LOADER__.apply(t, arguments)
            }
        }

        var t, n, i;
        return t = e, (n = [{
            key: "__unmount__REACT_HOT_LOADER__", value: function () {
                return Object(r.unmountComponentAtNode)(container)
            }
        }]) && Ga(t.prototype, n), i && Ga(t, i), e
    }();
    window.FilerobotImageEditor = Ja;
    "undefined" != typeof __REACT_HOT_LOADER__ && __REACT_HOT_LOADER__.register(Ja, "FilerobotImageEditor", "/Users/dmitry/scaleflex/plugins/filerobot-image-editor/projects/js/index.js")
}]);