(function() {
    var c = {
        id: "e2cef3e05e9effbaa3b421f89ed7ec87",
        dm: ["knowme.is-nc.com"],
        etrk: [],
        js: "tongji.baidu.com/hm-web/js/",
        icon: '',
        br: false,
        ctrk: false,
        align: -1,
        nv: -1,
        vdur: 1800000,
        age: 31536000000,
        rec: 0,
        rp: 0,
        rs: 0,
        trust: 0,
        vcard: 0,
        se: [[1, 'baidu.com', 'word|wd|w', 1, 'news,tieba,zhidao,,image,video,hi,baike,wenku,opendata,jingyan'], [2, 'google.com', 'q', 0, 'tbm=isch,tbm=vid,tbm=nws|source=newssearch,tbm=blg,tbm=frm'], [4, 'sogou.com', 'query|keyword', 1, 'news,mp3,pic,v,gouwu,zhishi,blogsearch'], [6, 'search.yahoo.com', 'p', 1, 'news,images,video'], [7, 'yahoo.cn', 'q', 1, 'news,image,music'], [8, 'soso.com', 'w|key', 1, 'image,video,music,sobar,wenwen,news,baike'], [11, 'youdao.com', 'q', 1, 'image,news,,mp3,video'], [12, 'gougou.com', 'search', 1, ',movie,,,,,video'], [13, 'bing.com', 'q', 2, 'images,videos,news'], [14, 'so.com', 'q', 1, 'video,news'], [15, 'jike.com', 'q', 1, 'news,image,video'], [16, 'qihoo.com', 'kw', 0, ''], [17, 'etao.com', 'q', 1, 's,8'], [18, 'soku.com', 'keyword', 2, 'a'], [19, 'easou.com', 'q', 0, ''], [20, 'glb.uc.cn', 'keyword|word|q', 0, '']]
    };
    var l=!0, n = null, p=!1;
    var r = function() {
        function a(a) {
            /["\\\x00-\x1f]/.test(a) && (a = a.replace(/["\\\x00-\x1f]/g, function(a) {
                var b = d[a];
                if (b)
                    return b;
                b = a.charCodeAt();
                return "\\u00" + Math.floor(b / 16).toString(16) + (b%16).toString(16)
            }));
            return '"' + a + '"'
        }
        function b(a) {
            return 10 > a ? "0" + a : a
        }
        var d = {
            "\b": "\\b",
            "\t": "\\t",
            "\n": "\\n",
            "\f": "\\f",
            "\r": "\\r",
            '"': '\\"',
            "\\": "\\\\"
        };
        return function(d) {
            switch (typeof d) {
            case "undefined":
                return "undefined";
            case "number":
                return isFinite(d) ? String(d) : "null";
            case "string":
                return a(d);
            case "boolean":
                return String(d);
            default:
                if (d === n)
                    return "null";
                if (d instanceof Array) {
                    var f = ["["], k = d.length, h, g, m;
                    for (g = 0; g < k; g++)
                        switch (m = d[g], typeof m) {
                        case "undefined":
                        case "function":
                        case "unknown":
                            break;
                        default:
                            h && f.push(","), f.push(r(m)), h = 1
                        }
                    f.push("]");
                    return f.join("")
                }
                if (d instanceof Date)
                    return '"' + d.getFullYear() + "-" + b(d.getMonth() + 1) + "-" + b(d.getDate()) + "T" + b(d.getHours()) + ":" + b(d.getMinutes()) + ":" + b(d.getSeconds()) + '"';
                h = ["{"];
                for (k in d)
                    if (Object.prototype.hasOwnProperty.call(d, k))
                        switch (g = d[k], typeof g) {
                        case "undefined":
                        case "unknown":
                        case "function":
                            break;
                        default:
                            f && h.push(","), f = 1, h.push(r(k) + ":" + r(g))
                        }
                h.push("}");
                return h.join("")
            }
        }
    }();
    function s(a, b) {
        var d = a.match(RegExp("(^|&|\\?|#)(" + b + ")=([^&#]*)(&|$|#)", ""));
        return d ? d[3] : n
    }
    function t(a) {
        return (a = (a = a.match(/^(https?:\/\/)?([^\/\?#]*)/)) ? a[2].replace(/.*@/, "") : n) ? a.replace(/:\d+$/, "") : a
    };
    function z(a, b) {
        if (window.sessionStorage)
            try {
                window.sessionStorage.setItem(a, b)
        } catch (d) {}
    }
    function A(a) {
        return window.sessionStorage ? window.sessionStorage.getItem(a) : n
    };
    function aa(a, b, d) {
        var e;
        d.f && (e = new Date, e.setTime(e.getTime() + d.f));
        document.cookie = a + "=" + b + (d.domain ? "; domain=" + d.domain : "") + (d.path ? "; path=" + d.path : "") + (e ? "; expires=" + e.toGMTString() : "") + (d.r ? "; secure" : "")
    };
    function B(a, b) {
        var d = new Image, e = "mini_tangram_log_" + Math.floor(2147483648 * Math.random()).toString(36);
        window[e] = d;
        d.onload = d.onerror = d.onabort = function() {
            d.onload = d.onerror = d.onabort = n;
            d = window[e] = n;
            b && b(a)
        };
        d.src = a
    };
    var D;
    function E() {
        if (!D)
            try {
                D = document.createElement("input"), D.type = "hidden", D.style.display = "none", D.addBehavior("#default#userData"), document.getElementsByTagName("head")[0].appendChild(D)
        } catch (a) {
            return p
        }
        return l
    }
    function ba(a, b, d) {
        var e = new Date;
        e.setTime(e.getTime() + d || 31536E6);
        try {
            window.localStorage ? (b = e.getTime() + "|" + b, window.localStorage.setItem(a, b)) : E() && (D.expires = e.toUTCString(), D.load(document.location.hostname), D.setAttribute(a, b), D.save(document.location.hostname))
        } catch (f) {}
    }
    function ca(a) {
        if (window.localStorage) {
            if (a = window.localStorage.getItem(a)) {
                var b = a.indexOf("|"), d = a.substring(0, b)-0;
                if (d && d > (new Date).getTime())
                    return a.substring(b + 1)
                }
        } else if (E())
            try {
                return D.load(document.location.hostname), D.getAttribute(a)
        } catch (e) {}
        return n
    };
    function G(a, b, d) {
        a.attachEvent ? a.attachEvent("on" + b, function(b) {
            d.call(a, b)
        }) : a.addEventListener && a.addEventListener(b, d, p)
    };
    (function() {
        function a() {
            if (!a.b) {
                a.b = l;
                for (var b = 0, d = e.length; b < d; b++)
                    e[b]()
            }
        }
        function b() {
            try {
                document.documentElement.doScroll("left")
            } catch (d) {
                setTimeout(b, 1);
                return 
            }
            a()
        }
        var d = p, e = [], f;
        document.addEventListener ? f = function() {
            document.removeEventListener("DOMContentLoaded", f, p);
            a()
        } : document.attachEvent && (f = function() {
            "complete" === document.readyState && (document.detachEvent("onreadystatechange", f), a())
        });
        (function() {
            if (!d)
                if (d = l, "complete" === document.readyState)
                    a.b = l;
                else if (document.addEventListener)
                    document.addEventListener("DOMContentLoaded",
                    f, p), window.addEventListener("load", a, p);
            else if (document.attachEvent) {
                document.attachEvent("onreadystatechange", f);
                window.attachEvent("onload", a);
                var e = p;
                try {
                    e = window.frameElement == n
                } catch (h) {}
                document.documentElement.doScroll && e && b()
            }
        })();
        return function(b) {
            a.b ? b() : e.push(b)
        }
    })().b = p;
    function H(a, b) {
        return "[object " + b + "]" === {}.toString.call(a)
    };
    var da = navigator.cookieEnabled, ea = navigator.javaEnabled(), fa = navigator.language || navigator.browserLanguage || navigator.systemLanguage || navigator.userLanguage || "", ga = window.screen.width + "x" + window.screen.height, ma = window.screen.colorDepth;
    c.se.push([14, "so.360.cn", "q", 1, ",news"]);
    c.se.push([14, "v.360.cn", "q", 1, "so"]);
    var I = 0, K = Math.round( + new Date / 1E3), Q = "https:" == document.location.protocol ? "https:": "http:", na = "cc cf ci ck cl cm cp cw ds ep et fl ja ln lo lt nv rnd sb se si st su sw sse v cv lv u api tt".split(" ");
    function oa() {
        if ("undefined" == typeof window["_bdhm_loaded_" + c.id]) {
            window["_bdhm_loaded_" + c.id] = l;
            var a = this;
            a.a = {};
            a.q = [];
            a.p = {
                push: function() {
                    a.k.apply(a, arguments)
                }
            };
            a.c = 0;
            a.h = p;
            pa(a)
        }
    }
    oa.prototype = {
        getData: function(a) {
            try {
                var b = RegExp("(^| )" + a + "=([^;]*)(;|$)").exec(document.cookie);
                return (b ? b[2] : n) || A(a) || ca(a)
            } catch (d) {}
        },
        setData: function(a, b, d) {
            try {
                aa(a, b, {
                    domain: qa(),
                    path: ra(),
                    f: d
                }), d ? ba(a, b, d) : z(a, b)
            } catch (e) {}
        },
        k: function(a) {
            if (H(a, "Array")) {
                var b = function(a) {
                    return a.replace ? a.replace(/'/g, "'0").replace(/\*/g, "'1").replace(/!/g, "'2") : a
                };
                switch (a[0]) {
                case "_trackPageview":
                    if (1 < a.length && a[1].charAt && "/" == a[1].charAt(0)) {
                        this.a.api|=4;
                        this.a.et = 0;
                        this.a.ep = "";
                        this.h ? (this.a.nv =
                        0, this.a.st = 4) : this.h = l;
                        var b = this.a.u, d = this.a.su;
                        this.a.u = Q + "//" + document.location.host + a[1];
                        this.a.su = document.location.href;
                        R(this);
                        this.a.u = b;
                        this.a.su = d
                    }
                    break;
                case "_trackEvent":
                    2 < a.length && (this.a.api|=8, this.a.nv = 0, this.a.st = 4, this.a.et = 4, this.a.ep = b(a[1]) + "*" + b(a[2]) + (a[3] ? "*" + b(a[3]) : "") + (a[4] ? "*" + b(a[4]) : ""), R(this));
                    break;
                case "_setCustomVar":
                    if (4 > a.length)
                        break;
                    var d = a[1], e = a[4] || 3;
                    if (0 < d && 6 > d && 0 < e && 4 > e) {
                        this.c++;
                        for (var f = (this.a.cv || "*").split("!"), k = f.length; k < d-1; k++)
                            f.push("*");
                        f[d-1] = e + "*" + b(a[2]) + "*" + b(a[3]);
                        this.a.cv = f.join("!");
                        a = this.a.cv.replace(/[^1](\*[^!]*){2}/g, "*").replace(/((^|!)\*)+$/g, "");
                        "" !== a ? this.setData("Hm_cv_" + c.id, encodeURIComponent(a), c.age) : sa()
                    }
                    break;
                case "_trackOrder":
                    a = a[1];
                    if (H(a, "Object")) {
                        var h = function(a) {
                            for (var b in a)
                                if ({}.hasOwnProperty.call(a, b)) {
                                    var d = a[b];
                                    H(d, "Object") || H(d, "Array") ? h(d) : a[b] = String(d)
                                }
                        };
                        h(a);
                        this.a.api|=16;
                        this.a.nv = 0;
                        this.a.st = 4;
                        this.a.et = 94;
                        this.a.ep = r(a);
                        R(this)
                    }
                    break;
                case "_trackMobConv":
                    if (a = {
                        webim: 1,
                        tel: 2,
                        map: 3,
                        sms: 4,
                        callback: 5,
                        share: 6
                    }
                    [a[1]])
                        this.a.api|=32, this.a.et = 93, this.a.ep = a, R(this)
                }
            }
        }
    };
    function ta() {
        var a = A("Hm_unsent_" + c.id);
        if (a)
            for (var a = a.split(","), b = 0, d = a.length; b < d; b++)
                B(Q + "//" + decodeURIComponent(a[b]).replace(/^https?:\/\//, ""), function(a) {
                    S(a)
                })
    }
    function S(a) {
        var b = A("Hm_unsent_" + c.id) || "";
        b && ((b = b.replace(RegExp(encodeURIComponent(a.replace(/^https?:\/\//, "")).replace(/([\*\(\)])/g, "\\$1") + "(%26u%3D[^,]*)?,?", "g"), "").replace(/,$/, "")) ? z("Hm_unsent_" + c.id, b) : window.sessionStorage && window.sessionStorage.removeItem("Hm_unsent_" + c.id))
    }
    function va(a, b) {
        var d = A("Hm_unsent_" + c.id) || "", e = a.a.u ? "": "&u=" + encodeURIComponent(document.location.href), d = encodeURIComponent(b.replace(/^https?:\/\//, "") + e) + (d ? "," + d : "");
        z("Hm_unsent_" + c.id, d)
    }
    function R(a) {
        a.a.rnd = Math.round(2147483647 * Math.random());
        a.a.api = a.a.api || a.c ? a.a.api + "_" + a.c : "";
        var b = Q + "//hm.baidu.com/hm.gif?" + wa(a);
        a.a.api = 0;
        a.c = 0;
        va(a, b);
        B(b, function(a) {
            S(a)
        })
    }
    function xa(a) {
        return function() {
            a.a.nv = 0;
            a.a.st = 4;
            a.a.et = 3;
            a.a.ep = (new Date).getTime() - a.e.j + "," + ((new Date).getTime() - a.e.d + a.e.i);
            R(a)
        }
    }
    function pa(a) {
        try {
            var b, d, e, f, k, h, g;
            I = a.getData("Hm_lpvt_" + c.id) || 0;
            13 == I.length && (I = Math.round(I / 1E3));
            a:
            if (document.referrer) {
                for (var m = 0, ua = c.se.length; m < ua; m++)
                    if (RegExp("(^|\\.)" + c.se[m][1].replace(/\./g, "\\.")).test(t(document.referrer))) {
                        var y = s(document.referrer, c.se[m][2]) || "";
                        if (y ||!(2 != c.se[m][0] && 14 != c.se[m][0] && 17 != c.se[m][0])) {
                            1 == c.se[m][0]&&-1 < document.referrer.indexOf("cpro.baidu.com") && (y = "");
                            a.a.se = c.se[m][0];
                            for (var za = a.a, q = c.se[m], J = 0, Aa = 2 == q[3] ? q[1] + "\\/" : "", Ba = 1 == q[3] ? "\\." +
                            q[1] : "", V = q[4].split(","), q = 0, Ca = V.length; q < Ca; q++)
                                if ("" !== V[q] && RegExp(Aa + V[q] + Ba).test(document.referrer)) {
                                    J = q + 1;
                                    break
                                }
                                za.sse = J;
                                a.a.sw = y;
                                d = 2;
                                break a
                        }
                    }
                y = p;
                T(document.referrer) && T(document.location.href) ? y = l : (J = t(document.referrer), y = U(J || "", document.location.hostname));
                d = y ? K - I > c.vdur ? 1 : 4 : 3
            } else 
                d = K - I > c.vdur ? 1 : 4;
            b = 4 != d ? 1 : 0;
            if (h = a.getData("Hm_lvt_" + c.id)) {
                g = h.split(",");
                for (var F = g.length-1; 0 <= F; F--)
                    13 == g[F].length && (g[F] = "" + Math.round(g[F] / 1E3));
                for (; 2592E3 < K - g[0];)
                    g.shift();
                k = 4 > g.length ? 2 : 3;
                for (1 ===
                b && g.push(K); 4 < g.length;)
                    g.shift();
                h = g.join(",");
                f = g[g.length-1]
            } else 
                h = K, f = "", k = 1;
            a.setData("Hm_lvt_" + c.id, h, c.age);
            a.setData("Hm_lpvt_" + c.id, K);
            e = K == a.getData("Hm_lpvt_" + c.id) ? "1" : "0";
            if (0 == c.nv && T(document.location.href) && ("" == document.referrer || T(document.referrer)))
                b = 0, d = 4;
            a.a.nv = b;
            a.a.st = d;
            a.a.cc = e;
            a.a.lt = f;
            a.a.lv = k;
            a.a.si = c.id;
            a.a.su = document.referrer;
            a.a.ds = ga;
            a.a.cl = ma + "-bit";
            a.a.ln = fa;
            a.a.ja = ea ? 1 : 0;
            a.a.ck = da ? 1 : 0;
            a.a.lo = "number" == typeof _bdhm_top ? 1 : 0;
            var L = a.a;
            b = "";
            if (navigator.plugins &&
            navigator.mimeTypes.length) {
                var X = navigator.plugins["Shockwave Flash"];
                X && X.description && (b = X.description.replace(/^.*\s+(\S+)\s+\S+$/, "$1"))
            } else if (window.ActiveXObject)
                try {
                    var ha = new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
                    ha && (b = ha.GetVariable("$version")) && (b = b.replace(/^.*\s+(\d+),(\d+).*$/, "$1.$2"))
            } catch (Ha) {}
            L.fl = b;
            var M = a.a, L = "";
            try {
                external.twGetVersion(external.twGetSecurityID(window))&&-1 < external.twGetRunPath.toLowerCase().indexOf("360se") && (L = 17)
            } catch (Ia) {}
            M.sb = L;
            a.a.v = "1.0.57";
            a.a.cv = decodeURIComponent(a.getData("Hm_cv_" + c.id) || "");
            1 == a.a.nv && (a.a.tt = document.title || "");
            a.a.api = 0;
            var u = document.location.href;
            a.a.cm = s(u, "hmmd") || "";
            a.a.cp = s(u, "hmpl") || "";
            a.a.cw = s(u, "hmkw") || "";
            a.a.ci = s(u, "hmci") || "";
            a.a.cf = s(u, "hmsr") || "";
            0 == a.a.nv ? ta() : S(".*");
            if ("" != c.icon) {
                var v, w = c.icon.split("|"), Y = "http://tongji.baidu.com/hm-web/welcome/ico?s=" + c.id, Z = ("http:" == Q ? "http://eiv" : "https://bs") + ".baidu.com" + w[0] + "." + w[1];
                switch (w[1]) {
                case "swf":
                    var ia = w[2], ja = w[3], M = "s=" + Y, u = "HolmesIcon" +
                    K;
                    v = '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" id="' + u + '" width="' + ia + '" height="' + ja + '"><param name="movie" value="' + Z + '" /><param name="flashvars" value="' + (M || "") + '" /><param name="allowscriptaccess" value="always" /><embed type="application/x-shockwave-flash" name="' + u + '" width="' + ia + '" height="' + ja + '" src="' + Z + '" flashvars="' + (M || "") + '" allowscriptaccess="always" /></object>';
                    break;
                case "gif":
                    v = '<a href="' + Y + '" target="_blank"><img border="0" src="' + Z + '" width="' + w[2] + '" height="' +
                    w[3] + '"></a>';
                    break;
                default:
                    v = '<a href="' + Y + '" target="_blank">' + w[0] + "</a>"
                }
                document.write(v)
            }
            var N = document.location.hash.substring(1), Da = RegExp(c.id), Ea =- 1 < document.referrer.indexOf("baidu.com") ? l : p;
            if (N && Da.test(N) && Ea) {
                var O = document.createElement("script");
                O.setAttribute("type", "text/javascript");
                O.setAttribute("charset", "utf-8");
                O.setAttribute("src", Q + "//" + c.js + s(N, "jn") + "." + s(N, "sx") + "?" + a.a.rnd);
                var ka = document.getElementsByTagName("script")[0];
                ka.parentNode.insertBefore(O, ka)
            }
            a.m && a.m();
            a.l && a.l();
            if (c.rec || c.trust)
                a.a.nv ? (a.g = encodeURIComponent(document.referrer), window.sessionStorage ? z("Hm_from_" + c.id, a.g) : ba("Hm_from_" + c.id, a.g, 864E5)) : a.g = (window.sessionStorage ? A("Hm_from_" + c.id) : ca("Hm_from_" + c.id)) || "";
            a.n && a.n();
            a.o && a.o();
            a.e = new ya;
            G(window, "beforeunload", xa(a));
            var x = window._hmt;
            if (x && x.length)
                for (v = 0; v < x.length; v++) {
                    var C = x[v];
                    switch (C[0]) {
                    case "_setAccount":
                        1 < C.length && /^[0-9a-z]{32}$/.test(C[1]) && (a.a.api|=1, window._bdhm_account = C[1]);
                        break;
                    case "_setAutoPageview":
                        if (1 <
                        C.length) {
                            var $ = C[1];
                            if (p === $ || l === $)
                                a.a.api|=2, window._bdhm_autoPageview = $
                        }
                    }
                }
            if ("undefined" === typeof window._bdhm_account || window._bdhm_account === c.id) {
                window._bdhm_account = c.id;
                var P = window._hmt;
                if (P && P.length)
                    for (var x = 0, Ga = P.length; x < Ga; x++)
                        a.k(P[x]);
                window._hmt = a.p
            }
            if ("undefined" === typeof window._bdhm_autoPageview || window._bdhm_autoPageview === l)
                a.h = l, a.a.et = 0, a.a.ep = "", R(a)
        } catch (la) {
            a = [], a.push("si=" + c.id), a.push("n=" + encodeURIComponent(la.name)), a.push("m=" + encodeURIComponent(la.message)),
            a.push("r=" + encodeURIComponent(document.referrer)), B(Q + "//hm.baidu.com/hm.gif?" + a.join("&"))
        }
    }
    function wa(a) {
        for (var b = [], d = 0, e = na.length; d < e; d++) {
            var f = na[d], k = a.a[f];
            "undefined" != typeof k && "" !== k && b.push(f + "=" + encodeURIComponent(k))
        }
        return b.join("&")
    }
    function sa() {
        var a = "Hm_cv_" + c.id;
        try {
            if (aa(a, "", {
                domain: qa(),
                path: ra(),
                f: -1
            }), window.sessionStorage && window.sessionStorage.removeItem(a)
                , window.localStorage)window.localStorage.removeItem(a);
            else if (E())
                try {
                    D.load(document.location.hostname), D.removeAttribute(a), D.save(document.location.hostname)
            } catch (b) {}
        } catch (d) {}
    }
    function ra() {
        for (var a = 0, b = c.dm.length; a < b; a++) {
            var d = c.dm[a];
            if (-1 < d.indexOf("/") && Fa(document.location.href, d))
                return d.replace(/^[^\/]+(\/.*)/, "$1") + "/"
        }
        return "/"
    }
    function qa() {
        for (var a = document.location.hostname, b = 0, d = c.dm.length; b < d; b++)
            if (U(a, c.dm[b]))
                return c.dm[b].replace(/(:\d+)?[\/\?#].*/, "");
        return a
    }
    function T(a) {
        for (var b = 0; b < c.dm.length; b++)
            if (-1 < c.dm[b].indexOf("/")) {
                if (Fa(a, c.dm[b]))
                    return l
            } else {
                var d = t(a);
                if (d && U(d, c.dm[b]))
                    return l
            }
        return p
    }
    function Fa(a, b) {
        a = a.replace(/^https?:\/\//, "");
        return 0 == a.indexOf(b)
    }
    function U(a, b) {
        a = "." + a.replace(/:\d+/, "");
        b = "." + b.replace(/:\d+/, "");
        var d = a.indexOf(b);
        return -1 < d && d + b.length == a.length
    }
    function ya() {
        this.d = this.j = (new Date).getTime();
        this.i = 0;
        "object" == typeof document.onfocusin ? (G(document, "focusin", W(this)), G(document, "focusout", W(this))) : (G(window, "focus", W(this)), G(window, "blur", W(this)))
    }
    function W(a) {
        return function(b) {
            if (!(b.target && b.target != window)) {
                if ("blur" == b.type || "focusout" == b.type)
                    a.i += (new Date).getTime() - a.d;
                a.d = (new Date).getTime()
            }
        }
    }
    new oa;
})();

