webpackJsonp([2], {
    146: function(e, t, n) {
        var o = n(181);
        "string" == typeof o && (o = [
            [e.i, o, ""]
        ]);
        n(4)(o, {});
        o.locals && (e.exports = o.locals)
    },
    168: function(e, t, n) {
        var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        };
        ! function(e) {
            ! function(e) {
                "use strict";
                var t, r = function() {
                        var t = function(e) {
                                return function(t) {
                                    return e === t
                                }
                            },
                            n = function(e, t) {
                                return e === t
                            },
                            o = function(e) {
                                return function(t, n) {
                                    return t[e] === n[e]
                                }
                            },
                            r = function() {
                                return !0
                            },
                            i = function() {
                                return !1
                            },
                            a = function(e) {
                                return function() {
                                    return !e.apply(e, arguments)
                                }
                            },
                            s = function(e, t) {
                                return function(n) {
                                    return e(n) && t(n)
                                }
                            },
                            l = 0;
                        return {
                            eq: t,
                            eq2: n,
                            peq2: o,
                            ok: r,
                            fail: i,
                            self: function(e) {
                                return e
                            },
                            not: a,
                            and: s,
                            invoke: function(e, t) {
                                return function() {
                                    return e[t].apply(e, arguments)
                                }
                            },
                            uniqueId: function(e) {
                                var t = ++l + "";
                                return e ? e + t : t
                            },
                            rect2bnd: function(t) {
                                var n = e(document);
                                return {
                                    top: t.top + n.scrollTop(),
                                    left: t.left + n.scrollLeft(),
                                    width: t.right - t.left,
                                    height: t.bottom - t.top
                                }
                            },
                            invertObject: function(e) {
                                var t = {};
                                for (var n in e) e.hasOwnProperty(n) && (t[e[n]] = n);
                                return t
                            },
                            namespaceToCamel: function(e, t) {
                                return (t = t || "") + e.split(".").map(function(e) {
                                    return e.substring(0, 1).toUpperCase() + e.substring(1)
                                }).join("")
                            },
                            debounce: function(e, t, n) {
                                var o;
                                return function() {
                                    var r = this,
                                        i = arguments,
                                        a = function() {
                                            o = null, n || e.apply(r, i)
                                        },
                                        s = n && !o;
                                    clearTimeout(o), o = setTimeout(a, t), s && e.apply(r, i)
                                }
                            }
                        }
                    }(),
                    i = function() {
                        var t = function(e) {
                                return e[0]
                            },
                            n = function(e) {
                                return e[e.length - 1]
                            },
                            o = function(e) {
                                return e.slice(0, e.length - 1)
                            },
                            i = function(e) {
                                return e.slice(1)
                            },
                            a = function(e, t) {
                                for (var n = 0, o = e.length; n < o; n++) {
                                    var r = e[n];
                                    if (t(r)) return r
                                }
                            },
                            s = function(e, t) {
                                for (var n = 0, o = e.length; n < o; n++)
                                    if (!t(e[n])) return !1;
                                return !0
                            },
                            l = function(t, n) {
                                return e.inArray(n, t)
                            },
                            c = function(e, t) {
                                return -1 !== l(e, t)
                            },
                            u = function(e, t) {
                                return t = t || r.self, e.reduce(function(e, n) {
                                    return e + t(n)
                                }, 0)
                            },
                            d = function(e) {
                                for (var t = [], n = -1, o = e.length; ++n < o;) t[n] = e[n];
                                return t
                            },
                            f = function(e) {
                                return !e || !e.length
                            },
                            h = function(e, o) {
                                return e.length ? i(e).reduce(function(e, t) {
                                    var r = n(e);
                                    return o(n(r), t) ? r[r.length] = t : e[e.length] = [t], e
                                }, [
                                    [t(e)]
                                ]) : []
                            },
                            p = function(e) {
                                for (var t = [], n = 0, o = e.length; n < o; n++) e[n] && t.push(e[n]);
                                return t
                            },
                            g = function(e) {
                                for (var t = [], n = 0, o = e.length; n < o; n++) c(t, e[n]) || t.push(e[n]);
                                return t
                            },
                            m = function(e, t) {
                                var n = l(e, t);
                                return -1 === n ? null : e[n + 1]
                            };
                        return {
                            head: t,
                            last: n,
                            initial: o,
                            tail: i,
                            prev: function(e, t) {
                                var n = l(e, t);
                                return -1 === n ? null : e[n - 1]
                            },
                            next: m,
                            find: a,
                            contains: c,
                            all: s,
                            sum: u,
                            from: d,
                            isEmpty: f,
                            clusterBy: h,
                            compact: p,
                            unique: g
                        }
                    }(),
                    a = n(9),
                    s = function(t) {
                        var n = "Comic Sans MS" === t ? "Courier New" : "Comic Sans MS",
                            o = e("<div>").css({
                                position: "absolute",
                                left: "-9999px",
                                top: "-9999px",
                                fontSize: "200px"
                            }).text("mmmmmmmmmwwwwwww").appendTo(document.body),
                            r = o.css("fontFamily", n).width(),
                            i = o.css("fontFamily", t + "," + n).width();
                        return o.remove(), r !== i
                    },
                    l = navigator.userAgent,
                    c = /MSIE|Trident/i.test(l);
                if (c) {
                    var u = /MSIE (\d+[.]\d+)/.exec(l);
                    u && (t = parseFloat(u[1])), (u = /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(l)) && (t = parseFloat(u[1]))
                }
                var d = /Edge\/\d+/.test(l),
                    f = !!window.CodeMirror;
                !f && a && (n(21), f = !0);
                var h = {
                        isMac: navigator.appVersion.indexOf("Mac") > -1,
                        isMSIE: c,
                        isEdge: d,
                        isFF: !d && /firefox/i.test(l),
                        isPhantom: /PhantomJS/i.test(l),
                        isWebkit: !d && /webkit/i.test(l),
                        isChrome: !d && /chrome/i.test(l),
                        isSafari: !d && /safari/i.test(l),
                        browserVersion: t,
                        jqueryVersion: parseFloat(e.fn.jquery),
                        isSupportAmd: a,
                        hasCodeMirror: f,
                        isFontInstalled: s,
                        isW3CRangeSupport: !!document.createRange
                    },
                    p = String.fromCharCode(160),
                    g = function() {
                        var t = function(t) {
                                return t && e(t).hasClass("note-editable")
                            },
                            n = function(t) {
                                return t && e(t).hasClass("note-control-sizing")
                            },
                            o = function(e) {
                                return e = e.toUpperCase(),
                                    function(t) {
                                        return t && t.nodeName.toUpperCase() === e
                                    }
                            },
                            a = function(e) {
                                return e && 3 === e.nodeType
                            },
                            s = function(e) {
                                return e && 1 === e.nodeType
                            },
                            l = function(e) {
                                return e && /^BR|^IMG|^HR|^IFRAME|^BUTTON/.test(e.nodeName.toUpperCase())
                            },
                            c = function(e) {
                                return !t(e) && e && /^DIV|^P|^LI|^H[1-7]/.test(e.nodeName.toUpperCase())
                            },
                            u = function(e) {
                                return e && /^H[1-7]/.test(e.nodeName.toUpperCase())
                            },
                            d = o("PRE"),
                            f = o("LI"),
                            m = function(e) {
                                return c(e) && !f(e)
                            },
                            v = o("TABLE"),
                            b = o("DATA"),
                            y = function(e) {
                                return !(S(e) || w(e) || x(e) || c(e) || v(e) || k(e) || b(e))
                            },
                            w = function(e) {
                                return e && /^UL|^OL/.test(e.nodeName.toUpperCase())
                            },
                            x = o("HR"),
                            C = function(e) {
                                return e && /^TD|^TH/.test(e.nodeName.toUpperCase())
                            },
                            k = o("BLOCKQUOTE"),
                            S = function(e) {
                                return C(e) || k(e) || t(e)
                            },
                            T = o("A"),
                            L = function(e) {
                                return y(e) && !!P(e, c)
                            },
                            N = function(e) {
                                return y(e) && !P(e, c)
                            },
                            M = o("BODY"),
                            A = function(e, t) {
                                return e.nextSibling === t || e.previousSibling === t
                            },
                            E = function(e, t) {
                                t = t || r.ok;
                                var n = [];
                                return e.previousSibling && t(e.previousSibling) && n.push(e.previousSibling), n.push(e), e.nextSibling && t(e.nextSibling) && n.push(e.nextSibling), n
                            },
                            F = h.isMSIE && h.browserVersion < 11 ? "&nbsp;" : "<br>",
                            D = function(e) {
                                return a(e) ? e.nodeValue.length : e ? e.childNodes.length : 0
                            },
                            I = function(e) {
                                var t = D(e);
                                return 0 === t || !a(e) && 1 === t && e.innerHTML === F || !(!i.all(e.childNodes, a) || "" !== e.innerHTML)
                            },
                            H = function(e) {
                                l(e) || D(e) || (e.innerHTML = F)
                            },
                            P = function(e, n) {
                                for (; e;) {
                                    if (n(e)) return e;
                                    if (t(e)) break;
                                    e = e.parentNode
                                }
                                return null
                            },
                            R = function(e, n) {
                                for (e = e.parentNode; e && 1 === D(e);) {
                                    if (n(e)) return e;
                                    if (t(e)) break;
                                    e = e.parentNode
                                }
                                return null
                            },
                            O = function(e, n) {
                                n = n || r.fail;
                                var o = [];
                                return P(e, function(e) {
                                    return t(e) || o.push(e), n(e)
                                }), o
                            },
                            z = function(e, t) {
                                var n = O(e);
                                return i.last(n.filter(t))
                            },
                            W = function(t, n) {
                                for (var o = O(t), r = n; r; r = r.parentNode)
                                    if (e.inArray(r, o) > -1) return r;
                                return null
                            },
                            B = function(e, t) {
                                t = t || r.fail;
                                for (var n = []; e && !t(e);) n.push(e), e = e.previousSibling;
                                return n
                            },
                            U = function(e, t) {
                                t = t || r.fail;
                                for (var n = []; e && !t(e);) n.push(e), e = e.nextSibling;
                                return n
                            },
                            $ = function(e, t) {
                                var n = [];
                                return t = t || r.ok,
                                    function o(r) {
                                        e !== r && t(r) && n.push(r);
                                        for (var i = 0, a = r.childNodes.length; i < a; i++) o(r.childNodes[i])
                                    }(e), n
                            },
                            j = function(t, n) {
                                var o = t.parentNode,
                                    r = e("<" + n + ">")[0];
                                return o.insertBefore(r, t), r.appendChild(t), r
                            },
                            K = function(e, t) {
                                var n = t.nextSibling,
                                    o = t.parentNode;
                                return n ? o.insertBefore(e, n) : o.appendChild(e), e
                            },
                            V = function(t, n) {
                                return e.each(n, function(e, n) {
                                    t.appendChild(n)
                                }), t
                            },
                            G = function(e) {
                                return 0 === e.offset
                            },
                            q = function(e) {
                                return e.offset === D(e.node)
                            },
                            _ = function(e) {
                                return G(e) || q(e)
                            },
                            X = function(e, t) {
                                for (; e && e !== t;) {
                                    if (0 !== Q(e)) return !1;
                                    e = e.parentNode
                                }
                                return !0
                            },
                            Y = function(e, t) {
                                if (!t) return !1;
                                for (; e && e !== t;) {
                                    if (Q(e) !== D(e.parentNode) - 1) return !1;
                                    e = e.parentNode
                                }
                                return !0
                            },
                            Z = function(e, t) {
                                return G(e) && X(e.node, t)
                            },
                            J = function(e, t) {
                                return q(e) && Y(e.node, t)
                            },
                            Q = function(e) {
                                for (var t = 0; e = e.previousSibling;) t += 1;
                                return t
                            },
                            ee = function(e) {
                                return !!(e && e.childNodes && e.childNodes.length)
                            },
                            te = function(e, n) {
                                var o, r;
                                if (0 === e.offset) {
                                    if (t(e.node)) return null;
                                    o = e.node.parentNode, r = Q(e.node)
                                } else ee(e.node) ? (o = e.node.childNodes[e.offset - 1], r = D(o)) : (o = e.node, r = n ? 0 : e.offset - 1);
                                return {
                                    node: o,
                                    offset: r
                                }
                            },
                            ne = function(e, n) {
                                var o, r;
                                if (D(e.node) === e.offset) {
                                    if (t(e.node)) return null;
                                    o = e.node.parentNode, r = Q(e.node) + 1
                                } else ee(e.node) ? (o = e.node.childNodes[e.offset], r = 0) : (o = e.node, r = n ? D(e.node) : e.offset + 1);
                                return {
                                    node: o,
                                    offset: r
                                }
                            },
                            oe = function(e, t) {
                                return e.node === t.node && e.offset === t.offset
                            },
                            re = function(e) {
                                if (a(e.node) || !ee(e.node) || I(e.node)) return !0;
                                var t = e.node.childNodes[e.offset - 1],
                                    n = e.node.childNodes[e.offset];
                                return !(t && !l(t) || n && !l(n))
                            },
                            ie = function(e, t) {
                                for (; e;) {
                                    if (t(e)) return e;
                                    e = te(e)
                                }
                                return null
                            },
                            ae = function(e, t) {
                                for (; e;) {
                                    if (t(e)) return e;
                                    e = ne(e)
                                }
                                return null
                            },
                            se = function(e) {
                                if (!a(e.node)) return !1;
                                var t = e.node.nodeValue.charAt(e.offset - 1);
                                return t && " " !== t && t !== p
                            },
                            le = function(e, t, n, o) {
                                for (var r = e; r && (n(r), !oe(r, t));) {
                                    var i = o && e.node !== r.node && t.node !== r.node;
                                    r = ne(r, i)
                                }
                            },
                            ce = function(e, t) {
                                return O(t, r.eq(e)).map(Q).reverse()
                            },
                            ue = function(e, t) {
                                for (var n = e, o = 0, r = t.length; o < r; o++) n = n.childNodes.length <= t[o] ? n.childNodes[n.childNodes.length - 1] : n.childNodes[t[o]];
                                return n
                            },
                            de = function(e, t) {
                                var n = t && t.isSkipPaddingBlankHTML,
                                    o = t && t.isNotSplitEdgePoint;
                                if (_(e) && (a(e.node) || o)) {
                                    if (G(e)) return e.node;
                                    if (q(e)) return e.node.nextSibling
                                }
                                if (a(e.node)) return e.node.splitText(e.offset);
                                var r = e.node.childNodes[e.offset],
                                    i = K(e.node.cloneNode(!1), e.node);
                                return V(i, U(r)), n || (H(e.node), H(i)), i
                            },
                            fe = function(e, t, n) {
                                var o = O(t.node, r.eq(e));
                                return o.length ? 1 === o.length ? de(t, n) : o.reduce(function(e, o) {
                                    return e === t.node && (e = de(t, n)), de({
                                        node: o,
                                        offset: e ? g.position(e) : D(o)
                                    }, n)
                                }) : null
                            },
                            he = function(e, t) {
                                var n, o, r = t ? c : S,
                                    a = O(e.node, r),
                                    s = i.last(a) || e.node;
                                r(s) ? (n = a[a.length - 2], o = s) : (n = s, o = n.parentNode);
                                var l = n && fe(n, e, {
                                    isSkipPaddingBlankHTML: t,
                                    isNotSplitEdgePoint: t
                                });
                                return l || o !== e.node || (l = e.node.childNodes[e.offset]), {
                                    rightNode: l,
                                    container: o
                                }
                            },
                            pe = function(e) {
                                return document.createElement(e)
                            },
                            ge = function(e) {
                                return document.createTextNode(e)
                            },
                            me = function(e, t) {
                                if (e && e.parentNode) {
                                    if (e.removeNode) return e.removeNode(t);
                                    var n = e.parentNode;
                                    if (!t) {
                                        var o, r, i = [];
                                        for (o = 0, r = e.childNodes.length; o < r; o++) i.push(e.childNodes[o]);
                                        for (o = 0, r = i.length; o < r; o++) n.insertBefore(i[o], e)
                                    }
                                    n.removeChild(e)
                                }
                            },
                            ve = function(e, n) {
                                for (; e && !t(e) && n(e);) {
                                    var o = e.parentNode;
                                    me(e), e = o
                                }
                            },
                            be = function(e, t) {
                                if (e.nodeName.toUpperCase() === t.toUpperCase()) return e;
                                var n = pe(t);
                                return e.style.cssText && (n.style.cssText = e.style.cssText), V(n, i.from(e.childNodes)), K(n, e), me(e), n
                            },
                            ye = o("TEXTAREA"),
                            we = function(e, t) {
                                var n = ye(e[0]) ? e.val() : e.html();
                                return t ? n.replace(/[\n\r]/g, "") : n
                            },
                            xe = function(t, n) {
                                var o = we(t);
                                if (n) {
                                    var r = /<(\/?)(\b(?!!)[^>\s]*)(.*?)(\s*\/?>)/g;
                                    o = o.replace(r, function(e, t, n) {
                                        n = n.toUpperCase();
                                        var o = /^DIV|^TD|^TH|^P|^LI|^H[1-7]/.test(n) && !!t,
                                            r = /^BLOCKQUOTE|^TABLE|^TBODY|^TR|^HR|^UL|^OL/.test(n);
                                        return e + (o || r ? "\n" : "")
                                    }), o = e.trim(o)
                                }
                                return o
                            },
                            Ce = function(t) {
                                var n = e(t),
                                    o = n.offset(),
                                    r = n.outerHeight(!0);
                                return {
                                    left: o.left,
                                    top: o.top + r
                                }
                            },
                            ke = function(e, t) {
                                Object.keys(t).forEach(function(n) {
                                    e.on(n, t[n])
                                })
                            },
                            Se = function(e, t) {
                                Object.keys(t).forEach(function(n) {
                                    e.off(n, t[n])
                                })
                            };
                        return {
                            NBSP_CHAR: p,
                            ZERO_WIDTH_NBSP_CHAR: "\ufeff",
                            blank: F,
                            emptyPara: "<p>" + F + "</p>",
                            makePredByNodeName: o,
                            isEditable: t,
                            isControlSizing: n,
                            isText: a,
                            isElement: s,
                            isVoid: l,
                            isPara: c,
                            isPurePara: m,
                            isHeading: u,
                            isInline: y,
                            isBlock: r.not(y),
                            isBodyInline: N,
                            isBody: M,
                            isParaInline: L,
                            isPre: d,
                            isList: w,
                            isTable: v,
                            isData: b,
                            isCell: C,
                            isBlockquote: k,
                            isBodyContainer: S,
                            isAnchor: T,
                            isDiv: o("DIV"),
                            isLi: f,
                            isBR: o("BR"),
                            isSpan: o("SPAN"),
                            isB: o("B"),
                            isU: o("U"),
                            isS: o("S"),
                            isI: o("I"),
                            isImg: o("IMG"),
                            isTextarea: ye,
                            isEmpty: I,
                            isEmptyAnchor: r.and(T, I),
                            isClosestSibling: A,
                            withClosestSiblings: E,
                            nodeLength: D,
                            isLeftEdgePoint: G,
                            isRightEdgePoint: q,
                            isEdgePoint: _,
                            isLeftEdgeOf: X,
                            isRightEdgeOf: Y,
                            isLeftEdgePointOf: Z,
                            isRightEdgePointOf: J,
                            prevPoint: te,
                            nextPoint: ne,
                            isSamePoint: oe,
                            isVisiblePoint: re,
                            prevPointUntil: ie,
                            nextPointUntil: ae,
                            isCharPoint: se,
                            walkPoint: le,
                            ancestor: P,
                            singleChildAncestor: R,
                            listAncestor: O,
                            lastAncestor: z,
                            listNext: U,
                            listPrev: B,
                            listDescendant: $,
                            commonAncestor: W,
                            wrap: j,
                            insertAfter: K,
                            appendChildNodes: V,
                            position: Q,
                            hasChildren: ee,
                            makeOffsetPath: ce,
                            fromOffsetPath: ue,
                            splitTree: fe,
                            splitPoint: he,
                            create: pe,
                            createText: ge,
                            remove: me,
                            removeWhile: ve,
                            replace: be,
                            html: xe,
                            value: we,
                            posFromPlaceholder: Ce,
                            attachEvents: ke,
                            detachEvents: Se
                        }
                    }(),
                    m = function(t, n) {
                        var o = this,
                            a = e.summernote.ui;
                        return this.memos = {}, this.modules = {}, this.layoutInfo = {}, this.options = n, this.initialize = function() {
                            return this.layoutInfo = a.createLayout(t, n), this._initialize(), t.hide(), this
                        }, this.destroy = function() {
                            this._destroy(), t.removeData("summernote"), a.removeLayout(t, this.layoutInfo)
                        }, this.reset = function() {
                            var e = o.isDisabled();
                            this.code(g.emptyPara), this._destroy(), this._initialize(), e && o.disable()
                        }, this._initialize = function() {
                            var t = e.extend({}, this.options.buttons);
                            Object.keys(t).forEach(function(e) {
                                o.memo("button." + e, t[e])
                            });
                            var n = e.extend({}, this.options.modules, e.summernote.plugins || {});
                            Object.keys(n).forEach(function(e) {
                                o.module(e, n[e], !0)
                            }), Object.keys(this.modules).forEach(function(e) {
                                o.initializeModule(e)
                            })
                        }, this._destroy = function() {
                            Object.keys(this.modules).reverse().forEach(function(e) {
                                o.removeModule(e)
                            }), Object.keys(this.memos).forEach(function(e) {
                                o.removeMemo(e)
                            })
                        }, this.code = function(e) {
                            var n = this.invoke("codeview.isActivated");
                            if (void 0 === e) return this.invoke("codeview.sync"), n ? this.layoutInfo.codable.val() : this.layoutInfo.editable.html();
                            n ? this.layoutInfo.codable.val(e) : this.layoutInfo.editable.html(e), t.val(e), this.triggerEvent("change", e)
                        }, this.isDisabled = function() {
                            return "false" === this.layoutInfo.editable.attr("contenteditable")
                        }, this.enable = function() {
                            this.layoutInfo.editable.attr("contenteditable", !0), this.invoke("toolbar.activate", !0)
                        }, this.disable = function() {
                            this.invoke("codeview.isActivated") && this.invoke("codeview.deactivate"), this.layoutInfo.editable.attr("contenteditable", !1), this.invoke("toolbar.deactivate", !0)
                        }, this.triggerEvent = function() {
                            var e = i.head(arguments),
                                n = i.tail(i.from(arguments)),
                                o = this.options.callbacks[r.namespaceToCamel(e, "on")];
                            o && o.apply(t[0], n), t.trigger("summernote." + e, n)
                        }, this.initializeModule = function(e) {
                            var n = this.modules[e];
                            n.shouldInitialize = n.shouldInitialize || r.ok, n.shouldInitialize() && (n.initialize && n.initialize(), n.events && g.attachEvents(t, n.events))
                        }, this.module = function(e, t, n) {
                            if (1 === arguments.length) return this.modules[e];
                            this.modules[e] = new t(this), n || this.initializeModule(e)
                        }, this.removeModule = function(e) {
                            var n = this.modules[e];
                            n.shouldInitialize() && (n.events && g.detachEvents(t, n.events), n.destroy && n.destroy()), delete this.modules[e]
                        }, this.memo = function(e, t) {
                            if (1 === arguments.length) return this.memos[e];
                            this.memos[e] = t
                        }, this.removeMemo = function(e) {
                            this.memos[e] && this.memos[e].destroy && this.memos[e].destroy(), delete this.memos[e]
                        }, this.createInvokeHandler = function(t, n) {
                            return function(r) {
                                r.preventDefault(), o.invoke(t, n || e(r.target).closest("[data-value]").data("value"))
                            }
                        }, this.invoke = function() {
                            var e = i.head(arguments),
                                t = i.tail(i.from(arguments)),
                                n = e.split("."),
                                o = n.length > 1,
                                r = o && i.head(n),
                                a = o ? i.last(n) : i.head(n),
                                s = this.modules[r || "editor"];
                            return !r && this[a] ? this[a].apply(this, t) : s && s[a] && s.shouldInitialize() ? s[a].apply(s, t) : void 0
                        }, this.initialize()
                    };
                e.fn.extend({
                    summernote: function() {
                        var t = e.type(i.head(arguments)),
                            n = "string" === t,
                            o = "object" === t,
                            r = o ? i.head(arguments) : {};
                        r = e.extend({}, e.summernote.options, r), r.langInfo = e.extend(!0, {}, e.summernote.lang["en-US"], e.summernote.lang[r.lang]), r.icons = e.extend(!0, {}, e.summernote.options.icons, r.icons), this.each(function(t, n) {
                            var o = e(n);
                            if (!o.data("summernote")) {
                                var i = new m(o, r);
                                o.data("summernote", i), o.data("summernote").triggerEvent("init", i.layoutInfo)
                            }
                        });
                        var a = this.first();
                        if (a.length) {
                            var s = a.data("summernote");
                            if (n) return s.invoke.apply(s, i.from(arguments));
                            r.focus && s.invoke("editor.focus")
                        }
                        return this
                    }
                });
                var v = function(t, n, o, r) {
                        this.render = function(i) {
                            var a = e(t);
                            if (o && o.contents && a.html(o.contents), o && o.className && a.addClass(o.className), o && o.data && e.each(o.data, function(e, t) {
                                    a.attr("data-" + e, t)
                                }), o && o.click && a.on("click", o.click), n) {
                                var s = a.find(".note-children-container");
                                n.forEach(function(e) {
                                    e.render(s.length ? s : a)
                                })
                            }
                            return r && r(a, o), o && o.callback && o.callback(a), i && i.append(a), a
                        }
                    },
                    b = {
                        create: function(t, n) {
                            return function() {
                                var r = e.isArray(arguments[0]) ? arguments[0] : [],
                                    i = "object" === o(arguments[1]) ? arguments[1] : arguments[0];
                                return i && i.children && (r = i.children), new v(t, r, i, n)
                            }
                        }
                    },
                    y = b.create('<div class="note-editor note-frame"/>'),
                    w = b.create('<div class="note-toolbar"/>'),
                    x = b.create('<div class="note-editing-area"/>'),
                    C = b.create('<textarea class="note-codable"/>'),
                    k = b.create('<div class="note-editable" contentEditable="true"/>'),
                    S = b.create(['<div class="note-statusbar">', '  <div class="note-resizebar">', '    <div class="note-icon-bar"/>', '    <div class="note-icon-bar"/>', '    <div class="note-icon-bar"/>', "  </div>", "</div>"].join("")),
                    T = b.create('<div class="note-editor"/>'),
                    L = b.create('<div class="note-editable" contentEditable="true"/>'),
                    N = b.create('<div class="note-btn-group btn-group">'),
                    M = b.create('<button type="button" class="note-btn btn -dark btn-sm" tabindex="-1">', function(e, t) {
                        t && t.tooltip && e.attr({
                            title: t.tooltip
                        }).tooltip({
                            container: "body",
                            trigger: "hover",
                            placement: "bottom"
                        })
                    }),
                    A = b.create('<div class="dropdown-menu -dark">', function(t, n) {
                        var o = e.isArray(n.items) ? n.items.map(function(e) {
                            return '<li><a href="#" data-value="' + ("string" == typeof e ? e : e.value || "") + '">' + (n.template ? n.template(e) : e) + "</a></li>"
                        }).join("") : n.items;
                        t.html(o)
                    }),
                    E = b.create('<div class="dropdown-menu -dark note-check">', function(t, n) {
                        var o = e.isArray(n.items) ? n.items.map(function(e) {
                            var t = "string" == typeof e ? e : e.value || "",
                                o = n.template ? n.template(e) : e;
                            return '<li><a href="#" data-value="' + t + '">' + H(n.checkClassName) + " " + o + "</a></li>"
                        }).join("") : n.items;
                        t.html(o)
                    }),
                    F = b.create('<div class="note-color-palette"/>', function(e, t) {
                        for (var n = [], o = 0, r = t.colors.length; o < r; o++) {
                            for (var i = t.eventName, a = t.colors[o], s = [], l = 0, c = a.length; l < c; l++) {
                                var u = a[l];
                                s.push(['<button type="button" class="note-color-btn"', 'style="background-color:', u, '" ', 'data-event="', i, '" ', 'data-value="', u, '" ', 'title="', u, '" ', 'data-toggle="button" tabindex="-1"></button>'].join(""))
                            }
                            n.push('<div class="note-color-row">' + s.join("") + "</div>")
                        }
                        e.html(n.join("")), e.find(".note-color-btn").tooltip({
                            container: "body",
                            trigger: "hover",
                            placement: "bottom"
                        })
                    }),
                    D = b.create('<div class="modal -primary" aria-hidden="false" tabindex="-1"/>', function(e, t) {
                        t.fade && e.addClass("fade"), e.html(['<div class="modal-dialog">', '  <div class="modal-content">', t.title ? '    <div class="modal-header">      <button type="button" class="close _text-white" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>      <h4 class="modal-title">' + t.title + "</h4>    </div>" : "", '    <div class="modal-body">' + t.body + "</div>", t.footer ? '    <div class="modal-footer">' + t.footer + "</div>" : "", "  </div>", "</div>"].join(""))
                    }),
                    I = b.create(['<div class="note-popover popover in">', '  <div class="arrow"/>', '  <div class="popover-content note-children-container"/>', "</div>"].join(""), function(e, t) {
                        var n = void 0 !== t.direction ? t.direction : "bottom";
                        e.addClass(n), t.hideArrow && e.find(".arrow").hide()
                    }),
                    H = function(e, t) {
                        return "<" + (t = t || "i") + ' class="' + e + '"/>'
                    },
                    P = {
                        editor: y,
                        toolbar: w,
                        editingArea: x,
                        codable: C,
                        editable: k,
                        statusbar: S,
                        airEditor: T,
                        airEditable: L,
                        buttonGroup: N,
                        button: M,
                        dropdown: A,
                        dropdownCheck: E,
                        palette: F,
                        dialog: D,
                        popover: I,
                        icon: H,
                        toggleBtn: function(e, t) {
                            e.toggleClass("disabled", !t), e.attr("disabled", !t)
                        },
                        toggleBtnActive: function(e, t) {
                            e.toggleClass("active", t)
                        },
                        onDialogShown: function(e, t) {
                            e.one("shown.bs.modal", t)
                        },
                        onDialogHidden: function(e, t) {
                            e.one("hidden.bs.modal", t)
                        },
                        showDialog: function(e) {
                            e.modal("show")
                        },
                        hideDialog: function(e) {
                            e.modal("hide")
                        },
                        createLayout: function(e, t) {
                            var n = (t.airMode ? P.airEditor([P.editingArea([P.airEditable()])]) : P.editor([P.toolbar(), P.editingArea([P.codable(), P.editable()]), P.statusbar()])).render();
                            return n.insertAfter(e), {
                                note: e,
                                editor: n,
                                toolbar: n.find(".note-toolbar"),
                                editingArea: n.find(".note-editing-area"),
                                editable: n.find(".note-editable"),
                                codable: n.find(".note-codable"),
                                statusbar: n.find(".note-statusbar")
                            }
                        },
                        removeLayout: function(e, t) {
                            e.html(t.editable.html()), t.editor.remove(), e.show()
                        }
                    };
                e.summernote = e.summernote || {
                    lang: {}
                }, e.extend(e.summernote.lang, {
                    "en-US": {
                        font: {
                            bold: "Bold",
                            italic: "Italic",
                            underline: "Underline",
                            clear: "Remove Font Style",
                            height: "Line Height",
                            name: "Font Family",
                            strikethrough: "Strikethrough",
                            subscript: "Subscript",
                            superscript: "Superscript",
                            size: "Font Size"
                        },
                        image: {
                            image: "Picture",
                            insert: "Insert Image",
                            resizeFull: "Resize Full",
                            resizeHalf: "Resize Half",
                            resizeQuarter: "Resize Quarter",
                            floatLeft: "Float Left",
                            floatRight: "Float Right",
                            floatNone: "Float None",
                            shapeRounded: "Shape: Rounded",
                            shapeCircle: "Shape: Circle",
                            shapeThumbnail: "Shape: Thumbnail",
                            shapeNone: "Shape: None",
                            dragImageHere: "Drag image or text here",
                            dropImage: "Drop image or Text",
                            selectFromFiles: "Select from files",
                            maximumFileSize: "Maximum file size",
                            maximumFileSizeError: "Maximum file size exceeded.",
                            url: "Image URL",
                            remove: "Remove Image"
                        },
                        video: {
                            video: "Video",
                            videoLink: "Video Link",
                            insert: "Insert Video",
                            url: "Video URL?",
                            providers: "(YouTube, Vimeo, Vine, Instagram, DailyMotion or Youku)"
                        },
                        link: {
                            link: "Link",
                            insert: "Insert Link",
                            unlink: "Unlink",
                            edit: "Edit",
                            textToDisplay: "Text to display",
                            url: "To what URL should this link go?",
                            openInNewWindow: "Open in new window"
                        },
                        table: {
                            table: "Table"
                        },
                        hr: {
                            insert: "Insert Horizontal Rule"
                        },
                        style: {
                            style: "Style",
                            normal: "Normal",
                            blockquote: "Quote",
                            pre: "Code",
                            h1: "Header 1",
                            h2: "Header 2",
                            h3: "Header 3",
                            h4: "Header 4",
                            h5: "Header 5",
                            h6: "Header 6"
                        },
                        lists: {
                            unordered: "Unordered list",
                            ordered: "Ordered list"
                        },
                        options: {
                            help: "Help",
                            fullscreen: "Full Screen",
                            codeview: "Code View"
                        },
                        paragraph: {
                            paragraph: "Paragraph",
                            outdent: "Outdent",
                            indent: "Indent",
                            left: "Align left",
                            center: "Align center",
                            right: "Align right",
                            justify: "Justify full"
                        },
                        color: {
                            recent: "Recent Color",
                            more: "More Color",
                            background: "Background Color",
                            foreground: "Foreground Color",
                            transparent: "Transparent",
                            setTransparent: "Set transparent",
                            reset: "Reset",
                            resetToDefault: "Reset to default"
                        },
                        shortcut: {
                            shortcuts: "Keyboard shortcuts",
                            close: "Close",
                            textFormatting: "Text formatting",
                            action: "Action",
                            paragraphFormatting: "Paragraph formatting",
                            documentStyle: "Document Style",
                            extraKeys: "Extra keys"
                        },
                        help: {
                            insertParagraph: "Insert Paragraph",
                            undo: "Undoes the last command",
                            redo: "Redoes the last command",
                            tab: "Tab",
                            untab: "Untab",
                            bold: "Set a bold style",
                            italic: "Set a italic style",
                            underline: "Set a underline style",
                            strikethrough: "Set a strikethrough style",
                            removeFormat: "Clean a style",
                            justifyLeft: "Set left align",
                            justifyCenter: "Set center align",
                            justifyRight: "Set right align",
                            justifyFull: "Set full align",
                            insertUnorderedList: "Toggle unordered list",
                            insertOrderedList: "Toggle ordered list",
                            outdent: "Outdent on current paragraph",
                            indent: "Indent on current paragraph",
                            formatPara: "Change current block's format as a paragraph(P tag)",
                            formatH1: "Change current block's format as H1",
                            formatH2: "Change current block's format as H2",
                            formatH3: "Change current block's format as H3",
                            formatH4: "Change current block's format as H4",
                            formatH5: "Change current block's format as H5",
                            formatH6: "Change current block's format as H6",
                            insertHorizontalRule: "Insert horizontal rule",
                            "linkDialog.show": "Show Link Dialog"
                        },
                        history: {
                            undo: "Undo",
                            redo: "Redo"
                        },
                        specialChar: {
                            specialChar: "SPECIAL CHARACTERS",
                            select: "Select Special characters"
                        }
                    }
                });
                var R, O = function() {
                        var e = {
                            BACKSPACE: 8,
                            TAB: 9,
                            ENTER: 13,
                            SPACE: 32,
                            LEFT: 37,
                            UP: 38,
                            RIGHT: 39,
                            DOWN: 40,
                            NUM0: 48,
                            NUM1: 49,
                            NUM2: 50,
                            NUM3: 51,
                            NUM4: 52,
                            NUM5: 53,
                            NUM6: 54,
                            NUM7: 55,
                            NUM8: 56,
                            B: 66,
                            E: 69,
                            I: 73,
                            J: 74,
                            K: 75,
                            L: 76,
                            R: 82,
                            S: 83,
                            U: 85,
                            V: 86,
                            Y: 89,
                            Z: 90,
                            SLASH: 191,
                            LEFTBRACKET: 219,
                            BACKSLASH: 220,
                            RIGHTBRACKET: 221
                        };
                        return {
                            isEdit: function(t) {
                                return i.contains([e.BACKSPACE, e.TAB, e.ENTER, e.SPACE], t)
                            },
                            isMove: function(t) {
                                return i.contains([e.LEFT, e.UP, e.RIGHT, e.DOWN], t)
                            },
                            nameFromCode: r.invertObject(e),
                            code: e
                        }
                    }(),
                    z = function() {
                        var t = function(e, t) {
                                var n, o, r = e.parentElement(),
                                    a = document.body.createTextRange(),
                                    s = i.from(r.childNodes);
                                for (n = 0; n < s.length; n++)
                                    if (!g.isText(s[n])) {
                                        if (a.moveToElementText(s[n]), a.compareEndPoints("StartToStart", e) >= 0) break;
                                        o = s[n]
                                    } if (0 !== n && g.isText(s[n - 1])) {
                                    var l = document.body.createTextRange(),
                                        c = null;
                                    l.moveToElementText(o || r), l.collapse(!o), c = o ? o.nextSibling : r.firstChild;
                                    var u = e.duplicate();
                                    u.setEndPoint("StartToStart", l);
                                    for (var d = u.text.replace(/[\r\n]/g, "").length; d > c.nodeValue.length && c.nextSibling;) d -= c.nodeValue.length, c = c.nextSibling;
                                    c.nodeValue, t && c.nextSibling && g.isText(c.nextSibling) && d === c.nodeValue.length && (d -= c.nodeValue.length, c = c.nextSibling), r = c, n = d
                                }
                                return {
                                    cont: r,
                                    offset: n
                                }
                            },
                            n = function(e) {
                                var t = document.body.createTextRange(),
                                    n = function e(t, n) {
                                        var o, a;
                                        if (g.isText(t)) {
                                            var s = g.listPrev(t, r.not(g.isText)),
                                                l = i.last(s).previousSibling;
                                            o = l || t.parentNode, n += i.sum(i.tail(s), g.nodeLength), a = !l
                                        } else {
                                            if (o = t.childNodes[n] || t, g.isText(o)) return e(o, 0);
                                            n = 0, a = !1
                                        }
                                        return {
                                            node: o,
                                            collapseToStart: a,
                                            offset: n
                                        }
                                    }(e.node, e.offset);
                                return t.moveToElementText(n.node), t.collapse(n.collapseToStart), t.moveStart("character", n.offset), t
                            },
                            o = function t(o, a, s, l) {
                                this.sc = o, this.so = a, this.ec = s, this.eo = l;
                                var c = function() {
                                    if (h.isW3CRangeSupport) {
                                        var e = document.createRange();
                                        return e.setStart(o, a), e.setEnd(s, l), e
                                    }
                                    var t = n({
                                        node: o,
                                        offset: a
                                    });
                                    return t.setEndPoint("EndToEnd", n({
                                        node: s,
                                        offset: l
                                    })), t
                                };
                                this.getPoints = function() {
                                    return {
                                        sc: o,
                                        so: a,
                                        ec: s,
                                        eo: l
                                    }
                                }, this.getStartPoint = function() {
                                    return {
                                        node: o,
                                        offset: a
                                    }
                                }, this.getEndPoint = function() {
                                    return {
                                        node: s,
                                        offset: l
                                    }
                                }, this.select = function() {
                                    var e = c();
                                    if (h.isW3CRangeSupport) {
                                        var t = document.getSelection();
                                        t.rangeCount > 0 && t.removeAllRanges(), t.addRange(e)
                                    } else e.select();
                                    return this
                                }, this.scrollIntoView = function(t) {
                                    var n = e(t).height();
                                    return t.scrollTop + n < this.sc.offsetTop && (t.scrollTop += Math.abs(t.scrollTop + n - this.sc.offsetTop)), this
                                }, this.normalize = function() {
                                    var e = function(e, t) {
                                            if (g.isVisiblePoint(e) && !g.isEdgePoint(e) || g.isVisiblePoint(e) && g.isRightEdgePoint(e) && !t || g.isVisiblePoint(e) && g.isLeftEdgePoint(e) && t || g.isVisiblePoint(e) && g.isBlock(e.node) && g.isEmpty(e.node)) return e;
                                            var n = g.ancestor(e.node, g.isBlock);
                                            if ((g.isLeftEdgePointOf(e, n) || g.isVoid(g.prevPoint(e).node)) && !t || (g.isRightEdgePointOf(e, n) || g.isVoid(g.nextPoint(e).node)) && t) {
                                                if (g.isVisiblePoint(e)) return e;
                                                t = !t
                                            }
                                            return (t ? g.nextPointUntil(g.nextPoint(e), g.isVisiblePoint) : g.prevPointUntil(g.prevPoint(e), g.isVisiblePoint)) || e
                                        },
                                        n = e(this.getEndPoint(), !1),
                                        o = this.isCollapsed() ? n : e(this.getStartPoint(), !0);
                                    return new t(o.node, o.offset, n.node, n.offset)
                                }, this.nodes = function(e, t) {
                                    e = e || r.ok;
                                    var n = t && t.includeAncestor,
                                        o = t && t.fullyContains,
                                        a = this.getStartPoint(),
                                        s = this.getEndPoint(),
                                        l = [],
                                        c = [];
                                    return g.walkPoint(a, s, function(t) {
                                        if (!g.isEditable(t.node)) {
                                            var r;
                                            o ? (g.isLeftEdgePoint(t) && c.push(t.node), g.isRightEdgePoint(t) && i.contains(c, t.node) && (r = t.node)) : r = n ? g.ancestor(t.node, e) : t.node, r && e(r) && l.push(r)
                                        }
                                    }, !0), i.unique(l)
                                }, this.commonAncestor = function() {
                                    return g.commonAncestor(o, s)
                                }, this.expand = function(e) {
                                    var n = g.ancestor(o, e),
                                        r = g.ancestor(s, e);
                                    if (!n && !r) return new t(o, a, s, l);
                                    var i = this.getPoints();
                                    return n && (i.sc = n, i.so = 0), r && (i.ec = r, i.eo = g.nodeLength(r)), new t(i.sc, i.so, i.ec, i.eo)
                                }, this.collapse = function(e) {
                                    return e ? new t(o, a, o, a) : new t(s, l, s, l)
                                }, this.splitText = function() {
                                    var e = o === s,
                                        n = this.getPoints();
                                    return g.isText(s) && !g.isEdgePoint(this.getEndPoint()) && s.splitText(l), g.isText(o) && !g.isEdgePoint(this.getStartPoint()) && (n.sc = o.splitText(a), n.so = 0, e && (n.ec = n.sc, n.eo = l - a)), new t(n.sc, n.so, n.ec, n.eo)
                                }, this.deleteContents = function() {
                                    if (this.isCollapsed()) return this;
                                    var n = this.splitText(),
                                        o = n.nodes(null, {
                                            fullyContains: !0
                                        }),
                                        r = g.prevPointUntil(n.getStartPoint(), function(e) {
                                            return !i.contains(o, e.node)
                                        }),
                                        a = [];
                                    return e.each(o, function(e, t) {
                                        var n = t.parentNode;
                                        r.node !== n && 1 === g.nodeLength(n) && a.push(n), g.remove(t, !1)
                                    }), e.each(a, function(e, t) {
                                        g.remove(t, !1)
                                    }), new t(r.node, r.offset, r.node, r.offset).normalize()
                                };
                                var u = function(e) {
                                    return function() {
                                        var t = g.ancestor(o, e);
                                        return !!t && t === g.ancestor(s, e)
                                    }
                                };
                                this.isOnEditable = u(g.isEditable), this.isOnList = u(g.isList), this.isOnAnchor = u(g.isAnchor), this.isOnCell = u(g.isCell), this.isOnData = u(g.isData), this.isLeftEdgeOf = function(e) {
                                    if (!g.isLeftEdgePoint(this.getStartPoint())) return !1;
                                    var t = g.ancestor(this.sc, e);
                                    return t && g.isLeftEdgeOf(this.sc, t)
                                }, this.isCollapsed = function() {
                                    return o === s && a === l
                                }, this.wrapBodyInlineWithPara = function() {
                                    if (g.isBodyContainer(o) && g.isEmpty(o)) return o.innerHTML = g.emptyPara, new t(o.firstChild, 0, o.firstChild, 0);
                                    var e = this.normalize();
                                    if (g.isParaInline(o) || g.isPara(o)) return e;
                                    var n;
                                    if (g.isInline(e.sc)) {
                                        var a = g.listAncestor(e.sc, r.not(g.isInline));
                                        n = i.last(a), g.isInline(n) || (n = a[a.length - 2] || e.sc.childNodes[e.so])
                                    } else n = e.sc.childNodes[e.so > 0 ? e.so - 1 : 0];
                                    var s = g.listPrev(n, g.isParaInline).reverse();
                                    if (s = s.concat(g.listNext(n.nextSibling, g.isParaInline)), s.length) {
                                        var l = g.wrap(i.head(s), "p");
                                        g.appendChildNodes(l, i.tail(s))
                                    }
                                    return this.normalize()
                                }, this.insertNode = function(e) {
                                    var t = this.wrapBodyInlineWithPara().deleteContents(),
                                        n = g.splitPoint(t.getStartPoint(), g.isInline(e));
                                    return n.rightNode ? n.rightNode.parentNode.insertBefore(e, n.rightNode) : n.container.appendChild(e), e
                                }, this.pasteHTML = function(t) {
                                    var n = e("<div></div>").html(t)[0],
                                        o = i.from(n.childNodes),
                                        r = this.wrapBodyInlineWithPara().deleteContents();
                                    return o.reverse().map(function(e) {
                                        return r.insertNode(e)
                                    }).reverse()
                                }, this.toString = function() {
                                    var e = c();
                                    return h.isW3CRangeSupport ? e.toString() : e.text
                                }, this.getWordRange = function(e) {
                                    var n = this.getEndPoint();
                                    if (!g.isCharPoint(n)) return this;
                                    var o = g.prevPointUntil(n, function(e) {
                                        return !g.isCharPoint(e)
                                    });
                                    return e && (n = g.nextPointUntil(n, function(e) {
                                        return !g.isCharPoint(e)
                                    })), new t(o.node, o.offset, n.node, n.offset)
                                }, this.bookmark = function(e) {
                                    return {
                                        s: {
                                            path: g.makeOffsetPath(e, o),
                                            offset: a
                                        },
                                        e: {
                                            path: g.makeOffsetPath(e, s),
                                            offset: l
                                        }
                                    }
                                }, this.paraBookmark = function(e) {
                                    return {
                                        s: {
                                            path: i.tail(g.makeOffsetPath(i.head(e), o)),
                                            offset: a
                                        },
                                        e: {
                                            path: i.tail(g.makeOffsetPath(i.last(e), s)),
                                            offset: l
                                        }
                                    }
                                }, this.getClientRects = function() {
                                    return c().getClientRects()
                                }
                            };
                        return {
                            create: function(e, t, n, r) {
                                if (4 === arguments.length) return new o(e, t, n, r);
                                if (2 === arguments.length) return n = e, r = t, new o(e, t, n, r);
                                var i = this.createFromSelection();
                                return i || 1 !== arguments.length ? i : (i = this.createFromNode(arguments[0]), i.collapse(g.emptyPara === arguments[0].innerHTML))
                            },
                            createFromSelection: function() {
                                var e, n, r, i;
                                if (h.isW3CRangeSupport) {
                                    var a = document.getSelection();
                                    if (!a || 0 === a.rangeCount) return null;
                                    if (g.isBody(a.anchorNode)) return null;
                                    var s = a.getRangeAt(0);
                                    e = s.startContainer, n = s.startOffset, r = s.endContainer, i = s.endOffset
                                } else {
                                    var l = document.selection.createRange(),
                                        c = l.duplicate();
                                    c.collapse(!1);
                                    var u = l;
                                    u.collapse(!0);
                                    var d = t(u, !0),
                                        f = t(c, !1);
                                    g.isText(d.node) && g.isLeftEdgePoint(d) && g.isTextNode(f.node) && g.isRightEdgePoint(f) && f.node.nextSibling === d.node && (d = f), e = d.cont, n = d.offset, r = f.cont, i = f.offset
                                }
                                return new o(e, n, r, i)
                            },
                            createFromNode: function(e) {
                                var t = e,
                                    n = 0,
                                    o = e,
                                    r = g.nodeLength(o);
                                return g.isVoid(t) && (n = g.listPrev(t).length - 1, t = t.parentNode), g.isBR(o) ? (r = g.listPrev(o).length - 1, o = o.parentNode) : g.isVoid(o) && (r = g.listPrev(o).length, o = o.parentNode), this.create(t, n, o, r)
                            },
                            createFromNodeBefore: function(e) {
                                return this.createFromNode(e).collapse(!0)
                            },
                            createFromNodeAfter: function(e) {
                                return this.createFromNode(e).collapse()
                            },
                            createFromBookmark: function(e, t) {
                                var n = g.fromOffsetPath(e, t.s.path),
                                    r = t.s.offset,
                                    i = g.fromOffsetPath(e, t.e.path),
                                    a = t.e.offset;
                                return new o(n, r, i, a)
                            },
                            createFromParaBookmark: function(e, t) {
                                var n = e.s.offset,
                                    r = e.e.offset,
                                    a = g.fromOffsetPath(i.head(t), e.s.path),
                                    s = g.fromOffsetPath(i.last(t), e.e.path);
                                return new o(a, n, s, r)
                            }
                        }
                    }(),
                    W = function() {
                        return {
                            readFileAsDataURL: function(t) {
                                return e.Deferred(function(n) {
                                    e.extend(new FileReader, {
                                        onload: function(e) {
                                            var t = e.target.result;
                                            n.resolve(t)
                                        },
                                        onerror: function() {
                                            n.reject(this)
                                        }
                                    }).readAsDataURL(t)
                                }).promise()
                            },
                            createImage: function(t) {
                                return e.Deferred(function(n) {
                                    var o = e("<img>");
                                    o.one("load", function() {
                                        o.off("error abort"), n.resolve(o)
                                    }).one("error abort", function() {
                                        o.off("load").detach(), n.reject(o)
                                    }).css({
                                        display: "none"
                                    }).appendTo(document.body).attr("src", t)
                                }).promise()
                            }
                        }
                    }(),
                    B = function(e) {
                        var t = [],
                            n = -1,
                            o = e[0],
                            r = function() {
                                var t = z.create(o),
                                    n = {
                                        s: {
                                            path: [],
                                            offset: 0
                                        },
                                        e: {
                                            path: [],
                                            offset: 0
                                        }
                                    };
                                return {
                                    contents: e.html(),
                                    bookmark: t ? t.bookmark(o) : n
                                }
                            },
                            i = function(t) {
                                null !== t.contents && e.html(t.contents), null !== t.bookmark && z.createFromBookmark(o, t.bookmark).select()
                            };
                        this.rewind = function() {
                            e.html() !== t[n].contents && this.recordUndo(), n = 0, i(t[n])
                        }, this.reset = function() {
                            t = [], n = -1, e.html(""), this.recordUndo()
                        }, this.undo = function() {
                            e.html() !== t[n].contents && this.recordUndo(), 0 < n && (n--, i(t[n]))
                        }, this.redo = function() {
                            t.length - 1 > n && (n++, i(t[n]))
                        }, this.recordUndo = function() {
                            n++, t.length > n && (t = t.slice(0, n)), t.push(r())
                        }
                    },
                    U = function() {
                        var t = function(t, n) {
                            if (h.jqueryVersion < 1.9) {
                                var o = {};
                                return e.each(n, function(e, n) {
                                    o[n] = t.css(n)
                                }), o
                            }
                            return t.css.call(t, n)
                        };
                        this.fromNode = function(e) {
                            var n = ["font-family", "font-size", "text-align", "list-style-type", "line-height"],
                                o = t(e, n) || {};
                            return o["font-size"] = parseInt(o["font-size"], 10), o
                        }, this.stylePara = function(t, n) {
                            e.each(t.nodes(g.isPara, {
                                includeAncestor: !0
                            }), function(t, o) {
                                e(o).css(n)
                            })
                        }, this.styleNodes = function(t, n) {
                            t = t.splitText();
                            var o = n && n.nodeName || "SPAN",
                                a = !(!n || !n.expandClosestSibling),
                                s = !(!n || !n.onlyPartialContains);
                            if (t.isCollapsed()) return [t.insertNode(g.create(o))];
                            var l = g.makePredByNodeName(o),
                                c = t.nodes(g.isText, {
                                    fullyContains: !0
                                }).map(function(e) {
                                    return g.singleChildAncestor(e, l) || g.wrap(e, o)
                                });
                            if (a) {
                                if (s) {
                                    var u = t.nodes();
                                    l = r.and(l, function(e) {
                                        return i.contains(u, e)
                                    })
                                }
                                return c.map(function(t) {
                                    var n = g.withClosestSiblings(t, l),
                                        o = i.head(n),
                                        r = i.tail(n);
                                    return e.each(r, function(e, t) {
                                        g.appendChildNodes(o, t.childNodes), g.remove(t)
                                    }), i.head(n)
                                })
                            }
                            return c
                        }, this.current = function(t) {
                            var n = e(g.isElement(t.sc) ? t.sc : t.sc.parentNode),
                                o = this.fromNode(n);
                            try {
                                o = e.extend(o, {
                                    "font-bold": document.queryCommandState("bold") ? "bold" : "normal",
                                    "font-italic": document.queryCommandState("italic") ? "italic" : "normal",
                                    "font-underline": document.queryCommandState("underline") ? "underline" : "normal",
                                    "font-subscript": document.queryCommandState("subscript") ? "subscript" : "normal",
                                    "font-superscript": document.queryCommandState("superscript") ? "superscript" : "normal",
                                    "font-strikethrough": document.queryCommandState("strikethrough") ? "strikethrough" : "normal"
                                })
                            } catch (e) {}
                            if (t.isOnList()) {
                                var r = ["circle", "disc", "disc-leading-zero", "square"],
                                    i = e.inArray(o["list-style-type"], r) > -1;
                                o["list-style"] = i ? "unordered" : "ordered"
                            } else o["list-style"] = "none";
                            var a = g.ancestor(t.sc, g.isPara);
                            if (a && a.style["line-height"]) o["line-height"] = a.style.lineHeight;
                            else {
                                var s = parseInt(o["line-height"], 10) / parseInt(o["font-size"], 10);
                                o["line-height"] = s.toFixed(1)
                            }
                            return o.anchor = t.isOnAnchor() && g.ancestor(t.sc, g.isAnchor), o.ancestors = g.listAncestor(t.sc, g.isEditable), o.range = t, o
                        }
                    },
                    $ = function() {
                        var t = this;
                        this.insertOrderedList = function(e) {
                            this.toggleList("OL", e)
                        }, this.insertUnorderedList = function(e) {
                            this.toggleList("UL", e)
                        }, this.indent = function(t) {
                            var n = this,
                                o = z.create(t).wrapBodyInlineWithPara(),
                                a = o.nodes(g.isPara, {
                                    includeAncestor: !0
                                }),
                                s = i.clusterBy(a, r.peq2("parentNode"));
                            e.each(s, function(t, o) {
                                var r = i.head(o);
                                g.isLi(r) ? n.wrapList(o, r.parentNode.nodeName) : e.each(o, function(t, n) {
                                    e(n).css("marginLeft", function(e, t) {
                                        return (parseInt(t, 10) || 0) + 25
                                    })
                                })
                            }), o.select()
                        }, this.outdent = function(t) {
                            var n = this,
                                o = z.create(t).wrapBodyInlineWithPara(),
                                a = o.nodes(g.isPara, {
                                    includeAncestor: !0
                                }),
                                s = i.clusterBy(a, r.peq2("parentNode"));
                            e.each(s, function(t, o) {
                                var r = i.head(o);
                                g.isLi(r) ? n.releaseList([o]) : e.each(o, function(t, n) {
                                    e(n).css("marginLeft", function(e, t) {
                                        return t = parseInt(t, 10) || 0, t > 25 ? t - 25 : ""
                                    })
                                })
                            }), o.select()
                        }, this.toggleList = function(n, o) {
                            var a = z.create(o).wrapBodyInlineWithPara(),
                                s = a.nodes(g.isPara, {
                                    includeAncestor: !0
                                }),
                                l = a.paraBookmark(s),
                                c = i.clusterBy(s, r.peq2("parentNode"));
                            if (i.find(s, g.isPurePara)) {
                                var u = [];
                                e.each(c, function(e, o) {
                                    u = u.concat(t.wrapList(o, n))
                                }), s = u
                            } else {
                                var d = a.nodes(g.isList, {
                                    includeAncestor: !0
                                }).filter(function(t) {
                                    return !e.nodeName(t, n)
                                });
                                d.length ? e.each(d, function(e, t) {
                                    g.replace(t, n)
                                }) : s = this.releaseList(c, !0)
                            }
                            z.createFromParaBookmark(l, s).select()
                        }, this.wrapList = function(e, t) {
                            var n = i.head(e),
                                o = i.last(e),
                                r = g.isList(n.previousSibling) && n.previousSibling,
                                a = g.isList(o.nextSibling) && o.nextSibling,
                                s = r || g.insertAfter(g.create(t || "UL"), o);
                            return e = e.map(function(e) {
                                return g.isPurePara(e) ? g.replace(e, "LI") : e
                            }), g.appendChildNodes(s, e), a && (g.appendChildNodes(s, i.from(a.childNodes)), g.remove(a)), e
                        }, this.releaseList = function(t, n) {
                            var o = [];
                            return e.each(t, function(t, r) {
                                var a = i.head(r),
                                    s = i.last(r),
                                    l = n ? g.lastAncestor(a, g.isList) : a.parentNode,
                                    c = l.childNodes.length > 1 ? g.splitTree(l, {
                                        node: s.parentNode,
                                        offset: g.position(s) + 1
                                    }, {
                                        isSkipPaddingBlankHTML: !0
                                    }) : null,
                                    u = g.splitTree(l, {
                                        node: a.parentNode,
                                        offset: g.position(a)
                                    }, {
                                        isSkipPaddingBlankHTML: !0
                                    });
                                r = n ? g.listDescendant(u, g.isLi) : i.from(u.childNodes).filter(g.isLi), !n && g.isList(l.parentNode) || (r = r.map(function(e) {
                                    return g.replace(e, "P")
                                })), e.each(i.from(r).reverse(), function(e, t) {
                                    g.insertAfter(t, l)
                                });
                                var d = i.compact([l, u, c]);
                                e.each(d, function(t, n) {
                                    var o = [n].concat(g.listDescendant(n, g.isList));
                                    e.each(o.reverse(), function(e, t) {
                                        g.nodeLength(t) || g.remove(t, !0)
                                    })
                                }), o = o.concat(r)
                            }), o
                        }
                    },
                    j = function() {
                        var t = new $;
                        this.insertTab = function(e, t) {
                            var n = g.createText(new Array(t + 1).join(g.NBSP_CHAR));
                            e = e.deleteContents(), e.insertNode(n, !0), e = z.create(n, t), e.select()
                        }, this.insertParagraph = function(n) {
                            var o = z.create(n);
                            o = o.deleteContents(), o = o.wrapBodyInlineWithPara();
                            var r, i = g.ancestor(o.sc, g.isPara);
                            if (i) {
                                if (g.isEmpty(i) && g.isLi(i)) return void t.toggleList(i.parentNode.nodeName);
                                if (g.isEmpty(i) && g.isPara(i) && g.isBlockquote(i.parentNode)) g.insertAfter(i, i.parentNode), r = i;
                                else {
                                    r = g.splitTree(i, o.getStartPoint());
                                    var a = g.listDescendant(i, g.isEmptyAnchor);
                                    a = a.concat(g.listDescendant(r, g.isEmptyAnchor)), e.each(a, function(e, t) {
                                        g.remove(t)
                                    }), (g.isHeading(r) || g.isPre(r)) && g.isEmpty(r) && (r = g.replace(r, "p"))
                                }
                            } else {
                                var s = o.sc.childNodes[o.so];
                                r = e(g.emptyPara)[0], s ? o.sc.insertBefore(r, s) : o.sc.appendChild(r)
                            }
                            z.create(r, 0).normalize().select().scrollIntoView(n)
                        }
                    },
                    K = function() {
                        this.tab = function(e, t) {
                            var n = g.ancestor(e.commonAncestor(), g.isCell),
                                o = g.ancestor(n, g.isTable),
                                r = g.listDescendant(o, g.isCell),
                                a = i[t ? "prev" : "next"](r, n);
                            a && z.create(a, 0).select()
                        }, this.createTable = function(t, n, o) {
                            for (var r, i = [], a = 0; a < t; a++) i.push("<td>" + g.blank + "</td>");
                            r = i.join("");
                            for (var s, l = [], c = 0; c < n; c++) l.push("<tr>" + r + "</tr>");
                            s = l.join("");
                            var u = e("<table>" + s + "</table>");
                            return o && o.tableClassName && u.addClass(o.tableClassName), u[0]
                        }
                    },
                    V = function(t) {
                        var n = this,
                            o = t.layoutInfo.note,
                            a = t.layoutInfo.editor,
                            s = t.layoutInfo.editable,
                            l = t.options,
                            c = l.langInfo,
                            u = s[0],
                            d = null,
                            f = new U,
                            p = new K,
                            m = new j,
                            v = new $,
                            b = new B(s);
                        this.initialize = function() {
                            s.on("keydown", function(e) {
                                e.keyCode === O.code.ENTER && t.triggerEvent("enter", e), t.triggerEvent("keydown", e), e.isDefaultPrevented() || (l.shortcuts ? n.handleKeyMap(e) : n.preventDefaultEditableShortCuts(e))
                            }).on("keyup", function(e) {
                                t.triggerEvent("keyup", e)
                            }).on("focus", function(e) {
                                t.triggerEvent("focus", e)
                            }).on("blur", function(e) {
                                t.triggerEvent("blur", e)
                            }).on("mousedown", function(e) {
                                t.triggerEvent("mousedown", e)
                            }).on("mouseup", function(e) {
                                t.triggerEvent("mouseup", e)
                            }).on("scroll", function(e) {
                                t.triggerEvent("scroll", e)
                            }).on("paste", function(e) {
                                t.triggerEvent("paste", e)
                            }), s.html(g.html(o) || g.emptyPara);
                            var e = h.isMSIE ? "DOMCharacterDataModified DOMSubtreeModified DOMNodeInserted" : "input";
                            s.on(e, r.debounce(function() {
                                t.triggerEvent("change", s.html())
                            }, 250)), a.on("focusin", function(e) {
                                t.triggerEvent("focusin", e)
                            }).on("focusout", function(e) {
                                t.triggerEvent("focusout", e)
                            }), l.airMode || (l.width && a.outerWidth(l.width), l.height && s.outerHeight(l.height), l.maxHeight && s.css("max-height", l.maxHeight), l.minHeight && s.css("min-height", l.minHeight)), b.recordUndo()
                        }, this.destroy = function() {
                            s.off()
                        }, this.handleKeyMap = function(e) {
                            var n = l.keyMap[h.isMac ? "mac" : "pc"],
                                o = [];
                            e.metaKey && o.push("CMD"), e.ctrlKey && !e.altKey && o.push("CTRL"), e.shiftKey && o.push("SHIFT");
                            var r = O.nameFromCode[e.keyCode];
                            r && o.push(r);
                            var i = n[o.join("+")];
                            i ? (e.preventDefault(), t.invoke(i)) : O.isEdit(e.keyCode) && this.afterCommand()
                        }, this.preventDefaultEditableShortCuts = function(e) {
                            (e.ctrlKey || e.metaKey) && i.contains([66, 73, 85], e.keyCode) && e.preventDefault()
                        }, this.createRange = function() {
                            return this.focus(), z.create(u)
                        }, this.saveRange = function(e) {
                            d = this.createRange(), e && d.collapse().select()
                        }, this.restoreRange = function() {
                            d && (d.select(), this.focus())
                        }, this.saveTarget = function(e) {
                            s.data("target", e)
                        }, this.clearTarget = function() {
                            s.removeData("target")
                        }, this.restoreTarget = function() {
                            return s.data("target")
                        }, this.currentStyle = function() {
                            var e = z.create();
                            return e && (e = e.normalize()), e ? f.current(e) : f.fromNode(s)
                        }, this.styleFromNode = function(e) {
                            return f.fromNode(e)
                        }, this.undo = function() {
                            t.triggerEvent("before.command", s.html()), b.undo(), t.triggerEvent("change", s.html())
                        }, t.memo("help.undo", c.help.undo), this.redo = function() {
                            t.triggerEvent("before.command", s.html()), b.redo(), t.triggerEvent("change", s.html())
                        }, t.memo("help.redo", c.help.redo);
                        for (var y = this.beforeCommand = function() {
                                t.triggerEvent("before.command", s.html()), n.focus()
                            }, w = this.afterCommand = function(e) {
                                b.recordUndo(), e || t.triggerEvent("change", s.html())
                            }, x = ["bold", "italic", "underline", "strikethrough", "superscript", "subscript", "justifyLeft", "justifyCenter", "justifyRight", "justifyFull", "formatBlock", "removeFormat", "backColor", "foreColor", "fontName"], C = 0, k = x.length; C < k; C++) this[x[C]] = function(e) {
                            return function(t) {
                                y(), document.execCommand(e, !1, t), w(!0)
                            }
                        }(x[C]), t.memo("help." + x[C], c.help[x[C]]);
                        this.tab = function() {
                            var e = this.createRange();
                            e.isCollapsed() && e.isOnCell() ? p.tab(e) : (y(), m.insertTab(e, l.tabSize), w())
                        }, t.memo("help.tab", c.help.tab), this.untab = function() {
                            var e = this.createRange();
                            e.isCollapsed() && e.isOnCell() && p.tab(e, !0)
                        }, t.memo("help.untab", c.help.untab), this.wrapCommand = function(e) {
                            return function() {
                                y(), e.apply(n, arguments), w()
                            }
                        }, this.insertParagraph = this.wrapCommand(function() {
                            m.insertParagraph(u)
                        }), t.memo("help.insertParagraph", c.help.insertParagraph), this.insertOrderedList = this.wrapCommand(function() {
                            v.insertOrderedList(u)
                        }), t.memo("help.insertOrderedList", c.help.insertOrderedList), this.insertUnorderedList = this.wrapCommand(function() {
                            v.insertUnorderedList(u)
                        }), t.memo("help.insertUnorderedList", c.help.insertUnorderedList), this.indent = this.wrapCommand(function() {
                            v.indent(u)
                        }), t.memo("help.indent", c.help.indent), this.outdent = this.wrapCommand(function() {
                            v.outdent(u)
                        }), t.memo("help.outdent", c.help.outdent), this.insertImage = function(e, n) {
                            return W.createImage(e, n).then(function(e) {
                                y(), "function" == typeof n ? n(e) : ("string" == typeof n && e.attr("data-filename", n), e.css("width", Math.min(s.width(), e.width()))), e.show(), z.create(u).insertNode(e[0]), z.createFromNodeAfter(e[0]).select(), w()
                            }).fail(function(e) {
                                t.triggerEvent("image.upload.error", e)
                            })
                        }, this.insertImages = function(o) {
                            e.each(o, function(e, o) {
                                var r = o.name;
                                l.maximumImageFileSize && l.maximumImageFileSize < o.size ? t.triggerEvent("image.upload.error", c.image.maximumFileSizeError) : W.readFileAsDataURL(o).then(function(e) {
                                    return n.insertImage(e, r)
                                }).fail(function() {
                                    t.triggerEvent("image.upload.error")
                                })
                            })
                        }, this.insertImagesOrCallback = function(e) {
                            l.callbacks.onImageUpload ? t.triggerEvent("image.upload", e) : this.insertImages(e)
                        }, this.insertNode = this.wrapCommand(function(e) {
                            this.createRange().insertNode(e), z.createFromNodeAfter(e).select()
                        }), this.insertText = this.wrapCommand(function(e) {
                            var t = this.createRange(),
                                n = t.insertNode(g.createText(e));
                            z.create(n, g.nodeLength(n)).select()
                        }), this.getSelectedText = function() {
                            var e = this.createRange();
                            return e.isOnAnchor() && (e = z.createFromNode(g.ancestor(e.sc, g.isAnchor))), e.toString()
                        }, this.pasteHTML = this.wrapCommand(function(e) {
                            var t = this.createRange().pasteHTML(e);
                            z.createFromNodeAfter(i.last(t)).select()
                        }), this.formatBlock = this.wrapCommand(function(e) {
                            e = h.isMSIE ? "<" + e + ">" : e, document.execCommand("FormatBlock", !1, e)
                        }), this.formatPara = function() {
                            this.formatBlock("P")
                        }, t.memo("help.formatPara", c.help.formatPara);
                        for (var C = 1; C <= 6; C++) this["formatH" + C] = function(e) {
                            return function() {
                                this.formatBlock("H" + e)
                            }
                        }(C), t.memo("help.formatH" + C, c.help["formatH" + C]);
                        this.fontSize = function(t) {
                            var n = this.createRange();
                            if (n && n.isCollapsed()) {
                                var o = f.styleNodes(n),
                                    r = i.head(o);
                                e(o).css({
                                    "font-size": t + "px"
                                }), r && !g.nodeLength(r) && (r.innerHTML = g.ZERO_WIDTH_NBSP_CHAR, z.createFromNodeAfter(r.firstChild).select(), s.data("bogus", r))
                            } else y(), e(f.styleNodes(n)).css({
                                "font-size": t + "px"
                            }), w()
                        }, this.insertHorizontalRule = this.wrapCommand(function() {
                            var e = this.createRange().insertNode(g.create("HR"));
                            e.nextSibling && z.create(e.nextSibling, 0).normalize().select()
                        }), t.memo("help.insertHorizontalRule", c.help.insertHorizontalRule), this.removeBogus = function() {
                            var e = s.data("bogus");
                            if (e) {
                                var t = i.find(i.from(e.childNodes), g.isText),
                                    n = t.nodeValue.indexOf(g.ZERO_WIDTH_NBSP_CHAR); - 1 !== n && t.deleteData(n, 1), g.isEmpty(e) && g.remove(e), s.removeData("bogus")
                            }
                        }, this.lineHeight = this.wrapCommand(function(e) {
                            f.stylePara(this.createRange(), {
                                lineHeight: e
                            })
                        }), this.unlink = function() {
                            var e = this.createRange();
                            if (e.isOnAnchor()) {
                                var t = g.ancestor(e.sc, g.isAnchor);
                                e = z.createFromNode(t), e.select(), y(), document.execCommand("unlink"), w()
                            }
                        }, this.createLink = this.wrapCommand(function(t) {
                            var n = t.url,
                                o = t.text,
                                r = t.isNewWindow,
                                a = t.range || this.createRange(),
                                s = a.toString() !== o;
                            "string" == typeof n && (n = n.trim()), l.onCreateLink && (n = l.onCreateLink(n));
                            var c = [];
                            if (s) {
                                a = a.deleteContents();
                                var u = a.insertNode(e("<A>" + o + "</A>")[0]);
                                c.push(u)
                            } else c = f.styleNodes(a, {
                                nodeName: "A",
                                expandClosestSibling: !0,
                                onlyPartialContains: !0
                            });
                            e.each(c, function(t, o) {
                                n = /^[A-Za-z][A-Za-z0-9+-.]*\:[\/\/]?/.test(n) ? n : "http://" + n, e(o).attr("href", n), r ? e(o).attr("target", "_blank") : e(o).removeAttr("target")
                            });
                            var d = z.createFromNodeBefore(i.head(c)),
                                h = d.getStartPoint(),
                                p = z.createFromNodeAfter(i.last(c)),
                                g = p.getEndPoint();
                            z.create(h.node, h.offset, g.node, g.offset).select()
                        }), this.getLinkInfo = function() {
                            var t = this.createRange().expand(g.isAnchor),
                                n = e(i.head(t.nodes(g.isAnchor)));
                            return {
                                range: t,
                                text: t.toString(),
                                isNewWindow: !!n.length && "_blank" === n.attr("target"),
                                url: n.length ? n.attr("href") : ""
                            }
                        }, this.color = this.wrapCommand(function(e) {
                            var t = e.foreColor,
                                n = e.backColor;
                            t && document.execCommand("foreColor", !1, t), n && document.execCommand("backColor", !1, n)
                        }), this.insertTable = this.wrapCommand(function(e) {
                            var t = e.split("x");
                            this.createRange().deleteContents().insertNode(p.createTable(t[0], t[1], l))
                        }), this.floatMe = this.wrapCommand(function(t) {
                            e(this.restoreTarget()).css("float", t)
                        }), this.resize = this.wrapCommand(function(t) {
                            e(this.restoreTarget()).css({
                                width: 100 * t + "%",
                                height: ""
                            })
                        }), this.resizeTo = function(e, t, n) {
                            var o;
                            if (n) {
                                var r = e.y / e.x,
                                    i = t.data("ratio");
                                o = {
                                    width: i > r ? e.x : e.y / i,
                                    height: i > r ? e.x * i : e.y
                                }
                            } else o = {
                                width: e.x,
                                height: e.y
                            };
                            t.css(o)
                        }, this.removeMedia = this.wrapCommand(function() {
                            var n = e(this.restoreTarget()).detach();
                            t.triggerEvent("media.delete", n, s)
                        }), this.hasFocus = function() {
                            return s.is(":focus")
                        }, this.focus = function() {
                            this.hasFocus() || s.focus()
                        }, this.isEmpty = function() {
                            return g.isEmpty(s[0]) || g.emptyPara === s.html()
                        }, this.empty = function() {
                            t.invoke("code", g.emptyPara)
                        }
                    },
                    G = function(t) {
                        var n = this,
                            o = t.layoutInfo.editable;
                        this.events = {
                            "summernote.keydown": function(e, o) {
                                n.needKeydownHook() && (o.ctrlKey || o.metaKey) && o.keyCode === O.code.V && (t.invoke("editor.saveRange"), n.$paste.focus(), setTimeout(function() {
                                    n.pasteByHook()
                                }, 0))
                            }
                        }, this.needKeydownHook = function() {
                            return h.isMSIE && h.browserVersion > 10 || h.isFF
                        }, this.initialize = function() {
                            this.needKeydownHook() ? (this.$paste = e('<div tabindex="-1" />').attr("contenteditable", !0).css({
                                position: "absolute",
                                left: -1e5,
                                opacity: 0
                            }), o.before(this.$paste), this.$paste.on("paste", function(e) {
                                t.triggerEvent("paste", e)
                            })) : o.on("paste", this.pasteByEvent)
                        }, this.destroy = function() {
                            this.needKeydownHook() && (this.$paste.remove(), this.$paste = null)
                        }, this.pasteByHook = function() {
                            var n = this.$paste[0].firstChild;
                            if (g.isImg(n)) {
                                for (var o = n.src, r = atob(o.split(",")[1]), i = new Uint8Array(r.length), a = 0; a < r.length; a++) i[a] = r.charCodeAt(a);
                                var s = new Blob([i], {
                                    type: "image/png"
                                });
                                s.name = "clipboard.png", t.invoke("editor.restoreRange"), t.invoke("editor.focus"), t.invoke("editor.insertImagesOrCallback", [s])
                            } else {
                                var l = e("<div />").html(this.$paste.html()).html();
                                t.invoke("editor.restoreRange"), t.invoke("editor.focus"), l && t.invoke("editor.pasteHTML", l)
                            }
                            this.$paste.empty()
                        }, this.pasteByEvent = function(e) {
                            var n = e.originalEvent.clipboardData;
                            if (n && n.items && n.items.length) {
                                var o = i.head(n.items);
                                "file" === o.kind && -1 !== o.type.indexOf("image/") && t.invoke("editor.insertImagesOrCallback", [o.getAsFile()]), t.invoke("editor.afterCommand")
                            }
                        }
                    },
                    q = function(t) {
                        var n = e(document),
                            o = t.layoutInfo.editor,
                            r = t.layoutInfo.editable,
                            i = t.options,
                            a = i.langInfo,
                            s = {},
                            l = e(['<div class="note-dropzone">', '  <div class="note-dropzone-message"/>', "</div>"].join("")).prependTo(o),
                            c = function() {
                                Object.keys(s).forEach(function(e) {
                                    n.off(e.substr(2).toLowerCase(), s[e])
                                }), s = {}
                            };
                        this.initialize = function() {
                            i.disableDragAndDrop ? (s.onDrop = function(e) {
                                e.preventDefault()
                            }, n.on("drop", s.onDrop)) : this.attachDragAndDropEvent()
                        }, this.attachDragAndDropEvent = function() {
                            var i = e(),
                                c = l.find(".note-dropzone-message");
                            s.onDragenter = function(e) {
                                var n = t.invoke("codeview.isActivated"),
                                    r = o.width() > 0 && o.height() > 0;
                                n || i.length || !r || (o.addClass("dragover"), l.width(o.width()), l.height(o.height()), c.text(a.image.dragImageHere)), i = i.add(e.target)
                            }, s.onDragleave = function(e) {
                                i = i.not(e.target), i.length || o.removeClass("dragover")
                            }, s.onDrop = function() {
                                i = e(), o.removeClass("dragover")
                            }, n.on("dragenter", s.onDragenter).on("dragleave", s.onDragleave).on("drop", s.onDrop), l.on("dragenter", function() {
                                l.addClass("hover"), c.text(a.image.dropImage)
                            }).on("dragleave", function() {
                                l.removeClass("hover"), c.text(a.image.dragImageHere)
                            }), l.on("drop", function(n) {
                                var o = n.originalEvent.dataTransfer;
                                o && o.files && o.files.length ? (n.preventDefault(), r.focus(), t.invoke("editor.insertImagesOrCallback", o.files)) : e.each(o.types, function(n, r) {
                                    var i = o.getData(r);
                                    r.toLowerCase().indexOf("text") > -1 ? t.invoke("editor.pasteHTML", i) : e(i).each(function() {
                                        t.invoke("editor.insertNode", this)
                                    })
                                })
                            }).on("dragover", !1)
                        }, this.destroy = function() {
                            c()
                        }
                    };
                h.hasCodeMirror && (h.isSupportAmd ? new Promise(function(e) {
                    e()
                }).then(function() {
                    var e = [n(21)];
                    (function(e) {
                        R = e
                    }).apply(null, e)
                }).catch(n.oe) : R = window.CodeMirror);
                var _ = function(e) {
                        var t = e.layoutInfo.editor,
                            n = e.layoutInfo.editable,
                            o = e.layoutInfo.codable,
                            r = e.options;
                        this.sync = function() {
                            this.isActivated() && h.hasCodeMirror && o.data("cmEditor").save()
                        }, this.isActivated = function() {
                            return t.hasClass("codeview")
                        }, this.toggle = function() {
                            this.isActivated() ? this.deactivate() : this.activate(), e.triggerEvent("codeview.toggled")
                        }, this.activate = function() {
                            if (o.val(g.html(n, r.prettifyHtml)), o.height(n.height()), e.invoke("toolbar.updateCodeview", !0), t.addClass("codeview"), o.focus(), h.hasCodeMirror) {
                                var i = R.fromTextArea(o[0], r.codemirror);
                                if (r.codemirror.tern) {
                                    var a = new R.TernServer(r.codemirror.tern);
                                    i.ternServer = a, i.on("cursorActivity", function(e) {
                                        a.updateArgHints(e)
                                    })
                                }
                                i.setSize(null, n.outerHeight()), o.data("cmEditor", i)
                            }
                        }, this.deactivate = function() {
                            if (h.hasCodeMirror) {
                                var i = o.data("cmEditor");
                                o.val(i.getValue()), i.toTextArea()
                            }
                            var a = g.value(o, r.prettifyHtml) || g.emptyPara,
                                s = n.html() !== a;
                            n.html(a), n.height(r.height ? o.height() : "auto"), t.removeClass("codeview"), s && e.triggerEvent("change", n.html(), n), n.focus(), e.invoke("toolbar.updateCodeview", !1)
                        }, this.destroy = function() {
                            this.isActivated() && this.deactivate()
                        }
                    },
                    X = function(t) {
                        var n = e(document),
                            o = t.layoutInfo.statusbar,
                            r = t.layoutInfo.editable,
                            i = t.options;
                        this.initialize = function() {
                            i.airMode || i.disableResizeEditor || o.on("mousedown", function(e) {
                                e.preventDefault(), e.stopPropagation();
                                var t = r.offset().top - n.scrollTop();
                                n.on("mousemove", function(e) {
                                    var n = e.clientY - (t + 24);
                                    n = i.minheight > 0 ? Math.max(n, i.minheight) : n, n = i.maxHeight > 0 ? Math.min(n, i.maxHeight) : n, r.height(n)
                                }).one("mouseup", function() {
                                    n.off("mousemove")
                                })
                            })
                        }, this.destroy = function() {
                            o.off(), o.remove()
                        }
                    },
                    Y = function(t) {
                        var n = t.layoutInfo.editor,
                            o = t.layoutInfo.toolbar,
                            r = t.layoutInfo.editable,
                            i = t.layoutInfo.codable,
                            a = e(window),
                            s = e("html, body");
                        this.toggle = function() {
                            var e = function(e) {
                                r.css("height", e.h), i.css("height", e.h), i.data("cmeditor") && i.data("cmeditor").setsize(null, e.h)
                            };
                            n.toggleClass("fullscreen"), this.isFullscreen() ? (r.data("orgHeight", r.css("height")), a.on("resize", function() {
                                e({
                                    h: a.height() - o.outerHeight()
                                })
                            }).trigger("resize"), s.css("overflow", "hidden")) : (a.off("resize"), e({
                                h: r.data("orgHeight")
                            }), s.css("overflow", "visible")), t.invoke("toolbar.updateFullscreen", this.isFullscreen())
                        }, this.isFullscreen = function() {
                            return n.hasClass("fullscreen")
                        }
                    },
                    Z = function(t) {
                        var n = this,
                            o = e(document),
                            r = t.layoutInfo.editingArea,
                            i = t.options;
                        this.events = {
                            "summernote.mousedown": function(e, t) {
                                n.update(t.target) && t.preventDefault()
                            },
                            "summernote.keyup summernote.scroll summernote.change summernote.dialog.shown": function() {
                                n.update()
                            }
                        }, this.initialize = function() {
                            this.$handle = e(['<div class="note-handle">', '<div class="note-control-selection">', '<div class="note-control-selection-bg"></div>', '<div class="note-control-holder note-control-nw"></div>', '<div class="note-control-holder note-control-ne"></div>', '<div class="note-control-holder note-control-sw"></div>', '<div class="', i.disableResizeImage ? "note-control-holder" : "note-control-sizing", ' note-control-se"></div>', i.disableResizeImage ? "" : '<div class="note-control-selection-info"></div>', "</div>", "</div>"].join("")).prependTo(r), this.$handle.on("mousedown", function(e) {
                                if (g.isControlSizing(e.target)) {
                                    e.preventDefault(), e.stopPropagation();
                                    var r = n.$handle.find(".note-control-selection").data("target"),
                                        i = r.offset(),
                                        a = o.scrollTop();
                                    o.on("mousemove", function(e) {
                                        t.invoke("editor.resizeTo", {
                                            x: e.clientX - i.left,
                                            y: e.clientY - (i.top - a)
                                        }, r, !e.shiftKey), n.update(r[0])
                                    }).one("mouseup", function(e) {
                                        e.preventDefault(), o.off("mousemove"), t.invoke("editor.afterCommand")
                                    }), r.data("ratio") || r.data("ratio", r.height() / r.width())
                                }
                            })
                        }, this.destroy = function() {
                            this.$handle.remove()
                        }, this.update = function(n) {
                            var o = g.isImg(n),
                                r = this.$handle.find(".note-control-selection");
                            if (t.invoke("imagePopover.update", n), o) {
                                var i = e(n),
                                    a = i.position(),
                                    s = {
                                        w: i.outerWidth(!0),
                                        h: i.outerHeight(!0)
                                    };
                                r.css({
                                    display: "block",
                                    left: a.left,
                                    top: a.top,
                                    width: s.w,
                                    height: s.h
                                }).data("target", i);
                                var l = s.w + "x" + s.h;
                                r.find(".note-control-selection-info").text(l), t.invoke("editor.saveTarget", n)
                            } else this.hide();
                            return o
                        }, this.hide = function() {
                            t.invoke("editor.clearTarget"), this.$handle.children().hide()
                        }
                    },
                    J = function(t) {
                        var n = this,
                            o = /^([A-Za-z][A-Za-z0-9+-.]*\:[\/\/]?|mailto:[A-Z0-9._%+-]+@)?(www\.)?(.+)$/i;
                        this.events = {
                            "summernote.keyup": function(e, t) {
                                t.isDefaultPrevented() || n.handleKeyup(t)
                            },
                            "summernote.keydown": function(e, t) {
                                n.handleKeydown(t)
                            }
                        }, this.initialize = function() {
                            this.lastWordRange = null
                        }, this.destroy = function() {
                            this.lastWordRange = null
                        }, this.replace = function() {
                            if (this.lastWordRange) {
                                var n = this.lastWordRange.toString(),
                                    r = n.match(o);
                                if (r && (r[1] || r[2])) {
                                    var i = r[1] ? n : "http://" + n,
                                        a = e("<a />").html(n).attr("href", i)[0];
                                    this.lastWordRange.insertNode(a), this.lastWordRange = null, t.invoke("editor.focus")
                                }
                            }
                        }, this.handleKeydown = function(e) {
                            if (i.contains([O.code.ENTER, O.code.SPACE], e.keyCode)) {
                                var n = t.invoke("editor.createRange").getWordRange();
                                this.lastWordRange = n
                            }
                        }, this.handleKeyup = function(e) {
                            i.contains([O.code.ENTER, O.code.SPACE], e.keyCode) && this.replace()
                        }
                    },
                    Q = function(e) {
                        var t = e.layoutInfo.note;
                        this.events = {
                            "summernote.change": function() {
                                t.val(e.invoke("code"))
                            }
                        }, this.shouldInitialize = function() {
                            return g.isTextarea(t[0])
                        }
                    },
                    ee = function(t) {
                        var n = this,
                            o = t.layoutInfo.editingArea,
                            r = t.options;
                        this.events = {
                            "summernote.init summernote.change": function() {
                                n.update()
                            },
                            "summernote.codeview.toggled": function() {
                                n.update()
                            }
                        }, this.shouldInitialize = function() {
                            return !!r.placeholder
                        }, this.initialize = function() {
                            this.$placeholder = e('<div class="note-placeholder">'), this.$placeholder.on("click", function() {
                                t.invoke("focus")
                            }).text(r.placeholder).prependTo(o)
                        }, this.destroy = function() {
                            this.$placeholder.remove()
                        }, this.update = function() {
                            var e = !t.invoke("codeview.isActivated") && t.invoke("editor.isEmpty");
                            this.$placeholder.toggle(e)
                        }
                    },
                    te = function(t) {
                        var n = this,
                            o = e.summernote.ui,
                            a = t.layoutInfo.toolbar,
                            s = t.options,
                            l = s.langInfo,
                            c = r.invertObject(s.keyMap[h.isMac ? "mac" : "pc"]),
                            u = this.representShortcut = function(e) {
                                var t = c[e];
                                return s.shortcuts && t ? (h.isMac && (t = t.replace("CMD", "⌘").replace("SHIFT", "⇧")), " (" + (t = t.replace("BACKSLASH", "\\").replace("SLASH", "/").replace("LEFTBRACKET", "[").replace("RIGHTBRACKET", "]")) + ")") : ""
                            };
                        this.initialize = function() {
                            this.addToolbarButtons(), this.addImagePopoverButtons(), this.addLinkPopoverButtons(), this.fontInstalledMap = {}
                        }, this.destroy = function() {
                            delete this.fontInstalledMap
                        }, this.isFontInstalled = function(e) {
                            return n.fontInstalledMap.hasOwnProperty(e) || (n.fontInstalledMap[e] = h.isFontInstalled(e) || i.contains(s.fontNamesIgnoreCheck, e)), n.fontInstalledMap[e]
                        }, this.addToolbarButtons = function() {
                            t.memo("button.style", function() {
                                return o.buttonGroup([o.button({
                                    className: "dropdown-toggle",
                                    contents: o.icon(s.icons.magic) + " " + o.icon(s.icons.caret, "span"),
                                    tooltip: l.style.style,
                                    data: {
                                        toggle: "dropdown"
                                    }
                                }), o.dropdown({
                                    className: "dropdown-style",
                                    items: t.options.styleTags,
                                    template: function(e) {
                                        "string" == typeof e && (e = {
                                            tag: e,
                                            title: l.style.hasOwnProperty(e) ? l.style[e] : e
                                        });
                                        var t = e.tag,
                                            n = e.title;
                                        return "<" + t + (e.style ? ' style="' + e.style + '" ' : "") + (e.className ? ' class="' + e.className + '"' : "") + ">" + n + "</" + t + ">"
                                    },
                                    click: t.createInvokeHandler("editor.formatBlock")
                                })]).render()
                            }), t.memo("button.bold", function() {
                                return o.button({
                                    className: "note-btn-bold",
                                    contents: o.icon(s.icons.bold),
                                    tooltip: l.font.bold + u("bold"),
                                    click: t.createInvokeHandler("editor.bold")
                                }).render()
                            }), t.memo("button.italic", function() {
                                return o.button({
                                    className: "note-btn-italic",
                                    contents: o.icon(s.icons.italic),
                                    tooltip: l.font.italic + u("italic"),
                                    click: t.createInvokeHandler("editor.italic")
                                }).render()
                            }), t.memo("button.underline", function() {
                                return o.button({
                                    className: "note-btn-underline",
                                    contents: o.icon(s.icons.underline),
                                    tooltip: l.font.underline + u("underline"),
                                    click: t.createInvokeHandler("editor.underline")
                                }).render()
                            }), t.memo("button.clear", function() {
                                return o.button({
                                    contents: o.icon(s.icons.eraser),
                                    tooltip: l.font.clear + u("removeFormat"),
                                    click: t.createInvokeHandler("editor.removeFormat")
                                }).render()
                            }), t.memo("button.strikethrough", function() {
                                return o.button({
                                    className: "note-btn-strikethrough",
                                    contents: o.icon(s.icons.strikethrough),
                                    tooltip: l.font.strikethrough + u("strikethrough"),
                                    click: t.createInvokeHandler("editor.strikethrough")
                                }).render()
                            }), t.memo("button.superscript", function() {
                                return o.button({
                                    className: "note-btn-superscript",
                                    contents: o.icon(s.icons.superscript),
                                    tooltip: l.font.superscript,
                                    click: t.createInvokeHandler("editor.superscript")
                                }).render()
                            }), t.memo("button.subscript", function() {
                                return o.button({
                                    className: "note-btn-subscript",
                                    contents: o.icon(s.icons.subscript),
                                    tooltip: l.font.subscript,
                                    click: t.createInvokeHandler("editor.subscript")
                                }).render()
                            }), t.memo("button.fontname", function() {
                                return o.buttonGroup([o.button({
                                    className: "dropdown-toggle",
                                    contents: '<span class="note-current-fontname"/> ' + o.icon(s.icons.caret, "span"),
                                    tooltip: l.font.name,
                                    data: {
                                        toggle: "dropdown"
                                    }
                                }), o.dropdownCheck({
                                    className: "dropdown-fontname",
                                    checkClassName: s.icons.menuCheck,
                                    items: s.fontNames.filter(n.isFontInstalled),
                                    template: function(e) {
                                        return '<span style="font-family:' + e + '">' + e + "</span>"
                                    },
                                    click: t.createInvokeHandler("editor.fontName")
                                })]).render()
                            }), t.memo("button.fontsize", function() {
                                return o.buttonGroup([o.button({
                                    className: "dropdown-toggle",
                                    contents: '<span class="note-current-fontsize"/>' + o.icon(s.icons.caret, "span"),
                                    tooltip: l.font.size,
                                    data: {
                                        toggle: "dropdown"
                                    }
                                }), o.dropdownCheck({
                                    className: "dropdown-fontsize",
                                    checkClassName: s.icons.menuCheck,
                                    items: s.fontSizes,
                                    click: t.createInvokeHandler("editor.fontSize")
                                })]).render()
                            }), t.memo("button.color", function() {
                                return o.buttonGroup({
                                    className: "note-color",
                                    children: [o.button({
                                        className: "note-current-color-button",
                                        contents: o.icon(s.icons.font + " note-recent-color"),
                                        tooltip: l.color.recent,
                                        click: function(n) {
                                            var o = e(n.currentTarget);
                                            t.invoke("editor.color", {
                                                backColor: o.attr("data-backColor"),
                                                foreColor: o.attr("data-foreColor")
                                            })
                                        },
                                        callback: function(e) {
                                            e.find(".note-recent-color").css("background-color", "#FFFF00"), e.attr("data-backColor", "#FFFF00")
                                        }
                                    }), o.button({
                                        className: "dropdown-toggle",
                                        contents: o.icon(s.icons.caret, "span"),
                                        tooltip: l.color.more,
                                        data: {
                                            toggle: "dropdown"
                                        }
                                    }), o.dropdown({
                                        items: ["<li>", '<div class="btn-group">', '  <div class="note-palette-title">' + l.color.background + "</div>", "  <div>", '    <button type="button" class="note-color-reset btn btn-default" data-event="backColor" data-value="inherit">', l.color.transparent, "    </button>", "  </div>", '  <div class="note-holder" data-event="backColor"/>', "</div>", '<div class="btn-group">', '  <div class="note-palette-title">' + l.color.foreground + "</div>", "  <div>", '    <button type="button" class="note-color-reset btn btn-default" data-event="removeFormat" data-value="foreColor">', l.color.resetToDefault, "    </button>", "  </div>", '  <div class="note-holder" data-event="foreColor"/>', "</div>", "</li>"].join(""),
                                        callback: function(t) {
                                            t.find(".note-holder").each(function() {
                                                var t = e(this);
                                                t.append(o.palette({
                                                    colors: s.colors,
                                                    eventName: t.data("event")
                                                }).render())
                                            })
                                        },
                                        click: function(n) {
                                            var o = e(n.target),
                                                r = o.data("event"),
                                                i = o.data("value");
                                            if (r && i) {
                                                var a = "backColor" === r ? "background-color" : "color",
                                                    s = o.closest(".note-color").find(".note-recent-color"),
                                                    l = o.closest(".note-color").find(".note-current-color-button");
                                                s.css(a, i), l.attr("data-" + r, i), t.invoke("editor." + r, i)
                                            }
                                        }
                                    })]
                                }).render()
                            }), t.memo("button.ul", function() {
                                return o.button({
                                    contents: o.icon(s.icons.unorderedlist),
                                    tooltip: l.lists.unordered + u("insertUnorderedList"),
                                    click: t.createInvokeHandler("editor.insertUnorderedList")
                                }).render()
                            }), t.memo("button.ol", function() {
                                return o.button({
                                    contents: o.icon(s.icons.orderedlist),
                                    tooltip: l.lists.ordered + u("insertOrderedList"),
                                    click: t.createInvokeHandler("editor.insertOrderedList")
                                }).render()
                            });
                            var i = o.button({
                                    contents: o.icon(s.icons.alignLeft),
                                    tooltip: l.paragraph.left + u("justifyLeft"),
                                    click: t.createInvokeHandler("editor.justifyLeft")
                                }),
                                a = o.button({
                                    contents: o.icon(s.icons.alignCenter),
                                    tooltip: l.paragraph.center + u("justifyCenter"),
                                    click: t.createInvokeHandler("editor.justifyCenter")
                                }),
                                c = o.button({
                                    contents: o.icon(s.icons.alignRight),
                                    tooltip: l.paragraph.right + u("justifyRight"),
                                    click: t.createInvokeHandler("editor.justifyRight")
                                }),
                                d = o.button({
                                    contents: o.icon(s.icons.alignJustify),
                                    tooltip: l.paragraph.justify + u("justifyFull"),
                                    click: t.createInvokeHandler("editor.justifyFull")
                                }),
                                f = o.button({
                                    contents: o.icon(s.icons.outdent),
                                    tooltip: l.paragraph.outdent + u("outdent"),
                                    click: t.createInvokeHandler("editor.outdent")
                                }),
                                h = o.button({
                                    contents: o.icon(s.icons.indent),
                                    tooltip: l.paragraph.indent + u("indent"),
                                    click: t.createInvokeHandler("editor.indent")
                                });
                            t.memo("button.justifyLeft", r.invoke(i, "render")), t.memo("button.justifyCenter", r.invoke(a, "render")), t.memo("button.justifyRight", r.invoke(c, "render")), t.memo("button.justifyFull", r.invoke(d, "render")), t.memo("button.outdent", r.invoke(f, "render")), t.memo("button.indent", r.invoke(h, "render")), t.memo("button.paragraph", function() {
                                return o.buttonGroup([o.button({
                                    className: "dropdown-toggle",
                                    contents: o.icon(s.icons.alignLeft) + " " + o.icon(s.icons.caret, "span"),
                                    tooltip: l.paragraph.paragraph,
                                    data: {
                                        toggle: "dropdown"
                                    }
                                }), o.dropdown([o.buttonGroup({
                                    className: "note-align",
                                    children: [i, a, c, d]
                                }), o.buttonGroup({
                                    className: "note-list",
                                    children: [f, h]
                                })])]).render()
                            }), t.memo("button.height", function() {
                                return o.buttonGroup([o.button({
                                    className: "dropdown-toggle",
                                    contents: o.icon(s.icons.textHeight) + " " + o.icon(s.icons.caret, "span"),
                                    tooltip: l.font.height,
                                    data: {
                                        toggle: "dropdown"
                                    }
                                }), o.dropdownCheck({
                                    items: s.lineHeights,
                                    checkClassName: s.icons.menuCheck,
                                    className: "dropdown-line-height",
                                    click: t.createInvokeHandler("editor.lineHeight")
                                })]).render()
                            }), t.memo("button.table", function() {
                                return o.buttonGroup([o.button({
                                    className: "dropdown-toggle",
                                    contents: o.icon(s.icons.table) + " " + o.icon(s.icons.caret, "span"),
                                    tooltip: l.table.table,
                                    data: {
                                        toggle: "dropdown"
                                    }
                                }), o.dropdown({
                                    className: "note-table",
                                    items: ['<div class="note-dimension-picker">', '  <div class="note-dimension-picker-mousecatcher" data-event="insertTable" data-value="1x1"/>', '  <div class="note-dimension-picker-highlighted"/>', '  <div class="note-dimension-picker-unhighlighted"/>', "</div>", '<div class="note-dimension-display">1 x 1</div>'].join("")
                                })], {
                                    callback: function(e) {
                                        e.find(".note-dimension-picker-mousecatcher").css({
                                            width: s.insertTableMaxSize.col + "em",
                                            height: s.insertTableMaxSize.row + "em"
                                        }).mousedown(t.createInvokeHandler("editor.insertTable")).on("mousemove", n.tableMoveHandler)
                                    }
                                }).render()
                            }), t.memo("button.link", function() {
                                return o.button({
                                    contents: o.icon(s.icons.link),
                                    tooltip: l.link.link + u("linkDialog.show"),
                                    click: t.createInvokeHandler("linkDialog.show")
                                }).render()
                            }), t.memo("button.picture", function() {
                                return o.button({
                                    contents: o.icon(s.icons.picture),
                                    tooltip: l.image.image,
                                    click: t.createInvokeHandler("imageDialog.show")
                                }).render()
                            }), t.memo("button.video", function() {
                                return o.button({
                                    contents: o.icon(s.icons.video),
                                    tooltip: l.video.video,
                                    click: t.createInvokeHandler("videoDialog.show")
                                }).render()
                            }), t.memo("button.hr", function() {
                                return o.button({
                                    contents: o.icon(s.icons.minus),
                                    tooltip: l.hr.insert + u("insertHorizontalRule"),
                                    click: t.createInvokeHandler("editor.insertHorizontalRule")
                                }).render()
                            }), t.memo("button.fullscreen", function() {
                                return o.button({
                                    className: "btn-fullscreen",
                                    contents: o.icon(s.icons.arrowsAlt),
                                    tooltip: l.options.fullscreen,
                                    click: t.createInvokeHandler("fullscreen.toggle")
                                }).render()
                            }), t.memo("button.codeview", function() {
                                return o.button({
                                    className: "btn-codeview",
                                    contents: o.icon(s.icons.code),
                                    tooltip: l.options.codeview,
                                    click: t.createInvokeHandler("codeview.toggle")
                                }).render()
                            }), t.memo("button.redo", function() {
                                return o.button({
                                    contents: o.icon(s.icons.redo),
                                    tooltip: l.history.redo + u("redo"),
                                    click: t.createInvokeHandler("editor.redo")
                                }).render()
                            }), t.memo("button.undo", function() {
                                return o.button({
                                    contents: o.icon(s.icons.undo),
                                    tooltip: l.history.undo + u("undo"),
                                    click: t.createInvokeHandler("editor.undo")
                                }).render()
                            }), t.memo("button.help", function() {
                                return o.button({
                                    contents: o.icon(s.icons.question),
                                    tooltip: l.options.help,
                                    click: t.createInvokeHandler("helpDialog.show")
                                }).render()
                            })
                        }, this.addImagePopoverButtons = function() {
                            t.memo("button.imageSize100", function() {
                                return o.button({
                                    contents: '<span class="note-fontsize-10">100%</span>',
                                    tooltip: l.image.resizeFull,
                                    click: t.createInvokeHandler("editor.resize", "1")
                                }).render()
                            }), t.memo("button.imageSize50", function() {
                                return o.button({
                                    contents: '<span class="note-fontsize-10">50%</span>',
                                    tooltip: l.image.resizeHalf,
                                    click: t.createInvokeHandler("editor.resize", "0.5")
                                }).render()
                            }), t.memo("button.imageSize25", function() {
                                return o.button({
                                    contents: '<span class="note-fontsize-10">25%</span>',
                                    tooltip: l.image.resizeQuarter,
                                    click: t.createInvokeHandler("editor.resize", "0.25")
                                }).render()
                            }), t.memo("button.floatLeft", function() {
                                return o.button({
                                    contents: o.icon(s.icons.alignLeft),
                                    tooltip: l.image.floatLeft,
                                    click: t.createInvokeHandler("editor.floatMe", "left")
                                }).render()
                            }), t.memo("button.floatRight", function() {
                                return o.button({
                                    contents: o.icon(s.icons.alignRight),
                                    tooltip: l.image.floatRight,
                                    click: t.createInvokeHandler("editor.floatMe", "right")
                                }).render()
                            }), t.memo("button.floatNone", function() {
                                return o.button({
                                    contents: o.icon(s.icons.alignJustify),
                                    tooltip: l.image.floatNone,
                                    click: t.createInvokeHandler("editor.floatMe", "none")
                                }).render()
                            }), t.memo("button.removeMedia", function() {
                                return o.button({
                                    contents: o.icon(s.icons.trash),
                                    tooltip: l.image.remove,
                                    click: t.createInvokeHandler("editor.removeMedia")
                                }).render()
                            })
                        }, this.addLinkPopoverButtons = function() {
                            t.memo("button.linkDialogShow", function() {
                                return o.button({
                                    contents: o.icon(s.icons.link),
                                    tooltip: l.link.edit,
                                    click: t.createInvokeHandler("linkDialog.show")
                                }).render()
                            }), t.memo("button.unlink", function() {
                                return o.button({
                                    contents: o.icon(s.icons.unlink),
                                    tooltip: l.link.unlink,
                                    click: t.createInvokeHandler("editor.unlink")
                                }).render()
                            })
                        }, this.build = function(e, n) {
                            for (var r = 0, i = n.length; r < i; r++) {
                                for (var a = n[r], s = a[0], l = a[1], c = o.buttonGroup({
                                        className: "note-" + s
                                    }).render(), u = 0, d = l.length; u < d; u++) {
                                    var f = t.memo("button." + l[u]);
                                    f && c.append("function" == typeof f ? f(t) : f)
                                }
                                c.appendTo(e)
                            }
                        }, this.updateCurrentStyle = function() {
                            var o = t.invoke("editor.currentStyle");
                            if (this.updateBtnStates({
                                    ".note-btn-bold": function() {
                                        return "bold" === o["font-bold"]
                                    },
                                    ".note-btn-italic": function() {
                                        return "italic" === o["font-italic"]
                                    },
                                    ".note-btn-underline": function() {
                                        return "underline" === o["font-underline"]
                                    },
                                    ".note-btn-subscript": function() {
                                        return "subscript" === o["font-subscript"]
                                    },
                                    ".note-btn-superscript": function() {
                                        return "superscript" === o["font-superscript"]
                                    },
                                    ".note-btn-strikethrough": function() {
                                        return "strikethrough" === o["font-strikethrough"]
                                    }
                                }), o["font-family"]) {
                                var r = o["font-family"].split(",").map(function(e) {
                                        return e.replace(/[\'\"]/g, "").replace(/\s+$/, "").replace(/^\s+/, "")
                                    }),
                                    s = i.find(r, n.isFontInstalled);
                                a.find(".dropdown-fontname li a").each(function() {
                                    var t = e(this).data("value") + "" == s + "";
                                    this.className = t ? "checked" : ""
                                }), a.find(".note-current-fontname").text(s)
                            }
                            if (o["font-size"]) {
                                var l = o["font-size"];
                                a.find(".dropdown-fontsize li a").each(function() {
                                    var t = e(this).data("value") + "" == l + "";
                                    this.className = t ? "checked" : ""
                                }), a.find(".note-current-fontsize").text(l)
                            }
                            if (o["line-height"]) {
                                var c = o["line-height"];
                                a.find(".dropdown-line-height li a").each(function() {
                                    var t = e(this).data("value") + "" == c + "";
                                    this.className = t ? "checked" : ""
                                })
                            }
                        }, this.updateBtnStates = function(t) {
                            e.each(t, function(e, t) {
                                o.toggleBtnActive(a.find(e), t())
                            })
                        }, this.tableMoveHandler = function(t) {
                            var n, o = e(t.target.parentNode),
                                r = o.next(),
                                i = o.find(".note-dimension-picker-mousecatcher"),
                                a = o.find(".note-dimension-picker-highlighted"),
                                l = o.find(".note-dimension-picker-unhighlighted");
                            if (void 0 === t.offsetX) {
                                var c = e(t.target).offset();
                                n = {
                                    x: t.pageX - c.left,
                                    y: t.pageY - c.top
                                }
                            } else n = {
                                x: t.offsetX,
                                y: t.offsetY
                            };
                            var u = {
                                c: Math.ceil(n.x / 18) || 1,
                                r: Math.ceil(n.y / 18) || 1
                            };
                            a.css({
                                width: u.c + "em",
                                height: u.r + "em"
                            }), i.data("value", u.c + "x" + u.r), 3 < u.c && u.c < s.insertTableMaxSize.col && l.css({
                                width: u.c + 1 + "em"
                            }), 3 < u.r && u.r < s.insertTableMaxSize.row && l.css({
                                height: u.r + 1 + "em"
                            }), r.html(u.c + " x " + u.r)
                        }
                    },
                    ne = function(t) {
                        var n = e.summernote.ui,
                            o = t.layoutInfo.note,
                            r = t.layoutInfo.toolbar,
                            i = t.options;
                        this.shouldInitialize = function() {
                            return !i.airMode
                        }, this.initialize = function() {
                            i.toolbar = i.toolbar || [], i.toolbar.length ? t.invoke("buttons.build", r, i.toolbar) : r.hide(), i.toolbarContainer && r.appendTo(i.toolbarContainer), o.on("summernote.keyup summernote.mouseup summernote.change", function() {
                                t.invoke("buttons.updateCurrentStyle")
                            }), t.invoke("buttons.updateCurrentStyle")
                        }, this.destroy = function() {
                            r.children().remove()
                        }, this.updateFullscreen = function(e) {
                            n.toggleBtnActive(r.find(".btn-fullscreen"), e)
                        }, this.updateCodeview = function(e) {
                            n.toggleBtnActive(r.find(".btn-codeview"), e), e ? this.deactivate() : this.activate()
                        }, this.activate = function(e) {
                            var t = r.find("button");
                            e || (t = t.not(".btn-codeview")), n.toggleBtn(t, !0)
                        }, this.deactivate = function(e) {
                            var t = r.find("button");
                            e || (t = t.not(".btn-codeview")), n.toggleBtn(t, !1)
                        }
                    },
                    oe = function(t) {
                        var n = this,
                            o = e.summernote.ui,
                            r = t.layoutInfo.editor,
                            i = t.options,
                            a = i.langInfo;
                        this.initialize = function() {
                            var t = i.dialogsInBody ? e(document.body) : r,
                                n = '<div class="form-group"><label>' + a.link.textToDisplay + '</label><input class="note-link-text form-control" type="text" /></div><div class="form-group"><label>' + a.link.url + '</label><input class="note-link-url form-control" type="text" value="http://" /></div>' + (i.disableLinkTarget ? "" : '<div class="checkbox"><label><input type="checkbox" checked> ' + a.link.openInNewWindow + "</label></div>"),
                                s = '<button href="#" class="btn -dark note-link-btn disabled" disabled>' + a.link.insert + "</button>";
                            this.$dialog = o.dialog({
                                className: "link-dialog",
                                title: a.link.insert,
                                fade: i.dialogsFade,
                                body: n,
                                footer: s
                            }).render().appendTo(t)
                        }, this.destroy = function() {
                            o.hideDialog(this.$dialog), this.$dialog.remove()
                        }, this.bindEnterKey = function(e, t) {
                            e.on("keypress", function(e) {
                                e.keyCode === O.code.ENTER && t.trigger("click")
                            })
                        }, this.toggleLinkBtn = function(e, t, n) {
                            o.toggleBtn(e, t.val() && n.val())
                        }, this.showLinkDialog = function(r) {
                            return e.Deferred(function(e) {
                                var i = n.$dialog.find(".note-link-text"),
                                    a = n.$dialog.find(".note-link-url"),
                                    s = n.$dialog.find(".note-link-btn"),
                                    l = n.$dialog.find("input[type=checkbox]");
                                o.onDialogShown(n.$dialog, function() {
                                    t.triggerEvent("dialog.shown"), r.url || (r.url = r.text), i.val(r.text);
                                    var o = function() {
                                        n.toggleLinkBtn(s, i, a), r.text = i.val()
                                    };
                                    i.on("input", o).on("paste", function() {
                                        setTimeout(o, 0)
                                    });
                                    var c = function() {
                                        n.toggleLinkBtn(s, i, a), r.text || i.val(a.val())
                                    };
                                    a.on("input", c).on("paste", function() {
                                        setTimeout(c, 0)
                                    }).val(r.url).trigger("focus"), n.toggleLinkBtn(s, i, a), n.bindEnterKey(a, s), n.bindEnterKey(i, s), l.prop("checked", r.isNewWindow), s.one("click", function(t) {
                                        t.preventDefault(), e.resolve({
                                            range: r.range,
                                            url: a.val(),
                                            text: i.val(),
                                            isNewWindow: l.is(":checked")
                                        }), n.$dialog.modal("hide")
                                    })
                                }), o.onDialogHidden(n.$dialog, function() {
                                    i.off("input paste keypress"), a.off("input paste keypress"), s.off("click"), "pending" === e.state() && e.reject()
                                }), o.showDialog(n.$dialog)
                            }).promise()
                        }, this.show = function() {
                            var e = t.invoke("editor.getLinkInfo");
                            t.invoke("editor.saveRange"), this.showLinkDialog(e).then(function(e) {
                                t.invoke("editor.restoreRange"), t.invoke("editor.createLink", e)
                            }).fail(function() {
                                t.invoke("editor.restoreRange")
                            })
                        }, t.memo("help.linkDialog.show", i.langInfo.help["linkDialog.show"])
                    },
                    re = function(t) {
                        var n = this,
                            o = e.summernote.ui,
                            r = t.options;
                        this.events = {
                            "summernote.keyup summernote.mouseup summernote.change summernote.scroll": function() {
                                n.update()
                            },
                            "summernote.dialog.shown": function() {
                                n.hide()
                            }
                        }, this.shouldInitialize = function() {
                            return !i.isEmpty(r.popover.link)
                        }, this.initialize = function() {
                            this.$popover = o.popover({
                                className: "note-link-popover",
                                callback: function(e) {
                                    e.find(".popover-content").prepend('<span><a target="_blank"></a>&nbsp;</span>')
                                }
                            }).render().appendTo("body");
                            var e = this.$popover.find(".popover-content");
                            t.invoke("buttons.build", e, r.popover.link)
                        }, this.destroy = function() {
                            this.$popover.remove()
                        }, this.update = function() {
                            if (!t.invoke("editor.hasFocus")) return void this.hide();
                            var n = t.invoke("editor.createRange");
                            if (n.isCollapsed() && n.isOnAnchor()) {
                                var o = g.ancestor(n.sc, g.isAnchor),
                                    r = e(o).attr("href");
                                this.$popover.find("a").attr("href", r).html(r);
                                var i = g.posFromPlaceholder(o);
                                this.$popover.css({
                                    display: "block",
                                    left: i.left,
                                    top: i.top
                                })
                            } else this.hide()
                        }, this.hide = function() {
                            this.$popover.hide()
                        }
                    },
                    ie = function(t) {
                        var n = this,
                            o = e.summernote.ui,
                            r = t.layoutInfo.editor,
                            i = t.options,
                            a = i.langInfo;
                        this.initialize = function() {
                            var t = i.dialogsInBody ? e(document.body) : r,
                                n = "";
                            if (i.maximumImageFileSize) {
                                var s = Math.floor(Math.log(i.maximumImageFileSize) / Math.log(1024)),
                                    l = 1 * (i.maximumImageFileSize / Math.pow(1024, s)).toFixed(2) + " " + " KMGTP" [s] + "B";
                                n = "<small>" + a.image.maximumFileSize + " : " + l + "</small>"
                            }
                            var c = '<div class="form-group note-group-select-from-files"><label>' + a.image.selectFromFiles + '</label><input class="note-image-input form-control" type="file" name="files" accept="image/*" multiple="multiple" />' + n + '</div><div class="form-group note-group-image-url" style="overflow:auto;"><label>' + a.image.url + '</label><input class="note-image-url form-control col-md-12" type="text" /></div>',
                                u = '<button href="#" class="btn -dark note-image-btn disabled" disabled>' + a.image.insert + "</button>";
                            this.$dialog = o.dialog({
                                title: a.image.insert,
                                fade: i.dialogsFade,
                                body: c,
                                footer: u
                            }).render().appendTo(t)
                        }, this.destroy = function() {
                            o.hideDialog(this.$dialog), this.$dialog.remove()
                        }, this.bindEnterKey = function(e, t) {
                            e.on("keypress", function(e) {
                                e.keyCode === O.code.ENTER && t.trigger("click")
                            })
                        }, this.show = function() {
                            t.invoke("editor.saveRange"), this.showImageDialog().then(function(e) {
                                o.hideDialog(n.$dialog), t.invoke("editor.restoreRange"), "string" == typeof e ? t.invoke("editor.insertImage", e) : t.invoke("editor.insertImagesOrCallback", e)
                            }).fail(function() {
                                t.invoke("editor.restoreRange")
                            })
                        }, this.showImageDialog = function() {
                            return e.Deferred(function(e) {
                                var r = n.$dialog.find(".note-image-input"),
                                    i = n.$dialog.find(".note-image-url"),
                                    a = n.$dialog.find(".note-image-btn");
                                o.onDialogShown(n.$dialog, function() {
                                    t.triggerEvent("dialog.shown"), r.replaceWith(r.clone().on("change", function() {
                                        e.resolve(this.files || this.value)
                                    }).val("")), a.click(function(t) {
                                        t.preventDefault(), e.resolve(i.val())
                                    }), i.on("keyup paste", function() {
                                        var e = i.val();
                                        o.toggleBtn(a, e)
                                    }).val("").trigger("focus"), n.bindEnterKey(i, a)
                                }), o.onDialogHidden(n.$dialog, function() {
                                    r.off("change"), i.off("keyup paste keypress"), a.off("click"), "pending" === e.state() && e.reject()
                                }), o.showDialog(n.$dialog)
                            })
                        }
                    },
                    ae = function(t) {
                        var n = e.summernote.ui,
                            o = t.options;
                        this.shouldInitialize = function() {
                            return !i.isEmpty(o.popover.image)
                        }, this.initialize = function() {
                            this.$popover = n.popover({
                                className: "note-image-popover"
                            }).render().appendTo("body");
                            var e = this.$popover.find(".popover-content");
                            t.invoke("buttons.build", e, o.popover.image)
                        }, this.destroy = function() {
                            this.$popover.remove()
                        }, this.update = function(e) {
                            if (g.isImg(e)) {
                                var t = g.posFromPlaceholder(e);
                                this.$popover.css({
                                    display: "block",
                                    left: t.left,
                                    top: t.top
                                })
                            } else this.hide()
                        }, this.hide = function() {
                            this.$popover.hide()
                        }
                    },
                    se = function(t) {
                        var n = this,
                            o = e.summernote.ui,
                            r = t.layoutInfo.editor,
                            i = t.options,
                            a = i.langInfo;
                        this.initialize = function() {
                            var t = i.dialogsInBody ? e(document.body) : r,
                                n = '<div class="form-group row-fluid"><label>' + a.video.url + ' <small class="text-muted">' + a.video.providers + '</small></label><input class="note-video-url form-control span12" type="text" /></div>',
                                s = '<button href="#" class="btn -dark note-video-btn disabled" disabled>' + a.video.insert + "</button>";
                            this.$dialog = o.dialog({
                                title: a.video.insert,
                                fade: i.dialogsFade,
                                body: n,
                                footer: s
                            }).render().appendTo(t)
                        }, this.destroy = function() {
                            o.hideDialog(this.$dialog), this.$dialog.remove()
                        }, this.bindEnterKey = function(e, t) {
                            e.on("keypress", function(e) {
                                e.keyCode === O.code.ENTER && t.trigger("click")
                            })
                        }, this.createVideoNode = function(t) {
                            var n, o = /^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/,
                                r = t.match(o),
                                i = /(?:www\.|\/\/)instagram\.com\/p\/(.[a-zA-Z0-9_-]*)/,
                                a = t.match(i),
                                s = /\/\/vine\.co\/v\/([a-zA-Z0-9]+)/,
                                l = t.match(s),
                                c = /\/\/(player\.)?vimeo\.com\/([a-z]*\/)*([0-9]{6,11})[?]?.*/,
                                u = t.match(c),
                                d = /.+dailymotion.com\/(video|hub)\/([^_]+)[^#]*(#video=([^_&]+))?/,
                                f = t.match(d),
                                h = /\/\/v\.youku\.com\/v_show\/id_(\w+)=*\.html/,
                                p = t.match(h),
                                g = /^.+.(mp4|m4v)$/,
                                m = t.match(g),
                                v = /^.+.(ogg|ogv)$/,
                                b = t.match(v),
                                y = /^.+.(webm)$/,
                                w = t.match(y);
                            if (r && 11 === r[1].length) {
                                var x = r[1];
                                n = e("<iframe>").attr("frameborder", 0).attr("src", "//www.youtube.com/embed/" + x).attr("width", "640").attr("height", "360")
                            } else if (a && a[0].length) n = e("<iframe>").attr("frameborder", 0).attr("src", "https://instagram.com/p/" + a[1] + "/embed/").attr("width", "612").attr("height", "710").attr("scrolling", "no").attr("allowtransparency", "true");
                            else if (l && l[0].length) n = e("<iframe>").attr("frameborder", 0).attr("src", l[0] + "/embed/simple").attr("width", "600").attr("height", "600").attr("class", "vine-embed");
                            else if (u && u[3].length) n = e("<iframe webkitallowfullscreen mozallowfullscreen allowfullscreen>").attr("frameborder", 0).attr("src", "//player.vimeo.com/video/" + u[3]).attr("width", "640").attr("height", "360");
                            else if (f && f[2].length) n = e("<iframe>").attr("frameborder", 0).attr("src", "//www.dailymotion.com/embed/video/" + f[2]).attr("width", "640").attr("height", "360");
                            else if (p && p[1].length) n = e("<iframe webkitallowfullscreen mozallowfullscreen allowfullscreen>").attr("frameborder", 0).attr("height", "498").attr("width", "510").attr("src", "//player.youku.com/embed/" + p[1]);
                            else {
                                if (!(m || b || w)) return !1;
                                n = e("<video controls>").attr("src", t).attr("width", "640").attr("height", "360")
                            }
                            return n.addClass("note-video-clip"), n[0]
                        }, this.show = function() {
                            var e = t.invoke("editor.getSelectedText");
                            t.invoke("editor.saveRange"), this.showVideoDialog(e).then(function(e) {
                                o.hideDialog(n.$dialog), t.invoke("editor.restoreRange");
                                var r = n.createVideoNode(e);
                                r && t.invoke("editor.insertNode", r)
                            }).fail(function() {
                                t.invoke("editor.restoreRange")
                            })
                        }, this.showVideoDialog = function(r) {
                            return e.Deferred(function(e) {
                                var i = n.$dialog.find(".note-video-url"),
                                    a = n.$dialog.find(".note-video-btn");
                                o.onDialogShown(n.$dialog, function() {
                                    t.triggerEvent("dialog.shown"), i.val(r).on("input", function() {
                                        o.toggleBtn(a, i.val())
                                    }).trigger("focus"), a.click(function(t) {
                                        t.preventDefault(), e.resolve(i.val())
                                    }), n.bindEnterKey(i, a)
                                }), o.onDialogHidden(n.$dialog, function() {
                                    i.off("input"), a.off("click"), "pending" === e.state() && e.reject()
                                }), o.showDialog(n.$dialog)
                            })
                        }
                    },
                    le = function(t) {
                        var n = this,
                            o = e.summernote.ui,
                            r = t.layoutInfo.editor,
                            i = t.options,
                            a = i.langInfo;
                        this.createShortCutList = function() {
                            var n = i.keyMap[h.isMac ? "mac" : "pc"];
                            return Object.keys(n).map(function(o) {
                                var r = n[o],
                                    i = e('<div><div class="help-list-item"/></div>');
                                return i.append(e("<label><kbd>" + o + "</kdb></label>").css({
                                    width: 180,
                                    "margin-right": 10
                                })).append(e("<span/>").html(t.memo("help." + r) || r)), i.html()
                            }).join("")
                        }, this.initialize = function() {
                            var t = i.dialogsInBody ? e(document.body) : r,
                                n = ['<p class="text-center">', '<a href="http://summernote.org/" target="_blank">Summernote 0.8.2</a> · ', '<a href="https://github.com/summernote/summernote" target="_blank">Project</a> · ', '<a href="https://github.com/summernote/summernote/issues" target="_blank">Issues</a>', "</p>"].join("");
                            this.$dialog = o.dialog({
                                title: a.options.help,
                                fade: i.dialogsFade,
                                body: this.createShortCutList(),
                                footer: n,
                                callback: function(e) {
                                    e.find(".modal-body").css({
                                        "max-height": 300,
                                        overflow: "scroll"
                                    })
                                }
                            }).render().appendTo(t)
                        }, this.destroy = function() {
                            o.hideDialog(this.$dialog), this.$dialog.remove()
                        }, this.showHelpDialog = function() {
                            return e.Deferred(function(e) {
                                o.onDialogShown(n.$dialog, function() {
                                    t.triggerEvent("dialog.shown"), e.resolve()
                                }), o.showDialog(n.$dialog)
                            }).promise()
                        }, this.show = function() {
                            t.invoke("editor.saveRange"), this.showHelpDialog().then(function() {
                                t.invoke("editor.restoreRange")
                            })
                        }
                    },
                    ce = function(t) {
                        var n = this,
                            o = e.summernote.ui,
                            a = t.options;
                        this.events = {
                            "summernote.keyup summernote.mouseup summernote.scroll": function() {
                                n.update()
                            },
                            "summernote.change summernote.dialog.shown": function() {
                                n.hide()
                            },
                            "summernote.focusout": function(e, t) {
                                h.isFF || t.relatedTarget && g.ancestor(t.relatedTarget, r.eq(n.$popover[0])) || n.hide()
                            }
                        }, this.shouldInitialize = function() {
                            return a.airMode && !i.isEmpty(a.popover.air)
                        }, this.initialize = function() {
                            this.$popover = o.popover({
                                className: "note-air-popover"
                            }).render().appendTo("body");
                            var e = this.$popover.find(".popover-content");
                            t.invoke("buttons.build", e, a.popover.air)
                        }, this.destroy = function() {
                            this.$popover.remove()
                        }, this.update = function() {
                            var e = t.invoke("editor.currentStyle");
                            if (e.range && !e.range.isCollapsed()) {
                                var n = i.last(e.range.getClientRects());
                                if (n) {
                                    var o = r.rect2bnd(n);
                                    this.$popover.css({
                                        display: "block",
                                        left: Math.max(o.left + o.width / 2, 0) - 20,
                                        top: o.top + o.height
                                    })
                                }
                            } else this.hide()
                        }, this.hide = function() {
                            this.$popover.hide()
                        }
                    },
                    ue = function(t) {
                        var n = this,
                            o = e.summernote.ui,
                            a = t.options.hint || [],
                            s = t.options.hintDirection || "bottom",
                            l = e.isArray(a) ? a : [a];
                        this.events = {
                            "summernote.keyup": function(e, t) {
                                t.isDefaultPrevented() || n.handleKeyup(t)
                            },
                            "summernote.keydown": function(e, t) {
                                n.handleKeydown(t)
                            },
                            "summernote.dialog.shown": function() {
                                n.hide()
                            }
                        }, this.shouldInitialize = function() {
                            return l.length > 0
                        }, this.initialize = function() {
                            this.lastWordRange = null, this.$popover = o.popover({
                                className: "note-hint-popover",
                                hideArrow: !0,
                                direction: ""
                            }).render().appendTo("body"), this.$popover.hide(), this.$content = this.$popover.find(".popover-content"), this.$content.on("click", ".note-hint-item", function() {
                                n.$content.find(".active").removeClass("active"), e(this).addClass("active"), n.replace()
                            })
                        }, this.destroy = function() {
                            this.$popover.remove()
                        }, this.selectItem = function(e) {
                            this.$content.find(".active").removeClass("active"), e.addClass("active"), this.$content[0].scrollTop = e[0].offsetTop - this.$content.innerHeight() / 2
                        }, this.moveDown = function() {
                            var e = this.$content.find(".note-hint-item.active"),
                                t = e.next();
                            if (t.length) this.selectItem(t);
                            else {
                                var n = e.parent().next();
                                n.length || (n = this.$content.find(".note-hint-group").first()), this.selectItem(n.find(".note-hint-item").first())
                            }
                        }, this.moveUp = function() {
                            var e = this.$content.find(".note-hint-item.active"),
                                t = e.prev();
                            if (t.length) this.selectItem(t);
                            else {
                                var n = e.parent().prev();
                                n.length || (n = this.$content.find(".note-hint-group").last()), this.selectItem(n.find(".note-hint-item").last())
                            }
                        }, this.replace = function() {
                            var e = this.$content.find(".note-hint-item.active");
                            if (e.length) {
                                var n = this.nodeFromItem(e);
                                this.lastWordRange.insertNode(n), z.createFromNode(n).collapse().select(), this.lastWordRange = null, this.hide(), t.invoke("editor.focus")
                            }
                        }, this.nodeFromItem = function(e) {
                            var t = l[e.data("index")],
                                n = e.data("item"),
                                o = t.content ? t.content(n) : n;
                            return "string" == typeof o && (o = g.createText(o)), o
                        }, this.createItemTemplates = function(t, n) {
                            var o = l[t];
                            return n.map(function(n, r) {
                                var i = e('<div class="note-hint-item"/>');
                                return i.append(o.template ? o.template(n) : n + ""), i.data({
                                    index: t,
                                    item: n
                                }), 0 === t && 0 === r && i.addClass("active"), i
                            })
                        }, this.handleKeydown = function(e) {
                            this.$popover.is(":visible") && (e.keyCode === O.code.ENTER ? (e.preventDefault(), this.replace()) : e.keyCode === O.code.UP ? (e.preventDefault(), this.moveUp()) : e.keyCode === O.code.DOWN && (e.preventDefault(), this.moveDown()))
                        }, this.searchKeyword = function(e, t, n) {
                            var o = l[e];
                            if (o && o.match.test(t) && o.search) {
                                var r = o.match.exec(t);
                                o.search(r[1], n)
                            } else n()
                        }, this.createGroup = function(t, o) {
                            var r = e('<div class="note-hint-group note-hint-group-' + t + '"/>');
                            return this.searchKeyword(t, o, function(e) {
                                e = e || [], e.length && (r.html(n.createItemTemplates(t, e)), n.show())
                            }), r
                        }, this.handleKeyup = function(e) {
                            if (i.contains([O.code.ENTER, O.code.UP, O.code.DOWN], e.keyCode)) {
                                if (e.keyCode === O.code.ENTER && this.$popover.is(":visible")) return
                            } else {
                                var o = t.invoke("editor.createRange").getWordRange(),
                                    a = o.toString();
                                if (l.length && a) {
                                    this.$content.empty();
                                    var c = r.rect2bnd(i.last(o.getClientRects()));
                                    c && (this.$popover.hide(), this.lastWordRange = o, l.forEach(function(e, t) {
                                        e.match.test(a) && n.createGroup(t, a).appendTo(n.$content)
                                    }), "top" === s ? this.$popover.css({
                                        left: c.left,
                                        top: c.top - this.$popover.outerHeight() - 5
                                    }) : this.$popover.css({
                                        left: c.left,
                                        top: c.top + c.height + 5
                                    }))
                                } else this.hide()
                            }
                        }, this.show = function() {
                            this.$popover.show()
                        }, this.hide = function() {
                            this.$popover.hide()
                        }
                    };
                e.summernote = e.extend(e.summernote, {
                    version: "0.8.2",
                    ui: P,
                    dom: g,
                    plugins: {},
                    options: {
                        modules: {
                            editor: V,
                            clipboard: G,
                            dropzone: q,
                            codeview: _,
                            statusbar: X,
                            fullscreen: Y,
                            handle: Z,
                            hintPopover: ue,
                            autoLink: J,
                            autoSync: Q,
                            placeholder: ee,
                            buttons: te,
                            toolbar: ne,
                            linkDialog: oe,
                            linkPopover: re,
                            imageDialog: ie,
                            imagePopover: ae,
                            videoDialog: se,
                            helpDialog: le,
                            airPopover: ce
                        },
                        buttons: {},
                        lang: "en-US",
                        toolbar: [
                            ["style", ["style"]],
                            ["font", ["bold", "underline", "clear"]],
                            ["fontname", ["fontname"]],
                            ["color", ["color"]],
                            ["para", ["ul", "ol", "paragraph"]],
                            ["table", ["table"]],
                            ["insert", ["link", "picture", "video"]],
                            ["view", ["fullscreen", "codeview", "help"]]
                        ],
                        popover: {
                            image: [
                                ["imagesize", ["imageSize100", "imageSize50", "imageSize25"]],
                                ["float", ["floatLeft", "floatRight", "floatNone"]],
                                ["remove", ["removeMedia"]]
                            ],
                            link: [
                                ["link", ["linkDialogShow", "unlink"]]
                            ],
                            air: [
                                ["color", ["color"]],
                                ["font", ["bold", "underline", "clear"]],
                                ["para", ["ul", "paragraph"]],
                                ["table", ["table"]],
                                ["insert", ["link", "picture"]]
                            ]
                        },
                        airMode: !1,
                        width: null,
                        height: null,
                        focus: !1,
                        tabSize: 4,
                        styleWithSpan: !0,
                        shortcuts: !0,
                        textareaAutoSync: !0,
                        direction: null,
                        styleTags: ["p", "blockquote", "pre", "h1", "h2", "h3", "h4", "h5", "h6"],
                        fontNames: ["Arial", "Arial Black", "Comic Sans MS", "Courier New", "Helvetica Neue", "Helvetica", "Impact", "Lucida Grande", "Tahoma", "Times New Roman", "Verdana"],
                        fontSizes: ["8", "9", "10", "11", "12", "14", "18", "24", "36"],
                        colors: [
                            ["#000000", "#424242", "#636363", "#9C9C94", "#CEC6CE", "#EFEFEF", "#F7F7F7", "#FFFFFF"],
                            ["#FF0000", "#FF9C00", "#FFFF00", "#00FF00", "#00FFFF", "#0000FF", "#9C00FF", "#FF00FF"],
                            ["#F7C6CE", "#FFE7CE", "#FFEFC6", "#D6EFD6", "#CEDEE7", "#CEE7F7", "#D6D6E7", "#E7D6DE"],
                            ["#E79C9C", "#FFC69C", "#FFE79C", "#B5D6A5", "#A5C6CE", "#9CC6EF", "#B5A5D6", "#D6A5BD"],
                            ["#E76363", "#F7AD6B", "#FFD663", "#94BD7B", "#73A5AD", "#6BADDE", "#8C7BC6", "#C67BA5"],
                            ["#CE0000", "#E79439", "#EFC631", "#6BA54A", "#4A7B8C", "#3984C6", "#634AA5", "#A54A7B"],
                            ["#9C0000", "#B56308", "#BD9400", "#397B21", "#104A5A", "#085294", "#311873", "#731842"],
                            ["#630000", "#7B3900", "#846300", "#295218", "#083139", "#003163", "#21104A", "#4A1031"]
                        ],
                        lineHeights: ["1.0", "1.2", "1.4", "1.5", "1.6", "1.8", "2.0", "3.0"],
                        tableClassName: "table -bordered -dark",
                        insertTableMaxSize: {
                            col: 10,
                            row: 10
                        },
                        dialogsInBody: !1,
                        dialogsFade: !1,
                        maximumImageFileSize: null,
                        callbacks: {
                            onInit: null,
                            onFocus: null,
                            onBlur: null,
                            onEnter: null,
                            onKeyup: null,
                            onKeydown: null,
                            onImageUpload: null,
                            onImageUploadError: null
                        },
                        codemirror: {
                            mode: "text/html",
                            htmlMode: !0,
                            lineNumbers: !0
                        },
                        keyMap: {
                            pc: {
                                ENTER: "insertParagraph",
                                "CTRL+Z": "undo",
                                "CTRL+Y": "redo",
                                TAB: "tab",
                                "SHIFT+TAB": "untab",
                                "CTRL+B": "bold",
                                "CTRL+I": "italic",
                                "CTRL+U": "underline",
                                "CTRL+SHIFT+S": "strikethrough",
                                "CTRL+BACKSLASH": "removeFormat",
                                "CTRL+SHIFT+L": "justifyLeft",
                                "CTRL+SHIFT+E": "justifyCenter",
                                "CTRL+SHIFT+R": "justifyRight",
                                "CTRL+SHIFT+J": "justifyFull",
                                "CTRL+SHIFT+NUM7": "insertUnorderedList",
                                "CTRL+SHIFT+NUM8": "insertOrderedList",
                                "CTRL+LEFTBRACKET": "outdent",
                                "CTRL+RIGHTBRACKET": "indent",
                                "CTRL+NUM0": "formatPara",
                                "CTRL+NUM1": "formatH1",
                                "CTRL+NUM2": "formatH2",
                                "CTRL+NUM3": "formatH3",
                                "CTRL+NUM4": "formatH4",
                                "CTRL+NUM5": "formatH5",
                                "CTRL+NUM6": "formatH6",
                                "CTRL+ENTER": "insertHorizontalRule",
                                "CTRL+K": "linkDialog.show"
                            },
                            mac: {
                                ENTER: "insertParagraph",
                                "CMD+Z": "undo",
                                "CMD+SHIFT+Z": "redo",
                                TAB: "tab",
                                "SHIFT+TAB": "untab",
                                "CMD+B": "bold",
                                "CMD+I": "italic",
                                "CMD+U": "underline",
                                "CMD+SHIFT+S": "strikethrough",
                                "CMD+BACKSLASH": "removeFormat",
                                "CMD+SHIFT+L": "justifyLeft",
                                "CMD+SHIFT+E": "justifyCenter",
                                "CMD+SHIFT+R": "justifyRight",
                                "CMD+SHIFT+J": "justifyFull",
                                "CMD+SHIFT+NUM7": "insertUnorderedList",
                                "CMD+SHIFT+NUM8": "insertOrderedList",
                                "CMD+LEFTBRACKET": "outdent",
                                "CMD+RIGHTBRACKET": "indent",
                                "CMD+NUM0": "formatPara",
                                "CMD+NUM1": "formatH1",
                                "CMD+NUM2": "formatH2",
                                "CMD+NUM3": "formatH3",
                                "CMD+NUM4": "formatH4",
                                "CMD+NUM5": "formatH5",
                                "CMD+NUM6": "formatH6",
                                "CMD+ENTER": "insertHorizontalRule",
                                "CMD+K": "linkDialog.show"
                            }
                        },
                        icons: {
                            align: "note-icon-align",
                            alignCenter: "note-icon-align-center",
                            alignJustify: "note-icon-align-justify",
                            alignLeft: "note-icon-align-left",
                            alignRight: "note-icon-align-right",
                            indent: "note-icon-align-indent",
                            outdent: "note-icon-align-outdent",
                            arrowsAlt: "note-icon-arrows-alt",
                            bold: "note-icon-bold",
                            caret: "note-icon-caret",
                            circle: "note-icon-circle",
                            close: "note-icon-close",
                            code: "note-icon-code",
                            eraser: "note-icon-eraser",
                            font: "note-icon-font",
                            frame: "note-icon-frame",
                            italic: "note-icon-italic",
                            link: "note-icon-link",
                            unlink: "note-icon-chain-broken",
                            magic: "note-icon-magic",
                            menuCheck: "note-icon-check",
                            minus: "note-icon-minus",
                            orderedlist: "note-icon-orderedlist",
                            pencil: "note-icon-pencil",
                            picture: "note-icon-picture",
                            question: "note-icon-question",
                            redo: "note-icon-redo",
                            square: "note-icon-square",
                            strikethrough: "note-icon-strikethrough",
                            subscript: "note-icon-subscript",
                            superscript: "note-icon-superscript",
                            table: "note-icon-table",
                            textHeight: "note-icon-text-height",
                            trash: "note-icon-trash",
                            underline: "note-icon-underline",
                            undo: "note-icon-undo",
                            unorderedlist: "note-icon-unorderedlist",
                            video: "note-icon-video"
                        }
                    }
                })
            }(window.jQuery)
        }()
    },
    181: function(e, t, n) {
        t = e.exports = n(5)(), t.push([e.i, '@font-face {\n  font-family: "summernote";\n  font-style: normal;\n  font-weight: normal;\n  src: url(' + n(224) + ");\n  src: url(" + n(223) + '?#iefix) format("embedded-opentype"), url(' + n(226) + ') format("woff"), url(' + n(225) + ') format("truetype");\n}\n[class^="note-icon-"]:before,\n[class*=" note-icon-"]:before {\n  display: inline-block;\n  font: normal normal normal 14px summernote;\n  font-size: inherit;\n  -webkit-font-smoothing: antialiased;\n  text-decoration: inherit;\n  text-rendering: auto;\n  text-transform: none;\n  vertical-align: middle;\n  speak: none;\n  -moz-osx-font-smoothing: grayscale;\n}\n.note-icon-align-center:before {\n  content: "\\F101";\n}\n.note-icon-align-indent:before {\n  content: "\\F102";\n}\n.note-icon-align-justify:before {\n  content: "\\F103";\n}\n.note-icon-align-left:before {\n  content: "\\F104";\n}\n.note-icon-align-outdent:before {\n  content: "\\F105";\n}\n.note-icon-align-right:before {\n  content: "\\F106";\n}\n.note-icon-align:before {\n  content: "\\F107";\n}\n.note-icon-arrows-alt:before {\n  content: "\\F108";\n}\n.note-icon-bold:before {\n  content: "\\F109";\n}\n.note-icon-caret:before {\n  content: "\\F10A";\n}\n.note-icon-chain-broken:before {\n  content: "\\F10B";\n}\n.note-icon-circle:before {\n  content: "\\F10C";\n}\n.note-icon-close:before {\n  content: "\\F10D";\n}\n.note-icon-code:before {\n  content: "\\F10E";\n}\n.note-icon-eraser:before {\n  content: "\\F10F";\n}\n.note-icon-font:before {\n  content: "\\F110";\n}\n.note-icon-frame:before {\n  content: "\\F111";\n}\n.note-icon-italic:before {\n  content: "\\F112";\n}\n.note-icon-link:before {\n  content: "\\F113";\n}\n.note-icon-magic:before {\n  content: "\\F114";\n}\n.note-icon-menu-check:before {\n  content: "\\F115";\n}\n.note-icon-minus:before {\n  content: "\\F116";\n}\n.note-icon-orderedlist:before {\n  content: "\\F117";\n}\n.note-icon-pencil:before {\n  content: "\\F118";\n}\n.note-icon-picture:before {\n  content: "\\F119";\n}\n.note-icon-question:before {\n  content: "\\F11A";\n}\n.note-icon-redo:before {\n  content: "\\F11B";\n}\n.note-icon-special-character:before {\n  content: "\\F11C";\n}\n.note-icon-square:before {\n  content: "\\F11D";\n}\n.note-icon-strikethrough:before {\n  content: "\\F11E";\n}\n.note-icon-subscript:before {\n  content: "\\F11F";\n}\n.note-icon-summernote:before {\n  content: "\\F120";\n}\n.note-icon-superscript:before {\n  content: "\\F121";\n}\n.note-icon-table:before {\n  content: "\\F122";\n}\n.note-icon-text-height:before {\n  content: "\\F123";\n}\n.note-icon-trash:before {\n  content: "\\F124";\n}\n.note-icon-underline:before {\n  content: "\\F125";\n}\n.note-icon-undo:before {\n  content: "\\F126";\n}\n.note-icon-unorderedlist:before {\n  content: "\\F127";\n}\n.note-icon-video:before {\n  content: "\\F128";\n}\n.note-editor {\n  position: relative;\n}\n.note-editor .note-dropzone {\n  position: absolute;\n  display: none;\n  z-index: 100;\n  color: #fff;\n  opacity: 0.95;\n  width: 100%;\n  height: 100%;\n}\n.note-editor .note-dropzone .note-dropzone-message {\n  display: table-cell;\n  vertical-align: middle;\n  text-align: center;\n  font-size: 28px;\n}\n.note-editor .note-dropzone.hover {\n  color: rgba(255,255,255,0.5);\n}\n.note-editor.dragover .note-dropzone {\n  display: table;\n}\n.note-editor .note-editing-area {\n  position: relative;\n  width: 100%;\n}\n.note-editor .note-editing-area .note-editable {\n  outline: none;\n}\n.note-editor .note-editing-area .note-editable sup {\n  vertical-align: super;\n}\n.note-editor .note-editing-area .note-editable sub {\n  vertical-align: sub;\n}\n.note-editor.note-frame.codeview .note-editing-area .note-editable {\n  display: none;\n}\n.note-editor.note-frame.codeview .note-editing-area .note-codable {\n  display: block;\n}\n.note-editor.note-frame .note-editing-area {\n  overflow: hidden;\n}\n.note-editor.note-frame .note-editing-area .note-editable {\n  background: rgba(0,0,0,0.25);\n  background: linear-gradient(to bottom right, rgba(0,0,0,0.25), rgba(0,0,0,0.125));\n  color: #fff;\n  padding: 1rem;\n  height: 15rem;\n  overflow: auto;\n  font-family: "Helvetica", "Arial", "sans-serif";\n}\n.note-editor.note-frame .note-editing-area .note-editable[contenteditable="false"] {\n  background-color: rgba(0,0,0,0.25);\n}\n.note-editor.note-frame .note-editing-area .note-codable {\n  display: none;\n  width: 100%;\n  padding: 10px;\n  border: none;\n  box-shadow: none;\n  font-family: Menlo, Monaco, monospace, sans-serif;\n  font-size: 14px;\n  color: #ccc;\n  background-color: #222;\n  resize: none;\n  margin-bottom: 0;\n}\n@include box-sizing(border-box);\n@include rounded(0);\n.note-editor.note-frame.fullscreen {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100% !important;\n  z-index: 1050;\n}\n.note-editor.note-frame.fullscreen .note-toolbar {\n  margin-top: 70px;\n  background-color: rgba(0,0,0,0.8);\n}\n.note-editor.note-frame.fullscreen .note-editable {\n  background-color: rgba(0,0,0,0.7);\n}\n.note-editor.note-frame.fullscreen .note-toolbar,\n.note-editor.note-frame.fullscreen .note-editable {\n  backdrop-filter: blur(7px);\n  -webkit-backdrop-filter: blur(7px);\n}\n.note-editor.note-frame.fullscreen .note-resizebar {\n  display: none;\n}\n.note-editor.note-frame .note-statusbar {\n  background-color: rgba(0,0,0,0.25);\n  border-bottom-left-radius: 4px;\n  border-bottom-right-radius: 4px;\n}\n.note-editor.note-frame .note-statusbar .note-resizebar {\n  padding-top: 1px;\n  height: 8px;\n  width: 100%;\n  cursor: ns-resize;\n}\n.note-editor.note-frame .note-statusbar .note-resizebar .note-icon-bar {\n  width: 20px;\n  margin: 1px auto;\n  border-top: 1px solid rgba(0,0,0,0.15);\n}\n.note-editor.note-frame .note-placeholder {\n  padding: 10px;\n}\n.note-popover.popover {\n  display: none;\n  max-width: none;\n}\n.note-popover.popover .popover-content a {\n  display: inline-block;\n  max-width: 200px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  vertical-align: middle;\n}\n.note-popover.popover .arrow {\n  left: 20px !important;\n}\n.note-popover .popover-content,\n.note-toolbar {\n  padding: 1rem;\n  margin-bottom: -0.33rem;\n}\n.note-popover .popover-content > .btn-group,\n.note-toolbar > .btn-group {\n  margin-left: 0;\n  margin-right: 0;\n}\n.note-popover .popover-content .btn-group,\n.note-toolbar .btn-group {\n  display: inline-block;\n  position: relative;\n  margin-right: 0.5rem;\n  margin-bottom: 0.33rem;\n}\n.note-popover .popover-content .btn-group .btn,\n.note-toolbar .btn-group .btn {\n  padding-left: 1rem;\n  padding-right: 1rem;\n}\n.note-popover .popover-content .btn-group .note-table,\n.note-toolbar .btn-group .note-table {\n  min-width: 0;\n  padding: 1rem;\n}\n.note-popover .popover-content .btn-group .note-table .note-dimension-picker,\n.note-toolbar .btn-group .note-table .note-dimension-picker {\n  font-size: 18px;\n}\n.note-popover .popover-content .btn-group .note-table .note-dimension-picker .note-dimension-picker-mousecatcher,\n.note-toolbar .btn-group .note-table .note-dimension-picker .note-dimension-picker-mousecatcher {\n  position: absolute !important;\n  z-index: 3;\n  width: 10em;\n  height: 10em;\n  cursor: pointer;\n}\n.note-popover .popover-content .btn-group .note-table .note-dimension-picker .note-dimension-picker-unhighlighted,\n.note-toolbar .btn-group .note-table .note-dimension-picker .note-dimension-picker-unhighlighted {\n  border: 1px solid rgba(255,255,255,0.15);\n  position: relative !important;\n  z-index: 1;\n  width: 5em;\n  height: 5em;\n}\n.note-popover .popover-content .btn-group .note-table .note-dimension-picker .note-dimension-picker-highlighted,\n.note-toolbar .btn-group .note-table .note-dimension-picker .note-dimension-picker-highlighted {\n  border: 1px solid rgba(255,255,255,0.85);\n  position: absolute !important;\n  z-index: 2;\n  width: 1em;\n  height: 1em;\n}\n.note-popover .popover-content .btn-group .note-dimension-display,\n.note-toolbar .btn-group .note-dimension-display {\n  padding-top: 0.5rem;\n  color: #fff;\n}\n.note-popover .popover-content .note-style .dropdown-menu,\n.note-toolbar .note-style .dropdown-menu {\n  padding: 1rem;\n  color: #fff;\n}\n.note-popover .popover-content .note-style .dropdown-menu pre,\n.note-toolbar .note-style .dropdown-menu pre {\n  color: #fff;\n}\n.note-popover .popover-content .note-style .dropdown-menu blockquote,\n.note-toolbar .note-style .dropdown-menu blockquote {\n  padding: 0;\n}\n.note-popover .popover-content .note-style h1,\n.note-toolbar .note-style h1,\n.note-popover .popover-content .note-style h2,\n.note-toolbar .note-style h2,\n.note-popover .popover-content .note-style h3,\n.note-toolbar .note-style h3,\n.note-popover .popover-content .note-style h4,\n.note-toolbar .note-style h4,\n.note-popover .popover-content .note-style h5,\n.note-toolbar .note-style h5,\n.note-popover .popover-content .note-style h6,\n.note-toolbar .note-style h6,\n.note-popover .popover-content .note-style blockquote,\n.note-toolbar .note-style blockquote,\n.note-popover .popover-content .note-style pre,\n.note-toolbar .note-style pre,\n.note-popover .popover-content .note-style p,\n.note-toolbar .note-style p {\n  margin: 0;\n}\n.note-popover .popover-content .note-color .dropdown-toggle,\n.note-toolbar .note-color .dropdown-toggle {\n  width: 20px;\n  padding-left: 5px;\n}\n.note-popover .popover-content .note-color .dropdown-menu,\n.note-toolbar .note-color .dropdown-menu {\n  min-width: 360px;\n}\n.note-popover .popover-content .note-color .dropdown-menu .btn-group,\n.note-toolbar .note-color .dropdown-menu .btn-group {\n  margin: 0;\n}\n.note-popover .popover-content .note-color .dropdown-menu .btn-group:first-child,\n.note-toolbar .note-color .dropdown-menu .btn-group:first-child {\n  margin: 0 5px;\n}\n.note-popover .popover-content .note-color .dropdown-menu .btn-group .note-palette-title,\n.note-toolbar .note-color .dropdown-menu .btn-group .note-palette-title {\n  padding: 0.5rem 0;\n  text-align: center;\n  color: #fff;\n  border-bottom: 1px solid rgba(255,255,255,0.15);\n}\n.note-popover .popover-content .note-color .dropdown-menu .btn-group .note-color-reset,\n.note-toolbar .note-color .dropdown-menu .btn-group .note-color-reset {\n  font-size: 12px;\n  padding: 6px 0;\n  cursor: pointer;\n  width: 100%;\n  box-sizing: border-box;\n}\n.note-popover .popover-content .note-color .dropdown-menu .btn-group .note-color-row,\n.note-toolbar .note-color .dropdown-menu .btn-group .note-color-row {\n  height: 20px;\n}\n.note-popover .popover-content .note-color .dropdown-menu .btn-group .note-color-reset:hover,\n.note-toolbar .note-color .dropdown-menu .btn-group .note-color-reset:hover {\n  background: rgba(0,0,0,0.25);\n}\n.note-popover .popover-content .note-para .dropdown-menu,\n.note-toolbar .note-para .dropdown-menu {\n  min-width: 216px;\n  padding: 1rem;\n}\n.note-popover .popover-content .note-para .dropdown-menu>div:first-child,\n.note-toolbar .note-para .dropdown-menu>div:first-child {\n  margin-right: 5px;\n}\n.note-popover .popover-content .note-btn::after,\n.note-toolbar .note-btn::after {\n  display: none;\n}\n.note-popover .popover-content .dropdown-menu,\n.note-toolbar .dropdown-menu {\n  padding: 0.5rem;\n  min-width: 90px;\n}\n.note-popover .popover-content .dropdown-menu.right,\n.note-toolbar .dropdown-menu.right {\n  right: 0;\n  left: auto;\n}\n.note-popover .popover-content .dropdown-menu.right::before,\n.note-toolbar .dropdown-menu.right::before {\n  right: 9px;\n  left: auto !important;\n}\n.note-popover .popover-content .dropdown-menu.right::after,\n.note-toolbar .dropdown-menu.right::after {\n  right: 10px;\n  left: auto !important;\n}\n.note-popover .popover-content .dropdown-menu.note-check li a i,\n.note-toolbar .dropdown-menu.note-check li a i {\n  color: #00bfff;\n  visibility: hidden;\n}\n.note-popover .popover-content .dropdown-menu.note-check li a.checked i,\n.note-toolbar .dropdown-menu.note-check li a.checked i {\n  visibility: visible;\n}\n.note-popover .popover-content .note-fontsize-10,\n.note-toolbar .note-fontsize-10 {\n  font-size: 10px;\n}\n.note-popover .popover-content .note-color-palette,\n.note-toolbar .note-color-palette {\n  line-height: 1;\n  margin-right: 0.25rem;\n}\n.note-popover .popover-content .note-color-palette div .note-color-btn,\n.note-toolbar .note-color-palette div .note-color-btn {\n  width: 20px;\n  height: 20px;\n  padding: 0;\n  margin: 0;\n  border: 1px solid transparent;\n}\n.note-popover .popover-content .note-color-palette div .note-color-btn:hover,\n.note-toolbar .note-color-palette div .note-color-btn:hover {\n  border: 1px solid #000;\n}\n.note-dialog>div {\n  display: none;\n}\n.note-dialog .form-group {\n  margin-left: 0;\n  margin-right: 0;\n}\n.note-dialog .note-modal-form {\n  margin: 0;\n}\n.note-dialog .note-image-dialog .note-dropzone {\n  min-height: 100px;\n  font-size: 30px;\n  line-height: 4;\n  color: #d3d3d3;\n  text-align: center;\n  border: 4px dashed #d3d3d3;\n  margin-bottom: 10px;\n}\n.note-placeholder {\n  position: absolute;\n  display: none;\n  color: #808080;\n}\n.note-handle .note-control-selection {\n  position: absolute;\n  display: none;\n  border: 1px solid #000;\n}\n.note-handle .note-control-selection>div position: absolute,\n.note-handle .note-control-selection .note-control-selection-bg {\n  width: 100%;\n  height: 100%;\n  background-color: #000;\n}\n@include opacity(0.3);\n.note-handle .note-control-selection .note-control-handle,\n.note-handle .note-control-selection .note-control-holder,\n.note-handle .note-control-selection .note-control-sizing {\n  width: 7px;\n  height: 7px;\n  border: 1px solid #000;\n}\n.note-handle .note-control-selection .note-control-sizing {\n  background-color: #fff;\n}\n.note-handle .note-control-selection .note-control-nw {\n  top: -5px;\n  left: -5px;\n  border-right: none;\n  border-bottom: none;\n}\n.note-handle .note-control-selection .note-control-ne {\n  top: -5px;\n  right: -5px;\n  border-bottom: none;\n  border-left: none;\n}\n.note-handle .note-control-selection .note-control-sw {\n  bottom: -5px;\n  left: -5px;\n  border-top: none;\n  border-right: none;\n}\n.note-handle .note-control-selection .note-control-se {\n  right: -5px;\n  bottom: -5px;\n  cursor: se-resize;\n}\n.note-handle .note-control-selection .note-control-se.note-control-holder {\n  cursor: default;\n  border-top: none;\n  border-left: none;\n}\n.note-handle .note-control-selection .note-control-selection-info {\n  right: 0;\n  bottom: 0;\n  padding: 5px;\n  margin: 5px;\n  color: #fff;\n  background-color: #000;\n  font-size: 12px;\n}\n@include rounded(5px);\n@include opacity(0.7);\n.note-hint-popover {\n  min-width: 100px;\n  padding: 2px;\n}\n.note-hint-popover .popover-content {\n  padding: 3px;\n  max-height: 150px;\n  overflow: auto;\n}\n.note-hint-popover .popover-content .note-hint-group .note-hint-item {\n  display: block !important;\n  padding: 3px;\n}\n.note-hint-popover .popover-content .note-hint-group .note-hint-item.active,\n.note-hint-popover .popover-content .note-hint-group .note-hint-item:hover {\n  display: block;\n  clear: both;\n  font-weight: 400;\n  line-height: 1.4;\n  color: #fff;\n  white-space: nowrap;\n  text-decoration: none;\n  background-color: ;\n  outline: 0;\n  cursor: pointer;\n}\n', ""])
    },
    21: function(e, t, n) {
        var o, r, i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        };
        ! function(a, s) {
            "object" === i(t) && void 0 !== e ? e.exports = s() : (o = s, void 0 !== (r = "function" == typeof o ? o.call(t, n, t, e) : o) && (e.exports = r))
        }(0, function() {
            "use strict";

            function e(e) {
                return new RegExp("(^|\\s)" + e + "(?:$|\\s)\\s*")
            }

            function t(e) {
                for (var t = e.childNodes.length; t > 0; --t) e.removeChild(e.firstChild);
                return e
            }

            function n(e, n) {
                return t(e).appendChild(n)
            }

            function o(e, t, n, o) {
                var r = document.createElement(e);
                if (n && (r.className = n), o && (r.style.cssText = o), "string" == typeof t) r.appendChild(document.createTextNode(t));
                else if (t)
                    for (var i = 0; i < t.length; ++i) r.appendChild(t[i]);
                return r
            }

            function r(e, t, n, r) {
                var i = o(e, t, n, r);
                return i.setAttribute("role", "presentation"), i
            }

            function a(e, t) {
                if (3 == t.nodeType && (t = t.parentNode), e.contains) return e.contains(t);
                do {
                    if (11 == t.nodeType && (t = t.host), t == e) return !0
                } while (t = t.parentNode)
            }

            function s() {
                var e;
                try {
                    e = document.activeElement
                } catch (t) {
                    e = document.body || null
                }
                for (; e && e.shadowRoot && e.shadowRoot.activeElement;) e = e.shadowRoot.activeElement;
                return e
            }

            function l(t, n) {
                var o = t.className;
                e(n).test(o) || (t.className += (o ? " " : "") + n)
            }

            function c(t, n) {
                for (var o = t.split(" "), r = 0; r < o.length; r++) o[r] && !e(o[r]).test(n) && (n += " " + o[r]);
                return n
            }

            function u(e) {
                var t = Array.prototype.slice.call(arguments, 1);
                return function() {
                    return e.apply(null, t)
                }
            }

            function d(e, t, n) {
                t || (t = {});
                for (var o in e) !e.hasOwnProperty(o) || !1 === n && t.hasOwnProperty(o) || (t[o] = e[o]);
                return t
            }

            function f(e, t, n, o, r) {
                null == t && -1 == (t = e.search(/[^\s\u00a0]/)) && (t = e.length);
                for (var i = o || 0, a = r || 0;;) {
                    var s = e.indexOf("\t", i);
                    if (s < 0 || s >= t) return a + (t - i);
                    a += s - i, a += n - a % n, i = s + 1
                }
            }

            function h(e, t) {
                for (var n = 0; n < e.length; ++n)
                    if (e[n] == t) return n;
                return -1
            }

            function p(e, t, n) {
                for (var o = 0, r = 0;;) {
                    var i = e.indexOf("\t", o); - 1 == i && (i = e.length);
                    var a = i - o;
                    if (i == e.length || r + a >= t) return o + Math.min(a, t - r);
                    if (r += i - o, r += n - r % n, o = i + 1, r >= t) return o
                }
            }

            function g(e) {
                for (; _a.length <= e;) _a.push(m(_a) + " ");
                return _a[e]
            }

            function m(e) {
                return e[e.length - 1]
            }

            function v(e, t) {
                for (var n = [], o = 0; o < e.length; o++) n[o] = t(e[o], o);
                return n
            }

            function b(e, t, n) {
                for (var o = 0, r = n(t); o < e.length && n(e[o]) <= r;) o++;
                e.splice(o, 0, t)
            }

            function y() {}

            function w(e, t) {
                var n;
                return Object.create ? n = Object.create(e) : (y.prototype = e, n = new y), t && d(t, n), n
            }

            function x(e) {
                return /\w/.test(e) || e > "" && (e.toUpperCase() != e.toLowerCase() || Xa.test(e))
            }

            function C(e, t) {
                return t ? !!(t.source.indexOf("\\w") > -1 && x(e)) || t.test(e) : x(e)
            }

            function k(e) {
                for (var t in e)
                    if (e.hasOwnProperty(t) && e[t]) return !1;
                return !0
            }

            function S(e) {
                return e.charCodeAt(0) >= 768 && Ya.test(e)
            }

            function T(e, t, n) {
                for (;
                    (n < 0 ? t > 0 : t < e.length) && S(e.charAt(t));) t += n;
                return t
            }

            function L(e, t, n) {
                for (var o = t > n ? -1 : 1;;) {
                    if (t == n) return t;
                    var r = (t + n) / 2,
                        i = o < 0 ? Math.ceil(r) : Math.floor(r);
                    if (i == t) return e(i) ? t : n;
                    e(i) ? n = i : t = i + o
                }
            }

            function N(e, t, n) {
                var i = this;
                this.input = n, i.scrollbarFiller = o("div", null, "CodeMirror-scrollbar-filler"), i.scrollbarFiller.setAttribute("cm-not-content", "true"), i.gutterFiller = o("div", null, "CodeMirror-gutter-filler"), i.gutterFiller.setAttribute("cm-not-content", "true"), i.lineDiv = r("div", null, "CodeMirror-code"), i.selectionDiv = o("div", null, null, "position: relative; z-index: 1"), i.cursorDiv = o("div", null, "CodeMirror-cursors"), i.measure = o("div", null, "CodeMirror-measure"), i.lineMeasure = o("div", null, "CodeMirror-measure"), i.lineSpace = r("div", [i.measure, i.lineMeasure, i.selectionDiv, i.cursorDiv, i.lineDiv], null, "position: relative; outline: none");
                var a = r("div", [i.lineSpace], "CodeMirror-lines");
                i.mover = o("div", [a], null, "position: relative"), i.sizer = o("div", [i.mover], "CodeMirror-sizer"), i.sizerWidth = null, i.heightForcer = o("div", null, null, "position: absolute; height: " + ja + "px; width: 1px;"), i.gutters = o("div", null, "CodeMirror-gutters"), i.lineGutter = null, i.scroller = o("div", [i.sizer, i.heightForcer, i.gutters], "CodeMirror-scroll"), i.scroller.setAttribute("tabIndex", "-1"), i.wrapper = o("div", [i.scrollbarFiller, i.gutterFiller, i.scroller], "CodeMirror"), ya && wa < 8 && (i.gutters.style.zIndex = -1, i.scroller.style.paddingRight = 0), xa || ga && Ea || (i.scroller.draggable = !0), e && (e.appendChild ? e.appendChild(i.wrapper) : e(i.wrapper)), i.viewFrom = i.viewTo = t.first, i.reportedViewFrom = i.reportedViewTo = t.first, i.view = [], i.renderedView = null, i.externalMeasured = null, i.viewOffset = 0, i.lastWrapHeight = i.lastWrapWidth = 0, i.updateLineNumbers = null, i.nativeBarWidth = i.barHeight = i.barWidth = 0, i.scrollbarsClipped = !1, i.lineNumWidth = i.lineNumInnerWidth = i.lineNumChars = null, i.alignWidgets = !1, i.cachedCharWidth = i.cachedTextHeight = i.cachedPaddingH = null, i.maxLine = null, i.maxLineLength = 0, i.maxLineChanged = !1, i.wheelDX = i.wheelDY = i.wheelStartX = i.wheelStartY = null, i.shift = !1, i.selForContextMenu = null, i.activeTouch = null, n.init(i)
            }

            function M(e, t) {
                if ((t -= e.first) < 0 || t >= e.size) throw new Error("There is no line " + (t + e.first) + " in the document.");
                for (var n = e; !n.lines;)
                    for (var o = 0;; ++o) {
                        var r = n.children[o],
                            i = r.chunkSize();
                        if (t < i) {
                            n = r;
                            break
                        }
                        t -= i
                    }
                return n.lines[t]
            }

            function A(e, t, n) {
                var o = [],
                    r = t.line;
                return e.iter(t.line, n.line + 1, function(e) {
                    var i = e.text;
                    r == n.line && (i = i.slice(0, n.ch)), r == t.line && (i = i.slice(t.ch)), o.push(i), ++r
                }), o
            }

            function E(e, t, n) {
                var o = [];
                return e.iter(t, n, function(e) {
                    o.push(e.text)
                }), o
            }

            function F(e, t) {
                var n = t - e.height;
                if (n)
                    for (var o = e; o; o = o.parent) o.height += n
            }

            function D(e) {
                if (null == e.parent) return null;
                for (var t = e.parent, n = h(t.lines, e), o = t.parent; o; t = o, o = o.parent)
                    for (var r = 0; o.children[r] != t; ++r) n += o.children[r].chunkSize();
                return n + t.first
            }

            function I(e, t) {
                var n = e.first;
                e: do {
                    for (var o = 0; o < e.children.length; ++o) {
                        var r = e.children[o],
                            i = r.height;
                        if (t < i) {
                            e = r;
                            continue e
                        }
                        t -= i, n += r.chunkSize()
                    }
                    return n
                } while (!e.lines);
                for (var a = 0; a < e.lines.length; ++a) {
                    var s = e.lines[a],
                        l = s.height;
                    if (t < l) break;
                    t -= l
                }
                return n + a
            }

            function H(e, t) {
                return t >= e.first && t < e.first + e.size
            }

            function P(e, t) {
                return String(e.lineNumberFormatter(t + e.firstLineNumber))
            }

            function R(e, t, n) {
                if (void 0 === n && (n = null), !(this instanceof R)) return new R(e, t, n);
                this.line = e, this.ch = t, this.sticky = n
            }

            function O(e, t) {
                return e.line - t.line || e.ch - t.ch
            }

            function z(e, t) {
                return e.sticky == t.sticky && 0 == O(e, t)
            }

            function W(e) {
                return R(e.line, e.ch)
            }

            function B(e, t) {
                return O(e, t) < 0 ? t : e
            }

            function U(e, t) {
                return O(e, t) < 0 ? e : t
            }

            function $(e, t) {
                return Math.max(e.first, Math.min(t, e.first + e.size - 1))
            }

            function j(e, t) {
                if (t.line < e.first) return R(e.first, 0);
                var n = e.first + e.size - 1;
                return t.line > n ? R(n, M(e, n).text.length) : K(t, M(e, t.line).text.length)
            }

            function K(e, t) {
                var n = e.ch;
                return null == n || n > t ? R(e.line, t) : n < 0 ? R(e.line, 0) : e
            }

            function V(e, t) {
                for (var n = [], o = 0; o < t.length; o++) n[o] = j(e, t[o]);
                return n
            }

            function G() {
                Za = !0
            }

            function q() {
                Ja = !0
            }

            function _(e, t, n) {
                this.marker = e, this.from = t, this.to = n
            }

            function X(e, t) {
                if (e)
                    for (var n = 0; n < e.length; ++n) {
                        var o = e[n];
                        if (o.marker == t) return o
                    }
            }

            function Y(e, t) {
                for (var n, o = 0; o < e.length; ++o) e[o] != t && (n || (n = [])).push(e[o]);
                return n
            }

            function Z(e, t) {
                e.markedSpans = e.markedSpans ? e.markedSpans.concat([t]) : [t], t.marker.attachLine(e)
            }

            function J(e, t, n) {
                var o;
                if (e)
                    for (var r = 0; r < e.length; ++r) {
                        var i = e[r],
                            a = i.marker,
                            s = null == i.from || (a.inclusiveLeft ? i.from <= t : i.from < t);
                        if (s || i.from == t && "bookmark" == a.type && (!n || !i.marker.insertLeft)) {
                            var l = null == i.to || (a.inclusiveRight ? i.to >= t : i.to > t);
                            (o || (o = [])).push(new _(a, i.from, l ? null : i.to))
                        }
                    }
                return o
            }

            function Q(e, t, n) {
                var o;
                if (e)
                    for (var r = 0; r < e.length; ++r) {
                        var i = e[r],
                            a = i.marker,
                            s = null == i.to || (a.inclusiveRight ? i.to >= t : i.to > t);
                        if (s || i.from == t && "bookmark" == a.type && (!n || i.marker.insertLeft)) {
                            var l = null == i.from || (a.inclusiveLeft ? i.from <= t : i.from < t);
                            (o || (o = [])).push(new _(a, l ? null : i.from - t, null == i.to ? null : i.to - t))
                        }
                    }
                return o
            }

            function ee(e, t) {
                if (t.full) return null;
                var n = H(e, t.from.line) && M(e, t.from.line).markedSpans,
                    o = H(e, t.to.line) && M(e, t.to.line).markedSpans;
                if (!n && !o) return null;
                var r = t.from.ch,
                    i = t.to.ch,
                    a = 0 == O(t.from, t.to),
                    s = J(n, r, a),
                    l = Q(o, i, a),
                    c = 1 == t.text.length,
                    u = m(t.text).length + (c ? r : 0);
                if (s)
                    for (var d = 0; d < s.length; ++d) {
                        var f = s[d];
                        if (null == f.to) {
                            var h = X(l, f.marker);
                            h ? c && (f.to = null == h.to ? null : h.to + u) : f.to = r
                        }
                    }
                if (l)
                    for (var p = 0; p < l.length; ++p) {
                        var g = l[p];
                        if (null != g.to && (g.to += u), null == g.from) {
                            var v = X(s, g.marker);
                            v || (g.from = u, c && (s || (s = [])).push(g))
                        } else g.from += u, c && (s || (s = [])).push(g)
                    }
                s && (s = te(s)), l && l != s && (l = te(l));
                var b = [s];
                if (!c) {
                    var y, w = t.text.length - 2;
                    if (w > 0 && s)
                        for (var x = 0; x < s.length; ++x) null == s[x].to && (y || (y = [])).push(new _(s[x].marker, null, null));
                    for (var C = 0; C < w; ++C) b.push(y);
                    b.push(l)
                }
                return b
            }

            function te(e) {
                for (var t = 0; t < e.length; ++t) {
                    var n = e[t];
                    null != n.from && n.from == n.to && !1 !== n.marker.clearWhenEmpty && e.splice(t--, 1)
                }
                return e.length ? e : null
            }

            function ne(e, t, n) {
                var o = null;
                if (e.iter(t.line, n.line + 1, function(e) {
                        if (e.markedSpans)
                            for (var t = 0; t < e.markedSpans.length; ++t) {
                                var n = e.markedSpans[t].marker;
                                !n.readOnly || o && -1 != h(o, n) || (o || (o = [])).push(n)
                            }
                    }), !o) return null;
                for (var r = [{
                        from: t,
                        to: n
                    }], i = 0; i < o.length; ++i)
                    for (var a = o[i], s = a.find(0), l = 0; l < r.length; ++l) {
                        var c = r[l];
                        if (!(O(c.to, s.from) < 0 || O(c.from, s.to) > 0)) {
                            var u = [l, 1],
                                d = O(c.from, s.from),
                                f = O(c.to, s.to);
                            (d < 0 || !a.inclusiveLeft && !d) && u.push({
                                from: c.from,
                                to: s.from
                            }), (f > 0 || !a.inclusiveRight && !f) && u.push({
                                from: s.to,
                                to: c.to
                            }), r.splice.apply(r, u), l += u.length - 3
                        }
                    }
                return r
            }

            function oe(e) {
                var t = e.markedSpans;
                if (t) {
                    for (var n = 0; n < t.length; ++n) t[n].marker.detachLine(e);
                    e.markedSpans = null
                }
            }

            function re(e, t) {
                if (t) {
                    for (var n = 0; n < t.length; ++n) t[n].marker.attachLine(e);
                    e.markedSpans = t
                }
            }

            function ie(e) {
                return e.inclusiveLeft ? -1 : 0
            }

            function ae(e) {
                return e.inclusiveRight ? 1 : 0
            }

            function se(e, t) {
                var n = e.lines.length - t.lines.length;
                if (0 != n) return n;
                var o = e.find(),
                    r = t.find(),
                    i = O(o.from, r.from) || ie(e) - ie(t);
                return i ? -i : O(o.to, r.to) || ae(e) - ae(t) || t.id - e.id
            }

            function le(e, t) {
                var n, o = Ja && e.markedSpans;
                if (o)
                    for (var r = void 0, i = 0; i < o.length; ++i) r = o[i], r.marker.collapsed && null == (t ? r.from : r.to) && (!n || se(n, r.marker) < 0) && (n = r.marker);
                return n
            }

            function ce(e) {
                return le(e, !0)
            }

            function ue(e) {
                return le(e, !1)
            }

            function de(e, t, n, o, r) {
                var i = M(e, t),
                    a = Ja && i.markedSpans;
                if (a)
                    for (var s = 0; s < a.length; ++s) {
                        var l = a[s];
                        if (l.marker.collapsed) {
                            var c = l.marker.find(0),
                                u = O(c.from, n) || ie(l.marker) - ie(r),
                                d = O(c.to, o) || ae(l.marker) - ae(r);
                            if (!(u >= 0 && d <= 0 || u <= 0 && d >= 0) && (u <= 0 && (l.marker.inclusiveRight && r.inclusiveLeft ? O(c.to, n) >= 0 : O(c.to, n) > 0) || u >= 0 && (l.marker.inclusiveRight && r.inclusiveLeft ? O(c.from, o) <= 0 : O(c.from, o) < 0))) return !0
                        }
                    }
            }

            function fe(e) {
                for (var t; t = ce(e);) e = t.find(-1, !0).line;
                return e
            }

            function he(e) {
                for (var t; t = ue(e);) e = t.find(1, !0).line;
                return e
            }

            function pe(e) {
                for (var t, n; t = ue(e);) e = t.find(1, !0).line, (n || (n = [])).push(e);
                return n
            }

            function ge(e, t) {
                var n = M(e, t),
                    o = fe(n);
                return n == o ? t : D(o)
            }

            function me(e, t) {
                if (t > e.lastLine()) return t;
                var n, o = M(e, t);
                if (!ve(e, o)) return t;
                for (; n = ue(o);) o = n.find(1, !0).line;
                return D(o) + 1
            }

            function ve(e, t) {
                var n = Ja && t.markedSpans;
                if (n)
                    for (var o = void 0, r = 0; r < n.length; ++r)
                        if (o = n[r], o.marker.collapsed) {
                            if (null == o.from) return !0;
                            if (!o.marker.widgetNode && 0 == o.from && o.marker.inclusiveLeft && be(e, t, o)) return !0
                        }
            }

            function be(e, t, n) {
                if (null == n.to) {
                    var o = n.marker.find(1, !0);
                    return be(e, o.line, X(o.line.markedSpans, n.marker))
                }
                if (n.marker.inclusiveRight && n.to == t.text.length) return !0;
                for (var r = void 0, i = 0; i < t.markedSpans.length; ++i)
                    if (r = t.markedSpans[i], r.marker.collapsed && !r.marker.widgetNode && r.from == n.to && (null == r.to || r.to != n.from) && (r.marker.inclusiveLeft || n.marker.inclusiveRight) && be(e, t, r)) return !0
            }

            function ye(e) {
                e = fe(e);
                for (var t = 0, n = e.parent, o = 0; o < n.lines.length; ++o) {
                    var r = n.lines[o];
                    if (r == e) break;
                    t += r.height
                }
                for (var i = n.parent; i; n = i, i = n.parent)
                    for (var a = 0; a < i.children.length; ++a) {
                        var s = i.children[a];
                        if (s == n) break;
                        t += s.height
                    }
                return t
            }

            function we(e) {
                if (0 == e.height) return 0;
                for (var t, n = e.text.length, o = e; t = ce(o);) {
                    var r = t.find(0, !0);
                    o = r.from.line, n += r.from.ch - r.to.ch
                }
                for (o = e; t = ue(o);) {
                    var i = t.find(0, !0);
                    n -= o.text.length - i.from.ch, o = i.to.line, n += o.text.length - i.to.ch
                }
                return n
            }

            function xe(e) {
                var t = e.display,
                    n = e.doc;
                t.maxLine = M(n, n.first), t.maxLineLength = we(t.maxLine), t.maxLineChanged = !0, n.iter(function(e) {
                    var n = we(e);
                    n > t.maxLineLength && (t.maxLineLength = n, t.maxLine = e)
                })
            }

            function Ce(e, t, n, o) {
                if (!e) return o(t, n, "ltr", 0);
                for (var r = !1, i = 0; i < e.length; ++i) {
                    var a = e[i];
                    (a.from < n && a.to > t || t == n && a.to == t) && (o(Math.max(a.from, t), Math.min(a.to, n), 1 == a.level ? "rtl" : "ltr", i), r = !0)
                }
                r || o(t, n, "ltr")
            }

            function ke(e, t, n) {
                var o;
                Qa = null;
                for (var r = 0; r < e.length; ++r) {
                    var i = e[r];
                    if (i.from < t && i.to > t) return r;
                    i.to == t && (i.from != i.to && "before" == n ? o = r : Qa = r), i.from == t && (i.from != i.to && "before" != n ? o = r : Qa = r)
                }
                return null != o ? o : Qa
            }

            function Se(e, t) {
                var n = e.order;
                return null == n && (n = e.order = es(e.text, t)), n
            }

            function Te(e, t) {
                return e._handlers && e._handlers[t] || ts
            }

            function Le(e, t, n) {
                if (e.removeEventListener) e.removeEventListener(t, n, !1);
                else if (e.detachEvent) e.detachEvent("on" + t, n);
                else {
                    var o = e._handlers,
                        r = o && o[t];
                    if (r) {
                        var i = h(r, n);
                        i > -1 && (o[t] = r.slice(0, i).concat(r.slice(i + 1)))
                    }
                }
            }

            function Ne(e, t) {
                var n = Te(e, t);
                if (n.length)
                    for (var o = Array.prototype.slice.call(arguments, 2), r = 0; r < n.length; ++r) n[r].apply(null, o)
            }

            function Me(e, t, n) {
                return "string" == typeof t && (t = {
                    type: t,
                    preventDefault: function() {
                        this.defaultPrevented = !0
                    }
                }), Ne(e, n || t.type, e, t), He(t) || t.codemirrorIgnore
            }

            function Ae(e) {
                var t = e._handlers && e._handlers.cursorActivity;
                if (t)
                    for (var n = e.curOp.cursorActivityHandlers || (e.curOp.cursorActivityHandlers = []), o = 0; o < t.length; ++o) - 1 == h(n, t[o]) && n.push(t[o])
            }

            function Ee(e, t) {
                return Te(e, t).length > 0
            }

            function Fe(e) {
                e.prototype.on = function(e, t) {
                    ns(this, e, t)
                }, e.prototype.off = function(e, t) {
                    Le(this, e, t)
                }
            }

            function De(e) {
                e.preventDefault ? e.preventDefault() : e.returnValue = !1
            }

            function Ie(e) {
                e.stopPropagation ? e.stopPropagation() : e.cancelBubble = !0
            }

            function He(e) {
                return null != e.defaultPrevented ? e.defaultPrevented : 0 == e.returnValue
            }

            function Pe(e) {
                De(e), Ie(e)
            }

            function Re(e) {
                return e.target || e.srcElement
            }

            function Oe(e) {
                var t = e.which;
                return null == t && (1 & e.button ? t = 1 : 2 & e.button ? t = 3 : 4 & e.button && (t = 2)), Fa && e.ctrlKey && 1 == t && (t = 3), t
            }

            function ze(e) {
                if (null == Ua) {
                    var t = o("span", "​");
                    n(e, o("span", [t, document.createTextNode("x")])), 0 != e.firstChild.offsetHeight && (Ua = t.offsetWidth <= 1 && t.offsetHeight > 2 && !(ya && wa < 8))
                }
                var r = Ua ? o("span", "​") : o("span", " ", null, "display: inline-block; width: 1px; margin-right: -1px");
                return r.setAttribute("cm-text", ""), r
            }

            function We(e) {
                if (null != $a) return $a;
                var o = n(e, document.createTextNode("AخA")),
                    r = Pa(o, 0, 1).getBoundingClientRect(),
                    i = Pa(o, 1, 2).getBoundingClientRect();
                return t(e), !(!r || r.left == r.right) && ($a = i.right - r.right < 3)
            }

            function Be(e) {
                if (null != ss) return ss;
                var t = n(e, o("span", "x")),
                    r = t.getBoundingClientRect(),
                    i = Pa(t, 0, 1).getBoundingClientRect();
                return ss = Math.abs(r.left - i.left) > 1
            }

            function Ue(e, t) {
                arguments.length > 2 && (t.dependencies = Array.prototype.slice.call(arguments, 2)), ls[e] = t
            }

            function $e(e, t) {
                cs[e] = t
            }

            function je(e) {
                if ("string" == typeof e && cs.hasOwnProperty(e)) e = cs[e];
                else if (e && "string" == typeof e.name && cs.hasOwnProperty(e.name)) {
                    var t = cs[e.name];
                    "string" == typeof t && (t = {
                        name: t
                    }), e = w(t, e), e.name = t.name
                } else {
                    if ("string" == typeof e && /^[\w\-]+\/[\w\-]+\+xml$/.test(e)) return je("application/xml");
                    if ("string" == typeof e && /^[\w\-]+\/[\w\-]+\+json$/.test(e)) return je("application/json")
                }
                return "string" == typeof e ? {
                    name: e
                } : e || {
                    name: "null"
                }
            }

            function Ke(e, t) {
                t = je(t);
                var n = ls[t.name];
                if (!n) return Ke(e, "text/plain");
                var o = n(e, t);
                if (us.hasOwnProperty(t.name)) {
                    var r = us[t.name];
                    for (var i in r) r.hasOwnProperty(i) && (o.hasOwnProperty(i) && (o["_" + i] = o[i]), o[i] = r[i])
                }
                if (o.name = t.name, t.helperType && (o.helperType = t.helperType), t.modeProps)
                    for (var a in t.modeProps) o[a] = t.modeProps[a];
                return o
            }

            function Ve(e, t) {
                d(t, us.hasOwnProperty(e) ? us[e] : us[e] = {})
            }

            function Ge(e, t) {
                if (!0 === t) return t;
                if (e.copyState) return e.copyState(t);
                var n = {};
                for (var o in t) {
                    var r = t[o];
                    r instanceof Array && (r = r.concat([])), n[o] = r
                }
                return n
            }

            function qe(e, t) {
                for (var n; e.innerMode && (n = e.innerMode(t)) && n.mode != e;) t = n.state, e = n.mode;
                return n || {
                    mode: e,
                    state: t
                }
            }

            function _e(e, t, n) {
                return !e.startState || e.startState(t, n)
            }

            function Xe(e, t, n, o) {
                var r = [e.state.modeGen],
                    i = {};
                ot(e, t.text, e.doc.mode, n, function(e, t) {
                    return r.push(e, t)
                }, i, o);
                for (var a = n.state, s = 0; s < e.state.overlays.length; ++s) ! function(o) {
                    n.baseTokens = r;
                    var s = e.state.overlays[o],
                        l = 1,
                        c = 0;
                    n.state = !0, ot(e, t.text, s.mode, n, function(e, t) {
                        for (var n = l; c < e;) {
                            var o = r[l];
                            o > e && r.splice(l, 1, e, r[l + 1], o), l += 2, c = Math.min(e, o)
                        }
                        if (t)
                            if (s.opaque) r.splice(n, l - n, e, "overlay " + t), l = n + 2;
                            else
                                for (; n < l; n += 2) {
                                    var i = r[n + 1];
                                    r[n + 1] = (i ? i + " " : "") + "overlay " + t
                                }
                    }, i), n.state = a, n.baseTokens = null, n.baseTokenPos = 1
                }(s);
                return {
                    styles: r,
                    classes: i.bgClass || i.textClass ? i : null
                }
            }

            function Ye(e, t, n) {
                if (!t.styles || t.styles[0] != e.state.modeGen) {
                    var o = Ze(e, D(t)),
                        r = t.text.length > e.options.maxHighlightLength && Ge(e.doc.mode, o.state),
                        i = Xe(e, t, o);
                    r && (o.state = r), t.stateAfter = o.save(!r), t.styles = i.styles, i.classes ? t.styleClasses = i.classes : t.styleClasses && (t.styleClasses = null), n === e.doc.highlightFrontier && (e.doc.modeFrontier = Math.max(e.doc.modeFrontier, ++e.doc.highlightFrontier))
                }
                return t.styles
            }

            function Ze(e, t, n) {
                var o = e.doc,
                    r = e.display;
                if (!o.mode.startState) return new hs(o, !0, t);
                var i = rt(e, t, n),
                    a = i > o.first && M(o, i - 1).stateAfter,
                    s = a ? hs.fromSaved(o, a, i) : new hs(o, _e(o.mode), i);
                return o.iter(i, t, function(n) {
                    Je(e, n.text, s);
                    var o = s.line;
                    n.stateAfter = o == t - 1 || o % 5 == 0 || o >= r.viewFrom && o < r.viewTo ? s.save() : null, s.nextLine()
                }), n && (o.modeFrontier = s.line), s
            }

            function Je(e, t, n, o) {
                var r = e.doc.mode,
                    i = new ds(t, e.options.tabSize, n);
                for (i.start = i.pos = o || 0, "" == t && Qe(r, n.state); !i.eol();) et(r, i, n.state), i.start = i.pos
            }

            function Qe(e, t) {
                if (e.blankLine) return e.blankLine(t);
                if (e.innerMode) {
                    var n = qe(e, t);
                    return n.mode.blankLine ? n.mode.blankLine(n.state) : void 0
                }
            }

            function et(e, t, n, o) {
                for (var r = 0; r < 10; r++) {
                    o && (o[0] = qe(e, n).mode);
                    var i = e.token(t, n);
                    if (t.pos > t.start) return i
                }
                throw new Error("Mode " + e.name + " failed to advance stream.")
            }

            function tt(e, t, n, o) {
                var r, i = e.doc,
                    a = i.mode;
                t = j(i, t);
                var s, l = M(i, t.line),
                    c = Ze(e, t.line, n),
                    u = new ds(l.text, e.options.tabSize, c);
                for (o && (s = []);
                    (o || u.pos < t.ch) && !u.eol();) u.start = u.pos, r = et(a, u, c.state), o && s.push(new ps(u, r, Ge(i.mode, c.state)));
                return o ? s : new ps(u, r, c.state)
            }

            function nt(e, t) {
                if (e)
                    for (;;) {
                        var n = e.match(/(?:^|\s+)line-(background-)?(\S+)/);
                        if (!n) break;
                        e = e.slice(0, n.index) + e.slice(n.index + n[0].length);
                        var o = n[1] ? "bgClass" : "textClass";
                        null == t[o] ? t[o] = n[2] : new RegExp("(?:^|s)" + n[2] + "(?:$|s)").test(t[o]) || (t[o] += " " + n[2])
                    }
                return e
            }

            function ot(e, t, n, o, r, i, a) {
                var s = n.flattenSpans;
                null == s && (s = e.options.flattenSpans);
                var l, c = 0,
                    u = null,
                    d = new ds(t, e.options.tabSize, o),
                    f = e.options.addModeClass && [null];
                for ("" == t && nt(Qe(n, o.state), i); !d.eol();) {
                    if (d.pos > e.options.maxHighlightLength ? (s = !1, a && Je(e, t, o, d.pos), d.pos = t.length, l = null) : l = nt(et(n, d, o.state, f), i), f) {
                        var h = f[0].name;
                        h && (l = "m-" + (l ? h + " " + l : h))
                    }
                    if (!s || u != l) {
                        for (; c < d.start;) c = Math.min(d.start, c + 5e3), r(c, u);
                        u = l
                    }
                    d.start = d.pos
                }
                for (; c < d.pos;) {
                    var p = Math.min(d.pos, c + 5e3);
                    r(p, u), c = p
                }
            }

            function rt(e, t, n) {
                for (var o, r, i = e.doc, a = n ? -1 : t - (e.doc.mode.innerMode ? 1e3 : 100), s = t; s > a; --s) {
                    if (s <= i.first) return i.first;
                    var l = M(i, s - 1),
                        c = l.stateAfter;
                    if (c && (!n || s + (c instanceof fs ? c.lookAhead : 0) <= i.modeFrontier)) return s;
                    var u = f(l.text, null, e.options.tabSize);
                    (null == r || o > u) && (r = s - 1, o = u)
                }
                return r
            }

            function it(e, t) {
                if (e.modeFrontier = Math.min(e.modeFrontier, t), !(e.highlightFrontier < t - 10)) {
                    for (var n = e.first, o = t - 1; o > n; o--) {
                        var r = M(e, o).stateAfter;
                        if (r && (!(r instanceof fs) || o + r.lookAhead < t)) {
                            n = o + 1;
                            break
                        }
                    }
                    e.highlightFrontier = Math.min(e.highlightFrontier, n)
                }
            }

            function at(e, t, n, o) {
                e.text = t, e.stateAfter && (e.stateAfter = null), e.styles && (e.styles = null), null != e.order && (e.order = null), oe(e), re(e, n);
                var r = o ? o(e) : 1;
                r != e.height && F(e, r)
            }

            function st(e) {
                e.parent = null, oe(e)
            }

            function lt(e, t) {
                if (!e || /^\s*$/.test(e)) return null;
                var n = t.addModeClass ? bs : vs;
                return n[e] || (n[e] = e.replace(/\S+/g, "cm-$&"))
            }

            function ct(e, t) {
                var n = r("span", null, null, xa ? "padding-right: .1px" : null),
                    o = {
                        pre: r("pre", [n], "CodeMirror-line"),
                        content: n,
                        col: 0,
                        pos: 0,
                        cm: e,
                        trailingSpace: !1,
                        splitSpaces: (ya || xa) && e.getOption("lineWrapping")
                    };
                t.measure = {};
                for (var i = 0; i <= (t.rest ? t.rest.length : 0); i++) {
                    var a = i ? t.rest[i - 1] : t.line,
                        s = void 0;
                    o.pos = 0, o.addToken = dt, We(e.display.measure) && (s = Se(a, e.doc.direction)) && (o.addToken = ht(o.addToken, s)), o.map = [], gt(a, o, Ye(e, a, t != e.display.externalMeasured && D(a))), a.styleClasses && (a.styleClasses.bgClass && (o.bgClass = c(a.styleClasses.bgClass, o.bgClass || "")), a.styleClasses.textClass && (o.textClass = c(a.styleClasses.textClass, o.textClass || ""))), 0 == o.map.length && o.map.push(0, 0, o.content.appendChild(ze(e.display.measure))), 0 == i ? (t.measure.map = o.map, t.measure.cache = {}) : ((t.measure.maps || (t.measure.maps = [])).push(o.map), (t.measure.caches || (t.measure.caches = [])).push({}))
                }
                if (xa) {
                    var l = o.content.lastChild;
                    (/\bcm-tab\b/.test(l.className) || l.querySelector && l.querySelector(".cm-tab")) && (o.content.className = "cm-tab-wrap-hack")
                }
                return Ne(e, "renderLine", e, t.line, o.pre), o.pre.className && (o.textClass = c(o.pre.className, o.textClass || "")), o
            }

            function ut(e) {
                var t = o("span", "•", "cm-invalidchar");
                return t.title = "\\u" + e.charCodeAt(0).toString(16), t.setAttribute("aria-label", t.title), t
            }

            function dt(e, t, n, r, i, a, s) {
                if (t) {
                    var l, c = e.splitSpaces ? ft(t, e.trailingSpace) : t,
                        u = e.cm.state.specialChars,
                        d = !1;
                    if (u.test(t)) {
                        l = document.createDocumentFragment();
                        for (var f = 0;;) {
                            u.lastIndex = f;
                            var h = u.exec(t),
                                p = h ? h.index - f : t.length - f;
                            if (p) {
                                var m = document.createTextNode(c.slice(f, f + p));
                                ya && wa < 9 ? l.appendChild(o("span", [m])) : l.appendChild(m), e.map.push(e.pos, e.pos + p, m), e.col += p, e.pos += p
                            }
                            if (!h) break;
                            f += p + 1;
                            var v = void 0;
                            if ("\t" == h[0]) {
                                var b = e.cm.options.tabSize,
                                    y = b - e.col % b;
                                v = l.appendChild(o("span", g(y), "cm-tab")), v.setAttribute("role", "presentation"), v.setAttribute("cm-text", "\t"), e.col += y
                            } else "\r" == h[0] || "\n" == h[0] ? (v = l.appendChild(o("span", "\r" == h[0] ? "␍" : "␤", "cm-invalidchar")), v.setAttribute("cm-text", h[0]), e.col += 1) : (v = e.cm.options.specialCharPlaceholder(h[0]), v.setAttribute("cm-text", h[0]), ya && wa < 9 ? l.appendChild(o("span", [v])) : l.appendChild(v), e.col += 1);
                            e.map.push(e.pos, e.pos + 1, v), e.pos++
                        }
                    } else e.col += t.length, l = document.createTextNode(c), e.map.push(e.pos, e.pos + t.length, l), ya && wa < 9 && (d = !0), e.pos += t.length;
                    if (e.trailingSpace = 32 == c.charCodeAt(t.length - 1), n || r || i || d || s) {
                        var w = n || "";
                        r && (w += r), i && (w += i);
                        var x = o("span", [l], w, s);
                        return a && (x.title = a), e.content.appendChild(x)
                    }
                    e.content.appendChild(l)
                }
            }

            function ft(e, t) {
                if (e.length > 1 && !/  /.test(e)) return e;
                for (var n = t, o = "", r = 0; r < e.length; r++) {
                    var i = e.charAt(r);
                    " " != i || !n || r != e.length - 1 && 32 != e.charCodeAt(r + 1) || (i = " "), o += i, n = " " == i
                }
                return o
            }

            function ht(e, t) {
                return function(n, o, r, i, a, s, l) {
                    r = r ? r + " cm-force-border" : "cm-force-border";
                    for (var c = n.pos, u = c + o.length;;) {
                        for (var d = void 0, f = 0; f < t.length && (d = t[f], !(d.to > c && d.from <= c)); f++);
                        if (d.to >= u) return e(n, o, r, i, a, s, l);
                        e(n, o.slice(0, d.to - c), r, i, null, s, l), i = null, o = o.slice(d.to - c), c = d.to
                    }
                }
            }

            function pt(e, t, n, o) {
                var r = !o && n.widgetNode;
                r && e.map.push(e.pos, e.pos + t, r), !o && e.cm.display.input.needsContentAttribute && (r || (r = e.content.appendChild(document.createElement("span"))), r.setAttribute("cm-marker", n.id)), r && (e.cm.display.input.setUneditable(r), e.content.appendChild(r)), e.pos += t, e.trailingSpace = !1
            }

            function gt(e, t, n) {
                var o = e.markedSpans,
                    r = e.text,
                    i = 0;
                if (o)
                    for (var a, s, l, c, u, d, f, h = r.length, p = 0, g = 1, m = "", v = 0;;) {
                        if (v == p) {
                            l = c = u = d = s = "", f = null, v = 1 / 0;
                            for (var b = [], y = void 0, w = 0; w < o.length; ++w) {
                                var x = o[w],
                                    C = x.marker;
                                "bookmark" == C.type && x.from == p && C.widgetNode ? b.push(C) : x.from <= p && (null == x.to || x.to > p || C.collapsed && x.to == p && x.from == p) ? (null != x.to && x.to != p && v > x.to && (v = x.to, c = ""), C.className && (l += " " + C.className), C.css && (s = (s ? s + ";" : "") + C.css), C.startStyle && x.from == p && (u += " " + C.startStyle), C.endStyle && x.to == v && (y || (y = [])).push(C.endStyle, x.to), C.title && !d && (d = C.title), C.collapsed && (!f || se(f.marker, C) < 0) && (f = x)) : x.from > p && v > x.from && (v = x.from)
                            }
                            if (y)
                                for (var k = 0; k < y.length; k += 2) y[k + 1] == v && (c += " " + y[k]);
                            if (!f || f.from == p)
                                for (var S = 0; S < b.length; ++S) pt(t, 0, b[S]);
                            if (f && (f.from || 0) == p) {
                                if (pt(t, (null == f.to ? h + 1 : f.to) - p, f.marker, null == f.from), null == f.to) return;
                                f.to == p && (f = !1)
                            }
                        }
                        if (p >= h) break;
                        for (var T = Math.min(h, v);;) {
                            if (m) {
                                var L = p + m.length;
                                if (!f) {
                                    var N = L > T ? m.slice(0, T - p) : m;
                                    t.addToken(t, N, a ? a + l : l, u, p + N.length == v ? c : "", d, s)
                                }
                                if (L >= T) {
                                    m = m.slice(T - p), p = T;
                                    break
                                }
                                p = L, u = ""
                            }
                            m = r.slice(i, i = n[g++]), a = lt(n[g++], t.cm.options)
                        }
                    } else
                        for (var M = 1; M < n.length; M += 2) t.addToken(t, r.slice(i, i = n[M]), lt(n[M + 1], t.cm.options))
            }

            function mt(e, t, n) {
                this.line = t, this.rest = pe(t), this.size = this.rest ? D(m(this.rest)) - n + 1 : 1, this.node = this.text = null, this.hidden = ve(e, t)
            }

            function vt(e, t, n) {
                for (var o, r = [], i = t; i < n; i = o) {
                    var a = new mt(e.doc, M(e.doc, i), i);
                    o = i + a.size, r.push(a)
                }
                return r
            }

            function bt(e) {
                ys ? ys.ops.push(e) : e.ownsGroup = ys = {
                    ops: [e],
                    delayedCallbacks: []
                }
            }

            function yt(e) {
                var t = e.delayedCallbacks,
                    n = 0;
                do {
                    for (; n < t.length; n++) t[n].call(null);
                    for (var o = 0; o < e.ops.length; o++) {
                        var r = e.ops[o];
                        if (r.cursorActivityHandlers)
                            for (; r.cursorActivityCalled < r.cursorActivityHandlers.length;) r.cursorActivityHandlers[r.cursorActivityCalled++].call(null, r.cm)
                    }
                } while (n < t.length)
            }

            function wt(e, t) {
                var n = e.ownsGroup;
                if (n) try {
                    yt(n)
                } finally {
                    ys = null, t(n)
                }
            }

            function xt(e, t) {
                var n = Te(e, t);
                if (n.length) {
                    var o, r = Array.prototype.slice.call(arguments, 2);
                    ys ? o = ys.delayedCallbacks : ws ? o = ws : (o = ws = [], setTimeout(Ct, 0));
                    for (var i = 0; i < n.length; ++i) ! function(e) {
                        o.push(function() {
                            return n[e].apply(null, r)
                        })
                    }(i)
                }
            }

            function Ct() {
                var e = ws;
                ws = null;
                for (var t = 0; t < e.length; ++t) e[t]()
            }

            function kt(e, t, n, o) {
                for (var r = 0; r < t.changes.length; r++) {
                    var i = t.changes[r];
                    "text" == i ? Nt(e, t) : "gutter" == i ? At(e, t, n, o) : "class" == i ? Mt(e, t) : "widget" == i && Et(e, t, o)
                }
                t.changes = null
            }

            function St(e) {
                return e.node == e.text && (e.node = o("div", null, null, "position: relative"), e.text.parentNode && e.text.parentNode.replaceChild(e.node, e.text), e.node.appendChild(e.text), ya && wa < 8 && (e.node.style.zIndex = 2)), e.node
            }

            function Tt(e, t) {
                var n = t.bgClass ? t.bgClass + " " + (t.line.bgClass || "") : t.line.bgClass;
                if (n && (n += " CodeMirror-linebackground"), t.background) n ? t.background.className = n : (t.background.parentNode.removeChild(t.background), t.background = null);
                else if (n) {
                    var r = St(t);
                    t.background = r.insertBefore(o("div", null, n), r.firstChild), e.display.input.setUneditable(t.background)
                }
            }

            function Lt(e, t) {
                var n = e.display.externalMeasured;
                return n && n.line == t.line ? (e.display.externalMeasured = null, t.measure = n.measure, n.built) : ct(e, t)
            }

            function Nt(e, t) {
                var n = t.text.className,
                    o = Lt(e, t);
                t.text == t.node && (t.node = o.pre), t.text.parentNode.replaceChild(o.pre, t.text), t.text = o.pre, o.bgClass != t.bgClass || o.textClass != t.textClass ? (t.bgClass = o.bgClass, t.textClass = o.textClass, Mt(e, t)) : n && (t.text.className = n)
            }

            function Mt(e, t) {
                Tt(e, t), t.line.wrapClass ? St(t).className = t.line.wrapClass : t.node != t.text && (t.node.className = "");
                var n = t.textClass ? t.textClass + " " + (t.line.textClass || "") : t.line.textClass;
                t.text.className = n || ""
            }

            function At(e, t, n, r) {
                if (t.gutter && (t.node.removeChild(t.gutter), t.gutter = null), t.gutterBackground && (t.node.removeChild(t.gutterBackground), t.gutterBackground = null), t.line.gutterClass) {
                    var i = St(t);
                    t.gutterBackground = o("div", null, "CodeMirror-gutter-background " + t.line.gutterClass, "left: " + (e.options.fixedGutter ? r.fixedPos : -r.gutterTotalWidth) + "px; width: " + r.gutterTotalWidth + "px"), e.display.input.setUneditable(t.gutterBackground), i.insertBefore(t.gutterBackground, t.text)
                }
                var a = t.line.gutterMarkers;
                if (e.options.lineNumbers || a) {
                    var s = St(t),
                        l = t.gutter = o("div", null, "CodeMirror-gutter-wrapper", "left: " + (e.options.fixedGutter ? r.fixedPos : -r.gutterTotalWidth) + "px");
                    if (e.display.input.setUneditable(l), s.insertBefore(l, t.text), t.line.gutterClass && (l.className += " " + t.line.gutterClass), !e.options.lineNumbers || a && a["CodeMirror-linenumbers"] || (t.lineNumber = l.appendChild(o("div", P(e.options, n), "CodeMirror-linenumber CodeMirror-gutter-elt", "left: " + r.gutterLeft["CodeMirror-linenumbers"] + "px; width: " + e.display.lineNumInnerWidth + "px"))), a)
                        for (var c = 0; c < e.options.gutters.length; ++c) {
                            var u = e.options.gutters[c],
                                d = a.hasOwnProperty(u) && a[u];
                            d && l.appendChild(o("div", [d], "CodeMirror-gutter-elt", "left: " + r.gutterLeft[u] + "px; width: " + r.gutterWidth[u] + "px"))
                        }
                }
            }

            function Et(e, t, n) {
                t.alignable && (t.alignable = null);
                for (var o = t.node.firstChild, r = void 0; o; o = r) r = o.nextSibling, "CodeMirror-linewidget" == o.className && t.node.removeChild(o);
                Dt(e, t, n)
            }

            function Ft(e, t, n, o) {
                var r = Lt(e, t);
                return t.text = t.node = r.pre, r.bgClass && (t.bgClass = r.bgClass), r.textClass && (t.textClass = r.textClass), Mt(e, t), At(e, t, n, o), Dt(e, t, o), t.node
            }

            function Dt(e, t, n) {
                if (It(e, t.line, t, n, !0), t.rest)
                    for (var o = 0; o < t.rest.length; o++) It(e, t.rest[o], t, n, !1)
            }

            function It(e, t, n, r, i) {
                if (t.widgets)
                    for (var a = St(n), s = 0, l = t.widgets; s < l.length; ++s) {
                        var c = l[s],
                            u = o("div", [c.node], "CodeMirror-linewidget");
                        c.handleMouseEvents || u.setAttribute("cm-ignore-events", "true"), Ht(c, u, n, r), e.display.input.setUneditable(u), i && c.above ? a.insertBefore(u, n.gutter || n.text) : a.appendChild(u), xt(c, "redraw")
                    }
            }

            function Ht(e, t, n, o) {
                if (e.noHScroll) {
                    (n.alignable || (n.alignable = [])).push(t);
                    var r = o.wrapperWidth;
                    t.style.left = o.fixedPos + "px", e.coverGutter || (r -= o.gutterTotalWidth, t.style.paddingLeft = o.gutterTotalWidth + "px"), t.style.width = r + "px"
                }
                e.coverGutter && (t.style.zIndex = 5, t.style.position = "relative", e.noHScroll || (t.style.marginLeft = -o.gutterTotalWidth + "px"))
            }

            function Pt(e) {
                if (null != e.height) return e.height;
                var t = e.doc.cm;
                if (!t) return 0;
                if (!a(document.body, e.node)) {
                    var r = "position: relative;";
                    e.coverGutter && (r += "margin-left: -" + t.display.gutters.offsetWidth + "px;"), e.noHScroll && (r += "width: " + t.display.wrapper.clientWidth + "px;"), n(t.display.measure, o("div", [e.node], null, r))
                }
                return e.height = e.node.parentNode.offsetHeight
            }

            function Rt(e, t) {
                for (var n = Re(t); n != e.wrapper; n = n.parentNode)
                    if (!n || 1 == n.nodeType && "true" == n.getAttribute("cm-ignore-events") || n.parentNode == e.sizer && n != e.mover) return !0
            }

            function Ot(e) {
                return e.lineSpace.offsetTop
            }

            function zt(e) {
                return e.mover.offsetHeight - e.lineSpace.offsetHeight
            }

            function Wt(e) {
                if (e.cachedPaddingH) return e.cachedPaddingH;
                var t = n(e.measure, o("pre", "x")),
                    r = window.getComputedStyle ? window.getComputedStyle(t) : t.currentStyle,
                    i = {
                        left: parseInt(r.paddingLeft),
                        right: parseInt(r.paddingRight)
                    };
                return isNaN(i.left) || isNaN(i.right) || (e.cachedPaddingH = i), i
            }

            function Bt(e) {
                return ja - e.display.nativeBarWidth
            }

            function Ut(e) {
                return e.display.scroller.clientWidth - Bt(e) - e.display.barWidth
            }

            function $t(e) {
                return e.display.scroller.clientHeight - Bt(e) - e.display.barHeight
            }

            function jt(e, t, n) {
                var o = e.options.lineWrapping,
                    r = o && Ut(e);
                if (!t.measure.heights || o && t.measure.width != r) {
                    var i = t.measure.heights = [];
                    if (o) {
                        t.measure.width = r;
                        for (var a = t.text.firstChild.getClientRects(), s = 0; s < a.length - 1; s++) {
                            var l = a[s],
                                c = a[s + 1];
                            Math.abs(l.bottom - c.bottom) > 2 && i.push((l.bottom + c.top) / 2 - n.top)
                        }
                    }
                    i.push(n.bottom - n.top)
                }
            }

            function Kt(e, t, n) {
                if (e.line == t) return {
                    map: e.measure.map,
                    cache: e.measure.cache
                };
                for (var o = 0; o < e.rest.length; o++)
                    if (e.rest[o] == t) return {
                        map: e.measure.maps[o],
                        cache: e.measure.caches[o]
                    };
                for (var r = 0; r < e.rest.length; r++)
                    if (D(e.rest[r]) > n) return {
                        map: e.measure.maps[r],
                        cache: e.measure.caches[r],
                        before: !0
                    }
            }

            function Vt(e, t) {
                t = fe(t);
                var o = D(t),
                    r = e.display.externalMeasured = new mt(e.doc, t, o);
                r.lineN = o;
                var i = r.built = ct(e, r);
                return r.text = i.pre, n(e.display.lineMeasure, i.pre), r
            }

            function Gt(e, t, n, o) {
                return Xt(e, _t(e, t), n, o)
            }

            function qt(e, t) {
                if (t >= e.display.viewFrom && t < e.display.viewTo) return e.display.view[Nn(e, t)];
                var n = e.display.externalMeasured;
                return n && t >= n.lineN && t < n.lineN + n.size ? n : void 0
            }

            function _t(e, t) {
                var n = D(t),
                    o = qt(e, n);
                o && !o.text ? o = null : o && o.changes && (kt(e, o, n, Cn(e)), e.curOp.forceUpdate = !0), o || (o = Vt(e, t));
                var r = Kt(o, t, n);
                return {
                    line: t,
                    view: o,
                    rect: null,
                    map: r.map,
                    cache: r.cache,
                    before: r.before,
                    hasHeights: !1
                }
            }

            function Xt(e, t, n, o, r) {
                t.before && (n = -1);
                var i, a = n + (o || "");
                return t.cache.hasOwnProperty(a) ? i = t.cache[a] : (t.rect || (t.rect = t.view.text.getBoundingClientRect()), t.hasHeights || (jt(e, t.view, t.rect), t.hasHeights = !0), i = Jt(e, t, n, o), i.bogus || (t.cache[a] = i)), {
                    left: i.left,
                    right: i.right,
                    top: r ? i.rtop : i.top,
                    bottom: r ? i.rbottom : i.bottom
                }
            }

            function Yt(e, t, n) {
                for (var o, r, i, a, s, l, c = 0; c < e.length; c += 3)
                    if (s = e[c], l = e[c + 1], t < s ? (r = 0, i = 1, a = "left") : t < l ? (r = t - s, i = r + 1) : (c == e.length - 3 || t == l && e[c + 3] > t) && (i = l - s, r = i - 1, t >= l && (a = "right")), null != r) {
                        if (o = e[c + 2], s == l && n == (o.insertLeft ? "left" : "right") && (a = n), "left" == n && 0 == r)
                            for (; c && e[c - 2] == e[c - 3] && e[c - 1].insertLeft;) o = e[2 + (c -= 3)], a = "left";
                        if ("right" == n && r == l - s)
                            for (; c < e.length - 3 && e[c + 3] == e[c + 4] && !e[c + 5].insertLeft;) o = e[(c += 3) + 2], a = "right";
                        break
                    } return {
                    node: o,
                    start: r,
                    end: i,
                    collapse: a,
                    coverStart: s,
                    coverEnd: l
                }
            }

            function Zt(e, t) {
                var n = xs;
                if ("left" == t)
                    for (var o = 0; o < e.length && (n = e[o]).left == n.right; o++);
                else
                    for (var r = e.length - 1; r >= 0 && (n = e[r]).left == n.right; r--);
                return n
            }

            function Jt(e, t, n, o) {
                var r, i = Yt(t.map, n, o),
                    a = i.node,
                    s = i.start,
                    l = i.end,
                    c = i.collapse;
                if (3 == a.nodeType) {
                    for (var u = 0; u < 4; u++) {
                        for (; s && S(t.line.text.charAt(i.coverStart + s));) --s;
                        for (; i.coverStart + l < i.coverEnd && S(t.line.text.charAt(i.coverStart + l));) ++l;
                        if (r = ya && wa < 9 && 0 == s && l == i.coverEnd - i.coverStart ? a.parentNode.getBoundingClientRect() : Zt(Pa(a, s, l).getClientRects(), o), r.left || r.right || 0 == s) break;
                        l = s, s -= 1, c = "right"
                    }
                    ya && wa < 11 && (r = Qt(e.display.measure, r))
                } else {
                    s > 0 && (c = o = "right");
                    var d;
                    r = e.options.lineWrapping && (d = a.getClientRects()).length > 1 ? d["right" == o ? d.length - 1 : 0] : a.getBoundingClientRect()
                }
                if (ya && wa < 9 && !s && (!r || !r.left && !r.right)) {
                    var f = a.parentNode.getClientRects()[0];
                    r = f ? {
                        left: f.left,
                        right: f.left + xn(e.display),
                        top: f.top,
                        bottom: f.bottom
                    } : xs
                }
                for (var h = r.top - t.rect.top, p = r.bottom - t.rect.top, g = (h + p) / 2, m = t.view.measure.heights, v = 0; v < m.length - 1 && !(g < m[v]); v++);
                var b = v ? m[v - 1] : 0,
                    y = m[v],
                    w = {
                        left: ("right" == c ? r.right : r.left) - t.rect.left,
                        right: ("left" == c ? r.left : r.right) - t.rect.left,
                        top: b,
                        bottom: y
                    };
                return r.left || r.right || (w.bogus = !0), e.options.singleCursorHeightPerLine || (w.rtop = h, w.rbottom = p), w
            }

            function Qt(e, t) {
                if (!window.screen || null == screen.logicalXDPI || screen.logicalXDPI == screen.deviceXDPI || !Be(e)) return t;
                var n = screen.logicalXDPI / screen.deviceXDPI,
                    o = screen.logicalYDPI / screen.deviceYDPI;
                return {
                    left: t.left * n,
                    right: t.right * n,
                    top: t.top * o,
                    bottom: t.bottom * o
                }
            }

            function en(e) {
                if (e.measure && (e.measure.cache = {}, e.measure.heights = null, e.rest))
                    for (var t = 0; t < e.rest.length; t++) e.measure.caches[t] = {}
            }

            function tn(e) {
                e.display.externalMeasure = null, t(e.display.lineMeasure);
                for (var n = 0; n < e.display.view.length; n++) en(e.display.view[n])
            }

            function nn(e) {
                tn(e), e.display.cachedCharWidth = e.display.cachedTextHeight = e.display.cachedPaddingH = null, e.options.lineWrapping || (e.display.maxLineChanged = !0), e.display.lineNumChars = null
            }

            function on() {
                return ka && Aa ? -(document.body.getBoundingClientRect().left - parseInt(getComputedStyle(document.body).marginLeft)) : window.pageXOffset || (document.documentElement || document.body).scrollLeft
            }

            function rn() {
                return ka && Aa ? -(document.body.getBoundingClientRect().top - parseInt(getComputedStyle(document.body).marginTop)) : window.pageYOffset || (document.documentElement || document.body).scrollTop
            }

            function an(e) {
                var t = 0;
                if (e.widgets)
                    for (var n = 0; n < e.widgets.length; ++n) e.widgets[n].above && (t += Pt(e.widgets[n]));
                return t
            }

            function sn(e, t, n, o, r) {
                if (!r) {
                    var i = an(t);
                    n.top += i, n.bottom += i
                }
                if ("line" == o) return n;
                o || (o = "local");
                var a = ye(t);
                if ("local" == o ? a += Ot(e.display) : a -= e.display.viewOffset, "page" == o || "window" == o) {
                    var s = e.display.lineSpace.getBoundingClientRect();
                    a += s.top + ("window" == o ? 0 : rn());
                    var l = s.left + ("window" == o ? 0 : on());
                    n.left += l, n.right += l
                }
                return n.top += a, n.bottom += a, n
            }

            function ln(e, t, n) {
                if ("div" == n) return t;
                var o = t.left,
                    r = t.top;
                if ("page" == n) o -= on(), r -= rn();
                else if ("local" == n || !n) {
                    var i = e.display.sizer.getBoundingClientRect();
                    o += i.left, r += i.top
                }
                var a = e.display.lineSpace.getBoundingClientRect();
                return {
                    left: o - a.left,
                    top: r - a.top
                }
            }

            function cn(e, t, n, o, r) {
                return o || (o = M(e.doc, t.line)), sn(e, o, Gt(e, o, t.ch, r), n)
            }

            function un(e, t, n, o, r, i) {
                function a(t, a) {
                    var s = Xt(e, r, t, a ? "right" : "left", i);
                    return a ? s.left = s.right : s.right = s.left, sn(e, o, s, n)
                }

                function s(e, t, n) {
                    var o = l[t],
                        r = 1 == o.level;
                    return a(n ? e - 1 : e, r != n)
                }
                o = o || M(e.doc, t.line), r || (r = _t(e, o));
                var l = Se(o, e.doc.direction),
                    c = t.ch,
                    u = t.sticky;
                if (c >= o.text.length ? (c = o.text.length, u = "before") : c <= 0 && (c = 0, u = "after"), !l) return a("before" == u ? c - 1 : c, "before" == u);
                var d = ke(l, c, u),
                    f = Qa,
                    h = s(c, d, "before" == u);
                return null != f && (h.other = s(c, f, "before" != u)), h
            }

            function dn(e, t) {
                var n = 0;
                t = j(e.doc, t), e.options.lineWrapping || (n = xn(e.display) * t.ch);
                var o = M(e.doc, t.line),
                    r = ye(o) + Ot(e.display);
                return {
                    left: n,
                    right: n,
                    top: r,
                    bottom: r + o.height
                }
            }

            function fn(e, t, n, o, r) {
                var i = R(e, t, n);
                return i.xRel = r, o && (i.outside = !0), i
            }

            function hn(e, t, n) {
                var o = e.doc;
                if ((n += e.display.viewOffset) < 0) return fn(o.first, 0, null, !0, -1);
                var r = I(o, n),
                    i = o.first + o.size - 1;
                if (r > i) return fn(o.first + o.size - 1, M(o, i).text.length, null, !0, 1);
                t < 0 && (t = 0);
                for (var a = M(o, r);;) {
                    var s = vn(e, a, r, t, n),
                        l = ue(a),
                        c = l && l.find(0, !0);
                    if (!l || !(s.ch > c.from.ch || s.ch == c.from.ch && s.xRel > 0)) return s;
                    r = D(a = c.to.line)
                }
            }

            function pn(e, t, n, o) {
                o -= an(t);
                var r = t.text.length,
                    i = L(function(t) {
                        return Xt(e, n, t - 1).bottom <= o
                    }, r, 0);
                return r = L(function(t) {
                    return Xt(e, n, t).top > o
                }, i, r), {
                    begin: i,
                    end: r
                }
            }

            function gn(e, t, n, o) {
                return n || (n = _t(e, t)), pn(e, t, n, sn(e, t, Xt(e, n, o), "line").top)
            }

            function mn(e, t, n, o) {
                return !(e.bottom <= n) && (e.top > n || (o ? e.left : e.right) > t)
            }

            function vn(e, t, n, o, r) {
                r -= ye(t);
                var i = _t(e, t),
                    a = an(t),
                    s = 0,
                    l = t.text.length,
                    c = !0,
                    u = Se(t, e.doc.direction);
                if (u) {
                    var d = (e.options.lineWrapping ? yn : bn)(e, t, n, i, u, o, r);
                    c = 1 != d.level, s = c ? d.from : d.to - 1, l = c ? d.to : d.from - 1
                }
                var f, h, p = null,
                    g = null,
                    m = L(function(t) {
                        var n = Xt(e, i, t);
                        return n.top += a, n.bottom += a, !!mn(n, o, r, !1) && (n.top <= r && n.left <= o && (p = t, g = n), !0)
                    }, s, l),
                    v = !1;
                if (g) {
                    var b = o - g.left < g.right - o,
                        y = b == c;
                    m = p + (y ? 0 : 1), h = y ? "after" : "before", f = b ? g.left : g.right
                } else {
                    c || m != l && m != s || m++, h = 0 == m ? "after" : m == t.text.length ? "before" : Xt(e, i, m - (c ? 1 : 0)).bottom + a <= r == c ? "after" : "before";
                    var w = un(e, R(n, m, h), "line", t, i);
                    f = w.left, v = r < w.top || r >= w.bottom
                }
                return m = T(t.text, m, 1), fn(n, m, h, v, o - f)
            }

            function bn(e, t, n, o, r, i, a) {
                var s = L(function(s) {
                        var l = r[s],
                            c = 1 != l.level;
                        return mn(un(e, R(n, c ? l.to : l.from, c ? "before" : "after"), "line", t, o), i, a, !0)
                    }, 0, r.length - 1),
                    l = r[s];
                if (s > 0) {
                    var c = 1 != l.level,
                        u = un(e, R(n, c ? l.from : l.to, c ? "after" : "before"), "line", t, o);
                    mn(u, i, a, !0) && u.top > a && (l = r[s - 1])
                }
                return l
            }

            function yn(e, t, n, o, r, i, a) {
                var s = pn(e, t, o, a),
                    l = s.begin,
                    c = s.end;
                /\s/.test(t.text.charAt(c - 1)) && c--;
                for (var u = null, d = null, f = 0; f < r.length; f++) {
                    var h = r[f];
                    if (!(h.from >= c || h.to <= l)) {
                        var p = 1 != h.level,
                            g = Xt(e, o, p ? Math.min(c, h.to) - 1 : Math.max(l, h.from)).right,
                            m = g < i ? i - g + 1e9 : g - i;
                        (!u || d > m) && (u = h, d = m)
                    }
                }
                return u || (u = r[r.length - 1]), u.from < l && (u = {
                    from: l,
                    to: u.to,
                    level: u.level
                }), u.to > c && (u = {
                    from: u.from,
                    to: c,
                    level: u.level
                }), u
            }

            function wn(e) {
                if (null != e.cachedTextHeight) return e.cachedTextHeight;
                if (null == ms) {
                    ms = o("pre");
                    for (var r = 0; r < 49; ++r) ms.appendChild(document.createTextNode("x")), ms.appendChild(o("br"));
                    ms.appendChild(document.createTextNode("x"))
                }
                n(e.measure, ms);
                var i = ms.offsetHeight / 50;
                return i > 3 && (e.cachedTextHeight = i), t(e.measure), i || 1
            }

            function xn(e) {
                if (null != e.cachedCharWidth) return e.cachedCharWidth;
                var t = o("span", "xxxxxxxxxx"),
                    r = o("pre", [t]);
                n(e.measure, r);
                var i = t.getBoundingClientRect(),
                    a = (i.right - i.left) / 10;
                return a > 2 && (e.cachedCharWidth = a), a || 10
            }

            function Cn(e) {
                for (var t = e.display, n = {}, o = {}, r = t.gutters.clientLeft, i = t.gutters.firstChild, a = 0; i; i = i.nextSibling, ++a) n[e.options.gutters[a]] = i.offsetLeft + i.clientLeft + r, o[e.options.gutters[a]] = i.clientWidth;
                return {
                    fixedPos: kn(t),
                    gutterTotalWidth: t.gutters.offsetWidth,
                    gutterLeft: n,
                    gutterWidth: o,
                    wrapperWidth: t.wrapper.clientWidth
                }
            }

            function kn(e) {
                return e.scroller.getBoundingClientRect().left - e.sizer.getBoundingClientRect().left
            }

            function Sn(e) {
                var t = wn(e.display),
                    n = e.options.lineWrapping,
                    o = n && Math.max(5, e.display.scroller.clientWidth / xn(e.display) - 3);
                return function(r) {
                    if (ve(e.doc, r)) return 0;
                    var i = 0;
                    if (r.widgets)
                        for (var a = 0; a < r.widgets.length; a++) r.widgets[a].height && (i += r.widgets[a].height);
                    return n ? i + (Math.ceil(r.text.length / o) || 1) * t : i + t
                }
            }

            function Tn(e) {
                var t = e.doc,
                    n = Sn(e);
                t.iter(function(e) {
                    var t = n(e);
                    t != e.height && F(e, t)
                })
            }

            function Ln(e, t, n, o) {
                var r = e.display;
                if (!n && "true" == Re(t).getAttribute("cm-not-content")) return null;
                var i, a, s = r.lineSpace.getBoundingClientRect();
                try {
                    i = t.clientX - s.left, a = t.clientY - s.top
                } catch (t) {
                    return null
                }
                var l, c = hn(e, i, a);
                if (o && 1 == c.xRel && (l = M(e.doc, c.line).text).length == c.ch) {
                    var u = f(l, l.length, e.options.tabSize) - l.length;
                    c = R(c.line, Math.max(0, Math.round((i - Wt(e.display).left) / xn(e.display)) - u))
                }
                return c
            }

            function Nn(e, t) {
                if (t >= e.display.viewTo) return null;
                if ((t -= e.display.viewFrom) < 0) return null;
                for (var n = e.display.view, o = 0; o < n.length; o++)
                    if ((t -= n[o].size) < 0) return o
            }

            function Mn(e) {
                e.display.input.showSelection(e.display.input.prepareSelection())
            }

            function An(e, t) {
                void 0 === t && (t = !0);
                for (var n = e.doc, o = {}, r = o.cursors = document.createDocumentFragment(), i = o.selection = document.createDocumentFragment(), a = 0; a < n.sel.ranges.length; a++)
                    if (t || a != n.sel.primIndex) {
                        var s = n.sel.ranges[a];
                        if (!(s.from().line >= e.display.viewTo || s.to().line < e.display.viewFrom)) {
                            var l = s.empty();
                            (l || e.options.showCursorWhenSelecting) && En(e, s.head, r), l || Dn(e, s, i)
                        }
                    } return o
            }

            function En(e, t, n) {
                var r = un(e, t, "div", null, null, !e.options.singleCursorHeightPerLine),
                    i = n.appendChild(o("div", " ", "CodeMirror-cursor"));
                if (i.style.left = r.left + "px", i.style.top = r.top + "px", i.style.height = Math.max(0, r.bottom - r.top) * e.options.cursorHeight + "px", r.other) {
                    var a = n.appendChild(o("div", " ", "CodeMirror-cursor CodeMirror-secondarycursor"));
                    a.style.display = "", a.style.left = r.other.left + "px", a.style.top = r.other.top + "px", a.style.height = .85 * (r.other.bottom - r.other.top) + "px"
                }
            }

            function Fn(e, t) {
                return e.top - t.top || e.left - t.left
            }

            function Dn(e, t, n) {
                function r(e, t, n, r) {
                    t < 0 && (t = 0), t = Math.round(t), r = Math.round(r), l.appendChild(o("div", null, "CodeMirror-selected", "position: absolute; left: " + e + "px;\n                             top: " + t + "px; width: " + (null == n ? d - e : n) + "px;\n                             height: " + (r - t) + "px"))
                }

                function i(t, n, o) {
                    function i(n, o) {
                        return cn(e, R(t, n), "div", h, o)
                    }

                    function a(t, n, o) {
                        var r = gn(e, h, null, t),
                            a = "ltr" == n == ("after" == o) ? "left" : "right";
                        return i("after" == o ? r.begin : r.end - (/\s/.test(h.text.charAt(r.end - 1)) ? 2 : 1), a)[a]
                    }
                    var l, c, h = M(s, t),
                        p = h.text.length,
                        g = Se(h, s.direction);
                    return Ce(g, n || 0, null == o ? p : o, function(e, t, s, h) {
                        var m = "ltr" == s,
                            v = i(e, m ? "left" : "right"),
                            b = i(t - 1, m ? "right" : "left"),
                            y = null == n && 0 == e,
                            w = null == o && t == p,
                            x = 0 == h,
                            C = !g || h == g.length - 1;
                        if (b.top - v.top <= 3) {
                            var k = (f ? y : w) && x,
                                S = (f ? w : y) && C,
                                T = k ? u : (m ? v : b).left,
                                L = S ? d : (m ? b : v).right;
                            r(T, v.top, L - T, v.bottom)
                        } else {
                            var N, M, A, E;
                            m ? (N = f && y && x ? u : v.left, M = f ? d : a(e, s, "before"), A = f ? u : a(t, s, "after"), E = f && w && C ? d : b.right) : (N = f ? a(e, s, "before") : u, M = !f && y && x ? d : v.right, A = !f && w && C ? u : b.left, E = f ? a(t, s, "after") : d), r(N, v.top, M - N, v.bottom), v.bottom < b.top && r(u, v.bottom, null, b.top), r(A, b.top, E - A, b.bottom)
                        }(!l || Fn(v, l) < 0) && (l = v), Fn(b, l) < 0 && (l = b), (!c || Fn(v, c) < 0) && (c = v), Fn(b, c) < 0 && (c = b)
                    }), {
                        start: l,
                        end: c
                    }
                }
                var a = e.display,
                    s = e.doc,
                    l = document.createDocumentFragment(),
                    c = Wt(e.display),
                    u = c.left,
                    d = Math.max(a.sizerWidth, Ut(e) - a.sizer.offsetLeft) - c.right,
                    f = "ltr" == s.direction,
                    h = t.from(),
                    p = t.to();
                if (h.line == p.line) i(h.line, h.ch, p.ch);
                else {
                    var g = M(s, h.line),
                        m = M(s, p.line),
                        v = fe(g) == fe(m),
                        b = i(h.line, h.ch, v ? g.text.length + 1 : null).end,
                        y = i(p.line, v ? 0 : null, p.ch).start;
                    v && (b.top < y.top - 2 ? (r(b.right, b.top, null, b.bottom), r(u, y.top, y.left, y.bottom)) : r(b.right, b.top, y.left - b.right, b.bottom)), b.bottom < y.top && r(u, b.bottom, null, y.top)
                }
                n.appendChild(l)
            }

            function In(e) {
                if (e.state.focused) {
                    var t = e.display;
                    clearInterval(t.blinker);
                    var n = !0;
                    t.cursorDiv.style.visibility = "", e.options.cursorBlinkRate > 0 ? t.blinker = setInterval(function() {
                        return t.cursorDiv.style.visibility = (n = !n) ? "" : "hidden"
                    }, e.options.cursorBlinkRate) : e.options.cursorBlinkRate < 0 && (t.cursorDiv.style.visibility = "hidden")
                }
            }

            function Hn(e) {
                e.state.focused || (e.display.input.focus(), Rn(e))
            }

            function Pn(e) {
                e.state.delayingBlurEvent = !0, setTimeout(function() {
                    e.state.delayingBlurEvent && (e.state.delayingBlurEvent = !1, On(e))
                }, 100)
            }

            function Rn(e, t) {
                e.state.delayingBlurEvent && (e.state.delayingBlurEvent = !1), "nocursor" != e.options.readOnly && (e.state.focused || (Ne(e, "focus", e, t), e.state.focused = !0, l(e.display.wrapper, "CodeMirror-focused"), e.curOp || e.display.selForContextMenu == e.doc.sel || (e.display.input.reset(), xa && setTimeout(function() {
                    return e.display.input.reset(!0)
                }, 20)), e.display.input.receivedFocus()), In(e))
            }

            function On(e, t) {
                e.state.delayingBlurEvent || (e.state.focused && (Ne(e, "blur", e, t), e.state.focused = !1, za(e.display.wrapper, "CodeMirror-focused")), clearInterval(e.display.blinker), setTimeout(function() {
                    e.state.focused || (e.display.shift = !1)
                }, 150))
            }

            function zn(e) {
                for (var t = e.display, n = t.lineDiv.offsetTop, o = 0; o < t.view.length; o++) {
                    var r = t.view[o],
                        i = void 0;
                    if (!r.hidden) {
                        if (ya && wa < 8) {
                            var a = r.node.offsetTop + r.node.offsetHeight;
                            i = a - n, n = a
                        } else {
                            var s = r.node.getBoundingClientRect();
                            i = s.bottom - s.top
                        }
                        var l = r.line.height - i;
                        if (i < 2 && (i = wn(t)), (l > .005 || l < -.005) && (F(r.line, i), Wn(r.line), r.rest))
                            for (var c = 0; c < r.rest.length; c++) Wn(r.rest[c])
                    }
                }
            }

            function Wn(e) {
                if (e.widgets)
                    for (var t = 0; t < e.widgets.length; ++t) {
                        var n = e.widgets[t],
                            o = n.node.parentNode;
                        o && (n.height = o.offsetHeight)
                    }
            }

            function Bn(e, t, n) {
                var o = n && null != n.top ? Math.max(0, n.top) : e.scroller.scrollTop;
                o = Math.floor(o - Ot(e));
                var r = n && null != n.bottom ? n.bottom : o + e.wrapper.clientHeight,
                    i = I(t, o),
                    a = I(t, r);
                if (n && n.ensure) {
                    var s = n.ensure.from.line,
                        l = n.ensure.to.line;
                    s < i ? (i = s, a = I(t, ye(M(t, s)) + e.wrapper.clientHeight)) : Math.min(l, t.lastLine()) >= a && (i = I(t, ye(M(t, l)) - e.wrapper.clientHeight), a = l)
                }
                return {
                    from: i,
                    to: Math.max(a, i + 1)
                }
            }

            function Un(e) {
                var t = e.display,
                    n = t.view;
                if (t.alignWidgets || t.gutters.firstChild && e.options.fixedGutter) {
                    for (var o = kn(t) - t.scroller.scrollLeft + e.doc.scrollLeft, r = t.gutters.offsetWidth, i = o + "px", a = 0; a < n.length; a++)
                        if (!n[a].hidden) {
                            e.options.fixedGutter && (n[a].gutter && (n[a].gutter.style.left = i), n[a].gutterBackground && (n[a].gutterBackground.style.left = i));
                            var s = n[a].alignable;
                            if (s)
                                for (var l = 0; l < s.length; l++) s[l].style.left = i
                        } e.options.fixedGutter && (t.gutters.style.left = o + r + "px")
                }
            }

            function $n(e) {
                if (!e.options.lineNumbers) return !1;
                var t = e.doc,
                    n = P(e.options, t.first + t.size - 1),
                    r = e.display;
                if (n.length != r.lineNumChars) {
                    var i = r.measure.appendChild(o("div", [o("div", n)], "CodeMirror-linenumber CodeMirror-gutter-elt")),
                        a = i.firstChild.offsetWidth,
                        s = i.offsetWidth - a;
                    return r.lineGutter.style.width = "", r.lineNumInnerWidth = Math.max(a, r.lineGutter.offsetWidth - s) + 1, r.lineNumWidth = r.lineNumInnerWidth + s, r.lineNumChars = r.lineNumInnerWidth ? n.length : -1, r.lineGutter.style.width = r.lineNumWidth + "px", Ho(e), !0
                }
                return !1
            }

            function jn(e, t) {
                if (!Me(e, "scrollCursorIntoView")) {
                    var n = e.display,
                        r = n.sizer.getBoundingClientRect(),
                        i = null;
                    if (t.top + r.top < 0 ? i = !0 : t.bottom + r.top > (window.innerHeight || document.documentElement.clientHeight) && (i = !1), null != i && !Na) {
                        var a = o("div", "​", null, "position: absolute;\n                         top: " + (t.top - n.viewOffset - Ot(e.display)) + "px;\n                         height: " + (t.bottom - t.top + Bt(e) + n.barHeight) + "px;\n                         left: " + t.left + "px; width: " + Math.max(2, t.right - t.left) + "px;");
                        e.display.lineSpace.appendChild(a), a.scrollIntoView(i), e.display.lineSpace.removeChild(a)
                    }
                }
            }

            function Kn(e, t, n, o) {
                null == o && (o = 0);
                var r;
                e.options.lineWrapping || t != n || (t = t.ch ? R(t.line, "before" == t.sticky ? t.ch - 1 : t.ch, "after") : t, n = "before" == t.sticky ? R(t.line, t.ch + 1, "before") : t);
                for (var i = 0; i < 5; i++) {
                    var a = !1,
                        s = un(e, t),
                        l = n && n != t ? un(e, n) : s;
                    r = {
                        left: Math.min(s.left, l.left),
                        top: Math.min(s.top, l.top) - o,
                        right: Math.max(s.left, l.left),
                        bottom: Math.max(s.bottom, l.bottom) + o
                    };
                    var c = Gn(e, r),
                        u = e.doc.scrollTop,
                        d = e.doc.scrollLeft;
                    if (null != c.scrollTop && (Qn(e, c.scrollTop), Math.abs(e.doc.scrollTop - u) > 1 && (a = !0)), null != c.scrollLeft && (to(e, c.scrollLeft), Math.abs(e.doc.scrollLeft - d) > 1 && (a = !0)), !a) break
                }
                return r
            }

            function Vn(e, t) {
                var n = Gn(e, t);
                null != n.scrollTop && Qn(e, n.scrollTop), null != n.scrollLeft && to(e, n.scrollLeft)
            }

            function Gn(e, t) {
                var n = e.display,
                    o = wn(e.display);
                t.top < 0 && (t.top = 0);
                var r = e.curOp && null != e.curOp.scrollTop ? e.curOp.scrollTop : n.scroller.scrollTop,
                    i = $t(e),
                    a = {};
                t.bottom - t.top > i && (t.bottom = t.top + i);
                var s = e.doc.height + zt(n),
                    l = t.top < o,
                    c = t.bottom > s - o;
                if (t.top < r) a.scrollTop = l ? 0 : t.top;
                else if (t.bottom > r + i) {
                    var u = Math.min(t.top, (c ? s : t.bottom) - i);
                    u != r && (a.scrollTop = u)
                }
                var d = e.curOp && null != e.curOp.scrollLeft ? e.curOp.scrollLeft : n.scroller.scrollLeft,
                    f = Ut(e) - (e.options.fixedGutter ? n.gutters.offsetWidth : 0),
                    h = t.right - t.left > f;
                return h && (t.right = t.left + f), t.left < 10 ? a.scrollLeft = 0 : t.left < d ? a.scrollLeft = Math.max(0, t.left - (h ? 0 : 10)) : t.right > f + d - 3 && (a.scrollLeft = t.right + (h ? 0 : 10) - f), a
            }

            function qn(e, t) {
                null != t && (Zn(e), e.curOp.scrollTop = (null == e.curOp.scrollTop ? e.doc.scrollTop : e.curOp.scrollTop) + t)
            }

            function _n(e) {
                Zn(e);
                var t = e.getCursor();
                e.curOp.scrollToPos = {
                    from: t,
                    to: t,
                    margin: e.options.cursorScrollMargin
                }
            }

            function Xn(e, t, n) {
                null == t && null == n || Zn(e), null != t && (e.curOp.scrollLeft = t), null != n && (e.curOp.scrollTop = n)
            }

            function Yn(e, t) {
                Zn(e), e.curOp.scrollToPos = t
            }

            function Zn(e) {
                var t = e.curOp.scrollToPos;
                t && (e.curOp.scrollToPos = null, Jn(e, dn(e, t.from), dn(e, t.to), t.margin))
            }

            function Jn(e, t, n, o) {
                var r = Gn(e, {
                    left: Math.min(t.left, n.left),
                    top: Math.min(t.top, n.top) - o,
                    right: Math.max(t.right, n.right),
                    bottom: Math.max(t.bottom, n.bottom) + o
                });
                Xn(e, r.scrollLeft, r.scrollTop)
            }

            function Qn(e, t) {
                Math.abs(e.doc.scrollTop - t) < 2 || (ga || Do(e, {
                    top: t
                }), eo(e, t, !0), ga && Do(e), To(e, 100))
            }

            function eo(e, t, n) {
                t = Math.min(e.display.scroller.scrollHeight - e.display.scroller.clientHeight, t), (e.display.scroller.scrollTop != t || n) && (e.doc.scrollTop = t, e.display.scrollbars.setScrollTop(t), e.display.scroller.scrollTop != t && (e.display.scroller.scrollTop = t))
            }

            function to(e, t, n, o) {
                t = Math.min(t, e.display.scroller.scrollWidth - e.display.scroller.clientWidth), (n ? t == e.doc.scrollLeft : Math.abs(e.doc.scrollLeft - t) < 2) && !o || (e.doc.scrollLeft = t, Un(e), e.display.scroller.scrollLeft != t && (e.display.scroller.scrollLeft = t), e.display.scrollbars.setScrollLeft(t))
            }

            function no(e) {
                var t = e.display,
                    n = t.gutters.offsetWidth,
                    o = Math.round(e.doc.height + zt(e.display));
                return {
                    clientHeight: t.scroller.clientHeight,
                    viewHeight: t.wrapper.clientHeight,
                    scrollWidth: t.scroller.scrollWidth,
                    clientWidth: t.scroller.clientWidth,
                    viewWidth: t.wrapper.clientWidth,
                    barLeft: e.options.fixedGutter ? n : 0,
                    docHeight: o,
                    scrollHeight: o + Bt(e) + t.barHeight,
                    nativeBarWidth: t.nativeBarWidth,
                    gutterWidth: n
                }
            }

            function oo(e, t) {
                t || (t = no(e));
                var n = e.display.barWidth,
                    o = e.display.barHeight;
                ro(e, t);
                for (var r = 0; r < 4 && n != e.display.barWidth || o != e.display.barHeight; r++) n != e.display.barWidth && e.options.lineWrapping && zn(e), ro(e, no(e)), n = e.display.barWidth, o = e.display.barHeight
            }

            function ro(e, t) {
                var n = e.display,
                    o = n.scrollbars.update(t);
                n.sizer.style.paddingRight = (n.barWidth = o.right) + "px", n.sizer.style.paddingBottom = (n.barHeight = o.bottom) + "px", n.heightForcer.style.borderBottom = o.bottom + "px solid transparent", o.right && o.bottom ? (n.scrollbarFiller.style.display = "block", n.scrollbarFiller.style.height = o.bottom + "px", n.scrollbarFiller.style.width = o.right + "px") : n.scrollbarFiller.style.display = "", o.bottom && e.options.coverGutterNextToScrollbar && e.options.fixedGutter ? (n.gutterFiller.style.display = "block", n.gutterFiller.style.height = o.bottom + "px", n.gutterFiller.style.width = t.gutterWidth + "px") : n.gutterFiller.style.display = ""
            }

            function io(e) {
                e.display.scrollbars && (e.display.scrollbars.clear(), e.display.scrollbars.addClass && za(e.display.wrapper, e.display.scrollbars.addClass)), e.display.scrollbars = new Ss[e.options.scrollbarStyle](function(t) {
                    e.display.wrapper.insertBefore(t, e.display.scrollbarFiller), ns(t, "mousedown", function() {
                        e.state.focused && setTimeout(function() {
                            return e.display.input.focus()
                        }, 0)
                    }), t.setAttribute("cm-not-content", "true")
                }, function(t, n) {
                    "horizontal" == n ? to(e, t) : Qn(e, t)
                }, e), e.display.scrollbars.addClass && l(e.display.wrapper, e.display.scrollbars.addClass)
            }

            function ao(e) {
                e.curOp = {
                    cm: e,
                    viewChanged: !1,
                    startHeight: e.doc.height,
                    forceUpdate: !1,
                    updateInput: null,
                    typing: !1,
                    changeObjs: null,
                    cursorActivityHandlers: null,
                    cursorActivityCalled: 0,
                    selectionChanged: !1,
                    updateMaxLine: !1,
                    scrollLeft: null,
                    scrollTop: null,
                    scrollToPos: null,
                    focus: !1,
                    id: ++Ts
                }, bt(e.curOp)
            }

            function so(e) {
                wt(e.curOp, function(e) {
                    for (var t = 0; t < e.ops.length; t++) e.ops[t].cm.curOp = null;
                    lo(e)
                })
            }

            function lo(e) {
                for (var t = e.ops, n = 0; n < t.length; n++) co(t[n]);
                for (var o = 0; o < t.length; o++) uo(t[o]);
                for (var r = 0; r < t.length; r++) fo(t[r]);
                for (var i = 0; i < t.length; i++) ho(t[i]);
                for (var a = 0; a < t.length; a++) po(t[a])
            }

            function co(e) {
                var t = e.cm,
                    n = t.display;
                No(t), e.updateMaxLine && xe(t), e.mustUpdate = e.viewChanged || e.forceUpdate || null != e.scrollTop || e.scrollToPos && (e.scrollToPos.from.line < n.viewFrom || e.scrollToPos.to.line >= n.viewTo) || n.maxLineChanged && t.options.lineWrapping, e.update = e.mustUpdate && new Ls(t, e.mustUpdate && {
                    top: e.scrollTop,
                    ensure: e.scrollToPos
                }, e.forceUpdate)
            }

            function uo(e) {
                e.updatedDisplay = e.mustUpdate && Eo(e.cm, e.update)
            }

            function fo(e) {
                var t = e.cm,
                    n = t.display;
                e.updatedDisplay && zn(t), e.barMeasure = no(t), n.maxLineChanged && !t.options.lineWrapping && (e.adjustWidthTo = Gt(t, n.maxLine, n.maxLine.text.length).left + 3, t.display.sizerWidth = e.adjustWidthTo, e.barMeasure.scrollWidth = Math.max(n.scroller.clientWidth, n.sizer.offsetLeft + e.adjustWidthTo + Bt(t) + t.display.barWidth), e.maxScrollLeft = Math.max(0, n.sizer.offsetLeft + e.adjustWidthTo - Ut(t))), (e.updatedDisplay || e.selectionChanged) && (e.preparedSelection = n.input.prepareSelection())
            }

            function ho(e) {
                var t = e.cm;
                null != e.adjustWidthTo && (t.display.sizer.style.minWidth = e.adjustWidthTo + "px", e.maxScrollLeft < t.doc.scrollLeft && to(t, Math.min(t.display.scroller.scrollLeft, e.maxScrollLeft), !0), t.display.maxLineChanged = !1);
                var n = e.focus && e.focus == s();
                e.preparedSelection && t.display.input.showSelection(e.preparedSelection, n), (e.updatedDisplay || e.startHeight != t.doc.height) && oo(t, e.barMeasure), e.updatedDisplay && Po(t, e.barMeasure), e.selectionChanged && In(t), t.state.focused && e.updateInput && t.display.input.reset(e.typing), n && Hn(e.cm)
            }

            function po(e) {
                var t = e.cm,
                    n = t.display,
                    o = t.doc;
                e.updatedDisplay && Fo(t, e.update), null == n.wheelStartX || null == e.scrollTop && null == e.scrollLeft && !e.scrollToPos || (n.wheelStartX = n.wheelStartY = null), null != e.scrollTop && eo(t, e.scrollTop, e.forceScroll), null != e.scrollLeft && to(t, e.scrollLeft, !0, !0), e.scrollToPos && jn(t, Kn(t, j(o, e.scrollToPos.from), j(o, e.scrollToPos.to), e.scrollToPos.margin));
                var r = e.maybeHiddenMarkers,
                    i = e.maybeUnhiddenMarkers;
                if (r)
                    for (var a = 0; a < r.length; ++a) r[a].lines.length || Ne(r[a], "hide");
                if (i)
                    for (var s = 0; s < i.length; ++s) i[s].lines.length && Ne(i[s], "unhide");
                n.wrapper.offsetHeight && (o.scrollTop = t.display.scroller.scrollTop), e.changeObjs && Ne(t, "changes", t, e.changeObjs), e.update && e.update.finish()
            }

            function go(e, t) {
                if (e.curOp) return t();
                ao(e);
                try {
                    return t()
                } finally {
                    so(e)
                }
            }

            function mo(e, t) {
                return function() {
                    if (e.curOp) return t.apply(e, arguments);
                    ao(e);
                    try {
                        return t.apply(e, arguments)
                    } finally {
                        so(e)
                    }
                }
            }

            function vo(e) {
                return function() {
                    if (this.curOp) return e.apply(this, arguments);
                    ao(this);
                    try {
                        return e.apply(this, arguments)
                    } finally {
                        so(this)
                    }
                }
            }

            function bo(e) {
                return function() {
                    var t = this.cm;
                    if (!t || t.curOp) return e.apply(this, arguments);
                    ao(t);
                    try {
                        return e.apply(this, arguments)
                    } finally {
                        so(t)
                    }
                }
            }

            function yo(e, t, n, o) {
                null == t && (t = e.doc.first), null == n && (n = e.doc.first + e.doc.size), o || (o = 0);
                var r = e.display;
                if (o && n < r.viewTo && (null == r.updateLineNumbers || r.updateLineNumbers > t) && (r.updateLineNumbers = t), e.curOp.viewChanged = !0, t >= r.viewTo) Ja && ge(e.doc, t) < r.viewTo && xo(e);
                else if (n <= r.viewFrom) Ja && me(e.doc, n + o) > r.viewFrom ? xo(e) : (r.viewFrom += o, r.viewTo += o);
                else if (t <= r.viewFrom && n >= r.viewTo) xo(e);
                else if (t <= r.viewFrom) {
                    var i = Co(e, n, n + o, 1);
                    i ? (r.view = r.view.slice(i.index), r.viewFrom = i.lineN, r.viewTo += o) : xo(e)
                } else if (n >= r.viewTo) {
                    var a = Co(e, t, t, -1);
                    a ? (r.view = r.view.slice(0, a.index), r.viewTo = a.lineN) : xo(e)
                } else {
                    var s = Co(e, t, t, -1),
                        l = Co(e, n, n + o, 1);
                    s && l ? (r.view = r.view.slice(0, s.index).concat(vt(e, s.lineN, l.lineN)).concat(r.view.slice(l.index)), r.viewTo += o) : xo(e)
                }
                var c = r.externalMeasured;
                c && (n < c.lineN ? c.lineN += o : t < c.lineN + c.size && (r.externalMeasured = null))
            }

            function wo(e, t, n) {
                e.curOp.viewChanged = !0;
                var o = e.display,
                    r = e.display.externalMeasured;
                if (r && t >= r.lineN && t < r.lineN + r.size && (o.externalMeasured = null), !(t < o.viewFrom || t >= o.viewTo)) {
                    var i = o.view[Nn(e, t)];
                    if (null != i.node) {
                        var a = i.changes || (i.changes = []); - 1 == h(a, n) && a.push(n)
                    }
                }
            }

            function xo(e) {
                e.display.viewFrom = e.display.viewTo = e.doc.first, e.display.view = [], e.display.viewOffset = 0
            }

            function Co(e, t, n, o) {
                var r, i = Nn(e, t),
                    a = e.display.view;
                if (!Ja || n == e.doc.first + e.doc.size) return {
                    index: i,
                    lineN: n
                };
                for (var s = e.display.viewFrom, l = 0; l < i; l++) s += a[l].size;
                if (s != t) {
                    if (o > 0) {
                        if (i == a.length - 1) return null;
                        r = s + a[i].size - t, i++
                    } else r = s - t;
                    t += r, n += r
                }
                for (; ge(e.doc, n) != n;) {
                    if (i == (o < 0 ? 0 : a.length - 1)) return null;
                    n += o * a[i - (o < 0 ? 1 : 0)].size, i += o
                }
                return {
                    index: i,
                    lineN: n
                }
            }

            function ko(e, t, n) {
                var o = e.display;
                0 == o.view.length || t >= o.viewTo || n <= o.viewFrom ? (o.view = vt(e, t, n), o.viewFrom = t) : (o.viewFrom > t ? o.view = vt(e, t, o.viewFrom).concat(o.view) : o.viewFrom < t && (o.view = o.view.slice(Nn(e, t))), o.viewFrom = t, o.viewTo < n ? o.view = o.view.concat(vt(e, o.viewTo, n)) : o.viewTo > n && (o.view = o.view.slice(0, Nn(e, n)))), o.viewTo = n
            }

            function So(e) {
                for (var t = e.display.view, n = 0, o = 0; o < t.length; o++) {
                    var r = t[o];
                    r.hidden || r.node && !r.changes || ++n
                }
                return n
            }

            function To(e, t) {
                e.doc.highlightFrontier < e.display.viewTo && e.state.highlight.set(t, u(Lo, e))
            }

            function Lo(e) {
                var t = e.doc;
                if (!(t.highlightFrontier >= e.display.viewTo)) {
                    var n = +new Date + e.options.workTime,
                        o = Ze(e, t.highlightFrontier),
                        r = [];
                    t.iter(o.line, Math.min(t.first + t.size, e.display.viewTo + 500), function(i) {
                        if (o.line >= e.display.viewFrom) {
                            var a = i.styles,
                                s = i.text.length > e.options.maxHighlightLength ? Ge(t.mode, o.state) : null,
                                l = Xe(e, i, o, !0);
                            s && (o.state = s), i.styles = l.styles;
                            var c = i.styleClasses,
                                u = l.classes;
                            u ? i.styleClasses = u : c && (i.styleClasses = null);
                            for (var d = !a || a.length != i.styles.length || c != u && (!c || !u || c.bgClass != u.bgClass || c.textClass != u.textClass), f = 0; !d && f < a.length; ++f) d = a[f] != i.styles[f];
                            d && r.push(o.line), i.stateAfter = o.save(), o.nextLine()
                        } else i.text.length <= e.options.maxHighlightLength && Je(e, i.text, o), i.stateAfter = o.line % 5 == 0 ? o.save() : null, o.nextLine();
                        if (+new Date > n) return To(e, e.options.workDelay), !0
                    }), t.highlightFrontier = o.line, t.modeFrontier = Math.max(t.modeFrontier, o.line), r.length && go(e, function() {
                        for (var t = 0; t < r.length; t++) wo(e, r[t], "text")
                    })
                }
            }

            function No(e) {
                var t = e.display;
                !t.scrollbarsClipped && t.scroller.offsetWidth && (t.nativeBarWidth = t.scroller.offsetWidth - t.scroller.clientWidth, t.heightForcer.style.height = Bt(e) + "px", t.sizer.style.marginBottom = -t.nativeBarWidth + "px", t.sizer.style.borderRightWidth = Bt(e) + "px", t.scrollbarsClipped = !0)
            }

            function Mo(e) {
                if (e.hasFocus()) return null;
                var t = s();
                if (!t || !a(e.display.lineDiv, t)) return null;
                var n = {
                    activeElt: t
                };
                if (window.getSelection) {
                    var o = window.getSelection();
                    o.anchorNode && o.extend && a(e.display.lineDiv, o.anchorNode) && (n.anchorNode = o.anchorNode, n.anchorOffset = o.anchorOffset, n.focusNode = o.focusNode, n.focusOffset = o.focusOffset)
                }
                return n
            }

            function Ao(e) {
                if (e && e.activeElt && e.activeElt != s() && (e.activeElt.focus(), e.anchorNode && a(document.body, e.anchorNode) && a(document.body, e.focusNode))) {
                    var t = window.getSelection(),
                        n = document.createRange();
                    n.setEnd(e.anchorNode, e.anchorOffset), n.collapse(!1), t.removeAllRanges(), t.addRange(n), t.extend(e.focusNode, e.focusOffset)
                }
            }

            function Eo(e, n) {
                var o = e.display,
                    r = e.doc;
                if (n.editorIsHidden) return xo(e), !1;
                if (!n.force && n.visible.from >= o.viewFrom && n.visible.to <= o.viewTo && (null == o.updateLineNumbers || o.updateLineNumbers >= o.viewTo) && o.renderedView == o.view && 0 == So(e)) return !1;
                $n(e) && (xo(e), n.dims = Cn(e));
                var i = r.first + r.size,
                    a = Math.max(n.visible.from - e.options.viewportMargin, r.first),
                    s = Math.min(i, n.visible.to + e.options.viewportMargin);
                o.viewFrom < a && a - o.viewFrom < 20 && (a = Math.max(r.first, o.viewFrom)), o.viewTo > s && o.viewTo - s < 20 && (s = Math.min(i, o.viewTo)), Ja && (a = ge(e.doc, a), s = me(e.doc, s));
                var l = a != o.viewFrom || s != o.viewTo || o.lastWrapHeight != n.wrapperHeight || o.lastWrapWidth != n.wrapperWidth;
                ko(e, a, s), o.viewOffset = ye(M(e.doc, o.viewFrom)), e.display.mover.style.top = o.viewOffset + "px";
                var c = So(e);
                if (!l && 0 == c && !n.force && o.renderedView == o.view && (null == o.updateLineNumbers || o.updateLineNumbers >= o.viewTo)) return !1;
                var u = Mo(e);
                return c > 4 && (o.lineDiv.style.display = "none"), Io(e, o.updateLineNumbers, n.dims), c > 4 && (o.lineDiv.style.display = ""), o.renderedView = o.view, Ao(u), t(o.cursorDiv), t(o.selectionDiv), o.gutters.style.height = o.sizer.style.minHeight = 0, l && (o.lastWrapHeight = n.wrapperHeight, o.lastWrapWidth = n.wrapperWidth, To(e, 400)), o.updateLineNumbers = null, !0
            }

            function Fo(e, t) {
                for (var n = t.viewport, o = !0;
                    (o && e.options.lineWrapping && t.oldDisplayWidth != Ut(e) || (n && null != n.top && (n = {
                        top: Math.min(e.doc.height + zt(e.display) - $t(e), n.top)
                    }), t.visible = Bn(e.display, e.doc, n), !(t.visible.from >= e.display.viewFrom && t.visible.to <= e.display.viewTo))) && Eo(e, t); o = !1) {
                    zn(e);
                    var r = no(e);
                    Mn(e), oo(e, r), Po(e, r), t.force = !1
                }
                t.signal(e, "update", e), e.display.viewFrom == e.display.reportedViewFrom && e.display.viewTo == e.display.reportedViewTo || (t.signal(e, "viewportChange", e, e.display.viewFrom, e.display.viewTo), e.display.reportedViewFrom = e.display.viewFrom, e.display.reportedViewTo = e.display.viewTo)
            }

            function Do(e, t) {
                var n = new Ls(e, t);
                if (Eo(e, n)) {
                    zn(e), Fo(e, n);
                    var o = no(e);
                    Mn(e), oo(e, o), Po(e, o), n.finish()
                }
            }

            function Io(e, n, o) {
                function r(t) {
                    var n = t.nextSibling;
                    return xa && Fa && e.display.currentWheelTarget == t ? t.style.display = "none" : t.parentNode.removeChild(t), n
                }
                for (var i = e.display, a = e.options.lineNumbers, s = i.lineDiv, l = s.firstChild, c = i.view, u = i.viewFrom, d = 0; d < c.length; d++) {
                    var f = c[d];
                    if (f.hidden);
                    else if (f.node && f.node.parentNode == s) {
                        for (; l != f.node;) l = r(l);
                        var p = a && null != n && n <= u && f.lineNumber;
                        f.changes && (h(f.changes, "gutter") > -1 && (p = !1), kt(e, f, u, o)), p && (t(f.lineNumber), f.lineNumber.appendChild(document.createTextNode(P(e.options, u)))), l = f.node.nextSibling
                    } else {
                        var g = Ft(e, f, u, o);
                        s.insertBefore(g, l)
                    }
                    u += f.size
                }
                for (; l;) l = r(l)
            }

            function Ho(e) {
                var t = e.display.gutters.offsetWidth;
                e.display.sizer.style.marginLeft = t + "px"
            }

            function Po(e, t) {
                e.display.sizer.style.minHeight = t.docHeight + "px", e.display.heightForcer.style.top = t.docHeight + "px", e.display.gutters.style.height = t.docHeight + e.display.barHeight + Bt(e) + "px"
            }

            function Ro(e) {
                var n = e.display.gutters,
                    r = e.options.gutters;
                t(n);
                for (var i = 0; i < r.length; ++i) {
                    var a = r[i],
                        s = n.appendChild(o("div", null, "CodeMirror-gutter " + a));
                    "CodeMirror-linenumbers" == a && (e.display.lineGutter = s, s.style.width = (e.display.lineNumWidth || 1) + "px")
                }
                n.style.display = i ? "" : "none", Ho(e)
            }

            function Oo(e) {
                var t = h(e.gutters, "CodeMirror-linenumbers"); - 1 == t && e.lineNumbers ? e.gutters = e.gutters.concat(["CodeMirror-linenumbers"]) : t > -1 && !e.lineNumbers && (e.gutters = e.gutters.slice(0), e.gutters.splice(t, 1))
            }

            function zo(e) {
                var t = e.wheelDeltaX,
                    n = e.wheelDeltaY;
                return null == t && e.detail && e.axis == e.HORIZONTAL_AXIS && (t = e.detail), null == n && e.detail && e.axis == e.VERTICAL_AXIS ? n = e.detail : null == n && (n = e.wheelDelta), {
                    x: t,
                    y: n
                }
            }

            function Wo(e) {
                var t = zo(e);
                return t.x *= Ms, t.y *= Ms, t
            }

            function Bo(e, t) {
                var n = zo(t),
                    o = n.x,
                    r = n.y,
                    i = e.display,
                    a = i.scroller,
                    s = a.scrollWidth > a.clientWidth,
                    l = a.scrollHeight > a.clientHeight;
                if (o && s || r && l) {
                    if (r && Fa && xa) e: for (var c = t.target, u = i.view; c != a; c = c.parentNode)
                        for (var d = 0; d < u.length; d++)
                            if (u[d].node == c) {
                                e.display.currentWheelTarget = c;
                                break e
                            } if (o && !ga && !Sa && null != Ms) return r && l && Qn(e, Math.max(0, a.scrollTop + r * Ms)), to(e, Math.max(0, a.scrollLeft + o * Ms)), (!r || r && l) && De(t), void(i.wheelStartX = null);
                    if (r && null != Ms) {
                        var f = r * Ms,
                            h = e.doc.scrollTop,
                            p = h + i.wrapper.clientHeight;
                        f < 0 ? h = Math.max(0, h + f - 50) : p = Math.min(e.doc.height, p + f + 50), Do(e, {
                            top: h,
                            bottom: p
                        })
                    }
                    Ns < 20 && (null == i.wheelStartX ? (i.wheelStartX = a.scrollLeft, i.wheelStartY = a.scrollTop, i.wheelDX = o, i.wheelDY = r, setTimeout(function() {
                        if (null != i.wheelStartX) {
                            var e = a.scrollLeft - i.wheelStartX,
                                t = a.scrollTop - i.wheelStartY,
                                n = t && i.wheelDY && t / i.wheelDY || e && i.wheelDX && e / i.wheelDX;
                            i.wheelStartX = i.wheelStartY = null, n && (Ms = (Ms * Ns + n) / (Ns + 1), ++Ns)
                        }
                    }, 200)) : (i.wheelDX += o, i.wheelDY += r))
                }
            }

            function Uo(e, t) {
                var n = e[t];
                e.sort(function(e, t) {
                    return O(e.from(), t.from())
                }), t = h(e, n);
                for (var o = 1; o < e.length; o++) {
                    var r = e[o],
                        i = e[o - 1];
                    if (O(i.to(), r.from()) >= 0) {
                        var a = U(i.from(), r.from()),
                            s = B(i.to(), r.to()),
                            l = i.empty() ? r.from() == r.head : i.from() == i.head;
                        o <= t && --t, e.splice(--o, 2, new Es(l ? s : a, l ? a : s))
                    }
                }
                return new As(e, t)
            }

            function $o(e, t) {
                return new As([new Es(e, t || e)], 0)
            }

            function jo(e) {
                return e.text ? R(e.from.line + e.text.length - 1, m(e.text).length + (1 == e.text.length ? e.from.ch : 0)) : e.to
            }

            function Ko(e, t) {
                if (O(e, t.from) < 0) return e;
                if (O(e, t.to) <= 0) return jo(t);
                var n = e.line + t.text.length - (t.to.line - t.from.line) - 1,
                    o = e.ch;
                return e.line == t.to.line && (o += jo(t).ch - t.to.ch), R(n, o)
            }

            function Vo(e, t) {
                for (var n = [], o = 0; o < e.sel.ranges.length; o++) {
                    var r = e.sel.ranges[o];
                    n.push(new Es(Ko(r.anchor, t), Ko(r.head, t)))
                }
                return Uo(n, e.sel.primIndex)
            }

            function Go(e, t, n) {
                return e.line == t.line ? R(n.line, e.ch - t.ch + n.ch) : R(n.line + (e.line - t.line), e.ch)
            }

            function qo(e, t, n) {
                for (var o = [], r = R(e.first, 0), i = r, a = 0; a < t.length; a++) {
                    var s = t[a],
                        l = Go(s.from, r, i),
                        c = Go(jo(s), r, i);
                    if (r = s.to, i = c, "around" == n) {
                        var u = e.sel.ranges[a],
                            d = O(u.head, u.anchor) < 0;
                        o[a] = new Es(d ? c : l, d ? l : c)
                    } else o[a] = new Es(l, l)
                }
                return new As(o, e.sel.primIndex)
            }

            function _o(e) {
                e.doc.mode = Ke(e.options, e.doc.modeOption), Xo(e)
            }

            function Xo(e) {
                e.doc.iter(function(e) {
                    e.stateAfter && (e.stateAfter = null), e.styles && (e.styles = null)
                }), e.doc.modeFrontier = e.doc.highlightFrontier = e.doc.first, To(e, 100), e.state.modeGen++, e.curOp && yo(e)
            }

            function Yo(e, t) {
                return 0 == t.from.ch && 0 == t.to.ch && "" == m(t.text) && (!e.cm || e.cm.options.wholeLineUpdateBefore)
            }

            function Zo(e, t, n, o) {
                function r(e) {
                    return n ? n[e] : null
                }

                function i(e, n, r) {
                    at(e, n, r, o), xt(e, "change", e, t)
                }

                function a(e, t) {
                    for (var n = [], i = e; i < t; ++i) n.push(new gs(c[i], r(i), o));
                    return n
                }
                var s = t.from,
                    l = t.to,
                    c = t.text,
                    u = M(e, s.line),
                    d = M(e, l.line),
                    f = m(c),
                    h = r(c.length - 1),
                    p = l.line - s.line;
                if (t.full) e.insert(0, a(0, c.length)), e.remove(c.length, e.size - c.length);
                else if (Yo(e, t)) {
                    var g = a(0, c.length - 1);
                    i(d, d.text, h), p && e.remove(s.line, p), g.length && e.insert(s.line, g)
                } else if (u == d)
                    if (1 == c.length) i(u, u.text.slice(0, s.ch) + f + u.text.slice(l.ch), h);
                    else {
                        var v = a(1, c.length - 1);
                        v.push(new gs(f + u.text.slice(l.ch), h, o)), i(u, u.text.slice(0, s.ch) + c[0], r(0)), e.insert(s.line + 1, v)
                    }
                else if (1 == c.length) i(u, u.text.slice(0, s.ch) + c[0] + d.text.slice(l.ch), r(0)), e.remove(s.line + 1, p);
                else {
                    i(u, u.text.slice(0, s.ch) + c[0], r(0)), i(d, f + d.text.slice(l.ch), h);
                    var b = a(1, c.length - 1);
                    p > 1 && e.remove(s.line + 1, p - 1), e.insert(s.line + 1, b)
                }
                xt(e, "change", e, t)
            }

            function Jo(e, t, n) {
                function o(e, r, i) {
                    if (e.linked)
                        for (var a = 0; a < e.linked.length; ++a) {
                            var s = e.linked[a];
                            if (s.doc != r) {
                                var l = i && s.sharedHist;
                                n && !l || (t(s.doc, l), o(s.doc, e, l))
                            }
                        }
                }
                o(e, null, !0)
            }

            function Qo(e, t) {
                if (t.cm) throw new Error("This document is already in use.");
                e.doc = t, t.cm = e, Tn(e), _o(e), er(e), e.options.lineWrapping || xe(e), e.options.mode = t.modeOption, yo(e)
            }

            function er(e) {
                ("rtl" == e.doc.direction ? l : za)(e.display.lineDiv, "CodeMirror-rtl")
            }

            function tr(e) {
                go(e, function() {
                    er(e), yo(e)
                })
            }

            function nr(e) {
                this.done = [], this.undone = [], this.undoDepth = 1 / 0, this.lastModTime = this.lastSelTime = 0, this.lastOp = this.lastSelOp = null, this.lastOrigin = this.lastSelOrigin = null, this.generation = this.maxGeneration = e || 1
            }

            function or(e, t) {
                var n = {
                    from: W(t.from),
                    to: jo(t),
                    text: A(e, t.from, t.to)
                };
                return ur(e, n, t.from.line, t.to.line + 1), Jo(e, function(e) {
                    return ur(e, n, t.from.line, t.to.line + 1)
                }, !0), n
            }

            function rr(e) {
                for (; e.length && m(e).ranges;) e.pop()
            }

            function ir(e, t) {
                return t ? (rr(e.done), m(e.done)) : e.done.length && !m(e.done).ranges ? m(e.done) : e.done.length > 1 && !e.done[e.done.length - 2].ranges ? (e.done.pop(), m(e.done)) : void 0
            }

            function ar(e, t, n, o) {
                var r = e.history;
                r.undone.length = 0;
                var i, a, s = +new Date;
                if ((r.lastOp == o || r.lastOrigin == t.origin && t.origin && ("+" == t.origin.charAt(0) && e.cm && r.lastModTime > s - e.cm.options.historyEventDelay || "*" == t.origin.charAt(0))) && (i = ir(r, r.lastOp == o))) a = m(i.changes), 0 == O(t.from, t.to) && 0 == O(t.from, a.to) ? a.to = jo(t) : i.changes.push(or(e, t));
                else {
                    var l = m(r.done);
                    for (l && l.ranges || cr(e.sel, r.done), i = {
                            changes: [or(e, t)],
                            generation: r.generation
                        }, r.done.push(i); r.done.length > r.undoDepth;) r.done.shift(), r.done[0].ranges || r.done.shift()
                }
                r.done.push(n), r.generation = ++r.maxGeneration, r.lastModTime = r.lastSelTime = s, r.lastOp = r.lastSelOp = o, r.lastOrigin = r.lastSelOrigin = t.origin, a || Ne(e, "historyAdded")
            }

            function sr(e, t, n, o) {
                var r = t.charAt(0);
                return "*" == r || "+" == r && n.ranges.length == o.ranges.length && n.somethingSelected() == o.somethingSelected() && new Date - e.history.lastSelTime <= (e.cm ? e.cm.options.historyEventDelay : 500)
            }

            function lr(e, t, n, o) {
                var r = e.history,
                    i = o && o.origin;
                n == r.lastSelOp || i && r.lastSelOrigin == i && (r.lastModTime == r.lastSelTime && r.lastOrigin == i || sr(e, i, m(r.done), t)) ? r.done[r.done.length - 1] = t : cr(t, r.done), r.lastSelTime = +new Date, r.lastSelOrigin = i, r.lastSelOp = n, o && !1 !== o.clearRedo && rr(r.undone)
            }

            function cr(e, t) {
                var n = m(t);
                n && n.ranges && n.equals(e) || t.push(e)
            }

            function ur(e, t, n, o) {
                var r = t["spans_" + e.id],
                    i = 0;
                e.iter(Math.max(e.first, n), Math.min(e.first + e.size, o), function(n) {
                    n.markedSpans && ((r || (r = t["spans_" + e.id] = {}))[i] = n.markedSpans), ++i
                })
            }

            function dr(e) {
                if (!e) return null;
                for (var t, n = 0; n < e.length; ++n) e[n].marker.explicitlyCleared ? t || (t = e.slice(0, n)) : t && t.push(e[n]);
                return t ? t.length ? t : null : e
            }

            function fr(e, t) {
                var n = t["spans_" + e.id];
                if (!n) return null;
                for (var o = [], r = 0; r < t.text.length; ++r) o.push(dr(n[r]));
                return o
            }

            function hr(e, t) {
                var n = fr(e, t),
                    o = ee(e, t);
                if (!n) return o;
                if (!o) return n;
                for (var r = 0; r < n.length; ++r) {
                    var i = n[r],
                        a = o[r];
                    if (i && a) e: for (var s = 0; s < a.length; ++s) {
                        for (var l = a[s], c = 0; c < i.length; ++c)
                            if (i[c].marker == l.marker) continue e;
                        i.push(l)
                    } else a && (n[r] = a)
                }
                return n
            }

            function pr(e, t, n) {
                for (var o = [], r = 0; r < e.length; ++r) {
                    var i = e[r];
                    if (i.ranges) o.push(n ? As.prototype.deepCopy.call(i) : i);
                    else {
                        var a = i.changes,
                            s = [];
                        o.push({
                            changes: s
                        });
                        for (var l = 0; l < a.length; ++l) {
                            var c = a[l],
                                u = void 0;
                            if (s.push({
                                    from: c.from,
                                    to: c.to,
                                    text: c.text
                                }), t)
                                for (var d in c)(u = d.match(/^spans_(\d+)$/)) && h(t, Number(u[1])) > -1 && (m(s)[d] = c[d], delete c[d])
                        }
                    }
                }
                return o
            }

            function gr(e, t, n, o) {
                if (o) {
                    var r = e.anchor;
                    if (n) {
                        var i = O(t, r) < 0;
                        i != O(n, r) < 0 ? (r = t, t = n) : i != O(t, n) < 0 && (t = n)
                    }
                    return new Es(r, t)
                }
                return new Es(n || t, t)
            }

            function mr(e, t, n, o, r) {
                null == r && (r = e.cm && (e.cm.display.shift || e.extend)), Cr(e, new As([gr(e.sel.primary(), t, n, r)], 0), o)
            }

            function vr(e, t, n) {
                for (var o = [], r = e.cm && (e.cm.display.shift || e.extend), i = 0; i < e.sel.ranges.length; i++) o[i] = gr(e.sel.ranges[i], t[i], null, r);
                Cr(e, Uo(o, e.sel.primIndex), n)
            }

            function br(e, t, n, o) {
                var r = e.sel.ranges.slice(0);
                r[t] = n, Cr(e, Uo(r, e.sel.primIndex), o)
            }

            function yr(e, t, n, o) {
                Cr(e, $o(t, n), o)
            }

            function wr(e, t, n) {
                var o = {
                    ranges: t.ranges,
                    update: function(t) {
                        var n = this;
                        this.ranges = [];
                        for (var o = 0; o < t.length; o++) n.ranges[o] = new Es(j(e, t[o].anchor), j(e, t[o].head))
                    },
                    origin: n && n.origin
                };
                return Ne(e, "beforeSelectionChange", e, o), e.cm && Ne(e.cm, "beforeSelectionChange", e.cm, o), o.ranges != t.ranges ? Uo(o.ranges, o.ranges.length - 1) : t
            }

            function xr(e, t, n) {
                var o = e.history.done,
                    r = m(o);
                r && r.ranges ? (o[o.length - 1] = t, kr(e, t, n)) : Cr(e, t, n)
            }

            function Cr(e, t, n) {
                kr(e, t, n), lr(e, e.sel, e.cm ? e.cm.curOp.id : NaN, n)
            }

            function kr(e, t, n) {
                (Ee(e, "beforeSelectionChange") || e.cm && Ee(e.cm, "beforeSelectionChange")) && (t = wr(e, t, n)), Sr(e, Lr(e, t, n && n.bias || (O(t.primary().head, e.sel.primary().head) < 0 ? -1 : 1), !0)), n && !1 === n.scroll || !e.cm || _n(e.cm)
            }

            function Sr(e, t) {
                t.equals(e.sel) || (e.sel = t, e.cm && (e.cm.curOp.updateInput = e.cm.curOp.selectionChanged = !0, Ae(e.cm)), xt(e, "cursorActivity", e))
            }

            function Tr(e) {
                Sr(e, Lr(e, e.sel, null, !1))
            }

            function Lr(e, t, n, o) {
                for (var r, i = 0; i < t.ranges.length; i++) {
                    var a = t.ranges[i],
                        s = t.ranges.length == e.sel.ranges.length && e.sel.ranges[i],
                        l = Mr(e, a.anchor, s && s.anchor, n, o),
                        c = Mr(e, a.head, s && s.head, n, o);
                    (r || l != a.anchor || c != a.head) && (r || (r = t.ranges.slice(0, i)), r[i] = new Es(l, c))
                }
                return r ? Uo(r, t.primIndex) : t
            }

            function Nr(e, t, n, o, r) {
                var i = M(e, t.line);
                if (i.markedSpans)
                    for (var a = 0; a < i.markedSpans.length; ++a) {
                        var s = i.markedSpans[a],
                            l = s.marker;
                        if ((null == s.from || (l.inclusiveLeft ? s.from <= t.ch : s.from < t.ch)) && (null == s.to || (l.inclusiveRight ? s.to >= t.ch : s.to > t.ch))) {
                            if (r && (Ne(l, "beforeCursorEnter"), l.explicitlyCleared)) {
                                if (i.markedSpans) {
                                    --a;
                                    continue
                                }
                                break
                            }
                            if (!l.atomic) continue;
                            if (n) {
                                var c = l.find(o < 0 ? 1 : -1),
                                    u = void 0;
                                if ((o < 0 ? l.inclusiveRight : l.inclusiveLeft) && (c = Ar(e, c, -o, c && c.line == t.line ? i : null)), c && c.line == t.line && (u = O(c, n)) && (o < 0 ? u < 0 : u > 0)) return Nr(e, c, t, o, r)
                            }
                            var d = l.find(o < 0 ? -1 : 1);
                            return (o < 0 ? l.inclusiveLeft : l.inclusiveRight) && (d = Ar(e, d, o, d.line == t.line ? i : null)), d ? Nr(e, d, t, o, r) : null
                        }
                    }
                return t
            }

            function Mr(e, t, n, o, r) {
                var i = o || 1;
                return Nr(e, t, n, i, r) || !r && Nr(e, t, n, i, !0) || Nr(e, t, n, -i, r) || !r && Nr(e, t, n, -i, !0) || (e.cantEdit = !0, R(e.first, 0))
            }

            function Ar(e, t, n, o) {
                return n < 0 && 0 == t.ch ? t.line > e.first ? j(e, R(t.line - 1)) : null : n > 0 && t.ch == (o || M(e, t.line)).text.length ? t.line < e.first + e.size - 1 ? R(t.line + 1, 0) : null : new R(t.line, t.ch + n)
            }

            function Er(e) {
                e.setSelection(R(e.firstLine(), 0), R(e.lastLine()), Va)
            }

            function Fr(e, t, n) {
                var o = {
                    canceled: !1,
                    from: t.from,
                    to: t.to,
                    text: t.text,
                    origin: t.origin,
                    cancel: function() {
                        return o.canceled = !0
                    }
                };
                return n && (o.update = function(t, n, r, i) {
                    t && (o.from = j(e, t)), n && (o.to = j(e, n)), r && (o.text = r), void 0 !== i && (o.origin = i)
                }), Ne(e, "beforeChange", e, o), e.cm && Ne(e.cm, "beforeChange", e.cm, o), o.canceled ? null : {
                    from: o.from,
                    to: o.to,
                    text: o.text,
                    origin: o.origin
                }
            }

            function Dr(e, t, n) {
                if (e.cm) {
                    if (!e.cm.curOp) return mo(e.cm, Dr)(e, t, n);
                    if (e.cm.state.suppressEdits) return
                }
                if (!(Ee(e, "beforeChange") || e.cm && Ee(e.cm, "beforeChange")) || (t = Fr(e, t, !0))) {
                    var o = Za && !n && ne(e, t.from, t.to);
                    if (o)
                        for (var r = o.length - 1; r >= 0; --r) Ir(e, {
                            from: o[r].from,
                            to: o[r].to,
                            text: r ? [""] : t.text,
                            origin: t.origin
                        });
                    else Ir(e, t)
                }
            }

            function Ir(e, t) {
                if (1 != t.text.length || "" != t.text[0] || 0 != O(t.from, t.to)) {
                    var n = Vo(e, t);
                    ar(e, t, n, e.cm ? e.cm.curOp.id : NaN), Rr(e, t, n, ee(e, t));
                    var o = [];
                    Jo(e, function(e, n) {
                        n || -1 != h(o, e.history) || (Ur(e.history, t), o.push(e.history)), Rr(e, t, null, ee(e, t))
                    })
                }
            }

            function Hr(e, t, n) {
                if (!e.cm || !e.cm.state.suppressEdits || n) {
                    for (var o, r = e.history, i = e.sel, a = "undo" == t ? r.done : r.undone, s = "undo" == t ? r.undone : r.done, l = 0; l < a.length && (o = a[l], n ? !o.ranges || o.equals(e.sel) : o.ranges); l++);
                    if (l != a.length) {
                        for (r.lastOrigin = r.lastSelOrigin = null; o = a.pop(), o.ranges;) {
                            if (cr(o, s), n && !o.equals(e.sel)) return void Cr(e, o, {
                                clearRedo: !1
                            });
                            i = o
                        }
                        var c = [];
                        cr(i, s), s.push({
                            changes: c,
                            generation: r.generation
                        }), r.generation = o.generation || ++r.maxGeneration;
                        for (var u = Ee(e, "beforeChange") || e.cm && Ee(e.cm, "beforeChange"), d = o.changes.length - 1; d >= 0; --d) {
                            var f = function(n) {
                                var r = o.changes[n];
                                if (r.origin = t, u && !Fr(e, r, !1)) return a.length = 0, {};
                                c.push(or(e, r));
                                var i = n ? Vo(e, r) : m(a);
                                Rr(e, r, i, hr(e, r)), !n && e.cm && e.cm.scrollIntoView({
                                    from: r.from,
                                    to: jo(r)
                                });
                                var s = [];
                                Jo(e, function(e, t) {
                                    t || -1 != h(s, e.history) || (Ur(e.history, r), s.push(e.history)), Rr(e, r, null, hr(e, r))
                                })
                            }(d);
                            if (f) return f.v
                        }
                    }
                }
            }

            function Pr(e, t) {
                if (0 != t && (e.first += t, e.sel = new As(v(e.sel.ranges, function(e) {
                        return new Es(R(e.anchor.line + t, e.anchor.ch), R(e.head.line + t, e.head.ch))
                    }), e.sel.primIndex), e.cm)) {
                    yo(e.cm, e.first, e.first - t, t);
                    for (var n = e.cm.display, o = n.viewFrom; o < n.viewTo; o++) wo(e.cm, o, "gutter")
                }
            }

            function Rr(e, t, n, o) {
                if (e.cm && !e.cm.curOp) return mo(e.cm, Rr)(e, t, n, o);
                if (t.to.line < e.first) return void Pr(e, t.text.length - 1 - (t.to.line - t.from.line));
                if (!(t.from.line > e.lastLine())) {
                    if (t.from.line < e.first) {
                        var r = t.text.length - 1 - (e.first - t.from.line);
                        Pr(e, r), t = {
                            from: R(e.first, 0),
                            to: R(t.to.line + r, t.to.ch),
                            text: [m(t.text)],
                            origin: t.origin
                        }
                    }
                    var i = e.lastLine();
                    t.to.line > i && (t = {
                        from: t.from,
                        to: R(i, M(e, i).text.length),
                        text: [t.text[0]],
                        origin: t.origin
                    }), t.removed = A(e, t.from, t.to), n || (n = Vo(e, t)), e.cm ? Or(e.cm, t, o) : Zo(e, t, o), kr(e, n, Va)
                }
            }

            function Or(e, t, n) {
                var o = e.doc,
                    r = e.display,
                    i = t.from,
                    a = t.to,
                    s = !1,
                    l = i.line;
                e.options.lineWrapping || (l = D(fe(M(o, i.line))), o.iter(l, a.line + 1, function(e) {
                    if (e == r.maxLine) return s = !0, !0
                })), o.sel.contains(t.from, t.to) > -1 && Ae(e), Zo(o, t, n, Sn(e)), e.options.lineWrapping || (o.iter(l, i.line + t.text.length, function(e) {
                    var t = we(e);
                    t > r.maxLineLength && (r.maxLine = e, r.maxLineLength = t, r.maxLineChanged = !0, s = !1)
                }), s && (e.curOp.updateMaxLine = !0)), it(o, i.line), To(e, 400);
                var c = t.text.length - (a.line - i.line) - 1;
                t.full ? yo(e) : i.line != a.line || 1 != t.text.length || Yo(e.doc, t) ? yo(e, i.line, a.line + 1, c) : wo(e, i.line, "text");
                var u = Ee(e, "changes"),
                    d = Ee(e, "change");
                if (d || u) {
                    var f = {
                        from: i,
                        to: a,
                        text: t.text,
                        removed: t.removed,
                        origin: t.origin
                    };
                    d && xt(e, "change", e, f), u && (e.curOp.changeObjs || (e.curOp.changeObjs = [])).push(f)
                }
                e.display.selForContextMenu = null
            }

            function zr(e, t, n, o, r) {
                if (o || (o = n), O(o, n) < 0) {
                    var i;
                    i = [o, n], n = i[0], o = i[1]
                }
                "string" == typeof t && (t = e.splitLines(t)), Dr(e, {
                    from: n,
                    to: o,
                    text: t,
                    origin: r
                })
            }

            function Wr(e, t, n, o) {
                n < e.line ? e.line += o : t < e.line && (e.line = t, e.ch = 0)
            }

            function Br(e, t, n, o) {
                for (var r = 0; r < e.length; ++r) {
                    var i = e[r],
                        a = !0;
                    if (i.ranges) {
                        i.copied || (i = e[r] = i.deepCopy(), i.copied = !0);
                        for (var s = 0; s < i.ranges.length; s++) Wr(i.ranges[s].anchor, t, n, o), Wr(i.ranges[s].head, t, n, o)
                    } else {
                        for (var l = 0; l < i.changes.length; ++l) {
                            var c = i.changes[l];
                            if (n < c.from.line) c.from = R(c.from.line + o, c.from.ch), c.to = R(c.to.line + o, c.to.ch);
                            else if (t <= c.to.line) {
                                a = !1;
                                break
                            }
                        }
                        a || (e.splice(0, r + 1), r = 0)
                    }
                }
            }

            function Ur(e, t) {
                var n = t.from.line,
                    o = t.to.line,
                    r = t.text.length - (o - n) - 1;
                Br(e.done, n, o, r), Br(e.undone, n, o, r)
            }

            function $r(e, t, n, o) {
                var r = t,
                    i = t;
                return "number" == typeof t ? i = M(e, $(e, t)) : r = D(t), null == r ? null : (o(i, r) && e.cm && wo(e.cm, r, n), i)
            }

            function jr(e) {
                var t = this;
                this.lines = e, this.parent = null;
                for (var n = 0, o = 0; o < e.length; ++o) e[o].parent = t, n += e[o].height;
                this.height = n
            }

            function Kr(e) {
                var t = this;
                this.children = e;
                for (var n = 0, o = 0, r = 0; r < e.length; ++r) {
                    var i = e[r];
                    n += i.chunkSize(), o += i.height, i.parent = t
                }
                this.size = n, this.height = o, this.parent = null
            }

            function Vr(e, t, n) {
                ye(t) < (e.curOp && e.curOp.scrollTop || e.doc.scrollTop) && qn(e, n)
            }

            function Gr(e, t, n, o) {
                var r = new Fs(e, n, o),
                    i = e.cm;
                return i && r.noHScroll && (i.display.alignWidgets = !0), $r(e, t, "widget", function(t) {
                    var n = t.widgets || (t.widgets = []);
                    if (null == r.insertAt ? n.push(r) : n.splice(Math.min(n.length - 1, Math.max(0, r.insertAt)), 0, r), r.line = t, i && !ve(e, t)) {
                        var o = ye(t) < e.scrollTop;
                        F(t, t.height + Pt(r)), o && qn(i, r.height), i.curOp.forceUpdate = !0
                    }
                    return !0
                }), xt(i, "lineWidgetAdded", i, r, "number" == typeof t ? t : D(t)), r
            }

            function qr(e, t, n, o, i) {
                if (o && o.shared) return _r(e, t, n, o, i);
                if (e.cm && !e.cm.curOp) return mo(e.cm, qr)(e, t, n, o, i);
                var a = new Is(e, i),
                    s = O(t, n);
                if (o && d(o, a, !1), s > 0 || 0 == s && !1 !== a.clearWhenEmpty) return a;
                if (a.replacedWith && (a.collapsed = !0, a.widgetNode = r("span", [a.replacedWith], "CodeMirror-widget"), o.handleMouseEvents || a.widgetNode.setAttribute("cm-ignore-events", "true"), o.insertLeft && (a.widgetNode.insertLeft = !0)), a.collapsed) {
                    if (de(e, t.line, t, n, a) || t.line != n.line && de(e, n.line, t, n, a)) throw new Error("Inserting collapsed marker partially overlapping an existing one");
                    q()
                }
                a.addToHistory && ar(e, {
                    from: t,
                    to: n,
                    origin: "markText"
                }, e.sel, NaN);
                var l, c = t.line,
                    u = e.cm;
                if (e.iter(c, n.line + 1, function(e) {
                        u && a.collapsed && !u.options.lineWrapping && fe(e) == u.display.maxLine && (l = !0), a.collapsed && c != t.line && F(e, 0), Z(e, new _(a, c == t.line ? t.ch : null, c == n.line ? n.ch : null)), ++c
                    }), a.collapsed && e.iter(t.line, n.line + 1, function(t) {
                        ve(e, t) && F(t, 0)
                    }), a.clearOnEnter && ns(a, "beforeCursorEnter", function() {
                        return a.clear()
                    }), a.readOnly && (G(), (e.history.done.length || e.history.undone.length) && e.clearHistory()), a.collapsed && (a.id = ++Ds, a.atomic = !0), u) {
                    if (l && (u.curOp.updateMaxLine = !0), a.collapsed) yo(u, t.line, n.line + 1);
                    else if (a.className || a.title || a.startStyle || a.endStyle || a.css)
                        for (var f = t.line; f <= n.line; f++) wo(u, f, "text");
                    a.atomic && Tr(u.doc), xt(u, "markerAdded", u, a)
                }
                return a
            }

            function _r(e, t, n, o, r) {
                o = d(o), o.shared = !1;
                var i = [qr(e, t, n, o, r)],
                    a = i[0],
                    s = o.widgetNode;
                return Jo(e, function(e) {
                    s && (o.widgetNode = s.cloneNode(!0)), i.push(qr(e, j(e, t), j(e, n), o, r));
                    for (var l = 0; l < e.linked.length; ++l)
                        if (e.linked[l].isParent) return;
                    a = m(i)
                }), new Hs(i, a)
            }

            function Xr(e) {
                return e.findMarks(R(e.first, 0), e.clipPos(R(e.lastLine())), function(e) {
                    return e.parent
                })
            }

            function Yr(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n],
                        r = o.find(),
                        i = e.clipPos(r.from),
                        a = e.clipPos(r.to);
                    if (O(i, a)) {
                        var s = qr(e, i, a, o.primary, o.primary.type);
                        o.markers.push(s), s.parent = o
                    }
                }
            }

            function Zr(e) {
                for (var t = 0; t < e.length; t++) ! function(t) {
                    var n = e[t],
                        o = [n.primary.doc];
                    Jo(n.primary.doc, function(e) {
                        return o.push(e)
                    });
                    for (var r = 0; r < n.markers.length; r++) {
                        var i = n.markers[r]; - 1 == h(o, i.doc) && (i.parent = null, n.markers.splice(r--, 1))
                    }
                }(t)
            }

            function Jr(e) {
                var t = this;
                if (ti(t), !Me(t, e) && !Rt(t.display, e)) {
                    De(e), ya && (Os = +new Date);
                    var n = Ln(t, e, !0),
                        o = e.dataTransfer.files;
                    if (n && !t.isReadOnly())
                        if (o && o.length && window.FileReader && window.File)
                            for (var r = o.length, i = Array(r), a = 0, s = 0; s < r; ++s) ! function(e, o) {
                                if (!t.options.allowDropFileTypes || -1 != h(t.options.allowDropFileTypes, e.type)) {
                                    var s = new FileReader;
                                    s.onload = mo(t, function() {
                                        var e = s.result;
                                        if (/[\x00-\x08\x0e-\x1f]{2}/.test(e) && (e = ""), i[o] = e, ++a == r) {
                                            n = j(t.doc, n);
                                            var l = {
                                                from: n,
                                                to: n,
                                                text: t.doc.splitLines(i.join(t.doc.lineSeparator())),
                                                origin: "paste"
                                            };
                                            Dr(t.doc, l), xr(t.doc, $o(n, jo(l)))
                                        }
                                    }), s.readAsText(e)
                                }
                            }(o[s], s);
                        else {
                            if (t.state.draggingText && t.doc.sel.contains(n) > -1) return t.state.draggingText(e), void setTimeout(function() {
                                return t.display.input.focus()
                            }, 20);
                            try {
                                var l = e.dataTransfer.getData("Text");
                                if (l) {
                                    var c;
                                    if (t.state.draggingText && !t.state.draggingText.copy && (c = t.listSelections()), kr(t.doc, $o(n, n)), c)
                                        for (var u = 0; u < c.length; ++u) zr(t.doc, "", c[u].anchor, c[u].head, "drag");
                                    t.replaceSelection(l, "around", "paste"), t.display.input.focus()
                                }
                            } catch (e) {}
                        }
                }
            }

            function Qr(e, t) {
                if (ya && (!e.state.draggingText || +new Date - Os < 100)) return void Pe(t);
                if (!Me(e, t) && !Rt(e.display, t) && (t.dataTransfer.setData("Text", e.getSelection()), t.dataTransfer.effectAllowed = "copyMove", t.dataTransfer.setDragImage && !Ta)) {
                    var n = o("img", null, null, "position: fixed; left: 0; top: 0;");
                    n.src = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==", Sa && (n.width = n.height = 1, e.display.wrapper.appendChild(n), n._top = n.offsetTop), t.dataTransfer.setDragImage(n, 0, 0), Sa && n.parentNode.removeChild(n)
                }
            }

            function ei(e, t) {
                var r = Ln(e, t);
                if (r) {
                    var i = document.createDocumentFragment();
                    En(e, r, i), e.display.dragCursor || (e.display.dragCursor = o("div", null, "CodeMirror-cursors CodeMirror-dragcursors"), e.display.lineSpace.insertBefore(e.display.dragCursor, e.display.cursorDiv)), n(e.display.dragCursor, i)
                }
            }

            function ti(e) {
                e.display.dragCursor && (e.display.lineSpace.removeChild(e.display.dragCursor), e.display.dragCursor = null)
            }

            function ni(e) {
                if (document.getElementsByClassName)
                    for (var t = document.getElementsByClassName("CodeMirror"), n = 0; n < t.length; n++) {
                        var o = t[n].CodeMirror;
                        o && e(o)
                    }
            }

            function oi() {
                zs || (ri(), zs = !0)
            }

            function ri() {
                var e;
                ns(window, "resize", function() {
                    null == e && (e = setTimeout(function() {
                        e = null, ni(ii)
                    }, 100))
                }), ns(window, "blur", function() {
                    return ni(On)
                })
            }

            function ii(e) {
                var t = e.display;
                t.lastWrapHeight == t.wrapper.clientHeight && t.lastWrapWidth == t.wrapper.clientWidth || (t.cachedCharWidth = t.cachedTextHeight = t.cachedPaddingH = null, t.scrollbarsClipped = !1, e.setSize())
            }

            function ai(e) {
                var t = e.split(/-(?!$)/);
                e = t[t.length - 1];
                for (var n, o, r, i, a = 0; a < t.length - 1; a++) {
                    var s = t[a];
                    if (/^(cmd|meta|m)$/i.test(s)) i = !0;
                    else if (/^a(lt)?$/i.test(s)) n = !0;
                    else if (/^(c|ctrl|control)$/i.test(s)) o = !0;
                    else {
                        if (!/^s(hift)?$/i.test(s)) throw new Error("Unrecognized modifier name: " + s);
                        r = !0
                    }
                }
                return n && (e = "Alt-" + e), o && (e = "Ctrl-" + e), i && (e = "Cmd-" + e), r && (e = "Shift-" + e), e
            }

            function si(e) {
                var t = {};
                for (var n in e)
                    if (e.hasOwnProperty(n)) {
                        var o = e[n];
                        if (/^(name|fallthrough|(de|at)tach)$/.test(n)) continue;
                        if ("..." == o) {
                            delete e[n];
                            continue
                        }
                        for (var r = v(n.split(" "), ai), i = 0; i < r.length; i++) {
                            var a = void 0,
                                s = void 0;
                            i == r.length - 1 ? (s = r.join(" "), a = o) : (s = r.slice(0, i + 1).join(" "), a = "...");
                            var l = t[s];
                            if (l) {
                                if (l != a) throw new Error("Inconsistent bindings for " + s)
                            } else t[s] = a
                        }
                        delete e[n]
                    } for (var c in t) e[c] = t[c];
                return e
            }

            function li(e, t, n, o) {
                t = fi(t);
                var r = t.call ? t.call(e, o) : t[e];
                if (!1 === r) return "nothing";
                if ("..." === r) return "multi";
                if (null != r && n(r)) return "handled";
                if (t.fallthrough) {
                    if ("[object Array]" != Object.prototype.toString.call(t.fallthrough)) return li(e, t.fallthrough, n, o);
                    for (var i = 0; i < t.fallthrough.length; i++) {
                        var a = li(e, t.fallthrough[i], n, o);
                        if (a) return a
                    }
                }
            }

            function ci(e) {
                var t = "string" == typeof e ? e : Ws[e.keyCode];
                return "Ctrl" == t || "Alt" == t || "Shift" == t || "Mod" == t
            }

            function ui(e, t, n) {
                var o = e;
                return t.altKey && "Alt" != o && (e = "Alt-" + e), (Ra ? t.metaKey : t.ctrlKey) && "Ctrl" != o && (e = "Ctrl-" + e), (Ra ? t.ctrlKey : t.metaKey) && "Cmd" != o && (e = "Cmd-" + e), !n && t.shiftKey && "Shift" != o && (e = "Shift-" + e), e
            }

            function di(e, t) {
                if (Sa && 34 == e.keyCode && e.char) return !1;
                var n = Ws[e.keyCode];
                return null != n && !e.altGraphKey && ui(n, e, t)
            }

            function fi(e) {
                return "string" == typeof e ? js[e] : e
            }

            function hi(e, t) {
                for (var n = e.doc.sel.ranges, o = [], r = 0; r < n.length; r++) {
                    for (var i = t(n[r]); o.length && O(i.from, m(o).to) <= 0;) {
                        var a = o.pop();
                        if (O(a.from, i.from) < 0) {
                            i.from = a.from;
                            break
                        }
                    }
                    o.push(i)
                }
                go(e, function() {
                    for (var t = o.length - 1; t >= 0; t--) zr(e.doc, "", o[t].from, o[t].to, "+delete");
                    _n(e)
                })
            }

            function pi(e, t, n) {
                var o = T(e.text, t + n, n);
                return o < 0 || o > e.text.length ? null : o
            }

            function gi(e, t, n) {
                var o = pi(e, t.ch, n);
                return null == o ? null : new R(t.line, o, n < 0 ? "after" : "before")
            }

            function mi(e, t, n, o, r) {
                if (e) {
                    var i = Se(n, t.doc.direction);
                    if (i) {
                        var a, s = r < 0 ? m(i) : i[0],
                            l = r < 0 == (1 == s.level),
                            c = l ? "after" : "before";
                        if (s.level > 0 || "rtl" == t.doc.direction) {
                            var u = _t(t, n);
                            a = r < 0 ? n.text.length - 1 : 0;
                            var d = Xt(t, u, a).top;
                            a = L(function(e) {
                                return Xt(t, u, e).top == d
                            }, r < 0 == (1 == s.level) ? s.from : s.to - 1, a), "before" == c && (a = pi(n, a, 1))
                        } else a = r < 0 ? s.to : s.from;
                        return new R(o, a, c)
                    }
                }
                return new R(o, r < 0 ? n.text.length : 0, r < 0 ? "before" : "after")
            }

            function vi(e, t, n, o) {
                var r = Se(t, e.doc.direction);
                if (!r) return gi(t, n, o);
                n.ch >= t.text.length ? (n.ch = t.text.length, n.sticky = "before") : n.ch <= 0 && (n.ch = 0, n.sticky = "after");
                var i = ke(r, n.ch, n.sticky),
                    a = r[i];
                if ("ltr" == e.doc.direction && a.level % 2 == 0 && (o > 0 ? a.to > n.ch : a.from < n.ch)) return gi(t, n, o);
                var s, l = function(e, n) {
                        return pi(t, e instanceof R ? e.ch : e, n)
                    },
                    c = function(n) {
                        return e.options.lineWrapping ? (s = s || _t(e, t), gn(e, t, s, n)) : {
                            begin: 0,
                            end: t.text.length
                        }
                    },
                    u = c("before" == n.sticky ? l(n, -1) : n.ch);
                if ("rtl" == e.doc.direction || 1 == a.level) {
                    var d = 1 == a.level == o < 0,
                        f = l(n, d ? 1 : -1);
                    if (null != f && (d ? f <= a.to && f <= u.end : f >= a.from && f >= u.begin)) {
                        var h = d ? "before" : "after";
                        return new R(n.line, f, h)
                    }
                }
                var p = function(e, t, o) {
                        for (var i = function(e, t) {
                                return t ? new R(n.line, l(e, 1), "before") : new R(n.line, e, "after")
                            }; e >= 0 && e < r.length; e += t) {
                            var a = r[e],
                                s = t > 0 == (1 != a.level),
                                c = s ? o.begin : l(o.end, -1);
                            if (a.from <= c && c < a.to) return i(c, s);
                            if (c = s ? a.from : l(a.to, -1), o.begin <= c && c < o.end) return i(c, s)
                        }
                    },
                    g = p(i + o, o, u);
                if (g) return g;
                var m = o > 0 ? u.end : l(u.begin, -1);
                return null == m || o > 0 && m == t.text.length || !(g = p(o > 0 ? 0 : r.length - 1, o, c(m))) ? null : g
            }

            function bi(e, t) {
                var n = M(e.doc, t),
                    o = fe(n);
                return o != n && (t = D(o)), mi(!0, e, o, t, 1)
            }

            function yi(e, t) {
                var n = M(e.doc, t),
                    o = he(n);
                return o != n && (t = D(o)), mi(!0, e, n, t, -1)
            }

            function wi(e, t) {
                var n = bi(e, t.line),
                    o = M(e.doc, n.line),
                    r = Se(o, e.doc.direction);
                if (!r || 0 == r[0].level) {
                    var i = Math.max(0, o.text.search(/\S/)),
                        a = t.line == n.line && t.ch <= i && t.ch;
                    return R(n.line, a ? 0 : i, n.sticky)
                }
                return n
            }

            function xi(e, t, n) {
                if ("string" == typeof t && !(t = Ks[t])) return !1;
                e.display.input.ensurePolled();
                var o = e.display.shift,
                    r = !1;
                try {
                    e.isReadOnly() && (e.state.suppressEdits = !0), n && (e.display.shift = !1), r = t(e) != Ka
                } finally {
                    e.display.shift = o, e.state.suppressEdits = !1
                }
                return r
            }

            function Ci(e, t, n) {
                for (var o = 0; o < e.state.keyMaps.length; o++) {
                    var r = li(t, e.state.keyMaps[o], n, e);
                    if (r) return r
                }
                return e.options.extraKeys && li(t, e.options.extraKeys, n, e) || li(t, e.options.keyMap, n, e)
            }

            function ki(e, t, n, o) {
                var r = e.state.keySeq;
                if (r) {
                    if (ci(t)) return "handled";
                    if (/\'$/.test(t) ? e.state.keySeq = null : Vs.set(50, function() {
                            e.state.keySeq == r && (e.state.keySeq = null, e.display.input.reset())
                        }), Si(e, r + " " + t, n, o)) return !0
                }
                return Si(e, t, n, o)
            }

            function Si(e, t, n, o) {
                var r = Ci(e, t, o);
                return "multi" == r && (e.state.keySeq = t), "handled" == r && xt(e, "keyHandled", e, t, n), "handled" != r && "multi" != r || (De(n), In(e)), !!r
            }

            function Ti(e, t) {
                var n = di(t, !0);
                return !!n && (t.shiftKey && !e.state.keySeq ? ki(e, "Shift-" + n, t, function(t) {
                    return xi(e, t, !0)
                }) || ki(e, n, t, function(t) {
                    if ("string" == typeof t ? /^go[A-Z]/.test(t) : t.motion) return xi(e, t)
                }) : ki(e, n, t, function(t) {
                    return xi(e, t)
                }))
            }

            function Li(e, t, n) {
                return ki(e, "'" + n + "'", t, function(t) {
                    return xi(e, t, !0)
                })
            }

            function Ni(e) {
                var t = this;
                if (t.curOp.focus = s(), !Me(t, e)) {
                    ya && wa < 11 && 27 == e.keyCode && (e.returnValue = !1);
                    var n = e.keyCode;
                    t.display.shift = 16 == n || e.shiftKey;
                    var o = Ti(t, e);
                    Sa && (Gs = o ? n : null, !o && 88 == n && !as && (Fa ? e.metaKey : e.ctrlKey) && t.replaceSelection("", null, "cut")), 18 != n || /\bCodeMirror-crosshair\b/.test(t.display.lineDiv.className) || Mi(t)
                }
            }

            function Mi(e) {
                function t(e) {
                    18 != e.keyCode && e.altKey || (za(n, "CodeMirror-crosshair"), Le(document, "keyup", t), Le(document, "mouseover", t))
                }
                var n = e.display.lineDiv;
                l(n, "CodeMirror-crosshair"), ns(document, "keyup", t), ns(document, "mouseover", t)
            }

            function Ai(e) {
                16 == e.keyCode && (this.doc.sel.shift = !1), Me(this, e)
            }

            function Ei(e) {
                var t = this;
                if (!(Rt(t.display, e) || Me(t, e) || e.ctrlKey && !e.altKey || Fa && e.metaKey)) {
                    var n = e.keyCode,
                        o = e.charCode;
                    if (Sa && n == Gs) return Gs = null, void De(e);
                    if (!Sa || e.which && !(e.which < 10) || !Ti(t, e)) {
                        var r = String.fromCharCode(null == o ? n : o);
                        "\b" != r && (Li(t, e, r) || t.display.input.onKeyPress(e))
                    }
                }
            }

            function Fi(e, t) {
                var n = +new Date;
                return Xs && Xs.compare(n, e, t) ? (_s = Xs = null, "triple") : _s && _s.compare(n, e, t) ? (Xs = new qs(n, e, t), _s = null, "double") : (_s = new qs(n, e, t), Xs = null, "single")
            }

            function Di(e) {
                var t = this,
                    n = t.display;
                if (!(Me(t, e) || n.activeTouch && n.input.supportsTouch())) {
                    if (n.input.ensurePolled(), n.shift = e.shiftKey, Rt(n, e)) return void(xa || (n.scroller.draggable = !1, setTimeout(function() {
                        return n.scroller.draggable = !0
                    }, 100)));
                    if (!Ui(t, e)) {
                        var o = Ln(t, e),
                            r = Oe(e),
                            i = o ? Fi(o, r) : "single";
                        window.focus(), 1 == r && t.state.selectingText && t.state.selectingText(e), o && Ii(t, r, o, i, e) || (1 == r ? o ? Pi(t, o, i, e) : Re(e) == n.scroller && De(e) : 2 == r ? (o && mr(t.doc, o), setTimeout(function() {
                            return n.input.focus()
                        }, 20)) : 3 == r && (Oa ? $i(t, e) : Pn(t)))
                    }
                }
            }

            function Ii(e, t, n, o, r) {
                var i = "Click";
                return "double" == o ? i = "Double" + i : "triple" == o && (i = "Triple" + i), i = (1 == t ? "Left" : 2 == t ? "Middle" : "Right") + i, ki(e, ui(i, r), r, function(t) {
                    if ("string" == typeof t && (t = Ks[t]), !t) return !1;
                    var o = !1;
                    try {
                        e.isReadOnly() && (e.state.suppressEdits = !0), o = t(e, n) != Ka
                    } finally {
                        e.state.suppressEdits = !1
                    }
                    return o
                })
            }

            function Hi(e, t, n) {
                var o = e.getOption("configureMouse"),
                    r = o ? o(e, t, n) : {};
                if (null == r.unit) {
                    var i = Da ? n.shiftKey && n.metaKey : n.altKey;
                    r.unit = i ? "rectangle" : "single" == t ? "char" : "double" == t ? "word" : "line"
                }
                return (null == r.extend || e.doc.extend) && (r.extend = e.doc.extend || n.shiftKey), null == r.addNew && (r.addNew = Fa ? n.metaKey : n.ctrlKey), null == r.moveOnDrag && (r.moveOnDrag = !(Fa ? n.altKey : n.ctrlKey)), r
            }

            function Pi(e, t, n, o) {
                ya ? setTimeout(u(Hn, e), 0) : e.curOp.focus = s();
                var r, i = Hi(e, n, o),
                    a = e.doc.sel;
                e.options.dragDrop && os && !e.isReadOnly() && "single" == n && (r = a.contains(t)) > -1 && (O((r = a.ranges[r]).from(), t) < 0 || t.xRel > 0) && (O(r.to(), t) > 0 || t.xRel < 0) ? Ri(e, o, t, i) : zi(e, o, t, i)
            }

            function Ri(e, t, n, o) {
                var r = e.display,
                    i = !1,
                    a = mo(e, function(t) {
                        xa && (r.scroller.draggable = !1), e.state.draggingText = !1, Le(document, "mouseup", a), Le(document, "mousemove", s), Le(r.scroller, "dragstart", l), Le(r.scroller, "drop", a), i || (De(t), o.addNew || mr(e.doc, n, null, null, o.extend), xa || ya && 9 == wa ? setTimeout(function() {
                            document.body.focus(), r.input.focus()
                        }, 20) : r.input.focus())
                    }),
                    s = function(e) {
                        i = i || Math.abs(t.clientX - e.clientX) + Math.abs(t.clientY - e.clientY) >= 10
                    },
                    l = function() {
                        return i = !0
                    };
                xa && (r.scroller.draggable = !0), e.state.draggingText = a, a.copy = !o.moveOnDrag, r.scroller.dragDrop && r.scroller.dragDrop(), ns(document, "mouseup", a), ns(document, "mousemove", s), ns(r.scroller, "dragstart", l), ns(r.scroller, "drop", a), Pn(e), setTimeout(function() {
                    return r.input.focus()
                }, 20)
            }

            function Oi(e, t, n) {
                if ("char" == n) return new Es(t, t);
                if ("word" == n) return e.findWordAt(t);
                if ("line" == n) return new Es(R(t.line, 0), j(e.doc, R(t.line + 1, 0)));
                var o = n(e, t);
                return new Es(o.from, o.to)
            }

            function zi(e, t, n, o) {
                function r(t) {
                    if (0 != O(v, t))
                        if (v = t, "rectangle" == o.unit) {
                            for (var r = [], i = e.options.tabSize, a = f(M(c, n.line).text, n.ch, i), s = f(M(c, t.line).text, t.ch, i), l = Math.min(a, s), g = Math.max(a, s), m = Math.min(n.line, t.line), b = Math.min(e.lastLine(), Math.max(n.line, t.line)); m <= b; m++) {
                                var y = M(c, m).text,
                                    w = p(y, l, i);
                                l == g ? r.push(new Es(R(m, w), R(m, w))) : y.length > w && r.push(new Es(R(m, w), R(m, p(y, g, i))))
                            }
                            r.length || r.push(new Es(n, n)), Cr(c, Uo(h.ranges.slice(0, d).concat(r), d), {
                                origin: "*mouse",
                                scroll: !1
                            }), e.scrollIntoView(t)
                        } else {
                            var x, C = u,
                                k = Oi(e, t, o.unit),
                                S = C.anchor;
                            O(k.anchor, S) > 0 ? (x = k.head, S = U(C.from(), k.anchor)) : (x = k.anchor, S = B(C.to(), k.head));
                            var T = h.ranges.slice(0);
                            T[d] = Wi(e, new Es(j(c, S), x)), Cr(c, Uo(T, d), Ga)
                        }
                }

                function i(t) {
                    var n = ++y,
                        a = Ln(e, t, !0, "rectangle" == o.unit);
                    if (a)
                        if (0 != O(a, v)) {
                            e.curOp.focus = s(), r(a);
                            var u = Bn(l, c);
                            (a.line >= u.to || a.line < u.from) && setTimeout(mo(e, function() {
                                y == n && i(t)
                            }), 150)
                        } else {
                            var d = t.clientY < b.top ? -20 : t.clientY > b.bottom ? 20 : 0;
                            d && setTimeout(mo(e, function() {
                                y == n && (l.scroller.scrollTop += d, i(t))
                            }), 50)
                        }
                }

                function a(t) {
                    e.state.selectingText = !1, y = 1 / 0, De(t), l.input.focus(), Le(document, "mousemove", w), Le(document, "mouseup", x), c.history.lastSelOrigin = null
                }
                var l = e.display,
                    c = e.doc;
                De(t);
                var u, d, h = c.sel,
                    g = h.ranges;
                if (o.addNew && !o.extend ? (d = c.sel.contains(n), u = d > -1 ? g[d] : new Es(n, n)) : (u = c.sel.primary(), d = c.sel.primIndex), "rectangle" == o.unit) o.addNew || (u = new Es(n, n)), n = Ln(e, t, !0, !0), d = -1;
                else {
                    var m = Oi(e, n, o.unit);
                    u = o.extend ? gr(u, m.anchor, m.head, o.extend) : m
                }
                o.addNew ? -1 == d ? (d = g.length, Cr(c, Uo(g.concat([u]), d), {
                    scroll: !1,
                    origin: "*mouse"
                })) : g.length > 1 && g[d].empty() && "char" == o.unit && !o.extend ? (Cr(c, Uo(g.slice(0, d).concat(g.slice(d + 1)), 0), {
                    scroll: !1,
                    origin: "*mouse"
                }), h = c.sel) : br(c, d, u, Ga) : (d = 0, Cr(c, new As([u], 0), Ga), h = c.sel);
                var v = n,
                    b = l.wrapper.getBoundingClientRect(),
                    y = 0,
                    w = mo(e, function(e) {
                        Oe(e) ? i(e) : a(e)
                    }),
                    x = mo(e, a);
                e.state.selectingText = x, ns(document, "mousemove", w), ns(document, "mouseup", x)
            }

            function Wi(e, t) {
                var n = t.anchor,
                    o = t.head,
                    r = M(e.doc, n.line);
                if (0 == O(n, o) && n.sticky == o.sticky) return t;
                var i = Se(r);
                if (!i) return t;
                var a = ke(i, n.ch, n.sticky),
                    s = i[a];
                if (s.from != n.ch && s.to != n.ch) return t;
                var l = a + (s.from == n.ch == (1 != s.level) ? 0 : 1);
                if (0 == l || l == i.length) return t;
                var c;
                if (o.line != n.line) c = (o.line - n.line) * ("ltr" == e.doc.direction ? 1 : -1) > 0;
                else {
                    var u = ke(i, o.ch, o.sticky),
                        d = u - a || (o.ch - n.ch) * (1 == s.level ? -1 : 1);
                    c = u == l - 1 || u == l ? d < 0 : d > 0
                }
                var f = i[l + (c ? -1 : 0)],
                    h = c == (1 == f.level),
                    p = h ? f.from : f.to,
                    g = h ? "after" : "before";
                return n.ch == p && n.sticky == g ? t : new Es(new R(n.line, p, g), o)
            }

            function Bi(e, t, n, o) {
                var r, i;
                if (t.touches) r = t.touches[0].clientX, i = t.touches[0].clientY;
                else try {
                    r = t.clientX, i = t.clientY
                } catch (t) {
                    return !1
                }
                if (r >= Math.floor(e.display.gutters.getBoundingClientRect().right)) return !1;
                o && De(t);
                var a = e.display,
                    s = a.lineDiv.getBoundingClientRect();
                if (i > s.bottom || !Ee(e, n)) return He(t);
                i -= s.top - a.viewOffset;
                for (var l = 0; l < e.options.gutters.length; ++l) {
                    var c = a.gutters.childNodes[l];
                    if (c && c.getBoundingClientRect().right >= r) return Ne(e, n, e, I(e.doc, i), e.options.gutters[l], t), He(t)
                }
            }

            function Ui(e, t) {
                return Bi(e, t, "gutterClick", !0)
            }

            function $i(e, t) {
                Rt(e.display, t) || ji(e, t) || Me(e, t, "contextmenu") || e.display.input.onContextMenu(t)
            }

            function ji(e, t) {
                return !!Ee(e, "gutterContextMenu") && Bi(e, t, "gutterContextMenu", !1)
            }

            function Ki(e) {
                e.display.wrapper.className = e.display.wrapper.className.replace(/\s*cm-s-\S+/g, "") + e.options.theme.replace(/(^|\s)\s*/g, " cm-s-"), nn(e)
            }

            function Vi(e) {
                Ro(e), yo(e), Un(e)
            }

            function Gi(e, t, n) {
                if (!t != !(n && n != Ys)) {
                    var o = e.display.dragFunctions,
                        r = t ? ns : Le;
                    r(e.display.scroller, "dragstart", o.start), r(e.display.scroller, "dragenter", o.enter), r(e.display.scroller, "dragover", o.over), r(e.display.scroller, "dragleave", o.leave), r(e.display.scroller, "drop", o.drop)
                }
            }

            function qi(e) {
                e.options.lineWrapping ? (l(e.display.wrapper, "CodeMirror-wrap"), e.display.sizer.style.minWidth = "", e.display.sizerWidth = null) : (za(e.display.wrapper, "CodeMirror-wrap"), xe(e)), Tn(e), yo(e), nn(e), setTimeout(function() {
                    return oo(e)
                }, 100)
            }

            function _i(e, t) {
                var n = this;
                if (!(this instanceof _i)) return new _i(e, t);
                this.options = t = t ? d(t) : {}, d(Zs, t, !1), Oo(t);
                var o = t.value;
                "string" == typeof o && (o = new Rs(o, t.mode, null, t.lineSeparator, t.direction)), this.doc = o;
                var r = new _i.inputStyles[t.inputStyle](this),
                    i = this.display = new N(e, o, r);
                i.wrapper.CodeMirror = this, Ro(this), Ki(this), t.lineWrapping && (this.display.wrapper.className += " CodeMirror-wrap"), io(this), this.state = {
                    keyMaps: [],
                    overlays: [],
                    modeGen: 0,
                    overwrite: !1,
                    delayingBlurEvent: !1,
                    focused: !1,
                    suppressEdits: !1,
                    pasteIncoming: !1,
                    cutIncoming: !1,
                    selectingText: !1,
                    draggingText: !1,
                    highlight: new Ba,
                    keySeq: null,
                    specialChars: null
                }, t.autofocus && !Ea && i.input.focus(), ya && wa < 11 && setTimeout(function() {
                    return n.display.input.reset(!0)
                }, 20), Xi(this), oi(), ao(this), this.curOp.forceUpdate = !0, Qo(this, o), t.autofocus && !Ea || this.hasFocus() ? setTimeout(u(Rn, this), 20) : On(this);
                for (var a in Js) Js.hasOwnProperty(a) && Js[a](n, t[a], Ys);
                $n(this), t.finishInit && t.finishInit(this);
                for (var s = 0; s < Qs.length; ++s) Qs[s](n);
                so(this), xa && t.lineWrapping && "optimizelegibility" == getComputedStyle(i.lineDiv).textRendering && (i.lineDiv.style.textRendering = "auto")
            }

            function Xi(e) {
                function t() {
                    r.activeTouch && (i = setTimeout(function() {
                        return r.activeTouch = null
                    }, 1e3), a = r.activeTouch, a.end = +new Date)
                }

                function n(e) {
                    if (1 != e.touches.length) return !1;
                    var t = e.touches[0];
                    return t.radiusX <= 1 && t.radiusY <= 1
                }

                function o(e, t) {
                    if (null == t.left) return !0;
                    var n = t.left - e.left,
                        o = t.top - e.top;
                    return n * n + o * o > 400
                }
                var r = e.display;
                ns(r.scroller, "mousedown", mo(e, Di)), ya && wa < 11 ? ns(r.scroller, "dblclick", mo(e, function(t) {
                    if (!Me(e, t)) {
                        var n = Ln(e, t);
                        if (n && !Ui(e, t) && !Rt(e.display, t)) {
                            De(t);
                            var o = e.findWordAt(n);
                            mr(e.doc, o.anchor, o.head)
                        }
                    }
                })) : ns(r.scroller, "dblclick", function(t) {
                    return Me(e, t) || De(t)
                }), Oa || ns(r.scroller, "contextmenu", function(t) {
                    return $i(e, t)
                });
                var i, a = {
                    end: 0
                };
                ns(r.scroller, "touchstart", function(t) {
                    if (!Me(e, t) && !n(t) && !Ui(e, t)) {
                        r.input.ensurePolled(), clearTimeout(i);
                        var o = +new Date;
                        r.activeTouch = {
                            start: o,
                            moved: !1,
                            prev: o - a.end <= 300 ? a : null
                        }, 1 == t.touches.length && (r.activeTouch.left = t.touches[0].pageX, r.activeTouch.top = t.touches[0].pageY)
                    }
                }), ns(r.scroller, "touchmove", function() {
                    r.activeTouch && (r.activeTouch.moved = !0)
                }), ns(r.scroller, "touchend", function(n) {
                    var i = r.activeTouch;
                    if (i && !Rt(r, n) && null != i.left && !i.moved && new Date - i.start < 300) {
                        var a, s = e.coordsChar(r.activeTouch, "page");
                        a = !i.prev || o(i, i.prev) ? new Es(s, s) : !i.prev.prev || o(i, i.prev.prev) ? e.findWordAt(s) : new Es(R(s.line, 0), j(e.doc, R(s.line + 1, 0))), e.setSelection(a.anchor, a.head), e.focus(), De(n)
                    }
                    t()
                }), ns(r.scroller, "touchcancel", t), ns(r.scroller, "scroll", function() {
                    r.scroller.clientHeight && (Qn(e, r.scroller.scrollTop), to(e, r.scroller.scrollLeft, !0), Ne(e, "scroll", e))
                }), ns(r.scroller, "mousewheel", function(t) {
                    return Bo(e, t)
                }), ns(r.scroller, "DOMMouseScroll", function(t) {
                    return Bo(e, t)
                }), ns(r.wrapper, "scroll", function() {
                    return r.wrapper.scrollTop = r.wrapper.scrollLeft = 0
                }), r.dragFunctions = {
                    enter: function(t) {
                        Me(e, t) || Pe(t)
                    },
                    over: function(t) {
                        Me(e, t) || (ei(e, t), Pe(t))
                    },
                    start: function(t) {
                        return Qr(e, t)
                    },
                    drop: mo(e, Jr),
                    leave: function(t) {
                        Me(e, t) || ti(e)
                    }
                };
                var s = r.input.getField();
                ns(s, "keyup", function(t) {
                    return Ai.call(e, t)
                }), ns(s, "keydown", mo(e, Ni)), ns(s, "keypress", mo(e, Ei)), ns(s, "focus", function(t) {
                    return Rn(e, t)
                }), ns(s, "blur", function(t) {
                    return On(e, t)
                })
            }

            function Yi(e, t, n, o) {
                var r, i = e.doc;
                null == n && (n = "add"), "smart" == n && (i.mode.indent ? r = Ze(e, t).state : n = "prev");
                var a = e.options.tabSize,
                    s = M(i, t),
                    l = f(s.text, null, a);
                s.stateAfter && (s.stateAfter = null);
                var c, u = s.text.match(/^\s*/)[0];
                if (o || /\S/.test(s.text)) {
                    if ("smart" == n && ((c = i.mode.indent(r, s.text.slice(u.length), s.text)) == Ka || c > 150)) {
                        if (!o) return;
                        n = "prev"
                    }
                } else c = 0, n = "not";
                "prev" == n ? c = t > i.first ? f(M(i, t - 1).text, null, a) : 0 : "add" == n ? c = l + e.options.indentUnit : "subtract" == n ? c = l - e.options.indentUnit : "number" == typeof n && (c = l + n), c = Math.max(0, c);
                var d = "",
                    h = 0;
                if (e.options.indentWithTabs)
                    for (var p = Math.floor(c / a); p; --p) h += a, d += "\t";
                if (h < c && (d += g(c - h)), d != u) return zr(i, d, R(t, 0), R(t, u.length), "+input"), s.stateAfter = null, !0;
                for (var m = 0; m < i.sel.ranges.length; m++) {
                    var v = i.sel.ranges[m];
                    if (v.head.line == t && v.head.ch < u.length) {
                        var b = R(t, u.length);
                        br(i, m, new Es(b, b));
                        break
                    }
                }
            }

            function Zi(e) {
                el = e
            }

            function Ji(e, t, n, o, r) {
                var i = e.doc;
                e.display.shift = !1, o || (o = i.sel);
                var a = e.state.pasteIncoming || "paste" == r,
                    s = rs(t),
                    l = null;
                if (a && o.ranges.length > 1)
                    if (el && el.text.join("\n") == t) {
                        if (o.ranges.length % el.text.length == 0) {
                            l = [];
                            for (var c = 0; c < el.text.length; c++) l.push(i.splitLines(el.text[c]))
                        }
                    } else s.length == o.ranges.length && e.options.pasteLinesPerSelection && (l = v(s, function(e) {
                        return [e]
                    }));
                for (var u, d = o.ranges.length - 1; d >= 0; d--) {
                    var f = o.ranges[d],
                        h = f.from(),
                        p = f.to();
                    f.empty() && (n && n > 0 ? h = R(h.line, h.ch - n) : e.state.overwrite && !a ? p = R(p.line, Math.min(M(i, p.line).text.length, p.ch + m(s).length)) : el && el.lineWise && el.text.join("\n") == t && (h = p = R(h.line, 0))), u = e.curOp.updateInput;
                    var g = {
                        from: h,
                        to: p,
                        text: l ? l[d % l.length] : s,
                        origin: r || (a ? "paste" : e.state.cutIncoming ? "cut" : "+input")
                    };
                    Dr(e.doc, g), xt(e, "inputRead", e, g)
                }
                t && !a && ea(e, t), _n(e), e.curOp.updateInput = u, e.curOp.typing = !0, e.state.pasteIncoming = e.state.cutIncoming = !1
            }

            function Qi(e, t) {
                var n = e.clipboardData && e.clipboardData.getData("Text");
                if (n) return e.preventDefault(), t.isReadOnly() || t.options.disableInput || go(t, function() {
                    return Ji(t, n, 0, null, "paste")
                }), !0
            }

            function ea(e, t) {
                if (e.options.electricChars && e.options.smartIndent)
                    for (var n = e.doc.sel, o = n.ranges.length - 1; o >= 0; o--) {
                        var r = n.ranges[o];
                        if (!(r.head.ch > 100 || o && n.ranges[o - 1].head.line == r.head.line)) {
                            var i = e.getModeAt(r.head),
                                a = !1;
                            if (i.electricChars) {
                                for (var s = 0; s < i.electricChars.length; s++)
                                    if (t.indexOf(i.electricChars.charAt(s)) > -1) {
                                        a = Yi(e, r.head.line, "smart");
                                        break
                                    }
                            } else i.electricInput && i.electricInput.test(M(e.doc, r.head.line).text.slice(0, r.head.ch)) && (a = Yi(e, r.head.line, "smart"));
                            a && xt(e, "electricInput", e, r.head.line)
                        }
                    }
            }

            function ta(e) {
                for (var t = [], n = [], o = 0; o < e.doc.sel.ranges.length; o++) {
                    var r = e.doc.sel.ranges[o].head.line,
                        i = {
                            anchor: R(r, 0),
                            head: R(r + 1, 0)
                        };
                    n.push(i), t.push(e.getRange(i.anchor, i.head))
                }
                return {
                    text: t,
                    ranges: n
                }
            }

            function na(e, t) {
                e.setAttribute("autocorrect", "off"), e.setAttribute("autocapitalize", "off"), e.setAttribute("spellcheck", !!t)
            }

            function oa() {
                var e = o("textarea", null, null, "position: absolute; bottom: -1em; padding: 0; width: 1px; height: 1em; outline: none"),
                    t = o("div", [e], null, "overflow: hidden; position: relative; width: 3px; height: 0px;");
                return xa ? e.style.width = "1000px" : e.setAttribute("wrap", "off"), Ma && (e.style.border = "1px solid black"), na(e), t
            }

            function ra(e, t, n, o, r) {
                function i() {
                    var o = t.line + n;
                    return !(o < e.first || o >= e.first + e.size) && (t = new R(o, t.ch, t.sticky), c = M(e, o))
                }

                function a(o) {
                    var a;
                    if (null == (a = r ? vi(e.cm, c, t, n) : gi(c, t, n))) {
                        if (o || !i()) return !1;
                        t = mi(r, e.cm, c, t.line, n)
                    } else t = a;
                    return !0
                }
                var s = t,
                    l = n,
                    c = M(e, t.line);
                if ("char" == o) a();
                else if ("column" == o) a(!0);
                else if ("word" == o || "group" == o)
                    for (var u = null, d = "group" == o, f = e.cm && e.cm.getHelper(t, "wordChars"), h = !0; !(n < 0) || a(!h); h = !1) {
                        var p = c.text.charAt(t.ch) || "\n",
                            g = C(p, f) ? "w" : d && "\n" == p ? "n" : !d || /\s/.test(p) ? null : "p";
                        if (!d || h || g || (g = "s"), u && u != g) {
                            n < 0 && (n = 1, a(), t.sticky = "after");
                            break
                        }
                        if (g && (u = g), n > 0 && !a(!h)) break
                    }
                var m = Mr(e, t, s, l, !0);
                return z(s, m) && (m.hitSide = !0), m
            }

            function ia(e, t, n, o) {
                var r, i = e.doc,
                    a = t.left;
                if ("page" == o) {
                    var s = Math.min(e.display.wrapper.clientHeight, window.innerHeight || document.documentElement.clientHeight),
                        l = Math.max(s - .5 * wn(e.display), 3);
                    r = (n > 0 ? t.bottom : t.top) + n * l
                } else "line" == o && (r = n > 0 ? t.bottom + 3 : t.top - 3);
                for (var c; c = hn(e, a, r), c.outside;) {
                    if (n < 0 ? r <= 0 : r >= i.height) {
                        c.hitSide = !0;
                        break
                    }
                    r += 5 * n
                }
                return c
            }

            function aa(e, t) {
                var n = qt(e, t.line);
                if (!n || n.hidden) return null;
                var o = M(e.doc, t.line),
                    r = Kt(n, o, t.line),
                    i = Se(o, e.doc.direction),
                    a = "left";
                i && (a = ke(i, t.ch) % 2 ? "right" : "left");
                var s = Yt(r.map, t.ch, a);
                return s.offset = "right" == s.collapse ? s.end : s.start, s
            }

            function sa(e) {
                for (var t = e; t; t = t.parentNode)
                    if (/CodeMirror-gutter-wrapper/.test(t.className)) return !0;
                return !1
            }

            function la(e, t) {
                return t && (e.bad = !0), e
            }

            function ca(e, t, n, o, r) {
                function i(e) {
                    return function(t) {
                        return t.id == e
                    }
                }

                function a() {
                    u && (c += d, u = !1)
                }

                function s(e) {
                    e && (a(), c += e)
                }

                function l(t) {
                    if (1 == t.nodeType) {
                        var n = t.getAttribute("cm-text");
                        if (null != n) return void s(n || t.textContent.replace(/\u200b/g, ""));
                        var c, f = t.getAttribute("cm-marker");
                        if (f) {
                            var h = e.findMarks(R(o, 0), R(r + 1, 0), i(+f));
                            return void(h.length && (c = h[0].find(0)) && s(A(e.doc, c.from, c.to).join(d)))
                        }
                        if ("false" == t.getAttribute("contenteditable")) return;
                        var p = /^(pre|div|p)$/i.test(t.nodeName);
                        p && a();
                        for (var g = 0; g < t.childNodes.length; g++) l(t.childNodes[g]);
                        p && (u = !0)
                    } else 3 == t.nodeType && s(t.nodeValue)
                }
                for (var c = "", u = !1, d = e.doc.lineSeparator(); l(t), t != n;) t = t.nextSibling;
                return c
            }

            function ua(e, t, n) {
                var o;
                if (t == e.display.lineDiv) {
                    if (!(o = e.display.lineDiv.childNodes[n])) return la(e.clipPos(R(e.display.viewTo - 1)), !0);
                    t = null, n = 0
                } else
                    for (o = t;; o = o.parentNode) {
                        if (!o || o == e.display.lineDiv) return null;
                        if (o.parentNode && o.parentNode == e.display.lineDiv) break
                    }
                for (var r = 0; r < e.display.view.length; r++) {
                    var i = e.display.view[r];
                    if (i.node == o) return da(i, t, n)
                }
            }

            function da(e, t, n) {
                function o(t, n, o) {
                    for (var r = -1; r < (d ? d.length : 0); r++)
                        for (var i = r < 0 ? u.map : d[r], a = 0; a < i.length; a += 3) {
                            var s = i[a + 2];
                            if (s == t || s == n) {
                                var l = D(r < 0 ? e.line : e.rest[r]),
                                    c = i[a] + o;
                                return (o < 0 || s != t) && (c = i[a + (o ? 1 : 0)]), R(l, c)
                            }
                        }
                }
                var r = e.text.firstChild,
                    i = !1;
                if (!t || !a(r, t)) return la(R(D(e.line), 0), !0);
                if (t == r && (i = !0, t = r.childNodes[n], n = 0, !t)) {
                    var s = e.rest ? m(e.rest) : e.line;
                    return la(R(D(s), s.text.length), i)
                }
                var l = 3 == t.nodeType ? t : null,
                    c = t;
                for (l || 1 != t.childNodes.length || 3 != t.firstChild.nodeType || (l = t.firstChild, n && (n = l.nodeValue.length)); c.parentNode != r;) c = c.parentNode;
                var u = e.measure,
                    d = u.maps,
                    f = o(l, c, n);
                if (f) return la(f, i);
                for (var h = c.nextSibling, p = l ? l.nodeValue.length - n : 0; h; h = h.nextSibling) {
                    if (f = o(h, h.firstChild, 0)) return la(R(f.line, f.ch - p), i);
                    p += h.textContent.length
                }
                for (var g = c.previousSibling, v = n; g; g = g.previousSibling) {
                    if (f = o(g, g.firstChild, -1)) return la(R(f.line, f.ch + v), i);
                    v += g.textContent.length
                }
            }

            function fa(e, t) {
                function n() {
                    e.value = l.getValue()
                }
                if (t = t ? d(t) : {}, t.value = e.value, !t.tabindex && e.tabIndex && (t.tabindex = e.tabIndex), !t.placeholder && e.placeholder && (t.placeholder = e.placeholder), null == t.autofocus) {
                    var o = s();
                    t.autofocus = o == e || null != e.getAttribute("autofocus") && o == document.body
                }
                var r;
                if (e.form && (ns(e.form, "submit", n), !t.leaveSubmitMethodAlone)) {
                    var i = e.form;
                    r = i.submit;
                    try {
                        var a = i.submit = function() {
                            n(), i.submit = r, i.submit(), i.submit = a
                        }
                    } catch (e) {}
                }
                t.finishInit = function(t) {
                    t.save = n, t.getTextArea = function() {
                        return e
                    }, t.toTextArea = function() {
                        t.toTextArea = isNaN, n(), e.parentNode.removeChild(t.getWrapperElement()), e.style.display = "", e.form && (Le(e.form, "submit", n), "function" == typeof e.form.submit && (e.form.submit = r))
                    }
                }, e.style.display = "none";
                var l = _i(function(t) {
                    return e.parentNode.insertBefore(t, e.nextSibling)
                }, t);
                return l
            }
            var ha = navigator.userAgent,
                pa = navigator.platform,
                ga = /gecko\/\d/i.test(ha),
                ma = /MSIE \d/.test(ha),
                va = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(ha),
                ba = /Edge\/(\d+)/.exec(ha),
                ya = ma || va || ba,
                wa = ya && (ma ? document.documentMode || 6 : +(ba || va)[1]),
                xa = !ba && /WebKit\//.test(ha),
                Ca = xa && /Qt\/\d+\.\d+/.test(ha),
                ka = !ba && /Chrome\//.test(ha),
                Sa = /Opera\//.test(ha),
                Ta = /Apple Computer/.test(navigator.vendor),
                La = /Mac OS X 1\d\D([8-9]|\d\d)\D/.test(ha),
                Na = /PhantomJS/.test(ha),
                Ma = !ba && /AppleWebKit/.test(ha) && /Mobile\/\w+/.test(ha),
                Aa = /Android/.test(ha),
                Ea = Ma || Aa || /webOS|BlackBerry|Opera Mini|Opera Mobi|IEMobile/i.test(ha),
                Fa = Ma || /Mac/.test(pa),
                Da = /\bCrOS\b/.test(ha),
                Ia = /win/i.test(pa),
                Ha = Sa && ha.match(/Version\/(\d*\.\d*)/);
            Ha && (Ha = Number(Ha[1])), Ha && Ha >= 15 && (Sa = !1, xa = !0);
            var Pa, Ra = Fa && (Ca || Sa && (null == Ha || Ha < 12.11)),
                Oa = ga || ya && wa >= 9,
                za = function(t, n) {
                    var o = t.className,
                        r = e(n).exec(o);
                    if (r) {
                        var i = o.slice(r.index + r[0].length);
                        t.className = o.slice(0, r.index) + (i ? r[1] + i : "")
                    }
                };
            Pa = document.createRange ? function(e, t, n, o) {
                var r = document.createRange();
                return r.setEnd(o || e, n), r.setStart(e, t), r
            } : function(e, t, n) {
                var o = document.body.createTextRange();
                try {
                    o.moveToElementText(e.parentNode)
                } catch (e) {
                    return o
                }
                return o.collapse(!0), o.moveEnd("character", n), o.moveStart("character", t), o
            };
            var Wa = function(e) {
                e.select()
            };
            Ma ? Wa = function(e) {
                e.selectionStart = 0, e.selectionEnd = e.value.length
            } : ya && (Wa = function(e) {
                try {
                    e.select()
                } catch (e) {}
            });
            var Ba = function() {
                this.id = null
            };
            Ba.prototype.set = function(e, t) {
                clearTimeout(this.id), this.id = setTimeout(t, e)
            };
            var Ua, $a, ja = 30,
                Ka = {
                    toString: function() {
                        return "CodeMirror.Pass"
                    }
                },
                Va = {
                    scroll: !1
                },
                Ga = {
                    origin: "*mouse"
                },
                qa = {
                    origin: "+move"
                },
                _a = [""],
                Xa = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/,
                Ya = /[\u0300-\u036f\u0483-\u0489\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u065e\u0670\u06d6-\u06dc\u06de-\u06e4\u06e7\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0900-\u0902\u093c\u0941-\u0948\u094d\u0951-\u0955\u0962\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2\u09e3\u0a01\u0a02\u0a3c\u0a41\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a70\u0a71\u0a75\u0a81\u0a82\u0abc\u0ac1-\u0ac5\u0ac7\u0ac8\u0acd\u0ae2\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0f18\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86\u0f87\u0f90-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039\u103a\u103d\u103e\u1058\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085\u1086\u108d\u109d\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193b\u1a17\u1a18\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80\u1b81\u1ba2-\u1ba5\u1ba8\u1ba9\u1c2c-\u1c33\u1c36\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1dc0-\u1de6\u1dfd-\u1dff\u200c\u200d\u20d0-\u20f0\u2cef-\u2cf1\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua66f-\ua672\ua67c\ua67d\ua6f0\ua6f1\ua802\ua806\ua80b\ua825\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\uaa29-\uaa2e\uaa31\uaa32\uaa35\uaa36\uaa43\uaa4c\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uabe5\uabe8\uabed\udc00-\udfff\ufb1e\ufe00-\ufe0f\ufe20-\ufe26\uff9e\uff9f]/,
                Za = !1,
                Ja = !1,
                Qa = null,
                es = function() {
                    function e(e) {
                        return e <= 247 ? n.charAt(e) : 1424 <= e && e <= 1524 ? "R" : 1536 <= e && e <= 1785 ? o.charAt(e - 1536) : 1774 <= e && e <= 2220 ? "r" : 8192 <= e && e <= 8203 ? "w" : 8204 == e ? "b" : "L"
                    }

                    function t(e, t, n) {
                        this.level = e, this.from = t, this.to = n
                    }
                    var n = "bbbbbbbbbtstwsbbbbbbbbbbbbbbssstwNN%%%NNNNNN,N,N1111111111NNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNbbbbbbsbbbbbbbbbbbbbbbbbbbbbbbbbb,N%%%%NNNNLNNNNN%%11NLNNN1LNNNNNLLLLLLLLLLLLLLLLLLLLLLLNLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLN",
                        o = "nnnnnnNNr%%r,rNNmmmmmmmmmmmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmmmmmmmmnnnnnnnnnn%nnrrrmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmnNmmmmmmrrmmNmmmmrr1111111111",
                        r = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/,
                        i = /[stwN]/,
                        a = /[LRr]/,
                        s = /[Lb1n]/,
                        l = /[1n]/;
                    return function(n, o) {
                        var c = "ltr" == o ? "L" : "R";
                        if (0 == n.length || "ltr" == o && !r.test(n)) return !1;
                        for (var u = n.length, d = [], f = 0; f < u; ++f) d.push(e(n.charCodeAt(f)));
                        for (var h = 0, p = c; h < u; ++h) {
                            var g = d[h];
                            "m" == g ? d[h] = p : p = g
                        }
                        for (var v = 0, b = c; v < u; ++v) {
                            var y = d[v];
                            "1" == y && "r" == b ? d[v] = "n" : a.test(y) && (b = y, "r" == y && (d[v] = "R"))
                        }
                        for (var w = 1, x = d[0]; w < u - 1; ++w) {
                            var C = d[w];
                            "+" == C && "1" == x && "1" == d[w + 1] ? d[w] = "1" : "," != C || x != d[w + 1] || "1" != x && "n" != x || (d[w] = x), x = C
                        }
                        for (var k = 0; k < u; ++k) {
                            var S = d[k];
                            if ("," == S) d[k] = "N";
                            else if ("%" == S) {
                                var T = void 0;
                                for (T = k + 1; T < u && "%" == d[T]; ++T);
                                for (var L = k && "!" == d[k - 1] || T < u && "1" == d[T] ? "1" : "N", N = k; N < T; ++N) d[N] = L;
                                k = T - 1
                            }
                        }
                        for (var M = 0, A = c; M < u; ++M) {
                            var E = d[M];
                            "L" == A && "1" == E ? d[M] = "L" : a.test(E) && (A = E)
                        }
                        for (var F = 0; F < u; ++F)
                            if (i.test(d[F])) {
                                var D = void 0;
                                for (D = F + 1; D < u && i.test(d[D]); ++D);
                                for (var I = "L" == (F ? d[F - 1] : c), H = "L" == (D < u ? d[D] : c), P = I == H ? I ? "L" : "R" : c, R = F; R < D; ++R) d[R] = P;
                                F = D - 1
                            } for (var O, z = [], W = 0; W < u;)
                            if (s.test(d[W])) {
                                var B = W;
                                for (++W; W < u && s.test(d[W]); ++W);
                                z.push(new t(0, B, W))
                            } else {
                                var U = W,
                                    $ = z.length;
                                for (++W; W < u && "L" != d[W]; ++W);
                                for (var j = U; j < W;)
                                    if (l.test(d[j])) {
                                        U < j && z.splice($, 0, new t(1, U, j));
                                        var K = j;
                                        for (++j; j < W && l.test(d[j]); ++j);
                                        z.splice($, 0, new t(2, K, j)), U = j
                                    } else ++j;
                                U < W && z.splice($, 0, new t(1, U, W))
                            } return "ltr" == o && (1 == z[0].level && (O = n.match(/^\s+/)) && (z[0].from = O[0].length, z.unshift(new t(0, 0, O[0].length))), 1 == m(z).level && (O = n.match(/\s+$/)) && (m(z).to -= O[0].length, z.push(new t(0, u - O[0].length, u)))), "rtl" == o ? z.reverse() : z
                    }
                }(),
                ts = [],
                ns = function(e, t, n) {
                    if (e.addEventListener) e.addEventListener(t, n, !1);
                    else if (e.attachEvent) e.attachEvent("on" + t, n);
                    else {
                        var o = e._handlers || (e._handlers = {});
                        o[t] = (o[t] || ts).concat(n)
                    }
                },
                os = function() {
                    if (ya && wa < 9) return !1;
                    var e = o("div");
                    return "draggable" in e || "dragDrop" in e
                }(),
                rs = 3 != "\n\nb".split(/\n/).length ? function(e) {
                    for (var t = 0, n = [], o = e.length; t <= o;) {
                        var r = e.indexOf("\n", t); - 1 == r && (r = e.length);
                        var i = e.slice(t, "\r" == e.charAt(r - 1) ? r - 1 : r),
                            a = i.indexOf("\r"); - 1 != a ? (n.push(i.slice(0, a)), t += a + 1) : (n.push(i), t = r + 1)
                    }
                    return n
                } : function(e) {
                    return e.split(/\r\n?|\n/)
                },
                is = window.getSelection ? function(e) {
                    try {
                        return e.selectionStart != e.selectionEnd
                    } catch (e) {
                        return !1
                    }
                } : function(e) {
                    var t;
                    try {
                        t = e.ownerDocument.selection.createRange()
                    } catch (e) {}
                    return !(!t || t.parentElement() != e) && 0 != t.compareEndPoints("StartToEnd", t)
                },
                as = function() {
                    var e = o("div");
                    return "oncopy" in e || (e.setAttribute("oncopy", "return;"), "function" == typeof e.oncopy)
                }(),
                ss = null,
                ls = {},
                cs = {},
                us = {},
                ds = function(e, t, n) {
                    this.pos = this.start = 0, this.string = e, this.tabSize = t || 8, this.lastColumnPos = this.lastColumnValue = 0, this.lineStart = 0, this.lineOracle = n
                };
            ds.prototype.eol = function() {
                return this.pos >= this.string.length
            }, ds.prototype.sol = function() {
                return this.pos == this.lineStart
            }, ds.prototype.peek = function() {
                return this.string.charAt(this.pos) || void 0
            }, ds.prototype.next = function() {
                if (this.pos < this.string.length) return this.string.charAt(this.pos++)
            }, ds.prototype.eat = function(e) {
                var t = this.string.charAt(this.pos);
                if ("string" == typeof e ? t == e : t && (e.test ? e.test(t) : e(t))) return ++this.pos, t
            }, ds.prototype.eatWhile = function(e) {
                for (var t = this.pos; this.eat(e););
                return this.pos > t
            }, ds.prototype.eatSpace = function() {
                for (var e = this, t = this.pos;
                    /[\s\u00a0]/.test(this.string.charAt(this.pos));) ++e.pos;
                return this.pos > t
            }, ds.prototype.skipToEnd = function() {
                this.pos = this.string.length
            }, ds.prototype.skipTo = function(e) {
                var t = this.string.indexOf(e, this.pos);
                if (t > -1) return this.pos = t, !0
            }, ds.prototype.backUp = function(e) {
                this.pos -= e
            }, ds.prototype.column = function() {
                return this.lastColumnPos < this.start && (this.lastColumnValue = f(this.string, this.start, this.tabSize, this.lastColumnPos, this.lastColumnValue), this.lastColumnPos = this.start), this.lastColumnValue - (this.lineStart ? f(this.string, this.lineStart, this.tabSize) : 0)
            }, ds.prototype.indentation = function() {
                return f(this.string, null, this.tabSize) - (this.lineStart ? f(this.string, this.lineStart, this.tabSize) : 0)
            }, ds.prototype.match = function(e, t, n) {
                if ("string" != typeof e) {
                    var o = this.string.slice(this.pos).match(e);
                    return o && o.index > 0 ? null : (o && !1 !== t && (this.pos += o[0].length), o)
                }
                var r = function(e) {
                    return n ? e.toLowerCase() : e
                };
                if (r(this.string.substr(this.pos, e.length)) == r(e)) return !1 !== t && (this.pos += e.length), !0
            }, ds.prototype.current = function() {
                return this.string.slice(this.start, this.pos)
            }, ds.prototype.hideFirstChars = function(e, t) {
                this.lineStart += e;
                try {
                    return t()
                } finally {
                    this.lineStart -= e
                }
            }, ds.prototype.lookAhead = function(e) {
                var t = this.lineOracle;
                return t && t.lookAhead(e)
            }, ds.prototype.baseToken = function() {
                var e = this.lineOracle;
                return e && e.baseToken(this.pos)
            };
            var fs = function(e, t) {
                    this.state = e, this.lookAhead = t
                },
                hs = function(e, t, n, o) {
                    this.state = t, this.doc = e, this.line = n, this.maxLookAhead = o || 0, this.baseTokens = null, this.baseTokenPos = 1
                };
            hs.prototype.lookAhead = function(e) {
                var t = this.doc.getLine(this.line + e);
                return null != t && e > this.maxLookAhead && (this.maxLookAhead = e), t
            }, hs.prototype.baseToken = function(e) {
                var t = this;
                if (!this.baseTokens) return null;
                for (; this.baseTokens[this.baseTokenPos] <= e;) t.baseTokenPos += 2;
                var n = this.baseTokens[this.baseTokenPos + 1];
                return {
                    type: n && n.replace(/( |^)overlay .*/, ""),
                    size: this.baseTokens[this.baseTokenPos] - e
                }
            }, hs.prototype.nextLine = function() {
                this.line++, this.maxLookAhead > 0 && this.maxLookAhead--
            }, hs.fromSaved = function(e, t, n) {
                return t instanceof fs ? new hs(e, Ge(e.mode, t.state), n, t.lookAhead) : new hs(e, Ge(e.mode, t), n)
            }, hs.prototype.save = function(e) {
                var t = !1 !== e ? Ge(this.doc.mode, this.state) : this.state;
                return this.maxLookAhead > 0 ? new fs(t, this.maxLookAhead) : t
            };
            var ps = function(e, t, n) {
                    this.start = e.start, this.end = e.pos, this.string = e.current(), this.type = t || null, this.state = n
                },
                gs = function(e, t, n) {
                    this.text = e, re(this, t), this.height = n ? n(this) : 1
                };
            gs.prototype.lineNo = function() {
                return D(this)
            }, Fe(gs);
            var ms, vs = {},
                bs = {},
                ys = null,
                ws = null,
                xs = {
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0
                },
                Cs = function(e, t, n) {
                    this.cm = n;
                    var r = this.vert = o("div", [o("div", null, null, "min-width: 1px")], "CodeMirror-vscrollbar"),
                        i = this.horiz = o("div", [o("div", null, null, "height: 100%; min-height: 1px")], "CodeMirror-hscrollbar");
                    e(r), e(i), ns(r, "scroll", function() {
                        r.clientHeight && t(r.scrollTop, "vertical")
                    }), ns(i, "scroll", function() {
                        i.clientWidth && t(i.scrollLeft, "horizontal")
                    }), this.checkedZeroWidth = !1, ya && wa < 8 && (this.horiz.style.minHeight = this.vert.style.minWidth = "18px")
                };
            Cs.prototype.update = function(e) {
                var t = e.scrollWidth > e.clientWidth + 1,
                    n = e.scrollHeight > e.clientHeight + 1,
                    o = e.nativeBarWidth;
                if (n) {
                    this.vert.style.display = "block", this.vert.style.bottom = t ? o + "px" : "0";
                    var r = e.viewHeight - (t ? o : 0);
                    this.vert.firstChild.style.height = Math.max(0, e.scrollHeight - e.clientHeight + r) + "px"
                } else this.vert.style.display = "", this.vert.firstChild.style.height = "0";
                if (t) {
                    this.horiz.style.display = "block", this.horiz.style.right = n ? o + "px" : "0", this.horiz.style.left = e.barLeft + "px";
                    var i = e.viewWidth - e.barLeft - (n ? o : 0);
                    this.horiz.firstChild.style.width = Math.max(0, e.scrollWidth - e.clientWidth + i) + "px"
                } else this.horiz.style.display = "", this.horiz.firstChild.style.width = "0";
                return !this.checkedZeroWidth && e.clientHeight > 0 && (0 == o && this.zeroWidthHack(), this.checkedZeroWidth = !0), {
                    right: n ? o : 0,
                    bottom: t ? o : 0
                }
            }, Cs.prototype.setScrollLeft = function(e) {
                this.horiz.scrollLeft != e && (this.horiz.scrollLeft = e), this.disableHoriz && this.enableZeroWidthBar(this.horiz, this.disableHoriz, "horiz")
            }, Cs.prototype.setScrollTop = function(e) {
                this.vert.scrollTop != e && (this.vert.scrollTop = e), this.disableVert && this.enableZeroWidthBar(this.vert, this.disableVert, "vert")
            }, Cs.prototype.zeroWidthHack = function() {
                var e = Fa && !La ? "12px" : "18px";
                this.horiz.style.height = this.vert.style.width = e, this.horiz.style.pointerEvents = this.vert.style.pointerEvents = "none", this.disableHoriz = new Ba, this.disableVert = new Ba
            }, Cs.prototype.enableZeroWidthBar = function(e, t, n) {
                function o() {
                    var r = e.getBoundingClientRect();
                    ("vert" == n ? document.elementFromPoint(r.right - 1, (r.top + r.bottom) / 2) : document.elementFromPoint((r.right + r.left) / 2, r.bottom - 1)) != e ? e.style.pointerEvents = "none" : t.set(1e3, o)
                }
                e.style.pointerEvents = "auto", t.set(1e3, o)
            }, Cs.prototype.clear = function() {
                var e = this.horiz.parentNode;
                e.removeChild(this.horiz), e.removeChild(this.vert)
            };
            var ks = function() {};
            ks.prototype.update = function() {
                return {
                    bottom: 0,
                    right: 0
                }
            }, ks.prototype.setScrollLeft = function() {}, ks.prototype.setScrollTop = function() {}, ks.prototype.clear = function() {};
            var Ss = {
                    native: Cs,
                    null: ks
                },
                Ts = 0,
                Ls = function(e, t, n) {
                    var o = e.display;
                    this.viewport = t, this.visible = Bn(o, e.doc, t), this.editorIsHidden = !o.wrapper.offsetWidth, this.wrapperHeight = o.wrapper.clientHeight, this.wrapperWidth = o.wrapper.clientWidth, this.oldDisplayWidth = Ut(e), this.force = n, this.dims = Cn(e), this.events = []
                };
            Ls.prototype.signal = function(e, t) {
                Ee(e, t) && this.events.push(arguments)
            }, Ls.prototype.finish = function() {
                for (var e = this, t = 0; t < this.events.length; t++) Ne.apply(null, e.events[t])
            };
            var Ns = 0,
                Ms = null;
            ya ? Ms = -.53 : ga ? Ms = 15 : ka ? Ms = -.7 : Ta && (Ms = -1 / 3);
            var As = function(e, t) {
                this.ranges = e, this.primIndex = t
            };
            As.prototype.primary = function() {
                return this.ranges[this.primIndex]
            }, As.prototype.equals = function(e) {
                var t = this;
                if (e == this) return !0;
                if (e.primIndex != this.primIndex || e.ranges.length != this.ranges.length) return !1;
                for (var n = 0; n < this.ranges.length; n++) {
                    var o = t.ranges[n],
                        r = e.ranges[n];
                    if (!z(o.anchor, r.anchor) || !z(o.head, r.head)) return !1
                }
                return !0
            }, As.prototype.deepCopy = function() {
                for (var e = this, t = [], n = 0; n < this.ranges.length; n++) t[n] = new Es(W(e.ranges[n].anchor), W(e.ranges[n].head));
                return new As(t, this.primIndex)
            }, As.prototype.somethingSelected = function() {
                for (var e = this, t = 0; t < this.ranges.length; t++)
                    if (!e.ranges[t].empty()) return !0;
                return !1
            }, As.prototype.contains = function(e, t) {
                var n = this;
                t || (t = e);
                for (var o = 0; o < this.ranges.length; o++) {
                    var r = n.ranges[o];
                    if (O(t, r.from()) >= 0 && O(e, r.to()) <= 0) return o
                }
                return -1
            };
            var Es = function(e, t) {
                this.anchor = e, this.head = t
            };
            Es.prototype.from = function() {
                return U(this.anchor, this.head)
            }, Es.prototype.to = function() {
                return B(this.anchor, this.head)
            }, Es.prototype.empty = function() {
                return this.head.line == this.anchor.line && this.head.ch == this.anchor.ch
            }, jr.prototype = {
                chunkSize: function() {
                    return this.lines.length
                },
                removeInner: function(e, t) {
                    for (var n = this, o = e, r = e + t; o < r; ++o) {
                        var i = n.lines[o];
                        n.height -= i.height, st(i), xt(i, "delete")
                    }
                    this.lines.splice(e, t)
                },
                collapse: function(e) {
                    e.push.apply(e, this.lines)
                },
                insertInner: function(e, t, n) {
                    var o = this;
                    this.height += n, this.lines = this.lines.slice(0, e).concat(t).concat(this.lines.slice(e));
                    for (var r = 0; r < t.length; ++r) t[r].parent = o
                },
                iterN: function(e, t, n) {
                    for (var o = this, r = e + t; e < r; ++e)
                        if (n(o.lines[e])) return !0
                }
            }, Kr.prototype = {
                chunkSize: function() {
                    return this.size
                },
                removeInner: function(e, t) {
                    var n = this;
                    this.size -= t;
                    for (var o = 0; o < this.children.length; ++o) {
                        var r = n.children[o],
                            i = r.chunkSize();
                        if (e < i) {
                            var a = Math.min(t, i - e),
                                s = r.height;
                            if (r.removeInner(e, a), n.height -= s - r.height, i == a && (n.children.splice(o--, 1), r.parent = null), 0 == (t -= a)) break;
                            e = 0
                        } else e -= i
                    }
                    if (this.size - t < 25 && (this.children.length > 1 || !(this.children[0] instanceof jr))) {
                        var l = [];
                        this.collapse(l), this.children = [new jr(l)], this.children[0].parent = this
                    }
                },
                collapse: function(e) {
                    for (var t = this, n = 0; n < this.children.length; ++n) t.children[n].collapse(e)
                },
                insertInner: function(e, t, n) {
                    var o = this;
                    this.size += t.length, this.height += n;
                    for (var r = 0; r < this.children.length; ++r) {
                        var i = o.children[r],
                            a = i.chunkSize();
                        if (e <= a) {
                            if (i.insertInner(e, t, n), i.lines && i.lines.length > 50) {
                                for (var s = i.lines.length % 25 + 25, l = s; l < i.lines.length;) {
                                    var c = new jr(i.lines.slice(l, l += 25));
                                    i.height -= c.height, o.children.splice(++r, 0, c), c.parent = o
                                }
                                i.lines = i.lines.slice(0, s), o.maybeSpill()
                            }
                            break
                        }
                        e -= a
                    }
                },
                maybeSpill: function() {
                    if (!(this.children.length <= 10)) {
                        var e = this;
                        do {
                            var t = e.children.splice(e.children.length - 5, 5),
                                n = new Kr(t);
                            if (e.parent) {
                                e.size -= n.size, e.height -= n.height;
                                var o = h(e.parent.children, e);
                                e.parent.children.splice(o + 1, 0, n)
                            } else {
                                var r = new Kr(e.children);
                                r.parent = e, e.children = [r, n], e = r
                            }
                            n.parent = e.parent
                        } while (e.children.length > 10);
                        e.parent.maybeSpill()
                    }
                },
                iterN: function(e, t, n) {
                    for (var o = this, r = 0; r < this.children.length; ++r) {
                        var i = o.children[r],
                            a = i.chunkSize();
                        if (e < a) {
                            var s = Math.min(t, a - e);
                            if (i.iterN(e, s, n)) return !0;
                            if (0 == (t -= s)) break;
                            e = 0
                        } else e -= a
                    }
                }
            };
            var Fs = function(e, t, n) {
                var o = this;
                if (n)
                    for (var r in n) n.hasOwnProperty(r) && (o[r] = n[r]);
                this.doc = e, this.node = t
            };
            Fs.prototype.clear = function() {
                var e = this,
                    t = this.doc.cm,
                    n = this.line.widgets,
                    o = this.line,
                    r = D(o);
                if (null != r && n) {
                    for (var i = 0; i < n.length; ++i) n[i] == e && n.splice(i--, 1);
                    n.length || (o.widgets = null);
                    var a = Pt(this);
                    F(o, Math.max(0, o.height - a)), t && (go(t, function() {
                        Vr(t, o, -a), wo(t, r, "widget")
                    }), xt(t, "lineWidgetCleared", t, this, r))
                }
            }, Fs.prototype.changed = function() {
                var e = this,
                    t = this.height,
                    n = this.doc.cm,
                    o = this.line;
                this.height = null;
                var r = Pt(this) - t;
                r && (F(o, o.height + r), n && go(n, function() {
                    n.curOp.forceUpdate = !0, Vr(n, o, r), xt(n, "lineWidgetChanged", n, e, D(o))
                }))
            }, Fe(Fs);
            var Ds = 0,
                Is = function(e, t) {
                    this.lines = [], this.type = t, this.doc = e, this.id = ++Ds
                };
            Is.prototype.clear = function() {
                var e = this;
                if (!this.explicitlyCleared) {
                    var t = this.doc.cm,
                        n = t && !t.curOp;
                    if (n && ao(t), Ee(this, "clear")) {
                        var o = this.find();
                        o && xt(this, "clear", o.from, o.to)
                    }
                    for (var r = null, i = null, a = 0; a < this.lines.length; ++a) {
                        var s = e.lines[a],
                            l = X(s.markedSpans, e);
                        t && !e.collapsed ? wo(t, D(s), "text") : t && (null != l.to && (i = D(s)), null != l.from && (r = D(s))), s.markedSpans = Y(s.markedSpans, l), null == l.from && e.collapsed && !ve(e.doc, s) && t && F(s, wn(t.display))
                    }
                    if (t && this.collapsed && !t.options.lineWrapping)
                        for (var c = 0; c < this.lines.length; ++c) {
                            var u = fe(e.lines[c]),
                                d = we(u);
                            d > t.display.maxLineLength && (t.display.maxLine = u, t.display.maxLineLength = d, t.display.maxLineChanged = !0)
                        }
                    null != r && t && this.collapsed && yo(t, r, i + 1), this.lines.length = 0, this.explicitlyCleared = !0, this.atomic && this.doc.cantEdit && (this.doc.cantEdit = !1, t && Tr(t.doc)), t && xt(t, "markerCleared", t, this, r, i), n && so(t), this.parent && this.parent.clear()
                }
            }, Is.prototype.find = function(e, t) {
                var n = this;
                null == e && "bookmark" == this.type && (e = 1);
                for (var o, r, i = 0; i < this.lines.length; ++i) {
                    var a = n.lines[i],
                        s = X(a.markedSpans, n);
                    if (null != s.from && (o = R(t ? a : D(a), s.from), -1 == e)) return o;
                    if (null != s.to && (r = R(t ? a : D(a), s.to), 1 == e)) return r
                }
                return o && {
                    from: o,
                    to: r
                }
            }, Is.prototype.changed = function() {
                var e = this,
                    t = this.find(-1, !0),
                    n = this,
                    o = this.doc.cm;
                t && o && go(o, function() {
                    var r = t.line,
                        i = D(t.line),
                        a = qt(o, i);
                    if (a && (en(a), o.curOp.selectionChanged = o.curOp.forceUpdate = !0), o.curOp.updateMaxLine = !0, !ve(n.doc, r) && null != n.height) {
                        var s = n.height;
                        n.height = null;
                        var l = Pt(n) - s;
                        l && F(r, r.height + l)
                    }
                    xt(o, "markerChanged", o, e)
                })
            }, Is.prototype.attachLine = function(e) {
                if (!this.lines.length && this.doc.cm) {
                    var t = this.doc.cm.curOp;
                    t.maybeHiddenMarkers && -1 != h(t.maybeHiddenMarkers, this) || (t.maybeUnhiddenMarkers || (t.maybeUnhiddenMarkers = [])).push(this)
                }
                this.lines.push(e)
            }, Is.prototype.detachLine = function(e) {
                if (this.lines.splice(h(this.lines, e), 1), !this.lines.length && this.doc.cm) {
                    var t = this.doc.cm.curOp;
                    (t.maybeHiddenMarkers || (t.maybeHiddenMarkers = [])).push(this)
                }
            }, Fe(Is);
            var Hs = function(e, t) {
                var n = this;
                this.markers = e, this.primary = t;
                for (var o = 0; o < e.length; ++o) e[o].parent = n
            };
            Hs.prototype.clear = function() {
                var e = this;
                if (!this.explicitlyCleared) {
                    this.explicitlyCleared = !0;
                    for (var t = 0; t < this.markers.length; ++t) e.markers[t].clear();
                    xt(this, "clear")
                }
            }, Hs.prototype.find = function(e, t) {
                return this.primary.find(e, t)
            }, Fe(Hs);
            var Ps = 0,
                Rs = function e(t, n, o, r, i) {
                    if (!(this instanceof e)) return new e(t, n, o, r, i);
                    null == o && (o = 0), Kr.call(this, [new jr([new gs("", null)])]), this.first = o, this.scrollTop = this.scrollLeft = 0, this.cantEdit = !1, this.cleanGeneration = 1, this.modeFrontier = this.highlightFrontier = o;
                    var a = R(o, 0);
                    this.sel = $o(a), this.history = new nr(null), this.id = ++Ps, this.modeOption = n, this.lineSep = r, this.direction = "rtl" == i ? "rtl" : "ltr", this.extend = !1, "string" == typeof t && (t = this.splitLines(t)), Zo(this, {
                        from: a,
                        to: a,
                        text: t
                    }), Cr(this, $o(a), Va)
                };
            Rs.prototype = w(Kr.prototype, {
                constructor: Rs,
                iter: function(e, t, n) {
                    n ? this.iterN(e - this.first, t - e, n) : this.iterN(this.first, this.first + this.size, e)
                },
                insert: function(e, t) {
                    for (var n = 0, o = 0; o < t.length; ++o) n += t[o].height;
                    this.insertInner(e - this.first, t, n)
                },
                remove: function(e, t) {
                    this.removeInner(e - this.first, t)
                },
                getValue: function(e) {
                    var t = E(this, this.first, this.first + this.size);
                    return !1 === e ? t : t.join(e || this.lineSeparator())
                },
                setValue: bo(function(e) {
                    var t = R(this.first, 0),
                        n = this.first + this.size - 1;
                    Dr(this, {
                        from: t,
                        to: R(n, M(this, n).text.length),
                        text: this.splitLines(e),
                        origin: "setValue",
                        full: !0
                    }, !0), this.cm && Xn(this.cm, 0, 0), Cr(this, $o(t), Va)
                }),
                replaceRange: function(e, t, n, o) {
                    t = j(this, t), n = n ? j(this, n) : t, zr(this, e, t, n, o)
                },
                getRange: function(e, t, n) {
                    var o = A(this, j(this, e), j(this, t));
                    return !1 === n ? o : o.join(n || this.lineSeparator())
                },
                getLine: function(e) {
                    var t = this.getLineHandle(e);
                    return t && t.text
                },
                getLineHandle: function(e) {
                    if (H(this, e)) return M(this, e)
                },
                getLineNumber: function(e) {
                    return D(e)
                },
                getLineHandleVisualStart: function(e) {
                    return "number" == typeof e && (e = M(this, e)), fe(e)
                },
                lineCount: function() {
                    return this.size
                },
                firstLine: function() {
                    return this.first
                },
                lastLine: function() {
                    return this.first + this.size - 1
                },
                clipPos: function(e) {
                    return j(this, e)
                },
                getCursor: function(e) {
                    var t = this.sel.primary();
                    return null == e || "head" == e ? t.head : "anchor" == e ? t.anchor : "end" == e || "to" == e || !1 === e ? t.to() : t.from()
                },
                listSelections: function() {
                    return this.sel.ranges
                },
                somethingSelected: function() {
                    return this.sel.somethingSelected()
                },
                setCursor: bo(function(e, t, n) {
                    yr(this, j(this, "number" == typeof e ? R(e, t || 0) : e), null, n)
                }),
                setSelection: bo(function(e, t, n) {
                    yr(this, j(this, e), j(this, t || e), n)
                }),
                extendSelection: bo(function(e, t, n) {
                    mr(this, j(this, e), t && j(this, t), n)
                }),
                extendSelections: bo(function(e, t) {
                    vr(this, V(this, e), t)
                }),
                extendSelectionsBy: bo(function(e, t) {
                    vr(this, V(this, v(this.sel.ranges, e)), t)
                }),
                setSelections: bo(function(e, t, n) {
                    var o = this;
                    if (e.length) {
                        for (var r = [], i = 0; i < e.length; i++) r[i] = new Es(j(o, e[i].anchor), j(o, e[i].head));
                        null == t && (t = Math.min(e.length - 1, this.sel.primIndex)), Cr(this, Uo(r, t), n)
                    }
                }),
                addSelection: bo(function(e, t, n) {
                    var o = this.sel.ranges.slice(0);
                    o.push(new Es(j(this, e), j(this, t || e))), Cr(this, Uo(o, o.length - 1), n)
                }),
                getSelection: function(e) {
                    for (var t, n = this, o = this.sel.ranges, r = 0; r < o.length; r++) {
                        var i = A(n, o[r].from(), o[r].to());
                        t = t ? t.concat(i) : i
                    }
                    return !1 === e ? t : t.join(e || this.lineSeparator())
                },
                getSelections: function(e) {
                    for (var t = this, n = [], o = this.sel.ranges, r = 0; r < o.length; r++) {
                        var i = A(t, o[r].from(), o[r].to());
                        !1 !== e && (i = i.join(e || t.lineSeparator())), n[r] = i
                    }
                    return n
                },
                replaceSelection: function(e, t, n) {
                    for (var o = [], r = 0; r < this.sel.ranges.length; r++) o[r] = e;
                    this.replaceSelections(o, t, n || "+input")
                },
                replaceSelections: bo(function(e, t, n) {
                    for (var o = this, r = [], i = this.sel, a = 0; a < i.ranges.length; a++) {
                        var s = i.ranges[a];
                        r[a] = {
                            from: s.from(),
                            to: s.to(),
                            text: o.splitLines(e[a]),
                            origin: n
                        }
                    }
                    for (var l = t && "end" != t && qo(this, r, t), c = r.length - 1; c >= 0; c--) Dr(o, r[c]);
                    l ? xr(this, l) : this.cm && _n(this.cm)
                }),
                undo: bo(function() {
                    Hr(this, "undo")
                }),
                redo: bo(function() {
                    Hr(this, "redo")
                }),
                undoSelection: bo(function() {
                    Hr(this, "undo", !0)
                }),
                redoSelection: bo(function() {
                    Hr(this, "redo", !0)
                }),
                setExtending: function(e) {
                    this.extend = e
                },
                getExtending: function() {
                    return this.extend
                },
                historySize: function() {
                    for (var e = this.history, t = 0, n = 0, o = 0; o < e.done.length; o++) e.done[o].ranges || ++t;
                    for (var r = 0; r < e.undone.length; r++) e.undone[r].ranges || ++n;
                    return {
                        undo: t,
                        redo: n
                    }
                },
                clearHistory: function() {
                    this.history = new nr(this.history.maxGeneration)
                },
                markClean: function() {
                    this.cleanGeneration = this.changeGeneration(!0)
                },
                changeGeneration: function(e) {
                    return e && (this.history.lastOp = this.history.lastSelOp = this.history.lastOrigin = null), this.history.generation
                },
                isClean: function(e) {
                    return this.history.generation == (e || this.cleanGeneration)
                },
                getHistory: function() {
                    return {
                        done: pr(this.history.done),
                        undone: pr(this.history.undone)
                    }
                },
                setHistory: function(e) {
                    var t = this.history = new nr(this.history.maxGeneration);
                    t.done = pr(e.done.slice(0), null, !0), t.undone = pr(e.undone.slice(0), null, !0)
                },
                setGutterMarker: bo(function(e, t, n) {
                    return $r(this, e, "gutter", function(e) {
                        var o = e.gutterMarkers || (e.gutterMarkers = {});
                        return o[t] = n, !n && k(o) && (e.gutterMarkers = null), !0
                    })
                }),
                clearGutter: bo(function(e) {
                    var t = this;
                    this.iter(function(n) {
                        n.gutterMarkers && n.gutterMarkers[e] && $r(t, n, "gutter", function() {
                            return n.gutterMarkers[e] = null, k(n.gutterMarkers) && (n.gutterMarkers = null), !0
                        })
                    })
                }),
                lineInfo: function(e) {
                    var t;
                    if ("number" == typeof e) {
                        if (!H(this, e)) return null;
                        if (t = e, !(e = M(this, e))) return null
                    } else if (null == (t = D(e))) return null;
                    return {
                        line: t,
                        handle: e,
                        text: e.text,
                        gutterMarkers: e.gutterMarkers,
                        textClass: e.textClass,
                        bgClass: e.bgClass,
                        wrapClass: e.wrapClass,
                        widgets: e.widgets
                    }
                },
                addLineClass: bo(function(t, n, o) {
                    return $r(this, t, "gutter" == n ? "gutter" : "class", function(t) {
                        var r = "text" == n ? "textClass" : "background" == n ? "bgClass" : "gutter" == n ? "gutterClass" : "wrapClass";
                        if (t[r]) {
                            if (e(o).test(t[r])) return !1;
                            t[r] += " " + o
                        } else t[r] = o;
                        return !0
                    })
                }),
                removeLineClass: bo(function(t, n, o) {
                    return $r(this, t, "gutter" == n ? "gutter" : "class", function(t) {
                        var r = "text" == n ? "textClass" : "background" == n ? "bgClass" : "gutter" == n ? "gutterClass" : "wrapClass",
                            i = t[r];
                        if (!i) return !1;
                        if (null == o) t[r] = null;
                        else {
                            var a = i.match(e(o));
                            if (!a) return !1;
                            var s = a.index + a[0].length;
                            t[r] = i.slice(0, a.index) + (a.index && s != i.length ? " " : "") + i.slice(s) || null
                        }
                        return !0
                    })
                }),
                addLineWidget: bo(function(e, t, n) {
                    return Gr(this, e, t, n)
                }),
                removeLineWidget: function(e) {
                    e.clear()
                },
                markText: function(e, t, n) {
                    return qr(this, j(this, e), j(this, t), n, n && n.type || "range")
                },
                setBookmark: function(e, t) {
                    var n = {
                        replacedWith: t && (null == t.nodeType ? t.widget : t),
                        insertLeft: t && t.insertLeft,
                        clearWhenEmpty: !1,
                        shared: t && t.shared,
                        handleMouseEvents: t && t.handleMouseEvents
                    };
                    return e = j(this, e), qr(this, e, e, n, "bookmark")
                },
                findMarksAt: function(e) {
                    e = j(this, e);
                    var t = [],
                        n = M(this, e.line).markedSpans;
                    if (n)
                        for (var o = 0; o < n.length; ++o) {
                            var r = n[o];
                            (null == r.from || r.from <= e.ch) && (null == r.to || r.to >= e.ch) && t.push(r.marker.parent || r.marker)
                        }
                    return t
                },
                findMarks: function(e, t, n) {
                    e = j(this, e), t = j(this, t);
                    var o = [],
                        r = e.line;
                    return this.iter(e.line, t.line + 1, function(i) {
                        var a = i.markedSpans;
                        if (a)
                            for (var s = 0; s < a.length; s++) {
                                var l = a[s];
                                null != l.to && r == e.line && e.ch >= l.to || null == l.from && r != e.line || null != l.from && r == t.line && l.from >= t.ch || n && !n(l.marker) || o.push(l.marker.parent || l.marker)
                            }++r
                    }), o
                },
                getAllMarks: function() {
                    var e = [];
                    return this.iter(function(t) {
                        var n = t.markedSpans;
                        if (n)
                            for (var o = 0; o < n.length; ++o) null != n[o].from && e.push(n[o].marker)
                    }), e
                },
                posFromIndex: function(e) {
                    var t, n = this.first,
                        o = this.lineSeparator().length;
                    return this.iter(function(r) {
                        var i = r.text.length + o;
                        if (i > e) return t = e, !0;
                        e -= i, ++n
                    }), j(this, R(n, t))
                },
                indexFromPos: function(e) {
                    e = j(this, e);
                    var t = e.ch;
                    if (e.line < this.first || e.ch < 0) return 0;
                    var n = this.lineSeparator().length;
                    return this.iter(this.first, e.line, function(e) {
                        t += e.text.length + n
                    }), t
                },
                copy: function(e) {
                    var t = new Rs(E(this, this.first, this.first + this.size), this.modeOption, this.first, this.lineSep, this.direction);
                    return t.scrollTop = this.scrollTop, t.scrollLeft = this.scrollLeft, t.sel = this.sel, t.extend = !1, e && (t.history.undoDepth = this.history.undoDepth, t.setHistory(this.getHistory())), t
                },
                linkedDoc: function(e) {
                    e || (e = {});
                    var t = this.first,
                        n = this.first + this.size;
                    null != e.from && e.from > t && (t = e.from), null != e.to && e.to < n && (n = e.to);
                    var o = new Rs(E(this, t, n), e.mode || this.modeOption, t, this.lineSep, this.direction);
                    return e.sharedHist && (o.history = this.history), (this.linked || (this.linked = [])).push({
                        doc: o,
                        sharedHist: e.sharedHist
                    }), o.linked = [{
                        doc: this,
                        isParent: !0,
                        sharedHist: e.sharedHist
                    }], Yr(o, Xr(this)), o
                },
                unlinkDoc: function(e) {
                    var t = this;
                    if (e instanceof _i && (e = e.doc), this.linked)
                        for (var n = 0; n < this.linked.length; ++n) {
                            var o = t.linked[n];
                            if (o.doc == e) {
                                t.linked.splice(n, 1), e.unlinkDoc(t), Zr(Xr(t));
                                break
                            }
                        }
                    if (e.history == this.history) {
                        var r = [e.id];
                        Jo(e, function(e) {
                            return r.push(e.id)
                        }, !0), e.history = new nr(null), e.history.done = pr(this.history.done, r), e.history.undone = pr(this.history.undone, r)
                    }
                },
                iterLinkedDocs: function(e) {
                    Jo(this, e)
                },
                getMode: function() {
                    return this.mode
                },
                getEditor: function() {
                    return this.cm
                },
                splitLines: function(e) {
                    return this.lineSep ? e.split(this.lineSep) : rs(e)
                },
                lineSeparator: function() {
                    return this.lineSep || "\n"
                },
                setDirection: bo(function(e) {
                    "rtl" != e && (e = "ltr"), e != this.direction && (this.direction = e, this.iter(function(e) {
                        return e.order = null
                    }), this.cm && tr(this.cm))
                })
            }), Rs.prototype.eachLine = Rs.prototype.iter;
            for (var Os = 0, zs = !1, Ws = {
                    3: "Enter",
                    8: "Backspace",
                    9: "Tab",
                    13: "Enter",
                    16: "Shift",
                    17: "Ctrl",
                    18: "Alt",
                    19: "Pause",
                    20: "CapsLock",
                    27: "Esc",
                    32: "Space",
                    33: "PageUp",
                    34: "PageDown",
                    35: "End",
                    36: "Home",
                    37: "Left",
                    38: "Up",
                    39: "Right",
                    40: "Down",
                    44: "PrintScrn",
                    45: "Insert",
                    46: "Delete",
                    59: ";",
                    61: "=",
                    91: "Mod",
                    92: "Mod",
                    93: "Mod",
                    106: "*",
                    107: "=",
                    109: "-",
                    110: ".",
                    111: "/",
                    127: "Delete",
                    173: "-",
                    186: ";",
                    187: "=",
                    188: ",",
                    189: "-",
                    190: ".",
                    191: "/",
                    192: "`",
                    219: "[",
                    220: "\\",
                    221: "]",
                    222: "'",
                    63232: "Up",
                    63233: "Down",
                    63234: "Left",
                    63235: "Right",
                    63272: "Delete",
                    63273: "Home",
                    63275: "End",
                    63276: "PageUp",
                    63277: "PageDown",
                    63302: "Insert"
                }, Bs = 0; Bs < 10; Bs++) Ws[Bs + 48] = Ws[Bs + 96] = String(Bs);
            for (var Us = 65; Us <= 90; Us++) Ws[Us] = String.fromCharCode(Us);
            for (var $s = 1; $s <= 12; $s++) Ws[$s + 111] = Ws[$s + 63235] = "F" + $s;
            var js = {};
            js.basic = {
                Left: "goCharLeft",
                Right: "goCharRight",
                Up: "goLineUp",
                Down: "goLineDown",
                End: "goLineEnd",
                Home: "goLineStartSmart",
                PageUp: "goPageUp",
                PageDown: "goPageDown",
                Delete: "delCharAfter",
                Backspace: "delCharBefore",
                "Shift-Backspace": "delCharBefore",
                Tab: "defaultTab",
                "Shift-Tab": "indentAuto",
                Enter: "newlineAndIndent",
                Insert: "toggleOverwrite",
                Esc: "singleSelection"
            }, js.pcDefault = {
                "Ctrl-A": "selectAll",
                "Ctrl-D": "deleteLine",
                "Ctrl-Z": "undo",
                "Shift-Ctrl-Z": "redo",
                "Ctrl-Y": "redo",
                "Ctrl-Home": "goDocStart",
                "Ctrl-End": "goDocEnd",
                "Ctrl-Up": "goLineUp",
                "Ctrl-Down": "goLineDown",
                "Ctrl-Left": "goGroupLeft",
                "Ctrl-Right": "goGroupRight",
                "Alt-Left": "goLineStart",
                "Alt-Right": "goLineEnd",
                "Ctrl-Backspace": "delGroupBefore",
                "Ctrl-Delete": "delGroupAfter",
                "Ctrl-S": "save",
                "Ctrl-F": "find",
                "Ctrl-G": "findNext",
                "Shift-Ctrl-G": "findPrev",
                "Shift-Ctrl-F": "replace",
                "Shift-Ctrl-R": "replaceAll",
                "Ctrl-[": "indentLess",
                "Ctrl-]": "indentMore",
                "Ctrl-U": "undoSelection",
                "Shift-Ctrl-U": "redoSelection",
                "Alt-U": "redoSelection",
                fallthrough: "basic"
            }, js.emacsy = {
                "Ctrl-F": "goCharRight",
                "Ctrl-B": "goCharLeft",
                "Ctrl-P": "goLineUp",
                "Ctrl-N": "goLineDown",
                "Alt-F": "goWordRight",
                "Alt-B": "goWordLeft",
                "Ctrl-A": "goLineStart",
                "Ctrl-E": "goLineEnd",
                "Ctrl-V": "goPageDown",
                "Shift-Ctrl-V": "goPageUp",
                "Ctrl-D": "delCharAfter",
                "Ctrl-H": "delCharBefore",
                "Alt-D": "delWordAfter",
                "Alt-Backspace": "delWordBefore",
                "Ctrl-K": "killLine",
                "Ctrl-T": "transposeChars",
                "Ctrl-O": "openLine"
            }, js.macDefault = {
                "Cmd-A": "selectAll",
                "Cmd-D": "deleteLine",
                "Cmd-Z": "undo",
                "Shift-Cmd-Z": "redo",
                "Cmd-Y": "redo",
                "Cmd-Home": "goDocStart",
                "Cmd-Up": "goDocStart",
                "Cmd-End": "goDocEnd",
                "Cmd-Down": "goDocEnd",
                "Alt-Left": "goGroupLeft",
                "Alt-Right": "goGroupRight",
                "Cmd-Left": "goLineLeft",
                "Cmd-Right": "goLineRight",
                "Alt-Backspace": "delGroupBefore",
                "Ctrl-Alt-Backspace": "delGroupAfter",
                "Alt-Delete": "delGroupAfter",
                "Cmd-S": "save",
                "Cmd-F": "find",
                "Cmd-G": "findNext",
                "Shift-Cmd-G": "findPrev",
                "Cmd-Alt-F": "replace",
                "Shift-Cmd-Alt-F": "replaceAll",
                "Cmd-[": "indentLess",
                "Cmd-]": "indentMore",
                "Cmd-Backspace": "delWrappedLineLeft",
                "Cmd-Delete": "delWrappedLineRight",
                "Cmd-U": "undoSelection",
                "Shift-Cmd-U": "redoSelection",
                "Ctrl-Up": "goDocStart",
                "Ctrl-Down": "goDocEnd",
                fallthrough: ["basic", "emacsy"]
            }, js.default = Fa ? js.macDefault : js.pcDefault;
            var Ks = {
                    selectAll: Er,
                    singleSelection: function(e) {
                        return e.setSelection(e.getCursor("anchor"), e.getCursor("head"), Va)
                    },
                    killLine: function(e) {
                        return hi(e, function(t) {
                            if (t.empty()) {
                                var n = M(e.doc, t.head.line).text.length;
                                return t.head.ch == n && t.head.line < e.lastLine() ? {
                                    from: t.head,
                                    to: R(t.head.line + 1, 0)
                                } : {
                                    from: t.head,
                                    to: R(t.head.line, n)
                                }
                            }
                            return {
                                from: t.from(),
                                to: t.to()
                            }
                        })
                    },
                    deleteLine: function(e) {
                        return hi(e, function(t) {
                            return {
                                from: R(t.from().line, 0),
                                to: j(e.doc, R(t.to().line + 1, 0))
                            }
                        })
                    },
                    delLineLeft: function(e) {
                        return hi(e, function(e) {
                            return {
                                from: R(e.from().line, 0),
                                to: e.from()
                            }
                        })
                    },
                    delWrappedLineLeft: function(e) {
                        return hi(e, function(t) {
                            var n = e.charCoords(t.head, "div").top + 5;
                            return {
                                from: e.coordsChar({
                                    left: 0,
                                    top: n
                                }, "div"),
                                to: t.from()
                            }
                        })
                    },
                    delWrappedLineRight: function(e) {
                        return hi(e, function(t) {
                            var n = e.charCoords(t.head, "div").top + 5,
                                o = e.coordsChar({
                                    left: e.display.lineDiv.offsetWidth + 100,
                                    top: n
                                }, "div");
                            return {
                                from: t.from(),
                                to: o
                            }
                        })
                    },
                    undo: function(e) {
                        return e.undo()
                    },
                    redo: function(e) {
                        return e.redo()
                    },
                    undoSelection: function(e) {
                        return e.undoSelection()
                    },
                    redoSelection: function(e) {
                        return e.redoSelection()
                    },
                    goDocStart: function(e) {
                        return e.extendSelection(R(e.firstLine(), 0))
                    },
                    goDocEnd: function(e) {
                        return e.extendSelection(R(e.lastLine()))
                    },
                    goLineStart: function(e) {
                        return e.extendSelectionsBy(function(t) {
                            return bi(e, t.head.line)
                        }, {
                            origin: "+move",
                            bias: 1
                        })
                    },
                    goLineStartSmart: function(e) {
                        return e.extendSelectionsBy(function(t) {
                            return wi(e, t.head)
                        }, {
                            origin: "+move",
                            bias: 1
                        })
                    },
                    goLineEnd: function(e) {
                        return e.extendSelectionsBy(function(t) {
                            return yi(e, t.head.line)
                        }, {
                            origin: "+move",
                            bias: -1
                        })
                    },
                    goLineRight: function(e) {
                        return e.extendSelectionsBy(function(t) {
                            var n = e.cursorCoords(t.head, "div").top + 5;
                            return e.coordsChar({
                                left: e.display.lineDiv.offsetWidth + 100,
                                top: n
                            }, "div")
                        }, qa)
                    },
                    goLineLeft: function(e) {
                        return e.extendSelectionsBy(function(t) {
                            var n = e.cursorCoords(t.head, "div").top + 5;
                            return e.coordsChar({
                                left: 0,
                                top: n
                            }, "div")
                        }, qa)
                    },
                    goLineLeftSmart: function(e) {
                        return e.extendSelectionsBy(function(t) {
                            var n = e.cursorCoords(t.head, "div").top + 5,
                                o = e.coordsChar({
                                    left: 0,
                                    top: n
                                }, "div");
                            return o.ch < e.getLine(o.line).search(/\S/) ? wi(e, t.head) : o
                        }, qa)
                    },
                    goLineUp: function(e) {
                        return e.moveV(-1, "line")
                    },
                    goLineDown: function(e) {
                        return e.moveV(1, "line")
                    },
                    goPageUp: function(e) {
                        return e.moveV(-1, "page")
                    },
                    goPageDown: function(e) {
                        return e.moveV(1, "page")
                    },
                    goCharLeft: function(e) {
                        return e.moveH(-1, "char")
                    },
                    goCharRight: function(e) {
                        return e.moveH(1, "char")
                    },
                    goColumnLeft: function(e) {
                        return e.moveH(-1, "column")
                    },
                    goColumnRight: function(e) {
                        return e.moveH(1, "column")
                    },
                    goWordLeft: function(e) {
                        return e.moveH(-1, "word")
                    },
                    goGroupRight: function(e) {
                        return e.moveH(1, "group")
                    },
                    goGroupLeft: function(e) {
                        return e.moveH(-1, "group")
                    },
                    goWordRight: function(e) {
                        return e.moveH(1, "word")
                    },
                    delCharBefore: function(e) {
                        return e.deleteH(-1, "char")
                    },
                    delCharAfter: function(e) {
                        return e.deleteH(1, "char")
                    },
                    delWordBefore: function(e) {
                        return e.deleteH(-1, "word")
                    },
                    delWordAfter: function(e) {
                        return e.deleteH(1, "word")
                    },
                    delGroupBefore: function(e) {
                        return e.deleteH(-1, "group")
                    },
                    delGroupAfter: function(e) {
                        return e.deleteH(1, "group")
                    },
                    indentAuto: function(e) {
                        return e.indentSelection("smart")
                    },
                    indentMore: function(e) {
                        return e.indentSelection("add")
                    },
                    indentLess: function(e) {
                        return e.indentSelection("subtract")
                    },
                    insertTab: function(e) {
                        return e.replaceSelection("\t")
                    },
                    insertSoftTab: function(e) {
                        for (var t = [], n = e.listSelections(), o = e.options.tabSize, r = 0; r < n.length; r++) {
                            var i = n[r].from(),
                                a = f(e.getLine(i.line), i.ch, o);
                            t.push(g(o - a % o))
                        }
                        e.replaceSelections(t)
                    },
                    defaultTab: function(e) {
                        e.somethingSelected() ? e.indentSelection("add") : e.execCommand("insertTab")
                    },
                    transposeChars: function(e) {
                        return go(e, function() {
                            for (var t = e.listSelections(), n = [], o = 0; o < t.length; o++)
                                if (t[o].empty()) {
                                    var r = t[o].head,
                                        i = M(e.doc, r.line).text;
                                    if (i)
                                        if (r.ch == i.length && (r = new R(r.line, r.ch - 1)), r.ch > 0) r = new R(r.line, r.ch + 1), e.replaceRange(i.charAt(r.ch - 1) + i.charAt(r.ch - 2), R(r.line, r.ch - 2), r, "+transpose");
                                        else if (r.line > e.doc.first) {
                                        var a = M(e.doc, r.line - 1).text;
                                        a && (r = new R(r.line, 1), e.replaceRange(i.charAt(0) + e.doc.lineSeparator() + a.charAt(a.length - 1), R(r.line - 1, a.length - 1), r, "+transpose"))
                                    }
                                    n.push(new Es(r, r))
                                } e.setSelections(n)
                        })
                    },
                    newlineAndIndent: function(e) {
                        return go(e, function() {
                            for (var t = e.listSelections(), n = t.length - 1; n >= 0; n--) e.replaceRange(e.doc.lineSeparator(), t[n].anchor, t[n].head, "+input");
                            t = e.listSelections();
                            for (var o = 0; o < t.length; o++) e.indentLine(t[o].from().line, null, !0);
                            _n(e)
                        })
                    },
                    openLine: function(e) {
                        return e.replaceSelection("\n", "start")
                    },
                    toggleOverwrite: function(e) {
                        return e.toggleOverwrite()
                    }
                },
                Vs = new Ba,
                Gs = null,
                qs = function(e, t, n) {
                    this.time = e, this.pos = t, this.button = n
                };
            qs.prototype.compare = function(e, t, n) {
                return this.time + 400 > e && 0 == O(t, this.pos) && n == this.button
            };
            var _s, Xs, Ys = {
                    toString: function() {
                        return "CodeMirror.Init"
                    }
                },
                Zs = {},
                Js = {};
            _i.defaults = Zs, _i.optionHandlers = Js;
            var Qs = [];
            _i.defineInitHook = function(e) {
                return Qs.push(e)
            };
            var el = null,
                tl = function(e) {
                    this.cm = e, this.lastAnchorNode = this.lastAnchorOffset = this.lastFocusNode = this.lastFocusOffset = null, this.polling = new Ba, this.composing = null, this.gracePeriod = !1, this.readDOMTimeout = null
                };
            tl.prototype.init = function(e) {
                function t(e) {
                    if (!Me(r, e)) {
                        if (r.somethingSelected()) Zi({
                            lineWise: !1,
                            text: r.getSelections()
                        }), "cut" == e.type && r.replaceSelection("", null, "cut");
                        else {
                            if (!r.options.lineWiseCopyCut) return;
                            var t = ta(r);
                            Zi({
                                lineWise: !0,
                                text: t.text
                            }), "cut" == e.type && r.operation(function() {
                                r.setSelections(t.ranges, 0, Va), r.replaceSelection("", null, "cut")
                            })
                        }
                        if (e.clipboardData) {
                            e.clipboardData.clearData();
                            var n = el.text.join("\n");
                            if (e.clipboardData.setData("Text", n), e.clipboardData.getData("Text") == n) return void e.preventDefault()
                        }
                        var a = oa(),
                            s = a.firstChild;
                        r.display.lineSpace.insertBefore(a, r.display.lineSpace.firstChild), s.value = el.text.join("\n");
                        var l = document.activeElement;
                        Wa(s), setTimeout(function() {
                            r.display.lineSpace.removeChild(a), l.focus(), l == i && o.showPrimarySelection()
                        }, 50)
                    }
                }
                var n = this,
                    o = this,
                    r = o.cm,
                    i = o.div = e.lineDiv;
                na(i, r.options.spellcheck), ns(i, "paste", function(e) {
                    Me(r, e) || Qi(e, r) || wa <= 11 && setTimeout(mo(r, function() {
                        return n.updateFromDOM()
                    }), 20)
                }), ns(i, "compositionstart", function(e) {
                    n.composing = {
                        data: e.data,
                        done: !1
                    }
                }), ns(i, "compositionupdate", function(e) {
                    n.composing || (n.composing = {
                        data: e.data,
                        done: !1
                    })
                }), ns(i, "compositionend", function(e) {
                    n.composing && (e.data != n.composing.data && n.readFromDOMSoon(), n.composing.done = !0)
                }), ns(i, "touchstart", function() {
                    return o.forceCompositionEnd()
                }), ns(i, "input", function() {
                    n.composing || n.readFromDOMSoon()
                }), ns(i, "copy", t), ns(i, "cut", t)
            }, tl.prototype.prepareSelection = function() {
                var e = An(this.cm, !1);
                return e.focus = this.cm.state.focused, e
            }, tl.prototype.showSelection = function(e, t) {
                e && this.cm.display.view.length && ((e.focus || t) && this.showPrimarySelection(), this.showMultipleSelections(e))
            }, tl.prototype.showPrimarySelection = function() {
                var e = window.getSelection(),
                    t = this.cm,
                    n = t.doc.sel.primary(),
                    o = n.from(),
                    r = n.to();
                if (t.display.viewTo == t.display.viewFrom || o.line >= t.display.viewTo || r.line < t.display.viewFrom) return void e.removeAllRanges();
                var i = ua(t, e.anchorNode, e.anchorOffset),
                    a = ua(t, e.focusNode, e.focusOffset);
                if (!i || i.bad || !a || a.bad || 0 != O(U(i, a), o) || 0 != O(B(i, a), r)) {
                    var s = t.display.view,
                        l = o.line >= t.display.viewFrom && aa(t, o) || {
                            node: s[0].measure.map[2],
                            offset: 0
                        },
                        c = r.line < t.display.viewTo && aa(t, r);
                    if (!c) {
                        var u = s[s.length - 1].measure,
                            d = u.maps ? u.maps[u.maps.length - 1] : u.map;
                        c = {
                            node: d[d.length - 1],
                            offset: d[d.length - 2] - d[d.length - 3]
                        }
                    }
                    if (!l || !c) return void e.removeAllRanges();
                    var f, h = e.rangeCount && e.getRangeAt(0);
                    try {
                        f = Pa(l.node, l.offset, c.offset, c.node)
                    } catch (e) {}
                    f && (!ga && t.state.focused ? (e.collapse(l.node, l.offset), f.collapsed || (e.removeAllRanges(), e.addRange(f))) : (e.removeAllRanges(), e.addRange(f)), h && null == e.anchorNode ? e.addRange(h) : ga && this.startGracePeriod()), this.rememberSelection()
                }
            }, tl.prototype.startGracePeriod = function() {
                var e = this;
                clearTimeout(this.gracePeriod), this.gracePeriod = setTimeout(function() {
                    e.gracePeriod = !1, e.selectionChanged() && e.cm.operation(function() {
                        return e.cm.curOp.selectionChanged = !0
                    })
                }, 20)
            }, tl.prototype.showMultipleSelections = function(e) {
                n(this.cm.display.cursorDiv, e.cursors), n(this.cm.display.selectionDiv, e.selection)
            }, tl.prototype.rememberSelection = function() {
                var e = window.getSelection();
                this.lastAnchorNode = e.anchorNode, this.lastAnchorOffset = e.anchorOffset, this.lastFocusNode = e.focusNode, this.lastFocusOffset = e.focusOffset
            }, tl.prototype.selectionInEditor = function() {
                var e = window.getSelection();
                if (!e.rangeCount) return !1;
                var t = e.getRangeAt(0).commonAncestorContainer;
                return a(this.div, t)
            }, tl.prototype.focus = function() {
                "nocursor" != this.cm.options.readOnly && (this.selectionInEditor() || this.showSelection(this.prepareSelection(), !0), this.div.focus())
            }, tl.prototype.blur = function() {
                this.div.blur()
            }, tl.prototype.getField = function() {
                return this.div
            }, tl.prototype.supportsTouch = function() {
                return !0
            }, tl.prototype.receivedFocus = function() {
                function e() {
                    t.cm.state.focused && (t.pollSelection(), t.polling.set(t.cm.options.pollInterval, e))
                }
                var t = this;
                this.selectionInEditor() ? this.pollSelection() : go(this.cm, function() {
                    return t.cm.curOp.selectionChanged = !0
                }), this.polling.set(this.cm.options.pollInterval, e)
            }, tl.prototype.selectionChanged = function() {
                var e = window.getSelection();
                return e.anchorNode != this.lastAnchorNode || e.anchorOffset != this.lastAnchorOffset || e.focusNode != this.lastFocusNode || e.focusOffset != this.lastFocusOffset
            }, tl.prototype.pollSelection = function() {
                if (null == this.readDOMTimeout && !this.gracePeriod && this.selectionChanged()) {
                    var e = window.getSelection(),
                        t = this.cm;
                    if (Aa && ka && this.cm.options.gutters.length && sa(e.anchorNode)) return this.cm.triggerOnKeyDown({
                        type: "keydown",
                        keyCode: 8,
                        preventDefault: Math.abs
                    }), this.blur(), void this.focus();
                    if (!this.composing) {
                        this.rememberSelection();
                        var n = ua(t, e.anchorNode, e.anchorOffset),
                            o = ua(t, e.focusNode, e.focusOffset);
                        n && o && go(t, function() {
                            Cr(t.doc, $o(n, o), Va), (n.bad || o.bad) && (t.curOp.selectionChanged = !0)
                        })
                    }
                }
            }, tl.prototype.pollContent = function() {
                null != this.readDOMTimeout && (clearTimeout(this.readDOMTimeout), this.readDOMTimeout = null);
                var e = this.cm,
                    t = e.display,
                    n = e.doc.sel.primary(),
                    o = n.from(),
                    r = n.to();
                if (0 == o.ch && o.line > e.firstLine() && (o = R(o.line - 1, M(e.doc, o.line - 1).length)), r.ch == M(e.doc, r.line).text.length && r.line < e.lastLine() && (r = R(r.line + 1, 0)), o.line < t.viewFrom || r.line > t.viewTo - 1) return !1;
                var i, a, s;
                o.line == t.viewFrom || 0 == (i = Nn(e, o.line)) ? (a = D(t.view[0].line), s = t.view[0].node) : (a = D(t.view[i].line), s = t.view[i - 1].node.nextSibling);
                var l, c, u = Nn(e, r.line);
                if (u == t.view.length - 1 ? (l = t.viewTo - 1, c = t.lineDiv.lastChild) : (l = D(t.view[u + 1].line) - 1, c = t.view[u + 1].node.previousSibling), !s) return !1;
                for (var d = e.doc.splitLines(ca(e, s, c, a, l)), f = A(e.doc, R(a, 0), R(l, M(e.doc, l).text.length)); d.length > 1 && f.length > 1;)
                    if (m(d) == m(f)) d.pop(), f.pop(), l--;
                    else {
                        if (d[0] != f[0]) break;
                        d.shift(), f.shift(), a++
                    } for (var h = 0, p = 0, g = d[0], v = f[0], b = Math.min(g.length, v.length); h < b && g.charCodeAt(h) == v.charCodeAt(h);) ++h;
                for (var y = m(d), w = m(f), x = Math.min(y.length - (1 == d.length ? h : 0), w.length - (1 == f.length ? h : 0)); p < x && y.charCodeAt(y.length - p - 1) == w.charCodeAt(w.length - p - 1);) ++p;
                if (1 == d.length && 1 == f.length && a == o.line)
                    for (; h && h > o.ch && y.charCodeAt(y.length - p - 1) == w.charCodeAt(w.length - p - 1);) h--, p++;
                d[d.length - 1] = y.slice(0, y.length - p).replace(/^\u200b+/, ""), d[0] = d[0].slice(h).replace(/\u200b+$/, "");
                var C = R(a, h),
                    k = R(l, f.length ? m(f).length - p : 0);
                return d.length > 1 || d[0] || O(C, k) ? (zr(e.doc, d, C, k, "+input"), !0) : void 0
            }, tl.prototype.ensurePolled = function() {
                this.forceCompositionEnd()
            }, tl.prototype.reset = function() {
                this.forceCompositionEnd()
            }, tl.prototype.forceCompositionEnd = function() {
                this.composing && (clearTimeout(this.readDOMTimeout), this.composing = null, this.updateFromDOM(), this.div.blur(), this.div.focus())
            }, tl.prototype.readFromDOMSoon = function() {
                var e = this;
                null == this.readDOMTimeout && (this.readDOMTimeout = setTimeout(function() {
                    if (e.readDOMTimeout = null, e.composing) {
                        if (!e.composing.done) return;
                        e.composing = null
                    }
                    e.updateFromDOM()
                }, 80))
            }, tl.prototype.updateFromDOM = function() {
                var e = this;
                !this.cm.isReadOnly() && this.pollContent() || go(this.cm, function() {
                    return yo(e.cm)
                })
            }, tl.prototype.setUneditable = function(e) {
                e.contentEditable = "false"
            }, tl.prototype.onKeyPress = function(e) {
                0 != e.charCode && (e.preventDefault(), this.cm.isReadOnly() || mo(this.cm, Ji)(this.cm, String.fromCharCode(null == e.charCode ? e.keyCode : e.charCode), 0))
            }, tl.prototype.readOnlyChanged = function(e) {
                this.div.contentEditable = String("nocursor" != e)
            }, tl.prototype.onContextMenu = function() {}, tl.prototype.resetPosition = function() {}, tl.prototype.needsContentAttribute = !0;
            var nl = function(e) {
                this.cm = e, this.prevInput = "", this.pollingFast = !1, this.polling = new Ba, this.hasSelection = !1, this.composing = null
            };
            nl.prototype.init = function(e) {
                    function t(e) {
                        if (!Me(r, e)) {
                            if (r.somethingSelected()) Zi({
                                lineWise: !1,
                                text: r.getSelections()
                            });
                            else {
                                if (!r.options.lineWiseCopyCut) return;
                                var t = ta(r);
                                Zi({
                                    lineWise: !0,
                                    text: t.text
                                }), "cut" == e.type ? r.setSelections(t.ranges, null, Va) : (o.prevInput = "", a.value = t.text.join("\n"), Wa(a))
                            }
                            "cut" == e.type && (r.state.cutIncoming = !0)
                        }
                    }
                    var n = this,
                        o = this,
                        r = this.cm,
                        i = this.wrapper = oa(),
                        a = this.textarea = i.firstChild;
                    e.wrapper.insertBefore(i, e.wrapper.firstChild), Ma && (a.style.width = "0px"), ns(a, "input", function() {
                        ya && wa >= 9 && n.hasSelection && (n.hasSelection = null), o.poll()
                    }), ns(a, "paste", function(e) {
                        Me(r, e) || Qi(e, r) || (r.state.pasteIncoming = !0, o.fastPoll())
                    }), ns(a, "cut", t), ns(a, "copy", t), ns(e.scroller, "paste", function(t) {
                        Rt(e, t) || Me(r, t) || (r.state.pasteIncoming = !0, o.focus())
                    }), ns(e.lineSpace, "selectstart", function(t) {
                        Rt(e, t) || De(t)
                    }), ns(a, "compositionstart", function() {
                        var e = r.getCursor("from");
                        o.composing && o.composing.range.clear(), o.composing = {
                            start: e,
                            range: r.markText(e, r.getCursor("to"), {
                                className: "CodeMirror-composing"
                            })
                        }
                    }), ns(a, "compositionend", function() {
                        o.composing && (o.poll(), o.composing.range.clear(), o.composing = null)
                    })
                }, nl.prototype.prepareSelection = function() {
                    var e = this.cm,
                        t = e.display,
                        n = e.doc,
                        o = An(e);
                    if (e.options.moveInputWithCursor) {
                        var r = un(e, n.sel.primary().head, "div"),
                            i = t.wrapper.getBoundingClientRect(),
                            a = t.lineDiv.getBoundingClientRect();
                        o.teTop = Math.max(0, Math.min(t.wrapper.clientHeight - 10, r.top + a.top - i.top)), o.teLeft = Math.max(0, Math.min(t.wrapper.clientWidth - 10, r.left + a.left - i.left))
                    }
                    return o
                }, nl.prototype.showSelection = function(e) {
                    var t = this.cm,
                        o = t.display;
                    n(o.cursorDiv, e.cursors), n(o.selectionDiv, e.selection), null != e.teTop && (this.wrapper.style.top = e.teTop + "px", this.wrapper.style.left = e.teLeft + "px")
                }, nl.prototype.reset = function(e) {
                    if (!this.contextMenuPending && !this.composing) {
                        var t = this.cm;
                        if (t.somethingSelected()) {
                            this.prevInput = "";
                            var n = t.getSelection();
                            this.textarea.value = n, t.state.focused && Wa(this.textarea), ya && wa >= 9 && (this.hasSelection = n)
                        } else e || (this.prevInput = this.textarea.value = "", ya && wa >= 9 && (this.hasSelection = null))
                    }
                }, nl.prototype.getField = function() {
                    return this.textarea
                }, nl.prototype.supportsTouch = function() {
                    return !1
                }, nl.prototype.focus = function() {
                    if ("nocursor" != this.cm.options.readOnly && (!Ea || s() != this.textarea)) try {
                        this.textarea.focus()
                    } catch (e) {}
                }, nl.prototype.blur = function() {
                    this.textarea.blur()
                }, nl.prototype.resetPosition = function() {
                    this.wrapper.style.top = this.wrapper.style.left = 0
                }, nl.prototype.receivedFocus = function() {
                    this.slowPoll()
                }, nl.prototype.slowPoll = function() {
                    var e = this;
                    this.pollingFast || this.polling.set(this.cm.options.pollInterval, function() {
                        e.poll(), e.cm.state.focused && e.slowPoll()
                    })
                }, nl.prototype.fastPoll = function() {
                    function e() {
                        n.poll() || t ? (n.pollingFast = !1, n.slowPoll()) : (t = !0, n.polling.set(60, e))
                    }
                    var t = !1,
                        n = this;
                    n.pollingFast = !0, n.polling.set(20, e)
                }, nl.prototype.poll = function() {
                    var e = this,
                        t = this.cm,
                        n = this.textarea,
                        o = this.prevInput;
                    if (this.contextMenuPending || !t.state.focused || is(n) && !o && !this.composing || t.isReadOnly() || t.options.disableInput || t.state.keySeq) return !1;
                    var r = n.value;
                    if (r == o && !t.somethingSelected()) return !1;
                    if (ya && wa >= 9 && this.hasSelection === r || Fa && /[\uf700-\uf7ff]/.test(r)) return t.display.input.reset(), !1;
                    if (t.doc.sel == t.display.selForContextMenu) {
                        var i = r.charCodeAt(0);
                        if (8203 != i || o || (o = "​"), 8666 == i) return this.reset(), this.cm.execCommand("undo")
                    }
                    for (var a = 0, s = Math.min(o.length, r.length); a < s && o.charCodeAt(a) == r.charCodeAt(a);) ++a;
                    return go(t, function() {
                        Ji(t, r.slice(a), o.length - a, null, e.composing ? "*compose" : null), r.length > 1e3 || r.indexOf("\n") > -1 ? n.value = e.prevInput = "" : e.prevInput = r, e.composing && (e.composing.range.clear(), e.composing.range = t.markText(e.composing.start, t.getCursor("to"), {
                            className: "CodeMirror-composing"
                        }))
                    }), !0
                }, nl.prototype.ensurePolled = function() {
                    this.pollingFast && this.poll() && (this.pollingFast = !1)
                }, nl.prototype.onKeyPress = function() {
                    ya && wa >= 9 && (this.hasSelection = null), this.fastPoll()
                }, nl.prototype.onContextMenu = function(e) {
                    function t() {
                        if (null != a.selectionStart) {
                            var e = r.somethingSelected(),
                                t = "​" + (e ? a.value : "");
                            a.value = "⇚", a.value = t, o.prevInput = e ? "" : "​", a.selectionStart = 1, a.selectionEnd = t.length, i.selForContextMenu = r.doc.sel
                        }
                    }

                    function n() {
                        if (o.contextMenuPending = !1, o.wrapper.style.cssText = u, a.style.cssText = c, ya && wa < 9 && i.scrollbars.setScrollTop(i.scroller.scrollTop = l), null != a.selectionStart) {
                            (!ya || ya && wa < 9) && t();
                            var e = 0,
                                n = function t() {
                                    i.selForContextMenu == r.doc.sel && 0 == a.selectionStart && a.selectionEnd > 0 && "​" == o.prevInput ? mo(r, Er)(r) : e++ < 10 ? i.detectingSelectAll = setTimeout(t, 500) : (i.selForContextMenu = null, i.input.reset())
                                };
                            i.detectingSelectAll = setTimeout(n, 200)
                        }
                    }
                    var o = this,
                        r = o.cm,
                        i = r.display,
                        a = o.textarea,
                        s = Ln(r, e),
                        l = i.scroller.scrollTop;
                    if (s && !Sa) {
                        r.options.resetSelectionOnContextMenu && -1 == r.doc.sel.contains(s) && mo(r, Cr)(r.doc, $o(s), Va);
                        var c = a.style.cssText,
                            u = o.wrapper.style.cssText;
                        o.wrapper.style.cssText = "position: absolute";
                        var d = o.wrapper.getBoundingClientRect();
                        a.style.cssText = "position: absolute; width: 30px; height: 30px;\n      top: " + (e.clientY - d.top - 5) + "px; left: " + (e.clientX - d.left - 5) + "px;\n      z-index: 1000; background: " + (ya ? "rgba(255, 255, 255, .05)" : "transparent") + ";\n      outline: none; border-width: 0; outline: none; overflow: hidden; opacity: .05; filter: alpha(opacity=5);";
                        var f;
                        if (xa && (f = window.scrollY), i.input.focus(), xa && window.scrollTo(null, f), i.input.reset(), r.somethingSelected() || (a.value = o.prevInput = " "), o.contextMenuPending = !0, i.selForContextMenu = r.doc.sel, clearTimeout(i.detectingSelectAll), ya && wa >= 9 && t(), Oa) {
                            Pe(e);
                            var h = function e() {
                                Le(window, "mouseup", e), setTimeout(n, 20)
                            };
                            ns(window, "mouseup", h)
                        } else setTimeout(n, 50)
                    }
                }, nl.prototype.readOnlyChanged = function(e) {
                    e || this.reset(), this.textarea.disabled = "nocursor" == e
                }, nl.prototype.setUneditable = function() {}, nl.prototype.needsContentAttribute = !1,
                function(e) {
                    function t(t, o, r, i) {
                        e.defaults[t] = o, r && (n[t] = i ? function(e, t, n) {
                            n != Ys && r(e, t, n)
                        } : r)
                    }
                    var n = e.optionHandlers;
                    e.defineOption = t, e.Init = Ys, t("value", "", function(e, t) {
                        return e.setValue(t)
                    }, !0), t("mode", null, function(e, t) {
                        e.doc.modeOption = t, _o(e)
                    }, !0), t("indentUnit", 2, _o, !0), t("indentWithTabs", !1), t("smartIndent", !0), t("tabSize", 4, function(e) {
                        Xo(e), nn(e), yo(e)
                    }, !0), t("lineSeparator", null, function(e, t) {
                        if (e.doc.lineSep = t, t) {
                            var n = [],
                                o = e.doc.first;
                            e.doc.iter(function(e) {
                                for (var r = 0;;) {
                                    var i = e.text.indexOf(t, r);
                                    if (-1 == i) break;
                                    r = i + t.length, n.push(R(o, i))
                                }
                                o++
                            });
                            for (var r = n.length - 1; r >= 0; r--) zr(e.doc, t, n[r], R(n[r].line, n[r].ch + t.length))
                        }
                    }), t("specialChars", /[\u0000-\u001f\u007f-\u009f\u00ad\u061c\u200b-\u200f\u2028\u2029\ufeff]/g, function(e, t, n) {
                        e.state.specialChars = new RegExp(t.source + (t.test("\t") ? "" : "|\t"), "g"), n != Ys && e.refresh()
                    }), t("specialCharPlaceholder", ut, function(e) {
                        return e.refresh()
                    }, !0), t("electricChars", !0), t("inputStyle", Ea ? "contenteditable" : "textarea", function() {
                        throw new Error("inputStyle can not (yet) be changed in a running editor")
                    }, !0), t("spellcheck", !1, function(e, t) {
                        return e.getInputField().spellcheck = t
                    }, !0), t("rtlMoveVisually", !Ia), t("wholeLineUpdateBefore", !0), t("theme", "default", function(e) {
                        Ki(e), Vi(e)
                    }, !0), t("keyMap", "default", function(e, t, n) {
                        var o = fi(t),
                            r = n != Ys && fi(n);
                        r && r.detach && r.detach(e, o), o.attach && o.attach(e, r || null)
                    }), t("extraKeys", null), t("configureMouse", null), t("lineWrapping", !1, qi, !0), t("gutters", [], function(e) {
                        Oo(e.options), Vi(e)
                    }, !0), t("fixedGutter", !0, function(e, t) {
                        e.display.gutters.style.left = t ? kn(e.display) + "px" : "0", e.refresh()
                    }, !0), t("coverGutterNextToScrollbar", !1, function(e) {
                        return oo(e)
                    }, !0), t("scrollbarStyle", "native", function(e) {
                        io(e), oo(e), e.display.scrollbars.setScrollTop(e.doc.scrollTop), e.display.scrollbars.setScrollLeft(e.doc.scrollLeft)
                    }, !0), t("lineNumbers", !1, function(e) {
                        Oo(e.options), Vi(e)
                    }, !0), t("firstLineNumber", 1, Vi, !0), t("lineNumberFormatter", function(e) {
                        return e
                    }, Vi, !0), t("showCursorWhenSelecting", !1, Mn, !0), t("resetSelectionOnContextMenu", !0), t("lineWiseCopyCut", !0), t("pasteLinesPerSelection", !0), t("readOnly", !1, function(e, t) {
                        "nocursor" == t && (On(e), e.display.input.blur()), e.display.input.readOnlyChanged(t)
                    }), t("disableInput", !1, function(e, t) {
                        t || e.display.input.reset()
                    }, !0), t("dragDrop", !0, Gi), t("allowDropFileTypes", null), t("cursorBlinkRate", 530), t("cursorScrollMargin", 0), t("cursorHeight", 1, Mn, !0), t("singleCursorHeightPerLine", !0, Mn, !0), t("workTime", 100), t("workDelay", 100), t("flattenSpans", !0, Xo, !0), t("addModeClass", !1, Xo, !0), t("pollInterval", 100), t("undoDepth", 200, function(e, t) {
                        return e.doc.history.undoDepth = t
                    }), t("historyEventDelay", 1250), t("viewportMargin", 10, function(e) {
                        return e.refresh()
                    }, !0), t("maxHighlightLength", 1e4, Xo, !0), t("moveInputWithCursor", !0, function(e, t) {
                        t || e.display.input.resetPosition()
                    }), t("tabindex", null, function(e, t) {
                        return e.display.input.getField().tabIndex = t || ""
                    }), t("autofocus", null), t("direction", "ltr", function(e, t) {
                        return e.doc.setDirection(t)
                    }, !0)
                }(_i),
                function(e) {
                    var t = e.optionHandlers,
                        n = e.helpers = {};
                    e.prototype = {
                        constructor: e,
                        focus: function() {
                            window.focus(), this.display.input.focus()
                        },
                        setOption: function(e, n) {
                            var o = this.options,
                                r = o[e];
                            o[e] == n && "mode" != e || (o[e] = n, t.hasOwnProperty(e) && mo(this, t[e])(this, n, r), Ne(this, "optionChange", this, e))
                        },
                        getOption: function(e) {
                            return this.options[e]
                        },
                        getDoc: function() {
                            return this.doc
                        },
                        addKeyMap: function(e, t) {
                            this.state.keyMaps[t ? "push" : "unshift"](fi(e))
                        },
                        removeKeyMap: function(e) {
                            for (var t = this.state.keyMaps, n = 0; n < t.length; ++n)
                                if (t[n] == e || t[n].name == e) return t.splice(n, 1), !0
                        },
                        addOverlay: vo(function(t, n) {
                            var o = t.token ? t : e.getMode(this.options, t);
                            if (o.startState) throw new Error("Overlays may not be stateful.");
                            b(this.state.overlays, {
                                mode: o,
                                modeSpec: t,
                                opaque: n && n.opaque,
                                priority: n && n.priority || 0
                            }, function(e) {
                                return e.priority
                            }), this.state.modeGen++, yo(this)
                        }),
                        removeOverlay: vo(function(e) {
                            for (var t = this, n = this.state.overlays, o = 0; o < n.length; ++o) {
                                var r = n[o].modeSpec;
                                if (r == e || "string" == typeof e && r.name == e) return n.splice(o, 1), t.state.modeGen++, void yo(t)
                            }
                        }),
                        indentLine: vo(function(e, t, n) {
                            "string" != typeof t && "number" != typeof t && (t = null == t ? this.options.smartIndent ? "smart" : "prev" : t ? "add" : "subtract"), H(this.doc, e) && Yi(this, e, t, n)
                        }),
                        indentSelection: vo(function(e) {
                            for (var t = this, n = this.doc.sel.ranges, o = -1, r = 0; r < n.length; r++) {
                                var i = n[r];
                                if (i.empty()) i.head.line > o && (Yi(t, i.head.line, e, !0), o = i.head.line, r == t.doc.sel.primIndex && _n(t));
                                else {
                                    var a = i.from(),
                                        s = i.to(),
                                        l = Math.max(o, a.line);
                                    o = Math.min(t.lastLine(), s.line - (s.ch ? 0 : 1)) + 1;
                                    for (var c = l; c < o; ++c) Yi(t, c, e);
                                    var u = t.doc.sel.ranges;
                                    0 == a.ch && n.length == u.length && u[r].from().ch > 0 && br(t.doc, r, new Es(a, u[r].to()), Va)
                                }
                            }
                        }),
                        getTokenAt: function(e, t) {
                            return tt(this, e, t)
                        },
                        getLineTokens: function(e, t) {
                            return tt(this, R(e), t, !0)
                        },
                        getTokenTypeAt: function(e) {
                            e = j(this.doc, e);
                            var t, n = Ye(this, M(this.doc, e.line)),
                                o = 0,
                                r = (n.length - 1) / 2,
                                i = e.ch;
                            if (0 == i) t = n[2];
                            else
                                for (;;) {
                                    var a = o + r >> 1;
                                    if ((a ? n[2 * a - 1] : 0) >= i) r = a;
                                    else {
                                        if (!(n[2 * a + 1] < i)) {
                                            t = n[2 * a + 2];
                                            break
                                        }
                                        o = a + 1
                                    }
                                }
                            var s = t ? t.indexOf("overlay ") : -1;
                            return s < 0 ? t : 0 == s ? null : t.slice(0, s - 1)
                        },
                        getModeAt: function(t) {
                            var n = this.doc.mode;
                            return n.innerMode ? e.innerMode(n, this.getTokenAt(t).state).mode : n
                        },
                        getHelper: function(e, t) {
                            return this.getHelpers(e, t)[0]
                        },
                        getHelpers: function(e, t) {
                            var o = this,
                                r = [];
                            if (!n.hasOwnProperty(t)) return r;
                            var i = n[t],
                                a = this.getModeAt(e);
                            if ("string" == typeof a[t]) i[a[t]] && r.push(i[a[t]]);
                            else if (a[t])
                                for (var s = 0; s < a[t].length; s++) {
                                    var l = i[a[t][s]];
                                    l && r.push(l)
                                } else a.helperType && i[a.helperType] ? r.push(i[a.helperType]) : i[a.name] && r.push(i[a.name]);
                            for (var c = 0; c < i._global.length; c++) {
                                var u = i._global[c];
                                u.pred(a, o) && -1 == h(r, u.val) && r.push(u.val)
                            }
                            return r
                        },
                        getStateAfter: function(e, t) {
                            var n = this.doc;
                            return e = $(n, null == e ? n.first + n.size - 1 : e), Ze(this, e + 1, t).state
                        },
                        cursorCoords: function(e, t) {
                            var n, o = this.doc.sel.primary();
                            return n = null == e ? o.head : "object" == (void 0 === e ? "undefined" : i(e)) ? j(this.doc, e) : e ? o.from() : o.to(), un(this, n, t || "page")
                        },
                        charCoords: function(e, t) {
                            return cn(this, j(this.doc, e), t || "page")
                        },
                        coordsChar: function(e, t) {
                            return e = ln(this, e, t || "page"), hn(this, e.left, e.top)
                        },
                        lineAtHeight: function(e, t) {
                            return e = ln(this, {
                                top: e,
                                left: 0
                            }, t || "page").top, I(this.doc, e + this.display.viewOffset)
                        },
                        heightAtLine: function(e, t, n) {
                            var o, r = !1;
                            if ("number" == typeof e) {
                                var i = this.doc.first + this.doc.size - 1;
                                e < this.doc.first ? e = this.doc.first : e > i && (e = i, r = !0), o = M(this.doc, e)
                            } else o = e;
                            return sn(this, o, {
                                top: 0,
                                left: 0
                            }, t || "page", n || r).top + (r ? this.doc.height - ye(o) : 0)
                        },
                        defaultTextHeight: function() {
                            return wn(this.display)
                        },
                        defaultCharWidth: function() {
                            return xn(this.display)
                        },
                        getViewport: function() {
                            return {
                                from: this.display.viewFrom,
                                to: this.display.viewTo
                            }
                        },
                        addWidget: function(e, t, n, o, r) {
                            var i = this.display;
                            e = un(this, j(this.doc, e));
                            var a = e.bottom,
                                s = e.left;
                            if (t.style.position = "absolute", t.setAttribute("cm-ignore-events", "true"), this.display.input.setUneditable(t), i.sizer.appendChild(t), "over" == o) a = e.top;
                            else if ("above" == o || "near" == o) {
                                var l = Math.max(i.wrapper.clientHeight, this.doc.height),
                                    c = Math.max(i.sizer.clientWidth, i.lineSpace.clientWidth);
                                ("above" == o || e.bottom + t.offsetHeight > l) && e.top > t.offsetHeight ? a = e.top - t.offsetHeight : e.bottom + t.offsetHeight <= l && (a = e.bottom), s + t.offsetWidth > c && (s = c - t.offsetWidth)
                            }
                            t.style.top = a + "px", t.style.left = t.style.right = "", "right" == r ? (s = i.sizer.clientWidth - t.offsetWidth, t.style.right = "0px") : ("left" == r ? s = 0 : "middle" == r && (s = (i.sizer.clientWidth - t.offsetWidth) / 2), t.style.left = s + "px"), n && Vn(this, {
                                left: s,
                                top: a,
                                right: s + t.offsetWidth,
                                bottom: a + t.offsetHeight
                            })
                        },
                        triggerOnKeyDown: vo(Ni),
                        triggerOnKeyPress: vo(Ei),
                        triggerOnKeyUp: Ai,
                        triggerOnMouseDown: vo(Di),
                        execCommand: function(e) {
                            if (Ks.hasOwnProperty(e)) return Ks[e].call(null, this)
                        },
                        triggerElectric: vo(function(e) {
                            ea(this, e)
                        }),
                        findPosH: function(e, t, n, o) {
                            var r = this,
                                i = 1;
                            t < 0 && (i = -1, t = -t);
                            for (var a = j(this.doc, e), s = 0; s < t && (a = ra(r.doc, a, i, n, o), !a.hitSide); ++s);
                            return a
                        },
                        moveH: vo(function(e, t) {
                            var n = this;
                            this.extendSelectionsBy(function(o) {
                                return n.display.shift || n.doc.extend || o.empty() ? ra(n.doc, o.head, e, t, n.options.rtlMoveVisually) : e < 0 ? o.from() : o.to()
                            }, qa)
                        }),
                        deleteH: vo(function(e, t) {
                            var n = this.doc.sel,
                                o = this.doc;
                            n.somethingSelected() ? o.replaceSelection("", null, "+delete") : hi(this, function(n) {
                                var r = ra(o, n.head, e, t, !1);
                                return e < 0 ? {
                                    from: r,
                                    to: n.head
                                } : {
                                    from: n.head,
                                    to: r
                                }
                            })
                        }),
                        findPosV: function(e, t, n, o) {
                            var r = this,
                                i = 1,
                                a = o;
                            t < 0 && (i = -1, t = -t);
                            for (var s = j(this.doc, e), l = 0; l < t; ++l) {
                                var c = un(r, s, "div");
                                if (null == a ? a = c.left : c.left = a, s = ia(r, c, i, n), s.hitSide) break
                            }
                            return s
                        },
                        moveV: vo(function(e, t) {
                            var n = this,
                                o = this.doc,
                                r = [],
                                i = !this.display.shift && !o.extend && o.sel.somethingSelected();
                            if (o.extendSelectionsBy(function(a) {
                                    if (i) return e < 0 ? a.from() : a.to();
                                    var s = un(n, a.head, "div");
                                    null != a.goalColumn && (s.left = a.goalColumn), r.push(s.left);
                                    var l = ia(n, s, e, t);
                                    return "page" == t && a == o.sel.primary() && qn(n, cn(n, l, "div").top - s.top), l
                                }, qa), r.length)
                                for (var a = 0; a < o.sel.ranges.length; a++) o.sel.ranges[a].goalColumn = r[a]
                        }),
                        findWordAt: function(e) {
                            var t = this.doc,
                                n = M(t, e.line).text,
                                o = e.ch,
                                r = e.ch;
                            if (n) {
                                var i = this.getHelper(e, "wordChars");
                                "before" != e.sticky && r != n.length || !o ? ++r : --o;
                                for (var a = n.charAt(o), s = C(a, i) ? function(e) {
                                        return C(e, i)
                                    } : /\s/.test(a) ? function(e) {
                                        return /\s/.test(e)
                                    } : function(e) {
                                        return !/\s/.test(e) && !C(e)
                                    }; o > 0 && s(n.charAt(o - 1));) --o;
                                for (; r < n.length && s(n.charAt(r));) ++r
                            }
                            return new Es(R(e.line, o), R(e.line, r))
                        },
                        toggleOverwrite: function(e) {
                            null != e && e == this.state.overwrite || ((this.state.overwrite = !this.state.overwrite) ? l(this.display.cursorDiv, "CodeMirror-overwrite") : za(this.display.cursorDiv, "CodeMirror-overwrite"), Ne(this, "overwriteToggle", this, this.state.overwrite))
                        },
                        hasFocus: function() {
                            return this.display.input.getField() == s()
                        },
                        isReadOnly: function() {
                            return !(!this.options.readOnly && !this.doc.cantEdit)
                        },
                        scrollTo: vo(function(e, t) {
                            Xn(this, e, t)
                        }),
                        getScrollInfo: function() {
                            var e = this.display.scroller;
                            return {
                                left: e.scrollLeft,
                                top: e.scrollTop,
                                height: e.scrollHeight - Bt(this) - this.display.barHeight,
                                width: e.scrollWidth - Bt(this) - this.display.barWidth,
                                clientHeight: $t(this),
                                clientWidth: Ut(this)
                            }
                        },
                        scrollIntoView: vo(function(e, t) {
                            null == e ? (e = {
                                from: this.doc.sel.primary().head,
                                to: null
                            }, null == t && (t = this.options.cursorScrollMargin)) : "number" == typeof e ? e = {
                                from: R(e, 0),
                                to: null
                            } : null == e.from && (e = {
                                from: e,
                                to: null
                            }), e.to || (e.to = e.from), e.margin = t || 0, null != e.from.line ? Yn(this, e) : Jn(this, e.from, e.to, e.margin)
                        }),
                        setSize: vo(function(e, t) {
                            var n = this,
                                o = function(e) {
                                    return "number" == typeof e || /^\d+$/.test(String(e)) ? e + "px" : e
                                };
                            null != e && (this.display.wrapper.style.width = o(e)), null != t && (this.display.wrapper.style.height = o(t)), this.options.lineWrapping && tn(this);
                            var r = this.display.viewFrom;
                            this.doc.iter(r, this.display.viewTo, function(e) {
                                if (e.widgets)
                                    for (var t = 0; t < e.widgets.length; t++)
                                        if (e.widgets[t].noHScroll) {
                                            wo(n, r, "widget");
                                            break
                                        }++ r
                            }), this.curOp.forceUpdate = !0, Ne(this, "refresh", this)
                        }),
                        operation: function(e) {
                            return go(this, e)
                        },
                        startOperation: function() {
                            return ao(this)
                        },
                        endOperation: function() {
                            return so(this)
                        },
                        refresh: vo(function() {
                            var e = this.display.cachedTextHeight;
                            yo(this), this.curOp.forceUpdate = !0, nn(this), Xn(this, this.doc.scrollLeft, this.doc.scrollTop), Ho(this), (null == e || Math.abs(e - wn(this.display)) > .5) && Tn(this), Ne(this, "refresh", this)
                        }),
                        swapDoc: vo(function(e) {
                            var t = this.doc;
                            return t.cm = null, Qo(this, e), nn(this), this.display.input.reset(), Xn(this, e.scrollLeft, e.scrollTop), this.curOp.forceScroll = !0, xt(this, "swapDoc", this, t), t
                        }),
                        getInputField: function() {
                            return this.display.input.getField()
                        },
                        getWrapperElement: function() {
                            return this.display.wrapper
                        },
                        getScrollerElement: function() {
                            return this.display.scroller
                        },
                        getGutterElement: function() {
                            return this.display.gutters
                        }
                    }, Fe(e), e.registerHelper = function(t, o, r) {
                        n.hasOwnProperty(t) || (n[t] = e[t] = {
                            _global: []
                        }), n[t][o] = r
                    }, e.registerGlobalHelper = function(t, o, r, i) {
                        e.registerHelper(t, o, i), n[t]._global.push({
                            pred: r,
                            val: i
                        })
                    }
                }(_i);
            var ol = "iter insert remove copy getEditor constructor".split(" ");
            for (var rl in Rs.prototype) Rs.prototype.hasOwnProperty(rl) && h(ol, rl) < 0 && (_i.prototype[rl] = function(e) {
                return function() {
                    return e.apply(this.doc, arguments)
                }
            }(Rs.prototype[rl]));
            return Fe(Rs), _i.inputStyles = {
                    textarea: nl,
                    contenteditable: tl
                }, _i.defineMode = function(e) {
                    _i.defaults.mode || "null" == e || (_i.defaults.mode = e), Ue.apply(this, arguments)
                }, _i.defineMIME = $e, _i.defineMode("null", function() {
                    return {
                        token: function(e) {
                            return e.skipToEnd()
                        }
                    }
                }), _i.defineMIME("text/plain", "null"), _i.defineExtension = function(e, t) {
                    _i.prototype[e] = t
                }, _i.defineDocExtension = function(e, t) {
                    Rs.prototype[e] = t
                }, _i.fromTextArea = fa,
                function(e) {
                    e.off = Le, e.on = ns, e.wheelEventPixels = Wo, e.Doc = Rs, e.splitLines = rs, e.countColumn = f, e.findColumn = p, e.isWordChar = x, e.Pass = Ka, e.signal = Ne, e.Line = gs, e.changeEnd = jo, e.scrollbarModel = Ss, e.Pos = R, e.cmpPos = O, e.modes = ls, e.mimeModes = cs, e.resolveMode = je, e.getMode = Ke, e.modeExtensions = us, e.extendMode = Ve, e.copyState = Ge, e.startState = _e, e.innerMode = qe, e.commands = Ks, e.keyMap = js, e.keyName = di, e.isModifierKey = ci, e.lookupKey = li, e.normalizeKeyMap = si, e.StringStream = ds, e.SharedTextMarker = Hs, e.TextMarker = Is, e.LineWidget = Fs, e.e_preventDefault = De, e.e_stopPropagation = Ie, e.e_stop = Pe, e.addClass = l, e.contains = a, e.rmClass = za, e.keyNames = Ws
                }(_i), _i.version = "5.32.0", _i
        })
    },
    223: function(e, t, n) {
        e.exports = "assets/files/summernote.eot"
    },
    224: function(e, t, n) {
        e.exports = "assets/files/summernote.eot"
    },
    225: function(e, t, n) {
        e.exports = "assets/files/summernote.ttf"
    },
    226: function(e, t, n) {
        e.exports = "assets/files/summernote.woff"
    },
    363: function(e, t) {
        $(document).ready(function() {
            "use strict";
            $("#summernote").summernote({
                callbacks: {
                    onInit: function() {
                        $("#summernote .dropdown-menu").addClass("-dark")
                    }
                }
            })
        })
    },
    458: function(e, t, n) {
        n(146), n(168), n(363)
    }
}, [458]);