webpackJsonp([4], {
    167: function(t, e, i) {
        var o, r, n, a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        };
        ! function(s, l, h) {
            ! function(a) {
                r = [i(8)], o = a, void 0 !== (n = "function" == typeof o ? o.apply(e, r) : o) && (t.exports = n)
            }(function(t) {
                "use strict";
                var e, i, o, r, n, h, c, p, d, u, g, f, m, v, x, b, y, w, k, C, S, M, T, R, A, W, I, P, _, z, F, O = {},
                    H = 0;
                e = function() {
                    return {
                        common: {
                            type: "line",
                            lineColor: "#00f",
                            fillColor: "#cdf",
                            defaultPixelsPerValue: 3,
                            width: "auto",
                            height: "auto",
                            composite: !1,
                            tagValuesAttribute: "values",
                            tagOptionsPrefix: "spark",
                            enableTagOptions: !1,
                            enableHighlight: !0,
                            highlightLighten: 1.4,
                            tooltipSkipNull: !0,
                            tooltipPrefix: "",
                            tooltipSuffix: "",
                            disableHiddenCheck: !1,
                            numberFormatter: !1,
                            numberDigitGroupCount: 3,
                            numberDigitGroupSep: ",",
                            numberDecimalMark: ".",
                            disableTooltips: !1,
                            disableInteraction: !1
                        },
                        line: {
                            spotColor: "#f80",
                            highlightSpotColor: "#5f5",
                            highlightLineColor: "#f22",
                            spotRadius: 1.5,
                            minSpotColor: "#f80",
                            maxSpotColor: "#f80",
                            lineWidth: 1,
                            normalRangeMin: void 0,
                            normalRangeMax: void 0,
                            normalRangeColor: "#ccc",
                            drawNormalOnTop: !1,
                            chartRangeMin: void 0,
                            chartRangeMax: void 0,
                            chartRangeMinX: void 0,
                            chartRangeMaxX: void 0,
                            tooltipFormat: new o('<span style="color: {{color}}">&#9679;</span> {{prefix}}{{y}}{{suffix}}')
                        },
                        bar: {
                            barColor: "#3366cc",
                            negBarColor: "#f44",
                            stackedBarColor: ["#3366cc", "#dc3912", "#ff9900", "#109618", "#66aa00", "#dd4477", "#0099c6", "#990099"],
                            zeroColor: void 0,
                            nullColor: void 0,
                            zeroAxis: !0,
                            barWidth: 4,
                            barSpacing: 1,
                            chartRangeMax: void 0,
                            chartRangeMin: void 0,
                            chartRangeClip: !1,
                            colorMap: void 0,
                            tooltipFormat: new o('<span style="color: {{color}}">&#9679;</span> {{prefix}}{{value}}{{suffix}}')
                        },
                        tristate: {
                            barWidth: 4,
                            barSpacing: 1,
                            posBarColor: "#6f6",
                            negBarColor: "#f44",
                            zeroBarColor: "#999",
                            colorMap: {},
                            tooltipFormat: new o('<span style="color: {{color}}">&#9679;</span> {{value:map}}'),
                            tooltipValueLookups: {
                                map: {
                                    "-1": "Loss",
                                    0: "Draw",
                                    1: "Win"
                                }
                            }
                        },
                        discrete: {
                            lineHeight: "auto",
                            thresholdColor: void 0,
                            thresholdValue: 0,
                            chartRangeMax: void 0,
                            chartRangeMin: void 0,
                            chartRangeClip: !1,
                            tooltipFormat: new o("{{prefix}}{{value}}{{suffix}}")
                        },
                        bullet: {
                            targetColor: "#f33",
                            targetWidth: 3,
                            performanceColor: "#33f",
                            rangeColors: ["#d3dafe", "#a8b6ff", "#7f94ff"],
                            base: void 0,
                            tooltipFormat: new o("{{fieldkey:fields}} - {{value}}"),
                            tooltipValueLookups: {
                                fields: {
                                    r: "Range",
                                    p: "Performance",
                                    t: "Target"
                                }
                            }
                        },
                        pie: {
                            offset: 0,
                            sliceColors: ["#3366cc", "#dc3912", "#ff9900", "#109618", "#66aa00", "#dd4477", "#0099c6", "#990099"],
                            borderWidth: 0,
                            borderColor: "#000",
                            tooltipFormat: new o('<span style="color: {{color}}">&#9679;</span> {{value}} ({{percent.1}}%)')
                        },
                        box: {
                            raw: !1,
                            boxLineColor: "#000",
                            boxFillColor: "#cdf",
                            whiskerColor: "#000",
                            outlierLineColor: "#333",
                            outlierFillColor: "#fff",
                            medianColor: "#f00",
                            showOutliers: !0,
                            outlierIQR: 1.5,
                            spotRadius: 1.5,
                            target: void 0,
                            targetColor: "#4a2",
                            chartRangeMax: void 0,
                            chartRangeMin: void 0,
                            tooltipFormat: new o("{{field:fields}}: {{value}}"),
                            tooltipFormatFieldlistKey: "field",
                            tooltipValueLookups: {
                                fields: {
                                    lq: "Lower Quartile",
                                    med: "Median",
                                    uq: "Upper Quartile",
                                    lo: "Left Outlier",
                                    ro: "Right Outlier",
                                    lw: "Left Whisker",
                                    rw: "Right Whisker"
                                }
                            }
                        }
                    }
                }, A = '.jqstooltip { position: absolute;left: 0px;top: 0px;visibility: hidden;background: rgb(0, 0, 0) transparent;background-color: rgba(0,0,0,0.6);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=#99000000, endColorstr=#99000000);-ms-filter: "progid:DXImageTransform.Microsoft.gradient(startColorstr=#99000000, endColorstr=#99000000)";color: white;font: 10px arial, san serif;text-align: left;white-space: nowrap;padding: 5px;border: 1px solid white;z-index: 10000;}.jqsfield { color: white;font: 10px arial, san serif;text-align: left;}', i = function() {
                    var e, i;
                    return e = function() {
                        this.init.apply(this, arguments)
                    }, arguments.length > 1 ? (arguments[0] ? (e.prototype = t.extend(new arguments[0], arguments[arguments.length - 1]), e._super = arguments[0].prototype) : e.prototype = arguments[arguments.length - 1], arguments.length > 2 && (i = Array.prototype.slice.call(arguments, 1, -1), i.unshift(e.prototype), t.extend.apply(t, i))) : e.prototype = arguments[0], e.prototype.cls = e, e
                }, t.SPFormatClass = o = i({
                    fre: /\{\{([\w.]+?)(:(.+?))?\}\}/g,
                    precre: /(\w+)\.(\d+)/,
                    init: function(t, e) {
                        this.format = t, this.fclass = e
                    },
                    render: function(t, e, i) {
                        var o, r, n, a, s, l = this,
                            h = t;
                        return this.format.replace(this.fre, function() {
                            var t;
                            return r = arguments[1], n = arguments[3], o = l.precre.exec(r), o ? (s = o[2], r = o[1]) : s = !1, void 0 === (a = h[r]) ? "" : n && e && e[n] ? (t = e[n], t.get ? e[n].get(a) || a : e[n][a] || a) : (d(a) && (a = i.get("numberFormatter") ? i.get("numberFormatter")(a) : m(a, s, i.get("numberDigitGroupCount"), i.get("numberDigitGroupSep"), i.get("numberDecimalMark"))), a)
                        })
                    }
                }), t.spformat = function(t, e) {
                    return new o(t, e)
                }, r = function(t, e, i) {
                    return t < e ? e : t > i ? i : t
                }, n = function(t, e) {
                    var i;
                    return 2 === e ? (i = l.floor(t.length / 2), t.length % 2 ? t[i] : (t[i - 1] + t[i]) / 2) : t.length % 2 ? (i = (t.length * e + e) / 4, i % 1 ? (t[l.floor(i)] + t[l.floor(i) - 1]) / 2 : t[i - 1]) : (i = (t.length * e + 2) / 4, i % 1 ? (t[l.floor(i)] + t[l.floor(i) - 1]) / 2 : t[i - 1])
                }, h = function(t) {
                    var e;
                    switch (t) {
                        case "undefined":
                            t = void 0;
                            break;
                        case "null":
                            t = null;
                            break;
                        case "true":
                            t = !0;
                            break;
                        case "false":
                            t = !1;
                            break;
                        default:
                            e = parseFloat(t), t == e && (t = e)
                    }
                    return t
                }, c = function(t) {
                    var e, i = [];
                    for (e = t.length; e--;) i[e] = h(t[e]);
                    return i
                }, p = function(t, e) {
                    var i, o, r = [];
                    for (i = 0, o = t.length; i < o; i++) t[i] !== e && r.push(t[i]);
                    return r
                }, d = function(t) {
                    return !isNaN(parseFloat(t)) && isFinite(t)
                }, m = function(e, i, o, r, n) {
                    var a, s;
                    for (e = (!1 === i ? parseFloat(e).toString() : e.toFixed(i)).split(""), a = (a = t.inArray(".", e)) < 0 ? e.length : a, a < e.length && (e[a] = n), s = a - o; s > 0; s -= o) e.splice(s, 0, r);
                    return e.join("")
                }, u = function(t, e, i) {
                    var o;
                    for (o = e.length; o--;)
                        if ((!i || null !== e[o]) && e[o] !== t) return !1;
                    return !0
                }, f = function(e) {
                    return t.isArray(e) ? e : [e]
                }, g = function(t) {
                    var e;
                    s.createStyleSheet ? s.createStyleSheet().cssText = t : (e = s.createElement("style"), e.type = "text/css", s.getElementsByTagName("head")[0].appendChild(e), e["string" == typeof s.body.style.WebkitAppearance ? "innerText" : "innerHTML"] = t)
                }, t.fn.simpledraw = function(e, i, o, r) {
                    var n, a;
                    if (o && (n = this.data("_jqs_vcanvas"))) return n;
                    if (!1 === t.fn.sparkline.canvas) return !1;
                    if (void 0 === t.fn.sparkline.canvas) {
                        var l = s.createElement("canvas");
                        if (l.getContext && l.getContext("2d")) t.fn.sparkline.canvas = function(t, e, i, o) {
                            return new _(t, e, i, o)
                        };
                        else {
                            if (!s.namespaces || s.namespaces.v) return t.fn.sparkline.canvas = !1, !1;
                            s.namespaces.add("v", "urn:schemas-microsoft-com:vml", "#default#VML"), t.fn.sparkline.canvas = function(t, e, i, o) {
                                return new z(t, e, i)
                            }
                        }
                    }
                    return void 0 === e && (e = t(this).innerWidth()), void 0 === i && (i = t(this).innerHeight()), n = t.fn.sparkline.canvas(e, i, this, r), a = t(this).data("_jqs_mhandler"), a && a.registerCanvas(n), n
                }, t.fn.cleardraw = function() {
                    var t = this.data("_jqs_vcanvas");
                    t && t.reset()
                }, t.RangeMapClass = v = i({
                    init: function(t) {
                        var e, i, o = [];
                        for (e in t) t.hasOwnProperty(e) && "string" == typeof e && e.indexOf(":") > -1 && (i = e.split(":"), i[0] = 0 === i[0].length ? -1 / 0 : parseFloat(i[0]), i[1] = 0 === i[1].length ? 1 / 0 : parseFloat(i[1]), i[2] = t[e], o.push(i));
                        this.map = t, this.rangelist = o || !1
                    },
                    get: function(t) {
                        var e, i, o, r = this.rangelist;
                        if (void 0 !== (o = this.map[t])) return o;
                        if (r)
                            for (e = r.length; e--;)
                                if (i = r[e], i[0] <= t && i[1] >= t) return i[2]
                    }
                }), t.range_map = function(t) {
                    return new v(t)
                }, x = i({
                    init: function(e, i) {
                        var o = t(e);
                        this.$el = o, this.options = i, this.currentPageX = 0, this.currentPageY = 0, this.el = e, this.splist = [], this.tooltip = null, this.over = !1, this.displayTooltips = !i.get("disableTooltips"), this.highlightEnabled = !i.get("disableHighlight")
                    },
                    registerSparkline: function(t) {
                        this.splist.push(t), this.over && this.updateDisplay()
                    },
                    registerCanvas: function(e) {
                        var i = t(e.canvas);
                        this.canvas = e, this.$canvas = i, i.mouseenter(t.proxy(this.mouseenter, this)), i.mouseleave(t.proxy(this.mouseleave, this)), i.click(t.proxy(this.mouseclick, this))
                    },
                    reset: function(t) {
                        this.splist = [], this.tooltip && t && (this.tooltip.remove(), this.tooltip = void 0)
                    },
                    mouseclick: function(e) {
                        var i = t.Event("sparklineClick");
                        i.originalEvent = e, i.sparklines = this.splist, this.$el.trigger(i)
                    },
                    mouseenter: function(e) {
                        t(s.body).unbind("mousemove.jqs"), t(s.body).bind("mousemove.jqs", t.proxy(this.mousemove, this)), this.over = !0, this.currentPageX = e.pageX, this.currentPageY = e.pageY, this.currentEl = e.target, !this.tooltip && this.displayTooltips && (this.tooltip = new b(this.options), this.tooltip.updatePosition(e.pageX, e.pageY)), this.updateDisplay()
                    },
                    mouseleave: function() {
                        t(s.body).unbind("mousemove.jqs");
                        var e, i, o = this.splist,
                            r = o.length,
                            n = !1;
                        for (this.over = !1, this.currentEl = null, this.tooltip && (this.tooltip.remove(), this.tooltip = null), i = 0; i < r; i++) e = o[i], e.clearRegionHighlight() && (n = !0);
                        n && this.canvas.render()
                    },
                    mousemove: function(t) {
                        this.currentPageX = t.pageX, this.currentPageY = t.pageY, this.currentEl = t.target, this.tooltip && this.tooltip.updatePosition(t.pageX, t.pageY), this.updateDisplay()
                    },
                    updateDisplay: function() {
                        var e, i, o, r, n, a = this.splist,
                            s = a.length,
                            l = !1,
                            h = this.$canvas.offset(),
                            c = this.currentPageX - h.left,
                            p = this.currentPageY - h.top;
                        if (this.over) {
                            for (o = 0; o < s; o++) i = a[o], (r = i.setRegionHighlight(this.currentEl, c, p)) && (l = !0);
                            if (l) {
                                if (n = t.Event("sparklineRegionChange"), n.sparklines = this.splist, this.$el.trigger(n), this.tooltip) {
                                    for (e = "", o = 0; o < s; o++) i = a[o], e += i.getCurrentRegionTooltip();
                                    this.tooltip.setContent(e)
                                }
                                this.disableHighlight || this.canvas.render()
                            }
                            null === r && this.mouseleave()
                        }
                    }
                }), b = i({
                    sizeStyle: "position: static !important;display: block !important;visibility: hidden !important;float: left !important;",
                    init: function(e) {
                        var i, o = e.get("tooltipClassname", "jqstooltip"),
                            r = this.sizeStyle;
                        this.container = e.get("tooltipContainer") || s.body, this.tooltipOffsetX = e.get("tooltipOffsetX", 10), this.tooltipOffsetY = e.get("tooltipOffsetY", 12), t("#jqssizetip").remove(), t("#jqstooltip").remove(), this.sizetip = t("<div/>", {
                            id: "jqssizetip",
                            style: r,
                            class: o
                        }), this.tooltip = t("<div/>", {
                            id: "jqstooltip",
                            class: o
                        }).appendTo(this.container), i = this.tooltip.offset(), this.offsetLeft = i.left, this.offsetTop = i.top, this.hidden = !0, t(window).unbind("resize.jqs scroll.jqs"), t(window).bind("resize.jqs scroll.jqs", t.proxy(this.updateWindowDims, this)), this.updateWindowDims()
                    },
                    updateWindowDims: function() {
                        this.scrollTop = t(window).scrollTop(), this.scrollLeft = t(window).scrollLeft(), this.scrollRight = this.scrollLeft + t(window).width(), this.updatePosition()
                    },
                    getSize: function(t) {
                        this.sizetip.html(t).appendTo(this.container), this.width = this.sizetip.width() + 1, this.height = this.sizetip.height(), this.sizetip.remove()
                    },
                    setContent: function(t) {
                        if (!t) return this.tooltip.css("visibility", "hidden"), void(this.hidden = !0);
                        this.getSize(t), this.tooltip.html(t).css({
                            width: this.width,
                            height: this.height,
                            visibility: "visible"
                        }), this.hidden && (this.hidden = !1, this.updatePosition())
                    },
                    updatePosition: function(t, e) {
                        if (void 0 === t) {
                            if (void 0 === this.mousex) return;
                            t = this.mousex - this.offsetLeft, e = this.mousey - this.offsetTop
                        } else this.mousex = t -= this.offsetLeft, this.mousey = e -= this.offsetTop;
                        this.height && this.width && !this.hidden && (e -= this.height + this.tooltipOffsetY, t += this.tooltipOffsetX, e < this.scrollTop && (e = this.scrollTop), t < this.scrollLeft ? t = this.scrollLeft : t + this.width > this.scrollRight && (t = this.scrollRight - this.width), this.tooltip.css({
                            left: t,
                            top: e
                        }))
                    },
                    remove: function() {
                        this.tooltip.remove(), this.sizetip.remove(), this.sizetip = this.tooltip = void 0, t(window).unbind("resize.jqs scroll.jqs")
                    }
                }), W = function() {
                    g(A)
                }, t(W), F = [], t.fn.sparkline = function(e, i) {
                    return this.each(function() {
                        var o, r, n = new t.fn.sparkline.options(this, i),
                            a = t(this);
                        if (o = function() {
                                var i, o, r, l, h, c, p;
                                if ("html" === e || void 0 === e ? (p = this.getAttribute(n.get("tagValuesAttribute")), void 0 !== p && null !== p || (p = a.html()), i = p.replace(/(^\s*<!--)|(-->\s*$)|\s+/g, "").split(",")) : i = e, o = "auto" === n.get("width") ? i.length * n.get("defaultPixelsPerValue") : n.get("width"), "auto" === n.get("height") ? n.get("composite") && t.data(this, "_jqs_vcanvas") || (l = s.createElement("span"), l.innerHTML = "a", a.html(l), r = t(l).innerHeight() || t(l).height(), t(l).remove(), l = null) : r = n.get("height"), n.get("disableInteraction") ? h = !1 : (h = t.data(this, "_jqs_mhandler"), h ? n.get("composite") || h.reset() : (h = new x(this, n), t.data(this, "_jqs_mhandler", h))), n.get("composite") && !t.data(this, "_jqs_vcanvas")) return void(t.data(this, "_jqs_errnotify") || (alert("Attempted to attach a composite sparkline to an element with no existing sparkline"), t.data(this, "_jqs_errnotify", !0)));
                                c = new(t.fn.sparkline[n.get("type")])(this, i, n, o, r), c.render(), h && h.registerSparkline(c)
                            }, t(this).html() && !n.get("disableHiddenCheck") && t(this).is(":hidden") || !t(this).parents("body").length) {
                            if (!n.get("composite") && t.data(this, "_jqs_pending"))
                                for (r = F.length; r; r--) F[r - 1][0] == this && F.splice(r - 1, 1);
                            F.push([this, o]), t.data(this, "_jqs_pending", !0)
                        } else o.call(this)
                    })
                }, t.fn.sparkline.defaults = e(), t.sparkline_display_visible = function() {
                    var e, i, o, r = [];
                    for (i = 0, o = F.length; i < o; i++) e = F[i][0], t(e).is(":visible") && !t(e).parents().is(":hidden") ? (F[i][1].call(e), t.data(F[i][0], "_jqs_pending", !1), r.push(i)) : t(e).closest("html").length || t.data(e, "_jqs_pending") || (t.data(F[i][0], "_jqs_pending", !1), r.push(i));
                    for (i = r.length; i; i--) F.splice(r[i - 1], 1)
                }, t.fn.sparkline.options = i({
                    init: function(e, i) {
                        var o, r, n, a;
                        this.userOptions = i = i || {}, this.tag = e, this.tagValCache = {}, r = t.fn.sparkline.defaults, n = r.common, this.tagOptionsPrefix = i.enableTagOptions && (i.tagOptionsPrefix || n.tagOptionsPrefix), a = this.getTagSetting("type"), o = a === O ? r[i.type || n.type] : r[a], this.mergedOptions = t.extend({}, n, o, i)
                    },
                    getTagSetting: function(t) {
                        var e, i, o, r, n = this.tagOptionsPrefix;
                        if (!1 === n || void 0 === n) return O;
                        if (this.tagValCache.hasOwnProperty(t)) e = this.tagValCache.key;
                        else {
                            if (void 0 === (e = this.tag.getAttribute(n + t)) || null === e) e = O;
                            else if ("[" === e.substr(0, 1))
                                for (e = e.substr(1, e.length - 2).split(","), i = e.length; i--;) e[i] = h(e[i].replace(/(^\s*)|(\s*$)/g, ""));
                            else if ("{" === e.substr(0, 1))
                                for (o = e.substr(1, e.length - 2).split(","), e = {}, i = o.length; i--;) r = o[i].split(":", 2), e[r[0].replace(/(^\s*)|(\s*$)/g, "")] = h(r[1].replace(/(^\s*)|(\s*$)/g, ""));
                            else e = h(e);
                            this.tagValCache.key = e
                        }
                        return e
                    },
                    get: function(t, e) {
                        var i, o = this.getTagSetting(t);
                        return o !== O ? o : void 0 === (i = this.mergedOptions[t]) ? e : i
                    }
                }), t.fn.sparkline._base = i({
                    disabled: !1,
                    init: function(e, i, o, r, n) {
                        this.el = e, this.$el = t(e), this.values = i, this.options = o, this.width = r, this.height = n, this.currentRegion = void 0
                    },
                    initTarget: function() {
                        var t = !this.options.get("disableInteraction");
                        (this.target = this.$el.simpledraw(this.width, this.height, this.options.get("composite"), t)) ? (this.canvasWidth = this.target.pixelWidth, this.canvasHeight = this.target.pixelHeight) : this.disabled = !0
                    },
                    render: function() {
                        return !this.disabled || (this.el.innerHTML = "", !1)
                    },
                    getRegion: function(t, e) {},
                    setRegionHighlight: function(t, e, i) {
                        var o, r = this.currentRegion,
                            n = !this.options.get("disableHighlight");
                        return e > this.canvasWidth || i > this.canvasHeight || e < 0 || i < 0 ? null : (o = this.getRegion(t, e, i), r !== o && (void 0 !== r && n && this.removeHighlight(), this.currentRegion = o, void 0 !== o && n && this.renderHighlight(), !0))
                    },
                    clearRegionHighlight: function() {
                        return void 0 !== this.currentRegion && (this.removeHighlight(), this.currentRegion = void 0, !0)
                    },
                    renderHighlight: function() {
                        this.changeHighlight(!0)
                    },
                    removeHighlight: function() {
                        this.changeHighlight(!1)
                    },
                    changeHighlight: function(t) {},
                    getCurrentRegionTooltip: function() {
                        var e, i, r, n, a, s, l, h, c, p, d, u, g, f, m = this.options,
                            v = "",
                            x = [];
                        if (void 0 === this.currentRegion) return "";
                        if (e = this.getCurrentRegionFields(), d = m.get("tooltipFormatter")) return d(this, m, e);
                        if (m.get("tooltipChartTitle") && (v += '<div class="jqs jqstitle">' + m.get("tooltipChartTitle") + "</div>\n"), !(i = this.options.get("tooltipFormat"))) return "";
                        if (t.isArray(i) || (i = [i]), t.isArray(e) || (e = [e]), l = this.options.get("tooltipFormatFieldlist"), h = this.options.get("tooltipFormatFieldlistKey"), l && h) {
                            for (c = [], s = e.length; s--;) p = e[s][h], -1 != (f = t.inArray(p, l)) && (c[f] = e[s]);
                            e = c
                        }
                        for (r = i.length, g = e.length, s = 0; s < r; s++)
                            for (u = i[s], "string" == typeof u && (u = new o(u)), n = u.fclass || "jqsfield", f = 0; f < g; f++) e[f].isNull && m.get("tooltipSkipNull") || (t.extend(e[f], {
                                prefix: m.get("tooltipPrefix"),
                                suffix: m.get("tooltipSuffix")
                            }), a = u.render(e[f], m.get("tooltipValueLookups"), m), x.push('<div class="' + n + '">' + a + "</div>"));
                        return x.length ? v + x.join("\n") : ""
                    },
                    getCurrentRegionFields: function() {},
                    calcHighlightColor: function(t, e) {
                        var i, o, n, a, s = e.get("highlightColor"),
                            h = e.get("highlightLighten");
                        if (s) return s;
                        if (h && (i = /^#([0-9a-f])([0-9a-f])([0-9a-f])$/i.exec(t) || /^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i.exec(t))) {
                            for (n = [], o = 4 === t.length ? 16 : 1, a = 0; a < 3; a++) n[a] = r(l.round(parseInt(i[a + 1], 16) * o * h), 0, 255);
                            return "rgb(" + n.join(",") + ")"
                        }
                        return t
                    }
                }), y = {
                    changeHighlight: function(e) {
                        var i, o = this.currentRegion,
                            r = this.target,
                            n = this.regionShapes[o];
                        n && (i = this.renderRegion(o, e), t.isArray(i) || t.isArray(n) ? (r.replaceWithShapes(n, i), this.regionShapes[o] = t.map(i, function(t) {
                            return t.id
                        })) : (r.replaceWithShape(n, i), this.regionShapes[o] = i.id))
                    },
                    render: function() {
                        var e, i, o, r, n = this.values,
                            a = this.target,
                            s = this.regionShapes;
                        if (this.cls._super.render.call(this)) {
                            for (o = n.length; o--;)
                                if (e = this.renderRegion(o))
                                    if (t.isArray(e)) {
                                        for (i = [], r = e.length; r--;) e[r].append(), i.push(e[r].id);
                                        s[o] = i
                                    } else e.append(), s[o] = e.id;
                            else s[o] = null;
                            a.render()
                        }
                    }
                }, t.fn.sparkline.line = w = i(t.fn.sparkline._base, {
                    type: "line",
                    init: function(t, e, i, o, r) {
                        w._super.init.call(this, t, e, i, o, r), this.vertices = [], this.regionMap = [], this.xvalues = [], this.yvalues = [], this.yminmax = [], this.hightlightSpotId = null, this.lastShapeId = null, this.initTarget()
                    },
                    getRegion: function(t, e, i) {
                        var o, r = this.regionMap;
                        for (o = r.length; o--;)
                            if (null !== r[o] && e >= r[o][0] && e <= r[o][1]) return r[o][2]
                    },
                    getCurrentRegionFields: function() {
                        var t = this.currentRegion;
                        return {
                            isNull: null === this.yvalues[t],
                            x: this.xvalues[t],
                            y: this.yvalues[t],
                            color: this.options.get("lineColor"),
                            fillColor: this.options.get("fillColor"),
                            offset: t
                        }
                    },
                    renderHighlight: function() {
                        var t, e, i = this.currentRegion,
                            o = this.target,
                            r = this.vertices[i],
                            n = this.options,
                            a = n.get("spotRadius"),
                            s = n.get("highlightSpotColor"),
                            l = n.get("highlightLineColor");
                        r && (a && s && (t = o.drawCircle(r[0], r[1], a, void 0, s), this.highlightSpotId = t.id, o.insertAfterShape(this.lastShapeId, t)), l && (e = o.drawLine(r[0], this.canvasTop, r[0], this.canvasTop + this.canvasHeight, l), this.highlightLineId = e.id, o.insertAfterShape(this.lastShapeId, e)))
                    },
                    removeHighlight: function() {
                        var t = this.target;
                        this.highlightSpotId && (t.removeShapeId(this.highlightSpotId), this.highlightSpotId = null), this.highlightLineId && (t.removeShapeId(this.highlightLineId), this.highlightLineId = null)
                    },
                    scanValues: function() {
                        var t, e, i, o, r, n = this.values,
                            s = n.length,
                            h = this.xvalues,
                            c = this.yvalues,
                            p = this.yminmax;
                        for (t = 0; t < s; t++) e = n[t], i = "string" == typeof n[t], o = "object" === a(n[t]) && n[t] instanceof Array, r = i && n[t].split(":"), i && 2 === r.length ? (h.push(Number(r[0])), c.push(Number(r[1])), p.push(Number(r[1]))) : o ? (h.push(e[0]), c.push(e[1]), p.push(e[1])) : (h.push(t), null === n[t] || "null" === n[t] ? c.push(null) : (c.push(Number(e)), p.push(Number(e))));
                        this.options.get("xvalues") && (h = this.options.get("xvalues")), this.maxy = this.maxyorg = l.max.apply(l, p), this.miny = this.minyorg = l.min.apply(l, p), this.maxx = l.max.apply(l, h), this.minx = l.min.apply(l, h), this.xvalues = h, this.yvalues = c, this.yminmax = p
                    },
                    processRangeOptions: function() {
                        var t = this.options,
                            e = t.get("normalRangeMin"),
                            i = t.get("normalRangeMax");
                        void 0 !== e && (e < this.miny && (this.miny = e), i > this.maxy && (this.maxy = i)), void 0 !== t.get("chartRangeMin") && (t.get("chartRangeClip") || t.get("chartRangeMin") < this.miny) && (this.miny = t.get("chartRangeMin")), void 0 !== t.get("chartRangeMax") && (t.get("chartRangeClip") || t.get("chartRangeMax") > this.maxy) && (this.maxy = t.get("chartRangeMax")), void 0 !== t.get("chartRangeMinX") && (t.get("chartRangeClipX") || t.get("chartRangeMinX") < this.minx) && (this.minx = t.get("chartRangeMinX")), void 0 !== t.get("chartRangeMaxX") && (t.get("chartRangeClipX") || t.get("chartRangeMaxX") > this.maxx) && (this.maxx = t.get("chartRangeMaxX"))
                    },
                    drawNormalRange: function(t, e, i, o, r) {
                        var n = this.options.get("normalRangeMin"),
                            a = this.options.get("normalRangeMax"),
                            s = e + l.round(i - i * ((a - this.miny) / r)),
                            h = l.round(i * (a - n) / r);
                        this.target.drawRect(t, s, o, h, void 0, this.options.get("normalRangeColor")).append()
                    },
                    render: function() {
                        var e, i, o, r, n, a, s, h, c, p, d, u, g, f, m, x, b, y, k, C, S, M, T, R, A, W = this.options,
                            I = this.target,
                            P = this.canvasWidth,
                            _ = this.canvasHeight,
                            z = this.vertices,
                            F = W.get("spotRadius"),
                            O = this.regionMap;
                        if (w._super.render.call(this) && (this.scanValues(), this.processRangeOptions(), T = this.xvalues, R = this.yvalues, this.yminmax.length && !(this.yvalues.length < 2))) {
                            for (r = n = 0, e = this.maxx - this.minx == 0 ? 1 : this.maxx - this.minx, i = this.maxy - this.miny == 0 ? 1 : this.maxy - this.miny, o = this.yvalues.length - 1, F && (P < 4 * F || _ < 4 * F) && (F = 0), F && (S = W.get("highlightSpotColor") && !W.get("disableInteraction"), (S || W.get("minSpotColor") || W.get("spotColor") && R[o] === this.miny) && (_ -= l.ceil(F)), (S || W.get("maxSpotColor") || W.get("spotColor") && R[o] === this.maxy) && (_ -= l.ceil(F), r += l.ceil(F)), (S || (W.get("minSpotColor") || W.get("maxSpotColor")) && (R[0] === this.miny || R[0] === this.maxy)) && (n += l.ceil(F), P -= l.ceil(F)), (S || W.get("spotColor") || W.get("minSpotColor") || W.get("maxSpotColor") && (R[o] === this.miny || R[o] === this.maxy)) && (P -= l.ceil(F))), _--, void 0 === W.get("normalRangeMin") || W.get("drawNormalOnTop") || this.drawNormalRange(n, r, _, P, i), s = [], h = [s], f = m = null, x = R.length, A = 0; A < x; A++) c = T[A], d = T[A + 1], p = R[A], u = n + l.round((c - this.minx) * (P / e)), g = A < x - 1 ? n + l.round((d - this.minx) * (P / e)) : P, m = u + (g - u) / 2, O[A] = [f || 0, m, A], f = m, null === p ? A && (null !== R[A - 1] && (s = [], h.push(s)), z.push(null)) : (p < this.miny && (p = this.miny), p > this.maxy && (p = this.maxy), s.length || s.push([u, r + _]), a = [u, r + l.round(_ - _ * ((p - this.miny) / i))], s.push(a), z.push(a));
                            for (b = [], y = [], k = h.length, A = 0; A < k; A++) s = h[A], s.length && (W.get("fillColor") && (s.push([s[s.length - 1][0], r + _]), y.push(s.slice(0)), s.pop()), s.length > 2 && (s[0] = [s[0][0], s[1][1]]), b.push(s));
                            for (k = y.length, A = 0; A < k; A++) I.drawShape(y[A], W.get("fillColor"), W.get("fillColor")).append();
                            for (void 0 !== W.get("normalRangeMin") && W.get("drawNormalOnTop") && this.drawNormalRange(n, r, _, P, i), k = b.length, A = 0; A < k; A++) I.drawShape(b[A], W.get("lineColor"), void 0, W.get("lineWidth")).append();
                            if (F && W.get("valueSpots"))
                                for (C = W.get("valueSpots"), void 0 === C.get && (C = new v(C)), A = 0; A < x; A++)(M = C.get(R[A])) && I.drawCircle(n + l.round((T[A] - this.minx) * (P / e)), r + l.round(_ - _ * ((R[A] - this.miny) / i)), F, void 0, M).append();
                            F && W.get("spotColor") && null !== R[o] && I.drawCircle(n + l.round((T[T.length - 1] - this.minx) * (P / e)), r + l.round(_ - _ * ((R[o] - this.miny) / i)), F, void 0, W.get("spotColor")).append(), this.maxy !== this.minyorg && (F && W.get("minSpotColor") && (c = T[t.inArray(this.minyorg, R)], I.drawCircle(n + l.round((c - this.minx) * (P / e)), r + l.round(_ - _ * ((this.minyorg - this.miny) / i)), F, void 0, W.get("minSpotColor")).append()), F && W.get("maxSpotColor") && (c = T[t.inArray(this.maxyorg, R)], I.drawCircle(n + l.round((c - this.minx) * (P / e)), r + l.round(_ - _ * ((this.maxyorg - this.miny) / i)), F, void 0, W.get("maxSpotColor")).append())), this.lastShapeId = I.getLastShapeId(), this.canvasTop = r, I.render()
                        }
                    }
                }), t.fn.sparkline.bar = k = i(t.fn.sparkline._base, y, {
                    type: "bar",
                    init: function(e, i, o, n, a) {
                        var s, d, u, g, f, m, x, b, y, w, C, S, M, T, R, A, W, I, P, _, z, F, O = parseInt(o.get("barWidth"), 10),
                            H = parseInt(o.get("barSpacing"), 10),
                            L = o.get("chartRangeMin"),
                            B = o.get("chartRangeMax"),
                            q = o.get("chartRangeClip"),
                            D = 1 / 0,
                            j = -1 / 0;
                        for (k._super.init.call(this, e, i, o, n, a), m = 0, x = i.length; m < x; m++) _ = i[m], ((s = "string" == typeof _ && _.indexOf(":") > -1) || t.isArray(_)) && (R = !0, s && (_ = i[m] = c(_.split(":"))), _ = p(_, null), d = l.min.apply(l, _), u = l.max.apply(l, _), d < D && (D = d), u > j && (j = u));
                        this.stacked = R, this.regionShapes = {}, this.barWidth = O, this.barSpacing = H, this.totalBarWidth = O + H, this.width = n = i.length * O + (i.length - 1) * H, this.initTarget(), q && (M = void 0 === L ? -1 / 0 : L, T = void 0 === B ? 1 / 0 : B), f = [], g = R ? [] : f;
                        var N = [],
                            E = [];
                        for (m = 0, x = i.length; m < x; m++)
                            if (R)
                                for (A = i[m], i[m] = P = [], N[m] = 0, g[m] = E[m] = 0, W = 0, I = A.length; W < I; W++) null !== (_ = P[W] = q ? r(A[W], M, T) : A[W]) && (_ > 0 && (N[m] += _), D < 0 && j > 0 ? _ < 0 ? E[m] += l.abs(_) : g[m] += _ : g[m] += l.abs(_ - (_ < 0 ? j : D)), f.push(_));
                            else _ = q ? r(i[m], M, T) : i[m], null !== (_ = i[m] = h(_)) && f.push(_);
                        this.max = S = l.max.apply(l, f), this.min = C = l.min.apply(l, f), this.stackMax = j = R ? l.max.apply(l, N) : S, this.stackMin = D = R ? l.min.apply(l, f) : C, void 0 !== o.get("chartRangeMin") && (o.get("chartRangeClip") || o.get("chartRangeMin") < C) && (C = o.get("chartRangeMin")), void 0 !== o.get("chartRangeMax") && (o.get("chartRangeClip") || o.get("chartRangeMax") > S) && (S = o.get("chartRangeMax")), this.zeroAxis = y = o.get("zeroAxis", !0), w = C <= 0 && S >= 0 && y ? 0 : 0 == y ? C : C > 0 ? C : S, this.xaxisOffset = w, b = R ? l.max.apply(l, g) + l.max.apply(l, E) : S - C, this.canvasHeightEf = y && C < 0 ? this.canvasHeight - 2 : this.canvasHeight - 1, C < w ? (F = R && S >= 0 ? j : S, (z = (F - w) / b * this.canvasHeight) !== l.ceil(z) && (this.canvasHeightEf -= 2, z = l.ceil(z))) : z = this.canvasHeight, this.yoffset = z, t.isArray(o.get("colorMap")) ? (this.colorMapByIndex = o.get("colorMap"), this.colorMapByValue = null) : (this.colorMapByIndex = null, this.colorMapByValue = o.get("colorMap"), this.colorMapByValue && void 0 === this.colorMapByValue.get && (this.colorMapByValue = new v(this.colorMapByValue))), this.range = b
                    },
                    getRegion: function(t, e, i) {
                        var o = l.floor(e / this.totalBarWidth);
                        return o < 0 || o >= this.values.length ? void 0 : o
                    },
                    getCurrentRegionFields: function() {
                        var t, e, i = this.currentRegion,
                            o = f(this.values[i]),
                            r = [];
                        for (e = o.length; e--;) t = o[e], r.push({
                            isNull: null === t,
                            value: t,
                            color: this.calcColor(e, t, i),
                            offset: i
                        });
                        return r
                    },
                    calcColor: function(e, i, o) {
                        var r, n, a = this.colorMapByIndex,
                            s = this.colorMapByValue,
                            l = this.options;
                        return r = this.stacked ? l.get("stackedBarColor") : i < 0 ? l.get("negBarColor") : l.get("barColor"), 0 === i && void 0 !== l.get("zeroColor") && (r = l.get("zeroColor")), s && (n = s.get(i)) ? r = n : a && a.length > o && (r = a[o]), t.isArray(r) ? r[e % r.length] : r
                    },
                    renderRegion: function(e, i) {
                        var o, r, n, a, s, h, c, p, d, g, f = this.values[e],
                            m = this.options,
                            v = this.xaxisOffset,
                            x = [],
                            b = this.range,
                            y = this.stacked,
                            w = this.target,
                            k = e * this.totalBarWidth,
                            C = this.canvasHeightEf,
                            S = this.yoffset;
                        if (f = t.isArray(f) ? f : [f], c = f.length, p = f[0], a = u(null, f), g = u(v, f, !0), a) return m.get("nullColor") ? (n = i ? m.get("nullColor") : this.calcHighlightColor(m.get("nullColor"), m), o = S > 0 ? S - 1 : S, w.drawRect(k, o, this.barWidth - 1, 0, n, n)) : void 0;
                        for (s = S, h = 0; h < c; h++) {
                            if (p = f[h], y && p === v) {
                                if (!g || d) continue;
                                d = !0
                            }
                            r = b > 0 ? l.floor(C * (l.abs(p - v) / b)) + 1 : 1, p < v || p === v && 0 === S ? (o = s, s += r) : (o = S - r, S -= r), n = this.calcColor(h, p, e), i && (n = this.calcHighlightColor(n, m)), x.push(w.drawRect(k, o, this.barWidth - 1, r - 1, n, n))
                        }
                        return 1 === x.length ? x[0] : x
                    }
                }), t.fn.sparkline.tristate = C = i(t.fn.sparkline._base, y, {
                    type: "tristate",
                    init: function(e, i, o, r, n) {
                        var a = parseInt(o.get("barWidth"), 10),
                            s = parseInt(o.get("barSpacing"), 10);
                        C._super.init.call(this, e, i, o, r, n), this.regionShapes = {}, this.barWidth = a, this.barSpacing = s, this.totalBarWidth = a + s, this.values = t.map(i, Number), this.width = r = i.length * a + (i.length - 1) * s, t.isArray(o.get("colorMap")) ? (this.colorMapByIndex = o.get("colorMap"), this.colorMapByValue = null) : (this.colorMapByIndex = null, this.colorMapByValue = o.get("colorMap"), this.colorMapByValue && void 0 === this.colorMapByValue.get && (this.colorMapByValue = new v(this.colorMapByValue))), this.initTarget()
                    },
                    getRegion: function(t, e, i) {
                        return l.floor(e / this.totalBarWidth)
                    },
                    getCurrentRegionFields: function() {
                        var t = this.currentRegion;
                        return {
                            isNull: void 0 === this.values[t],
                            value: this.values[t],
                            color: this.calcColor(this.values[t], t),
                            offset: t
                        }
                    },
                    calcColor: function(t, e) {
                        var i, o = this.values,
                            r = this.options,
                            n = this.colorMapByIndex,
                            a = this.colorMapByValue;
                        return a && (i = a.get(t)) ? i : n && n.length > e ? n[e] : o[e] < 0 ? r.get("negBarColor") : o[e] > 0 ? r.get("posBarColor") : r.get("zeroBarColor")
                    },
                    renderRegion: function(t, e) {
                        var i, o, r, n, a, s, h = this.values,
                            c = this.options,
                            p = this.target;
                        if (i = p.pixelHeight, r = l.round(i / 2), n = t * this.totalBarWidth, h[t] < 0 ? (a = r, o = r - 1) : h[t] > 0 ? (a = 0, o = r - 1) : (a = r - 1, o = 2), null !== (s = this.calcColor(h[t], t))) return e && (s = this.calcHighlightColor(s, c)), p.drawRect(n, a, this.barWidth - 1, o - 1, s, s)
                    }
                }), t.fn.sparkline.discrete = S = i(t.fn.sparkline._base, y, {
                    type: "discrete",
                    init: function(e, i, o, r, n) {
                        S._super.init.call(this, e, i, o, r, n), this.regionShapes = {}, this.values = i = t.map(i, Number), this.min = l.min.apply(l, i), this.max = l.max.apply(l, i), this.range = this.max - this.min, this.width = r = "auto" === o.get("width") ? 2 * i.length : this.width, this.interval = l.floor(r / i.length), this.itemWidth = r / i.length, void 0 !== o.get("chartRangeMin") && (o.get("chartRangeClip") || o.get("chartRangeMin") < this.min) && (this.min = o.get("chartRangeMin")), void 0 !== o.get("chartRangeMax") && (o.get("chartRangeClip") || o.get("chartRangeMax") > this.max) && (this.max = o.get("chartRangeMax")), this.initTarget(), this.target && (this.lineHeight = "auto" === o.get("lineHeight") ? l.round(.3 * this.canvasHeight) : o.get("lineHeight"))
                    },
                    getRegion: function(t, e, i) {
                        return l.floor(e / this.itemWidth)
                    },
                    getCurrentRegionFields: function() {
                        var t = this.currentRegion;
                        return {
                            isNull: void 0 === this.values[t],
                            value: this.values[t],
                            offset: t
                        }
                    },
                    renderRegion: function(t, e) {
                        var i, o, n, a, s = this.values,
                            h = this.options,
                            c = this.min,
                            p = this.max,
                            d = this.range,
                            u = this.interval,
                            g = this.target,
                            f = this.canvasHeight,
                            m = this.lineHeight,
                            v = f - m;
                        return o = r(s[t], c, p), a = t * u, i = l.round(v - v * ((o - c) / d)), n = h.get("thresholdColor") && o < h.get("thresholdValue") ? h.get("thresholdColor") : h.get("lineColor"), e && (n = this.calcHighlightColor(n, h)), g.drawLine(a, i, a, i + m, n)
                    }
                }), t.fn.sparkline.bullet = M = i(t.fn.sparkline._base, {
                    type: "bullet",
                    init: function(t, e, i, o, r) {
                        var n, a, s;
                        M._super.init.call(this, t, e, i, o, r), this.values = e = c(e), s = e.slice(), s[0] = null === s[0] ? s[2] : s[0], s[1] = null === e[1] ? s[2] : s[1], n = l.min.apply(l, e), a = l.max.apply(l, e), n = void 0 === i.get("base") ? n < 0 ? n : 0 : i.get("base"), this.min = n, this.max = a, this.range = a - n, this.shapes = {}, this.valueShapes = {}, this.regiondata = {}, this.width = o = "auto" === i.get("width") ? "4.0em" : o, this.target = this.$el.simpledraw(o, r, i.get("composite")), e.length || (this.disabled = !0), this.initTarget()
                    },
                    getRegion: function(t, e, i) {
                        var o = this.target.getShapeAt(t, e, i);
                        return void 0 !== o && void 0 !== this.shapes[o] ? this.shapes[o] : void 0
                    },
                    getCurrentRegionFields: function() {
                        var t = this.currentRegion;
                        return {
                            fieldkey: t.substr(0, 1),
                            value: this.values[t.substr(1)],
                            region: t
                        }
                    },
                    changeHighlight: function(t) {
                        var e, i = this.currentRegion,
                            o = this.valueShapes[i];
                        switch (delete this.shapes[o], i.substr(0, 1)) {
                            case "r":
                                e = this.renderRange(i.substr(1), t);
                                break;
                            case "p":
                                e = this.renderPerformance(t);
                                break;
                            case "t":
                                e = this.renderTarget(t)
                        }
                        this.valueShapes[i] = e.id, this.shapes[e.id] = i, this.target.replaceWithShape(o, e)
                    },
                    renderRange: function(t, e) {
                        var i = this.values[t],
                            o = l.round(this.canvasWidth * ((i - this.min) / this.range)),
                            r = this.options.get("rangeColors")[t - 2];
                        return e && (r = this.calcHighlightColor(r, this.options)), this.target.drawRect(0, 0, o - 1, this.canvasHeight - 1, r, r)
                    },
                    renderPerformance: function(t) {
                        var e = this.values[1],
                            i = l.round(this.canvasWidth * ((e - this.min) / this.range)),
                            o = this.options.get("performanceColor");
                        return t && (o = this.calcHighlightColor(o, this.options)), this.target.drawRect(0, l.round(.3 * this.canvasHeight), i - 1, l.round(.4 * this.canvasHeight) - 1, o, o)
                    },
                    renderTarget: function(t) {
                        var e = this.values[0],
                            i = l.round(this.canvasWidth * ((e - this.min) / this.range) - this.options.get("targetWidth") / 2),
                            o = l.round(.1 * this.canvasHeight),
                            r = this.canvasHeight - 2 * o,
                            n = this.options.get("targetColor");
                        return t && (n = this.calcHighlightColor(n, this.options)), this.target.drawRect(i, o, this.options.get("targetWidth") - 1, r - 1, n, n)
                    },
                    render: function() {
                        var t, e, i = this.values.length,
                            o = this.target;
                        if (M._super.render.call(this)) {
                            for (t = 2; t < i; t++) e = this.renderRange(t).append(), this.shapes[e.id] = "r" + t, this.valueShapes["r" + t] = e.id;
                            null !== this.values[1] && (e = this.renderPerformance().append(), this.shapes[e.id] = "p1", this.valueShapes.p1 = e.id), null !== this.values[0] && (e = this.renderTarget().append(), this.shapes[e.id] = "t0", this.valueShapes.t0 = e.id), o.render()
                        }
                    }
                }), t.fn.sparkline.pie = T = i(t.fn.sparkline._base, {
                    type: "pie",
                    init: function(e, i, o, r, n) {
                        var a, s = 0;
                        if (T._super.init.call(this, e, i, o, r, n), this.shapes = {}, this.valueShapes = {}, this.values = i = t.map(i, Number), "auto" === o.get("width") && (this.width = this.height), i.length > 0)
                            for (a = i.length; a--;) s += i[a];
                        this.total = s, this.initTarget(), this.radius = l.floor(l.min(this.canvasWidth, this.canvasHeight) / 2)
                    },
                    getRegion: function(t, e, i) {
                        var o = this.target.getShapeAt(t, e, i);
                        return void 0 !== o && void 0 !== this.shapes[o] ? this.shapes[o] : void 0
                    },
                    getCurrentRegionFields: function() {
                        var t = this.currentRegion;
                        return {
                            isNull: void 0 === this.values[t],
                            value: this.values[t],
                            percent: this.values[t] / this.total * 100,
                            color: this.options.get("sliceColors")[t % this.options.get("sliceColors").length],
                            offset: t
                        }
                    },
                    changeHighlight: function(t) {
                        var e = this.currentRegion,
                            i = this.renderSlice(e, t),
                            o = this.valueShapes[e];
                        delete this.shapes[o], this.target.replaceWithShape(o, i), this.valueShapes[e] = i.id, this.shapes[i.id] = e
                    },
                    renderSlice: function(t, e) {
                        var i, o, r, n, a, s = this.target,
                            h = this.options,
                            c = this.radius,
                            p = h.get("borderWidth"),
                            d = h.get("offset"),
                            u = 2 * l.PI,
                            g = this.values,
                            f = this.total,
                            m = d ? 2 * l.PI * (d / 360) : 0;
                        for (n = g.length, r = 0; r < n; r++) {
                            if (i = m, o = m, f > 0 && (o = m + u * (g[r] / f)), t === r) return a = h.get("sliceColors")[r % h.get("sliceColors").length], e && (a = this.calcHighlightColor(a, h)), s.drawPieSlice(c, c, c - p, i, o, void 0, a);
                            m = o
                        }
                    },
                    render: function() {
                        var t, e, i = this.target,
                            o = this.values,
                            r = this.options,
                            n = this.radius,
                            a = r.get("borderWidth");
                        if (T._super.render.call(this)) {
                            for (a && i.drawCircle(n, n, l.floor(n - a / 2), r.get("borderColor"), void 0, a).append(), e = o.length; e--;) o[e] && (t = this.renderSlice(e).append(), this.valueShapes[e] = t.id, this.shapes[t.id] = e);
                            i.render()
                        }
                    }
                }), t.fn.sparkline.box = R = i(t.fn.sparkline._base, {
                    type: "box",
                    init: function(e, i, o, r, n) {
                        R._super.init.call(this, e, i, o, r, n), this.values = t.map(i, Number), this.width = "auto" === o.get("width") ? "4.0em" : r, this.initTarget(), this.values.length || (this.disabled = 1)
                    },
                    getRegion: function() {
                        return 1
                    },
                    getCurrentRegionFields: function() {
                        var t = [{
                            field: "lq",
                            value: this.quartiles[0]
                        }, {
                            field: "med",
                            value: this.quartiles[1]
                        }, {
                            field: "uq",
                            value: this.quartiles[2]
                        }];
                        return void 0 !== this.loutlier && t.push({
                            field: "lo",
                            value: this.loutlier
                        }), void 0 !== this.routlier && t.push({
                            field: "ro",
                            value: this.routlier
                        }), void 0 !== this.lwhisker && t.push({
                            field: "lw",
                            value: this.lwhisker
                        }), void 0 !== this.rwhisker && t.push({
                            field: "rw",
                            value: this.rwhisker
                        }), t
                    },
                    render: function() {
                        var t, e, i, o, r, a, s, h, c, p, d, u = this.target,
                            g = this.values,
                            f = g.length,
                            m = this.options,
                            v = this.canvasWidth,
                            x = this.canvasHeight,
                            b = void 0 === m.get("chartRangeMin") ? l.min.apply(l, g) : m.get("chartRangeMin"),
                            y = void 0 === m.get("chartRangeMax") ? l.max.apply(l, g) : m.get("chartRangeMax"),
                            w = 0;
                        if (R._super.render.call(this)) {
                            if (m.get("raw")) m.get("showOutliers") && g.length > 5 ? (e = g[0], t = g[1], o = g[2], r = g[3], a = g[4], s = g[5], h = g[6]) : (t = g[0], o = g[1], r = g[2], a = g[3], s = g[4]);
                            else if (g.sort(function(t, e) {
                                    return t - e
                                }), o = n(g, 1), r = n(g, 2), a = n(g, 3), i = a - o, m.get("showOutliers")) {
                                for (t = s = void 0, c = 0; c < f; c++) void 0 === t && g[c] > o - i * m.get("outlierIQR") && (t = g[c]), g[c] < a + i * m.get("outlierIQR") && (s = g[c]);
                                e = g[0], h = g[f - 1]
                            } else t = g[0], s = g[f - 1];
                            this.quartiles = [o, r, a], this.lwhisker = t, this.rwhisker = s, this.loutlier = e, this.routlier = h, d = v / (y - b + 1), m.get("showOutliers") && (w = l.ceil(m.get("spotRadius")), v -= 2 * l.ceil(m.get("spotRadius")), d = v / (y - b + 1), e < t && u.drawCircle((e - b) * d + w, x / 2, m.get("spotRadius"), m.get("outlierLineColor"), m.get("outlierFillColor")).append(), h > s && u.drawCircle((h - b) * d + w, x / 2, m.get("spotRadius"), m.get("outlierLineColor"), m.get("outlierFillColor")).append()), u.drawRect(l.round((o - b) * d + w), l.round(.1 * x), l.round((a - o) * d), l.round(.8 * x), m.get("boxLineColor"), m.get("boxFillColor")).append(), u.drawLine(l.round((t - b) * d + w), l.round(x / 2), l.round((o - b) * d + w), l.round(x / 2), m.get("lineColor")).append(), u.drawLine(l.round((t - b) * d + w), l.round(x / 4), l.round((t - b) * d + w), l.round(x - x / 4), m.get("whiskerColor")).append(), u.drawLine(l.round((s - b) * d + w), l.round(x / 2), l.round((a - b) * d + w), l.round(x / 2), m.get("lineColor")).append(), u.drawLine(l.round((s - b) * d + w), l.round(x / 4), l.round((s - b) * d + w), l.round(x - x / 4), m.get("whiskerColor")).append(), u.drawLine(l.round((r - b) * d + w), l.round(.1 * x), l.round((r - b) * d + w), l.round(.9 * x), m.get("medianColor")).append(), m.get("target") && (p = l.ceil(m.get("spotRadius")), u.drawLine(l.round((m.get("target") - b) * d + w), l.round(x / 2 - p), l.round((m.get("target") - b) * d + w), l.round(x / 2 + p), m.get("targetColor")).append(), u.drawLine(l.round((m.get("target") - b) * d + w - p), l.round(x / 2), l.round((m.get("target") - b) * d + w + p), l.round(x / 2), m.get("targetColor")).append()), u.render()
                        }
                    }
                }), I = i({
                    init: function(t, e, i, o) {
                        this.target = t, this.id = e, this.type = i, this.args = o
                    },
                    append: function() {
                        return this.target.appendShape(this), this
                    }
                }), P = i({
                    _pxregex: /(\d+)(px)?\s*$/i,
                    init: function(e, i, o) {
                        e && (this.width = e, this.height = i, this.target = o, this.lastShapeId = null, o[0] && (o = o[0]), t.data(o, "_jqs_vcanvas", this))
                    },
                    drawLine: function(t, e, i, o, r, n) {
                        return this.drawShape([
                            [t, e],
                            [i, o]
                        ], r, n)
                    },
                    drawShape: function(t, e, i, o) {
                        return this._genShape("Shape", [t, e, i, o])
                    },
                    drawCircle: function(t, e, i, o, r, n) {
                        return this._genShape("Circle", [t, e, i, o, r, n])
                    },
                    drawPieSlice: function(t, e, i, o, r, n, a) {
                        return this._genShape("PieSlice", [t, e, i, o, r, n, a])
                    },
                    drawRect: function(t, e, i, o, r, n) {
                        return this._genShape("Rect", [t, e, i, o, r, n])
                    },
                    getElement: function() {
                        return this.canvas
                    },
                    getLastShapeId: function() {
                        return this.lastShapeId
                    },
                    reset: function() {
                        alert("reset not implemented")
                    },
                    _insert: function(e, i) {
                        t(i).html(e)
                    },
                    _calculatePixelDims: function(e, i, o) {
                        var r;
                        r = this._pxregex.exec(i), this.pixelHeight = r ? r[1] : t(o).height(), r = this._pxregex.exec(e), this.pixelWidth = r ? r[1] : t(o).width()
                    },
                    _genShape: function(t, e) {
                        var i = H++;
                        return e.unshift(i), new I(this, i, t, e)
                    },
                    appendShape: function(t) {
                        alert("appendShape not implemented")
                    },
                    replaceWithShape: function(t, e) {
                        alert("replaceWithShape not implemented")
                    },
                    insertAfterShape: function(t, e) {
                        alert("insertAfterShape not implemented")
                    },
                    removeShapeId: function(t) {
                        alert("removeShapeId not implemented")
                    },
                    getShapeAt: function(t, e, i) {
                        alert("getShapeAt not implemented")
                    },
                    render: function() {
                        alert("render not implemented")
                    }
                }), _ = i(P, {
                    init: function(e, i, o, r) {
                        _._super.init.call(this, e, i, o), this.canvas = s.createElement("canvas"), o[0] && (o = o[0]), t.data(o, "_jqs_vcanvas", this), t(this.canvas).css({
                            display: "inline-block",
                            width: e,
                            height: i,
                            verticalAlign: "top"
                        }), this._insert(this.canvas, o), this._calculatePixelDims(e, i, this.canvas), this.canvas.width = this.pixelWidth, this.canvas.height = this.pixelHeight, this.interact = r, this.shapes = {}, this.shapeseq = [], this.currentTargetShapeId = void 0, t(this.canvas).css({
                            width: this.pixelWidth,
                            height: this.pixelHeight
                        })
                    },
                    _getContext: function(t, e, i) {
                        var o = this.canvas.getContext("2d");
                        return void 0 !== t && (o.strokeStyle = t), o.lineWidth = void 0 === i ? 1 : i, void 0 !== e && (o.fillStyle = e), o
                    },
                    reset: function() {
                        this._getContext().clearRect(0, 0, this.pixelWidth, this.pixelHeight), this.shapes = {}, this.shapeseq = [], this.currentTargetShapeId = void 0
                    },
                    _drawShape: function(t, e, i, o, r) {
                        var n, a, s = this._getContext(i, o, r);
                        for (s.beginPath(), s.moveTo(e[0][0] + .5, e[0][1] + .5), n = 1, a = e.length; n < a; n++) s.lineTo(e[n][0] + .5, e[n][1] + .5);
                        void 0 !== i && s.stroke(), void 0 !== o && s.fill(), void 0 !== this.targetX && void 0 !== this.targetY && s.isPointInPath(this.targetX, this.targetY) && (this.currentTargetShapeId = t)
                    },
                    _drawCircle: function(t, e, i, o, r, n, a) {
                        var s = this._getContext(r, n, a);
                        s.beginPath(), s.arc(e, i, o, 0, 2 * l.PI, !1), void 0 !== this.targetX && void 0 !== this.targetY && s.isPointInPath(this.targetX, this.targetY) && (this.currentTargetShapeId = t), void 0 !== r && s.stroke(), void 0 !== n && s.fill()
                    },
                    _drawPieSlice: function(t, e, i, o, r, n, a, s) {
                        var l = this._getContext(a, s);
                        l.beginPath(), l.moveTo(e, i), l.arc(e, i, o, r, n, !1), l.lineTo(e, i), l.closePath(), void 0 !== a && l.stroke(), s && l.fill(), void 0 !== this.targetX && void 0 !== this.targetY && l.isPointInPath(this.targetX, this.targetY) && (this.currentTargetShapeId = t)
                    },
                    _drawRect: function(t, e, i, o, r, n, a) {
                        return this._drawShape(t, [
                            [e, i],
                            [e + o, i],
                            [e + o, i + r],
                            [e, i + r],
                            [e, i]
                        ], n, a)
                    },
                    appendShape: function(t) {
                        return this.shapes[t.id] = t, this.shapeseq.push(t.id), this.lastShapeId = t.id, t.id
                    },
                    replaceWithShape: function(t, e) {
                        var i, o = this.shapeseq;
                        for (this.shapes[e.id] = e, i = o.length; i--;) o[i] == t && (o[i] = e.id);
                        delete this.shapes[t]
                    },
                    replaceWithShapes: function(t, e) {
                        var i, o, r, n = this.shapeseq,
                            a = {};
                        for (o = t.length; o--;) a[t[o]] = !0;
                        for (o = n.length; o--;) i = n[o], a[i] && (n.splice(o, 1), delete this.shapes[i], r = o);
                        for (o = e.length; o--;) n.splice(r, 0, e[o].id), this.shapes[e[o].id] = e[o]
                    },
                    insertAfterShape: function(t, e) {
                        var i, o = this.shapeseq;
                        for (i = o.length; i--;)
                            if (o[i] === t) return o.splice(i + 1, 0, e.id), void(this.shapes[e.id] = e)
                    },
                    removeShapeId: function(t) {
                        var e, i = this.shapeseq;
                        for (e = i.length; e--;)
                            if (i[e] === t) {
                                i.splice(e, 1);
                                break
                            } delete this.shapes[t]
                    },
                    getShapeAt: function(t, e, i) {
                        return this.targetX = e, this.targetY = i, this.render(), this.currentTargetShapeId
                    },
                    render: function() {
                        var t, e, i, o = this.shapeseq,
                            r = this.shapes,
                            n = o.length,
                            a = this._getContext();
                        for (a.clearRect(0, 0, this.pixelWidth, this.pixelHeight), i = 0; i < n; i++) t = o[i], e = r[t], this["_draw" + e.type].apply(this, e.args);
                        this.interact || (this.shapes = {}, this.shapeseq = [])
                    }
                }), z = i(P, {
                    init: function(e, i, o) {
                        var r;
                        z._super.init.call(this, e, i, o), o[0] && (o = o[0]), t.data(o, "_jqs_vcanvas", this), this.canvas = s.createElement("span"), t(this.canvas).css({
                            display: "inline-block",
                            position: "relative",
                            overflow: "hidden",
                            width: e,
                            height: i,
                            margin: "0px",
                            padding: "0px",
                            verticalAlign: "top"
                        }), this._insert(this.canvas, o), this._calculatePixelDims(e, i, this.canvas), this.canvas.width = this.pixelWidth, this.canvas.height = this.pixelHeight, r = '<v:group coordorigin="0 0" coordsize="' + this.pixelWidth + " " + this.pixelHeight + '" style="position:absolute;top:0;left:0;width:' + this.pixelWidth + "px;height=" + this.pixelHeight + 'px;"></v:group>', this.canvas.insertAdjacentHTML("beforeEnd", r), this.group = t(this.canvas).children()[0], this.rendered = !1, this.prerender = ""
                    },
                    _drawShape: function(t, e, i, o, r) {
                        var n, a, s, l, h, c, p = [];
                        for (c = 0, h = e.length; c < h; c++) p[c] = e[c][0] + "," + e[c][1];
                        return n = p.splice(0, 1), r = void 0 === r ? 1 : r, a = void 0 === i ? ' stroked="false" ' : ' strokeWeight="' + r + 'px" strokeColor="' + i + '" ', s = void 0 === o ? ' filled="false"' : ' fillColor="' + o + '" filled="true" ', l = p[0] === p[p.length - 1] ? "x " : "", '<v:shape coordorigin="0 0" coordsize="' + this.pixelWidth + " " + this.pixelHeight + '"  id="jqsshape' + t + '" ' + a + s + ' style="position:absolute;left:0px;top:0px;height:' + this.pixelHeight + "px;width:" + this.pixelWidth + 'px;padding:0px;margin:0px;"  path="m ' + n + " l " + p.join(", ") + " " + l + 'e"> </v:shape>'
                    },
                    _drawCircle: function(t, e, i, o, r, n, a) {
                        var s, l;
                        return e -= o, i -= o, s = void 0 === r ? ' stroked="false" ' : ' strokeWeight="' + a + 'px" strokeColor="' + r + '" ', l = void 0 === n ? ' filled="false"' : ' fillColor="' + n + '" filled="true" ', '<v:oval  id="jqsshape' + t + '" ' + s + l + ' style="position:absolute;top:' + i + "px; left:" + e + "px; width:" + 2 * o + "px; height:" + 2 * o + 'px"></v:oval>'
                    },
                    _drawPieSlice: function(t, e, i, o, r, n, a, s) {
                        var h, c, p, d, u, g, f;
                        if (r === n) return "";
                        if (n - r == 2 * l.PI && (r = 0, n = 2 * l.PI), c = e + l.round(l.cos(r) * o), p = i + l.round(l.sin(r) * o), d = e + l.round(l.cos(n) * o), u = i + l.round(l.sin(n) * o), c === d && p === u) {
                            if (n - r < l.PI) return "";
                            c = d = e + o, p = u = i
                        }
                        return c === d && p === u && n - r < l.PI ? "" : (h = [e - o, i - o, e + o, i + o, c, p, d, u], g = void 0 === a ? ' stroked="false" ' : ' strokeWeight="1px" strokeColor="' + a + '" ', f = void 0 === s ? ' filled="false"' : ' fillColor="' + s + '" filled="true" ', '<v:shape coordorigin="0 0" coordsize="' + this.pixelWidth + " " + this.pixelHeight + '"  id="jqsshape' + t + '" ' + g + f + ' style="position:absolute;left:0px;top:0px;height:' + this.pixelHeight + "px;width:" + this.pixelWidth + 'px;padding:0px;margin:0px;"  path="m ' + e + "," + i + " wa " + h.join(", ") + ' x e"> </v:shape>')
                    },
                    _drawRect: function(t, e, i, o, r, n, a) {
                        return this._drawShape(t, [
                            [e, i],
                            [e, i + r],
                            [e + o, i + r],
                            [e + o, i],
                            [e, i]
                        ], n, a)
                    },
                    reset: function() {
                        this.group.innerHTML = ""
                    },
                    appendShape: function(t) {
                        var e = this["_draw" + t.type].apply(this, t.args);
                        return this.rendered ? this.group.insertAdjacentHTML("beforeEnd", e) : this.prerender += e, this.lastShapeId = t.id, t.id
                    },
                    replaceWithShape: function(e, i) {
                        var o = t("#jqsshape" + e),
                            r = this["_draw" + i.type].apply(this, i.args);
                        o[0].outerHTML = r
                    },
                    replaceWithShapes: function(e, i) {
                        var o, r = t("#jqsshape" + e[0]),
                            n = "",
                            a = i.length;
                        for (o = 0; o < a; o++) n += this["_draw" + i[o].type].apply(this, i[o].args);
                        for (r[0].outerHTML = n, o = 1; o < e.length; o++) t("#jqsshape" + e[o]).remove()
                    },
                    insertAfterShape: function(e, i) {
                        var o = t("#jqsshape" + e),
                            r = this["_draw" + i.type].apply(this, i.args);
                        o[0].insertAdjacentHTML("afterEnd", r)
                    },
                    removeShapeId: function(e) {
                        var i = t("#jqsshape" + e);
                        this.group.removeChild(i[0])
                    },
                    getShapeAt: function(t, e, i) {
                        return t.id.substr(8)
                    },
                    render: function() {
                        this.rendered || (this.group.innerHTML = this.prerender, this.rendered = !0)
                    }
                })
            })
        }(document, Math)
    },
    171: function(t, e) {
        ! function(t) {
            "use strict";

            function e(e) {
                function n(e) {
                    S = e.getOptions();
                    var i = S.series.grow.valueIndex;
                    if (!0 === S.series.grow.active) {
                        var o = !1,
                            r = 0;
                        if (S.series.grow.reanimate && y === a.PLOTTED_LAST_FRAME) {
                            m = !1, y = a.NOT_PLOTTED_YET, x = 0, C = e.getData();
                            var n = Math.min(C.length, w.length);
                            for (r = 0; r < n; r++) C[r].dataOld = w[r];
                            o = !0, v = !0
                        }
                        if (!m) {
                            for (o || (C = e.getData()), y = a.NOT_PLOTTED_YET, x = 0 | +new Date, w = [], r = 0; r < C.length; r++) {
                                var s = C[r];
                                if (s.dataOrg = t.extend(!0, [], s.data), w.push(s.dataOrg), !o) {
                                    i = s.grow.valueIndex;
                                    for (var l = 0; l < s.data.length; l++) s.data[l][i] = null === s.dataOrg[l][i] ? null : 0
                                }
                            }
                            e.setData(C), m = !0
                        }
                    }
                }

                function l(t) {
                    !0 === v && h(t)
                }

                function h(t) {
                    S = t.getOptions(), !0 === S.series.grow.active && (c(t.getData(), S), x = 0 | +new Date, f = o(d)), v = !1
                }

                function c(t, e) {
                    for (var i = e.series.grow.duration, o = 0, r = t.length; o < r; o++) {
                        var n = t[o].grow.duration;
                        i < n && (i = n)
                    }
                    e.series.grow.duration = i
                }

                function p(t) {
                    i("resize") && t.getPlaceholder().resize(u)
                }

                function d() {
                    b = +new Date - x | 0, null == C && (C = []);
                    for (var t = 0, e = C.length; t < e; t++)
                        for (var i = C[t], r = i.dataOld && i.dataOld.length > 0, n = 0, l = i.grow.growings.length; n < l; n++) {
                            var h, c = i.grow.growings[n];
                            r && "reinit" !== c.reanimate ? ("function" == typeof c.reanimate && (h = c.reanimate), h = "continue" === c.reanimate ? s.reanimate : s.none) : h = "function" == typeof c.stepMode ? c.stepMode : s[c.stepMode] || s.none, h(i, b, c, y)
                        }
                    k.setData(C), k.draw(), y === a.NOT_PLOTTED_YET && (y = a.PLOTTED_SOME_FRAMES), b < S.series.grow.duration ? f = o(d) : (y = a.PLOTTED_LAST_FRAME, f = null, k.getPlaceholder().trigger("growFinished"))
                }

                function u() {
                    if (f) {
                        for (var i = 0; i < C.length; i++) {
                            var o = C[i];
                            o.data = t.extend(!0, [], o.dataOrg)
                        }
                        e.setData(C), e.setupGrid()
                    }
                }

                function g(t) {
                    t.getPlaceholder().unbind("resize", u), f && (r(f), f = null)
                }
                var f, m = !1,
                    v = !0,
                    x = 0,
                    b = 0,
                    y = a.NOT_PLOTTED_YET,
                    w = [],
                    k = e,
                    C = null,
                    S = null;
                e.hooks.drawSeries.push(n), e.hooks.draw.push(l), e.hooks.bindEvents.push(p), e.hooks.shutdown.push(g)
            }

            function i(e) {
                for (var i = t.plot.plugins, o = 0, r = i.length; o < r; o++)
                    if (i[o].name === e) return !0;
                return !1
            }
            var o, r, n = {
                    series: {
                        grow: {
                            active: !1,
                            duration: 1e3,
                            valueIndex: 1,
                            reanimate: !0,
                            growings: [{
                                valueIndex: 1,
                                stepMode: "linear",
                                stepDirection: "up",
                                reanimate: "continue"
                            }]
                        }
                    }
                },
                a = {
                    NOT_PLOTTED_YET: 0,
                    PLOTTED_SOME_FRAMES: 1,
                    PLOTTED_LAST_FRAME: 2
                },
                s = {
                    none: function(t, e, i, o) {
                        if (o === a.NOT_PLOTTED_YET)
                            for (var r = 0, n = t.data.length; r < n; r++) t.data[r][i.valueIndex] = t.dataOrg[r][i.valueIndex]
                    },
                    linear: function(t, e, i) {
                        var o = Math.min(e / t.grow.duration, 1),
                            r = t.yaxis;
                        t.bars && t.bars.show && t.bars.horizontal && (r = t.xaxis);
                        for (var n = 0, a = t.data.length; n < a; n++) {
                            var s = t.dataOrg[n][i.valueIndex];
                            null !== s ? "up" === i.stepDirection ? t.data[n][i.valueIndex] = s * o : "down" === i.stepDirection && (t.data[n][i.valueIndex] = s + (r.max - s) * (1 - o)) : t.data[n][i.valueIndex] = null
                        }
                    },
                    maximum: function(t, e, i) {
                        var o = Math.min(e / t.grow.duration, 1),
                            r = t.yaxis;
                        t.bars && t.bars.show && t.bars.horizontal && (r = t.xaxis);
                        for (var n = r.max * o, a = r.min * o, s = r.max * (1 - o), l = r.min * (1 - o), h = 0, c = t.data.length; h < c; h++) {
                            var p = t.dataOrg[h][i.valueIndex];
                            null !== p ? "up" === i.stepDirection ? t.data[h][i.valueIndex] = p >= 0 ? Math.min(p, n) : Math.max(p, a) : "down" === i.stepDirection && (t.data[h][i.valueIndex] = p >= 0 ? Math.max(p, s) : Math.min(p, l)) : t.data[h][i.valueIndex] = null
                        }
                    },
                    delay: function(t, e, i) {
                        if (e >= t.grow.duration)
                            for (var o = 0, r = t.data.length; o < r; o++) t.data[o][i.valueIndex] = t.dataOrg[o][i.valueIndex]
                    },
                    reanimate: function(t, e, i) {
                        for (var o = Math.min(e / t.grow.duration, 1), r = 0, n = t.data.length; r < n; r++) {
                            var a = t.dataOrg[r][i.valueIndex];
                            if (null === a) t.data[r][i.valueIndex] = null;
                            else if (t.dataOld) {
                                var s = t.dataOld[r][i.valueIndex];
                                t.data[r][i.valueIndex] = s + (a - s) * o
                            }
                        }
                    }
                };
            ! function() {
                for (var t = window.requestAnimationFrame, e = window.cancelAnimationFrame, i = +new Date, n = ["ms", "moz", "webkit", "o"], a = 0; a < n.length && !t; ++a) t = window[n[a] + "RequestAnimationFrame"], e = window[n[a] + "CancelAnimationFrame"] || window[n[a] + "CancelRequestAnimationFrame"];
                t || (t = function(t) {
                    var e = +new Date,
                        o = Math.max(0, 16 - (e - i)),
                        r = window.setTimeout(function() {
                            t(e + o)
                        }, o);
                    return i = e + o, r
                }), e || (e = function(t) {
                    clearTimeout(t)
                }), o = t, r = e
            }(), t.plot.plugins.push({
                init: e,
                options: n,
                name: "growraf",
                version: "0.5.0"
            })
        }(jQuery)
    },
    172: function(t, e) {
        var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        };
        ! function(t) {
            t.color = {}, t.color.make = function(e, i, o, r) {
                var n = {};
                return n.r = e || 0, n.g = i || 0, n.b = o || 0, n.a = null != r ? r : 1, n.add = function(t, e) {
                    for (var i = 0; i < t.length; ++i) n[t.charAt(i)] += e;
                    return n.normalize()
                }, n.scale = function(t, e) {
                    for (var i = 0; i < t.length; ++i) n[t.charAt(i)] *= e;
                    return n.normalize()
                }, n.toString = function() {
                    return n.a >= 1 ? "rgb(" + [n.r, n.g, n.b].join(",") + ")" : "rgba(" + [n.r, n.g, n.b, n.a].join(",") + ")"
                }, n.normalize = function() {
                    function t(t, e, i) {
                        return e < t ? t : e > i ? i : e
                    }
                    return n.r = t(0, parseInt(n.r), 255), n.g = t(0, parseInt(n.g), 255), n.b = t(0, parseInt(n.b), 255), n.a = t(0, n.a, 1), n
                }, n.clone = function() {
                    return t.color.make(n.r, n.b, n.g, n.a)
                }, n.normalize()
            }, t.color.extract = function(e, i) {
                var o;
                do {
                    if ("" != (o = e.css(i).toLowerCase()) && "transparent" != o) break;
                    e = e.parent()
                } while (e.length && !t.nodeName(e.get(0), "body"));
                return "rgba(0, 0, 0, 0)" == o && (o = "transparent"), t.color.parse(o)
            }, t.color.parse = function(i) {
                var o, r = t.color.make;
                if (o = /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(i)) return r(parseInt(o[1], 10), parseInt(o[2], 10), parseInt(o[3], 10));
                if (o = /rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]+(?:\.[0-9]+)?)\s*\)/.exec(i)) return r(parseInt(o[1], 10), parseInt(o[2], 10), parseInt(o[3], 10), parseFloat(o[4]));
                if (o = /rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(i)) return r(2.55 * parseFloat(o[1]), 2.55 * parseFloat(o[2]), 2.55 * parseFloat(o[3]));
                if (o = /rgba\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\s*\)/.exec(i)) return r(2.55 * parseFloat(o[1]), 2.55 * parseFloat(o[2]), 2.55 * parseFloat(o[3]), parseFloat(o[4]));
                if (o = /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(i)) return r(parseInt(o[1], 16), parseInt(o[2], 16), parseInt(o[3], 16));
                if (o = /#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(i)) return r(parseInt(o[1] + o[1], 16), parseInt(o[2] + o[2], 16), parseInt(o[3] + o[3], 16));
                var n = t.trim(i).toLowerCase();
                return "transparent" == n ? r(255, 255, 255, 0) : (o = e[n] || [0, 0, 0], r(o[0], o[1], o[2]))
            };
            var e = {
                aqua: [0, 255, 255],
                azure: [240, 255, 255],
                beige: [245, 245, 220],
                black: [0, 0, 0],
                blue: [0, 0, 255],
                brown: [165, 42, 42],
                cyan: [0, 255, 255],
                darkblue: [0, 0, 139],
                darkcyan: [0, 139, 139],
                darkgrey: [169, 169, 169],
                darkgreen: [0, 100, 0],
                darkkhaki: [189, 183, 107],
                darkmagenta: [139, 0, 139],
                darkolivegreen: [85, 107, 47],
                darkorange: [255, 140, 0],
                darkorchid: [153, 50, 204],
                darkred: [139, 0, 0],
                darksalmon: [233, 150, 122],
                darkviolet: [148, 0, 211],
                fuchsia: [255, 0, 255],
                gold: [255, 215, 0],
                green: [0, 128, 0],
                indigo: [75, 0, 130],
                khaki: [240, 230, 140],
                lightblue: [173, 216, 230],
                lightcyan: [224, 255, 255],
                lightgreen: [144, 238, 144],
                lightgrey: [211, 211, 211],
                lightpink: [255, 182, 193],
                lightyellow: [255, 255, 224],
                lime: [0, 255, 0],
                magenta: [255, 0, 255],
                maroon: [128, 0, 0],
                navy: [0, 0, 128],
                olive: [128, 128, 0],
                orange: [255, 165, 0],
                pink: [255, 192, 203],
                purple: [128, 0, 128],
                violet: [128, 0, 128],
                red: [255, 0, 0],
                silver: [192, 192, 192],
                white: [255, 255, 255],
                yellow: [255, 255, 0]
            }
        }(jQuery),
        function(t) {
            function e(e, i) {
                var o = i.children("." + e)[0];
                if (null == o && (o = document.createElement("canvas"), o.className = e, t(o).css({
                        direction: "ltr",
                        position: "absolute",
                        left: 0,
                        top: 0
                    }).appendTo(i), !o.getContext)) {
                    if (!window.G_vmlCanvasManager) throw new Error("Canvas is not available. If you're using IE with a fall-back such as Excanvas, then there's either a mistake in your conditional include, or the page has no DOCTYPE and is rendering in Quirks Mode.");
                    o = window.G_vmlCanvasManager.initElement(o)
                }
                this.element = o;
                var r = this.context = o.getContext("2d"),
                    n = window.devicePixelRatio || 1,
                    a = r.webkitBackingStorePixelRatio || r.mozBackingStorePixelRatio || r.msBackingStorePixelRatio || r.oBackingStorePixelRatio || r.backingStorePixelRatio || 1;
                this.pixelRatio = n / a, this.resize(i.width(), i.height()), this.textContainer = null, this.text = {}, this._textCache = {}
            }

            function o(o, n, a, s) {
                function l(t, e) {
                    e = [ut].concat(e);
                    for (var i = 0; i < t.length; ++i) t[i].apply(this, e)
                }

                function h(t) {
                    tt = c(t), m(), v()
                }

                function c(e) {
                    for (var i = [], o = 0; o < e.length; ++o) {
                        var r = t.extend(!0, {}, et.series);
                        null != e[o].data ? (r.data = e[o].data, delete e[o].data, t.extend(!0, r, e[o]), e[o].data = r.data) : r.data = e[o], i.push(r)
                    }
                    return i
                }

                function p(t, e) {
                    var o = t[e + "axis"];
                    return "object" == (void 0 === o ? "undefined" : i(o)) && (o = o.n), "number" != typeof o && (o = 1), o
                }

                function d() {
                    return t.grep(st.concat(lt), function(t) {
                        return t
                    })
                }

                function u(t) {
                    var e, i, o = {};
                    for (e = 0; e < st.length; ++e)(i = st[e]) && i.used && (o["x" + i.n] = i.c2p(t.left));
                    for (e = 0; e < lt.length; ++e)(i = lt[e]) && i.used && (o["y" + i.n] = i.c2p(t.top));
                    return void 0 !== o.x1 && (o.x = o.x1), void 0 !== o.y1 && (o.y = o.y1), o
                }

                function g(t) {
                    var e, i, o, r = {};
                    for (e = 0; e < st.length; ++e)
                        if ((i = st[e]) && i.used && (o = "x" + i.n, null == t[o] && 1 == i.n && (o = "x"), null != t[o])) {
                            r.left = i.p2c(t[o]);
                            break
                        } for (e = 0; e < lt.length; ++e)
                        if ((i = lt[e]) && i.used && (o = "y" + i.n, null == t[o] && 1 == i.n && (o = "y"), null != t[o])) {
                            r.top = i.p2c(t[o]);
                            break
                        } return r
                }

                function f(e, i) {
                    return e[i - 1] || (e[i - 1] = {
                        n: i,
                        direction: e == st ? "x" : "y",
                        options: t.extend(!0, {}, e == st ? et.xaxis : et.yaxis)
                    }), e[i - 1]
                }

                function m() {
                    var e, i = tt.length,
                        o = -1;
                    for (e = 0; e < tt.length; ++e) {
                        var r = tt[e].color;
                        null != r && (i--, "number" == typeof r && r > o && (o = r))
                    }
                    i <= o && (i = o + 1);
                    var n, a = [],
                        s = et.colors,
                        l = s.length,
                        h = 0;
                    for (e = 0; e < i; e++) n = t.color.parse(s[e % l] || "#666"), e % l == 0 && e && (h = h >= 0 ? h < .5 ? -h - .2 : 0 : -h), a[e] = n.scale("rgb", 1 + h);
                    var c, d = 0;
                    for (e = 0; e < tt.length; ++e) {
                        if (c = tt[e], null == c.color ? (c.color = a[d].toString(), ++d) : "number" == typeof c.color && (c.color = a[c.color].toString()), null == c.lines.show) {
                            var u, g = !0;
                            for (u in c)
                                if (c[u] && c[u].show) {
                                    g = !1;
                                    break
                                } g && (c.lines.show = !0)
                        }
                        null == c.lines.zero && (c.lines.zero = !!c.lines.fill), c.xaxis = f(st, p(c, "x")), c.yaxis = f(lt, p(c, "y"))
                    }
                }

                function v() {
                    function e(t, e, i) {
                        e < t.datamin && e != -x && (t.datamin = e), i > t.datamax && i != x && (t.datamax = i)
                    }
                    var i, o, r, n, a, s, h, c, p, u, g, f, m = Number.POSITIVE_INFINITY,
                        v = Number.NEGATIVE_INFINITY,
                        x = Number.MAX_VALUE;
                    for (t.each(d(), function(t, e) {
                            e.datamin = m, e.datamax = v, e.used = !1
                        }), i = 0; i < tt.length; ++i) a = tt[i], a.datapoints = {
                        points: []
                    }, l(dt.processRawData, [a, a.data, a.datapoints]);
                    for (i = 0; i < tt.length; ++i) {
                        if (a = tt[i], g = a.data, !(f = a.datapoints.format)) {
                            if (f = [], f.push({
                                    x: !0,
                                    number: !0,
                                    required: !0
                                }), f.push({
                                    y: !0,
                                    number: !0,
                                    required: !0
                                }), a.bars.show || a.lines.show && a.lines.fill) {
                                var b = !!(a.bars.show && a.bars.zero || a.lines.show && a.lines.zero);
                                f.push({
                                    y: !0,
                                    number: !0,
                                    required: !1,
                                    defaultValue: 0,
                                    autoscale: b
                                }), a.bars.horizontal && (delete f[f.length - 1].y, f[f.length - 1].x = !0)
                            }
                            a.datapoints.format = f
                        }
                        if (null == a.datapoints.pointsize) {
                            a.datapoints.pointsize = f.length, h = a.datapoints.pointsize, s = a.datapoints.points;
                            var y = a.lines.show && a.lines.steps;
                            for (a.xaxis.used = a.yaxis.used = !0, o = r = 0; o < g.length; ++o, r += h) {
                                u = g[o];
                                var w = null == u;
                                if (!w)
                                    for (n = 0; n < h; ++n) c = u[n], p = f[n], p && (p.number && null != c && (c = +c, isNaN(c) ? c = null : c == 1 / 0 ? c = x : c == -1 / 0 && (c = -x)), null == c && (p.required && (w = !0), null != p.defaultValue && (c = p.defaultValue))), s[r + n] = c;
                                if (w)
                                    for (n = 0; n < h; ++n) c = s[r + n], null != c && (p = f[n], !1 !== p.autoscale && (p.x && e(a.xaxis, c, c), p.y && e(a.yaxis, c, c))), s[r + n] = null;
                                else if (y && r > 0 && null != s[r - h] && s[r - h] != s[r] && s[r - h + 1] != s[r + 1]) {
                                    for (n = 0; n < h; ++n) s[r + h + n] = s[r + n];
                                    s[r + 1] = s[r - h + 1], r += h
                                }
                            }
                        }
                    }
                    for (i = 0; i < tt.length; ++i) a = tt[i], l(dt.processDatapoints, [a, a.datapoints]);
                    for (i = 0; i < tt.length; ++i) {
                        a = tt[i], s = a.datapoints.points, h = a.datapoints.pointsize, f = a.datapoints.format;
                        var k = m,
                            C = m,
                            S = v,
                            M = v;
                        for (o = 0; o < s.length; o += h)
                            if (null != s[o])
                                for (n = 0; n < h; ++n) c = s[o + n], (p = f[n]) && !1 !== p.autoscale && c != x && c != -x && (p.x && (c < k && (k = c), c > S && (S = c)), p.y && (c < C && (C = c), c > M && (M = c)));
                        if (a.bars.show) {
                            var T;
                            switch (a.bars.align) {
                                case "left":
                                    T = 0;
                                    break;
                                case "right":
                                    T = -a.bars.barWidth;
                                    break;
                                default:
                                    T = -a.bars.barWidth / 2
                            }
                            a.bars.horizontal ? (C += T, M += T + a.bars.barWidth) : (k += T, S += T + a.bars.barWidth)
                        }
                        e(a.xaxis, k, S), e(a.yaxis, C, M)
                    }
                    t.each(d(), function(t, e) {
                        e.datamin == m && (e.datamin = null), e.datamax == v && (e.datamax = null)
                    })
                }

                function x() {
                    ft && clearTimeout(ft), rt.unbind("mousemove", N), rt.unbind("mouseleave", E), rt.unbind("click", G), l(dt.shutdown, [rt])
                }

                function b(t) {
                    function e(t) {
                        return t
                    }
                    var i, o, r = t.options.transform || e,
                        n = t.options.inverseTransform;
                    "x" == t.direction ? (i = t.scale = ct / Math.abs(r(t.max) - r(t.min)), o = Math.min(r(t.max), r(t.min))) : (i = t.scale = pt / Math.abs(r(t.max) - r(t.min)), i = -i, o = Math.max(r(t.max), r(t.min))), t.p2c = r == e ? function(t) {
                        return (t - o) * i
                    } : function(t) {
                        return (r(t) - o) * i
                    }, t.c2p = n ? function(t) {
                        return n(o + t / i)
                    } : function(t) {
                        return o + t / i
                    }
                }

                function y(t) {
                    for (var e = t.options, i = t.ticks || [], o = e.labelWidth || 0, r = e.labelHeight || 0, n = o || ("x" == t.direction ? Math.floor(it.width / (i.length || 1)) : null), a = t.direction + "Axis " + t.direction + t.n + "Axis", s = "flot-" + t.direction + "-axis flot-" + t.direction + t.n + "-axis " + a, l = e.font || "flot-tick-label tickLabel", h = 0; h < i.length; ++h) {
                        var c = i[h];
                        if (c.label) {
                            var p = it.getTextInfo(s, c.label, l, null, n);
                            o = Math.max(o, p.width), r = Math.max(r, p.height)
                        }
                    }
                    t.labelWidth = e.labelWidth || o, t.labelHeight = e.labelHeight || r
                }

                function w(e) {
                    var i = e.labelWidth,
                        o = e.labelHeight,
                        r = e.options.position,
                        n = "x" === e.direction,
                        a = e.options.tickLength,
                        s = et.grid.axisMargin,
                        l = et.grid.labelMargin,
                        h = !0,
                        c = !0,
                        p = !0,
                        d = !1;
                    t.each(n ? st : lt, function(t, i) {
                        i && (i.show || i.reserveSpace) && (i === e ? d = !0 : i.options.position === r && (d ? c = !1 : h = !1), d || (p = !1))
                    }), c && (s = 0), null == a && (a = p ? "full" : 5), isNaN(+a) || (l += +a), n ? (o += l, "bottom" == r ? (ht.bottom += o + s, e.box = {
                        top: it.height - ht.bottom,
                        height: o
                    }) : (e.box = {
                        top: ht.top + s,
                        height: o
                    }, ht.top += o + s)) : (i += l, "left" == r ? (e.box = {
                        left: ht.left + s,
                        width: i
                    }, ht.left += i + s) : (ht.right += i + s, e.box = {
                        left: it.width - ht.right,
                        width: i
                    })), e.position = r, e.tickLength = a, e.box.padding = l, e.innermost = h
                }

                function k(t) {
                    "x" == t.direction ? (t.box.left = ht.left - t.labelWidth / 2, t.box.width = it.width - ht.left - ht.right + t.labelWidth) : (t.box.top = ht.top - t.labelHeight / 2, t.box.height = it.height - ht.bottom - ht.top + t.labelHeight)
                }

                function C() {
                    var e, i = et.grid.minBorderMargin;
                    if (null == i)
                        for (i = 0, e = 0; e < tt.length; ++e) i = Math.max(i, 2 * (tt[e].points.radius + tt[e].points.lineWidth / 2));
                    var o = {
                        left: i,
                        right: i,
                        top: i,
                        bottom: i
                    };
                    t.each(d(), function(t, e) {
                        e.reserveSpace && e.ticks && e.ticks.length && ("x" === e.direction ? (o.left = Math.max(o.left, e.labelWidth / 2), o.right = Math.max(o.right, e.labelWidth / 2)) : (o.bottom = Math.max(o.bottom, e.labelHeight / 2), o.top = Math.max(o.top, e.labelHeight / 2)))
                    }), ht.left = Math.ceil(Math.max(o.left, ht.left)), ht.right = Math.ceil(Math.max(o.right, ht.right)), ht.top = Math.ceil(Math.max(o.top, ht.top)), ht.bottom = Math.ceil(Math.max(o.bottom, ht.bottom))
                }

                function S() {
                    var e, o = d(),
                        r = et.grid.show;
                    for (var n in ht) {
                        var a = et.grid.margin || 0;
                        ht[n] = "number" == typeof a ? a : a[n] || 0
                    }
                    l(dt.processOffset, [ht]);
                    for (var n in ht) "object" == i(et.grid.borderWidth) ? ht[n] += r ? et.grid.borderWidth[n] : 0 : ht[n] += r ? et.grid.borderWidth : 0;
                    if (t.each(o, function(t, e) {
                            var i = e.options;
                            e.show = null == i.show ? e.used : i.show, e.reserveSpace = null == i.reserveSpace ? e.show : i.reserveSpace, M(e)
                        }), r) {
                        var s = t.grep(o, function(t) {
                            return t.show || t.reserveSpace
                        });
                        for (t.each(s, function(t, e) {
                                T(e), R(e), A(e, e.ticks), y(e)
                            }), e = s.length - 1; e >= 0; --e) w(s[e]);
                        C(), t.each(s, function(t, e) {
                            k(e)
                        })
                    }
                    ct = it.width - ht.left - ht.right, pt = it.height - ht.bottom - ht.top, t.each(o, function(t, e) {
                        b(e)
                    }), r && z(), D()
                }

                function M(t) {
                    var e = t.options,
                        i = +(null != e.min ? e.min : t.datamin),
                        o = +(null != e.max ? e.max : t.datamax),
                        r = o - i;
                    if (0 == r) {
                        var n = 0 == o ? 1 : .01;
                        null == e.min && (i -= n), null != e.max && null == e.min || (o += n)
                    } else {
                        var a = e.autoscaleMargin;
                        null != a && (null == e.min && (i -= r * a) < 0 && null != t.datamin && t.datamin >= 0 && (i = 0), null == e.max && (o += r * a) > 0 && null != t.datamax && t.datamax <= 0 && (o = 0))
                    }
                    t.min = i, t.max = o
                }

                function T(e) {
                    var i, o = e.options;
                    i = "number" == typeof o.ticks && o.ticks > 0 ? o.ticks : .3 * Math.sqrt("x" == e.direction ? it.width : it.height);
                    var n = (e.max - e.min) / i,
                        a = -Math.floor(Math.log(n) / Math.LN10),
                        s = o.tickDecimals;
                    null != s && a > s && (a = s);
                    var l, h = Math.pow(10, -a),
                        c = n / h;
                    if (c < 1.5 ? l = 1 : c < 3 ? (l = 2, c > 2.25 && (null == s || a + 1 <= s) && (l = 2.5, ++a)) : l = c < 7.5 ? 5 : 10, l *= h, null != o.minTickSize && l < o.minTickSize && (l = o.minTickSize), e.delta = n, e.tickDecimals = Math.max(0, null != s ? s : a), e.tickSize = o.tickSize || l, "time" == o.mode && !e.tickGenerator) throw new Error("Time mode requires the flot.time plugin.");
                    if (e.tickGenerator || (e.tickGenerator = function(t) {
                            var e, i = [],
                                o = r(t.min, t.tickSize),
                                n = 0,
                                a = Number.NaN;
                            do {
                                e = a, a = o + n * t.tickSize, i.push(a), ++n
                            } while (a < t.max && a != e);
                            return i
                        }, e.tickFormatter = function(t, e) {
                            var i = e.tickDecimals ? Math.pow(10, e.tickDecimals) : 1,
                                o = "" + Math.round(t * i) / i;
                            if (null != e.tickDecimals) {
                                var r = o.indexOf("."),
                                    n = -1 == r ? 0 : o.length - r - 1;
                                if (n < e.tickDecimals) return (n ? o : o + ".") + ("" + i).substr(1, e.tickDecimals - n)
                            }
                            return o
                        }), t.isFunction(o.tickFormatter) && (e.tickFormatter = function(t, e) {
                            return "" + o.tickFormatter(t, e)
                        }), null != o.alignTicksWithAxis) {
                        var p = ("x" == e.direction ? st : lt)[o.alignTicksWithAxis - 1];
                        if (p && p.used && p != e) {
                            var d = e.tickGenerator(e);
                            if (d.length > 0 && (null == o.min && (e.min = Math.min(e.min, d[0])), null == o.max && d.length > 1 && (e.max = Math.max(e.max, d[d.length - 1]))), e.tickGenerator = function(t) {
                                    var e, i, o = [];
                                    for (i = 0; i < p.ticks.length; ++i) e = (p.ticks[i].v - p.min) / (p.max - p.min), e = t.min + e * (t.max - t.min), o.push(e);
                                    return o
                                }, !e.mode && null == o.tickDecimals) {
                                var u = Math.max(0, 1 - Math.floor(Math.log(e.delta) / Math.LN10)),
                                    g = e.tickGenerator(e);
                                g.length > 1 && /\..*0$/.test((g[1] - g[0]).toFixed(u)) || (e.tickDecimals = u)
                            }
                        }
                    }
                }

                function R(e) {
                    var o = e.options.ticks,
                        r = [];
                    null == o || "number" == typeof o && o > 0 ? r = e.tickGenerator(e) : o && (r = t.isFunction(o) ? o(e) : o);
                    var n, a;
                    for (e.ticks = [], n = 0; n < r.length; ++n) {
                        var s = null,
                            l = r[n];
                        "object" == (void 0 === l ? "undefined" : i(l)) ? (a = +l[0], l.length > 1 && (s = l[1])) : a = +l, null == s && (s = e.tickFormatter(a, e)), isNaN(a) || e.ticks.push({
                            v: a,
                            label: s
                        })
                    }
                }

                function A(t, e) {
                    t.options.autoscaleMargin && e.length > 0 && (null == t.options.min && (t.min = Math.min(t.min, e[0].v)), null == t.options.max && e.length > 1 && (t.max = Math.max(t.max, e[e.length - 1].v)))
                }

                function W() {
                    it.clear(), l(dt.drawBackground, [nt]);
                    var t = et.grid;
                    t.show && t.backgroundColor && P(), t.show && !t.aboveData && _();
                    for (var e = 0; e < tt.length; ++e) l(dt.drawSeries, [nt, tt[e]]), F(tt[e]);
                    l(dt.draw, [nt]), t.show && t.aboveData && _(), it.render(), X()
                }

                function I(t, e) {
                    for (var i, o, r, n, a = d(), s = 0; s < a.length; ++s)
                        if (i = a[s], i.direction == e && (n = e + i.n + "axis", t[n] || 1 != i.n || (n = e + "axis"), t[n])) {
                            o = t[n].from, r = t[n].to;
                            break
                        } if (t[n] || (i = "x" == e ? st[0] : lt[0], o = t[e + "1"], r = t[e + "2"]), null != o && null != r && o > r) {
                        var l = o;
                        o = r, r = l
                    }
                    return {
                        from: o,
                        to: r,
                        axis: i
                    }
                }

                function P() {
                    nt.save(), nt.translate(ht.left, ht.top), nt.fillStyle = Z(et.grid.backgroundColor, pt, 0, "rgba(255, 255, 255, 0)"), nt.fillRect(0, 0, ct, pt), nt.restore()
                }

                function _() {
                    var e, o, r, n;
                    nt.save(), nt.translate(ht.left, ht.top);
                    var a = et.grid.markings;
                    if (a)
                        for (t.isFunction(a) && (o = ut.getAxes(), o.xmin = o.xaxis.min, o.xmax = o.xaxis.max, o.ymin = o.yaxis.min, o.ymax = o.yaxis.max, a = a(o)), e = 0; e < a.length; ++e) {
                            var s = a[e],
                                l = I(s, "x"),
                                h = I(s, "y");
                            if (null == l.from && (l.from = l.axis.min), null == l.to && (l.to = l.axis.max), null == h.from && (h.from = h.axis.min), null == h.to && (h.to = h.axis.max), !(l.to < l.axis.min || l.from > l.axis.max || h.to < h.axis.min || h.from > h.axis.max)) {
                                l.from = Math.max(l.from, l.axis.min), l.to = Math.min(l.to, l.axis.max), h.from = Math.max(h.from, h.axis.min), h.to = Math.min(h.to, h.axis.max);
                                var c = l.from === l.to,
                                    p = h.from === h.to;
                                if (!c || !p)
                                    if (l.from = Math.floor(l.axis.p2c(l.from)), l.to = Math.floor(l.axis.p2c(l.to)), h.from = Math.floor(h.axis.p2c(h.from)), h.to = Math.floor(h.axis.p2c(h.to)), c || p) {
                                        var u = s.lineWidth || et.grid.markingsLineWidth,
                                            g = u % 2 ? .5 : 0;
                                        nt.beginPath(), nt.strokeStyle = s.color || et.grid.markingsColor, nt.lineWidth = u, c ? (nt.moveTo(l.to + g, h.from), nt.lineTo(l.to + g, h.to)) : (nt.moveTo(l.from, h.to + g), nt.lineTo(l.to, h.to + g)), nt.stroke()
                                    } else nt.fillStyle = s.color || et.grid.markingsColor, nt.fillRect(l.from, h.to, l.to - l.from, h.from - h.to)
                            }
                        }
                    o = d(), r = et.grid.borderWidth;
                    for (var f = 0; f < o.length; ++f) {
                        var m, v, x, b, y = o[f],
                            w = y.box,
                            k = y.tickLength;
                        if (y.show && 0 != y.ticks.length) {
                            for (nt.lineWidth = 1, "x" == y.direction ? (m = 0, v = "full" == k ? "top" == y.position ? 0 : pt : w.top - ht.top + ("top" == y.position ? w.height : 0)) : (v = 0, m = "full" == k ? "left" == y.position ? 0 : ct : w.left - ht.left + ("left" == y.position ? w.width : 0)), y.innermost || (nt.strokeStyle = y.options.color, nt.beginPath(), x = b = 0, "x" == y.direction ? x = ct + 1 : b = pt + 1, 1 == nt.lineWidth && ("x" == y.direction ? v = Math.floor(v) + .5 : m = Math.floor(m) + .5), nt.moveTo(m, v), nt.lineTo(m + x, v + b), nt.stroke()), nt.strokeStyle = y.options.tickColor, nt.beginPath(), e = 0; e < y.ticks.length; ++e) {
                                var C = y.ticks[e].v;
                                x = b = 0, isNaN(C) || C < y.min || C > y.max || "full" == k && ("object" == (void 0 === r ? "undefined" : i(r)) && r[y.position] > 0 || r > 0) && (C == y.min || C == y.max) || ("x" == y.direction ? (m = y.p2c(C), b = "full" == k ? -pt : k, "top" == y.position && (b = -b)) : (v = y.p2c(C), x = "full" == k ? -ct : k, "left" == y.position && (x = -x)), 1 == nt.lineWidth && ("x" == y.direction ? m = Math.floor(m) + .5 : v = Math.floor(v) + .5), nt.moveTo(m, v), nt.lineTo(m + x, v + b))
                            }
                            nt.stroke()
                        }
                    }
                    r && (n = et.grid.borderColor, "object" == (void 0 === r ? "undefined" : i(r)) || "object" == (void 0 === n ? "undefined" : i(n)) ? ("object" !== (void 0 === r ? "undefined" : i(r)) && (r = {
                        top: r,
                        right: r,
                        bottom: r,
                        left: r
                    }), "object" !== (void 0 === n ? "undefined" : i(n)) && (n = {
                        top: n,
                        right: n,
                        bottom: n,
                        left: n
                    }), r.top > 0 && (nt.strokeStyle = n.top, nt.lineWidth = r.top, nt.beginPath(), nt.moveTo(0 - r.left, 0 - r.top / 2), nt.lineTo(ct, 0 - r.top / 2), nt.stroke()), r.right > 0 && (nt.strokeStyle = n.right, nt.lineWidth = r.right, nt.beginPath(), nt.moveTo(ct + r.right / 2, 0 - r.top), nt.lineTo(ct + r.right / 2, pt), nt.stroke()), r.bottom > 0 && (nt.strokeStyle = n.bottom, nt.lineWidth = r.bottom, nt.beginPath(), nt.moveTo(ct + r.right, pt + r.bottom / 2), nt.lineTo(0, pt + r.bottom / 2), nt.stroke()), r.left > 0 && (nt.strokeStyle = n.left, nt.lineWidth = r.left, nt.beginPath(), nt.moveTo(0 - r.left / 2, pt + r.bottom), nt.lineTo(0 - r.left / 2, 0), nt.stroke())) : (nt.lineWidth = r, nt.strokeStyle = et.grid.borderColor, nt.strokeRect(-r / 2, -r / 2, ct + r, pt + r))), nt.restore()
                }

                function z() {
                    t.each(d(), function(t, e) {
                        var i, o, r, n, a, s = e.box,
                            l = e.direction + "Axis " + e.direction + e.n + "Axis",
                            h = "flot-" + e.direction + "-axis flot-" + e.direction + e.n + "-axis " + l,
                            c = e.options.font || "flot-tick-label tickLabel";
                        if (it.removeText(h), e.show && 0 != e.ticks.length)
                            for (var p = 0; p < e.ticks.length; ++p) i = e.ticks[p], !i.label || i.v < e.min || i.v > e.max || ("x" == e.direction ? (n = "center", o = ht.left + e.p2c(i.v), "bottom" == e.position ? r = s.top + s.padding : (r = s.top + s.height - s.padding, a = "bottom")) : (a = "middle", r = ht.top + e.p2c(i.v), "left" == e.position ? (o = s.left + s.width - s.padding, n = "right") : o = s.left + s.padding), it.addText(h, o, r, i.label, c, null, null, n, a))
                    })
                }

                function F(t) {
                    t.lines.show && O(t), t.bars.show && B(t), t.points.show && H(t)
                }

                function O(t) {
                    function e(t, e, i, o, r) {
                        var n = t.points,
                            a = t.pointsize,
                            s = null,
                            l = null;
                        nt.beginPath();
                        for (var h = a; h < n.length; h += a) {
                            var c = n[h - a],
                                p = n[h - a + 1],
                                d = n[h],
                                u = n[h + 1];
                            if (null != c && null != d) {
                                if (p <= u && p < r.min) {
                                    if (u < r.min) continue;
                                    c = (r.min - p) / (u - p) * (d - c) + c, p = r.min
                                } else if (u <= p && u < r.min) {
                                    if (p < r.min) continue;
                                    d = (r.min - p) / (u - p) * (d - c) + c, u = r.min
                                }
                                if (p >= u && p > r.max) {
                                    if (u > r.max) continue;
                                    c = (r.max - p) / (u - p) * (d - c) + c, p = r.max
                                } else if (u >= p && u > r.max) {
                                    if (p > r.max) continue;
                                    d = (r.max - p) / (u - p) * (d - c) + c, u = r.max
                                }
                                if (c <= d && c < o.min) {
                                    if (d < o.min) continue;
                                    p = (o.min - c) / (d - c) * (u - p) + p, c = o.min
                                } else if (d <= c && d < o.min) {
                                    if (c < o.min) continue;
                                    u = (o.min - c) / (d - c) * (u - p) + p, d = o.min
                                }
                                if (c >= d && c > o.max) {
                                    if (d > o.max) continue;
                                    p = (o.max - c) / (d - c) * (u - p) + p, c = o.max
                                } else if (d >= c && d > o.max) {
                                    if (c > o.max) continue;
                                    u = (o.max - c) / (d - c) * (u - p) + p, d = o.max
                                }
                                c == s && p == l || nt.moveTo(o.p2c(c) + e, r.p2c(p) + i), s = d, l = u, nt.lineTo(o.p2c(d) + e, r.p2c(u) + i)
                            }
                        }
                        nt.stroke()
                    }
                    nt.save(), nt.translate(ht.left, ht.top), nt.lineJoin = "round";
                    var i = t.lines.lineWidth,
                        o = t.shadowSize;
                    if (i > 0 && o > 0) {
                        nt.lineWidth = o, nt.strokeStyle = "rgba(0,0,0,0.1)";
                        var r = Math.PI / 18;
                        e(t.datapoints, Math.sin(r) * (i / 2 + o / 2), Math.cos(r) * (i / 2 + o / 2), t.xaxis, t.yaxis), nt.lineWidth = o / 2, e(t.datapoints, Math.sin(r) * (i / 2 + o / 4), Math.cos(r) * (i / 2 + o / 4), t.xaxis, t.yaxis)
                    }
                    nt.lineWidth = i, nt.strokeStyle = t.color;
                    var n = q(t.lines, t.color, 0, pt);
                    n && (nt.fillStyle = n, function(t, e, i) {
                        for (var o = t.points, r = t.pointsize, n = Math.min(Math.max(0, i.min), i.max), a = 0, s = !1, l = 1, h = 0, c = 0; !(r > 0 && a > o.length + r);) {
                            a += r;
                            var p = o[a - r],
                                d = o[a - r + l],
                                u = o[a],
                                g = o[a + l];
                            if (s) {
                                if (r > 0 && null != p && null == u) {
                                    c = a, r = -r, l = 2;
                                    continue
                                }
                                if (r < 0 && a == h + r) {
                                    nt.fill(), s = !1, r = -r, l = 1, a = h = c + r;
                                    continue
                                }
                            }
                            if (null != p && null != u) {
                                if (p <= u && p < e.min) {
                                    if (u < e.min) continue;
                                    d = (e.min - p) / (u - p) * (g - d) + d, p = e.min
                                } else if (u <= p && u < e.min) {
                                    if (p < e.min) continue;
                                    g = (e.min - p) / (u - p) * (g - d) + d, u = e.min
                                }
                                if (p >= u && p > e.max) {
                                    if (u > e.max) continue;
                                    d = (e.max - p) / (u - p) * (g - d) + d, p = e.max
                                } else if (u >= p && u > e.max) {
                                    if (p > e.max) continue;
                                    g = (e.max - p) / (u - p) * (g - d) + d, u = e.max
                                }
                                if (s || (nt.beginPath(), nt.moveTo(e.p2c(p), i.p2c(n)), s = !0), d >= i.max && g >= i.max) nt.lineTo(e.p2c(p), i.p2c(i.max)), nt.lineTo(e.p2c(u), i.p2c(i.max));
                                else if (d <= i.min && g <= i.min) nt.lineTo(e.p2c(p), i.p2c(i.min)), nt.lineTo(e.p2c(u), i.p2c(i.min));
                                else {
                                    var f = p,
                                        m = u;
                                    d <= g && d < i.min && g >= i.min ? (p = (i.min - d) / (g - d) * (u - p) + p, d = i.min) : g <= d && g < i.min && d >= i.min && (u = (i.min - d) / (g - d) * (u - p) + p, g = i.min), d >= g && d > i.max && g <= i.max ? (p = (i.max - d) / (g - d) * (u - p) + p, d = i.max) : g >= d && g > i.max && d <= i.max && (u = (i.max - d) / (g - d) * (u - p) + p, g = i.max), p != f && nt.lineTo(e.p2c(f), i.p2c(d)), nt.lineTo(e.p2c(p), i.p2c(d)), nt.lineTo(e.p2c(u), i.p2c(g)), u != m && (nt.lineTo(e.p2c(u), i.p2c(g)), nt.lineTo(e.p2c(m), i.p2c(g)))
                                }
                            }
                        }
                    }(t.datapoints, t.xaxis, t.yaxis)), i > 0 && e(t.datapoints, 0, 0, t.xaxis, t.yaxis), nt.restore()
                }

                function H(t) {
                    function e(t, e, i, o, r, n, a, s) {
                        for (var l = t.points, h = t.pointsize, c = 0; c < l.length; c += h) {
                            var p = l[c],
                                d = l[c + 1];
                            null == p || p < n.min || p > n.max || d < a.min || d > a.max || (nt.beginPath(), p = n.p2c(p), d = a.p2c(d) + o, "circle" == s ? nt.arc(p, d, e, 0, r ? Math.PI : 2 * Math.PI, !1) : s(nt, p, d, e, r), nt.closePath(), i && (nt.fillStyle = i, nt.fill()), nt.stroke())
                        }
                    }
                    nt.save(), nt.translate(ht.left, ht.top);
                    var i = t.points.lineWidth,
                        o = t.shadowSize,
                        r = t.points.radius,
                        n = t.points.symbol;
                    if (0 == i && (i = 1e-4), i > 0 && o > 0) {
                        var a = o / 2;
                        nt.lineWidth = a, nt.strokeStyle = "rgba(0,0,0,0.1)", e(t.datapoints, r, null, a + a / 2, !0, t.xaxis, t.yaxis, n), nt.strokeStyle = "rgba(0,0,0,0.2)", e(t.datapoints, r, null, a / 2, !0, t.xaxis, t.yaxis, n)
                    }
                    nt.lineWidth = i, nt.strokeStyle = t.color, e(t.datapoints, r, q(t.points, t.color), 0, !1, t.xaxis, t.yaxis, n), nt.restore()
                }

                function L(t, e, i, o, r, n, a, s, l, h, c) {
                    var p, d, u, g, f, m, v, x, b;
                    h ? (x = m = v = !0, f = !1, p = i, d = t, g = e + o, u = e + r, d < p && (b = d, d = p, p = b, f = !0, m = !1)) : (f = m = v = !0, x = !1, p = t + o, d = t + r, u = i, (g = e) < u && (b = g, g = u, u = b, x = !0, v = !1)), d < a.min || p > a.max || g < s.min || u > s.max || (p < a.min && (p = a.min, f = !1), d > a.max && (d = a.max, m = !1), u < s.min && (u = s.min, x = !1), g > s.max && (g = s.max, v = !1), p = a.p2c(p), u = s.p2c(u), d = a.p2c(d), g = s.p2c(g), n && (l.fillStyle = n(u, g), l.fillRect(p, g, d - p, u - g)), c > 0 && (f || m || v || x) && (l.beginPath(), l.moveTo(p, u), f ? l.lineTo(p, g) : l.moveTo(p, g), v ? l.lineTo(d, g) : l.moveTo(d, g), m ? l.lineTo(d, u) : l.moveTo(d, u), x ? l.lineTo(p, u) : l.moveTo(p, u), l.stroke()))
                }

                function B(t) {
                    nt.save(), nt.translate(ht.left, ht.top), nt.lineWidth = t.bars.lineWidth, nt.strokeStyle = t.color;
                    var e;
                    switch (t.bars.align) {
                        case "left":
                            e = 0;
                            break;
                        case "right":
                            e = -t.bars.barWidth;
                            break;
                        default:
                            e = -t.bars.barWidth / 2
                    }
                    var i = t.bars.fill ? function(e, i) {
                        return q(t.bars, t.color, e, i)
                    } : null;
                    ! function(e, i, o, r, n, a) {
                        for (var s = e.points, l = e.pointsize, h = 0; h < s.length; h += l) null != s[h] && L(s[h], s[h + 1], s[h + 2], i, o, r, n, a, nt, t.bars.horizontal, t.bars.lineWidth)
                    }(t.datapoints, e, e + t.bars.barWidth, i, t.xaxis, t.yaxis), nt.restore()
                }

                function q(e, i, o, r) {
                    var n = e.fill;
                    if (!n) return null;
                    if (e.fillColor) return Z(e.fillColor, o, r, i);
                    var a = t.color.parse(i);
                    return a.a = "number" == typeof n ? n : .4, a.normalize(), a.toString()
                }

                function D() {
                    if (null != et.legend.container ? t(et.legend.container).html("") : o.find(".legend").remove(), et.legend.show) {
                        for (var e, i, r = [], n = [], a = !1, s = et.legend.labelFormatter, l = 0; l < tt.length; ++l) e = tt[l], e.label && (i = s ? s(e.label, e) : e.label) && n.push({
                            label: i,
                            color: e.color
                        });
                        if (et.legend.sorted)
                            if (t.isFunction(et.legend.sorted)) n.sort(et.legend.sorted);
                            else if ("reverse" == et.legend.sorted) n.reverse();
                        else {
                            var h = "descending" != et.legend.sorted;
                            n.sort(function(t, e) {
                                return t.label == e.label ? 0 : t.label < e.label != h ? 1 : -1
                            })
                        }
                        for (var l = 0; l < n.length; ++l) {
                            var c = n[l];
                            l % et.legend.noColumns == 0 && (a && r.push("</tr>"), r.push("<tr>"), a = !0), r.push('<td class="legendColorBox"><div style="border:1px solid ' + et.legend.labelBoxBorderColor + ';padding:1px"><div style="width:4px;height:0;border:5px solid ' + c.color + ';overflow:hidden"></div></div></td><td class="legendLabel">' + c.label + "</td>")
                        }
                        if (a && r.push("</tr>"), 0 != r.length) {
                            var p = '<table style="font-size:smaller;color:' + et.grid.color + '">' + r.join("") + "</table>";
                            if (null != et.legend.container) t(et.legend.container).html(p);
                            else {
                                var d = "",
                                    u = et.legend.position,
                                    g = et.legend.margin;
                                null == g[0] && (g = [g, g]), "n" == u.charAt(0) ? d += "top:" + (g[1] + ht.top) + "px;" : "s" == u.charAt(0) && (d += "bottom:" + (g[1] + ht.bottom) + "px;"), "e" == u.charAt(1) ? d += "right:" + (g[0] + ht.right) + "px;" : "w" == u.charAt(1) && (d += "left:" + (g[0] + ht.left) + "px;");
                                var f = t('<div class="legend">' + p.replace('style="', 'style="position:absolute;' + d + ";") + "</div>").appendTo(o);
                                if (0 != et.legend.backgroundOpacity) {
                                    var m = et.legend.backgroundColor;
                                    null == m && (m = et.grid.backgroundColor, m = m && "string" == typeof m ? t.color.parse(m) : t.color.extract(f, "background-color"), m.a = 1, m = m.toString());
                                    var v = f.children();
                                    t('<div style="position:absolute;width:' + v.width() + "px;height:" + v.height() + "px;" + d + "background-color:" + m + ';"> </div>').prependTo(f).css("opacity", et.legend.backgroundOpacity)
                                }
                            }
                        }
                    }
                }

                function j(t, e, i) {
                    var o, r, n, a = et.grid.mouseActiveRadius,
                        s = a * a + 1,
                        l = null;
                    for (o = tt.length - 1; o >= 0; --o)
                        if (i(tt[o])) {
                            var h = tt[o],
                                c = h.xaxis,
                                p = h.yaxis,
                                d = h.datapoints.points,
                                u = c.c2p(t),
                                g = p.c2p(e),
                                f = a / c.scale,
                                m = a / p.scale;
                            if (n = h.datapoints.pointsize, c.options.inverseTransform && (f = Number.MAX_VALUE), p.options.inverseTransform && (m = Number.MAX_VALUE), h.lines.show || h.points.show)
                                for (r = 0; r < d.length; r += n) {
                                    var v = d[r],
                                        x = d[r + 1];
                                    if (null != v && !(v - u > f || v - u < -f || x - g > m || x - g < -m)) {
                                        var b = Math.abs(c.p2c(v) - t),
                                            y = Math.abs(p.p2c(x) - e),
                                            w = b * b + y * y;
                                        w < s && (s = w, l = [o, r / n])
                                    }
                                }
                            if (h.bars.show && !l) {
                                var k, C;
                                switch (h.bars.align) {
                                    case "left":
                                        k = 0;
                                        break;
                                    case "right":
                                        k = -h.bars.barWidth;
                                        break;
                                    default:
                                        k = -h.bars.barWidth / 2
                                }
                                for (C = k + h.bars.barWidth, r = 0; r < d.length; r += n) {
                                    var v = d[r],
                                        x = d[r + 1],
                                        S = d[r + 2];
                                    null != v && (tt[o].bars.horizontal ? u <= Math.max(S, v) && u >= Math.min(S, v) && g >= x + k && g <= x + C : u >= v + k && u <= v + C && g >= Math.min(S, x) && g <= Math.max(S, x)) && (l = [o, r / n])
                                }
                            }
                        } return l ? (o = l[0], r = l[1], n = tt[o].datapoints.pointsize, {
                        datapoint: tt[o].datapoints.points.slice(r * n, (r + 1) * n),
                        dataIndex: r,
                        series: tt[o],
                        seriesIndex: o
                    }) : null
                }

                function N(t) {
                    et.grid.hoverable && $("plothover", t, function(t) {
                        return 0 != t.hoverable
                    })
                }

                function E(t) {
                    et.grid.hoverable && $("plothover", t, function(t) {
                        return !1
                    })
                }

                function G(t) {
                    $("plotclick", t, function(t) {
                        return 0 != t.clickable
                    })
                }

                function $(t, e, i) {
                    var r = rt.offset(),
                        n = e.pageX - r.left - ht.left,
                        a = e.pageY - r.top - ht.top,
                        s = u({
                            left: n,
                            top: a
                        });
                    s.pageX = e.pageX, s.pageY = e.pageY;
                    var l = j(n, a, i);
                    if (l && (l.pageX = parseInt(l.series.xaxis.p2c(l.datapoint[0]) + r.left + ht.left, 10), l.pageY = parseInt(l.series.yaxis.p2c(l.datapoint[1]) + r.top + ht.top, 10)), et.grid.autoHighlight) {
                        for (var h = 0; h < gt.length; ++h) {
                            var c = gt[h];
                            c.auto != t || l && c.series == l.series && c.point[0] == l.datapoint[0] && c.point[1] == l.datapoint[1] || Q(c.series, c.point)
                        }
                        l && Y(l.series, l.datapoint, t)
                    }
                    o.trigger(t, [s, l])
                }

                function X() {
                    var t = et.interaction.redrawOverlayInterval;
                    if (-1 == t) return void V();
                    ft || (ft = setTimeout(V, t))
                }

                function V() {
                    ft = null, at.save(), ot.clear(), at.translate(ht.left, ht.top);
                    var t, e;
                    for (t = 0; t < gt.length; ++t) e = gt[t], e.series.bars.show ? K(e.series, e.point) : J(e.series, e.point);
                    at.restore(), l(dt.drawOverlay, [at])
                }

                function Y(t, e, i) {
                    if ("number" == typeof t && (t = tt[t]), "number" == typeof e) {
                        var o = t.datapoints.pointsize;
                        e = t.datapoints.points.slice(o * e, o * (e + 1))
                    }
                    var r = U(t, e); - 1 == r ? (gt.push({
                        series: t,
                        point: e,
                        auto: i
                    }), X()) : i || (gt[r].auto = !1)
                }

                function Q(t, e) {
                    if (null == t && null == e) return gt = [], void X();
                    if ("number" == typeof t && (t = tt[t]), "number" == typeof e) {
                        var i = t.datapoints.pointsize;
                        e = t.datapoints.points.slice(i * e, i * (e + 1))
                    }
                    var o = U(t, e); - 1 != o && (gt.splice(o, 1), X())
                }

                function U(t, e) {
                    for (var i = 0; i < gt.length; ++i) {
                        var o = gt[i];
                        if (o.series == t && o.point[0] == e[0] && o.point[1] == e[1]) return i
                    }
                    return -1
                }

                function J(e, i) {
                    var o = i[0],
                        r = i[1],
                        n = e.xaxis,
                        a = e.yaxis,
                        s = "string" == typeof e.highlightColor ? e.highlightColor : t.color.parse(e.color).scale("a", .5).toString();
                    if (!(o < n.min || o > n.max || r < a.min || r > a.max)) {
                        var l = e.points.radius + e.points.lineWidth / 2;
                        at.lineWidth = l, at.strokeStyle = s;
                        var h = 1.5 * l;
                        o = n.p2c(o), r = a.p2c(r), at.beginPath(), "circle" == e.points.symbol ? at.arc(o, r, h, 0, 2 * Math.PI, !1) : e.points.symbol(at, o, r, h, !1), at.closePath(), at.stroke()
                    }
                }

                function K(e, i) {
                    var o, r = "string" == typeof e.highlightColor ? e.highlightColor : t.color.parse(e.color).scale("a", .5).toString(),
                        n = r;
                    switch (e.bars.align) {
                        case "left":
                            o = 0;
                            break;
                        case "right":
                            o = -e.bars.barWidth;
                            break;
                        default:
                            o = -e.bars.barWidth / 2
                    }
                    at.lineWidth = e.bars.lineWidth, at.strokeStyle = r, L(i[0], i[1], i[2] || 0, o, o + e.bars.barWidth, function() {
                        return n
                    }, e.xaxis, e.yaxis, at, e.bars.horizontal, e.bars.lineWidth)
                }

                function Z(e, i, o, r) {
                    if ("string" == typeof e) return e;
                    for (var n = nt.createLinearGradient(0, o, 0, i), a = 0, s = e.colors.length; a < s; ++a) {
                        var l = e.colors[a];
                        if ("string" != typeof l) {
                            var h = t.color.parse(r);
                            null != l.brightness && (h = h.scale("rgb", l.brightness)), null != l.opacity && (h.a *= l.opacity), l = h.toString()
                        }
                        n.addColorStop(a / (s - 1), l)
                    }
                    return n
                }
                var tt = [],
                    et = {
                        colors: ["#edc240", "#afd8f8", "#cb4b4b", "#4da74d", "#9440ed"],
                        legend: {
                            show: !0,
                            noColumns: 1,
                            labelFormatter: null,
                            labelBoxBorderColor: "#ccc",
                            container: null,
                            position: "ne",
                            margin: 5,
                            backgroundColor: null,
                            backgroundOpacity: .85,
                            sorted: null
                        },
                        xaxis: {
                            show: null,
                            position: "bottom",
                            mode: null,
                            font: null,
                            color: null,
                            tickColor: null,
                            transform: null,
                            inverseTransform: null,
                            min: null,
                            max: null,
                            autoscaleMargin: null,
                            ticks: null,
                            tickFormatter: null,
                            labelWidth: null,
                            labelHeight: null,
                            reserveSpace: null,
                            tickLength: null,
                            alignTicksWithAxis: null,
                            tickDecimals: null,
                            tickSize: null,
                            minTickSize: null
                        },
                        yaxis: {
                            autoscaleMargin: .02,
                            position: "left"
                        },
                        xaxes: [],
                        yaxes: [],
                        series: {
                            points: {
                                show: !1,
                                radius: 3,
                                lineWidth: 2,
                                fill: !0,
                                fillColor: "#ffffff",
                                symbol: "circle"
                            },
                            lines: {
                                lineWidth: 2,
                                fill: !1,
                                fillColor: null,
                                steps: !1
                            },
                            bars: {
                                show: !1,
                                lineWidth: 2,
                                barWidth: 1,
                                fill: !0,
                                fillColor: null,
                                align: "left",
                                horizontal: !1,
                                zero: !0
                            },
                            shadowSize: 3,
                            highlightColor: null
                        },
                        grid: {
                            show: !0,
                            aboveData: !1,
                            color: "#545454",
                            backgroundColor: null,
                            borderColor: null,
                            tickColor: null,
                            margin: 0,
                            labelMargin: 5,
                            axisMargin: 8,
                            borderWidth: 2,
                            minBorderMargin: null,
                            markings: null,
                            markingsColor: "#f4f4f4",
                            markingsLineWidth: 2,
                            clickable: !1,
                            hoverable: !1,
                            autoHighlight: !0,
                            mouseActiveRadius: 10
                        },
                        interaction: {
                            redrawOverlayInterval: 1e3 / 60
                        },
                        hooks: {}
                    },
                    it = null,
                    ot = null,
                    rt = null,
                    nt = null,
                    at = null,
                    st = [],
                    lt = [],
                    ht = {
                        left: 0,
                        right: 0,
                        top: 0,
                        bottom: 0
                    },
                    ct = 0,
                    pt = 0,
                    dt = {
                        processOptions: [],
                        processRawData: [],
                        processDatapoints: [],
                        processOffset: [],
                        drawBackground: [],
                        drawSeries: [],
                        draw: [],
                        bindEvents: [],
                        drawOverlay: [],
                        shutdown: []
                    },
                    ut = this;
                ut.setData = h, ut.setupGrid = S, ut.draw = W, ut.getPlaceholder = function() {
                        return o
                    }, ut.getCanvas = function() {
                        return it.element
                    }, ut.getPlotOffset = function() {
                        return ht
                    }, ut.width = function() {
                        return ct
                    }, ut.height = function() {
                        return pt
                    }, ut.offset = function() {
                        var t = rt.offset();
                        return t.left += ht.left, t.top += ht.top, t
                    }, ut.getData = function() {
                        return tt
                    }, ut.getAxes = function() {
                        var e = {};
                        return t.each(st.concat(lt), function(t, i) {
                            i && (e[i.direction + (1 != i.n ? i.n : "") + "axis"] = i)
                        }), e
                    }, ut.getXAxes = function() {
                        return st
                    }, ut.getYAxes = function() {
                        return lt
                    }, ut.c2p = u, ut.p2c = g, ut.getOptions = function() {
                        return et
                    }, ut.highlight = Y, ut.unhighlight = Q, ut.triggerRedrawOverlay = X, ut.pointOffset = function(t) {
                        return {
                            left: parseInt(st[p(t, "x") - 1].p2c(+t.x) + ht.left, 10),
                            top: parseInt(lt[p(t, "y") - 1].p2c(+t.y) + ht.top, 10)
                        }
                    }, ut.shutdown = x, ut.destroy = function() {
                        x(), o.removeData("plot").empty(), tt = [], et = null, it = null, ot = null, rt = null, nt = null, at = null, st = [], lt = [], dt = null, gt = [], ut = null
                    }, ut.resize = function() {
                        var t = o.width(),
                            e = o.height();
                        it.resize(t, e), ot.resize(t, e)
                    }, ut.hooks = dt,
                    function() {
                        for (var i = {
                                Canvas: e
                            }, o = 0; o < s.length; ++o) {
                            var r = s[o];
                            r.init(ut, i), r.options && t.extend(!0, et, r.options)
                        }
                    }(),
                    function(e) {
                        t.extend(!0, et, e), e && e.colors && (et.colors = e.colors), null == et.xaxis.color && (et.xaxis.color = t.color.parse(et.grid.color).scale("a", .22).toString()), null == et.yaxis.color && (et.yaxis.color = t.color.parse(et.grid.color).scale("a", .22).toString()), null == et.xaxis.tickColor && (et.xaxis.tickColor = et.grid.tickColor || et.xaxis.color), null == et.yaxis.tickColor && (et.yaxis.tickColor = et.grid.tickColor || et.yaxis.color), null == et.grid.borderColor && (et.grid.borderColor = et.grid.color), null == et.grid.tickColor && (et.grid.tickColor = t.color.parse(et.grid.color).scale("a", .22).toString());
                        var i, r, n, a = o.css("font-size"),
                            s = a ? +a.replace("px", "") : 13,
                            h = {
                                style: o.css("font-style"),
                                size: Math.round(.8 * s),
                                variant: o.css("font-variant"),
                                weight: o.css("font-weight"),
                                family: o.css("font-family")
                            };
                        for (n = et.xaxes.length || 1, i = 0; i < n; ++i) r = et.xaxes[i], r && !r.tickColor && (r.tickColor = r.color), r = t.extend(!0, {}, et.xaxis, r), et.xaxes[i] = r, r.font && (r.font = t.extend({}, h, r.font), r.font.color || (r.font.color = r.color), r.font.lineHeight || (r.font.lineHeight = Math.round(1.15 * r.font.size)));
                        for (n = et.yaxes.length || 1, i = 0; i < n; ++i) r = et.yaxes[i], r && !r.tickColor && (r.tickColor = r.color), r = t.extend(!0, {}, et.yaxis, r), et.yaxes[i] = r, r.font && (r.font = t.extend({}, h, r.font), r.font.color || (r.font.color = r.color), r.font.lineHeight || (r.font.lineHeight = Math.round(1.15 * r.font.size)));
                        for (et.xaxis.noTicks && null == et.xaxis.ticks && (et.xaxis.ticks = et.xaxis.noTicks), et.yaxis.noTicks && null == et.yaxis.ticks && (et.yaxis.ticks = et.yaxis.noTicks), et.x2axis && (et.xaxes[1] = t.extend(!0, {}, et.xaxis, et.x2axis), et.xaxes[1].position = "top", null == et.x2axis.min && (et.xaxes[1].min = null), null == et.x2axis.max && (et.xaxes[1].max = null)), et.y2axis && (et.yaxes[1] = t.extend(!0, {}, et.yaxis, et.y2axis), et.yaxes[1].position = "right", null == et.y2axis.min && (et.yaxes[1].min = null), null == et.y2axis.max && (et.yaxes[1].max = null)), et.grid.coloredAreas && (et.grid.markings = et.grid.coloredAreas), et.grid.coloredAreasColor && (et.grid.markingsColor = et.grid.coloredAreasColor), et.lines && t.extend(!0, et.series.lines, et.lines), et.points && t.extend(!0, et.series.points, et.points), et.bars && t.extend(!0, et.series.bars, et.bars), null != et.shadowSize && (et.series.shadowSize = et.shadowSize), null != et.highlightColor && (et.series.highlightColor = et.highlightColor), i = 0; i < et.xaxes.length; ++i) f(st, i + 1).options = et.xaxes[i];
                        for (i = 0; i < et.yaxes.length; ++i) f(lt, i + 1).options = et.yaxes[i];
                        for (var c in dt) et.hooks[c] && et.hooks[c].length && (dt[c] = dt[c].concat(et.hooks[c]));
                        l(dt.processOptions, [et])
                    }(a),
                    function() {
                        o.css("padding", 0).children().filter(function() {
                            return !t(this).hasClass("flot-overlay") && !t(this).hasClass("flot-base")
                        }).remove(), "static" == o.css("position") && o.css("position", "relative"), it = new e("flot-base", o), ot = new e("flot-overlay", o), nt = it.context, at = ot.context, rt = t(ot.element).unbind();
                        var i = o.data("plot");
                        i && (i.shutdown(), ot.clear()), o.data("plot", ut)
                    }(), h(n), S(), W(),
                    function() {
                        et.grid.hoverable && (rt.mousemove(N), rt.bind("mouseleave", E)), et.grid.clickable && rt.click(G), l(dt.bindEvents, [rt])
                    }();
                var gt = [],
                    ft = null
            }

            function r(t, e) {
                return e * Math.floor(t / e)
            }
            var n = Object.prototype.hasOwnProperty;
            t.fn.detach || (t.fn.detach = function() {
                return this.each(function() {
                    this.parentNode && this.parentNode.removeChild(this)
                })
            }), e.prototype.resize = function(t, e) {
                if (t <= 0 || e <= 0) throw new Error("Invalid dimensions for plot, width = " + t + ", height = " + e);
                var i = this.element,
                    o = this.context,
                    r = this.pixelRatio;
                this.width != t && (i.width = t * r, i.style.width = t + "px", this.width = t), this.height != e && (i.height = e * r, i.style.height = e + "px", this.height = e), o.restore(), o.save(), o.scale(r, r)
            }, e.prototype.clear = function() {
                this.context.clearRect(0, 0, this.width, this.height)
            }, e.prototype.render = function() {
                var t = this._textCache;
                for (var e in t)
                    if (n.call(t, e)) {
                        var i = this.getTextLayer(e),
                            o = t[e];
                        i.hide();
                        for (var r in o)
                            if (n.call(o, r)) {
                                var a = o[r];
                                for (var s in a)
                                    if (n.call(a, s)) {
                                        for (var l, h = a[s].positions, c = 0; l = h[c]; c++) l.active ? l.rendered || (i.append(l.element), l.rendered = !0) : (h.splice(c--, 1), l.rendered && l.element.detach());
                                        0 == h.length && delete a[s]
                                    }
                            } i.show()
                    }
            }, e.prototype.getTextLayer = function(e) {
                var i = this.text[e];
                return null == i && (null == this.textContainer && (this.textContainer = t("<div class='flot-text'></div>").css({
                    position: "absolute",
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    "font-size": "smaller",
                    color: "#545454"
                }).insertAfter(this.element)), i = this.text[e] = t("<div></div>").addClass(e).css({
                    position: "absolute",
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0
                }).appendTo(this.textContainer)), i
            }, e.prototype.getTextInfo = function(e, o, r, n, a) {
                var s, l, h, c;
                if (o = "" + o, s = "object" === (void 0 === r ? "undefined" : i(r)) ? r.style + " " + r.variant + " " + r.weight + " " + r.size + "px/" + r.lineHeight + "px " + r.family : r, l = this._textCache[e], null == l && (l = this._textCache[e] = {}), h = l[s], null == h && (h = l[s] = {}), null == (c = h[o])) {
                    var p = t("<div></div>").html(o).css({
                        position: "absolute",
                        "max-width": a,
                        top: -9999
                    }).appendTo(this.getTextLayer(e));
                    "object" === (void 0 === r ? "undefined" : i(r)) ? p.css({
                        font: s,
                        color: r.color
                    }): "string" == typeof r && p.addClass(r), c = h[o] = {
                        width: p.outerWidth(!0),
                        height: p.outerHeight(!0),
                        element: p,
                        positions: []
                    }, p.detach()
                }
                return c
            }, e.prototype.addText = function(t, e, i, o, r, n, a, s, l) {
                var h = this.getTextInfo(t, o, r, n, a),
                    c = h.positions;
                "center" == s ? e -= h.width / 2 : "right" == s && (e -= h.width), "middle" == l ? i -= h.height / 2 : "bottom" == l && (i -= h.height);
                for (var p, d = 0; p = c[d]; d++)
                    if (p.x == e && p.y == i) return void(p.active = !0);
                p = {
                    active: !0,
                    rendered: !1,
                    element: c.length ? h.element.clone() : h.element,
                    x: e,
                    y: i
                }, c.push(p), p.element.css({
                    top: Math.round(i),
                    left: Math.round(e),
                    "text-align": s
                })
            }, e.prototype.removeText = function(t, e, i, o, r, a) {
                if (null == o) {
                    var s = this._textCache[t];
                    if (null != s)
                        for (var l in s)
                            if (n.call(s, l)) {
                                var h = s[l];
                                for (var c in h)
                                    if (n.call(h, c))
                                        for (var p, d = h[c].positions, u = 0; p = d[u]; u++) p.active = !1
                            }
                } else
                    for (var p, d = this.getTextInfo(t, o, r, a).positions, u = 0; p = d[u]; u++) p.x == e && p.y == i && (p.active = !1)
            }, t.plot = function(e, i, r) {
                return new o(t(e), i, r, t.plot.plugins)
            }, t.plot.version = "0.8.3", t.plot.plugins = [], t.fn.plot = function(e, i) {
                return this.each(function() {
                    t.plot(this, e, i)
                })
            }
        }(jQuery)
    },
    173: function(t, e) {
        ! function(t) {
            function e(e) {
                function r(e, i, o) {
                    C || (C = !0, v = e.getCanvas(), x = t(v).parent(), b = e.getOptions(), e.setData(n(e.getData())))
                }

                function n(e) {
                    for (var i = 0, o = 0, r = 0, n = b.series.pie.combine.color, a = [], s = 0; s < e.length; ++s) {
                        var l = e[s].data;
                        t.isArray(l) && 1 == l.length && (l = l[0]), t.isArray(l) ? !isNaN(parseFloat(l[1])) && isFinite(l[1]) ? l[1] = +l[1] : l[1] = 0 : l = !isNaN(parseFloat(l)) && isFinite(l) ? [1, +l] : [1, 0], e[s].data = [l]
                    }
                    for (var s = 0; s < e.length; ++s) i += e[s].data[0][1];
                    for (var s = 0; s < e.length; ++s) {
                        var l = e[s].data[0][1];
                        l / i <= b.series.pie.combine.threshold && (o += l, r++, n || (n = e[s].color))
                    }
                    for (var s = 0; s < e.length; ++s) {
                        var l = e[s].data[0][1];
                        (r < 2 || l / i > b.series.pie.combine.threshold) && a.push(t.extend(e[s], {
                            data: [
                                [1, l]
                            ],
                            color: e[s].color,
                            label: e[s].label,
                            angle: l * Math.PI * 2 / i,
                            percent: l / (i / 100)
                        }))
                    }
                    return r > 1 && a.push({
                        data: [
                            [1, o]
                        ],
                        color: n,
                        label: b.series.pie.combine.label,
                        angle: o * Math.PI * 2 / i,
                        percent: o / (i / 100)
                    }), a
                }

                function a(e, r) {
                    function n() {
                        S.clearRect(0, 0, a, l), x.children().filter(".pieLabel, .pieLabelBackground").remove()
                    }
                    if (x) {
                        var a = e.getPlaceholder().width(),
                            l = e.getPlaceholder().height(),
                            h = x.children().filter(".legend").children().width() || 0;
                        S = r, C = !1, y = Math.min(a, l / b.series.pie.tilt) / 2, k = l / 2 + b.series.pie.offset.top, w = a / 2, "auto" == b.series.pie.offset.left ? (b.legend.position.match("w") ? w += h / 2 : w -= h / 2, w < y ? w = y : w > a - y && (w = a - y)) : w += b.series.pie.offset.left;
                        var c = e.getData(),
                            p = 0;
                        do {
                            p > 0 && (y *= o), p += 1, n(), b.series.pie.tilt <= .8 && function() {
                                var t = b.series.pie.shadow.left,
                                    e = b.series.pie.shadow.top,
                                    i = b.series.pie.shadow.alpha,
                                    o = b.series.pie.radius > 1 ? b.series.pie.radius : y * b.series.pie.radius;
                                if (!(o >= a / 2 - t || o * b.series.pie.tilt >= l / 2 - e || o <= 10)) {
                                    S.save(), S.translate(t, e), S.globalAlpha = i, S.fillStyle = "#000", S.translate(w, k), S.scale(1, b.series.pie.tilt);
                                    for (var r = 1; r <= 10; r++) S.beginPath(), S.arc(0, 0, o, 0, 2 * Math.PI, !1), S.fill(), o -= r;
                                    S.restore()
                                }
                            }()
                        } while (! function() {
                                function e(t, e, i) {
                                    t <= 0 || isNaN(t) || (i ? S.fillStyle = e : (S.strokeStyle = e, S.lineJoin = "round"), S.beginPath(), Math.abs(t - 2 * Math.PI) > 1e-9 && S.moveTo(0, 0), S.arc(0, 0, o, r, r + t / 2, !1), S.arc(0, 0, o, r + t / 2, r + t, !1), S.closePath(), r += t, i ? S.fill() : S.stroke())
                                }
                                var i = Math.PI * b.series.pie.startAngle,
                                    o = b.series.pie.radius > 1 ? b.series.pie.radius : y * b.series.pie.radius;
                                S.save(), S.translate(w, k), S.scale(1, b.series.pie.tilt), S.save();
                                for (var r = i, n = 0; n < c.length; ++n) c[n].startAngle = r, e(c[n].angle, c[n].color, !0);
                                if (S.restore(), b.series.pie.stroke.width > 0) {
                                    S.save(), S.lineWidth = b.series.pie.stroke.width, r = i;
                                    for (var n = 0; n < c.length; ++n) e(c[n].angle, b.series.pie.stroke.color, !1);
                                    S.restore()
                                }
                                return s(S), S.restore(), !b.series.pie.label.show || function() {
                                    for (var e = i, o = b.series.pie.label.radius > 1 ? b.series.pie.label.radius : y * b.series.pie.label.radius, r = 0; r < c.length; ++r) {
                                        if (c[r].percent >= 100 * b.series.pie.label.threshold && ! function(e, i, r) {
                                                if (0 == e.data[0][1]) return !0;
                                                var n, s = b.legend.labelFormatter,
                                                    h = b.series.pie.label.formatter;
                                                n = s ? s(e.label, e) : e.label, h && (n = h(n, e));
                                                var c = (i + e.angle + i) / 2,
                                                    p = w + Math.round(Math.cos(c) * o),
                                                    d = k + Math.round(Math.sin(c) * o) * b.series.pie.tilt,
                                                    u = "<span class='pieLabel' id='pieLabel" + r + "' style='position:absolute;top:" + d + "px;left:" + p + "px;'>" + n + "</span>";
                                                x.append(u);
                                                var g = x.children("#pieLabel" + r),
                                                    f = d - g.height() / 2,
                                                    m = p - g.width() / 2;
                                                if (g.css("top", f), g.css("left", m), 0 - f > 0 || 0 - m > 0 || l - (f + g.height()) < 0 || a - (m + g.width()) < 0) return !1;
                                                if (0 != b.series.pie.label.background.opacity) {
                                                    var v = b.series.pie.label.background.color;
                                                    null == v && (v = e.color);
                                                    var y = "top:" + f + "px;left:" + m + "px;";
                                                    t("<div class='pieLabelBackground' style='position:absolute;width:" + g.width() + "px;height:" + g.height() + "px;" + y + "background-color:" + v + ";'></div>").css("opacity", b.series.pie.label.background.opacity).insertBefore(g)
                                                }
                                                return !0
                                            }(c[r], e, r)) return !1;
                                        e += c[r].angle
                                    }
                                    return !0
                                }()
                            }() && p < i);
                        p >= i && (n(), x.prepend("<div class='error'>Could not draw pie with labels contained inside canvas</div>")), e.setSeries && e.insertLegend && (e.setSeries(c), e.insertLegend())
                    }
                }

                function s(t) {
                    if (b.series.pie.innerRadius > 0) {
                        t.save();
                        var e = b.series.pie.innerRadius > 1 ? b.series.pie.innerRadius : y * b.series.pie.innerRadius;
                        t.globalCompositeOperation = "destination-out", t.beginPath(), t.fillStyle = b.series.pie.stroke.color, t.arc(0, 0, e, 0, 2 * Math.PI, !1), t.fill(), t.closePath(), t.restore(), t.save(), t.beginPath(), t.strokeStyle = b.series.pie.stroke.color, t.arc(0, 0, e, 0, 2 * Math.PI, !1), t.stroke(), t.closePath(), t.restore()
                    }
                }

                function l(t, e) {
                    for (var i = !1, o = -1, r = t.length, n = r - 1; ++o < r; n = o)(t[o][1] <= e[1] && e[1] < t[n][1] || t[n][1] <= e[1] && e[1] < t[o][1]) && e[0] < (t[n][0] - t[o][0]) * (e[1] - t[o][1]) / (t[n][1] - t[o][1]) + t[o][0] && (i = !i);
                    return i
                }

                function h(t, i) {
                    for (var o, r, n = e.getData(), a = e.getOptions(), s = a.series.pie.radius > 1 ? a.series.pie.radius : y * a.series.pie.radius, h = 0; h < n.length; ++h) {
                        var c = n[h];
                        if (c.pie.show) {
                            if (S.save(), S.beginPath(), S.moveTo(0, 0), S.arc(0, 0, s, c.startAngle, c.startAngle + c.angle / 2, !1), S.arc(0, 0, s, c.startAngle + c.angle / 2, c.startAngle + c.angle, !1), S.closePath(), o = t - w, r = i - k, S.isPointInPath) {
                                if (S.isPointInPath(t - w, i - k)) return S.restore(), {
                                    datapoint: [c.percent, c.data],
                                    dataIndex: 0,
                                    series: c,
                                    seriesIndex: h
                                }
                            } else if (l([
                                    [0, 0],
                                    [s * Math.cos(c.startAngle), s * Math.sin(c.startAngle)],
                                    [s * Math.cos(c.startAngle + c.angle / 4), s * Math.sin(c.startAngle + c.angle / 4)],
                                    [s * Math.cos(c.startAngle + c.angle / 2), s * Math.sin(c.startAngle + c.angle / 2)],
                                    [s * Math.cos(c.startAngle + c.angle / 1.5), s * Math.sin(c.startAngle + c.angle / 1.5)],
                                    [s * Math.cos(c.startAngle + c.angle), s * Math.sin(c.startAngle + c.angle)]
                                ], [o, r])) return S.restore(), {
                                datapoint: [c.percent, c.data],
                                dataIndex: 0,
                                series: c,
                                seriesIndex: h
                            };
                            S.restore()
                        }
                    }
                    return null
                }

                function c(t) {
                    d("plothover", t)
                }

                function p(t) {
                    d("plotclick", t)
                }

                function d(t, i) {
                    var o = e.offset(),
                        r = parseInt(i.pageX - o.left),
                        n = parseInt(i.pageY - o.top),
                        a = h(r, n);
                    if (b.grid.autoHighlight)
                        for (var s = 0; s < M.length; ++s) {
                            var l = M[s];
                            l.auto != t || a && l.series == a.series || g(l.series)
                        }
                    a && u(a.series, t);
                    var c = {
                        pageX: i.pageX,
                        pageY: i.pageY
                    };
                    x.trigger(t, [c, a])
                }

                function u(t, i) {
                    var o = f(t); - 1 == o ? (M.push({
                        series: t,
                        auto: i
                    }), e.triggerRedrawOverlay()) : i || (M[o].auto = !1)
                }

                function g(t) {
                    null == t && (M = [], e.triggerRedrawOverlay());
                    var i = f(t); - 1 != i && (M.splice(i, 1), e.triggerRedrawOverlay())
                }

                function f(t) {
                    for (var e = 0; e < M.length; ++e)
                        if (M[e].series == t) return e;
                    return -1
                }

                function m(t, e) {
                    var i = t.getOptions(),
                        o = i.series.pie.radius > 1 ? i.series.pie.radius : y * i.series.pie.radius;
                    e.save(), e.translate(w, k), e.scale(1, i.series.pie.tilt);
                    for (var r = 0; r < M.length; ++r) ! function(t) {
                        t.angle <= 0 || isNaN(t.angle) || (e.fillStyle = "rgba(255, 255, 255, " + i.series.pie.highlight.opacity + ")", e.beginPath(), Math.abs(t.angle - 2 * Math.PI) > 1e-9 && e.moveTo(0, 0), e.arc(0, 0, o, t.startAngle, t.startAngle + t.angle / 2, !1), e.arc(0, 0, o, t.startAngle + t.angle / 2, t.startAngle + t.angle, !1), e.closePath(), e.fill())
                    }(M[r].series);
                    s(e), e.restore()
                }
                var v = null,
                    x = null,
                    b = null,
                    y = null,
                    w = null,
                    k = null,
                    C = !1,
                    S = null,
                    M = [];
                e.hooks.processOptions.push(function(t, e) {
                    e.series.pie.show && (e.grid.show = !1, "auto" == e.series.pie.label.show && (e.legend.show ? e.series.pie.label.show = !1 : e.series.pie.label.show = !0), "auto" == e.series.pie.radius && (e.series.pie.label.show ? e.series.pie.radius = .75 : e.series.pie.radius = 1), e.series.pie.tilt > 1 ? e.series.pie.tilt = 1 : e.series.pie.tilt < 0 && (e.series.pie.tilt = 0))
                }), e.hooks.bindEvents.push(function(t, e) {
                    var i = t.getOptions();
                    i.series.pie.show && (i.grid.hoverable && e.unbind("mousemove").mousemove(c), i.grid.clickable && e.unbind("click").click(p))
                }), e.hooks.processDatapoints.push(function(t, e, i, o) {
                    t.getOptions().series.pie.show && r(t, e, i)
                }), e.hooks.drawOverlay.push(function(t, e) {
                    t.getOptions().series.pie.show && m(t, e)
                }), e.hooks.draw.push(function(t, e) {
                    t.getOptions().series.pie.show && a(t, e)
                })
            }
            var i = 10,
                o = .95,
                r = {
                    series: {
                        pie: {
                            show: !1,
                            radius: "auto",
                            innerRadius: 0,
                            startAngle: 1.5,
                            tilt: 1,
                            shadow: {
                                left: 5,
                                top: 15,
                                alpha: .02
                            },
                            offset: {
                                top: 0,
                                left: "auto"
                            },
                            stroke: {
                                color: "#fff",
                                width: 1
                            },
                            label: {
                                show: "auto",
                                formatter: function(t, e) {
                                    return "<div style='font-size:x-small;text-align:center;padding:2px;color:" + e.color + ";'>" + t + "<br/>" + Math.round(e.percent) + "%</div>"
                                },
                                radius: 1,
                                background: {
                                    color: null,
                                    opacity: 0
                                },
                                threshold: 0
                            },
                            combine: {
                                threshold: -1,
                                color: null,
                                label: "Other"
                            },
                            highlight: {
                                opacity: .5
                            }
                        }
                    }
                };
            t.plot.plugins.push({
                init: e,
                options: r,
                name: "pie",
                version: "1.1"
            })
        }(jQuery)
    },
    174: function(t, e) {
        ! function(t, e, i) {
            "$:nomunge";

            function o(i) {
                !0 === s && (s = i || 1);
                for (var l = n.length - 1; l >= 0; l--) {
                    var d = t(n[l]);
                    if (d[0] == e || d.is(":visible")) {
                        var u = d.width(),
                            g = d.height(),
                            f = d.data(c);
                        !f || u === f.w && g === f.h || (d.trigger(h, [f.w = u, f.h = g]), s = i || !0)
                    } else f = d.data(c), f.w = 0, f.h = 0
                }
                null !== r && (s && (null == i || i - s < 1e3) ? r = e.requestAnimationFrame(o) : (r = setTimeout(o, a[p]), s = !1))
            }
            var r, n = [],
                a = t.resize = t.extend(t.resize, {}),
                s = !1,
                l = "setTimeout",
                h = "resize",
                c = h + "-special-event",
                p = "pendingDelay",
                d = "activeDelay",
                u = "throttleWindow";
            a[p] = 200, a[d] = 20, a[u] = !0, t.event.special[h] = {
                setup: function() {
                    if (!a[u] && this[l]) return !1;
                    var e = t(this);
                    n.push(this), e.data(c, {
                        w: e.width(),
                        h: e.height()
                    }), 1 === n.length && (r = i, o())
                },
                teardown: function() {
                    if (!a[u] && this[l]) return !1;
                    for (var e = t(this), i = n.length - 1; i >= 0; i--)
                        if (n[i] == this) {
                            n.splice(i, 1);
                            break
                        } e.removeData(c), n.length || (s ? cancelAnimationFrame(r) : clearTimeout(r), r = null)
                },
                add: function(e) {
                    function o(e, o, n) {
                        var a = t(this),
                            s = a.data(c) || {};
                        s.w = o !== i ? o : a.width(), s.h = n !== i ? n : a.height(), r.apply(this, arguments)
                    }
                    if (!a[u] && this[l]) return !1;
                    var r;
                    if (t.isFunction(e)) return r = e, o;
                    r = e.handler, e.handler = o
                }
            }, window.requestAnimationFrame || (e.requestAnimationFrame = function() {
                return e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame || e.oRequestAnimationFrame || e.msRequestAnimationFrame || function(t, i) {
                    return e.setTimeout(function() {
                        t((new Date).getTime())
                    }, a[d])
                }
            }()), window.cancelAnimationFrame || (e.cancelAnimationFrame = function() {
                return e.webkitCancelRequestAnimationFrame || e.mozCancelRequestAnimationFrame || e.oCancelRequestAnimationFrame || e.msCancelRequestAnimationFrame || clearTimeout
            }())
        }(jQuery, window),
        function(t) {
            function e(t) {
                function e() {
                    var e = t.getPlaceholder();
                    0 != e.width() && 0 != e.height() && (t.resize(), t.setupGrid(), t.draw())
                }

                function i(t, i) {
                    t.getPlaceholder().resize(e)
                }

                function o(t, i) {
                    t.getPlaceholder().unbind("resize", e)
                }
                t.hooks.bindEvents.push(i), t.hooks.shutdown.push(o)
            }
            var i = {};
            t.plot.plugins.push({
                init: e,
                options: i,
                name: "resize",
                version: "1.0"
            })
        }(jQuery)
    },
    364: function(t, e) {
        $(document).ready(function() {
            "use strict";
            var t, e, i, o, r, n;
            i = function() {
                var t, e, i;
                e = $(window).width() < 1280, i = e ? Math.floor($("#chart-sales-status").parent().width()) : 150, t = [45, 56, 76, 48, 78, 99, 70, 90, 79, 102, 74, 90, 98, 120, 90, 102, 74, 90, 98, 120, 90, 77, 103, 105, 120], $("#chart-sales-status").sparkline(t, {
                    type: "bar",
                    height: 50,
                    width: "100%",
                    barWidth: 4 * i / 6 / t.length,
                    barSpacing: 2 * i / 6 / t.length,
                    barColor: hexToRGBA(colors.green, .5),
                    negBarColor: hexToRGBA(colors.red, .5),
                    spotColor: hexToRGBA(colors.green, .5),
                    minSpotColor: hexToRGBA(colors.green, .5),
                    maxSpotColor: hexToRGBA(colors.green, .5)
                }), i = e ? Math.floor($("#chart-users-status").parent().width()) : 150, $("#chart-users-status").sparkline([40, 60, 30, 50, 80, 100, 70, 90], {
                    type: "line",
                    height: 50,
                    width: i,
                    lineWidth: 2,
                    lineColor: hexToRGBA(colors.blue, .5),
                    fillColor: "transparent",
                    spotColor: hexToRGBA(colors.blue, .5),
                    minSpotColor: hexToRGBA(colors.blue, .5),
                    maxSpotColor: hexToRGBA(colors.blue, .5),
                    highlightSpotColor: hexToRGBA(colors.blue, .5),
                    highlightLineColor: hexToRGBA(colors.blue, .5)
                }), i = e ? Math.floor($("#chart-impressions-status").parent().width()) : 150, $("#chart-impressions-status").sparkline([440, 400, 460, 400, 250, 330, 350, 370], {
                    type: "line",
                    height: 50,
                    width: i,
                    lineWidth: 2,
                    lineColor: hexToRGBA(colors.orange, .5),
                    fillColor: "transparent",
                    spotColor: hexToRGBA(colors.orange, .5),
                    minSpotColor: hexToRGBA(colors.orange, .5),
                    maxSpotColor: hexToRGBA(colors.orange, .5),
                    highlightSpotColor: hexToRGBA(colors.orange, .5),
                    highlightLineColor: hexToRGBA(colors.orange, .5)
                }), i = e ? Math.floor($("#chart-downloads-status").parent().width()) : 150, $("#chart-downloads-status").sparkline([344, 280, 285, 311, 244, 232, 188], {
                    type: "line",
                    height: 50,
                    width: i,
                    lineWidth: 2,
                    lineColor: hexToRGBA(colors.red, .5),
                    fillColor: "transparent",
                    spotColor: hexToRGBA(colors.red, .5),
                    minSpotColor: hexToRGBA(colors.red, .5),
                    maxSpotColor: hexToRGBA(colors.red, .5),
                    highlightSpotColor: hexToRGBA(colors.red, .5),
                    highlightLineColor: hexToRGBA(colors.red, .5)
                })
            }, n = void 0, $(window).on("resize", function() {
                clearTimeout(n), n = setTimeout(i, 500)
            }), i(), $("#chart-project-progress").length > 0 && ($("<div id='flot-tooltip'></div>").appendTo("body"), o = function(t, e, i) {
                var o, r;
                i ? (o = i.datapoint[0].toFixed(2), r = i.datapoint[1].toFixed(2), $("#flot-tooltip").html(i.series.label + " " + o + "% = " + r).css({
                    top: i.pageY + 5,
                    left: i.pageX + 5
                }).fadeIn(200)) : $("#flot-tooltip").hide()
            }, e = [{
                label: "Progress",
                data: [
                    [0, 50],
                    [12.5, 60],
                    [25, 30],
                    [37.5, 40],
                    [50, 30],
                    [62.5, 50],
                    [75, 40],
                    [87.5, 50],
                    [100, 40]
                ],
                color: colors.dark.medium
            }, {
                label: "Expected",
                data: [
                    [0, 50],
                    [12.5, 40],
                    [25, 0],
                    [37.5, 20],
                    [50, 60],
                    [62.5, 40],
                    [75, 30],
                    [87.5, 40],
                    [100, 20]
                ],
                color: hexToRGBA(colors.primary, .5)
            }, {
                label: "Issues",
                data: [
                    [0, 10],
                    [12.5, 10],
                    [25, 0],
                    [37.5, 6],
                    [50, 8],
                    [62.5, 25],
                    [75, 15],
                    [87.5, 5],
                    [100, 2]
                ],
                color: hexToRGBA(hexShade(colors.primary, -.1), .75)
            }], t = {
                color: colors.light.lighter
            }, r = {
                legend: {
                    labelBoxBorderColor: colors.light.light,
                    backgroundColor: colors.dark.light,
                    color: "#ffffff"
                },
                grid: {
                    hoverable: !0,
                    clickable: !0,
                    borderWidth: 0,
                    borderColor: colors.light.light
                },
                series: {
                    lines: {
                        show: !0,
                        fill: !0,
                        color: colors.white,
                        fillColor: {
                            colors: [{
                                opacity: .25
                            }, {
                                opacity: .75
                            }]
                        }
                    },
                    points: {
                        show: !0,
                        fillColor: colors.black
                    },
                    grow: {
                        active: !0,
                        duration: 1e3
                    }
                },
                xaxis: t,
                yaxis: t
            }, $.plot($("#chart-project-progress"), e, r), $("#chart-project-progress").on("plothover", o)), $("#chart-top-sales").length > 0 && (e = [{
                label: "Services",
                data: 450,
                color: hexToRGBA(colors.primary, .75)
            }, {
                label: "Online",
                data: 760,
                color: hexToRGBA(colors.primary, .5)
            }, {
                label: "Store",
                data: 145,
                color: hexToRGBA(colors.primary, .25)
            }], t = {
                show: !1,
                reserveSpace: !1
            }, r = {
                legend: {
                    show: !1
                },
                grid: {
                    hoverable: !0,
                    clickable: !0,
                    borderWidth: 0,
                    margin: {
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0
                    },
                    borderColor: colors.light.light
                },
                series: {
                    pie: {
                        innerRadius: 0,
                        stroke: {
                            width: 0,
                            color: hexToRGBA(colors.primary, 1)
                        },
                        borderWidth: 0,
                        label: {
                            formatter: function(t, e) {
                                return "<div style='font-size:8pt; text-align:center; padding:2px; color: rgba(255,255,255,0.9);'>" + t + "<br/>" + e.data[0][1] + "</div>"
                            }
                        },
                        highlight: {
                            opacity: .1
                        },
                        show: !0,
                        color: colors.white
                    }
                },
                xaxis: t,
                yaxis: t
            }, $.plot($("#chart-top-sales"), e, r)), $("#chart-monthly-visits").length > 0 && (e = [{
                label: "Direct Access",
                data: 1034,
                color: hexToRGBA(colors.primary, .75)
            }, {
                label: "Advertisement",
                data: 1768,
                color: hexToRGBA(colors.primary, .5)
            }, {
                label: "Facebook",
                data: 564,
                color: hexToRGBA(colors.facebook, .33)
            }, {
                label: "Twitter",
                data: 428,
                color: hexToRGBA(colors.twitter, .33)
            }, {
                label: "Google Plus",
                data: 245,
                color: hexToRGBA(colors["google-plus"], .33)
            }], t = {
                show: !1,
                reserveSpace: !1
            }, r = {
                legend: {
                    show: !1
                },
                grid: {
                    hoverable: !0,
                    clickable: !0,
                    borderWidth: 0,
                    margin: {
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0
                    },
                    borderColor: colors.light.light
                },
                series: {
                    pie: {
                        innerRadius: .33,
                        stroke: {
                            width: 0,
                            color: hexToRGBA(colors.primary, 1)
                        },
                        borderWidth: 0,
                        label: {
                            formatter: function(t, e) {
                                return "<div style='font-size:8pt; text-align:center; padding:2px; color: rgba(255,255,255,0.9);'>" + t + "<br/>" + e.data[0][1] + "</div>"
                            }
                        },
                        highlight: {
                            opacity: .1
                        },
                        show: !0,
                        color: colors.white
                    }
                },
                xaxis: t,
                yaxis: t
            }, $.plot($("#chart-monthly-visits"), e, r)), $("#chart-advertisement").length > 0 && (e = [{
                label: "Facebook",
                data: [
                    [0, 20],
                    [12.5, 20],
                    [25, 25],
                    [37.5, 20],
                    [50, 35],
                    [62.5, 30],
                    [75, 45],
                    [87.5, 40],
                    [100, 50]
                ],
                color: hexToRGBA(colors.facebook, .75)
            }, {
                label: "Google",
                data: [
                    [0, 50],
                    [12.5, 60],
                    [25, 30],
                    [37.5, 40],
                    [50, 30],
                    [62.5, 50],
                    [75, 40],
                    [87.5, 50],
                    [100, 76]
                ],
                color: hexToRGBA(colors.primary, .75)
            }], t = {
                color: colors.light.lighter
            }, r = {
                legend: {
                    labelBoxBorderColor: colors.light.light,
                    backgroundColor: colors.dark.light,
                    color: "#ffffff"
                },
                grid: {
                    show: !1,
                    hoverable: !0,
                    clickable: !0,
                    borderWidth: 0,
                    borderColor: colors.light.light
                },
                series: {
                    lines: {
                        show: !0,
                        fill: !0,
                        fillColor: {
                            colors: [{
                                opacity: 0
                            }, {
                                opacity: .5
                            }]
                        }
                    },
                    points: {
                        show: !0,
                        fillColor: colors.white
                    }
                },
                xaxis: t,
                yaxis: t
            }, $.plot($("#chart-advertisement"), e, r), $("#chart-advertisement").on("plothover", o)), $(".tasks-calendar").datepicker()
        })
    },
    374: function(t, e, i) {
        i(172), i(173), i(174), i(171)
    },
    459: function(t, e, i) {
        i(167), i(374), i(364)
    }
}, [459]);