(this.webpackJsonpbbqk = this.webpackJsonpbbqk || []).push([
  [4],
  {
    1: function (n, e, t) {
      "use strict";
      t.d(e, "d", function () {
        return a;
      }),
        t.d(e, "a", function () {
          return c;
        }),
        t.d(e, "b", function () {
          return o;
        }),
        t.d(e, "c", function () {
          return s;
        });
      var i = t(22),
        r = t(7),
        a = function (n, e, t) {
          var i = new Date();
          i.setTime(i.getTime() + 24 * (t || 1) * 60 * 60 * 1e3);
          var r = ";expires=" + i.toGMTString();
          document.cookie = n + "=" + e + r + ";path=/;domain=.bbqk.com";
        },
        c = function (n) {
          for (var e = document.cookie.split("; "), t = 0; t < e.length; t++) {
            var i = e[t].split("=");
            if (i[0] === n) return unescape(i[1]);
          }
          return "";
        },
        o = function () {
          var n = c("userid");
          return a("userid", n || i.a.v1()), c("userid");
        },
        s = function (n, e) {
          a("channel", n), a("page", e);
          var t = Object(r.b)("uid");
          a("uid", t || "-");
          var o = c("userid");
          a("userid", o || i.a.v1());
        };
    },
    11: function (n, e, t) {
      "use strict";
      t.d(e, "a", function () {
        return a;
      });
      var i = t(1),
        r = {
          default: "c0",
          haier: "c1",
          midea: "c2",
          gree: "c3",
          meiling: "c4",
          konka: "c5",
          hisense: "c6",
          aux: "c7",
          vanward: "c8",
          mi: "c9",
          ronshen: "c10",
          kelon: "c11",
          hisensebx: "c12",
          vatti: "c13",
          mideaxyj: "c14",
          littleswanxyj: "c15",
          mideabx: "c16",
          haierrsq: "c17",
        },
        a = function () {
          var n = Object(i.a)("channel");
          if (n) return r[n];
          n = "default";
          var e = window.location.pathname;
          for (var t in ((e = e.substr(1)), r))
            if (new RegExp("^" + t + ".*$").test(e)) {
              n = t;
              break;
            }
          return Object(i.d)("channel", n), r[n];
        };
    },
    12: function (n, e, t) {
      "use strict";
      t.d(e, "a", function () {
        return m;
      });
      var i = t(13),
        r = t.n(i),
        a = t(1),
        c = t(28),
        o = t.n(c),
        s = t(6),
        l = {
          uid: "a",
          model: "b",
          cid: "c",
          bid: "d",
          eid: "e",
          userid: "f",
          wxopenid: "g",
          wxunionid: "h",
          url: "i",
          level: "j",
          channel: "x1",
          page: "x2",
          method: "x3",
          act: "x4",
          client: "x5",
          chain: "z",
        },
        d = ["x1", "x2", "x3", "x4", "x5"],
        b = function (n, e) {
          var t = l[n],
            i = e;
          return (
            d.includes(t) && !Object(s.b)() && (i = o.a.encode(i)),
            { logParam: t, logValue: i }
          );
        },
        m = function (n) {
          var e =
            "https://com-bbqk-el.cn-beijing.log.aliyuncs.com/logstores/ela/track_ua.gif?APIVersion=0.6.0";
          Object.keys(n).map(function (t) {
            var i = b(t, n[t]),
              r = i.logParam,
              a = i.logValue;
            e += "&" + r + "=" + a;
          });
          var t = b("userid", Object(a.b)()),
            i = t.logParam,
            r = t.logValue;
          u((e += "&" + i + "=" + r));
        },
        u = function (n) {
          return r()({ url: n, method: "get" }), !0;
        };
    },
    124: function (n, e, t) {
      "use strict";
      t.r(e);
      var i = t(2),
        r = t.n(i),
        a = t(27),
        c = t.n(a),
        o = (t(29), t(4)),
        s = t.n(o),
        l = t(10),
        d = t(3),
        b = t(20),
        m = t(23),
        u = t(25),
        f = t(5),
        j = t(7),
        p = t(1),
        h = t(26),
        g = t(24),
        x = t(0),
        O = null,
        k = [],
        v = null,
        w = null,
        y = function () {
          var n = Object(i.useState)(!1),
            e = Object(d.a)(n, 2),
            t = e[0],
            r = e[1],
            a = Object(i.useState)([]),
            c = Object(d.a)(a, 2),
            o = c[0],
            y = c[1];
          return (
            Object(i.useEffect)(function () {
              Object(l.a)(
                s.a.mark(function n() {
                  var e, t, i, a, c, o, l, d, u, h, x, _, z, N;
                  return s.a.wrap(function (n) {
                    for (;;)
                      switch ((n.prev = n.next)) {
                        case 0:
                          return (n.next = 2), Object(b.b)();
                        case 2:
                          if (((e = n.sent), (t = e.data), 200 === e.status)) {
                            n.next = 7;
                            break;
                          }
                          return n.abrupt("return");
                        case 7:
                          if (
                            ((i = t.status),
                            (a = t.navi),
                            (c = t.wp),
                            (o = t.url),
                            (l = t.widgets),
                            (d = t.idx),
                            2 === i && Object(j.c)(Object(f.b)(o)),
                            !c)
                          ) {
                            n.next = 15;
                            break;
                          }
                          return (n.next = 12), Object(b.a)(c);
                        case 12:
                          (n.t0 = n.sent), (n.next = 16);
                          break;
                        case 15:
                          n.t0 = "";
                        case 16:
                          if (((u = n.t0), (h = u.data), (n.t1 = a), !n.t1)) {
                            n.next = 23;
                            break;
                          }
                          return (n.next = 22), Object(b.a)(a);
                        case 22:
                          n.t1 = n.sent;
                        case 23:
                          if (((x = n.t1), (_ = x.data), !d)) {
                            n.next = 31;
                            break;
                          }
                          return (n.next = 28), Object(j.a)(Object(f.b)(d));
                        case 28:
                          (n.t2 = n.sent), (n.next = 32);
                          break;
                        case 31:
                          n.t2 = "";
                        case 32:
                          (z = n.t2),
                            (N = z.data),
                            (v = h),
                            (k = l),
                            (O = null === h || void 0 === h ? void 0 : h.times),
                            (w = _),
                            r(!!h),
                            N &&
                              Object.keys(N).forEach(function (n) {
                                Object(p.d)(n, N[n]);
                              }),
                            y(Object(g.a)(k)),
                            Object(m.a)();
                        case 42:
                        case "end":
                          return n.stop();
                      }
                  }, n);
                })
              )();
            }, []),
            Object(x.jsxs)(x.Fragment, {
              children: [
                t && Object(x.jsx)(h.a, { wpData: v, count: O, setOpen: r }),
                Object(x.jsxs)("div", {
                  className: "home",
                  style: { display: t ? "none" : "block" },
                  children: [
                    w && Object(x.jsx)(u.a, { navDatas: w }),
                    Object(x.jsx)("article", {
                      className: "content",
                      children: o,
                    }),
                  ],
                }),
              ],
            })
          );
        },
        _ = t(19);
      Object(p.c)("default", _.b),
        c.a.render(
          Object(x.jsx)(r.a.StrictMode, { children: Object(x.jsx)(y, {}) }),
          document.getElementById("root")
        );
    },
    15: function (n, e, t) {
      "use strict";
      var i, r;
      t.d(e, "b", function () {
        return c;
      });
      var a =
        null === (i = window) ||
        void 0 === i ||
        null === (r = i.tempConfig) ||
        void 0 === r
          ? void 0
          : r.imgUrl;
      e.a = a;
      var c = function (n) {
        return Math.random().toString(36).substr(3, n);
      };
    },
    16: function (n, e, t) {
      "use strict";
      var i, r;
      t.d(e, "a", function () {
        return c;
      }),
        t.d(e, "b", function () {
          return o;
        });
      var a =
          null === (i = window) ||
          void 0 === i ||
          null === (r = i.tempConfig) ||
          void 0 === r
            ? void 0
            : r.imgUrl,
        c = a + "/rightIcon.png",
        o = a + "/level/NUMBER.png";
    },
    18: function (n, e, t) {
      "use strict";
      t.d(e, "a", function () {
        return i;
      }),
        t.d(e, "b", function () {
          return r;
        });
      var i = function (n) {
          var e = new RegExp("(^|&)" + n + "=([^&]*)(&|$)", "i"),
            t = window.location.search.substr(1).match(e);
          return null != t ? unescape(t[2]) : null;
        },
        r = function (n) {
          for (var e = document.cookie.split("; "), t = 0; t < e.length; t++) {
            var i = e[t].split("=");
            if (i[0] === n) return unescape(i[1]);
          }
          return "";
        };
    },
    19: function (n, e, t) {
      "use strict";
      t.d(e, "b", function () {
        return r;
      }),
        t.d(e, "a", function () {
          return a;
        }),
        t.d(e, "c", function () {
          return o;
        });
      var i = t(1),
        r = "home",
        a = "feature",
        c = { unknown: "p0", home: "p1", feature: "p2", cert: "p3" },
        o = function () {
          var n = Object(i.a)("page");
          return n ? c[n] : "p0";
        };
    },
    20: function (n, e, t) {
      "use strict";
      t.d(e, "b", function () {
        return c;
      }),
        t.d(e, "a", function () {
          return o;
        });
      var i = t(13),
        r = t.n(i),
        a = t(18);
      (r.a.defaults.baseURL = window.tempConfig.jsonUrl),
        (r.a.defaults.crossDomain = !0),
        (r.a.defaults.withCredentials = !1);
      var c = function (n) {
          var e = window.tempConfig,
            t = window.location.pathname
              .match(/([0-9a-zA-Z]*?)+(.html)$/g)[0]
              .replace(".html", "");
          return r()({
            url: e[t] + "?t=" + new Date().getTime(),
            method: "get",
            params: n,
          });
        },
        o = function (n) {
          if (n.includes("${url|uid}")) {
            var e = Object(a.a)("uid");
            n = n.replace("${url|uid}", e);
          } else if (n.includes("${cookie|uid}")) {
            var t = Object(a.b)("uid");
            n = n.replace("${cookie|uid}", t);
          }
          return r()({ url: n + "?t=" + new Date().getTime(), method: "get" });
        };
    },
    21: function (n, e, t) {
      "use strict";
      t.d(e, "a", function () {
        return l;
      });
      var i = t(1),
        r = t(12),
        a = t(5),
        c = t(11),
        o = t(19),
        s = t(6),
        l = function (n) {
          Object(r.a)({
            uid: Object(i.a)("uid"),
            model: Object(i.a)("model"),
            cid: Object(i.a)("cid"),
            bid: Object(i.a)("bid"),
            eid: Object(i.a)("eid"),
            url: Object(a.a)(),
            level: Object(i.a)("level"),
            channel: Object(c.a)(),
            client: Object(s.a)(),
            page: Object(o.c)(),
            method: "m3",
            act: n,
          });
        };
    },
    23: function (n, e, t) {
      "use strict";
      t.d(e, "a", function () {
        return s;
      });
      var i = t(1),
        r = t(12),
        a = t(5),
        c = t(11),
        o = t(6),
        s = function () {
          Object(r.a)({
            uid: Object(i.a)("uid"),
            model: Object(i.a)("model"),
            cid: Object(i.a)("cid"),
            bid: Object(i.a)("bid"),
            eid: Object(i.a)("eid"),
            url: Object(a.a)(),
            level: Object(i.a)("level"),
            channel: Object(c.a)(),
            client: Object(o.a)(),
            page: "p1",
            method: "m1",
            act: "a011",
          });
        };
    },
    24: function (n, e, t) {
      "use strict";
      t.d(e, "a", function () {
        return Ie;
      });
      var i,
        r,
        a,
        c,
        o,
        s,
        l,
        d,
        b,
        m,
        u,
        f,
        j,
        p,
        h,
        g,
        x,
        O,
        k,
        v,
        w,
        y,
        _,
        z,
        N,
        S,
        C = t(2),
        q = t(4),
        E = t.n(q),
        I = t(10),
        T = t(3),
        F = t(8),
        B = t(9),
        P = B.a.section(
          i ||
            (i = Object(F.a)([
              "\n    margin-top: .42rem;\n    .radarColmn{\n        \n        h2.title{\n            display: flex;\n            justify-content: space-between;\n            align-items: center;\n            font-size: .34rem;\n            font-weight: 600;\n            color: #434669;\n            margin-bottom: .31rem;\n            padding-right: .2rem;\n            i{\n                font-size: .3rem;\n                color: rgba(31,98,255,1);\n            }\n            a{\n                font-size: .22rem;\n                font-weight: 400;\n                color: rgba(12,16,57,0.50);\n                display: flex;\n                justify-content: center;\n                align-items: center;\n                width: 1.1rem;\n                height: .52rem;\n                border: 0.01rem solid rgba(93,96,125,0.30);\n                border-radius: .27rem;\n            }\n        }\n        .radarUnitWarp{\n            display: flex;\n            justify-content: space-around;\n            margin-top:.26rem;\n            background: #ffffff;\n            border-radius: .12rem;\n            box-shadow: 0px 0.04rem .16rem 0px rgba(0,36,96,0.06); \n            padding: .34rem .4rem;\n        }\n        .radarUnit{\n            dt,dt img{\n                width: .76rem;\n                height: .76rem;\n            }\n            dd:nth-of-type(1){\n                font-size: .26rem;\n                font-weight: 400;\n                text-align: center;\n                color: #0c1039;\n                margin:.05rem 0;\n            }\n            dd:nth-of-type(2){\n                font-size: .18rem;\n                font-weight: 400;\n                color: #b6b7c3;\n                text-align: center;\n                i{\n                    color: rgba(31,98,255,1);\n                }\n            }\n        }\n    }   \n",
            ]))
        ),
        D = t(7),
        U = t(5),
        A = t(0),
        L = function (n) {
          var e = Object(C.useState)(""),
            t = Object(T.a)(e, 2),
            i = t[0],
            r = t[1],
            a = Object(C.useState)([]),
            c = Object(T.a)(a, 2),
            o = c[0],
            s = c[1],
            l = Object(C.useState)(""),
            d = Object(T.a)(l, 2),
            b = d[0],
            m = d[1];
          Object(C.useEffect)(
            function () {
              Object(I.a)(
                E.a.mark(function e() {
                  var t, i, a, c, o;
                  return E.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.next = 2), Object(D.a)(Object(U.b)(n.json));
                        case 2:
                          (t = e.sent),
                            (i = t.data),
                            (a = i.pcats),
                            (c = i.name),
                            (o = i.url),
                            r(c),
                            s(a),
                            m(o);
                        case 10:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              )();
            },
            [n]
          );
          var u = function () {
            b && (window.location.href = b);
          };
          return Object(A.jsx)(P, {
            children: Object(A.jsxs)("div", {
              className: "radarColmn",
              children: [
                Object(A.jsxs)("h2", {
                  className: "title",
                  children: [
                    Object(A.jsxs)("p", { children: [i, " "] }),
                    " ",
                    b &&
                      Object(A.jsx)("a", {
                        onClick: function () {
                          return u();
                        },
                        children: "\u66f4\u591a >",
                      }),
                  ],
                }),
                Object(A.jsx)("div", {
                  onClick: function () {
                    return u();
                  },
                  className: "radarUnitWarp",
                  children:
                    o.length > 0 &&
                    o.map(function (n) {
                      return Object(A.jsxs)(
                        "dl",
                        {
                          className: "radarUnit",
                          children: [
                            Object(A.jsx)("dt", {
                              children: Object(A.jsx)("img", {
                                alt: n.name,
                                src: n.img,
                              }),
                            }),
                            Object(A.jsx)("dd", { children: n.name }),
                          ],
                        },
                        n.name
                      );
                    }),
                }),
              ],
            }),
          });
        },
        $ = t(14),
        M = t(17),
        R = t.n(M),
        V = B.a.section(
          r ||
            (r = Object(F.a)([
              "\nmargin-top: .2rem;\n.slider {\n    width: 7.10rem;\n    background: rgba(255, 255, 255, 1);\n    border-radius: .12rem;\n    box-shadow: 0px 0px 20px 0px rgba(0,36,96,0.04);\n    margin: 0 auto;\n    height: 3.1rem;\n    padding-top: 0.2rem;\n}\n.brandinfo1 {\n    width: 6.30rem;\n    background: transparent;\n    border-radius: .12rem;\n    box-shadow: 0px 0px 20px 0px rgba(0,36,96,0.04);\n    height: 3.65rem;\n    margin-top: 0.16rem;\n    padding-top: 0;\n}\n\n.slider .slideCont {\n    display: flex;\n    align-items: center;\n    flex-wrap: wrap;\n    justify-content: center;\n\n}\n\n.slider .slideCont img {\n    width: 6.7rem;\n    height: 2.51rem;  \n    \n}\n.brandinfo1  .slideCont img {\n    width: 6.30rem;\n    height: 3rem;\n    border-radius: .12rem;\n}\n.slick-slider {\n    position: relative;\n\n    display: block;\n    box-sizing: border-box;\n\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n\n    -webkit-touch-callout: none;\n    -khtml-user-select: none;\n    -ms-touch-action: pan-y;\n    touch-action: pan-y;\n    -webkit-tap-highlight-color: transparent;\n}\n\n.slick-list {\n    position: relative;\n\n    display: block;\n    overflow: hidden;\n\n    margin: 0;\n    padding: 0;\n}\n\n.slick-list:focus {\n    outline: none;\n}\n\n.slick-list.dragging {\n    cursor: pointer;\n    cursor: hand;\n}\n\n.slick-slider .slick-track,\n.slick-slider .slick-list {\n    -webkit-transform: translate3d(0, 0, 0);\n    -moz-transform: translate3d(0, 0, 0);\n    -ms-transform: translate3d(0, 0, 0);\n    -o-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n}\n\n.slick-track {\n    position: relative;\n    top: 0;\n    left: 0;\n\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n}\n\n.slick-track:before,\n.slick-track:after {\n    display: table;\n\n    content: '';\n}\n\n.slick-track:after {\n    clear: both;\n}\n\n.slick-loading .slick-track {\n    visibility: hidden;\n}\n\n.slick-slide {\n    display: none;\n    float: left;\n\n    height: 100%;\n    min-height: 1px;\n}\n\n[dir='rtl'] .slick-slide {\n    float: right;\n}\n\n.slick-slide img {\n    display: block;\n}\n\n.slick-slide.slick-loading img {\n    display: none;\n}\n\n.slick-slide.dragging img {\n    pointer-events: none;\n}\n\n.slick-initialized .slick-slide {\n    display: block;\n}\n\n.slick-loading .slick-slide {\n    visibility: hidden;\n}\n\n.slick-vertical .slick-slide {\n    display: block;\n\n    height: auto;\n\n    border: 1px solid transparent;\n}\n\n.slick-arrow.slick-hidden {\n    display: none;\n}\n\n/* Slider */\n\n\n/* Arrows */\n.slick-prev,\n.slick-next {\n    font-size: 0;\n    line-height: 0;\n\n    position: absolute;\n    top: 50%;\n\n    display: none !important;\n\n    width: 20px;\n    height: 20px;\n    padding: 0;\n    -webkit-transform: translate(0, -50%);\n    -ms-transform: translate(0, -50%);\n    transform: translate(0, -50%);\n\n    cursor: pointer;\n\n    color: transparent;\n    border: none;\n    outline: none;\n    background: transparent;\n}\n\n.slick-prev:hover,\n.slick-prev:focus,\n.slick-next:hover,\n.slick-next:focus {\n    color: transparent;\n    outline: none;\n    background: transparent;\n}\n\n.slick-prev:hover:before,\n.slick-prev:focus:before,\n.slick-next:hover:before,\n.slick-next:focus:before {\n    opacity: 1;\n}\n\n.slick-prev.slick-disabled:before,\n.slick-next.slick-disabled:before {\n    opacity: .25;\n}\n\n.slick-prev:before,\n.slick-next:before {\n    font-family: 'slick';\n    font-size: 20px;\n    line-height: 1;\n\n    opacity: .75;\n    color: white;\n\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n}\n\n.slick-prev {\n    left: -25px;\n}\n\n[dir='rtl'] .slick-prev {\n    right: -25px;\n    left: auto;\n}\n\n.slick-prev:before {\n    content: '\u2190';\n}\n\n[dir='rtl'] .slick-prev:before {\n    content: '\u2192';\n}\n\n.slick-next {\n    right: -25px;\n}\n\n[dir='rtl'] .slick-next {\n    right: auto;\n    left: -25px;\n}\n\n.slick-next:before {\n    content: '\u2192';\n}\n\n[dir='rtl'] .slick-next:before {\n    content: '\u2190';\n}\n\n/* Dots */\n.slick-dotted.slick-slider {\n    margin-bottom: 30px;\n}\n\n.slick-dots {\n    position: absolute;\n    bottom: -0.15rem;\n\n    display: block;\n\n    width: 100%;\n    padding: 0;\n    margin: 0;\n\n    list-style: none;\n\n    text-align: center;\n}\n\n.slick-dots li {\n    position: relative;\n\n    display: inline-block;\n\n    width: .1rem;\n    height: .2rem;\n    margin: 0 3px;\n    padding: 0;\n\n    cursor: pointer;\n}\n\n.slick-dots li button {\n    font-size: 0;\n    line-height: 0;\n\n    display: block;\n\n    width: 20px;\n    height: 20px;\n    padding: 5px;\n\n    cursor: pointer;\n\n    color: transparent;\n    border: 0;\n    outline: none;\n    background: transparent;\n}\n\n.slick-dots li button:hover,\n.slick-dots li button:focus {\n    outline: none;\n}\n\n.slick-dots li button:hover:before,\n.slick-dots li button:focus:before {\n    opacity: 1;\n}\n\n.slick-dots li button:before {\n    font-family: 'slick';\n    font-size: 6px;\n    line-height: 20px;\n\n    position: absolute;\n    top: 0;\n    left: 0;\n\n    width: 20px;\n    height: 20px;\n\n    content: '\u2022';\n    text-align: center;\n\n    opacity: .25;\n    color: black;\n\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n}\n.brandinfo1 .slick-dots li button:before {\n    color: #ffffff;\n    top: .14rem;\n    width: .09rem;\n    height: .09rem;\n}\n.slick-dots li.slick-active button:before {\n    opacity: .75;\n    color: black;\n}\n.brandinfo1 .slick-dots li.slick-active button:before {\n    color: #ffffff;\n    opacity: .85;\n}\n",
            ]))
        ),
        W = t(1),
        J = t(12),
        K = t(11),
        H = t(19),
        G = t(6),
        Q = function (n) {
          var e = Object(C.useState)([]),
            t = Object(T.a)(e, 2),
            i = t[0],
            r = t[1],
            a = Object(W.a)("cid");
          Object(C.useEffect)(
            function () {
              Object(I.a)(
                E.a.mark(function e() {
                  var t, i;
                  return E.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.next = 2), Object(D.a)(Object(U.b)(n.json));
                        case 2:
                          (t = e.sent), (i = t.data), r(i);
                        case 5:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              )();
            },
            [n]
          );
          var c = function (n) {
            var e;
            (e = n.id),
              Object(J.a)({
                uid: Object(W.a)("uid"),
                model: Object(W.a)("model"),
                cid: Object(W.a)("cid"),
                bid: Object(W.a)("bid"),
                eid: Object(W.a)("eid"),
                url: Object(U.a)(),
                level: Object(W.a)("level"),
                channel: Object(K.a)(),
                client: Object(G.a)(),
                page: Object(H.c)(),
                method: "m3",
                act: "a01" + e,
              }),
              (window.location.href = n.url);
          };
          return (null === i || void 0 === i ? void 0 : i.length)
            ? Object(A.jsx)(V, {
                children: Object(A.jsx)("div", {
                  className:
                    "brandinfo1" === n.styleName
                      ? "slider brandinfo1"
                      : "slider",
                  children: Object(A.jsx)(
                    R.a,
                    Object($.a)(
                      Object($.a)(
                        {},
                        {
                          dots: !0,
                          infinite: !0,
                          speed: 500,
                          slidesToShow: 1,
                          slidesToScroll: 1,
                          autoplay: !0,
                        }
                      ),
                      {},
                      {
                        children: i.map(function (n, e) {
                          var t = n.cids;
                          if (!t || t.includes(1 * a))
                            return Object(A.jsx)(
                              "div",
                              {
                                className: "slideItem",
                                children: Object(A.jsx)("a", {
                                  href: "#",
                                  onClick: function () {
                                    return c(n);
                                  },
                                  className: "slideCont",
                                  children: Object(A.jsx)("img", {
                                    alt: "banner",
                                    src: n.img,
                                  }),
                                }),
                              },
                              n.name + e
                            );
                        }),
                      }
                    )
                  ),
                }),
              })
            : Object(A.jsx)(A.Fragment, {});
        },
        Z = t(15),
        X = "".concat(Z.a, "/carbon-icon.png"),
        Y = "".concat(Z.a, "/co2img.png"),
        nn = "".concat(Z.a, "/chct.png"),
        en = B.a.section(
          a ||
            (a = Object(F.a)([
              "\n    background: #fff;\n    border-radius: .12rem;\n    box-shadow: 0px .04rem .16rem 0px rgba(0,36,96,0.06); \n    padding: .2rem;\n    padding-top:.63rem;\n    margin-top: .2rem;\n    .carbonBlock{\n        background: #fff;\n        border: .01rem solid rgba(47,193,76,0.30);\n        border-radius: .11rem;\n        position: relative;\n        .carbonItem{\n            padding:.5rem .34rem;\n            display: flex;\n            justify-content: space-between;\n            align-items: center;\n            position: relative;\n            .left{\n                h3{\n                    font-size: .3rem;\n                    font-weight: 600;\n                    color: #434669;\n                    margin-bottom: .25rem;\n                }\n                i{\n                    /* font-size: .28rem;\n                    font-weight: 600;\n                    color: #2fc14c;\n                    border: .01rem solid #2fc14c;\n                    border-radius: 1rem;\n                    padding:.05rem .2rem; */\n                    img{\n                        width: 1.61rem;\n                    }\n                }\n                \n            }\n            span{\n                width: 1.16rem;\n                height: 1.16rem;\n                background: url(",
              ");\n                background-size: contain;\n            }\n        }\n        .carbonItem:nth-of-type(2){\n            border-top: .01rem solid rgba(47,193,76,0.30);\n            .left{\n                i{\n                    img{\n                        width: 2.1rem;\n                    }\n                }\n            }\n            span{\n                width: 2.86rem;\n                height: 2.03rem;\n                position: absolute;\n                bottom: 0;\n                right: 0;\n                background: url(",
              ");\n                background-size: contain;\n            }\n        }\n        em{\n            width: 1.92rem;\n            height: .74rem;\n            background-image: url(",
              ");\n            background-size: cover;\n            position: absolute;\n            top:-.4rem;\n            left: 0;\n            font-size: .3rem;\n            font-weight: 600;\n            color: #fff;\n            text-align: center;\n            line-height: .72rem;\n            font-style: normal;\n        }\n    }\n    \n    .carbonFoot{\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        opacity: .3;\n        margin-top: 0.21rem;\n        hr{\n            width: 1.8rem;\n            color: #b2b4c2;\n            height: .01rem;\n        }\n        p{\n            font-size: .22rem;\n            color: #434669;\n            margin:0 .1rem;\n        }\n    }\n",
            ])),
          nn,
          Y,
          X
        ),
        tn = function (n) {
          var e = Object(C.useState)(""),
            t = Object(T.a)(e, 2),
            i = t[0],
            r = t[1],
            a = Object(C.useState)([]),
            c = Object(T.a)(a, 2),
            o = c[0],
            s = c[1];
          return (
            Object(C.useEffect)(
              function () {
                Object(I.a)(
                  E.a.mark(function e() {
                    var t, i, a, c;
                    return E.a.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.next = 2), Object(D.a)(Object(U.b)(n.json))
                            );
                          case 2:
                            (t = e.sent),
                              (i = t.data),
                              (a = i.name),
                              (c = i.tags),
                              r(a),
                              s(c);
                          case 8:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                )();
              },
              [n]
            ),
            o.length > 0 &&
              Object(A.jsxs)(en, {
                children: [
                  Object(A.jsxs)("div", {
                    className: "carbonBlock",
                    children: [
                      Object(A.jsx)("em", { children: i }),
                      o.length > 0 &&
                        o.map(function (n) {
                          return Object(A.jsx)(
                            "a",
                            {
                              href: n.url,
                              className: "carbonItem",
                              children: Object(A.jsxs)("div", {
                                className: "left",
                                children: [
                                  Object(A.jsx)("h3", { children: n.name }),
                                  Object(A.jsx)("i", {
                                    children: Object(A.jsx)("img", {
                                      src: n.img,
                                      alt: "img1",
                                    }),
                                  }),
                                ],
                              }),
                            },
                            n.name
                          );
                        }),
                    ],
                  }),
                  Object(A.jsxs)("div", {
                    className: "carbonFoot",
                    children: [
                      Object(A.jsx)("hr", { size: "1", color: "#b2b4c2" }),
                      Object(A.jsx)("p", {
                        children:
                          "\u78b3\u4fe1\u606f\u6e90\u4e8e\u4f01\u4e1a\u81ea\u6211\u58f0\u660e",
                      }),
                      Object(A.jsx)("hr", { size: "1", color: "#b2b4c2" }),
                    ],
                  }),
                ],
              })
          );
        },
        rn = B.a.section(
          c ||
            (c = Object(F.a)([
              "\n    height: 1.58rem;\n    background: linear-gradient(93deg,#2fc14c 2%, #3bca30 97%);\n    border-radius: .12rem;\n    box-shadow: 0px .04rem .16rem 0px rgba(0,36,96,0.06);\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding-right:.5rem ;\n    padding-left:.3rem ;\n    margin-top: 0.2rem;\n    h2{\n        font-size: .3rem;\n        font-weight: 600;\n        color: #fff;\n        i{\n            font-size: .48rem;\n            font-weight: 600;\n            color: #fff;\n            margin-left: 0.2rem;\n        }\n    } \n    \n    img{\n        width: 1.50rem;\n        height: .72rem;\n    }\n",
            ]))
        ),
        an =
          (Object(G.c)(),
          (Object(G.c)()
            ? "https://bbqk.pzjdimg.com/public/imgs/"
            : "https://demo.pzjdimg.com/public/imgs/") + "co2.png"),
        cn = function (n) {
          var e = Object(C.useState)(""),
            t = Object(T.a)(e, 2),
            i = t[0],
            r = t[1],
            a = Object(C.useState)([]),
            c = Object(T.a)(a, 2),
            o = c[0],
            s = c[1],
            l = Object(C.useState)([]),
            d = Object(T.a)(l, 2),
            b = d[0],
            m = d[1],
            u = Object(C.useState)(!1),
            f = Object(T.a)(u, 2),
            j = f[0],
            p = f[1];
          return (
            Object(C.useEffect)(
              function () {
                Object(I.a)(
                  E.a.mark(function e() {
                    var t, i, a, c, o, l;
                    return E.a.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.next = 2), Object(D.a)(Object(U.b)(n.json))
                            );
                          case 2:
                            if (
                              ((t = e.sent),
                              (i = t.data),
                              (a = i.name),
                              (c = i.num),
                              (o = i.unit),
                              (l = i.visible),
                              200 === t.status)
                            ) {
                              e.next = 11;
                              break;
                            }
                            return e.abrupt("return");
                          case 11:
                            r(a), s(c), m(o), p(l);
                          case 15:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                )();
              },
              [n]
            ),
            j &&
              Object(A.jsxs)(rn, {
                children: [
                  Object(A.jsxs)("h2", {
                    children: [i, ":", Object(A.jsx)("i", { children: o }), b],
                  }),
                  Object(A.jsx)("img", { src: an, alt: "HECS_IMG_1" }),
                ],
              })
          );
        },
        on = B.a.section(
          o ||
            (o = Object(F.a)([
              "\n    margin-top: .42rem;\n    h2{\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n        font-size: .34rem;\n        font-weight: 600;\n        color: #434669;\n        margin-bottom: .31rem;\n        padding-right: .2rem;\n        a{\n            font-size: .22rem;\n            font-weight: 400;\n            color: rgba(12,16,57,0.50);\n            display: flex;\n            justify-content: center;\n            align-items: center;\n            width: 1.1rem;\n            height: .52rem;\n            border: 0.01rem solid rgba(93,96,125,0.30);\n            border-radius: .27rem;\n        }\n    }\n    .block{\n        background: #ffffff;\n        border-radius: .12rem;\n        box-shadow: 0px 0px .2rem 0px rgba(0,36,96,0.04); \n        padding:.29rem;\n        .nav{\n            display: flex;\n            justify-content: space-between;\n            align-items: center;\n        }\n        .nav-item{\n            font-size: .3rem;\n            font-weight: 400;\n            color: #434669;\n            border-bottom:3px solid #fff;\n            padding-bottom:.05rem;\n        }\n        .nav-item.active{\n            color: #007aff;\n            border-bottom:3px solid #007aff;;\n        }\n        .cont{\n            margin-top: .24rem;\n            img{\n                width: 6.50rem;\n                height: 2.72rem;\n            }\n        }\n    }\n\n",
            ]))
        ),
        sn = function (n) {
          var e = Object(C.useState)([]),
            t = Object(T.a)(e, 2),
            i = t[0],
            r = t[1],
            a = Object(C.useState)(""),
            c = Object(T.a)(a, 2),
            o = c[0],
            s = c[1],
            l = Object(C.useState)(""),
            d = Object(T.a)(l, 2),
            b = d[0],
            m = d[1],
            u = Object(C.useState)(""),
            f = Object(T.a)(u, 2),
            j = f[0],
            p = f[1],
            h = Object(C.useState)(0),
            g = Object(T.a)(h, 2),
            x = g[0],
            O = g[1];
          Object(C.useEffect)(
            function () {
              Object(I.a)(
                E.a.mark(function e() {
                  var t, i, a, c, o, l;
                  return E.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.next = 2), Object(D.a)(Object(U.b)(n.json));
                        case 2:
                          (a = e.sent),
                            (c = a.data),
                            (o = c.tags),
                            (l = c.more),
                            r(o),
                            p(l),
                            s(
                              null === (t = o[0]) || void 0 === t
                                ? void 0
                                : t.img
                            ),
                            m(
                              null === (i = o[0]) || void 0 === i
                                ? void 0
                                : i.url
                            );
                        case 10:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              )();
            },
            [n]
          );
          return Object(A.jsxs)(on, {
            children: [
              Object(A.jsxs)("h2", {
                children: [
                  "\u9886\u8dd1\u699c ",
                  j &&
                    Object(A.jsx)("a", {
                      href: j || "#!",
                      children: "\u66f4\u591a >",
                    }),
                ],
              }),
              Object(A.jsxs)("div", {
                className: "block",
                children: [
                  Object(A.jsx)("ul", {
                    className: "nav",
                    children: i.map(function (n, e) {
                      return Object(A.jsx)(
                        "li",
                        {
                          onClick: function () {
                            !(function (n, e) {
                              n.img && (O(e), s(n.img), m(n.url));
                            })(n, e);
                          },
                          className: x === e ? "nav-item active" : "nav-item",
                          children: n.name,
                        },
                        e
                      );
                    }),
                  }),
                  Object(A.jsx)("div", {
                    className: "cont",
                    children: Object(A.jsx)("a", {
                      href: b || "#!",
                      children: Object(A.jsx)("img", {
                        alt: "\u9886\u8dd1\u8005",
                        src: o,
                      }),
                    }),
                  }),
                ],
              }),
            ],
          });
        },
        ln = B.a.section(
          s ||
            (s = Object(F.a)([
              "\n    background: #1f62ff;\n    border-radius: .12rem;\n\tbox-shadow: 0px .04rem .16rem 0px rgba(0,36,96,0.16); \n    display: flex;\n    justify-content: space-between;\n    padding: .3rem;;\n    .left{\n        display: flex;\n        flex-direction: column;\n        h1{\n            font-size: .3rem;\n            font-weight: 500;\n            color: #fff;\n            margin-bottom: .15rem;\n        }\n        p{\n            font-size: .22rem;\n            font-weight: 400;\n            color: rgba(255,255,255,0.70);\n            margin-bottom: .1rem;\n        }\n    }\n    .right{\n        display: flex;\n        flex-direction: column;\n        img{\n            width: 1.23rem;\n            height: 1.23rem;\n            margin-top: .08rem;\n        }\n        div{\n            font-size: .22rem;\n            font-weight: 400;\n            color: rgba(255,255,255,0.70);\n            margin-top: .45rem;\n        }\n    }\n    .extendBlock{\n        padding:0 .4rem;\n    }\n\t.extendBlock h2{\n\t\theight:.48rem;\n\t\tfont-size:.34rem;\n\t\tfont-weight:500;\n\t\tcolor:rgba(67,70,105,1);\n\t\tline-height:.48rem;\n\t\tmargin:.4rem 0;\n\t}\t\n\t.extendBlock .listItem{\n\t\tdisplay:flex;\n\t\tjustify-content:space-between;\n\t\tmargin-bottom:.2rem;\n\t}\n\t.extendBlock .listItem .itemKey{\n\t\tfont-size:.32rem;\n\t\tfont-weight:400;\n\t\tcolor:rgba(12,16,57,0.5);\n\t}\n\t.extendBlock .listItem .itemVal{\n\t\tfont-size:.32rem;\n\t\tfont-weight:500;\n\t\tcolor:rgba(12,16,57,0.5);\n\t}\n\t.statement{\n\t\theight:.5rem;\n\t\tfont-size:.26rem;\n\t\tfont-weight:400;\n\t\tcolor:rgba(0,152,255,1);\n\t\tline-height:.5rem;\n\t\tdisplay:flex;\n\t\tjustify-content:flex-start;\n\t\talign-items:center;\n\t\tmargin:.73rem 0 .39rem 0; \n\t}\n\t.statement img{\n\t\twidth:.38rem;\n\t\theight:.38rem;\n\t\tmargin-right:.13rem;\n\t}\n\t.extendList{\n\t\theight:4.5rem;\n\t\toverflow-y: scroll;\n\t}\n\t.extendList li{\n\t\tfont-size:.32rem;\n\t\tfont-weight:400;\n\t\tcolor:rgba(12,16,57,0.5);\n\t\tmargin-bottom:.2rem;\n\t}\n\t.extendBlock table{\n        width: 100%;\n        height: 4.8rem;\n        overflow-y: scroll;\n        display: block;\n        th, td{\n            font-size:0.32rem;\n            font-weight:normal;\n            text-align:center;\n            border: 1px solid #ccc;\n            padding: .1rem;\n\t    }\n    }\n    .hidden {\n        display: none\n    }\n    .recodeParamWrap{\n        height: 7rem;\n        overflow-y: auto;\n    }\n",
            ]))
        ),
        dn = B.a.div(
          l ||
            (l = Object(F.a)([
              "\n    position: fixed;\n    top:0;\n    left: 0;\n    width: 100vw;\n    height: 100vh;\n    background: rgba(0,0,0,.3);\n    z-index: 1000;\n",
            ]))
        ),
        bn = B.a.div(
          d ||
            (d = Object(F.a)([
              "\n    width: 100%;\n    height: 10rem;\n    background: #ffffff;\n    border-radius: .12rem .12rem 0px 0px;\n    box-shadow: 0px .04rem .16rem 0px rgba(0,36,96,0.16); \n    position: absolute;\n    bottom: 0;\n    left: 0;\n    .close{\n        background: url(",
              "/close.png);\n        width: .35rem;\n        height: .35rem;\n        background-size:cover;\n        position: absolute;\n        top: 0.3rem;\n        right:0.4rem;\n    }\n",
            ])),
          Z.a
        ),
        mn = function (n) {
          return (
            n.visble &&
            Object(A.jsx)(dn, {
              onClick: function () {
                return n.onClose();
              },
              children: Object(A.jsxs)(bn, {
                children: [
                  Object(A.jsx)("span", {
                    className: "close",
                    onClick: function () {
                      return n.onClose();
                    },
                  }),
                  n.children,
                ],
              }),
            })
          );
        },
        un = function () {
          Object(J.a)({
            uid: Object(W.a)("uid"),
            model: Object(W.a)("model"),
            cid: Object(W.a)("cid"),
            bid: Object(W.a)("bid"),
            eid: Object(W.a)("eid"),
            url: Object(U.a)(),
            level: Object(W.a)("level"),
            channel: Object(K.a)(),
            client: Object(G.a)(),
            page: "p1",
            method: "m3",
            act: "a013001",
          });
        },
        fn = function (n) {
          var e = Object(C.useState)({}),
            t = Object(T.a)(e, 2),
            i = t[0],
            r = t[1],
            a = Object(C.useState)([]),
            c = Object(T.a)(a, 2),
            o = c[0],
            s = c[1],
            l = Object(C.useState)([]),
            d = Object(T.a)(l, 2),
            b = d[0],
            m = d[1],
            u = Object(C.useState)([]),
            f = Object(T.a)(u, 2),
            j = f[0],
            p = f[1],
            h = Object(C.useState)(!1),
            g = Object(T.a)(h, 2),
            x = g[0],
            O = g[1],
            k = Object(C.useState)(!1),
            v = Object(T.a)(k, 2),
            w = v[0],
            y = v[1],
            _ = Object(C.useState)(!1),
            z = Object(T.a)(_, 2),
            N = z[0],
            S = z[1],
            q = Object(C.useState)(!1),
            F = Object(T.a)(q, 2),
            B = F[0],
            P = F[1];
          return (
            Object(C.useEffect)(
              function () {
                Object(I.a)(
                  E.a.mark(function e() {
                    var t, i;
                    return E.a.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.next = 2), Object(D.a)(Object(U.b)(n.json))
                            );
                          case 2:
                            (t = e.sent),
                              "0" === (i = t.data).status
                                ? S(!0)
                                : "3" === i.status
                                ? P(!0)
                                : y(!0),
                              r(i);
                          case 6:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                )();
              },
              [n]
            ),
            Object(C.useEffect)(
              function () {
                w &&
                  Object(I.a)(
                    E.a.mark(function n() {
                      var e, t;
                      return E.a.wrap(function (n) {
                        for (;;)
                          switch ((n.prev = n.next)) {
                            case 0:
                              if (!i.ext) {
                                n.next = 7;
                                break;
                              }
                              return (
                                (n.next = 3), Object(D.a)(Object(U.b)(i.ext))
                              );
                            case 3:
                              (e = n.sent),
                                (t = e.data),
                                m(t.titles),
                                p(t.datas);
                            case 7:
                              "object" == typeof i.params && s(i.params),
                                "string" == typeof i.params &&
                                  s(JSON.parse(i.params));
                            case 9:
                            case "end":
                              return n.stop();
                          }
                      }, n);
                    })
                  )();
              },
              [i, w]
            ),
            Object(C.useEffect)(
              function () {
                x &&
                  Object(I.a)(
                    E.a.mark(function n() {
                      return E.a.wrap(function (n) {
                        for (;;)
                          switch ((n.prev = n.next)) {
                            case 0:
                              return n.abrupt("return", un());
                            case 1:
                            case "end":
                              return n.stop();
                          }
                      }, n);
                    })
                  )();
              },
              [x]
            ),
            Object(A.jsxs)(ln, {
              children: [
                Object(A.jsxs)("div", {
                  className: B ? "left" : "hidden",
                  children: [
                    Object(A.jsx)("h1", {
                      children: "\u4e2d\u56fd\u80fd\u6548\u6807\u8bc6",
                    }),
                    Object(A.jsx)("p", {
                      children: Object(A.jsx)("label", {
                        children:
                          "\u8be5\u578b\u53f7\u6b63\u5728\u5907\u6848\u4e2d",
                      }),
                    }),
                  ],
                }),
                Object(A.jsxs)("div", {
                  className: N ? "left" : "hidden",
                  children: [
                    Object(A.jsx)("h1", {
                      children: "\u4e2d\u56fd\u80fd\u6548\u6807\u8bc6",
                    }),
                    Object(A.jsx)("p", {
                      children: Object(A.jsx)("label", {
                        children:
                          "\u8be5\u578b\u53f7\u5907\u6848\u5df2\u64a4\u9500",
                      }),
                    }),
                    Object(A.jsx)("p", {
                      children: Object(A.jsx)("label", {
                        children:
                          "\u64a4\u9500\u539f\u56e0:\u8d28\u91cf\u62bd\u67e5\u80fd\u6548\u4e0d\u5408\u683c",
                      }),
                    }),
                    Object(A.jsx)("p", {
                      children: Object(A.jsx)("label", {
                        children:
                          "\u8be6\u60c5\u8bf7\u8bbf\u95ee\u201c\u4e2d\u56fd\u80fd\u6548\u6807\u8bc6\u7f51\u201d\u67e5\u8be2",
                      }),
                    }),
                    Object(A.jsx)("p", {
                      children: Object(A.jsx)("label", {
                        children:
                          "\u7f51\u5740\uff1ahttps://www.energylabelrecord.com",
                      }),
                    }),
                  ],
                }),
                Object(A.jsxs)("div", {
                  className: w ? "left" : "hidden",
                  children: [
                    Object(A.jsx)("h1", {
                      children: "\u4e2d\u56fd\u80fd\u6548\u6807\u8bc6",
                    }),
                    Object(A.jsxs)("p", {
                      children: [
                        Object(A.jsx)("label", {
                          children: "\u578b\u53f7\uff1a",
                        }),
                        Object(A.jsx)("span", { children: i.model }),
                      ],
                    }),
                    Object(A.jsxs)("p", {
                      children: [
                        Object(A.jsx)("label", {
                          children: "\u5907\u6848\u53f7\uff1a",
                        }),
                        Object(A.jsx)("span", { children: i.recordno }),
                      ],
                    }),
                    Object(A.jsxs)("p", {
                      children: [
                        Object(A.jsx)("label", {
                          children: "\u516c\u544a\u65f6\u95f4\uff1a",
                        }),
                        Object(A.jsx)("span", { children: i.pubdate }),
                      ],
                    }),
                    Object(A.jsxs)("p", {
                      children: [
                        Object(A.jsx)("label", {
                          children: "\u751f\u4ea7\u8005\u540d\u79f0\uff1a",
                        }),
                        Object(A.jsx)("span", { children: i.producer }),
                      ],
                    }),
                  ],
                }),
                Object(A.jsxs)("div", {
                  className: w ? "right" : "hidden",
                  children: [
                    Object(A.jsx)("img", {
                      alt: "\u80fd\u6548".concat(i.level, "\u7ea7"),
                      src: "https://www.pzjdimg.com/bbqk/img/level".concat(
                        i.level ? i.level : 1,
                        ".png"
                      ),
                    }),
                    Object(A.jsx)("div", {
                      onClick: function () {
                        return O(!0);
                      },
                      children: "\u67e5\u770b\u8be6\u60c5 >",
                    }),
                  ],
                }),
                Object(A.jsx)(mn, {
                  visble: x,
                  onClose: function () {
                    return O(!1);
                  },
                  children: Object(A.jsxs)("div", {
                    className: "extendBlock",
                    children: [
                      Object(A.jsxs)("p", {
                        className: "statement",
                        children: [
                          Object(A.jsx)("img", {
                            alt: "",
                            src: "https://www.pzjdimg.com/bbqk/img/20191126/plaintIcon.png",
                          }),
                          "\u80fd\u6548\u6807\u8bc6\u4e0a\u7684\u6240\u6709\u4fe1\u606f\u6e90\u4e8e\u4f01\u4e1a\u81ea\u6211\u58f0\u660e",
                        ],
                      }),
                      Object(A.jsxs)("div", {
                        className: "recodeParamWrap",
                        children: [
                          Object(A.jsx)("h2", {
                            children: "\u5907\u6848\u53c2\u6570",
                          }),
                          Object(A.jsx)("div", {
                            id: "first",
                            className: "paramInfo",
                            children:
                              o.length > 0 &&
                              o.map(function (n, e) {
                                return Object(A.jsxs)(
                                  "div",
                                  {
                                    className: "listItem",
                                    children: [
                                      Object(A.jsx)("p", {
                                        className: "itemKey",
                                        dangerouslySetInnerHTML: {
                                          __html: n.d,
                                        },
                                      }),
                                      Object(A.jsx)("span", {
                                        className: "itemVal",
                                        children: n.v,
                                      }),
                                    ],
                                  },
                                  n.d + e
                                );
                              }),
                          }),
                          b.length > 0 &&
                            Object(A.jsxs)("table", {
                              children: [
                                Object(A.jsx)("thead", {
                                  children: Object(A.jsx)("tr", {
                                    children: b.map(function (n, e) {
                                      return Object(A.jsx)(
                                        "th",
                                        { children: n.d },
                                        n.k + 21 * e
                                      );
                                    }),
                                  }),
                                }),
                                Object(A.jsx)("tbody", {
                                  children:
                                    j.length > 0 &&
                                    j.map(function (n, e) {
                                      return Object(A.jsx)(
                                        "tr",
                                        {
                                          children: n.map(function (n, e) {
                                            return Object(A.jsx)(
                                              "td",
                                              { children: n.v },
                                              n.k + 10 * e
                                            );
                                          }),
                                        },
                                        e + 100
                                      );
                                    }),
                                }),
                              ],
                            }),
                        ],
                      }),
                    ],
                  }),
                }),
              ],
            })
          );
        },
        jn = B.a.section(
          b ||
            (b = Object(F.a)([
              "\n    background: #1f62ff;\n    border-radius: .32rem;\n\tbox-shadow: 0px .04rem .16rem 0px rgba(0,36,96,0.16); \n    display: flex;\n    justify-content: space-between;\n    padding: .3rem;;\n    .left{\n        display: flex;\n        flex-direction: column;\n        h1{\n            font-size: .3rem;\n            font-weight: 500;\n            color: #fff;\n            margin-bottom: .15rem;\n        }\n        p{\n            font-size: .22rem;\n            font-weight: 400;\n            color: rgba(255,255,255,0.70);\n            margin-bottom: .1rem;\n        }\n    }\n    .right{\n        display: flex;\n        flex-direction: column;\n        img{\n            width: 1.23rem;\n            height: 1.23rem;\n            margin-top: .08rem;\n        }\n        div{\n            font-size: .22rem;\n            font-weight: 400;\n            color: rgba(255,255,255,0.70);\n            margin-top: .45rem;\n        }\n    }\n    .extendBlock{\n        padding:0 .4rem;\n    }\n\t.extendBlock h2{\n\t\theight:.48rem;\n\t\tfont-size:.34rem;\n\t\tfont-weight:500;\n\t\tcolor:rgba(67,70,105,1);\n\t\tline-height:.48rem;\n\t\tmargin:.4rem 0;\n\t}\t\n\t.extendBlock .listItem{\n\t\tdisplay:flex;\n\t\tjustify-content:space-between;\n\t\tmargin-bottom:.2rem;\n\t}\n\t.extendBlock .listItem .itemKey{\n\t\tfont-size:.32rem;\n\t\tfont-weight:400;\n\t\tcolor:rgba(12,16,57,0.5);\n\t}\n\t.extendBlock .listItem .itemVal{\n\t\tfont-size:.32rem;\n\t\tfont-weight:500;\n\t\tcolor:rgba(12,16,57,0.5);\n\t}\n\t.statement{\n\t\theight:.5rem;\n\t\tfont-size:.26rem;\n\t\tfont-weight:400;\n\t\tcolor:rgba(0,152,255,1);\n\t\tline-height:.5rem;\n\t\tdisplay:flex;\n\t\tjustify-content:flex-start;\n\t\talign-items:center;\n\t\tmargin:.73rem 0 .39rem 0; \n\t}\n\t.statement img{\n\t\twidth:.38rem;\n\t\theight:.38rem;\n\t\tmargin-right:.13rem;\n\t}\n\t.extendList{\n\t\theight:4.5rem;\n\t\toverflow-y: scroll;\n\t}\n\t.extendList li{\n\t\tfont-size:.32rem;\n\t\tfont-weight:400;\n\t\tcolor:rgba(12,16,57,0.5);\n\t\tmargin-bottom:.2rem;\n\t}\n\t.extendBlock table{\n        width: 100%;\n        height: 4.8rem;\n        overflow-y: scroll;\n        display: block;\n        th, td{\n            font-size:0.32rem;\n            font-weight:normal;\n            text-align:center;\n            border: 1px solid #ccc;\n            padding: .1rem;\n\t    }\n    }\n    .hidden {\n        display: none\n    }\n    .recodeParamWrap{\n        height: 7rem;\n        overflow-y: auto;\n    }\n",
            ]))
        ),
        pn = B.a.div(
          m ||
            (m = Object(F.a)([
              "\n    position: fixed;\n    top:0;\n    left: 0;\n    width: 100vw;\n    height: 100vh;\n    background: rgba(0,0,0,.3);\n    z-index: 1000;\n",
            ]))
        ),
        hn = B.a.div(
          u ||
            (u = Object(F.a)([
              "\n    width: 100%;\n    height: 10rem;\n    background: #ffffff;\n    border-radius: .32rem .32rem 0px 0px;\n    box-shadow: 0px .04rem .16rem 0px rgba(0,36,96,0.16); \n    position: absolute;\n    bottom: 0;\n    left: 0;\n    .close{\n        background: url(",
              "/close.png);\n        width: .35rem;\n        height: .35rem;\n        background-size:cover;\n        position: absolute;\n        top: 0.3rem;\n        right:0.4rem;\n    }\n",
            ])),
          Z.a
        ),
        gn = function (n) {
          return (
            n.visble &&
            Object(A.jsx)(pn, {
              onClick: function () {
                return n.onClose();
              },
              children: Object(A.jsxs)(hn, {
                children: [
                  Object(A.jsx)("span", {
                    className: "close",
                    onClick: function () {
                      return n.onClose();
                    },
                  }),
                  n.children,
                ],
              }),
            })
          );
        },
        xn = function (n) {
          var e = Object(C.useState)({}),
            t = Object(T.a)(e, 2),
            i = t[0],
            r = t[1],
            a = Object(C.useState)([]),
            c = Object(T.a)(a, 2),
            o = c[0],
            s = c[1],
            l = Object(C.useState)([]),
            d = Object(T.a)(l, 2),
            b = d[0],
            m = d[1],
            u = Object(C.useState)([]),
            f = Object(T.a)(u, 2),
            j = f[0],
            p = f[1],
            h = Object(C.useState)(!1),
            g = Object(T.a)(h, 2),
            x = g[0],
            O = g[1],
            k = Object(C.useState)(!1),
            v = Object(T.a)(k, 2),
            w = v[0],
            y = v[1],
            _ = Object(C.useState)(!1),
            z = Object(T.a)(_, 2),
            N = z[0],
            S = z[1],
            q = Object(C.useState)(!1),
            F = Object(T.a)(q, 2),
            B = F[0],
            P = F[1],
            L = Object(C.useState)(!1),
            $ = Object(T.a)(L, 2),
            M = $[0],
            R = $[1];
          return (
            Object(C.useEffect)(
              function () {
                Object(I.a)(
                  E.a.mark(function e() {
                    var t, i;
                    return E.a.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.next = 2), Object(D.a)(Object(U.b)(n.json))
                            );
                          case 2:
                            if (((t = e.sent), "9" !== (i = t.data).status)) {
                              e.next = 9;
                              break;
                            }
                            return (
                              (document.title = "\u5c0f\u7c73\u670d\u52a1"),
                              e.abrupt("return")
                            );
                          case 9:
                            document.title =
                              "\u4e2d\u56fd\u80fd\u6548\u6807\u8bc6";
                          case 10:
                            "0" === i.status
                              ? S(!0)
                              : "3" === i.status
                              ? P(!0)
                              : y(!0),
                              r(i),
                              R(!0);
                          case 13:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                )();
              },
              [n]
            ),
            Object(C.useEffect)(
              function () {
                w &&
                  Object(I.a)(
                    E.a.mark(function n() {
                      var e, t;
                      return E.a.wrap(function (n) {
                        for (;;)
                          switch ((n.prev = n.next)) {
                            case 0:
                              if (!i.ext) {
                                n.next = 7;
                                break;
                              }
                              return (
                                (n.next = 3), Object(D.a)(Object(U.b)(i.ext))
                              );
                            case 3:
                              (e = n.sent),
                                (t = e.data),
                                m(t.titles),
                                p(t.datas);
                            case 7:
                              "object" == typeof i.params && s(i.params),
                                "string" == typeof i.params &&
                                  s(JSON.parse(i.params));
                            case 9:
                            case "end":
                              return n.stop();
                          }
                      }, n);
                    })
                  )();
              },
              [i, w]
            ),
            Object(C.useEffect)(
              function () {
                x &&
                  Object(I.a)(
                    E.a.mark(function n() {
                      return E.a.wrap(function (n) {
                        for (;;)
                          switch ((n.prev = n.next)) {
                            case 0:
                              return n.abrupt("return", un());
                            case 1:
                            case "end":
                              return n.stop();
                          }
                      }, n);
                    })
                  )();
              },
              [x]
            ),
            M
              ? Object(A.jsxs)(jn, {
                  onClick: function () {
                    return O(!x);
                  },
                  children: [
                    Object(A.jsxs)("div", {
                      className: B ? "left" : "hidden",
                      children: [
                        Object(A.jsx)("h1", {
                          children: "\u4e2d\u56fd\u80fd\u6548\u6807\u8bc6",
                        }),
                        Object(A.jsx)("p", {
                          children: Object(A.jsx)("label", {
                            children:
                              "\u8be5\u578b\u53f7\u6b63\u5728\u5907\u6848\u4e2d",
                          }),
                        }),
                      ],
                    }),
                    Object(A.jsxs)("div", {
                      className: N ? "left" : "hidden",
                      children: [
                        Object(A.jsx)("h1", {
                          children: "\u4e2d\u56fd\u80fd\u6548\u6807\u8bc6",
                        }),
                        Object(A.jsx)("p", {
                          children: Object(A.jsx)("label", {
                            children:
                              "\u8be5\u578b\u53f7\u5907\u6848\u5df2\u64a4\u9500",
                          }),
                        }),
                        Object(A.jsx)("p", {
                          children: Object(A.jsx)("label", {
                            children:
                              "\u64a4\u9500\u539f\u56e0:\u8d28\u91cf\u62bd\u67e5\u80fd\u6548\u4e0d\u5408\u683c",
                          }),
                        }),
                        Object(A.jsx)("p", {
                          children: Object(A.jsx)("label", {
                            children:
                              "\u8be6\u60c5\u8bf7\u8bbf\u95ee\u201c\u4e2d\u56fd\u80fd\u6548\u6807\u8bc6\u7f51\u201d\u67e5\u8be2",
                          }),
                        }),
                        Object(A.jsx)("p", {
                          children: Object(A.jsx)("label", {
                            children:
                              "\u7f51\u5740\uff1ahttps://www.energylabelrecord.com",
                          }),
                        }),
                      ],
                    }),
                    Object(A.jsxs)("div", {
                      className: w ? "left" : "hidden",
                      children: [
                        Object(A.jsx)("h1", {
                          children: "\u4e2d\u56fd\u80fd\u6548\u6807\u8bc6",
                        }),
                        Object(A.jsxs)("p", {
                          children: [
                            Object(A.jsx)("label", {
                              children: "\u578b\u53f7\uff1a",
                            }),
                            Object(A.jsx)("span", { children: i.model }),
                          ],
                        }),
                        Object(A.jsxs)("p", {
                          children: [
                            Object(A.jsx)("label", {
                              children: "\u5907\u6848\u53f7\uff1a",
                            }),
                            Object(A.jsx)("span", { children: i.recordno }),
                          ],
                        }),
                        Object(A.jsxs)("p", {
                          children: [
                            Object(A.jsx)("label", {
                              children: "\u516c\u544a\u65f6\u95f4\uff1a",
                            }),
                            Object(A.jsx)("span", { children: i.pubdate }),
                          ],
                        }),
                        Object(A.jsxs)("p", {
                          children: [
                            Object(A.jsx)("label", {
                              children: "\u751f\u4ea7\u8005\u540d\u79f0\uff1a",
                            }),
                            Object(A.jsx)("span", { children: i.producer }),
                          ],
                        }),
                      ],
                    }),
                    Object(A.jsxs)("div", {
                      className: w ? "right" : "hidden",
                      children: [
                        Object(A.jsx)("img", {
                          alt: "\u80fd\u6548".concat(i.level, "\u7ea7"),
                          src: "https://www.pzjdimg.com/bbqk/img/level".concat(
                            i.level ? i.level : 1,
                            ".png"
                          ),
                        }),
                        Object(A.jsx)("div", {
                          children: "\u67e5\u770b\u8be6\u60c5 >",
                        }),
                      ],
                    }),
                    Object(A.jsx)(gn, {
                      visble: x,
                      onClose: function () {
                        return O(!1);
                      },
                      children: Object(A.jsxs)("div", {
                        className: "extendBlock",
                        children: [
                          Object(A.jsxs)("p", {
                            className: "statement",
                            children: [
                              Object(A.jsx)("img", {
                                alt: "",
                                src: "https://www.pzjdimg.com/bbqk/img/20191126/plaintIcon.png",
                              }),
                              "\u80fd\u6548\u6807\u8bc6\u4e0a\u7684\u6240\u6709\u4fe1\u606f\u6e90\u4e8e\u4f01\u4e1a\u81ea\u6211\u58f0\u660e",
                            ],
                          }),
                          Object(A.jsxs)("div", {
                            className: "recodeParamWrap",
                            children: [
                              Object(A.jsx)("h2", {
                                children: "\u5907\u6848\u53c2\u6570",
                              }),
                              Object(A.jsx)("div", {
                                id: "first",
                                className: "paramInfo",
                                children:
                                  o.length > 0 &&
                                  o.map(function (n, e) {
                                    return Object(A.jsxs)(
                                      "div",
                                      {
                                        className: "listItem",
                                        children: [
                                          Object(A.jsx)("p", {
                                            className: "itemKey",
                                            children: n.d,
                                          }),
                                          Object(A.jsx)("span", {
                                            className: "itemVal",
                                            children: n.v,
                                          }),
                                        ],
                                      },
                                      n.d + e
                                    );
                                  }),
                              }),
                              b.length > 0 &&
                                Object(A.jsxs)("table", {
                                  children: [
                                    Object(A.jsx)("thead", {
                                      children: Object(A.jsx)("tr", {
                                        children: b.map(function (n, e) {
                                          return Object(A.jsx)(
                                            "th",
                                            { children: n.d },
                                            n.k + 21 * e
                                          );
                                        }),
                                      }),
                                    }),
                                    Object(A.jsx)("tbody", {
                                      children:
                                        j.length > 0 &&
                                        j.map(function (n, e) {
                                          return Object(A.jsx)(
                                            "tr",
                                            {
                                              children: n.map(function (n, e) {
                                                return Object(A.jsx)(
                                                  "td",
                                                  { children: n.v },
                                                  n.k + 10 * e
                                                );
                                              }),
                                            },
                                            e + 100
                                          );
                                        }),
                                    }),
                                  ],
                                }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  ],
                })
              : Object(A.jsx)(A.Fragment, {})
          );
        },
        On = B.a.section(
          f ||
            (f = Object(F.a)([
              "\n    margin-top: .42rem;\n    .template-bg{\n        border-radius: .2rem;\n        border-radius: .2rem;\n        background-color: #0060c9;\n        box-shadow: 0rem 0rem .2rem 0rem rgba(0,0,0,0.15); \n    }\n    .brandinfo1-title{\n        font-size: .34rem;\n        font-family: PingFangSC, PingFangSC-Semibold;\n        font-weight: 600;\n        text-align: left;\n        color: #434669;\n        margin-bottom: .3rem;\n    }\n    .brandinfo1-wrap{\n        padding: .36rem .4rem .78rem .4rem;\n        &_img-wrap{\n            text-align: center;\n            &_img{\n                width: 5.68rem;\n                height: .66rem;\n                margin: 0 auto;\n            }\n        }\n        &_tag{\n            background: rgba(255,255,255,0.11);\n            border: .01rem solid rgba(255,255,255,0.20);\n            border-radius: .1rem;\n            &_item-wrap{\n                position: relative;\n                border-bottom: 1px solid rgba(255,255,255,0.20);\n            }\n            &_item{\n                display:flex;\n                justify-content: space-between;\n                align-items: center;\n                margin: 0 .25rem;\n                padding: .26rem 0;\n                &_title{\n                    display:flex;\n                    justify-content: start;\n                    align-items: center;\n                    &_img{\n                        width: .48rem;\n                        height: .48rem;\n                        margin-right: .19rem;\n                    }\n                    &_name{\n                        font-size: .32rem;\n                        font-family: PingFangSC, PingFangSC-Medium;\n                        font-weight: 500;\n                        text-align: left;\n                        color: #ffffff;\n                    }\n                }\n                &_right{\n                    width: .13rem;\n                    height: .23rem;\n                }\n            }\n            &_item-wrap:last-child{\n                border-bottom: none;\n            }\n        }\n        \n    }\n    .brandinfo1-footer{\n        text-align: center;\n        margin-bottom: .16rem;\n        height: 3.4rem;\n        background-size: cover;\n        &_qrcode{\n            width: 2.3rem;\n            height: 2.6rem;\n            background: #ffffff;\n            border-radius: .2rem;\n            margin: 0 auto;\n            padding: .2rem .1rem 0;\n            &_img{\n                width: 1.81rem;\n                height: 1.81rem;\n            }\n            &_title{\n                font-size: .24rem;\n                padding-top: .1rem;\n            }\n        }\n    }\n",
            ]))
        ),
        kn = B.a.section(
          j ||
            (j = Object(F.a)([
              "\nmargin-top: .2rem;\n.slider {\n    width: 6.30rem;\n    background: transparent;\n    border-radius: .12rem;\n    box-shadow: 0px 0px 20px 0px rgba(0,36,96,0.04);\n    margin: 0 auto;\n    height: 3.65rem;\n    margin-top: 0.16rem;\n    padding-top: 0;\n}\n\n.slider .slideCont {\n    display: flex;\n    align-items: center;\n    flex-wrap: wrap;\n    justify-content: center;\n\n}\n\n.slider .slideCont img {\n    width: 6.30rem;\n    height: 3rem;\n    border-radius: .12rem;\n}\n.slick-slider {\n    position: relative;\n\n    display: block;\n    box-sizing: border-box;\n\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n\n    -webkit-touch-callout: none;\n    -khtml-user-select: none;\n    -ms-touch-action: pan-y;\n    touch-action: pan-y;\n    -webkit-tap-highlight-color: transparent;\n}\n\n.slick-list {\n    position: relative;\n\n    display: block;\n    overflow: hidden;\n\n    margin: 0;\n    padding: 0;\n}\n\n.slick-list:focus {\n    outline: none;\n}\n\n.slick-list.dragging {\n    cursor: pointer;\n    cursor: hand;\n}\n\n.slick-slider .slick-track,\n.slick-slider .slick-list {\n    -webkit-transform: translate3d(0, 0, 0);\n    -moz-transform: translate3d(0, 0, 0);\n    -ms-transform: translate3d(0, 0, 0);\n    -o-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n}\n\n.slick-track {\n    position: relative;\n    top: 0;\n    left: 0;\n\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n}\n\n.slick-track:before,\n.slick-track:after {\n    display: table;\n\n    content: '';\n}\n\n.slick-track:after {\n    clear: both;\n}\n\n.slick-loading .slick-track {\n    visibility: hidden;\n}\n\n.slick-slide {\n    display: none;\n    float: left;\n\n    height: 100%;\n    min-height: 1px;\n}\n\n[dir='rtl'] .slick-slide {\n    float: right;\n}\n\n.slick-slide img {\n    display: block;\n}\n\n.slick-slide.slick-loading img {\n    display: none;\n}\n\n.slick-slide.dragging img {\n    pointer-events: none;\n}\n\n.slick-initialized .slick-slide {\n    display: block;\n}\n\n.slick-loading .slick-slide {\n    visibility: hidden;\n}\n\n.slick-vertical .slick-slide {\n    display: block;\n\n    height: auto;\n\n    border: 1px solid transparent;\n}\n\n.slick-arrow.slick-hidden {\n    display: none;\n}\n\n/* Slider */\n\n\n/* Arrows */\n.slick-prev,\n.slick-next {\n    font-size: 0;\n    line-height: 0;\n\n    position: absolute;\n    top: 50%;\n\n    display: none !important;\n\n    width: 20px;\n    height: 20px;\n    padding: 0;\n    -webkit-transform: translate(0, -50%);\n    -ms-transform: translate(0, -50%);\n    transform: translate(0, -50%);\n\n    cursor: pointer;\n\n    color: transparent;\n    border: none;\n    outline: none;\n    background: transparent;\n}\n\n.slick-prev:hover,\n.slick-prev:focus,\n.slick-next:hover,\n.slick-next:focus {\n    color: transparent;\n    outline: none;\n    background: transparent;\n}\n\n.slick-prev:hover:before,\n.slick-prev:focus:before,\n.slick-next:hover:before,\n.slick-next:focus:before {\n    opacity: 1;\n}\n\n.slick-prev.slick-disabled:before,\n.slick-next.slick-disabled:before {\n    opacity: .25;\n}\n\n.slick-prev:before,\n.slick-next:before {\n    font-family: 'slick';\n    font-size: 20px;\n    line-height: 1;\n\n    opacity: .75;\n    color: white;\n\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n}\n\n.slick-prev {\n    left: -25px;\n}\n\n[dir='rtl'] .slick-prev {\n    right: -25px;\n    left: auto;\n}\n\n.slick-prev:before {\n    content: '\u2190';\n}\n\n[dir='rtl'] .slick-prev:before {\n    content: '\u2192';\n}\n\n.slick-next {\n    right: -25px;\n}\n\n[dir='rtl'] .slick-next {\n    right: auto;\n    left: -25px;\n}\n\n.slick-next:before {\n    content: '\u2192';\n}\n\n[dir='rtl'] .slick-next:before {\n    content: '\u2190';\n}\n\n/* Dots */\n.slick-dotted.slick-slider {\n    margin-bottom: 30px;\n}\n\n.slick-dots {\n    position: absolute;\n    bottom: -0.15rem;\n\n    display: block;\n\n    width: 100%;\n    padding: 0;\n    margin: 0;\n\n    list-style: none;\n\n    text-align: center;\n}\n\n.slick-dots li {\n    position: relative;\n\n    display: inline-block;\n\n    width: .1rem;\n    height: .2rem;\n    margin: 0 3px;\n    padding: 0;\n\n    cursor: pointer;\n}\n\n.slick-dots li button {\n    font-size: 0;\n    line-height: 0;\n\n    display: block;\n\n    width: 20px;\n    height: 20px;\n    padding: 5px;\n\n    cursor: pointer;\n\n    color: transparent;\n    border: 0;\n    outline: none;\n    background: transparent;\n}\n\n.slick-dots li button:hover,\n.slick-dots li button:focus {\n    outline: none;\n}\n\n.slick-dots li button:hover:before,\n.slick-dots li button:focus:before {\n    opacity: 1;\n}\n\n.slick-dots li button:before {\n    font-family: 'slick';\n    font-size: 6px;\n    line-height: 20px;\n\n    position: absolute;\n    top: .14rem;\n    left: 0;\n\n    width: .09rem;\n    height: .09rem;\n\n    content: '\u2022';\n    text-align: center;\n\n    opacity: .25;\n    color: #ffffff;\n\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n}\n\n.slick-dots li.slick-active button:before {\n    opacity: .85;\n    color: #ffffff;\n}\n",
            ]))
        ),
        vn = function (n) {
          var e = Object(C.useState)([]),
            t = Object(T.a)(e, 2),
            i = t[0],
            r = t[1];
          Object(C.useEffect)(
            function () {
              Object(I.a)(
                E.a.mark(function e() {
                  return E.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          r(n.list);
                        case 1:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              )();
            },
            [n.list]
          );
          var a = function (n) {
              var e;
              n.link &&
                ((e = n.id),
                Object(J.a)({
                  uid: Object(W.a)("uid"),
                  model: Object(W.a)("model"),
                  cid: Object(W.a)("cid"),
                  bid: Object(W.a)("bid"),
                  eid: Object(W.a)("eid"),
                  url: Object(U.a)(),
                  level: Object(W.a)("level"),
                  channel: Object(K.a)(),
                  client: Object(G.a)(),
                  page: "p1",
                  method: "m3",
                  act: "a113slider_" + e,
                }),
                (window.location.href = n.link));
            },
            c = {
              dots: !0,
              infinite: !0,
              speed: 100 * n.time,
              slidesToShow: 1,
              slidesToScroll: 1,
              autoplay: !0,
            };
          return (
            (null === i || void 0 === i ? void 0 : i.length) &&
            Object(A.jsx)(kn, {
              children: Object(A.jsx)("div", {
                className: "slider",
                children: Object(A.jsx)(
                  R.a,
                  Object($.a)(
                    Object($.a)({}, c),
                    {},
                    {
                      children: i.map(function (n, e) {
                        return Object(A.jsx)(
                          "div",
                          {
                            className: "slideItem",
                            children: Object(A.jsx)("a", {
                              href: "#",
                              onClick: function () {
                                return a(n);
                              },
                              className: "slideCont",
                              children: Object(A.jsx)("img", {
                                alt: "banner",
                                src: n.img,
                              }),
                            }),
                          },
                          n.name + e
                        );
                      }),
                    }
                  )
                ),
              }),
            })
          );
        },
        wn = t(16),
        yn = function (n, e) {
          Object(J.a)({
            uid: Object(W.a)("uid"),
            model: Object(W.a)("model"),
            cid: Object(W.a)("cid"),
            bid: Object(W.a)("bid"),
            eid: Object(W.a)("eid"),
            url: Object(U.a)(),
            level: Object(W.a)("level"),
            channel: Object(K.a)(),
            client: Object(G.a)(),
            page: "p1",
            method: "m3",
            act: "a113" + e + "_" + n,
          });
        },
        _n = function (n) {
          var e = n.item,
            t = n.tagType;
          return Object(A.jsx)(
            "div",
            {
              className: "brandinfo1-wrap_tag_item-wrap",
              onClick: function () {
                return yn(e.id, t);
              },
              children: Object(A.jsx)("a", {
                href: "tel:" + e.phone,
                children: Object(A.jsxs)("div", {
                  className: "brandinfo1-wrap_tag_item",
                  children: [
                    Object(A.jsxs)("div", {
                      className: "brandinfo1-wrap_tag_item_title",
                      children: [
                        Object(A.jsx)("img", {
                          className: "brandinfo1-wrap_tag_item_title_img",
                          src: e.icon,
                          alt: e.title,
                        }),
                        Object(A.jsx)("span", {
                          className: "brandinfo1-wrap_tag_item_title_name",
                          children: e.title,
                        }),
                      ],
                    }),
                    Object(A.jsx)("img", {
                      className: "brandinfo1-wrap_tag_item_right",
                      src: wn.a,
                      alt: "ra",
                    }),
                  ],
                }),
              }),
            },
            e.title
          );
        },
        zn = function (n) {
          var e = n.item,
            t = n.tagType;
          return (
            Object(C.useEffect)(
              function () {
                Object(I.a)(
                  E.a.mark(function n() {
                    return E.a.wrap(function (n) {
                      for (;;)
                        switch ((n.prev = n.next)) {
                          case 0:
                            document
                              .getElementById("launch-btn")
                              .addEventListener("launch", function () {
                                yn(e.id, t);
                              });
                          case 2:
                          case "end":
                            return n.stop();
                        }
                    }, n);
                  })
                )();
              },
              [e.id, n, t]
            ),
            e &&
              Object(A.jsxs)(
                "div",
                {
                  className: "brandinfo1-wrap_tag_item-wrap",
                  children: [
                    Object(A.jsxs)("div", {
                      className: "brandinfo1-wrap_tag_item",
                      children: [
                        Object(A.jsxs)("div", {
                          className: "brandinfo1-wrap_tag_item_title",
                          children: [
                            Object(A.jsx)("img", {
                              className: "brandinfo1-wrap_tag_item_title_img",
                              src: e.icon,
                              alt: e.title,
                            }),
                            Object(A.jsx)("span", {
                              className: "brandinfo1-wrap_tag_item_title_name",
                              children: e.title,
                            }),
                          ],
                        }),
                        Object(A.jsx)("img", {
                          className: "brandinfo1-wrap_tag_item_right",
                          src: wn.a,
                          alt: "ra",
                        }),
                      ],
                    }),
                    Object(A.jsx)("wx-open-launch-weapp", {
                      id: "launch-btn",
                      username: e.miniapp.id,
                      path: e.miniapp.path,
                      style: {
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                      },
                      children: Object(A.jsx)("script", {
                        type: "text/wxtag-template",
                        children: Object(A.jsx)("div", {
                          style: {
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            opacity: 0,
                          },
                        }),
                      }),
                    }),
                  ],
                },
                e.title
              )
          );
        },
        Nn = function (n) {
          var e = n.item,
            t = n.tagType;
          return Object(A.jsx)(
            "div",
            {
              className: "brandinfo1-wrap_tag_item-wrap",
              onClick: function () {
                yn(e.id, t), Object(D.c)(e.link);
              },
              children: Object(A.jsxs)("div", {
                className: "brandinfo1-wrap_tag_item",
                children: [
                  Object(A.jsxs)("div", {
                    className: "brandinfo1-wrap_tag_item_title",
                    children: [
                      Object(A.jsx)("img", {
                        className: "brandinfo1-wrap_tag_item_title_img",
                        src: e.icon,
                        alt: e.title,
                      }),
                      Object(A.jsx)("span", {
                        className: "brandinfo1-wrap_tag_item_title_name",
                        children: e.title,
                      }),
                    ],
                  }),
                  Object(A.jsx)("img", {
                    className: "brandinfo1-wrap_tag_item_right",
                    src: wn.a,
                    alt: "ra",
                  }),
                ],
              }),
            },
            e.title
          );
        },
        Sn = t(13),
        Cn = t.n(Sn),
        qn = (function () {
          var n = Object(I.a)(
            E.a.mark(function n(e) {
              var t, i;
              return E.a.wrap(function (n) {
                for (;;)
                  switch ((n.prev = n.next)) {
                    case 0:
                      return (
                        (n.next = 2),
                        (r = { url: window.location.href }),
                        Cn()({
                          url: "https://wxjs.bbqk.com/weixin/jsapi",
                          method: "get",
                          params: r,
                        })
                      );
                    case 2:
                      (t = n.sent),
                        (i = t.data),
                        window.wx.config({
                          debug: !1,
                          appId: i.appId,
                          timestamp: i.timestamp,
                          nonceStr: i.nonceStr,
                          signature: i.signature,
                          jsApiList: [
                            "scanQRCode",
                            "updateAppMessageShareData",
                            "updateTimelineShareData",
                            "onMenuShareWeibo",
                          ],
                          openTagList: [e],
                        });
                    case 5:
                    case "end":
                      return n.stop();
                  }
                var r;
              }, n);
            })
          );
          return function (e) {
            return n.apply(this, arguments);
          };
        })(),
        En = function (n) {
          var e = Object(C.useState)(""),
            t = Object(T.a)(e, 2),
            i = t[0],
            r = t[1],
            a = Object(C.useState)({}),
            c = Object(T.a)(a, 2),
            o = c[0],
            s = c[1],
            l = Object(C.useState)({}),
            d = Object(T.a)(l, 2),
            b = d[0],
            m = d[1],
            u = Object(C.useState)({}),
            f = Object(T.a)(u, 2),
            j = f[0],
            p = f[1],
            h = Object(C.useState)([]),
            g = Object(T.a)(h, 2),
            x = g[0],
            O = g[1],
            k = Object(C.useState)([]),
            v = Object(T.a)(k, 2),
            w = v[0],
            y = v[1],
            _ = 0;
          Object(C.useEffect)(
            function () {
              Object(I.a)(
                E.a.mark(function e() {
                  var t, i, a, c, o, l, d, b, u;
                  return E.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.next = 2), Object(D.a)(Object(U.b)(n.json));
                        case 2:
                          if (
                            ((t = e.sent),
                            (i = t.data),
                            (a = i.title),
                            (c = i.frame),
                            (o = i.qrcode),
                            (l = i.tag1),
                            (d = i.tag2),
                            (b = i.slide),
                            (u = !1),
                            l.forEach(function (n) {
                              n.miniapp && (u = !0);
                            }),
                            d.forEach(function (n) {
                              n.miniapp && (u = !0);
                            }),
                            !u)
                          ) {
                            e.next = 16;
                            break;
                          }
                          return (e.next = 16), qn("wx-open-launch-weapp");
                        case 16:
                          r(a), s(c), m(o), p(b), O(l), y(d);
                        case 22:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              )();
            },
            [n]
          );
          var z = !1,
            N = function () {
              return (
                clearTimeout(_),
                z &&
                  ((z = !1),
                  Object(J.a)({
                    uid: Object(W.a)("uid"),
                    model: Object(W.a)("model"),
                    cid: Object(W.a)("cid"),
                    bid: Object(W.a)("bid"),
                    eid: Object(W.a)("eid"),
                    url: Object(U.a)(),
                    level: Object(W.a)("level"),
                    channel: Object(K.a)(),
                    client: Object(G.a)(),
                    page: "p1",
                    method: "m3",
                    act: "a113qrcode",
                  })),
                !1
              );
            },
            S = function (n, e) {
              return n.phone && "" !== n.phone
                ? Object(A.jsx)(_n, { item: n, tagType: e }, n.title)
                : Object(G.d)() && n.miniapp && n.miniapp.id
                ? Object(A.jsx)(zn, { item: n, tagType: e }, n.title)
                : Object(A.jsx)(Nn, { item: n, tagType: e }, n.title);
            };
          return (
            i &&
            Object(A.jsxs)(On, {
              children: [
                Object(A.jsx)("h2", {
                  className: "brandinfo1-title",
                  children: i,
                }),
                Object(A.jsxs)("div", {
                  className: "template-bg",
                  style: { background: o.bgcolor },
                  children: [
                    Object(A.jsxs)("div", {
                      className: "brandinfo1-wrap",
                      children: [
                        Object(A.jsx)("div", {
                          className: "brandinfo1-wrap_img-wrap",
                          children: Object(A.jsx)("img", {
                            className: "brandinfo1-wrap_img-wrap_img",
                            src: o.logo,
                            alt: "logo",
                          }),
                        }),
                        j.items &&
                          Object(A.jsx)(vn, { list: j.items, time: j.time }),
                        Object(A.jsxs)("div", {
                          className: "brandinfo1-wrap_tag",
                          children: [
                            x.map(function (n) {
                              return S(n, "tag1");
                            }),
                            w.map(function (n) {
                              return S(n, "tag2");
                            }),
                          ],
                        }),
                      ],
                    }),
                    Object(A.jsx)("div", {
                      className: "brandinfo1-footer",
                      style: { backgroundImage: "url(" + o.bgimg + ")" },
                      onTouchStart: function () {
                        return (
                          (_ = setTimeout(function () {
                            z = !0;
                          }, 500)),
                          !1
                        );
                      },
                      onTouchEnd: function () {
                        return N();
                      },
                      children: Object(A.jsxs)("div", {
                        className: "brandinfo1-footer_qrcode",
                        children: [
                          Object(A.jsx)("img", {
                            className: "brandinfo1-footer_qrcode_img",
                            src: b.img,
                            alt: "qrcode",
                          }),
                          Object(A.jsx)("div", {
                            className: "brandinfo1-footer_qrcode_title",
                            children: b.text,
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              ],
            })
          );
        },
        In = B.a.section(
          p ||
            (p = Object(F.a)([
              "\n    margin-top: .42rem;\n    h2{\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n        font-size: .34rem;\n        font-weight: 600;\n        color: #434669;\n        margin-bottom: .31rem;\n        padding-right: .2rem;\n        a{\n            font-size: .22rem;\n            font-weight: 400;\n            color: rgba(12,16,57,0.50);\n        }\n    }\n",
            ]))
        ),
        Tn = B.a.a(
          h ||
            (h = Object(F.a)([
              "\n    background: #fff;\n    border-radius: .12rem;\n    box-shadow: 0px 0px .2rem 0px rgba(0,36,96,0.04); \n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding:.34rem .3rem;\n    margin-bottom: .3rem;\n    .title{\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n        font-size: .34rem;\n        font-weight: 600;\n        color: #434669;\n        img{\n            height:.9rem;\n            margin-right: .26rem;\n        }\n    }\n    img.right{\n        width: .15rem;\n        height: .25rem;   \n    }\n",
            ]))
        ),
        Fn = t(21),
        Bn = function (n) {
          var e = n.id,
            t = n.title,
            i = n.url,
            r = n.logo;
          return Object(A.jsxs)(Tn, {
            href: "#",
            onClick: function () {
              return (function (n) {
                Object(Fn.a)(e || ""), (window.location.href = n);
              })(i);
            },
            children: [
              Object(A.jsxs)("span", {
                className: "title",
                children: [Object(A.jsx)("img", { alt: t, src: r }), t],
              }),
              i &&
                Object(A.jsx)("img", {
                  className: "right",
                  alt: "\u53f3\u7bad\u5934",
                  src: wn.a,
                }),
            ],
          });
        },
        Pn = t(20),
        Dn = function (n) {
          var e = Object(C.useState)({}),
            t = Object(T.a)(e, 2),
            i = t[0],
            r = t[1],
            a = Object(W.a)("cid");
          return (
            Object(C.useEffect)(
              function () {
                Object(I.a)(
                  E.a.mark(function e() {
                    var t, i;
                    return E.a.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (!n.data) {
                              e.next = 4;
                              break;
                            }
                            r(n.data), (e.next = 9);
                            break;
                          case 4:
                            return (e.next = 6), Object(Pn.a)(n.json);
                          case 6:
                            (t = e.sent), (i = t.data), r(i);
                          case 9:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                )();
              },
              [n]
            ),
            i && i.tags && i.tags.length > 0
              ? Object(A.jsxs)(In, {
                  children: [
                    Object(A.jsxs)("h2", { children: [i.name, " "] }),
                    i.tags.map(function (n, e) {
                      var t = n.id,
                        i = n.name,
                        r = n.url,
                        c = n.img,
                        o = n.cids;
                      return !o || o.includes(1 * a)
                        ? Object(A.jsx)(
                            Bn,
                            { id: t, url: r, title: i, logo: c },
                            e
                          )
                        : Object(A.jsx)(A.Fragment, {});
                    }),
                  ],
                })
              : Object(A.jsx)(A.Fragment, {})
          );
        },
        Un = t(30),
        An = B.a.section(
          g ||
            (g = Object(F.a)([
              "\n    margin-top: .42rem;\n    h2{\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n        font-size: .34rem;\n        font-weight: 600;\n        color: #434669;\n        margin-bottom: .31rem;\n        padding-right: .2rem;\n        a{\n            font-size: .22rem;\n            font-weight: 400;\n            color: rgba(12,16,57,0.50);\n        }\n    }\n",
            ]))
        ),
        Ln = B.a.a(
          x ||
            (x = Object(F.a)([
              "\n    background: #fff;\n    border-radius: .12rem;\n    box-shadow: 0px 0px .2rem 0px rgba(0,36,96,0.04); \n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding:.34rem .3rem;\n    margin-bottom: .3rem;\n    .title{\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n        font-size: .34rem;\n        font-weight: 600;\n        color: #434669;\n        img{\n            height:.9rem;\n            margin-right: .26rem;\n        }\n    }\n    img.right{\n        width: .15rem;\n        height: .25rem;   \n    }\n",
            ]))
        ),
        $n = function (n) {
          var e = n.id,
            t = n.title,
            i = n.url,
            r = n.logo;
          return Object(A.jsxs)(Ln, {
            href: "#",
            onClick: function () {
              return (function (n) {
                Object(Fn.a)(e || ""), (window.location.href = n);
              })(i);
            },
            children: [
              Object(A.jsxs)("span", {
                className: "title",
                children: [Object(A.jsx)("img", { alt: t, src: r }), t],
              }),
              i &&
                Object(A.jsx)("img", {
                  className: "right",
                  alt: "\u53f3\u7bad\u5934",
                  src: wn.a,
                }),
            ],
          });
        },
        Mn = function (n, e) {
          return Cn()({
            url: "https://openplat.haier.net/pdm/newPDM-Interface/pdm-external-api/api/upper/product/productManualUrl",
            params: {
              key: "1000360",
              secret: "3f5203c0cdc6672c06a468baf05a6afa",
              model: n,
            },
            headers: { Authorization: e },
            method: "get",
          });
        },
        Rn = t(18),
        Vn = function (n) {
          var e = Object(C.useState)({}),
            t = Object(T.a)(e, 2),
            i = t[0],
            r = t[1],
            a = Object(C.useState)(""),
            c = Object(T.a)(a, 2),
            o = c[0],
            s = c[1],
            l = Object(Rn.a)("code"),
            d = Object(Rn.b)("model");
          return (
            Object(C.useEffect)(
              function () {
                Object(I.a)(
                  E.a.mark(function e() {
                    var t, i, a, c, b, m, u, f;
                    return E.a.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (!l) {
                              e.next = 7;
                              break;
                            }
                            return (e.next = 3), Mn(d, l);
                          case 3:
                            (i = e.sent),
                              (a = i.data).success
                                ? ((c = a.result),
                                  (b = c.pdfUrls),
                                  (m = c.manualUrls) &&
                                    m.constructor === Array &&
                                    0 < m.length &&
                                    m[0] &&
                                    s(m[0]),
                                  !m[0] &&
                                    b &&
                                    b.constructor === Array &&
                                    0 < b.length &&
                                    b[0] &&
                                    s(b[0]))
                                : s(void 0),
                              (t = {
                                id: "manual",
                                name: "\u4ea7\u54c1\u8bf4\u660e\u4e66",
                                img: "https://bbqk.pzjdimg.com/manual/imgs/logo/1.png",
                                url: o,
                              });
                          case 7:
                            if (!n.data) {
                              e.next = 11;
                              break;
                            }
                            r(n.data), (e.next = 17);
                            break;
                          case 11:
                            return (e.next = 13), Object(Pn.a)(n.json);
                          case 13:
                            (u = e.sent),
                              (f = u.data),
                              l &&
                                o &&
                                ((f.tags = f.tags.filter(function (n) {
                                  return "manual" !== n.id;
                                })),
                                (f.tags = [t].concat(Object(Un.a)(f.tags)))),
                              r(f);
                          case 17:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                )();
              },
              [o, d, n, l]
            ),
            i && i.tags && i.tags.length > 0
              ? Object(A.jsxs)(An, {
                  children: [
                    Object(A.jsxs)("h2", { children: [i.name, " "] }),
                    i.tags.map(function (n, e) {
                      var t = n.id,
                        i = n.name,
                        r = n.url,
                        a = n.img;
                      return Object(A.jsx)(
                        $n,
                        { id: t, url: r, title: i, logo: a },
                        e
                      );
                    }),
                  ],
                })
              : Object(A.jsx)(A.Fragment, {})
          );
        },
        Wn = function () {
          return Object(A.jsx)(A.Fragment, {});
        },
        Jn = B.a.section(
          O ||
            (O = Object(F.a)([
              "\n    margin-top: .42rem;\n    \n    .brandinfo4-title{\n        font-size: .34rem;\n        font-family: PingFangSC, PingFangSC-Semibold;\n        font-weight: 600;\n        text-align: left;\n        color: #434669;\n        margin-bottom: .3rem;\n    }\n    .brandinfo4-img-wrap{\n        &_img1{\n            height: 8.44rem;\n            width: 100%;\n            margin-bottom: .3rem;\n            border-radius: .2rem;\n            box-shadow: 0rem 0rem .2rem 0rem rgba(0,0,0,0.15);\n        }\n    }\n    .brandinfo4-wrap{\n        &_slider-tag{\n            display: flex;\n            justify-content: space-between;\n            align-items: center;\n            &_tag-wrap{\n                margin-left: .2rem;\n            }\n            &_tag{\n                background: #ffffff;\n                border-radius: .12rem;\n                box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.05); \n                padding: .3rem .26rem;\n                margin-bottom: .2rem;\n                &_img{\n                    width: .6rem;\n                    height: .6rem;\n                }\n                &_name{\n                    font-size: .34rem;\n                    font-family: PingFangSC, PingFangSC-Regular;\n                    font-weight: 400;\n                    color: #434669;\n                    margin-left: .08rem;\n                }\n            }\n        }\n        &_long-tag{\n            position: relative;\n            border-radius: .2rem;\n            &_img-bg{\n                width: 7.1rem;\n                height: 3.46rem;\n                border-radius: .2rem;\n                box-shadow: 0rem 0rem .2rem 0rem rgba(0,0,0,0.15);\n            }\n            &_img-code-wrap{\n                position: absolute;\n                top: .28rem;\n                right: .28rem;\n                background: #ffffff;\n                padding: .1rem;\n                border-radius: 5px;\n                &_img{\n                    width: 1.8rem;\n                     height: 1.8rem; \n                }\n                &_txt{\n                    font-size: .28rem;\n                    font-family: PingFangSC, PingFangSC-Regular;\n                    font-weight: 400;\n                    text-align: left;\n                    color: rgba(67,70,105,0.50);\n                    padding-top: .1rem;\n                }\n            }\n        }\n        \n    }\n    .mgtop30{\n        margin-top: .3rem;\n    }\n    .position-relative{\n        position: relative;\n    }\n",
            ]))
        ),
        Kn = B.a.section(
          k ||
            (k = Object(F.a)([
              "\n.slider {\n    width: 7.1rem;\n    background: transparent;\n    border-radius: .12rem;\n    box-shadow: 0px 0px 20px 0px rgba(0,36,96,0.04);\n    height: 5.14rem;\n    background: #ffffff;\n    border-radius: .12rem;\n    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.05); \n}\n\n.slider .slideCont {\n    display: flex;\n    align-items: center;\n    flex-wrap: wrap;\n    justify-content: center;\n\n}\n\n.slider .slideCont img {\n    width: 7.1rem;\n    height: 5.14rem;\n    border-radius: .2rem;\n    box-shadow: 0rem 0rem .2rem 0rem rgba(0,0,0,0.15);\n}\n.slick-slider {\n    position: relative;\n\n    display: block;\n    box-sizing: border-box;\n\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n\n    -webkit-touch-callout: none;\n    -khtml-user-select: none;\n    -ms-touch-action: pan-y;\n    touch-action: pan-y;\n    -webkit-tap-highlight-color: transparent;\n}\n\n.slick-list {\n    position: relative;\n\n    display: block;\n    overflow: hidden;\n\n    margin: 0;\n    padding: 0;\n}\n\n.slick-list:focus {\n    outline: none;\n}\n\n.slick-list.dragging {\n    cursor: pointer;\n    cursor: hand;\n}\n\n.slick-slider .slick-track,\n.slick-slider .slick-list {\n    -webkit-transform: translate3d(0, 0, 0);\n    -moz-transform: translate3d(0, 0, 0);\n    -ms-transform: translate3d(0, 0, 0);\n    -o-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n}\n\n.slick-track {\n    position: relative;\n    top: 0;\n    left: 0;\n\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n}\n\n.slick-track:before,\n.slick-track:after {\n    display: table;\n\n    content: '';\n}\n\n.slick-track:after {\n    clear: both;\n}\n\n.slick-loading .slick-track {\n    visibility: hidden;\n}\n\n.slick-slide {\n    display: none;\n    float: left;\n\n    height: 100%;\n    min-height: 1px;\n}\n\n[dir='rtl'] .slick-slide {\n    float: right;\n}\n\n.slick-slide img {\n    display: block;\n}\n\n.slick-slide.slick-loading img {\n    display: none;\n}\n\n.slick-slide.dragging img {\n    pointer-events: none;\n}\n\n.slick-initialized .slick-slide {\n    display: block;\n}\n\n.slick-loading .slick-slide {\n    visibility: hidden;\n}\n\n.slick-vertical .slick-slide {\n    display: block;\n\n    height: auto;\n\n    border: 1px solid transparent;\n}\n\n.slick-arrow.slick-hidden {\n    display: none;\n}\n\n/* Slider */\n\n\n/* Arrows */\n.slick-prev,\n.slick-next {\n    font-size: 0;\n    line-height: 0;\n\n    position: absolute;\n    top: 50%;\n\n    display: none !important;\n\n    width: 20px;\n    height: 20px;\n    padding: 0;\n    -webkit-transform: translate(0, -50%);\n    -ms-transform: translate(0, -50%);\n    transform: translate(0, -50%);\n\n    cursor: pointer;\n\n    color: transparent;\n    border: none;\n    outline: none;\n    background: transparent;\n}\n\n.slick-prev:hover,\n.slick-prev:focus,\n.slick-next:hover,\n.slick-next:focus {\n    color: transparent;\n    outline: none;\n    background: transparent;\n}\n\n.slick-prev:hover:before,\n.slick-prev:focus:before,\n.slick-next:hover:before,\n.slick-next:focus:before {\n    opacity: 1;\n}\n\n.slick-prev.slick-disabled:before,\n.slick-next.slick-disabled:before {\n    opacity: .25;\n}\n\n.slick-prev:before,\n.slick-next:before {\n    font-family: 'slick';\n    font-size: 20px;\n    line-height: 1;\n\n    opacity: .75;\n    color: white;\n\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n}\n\n.slick-prev {\n    left: -25px;\n}\n\n[dir='rtl'] .slick-prev {\n    right: -25px;\n    left: auto;\n}\n\n.slick-prev:before {\n    content: '\u2190';\n}\n\n[dir='rtl'] .slick-prev:before {\n    content: '\u2192';\n}\n\n.slick-next {\n    right: -25px;\n}\n\n[dir='rtl'] .slick-next {\n    right: auto;\n    left: -25px;\n}\n\n.slick-next:before {\n    content: '\u2192';\n}\n\n[dir='rtl'] .slick-next:before {\n    content: '\u2190';\n}\n\n/* Dots */\n.slick-dotted.slick-slider {\n    margin-bottom: 30px;\n}\n\n.slick-dots {\n    position: absolute;\n    bottom: 0.25rem;\n\n    display: block;\n\n    width: 100%;\n    padding: 0;\n    margin: 0;\n\n    list-style: none;\n\n    text-align: center;\n}\n\n.slick-dots li {\n    position: relative;\n\n    display: inline-block;\n\n    width: .1rem;\n    height: .2rem;\n    margin: 0 3px;\n    padding: 0;\n\n    cursor: pointer;\n}\n\n.slick-dots li button {\n    font-size: 0;\n    line-height: 0;\n\n    display: block;\n\n    width: 20px;\n    height: 20px;\n    padding: 5px;\n\n    cursor: pointer;\n\n    color: transparent;\n    border: 0;\n    outline: none;\n    background: transparent;\n}\n\n.slick-dots li button:hover,\n.slick-dots li button:focus {\n    outline: none;\n}\n\n.slick-dots li button:hover:before,\n.slick-dots li button:focus:before {\n    opacity: 1;\n}\n\n.slick-dots li button:before {\n    font-family: 'slick';\n    font-size: 6px;\n    line-height: 20px;\n\n    position: absolute;\n    top: .14rem;\n    left: 0;\n\n    width: .09rem;\n    height: .09rem;\n\n    content: '\u2022';\n    text-align: center;\n\n    opacity: .25;\n    color: #ffffff;\n\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n}\n\n.slick-dots li.slick-active button:before {\n    opacity: .85;\n    color: #ffffff;\n}\n.position-relative{\n    position: relative;\n}\n",
            ]))
        ),
        Hn = function (n) {
          var e = Object(C.useState)([]),
            t = Object(T.a)(e, 2),
            i = t[0],
            r = t[1];
          Object(C.useEffect)(
            function () {
              Object(I.a)(
                E.a.mark(function e() {
                  return E.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          r(n.list);
                        case 1:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              )();
            },
            [n]
          );
          var a = function (n) {
              !(function (n) {
                Object(J.a)({
                  uid: Object(W.a)("uid"),
                  model: Object(W.a)("model"),
                  cid: Object(W.a)("cid"),
                  bid: Object(W.a)("bid"),
                  eid: Object(W.a)("eid"),
                  url: Object(U.a)(),
                  level: Object(W.a)("level"),
                  channel: Object(K.a)(),
                  client: Object(G.a)(),
                  page: "p1",
                  method: "m3",
                  act: "a413slider_" + n,
                });
              })(n);
            },
            c = function (n, e) {
              return n.miniapp && n.miniapp.id
                ? Object(A.jsxs)("div", {
                    className: "position-relative",
                    onClick: function () {
                      return a(n.id);
                    },
                    children: [
                      Object(A.jsx)(
                        "div",
                        {
                          className: "slideItem",
                          children: Object(A.jsx)("a", {
                            href: "#",
                            className: "slideCont",
                            children: Object(A.jsx)("img", {
                              alt: "banner",
                              src: n.img,
                            }),
                          }),
                        },
                        n.name + e
                      ),
                      Object(A.jsx)("wx-open-launch-weapp", {
                        username: n.miniapp.id,
                        path: n.miniapp.path,
                        style: {
                          position: "absolute",
                          top: 0,
                          left: 0,
                          width: "100%",
                          height: "100%",
                        },
                        children: Object(A.jsx)("script", {
                          type: "text/wxtag-template",
                          children: Object(A.jsx)("div", {
                            style: {
                              position: "absolute",
                              top: 0,
                              left: 0,
                              width: "100%",
                              height: "100%",
                              opacity: 0,
                            },
                          }),
                        }),
                      }),
                    ],
                  })
                : Object(A.jsx)(
                    "div",
                    {
                      className: "slideItem",
                      children: Object(A.jsx)("a", {
                        href: "#",
                        onClick: function () {
                          return (function (n) {
                            n.link &&
                              (a(n.id), (window.location.href = n.link));
                          })(n);
                        },
                        className: "slideCont",
                        children: Object(A.jsx)("img", {
                          alt: "banner",
                          src: n.img,
                        }),
                      }),
                    },
                    n.name + e
                  );
            },
            o = {
              dots: !0,
              infinite: !0,
              speed: 100 * n.time,
              slidesToShow: 1,
              slidesToScroll: 1,
              autoplay: !0,
            };
          return (
            (null === i || void 0 === i ? void 0 : i.length) &&
            Object(A.jsx)(Kn, {
              children: Object(A.jsx)("div", {
                className: "slider",
                children: Object(A.jsx)(
                  R.a,
                  Object($.a)(
                    Object($.a)({}, o),
                    {},
                    {
                      children: i.map(function (n, e) {
                        return c(n, e);
                      }),
                    }
                  )
                ),
              }),
            })
          );
        },
        Gn = function () {
          Object(J.a)({
            uid: Object(W.a)("uid"),
            model: Object(W.a)("model"),
            cid: Object(W.a)("cid"),
            bid: Object(W.a)("bid"),
            eid: Object(W.a)("eid"),
            url: Object(U.a)(),
            level: Object(W.a)("level"),
            channel: Object(K.a)(),
            client: Object(G.a)(),
            page: "p1",
            method: "m3",
            act: "a413banner",
          });
        },
        Qn = function (n) {
          var e = Object(C.useState)({}),
            t = Object(T.a)(e, 2),
            i = t[0],
            r = t[1],
            a = Object(C.useState)({}),
            c = Object(T.a)(a, 2),
            o = c[0],
            s = c[1],
            l = Object(C.useState)(""),
            d = Object(T.a)(l, 2),
            b = d[0],
            m = d[1];
          return (
            Object(C.useEffect)(
              function () {
                Object(I.a)(
                  E.a.mark(function e() {
                    var t, i;
                    return E.a.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            (t = n.info),
                              r(t),
                              s(t.miniapp),
                              Object(G.d)() &&
                                o &&
                                o.id &&
                                document
                                  .getElementById("launch-btn")
                                  .addEventListener("launch", function () {
                                    Gn();
                                  }),
                              (i = Object(W.a)("cid")),
                              t.img &&
                                t.img.forEach(function (n) {
                                  n.cid === i && m(n.img),
                                    0 === n.cid && "" === b && m(n.img);
                                });
                          case 6:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                )();
              },
              [b, o, n]
            ),
            Object(G.d)() && b && o && o.id
              ? Object(A.jsxs)("div", {
                  className: "position-relative",
                  children: [
                    Object(A.jsx)("img", {
                      className: "brandinfo4-img-wrap_img1",
                      src: b,
                      alt: "banner",
                    }),
                    Object(A.jsx)("wx-open-launch-weapp", {
                      id: "launch-btn",
                      username: o.id,
                      path: o.path,
                      style: {
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                      },
                      children: Object(A.jsx)("script", {
                        type: "text/wxtag-template",
                        children: Object(A.jsx)("div", {
                          style: {
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            opacity: 0,
                          },
                        }),
                      }),
                    }),
                  ],
                })
              : Object(A.jsx)("img", {
                  className: "brandinfo4-img-wrap_img1",
                  src: b,
                  onClick: function () {
                    Gn(), Object(D.c)(i.link);
                  },
                  alt: "banner",
                })
          );
        },
        Zn = function () {
          Object(J.a)({
            uid: Object(W.a)("uid"),
            model: Object(W.a)("model"),
            cid: Object(W.a)("cid"),
            bid: Object(W.a)("bid"),
            eid: Object(W.a)("eid"),
            url: Object(U.a)(),
            level: Object(W.a)("level"),
            channel: Object(K.a)(),
            client: Object(G.a)(),
            page: "p1",
            method: "m3",
            act: "a413qrcode",
          });
        },
        Xn = function (n) {
          var e = Object(C.useState)({}),
            t = Object(T.a)(e, 2),
            i = t[0],
            r = t[1],
            a = Object(C.useState)({}),
            c = Object(T.a)(a, 2),
            o = c[0],
            s = c[1],
            l = Object(C.useState)(""),
            d = Object(T.a)(l, 2),
            b = d[0],
            m = d[1];
          return (
            Object(C.useEffect)(
              function () {
                Object(I.a)(
                  E.a.mark(function e() {
                    var t;
                    return E.a.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            (t = n.info),
                              r(t),
                              s(t.miniapp),
                              m(t.img),
                              Object(G.d)() &&
                                o &&
                                o.id &&
                                document
                                  .getElementById("launch-btn")
                                  .addEventListener("launch", function () {
                                    Zn();
                                  });
                          case 5:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                )();
              },
              [o, n]
            ),
            Object(G.d)() && o && o.id
              ? Object(A.jsxs)("div", {
                  className: "position-relative",
                  children: [
                    Object(A.jsx)("img", {
                      className: "brandinfo4-wrap_long-tag_img-bg",
                      src: b,
                      alt: "banner",
                    }),
                    Object(A.jsx)("wx-open-launch-weapp", {
                      id: "launch-btn",
                      username: o.id,
                      path: o.path,
                      style: {
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                      },
                      children: Object(A.jsx)("script", {
                        type: "text/wxtag-template",
                        children: Object(A.jsx)("div", {
                          style: {
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            opacity: 0,
                          },
                        }),
                      }),
                    }),
                  ],
                })
              : Object(A.jsx)("img", {
                  className: "brandinfo4-wrap_long-tag_img-bg",
                  src: b,
                  onClick: function () {
                    Zn(), Object(D.c)(i.link);
                  },
                  alt: "banner",
                })
          );
        },
        Yn = function (n) {
          var e = Object(C.useState)(""),
            t = Object(T.a)(e, 2),
            i = t[0],
            r = t[1],
            a = Object(C.useState)({}),
            c = Object(T.a)(a, 2),
            o = c[0],
            s = c[1],
            l = Object(C.useState)({}),
            d = Object(T.a)(l, 2),
            b = d[0],
            m = d[1],
            u = Object(C.useState)({}),
            f = Object(T.a)(u, 2),
            j = f[0],
            p = f[1];
          return (
            Object(C.useEffect)(
              function () {
                Object(I.a)(
                  E.a.mark(function e() {
                    var t, i, a, c, o, l, d, b;
                    return E.a.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (t = Object(U.b)(n.json)),
                              (e.next = 3),
                              Object(D.a)(t)
                            );
                          case 3:
                            if (
                              ((i = e.sent),
                              (a = i.data),
                              (c = a.title),
                              (o = a.qrcode),
                              (l = a.banner),
                              (d = a.slide),
                              (b = !1),
                              l && l.miniapp && l.miniapp.id && (b = !0),
                              o && o.miniapp && o.miniapp.id && (b = !0),
                              !b)
                            ) {
                              e.next = 15;
                              break;
                            }
                            return (e.next = 15), qn("wx-open-launch-weapp");
                          case 15:
                            r(c), s(o), m(d), p(l);
                          case 19:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                )();
              },
              [n]
            ),
            Object(A.jsx)(A.Fragment, {
              children:
                i &&
                Object(A.jsxs)(Jn, {
                  children: [
                    Object(A.jsx)("h2", {
                      className: "brandinfo4-title",
                      children: i,
                    }),
                    Object(A.jsxs)("div", {
                      className: "template-bg",
                      children: [
                        j && Object(A.jsx)(Qn, { info: j }),
                        Object(A.jsxs)("div", {
                          className: "brandinfo4-wrap",
                          children: [
                            Object(A.jsx)("div", {
                              className: "brandinfo4-wrap_slider-tag",
                              children:
                                b.items &&
                                Object(A.jsx)(Hn, {
                                  list: b.items,
                                  time: b.time,
                                }),
                            }),
                            Object(A.jsx)("div", {
                              className: "brandinfo4-wrap_long-tag mgtop30",
                              children: o && Object(A.jsx)(Xn, { info: o }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
            })
          );
        },
        ne = Object(G.c)()
          ? B.a.section(
              v ||
                (v = Object(F.a)([
                  "\n     margin-top: .24rem;\n    .template-bg{\n        \n    }\n    .xiaomi-title{\n        font-size: .24rem;\n        color: #666666;\n        font-weight: 500;\n        margin-bottom: .8rem;\n    }\n    .xiaomi-img-wrap{\n        width: 100%;\n        height: 3.36rem;\n        border-radius: .32rem;\n        margin-top: .24rem;\n        margin-bottom: .24rem;\n    }\n    .xiaomi-wrap{\n        box-shadow: 0rem 0rem .2rem 0rem rgba(0,0,0,0.15); \n        background: rgba(255,255,255,0.90);\n        border-radius: .32rem;\n        padding: .38rem .4rem 0 .44rem;\n        &_tag{\n            background: rgba(255,255,255,0.11);\n            border: .01rem solid rgba(255,255,255,0.20);\n            border-radius: .1rem;\n            &_item-wrap{\n                position: relative;\n            }\n            &_item{\n                display:flex;\n                justify-content: space-between;\n                align-items: center;\n                margin-bottom: 1.04rem;\n                &_title{\n                    display:flex;\n                    justify-content: start;\n                    align-items: center;\n                    &_img{\n                        width: .48rem;\n                        height: .48rem;\n                        margin-right: .36rem;\n                    }\n                    &_name{\n                        font-size: .32rem;\n                        color: #000000;\n                        letter-spacing: 0;\n                        font-weight: 500;\n                    }\n                    &_iname{\n                        font-size: .32rem;\n                        color: #999999;\n                        letter-spacing: 0;\n                        font-weight: 500;\n                    }\n                    &_tag-wrap{\n                        margin-top: .04rem;\n                    }\n                    &_tag{\n                        font-size: .26rem;\n                        color: #999999;\n                        letter-spacing: 0;\n                        font-weight: 400;\n                        padding-right: .4rem;\n                        position: relative;\n                        float: left;\n                    }\n                    &_tag:last-child{\n                        padding-right: 0\n                    }\n                }\n                &_right{\n                    width: .44rem;\n                    height: .44rem;\n                }\n            }\n            &_item-wrap:last-child{\n                margin-top: -.18rem;\n                margin-bottom: 1rem;\n            }\n        }\n        \n    }\n",
                ]))
            )
          : B.a.section(
              w ||
                (w = Object(F.a)([
                  "\n     margin-top: .24rem;\n    .template-bg{\n        \n    }\n    .xiaomi-title{\n        font-size: .24rem;\n        color: #666666;\n        font-weight: 500;\n        margin-bottom: .8rem;\n    }\n    .xiaomi-img-wrap{\n        width: 100%;\n        height: 3.36rem;\n        border-radius: .32rem;\n        margin-top: .24rem;\n        margin-bottom: .24rem;\n    }\n    .xiaomi-wrap{\n        box-shadow: 0rem 0rem .2rem 0rem rgba(0,0,0,0.15); \n        background: rgba(255,255,255,0.90);\n        border-radius: .32rem;\n        padding: .38rem .4rem 0 .44rem;\n        &_tag{\n            background: rgba(255,255,255,0.11);\n            border: .01rem solid rgba(255,255,255,0.20);\n            border-radius: .1rem;\n            &_item-wrap{\n                position: relative;\n            }\n            &_item{\n                display:flex;\n                justify-content: space-between;\n                align-items: center;\n                margin-bottom: 1.04rem;\n                &_title{\n                    display:flex;\n                    justify-content: start;\n                    align-items: center;\n                    &_img{\n                        width: .48rem;\n                        height: .48rem;\n                        margin-right: .36rem;\n                    }\n                    &_name{\n                        font-size: .32rem;\n                        color: #000000;\n                        letter-spacing: 0;\n                        font-weight: 500;\n                    }\n                    &_iname{\n                        font-size: .32rem;\n                        color: #999999;\n                        letter-spacing: 0;\n                        font-weight: 500;\n                    }\n                    &_tag-wrap{\n                        margin-top: .04rem;\n                    }\n                    &_tag{\n                        font-size: .26rem;\n                        color: #999999;\n                        letter-spacing: 0;\n                        font-weight: 400;\n                        padding-right: .4rem;\n                        position: relative;\n                        float: left;\n                    }\n                    &_tag:last-child{\n                        padding-right: 0\n                    }\n                }\n                &_right{\n                    width: .44rem;\n                    height: .44rem;\n                }\n            }\n            &_item-wrap:last-child{\n                margin-top: -.18rem;\n                margin-bottom: 1rem;\n            }\n        }\n        \n    }\n",
                ]))
            ),
        ee = B.a.section(
          y ||
            (y = Object(F.a)([
              "\nmargin-top: .24rem;\n.slider {\n    width: 100%;\n    background: transparent;\n    border-radius: .32rem;\n    box-shadow: 0px 0px 20px 0px rgba(0,36,96,0.04);\n    margin: 0 auto;\n    height: 2.4rem;\n    margin-top: 0.16rem;\n    padding-top: 0;\n    \n}\n\n.slider .slideCont {\n    display: flex;\n    align-items: center;\n    flex-wrap: wrap;\n    justify-content: center;\n}\n\n.slider .slideCont img {\n    width: 100%;\n    height: 2.4rem;\n    border-radius: .32rem;\n}\n.slick-slider {\n    position: relative;\n\n    display: block;\n    box-sizing: border-box;\n\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n\n    -webkit-touch-callout: none;\n    -khtml-user-select: none;\n    -ms-touch-action: pan-y;\n    touch-action: pan-y;\n    -webkit-tap-highlight-color: transparent;\n}\n\n.slick-list {\n    position: relative;\n    display: block;\n    border-radius: .32rem;\n    overflow: hidden;\n    z-index: 100;\n    margin: 0;\n    padding: 0;\n    transform: rotate(0deg);\n    -webkit-transform:rotate(0deg);\n    -webkit-backface-visibility: hidden;\n    -moz-backface-visibility: hidden;\n    -webkit-transform: translate3d(0, 0, 0);\n    -moz-transform: translate3d(0, 0, 0);\n}\n\n.slick-list:focus {\n    outline: none;\n}\n\n.slick-list.dragging {\n    cursor: pointer;\n    cursor: hand;\n}\n\n\n\n.slick-track {\n    position: relative;\n    top: 0;\n    left: 0;\n\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n}\n\n.slick-track:before,\n.slick-track:after {\n    display: table;\n\n    content: '';\n}\n\n.slick-track:after {\n    clear: both;\n}\n\n.slick-loading .slick-track {\n    visibility: hidden;\n}\n\n.slick-slide {\n    display: none;\n    float: left;\n\n    height: 2.4rem;\n    min-height: 1px;\n}\n\n[dir='rtl'] .slick-slide {\n    float: right;\n}\n\n.slick-slide img {\n    display: block;\n}\n\n.slick-slide.slick-loading img {\n    display: none;\n}\n\n.slick-slide.dragging img {\n    pointer-events: none;\n}\n\n.slick-initialized .slick-slide {\n    display: block;\n}\n\n.slick-loading .slick-slide {\n    visibility: hidden;\n}\n\n.slick-vertical .slick-slide {\n    display: block;\n\n    height: auto;\n\n    border: 1px solid transparent;\n}\n\n.slick-arrow.slick-hidden {\n    display: none;\n}\n\n/* Slider */\n\n\n/* Arrows */\n.slick-prev,\n.slick-next {\n    font-size: 0;\n    line-height: 0;\n\n    position: absolute;\n    top: 50%;\n\n    display: none !important;\n\n    width: 20px;\n    height: 20px;\n    padding: 0;\n    -webkit-transform: translate(0, -50%);\n    -ms-transform: translate(0, -50%);\n    transform: translate(0, -50%);\n\n    cursor: pointer;\n\n    color: transparent;\n    border: none;\n    outline: none;\n    background: transparent;\n}\n\n.slick-prev:hover,\n.slick-prev:focus,\n.slick-next:hover,\n.slick-next:focus {\n    color: transparent;\n    outline: none;\n    background: transparent;\n}\n\n.slick-prev:hover:before,\n.slick-prev:focus:before,\n.slick-next:hover:before,\n.slick-next:focus:before {\n    opacity: 1;\n}\n\n.slick-prev.slick-disabled:before,\n.slick-next.slick-disabled:before {\n    opacity: .25;\n}\n\n.slick-prev:before,\n.slick-next:before {\n    font-family: 'slick';\n    font-size: 20px;\n    line-height: 1;\n\n    opacity: .75;\n    color: white;\n\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n}\n\n.slick-prev {\n    left: -25px;\n}\n\n[dir='rtl'] .slick-prev {\n    right: -25px;\n    left: auto;\n}\n\n.slick-prev:before {\n    content: '\u2190';\n}\n\n[dir='rtl'] .slick-prev:before {\n    content: '\u2192';\n}\n\n.slick-next {\n    right: -25px;\n}\n\n[dir='rtl'] .slick-next {\n    right: auto;\n    left: -25px;\n}\n\n.slick-next:before {\n    content: '\u2192';\n}\n\n[dir='rtl'] .slick-next:before {\n    content: '\u2190';\n}\n\n/* Dots */\n.slick-dotted.slick-slider {\n    margin-bottom: 30px;\n}\n\n.slick-dots {\n    position: absolute;\n    bottom: .22rem;\n    right: .3rem;\n    display: block;\n\n    padding: 0;\n    margin: 0;\n\n    list-style: none;\n\n\n}\n\n.slick-dots li {\n    position: relative;\n\n    display: inline-block;\n\n    width: .1rem;\n    height: .1rem;\n    margin: 0 .06rem;\n    padding: 0;\n\n    cursor: pointer;\n}\n\n.slick-dots li button {\n    font-size: 0;\n    line-height: 0;\n\n    display: block;\n\n    width: .1rem;\n    height: .1rem;\n    \n\n    cursor: pointer;\n\n    color: transparent;\n    border: 0;\n    outline: none;\n    background: transparent;\n}\n\n.slick-dots li button:hover,\n.slick-dots li button:focus {\n    outline: none;\n}\n\n.slick-dots li button:hover:before,\n.slick-dots li button:focus:before {\n    opacity: 1;\n}\n\n.slick-dots li button:before {\n    font-family: 'slick';\n    font-size: .3rem;\n    line-height: 20px;\n\n    position: absolute;\n    top: 0;\n    left: 0;\n\n    width: .1rem;\n    height: .1rem;\n    z-index: 100;\n\n    content: '\u2022';\n    text-align: center;\n\n    opacity: 0.2;\n    color: #ffffff;\n\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n}\n\n.slick-dots li.slick-active button:before {\n    opacity: 1;\n    color: #ffffff;\n}\n",
            ]))
        ),
        te = function (n) {
          var e;
          (e = n.id),
            Object(J.a)({
              uid: Object(W.a)("uid"),
              model: Object(W.a)("model"),
              cid: Object(W.a)("cid"),
              bid: Object(W.a)("bid"),
              eid: Object(W.a)("eid"),
              url: Object(U.a)(),
              level: Object(W.a)("level"),
              channel: Object(K.a)(),
              client: Object(G.a)(),
              page: "p1",
              method: "m3",
              act: "ami13slider_" + e,
            }),
            Object(D.c)(n.link);
        },
        ie = function (n) {
          var e = n.list,
            t = n.data;
          return (
            (null === e || void 0 === e ? void 0 : e.length) &&
            Object(A.jsx)(ee, {
              children: Object(A.jsx)("div", {
                className: "slider",
                children: Object(A.jsx)(
                  R.a,
                  Object($.a)(
                    Object($.a)(
                      {},
                      {
                        dots: !0,
                        infinite: !0,
                        speed: 1e3,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        autoplay: !0,
                      }
                    ),
                    {},
                    {
                      children: e.map(function (n, e) {
                        return (
                          (!t || t.uid !== n.uid) &&
                          Object(A.jsx)(
                            "div",
                            {
                              className: "slideItem",
                              children: Object(A.jsx)("a", {
                                onClick: function () {
                                  return te(n);
                                },
                                className: "slideCont",
                                children: Object(A.jsx)("img", {
                                  alt: "banner",
                                  src: n.img,
                                }),
                              }),
                            },
                            n.title + e
                          )
                        );
                      }),
                    }
                  )
                ),
              }),
            })
          );
        },
        re = function (n, e) {
          var t = n.match(/\$\{mi\|(.+?)\}/);
          if (!t) return n;
          var i = t[0],
            r = t[1];
          return n.replace(i, e[r]);
        },
        ae =
          (Object(G.c)()
            ? "https://bbqk.pzjdimg.com/"
            : "https://demo.pzjdimg.com/") + "custom/mi/imgs/rarrow.png",
        ce = function (n, e, t) {
          var i = "t2" === n.id && void 0 !== e.miapptag && !e.miapptag;
          return Object(A.jsx)(
            "div",
            {
              className: "xiaomi-wrap_tag_item-wrap",
              onClick: function () {
                var t;
                i ||
                  ((t = n.id),
                  Object(J.a)({
                    uid: Object(W.a)("uid"),
                    model: Object(W.a)("model"),
                    cid: Object(W.a)("cid"),
                    bid: Object(W.a)("bid"),
                    eid: Object(W.a)("eid"),
                    url: Object(U.a)(),
                    level: Object(W.a)("level"),
                    channel: Object(K.a)(),
                    client: Object(G.a)(),
                    page: "p1",
                    method: "m3",
                    act: "ami13tag_" + t,
                  }),
                  "t1" === n.id
                    ? Object(D.c)(e.manualUrl ? e.manualUrl : re(n.link, e))
                    : Object(D.c)(re(n.link, e)));
              },
              children: Object(A.jsxs)("div", {
                className: "xiaomi-wrap_tag_item",
                children: [
                  Object(A.jsxs)("div", {
                    className: "xiaomi-wrap_tag_item_title",
                    children: [
                      Object(A.jsx)("img", {
                        className: "xiaomi-wrap_tag_item_title_img",
                        src: i ? n.icon2 : n.icon,
                        alt: n.id,
                      }),
                      oe(n, i),
                    ],
                  }),
                  Object(A.jsx)("img", {
                    className: "xiaomi-wrap_tag_item_right",
                    src: ae,
                    alt: "ra",
                  }),
                ],
              }),
            },
            n.id
          );
        },
        oe = function (n, e) {
          var t;
          return (null === (t = n.desp) || void 0 === t ? void 0 : t.length) > 0
            ? Object(A.jsxs)(
                "div",
                {
                  children: [
                    Object(A.jsx)("div", {
                      className: "xiaomi-wrap_tag_item_title_name",
                      children: n.title,
                    }),
                    Object(A.jsx)("div", {
                      className: "clearfix xiaomi-wrap_tag_item_title_tag-wrap",
                      children: n.desp.map(function (n, e) {
                        return Object(A.jsx)(
                          "span",
                          {
                            className: "xiaomi-wrap_tag_item_title_tag",
                            children: n,
                          },
                          e
                        );
                      }),
                    }),
                  ],
                },
                n.id
              )
            : Object(A.jsx)(
                "div",
                {
                  children: Object(A.jsx)("div", {
                    className: e
                      ? "xiaomi-wrap_tag_item_title_iname"
                      : "xiaomi-wrap_tag_item_title_name",
                    children: n.title,
                  }),
                },
                n.id
              );
        },
        se = function (n) {
          var e = n.tags,
            t = n.data;
          return Object(A.jsxs)(
            "div",
            {
              className: "xiaomi-wrap",
              children: [
                Object(A.jsx)("div", {
                  className: "xiaomi-title",
                  children: "\u5c0f\u7c73\u4e13\u533a",
                }),
                Object(A.jsx)("div", {
                  className: "xiaomi-wrap_tag",
                  children: e.map(function (n, e) {
                    return ce(n, t, e);
                  }),
                }),
              ],
            },
            Object(Z.b)(10)
          );
        },
        le = [],
        de = [],
        be = [],
        me = void 0,
        ue = function (n) {
          n.id,
            Object(J.a)({
              uid: Object(W.a)("uid"),
              model: Object(W.a)("model"),
              cid: Object(W.a)("cid"),
              bid: Object(W.a)("bid"),
              eid: Object(W.a)("eid"),
              url: Object(U.a)(),
              level: Object(W.a)("level"),
              channel: Object(K.a)(),
              client: Object(G.a)(),
              page: "p1",
              method: "m3",
              act: "ami13banner",
            }),
            Object(D.c)(n.link);
        },
        fe = function (n) {
          var e,
            t = Object(C.useState)(!1),
            i = Object(T.a)(t, 2),
            r = i[0],
            a = i[1],
            c = Object(C.useState)(!1),
            o = Object(T.a)(c, 2),
            s = o[0],
            l = o[1];
          return (
            Object(C.useEffect)(
              function () {
                Object(I.a)(
                  E.a.mark(function e() {
                    var t, i, r, c;
                    return E.a.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.next = 2), Object(D.a)(Object(U.b)(n.json))
                            );
                          case 2:
                            return (
                              (t = e.sent),
                              (i = t.data),
                              (le = i.slider),
                              (de = i.tags),
                              (be = i.banner),
                              (e.next = 9),
                              Object(D.a)(Object(U.b)(i.resource))
                            );
                          case 9:
                            (r = e.sent),
                              (c = r.data),
                              0 !== Object.keys(c).length && (a(!0), (me = c)),
                              l(!0);
                          case 13:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                )();
              },
              [n]
            ),
            Object(A.jsx)(ne, {
              children: Object(A.jsxs)("div", {
                className: "template-bg",
                children: [
                  r && me && Object(A.jsx)(se, { tags: de, data: me }),
                  s &&
                    (null === (e = le) || void 0 === e ? void 0 : e.length) >
                      0 &&
                    Object(A.jsx)(ie, { list: le, data: me }),
                  Object(A.jsx)("img", {
                    className: "xiaomi-img-wrap",
                    src: be.img,
                    onClick: function () {
                      return ue(be);
                    },
                    alt: "",
                  }),
                ],
              }),
            })
          );
        },
        je = B.a.section(
          _ ||
            (_ = Object(F.a)([
              "\n     margin-top: .24rem;\n    .template-bg{\n        \n    }\n    .haierrsq-title{\n        font-size: .32rem;\n        color: #000000;\n        letter-spacing: 0;\n        font-weight: 600;\n        margin-bottom: .25rem;\n    }\n    .haierrsq-img-wrap{\n        width: 100%;\n        height: 3.36rem;\n        border-radius: .12rem;\n        margin-top: .24rem;\n        margin-bottom: .24rem;\n    }\n    .haierrsq-wrap{\n        box-shadow: 0rem 0rem .2rem 0rem rgba(0,0,0,0.15); \n        background: rgba(255,255,255,0.90);\n        border-radius: .12rem;\n        margin-bottom: 1.5rem;\n        padding: 0;\n        &_tag{\n            background: rgba(255,255,255,0.90);\n            border: .01rem solid rgba(255,255,255,0.20);\n            border-radius: .1rem;\n            &_item-wrap{\n                position: relative;\n            }\n            &_item{\n                display:flex;\n                justify-content: space-between;\n                align-items: center;\n                padding-right: .4rem;\n                &_title{\n                    display:flex;\n                    justify-content: start;\n                    align-items: center;\n                    padding-left: .4rem;\n                    &_img{\n                        width: .48rem;\n                        height: .48rem;\n                        margin-right: .36rem;\n                    }\n                    &_name{\n                        font-size: .32rem;\n                        color: #000000;\n                        letter-spacing: 0;\n                        font-weight: 400;\n                    }\n                    &_iname{\n                        font-size: .32rem;\n                        color: #999999;\n                        letter-spacing: 0;\n                        font-weight: 400;\n                    }\n                    &_tag-wrap{\n                        margin-top: .04rem;\n                    }\n                    &_tag{\n                        font-size: .26rem;\n                        color: #999999;\n                        letter-spacing: 0;\n                        font-weight: 400;\n                        padding-right: .4rem;\n                        position: relative;\n                        float: left;\n                    }\n                    &_tag:last-child{\n                        padding-right: 0\n                    }\n                }\n                &_hr{\n                    width: 93%;\n                    border: none;\n                    height: 1px;\n                    background-color: #F3F3F3;\n                }\n                &_right{\n                    width: .44rem;\n                    height: .44rem;\n                }\n            }\n            &_item-wrap:last-child{\n                margin-bottom: .3rem;\n            }\n        }\n        &_videoDiv {\n            position: relative;  \n            display: inline-block;\n        }\n        &_videoImg {\n            width: 100%;\n            margin-bottom: .25rem;\n            border-radius: .12rem;\n        }\n        &_playImg {\n            position: absolute;  \n          top: 50%;\n          left: 50%;\n          transform: translate(-50%, -50%);\n          max-width: 50%;\n        }\n    }\n    .haierrsq-bottom {\n        position: fixed;  \n        bottom: 0;\n        left: 0; \n        width: 100%; \n        height: auto; \n        z-index: 9; \n    }\n    .haierrsq-bottom .block {\n        background-color: #f6f6f6;\n        padding-bottom: 0.4rem;\n    }\n    .haierrsq-bottom img {\n        width: 100%; \n        height: auto; \n    }\n",
            ]))
        ),
        pe = (Object(G.c)(), "https://demo.pzjdimg.com/"),
        he = pe + "custom/haierrsq/imgs/rarrow.png",
        ge = pe + "custom/haierrsq/imgs/bottom.png",
        xe = pe + "custom/haierrsq/imgs/play.png",
        Oe = function (n, e, t) {
          return (
            (n.id = "haierrsq-tag-" + e),
            Object(A.jsxs)(
              "div",
              {
                className: "haierrsq-wrap_tag_item-wrap",
                onClick: function () {
                  Object(D.c)(n.jumpUrl);
                },
                children: [
                  Object(A.jsxs)("div", {
                    className: "haierrsq-wrap_tag_item",
                    children: [
                      Object(A.jsx)("div", {
                        className: "haierrsq-wrap_tag_item_title",
                        children: ke(n),
                      }),
                      Object(A.jsx)("img", {
                        className: "haierrsq-wrap_tag_item_right",
                        src: he,
                        alt: "ra",
                      }),
                    ],
                  }),
                  e + 1 !== t &&
                    Object(A.jsx)("hr", {
                      className: "haierrsq-wrap_tag_item_hr",
                    }),
                ],
              },
              n.id
            )
          );
        },
        ke = function (n) {
          return Object(A.jsx)(
            "div",
            {
              children: Object(A.jsx)("div", {
                className: "haierrsq-wrap_tag_item_title_name",
                children: n.name,
              }),
            },
            n.id
          );
        },
        ve = function (n) {
          var e = n.tags;
          return Object(A.jsx)("div", {
            className: "haierrsq-wrap_tag",
            children: e.map(function (n, t) {
              return Oe(n, t, e.length);
            }),
          });
        },
        we = B.a.section(
          z ||
            (z = Object(F.a)([
              "\nmargin-top: .24rem;\n.slider {\n    width: 100%;\n    background: transparent;\n    border-radius: .12rem;\n    box-shadow: 0px 0px 20px 0px rgba(0,36,96,0.04);\n    margin: 0 auto;\n    padding-top: 0;\n    margin-bottom: .25rem;\n    \n}\n\n.slider .slideCont {\n    display: flex;\n    align-items: center;\n    flex-wrap: wrap;\n    justify-content: center;\n}\n\n.slider .slideCont img {\n    width: 100%;\n    \n    border-radius: .12rem;\n}\n.slick-slider {\n    position: relative;\n\n    display: block;\n    box-sizing: border-box;\n\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n\n    -webkit-touch-callout: none;\n    -khtml-user-select: none;\n    -ms-touch-action: pan-y;\n    touch-action: pan-y;\n    -webkit-tap-highlight-color: transparent;\n}\n\n.slick-list {\n    position: relative;\n    display: block;\n    border-radius: .12rem;\n    overflow: hidden;\n    z-index: 100;\n    margin: 0;\n    padding: 0;\n    transform: rotate(0deg);\n    -webkit-transform:rotate(0deg);\n    -webkit-backface-visibility: hidden;\n    -moz-backface-visibility: hidden;\n    -webkit-transform: translate3d(0, 0, 0);\n    -moz-transform: translate3d(0, 0, 0);\n}\n\n.slick-list:focus {\n    outline: none;\n}\n\n.slick-list.dragging {\n    cursor: pointer;\n    cursor: hand;\n}\n\n\n\n.slick-track {\n    position: relative;\n    top: 0;\n    left: 0;\n\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n}\n\n.slick-track:before,\n.slick-track:after {\n    display: table;\n\n    content: '';\n}\n\n.slick-track:after {\n    clear: both;\n}\n\n.slick-loading .slick-track {\n    visibility: hidden;\n}\n\n.slick-slide {\n    display: none;\n    float: left;\n\n    min-height: 1px;\n}\n\n[dir='rtl'] .slick-slide {\n    float: right;\n}\n\n.slick-slide img {\n    display: block;\n}\n\n.slick-slide.slick-loading img {\n    display: none;\n}\n\n.slick-slide.dragging img {\n    pointer-events: none;\n}\n\n.slick-initialized .slick-slide {\n    display: block;\n}\n\n.slick-loading .slick-slide {\n    visibility: hidden;\n}\n\n.slick-vertical .slick-slide {\n    display: block;\n\n    height: auto;\n\n    border: 1px solid transparent;\n}\n\n.slick-arrow.slick-hidden {\n    display: none;\n}\n\n/* Slider */\n\n\n/* Arrows */\n.slick-prev,\n.slick-next {\n    font-size: 0;\n    line-height: 0;\n\n    position: absolute;\n    top: 50%;\n\n    display: none !important;\n\n    width: 20px;\n    height: 20px;\n    padding: 0;\n    -webkit-transform: translate(0, -50%);\n    -ms-transform: translate(0, -50%);\n    transform: translate(0, -50%);\n\n    cursor: pointer;\n\n    color: transparent;\n    border: none;\n    outline: none;\n    background: transparent;\n}\n\n.slick-prev:hover,\n.slick-prev:focus,\n.slick-next:hover,\n.slick-next:focus {\n    color: transparent;\n    outline: none;\n    background: transparent;\n}\n\n.slick-prev:hover:before,\n.slick-prev:focus:before,\n.slick-next:hover:before,\n.slick-next:focus:before {\n    opacity: 1;\n}\n\n.slick-prev.slick-disabled:before,\n.slick-next.slick-disabled:before {\n    opacity: .25;\n}\n\n.slick-prev:before,\n.slick-next:before {\n    font-family: 'slick';\n    font-size: 20px;\n    line-height: 1;\n\n    opacity: .75;\n    color: white;\n\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n}\n\n.slick-prev {\n    left: -25px;\n}\n\n[dir='rtl'] .slick-prev {\n    right: -25px;\n    left: auto;\n}\n\n.slick-prev:before {\n    content: '\u2190';\n}\n\n[dir='rtl'] .slick-prev:before {\n    content: '\u2192';\n}\n\n.slick-next {\n    right: -25px;\n}\n\n[dir='rtl'] .slick-next {\n    right: auto;\n    left: -25px;\n}\n\n.slick-next:before {\n    content: '\u2192';\n}\n\n[dir='rtl'] .slick-next:before {\n    content: '\u2190';\n}\n\n/* Dots */\n.slick-dotted.slick-slider {\n    margin-bottom: 30px;\n}\n\n.slick-dots {\n    position: absolute;\n    bottom: .22rem;\n    right: .3rem;\n    display: block;\n\n    padding: 0;\n    margin: 0;\n\n    list-style: none;\n\n\n}\n\n.slick-dots li {\n    position: relative;\n\n    display: inline-block;\n\n    width: .1rem;\n    height: .1rem;\n    margin: 0 .06rem;\n    padding: 0;\n\n    cursor: pointer;\n}\n\n.slick-dots li button {\n    font-size: 0;\n    line-height: 0;\n\n    display: block;\n\n    width: .1rem;\n    height: .1rem;\n    \n\n    cursor: pointer;\n\n    color: transparent;\n    border: 0;\n    outline: none;\n    background: transparent;\n}\n\n.slick-dots li button:hover,\n.slick-dots li button:focus {\n    outline: none;\n}\n\n.slick-dots li button:hover:before,\n.slick-dots li button:focus:before {\n    opacity: 1;\n}\n\n.slick-dots li button:before {\n    font-family: 'slick';\n    font-size: .3rem;\n    line-height: 20px;\n\n    position: absolute;\n    top: 0;\n    left: 0;\n\n    width: .1rem;\n    height: .1rem;\n    z-index: 100;\n\n    content: '\u2022';\n    text-align: center;\n\n    opacity: 0.2;\n    color: #ffffff;\n\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n}\n\n.slick-dots li.slick-active button:before {\n    opacity: 1;\n    color: #ffffff;\n}\n",
            ]))
        ),
        ye = function (n) {
          n && Object(D.c)(n);
        },
        _e = function (n) {
          var e = n.list;
          console.log(e);
          return (
            (null === e || void 0 === e ? void 0 : e.length) &&
            Object(A.jsx)(we, {
              children: Object(A.jsx)("div", {
                className: "slider",
                children: Object(A.jsx)(
                  R.a,
                  Object($.a)(
                    Object($.a)(
                      {},
                      {
                        dots: !0,
                        infinite: !0,
                        speed: 1e3,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        autoplay: !0,
                      }
                    ),
                    {},
                    {
                      children: e.map(function (n, e) {
                        var t = Object(T.a)(n, 2),
                          i = t[0],
                          r = t[1];
                        return Object(A.jsx)(
                          "div",
                          {
                            className: "slideItem",
                            children: Object(A.jsx)("a", {
                              onClick: function () {
                                return ye(r);
                              },
                              className: "slideCont",
                              children: Object(A.jsx)("img", {
                                alt: "banner",
                                src: i,
                              }),
                            }),
                          },
                          "slider" + e
                        );
                      }),
                    }
                  )
                ),
              }),
            })
          );
        },
        ze = function (n) {
          Object(D.c)(n);
        },
        Ne = function (n) {
          var e = Object(C.useState)(""),
            t = Object(T.a)(e, 2),
            i = t[0],
            r = t[1],
            a = Object(C.useState)(""),
            c = Object(T.a)(a, 2),
            o = c[0],
            s = c[1],
            l = Object(C.useState)(""),
            d = Object(T.a)(l, 2),
            b = d[0],
            m = d[1],
            u = Object(C.useState)(""),
            f = Object(T.a)(u, 2),
            j = f[0],
            p = f[1],
            h = Object(C.useState)(""),
            g = Object(T.a)(h, 2),
            x = g[0],
            O = g[1],
            k = Object(C.useState)([]),
            v = Object(T.a)(k, 2),
            w = v[0],
            y = v[1],
            _ = Object(C.useState)([]),
            z = Object(T.a)(_, 2),
            N = z[0],
            S = z[1];
          return (
            Object(C.useEffect)(
              function () {
                Object(I.a)(
                  E.a.mark(function e() {
                    var t, i, a;
                    return E.a.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (t = Object(U.b)(n.json)),
                              (e.next = 3),
                              Object(D.a)(t)
                            );
                          case 3:
                            (i = e.sent), (a = i.data), r(a.model);
                          case 6:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                )();
              },
              [n]
            ),
            Object(C.useEffect)(
              function () {
                i &&
                  Object(I.a)(
                    E.a.mark(function n() {
                      var e, t, r;
                      return E.a.wrap(function (n) {
                        for (;;)
                          switch ((n.prev = n.next)) {
                            case 0:
                              return (
                                (n.next = 2),
                                Object(D.d)(
                                  "https://ssdp.haier.net/openServerInf/oneCode/mainPage?productName=" +
                                    i
                                )
                              );
                            case 2:
                              (e = n.sent),
                                (t = e.data),
                                (r = t.data),
                                y(r.functionList),
                                S(Object.entries(r.bannerImages)),
                                s(r.title),
                                m(r.videoImage),
                                p(r.videoJumpUrl),
                                O(r.qaJumpUrl);
                            case 11:
                            case "end":
                              return n.stop();
                          }
                      }, n);
                    })
                  )();
              },
              [i]
            ),
            Object(A.jsx)(je, {
              children: Object(A.jsxs)("div", {
                className: "template-bg",
                children: [
                  Object(A.jsx)("div", {
                    className: "haierrsq-title",
                    children: o,
                  }),
                  Object(A.jsxs)(
                    "div",
                    {
                      className: "haierrsq-wrap",
                      children: [
                        b &&
                          Object(A.jsxs)("a", {
                            onClick: function () {
                              return ze(j);
                            },
                            className: "haierrsq-wrap_videoDiv",
                            children: [
                              Object(A.jsx)("img", {
                                className: "haierrsq-wrap_videoImg",
                                src: b,
                                alt: "bottom",
                              }),
                              Object(A.jsx)("img", {
                                className: "haierrsq-wrap_playImg",
                                src: xe,
                                alt: "play",
                              }),
                            ],
                          }),
                        N && 0 < N.length && Object(A.jsx)(_e, { list: N }),
                        w && Object(A.jsx)(ve, { tags: w }),
                      ],
                    },
                    Object(Z.b)(10)
                  ),
                  x &&
                    Object(A.jsxs)("div", {
                      className: "haierrsq-bottom",
                      children: [
                        Object(A.jsx)("a", {
                          onClick: function () {
                            return ze(x);
                          },
                          children: Object(A.jsx)("img", {
                            src: ge,
                            alt: "bottom",
                          }),
                        }),
                        Object(A.jsx)("div", { className: "block" }),
                      ],
                    }),
                ],
              }),
            })
          );
        },
        Se = B.a.section(
          N ||
            (N = Object(F.a)([
              "\n    text-align: center;\n    margin: .5rem 0;\n    img {\n        width: 2.5rem;\n    }\n",
            ]))
        ),
        Ce = function (n) {
          var e = n.data,
            t = 0,
            i = !1,
            r = function () {
              return (
                clearTimeout(t),
                i &&
                  ((i = !1),
                  Object(J.a)({
                    uid: Object(W.a)("uid"),
                    model: Object(W.a)("model"),
                    cid: Object(W.a)("cid"),
                    bid: Object(W.a)("bid"),
                    eid: Object(W.a)("eid"),
                    url: Object(U.a)(),
                    level: Object(W.a)("level"),
                    channel: Object(K.a)(),
                    client: Object(G.a)(),
                    page: "p1",
                    method: "m3",
                    act: "a013qrcode",
                  })),
                !1
              );
            };
          return Object(A.jsx)(A.Fragment, {
            children: Object(A.jsx)(Se, {
              onTouchStart: function () {
                return (
                  (t = setTimeout(function () {
                    i = !0;
                  }, 500)),
                  !1
                );
              },
              onTouchEnd: function () {
                return r();
              },
              children: Object(A.jsx)("img", { src: e.img, alt: "qrcode" }),
            }),
          });
        },
        qe = B.a.section(
          S ||
            (S = Object(F.a)([
              "\n    position: fixed;\n    bottom: 1.30rem;\n    right: 0.06rem;\n    z-index: 2;\n    img {\n        width: 1.5rem;\n    }\n",
            ]))
        ),
        Ee = function (n) {
          var e = n.data,
            t = function () {
              Object(J.a)({
                uid: Object(W.a)("uid"),
                model: Object(W.a)("model"),
                cid: Object(W.a)("cid"),
                bid: Object(W.a)("bid"),
                eid: Object(W.a)("eid"),
                url: Object(U.a)(),
                level: Object(W.a)("level"),
                channel: Object(K.a)(),
                client: Object(G.a)(),
                page: "p1",
                method: "m3",
                act: "a013xydcj",
              }),
                (window.location.href = e.link);
            };
          return Object(A.jsx)(A.Fragment, {
            children: Object(A.jsx)(qe, {
              onClick: function () {
                return t();
              },
              children: Object(A.jsx)("img", { src: e.img, alt: "actBtn" }),
            }),
          });
        },
        Ie = function (n) {
          return n.map(function (n, e) {
            switch (n.label) {
              case "helinfo":
                return Object(A.jsx)(fn, { json: n.json }, e);
              case "mihelinfo":
                return Object(A.jsx)(xn, { json: n.json }, e);
              case "brandinfo1":
                return Object(A.jsx)(En, { json: n.json }, e);
              case "brandinfo4":
                return Object(A.jsx)(Yn, { json: n.json }, e);
              case "hprop":
                return Object(A.jsx)(L, { json: n.json }, e);
              case "adTag":
                return Object(A.jsx)(Q, { json: n.json }, e);
              case "hCarbonTag":
                return Object(A.jsx)(tn, { json: n.json }, e);
              case "hecs":
                return Object(A.jsx)(cn, { json: n.json }, e);
              case "switchTag01":
                return Object(A.jsx)(sn, { json: n.json }, e);
              case "mi":
                return Object(A.jsx)(fe, { json: n.json }, e);
              case "haierrsq":
                return Object(A.jsx)(Ne, { json: n.json }, e);
              case "qrcodeTag":
                return Object(A.jsx)(Ce, { data: n.data }, e);
              case "xydcjActBtn":
                return Object(A.jsx)(Ee, { data: n.data }, e);
              case "hrecHaier":
                return Object(A.jsx)(Vn, { json: n.json }, e);
              case "defTag":
                return Object(A.jsx)(Dn, { json: n.json }, e);
              default:
                return Object(A.jsx)(Wn, {}, e);
            }
          });
        };
    },
    25: function (n, e, t) {
      "use strict";
      var i,
        r = t(4),
        a = t.n(r),
        c = t(14),
        o = t(10),
        s = t(3),
        l = t(2),
        d = t(8),
        b = t(9).a.nav(
          i ||
            (i = Object(d.a)([
              "\n    height: .96rem;\n    background: #fff;\n    display: flex;\n    align-items: center;\n    box-sizing: content-box;\n    padding:0 .3rem;\n    a{\n        font-size: .3rem;\n        font-weight: 400;\n        text-align: center;\n        color: #434669;\n        margin-right: .33rem;\n        display: flex;\n        height: 100%;\n        align-items: center;\n        border-bottom: .07rem solid #fff;\n        img{\n            width: 1.3rem;\n            height: .37rem;\n        }\n    }\n    a.active{\n        border-bottom:.07rem solid #434669 ;\n    }\n",
            ]))
        ),
        m = t(7),
        u = t(1),
        f = t(12),
        j = t(5),
        p = t(11),
        h = t(19),
        g = t(6),
        x = t(0);
      e.a = function (n) {
        var e = n.navDatas,
          t = Object(l.useState)([]),
          i = Object(s.a)(t, 2),
          r = i[0],
          d = i[1];
        return (
          Object(l.useEffect)(function () {
            e &&
              Object(o.a)(
                a.a.mark(function n() {
                  var t;
                  return a.a.wrap(function (n) {
                    for (;;)
                      switch ((n.prev = n.next)) {
                        case 0:
                          (t = []),
                            e.forEach(function (n) {
                              var e = n.url,
                                i = e.match(/[^|]+(?=})/g)[0],
                                r = Object(j.b)(e);
                              r &&
                                t.push(
                                  Object(c.a)(
                                    Object(c.a)({}, n),
                                    {},
                                    { url: r, id: i }
                                  )
                                );
                            }),
                            d(t);
                        case 3:
                        case "end":
                          return n.stop();
                      }
                  }, n);
                })
              )();
          }, []),
          r.length > 0 &&
            Object(x.jsx)(b, {
              children: r.map(function (n) {
                return Object(x.jsx)(
                  "a",
                  {
                    className: n.selected ? "active" : "",
                    onClick: function () {
                      var e;
                      (e = n.id),
                        Object(f.a)({
                          uid: Object(u.a)("uid"),
                          model: Object(u.a)("model"),
                          cid: Object(u.a)("cid"),
                          bid: Object(u.a)("bid"),
                          eid: Object(u.a)("eid"),
                          url: Object(j.a)(),
                          level: Object(u.a)("level"),
                          channel: Object(p.a)(),
                          client: Object(g.a)(),
                          page: Object(h.c)(),
                          method: "m3",
                          act: "a013navi_" + e,
                        }),
                        Object(m.c)(n.url);
                    },
                    children: n.img
                      ? Object(x.jsx)("img", { src: n.img, alt: n.id })
                      : n.name,
                  },
                  n.id
                );
              }),
            })
        );
      };
    },
    26: function (n, e, t) {
      "use strict";
      var i = t(3),
        r = t(2),
        a = t(0),
        c = function (n) {
          var e = n.count,
            t = n.shutdown,
            c = Object(r.useState)(e),
            o = Object(i.a)(c, 2),
            s = o[0],
            l = o[1];
          return (
            Object(r.useEffect)(
              function () {
                var n;
                return (
                  0 !== s
                    ? (n = setInterval(function () {
                        l(function (n) {
                          return n - 1;
                        });
                      }, 1e3))
                    : t(),
                  function () {
                    n && clearInterval(n);
                  }
                );
              },
              [s, t]
            ),
            Object(a.jsxs)("span", {
              onClick: function () {
                t();
              },
              children: ["\u8df3\u8fc7\xa0", s, "s"],
            })
          );
        };
      e.a = function (n) {
        var e = n.wpData,
          t = n.count,
          i = n.setOpen;
        return Object(a.jsx)(a.Fragment, {
          children: Object(a.jsxs)("div", {
            className: "openScreen",
            children: [
              Object(a.jsx)("a", {
                href: (null === e || void 0 === e ? void 0 : e.link)
                  ? null === e || void 0 === e
                    ? void 0
                    : e.link
                  : "#!",
                children: Object(a.jsx)("img", {
                  src: null === e || void 0 === e ? void 0 : e.img,
                  alt: "wp",
                }),
              }),
              t &&
                Object(a.jsx)(c, {
                  count: t,
                  shutdown: function () {
                    i(!1);
                  },
                }),
            ],
          }),
        });
      };
    },
    29: function (n, e, t) {},
    5: function (n, e, t) {
      "use strict";
      t.d(e, "b", function () {
        return o;
      }),
        t.d(e, "a", function () {
          return s;
        });
      var i = t(7),
        r = t(6),
        a = t(1),
        c = {
          url: function (n) {
            var e = n.match(/\$\{url\|(.+?)\}/);
            if (!e) return n;
            var t = e[0],
              r = e[1],
              a = Object(i.b)(r);
            return n.replace(t, a);
          },
          cookie: function (n) {
            var e = n.match(/\$\{cookie\|(.+?)\}/);
            if (!e) return n;
            var t = e[0],
              i = e[1],
              r = Object(a.a)(i);
            return r ? n.replace(t, r) : "";
          },
          wnw: function (n) {
            var e = n.match(/\$\{wnw\}/);
            if (!e) return n;
            var t = e[0];
            return Object(r.d)() ? n.replace(t, "wx") : n.replace(t, "nonwx");
          },
        },
        o = function (n) {
          for (var e in c) n = c[e](n);
          return n;
        },
        s = function () {
          var n = window.location.href;
          if (!l(n)) return n;
          var e = n.length;
          return n.substr(0, e - 1);
        },
        l = function (n) {
          return /(.+(?=[#]$))/g.test(n);
        };
    },
    59: function (n, e, t) {
      n.exports = t(124);
    },
    6: function (n, e, t) {
      "use strict";
      t.d(e, "d", function () {
        return i;
      }),
        t.d(e, "a", function () {
          return r;
        }),
        t.d(e, "b", function () {
          return a;
        }),
        t.d(e, "c", function () {
          return c;
        });
      var i = function () {
          return (
            -1 !== navigator.userAgent.toLowerCase().indexOf("micromessenger")
          );
        },
        r = function () {
          return a() ? "local" : i() ? "wx" : "nonwx";
        },
        a = function () {
          return !1;
        },
        c = function () {
          return !0;
        };
    },
    7: function (n, e, t) {
      "use strict";
      t.d(e, "a", function () {
        return a;
      }),
        t.d(e, "d", function () {
          return c;
        }),
        t.d(e, "b", function () {
          return o;
        }),
        t.d(e, "c", function () {
          return s;
        });
      var i = t(13),
        r = t.n(i),
        a = function (n) {
          return r()({ url: n + "?t=" + new Date().getTime(), method: "get" });
        },
        c = function (n) {
          return r()({ url: n, method: "post" });
        },
        o = function (n) {
          var e = new RegExp("(^|&)" + n + "=([^&]*)(&|$)", "i"),
            t = window.location.search.substr(1).match(e);
          return null != t ? unescape(t[2]) : null;
        },
        s = function (n) {
          n && "" !== n && (window.location.href = n);
        };
    },
  },
  [[59, 25, 0, 1]],
]);
//# sourceMappingURL=indexDefault.db48bc02.chunk.js.map
